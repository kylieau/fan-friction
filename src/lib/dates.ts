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

/**
 * Map header date, comma form. The year is included only when it is not the
 * current year: "Sat, Oct 3" or "Sat, Apr 13, 2024".
 */
export function headerDate(date: string, today: string) {
  const shown = shortLocalDate(date);
  // Two years back or more, the word beside the date is the year itself, so the date doesn't repeat it.
  const year = Number(date.slice(0, 4));
  const todayYear = Number(today.slice(0, 4));
  return year === todayYear || year < todayYear - 1 ? shown : `${shown}, ${date.slice(0, 4)}`;
}

/**
 * The word that replaces "Past" beside a date. `today` is a Los Angeles
 * calendar day. Today and any later date get nothing. The first match wins:
 * Yesterday, then Last week (2–7 days ago), then the rest of the previous
 * calendar month (Last month), then older dates through the previous
 * calendar year (Last year), then the year itself. A day still in this
 * month but more than a week ago also says Last month. Earlier this year,
 * before last month, says Last year.
 */
export function pastRelativeLabel(date: string, today: string): string | null {
  if (date >= today) return null;
  if (date === addDays(today, -1)) return 'Yesterday';
  if (date >= addDays(today, -7)) return 'Last week';

  const prevMonth = shiftMonth(today.slice(0, 7), -1);
  if (date.slice(0, 7) === prevMonth || date.slice(0, 7) === today.slice(0, 7)) return 'Last month';

  const todayYear = Number(today.slice(0, 4));
  const year = Number(date.slice(0, 4));
  if (year < todayYear - 1) return String(year);
  return 'Last year';
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

/**
 * The timeline group a logged night falls in: "October 2026" for an exact day or a
 * month, "2014" for a year or a span, and "Date not written down" otherwise.
 */
export function timelineGroup(when: LoggedWhen): string {
  if ((when.precision === 'day' || when.precision === 'month') && isValidDate(when.sort)) {
    const [y, m] = when.sort.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
  }
  if ((when.precision === 'year' || when.precision === 'span') && isValidDate(when.sort)) {
    return when.label.trim() || when.sort.slice(0, 4);
  }
  return 'Date not written down';
}

/** "Saturday" from a local date, for the night page's kicker. */
export function weekdayLong(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
}
