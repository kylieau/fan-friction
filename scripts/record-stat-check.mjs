// The record when she attends (Kylie's Nov 19, 2026 note 2; mock notes-and-record/02, approved the same day): wins
// and losses over attended games with a result on file, first among the Your Year tiles. Proves the outcome reads a
// college stub's result filed under the school's short name, a watched stub never counts, a game with no result
// never counts, a tie rides in the second line, and the tile is absent with nothing to say. No network: results are
// planted in the cache. Usage: node scripts/record-stat-check.mjs

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
  const { attendedOutcome, attendedRecord, yearStatPool } = await server.ssrLoadModule('/src/data/yearStats.ts');
  const { primeFromRows } = await server.ssrLoadModule('/src/data/catalogCache.ts');
  const at = '2026-11-20T00:00:00Z';
  const result = (eventId, date, home, away, hs, as, homeTeamId) => ({ eventId, metroId: 'la', date, sourceId: 'espn', status: 'final', homeTeamId, home: { name: home, score: hs }, away: { name: away, score: as }, capturedAt: at });
  primeFromRows('la', {
    results: [
      result('g-ucla', '2026-11-11', 'UCLA', 'AR-Pine Bluff', 106, 37, 'ucla-mbb'),
      result('g-lakers-l', '2026-11-18', 'Lakers', 'Jazz', 97, 109, 'lakers'),
      result('g-lakers-w', '2026-11-17', 'Lakers', 'Hornets', 118, 114, 'lakers'),
      result('g-tie', '2026-11-15', 'LAFC', 'Galaxy', 1, 1, 'lafc'),
    ],
  });
  const entry = (id, eventId, date, tags, sides, extra = {}) => ({ id, eventId, metroId: 'la', kind: 'game', title: id, when: { sort: date, label: '', precision: 'day' }, tags, sides, sport: 'Basketball', venue: 'x', ...extra });
  const ucla = entry('e1', 'g-ucla', '2026-11-11', ['UCLA MBB'], ['UCLA MBB']);
  const loss = entry('e2', 'g-lakers-l', '2026-11-18', ['Lakers'], ['Lakers']);
  const win = entry('e3', 'g-lakers-w', '2026-11-17', ['Lakers'], ['Lakers']);
  const watched = entry('e4', 'g-lakers-w', '2026-11-17', ['Lakers'], ['Lakers'], { watched: true });
  const noResult = entry('e5', 'g-none', '2026-11-19', ['Lakers'], ['Lakers']);
  const tie = entry('e6', 'g-tie', '2026-11-15', ['LAFC'], ['LAFC'], { sport: 'Soccer' });

  check(attendedOutcome(ucla) === 'W', "a college stub (side \"UCLA MBB\") reads its result filed under \"UCLA\": W");
  check(attendedOutcome(loss) === 'L' && attendedOutcome(win) === 'W', 'a loss and a win read as such');
  check(attendedOutcome(watched) === null, 'a watched stub never counts');
  check(attendedOutcome(noResult) === null, 'a game with no result on file never counts');
  check(attendedOutcome(tie) === 'T', 'a draw reads as a tie');
  const rec = attendedRecord([ucla, loss, win, watched, noResult, tie]);
  check(rec.wins === 2 && rec.losses === 1 && rec.ties === 1, `the record over the six: ${rec.wins}–${rec.losses}, ${rec.ties} tie`);

  const pool = yearStatPool([ucla, loss, win, watched, noResult, tie], 'all', [ucla, loss, win, watched, noResult, tie]);
  check(pool[0]?.key === 'record' && pool[0].value === '2–1' && pool[0].sub === '1 tie', `the tile is first: ${pool[0]?.value} "${pool[0]?.label}" (${pool[0]?.sub})`);
  check(pool[0]?.label === 'Record when you attend', 'its words are sentence case: "Record when you attend"');
  const quiet = yearStatPool([noResult, watched], 'all', [noResult, watched]);
  check(!quiet.some((s) => s.key === 'record'), 'with nothing to say, no tile');
  const year = yearStatPool([ucla, loss, win], '2026', [ucla, loss, win, tie]);
  check(year[0]?.key === 'record' && year[0].value === '2–1' && !year[0].sub, 'a single year counts its own games, no tie line');
  // Codex, group 20 review: the side is the one credited team's, never the stub's other name; two of her teams
  // against each other give no side; the tile waits for the results to load; it is pinned first whatever the rest weigh.
  primeFromRows('la', { results: [result('g-celtics', '2026-11-19', 'Lakers', 'Celtics', 110, 100, 'lakers')] });
  const forVisitor = entry('e7', 'g-celtics', '2026-11-19', ['Celtics'], ['Celtics', 'Lakers']);
  check(attendedOutcome(forVisitor) === 'L', "a hand-added game with both names in its sides counts the tagged team's result: Celtics lost, L");
  const bothHers = entry('e8', 'g-celtics', '2026-11-19', ['Lakers', 'Celtics'], ['Lakers']);
  check(attendedOutcome(bothHers) === null, 'two of her teams against each other: no side, no outcome');
  const untagged = entry('e9', 'g-celtics', '2026-11-19', [], ['Celtics']);
  check(attendedOutcome(untagged) === 'L', 'no team on file but one side named: that side');
  const waiting = yearStatPool([ucla, loss, win], 'all', [ucla, loss, win], { resultsReady: false });
  check(!waiting.some((s) => s.key === 'record'), 'while the results are still loading, no tile');
  const busy = Array.from({ length: 30 }, (_, i) => entry(`b${i}`, `g-b${i}`, `2026-0${1 + (i % 9)}-${String(1 + (i % 27)).padStart(2, '0')}`, [`Team ${i % 25}`], [`Team ${i % 25}`], { venue: `Venue ${i % 12}`, metroId: ['la', 'boston', 'chicago', 'denver'][i % 4], userTags: ['loud'] }));
  const crowded = yearStatPool([...busy, loss, win], 'all', [...busy, loss, win]);
  check(crowded[0]?.key === 'record' && crowded.length > 4, `in a busy log (${crowded.length} stats) the record is still first`);
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
