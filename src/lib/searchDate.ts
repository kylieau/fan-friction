// A typed date in the search box (Kylie's build notes, Oct 9, 6.1): "Oct 17", "October 17",
// "10/17", "Saturday", "sat", "today", "tonight", "tomorrow", "this weekend". The next such
// date from today; a month-day already past this year means next year.

import { addDays } from './dates';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function weekdayOf(date: string): number {
  return new Date(`${date}T12:00:00Z`).getUTCDay();
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function parseTypedDate(text: string, today: string): string | null {
  const q = text.trim().toLowerCase();
  if (!q) return null;
  if (q === 'today' || q === 'tonight') return today;
  if (q === 'tomorrow') return addDays(today, 1);
  if (q === 'this weekend' || q === 'weekend') {
    const d = weekdayOf(today);
    return addDays(today, d === 6 ? 0 : (6 - d + 7) % 7);
  }
  const dayIndex = DAYS.findIndex((d) => q === d || q === `${d}day` || q === `${d}sday` || q === `${d}nesday` || q === `${d}rsday` || q === `${d}urday`);
  if (dayIndex >= 0) {
    const d = weekdayOf(today);
    return addDays(today, (dayIndex - d + 7) % 7);
  }
  const year = Number(today.slice(0, 4));
  let month: number | null = null;
  let day: number | null = null;
  const mdy = q.match(/^(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?$/);
  if (mdy) {
    month = Number(mdy[1]);
    day = Number(mdy[2]);
    if (mdy[3]) {
      const y = Number(mdy[3]);
      return `${y < 100 ? 2000 + y : y}-${pad(month)}-${pad(day)}`;
    }
  } else {
    const words = q.match(/^([a-z]+)\.?\s+(\d{1,2})(?:st|nd|rd|th)?(?:,?\s+(\d{4}))?$/) ?? q.match(/^(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]+)\.?(?:,?\s+(\d{4}))?$/);
    if (!words) return null;
    const [, a, b, y] = words;
    const name = /^\d/.test(a) ? b : a;
    const num = /^\d/.test(a) ? a : b;
    month = MONTHS.findIndex((m) => name.startsWith(m)) + 1;
    day = Number(num);
    if (y) return month > 0 ? `${y}-${pad(month)}-${pad(day)}` : null;
  }
  if (!month || month < 1 || month > 12 || !day || day < 1 || day > 31) return null;
  const candidate = `${year}-${pad(month)}-${pad(day)}`;
  return candidate < today ? `${year + 1}-${pad(month)}-${pad(day)}` : candidate;
}
