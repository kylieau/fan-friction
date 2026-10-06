// Suggested events: a hand-typed night in a big room that Kylie can check
// against a public source and seed as a catalog event (Kylie, Oct 6, 2026:
// "suggest, don't publish"). Until she does, nothing moves for anyone else.
// Only the owner can read their own rows here; Kylie reads them in Supabase.
// Screens reach this only through src/data/index.ts.

import { getAccount } from './account';
import { supabase } from './storage/supabaseClient';
import type { Entry } from './types';

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
