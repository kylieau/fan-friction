import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { AccountBlock, AccountRow } from '../components/AccountBlock';
import { ChevronDown } from '../components/Icons';
import { CityList } from '../components/HomePicker';
import { ProfileForm } from './ProfileEditScreen';
import { PrivacySettings, VISIBILITY_WORDS } from './SettingsPrivacyScreen';
import { CrowdSizeSettings } from './SettingsCrowdScreen';
import { PeoplePanel } from './PeopleScreen';
import { FavoritesScreen } from './FavoritesScreen';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import {
  blockedPeople,
  crowdRangeLabel,
  crowdRangeOf,
  favoriteCitiesOf,
  favoritesOf,
  followRequests,
  getAccount,
  getMyProfile,
  getPersonalLog,
  logBackup,
  peopleList,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  unblockUser,
  updateMyProfile,
  type Profile,
  type Visibility,
} from '../data';

/** The dropdowns, in the panel's order (a default: grouped by the sections Settings already had). */
export type SettingsSectionId = 'profile' | 'account' | 'cities' | 'crowd' | 'privacy' | 'blocked' | 'faves' | 'people' | 'events' | 'app';

/**
 * Settings as a side panel (build 6, item 8; Kylie, Oct 15: "reorganize the entire You > Edit profile / settings /
 * share my handle", built from Mock Mosaic's wireframe). The avatar on the You tab is its only door. At the top a
 * profile card with Edit profile and Share profile; under it one page of dropdowns: Profile, Account, Home & cities,
 * Crowd size, Privacy, Blocked, Faves, People, Your events, App. Privacy and Blocked are contents, not pages; the
 * Faves and People lists live here since Following became a timeline (item 7). Signed out, only what a signed-out
 * person can use shows (sign in, cities, crowd size, Faves, export, credits). `?panel=<section>` opens that one.
 */
export function SettingsPanel({ section, onClose }: { section: string | null; onClose: () => void }) {
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
  const [peopleCount, setPeopleCount] = useState<number | null>(null);
  const [requestCount, setRequestCount] = useState(0);
  const wanted = isSection(section) ? section : null;
  const [open, setOpen] = useState<Set<SettingsSectionId>>(() => new Set(wanted ? [wanted] : []));
  const panel = useRef<HTMLDivElement>(null);

  // A deep link (`?panel=privacy`, the old sub-page addresses) opens that dropdown and brings it into view.
  useEffect(() => {
    if (!wanted) return;
    setOpen((set) => (set.has(wanted) ? set : new Set(set).add(wanted)));
    const id = window.setTimeout(() => panel.current?.querySelector(`[data-section="${wanted}"]`)?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 50);
    return () => window.clearTimeout(id);
  }, [wanted]);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setPeopleCount(null);
      setRequestCount(0);
      return;
    }
    getMyProfile().then((profile) => {
      if (!current) return;
      setHandle(profile?.handle ?? null);
      setLinkOff(profile?.linkOff);
      setVisibility(profile?.visibility ?? 'only_me');
    });
    blockedPeople().then((list) => current && setBlocked(list));
    peopleList().then((list) => current && setPeopleCount(list.length));
    followRequests().then((list) => current && setRequestCount(list.length));
    return () => {
      current = false;
    };
  }, [account?.id]);

  // Share profile: the profile link where sharing works, copied elsewhere (Letterboxd's Share profile).
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

  const toggle = (id: SettingsSectionId) =>
    setOpen((set) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const favorites = favoritesOf(log);
  const starred = favoriteCitiesOf(log).filter((id) => id !== homeId).length;
  const home = homeId ? (METROS[homeId]?.name ?? '') : 'Choose home';

  const dropdown = (id: SettingsSectionId, title: string, value: ReactNode, body: ReactNode) => (
    <section key={id} className={`settings-section${open.has(id) ? ' open' : ''}`} data-section={id}>
      <button type="button" className="settings-row settings-link settings-section-head" aria-expanded={open.has(id)} aria-controls={`settings-${id}`} onClick={() => toggle(id)}>
        <span>{title}</span>
        <span className="settings-section-side">
          {value && <span className="settings-value">{value}</span>}
          <span className={`settings-section-chevron${open.has(id) ? ' open' : ''}`} aria-hidden>
            <ChevronDown />
          </span>
        </span>
      </button>
      {open.has(id) && (
        <div id={`settings-${id}`} className="settings-section-body">
          {body}
        </div>
      )}
    </section>
  );

  return (
    <div className="home-backdrop side-backdrop" role="presentation" onClick={onClose}>
      <aside ref={panel} className="side-panel" role="dialog" aria-modal="true" aria-label="Settings" onClick={(ev) => ev.stopPropagation()}>
        <div className="side-head">
          <h2 className="side-title">Settings</h2>
          <button type="button" className="about-read-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>

        {account ? (
          <div className="card profile-card">
            <span className="avatar" aria-hidden>
              {(account.displayName ?? account.email ?? 'Y').slice(0, 1).toUpperCase()}
            </span>
            <span className="profile-card-who">
              <span className="log-title">{account.displayName ?? 'You'}</span>
              {handle && <span className="you-handle">@{handle}</span>}
            </span>
            <span className="profile-card-actions">
              <button
                type="button"
                className="link-button"
                onClick={() => {
                  setOpen((set) => new Set(set).add('profile'));
                  panel.current?.querySelector('[data-section="profile"]')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }}
              >
                Edit profile
              </button>
              {handle && linkOff !== true && (
                <button type="button" className="link-button" onClick={shareProfile}>
                  Share profile
                </button>
              )}
            </span>
            {shareNote && <span className="you-fine profile-card-note">{shareNote}</span>}
          </div>
        ) : (
          <AccountBlock />
        )}

        {account && dropdown('profile', 'Profile', handle ? `@${handle}` : null, <ProfileForm />)}
        {account &&
          dropdown(
            'account',
            'Account',
            account.email ?? null,
            <div className="settings">
              <div className="settings-row settings-static">
                <AccountRow handle={handle} />
              </div>
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
            </div>,
          )}
        {dropdown(
          'cities',
          'Home & cities',
          starred > 0 ? `${home} · ${starred} starred` : home,
          <div className="settings">
            <p className="you-fine">Tap a city to make it home. Star any others you follow; they're pinned under Home and in the city menu.</p>
            <CityList variant="page" />
          </div>,
        )}
        {dropdown(
          'crowd',
          'Crowd size',
          crowdRangeLabel(crowdRangeOf(log)),
          <>
            <CrowdSizeSettings />
            <p className="you-fine">Applies to Explore, date pages and search.</p>
          </>,
        )}
        {account && dropdown('privacy', 'Privacy', visibility ? VISIBILITY_WORDS[visibility] : null, <PrivacySettings />)}
        {account &&
          blocked.length > 0 &&
          dropdown(
            'blocked',
            'Blocked',
            `${blocked.length}`,
            <div className="settings">
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
            </div>,
          )}
        {dropdown('faves', 'Faves', favorites.length > 0 ? `${favorites.length}` : null, <FavoritesScreen embedded />)}
        {account &&
          dropdown(
            'people',
            'People',
            peopleCount !== null ? `${peopleCount}${requestCount > 0 ? ` · ${requestCount} ${requestCount === 1 ? 'request' : 'requests'}` : ''}` : null,
            <PeoplePanel />,
          )}
        {dropdown(
          'events',
          'Your events',
          null,
          <div className="settings">
            <button type="button" className="settings-row settings-link" onClick={download}>
              <span>Export my events</span>
              {exportNote && <span className="settings-value">{exportNote}</span>}
            </button>
            <p className="you-fine">A JSON file of every event and plan.</p>
          </div>,
        )}
        {dropdown(
          'app',
          'App',
          null,
          <div className="settings">
            <p className="you-fine">
              Weather data by{' '}
              <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
                Open-Meteo.com
              </a>
              . Maps by OpenFreeMap and OpenStreetMap. Listings from the leagues and Ticketmaster.
            </p>
            <p className="you-fine">Your events are saved on this phone, and in your account if you sign in. No location, no tracking, nothing sold.</p>
          </div>,
        )}
      </aside>
    </div>
  );
}

const SECTIONS: readonly SettingsSectionId[] = ['profile', 'account', 'cities', 'crowd', 'privacy', 'blocked', 'faves', 'people', 'events', 'app'];

export function isSection(value: string | null): value is SettingsSectionId {
  return value !== null && (SECTIONS as readonly string[]).includes(value);
}
