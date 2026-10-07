// Upcoming events the feeds don't carry, entered by hand. Unlike the seeded past dates,
// these must NOT replace the live listings for their day: a seeded date ('seed') is the
// whole list, so these use their own sourceId and sit beside the feeds' games.

import type { CrowdEvent } from '../types';

const SOURCE_ID = 'listing';

/**
 * New York Comic Con at the Javits Center, Oct 8–11, 2026. A convention hall has no fixed
 * capacity (docs/new-york-venue-table-answer.md, Table B), so it is placed as a point and
 * sized by its own crowd. Kylie, Oct 7, 2026: a per-day average of a multi-day total is fine
 * when labeled estimated. Floor hours 10:00–19:00 (NYCC's own schedule, Thursday).
 * A point does not reach Gridlock, so the load it puts on the West Side is not yet read
 * (docs/unsized-events.md).
 */
const comicConDay = (date: string, day: number): CrowdEvent => ({
  id: `${date}-nycc`,
  metroId: 'new-york',
  date,
  start: '10:00',
  kind: 'special',
  title: `New York Comic Con (day ${day} of 4)`,
  place: { type: 'point', location: [-74.0022, 40.7577], name: 'Javits Center' },
  audience: { domain: 'other', tag: 'convention' },
  crowd: [
    {
      count: 62500,
      kind: 'estimated',
      note: "Estimated: 250,000+ attended NYCC 2025 over four days (RX, the organizer), averaged per day. 2026's figure is not out.",
    },
  ],
  sourceId: SOURCE_ID,
});

export const LISTINGS_2026_EVENTS: CrowdEvent[] = [
  comicConDay('2026-10-08', 1),
  comicConDay('2026-10-09', 2),
  comicConDay('2026-10-10', 3),
  comicConDay('2026-10-11', 4),
];
