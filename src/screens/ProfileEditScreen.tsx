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
  { value: 'only_me', title: 'Only me', body: 'Your nights are private. The default.' },
  {
    value: 'approved',
    title: 'People I approve',
    body: 'Anyone can ask to follow you. Only people you approve see your nights.',
  },
  {
    value: 'anyone',
    title: 'Anyone',
    body: 'Anyone with your link can see your nights and follow you. Private notes stay private.',
  },
];

/** Display name, link handle, and the one visibility switch. */
export function ProfileEditScreen() {
  const navigate = useNavigate();
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

  if (!account) {
    return (
      <div className="screen page">
        <Link to="/you" className="back-link">
          <ChevronDown /> You
        </Link>
        <h1 className="page-title">Sign in first</h1>
        <p className="you-fine">Your profile lives in your account. Sign in on the You tab.</p>
      </div>
    );
  }

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
    navigate(`/p/${handle.trim().toLowerCase()}`, { replace: true });
  };

  const handleOk = isValidHandle(handle.trim().toLowerCase());

  return (
    <div className="screen page">
      <Link to="/you" className="back-link">
        <ChevronDown /> Cancel
      </Link>
      <h1 className="page-title">Edit profile</h1>

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
          <span className="field-label">Link</span>
          <span className="field-prefix">
            <span className="field-prefix-text">/p/</span>
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
          <span className="field-hint">
            {handleOk ? 'Letters, numbers and dashes. This is the address friends open.' : '3 to 32 letters, numbers or dashes.'}
          </span>
        </label>

        <fieldset className="field choices">
          <legend className="field-label">Who can see your nights</legend>
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
        <p className="you-fine">Nothing posts anywhere. Your nights appear only on your own page, to the people you allow.</p>
      </form>
    </div>
  );
}
