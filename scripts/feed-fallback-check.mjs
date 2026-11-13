// The nightly's feed fallback (Kylie, Nov 13, 2026): a server error from ESPN is asked again twice; a team whose
// schedule still fails keeps the rows the last saved snapshot had for it, the city still saves, and the source line
// names the stand-in. Every team failing, or no earlier snapshot, still fails the city. A 404 is neither retried nor
// a failure. The results read drops only the failed team's finals. The app's loose read never waits on a bad answer.
// Runs against a fake fetch, no network. Usage: node scripts/feed-fallback-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failed = false;
const check = (ok, what) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${what}`);
  if (!ok) failed = true;
};

// The fake feed: Detroit's ESPN teams. Michigan hockey (id 130, mens-college-hockey) answers 500 every time; the Red
// Wings (hockey/nhl) answer 500 twice, then a schedule; everyone else answers a schedule; a season query that team
// does not have answers 404. The schedule is one home game on `gameDate`.
const hits = new Map();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Detroit' });
const gameDate = new Date(Date.now() + 3 * 86_400_000).toLocaleDateString('en-CA', { timeZone: 'America/Detroit' });
const detroitVenue = { 'hockey/nhl/teams/5': 'Little Caesars Arena', 'basketball/nba/teams/8': 'Little Caesars Arena', 'football/nfl/teams/8': 'Ford Field' };
const originalFetch = globalThis.fetch;
// The retry pauses are real (a second, then two), so the run takes a few seconds; the count of calls proves the retry.
const fakeFetch = async (url) => {
  const u = String(url);
  hits.set(u, (hits.get(u) ?? 0) + 1);
  // MLB (the Tigers) answers an empty schedule; the school calendars answer 404, which that source logs and tolerates.
  if (u.startsWith('https://statsapi.mlb.com/')) return new Response(JSON.stringify({ dates: [] }), { status: 200, headers: { 'content-type': 'application/json' } });
  const m = u.match(/sports\/([^/]+\/[^/]+)\/teams\/(\d+)\/schedule(\?.*)?$/);
  if (!m) return new Response('not found', { status: 404 });
  const key = `${m[1]}/teams/${m[2]}`;
  const query = m[3] ?? '';
  if (key === 'hockey/mens-college-hockey/teams/130') return new Response('boom', { status: 500 });
  if (key === 'hockey/nhl/teams/5' && hits.get(u) <= 2) return new Response('boom', { status: 500 });
  if (query === '?seasontype=3') return new Response('no such season', { status: 404 });
  if (query !== '') return new Response(JSON.stringify({ events: [] }), { status: 200, headers: { 'content-type': 'application/json' } });
  const venue = detroitVenue[key];
  if (!venue) return new Response(JSON.stringify({ events: [] }), { status: 200, headers: { 'content-type': 'application/json' } });
  const game = {
    id: `9${m[2]}001`,
    date: `${gameDate}T00:30Z`,
    seasonType: { abbreviation: 'reg' },
    competitions: [
      {
        venue: { fullName: venue },
        status: { type: { name: 'STATUS_SCHEDULED' } },
        timeValid: true,
        broadcasts: [],
        competitors: [
          { homeAway: 'home', team: { id: m[2], displayName: 'Home Team', shortDisplayName: 'Home', abbreviation: 'HOM' } },
          { homeAway: 'away', team: { id: '999', displayName: 'Away Team', shortDisplayName: 'Away', abbreviation: 'AWY' } },
        ],
      },
    ],
  };
  return new Response(JSON.stringify({ events: [game] }), { status: 200, headers: { 'content-type': 'application/json' } });
};

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
globalThis.fetch = fakeFetch;
try {
  const espn = await server.ssrLoadModule('/src/data/sources/espnSource.ts');

  // 1. The tolerant schedule read: the failed team is reported, the rest are intact, the 500 was asked three times.
  const read = await espn.loadEspnScheduleTolerant('detroit');
  check(read.failed.length === 1 && read.failed[0].teamId === 'michigan-mhockey' && /answered 500/.test(read.failed[0].reason), 'one failed team, Michigan hockey, with the feed\'s answer as the reason');
  const plainUrl = 'https://site.api.espn.com/apis/site/v2/sports/hockey/mens-college-hockey/teams/130/schedule';
  check(hits.get(plainUrl) === 3, `the 500 schedule was asked three times (${hits.get(plainUrl)})`);
  const wingsUrl = 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/5/schedule';
  check(hits.get(wingsUrl) === 3 && read.events.some((e) => e.teams?.home === 'red-wings'), 'two 500s then a schedule: the Red Wings\' game is in, read on the third try');
  const pistonsUrl = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/8/schedule';
  check(hits.get(`${pistonsUrl}?seasontype=3`) === 1, 'a 404 is asked once and is not a failure');
  check(read.events.some((e) => e.teams?.home === 'pistons') && read.events.some((e) => e.teams?.home === 'lions'), 'the other teams\' games are in');
  check(read.events.every((e) => e.teams?.home !== 'michigan-mhockey'), 'nothing of the failed team\'s is in the fresh read');

  // 2. The strict read still throws on any failure; the loose (app) read gives an empty feed and never retries.
  let threw = false;
  try {
    await espn.loadEspnSchedule('detroit');
  } catch {
    threw = true;
  }
  check(threw, 'the plain strict read still throws when a team failed');
  const before = hits.get(plainUrl);
  const loose = await espn.espnEvents.catalog('detroit');
  check(hits.get(plainUrl) === before + 1 && Array.isArray(loose), `the app's read asks the 500 once, no retry (${hits.get(plainUrl) - before})`);

  // 3. The archive: the failed team's rows come from the earlier snapshot, the source line names it, the city saves.
  const archive = await server.ssrLoadModule('/src/data/scheduleArchive.ts');
  const carried = {
    id: `${gameDate}-espn-michigan-mhockey-401`,
    metroId: 'detroit',
    date: gameDate,
    start: '19:00',
    kind: 'game',
    title: 'Wolverines vs. Spartans',
    place: { type: 'venue', venueId: 'yost-ice-arena' },
    audience: { domain: 'sports', sport: 'hockey' },
    teams: { home: 'michigan-mhockey', away: 'spartans', awayOpponent: 'spartans' },
    crowd: [],
    sourceId: 'espn',
  };
  const stale = { ...carried, id: `2020-01-01-espn-michigan-mhockey-1`, date: '2020-01-01' };
  const other = { ...carried, id: `${gameDate}-espn-pistons-77`, teams: { home: 'pistons', away: 'x' }, title: 'Pistons vs. X' };
  const previous = { capturedOn: '2026-11-10', events: [carried, stale, other] };
  const snapshot = await archive.collectScheduleArchive('detroit', new Date(), { previous });
  const ids = new Set(snapshot.events.map((e) => e.id));
  check(ids.has(carried.id), 'the failed team\'s game is carried from the earlier snapshot');
  check(!ids.has(stale.id), 'a carried row outside the window is dropped by the window');
  check(!ids.has(other.id), 'an earlier row of a team that read fine tonight is not carried');
  const line = snapshot.sources.find((s) => s.id === 'espn');
  check(line?.fallback?.from === '2026-11-10' && line.fallback.teams.join() === 'michigan-mhockey' && /500/.test(line.fallback.reasons[0]), 'the ESPN source line names the stand-in: from 2026-11-10, Michigan hockey, the feed\'s answer');
  check(snapshot.events.some((e) => e.teams?.home === 'red-wings') && snapshot.events.some((e) => e.teams?.home === 'pistons'), 'the fresh teams\' games are in the snapshot');

  // 4. No earlier snapshot: the city fails as before.
  threw = false;
  try {
    await archive.collectScheduleArchive('detroit', new Date(), {});
  } catch (err) {
    threw = /no earlier snapshot/.test(err.message) && /Nothing was saved/.test(err.message);
  }
  check(threw, 'with no earlier snapshot the city fails, "Nothing was saved"');

  // 5. Every team failing throws: a city with one ESPN team whose feed is down has nothing fresh.
  const everyFail = globalThis.fetch;
  globalThis.fetch = async () => new Response('down', { status: 503 });
  threw = false;
  try {
    await espn.loadEspnScheduleTolerant('detroit');
  } catch (err) {
    threw = /503/.test(err.message);
  }
  check(threw, 'every team failing throws');
  globalThis.fetch = everyFail;

  // 6. The results read: the failed team's finals wait; the rest are read.
  const results = await server.ssrLoadModule('/src/data/sources/results.ts');
  const finals = await results.collectResults('detroit');
  check(finals.failed.length === 1 && finals.failed[0].teamId === 'michigan-mhockey', 'the results pass lists Michigan hockey as waiting and carries on');
  check(Array.isArray(finals.rows), 'the results rows came back');
  check(today <= gameDate, 'the fake game is ahead of today');
} finally {
  globalThis.fetch = originalFetch;
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
