// Profiles: the public face of an account. Others see a card (id, handle, name) and the
// entries the owner's visibility allows, as cards (title, date, venue, city, kind, the
// read and the review). Whole rows are the owner's alone; the database enforces it
// (supabase/migrations/0017_cards.sql). Screens reach this through src/data/index.ts.
//
// Until Kylie has run a migration, the view or column it adds is not there; every read
// here falls back to the older shape and narrows in code, so the app keeps working.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import { notThereYet, olderShape } from './storage/dbErrors';
import type { Entry, EventKind, LoggedWhen, Stamp } from './types';
import { METROS } from '../config/metros';
import type { SupabaseClient } from '@supabase/supabase-js';

export type Visibility = 'only_me' | 'approved' | 'anyone';

export interface Profile {
  id: string;
  handle: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  /** Only on your own profile. A card someone else sees carries no setting. */
  visibility?: Visibility;
  /** The city the map opens on, kept with the account since Oct 6, 2026 so it follows you to another phone. Own profile only. */
  homeMetroId: string | null;
  /** The profile link is switched off (R06). Own profile only; absent before migration 0017. */
  linkOff?: boolean;
}

export type FollowStatus = 'none' | 'pending' | 'approved';

/** Someone in your Followers or Following list. */
export interface Person {
  profile: Profile;
  /** For a follower: whether you follow them back ('none' | 'pending' | 'approved'). For someone you follow: your request's state. */
  status: FollowStatus;
}

export interface FollowRequest {
  followerId: string;
  displayName: string | null;
  handle: string | null;
}

interface ProfileRow {
  id: string;
  handle: string | null;
  display_name: string | null;
  avatar_url?: string | null;
  visibility?: Visibility;
  home_metro_id?: string | null;
  link_off?: boolean;
}

function fromRow(row: ProfileRow): Profile {
  return {
    id: row.id,
    handle: row.handle,
    displayName: row.display_name,
    avatarUrl: row.avatar_url ?? null,
    ...(row.visibility ? { visibility: row.visibility } : {}),
    homeMetroId: row.home_metro_id ?? null,
    ...(typeof row.link_off === 'boolean' ? { linkOff: row.link_off } : {}),
  };
}

const CARD_COLUMNS = 'id, handle, display_name';

/** Profile cards by id: the `profile_cards` view, or the narrowed table columns before migration 0017. */
async function cardsById(c: SupabaseClient, ids: string[]): Promise<Map<string, Profile>> {
  if (ids.length === 0) return new Map();
  let { data, error } = await c.from('profile_cards').select(CARD_COLUMNS).in('id', ids);
  if (error && notThereYet(error)) ({ data, error } = await c.from('profiles').select(CARD_COLUMNS).in('id', ids));
  return new Map(((data ?? []) as ProfileRow[]).map((row) => [row.id, fromRow(row)]));
}

async function cardByHandle(c: SupabaseClient, handle: string): Promise<Profile | null> {
  // One exact handle through the server function (R04); the view and the table are the older shapes.
  const viaFn = await c.rpc('profile_card', { h: handle });
  if (!viaFn.error) {
    const row = (viaFn.data as ProfileRow[] | null)?.[0];
    return row ? fromRow(row) : null;
  }
  if (!notThereYet(viaFn.error)) return null;
  let { data, error } = await c.from('profile_cards').select(CARD_COLUMNS).ilike('handle', handle).maybeSingle();
  if (error && notThereYet(error)) ({ data, error } = await c.from('profiles').select(CARD_COLUMNS).ilike('handle', handle).maybeSingle());
  if (error || !data) return null;
  return fromRow(data as ProfileRow);
}

/**
 * Your side of every follow you asked for: through `my_follows`, which never says
 * "declined" or "removed" (migration 0016). Before it exists, the raw rows with the
 * same reading applied here.
 */
async function followsOut(c: SupabaseClient, me: string): Promise<{ followeeId: string; status: FollowStatus }[]> {
  let { data, error } = await c.from('my_follows').select('followee_id, status').eq('follower_id', me);
  if (error && notThereYet(error)) ({ data, error } = await c.from('follows').select('followee_id, status').eq('follower_id', me));
  return ((data ?? []) as { followee_id: string; status: string }[]).map((row) => ({ followeeId: row.followee_id, status: readStatus(row.status) }));
}

function readStatus(status: string): FollowStatus {
  if (status === 'declined') return 'pending';
  if (status === 'removed' || status === 'approved') return 'approved';
  return 'pending';
}

interface EntryCardRow {
  id: string;
  user_id: string;
  when_sort: string;
  when_precision: string;
  title: string;
  kind: string;
  metro_id: string | null;
  event_id: string | null;
  when?: LoggedWhen | null;
  venue?: string | null;
  stamp?: Stamp | null;
  review?: string | null;
  away?: boolean | null;
  neutral_site?: boolean | null;
  below_floor?: boolean | null;
  in_metro?: boolean | null;
  watched?: boolean | null;
  /** Only on the fallback read of the table itself (before migration 0017). */
  data?: Entry;
}

const ENTRY_CARD_COLUMNS = 'id, user_id, when_sort, when_precision, title, kind, metro_id, event_id, when, venue, stamp, review, away, neutral_site, below_floor, in_metro, watched';
const ENTRY_CARD_COLUMNS_OLD = 'id, user_id, when_sort, when_precision, title, kind, metro_id, event_id, when, venue, stamp, review, away, neutral_site, below_floor, in_metro';
const ENTRY_TABLE_COLUMNS = 'id, user_id, when_sort, when_precision, title, kind, metro_id, event_id, data';

/** The card as an Entry the screens can draw: the shown fields only, whichever shape the read came in. */
function entryFromCard(row: EntryCardRow): Entry {
  const d = row.data;
  const when: LoggedWhen = row.when ?? d?.when ?? { sort: row.when_sort, label: '', precision: row.when_precision as LoggedWhen['precision'] };
  const entry: Entry = {
    id: row.id,
    when,
    title: row.title,
    tags: [],
    sport: '',
    sides: [],
    kind: row.kind as EventKind,
  };
  const metroId = row.metro_id ?? undefined;
  const eventId = row.event_id ?? undefined;
  const venue = row.venue ?? d?.venue ?? undefined;
  const stamp = row.stamp ?? d?.stamp ?? undefined;
  const review = row.review ?? d?.review ?? undefined;
  if (metroId) entry.metroId = metroId;
  if (eventId) entry.eventId = eventId;
  if (venue) entry.venue = venue;
  if (stamp) entry.stamp = stamp;
  if (review) entry.review = review;
  if (row.watched ?? d?.watched) entry.watched = true;
  for (const [key, value] of [
    ['away', row.away ?? d?.away],
    ['neutralSite', row.neutral_site ?? d?.neutralSite],
    ['belowFloor', row.below_floor ?? d?.belowFloor],
    ['inMetro', row.in_metro ?? d?.inMetro],
  ] as const) {
    if (typeof value === 'boolean') (entry as unknown as Record<string, boolean>)[key] = value;
  }
  return entry;
}

/** Entry cards for one or more people, newest first. The view when it exists; the table, narrowed here, before it. */
async function entryCards(c: SupabaseClient, userIds: string[], limit?: number): Promise<{ userId: string; entry: Entry }[]> {
  if (userIds.length === 0) return [];
  const ask = (table: string, columns: string) => {
    let q = c.from(table).select(columns).in('user_id', userIds).order('when_sort', { ascending: false });
    if (limit) q = q.limit(limit);
    return q;
  };
  let { data, error } = await ask('entry_cards', ENTRY_CARD_COLUMNS);
  // Before 0020 the view has no watched column; before 0017 there is no view.
  if (error && error.code === '42703') ({ data, error } = await ask('entry_cards', ENTRY_CARD_COLUMNS_OLD));
  if (error && notThereYet(error)) ({ data, error } = await ask('entries', ENTRY_TABLE_COLUMNS));
  if (error || !data) return [];
  return (data as unknown as EntryCardRow[]).filter((row) => !row.data?.private).map((row) => ({ userId: row.user_id, entry: entryFromCard(row) }));
}

const HANDLE_SHAPE = /^[a-z0-9]([a-z0-9-]{1,30}[a-z0-9])?$/;

/** A handle is 3–32 characters: lowercase letters, numbers and dashes. */
export function isValidHandle(handle: string): boolean {
  return HANDLE_SHAPE.test(handle);
}

/** "Kylie Au" becomes "kylie-au". Used only to suggest; the server also checks it. */
export function suggestHandle(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 28);
}

/** The card behind a profile link. Null when there is none, or the owner switched the link off (R06). */
export async function getProfileByHandle(handle: string): Promise<Profile | null> {
  const c = supabase();
  if (!c) return null;
  return cardByHandle(c, handle);
}

export async function getMyProfile(): Promise<Profile | null> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return null;
  const { data, error } = await c.from('profiles').select('*').eq('id', me.id).maybeSingle();
  if (error || !data) return null;
  return fromRow(data as ProfileRow);
}

/** Resolves to an error message, or null when saved. */
export async function updateMyProfile(changes: {
  displayName?: string;
  handle?: string;
  visibility?: Visibility;
  homeMetroId?: string | null;
  linkOff?: boolean;
}): Promise<string | null> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'Sign in first.';
  const patch: Partial<ProfileRow> = {};
  if (changes.displayName !== undefined) patch.display_name = changes.displayName.trim() || null;
  if (changes.handle !== undefined) {
    const handle = changes.handle.trim().toLowerCase();
    if (!isValidHandle(handle)) return 'A link is 3 to 32 letters, numbers or dashes, and starts and ends with a letter or number.';
    patch.handle = handle;
  }
  if (changes.visibility !== undefined) patch.visibility = changes.visibility;
  if (changes.homeMetroId !== undefined) patch.home_metro_id = changes.homeMetroId;
  if (changes.linkOff !== undefined) patch.link_off = changes.linkOff;
  const { error } = await c.from('profiles').update(patch).eq('id', me.id);
  if (error) {
    if (error.code === '23505') return 'That link is taken. Try another.';
    return error.message;
  }
  return null;
}

/**
 * The entries a viewer may see on this profile, as cards. The database returns
 * nothing when the owner's setting hides them, so an empty list can mean "private".
 */
export async function entriesOf(userId: string): Promise<Entry[]> {
  const c = supabase();
  if (!c) return [];
  return (await entryCards(c, [userId])).map((row) => row.entry);
}

export async function followStatus(targetId: string): Promise<FollowStatus> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'none';
  return (await followsOut(c, me.id)).find((row) => row.followeeId === targetId)?.status ?? 'none';
}

/** The people who follow you (approved), with whether you follow them back. */
export async function followers(): Promise<Person[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const [{ data: inRows }, out] = await Promise.all([
    c.from('follows').select('follower_id').eq('followee_id', me.id).eq('status', 'approved'),
    followsOut(c, me.id),
  ]);
  const ids = ((inRows ?? []) as { follower_id: string }[]).map((r) => r.follower_id);
  if (ids.length === 0) return [];
  const mine = new Map(out.map((row) => [row.followeeId, row.status]));
  const cards = await cardsById(c, ids);
  return ids.flatMap((id) => {
    const profile = cards.get(id);
    return profile ? [{ profile, status: mine.get(id) ?? 'none' }] : [];
  });
}

/** The people you follow, approved and still waiting. */
export async function following(): Promise<Person[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const out = await followsOut(c, me.id);
  if (out.length === 0) return [];
  const cards = await cardsById(
    c,
    out.map((row) => row.followeeId),
  );
  return out
    .flatMap((row) => {
      const profile = cards.get(row.followeeId);
      return profile ? [{ profile, status: row.status }] : [];
    })
    .sort((a, b) => (a.status === b.status ? 0 : a.status === 'approved' ? -1 : 1));
}

/**
 * Take a follower's access away (R04). The row stays as "removed": their side still reads
 * "Following", nothing tells them, and every read rule sees no approval. Before migration
 * 0016 the status is refused, and the row is deleted as before.
 */
export async function removeFollower(followerId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  const { error } = await c.from('follows').update({ status: 'removed' }).eq('follower_id', followerId).eq('followee_id', me.id);
  if (error && olderShape(error)) await c.from('follows').delete().eq('follower_id', followerId).eq('followee_id', me.id);
}

/**
 * Ask to follow someone. Every follow is a request the other person approves,
 * whatever their visibility (Kylie, Oct 9); the database refuses anything else
 * (supabase/migrations/0011_follow_approval.sql, 0015). A row that already exists
 * (asked before, or already approved) is reported as it stands.
 */
export async function follow(target: Profile): Promise<FollowStatus | string> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'Sign in to follow.';
  const { error } = await c.from('follows').insert({ follower_id: me.id, followee_id: target.id, status: 'pending' });
  if (!error) return 'pending';
  if (error.code === '23505') {
    // A row already exists. A hidden one (removed, then unfollowed) reads as none; say Requested so nothing looks broken.
    const status = await followStatus(target.id);
    return status === 'none' ? 'pending' : status;
  }
  // Refused at the door (R01: blocked) reads as a quiet request too.
  if (error.code === '42501') return 'pending';
  return error.message;
}

/**
 * Unfollow, or cancel a request. Resolves to the state afterwards: a declined request
 * cannot be cancelled (migration 0016), so it still reads "Requested".
 */
export async function unfollow(targetId: string): Promise<FollowStatus> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'none';
  // One server function (migration 0022) clears a pending or approved row and hides a removed one (R02).
  // The follower cannot read follows rows since 0016, so a plain delete from this side matched nothing.
  const { error } = await c.rpc('unfollow', { target: targetId });
  if (error && notThereYet(error)) {
    await c.from('follows').delete().eq('follower_id', me.id).eq('followee_id', targetId);
    await c.rpc('hide_follow', { target: targetId });
  }
  return followStatus(targetId);
}

/** One person in the People list: who follows whom, both ways. */
export interface PersonRow {
  profile: Profile;
  /** They follow you (approved). */
  followsYou: boolean;
  /** Your side: none, pending (asked, or declined and not told), approved. */
  youFollow: FollowStatus;
}

/**
 * Everyone linked to you by an approved follow in either direction or a request of
 * yours (build notes 2, section 3): one list, filtered by chips on the screen. Pending
 * requests to you are not in it; they sit in the Requests row above.
 */
export async function peopleList(): Promise<PersonRow[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const [{ data: inRows }, out] = await Promise.all([
    c.from('follows').select('follower_id').eq('followee_id', me.id).eq('status', 'approved'),
    followsOut(c, me.id),
  ]);
  const followers = new Set(((inRows ?? []) as { follower_id: string }[]).map((r) => r.follower_id));
  const mine = new Map(out.map((row) => [row.followeeId, row.status]));
  const ids = [...new Set([...followers, ...mine.keys()])];
  const cards = await cardsById(c, ids);
  return ids
    .flatMap((id) => {
      const profile = cards.get(id);
      return profile ? [{ profile, followsYou: followers.has(id), youFollow: mine.get(id) ?? ('none' as FollowStatus) }] : [];
    })
    .sort((a, b) => (a.profile.displayName ?? a.profile.handle ?? '').localeCompare(b.profile.displayName ?? b.profile.handle ?? ''));
}

async function requestsWith(status: 'pending' | 'declined'): Promise<FollowRequest[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const { data } = await c.from('follows').select('follower_id').eq('followee_id', me.id).eq('status', status);
  const ids = ((data ?? []) as { follower_id: string }[]).map((row) => row.follower_id);
  if (ids.length === 0) return [];
  const cards = await cardsById(c, ids);
  return ids.flatMap((id) => {
    const card = cards.get(id);
    return card ? [{ followerId: id, displayName: card.displayName, handle: card.handle }] : [];
  });
}

/** People waiting for the signed-in person's approval. */
export function followRequests(): Promise<FollowRequest[]> {
  return requestsWith('pending');
}

/** Requests the signed-in person declined (R03). They can still be approved later; the requester sees no difference. */
export function declinedRequests(): Promise<FollowRequest[]> {
  return requestsWith('declined');
}

export async function approveFollow(followerId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  await c.from('follows').update({ status: 'approved' }).eq('follower_id', followerId).eq('followee_id', me.id);
}

/**
 * Decline quietly: the row stays as "declined" so the requester still sees "Requested" (migration 0013).
 * Resolves to an error message, or null. A failed decline is reported, never turned into a delete (R03);
 * only a project still on the old shape (no "declined" status) falls back to deleting.
 */
export async function declineFollow(followerId: string): Promise<string | null> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'Sign in first.';
  const { error } = await c.from('follows').update({ status: 'declined' }).eq('follower_id', followerId).eq('followee_id', me.id);
  if (!error) return null;
  if (error.code === '23514') {
    const old = await c.from('follows').delete().eq('follower_id', followerId).eq('followee_id', me.id);
    return old.error ? "Couldn't decline, try again." : null;
  }
  return "Couldn't decline, try again.";
}

export interface FriendEntry {
  entry: Entry;
  friend: Profile;
  /** True on the built-in examples shown before anyone is followed. Never saved. */
  example?: boolean;
}

/**
 * One line of the Following feed (Kylie, Oct 11, call 1): "{name} went to {event}" or "{name}
 * watched {event}" once the date has passed, "{name} is going to {event}" for a date ahead.
 * Dated by the event, never by when it was saved, and never "is at": nothing here says where
 * someone is now.
 */
export interface FeedItem {
  kind: 'attended' | 'planning';
  friend: Profile;
  title: string;
  date: string;
  venue?: string;
  metroId?: string;
  eventId?: string;
  /** The entry behind an attended line, for its read. */
  entry?: Entry;
  /** The friend watched, not attended (8.2); on a planning line, they answered Watching? (Kylie, Oct 11). */
  watched?: boolean;
  /** They answered Interested? (Kylie, Oct 11): shown on the event page and the by-event list, never the feed. */
  interested?: boolean;
  /** Where they're watching, when they shared it with friends (build notes 3, 4.7): "Home" or a place name. */
  place?: string;
  example?: boolean;
}

/** The places the people you follow shared, keyed "user|event". Reads through the 0023 rule; nothing before it runs. */
async function sharedPlaces(c: SupabaseClient, ids: string[]): Promise<Map<string, string>> {
  const { data, error } = await c.from('watch_places').select('user_id, event_id, place').in('user_id', ids).eq('public', true);
  if (error || !data) return new Map();
  return new Map((data as { user_id: string; event_id: string; place: string }[]).map((row) => [`${row.user_id}|${row.event_id}`, row.place]));
}

/** Today's date where the friend's event is, so an "attended" line never shows on the day itself. */
function todayFor(metroId: string | undefined): string {
  const zone = (metroId && METROS[metroId]?.timeZone) || 'America/Los_Angeles';
  return new Date().toLocaleDateString('en-CA', { timeZone: zone });
}

/** The earliest "today" anywhere on Earth, so a date-only query never drops a plan that is still today somewhere. */
function earliestToday(): string {
  return new Date(Date.now() - 36 * 3600 * 1000).toISOString().slice(0, 10);
}

/** The ids of the people you follow who have approved. */
async function approvedFollowees(c: SupabaseClient, me: string): Promise<string[]> {
  return (await followsOut(c, me)).filter((row) => row.status === 'approved').map((row) => row.followeeId);
}

/**
 * The Following feed: approved followees' past entries and upcoming plans, soonest plans
 * first, then newest entries. Plans are asked for from today on (R07), so old ones never
 * crowd out the next ones within the limit.
 */
export async function followingFeed(limit = 30): Promise<FeedItem[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const ids = await approvedFollowees(c, me.id);
  if (ids.length === 0) return [];
  const [people, cards, places, { data: plans }] = await Promise.all([
    cardsById(c, ids),
    entryCards(c, ids, limit),
    sharedPlaces(c, ids),
    c
      .from('plans')
      .select('id, user_id, date, metro_id, event_id, title, venue, data')
      .in('user_id', ids)
      .gte('date', earliestToday())
      .order('date', { ascending: true })
      .limit(limit),
  ]);
  const planning: FeedItem[] = ((plans ?? []) as { id: string; user_id: string; date: string; metro_id: string; event_id: string | null; title: string; venue: string | null; data?: { watch?: boolean; interested?: boolean } | null }[])
    .filter((p) => p.date >= todayFor(p.metro_id))
    .flatMap((p) => {
      const friend = people.get(p.user_id);
      const place = p.data?.watch && p.event_id ? places.get(`${p.user_id}|${p.event_id}`) : undefined;
      return friend ? [{ kind: 'planning' as const, friend, title: p.title, date: p.date, venue: p.venue ?? undefined, metroId: p.metro_id, eventId: p.event_id ?? undefined, ...(p.data?.watch ? { watched: true } : {}), ...(p.data?.interested ? { interested: true } : {}), ...(place ? { place } : {}) }] : [];
    });
  const attended: FeedItem[] = cards.flatMap(({ userId, entry }) => {
    const friend = people.get(userId);
    if (!friend || entry.when.sort >= todayFor(entry.metroId)) return [];
    const place = entry.watched && entry.eventId ? places.get(`${userId}|${entry.eventId}`) : undefined;
    return [{ kind: 'attended' as const, friend, title: entry.title, date: entry.when.sort, venue: entry.venue, metroId: entry.metroId, eventId: entry.eventId, entry, ...(entry.watched ? { watched: true } : {}), ...(place ? { place } : {}) }];
  });
  return [...planning, ...attended].slice(0, limit);
}

/** The feed's shape before anyone is followed, marked Example. Nothing here is written anywhere. */
export const EXAMPLE_FEED: FeedItem[] = [
  { example: true, kind: 'planning', friend: { id: 'example-1', handle: 'sam-r', displayName: 'Sam R.', avatarUrl: null, homeMetroId: null }, title: 'Bills at Rams', date: '2026-10-12', venue: 'SoFi Stadium', metroId: 'la' },
  { example: true, kind: 'attended', friend: { id: 'example-2', handle: 'priya', displayName: 'Priya', avatarUrl: null, homeMetroId: null }, title: 'Slayer', date: '2026-10-02', venue: 'Kia Forum', metroId: 'la' },
];

/** Recent nights of the people the signed-in person follows (approved only), newest first. */
export async function friendsEntries(limit = 20): Promise<FriendEntry[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const ids = await approvedFollowees(c, me.id);
  if (ids.length === 0) return [];
  const [people, cards] = await Promise.all([cardsById(c, ids), entryCards(c, ids, limit)]);
  return cards.flatMap(({ userId, entry }) => {
    const friend = people.get(userId);
    return friend ? [{ entry, friend }] : [];
  });
}

/**
 * Placeholder rows for the Friends section while nobody is followed yet, so the
 * shape can be judged. Each is marked `example` and shown with an Example chip.
 * Nothing here is written anywhere.
 */
export const EXAMPLE_FRIEND_ENTRIES: FriendEntry[] = [
  {
    example: true,
    friend: { id: 'example-1', handle: 'sam-r', displayName: 'Sam R.', avatarUrl: null, homeMetroId: null },
    entry: {
      id: 'example-entry-1',
      when: { sort: '2026-10-03', label: '', precision: 'day' },
      title: 'NLDS G1 · Phillies at Dodgers',
      tags: ['Dodgers'],
      sport: 'Baseball',
      sides: ['Dodgers'],
      venue: 'Dodger Stadium',
      inMetro: true,
      kind: 'game',
      metroId: 'la',
    },
  },
  {
    example: true,
    friend: { id: 'example-2', handle: 'priya', displayName: 'Priya', avatarUrl: null, homeMetroId: null },
    entry: {
      id: 'example-entry-2',
      when: { sort: '2026-10-02', label: '', precision: 'day' },
      title: 'Slayer',
      tags: ['Concerts'],
      sport: 'Concerts',
      sides: ['Slayer'],
      venue: 'Kia Forum',
      inMetro: true,
      kind: 'show',
      metroId: 'la',
    },
  },
  {
    example: true,
    friend: { id: 'example-3', handle: 'dev', displayName: 'Dev', avatarUrl: null, homeMetroId: null },
    entry: {
      id: 'example-entry-3',
      when: { sort: '2026-09-21', label: '', precision: 'day' },
      title: 'Rams vs. NY Giants',
      tags: ['Rams'],
      sport: 'Football',
      sides: ['Rams'],
      venue: 'SoFi Stadium',
      inMetro: true,
      kind: 'game',
      metroId: 'la',
    },
  },
];

/** A plan on someone's page, readable by their approved followers (migration 0012). */
export interface PlanCard {
  id: string;
  date: string;
  metroId: string;
  eventId?: string;
  title: string;
  venue?: string;
  /** They answered Watching?, not Attending? (Kylie, Oct 11). */
  watch?: boolean;
}

/** Someone's plans from today on, soonest first. Empty when they have not approved you. */
export async function plansOf(userId: string): Promise<PlanCard[]> {
  const c = supabase();
  if (!c) return [];
  const { data } = await c
    .from('plans')
    .select('id, date, metro_id, event_id, title, venue, data')
    .eq('user_id', userId)
    .gte('date', earliestToday())
    .order('date', { ascending: true })
    .limit(20);
  return ((data ?? []) as { id: string; date: string; metro_id: string; event_id: string | null; title: string; venue: string | null; data?: { watch?: boolean; interested?: boolean } | null }[])
    .filter((p) => p.date >= todayFor(p.metro_id) && !p.data?.interested)
    .map((p) => ({ id: p.id, date: p.date, metroId: p.metro_id, eventId: p.event_id ?? undefined, title: p.title, venue: p.venue ?? undefined, ...(p.data?.watch ? { watch: true } : {}) }));
}

/** Whether this person follows you (approved). */
export async function followsMe(userId: string): Promise<boolean> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return false;
  const { data } = await c.from('follows').select('status').eq('follower_id', userId).eq('followee_id', me.id).eq('status', 'approved').maybeSingle();
  return Boolean(data);
}

/** The shortest search that returns people (Kylie, Oct 9): three characters. */
export const PEOPLE_SEARCH_MIN = 3;

/**
 * Find people by part of a name or handle (Kylie, Oct 9: partial match from three
 * characters). Cards only: id, handle, name. Someone who blocked you, or switched
 * their link off, is not in the results (the database leaves them out).
 */
export async function searchPeople(query: string, limit = 20): Promise<Profile[]> {
  const c = supabase();
  const q = query.trim().toLowerCase();
  if (!c || q.length < PEOPLE_SEARCH_MIN) return [];
  const me = getAccount();
  const viaFn = await c.rpc('search_people', { q });
  if (!viaFn.error) return ((viaFn.data ?? []) as ProfileRow[]).map(fromRow);
  if (!notThereYet(viaFn.error)) return [];
  // Older shape: the view, with commas and brackets stripped here (R04).
  const like = `%${q.replace(/[%_,()[\]{}<>]/g, '')}%`;
  let { data, error } = await c.from('profile_cards').select(CARD_COLUMNS).or(`handle.ilike.${like},display_name.ilike.${like}`).limit(limit);
  if (error && notThereYet(error)) ({ data, error } = await c.from('profiles').select(CARD_COLUMNS).or(`handle.ilike.${like},display_name.ilike.${like}`).limit(limit));
  return ((data ?? []) as ProfileRow[]).filter((row) => row.id !== me?.id && row.handle).map(fromRow);
}

/**
 * Block someone (migration 0018): the follow goes both ways, you leave their search and
 * their links, and they leave your entries and plans. Nothing tells them. Resolves to an
 * error message, or null.
 */
export async function blockUser(userId: string): Promise<string | null> {
  const c = supabase();
  if (!c || !getAccount()) return 'Sign in first.';
  const { error } = await c.rpc('block_user', { target: userId });
  if (!error) return null;
  return notThereYet(error) ? 'Not available yet.' : error.message;
}

export async function unblockUser(userId: string): Promise<string | null> {
  const c = supabase();
  if (!c || !getAccount()) return 'Sign in first.';
  const { error } = await c.rpc('unblock_user', { target: userId });
  if (!error) return null;
  return notThereYet(error) ? 'Not available yet.' : error.message;
}

/** The people you blocked, so a block can be undone in Settings. */
export async function blockedPeople(): Promise<Profile[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const { data, error } = await c.from('blocks').select('blocked_id').eq('blocker_id', me.id);
  if (error || !data) return [];
  const ids = (data as { blocked_id: string }[]).map((row) => row.blocked_id);
  const cards = await cardsById(c, ids);
  return ids.flatMap((id) => {
    const card = cards.get(id);
    return card ? [card] : [{ id, handle: null, displayName: null, avatarUrl: null, homeMetroId: null } as Profile];
  });
}
