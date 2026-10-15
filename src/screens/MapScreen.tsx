import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import {
  cityWeather,
  cityDayRange,
  feelsLikeLabel,
  rangeLabel,
  rangeSpoken,
  weatherGlyph,
  getCityDate,
  todayIn,
  followingFeed,
  getAccount,
  getPersonalLog,
  subscribeAccount,
  subscribePersonalLog,
  type CityDate,
  type CrowdEvent,
  type FeedItem,
  cityTravelLine,
} from '../data';
import { friendsLine, yourActivity } from '../lib/activity';
import { getPref, setPref } from '../lib/prefs';
import { PeopleIcon } from '../components/Icons';
import { BaseMap, MapContext } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { chipActivities } from '../map/chipActivity';
import { HandMoveWatch, MapCamera } from '../map/MapCamera';
import { crowdPoints, crowdThousands, showsOnMap } from '../map/crowdPoints';
import { MapSettle, type ViewBounds } from '../map/viewBounds';
import { ExploreHeader } from '../components/ExploreHeader';
import { ExploreModeSwitch } from '../components/ExploreModeSwitch';
import { DateScore } from '../components/DateScore';
import { ChevronLeft, ChevronRight, RecenterIcon } from '../components/Icons';
import { listTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, markOpenedFromMap, readMapMemory, saveMapMemory, type MapMemory } from '../lib/mapReturn';
import { addDays, clockTime, headerDate, pastRelativeLabel, shortLocalDate } from '../lib/dates';
import { useSheetDrag } from '../lib/useSheetDrag';
import { datePath, mapPath, useView } from '../lib/view';
import { MonthSheet } from '../components/MonthSheet';
import { DayStrip } from '../components/DayStrip';
import { ChipCard } from '../components/ChipCard';
import { CrowdMark } from '../components/EventTags';
import { DayRow, RowBody, sheetVenue } from '../components/DayRow';
import { alwaysShownIds, crowdRangeOf, displayedCrowdCount, drawSize, sizeTier, splitByRange } from '../data';
import { HiddenLine } from '../components/HiddenLine';

type Mode = 'crowds' | 'traffic';
/** No traffic layer exists yet; the switch stays off the map until one does (C079). */
const TRAFFIC_BUILT = false;

// The map is the screen; the header and the sheet sit on it. Opens on Today, even
// when it's quiet. A famous night opens here too ("/?date=2024-10-25").
// One view (place + date), one selected event shared by the dot, its label and its row.
export function MapScreen() {
  const [mode, setMode] = useState<Mode>('crowds');
  const [legend, setLegend] = useState(false);
  const location = useLocation();
  const href = `${location.pathname}${location.search}`;
  const restored = useRef<MapMemory | null | undefined>(undefined);
  if (restored.current === undefined) {
    const saved = readMapMemory();
    restored.current = saved && saved.href === href ? saved : null;
  }
  const memory = restored.current;
  const { metro, date, today, isToday } = useView();
  useEffect(() => {
    clearOpenedFromMap();
  }, []);

  const [day, setDay] = useState<CityDate | null>(null);
  useEffect(() => {
    let current = true;
    getCityDate(metro.id, date).then((d) => current && setDay(d));
    return () => {
      current = false;
    };
  }, [metro.id, date]);

  // Activity lines under the rows (build notes 3, 4.2): your own answers and the people you follow.
  // One chip in the sheet's header hides them all, yours included; it is remembered on this device.
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [activity, setActivity] = useState<boolean>(() => getPref<boolean>('explore-activity', true));
  const toggleActivity = () => {
    setActivity((on) => {
      setPref('explore-activity', !on);
      return !on;
    });
  };
  const [friends, setFriends] = useState<FeedItem[]>([]);
  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    followingFeed(300).then((list) => current && setFriends(list.filter((f) => f.date === date && (f.metroId ?? DEFAULT_METRO.id) === metro.id)));
    return () => {
      current = false;
    };
  }, [account?.id, date, metro.id]);
  const lineFor = (e: CrowdEvent) => (activity ? friendsLine(friends.filter((f) => f.eventId === e.id)) : null);
  const youFor = (e: CrowdEvent) => (activity ? (yourActivity(e.id, log)?.kind ?? null) : null);

  // The friend line on a chip (build notes 4, 1.9): friends only, never you; off with the Activity chip.
  const chipActivity = useMemo(() => (activity ? chipActivities(friends) : undefined), [activity, friends]);

  const shown = day && day.date === date ? day : null;
  const rating = shown?.rating ?? null;
  // Every event at a known venue is a pin and a sheet row; a room under the friction floor is drawn muted (Kylie, Oct 9, 3.4).
  const allDayEvents = useMemo(() => (shown?.events ?? []).filter(showsOnMap), [shown]);
  // The crowd size range (build 5, item 6): chips, rows and both totals show only what's in range; Show reveals the rest
  // for this view. Stubbed events and ones friends are attending always show. The read never sees this.
  const [showAll, setShowAll] = useState(false);
  const keep = useMemo(() => alwaysShownIds(log, friends), [log, friends]);
  const split = useMemo(() => splitByRange(allDayEvents, crowdRangeOf(log), keep), [allDayEvents, log, keep]);
  const dayEvents = showAll ? allDayEvents : split.shown;
  const hiddenCount = showAll ? 0 : split.hidden.length;

  // The map shows one day (Kylie, Oct 6). An empty day stays empty: the strip
  // shows where the next reads are, and the sheet names the next event.
  const events = dayEvents;
  // One mark and one card per event. Cards that overlap are dropped; the marks stay.
  const points = useMemo(() => {
    if (!shown || mode !== 'crowds') return [];
    const all = crowdPoints(events, date);
    all.sort((a, b) => (a.event.date + (a.event.start ?? '')).localeCompare(b.event.date + (b.event.start ?? '')));
    return all;
  }, [shown, mode, events, date]);
  // Collapsed, the sheet peeks the title. Open, it is as tall as the rows, and the
  // list scrolls once that would pass the sheet's max height.
  const [open, setOpen] = useState(memory?.sheetOpen ?? false);
  const [selectedId, setSelectedId] = useState<string | null>(memory?.selectedId ?? null);
  const [freezeCamera, setFreezeCamera] = useState(Boolean(memory));
  // The recenter button (Kylie, Oct 6): shows once the map has been moved by hand,
  // or when it opens on a remembered view; a tap frames the night again.
  const [movedByHand, setMovedByHand] = useState(Boolean(memory));
  const [recenter, setRecenter] = useState(0);
  const doRecenter = () => {
    setFreezeCamera(false);
    setMovedByHand(false);
    setRecenter((n) => n + 1);
  };
  const initialDate = useRef(date);
  useEffect(() => {
    if (date === initialDate.current) return;
    setFreezeCamera(false);
    setMovedByHand(false);
    setSelectedId(null);
    setOpen(false);
    setLegend(false);
    setShowAll(false);
  }, [date]);

  const initialMetro = useRef(metro.id);
  useEffect(() => {
    if (metro.id === initialMetro.current) return;
    setFreezeCamera(false);
    setMovedByHand(false);
    setLegend(false); // the key closes on a city switch (C048)
    setShowAll(false);
  }, [metro.id]);
  // A link or a remembered selection to an event the range hides counts as Show for this view.
  useEffect(() => {
    if (selectedId && split.hidden.some((e) => e.id === selectedId)) setShowAll(true);
  }, [selectedId, split]);

  const select = useCallback((id: string | null) => {
    setFreezeCamera(false);
    setSelectedId(id);
    if (id) setLegend(false); // and on an event pick
  }, []);
  const selected = events.find((e) => e.id === selectedId) ?? null;

  const headerRating = rating ? rating.rating : null;
  // The day's crowd, over the friction floor, for the count line and the Why card.
  const crowdTotal = dayEvents
    .filter((e) => sizeTier(e) === 'feeds-friction')
    .reduce((sum, e) => sum + (displayedCrowdCount(e) ?? 0), 0);
  const showScore = true;

  const caption = !shown
    ? ' '
    : dayEvents.length === 0
      ? 'No events'
      : dayEvents.length === 1
        ? '1 event'
        : `${dayEvents.length} events`;
  // The city point's feels-like low and high for the day (Kylie, Oct 6), on quiet days too.
  // Orientation only; venues have their own. The evening hourly number is the fallback for old data.
  const dayRange = cityDayRange(metro.id, date);
  const cityRow = dayRange ? undefined : cityWeather(metro.id, date, events);
  const showFeels = dayRange !== undefined || cityRow !== undefined;

  const [, setBounds] = useState<ViewBounds | null>(null);
  useEffect(() => {
    setBounds(null);
  }, [metro.id, date]);
  const rivals = useMemo(() => {
    if (!selected) return [] as CrowdEvent[];
    const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
    // Not filtered by the crowd size range, like Up against (answer B): the read uses them.
    return allDayEvents
      .filter((e) => e.id !== selected.id && e.date === selected.date && sizeTier(e) === 'feeds-friction' && (!selected.start || !e.start || Math.abs(toMin(e.start) - toMin(selected.start)) <= 60))
      .sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0));
  }, [allDayEvents, selected]);
  // The header already names the day (Kylie, Oct 6: say it once).
  const pastLabel = pastRelativeLabel(date, todayIn(DEFAULT_METRO));


  // The sheet follows your finger (see useSheetDrag); a tap on the grabber toggles it too.
  const sheetRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<'area' | null>(null);
  // The weather chip's one-line note: tap on a phone, hover on a computer (Kylie, Oct 6).
  const [feelsTip, setFeelsTip] = useState(false);
  const feelsTipId = useId();
  useEffect(() => {
    if (!feelsTip) return;
    const timer = window.setTimeout(() => setFeelsTip(false), 3000);
    return () => window.clearTimeout(timer);
  }, [feelsTip]);
  // The month sheet: the grid, search and Famous nights over the map (Explore option A).
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [monthOpen, setMonthOpen] = useState(() => searchParams.get('pick') === '1');
  // Pick a date from the shared search, while already on Explore: the address says so.
  useEffect(() => {
    if (searchParams.get('pick') === '1') setMonthOpen(true);
  }, [searchParams]);
  useEffect(() => {
    if (!menu) return;
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (areaRef.current?.contains(target)) return;
      setMenu(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(null);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [menu]);
  const setSheetOpen = useCallback((next: boolean) => {
    setFreezeCamera(false);
    setOpen(next);
  }, []);
  const { wasDragged } = useSheetDrag(sheetRef, topRef, bodyRef, open, setSheetOpen);
  const grabClick = () => {
    if (!wasDragged()) setSheetOpen(!open);
  };

  return (
    <div className={`screen map-screen${open ? ' sheet-open' : ''}`}>
      <div className="map-area" onPointerDown={() => setMenu(null)}>
        <BaseMap metro={metro} camera={memory}>
          <CrowdLayer points={points} selectedId={selectedId} onSelect={select} activity={chipActivity} />
          <MapCamera
            points={points}
            selectedId={selectedId}
            sheetOpen={open}
            holdCenter={freezeCamera && memory ? memory.center : null}
            holdZoom={freezeCamera && memory ? memory.zoom : null}
            home={{ center: metro.center, zoom: metro.zoom }}
            recenter={recenter}
          />
          <HandMoveWatch onMoved={() => setMovedByHand(true)} />
          <MapSettle onSettle={setBounds} />
          <RememberMap href={href} selectedId={selectedId} sheetOpen={open} />
        </BaseMap>
      </div>

      <header className="map-header">
        {/* The shared title row (build notes 4, 1.2): the city left at the page-title size, search at the right. */}
        <ExploreHeader metro={metro} areaOpen={menu === 'area'} onAreaOpenChange={(next) => setMenu(next ? 'area' : null)} areaRef={areaRef}>
          <ExploreModeSwitch view="map" />
        </ExploreHeader>
        {/* The read box first, then the date, then < Today > to step a day or jump back (Kylie, Oct 9). */}
        <div className="map-header-score">
          {/* The read box and the date both open that day's date page (build notes 4, 1.7; Kylie V02). */}
          <Link to={datePath(date, metro.id)} className="datescore-button" aria-label="Open this day">
            <DateScore rating={headerRating} empty={showScore ? shown?.empty : undefined} showScore={showScore} />
          </Link>
          <div className="map-header-dateblock">
            {/* The date is plain text that opens the date page (build notes 3, 4.1); Pick a date lives in search. */}
            <h1 className="map-header-date">
              <Link to={datePath(date, metro.id)} className="map-header-date-link">
                {headerDate(date, today)}
              </Link>
            </h1>
            {/* The count and, on a past date, how long ago ("6 events · Last week"), so the date keeps its room beside < Today >. */}
            {(caption.trim() || pastLabel) && (
              <div className="map-header-count">
                {[caption.trim(), pastLabel].filter(Boolean).join(' · ')}
                {crowdTotal > 0 && (
                  <>
                    {' · '}
                    <CrowdMark />
                    {crowdThousands(crowdTotal)}
                  </>
                )}
              </div>
            )}
          </div>
          <nav className="day-nav" aria-label="Day">
            <Link to={mapPath({ metroId: metro.id, date: addDays(date, -1), today })} className="day-nav-step" aria-label="Previous day">
              <ChevronLeft />
            </Link>
            <Link to={mapPath({ metroId: metro.id, date: today, today })} className={`day-nav-today${isToday ? ' is-today' : ''}`} aria-current={isToday ? 'date' : undefined}>
              Today
            </Link>
            <Link to={mapPath({ metroId: metro.id, date: addDays(date, 1), today })} className="day-nav-step" aria-label="Next day">
              <ChevronRight />
            </Link>
          </nav>
        </div>
        <DayStrip metro={metro} today={today} date={date} />
        <div className="map-chrome">
          <div className="map-chrome-left">
            {showFeels && dayRange && (
              <div className="map-feels-wrap">
                <button
                  type="button"
                  className="map-feels"
                  aria-label={`${metro.name}: ${rangeSpoken(dayRange, metro.id)}`}
                  aria-describedby={feelsTipId}
                  onClick={() => setFeelsTip((v) => !v)}
                  onBlur={() => setFeelsTip(false)}
                >
                  <span className="weather-glyph" aria-hidden>
                    {weatherGlyph(dayRange)}
                  </span>
                  <span>{rangeLabel(dayRange, metro.id)}</span>
                </button>
                <span id={feelsTipId} role="tooltip" className="map-feels-tip" style={{ display: feelsTip ? 'block' : 'none' }}>
                  Feels-like, not air temp
                </span>
              </div>
            )}
            {showFeels && cityRow && (
              <div className="map-feels" aria-label={`Feels like ${feelsLikeLabel(cityRow, metro.id)} in ${metro.name}`}>
                <span className="weather-glyph" aria-hidden>
                  {weatherGlyph(cityRow)}
                </span>
                <span>{feelsLikeLabel(cityRow, metro.id)}</span>
              </div>
            )}
          </div>
          {/* The Crowds/Traffic switch is hidden until a Traffic layer exists (C079; Traffic is parked). */}
          {TRAFFIC_BUILT && (
            <div className="segmented small" role="tablist" aria-label="Map mode">
              <button type="button" role="tab" aria-selected={mode === 'crowds'} onClick={() => setMode('crowds')}>
                Crowds
              </button>
              <button type="button" role="tab" aria-selected={mode === 'traffic'} onClick={() => setMode('traffic')}>
                Traffic
              </button>
            </div>
          )}
        </div>
        {/* The next-saved-night card (Oct 5) left the map on Oct 9 (Kylie): Home's Your next event and You's Coming up strip carry it. */}
      </header>

      <div className="map-controls">
      <>
          <button
            type="button"
            className="legend-button"
            aria-label="Map key"
            aria-expanded={legend}
            onClick={() => setLegend((v) => !v)}
          >
            ?
          </button>
          {legend && (
            <div className="legend-card" role="note">
              <ul className="map-key">
                {points.length === 0 && <li className="map-key-empty">Nothing big on this date.</li>}
                <li className="map-key-glow">Gold glow is the size of the crowd</li>
                <li className="map-key-ring">Pale ring is the one you picked</li>
                <li className="map-key-note">The date's read, 1–10, from three reasons: crowd fight, gridlock, conditions.</li>
                {/* How this city's fans get to events, in plain words (build 5, N1/B1; Kylie, Oct 14). */}
                {cityTravelLine(metro.id) && <li className="map-key-note">{cityTravelLine(metro.id)}</li>}
                <li className="map-key-note">
                  Local competition: <span className="chip chip-f squeezed">Squeezed</span> <span className="chip chip-f swamped">Swamped</span> <span className="chip chip-f steamrolled">Steamrolled</span>
                </li>
                <li className="map-key-note">
                  How big a deal: <span className="tag-occasion">Notable</span> <span className="tag-occasion">Major</span> <span className="tag-occasion">Marquee</span>
                </li>
              </ul>
            </div>
          )}
      </>
      {movedByHand && (
        <button type="button" className="recenter-button" aria-label="Recenter the map" onClick={doRecenter}>
          <RecenterIcon />
        </button>
      )}
      </div>

      {/* The sheet (build notes 3, 4.2; Kylie's answer, 8.1 item 20): with no chip picked, its collapsed bar reads
          "4 events · 94k ›" and opens the date page, and the list under it is the day's rows by time. A tapped chip
          puts the compact card on top with the rivals it is fighting under it (build notes 2, T1). */}
      <section className={`sheet${selected || dayEvents.length > 0 || hiddenCount > 0 ? '' : ' sheet-none'}`} ref={sheetRef} aria-label={selected ? listTitle(selected) : 'This day'} aria-hidden={!selected && dayEvents.length === 0 && hiddenCount === 0}>
        <div className="sheet-top" ref={topRef}>
          <div
            className="sheet-grab"
            role="button"
            tabIndex={0}
            aria-expanded={open}
            aria-label={open ? 'Collapse' : 'Expand'}
            onClick={grabClick}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSheetOpen(!open)}
          >
            <span className="sheet-handle" aria-hidden />
          </div>
          {selected ? (
            <ChipCard event={selected} friends={activity ? friends.filter((f) => f.eventId === selected.id) : undefined} onOpen={() => markOpenedFromMap()} />
          ) : (
            <div className="sheet-bar">
              <Link to={datePath(date, metro.id)} className="sheet-bar-link">
                {isToday ? '' : `${shortLocalDate(date)} · `}
                {caption.trim()}
                {crowdTotal > 0 && (
                  <>
                    {' · '}
                    <CrowdMark />
                    {crowdThousands(crowdTotal)}
                  </>
                )}
                {' ›'}
              </Link>
              {/* Icon only (Kylie, Oct 11): a filled pill when on, a grey slashed outline when off. */}
              <button type="button" className={`activity-chip${activity ? ' on' : ''}`} aria-pressed={activity} aria-label="Friends activity" onClick={toggleActivity}>
                <PeopleIcon size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="sheet-body" ref={bodyRef}>
          {selected && rivals.length > 0 && (
            <>
              <div className="section-title">Fighting today</div>
              <ul className="event-list">
                {rivals.map((e) => (
                  <li key={e.id}>
                    <EventRow
                      event={e}
                      dateEvents={events}
                      showDate={e.date !== date}
                      onPick={() => {
                        setFreezeCamera(false);
                        setSelectedId(e.id);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
          {selected && rivals.length === 0 && <p className="you-fine">Nothing else over 5,000 starts within the hour.</p>}
          {!selected && dayEvents.length > 0 && (
            <ul className="day-list" aria-label="Events">
              {[...dayEvents]
                .sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'))
                .map((e) => (
                  <li key={e.id}>
                    <DayRow event={e} line={lineFor(e)} you={youFor(e)} />
                  </li>
                ))}
            </ul>
          )}
          {!selected && <HiddenLine count={hiddenCount} onShow={() => setShowAll(true)} />}
        </div>
      </section>

      {monthOpen && (
        <MonthSheet
          metro={metro}
          today={today}
          focus={date}
          onClose={() => setMonthOpen(false)}
          onPick={(picked) => {
            setMonthOpen(false);
            navigate(mapPath({ metroId: metro.id, date: picked, today }));
          }}
        />
      )}
    </div>
  );
}

/**
 * Writes the map she is leaving, including zoom, so Back can put it back.
 * The address is the one from the last map render. The live address may
 * already be the event page by the time this runs.
 */
function RememberMap({
  href,
  selectedId,
  sheetOpen,
}: {
  href: string;
  selectedId: string | null;
  sheetOpen: boolean;
}) {
  const map = useContext(MapContext);
  const latest = useRef({ href, selectedId, sheetOpen, map });
  latest.current = { href, selectedId, sheetOpen, map };

  useEffect(() => {
    return () => {
      const current = latest.current;
      const live = current.map;
      if (!live) return;
      const center = live.getCenter();
      saveMapMemory({
        href: current.href,
        selectedId: current.selectedId,
        sheetOpen: current.sheetOpen,
        center: [center.lng, center.lat],
        zoom: live.getZoom(),
      });
    };
  }, []);

  return null;
}



function EventRow({
  event: e,
  selected,
  onPick,
  showDate,
  href,
}: {
  event: CrowdEvent;
  /** Kept for callers; the stakes line it fed is now the label (labels r3). */
  dateEvents?: CrowdEvent[];
  selected?: boolean;
  onPick?: () => void;
  showDate?: boolean;
  href?: string;
}) {
  const time = e.start ? clockTime(e.start) : 'TBA';
  const venue = sheetVenue(e);
  // The shared row body: time at the left, badges flush right under the crowd. A day tag rides with the venue.
  const body = (
    <RowBody
      event={e}
      time={time}
      venueText={showDate ? [shortLocalDate(e.date), venue].filter(Boolean).join(' · ') : venue}
    />
  );
  const cls = `event-row${selected ? ' selected' : ''}`;
  if (href) return <Link to={href} className={cls}>{body}</Link>;
  return onPick ? (
    <button type="button" className={cls} onClick={onPick} aria-pressed={selected}>
      {body}
    </button>
  ) : (
    <div className={cls}>{body}</div>
  );
}
