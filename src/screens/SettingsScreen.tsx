import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { PinnedHead } from '../components/PinnedHead';
import { EditFavoritesSheet, FavoritesSection } from '../components/EditFavoritesSheet';
import { FavoriteCitiesSection } from '../components/FavoriteCities';
import { AccountBlock, AccountRow } from '../components/AccountBlock';
import { ChevronDown, HomeIcon } from '../components/Icons';
import { ProfileForm } from './ProfileEditScreen';
import { PrivacySettings, VISIBILITY_WORDS } from './SettingsPrivacyScreen';
import { CrowdSizeSettings } from './SettingsCrowdScreen';
import { PeoplePanel } from './PeopleScreen';
import { ReviewQueue } from '../components/ReviewQueue';
import { DEFAULT_METRO, METROS, usesCelsius } from '../config/metros';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import {
  blockedPeople,
  crowdRangeLabel,
  crowdRangeOf,
  entryMatches,
  favoriteCitiesOf,
  favoriteDisplayName,
  favoriteKey,
  favoritesOf,
  followRequests,
  getAccount,
  getMyProfile,
  isReviewAdmin,
  reviewQueue,
  getPersonalLog,
  logBackup,
  peopleList,
  setTemperatureUnit,
  subscribeAccount,
  subscribePersonalLog,
  temperatureUnitOf,
  todayIn,
  unblockUser,
  updateMyProfile,
  yourEntries,
  type PersonRow,
  type Profile,
  type Visibility,
} from '../data';

/** The page's sections. Short ones open in place (⌄); long ones are pages of their own (›), reached by `?page=`. */
export type SettingsSectionId = 'profile' | 'account' | 'cities' | 'crowd' | 'privacy' | 'blocked' | 'faves' | 'people' | 'events' | 'review' | 'app';
type SubPage = 'people' | 'faves' | 'cities' | 'profile' | 'privacy' | 'crowd' | 'review';
const SUB_PAGES: readonly SubPage[] = ['people', 'faves', 'cities', 'profile', 'privacy', 'crowd', 'review'];
const SECTIONS: readonly SettingsSectionId[] = ['profile', 'account', 'cities', 'crowd', 'privacy', 'blocked', 'faves', 'people', 'events', 'review', 'app'];

export function isSection(value: string | null): value is SettingsSectionId {
  return value !== null && (SECTIONS as readonly string[]).includes(value);
}

const SUB_TITLES: Record<SubPage, string> = {
  people: 'People',
  faves: 'Teams & Artists',
  cities: 'Favorite Cities',
  profile: 'Edit Profile',
  privacy: 'Privacy',
  crowd: 'Crowd Size',
  review: 'Review Queue',
};

/**
 * Profile & Settings (build 7.1, M19, direction D "hybrid with previews"; Kylie, Oct 23, 2026; mocks 05, 18, 2-c):
 * the pinned "‹ You · Profile & Settings" head, the profile card (avatar, name, "@handle · N people", Edit, Share,
 * Home City + Change, Privacy ›), the People & Faves group with a preview on each row (Followers, Teams & Artists,
 * Favorite Cities, each › to its own page), and the "App & Account" group: Account ⌄, Temperature Units (M40, the
 * °F | °C control), Crowd Size ›, Blocked ⌄, Your Events ⌄, Review Queue › (admin), App ⌄. Sub-pages ride on
 * `?page=`; the old `#section` and `?panel=` addresses are folded into it, so every old link still lands. Signed
 * out: the sign-in card on top, then what a signed-out person can use. It replaces build 7's one page of open
 * sections (which panned sideways, M18).
 */
export function ProfileSettingsScreen({ editFaves = false }: { editFaves?: boolean } = {}) {
  const { hash } = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(editFaves);
  useEffect(() => {
    setEditing(editFaves);
  }, [editFaves]);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const [handle, setHandle] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<Visibility | null>(null);
  // undefined until the project has the column (migration 0017); the row then shows.
  const [linkOff, setLinkOff] = useState<boolean | undefined>(undefined);
  const [copyNote, setCopyNote] = useState('');
  const [blocked, setBlocked] = useState<Profile[]>([]);
  const [exportNote, setExportNote] = useState('');
  const [shareNote, setShareNote] = useState('');
  const [people, setPeople] = useState<PersonRow[] | null>(null);
  const [requestCount, setRequestCount] = useState(0);
  const [admin, setAdmin] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [open, setOpen] = useState<Set<SettingsSectionId>>(new Set());
  const panel = useRef<HTMLDivElement>(null);

  // The old addresses (`#privacy`, `?panel=people`, `/you/settings/cities`) become `?page=`, or open a short section in place.
  const wanted = (hash ? hash.slice(1) : params.get('panel')) || null;
  useEffect(() => {
    if (!wanted) return;
    const next = new URLSearchParams(params);
    next.delete('panel');
    if ((SUB_PAGES as readonly string[]).includes(wanted)) {
      next.set('page', wanted);
      navigate({ search: `?${next.toString()}`, hash: '' }, { replace: true });
      return;
    }
    if (isSection(wanted)) {
      setOpen((set) => new Set([...set, wanted]));
      navigate({ search: next.toString() ? `?${next.toString()}` : '', hash: '' }, { replace: true });
      window.setTimeout(() => panel.current?.querySelector(`[data-section="${wanted}"]`)?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 80);
    }
  }, [wanted]);
  const pageParam = params.get('page');
  const page: SubPage | null = (SUB_PAGES as readonly string[]).includes(pageParam ?? '') ? (pageParam as SubPage) : null;

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setPeople(null);
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
    peopleList().then((list) => current && setPeople(list));
    followRequests().then((list) => current && setRequestCount(list.length));
    isReviewAdmin().then((yes) => {
      if (!current) return;
      setAdmin(yes);
      if (yes) reviewQueue().then((rows) => current && setPendingCount(rows.filter((r) => r.status === 'pending').length));
    });
    return () => {
      current = false;
    };
  }, [account?.id, page]);

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
  const entries = useMemo(() => yourEntries(log), [log]);
  // The preview's two names: the most seen first, the order the Teams & Artists page uses.
  const favesBySeen = useMemo(() => {
    const seen = new Map(favorites.map((fav) => [favoriteKey(fav), entries.filter((entry) => entryMatches(entry, fav)).length]));
    return [...favorites].sort((a, b) => (seen.get(favoriteKey(b)) ?? 0) - (seen.get(favoriteKey(a)) ?? 0) || favoriteDisplayName(a).localeCompare(favoriteDisplayName(b)));
  }, [favorites, entries]);
  const cities = favoriteCitiesOf(log).filter((id) => id !== homeId && METROS[id]);
  const home = homeId ? METROS[homeId] : undefined;
  const followers = (people ?? []).filter((p) => p.followsYou);
  const unit = temperatureUnitOf(log);
  const celsius = usesCelsius(homeId ?? DEFAULT_METRO.id);

  const goPage = (next: SubPage, extra: Record<string, string> = {}) => {
    const p = new URLSearchParams();
    p.set('page', next);
    for (const [k, v] of Object.entries(extra)) p.set(k, v);
    navigate(`/you/settings?${p.toString()}`);
  };

  if (page) {
    const body: Record<SubPage, ReactNode> = {
      people: <PeoplePanel />,
      faves: <FavoritesSection favorites={favorites} onEdit={() => setEditing(true)} />,
      cities: <FavoriteCitiesSection openHome={params.get('home') === '1'} />,
      profile: <ProfileForm onSaved={() => navigate(-1)} />,
      privacy: <PrivacySettings />,
      crowd: <CrowdSizeSettings />,
      review: <ReviewQueue />,
    };
    return (
      <div className="screen page settings-page settings-sub-page">
        <PinnedHead back={{ to: '/you/settings', label: 'Profile & Settings' }} title={SUB_TITLES[page]} />
        {editing && <EditFavoritesSheet onClose={() => setEditing(false)} />}
        {body[page]}
      </div>
    );
  }

  const toggle = (id: SettingsSectionId) =>
    setOpen((set) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // A short section that opens in place: the row with its one-line value and ⌄; the body under it while open.
  const disclosure = (id: SettingsSectionId, title: string, value: ReactNode, body: ReactNode) => (
    <div key={id} className="settings-disclosure" data-section={id}>
      <button type="button" className="settings-row settings-link settings-group-row" aria-expanded={open.has(id)} onClick={() => toggle(id)}>
        <span className="settings-row-title">{title}</span>
        <span className="settings-row-side">
          {value && <span className="settings-value">{value}</span>}
          <span className={`settings-section-chevron${open.has(id) ? ' open' : ''}`} aria-hidden>
            <ChevronDown />
          </span>
        </span>
      </button>
      {open.has(id) && <div className="settings-disclosure-body">{body}</div>}
    </div>
  );
  // A long section on its own page: the row with its value and ›.
  const pageRow = (id: SubPage, title: string, value: ReactNode, preview?: ReactNode) => (
    <button key={id} type="button" className="settings-row settings-link settings-group-row" data-section={id} onClick={() => goPage(id)}>
      <span className="settings-row-words">
        <span className="settings-row-title">{title}</span>
        {preview}
      </span>
      <span className="settings-row-side">
        {value}
        <span className="settings-chevron" aria-hidden>
          ›
        </span>
      </span>
    </button>
  );

  return (
    <div ref={panel} className="screen page settings-page">
      <PinnedHead back={{ to: '/you', label: 'You' }} title="Profile & Settings" />
      {editing && <EditFavoritesSheet onClose={() => setEditing(false)} />}

      {account ? (
        <div className="card profile-card-d">
          <div className="profile-card-top">
            <span className="avatar profile-avatar" aria-hidden>
              {(account.displayName ?? account.email ?? 'Y').slice(0, 1).toUpperCase()}
            </span>
            <span className="profile-card-who">
              <span className="profile-card-name">{account.displayName ?? 'You'}</span>
              <span className="you-handle">{[handle ? `@${handle}` : null, people !== null ? `${people.length} ${people.length === 1 ? 'person' : 'people'}` : null].filter(Boolean).join(' · ')}</span>
            </span>
            <span className="profile-card-buttons">
              <button type="button" className="profile-pill" onClick={() => goPage('profile')}>
                Edit
              </button>
              {handle && linkOff !== true && (
                <button type="button" className="profile-pill" onClick={shareProfile}>
                  Share
                </button>
              )}
            </span>
          </div>
          {shareNote && <span className="you-fine profile-card-note">{shareNote}</span>}
          <div className="settings-row settings-static settings-group-row profile-home-row">
            <span className="settings-row-title">
              <HomeIcon /> Home City
            </span>
            <span className="settings-row-side">
              <span className="settings-value profile-home-value">{home?.name ?? 'Choose home'}</span>
              <button type="button" className="link-button profile-change" onClick={() => goPage('cities', { home: '1' })}>
                Change
              </button>
            </span>
          </div>
          <button type="button" className="settings-row settings-link settings-group-row" onClick={() => goPage('privacy')}>
            <span className="settings-row-title">Privacy</span>
            <span className="settings-row-side">
              <span className="settings-value">{visibility ? `New stubs: ${VISIBILITY_WORDS[visibility]}` : ''}</span>
              <span className="settings-chevron" aria-hidden>
                ›
              </span>
            </span>
          </button>
        </div>
      ) : (
        <>
          <AccountBlock />
          <div className="card settings-group">
            <div className="settings-row settings-static settings-group-row profile-home-row">
              <span className="settings-row-title">
                <HomeIcon /> Home City
              </span>
              <span className="settings-row-side">
                <span className="settings-value profile-home-value">{home?.name ?? 'Choose home'}</span>
                <button type="button" className="link-button profile-change" onClick={() => goPage('cities', { home: '1' })}>
                  Change
                </button>
              </span>
            </div>
          </div>
        </>
      )}

      <section className="settings-block-d" aria-labelledby="settings-people-faves">
        <h2 id="settings-people-faves" className="settings-heading settings-group-label">
          People & Faves
        </h2>
        <div className="card settings-group">
          {account &&
            pageRow(
              'people',
              'Followers',
              requestCount > 0 ? <span className="settings-badge on">{requestCount} {requestCount === 1 ? 'request' : 'requests'}</span> : null,
              <span className="summary-row">
                {followers.length === 0 ? (
                  <span className="summary-empty">
                    {people === null ? '' : 'No one yet · '}
                    {people !== null && <span className="summary-link">Find people</span>}
                  </span>
                ) : (
                  <>
                    <span className="summary-avatars">
                      {followers.slice(0, 4).map((p) => (
                        <span key={p.profile.id} className="avatar summary-avatar" aria-hidden>
                          {(p.profile.displayName ?? p.profile.handle ?? '?').slice(0, 1).toUpperCase()}
                        </span>
                      ))}
                    </span>
                    {followers.length > 4 && <span className="summary-more">+{followers.length - 4}</span>}
                  </>
                )}
              </span>,
            )}
          {pageRow(
            'faves',
            'Teams & Artists',
            favorites.length > 0 ? <span className="settings-badge">{favorites.length}</span> : null,
            <span className="summary-row">
              {favorites.length === 0 ? (
                <span className="summary-empty">
                  None yet · <span className="summary-link">Add teams & artists</span>
                </span>
              ) : (
                <>
                  <span className="summary-pills">
                    {favesBySeen.slice(0, 2).map((fav) => (
                      <span key={favoriteKey(fav)} className="summary-pill">
                        {favoriteDisplayName(fav)}
                      </span>
                    ))}
                  </span>
                  {favorites.length > 2 && <span className="summary-more">+{favorites.length - 2} more</span>}
                </>
              )}
            </span>,
          )}
          {pageRow(
            'cities',
            'Favorite Cities',
            <span className="settings-badge">{cities.length + (home ? 1 : 0)}</span>,
            <span className="summary-row">
              {!home && cities.length === 0 ? (
                <span className="summary-empty">
                  Home only · <span className="summary-link">Add a city</span>
                </span>
              ) : (
                <>
                  <span className="summary-pills">
                    {home && (
                      <span className="summary-pill">
                        <HomeIcon /> {home.code}
                      </span>
                    )}
                    {cities.slice(0, home ? 1 : 2).map((id) => (
                      <span key={id} className="summary-pill">
                        {METROS[id].name}
                      </span>
                    ))}
                  </span>
                  {cities.length > (home ? 1 : 2) && <span className="summary-more">+{cities.length - (home ? 1 : 2)} more</span>}
                </>
              )}
            </span>,
          )}
        </div>
      </section>

      <section className="settings-block-d" aria-labelledby="settings-app-account">
        <h2 id="settings-app-account" className="settings-heading settings-group-label">
          App & Account
        </h2>
        <div className="card settings-group">
          {account &&
            disclosure(
              'account',
              'Account',
              account.email ?? null,
              <>
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
              </>,
            )}
          {/* Temperature Units (M40, Locked placement): the second row, below Account and above Crowd Size. */}
          <div className="settings-row settings-static settings-group-row unit-row" data-section="units">
            <span className="settings-row-words">
              <span className="settings-row-title">Temperature Units</span>
              <span className="settings-row-sub">
                Example: Rose Bowl <strong>{celsius ? '33°C' : '92°F'}</strong>
              </span>
            </span>
            <span className="unit-control" role="radiogroup" aria-label="Temperature units">
              <button type="button" role="radio" aria-checked={!celsius} className={!celsius ? 'on' : ''} onClick={() => setTemperatureUnit('F')}>
                °F
              </button>
              <button type="button" role="radio" aria-checked={celsius} className={celsius ? 'on' : ''} onClick={() => setTemperatureUnit('C')}>
                °C
              </button>
            </span>
          </div>
          {pageRow('crowd', 'Crowd Size', <span className="settings-value">{crowdRangeLabel(crowdRangeOf(log))}</span>)}
          {account &&
            blocked.length > 0 &&
            disclosure(
              'blocked',
              'Blocked',
              <>
                {blocked[0].displayName ?? (blocked[0].handle ? `@${blocked[0].handle}` : 'Someone')} <span className="settings-badge">{blocked.length}</span>
              </>,
              <>
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
              </>,
            )}
          {disclosure(
            'events',
            'Your Events',
            'Export',
            <>
              <button type="button" className="settings-row settings-link" onClick={download}>
                <span>Export my events</span>
                {exportNote && <span className="settings-value">{exportNote}</span>}
              </button>
              <p className="you-fine">A JSON file of every event and plan.</p>
            </>,
          )}
          {/* The review queue (Kylie, Oct 21, 2026): an admin account only (migration 0032); hidden for everyone else. */}
          {admin &&
            pageRow(
              'review',
              'Review Queue',
              <>
                <span className="settings-value">Admin only</span>
                {pendingCount > 0 && <span className="settings-badge">{pendingCount}</span>}
              </>,
            )}
          {disclosure(
            'app',
            'App',
            'Sources, data',
            <>
              <p className="you-fine">
                Weather data by{' '}
                <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
                  Open-Meteo.com
                </a>
                . Maps by OpenFreeMap and OpenStreetMap. Listings from the leagues and Ticketmaster.
              </p>
              <p className="you-fine">Your events are saved on this phone, and in your account if you sign in. No location, no tracking, nothing sold.</p>
            </>,
          )}
        </div>
      </section>
      <span className="sr-only">{unit ? `Temperatures in °${unit}` : ''}</span>
    </div>
  );
}
