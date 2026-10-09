// Profiles: the public face of an account. A profile card (name, avatar, handle,
// visibility) is readable by anyone. Nights behind it are readable only when the
// owner's visibility switch allows (enforced by the database, not here).
// Screens reach this through src/data/index.ts.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import type { Entry } from './types';
import { METROS } from '../config/metros';

export type Visibility = 'only_me' | 'approved' | 'anyone';

export interface Profile {
  id: string;
  handle: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  visibility: Visibility;
  /** The city the map opens on, kept with the account since Oct 6, 2026 so it follows you to another phone. */
  homeMetroId: string | null;
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
  avatar_url: string | null;
  visibility: Visibility;
  home_metro_id?: string | null;
}

function fromRow(row: ProfileRow): Profile {
  return {
    id: row.id,
    handle: row.handle,
    displayName: row.display_name,
    avatarUrl: row.avatar_url,
    visibility: row.visibility,
    homeMetroId: row.home_metro_id ?? null,
  };
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

export async function getProfileByHandle(handle: string): Promise<Profile | null> {
  const c = supabase();
  if (!c) return null;
  const { data, error } = await c.from('profiles').select('*').ilike('handle', handle).maybeSingle();
  if (error || !data) return null;
  return fromRow(data as ProfileRow);
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
  const { error } = await c.from('profiles').update(patch).eq('id', me.id);
  if (error) {
    if (error.code === '23505') return 'That link is taken. Try another.';
    return error.message;
  }
  return null;
}

/**
 * The nights a viewer may see on this profile. The database returns nothing
 * when the owner's setting hides them, so an empty list can mean "private".
 */
export async function entriesOf(userId: string): Promise<Entry[]> {
  const c = supabase();
  if (!c) return [];
  const { data, error } = await c
    .from('entries')
    .select('id, data')
    .eq('user_id', userId)
    .order('when_sort', { ascending: false });
  if (error || !data) return [];
  return (data as { id: string; data: Entry }[]).map((row) => ({ ...row.data, id: row.id }));
}

export async function followStatus(targetId: string): Promise<FollowStatus> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'none';
  const { data } = await c
    .from('follows')
    .select('status')
    .eq('follower_id', me.id)
    .eq('followee_id', targetId)
    .maybeSingle();
  if (!data) return 'none';
  // A declined request still reads as "Requested" to the person who asked (privacy 2 and 7; migration 0013).
  const status = (data as { status: string }).status;
  return status === 'declined' ? 'pending' : (status as FollowStatus);
}

/** The people who follow you (approved), with whether you follow them back. */
export async function followers(): Promise<Person[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const [{ data: inRows }, { data: outRows }] = await Promise.all([
    c.from('follows').select('follower_id').eq('followee_id', me.id).eq('status', 'approved'),
    c.from('follows').select('followee_id, status').eq('follower_id', me.id),
  ]);
  const ids = ((inRows ?? []) as { follower_id: string }[]).map((r) => r.follower_id);
  if (ids.length === 0) return [];
  const mine = new Map(((outRows ?? []) as { followee_id: string; status: string }[]).map((r) => [r.followee_id, r.status === 'declined' ? 'pending' : (r.status as FollowStatus)]));
  const { data: people } = await c.from('profiles').select('*').in('id', ids);
  return ((people ?? []) as ProfileRow[]).map((row) => ({ profile: fromRow(row), status: mine.get(row.id) ?? 'none' }));
}

/** The people you follow, approved and still waiting. */
export async function following(): Promise<Person[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const { data: rows } = await c.from('follows').select('followee_id, status').eq('follower_id', me.id);
  const list = (rows ?? []) as { followee_id: string; status: string }[];
  if (list.length === 0) return [];
  const { data: people } = await c.from('profiles').select('*').in('id', list.map((r) => r.followee_id));
  const byId = new Map(((people ?? []) as ProfileRow[]).map((row) => [row.id, fromRow(row)]));
  return list
    .flatMap((r) => {
      const profile = byId.get(r.followee_id);
      return profile ? [{ profile, status: (r.status === 'declined' ? 'pending' : r.status) as FollowStatus }] : [];
    })
    .sort((a, b) => (a.status === b.status ? 0 : a.status === 'approved' ? -1 : 1));
}

/** Take a follower's access away. They see nothing of yours from then on, and nothing tells them. */
export async function removeFollower(followerId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  await c.from('follows').delete().eq('follower_id', followerId).eq('followee_id', me.id);
}

/**
 * Ask to follow someone. Every follow is a request the other person approves,
 * whatever their visibility (Kylie, Oct 9); the database refuses anything else
 * (supabase/migrations/0011_follow_approval.sql). A row that already exists
 * (asked before, or already approved) is reported as it stands.
 */
export async function follow(target: Profile): Promise<FollowStatus | string> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'Sign in to follow.';
  const { error } = await c.from('follows').insert({ follower_id: me.id, followee_id: target.id, status: 'pending' });
  if (!error) return 'pending';
  if (error.code === '23505') return followStatus(target.id);
  return error.message;
}

export async function unfollow(targetId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  await c.from('follows').delete().eq('follower_id', me.id).eq('followee_id', targetId);
}

/** People waiting for the signed-in person's approval. */
export async function followRequests(): Promise<FollowRequest[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const { data } = await c.from('follows').select('follower_id').eq('followee_id', me.id).eq('status', 'pending');
  const ids = ((data ?? []) as { follower_id: string }[]).map((row) => row.follower_id);
  if (ids.length === 0) return [];
  const { data: people } = await c.from('profiles').select('id, display_name, handle').in('id', ids);
  return ((people ?? []) as { id: string; display_name: string | null; handle: string | null }[]).map((row) => ({
    followerId: row.id,
    displayName: row.display_name,
    handle: row.handle,
  }));
}

export async function approveFollow(followerId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  await c.from('follows').update({ status: 'approved' }).eq('follower_id', followerId).eq('followee_id', me.id);
}

/** Decline quietly: the row stays as "declined" so the requester still sees "Requested" (migration 0013). */
export async function declineFollow(followerId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  const { error } = await c.from('follows').update({ status: 'declined' }).eq('follower_id', followerId).eq('followee_id', me.id);
  // Before 0013 the status check refuses "declined"; fall back to the old delete so a decline still works.
  if (error) await c.from('follows').delete().eq('follower_id', followerId).eq('followee_id', me.id);
}

export interface FriendEntry {
  entry: Entry;
  friend: Profile;
  /** True on the built-in examples shown before anyone is followed. Never saved. */
  example?: boolean;
}

/**
 * One line of the Following feed (Kylie, Oct 9, 3.24): "{name} attended {event}" once the
 * date has passed, or "{name} is planning to attend {event}" for a date ahead. Dated by the
 * event, never by when it was saved, and never "is at": nothing here says where someone is now.
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
  example?: boolean;
}

/** Today's date where the friend's event is, so an "attended" line never shows on the day itself. */
function todayFor(metroId: string | undefined): string {
  const zone = (metroId && METROS[metroId]?.timeZone) || 'America/Los_Angeles';
  return new Date().toLocaleDateString('en-CA', { timeZone: zone });
}

/** The Following feed: approved followees' past entries and upcoming plans, soonest plans first, then newest entries. */
export async function followingFeed(limit = 30): Promise<FeedItem[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const { data: links } = await c.from('follows').select('followee_id').eq('follower_id', me.id).eq('status', 'approved');
  const ids = ((links ?? []) as { followee_id: string }[]).map((row) => row.followee_id);
  if (ids.length === 0) return [];
  const [{ data: people }, { data: rows }, { data: plans }] = await Promise.all([
    c.from('profiles').select('*').in('id', ids),
    c.from('entries').select('id, user_id, data').in('user_id', ids).order('when_sort', { ascending: false }).limit(limit),
    c.from('plans').select('id, user_id, date, metro_id, event_id, title, venue').in('user_id', ids).order('date', { ascending: true }).limit(limit),
  ]);
  const byId = new Map(((people ?? []) as ProfileRow[]).map((row) => [row.id, fromRow(row)]));
  const planning: FeedItem[] = ((plans ?? []) as { id: string; user_id: string; date: string; metro_id: string; event_id: string | null; title: string; venue: string | null }[])
    .filter((p) => p.date >= todayFor(p.metro_id))
    .flatMap((p) => {
      const friend = byId.get(p.user_id);
      return friend ? [{ kind: 'planning' as const, friend, title: p.title, date: p.date, venue: p.venue ?? undefined, metroId: p.metro_id, eventId: p.event_id ?? undefined }] : [];
    });
  const attended: FeedItem[] = ((rows ?? []) as { id: string; user_id: string; data: Entry }[])
    .flatMap((row) => {
      const friend = byId.get(row.user_id);
      const entry: Entry = { ...row.data, id: row.id };
      if (!friend || entry.when.sort >= todayFor(entry.metroId)) return [];
      return [{ kind: 'attended' as const, friend, title: entry.title, date: entry.when.sort, venue: entry.venue, metroId: entry.metroId, eventId: entry.eventId, entry }];
    });
  return [...planning, ...attended].slice(0, limit);
}

/** The feed's shape before anyone is followed, marked Example. Nothing here is written anywhere. */
export const EXAMPLE_FEED: FeedItem[] = [
  { example: true, kind: 'planning', friend: { id: 'example-1', handle: 'sam-r', displayName: 'Sam R.', avatarUrl: null, visibility: 'approved', homeMetroId: null }, title: 'Rams vs. Bills', date: '2026-10-12', venue: 'SoFi Stadium', metroId: 'la' },
  { example: true, kind: 'attended', friend: { id: 'example-2', handle: 'priya', displayName: 'Priya', avatarUrl: null, visibility: 'approved', homeMetroId: null }, title: 'Slayer', date: '2026-10-02', venue: 'Kia Forum', metroId: 'la' },
];

/** Recent nights of the people the signed-in person follows (approved only), newest first. */
export async function friendsEntries(limit = 20): Promise<FriendEntry[]> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return [];
  const { data: links } = await c.from('follows').select('followee_id').eq('follower_id', me.id).eq('status', 'approved');
  const ids = ((links ?? []) as { followee_id: string }[]).map((row) => row.followee_id);
  if (ids.length === 0) return [];
  const [{ data: people }, { data: rows }] = await Promise.all([
    c.from('profiles').select('*').in('id', ids),
    c.from('entries').select('id, user_id, data').in('user_id', ids).order('when_sort', { ascending: false }).limit(limit),
  ]);
  const byId = new Map(((people ?? []) as ProfileRow[]).map((row) => [row.id, fromRow(row)]));
  return ((rows ?? []) as { id: string; user_id: string; data: Entry }[])
    .map((row) => {
      const friend = byId.get(row.user_id);
      return friend ? { entry: { ...row.data, id: row.id }, friend } : null;
    })
    .filter((item): item is FriendEntry => item !== null);
}

/**
 * Placeholder rows for the Friends section while nobody is followed yet, so the
 * shape can be judged. Each is marked `example` and shown with an Example chip.
 * Nothing here is written anywhere.
 */
export const EXAMPLE_FRIEND_ENTRIES: FriendEntry[] = [
  {
    example: true,
    friend: { id: 'example-1', handle: 'sam-r', displayName: 'Sam R.', avatarUrl: null, visibility: 'anyone', homeMetroId: null },
    entry: {
      id: 'example-entry-1',
      when: { sort: '2026-10-03', label: '', precision: 'day' },
      title: 'Dodgers (NLDS G1) vs. Phillies',
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
    friend: { id: 'example-2', handle: 'priya', displayName: 'Priya', avatarUrl: null, visibility: 'anyone', homeMetroId: null },
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
    friend: { id: 'example-3', handle: 'dev', displayName: 'Dev', avatarUrl: null, visibility: 'anyone', homeMetroId: null },
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
