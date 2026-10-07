// Upcoming events the feeds don't carry, entered by hand. Unlike the seeded past dates,
// these must NOT replace the live listings for their day: a seeded date ('seed') is the
// whole list, so these use their own sourceId and sit beside the feeds' games.

import type { CrowdEvent } from '../types';

const SOURCE_ID = 'listing';

/**
 * New York Comic Con at the Javits Center, Oct 8–11, 2026. A convention hall has no fixed
 * capacity (docs/archive/research/new-york-venue-table-answer.md, Table B), so it is placed as a point and
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

/**
 * Neutral-site football at Mercedes-Benz Stadium (docs/archive/research/atlanta-venue-table-answer.md §3). The
 * team feeds miss these because neither side is an Atlanta home team, so they are hand-listed
 * (Kylie, Oct 7, 2026). Sized by the stadium's expanded setup, which these games sell
 * (75,000 official; the read caps at the 71,000 football setup). Dates and kickoffs as announced.
 */
const neutralFootball = (id: string, date: string, start: string | null, title: string, note: string): CrowdEvent => ({
  id: `${date}-${id}`,
  metroId: 'atlanta',
  date,
  start,
  kind: 'game',
  title,
  place: { type: 'venue', venueId: 'mercedes-benz-stadium' },
  audience: { domain: 'sports', sport: 'football' },
  crowd: [],
  expectedDraw: { count: 75000, note: `Expanded setup, official (75,000); ${note} An estimate.` },
  sourceId: SOURCE_ID,
});

export const LISTINGS_2026_EVENTS: CrowdEvent[] = [
  comicConDay('2026-10-08', 1),
  comicConDay('2026-10-09', 2),
  comicConDay('2026-10-10', 3),
  comicConDay('2026-10-11', 4),
  neutralFootball('florida-georgia', '2026-10-31', '15:30', 'Florida vs. Georgia (neutral site)', 'a one-year move from Jacksonville.'),
  neutralFootball('sec-championship', '2026-12-05', '16:00', 'SEC Championship', 'the title game has sold out every year here.'),
  neutralFootball('celebration-bowl', '2026-12-12', '12:00', 'Celebration Bowl', 'MEAC vs. SWAC champions.'),
  neutralFootball('peach-bowl', '2027-01-01', null, 'Peach Bowl (CFP quarterfinal)', 'kickoff not yet announced.'),
];
