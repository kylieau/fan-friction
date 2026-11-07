// Build 7.2, Watching Season: the pure rules over a fixture schedule. Proves that tickets win (a ticket's Attending
// plan is never touched), a hand-made plan survives, a moved game's plan follows it, a removed game stays out, a
// dropped game is flagged and never deleted, preseason is left out, a season ticket adopting a watch plan turns it
// Attending, and the setup sheet's counts add up. Usage: node scripts/watching-season-check.mjs

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
try {
  const w = await server.ssrLoadModule('/src/data/watchingSeason.ts');
  const t = await server.ssrLoadModule('/src/data/seasonTickets.ts');
  const teamId = 'dodgers';
  const today = '2027-04-02';
  const game = (id, date, home, opponent, extra = {}) => ({ id, date, start: '19:10', home, opponent, ...extra });
  const games = [
    game('g0', '2027-03-20', true, 'Angels', { preseason: true }),
    game('g1', '2027-04-01', true, 'Giants'), // played yesterday
    game('g2', '2027-04-02', true, 'Giants'),
    game('g3', '2027-04-03', false, 'Giants'),
    game('g4', '2027-04-05', true, 'Padres'),
    game('g5', '2027-04-07', false, 'Padres'),
    game('g6', '2027-10-05', true, 'Cubs', { stakes: { round: 'NLDS', game: 1 } }),
  ];
  const season = { teamId, on: true, place: "Barney's", changed: { g5: 'Home' }, removed: { g4: { at: '2027-01-01T00:00:00Z' } }, updatedAt: '2027-01-01T00:00:00Z' };
  const ticketPlan = { id: 'plan-ticket', date: '2027-04-02', metroId: 'la', eventId: t.seasonPlanEventId(games[2]), title: 'Giants at Dodgers', season: { teamId, gameId: 'g2' }, visibility: 'friends' };
  const handPlan = { id: 'plan-hand', date: '2027-04-03', metroId: 'bay-area', eventId: t.seasonPlanEventId(games[3]), title: 'Dodgers at Giants', interested: true, visibility: 'friends' };

  // 1. The first reconcile: tickets win, a hand plan survives, removed stays out, preseason and past games left out.
  const first = w.reconcileWatchPlans([ticketPlan, handPlan], season, games, today, 'friends');
  const added = first.filter((p) => p.watchSeason);
  check(added.length === 2 && added.every((p) => p.watch), `adds the two unplanned games ahead as Watching (${added.map((p) => p.watchSeason.gameId).join(', ')})`);
  check(first.find((p) => p.id === 'plan-ticket') === ticketPlan, 'the ticket plan is the very same object (tickets win)');
  check(first.find((p) => p.id === 'plan-hand') === handPlan, 'the hand-made Interested plan is untouched');
  check(!added.some((p) => p.watchSeason.gameId === 'g4'), 'the removed game stays out');
  check(!added.some((p) => p.watchSeason.gameId === 'g0' || p.watchSeason.gameId === 'g1'), 'preseason and the played game are left out');
  check(added.find((p) => p.watchSeason.gameId === 'g5')?.watchedPlace === 'Home' && added.find((p) => p.watchSeason.gameId === 'g6')?.watchedPlace === "Barney's", 'a changed game takes its own spot, the rest the default');
  check(added.find((p) => p.watchSeason.gameId === 'g6')?.title.includes('Cubs'), 'the playoff game is added like any other (postseason auto)');

  // 2. Nothing changed: the same list back.
  const again = w.reconcileWatchPlans(first, season, games, today, 'friends');
  check(again.length === first.length && again.every((p, i) => p === first[i]), 'a second pass changes nothing');

  // 3. A moved game follows; a dropped game is flagged, never deleted; it clears when listed again.
  const moved = games.map((g) => (g.id === 'g5' ? { ...g, date: '2027-04-08' } : g)).filter((g) => g.id !== 'g6');
  const third = w.reconcileWatchPlans(first, season, moved, today, 'friends');
  const g5 = third.find((p) => p.watchSeason?.gameId === 'g5');
  const g6 = third.find((p) => p.watchSeason?.gameId === 'g6');
  check(g5?.date === '2027-04-08' && g5.watchedPlace === 'Home', 'a moved game keeps its plan and spot under the new date');
  check(g6?.watchSeason.gone === true && g6.watch, 'a dropped game is flagged gone and kept');
  const fourth = w.reconcileWatchPlans(third, season, games, today, 'friends');
  check(fourth.find((p) => p.watchSeason?.gameId === 'g6')?.watchSeason.gone === undefined, 'the flag clears once the schedule lists the game again');

  // 3b. A game moved onto a day she already planned by hand gives way to her plan: one plan, hers.
  const g6Id = t.seasonPlanEventId(games[6]);
  const hand6 = { id: 'plan-hand6', date: games[6].date, metroId: 'la', eventId: g6Id, title: 'Cubs at Dodgers', visibility: 'friends' };
  const onto = games.map((g) => (g.id === 'g5' ? { ...g, date: games[6].date, id: 'g5', home: true, opponent: 'Cubs', eventId: g6Id } : g));
  const collided = w.reconcileWatchPlans([...first, hand6], season, onto, today, 'friends');
  check(collided.filter((p) => p.eventId === g6Id).length === 2 && !collided.some((p) => p.watchSeason?.gameId === 'g5'), 'a moved game landing on her own plan gives way (no two plans with one id)');

  // 4. Off: nothing from the reconcile (the log's stop handles the plans).
  check(w.reconcileWatchPlans(first, { ...season, on: false }, games, today, 'friends').length === first.length, 'an off season changes nothing');
  check(w.reconcileWatchPlans(first, season, [], today, 'friends').length === first.length, 'an empty schedule changes nothing');

  // 5. A ticket adopting a watch plan: Attending, marker kept.
  const watchPlan = added.find((p) => p.watchSeason.gameId === 'g6');
  const ticket = { teamId, on: true, plan: 'full', preseason: false, removed: {}, updatedAt: '2027-01-01T00:00:00Z' };
  const adopted = t.adoptPlan(watchPlan, ticket, games[6]);
  check(!adopted.watch && !adopted.watchedPlace && adopted.season?.teamId === teamId && adopted.watchSeason?.gameId === 'g6', 'a season ticket turns a watch plan Attending and keeps the watch marker');

  // 6. The setup sheet's counts.
  const counts = w.watchSetupCounts(games, [ticketPlan, handPlan], season, today);
  check(counts.total === 4 && counts.ticketed === 1 && counts.planned === 1 && counts.toAdd === 2, `setup counts: ${JSON.stringify(counts)}`);

  // 7. Preseason stays out of the season's set, the playoff game is in.
  check(w.watchSeasonGames(games).length === 6, 'the season is six games (no preseason)');
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
