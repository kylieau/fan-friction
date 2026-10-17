import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import { StarIcon } from '../components/Icons';
import { TypeIcon } from '../components/TypeIcon';
import { DateBox } from '../components/StubRows';
import { Timeline, type TimelineItem } from '../components/Timeline';
import { useFavoriteRows, type ScheduleRow } from '../components/useFavoriteRows';
import {
  canSignIn,
  eventType,
  favoritesOf,
  followingFeed,
  getAccount,
  getPersonalLog,
  nightKey,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  type Entry,
  type FeedItem,
  isGameEventId,
} from '../data';
import { ACTIVITY_WORDS, activityGroups, activityOrder, feedSentence, type ActivityGroups } from '../lib/activity';
import { addDays, clockTime, dayBandLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { getHomeId } from '../lib/homeCity';
import { backFrom, datePath, eventPath } from '../lib/view';
import { TitleText } from '../components/TitleText';

/** How far the timeline looks each way (Kylie, Oct 16, Q4): your Faves' next 60 days; followed people's last 60. */
const SPAN_DAYS = 60;

/**
 * Following (build 6, item 7; Kylie, Oct 16, Q4): the same line of time as Stubs. Ahead of the today line,
 * upcoming events at your Faves in covered cities within 60 days and what the people you follow answered
 * (Attending, Watching, Interested); behind it, only what followed people attended or watched in the last
 * 60 days. Your own plans live in Stubs, not here. Each row shows its own date and time; no friction mark.
 * The Faves and People lists are edited in Settings; this tab only reads.
 */
export function FollowingScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const home = METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const { rows, today } = useFavoriteRows(favorites, home, SPAN_DAYS);
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [feedNote, setFeedNote] = useState<string | null>(null);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    let current = true;
    setFeedNote(null);
    if (!account) {
      setFeed([]);
      return;
    }
    followingFeed(300)
      .then((list) => current && setFeed(list))
      .catch(() => current && setFeedNote("Couldn't load the people you follow. Try again later."));
    return () => {
      current = false;
    };
  }, [account?.id]);

  const items = useMemo(() => mergeRows(rows.filter((row) => row.event), feed, today), [rows, feed, today]);

  useEffect(() => {
    let current = true;
    scoresForNights(items.flatMap((item) => (item.metroId ? [{ metroId: item.metroId, date: item.date }] : []))).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [items]);

  const location = useLocation();
  const back = backFrom(location.pathname, location.search);
  const toItem = (item: FollowItem): TimelineItem => ({
    key: item.key,
    group: timelineGroup({ sort: item.date, label: '', precision: 'day' }),
    node: <FollowRow item={item} rating={ratingFor(item, ratings)} back={back} />,
  });
  const past = items.filter((item) => item.date < today).map(toItem);
  const future = items.filter((item) => item.date >= today).map(toItem);

  return (
    <div className="screen page">
      <div className="you-header">
        <h1 className="page-title">Following</h1>
        <SearchButton className="you-search" />
      </div>
      {/* The lists you edit (Faves, People) moved to Settings (Kylie, Oct 16); one quiet pointer here. */}
      <p className="you-fine following-note">
        <Link to="/you?panel=faves">You can edit them in Settings.</Link>
      </p>
      {!account && canSignIn() && <p className="you-fine">Sign in to follow people.</p>}
      {feedNote && (
        <p className="you-fine" role="status">
          {feedNote}
        </p>
      )}
      <Timeline
        label="Following"
        past={past}
        future={future}
        todayLabel={dayBandLabel(today, today)}
        todayGroup={timelineGroup({ sort: today, label: '', precision: 'day' })}
        emptyPast={<p className="you-fine timeline-note">Nothing from the people you follow yet.</p>}
        emptyFuture={<p className="you-fine timeline-note">Nothing coming up at your Faves or from the people you follow.</p>}
      />
    </div>
  );
}

/** One row on the Following timeline: an event, the Faves it belongs to, and the followed people on it. */
interface FollowItem {
  key: string;
  title: string;
  date: string;
  start: string | null;
  venue?: string;
  metroId?: string;
  eventId?: string;
  typeKey?: string;
  /** The favorites that put it here. */
  faves: string[];
  /** The followed people's answers on it. */
  friends: FeedItem[];
  /** A friend's attended entry behind a past row, for its read. */
  entry?: Entry;
}

/** Faves rows and friends' answers merged by event, in date order, inside the 60-day windows. */
function mergeRows(rows: readonly ScheduleRow[], feed: readonly FeedItem[], today: string): FollowItem[] {
  const out = new Map<string, FollowItem>();
  const keyOf = (eventId: string | undefined, metroId: string | undefined, date: string, title: string) => eventId ?? `${metroId ?? ''}|${date}|${title.toLowerCase()}`;
  for (const row of rows) {
    const key = keyOf(row.event?.id, row.metroId, row.date, row.title);
    const item = out.get(key) ?? {
      key,
      title: row.title,
      date: row.date,
      start: row.start,
      venue: row.facts.split(' · ')[0] || undefined,
      metroId: row.metroId,
      eventId: row.event?.id,
      typeKey: row.event ? eventType(row.event).key : undefined,
      faves: [],
      friends: [],
    };
    if (!item.faves.includes(row.fav.label)) item.faves.push(row.fav.label);
    out.set(key, item);
  }
  const floor = addDays(today, -SPAN_DAYS);
  for (const line of feed) {
    // Plans ahead, and what people attended or watched in the last 60 days; the feed already keeps privacy.
    if (line.date < floor) continue;
    const key = keyOf(line.eventId, line.metroId, line.date, line.title);
    const item = out.get(key) ?? { key, title: line.title, date: line.date, start: null, venue: line.venue, metroId: line.metroId, eventId: line.eventId, faves: [], friends: [] };
    item.friends.push(line);
    if (!item.entry && line.entry) item.entry = line.entry;
    out.set(key, item);
  }
  return [...out.values()].sort((a, b) => (a.date + (a.start ?? '99')).localeCompare(b.date + (b.start ?? '99')) || a.title.localeCompare(b.title));
}

function ratingFor(item: FollowItem, ratings: ReadonlyMap<string, number>): number | null {
  if (item.entry) return ratingForEntry(item.entry, ratings);
  return item.metroId ? (ratings.get(nightKey(item.metroId, item.date)) ?? null) : null;
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

/**
 * A row: the date box, the title over "venue · time", then its own last line (the people on it, or the Fave it
 * belongs to), and the date's read. Opens the event page, or the date page when the app holds no event.
 */
function FollowRow({ item, rating, back }: { item: FollowItem; rating: number | null; back: { to: string; label: string } }) {
  const to = item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId ?? DEFAULT_METRO.id);
  const line = item.friends.length > 0 ? summaryLine(activityGroups(item.friends, null)) : null;
  return (
    <div className="stub-row follow-row">
      <Link to={to} state={{ back, ...friendStubState(item.eventId, { title: item.title, date: item.date, venue: item.venue, metroId: item.metroId, entry: item.entry }) }} className="stub-row-link" aria-label={item.title} />
      <DateBox when={{ sort: item.date, label: '', precision: 'day' }} />
      <span className="stub-main">
        <span className="stub-title">
          {item.typeKey && <TypeIcon typeKey={item.typeKey} size={16} className="stub-type-icon" />}
          <TitleText text={item.title} />
        </span>
        <span className="stub-venue">{[item.venue, item.start ? clockTime(item.start) : null].filter(Boolean).join(' · ')}</span>
        {line ? (
          <span className="follow-last">{line}</span>
        ) : (
          <span className="follow-last follow-fave">
            <StarIcon /> {item.faves.join(', ')}
          </span>
        )}
      </span>
      <ReadTile rating={rating} />
    </div>
  );
}

/** One line of a friend's activity on Home's Following strip: "Sam attended", "Priya is attending", the event, the date. */
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
