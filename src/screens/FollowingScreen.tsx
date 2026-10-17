import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import { PeopleIcon, SearchIcon, StarIcon } from '../components/Icons';
import { TypeIcon } from '../components/TypeIcon';
import { DateBox } from '../components/StubRows';
import { Timeline, type TimelineItem } from '../components/Timeline';
import { FavoritesScreen } from './FavoritesScreen';
import {
  canSignIn,
  followingFeed,
  getAccount,
  nightKey,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  type Entry,
  type FeedItem,
  isGameEventId,
} from '../data';
import { ACTIVITY_WORDS, activityGroups, activityOrder, feedSentence, type ActivityGroups } from '../lib/activity';
import { addDays, dayBandLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { entryTypeKey } from '../map/typeIcons';
import { getHomeId } from '../lib/homeCity';
import { backFrom, datePath, eventPath } from '../lib/view';
import { TitleText } from '../components/TitleText';

type Segment = 'faves' | 'friends';

/** How far back the Friends timeline looks (Kylie, Oct 16, Q4): followed people's last 60 days. */
const PAST_DAYS = 60;

/**
 * Following: who and what you follow, its own tab since build 3 (Kylie, Oct 11, 2026). Two segments, star "Faves"
 * and person "Friends". Faves is the schedule of the teams, artists, venues and festivals you follow, with the badge
 * strip and Edit (Kylie, Oct 17: the tab keeps its sub-tabs; only the edit-favorites picker also lives in Settings).
 * Friends is a timeline of what the people you follow answered (build 6, item 7): the tab opens with today's band
 * first and the past above it, reached by scrolling up, like the Explore List.
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
    <div className={`screen page${segment === 'friends' ? ' timeline-page' : ''}`}>
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
      {segment === 'faves' ? <FavoritesScreen embedded /> : <FriendsTimeline />}
    </div>
  );
}

/** The Friends segment: a visible way to find people, then the timeline of what the people you follow answered. */
function FriendsTimeline() {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const home = METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: home.timeZone });
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

  const items = useMemo(() => mergeFeed(feed, today), [feed, today]);

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

  if (!account) {
    return (
      <div className="card empty-card">
        <div className="card-title">{canSignIn() ? 'Sign in to follow people.' : 'Following people needs an account.'}</div>
      </div>
    );
  }
  return (
    <>
      {/* A visible way to find and add people (Kylie, Oct 15); it opens the People list in Settings on its search. */}
      <Link to="/you?panel=people&find=1" className="search-box friends-find">
        <SearchIcon />
        <span>Find people</span>
      </Link>
      {feedNote && (
        <p className="you-fine" role="status">
          {feedNote}
        </p>
      )}
      <Timeline
        label="Friends"
        past={past}
        future={future}
        todayLabel={dayBandLabel(today, today)}
        emptyPast={<p className="you-fine timeline-note">Nothing from the people you follow in the last 60 days.</p>}
        emptyFuture={<p className="you-fine timeline-note">Nothing coming up from the people you follow.</p>}
      />
    </>
  );
}

/** One row on the Friends timeline: an event and the followed people's answers on it. */
interface FollowItem {
  key: string;
  title: string;
  date: string;
  venue?: string;
  metroId?: string;
  eventId?: string;
  friends: FeedItem[];
  /** A friend's attended entry behind a past row, for its read and type icon. */
  entry?: Entry;
}

/** Friends' answers merged by event, in date order: plans ahead, and what they attended or watched in the last 60 days. */
function mergeFeed(feed: readonly FeedItem[], today: string): FollowItem[] {
  const out = new Map<string, FollowItem>();
  const floor = addDays(today, -PAST_DAYS);
  for (const line of feed) {
    if (line.date < floor) continue;
    const key = line.eventId ?? `${line.metroId ?? ''}|${line.date}|${line.title.toLowerCase()}`;
    const item = out.get(key) ?? { key, title: line.title, date: line.date, venue: line.venue, metroId: line.metroId, eventId: line.eventId, friends: [] };
    item.friends.push(line);
    if (!item.entry && line.entry) item.entry = line.entry;
    out.set(key, item);
  }
  return [...out.values()].sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
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
 * A row: the date box, the title over the venue, the people on it as its own last line, and the date's read. Opens
 * the event page, or the date page when the app holds no event. No friction mark (build 6, item 1).
 */
function FollowRow({ item, rating, back }: { item: FollowItem; rating: number | null; back: { to: string; label: string } }) {
  const to = item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId ?? DEFAULT_METRO.id);
  const line = summaryLine(activityGroups(item.friends, null));
  return (
    <div className="stub-row follow-row">
      <Link to={to} state={{ back, ...friendStubState(item.eventId, { title: item.title, date: item.date, venue: item.venue, metroId: item.metroId, entry: item.entry }) }} className="stub-row-link" aria-label={`${item.title}, ${line}`} />
      <DateBox when={{ sort: item.date, label: '', precision: 'day' }} />
      <span className="stub-main">
        <span className="stub-title">
          {item.entry && <TypeIcon typeKey={entryTypeKey(item.entry)} size={16} className="stub-type-icon" />}
          <TitleText text={item.title} />
        </span>
        {item.venue && <span className="stub-venue">{item.venue}</span>}
        <span className="follow-last">{line}</span>
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
