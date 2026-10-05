import { useState, useSyncExternalStore } from 'react';
import {
  canSignIn,
  getAccount,
  isAccountSettling,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  subscribeAccount,
} from '../data';

/**
 * Sign in (Google or an emailed link) and sign out, on the You screen.
 * Signed out, the log saves on this phone. Signed in, it also saves to the account.
 * No passwords. Nothing public is created by signing in.
 */
export function AccountBlock() {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const settling = useSyncExternalStore(subscribeAccount, isAccountSettling, isAccountSettling);
  const [email, setEmail] = useState('');
  const [note, setNote] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!canSignIn()) return null;

  const google = async () => {
    setBusy(true);
    setNote(null);
    const error = await signInWithGoogle();
    if (error) {
      setNote(error);
      setBusy(false);
    }
    // On success the page leaves for Google and comes back signed in.
  };

  const emailLink = async () => {
    setBusy(true);
    setNote(null);
    const error = await signInWithEmail(email);
    setBusy(false);
    setNote(error ?? `Check ${email.trim()} for a sign-in link. It works on this phone or any other.`);
    if (!error) setEmail('');
  };

  if (settling) {
    return (
      <section className="account-block" aria-label="Account">
        <p className="you-fine">Checking your account…</p>
      </section>
    );
  }

  if (account) return null;

  return (
    <section className="account-block" aria-label="Account">
      <div className="account-copy">
        <div className="card-title">Keep your nights safe</div>
        <p className="you-fine">Your log follows you to any phone. Private by default.</p>
      </div>
      <button type="button" className="settings-row account-google" onClick={google} disabled={busy}>
        Continue with Google
      </button>
      <form
        className="account-email"
        onSubmit={(event) => {
          event.preventDefault();
          void emailLink();
        }}
      >
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          className="account-input"
          placeholder="Or your email"
          aria-label="Email for a sign-in link"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={busy}
        />
        <button type="submit" className="settings-row account-send" disabled={busy || !email.includes('@')}>
          Email me a link
        </button>
      </form>
      {note && (
        <p className="you-fine" role="status">
          {note}
        </p>
      )}
    </section>
  );
}

/** Who is signed in, with Sign out. Lives on the Settings screen. */
export function AccountRow({ handle }: { handle: string | null }) {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [busy, setBusy] = useState(false);
  if (!account) return null;
  return (
    <div className="account-row">
      <div className="account-who">
        <span className="account-name">{account.displayName ?? account.email ?? 'Signed in'}</span>
        {handle && <span className="you-fine">@{handle}</span>}
      </div>
      <button
        type="button"
        className="link-button"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          await signOut();
          setBusy(false);
        }}
      >
        Sign out
      </button>
    </div>
  );
}
