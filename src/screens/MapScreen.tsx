import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  cityWeather,
  cityDayRange,
  feelsLikeLabel,
  rangeLabel,
  rangeSpoken,
  weatherGlyph,
  getCityDate,
  getPersonalLog,
  getUpcoming,
  nextSavedPlan,
  subscribePersonalLog,
  todayIn,
  VENUES,
  venueNameOn,
  type CityDate,
  type CrowdEvent,
  type Plan,
} from '../data';
import { BaseMap, MapContext } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { HandMoveWatch, MapCamera } from '../map/MapCamera';
import { crowdPoints, crowdShort, showsOnMap } from '../map/crowdPoints';
import { eventInBounds, MapSettle, type ViewBounds } from '../map/viewBounds';
import { AreaSwitcher } from '../components/AreaSwitcher';
import { DateScore } from '../components/DateScore';
import { ArrowRight, ChevronDown, RecenterIcon, SearchIcon } from '../components/Icons';
import { sheetBadges } from '../lib/chips';
import { dayWordFor } from '../lib/dayWord';
import { listTitle, mapTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, markOpenedFromMap, readMapMemory, saveMapMemory, type MapMemory } from '../lib/mapReturn';
import { quietStakes } from '../lib/stakes';
import { clockTime, headerDate, pastRelativeLabel, shortLocalDate } from '../lib/dates';
import { orderSheetEvents } from '../lib/sheetOrder';
import { useSheetDrag } from '../lib/useSheetDrag';
import { mapPath, datePath, useView } from '../lib/view';
import { MonthSheet } from '../components/MonthSheet';
import { DayStrip } from '../components/DayStrip';

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
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const nextPlan = nextSavedPlan(log);
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

  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  useEffect(() => {
    let current = true;
    getUpcoming(metro.id, date, 2).then((u) => current && setUpcoming(u));
    return () => {
      current = false;
    };
  }, [metro.id, date]);

  const shown = day && day.date === date ? day : null;
  const rating = shown?.rating ?? null;
  // Under-floor rooms stay in the day's catalog. They are not pins, sheet rows, or part of this count.
  const dayEvents = (shown?.events ?? []).filter(showsOnMap);

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
  }, [date]);

  const initialMetro = useRef(metro.id);
  useEffect(() => {
    if (metro.id === initialMetro.current) return;
    setFreezeCamera(false);
    setMovedByHand(false);
    setLegend(false); // the key closes on a city switch (C048)
  }, [metro.id]);

  const select = useCallback((id: string | null) => {
    setFreezeCamera(false);
    setSelectedId(id);
    if (id) setLegend(false); // and on an event pick
  }, []);
  const selected = events.find((e) => e.id === selectedId) ?? null;

  const headerRating = rating ? rating.rating : null;
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

  const [bounds, setBounds] = useState<ViewBounds | null>(null);
  useEffect(() => {
    setBounds(null);
  }, [metro.id, date]);
  const onMap = useMemo(() => events.filter((event) => eventInBounds(event, bounds)), [events, bounds]);
  const sheetEvents = useMemo(() => orderSheetEvents(onMap, selected), [onMap, selected]);
  // The header already names the day (Kylie, Oct 6: say it once).
  const dateLine = shown ? 'On the map' : ' ';
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
          <CrowdLayer points={points} selectedId={selectedId} onSelect={select} />
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
        <div className="map-header-top">
          <div ref={areaRef}>
            <AreaSwitcher metro={metro} open={menu === 'area'} onOpenChange={(next) => setMenu(next ? 'area' : null)} />
          </div>
          <button type="button" className="round-button" aria-label="Find a date" onClick={() => setMonthOpen(true)}>
            <SearchIcon />
          </button>
        </div>
        <div className="map-header-score">
          <div className="map-header-dateblock">
            <button type="button" className="map-header-date" aria-label="Pick a date" aria-haspopup="dialog" aria-expanded={monthOpen} onClick={() => setMonthOpen((v) => !v)}>
              <span>{headerDate(date, today)}</span>
              <ChevronDown />
              {pastLabel && <span className="map-header-past">{pastLabel}</span>}
            </button>
            {caption.trim() && <div className="map-header-count">{caption}</div>}
          </div>
          <DateScore
            rating={headerRating}
            empty={showScore ? shown?.empty : undefined}
            showScore={showScore}
          />
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
        {nextPlan && <SavedDateCard plan={nextPlan} />}
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
                <li className="map-key-note">An event's friction, Moderate to Extreme, is its own fight for a crowd.</li>
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

      <section className="sheet" ref={sheetRef} aria-label={isToday ? 'Today' : shortLocalDate(date)}>
        <div className="sheet-top" ref={topRef}>
          <div
            className="sheet-grab"
            role="button"
            tabIndex={0}
            aria-expanded={open}
            aria-label={open ? 'Collapse the list' : 'Expand the list'}
            onClick={grabClick}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSheetOpen(!open)}
          >
            <span className="sheet-handle" aria-hidden />
            <div className="sheet-title">{dateLine}</div>
          </div>

          {selected && (
            <>
              <div className="selected-row">
                <EventRow event={selected} dateEvents={events} selected showDate={selected.date !== date} />
              </div>
              <Link
                to={datePath(selected.date, selected.metroId, selected.id)}
                state={{ fromMap: true }}
                className="gold-button"
                onClick={() => markOpenedFromMap()}
              >
                See this {dayWordFor(selected)}
                <ArrowRight />
              </Link>
            </>
          )}
        </div>

        <div className="sheet-body" ref={bodyRef}>
          {sheetEvents.length > 0 && (
            <ul className="event-list">
              {sheetEvents.map((e) => (
                <li key={e.id}>
                  <EventRow
                    event={e}
                    dateEvents={events}
                    showDate={e.date !== date}
                    selected={e.id === selectedId}
                    onPick={() => {
                      setFreezeCamera(false);
                      setSelectedId(e.id);
                      setOpen(false);
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
          {upcoming.length > 0 && (
            <div className="coming-up">
              <div className="section-title">Coming up</div>
              <ul className="event-list">
                {upcoming.map((e) => (
                  <li key={e.id}>
                    <EventRow
                      event={e}
                      dateEvents={upcoming}
                      showDate
                      href={mapPath({ metroId: e.metroId, date: e.date, today })}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
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

/** One quiet card for the soonest saved date still ahead, in any city. */
function SavedDateCard({ plan }: { plan: Plan }) {
  const [dateEvents, setDateEvents] = useState<CrowdEvent[] | null>(null);
  useEffect(() => {
    let current = true;
    getCityDate(plan.metroId, plan.date).then((day) => {
      if (current) setDateEvents(day.events);
    });
    return () => {
      current = false;
    };
  }, [plan.metroId, plan.date]);

  const event = dateEvents?.find((item) => item.id === plan.eventId);
  const title = event && dateEvents ? mapTitle(event, dateEvents) : plan.title;
  const city = METROS[plan.metroId]?.name;
  const place = [shortLocalDate(plan.date), city].filter(Boolean).join(' · ');
  const body = (
    <>
      <span className="saved-date-kicker">Next saved date</span>
      <span className="saved-date-title">{title}</span>
      {place && <span className="saved-date-meta">{place}</span>}
    </>
  );
  if (!plan.eventId) return <div className="saved-date">{body}</div>;
  return (
    <Link
      to={datePath(plan.date, plan.metroId, plan.eventId)}
      state={{ fromMap: true }}
      className="saved-date"
      onClick={() => markOpenedFromMap()}
    >
      {body}
    </Link>
  );
}


/** Same venue name the event page uses. Every On-the-map row shows it. */
function sheetVenue(event: CrowdEvent): string | null {
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    return venue ? venueNameOn(venue, event.date) : null;
  }
  return event.place.name;
}

/** One sheet card: the same lines as the map chip, plus a quiet venue and the badges. */
function EventRow({
  event: e,
  dateEvents,
  selected,
  onPick,
  showDate,
  href,
}: {
  event: CrowdEvent;
  dateEvents: CrowdEvent[];
  selected?: boolean;
  onPick?: () => void;
  showDate?: boolean;
  href?: string;
}) {
  const badges = sheetBadges(e);
  const time = e.start ? clockTime(e.start) : 'Time TBA';
  const crowd = crowdShort(e);
  const detail = showDate ? `${shortLocalDate(e.date)} · ${time} · ${crowd}` : `${time} · ${crowd}`;
  const venue = sheetVenue(e);
  const stakes = quietStakes(e, dateEvents);
  const body = (
    <>
      <span className="event-main">
        <span className="event-title">{listTitle(e)}</span>
        {venue && <span className="event-venue">{venue}</span>}
        {stakes && <span className="event-stakes">{stakes}</span>}
        <span className="event-meta">{detail}</span>
      </span>
      {badges.length > 0 && (
        <span className="event-badges">
          {badges.map((badge) => (
            <span key={badge.kind} className={`chip chip-${badge.kind}${badge.level ? ` chip-f ${badge.level}` : ''}`}>
              {badge.text}
            </span>
          ))}
        </span>
      )}
    </>
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
