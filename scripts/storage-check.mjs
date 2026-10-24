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
// 6. Season tickets (build 7.1, item 15): the four properties stage 4 asks about.
const { reconcileSeasonPlans, seasonDefaultCost } = await server.ssrLoadModule('/src/data/seasonTickets.ts');
const { costTotal } = await server.ssrLoadModule('/src/data/costs.ts');
const game = (id, date, extra = {}) => ({ id: `mlb-dodgers-${id}`, date, start: '19:10', home: true, opponent: 'Giants', venueName: 'Dodger Stadium', eventId: `${date}-mlb-${id}`, eventMetroId: 'la', ...extra });
const ticket = { teamId: 'dodgers', on: true, plan: 'full', seats: { section: '48', row: 'K', seat: '7' }, ticket: 62, parking: 30, preseason: true, removed: {}, updatedAt: '2026-10-24T00:00:00Z' };
const season = [game('1', '2027-04-02'), game('2', '2027-04-03', { preseason: true }), game('3', '2027-04-04', { home: false }), game('4', '2027-04-05', { stakes: { round: 'NLDS' } }), game('5', '2027-04-06', { neutral: true })];
const p6 = reconcileSeasonPlans([], ticket, season, '2026-10-24', 'private');
ok('season adds home games only (not away, playoff or neutral)', p6.length === 2 && p6.every((p) => p.season?.teamId === 'dodgers'));
ok('a season plan carries the catalog event id', p6[0].eventId === '2027-04-02-mlb-1' && p6[0].id === 'plan-2027-04-02-mlb-1');
ok('defaults land as the seat, a Ticket line and a Parking line', p6[0].seats.section === '48' && p6[0].cost.lines.map((l) => `${l.kind}:${l.amount}`).join() === 'ticket:62,parking:30');
const catalogEvent = { id: '2027-04-02-mlb-1' };
ok('the catalog event, when it arrives, is already the plan (no duplicate)', p6.filter((p) => p.eventId === catalogEvent.id).length === 1);
// A game moves a day; the plan follows by the feed's game id, keeping its edit.
const edited = p6.map((p) => (p.season.gameId === 'mlb-dodgers-1' ? { ...p, cost: { lines: [{ kind: 'ticket', amount: 85 }] }, season: { ...p.season, edited: true } } : p));
const moved = [game('1', '2027-04-09'), game('2', '2027-04-03', { preseason: true })];
const p7 = reconcileSeasonPlans(edited, ticket, moved, '2026-10-24', 'private');
const followed = p7.find((p) => p.season.gameId === 'mlb-dodgers-1');
ok('a moved game takes its plan along: new date and id, one plan', followed.date === '2027-04-09' && followed.eventId === '2027-04-09-mlb-1' && p7.filter((p) => p.season.gameId === 'mlb-dodgers-1').length === 1);
ok('the moved plan keeps its own edit', followed.cost.lines[0].amount === 85 && followed.season.edited === true);
// A game vanishes from the schedule: flagged, kept.
const p8 = reconcileSeasonPlans(p7, ticket, [game('1', '2027-04-09')], '2026-10-24', 'private');
const vanished = p8.find((p) => p.season.gameId === 'mlb-dodgers-2');
ok('a game dropped from the schedule is flagged, not deleted', vanished && vanished.season.gone === true && p8.length === 2);
ok('it comes back unflagged when the schedule lists it again', !reconcileSeasonPlans(p8, ticket, moved, '2026-10-24', 'private').find((p) => p.season.gameId === 'mlb-dodgers-2').season.gone);
// Removed games stay out; a plan she made by hand on the same game is adopted, her seat kept as an edit.
const p9 = reconcileSeasonPlans([{ id: 'plan-2027-04-02-mlb-1', date: '2027-04-02', metroId: 'la', eventId: '2027-04-02-mlb-1', title: 'Giants at Dodgers', seats: { section: '12' } }], { ...ticket, removed: { 'mlb-dodgers-2': { reason: 'sold', soldFor: 85, at: '2026-10-24T00:00:00Z' } } }, season, '2026-10-24', 'private');
ok('a removed game is not added back', !p9.some((p) => p.season?.gameId === 'mlb-dodgers-2'));
ok('her own plan on a season game is adopted with its seat as an edit', p9.length === 1 && p9[0].season.edited === true && p9[0].seats.section === '12' && p9[0].cost.lines[0].amount === 62);
// A sale amount is never a cost: it lives on the ticket's removed map, not the plan or stub.
ok('Spend never counts a sale amount', costTotal(seasonDefaultCost(ticket)) === 92 && JSON.stringify(p9).includes('soldFor') === false);
// Past plans are never touched.
const past = [{ id: 'plan-2026-09-01-mlb-9', date: '2026-09-01', metroId: 'la', eventId: '2026-09-01-mlb-9', title: 'Old', season: { teamId: 'dodgers', gameId: 'mlb-dodgers-9' } }];
ok('a past season plan is left alone', reconcileSeasonPlans(past, ticket, [], '2026-10-24', 'private')[0] === past[0]);
// Settings merge: team by team, the newer copy wins.
const sA = log([], [], { seasonTickets: [{ ...ticket, updatedAt: '2026-10-24T01:00:00Z' }, { ...ticket, teamId: 'rams', ticket: 100, updatedAt: '2026-10-24T00:00:00Z' }] });
const sB = log([], [], { seasonTickets: [{ ...ticket, teamId: 'rams', ticket: 120, updatedAt: '2026-10-24T02:00:00Z' }] });
const sm = mergeLogs(sA, sB);
ok('season tickets merge per team, newer wins', sm.seasonTickets.length === 2 && sm.seasonTickets.find((t) => t.teamId === 'rams').ticket === 120);
ok('a season-ticket change counts as a settings change', diffLogs(log([]), sA, t0).settings === true);

// 6b. Codex steps 9–10 review: a move onto a hand-made plan leaves one plan; defaults follow the answer.
const { applySeasonDefaults } = await server.ssrLoadModule('/src/data/seasonTickets.ts');
const handMade = { id: 'plan-2027-04-09-mlb-1', date: '2027-04-09', metroId: 'la', eventId: '2027-04-09-mlb-1', title: 'Giants at Dodgers', seats: { section: '12' } };
const p10 = reconcileSeasonPlans([...p6, handMade], ticket, moved, '2026-10-24', 'private');
ok('a game moved onto a hand-made plan leaves one plan for that event', p10.filter((p) => p.eventId === '2027-04-09-mlb-1').length === 1 && new Set(p10.map((p) => p.id)).size === p10.length);
ok('that plan keeps her seat as this game\'s edit', p10.find((p) => p.eventId === '2027-04-09-mlb-1').seats.section === '12');
const watching = applySeasonDefaults({ ...p6[0], watch: true }, ticket);
const interested = applySeasonDefaults({ ...p6[0], interested: true }, ticket);
ok('defaults give a Watching plan a cost but no seat', !watching.seats && watching.cost);
ok('defaults give an Interested plan neither', !interested.seats && !interested.cost);

// 6c. Codex 11 (c) review: a game moved after its date passed takes its plan along; a moved Watching plan takes no seat.
const overdue = reconcileSeasonPlans([{ id: 'plan-2026-10-23-mlb-1', date: '2026-10-23', metroId: 'la', eventId: '2026-10-23-mlb-1', title: 'Giants at Dodgers', season: { teamId: 'dodgers', gameId: 'mlb-dodgers-1' } }], ticket, [game('1', '2026-10-26')], '2026-10-24', 'private');
ok('an overdue plan whose game moved ahead follows it, one plan', overdue.length === 1 && overdue[0].date === '2026-10-26');
const watchMoved = reconcileSeasonPlans([{ ...p6[0], watch: true, seats: undefined, cost: undefined }, handMade], ticket, moved, '2026-10-24', 'private');
ok('a moved Watching plan merges a twin without its seat', !watchMoved.find((p) => p.eventId === '2027-04-09-mlb-1').seats);

// 6d. Partial Codex stage 4 findings: a game moved to another past day takes its unsettled plan along; a flagged
// (vanished) season plan never settles into a stub; programs sharing a short name count only by their own code.
const pastMove = reconcileSeasonPlans([{ id: 'plan-2026-10-20-mlb-1', date: '2026-10-20', metroId: 'la', eventId: '2026-10-20-mlb-1', title: 'Giants at Dodgers', season: { teamId: 'dodgers', gameId: 'mlb-dodgers-1' } }], ticket, [game('1', '2026-10-22')], '2026-10-24', 'private');
ok('an unsettled plan whose game moved to another past day follows it', pastMove.length === 1 && pastMove[0].date === '2026-10-22' && pastMove[0].eventId === '2026-10-22-mlb-1');
const { seasonStubsOf } = await server.ssrLoadModule('/src/data/personalLog.ts');
const sdsu = (tags, title = 'Utah State at SDSU') => log([{ id: 'e', eventId: 'x', when: { sort: '2026-01-01', label: '', precision: 'day' }, title, tags, sport: 'Basketball', sides: ['SDSU', 'Utah State'], kind: 'game', metroId: 'san-diego' }]);
ok('a men\'s program tag counts for the men\'s team only', seasonStubsOf('sdsu-mbb', sdsu(['SDSU MBB'])).length === 1 && seasonStubsOf('sdsu-wbb', sdsu(['SDSU MBB'])).length === 0);
ok('a shared short name with no program sign counts for neither', seasonStubsOf('sdsu-mbb', sdsu([])).length === 0 && seasonStubsOf('sdsu-wbb', sdsu([])).length === 0);
ok('the title\'s Women\'s label decides when there is no code tag', seasonStubsOf('sdsu-wbb', sdsu([], 'Utah State at SDSU (Women\'s Basketball)')).length === 1);

// 7. Favorite cities' order (build 7.1, M31): a reorder is a stamped change, so the newer order wins on every device.
const cA = log([], [], { favoriteCities: ['boston', 'new-york'], favoriteCitiesAt: '2026-10-24T01:00:00Z' });
const cB = log([], [], { favoriteCities: ['new-york', 'boston'], favoriteCitiesAt: '2026-10-24T02:00:00Z' });
ok('a later reorder on the phone wins over the account', mergeLogs(cA, cB).favoriteCities.join() === 'new-york,boston');
ok('a later star on the account wins over an older reorder', mergeLogs(log([], [], { favoriteCities: ['boston', 'new-york', 'bay-area'], favoriteCitiesAt: '2026-10-24T03:00:00Z' }), cB).favoriteCities.join() === 'boston,new-york,bay-area');
ok('a reorder counts as a settings change', diffLogs(cA, { ...cA, favoriteCities: ['new-york', 'boston'], favoriteCitiesAt: '2026-10-24T02:00:00Z' }, t0).settings === true);

await server.close();
console.log(fails ? `${fails} failed` : 'all passed');
process.exit(fails ? 1 : 0);
