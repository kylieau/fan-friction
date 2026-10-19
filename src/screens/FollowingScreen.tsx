import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { SearchButton } from '../components/SearchButton';
import { PeopleIcon, SlidersIcon, StarIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { TitleText } from '../components/TitleText';
import { Timeline, type TimelineItem } from '../components/Timeline';
import { FollowRow, LeadIcon, readPath } from '../components/FollowRow';
import { FollowingSheet, type FollowingSegment, type Picked } from '../components/FollowingSheet';
import { useFavoriteRows, type ScheduleRow } from '../components/useFavoriteRows';
import { favPath } from './FavoritesScreen';
import { favoriteName } from '../components/FavoriteBadge';
import {
  canSignIn,
  favoriteDisplayName,
  favoriteKey,
  favoritesOf,
  followRequests,
  followingFeedWithStatus,
  gameEventId,
  getAccount,
  getPersonalLog,
  isGameEventId,
  nightKey,
  peopleList,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  type Entry,
  type Favorite,
  type FeedItem,
  type FollowRequest,
  type PersonRow,
} from '../data';
import { activityGroups, activityOrder, ACTIVITY_WORDS, feedSentence, type ActivityGroups } from '../lib/activity';
import { addDays, dayBandLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { favoriteTypeKey } from '../map/typeIcons';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { backFrom, datePath, eventPath } from '../lib/view';

/** Both lines of time reach 60 days each way (the notes' Q4 horizon; the past, Kylie, Oct 17). */
const SPAN_DAYS = 60;

/**
 * Following (Kylie's redesign, Oct 19, 2026; mockups 01 to 07): one line of time for the teams, artists, venues
 * and festivals you follow (Faves) and for what the people you follow answered (Friends), the Explore List's way:
 * the header at the top, the today rule first, the past above it by scrolling up, month bands both sides. A
 * 44 × 44 sliders button beside the segmented control is both the timeline's filter and the way to manage Faves
 * and Friends; while a filter is on it turns solid with a count and a chip row shows what is picked.
 */
export function FollowingScreen() {
  const [params, setParams] = useSearchParams();
  const segment: FollowingSegment = params.get('tab') === 'friends' ? 'friends' : 'faves';
  const pick = (next: FollowingSegment) => {
    const nextParams = new URLSearchParams(params);
    if (next === 'faves') nextParams.delete('tab');
    else nextParams.set('tab', next);
    setParams(nextParams, { replace: true });
  };
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const [sheet, setSheet] = useState(false);
  // The filters, kept on this device for the session so a row tap and Back keep them (a builder's call).
  const [favPicked, setFavPicked] = usePicked('fan-friction:following-faves-filter');
  const [friendPicked, setFriendPicked] = usePicked('fan-friction:following-friends-filter');

  // The people you follow and the requests waiting on you: the Friends filter's names and the sheet's lists.
  const [people, setPeople] = useState<PersonRow[] | null>(null);
  const [requests, setRequests] = useState<FollowRequest[]>([]);
  const loadPeople = useCallback(async () => {
    if (!account) {
      setPeople(null);
      setRequests([]);
      return;
    }
    const [list, pending] = await Promise.all([peopleList(), followRequests()]);
    setPeople(list);
    setRequests(pending);
  }, [account?.id]);
  useEffect(() => {
    void loadPeople();
  }, [loadPeople]);

  // A filter that names something no longer followed drops it; an empty filter is All.
  const favKeys = favorites.map(favoriteKey);
  const favFilter = useMemo(() => prune(favPicked, favKeys), [favPicked, favKeys.join('|')]);
  const friendKeys = (people ?? []).filter((p) => p.youFollow === 'approved').map((p) => p.profile.id);
  const friendFilter = useMemo(() => (people === null ? friendPicked : prune(friendPicked, friendKeys)), [friendPicked, people, friendKeys.join('|')]);

  const picked = segment === 'faves' ? favFilter : friendFilter;
  const chips: { key: string; label: string }[] =
    picked === null
      ? []
      : segment === 'faves'
        ? [...picked].flatMap((key) => {
            const fav = favorites.find((f) => favoriteKey(f) === key);
            return fav ? [{ key, label: favoriteDisplayName(fav) }] : [];
          })
        : [...picked].flatMap((id) => {
            const p = (people ?? []).find((x) => x.profile.id === id);
            return p ? [{ key: id, label: p.profile.displayName ?? p.profile.handle ?? 'Someone' }] : [];
          });
  const drop = (key: string) => {
    const set = segment === 'faves' ? setFavPicked : setFriendPicked;
    const cur = picked ?? new Set<string>();
    const next = new Set(cur);
    next.delete(key);
    set(next.size === 0 ? null : next);
  };
  const clear = () => (segment === 'faves' ? setFavPicked(null) : setFriendPicked(null));

  return (
    <div className="screen page timeline-page">
      <div className="you-header">
        <h1 className="page-title">Following</h1>
        <SearchButton className="you-search" />
      </div>
      <div className="following-top">
        <div className="segmented following-segments" role="tablist" aria-label="Following">
          <button type="button" role="tab" aria-selected={segment === 'faves'} onClick={() => pick('faves')}>
            <StarIcon /> Faves
          </button>
          <button type="button" role="tab" aria-selected={segment === 'friends'} onClick={() => pick('friends')}>
            <PeopleIcon /> Friends
          </button>
        </div>
        <button type="button" className={`round-button following-filter${picked ? ' on' : ''}`} aria-label={picked ? `Show and manage, ${picked.size} picked` : 'Show and manage'} aria-expanded={sheet} onClick={() => setSheet(true)}>
          <SlidersIcon />
          {picked && <span className="following-filter-count">{picked.size}</span>}
        </button>
      </div>
      {chips.length > 0 && (
        <div className="following-chips">
          <div className="following-chips-scroll">
            {chips.map((chip) => (
              <button key={chip.key} type="button" className="following-chip" onClick={() => drop(chip.key)} aria-label={`Stop showing only ${chip.label}`}>
                {chip.label} <span aria-hidden>✕</span>
              </button>
            ))}
          </div>
          <button type="button" className="link-button following-clear" onClick={clear}>
            Clear
          </button>
        </div>
      )}
      {segment === 'faves' ? (
        <FavesTimeline favorites={favorites} picked={favFilter} home={home} onClear={clear} />
      ) : (
        <FriendsTimeline account={Boolean(account)} picked={friendFilter} people={people} home={home} onClear={clear} />
      )}
      {sheet && (
        <FollowingSheet
          segment={segment}
          onSegment={pick}
          onClose={() => setSheet(false)}
          favorites={favorites}
          favPicked={favFilter}
          onFavPicked={setFavPicked}
          signedIn={Boolean(account)}
          people={people}
          requests={requests}
          friendPicked={friendFilter}
          onFriendPicked={setFriendPicked}
          onPeopleChanged={loadPeople}
        />
      )}
    </div>
  );
}

/** A picked set kept in session storage: null is All. */
function usePicked(storageKey: string): [Picked, (next: Picked) => void] {
  const [picked, setPicked] = useState<Picked>(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      const list = raw ? (JSON.parse(raw) as unknown) : null;
      return Array.isArray(list) && list.length > 0 ? new Set(list.filter((x): x is string => typeof x === 'string')) : null;
    } catch {
      return null;
    }
  });
  const set = useCallback(
    (next: Picked) => {
      setPicked(next);
      try {
        if (next === null) sessionStorage.removeItem(storageKey);
        else sessionStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {
        /* storage blocked */
      }
    },
    [storageKey],
  );
  return [picked, set];
}

function prune(picked: Picked, keys: readonly string[]): Picked {
  if (picked === null) return null;
  const kept = [...picked].filter((k) => keys.includes(k));
  return kept.length === 0 || kept.length === keys.length ? null : new Set(kept);
}

/** The Faves line: results and past dates above the rule, what is ahead below it, narrowed by the filter. */
function FavesTimeline({ favorites, picked, home, onClear }: { favorites: readonly Favorite[]; picked: Picked; home: (typeof METROS)[string]; onClear: () => void }) {
  const { rows, today } = useFavoriteRows(favorites, home, SPAN_DAYS, SPAN_DAYS);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    scoresForNights(rows.flatMap((row) => (row.metroId ? [{ metroId: row.metroId, date: row.date }] : []))).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [rows]);
  const shown = picked === null ? rows : rows.filter((row) => picked.has(favoriteKey(row.fav)));
  const toItem = (row: ScheduleRow): TimelineItem => ({
    key: row.key,
    group: timelineGroup({ sort: row.date, label: '', precision: 'day' }),
    node: <FaveRow row={row} rating={row.metroId ? (ratings.get(nightKey(row.metroId, row.date)) ?? null) : null} home={home.id} />,
  });
  if (favorites.length === 0) {
    return (
      <div className="card empty-card following-empty">
        <div className="card-title">No Faves yet</div>
        <p className="following-empty-sub">Follow a team, artist or venue to see their games and shows here.</p>
        <Link to="/favorites/edit" className="following-empty-button">
          Add a Fave
        </Link>
      </div>
    );
  }
  if (shown.length === 0 && picked !== null) {
    const names = [...picked].flatMap((key) => {
      const fav = favorites.find((f) => favoriteKey(f) === key);
      return fav ? [favoriteDisplayName(fav)] : [];
    });
    return (
      <div className="card empty-card following-empty">
        <div className="card-title">Nothing for {names.join(', ')} in the last or next {SPAN_DAYS} days.</div>
        <p className="following-empty-sub">The filter hides everything else.</p>
        <button type="button" className="following-empty-link" onClick={onClear}>
          Show all Faves <span aria-hidden>›</span>
        </button>
      </div>
    );
  }
  return (
    <Timeline
      label="Faves"
      past={shown.filter((row) => row.date < today).map(toItem)}
      future={shown.filter((row) => row.date >= today).map(toItem)}
      todayLabel={dayBandLabel(today, today)}
      emptyPast={
        <div className="card empty-card">
          <div className="card-title">Nothing from your Faves in the last {SPAN_DAYS} days.</div>
        </div>
      }
      emptyFuture={
        <div className="card empty-card">
          <div className="card-title">Nothing from your Faves in the next {SPAN_DAYS} days.</div>
        </div>
      }
    />
  );
}

/** A Fave's row: the icon and display name lead (a link to its page), the title from its side, time and venue. */
function FaveRow({ row, rating, home }: { row: ScheduleRow; rating: number | null; home: string }) {
  const to = row.event ? eventPath(row.event.id, row.event.metroId) : row.link ? eventPath(row.link.game.eventId ?? gameEventId(row.link.game), row.metroId ?? home) : datePath(row.date, row.metroId ?? home);
  return (
    <FollowRow
      date={row.date}
      lead={{ icon: <LeadIcon typeKey={favoriteTypeKey(row.fav)} />, text: favoriteDisplayName(row.fav), to: favPath(row.fav), label: favoriteName(row.fav) }}
      title={row.title}
      facts={row.facts}
      to={to}
      state={row.link ? { game: row.link } : undefined}
      rating={rating}
      readTo={row.away ? null : readPath(row.date, row.metroId, row.event?.id)}
      away={row.noRead}
      cityCode={row.metroId && row.metroId !== home ? METROS[row.metroId]?.code : null}
      spoken={`${favoriteName(row.fav)}, ${row.title}, ${shortLocalDate(row.date)}`}
    />
  );
}

/** The Friends line: what the people you follow answered, plans ahead and the last 60 days behind. */
function FriendsTimeline({ account, picked, people, home, onClear }: { account: boolean; picked: Picked; people: readonly PersonRow[] | null; home: (typeof METROS)[string]; onClear: () => void }) {
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
    // A failed plans read still brings the attended lines (gap review G2): the note says what is missing.
    followingFeedWithStatus(300)
      .then((result) => {
        if (!current) return;
        setFeed(result.items);
        if (result.plansFailed) setFeedNote("Couldn't load your friends' plans. Try again later.");
      })
      .catch(() => current && setFeedNote("Couldn't load the people you follow. Try again later."));
    return () => {
      current = false;
    };
  }, [account]);
  const items = useMemo(() => mergeFeed(feed.filter((line) => picked === null || picked.has(line.friend.id)), today), [feed, today, picked]);
  useEffect(() => {
    let current = true;
    scoresForNights(items.flatMap((item) => (item.metroId ? [{ metroId: item.metroId, date: item.date }] : []))).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [items]);
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);

  if (!account) {
    return (
      <div className="card empty-card">
        <div className="card-title">{canSignIn() ? 'Sign in to follow people.' : 'Following people needs an account.'}</div>
      </div>
    );
  }
  const following = (people ?? []).filter((p) => p.youFollow === 'approved');
  if (people !== null && following.length === 0) {
    return (
      <div className="card empty-card following-empty">
        <div className="card-title">No friends yet</div>
        <p className="following-empty-sub">Find people to see what they attend, watch or are interested in.</p>
        <Link to="/you?panel=people&find=1" className="following-empty-button">
          Find people
        </Link>
      </div>
    );
  }
  if (items.length === 0 && picked !== null) {
    const names = [...picked].flatMap((id) => {
      const p = following.find((x) => x.profile.id === id);
      return p ? [p.profile.displayName ?? p.profile.handle ?? 'Someone'] : [];
    });
    return (
      <div className="card empty-card following-empty">
        {/* Friends' plans ahead are not capped (the builder's report); only the past is 60 days (gap review G10). */}
        <div className="card-title">Nothing from {names.join(', ')} in the last {SPAN_DAYS} days or ahead.</div>
        <p className="following-empty-sub">The filter hides everything else.</p>
        <button type="button" className="following-empty-link" onClick={onClear}>
          Show all friends <span aria-hidden>›</span>
        </button>
      </div>
    );
  }
  const toItem = (item: FollowItem): TimelineItem => ({
    key: item.key,
    group: timelineGroup({ sort: item.date, label: '', precision: 'day' }),
    node: <FriendRow item={item} rating={ratingFor(item, ratings)} back={back} home={home.id} />,
  });
  return (
    <>
      {feedNote && (
        <p className="you-fine" role="status">
          {feedNote}
        </p>
      )}
      <Timeline
        label="Friends"
        past={items.filter((item) => item.date < today).map(toItem)}
        future={items.filter((item) => item.date >= today).map(toItem)}
        todayLabel={dayBandLabel(today, today)}
        emptyPast={
          <div className="card empty-card">
            <div className="card-title">Nothing from the people you follow in the last {SPAN_DAYS} days.</div>
          </div>
        }
        emptyFuture={
          <div className="card empty-card">
            <div className="card-title">Nothing coming up from the people you follow.</div>
          </div>
        }
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
  const floor = addDays(today, -SPAN_DAYS);
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

/** "Sam R. +2 attending · Priya watching"; one person reads as a sentence, "Jo is interested", "Priya attended". */
function peopleLine(items: readonly FeedItem[]): string {
  if (items.length === 1) return feedSentence(items[0]).lead.replace(/ in$/, '');
  const groups: ActivityGroups = activityGroups(items, null);
  return activityOrder(groups)
    .map((kind) => {
      const people = groups[kind]!;
      const word = ACTIVITY_WORDS[kind].toLowerCase();
      return `${people[0].name}${people.length > 1 ? ` +${people.length - 1}` : ''} ${word}`;
    })
    .join(' · ');
}

function FriendRow({ item, rating, back, home }: { item: FollowItem; rating: number | null; back: { to: string; label: string }; home: string }) {
  // A friend's stub logged "elsewhere" has no city, so nowhere to open (it had opened the default city's page).
  const to = item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : item.metroId ? datePath(item.date, item.metroId) : undefined;
  const line = peopleLine(item.friends);
  return (
    <FollowRow
      date={item.date}
      lead={{ icon: <PeopleIcon size={13} />, text: line }}
      title={item.title}
      // A friend's line carries no start time, so the row says the venue alone.
      facts={item.venue ?? ''}
      to={to}
      state={{ back, ...friendStubState(item.eventId, { title: item.title, date: item.date, venue: item.venue, metroId: item.metroId, entry: item.entry }) }}
      rating={rating}
      readTo={readPath(item.date, item.metroId, item.eventId)}
      cityCode={item.metroId && item.metroId !== home ? METROS[item.metroId]?.code : null}
      spoken={`${item.title}, ${line}`}
    />
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
  if (item.example || !item.metroId) return <li className="log-row">{body}</li>;
  return (
    <li>
      <Link to={item.eventId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId)} state={friendStubState(item.eventId, item)} className="log-row">
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

