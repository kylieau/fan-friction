// Puts the two test accounts back into the state the handoff describes, after
// scripts/account-check.mjs has wiped them: B follows A (approved), A is on
// "People I approve", and A has three entries (one watched) and one plan, so the
// feeds have rows. Needs .env.local and private/test-accounts.json (git-ignored).
// Run: node scripts/seed-test-accounts.mjs
import { createServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
const env = Object.fromEntries(readFileSync('.env.local', 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => l.split('=').map((x) => x.trim())));
const acct = JSON.parse(readFileSync('private/test-accounts.json', 'utf8'));
const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { createSupabaseEntryStore } = await server.ssrLoadModule('/src/data/storage/supabaseStore.ts');
const { diffLogs } = await server.ssrLoadModule('/src/data/storage/index.ts');

const session = async (who) => {
  const c = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await c.auth.signInWithPassword({ email: acct[who].email, password: acct[who].password });
  if (error) throw new Error(error.message);
  return { c, id: data.user.id, store: createSupabaseEntryStore(c, () => data.user.id) };
};

const a = await session('a');
const b = await session('b');
await a.c.from('follows').delete().eq('follower_id', b.id).eq('followee_id', a.id);
await b.c.from('follows').insert({ follower_id: b.id, followee_id: a.id, status: 'pending' });
await a.c.from('follows').update({ status: 'approved' }).eq('follower_id', b.id).eq('followee_id', a.id);
await a.c.from('profiles').update({ visibility: 'approved' }).eq('id', a.id);

const empty = { version: 1, hiddenSeedIds: [], added: [], plans: [], order: 'plans-first' };
const log = {
  ...empty,
  added: [
    { id: 'seed-a-1', eventId: 'mlb-813007', when: { sort: '2026-10-03', label: 'Oct 3, 2026', precision: 'day' }, title: 'Dodgers vs. Braves', tags: ['Dodgers'], sport: 'Baseball', sides: ['Dodgers'], venue: 'Dodger Stadium', kind: 'game', metroId: 'la', inMetro: true, review: 'Loud from the first pitch.' },
    { id: 'seed-a-2', when: { sort: '2026-10-02', label: 'Oct 2, 2026', precision: 'day' }, title: 'Slayer', tags: ['Concerts'], sport: 'Concerts', sides: ['Slayer'], venue: 'Kia Forum', kind: 'show', metroId: 'la', inMetro: true },
    { id: 'seed-a-3', when: { sort: '2026-10-04', label: 'Oct 4, 2026', precision: 'day' }, title: 'Rams vs. Bills', tags: ['Rams'], sport: 'Football', sides: ['Rams'], venue: 'SoFi Stadium', kind: 'game', metroId: 'la', inMetro: true, watched: true },
  ],
  plans: [
    { id: 'plan-seed-a', date: '2026-10-17', metroId: 'la', eventId: 'seed-plan-texas', title: 'Texas vs. Oklahoma', venue: 'Cotton Bowl' },
    // An Interested answer on a real listed game (Kylie, Oct 11), so B's event page and by-event list have a line to show.
    { id: 'plan-2026-10-12-espn-rams-401872994', date: '2026-10-12', metroId: 'la', eventId: '2026-10-12-espn-rams-401872994', title: 'Rams vs. Bills', venue: 'SoFi Stadium', interested: true },
  ],
};
await a.store.save(diffLogs(empty, log));
console.log(`Seeded: A has ${(await a.store.load()).added.length} entries and 1 plan; B follows A (approved).`);
await server.close();
process.exit(0);
