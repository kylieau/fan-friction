// The plug-in shape every data source fills. The hand-seeded nights are one
// source; live feeds (MLB first, then NHL, Ticketmaster...) are added as more
// sources without changing the screens. Everything is async because live
// sources will be.

import type { CrowdEvent, DateRating, LocalDate } from '../types';

/**
 * A Ticketmaster game at a building and date where a league feed already lists one is the same game
 * sold twice; the feed's copy stays (docs/no-feed-teams-proposal.md).
 */
export function dropTicketmasterGamesCoveredByFeeds<T extends { sourceId: string; kind: string; date: string; place: { type: string; venueId?: string } }>(events: T[]): T[] {
  const feedGames = new Set(events.filter((e) => e.sourceId !== 'ticketmaster' && e.kind === 'game' && e.place.type === 'venue').map((e) => `${e.place.venueId}|${e.date}`));
  return events.filter((e) => !(e.sourceId === 'ticketmaster' && e.kind === 'game' && e.place.type === 'venue' && feedGames.has(`${e.place.venueId}|${e.date}`)));
}

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
