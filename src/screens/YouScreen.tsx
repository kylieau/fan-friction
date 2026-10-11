import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { formatScore, scoreLabel } from '../config/scoreLabels';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import {
  canSignIn,
  entryFacts,
  EXAMPLE_FEED,
  favoritesOf,
  filterChoices,
  followRequests,
  followingFeed,
  getAccount,
  getMyProfile,
  getPersonalLog,
  getSaveWarning,
  hoursAtGames,
  peopleList,
  logStats,
  nightKey,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  type Entry,
  type Favorite,
  type FeedItem,
  type PersonalLog,
  todayIn,
  upcomingPlans,
  yourEntries,
} from '../data';
import { AccountBlock } from '../components/AccountBlock';
import { FactList } from '../components/FactList';
import { YourYear } from '../components/YourYear';
import { ChevronDown, ChevronRight, TvIcon } from '../components/Icons';
import { loggedDateLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { datePath, entryPath, eventPath, backFrom } from '../lib/view';

const TOP = 8;

export function YouScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [filter, setFilter] = useState('All');
  // My Stubs (Kylie, Oct 11, call 8): Recent · Sports · Concerts · Watched · Attended; Recent is everything, newest event first.
  const [stubs, setStubs] = useState<'recent' | 'sports' | 'concerts' | 'watched' | 'attended'>('recent');
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [params] = useSearchParams();
  // "You at games" on a favorite's card opens the log filtered to it (build notes 2, section 2).
  const wanted = params.get('filter');
  useEffect(() => {
    if (wanted) setFilter(wanted);
  }, [wanted]);
  const [tab, setTab] = useState<'events' | 'stats' | 'friends'>(() => (params.get('tab') === 'following' ? 'friends' : params.get('tab') === 'stats' ? 'stats' : 'events'));
  const [handle, setHandle] = useState<string | null>(null);
  const [requestCount, setRequestCount] = useState(0);
  const [sheet, setSheet] = useState(false);
  const [shareNote, setShareNote] = useState('');
  const navigate = useNavigate();
  // Share my handle: the profile link where it works, the handle itself elsewhere.
  const shareHandle = async () => {
    const url = `${window.location.origin}/p/${handle}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: account?.displayName ?? 'Fan/Friction', url });
        setSheet(false);
        return;
      }
      await navigator.clipboard.writeText(url);
      setShareNote('Link copied.');
    } catch {
      setShareNote(`@${handle}`);
    }
  };
  const [peopleCount, setPeopleCount] = useState<number | null>(null);
  const [feed, setFeed] = useState<FeedItem[] | null>(null);
  const plansAhead = useMemo(() => upcomingPlans(todayIn(DEFAULT_METRO), log), [log]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      setFeed(null);
      setPeopleCount(null);
      return;
    }
    getMyProfile().then((profile) => current && setHandle(profile?.handle ?? null));
    followRequests().then((list) => current && setRequestCount(list.length));
    peopleList().then((list) => current && setPeopleCount(list.length));
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

  const stubList = useMemo(
    () =>
      entries.filter((entry) =>
        stubs === 'recent' ? true : stubs === 'watched' ? Boolean(entry.watched) : stubs === 'attended' ? !entry.watched : stubs === 'sports' ? entry.kind === 'game' : entry.kind === 'show' || entry.kind === 'festival',
      ),
    [entries, stubs],
  );
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
      {/* Log an event lives in My Stubs as one full-width row (build notes 2, global search). */}
      <Link to="/you/add" className="log-add-row">
        + Log an event
      </Link>
      <div className="filter-row" role="group" aria-label="Show">
        {(
          [
            ['recent', 'Recent'],
            ['sports', 'Sports'],
            ['concerts', 'Concerts'],
            ['watched', 'Watched'],
            ['attended', 'Attended'],
          ] as const
        ).map(([id, label]) => (
          <FilterChip key={id} label={label} pressed={stubs === id} onClick={() => setStubs(id)} />
        ))}
      </div>
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
      {stubList.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">{entries.length > 0 ? 'Nothing here.' : canSignIn() && !account ? 'No events on this phone.' : 'No events yet.'}</div>
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
          {groupByTime(stubList).map(([group, list]) => (
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
        {/* The avatar opens profile, Settings and sharing (build notes 2, global search); the chevron badge is the cue. */}
        <button type="button" className="you-avatar-btn" aria-label="Profile and settings" aria-haspopup="dialog" onClick={() => (account ? setSheet(true) : navigate('/you/settings'))}>
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
            // One count, one tap to everyone (build notes 2, section 3): the People list holds requests too.
            <Link to="/you/people" className="you-people">
              {peopleCount} {peopleCount === 1 ? 'person' : 'people'}
              {requestCount > 0 ? ` · ${requestCount} ${requestCount === 1 ? 'request' : 'requests'}` : ''} ›
            </Link>
          )}
        </div>
        <SearchButton className="you-search" />
      </div>
      {sheet && (
        <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Your account" onClick={() => setSheet(false)}>
          <div className="action-sheet" onClick={(event) => event.stopPropagation()}>
            <span className="sheet-handle" aria-hidden />
            <div className="you-header">
              <span className="avatar" aria-hidden>
                {(account?.displayName ?? account?.email ?? 'Y').slice(0, 1).toUpperCase()}
              </span>
              <div className="you-who">
                <span className="log-title">{account?.displayName ?? 'You'}</span>
                {account && handle && <span className="you-handle">@{handle}</span>}
              </div>
            </div>
            <Link to="/profile/edit" className="action-row" onClick={() => setSheet(false)}>
              <span className="action-row-main">Edit profile</span>
              <ChevronRight />
            </Link>
            <Link to="/you/settings" className="action-row" onClick={() => setSheet(false)}>
              <span className="action-row-main">
                Settings
                <span className="action-row-sub">Home city, privacy, notifications</span>
              </span>
              {requestCount > 0 && <span className="you-badge static">{requestCount}</span>}
              <ChevronRight />
            </Link>
            {handle && (
              <button type="button" className="action-row" onClick={shareHandle}>
                <span className="action-row-main">
                  Share my handle
                  {shareNote && <span className="action-row-sub">{shareNote}</span>}
                </span>
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
      )}

      <AccountBlock />

      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
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
          <Stats stats={stats} hours={hoursAtGames(shown.filter((e) => !e.watched))} />
        </>
      )}
      {tab === 'friends' && <FollowingTab items={feed} ratings={ratings} signedIn={Boolean(account)} log={log} />}
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

/** A friend's line belongs on your feed when the event is yours (saved or logged) or one of your favorites' (Kylie, Oct 9). */
function interested(item: FeedItem, log: PersonalLog, favorites: readonly Favorite[]): boolean {
  if (item.eventId && (log.plans.some((p) => p.eventId === item.eventId) || log.added.some((e) => e.eventId === item.eventId))) return true;
  const title = item.title.toLowerCase();
  const venue = (item.venue ?? '').toLowerCase();
  return favorites.some((fav) => {
    const label = fav.label.toLowerCase();
    if (!label) return false;
    if (fav.kind === 'venue') return venue === label;
    if (fav.kind === 'artist') return title === label || title.startsWith(`${label}:`) || title.startsWith(`${label} `);
    const word = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${word}([^a-z0-9]|$)`).test(title);
  });
}

interface FeedGroup {
  key: string;
  title: string;
  date: string;
  venue?: string;
  metroId?: string;
  eventId?: string;
  entry?: Entry;
  items: FeedItem[];
  example: boolean;
}

function groupFeed(items: FeedItem[]): FeedGroup[] {
  const groups = new Map<string, FeedGroup>();
  for (const item of items) {
    const key = item.eventId ?? `${item.metroId ?? ''}|${item.date}|${item.title}`;
    const group = groups.get(key) ?? { key, title: item.title, date: item.date, venue: item.venue, metroId: item.metroId, eventId: item.eventId, entry: item.entry, items: [], example: Boolean(item.example) };
    group.items.push(item);
    if (!group.entry && item.entry) group.entry = item.entry;
    groups.set(key, group);
  }
  return [...groups.values()];
}

/**
 * The Following feed, grouped per event (build notes 2, section 3, F3): the event and its
 * read on top, the people you follow stacked under it. Only events you're interested in:
 * ones you saved or logged, and your favorites'. Plans ahead under Coming up, past
 * nights under Recent. Each line is dated by the event; no post times, no "is at".
 */
function FollowingTab({ items, ratings, signedIn, log }: { items: FeedItem[] | null; ratings: ReadonlyMap<string, number>; signedIn: boolean; log: PersonalLog }) {
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);
  if (!signedIn) {
    return (
      <div className="card empty-card">
        <div className="card-title">Sign in to follow people.</div>
      </div>
    );
  }
  if (items === null) return null;
  const favorites = favoritesOf(log);
  const example = items.length === 0;
  const list = example ? EXAMPLE_FEED : items.filter((item) => interested(item, log, favorites));
  const groups = groupFeed(list);
  const coming = groups.filter((g) => g.items[0].kind === 'planning');
  const recent = groups.filter((g) => g.items[0].kind === 'attended');
  if (groups.length === 0) {
    return (
      <div className="card empty-card">
        <div className="card-title">Nothing from the people you follow at your events or favorites yet.</div>
      </div>
    );
  }
  const section = (heading: string, rows: FeedGroup[]) =>
    rows.length > 0 && (
      <section className="you-block" aria-label={heading}>
        <h2 className="you-heading">{heading}</h2>
        {rows.map((group) => {
          const rating = group.entry && !group.example ? ratingForEntry(group.entry, ratings) : group.metroId ? (ratings.get(nightKey(group.metroId, group.date)) ?? null) : null;
          const facts = [shortLocalDate(group.date), group.venue].filter(Boolean).join(' · ');
          const head = (
            <>
              <ReadTile rating={rating} />
              <span className="log-main">
                <span className="log-title">{group.title}</span>
                <span className="log-facts">{facts}</span>
              </span>
              {group.example && <span className="example-chip">Example</span>}
            </>
          );
          return (
            <article key={group.key} className="card feed-group">
              {group.example ? (
                <div className="feed-group-head">{head}</div>
              ) : (
                <Link to={group.eventId && group.metroId ? eventPath(group.eventId, group.metroId) : datePath(group.date, group.metroId ?? DEFAULT_METRO.id)} className="feed-group-head">
                  {head}
                </Link>
              )}
              <ul className="feed-lines">
                {group.items.map((item) => {
                  const name = item.friend.displayName ?? item.friend.handle ?? 'Someone';
                  // No "· you too" (Kylie, Oct 11): people already know they're going.
                  const text = item.kind === 'planning' ? (item.interested ? 'is interested in' : item.watched ? 'is going to watch' : 'is going to') : item.watched ? 'watched' : 'went to';
                  return (
                    <li key={`${item.friend.id}-${item.kind}`} className="feed-line">
                      <span className="avatar avatar-small" aria-hidden>
                        {name.slice(0, 1).toUpperCase()}
                      </span>
                      {item.example || !item.friend.handle ? (
                        <span className="log-friend">
                          <strong>{name}</strong> {text}
                        </span>
                      ) : (
                        <Link to={`/p/${item.friend.handle}`} state={{ back }} className="log-friend log-friend-link">
                          <strong>{name}</strong> {text}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </section>
    );
  return (
    <>
      {/* The feed (Kylie, Oct 11, call 1): one plain sentence per line, every friend's line, newest ahead first; the event is the link. */}
      {!example && items.some((item) => !item.interested) && (
        <section className="you-block" aria-label="Feed">
          {/* Interested lines stay off the feed (Kylie, Oct 11): they show under Coming up and on the event page. */}
          <h2 className="you-heading">Feed</h2>
          <ul className="log-list card feed-flat">
            {items.filter((item) => !item.interested).map((item) => (
              <li key={`${item.friend.id}-${item.kind}-${item.date}-${item.title}`}>
                <Link to={item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId ?? DEFAULT_METRO.id)} className="feed-flat-row">
                  <span className="avatar avatar-small" aria-hidden>
                    {(item.friend.displayName ?? item.friend.handle ?? '?').slice(0, 1).toUpperCase()}
                  </span>
                  <span className="feed-flat-text">
                    {feedLine(item)} <strong>{item.title}</strong>
                  </span>
                  <span className="feed-flat-date">{shortLocalDate(item.date).replace(/^\w+, /, '')}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {section('Coming up', coming)}
      {section('Recent', recent)}
    </>
  );
}

/** The start of a friend's line (Kylie, Oct 11, call 1): "Sam is going to", "Sam is going to watch", "Sam went to", "Sam watched". The event follows. */
export function feedLine(item: FeedItem): string {
  const name = item.friend.displayName ?? item.friend.handle ?? 'Someone';
  if (item.kind === 'planning') return item.interested ? `${name} is interested in` : item.watched ? `${name} is going to watch` : `${name} is going to`;
  return item.watched ? `${name} watched` : `${name} went to`;
}

export function FeedRow({ item, ratings }: { item: FeedItem; ratings: ReadonlyMap<string, number> }) {
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);
  const rating = item.entry && !item.example ? ratingForEntry(item.entry, ratings) : null;
  const facts = [shortLocalDate(item.date), item.venue].filter(Boolean).join(' · ');
  const body = (
    <>
      {rating !== null && <ReadTile rating={rating} />}
      <span className="log-main">
        <span className="log-friend">
          {item.example || !item.friend.handle ? feedLine(item) : <Link to={`/p/${item.friend.handle}`} state={{ back }} className="log-friend-link">{feedLine(item)}</Link>}
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
      {entry.watched && (
        <span className="status-label watched-label">
          <TvIcon /> Watched
        </span>
      )}
      {entry.private && <span className="status-label">Private</span>}
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
