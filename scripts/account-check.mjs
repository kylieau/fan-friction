// Live check of account sync (two sessions, one account) and follow approval (two accounts) against the
// Supabase project in .env.local. Needs private/test-accounts.json ({a:{email,password},b:{...}}, git-ignored;
// the two test accounts were made Oct 9, 2026). Leaves both accounts empty. Run: node scripts/account-check.mjs
import { createServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
const env = Object.fromEntries(readFileSync('.env.local', 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => l.split('=').map((x) => x.trim())));
const acct = JSON.parse(readFileSync('private/test-accounts.json', 'utf8'));
const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { createSupabaseEntryStore } = await server.ssrLoadModule('/src/data/storage/supabaseStore.ts');
const { diffLogs, mergeLogs } = await server.ssrLoadModule('/src/data/storage/index.ts');
let fails = 0;
const ok = (name, cond, extra = '') => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`); if (!cond) fails++; };
const session = async (who) => {
  const c = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await c.auth.signInWithPassword({ email: acct[who].email, password: acct[who].password });
  if (error) throw new Error(error.message);
  return { c, id: data.user.id, store: createSupabaseEntryStore(c, () => data.user.id) };
};
const entry = (id, extra = {}) => ({ id, when: { sort: '2026-10-01', label: '', precision: 'day' }, title: id, tags: [], sport: 'Baseball', sides: [], kind: 'game', metroId: 'la', ...extra });
const log = (added, plans = [], extra = {}) => ({ version: 1, hiddenSeedIds: [], added, plans, order: 'plans-first', ...extra });
const empty = log([]);

// ---- Sync: two sessions, one account ----
const s1 = await session('a'), s2 = await session('a');
// clean slate
await s1.c.from('entries').delete().eq('user_id', s1.id); await s1.c.from('plans').delete().eq('user_id', s1.id); await s1.c.from('settings').delete().eq('user_id', s1.id); await s1.c.from('removed_rows').delete().eq('user_id', s1.id);

let phone1 = log([entry('mark-x'), entry('mark-y', { with: 'Sam' })], [{ id: 'plan-p', date: '2026-12-01', metroId: 'la', eventId: 'p', title: 'P' }]);
let d = diffLogs(empty, phone1); phone1 = d.log; await s1.store.save(d);
let cloud2 = await s2.store.load();
ok('session 2 sees both entries and the plan', cloud2.added.length === 2 && cloud2.plans.length === 1);
ok('the private With came back only to the owner store', cloud2.added.find((e) => e.id === 'mark-y').with === 'Sam');

// session 2 removes x
let phone2 = cloud2;
d = diffLogs(phone2, log(phone2.added.filter((e) => e.id !== 'mark-x'), phone2.plans, { removed: phone2.removed })); phone2 = d.log; await s2.store.save(d);

// session 1 is stale (still has x) and adds z: the old bug would have re-upserted x and deleted nothing else; the new save touches only z
d = diffLogs(phone1, log([...phone1.added, entry('mark-z')], phone1.plans, { removed: phone1.removed })); phone1 = d.log; await s1.store.save(d);
let rows = (await s1.c.from('entries').select('id').eq('user_id', s1.id)).data.map((r) => r.id).sort();
ok('a stale session adding z did not bring x back (C112)', rows.join() === 'mark-y,mark-z', rows.join());

// session 1, still stale, saves a settings change (favorites): with the old JSON map that overwrote the
// account's removed ids and x came back on the next merge (R09). With removed_rows it cannot.
d = diffLogs(phone1, log(phone1.added, phone1.plans, { removed: phone1.removed, favorites: [{ kind: 'team', id: 'dodgers', label: 'Dodgers' }] })); phone1 = d.log; await s1.store.save(d);
let cloud1 = await s1.store.load();
ok('x stays removed after a stale tab wrote settings (R09; needs migration 0014)', 'mark-x' in cloud1.removed && !mergeLogs(cloud1, phone1).added.some((e) => e.id === 'mark-x'), Object.keys(cloud1.removed).join());
ok('edit times come back as the server clock (R10; needs migration 0014)', cloud1.added.every((e) => typeof e.updatedAt === 'string' && e.updatedAt.endsWith('Z')));

// session 1 reopens: merge drops x by the tombstone, keeps z (C114)
cloud1 = await s1.store.load();
let merged = mergeLogs(cloud1, phone1);
ok('on reopen, x stays removed and z stays (C114)', merged.added.map((e) => e.id).sort().join() === 'mark-y,mark-z', merged.added.map((e) => e.id).join());

// offline edit: session 2 edits y (later), session 1 edited y (earlier) → newer wins (C113)
d = diffLogs(phone1, log(phone1.added.map((e) => (e.id === 'mark-y' ? { ...e, review: 'earlier' } : e)), phone1.plans, { removed: phone1.removed }), new Date(Date.now() - 60000)); phone1 = d.log; // not sent: "offline"
cloud2 = await s2.store.load();
d = diffLogs(cloud2, log(cloud2.added.map((e) => (e.id === 'mark-y' ? { ...e, review: 'later' } : e)), cloud2.plans, { removed: cloud2.removed })); await s2.store.save(d);
cloud1 = await s1.store.load();
merged = mergeLogs(cloud1, phone1);
ok('the newer edit wins over an older offline one (C113)', merged.added.find((e) => e.id === 'mark-y').review === 'later');
// and the other way round
d = diffLogs(phone1, log(phone1.added.map((e) => (e.id === 'mark-y' ? { ...e, review: 'newest' } : e)), phone1.plans, { removed: phone1.removed }), new Date(Date.now() + 1000)); phone1 = d.log;
merged = mergeLogs(await s1.store.load(), phone1);
ok('a newer offline edit beats the account copy (C113)', merged.added.find((e) => e.id === 'mark-y').review === 'newest');

// plan removal reaches the other session
d = diffLogs(phone2, log(phone2.added, [], { removed: phone2.removed })); phone2 = d.log; await s2.store.save(d);
cloud1 = await s1.store.load();
ok('a plan removed on one device is gone for the other', cloud1.plans.length === 0 && 'plan-p' in cloud1.removed);

// ---- Follow approval: B follows A ----
const b = await session('b');
await b.c.from('follows').delete().eq('follower_id', b.id);
await s1.c.from('profiles').update({ visibility: 'anyone' }).eq('id', s1.id);
let r = await b.c.from('follows').insert({ follower_id: b.id, followee_id: s1.id, status: 'approved' });
ok('database refuses a self-approved follow (needs migration 0011)', Boolean(r.error), r.error ? r.error.message : 'row was accepted');
await b.c.from('follows').delete().eq('follower_id', b.id);
r = await b.c.from('follows').insert({ follower_id: b.id, followee_id: s1.id, status: 'pending' });
ok('a pending request is accepted', !r.error, r.error?.message);
r = await b.c.from('follows').update({ status: 'approved' }).eq('follower_id', b.id).eq('followee_id', s1.id).select();
ok('the follower cannot approve their own request', !r.data || r.data.length === 0);
r = await s1.c.from('follows').update({ status: 'approved' }).eq('follower_id', b.id).eq('followee_id', s1.id).select();
ok('the person followed can approve', r.data && r.data.length === 1 && r.data[0].status === 'approved');
// simulate an app-made auto approval, then tighten: should go back to pending (needs migration 0011)
await s1.c.from('follows').update({ auto_approved: true }).eq('follower_id', b.id).eq('followee_id', s1.id);
await s1.c.from('profiles').update({ visibility: 'approved' }).eq('id', s1.id);
r = await s1.c.from('follows').select('status, auto_approved').eq('follower_id', b.id).eq('followee_id', s1.id).maybeSingle();
ok('leaving "Anyone" re-asks an auto-approved follower (needs migration 0011)', r.data?.status === 'pending', JSON.stringify(r.data ?? r.error?.message));
// A's entries are hidden from B while pending
let seen = (await b.c.from('entries').select('id').eq('user_id', s1.id)).data ?? [];
ok('a pending follower sees none of A\'s entries on "People I approve"', seen.length === 0, `${seen.length} rows`);
// ---- Oct 10 privacy fixes (R01, R03, R04, R05, R06) ----
await b.c.from('follows').delete().eq('follower_id', b.id);
r = await b.c.from('follows').insert({ follower_id: b.id, followee_id: s1.id, status: 'pending', auto_approved: true });
ok('database refuses a request marked auto-approved by its sender (R01; needs migration 0015)', Boolean(r.error), r.error ? '' : 'row was accepted');
await b.c.from('follows').delete().eq('follower_id', b.id);
await b.c.from('follows').insert({ follower_id: b.id, followee_id: s1.id, status: 'pending' });
await s1.c.from('follows').update({ status: 'declined' }).eq('follower_id', b.id).eq('followee_id', s1.id);
r = await b.c.from('my_follows').select('status').eq('followee_id', s1.id).maybeSingle();
ok('the requester reads a declined request as pending (R03; needs migration 0016)', r.data?.status === 'pending', r.error?.message ?? JSON.stringify(r.data));
r = await b.c.from('follows').select('status').eq('followee_id', s1.id);
ok('the requester reads nothing from the follows table itself (R03; needs migration 0016)', (r.data ?? []).length === 0, `${(r.data ?? []).length} rows`);
await b.c.from('follows').delete().eq('follower_id', b.id).eq('followee_id', s1.id);
r = await s1.c.from('follows').select('status').eq('follower_id', b.id).maybeSingle();
ok('the requester cannot clear a declined request (R03; needs migration 0016)', r.data?.status === 'declined', JSON.stringify(r.data));
await s1.c.from('follows').upsert({ follower_id: b.id, followee_id: s1.id, status: 'approved' });
await s1.c.from('profiles').update({ visibility: 'approved' }).eq('id', s1.id);
d = diffLogs(empty, log([entry('seen-1', { review: 'public words', starter: 'only for me' })])); await s1.store.save(d);
r = await b.c.from('entry_cards').select('id, review').eq('user_id', s1.id);
ok('an approved follower reads the entry card, review included (R05; needs migration 0017)', r.data?.length === 1 && r.data[0].review === 'public words', r.error?.message ?? JSON.stringify(r.data));
r = await b.c.from('entries').select('data').eq('user_id', s1.id);
ok('an approved follower cannot read whole entry rows (R05; needs migration 0017)', (r.data ?? []).length === 0, `${(r.data ?? []).length} rows`);
await s1.c.from('follows').update({ status: 'removed' }).eq('follower_id', b.id).eq('followee_id', s1.id);
r = await b.c.from('my_follows').select('status').eq('followee_id', s1.id).maybeSingle();
ok('a removed follower still reads approved (R04; needs migration 0016)', r.data?.status === 'approved', r.error?.message ?? JSON.stringify(r.data));
r = await b.c.from('entry_cards').select('id').eq('user_id', s1.id);
ok('a removed follower sees no cards (R04; needs migrations 0016, 0017)', !r.error && (r.data ?? []).length === 0, r.error?.message ?? `${(r.data ?? []).length} rows`);
const anon = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
const handleA = (await s1.c.from('profiles').select('handle').eq('id', s1.id).maybeSingle()).data?.handle;
await s1.c.from('profiles').update({ link_off: true }).eq('id', s1.id);
r = await anon.from('profile_cards').select('id').eq('handle', handleA);
ok('with the link off, a visitor finds no card (R06; needs migration 0017)', !r.error && (r.data ?? []).length === 0, r.error?.message ?? `${(r.data ?? []).length} rows`);
r = await anon.from('profiles').select('home_metro_id').eq('id', s1.id);
ok('a visitor cannot read the profiles table (needs migration 0017)', (r.data ?? []).length === 0, `${(r.data ?? []).length} rows`);
await s1.c.from('profiles').update({ link_off: false }).eq('id', s1.id);

// ---- Section 4: search, block, keep-private ----
r = await b.c.from('profile_cards').select('id, handle').or(`handle.ilike.%${handleA.slice(0, 3)}%,display_name.ilike.%${handleA.slice(0, 3)}%`);
ok('a partial name or handle finds a card (section 4; needs migration 0017)', !r.error && (r.data ?? []).some((row) => row.id === s1.id), r.error?.message ?? `${(r.data ?? []).length} rows`);
await s1.c.from('follows').update({ status: 'approved' }).eq('follower_id', b.id).eq('followee_id', s1.id);
d = diffLogs(empty, log([entry('seen-2', { review: 'shown' }), entry('hidden-1', { private: true, review: 'never shown' })])); await s1.store.save(d);
r = await b.c.from('entry_cards').select('id').eq('user_id', s1.id);
ok('a private entry stays off the cards (section 4; needs migration 0019)', !r.error && (r.data ?? []).map((x) => x.id).join() === 'seen-2', r.error?.message ?? (r.data ?? []).map((x) => x.id).join());
r = await s1.c.rpc('block_user', { target: b.id });
ok('block runs (section 4; needs migration 0018)', !r.error, r.error?.message);
r = await s1.c.from('follows').select('status').eq('follower_id', b.id).eq('followee_id', s1.id);
ok('block removes the follow', (r.data ?? []).length === 0, `${(r.data ?? []).length} rows`);
r = await b.c.from('profile_cards').select('id').eq('id', s1.id);
ok('the blocked person no longer finds the card (needs migration 0018)', !r.error && (r.data ?? []).length === 0, r.error?.message ?? `${(r.data ?? []).length} rows`);
r = await b.c.from('entry_cards').select('id').eq('user_id', s1.id);
ok('the blocked person sees no cards', (r.data ?? []).length === 0, `${(r.data ?? []).length} rows`);
await s1.c.rpc('unblock_user', { target: b.id });

// cleanup
await b.c.from('follows').delete().eq('follower_id', b.id);
await s1.c.from('follows').delete().eq('follower_id', b.id);
await s1.c.from('profiles').update({ visibility: 'only_me' }).eq('id', s1.id);
await s1.c.from('entries').delete().eq('user_id', s1.id); await s1.c.from('plans').delete().eq('user_id', s1.id); await s1.c.from('settings').delete().eq('user_id', s1.id); await s1.c.from('removed_rows').delete().eq('user_id', s1.id);
await server.close();
console.log(fails ? `${fails} failed` : 'all passed');
process.exit(0);
