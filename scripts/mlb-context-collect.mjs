// MLB league context for the expected-draw check (docs/expected-draw-decisions-oct7.md,
// round 2): every team's record after each regular-season game, its league, the
// World Series winner, and the All-Star and MVP lists, per season. All from MLB's
// free feed, one request per season per list. Writes data/mlb-context.json.
//   node scripts/mlb-context-collect.mjs

import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://statsapi.mlb.com/api/v1';
const SEASONS = [2021, 2022, 2023, 2024, 2025, 2026];
const UA = { 'User-Agent': 'Mozilla/5.0 (fan-friction attendance collector)' };

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${r.status} for ${url}`);
  return r.json();
}

const out = { schema: 1, collectedOn: new Date().toISOString().slice(0, 10), seasons: {} };
for (const season of SEASONS) {
  const teams = {};
  for (const t of (await getJson(`${API}/teams?sportId=1&season=${season}`)).teams ?? []) {
    teams[t.id] = { teamName: t.teamName, name: t.name, league: t.league?.id === 103 ? 'AL' : 'NL' };
  }
  // Record after each game: [date, wins, losses], in order.
  const records = {};
  const games = (await getJson(`${API}/schedule?sportId=1&season=${season}&gameType=R`)).dates
    .flatMap((d) => d.games)
    .filter((g) => g.status?.abstractGameState === 'Final')
    .sort((a, b) => a.gameDate.localeCompare(b.gameDate));
  for (const g of games) {
    for (const side of [g.teams.home, g.teams.away]) {
      const r = side.leagueRecord;
      if (!r) continue;
      (records[side.team.id] ??= []).push([g.officialDate ?? g.gameDate.slice(0, 10), r.wins, r.losses]);
    }
  }
  // The champion: the winner of the last World Series game.
  const ws = (await getJson(`${API}/schedule?sportId=1&season=${season}&gameType=W`)).dates
    .flatMap((d) => d.games)
    .filter((g) => g.status?.abstractGameState === 'Final')
    .sort((a, b) => a.gameDate.localeCompare(b.gameDate));
  const last = ws[ws.length - 1];
  const champion = last ? (last.teams.home.isWinner ? last.teams.home.team.id : last.teams.away.team.id) : null;
  // An award not given yet (this season's MVPs) answers 404: no names.
  const names = async (award) => {
    try {
      return ((await getJson(`${API}/awards/${award}/recipients?season=${season}`)).awards ?? []).map((a) => a.player?.nameFirstLast).filter(Boolean);
    } catch {
      return [];
    }
  };
  const allStars = [...(await names('ALAS')), ...(await names('NLAS'))];
  const mvps = [...(await names('ALMVP')), ...(await names('NLMVP'))];
  out.seasons[season] = { teams, records, champion, allStars, mvps };
  console.log(`${season}: ${Object.keys(records).length} teams, ${games.length} games, champion ${champion ? teams[champion]?.name : 'not yet'}, ${allStars.length} All-Stars, MVPs ${mvps.join(' and ')}`);
}
await writeFile(path.join(root, 'data', 'mlb-context.json'), `${JSON.stringify(out)}\n`);
