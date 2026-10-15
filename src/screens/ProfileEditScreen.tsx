import { useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAccount,
  getMyProfile,
  isValidHandle,
  subscribeAccount,
  suggestHandle,
  updateMyProfile,
} from '../data';
import { BackLink } from '../components/BackLink';

/** Display name and handle. Sits inside Settings; who sees your stubs moved to Settings › Privacy (build 5, item 9). */
export function ProfileForm({ onSaved }: { onSaved?: () => void }) {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    let current = true;
    getMyProfile().then((profile) => {
      if (!current || !profile) return;
      setName(profile.displayName ?? '');
      setHandle(profile.handle ?? suggestHandle(profile.displayName ?? ''));
      setLoaded(true);
    });
    return () => {
      current = false;
    };
  }, [account?.id]);

  if (!account) return null;

  const save = async () => {
    if (busy) return;
    setBusy(true);
    setNote(null);
    const error = await updateMyProfile({ displayName: name, handle });
    setBusy(false);
    if (error) {
      setNote(error);
      return;
    }
    setNote('Saved.');
    onSaved?.();
  };

  const handleOk = isValidHandle(handle.trim().toLowerCase());

  return (
      <form
        className="profile-form"
        onSubmit={(event) => {
          event.preventDefault();
          void save();
        }}
      >
        <label className="field">
          <span className="field-label">Display name</span>
          <input
            id="profile-name"
            className="account-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
            autoComplete="name"
            disabled={!loaded}
          />
        </label>

        <label className="field">
          <span className="field-label">Handle</span>
          <span className="field-prefix">
            <span className="field-prefix-text">@</span>
            <input
              id="profile-handle"
              className="account-input"
              value={handle}
              onChange={(e) => setHandle(e.target.value.toLowerCase())}
              maxLength={32}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              disabled={!loaded}
            />
          </span>
          {!handleOk && <span className="field-hint">3 to 32 letters, numbers or dashes.</span>}
        </label>

        <button type="submit" className="gold-button" disabled={busy || !loaded || !handleOk}>
          Save
        </button>
        {note && (
          <p className="you-fine" role="status">
            {note}
          </p>
        )}
      </form>
  );
}

/** The old stand-alone route. Settings now holds the same form. */
export function ProfileEditScreen() {
  const navigate = useNavigate();
  return (
    <div className="screen page">
      <BackLink to="/you/settings" label="Settings" />
      <h1 className="page-title">Edit profile</h1>
      <ProfileForm onSaved={() => navigate('/you/settings', { replace: true })} />
    </div>
  );
}
