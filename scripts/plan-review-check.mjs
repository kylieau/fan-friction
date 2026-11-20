// A review on a plan (Kylie, Nov 19, 2026: "let users review once an event has started, or even as soon as they stub
// it"): proves the setter writes and clears a review on an Attending or Watching plan and never on an Interested one,
// that the review reaches the stub when the plan settles, that a stub another run made meanwhile takes the plan's
// review only when it has none; the Codex cases (section 4): the answer change, a Private plan's level, a stub logged
// before the date, an edit or a removal during the dates' load, a season plan folding in her own. Usage: node scripts/plan-review-check.mjs

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
  const log = await server.ssrLoadModule('/src/data/personalLog.ts');
  const event = (id, date) => ({ id, metroId: 'la', date, start: '19:00', kind: 'game', title: 'Sac Kings at Lakers', place: { type: 'venue', venueId: 'crypto-com-arena' }, audience: { domain: 'sports', sport: 'basketball' }, teams: { home: 'lakers', away: 'sac-kings', awayOpponent: 'Sac Kings' }, crowd: [], sourceId: 'espn' });
  const past = event('2026-11-10-espn-lakers-1', '2026-11-10');
  const ahead = event('2027-02-10-espn-lakers-2', '2027-02-10');

  // 1. The setter on an Attending plan, a Watching plan, and an Interested one.
  log.togglePlan(ahead, 'attend');
  let plan = log.getPersonalLog().plans.find((p) => p.eventId === ahead.id);
  check(plan && !plan.review, 'an Attending plan starts with no review');
  log.setPlanReview(plan.id, '  Loud building, great seats.  ');
  plan = log.getPersonalLog().plans.find((p) => p.id === plan.id);
  check(plan.review === 'Loud building, great seats.', `the review is saved, trimmed: "${plan.review}"`);
  log.setPlanReview(plan.id, '   ');
  plan = log.getPersonalLog().plans.find((p) => p.id === plan.id);
  check(plan.review === undefined, 'blank text clears it');
  log.setPlanReview(plan.id, 'Second try.');
  log.togglePlan(ahead, 'interested');
  plan = log.getPersonalLog().plans.find((p) => p.eventId === ahead.id);
  check(plan.interested === true, 'the plan is Interested now');
  log.setPlanReview(plan.id, 'Should not land.');
  plan = log.getPersonalLog().plans.find((p) => p.id === plan.id);
  check(plan.review !== 'Should not land.', 'an Interested plan takes no review');
  log.togglePlan(ahead, 'watch');
  plan = log.getPersonalLog().plans.find((p) => p.eventId === ahead.id);
  log.setPlanReview(plan.id, 'From the couch.');
  check(log.getPersonalLog().plans.find((p) => p.id === plan.id).review === 'From the couch.', 'a Watching plan takes one');

  // 2. Settlement: a passed Attending plan with a review becomes a stub with that review.
  log.togglePlan(past, 'attend');
  const pastPlan = log.getPersonalLog().plans.find((p) => p.eventId === past.id);
  log.setPlanReview(pastPlan.id, 'What a night.');
  await log.settlePassedPlans(async () => ({ events: [past] }), 'la');
  const stub = log.getPersonalLog().added.find((e) => e.eventId === past.id);
  check(Boolean(stub) && !log.getPersonalLog().plans.some((p) => p.eventId === past.id), 'the passed plan settled into a stub');
  check(stub?.review === 'What a night.', `the stub carries the plan's review: "${stub?.review}"`);

  // 3. A stub another run made meanwhile (made while the dates load, the real race): it keeps its own review, else
  //    takes the plan's.
  const past2 = event('2026-11-11-espn-lakers-3', '2026-11-11');
  log.togglePlan(past2, 'attend');
  const plan2 = log.getPersonalLog().plans.find((p) => p.eventId === past2.id);
  log.setPlanReview(plan2.id, "The plan's words.");
  await log.settlePassedPlans(async () => {
    log.markWasThere(past2);
    const made = log.getPersonalLog().added.find((e) => e.eventId === past2.id);
    log.updateEntry(made.id, { review: 'Her own words.' });
    return { events: [past2] };
  }, 'la');
  const kept = log.getPersonalLog().added.filter((e) => e.eventId === past2.id);
  check(kept.length === 1 && kept[0].review === 'Her own words.', `a stub made meanwhile keeps its own review, once (${kept.length} stub, "${kept[0]?.review}")`);
  const past3 = event('2026-11-12-espn-lakers-4', '2026-11-12');
  log.togglePlan(past3, 'attend');
  const plan3 = log.getPersonalLog().plans.find((p) => p.eventId === past3.id);
  log.setPlanReview(plan3.id, 'Carried over.');
  await log.settlePassedPlans(async () => {
    log.markWasThere(past3);
    return { events: [past3] };
  }, 'la');
  const took = log.getPersonalLog().added.filter((e) => e.eventId === past3.id);
  check(took.length === 1 && took[0].review === 'Carried over.', `a stub made meanwhile with no review takes the plan's (${took.length} stub, "${took[0]?.review}")`);

  // 4. Codex, group 19 review: the review survives Attending <-> Watching; a Private plan's level reaches the stub; a
  //    stub logged before the date passed takes the plan's review; an edit during the dates' load wins; a season
  //    plan folding in her own plan keeps her review.
  const ahead2 = event('2027-02-12-espn-lakers-5', '2027-02-12');
  log.togglePlan(ahead2, 'attend');
  let p = log.getPersonalLog().plans.find((x) => x.eventId === ahead2.id);
  log.setPlanReview(p.id, 'Kept across answers.');
  log.togglePlan(ahead2, 'watch');
  p = log.getPersonalLog().plans.find((x) => x.eventId === ahead2.id);
  check(p.watch === true && p.review === 'Kept across answers.', 'Attending to Watching keeps the review');
  log.togglePlan(ahead2, 'attend');
  p = log.getPersonalLog().plans.find((x) => x.eventId === ahead2.id);
  check(!p.watch && p.review === 'Kept across answers.', 'and back to Attending keeps it');
  const past4 = event('2026-11-09-espn-lakers-6', '2026-11-09');
  log.togglePlan(past4, 'attend');
  const p4 = log.getPersonalLog().plans.find((x) => x.eventId === past4.id);
  const privacy = await server.ssrLoadModule('/src/data/personalLog.ts');
  await privacy.setStubVisibility(past4.id, 'private');
  log.setPlanReview(p4.id, 'Just for me.');
  await log.settlePassedPlans(async () => ({ events: [past4] }), 'la');
  const s4 = log.getPersonalLog().added.find((e) => e.eventId === past4.id);
  check(s4?.visibility === 'private' && s4.review === 'Just for me.', `a Private Attending plan settles as a Private stub with its review (${s4?.visibility})`);
  const past5 = event('2026-11-08-espn-lakers-7', '2026-11-08');
  log.markWasThere(past5);
  log.togglePlan(past5, 'attend');
  const p5 = log.getPersonalLog().plans.find((x) => x.eventId === past5.id);
  if (p5) {
    log.setPlanReview(p5.id, 'Written on the plan.');
    await log.settlePassedPlans(async () => ({ events: [past5] }), 'la');
    const s5 = log.getPersonalLog().added.filter((e) => e.eventId === past5.id);
    check(s5.length === 1 && s5[0].review === 'Written on the plan.' && !log.getPersonalLog().plans.some((x) => x.eventId === past5.id), "a stub logged before the date passed takes the plan's review, and the plan clears");
  } else console.log('     (a plan on an already-logged event is not kept; the fill path has no case here)');
  const past6 = event('2026-11-07-espn-lakers-8', '2026-11-07');
  log.togglePlan(past6, 'attend');
  const p6 = log.getPersonalLog().plans.find((x) => x.eventId === past6.id);
  log.setPlanReview(p6.id, 'OLD');
  await log.settlePassedPlans(async () => {
    log.setPlanReview(p6.id, 'NEW');
    return { events: [past6] };
  }, 'la');
  check(log.getPersonalLog().added.find((e) => e.eventId === past6.id)?.review === 'NEW', "an edit that lands while the dates load is the stub's review");
  const past7 = event('2026-11-06-espn-lakers-9', '2026-11-06');
  log.togglePlan(past7, 'attend');
  const p7 = log.getPersonalLog().plans.find((x) => x.eventId === past7.id);
  await log.settlePassedPlans(async () => {
    log.removePlan(p7.id);
    return { events: [past7] };
  }, 'la');
  check(!log.getPersonalLog().added.some((e) => e.eventId === past7.id), 'a plan removed while the dates load settles nothing');
  const tickets = await server.ssrLoadModule('/src/data/seasonTickets.ts');
  const g = { id: 'sg1', date: '2027-03-01', start: '19:00', home: true, opponent: 'Kings' };
  const ticket = { teamId: 'lakers', on: true, plan: 'full', seats: { section: '1' }, ticket: 50, currency: 'USD', preseason: true, removed: {}, updatedAt: '2027-01-01T00:00:00Z' };
  const own = { id: `plan-${tickets.seasonPlanEventId(g)}`, date: g.date, metroId: 'la', eventId: tickets.seasonPlanEventId(g), title: 'Kings at Lakers', review: 'Mine first.', visibility: 'friends' };
  const seasonPlan = { ...own, id: 'plan-season-sg1', review: undefined, season: { teamId: 'lakers', gameId: 'sg1' } };
  const folded = tickets.reconcileSeasonPlans([seasonPlan, own], ticket, [g], '2027-02-01', 'friends');
  check(folded.length === 1 && folded[0].review === 'Mine first.' && folded[0].season, "a season plan folding in her own plan keeps her review");
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
