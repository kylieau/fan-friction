// C11: visitor team ids must not break OPPONENT_RATIOS lookups (listing slugs).
// Run: node scripts/opponent-ratio-key-check.mjs

import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { OPPONENT_RATIOS } = await server.ssrLoadModule('/src/data/expectedDrawIndex.ts');
const { opponentKeyForVisitor } = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
await server.close();

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

if (fails) {
  console.error(`${fails} failed`);
  process.exit(1);
}
console.log('all passed');
