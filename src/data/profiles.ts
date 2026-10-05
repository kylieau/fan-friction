// Profiles: the public face of an account. A profile card (name, avatar, handle,
// visibility) is readable by anyone. Nights behind it are readable only when the
// owner's visibility switch allows (enforced by the database, not here).
// Screens reach this through src/data/index.ts.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import type { LoggedNight } from './types';

export type Visibility = 'only_me' | 'approved' | 'anyone';

export interface Profile {
  id: string;
  handle: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  visibility: Visibility;
}

export type FollowStatus = 'none' | 'pending' | 'approved';

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
}

function fromRow(row: ProfileRow): Profile {
  return {
    id: row.id,
    handle: row.handle,
    displayName: row.display_name,
    avatarUrl: row.avatar_url,
    visibility: row.visibility,
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
export async function nightsOf(userId: string): Promise<LoggedNight[]> {
  const c = supabase();
  if (!c) return [];
  const { data, error } = await c
    .from('nights')
    .select('id, data')
    .eq('user_id', userId)
    .order('when_sort', { ascending: false });
  if (error || !data) return [];
  return (data as { id: string; data: LoggedNight }[]).map((row) => ({ ...row.data, id: row.id }));
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
  return (data as { status: FollowStatus }).status;
}

/** Follow someone. Approved at once when their page is open to anyone; otherwise a request. */
export async function follow(target: Profile): Promise<FollowStatus | string> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return 'Sign in to follow.';
  const status: FollowStatus = target.visibility === 'anyone' ? 'approved' : 'pending';
  const { error } = await c.from('follows').upsert({ follower_id: me.id, followee_id: target.id, status });
  return error ? error.message : status;
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

export async function declineFollow(followerId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  await c.from('follows').delete().eq('follower_id', followerId).eq('followee_id', me.id);
}
