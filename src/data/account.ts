// Who is signed in. Screens read this through src/data/index.ts.
// Signing in is optional: signed out, the app saves on the phone as it always has.
// Sign-in is Google or an emailed link. No passwords are stored anywhere.

import type { Session, User } from '@supabase/supabase-js';
import { isCloudConfigured, supabase } from './storage/supabaseClient';

export interface Account {
  id: string;
  email: string | null;
  /** From Google when it offered one. Editable later on the profile. */
  displayName: string | null;
  avatarUrl: string | null;
}

let account: Account | null = null;
/** True until the first answer about the saved session comes back. */
let settling = isCloudConfigured();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function fromUser(user: User | null | undefined): Account | null {
  if (!user) return null;
  const meta = (user.user_metadata ?? {}) as Record<string, unknown>;
  const name = meta.full_name ?? meta.name;
  const avatar = meta.avatar_url ?? meta.picture;
  return {
    id: user.id,
    email: user.email ?? null,
    displayName: typeof name === 'string' ? name : null,
    avatarUrl: typeof avatar === 'string' ? avatar : null,
  };
}

function apply(session: Session | null) {
  const next = fromUser(session?.user);
  const changed = (next?.id ?? null) !== (account?.id ?? null);
  account = next;
  settling = false;
  if (changed) signInListeners.forEach((listener) => listener(next));
  emit();
}

// Start listening as soon as the module loads, so a returning sign-in link is caught.
const client = supabase();
if (client) {
  client.auth.getSession().then(({ data }) => apply(data.session));
  client.auth.onAuthStateChange((_event, session) => apply(session));
}

export function subscribeAccount(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** The signed-in person, or null. */
export function getAccount(): Account | null {
  return account;
}

/** True while the app is still finding out whether someone is signed in. */
export function isAccountSettling(): boolean {
  return settling;
}

/** Whether signing in is possible at all on this build. */
export function canSignIn(): boolean {
  return isCloudConfigured();
}

// The log listens here to switch between the phone copy and the account copy.
type SignInListener = (account: Account | null) => void;
const signInListeners = new Set<SignInListener>();
export function onAccountChange(listener: SignInListener) {
  signInListeners.add(listener);
  return () => signInListeners.delete(listener);
}

function returnAddress(): string {
  return `${window.location.origin}/you`;
}

export async function signInWithGoogle(): Promise<string | null> {
  const c = supabase();
  if (!c) return 'Signing in is not set up on this build.';
  const { error } = await c.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: returnAddress() },
  });
  return error ? error.message : null;
}

/** Emails a one-tap sign-in link. Resolves to an error message, or null when the email went out. */
export async function signInWithEmail(email: string): Promise<string | null> {
  const c = supabase();
  if (!c) return 'Signing in is not set up on this build.';
  const trimmed = email.trim();
  if (!trimmed.includes('@')) return 'Enter the email you want the link sent to.';
  const { error } = await c.auth.signInWithOtp({
    email: trimmed,
    options: { emailRedirectTo: returnAddress() },
  });
  return error ? error.message : null;
}

export async function signOut(): Promise<void> {
  const c = supabase();
  if (!c) return;
  await c.auth.signOut();
}
