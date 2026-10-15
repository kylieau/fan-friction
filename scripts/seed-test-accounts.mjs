// Puts the two test accounts back into the state the handoff describes, after
// scripts/account-check.mjs has wiped them: B follows A (approved), A is on
// "People I approve", and A has three entries (one watched) and two plans, so the
// feeds have rows. Every row points at a real catalog event on its real date (Oct 15, 2026: an
// invented "Rams vs. Bills, Oct 4" showed on B's Friends tab; the game was Mon, Oct 12). Needs .env.local and private/test-accounts.json (git-ignored).
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
    { id: 'seed-a-1', eventId: '2026-10-03-dodgers', when: { sort: '2026-10-03', label: 'Oct 3, 2026', precision: 'day' }, title: 'Braves at Dodgers (NLDS\u00a0G1)', tags: ['Dodgers'], sport: 'Baseball', sides: ['Dodgers'], venue: 'Dodger Stadium', kind: 'game', metroId: 'la', inMetro: true, review: 'Loud from the first pitch.' },
    { id: 'seed-a-2', eventId: '2026-10-04-slayer', when: { sort: '2026-10-04', label: 'Oct 4, 2026', precision: 'day' }, title: 'Slayer', tags: ['Concerts'], sport: 'Concerts', sides: ['Slayer'], venue: 'Kia Forum', kind: 'show', metroId: 'la', inMetro: true },
    { id: 'seed-a-3', eventId: '2026-10-12-espn-rams-401872994', when: { sort: '2026-10-12', label: 'Oct 12, 2026', precision: 'day' }, title: 'Bills at Rams', tags: ['Rams'], sport: 'Football', sides: ['Rams'], venue: 'SoFi Stadium', kind: 'game', metroId: 'la', inMetro: true, watched: true },
  ],
  plans: [
    { id: 'plan-2026-10-18-espn-rams-401873004', date: '2026-10-18', metroId: 'la', eventId: '2026-10-18-espn-rams-401873004', title: 'Cardinals at Rams', venue: 'SoFi Stadium' },
    // An Interested answer on a real listed game (Kylie, Oct 11), so B's event page and by-event list have a line to show.
    { id: 'plan-2026-10-21-espn-lakers-401909092', date: '2026-10-21', metroId: 'la', eventId: '2026-10-21-espn-lakers-401909092', title: 'Warriors at Lakers', venue: 'crypto.com Arena', interested: true },
  ],
};
// Replace only the seed's own rows, so anything else on A (settings, rows added by hand) stays;
// the ids an older version of this script used are removed.
const OLD_PLAN_IDS = ['plan-seed-a', 'plan-2026-10-12-espn-rams-401872994'];
const before = await a.store.load();
const ours = new Set([...log.added, ...log.plans].map((row) => row.id).concat(OLD_PLAN_IDS));
const after = {
  ...before,
  added: [...before.added.filter((row) => !ours.has(row.id)), ...log.added],
  plans: [...before.plans.filter((row) => !ours.has(row.id)), ...log.plans],
};
await a.store.save(diffLogs(before, after));
const now = await a.store.load();
console.log(`Seeded: A has ${now.added.length} entries and ${now.plans.length} plans; B follows A (approved).`);
await server.close();
process.exit(0);
