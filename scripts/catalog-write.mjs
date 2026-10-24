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
import { createServer } from 'vite';
import { fanEventsFor, serviceDb } from './fan-rows.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Optional --metro=<id> for a city build; without it the nightly job covers every city.
const metroFilter = process.argv.find((arg) => arg.startsWith('--metro='))?.slice(8);
const dryRun = process.argv.includes('--dry-run');
/** The feeds that keep listing a game after its day (with its result), so the pass can tell a dropped game from a past one. */
const GAME_FEEDS = ['mlb', 'espn', 'hockeytech', 'sidearm'];
const GAME_FEED_BACK_DAYS = 7;

// The client and the key check live in scripts/fan-rows.mjs since Oct 22, 2026 (the archive step reads fan rows too).
const { db, reason } = serviceDb();
if (!db) {
  if (reason.startsWith('SUPABASE_URL')) {
    console.log(`Catalog write skipped: ${reason}.`);
    process.exit(0);
  }
  console.error(reason);
  process.exit(1);
}
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
  const { loadHockeytechSchedule } = await server.ssrLoadModule('/src/data/sources/hockeytechSource.ts');
  const { seedEvents } = await server.ssrLoadModule('/src/data/sources/seedSource.ts');
  const { loadTicketmasterEvents } = await server.ssrLoadModule('/src/data/sources/ticketmasterSource.ts');
  const { looseVenueMatches } = await server.ssrLoadModule('/src/data/sources/venueMatch.ts');
  const { dropGamesCoveredByFeeds } = await server.ssrLoadModule('/src/data/sources/types.ts');
  const { mergeDuplicates, possibleCopies } = await server.ssrLoadModule('/src/data/dedupe.ts');
  const { loadSidearmSchedule } = await server.ssrLoadModule('/src/data/sources/sidearmSource.ts');
  const { loadJambaseEvents, readJambaseQuota, JAMBASE_METROS } = await server.ssrLoadModule('/src/data/sources/jambaseSource.ts');
  const { fanEventFrom, fanEventId, secondPersonConfirmations } = await server.ssrLoadModule('/src/data/sources/fanSource.ts');
  const tmKey = process.env.TICKETMASTER_API_KEY;
  // JamBase (Kylie, Oct 21, 2026): concerts from the sellers Ticketmaster's feed lacks. Off until the free key is a secret;
  // the quota is read once per run and every city's pull stops while the reserve is left.
  const jbKey = process.env.JAMBASE_API_KEY;
  let jbQuota = null;
  if (jbKey) {
    try {
      jbQuota = await readJambaseQuota(jbKey);
      console.log(`JamBase quota: plan ${jbQuota.plan ?? '?'}, ${jbQuota.usedCalls ?? '?'} used, ${jbQuota.remainingCalls ?? 'unknown'} left this month${jbQuota.overageCalls ? `, ${jbQuota.overageCalls} over` : ''}.`);
    } catch (error) {
      console.log(`JamBase quota could not be read (${error.message}); JamBase skipped tonight.`);
    }
  }
  // SeatGeek (build 5, item 1): shows Ticketmaster misses. Off until Kylie adds the free client id as a secret.
  const { loadSeatgeekEvents, dropShowsTicketmasterHas } = await server.ssrLoadModule('/src/data/sources/seatgeekSource.ts');
  const sgKey = process.env.SEATGEEK_CLIENT_ID;
  if (!sgKey) console.log('SeatGeek: no SEATGEEK_CLIENT_ID, skipped.');
  const { COVERED_METRO_IDS } = await server.ssrLoadModule('/src/config/metros.ts');
  if (metroFilter !== undefined && !COVERED_METRO_IDS.includes(metroFilter)) throw new Error(`Unknown covered metro: ${metroFilter}`);
  const metroIds = COVERED_METRO_IDS.filter((id) => metroFilter === undefined || id === metroFilter);
  const { EXPECTED_DRAWS } = await server.ssrLoadModule('/src/data/expectedDrawIndex.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
  const { teamScheduleFromFeeds } = await server.ssrLoadModule('/src/data/teamSchedule.ts');
  for (const metroId of metroIds) {
  const now = new Date().toISOString();
  const counts = {};
  const todayLocal = new Date().toLocaleDateString('en-CA', { timeZone: METROS[metroId].timeZone });
  // The game feeds are read from a week back, not from today: a game the league drops after its own day (an
  // "if necessary" game once the series ends, a rainout called in the afternoon) then leaves the catalog on the
  // next pass instead of sitting on a past date for good (Kylie, Oct 19, 2026: NLCS Game 5 never happened).
  const floorLocal = new Date(new Date(`${todayLocal}T12:00:00Z`).getTime() - GAME_FEED_BACK_DAYS * 86_400_000).toISOString().slice(0, 10);

  // 1. The catalog: every home game the feeds list from a week back, plus the hand-seeded nights.
  // A feed that fails is carried on without, and its rows already in the catalog are left as they were: the stale-row
  // cleanup below skips a failed feed, since an empty read is not a feed saying the games are gone (gap review G7,
  // Oct 19, 2026: a HockeyTech outage would have cleared the past week's hockey games). MLB and ESPN throw and stop
  // the city's pass, so nothing of theirs is written or deleted that night.
  const failedFeeds = new Set();
  const [mlb, espn, ht, seed, tm, sa] = await Promise.all([
    loadMlbSchedule(metroId, undefined, floorLocal),
    loadEspnSchedule(metroId, floorLocal),
    loadHockeytechSchedule(metroId, floorLocal).catch((error) => {
      failedFeeds.add('hockeytech');
      console.log(`${metroId}: HockeyTech failed (${error.message}); kept the rest, its rows untouched.`);
      return [];
    }),
    seedEvents.catalog(metroId),
    tmKey ? loadTicketmasterEvents(metroId, tmKey) : Promise.resolve({ events: [], unknownVenues: [], bigRoomSpecials: [], droppedAddOns: [], pages: 0 }),
    // The schools' own calendar feeds (Kylie, Oct 21, 2026): a feed that fails is logged inside and costs nothing else.
    loadSidearmSchedule(metroId, floorLocal).catch((error) => {
      failedFeeds.add('sidearm');
      console.log(`${metroId}: school calendars failed (${error.message}); kept the rest, their rows untouched.`);
      return [];
    }),
  ]);
  if (sa.length) console.log(`${metroId}: school calendars ${sa.length} games at rooms on file.`);
  let jbAll = [];
  if (jbKey && jbQuota && JAMBASE_METROS.includes(metroId)) {
    try {
      const pull = await loadJambaseEvents(metroId, jbKey, jbQuota);
      jbAll = pull.events;
      if (pull.quota) jbQuota = { ...jbQuota, remainingCalls: pull.quota.remainingCalls == null ? null : pull.quota.remainingCalls - pull.calls, usedCalls: (pull.quota.usedCalls ?? 0) + pull.calls };
      console.log(pull.skipped ? `${metroId}: JamBase skipped (${pull.skipped}).` : `${metroId}: JamBase ${jbAll.length} concerts at rooms on file, ${pull.calls} calls.`);
    } catch (error) {
      failedFeeds.add('jambase');
      console.log(`${metroId}: JamBase failed (${error.message}); kept the rest, its rows untouched.`);
    }
  }
  const jb = dropShowsTicketmasterHas(jbAll, tm.events);
  if (jbAll.length) console.log(`${metroId}: JamBase ${jb.length} shows Ticketmaster doesn't list (${jbAll.length - jb.length} it does).`);
  // A new source failing must not cost the city its night: log it and carry on without it.
  const sgAll = sgKey
    ? await loadSeatgeekEvents(metroId, sgKey).catch((error) => {
        failedFeeds.add('seatgeek');
        console.log(`${metroId}: SeatGeek failed (${error.message}); kept the rest, its rows untouched.`);
        return [];
      })
    : [];
  const sg = dropShowsTicketmasterHas(sgAll, tm.events);
  if (sgKey) console.log(`${metroId}: SeatGeek ${sg.length} shows Ticketmaster doesn't list (${sgAll.length - sg.length} it does).`);
  if (tmKey) {
    const top = tm.unknownVenues.slice(0, 8).map((v) => `${v.name} (${v.count})`).join(', ');
    // The calls this pass spent (Oct 23, 2026): the key allows 5,000 a day across this pass and the archive's, and the
    // name search for every room without an id grows with the room table.
    console.log(`${metroId}: Ticketmaster ${tm.events.length} listings kept at known venues, ${tm.unknownVenues.reduce((n, v) => n + v.count, 0)} at rooms the table lacks${top ? `: ${top}` : ''}; ${tm.pages} calls.`);
  }
  // Miscellaneous listings at 5,000+ rooms, with the feed's own categories (Kylie, Oct 16): the material for a feed-based
  // add-on rule. "kept" ones are listed at the room's size; "dropped" ones the word filter caught.
  if (tm.bigRoomSpecials?.length) {
    const rows = tm.bigRoomSpecials.map((s) => `${s.dropped ? 'dropped' : 'kept'} "${s.name}" @${s.venueId} [${[s.segment, s.genre, s.subGenre].filter(Boolean).join(' / ')}]`);
    console.log(`${metroId}: ${rows.length} miscellaneous listings at 5,000+ rooms: ${[...new Set(rows)].join('; ')}.`);
  }
  // What the add-on filter dropped (Kylie, Oct 19, 2026: the layered rule), so a wrong drop shows up in the log.
  if (tm.droppedAddOns?.length) {
    const names = [...new Set(tm.droppedAddOns.map((a) => `"${a.name}" @${a.venueId}`))];
    console.log(`${metroId}: ${tm.droppedAddOns.length} add-on listings dropped: ${names.slice(0, 40).join('; ')}${names.length > 40 ? `; and ${names.length - 40} more` : ''}.`);
  }
  // Rooms placed by a relaxed name or by proximity (any seller): a wrong room shows up here, not in the line above.
  if (looseVenueMatches.size) {
    const loose = [...looseVenueMatches].map(([name, m]) => `"${name}" → ${m.venueId} (${m.how}, ${m.count})`).join('; ');
    console.log(`${metroId}: ${looseVenueMatches.size} seller names placed loosely: ${loose}.`);
    looseVenueMatches.clear();
  }
  const eventRow = (e) => ({
    id: e.id,
    // Filed under the pass that fetched it, so one city's stale-row cleanup never deletes another's. A game
    // played in another covered city carries that city in `data.metroId`, and the app reads it there.
    metro_id: metroId,
    date: e.date,
    start: e.start ?? null,
    kind: e.kind,
    title: e.title,
    source_id: e.sourceId,
    captured_at: now,
    data: e,
  });
  // Fan-added events (step 2 of the Add a game / Add a show card, Oct 21, 2026; scripts/fan-rows.mjs since Oct 22):
  // the second-person rule confirms pending rows two unrelated accounts submitted for the same event; confirmed and
  // approved rows become 'fan' events, ranked last so a feed's copy of the same game or show wins; each row records
  // the catalog event it became, which the app uses to link the submitter's plan. A failure here never costs the
  // city its night.
  const fanRead = await fanEventsFor({ db, fns: { fanEventFrom, fanEventId, secondPersonConfirmations }, metroId, floorLocal, todayLocal, now, write: !dryRun });
  if (fanRead.log) console.log(fanRead.log);
  const fan = fanRead.events;
  // A fan show the sellers already list is theirs (the shared one-show key); fan games go through the one-game rule below.
  const fanKept = dropShowsTicketmasterHas(fan.filter((e) => e.kind !== 'game'), [...tm.events, ...sg, ...jb]).concat(fan.filter((e) => e.kind === 'game'));
  const seen = new Set();
  const ours = [...seed, ...mlb, ...espn, ...ht, ...sa, ...tm.events, ...sg, ...jb, ...fanKept].filter((e) => !seen.has(e.id) && seen.add(e.id));
  // Feed games another city's pass filed in this city's rooms (the 49ers at Estadio Banorte sit under the Bay Area's pass,
  // the Longhorns at the Frost Bank Center under Austin's; found Oct 22, 2026, each listed twice): read from the table so
  // the one-game rule drops this pass's seller copy too. They take part in the rule only and are never written here.
  // A failed read costs nothing but the check.
  const elsewhere = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await db.from('events').select('id,data').eq('data->>metroId', metroId).neq('metro_id', metroId).in('source_id', GAME_FEEDS).gte('date', todayLocal).order('id').range(from, from + 999);
    if (error) { console.log(`${metroId}: feed games filed by other passes not read (${error.message}).`); break; }
    elsewhere.push(...data.filter((row) => !seen.has(row.id)).map((row) => row.data));
    if (data.length < 1000) break;
  }
  const elsewhereIds = new Set(elsewhere.map((e) => e.id));
  const keptEvents = dropGamesCoveredByFeeds([...ours, ...elsewhere]).filter((e) => !elsewhereIds.has(e.id));
  const copies = dropGamesCoveredByFeeds(ours).length - keptEvents.length;
  if (copies) console.log(`${metroId}: ${copies} seller games dropped as copies of feed games other passes filed here.`);
  // What still looks doubled after the one-game rule and the app's merge: two sources, one room, one date, starts
  // within 30 minutes (Oct 22, 2026, LAFC vs. Galaxy). Logged only; a pair here is a new seller spelling to teach.
  const doubled = possibleCopies(mergeDuplicates(keptEvents));
  if (doubled.length) console.log(`${metroId}: ${doubled.length} possible copies kept: ${doubled.map(([a, b]) => `${a.date} ${a.place.venueId} "${a.title}" (${a.sourceId}) / "${b.title}" (${b.sourceId})`).join('; ')}`);
  const events = keptEvents.map(eventRow);
  counts.events = await upsert('events', events, 'id');
  // A game the feeds no longer list (postponed, cancelled, moved) leaves the catalog. Seeds stay. The game feeds
  // (MLB, ESPN, HockeyTech) still list last week's games, so their stale rows are cleared from a week back; the
  // sellers drop past listings, so theirs are cleared from today only and past rows stay.
  // Every row this pass kept was just stamped `captured_at: now`, so a stale row is one this city's pass stamped
  // earlier. This relies on `upsert` rewriting every supplied column on conflict (it does: no `ignoreDuplicates`);
  // a kept row that kept its old stamp would be deleted here. (Listing every kept id in the request instead broke on Oct 16, 2026: Los Angeles passed about 670
  // events and the address grew past what Supabase accepts, so no city's catalog was written that night.)
  // A feed that failed tonight is skipped on both deletes (see step 1): its rows keep their old stamp and stay.
  if (!dryRun) {
    const stale = (q, from) => q.eq('metro_id', metroId).gte('date', from).lt('captured_at', now);
    const gameFeeds = GAME_FEEDS.filter((id) => !failedFeeds.has(id));
    const games = await stale(db.from('events').delete({ count: 'exact' }).in('source_id', gameFeeds), floorLocal);
    if (games.error) throw new Error(`events (stale games): ${games.error.message}`);
    const kept = ['seed', ...GAME_FEEDS, ...failedFeeds];
    const rest = await stale(db.from('events').delete({ count: 'exact' }).not('source_id', 'in', `(${kept.map((id) => `"${id}"`).join(',')})`), todayLocal);
    if (rest.error) throw new Error(`events (stale): ${rest.error.message}`);
    counts.events_removed = (games.count ?? 0) + (rest.count ?? 0);
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
      // The app reads only `data` (catalogCache.ts keys it by `metroId|eventId` and takes the capture day and time
      // from it), and a file's forecast rows carry none of the three: until Oct 24, 2026 (build 7.1, M16) every
      // saved verdict was filed under "undefined" and a past day showed a recomputed verdict instead of its saved one.
      // The file's own values go in beside the row; the row's rating is written exactly as it was captured.
      snapshots.push({ metro_id: parsed.metroId, captured_on: parsed.capturedOn, captured_at: parsed.capturedAt, event_id: row.eventId, date: row.date, start: row.start ?? null, data: { metroId: parsed.metroId, capturedOn: parsed.capturedOn, capturedAt: parsed.capturedAt, ...row } });
    }
  }
  counts.schedule_snapshots = await upsert('schedule_snapshots', snapshots, 'metro_id,captured_on,event_id');

  // 5. Expected draws (change rarely; cheap to upsert every night). The past games behind them stay in
  // data/attendance/ in the repo; the database copy was never read and was dropped (Kylie, Oct 15, 2026; migration 0029).
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
