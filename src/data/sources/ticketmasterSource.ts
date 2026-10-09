// Concerts and other ticketed shows from Ticketmaster's Discovery API, for the
// nightly job only (the key never reaches the app). Terms, Oct 6, 2026
// (docs/archive/proposals/ticketmaster-review-oct6.md): store the facts of a night, not the
// content, so each event keeps its name, date, start, venue, performers and
// Ticketmaster's id, and nothing else. Sports listings are left to the league
// feeds. Only venues the app knows are kept, and since Oct 9, 2026 (C002) the
// pull asks for them by venue id, a dozen venues a call, so a busy city is never
// cut at Ticketmaster's 1,000-result ceiling (New York has ~6,000 listings a
// month). A venue with no id on record is searched by its name near its spot.
// A listing still matches a venue by id, else by name, else by being within
// 300 m of the building. Unknown rooms are counted, not kept.

import { COVERED_METRO_IDS, METROS } from '../../config/metros';
import type { CrowdEvent, LocalDate } from '../types';
import { VENUES } from '../venues';

const API = 'https://app.ticketmaster.com/discovery/v2/events.json';
/** How far ahead to list, in days. The schedule archive keeps 14; the catalog can hold more. */
const DAYS_AHEAD = 120;
const PAGE_SIZE = 200;
/** Ticketmaster stops paging at 1,000 results per query. A dozen venues over two months stays far under it. */
const MAX_PAGES = 5;
const WINDOW_DAYS = 60;
const VENUES_PER_CALL = 12;
/** A venue with no Ticketmaster id on record: its current name, searched this close to its spot (miles). */
const NAME_SEARCH_MILES = 3;

interface TmVenue {
  id: string;
  name: string;
  location?: { latitude: string; longitude: string };
}

interface TmEvent {
  id: string;
  name: string;
  dates: { start: { localDate: string; localTime?: string; dateTBA?: boolean; timeTBA?: boolean }; status?: { code?: string } };
  classifications?: { segment?: { name?: string }; genre?: { name?: string }; subGenre?: { name?: string } }[];
  _embedded?: {
    venues?: TmVenue[];
    attractions?: { name: string }[];
  };
}

export interface TicketmasterPull {
  events: CrowdEvent[];
  /** Listings at rooms the venue table doesn't have, by venue name, most first. */
  unknownVenues: { name: string; count: number }[];
  pages: number;
}

/** The venue record a Ticketmaster venue matches, or undefined. */
function venueFor(metroId: string, v: TmVenue) {
  const ours = Object.values(VENUES).filter((venue) => venue.metroId === metroId);
  const byId = ours.find((venue) => venue.ticketmasterIds?.includes(v.id));
  if (byId) return byId;
  const name = v.name.trim().toLowerCase();
  const byName = ours.find((venue) => venue.names.some((n) => n.name.toLowerCase() === name));
  if (byName || !v.location) return byName;
  // Within 300 m of a venue we know: the same room under a name we have not stored (C016).
  const lat = Number(v.location.latitude);
  const lng = Number(v.location.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return undefined;
  return ours.find((venue) => metersBetween(venue.location, [lng, lat]) <= 300);
}

function metersBetween([lng1, lat1]: readonly [number, number] | number[], [lng2, lat2]: readonly [number, number] | number[]): number {
  const r = Math.PI / 180;
  const x = (lng2 - lng1) * r * Math.cos(((lat1 + lat2) / 2) * r);
  const y = (lat2 - lat1) * r;
  return Math.sqrt(x * x + y * y) * 6_371_000;
}

/** Listings that are not a night out: venue tours, parking, camping, VIP add-ons, premium seating, passes. */
function isAddOn(name: string): boolean {
  return /\b(parking|tours?\b(?!\s+(?:de|of)\b)|no field access|camping|vip (?:package|upgrade|add-on)|meet (?:&|and) greet|upgrade|repas|restaurant|salon des|lounge|hospitality|suites?)\b/i.test(name) || isPremiumAddOn(name);
}

/**
 * The add-on words that also appear in real show names ("The Romantic Tour", "Club Nouveau"), so
 * they count only in an add-on shape: a "Premium:" prefix, a club or premium package, a parking or
 * lot pass, or Ticketmaster's own "Not an Event Ticket" (C001).
 */
function isPremiumAddOn(name: string): boolean {
  return /^\s*(?:premium|club|vip|platinum)\s*[:–-]|\b(?:premium|club|platinum) (?:seat(?:s|ing)?|package|experience|access|ticket)s?\b|\b(?:parking|lot|fast|early entry|pre-?show|pre-?game|tailgate|benchwarmers?) pass(?:es)?\b|not an event ticket/i.test(name);
}

/** For a show: the add-on shapes only, never the bare words a tour or band name can carry. */
function isShowAddOn(name: string): boolean {
  return /\b(?:parking|camping|vip (?:package|upgrade|add-on)|meet (?:&|and) greet|hospitality|suites?|(?:venue|stadium|arena|behind.the.scenes) tours?)\b/i.test(name) || isPremiumAddOn(name);
}

/**
 * Buildings whose games no league feed lists (docs/no-feed-teams-proposal.md; Kylie's OK, Oct 8, 2026): the AHL,
 * ECHL, PWHL, WHL, CFL, UFL, USL Super League, MASL, cricket, rodeo and motorsport rooms. Sports listings are kept
 * only here, and a feed game at the same building on the same date still wins (the catalog and archive drop the
 * Ticketmaster copy).
 */
const SPORTS_FROM_TICKETMASTER = new Set([
  'dickies-arena', 'will-rogers-coliseum', 'cutx-event-center', 'grand-prairie-stadium', 'mansfield-stadium', 'cotton-bowl', 'toyota-stadium', 'comerica-center', 'texas-motor-speedway',
  // The Dogs and Boomers (American Association, Frontier League) have no schedule in MLB's partner-league feed, so their parks are swept too.
  'allstate-arena', 'now-arena', 'chicagoland-speedway', 'impact-field', 'wintrust-field',
  'toyota-arena', 'pechanga-arena', 'acrisure-arena',
  'climate-pledge-arena', 'angel-of-the-winds-arena', 'accesso-showare-center',
  'gas-south-arena', 'echopark-speedway',
  'kezar-stadium', 'oakland-coliseum',
  'place-bell', 'percival-molson-stadium', 'cepsum-stadium', 'iga-stadium',
]);

function kindOf(segment: string | undefined, venueId: string): CrowdEvent['kind'] | null {
  switch (segment) {
    case 'Music':
      return 'show';
    case 'Arts & Theatre':
    case 'Miscellaneous':
    case 'Film':
      return 'special';
    case 'Sports':
      return SPORTS_FROM_TICKETMASTER.has(venueId) ? 'game' : null; // elsewhere the league feeds own sports
    default:
      return 'special';
  }
}

/** The sport a Ticketmaster genre names ("Hockey" → hockey); "other" when it is a rodeo, a race or unclear. */
function sportOf(genre: string | undefined): string {
  const g = (genre ?? '').toLowerCase();
  for (const s of ['hockey', 'basketball', 'football', 'soccer', 'baseball', 'lacrosse', 'rodeo', 'motorsports', 'tennis', 'cricket', 'wrestling', 'boxing']) if (g.includes(s)) return s;
  return 'other';
}

function addDays(date: LocalDate, days: number): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/** A performer's nights at one venue within a week of each other: the run each night belongs to. */
function markRuns(events: CrowdEvent[]) {
  const groups = new Map<string, CrowdEvent[]>();
  for (const e of events) {
    if (!e.performer || e.place.type !== 'venue') continue;
    const key = `${e.performer.toLowerCase()}|${e.place.venueId}`;
    groups.set(key, [...(groups.get(key) ?? []), e]);
  }
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    for (const e of list) {
      const [y, m, d] = e.date.split('-').map(Number);
      const t = Date.UTC(y, m - 1, d);
      const run = list.filter((o) => {
        const [oy, om, od] = o.date.split('-').map(Number);
        return Math.abs(Date.UTC(oy, om - 1, od) - t) <= 7 * 86_400_000;
      }).length;
      if (run >= 2) e.occasionFacts = { ...(e.occasionFacts ?? {}), run };
    }
  }
}

// Ticketmaster allows five requests a second and 5,000 a day, and answers 429 to both. Every
// request waits its turn (the old pause ran only between pages of one window, so the first
// request of each window went out back to back). A per-second refusal ("spike arrest") is
// retried after a pause; only the daily quota stops the run.
const MIN_GAP_MS = 250;
let lastRequestAt = 0;

async function getPage(url: string): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    const wait = lastRequestAt + MIN_GAP_MS - Date.now();
    if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
    lastRequestAt = Date.now();
    const r = await fetch(url);
    if (r.status !== 429) return r;
    const reason = await r.text().catch(() => '');
    if (/quota/i.test(reason) || attempt >= 3) {
      throw new Error(`Ticketmaster: ${/quota/i.test(reason) ? 'over the daily quota' : 'still refusing after retries'} (${reason.slice(0, 120)})`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** attempt));
  }
}

/** Upcoming listings for one covered city. Throws when the feed can't be read. */
export async function loadTicketmasterEvents(metroId: string, apiKey: string, now = new Date()): Promise<TicketmasterPull> {
  const metro = METROS[metroId];
  if (!metro) throw new Error(`Unknown metro ${metroId}`);
  const today = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addDays(today, DAYS_AHEAD);
  const events: CrowdEvent[] = [];
  const unknown = new Map<string, number>();
  const seen = new Set<string>();
  // Ticketmaster can list one show twice under two ids (a second listing, a package). The same
  // performer in the same building at the same date and start is one show, counted once.
  const shows = new Set<string>();
  let pages = 0;
  // The queries: the city's venues by id, a dozen at a time per two-month window; then each
  // venue with no id by its name near its spot, over the whole horizon.
  const ours = Object.values(VENUES).filter((venue) => venue.metroId === metroId);
  const withIds = ours.filter((venue) => venue.ticketmasterIds?.length);
  const queries: Record<string, string>[] = [];
  for (let i = 0; i < withIds.length; i += VENUES_PER_CALL) {
    const ids = withIds.slice(i, i + VENUES_PER_CALL).flatMap((venue) => venue.ticketmasterIds ?? []);
    for (let from = today; from <= through; from = addDays(from, WINDOW_DAYS)) {
      const to = addDays(from, WINDOW_DAYS - 1) < through ? addDays(from, WINDOW_DAYS - 1) : through;
      queries.push({ venueId: ids.join(','), startDateTime: `${from}T00:00:00Z`, endDateTime: `${to}T23:59:59Z` });
    }
  }
  for (const venue of ours.filter((v) => !v.ticketmasterIds?.length)) {
    queries.push({
      keyword: venue.names[venue.names.length - 1].name,
      latlong: `${venue.location[1]},${venue.location[0]}`,
      radius: String(NAME_SEARCH_MILES),
      unit: 'miles',
      startDateTime: `${today}T00:00:00Z`,
      endDateTime: `${through}T23:59:59Z`,
    });
  }
  for (const query of queries) {
  for (let page = 0; page < MAX_PAGES; page++) {
    const params = new URLSearchParams({ apikey: apiKey, ...query, size: String(PAGE_SIZE), page: String(page), sort: 'date,asc' });
    const r = await getPage(`${API}?${params}`);
    if (!r.ok) throw new Error(`Ticketmaster answered ${r.status}`);
    const json = (await r.json()) as { _embedded?: { events?: TmEvent[] }; page?: { totalPages?: number } };
    pages++;
    for (const e of json._embedded?.events ?? []) {
      if (seen.has(e.id)) continue;
      seen.add(e.id);
      if (/cancel|postpon|resched/i.test(e.dates.status?.code ?? '')) continue;
      if (e.dates.start.dateTBA || !e.dates.start.localDate) continue;
      const segment = e.classifications?.[0]?.segment?.name;
      const tmVenue = e._embedded?.venues?.[0];
      if (!tmVenue) continue;
      const venue = venueFor(metroId, tmVenue);
      if (!venue) {
        if (segment !== 'Sports') unknown.set(tmVenue.name, (unknown.get(tmVenue.name) ?? 0) + 1);
        continue;
      }
      const kind = kindOf(segment, venue.id);
      if (!kind) continue;
      if (kind === 'show' ? isShowAddOn(e.name) : isAddOn(e.name)) continue;
      const performers = (e._embedded?.attractions ?? []).map((a) => a.name).filter(Boolean);
      const performer = (performers[0] ?? e.name).trim();
      const genre = e.classifications?.[0]?.genre?.name ?? e.classifications?.[0]?.segment?.name ?? 'Other';
      // One performer in one building on one date is one show, whatever time each listing carries (C014).
      const show = [e.dates.start.localDate, venue.id, performer.toLowerCase()].join('|');
      // One event can also be listed under two segments with two performer names (a festival
      // as Music and as Miscellaneous), so the same name in the same building on the same date is one too.
      const named = [e.dates.start.localDate, venue.id, e.name.toLowerCase().replace(/\s+/g, ' ').trim()].join('|');
      if (shows.has(show) || shows.has(named)) continue;
      shows.add(show);
      shows.add(named);
      events.push({
        id: `${e.dates.start.localDate}-tm-${e.id}`,
        metroId,
        date: e.dates.start.localDate,
        start: e.dates.start.timeTBA || !e.dates.start.localTime ? null : e.dates.start.localTime.slice(0, 5),
        kind,
        title: kind === 'show' ? performer : e.name.trim(),
        place: { type: 'venue', venueId: venue.id },
        audience: kind === 'show' ? { domain: 'music', genre } : kind === 'game' ? { domain: 'sports', sport: sportOf(`${genre} ${e.classifications?.[0]?.subGenre?.name ?? ''} ${e.name}`) } : { domain: 'other', tag: genre },
        performer,
        crowd: [],
        sourceId: 'ticketmaster',
        ticketmasterId: e.id,
      });
    }
    const total = json.page?.totalPages ?? 1;
    if (page + 1 >= total) break;
  }
  }
  markRuns(events);
  return {
    events,
    unknownVenues: [...unknown].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
    pages,
  };
}

export const TICKETMASTER_METRO_IDS = [...COVERED_METRO_IDS];
