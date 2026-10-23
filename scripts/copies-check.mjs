// Events listed twice (Oct 22, 2026: LAFC vs. Galaxy at BMO Stadium showed as two rows, one from ESPN and one from
// Ticketmaster). Part 1 asserts the cases that were doubled now come out as one; part 2 prints every pair in each
// city's latest schedule archive that still looks doubled after the one-game rule and the merge (report only: the
// archive keeps the kinds and sports the night's code gave, so a fix shows there from the next nightly).
// Usage: node scripts/copies-check.mjs [metro]

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const only = process.argv[2];
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let failed = 0;
try {
  const { kindOf } = await server.ssrLoadModule('/src/data/sources/ticketmasterSource.ts');
  const { dropGamesCoveredByFeeds } = await server.ssrLoadModule('/src/data/sources/types.ts');
  const { mergeDuplicates, possibleCopies } = await server.ssrLoadModule('/src/data/dedupe.ts');
  const check = (ok, label) => (ok ? console.log(`ok   ${label}`) : ((failed += 1), console.log(`FAIL ${label}`)));

  // 1. Ticketmaster's kind for listings with no segment.
  check(kindOf('Undefined', 'tudor-fieldhouse', 'Rice Owls Womens Volleyball vs. Tulsa Golden Hurricane Womens Volleyball') === 'game', 'an unsegmented college match that names its sport is a game');
  check(kindOf(undefined, 'du-soccer-stadium', 'Denver Pioneers Mens Soccer vs. Pacific Tigers Mens Soccer') === 'game', 'a listing with no segment at all, same');
  check(kindOf('Undefined', 'x', 'South House vs Naija House - Halloween Edition (21 and Over)') === 'special', 'a party named "X vs Y" stays a special');
  check(kindOf('Undefined', 'x', 'Basketball Hall of Fame Gala') === 'special', 'a sport word without a match stays a special');
  check(kindOf('Undefined', 'x', 'Tampa Bay Sun FC vs. DC Power FC') === 'game', 'a match between two FCs is a game (FC is soccer)');
  check(kindOf('Undefined', 'x', 'CF Montréal vs. Inter Miami CF') === 'game', 'CF, same');
  check(kindOf('Film', 'x', 'Godzilla vs. Kong: Hockey Night') === 'special', 'a film stays a special');

  // 2. The doubled pairs, as the fixed code builds them, come out as one.
  const base = { metroId: 'x', crowd: [], place: { type: 'venue', venueId: 'bmo-stadium' }, date: '2026-10-25', start: '18:00', kind: 'game' };
  const espn = { ...base, id: 'espn-1', title: 'LAFC vs. Galaxy', teams: { home: 'lafc', away: 'galaxy' }, audience: { domain: 'sports', sport: 'soccer' }, sourceId: 'espn' };
  const tm = { ...base, id: 'tm-1', title: 'Los Angeles Football Club vs. LA Galaxy', performer: 'Los Angeles Football Club', audience: { domain: 'sports', sport: 'soccer' }, sourceId: 'ticketmaster' };
  check(dropGamesCoveredByFeeds([espn, tm]).length === 1, 'LAFC: the one-game rule keeps ESPN\'s copy');
  const merged = mergeDuplicates([espn, { ...tm, act: true, occasionFacts: { run: 3 } }]);
  check(merged.length === 1 && merged[0].sourceId === 'espn', 'LAFC: the merge reads "Football Club" as FC and keeps ESPN\'s copy');
  check(merged[0].occasionFacts === undefined && merged[0].performer === undefined, "LAFC: the game takes no seller's run or performer");
  const room = { ...base, place: { type: 'venue', venueId: 'tudor-fieldhouse' }, start: '13:00' };
  const sa = { ...room, id: 'sa-1', title: "Rice Women's Volleyball vs. Tulsa", audience: { domain: 'sports', sport: 'volleyball' }, sourceId: 'sidearm' };
  const tmGame = { ...room, id: 'tm-2', title: 'Rice Owls Womens Volleyball vs. Tulsa Golden Hurricane Womens Volleyball', audience: { domain: 'sports', sport: 'volleyball' }, sourceId: 'ticketmaster' };
  check(dropGamesCoveredByFeeds([sa, tmGame]).length === 1, "Rice volleyball: the school feed's copy wins");
  const bball = { ...tmGame, id: 'tm-3', audience: { domain: 'sports', sport: 'basketball' }, title: 'Rice Owls Mens Basketball vs. Tulsa Golden Hurricane Mens Basketball' };
  check(dropGamesCoveredByFeeds([sa, bball]).length === 2, 'another sport the same afternoon stays');
  // The school's room wins (Kylie, Oct 23, 2026): Georgetown's Nov 10 game, ESPN at Capital One Arena, the school at McDonough.
  const gtBase = { metroId: 'washington-dc', crowd: [], date: '2026-11-10', start: '18:30', kind: 'game', audience: { domain: 'sports', sport: 'basketball' } };
  const gtEspn = { ...gtBase, id: 'espn-gt', title: 'Georgetown vs. Delaware St', place: { type: 'venue', venueId: 'capital-one-arena' }, teams: { home: 'georgetown-mbb', away: 'delaware-st' }, sourceId: 'espn' };
  const gtSchool = { ...gtBase, id: 'sa-gt', title: "Georgetown Men's Basketball vs. Delaware State University", place: { type: 'venue', venueId: 'mcdonough-arena' }, teams: { home: 'georgetown-mbb', away: 'Delaware State University' }, sourceId: 'sidearm' };
  const gt = dropGamesCoveredByFeeds([gtEspn, gtSchool]);
  check(gt.length === 1 && gt[0].sourceId === 'espn' && gt[0].place.venueId === 'mcdonough-arena', "Georgetown: one game, ESPN's copy, in the school's room");
  const other = { ...gtSchool, id: 'sa-other', teams: { home: 'georgetown-wbb', away: 'Delaware State University' } };
  check(dropGamesCoveredByFeeds([gtEspn, other]).find((e) => e.id === 'espn-gt').place.venueId === 'capital-one-arena', "another team's game in another room moves nothing");
  check(possibleCopies([espn, tm]).length === 1 && possibleCopies([espn]).length === 0, 'the detector sees a pair and nothing in a single row');

  // 3. What still looks doubled in the latest archive per city.
  const dir = path.join(root, 'data', 'schedule-archive');
  const metros = only ? [only] : (await readdir(dir, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
  let total = 0;
  for (const metro of metros) {
    const files = (await readdir(path.join(dir, metro))).filter((f) => f.endsWith('.json')).sort();
    if (!files.length) continue;
    const day = JSON.parse(await readFile(path.join(dir, metro, files.at(-1)), 'utf8'));
    const pairs = possibleCopies(mergeDuplicates(dropGamesCoveredByFeeds(day.events ?? [])));
    total += pairs.length;
    for (const [a, b] of pairs) console.log(`     ${metro} ${a.date} ${a.place.venueId}: "${a.title}" (${a.sourceId}, ${a.kind}) / "${b.title}" (${b.sourceId}, ${b.kind})`);
  }
  console.log(`${total} possible copies in the latest archives (${metros.length} cities).`);
} finally {
  await server.close();
}
if (failed) process.exit(1);
