import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { getCityDate, getUpcoming, type CityDate, type CrowdEvent } from '../data';
import { BaseMap } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { crowdKind, crowdPoints } from '../map/crowdPoints';
import { NightScore } from '../components/NightScore';
import { ArrowRight, ChevronDown, SearchIcon } from '../components/Icons';
import { eventChip } from '../lib/chips';
import { clockTime, shortDate, shortLocalDate } from '../lib/dates';
import { useView } from '../lib/view';

type Mode = 'crowds' | 'traffic';

// Room the header and the collapsed sheet take on the full-screen map; dots and
// labels are kept out of it.
const INSETS = { top: 190, bottom: 200 };

// The map is the screen; the header and the sheet sit on it. Opens on Today, even
// when it's quiet. A famous night opens here too ("/?date=2024-10-25").
// One view (place + date), one selected event shared by the dot, its label and its row.
export function MapScreen() {
  const [mode, setMode] = useState<Mode>('crowds');
  const [legend, setLegend] = useState(false);
  const { metro, date, isToday } = useView();

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
  const points = useMemo(() => (shown && mode === 'crowds' ? crowdPoints(shown.events, date) : []), [shown, mode, date]);
  const rating = shown?.rating ?? null;
  const events = shown?.events ?? [];

  // The sheet has two heights: collapsed (grabber + the night line) and expanded (the list).
  // It starts expanded on a quiet date, where the list is all there is to see.
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    setSelectedId(null);
    setOpen(false);
  }, [date]);
  useEffect(() => {
    if (shown && shown.events.length === 0) setOpen(true);
  }, [shown]);

  const select = useCallback((id: string | null) => setSelectedId(id), []);
  const selected = events.find((e) => e.id === selectedId) ?? null;

  const caption = !shown
    ? ' '
    : events.length === 0
      ? isToday
        ? 'No big events found for today yet'
        : 'No big events found for this date'
      : `${events.length} big ${events.length === 1 ? 'event' : 'events'} that day`;

  const nightLine = !shown
    ? ' '
    : events.length === 0
      ? isToday
        ? 'Quiet so far today.'
        : 'Quiet on this date.'
      : rating
        ? `Squeezed most: ${rating.squeezedMost}`
        : 'Big events that day';

  // Drag the grabber up or down to change the sheet's height; a tap toggles it.
  const dragY = useRef<number | null>(null);
  const grabStart = (e: PointerEvent) => {
    dragY.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const grabEnd = (e: PointerEvent) => {
    if (dragY.current === null) return;
    const dy = e.clientY - dragY.current;
    dragY.current = null;
    setOpen(Math.abs(dy) < 24 ? (v) => !v : dy < 0);
  };

  return (
    <div className={`screen map-screen${open ? ' sheet-open' : ''}`}>
      <div className="map-area">
        <BaseMap metro={metro}>
          <CrowdLayer points={points} selectedId={selectedId} onSelect={select} insets={INSETS} />
        </BaseMap>
      </div>

      <header className="map-header">
        <div className="map-header-top">
          <Link to="/nights" className="date-button">
            {isToday ? `Today · ${shortDate(new Date(), metro)}` : shortLocalDate(date)}
            <ChevronDown />
          </Link>
          <Link to="/nights" className="round-button" aria-label="Search nights">
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
      </header>

      {(mode === 'traffic' || points.length > 0) && (
        <div className="map-question">
          {mode === 'crowds' ? 'Where did the crowds go?' : 'Should I brave the roads?'}
          {mode === 'traffic' && <span className="estimate-chip">Estimate · not live</span>}
        </div>
      )}

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

      <section className="sheet" aria-label={isToday ? 'Today' : shortLocalDate(date)}>
        <div
          className="sheet-grab"
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-label={open ? 'Collapse the list' : 'Expand the list'}
          onPointerDown={grabStart}
          onPointerUp={grabEnd}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen((v) => !v)}
        >
          <span className="sheet-handle" aria-hidden />
          <div className="sheet-title">{nightLine}</div>
        </div>

        {!open && selected && (
          <div className="selected-row">
            <EventRow event={selected} selected />
          </div>
        )}

        {open && (
          <div className="sheet-body">
            {events.length > 0 && (
              <ul className="event-list">
                {events.map((e) => (
                  <li key={e.id}>
                    <EventRow
                      event={e}
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
            {upcoming.length > 0 && (
              <div className="coming-up">
                <div className="section-title">Coming up</div>
                <ul className="event-list">
                  {upcoming.map((e) => (
                    <li key={e.id}>
                      <Link to={`/?date=${e.date}`} className="event-row">
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
        )}

        {selected && (
          <Link to={`/event/${selected.id}`} className="gold-button">
            See what beat it
            <ArrowRight />
          </Link>
        )}
      </section>
    </div>
  );
}

/** One event: time, title, the labeled crowd, and one chip (friction, or why it's notable). */
function EventRow({ event: e, selected, onPick }: { event: CrowdEvent; selected?: boolean; onPick?: () => void }) {
  const figure = e.crowd.find((c) => c.count !== undefined);
  const chip = eventChip(e);
  const body = (
    <>
      <span className="event-time">{e.start ? clockTime(e.start) : 'Time n/a'}</span>
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
