// The one connection to Supabase. Built only when the two public settings exist
// (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, from .env.local or Vercel).
// Without them the app runs exactly as before, saving on the phone, and never
// touches the network.

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient | null = null;

/** True when the app knows which Supabase project to talk to. */
export function isCloudConfigured(): boolean {
  return Boolean(url && anonKey);
}

/** The shared client, or null when cloud saving is not set up. */
export function supabase(): SupabaseClient | null {
  if (!isCloudConfigured()) return null;
  if (!client) {
    client = createClient(url!, anonKey!, {
      auth: {
        // Sign-in links and Google both land back on the app with a code in the address.
        detectSessionInUrl: true,
        flowType: 'pkce',
        persistSession: true,
      },
    });
  }
  return client;
}
