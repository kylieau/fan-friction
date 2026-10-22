// Suggested events: a hand-typed night in a big room that Kylie can check
// against a public source and seed as a catalog event (Kylie, Oct 6, 2026:
// "suggest, don't publish"). Until she does, nothing moves for anyone else.
// Only the owner can read their own rows here; Kylie reads them in Supabase.
// Screens reach this only through src/data/index.ts.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import type { Entry } from './types';
import { linkSuggestion } from './personalLog';

/**
 * Send one suggestion. Returns its id, or null when there is no account to
 * send it from (the entry is still saved on the phone; the suggestion isn't).
 */
export async function suggestEvent(entry: Entry): Promise<string | null> {
  const client = supabase();
  const account = getAccount();
  if (!client || !account) return null;
  const id = crypto.randomUUID();
  const { error } = await client.from('suggested_events').insert({
    id,
    user_id: account.id,
    entry_id: entry.id,
    title: entry.title,
    kind: entry.kind,
    when_sort: entry.when.sort,
    when_precision: entry.when.precision,
    venue: entry.venue ?? null,
    metro_id: entry.metroId ?? null,
  });
  return error ? null : id;
}

/**
 * Link what the nightly job confirmed (step 2 of the Add a game / Add a show card, Oct 21, 2026): each of my review
 * rows that became a catalog event moves my hand plan or stub onto that event. Runs at sign-in and when the log
 * loads; a row already linked is skipped. Returns how many were linked.
 */
export async function linkConfirmedSuggestions(): Promise<number> {
  const client = supabase();
  const account = getAccount();
  if (!client || !account) return 0;
  const { data, error } = await client.from('suggested_events').select('entry_id, catalog_event_id, metro_id').eq('user_id', account.id).not('catalog_event_id', 'is', null);
  if (error || !data) return 0;
  let linked = 0;
  for (const row of data as { entry_id: string; catalog_event_id: string; metro_id: string | null }[]) {
    if (linkSuggestion(row.entry_id, row.catalog_event_id, row.metro_id ?? undefined)) linked++;
  }
  return linked;
}
