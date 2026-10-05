// Applies the formula to a date's events: one rating for the date, and on each
// event the computed occasion, friction verdict and why line, in the same
// `assessment` slot the screens already read. The hand calls in the seed stay in
// the seed files for comparison; what the app shows is the formula.

import type { Assessment, CrowdEvent, DateRating, LocalDate } from './types';
import { rateDate, occasionFor, type DateRead } from './formula';
import { verdictFromScore, type EventCrowdFight } from './formula/crowdFight';
import { milesBetween } from '../lib/windows';
import { VENUES } from './venues';
import { eventConditions } from './formula/weather';
import { weatherForEvent } from './weather';

function location(event: CrowdEvent): [number, number] | null {
  if (event.place.type === 'venue') return VENUES[event.place.venueId]?.location ?? null;
  if (event.place.type === 'point') return event.place.location;
  return event.place.path[0] ?? null;
}

/** "World Series Game 1 1.5 mi away, same hours." */
function eventWhy(row: EventCrowdFight, read: DateRead): string {
  const top = row.competitors[0];
  const cond = read.conditions.find((c) => c.event.id === row.event.id)?.conditions;
  const condScore = cond ? cond.score : 1;
  // Conditions lead when they outweigh the crowd fight for this event.
  if (cond && condScore > row.score && cond.w > 0) {
    const start = row.event.start ? ` at a ${clock(row.event.start)} start` : '';
    if (cond.cause === 'rain') return `Rain in the forecast${start}.`;
    if (cond.cause === 'cold') return `${Math.round(cond.row.feelsLikeF)}° feels-like${start}, no roof.`;
    return `${Math.round(cond.effectiveF)}° feels-like${start}, no roof.`;
  }
  if (!top || top.d < 0.03) return 'Nothing bigger was on.';
  const a = location(row.event);
  const b = location(top.event);
  const miles = a && b ? milesBetween(a, b) : null;
  const distance = miles === null ? '' : miles < 0.5 ? ' next door' : ` ${miles < 10 ? miles.toFixed(1) : Math.round(miles)} mi away`;
  const timing = top.t >= 0.99 ? 'same hours' : top.t >= 0.5 ? 'back to back' : 'earlier in the day';
  const second = row.competitors[1];
  const also = second && second.d >= top.d * 0.8 ? ` and ${second.event.title}` : '';
  return `${top.event.title}${also}${distance}, ${timing}.`;
}

function clock(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}

/** Fact chips from the facts the occasion rule read, plus a playoff round. */
function factChips(event: CrowdEvent): string[] {
  const chips: string[] = [];
  const f = event.occasionFacts ?? {};
  if (event.stakes?.round) chips.push(event.stakes.game ? `${event.stakes.round} G${event.stakes.game}` : event.stakes.round);
  if (f.final && !event.stakes?.round) chips.push('final');
  if (f.newMarket) chips.push('first game in LA');
  if (f.opener) chips.push('opener');
  if (f.farewell) chips.push(event.kind === 'show' ? 'farewell or tour opener' : 'farewell');
  if (f.rivalry) chips.push('rivalry');
  if (f.bothContending) chips.push('both contending');
  if (f.selloutAnnounced) chips.push('sold out');
  if (f.starReturn) chips.push('star return');
  if (f.storyline) chips.push('storyline');
  if (event.kind === 'show' || event.kind === 'festival') {
    const cap = event.place.type === 'venue' ? (VENUES[event.place.venueId]?.capacity.at(-1)?.seats ?? 0) : 0;
    chips.unshift(cap >= 40000 ? 'stadium headliner' : cap >= 12000 ? 'arena headliner' : 'theater');
  }
  return chips;
}

export interface FormulaResult {
  events: CrowdEvent[];
  rating: DateRating | null;
  read: DateRead;
}

/**
 * The formula's view of one date. Events come back with a computed assessment.
 * The rating is null only when there are no events at all (a quiet date).
 */
export function applyFormula(metroId: string, date: LocalDate, events: readonly CrowdEvent[], before?: Date): FormulaResult {
  if (events.length === 0) {
    return { events: [], rating: null, read: rateDate(metroId, [], before) };
  }
  const read = rateDate(metroId, events, before);
  const assessed = events.map((event) => {
    const row = read.crowdFight.events.find((r) => r.event.id === event.id);
    const cond = eventConditions(event, weatherForEvent(event, before));
    // The event's verdict is the louder of its crowd fight and its conditions.
    const score = Math.max(row?.score ?? 1, cond?.score ?? 1);
    const assessment: Assessment = {
      occasion: occasionFor(event),
      facts: factChips(event),
      friction: verdictFromScore(score),
      why: row ? eventWhy(row, read) : 'Nothing bigger was on.',
      status: 'formula',
    };
    return { ...event, assessment };
  });
  const rating: DateRating = {
    metroId,
    date,
    rating: read.rating,
    headline: read.why,
    squeezedMost: read.crowdFight.topPuller ? `pulled by ${read.crowdFight.topPuller.title}` : '',
    method: 'formula',
    notes: read.reasons.map((r) => `${r.name} ${r.score.toFixed(1)}: ${r.why}`).join(' '),
  };
  return { events: assessed, rating, read };
}
