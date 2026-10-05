// Builds the forecast records the schedule archive stores.
// The nightly script is the only caller. Screens do not import this.
// Los Angeles is the only metro the archive collects.

import type { CrowdEvent, FrictionRead, LocalDate, LocalTime } from './types';
import { frictionReadForEvent } from './read';
import { seedRatingFor } from './sources/seedSource';

export interface ArchivedEventRead {
  eventId: string;
  date: LocalDate;
  start: LocalTime | null;
  /** Absent when nothing on file had a score or a friction word. Not invented. */
  read?: FrictionRead;
}

/**
 * The list the app would show for that date. A hand-checked date is the whole
 * night, so a live copy of the same game is not treated as a second crowd.
 * The event itself stays in the list so its own record can still be written.
 */
function shownThatNight(events: readonly CrowdEvent[], event: CrowdEvent): CrowdEvent[] {
  const thatDate = events.filter((row) => row.metroId === event.metroId && row.date === event.date);
  const seeded = thatDate.filter((row) => row.sourceId === 'seed');
  const shown = seeded.length > 0 ? seeded : thatDate;
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
