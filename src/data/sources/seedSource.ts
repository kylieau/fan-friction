// The hand-seeded test nights, served through the same plug-in shape a live
// feed will use.

import { LA_20261003_EVENTS, LA_20261003_RATING, METRO_FEELS as OCT3_FEELS } from '../seed/la20261003';
import { LA_20261004_EVENTS, LA_20261004_RATING, METRO_FEELS as OCT4_FEELS } from '../seed/la20261004';
import { LISTINGS_2026_EVENTS } from '../seed/listings2026';
import { PAST_2026_EVENTS } from '../seed/past2026';
import { SEED_EVENTS, SEED_RATINGS } from '../seed/testNights';
import type { CrowdEvent, DateRating } from '../types';
import type { EventSource, RatingSource } from './types';

const EVENTS = [...SEED_EVENTS, ...LA_20261003_EVENTS, ...LA_20261004_EVENTS, ...PAST_2026_EVENTS, ...LISTINGS_2026_EVENTS];
const RATINGS = [...SEED_RATINGS, LA_20261003_RATING, LA_20261004_RATING];
const METRO_FEELS = [...OCT3_FEELS, ...OCT4_FEELS];

/** Cities the hand-seeded nights actually cover. */
export function seedMetroIds(): string[] {
  return [...new Set(EVENTS.map((event) => event.metroId))];
}

/** Seeded events already in the repo for one date. Live feeds are not included. */
export function seedEventsOn(metroId: string, date: string): CrowdEvent[] {
  return EVENTS.filter((event) => event.metroId === metroId && event.date === date);
}

/** The hand score for one date, when the seed has one. */
export function seedRatingFor(metroId: string, date: string): DateRating | null {
  return RATINGS.find((rating) => rating.metroId === metroId && rating.date === date) ?? null;
}

export const seedEvents: EventSource = {
  id: 'seed',
  name: 'Hand-seeded test nights',
  eventsOn: async (metroId, date) => EVENTS.filter((e) => e.metroId === metroId && e.date === date),
  catalog: async (metroId) => EVENTS.filter((e) => e.metroId === metroId),
};

export { METRO_FEELS };

export const seedRatings: RatingSource = {
  id: 'seed',
  ratingFor: async (metroId, date) => RATINGS.find((r) => r.metroId === metroId && r.date === date) ?? null,
  ratedDates: async (metroId) =>
    RATINGS.filter((r) => r.metroId === metroId).sort((a, b) => b.date.localeCompare(a.date)),
};
