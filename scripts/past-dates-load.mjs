// Loads the games on past dates (before the nightly archive began) so those
// dates get their events and a read, estimated from past schedules
// (docs/product/past-seasons-proposal.md; Kylie, Oct 15, 2026).
//   node scripts/past-dates-load.mjs --metro=la --dates=2026-01-03,2026-01-10 --out=<file.sql>
//   node scripts/past-dates-load.mjs --metro=la --dates-file=<one date a line> --out=<file.sql>
//   node scripts/past-dates-load.mjs --metro=la --teams=ucla-mbb,dodgers --seasons=2022-2026 --out=<file.sql>
// --teams adds every home date of those teams in those seasons (ESPN numbers a winter season by the year it
// ends: 2026 is 2025–26). The options combine. Every other game in the city on each date comes too, so the
// date gets a whole read. Dates the nightly archive covers, and today on, are skipped.
// Reads the MLB and ESPN feeds and writes nothing to the database itself: it writes
// SQL to paste into Supabase's SQL Editor (split into parts of about 1 MB), plus the
// same rows as JSON beside it. Every row is an upsert, so a rerun is safe.
// Scheduled starts only. Scores and announced crowds go to event_results as
// evidence, never into the read. A date with hand-seeded events keeps them: only
// its results are written. A list of dates can be personal; keep it and the output
// outside the repo (e.g. the git-ignored private/ folder).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const metroId = arg('metro');
const out = arg('out');
const datesFile = arg('dates-file');
const teamIds = arg('teams')?.split(',').map((t) => t.trim()).filter(Boolean) ?? [];
const seasonsArg = arg('seasons');
const ISO = /^\d{4}-\d{2}-\d{2}$/;
/** Paste size the SQL Editor takes comfortably. */
const PART_BYTES = 1_000_000;

if (!metroId || !out || (!arg('dates') && !datesFile && teamIds.length === 0) || (teamIds.length > 0 && !/^\d{4}(-\d{4})?$/.test(seasonsArg ?? ''))) {
  console.error('Usage: node scripts/past-dates-load.mjs --metro=<id> [--dates=a,b] [--dates-file=<path>] [--teams=a,b --seasons=YYYY-YYYY] --out=<file.sql>');
  process.exit(1);
}
const [firstSeason, lastSeason = firstSeason] = (seasonsArg ?? '').split('-').map(Number);
const seasons = teamIds.length ? Array.from({ length: lastSeason - firstSeason + 1 }, (_, i) => firstSeason + i) : [];
const raw = [...(datesFile ? (await readFile(datesFile, 'utf8')).split('\n').map((l) => l.replace(/#.*/, '').trim()) : []), ...(arg('dates')?.split(',') ?? [])];
const asked = raw.map((d) => d.trim()).filter(Boolean);
const bad = asked.filter((d) => !ISO.test(d));
if (bad.length) {
  console.error(`Not a date (YYYY-MM-DD): ${bad.join(', ')}`);
  process.exit(1);
}

const sqlText = (s) => (s == null ? 'null' : `'${String(s).replace(/'/g, "''")}'`);
const sqlJson = (o) => `${sqlText(JSON.stringify(o))}::jsonb`;

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let exitCode = 0;
try {
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  if (!METROS[metroId]) throw new Error(`Unknown metro: ${metroId}`);
  const { loadMlbSchedule, loadMlbFinals, mlbHomeDates } = await server.ssrLoadModule('/src/data/sources/mlbSource.ts');
  const { loadEspnPastDates, espnHomeDates } = await server.ssrLoadModule('/src/data/sources/espnSource.ts');
  const { seedEvents } = await server.ssrLoadModule('/src/data/sources/seedSource.ts');
  const { scheduleCoverage } = await server.ssrLoadModule('/src/data/read.ts');

  const fromTeams = [];
  for (const teamId of teamIds) {
    const found = (await espnHomeDates(teamId, seasons)) ?? (await mlbHomeDates(teamId, seasons));
    if (found === null) throw new Error(`No MLB or ESPN feed carries ${teamId}.`);
    console.log(`${teamId}: ${found.length} home dates in ${seasons[0]}–${seasons[seasons.length - 1]}.`);
    fromTeams.push(...found);
  }
  const dates = [...new Set([...asked, ...fromTeams])].sort();
  // Only dates before the nightly archive: from then on the nightly job lists the city.
  const past = dates.filter((d) => scheduleCoverage(metroId, d) === 'reconstructed');
  if (past.length < dates.length) console.log(`Skipped ${dates.length - past.length} date(s) the nightly archive covers, or from today on.`);

  const espn = await loadEspnPastDates(metroId, past);
  const found = [...espn.events];
  const allResults = [...espn.results];
  for (const date of past) {
    found.push(...(await loadMlbSchedule(metroId, date, date)));
    allResults.push(...(await loadMlbFinals(metroId, date, date)));
  }
  // Only this city's games. A team's "home" game in another city (a conference tournament) would be that
  // city's only listing that day and give it a lopsided read.
  const events = found.filter((e) => e.metroId === metroId);
  const here = new Set(events.map((e) => e.id));
  const results = allResults.filter((r) => here.has(r.eventId));
  if (found.length > events.length) console.log(`Left out ${found.length - events.length} game(s) played in another city.`);

  // A hand-seeded date is the whole list for that day (index.ts, preferSeed); its results still attach by building and home side.
  const seeded = new Set();
  for (const date of past) if ((await seedEvents.eventsOn(metroId, date)).length) seeded.add(date);
  const kept = events.filter((e) => !seeded.has(e.date)).sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')));
  results.sort((a, b) => (a.date + a.eventId).localeCompare(b.date + b.eventId));

  const capturedAt = new Date().toISOString();
  const lines = [
    `-- Fan/Friction: games on ${past.length} past date(s) in ${metroId}, from the MLB and ESPN feeds.`,
    `-- Made ${capturedAt.slice(0, 10)} by scripts/past-dates-load.mjs. Paste into Supabase's SQL Editor and Run.`,
    `-- Safe to run more than once: every row is an upsert.${teamIds.length ? ` Includes every home date of ${teamIds.join(', ')} in seasons ${seasons[0]}–${seasons[seasons.length - 1]}.` : ''}`,
    '',
  ];
  for (const e of kept) {
    lines.push(
      'insert into public.events (id, metro_id, date, start, kind, title, source_id, captured_at, data) values (' +
        [sqlText(e.id), sqlText(e.metroId), sqlText(e.date), sqlText(e.start), sqlText(e.kind), sqlText(e.title), sqlText(e.sourceId), sqlText(capturedAt), sqlJson(e)].join(', ') +
        ') on conflict (id) do update set metro_id = excluded.metro_id, date = excluded.date, start = excluded.start, kind = excluded.kind, title = excluded.title, source_id = excluded.source_id, captured_at = excluded.captured_at, data = excluded.data;',
    );
  }
  for (const r of results) {
    lines.push(
      'insert into public.event_results (event_id, metro_id, date, captured_at, data) values (' +
        [sqlText(r.eventId), sqlText(r.metroId), sqlText(r.date), sqlText(r.capturedAt), sqlJson(r)].join(', ') +
        ') on conflict (event_id) do update set metro_id = excluded.metro_id, date = excluded.date, captured_at = excluded.captured_at, data = excluded.data;',
    );
  }
  // Parts of about PART_BYTES, each a whole set of statements, so any part can be pasted alone, in any order.
  const [header, body] = [lines.slice(0, 4), lines.slice(4)];
  const parts = [[]];
  let size = 0;
  for (const line of body) {
    if (size + line.length > PART_BYTES && parts[parts.length - 1].length) {
      parts.push([]);
      size = 0;
    }
    parts[parts.length - 1].push(line);
    size += line.length + 1;
  }
  await mkdir(path.dirname(path.resolve(out)), { recursive: true });
  const base = out.replace(/\.sql$/, '');
  const files = parts.length === 1 ? [out] : parts.map((_, i) => `${base}_part${i + 1}.sql`);
  for (const [i, file] of files.entries()) {
    const note = files.length > 1 ? [`-- Part ${i + 1} of ${files.length}. The parts can run in any order.`] : [];
    await writeFile(file, [...header, ...note, ...parts[i]].join('\n') + '\n');
  }
  await writeFile(base + '.json', JSON.stringify({ schema: 1, metroId, dates: past, capturedAt, events: kept, results }, null, 2) + '\n');

  const byDate = new Map(past.map((d) => [d, 0]));
  for (const e of kept) byDate.set(e.date, (byDate.get(e.date) ?? 0) + 1);
  const empty = [...byDate].filter(([d, n]) => n === 0 && !seeded.has(d)).map(([d]) => d);
  console.log(`${metroId}: ${kept.length} games on ${past.length - seeded.size} dates, ${results.length} results; ${seeded.size} hand-seeded date(s) kept as they are.`);
  if (empty.length) console.log(`No feed game on ${empty.length} date(s): ${empty.join(', ')}`);
  console.log(`Wrote ${files.join(', ')}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
