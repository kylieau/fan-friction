import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { GlobeIcon, LockMark, PeopleIcon } from '../components/Icons';
import { getAccount, getMyProfile, getPersonalLog, setPastStubsVisibility, setStubDefault, subscribeAccount, subscribePersonalLog, updateMyProfile, type StubVisibility, type Visibility } from '../data';
import { BackLink } from '../components/BackLink';

/** The three levels (Kylie, Oct 14, answer E): the profile switch's values, relabeled. */
export const VISIBILITY_WORDS: Record<Visibility, string> = { anyone: 'Anyone', approved: 'Friends', only_me: 'Private' };

/** The profile's switch as a stub level: the default for new stubs. */
export function levelFor(visibility: Visibility | undefined | null): StubVisibility {
  return visibility === 'anyone' ? 'anyone' : visibility === 'approved' ? 'friends' : 'private';
}
const ORDER: Visibility[] = ['anyone', 'approved', 'only_me'];

const BULK: { level: StubVisibility; word: string; sub: string; icon: ReactNode }[] = [
  { level: 'anyone', word: 'Anyone', sub: 'Anyone on Fan/Friction can see it', icon: <GlobeIcon size={22} /> },
  { level: 'friends', word: 'Friends', sub: 'Only people you approve', icon: <PeopleIcon size={22} /> },
  { level: 'private', word: 'Private', sub: 'Only you', icon: <LockMark size={22} /> },
];

/**
 * Settings › Privacy (build 5, stub privacy step 1 and item 9; boards privacy-r2 frame 1, settings-full privacy
 * sub-page): the profile's one visibility switch, reused as the default for new stubs, in the live row style with
 * a check. New users start Private (`only_me`). Saved on tap.
 */
export function SettingsPrivacyScreen() {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [value, setValue] = useState<Visibility | null>(null);
  const [note, setNote] = useState('');
  const [bulk, setBulk] = useState(false);
  const [done, setDone] = useState('');
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const pastCount = log.added.length;

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
    } else setStubDefault(levelFor(next));
  };

  return (
    <div className="screen page">
      <BackLink to="/you/settings" label="Settings" />
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
          <p className="you-fine">
            New users start Private. Applies to Attending, Watching and Interested. You can still change any single stub when you stub it, or later from
            the event page.
          </p>
          <div className="settings-heading">Past stubs</div>
          <button type="button" className="settings-row settings-link" onClick={() => setBulk(true)}>
            <span>Change past stubs…</span>
            {done && <span className="settings-value">{done}</span>}
          </button>
          <p className="you-fine">Make all past stubs Anyone, Friends or Private at once.</p>
          {note && (
            <p className="you-fine" role="status">
              {note}
            </p>
          )}
        </div>
      ) : (
        <p className="you-fine">Sign in to choose who sees your stubs.</p>
      )}
      {bulk && (
        <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-labelledby="bulk-title" onClick={() => setBulk(false)}>
          {/* Board privacy-r2 frame 2: any direction, unlike Venmo's more-private-only rule. */}
          <div className="action-sheet bulk-sheet" onClick={(ev) => ev.stopPropagation()}>
            <span className="sheet-handle" aria-hidden />
            <h2 id="bulk-title" className="stub-sheet-title">
              Change past stubs
            </h2>
            <p className="stub-sheet-sub">
              Applies to all {pastCount} past {pastCount === 1 ? 'stub' : 'stubs'}. New stubs keep your default ({value ? VISIBILITY_WORDS[value] : 'Private'}).
            </p>
            {BULK.map((row) => (
              <button
                key={row.level}
                type="button"
                className="bulk-row"
                onClick={() => {
                  const n = setPastStubsVisibility(row.level);
                  setBulk(false);
                  setDone(`${n} ${n === 1 ? 'stub' : 'stubs'} ${row.word}`);
                }}
              >
                <span className="bulk-icon">{row.icon}</span>
                <span className="bulk-text">
                  <span className="bulk-word">Make all past stubs {row.word}</span>
                  <span className="bulk-sub">{row.sub}</span>
                </span>
              </button>
            ))}
            <button type="button" className="link-button bulk-cancel" onClick={() => setBulk(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
