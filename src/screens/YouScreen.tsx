import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { SearchButton } from '../components/SearchButton';
import { AccountBlock } from '../components/AccountBlock';
import { StubRow } from '../components/StubRows';
import { FavoriteBadge, favoriteName } from '../components/FavoriteBadge';
import { CalendarIcon, ChevronDown, GlobeIcon, HomeIcon, ListIcon, LockMark, PeopleIcon, StarIcon } from '../components/Icons';
import {
  entriesInYear,
  entryMatches,
  favoriteDisplayName,
  favoriteKey,
  favoritesOf,
  getAccount,
  getMyProfile,
  getPersonalLog,
  getSaveWarning,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  yearsOf,
  yearStatPool,
  yourEntries,
  type Favorite,
} from '../data';
import { favPath } from './FavoritesScreen';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { EditFavoritesSheet } from '../components/EditFavoritesSheet';
import { levelFor } from './SettingsPrivacyScreen';

/**
 * You (build 7, §3.6; Kylie, Oct 21–22, 2026; mocks 27–37): your personal record only, seven pieces top to bottom.
 * A compact header (the avatar opens Profile & Settings, the name, home city, who sees your profile); one Upcoming
 * row, the only place plans appear here; the Flighty-style year card (the fixed big number and four auto-picked
 * stats, no money) with Recap › and Ranks › in its footer and Your year › on its head; a four-stub preview with a
 * plain "See all ›"; the Faves row with "Seen N" each. Brand-new: the card at 0 with a nudge to the "+", no preview,
 * the Faves empty state (Locked). Signed out: the sign-in card on top (Locked).
 */
export function YouScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const today = todayIn(home);
  const entries = useMemo(() => yourEntries(log), [log]);
  const favorites = useMemo(() => favoritesOf(log), [log]);
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const navigate = useNavigate();
  const [editingFaves, setEditingFaves] = useState(false);
  const [visibility, setVisibility] = useState<'anyone' | 'friends' | 'private'>('private');
  useEffect(() => {
    let current = true;
    if (!account) {
      setVisibility('private');
      return;
    }
    getMyProfile().then((profile) => current && setVisibility(levelFor(profile?.visibility)));
    return () => {
      current = false;
    };
  }, [account?.id]);

  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(entries)).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries]);

  // The year card's year: this one by default, any year with stubs, or all time.
  const thisYear = today.slice(0, 4);
  const years = useMemo(() => yearsOf(entries, thisYear), [entries, thisYear]);
  const [year, setYear] = useState<string>(thisYear);
  const inYear = useMemo(() => entriesInYear(entries, year === 'All time' ? 'all' : year), [entries, year]);
  const attended = inYear.filter((e) => !e.watched).length;
  const watched = inYear.length - attended;
  const stats = useMemo(() => yearStatPool(inYear, year === 'All time' ? 'all' : year, entries).slice(0, 4), [inYear, year, entries]);

  const plans = useMemo(() => log.plans.filter((plan) => plan.date >= today && !plan.interested).sort((a, b) => a.date.localeCompare(b.date)), [log, today]);
  const newest = useMemo(() => [...entries].sort((a, b) => b.when.sort.localeCompare(a.when.sort)).slice(0, 4), [entries]);
  // Faves by most seen, then name (the same order the favorites section and sheet use).
  const seen = useMemo(() => new Map(favorites.map((fav) => [favoriteKey(fav), entries.filter((entry) => entryMatches(entry, fav)).length])), [favorites, entries]);
  const faves = useMemo(() => [...favorites].sort((a, b) => (seen.get(favoriteKey(b)) ?? 0) - (seen.get(favoriteKey(a)) ?? 0) || favoriteDisplayName(a).localeCompare(favoriteDisplayName(b))), [favorites, seen]);

  const who = visibility === 'anyone' ? 'Public profile' : visibility === 'friends' ? 'Friends only' : 'Private profile';

  return (
    <div className="screen page you-page">
      <div className="you-header">
        {/* The avatar is the only door to Profile & Settings (build 6, item 8; Kylie, Oct 21: "I don't think it's that unusual"). */}
        <button type="button" className="you-avatar-btn" aria-label="Profile & Settings" onClick={() => navigate('/you/settings')}>
          <span className="avatar" aria-hidden>
            {(account?.displayName ?? account?.email ?? 'Y').slice(0, 1).toUpperCase()}
          </span>
          <span className="avatar-chevron" aria-hidden>
            <ChevronDown />
          </span>
        </button>
        <div className="you-who">
          <h1 className="page-title">{account?.displayName ?? 'You'}</h1>
          <span className="you-line">
            <HomeIcon /> {home.name}
          </span>
          <span className="you-line">
            {visibility === 'anyone' ? <GlobeIcon size={14} /> : visibility === 'friends' ? <PeopleIcon size={14} /> : <LockMark size={14} />} {account ? who : 'Not signed in'}
          </span>
        </div>
        <SearchButton className="you-search" />
      </div>
      {editingFaves && <EditFavoritesSheet onClose={() => setEditingFaves(false)} />}

      {/* Signed out: the sign-in card on top (Locked, Kylie, 2026-10-22); the account section is in Profile & Settings too. */}
      {!account && <AccountBlock />}
      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}

      {/* 1. The only place plans appear on You: one row to the Upcoming tab. */}
      {plans.length > 0 && (
        <Link to="/upcoming" className="card you-upcoming-row">
          <CalendarIcon />
          <span className="you-upcoming-words">
            <strong>Upcoming</strong> · {plans.length === 1 ? plans[0].title : `${plans.length} plans`}
            {plans.length === 1 && ` · ${new Date(`${plans[0].date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' })}`}
          </span>
          <span className="add-record-chev" aria-hidden>
            ›
          </span>
        </Link>
      )}

      {/* 3–4. The year card. */}
      <section className="you-block" aria-label="Your Year">
        <div className="you-heading-row year-head">
          <label className="year-pick">
            <select className="year-select" value={year} aria-label="Year" onChange={(ev) => setYear(ev.target.value)}>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
              {entries.length > 0 && <option value="All time">All time</option>}
            </select>
            <span className="you-heading year-word" aria-hidden>
              {year} <ChevronDown />
            </span>
          </label>
          <Link to={`/you/year?year=${encodeURIComponent(year)}`} className="heading-link">
            Your Year ›
          </Link>
        </div>
        <div className="card year-card">
          <div className="year-hero">
            <span className="year-big">{attended}</span>
            <span className="year-hero-words">
              {attended === 1 ? 'event attended' : 'events attended'}
              {watched > 0 && <span className="year-hero-sub"> · {watched} watched</span>}
            </span>
          </div>
          {inYear.length === 0 ? (
            <p className="you-fine year-nudge">{entries.length === 0 ? 'Nothing logged yet. Tap + to log your first event.' : `Nothing logged in ${year} yet. Tap + to log one.`}</p>
          ) : (
            <div className="year-stats">
              {stats.map((stat) => (
                <div key={stat.key} className="year-stat">
                  <span className="year-stat-num">{stat.value}</span>
                  <span className="year-stat-label">{stat.label}</span>
                  {stat.sub && <span className="year-stat-sub">{stat.sub}</span>}
                </div>
              ))}
            </div>
          )}
          <div className="year-foot">
            <Link to={`/you/recap?year=${encodeURIComponent(year)}`} className="year-foot-link">
              <StarIcon /> Recap ›
            </Link>
            <Link to={`/you/ranks?year=${encodeURIComponent(year)}`} className="year-foot-link">
              <ListIcon /> Ranks ›
            </Link>
          </div>
        </div>
      </section>

      {/* 5. The newest four stubs; the page has the rest. Hidden until the first stub (Locked). */}
      {newest.length > 0 && (
        <section className="you-block" aria-labelledby="stubs-heading">
          <h2 id="stubs-heading" className="you-heading heading-link-row">
            Your Stubs
            <Link to="/you/stubs" className="heading-link">
              See all ›
            </Link>
          </h2>
          <ul className="log-list card">
            {newest.map((entry) => (
              <li key={entry.id}>
                <StubRow entry={entry} rating={ratingForEntry(entry, ratings)} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 6. Faves, most seen first, "Seen N" each; Edit › opens the favorites editor. */}
      <section className="you-block" aria-labelledby="faves-heading">
        <h2 id="faves-heading" className="you-heading heading-link-row">
          <span className="you-heading-words">
            <StarIcon /> Faves
          </span>
          {faves.length > 0 && (
            <button type="button" className="heading-link link-button" onClick={() => setEditingFaves(true)}>
              Edit ›
            </button>
          )}
        </h2>
        {faves.length === 0 ? (
          <div className="card faves-empty">
            <p>Follow teams and artists to see them here</p>
            <button type="button" className="heading-link link-button" onClick={() => setEditingFaves(true)}>
              Find faves ›
            </button>
          </div>
        ) : (
          <FavesStrip faves={faves} seen={seen} />
        )}
      </section>
    </div>
  );
}

function FavesStrip({ faves, seen }: { faves: Favorite[]; seen: ReadonlyMap<string, number> }) {
  return (
    <ul className="faves-strip" aria-label="Faves">
      {faves.map((fav) => {
        const n = seen.get(favoriteKey(fav)) ?? 0;
        return (
          <li key={favoriteKey(fav)}>
            <Link to={favPath(fav)} className="faves-strip-item" aria-label={`${favoriteName(fav)}, seen ${n}`}>
              <FavoriteBadge fav={fav} shown={faves} size="big" />
              <span className="faves-strip-name">{favoriteDisplayName(fav)}</span>
              <span className="faves-strip-seen">Seen {n}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

