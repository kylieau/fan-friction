// Season tickets, the answer rule (Kylie, Nov 12, 2026): a ticket's seat and price belong to Attending. Proves over a
// fixture schedule that an unedited season game dropping to Watching or Interested loses the ticket's defaults, that
// coming back to Attending restores them, that a game she edited keeps what she typed, that a ticket switched off
// changes nothing, that the reconcile takes the defaults off plans stored under the old carry rule (and only those),
// and that a default change still never reaches an edited game. Usage: node scripts/season-cost-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let failed = false;
const check = (ok, what) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${what}`);
  if (!ok) failed = true;
};
const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
try {
  const t = await server.ssrLoadModule('/src/data/seasonTickets.ts');
  const teamId = 'dodgers';
  const today = '2027-04-02';
  const game = (id, date, opponent) => ({ id, date, start: '19:10', home: true, opponent });
  const games = [game('g1', '2027-04-02', 'Giants'), game('g2', '2027-04-05', 'Padres'), game('g3', '2027-04-07', 'Padres'), game('g4', '2027-04-09', 'Rockies')];
  const ticket = { teamId, on: true, plan: 'full', seats: { section: '48', row: 'B', seat: '12' }, ticket: 68, parking: 20, currency: 'USD', preseason: true, removed: {}, updatedAt: '2027-01-01T00:00:00Z' };
  const defaults = t.seasonDefaultCost(ticket);
  check(defaults?.lines.length === 2 && defaults.lines[0].amount === 68 && defaults.lines[1].kind === 'parking', 'the ticket default is a $68 ticket and $20 parking');

  // 1. The season's plans start Attending with the defaults.
  const plans = t.reconcileSeasonPlans([], ticket, games, today, 'friends');
  check(plans.length === 4 && plans.every((p) => same(p.cost, defaults) && p.seats?.section === '48' && !p.season.edited), 'four Attending plans carry the seat and the price');

  // 2. The answer changes on an unedited game: Watching and Interested hold nothing of the ticket's; Attending brings it back.
  const [p1] = plans;
  const watching = t.seasonAnswerDefaults({ ...p1, watch: true }, ticket);
  check(watching.watch && !watching.cost && !watching.seats, 'to Watching: no price, no seat');
  const interested = t.seasonAnswerDefaults({ ...p1, interested: true }, ticket);
  check(interested.interested && !interested.cost && !interested.seats, 'to Interested: no price, no seat');
  const { watch: _w, ...backAgain } = watching;
  const back = t.seasonAnswerDefaults(backAgain, ticket);
  check(same(back.cost, defaults) && back.seats?.section === '48' && !back.season.edited, 'back to Attending: the seat and price return, still unedited');

  // 3. An edited game keeps what she typed whatever the answer; a ticket that is off changes nothing.
  const edited = t.editSeasonPlan(p1, { cost: { lines: [{ kind: 'ticket', amount: 40 }], currency: 'USD' } });
  const editedWatching = t.seasonAnswerDefaults({ ...edited, watch: true }, ticket);
  check(editedWatching === { ...edited, watch: true } || (editedWatching.cost?.lines[0].amount === 40 && editedWatching.season.edited), 'an edited game to Watching keeps her $40');
  const offPlan = { ...p1, watch: true };
  check(t.seasonAnswerDefaults(offPlan, { ...ticket, on: false }) === offPlan && t.seasonAnswerDefaults(offPlan, undefined) === offPlan, 'a ticket that is off, or none, returns the plan as it came');
  const handPlan = { id: 'plan-hand', date: '2027-04-10', metroId: 'la', eventId: 'x', title: 'Hand', cost: { lines: [{ kind: 'ticket', amount: 10 }] }, visibility: 'friends' };
  check(t.seasonAnswerDefaults(handPlan, ticket) === handPlan, 'a plan with no season marker is left alone');

  // 4. The reconcile heals plans stored under the old carry rule: an unedited Watching plan with the default loses it; an
  //    edited Watching plan keeps hers; an Attending plan is untouched; a second pass is quiet.
  const stored = [plans[0], { ...plans[1], watch: true }, { ...plans[2], watch: true, cost: { lines: [{ kind: 'stream', amount: 15 }], currency: 'USD' }, season: { ...plans[2].season, edited: true } }, { ...plans[3], interested: true, seats: undefined }];
  const healed = t.reconcileSeasonPlans(stored, ticket, games, today, 'friends');
  const by = (id) => healed.find((p) => p.id === id);
  check(by(plans[0].id) === plans[0], 'an Attending plan is the very same object');
  check(by(plans[1].id).watch && !by(plans[1].id).cost && !by(plans[1].id).seats, 'a stored Watching plan loses the ticket price and seat');
  check(by(plans[2].id).cost?.lines[0].kind === 'stream' && by(plans[2].id).season.edited, 'an edited Watching plan keeps her stream cost');
  check(by(plans[3].id).interested && !by(plans[3].id).cost, 'a stored Interested plan loses the ticket price');
  const quiet = t.reconcileSeasonPlans(healed, ticket, games, today, 'friends');
  check(quiet.length === healed.length && quiet.every((p, i) => p === healed[i]), 'a second pass changes nothing');
  // A failed schedule read (an empty list) still takes the old defaults off, and nothing else moves (Codex, group 15 review).
  const noSchedule = t.reconcileSeasonPlans(stored, ticket, [], today, 'friends');
  check(noSchedule.length === stored.length && !noSchedule[1].cost && !noSchedule[1].seats && noSchedule[0] === stored[0] && noSchedule[2].cost?.lines[0].kind === 'stream', 'with no schedule, a stored Watching plan still loses the price and the rest stay as they were');
  const noScheduleQuiet = t.reconcileSeasonPlans(healed, ticket, [], today, 'friends');
  check(noScheduleQuiet.every((p, i) => p === healed[i]), 'with no schedule and nothing to take off, the same plans come back');

  // 5. A default change ("Apply to unedited") on a Watching plan still gives it nothing; on an Attending plan, the new price.
  const dearer = { ...ticket, ticket: 80 };
  const appliedWatching = t.applySeasonDefaults(by(plans[1].id), dearer);
  check(appliedWatching.watch && !appliedWatching.cost, 'a default change gives a Watching plan no price');
  const appliedAttending = t.applySeasonDefaults(plans[0], dearer);
  check(appliedAttending.cost?.lines[0].amount === 80 && appliedAttending.seats?.section === '48', 'a default change gives an Attending plan the new price');

  // 6. Adopting her own Watching plan on a ticketed game still turns it Attending with the defaults (tickets win).
  const own = { id: 'plan-own', date: '2027-04-09', metroId: 'la', eventId: t.seasonPlanEventId(games[3]), title: 'Rockies at Dodgers', watch: true, watchSeason: { teamId, gameId: 'g4' }, visibility: 'friends' };
  const adopted = t.adoptPlan(own, ticket, games[3]);
  check(!adopted.watch && same(adopted.cost, defaults) && adopted.seats?.section === '48', 'a ticket adopting a watch plan makes it Attending with the seat and price');
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
