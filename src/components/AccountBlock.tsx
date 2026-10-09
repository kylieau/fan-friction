import { useState, useSyncExternalStore } from 'react';
import {
  canSignIn,
  getAccount,
  hasUnsyncedChanges,
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
        {/* Placeholder tagline (Kylie, Oct 5): one line, to be replaced. */}
        <div className="card-title">Keep your events safe</div>
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
          placeholder="Email me a link"
          aria-label="Email for a sign-in link"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={busy}
        />
        {email.includes('@') && (
          <button type="submit" className="link-button account-send" disabled={busy}>
            Send the link
          </button>
        )}
      </form>
      {note && (
        <p className="you-fine" role="status">
          {note}
        </p>
      )}
    </section>
  );
}

/**
 * Who is signed in, with Sign out. Lives on the Settings screen. Sign out wipes
 * this phone's copy, so while a change has not reached the account it asks first (3.21).
 */
export function AccountRow({ handle }: { handle: string | null }) {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [busy, setBusy] = useState(false);
  const [asking, setAsking] = useState(false);
  if (!account) return null;
  const leave = async () => {
    setAsking(false);
    setBusy(true);
    await signOut();
    setBusy(false);
  };
  return (
    <div className="account-row">
      <div className="account-who">
        <span className="account-name">{account.displayName ?? account.email ?? 'Signed in'}</span>
        {handle && <span className="you-fine">@{handle}</span>}
      </div>
      {asking ? (
        <div className="remove-confirm" role="group" aria-label="Sign out?">
          <span>Some changes haven't reached your account yet.</span>
          <button type="button" className="link-button" onClick={() => setAsking(false)}>
            Stay
          </button>
          <button type="button" className="link-button remove-entry" onClick={leave}>
            Sign out
          </button>
        </div>
      ) : (
        <button type="button" className="link-button" disabled={busy} onClick={() => (hasUnsyncedChanges() ? setAsking(true) : void leave())}>
          Sign out
        </button>
      )}
    </div>
  );
}
