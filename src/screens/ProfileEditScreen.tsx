import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import {
  getAccount,
  getMyProfile,
  isValidHandle,
  subscribeAccount,
  suggestHandle,
  updateMyProfile,
  type Visibility,
} from '../data';

const CHOICES: { value: Visibility; title: string; body: string }[] = [
  { value: 'only_me', title: 'Only me', body: 'Your events are private. The default.' },
  {
    value: 'approved',
    title: 'People I approve',
    body: 'Anyone can ask to follow you. Only people you approve see your events.',
  },
  {
    value: 'anyone',
    title: 'Anyone',
    body: 'Anyone with your link can see your events and follow you. Private notes stay private.',
  },
];

/** Display name, handle, and the one visibility switch. Sits inside Settings. */
export function ProfileForm({ onSaved }: { onSaved?: () => void }) {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [visibility, setVisibility] = useState<Visibility>('only_me');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    let current = true;
    getMyProfile().then((profile) => {
      if (!current || !profile) return;
      setName(profile.displayName ?? '');
      setHandle(profile.handle ?? suggestHandle(profile.displayName ?? ''));
      setVisibility(profile.visibility);
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
    const error = await updateMyProfile({ displayName: name, handle, visibility });
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

        <fieldset className="field choices">
          <legend className="field-label">Who can see your events</legend>
          {CHOICES.map((choice) => (
            <label key={choice.value} className={`choice${visibility === choice.value ? ' on' : ''}`}>
              <input
                type="radio"
                name="visibility"
                value={choice.value}
                checked={visibility === choice.value}
                onChange={() => setVisibility(choice.value)}
              />
              <span className="choice-text">
                <span className="choice-title">{choice.title}</span>
                <span className="choice-body">{choice.body}</span>
              </span>
            </label>
          ))}
        </fieldset>

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
      <Link to="/you/settings" className="back-link">
        <ChevronDown /> Settings
      </Link>
      <h1 className="page-title">Edit profile</h1>
      <ProfileForm onSaved={() => navigate('/you/settings', { replace: true })} />
    </div>
  );
}
