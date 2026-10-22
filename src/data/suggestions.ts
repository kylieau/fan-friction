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

/** The review window (Kylie, Oct 21, 2026, late evening): a hand-added event is sent for review only inside it. Days. */
export const REVIEW_WINDOW = { behind: 30, ahead: 180 };

/** Whether this account is a review admin (migration 0032). Cached per account for the session. */
const adminCache = new Map<string, Promise<boolean>>();
export function isReviewAdmin(): Promise<boolean> {
  const client = supabase();
  const account = getAccount();
  if (!client || !account) return Promise.resolve(false);
  const hit = adminCache.get(account.id);
  if (hit) return hit;
  const p: Promise<boolean> = Promise.resolve(client.rpc('is_review_admin')).then(({ data, error }) => !error && data === true, () => false);
  adminCache.set(account.id, p);
  return p;
}

/** One row of the review queue, as the admin sees it. */
export interface ReviewRow {
  id: string;
  title: string;
  kind: string;
  date: string;
  venue: string | null;
  metroId: string | null;
  status: string;
  startTime: string | null;
  opponent: string | null;
  source: string | null;
  checks: { season?: string; opponent?: string; room?: string } | null;
  confirmedBy: string | null;
  createdAt: string;
}

/** The queue: pending first, newest first, then the rest of the last month. Empty when not an admin. */
export async function reviewQueue(): Promise<ReviewRow[]> {
  const client = supabase();
  if (!client || !(await isReviewAdmin())) return [];
  const { data, error } = await client
    .from('suggested_events')
    .select('id, title, kind, when_sort, venue, metro_id, status, start_time, opponent, source, checks, confirmed_by, created_at')
    .order('created_at', { ascending: false })
    .limit(200);
  if (error || !data) return [];
  const rows = (data as Record<string, unknown>[]).map((r) => ({
    id: String(r.id),
    title: String(r.title),
    kind: String(r.kind),
    date: String(r.when_sort),
    venue: (r.venue as string | null) ?? null,
    metroId: (r.metro_id as string | null) ?? null,
    status: String(r.status),
    startTime: (r.start_time as string | null) ?? null,
    opponent: (r.opponent as string | null) ?? null,
    source: (r.source as string | null) ?? null,
    checks: (r.checks as ReviewRow['checks']) ?? null,
    confirmedBy: (r.confirmed_by as string | null) ?? null,
    createdAt: String(r.created_at),
  }));
  const rank = (s: string) => (s === 'pending' ? 0 : 1);
  return rows.sort((a, b) => rank(a.status) - rank(b.status) || b.createdAt.localeCompare(a.createdAt));
}

/** Approve or decline a row (admin only; the policy refuses anyone else). The nightly run writes an approved one. */
export async function setReviewStatus(id: string, status: 'approved' | 'declined' | 'pending'): Promise<boolean> {
  const client = supabase();
  if (!client) return false;
  const { error } = await client.from('suggested_events').update({ status, confirmed_by: status === 'approved' ? 'admin' : null, confirmed_at: status === 'approved' ? new Date().toISOString() : null }).eq('id', id);
  return !error;
}
