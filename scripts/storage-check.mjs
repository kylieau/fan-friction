// Checks the log save rules (diff, merge, retry backlog) without the network. Run: node scripts/storage-check.mjs
import { createServer } from 'vite';
const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
const { diffLogs, mergeLogs } = await server.ssrLoadModule('/src/data/storage/index.ts');
const { mergeDiffs } = await server.ssrLoadModule('/src/data/storage/types.ts');
let fails = 0;
const ok = (name, cond) => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${name}`); if (!cond) fails++; };
const entry = (id, extra = {}) => ({ id, when: { sort: '2026-10-01', label: '', precision: 'day' }, title: id, tags: [], sport: 'Baseball', sides: [], kind: 'game', ...extra });
const log = (added, plans = [], extra = {}) => ({ version: 1, hiddenSeedIds: [], added, plans, order: 'plans-first', ...extra });

// 1. A diff carries only what changed, and stamps it.
const t0 = new Date('2026-10-09T10:00:00Z');
const before = log([entry('a'), entry('b')]);
const d1 = diffLogs(before, log([entry('a'), entry('b', { review: 'great' }), entry('c')]), t0);
ok('diff upserts only b and c', d1.entries.upsert.map((e) => e.id).join() === 'b,c');
ok('diff stamps edit time', d1.entries.upsert.every((e) => e.updatedAt === t0.toISOString()));
ok('untouched a is unstamped', !d1.log.added.find((e) => e.id === 'a').updatedAt);
ok('nothing removed, settings unchanged', d1.entries.remove.length === 0 && d1.settings === false);

// 2. Removing remembers the id; re-adding forgets it.
const d2 = diffLogs(d1.log, log(d1.log.added.filter((e) => e.id !== 'c')), new Date('2026-10-09T11:00:00Z'));
ok('remove lists c', d2.entries.remove.join() === 'c' && d2.log.removed.c === '2026-10-09T11:00:00.000Z');
ok('removed map counts as a settings change', d2.settings === true);
const d3 = diffLogs(d2.log, log([...d2.log.added, entry('c')], [], { removed: d2.log.removed }), new Date('2026-10-09T12:00:00Z'));
ok('re-adding c clears its tombstone', !('c' in d3.log.removed) && d3.entries.upsert[0].id === 'c');

// 3. Merge: newer copy wins; tombstones hold; later re-add survives a tombstone.
const account = log([entry('a', { review: 'old', updatedAt: '2026-10-08T00:00:00Z' }), entry('x')], [], { removed: { gone: '2026-10-09T00:00:00Z' } });
const phone = log([entry('a', { review: 'new', updatedAt: '2026-10-09T00:00:00Z' }), entry('gone'), entry('late', { updatedAt: '2026-10-09T05:00:00Z' })], [], { removed: { late: '2026-10-09T01:00:00Z' } });
const m = mergeLogs(account, phone);
ok('newer phone edit wins', m.added.find((e) => e.id === 'a').review === 'new');
ok('account-only x kept', m.added.some((e) => e.id === 'x'));
ok('entry removed on the account stays out', !m.added.some((e) => e.id === 'gone'));
ok('entry written after its tombstone survives', m.added.some((e) => e.id === 'late'));
ok('tombstones are unioned', 'gone' in m.removed && 'late' in m.removed);

// 4. Backlog folding: a failed upsert then a remove ends as a remove.
const base = log([]);
const f1 = { entries: { upsert: [entry('q')], remove: [] }, plans: { upsert: [], remove: [] }, settings: false, log: base };
const f2 = { entries: { upsert: [], remove: ['q'] }, plans: { upsert: [], remove: [] }, settings: true, log: base };
const f = mergeDiffs(f1, f2);
ok('backlog upsert then remove = remove', f.entries.upsert.length === 0 && f.entries.remove.join() === 'q' && f.settings);
const g = mergeDiffs(f2, f1);
ok('backlog remove then upsert = upsert', g.entries.remove.length === 0 && g.entries.upsert.length === 1);

// 5. Old tombstones are pruned.
const d5 = diffLogs(log([], [], { removed: { ancient: '2025-01-01T00:00:00Z' } }), log([]), t0);
ok('half-year-old tombstones drop', !('ancient' in d5.log.removed));
await server.close();
console.log(fails ? `${fails} failed` : 'all passed');
process.exit(fails ? 1 : 0);
