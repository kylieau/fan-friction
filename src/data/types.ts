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
  /**
   * Hand flag for a hard-access site, used only when scripts/venue-access.mjs
   * has not measured the venue. Measured venues use the rule in venues.ts
   * (`isStrained`). Gridlock × 1.25 in a driving city, × 1.1 in a transit city.
   */
  strained?: boolean;
  /**
   * Share of fans who drive to this venue (0–1), when a measured figure exists
   * (Yankee Stadium about 0.55, Nationals Park about 0.66). Scales the
   * hard-access penalty. Without one, the city type supplies a default.
   */
  carShare?: number;
  /** Ticketmaster's ids for this building, when known; a listing matches by id before by name. */
  ticketmasterIds?: string[];
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
  | { domain: 'sports'; sport: string; level?: SportsLevel }
  | { domain: 'music'; genre: string }
  | { domain: 'other'; tag: string };

/** Top pro, lower pro, college, or school. Left off means top pro. */
export type SportsLevel = 'pro' | 'lower' | 'college' | 'school' | 'amateur';
/** Men's, women's or mixed. Its own field: it cuts across every level (Oct 6, 2026). */
export type Division = 'men' | 'women' | 'mixed';

/**
 * Pre-event facts the occasion rule scores (formula v4, Oct 5, 2026). Every one
 * is known before the event. Results never appear here.
 */
export interface OccasionFacts {
  /** Championship final (World Series, Super Bowl, a cup final). */
  final?: boolean;
  /** Home or season opener. */
  opener?: boolean;
  /** A franchise's first game in a new market, or the first game in a new stadium. */
  newMarket?: boolean;
  /** A farewell or final game at a venue; a Marquee-tier artist's tour opener or closer. */
  farewell?: boolean;
  /** A standing rivalry (Giants, Padres, USC–UCLA). */
  rivalry?: boolean;
  /** Both teams at .600 or better after game 40, or both ranked (college). */
  bothContending?: boolean;
  /** A sellout announced at least a day ahead. */
  selloutAnnounced?: boolean;
  /** A publicized star debut or return. */
  starReturn?: boolean;
  /** A narrower story: a star facing a former team, a playoff rematch, a banner night (Kylie, Oct 5). */
  storyline?: boolean;
  /** Nights in the same performer's run at this venue within a week, from the listings. Three or more add a point. */
  run?: number;
}

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
  /** draft / confirmed are hand calls kept for comparison; formula is what the app shows. */
  status: 'draft' | 'confirmed' | 'formula';
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
  /** Pre-event facts for the occasion rule. Playoff round and game live in `stakes`. */
  occasionFacts?: OccasionFacts;
  /** Invite-only (an awards show, a convention): counts for Gridlock, never Crowd fight. */
  invited?: boolean;
  /** The TV station carrying it, when the schedule names one ("ESPN", "SportsNet LA"). A fact, never an input. */
  broadcast?: string;
  /** Probable or announced starters, known before the game (MLB names its pitchers). Home first. */
  starters?: { home?: string; away?: string };
  /** Attached on read from the saved results. Never an input to the read. */
  result?: GameResult;
  /** Crowd is evidence, never an input to the rating. */
  crowd: CrowdFigure[];
  /**
   * How many people the event is expected to draw, known before the night
   * (a high-school game in an NFL stadium, a theater act booked into an arena).
   * The formula sizes the event by this, with the building as the ceiling.
   * Always an estimate. Seeded where obvious; otherwise attached on read from
   * past announced crowds (expectedDraw.ts), with the middle half as low–high.
   */
  expectedDraw?: { count: number; note: string; low?: number; high?: number };
  /** A preseason (exhibition) game. Sized from past preseason crowds, never the regular season's. */
  preseason?: boolean;
  /** The home side's first regular-season home game of the season. */
  homeOpener?: boolean;
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
  /** Ticketmaster's event id, for listings from its feed (the one piece of its content kept). */
  ticketmasterId?: string;
}

/**
 * What happened, from the league's own feed after the game: the final score
 * and the announced crowd. Saved by the nightly run (Kylie, Oct 6: one pass
 * for the day's games, never typed in). Evidence on the page; the read never
 * looks at it (the no-results rule).
 */
/**
 * One game on a team's own schedule, home or away, from the team's feed. The row
 * points at the app's event when the home side plays in a covered city, so a
 * fan can open that night; other games are listed only (no friction read yet).
 * Times are in the team's home city, which is what its fans keep.
 */
export interface TeamGame {
  id: string;
  date: LocalDate;
  start: LocalTime | null;
  home: boolean;
  neutral?: boolean;
  opponent: string;
  venueName?: string;
  preseason?: boolean;
  stakes?: Stakes;
  /** Set once the game is final. */
  score?: { us: number; them: number };
  eventId?: string;
  eventMetroId?: string;
}

export interface GameResult {
  eventId: string;
  metroId: string;
  date: LocalDate;
  sourceId: string;
  status: 'final';
  /** For matching a seeded event whose id differs from the feed's: same date, building and home side. */
  venueId?: string;
  homeTeamId?: string;
  home: { name: string; score: number };
  away: { name: string; score: number };
  /** Announced attendance, when the box score carries one. */
  attendance?: number;
  /**
   * How long the game ran, first pitch to final out, tip to final horn.
   * Official when the league states it (MLB's "T: 3:18"); estimated when
   * worked out from the first and last play's wall-clock stamps (ESPN).
   */
  duration?: { minutes: number; kind: 'official' | 'estimated' };
  /** When it actually started, local "HH:MM" (first pitch, first play). */
  startedAt?: LocalTime;
  /** "F/10", "OT", "SO": how the game ended, when not in regulation. */
  note?: string;
  capturedAt: string;
}

// ---------- The date's rating ----------

export interface DateRating {
  metroId: string;
  date: LocalDate;
  /** 1–10. Always shown with its word ("Cooked · 9/10"). */
  rating: number;
  /** A short line for lists: "World Series G1, Lakers, USC and two concerts". */
  headline: string;
  /** The figure behind the headline ("117,566 seats in a fight across 6 events."). Date page only. */
  detail?: string;
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
  /** For a game typed in by hand: pro, college, high school… Catalog games carry this on the event. */
  level?: SportsLevel;
  division?: Division;
  /** "WNBA", "Premier League", "NCAA D-I". Competition, not league: cups and tournaments fit. */
  competition?: string;
  venue?: string;
  /** Final score, only when one is actually known. Shown as Outcome. */
  result?: string;
  /** Starting pitcher or other starter, when she wrote one down. */
  starter?: string;
  /** Bobblehead, giveaway, or similar, when known. */
  promo?: string;
  /** A moment worth naming, when known. Not a personal note. */
  notable?: string;
  /** Older copies only: folded into `review` on load (Kylie, Oct 6). Not written any more. */
  note?: string;
  /** Who you went with. Private: only you ever see it. */
  with?: string;
  /** A few lines in your words (Kylie, Oct 6: Letterboxd-style, no stars). Follows your visibility switch. */
  review?: string;
  /** Link to the setlist, for shows. */
  setlistUrl?: string;
  /** The TV station, typed in when the schedule didn't name one. */
  tv?: string;
  /**
   * Set when this hand-typed night was also suggested as a catalog event
   * (a big room). Lets the entry link up once the event is seeded.
   */
  suggestionId?: string;
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
