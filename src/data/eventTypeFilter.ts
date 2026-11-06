// Event Types (build 7.2, Section C; taxonomy locked by Kylie, Nov 4, 2026, from the Codex research in
// docs/build-7-2/research/event-types-research-answer-codex.md). A standing setting beside Crowd Size: nine top types,
// each with the sub-types the app's data can tell apart, and the sports levels. Like Crowd Size it is a display filter
// only: it shapes Explore, the map, day lineups, Local Competition, Further Out and search, and it never reaches the
// read (verdicts, crowd totals and chip counts keep every event, C11b). Only hidden keys are stored (C8), so a new
// switch appears on. The filter keys here are their own set, kept apart from the 37 display keys in eventTypes.ts
// (the research's storage recommendation): a label can change without touching a saved key, and a grouping
// ("Baseball and Softball") can span two display types.

import { eventMatches } from './favorites';
import { eventType } from './eventTypes';
import { genreCategory } from './genres';
import { isCollegeLeague, TEAMS } from './teams';
import type { CrowdEvent, Favorite, PersonalLog } from './types';

export type FilterLevel = 'pro' | 'minor' | 'college' | 'school';

export interface FilterTop {
  key: string;
  label: string;
  /** The sub-type switches under it, in screen order. Empty means one switch and no chevron (Other). */
  subs: readonly FilterSub[];
  /**
   * Hidden from the screen until events exist (C6; Kylie, Oct 30): today Parades & Road Events and Pop-Ups & Watch
   * Parties. A static list, so the screen reads the same in every city; the research found zero archive records for
   * either across 40 cities, and `scripts/event-types-check.mjs` reports the counts to flip it by hand.
   */
  dormant?: boolean;
}

export interface FilterSub {
  key: string;
  label: string;
  /** No event is filed under it yet (the classifier cannot tell it apart today), so no switch shows. */
  dormant?: boolean;
}

export interface LevelDef {
  key: string;
  level: FilterLevel;
  label: string;
  /** High School stays off the screen until a feed carries a reliably derived school level (C5c; Kylie, Nov 4, answer 4). */
  dormant?: boolean;
}

/** The sports levels (C5a: every level switch applies to every sport). */
export const FILTER_LEVELS: readonly LevelDef[] = [
  { key: 'level.pro', level: 'pro', label: 'Pro' },
  { key: 'level.minor', level: 'minor', label: 'Minor League' },
  { key: 'level.college', level: 'college', label: 'College' },
  // On the screen since Nov 6, 2026: the Ticketmaster high-school listings already in the feed count as its source once
  // their level is reliably derived (Kylie, Nov 4, answer 4); the title rule in `filterLevelOf` derives it.
  { key: 'level.school', level: 'school', label: 'High School' },
];

/** The nine top types and their sub-types, in the screen's order (the research's corrected label list). */
export const FILTER_TYPES: readonly FilterTop[] = [
  {
    key: 'sports',
    label: 'Sports',
    subs: [
      { key: 'sports.football', label: 'Football' },
      { key: 'sports.basketball', label: 'Basketball' },
      { key: 'sports.baseball_softball', label: 'Baseball and Softball' },
      { key: 'sports.hockey', label: 'Hockey' },
      { key: 'sports.soccer', label: 'Soccer' },
      { key: 'sports.volleyball', label: 'Volleyball' },
      { key: 'sports.combat', label: 'Combat Sports' },
      { key: 'sports.motorsports', label: 'Motorsports' },
      { key: 'sports.rodeo', label: 'Rodeo' },
      { key: 'sports.tennis_golf', label: 'Tennis and Golf' },
      { key: 'sports.lacrosse_rugby', label: 'Lacrosse and Rugby' },
      // Locked as a sub-type (Kylie, Nov 4); the classifier recognizes no esports listing in the archive yet (the Worlds
      // rows are titled "Worlds 2026 - Quarters 1"), so the switch waits for events, as C6 says.
      { key: 'sports.esports', label: 'Esports', dormant: true },
      { key: 'sports.other', label: 'Other Sports' },
    ],
  },
  {
    key: 'concerts',
    label: 'Concerts & Music',
    subs: [
      { key: 'concerts.rock_alternative', label: 'Rock and Alternative' },
      { key: 'concerts.pop', label: 'Pop' },
      { key: 'concerts.hiphop_rap', label: 'Hip-Hop and Rap' },
      { key: 'concerts.rnb', label: 'R&B' },
      { key: 'concerts.country_folk', label: 'Country and Folk' },
      { key: 'concerts.latin', label: 'Latin' },
      { key: 'concerts.electronic_dance', label: 'Electronic and Dance' },
      { key: 'concerts.metal', label: 'Metal' },
      { key: 'concerts.jazz_blues', label: 'Jazz and Blues' },
      { key: 'concerts.world_reggae', label: 'World and Reggae' },
      { key: 'concerts.faith_gospel', label: 'Faith and Gospel' },
      { key: 'concerts.classical_opera', label: 'Classical and Opera' },
      { key: 'concerts.unknown', label: 'Genre Unknown' },
      { key: 'concerts.festival', label: 'Music Festivals' },
    ],
  },
  {
    key: 'arts',
    label: 'Theater & Comedy',
    subs: [
      { key: 'arts.theatre', label: 'Theater and Musicals' },
      { key: 'arts.comedy', label: 'Comedy' },
      { key: 'arts.dance', label: 'Dance and Ballet' },
      { key: 'arts.magic', label: 'Magic and Variety Shows' },
      { key: 'arts.talks', label: 'Talks and Lectures' },
      { key: 'arts.film', label: 'Film and Screenings' },
    ],
  },
  {
    key: 'family',
    label: 'Family Shows',
    subs: [
      { key: 'family.ice', label: 'Ice Shows' },
      { key: 'family.circus', label: 'Circus and Acrobatics' },
      { key: 'family.kids', label: 'Kids and Family' },
    ],
  },
  {
    key: 'festivals',
    label: 'Festivals & Fairs',
    subs: [
      // The classifier files no event under food or community festivals yet (the research's candidate moves are to be
      // checked one at a time, not shipped blind), so those two switches wait.
      { key: 'festivals.food', label: 'Food and Drink Festivals', dormant: true },
      { key: 'festivals.community', label: 'Cultural and Community Festivals', dormant: true },
      { key: 'festivals.fair', label: 'Fairs and Carnivals' },
      { key: 'festivals.market', label: 'Markets' },
    ],
  },
  {
    key: 'expos',
    label: 'Conventions & Expos',
    // One expo key today; the four research sub-types need title rules the audit rated unreliable (43% of the 14
    // expo-tagged rows misfiled), so the top type is one switch for now.
    subs: [
      { key: 'expos.fan', label: 'Fan Conventions', dormant: true },
      { key: 'expos.trade', label: 'Trade and Hobby Expos', dormant: true },
      { key: 'expos.vehicle', label: 'Auto, Boat, and Home Shows', dormant: true },
      { key: 'expos.animal', label: 'Pet and Animal Shows', dormant: true },
    ],
  },
  {
    key: 'road',
    label: 'Parades & Road Events',
    dormant: true,
    subs: [
      { key: 'road.parade', label: 'Parades' },
      { key: 'road.race', label: 'Marathons and Road Races' },
      { key: 'road.cycling', label: 'Cycling Events' },
      { key: 'road.holiday', label: 'Holiday Events' },
      { key: 'road.march', label: 'Cultural Marches' },
    ],
  },
  {
    key: 'social',
    label: 'Pop-Ups & Watch Parties',
    dormant: true,
    subs: [
      { key: 'social.popup', label: 'Pop-Ups' },
      { key: 'social.watch', label: 'Watch Parties' },
      { key: 'social.screening', label: 'Live Screenings' },
    ],
  },
  { key: 'other', label: 'Other', subs: [] },
];

const TOP_BY_KEY = new Map(FILTER_TYPES.map((t) => [t.key, t]));

/** Display key → filter sub key (the research's groupings). Music concerts are resolved by genre below. */
const SUB_OF_DISPLAY: Record<string, string> = {
  'sports.baseball': 'sports.baseball_softball',
  'sports.softball': 'sports.baseball_softball',
  'sports.basketball': 'sports.basketball',
  'sports.football': 'sports.football',
  'sports.soccer': 'sports.soccer',
  'sports.hockey': 'sports.hockey',
  'sports.lacrosse': 'sports.lacrosse_rugby',
  'sports.rugby': 'sports.lacrosse_rugby',
  'sports.volleyball': 'sports.volleyball',
  'sports.tennis': 'sports.tennis_golf',
  'sports.golf': 'sports.tennis_golf',
  'sports.combat': 'sports.combat',
  'sports.motorsports': 'sports.motorsports',
  'sports.rodeo': 'sports.rodeo',
  // Horse racing, cricket and track keep their display keys but no filter switch of their own until events exist.
  'sports.horse_racing': 'sports.other',
  'sports.cricket': 'sports.other',
  'sports.track': 'sports.other',
  'sports.other': 'sports.other',
  'music.festival': 'concerts.festival',
  'music.classical': 'concerts.classical_opera',
  'arts.theatre': 'arts.theatre',
  'arts.comedy': 'arts.comedy',
  'arts.dance': 'arts.dance',
  'arts.film': 'arts.film',
  'arts.talk': 'arts.talks',
  'arts.spectacle': 'arts.magic',
  'family.circus': 'family.circus',
  'family.ice_show': 'family.ice',
  'family.kids': 'family.kids',
  'fairs.fair': 'festivals.fair',
  'fairs.expo': 'expos',
  'fairs.market': 'festivals.market',
  popup: 'social.popup',
  'watch.broadcast': 'social.watch',
  'watch.screening': 'social.screening',
  other: 'other',
};

/** The seller's genre category (genres.ts) → the Concerts & Music switch. Unmapped is Genre Unknown (C7). */
const SUB_OF_GENRE: Record<string, string> = {
  Rock: 'concerts.rock_alternative',
  Pop: 'concerts.pop',
  'Hip-hop': 'concerts.hiphop_rap',
  'R&B': 'concerts.rnb',
  Country: 'concerts.country_folk',
  Folk: 'concerts.country_folk',
  Latin: 'concerts.latin',
  Electronic: 'concerts.electronic_dance',
  Metal: 'concerts.metal',
  Jazz: 'concerts.jazz_blues',
  Blues: 'concerts.jazz_blues',
  Global: 'concerts.world_reggae',
  Reggae: 'concerts.world_reggae',
  Faith: 'concerts.faith_gospel',
  Classical: 'concerts.classical_opera',
  // A children's-music listing (CoComelon) is a family show, as the research recommends, not Genre Unknown.
  Family: 'family.kids',
};

/**
 * Lower and junior leagues on file, for the Minor League switch (the research's grouping: AHL, the G League, WHL and
 * OHL, USL Championship as Division II, the affiliated baseball levels). A filter grouping, not a claim about who is
 * paid. Every other non-college league on file is Pro, the Canadian and Mexican top tiers included (CEBL, CPL, NSL,
 * Liga MX, LMB, LNBP).
 */
const MINOR_LEAGUE = /^(AHL|ECHL|NBA G League|WHL|OHL|QMJHL|BCHL|USL Championship|MLS Next Pro|Single-A|Low-A|High-A|Double-A|Triple-A|Independent baseball|Frontier League|WCL)\b/i;
/** ONEFA is Mexican college football; isCollegeLeague does not read it. */
const COLLEGE_LEAGUE = /^ONEFA\b/i;
/**
 * A high-school listing by its title (Kylie, Nov 4, answer 4: the feed's own high-school rows count once the level is
 * reliably derived): the words "high school", or a state or provincial school-athletics association of four letters
 * or more (CHSAA's state volleyball days in Denver). Three-letter names (CIF, UIL) collide with other words and stay out.
 */
const SCHOOL_TITLE = /\bhigh school\b|\b(?:CHSAA|OHSAA|FHSAA|OFSAA|TSSAA|GHSA|WIAA|PIAA|IHSA|IHSAA|MHSAA|NCHSAA|VHSL|OSAA|NYSPHSAA|KHSAA|LHSAA|MSHSAA|AHSAA|SCHSL|NJSIAA|MIAA|CIAC|NHIAA|NSAA|KSHSAA|UHSAA|NMAA|WHSAA|SDHSAA|NDHSAA|OSSAA|TAPPS|ASAA|SHSAA|MPSSAA|DIAA|RIIL|WVSSAC)\b/i;

/**
 * A game's level (Kylie, Nov 4, answer 3, and the research's rule): the explicit level first, then the home team's
 * league, then a high-school title. Unknown is left undefined and is never Pro (types.ts says an absent level reads as
 * top pro for the read; this filter does not follow that, by her lock), so a level switch never hides a game whose
 * level is not known. A listing the classifier reads as a sport from its title (a tag of Undefined) has no explicit
 * level and no team record, so only the title rule can place it.
 */
export function filterLevelOf(event: CrowdEvent): FilterLevel | undefined {
  const explicit = event.audience.domain === 'sports' ? event.audience.level : undefined;
  if (explicit === 'pro') return 'pro';
  if (explicit === 'lower') return 'minor';
  if (explicit === 'college') return 'college';
  if (explicit === 'school') return 'school';
  if (explicit === 'amateur') return undefined;
  const league = event.teams?.home ? TEAMS[event.teams.home]?.league : undefined;
  if (league) {
    if (isCollegeLeague(league) || COLLEGE_LEAGUE.test(league)) return 'college';
    if (MINOR_LEAGUE.test(league)) return 'minor';
    return 'pro';
  }
  if (SCHOOL_TITLE.test(`${event.title} ${event.officialTitle ?? ''}`)) return 'school';
  return undefined;
}

/**
 * A film or show billed with a live orchestra is music (Kylie, Nov 4, answer 6: a film with a live orchestra sits
 * under Concerts & Music; ordinary screenings under Film and Screenings). The seller's tag can file it as theatre or
 * film ("Hocus Pocus: Live With The Atlanta Symphony Orchestra" is tagged Miscellaneous Theatre), so the filter reads
 * the title: an orchestra, symphony or philharmonic named in it. "In Concert" alone is left out, since the research
 * found it names film-only screenings too. The row keeps its display icon; only the switches change.
 */
const ORCHESTRA_TITLE = /\b(?:orchestra|symphony|philharmonic)\b/i;

export interface FilterKeys {
  top: string;
  sub: string;
  level?: FilterLevel;
}

/** The switches that govern an event: its top type, its sub-type, and for a game its level when known. */
export function filterKeysOf(event: CrowdEvent): FilterKeys {
  const type = eventType(event);
  let sub: string;
  if (type.key === 'music.concert') {
    const genre = event.audience.domain === 'music' ? genreCategory(event.audience.genre) : null;
    sub = (genre && SUB_OF_GENRE[genre]) ?? 'concerts.unknown';
  } else if (type.key === 'sports.other' && type.subtype === 'Esports') sub = 'sports.esports';
  else if ((type.key.startsWith('arts.') || type.key.startsWith('family.')) && ORCHESTRA_TITLE.test(`${event.title} ${event.officialTitle ?? ''}`)) sub = 'concerts.classical_opera';
  else sub = SUB_OF_DISPLAY[type.key] ?? 'other';
  const top = sub.includes('.') ? sub.slice(0, sub.indexOf('.')) : sub;
  const level = top === 'sports' ? filterLevelOf(event) : undefined;
  return { top, sub, ...(level ? { level } : {}) };
}

/** The switch keys a listed event answers to, for a hidden-set lookup. */
function keysOf(event: CrowdEvent): string[] {
  const k = filterKeysOf(event);
  const keys = [k.top];
  if (k.sub !== k.top) keys.push(k.sub);
  if (k.level) keys.push(`level.${k.level}`);
  return keys;
}

/** The saved hidden keys, cleaned: known keys only, each once. */
export function cleanHiddenTypes(keys: readonly unknown[]): string[] {
  const known = new Set<string>();
  for (const t of FILTER_TYPES) {
    known.add(t.key);
    for (const s of t.subs) known.add(s.key);
  }
  for (const l of FILTER_LEVELS) known.add(l.key);
  return [...new Set(keys.filter((k): k is string => typeof k === 'string' && known.has(k)))];
}

/** The hidden keys on a log, as a set. Empty means everything shows (C8). */
export function hiddenEventTypesOf(log: PersonalLog): ReadonlySet<string> {
  return new Set(log.hiddenEventTypes ?? []);
}

/** True when nothing is switched off, counting only switches the screen shows (Kylie, Nov 4, answer 5). */
export function eventTypesOpen(hidden: ReadonlySet<string>): boolean {
  return hiddenSwitchCount(hidden) === 0;
}

/**
 * How many visible switches are off (the Settings row's "N Off"; Kylie, Nov 4, answer 5: only switches the person
 * can see). A top type that is off counts once, whatever is stored under it; its children's keys are kept so they
 * come back as they were when the parent is switched on again.
 */
export function hiddenSwitchCount(hidden: ReadonlySet<string>): number {
  let n = 0;
  for (const t of FILTER_TYPES) {
    if (t.dormant) continue;
    if (hidden.has(t.key)) {
      n += 1;
      continue;
    }
    for (const s of t.subs) if (!s.dormant && hidden.has(s.key)) n += 1;
    if (t.key === 'sports') for (const l of FILTER_LEVELS) if (!l.dormant && hidden.has(l.key)) n += 1;
  }
  return n;
}

/** "All On" or "N Off": the Settings row's value (C1). */
export function eventTypesLabel(hidden: ReadonlySet<string>): string {
  const n = hiddenSwitchCount(hidden);
  return n === 0 ? 'All On' : `${n} Off`;
}

/**
 * Whether the setting hides this event: any of its keys is off. A dormant key cannot be switched, so it never hides.
 * The exceptions (your stubs and plans, friends' activity, favorites) are the caller's: see `displayFilter`.
 */
export function hiddenByEventTypes(event: CrowdEvent, hidden: ReadonlySet<string>): boolean {
  if (hidden.size === 0) return false;
  return keysOf(event).some((k) => hidden.has(k));
}

/** Does a favorite team, artist, venue or festival claim this event (C2: those always show under Event Types)? */
export function isFavoriteEvent(event: CrowdEvent, favorites: readonly Favorite[]): boolean {
  return favorites.some((fav) => eventMatches(event, fav));
}

/** The top type's record, for the screen. */
export function filterTop(key: string): FilterTop | undefined {
  return TOP_BY_KEY.get(key);
}
