import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { areaMetros, DEFAULT_METRO, type Metro } from '../config/metros';
import { feelsLikeF, getCityDate, getEventsBetween, getRatedDates, getUpcoming, type CityDate, type CrowdEvent } from '../data';
import { BaseMap } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { crowdPoints, crowdThousands } from '../map/crowdPoints';
import { eventInBounds, MapSettle, type ViewBounds } from '../map/viewBounds';
import { NightScore } from '../components/NightScore';
import { WhenControl } from '../components/WhenControl';
import { ArrowRight, ChevronDown, SearchIcon, SunIcon } from '../components/Icons';
import { eventChip } from '../lib/chips';
import { addDays, clockTime, shortLocalDate } from '../lib/dates';
import { useSheetDrag } from '../lib/useSheetDrag';
import { nightsPath, useView, whenLabel, type WhenSpan } from '../lib/view';

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
  // the map widens to the next 7 days. A pick always wins.
  // One day shows that day's rating. Next 7 days shows the average of the rated
  // days in the span, and hides the score when none of them are rated.
  const weekAhead = useMemo(() => ahead.filter((e) => e.date <= addDays(date, 7)), [ahead, date]);
  const autoSpan: WhenSpan = dayEvents.length > 0 ? 'day' : 'week';
  const span: WhenSpan = when === 'week' ? 'week' : !canLookAhead ? 'day' : (when ?? (shown ? autoSpan : 'day'));
  const events = useMemo(
    () => (span === 'day' ? dayEvents : [...dayEvents, ...weekAhead]),
    [span, dayEvents, weekAhead],
  );
  // The map shows one pin and label per venue: the next event there. The sheet
  // lists the events inside the map after it settles, and picking one rings its pin.
  const { points, pinFor } = useMemo(() => {
    const all = shown && mode === 'crowds' ? crowdPoints(events, date) : [];
    all.sort((a, b) => (a.event.date + (a.event.start ?? '')).localeCompare(b.event.date + (b.event.start ?? '')));
    const venueKey = (p: (typeof all)[number]) => (p.event.place.type === 'venue' ? p.event.place.venueId : p.event.id);
    const next = new Map<string, (typeof all)[number]>();
    for (const p of all) if (!next.has(venueKey(p))) next.set(venueKey(p), p);
    const idToPin = new Map(all.map((p) => [p.event.id, next.get(venueKey(p))!.event.id]));
    return { points: [...next.values()], pinFor: (id: string | null) => (id ? (idToPin.get(id) ?? id) : null) };
  }, [shown, mode, events, date]);
  // Collapsed, the sheet peeks the title. Open, it is as tall as the rows, and the
  // list scrolls once that would pass the sheet's max height.
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    setSelectedId(null);
    setOpen(false);
  }, [date]);

  const select = useCallback((id: string | null) => setSelectedId(id), []);
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
  const nightLine = shown ? `${whenLabel(span, isToday, date)} · On the map` : ' ';

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
  const { wasDragged } = useSheetDrag(sheetRef, topRef, bodyRef, open, setOpen);
  const grabClick = () => {
    if (!wasDragged()) setOpen((v) => !v);
  };

  return (
    <div className={`screen map-screen${open ? ' sheet-open' : ''}`}>
      <div className="map-area" onPointerDown={() => setMenu(null)}>
        <BaseMap metro={metro}>
          <CrowdLayer points={points} selectedId={pinFor(selectedId)} onSelect={select} insets={INSETS} />
          <MapSettle onSettle={setBounds} />
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
          <NightScore
            rating={headerRating}
            quiet={showScore && shown?.status === 'quiet'}
            showScore={showScore}
            caption={caption}
          />
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
          {(mode === 'traffic' || points.length > 0) && (
            <div className="map-question">
              {mode === 'crowds' ? 'Where did the crowds go?' : 'Should I brave the roads?'}
              {mode === 'traffic' && <span className="estimate-chip">Estimate · not live</span>}
            </div>
          )}
        </div>
        {showFeels && (
          <div className="map-feels">
            <SunIcon />
            <span>{feels}°</span>
          </div>
        )}
      </header>

      {points.length > 0 && (
        <>
          <button type="button" className="legend-button" aria-label="What do the colors mean?" onClick={() => setLegend((v) => !v)}>
            ?
          </button>
          {legend && (
            <div className="legend-card" role="note">
              <b>Gold glow</b> marks where an event was. Wider means a bigger venue. Stronger means the known crowd filled more of it;
              faint means no count found yet. <b>★</b> is the biggest known crowd that day. A count reads in
              thousands, like 40.0k. The list adds “est” when that number is an estimate. Sold out and no count yet stay in words.
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
          {onMap.length > 0 && (
            <ul className="event-list">
              {onMap.map((e) => (
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
 * Closed chip for the current metro. The list floats under the chip, about
 * five rows tall, and does not move the score. Los Angeles is first.
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
  const pick = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === DEFAULT_METRO.id) next.delete('metro');
    else next.set('metro', id);
    setParams(next);
    onOpenChange(false);
  };
  return (
    <div className="area-switcher">
      <button
        type="button"
        className="area-chip"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="Area"
        onClick={() => onOpenChange(!open)}
      >
        {metro.name}
        <ChevronDown />
      </button>
      {open && (
        <div className="area-menu" id={menuId} role="listbox" aria-label="Area">
          {metros.map((item) => (
            <button type="button" role="option" aria-selected={item.id === metro.id} key={item.id} onClick={() => pick(item.id)}>
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Same thousands shorthand as the map, plus "est" when the number is an estimate. Sold out and no count stay in words. */
function crowdWords(event: CrowdEvent): string {
  const figure = event.crowd.find((c) => c.count !== undefined);
  const sold = event.crowd.some((c) => c.soldOut);
  if (figure?.count !== undefined) {
    const words = `${crowdThousands(figure.count)}${figure.kind === 'estimated' ? ' est' : ''}`;
    return sold ? `${words} · sold out` : words;
  }
  return sold ? 'Sold out' : 'No count yet';
}

/** One event: title, then time and the labeled crowd, plus one chip. */
function EventRow({ event: e, selected, onPick, showDate }: { event: CrowdEvent; selected?: boolean; onPick?: () => void; showDate?: boolean }) {
  const chip = eventChip(e);
  const time = e.start ? clockTime(e.start) : 'Time n/a';
  const when = showDate ? `${time} · ${shortLocalDate(e.date)}` : time;
  const body = (
    <>
      <span className="event-main">
        <span className="event-title">{e.title}</span>
        <span className="event-meta">
          {when} · {crowdWords(e)}
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
