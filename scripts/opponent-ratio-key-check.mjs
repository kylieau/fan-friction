// C11: visitor team ids must not break OPPONENT_RATIOS lookups (listing slugs).
// Run: node scripts/opponent-ratio-key-check.mjs

import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { OPPONENT_RATIOS } = await server.ssrLoadModule('/src/data/expectedDrawIndex.ts');
const { opponentKeyForVisitor } = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
const live = process.argv.includes('--live');
const espn = live ? await server.ssrLoadModule('/src/data/sources/espnSource.ts') : null;
const { TEAMS } = live ? await server.ssrLoadModule('/src/data/teams.ts') : { TEAMS: {} };

const cases = [
  { label: 'Philadelphia Union at Miami', home: 'inter-miami-cf', metro: 'miami', away: 'philadelphia-union', awayOpponent: 'philadelphia' },
  { label: 'Arizona Cardinals at Seattle', home: 'seahawks', metro: 'seattle', away: 'arizona-cardinals', awayOpponent: 'cardinals' },
  { label: 'Legacy slug-only visitor', home: 'cubs', metro: 'chicago', away: 'brewers', awayOpponent: undefined },
];

let fails = 0;
for (const c of cases) {
  const key = opponentKeyForVisitor(c.away, c.awayOpponent);
  const row = OPPONENT_RATIOS.find((r) => r.metroId === c.metro && r.teamId === c.home && r.opponent === key);
  const ok = Boolean(row);
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${c.label}: key "${key}"${row ? ` (${row.games} games)` : ''}`);
  if (!ok) fails++;
}

// --live: pull real ESPN schedules and require that every covered visitor (away id is
// one of our TEAMS) carries awayOpponent, and that the draw key never falls back to
// our team id. Prints how many covered-visitor games found an OPPONENT_RATIOS row.
if (live) {
  for (const metro of ['chicago', 'boston', 'seattle', 'miami', 'new-orleans', 'dallas-fort-worth', 'new-york']) {
    const events = await espn.loadEspnSchedule(metro);
    let covered = 0, matched = 0, missingSlug = 0;
    for (const e of events) {
      if (!e.teams || !TEAMS[e.teams.away]) continue;
      if (!OPPONENT_RATIOS.some((r) => r.metroId === metro && r.teamId === e.teams.home)) continue;
      covered++;
      if (!e.teams.awayOpponent) missingSlug++;
      const key = opponentKeyForVisitor(e.teams.away, e.teams.awayOpponent);
      if (OPPONENT_RATIOS.some((r) => r.metroId === metro && r.teamId === e.teams.home && r.opponent === key)) matched++;
    }
    const ok = missingSlug === 0;
    console.log(`${ok ? 'ok  ' : 'FAIL'} live ${metro}: ${matched}/${covered} covered-visitor games matched a ratio${missingSlug ? `, ${missingSlug} without awayOpponent` : ''}`);
    if (!ok) fails++;
  }
}
await server.close();

if (fails) {
  console.error(`${fails} failed`);
  process.exit(1);
}
console.log('all passed');
