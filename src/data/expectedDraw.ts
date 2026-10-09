// Expected draws from past seasons' announced crowds, attached to events on
// read when the event carries none of its own. The rule is in
// expectedDrawBuild.ts. The building stays the ceiling (drawSize). Always an
// estimate, and said so.

import { EXPECTED_DRAWS, OPPONENT_RATIOS, POSTSEASON_DRAWS, SEASON_LEVELS } from './expectedDrawIndex';
import { TEAMS } from './teams';
import { CONCERT_FILL, VENUE_SHOW_AVERAGE, isHoliday, opponentKey, pickDraw, postseasonPeople, roundBand, type ExpectedDrawRow } from './expectedDrawBuild';
import { VENUES, capacityOn } from './venues';
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
  if (event.audience.domain !== 'sports' || !event.teams || event.stakes?.round || event.place.type !== 'venue' || event.neutralSite) return undefined;
  const row = pickDraw(
    rowsFor(event.metroId).filter((r) => r.metroId === event.metroId),
    { teamId: event.teams.home, venueId: event.place.venueId, date: event.date, opener: event.homeOpener, preseason: event.preseason },
  );
  if (!row) return undefined;
  // This season's level and the opponent's past draw here, in every league (Kylie, Oct 7).
  // The note names neither: how estimates are made is explained once, behind the (i) on
  // the event page, not per event (Kylie, Oct 7).
  const level = event.preseason ? undefined : SEASON_LEVELS.find((r) => r.metroId === event.metroId && r.teamId === event.teams?.home);
  const away = event.teams.away;
  const opp = event.preseason || !away ? undefined : OPPONENT_RATIOS.find((r) => r.metroId === event.metroId && r.teamId === event.teams?.home && r.opponent === opponentKey(away));
  const k = (level?.level ?? 1) * (opp?.ratio ?? 1);
  return {
    count: Math.round(row.count * k),
    low: Math.round(row.low * k),
    high: Math.round(row.high * k),
    fromCrowds: true,
    games: row.games,
    seasons: row.seasons,
    basis: 'team',
    note: `Typical announced crowd here for ${describe(row, event.date)}: ${row.games} games, ${row.seasons}.`,
  };
}

/**
 * A playoff game (docs/archive/proposals/postseason-estimate-proposal.md, checked in docs/postseason-check.md):
 * the team's past playoff occupancy in this building for this round band, or the league's,
 * times the building. The range is a planning range, not a middle half. No row: no estimate,
 * as before.
 */
export function postseasonDraw(event: CrowdEvent): CrowdEvent['expectedDraw'] {
  if (event.audience.domain !== 'sports' || !event.teams || !event.stakes?.round || event.place.type !== 'venue') return undefined;
  const team = TEAMS[event.teams.home];
  const band = roundBand(event.stakes.round, team?.league);
  if (!band) return undefined;
  const venueId = event.place.venueId;
  const venue = VENUES[venueId];
  const cap = venue ? capacityOn(venue, event.date, event.audience.sport) ?? capacityOn(venue, event.date) : undefined;
  if (!cap) return undefined;
  const row = POSTSEASON_DRAWS.find((r) => r.metroId === event.metroId && r.teamId === event.teams?.home && r.venueId === venueId && r.band === band);
  // No comparables (the WNBA, NFL, NWSL today): the building itself, said so (Kylie, Oct 7: show the
  // building rather than "No count yet"). The friction read already used it.
  if (!row) return { count: cap, low: cap, high: cap, planning: true, basis: 'building', note: 'No past playoff crowds on file for this round; the building\'s capacity for this sport. An estimate.' };
  const people = postseasonPeople(row, cap);
  const who = row.basis === 'team' ? 'this team\'s' : row.basis === 'blend' ? 'this team\'s and the league\'s' : 'the league\'s';
  return { ...people, planning: true, fromCrowds: true, games: row.games, seasons: row.seasons, basis: row.basis, note: `Playoff crowds as a share of the building, ${who} past ${row.games} games (${row.seasons}). An estimate.` };
}

/**
 * A show's size (Kylie, Oct 7: the 57% default is approved): the room's own published
 * average when it has one, else CONCERT_FILL of its concert setup. Never above the room.
 * Not sized: a listing that already carries a count or a sellout, anything that is not a
 * concert (Arts & Theatre, Miscellaneous and the rest stay 'special'), or a room with no
 * concert capacity on file. The friction gate still reads the room for shows (C1).
 */
export function showDraw(event: CrowdEvent): CrowdEvent['expectedDraw'] {
  if (event.kind !== 'show' || event.place.type !== 'venue') return undefined;
  if (event.crowd.some((c) => c.count !== undefined || c.soldOut)) return undefined;
  const venue = VENUES[event.place.venueId];
  const cap = venue ? capacityOn(venue, event.date, 'concert') : undefined;
  if (!cap) {
    // No concert figure at all: the room as a ceiling, "Up to N", so the page matches what the read counts (3.3).
    const room = venue ? capacityOn(venue, event.date) : undefined;
    return room ? { count: room, planning: true, basis: 'building', note: 'No concert figure on file for this room; its listed size, as a ceiling. An estimate.' } : undefined;
  }
  const own = VENUE_SHOW_AVERAGE[event.place.venueId];
  if (own) return { count: Math.min(own.perShow, cap), note: `This room's average per reported show: ${own.basis}. An estimate.` };
  // Kylie, Oct 7: a room with no sports setup is built for shows and reads at full
  // capacity; an arena or stadium (any sports setup) keeps 57% for a concert. A
  // ballpark with no concert figure on file falls back to its listed size at 57%; that
  // is the weakest rung (Petco's park-stage shows list as "Petco Park"; see BACKLOG.md).
  const multiUse = venue!.capacity.some((c) => c.setup && c.setup !== 'concert');
  if (!multiUse) return { count: cap, note: 'The room, full: a venue built for shows, with no published average on file. An estimate.' };
  const hasConcertSetup = venue!.capacity.some((c) => c.setup === 'concert');
  const of = hasConcertSetup ? 'the concert setup' : "the building's listed size (no concert figure on file)";
  return { count: Math.round(cap * CONCERT_FILL), note: `${Math.round(CONCERT_FILL * 100)}% of ${of}, the typical fill of arenas that publish their numbers. An estimate.` };
}

/** Each event with an expected draw: its own when seeded, else the calibrated one. Playoff games keep the building. */
export function withExpectedDraws(events: CrowdEvent[]): CrowdEvent[] {
  return events.map((event) => {
    if (event.expectedDraw) return event;
    const draw = calibratedDraw(event) ?? postseasonDraw(event) ?? showDraw(event);
    return draw ? { ...event, expectedDraw: draw } : event;
  });
}
