import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import { PeopleIcon, StarIcon } from '../components/Icons';
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
  yourEntries,
  type Entry,
  type Favorite,
  type FeedItem,
  type PersonalLog,
} from '../data';
import { shortLocalDate } from '../lib/dates';
import { backFrom, datePath, eventPath } from '../lib/view';
import { FavoritesScreen } from './FavoritesScreen';

type Segment = 'faves' | 'friends';

/**
 * Following: who and what you follow, its own tab since build 3 (Kylie, Oct 11, 2026; mocks
 * docs/design/build3/5-favorites.png and 6-friends.png). Two segments, star "Faves" and person
 * "Friends", icon plus a short word so the F-words don't stack. Faves is the Favorites screen;
 * Friends is the feed of the people you follow. This commit moves both as they were; the build 3
 * layouts follow.
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
      {segment === 'faves' ? <FavoritesScreen embedded /> : <FriendsTab />}
    </div>
  );
}

/** The Friends segment: the feed of the people you follow, with the reads of the dates it names. */
function FriendsTab() {
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
    followingFeed().then((list) => current && setFeed(list));
    return () => {
      current = false;
    };
  }, [account?.id]);

  useEffect(() => {
    let current = true;
    const nights = [...nightsOf(entries), ...(feed ?? []).filter((item) => item.kind === 'attended').map((item) => ({ metroId: item.metroId ?? DEFAULT_METRO.id, date: item.date }))];
    scoresForNights(nights).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries, feed]);

  return <FollowingTab items={feed} ratings={ratings} signedIn={Boolean(account)} log={log} />;
}

/** A friend's line belongs on your by-event list when the event is yours (saved or logged) or one of your favorites' (Kylie, Oct 9). */
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
 * dates under Recent. Each line is dated by the event; no post times, no "is at".
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
