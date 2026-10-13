// The List view's data helpers (build notes 4, 1.3–1.6; Kylie V04, V09): one city, day by day, as far
// back as the catalog has captured it and as far ahead as it has events. Pure date math here; the
// loaders that call the sources live in index.ts, where the screens read them.

import { addDays, daysBetween } from '../lib/dates';
import { SCHEDULE_SNAPSHOTS } from './scheduleArchiveIndex';
import type { LocalDate } from './types';

/** The first day the nightly catalog saved for a city, or null when it has never saved one. */
export function firstCaptureDay(metroId: string): LocalDate | null {
  let first: LocalDate | null = null;
  for (const span of SCHEDULE_SNAPSHOTS) {
    if (span.metroId === metroId && (first === null || span.from < first)) first = span.from;
  }
  return first;
}

/** The Monday on or before a date. Weeks run Monday to Sunday (build notes 4, 1.4). */
export function mondayOf(date: LocalDate): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  const weekday = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 = Sunday
  return addDays(date, -((weekday + 6) % 7));
}

/** Seven days from a Monday. */
export function weekOf(monday: LocalDate): LocalDate[] {
  return Array.from({ length: 7 }, (_, i) => addDays(monday, i));
}

/** Whole weeks from one Monday to another. */
export function weeksBetween(from: LocalDate, to: LocalDate): number {
  return Math.round(daysBetween(from, to) / 7);
}

/** The range the List can show: from the first captured day (never later than today) to the last event. */
export function listRange(metroId: string, today: LocalDate, lastEventDay: LocalDate | null): { from: LocalDate; through: LocalDate } {
  const first = firstCaptureDay(metroId);
  const from = first && first < today ? first : today;
  const through = lastEventDay && lastEventDay > today ? lastEventDay : today;
  return { from, through };
}
