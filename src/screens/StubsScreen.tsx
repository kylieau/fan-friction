import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { getHomeId } from '../lib/homeCity';
import { SearchButton } from '../components/SearchButton';
import { BackLink } from '../components/BackLink';
import { StubRow } from '../components/StubRows';
import { ReadTile } from '../components/ReadTile';
import { TitleText } from '../components/TitleText';
import { TypeIcon } from '../components/TypeIcon';
import { TagChip } from '../components/TagChip';
import { CardsIcon, ChevronLeft, ChevronRight, ListIcon, CalendarIcon, TicketIcon, TvIcon } from '../components/Icons';
import { FilterButton, FilterChips, FilterSheet, SheetHeading } from '../components/FilterSheet';
import { Timeline, type TimelineItem } from '../components/Timeline';
import {
  entryTags,
  entryTeams,
  getPersonalLog,
  getSaveWarning,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribePersonalLog,
  tagSummaries,
  todayIn,
  yourEntries,
  type Entry,
} from '../data';
import { entryTypeKey } from '../map/typeIcons';
import { addDays, dayBandLabel, loggedDateLabel, monthCells, monthTitle, shiftMonth, shortLocalDate, timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { getPref, setPref } from '../lib/prefs';
import { entryPath, eventPath } from '../lib/view';
import { useEdgeFade } from '../lib/useEdgeFade';

type View = 'list' | 'grid' | 'calendar';
type DatePreset = 'all' | 'year' | 'lastyear' | '30' | 'custom';
type TypePick = 'all' | 'attended' | 'watched';
type KindPick = 'all' | 'game' | 'show' | 'other';

/** The Your stubs filter (build 7, §3.7; mock 40): Dates first, then Type, Kind, Team or sport, Tags. Session only. */
interface StubsFilter {
  dates: { preset: DatePreset; from?: string; to?: string };
  type: TypePick;
  kind: KindPick;
  team: string | null;
  tags: string[];
}

const DEFAULT_FILTER: StubsFilter = { dates: { preset: 'all' }, type: 'all', kind: 'all', team: null, tags: [] };
const FILTER_KEY = 'fan-friction:stubs-filter';

function readFilter(): StubsFilter {
  try {
    const raw = sessionStorage.getItem(FILTER_KEY);
    const saved = raw ? (JSON.parse(raw) as Partial<StubsFilter> | null) : null;
    if (!saved || typeof saved !== 'object') return DEFAULT_FILTER;
    const presets: DatePreset[] = ['all', 'year', 'lastyear', '30', 'custom'];
    return {
      dates: saved.dates && typeof saved.dates === 'object' && presets.includes(saved.dates.preset) ? saved.dates : DEFAULT_FILTER.dates,
      type: saved.type === 'attended' || saved.type === 'watched' ? saved.type : 'all',
      kind: saved.kind === 'game' || saved.kind === 'show' || saved.kind === 'other' ? saved.kind : 'all',
      team: typeof saved.team === 'string' ? saved.team : null,
      tags: Array.isArray(saved.tags) ? saved.tags.filter((t): t is string => typeof t === 'string') : [],
    };
  } catch {
    return DEFAULT_FILTER;
  }
}

/**
 * Your stubs (build 7, §3.7; Kylie, Oct 22, 2026; mocks 38–43): the full history, a page pushed from You's "See all ›".
 * ‹ You, the filter and search on the title row, then List (the diary's one line of time, past only), Grid (light cards,
 * three across) and Calendar (a year strip over a month grid: a dot for attended, a ring for watched; a day's stubs
 * below). Dates live in the filter, not a year chip. No plans (Upcoming) and no floating button (the bar's "+").
 */
export function StubsScreen() {
  const chipRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [params] = useSearchParams();
  const [view, setViewState] = useState<View>(() => {
    const saved = getPref<string>('stubs-view', 'list');
    return saved === 'grid' || saved === 'calendar' ? saved : 'list';
  });
  const setView = (next: View) => {
    setViewState(next);
    setPref('stubs-view', next);
  };
  const [filter, setFilterState] = useState<StubsFilter>(readFilter);
  const setFilter = (next: StubsFilter) => {
    setFilterState(next);
    try {
      sessionStorage.setItem(FILTER_KEY, JSON.stringify(next));
    } catch {
      /* storage blocked */
    }
  };
  // A favorite's "My Stubs ›" (`?filter=`) and a tag's page (`?tag=`) open the log narrowed to it.
  const wantedTeam = params.get('filter');
  const wantedTag = params.get('tag');
  const wantedYear = params.get('year');
  useEffect(() => {
    if (!wantedTeam && !wantedTag && !wantedYear) return;
    // A drilldown starts clean and applies everything the link asks for together (Codex, stage 4).
    setFilter({
      ...DEFAULT_FILTER,
      ...(wantedTeam ? { team: wantedTeam } : {}),
      ...(wantedTag ? { tags: [wantedTag] } : {}),
      ...(wantedYear && /^\d{4}$/.test(wantedYear) ? { dates: { preset: 'custom' as const, from: `${wantedYear}-01-01`, to: `${wantedYear}-12-31` } } : {}),
    });
  }, [wantedTeam, wantedTag, wantedYear]);
  const [sheet, setSheet] = useState(false);
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const today = todayIn(METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO);
  // The picker lists the tags on your stubs; plans carry theirs into a stub later.
  const known = useMemo(() => tagSummaries(log.added, []), [log]);
  const [tagQuery, setTagQuery] = useState('');

  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(entries)).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries]);

  // Team or sport: the chips You's row had (teams and sports logged more than once), now reading both teams of a game.
  const teamChoices = useMemo(() => {
    const counts = new Map<string, number>();
    for (const entry of entries) for (const word of wordsOf(entry)) counts.set(word, (counts.get(word) ?? 0) + 1);
    return [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([label]) => label);
  }, [entries]);

  const range = useMemo(() => dateRange(filter.dates, today), [filter.dates, today]);
  const shown = useMemo(
    () =>
      entries
        .filter((entry) => inRange(entry, range))
        .filter((entry) => (filter.type === 'all' ? true : filter.type === 'watched' ? Boolean(entry.watched) : !entry.watched))
        .filter((entry) => (filter.kind === 'all' ? true : filter.kind === 'game' ? entry.kind === 'game' : filter.kind === 'show' ? entry.kind === 'show' || entry.kind === 'festival' : entry.kind !== 'game' && entry.kind !== 'show' && entry.kind !== 'festival'))
        .filter((entry) => !filter.team || wordsOf(entry).includes(filter.team))
        // Two picked tags show stubs with either one (Kylie, Oct 14).
        .filter((entry) => filter.tags.length === 0 || filter.tags.some((tag) => entry.userTags?.includes(tag)))
        .sort((a, b) => a.when.sort.localeCompare(b.when.sort) || a.title.localeCompare(b.title)),
    [entries, range, filter],
  );

  const chips: { key: string; label: string }[] = [];
  if (filter.dates.preset !== 'all') chips.push({ key: 'dates', label: dateLabel(filter.dates) });
  if (filter.type !== 'all') chips.push({ key: 'type', label: filter.type === 'attended' ? 'Attended' : 'Watched' });
  if (filter.kind !== 'all') chips.push({ key: 'kind', label: filter.kind === 'game' ? 'Game' : filter.kind === 'show' ? 'Concert' : 'Other' });
  if (filter.team) chips.push({ key: 'team', label: filter.team });
  for (const tag of filter.tags) chips.push({ key: `tag:${tag}`, label: tag });
  const drop = (key: string) => {
    if (key === 'dates') setFilter({ ...filter, dates: { preset: 'all' } });
    else if (key === 'type') setFilter({ ...filter, type: 'all' });
    else if (key === 'kind') setFilter({ ...filter, kind: 'all' });
    else if (key === 'team') setFilter({ ...filter, team: null });
    else if (key.startsWith('tag:')) setFilter({ ...filter, tags: filter.tags.filter((t) => t !== key.slice(4)) });
  };
  const clear = () => setFilter(DEFAULT_FILTER);

  const pastItems: TimelineItem[] = shown.map((entry) => ({ key: entry.id, group: timelineGroup(entry.when), node: <StubRow entry={entry} rating={ratingForEntry(entry, ratings)} /> }));
  const count = entries.length;

  return (
    <div className="screen page timeline-page stubs-page">
      <BackLink to="/you" label="You" />
      <div className="you-header">
        <h1 className="page-title">
          Your Stubs {count > 0 && <span className="page-title-count">{count === 1 ? '1 stub' : `${count} stubs`}</span>}
        </h1>
        <span className="header-actions">
          <FilterButton count={chips.length} open={sheet} onClick={() => setSheet(true)} label="Filter Your Stubs" />
          <SearchButton />
        </span>
      </div>
      <div className="segmented stubs-views" role="tablist" aria-label="View">
        <button type="button" role="tab" aria-selected={view === 'list'} onClick={() => setView('list')}>
          <ListIcon /> List
        </button>
        <button type="button" role="tab" aria-selected={view === 'grid'} onClick={() => setView('grid')}>
          <CardsIcon /> Grid
        </button>
        <button type="button" role="tab" aria-selected={view === 'calendar'} onClick={() => setView('calendar')}>
          <CalendarIcon /> Calendar
        </button>
      </div>
      <FilterChips chips={chips} onDrop={drop} onClear={clear} scrollRef={chipRow} />
      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}
      {shown.length === 0 && chips.length > 0 ? (
        <div className="card empty-card following-empty">
          <div className="card-title">No stubs match</div>
          <button type="button" className="following-empty-link" onClick={clear}>
            Clear <span aria-hidden>›</span>
          </button>
        </div>
      ) : view === 'list' ? (
        <section className="timeline-page-body">
          <Timeline
            label="Your Stubs"
            past={pastItems}
            future={[]}
            todayLabel={dayBandLabel(today, today)}
            emptyPast={
              // The decided empty-past copy (Kylie, Oct 16), above the line: no "Stub it" button here, only the way to today.
              <div className="card empty-card">
                <div className="card-title">{entries.length > 0 ? 'Nothing here.' : 'No stubbed events'}</div>
                <div className="empty-actions">
                  <Link to="/explore" className="link-button">
                    Browse today in Explore ›
                  </Link>
                </div>
              </div>
            }
            // Plans are on Upcoming (build 7), so nothing sits under the line here.
            emptyFuture={null}
          />
        </section>
      ) : view === 'grid' ? (
        <StubGrid entries={[...shown].reverse()} ratings={ratings} />
      ) : (
        <StubCalendar entries={shown} ratings={ratings} today={today} />
      )}
      {sheet && (
        <FilterSheet title="Filter Your Stubs" onReset={clear} onClose={() => setSheet(false)}>
          <SheetHeading>Dates</SheetHeading>
          <div className="filter-dates">
            <label className="seat-field">
              <span className="seat-field-label">From</span>
              <input type="date" className="account-input" value={filter.dates.preset === 'custom' ? (filter.dates.from ?? '') : ''} onChange={(ev) => setFilter({ ...filter, dates: { preset: 'custom', from: ev.target.value || undefined, to: filter.dates.preset === 'custom' ? filter.dates.to : undefined } })} />
            </label>
            <label className="seat-field">
              <span className="seat-field-label">To</span>
              <input type="date" className="account-input" value={filter.dates.preset === 'custom' ? (filter.dates.to ?? '') : ''} onChange={(ev) => setFilter({ ...filter, dates: { preset: 'custom', from: filter.dates.preset === 'custom' ? filter.dates.from : undefined, to: ev.target.value || undefined } })} />
            </label>
          </div>
          <div className="pill-row filter-pills" role="group" aria-label="Date presets">
            {(
              [
                ['all', 'All time'],
                ['year', 'This year'],
                ['lastyear', 'Last year'],
                ['30', 'Last 30 days'],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" className="filter-chip" aria-pressed={filter.dates.preset === id} onClick={() => setFilter({ ...filter, dates: { preset: id } })}>
                {label}
              </button>
            ))}
          </div>
          <SheetHeading>Type</SheetHeading>
          <div className="pill-row filter-pills" role="group" aria-label="Type">
            {(
              [
                ['all', 'All'],
                ['attended', 'Attended'],
                ['watched', 'Watched'],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" className="filter-chip" aria-pressed={filter.type === id} onClick={() => setFilter({ ...filter, type: id })}>
                {id === 'attended' && <TicketIcon size={14} />}
                {id === 'watched' && <TvIcon />}
                {label}
              </button>
            ))}
          </div>
          <SheetHeading>Kind</SheetHeading>
          <div className="pill-row filter-pills" role="group" aria-label="Kind">
            {(
              [
                ['all', 'All'],
                ['game', 'Game'],
                ['show', 'Concert'],
                ['other', 'Other'],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" className="filter-chip" aria-pressed={filter.kind === id} onClick={() => setFilter({ ...filter, kind: id })}>
                {label}
              </button>
            ))}
          </div>
          {teamChoices.length > 0 && (
            <>
              <SheetHeading>Team or Sport</SheetHeading>
              <div className="pill-row filter-pills" role="group" aria-label="Team or sport">
                {teamChoices.map((label) => (
                  <button key={label} type="button" className="filter-chip" aria-pressed={filter.team === label} onClick={() => setFilter({ ...filter, team: filter.team === label ? null : label })}>
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}
          {known.length > 0 && (
            <>
              <SheetHeading>Tags</SheetHeading>
              <div className="card tag-picker" role="group" aria-label="Tags">
                {known.length > 6 && <input className="account-input" type="search" value={tagQuery} placeholder="Search your tags" aria-label="Search your tags" onChange={(ev) => setTagQuery(ev.target.value)} />}
                <div className="tag-picker-list">
                  {known
                    .filter((k) => k.tag.includes(tagQuery.trim().toLowerCase()))
                    .map((k) => (
                      <label key={k.tag} className="tag-picker-row">
                        <input type="checkbox" checked={filter.tags.includes(k.tag)} onChange={() => setFilter({ ...filter, tags: filter.tags.includes(k.tag) ? filter.tags.filter((t) => t !== k.tag) : [...filter.tags, k.tag] })} />
                        <TagChip tag={k.tag} />
                        <span className="tags-panel-count">{k.count}</span>
                      </label>
                    ))}
                </div>
              </div>
            </>
          )}
        </FilterSheet>
      )}
    </div>
  );
}

/** The words a stub answers to in Team or sport: every team it credits (both sides of a game) and its sport word. */
function wordsOf(entry: Entry): string[] {
  const words = [...entryTeams(entry), ...entryTags(entry).filter((tag) => tag !== 'Concerts' && tag !== 'Sports' && tag !== 'Event')];
  if (entry.kind === 'game' && entry.sport && entry.sport !== 'Sports') words.push(entry.sport);
  return words.filter((w, i) => w && words.indexOf(w) === i);
}

function dateRange(dates: StubsFilter['dates'], today: string): { from?: string; to?: string } | null {
  const year = today.slice(0, 4);
  switch (dates.preset) {
    case 'all':
      return null;
    case 'year':
      return { from: `${year}-01-01`, to: `${year}-12-31` };
    case 'lastyear':
      return { from: `${Number(year) - 1}-01-01`, to: `${Number(year) - 1}-12-31` };
    case '30':
      return { from: addDays(today, -30), to: today };
    case 'custom':
      return dates.from || dates.to ? { from: dates.from, to: dates.to } : null;
  }
}

/** A day-precise stub by its day; a rough one (a month, a year, a span) when its stretch overlaps the range (a lean). */
function inRange(entry: Entry, range: { from?: string; to?: string } | null): boolean {
  if (!range) return true;
  const start = entry.when.sort;
  const end = entry.when.precision === 'day' ? start : entry.when.precision === 'month' ? `${start.slice(0, 7)}-31` : entry.when.precision === 'year' ? `${start.slice(0, 4)}-12-31` : '9999-12-31';
  if (entry.when.precision === 'unknown') return true;
  return (!range.to || start <= range.to) && (!range.from || end >= range.from);
}

function dateLabel(dates: StubsFilter['dates']): string {
  switch (dates.preset) {
    case 'year':
      return 'This year';
    case 'lastyear':
      return 'Last year';
    case '30':
      return 'Last 30 days';
    case 'custom':
      return [dates.from && shortLocalDate(dates.from), dates.to && shortLocalDate(dates.to)].filter(Boolean).join(' – ') || 'Dates';
    default:
      return 'All time';
  }
}

/** Grid (mock 41): light cards three across, newest first: date and the ticket or TV and sport icons beside the read, the title, the venue. */
function StubGrid({ entries, ratings }: { entries: Entry[]; ratings: ReadonlyMap<string, number> }) {
  return (
    <ul className="stub-grid" aria-label="Your Stubs">
      {entries.map((entry) => (
        <li key={entry.id}>
          <Link to={entry.eventId ? eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id) : entryPath(entry.id)} className="stub-card" aria-label={entry.title}>
            <span className="stub-card-top">
              <span className="stub-card-date">{entry.when.precision === 'day' ? shortLocalDate(entry.when.sort).replace(/^\w+, /, '') : loggedDateLabel(entry.when)}</span>
              <ReadTile rating={ratingForEntry(entry, ratings)} />
            </span>
            <span className="stub-card-icons">
              {entry.watched ? <TvIcon /> : <TicketIcon size={16} />}
              <TypeIcon typeKey={entryTypeKey(entry)} size={14} />
            </span>
            <span className="stub-card-title">
              <TitleText text={entry.title} />
            </span>
            {entry.venue && <span className="stub-card-venue">{entry.venue}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Calendar (mock 42): the year strip (a month shaded by how many stubs it holds, the shown month outlined) over a
 * Sunday-first month grid (the app's `monthCells`, as Explore's calendar), a dot for attended and a ring for watched;
 * a tapped day lists its stubs. Stubs with no exact date sit in their own list under the grid.
 */
function StubCalendar({ entries, ratings, today }: { entries: Entry[]; ratings: ReadonlyMap<string, number>; today: string }) {
  const dated = entries.filter((entry) => entry.when.precision === 'day');
  const rough = entries.filter((entry) => entry.when.precision !== 'day');
  const byDay = useMemo(() => {
    const map = new Map<string, Entry[]>();
    for (const entry of dated) map.set(entry.when.sort, [...(map.get(entry.when.sort) ?? []), entry]);
    return map;
  }, [dated]);
  const newest = dated.length > 0 ? dated[dated.length - 1].when.sort : today;
  const [month, setMonth] = useState(newest.slice(0, 7));
  const [picked, setPicked] = useState<string | null>(dated.length > 0 ? newest : null);
  const year = month.slice(0, 4);
  const years = useMemo(() => [...new Set(dated.map((e) => e.when.sort.slice(0, 4)))].sort(), [dated]);
  const earliest = dated.length > 0 ? dated[0].when.sort.slice(0, 7) : today.slice(0, 7);
  const latest = today.slice(0, 7);
  const perMonth = (m: string) => dated.filter((e) => e.when.sort.startsWith(m)).length;
  const most = Math.max(1, ...Array.from({ length: 12 }, (_, i) => perMonth(`${year}-${String(i + 1).padStart(2, '0')}`)));
  const cells = monthCells(month);
  const go = (next: string) => {
    setMonth(next);
    setPicked(null);
  };
  const pickedRows = picked ? (byDay.get(picked) ?? []) : [];
  return (
    <div className="stub-calendar">
      <div className="cal-year-head">
        <button type="button" className="cal-nav small" aria-label="Previous year" disabled={year <= earliest.slice(0, 4)} onClick={() => go(`${Number(year) - 1}-${month.slice(5)}`)}>
          <ChevronLeft />
        </button>
        <span className="cal-year">{year}</span>
        <button type="button" className="cal-nav small" aria-label="Next year" disabled={year >= latest.slice(0, 4)} onClick={() => go(`${Number(year) + 1}-${month.slice(5)}`)}>
          <ChevronRight />
        </button>
      </div>
      <div className="card cal-year-strip" role="tablist" aria-label="Months">
        {Array.from({ length: 12 }, (_, i) => {
          const m = `${year}-${String(i + 1).padStart(2, '0')}`;
          const n = perMonth(m);
          return (
            <button key={m} type="button" role="tab" aria-selected={m === month} className={`cal-year-month${m === month ? ' on' : ''}`} style={{ ['--fill' as string]: n ? 0.25 + (0.6 * n) / most : 0 }} onClick={() => go(m)}>
              <span className="cal-year-box" aria-hidden />
              <span className="cal-year-letter">{'JFMAMJJASOND'[i]}</span>
              <span className="sr-only">{monthTitle(m)}, {n} stubs</span>
            </button>
          );
        })}
      </div>
      <div className="card cal-card">
        <div className="cal-head">
          <button type="button" className="cal-nav" aria-label="Previous month" disabled={month <= earliest} onClick={() => go(shiftMonth(month, -1))}>
            <ChevronLeft />
          </button>
          <h3 className="cal-month">{monthTitle(month)}</h3>
          <button type="button" className="cal-nav" aria-label="Next month" disabled={month >= latest} onClick={() => go(shiftMonth(month, 1))}>
            <ChevronRight />
          </button>
        </div>
        <div className="cal-weekdays" aria-hidden>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="cal-grid stub-cal-grid">
          {cells.map((date, i) =>
            date ? (
              <button key={date} type="button" className={`cal-day plain stub-cal-day${picked === date ? ' selected' : ''}${byDay.has(date) ? ' has' : ''}`} aria-pressed={picked === date} aria-label={`${shortLocalDate(date)}${byDay.has(date) ? `, ${byDay.get(date)!.length} stubs` : ''}`} onClick={() => setPicked(date)}>
                <span className="stub-cal-num">{Number(date.slice(8))}</span>
                {byDay.has(date) && <span className={`stub-cal-mark${byDay.get(date)!.every((e) => e.watched) ? ' ring' : ''}`} aria-hidden />}
              </button>
            ) : (
              <span key={`b${i}`} className="cal-blank" />
            ),
          )}
        </div>
      </div>
      <p className="you-fine stub-cal-key">
        <span className="stub-cal-mark inline" aria-hidden /> Attended <span className="stub-cal-mark inline ring" aria-hidden /> Watched
      </p>
      {picked && pickedRows.length > 0 && (
        <section aria-label={shortLocalDate(picked)}>
          <h3 className="log-sheet-band">{shortLocalDate(picked)}</h3>
          <ul className="log-list card">
            {pickedRows.map((entry) => (
              <li key={entry.id}>
                <StubRow entry={entry} rating={ratingForEntry(entry, ratings)} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {rough.length > 0 && (
        <section aria-label="No exact date">
          <h3 className="log-sheet-band">No exact date</h3>
          <ul className="log-list card">
            {[...rough].reverse().map((entry) => (
              <li key={entry.id}>
                <StubRow entry={entry} rating={ratingForEntry(entry, ratings)} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {years.length === 0 && <p className="you-fine">No dated stubs yet.</p>}
    </div>
  );
}
