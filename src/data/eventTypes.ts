// One controlled list of event types (build 5, item 11; Kylie, Oct 14, answers IN03, IN04; naming review N01, N02,
// N13–N15, N24, N30). 8 categories, 36 types, keyed `category.type` exactly as in section 2 of
// docs/build-5/research/event-types-table.md. Every raw key (feeds, seeds, the Add form) goes through one map after
// lowercasing and trimming. Nothing stored changes: an event keeps its `kind` and `audience`, a stub its `kind` and
// `sport`; the type is worked out on read, so feeds, the catalog and old stubs need no migration.

import { TEAMS } from './teams';
import { VENUES } from './venues';
import type { CrowdEvent, Entry } from './types';

export type TypeCategory = 'sports' | 'music' | 'arts' | 'family' | 'fairs' | 'popup' | 'watch' | 'other';

export interface TypeDef {
  key: string;
  category: TypeCategory;
  label: string;
  /** The Phosphor icon name, or `x-…` for one of the six custom icons (item 12). */
  icon: string;
}

/** Section 2 of the table. `sports.other` reads "Sports event" (N13) and `other` reads "Event" (N30). */
export const EVENT_TYPES: readonly TypeDef[] = [
  { key: 'sports.baseball', category: 'sports', label: 'Baseball', icon: 'baseball' },
  { key: 'sports.softball', category: 'sports', label: 'Softball', icon: 'baseball' },
  { key: 'sports.basketball', category: 'sports', label: 'Basketball', icon: 'basketball' },
  { key: 'sports.football', category: 'sports', label: 'Football', icon: 'football' },
  { key: 'sports.soccer', category: 'sports', label: 'Soccer', icon: 'soccer-ball' },
  { key: 'sports.hockey', category: 'sports', label: 'Hockey', icon: 'hockey' },
  { key: 'sports.lacrosse', category: 'sports', label: 'Lacrosse', icon: 'x-lacrosse' },
  { key: 'sports.volleyball', category: 'sports', label: 'Volleyball', icon: 'volleyball' },
  { key: 'sports.tennis', category: 'sports', label: 'Tennis', icon: 'tennis-ball' },
  { key: 'sports.golf', category: 'sports', label: 'Golf', icon: 'golf' },
  { key: 'sports.combat', category: 'sports', label: 'Combat sports', icon: 'boxing-glove' },
  { key: 'sports.motorsports', category: 'sports', label: 'Motorsports', icon: 'flag-checkered' },
  { key: 'sports.rodeo', category: 'sports', label: 'Rodeo', icon: 'cowboy-hat' },
  { key: 'sports.horse_racing', category: 'sports', label: 'Horse racing', icon: 'horse' },
  { key: 'sports.rugby', category: 'sports', label: 'Rugby', icon: 'x-rugby' },
  { key: 'sports.cricket', category: 'sports', label: 'Cricket', icon: 'cricket' },
  { key: 'sports.track', category: 'sports', label: 'Track & field', icon: 'person-simple-run' },
  { key: 'sports.other', category: 'sports', label: 'Sports event', icon: 'trophy' },
  { key: 'music.concert', category: 'music', label: 'Concert', icon: 'music-note' },
  { key: 'music.festival', category: 'music', label: 'Festival', icon: 'flag-banner' },
  { key: 'music.classical', category: 'music', label: 'Classical & opera', icon: 'piano-keys' },
  { key: 'arts.theatre', category: 'arts', label: 'Theatre', icon: 'mask-happy' },
  { key: 'arts.comedy', category: 'arts', label: 'Comedy', icon: 'x-laugh' },
  { key: 'arts.dance', category: 'arts', label: 'Dance', icon: 'sneaker-move' },
  { key: 'arts.film', category: 'arts', label: 'Film', icon: 'x-movie-camera' },
  { key: 'arts.talk', category: 'arts', label: 'Talk & lecture', icon: 'presentation' },
  { key: 'arts.spectacle', category: 'arts', label: 'Spectacle & magic', icon: 'magic-wand' },
  { key: 'family.circus', category: 'family', label: 'Circus', icon: 'x-big-top' },
  { key: 'family.ice_show', category: 'family', label: 'Ice show', icon: 'snowflake' },
  { key: 'family.kids', category: 'family', label: 'Kids & family', icon: 'balloon' },
  { key: 'fairs.fair', category: 'fairs', label: 'Fair', icon: 'x-ferris-wheel' },
  { key: 'fairs.expo', category: 'fairs', label: 'Expo & convention', icon: 'users-three' },
  { key: 'fairs.market', category: 'fairs', label: 'Market', icon: 'storefront' },
  { key: 'popup', category: 'popup', label: 'Pop-up', icon: 'lightning' },
  { key: 'watch.broadcast', category: 'watch', label: 'Watch party', icon: 'television' },
  { key: 'watch.screening', category: 'watch', label: 'Live screening', icon: 'projector-screen' },
  { key: 'other', category: 'other', label: 'Event', icon: 'ticket' },
];

const BY_KEY = new Map(EVENT_TYPES.map((t) => [t.key, t]));

export function typeDef(key: string): TypeDef {
  return BY_KEY.get(key) ?? BY_KEY.get('other')!;
}

/** An event's type: the key, the word shown, and the original string where the table keeps one (boxing under combat). */
export interface EventType {
  key: string;
  label: string;
  subtype?: string;
  /** Music only: the genre as secondary text, in Ticketmaster's casing (item 11 step 4). */
  genre?: string;
}

/** Sport keys and Add-form words (lowercased) → type, with the subtype kept where the table says so. Section 3. */
const SPORTS: Record<string, { key: string; subtype?: string }> = {
  hockey: { key: 'sports.hockey' },
  football: { key: 'sports.football' },
  soccer: { key: 'sports.soccer' },
  basketball: { key: 'sports.basketball' },
  wnba: { key: 'sports.basketball' },
  baseball: { key: 'sports.baseball' },
  softball: { key: 'sports.softball' },
  lacrosse: { key: 'sports.lacrosse' },
  volleyball: { key: 'sports.volleyball' },
  tennis: { key: 'sports.tennis' },
  golf: { key: 'sports.golf' },
  boxing: { key: 'sports.combat', subtype: 'Boxing' },
  mma: { key: 'sports.combat', subtype: 'MMA' },
  wrestling: { key: 'sports.combat', subtype: 'Wrestling' },
  motorsports: { key: 'sports.motorsports' },
  motorsport: { key: 'sports.motorsports' },
  rodeo: { key: 'sports.rodeo' },
  'horse-racing': { key: 'sports.horse_racing' },
  'horse racing': { key: 'sports.horse_racing' },
  'rugby union': { key: 'sports.rugby', subtype: 'Rugby union' },
  'rugby league': { key: 'sports.rugby', subtype: 'Rugby league' },
  'aussie rules': { key: 'sports.rugby', subtype: 'Aussie rules' },
  rugby: { key: 'sports.rugby' },
  cricket: { key: 'sports.cricket' },
  'track & field': { key: 'sports.track' },
  track: { key: 'sports.track' },
  esports: { key: 'sports.other', subtype: 'Esports' },
  other: { key: 'sports.other' },
};

/** Ticketmaster's "other" tags (and seed tags), lowercased → type. Section 3. */
const TAGS: Record<string, string> = {
  theatre: 'arts.theatre',
  'arts & theatre': 'arts.theatre',
  'miscellaneous theatre': 'arts.theatre',
  drama: 'arts.theatre',
  'performance art': 'arts.theatre',
  multimedia: 'arts.theatre',
  comedy: 'arts.comedy',
  dance: 'arts.dance',
  animation: 'arts.film',
  horror: 'arts.film',
  'action/adventure': 'arts.film',
  film: 'arts.film',
  'lecture/seminar': 'arts.talk',
  'psychics/mediums/hypnotists': 'arts.talk',
  spectacular: 'arts.spectacle',
  'magic & illusion': 'arts.spectacle',
  "children's theatre": 'family.kids',
  'circus & specialty acts': 'family.circus',
  'ice shows': 'family.ice_show',
  family: 'family.kids',
  fair: 'fairs.fair',
  convention: 'fairs.expo',
  'hobby/special interest expos': 'fairs.expo',
  'community/civic': 'fairs.market',
  classical: 'music.classical',
  opera: 'music.classical',
  'pop-up': 'popup',
  popup: 'popup',
  'horse-racing': 'sports.horse_racing',
};

/**
 * The title-keyword pass for Undefined / Miscellaneous and untagged events (item 11 step 6). Whole words only, in
 * this order; the first match wins. Unmatched falls back to `other`. Kylie can correct the list in one pass.
 */
const KEYWORDS: readonly [RegExp, string][] = [
  [/\blucha libre\b|\bwrestling\b|\bwwe\b|\baew\b/i, 'sports.combat'],
  [/\bfight series\b|\bboxing\b|\bmma\b|\bufc\b/i, 'sports.combat'],
  [/\bvolleyball\b/i, 'sports.volleyball'],
  [/\bhockey\b/i, 'sports.hockey'],
  [/\besports?\b/i, 'sports.other'],
  [/\bmonster jam\b|\bsupercross\b|\bmotocross\b|\bnascar\b/i, 'sports.motorsports'],
  [/\bon ice\b/i, 'family.ice_show'],
  [/\bcirque\b|\bcircus\b/i, 'family.circus'],
  [/\bfestival\b|\bfest\b/i, 'music.festival'],
  [/\btribute\b/i, 'music.concert'],
  [/\bsymphony\b|\bphilharmonic\b|\bopera\b/i, 'music.classical'],
  [/\bcomedy\b|\bcomedian\b|\bstand-?up\b/i, 'arts.comedy'],
  [/\bmusical\b|\bbroadway\b|\btheatre\b|\btheater\b/i, 'arts.theatre'],
  [/\bballet\b|\bdance\b/i, 'arts.dance'],
  [/\bscreening\b|\bfilm\b/i, 'arts.film'],
  [/\bmagic\b|\billusion(ist)?\b/i, 'arts.spectacle'],
  [/\blecture\b|\bin conversation\b|\bpodcast\b|\bevening with\b/i, 'arts.talk'],
  [/\bcomic[- ]con\b|\bconvention\b|\bexpo\b|\bcomplexcon\b/i, 'fairs.expo'],
  [/\bfair\b/i, 'fairs.fair'],
  [/\bmarket\b/i, 'fairs.market'],
  [/\bkids\b|\bdisney junior\b|\bsesame street\b|\bpaw patrol\b|\bbluey\b/i, 'family.kids'],
];

function byKeyword(title: string): string | null {
  for (const [re, key] of KEYWORDS) if (re.test(title)) return key;
  return null;
}

/** Ticketmaster casing for genres (item 11 step 4): its own spellings where it has one, title case otherwise. */
const GENRE_CASING: Record<string, string> = {
  'hip-hop': 'Hip-Hop/Rap',
  'hip hop': 'Hip-Hop/Rap',
  'hip-hop/rap': 'Hip-Hop/Rap',
  'r&b': 'R&B',
  electronic: 'Dance/Electronic',
  'dance/electronic': 'Dance/Electronic',
  'k-pop': 'K-Pop',
  'classic rock': 'Classic Rock',
  'pop rock': 'Pop Rock',
  'ballads/romantic': 'Ballads/Romantic',
};

export function genreCasing(raw: string): string {
  const g = raw.trim();
  const known = GENRE_CASING[g.toLowerCase()];
  if (known) return known;
  return g.replace(/\b([a-z])/g, (c) => c.toUpperCase());
}

/** Genres that say nothing; a music event with one of these keeps no genre line. */
const EMPTY_GENRES = new Set(['other', 'undefined', 'various', 'music', '']);

function make(key: string, extra: Partial<EventType> = {}): EventType {
  const def = typeDef(key);
  // A kept subtype reads as itself (N13, N14): "Esports" under Sports event, "Boxing" / "Wrestling" / "MMA" under
  // combat, "Rugby union" / "Aussie rules" under rugby.
  const label = extra.subtype && ['sports.other', 'sports.combat', 'sports.rugby'].includes(def.key) ? extra.subtype : def.label;
  return { key: def.key, label, ...extra };
}

/** The type for a sport key or an Add-form sport word. */
function sportType(raw: string, title = ''): EventType {
  // A stub's sport can carry the side: "Women's basketball", "Men's volleyball" (hand-typed and imported logs).
  const word = raw.trim().toLowerCase();
  const hit = SPORTS[word] ?? SPORTS[word.replace(/^(?:men|women)['’]s\s+/, '')];
  // Lucha libre comes from Ticketmaster stored as boxing (item 13 parsing bug; the raw genre is unconfirmed).
  if (/\blucha libre\b/i.test(title) && (!hit || hit.key === 'sports.combat')) return make('sports.combat', { subtype: 'Wrestling' });
  if (hit) return make(hit.key, hit.subtype ? { subtype: hit.subtype } : {});
  return make('sports.other');
}

/**
 * A room whose business is screens: an immersive dome or a cinema (Live screening, Kylie, Oct 14, from
 * docs/research/topics/cosm-immersive-venues-answer.md section 4a: what is shown first, then where). Brands and the
 * word "cinema" only; "theatre"/"theater" stays out, since most concert rooms carry it.
 */
const SCREEN_VENUE = /\b(?:cosm|sphere|cinemas?|cineplex|cinemark|cin[eé]polis|amc|regal|imax|alamo drafthouse|harkins|marcus theatres?|landmark cinemas?)\b/i;

/** A live event shown elsewhere: in a dome or cinema it's a Live screening; in an arena, bar or plaza a Watch party. */
function watchType(venueName: string | undefined): EventType {
  return make(venueName && SCREEN_VENUE.test(venueName) ? 'watch.screening' : 'watch.broadcast');
}

/** The type of a listed event (item 11). */
export function eventType(event: CrowdEvent): EventType {
  const title = `${event.title} ${event.officialTitle ?? ''}`;
  if (event.kind === 'live-broadcast') return watchType(event.place.type === 'venue' ? (VENUES[event.place.venueId]?.names.map((n) => n.name).join(' ') ?? event.place.venueId) : event.place.name);
  if (event.kind === 'festival') return make('music.festival');
  const audience = event.audience;
  if (audience.domain === 'sports') return sportType(audience.sport, title);
  if (audience.domain === 'music' || event.kind === 'show') {
    const genre = audience.domain === 'music' ? audience.genre : '';
    // Classical before concert: the genre decides it, not the kind.
    if (/^(classical|opera)$/i.test(genre.trim())) return make('music.classical');
    // A real festival is a Festival whatever the feed says (N24).
    if (/\bfestival\b/i.test(event.title)) return make('music.festival');
    return make('music.concert', EMPTY_GENRES.has(genre.trim().toLowerCase()) ? {} : { genre: genreCasing(genre) });
  }
  // `special` and every other kind: resolved by its tag, then the title keywords; else "Event".
  const tag = audience.domain === 'other' ? audience.tag.trim().toLowerCase() : '';
  const fromTag = TAGS[tag];
  if (fromTag) return make(fromTag);
  const fromTitle = byKeyword(title);
  if (fromTitle) return make(fromTitle, fromTitle === 'sports.other' ? { subtype: 'Esports' } : /\blucha libre\b/i.test(title) ? { subtype: 'Wrestling' } : {});
  return make('other');
}

/** The type of a stub (hand-typed or taken from a listing), from what it stored: `kind`, `sport`, the title. */
export function entryType(entry: Pick<Entry, 'kind' | 'sport' | 'title'> & Partial<Pick<Entry, 'venue'>>): EventType {
  const kind = entry.kind ?? 'game';
  const sport = entry.sport ?? '';
  if (kind === 'live-broadcast') return watchType(entry.venue);
  if (kind === 'festival') return make('music.festival');
  if (kind === 'game') return sportType(sport, entry.title);
  // A hand-typed Event is stored with sport "Concerts" (manualEntryFrom), so the kind decides first.
  if (kind === 'show' || (kind !== 'special' && sport === 'Concerts')) return /\bfestival\b/i.test(entry.title) ? make('music.festival') : make('music.concert');
  // A special: the label it was saved under ("Special", "Event"), else the title keywords.
  const fromTag = TAGS[sport.trim().toLowerCase()];
  if (fromTag) return make(fromTag);
  const fromTitle = byKeyword(entry.title);
  if (fromTitle) return make(fromTitle, fromTitle === 'sports.other' ? { subtype: 'Esports' } : {});
  return make('other');
}

/** The league a listed game belongs to, from its home team ("WNBA", "NHL"), for the event page's Competition line (N15). */
export function competitionOf(event: CrowdEvent): string | undefined {
  if (event.audience.domain !== 'sports') return undefined;
  const league = event.teams?.home ? TEAMS[event.teams.home]?.league : undefined;
  return league && !/college/i.test(league) ? league : undefined;
}
