import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { AccountRow } from '../components/AccountBlock';
import { ProfileForm } from './ProfileEditScreen';
import { ChevronDown } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { VISIBILITY_WORDS } from './SettingsPrivacyScreen';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { blockedPeople, favoriteCitiesOf, getAccount, getMyProfile, getPersonalLog, logBackup, subscribeAccount, subscribePersonalLog, todayIn, unblockUser, updateMyProfile, type Profile, type Visibility } from '../data';

/**
 * Behind the gear on You, one list (build 5, item 9; board settings-full, lean): Account, Location, Privacy, then the
 * existing Profile, Blocked, Favorites, Your events and App sections. Detail controls live on sub-pages.
 */
export function SettingsScreen() {
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [handle, setHandle] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<Visibility | null>(null);
  // undefined until the project has the column (migration 0017); the row then shows.
  const [linkOff, setLinkOff] = useState<boolean | undefined>(undefined);
  const [copyNote, setCopyNote] = useState('');
  const [blocked, setBlocked] = useState<Profile[]>([]);
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
    getMyProfile().then((profile) => {
      if (!current) return;
      setHandle(profile?.handle ?? null);
      setLinkOff(profile?.linkOff);
      setVisibility(profile?.visibility ?? 'only_me');
    });
    blockedPeople().then((list) => current && setBlocked(list));
    return () => {
      current = false;
    };
  }, [account?.id]);

  const download = () => {
    const backup = logBackup(log);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fan-friction-events-${todayIn(DEFAULT_METRO)}.json`;
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
          {handle && linkOff !== true && (
            <button type="button" className="settings-row settings-link" onClick={shareProfile}>
              <span>Share profile</span>
              {shareNote && <span className="settings-value">{shareNote}</span>}
            </button>
          )}
          {handle && (
            <button
              type="button"
              className="settings-row settings-link"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`@${handle}`);
                  setCopyNote('Copied.');
                } catch {
                  setCopyNote(`@${handle}`);
                }
              }}
            >
              <span>Copy my handle</span>
              <span className="settings-value">{copyNote || `@${handle}`}</span>
            </button>
          )}
          {handle && linkOff !== undefined && (
            // The off switch (R06): off, the link shows "No one here" to everyone but you and people already linked by a follow.
            <button
              type="button"
              className="settings-row settings-link"
              role="switch"
              aria-checked={!linkOff}
              onClick={async () => {
                const next = !linkOff;
                setLinkOff(next);
                if (await updateMyProfile({ linkOff: next })) setLinkOff(!next);
              }}
            >
              <span>Profile link</span>
              <span className="settings-value">{linkOff ? 'Off' : 'On'}</span>
            </button>
          )}
        </div>
      )}

      <div className="settings">
        <div className="settings-heading">Location</div>
        <Link to="/you/settings/cities" className="settings-row settings-link">
          <span>Home &amp; cities</span>
          <span className="settings-value">{homeCitiesValue(homeId, favoriteCitiesOf(log).filter((id) => id !== homeId).length)}</span>
        </Link>
      </div>

      {account && (
        <div className="settings">
          <div className="settings-heading">Privacy</div>
          <Link to="/you/settings/privacy" className="settings-row settings-link">
            <span>Default for new stubs</span>
            {visibility && <span className="settings-value">{VISIBILITY_WORDS[visibility]}</span>}
          </Link>
          <p className="you-fine">New users start Private. Applies to new stubs.</p>
        </div>
      )}

      {account && (
        <div className="settings">
          <div className="settings-heading">Profile</div>
          <ProfileForm />
        </div>
      )}

      {account && blocked.length > 0 && (
        <div className="settings">
          <div className="settings-heading">Blocked</div>
          {blocked.map((person) => (
            <button
              key={person.id}
              type="button"
              className="settings-row settings-link"
              onClick={async () => {
                if (!(await unblockUser(person.id))) setBlocked((list) => list.filter((p) => p.id !== person.id));
              }}
            >
              <span>{person.displayName ?? (person.handle ? `@${person.handle}` : 'Someone')}</span>
              <span className="settings-value">Unblock</span>
            </button>
          ))}
        </div>
      )}

      <div className="settings">
        <div className="settings-heading">Favorites</div>
        <Link to="/favorites/edit" className="settings-row settings-link">
          Edit favorites
        </Link>
      </div>

      <div className="settings">
        <div className="settings-heading">Your events</div>
        <button type="button" className="settings-row settings-link" onClick={download}>
          <span>Export my events</span>
          {exportNote && <span className="settings-value">{exportNote}</span>}
        </button>
        <p className="you-fine">A JSON file of every event and plan.</p>
      </div>

      <div className="settings">
        <div className="settings-heading">App</div>
        <p className="you-fine">
          Weather data by{' '}
          <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
            Open-Meteo.com
          </a>
          . Maps by OpenFreeMap and OpenStreetMap. Listings from the leagues and Ticketmaster.
        </p>
        <p className="you-fine">
          Your events are saved on this phone, and in your account if you sign in. No location, no tracking, nothing sold.
        </p>
      </div>
    </div>
  );
}

/** "Los Angeles · 3 starred"; the count only when something is starred. */
function homeCitiesValue(homeId: string | null, starred: number): string {
  const home = homeId ? (METROS[homeId]?.name ?? '') : 'Choose home';
  return starred > 0 ? `${home} · ${starred} starred` : home;
}
