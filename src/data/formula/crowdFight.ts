// Crowd fight (formula v4, Oct 5, 2026): fans choosing between events.
// Per event: the competitors' share of seats, weighted by overlap, pull and time,
// combined so each extra competitor adds less. The date: contested seats on a log scale.
// Every constant is a placeholder to tune on attendance data with held-out dates.

import type { Friction } from '../../config/scoreLabels';
import { eventFeedsFriction, listedCapacity } from '../read';
import type { CrowdEvent } from '../types';
import { occasionFor, PULL } from './occasion';
import { overlapTier, TIER_WEIGHT, type Tier } from './overlap';

/** Typical length, hours, by type. Used for the time factor. */
const DURATION: Record<string, number> = { football: 3.25, baseball: 2.75, basketball: 2.5, hockey: 2.5, soccer: 2, concert: 3 };
/** When a start time is missing: a typical start by type (local hour). The read is then labeled estimated. */
const DEFAULT_START: Record<string, number> = { football: 13.1, baseball: 19.2, basketball: 19.5, hockey: 19.5, soccer: 19.5, concert: 20 };
/** Seats-in-a-fight that reads as a Spicy night in LA: 0.2 × the median capacity of the city's 15k+ venues. */
const S0_BY_METRO: Record<string, number> = { la: 10000 };
const S0_DEFAULT = 10000;
/** Event score = 1 + 14 × D; the 14 is anchored so two equal events fully overlapping read about 8. */
const EVENT_SCALE = 14;
/** Date score = 1 + 2.5 × log2(1 + C / S0). */
const DATE_SCALE = 2.5;

function kindOf(event: CrowdEvent): string {
  return event.audience.domain === 'sports' ? event.audience.sport : 'concert';
}

function durationOf(event: CrowdEvent): number {
  return DURATION[kindOf(event)] ?? 2.5;
}

function startHour(event: CrowdEvent): { hour: number; estimated: boolean } {
  if (event.start) {
    const [h, m] = event.start.split(':').map(Number);
    return { hour: h + m / 60, estimated: false };
  }
  return { hour: DEFAULT_START[kindOf(event)] ?? 19.5, estimated: true };
}

/**
 * Time factor: 1 when the windows overlap, decaying to 0 over four hours of gap
 * (the earlier event's end plus a one-hour travel buffer to the later start).
 * Capped at 0.5 when either start is a default, since the overlap is a guess.
 */
export function timeFactor(a: CrowdEvent, b: CrowdEvent): number {
  const sa = startHour(a);
  const sb = startHour(b);
  const [first, second, firstStart, secondStart] = sa.hour <= sb.hour ? [a, b, sa.hour, sb.hour] : [b, a, sb.hour, sa.hour];
  const gap = secondStart - (firstStart + durationOf(first) + 1);
  const t = Math.max(0, Math.min(1, 1 - gap / 4));
  void second;
  return sa.estimated || sb.estimated ? Math.min(t, 0.5) : t;
}

export interface Competitor {
  event: CrowdEvent;
  tier: Tier;
  t: number;
  /** This competitor's share of the fight, before combining. */
  d: number;
}

export interface EventCrowdFight {
  event: CrowdEvent;
  /** Share of this event's buyers in a fight, 0–1. */
  D: number;
  /** 1–10. */
  score: number;
  verdict: Friction;
  competitors: Competitor[];
  /** True when a start time or capacity was guessed. */
  estimated: boolean;
}

export interface DateCrowdFight {
  /** Seats in a fight across the night. */
  contestedSeats: number;
  totalSeats: number;
  /** 1–10. */
  score: number;
  events: EventCrowdFight[];
  /** The event whose pull touches the most contested seats. */
  topPuller: CrowdEvent | null;
}

/** The friction word from an event's score. Placeholder bands. */
export function verdictFromScore(score: number): Friction {
  if (score < 3) return 'Low';
  if (score < 5.5) return 'Moderate';
  if (score < 8) return 'Heavy';
  return 'Extreme';
}

function capacityOf(event: CrowdEvent): { cap: number; estimated: boolean } {
  const cap = listedCapacity(event);
  if (cap) return { cap, estimated: false };
  const known = Math.max(0, ...event.crowd.map((c) => c.count ?? 0));
  return { cap: known || 5000, estimated: true };
}

/** One event's Crowd fight against the others that date. Invited events neither pull nor get pulled. */
export function eventCrowdFight(event: CrowdEvent, sameDate: readonly CrowdEvent[]): EventCrowdFight {
  const me = capacityOf(event);
  const mE = PULL[occasionFor(event)];
  const competitors: Competitor[] = [];
  let product = 1;
  let estimated = me.estimated || !event.start;
  if (!event.invited) {
    for (const other of sameDate) {
      if (other.id === event.id || other.invited || !eventFeedsFriction(other)) continue;
      const cap = capacityOf(other);
      const tier = overlapTier(event, other);
      const t = timeFactor(event, other);
      const mc = PULL[occasionFor(other)];
      const d = TIER_WEIGHT[tier] * t * (mc * cap.cap) / (mE * me.cap + mc * cap.cap);
      if (cap.estimated || !other.start) estimated = true;
      product *= 1 - d;
      competitors.push({ event: other, tier, t, d });
    }
  }
  const D = 1 - product;
  const score = Math.min(10, 1 + EVENT_SCALE * D);
  competitors.sort((a, b) => b.d - a.d);
  return { event, D, score, verdict: verdictFromScore(score), competitors, estimated };
}

/** The date's Crowd fight: contested seats across every event of 5,000+ that date. */
export function dateCrowdFight(metroId: string, sameDate: readonly CrowdEvent[]): DateCrowdFight {
  const events = sameDate.map((event) => eventCrowdFight(event, sameDate));
  let contested = 0;
  let total = 0;
  const pulled = new Map<string, number>();
  for (const row of events) {
    if (!eventFeedsFriction(row.event) || row.event.invited) continue;
    const cap = capacityOf(row.event).cap;
    total += cap;
    contested += cap * row.D;
    for (const c of row.competitors) pulled.set(c.event.id, (pulled.get(c.event.id) ?? 0) + cap * c.d);
  }
  const s0 = S0_BY_METRO[metroId] ?? S0_DEFAULT;
  const score = Math.min(10, 1 + DATE_SCALE * Math.log2(1 + contested / s0));
  let topPuller: CrowdEvent | null = null;
  let best = 0;
  for (const [id, seats] of pulled) {
    if (seats > best) {
      best = seats;
      topPuller = sameDate.find((e) => e.id === id) ?? null;
    }
  }
  return { contestedSeats: contested, totalSeats: total, score, events, topPuller };
}
