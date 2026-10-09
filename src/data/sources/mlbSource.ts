// Live MLB schedule (free, no account) for the teams based in a metro.
// It only serves today and later: past dates come from the hand-seeded nights,
// so nothing shows twice. If the feed is down it quietly returns nothing.

import { METROS } from '../../config/metros';
import type { CrowdEvent, GameResult, LocalDate, LocalTime, TeamGame } from '../types';
import { mlbStakes } from './roundLabel';
import type { EventSource } from './types';

const API = 'https://statsapi.mlb.com/api/v1/schedule';
const DAYS_AHEAD = 120;

/** MLB's own ids, mapped to our records. Add a metro's teams and ballparks here. */
const MLB_TEAMS: Record<number, { metroId: string; teamId: string; /** MLB's sport id: 1 the majors, 11–14 the affiliated minors, 23 the partner leagues. */ sportId?: number; /** The club's home building when the feed's venue is not on file (the partner leagues list "TBD"). */ venueId?: string }> = {
  119: { metroId: 'la', teamId: 'dodgers' },
  108: { metroId: 'la', teamId: 'angels' },
  135: { metroId: 'san-diego', teamId: 'padres' },
  136: { metroId: 'seattle', teamId: 'mariners' },
  147: { metroId: 'new-york', teamId: 'yankees' },
  121: { metroId: 'new-york', teamId: 'mets' },
  144: { metroId: 'atlanta', teamId: 'braves' },
  137: { metroId: 'bay-area', teamId: 'giants' },
  112: { metroId: 'chicago', teamId: 'cubs' },
  145: { metroId: 'chicago', teamId: 'white-sox' },
  140: { metroId: 'dallas-fort-worth', teamId: 'rangers' },
  // Minor-league and independent clubs, the same feed (Kylie's OK, Oct 8, 2026; docs/no-feed-teams-proposal.md).
  540: { metroId: 'dallas-fort-worth', teamId: 'frisco-roughriders', sportId: 12, venueId: 'riders-field' },
  529: { metroId: 'seattle', teamId: 'tacoma-rainiers', sportId: 11, venueId: 'cheney-stadium' },
  403: { metroId: 'seattle', teamId: 'everett-aquasox', sportId: 13, venueId: 'everett-memorial-stadium' },
  453: { metroId: 'new-york', teamId: 'brooklyn-cyclones', sportId: 13, venueId: 'maimonides-park' },
  586: { metroId: 'new-york', teamId: 'staten-island-ferryhawks', sportId: 23, venueId: 'siuh-community-park' },
  1896: { metroId: 'new-york', teamId: 'long-island-ducks', sportId: 23, venueId: 'fairfield-properties-ballpark' },
  431: { metroId: 'atlanta', teamId: 'gwinnett-stripers', sportId: 11, venueId: 'gwinnett-field' },
  1882: { metroId: 'chicago', teamId: 'chicago-dogs', sportId: 23, venueId: 'impact-field' },
  1950: { metroId: 'chicago', teamId: 'schaumburg-boomers', sportId: 23, venueId: 'wintrust-field' },
};
const MLB_VENUES: Record<number, string> = { 22: 'dodger-stadium', 1: 'angel-stadium', 2680: 'petco-park', 680: 't-mobile-park', 3313: 'yankee-stadium', 3289: 'citi-field', 4705: 'truist-park', 2395: 'oracle-park', 17: 'wrigley-field', 4: 'rate-field', 5325: 'globe-life-field', 2755: 'riders-field', 2745: 'cheney-stadium', 2762: 'everett-memorial-stadium', 2795: 'maimonides-park', 2836: 'siuh-community-park', 5419: 'fairfield-properties-ballpark', 3810: 'gwinnett-field' };

/** The feed's team ids for a metro, grouped by sport id (one schedule call per sport). */
function teamIdsBySport(metroId: string): Map<number, string[]> {
  const out = new Map<number, string[]>();
  for (const [id, t] of Object.entries(MLB_TEAMS)) {
    if (t.metroId !== metroId) continue;
    const sport = t.sportId ?? 1;
    out.set(sport, [...(out.get(sport) ?? []), id]);
  }
  return out;
}

/** Cities this feed can list games for. */
export function mlbMetroIds(): string[] {
  return [...new Set(Object.values(MLB_TEAMS).map((team) => team.metroId))];
}

interface MlbGame {
  gamePk: number;
  gameDate: string;
  gameType?: string;
  description?: string;
  seriesDescription?: string;
  seriesGameNumber?: number;
  /** "Y" on a playoff game that may not be played. */
  ifNecessary?: string;
  /** Doubleheader index. Not the series game. */
  gameNumber?: number;
  status: { detailedState: string; startTimeTBD?: boolean; abstractGameState?: string };
  linescore?: { currentInning?: number; scheduledInnings?: number };
  venue?: { id: number; name?: string };
  teams: { home: MlbSide; away: MlbSide };
  broadcasts?: { name?: string; type?: string; homeAway?: string; isNational?: boolean }[];
}
interface MlbSide {
  team: { id?: number; name: string; teamName?: string };
  score?: number;
  probablePitcher?: { fullName?: string };
}

/** The TV station, national first, else the home side's. Radio rows are skipped. */
function tvStation(rows: MlbGame['broadcasts'] = []): string | undefined {
  const tv = rows.filter((b) => b.type === 'TV' && b.name);
  const pick = tv.find((b) => b.isNational) ?? tv.find((b) => b.homeAway === 'home') ?? tv[0];
  // "FOX / FOX ONE" is one carrier listed twice; the first name is the station.
  return pick?.name?.split(' / ')[0].trim();
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function localParts(iso: string, timeZone: string): { date: LocalDate; time: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

function toEvent(g: MlbGame, metroId: string): CrowdEvent | null {
  const home = MLB_TEAMS[g.teams.home.team.id ?? -1];
  const venueId = MLB_VENUES[g.venue?.id ?? -1] ?? home?.venueId;
  // Only home games in the metro; skip placeholder playoff slots and postponements.
  if (!home || home.metroId !== metroId || !venueId || !g.teams.away.team.id) return null;
  if (/postponed|cancel/i.test(g.status.detailedState)) return null;

  const tz = METROS[metroId].timeZone;
  const { date, time } = localParts(g.gameDate, tz);
  const awayName = g.teams.away.team.teamName ?? g.teams.away.team.name;
  const homeName = g.teams.home.team.teamName ?? g.teams.home.team.name;
  const stakes = mlbStakes(g);
  if (stakes && g.ifNecessary === 'Y') stakes.ifNecessary = true;
  const broadcast = tvStation(g.broadcasts);
  const starters = {
    ...(g.teams.home.probablePitcher?.fullName ? { home: g.teams.home.probablePitcher.fullName } : {}),
    ...(g.teams.away.probablePitcher?.fullName ? { away: g.teams.away.probablePitcher.fullName } : {}),
  };
  return {
    id: `${date}-mlb-${g.gamePk}`,
    ...(broadcast ? { broadcast } : {}),
    ...(Object.keys(starters).length ? { starters } : {}),
    metroId,
    date,
    start: g.status.startTimeTBD ? null : time,
    kind: 'game',
    title: `${homeName} vs. ${awayName}`,
    ...(stakes ? { stakes } : {}),
    place: { type: 'venue', venueId },
    audience: { domain: 'sports', sport: 'baseball' },
    teams: { home: home.teamId, away: slug(awayName) },
    crowd: [],
    sourceId: 'mlb',
  };
}

/** One club's games this season, home and away, with scores where a game is final. */
export async function mlbTeamSchedule(teamId: string): Promise<TeamGame[] | null> {
  const entry = Object.entries(MLB_TEAMS).find(([, t]) => t.teamId === teamId);
  if (!entry) return null;
  const [mlbId, t] = entry;
  const tz = METROS[t.metroId].timeZone;
  const year = new Date().getFullYear();
  const read = async (season: number): Promise<MlbGame[]> => {
    const u = `${API}?sportId=${t.sportId ?? 1}&teamId=${mlbId}&season=${season}&gameType=S,R,F,D,L,W&hydrate=linescore,team`;
    const r = await fetch(u);
    if (!r.ok) return [];
    const j = (await r.json()) as { dates?: { games: MlbGame[] }[] };
    return (j.dates ?? []).flatMap((d) => d.games);
  };
  let games = await read(year).catch(() => [] as MlbGame[]);
  // January and February sit before the schedule is posted; show the season just ended.
  if (games.length === 0) games = await read(year - 1).catch(() => [] as MlbGame[]);
  if (games.length === 0) return null;
  return games
    .flatMap((g): TeamGame[] => {
      if (/postponed|cancel/i.test(g.status.detailedState)) return [];
      const home = g.teams.home.team.id === Number(mlbId);
      const us = home ? g.teams.home : g.teams.away;
      const them = home ? g.teams.away : g.teams.home;
      // A playoff slot with no opponent yet.
      if (!them.team.id) return [];
      const { date, time } = localParts(g.gameDate, tz);
      const final = g.status.abstractGameState === 'Final';
      const host = MLB_TEAMS[g.teams.home.team.id ?? -1];
      const hostVenue = MLB_VENUES[g.venue?.id ?? -1] ?? host?.venueId;
      const stakes = mlbStakes(g);
      return [
        {
          id: `mlb-${t.teamId}-${g.gamePk}`,
          date,
          start: g.status.startTimeTBD ? null : time,
          home,
          opponent: them.team.teamName ?? them.team.name,
          ...(g.venue?.name ? { venueName: g.venue.name } : {}),
          ...(g.gameType === 'S' ? { preseason: true } : {}),
          ...(stakes ? { stakes } : {}),
          ...(final && us.score != null && them.score != null ? { score: { us: us.score, them: them.score } } : {}),
          ...(host && hostVenue ? { eventId: `${date}-mlb-${g.gamePk}`, eventMetroId: host.metroId } : {}),
        },
      ];
    })
    .sort((a, b) => (a.date + (a.start ?? '99:99')).localeCompare(b.date + (b.start ?? '99:99')));
}

const cache = new Map<string, Promise<CrowdEvent[]>>();

/**
 * Home games for the metro. Throws if the feed cannot be read.
 * The map does not call this: it uses `mlbEvents`, which still returns an
 * empty list when the feed is down.
 */
export function loadMlbSchedule(metroId: string, throughDate?: string): Promise<CrowdEvent[]> {
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = throughDate ?? new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });
  const calls = [...teamIdsBySport(metroId)].map(([sportId, teamIds]) =>
    fetch(`${API}?sportId=${sportId}&teamId=${teamIds.join(',')}&startDate=${today}&endDate=${end}&hydrate=team,broadcasts(all),probablePitcher`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((json: { dates: { games: MlbGame[] }[] }) => json.dates.flatMap((d) => d.games)),
  );
  return Promise.all(calls).then((lists) =>
    lists
      .flat()
      .map((g) => toEvent(g, metroId))
      .filter((e): e is CrowdEvent => e !== null && e.date >= today)
      .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))),
  );
}

/**
 * Finished home games between two dates, with the score and the box score's
 * announced crowd. For the nightly results pass. Throws when the feed can't be read.
 */
export async function loadMlbFinals(metroId: string, from: LocalDate, through: LocalDate): Promise<GameResult[]> {
  const games: MlbGame[] = [];
  for (const [sportId, teamIds] of teamIdsBySport(metroId)) {
    const r = await fetch(`${API}?sportId=${sportId}&teamId=${teamIds.join(',')}&startDate=${from}&endDate=${through}&hydrate=team,linescore`);
    if (!r.ok) throw new Error(`MLB schedule answered ${r.status}`);
    const json = (await r.json()) as { dates: { games: MlbGame[] }[] };
    games.push(...json.dates.flatMap((d) => d.games));
  }
  const finals = games.filter((g) => g.status.abstractGameState === 'Final');
  const capturedAt = new Date().toISOString();
  const rows: GameResult[] = [];
  for (const g of finals) {
    const event = toEvent(g, metroId);
    const hs = g.teams.home.score;
    const as = g.teams.away.score;
    if (!event || hs == null || as == null) continue;
    const innings = g.linescore?.currentInning;
    const scheduled = g.linescore?.scheduledInnings ?? 9;
    rows.push({
      eventId: event.id,
      metroId,
      date: event.date,
      sourceId: 'mlb',
      status: 'final',
      ...(event.place.type === 'venue' ? { venueId: event.place.venueId } : {}),
      ...(event.teams ? { homeTeamId: event.teams.home } : {}),
      home: { name: g.teams.home.team.teamName ?? g.teams.home.team.name, score: hs },
      away: { name: g.teams.away.team.teamName ?? g.teams.away.team.name, score: as },
      ...(innings && innings !== scheduled ? { note: `F/${innings}` } : {}),
      capturedAt,
    });
    const box = await boxScoreInfo(g.gamePk);
    const row = rows[rows.length - 1];
    if (box.attendance) row.attendance = box.attendance;
    if (box.durationMinutes) row.duration = { minutes: box.durationMinutes, kind: 'official' };
    if (box.firstPitch) row.startedAt = box.firstPitch;
  }
  return rows;
}

/** The box score's "Att", "T" (time of game) and "First pitch" lines. Each is undefined when absent. */
async function boxScoreInfo(gamePk: number): Promise<{ attendance?: number; durationMinutes?: number; firstPitch?: LocalTime }> {
  const r = await fetch(`https://statsapi.mlb.com/api/v1/game/${gamePk}/boxscore`);
  if (!r.ok) return {};
  const json = (await r.json()) as { info?: { label?: string; value?: string }[] };
  const line = (label: string) => json.info?.find((row) => row.label === label)?.value ?? '';
  const att = Number(line('Att').replace(/[^0-9]/g, ''));
  const t = line('T').match(/(\d+):(\d{2})/);
  const fp = line('First pitch').match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  let firstPitch: LocalTime | undefined;
  if (fp) {
    const h = (Number(fp[1]) % 12) + (fp[3].toUpperCase() === 'PM' ? 12 : 0);
    firstPitch = `${String(h).padStart(2, '0')}:${fp[2]}`;
  }
  return {
    attendance: Number.isFinite(att) && att > 0 ? att : undefined,
    durationMinutes: t ? Number(t[1]) * 60 + Number(t[2]) : undefined,
    firstPitch,
  };
}

function upcomingFor(metroId: string): Promise<CrowdEvent[]> {
  const hit = cache.get(metroId);
  if (hit) return hit;
  const p = loadMlbSchedule(metroId).catch(() => {
    cache.delete(metroId); // try again next time
    return [] as CrowdEvent[];
  });
  cache.set(metroId, p);
  return p;
}

export const mlbEvents: EventSource = {
  id: 'mlb',
  name: 'MLB schedule',
  eventsOn: async (metroId, date) => (await upcomingFor(metroId)).filter((e) => e.date === date),
  upcoming: async (metroId, fromDate) => (await upcomingFor(metroId)).filter((e) => e.date >= fromDate),
  catalog: (metroId) => upcomingFor(metroId),
};
