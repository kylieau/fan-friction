// The plug-in shape every data source fills. The hand-seeded nights are one
// source; live feeds (MLB first, then NHL, Ticketmaster...) are added as more
// sources without changing the screens. Everything is async because live
// sources will be.

import type { CrowdEvent, DateRating, LocalDate } from '../types';

export interface EventSource {
  id: string;
  /** Shown in credits, e.g. "Hand-seeded test nights", "MLB". */
  name: string;
  eventsOn(metroId: string, date: LocalDate): Promise<CrowdEvent[]>;
  /** Events on or after a date, soonest first. Only live feeds have this. */
  upcoming?(metroId: string, fromDate: LocalDate): Promise<CrowdEvent[]>;
}

export interface RatingSource {
  id: string;
  ratingFor(metroId: string, date: LocalDate): Promise<DateRating | null>;
  /** Every rated date this source knows, newest first. */
  ratedDates(metroId: string): Promise<DateRating[]>;
}
