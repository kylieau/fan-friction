// Upcoming home games for the teams based in a metro, from ESPN's public
// schedule feed (unofficial, free, no account). It could change without notice,
// which is why it's one swappable piece. Like the MLB source, it only serves
// today and later, and returns nothing if the feed is down.

import { METROS } from '../../config/metros';
import { TEAMS } from '../teams';
import type { CrowdEvent, LocalDate } from '../types';
import { espnStakes, leagueFromPath } from './roundLabel';
import type { EventSource } from './types';

const API = 'https://site.api.espn.com/apis/site/v2/sports';
const DAYS_AHEAD = 120;

/** ESPN's ids for each team, mapped to our records. Add a metro's teams here. */
const ESPN_TEAMS: { path: string; espnId: string; metroId: string; teamId: string; sport: string }[] = [
  { path: 'basketball/nba', espnId: '13', metroId: 'la', teamId: 'lakers', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '12', metroId: 'la', teamId: 'clippers', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '8', metroId: 'la', teamId: 'kings', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '187', metroId: 'la', teamId: 'galaxy', sport: 'soccer' },
  { path: 'football/nfl', espnId: '14', metroId: 'la', teamId: 'rams', sport: 'football' },
  { path: 'football/nfl', espnId: '24', metroId: 'la', teamId: 'chargers', sport: 'football' },
  { path: 'football/college-football', espnId: '30', metroId: 'la', teamId: 'usc-football', sport: 'football' },
  { path: 'football/college-football', espnId: '26', metroId: 'la', teamId: 'ucla-football', sport: 'football' },
];

/** ESPN gives venue names, not ids. Games anywhere else (road, neutral, abroad) are skipped. */
const VENUE_BY_NAME: Record<string, string> = {
  'crypto.com arena': 'crypto-com-arena',
  'intuit dome': 'intuit-dome',
  'sofi stadium': 'sofi-stadium',
  'dignity health sports park': 'dignity-health-sports-park',
  'los angeles memorial coliseum': 'coliseum',
  'rose bowl': 'rose-bowl',
  'bmo stadium': 'bmo-stadium',
};

interface EspnSide {
  homeAway: 'home' | 'away';
  team: { id: string; displayName: string; shortDisplayName: string };
}
interface EspnGame {
  id: string;
  date: string;
  season?: { slug?: string };
  seasonType?: { name?: string; abbreviation?: string };
  competitions: {
    venue?: { fullName?: string };
    competitors: EspnSide[];
    status?: { type?: { name?: string } };
    notes?: { headline?: string }[];
    gameNumberOfSeries?: number;
    series?: { gameNumberOfSeries?: number } | { gameNumberOfSeries?: number }[];
  }[];
}

/** Short names can collide (Sacramento Kings vs. LA Kings), so use the full name when they do. */
function nameOf(team: EspnSide['team']): string {
  const clash = Object.values(TEAMS).some((t) => t.shortName === team.shortDisplayName && t.name !== team.displayName);
  return clash ? team.displayName : team.shortDisplayName;
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function localParts(iso: string, timeZone: string): { date: LocalDate; time: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

function toEvent(g: EspnGame, t: (typeof ESPN_TEAMS)[number]): CrowdEvent | null {
  const c = g.competitions[0];
  const home = c?.competitors.find((x) => x.homeAway === 'home');
  const away = c?.competitors.find((x) => x.homeAway === 'away');
  const venueId = VENUE_BY_NAME[(c?.venue?.fullName ?? '').toLowerCase()];
  if (!home || !away || home.team.id !== t.espnId || !venueId) return null;
  if (/postponed|cancel/i.test(c.status?.type?.name ?? '')) return null;

  const { date, time } = localParts(g.date, METROS[t.metroId].timeZone);
  const league = leagueFromPath(t.path);
  const stakes = league ? espnStakes(g, league) : undefined;
  return {
    id: `${date}-espn-${t.teamId}-${g.id}`,
    metroId: t.metroId,
    date,
    start: time,
    kind: 'game',
    title: `${nameOf(home.team)} vs. ${nameOf(away.team)}`,
    ...(stakes ? { stakes } : {}),
    place: { type: 'venue', venueId },
    audience: { domain: 'sports', sport: t.sport },
    teams: { home: t.teamId, away: slug(nameOf(away.team)) },
    crowd: [],
    sourceId: 'espn',
  };
}

const cache = new Map<string, Promise<CrowdEvent[]>>();

async function scheduleFor(t: (typeof ESPN_TEAMS)[number]): Promise<EspnGame[]> {
  // Default is preseason, seasontype=2 is the regular season, seasontype=3 is the postseason.
  const urls = ['', '?seasontype=2', '?seasontype=3'].map((q) => `${API}/${t.path}/teams/${t.espnId}/schedule${q}`);
  const lists = await Promise.all(
    urls.map((u) =>
      fetch(u)
        .then((r) => (r.ok ? r.json() : { events: [] }))
        .then((j: { events?: EspnGame[] }) => j.events ?? [])
        .catch(() => [] as EspnGame[]),
    ),
  );
  return lists.flat();
}

function upcomingFor(metroId: string): Promise<CrowdEvent[]> {
  const hit = cache.get(metroId);
  if (hit) return hit;
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });

  const p = Promise.all(
    ESPN_TEAMS.filter((t) => t.metroId === metroId).map(async (t) =>
      (await scheduleFor(t)).map((g) => toEvent(g, t)),
    ),
  ).then((lists) => {
    const seen = new Set<string>();
    return lists
      .flat()
      .filter((e): e is CrowdEvent => e !== null && e.date >= today && e.date <= end)
      .filter((e) => !seen.has(e.id) && seen.add(e.id))
      .sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
  });
  cache.set(metroId, p);
  return p;
}

export const espnEvents: EventSource = {
  id: 'espn',
  name: 'ESPN schedules',
  eventsOn: async (metroId, date) => (await upcomingFor(metroId)).filter((e) => e.date === date),
  upcoming: async (metroId, fromDate) => (await upcomingFor(metroId)).filter((e) => e.date >= fromDate),
  catalog: (metroId) => upcomingFor(metroId),
};
