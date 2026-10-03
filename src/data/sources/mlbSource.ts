// Live MLB schedule (free, no account) for the teams based in a metro.
// It only serves today and later: past dates come from the hand-seeded nights,
// so nothing shows twice. If the feed is down it quietly returns nothing.

import { METROS } from '../../config/metros';
import type { CrowdEvent, LocalDate } from '../types';
import type { EventSource } from './types';

const API = 'https://statsapi.mlb.com/api/v1/schedule';
const DAYS_AHEAD = 120;

/** MLB's own ids, mapped to our records. Add a metro's teams and ballparks here. */
const MLB_TEAMS: Record<number, { metroId: string; teamId: string }> = {
  119: { metroId: 'la', teamId: 'dodgers' },
  108: { metroId: 'la', teamId: 'angels' },
};
const MLB_VENUES: Record<number, string> = { 22: 'dodger-stadium', 1: 'angel-stadium' };

interface MlbGame {
  gamePk: number;
  gameDate: string;
  status: { detailedState: string; startTimeTBD?: boolean };
  venue?: { id: number };
  teams: { home: MlbSide; away: MlbSide };
}
interface MlbSide {
  team: { id?: number; name: string; teamName?: string };
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
  return {
    id: `${date}-mlb-${g.gamePk}`,
    metroId,
    date,
    start: g.status.startTimeTBD ? null : time,
    kind: 'game',
    title: `${homeName} vs. ${awayName}`,
    place: { type: 'venue', venueId },
    audience: { domain: 'sports', sport: 'baseball' },
    teams: { home: home.teamId, away: slug(awayName) },
    crowd: [],
    sourceId: 'mlb',
  };
}

const cache = new Map<string, Promise<CrowdEvent[]>>();

function upcomingFor(metroId: string): Promise<CrowdEvent[]> {
  const hit = cache.get(metroId);
  if (hit) return hit;
  const teamIds = Object.entries(MLB_TEAMS).filter(([, t]) => t.metroId === metroId).map(([id]) => id);
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });
  const url = `${API}?sportId=1&teamId=${teamIds.join(',')}&startDate=${today}&endDate=${end}&hydrate=team`;

  const p = fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((json: { dates: { games: MlbGame[] }[] }) =>
      json.dates
        .flatMap((d) => d.games)
        .map((g) => toEvent(g, metroId))
        .filter((e): e is CrowdEvent => e !== null && e.date >= today)
        .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))),
    )
    .catch(() => {
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
