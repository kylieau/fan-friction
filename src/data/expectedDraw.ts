// Expected draws from past seasons' announced crowds, attached to events on
// read when the event carries none of its own. The rule is in
// expectedDrawBuild.ts. The building stays the ceiling (drawSize). Always an
// estimate, and said so.

import { EXPECTED_DRAWS } from './expectedDrawIndex';
import { isHoliday, pickDraw, type ExpectedDrawRow } from './expectedDrawBuild';
import { cachedExpectedDraws } from './catalogCache';
import type { CrowdEvent } from './types';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_WORD: Record<string, string> = { weekday: 'weeknight', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };

/** The shared catalog's rows when they are the current shape (with a building), else the ones built in. */
function rowsFor(metroId: string): readonly ExpectedDrawRow[] {
  const cached = cachedExpectedDraws(metroId)?.filter((row) => typeof row.venueId === 'string' && typeof row.low === 'number');
  return cached && cached.length > 0 ? cached : EXPECTED_DRAWS;
}

function describe(row: ExpectedDrawRow, date: string): string {
  if (row.dayClass === 'opener') return 'a home opener';
  if (row.dayClass === 'preseason') return 'a preseason game';
  if (row.dayClass === 'all') return 'a home game';
  const day = isHoliday(date) ? 'holiday' : DAY_WORD[row.dayClass];
  return row.month ? `a ${day} in ${MONTHS[row.month - 1]}` : `a ${day}`;
}

/** The typical past crowd for this home side in this building on this kind of date. */
export function calibratedDraw(event: CrowdEvent): CrowdEvent['expectedDraw'] {
  if (event.audience.domain !== 'sports' || !event.teams || event.stakes?.round || event.place.type !== 'venue') return undefined;
  const row = pickDraw(
    rowsFor(event.metroId).filter((r) => r.metroId === event.metroId),
    { teamId: event.teams.home, venueId: event.place.venueId, date: event.date, opener: event.homeOpener, preseason: event.preseason },
  );
  if (!row) return undefined;
  return {
    count: row.count,
    low: row.low,
    high: row.high,
    note: `Typical announced crowd here for ${describe(row, event.date)}: ${row.games} games, ${row.seasons}.`,
  };
}

/** Each event with an expected draw: its own when seeded, else the calibrated one. Playoff games keep the building. */
export function withExpectedDraws(events: CrowdEvent[]): CrowdEvent[] {
  return events.map((event) => {
    if (event.expectedDraw) return event;
    const draw = calibratedDraw(event);
    return draw ? { ...event, expectedDraw: draw } : event;
  });
}
