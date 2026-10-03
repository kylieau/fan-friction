// The one place screens ask for event data. It merges every plugged-in source,
// so adding a live feed means adding it to the lists below, nothing else.

import type { Metro } from '../config/metros';
import { espnEvents } from './sources/espnSource';
import { mlbEvents } from './sources/mlbSource';
import { seedEvents, seedRatings } from './sources/seedSource';
import type { EventSource, RatingSource } from './sources/types';
import type { CityDate, CrowdEvent, DateRating, LocalDate } from './types';

const EVENT_SOURCES: EventSource[] = [seedEvents, mlbEvents, espnEvents];
const RATING_SOURCES: RatingSource[] = [seedRatings];

/** Everything known about one date in one metro: its events, rating and status. */
export async function getCityDate(metroId: string, date: LocalDate): Promise<CityDate> {
  const lists = await Promise.all(EVENT_SOURCES.map((s) => s.eventsOn(metroId, date)));
  const events = lists.flat().sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'));

  let rating: DateRating | null = null;
  for (const s of RATING_SOURCES) {
    rating = await s.ratingFor(metroId, date);
    if (rating) break;
  }

  const status = rating ? 'rated' : events.length ? 'unrated' : 'quiet';
  return { metroId, date, status, events, rating };
}

/** The next few events after a date, from every live source, soonest first. */
export async function getUpcoming(metroId: string, afterDate: LocalDate, limit = 5): Promise<CrowdEvent[]> {
  const lists = await Promise.all(
    EVENT_SOURCES.map((s) => (s.upcoming ? s.upcoming(metroId, afterDate) : Promise.resolve([]))),
  );
  return lists
    .flat()
    .filter((e) => e.date > afterDate)
    .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')))
    .slice(0, limit);
}

/** Events after one date and up to another (both local dates, the end included), soonest first. */
export async function getEventsBetween(metroId: string, afterDate: LocalDate, throughDate: LocalDate): Promise<CrowdEvent[]> {
  const lists = await Promise.all(
    EVENT_SOURCES.map((s) => (s.upcoming ? s.upcoming(metroId, afterDate) : Promise.resolve([]))),
  );
  return lists
    .flat()
    .filter((e) => e.date > afterDate && e.date <= throughDate)
    .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')));
}

/** Every rated date in a metro, newest first. */
export async function getRatedDates(metroId: string): Promise<DateRating[]> {
  const lists = await Promise.all(RATING_SOURCES.map((s) => s.ratedDates(metroId)));
  return lists.flat().sort((a, b) => b.date.localeCompare(a.date));
}

/** Today's date in the metro's own time zone, "2026-10-01". */
export function todayIn(metro: Metro): LocalDate {
  return new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });
}

export { VENUES, venueNameOn, capacityOn } from './venues';
export { TEAMS } from './teams';
export { audienceOverlap } from './audience';
export type * from './types';
