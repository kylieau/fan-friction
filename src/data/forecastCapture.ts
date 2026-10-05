// Builds the forecast records the schedule archive stores.
// The nightly script is the only caller. Screens do not import this.
// Los Angeles is the only metro the archive collects.

import type { CrowdEvent, FrictionRead, LocalDate, LocalTime } from './types';
import { frictionReadForEvent, wallClockToUtc } from './night';
import { seedRatingFor } from './sources/seedSource';

/** How long before a scheduled start the job may write a start-time forecast. */
export const START_FORECAST_LEAD_MINUTES = 45;

export interface ArchivedEventRead {
  eventId: string;
  date: LocalDate;
  start: LocalTime | null;
  /** Absent when nothing on file had a score or a friction word. Not invented. */
  read?: FrictionRead;
}

export interface StartForecastRecord {
  schema: 1;
  kind: 'start-forecast';
  metroId: string;
  eventId: string;
  date: LocalDate;
  start: LocalTime;
  capturedAt: string;
  /** Whole minutes from this capture until the scheduled start. Never negative. */
  minutesBeforeStart: number;
  /** Absent when nothing on file had a score or a friction word. Not invented. */
  read?: FrictionRead;
}

/**
 * The list the app would show for that date. A hand-checked date is the whole
 * night, so a live copy of the same game is not treated as a second crowd.
 * The event itself stays in the list so its own record can still be written.
 */
function shownThatNight(events: readonly CrowdEvent[], event: CrowdEvent): CrowdEvent[] {
  const thatNight = events.filter((row) => row.metroId === event.metroId && row.date === event.date);
  const seeded = thatNight.filter((row) => row.sourceId === 'seed');
  const shown = seeded.length > 0 ? seeded : thatNight;
  if (shown.some((row) => row.id === event.id)) return shown;
  return [...shown, event];
}

/** The read on file for one event. Undefined when there is no score and no friction word. */
export function forecastRead(event: CrowdEvent, events: readonly CrowdEvent[]): FrictionRead | undefined {
  const result = frictionReadForEvent(event, shownThatNight(events, event), seedRatingFor(event.metroId, event.date));
  return result?.read;
}

/** One stored read per event in a daily schedule file. */
export function archivedReads(events: readonly CrowdEvent[]): ArchivedEventRead[] {
  return events.map((event) => {
    const read = forecastRead(event, events);
    return {
      eventId: event.id,
      date: event.date,
      start: event.start,
      ...(read ? { read } : {}),
    };
  });
}

/**
 * Events whose scheduled start is still ahead, and no further ahead than the
 * lead window. A start that has already passed is left out, so a late run
 * cannot label itself a start-time forecast.
 */
export function startForecastsFor(
  metroId: string,
  timeZone: string,
  events: readonly CrowdEvent[],
  now = new Date(),
): StartForecastRecord[] {
  const leadMs = START_FORECAST_LEAD_MINUTES * 60_000;
  const records: StartForecastRecord[] = [];
  for (const event of events) {
    if (event.metroId !== metroId || !event.start) continue;
    const startAt = wallClockToUtc(event.date, event.start, timeZone);
    const ms = startAt.getTime() - now.getTime();
    if (ms < 0 || ms > leadMs) continue;
    const read = forecastRead(event, events);
    records.push({
      schema: 1,
      kind: 'start-forecast',
      metroId,
      eventId: event.id,
      date: event.date,
      start: event.start,
      capturedAt: now.toISOString(),
      minutesBeforeStart: Math.round(ms / 60_000),
      ...(read ? { read } : {}),
    });
  }
  return records;
}

/**
 * A closer capture, still before the start, replaces an earlier one.
 * A capture after the start never replaces a file already saved.
 */
export function shouldReplaceStartForecast(
  saved: { minutesBeforeStart?: number } | null,
  incoming: { minutesBeforeStart: number },
): boolean {
  if (incoming.minutesBeforeStart < 0) return false;
  if (!saved || typeof saved.minutesBeforeStart !== 'number' || saved.minutesBeforeStart < 0) return true;
  return incoming.minutesBeforeStart < saved.minutesBeforeStart;
}
