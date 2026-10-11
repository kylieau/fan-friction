// Where you watched (Kylie, Oct 11, 2026, call 3): a watched entry's place, at home or a
// public place typed in, shared per event with people who also went public for that event.
// The database holds the rule (supabase/migrations/0021_watch_places.sql); this file only
// reads and writes your own row and lists the names it is allowed to see. Nothing here runs
// signed out: the phone copy keeps the place on the entry itself.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import { notThereYet } from './storage/dbErrors';

/** A public place other people named for this event, and how many did. Never who. */
export interface EventPlace {
  place: string;
  people: number;
}

/** Save your place for an event. Public shares the name with others who are public for the same event. */
export async function saveWatchPlace(eventId: string, place: string, isPublic: boolean): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  const clean = place.trim().replace(/\s+/g, ' ').slice(0, 80);
  if (!clean) {
    await c.from('watch_places').delete().eq('user_id', me.id).eq('event_id', eventId);
    return;
  }
  await c.from('watch_places').upsert({ user_id: me.id, event_id: eventId, place: clean, public: isPublic }, { onConflict: 'user_id,event_id' });
}

/** Forget your place for an event (the entry left the log, or you chose Home). */
export async function clearWatchPlace(eventId: string): Promise<void> {
  const c = supabase();
  const me = getAccount();
  if (!c || !me) return;
  await c.from('watch_places').delete().eq('user_id', me.id).eq('event_id', eventId);
}

/**
 * The public places named for this event, for the picker. The database answers only when
 * you are public for the same event; otherwise the list is empty. Your own name is left out.
 */
export async function placesForEvent(eventId: string, mine?: string): Promise<EventPlace[]> {
  const c = supabase();
  if (!c || !getAccount()) return [];
  const { data, error } = await c.from('event_watch_places').select('place, people').eq('event_id', eventId).order('people', { ascending: false }).limit(12);
  if (error) {
    if (!notThereYet(error)) return [];
    return [];
  }
  return ((data ?? []) as EventPlace[]).filter((row) => row.place.toLowerCase() !== (mine ?? '').trim().toLowerCase());
}
