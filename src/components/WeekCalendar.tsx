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

/**
 * The K1 calm calendar (build notes 4, 1.4; Kylie V05): three week rows of plain day numbers on soft
 * circles in the read-box blue ramp. No scores or words here: the exact read sits in the list's day
 * headers. Today is ringed; past days and days with no read are plain grey numbers. A tap jumps the list.
 * Cooked has no drawn treatment on the board, so it takes the same darkest blue as Brutal.
 */
export function WeekCalendar({
  monday,
  reads,
  today,
  range,
  onPick,
}: {
  /** The Monday of the first of three rows; the rows follow the list week by week. */
  monday: string;
  reads: ReadonlyMap<string, CalendarRead>;
  today: string;
  range: { from: string; through: string };
  onPick: (date: string) => void;
}) {
  const rows = [0, 1, 2].map((i) => weekOf(addDays(monday, i * 7)));
  const label = calendarLabel(rows[0][0], rows[2][6]);
  return (
    <section className="week-calendar" aria-label="Calendar">
      <h2 className="week-calendar-month">{label}</h2>
      <div className="week-calendar-head" aria-hidden>
        {WEEKDAYS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      {rows.map((week) => (
        <div className="week-calendar-row" key={week[0]}>
          {week.map((date) => {
            const read = reads.get(date);
            const inRange = date >= range.from && date <= range.through;
            const past = date < today;
            const tinted = !past && inRange && read?.rating != null;
            const band: ScoreBand | null = tinted ? scoreBand(Number(formatScore(read!.rating!))) : null;
            const number = Number(date.slice(8));
            const shown = tinted ? Number(formatScore(read!.rating!)) : null;
            const name = new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });
            return (
              <button
                key={date}
                type="button"
                className={`week-calendar-day${band ? ` band-${band}` : ''}${date === today ? ' is-today' : ''}${past ? ' is-past' : ''}`}
                disabled={!inRange}
                aria-label={`${name}${shown !== null ? `, ${scoreLabel(shown)}` : ''}`}
                aria-current={date === today ? 'date' : undefined}
                onClick={() => onPick(date)}
              >
                <span className="week-calendar-num">{number}</span>
              </button>
            );
          })}
        </div>
      ))}
    </section>
  );
}
