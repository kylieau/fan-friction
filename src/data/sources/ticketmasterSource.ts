// Concerts and other ticketed shows from Ticketmaster's Discovery API, for the
// nightly job only (the key never reaches the app). Terms, Oct 6, 2026
// (docs/archive/proposals/ticketmaster-review-oct6.md): store the facts of a night, not the
// content, so each event keeps its name, date, start, venue, performers and
// Ticketmaster's id, and nothing else. Sports listings are left to the league
// feeds. Only venues the app knows are kept: a listing matches a venue by
// Ticketmaster's venue id when one is on record, else by name, else by
// being within 300 m of the building. Unknown rooms are counted, not kept.
// Satellite grounds far outside the city (the Gorge, Indio) get their own small search.

import { COVERED_METRO_IDS, METROS } from '../../config/metros';
import type { CrowdEvent, LocalDate } from '../types';
import { VENUES } from '../venues';

const API = 'https://app.ticketmaster.com/discovery/v2/events.json';
/** How far ahead to list, in days. The schedule archive keeps 14; the catalog can hold more. */
const DAYS_AHEAD = 120;
/** Search radius from the metro's center, miles. */
const RADIUS_MILES: Record<string, number> = { la: 45, 'san-diego': 30, seattle: 38 };
/** Satellite grounds outside the city radius, searched on their own: [lat, lng, miles]. */
const EXTRA_POINTS: Record<string, [number, number, number][]> = {
  la: [[33.6803, -116.2372, 5]], // Empire Polo Club, Indio
  seattle: [[47.1028, -119.996, 5]], // the Gorge, George
};
const PAGE_SIZE = 200;
/** Ticketmaster stops paging at 1,000 results per query, so the four months are asked for a month at a time. */
const MAX_PAGES = 5;
const WINDOW_DAYS = 30;

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
  return ours.find((venue) => venue.names.some((n) => n.name.toLowerCase() === name));
}

/** Listings that are not a night out: venue tours, parking, camping, VIP add-ons. */
function isAddOn(name: string): boolean {
  return /\b(parking|tours?\b(?!\s+(?:de|of)\b)|no field access|camping|vip (?:package|upgrade|add-on)|meet (?:&|and) greet|upgrade)\b/i.test(name);
}

function kindOf(segment: string | undefined): CrowdEvent['kind'] | null {
  switch (segment) {
    case 'Music':
      return 'show';
    case 'Arts & Theatre':
    case 'Miscellaneous':
    case 'Film':
      return 'special';
    case 'Sports':
      return null; // the league feeds own sports
    default:
      return 'special';
  }
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
  const points: [number, number, number][] = [[metro.center[1], metro.center[0], RADIUS_MILES[metroId] ?? 30], ...(EXTRA_POINTS[metroId] ?? [])];
  for (const [lat, lng, radius] of points)
  for (let from = today; from <= through; from = addDays(from, WINDOW_DAYS)) {
  const to = addDays(from, WINDOW_DAYS - 1) < through ? addDays(from, WINDOW_DAYS - 1) : through;
  for (let page = 0; page < MAX_PAGES; page++) {
    const params = new URLSearchParams({
      apikey: apiKey,
      latlong: `${lat},${lng}`,
      radius: String(radius),
      unit: 'miles',
      startDateTime: `${from}T00:00:00Z`,
      endDateTime: `${to}T23:59:59Z`,
      size: String(PAGE_SIZE),
      page: String(page),
      sort: 'date,asc',
    });
    const r = await getPage(`${API}?${params}`);
    if (!r.ok) throw new Error(`Ticketmaster answered ${r.status}`);
    const json = (await r.json()) as { _embedded?: { events?: TmEvent[] }; page?: { totalPages?: number } };
    pages++;
    for (const e of json._embedded?.events ?? []) {
      if (seen.has(e.id)) continue;
      seen.add(e.id);
      if (/cancel|postpon|resched/i.test(e.dates.status?.code ?? '')) continue;
      if (e.dates.start.dateTBA || !e.dates.start.localDate) continue;
      const kind = kindOf(e.classifications?.[0]?.segment?.name);
      if (!kind) continue;
      if (kind === 'special' && isAddOn(e.name)) continue;
      const tmVenue = e._embedded?.venues?.[0];
      if (!tmVenue) continue;
      const venue = venueFor(metroId, tmVenue);
      if (!venue) {
        unknown.set(tmVenue.name, (unknown.get(tmVenue.name) ?? 0) + 1);
        continue;
      }
      const performers = (e._embedded?.attractions ?? []).map((a) => a.name).filter(Boolean);
      const performer = performers[0] ?? e.name;
      const genre = e.classifications?.[0]?.genre?.name ?? e.classifications?.[0]?.segment?.name ?? 'Other';
      const show = [e.dates.start.localDate, e.dates.start.localTime ?? '', venue.id, performer.toLowerCase()].join('|');
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
        title: kind === 'show' ? performer : e.name,
        place: { type: 'venue', venueId: venue.id },
        audience: kind === 'show' ? { domain: 'music', genre } : { domain: 'other', tag: genre },
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
