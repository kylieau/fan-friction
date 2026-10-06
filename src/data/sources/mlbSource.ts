// Live MLB schedule (free, no account) for the teams based in a metro.
// It only serves today and later: past dates come from the hand-seeded nights,
// so nothing shows twice. If the feed is down it quietly returns nothing.

import { METROS } from '../../config/metros';
import type { CrowdEvent, GameResult, LocalDate } from '../types';
import { mlbStakes } from './roundLabel';
import type { EventSource } from './types';

const API = 'https://statsapi.mlb.com/api/v1/schedule';
const DAYS_AHEAD = 120;

/** MLB's own ids, mapped to our records. Add a metro's teams and ballparks here. */
const MLB_TEAMS: Record<number, { metroId: string; teamId: string }> = {
  119: { metroId: 'la', teamId: 'dodgers' },
  108: { metroId: 'la', teamId: 'angels' },
};
const MLB_VENUES: Record<number, string> = { 22: 'dodger-stadium', 1: 'angel-stadium' };

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
  /** Doubleheader index. Not the series game. */
  gameNumber?: number;
  status: { detailedState: string; startTimeTBD?: boolean; abstractGameState?: string };
  linescore?: { currentInning?: number; scheduledInnings?: number };
  venue?: { id: number };
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
  return pick?.name;
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
  const venueId = MLB_VENUES[g.venue?.id ?? -1];
  // Only home games in the metro; skip placeholder playoff slots and postponements.
  if (!home || home.metroId !== metroId || !venueId || !g.teams.away.team.id) return null;
  if (/postponed|cancel/i.test(g.status.detailedState)) return null;

  const tz = METROS[metroId].timeZone;
  const { date, time } = localParts(g.gameDate, tz);
  const awayName = g.teams.away.team.teamName ?? g.teams.away.team.name;
  const homeName = g.teams.home.team.teamName ?? g.teams.home.team.name;
  const stakes = mlbStakes(g);
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

const cache = new Map<string, Promise<CrowdEvent[]>>();

/**
 * Home games for the metro. Throws if the feed cannot be read.
 * The map does not call this: it uses `mlbEvents`, which still returns an
 * empty list when the feed is down.
 */
export function loadMlbSchedule(metroId: string, throughDate?: string): Promise<CrowdEvent[]> {
  const teamIds = Object.entries(MLB_TEAMS).filter(([, t]) => t.metroId === metroId).map(([id]) => id);
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = throughDate ?? new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });
  const url = `${API}?sportId=1&teamId=${teamIds.join(',')}&startDate=${today}&endDate=${end}&hydrate=team,broadcasts(all),probablePitcher`;

  return fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((json: { dates: { games: MlbGame[] }[] }) =>
      json.dates
        .flatMap((d) => d.games)
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
  const teamIds = Object.entries(MLB_TEAMS).filter(([, t]) => t.metroId === metroId).map(([id]) => id);
  const url = `${API}?sportId=1&teamId=${teamIds.join(',')}&startDate=${from}&endDate=${through}&hydrate=team,linescore`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`MLB schedule answered ${r.status}`);
  const json = (await r.json()) as { dates: { games: MlbGame[] }[] };
  const finals = json.dates.flatMap((d) => d.games).filter((g) => g.status.abstractGameState === 'Final');
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
      home: { name: g.teams.home.team.teamName ?? g.teams.home.team.name, score: hs },
      away: { name: g.teams.away.team.teamName ?? g.teams.away.team.name, score: as },
      ...(innings && innings !== scheduled ? { note: `F/${innings}` } : {}),
      capturedAt,
    });
    const attendance = await boxScoreAttendance(g.gamePk);
    if (attendance) rows[rows.length - 1].attendance = attendance;
  }
  return rows;
}

/** The "Att" line of the box score, as a number. Undefined when the box score has none. */
async function boxScoreAttendance(gamePk: number): Promise<number | undefined> {
  const r = await fetch(`https://statsapi.mlb.com/api/v1/game/${gamePk}/boxscore`);
  if (!r.ok) return undefined;
  const json = (await r.json()) as { info?: { label?: string; value?: string }[] };
  const att = json.info?.find((row) => row.label === 'Att')?.value ?? '';
  const n = Number(att.replace(/[^0-9]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : undefined;
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
