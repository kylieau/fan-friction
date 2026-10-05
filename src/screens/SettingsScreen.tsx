import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { AccountRow } from '../components/AccountBlock';
import { ProfileForm } from './ProfileEditScreen';
import { ChevronDown } from '../components/Icons';
import { DEFAULT_METRO } from '../config/metros';
import { getAccount, getMyProfile, getPersonalLog, nightBackup, subscribeAccount, subscribePersonalLog, todayIn } from '../data';

/** Behind the gear on You: account, profile, backup, tips. */
export function SettingsScreen({ onShowTips }: { onShowTips: () => void }) {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [handle, setHandle] = useState<string | null>(null);
  const [exportNote, setExportNote] = useState('');
  const [shareNote, setShareNote] = useState('');

  // The profile link is for sharing, like Letterboxd's Share profile. It is not shown as an address.
  const shareProfile = async () => {
    const url = `${window.location.origin}/p/${handle}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: account?.displayName ?? 'Fan/Friction', url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShareNote('Link copied.');
    } catch {
      setShareNote(url);
    }
  };

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      return;
    }
    getMyProfile().then((profile) => current && setHandle(profile?.handle ?? null));
    return () => {
      current = false;
    };
  }, [account?.id]);

  const download = () => {
    const backup = nightBackup(log);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fan-friction-nights-${todayIn(DEFAULT_METRO)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setExportNote('Downloaded.');
  };

  return (
    <div className="screen page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>
      <h1 className="page-title">Settings</h1>

      {account && (
        <div className="settings">
          <div className="settings-heading">Account</div>
          <div className="settings-row settings-static">
            <AccountRow handle={handle} />
          </div>
          {handle && (
            <button type="button" className="settings-row settings-link" onClick={shareProfile}>
              <span>Share profile</span>
              {shareNote && <span className="settings-value">{shareNote}</span>}
            </button>
          )}
        </div>
      )}

      {account && (
        <div className="settings">
          <div className="settings-heading">Profile</div>
          <ProfileForm />
        </div>
      )}

      <div className="settings">
        <div className="settings-heading">Your nights</div>
        <button type="button" className="settings-row settings-link" onClick={download}>
          <span>Export my nights</span>
          {exportNote && <span className="settings-value">{exportNote}</span>}
        </button>
        <p className="you-fine">A JSON file of every night and plan.</p>
      </div>

      <div className="settings">
        <div className="settings-heading">App</div>
        <button type="button" className="settings-row" onClick={onShowTips}>
          Show the tips again
        </button>
      </div>
    </div>
  );
}
