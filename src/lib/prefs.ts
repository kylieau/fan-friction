import { APP } from '../config/app';

// Small per-device settings (like "tips already seen"). Not for your log:
// that goes to Supabase, since phone browsers can erase this storage.
const key = (name: string) => `${APP.slug}:${name}`;

export function getPref<T>(name: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key(name));
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function setPref<T>(name: string, value: T) {
  try {
    localStorage.setItem(key(name), JSON.stringify(value));
  } catch {
    // Storage can be blocked (private browsing). The app still works.
  }
}
