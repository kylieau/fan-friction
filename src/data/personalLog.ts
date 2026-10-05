// Merges the seeded log with what she has marked on this phone.
// Screens reach this only through src/data/index.ts.

import { METROS } from '../config/metros';
import { listTitle } from '../lib/eventTitle';
import { TEAMS } from './teams';
import { venueNameOn, VENUES } from './venues';
import { KYLIE_LOG } from './seed/kylieLog';
import { nightStore, readSavedLog } from './storage';
import {
  asMetroNight,
  captureForecast,
  createStamp,
  frictionReadForEvent,
  isStampLocked,
  ratingFromNight,
  retainForecast,
  scheduleCoverage,
} from './night';
import { seedEventsOn, seedRatingFor } from './sources/seedSource';
import type { CrowdEvent, LoggedNight, NightForecast, NightPlan, NightStamp, PersonalLog, YouOrder } from './types';

export interface CountRow {
  label: string;
  count: number;
}

/** One labeled fact. Empty categories are left out by the callers. */
export interface LabeledFact {
  label: string;
  value: string;
}

export interface LogStats {
  /** Log entries, not unique evenings. */
  events: number;
  venues: number;
  /** Kind of event: game, show, festival, and so on. Concerts are included. */
  byType: CountRow[];
  byTeamSport: CountRow[];
  bySport: CountRow[];
  byVenue: CountRow[];
}

export interface NightBackup {
  app: 'Fan/Friction';
  exportedAt: string;
  order: YouOrder;
  nights: LoggedNight[];
  plans: NightPlan[];
}

let snapshot: PersonalLog = readSavedLog();
let saveWarning: string | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribePersonalLog(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getPersonalLog(): PersonalLog {
  return snapshot;
}

export function getSaveWarning(): string | null {
  return saveWarning;
}

function commit(next: PersonalLog) {
  snapshot = next;
  saveWarning = null;
  emit();
  nightStore.save(next).catch(() => {
    saveWarning = 'This phone blocked saving. Export a backup before you leave this page.';
    emit();
  });
}

function compareNights(a: LoggedNight, b: LoggedNight) {
  if (a.when.sort !== b.when.sort) return b.when.sort.localeCompare(a.when.sort);
  return a.title.localeCompare(b.title);
}

/** Seeded nights she hasn't removed, plus nights she marked, newest first. */
export function yourNights(log: PersonalLog = snapshot): LoggedNight[] {
  const hidden = new Set(log.hiddenSeedIds);
  const seeds = KYLIE_LOG.filter((night) => !hidden.has(night.id));
  const seedEvents = new Set(seeds.map((night) => night.eventId).filter((id): id is string => Boolean(id)));
  const added = log.added.filter((night) => !night.eventId || !seedEvents.has(night.eventId));
  return [...seeds, ...added].sort(compareNights);
}

export function isWasThere(eventId: string, log: PersonalLog = snapshot): boolean {
  const seed = KYLIE_LOG.find((night) => night.eventId === eventId);
  if (seed && !log.hiddenSeedIds.includes(seed.id)) return true;
  return log.added.some((night) => night.eventId === eventId);
}

function venueLabel(event: CrowdEvent): string | undefined {
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    return venue ? venueNameOn(venue, event.date) : undefined;
  }
  return event.place.name;
}

function sportLabel(sport: string): string {
  const names: Record<string, string> = {
    baseball: 'Baseball',
    basketball: 'Basketball',
    football: 'Football',
    hockey: 'Hockey',
    soccer: 'Soccer',
  };
  return names[sport] ?? sport;
}

/**
 * What kind of night it was. A game is named by its sport (Baseball, not Game).
 * A concert stays Show, or Festival / Live broadcast when that is the real kind.
 */
export function eventTypeLabel(kind: string, sport: string): string {
  if (kind === 'festival') return 'Festival';
  if (kind === 'live-broadcast') return 'Live Broadcast';
  if (kind === 'special') return 'Special';
  if (kind === 'show' || sport === 'Concerts') return 'Show';
  if (sport === 'WNBA') return "Women's basketball";
  return sport;
}

/** Separate labeled facts. Personal notes are not one of them. */
export function nightFacts(night: LoggedNight, scope: 'all' | 'before' = 'all'): LabeledFact[] {
  const facts: LabeledFact[] = [];
  if (night.result) facts.push({ label: 'Outcome', value: night.result });
  const type = eventTypeLabel(night.kind, night.sport);
  if (type) facts.push({ label: 'Type', value: type });
  if (night.starter) facts.push({ label: 'Starter', value: night.starter });
  if (night.promo) facts.push({ label: 'Promo', value: night.promo });
  if (night.notable) facts.push({ label: 'Notable', value: night.notable });
  if (scope === 'before') return facts.filter((fact) => fact.label === 'Starter' || fact.label === 'Promo');
  return facts;
}

/** Facts for an event page. A linked log night supplies anything she wrote down. */
export function eventFacts(event: CrowdEvent, logged?: LoggedNight): LabeledFact[] {
  if (logged) return nightFacts(logged);
  const sport = event.audience.domain === 'sports' ? sportLabel(event.audience.sport) : '';
  const type = eventTypeLabel(event.kind, sport);
  return type ? [{ label: 'Type', value: type }] : [];
}

function tagFor(teamId: string | undefined, sport: string): { tag: string; side: string } {
  const team = teamId ? TEAMS[teamId] : undefined;
  const side = team?.shortName ?? 'Sports';
  if (side === 'UCLA' || side === 'USC') {
    const abbr = sport === 'football' ? 'FB' : sport === 'basketball' ? 'MBB' : sport === 'baseball' ? 'Baseball' : sport;
    return { tag: `${side} ${abbr}`, side };
  }
  return { tag: side, side };
}

function withFloor(event: CrowdEvent, night: LoggedNight): LoggedNight {
  return event.belowFloor ? { ...night, belowFloor: true } : night;
}

function nightFromEvent(event: CrowdEvent): LoggedNight {
  const music = event.audience.domain === 'music' || event.kind === 'show' || event.kind === 'festival';
  if (music) {
    const name = event.performer ?? event.title;
    return withFloor(event, {
      id: `mark-${event.id}`,
      eventId: event.id,
      when: { sort: event.date, label: '', precision: 'day' },
      title: listTitle(event),
      tags: ['Concerts'],
      sport: 'Concerts',
      sides: [name],
      venue: venueLabel(event),
      inMetro: true,
      metroId: event.metroId,
      kind: event.kind,
    });
  }
  if (event.audience.domain === 'sports') {
    const sport = event.audience.sport;
    const { tag, side } = tagFor(event.teams?.home, sport);
    return withFloor(event, {
      id: `mark-${event.id}`,
      eventId: event.id,
      when: { sort: event.date, label: '', precision: 'day' },
      title: listTitle(event),
      tags: [tag],
      sport: sport ? sportLabel(sport) : 'Sports',
      sides: [side],
      venue: venueLabel(event),
      inMetro: true,
      metroId: event.metroId,
      kind: event.kind,
    });
  }
  const label = event.kind === 'live-broadcast' ? 'Live broadcast' : event.kind === 'special' ? 'Special' : 'Event';
  return withFloor(event, {
    id: `mark-${event.id}`,
    eventId: event.id,
    when: { sort: event.date, label: '', precision: 'day' },
    title: listTitle(event),
    tags: [label],
    sport: label,
    sides: [event.performer ?? event.title],
    venue: venueLabel(event),
    inMetro: true,
    metroId: event.metroId,
    kind: event.kind,
  });
}

/** Seeded events that night, plus this event when the live feed is the only copy. */
function eventsThatNight(event: CrowdEvent): CrowdEvent[] {
  const seeded = seedEventsOn(event.metroId, event.date);
  if (seeded.some((row) => row.id === event.id)) return seeded;
  return [...seeded, event];
}

/**
 * The read showing for this event right now, frozen.
 * Uses the hand scores and seeded events already in the app. No number is guessed.
 */
function forecastNow(event: CrowdEvent, recordedAt: string): NightForecast | undefined {
  const events = eventsThatNight(event);
  const rating = seedRatingFor(event.metroId, event.date);
  const read = frictionReadForEvent(event, events, rating);
  if (!read) return undefined;
  return captureForecast(read.read, recordedAt);
}

/**
 * The stamp, once 24 hours have passed since the last scheduled start that night.
 * A night with no saved schedule is marked reconstructed. Nothing is written before the lock.
 */
function stampNow(event: CrowdEvent, now: Date): NightStamp | undefined {
  const events = eventsThatNight(event);
  const night = asMetroNight(event.metroId, event.date, events);
  const zone = METROS[event.metroId]?.timeZone ?? 'America/Los_Angeles';
  if (!isStampLocked(night, zone, now)) return undefined;
  const rating = seedRatingFor(event.metroId, event.date);
  const read = frictionReadForEvent(event, events, rating);
  if (!read) return undefined;
  return createStamp(read.read, now.toISOString(), scheduleCoverage(event.metroId, event.date, now) === 'reconstructed');
}

/** Turn "I was there" on or off for a catalog event. */
export function toggleWasThere(event: CrowdEvent) {
  const seed = KYLIE_LOG.find((night) => night.eventId === event.id);
  if (seed) {
    const hidden = new Set(snapshot.hiddenSeedIds);
    if (hidden.has(seed.id)) hidden.delete(seed.id);
    else hidden.add(seed.id);
    commit({
      ...snapshot,
      hiddenSeedIds: [...hidden],
      added: snapshot.added.filter((night) => night.eventId !== event.id),
    });
    return;
  }
  const on = snapshot.added.some((night) => night.eventId === event.id);
  if (on) {
    commit({ ...snapshot, added: snapshot.added.filter((night) => night.eventId !== event.id) });
    return;
  }
  const now = new Date();
  const plan = snapshot.plans.find((row) => row.eventId === event.id);
  const night = nightFromEvent(event);
  if (plan?.forecast) night.forecast = retainForecast(plan.forecast);
  const stamp = stampNow(event, now);
  if (stamp) night.stamp = stamp;
  commit({ ...snapshot, added: [...snapshot.added, night] });
}

export function isPlanned(eventId: string, log: PersonalLog = snapshot): boolean {
  return log.plans.some((plan) => plan.eventId === eventId);
}

/** Flag or unflag an event's night as a plan. */
export function togglePlan(event: CrowdEvent) {
  if (isPlanned(event.id)) {
    commit({ ...snapshot, plans: snapshot.plans.filter((plan) => plan.eventId !== event.id) });
    return;
  }
  const forecast = forecastNow(event, new Date().toISOString());
  const plan: NightPlan = {
    id: `plan-${event.id}`,
    date: event.date,
    metroId: event.metroId,
    eventId: event.id,
    title: listTitle(event),
    venue: venueLabel(event),
    ...(forecast ? { forecast } : {}),
  };
  commit({ ...snapshot, plans: [...snapshot.plans, plan] });
}

export function removePlan(planId: string) {
  commit({ ...snapshot, plans: snapshot.plans.filter((plan) => plan.id !== planId) });
}

/** Plans still ahead, soonest first. A past plan stays in the backup but leaves Up next. */
export function upcomingPlans(today: string, log: PersonalLog = snapshot): NightPlan[] {
  return log.plans.filter((plan) => plan.date >= today).sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
}

export function setYouOrder(order: YouOrder) {
  if (snapshot.order === order) return;
  commit({ ...snapshot, order });
}

function counts(labels: string[]): CountRow[] {
  const map = new Map<string, number>();
  for (const label of labels) {
    if (!label) continue;
    map.set(label, (map.get(label) ?? 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, count]) => ({ label, count }));
}

/** Chips for teams and sports she has logged more than once. */
export function filterChoices(nights: LoggedNight[]): CountRow[] {
  return counts(nights.flatMap((night) => night.tags)).filter((row) => row.count >= 2);
}

/** Plain words for a log entry's kind. Concerts are shows (or festivals), not a sport. */
function typeLabel(kind: string): string {
  if (kind === 'live-broadcast') return 'live broadcast';
  return kind;
}

export function logStats(nights: LoggedNight[]): LogStats {
  const venues = nights.map((night) => night.venue).filter((venue): venue is string => Boolean(venue));
  return {
    events: nights.length,
    venues: new Set(venues).size,
    byType: counts(nights.map((night) => typeLabel(night.kind))),
    byTeamSport: counts(nights.flatMap((night) => night.tags)),
    bySport: counts(nights.map((night) => night.sport)),
    byVenue: counts(venues),
  };
}

/**
 * A date score applies to an exact day in the metro. Away nights stay unlabeled.
 * A below-floor night gets the score only when bigger events that night already
 * have one. The events checked are the seeded list for that date.
 */
export function ratingForNight(night: LoggedNight, ratings: ReadonlyMap<string, number>): number | null {
  const metroId = night.metroId ?? 'la';
  const events =
    night.when.precision === 'day' ? seedEventsOn(metroId, night.when.sort) : [];
  return ratingFromNight(night, ratings, events);
}

export function nightBackup(log: PersonalLog = snapshot): NightBackup {
  return {
    app: 'Fan/Friction',
    exportedAt: new Date().toISOString(),
    order: log.order,
    nights: yourNights(log),
    plans: log.plans,
  };
}
