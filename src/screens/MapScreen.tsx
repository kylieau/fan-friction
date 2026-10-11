import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
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
  VENUES,
  venueNameOn,
  type CityDate,
  type CrowdEvent,
} from '../data';
import { BaseMap, MapContext } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { HandMoveWatch, MapCamera } from '../map/MapCamera';
import { crowdPoints, crowdThousands, showsOnMap } from '../map/crowdPoints';
import { MapSettle, type ViewBounds } from '../map/viewBounds';
import { AreaSwitcher } from '../components/AreaSwitcher';
import { DateScore } from '../components/DateScore';
import { ChevronLeft, ChevronRight, RecenterIcon } from '../components/Icons';
import { SearchButton } from '../components/SearchButton';
import { listTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, markOpenedFromMap, readMapMemory, saveMapMemory, type MapMemory } from '../lib/mapReturn';
import { quietStakes } from '../lib/stakes';
import { addDays, clockTime, headerDate, pastRelativeLabel, shortLocalDate } from '../lib/dates';
import { useSheetDrag } from '../lib/useSheetDrag';
import { mapPath, useView } from '../lib/view';
import { MonthSheet } from '../components/MonthSheet';
import { DayStrip } from '../components/DayStrip';
import { ChipCard } from '../components/ChipCard';
import { WhyCard } from '../components/WhyCard';
import { CrowdFigure, CrowdMark, EventTags } from '../components/EventTags';
import { drawSize, sizeTier } from '../data';
import { dayWord } from '../lib/dayWord';

type Mode = 'crowds' | 'traffic';
/** No traffic layer exists yet; the switch stays off the map until one does (C079). */
const TRAFFIC_BUILT = false;

// The map is the screen; the header and the sheet sit on it. Opens on Today, even
// when it's quiet. A famous night opens here too ("/?date=2024-10-25").
// One view (place + date), one selected event shared by the dot, its label and its row.
export function MapScreen() {
  const [mode, setMode] = useState<Mode>('crowds');
  const [legend, setLegend] = useState(false);
  const [why, setWhy] = useState(false);
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
  // The day's crowd, over the friction floor, for the count line and the Why card.
  const crowdTotal = dayEvents.filter((e) => sizeTier(e) === 'feeds-friction').reduce((sum, e) => sum + (drawSize(e) ?? 0), 0);
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
    return events
      .filter((e) => e.id !== selected.id && e.date === selected.date && sizeTier(e) === 'feeds-friction' && (!selected.start || !e.start || Math.abs(toMin(e.start) - toMin(selected.start)) <= 60))
      .sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0));
  }, [events, selected]);
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
        {/* The city switcher centered on the top row, the one search button at its right (build notes 2, global search). */}
        <div className="map-header-top centered">
          <div ref={areaRef}>
            <AreaSwitcher metro={metro} open={menu === 'area'} onOpenChange={(next) => setMenu(next ? 'area' : null)} />
          </div>
          <SearchButton metroId={metro.id} className="map-header-search" />
        </div>
        {/* The read box first, then the date, then < Today > to step a day or jump back (Kylie, Oct 9). */}
        <div className="map-header-score">
          {/* Tapping the read opens "Why 4.7 tonight" (build notes 2, P3). */}
          <button type="button" className="datescore-button" aria-label="Why this read" onClick={() => setWhy(true)} disabled={!shown}>
            <DateScore rating={headerRating} empty={showScore ? shown?.empty : undefined} showScore={showScore} />
          </button>
          <div className="map-header-dateblock">
            {/* The big date is a label (6.1): Pick a date lives in search. */}
            <h1 className="map-header-date">
              <span>{headerDate(date, today)}</span>
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
                <li className="map-key-note">
                  Up against: <span className="chip chip-f squeezed">Squeezed</span> <span className="chip chip-f swamped">Swamped</span> <span className="chip chip-f steamrolled">Steamrolled</span>
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

      {/* The sheet rises only for a tapped chip (build notes 2, T1): the compact card on top, the rivals it is fighting under it. The On the map list is gone (P3 took it). */}
      <section className={`sheet${selected ? '' : ' sheet-none'}`} ref={sheetRef} aria-label={selected ? listTitle(selected) : 'Nothing selected'} aria-hidden={!selected}>
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
          {selected && <ChipCard event={selected} onOpen={() => markOpenedFromMap()} />}
        </div>

        <div className="sheet-body" ref={bodyRef}>
          {selected && rivals.length > 0 && (
            <>
              <div className="section-title">Fighting {dayWord(events) === 'day' ? 'today' : 'tonight'}</div>
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
        </div>
      </section>

      {why && shown && <WhyCard events={dayEvents} rating={headerRating} empty={shown.empty} word={dayWord(dayEvents) === 'day' ? 'today' : 'tonight'} onClose={() => setWhy(false)} />}

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



/** Same venue name the event page uses. Every On-the-map row shows it. */
function sheetVenue(event: CrowdEvent): string | null {
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    return venue ? venueNameOn(venue, event.date) : null;
  }
  return event.place.name;
}

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
  const time = e.start ? clockTime(e.start) : 'Time TBA';
  const venue = sheetVenue(e);
  const stakes = quietStakes(e, dateEvents);
  // Two tags under the title (build notes 2): the occasion outline tag, the friction pill. Crowd and time sit on the right.
  const body = (
    <>
      <span className="event-main">
        <span className="event-title">{listTitle(e)}</span>
        <span className="event-tagline">
          <EventTags event={e} />
          {venue && <span className="event-venue">{venue}</span>}
        </span>
        {stakes && <span className="event-stakes">{stakes}</span>}
      </span>
      <span className="event-side">
        <CrowdFigure event={e} />
        <span className="event-meta">{showDate ? `${shortLocalDate(e.date)} · ${time}` : time}</span>
      </span>
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
