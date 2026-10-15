import { TEAMS } from '../data/teams';
import { VENUES, venueNameOn } from '../data/venues';
import { METROS } from '../config/metros';
import type { CrowdEvent } from '../data/types';
import { displayName } from '../config/names';
import { clockTime } from './dates';

// Event names in three lengths (build 5, item 13; naming review N01–N30, item 15; follow-up research, Oct 14).
// One set of parts per event, rendered three ways, so the lengths can't drift:
//   chip  (map chip, timeline labels, "Biggest:", Up against): name up to 16 characters + the designation (up to 8)
//   short (rows: Explore, the sheet, the date page lineup, Home, Stubs, Faves, search, the chip card): 32 characters
//   full  (event page title, Stub sheet, share text): never cut; it wraps
// The designation (G7, DH1, Preseason, All-Star) is never cut first. Drop order when a name is too long:
// year → tour → openers → away team (then city, chip only) → tag → nickname to short name → truncate the name.
// Stored round codes ("NLCS", "Semis", "Postseason") are read keys for the playoff estimate; they are mapped to
// words here, on display, and never rewritten.

const CHIP_NAME = 16;
const SHORT_MAX = 32;

/** Tags that belong after the first name. CFB is stripped from old titles and never written back. */
const SQUAD_TAG = 'FB|MBB|WBB|CFB';

/** College football is FB. College basketball is MBB, or WBB when the team says so. */
function collegeAbbrev(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports' || !event.teams) return null;
  const sides = [TEAMS[event.teams.home], TEAMS[event.teams.away]].filter((t) => t !== undefined);
  if (!sides.some((t) => /college/i.test(t.league))) return null;
  if (event.audience.sport === 'football') return 'FB';
  if (event.audience.sport === 'basketball') {
    const women = sides.some((t) => /women|wbb/i.test(t.league) || t.id.endsWith('-wbb'));
    return women ? 'WBB' : 'MBB';
  }
  return null;
}

/** N16: a readable sport label after the teams in short and full names; the code stays on chips. */
const SQUAD_WORDS: Record<string, string> = { FB: 'Football', MBB: 'Basketball', WBB: "Women's basketball" };

function squadTag(raw: string): string {
  return raw === 'CFB' ? 'FB' : raw;
}

// ---------- Rounds: stored code → words (N03, N05) ----------

interface RoundWords {
  chip: string;
  short: string;
  full: string;
  final?: boolean;
}

const ROUNDS: Record<string, RoundWords> = {
  NLDS: { chip: 'NLDS', short: 'NLDS', full: 'NL Division Series' },
  ALDS: { chip: 'ALDS', short: 'ALDS', full: 'AL Division Series' },
  NLCS: { chip: 'NLCS', short: 'NLCS', full: 'NL Championship Series' },
  ALCS: { chip: 'ALCS', short: 'ALCS', full: 'AL Championship Series' },
  NLWC: { chip: 'NLWC', short: 'NLWC', full: 'National League Wild Card Series' },
  ALWC: { chip: 'ALWC', short: 'ALWC', full: 'American League Wild Card Series' },
  WS: { chip: 'WS', short: 'World Series', full: 'World Series', final: true },
  'World Series': { chip: 'WS', short: 'World Series', full: 'World Series', final: true },
  'Super Bowl': { chip: 'Super Bowl', short: 'Super Bowl', full: 'Super Bowl', final: true },
  'Wild Card': { chip: 'Wild Card', short: 'Wild Card', full: 'Wild Card' },
  Divisional: { chip: 'Divisional', short: 'Divisional', full: 'Divisional' },
  Championship: { chip: 'Championship', short: 'Championship', full: 'Championship' },
  'East Finals': { chip: 'East Finals', short: 'East Finals', full: 'Eastern Conference Finals' },
  'West Finals': { chip: 'West Finals', short: 'West Finals', full: 'Western Conference Finals' },
  Finals: { chip: 'Finals', short: 'Finals', full: 'NBA Finals', final: true },
  'Cup Final': { chip: 'Cup Final', short: 'Stanley Cup Final', full: 'Stanley Cup Final', final: true },
  'Conf Final': { chip: 'Conf Final', short: 'Conf Final', full: 'Conference Final' },
  Semis: { chip: 'Semis', short: 'Semifinals', full: 'Semifinals' },
  '1st Round': { chip: '1st Round', short: 'First round', full: 'First round' },
  '2nd Round': { chip: '2nd Round', short: 'Second round', full: 'Second round' },
  'CFP Semi': { chip: 'CFP Semi', short: 'CFP Semifinal', full: 'College Football Playoff Semifinal' },
  CFP: { chip: 'CFP', short: 'CFP', full: 'College Football Playoff' },
  'Title Game': { chip: 'Title Game', short: 'Title Game', full: 'College Football Playoff National Championship', final: true },
  Postseason: { chip: 'Playoffs', short: 'Playoffs', full: 'Playoffs' },
};

/** Minor-league hockey (case 6): each league's own playoff name in the full title; AHL and ECHL are the two given. */
const CUP_NAMES: Record<string, string> = { AHL: 'Calder Cup Playoffs', ECHL: 'Kelly Cup Playoffs' };

/** The same words for the same round (N05): "Semifinals", "First round", "Second round"; official names kept. */
function sameWords(round: string): string {
  return round
    .replace(/\bSemis\b/i, 'Semifinals')
    .replace(/\b(1st|First) Round\b/i, 'First round')
    .replace(/\b(2nd|Second) Round\b/i, 'Second round');
}

function roundWords(round: string): RoundWords & { minor?: boolean } {
  const known = ROUNDS[round];
  if (known) return known;
  const minor = round.match(/^(\S+) Playoffs$/);
  if (minor) return { chip: `${minor[1]} playoffs`, short: `${minor[1]} playoffs`, full: CUP_NAMES[minor[1]] ?? `${minor[1]} playoffs`, minor: true };
  const words = sameWords(round);
  return { chip: round, short: words, full: words };
}

/** "NLCS G2": the stored round and game as a short label (kept for callers that show the round on its own). */
export function stakesLabel(event: Pick<CrowdEvent, 'stakes' | 'audience' | 'kind'>): string | null {
  const round = event.stakes?.round;
  if (!round || event.audience.domain !== 'sports' || event.kind === 'show' || event.kind === 'festival') return null;
  const game = event.stakes?.game;
  const chip = roundWords(round).chip;
  return game && game > 0 ? `${chip} G${game}` : chip;
}

// ---------- Parts ----------

type Length = 'chip' | 'short' | 'full';

interface GameParts {
  type: 'game';
  /** The two sides as they read in the matchup, and how they are joined. */
  first: string;
  second: string;
  joiner: 'at' | 'vs.';
  eventName: string | null;
  neutralSite: boolean;
  sport: string | null;
  squad: string | null;
  round: (RoundWords & { minor?: boolean }) | null;
  game: number | null;
  year: number | null;
  /** `aside`: Preseason and spring training ride after the name in parentheses, never as a " · " part (Kylie, Oct 15). */
  designation: { chip: string; short: string; full: string; aside?: boolean } | null;
}

interface NamedParts {
  /** A title that is the name of the thing (All-Star games, "World Series · Game 1" with no teams, a plain title). */
  type: 'named';
  name: string;
  designation: string | null;
  year: number | null;
}

interface ShowParts {
  type: 'show';
  name: string;
  tour: string | null;
  tags: string[];
  city: string | null;
  touring: boolean;
}

type Parts = GameParts | NamedParts | ShowParts;

/** A game's two sides as the source wrote them (first-named first), its squad tag and a bracketed event name. */
function sidesOf(title: string): { first: string; second: string; tag: string | null; eventName: string | null; named: boolean } | null {
  let rest = title.trim();
  let tag: string | null = null;
  let eventName: string | null = null;
  let named = false;
  // East LA Classic (N18): "East LA Classic (Garfield vs. Roosevelt)": the outer words name the event.
  const outer = rest.match(/^([^()]+?)\s*\(([^()]+?\s+vs\.?\s+[^()]+?)\)\s*$/i);
  if (outer) {
    eventName = outer[1].trim();
    rest = outer[2].trim();
    named = true;
  }
  // Ticketmaster glues an event name to the teams (N18): "Copa Las Vegas: USA vs Mexico".
  const colon = !named ? rest.match(/^([^:]+):\s*(.+\s+vs\.?\s+.+)$/i) : null;
  if (colon) {
    eventName = colon[1].trim();
    rest = colon[2].trim();
    named = true;
  }
  const trailing = rest.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (trailing) {
    rest = trailing[1].trim();
    tag = squadTag(trailing[2]);
  }
  // Split on a "vs" outside brackets only.
  const vs = rest.match(/^([^()]*?)\s+vs\.?\s+(.*)$/i);
  if (!vs) return null;
  let first = vs[1].trim();
  const onFirst = first.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (onFirst) {
    first = onFirst[1].trim();
    tag = tag ?? squadTag(onFirst[2]);
  }
  let second = vs[2].trim();
  // A bracket that is not a squad tag names the event, on every game: "Oklahoma (Red River Showdown)".
  const bracket = second.match(/^(.*?)\s+\(([^()]+)\)\s*$/);
  if (bracket && !new RegExp(`^(${SQUAD_TAG})$`).test(bracket[2])) {
    second = bracket[1].trim();
    eventName = eventName ?? bracket[2].trim();
  }
  return { first, second, tag, eventName, named };
}

/** The year on a final (N07): the game's year, only when a feed named the round (seeds get none, N19). */
function finalYear(event: CrowdEvent, round: RoundWords | null): number | null {
  if (!round?.final || event.sourceId === 'seed') return null;
  return Number(event.date.slice(0, 4));
}

/** Preseason (N08), spring training (case 1), doubleheaders (N09): the designation after the teams. */
function designationOf(event: CrowdEvent): GameParts['designation'] {
  if (event.doubleheader) return { chip: `DH${event.doubleheader}`, short: `Game ${event.doubleheader}`, full: `Game ${event.doubleheader}` };
  if (!event.preseason) return null;
  if (event.audience.domain === 'sports' && event.audience.sport === 'baseball') {
    const league = springLeague(event);
    return { chip: 'Spring training', short: 'Spring training', full: league ? `Spring training, ${league}` : 'Spring training', aside: true };
  }
  return { chip: 'Preseason', short: 'Preseason', full: 'Preseason', aside: true };
}

/** Cactus League in Arizona, Grapefruit League in Florida (case 1), from the city's own name; else nothing. */
function springLeague(event: CrowdEvent): string | null {
  const metro = METROS[event.metroId];
  if (!metro) return null;
  if (/phoenix/i.test(metro.id)) return 'Cactus League';
  if (/tampa|miami/i.test(metro.id)) return 'Grapefruit League';
  return null;
}

function gameParts(event: CrowdEvent): Parts {
  const title = event.title.trim();
  // All-Star games and skills events lead with the league's event name; a matchup is never invented (case 2).
  if (/all-star/i.test(title)) return { type: 'named', name: title.replace(/\s+vs\.?\s+.*$/i, '').trim(), designation: null, year: finalYear(event, { chip: '', short: '', full: '', final: true }) };
  const round = event.stakes?.round ? roundWords(event.stakes.round) : null;
  const game = event.stakes?.game && event.stakes.game > 0 ? event.stakes.game : null;
  // "World Series Game 1" with round "World Series": the round said once (N19).
  if (round && new RegExp(`^${event.stakes!.round}\\s+Game\\s+\\d+$`, 'i').test(title)) {
    const home = event.teams?.home ? TEAMS[event.teams.home]?.shortName : undefined;
    const away = event.teams?.away ? TEAMS[event.teams.away]?.shortName : undefined;
    if (!home || !away) return { type: 'named', name: round.short, designation: game ? `Game ${game}` : null, year: null };
    // "{teams} · World Series, Game 1" once the teams are known.
    return { type: 'game', first: away, second: home, joiner: 'at', eventName: null, neutralSite: false, sport: null, squad: null, round, game, year: finalYear(event, round), designation: null };
  }
  const sides = sidesOf(title);
  if (!sides) return { type: 'named', name: displayName(title), designation: null, year: null };
  const code = collegeAbbrev(event) ?? sides.tag;
  const neutralWords = sides.eventName && /^neutral site$/i.test(sides.eventName);
  const eventName = neutralWords ? null : sides.eventName;
  // A Super Bowl or other final at a neutral site reads "vs." even when the feed forgot the flag (N06).
  const neutral = Boolean(event.neutralSite) || Boolean(neutralWords) || round?.full === 'Super Bowl';
  let first: string;
  let second: string;
  let joiner: GameParts['joiner'];
  if (sides.named || (neutral && !event.teams)) {
    // As written: a named game ("Garfield vs. Roosevelt") or a hand-listed neutral game, visitor first.
    [first, second, joiner] = [sides.first, sides.second, 'vs.'];
  } else if (neutral) {
    // Feeds write home first; at a neutral site the designated visitor leads (N17).
    [first, second, joiner] = [sides.second, sides.first, 'vs.'];
  } else {
    [first, second, joiner] = [sides.second, sides.first, 'at'];
  }
  return {
    type: 'game',
    first,
    second,
    joiner,
    eventName,
    neutralSite: neutral,
    sport: code ? SQUAD_WORDS[code] ?? null : null,
    squad: code,
    round,
    game,
    year: finalYear(event, round),
    designation: designationOf(event),
  };
}

/** Typos fixed in feed titles (N24). */
const TYPOS: [RegExp, string][] = [[/\bForth Worth\b/g, 'Fort Worth']];

/** Production brands whose "presents" introduces their show, not a promoter (N26). */
const PRODUCTION = /\b(on ice|cirque|circus|sesame street|disney|paw patrol|bluey|monster jam)\b/i;

/** City names a festival title can end with ("Sick New World Festival Fort Worth", N24). */
function cityTail(title: string): { rest: string; city: string } | null {
  const cities = new Set<string>();
  for (const metro of Object.values(METROS)) for (const part of metro.name.split(/\s*[–—/-]\s*/)) if (part.length > 2) cities.add(part.trim());
  for (const city of cities) {
    const m = title.match(new RegExp(`^(.+?)\\s+Festival\\s+${city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i'));
    if (m) return { rest: m[1].trim(), city };
  }
  return null;
}

function showParts(event: CrowdEvent): ShowParts {
  let raw = displayName(event.officialTitle ?? event.title);
  for (const [re, fix] of TYPOS) raw = raw.replace(re, fix);
  const tags: string[] = [];
  let touring = false;
  let city: string | null = null;
  // "(day 1 of 4)" → "Day 1 of 4" (N12).
  raw = raw.replace(/\s*\(\s*day\s+(\d+)\s+of\s+(\d+)\s*\)/i, (_m, a: string, b: string) => {
    tags.push(`Day ${a} of ${b}`);
    return '';
  });
  // "( 21+ )" → "21+" (N27).
  raw = raw.replace(/\s*\(\s*(\d{2})\s*\+\s*\)/, (_m, age: string) => {
    tags.push(`${age}+`);
    return '';
  });
  // "Waitress (Touring)" → "Waitress", "Touring production" on the full title (N25).
  raw = raw.replace(/\s*\(\s*touring\s*\)/i, () => {
    touring = true;
    return '';
  });
  let name = raw.trim();
  let tour: string | null = null;
  // "{A} presents {B}" (N26, N27): a production keeps its brand as the name; a promoter is dropped.
  const presents = name.match(/^(.+?)\s+presents\s+(.+)$/i);
  if (presents) {
    if (PRODUCTION.test(presents[1])) [name, tour] = [presents[1].trim(), presents[2].trim()];
    else name = presents[2].trim();
  }
  const performer = event.performer ? displayName(event.performer) : null;
  // Artist before tour (N10): "Song Of The Saints Tour with Phil Wickham" → "Phil Wickham · Song Of The Saints Tour".
  const withArtist = performer ? name.match(new RegExp(`^(.+?)\\s+with\\s+${performer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i')) : null;
  if (withArtist) [name, tour] = [performer!, withArtist[1].trim()];
  // A middle dot between artist and tour (N28): "Phoebe Bridgers: The Lost Tour", "LP - All Is Not Lost Tour".
  const split = name.match(/^(.+?)\s*(?::|\s-\s)\s*(.+)$/);
  if (!withArtist && split && (!performer || split[1].toLowerCase() === performer.toLowerCase())) [name, tour] = [split[1].trim(), split[2].trim()];
  // "Sick New World Festival Fort Worth" → "Sick New World · Fort Worth" (N24).
  const tail = cityTail(name);
  if (tail) [name, city] = [tail.rest, tail.city];
  // One styling per artist (N21): the act's part read through the casing rule on its own ("SLAYER" → "Slayer").
  return { type: 'show', name: displayName(name), tour, tags, city, touring };
}

function partsOf(event: CrowdEvent): Parts {
  if (event.audience.domain === 'sports' && event.kind !== 'show' && event.kind !== 'festival') return gameParts(event);
  return showParts(event);
}

// ---------- Rendering ----------

function truncate(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}

function roundText(p: GameParts, length: Length, compact = false): string | null {
  if (!p.round) return null;
  const words = length === 'full' ? p.round.full : p.round.short;
  const year = p.year && length !== 'chip' ? ` ${p.year}` : '';
  if (!p.game) return `${words}${year}`;
  return compact ? `${words}${year}\u00a0G${p.game}` : `${words}${year}, Game ${p.game}`;
}

/**
 * A game's name in two pieces: the name (matchup, event name, sport label) and the designation (round, game,
 * Preseason, DH), which is never cut. `drop` removes name parts in the notes' order: 1 year, 2 away team,
 * 3 event name / sport label (the tag); the caller truncates last.
 */
function gamePieces(p: GameParts, length: 'short' | 'full', drop = 0, compact = false): { name: string; designation: string[]; aside: string | null } {
  const withYear = drop >= 1 ? { ...p, year: null } : p;
  const matchup = drop >= 2 ? withYear.second : `${withYear.first} ${withYear.joiner} ${withYear.second}`;
  const tail: string[] = [];
  if (drop < 3) {
    if (withYear.eventName) tail.push(withYear.eventName);
    else if (withYear.neutralSite && !withYear.round) tail.push('Neutral site');
    if (withYear.sport) tail.push(withYear.sport);
  }
  const designation: string[] = [];
  const round = roundText(withYear, length, compact);
  if (round) designation.push(round);
  const d = withYear.designation;
  const word = d ? (length === 'full' ? d.full : compact ? d.chip : d.short) : null;
  if (word && !d?.aside) designation.push(word);
  return { name: [matchup, ...tail].join(' · '), designation, aside: d?.aside ? word : null };
}

/** "Nuggets at Clippers (Preseason)": the parts joined by " · ", the aside after them in parentheses. */
function joinGame(name: string, designation: string[], aside: string | null): string {
  const text = [name, ...designation].join(' · ');
  return aside ? `${text} (${aside})` : text;
}

function renderGame(p: GameParts, length: 'short' | 'full', drop = 0): string {
  const { name, designation, aside } = gamePieces(p, length, drop);
  return joinGame(name, designation, aside);
}

/**
 * The short budget for a game counts the name only (matchup, event name, sport label); the designation rides
 * outside it, since it is never cut first (build 5, item 13; advisor reading of the drop order with N04, recorded
 * in the handoff). When the whole name runs past 32, the designation takes its chip form ("Game 3" → "G3",
 * "Game 1" → "DH1"; Kylie, Oct 14): "Brewers at Dodgers · NLCS G3" keeps both teams.
 */
function shortGame(p: GameParts): string {
  let drop = 0;
  while (drop < 3 && gamePieces(p, 'short', drop).name.length > SHORT_MAX) drop += 1;
  const name = truncate(gamePieces(p, 'short', drop).name, SHORT_MAX);
  const { designation, aside } = gamePieces(p, 'short', drop);
  // The aside is set smaller and lighter, so it stays out of the 32-character count.
  if ([name, ...designation].join(' · ').length <= SHORT_MAX) return joinGame(name, designation, aside);
  return joinGame(name, gamePieces(p, 'short', drop, true).designation, aside);
}

function renderShow(p: ShowParts, length: 'short' | 'full', drop = 0): string {
  // Drop steps for a show: 1 tour, 2 city, 3 tags, 4 truncate.
  const parts = [p.name];
  if (p.tour && (length === 'full' || drop < 1)) parts.push(p.tour);
  if (p.city && (length === 'full' || drop < 2)) parts.push(p.city);
  if (length === 'full' || drop < 3) parts.push(...p.tags);
  if (length === 'full' && p.touring) parts.push('Touring production');
  return parts.join(' · ');
}

function renderNamed(p: NamedParts, length: Length): string {
  const name = length === 'full' && p.year ? `${p.name} ${p.year}` : p.name;
  return p.designation ? `${name} · ${p.designation}` : name;
}

function fitShort(render: (drop: number) => string, steps: number): string {
  for (let drop = 0; drop <= steps; drop += 1) {
    const text = render(drop);
    if (text.length <= SHORT_MAX) return text;
  }
  return truncate(render(steps), SHORT_MAX);
}

/**
 * Short name (32 characters, up to two lines): Explore and sheet rows, the date page lineup, Home, Stubs, Faves,
 * search and the chip card. Teams first, then the round: "Dodgers at Mets · NLCS, Game 3" (N04).
 */
export function listTitle(event: CrowdEvent): string {
  const p = partsOf(event);
  if (p.type === 'game') return shortGame(p);
  if (p.type === 'show') return fitShort((drop) => renderShow(p, 'short', drop), 3);
  return truncate(renderNamed(p, 'short'), SHORT_MAX);
}

/**
 * Full name (event page title, Stub sheet, share text): never cut. Playoff words spelled out ("Dodgers at Mets ·
 * NL Championship Series, Game 3", N03), the year on a final (N07), "Touring production" (N25).
 */
export function fullTitle(event: CrowdEvent): string {
  const p = partsOf(event);
  if (p.type === 'game') return renderGame(p, 'full');
  if (p.type === 'show') return renderShow(p, 'full');
  return renderNamed(p, 'full');
}

// ---------- Chips ----------

/** Concerts and festivals: the headliner only; a festival's chip is the festival. */
function headliner(event: CrowdEvent): string | null {
  if (event.kind !== 'show' && event.kind !== 'festival') return null;
  if (event.kind === 'festival') return showParts(event).name || null;
  const name = event.performer?.trim();
  return name ? displayName(name) : showParts(event).name || null;
}

function venueLabel(event: CrowdEvent): string | null {
  if (event.place.type !== 'venue') return null;
  const venue = VENUES[event.place.venueId];
  return venue ? venueNameOn(venue, event.date) : null;
}

/** Home club as people say it: Dodgers, Ducks, Galaxy. */
function spokenHome(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports') return null;
  if (event.kind === 'show' || event.kind === 'festival') return null;
  const id = event.teams?.home;
  // College short names carry the squad code ("Stony Brook FB"); the chip adds it back only on a clash (N16).
  if (id && TEAMS[id]) return TEAMS[id].shortName.replace(new RegExp(`\\s+(${SQUAD_TAG})$`), '');
  const p = gameParts(event);
  return p.type === 'game' ? p.second.replace(new RegExp(`\\s+\\((${SQUAD_TAG})\\)`, 'g'), '') : null;
}

function spokenAway(event: CrowdEvent): string | null {
  const id = event.teams?.away;
  return id && TEAMS[id] ? TEAMS[id].shortName.replace(new RegExp(`\\s+(${SQUAD_TAG})$`), '') : null;
}

/** The chip's designation: " · NLCS G3" before a playoff round (N03), "(Preseason)" in parentheses, a space before the rest ("Angels DH1"). */
function chipDesignation(p: Parts): string {
  if (p.type !== 'game') return '';
  if (p.round && !p.round.minor) return ` · ${p.game ? `${p.round.chip} G${p.game}` : p.round.chip}`;
  if (p.round?.minor) return ` ${p.round.chip}`;
  if (p.designation) return p.designation.aside ? ` (${p.designation.chip})` : ` ${p.designation.chip}`;
  return '';
}

/**
 * The chip in two pieces, for the fixed-width map chip: the name, which may shrink with an ellipsis, and the
 * designation, which never does (" · NLCS G3", " (Preseason)"). `mapTitle` is the two joined.
 */
export function chipParts(event: CrowdEvent, entry: readonly CrowdEvent[] = []): { name: string; designation: string } {
  const title = mapTitle(event, entry);
  const designation = spokenHome(event) ? chipDesignation(partsOf(event)) : '';
  return designation && title.endsWith(designation) ? { name: title.slice(0, -designation.length), designation } : { name: title, designation: '' };
}

/** Squad code and visitor only when two chips that night would otherwise match (N16: codes on a clash only). */
function sportsChip(event: CrowdEvent, squad: boolean, visitor: boolean): string | null {
  const home = spokenHome(event);
  if (!home) return null;
  let name = home;
  if (squad) {
    const tag = collegeAbbrev(event);
    if (tag) name = `${name} ${tag}`;
  }
  if (visitor) {
    const away = spokenAway(event);
    if (away) name = `${name} · ${away}`;
  }
  return `${truncate(name, CHIP_NAME)}${chipDesignation(partsOf(event))}`;
}

function sportsCollide(event: CrowdEvent, entry: readonly CrowdEvent[], squad: boolean, visitor: boolean): boolean {
  const mine = sportsChip(event, squad, visitor);
  if (!mine) return false;
  return entry.some((other) => other.id !== event.id && other.date === event.date && sportsChip(other, squad, visitor) === mine);
}

/** True when another chip that night would show the same headliner. */
function sharesHeadliner(event: CrowdEvent, name: string, entry: readonly CrowdEvent[]): CrowdEvent[] {
  const key = name.toLowerCase();
  return entry.filter((other) => other.id !== event.id && other.date === event.date && headliner(other)?.toLowerCase() === key);
}

/**
 * Chip name (map chip, timeline labels, "Biggest:", Up against): the home short name or the headliner, up to 16
 * characters, plus the designation, which is never cut. The squad code or the visitor only on a clash. The same
 * artist twice that night (N22): the venue when it fits, else the start time.
 */
export function mapTitle(event: CrowdEvent, entry: readonly CrowdEvent[] = []): string {
  const p = partsOf(event);
  if (p.type === 'named') return truncate(p.name, CHIP_NAME + 8);
  // A non-music show (theatre, a production, a convention) is its name: "Disney On Ice" (N26).
  if (p.type === 'show' && event.kind !== 'show' && event.kind !== 'festival') return truncate(p.name, CHIP_NAME);
  const name = headliner(event);
  if (name) {
    const twins = sharesHeadliner(event, name, entry);
    const short = truncate(name, CHIP_NAME);
    if (twins.length === 0) return short;
    const venue = venueLabel(event);
    const sameVenue = twins.some((other) => venueLabel(other) === venue);
    if (venue && !sameVenue && `${short} · ${venue}`.length <= CHIP_NAME + 8) return `${short} · ${venue}`;
    return event.start ? `${short} · ${clockTime(event.start)}` : short;
  }
  if (spokenHome(event)) {
    if (!sportsCollide(event, entry, false, false)) return sportsChip(event, false, false)!;
    if (!sportsCollide(event, entry, true, false)) return sportsChip(event, true, false)!;
    return sportsChip(event, true, true)!;
  }
  return truncate(listTitle(event), CHIP_NAME + 8);
}

// ---------- A team's own schedule ----------

/** A game on a team's own schedule, from that team's side (TeamGame). */
export interface SchedulePick {
  home: boolean;
  neutral?: boolean;
  opponent: string;
  venueName?: string;
  preseason?: boolean;
  stakes?: { round: string; game?: number };
}

function scheduleLabel(game: SchedulePick): string | null {
  if (!game.stakes) return null;
  const words = roundWords(game.stakes.round).short;
  return game.stakes.game ? `${words}, Game ${game.stakes.game}` : words;
}

/**
 * The team-relative form, only on a favorite team's own page (Kylie, Oct 11, 2026): "vs. Padres" at home,
 * "@ Brewers" away, "vs. 49ers · Melbourne" at a neutral site, the label first (the team page keeps its own form;
 * N29: "vs." with a period, "@" kept). Never on share cards, the feed, search or the log.
 */
export function teamRelativeTitle(game: SchedulePick): string {
  const side = game.neutral ? `vs. ${game.opponent}${game.venueName ? ` · ${game.venueName}` : ''}` : game.home ? `vs. ${game.opponent}` : `@ ${game.opponent}`;
  if (!game.stakes && game.preseason) return `${side} (Preseason)`;
  return game.stakes ? `${stakesChip(game.stakes)} · ${side}` : side;
}

function stakesChip(stakes: { round: string; game?: number }): string {
  const chip = roundWords(stakes.round).chip;
  return stakes.game ? `${chip} G${stakes.game}` : chip;
}

/** The same game in its canonical form for a list that is not the team's own page: "Dodgers at Brewers (Preseason)" (N04, N08; parentheses, Kylie, Oct 15). */
export function scheduleGameTitle(us: string, game: SchedulePick): string {
  const name = game.neutral ? (game.home ? `${game.opponent} vs. ${us}` : `${us} vs. ${game.opponent}`) : game.home ? `${game.opponent} at ${us}` : `${us} at ${game.opponent}`;
  const label = scheduleLabel(game);
  if (!label && game.preseason) return `${name} (Preseason)`;
  return label ? `${name} · ${label}` : name;
}
