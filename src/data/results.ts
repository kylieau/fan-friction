// Saved results, attached to events on read. A seeded night's event may carry
// a different id from the feed's, so a result also matches by date, building
// and home side. Scores and crowds are evidence; the read never looks at them.

import { cachedResults } from './catalogCache';
import type { CrowdEvent, Entry, GameResult } from './types';
import { venueByName } from './venues';

export function resultFor(event: CrowdEvent): GameResult | undefined {
  // The shared catalog's rows for that date (loaded by getCityDate, or by a script from the files).
  const rows = cachedResults(event.metroId, event.date) ?? [];
  const exact = rows.find((row) => row.eventId === event.id);
  if (exact) return exact;
  if (event.place.type !== 'venue' || !event.teams) return undefined;
  const { venueId } = event.place;
  const home = event.teams.home;
  return rows.find(
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

/** "3h 18m", or "about 2h 22m" when worked out from the play clock. */
export function lengthLine(result: GameResult): string | undefined {
  if (!result.duration) return undefined;
  const h = Math.floor(result.duration.minutes / 60);
  const m = result.duration.minutes % 60;
  const text = h > 0 ? `${h}h ${String(m).padStart(2, '0')}m` : `${m}m`;
  return result.duration.kind === 'official' ? text : `about ${text}`;
}

/**
 * Hours at games across a log, from the results the app has. An entry finds
 * its result by event id, else by date and building. Nights with no known
 * length add nothing: this is a sum of what is known, not a guess.
 */
export function hoursAtGames(entries: readonly Entry[]): { hours: number; games: number } {
  let minutes = 0;
  let games = 0;
  for (const entry of entries) {
    const row = resultForEntry(entry);
    if (!row?.duration) continue;
    minutes += row.duration.minutes;
    games++;
  }
  return { hours: Math.round(minutes / 6) / 10, games };
}

function resultForEntry(entry: Entry): GameResult | undefined {
  if (entry.when.precision !== 'day') return undefined;
  const rows = cachedResults(entry.metroId ?? 'la', entry.when.sort) ?? [];
  if (entry.eventId) {
    const exact = rows.find((row) => row.eventId === entry.eventId);
    if (exact) return exact;
  }
  if (!entry.venue) return undefined;
  const venue = venueByName(entry.venue);
  if (!venue) return undefined;
  return rows.find((row) => row.date === entry.when.sort && row.venueId === venue.id);
}

/** "Braves 3, Dodgers 2", winner first; a tie says home first. Extra time rides along: "Kings 4, Oilers 3 (OT)". */
export function scoreLine(result: GameResult): string {
  const [first, second] = result.away.score > result.home.score ? [result.away, result.home] : [result.home, result.away];
  const line = `${first.name} ${first.score}, ${second.name} ${second.score}`;
  return result.note ? `${line} (${result.note})` : line;
}

/**
 * How a logged game went for the side you were there for: 'W', 'L' or 'T' from the
 * saved result, matched by event id. Null when no result is on file, or the entry's
 * sides name neither team. Evidence for "You at games: 4–2"; the read never sees it.
 */
export function entryOutcome(entry: Entry, sideNames: readonly string[] = entry.sides): 'W' | 'L' | 'T' | null {
  if (!entry.eventId || !entry.metroId) return null;
  const rows = cachedResults(entry.metroId, entry.when.sort) ?? [];
  const result = rows.find((row) => row.eventId === entry.eventId);
  if (!result) return null;
  const names = sideNames.map((n) => n.toLowerCase());
  const is = (name: string) => names.some((n) => n === name.toLowerCase() || name.toLowerCase().endsWith(` ${n}`) || name.toLowerCase().startsWith(`${n} `));
  const us = is(result.home.name) ? result.home : is(result.away.name) ? result.away : null;
  if (!us) return null;
  const them = us === result.home ? result.away : result.home;
  return us.score > them.score ? 'W' : us.score < them.score ? 'L' : 'T';
}
