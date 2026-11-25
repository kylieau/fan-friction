// Announced crowds from a SIDEARM school's own box scores (build 7.3, B2; approved in principle Oct 27, 2026,
// docs/research/topics/ncaa-attendance-sources-answer-codex.md). A season's stats page
// (/sports/<sport>/stats/<season>) lists every game with its box score link and whether the school was at home; a
// box score page carries the visible Attendance line with the room, the neutral-site flag and the postseason flag.
// Both pages hold their facts in a Nuxt payload (a `__NUXT_DATA__` script of one flat array whose entries point at
// each other by index). Read as personal use under SIDEARM's terms (§2.3), at each site's crawl pace; the nightly
// only (scripts/attendance-sidearm.mjs), never the app. Nothing is guessed: a blank or zero crowd, a neutral site,
// and a room not on file are each skipped, and no game takes the team's usual room by default.

import type { Division } from '../types';
import { roomCandidates } from './sidearmSource';
import { venueByNameOrPlace, venueClosedOn } from './venueMatch';

/** The payload's flat array, or null when the page has none. */
export function nuxtPayload(html: string): unknown[] | null {
  const m = html.match(/<script[^>]*id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) return null;
  try {
    const data = JSON.parse(m[1]);
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

// Nuxt wraps reactive values as ["Reactive", i] and the like; the value is the entry they point at.
const WRAPPERS = new Set(['Reactive', 'ShallowReactive', 'Ref', 'ShallowRef', 'EmptyRef', 'EmptyShallowRef']);

/** One entry, a level deep: an index becomes the value it points at, a wrapper its inner value. */
function at(data: unknown[], v: unknown): unknown {
  let out = typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < data.length ? data[v] : v;
  for (let i = 0; i < 4 && Array.isArray(out) && typeof out[0] === 'string' && WRAPPERS.has(out[0]); i++) out = at(data, out[1]);
  return out;
}

/** An object entry with its fields read one level deep (strings, numbers, flags; nested objects stay indexes). */
function fields(data: unknown[], o: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o)) out[k] = at(data, v);
  return out;
}

const isObject = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x);

/** "11/03/25" or "11/03/2025" → "2025-11-03". */
export function boxDate(s: unknown): string | undefined {
  const m = typeof s === 'string' ? s.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/) : null;
  if (!m) return undefined;
  const year = m[3].length === 2 ? `20${m[3]}` : m[3];
  return `${year}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`;
}

export interface IndexGame {
  date: string;
  opponent: string;
  /** The site-relative box score path, as the page links it. */
  boxUrl: string;
  /** The box score's own number, the last part of its path. */
  boxId: string;
  home: boolean;
}

/**
 * The season's games from the school's own game-by-game table (`ourGameByGameStats`; the page also carries the
 * opponents' table and a comparison, where the same game reads from the other side). One row per box score.
 */
export function indexGames(html: string): IndexGame[] | null {
  const data = nuxtPayload(html);
  if (!data) return legacyIndexGames(html);
  const games = new Map<string, IndexGame>();
  // A payload with no game-by-game table (an error page, another layout) is not a season with no games.
  let table = false;
  for (const entry of data) {
    if (!isObject(entry) || !('ourGameByGameStats' in entry)) continue;
    const list = at(data, entry.ourGameByGameStats);
    if (!Array.isArray(list)) continue;
    table = true;
    for (const ref of list) {
      const row = at(data, ref);
      if (!isObject(row)) continue;
      const f = fields(data, row);
      const date = boxDate(f.date);
      const boxUrl = typeof f.boxscoreUrl === 'string' ? f.boxscoreUrl : '';
      const boxId = boxUrl.match(/\/boxscore\/(\d+)\/?$/)?.[1];
      if (!date || !boxId || f.isAFooterStat === true || typeof f.isAtHome !== 'boolean') continue;
      if (!games.has(boxId)) games.set(boxId, { date, opponent: typeof f.opponent === 'string' ? f.opponent.trim() : '', boxUrl, boxId, home: f.isAtHome });
    }
  }
  if (!table) return null;
  return [...games.values()].sort((a, b) => a.date.localeCompare(b.date) || a.boxId.localeCompare(b.boxId));
}

export interface BoxFacts {
  date?: string;
  /** The room as the box names it, most specific first: the stadium line (volleyball's "Galen Center"), then the
   * location line (basketball's "Galen Center, Los Angeles, CA"; volleyball's is the city alone). */
  places: string[];
  neutral: boolean;
  postseason: boolean;
  /** False when the page has no neutral-site flag to read (the older layout): neutral then means "not known". */
  flagsKnown?: boolean;
  /** The announced crowd; undefined when the line is blank or zero (a zero is never proof of an empty room). */
  attendance?: number;
}

/** The box score's game facts: the entry carrying the attendance line beside the room and the neutral flag. */
export function boxFacts(html: string): BoxFacts | null {
  const data = nuxtPayload(html);
  if (!data) return legacyBoxFacts(html);
  for (const entry of data) {
    if (!isObject(entry) || !('attendance' in entry) || !('location' in entry) || !('isNeutral' in entry)) continue;
    const f = fields(data, entry);
    const raw = typeof f.attendance === 'number' ? String(f.attendance) : typeof f.attendance === 'string' ? f.attendance : '';
    const n = /^\s*[\d,]+\s*$/.test(raw) ? Number(raw.replace(/[,\s]/g, '')) : NaN;
    const text = (v: unknown) => (typeof v === 'string' && v.trim() && v.trim() !== '0' ? [v.trim()] : []);
    return {
      date: boxDate(f.date),
      places: [...text(f.stadium), ...text(f.location)],
      neutral: f.isNeutral === true,
      postseason: f.isAPostseasonGame === true,
      ...(Number.isFinite(n) && n > 0 ? { attendance: n } : {}),
    };
  }
  return null;
}

// ---------- SIDEARM's older layout (plain markup, no payload; Northeastern, found Nov 25, 2026) ----------

const unescape = (s: string) => s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').trim();

/**
 * The older season page's games, from the team table ("Game By Game - Team Statistics"), where the opponent cell
 * starts with "vs" or "at" (the opponents' and comparison tables list the same games with the bare name). Null when
 * that table is not there, or when any box score it links could not be read as a game, so a layout change never
 * reads as a finished season (Codex, B2 gaps review).
 */
export function legacyIndexGames(html: string): IndexGame[] | null {
  const start = html.search(/Game By Game\s*-\s*Team Statistics/i);
  if (start < 0) return null;
  const rest = html.slice(start + 10);
  const next = rest.search(/Game By Game\s*-/i);
  const table = next >= 0 ? rest.slice(0, next) : rest;
  const linked = new Set([...table.matchAll(/boxscore\.aspx\?id=(\d+)/gi)].map((m) => m[1]));
  const row = /<td[^>]*>\s*(vs\.?|at)\s*<a[^>]*href=['"]([^'"]*boxscore\.aspx\?id=(\d+)[^'"]*)['"][^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/td>\s*<td[^>]*>\s*([^<]*?)\s*<\/td>/gi;
  const games = new Map<string, IndexGame>();
  for (const m of table.matchAll(row)) {
    const date = boxDate(m[5]);
    if (!date || games.has(m[3])) continue;
    games.set(m[3], { date, opponent: unescape(m[4].replace(/<[^>]+>/g, '')), boxUrl: unescape(m[2]).replace(/^(?!\/)/, '/'), boxId: m[3], home: /^vs/i.test(m[1]) });
  }
  if ([...linked].some((id) => !games.has(id))) return null;
  return [...games.values()].sort((a, b) => a.date.localeCompare(b.date) || a.boxId.localeCompare(b.boxId));
}

/**
 * The older box score's Game Details list (Date, Time, Attendance, Site). It carries no neutral or postseason
 * flag: both read false, and the room rule (a room the schedules show the program at home) keeps a neutral site
 * out.
 */
export function legacyBoxFacts(html: string): BoxFacts | null {
  const block = html.match(/class="game-details"[\s\S]*?<\/dl>/i)?.[0];
  if (!block) return null;
  const facts: Record<string, string> = {};
  for (const m of block.matchAll(/<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/gi)) facts[unescape(m[1].replace(/<[^>]+>/g, '')).toLowerCase()] = unescape(m[2].replace(/<[^>]+>/g, ''));
  const raw = facts.attendance ?? '';
  const n = /^\s*[\d,]+\s*$/.test(raw) ? Number(raw.replace(/[,\s]/g, '')) : NaN;
  return {
    date: boxDate(facts.date),
    places: facts.site ? [facts.site] : [],
    // Unknown in this layout, not false: the city-only rule never places such a box by city alone.
    neutral: false,
    flagsKnown: false,
    postseason: false,
    ...(Number.isFinite(n) && n > 0 ? { attendance: n } : {}),
  };
}

// States and provinces as box scores write them ("Massachusetts", "Mass.", "MA"), to one code, so "Springfield,
// Massachusetts" and "Springfield, Missouri" stay two cities (Codex, B2 gaps review).
const REGIONS: string[][] = [
  ['al', 'alabama', 'ala'], ['ak', 'alaska'], ['az', 'arizona', 'ariz'], ['ar', 'arkansas', 'ark'], ['ca', 'california', 'calif', 'cal'],
  ['co', 'colorado', 'colo'], ['ct', 'connecticut', 'conn'], ['de', 'delaware', 'del'], ['dc', 'district of columbia', 'd c'],
  ['fl', 'florida', 'fla'], ['ga', 'georgia'], ['hi', 'hawaii'], ['id', 'idaho'], ['il', 'illinois', 'ill'], ['in', 'indiana', 'ind'],
  ['ia', 'iowa'], ['ks', 'kansas', 'kan', 'kans'], ['ky', 'kentucky'], ['la', 'louisiana'], ['me', 'maine'], ['md', 'maryland'],
  ['ma', 'massachusetts', 'mass'], ['mi', 'michigan', 'mich'], ['mn', 'minnesota', 'minn'], ['ms', 'mississippi', 'miss'],
  ['mo', 'missouri'], ['mt', 'montana', 'mont'], ['ne', 'nebraska', 'neb', 'nebr'], ['nv', 'nevada', 'nev'], ['nh', 'new hampshire', 'n h'],
  ['nj', 'new jersey', 'n j'], ['nm', 'new mexico', 'n m', 'n mex'], ['ny', 'new york', 'n y'], ['nc', 'north carolina', 'n c'],
  ['nd', 'north dakota', 'n d', 'n dak'], ['oh', 'ohio'], ['ok', 'oklahoma', 'okla'], ['or', 'oregon', 'ore'], ['pa', 'pennsylvania', 'penn', 'pa'],
  ['ri', 'rhode island', 'r i'], ['sc', 'south carolina', 's c'], ['sd', 'south dakota', 's d', 's dak'], ['tn', 'tennessee', 'tenn'],
  ['tx', 'texas', 'tex'], ['ut', 'utah'], ['vt', 'vermont'], ['va', 'virginia'], ['wa', 'washington', 'wash'], ['wv', 'west virginia', 'w va'],
  ['wi', 'wisconsin', 'wis', 'wisc'], ['wy', 'wyoming', 'wyo'],
  ['ab', 'alberta', 'alta'], ['bc', 'british columbia', 'b c'], ['mb', 'manitoba', 'man'], ['nb', 'new brunswick', 'n b'], ['nl', 'newfoundland and labrador', 'newfoundland'],
  ['ns', 'nova scotia', 'n s'], ['on', 'ontario', 'ont'], ['pe', 'prince edward island', 'pei'], ['qc', 'quebec', 'que', 'pq'], ['sk', 'saskatchewan', 'sask'],
];
const REGION = new Map(REGIONS.flatMap((names) => names.map((n) => [n, names[0]] as const)));
const plain = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * The city a box names when it names nothing else: one place line of a city and, optionally, its state ("Lowell",
 * "Lowell, Mass.", "Lowell, Massachusetts"), as "lowell|ma" (or "lowell|" with no state). Undefined when the box
 * names anything more: a stadium line beside it, or a room, city, and state line ("Matthews Arena, Boston, MA"), or
 * a second part that is no state (Codex, B2 gaps review).
 */
export function placeKey(places: readonly string[]): string | undefined {
  if (places.length !== 1) return undefined;
  const parts = places[0].split(',').map((p) => p.trim()).filter(Boolean);
  if (parts.length < 1 || parts.length > 2) return undefined;
  const region = parts[1] ? REGION.get(plain(parts[1])) : '';
  if (region === undefined) return undefined;
  return `${plain(parts[0])}|${region}`;
}

/** Whether two city keys name one city: the same city and state, or the same city where one side wrote no state. */
export function sameCity(a: string, b: string): boolean {
  const [ca, ra] = a.split('|');
  const [cb, rb] = b.split('|');
  return ca === cb && (ra === rb || !ra || !rb);
}

/**
 * The room on file a box score names, in the team's city on the game's date: each line whole ("Galen Center"),
 * then its first part ("Galen Center, Los Angeles, CA"), then the school feed's own reader for the other orders
 * ("Mass., Conte Forum"). A city alone ("Los Angeles, CA") names no room.
 */
export function boxRoom(metroId: string, places: readonly string[], date: string): string | undefined {
  const names = places.flatMap((p) => [p, p.split(',')[0], ...roomCandidates(p)]);
  for (const name of names) {
    const v = name?.trim() ? venueByNameOrPlace(metroId, name.trim(), undefined, undefined, date) : undefined;
    if (v && !venueClosedOn(v, date)) return v.id;
  }
  return undefined;
}

/** The site's sport paths to try, in order, for a program ("Women's Ice Hockey" is womens-ice-hockey, else womens-hockey). */
export function sportPaths(sport: string, division: Division | undefined): string[] {
  const side = division === 'women' ? 'womens' : division === 'men' ? 'mens' : undefined;
  const sided = (base: string) => (side ? [`${side}-${base}`] : [`mens-${base}`, `womens-${base}`]);
  switch (sport) {
    case 'basketball': return sided('basketball');
    case 'hockey': return side ? [`${side}-ice-hockey`, `${side}-hockey`] : [];
    case 'volleyball': return division === 'men' ? ['mens-volleyball'] : ['womens-volleyball', 'volleyball'];
    case 'soccer': return side ? [`${side}-soccer`] : [];
    case 'water polo': return side ? [`${side}-water-polo`] : [];
    case 'lacrosse': return side ? [`${side}-lacrosse`] : [];
    case 'football': return ['football'];
    case 'baseball': return ['baseball'];
    case 'softball': return ['softball'];
    default: return [];
  }
}

/** Winter sports run across New Year and are named by both years ("2025-26"); the rest by one. */
export const isWinterSport = (sport: string) => sport === 'basketball' || sport === 'hockey';

export interface SeasonLabel {
  /** The path part: "2025-26" or "2025". */
  label: string;
  /** The number the attendance files use: a winter season's end year (2026 for 2025-26), else its year. */
  season: number;
}

/**
 * The seasons to read on a date: the three before the current one (the expected draws' window) and the current
 * one, whose games are read as they finish. A winter season counts as current from August; a fall or spring
 * sport's year is its calendar year.
 */
export function seasonsToRead(sport: string, today: string): SeasonLabel[] {
  const year = Number(today.slice(0, 4));
  const month = Number(today.slice(5, 7));
  if (isWinterSport(sport)) {
    const end = month >= 8 ? year + 1 : year;
    return [end - 3, end - 2, end - 1, end].map((e) => ({ label: `${e - 1}-${String(e % 100).padStart(2, '0')}`, season: e }));
  }
  return [year - 3, year - 2, year - 1, year].map((y) => ({ label: String(y), season: y }));
}

/**
 * A robots.txt's rules for this reader: the group naming it ("fan-friction") when there is one, else the group for
 * any crawler; its crawl delay and whether a path is open.
 */
export function robotsFor(text: string, agent = 'fan-friction'): { delaySeconds?: number; allows: (path: string) => boolean } {
  const groups: { agents: string[]; lines: [string, string][] }[] = [];
  let cur: { agents: string[]; lines: [string, string][] } | undefined;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    if (key === 'user-agent') {
      if (!cur || cur.lines.length) groups.push((cur = { agents: [], lines: [] }));
      cur.agents.push(m[2].trim().toLowerCase());
    } else if (cur) cur.lines.push([key, m[2].trim()]);
  }
  const named = groups.filter((g) => g.agents.some((a) => a !== '*' && agent.toLowerCase().includes(a)));
  const mine = (named.length ? named : groups.filter((g) => g.agents.includes('*'))).flatMap((g) => g.lines);
  const delay = mine.find(([k]) => k === 'crawl-delay')?.[1];
  const rules = mine.filter(([k, v]) => (k === 'allow' || k === 'disallow') && v).map(([k, v]) => ({ allow: k === 'allow', re: new RegExp(`^${v.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\\\$$/, '$')}`), len: v.length }));
  return {
    ...(delay && Number.isFinite(Number(delay)) ? { delaySeconds: Number(delay) } : {}),
    // The longest matching rule wins; Allow wins a tie (the usual reading).
    allows: (path) => {
      const hit = rules.filter((r) => r.re.test(path)).sort((a, b) => b.len - a.len || Number(b.allow) - Number(a.allow))[0];
      return !hit || hit.allow;
    },
  };
}
