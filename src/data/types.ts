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
  /** Scoreboard abbreviation, "LAD". Used for the mark on Favorites. */
  abbr?: string;
  /** Other names people write for this team, such as a log tag "UCLA FB". */
  aliases?: string[];
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

/**
 * A playoff round. Regular season leaves this off: no stakes word.
 * The sheet and the event page show `round`, then `game` when a feed has one
 * ("NLDS · Game 2"). A postseason map chip adds both, in parentheses:
 * "Dodgers (NLDS G2)". Regular season and friendlies leave this off the chip.
 */
export interface Stakes {
  round: string;
  /** Series game number. Not a doubleheader index, and not an ESPN type code. */
  game?: number;
}

export interface CrowdEvent {
  id: string;
  metroId: string;
  date: LocalDate;
  /** Null when the start time isn't recorded yet. */
  start: LocalTime | null;
  kind: EventKind;
  title: string;
  /** Playoff round, when there is one. Concerts and the regular season leave it off. */
  stakes?: Stakes;
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
  /**
   * Under the ~5,000 friction floor. Kept in the catalog, never a map dot,
   * and it does not move anyone else's read. It can still carry a nearby
   * read from bigger events the same night.
   */
  belowFloor?: boolean;
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
export interface DateSearchHit {
  date: LocalDate;
  rating: number | null;
  /** The rated night's headline, or the matching event titles. */
  headline: string;
  /** The names that matched, such as "Dodgers · SoFi Stadium". */
  matched: string;
}

// ---------- A night (forecast, then stamp) ----------

/**
 * Where a stored read came from.
 * "nearby" means bigger events that night, not this room's own crowd.
 */
export type FrictionReadMethod = 'hand' | 'formula' | 'nearby';

/**
 * One friction read. The number is the night's 1–10 score, when a date has one.
 * The word is the event's own friction (Moderate, Heavy, …), when that event
 * feeds friction and an assessment is on file. Either may be absent. Neither
 * is invented.
 */
export interface FrictionRead {
  rating?: number;
  friction?: Friction;
  /** The event's own why line, frozen with an own read. Omitted for a nearby read. */
  why?: string;
  method: FrictionReadMethod;
}

/**
 * A friction read frozen at a moment in time.
 * The schedule archive stores these. Save does not.
 */
export interface Forecast extends FrictionRead {
  kind: 'forecast';
  /** ISO time the forecast was frozen. */
  recordedAt: string;
}

/**
 * Where the stamp's forecast came from.
 * `daily-before-start` is the latest daily schedule saved before the event's start.
 */
export type ForecastBasisKind = 'daily-before-start';

/**
 * The post-night record. Replaced when the formula improves; `lastUpdated`
 * moves with that replacement. `reconstructed` means no saved schedule covered
 * the date, so the listing was rebuilt afterwards. `forecastBasis` says the
 * stamp used the latest daily schedule saved before the event's start.
 */
export interface Stamp extends FrictionRead {
  kind: 'stamp';
  /** ISO time of the latest pass. */
  lastUpdated: string;
  reconstructed?: boolean;
  forecastBasis?: ForecastBasisKind;
  /** ISO time that forecast record was captured. */
  forecastCapturedAt?: string;
}

/**
 * One metro's calendar night: the events that share a local date.
 * Ratings, the calendar, and the Map still look up by date. This is the
 * object those lookups describe. A logged night (below) is one person's
 * entry on a night like this, with a forecast and a stamp.
 */
export interface MetroDate {
  metroId: string;
  date: LocalDate;
  events: CrowdEvent[];
  /** Latest scheduled start, local "HH:MM". Null when no start is on file. */
  lastScheduledStart: LocalTime | null;
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
export interface Entry {
  id: string;
  /** Catalog event this night is tied to, when one exists. */
  eventId?: string;
  when: LoggedWhen;
  title: string;
  /** Filter chips, such as "UCLA MBB" or "Dodgers". */
  tags: string[];
  /**
   * Type name used for filters. A game uses the sport (Baseball, Women's basketball).
   * A show uses "Concerts". This is not a sports-only field.
   */
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
  /**
   * Under the ~5,000 friction floor: not a map dot, and it does not feed friction.
   * It can still take a nearby read from bigger events that night.
   */
  belowFloor?: boolean;
  /** In this metro. Away nights do not borrow the home city's rating. */
  inMetro?: boolean;
  metroId?: string;
  kind: EventKind;
  /**
   * Not written. A forecast freezes at the scheduled start, in the schedule
   * archive, not when this night is saved. An older phone copy may still have
   * one; it is dropped on load.
   */
  forecast?: Forecast;
  /**
   * The post-night record. Absent until the stamp locks, or when there was
   * no read to store. May be replaced when the formula improves.
   */
  stamp?: Stamp;
}

/** An upcoming night she flagged. Separate from "I was there". */
export interface Plan {
  id: string;
  date: LocalDate;
  metroId: string;
  eventId?: string;
  title: string;
  venue?: string;
  /**
   * Not written. Save stores the night only. An older phone copy may still
   * have one; it is dropped on load.
   */
  forecast?: Forecast;
}

export type YouOrder = 'plans-first' | 'nights-first';

/**
 * What the phone saves (and, signed in, what the account saves). Since Oct 5, 2026 no log ships inside the app.
 * A browser clear drops marks, plans, and the order setting. Export is the backup.
 */
export interface PersonalLog {
  version: 1;
  hiddenSeedIds: string[];
  added: Entry[];
  plans: Plan[];
  order: YouOrder;
  /**
   * Teams, artists, venues and festivals followed (the Favorites tab). Absent on
   * a log that has never been favorited from; the app then derives a first set
   * from the nights in it (empty for a new person) and saves that.
   */
  favorites?: Favorite[];
}

export type FavoriteKind = 'team' | 'artist' | 'venue' | 'festival';

export interface Favorite {
  kind: FavoriteKind;
  id: string;
  label: string;
  teamId?: string;
  venueId?: string;
}
