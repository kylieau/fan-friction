import type { Stakes } from '../types';

/**
 * Turns a feed's round into the short label the screens show.
 * Regular season stays empty. ESPN type codes (RD16, QTR, SEMI, FINAL)
 * are never used as the words.
 */

export interface MlbScheduleGame {
  gameType?: string;
  description?: string;
  seriesDescription?: string;
  /** Game within the series. This is the one that belongs on the line. */
  seriesGameNumber?: number;
  /** Doubleheader index. Not a series game. */
  gameNumber?: number;
}

const MLB_BY_SERIES: Record<string, string> = {
  'NL Division Series': 'NLDS',
  'AL Division Series': 'ALDS',
  'NL Championship Series': 'NLCS',
  'AL Championship Series': 'ALCS',
  'NL Wild Card Series': 'NLWC',
  'AL Wild Card Series': 'ALWC',
  'World Series': 'WS',
};

/** MLB: feed abbreviation + seriesGameNumber. Regular season has none. */
export function mlbStakes(game: MlbScheduleGame): Stakes | undefined {
  if (!game.gameType || !['F', 'D', 'L', 'W'].includes(game.gameType)) return undefined;
  if (/regular season/i.test(game.seriesDescription ?? '')) return undefined;

  const desc = (game.description ?? '').trim();
  const series = game.seriesDescription ?? '';
  const lead = desc.match(/^(NLDS|ALDS|NLCS|ALCS|NLWC|ALWC|WS)\b/i);
  let round: string | undefined;
  if (lead) round = lead[1].toUpperCase();
  else if (/^NL Wild Card/i.test(desc) || /NL Wild Card/i.test(series)) round = 'NLWC';
  else if (/^AL Wild Card/i.test(desc) || /AL Wild Card/i.test(series)) round = 'ALWC';
  else if (/^World Series/i.test(desc) || series === 'World Series') round = 'WS';
  else round = MLB_BY_SERIES[series];
  if (!round) return undefined;

  const gameNo = game.seriesGameNumber;
  if (typeof gameNo === 'number' && gameNo > 0) return { round, game: gameNo };
  return { round };
}

export type FeedLeague = 'nba' | 'nhl' | 'nfl' | 'college';

export interface EspnScheduleGame {
  season?: { slug?: string };
  seasonType?: { name?: string; abbreviation?: string };
  competitions?: {
    notes?: { headline?: string }[];
    gameNumberOfSeries?: number;
    series?: { gameNumberOfSeries?: number } | { gameNumberOfSeries?: number }[];
  }[];
}

function headlineOf(game: EspnScheduleGame): string {
  const notes = game.competitions?.[0]?.notes ?? [];
  return notes.find((note) => note.headline)?.headline?.trim() ?? '';
}

function playoffSeason(game: EspnScheduleGame): boolean {
  const slug = (game.season?.slug ?? '').toLowerCase();
  if (slug === 'post-season') return true;
  if (slug === 'regular-season' || slug === 'preseason') return false;
  const abbr = (game.seasonType?.abbreviation ?? '').toLowerCase();
  const name = (game.seasonType?.name ?? '').toLowerCase();
  return abbr === 'post' || name.includes('post');
}

function gameInHeadline(headline: string): number | undefined {
  const match = headline.match(/\bGame\s+(\d+)\b/i);
  if (!match) return undefined;
  const n = Number(match[1]);
  return n > 0 ? n : undefined;
}

function gameNumberOfSeries(game: EspnScheduleGame): number | undefined {
  const comp = game.competitions?.[0];
  if (!comp) return undefined;
  if (typeof comp.gameNumberOfSeries === 'number' && comp.gameNumberOfSeries > 0) return comp.gameNumberOfSeries;
  const series = comp.series;
  const row = Array.isArray(series) ? series.find((item) => typeof item.gameNumberOfSeries === 'number') : series;
  const n = row?.gameNumberOfSeries;
  return typeof n === 'number' && n > 0 ? n : undefined;
}

function nflRound(headline: string): string | undefined {
  if (/super bowl/i.test(headline)) return 'Super Bowl';
  if (/wild card/i.test(headline)) return 'Wild Card';
  if (/divisional/i.test(headline)) return 'Divisional';
  if (/championship/i.test(headline)) return 'Championship';
  return undefined;
}

function nbaRound(headline: string): string | undefined {
  if (/east(?:ern)?(?:\s+conference)?\s+finals/i.test(headline)) return 'East Finals';
  if (/west(?:ern)?(?:\s+conference)?\s+finals/i.test(headline)) return 'West Finals';
  if (/semifinals?/i.test(headline)) return 'Semis';
  if (/\b1st round\b|\bfirst round\b/i.test(headline)) return '1st Round';
  if (/\bfinals\b/i.test(headline)) return 'Finals';
  return undefined;
}

/** Words, never R1 or SCF. */
function nhlRound(headline: string): string | undefined {
  if (/stanley cup|\bscf\b|cup final/i.test(headline)) return 'Cup Final';
  if (/\b(?:east|west|conference)\s+final\b/i.test(headline)) return 'Conf Final';
  if (/\b2nd round\b|\br2\b/i.test(headline)) return '2nd Round';
  if (/\b1st round\b|\br1\b/i.test(headline)) return '1st Round';
  return undefined;
}

/**
 * CFP, CFP Semi, Title Game, or a conference championship.
 * Title week often still has season.slug "regular-season", so the headline
 * is the label. A long bowl-sponsor line is not.
 */
function collegeRound(headline: string): string | undefined {
  if (!headline) return undefined;
  if (/semifinal/i.test(headline) && /playoff|\bcfp\b/i.test(headline)) return 'CFP Semi';
  if (/national championship/i.test(headline)) return 'Title Game';
  if (/college football playoff|\bcfp\b/i.test(headline)) return 'CFP';
  const stripped = headline.replace(/\s+presented by\b.*$/i, '').trim();
  if (!/^(.+?)\s+Championship$/i.test(stripped)) return undefined;
  if (/bowl|playoff|fcs|national/i.test(stripped)) return undefined;
  return stripped;
}

const BANNED = /^(RD16|QTR|SEMI|FINAL|R1|R2|SCF|CF|PLAYOFFS?)$/i;

export function espnStakes(game: EspnScheduleGame, league: FeedLeague): Stakes | undefined {
  const headline = headlineOf(game);
  let round: string | undefined;
  let gameNo: number | undefined;

  if (league === 'nfl') {
    if (!playoffSeason(game)) return undefined;
    round = nflRound(headline);
  } else if (league === 'nba') {
    round = nbaRound(headline);
    gameNo = gameInHeadline(headline);
  } else if (league === 'nhl') {
    round = nhlRound(headline);
    gameNo = gameNumberOfSeries(game) ?? gameInHeadline(headline);
  } else {
    round = collegeRound(headline);
  }

  if (!round || BANNED.test(round)) return undefined;
  return gameNo ? { round, game: gameNo } : { round };
}

/**
 * Any other league's playoff game (WNBA, MLS, NWSL): ESPN marks the season type
 * "post", and the headline names the round ("WNBA Semifinals - Game 3"). Without
 * this they read as regular-season games and took a regular-season crowd.
 */
export function otherPostseason(game: EspnScheduleGame): Stakes | undefined {
  if (!playoffSeason(game)) return undefined;
  const headline = headlineOf(game).replace(/\s+if necessary$/i, '');
  const m = headline.match(/^(?:WNBA|NWSL|MLS)?\s*(.*?)(?:\s*-\s*Game\s+(\d+))?$/i);
  const round = m?.[1]?.trim();
  const game_ = m?.[2] ? Number(m[2]) : undefined;
  const label = round && !BANNED.test(round) ? round : 'Postseason';
  return game_ ? { round: label, game: game_ } : { round: label };
}

export function leagueFromPath(path: string): FeedLeague | null {
  if (path.endsWith('/nba')) return 'nba';
  if (path.endsWith('/nhl')) return 'nhl';
  if (path.endsWith('/nfl')) return 'nfl';
  if (path.includes('college-football')) return 'college';
  return null;
}
