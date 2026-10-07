// How an upcoming home game's crowd is estimated from past announced crowds
// (docs/archive/research/expected-draw-sports-research-answer.md, Kylie's locks in
// docs/expected-draw-decisions-oct7.md). One copy of the rule, used three ways:
// scripts/attendance-calibrate.mjs builds the rows the app ships with,
// src/data/expectedDraw.ts picks a row for an event, and
// scripts/expected-draw-check.mjs hides a season and predicts it from the ones before.
//
// The rule: the typical (median) announced crowd for this team in this building,
// for this kind of date, over the last three normal seasons. Kinds of date: the
// home opener, preseason, then weeknight / Friday / Saturday / Sunday, each by
// month when there are enough games. A holiday counts as a Saturday. The middle
// half of those games is the range. Nothing is invented: a bucket needs 3 games.
// The WNBA, NWSL, MLS and women's college basketball use two seasons (optionsFor).

export type DayClass = 'weekday' | 'friday' | 'saturday' | 'sunday';
export type DrawClass = DayClass | 'opener' | 'preseason';

/** One past home game, as saved under data/attendance/<metro>/<team>.json. */
export interface PastGame {
  teamId: string;
  season: number;
  date: string;
  start?: string | null;
  opponent?: string;
  venueId: string;
  attendance: number;
  postseason?: boolean;
  preseason?: boolean;
  /** The feed's round name for a playoff game ("NLDS", "West 1st Round - Game 2", "WC - Semifinals"). */
  round?: string;
  /** Game number in the series, when the feed says. */
  game?: number;
}

// ---------- Postseason (docs/postseason-estimate-proposal.md, Kylie's locks Oct 7, 2026) ----------
// A playoff crowd is learned as occupancy (announced ÷ the building's capacity for that sport),
// in four round bands, from the team's own home playoff games, else the league's pool. Every
// constant below was written before the check ran (docs/postseason-check.md) and is not re-tuned.

export type RoundBand = 'first' | 'second' | 'conference' | 'final';
export const POSTSEASON_WINDOW = 3;
/** Team games in the band needed to stand alone; below this, blended with the league pool by n ÷ TEAM_FULL. */
export const POST_TEAM_FULL = 8;
export const POST_TEAM_MIN = 3;
/** The league-band pool must be this big, this wide and this old to be used at all. */
export const POST_POOL_MIN = { games: 20, teams: 4, seasons: 2 };
/** The range: 10th–90th percentile with this many games, else min–max; then widened by this share of capacity. */
export const POST_PERCENTILE_MIN = 20;
/**
 * Leagues whose league pool spans every round (Kylie, Oct 7, 2026, for the WNBA and MLS): the playoff
 * sample is too small per band, so the pool is "any round", labeled as such. A team's own rows stay by
 * band. The check (docs/postseason-check.md) passed for MLS (4.4% vs 7.7% by the building) and failed for
 * the WNBA (25.1% vs 0.4% on six games, all sellouts), so the WNBA is held back pending Kylie's word.
 */
export const ANY_ROUND_POOL = new Set(['MLS']);
export const POST_ALLOWANCE = 0.05;

/**
 * The band a round name falls in. The same word means different rounds in different leagues
 * (WNBA "Semifinals" is the round before the Finals; NBA "Semis" and MLS "WC - Semifinals" are
 * the second round), so the league decides.
 */
export function roundBand(round: string | undefined, league: string | undefined): RoundBand | undefined {
  if (!round) return undefined;
  // College postseasons (NCAA tournaments, NIT, WBIT, bowls) are mostly neutral-site and are not sized here.
  if (/^College/.test(league ?? '')) return undefined;
  const r = round.toLowerCase();
  if (/super bowl|world series|mls cup|cup final|stanley cup|nwsl championship|playoffs - championship|wnba finals|^finals?\b|\bfinals - game/.test(r)) return 'final';
  if (/wild card|wildcard|1st round|first round|round one|round 1|play-in|nlwc|alwc/.test(r)) return 'first';
  if (/conference playoffs - final|conference final|conf final|east(ern)? final|west(ern)? final|championship series|nlcs|alcs|^wc - final|championship/.test(r)) return 'conference';
  if (/semi/.test(r)) return league === 'WNBA' || league === 'NWSL' ? 'conference' : 'second';
  if (/2nd round|second round|division|nlds|alds|quarter/.test(r)) return 'second';
  return undefined;
}

export interface PostseasonRow {
  metroId: string;
  teamId: string;
  venueId: string;
  band: RoundBand;
  /** Median occupancy of the comparables, and the range before the allowance. */
  occupancy: number;
  low: number;
  high: number;
  games: number;
  seasons: string;
  /** 'team' when the team's own games stand alone, 'blend' when mixed with the league pool, 'league' when the pool alone. */
  basis: 'team' | 'blend' | 'league';
}


function quantileAt(sorted: number[], q: number): number {
  if (sorted.length === 0) return NaN;
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

export interface PostseasonTeam {
  metroId: string;
  teamId: string;
  league: string;
  games: PastGame[];
  /** The building's capacity for this team's sport on a date; undefined when unknown. */
  capacityOn: (venueId: string, date: string) => number | undefined;
}

/**
 * One row per team, building and band, from the last POSTSEASON_WINDOW completed postseasons
 * plus the current one (`throughSeason` limits what counts as known, for the check).
 */
export function buildPostseasonRows(teams: PostseasonTeam[], throughSeason = Infinity): PostseasonRow[] {
  type Occ = { teamId: string; venueId: string; season: number; occ: number };
  const byLeagueBand = new Map<string, Occ[]>();
  const byTeam = new Map<string, { team: PostseasonTeam; occs: Occ[] }>();
  for (const team of teams) {
    const post = team.games.filter((g) => g.postseason && g.attendance > 0 && g.season <= throughSeason);
    const seasons = [...new Set(post.map((g) => g.season))].sort((a, b) => b - a).slice(0, POSTSEASON_WINDOW + 1);
    const occs: Occ[] = [];
    for (const g of post) {
      if (!seasons.includes(g.season)) continue;
      const band = roundBand(g.round, team.league);
      const cap = team.capacityOn(g.venueId, g.date);
      if (!band || !cap) continue;
      const occ = { teamId: team.teamId, venueId: g.venueId, season: g.season, occ: g.attendance / cap };
      occs.push({ ...occ, venueId: `${band}|${g.venueId}` });
      const key = `${team.league}|${ANY_ROUND_POOL.has(team.league) ? 'any' : band}`;
      if (!byLeagueBand.has(key)) byLeagueBand.set(key, []);
      byLeagueBand.get(key)!.push(occ);
    }
    byTeam.set(team.teamId, { team, occs });
  }
  const rangeOf = (xs: number[]) => {
    const s = [...xs].sort((a, b) => a - b);
    return s.length >= POST_PERCENTILE_MIN ? [quantileAt(s, 0.1), quantileAt(s, 0.9)] : [s[0], s[s.length - 1]];
  };
  const med = (xs: number[]) => quantileAt([...xs].sort((a, b) => a - b), 0.5);
  const rows: PostseasonRow[] = [];
  for (const { team, occs } of byTeam.values()) {
    const bands = new Set(occs.map((o) => o.venueId));
    // A band the team has never played still gets a league row for its home building, so an
    // upcoming game there can be sized from the pool.
    const home = [...new Set(team.games.filter((g) => !g.preseason).map((g) => g.venueId))];
    for (const band of ['first', 'second', 'conference', 'final'] as RoundBand[]) {
      for (const venueId of home) {
        const mine = occs.filter((o) => o.venueId === `${band}|${venueId}`);
        const mineSeasons = new Set(mine.map((o) => o.season));
        const anyRound = ANY_ROUND_POOL.has(team.league);
        const pool = byLeagueBand.get(`${team.league}|${anyRound ? 'any' : band}`) ?? [];
        const poolOk = pool.length >= POST_POOL_MIN.games && new Set(pool.map((o) => o.teamId)).size >= POST_POOL_MIN.teams && new Set(pool.map((o) => o.season)).size >= POST_POOL_MIN.seasons;
        let occupancy: number, low: number, high: number, basis: PostseasonRow['basis'], games: number, seasonsText: string;
        if (mine.length >= POST_TEAM_FULL && mineSeasons.size >= 2) {
          occupancy = med(mine.map((o) => o.occ)); [low, high] = rangeOf(mine.map((o) => o.occ)); basis = 'team'; games = mine.length;
          seasonsText = [...mineSeasons].sort().join(', ');
        } else if (mine.length >= POST_TEAM_MIN && poolOk) {
          const w = mine.length / POST_TEAM_FULL;
          occupancy = w * med(mine.map((o) => o.occ)) + (1 - w) * med(pool.map((o) => o.occ));
          [low, high] = rangeOf([...mine, ...pool].map((o) => o.occ)); basis = 'blend'; games = mine.length + pool.length;
          seasonsText = `${[...mineSeasons].sort().join(', ')} + league${anyRound ? ', any round' : ''}`;
        } else if (poolOk) {
          occupancy = med(pool.map((o) => o.occ)); [low, high] = rangeOf(pool.map((o) => o.occ)); basis = 'league'; games = pool.length;
          seasonsText = `league${anyRound ? ', any round' : ''}, ${[...new Set(pool.map((o) => o.season))].sort().join(', ')}`;
        } else continue;
        void bands;
        rows.push({ metroId: team.metroId, teamId: team.teamId, venueId, band, occupancy, low, high, games, seasons: seasonsText, basis });
      }
    }
  }
  return rows;
}

/** People from a row and the building: the median, and a planning range widened by the allowance, all capped. */
export function postseasonPeople(row: PostseasonRow, capacity: number): { count: number; low: number; high: number } {
  const cap = (x: number) => Math.max(0, Math.min(capacity, Math.round(x)));
  return {
    count: cap(capacity * row.occupancy),
    low: cap(capacity * (row.low - POST_ALLOWANCE)),
    high: cap(capacity * (row.high + POST_ALLOWANCE)),
  };
}

export interface ExpectedDrawRow {
  metroId: string;
  teamId: string;
  venueId: string;
  /** 'all' is the team's typical regular-season crowd in that building. */
  dayClass: DrawClass | 'all';
  /** 1–12, or null for the class-wide figure. */
  month: number | null;
  count: number;
  /** The middle half of the games behind the figure. */
  low: number;
  high: number;
  games: number;
  /** First and last season used, e.g. "2024–2026". */
  seasons: string;
}

export const MIN_GAMES = 3;
export const WINDOW_SEASONS = 3;

/** Capacity-limited and earlier seasons are not normal; nothing before this is used. */
const FIRST_NORMAL_SEASON = 2022;

/**
 * Conference moves reset a college program's history (the research's rule). The
 * Big Ten took UCLA, USC and Washington in 2024; a basketball season is named for
 * the year it ends, so their first Big Ten basketball season is 2025.
 */
const FIRST_SEASON_BY_TEAM: Record<string, number> = {
  'ucla-football': 2024,
  'usc-football': 2024,
  'uw-football': 2024,
  'ucla-mbb': 2025,
  'ucla-wbb': 2025,
  'usc-mbb': 2025,
  'usc-wbb': 2025,
  'uw-mbb': 2025,
  'uw-wbb': 2025,
};

export function dayClassOf(date: string): DayClass {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay();
  if (day === 5) return 'friday';
  if (day === 6) return 'saturday';
  if (day === 0) return 'sunday';
  return 'weekday';
}

function nthWeekday(year: number, month: number, weekday: number, n: number): string {
  const first = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const day = 1 + ((weekday - first + 7) % 7) + (n - 1) * 7;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function lastWeekday(year: number, month: number, weekday: number): string {
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const last = new Date(Date.UTC(year, month - 1, lastDay)).getUTCDay();
  const day = lastDay - ((last - weekday + 7) % 7);
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/** US public holidays on which people are off work. Montreal will need its own. */
export function isHoliday(date: string): boolean {
  const year = Number(date.slice(0, 4));
  const md = date.slice(5);
  if (md === '01-01' || md === '06-19' || md === '07-04' || md === '12-24' || md === '12-25' || md === '12-31') return true;
  return [
    nthWeekday(year, 1, 1, 3), // Martin Luther King Jr. Day
    nthWeekday(year, 2, 1, 3), // Presidents' Day
    lastWeekday(year, 5, 1), // Memorial Day
    nthWeekday(year, 9, 1, 1), // Labor Day
    nthWeekday(year, 11, 4, 4), // Thanksgiving
  ].includes(date);
}

/** The kind of date a game is, for the baseline. */
export function drawClassOf(game: { date: string; opener?: boolean; preseason?: boolean }): DrawClass {
  if (game.preseason) return 'preseason';
  if (game.opener) return 'opener';
  if (isHoliday(game.date)) return 'saturday';
  return dayClassOf(game.date);
}

function quantile(sorted: number[], q: number): number {
  const at = (sorted.length - 1) * q;
  const lo = Math.floor(at);
  const hi = Math.ceil(at);
  return Math.round(sorted[lo] + (sorted[hi] - sorted[lo]) * (at - lo));
}

function summarize(games: PastGame[]): Pick<ExpectedDrawRow, 'count' | 'low' | 'high' | 'games' | 'seasons'> {
  const sorted = games.map((g) => g.attendance).sort((a, b) => a - b);
  const seasons = [...new Set(games.map((g) => g.season))].sort();
  return {
    count: quantile(sorted, 0.5),
    low: quantile(sorted, 0.25),
    high: quantile(sorted, 0.75),
    games: games.length,
    seasons: seasons.length > 1 ? `${seasons[0]}–${seasons[seasons.length - 1]}` : String(seasons[0]),
  };
}

/**
 * Leagues on a 2-season window. Kylie, Oct 7 (S3): three seasons everywhere, shorter
 * for women's leagues only if the check showed them reading low. The first check
 * (docs/expected-draw-check.md) did: the WNBA read 30% low on three seasons, women's
 * college basketball 28% low. The NWSL and MLS also scored better on two seasons;
 * Kylie moved them to two as well (Oct 7).
 */
export const SHORT_WINDOW_LEAGUES = ['WNBA', "College women's basketball", 'NWSL', 'MLS'];

/**
 * The options the app uses for a team in this league. The conference-move reset is
 * off: in the check it left a program's first new-conference season with no history
 * and made college estimates worse, not better.
 */
export function optionsFor(league: string | undefined): BuildOptions {
  return SHORT_WINDOW_LEAGUES.includes(league ?? '') ? { windowSeasons: 2 } : {};
}

export interface BuildOptions {
  /** Drop a college program's seasons before its conference move. */
  resetOnRealignment?: boolean;
  /** Seasons in the window (default WINDOW_SEASONS). */
  windowSeasons?: number;
}

/** Past games that count for a baseline: no playoffs, no abnormal seasons, optionally nothing before a conference move. */
export function normalGames(teamId: string, games: PastGame[], opts: BuildOptions = {}): PastGame[] {
  const first = Math.max(FIRST_NORMAL_SEASON, opts.resetOnRealignment ? FIRST_SEASON_BY_TEAM[teamId] ?? 0 : 0);
  return games.filter((g) => !g.postseason && g.season >= first && g.attendance > 0);
}

/** Each season's first regular-season home game, by date (any building). */
export function openerDates(games: PastGame[]): Set<string> {
  const first = new Map<number, string>();
  for (const g of games) {
    if (g.preseason || g.postseason) continue;
    const at = first.get(g.season);
    if (!at || g.date < at) first.set(g.season, g.date);
  }
  return new Set(first.values());
}

/**
 * The rows for one team, from the games it has on file. The caller passes only
 * games from before the date being predicted; the last three seasons among them are used.
 */
export function buildDrawRows(metroId: string, teamId: string, allGames: PastGame[], opts: BuildOptions = {}): ExpectedDrawRow[] {
  const usable = normalGames(teamId, allGames, opts);
  const seasons = [...new Set(usable.map((g) => g.season))].sort((a, b) => b - a).slice(0, opts.windowSeasons ?? WINDOW_SEASONS);
  const inWindow = usable.filter((g) => seasons.includes(g.season));
  const openers = openerDates(inWindow);
  const rows: ExpectedDrawRow[] = [];
  const venues = [...new Set(inWindow.map((g) => g.venueId))].sort();
  for (const venueId of venues) {
    const here = inWindow.filter((g) => g.venueId === venueId);
    const classed = here.map((g) => ({ g, cls: drawClassOf({ date: g.date, preseason: g.preseason, opener: openers.has(g.date) }) }));
    const regular = classed.filter((x) => x.cls !== 'preseason' && x.cls !== 'opener').map((x) => x.g);
    if (regular.length >= MIN_GAMES) rows.push({ metroId, teamId, venueId, dayClass: 'all', month: null, ...summarize(regular) });
    for (const cls of ['opener', 'preseason', 'weekday', 'friday', 'saturday', 'sunday'] as const) {
      const inClass = classed.filter((x) => x.cls === cls).map((x) => x.g);
      if (inClass.length < MIN_GAMES) continue;
      rows.push({ metroId, teamId, venueId, dayClass: cls, month: null, ...summarize(inClass) });
      if (cls === 'opener' || cls === 'preseason') continue;
      for (let month = 1; month <= 12; month++) {
        const inMonth = inClass.filter((g) => Number(g.date.slice(5, 7)) === month);
        if (inMonth.length >= MIN_GAMES) rows.push({ metroId, teamId, venueId, dayClass: cls, month, ...summarize(inMonth) });
      }
    }
  }
  return rows;
}

export interface DrawQuery {
  teamId: string;
  venueId: string;
  date: string;
  opener?: boolean;
  preseason?: boolean;
}

/**
 * The most specific row for a game: its class and month, then its class, then the
 * team's typical crowd in that building. A preseason game with no preseason row
 * gets nothing (a regular-season crowd would overstate it).
 */
export function pickDraw(rows: readonly ExpectedDrawRow[], q: DrawQuery): ExpectedDrawRow | undefined {
  const here = rows.filter((r) => r.teamId === q.teamId && r.venueId === q.venueId);
  const cls = drawClassOf(q);
  if (cls === 'preseason') return here.find((r) => r.dayClass === 'preseason');
  if (cls === 'opener') {
    const opener = here.find((r) => r.dayClass === 'opener');
    if (opener) return opener;
  }
  const dc = cls === 'opener' ? (isHoliday(q.date) ? 'saturday' : dayClassOf(q.date)) : cls;
  const month = Number(q.date.slice(5, 7));
  return (
    here.find((r) => r.dayClass === dc && r.month === month) ??
    here.find((r) => r.dayClass === dc && r.month === null) ??
    here.find((r) => r.dayClass === 'all')
  );
}

/** Nearest 1,000; nearest 500 under 10,000 (the research's rounding). */
export function roundEstimate(n: number): number {
  const step = n < 10_000 ? 500 : 1000;
  return Math.round(n / step) * step;
}

// ---- This season's level and the opponent ratio (Oct 7, 2026) ----
// Both were set before the first held-out check. Kylie, Oct 7: apply them in every
// league. The check found no league-wide gain in some (NBA, NHL, NWSL), but an
// effect can be real for one team or one visitor without moving a league's median,
// and the shrinkage keeps a thin history close to no effect.

/**
 * Home games this season before its level applies: roughly a fifth to a third of the
 * home slate. The NFL and college figures were added Oct 7 when the level went to every
 * league (3 of ~8 NFL home games, 3 of ~6 college football, 5 of ~17 college basketball).
 */
export const SEASON_MIN: Record<string, number> = {
  MLB: 15,
  NBA: 10,
  NHL: 10,
  WNBA: 6,
  MLS: 6,
  NWSL: 5,
  NFL: 3,
  'College football': 3,
  "College men's basketball": 5,
  "College women's basketball": 5,
};
/** Leagues where the season level beat the baseline in the first check (kept for the record; the app no longer gates on it). */
export const SEASON_LEVEL_LEAGUES = ['MLB', 'MLS', 'NWSL', 'WNBA', 'NBA', 'NHL'];
/** Leagues where the opponent ratio beat the season level in the first check (kept for the record; the app no longer gates on it). */
export const OPPONENT_LEAGUES = ['MLB', 'MLS', 'NFL', 'WNBA', "College men's basketball"];
/** Opponent: past home meetings needed, in at least this many separate series (meetings within 4 days are one). */
export const OPP_MIN_GAMES = 2;
export const OPP_MIN_SERIES = 2;
/** Shrink toward no effect: n ÷ (n + k). */
export const OPP_SHRINK_K = 3;
/** Weight of a meeting by how many seasons back it was (0 = this season). */
export const OPP_SEASON_WEIGHT = [1, 1, 0.5, 0.25];

function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/** The same name the listings use for a visiting side ("D-backs" → "d-backs"). */
export function opponentKey(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function seriesCount(dates: string[]): number {
  let n = 0;
  let last: number | null = null;
  for (const d of [...dates].sort()) {
    const t = new Date(`${d}T12:00:00Z`).getTime();
    if (last == null || (t - last) / 86_400_000 > 4) n++;
    last = t;
  }
  return n;
}

/**
 * This season's level: the median of announced ÷ baseline over its regular-season
 * home games so far, once there are enough. Undefined before that.
 */
export function seasonLevel(rows: readonly ExpectedDrawRow[], teamId: string, league: string | undefined, soFar: PastGame[], openers = openerDates(soFar), onlyWhereItWins = false): { level: number; games: number } | undefined {
  const min = SEASON_MIN[league ?? ''] ?? 5;
  if (onlyWhereItWins && !SEASON_LEVEL_LEAGUES.includes(league ?? '')) return undefined;
  const ratios = soFar
    .filter((g) => !g.preseason && !g.postseason)
    .map((g) => ({ g, b: pickDraw(rows, { teamId, venueId: g.venueId, date: g.date, opener: openers.has(g.date) })?.count }))
    .filter((x): x is { g: PastGame; b: number } => x.b != null)
    .map((x) => x.g.attendance / x.b);
  return ratios.length >= min ? { level: median(ratios), games: ratios.length } : undefined;
}

/**
 * How this opponent has drawn here against the usual crowd for those dates: past
 * meetings in the window plus this season so far, newest weighted most, shrunk
 * toward no effect. Undefined when there are too few meetings.
 */
export function opponentRatio(rows: readonly ExpectedDrawRow[], teamId: string, league: string | undefined, opponent: string, meetings: PastGame[], season: number, onlyWhereItWins = false): { ratio: number; games: number } | undefined {
  if (onlyWhereItWins && !OPPONENT_LEAGUES.includes(league ?? '')) return undefined;
  const key = opponentKey(opponent);
  const scored = meetings
    .filter((p) => !p.preseason && !p.postseason && p.opponent && opponentKey(p.opponent) === key)
    .map((p) => ({ p, b: pickDraw(rows, { teamId, venueId: p.venueId, date: p.date })?.count }))
    .filter((x): x is { p: PastGame; b: number } => x.b != null);
  if (scored.length < OPP_MIN_GAMES || seriesCount(scored.map((x) => x.p.date)) < OPP_MIN_SERIES) return undefined;
  let wsum = 0;
  let lsum = 0;
  for (const { p, b } of scored) {
    const w = OPP_SEASON_WEIGHT[season - p.season] ?? 0;
    wsum += w;
    lsum += w * Math.log(p.attendance / b);
  }
  if (wsum === 0) return undefined;
  return { ratio: Math.exp((scored.length / (scored.length + OPP_SHRINK_K)) * (lsum / wsum)), games: scored.length };
}

/** A team's level this season so far (announced ÷ baseline), written nightly by the calibration. */
export interface SeasonLevelRow {
  metroId: string;
  teamId: string;
  season: number;
  level: number;
  games: number;
}

/** How an opponent draws at this team's games against the usual crowd, written nightly by the calibration. */
export interface OpponentRatioRow {
  metroId: string;
  teamId: string;
  /** opponentKey of the visiting side's name, as the listings write it. */
  opponent: string;
  ratio: number;
  games: number;
}

// ---- Shows (Oct 7, 2026; Kylie approved the default) ----
/**
 * A show with no better figure is sized at this share of the room: the median fill
 * of the covered arenas that publish attendance and show counts (MSG, Kia Forum,
 * Barclays, Prudential, Intuit Dome, YouTube Theater, Hollywood Bowl), from
 * docs/archive/research/concert-venue-figures-answer.md against the capacities in venues.ts.
 */
export const CONCERT_FILL = 0.57;

/**
 * Rung 4 of the show ladder (docs/archive/research/expected-draw-concerts-research-answer.md): a room's
 * own published average per reported show, Billboard's chart year Oct 1, 2024 – Sep 30,
 * 2025, from docs/archive/research/concert-venue-figures-answer.md. Reported figures; they count every
 * ticketed non-team event Billboard received, so comedy and family shows are in the mix.
 * Rooms whose figure was only an upper bound (YouTube Theater, Hollywood Bowl) take the default.
 */
export const VENUE_SHOW_AVERAGE: Record<string, { perShow: number; shows: number; basis: string }> = {
  'madison-square-garden': { perShow: 14173, shows: 127, basis: 'Billboard, 1.8M over 127 shows, Oct 2024 – Sep 2025' },
  'kia-forum': { perShow: 10891, shows: 101, basis: 'Billboard, 1.1M over 101 shows, Oct 2024 – Sep 2025' },
  'barclays-center': { perShow: 10571, shows: 91, basis: 'Billboard, 962K over 91 shows, Oct 2024 – Sep 2025' },
  'prudential-center': { perShow: 9083, shows: 108, basis: 'Billboard, 981K over 108 shows, Oct 2024 – Sep 2025' },
  'intuit-dome': { perShow: 10308, shows: 39, basis: 'Billboard, 402K over 39 shows, Oct 2024 – Sep 2025' },
};
