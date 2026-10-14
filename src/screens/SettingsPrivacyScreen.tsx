import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { getAccount, getMyProfile, subscribeAccount, updateMyProfile, type Visibility } from '../data';

/** The three levels (Kylie, Oct 14, answer E): the profile switch's values, relabeled. */
export const VISIBILITY_WORDS: Record<Visibility, string> = { anyone: 'Anyone', approved: 'Friends', only_me: 'Private' };
const ORDER: Visibility[] = ['anyone', 'approved', 'only_me'];

/**
 * Settings › Privacy (build 5, stub privacy step 1 and item 9; boards privacy-r2 frame 1, settings-full privacy
 * sub-page): the profile's one visibility switch, reused as the default for new stubs, in the live row style with
 * a check. New users start Private (`only_me`). Saved on tap.
 */
export function SettingsPrivacyScreen() {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [value, setValue] = useState<Visibility | null>(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    let current = true;
    if (!account) return;
    getMyProfile().then((profile) => current && setValue(profile?.visibility ?? 'only_me'));
    return () => {
      current = false;
    };
  }, [account?.id]);

  const choose = async (next: Visibility) => {
    if (next === value) return;
    const before = value;
    setValue(next);
    setNote('');
    const error = await updateMyProfile({ visibility: next });
    if (error) {
      setValue(before);
      setNote(error);
    }
  };

  return (
    <div className="screen page">
      <Link to="/you/settings" className="back-link">
        <ChevronDown /> Settings
      </Link>
      <h1 className="page-title">Privacy</h1>
      {account ? (
        <div className="settings">
          <div className="settings-heading">Default for new stubs</div>
          {ORDER.map((level) => (
            <button
              key={level}
              type="button"
              className="settings-row settings-link"
              role="radio"
              aria-checked={value === level}
              disabled={value === null}
              onClick={() => void choose(level)}
            >
              <span>{VISIBILITY_WORDS[level]}</span>
              {value === level && (
                <span className="settings-value" aria-hidden>
                  ✓
                </span>
              )}
            </button>
          ))}
          <p className="you-fine">New users start Private. Applies to new stubs.</p>
          {note && (
            <p className="you-fine" role="status">
              {note}
            </p>
          )}
        </div>
      ) : (
        <p className="you-fine">Sign in to choose who sees your stubs.</p>
      )}
    </div>
  );
}
