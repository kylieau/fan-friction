import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Metro } from '../config/metros';
import { getCityDate } from '../data';
import { addDays, daysBetween } from '../lib/dates';
import { mapPath } from '../lib/view';
import { ReadTile } from './ReadTile';

/** The row runs two weeks back and a month ahead of its anchor; seven cells fit the width. */
const BACK = 14;
const AHEAD = 30;
/** The viewed day sits in the third slot (Kylie, Oct 5). */
const SLOT = 2;
const GAP = 4;

type Read = { rating: number | null; quiet: boolean };

/**
 * The day strip above the map, as a carousel (Kylie, Oct 6): one row of days
 * that scrolls sideways and snaps a cell at a time. Swipe to browse, tap to
 * pick. The viewed day keeps its blue border wherever it scrolls, and glides
 * into the third slot when it changes. A Today button brings the row back
 * when today has scrolled out of view. Reads on days ahead sit back a little,
 * since they are forecasts.
 */
export function DayStrip({ metro, today, date }: { metro: Metro; today: string; date: string }) {
  // The row is anchored on today unless the viewed day is far from it (a famous night).
  const anchor = Math.abs(daysBetween(today, date)) <= BACK ? today : date;
  const days = Array.from({ length: BACK + 1 + AHEAD }, (_, i) => addDays(anchor, i - BACK));
  const [reads, setReads] = useState<Map<string, Read>>(new Map());
  const stripRef = useRef<HTMLDivElement>(null);
  const [todayAway, setTodayAway] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    let current = true;
    Promise.all(days.map((d) => getCityDate(metro.id, d))).then((list) => {
      if (!current) return;
      setReads(new Map(list.map((day) => [day.date, { rating: day.rating?.rating ?? null, quiet: day.status === 'quiet' }])));
    });
    return () => {
      current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metro.id, anchor]);

  const scrollTo = (target: string, behavior: ScrollBehavior) => {
    const strip = stripRef.current;
    const cell = strip?.firstElementChild as HTMLElement | null;
    if (!strip || !cell) return;
    const index = days.indexOf(target);
    if (index < 0) return;
    strip.scrollTo({ left: Math.max(0, (index - SLOT) * (cell.offsetWidth + GAP)), behavior });
  };

  // First paint: the viewed day in its slot, no animation. A change glides there.
  const painted = useRef(false);
  useLayoutEffect(() => {
    scrollTo(date, painted.current ? 'smooth' : 'auto');
    painted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, anchor]);

  // Is today on screen? Checked as the row settles.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const check = () => {
      const cell = strip.firstElementChild as HTMLElement | null;
      const index = days.indexOf(today);
      if (!cell || index < 0) {
        setTodayAway(null);
        return;
      }
      const step = cell.offsetWidth + GAP;
      const left = index * step - strip.scrollLeft;
      setTodayAway(left < -step / 2 ? 'left' : left + cell.offsetWidth > strip.clientWidth + step / 2 ? 'right' : null);
    };
    check();
    strip.addEventListener('scroll', check, { passive: true });
    return () => strip.removeEventListener('scroll', check);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchor, today]);

  return (
    <div className="day-strip-wrap">
      <div className="day-strip" ref={stripRef} role="tablist" aria-label="Days">
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
              <ReadTile rating={read?.rating ?? null} quiet={read?.quiet} />
              <span className="day-num">{Number(d.slice(8))}</span>
            </Link>
          );
        })}
      </div>
      {todayAway && (
        <button type="button" className={`day-today-jump ${todayAway}`} onClick={() => scrollTo(today, 'smooth')}>
          {todayAway === 'left' ? '‹ Today' : 'Today ›'}
        </button>
      )}
    </div>
  );
}
