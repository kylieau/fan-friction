import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  filterChoices,
  getPersonalLog,
  getRatedDates,
  canSignIn,
  getAccount,
  approveFollow,
  declineFollow,
  followRequests,
  friendsEntries,
  EXAMPLE_FRIEND_ENTRIES,
  getMyProfile,
  getSaveWarning,
  subscribeAccount,
  logStats,
  entryFacts,
  ratingForEntry,
  subscribePersonalLog,
  yourEntries,
  type FollowRequest,
  type FriendEntry,
  type Entry,
} from '../data';
import { AccountBlock } from '../components/AccountBlock';
import { FactList } from '../components/FactList';
import { GearIcon } from '../components/Icons';
import { loggedDateLabel, timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { datePath, eventPath } from '../lib/view';

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
  const [tab, setTab] = useState<'events' | 'stats' | 'friends'>('events');
  const [handle, setHandle] = useState<string | null>(null);
  const [requests, setRequests] = useState<FollowRequest[]>([]);
  const [friends, setFriends] = useState<FriendEntry[] | null>(null);

  const decide = async (followerId: string, yes: boolean) => {
    if (yes) await approveFollow(followerId);
    else await declineFollow(followerId);
    setRequests((list) => list.filter((r) => r.followerId !== followerId));
  };

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setFriends(null);
      return;
    }
    getMyProfile().then((profile) => current && setHandle(profile?.handle ?? null));
    followRequests().then((list) => current && setRequests(list));
    friendsEntries().then((list) => current && setFriends(list));
    return () => {
      current = false;
    };
  }, [account?.id]);

  useEffect(() => {
    let current = true;
    getRatedDates(DEFAULT_METRO.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, []);

  const choices = useMemo(() => filterChoices(entries), [entries]);
  const shown = filter === 'All' ? entries : entries.filter((entry) => entry.tags.includes(filter));
  const stats = useMemo(() => logStats(shown), [shown]);
  const heaviest = useMemo(() => heaviestEntry(shown, ratings), [shown, ratings]);

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
      {entries.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">
            {canSignIn() && !account
              ? 'No events on this phone. Sign in to see yours, or find one on the map.'
              : 'No events yet. Find one on the map.'}
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
        {/* "Events", not "Nights": the bottom bar already has a Nights tab (Kylie, Oct 5). */}
        <button type="button" role="tab" aria-selected={tab === 'events'} onClick={() => setTab('events')}>
          Events
        </button>
        <button type="button" role="tab" aria-selected={tab === 'friends'} onClick={() => setTab('friends')}>
          Friends
        </button>
        <button type="button" role="tab" aria-selected={tab === 'stats'} onClick={() => setTab('stats')}>
          Stats
        </button>
      </div>

      {tab === 'events' && eventsBlock}
      {tab === 'stats' && (
        <>
          {filters}
          <Stats stats={stats} heaviest={heaviest} />
        </>
      )}
      {tab === 'friends' && <FriendsTab items={friends} ratings={ratings} signedIn={Boolean(account)} />}
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
 * Recent nights of people you follow, newest first. Not a feed to scroll: a short
 * list, each row a friend's night with its stamp, tapping through to the event.
 * Before anyone is followed, built-in examples show the shape, each marked Example.
 */
function FriendsTab({
  items,
  ratings,
  signedIn,
}: {
  items: FriendEntry[] | null;
  ratings: ReadonlyMap<string, number>;
  signedIn: boolean;
}) {
  if (!signedIn) {
    return (
      <div className="card empty-card">
        <div className="card-title">Sign in to follow friends.</div>
      </div>
    );
  }
  if (items === null) return null;
  const list = items.length > 0 ? items : EXAMPLE_FRIEND_ENTRIES;
  return (
    <section className="you-block" aria-label="Friends">
      <ul className="log-list">
        {list.map(({ entry, friend, example }) => {
          const rating = example ? null : ratingForEntry(entry, ratings);
          const facts = [loggedDateLabel(entry.when), entry.venue].filter(Boolean).join(' · ');
          const body = (
            <>
              {rating !== null && (
                <span className={`log-score ${scoreBand(rating)}`} aria-label={`${scoreLabel(rating)}, ${rating} out of 10`}>
                  <span className="log-score-num">{rating}</span>
                  <span className="log-score-word">{scoreLabel(rating)}</span>
                </span>
              )}
              <span className="log-main">
                <span className="log-friend">
                  {friend.displayName ?? friend.handle ?? 'Someone'}
                  {example && <span className="example-chip">Example</span>}
                </span>
                <span className="log-title">{entry.title}</span>
                <span className="log-facts">{facts}</span>
              </span>
            </>
          );
          const key = `${friend.id}-${entry.id}`;
          if (entry.eventId && !example) {
            return (
              <li key={key}>
                <Link to={datePath(entry.when.sort, entry.metroId ?? DEFAULT_METRO.id, entry.eventId)} className="log-row">
                  {body}
                </Link>
              </li>
            );
          }
          return (
            <li key={key}>
              <div className="log-row">{body}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function FilterChip({ label, pressed, onClick }: { label: string; pressed: boolean; onClick: () => void }) {
  return (
    <button type="button" className="filter-chip" aria-pressed={pressed} onClick={onClick}>
      {label}
    </button>
  );
}

function Stats({
  stats,
  heaviest,
}: {
  stats: ReturnType<typeof logStats>;
  heaviest: number | null;
}) {
  return (
    <div className="stats-block">
      <div className="stat-grid">
        <Stat n={stats.events} label="Events" />
        <Stat n={stats.venues} label="Venues" />
        <HeaviestStat rating={heaviest} />
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
      <span className="stat-num">{rating === null ? '—' : rating}</span>
      <span className="stat-label">{rating === null ? 'Heaviest night' : `Heaviest · ${scoreLabel(rating)}`}</span>
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
      {rating !== null && (
        <span className={`log-score ${scoreBand(rating)}`} aria-label={`${scoreLabel(rating)}, ${rating} out of 10`}>
          <span className="log-score-num">{rating}</span>
          <span className="log-score-word">{scoreLabel(rating)}</span>
        </span>
      )}
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
  return <div className="log-row">{body}</div>;
}
