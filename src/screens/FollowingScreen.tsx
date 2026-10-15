import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import { ActivityLines } from '../components/ActivityLines';
import { FrictionPill } from '../components/EventTags';
import { CardsIcon, ChevronDown, ListIcon, PeopleIcon, StarIcon } from '../components/Icons';
import {
  EXAMPLE_FEED,
  favoritesOf,
  followingFeed,
  getAccount,
  getPersonalLog,
  nightKey,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  yourEntries,
  type Entry,
  type Favorite,
  type FeedItem,
  type PersonalLog,
  isGameEventId,
} from '../data';
import { ACTIVITY_WORDS, activityGroups, activityOrder, feedSentence, type ActivityGroups } from '../lib/activity';
import { shortLocalDate } from '../lib/dates';
import { backFrom, datePath, eventPath } from '../lib/view';
import { FavoritesScreen } from './FavoritesScreen';
import { TitleText } from '../components/TitleText';

type Segment = 'faves' | 'friends';

/**
 * Following: who and what you follow, its own tab since build 3 (Kylie, Oct 11, 2026; mocks
 * docs/design/build3/5-favorites.png and 6-friends.png). Two segments, star "Faves" and person
 * "Friends", an icon and a short word each so the F-words don't stack.
 */
export function FollowingScreen() {
  const [params, setParams] = useSearchParams();
  const segment: Segment = params.get('tab') === 'friends' ? 'friends' : 'faves';
  const pick = (next: Segment) => {
    const nextParams = new URLSearchParams(params);
    if (next === 'faves') nextParams.delete('tab');
    else nextParams.set('tab', next);
    setParams(nextParams, { replace: true });
  };
  return (
    <div className="screen page">
      <div className="you-header">
        <h1 className="page-title">Following</h1>
        <SearchButton className="you-search" />
      </div>
      <div className="segmented following-segments" role="tablist" aria-label="Following">
        <button type="button" role="tab" aria-selected={segment === 'faves'} onClick={() => pick('faves')}>
          <StarIcon /> Faves
        </button>
        <button type="button" role="tab" aria-selected={segment === 'friends'} onClick={() => pick('friends')}>
          <PeopleIcon /> Friends
        </button>
      </div>
      {segment === 'faves' ? <FavoritesScreen embedded /> : <FriendsTab view={params.get('view') === 'feed' ? 'feed' : 'events'} onView={(view) => {
        const nextParams = new URLSearchParams(params);
        if (view === 'events') nextParams.delete('view');
        else nextParams.set('view', view);
        setParams(nextParams, { replace: true });
      }} />}
    </div>
  );
}

type View = 'events' | 'feed';

/** The Friends segment: the people you follow, grouped by event by default, or as the flat feed. */
function FriendsTab({ view, onView }: { view: View; onView: (view: View) => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [feed, setFeed] = useState<FeedItem[] | null>(null);

  useEffect(() => {
    let current = true;
    if (!account) {
      setFeed(null);
      return;
    }
    followingFeed(200).then((list) => current && setFeed(list));
    return () => {
      current = false;
    };
  }, [account?.id]);

  useEffect(() => {
    let current = true;
    const nights = [...nightsOf(entries), ...(feed ?? []).map((item) => ({ metroId: item.metroId ?? DEFAULT_METRO.id, date: item.date }))];
    scoresForNights(nights).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries, feed]);

  if (!account) {
    return (
      <div className="card empty-card">
        <div className="card-title">Sign in to follow people.</div>
      </div>
    );
  }
  if (feed === null) return null;
  const example = feed.length === 0;
  const items = example ? EXAMPLE_FEED : feed;
  return (
    <>
      <div className="you-heading-row friends-head">
        <span className="friends-kicker">{view === 'events' ? 'By event' : 'Feed'}</span>
        {/* Grouped by event is the default (Kylie, Oct 11); the switch goes to the feed. */}
        <div className="view-switch" role="tablist" aria-label="View">
          <button type="button" role="tab" aria-selected={view === 'events'} aria-label="By event" onClick={() => onView('events')}>
            <CardsIcon />
          </button>
          <button type="button" role="tab" aria-selected={view === 'feed'} aria-label="Feed" onClick={() => onView('feed')}>
            <ListIcon />
          </button>
        </div>
      </div>
      {view === 'events' ? <ByEvent items={items} example={example} ratings={ratings} log={log} onFeed={() => onView('feed')} /> : <Feed items={items} example={example} />}
    </>
  );
}

/** A friend's line belongs on your by-event list when the event is yours (saved or logged) or one of your favorites' (Kylie, Oct 9; kept, 8.1 item 19). */
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

/** "Sam +2 attending · Priya watching · 3 interested" (build notes 3, 4.6; Attending/Attended per 8.1 item 25). */
function summaryLine(groups: ActivityGroups): string {
  return activityOrder(groups)
    .map((kind) => {
      const people = groups[kind]!;
      if (kind === 'interested') return `${people.length} interested`;
      const word = ACTIVITY_WORDS[kind].toLowerCase();
      return `${people[0].name}${people.length > 1 ? ` +${people.length - 1}` : ''} ${word}`;
    })
    .join(' · ');
}

function todayFor(metroId: string | undefined): string {
  return todayIn(METROS[metroId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO);
}

/**
 * Grouped by event (build notes 3, 4.6; mock 6-friends, A): each card leads with the title and venue,
 * then its tags and the small read box; one summary line that expands to the grouped lists. Dates
 * ahead first; past ones sit under an Earlier band like the Stubs month bands. Only the events you
 * saved, logged or follow (Kylie, Oct 9); the feed shows every line.
 */
function ByEvent({ items, example, ratings, log, onFeed }: { items: FeedItem[]; example: boolean; ratings: ReadonlyMap<string, number>; log: PersonalLog; onFeed: () => void }) {
  const favorites = favoritesOf(log);
  const list = example ? items : items.filter((item) => interested(item, log, favorites));
  const groups = groupFeed(list);
  const coming = groups.filter((g) => g.date >= todayFor(g.metroId)).sort((a, b) => a.date.localeCompare(b.date));
  const earlier = groups.filter((g) => g.date < todayFor(g.metroId)).sort((a, b) => b.date.localeCompare(a.date));
  const [open, setOpen] = useState<string | null>(() => (coming[0] ?? earlier[0])?.key ?? null);
  if (groups.length === 0) {
    return (
      <div className="card empty-card">
        <div className="card-title">Nothing from the people you follow at your events or favorites yet.</div>
      </div>
    );
  }
  const card = (group: FeedGroup) => {
    const rating = group.entry && !group.example ? ratingForEntry(group.entry, ratings) : group.metroId ? (ratings.get(nightKey(group.metroId, group.date)) ?? null) : null;
    const activity = activityGroups(group.items, null);
    const expanded = open === group.key;
    const friction = group.entry?.stamp?.friction;
    const head = (
      <>
        <span className="log-main">
          <span className="log-title"><TitleText text={group.title} /></span>
          <span className="log-facts">{[group.venue, shortLocalDate(group.date)].filter(Boolean).join(' · ')}</span>
          {friction && friction !== 'Low' && (
            <span className="stub-tags">
              <FrictionPill level={friction} />
            </span>
          )}
        </span>
        {group.example && <span className="example-chip">Example</span>}
        <ReadTile rating={rating} />
      </>
    );
    return (
      <article key={group.key} className="card feed-group">
        {group.example ? (
          <div className="feed-group-head">{head}</div>
        ) : (
          <Link to={group.eventId && group.metroId ? eventPath(group.eventId, group.metroId) : datePath(group.date, group.metroId ?? DEFAULT_METRO.id)} state={friendStubState(group.eventId, group)} className="feed-group-head">
            {head}
          </Link>
        )}
        <button type="button" className="feed-summary" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : group.key)}>
          <span className="feed-avatars" aria-hidden>
            {group.items.slice(0, 3).map((item) => (
              <span key={item.friend.id} className="avatar avatar-small">
                {(item.friend.displayName ?? item.friend.handle ?? '?').slice(0, 1).toUpperCase()}
              </span>
            ))}
          </span>
          <span className="feed-summary-text">{summaryLine(activity)}</span>
          <span className={`feed-summary-chevron${expanded ? ' open' : ''}`} aria-hidden>
            <ChevronDown />
          </span>
        </button>
        {expanded && (
          <div className="feed-expanded">
            <ActivityLines groups={activity} />
          </div>
        )}
      </article>
    );
  };
  return (
    <>
      {coming.map(card)}
      {earlier.length > 0 && (
        <section className="you-block" aria-label="Earlier">
          <h3 className="timeline-heading month-band">Earlier</h3>
          {earlier.map(card)}
          <button type="button" className="text-link see-earlier" onClick={onFeed}>
            See all earlier activity ›
          </button>
        </section>
      )}
    </>
  );
}

/**
 * The feed (Kylie, Oct 11, call 1; build notes 3, 4.6 and 4.7): one plain sentence per line, every friend's
 * line, under Today, Coming up and Earlier bands. "Sam is watching {event} at {location}" when shared.
 */
function Feed({ items, example }: { items: FeedItem[]; example: boolean }) {
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);
  const visible = items.filter((item) => !item.interested);
  const todayRows = visible.filter((item) => item.date === todayFor(item.metroId));
  const coming = visible.filter((item) => item.date > todayFor(item.metroId)).sort((a, b) => a.date.localeCompare(b.date));
  const earlier = visible.filter((item) => item.date < todayFor(item.metroId)).sort((a, b) => b.date.localeCompare(a.date));
  const band = (label: string, rows: FeedItem[]) =>
    rows.length > 0 && (
      <section className="you-block" aria-label={label}>
        <h3 className="timeline-heading month-band">{label}</h3>
        <ul className="log-list feed-flat">
          {rows.map((item) => {
            const { lead, tail } = feedSentence(item);
            const text = (
              <>
                <span className="avatar avatar-small" aria-hidden>
                  {(item.friend.displayName ?? item.friend.handle ?? '?').slice(0, 1).toUpperCase()}
                </span>
                <span className="feed-flat-text">
                  {lead} <strong><TitleText text={item.title} /></strong>
                  {tail}
                </span>
                <span className="feed-flat-date">{shortLocalDate(item.date).replace(/^\w+, /, '')}</span>
              </>
            );
            const key = `${item.friend.id}-${item.kind}-${item.date}-${item.title}`;
            if (item.example || !item.friend.handle) {
              return (
                <li key={key}>
                  <span className="feed-flat-row">{text}</span>
                </li>
              );
            }
            return (
              <li key={key}>
                <Link to={item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId ?? DEFAULT_METRO.id)} state={{ back, ...friendStubState(item.eventId, item) }} className="feed-flat-row">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  if (visible.length === 0) {
    return (
      <div className="card empty-card">
        <div className="card-title">Nothing from the people you follow yet.</div>
      </div>
    );
  }
  return (
    <>
      {example && <span className="example-chip">Example</span>}
      {band('Today', todayRows)}
      {band('Coming up', coming)}
      {band('Earlier', earlier)}
    </>
  );
}

/** The start of a friend's line (Kylie, Oct 11, call 1): "Sam is going to", "Sam is watching", "Sam went to", "Sam watched". The event follows. */
export function feedLine(item: FeedItem): string {
  return feedSentence(item).lead;
}

export function FeedRow({ item, ratings }: { item: FeedItem; ratings: ReadonlyMap<string, number> }) {
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);
  const rating = item.entry && !item.example ? ratingForEntry(item.entry, ratings) : null;
  const facts = [shortLocalDate(item.date), item.venue].filter(Boolean).join(' · ');
  const { lead, tail } = feedSentence(item);
  const body = (
    <>
      {rating !== null && <ReadTile rating={rating} />}
      <span className="log-main">
        <span className="log-friend">
          {item.example || !item.friend.handle ? lead : <Link to={`/p/${item.friend.handle}`} state={{ back }} className="log-friend-link">{lead}</Link>}
          {item.example && <span className="example-chip">Example</span>}
        </span>
        <span className="log-title">
          <TitleText text={item.title} />
          {tail}
        </span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (item.example) return <li className="log-row">{body}</li>;
  return (
    <li>
      <Link to={item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId ?? DEFAULT_METRO.id)} state={friendStubState(item.eventId, item)} className="log-row">
        {body}
      </Link>
    </li>
  );
}

/** A friend's line on a game the app holds no event for: what the event page needs to build it (Kylie, Oct 15). */
function friendStubState(eventId: string | undefined, line: { title: string; date: string; venue?: string; metroId?: string; entry?: Entry }) {
  if (!isGameEventId(eventId)) return undefined;
  return { stub: { title: line.title, date: line.date, venue: line.venue, metroId: line.metroId, sport: line.entry?.sport, inMetro: line.entry?.inMetro } };
}
