// Concerts the other feeds miss, from JamBase Data's API (Kylie, Oct 21, 2026, evening: "yes" to the free Developer
// plan, with the capture stopped at the quota so nothing can bill; docs/research/topics/event-capture-alternatives-
// answer.md). JamBase ingests AXS, DICE, See Tickets, Eventbrite, eTix, Tixr and venue-direct feeds, the sellers the
// app cannot read itself. Music only. For the nightly job only: the key never reaches the app, and the job skips this
// source when JAMBASE_API_KEY is not set.
//
// 🚩 The Developer plan is $0 for 1,000 calls a month and bills $0.05 per call over it, so every run reads
// /quota first and stops while a reserve is left (QUOTA_RESERVE), and only the metros in JAMBASE_METROS are read.
// Terms (data.jambase.com/legal/developer-terms, v1.3.1): non-commercial; a visible "Concert data by JamBase" credit
// linked to jambase.com wherever its data shows, and each event's ticket link exactly as the API returns it (the
// event page shows both for a JamBase row). Same storage rule as the other feeds: the facts of a night, nothing more.
//
// Field names follow the API's published OpenAPI document (data.jambase.com/openapi.json, read Oct 21, 2026): an
// Event has name, identifier, url, eventStatus, startDate, location (a MusicVenue with name, address, geo), performer
// (MusicGroups) and offers (ticket links); x-externalIdentifiers carries other sellers' ids. A missing field fails
// safe: the row is skipped.

import { METROS } from '../../config/metros';
import type { CrowdEvent, LocalDate } from '../types';
import { isAddOnListing } from './addOns';
import { showKeys, venueByNameOrPlace, venueClosedOn } from './venueMatch';

const API = 'https://api.data.jambase.com/v3';
const DAYS_AHEAD = 120;
const PER_PAGE = 100;
const MAX_PAGES = 8;
const RADIUS_MILES = 60;
/** Calls left on the month that the job will not touch: a hard stop well before the plan's quota. */
export const QUOTA_RESERVE = 150;
/** The cities JamBase is read for (each costs a few calls a night; the quota decides how many cities fit). */
export const JAMBASE_METROS = ['la'];
/** Sellers the app does not read itself. Ticketmaster rows are already captured; resale rows are left out. */
const SOURCES = ['axs', 'dice', 'etix', 'eventbrite', 'jambase', 'seated', 'see-tickets', 'sofar-sounds', 'tixr'];

interface JbEvent {
  '@type'?: string;
  name?: string;
  identifier?: string;
  url?: string;
  eventStatus?: string;
  startDate?: string;
  location?: { name?: string; identifier?: string; address?: { addressLocality?: string; 'x-timezone'?: string }; geo?: { latitude?: number; longitude?: number } };
  performer?: { name?: string; identifier?: string; genre?: { name?: string }[] | { name?: string } }[];
  offers?: { url?: string; category?: string; seller?: { name?: string } }[];
  'x-externalIdentifiers'?: { source?: string; identifier?: string }[];
}

export interface JambaseQuota {
  plan?: string;
  quota?: number | null;
  usedCalls?: number;
  remainingCalls?: number | null;
  overageCalls?: number;
  noMonthlyCap?: boolean;
}

export interface JambasePull {
  events: CrowdEvent[];
  quota: JambaseQuota | null;
  /** Why nothing was read, when the quota guard stopped the run. */
  skipped?: string;
  calls: number;
}

function addDays(date: LocalDate, days: number): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

function localParts(iso: string, timeZone: string): { date: LocalDate; time: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

async function call(path: string, key: string): Promise<unknown> {
  const r = await fetch(`${API}${path}`, { headers: { Authorization: `Bearer ${key}`, Accept: 'application/json' } });
  if (!r.ok) throw new Error(`JamBase answered ${r.status} for ${path.split('?')[0]}`);
  return r.json();
}

/** The month's usage, read before any events call. */
export async function readJambaseQuota(key: string): Promise<JambaseQuota> {
  return (await call('/quota', key)) as JambaseQuota;
}

/**
 * One city's concerts and festivals at venues we know, from the sellers Ticketmaster's feed lacks. Reads the quota
 * first and returns nothing when fewer than QUOTA_RESERVE calls are left or the plan's cap is unknown. Throws when
 * JamBase can't be read, so the job can log it and carry on.
 */
export async function loadJambaseEvents(metroId: string, key: string, quota?: JambaseQuota): Promise<JambasePull> {
  const metro = METROS[metroId];
  if (!metro) return { events: [], quota: null, calls: 0 };
  let calls = 0;
  const q = quota ?? (await readJambaseQuota(key));
  if (!quota) calls++;
  if (!q.noMonthlyCap && (q.remainingCalls == null || q.remainingCalls < QUOTA_RESERVE)) {
    return { events: [], quota: q, calls, skipped: `quota guard: ${q.remainingCalls ?? 'unknown'} calls left this month, reserve ${QUOTA_RESERVE}` };
  }
  const today = new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addDays(today, DAYS_AHEAD);
  const [lng, lat] = metro.center;
  const events: CrowdEvent[] = [];
  const shows = new Set<string>();
  for (let page = 1; page <= MAX_PAGES; page++) {
    const params = new URLSearchParams({
      geoLatitude: String(lat), geoLongitude: String(lng), geoRadiusAmount: String(RADIUS_MILES), geoRadiusUnits: 'mi',
      eventDateFrom: today, eventDateTo: through, eventDataSource: SOURCES.join('|'),
      perPage: String(PER_PAGE), page: String(page), sort: 'eventDate', expandExternalIdentifiers: 'true',
    });
    const json = (await call(`/events?${params}`, key)) as { events?: JbEvent[]; pagination?: { totalPages?: number; page?: number } };
    calls++;
    for (const e of json.events ?? []) {
      if (!e.name || !e.startDate || !e.location?.name) continue;
      if (e.eventStatus === 'cancelled' || e.eventStatus === 'postponed') continue;
      const timeZone = e.location.address?.['x-timezone'] || metro.timeZone;
      const hasTime = /T\d{2}:\d{2}/.test(e.startDate);
      const { date, time } = hasTime ? localParts(e.startDate, timeZone) : { date: e.startDate.slice(0, 10), time: null as string | null };
      if (date < today || date > through) continue;
      const geo = e.location.geo;
      const venue = venueByNameOrPlace(metroId, e.location.name, geo?.latitude, geo?.longitude, date);
      if (!venue || venueClosedOn(venue, date)) continue;
      const kind: CrowdEvent['kind'] = e['@type'] === 'Festival' ? 'festival' : 'show';
      const acts = (e.performer ?? []).map((p) => p.name).filter((n): n is string => Boolean(n));
      if (isAddOnListing(e.name, kind, { acts })) continue;
      const performer = (acts[0] ?? e.name).trim();
      const keys = showKeys(date, venue.id, performer, e.name);
      if (keys.some((k) => shows.has(k))) continue;
      keys.forEach((k) => shows.add(k));
      const g = e.performer?.[0]?.genre;
      const genre = (Array.isArray(g) ? g[0]?.name : g?.name) ?? 'Other';
      const ticketUrl = e.offers?.find((o) => o.url)?.url ?? e.url;
      const tm = e['x-externalIdentifiers']?.find((x) => x.source === 'ticketmaster')?.identifier;
      const id = (e.identifier ?? `${venue.id}-${performer}`).replace(/[^a-z0-9]+/gi, '-');
      events.push({
        id: `${date}-jb-${id}`,
        metroId,
        date,
        start: time,
        kind,
        title: kind === 'show' ? performer : e.name.trim(),
        ...(kind === 'show' && e.name.trim().toLowerCase() !== performer.toLowerCase() ? { officialTitle: e.name.trim() } : {}),
        place: { type: 'venue', venueId: venue.id },
        audience: { domain: 'music', genre },
        performer,
        act: acts.length > 0,
        ...(ticketUrl ? { ticketUrl } : {}),
        ...(tm ? { ticketmasterId: tm } : {}),
        crowd: [],
        sourceId: 'jambase',
      });
    }
    const total = json.pagination?.totalPages ?? 1;
    if (page >= total || (json.events ?? []).length === 0) break;
  }
  return { events, quota: q, calls };
}
