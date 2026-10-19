import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from './Icons';
import type { Metro } from '../config/metros';
import { getCityDate } from '../data';
import { addDays, daysBetween } from '../lib/dates';
import { mapPath } from '../lib/view';
import { ReadTile, type EmptyKind } from './ReadTile';

/** The row runs at least two weeks back and a month ahead of today; seven cells fit the width, with half a cell peeking at each end. */
const BACK = 14;
const AHEAD = 30;
/** The viewed day sits in the third slot (Kylie, Oct 5). */
const SLOT = 2;
const GAP = 4;
/** Reads are loaded around the day in view, this many cells each way, as the row scrolls. */
const LOAD_BEFORE = 10;
const LOAD_AFTER = 24;

type Read = { rating: number | null; empty?: EmptyKind };

/**
 * The day strip above the map, as a carousel (Kylie, Oct 6): one row of days
 * that scrolls sideways and snaps a cell at a time. Swipe to browse, tap to
 * pick. The viewed day keeps its blue border wherever it scrolls, and glides
 * into the third slot when it changes. Today's number sits in a filled circle,
 * the mark every calendar app uses, so nobody has to know the date. Reads on
 * days ahead sit back a little, since they are forecasts.
 *
 * The row reaches back to `from`, the earliest day with events on file within the last year (the List's range;
 * Kylie, Oct 19, 2026: it had stopped at two weeks by design), and a month ahead. Reads load around the day in
 * view and as the row scrolls, never all at once.
 */
export function DayStrip({ metro, today, date, from, onSearch }: { metro: Metro; today: string; date: string; /** The earliest day the row reaches; null until known, then at least two weeks back. */ from: string | null; onSearch?: () => void }) {
  const start = [from ?? addDays(today, -BACK), addDays(today, -BACK), date].reduce((a, b) => (b < a ? b : a));
  const end = [addDays(today, AHEAD), date].reduce((a, b) => (b > a ? b : a));
  const days = useMemo(() => Array.from({ length: daysBetween(start, end) + 1 }, (_, i) => addDays(start, i)), [start, end]);
  const [reads, setReads] = useState<Map<string, Read>>(new Map());
  const requested = useRef(new Set<string>());
  const stripRef = useRef<HTMLDivElement>(null);

  // Load the reads around a day, once each; a new city starts over.
  const loadAround = (center: string) => {
    const i = days.indexOf(center);
    if (i < 0) return;
    const slice = days.slice(Math.max(0, i - LOAD_BEFORE), i + LOAD_AFTER).filter((d) => !requested.current.has(d));
    if (slice.length === 0) return;
    slice.forEach((d) => requested.current.add(d));
    const forMetro = metro.id;
    Promise.all(slice.map((d) => getCityDate(forMetro, d))).then((list) => {
      if (forMetro !== metro.id) return;
      setReads((prev) => {
        const next = new Map(prev);
        for (const day of list) next.set(day.date, { rating: day.rating?.rating ?? null, empty: day.empty });
        return next;
      });
    });
  };

  useEffect(() => {
    requested.current = new Set();
    setReads(new Map());
    loadAround(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metro.id]);

  useEffect(() => {
    loadAround(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, days.length]);

  const cellStep = () => {
    const cell = stripRef.current?.firstElementChild as HTMLElement | null;
    return cell ? cell.offsetWidth + GAP : 0;
  };

  const scrollTo = (target: string, behavior: ScrollBehavior) => {
    const strip = stripRef.current;
    const cell = strip?.firstElementChild as HTMLElement | null;
    if (!strip || !cell) return;
    const index = days.indexOf(target);
    if (index < 0) return;
    // The snap line sits half a cell in from the left edge (CSS scroll-padding), so
    // the cell before the window peeks on the left and another on the right.
    strip.scrollTo({ left: Math.max(0, (index - SLOT) * (cell.offsetWidth + GAP) - cell.offsetWidth / 2), behavior });
  };

  // As the row scrolls, the reads around the cell in the viewed slot load (a short pause after the last move).
  const scrollTimer = useRef<number | undefined>(undefined);
  const onScroll = () => {
    window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(() => {
      const strip = stripRef.current;
      const step = cellStep();
      if (!strip || step === 0) return;
      const index = Math.round((strip.scrollLeft + step / 2) / step) + SLOT;
      const center = days[Math.min(days.length - 1, Math.max(0, index))];
      if (center) loadAround(center);
    }, 120);
  };
  useEffect(() => () => window.clearTimeout(scrollTimer.current), []);

  // First paint: the viewed day in its slot, no animation. A change glides there.
  const painted = useRef(false);
  useLayoutEffect(() => {
    scrollTo(date, painted.current ? 'smooth' : 'auto');
    painted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, start, end]);

  return (
    <div className="day-strip-wrap">
      {/* The way back to today is the < Today > control in the header (Kylie, Oct 9); nothing sits on the strip's edge. */}
      {/* Search, pinned at the strip's right end (6.1). It may cover the last cell; the strip scrolls. */}
      {onSearch && (
        <button type="button" className="round-button strip-search" aria-label="Search" onClick={onSearch}>
          <SearchIcon />
        </button>
      )}
      <div className="day-strip" ref={stripRef} role="tablist" aria-label="Days" onScroll={onScroll}>
        {days.map((d) => {
          const read = reads.get(d);
          const on = d === date;
          const label = new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
          return (
            <Link
              key={d}
              to={mapPath({ metroId: metro.id, date: d, today })}
              role="tab"
              aria-selected={on}
              className={`day-cell${on ? ' on' : ''}${d > today ? ' forecast' : ''}${d === today ? ' today' : ''}`}
            >
              <span className="day-name">{label}</span>
              <ReadTile rating={read?.rating ?? null} empty={read?.empty} />
              <span className="day-num">{Number(d.slice(8))}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
