// How an upcoming home game's crowd is estimated from past announced crowds
// (docs/expected-draw-sports-research-answer.md, Kylie's locks in
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
// The WNBA and women's college basketball use two seasons (optionsFor).

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
 * college basketball 28% low. The NWSL read high, so it keeps three.
 */
export const SHORT_WINDOW_LEAGUES = ['WNBA', "College women's basketball"];

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
