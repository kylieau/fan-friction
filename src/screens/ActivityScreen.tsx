import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { SearchButton } from '../components/SearchButton';
import { AccountBlock } from '../components/AccountBlock';
import { PeopleIcon } from '../components/Icons';
import { ListBand } from '../components/ListBand';
import { FollowRow, readPath } from '../components/FollowRow';
import { friendStubState } from '../components/FeedRow';
import { CheckRow, FilterButton, FilterChips, FilterSheet, SheetHeading, prunePicked, readPicked, toggleIn, writePicked, type Picked } from '../components/FilterSheet';
import {
  canSignIn,
  followingFeedWithStatus,
  getAccount,
  getPersonalLog,
  isFurtherOutRoom,
  isManualEntry,
  nightKey,
  peopleList,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  yourEntries,
  type Entry,
  type FeedItem,
  type PersonRow,
  type Profile,
} from '../data';
import { ACTIVITY_WORDS, feedKind, feedSentence, type ActivityKind } from '../lib/activity';
import { addDays, timelineGroup } from '../lib/dates';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { getPref, setPref } from '../lib/prefs';
import { backFrom, datePath, entryPath, eventPath } from '../lib/view';
import { useEdgeFade } from '../lib/useEdgeFade';

/** The past reaches back 60 days (the notes' Q4 horizon; Kylie, Oct 17); plans ahead are not capped (gap review G10). */
const SPAN_DAYS = 60;

/** Your own rows carry this profile; nothing about it is ever saved or sent. */
const YOU: Profile = { id: 'you', handle: null, displayName: 'You', avatarUrl: null, homeMetroId: null };

/** The filter's chips: Activity looks backward only since build 7.1 (M24), so the plan words are gone. */
const KINDS: ActivityKind[] = ['attended', 'watched'];
/** The people line's order, the ladder's: plans first, then what happened. */
const KIND_ORDER: ActivityKind[] = ['attending', 'watching', 'interested', 'attended', 'watched'];
const PEOPLE_KEY = 'fan-friction:following-friends-filter';
const KINDS_KEY = 'fan-friction:activity-kinds-filter';

/**
 * Activity (build 7, §3.4; Kylie, Oct 22, 2026: the Friends side renamed, "it should include the user's own
 * activity"): what you and the people you follow attended or watched, one row per event with the people merged on
 * its lead line, You first. Since build 7.1 (M24; Kylie, Oct 23, 2026) it looks backward only: a plain list, newest
 * first, scrolling down into older, with no Today line, no pill and no future rows (friends' plans ahead are
 * Upcoming's, M22); all of your own stubs show, friends' from the last 60 days. The filter button sits beside search
 * at search's size; its sheet is Hide mine (sticky, per device), People and the Attended / Watched chips. Signed out,
 * your own local entries show under the sign-in card (Locked). Managing people lives in Profile & Settings › People.
 */
export function ActivityScreen() {
  const chipRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: home.timeZone });
  const [sheet, setSheet] = useState(false);

  // Hide mine (Locked): sticky, saved per device as a prefs key; moving it to the account is backlog.
  const [hideMine, setHideMineState] = useState(() => getPref<boolean>('activity-hide-mine', false));
  const setHideMine = (on: boolean) => {
    setHideMineState(on);
    setPref('activity-hide-mine', on);
  };
  const [peoplePicked, setPeoplePickedState] = useState<Picked>(() => readPicked(PEOPLE_KEY));
  const setPeoplePicked = (next: Picked) => {
    setPeoplePickedState(next);
    writePicked(PEOPLE_KEY, next);
  };
  // A pick saved before build 7.1 may name a plan kind Activity no longer shows: only the kinds still here count (Codex, stage 3).
  const [kindsPicked, setKindsPickedState] = useState<Picked>(() => prunePicked(readPicked(KINDS_KEY), KINDS));
  const setKindsPicked = (next: Picked) => {
    setKindsPickedState(next);
    writePicked(KINDS_KEY, next);
  };

  // The people you follow: the People checklist's names (approved only; the filter is all they do here).
  const [people, setPeople] = useState<PersonRow[] | null>(null);
  const loadPeople = useCallback(async () => {
    if (!account) {
      setPeople(null);
      return;
    }
    setPeople(await peopleList());
  }, [account?.id]);
  useEffect(() => {
    void loadPeople();
  }, [loadPeople]);
  const following = (people ?? []).filter((p) => p.youFollow === 'approved');
  const peopleKeys = following.map((p) => p.profile.id);
  const peopleFilter = useMemo(() => (people === null ? peoplePicked : prunePicked(peoplePicked, peopleKeys)), [peoplePicked, people, peopleKeys.join('|')]);

  // Friends' lines from the account; a failed plans read still brings the attended lines (gap review G2), and since
  // plans moved to Upcoming (M24) that failure is reported there, not here.
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [feedNote, setFeedNote] = useState<string | null>(null);
  useEffect(() => {
    let current = true;
    setFeedNote(null);
    if (!account) {
      setFeed([]);
      return;
    }
    followingFeedWithStatus(300)
      .then((result) => {
        if (!current) return;
        setFeed(result.items);
      })
      .catch(() => current && setFeedNote("Couldn't load the people you follow. Try again later."));
    return () => {
      current = false;
    };
  }, [account?.id]);

  // Your own lines, built locally from your log (Locked: your entries are mixed in; reverses build 3 DECISIONS §2
  // and build 6's exclusion on purpose). Nothing leaves the device for this.
  const mine = useMemo<FeedItem[]>(() => (hideMine ? [] : ownLines(log, today)), [log, today, hideMine]);

  const lines = useMemo(
    () => [...mine, ...feed.filter((line) => peopleFilter === null || peopleFilter.has(line.friend.id))].filter((line) => kindsPicked === null || kindsPicked.has(feedKind(line))),
    [mine, feed, peopleFilter, kindsPicked],
  );
  const items = useMemo(() => mergeFeed(lines, today), [lines, today]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    scoresForNights(items.flatMap((item) => (item.metroId ? [{ metroId: item.metroId, date: item.date }] : []))).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [items]);
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);

  const chips: { key: string; label: string }[] = [];
  if (hideMine) chips.push({ key: 'mine', label: 'Hide mine' });
  if (peopleFilter !== null)
    for (const id of peopleFilter) {
      const p = following.find((x) => x.profile.id === id);
      if (p) chips.push({ key: `p:${id}`, label: personName(p) });
    }
  if (kindsPicked !== null) chips.push({ key: 'kinds', label: [...kindsPicked].map((k) => ACTIVITY_WORDS[k as ActivityKind]).join(' / ') });
  const drop = (key: string) => {
    if (key === 'mine') setHideMine(false);
    else if (key === 'kinds') setKindsPicked(null);
    else if (key.startsWith('p:')) setPeoplePicked(toggleIn(peopleFilter, key.slice(2), peopleKeys));
  };
  const clear = () => {
    setHideMine(false);
    setPeoplePicked(null);
    setKindsPicked(null);
  };

  // Newest first, month by month (build 7.1, M24; Kylie, Oct 23, 2026): a plain list scrolling down into older, no
  // Today line, no pill, no future rows. Friends' upcoming plans live on Upcoming now (M22).
  const groups = groupByMonth(items);
  const nothingFollowed = account && people !== null && following.length === 0;
  const body =
    items.length === 0 && chips.length > 0 ? (
      <div className="card empty-card following-empty">
        <div className="card-title">Nothing matches this filter.</div>
        <button type="button" className="following-empty-link" onClick={clear}>
          Show everything <span aria-hidden>›</span>
        </button>
      </div>
    ) : items.length === 0 ? (
      nothingFollowed ? (
        <div className="card empty-card following-empty">
          <div className="card-title">No friends yet</div>
          <p className="following-empty-sub">Find people to see what they attend, watch, or are interested in.</p>
          <Link to="/you/settings?find=1#people" className="following-empty-button">
            Find people
          </Link>
        </div>
      ) : (
        <div className="card empty-card">
          <div className="card-title">{account ? `Nothing from you yet, or from the people you follow in the last ${SPAN_DAYS} days.` : 'Nothing stubbed yet.'}</div>
        </div>
      )
    ) : (
      <div className="timeline-body">
        <div className="timeline-scroll activity-list" aria-label="Activity">
          {groups.map(([group, rows]) => (
            <section key={group} className="timeline-group" aria-label={group}>
              <ListBand label={group} />
              <ul className="log-list">
                {rows.map((item) => (
                  <li key={item.key}>
                    <ActivityRow item={item} rating={ratingFor(item, ratings)} back={back} home={home.id} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="you-fine activity-footer">Friends' activity from the last {SPAN_DAYS} days. All of your own dated stubs show.</p>
        </div>
      </div>
    );

  return (
    <div className="screen page timeline-page">
      <div className="you-header">
        <h1 className="page-title">Activity</h1>
        <span className="header-actions">
          <FilterButton count={chips.length} open={sheet} onClick={() => setSheet(true)} label="Filter Activity" />
          <SearchButton />
        </span>
      </div>
      <FilterChips chips={chips} onDrop={drop} onClear={clear} scrollRef={chipRow} />
      {/* Signed out (Locked, Kylie, 2026-10-22): the sign-in card, then your own local entries. */}
      {!account && canSignIn() && <AccountBlock />}
      {feedNote && (
        <p className="you-fine" role="status">
          {feedNote}
        </p>
      )}
      {body}
      {sheet && (
        <FilterSheet title="Filter Activity" onReset={clear} onClose={() => setSheet(false)}>
          <div className="card sheet-toggle-card">
            <label className="sheet-toggle">
              <span className="log-main">
                <span className="log-title">Hide mine</span>
                <span className="log-facts">Drops you, and rows that are only you</span>
              </span>
              <input type="checkbox" className="switch" checked={hideMine} onChange={(ev) => setHideMine(ev.target.checked)} />
            </label>
          </div>
          {account && following.length > 0 && (
            <>
              <SheetHeading>People</SheetHeading>
              <ul className="log-list card sheet-list">
                <CheckRow on={peopleFilter === null} title="All People" sub={`All ${following.length} in your feed`} onToggle={() => setPeoplePicked(null)} />
              </ul>
              <ul className="log-list card sheet-list">
                {following.map((p) => {
                  // What this list can show of theirs: attended and watched lines inside the 60 days (Codex, stage 3).
                  const count = feed.filter((line) => line.friend.id === p.profile.id && line.kind !== 'planning' && line.date < today && line.date >= addDays(today, -SPAN_DAYS)).length;
                  return (
                    <CheckRow
                      key={p.profile.id}
                      on={peopleFilter === null || peopleFilter.has(p.profile.id)}
                      title={personName(p)}
                      sub={[p.profile.handle ? `@${p.profile.handle}` : null, `${count} in your feed`].filter(Boolean).join(' · ')}
                      onToggle={() => setPeoplePicked(toggleIn(peopleFilter, p.profile.id, peopleKeys))}
                    />
                  );
                })}
              </ul>
            </>
          )}
          <SheetHeading>Activity</SheetHeading>
          <div className="pill-row filter-pills" role="group" aria-label="Activity kinds">
            <button type="button" className="filter-chip" aria-pressed={kindsPicked === null} onClick={() => setKindsPicked(null)}>
              All
            </button>
            {KINDS.map((kind) => (
              <button key={kind} type="button" className="filter-chip" aria-pressed={kindsPicked !== null && kindsPicked.has(kind)} onClick={() => setKindsPicked(toggleIn(kindsPicked, kind, KINDS))}>
                {ACTIVITY_WORDS[kind]}
              </button>
            ))}
          </div>
        </FilterSheet>
      )}
    </div>
  );
}

function personName(p: Pick<PersonRow, 'profile'>): string {
  return p.profile.displayName ?? p.profile.handle ?? 'Someone';
}

/** Your own answers as feed lines: every past stub, Attended and Watched, with no date limit (M24). Plans are Upcoming's. */
function ownLines(log: ReturnType<typeof getPersonalLog>, today: string): OwnLine[] {
  return yourEntries(log)
    .filter((entry) => entry.when.precision === 'day' && entry.when.sort < today)
    .map((entry) => ({ kind: 'attended', friend: YOU, title: entry.title, date: entry.when.sort, venue: entry.venue, metroId: entry.metroId, eventId: entry.eventId, entry, ...(entry.watched ? { watched: true } : {}), ...(isManualEntry(entry) ? { ownId: entry.id } : {}) }));
}

/** Rows by their month band, newest first, each band's rows newest first too. */
function groupByMonth(items: readonly FollowItem[]): [string, FollowItem[]][] {
  const groups: [string, FollowItem[]][] = [];
  for (const item of items) {
    const group = timelineGroup({ sort: item.date, label: '', precision: 'day' });
    const last = groups[groups.length - 1];
    if (last && last[0] === group) last[1].push(item);
    else groups.push([group, [item]]);
  }
  return groups;
}

/** One row on the Activity timeline: an event and everyone's answers on it. */
interface FollowItem {
  key: string;
  title: string;
  date: string;
  venue?: string;
  metroId?: string;
  eventId?: string;
  people: FeedItem[];
  /** An attended entry behind a past row (yours first), for its read and type icon. */
  entry?: Entry;
  /** Your own hand-added stub behind the row: it opens its own page. */
  ownId?: string;
}

/** Your own lines carry a little more than a friend's: the row's own id. */
type OwnLine = FeedItem & { ownId?: string };

/**
 * Lines merged by event, newest first (M24): what was attended or watched, friends' from the last 60 days and all of
 * yours; a friend's plan ahead never comes here (it is Upcoming's). You first on a row.
 */
function mergeFeed(lines: readonly FeedItem[], today: string): FollowItem[] {
  const out = new Map<string, FollowItem>();
  const floor = addDays(today, -SPAN_DAYS);
  for (const line of lines) {
    if (line.kind === 'planning' || line.date >= today) continue;
    if (line.friend.id !== YOU.id && line.date < floor) continue;
    const key = line.eventId ?? `${line.metroId ?? ''}|${line.date}|${line.title.toLowerCase()}`;
    const item = out.get(key) ?? { key, title: line.title, date: line.date, venue: line.venue, metroId: line.metroId, eventId: line.eventId, people: [] };
    if (line.friend.id === YOU.id) {
      item.people.unshift(line);
      const own = line as OwnLine;
      if (own.ownId) item.ownId = own.ownId;
    } else item.people.push(line);
    if (line.entry && (!item.entry || line.friend.id === YOU.id)) item.entry = line.entry;
    out.set(key, item);
  }
  return [...out.values()].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

/** No verdict pill when nobody on the row attended (build 7.1, M23: Watched never counts). */
function nobodyAttended(item: FollowItem): boolean {
  return item.people.every((p) => feedKind(p) === 'watched');
}

function ratingFor(item: FollowItem, ratings: ReadonlyMap<string, number>): number | null {
  // An attended stub reads through its own entry; a watched one carries no verdict (M23), so a mixed row where someone
  // else attended falls through to the date's verdict.
  if (item.entry && !item.entry.watched) return ratingForEntry(item.entry, ratings);
  if (isFurtherOutRoom(item.metroId, item.venue)) return null;
  return item.metroId ? (ratings.get(nightKey(item.metroId, item.date)) ?? null) : null;
}

/** "You, Sam R. +2 attending · Priya watching"; one person reads as a sentence: "You attended", "Jo is interested". */
function peopleLine(items: readonly FeedItem[]): string {
  if (items.length === 1) {
    const only = items[0];
    if (only.friend.id === YOU.id) {
      const kind = feedKind(only);
      return kind === 'attended' ? 'You attended' : kind === 'watched' ? 'You watched' : kind === 'interested' ? "You're interested" : `You're ${kind}`;
    }
    return feedSentence(only).lead.replace(/ in$/, '');
  }
  // Grouped by kind in the ladder's order; you are known by id, never by a display name (a friend can be called "You").
  const byKind = new Map<ActivityKind, FeedItem[]>();
  for (const item of items) byKind.set(feedKind(item), [...(byKind.get(feedKind(item)) ?? []), item]);
  return KIND_ORDER.filter((kind) => byKind.has(kind))
    .map((kind) => {
      const people = byKind.get(kind)!;
      const word = ACTIVITY_WORDS[kind].toLowerCase();
      const you = people.some((p) => p.friend.id === YOU.id);
      const others = people.filter((p) => p.friend.id !== YOU.id).map((p) => p.friend.displayName ?? p.friend.handle ?? 'Someone');
      const names = you ? (others.length > 0 ? `You, ${others[0]}` : 'You') : others[0];
      const rest = others.length - 1;
      return `${names}${rest > 0 ? ` +${rest}` : ''} ${word}`;
    })
    .join(' · ');
}

function ActivityRow({ item, rating, back, home }: { item: FollowItem; rating: number | null; back: { to: string; label: string }; home: string }) {
  // Your own hand-added row opens its page; a stub logged "elsewhere" has no city, so nowhere to open.
  const to = item.ownId ? entryPath(item.ownId) : item.eventId && item.metroId ? eventPath(item.eventId, item.metroId) : item.metroId ? datePath(item.date, item.metroId) : undefined;
  const line = peopleLine(item.people);
  return (
    <FollowRow
      date={item.date}
      lead={{ icon: <PeopleIcon size={13} />, text: line }}
      title={item.title}
      // A feed line carries no start time, so the row says the venue alone.
      facts={item.venue ?? ''}
      to={to}
      state={{ back, ...friendStubState(item.eventId, { title: item.title, date: item.date, venue: item.venue, metroId: item.metroId, entry: item.entry }) }}
      rating={rating}
      readTo={isFurtherOutRoom(item.metroId, item.venue) ? null : readPath(item.date, item.metroId, item.eventId)}
      cityCode={item.metroId && item.metroId !== home ? METROS[item.metroId]?.code : null}
      noTile={nobodyAttended(item)}
      spoken={`${item.title}, ${line}`}
    />
  );
}
