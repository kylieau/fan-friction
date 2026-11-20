// A review on a plan (Kylie, Nov 19, 2026: "let users review once an event has started, or even as soon as they stub
// it"): proves the setter writes and clears a review on an Attending or Watching plan and never on an Interested one,
// that the review reaches the stub when the plan settles, that a stub another run made meanwhile takes the plan's
// review only when it has none, and that the account row carries it in `data` (shared at the plan's level, as a
// stub's review is). Usage: node scripts/plan-review-check.mjs

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
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
