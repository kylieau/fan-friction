// Collects announced attendance for past home games of the Los Angeles teams,
// from MLB's box scores and ESPN's past-season schedules (both free, no key).
// One file per team under data/attendance/la/. Run now and then, not nightly:
//   node scripts/attendance-collect.mjs            (all teams, recent seasons)
//   node scripts/attendance-collect.mjs dodgers    (one team)
// Every figure is the league's announced count (tickets distributed, for MLB
// and the NFL). Nothing here is invented; a game without a count is skipped.
// The review's calibration plan (docs/formula-review-response.md §11).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_METRO = 'la';
/** Local dates and starts are each city's own clock (a 7 pm game in New York is 19:00, not 16:00). */
const ZONE_BY_METRO = { la: 'America/Los_Angeles', 'san-diego': 'America/Los_Angeles', seattle: 'America/Los_Angeles', 'new-york': 'America/New_York' };
const UA = { 'User-Agent': 'Mozilla/5.0 (fan-friction attendance collector)' };

/** MLB seasons are calendar years. ESPN seasons are the year the season ends (2026 = 2025-26) for winter sports. */
const MLB_TEAMS = [
  { teamId: 'dodgers', mlbId: 119, venueId: 'dodger-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'angels', mlbId: 108, venueId: 'angel-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'padres', mlbId: 135, venueId: 'petco-park', metroId: 'san-diego', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'mariners', mlbId: 136, venueId: 't-mobile-park', metroId: 'seattle', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'yankees', mlbId: 147, venueId: 'yankee-stadium', metroId: 'new-york', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'mets', mlbId: 121, venueId: 'citi-field', metroId: 'new-york', seasons: [2022, 2023, 2024, 2025, 2026] },
];
const ESPN_TEAMS = [
  { teamId: 'lakers', path: 'basketball/nba', espnId: '13', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'clippers', path: 'basketball/nba', espnId: '12', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'kings', path: 'hockey/nhl', espnId: '8', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ducks', path: 'hockey/nhl', espnId: '25', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'galaxy', path: 'soccer/usa.1', espnId: '187', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'lafc', path: 'soccer/usa.1', espnId: '18966', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'angel-city', path: 'soccer/usa.nwsl', espnId: '21422', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'rams', path: 'football/nfl', espnId: '14', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'chargers', path: 'football/nfl', espnId: '24', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'usc-football', path: 'football/college-football', espnId: '30', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'ucla-football', path: 'football/college-football', espnId: '26', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'usc-mbb', path: 'basketball/mens-college-basketball', espnId: '30', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ucla-mbb', path: 'basketball/mens-college-basketball', espnId: '26', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'usc-wbb', path: 'basketball/womens-college-basketball', espnId: '30', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ucla-wbb', path: 'basketball/womens-college-basketball', espnId: '26', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'san-diego-fc', metroId: 'san-diego', path: 'soccer/usa.1', espnId: '22529', seasons: [2025] },
  { teamId: 'wave', metroId: 'san-diego', path: 'soccer/usa.nwsl', espnId: '21423', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'sdsu-football', metroId: 'san-diego', path: 'football/college-football', espnId: '21', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sdsu-mbb', metroId: 'san-diego', path: 'basketball/mens-college-basketball', espnId: '21', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sdsu-wbb', metroId: 'san-diego', path: 'basketball/womens-college-basketball', espnId: '21', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'seahawks', metroId: 'seattle', path: 'football/nfl', espnId: '26', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'kraken', metroId: 'seattle', path: 'hockey/nhl', espnId: '124292', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sounders', metroId: 'seattle', path: 'soccer/usa.1', espnId: '9726', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'reign', metroId: 'seattle', path: 'soccer/usa.nwsl', espnId: '15363', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'uw-football', metroId: 'seattle', path: 'football/college-football', espnId: '264', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'uw-mbb', metroId: 'seattle', path: 'basketball/mens-college-basketball', espnId: '264', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uw-wbb', metroId: 'seattle', path: 'basketball/womens-college-basketball', espnId: '264', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'knicks', metroId: 'new-york', path: 'basketball/nba', espnId: '18', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'nets', metroId: 'new-york', path: 'basketball/nba', espnId: '17', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'liberty', metroId: 'new-york', path: 'basketball/wnba', espnId: '9', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ny-rangers', metroId: 'new-york', path: 'hockey/nhl', espnId: '13', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'islanders', metroId: 'new-york', path: 'hockey/nhl', espnId: '12', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'devils', metroId: 'new-york', path: 'hockey/nhl', espnId: '11', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ny-giants', metroId: 'new-york', path: 'football/nfl', espnId: '19', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'ny-jets', metroId: 'new-york', path: 'football/nfl', espnId: '20', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'nycfc', metroId: 'new-york', path: 'soccer/usa.1', espnId: '17606', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'red-bulls', metroId: 'new-york', path: 'soccer/usa.1', espnId: '190', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'gotham', metroId: 'new-york', path: 'soccer/usa.nwsl', espnId: '15364', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'stjohns-mbb', metroId: 'new-york', path: 'basketball/mens-college-basketball', espnId: '2599', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'seton-hall-mbb', metroId: 'new-york', path: 'basketball/mens-college-basketball', espnId: '2550', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'columbia-football', metroId: 'new-york', path: 'football/college-football', espnId: '171', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'stony-brook-football', metroId: 'new-york', path: 'football/college-football', espnId: '2619', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'fordham-football', metroId: 'new-york', path: 'football/college-football', espnId: '2230', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
];

/** ESPN gives venue names. Only home games in buildings the app knows are kept. */
const VENUE_BY_NAME = {
  'crypto.com arena': 'crypto-com-arena',
  'intuit dome': 'intuit-dome',
  'sofi stadium': 'sofi-stadium',
  'dignity health sports park': 'dignity-health-sports-park',
  'los angeles memorial coliseum': 'coliseum',
  'rose bowl': 'rose-bowl',
  'bmo stadium': 'bmo-stadium',
  'honda center': 'honda-center',
  'pauley pavilion': 'pauley-pavilion',
  'galen center': 'galen-center',
  'snapdragon stadium': 'snapdragon-stadium',
  'viejas arena': 'viejas-arena',
  'petco park': 'petco-park',
  'lumen field': 'lumen-field',
  'climate pledge arena': 'climate-pledge-arena',
  'husky stadium': 'husky-stadium',
  'alaska airlines arena': 'alaska-airlines-arena',
  'alaska airlines arena at hec edmundson pavilion': 'alaska-airlines-arena',
  'hec edmundson pavilion': 'alaska-airlines-arena',
  't-mobile park': 't-mobile-park',
  // New York. Keep in step with VENUE_BY_NAME in src/data/sources/espnSource.ts:
  // until Oct 7, 2026 these were missing here, and 16 of 18 New York teams saved no games.
  'madison square garden': 'madison-square-garden',
  'barclays center': 'barclays-center',
  'ubs arena': 'ubs-arena',
  'metlife stadium': 'metlife-stadium',
  'yankee stadium': 'yankee-stadium',
  'citi field': 'citi-field',
  'sports illustrated stadium': 'sports-illustrated-stadium',
  'red bull arena': 'sports-illustrated-stadium',
  'prudential center': 'prudential-center',
  'lawrence a. wien stadium': 'wien-stadium',
  'kenneth p. lavalle stadium': 'lavalle-stadium',
  'moglia stadium at jack coffey field': 'coffey-field',
  'carnesecca arena': 'carnesecca-arena',
  'icahn stadium': 'icahn-stadium',
};

function localParts(iso, metroId) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: ZONE_BY_METRO[metroId ?? DEFAULT_METRO], year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${r.status} for ${url}`);
  return r.json();
}

async function mapLimit(items, limit, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (i < items.length) {
        const at = i++;
        out[at] = await fn(items[at]);
      }
    }),
  );
  return out;
}

async function collectMlb(team) {
  const rows = [];
  for (const season of team.seasons) {
    const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${team.mlbId}&season=${season}&gameType=R,F,D,L,W&hydrate=team`;
    const json = await getJson(url);
    const games = json.dates
      .flatMap((d) => d.games)
      .filter((g) => g.teams.home.team.id === team.mlbId && g.status?.abstractGameState === 'Final');
    const found = await mapLimit(games, 6, async (g) => {
      try {
        const box = await getJson(`https://statsapi.mlb.com/api/v1/game/${g.gamePk}/boxscore`);
        const att = Number((box.info?.find((row) => row.label === 'Att')?.value ?? '').replace(/[^0-9]/g, ''));
        if (!Number.isFinite(att) || att <= 0) return null;
        const { date, time } = localParts(g.gameDate, team.metroId);
        return {
          teamId: team.teamId,
          season,
          date,
          start: g.status?.startTimeTBD ? null : time,
          opponent: g.teams.away.team.teamName ?? g.teams.away.team.name,
          venueId: team.venueId,
          attendance: att,
          kind: 'announced',
          postseason: g.gameType !== 'R' || undefined,
          sourceId: 'mlb',
        };
      } catch {
        return null;
      }
    });
    rows.push(...found.filter(Boolean));
    console.log(`  ${team.teamId} ${season}: ${found.filter(Boolean).length} of ${games.length} home games with a count`);
  }
  return rows;
}

async function collectEspn(team) {
  const rows = [];
  for (const season of team.seasons) {
    const q = team.seasontype ? `?season=${season}&seasontype=${team.seasontype}` : `?season=${season}`;
    const json = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${team.path}/teams/${team.espnId}/schedule${q}`);
    let kept = 0;
    for (const e of json.events ?? []) {
      const c = e.competitions?.[0];
      // Soccer says STATUS_FULL_TIME; everything else says STATUS_FINAL.
      if (!c || !/^STATUS_(FINAL|FULL_TIME)/.test(c.status?.type?.name ?? '')) continue;
      const home = c.competitors.find((x) => x.homeAway === 'home');
      const away = c.competitors.find((x) => x.homeAway === 'away');
      if (!home || home.team.id !== team.espnId) continue;
      const venueId = VENUE_BY_NAME[(c.venue?.fullName ?? '').toLowerCase()];
      if (!venueId) continue;
      const att = Number(c.attendance);
      if (!Number.isFinite(att) || att <= 0) continue;
      const timeSet = e.timeValid !== false && c.timeValid !== false;
      const { date, time } = timeSet ? localParts(e.date, team.metroId) : { date: localParts(e.date, 'new-york').date, time: null };
      rows.push({
        teamId: team.teamId,
        season,
        date,
        start: time,
        opponent: away?.team.shortDisplayName ?? away?.team.displayName ?? '',
        venueId,
        attendance: att,
        kind: 'announced',
        sourceId: 'espn',
      });
      kept++;
    }
    console.log(`  ${team.teamId} ${season}: ${kept} home games with a count`);
  }
  return rows;
}

const only = process.argv[2];
let failures = 0;
for (const team of [...MLB_TEAMS, ...ESPN_TEAMS]) {
  if (only && team.teamId !== only) continue;
  // Each team's file lives in its city's folder (docs/new-city-checklist.md).
  const METRO = team.metroId ?? DEFAULT_METRO;
  const dir = path.join(root, 'data', 'attendance', METRO);
  await mkdir(dir, { recursive: true });
  try {
    const rows = 'mlbId' in team ? await collectMlb(team) : await collectEspn(team);
    rows.sort((a, b) => a.date.localeCompare(b.date));
    const file = path.join(dir, `${team.teamId}.json`);
    let previous = null;
    try {
      previous = JSON.parse(await readFile(file, 'utf8'));
    } catch {
      previous = null;
    }
    const next = { schema: 1, metroId: METRO, teamId: team.teamId, collectedOn: new Date().toISOString().slice(0, 10), games: rows };
    if (previous && JSON.stringify(previous.games) === JSON.stringify(rows)) {
      console.log(`${team.teamId}: no change (${rows.length} games).`);
    } else {
      await writeFile(file, `${JSON.stringify(next, null, 2)}\n`);
      console.log(`${team.teamId}: saved ${rows.length} games.`);
    }
  } catch (err) {
    failures++;
    console.error(`${team.teamId}: ${err instanceof Error ? err.message : err}`);
  }
}
process.exit(failures ? 1 : 0);
