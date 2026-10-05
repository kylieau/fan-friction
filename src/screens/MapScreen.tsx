import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { areaMetros, DEFAULT_METRO, METROS, type Metro } from '../config/metros';
import {
  feelsLikeF,
  getCityDate,
  getEventsBetween,
  getPersonalLog,
  getRatedDates,
  getUpcoming,
  nextSavedPlan,
  subscribePersonalLog,
  todayIn,
  VENUES,
  venueNameOn,
  type CityDate,
  type CrowdEvent,
  type NightPlan,
} from '../data';
import { BaseMap, MapContext } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { MapCamera } from '../map/MapCamera';
import { crowdPoints, crowdShort, showsOnMap } from '../map/crowdPoints';
import { eventInBounds, MapSettle, type ViewBounds } from '../map/viewBounds';
import { NightScore } from '../components/NightScore';
import { WhenControl } from '../components/WhenControl';
import { ArrowRight, ChevronDown, SearchIcon, SunIcon } from '../components/Icons';
import { sheetBadges } from '../lib/chips';
import { listTitle, mapTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, markOpenedFromMap, readMapMemory, saveMapMemory, type MapMemory } from '../lib/mapReturn';
import { quietStakes } from '../lib/stakes';
import { addDays, clockTime, headerDate, pastRelativeLabel, shortLocalDate } from '../lib/dates';
import { orderSheetEvents } from '../lib/sheetOrder';
import { useSheetDrag } from '../lib/useSheetDrag';
import { getHomeId, setHomeId } from '../lib/homeCity';
import { eventPath, mapPath, nightsPath, openedMetroId, useView, whenLabel, type WhenSpan } from '../lib/view';

type Mode = 'crowds' | 'traffic';

const LOOKAHEAD_DAYS = 7;

/** Mean of the days from start through end that already have a rating. Unrated days are left out. */
function averageRating(start: string, end: string, rated: ReadonlyMap<string, number>): number | null {
  const scores: number[] = [];
  for (let cursor = start; cursor <= end; cursor = addDays(cursor, 1)) {
    const score = rated.get(cursor);
    if (score !== undefined) scores.push(score);
  }
  if (scores.length === 0) return null;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

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
  const { metro, date, today, isToday, when } = useView();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const nextNight = nextSavedPlan(log);
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

  // Everything listed after this date (live feeds only, so only from today on).
  const canLookAhead = date >= today;
  const [ahead, setAhead] = useState<CrowdEvent[]>([]);
  useEffect(() => {
    let current = true;
    if (!canLookAhead) {
      setAhead([]);
      return;
    }
    getEventsBetween(metro.id, date, addDays(date, LOOKAHEAD_DAYS)).then((u) => current && setAhead(u));
    return () => {
      current = false;
    };
  }, [metro.id, date, canLookAhead]);

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

  // A blank map is boring, so if this date is empty and nobody has picked When yet,
  // the map widens to the next 7 days. A pick always wins.
  // One day shows that day's rating. Next 7 days shows the average of the rated
  // days in the span, and hides the score when none of them are rated.
  const weekAhead = useMemo(
    () => ahead.filter((e) => showsOnMap(e) && e.date <= addDays(date, 7)),
    [ahead, date],
  );
  const autoSpan: WhenSpan = dayEvents.length > 0 ? 'day' : 'week';
  const span: WhenSpan = when === 'week' ? 'week' : !canLookAhead ? 'day' : (when ?? (shown ? autoSpan : 'day'));
  const events = useMemo(
    () => (span === 'day' ? dayEvents : [...dayEvents, ...weekAhead]),
    [span, dayEvents, weekAhead],
  );
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
  const initialDate = useRef(date);
  useEffect(() => {
    if (date === initialDate.current) return;
    setFreezeCamera(false);
    setSelectedId(null);
    setOpen(false);
  }, [date]);

  const initialMetro = useRef(metro.id);
  useEffect(() => {
    if (metro.id === initialMetro.current) return;
    setFreezeCamera(false);
  }, [metro.id]);

  const initialWhen = useRef(when);
  useEffect(() => {
    if (when === initialWhen.current) return;
    setFreezeCamera(false);
  }, [when]);

  const select = useCallback((id: string | null) => {
    setFreezeCamera(false);
    setSelectedId(id);
  }, []);
  const selected = events.find((e) => e.id === selectedId) ?? null;

  const [ratedByDate, setRatedByDate] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    getRatedDates(metro.id).then((rows) => {
      if (current) setRatedByDate(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, [metro.id]);

  const headerRating =
    span === 'week' ? averageRating(date, addDays(date, LOOKAHEAD_DAYS), ratedByDate) : rating ? rating.rating : null;
  const showScore = span === 'day' || headerRating !== null;

  const caption = !shown
    ? ' '
    : dayEvents.length === 0
      ? 'No events'
      : dayEvents.length === 1
        ? '1 event'
        : `${dayEvents.length} events`;
  // One feels-like for the metro, and only while When is Today.
  const feels = feelsLikeF(metro.id, date);
  const showFeels = isToday && span === 'day' && feels !== undefined;

  const [bounds, setBounds] = useState<ViewBounds | null>(null);
  useEffect(() => {
    setBounds(null);
  }, [metro.id, date, span]);
  const onMap = useMemo(() => events.filter((event) => eventInBounds(event, bounds)), [events, bounds]);
  const sheetEvents = useMemo(() => orderSheetEvents(onMap, selected), [onMap, selected]);
  const nightLine = shown ? `${whenLabel(span, isToday, date)} · On the map` : ' ';
  const pastLabel = span === 'day' ? pastRelativeLabel(date, todayIn(DEFAULT_METRO)) : null;

  // The sheet follows your finger (see useSheetDrag); a tap on the grabber toggles it too.
  const sheetRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const whenRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<'area' | 'when' | null>(null);
  useEffect(() => {
    if (!menu) return;
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (areaRef.current?.contains(target) || whenRef.current?.contains(target)) return;
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
          />
          <MapSettle onSettle={setBounds} />
          <RememberMap href={href} selectedId={selectedId} sheetOpen={open} />
        </BaseMap>
      </div>

      <header className="map-header">
        <div className="map-header-top">
          <div ref={areaRef}>
            <AreaSwitcher metro={metro} open={menu === 'area'} onOpenChange={(next) => setMenu(next ? 'area' : null)} />
          </div>
          <Link to={nightsPath({ metroId: metro.id, date })} className="round-button" aria-label="Search nights">
            <SearchIcon />
          </Link>
        </div>
        <div className="map-header-score">
          <div className="map-header-dateblock">
            {span === 'day' && (
              <div className="map-header-date">
                <span>{headerDate(date, today)}</span>
                {pastLabel && <span className="map-header-past">{pastLabel}</span>}
              </div>
            )}
            {caption.trim() && <div className="map-header-count">{caption}</div>}
          </div>
          <NightScore
            rating={headerRating}
            quiet={showScore && shown?.status === 'quiet'}
            showScore={showScore}
          />
        </div>
        <div className="map-chrome">
          <div className="map-chrome-left">
            <div ref={whenRef}>
              <WhenControl
                metro={metro}
                date={date}
                today={today}
                isToday={isToday}
                span={span}
                open={menu === 'when'}
                onOpenChange={(next) => setMenu(next ? 'when' : null)}
              />
            </div>
            {showFeels && (
              <div className="map-feels">
                <SunIcon />
                <span>{feels}°</span>
              </div>
            )}
          </div>
          <div className="segmented small" role="tablist" aria-label="Map mode">
            <button type="button" role="tab" aria-selected={mode === 'crowds'} onClick={() => setMode('crowds')}>
              Crowds
            </button>
            <button type="button" role="tab" aria-selected={mode === 'traffic'} onClick={() => setMode('traffic')}>
              Traffic
            </button>
          </div>
        </div>
        {nextNight && <SavedNightCard plan={nextNight} />}
      </header>

      {points.length > 0 && (
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
                <li className="map-key-glow">Gold glow is the size of the crowd</li>
                <li className="map-key-ring">Pale ring is the one you picked</li>
              </ul>
            </div>
          )}
        </>
      )}

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
            <div className="sheet-title">{nightLine}</div>
          </div>

          {selected && (
            <>
              <div className="selected-row">
                <EventRow event={selected} night={events} selected showDate={selected.date !== date} />
              </div>
              <Link
                to={eventPath(selected.id, selected.metroId)}
                state={{ fromMap: true }}
                className="gold-button"
                onClick={() => markOpenedFromMap()}
              >
                See this event
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
                    night={events}
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
          {span === 'day' && upcoming.length > 0 && (
            <div className="coming-up">
              <div className="section-title">Coming up</div>
              <ul className="event-list">
                {upcoming.map((e) => (
                  <li key={e.id}>
                    <EventRow
                      event={e}
                      night={upcoming}
                      showDate
                      href={mapPath({ metroId: e.metroId, date: e.date, today, when: 'day' })}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/**
 * Closed chip for the current metro. The list floats under the chip, about
 * five rows tall, and does not move the score. Los Angeles is first.
 * Home is a mark on one row. Looking at another city does not change it.
 */
function AreaSwitcher({
  metro,
  open,
  onOpenChange,
}: {
  metro: Metro;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [params, setParams] = useSearchParams();
  const menuId = useId();
  const metros = areaMetros();
  const homeId = openedMetroId();
  const viewingHome = metro.id === getHomeId();
  const pick = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === homeId) next.delete('metro');
    else next.set('metro', id);
    setParams(next);
    onOpenChange(false);
  };
  const makeHome = (id: string) => {
    const viewing = metro.id;
    const next = new URLSearchParams(params);
    if (viewing === id) {
      setHomeId(id);
      next.delete('metro');
      setParams(next, { replace: true });
      return;
    }
    // Keep the city on screen. A bare address means home, so name this city
    // before home changes, or the map would jump.
    if (!params.has('metro')) next.set('metro', viewing);
    setParams(next, { replace: true });
    setHomeId(id);
  };
  return (
    <div className="area-switcher">
      <button
        type="button"
        className="area-chip"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={viewingHome ? `Area, ${metro.name}, home` : 'Area'}
        onClick={() => onOpenChange(!open)}
      >
        {metro.name}
        {viewingHome && <span className="home-mark">Home</span>}
        <ChevronDown />
      </button>
      {open && (
        <div className="area-menu" id={menuId} role="listbox" aria-label="Area">
          {metros.map((item) => {
            const isHome = item.id === getHomeId();
            return (
              <div className="area-row" key={item.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={item.id === metro.id}
                  aria-label={isHome ? `${item.name}, home` : item.name}
                  onClick={() => pick(item.id)}
                >
                  <span>{item.name}</span>
                  {isHome && <span className="home-mark">Home</span>}
                </button>
                {!isHome && (
                  <button type="button" className="set-home" onClick={() => makeHome(item.id)}>
                    Set as home
                  </button>
                )}
              </div>
            );
          })}
        </div>
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

/** One quiet card for the soonest saved night still ahead, in any city. */
function SavedNightCard({ plan }: { plan: NightPlan }) {
  const [night, setNight] = useState<CrowdEvent[] | null>(null);
  useEffect(() => {
    let current = true;
    getCityDate(plan.metroId, plan.date).then((day) => {
      if (current) setNight(day.events);
    });
    return () => {
      current = false;
    };
  }, [plan.metroId, plan.date]);

  const event = night?.find((item) => item.id === plan.eventId);
  const title = event && night ? mapTitle(event, night) : plan.title;
  const city = METROS[plan.metroId]?.name;
  const place = [shortLocalDate(plan.date), city].filter(Boolean).join(' · ');
  const body = (
    <>
      <span className="saved-night-kicker">Next saved night</span>
      <span className="saved-night-title">{title}</span>
      {place && <span className="saved-night-meta">{place}</span>}
    </>
  );
  if (!plan.eventId) return <div className="saved-night">{body}</div>;
  return (
    <Link
      to={eventPath(plan.eventId, plan.metroId)}
      state={{ fromMap: true }}
      className="saved-night"
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
  night,
  selected,
  onPick,
  showDate,
  href,
}: {
  event: CrowdEvent;
  night: CrowdEvent[];
  selected?: boolean;
  onPick?: () => void;
  showDate?: boolean;
  href?: string;
}) {
  const badges = sheetBadges(e);
  const time = e.start ? clockTime(e.start) : 'Time n/a';
  const crowd = crowdShort(e);
  const detail = showDate ? `${shortLocalDate(e.date)} · ${time} · ${crowd}` : `${time} · ${crowd}`;
  const venue = sheetVenue(e);
  const stakes = quietStakes(e, night);
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
            <span key={badge.kind} className={`chip chip-${badge.kind}`}>
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
