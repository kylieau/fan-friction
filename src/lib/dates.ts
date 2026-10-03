import type { Metro } from '../config/metros';

/** "Wed, Sep 30" in the metro's own time zone. */
export function shortDate(date: Date, metro: Metro) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: metro.timeZone,
  });
}

/** "Sep 30" in the metro's own time zone. */
export function monthDay(date: Date, metro: Metro) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: metro.timeZone });
}

/** "Fri, Oct 25" from a local date like "2024-10-25", without time-zone drift. */
export function shortLocalDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** "7:30 pm" from a local 24-hour time like "19:30". */
export function clockTime(time: string) {
  const [h, m] = time.split(':').map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}

/** "Fri, Oct 25, 2024" from a local date, for share cards (always with the year). */
export function longLocalDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** A local date a number of days later (or earlier), "2026-10-03" + 6 = "2026-10-09". */
export function addDays(date: string, days: number): string {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}
