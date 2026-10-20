// Shows of 5,000+ that Ticketmaster doesn't list, from SeatGeek's official API (build 5, item 1, source (b), the
// catch-all; Kylie, Oct 14). For the nightly job only: the client id never reaches the app, and the job skips this
// source when SEATGEEK_CLIENT_ID is not set. The client id is free (🚩 Kylie signs up; no cost found, check the API
// terms before turning it on). Same storage rule as Ticketmaster: the facts of a night, not the content.
//
// UNVERIFIED: SeatGeek's developer docs render nothing to a normal fetch (Oct 14). The research answer
// (docs/build-5/research/concerts-ticketmaster-misses-oct13-answer.txt) confirms only the endpoint (/2/events) and
// the free client id. The query parameters and response fields below follow SeatGeek's long-published API and are
// marked so; the first run with a key will show whether they hold. A wrong field fails safe: no events are kept.

import { METROS } from '../../config/metros';
import type { CrowdEvent, LocalDate } from '../types';
import { capacityOn } from '../venues';
import { FRICTION_ATTENDEES } from '../read';
import { showKeys, venueByNameOrPlace, venueClosedOn } from './venueMatch';
import { isAddOnListing } from './addOns';

const API = 'https://api.seatgeek.com/2/events';
const DAYS_AHEAD = 120;
const PER_PAGE = 100; // UNVERIFIED parameter name and ceiling
const MAX_PAGES = 10;
/** How far from the city's center point to ask (UNVERIFIED parameter `range`). Matching to our venues decides what stays. */
const RANGE = '60mi';

/** UNVERIFIED field names. */
interface SgEvent {
  id: number;
  title: string;
  type?: string;
  datetime_local?: string;
  datetime_tbd?: boolean;
  time_tbd?: boolean;
  venue?: { id?: number; name?: string; location?: { lat?: number; lon?: number } };
  performers?: { name?: string; primary?: boolean }[];
}

/** Concerts and music festivals only (UNVERIFIED type names); sports stay with the league feeds. */
function kindOf(type: string | undefined): CrowdEvent['kind'] | null {
  if (type === 'concert') return 'show';
  if (type === 'music_festival') return 'festival';
  return null;
}

function addDays(date: LocalDate, days: number): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/**
 * One city's SeatGeek concerts and festivals at venues we know, in rooms of 5,000 or more (the item's scope line;
 * Ticketmaster keeps every known room: a reading, recorded in the handoff). Throws when SeatGeek can't be read, so
 * the job can log it and carry on.
 */
export async function loadSeatgeekEvents(metroId: string, clientId: string): Promise<CrowdEvent[]> {
  const metro = METROS[metroId];
  if (!metro) return [];
  const today = new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addDays(today, DAYS_AHEAD);
  const [lng, lat] = metro.center;
  const events: CrowdEvent[] = [];
  const shows = new Set<string>();
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const params = new URLSearchParams({
      client_id: clientId,
      lat: String(lat),
      lon: String(lng),
      range: RANGE,
      'datetime_local.gte': `${today}T00:00:00`,
      'datetime_local.lte': `${through}T23:59:59`,
      per_page: String(PER_PAGE),
      page: String(page),
    });
    const r = await fetch(`${API}?${params}`);
    if (!r.ok) throw new Error(`SeatGeek answered ${r.status}`);
    const json = (await r.json()) as { events?: SgEvent[]; meta?: { total?: number; per_page?: number } };
    for (const e of json.events ?? []) {
      const kind = kindOf(e.type);
      if (!kind || e.datetime_tbd || !e.datetime_local || !e.venue?.name) continue;
      const date = e.datetime_local.slice(0, 10);
      const venue = venueByNameOrPlace(metroId, e.venue.name, e.venue.location?.lat, e.venue.location?.lon, date);
      if (!venue || venueClosedOn(venue, date)) continue;
      const capacity = capacityOn(venue, date, 'concert');
      if (!capacity || capacity < FRICTION_ATTENDEES) continue;
      // The add-on filter's name and act layers, as on Ticketmaster (Kylie, Oct 19, 2026: the layered rule; teams name
      // the same products the same way on every seller).
      if (isAddOnListing(e.title, kind, { acts: (e.performers ?? []).map((p) => p.name).filter((n): n is string => Boolean(n)) })) continue;
      const performer = (e.performers?.find((p) => p.primary)?.name ?? e.performers?.[0]?.name ?? e.title).trim();
      const keys = showKeys(date, venue.id, performer, e.title);
      if (keys.some((k) => shows.has(k))) continue;
      keys.forEach((k) => shows.add(k));
      events.push({
        id: `${date}-sg-${e.id}`,
        metroId,
        date,
        start: e.time_tbd ? null : e.datetime_local.slice(11, 16),
        kind,
        title: kind === 'show' ? performer : e.title.trim(),
        ...(kind === 'show' && e.title.trim().toLowerCase() !== performer.toLowerCase() ? { officialTitle: e.title.trim() } : {}),
        place: { type: 'venue', venueId: venue.id },
        audience: { domain: 'music', genre: 'Other' },
        performer,
        crowd: [],
        sourceId: 'seatgeek',
      });
    }
    const total = json.meta?.total ?? 0;
    if (page * PER_PAGE >= total || (json.events ?? []).length === 0) break;
  }
  return events;
}

/** SeatGeek shows Ticketmaster already lists (the shared one-show key) are left out: one show is counted once. */
export function dropShowsTicketmasterHas(seatgeek: readonly CrowdEvent[], ticketmaster: readonly CrowdEvent[]): CrowdEvent[] {
  const tm = new Set<string>();
  for (const e of ticketmaster) {
    if (e.place.type !== 'venue') continue;
    for (const k of showKeys(e.date, e.place.venueId, e.performer ?? e.title, e.officialTitle ?? e.title)) tm.add(k);
  }
  return seatgeek.filter((e) => e.place.type !== 'venue' || !showKeys(e.date, e.place.venueId, e.performer ?? e.title, e.officialTitle ?? e.title).some((k) => tm.has(k)));
}
