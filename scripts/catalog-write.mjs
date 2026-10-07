// Writes the catalog to Supabase, the shared truth (docs/archive/proposals/catalog-proposal-oct6.md).
// Runs at the end of the nightly job, after the files are saved:
//   node scripts/catalog-write.mjs
// Needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment (GitHub
// secrets in the job). Without them it says so and exits 0, so the files-only
// path keeps working. Every write is an upsert, so a rerun changes nothing.
// Slice 1: the app does not read these tables yet; it still compiles the files in.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const dryRun = process.argv.includes('--dry-run');

if (!url || !key) {
  console.log('Catalog write skipped: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are not set.');
  process.exit(0);
}

// The key must be one that can write: Supabase's newer "secret" key (sb_secret_…) or the
// older service_role JWT. The public key (sb_publishable_… or an anon JWT) can only read.
function keyKind(k) {
  if (k.startsWith('sb_secret_')) return 'secret';
  if (k.startsWith('sb_publishable_')) return 'publishable (read-only)';
  try {
    return JSON.parse(Buffer.from(k.split('.')[1], 'base64url').toString()).role ?? 'unknown';
  } catch {
    return 'unknown';
  }
}
const kind = keyKind(key);
if (kind !== 'secret' && kind !== 'service_role') {
  console.error(`SUPABASE_SERVICE_ROLE_KEY holds a "${kind}" key, which cannot write. In Supabase: Project Settings → API Keys → a Secret key (sb_secret_…), or the legacy service_role key.`);
  process.exit(1);
}

const db = createClient(url, key, { auth: { persistSession: false } });
const CHUNK = 500;

async function upsert(table, rows, onConflict) {
  if (rows.length === 0) return 0;
  if (dryRun) return rows.length;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const { error } = await db.from(table).upsert(rows.slice(i, i + CHUNK), { onConflict });
    if (error) throw new Error(`${table}: ${error.message}`);
  }
  return rows.length;
}

async function jsonFiles(dir) {
  try {
    return (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  } catch {
    return [];
  }
}

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let exitCode = 0;
try {
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  const { loadMlbSchedule } = await server.ssrLoadModule('/src/data/sources/mlbSource.ts');
  const { loadEspnSchedule } = await server.ssrLoadModule('/src/data/sources/espnSource.ts');
  const { seedEvents } = await server.ssrLoadModule('/src/data/sources/seedSource.ts');
  const { loadTicketmasterEvents } = await server.ssrLoadModule('/src/data/sources/ticketmasterSource.ts');
  const tmKey = process.env.TICKETMASTER_API_KEY;
  const { COVERED_METRO_IDS } = await server.ssrLoadModule('/src/config/metros.ts');
  const { EXPECTED_DRAWS } = await server.ssrLoadModule('/src/data/expectedDrawIndex.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
  const { teamScheduleFromFeeds } = await server.ssrLoadModule('/src/data/teamSchedule.ts');
  for (const metroId of COVERED_METRO_IDS) {
  const now = new Date().toISOString();
  const counts = {};

  // 1. The catalog: every upcoming home game the feeds list, plus the hand-seeded nights.
  const [mlb, espn, seed, tm] = await Promise.all([
    loadMlbSchedule(metroId),
    loadEspnSchedule(metroId),
    seedEvents.catalog(metroId),
    tmKey ? loadTicketmasterEvents(metroId, tmKey) : Promise.resolve({ events: [], unknownVenues: [], pages: 0 }),
  ]);
  if (tmKey) {
    const top = tm.unknownVenues.slice(0, 8).map((v) => `${v.name} (${v.count})`).join(', ');
    console.log(`${metroId}: Ticketmaster ${tm.events.length} listings kept at known venues, ${tm.unknownVenues.reduce((n, v) => n + v.count, 0)} at rooms the table lacks${top ? `: ${top}` : ''}.`);
  }
  const eventRow = (e) => ({
    id: e.id,
    metro_id: e.metroId,
    date: e.date,
    start: e.start ?? null,
    kind: e.kind,
    title: e.title,
    source_id: e.sourceId,
    captured_at: now,
    data: e,
  });
  const seen = new Set();
  const events = [...seed, ...mlb, ...espn, ...tm.events].filter((e) => !seen.has(e.id) && seen.add(e.id)).map(eventRow);
  counts.events = await upsert('events', events, 'id');
  // A game the feeds no longer list (postponed, cancelled, moved) leaves the catalog. Seeds and past dates stay.
  if (!dryRun) {
    const todayLocal = new Date().toLocaleDateString('en-CA', { timeZone: METROS[metroId].timeZone });
    const keep = events.map((e) => e.id);
    const { error, count } = await db
      .from('events')
      .delete({ count: 'exact' })
      .eq('metro_id', metroId)
      .neq('source_id', 'seed')
      .gte('date', todayLocal)
      .not('id', 'in', `(${keep.map((id) => `"${id}"`).join(',')})`);
    if (error) throw new Error(`events (stale): ${error.message}`);
    counts.events_removed = count ?? 0;
  }

  // 2. Results.
  const results = [];
  for (const f of await jsonFiles(path.join(root, 'data', 'results', metroId))) {
    const parsed = JSON.parse(await readFile(path.join(root, 'data', 'results', metroId, f), 'utf8'));
    for (const r of parsed.results ?? []) results.push({ event_id: r.eventId, metro_id: r.metroId, date: r.date, captured_at: r.capturedAt, data: r });
  }
  counts.event_results = await upsert('event_results', results, 'event_id');

  // 3. Weather: every file (upserts are idempotent, and past dates' rows serve stamps and old nights).
  const hours = [];
  const days = [];
  for (const f of await jsonFiles(path.join(root, 'data', 'weather', metroId))) {
    const parsed = JSON.parse(await readFile(path.join(root, 'data', 'weather', metroId, f), 'utf8'));
    for (const r of parsed.rows ?? []) hours.push({ metro_id: r.metroId, venue_id: r.venueId, date: r.date, hour: r.hour, captured_at: r.capturedAt, data: r });
    for (const d of parsed.days ?? []) days.push({ metro_id: d.metroId, date: d.date, captured_at: d.capturedAt, data: d });
  }
  counts.weather_hours = await upsert('weather_hours', hours, 'metro_id,venue_id,date,hour,captured_at');
  counts.weather_days = await upsert('weather_days', days, 'metro_id,date,captured_at');

  // 4. Every schedule snapshot: the read on file per event per capture, for stamps.
  const snapshots = [];
  const snapDir = path.join(root, 'data', 'schedule-archive', metroId);
  for (const f of await jsonFiles(snapDir)) {
    const parsed = JSON.parse(await readFile(path.join(snapDir, f), 'utf8'));
    for (const row of parsed.forecasts ?? []) {
      snapshots.push({ metro_id: parsed.metroId, captured_on: parsed.capturedOn, captured_at: parsed.capturedAt, event_id: row.eventId, date: row.date, start: row.start ?? null, data: row });
    }
  }
  counts.schedule_snapshots = await upsert('schedule_snapshots', snapshots, 'metro_id,captured_on,event_id');

  // 5. Past attendance and expected draws (change rarely; cheap to upsert every night).
  // One row per team per date; a doubleheader is two games on that row.
  const byTeamDate = new Map();
  for (const f of await jsonFiles(path.join(root, 'data', 'attendance', metroId))) {
    const parsed = JSON.parse(await readFile(path.join(root, 'data', 'attendance', metroId, f), 'utf8'));
    for (const g of parsed.games ?? []) {
      const k = `${parsed.teamId}|${g.date}`;
      if (!byTeamDate.has(k)) byTeamDate.set(k, { metro_id: metroId, team_id: parsed.teamId, date: g.date, data: { games: [] } });
      byTeamDate.get(k).data.games.push(g);
    }
  }
  const attendance = [...byTeamDate.values()];
  counts.attendance = await upsert('attendance', attendance, 'metro_id,team_id,date');
  // Keyed by building since Oct 7, 2026 (supabase/migrations/0009). Until that SQL is run
  // the table has no venue_id: skip it and say so; the app falls back to the built-in rows.
  // The city's rows are replaced, not merged, so a bucket that no longer has 3 games goes away.
  const draws = EXPECTED_DRAWS.filter((r) => r.metroId === metroId).map((r) => ({ metro_id: r.metroId, team_id: r.teamId, venue_id: r.venueId, day_class: r.dayClass, month: r.month ?? 0, data: r }));
  const probe = await db.from('expected_draws').select('venue_id').limit(1);
  if (probe.error) {
    console.warn(`expected_draws skipped: ${probe.error.message}. Run supabase/migrations/0009_expected_draws_by_venue.sql in Supabase.`);
    counts.expected_draws = 0;
  } else {
    if (!dryRun) {
      const { error } = await db.from('expected_draws').delete().eq('metro_id', metroId);
      if (error) throw new Error(`expected_draws: ${error.message}`);
    }
    counts.expected_draws = await upsert('expected_draws', draws, 'metro_id,team_id,venue_id,day_class,month');
  }

  // 6. Team schedules, home and away (supabase/migrations/0010). The feeds answer the
  // job but not a phone's browser (ESPN sends no CORS header), so a team's page reads this.
  const probeTeams = await db.from('team_schedules').select('team_id').limit(1);
  if (probeTeams.error) {
    console.warn(`team_schedules skipped: ${probeTeams.error.message}. Run supabase/migrations/0010_team_schedules.sql in Supabase.`);
    counts.team_schedules = 0;
  } else {
    const teamRows = [];
    for (const team of Object.values(TEAMS).filter((t) => t.metroId === metroId)) {
      const games = await teamScheduleFromFeeds(team.id).catch(() => null);
      if (games && games.length > 0) teamRows.push({ team_id: team.id, metro_id: metroId, captured_at: now, data: { games } });
    }
    counts.team_schedules = await upsert('team_schedules', teamRows, 'team_id');
  }

  const summary = Object.entries(counts).map(([t, n]) => `${t} ${n}`).join(', ');
  console.log(`${dryRun ? 'Would write' : 'Wrote'} ${metroId} to Supabase: ${summary}.`);
  }
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
