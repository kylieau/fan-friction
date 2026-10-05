// The rating formula (v4). Today: Crowd fight. Conditions and Gridlock come next;
// `rateDate` already combines whatever reasons exist with the v4 rule.
// Screens never call this directly; the read pipeline in `read.ts` will.

import { formatScore } from '../../config/scoreLabels';
import type { CrowdEvent } from '../types';
import { dateCrowdFight, type DateCrowdFight } from './crowdFight';

export { eventCrowdFight, dateCrowdFight, timeFactor, verdictFromScore } from './crowdFight';
export { occasionFor, occasionPoints, occasionFromPoints } from './occasion';
export { overlapTier, isBroad } from './overlap';

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

function crowdFightWhy(cf: DateCrowdFight): string {
  const big = cf.events.filter((row) => row.competitors.length > 0);
  if (cf.contestedSeats < 1000 || big.length === 0) return 'Nothing else big that night.';
  const n = cf.events.filter((row) => !row.event.invited && row.competitors.length > 0).length;
  const puller = cf.topPuller;
  const head = `${n} big ${n === 1 ? 'event' : 'events'}, ${fmt(cf.contestedSeats)} seats in a fight`;
  return puller ? `${head}; ${puller.title} pulls on most of them.` : `${head}.`;
}

/** Rate one date in a city from its events. Only Crowd fight so far. */
export function rateDate(metroId: string, events: readonly CrowdEvent[]): DateRead {
  const crowdFight = dateCrowdFight(metroId, events);
  const reasons: Reason[] = [{ name: 'Crowd fight', score: crowdFight.score, why: crowdFightWhy(crowdFight) }];
  const rating = Number(formatScore(combine(reasons.map((r) => r.score))));
  const lead = reasons.reduce<Reason | null>((best, r) => (best === null || r.score > best.score ? r : best), null);
  const guessed = crowdFight.events.filter((row) => row.estimated).length;
  const confidence = guessed === 0 ? 'Firm' : guessed === 1 ? 'Likely' : 'Early';
  return { rating, reasons, lead, why: lead?.why ?? '', crowdFight, confidence };
}
