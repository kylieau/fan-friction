// Gridlock (formula v4, lightest form, Oct 5, 2026): everyone converging on the
// same roads at the same time, whether or not they like the same things.
// Needs only venue locations, capacities, start times and a city type.
// Zones are venues within 2 km. Nearby zones leak a little load into each other.
// A zone is scored against its own normal night on a log scale: normal = 1,
// a quarter more = 3.4, half more = 5.4, double = 8.5.
// The full zone design (road shares, rail, choke points) waits for a season of stamps.

import { METROS } from '../../config/metros';
import { milesBetween } from '../../lib/windows';
import { drawSize, eventFeedsFriction } from '../read';
import type { CrowdEvent, LngLat } from '../types';
import { isStrained, VENUES } from '../venues';

const ZONE_MILES = 1.25; // about 2 km
const NEAR_MILES = 4; // about 12 minutes in a sprawl city
const FAR_MILES = 9.5; // about 30 minutes
const SPILL_NEAR: Record<string, number> = { sprawl: 0.15, hub: 0.15, transit: 0.1 };
const SPILL_FAR = 0.05;
const ARRIVAL_HOURS = 2;
const EXIT_HOURS = 1;
const DURATION: Record<string, number> = { football: 3.25, baseball: 2.75, basketball: 2.5, hockey: 2.5, soccer: 2, concert: 3 };
const DEFAULT_START: Record<string, number> = { football: 13.1, baseball: 19.2, basketball: 19.5, hockey: 19.5, soccer: 19.5, concert: 20 };
const SCALE = 7.5;

/** City type: drive-centric sprawl, destination hub, or transit-dominant. Others default to sprawl. */
// Seattle is a hub (research, Oct 6, 2026, docs/seattle-city-type-answer.md): in between. Core crowds run 37–70% by
// car (Husky Stadium 37% observed, Lumen Field 60%, Climate Pledge Arena ~63%), the suburbs 85–95%. Every Seattle
// venue carries its own carShare, so this default only covers a room without one.
// New York is also a hub, not transit (research, Oct 6, 2026, docs/new-york-city-type-answer.md): ~60% of a big crowd
// arrives by car, weighted by seats. The ballparks broke the assumption — Citi Field ~60% car, Yankee Stadium ~50%.
// Only the rail-hub buildings (MSG, Barclays, Radio City) are transit-tier; Long Island and the Meadowlands drive.
// Chicago and Boston are still assumptions; research them before covering either (Kylie: never assume a city's type).
const CITY_TYPE: Record<string, 'sprawl' | 'hub' | 'transit'> = { la: 'sprawl', 'san-diego': 'sprawl', seattle: 'hub', 'new-york': 'hub', chicago: 'transit', boston: 'transit' };

/** Names for zones people know. Anything else is named after its largest venue. */
const ZONE_NAMES: Record<string, string> = {
  'crypto-com-arena': 'Downtown',
  'dodger-stadium': 'Dodger Stadium',
  coliseum: 'Exposition Park',
  'bmo-stadium': 'Exposition Park',
  'sofi-stadium': 'Inglewood',
  'intuit-dome': 'Inglewood',
  'kia-forum': 'Inglewood',
  'hollywood-bowl': 'Hollywood Bowl',
  'rose-bowl': 'Pasadena',
  'dignity-health-sports-park': 'Carson',
  'angel-stadium': 'Anaheim',
  'honda-center': 'Anaheim',
  // Seattle
  'lumen-field': 'SoDo',
  't-mobile-park': 'SoDo',
  'wamu-theater': 'SoDo',
  'climate-pledge-arena': 'Seattle Center',
  'seattle-center': 'Seattle Center',
  'memorial-stadium-seattle': 'Seattle Center',
  'husky-stadium': 'University District',
  'alaska-airlines-arena': 'University District',
  'tacoma-dome': 'Tacoma Dome',
  'accesso-showare-center': 'Kent',
  'angel-of-the-winds-arena': 'Everett',
  'everett-memorial-stadium': 'Everett',
  'white-river-amphitheatre': 'Auburn',
  'emerald-downs': 'Auburn',
};

export interface Zone {
  id: string;
  name: string;
  venueIds: string[];
  center: LngLat;
  /** Seats of the largest room in the zone: a normal night's flow. */
  largest: number;
}

export interface ZoneScore {
  zone: Zone;
  events: CrowdEvent[];
  load: number;
  normal: number;
  background: number;
  score: number;
}

export interface DateGridlock {
  score: number;
  zones: ZoneScore[];
  /** The zone that set the score. */
  worst: ZoneScore | null;
  /** Each event's own getting-there score: its zone's. */
  byEvent: Map<string, number>;
}

function kindOf(event: CrowdEvent): string {
  return event.audience.domain === 'sports' ? event.audience.sport : 'concert';
}

function startHour(event: CrowdEvent): number {
  if (event.start) {
    const [h, m] = event.start.split(':').map(Number);
    return h + m / 60;
  }
  return DEFAULT_START[kindOf(event)] ?? 19.5;
}

function endHour(event: CrowdEvent): number {
  return startHour(event) + (DURATION[kindOf(event)] ?? 2.5);
}

function capacityOf(event: CrowdEvent): number {
  return drawSize(event) ?? Math.max(0, ...event.crowd.map((c) => c.count ?? 0)) ?? 0;
}

function venueCapacityMax(venueId: string, date: string): number {
  const venue = VENUES[venueId];
  if (!venue) return 0;
  const year = Number(date.slice(0, 4));
  return Math.max(0, ...venue.capacity.filter((c) => (c.fromYear ?? 0) <= year).map((c) => c.seats));
}

/** Cluster a metro's venues into zones (venues within about 2 km of one another). */
export function zonesFor(metroId: string, date: string): Zone[] {
  const venues = Object.values(VENUES).filter((v) => v.metroId === metroId);
  const zones: Zone[] = [];
  for (const venue of venues) {
    const home = zones.find((z) => milesBetween(z.center, venue.location) <= ZONE_MILES);
    if (home) {
      home.venueIds.push(venue.id);
      home.largest = Math.max(home.largest, venueCapacityMax(venue.id, date));
      if (!ZONE_NAMES[home.venueIds[0]] && ZONE_NAMES[venue.id]) home.name = ZONE_NAMES[venue.id];
    } else {
      zones.push({
        id: venue.id,
        name: ZONE_NAMES[venue.id] ?? venue.names[venue.names.length - 1].name,
        venueIds: [venue.id],
        center: venue.location,
        largest: venueCapacityMax(venue.id, date),
      });
    }
  }
  return zones;
}

function spillWeight(from: Zone, to: Zone, cityType: string): number {
  const miles = milesBetween(from.center, to.center);
  if (miles <= NEAR_MILES) return SPILL_NEAR[cityType] ?? 0.15;
  if (miles <= FAR_MILES) return SPILL_FAR;
  return 0;
}

/** Seats on the road in a zone at an hour: arrivals two hours before a start, exits an hour after the end. */
function activeSeats(events: readonly CrowdEvent[], hour: number): number {
  let seats = 0;
  for (const e of events) {
    const start = startHour(e);
    const end = endHour(e);
    const arriving = hour >= start - ARRIVAL_HOURS && hour < start;
    const leaving = hour >= end && hour < end + EXIT_HOURS;
    if (arriving || leaving) seats += capacityOf(e);
  }
  return seats;
}

/** Time-of-day background: weekday rush when any arrival window touches 4–7:30 pm; Friday worse; Sunday mornings easier; rain. */
function backgroundFor(
  events: readonly CrowdEvent[],
  date: string,
  rain: boolean,
  strainedCarShare: number | null,
): number {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay(); // 0 Sunday … 6 Saturday
  let factor = 1;
  const rush = events.some((e) => {
    const start = startHour(e);
    return start - ARRIVAL_HOURS < 19.5 && start > 16;
  });
  if (day >= 1 && day <= 5 && rush) factor = day === 5 ? 1.4 : 1.3;
  else if (day === 0 && events.every((e) => startHour(e) < 14)) factor = 0.9;
  if (rain) factor *= 1.15;
  if (strainedCarShare !== null) factor *= hardAccessFactor(strainedCarShare);
  return factor;
}

/**
 * The hard-access multiplier (docs/hard-access-weight-answer.md, Oct 6, 2026).
 * ×1.25 where everyone drives, scaled by the share of fans who drive to that
 * venue: the penalty is a car's problem, and transit share belongs to the
 * venue, not the city. A placeholder: the research puts the true effect at
 * or above this, but the read already compares a hillside venue to its own
 * quiet normal, so stacking more on top made a lone Monday game read mid.
 * The better rule, cars per outbound exit lane, waits for lane counts.
 */
export const HARD_ACCESS_BASE = 1.25;
export const CAR_SHARE_REFERENCE = 0.85;
export function hardAccessFactor(carShare: number): number {
  return 1 + (HARD_ACCESS_BASE - 1) * (carShare / CAR_SHARE_REFERENCE);
}

/** The share of fans who drive, until a venue has its own figure. */
const CAR_SHARE_BY_CITY: Record<'sprawl' | 'hub' | 'transit', number> = { sprawl: 0.85, hub: 0.85, transit: 0.4 };

/** Gridlock for one date in a city. `rainy` lists events with rain in their forecast. */
export function dateGridlock(metroId: string, date: string, events: readonly CrowdEvent[], rainy: ReadonlySet<string> = new Set()): DateGridlock {
  const cityType = CITY_TYPE[metroId] ?? 'sprawl';
  const zones = zonesFor(metroId, date);
  const big = events.filter((e) => eventFeedsFriction(e) && e.place.type === 'venue');
  const inZone = new Map<string, CrowdEvent[]>();
  for (const e of big) {
    if (e.place.type !== 'venue') continue;
    const zone = zones.find((z) => z.venueIds.includes(e.place.type === 'venue' ? e.place.venueId : ''));
    if (!zone) continue;
    inZone.set(zone.id, [...(inZone.get(zone.id) ?? []), e]);
  }
  const scored: ZoneScore[] = [];
  const byEvent = new Map<string, number>();
  for (const zone of zones) {
    const mine = inZone.get(zone.id) ?? [];
    if (mine.length === 0) continue;
    // Peak hour across the day: own seats plus a share of the neighbours' seats on the road at the same hour.
    let peak = 0;
    for (let hour = 0; hour < 24; hour += 0.5) {
      let seats = activeSeats(mine, hour);
      for (const other of zones) {
        if (other.id === zone.id) continue;
        const weight = spillWeight(other, zone, cityType);
        if (weight > 0) seats += weight * activeSeats(inZone.get(other.id) ?? [], hour);
      }
      peak = Math.max(peak, seats);
    }
    // A normal night here: the largest room full, plus the usual spill from the neighbours' largest rooms.
    let normal = zone.largest;
    for (const other of zones) {
      if (other.id === zone.id) continue;
      normal += spillWeight(other, zone, cityType) * other.largest;
    }
    const rain = mine.some((e) => rainy.has(e.id));
    // The hard-access venue in the zone with the most driving, if any.
    let strainedCarShare: number | null = null;
    for (const e of mine) {
      const venue = e.place.type === 'venue' ? VENUES[e.place.venueId] : undefined;
      if (!venue || !isStrained(venue)) continue;
      const share = venue.carShare ?? CAR_SHARE_BY_CITY[cityType];
      strainedCarShare = Math.max(strainedCarShare ?? 0, share);
    }
    const background = backgroundFor(mine, date, rain, strainedCarShare);
    const ratio = normal > 0 ? (background * peak) / normal : 1;
    const score = Math.max(1, Math.min(10, 1 + SCALE * Math.log2(Math.max(ratio, 0.01))));
    scored.push({ zone, events: mine, load: peak, normal, background, score });
    for (const e of mine) byEvent.set(e.id, score);
  }
  scored.sort((a, b) => b.score - a.score);
  const worst = scored[0] ?? null;
  const extra = scored.slice(1).reduce((sum, z) => sum + Math.max(0, z.score - 5), 0);
  const score = worst ? Math.min(10, worst.score + 0.25 * extra) : 1;
  void METROS;
  return { score, zones: scored, worst, byEvent };
}

/** "Inglewood: Beyoncé and Rauw Alejandro arriving together, Monday evening." */
export function gridlockWhy(g: DateGridlock, date: string): string {
  const z = g.worst;
  if (!z || z.score < 2) return 'Roads about normal for the venues in play.';
  const names = z.events.map((e) => e.title);
  const who = names.length <= 2 ? names.join(' and ') : `${names.slice(0, 2).join(', ')} and ${names.length - 2} more`;
  const day = new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
  const when = z.events.every((e) => startHour(e) < 14) ? 'afternoon' : 'evening';
  const together = z.events.length > 1 ? 'arriving together' : 'alone';
  return `${z.zone.name}: ${who} ${together}, ${day} ${when}.`;
}
