// Home games for the AHL, PWHL and WHL clubs in the covered cities, from the HockeyTech
// (LeagueStat) feed behind each league's own website (docs/no-feed-teams-answer.md).
// The keys are the ones the league sites use; Kylie chose to read the feed without
// asking first (Oct 8, 2026; docs/expected-draw-decisions-oct7.md), and the public-launch
// milestone in docs/build-brief.md says that has to be revisited. One swappable piece,
// like the ESPN source. Serves today and later; returns nothing when the feed is down.
// The ECHL (Allen Americans, Atlanta Gladiators) is not here: its site key was not
// found, so those buildings stay on the Ticketmaster sports sweep.

import { METROS } from '../../config/metros';
import { TEAMS } from '../teams';
import type { CrowdEvent, GameResult, LocalDate, LocalTime, TeamGame } from '../types';
import type { EventSource } from './types';

const API = 'https://lscluster.hockeytech.com/feed/';
const DAYS_AHEAD = 120;

/** Each league's client code and the key its own website sends. */
const CLIENTS: Record<string, { key: string; name: string }> = {
  ahl: { key: 'ccb91f29d6744675', name: 'AHL' },
  pwhl: { key: '446521baf8c38984', name: 'PWHL' },
  whl: { key: '41b145a848f4bd67', name: 'WHL' },
};

/** The feed's team ids, mapped to our records. Add a city's clubs here. */
export const HOCKEYTECH_TEAMS: { client: keyof typeof CLIENTS; htId: string; metroId: string; teamId: string; venueId: string }[] = [
  { client: 'ahl', htId: '330', metroId: 'chicago', teamId: 'chicago-wolves', venueId: 'allstate-arena' },
  { client: 'ahl', htId: '415', metroId: 'montreal', teamId: 'laval-rocket', venueId: 'place-bell' },
  { client: 'ahl', htId: '405', metroId: 'bay-area', teamId: 'san-jose-barracuda', venueId: 'sap-center' },
  { client: 'ahl', htId: '404', metroId: 'san-diego', teamId: 'san-diego-gulls', venueId: 'pechanga-arena' },
  { client: 'pwhl', htId: '3', metroId: 'montreal', teamId: 'victoire', venueId: 'place-bell' },
  { client: 'pwhl', htId: '8', metroId: 'seattle', teamId: 'seattle-torrent', venueId: 'climate-pledge-arena' },
  { client: 'pwhl', htId: '4', metroId: 'new-york', teamId: 'ny-sirens', venueId: 'prudential-center' },
  { client: 'pwhl', htId: '13', metroId: 'bay-area', teamId: 'pwhl-san-jose', venueId: 'sap-center' },
  { client: 'whl', htId: '214', metroId: 'seattle', teamId: 'seattle-thunderbirds', venueId: 'accesso-showare-center' },
  { client: 'whl', htId: '226', metroId: 'seattle', teamId: 'everett-silvertips', venueId: 'angel-of-the-winds-arena' },
];

/** The feed's venue names for a few buildings, when a club plays away from its usual home ("Bell Centre" for a Victoire one-off). */
const VENUE_BY_NAME: Record<string, string> = {
  'bell centre': 'bell-centre',
  'centre bell': 'bell-centre',
  'place bell': 'place-bell',
  'sap center': 'sap-center',
  'climate pledge arena': 'climate-pledge-arena',
  'prudential center': 'prudential-center',
  'allstate arena': 'allstate-arena',
  'pechanga arena': 'pechanga-arena',
  'pechanga arena san diego': 'pechanga-arena',
  'accesso showare center': 'accesso-showare-center',
  'angel of the winds arena': 'angel-of-the-winds-arena',
};

export function hockeytechMetroIds(): string[] {
  return [...new Set(HOCKEYTECH_TEAMS.map((t) => t.metroId))];
}

interface HtSeason {
  season_id: string;
  season_name: string;
}
interface HtGame {
  id: string;
  season_id: string;
  date_played: string;
  date_tbd?: string;
  time_tbd?: string;
  GameDateISO8601: string;
  home_team: string;
  visiting_team: string;
  home_team_name?: string;
  visiting_team_name?: string;
  home_team_nickname?: string;
  visiting_team_nickname?: string;
  home_goal_count?: string;
  visiting_goal_count?: string;
  attendance?: string;
  final?: string;
  game_status?: string;
  venue_name?: string;
  if_necessary?: string;
}

function url(client: string, params: Record<string, string>): string {
  const q = new URLSearchParams({ feed: 'modulekit', key: CLIENTS[client].key, client_code: client, fmt: 'json', lang: 'en', ...params });
  return `${API}?${q}`;
}

async function getJson<T>(u: string): Promise<T> {
  const r = await fetch(u);
  if (!r.ok) throw new Error(`HockeyTech answered ${r.status}`);
  return (await r.json()) as T;
}

const seasonCache = new Map<string, Promise<HtSeason[]>>();
/** The league's seasons, newest first. */
function seasonsFor(client: string): Promise<HtSeason[]> {
  const hit = seasonCache.get(client);
  if (hit) return hit;
  const p = getJson<{ SiteKit: { Seasons: HtSeason[] } }>(url(client, { view: 'seasons' })).then((j) => j.SiteKit.Seasons);
  seasonCache.set(client, p);
  p.catch(() => seasonCache.delete(client));
  return p;
}

/** The current regular season and anything after it (its playoffs), by id. */
async function currentSeasonIds(client: string): Promise<string[]> {
  const seasons = await seasonsFor(client);
  const regular = seasons.find((s) => /regular/i.test(s.season_name));
  if (!regular) return seasons.slice(0, 1).map((s) => s.season_id);
  return seasons.filter((s) => Number(s.season_id) >= Number(regular.season_id) && !/all-star|pre-season|preseason/i.test(s.season_name)).map((s) => s.season_id);
}

/** Every season of one kind, newest first ("regular" or "playoff"), for the attendance pull. */
export async function seasonIdsOf(client: string, kind: 'regular' | 'playoffs'): Promise<HtSeason[]> {
  const seasons = await seasonsFor(client);
  return seasons.filter((s) => (kind === 'regular' ? /regular/i.test(s.season_name) : /playoff|cup/i.test(s.season_name)));
}

export async function scheduleFor(client: string, seasonId: string, htTeamId: string): Promise<HtGame[]> {
  const j = await getJson<{ SiteKit: { Schedule: HtGame[] } }>(url(client, { view: 'schedule', season_id: seasonId, team_id: htTeamId }));
  return j.SiteKit.Schedule ?? [];
}

function localParts(iso: string, timeZone: string): { date: LocalDate; time: LocalTime } {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function nameOf(g: HtGame, side: 'home' | 'visiting'): string {
  const full = side === 'home' ? g.home_team_name : g.visiting_team_name;
  const nick = side === 'home' ? g.home_team_nickname : g.visiting_team_nickname;
  const ours = Object.values(TEAMS).find((t) => t.metroId && full && t.name.toLowerCase() === full.toLowerCase());
  return ours?.shortName ?? nick ?? full ?? '';
}

function venueOf(g: HtGame, t: (typeof HOCKEYTECH_TEAMS)[number]): string | undefined {
  const name = (g.venue_name ?? '').split('|')[0].trim().toLowerCase();
  if (!name || name === 'tbd') return t.venueId;
  return VENUE_BY_NAME[name] ?? (name.includes(t.venueId.replace(/-/g, ' ').split(' ')[0]) ? t.venueId : undefined);
}

function toEvent(g: HtGame, t: (typeof HOCKEYTECH_TEAMS)[number], playoffs: boolean): CrowdEvent | null {
  if (g.home_team !== t.htId || g.date_tbd === '1') return null;
  const venueId = venueOf(g, t);
  if (!venueId) return null;
  const tz = METROS[t.metroId].timeZone;
  const { date, time } = localParts(g.GameDateISO8601, tz);
  const league = CLIENTS[t.client].name;
  return {
    id: `${date}-ht-${t.teamId}-${g.id}`,
    metroId: t.metroId,
    date,
    start: g.time_tbd === '1' ? null : time,
    kind: 'game',
    title: `${nameOf(g, 'home')} vs. ${nameOf(g, 'visiting')}`,
    ...(playoffs ? { stakes: { round: `${league} Playoffs`, ...(g.if_necessary === '1' ? { ifNecessary: true } : {}) } } : {}),
    place: { type: 'venue', venueId },
    audience: { domain: 'sports', sport: 'hockey' },
    // The key is the feed's nickname, the one data/attendance stores (C012).
    teams: { home: t.teamId, away: slug(g.visiting_team_nickname ?? g.visiting_team_name ?? nameOf(g, 'visiting')) },
    crowd: [],
    sourceId: 'hockeytech',
  };
}

const cache = new Map<string, Promise<CrowdEvent[]>>();

async function upcomingFor(metroId: string, strict: boolean): Promise<CrowdEvent[]> {
  if (!strict) {
    const hit = cache.get(metroId);
    if (hit) return hit;
  }
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });
  const p = Promise.all(
    HOCKEYTECH_TEAMS.filter((t) => t.metroId === metroId).map(async (t) => {
      try {
        const seasons = await seasonsFor(t.client);
        const ids = await currentSeasonIds(t.client);
        const lists = await Promise.all(
          ids.map(async (id) => {
            const playoffs = /playoff|cup/i.test(seasons.find((s) => s.season_id === id)?.season_name ?? '');
            return (await scheduleFor(t.client, id, t.htId)).map((g) => toEvent(g, t, playoffs));
          }),
        );
        return lists.flat();
      } catch (err) {
        if (strict) throw err;
        return [] as (CrowdEvent | null)[];
      }
    }),
  ).then((lists) => {
    const seen = new Set<string>();
    return lists
      .flat()
      .filter((e): e is CrowdEvent => e !== null && e.date >= today && e.date <= end)
      .filter((e) => !seen.has(e.id) && seen.add(e.id))
      .sort((a, b) => (a.date + (a.start ?? '99:99')).localeCompare(b.date + (b.start ?? '99:99')));
  });
  if (!strict) cache.set(metroId, p);
  return p;
}

/** Home games for the metro. Throws if a club's feed cannot be read. */
export function loadHockeytechSchedule(metroId: string): Promise<CrowdEvent[]> {
  return upcomingFor(metroId, true);
}

/** Finished home games between two dates, with the score and the announced crowd. */
export async function loadHockeytechFinals(metroId: string, from: LocalDate, through: LocalDate): Promise<GameResult[]> {
  const capturedAt = new Date().toISOString();
  const rows: GameResult[] = [];
  for (const t of HOCKEYTECH_TEAMS.filter((x) => x.metroId === metroId)) {
    const seasons = await seasonsFor(t.client);
    for (const id of await currentSeasonIds(t.client)) {
      const playoffs = /playoff|cup/i.test(seasons.find((s) => s.season_id === id)?.season_name ?? '');
      for (const g of await scheduleFor(t.client, id, t.htId)) {
        if (g.final !== '1') continue;
        const event = toEvent(g, t, playoffs);
        if (!event || event.date < from || event.date > through) continue;
        const hs = Number(g.home_goal_count), as = Number(g.visiting_goal_count);
        if (!Number.isFinite(hs) || !Number.isFinite(as)) continue;
        const att = Number(g.attendance);
        const note = /OT|SO/i.test(g.game_status ?? '') ? (g.game_status ?? '').replace(/^Final\s*/i, '').trim() : undefined;
        rows.push({
          eventId: event.id,
          metroId,
          date: event.date,
          sourceId: 'hockeytech',
          status: 'final',
          ...(event.place.type === 'venue' ? { venueId: event.place.venueId } : {}),
          homeTeamId: t.teamId,
          home: { name: nameOf(g, 'home'), score: hs },
          away: { name: nameOf(g, 'visiting'), score: as },
          ...(att > 0 ? { attendance: att } : {}),
          ...(note ? { note } : {}),
          capturedAt,
        });
      }
    }
  }
  return rows;
}

/** One club's games this season, home and away, with scores where final (for the team page). */
export async function hockeytechTeamSchedule(teamId: string): Promise<TeamGame[] | null> {
  const t = HOCKEYTECH_TEAMS.find((x) => x.teamId === teamId);
  if (!t) return null;
  const tz = METROS[t.metroId].timeZone;
  const seasons = await seasonsFor(t.client);
  const games: TeamGame[] = [];
  for (const id of await currentSeasonIds(t.client)) {
    const playoffs = /playoff|cup/i.test(seasons.find((s) => s.season_id === id)?.season_name ?? '');
    for (const g of await scheduleFor(t.client, id, t.htId)) {
      if (g.date_tbd === '1') continue;
      const home = g.home_team === t.htId;
      const { date, time } = localParts(g.GameDateISO8601, tz);
      const final = g.final === '1';
      const hs = Number(g.home_goal_count), as = Number(g.visiting_goal_count);
      const hostVenue = home ? venueOf(g, t) : undefined;
      games.push({
        id: `ht-${t.teamId}-${g.id}`,
        date,
        start: g.time_tbd === '1' ? null : time,
        home,
        opponent: nameOf(g, home ? 'visiting' : 'home'),
        ...(g.venue_name ? { venueName: g.venue_name.split('|')[0].trim() } : {}),
        ...(playoffs ? { stakes: { round: `${CLIENTS[t.client].name} Playoffs` } } : {}),
        ...(final && Number.isFinite(hs) && Number.isFinite(as) ? { score: home ? { us: hs, them: as } : { us: as, them: hs } } : {}),
        ...(home && hostVenue ? { eventId: `${date}-ht-${t.teamId}-${g.id}`, eventMetroId: t.metroId } : {}),
      });
    }
  }
  return games.length ? games.sort((a, b) => (a.date + (a.start ?? '99:99')).localeCompare(b.date + (b.start ?? '99:99'))) : null;
}

export const hockeytechEvents: EventSource = {
  id: 'hockeytech',
  name: 'HockeyTech schedules',
  eventsOn: async (metroId, date) => (await upcomingFor(metroId, false)).filter((e) => e.date === date),
  upcoming: async (metroId, fromDate) => (await upcomingFor(metroId, false)).filter((e) => e.date >= fromDate),
  catalog: (metroId) => upcomingFor(metroId, false),
};
