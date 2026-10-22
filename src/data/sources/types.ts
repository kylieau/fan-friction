// The plug-in shape every data source fills. The hand-seeded nights are one
// source; live feeds (MLB first, then NHL, Ticketmaster...) are added as more
// sources without changing the screens. Everything is async because live
// sources will be.

import type { CrowdEvent, DateRating, LocalDate } from '../types';

/** Who to believe about a game, lowest first: a league or the school itself, then a seller. */
const GAME_RANK: Record<string, number> = { seed: 0, mlb: 0, espn: 0, hockeytech: 0, sidearm: 1, ticketmaster: 2, seatgeek: 2, jambase: 2, fan: 3 };

type GameLike = { sourceId: string; kind: string; date: string; start?: string | null; place: { type: string; venueId?: string }; audience?: object };

const sportOf = (e: GameLike) => (e.audience as { sport?: string } | undefined)?.sport;

const minutes = (t: string | null | undefined) => (t ? Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5)) : null);

/** The same game sold or listed twice: one building, one date, the same sport when both say one, starts within two hours when both have one. */
function sameGame(a: GameLike, b: GameLike): boolean {
  if (a.place.venueId !== b.place.venueId || a.date !== b.date) return false;
  const sa = sportOf(a);
  const sb = sportOf(b);
  if (sa && sb && sa !== 'other' && sb !== 'other' && sa !== sb) return false;
  const ma = minutes(a.start);
  const mb = minutes(b.start);
  return ma == null || mb == null || Math.abs(ma - mb) <= 120;
}

/**
 * A game a league feed or the school's own feed lists wins over a seller's listing of it, and the league's over the
 * school's (docs/product/no-feed-teams-proposal.md; widened Oct 21, 2026 to every room, and from "same building and
 * date" to "same building, date, sport and start", so a volleyball match the feeds lack stays on a day the
 * basketball team plays at home).
 */
export function dropGamesCoveredByFeeds<T extends GameLike>(events: T[]): T[] {
  const games = events.filter((e) => e.kind === 'game' && e.place.type === 'venue');
  return events.filter((e) => {
    if (e.kind !== 'game' || e.place.type !== 'venue') return true;
    const rank = GAME_RANK[e.sourceId] ?? 4;
    return !games.some((g) => (GAME_RANK[g.sourceId] ?? 4) < rank && sameGame(g, e));
  });
}

/** The old name, kept for the scripts. */
export const dropTicketmasterGamesCoveredByFeeds = dropGamesCoveredByFeeds;

export interface EventSource {
  id: string;
  /** Shown in credits, e.g. "Hand-seeded test nights", "MLB". */
  name: string;
  eventsOn(metroId: string, date: LocalDate): Promise<CrowdEvent[]>;
  /** Events on or after a date, soonest first. Only live feeds have this. */
  upcoming?(metroId: string, fromDate: LocalDate): Promise<CrowdEvent[]>;
  /**
   * Every event this source can put on the calendar or in search.
   * The seed returns its nights; live feeds return today onward.
   */
  catalog?(metroId: string): Promise<CrowdEvent[]>;
}

export interface RatingSource {
  id: string;
  ratingFor(metroId: string, date: LocalDate): Promise<DateRating | null>;
  /** Every rated date this source knows, newest first. */
  ratedDates(metroId: string): Promise<DateRating[]>;
}
