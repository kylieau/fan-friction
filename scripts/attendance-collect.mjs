// Collects announced attendance for past home games of the Los Angeles teams,
// from MLB's box scores and ESPN's past-season schedules (both free, no key).
// One file per team under data/attendance/la/. Run now and then, not nightly:
//   node scripts/attendance-collect.mjs            (all teams, recent seasons)
//   node scripts/attendance-collect.mjs dodgers    (one team)
// Every figure is the league's announced count (tickets distributed, for MLB
// and the NFL). Nothing here is invented; a game without a count is skipped.
// The review's calibration plan (docs/archive/formula/formula-review-response.md §11).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_METRO = 'la';
/** Local dates and starts are each city's own clock (a 7 pm game in New York is 19:00, not 16:00). */
const ZONE_BY_METRO = { la: 'America/Los_Angeles', 'san-diego': 'America/Los_Angeles', seattle: 'America/Los_Angeles', 'new-york': 'America/New_York', atlanta: 'America/New_York', 'bay-area': 'America/Los_Angeles' };
const UA = { 'User-Agent': 'Mozilla/5.0 (fan-friction attendance collector)' };

/** MLB seasons are calendar years. ESPN seasons are the year the season ends (2026 = 2025-26) for winter sports. */
const MLB_TEAMS = [
  { teamId: 'dodgers', mlbId: 119, venueId: 'dodger-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'angels', mlbId: 108, venueId: 'angel-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'padres', mlbId: 135, venueId: 'petco-park', metroId: 'san-diego', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'mariners', mlbId: 136, venueId: 't-mobile-park', metroId: 'seattle', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'yankees', mlbId: 147, venueId: 'yankee-stadium', metroId: 'new-york', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'mets', mlbId: 121, venueId: 'citi-field', metroId: 'new-york', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'braves', mlbId: 144, venueId: 'truist-park', metroId: 'atlanta', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'giants', mlbId: 137, venueId: 'oracle-park', metroId: 'bay-area', seasons: [2022, 2023, 2024, 2025, 2026] },
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
  { teamId: 'hawks', metroId: 'atlanta', path: 'basketball/nba', espnId: '1', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'dream', metroId: 'atlanta', path: 'basketball/wnba', espnId: '20', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'falcons', metroId: 'atlanta', path: 'football/nfl', espnId: '1', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'atlanta-united', metroId: 'atlanta', path: 'soccer/usa.1', espnId: '18418', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'gt-football', metroId: 'atlanta', path: 'football/college-football', espnId: '59', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'gt-mbb', metroId: 'atlanta', path: 'basketball/mens-college-basketball', espnId: '59', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gt-wbb', metroId: 'atlanta', path: 'basketball/womens-college-basketball', espnId: '59', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gsu-football', metroId: 'atlanta', path: 'football/college-football', espnId: '2247', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'gsu-mbb', metroId: 'atlanta', path: 'basketball/mens-college-basketball', espnId: '2247', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gsu-wbb', metroId: 'atlanta', path: 'basketball/womens-college-basketball', espnId: '2247', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ksu-football', metroId: 'atlanta', path: 'football/college-football', espnId: '338', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'ksu-mbb', metroId: 'atlanta', path: 'basketball/mens-college-basketball', espnId: '338', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ksu-wbb', metroId: 'atlanta', path: 'basketball/womens-college-basketball', espnId: '338', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'warriors', metroId: 'bay-area', path: 'basketball/nba', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'valkyries', metroId: 'bay-area', path: 'basketball/wnba', espnId: '129689', seasons: [2025, 2026], seasontype: 2 },
  { teamId: 'sf-49ers', metroId: 'bay-area', path: 'football/nfl', espnId: '25', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sharks', metroId: 'bay-area', path: 'hockey/nhl', espnId: '18', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'earthquakes', metroId: 'bay-area', path: 'soccer/usa.1', espnId: '191', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'bay-fc', metroId: 'bay-area', path: 'soccer/usa.nwsl', espnId: '22187', seasons: [2024, 2025] },
  { teamId: 'oakland-roots', metroId: 'bay-area', path: 'soccer/usa.usl.1', espnId: '20687', seasons: [2025, 2026] },
  { teamId: 'cal-football', metroId: 'bay-area', path: 'football/college-football', espnId: '25', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'cal-mbb', metroId: 'bay-area', path: 'basketball/mens-college-basketball', espnId: '25', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cal-wbb', metroId: 'bay-area', path: 'basketball/womens-college-basketball', espnId: '25', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'stanford-football', metroId: 'bay-area', path: 'football/college-football', espnId: '24', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'stanford-mbb', metroId: 'bay-area', path: 'basketball/mens-college-basketball', espnId: '24', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'stanford-wbb', metroId: 'bay-area', path: 'basketball/womens-college-basketball', espnId: '24', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sjsu-football', metroId: 'bay-area', path: 'football/college-football', espnId: '23', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sjsu-mbb', metroId: 'bay-area', path: 'basketball/mens-college-basketball', espnId: '23', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sjsu-wbb', metroId: 'bay-area', path: 'basketball/womens-college-basketball', espnId: '23', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
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
  // Atlanta (docs/archive/research/atlanta-venue-table-answer.md), as ESPN writes them on each team's own schedule.
  'mercedes-benz stadium': 'mercedes-benz-stadium',
  'state farm arena': 'state-farm-arena',
  'gateway center': 'gateway-center-arena',
  'center parc stadium': 'center-parc-stadium',
  'bobby dodd stadium': 'bobby-dodd-stadium',
  'bobby dodd stadium at hyundai field': 'bobby-dodd-stadium',
  'walens family field at fifth third stadium': 'fifth-third-stadium',
  'fifth third stadium': 'fifth-third-stadium',
  'gsu convocation center': 'gsu-convocation-center',
  'mccamish pavilion': 'mccamish-pavilion',
  'vystar arena': 'ksu-convocation-center',
  'ksu convocation center': 'ksu-convocation-center',
  // Bay Area (docs/bay-area-venue-table-answer.md), as ESPN writes them on each team's own schedule.
  'chase center': 'chase-center',
  "levi's stadium": 'levis-stadium',
  'sap center at san jose': 'sap-center',
  'sap center': 'sap-center',
  'paypal park': 'paypal-park',
  'stanford stadium': 'stanford-stadium',
  'oakland coliseum': 'oakland-coliseum',
  'oakland-alameda county coliseum': 'oakland-coliseum',
  'california memorial stadium': 'california-memorial-stadium',
  'cefcu stadium': 'cefcu-stadium',
  'haas pavilion': 'haas-pavilion',
  'maples pavilion': 'maples-pavilion',
  'provident credit union event center': 'provident-event-center',
  'oracle park': 'oracle-park',
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
    const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${team.mlbId}&season=${season}&gameType=R,F,D,L,W&hydrate=team,game(promotions)`;
    const json = await getJson(url);
    // The record going in: the team's record after its previous regular-season game, home or away.
    const regular = json.dates
      .flatMap((d) => d.games)
      .filter((g) => g.gameType === 'R' && g.status?.abstractGameState === 'Final')
      .sort((a, b) => a.gameDate.localeCompare(b.gameDate) || (a.gameNumber ?? 1) - (b.gameNumber ?? 1));
    const recordBefore = new Map();
    let prev = { wins: 0, losses: 0 };
    for (const g of regular) {
      recordBefore.set(g.gamePk, prev);
      const side = g.teams.home.team.id === team.mlbId ? g.teams.home : g.teams.away;
      if (side.leagueRecord) prev = { wins: side.leagueRecord.wins, losses: side.leagueRecord.losses };
    }
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
          recordBefore: recordBefore.get(g.gamePk),
          // MLB's own list for the game: giveaways, ticket offers, fireworks and other highlights.
          promotions: (g.promotions ?? []).map((p) => ({ type: p.offerType, name: p.name })),
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

/** Pro leagues with a preseason played in the home building; it gets its own bucket. */
const HAS_PRESEASON = /^(basketball\/nba|basketball\/wnba|hockey\/nhl|football\/nfl)$/;

async function collectEspn(team) {
  const rows = [];
  for (const season of team.seasons) {
    const q = team.seasontype ? `?season=${season}&seasontype=${team.seasontype}` : `?season=${season}`;
    const json = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${team.path}/teams/${team.espnId}/schedule${q}`);
    const events = (json.events ?? []).map((e) => ({ e, preseason: false }));
    if (team.seasontype && HAS_PRESEASON.test(team.path)) {
      try {
        const pre = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${team.path}/teams/${team.espnId}/schedule?season=${season}&seasontype=1`);
        events.push(...(pre.events ?? []).map((e) => ({ e, preseason: true })));
      } catch {
        /* no preseason listed that year */
      }
    }
    let kept = 0;
    for (const { e, preseason } of events) {
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
        preseason: preseason || undefined,
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
    rows.sort((a, b) => a.date.localeCompare(b.date) || (a.start ?? '').localeCompare(b.start ?? ''));
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
