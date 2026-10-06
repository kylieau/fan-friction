// The rating formula (v4). Today: Crowd fight. Conditions and Gridlock come next;
// `rateDate` already combines whatever reasons exist with the v4 rule.
// Screens never call this directly; the read pipeline in `read.ts` will.

import { formatScore } from '../../config/scoreLabels';
import { listedCapacity } from '../read';
import type { CrowdEvent } from '../types';
import { weatherForEvent } from '../weather';
import { dateCrowdFight, type DateCrowdFight } from './crowdFight';
import { dateConditions, eventConditions, type EventConditions, weatherGlyph } from './weather';
import { dateGridlock, gridlockWhy, type DateGridlock } from './gridlock';

export { eventCrowdFight, dateCrowdFight, timeFactor, verdictFromScore } from './crowdFight';
export { occasionFor, occasionPoints, occasionFromPoints } from './occasion';
export { overlapTier, isBroad } from './overlap';
export { eventConditions, dateConditions, weatherGlyph, feelsLikeLabel, isOpenAir } from './weather';
export { dateGridlock, zonesFor } from './gridlock';

export interface Reason {
  name: 'Crowd fight' | 'Gridlock' | 'Conditions';
  score: number;
  why: string;
}

export interface DateRead {
  rating: number;
  reasons: Reason[];
  /** The reason that set the rating. */
  lead: Reason | null;
  why: string;
  crowdFight: DateCrowdFight;
  /** Per open-air event with stored weather. */
  conditions: { event: CrowdEvent; conditions: EventConditions }[];
  gridlock: DateGridlock;
  /** Firm: every input known. Likely: one guessed. Early: more than one, or far out. */
  confidence: 'Firm' | 'Likely' | 'Early';
}

/** rating = max(R) + 0.25 × Σ(other R − 3)⁺, capped at 10. */
export function combine(scores: number[]): number {
  if (scores.length === 0) return 1;
  const top = Math.max(...scores);
  const rest = scores.filter((s) => s !== top);
  const extra = rest.reduce((sum, s) => sum + Math.max(0, s - 3), 0);
  return Math.min(10, top + 0.25 * extra);
}

const fmt = (n: number) => Math.round(n).toLocaleString('en-US');

/** "World Series Game 1 pulls on five other crowds." The seat figure is a detail line, not the headline. */
function crowdFightWhy(cf: DateCrowdFight): string {
  const big = cf.events.filter((row) => row.competitors.length > 0);
  if (cf.contestedSeats < 1000 || big.length === 0) return 'Nothing else big that night.';
  const n = cf.events.filter((row) => !row.event.invited && row.competitors.length > 0).length;
  const puller = cf.topPuller;
  if (puller && n >= 2) {
    const others = n - 1;
    return `${puller.title} pulls on ${COUNT[others] ?? others} other ${others === 1 ? 'crowd' : 'crowds'}.`;
  }
  return `${COUNT[n] ?? n} crowds in a fight.`;
}

const COUNT = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/** The seat figure behind the Crowd fight line, for the date page's detail line. */
export function crowdFightDetail(cf: DateCrowdFight): string {
  if (cf.contestedSeats < 1000) return '';
  const n = cf.events.filter((row) => !row.event.invited && row.competitors.length > 0).length;
  return `${fmt(cf.contestedSeats)} seats in a fight across ${n} ${n === 1 ? 'event' : 'events'}.`;
}

function conditionsWhy(rows: { event: CrowdEvent; conditions: EventConditions }[]): string {
  const worst = [...rows].sort((a, b) => b.conditions.w - a.conditions.w)[0];
  if (!worst || worst.conditions.w === 0) return 'Nothing in the weather.';
  const c = worst.conditions;
  const start = worst.event.start ? ` at a ${clock(worst.event.start)} start` : '';
  if (c.cause === 'heat') return `${Math.round(c.effectiveF)}° feels-like${start}, no roof (${worst.event.title}).`;
  if (c.cause === 'rain') return `${weatherGlyph(c.row)} Rain in the forecast${start} (${worst.event.title}).`;
  return `${Math.round(c.row.feelsLikeF)}° feels-like${start}, no roof (${worst.event.title}).`;
}

function clock(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}

/** Rate one date in a city from its events. Crowd fight and Conditions; Gridlock next. */
export function rateDate(metroId: string, events: readonly CrowdEvent[], before?: Date): DateRead {
  const crowdFight = dateCrowdFight(metroId, events);
  const reasons: Reason[] = [{ name: 'Crowd fight', score: crowdFight.score, why: crowdFightWhy(crowdFight) }];
  const conditions = events
    .map((event) => ({ event, conditions: eventConditions(event, weatherForEvent(event, before)) }))
    .filter((row): row is { event: CrowdEvent; conditions: EventConditions } => row.conditions !== null);
  const condScore = dateConditions(conditions.map((row) => ({ capacity: listedCapacity(row.event) ?? 0, conditions: row.conditions })));
  if (condScore !== null) reasons.push({ name: 'Conditions', score: condScore, why: conditionsWhy(conditions) });
  const date = events[0]?.date ?? '';
  const rainy = new Set(conditions.filter((row) => row.conditions.cause === 'rain').map((row) => row.event.id));
  const gridlock = dateGridlock(metroId, date, events, rainy);
  if (events.length > 0) reasons.push({ name: 'Gridlock', score: gridlock.score, why: gridlockWhy(gridlock, date) });
  const rating = Number(formatScore(combine(reasons.map((r) => r.score))));
  const lead = reasons.reduce<Reason | null>((best, r) => (best === null || r.score > best.score ? r : best), null);
  const guessed = crowdFight.events.filter((row) => row.estimated).length;
  const confidence = guessed === 0 ? 'Firm' : guessed === 1 ? 'Likely' : 'Early';
  return { rating, reasons, lead, why: lead?.why ?? '', crowdFight, conditions, gridlock, confidence };
}
