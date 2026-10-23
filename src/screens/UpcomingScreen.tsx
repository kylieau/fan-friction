import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { SearchButton } from '../components/SearchButton';
import { BookmarkIcon, TicketIcon, TvIcon } from '../components/Icons';
import { Timeline, type TimelineItem } from '../components/Timeline';
import { FollowRow, LeadIcon, readPath } from '../components/FollowRow';
import { useFavoriteRows, type ScheduleRow } from '../components/useFavoriteRows';
import { useArtistGenres } from '../components/useArtistGenres';
import { CheckRow, FAVORITE_KINDS, FilterButton, FilterChips, FilterSheet, SheetHeading, favoriteSub, prunePicked, readPicked, toggleIn, writePicked, type Picked } from '../components/FilterSheet';
import { favPath } from './FavoritesScreen';
import { favoriteName } from '../components/FavoriteBadge';
import {
  favoriteDisplayName,
  favoriteKey,
  favoritesOf,
  getPersonalLog,
  isFurtherOut,
  isFurtherOutRoom,
  isOutsideGamePlan,
  gameEventId,
  nightKey,
  scoresForNights,
  subscribePersonalLog,
  type Favorite,
  type Plan,
} from '../data';
import { addDays, dayBandLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { favoriteTypeKey } from '../map/typeIcons';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath, entryPath, eventPath } from '../lib/view';
import { getPref, setPref } from '../lib/prefs';
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

/**
 * Upcoming (build 7, §3.3; Kylie, Oct 21, 2026: "faves should just be renamed to upcoming"; mocks 08–15): what you
 * follow and what you plan, as one line of time. A "Your plans" band sits on top (Attending, Watching, Interested);
 * below it the today line, then the followed teams, artists and venues by month, the past above by scrolling up.
 * The filter button sits beside search at search's size; its sheet is Dates, Show, Faves. Rows carry no log
 * buttons (Kylie, Oct 22): they open the event page, where "+ Stub it" lives.
 */
export function UpcomingScreen() {
  const chipRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const genres = useArtistGenres(favorites);
  const [sheet, setSheet] = useState(false);
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

  const { rows, today } = useFavoriteRows(favorites, home, SPAN_DAYS, SPAN_DAYS);
  const plans = useMemo(() => log.plans.filter((plan) => plan.date >= today).sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title)), [log, today]);

  // The date range the filter asks for; "All upcoming" is no range at all, so the past stays above the line.
  const range = useMemo(() => dateRange(filter.dates, today), [filter.dates, today]);
  const inRange = (date: string) => !range || (date >= range.from && (!range.to || date <= range.to));

  const shownPlans = filter.plans ? plans.filter((plan) => inRange(plan.date) && (filter.planKinds === null || filter.planKinds.includes(planKind(plan)))) : [];
  const shownRows = filter.faves ? rows.filter((row) => inRange(row.date) && (favFilter === null || favFilter.has(favoriteKey(row.fav)))) : [];

  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    scoresForNights([...shownRows.flatMap((row) => (row.metroId ? [{ metroId: row.metroId, date: row.date }] : [])), ...shownPlans.map((plan) => ({ metroId: plan.metroId, date: plan.date }))]).then(
      (map) => current && setRatings(map),
    );
    return () => {
      current = false;
    };
  }, [rows, plans, filter, favFilter]);

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

  const toItem = (row: ScheduleRow): TimelineItem => ({
    key: row.key,
    group: timelineGroup({ sort: row.date, label: '', precision: 'day' }),
    node: <FaveRow row={row} rating={row.metroId && !(row.event && isFurtherOut(row.event)) ? (ratings.get(nightKey(row.metroId, row.date)) ?? null) : null} home={home.id} />,
  });

  const band = !filter.plans ? null : shownPlans.length > 0 ? (
    <section className="plans-band" aria-label="Your plans">
      <h2 className="plans-band-title">Your plans</h2>
      <ul className="log-list plans-band-list">
        {shownPlans.map((plan) => (
          <li key={plan.id}>
            <PlanBandRow plan={plan} rating={ratings.get(nightKey(plan.metroId, plan.date)) ?? null} home={home.id} />
          </li>
        ))}
      </ul>
      <PlansHelper />
    </section>
  ) : plans.length > 0 ? (
    <p className="you-fine plans-band-note">No plans match the filter.</p>
  ) : (
    // No plans yet (Kylie, 2026-10-22, Locked; mock 09): one slim prompt in place of the band, so the feature stays findable.
    <div className="card plans-band-empty">
      <BookmarkIcon size={16} />
      <span>No plans yet. Mark events Attending or Interested.</span>
    </div>
  );

  return (
    <div className="screen page timeline-page">
      <div className="you-header">
        <h1 className="page-title">Upcoming</h1>
        <span className="header-actions">
          <FilterButton count={chips.length} open={sheet} onClick={() => setSheet(true)} label="Filter upcoming" />
          <SearchButton />
        </span>
      </div>
      <FilterChips chips={chips} onDrop={drop} onClear={clear} scrollRef={chipRow} />
      {favorites.length === 0 && plans.length === 0 ? (
        <div className="card empty-card following-empty">
          <div className="card-title">No Faves yet</div>
          <p className="following-empty-sub">Follow a team, artist or venue to see their games and shows here.</p>
          <Link to="/favorites/edit" className="following-empty-button">
            Add a Fave
          </Link>
        </div>
      ) : shownRows.length === 0 && shownPlans.length === 0 && chips.length > 0 ? (
        <div className="card empty-card following-empty">
          <div className="card-title">Nothing matches this filter in the last or next {SPAN_DAYS} days.</div>
          <button type="button" className="following-empty-link" onClick={clear}>
            Show everything <span aria-hidden>›</span>
          </button>
        </div>
      ) : (
        <Timeline
          label="Upcoming"
          past={shownRows.filter((row) => row.date < today).map(toItem)}
          future={shownRows.filter((row) => row.date >= today).map(toItem)}
          aboveLine={band}
          todayLabel={dayBandLabel(today, today)}
          emptyPast={
            <div className="card empty-card">
              <div className="card-title">Nothing from your Faves in the last {SPAN_DAYS} days.</div>
            </div>
          }
          emptyFuture={
            <div className="card empty-card">
              <div className="card-title">{favorites.length === 0 ? 'Follow a team, artist or venue to see what is ahead.' : `Nothing from your Faves in the next ${SPAN_DAYS} days.`}</div>
              {favorites.length === 0 && (
                <div className="empty-actions">
                  <Link to="/favorites/edit" className="link-button">
                    Add a Fave ›
                  </Link>
                </div>
              )}
            </div>
          }
        />
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
        />
      )}
    </div>
  );
}

/** The one-line helper under the band, said once per device (a lean: the band explains itself after that). */
function PlansHelper() {
  const [seen] = useState(() => getPref<boolean>('plans-band-seen', false));
  useEffect(() => {
    setPref('plans-band-seen', true);
  }, []);
  if (seen) return null;
  return <p className="you-fine plans-band-note">Events you marked Attending or Interested, or plan to watch. They become stubs in You once they happen.</p>;
}

/** A plan in the band: the status word leads, the title, time and venue, the date's read; no log button (Kylie, Oct 22, 2026). */
function PlanBandRow({ plan, rating, home }: { plan: Plan; rating: number | null; home: string }) {
  const kind = planKind(plan);
  const icon = kind === 'attending' ? <TicketIcon size={13} /> : kind === 'watching' ? <TvIcon /> : <BookmarkIcon size={13} />;
  const to = plan.manual && !plan.eventId ? entryPath(plan.id) : plan.eventId ? eventPath(plan.eventId, plan.metroId) : datePath(plan.date, plan.metroId);
  const noRead = isOutsideGamePlan(plan) || isFurtherOutRoom(plan.metroId, plan.venue);
  const city = plan.metroId !== home ? METROS[plan.metroId]?.name : null;
  return (
    <FollowRow
      date={plan.date}
      lead={{ icon, text: PLAN_WORDS[kind] }}
      title={plan.title}
      facts={[plan.manual?.start, plan.venue, city].filter(Boolean).join(' · ')}
      to={to}
      rating={noRead ? null : rating}
      readTo={noRead ? null : readPath(plan.date, plan.metroId, plan.eventId)}
      away={noRead && isOutsideGamePlan(plan) ? 'Away' : undefined}
      cityCode={plan.metroId !== home ? METROS[plan.metroId]?.code : null}
      spoken={`${PLAN_WORDS[kind]}, ${plan.title}, ${shortLocalDate(plan.date)}`}
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
      // A further-out event's tile is plain, with no tap (Kylie, Oct 20, 2026).
      readTo={row.away || (row.event && isFurtherOut(row.event)) ? null : readPath(row.date, row.metroId, row.event?.id)}
      away={row.noRead}
      cityCode={row.metroId && row.metroId !== home ? METROS[row.metroId]?.code : null}
      spoken={`${favoriteName(row.fav)}, ${row.title}, ${shortLocalDate(row.date)}`}
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
    <FilterSheet title="Filter upcoming" onReset={onReset} onClose={onClose}>
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
        <CheckRow on={filter.plans} title="Your plans" sub="Attending, Watching and Interested" onToggle={() => onFilter({ ...filter, plans: !filter.plans, faves: filter.plans ? true : filter.faves })} />
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
      {/* Opens the Edit favorites sheet once step 12 builds it; the picker page does the job until then. */}
      <Link to="/favorites/edit" className="filter-sheet-link" onClick={onClose}>
        Manage faves <span aria-hidden>›</span>
      </Link>
    </FilterSheet>
  );
}
