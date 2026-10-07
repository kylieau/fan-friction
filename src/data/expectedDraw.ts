// Expected draws from past seasons' announced crowds, attached to events on
// read when the event carries none of its own. The rule is in
// expectedDrawBuild.ts. The building stays the ceiling (drawSize). Always an
// estimate, and said so.

import { EXPECTED_DRAWS, OPPONENT_RATIOS, SEASON_LEVELS } from './expectedDrawIndex';
import { isHoliday, opponentKey, pickDraw, type ExpectedDrawRow } from './expectedDrawBuild';
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
  // This season's level and the opponent's past draw here, only in the leagues where each
  // beat the baseline in the held-out check (expectedDrawBuild.ts; Kylie, Oct 7).
  const level = event.preseason ? undefined : SEASON_LEVELS.find((r) => r.metroId === event.metroId && r.teamId === event.teams?.home);
  const away = event.teams.away;
  const opp = event.preseason || !away ? undefined : OPPONENT_RATIOS.find((r) => r.metroId === event.metroId && r.teamId === event.teams?.home && r.opponent === opponentKey(away));
  const k = (level?.level ?? 1) * (opp?.ratio ?? 1);
  const adjusted = [level && 'this season so far', opp && 'this opponent'].filter(Boolean).join(' and ');
  return {
    count: Math.round(row.count * k),
    low: Math.round(row.low * k),
    high: Math.round(row.high * k),
    note: `Typical announced crowd here for ${describe(row, event.date)}: ${row.games} games, ${row.seasons}.${adjusted ? ` Adjusted for ${adjusted}.` : ''}`,
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
