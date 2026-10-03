// The shapes every piece of event data takes, whatever source it comes from
// (the hand-seeded nights now, live feeds like MLB later). Nothing here is
// LA-only or baseball-only: every map item is a generic "crowd event".

import type { Friction, Occasion } from '../config/scoreLabels';

/** A calendar date in the metro's own time zone, "2024-10-25". */
export type LocalDate = string;
/** A start time in the metro's own time zone, 24-hour "19:30". */
export type LocalTime = string;
/** [longitude, latitude], the order the map library uses. */
export type LngLat = [number, number];

// ---------- Places ----------

export interface VenueName {
  name: string;
  /** First date this name applied. Leave off for the original name. */
  from?: LocalDate;
}

/** How many it holds. Capacity changes over time and by setup. */
export interface Capacity {
  seats: number;
  /** First year this figure applies. Leave off if it has always applied. */
  fromYear?: number;
  /** Only for one setup (basketball vs. hockey, concerts). Leave off for the usual one. */
  setup?: 'basketball' | 'hockey' | 'football' | 'soccer' | 'baseball' | 'concert';
  /** Anything a reader should know, such as sources that disagree. */
  note?: string;
}

export interface Venue {
  id: string;
  metroId: string;
  /** Names in order, oldest first. Old names stay searchable. */
  names: VenueName[];
  location: LngLat;
  capacity: Capacity[];
  /** Open-air venues feel the weather; roofed ones mostly don't. */
  roof: 'open' | 'covered' | 'indoor';
}

// ---------- Teams ----------

export interface Team {
  id: string;
  name: string;
  shortName: string;
  league: string;
  sport: string;
  /** Set for teams based in a metro the app covers; left off for visitors. */
  metroId?: string;
}

// ---------- Crowd events ----------

export type EventKind = 'game' | 'show' | 'festival' | 'live-broadcast' | 'special';

/**
 * Who an event draws, used for the audience-overlap rule
 * (see product-decisions.md). Sports carry a sport; shows carry a genre.
 */
export type Audience =
  | { domain: 'sports'; sport: string }
  | { domain: 'music'; genre: string }
  | { domain: 'other'; tag: string };

/** Where it happens: a venue, a single point (a fan fest) or a route (a parade). */
export type Place =
  | { type: 'venue'; venueId: string }
  | { type: 'point'; location: LngLat; name: string }
  | { type: 'route'; path: LngLat[]; name: string };

/** Every crowd number says what kind of number it is. Never a bare count. */
export type CrowdKind = 'announced' | 'reported' | 'estimated';

export interface CrowdFigure {
  /** Left off when a source says "sold out" without a number. */
  count?: number;
  kind: CrowdKind;
  soldOut?: boolean;
  note?: string;
}

/** Weather at that venue (never a citywide figure). Rain counts lightly. */
export interface Weather {
  tempF?: number;
  rain?: boolean;
  note?: string;
}

/**
 * Occasion and friction come only from facts known before the event.
 * "draft" until Kylie confirms; the 13-night table is still a draft.
 */
export interface Assessment {
  occasion: Occasion;
  /** Short fact chips: "Game 1", "farewell tour", "rivalry". */
  facts: string[];
  friction: Friction;
  /** The one or two biggest reasons, in plain words. */
  why: string;
  status: 'draft' | 'confirmed';
}

export interface CrowdEvent {
  id: string;
  metroId: string;
  date: LocalDate;
  /** Null when the start time isn't recorded yet. */
  start: LocalTime | null;
  kind: EventKind;
  title: string;
  place: Place;
  audience: Audience;
  /** For games. Ids point at Team records. */
  teams?: { home: string; away: string };
  /** For shows. */
  performer?: string;
  /** Crowd is evidence, never an input to the rating. */
  crowd: CrowdFigure[];
  weather?: Weather;
  assessment?: Assessment;
  /** Which source this came from, such as "seed" or "mlb". */
  sourceId: string;
}

// ---------- The date's rating ----------

export interface DateRating {
  metroId: string;
  date: LocalDate;
  /** 1–10. Always shown with its word ("Cooked · 9/10"). */
  rating: number;
  /** A short line for lists: "World Series G1, Lakers, USC and two concerts". */
  headline: string;
  squeezedMost: string;
  /** "hand" for the seeded nights; "formula" once step 8 exists. */
  method: 'hand' | 'formula';
  notes?: string;
  sources?: { label: string; url: string }[];
}

/**
 * Quiet: no big events. Unrated: events but no rating yet.
 * Rated: has a rating. Nothing is ever "being calculated".
 */
export type DateStatus = 'quiet' | 'unrated' | 'rated';

export interface CityDate {
  metroId: string;
  date: LocalDate;
  status: DateStatus;
  events: CrowdEvent[];
  rating: DateRating | null;
}

/** One cell of the Nights calendar. Quiet means nothing big is on file for that date. */
export interface CalendarDay {
  date: LocalDate;
  status: DateStatus;
  /** Set only when status is "rated". */
  rating: number | null;
}

/** A night that matched a team, artist, or venue search. */
export interface NightSearchHit {
  date: LocalDate;
  rating: number | null;
  /** The rated night's headline, or the matching event titles. */
  headline: string;
  /** The names that matched, such as "Dodgers · SoFi Stadium". */
  matched: string;
}

// ---------- Your nights (personal log) ----------

/**
 * How precise a logged date is. Rough dates are allowed.
 * "unknown" means the log never wrote a date down.
 */
export type DatePrecision = 'day' | 'month' | 'year' | 'span' | 'unknown';

export interface LoggedWhen {
  /**
   * Sort key, always YYYY-MM-DD. A month uses the 1st, a year uses Jan 1,
   * and an unknown date uses 0000-01-01. Shown as a calendar day only when
   * precision is "day".
   */
  sort: LocalDate;
  /** What to show when the date is not an exact day ("January 2013", "2014"). */
  label: string;
  precision: DatePrecision;
}

/** One night she went to. Not a map dot, and not limited to events over 5k. */
export interface LoggedNight {
  id: string;
  /** Catalog event this night is tied to, when one exists. */
  eventId?: string;
  when: LoggedWhen;
  title: string;
  /** Filter chips, such as "UCLA MBB" or "Dodgers". */
  tags: string[];
  sport: string;
  /** Team or artist names. Opponents she didn't go "for" stay out. */
  sides: string[];
  venue?: string;
  /** Final score, only when one is actually known. Shown as Outcome. */
  result?: string;
  /** Starting pitcher or other starter, when she wrote one down. */
  starter?: string;
  /** Bobblehead, giveaway, or similar, when known. */
  promo?: string;
  /** A moment worth naming, when known. Not a personal note. */
  notable?: string;
  /** Private. Kept off the night row, the share card, and the map. */
  note?: string;
  away?: boolean;
  /** A neutral site, such as a Final Four. Not either team's home city. */
  neutralSite?: boolean;
  /** Under the 5k map floor: logged, never rated, never a dot. */
  belowFloor?: boolean;
  /** In this metro. Away nights do not borrow the home city's rating. */
  inMetro?: boolean;
  metroId?: string;
  kind: EventKind;
}

/** An upcoming night she flagged. Separate from "I was there". */
export interface NightPlan {
  id: string;
  date: LocalDate;
  metroId: string;
  eventId?: string;
  title: string;
  venue?: string;
}

export type YouOrder = 'plans-first' | 'nights-first';

/**
 * What the phone saves. The seeded log ships with the app and is not copied here.
 * A browser clear drops marks, plans, and the order setting. Export is the backup.
 */
export interface PersonalLog {
  version: 1;
  hiddenSeedIds: string[];
  added: LoggedNight[];
  plans: NightPlan[];
  order: YouOrder;
}
