// The one place the app picks where her log is saved.
// Today that is the phone. Swap `nightStore` for a cloud store later.
// Nothing here calls the network, and no project URL is required.

import { localNightStore, readLocalLog } from './localStore';

export type { NightStore } from './types';
export { createSupabaseNightStore } from './supabaseStore';
export { EMPTY_LOG } from './localStore';

/** The store the app uses. */
export const nightStore = localNightStore;

/** The phone copy, read now so the first paint already includes marks she made. */
export function readSavedLog() {
  return readLocalLog();
}
