import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { EditFavoritesSheet, FavoritesSection } from '../components/EditFavoritesSheet';
import { FavoriteCitiesSection } from '../components/FavoriteCities';
import { AccountBlock, AccountRow } from '../components/AccountBlock';
import { ProfileForm } from './ProfileEditScreen';
import { PrivacySettings, VISIBILITY_WORDS } from './SettingsPrivacyScreen';
import { CrowdSizeSettings } from './SettingsCrowdScreen';
import { PeoplePanel } from './PeopleScreen';
import { ReviewQueue } from '../components/ReviewQueue';
import { DEFAULT_METRO } from '../config/metros';
import {
  blockedPeople,
  crowdRangeLabel,
  crowdRangeOf,
  favoritesOf,
  followRequests,
  getAccount,
  getMyProfile,
  isReviewAdmin,
  reviewQueue,
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

/** The page's sections, each an anchor (`#people`): the old panel's dropdowns, regrouped (build 7, §3.10). */
export type SettingsSectionId = 'profile' | 'account' | 'cities' | 'crowd' | 'privacy' | 'blocked' | 'faves' | 'people' | 'events' | 'review' | 'app';

/**
 * Profile & Settings (build 7, §3.10; Kylie, Oct 21, 2026: "profile and settings are frequently near each other"; mock 55):
 * one scrolling page, opened from the avatar on You, no gear anywhere. The profile card on top, then People, Favorite
 * cities, Favorite teams & artists, and the sections Settings already had (profile, account, crowd size, privacy,
 * blocked, your events, the review queue, app). Each section is an anchor, so the old `?panel=x` and sub-page
 * addresses land on it. Signed out, only what a signed-out person can use shows, with the sign-in card on top. No
 * Notifications section (Locked). It was a side panel of dropdowns from build 6 until build 7.
 */
export function ProfileSettingsScreen({ editFaves = false }: { editFaves?: boolean } = {}) {
  const { hash } = useLocation();
  const [params] = useSearchParams();
  const section = (hash ? hash.slice(1) : params.get('panel')) || null;
  const [editing, setEditing] = useState(editFaves);
  useEffect(() => {
    setEditing(editFaves);
  }, [editFaves]);
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
  const [admin, setAdmin] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const wanted = isSection(section) ? section : null;
  const panel = useRef<HTMLDivElement>(null);

  // A deep link (`#privacy`, the old `?panel=` and sub-page addresses) brings that section into view.
  useEffect(() => {
    if (!wanted) return;
    const id = window.setTimeout(() => panel.current?.querySelector(`[data-section="${wanted}"]`)?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 80);
    return () => window.clearTimeout(id);
    // A section that only shows signed in (Profile, People) is scrolled to again once the account is in (Codex, stage 4).
  }, [wanted, account?.id]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setPeopleCount(null);
      setRequestCount(0);
      setBlocked([]);
      setAdmin(false);
      setPendingCount(0);
      setLinkOff(undefined);
      setVisibility(null);
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
    isReviewAdmin().then((yes) => {
      if (!current) return;
      setAdmin(yes);
      if (yes) reviewQueue().then((rows) => current && setPendingCount(rows.filter((r) => r.status === 'pending').length));
    });
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

  const favorites = useMemo(() => favoritesOf(log), [log]);

  // One section of the page: a heading with its one-line value, the body always open, an anchor for deep links.
  const dropdown = (id: SettingsSectionId, title: string, value: ReactNode, body: ReactNode) => (
    <section key={id} id={id} className="settings-section open settings-block" data-section={id} aria-labelledby={`settings-${id}-title`}>
      <h2 id={`settings-${id}-title`} className="you-heading settings-block-title">
        <span>{title}</span>
        {value && <span className="settings-value">{value}</span>}
      </h2>
      <div className="settings-section-body">{body}</div>
    </section>
  );

  return (
    <div ref={panel} className="screen page settings-page">
      <div className="settings-page-head">
        <BackLink to="/you" label="You" />
        <h1 className="page-title">Profile &amp; Settings</h1>
      </div>
      {editing && <EditFavoritesSheet onClose={() => setEditing(false)} />}
      <>

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
                onClick={() => panel.current?.querySelector('[data-section="profile"]')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}
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

        {account &&
          dropdown(
            'people',
            'People',
            peopleCount !== null ? `${peopleCount}${requestCount > 0 ? ` · ${requestCount} ${requestCount === 1 ? 'request' : 'requests'}` : ''}` : null,
            <PeoplePanel />,
          )}
        {/* Favorite cities (mock 60): a restyle of the old Home & cities list (home with Change, a minus per city, + Add city). */}
        {dropdown('cities', 'Favorite Cities', null, <FavoriteCitiesSection />)}
        {/* Favorite teams & artists (mocks 61–66): collapsed groups, read-only rows, one small Edit to the one editor. */}
        {dropdown('faves', 'Favorite Teams & Artists', favorites.length > 0 ? `${favorites.length}` : null, <FavoritesSection favorites={favorites} onEdit={() => setEditing(true)} />)}
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
          'crowd',
          'Crowd Size',
          crowdRangeLabel(crowdRangeOf(log)),
          // Where it applies is the panel's own two switches now (Kylie, Oct 19, 2026).
          <CrowdSizeSettings />,
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
        {dropdown(
          'events',
          'Your Events',
          null,
          <div className="settings">
            <button type="button" className="settings-row settings-link" onClick={download}>
              <span>Export my events</span>
              {exportNote && <span className="settings-value">{exportNote}</span>}
            </button>
            <p className="you-fine">A JSON file of every event and plan.</p>
          </div>,
        )}
        {/* The review queue (Kylie, Oct 21, 2026): an admin account only (migration 0032); hidden for everyone else. */}
        {admin && dropdown('review', 'Review Queue', pendingCount > 0 ? `${pendingCount}` : null, <ReviewQueue />)}
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
      </>
    </div>
  );
}

const SECTIONS: readonly SettingsSectionId[] = ['profile', 'account', 'cities', 'crowd', 'privacy', 'blocked', 'faves', 'people', 'events', 'review', 'app'];

export function isSection(value: string | null): value is SettingsSectionId {
  return value !== null && (SECTIONS as readonly string[]).includes(value);
}
