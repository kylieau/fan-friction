// Saved results, attached to events on read. A seeded night's event may carry
// a different id from the feed's, so a result also matches by date, building
// and home side. Scores and crowds are evidence; the read never looks at them.

import { GAME_RESULTS } from './resultsIndex';
import type { CrowdEvent, GameResult } from './types';

export function resultFor(event: CrowdEvent): GameResult | undefined {
  const exact = GAME_RESULTS.find((row) => row.eventId === event.id);
  if (exact) return exact;
  if (event.place.type !== 'venue' || !event.teams) return undefined;
  const { venueId } = event.place;
  const home = event.teams.home;
  return GAME_RESULTS.find(
    (row) => row.metroId === event.metroId && row.date === event.date && row.venueId === venueId && row.homeTeamId === home,
  );
}

/**
 * Each event with its result. The box score's announced crowd is better
 * evidence than a seeded estimate, so it replaces one; a seeded announced or
 * reported figure stays.
 */
export function withResults(events: CrowdEvent[]): CrowdEvent[] {
  return events.map((event) => {
    const result = resultFor(event);
    if (!result) return event;
    const firm = event.crowd.some((figure) => figure.kind !== 'estimated' && figure.count != null);
    const crowd =
      result.attendance && !firm
        ? [
            { count: result.attendance, kind: 'announced' as const, note: 'Box score' },
            ...event.crowd.filter((figure) => figure.soldOut && figure.count == null),
          ]
        : event.crowd;
    return { ...event, result, crowd };
  });
}

/** "Braves 3, Dodgers 2", winner first; a tie says home first. Extra time rides along: "Kings 4, Oilers 3 (OT)". */
export function scoreLine(result: GameResult): string {
  const [first, second] = result.away.score > result.home.score ? [result.away, result.home] : [result.home, result.away];
  const line = `${first.name} ${first.score}, ${second.name} ${second.score}`;
  return result.note ? `${line} (${result.note})` : line;
}
