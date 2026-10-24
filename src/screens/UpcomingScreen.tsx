import { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { SearchButton } from '../components/SearchButton';
import { BookmarkIcon, PeopleIcon, TicketIcon, TvIcon } from '../components/Icons';
import { ListBand } from '../components/ListBand';
import { FollowRow, LeadIcon, readPath } from '../components/FollowRow';
import { useFavoriteRows, type ScheduleRow } from '../components/useFavoriteRows';
import { useArtistGenres } from '../components/useArtistGenres';
import { CheckRow, FAVORITE_KINDS, FilterButton, FilterChips, FilterSheet, SheetHeading, favoriteSub, prunePicked, readPicked, toggleIn, writePicked, type Picked } from '../components/FilterSheet';
import { favPath } from './FavoritesScreen';
import { EditFavoritesSheet } from '../components/EditFavoritesSheet';
import { favoriteName } from '../components/FavoriteBadge';
import { friendStubState } from '../components/FeedRow';
import {
  answerSeasonPlayoff,
  favoriteDisplayName,
  favoriteKey,
  favoritesOf,
  followingFeedWithStatus,
  getAccount,
  getPersonalLog,
  getTeamSchedule,
  seasonPlanEventId,
  seasonPlayoffGames,
  seatShort,
  TEAMS,
  isFurtherOut,
  isFurtherOutRoom,
  isOutsideGame,
  isOutsideGamePlan,
  gameEventId,
  nightKey,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  type CrowdEvent,
  type Favorite,
  type FeedItem,
  type Plan,
  type TeamGame,
} from '../data';
import { addDays, clockTime, dayBandLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { ACTIVITY_WORDS, feedKind } from '../lib/activity';
import { favoriteTypeKey } from '../map/typeIcons';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath, entryPath, eventPath } from '../lib/view';
import { useEdgeFade } from '../lib/useEdgeFade';

/** Both lines of time reach 60 days each way (the notes' Q4 horizon; the past, Kylie, Oct 17). */
const SPAN_DAYS = 60;

type PlanKind = 'attending' | 'watching' | 'interested';
type DatePreset = 'all' | '7' | '30' | 'month' | 'custom';

/** The Upcoming filter (build 7, §3.3; mock 12). Session only, like Following's picks were, so it resets when the app closes. */
interface UpcomingFilter {
  dates: { preset: DatePreset; from?: string; to?: string };
  plans: boolean;
  faves: boolean;
  planKinds: PlanKind[] | null;
}

const DEFAULT_FILTER: UpcomingFilter = { dates: { preset: 'all' }, plans: true, faves: true, planKinds: null };
const FILTER_KEY = 'fan-friction:upcoming-filter';
const FAVES_KEY = 'fan-friction:following-faves-filter';

function readFilter(): UpcomingFilter {
  try {
    const raw = sessionStorage.getItem(FILTER_KEY);
    const saved = raw ? (JSON.parse(raw) as Partial<UpcomingFilter> | null) : null;
    if (!saved || typeof saved !== 'object') return DEFAULT_FILTER;
    // Stored JSON is checked piece by piece (Codex, stage 3): a bad piece falls back, and one of the two Show rows stays on.
    const presets: DatePreset[] = ['all', '7', '30', 'month', 'custom'];
    const dates = saved.dates && typeof saved.dates === 'object' && presets.includes(saved.dates.preset) ? saved.dates : DEFAULT_FILTER.dates;
    const plans = typeof saved.plans === 'boolean' ? saved.plans : true;
    const faves = typeof saved.faves === 'boolean' ? saved.faves : true;
    const kinds: PlanKind[] = ['attending', 'watching', 'interested'];
    const planKinds = Array.isArray(saved.planKinds) ? saved.planKinds.filter((k): k is PlanKind => kinds.includes(k)) : null;
    return { dates, plans: plans || !faves ? true : plans, faves: faves || !plans ? true : faves, planKinds: planKinds && planKinds.length > 0 && planKinds.length < kinds.length ? planKinds : null };
  } catch {
    return DEFAULT_FILTER;
  }
}

function planKind(plan: Plan): PlanKind {
  return plan.interested ? 'interested' : plan.watch ? 'watching' : 'attending';
}

const PLAN_WORDS: Record<PlanKind, string> = { attending: 'Attending', watching: 'Watching', interested: 'Interested' };

/** The plans window shows three full rows and half the fourth (item 16, Locked: 3.5 rows at the drawn ~69pt); the start value before the rows are measured. */
const PLANS_WINDOW_PX = 240;
/** The window scrolls inside itself only past this many plans; with fewer the box is as tall as its rows (mock 28). */
const PLANS_WINDOW_ROWS = 3;

/**
 * Upcoming (build 7, §3.3; Kylie, Oct 21, 2026: "faves should just be renamed to upcoming"; mocks 08–15; build 7.1,
 * M22 and items 1, 3, 5, 10, 11, 16, Kylie, Oct 23, 2026): what you plan and what you follow, future only. Top to
 * bottom: the YOUR PLANS band (its count when the box scrolls), the plans window (a 240pt box that scrolls inside
 * itself past three plans, season games included; a swipe that starts outside it moves the page), the helper line
 * until three plans, the Today divider, then the sticky YOUR FAVES band over the followed teams, artists and venues
 * by month, with friends' upcoming plans in the same dated list as "Friends · {name} Attending" rows (or a line under
 * the fave's row for the same event). A fave's game that is also a plan carries the plan's small mark. Nothing from
 * before today shows (history is You, Your Stubs and Activity). The filter button sits beside search at search's
 * size; its sheet is Dates, Show, Faves. Rows carry no log buttons (Kylie, Oct 22): they open the event page.
 */
export function UpcomingScreen() {
  const chipRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const genres = useArtistGenres(favorites);
  const [sheet, setSheet] = useState(false);
  const [editingFaves, setEditingFaves] = useState(false);
  const [filter, setFilterState] = useState<UpcomingFilter>(readFilter);
  const setFilter = (next: UpcomingFilter) => {
    setFilterState(next);
    try {
      sessionStorage.setItem(FILTER_KEY, JSON.stringify(next));
    } catch {
      /* storage blocked */
    }
  };
  const [favPicked, setFavPickedState] = useState<Picked>(() => readPicked(FAVES_KEY));
  const setFavPicked = (next: Picked) => {
    setFavPickedState(next);
    writePicked(FAVES_KEY, next);
  };
  const favKeys = favorites.map(favoriteKey);
  const favFilter = useMemo(() => prunePicked(favPicked, favKeys), [favPicked, favKeys.join('|')]);

  // Future only (M22): no past rows, so nothing to reach by scrolling up and no Today pill.
  const { rows, today, events: listed } = useFavoriteRows(favorites, home, SPAN_DAYS, 0);
  const listedById = useMemo(() => new Map(listed.map((e) => [e.id, e])), [listed]);
  // A schedule-only game's start, from the fave's loaded schedule, for plans the catalog window does not hold (Codex, stage 3).
  const startByGame = useMemo(() => new Map(rows.flatMap((row) => (row.link && row.start ? [[row.link.game.eventId ?? gameEventId(row.link.game), row.start] as const] : []))), [rows]);
  const plans = useMemo(() => log.plans.filter((plan) => plan.date >= today).sort((a, b) => a.date.localeCompare(b.date) || (planStart(a, listedById, startByGame) ?? '99').localeCompare(planStart(b, listedById, startByGame) ?? '99') || a.title.localeCompare(b.title)), [log, today, listedById, startByGame]);

  // Friends' upcoming plans (M22, item 1): what the feed already returns for approved followees, Interested included;
  // the privacy level is applied inside that read, exactly as Activity's was.
  // The feed already keeps a plan from its own city's today on, so no second cutoff by home's date here (Codex, stage 3).
  const [friendPlans, setFriendPlans] = useState<FeedItem[]>([]);
  const [friendsNote, setFriendsNote] = useState<string | null>(null);
  useEffect(() => {
    let current = true;
    setFriendsNote(null);
    if (!account) {
      setFriendPlans([]);
      return;
    }
    followingFeedWithStatus(300)
      .then((result) => {
        if (!current) return;
        setFriendPlans(result.items.filter((line) => line.kind === 'planning'));
        if (result.plansFailed) setFriendsNote("Couldn't load your friends' plans. Try again later.");
      })
      .catch(() => {
        if (!current) return;
        setFriendPlans([]);
        setFriendsNote("Couldn't load your friends' plans. Try again later.");
      });
    return () => {
      current = false;
    };
  }, [account?.id]);

  // Season tickets (item 15): each season team's schedule, for the home playoff card above Your Plans (20-r2).
  const seasonTeamIds = (log.seasonTickets ?? []).filter((t) => t.on).map((t) => t.teamId).join(',');
  const [seasonSchedules, setSeasonSchedules] = useState<Map<string, TeamGame[]>>(new Map());
  useEffect(() => {
    let current = true;
    const ids = seasonTeamIds ? seasonTeamIds.split(',') : [];
    Promise.all(ids.map(async (teamId) => [teamId, (await getTeamSchedule(teamId)) ?? []] as const)).then((pairs) => current && setSeasonSchedules(new Map(pairs)));
    return () => {
      current = false;
    };
  }, [seasonTeamIds]);
  // The earliest unanswered home playoff game across every season team (Codex, steps 9–10: it took the first team's).
  const playoff = useMemo(() => {
    const open: { teamId: string; game: TeamGame }[] = [];
    for (const ticket of log.seasonTickets ?? []) {
      if (!ticket.on) continue;
      for (const g of seasonPlayoffGames(seasonSchedules.get(ticket.teamId) ?? [])) {
        if (g.date >= today && !(ticket.declined ?? []).includes(g.id) && !log.plans.some((plan) => plan.eventId === seasonPlanEventId(g))) open.push({ teamId: ticket.teamId, game: g });
      }
    }
    open.sort((a, b) => (a.game.date + (a.game.start ?? '99')).localeCompare(b.game.date + (b.game.start ?? '99')));
    return open[0] ?? null;
  }, [log, seasonSchedules, today]);

  // The date range the filter asks for; "All upcoming" is no range at all, so the past stays above the line.
  const range = useMemo(() => dateRange(filter.dates, today), [filter.dates, today]);
  const inRange = (date: string) => !range || (date >= range.from && (!range.to || date <= range.to));

  const shownPlans = filter.plans ? plans.filter((plan) => inRange(plan.date) && (filter.planKinds === null || filter.planKinds.includes(planKind(plan)))) : [];
  const shownRows = filter.faves ? rows.filter((row) => inRange(row.date) && (favFilter === null || favFilter.has(favoriteKey(row.fav)))) : [];

  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    scoresForNights([
      ...shownRows.flatMap((row) => (row.metroId ? [{ metroId: row.metroId, date: row.date }] : [])),
      ...shownPlans.map((plan) => ({ metroId: plan.metroId, date: plan.date })),
      ...friendPlans.flatMap((line) => (line.metroId ? [{ metroId: line.metroId, date: line.date }] : [])),
    ]).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [rows, plans, friendPlans, filter, favFilter]);

  // What the filter button counts and the chip row names: one chip per thing picked.
  const chips: { key: string; label: string }[] = [];
  if (filter.dates.preset !== 'all') chips.push({ key: 'dates', label: dateLabel(filter.dates) });
  if (!filter.plans || !filter.faves) chips.push({ key: 'show', label: filter.plans ? 'Your plans only' : 'Faves only' });
  if (filter.plans && filter.planKinds !== null) chips.push({ key: 'kinds', label: filter.planKinds.map((k) => PLAN_WORDS[k]).join(' / ') });
  if (filter.faves && favFilter !== null) for (const key of favFilter) {
    const fav = favorites.find((f) => favoriteKey(f) === key);
    if (fav) chips.push({ key: `fav:${key}`, label: favoriteDisplayName(fav) });
  }
  const drop = (key: string) => {
    if (key === 'dates') setFilter({ ...filter, dates: { preset: 'all' } });
    else if (key === 'show') setFilter({ ...filter, plans: true, faves: true });
    else if (key === 'kinds') setFilter({ ...filter, planKinds: null });
    else if (key.startsWith('fav:')) setFavPicked(toggleIn(favFilter, key.slice(4), favKeys));
  };
  const clear = () => {
    setFilter(DEFAULT_FILTER);
    setFavPicked(null);
  };

  // Which fave rows are also plans (item 16, option A): by the event's id, or the schedule game's.
  const planByEvent = useMemo(() => new Map(plans.filter((p) => p.eventId).map((p) => [p.eventId as string, p])), [plans]);
  const rowEventId = (row: ScheduleRow) => row.event?.id ?? (row.link ? (row.link.game.eventId ?? gameEventId(row.link.game)) : undefined);

  // Friends' plans on the same event as a fave's row become its quiet line; the rest are rows of their own (M22).
  const friendsByEvent = new Map<string, FeedItem[]>();
  const friendRows: FeedItem[][] = [];
  const rowEventIds = new Set(shownRows.map(rowEventId).filter(Boolean) as string[]);
  const byKey = new Map<string, FeedItem[]>();
  for (const line of friendPlans) {
    const key = line.eventId ?? `${line.metroId ?? ''}|${line.date}|${line.title.toLowerCase()}`;
    byKey.set(key, [...(byKey.get(key) ?? []), line]);
  }
  for (const [key, lines] of byKey) {
    if (rowEventIds.has(key)) friendsByEvent.set(key, lines);
    else friendRows.push(lines);
  }

  type Dated = { key: string; date: string; start: string | null; node: ReactNode };
  const faveItems: Dated[] = filter.faves
    ? shownRows.map((row) => {
        const id = rowEventId(row);
        const plan = id ? planByEvent.get(id) : undefined;
        return {
          key: row.key,
          date: row.date,
          start: row.start,
          node: (
            <FaveRow
              row={row}
              rating={row.metroId && !(row.event && isFurtherOut(row.event)) ? (ratings.get(nightKey(row.metroId, row.date)) ?? null) : null}
              home={home.id}
              mark={plan ? planIcon(planKind(plan)) : null}
              line={id && friendsByEvent.has(id) ? friendsLineText(friendsByEvent.get(id)!) : null}
            />
          ),
        };
      })
    : [];
  const friendItems: Dated[] = filter.faves
    ? friendRows.filter((lines) => inRange(lines[0].date)).map((lines) => {
        const line = lines[0];
        const event = line.eventId ? listedById.get(line.eventId) : undefined;
        return {
          key: `friends:${line.eventId ?? `${line.metroId}|${line.date}|${line.title}`}`,
          date: line.date,
          start: event?.start ?? null,
          node: <FriendRow lines={lines} event={event} rating={line.metroId ? (ratings.get(nightKey(line.metroId, line.date)) ?? null) : null} home={home.id} />,
        };
      })
    : [];
  const dated = [...faveItems, ...friendItems].sort((a, b) => a.date.localeCompare(b.date) || (a.start ?? '99').localeCompare(b.start ?? '99'));
  const months: [string, Dated[]][] = [];
  for (const item of dated) {
    const group = timelineGroup({ sort: item.date, label: '', precision: 'day' });
    const last = months[months.length - 1];
    if (last && last[0] === group) last[1].push(item);
    else months.push([group, [item]]);
  }

  // The plans window (item 16): the box is capped past three plans, and the cues (count, fades, end line) come on only
  // when the rows really overrun the cap, measured, not counted (Codex, stage 3). Where it is comes from its scroll.
  const windowCapped = shownPlans.length > PLANS_WINDOW_ROWS;
  const box = useRef<HTMLDivElement>(null);
  const planList = useRef<HTMLUListElement>(null);
  const [listHeight, setListHeight] = useState(0);
  // The window is three full plan rows and half the fourth (item 16, Locked: 3.5 rows), measured from the rows
  // themselves, so a taller season row or a month label inside still leaves half a row showing (Codex, steps 9–10).
  const [windowPx, setWindowPx] = useState(PLANS_WINDOW_PX);
  const windowScrolls = windowCapped && listHeight > windowPx;
  const [boxAt, setBoxAt] = useState<'top' | 'middle' | 'end'>('top');
  const onBoxScroll = () => {
    const el = box.current;
    if (!el) return;
    const atEnd = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
    setBoxAt(el.scrollTop <= 2 ? 'top' : atEnd ? 'end' : 'middle');
  };
  useLayoutEffect(() => {
    const list = planList.current;
    const measure = () => {
      setListHeight(list ? Math.round(list.getBoundingClientRect().height) : 0);
      const rows = list ? ([...list.children].filter((li) => !li.classList.contains('plans-window-month')) as HTMLElement[]) : [];
      const fourth = rows[PLANS_WINDOW_ROWS];
      if (fourth) setWindowPx(Math.round(fourth.offsetTop + fourth.offsetHeight / 2));
      // The box may come back at its top after a filter or a remount: the cues follow where it really is.
      onBoxScroll();
    };
    measure();
    // Rows that change height (a month label appearing once the box scrolls, a title loading) measure again (Codex, 11 (c)).
    if (!list || typeof ResizeObserver === 'undefined') return;
    const watch = new ResizeObserver(measure);
    watch.observe(list);
    return () => watch.disconnect();
  }, [shownPlans.length, windowCapped, windowScrolls]);
  // The YOUR FAVES band pins at the top of the scroll area once the box is gone, with the month band under it
  // (mock 30): the month bands' sticky offset is the band's measured height, watched for changes.
  const scroller = useRef<HTMLDivElement>(null);
  const favesBand = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = scroller.current;
    const band = favesBand.current;
    if (!el || !band) return;
    const apply = () => el.style.setProperty('--faves-band-h', `${Math.round(band.getBoundingClientRect().height)}px`);
    apply();
    if (typeof ResizeObserver === 'undefined') return;
    const watch = new ResizeObserver(apply);
    watch.observe(band);
    return () => watch.disconnect();
  });

  const planRows: ReactNode[] = [];
  let lastMonth = '';
  for (const plan of shownPlans) {
    const month = timelineGroup({ sort: plan.date, label: '', precision: 'day' });
    // Slim month labels inside the window when the month changes (item 16).
    if (windowScrolls && lastMonth && month !== lastMonth) planRows.push(<li key={`m:${month}`} className="plans-window-month">{month}</li>);
    lastMonth = month;
    planRows.push(
      <li key={plan.id}>
        <PlanBandRow plan={plan} event={plan.eventId ? listedById.get(plan.eventId) : undefined} start={planStart(plan, listedById, startByGame)} favorites={favorites} rating={ratings.get(nightKey(plan.metroId, plan.date)) ?? null} home={home.id} />
      </li>,
    );
  }

  return (
    <div className="screen page timeline-page">
      <div className="you-header">
        <h1 className="page-title">Upcoming</h1>
        <span className="header-actions">
          <FilterButton count={chips.length} open={sheet} onClick={() => setSheet(true)} label="Filter Upcoming" />
          <SearchButton />
        </span>
      </div>
      <FilterChips chips={chips} onDrop={drop} onClear={clear} scrollRef={chipRow} />
      {dated.length === 0 && shownPlans.length === 0 && chips.length > 0 ? (
        <div className="card empty-card following-empty">
          <div className="card-title">Nothing matches this filter in the next {SPAN_DAYS} days.</div>
          <button type="button" className="following-empty-link" onClick={clear}>
            Show everything <span aria-hidden>›</span>
          </button>
        </div>
      ) : (
        <div className="timeline-body">
          <div ref={scroller} className="timeline-scroll upcoming-scroll" aria-label="Upcoming">
            {playoff && filter.plans && (
              <section className="card playoff-card" aria-label="Home playoff game set">
                <span className="follow-lead playoff-lead">
                  <TicketIcon size={13} />
                  <span className="follow-lead-text">Season Tickets · Playoffs</span>
                </span>
                <h2 className="playoff-title">Home Playoff Game Set</h2>
                <p className="playoff-sub">{[`${playoff.game.opponent} at ${TEAMS[playoff.teamId]?.shortName ?? playoff.teamId}`, [playoff.game.stakes?.round, playoff.game.stakes?.game ? `Game ${playoff.game.stakes.game}` : null].filter(Boolean).join(' '), shortLocalDate(playoff.game.date)].filter(Boolean).join(' · ')}</p>
                <div className="playoff-actions">
                  <button type="button" className="gold-button small" onClick={() => answerSeasonPlayoff(playoff.teamId, playoff.game, true)}>
                    Add as Attending
                  </button>
                  <button type="button" className="season-outline-button" onClick={() => answerSeasonPlayoff(playoff.teamId, playoff.game, false)}>
                    Not this one
                  </button>
                </div>
                <p className="you-fine playoff-note">Seat prefilled from your default; no price (playoffs are billed apart).</p>
              </section>
            )}
            {filter.plans && (
              <section className="upcoming-plans" aria-label="Your Plans">
                {/* The 44pt band strip: a full touch target above the box; the count only when the box scrolls (item 16). */}
                <div className="upcoming-plans-band">
                  <ListBand as="h2" label={windowScrolls ? `Your Plans · ${shownPlans.length}` : 'Your Plans'} />
                </div>
                {shownPlans.length > 0 ? (
                  <div className={`plans-window-frame${windowScrolls ? ` scrolls at-${boxAt}` : ''}`}>
                    <div ref={box} className="plans-window" style={windowCapped ? { maxHeight: windowPx } : undefined} onScroll={windowCapped ? onBoxScroll : undefined}>
                      <ul ref={planList} className="log-list plans-band-list">{planRows}</ul>
                      {windowScrolls && <p className="plans-window-end">End of your plans</p>}
                    </div>
                  </div>
                ) : plans.length > 0 ? (
                  <p className="you-fine plans-band-note">No plans match the filter.</p>
                ) : (
                  // The empty line always shows, even with no Faves and no plans (item 3; Kylie, Oct 23, 2026).
                  <div className="card plans-band-empty">
                    <BookmarkIcon size={16} />
                    <span>No upcoming plans. Mark events Attending, Watching, or Interested.</span>
                  </div>
                )}
                {plans.length < 3 && plans.length > 0 && <p className="you-fine plans-band-note">Events you marked Attending, Watching, or Interested. Attending and Watching become stubs in You once they happen.</p>}
                {favorites.length === 0 && (
                  <div className="card empty-card following-empty upcoming-add-fave">
                    <div className="card-title">No Faves yet</div>
                    <p className="following-empty-sub">Follow a team, artist, or venue to see their games and shows here.</p>
                    <button type="button" className="following-empty-button" onClick={() => setEditingFaves(true)}>
                      Add a Fave
                    </button>
                  </div>
                )}
              </section>
            )}
            {/* The Today divider, with room above and below (item 16: about 22pt; a swipe here moves the page). */}
            <div className="today-line upcoming-today">
              <h3 className="today-line-label">{dayBandLabel(today, today)}</h3>
            </div>
            {friendsNote && (
              <p className="you-fine" role="status">
                {friendsNote}
              </p>
            )}
            {/* Friends' rows stand on their own: the dated list shows with no Faves at all when friends have plans (Codex, stage 3). */}
            {filter.faves && (favorites.length > 0 || friendItems.length > 0) && (
              <section className="upcoming-faves" aria-label="Your Faves">
                <div ref={favesBand} className="upcoming-faves-band">
                  <ListBand as="h2" label="Your Faves" />
                </div>
                {months.length === 0 ? (
                  <div className="card empty-card">
                    <div className="card-title">Nothing from your Faves in the next {SPAN_DAYS} days.</div>
                  </div>
                ) : (
                  months.map(([group, items]) => (
                    <section key={group} className="timeline-group upcoming-month" aria-label={group}>
                      <ListBand label={group} />
                      <ul className="log-list">
                        {items.map((item) => (
                          <li key={item.key}>{item.node}</li>
                        ))}
                      </ul>
                    </section>
                  ))
                )}
              </section>
            )}
          </div>
        </div>
      )}
      {sheet && (
        <UpcomingFilterSheet
          filter={filter}
          onFilter={setFilter}
          favorites={favorites}
          genres={genres}
          favPicked={favFilter}
          onFavPicked={setFavPicked}
          today={today}
          onReset={clear}
          onClose={() => setSheet(false)}
          onManage={() => {
            setSheet(false);
            setEditingFaves(true);
          }}
        />
      )}
      {editingFaves && <EditFavoritesSheet onClose={() => setEditingFaves(false)} />}
    </div>
  );
}

/** The plan's icon: ticket for Attending, TV for Watching, bookmark for Interested (the Stub it sheet's own). */
function planIcon(kind: PlanKind): ReactNode {
  return kind === 'attending' ? <TicketIcon size={13} /> : kind === 'watching' ? <TvIcon /> : <BookmarkIcon size={13} />;
}

/** A plan's start time: the listing's when the app holds it, else the fave's schedule game's, else what a hand-typed plan carries. */
function planStart(plan: Plan, listed: ReadonlyMap<string, CrowdEvent>, byGame: ReadonlyMap<string, string>): string | null {
  return (plan.eventId ? (listed.get(plan.eventId)?.start ?? byGame.get(plan.eventId)) : undefined) ?? plan.manual?.start ?? null;
}

/**
 * "Friends · Sam R. Attending", "Friends · Sam R., Jo Attending · Priya Watching" (M22): the people by status, in the
 * ladder's order, the status words Title Case (Activity's sentences lowercase theirs; this is a label).
 */
function friendsLineText(lines: readonly FeedItem[]): string {
  const order: PlanKind[] = ['attending', 'watching', 'interested'];
  const parts = order.flatMap((kind) => {
    const names = lines.filter((line) => feedKind(line) === kind).map((line) => line.friend.displayName ?? line.friend.handle ?? 'Someone');
    return names.length ? [`${names.join(', ')} ${ACTIVITY_WORDS[kind]}`] : [];
  });
  return `Friends · ${parts.join(' · ')}`;
}

/** A friend's plan with no fave row of its own (M22): the Friends line leads, then the event, its time and venue. */
function FriendRow({ lines, event, rating, home }: { lines: readonly FeedItem[]; event?: CrowdEvent; rating: number | null; home: string }) {
  const line = lines[0];
  const to = line.eventId && line.metroId ? eventPath(line.eventId, line.metroId) : line.metroId ? datePath(line.date, line.metroId) : undefined;
  // A friend's schedule-only game at a building outside the covered cities carries no verdict, as your own plan would
  // (Codex, stage 3); a further-out room's tile is plain.
  const outside = isOutsideGame(line.eventId, line.metroId, line.venue);
  const noRead = outside || !line.metroId || isFurtherOutRoom(line.metroId, line.venue);
  const city = line.metroId && line.metroId !== home ? METROS[line.metroId]?.name : null;
  const text = friendsLineText(lines);
  return (
    <FollowRow
      date={line.date}
      lead={{ icon: <PeopleIcon size={13} />, text }}
      title={event ? listTitle(event) : line.title}
      facts={[event?.start ? clockTime(event.start) : null, line.venue, city].filter(Boolean).join(' · ')}
      to={to}
      state={friendStubState(line.eventId, { title: line.title, date: line.date, venue: line.venue, metroId: line.metroId })}
      rating={noRead ? null : rating}
      readTo={noRead ? null : readPath(line.date, line.metroId, line.eventId)}
      away={outside ? 'Away' : undefined}
      cityCode={line.metroId && line.metroId !== home ? METROS[line.metroId]?.code : null}
      spoken={`${text}, ${event ? listTitle(event) : line.title}, ${shortLocalDate(line.date)}`}
    />
  );
}

/**
 * A plan in the window: the status leads, with the favorite's short name when the plan's event is a favorite's by id
 * ("Attending · UCLA FB"; item 11, never guessed from the title), then the title, the start time and venue (item 10),
 * the date's read; no log button (Kylie, Oct 22, 2026).
 */
function PlanBandRow({ plan, event, start, favorites, rating, home }: { plan: Plan; event?: CrowdEvent; start: string | null; favorites: readonly Favorite[]; rating: number | null; home: string }) {
  const kind = planKind(plan);
  const icon = planIcon(kind);
  const to = plan.manual && !plan.eventId ? entryPath(plan.id) : plan.eventId ? eventPath(plan.eventId, plan.metroId) : datePath(plan.date, plan.metroId);
  const noRead = isOutsideGamePlan(plan) || isFurtherOutRoom(plan.metroId, plan.venue);
  const city = plan.metroId !== home ? METROS[plan.metroId]?.name : null;
  // A favorite linked by id: a team on either side, else the venue itself (Codex, stage 3); never a name match.
  const venueId = event?.place.type === 'venue' ? event.place.venueId : undefined;
  const fave =
    (event?.teams ? favorites.find((f) => f.teamId && (f.teamId === event.teams!.home || f.teamId === event.teams!.away)) : undefined) ??
    (venueId ? favorites.find((f) => f.venueId === venueId) : undefined);
  return (
    <FollowRow
      date={plan.date}
      lead={{ icon, text: fave ? `${PLAN_WORDS[kind]} · ${favoriteDisplayName(fave)}` : PLAN_WORDS[kind], ...(plan.season ? { tag: plan.season.gone ? 'Not on the schedule' : 'Season' } : {}) }}
      title={plan.title}
      // A season game's row carries its seat (item 15; 20-r2): "7:10 pm · Dodger Stadium · Sec 48".
      facts={[start ? clockTime(start) : null, plan.venue, city, plan.season ? seatShort(plan.seats) || null : null].filter(Boolean).join(' · ')}
      to={to}
      rating={noRead ? null : rating}
      readTo={noRead ? null : readPath(plan.date, plan.metroId, plan.eventId)}
      away={noRead && isOutsideGamePlan(plan) ? 'Away' : undefined}
      cityCode={plan.metroId !== home ? METROS[plan.metroId]?.code : null}
      spoken={`${PLAN_WORDS[kind]}, ${plan.title}, ${shortLocalDate(plan.date)}`}
    />
  );
}

/** A Fave's row: the icon and display name lead (a link to its page), the title from its side, time and venue; a plan mark and a friends line when they apply. */
function FaveRow({ row, rating, home, mark, line }: { row: ScheduleRow; rating: number | null; home: string; mark?: ReactNode; line?: string | null }) {
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
      // A further-out event's tile is plain, with no tap (Kylie, Oct 20, 2026).
      readTo={row.away || (row.event && isFurtherOut(row.event)) ? null : readPath(row.date, row.metroId, row.event?.id)}
      away={row.noRead}
      cityCode={row.metroId && row.metroId !== home ? METROS[row.metroId]?.code : null}
      mark={mark}
      line={line}
      spoken={`${favoriteName(row.fav)}, ${row.title}, ${shortLocalDate(row.date)}${mark ? ', in your plans' : ''}`}
    />
  );
}

function dateRange(dates: UpcomingFilter['dates'], today: string): { from: string; to?: string } | null {
  switch (dates.preset) {
    case 'all':
      return null;
    case '7':
      return { from: today, to: addDays(today, 7) };
    case '30':
      return { from: today, to: addDays(today, 30) };
    case 'month':
      return { from: today, to: `${today.slice(0, 7)}-31` };
    case 'custom':
      return { from: dates.from || today, to: dates.to || undefined };
  }
}

function dateLabel(dates: UpcomingFilter['dates']): string {
  switch (dates.preset) {
    case '7':
      return 'Next 7 days';
    case '30':
      return 'Next 30 days';
    case 'month':
      return 'This month';
    case 'custom':
      return [dates.from && shortLocalDate(dates.from), dates.to && shortLocalDate(dates.to)].filter(Boolean).join(' – ') || 'Dates';
    default:
      return 'All upcoming';
  }
}

const PLAN_KINDS: PlanKind[] = ['attending', 'watching', 'interested'];

/** The Filter upcoming sheet (mock 12, Lean): Dates first, Show, Faves checklist, Manage faves ›. Changes apply as tapped. */
function UpcomingFilterSheet({
  filter,
  onFilter,
  favorites,
  genres,
  favPicked,
  onFavPicked,
  today,
  onReset,
  onClose,
  onManage,
}: {
  filter: UpcomingFilter;
  onFilter: (next: UpcomingFilter) => void;
  favorites: readonly Favorite[];
  genres: ReadonlyMap<string, string>;
  favPicked: Picked;
  onFavPicked: (next: Picked) => void;
  today: string;
  onReset: () => void;
  onClose: () => void;
  onManage: () => void;
}) {
  const keys = favorites.map(favoriteKey);
  const presets: { id: DatePreset; label: string }[] = [
    { id: 'all', label: 'All upcoming' },
    { id: '7', label: 'Next 7 days' },
    { id: '30', label: 'Next 30 days' },
    { id: 'month', label: 'This month' },
  ];
  const kinds = filter.planKinds;
  const toggleKind = (kind: PlanKind) => {
    if (kinds === null) return onFilter({ ...filter, planKinds: [kind] });
    const next = kinds.includes(kind) ? kinds.filter((k) => k !== kind) : [...kinds, kind];
    onFilter({ ...filter, planKinds: next.length === 0 || next.length === PLAN_KINDS.length ? null : next });
  };
  const shownCount = favPicked === null ? favorites.length : [...favPicked].filter((k) => keys.includes(k)).length;
  return (
    <FilterSheet title="Filter Upcoming" onReset={onReset} onClose={onClose}>
      <SheetHeading>Dates</SheetHeading>
      <div className="filter-dates">
        <label className="seat-field">
          <span className="seat-field-label">From</span>
          <input
            type="date"
            className="account-input"
            value={filter.dates.preset === 'custom' ? (filter.dates.from ?? '') : ''}
            placeholder="Today"
            onChange={(ev) => onFilter({ ...filter, dates: { preset: 'custom', from: ev.target.value || today, to: filter.dates.preset === 'custom' ? filter.dates.to : undefined } })}
          />
        </label>
        <label className="seat-field">
          <span className="seat-field-label">To</span>
          <input
            type="date"
            className="account-input"
            value={filter.dates.preset === 'custom' ? (filter.dates.to ?? '') : ''}
            placeholder="Any"
            onChange={(ev) => onFilter({ ...filter, dates: { preset: 'custom', from: filter.dates.preset === 'custom' ? filter.dates.from : today, to: ev.target.value || undefined } })}
          />
        </label>
      </div>
      <div className="pill-row filter-pills" role="group" aria-label="Date presets">
        {presets.map((p) => (
          <button key={p.id} type="button" className="filter-chip" aria-pressed={filter.dates.preset === p.id} onClick={() => onFilter({ ...filter, dates: { preset: p.id } })}>
            {p.label}
          </button>
        ))}
      </div>

      <SheetHeading>Show</SheetHeading>
      <ul className="log-list card sheet-list">
        {/* One of the two always stays on: unchecking the last one checks the other. */}
        <CheckRow on={filter.plans} title="Your Plans" sub="Attending, Watching, and Interested" onToggle={() => onFilter({ ...filter, plans: !filter.plans, faves: filter.plans ? true : filter.faves })} />
        <CheckRow on={filter.faves} title="Faves" sub="Games and shows from what you follow" onToggle={() => onFilter({ ...filter, faves: !filter.faves, plans: filter.faves ? true : filter.plans })} />
      </ul>
      {filter.plans && (
        <div className="pill-row filter-pills" role="group" aria-label="Plan kinds">
          <button type="button" className="filter-chip" aria-pressed={kinds === null} onClick={() => onFilter({ ...filter, planKinds: null })}>
            All plans
          </button>
          {PLAN_KINDS.map((kind) => (
            <button key={kind} type="button" className="filter-chip" aria-pressed={kinds !== null && kinds.includes(kind)} onClick={() => toggleKind(kind)}>
              {PLAN_WORDS[kind]}
            </button>
          ))}
        </div>
      )}

      {filter.faves && favorites.length > 0 && (
        <>
          <SheetHeading>Faves</SheetHeading>
          <ul className="log-list card sheet-list">
            <CheckRow on={favPicked === null} title="All Faves" sub={favPicked === null ? `All ${favorites.length} on Upcoming` : `${shownCount} of ${favorites.length} on Upcoming`} onToggle={() => onFavPicked(null)} />
          </ul>
          {FAVORITE_KINDS.map(({ kind, label }) => {
            const list = favorites.filter((f) => f.kind === kind).sort((a, b) => favoriteDisplayName(a).localeCompare(favoriteDisplayName(b)));
            if (list.length === 0) return null;
            return (
              <section key={kind} className="you-block" aria-label={label}>
                <SheetHeading>
                  {label} · {list.length}
                </SheetHeading>
                <ul className="log-list card sheet-list">
                  {list.map((fav) => {
                    const key = favoriteKey(fav);
                    return <CheckRow key={key} on={favPicked === null || favPicked.has(key)} title={favoriteDisplayName(fav)} sub={favoriteSub(fav, genres)} onToggle={() => onFavPicked(toggleIn(favPicked, key, keys))} />;
                  })}
                </ul>
              </section>
            );
          })}
        </>
      )}
      {/* Opens the Edit favorites sheet directly (the mock's note said Profile & Settings; superseded). */}
      <button type="button" className="filter-sheet-link link-button" onClick={onManage}>
        Manage faves <span aria-hidden>›</span>
      </button>
    </FilterSheet>
  );
}
