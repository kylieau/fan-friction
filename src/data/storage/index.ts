// The one place the app picks where the log is saved.
// Signed out: the phone. Signed in: the account, with the phone as a cache so
// the first paint is instant. Nothing here calls the network unless the two
// public Supabase settings exist and someone has signed in.
//
// Saving is change-based (Kylie's build notes, Oct 9, C111–C114): each save
// carries only what one change touched, cloud writes run one at a time in
// order, a failed cloud write is kept and folded into the next one, the newer
// copy of a row wins when two devices disagree, and a removed id is remembered
// so another device's copy cannot put it back.

import type { Entry, PersonalLog, Plan } from '../types';
import { localEntryStore, readLocalLog, EMPTY_LOG } from './localStore';
import { createSupabaseEntryStore } from './supabaseStore';
import { supabase } from './supabaseClient';
import { emptyDiff, isEmptyDiff, mergeDiffs } from './types';
import type { EntryStore, LogDiff } from './types';

export type { EntryStore, LogDiff } from './types';
export { EMPTY_LOG } from './localStore';
export { isCloudConfigured } from './supabaseClient';

let signedInAs: string | null = null;

const client = supabase();
const cloudStore: EntryStore | null = client ? createSupabaseEntryStore(client, () => signedInAs) : null;

/** Cloud writes wait their turn; a write that failed is resent with the next one. */
let queue: Promise<void> = Promise.resolve();
let inFlight = 0;
let backlog: LogDiff | null = null;

/** Tell the store who is signed in (or null). The log calls this when the account changes. */
export function setStoreAccount(userId: string | null) {
  signedInAs = userId;
  if (!userId) backlog = null;
}

/** True when saves also go to the account. */
export function isSavingToAccount(): boolean {
  return Boolean(cloudStore && signedInAs);
}

/** True while a change made here has not reached the account (in flight, or failed and waiting to retry). */
export function hasUnsyncedChanges(): boolean {
  return isSavingToAccount() && (inFlight > 0 || backlog !== null);
}

/** The store the app uses. The phone copy is always written; the account too when signed in. */
export const entryStore: EntryStore = {
  async load() {
    if (cloudStore && signedInAs) return cloudStore.load();
    return localEntryStore.load();
  },
  async save(diff) {
    await localEntryStore.save(diff);
    if (!cloudStore || !signedInAs) return;
    const store = cloudStore;
    inFlight += 1;
    const turn = queue.then(async () => {
      const send = backlog ? mergeDiffs(backlog, diff) : diff;
      backlog = null;
      if (isEmptyDiff(send)) return;
      try {
        await store.save(send);
      } catch (error) {
        backlog = send;
        throw error;
      }
    });
    queue = turn.catch(() => undefined).finally(() => {
      inFlight -= 1;
    });
    await turn;
  },
};

/** The phone copy, read now so the first paint already includes marks made here. */
export function readSavedLog() {
  return readLocalLog();
}

/** Forget the phone copy. Used at sign-out so a shared device keeps nothing. */
export async function clearPhoneCopy() {
  await localEntryStore.save(emptyDiff(EMPTY_LOG));
}

/**
 * Forget the offline copy of the shared catalog. Older installs cached private
 * rows under the name `catalog` (C116); the cache is now `catalog-public` and
 * holds only the shared tables. Both are dropped: on start, and at sign-out.
 */
export async function clearOfflineCatalog(onlyOld = false) {
  if (typeof caches === 'undefined') return;
  try {
    for (const name of await caches.keys()) {
      if (name === 'catalog' || (!onlyOld && name === 'catalog-public')) await caches.delete(name);
    }
  } catch {
    // Cache storage can be blocked. Nothing to clean then.
  }
}

function byId<T extends { id: string }>(rows: T[]): Map<string, T> {
  return new Map(rows.map((row) => [row.id, row]));
}

function sameRow(a: unknown, b: unknown): boolean {
  const strip = (row: unknown) => {
    if (!row || typeof row !== 'object') return row;
    const { updatedAt: _at, ...rest } = row as { updatedAt?: string };
    void _at;
    return rest;
  };
  return JSON.stringify(strip(a)) === JSON.stringify(strip(b));
}

function sameList(a: unknown[] | undefined, b: unknown[] | undefined): boolean {
  return JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
}

/** Entries or plans changed between two logs: what to upsert (stamped with `now`) and what to remove. */
function diffRows<T extends { id: string; updatedAt?: string }>(before: T[], after: T[], now: string) {
  const was = byId(before);
  const upsert: T[] = [];
  for (const row of after) {
    const prev = was.get(row.id);
    if (!prev || !sameRow(prev, row)) upsert.push(row.updatedAt && (!prev || row.updatedAt > (prev.updatedAt ?? '')) ? row : { ...row, updatedAt: now });
  }
  const is = byId(after);
  const remove = before.filter((row) => !is.has(row.id)).map((row) => row.id);
  return { upsert, remove };
}

const KEEP_REMOVED_MS = 183 * 86400 * 1000;

/**
 * What changed from `before` to `after`, and the log to save: changed rows get
 * this moment as their edit time, removed ids are remembered, and an id that
 * comes back (Attended tapped again) is forgotten from the removed map.
 */
export function diffLogs(before: PersonalLog, after: PersonalLog, now = new Date()): LogDiff {
  const at = now.toISOString();
  const entries = diffRows(before.added, after.added, at);
  const plans = diffRows(before.plans, after.plans, at);
  const removed: Record<string, string> = { ...(after.removed ?? before.removed ?? {}) };
  for (const [id, when] of Object.entries(removed)) if (now.getTime() - Date.parse(when) > KEEP_REMOVED_MS) delete removed[id];
  for (const id of [...entries.remove, ...plans.remove]) removed[id] = at;
  for (const row of [...entries.upsert, ...plans.upsert]) delete removed[row.id];
  const stamped = new Map<string, { updatedAt?: string }>([...entries.upsert, ...plans.upsert].map((row) => [row.id, row]));
  const log: PersonalLog = {
    ...after,
    added: after.added.map((entry) => (stamped.get(entry.id) as Entry | undefined) ?? entry),
    plans: after.plans.map((plan) => (stamped.get(plan.id) as Plan | undefined) ?? plan),
    removed,
  };
  const settings =
    before.order !== after.order ||
    !sameList(before.hiddenSeedIds, after.hiddenSeedIds) ||
    !sameList(before.favorites, after.favorites) ||
    JSON.stringify(before.removed ?? {}) !== JSON.stringify(removed);
  return { entries, plans, settings, log };
}

function newerWins<T extends { id: string; updatedAt?: string }>(account: T[], phone: T[], removed: Record<string, string>): T[] {
  const rows = byId(account);
  for (const row of phone) {
    const mine = rows.get(row.id);
    if (!mine) rows.set(row.id, row);
    else if ((row.updatedAt ?? '') > (mine.updatedAt ?? '')) rows.set(row.id, row);
  }
  // A row removed on any device stays out, unless it was written again after the removal.
  return [...rows.values()].filter((row) => !(row.id in removed) || (row.updatedAt ?? '') > removed[row.id]);
}

/**
 * Sign-in on a phone, and every open after: the account copy and the phone
 * copy become one. A row only one side has is kept; a row both have keeps the
 * newer copy; a row either side removed stays removed. Nothing is lost.
 */
export function mergeLogs(account: PersonalLog, phone: PersonalLog): PersonalLog {
  const removed: Record<string, string> = { ...(account.removed ?? {}) };
  for (const [id, at] of Object.entries(phone.removed ?? {})) if (!(id in removed) || at > removed[id]) removed[id] = at;
  return {
    version: 1,
    hiddenSeedIds: [...new Set([...account.hiddenSeedIds, ...phone.hiddenSeedIds])],
    added: newerWins(account.added, phone.added, removed),
    plans: newerWins(account.plans, phone.plans, removed),
    order: account.order,
    favorites: mergeFavorites(account.favorites, phone.favorites),
    removed,
  };
}

function mergeFavorites(a?: PersonalLog['favorites'], b?: PersonalLog['favorites']) {
  if (!a && !b) return undefined;
  const seen = new Map<string, NonNullable<PersonalLog['favorites']>[number]>();
  for (const fav of [...(a ?? []), ...(b ?? [])]) {
    const key = `${fav.kind}:${fav.id}`;
    if (!seen.has(key)) seen.set(key, fav);
  }
  return [...seen.values()];
}
