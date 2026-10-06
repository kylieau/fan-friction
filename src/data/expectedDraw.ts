// Expected draws from past seasons' announced crowds, attached to events on
// read when the event carries none of its own. The building stays the ceiling
// (drawSize). Always an estimate, and said so in the note.

import { EXPECTED_DRAWS, type DayClass } from './expectedDrawIndex';
import { cachedExpectedDraws } from './catalogCache';
import type { CrowdEvent } from './types';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function dayClassOf(date: string): DayClass {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay();
  if (day === 5) return 'friday';
  if (day === 6) return 'saturday';
  if (day === 0) return 'sunday';
  return 'weekday';
}

const DAY_WORD: Record<DayClass, string> = { weekday: 'weeknight', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };

/** The median past crowd for this home side on this kind of day, most specific bucket first. */
export function calibratedDraw(event: CrowdEvent): { count: number; note: string } | undefined {
  if (event.audience.domain !== 'sports' || !event.teams || event.stakes?.round) return undefined;
  const teamId = event.teams.home;
  const dc = dayClassOf(event.date);
  const month = Number(event.date.slice(5, 7));
  const rows = (cachedExpectedDraws(event.metroId) ?? EXPECTED_DRAWS).filter((row) => row.metroId === event.metroId && row.teamId === teamId);
  const pick =
    rows.find((row) => row.dayClass === dc && row.month === month) ??
    rows.find((row) => row.dayClass === dc && row.month === null) ??
    rows.find((row) => row.dayClass === 'all');
  if (!pick) return undefined;
  const when = pick.month ? `a ${DAY_WORD[dc]} in ${MONTHS[pick.month - 1]}` : pick.dayClass === 'all' ? 'a home game' : `a ${DAY_WORD[dc]}`;
  return {
    count: pick.count,
    note: `Median announced crowd for ${when}, ${pick.games} past games (${pick.seasons.replaceAll(',', ', ')}). An estimate.`,
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
