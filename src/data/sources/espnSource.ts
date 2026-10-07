// Upcoming home games for the teams based in a metro, from ESPN's public
// schedule feed (unofficial, free, no account). It could change without notice,
// which is why it's one swappable piece. Like the MLB source, it only serves
// today and later, and returns nothing if the feed is down.

import { METROS } from '../../config/metros';
import { TEAMS } from '../teams';
import type { CrowdEvent, GameResult, LocalDate, LocalTime } from '../types';
import { espnStakes, leagueFromPath } from './roundLabel';
import type { EventSource } from './types';

const API = 'https://site.api.espn.com/apis/site/v2/sports';
const DAYS_AHEAD = 120;

/** ESPN's ids for each team, mapped to our records. Add a metro's teams here. */
const ESPN_TEAMS: { path: string; espnId: string; metroId: string; teamId: string; sport: string }[] = [
  { path: 'basketball/nba', espnId: '13', metroId: 'la', teamId: 'lakers', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '12', metroId: 'la', teamId: 'clippers', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '8', metroId: 'la', teamId: 'kings', sport: 'hockey' },
  { path: 'hockey/nhl', espnId: '25', metroId: 'la', teamId: 'ducks', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '187', metroId: 'la', teamId: 'galaxy', sport: 'soccer' },
  { path: 'soccer/usa.1', espnId: '18966', metroId: 'la', teamId: 'lafc', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '21422', metroId: 'la', teamId: 'angel-city', sport: 'soccer' },
  { path: 'football/nfl', espnId: '14', metroId: 'la', teamId: 'rams', sport: 'football' },
  { path: 'football/nfl', espnId: '24', metroId: 'la', teamId: 'chargers', sport: 'football' },
  { path: 'football/college-football', espnId: '30', metroId: 'la', teamId: 'usc-football', sport: 'football' },
  { path: 'football/college-football', espnId: '26', metroId: 'la', teamId: 'ucla-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '30', metroId: 'la', teamId: 'usc-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '26', metroId: 'la', teamId: 'ucla-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '30', metroId: 'la', teamId: 'usc-wbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '26', metroId: 'la', teamId: 'ucla-wbb', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '22529', metroId: 'san-diego', teamId: 'san-diego-fc', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '21423', metroId: 'san-diego', teamId: 'wave', sport: 'soccer' },
  { path: 'football/college-football', espnId: '21', metroId: 'san-diego', teamId: 'sdsu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '21', metroId: 'san-diego', teamId: 'sdsu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '21', metroId: 'san-diego', teamId: 'sdsu-wbb', sport: 'basketball' },
  { path: 'football/nfl', espnId: '26', metroId: 'seattle', teamId: 'seahawks', sport: 'football' },
  { path: 'hockey/nhl', espnId: '124292', metroId: 'seattle', teamId: 'kraken', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '9726', metroId: 'seattle', teamId: 'sounders', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15363', metroId: 'seattle', teamId: 'reign', sport: 'soccer' },
  { path: 'football/college-football', espnId: '264', metroId: 'seattle', teamId: 'uw-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '264', metroId: 'seattle', teamId: 'uw-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '264', metroId: 'seattle', teamId: 'uw-wbb', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '18', metroId: 'new-york', teamId: 'knicks', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '17', metroId: 'new-york', teamId: 'nets', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '9', metroId: 'new-york', teamId: 'liberty', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '13', metroId: 'new-york', teamId: 'ny-rangers', sport: 'hockey' },
  { path: 'hockey/nhl', espnId: '12', metroId: 'new-york', teamId: 'islanders', sport: 'hockey' },
  { path: 'hockey/nhl', espnId: '11', metroId: 'new-york', teamId: 'devils', sport: 'hockey' },
  { path: 'football/nfl', espnId: '19', metroId: 'new-york', teamId: 'ny-giants', sport: 'football' },
  { path: 'football/nfl', espnId: '20', metroId: 'new-york', teamId: 'ny-jets', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '17606', metroId: 'new-york', teamId: 'nycfc', sport: 'soccer' },
  { path: 'soccer/usa.1', espnId: '190', metroId: 'new-york', teamId: 'red-bulls', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15364', metroId: 'new-york', teamId: 'gotham', sport: 'soccer' },
  { path: 'basketball/mens-college-basketball', espnId: '2599', metroId: 'new-york', teamId: 'stjohns-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2550', metroId: 'new-york', teamId: 'seton-hall-mbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '171', metroId: 'new-york', teamId: 'columbia-football', sport: 'football' },
  { path: 'football/college-football', espnId: '2619', metroId: 'new-york', teamId: 'stony-brook-football', sport: 'football' },
  { path: 'football/college-football', espnId: '2230', metroId: 'new-york', teamId: 'fordham-football', sport: 'football' },
];

/** Cities this feed can list games for. */
export function espnMetroIds(): string[] {
  return [...new Set(ESPN_TEAMS.map((team) => team.metroId))];
}

/** ESPN gives venue names, not ids. Games anywhere else (road, neutral, abroad) are skipped. */
const VENUE_BY_NAME: Record<string, string> = {
  'crypto.com arena': 'crypto-com-arena',
  'intuit dome': 'intuit-dome',
  'sofi stadium': 'sofi-stadium',
  'dignity health sports park': 'dignity-health-sports-park',
  'los angeles memorial coliseum': 'coliseum',
  'rose bowl': 'rose-bowl',
  'bmo stadium': 'bmo-stadium',
  'honda center': 'honda-center',
  'pauley pavilion': 'pauley-pavilion',
  'galen center': 'galen-center',
  'snapdragon stadium': 'snapdragon-stadium',
  'viejas arena': 'viejas-arena',
  'petco park': 'petco-park',
  'lumen field': 'lumen-field',
  'climate pledge arena': 'climate-pledge-arena',
  'husky stadium': 'husky-stadium',
  'alaska airlines arena': 'alaska-airlines-arena',
  'alaska airlines arena at hec edmundson pavilion': 'alaska-airlines-arena',
  'hec edmundson pavilion': 'alaska-airlines-arena',
  't-mobile park': 't-mobile-park',
  'madison square garden': 'madison-square-garden',
  'barclays center': 'barclays-center',
  'ubs arena': 'ubs-arena',
  'metlife stadium': 'metlife-stadium',
  'yankee stadium': 'yankee-stadium',
  'citi field': 'citi-field',
  'sports illustrated stadium': 'sports-illustrated-stadium',
  'prudential center': 'prudential-center',
  'lawrence a. wien stadium': 'wien-stadium',
  'kenneth p. lavalle stadium': 'lavalle-stadium',
  'moglia stadium at jack coffey field': 'coffey-field',
  'carnesecca arena': 'carnesecca-arena',
  'icahn stadium': 'icahn-stadium',
};

interface EspnSide {
  homeAway: 'home' | 'away';
  team: { id: string; displayName: string; shortDisplayName: string };
  score?: { value?: number; displayValue?: string } | string | number;
}
interface EspnGame {
  id: string;
  date: string;
  /** False when the kickoff isn't set yet; `date` is then a midnight-Eastern placeholder. */
  timeValid?: boolean;
  season?: { slug?: string };
  seasonType?: { name?: string; abbreviation?: string };
  competitions: {
    timeValid?: boolean;
    venue?: { fullName?: string };
    competitors: EspnSide[];
    status?: { type?: { name?: string; shortDetail?: string } };
    attendance?: number;
    broadcasts?: { type?: { shortName?: string }; market?: { type?: string }; media?: { shortName?: string } }[];
    notes?: { headline?: string }[];
    gameNumberOfSeries?: number;
    series?: { gameNumberOfSeries?: number } | { gameNumberOfSeries?: number }[];
  }[];
}

/**
 * Our own short name for a team we know (ESPN calls the Sounders "Seattle"); otherwise ESPN's.
 * Short names can collide (Sacramento Kings vs. LA Kings), so use the full name when they do.
 */
function nameOf(team: EspnSide['team']): string {
  const ours = Object.values(TEAMS).find((t) => t.metroId && t.name === team.displayName);
  if (ours) return ours.shortName;
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

/** The TV station, national first. Radio and streaming-only rows are skipped. */
function tvStation(rows: NonNullable<EspnGame['competitions'][number]['broadcasts']> = []): string | undefined {
  const tv = rows.filter((b) => b.type?.shortName === 'TV' && b.media?.shortName);
  const pick = tv.find((b) => b.market?.type === 'National') ?? tv[0];
  return pick?.media?.shortName;
}

function toEvent(g: EspnGame, t: (typeof ESPN_TEAMS)[number]): CrowdEvent | null {
  const c = g.competitions[0];
  const home = c?.competitors.find((x) => x.homeAway === 'home');
  const away = c?.competitors.find((x) => x.homeAway === 'away');
  const venueId = VENUE_BY_NAME[(c?.venue?.fullName ?? '').toLowerCase()];
  if (!home || !away || home.team.id !== t.espnId || !venueId) return null;
  if (/postponed|cancel/i.test(c.status?.type?.name ?? '')) return null;

  // No kickoff yet: ESPN sends midnight Eastern as a stand-in. Converting that
  // to Pacific lands on 9:00 pm the day before, so take the calendar date as
  // ESPN wrote it (Eastern) and leave the time blank rather than invent one.
  const timeSet = g.timeValid !== false && c.timeValid !== false;
  const { date, time } = timeSet
    ? localParts(g.date, METROS[t.metroId].timeZone)
    : { date: localParts(g.date, 'America/New_York').date, time: null };
  const league = leagueFromPath(t.path);
  const stakes = league ? espnStakes(g, league) : undefined;
  const broadcast = tvStation(c.broadcasts);
  return {
    id: `${date}-espn-${t.teamId}-${g.id}`,
    metroId: t.metroId,
    date,
    start: time,
    kind: 'game',
    title: `${nameOf(home.team)} vs. ${nameOf(away.team)}`,
    ...(stakes ? { stakes } : {}),
    ...(g.seasonType?.abbreviation === 'pre' ? { preseason: true } : {}),
    ...(broadcast ? { broadcast } : {}),
    place: { type: 'venue', venueId },
    audience: { domain: 'sports', sport: t.sport },
    teams: { home: t.teamId, away: slug(nameOf(away.team)) },
    crowd: [],
    sourceId: 'espn',
  };
}

const cache = new Map<string, Promise<CrowdEvent[]>>();

async function scheduleFor(t: (typeof ESPN_TEAMS)[number], strict: boolean): Promise<EspnGame[]> {
  // Default is preseason, seasontype=2 is the regular season, seasontype=3 is the postseason.
  // Soccer is different: the plain schedule lists only matches already played, and the
  // season-type queries come back empty. Upcoming fixtures need `fixture=true`.
  const queries = ['', '?seasontype=2', '?seasontype=3', ...(t.path.startsWith('soccer/') ? ['?fixture=true'] : [])];
  const urls = queries.map((q) => `${API}/${t.path}/teams/${t.espnId}/schedule${q}`);
  const lists = await Promise.all(
    urls.map(async (u) => {
      try {
        const r = await fetch(u);
        if (!r.ok) {
          // 404 is a season that team does not have. Anything else, in a strict
          // read, means the listing is incomplete and must not be saved.
          if (strict && r.status !== 404) throw new Error(`ESPN schedule for ${t.teamId} answered ${r.status}`);
          return [] as EspnGame[];
        }
        const j = (await r.json()) as { events?: EspnGame[] };
        return j.events ?? [];
      } catch (err) {
        if (strict) throw err;
        return [] as EspnGame[];
      }
    }),
  );
  return lists.flat();
}

/** The team's first regular-season home game in this listing (it sizes from past openers). */
function homeOpenerId(games: EspnGame[], espnId: string): string | undefined {
  const home = games.filter(
    (g) => g.seasonType?.abbreviation === 'reg' && g.competitions[0]?.competitors.some((x) => x.homeAway === 'home' && x.team.id === espnId),
  );
  home.sort((a, b) => a.date.localeCompare(b.date));
  return home[0]?.id;
}

function upcomingFor(metroId: string, strict = false): Promise<CrowdEvent[]> {
  if (!strict) {
    const hit = cache.get(metroId);
    if (hit) return hit;
  }
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });

  const p = Promise.all(
    ESPN_TEAMS.filter((t) => t.metroId === metroId).map(async (t) => {
      const games = await scheduleFor(t, strict);
      const openerId = homeOpenerId(games, t.espnId);
      return games.map((g) => {
        const e = toEvent(g, t);
        return e && g.id === openerId ? { ...e, homeOpener: true } : e;
      });
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

function scoreOf(side: EspnSide): number | undefined {
  const s = side.score;
  if (s == null) return undefined;
  if (typeof s === 'number') return s;
  if (typeof s === 'string') return Number.isFinite(Number(s)) ? Number(s) : undefined;
  if (typeof s.value === 'number') return s.value;
  const n = Number(s.displayValue);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * How long a finished game ran, from the first and last play's wall-clock
 * stamps on ESPN's game page. An estimate: the first stamp is the first play,
 * not the anthem, and the last is the final play. Undefined when the page has
 * no stamps. One extra request per finished game.
 */
async function playClockSpan(path: string, gameId: string): Promise<{ minutes: number; startedAt: LocalTime } | undefined> {
  try {
    const r = await fetch(`${API}/${path}/summary?event=${gameId}`);
    if (!r.ok) return undefined;
    const json = (await r.json()) as {
      plays?: { wallclock?: string }[];
      drives?: { previous?: { plays?: { wallclock?: string }[] }[] };
    };
    const plays = json.plays ?? (json.drives?.previous ?? []).flatMap((d) => d.plays ?? []);
    const stamps = plays.map((p) => p.wallclock).filter((w): w is string => Boolean(w)).map((w) => new Date(w).getTime()).filter(Number.isFinite).sort((a, b) => a - b);
    if (stamps.length < 10) return undefined;
    const minutes = Math.round((stamps[stamps.length - 1] - stamps[0]) / 60_000);
    if (minutes < 60 || minutes > 360) return undefined;
    const zone = METROS[ESPN_TEAMS.find((t) => t.path === path)?.metroId ?? 'la'].timeZone;
    return { minutes, startedAt: localParts(new Date(stamps[0]).toISOString(), zone).time };
  } catch {
    return undefined;
  }
}

/**
 * Finished home games between two dates, with the score, announced crowd and
 * how long the game ran. For the nightly results pass. Throws when a team
 * schedule can't be read; a missing game page only leaves the length off.
 */
export async function loadEspnFinals(metroId: string, from: LocalDate, through: LocalDate): Promise<GameResult[]> {
  const capturedAt = new Date().toISOString();
  const spans = new Map<string, Promise<{ minutes: number; startedAt: LocalTime } | undefined>>();
  const lists = await Promise.all(
    ESPN_TEAMS.filter((t) => t.metroId === metroId).map(async (t) =>
      (await scheduleFor(t, true)).flatMap((g): GameResult[] => {
        const c = g.competitions[0];
        // Soccer says STATUS_FULL_TIME; everything else says STATUS_FINAL.
        if (!/^STATUS_(FINAL|FULL_TIME)/.test(c?.status?.type?.name ?? '')) return [];
        const event = toEvent(g, t);
        if (!event || event.date < from || event.date > through) return [];
        const home = c.competitors.find((x) => x.homeAway === 'home');
        const away = c.competitors.find((x) => x.homeAway === 'away');
        const hs = home ? scoreOf(home) : undefined;
        const as = away ? scoreOf(away) : undefined;
        if (!home || !away || hs == null || as == null) return [];
        const detail = c.status?.type?.shortDetail ?? '';
        const note = /OT|SO|\/\d/.test(detail) ? detail.replace(/^Final/i, '').replace(/^\//, '').trim() : undefined;
        spans.set(event.id, playClockSpan(t.path, g.id));
        return [
          {
            eventId: event.id,
            metroId,
            date: event.date,
            sourceId: 'espn',
            status: 'final',
            ...(event.place.type === 'venue' ? { venueId: event.place.venueId } : {}),
            ...(event.teams ? { homeTeamId: event.teams.home } : {}),
            home: { name: nameOf(home.team), score: hs },
            away: { name: nameOf(away.team), score: as },
            ...(typeof c.attendance === 'number' && c.attendance > 0 ? { attendance: c.attendance } : {}),
            ...(note ? { note } : {}),
            capturedAt,
          },
        ];
      }),
    ),
  );
  const seen = new Set<string>();
  const rows = lists.flat().filter((row) => !seen.has(row.eventId) && seen.add(row.eventId));
  for (const row of rows) {
    const span = await spans.get(row.eventId);
    if (span) {
      row.duration = { minutes: span.minutes, kind: 'estimated' };
      row.startedAt = span.startedAt;
    }
  }
  return rows;
}

/**
 * Home games for the metro. Throws if a team schedule cannot be read.
 * The map does not call this: it uses `espnEvents`, which still returns an
 * empty list when a feed is down.
 */
export function loadEspnSchedule(metroId: string): Promise<CrowdEvent[]> {
  return upcomingFor(metroId, true);
}

export const espnEvents: EventSource = {
  id: 'espn',
  name: 'ESPN schedules',
  eventsOn: async (metroId, date) => (await upcomingFor(metroId)).filter((e) => e.date === date),
  upcoming: async (metroId, fromDate) => (await upcomingFor(metroId)).filter((e) => e.date >= fromDate),
  catalog: (metroId) => upcomingFor(metroId),
};
