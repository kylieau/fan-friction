// One identity per game (build 7.3, A2): the catalog's copy of a schedule game is found by the feed's own game number
// first; a doubleheader with no number to tell its games apart is declined, never guessed; and the Stub it sheet's
// "Which Game?" row gets a doubleheader's games by start. Fixture games, no network. Usage: node scripts/game-identity-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
let failed = false;
const check = (ok, what) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${what}`);
  if (!ok) failed = true;
};
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const { sameGame, doubleheaderOf } = await server.ssrLoadModule('/src/data/gameStub.ts');
  const ev = (id, start, home = 'dodgers', away = 'giants') => ({ id, metroId: 'la', date: '2027-05-01', start, kind: 'game', title: 'Giants at Dodgers', place: { type: 'venue', venueId: 'dodger-stadium' }, audience: { domain: 'sports', sport: 'baseball' }, teams: { home, away }, crowd: [], sourceId: 'mlb' });
  const g1 = ev('2027-05-01-mlb-778001', '13:10');
  const g2 = ev('2027-05-01-mlb-778002', '18:40');
  const other = ev('2027-05-01-mlb-778003', '19:10', 'angels', 'astros');
  const link = (id, home = true) => ({ teamId: 'dodgers', game: { id, date: '2027-05-01', start: null, home, opponent: 'Giants' } });

  check(sameGame(link('mlb-dodgers-778002'), [g1, g2, other])?.id === g2.id, "game 2's schedule row finds game 2 by the feed's number, not game 1");
  check(sameGame(link('mlb-dodgers-778001'), [g1, g2])?.id === g1.id, "game 1's finds game 1");
  check(sameGame(link('mlb-dodgers-778002'), [g1]) === undefined, "game 2's row with game 2 missing from the catalog never lands on game 1 (Codex's group 15 finding)");
  const seed = { ...g1, id: '2027-05-01-dodgers' };
  check(sameGame(link('mlb-dodgers-778002'), [seed])?.id === seed.id, "a hand seed's copy (no feed number) still matches");
  const school = { ...g1, id: '2027-05-01-sa-usctrojans-com-55501', sourceId: 'sidearm' };
  check(sameGame(link('mlb-dodgers-778002'), [school])?.id === school.id, "another feed's copy with its own number still matches");
  // A feed whose short tag differs from its sourceId ("ht" and "hockeytech"): game 2 missing still never lands on game 1.
  const ht1 = { ...g1, id: '2027-05-01-ht-dodgers-24101', sourceId: 'hockeytech' };
  const ht2 = { ...g2, id: '2027-05-01-ht-dodgers-24102', sourceId: 'hockeytech' };
  check(sameGame(link('ht-dodgers-24102'), [ht1, ht2])?.id === ht2.id, "a HockeyTech game 2 finds game 2 by the feed's number");
  check(sameGame(link('ht-dodgers-24102'), [ht1]) === undefined, 'a HockeyTech game 2 missing from the catalog never lands on game 1');
  const sa1 = { ...g1, id: '2027-05-01-sa-usctrojans-com-55501', sourceId: 'sidearm' };
  check(sameGame(link('sa-usctrojans-com-55502'), [sa1]) === undefined, 'a school-calendar game 2 missing never lands on game 1');
  check(sameGame(link('hand-seed'), [g1, g2]) === undefined, 'two candidates and no number to tell them apart: declined, never guessed');
  check(sameGame(link('hand-seed'), [g1, other])?.id === g1.id, 'one candidate and no number: that one, as before');

  const twins = doubleheaderOf(g2, [other, g2, g1]);
  check(twins.length === 2 && twins[0].id === g1.id && twins[1].id === g2.id, 'the doubleheader comes back by start: game 1, then game 2');
  check(doubleheaderOf(other, [other, g1, g2]).length === 1, 'a game with no twin is alone (no "Which Game?" row)');
  check(doubleheaderOf(g1, []).length === 1, 'an empty day: the game alone');
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
