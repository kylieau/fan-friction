// The one place the app picks where the log is saved.
// Signed out: the phone. Signed in: the account, with the phone as a cache so
// the first paint is instant. Nothing here calls the network unless the two
// public Supabase settings exist and someone has signed in.

import type { PersonalLog } from '../types';
import { localEntryStore, readLocalLog, EMPTY_LOG } from './localStore';
import { createSupabaseEntryStore } from './supabaseStore';
import { supabase } from './supabaseClient';
import type { EntryStore } from './types';

export type { EntryStore } from './types';
export { EMPTY_LOG } from './localStore';
export { isCloudConfigured } from './supabaseClient';

let signedInAs: string | null = null;

const client = supabase();
const cloudStore: EntryStore | null = client ? createSupabaseEntryStore(client, () => signedInAs) : null;

/** Tell the store who is signed in (or null). The log calls this when the account changes. */
export function setStoreAccount(userId: string | null) {
  signedInAs = userId;
}

/** True when saves also go to the account. */
export function isSavingToAccount(): boolean {
  return Boolean(cloudStore && signedInAs);
}

/** The store the app uses. The phone copy is always written; the account too when signed in. */
export const entryStore: EntryStore = {
  async load() {
    if (cloudStore && signedInAs) return cloudStore.load();
    return localEntryStore.load();
  },
  async save(log) {
    await localEntryStore.save(log);
    if (cloudStore && signedInAs) await cloudStore.save(log);
  },
};

/** The phone copy, read now so the first paint already includes marks made here. */
export function readSavedLog() {
  return readLocalLog();
}

/** Forget the phone copy. Used at sign-out so a shared device keeps nothing. */
export async function clearPhoneCopy() {
  await localEntryStore.save(EMPTY_LOG);
}

function byId<T extends { id: string }>(rows: T[]): Map<string, T> {
  return new Map(rows.map((row) => [row.id, row]));
}

/**
 * First sign-in on a phone: anything marked here that the account lacks is
 * copied up, so nothing is lost. The account wins where both have a row.
 */
export function mergeLogs(account: PersonalLog, phone: PersonalLog): PersonalLog {
  const entries = byId(account.added);
  for (const entry of phone.added) if (!entries.has(entry.id)) entries.set(entry.id, entry);
  const plans = byId(account.plans);
  for (const plan of phone.plans) if (!plans.has(plan.id)) plans.set(plan.id, plan);
  return {
    version: 1,
    hiddenSeedIds: [...new Set([...account.hiddenSeedIds, ...phone.hiddenSeedIds])],
    added: [...entries.values()],
    plans: [...plans.values()],
    order: account.order,
    favorites: mergeFavorites(account.favorites, phone.favorites),
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
