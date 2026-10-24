import { useEffect, useRef, useState } from 'react';
import { scoreBand, scoreLabel, formatScore, type ScoreBand } from '../config/scoreLabels';
import { weekOf } from '../data/cityList';
import { addDays } from '../lib/dates';

/** What the calendar knows about one day: its read, and whether the list has a row for it. */
export interface CalendarRead {
  rating: number | null;
  hasEvents: boolean;
}

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const MONTH = (date: string, style: 'long' | 'short') => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { month: style, timeZone: 'UTC' });

/** "October 2026", or "Oct – Nov 2026" when the rows span two months (V05). */
export function calendarLabel(first: string, last: string): string {
  const fy = first.slice(0, 4);
  const ly = last.slice(0, 4);
  if (first.slice(0, 7) === last.slice(0, 7)) return `${MONTH(first, 'long')} ${fy}`;
  if (fy === ly) return `${MONTH(first, 'short')} – ${MONTH(last, 'short')} ${ly}`;
  return `${MONTH(first, 'short')} ${fy} – ${MONTH(last, 'short')} ${ly}`;
}

/** How long a finger on the calendar keeps the list from pulling it back (Apple Calendar behavior). */
const HOLD_MS = 1800;
/** Rows that must have their reads when one is on screen: the visible ones and a little ahead. */
const AHEAD_ROWS = 5;

/**
 * The calendar (build notes 4, 1.4; Kylie V05, Oct 13): its own scroller of week rows, separate from the
 * list but linked to it, like Apple Calendar. Browse weeks here without moving the list; a tap on a day
 * moves the list; when the list moves, this scrolls to its week unless a finger was just on it. Three
 * rows and half of the next show, so it reads as scrollable. Plain day numbers on soft squares in the
 * read-box blue ramp (squares, Kylie Oct 13); today ringed; a small bar marks the day at the top of the
 * list. Since build 7.1 (M29; Kylie, Oct 23, 2026) every day wears its verdict color, Cooked in ink with a gold
 * number, and past days keep the color faded; a legend under the grid names the pairs.
 */
export function WeekCalendar({
  mondays,
  reads,
  today,
  range,
  topDate,
  onPick,
  onNeed,
}: {
  /** Every week of the city's range, Monday first. */
  mondays: string[];
  reads: ReadonlyMap<string, CalendarRead>;
  today: string;
  range: { from: string; to?: string; through: string };
  /** The day at the top of the list: the calendar follows its week and marks it. */
  topDate: string;
  onPick: (date: string) => void;
  /** The weeks whose reads this calendar wants now (visible and just ahead). */
  onNeed: (mondays: string[]) => void;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const holdUntil = useRef(0);
  const programmatic = useRef(0);
  const leadIndex = Math.max(0, mondays.findIndex((m) => topDate >= m && topDate <= addDays(m, 6)));
  const [firstRow, setFirstRow] = useState(leadIndex);

  const rowHeight = () => (scroller.current?.firstElementChild as HTMLElement | null)?.offsetHeight ?? 44;
  const scrollToRow = (index: number, smooth: boolean) => {
    const el = scroller.current;
    if (!el) return;
    programmatic.current = Date.now() + (smooth ? 700 : 150);
    el.scrollTo({ top: index * rowHeight(), behavior: smooth ? 'smooth' : 'auto' });
  };

  // The list's week sits in the middle row of the three, so what is before and after it shows too (Kylie, Oct 14).
  const middleOf = (index: number) => Math.max(0, index - 1);

  // First paint and a new city: the list's week in the middle row, no animation.
  const first = mondays[0];
  useEffect(() => {
    scrollToRow(middleOf(leadIndex), false);
    setFirstRow(middleOf(leadIndex));
    onNeed(mondays.slice(middleOf(leadIndex), middleOf(leadIndex) + AHEAD_ROWS));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [first, mondays.length]);

  // The list moved to another week: follow it, unless a finger was just on the calendar.
  useEffect(() => {
    if (Date.now() < holdUntil.current) {
      scheduleSync();
      return;
    }
    scrollToRow(middleOf(leadIndex), true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadIndex]);

  // A hold is the calendar being scrolled by hand (not a tap). When it ends, the calendar catches up with
  // the list's week if that row is not on screen, so the bar marker is never left off screen.
  const syncTimer = useRef<number | undefined>(undefined);
  const leadRef = useRef(leadIndex);
  leadRef.current = leadIndex;
  const firstRowRef = useRef(firstRow);
  firstRowRef.current = firstRow;
  const scheduleSync = () => {
    window.clearTimeout(syncTimer.current);
    syncTimer.current = window.setTimeout(() => {
      if (Date.now() < holdUntil.current) return scheduleSync();
      const lead = leadRef.current;
      if (lead < firstRowRef.current || lead > firstRowRef.current + 2) scrollToRow(Math.max(0, lead - 1), true);
    }, Math.max(60, holdUntil.current - Date.now() + 60));
  };
  useEffect(() => () => window.clearTimeout(syncTimer.current), []);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const index = Math.max(0, Math.round(el.scrollTop / rowHeight()));
    if (Date.now() > programmatic.current) {
      holdUntil.current = Date.now() + HOLD_MS;
      scheduleSync();
    }
    setFirstRow((cur) => (cur === index ? cur : index));
    onNeed(mondays.slice(index, index + AHEAD_ROWS));
  };
  const hold = () => {
    holdUntil.current = Date.now() + HOLD_MS;
    scheduleSync();
  };

  // The month label follows this calendar's own rows, not the list.
  const topMonday = mondays[Math.min(firstRow, Math.max(0, mondays.length - 1))] ?? topDate;
  const lastShown = addDays(mondays[Math.min(firstRow + 2, mondays.length - 1)] ?? topMonday, 6);
  const label = calendarLabel(topMonday, lastShown);

  return (
    <section className="week-calendar" aria-label="Calendar">
      <h2 className="week-calendar-month">{label}</h2>
      <div className="week-calendar-head" aria-hidden>
        {WEEKDAYS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="week-calendar-viewport">
        <div className="week-calendar-scroll" ref={scroller} onScroll={onScroll} onWheel={hold} onTouchMove={hold}>
          {mondays.map((monday) => (
            <div className="week-calendar-row" key={monday}>
              {weekOf(monday).map((date) => {
                const read = reads.get(date);
                const inRange = date >= range.from && date <= range.through;
                const past = date < today;
                const tinted = inRange && read?.rating != null;
                const band: ScoreBand | null = tinted ? scoreBand(Number(formatScore(read!.rating!))) : null;
                const shown = tinted ? Number(formatScore(read!.rating!)) : null;
                const name = new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });
                return (
                  <button
                    key={date}
                    type="button"
                    className={`week-calendar-day${band ? ` band-${band}` : ''}${date === today ? ' is-today' : ''}${past ? ' is-past' : ''}${date === topDate ? ' is-top' : ''}`}
                    disabled={!inRange}
                    aria-label={`${name}${shown !== null ? `, ${scoreLabel(shown)}` : ''}`}
                    aria-current={date === today ? 'date' : undefined}
                    onClick={() => onPick(date)}
                  >
                    <span className="week-calendar-num">{Number(date.slice(8))}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="week-calendar-legend" aria-label="Verdict colors: each pair is today and ahead, then past">
        {LEGEND.map(([band, word]) => (
          <span key={band} className="week-legend-item">
            <span className={`week-legend-swatch band-${band}`} aria-hidden />
            <span className={`week-legend-swatch is-past band-${band}`} aria-hidden />
            <span className="week-legend-word">{word}</span>
          </span>
        ))}
        <span className="week-legend-caption">Each pair: Today and Ahead · Past</span>
      </div>
    </section>
  );
}

const LEGEND: [ScoreBand, string][] = [
  ['chill', 'Chill'],
  ['mild', 'Mild'],
  ['spicy', 'Spicy'],
  ['brutal', 'Brutal'],
  ['cooked', 'Cooked'],
];
