// Cloud sync, not connected. Do not call this. It makes no network request.
// When Kylie has a project URL and anon key, a real store can replace this
// and be selected from storage/index.ts. No secrets belong in the repo.

import type { NightStore } from './types';

export interface SupabaseNightStoreOptions {
  url: string;
  anonKey: string;
}

export function createSupabaseNightStore(options: SupabaseNightStoreOptions): NightStore {
  void options;
  const unavailable = () => Promise.reject(new Error('Cloud sync is not connected yet.'));
  return {
    load: unavailable,
    save() {
      return unavailable();
    },
  };
}
