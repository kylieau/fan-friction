// The hand-seeded test nights, served through the same plug-in shape a live
// feed will use.

import { SEED_EVENTS, SEED_RATINGS } from '../seed/testNights';
import type { EventSource, RatingSource } from './types';

export const seedEvents: EventSource = {
  id: 'seed',
  name: 'Hand-seeded test nights',
  eventsOn: async (metroId, date) => SEED_EVENTS.filter((e) => e.metroId === metroId && e.date === date),
};

export const seedRatings: RatingSource = {
  id: 'seed',
  ratingFor: async (metroId, date) => SEED_RATINGS.find((r) => r.metroId === metroId && r.date === date) ?? null,
  ratedDates: async (metroId) =>
    SEED_RATINGS.filter((r) => r.metroId === metroId).sort((a, b) => b.date.localeCompare(a.date)),
};
