import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS, type Metro } from '../config/metros';
import { getCityDate, getEventsBetween, getUpcoming, type CityDate, type CrowdEvent } from '../data';
import { BaseMap } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { crowdKind, crowdPoints } from '../map/crowdPoints';
import { NightScore } from '../components/NightScore';
import { WhenControl } from '../components/WhenControl';
import { ArrowRight, ChevronDown, SearchIcon } from '../components/Icons';
import { eventChip } from '../lib/chips';
import { addDays, clockTime, shortLocalDate } from '../lib/dates';
import { useSheetDrag } from '../lib/useSheetDrag';
import { nightsPath, useView, type WhenSpan } from '../lib/view';

type Mode = 'crowds' | 'traffic';

const LOOKAHEAD_DAYS = 120;

// Room the header, the on-map When pill, and the collapsed sheet take on the
// full-screen map. Dots and labels are kept out of it.
const INSETS = { top: 228, bottom: 200 };

// The map is the screen; the header and the sheet sit on it. Opens on Today, even
// when it's quiet. A famous night opens here too ("/?date=2024-10-25").
// One view (place + date), one selected event shared by the dot, its label and its row.
export function MapScreen() {
  const [mode, setMode] = useState<Mode>('crowds');
  const [legend, setLegend] = useState(false);
  const { metro, date, today, isToday, when } = useView();

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
  const dayEvents = shown?.events ?? [];

  // A blank map is boring, so if this date is empty and nobody has picked When yet,
  // the map widens by itself: next 7 days, then everything listed. A pick always wins.
  // The header rating still describes the base date; a range has no rating of its own.
  const weekAhead = useMemo(() => ahead.filter((e) => e.date <= addDays(date, 7)), [ahead, date]);
  const autoSpan: WhenSpan = dayEvents.length > 0 ? 'day' : weekAhead.length > 0 ? 'week' : 'all';
  const span: WhenSpan = !canLookAhead ? 'day' : (when ?? (shown ? autoSpan : 'day'));
  const events = useMemo(
    () => (span === 'day' ? dayEvents : span === 'week' ? [...dayEvents, ...weekAhead] : [...dayEvents, ...ahead]),
    [span, dayEvents, weekAhead, ahead],
  );
  // The map shows one pin and label per venue: the next event there. The sheet's list
  // still holds every event, and picking one from it rings its venue's pin.
  const { points, pinFor } = useMemo(() => {
    const all = shown && mode === 'crowds' ? crowdPoints(events, date) : [];
    all.sort((a, b) => (a.event.date + (a.event.start ?? '')).localeCompare(b.event.date + (b.event.start ?? '')));
    const venueKey = (p: (typeof all)[number]) => (p.event.place.type === 'venue' ? p.event.place.venueId : p.event.id);
    const next = new Map<string, (typeof all)[number]>();
    for (const p of all) if (!next.has(venueKey(p))) next.set(venueKey(p), p);
    const idToPin = new Map(all.map((p) => [p.event.id, next.get(venueKey(p))!.event.id]));
    return { points: [...next.values()], pinFor: (id: string | null) => (id ? (idToPin.get(id) ?? id) : null) };
  }, [shown, mode, events, date]);
  // The sheet has two heights: collapsed (grabber + the night line) and expanded (the list).
  // It starts expanded on a quiet date, where the list is all there is to see.
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    setSelectedId(null);
    setOpen(false);
  }, [date]);

  const select = useCallback((id: string | null) => setSelectedId(id), []);
  const selected = events.find((e) => e.id === selectedId) ?? null;

  const caption = !shown
    ? ' '
    : dayEvents.length === 0
      ? isToday
        ? 'No big events today yet'
        : 'No big events found for this date'
      : `${dayEvents.length} big ${dayEvents.length === 1 ? 'event' : 'events'} that day`;

  const nightLine = !shown
    ? ' '
    : dayEvents.length === 0
      ? `${isToday ? 'Quiet so far today.' : 'Quiet on this date.'}${events.length > 0 ? ` Showing ${span === 'week' ? 'the next 7 days' : 'what\'s coming up'}.` : ''}`
      : rating
        ? `Squeezed most: ${rating.squeezedMost}`
        : 'Big events that day';

  // The sheet follows your finger (see useSheetDrag); a tap on the grabber toggles it too.
  const sheetRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { wasDragged } = useSheetDrag(sheetRef, topRef, bodyRef, open, setOpen);
  const grabClick = () => {
    if (!wasDragged()) setOpen((v) => !v);
  };

  return (
    <div className={`screen map-screen${open ? ' sheet-open' : ''}`}>
      <div className="map-area">
        <BaseMap metro={metro}>
          <CrowdLayer points={points} selectedId={pinFor(selectedId)} onSelect={select} insets={INSETS} />
        </BaseMap>
      </div>

      <header className="map-header">
        <div className="map-header-top">
          <AreaSwitcher metro={metro} />
          <Link to={nightsPath({ metroId: metro.id, date })} className="round-button" aria-label="Search nights">
            <SearchIcon />
          </Link>
        </div>
        <div className="map-header-score">
          <NightScore rating={rating ? rating.rating : null} quiet={shown?.status === 'quiet'} caption={caption} />
          <div className="segmented small" role="tablist" aria-label="Map mode">
            <button type="button" role="tab" aria-selected={mode === 'crowds'} onClick={() => setMode('crowds')}>
              Crowds
            </button>
            <button type="button" role="tab" aria-selected={mode === 'traffic'} onClick={() => setMode('traffic')}>
              Traffic
            </button>
          </div>
        </div>
        <div className="map-pills">
          <WhenControl metro={metro} date={date} today={today} isToday={isToday} span={span} />
          {(mode === 'traffic' || points.length > 0) && (
            <div className="map-question">
              {mode === 'crowds' ? 'Where did the crowds go?' : 'Should I brave the roads?'}
              {mode === 'traffic' && <span className="estimate-chip">Estimate · not live</span>}
            </div>
          )}
        </div>
      </header>

      {points.length > 0 && (
        <>
          <button type="button" className="legend-button" aria-label="What do the colors mean?" onClick={() => setLegend((v) => !v)}>
            ?
          </button>
          {legend && (
            <div className="legend-card" role="note">
              <b>Gold glow</b> marks where an event was. Wider means a bigger venue. Stronger means the known crowd filled more of it;
              faint means no count found yet. <b>★</b> is the biggest known crowd that day. Counts are announced, reported or
              estimated, and say so.
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
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen((v) => !v)}
          >
            <span className="sheet-handle" aria-hidden />
            <div className="sheet-title">{nightLine}</div>
          </div>

          {selected && (
            <>
              <div className="selected-row">
                <EventRow event={selected} selected showDate={selected.date !== date} />
              </div>
              <Link to={`/event/${selected.id}`} className="gold-button">
                See what beat it
                <ArrowRight />
              </Link>
            </>
          )}
        </div>

        <div className="sheet-body" ref={bodyRef}>
          {events.length > 0 && (
            <ul className="event-list">
              {events.map((e) => (
                <li key={e.id}>
                  <EventRow
                    event={e}
                    showDate={e.date !== date}
                    selected={e.id === selectedId}
                    onPick={() => {
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
                    <Link to={`/?date=${e.date}&when=day`} className="event-row">
                      <span className="event-time">{shortLocalDate(e.date)}</span>
                      <span className="event-main">
                        <span className="event-title">{e.title}</span>
                        <span className="event-meta">{e.start ? clockTime(e.start) : 'Time n/a'}</span>
                      </span>
                    </Link>
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
 * The top bar is the area. Los Angeles is the only metro for now, and the
 * control still shows so a later city does not have to move it.
 */
function AreaSwitcher({ metro }: { metro: Metro }) {
  const [params, setParams] = useSearchParams();
  const metros = Object.values(METROS);
  return (
    <label className="area-switcher">
      <span className="sr-only">Area</span>
      <select
        value={metro.id}
        aria-label="Area"
        onChange={(event) => {
          const next = new URLSearchParams(params);
          if (event.target.value === DEFAULT_METRO.id) next.delete('metro');
          else next.set('metro', event.target.value);
          setParams(next);
        }}
      >
        {metros.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <ChevronDown />
    </label>
  );
}

/** One event: time, title, the labeled crowd, and one chip (friction, or why it's notable). */
function EventRow({ event: e, selected, onPick, showDate }: { event: CrowdEvent; selected?: boolean; onPick?: () => void; showDate?: boolean }) {
  const figure = e.crowd.find((c) => c.count !== undefined);
  const chip = eventChip(e);
  const body = (
    <>
      <span className={`event-time${showDate ? ' wide' : ''}`}>
        {showDate && <span className="event-day">{shortLocalDate(e.date)}</span>}
        {e.start ? clockTime(e.start) : 'Time n/a'}
      </span>
      <span className="event-main">
        <span className="event-title">{e.title}</span>
        <span className="event-meta">
          {figure?.count !== undefined
            ? `${figure.count.toLocaleString('en-US')} ${crowdKind(e)}`
            : e.crowd.some((c) => c.soldOut)
              ? 'Sold out'
              : 'No count yet'}
          {e.crowd.some((c) => c.soldOut) && figure?.count !== undefined ? ' · sold out' : ''}
        </span>
      </span>
      {chip && <span className={`chip ${chip.kind === 'friction' ? 'chip-friction' : 'chip-why'}`}>{chip.text}</span>}
    </>
  );
  const cls = `event-row${selected ? ' selected' : ''}`;
  return onPick ? (
    <button type="button" className={cls} onClick={onPick} aria-pressed={selected}>
      {body}
    </button>
  ) : (
    <div className={cls}>{body}</div>
  );
}
