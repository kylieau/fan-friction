// Where you watched (Kylie, Oct 11, 2026, call 3; build notes 3, D01–D02): a watched entry's
// place, at home or a place typed in, shared per event with your approved followers. The
// database holds the rule (supabase/migrations/0021_watch_places.sql, fixed in 0023); this file
// only reads and writes your own row and lists the names it is allowed to see. Nothing here
// runs signed out: the phone copy keeps the place on the entry itself.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import { notThereYet } from './storage/dbErrors';

/** A public place other people named for this event, and how many did. Never who. */
export interface EventPlace {
  place: string;
  people: number;
}

/** The one line a failed save shows (build notes 3, D01). */
export const SAVE_FAILED = "Couldn't save, try again";

/**
 * Save your place for an event. Shared (public) lets your approved followers read the name.
 * Resolves to an error line when the database refused, or null when saved; nothing is swallowed.
 */
export async function saveWatchPlace(eventId: string, place: string, isPublic: boolean): Promise<string | null> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return null;
  const clean = place.trim().replace(/\s+/g, ' ').slice(0, 80);
  if (!clean) return clearWatchPlace(eventId);
  const { error } = await c.from('watch_places').upsert({ user_id: me.id, event_id: eventId, place: clean, public: isPublic }, { onConflict: 'user_id,event_id' });
  return error ? SAVE_FAILED : null;
}

/** Forget your place for an event (the entry left the log, or nothing is shared any more). */
export async function clearWatchPlace(eventId: string): Promise<string | null> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return null;
  const { error } = await c.from('watch_places').delete().eq('user_id', me.id).eq('event_id', eventId);
  return error ? SAVE_FAILED : null;
}

/** The same key the database groups by (build notes 3, 8.1, item 14): case, spaces and punctuation ignored. */
export function placeKey(place: string): string {
  return place.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
}

/**
 * The places named for this event by the people you follow, with how many named each
 * (migration 0024). The database answers only when you are sharing a place for the same
 * event; otherwise the list is empty. Your own name is left out. Before 0024 runs, the
 * old view is asked and narrowed the same way.
 */
export async function placesForEvent(eventId: string, mine?: string): Promise<EventPlace[]> {
  const c = supabase();
  if (!c || !getAccount()) return [];
  let { data, error } = await c.rpc('event_watch_places', { evt: eventId });
  if (error && notThereYet(error)) ({ data, error } = await c.from('event_watch_places').select('place, people').eq('event_id', eventId).order('people', { ascending: false }).limit(12));
  if (error) return [];
  const key = placeKey(mine ?? '');
  return ((data ?? []) as EventPlace[]).filter((row) => placeKey(row.place) !== key && placeKey(row.place) !== 'home');
}
