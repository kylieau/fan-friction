import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { formatScore, scoreLabel } from '../config/scoreLabels';
import { ReadTile } from '../components/ReadTile';
import {
  approveFollow,
  canSignIn,
  declineFollow,
  entryFacts,
  EXAMPLE_FEED,
  filterChoices,
  followRequests,
  followingFeed,
  getAccount,
  getMyProfile,
  getPersonalLog,
  getSaveWarning,
  hoursAtGames,
  logStats,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  type Entry,
  type FeedItem,
  type FollowRequest,
  todayIn,
  upcomingPlans,
  yourEntries,
} from '../data';
import { AccountBlock } from '../components/AccountBlock';
import { FactList } from '../components/FactList';
import { YourYear } from '../components/YourYear';
import { GearIcon, PlusIcon } from '../components/Icons';
import { loggedDateLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { datePath, entryPath, eventPath } from '../lib/view';

const TOP = 8;

export function YouScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [params] = useSearchParams();
  const [tab, setTab] = useState<'events' | 'stats' | 'friends'>(() => (params.get('tab') === 'following' ? 'friends' : params.get('tab') === 'stats' ? 'stats' : 'events'));
  const [handle, setHandle] = useState<string | null>(null);
  const [requests, setRequests] = useState<FollowRequest[]>([]);
  const [feed, setFeed] = useState<FeedItem[] | null>(null);
  const plansAhead = useMemo(() => upcomingPlans(todayIn(DEFAULT_METRO), log), [log]);

  const decide = async (followerId: string, yes: boolean) => {
    if (yes) await approveFollow(followerId);
    else await declineFollow(followerId);
    setRequests((list) => list.filter((r) => r.followerId !== followerId));
  };

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setFeed(null);
      return;
    }
    getMyProfile().then((profile) => current && setHandle(profile?.handle ?? null));
    followRequests().then((list) => current && setRequests(list));
    followingFeed().then((list) => current && setFeed(list));
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
  const shown = filter === 'All' ? entries : entries.filter((entry) => entry.tags.includes(filter));
  const stats = useMemo(() => logStats(shown), [shown]);

  const filters = (
    <div className="filter-row" role="group" aria-label="Filter your events">
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

  const eventsBlock = (
    <section className="you-block" aria-label="Your events">
      {/* A small Coming up strip above the log (3.11): plans still ahead, soonest first. */}
      {plansAhead.length > 0 && (
        <div className="coming-strip" aria-label="Coming up">
          <span className="coming-strip-label">Coming up</span>
          <ul className="coming-strip-list">
            {plansAhead.slice(0, 6).map((plan) => (
              <li key={plan.id}>
                <Link to={datePath(plan.date, plan.metroId, plan.eventId)} className="coming-chip">
                  <span className="coming-chip-date">{shortLocalDate(plan.date)}</span>
                  <span className="coming-chip-title">{plan.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {entries.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">{canSignIn() && !account ? 'No events on this phone.' : 'No events yet.'}</div>
          <div className="empty-actions">
            <Link to="/you/add" className="gold-button small">
              Log an event
            </Link>
            <Link to="/explore" className="link-button">
              Find one on the map
            </Link>
          </div>
        </div>
      ) : (
        <div className="timeline">
          {groupByTime(entries).map(([group, list]) => (
            <section key={group} className="timeline-group" aria-label={group}>
              <h3 className="timeline-heading">{group}</h3>
              <ul className="log-list">
                {list.map((entry) => (
                  <li key={entry.id}>
                    <EntryRow entry={entry} rating={ratingForEntry(entry, ratings)} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </section>
  );

  return (
    <div className="screen page">
      <div className="you-header">
        <span className="avatar" aria-hidden>
          {(account?.displayName ?? account?.email ?? 'Y').slice(0, 1).toUpperCase()}
        </span>
        <div className="you-who">
          <h1 className="page-title">{account?.displayName ?? 'You'}</h1>
          {account && handle && <span className="you-handle">@{handle}</span>}
        </div>
        <Link to="/you/add" className="round-button you-add" aria-label="Log an event">
          <PlusIcon />
        </Link>
        <Link
          to="/you/settings"
          className="round-button you-gear"
          aria-label={requests.length > 0 ? `Settings, ${requests.length} follow requests` : 'Settings'}
        >
          <GearIcon />
          {requests.length > 0 && <span className="you-badge">{requests.length}</span>}
        </Link>
      </div>

      <AccountBlock />

      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}

      {requests.length > 0 && (
        <section className="you-block" aria-labelledby="requests-heading">
          <h2 id="requests-heading" className="you-heading">
            Wants to follow you
          </h2>
          <ul className="log-list">
            {requests.map((r) => (
              <li key={r.followerId} className="request-row">
                <span className="log-title">{r.displayName ?? r.handle ?? 'Someone'}</span>
                <span className="request-actions">
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, true)}>
                    Approve
                  </button>
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, false)}>
                    Decline
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="segmented" role="tablist" aria-label="You">
        {/* "My Stubs" for your events; "Following" for who you see (Kylie, Oct 9). */}
        <button type="button" role="tab" aria-selected={tab === 'events'} onClick={() => setTab('events')}>
          My Stubs
        </button>
        <button type="button" role="tab" aria-selected={tab === 'friends'} onClick={() => setTab('friends')}>
          Following
        </button>
        <button type="button" role="tab" aria-selected={tab === 'stats'} onClick={() => setTab('stats')}>
          Stats
        </button>
      </div>

      {tab === 'events' && eventsBlock}
      {tab === 'stats' && (
        <>
          {filters}
          <YourYear entries={shown} ratings={ratings} />
          <Stats stats={stats} hours={hoursAtGames(shown)} />
        </>
      )}
      {tab === 'friends' && <FollowingTab items={feed} ratings={ratings} signedIn={Boolean(account)} />}
    </div>
  );
}

/** Nights in the order given, split into month (or year) groups for the timeline. */
function groupByTime(entries: Entry[]): [string, Entry[]][] {
  const groups: [string, Entry[]][] = [];
  for (const entry of entries) {
    const label = timelineGroup(entry.when);
    const last = groups[groups.length - 1];
    if (last && last[0] === label) last[1].push(entry);
    else groups.push([label, [entry]]);
  }
  return groups;
}

/**
 * The Following feed (Kylie, Oct 9, 3.24): what the people you follow are planning
 * to attend, and what they attended. Each line is dated by the event. No post times,
 * no "is at", and an attended line only once the date has passed.
 */
function FollowingTab({ items, ratings, signedIn }: { items: FeedItem[] | null; ratings: ReadonlyMap<string, number>; signedIn: boolean }) {
  if (!signedIn) {
    return (
      <div className="card empty-card">
        <div className="card-title">Sign in to follow people.</div>
      </div>
    );
  }
  if (items === null) return null;
  const list = items.length > 0 ? items : EXAMPLE_FEED;
  return (
    <section className="you-block" aria-label="Following">
      <ul className="log-list">
        {list.map((item) => (
          <FeedRow key={`${item.friend.id}-${item.kind}-${item.date}-${item.title}`} item={item} ratings={ratings} />
        ))}
      </ul>
    </section>
  );
}

export function feedLine(item: FeedItem): string {
  const name = item.friend.displayName ?? item.friend.handle ?? 'Someone';
  return item.kind === 'planning' ? `${name} is planning to attend` : `${name} attended`;
}

export function FeedRow({ item, ratings }: { item: FeedItem; ratings: ReadonlyMap<string, number> }) {
  const rating = item.entry && !item.example ? ratingForEntry(item.entry, ratings) : null;
  const facts = [shortLocalDate(item.date), item.venue].filter(Boolean).join(' · ');
  const body = (
    <>
      {rating !== null && <ReadTile rating={rating} />}
      <span className="log-main">
        <span className="log-friend">
          {feedLine(item)}
          {item.example && <span className="example-chip">Example</span>}
        </span>
        <span className="log-title">{item.title}</span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (item.example) return <li className="log-row">{body}</li>;
  return (
    <li>
      <Link to={item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId ?? DEFAULT_METRO.id)} className="log-row">
        {body}
      </Link>
    </li>
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
        <Stat n={stats.events} label="Events" />
        <Stat n={stats.venues} label="Venues" />
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

function EntryRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const facts = [loggedDateLabel(entry.when), entry.venue, entry.neutralSite ? 'Neutral site' : entry.away ? 'Away' : '']
    .filter(Boolean)
    .join(' · ');
  const extraTags = entry.tags.filter((tag) => !entry.title.includes(tag));
  const body = (
    <>
      {rating !== null && <ReadTile rating={rating} />}
      <span className="log-main">
        <span className="log-title">{entry.title}</span>
        <span className="log-facts">{facts}</span>
        {extraTags.length > 0 && <span className="log-facts">{extraTags.join(' · ')}</span>}
        <FactList facts={entryFacts(entry)} />
      </span>
    </>
  );
  if (entry.eventId) {
    return (
      <Link
        to={eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id)}
        className="log-row"
        onClick={() => clearOpenedFromMap()}
      >
        {body}
      </Link>
    );
  }
  return (
    <Link to={entryPath(entry.id)} className="log-row" onClick={() => clearOpenedFromMap()}>
      {body}
    </Link>
  );
}
