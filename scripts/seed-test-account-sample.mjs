// Fills test account A with a believable log for agents to check every view against (build 7.1, M15; Locked, Kylie,
// Oct 23, 2026). Kylie runs it herself; agents never run its write path and never open her export.
//
// What it writes, to test account A only (never B, never anyone else):
//   - a sample of the events she attended or watched, taken from her "Export my events" file as EVENTS AND DATES ONLY:
//     each becomes an Attended or Watched stub for A that keeps the event, its date and its public facts (title, venue,
//     city, kind, sport, sides) and nothing of hers: no review, who-with, seats, cost, tags, sale amounts or level;
//   - random EXAMPLE data around them, marked "EXAMPLE" wherever it is text: seats, costs, reviews, who-with and tags
//     on those stubs, and plans (Attending, Watching, Interested) on real upcoming catalog events in Los Angeles and a
//     few other cities, so Upcoming, Your Stubs, Your Year, Spend, tags and the event page all have something to show.
//   Friends' rows and Activity from other people need rows on other accounts; this script writes A only (the existing
//   seed-test-accounts.mjs keeps B following A).
//
// Safe by default:
//   - a dry run unless --confirm is given: it prints what it would write and touches nothing;
//   - idempotent: every row it writes has an id starting "seed-sample-", and a run replaces only those rows;
//   - credentials only from the git-ignored private/test-accounts.json, read in the write path only; nothing is printed.
//
// Usage (dry run, then the write):
//   node scripts/seed-test-account-sample.mjs --from private/<her export>.json --size 24
//   node scripts/seed-test-account-sample.mjs --from private/<her export>.json --size 24 --confirm
// Optional: --seed <number> fixes the random choices (the same input and seed give the same rows); --show (dry run
// only) prints the rows it would write.
import { createServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const flag = (name) => {
  const at = args.indexOf(`--${name}`);
  return at >= 0 ? args[at + 1] : undefined;
};
const from = flag('from');
const sizeArg = Number(flag('size') ?? 24);
if (!Number.isFinite(sizeArg) || sizeArg < 1 || sizeArg > 200) {
  console.error('--size must be a number from 1 to 200.');
  process.exit(1);
}
const size = Math.min(200, Math.floor(sizeArg));
const confirm = args.includes('--confirm');
const seed = Number(flag('seed') ?? 7);
// --show prints the rows a dry run would write, so a check can prove nothing of hers travels.
const show = args.includes('--show') && !args.includes('--confirm');
if (!from) {
  console.error('Usage: node scripts/seed-test-account-sample.mjs --from <export.json> [--size 24] [--seed 7] [--confirm]');
  process.exit(1);
}

// A small seeded random, so a run can be repeated exactly.
let state = seed >>> 0 || 7;
const rand = () => {
  state = (state * 1664525 + 1013904223) >>> 0;
  return state / 2 ** 32;
};
const pick = (list) => list[Math.floor(rand() * list.length)];
const shuffle = (list) => [...list].map((x) => [rand(), x]).sort((a, b) => a[0] - b[0]).map(([, x]) => x);

// ---------- 1. Her export: events and dates only ----------
const backup = JSON.parse(readFileSync(from, 'utf8'));
if (backup?.app !== 'Fan/Friction' || !Array.isArray(backup.entries)) {
  console.error(`${from} is not a Fan/Friction "Export my events" file.`);
  process.exit(1);
}
// A catalog event on an exact day, so the stub opens a real event page; hand-typed and rough-dated rows are left out.
// A hand-typed stub later linked to an event keeps its manual- id and the words she typed: it is left out too.
const eligible = backup.entries.filter((e) => e && e.eventId && !String(e.id ?? '').startsWith('manual-') && e.when?.precision === 'day' && typeof e.when.sort === 'string' && e.metroId);
const sampled = shuffle(eligible).slice(0, size);

/** From her row only the event's id, its date, its city and whether it was watched; everything else comes from the catalog. */
const eventOnly = (e) => ({ eventId: String(e.eventId), date: e.when.sort, metroId: String(e.metroId), watched: Boolean(e.watched) });

// ---------- 2. EXAMPLE data around them ----------
const EXAMPLE_REVIEWS = ['EXAMPLE review: loud from the first minute.', 'EXAMPLE review: long lines at the gate, worth it.', 'EXAMPLE review: great seats, quiet crowd.', 'EXAMPLE review: left early, traffic was rough.'];
const EXAMPLE_WITH = ['Sam (example)', 'Jo (example)', 'Priya (example)', 'Lee (example)'];
const EXAMPLE_TAGS = ['example', 'example-birthday', 'example-rivalry', 'example-friends', 'example-rain', 'example-first'];
const exampleSeats = () => (rand() < 0.2 ? { spot: pick(['ga', 'floor', 'lawn']) } : { section: String(100 + Math.floor(rand() * 230)), row: pick(['A', 'C', 'F', 'K', 'M', 'R']), seat: String(1 + Math.floor(rand() * 24)) });
const exampleCost = (watched) =>
  watched
    ? rand() < 0.5
      ? { lines: [{ kind: 'stream', amount: pick([9.99, 14.99, 69.99]) }], currency: 'USD' }
      : undefined
    : rand() < 0.1
      ? { free: true, lines: [], currency: 'USD' }
      : { lines: [{ kind: 'ticket', amount: 40 + Math.floor(rand() * 200) }, ...(rand() < 0.5 ? [{ kind: 'parking', amount: pick([20, 30, 45]) }] : [])], currency: 'USD' };

// The catalog's own event for each sampled date; a stub is built from it the app's way (title, sides, tags, opponents,
// venue), so no word she typed travels. An event the catalog no longer holds is skipped.
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { getCityDate, getEventsBetween, todayIn, stubFromEvent } = await server.ssrLoadModule('/src/data/index.ts');
const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
const stubs = [];
let skipped = 0;
for (const ev of sampled.map(eventOnly)) {
  const day = await getCityDate(ev.metroId, ev.date).catch(() => null);
  const event = day ? [...(day.events ?? []), ...(day.furtherOut ?? [])].find((x) => x.id === ev.eventId) : undefined;
  if (!event) {
    skipped += 1;
    continue;
  }
  const review = rand() < 0.6 ? pick(EXAMPLE_REVIEWS) : undefined;
  const withWho = rand() < 0.5 ? pick(EXAMPLE_WITH) : undefined;
  // Every generated row carries the `example` tag, so it reads as EXAMPLE on every screen and the tag rides into the
  // stub when a plan settles (Codex stage 5); some get a second, random EXAMPLE tag.
  const userTags = [...new Set(['example', ...(rand() < 0.5 ? [pick(EXAMPLE_TAGS)] : [])])];
  const cost = exampleCost(ev.watched);
  stubs.push({
    ...stubFromEvent(event),
    id: `seed-sample-${stubs.length + 1}`,
    ...(ev.watched ? { watched: true } : { seats: exampleSeats() }),
    ...(cost ? { cost } : {}),
    ...(review ? { review } : {}),
    ...(withWho ? { with: withWho } : {}),
    userTags,
  });
}

// Plans on real upcoming catalog events: Los Angeles first, then a few other cities, a mix of the three answers.
const { listTitle } = await server.ssrLoadModule('/src/lib/eventTitle.ts');
const PLAN_CITIES = ['la', 'new-york', 'chicago', 'seattle'];
const plans = [];
for (const metroId of PLAN_CITIES) {
  const metro = METROS[metroId];
  if (!metro) continue;
  const today = todayIn(metro);
  const end = new Date(`${today}T12:00:00Z`);
  end.setUTCDate(end.getUTCDate() + 45);
  const events = await getEventsBetween(metroId, today, end.toISOString().slice(0, 10)).catch(() => []);
  const big = shuffle(events.filter((e) => e.date > today && e.place?.type === 'venue')).slice(0, metroId === 'la' ? 6 : 2);
  for (const e of big) {
    const answer = pick(['attend', 'attend', 'watch', 'interested']);
    plans.push({
      id: `seed-sample-plan-${plans.length + 1}`,
      date: e.date,
      metroId: e.metroId,
      eventId: e.id,
      title: listTitle(e),
      ...(answer === 'watch' ? { watch: true } : {}),
      ...(answer === 'interested' ? { interested: true } : {}),
      ...(answer === 'attend' && rand() < 0.5 ? { seats: exampleSeats(), cost: exampleCost(false) } : {}),
      userTags: [...new Set(['example', ...(answer !== 'interested' && rand() < 0.3 ? [pick(EXAMPLE_TAGS)] : [])])],
    });
  }
}

// ---------- 3. Dry-run summary ----------
const count = (list, test) => list.filter(test).length;
console.log(`Export: ${backup.entries.length} entries, ${eligible.length} on a catalog event and an exact day (hand-typed ones left out); ${skipped} sampled events no longer in the catalog were skipped.`);
console.log(`Would write to test account A only (ids "seed-sample-*"; other rows on A are left alone):`);
console.log(`  ${stubs.length} stubs from her events (events and dates only): ${count(stubs, (s) => !s.watched)} attended, ${count(stubs, (s) => s.watched)} watched`);
console.log(`    with EXAMPLE seats on ${count(stubs, (s) => s.seats)}, costs on ${count(stubs, (s) => s.cost)}, reviews on ${count(stubs, (s) => s.review)}, who-with on ${count(stubs, (s) => s.with)}, the example tag on every row`);
console.log(`  ${plans.length} EXAMPLE plans on real upcoming events: ${count(plans, (p) => !p.watch && !p.interested)} attending, ${count(plans, (p) => p.watch)} watching, ${count(plans, (p) => p.interested)} interested`);
console.log(`  cities: ${[...new Set([...stubs.map((s) => s.metroId), ...plans.map((p) => p.metroId)])].join(', ')}`);

if (!confirm) {
  if (show) console.log(JSON.stringify({ stubs, plans }, null, 1));
  console.log('Dry run: nothing written. Add --confirm to write.');
  await server.close();
  process.exit(0);
}

// ---------- 4. The write: test account A only ----------
const env = Object.fromEntries(readFileSync('.env.local', 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => l.split('=').map((x) => x.trim())));
const acct = JSON.parse(readFileSync('private/test-accounts.json', 'utf8'));
if (!acct?.a?.email) throw new Error('private/test-accounts.json has no account "a".');
const { createSupabaseEntryStore } = await server.ssrLoadModule('/src/data/storage/supabaseStore.ts');
const { diffLogs } = await server.ssrLoadModule('/src/data/storage/index.ts');
const client = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
const { data, error } = await client.auth.signInWithPassword({ email: acct.a.email, password: acct.a.password });
if (error) throw new Error(error.message);
const store = createSupabaseEntryStore(client, () => data.user.id);
const before = await store.load();
const ours = (row) => String(row.id).startsWith('seed-sample-');
// An event A already holds in a row of its own (another seed, an agent's check) is not seeded again.
const held = new Set([...before.added, ...before.plans].filter((row) => !ours(row) && row.eventId).map((row) => row.eventId));
const after = {
  ...before,
  added: [...before.added.filter((row) => !ours(row)), ...stubs.filter((row) => !held.has(row.eventId))],
  plans: [...before.plans.filter((row) => !ours(row)), ...plans.filter((row) => !held.has(row.eventId))],
};
await store.save(diffLogs(before, after));
const now = await store.load();
console.log(`Written: A now has ${now.added.length} stubs and ${now.plans.length} plans (${now.added.filter(ours).length + now.plans.filter(ours).length} from this script).`);
await server.close();
process.exit(0);
