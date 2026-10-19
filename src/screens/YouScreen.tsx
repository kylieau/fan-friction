import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatScore, scoreLabel } from '../config/scoreLabels';
import { SearchButton } from '../components/SearchButton';
import {
  filterChoices,
  entryTags,
  followRequests,
  getAccount,
  getMyProfile,
  getPersonalLog,
  getSaveWarning,
  hoursAtGames,
  peopleList,
  logStats,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  type Entry,
  yourEntries,
} from '../data';
import { AccountBlock } from '../components/AccountBlock';
import { YourYear } from '../components/YourYear';
import { ChevronDown } from '../components/Icons';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { useEdgeFade } from '../lib/useEdgeFade';
import { SettingsPanel } from './SettingsScreen';

const TOP = 8;

export function YouScreen() {
  const filterRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [params, setParams] = useSearchParams();
  // "You at games" on a favorite's card opens the log filtered to it (build notes 2, section 2).
  const wanted = params.get('filter');
  useEffect(() => {
    if (wanted) setFilter(wanted);
  }, [wanted]);
  const [handle, setHandle] = useState<string | null>(null);
  const [requestCount, setRequestCount] = useState(0);
  // The Settings panel (build 6, item 8): `?panel=<section>` in the address, so a link or bookmark can open it on one
  // dropdown ("1" opens it on none); Back closes it.
  const panel = params.get('panel');
  const openPanel = (section?: string) =>
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('panel', section ?? '1');
      return next;
    });
  const closePanel = useCallback(
    () =>
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          for (const key of ['panel', 'find', 'chip']) next.delete(key);
          return next;
        },
        { replace: true },
      ),
    [setParams],
  );
  const [peopleCount, setPeopleCount] = useState<number | null>(null);

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setPeopleCount(null);
      return;
    }
    getMyProfile().then((profile) => current && setHandle(profile?.handle ?? null));
    followRequests().then((list) => current && setRequestCount(list.length));
    peopleList().then((list) => current && setPeopleCount(list.length));
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

  const choices = useMemo(() => filterChoices(entries), [entries]);
  const shown = filter === 'All' ? entries : entries.filter((entry) => entryTags(entry).includes(filter));
  const stats = useMemo(() => logStats(shown), [shown]);

  const filters = (
    <div className="filter-row" role="group" aria-label="Filter your events" ref={filterRow}>
      <FilterChip label="All" pressed={filter === 'All'} onClick={() => setFilter('All')} />
      {choices.map((choice) => (
        <FilterChip
          key={choice.label}
          label={choice.label}
          pressed={filter === choice.label}
          onClick={() => setFilter(choice.label)}
        />
      ))}
    </div>
  );

  return (
    <div className="screen page">
      <div className="you-header">
        {/* The avatar is the only door to Settings (build 6, item 8; Kylie, Oct 16, Q5: on the You tab only); the chevron badge is the cue. */}
        <button type="button" className="you-avatar-btn" aria-label="Profile and settings" aria-haspopup="dialog" aria-expanded={panel !== null} onClick={() => openPanel()}>
          <span className="avatar" aria-hidden>
            {(account?.displayName ?? account?.email ?? 'Y').slice(0, 1).toUpperCase()}
          </span>
          <span className="avatar-chevron" aria-hidden>
            <ChevronDown />
          </span>
        </button>
        <div className="you-who">
          <h1 className="page-title">{account?.displayName ?? 'You'}</h1>
          {account && handle && <span className="you-handle">@{handle}</span>}
          {account && peopleCount !== null && (
            // One count, one tap to everyone (build notes 2, section 3): the People dropdown holds requests too.
            <button type="button" className="you-people link-button" onClick={() => openPanel('people')}>
              {peopleCount} {peopleCount === 1 ? 'person' : 'people'}
              {requestCount > 0 ? ` · ${requestCount} ${requestCount === 1 ? 'request' : 'requests'}` : ''} ›
            </button>
          )}
        </div>
        <SearchButton className="you-search" />
      </div>
      {panel !== null && <SettingsPanel section={panel} onClose={closePanel} />}

      <AccountBlock />

      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}

      {/* Stats is what You keeps (build notes 3, 4.4: Stubs and Following are their own tabs). */}
      {filters}
      <YourYear entries={shown} ratings={ratings} />
      <Stats stats={stats} hours={hoursAtGames(shown.filter((e) => !e.watched))} />
    </div>
  );
}

function FilterChip({ label, pressed, onClick }: { label: string; pressed: boolean; onClick: () => void }) {
  return (
    <button type="button" className="filter-chip" aria-pressed={pressed} onClick={onClick}>
      {label}
    </button>
  );
}

function Stats({ stats, hours }: { stats: ReturnType<typeof logStats>; hours: { hours: number; games: number } }) {
  return (
    <div className="stats-block">
      <div className="stat-grid">
        {/* Attended, never "Events" (Kylie, Oct 11, call 3): watched is its own number below. */}
        <Stat n={stats.attended} label="Attended" />
        <Stat n={stats.venues} label="Venues" />
        {stats.watched > 0 && <Stat n={stats.watched} label="Watched" />}
        {/* The heaviest read sits in Your year above; not repeated here (3.22). */}
        {hours.games > 0 && <Stat n={hours.hours} label={`Hours at ${hours.games === 1 ? '1 game' : `${hours.games} games`}`} />}
      </div>
      <CountList title="By type" rows={stats.byType} />
      <CountList title="By team and sport" rows={stats.byTeamSport} />
      <CountList title="By sport" rows={stats.bySport} />
      <CountList title="By venue" rows={stats.byVenue} />
    </div>
  );
}

/** The night with the highest friction read. Shown on You and on the page others see. */
export function heaviestEntry(entries: Entry[], ratings: ReadonlyMap<string, number>): number | null {
  return entries.reduce<number | null>((best, entry) => {
    const r = ratingForEntry(entry, ratings);
    return r !== null && (best === null || r > best) ? r : best;
  }, null);
}

export function HeaviestStat({ rating }: { rating: number | null }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{rating === null ? '—' : formatScore(rating)}</span>
      <span className="stat-label">{rating === null ? 'Heaviest' : `Heaviest · ${scoreLabel(rating)}`}</span>
    </div>
  );
}

export function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{n}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function CountList({ title, rows }: { title: string; rows: { label: string; count: number }[] }) {
  if (rows.length === 0) return null;
  const shown = rows.slice(0, TOP);
  const rest = rows.length - shown.length;
  return (
    <div className="count-block">
      <h3 className="count-title">{title}</h3>
      <ul className="count-list">
        {shown.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <span className="count-num">{row.count}</span>
          </li>
        ))}
      </ul>
      {rest > 0 && <p className="you-fine">and {rest} more</p>}
    </div>
  );
}
