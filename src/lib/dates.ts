import type { Metro } from '../config/metros';
import type { LoggedWhen } from '../data/types';

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

/** "Sat · Oct 3" for the map header. Other screens keep the comma form. */
export function headerDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d));
  const weekday = utc.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
  const month = utc.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
  const day = utc.toLocaleDateString('en-US', { day: 'numeric', timeZone: 'UTC' });
  return `${weekday} · ${month} ${day}`;
}

/** "7:30 pm" from a local 24-hour time like "19:30". */
export function clockTime(time: string) {
  const [h, m] = time.split(':').map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}

/**
 * How a logged date should read. An exact day includes the weekday and year.
 * A rough or missing date uses the label, never a made-up day like Jan 1.
 */
export function loggedDateLabel(when: LoggedWhen): string {
  if (when.precision === 'day' && isValidDate(when.sort)) return longLocalDate(when.sort);
  return when.label.trim() || 'Date not written down';
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

/** A real calendar day, "2024-10-25". Rejects "2024-13-40" and other non-dates. */
export function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

/** "2024-10" from "2024-10-25". */
export function yearMonth(date: string): string {
  return date.slice(0, 7);
}

/** "October 2024" from "2024-10", without time-zone drift. */
export function monthTitle(month: string): string {
  const [y, m] = month.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** The month a number of months later (or earlier), "2024-10" + 1 = "2024-11". */
export function shiftMonth(month: string, delta: number): string {
  const [y, m] = month.split('-').map(Number);
  const shifted = new Date(Date.UTC(y, m - 1 + delta, 1));
  return `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, '0')}`;
}

/** Sunday-first cells for a month: nulls for the leading blanks, then "YYYY-MM-DD". */
export function monthCells(month: string): (string | null)[] {
  const [y, m] = month.split('-').map(Number);
  const leading = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
  const count = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const cells: (string | null)[] = Array.from({ length: leading }, () => null);
  for (let day = 1; day <= count; day++) cells.push(`${month}-${String(day).padStart(2, '0')}`);
  return cells;
}

/** Logging goes back about ten years (the build brief). The calendar stops here. */
export const EARLIEST_MONTH = '2016-01';

/** Keep a month inside the calendar's range: 2016 through about 120 days ahead. */
export function clampMonth(month: string, today: string): string {
  const latest = addDays(today, 120).slice(0, 7);
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) return today.slice(0, 7);
  if (month < EARLIEST_MONTH) return EARLIEST_MONTH;
  if (month > latest) return latest;
  return month;
}
