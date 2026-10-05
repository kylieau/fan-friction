// The personal log: what this person marked, on this phone or in their account.
// Kylie's own nights moved into her account on Oct 5, 2026 (supabase/migrations/0002);
// the app no longer ships them to everyone. `hiddenSeedIds` stays for old phone copies.
// Screens reach this only through src/data/index.ts.

import { METROS } from '../config/metros';
import { listTitle } from '../lib/eventTitle';
import { TEAMS } from './teams';
import { venueNameOn, VENUES } from './venues';
import { clearPhoneCopy, isSavingToAccount, mergeLogs, nightStore, readSavedLog, setStoreAccount } from './storage';
import { onAccountChange } from './account';
import { favoriteKey, favoritesFromLog } from './favorites';
import type { Favorite } from './favorites';
import { asMetroNight, createStamp, forecastBeforeStart, isStampLocked, ratingFromNight } from './night';
import { seedEventsOn } from './sources/seedSource';
import type { CrowdEvent, LoggedNight, NightPlan, NightStamp, PersonalLog, YouOrder } from './types';

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
    saveWarning = isSavingToAccount()
      ? "Couldn't reach your account. This phone still has the change; it will try again on the next save."
      : 'This phone blocked saving. Export a backup before you leave this page.';
    emit();
  });
}

/** Where the log is being saved right now, for the You screen's status line. */
export type SyncStatus = 'phone' | 'loading' | 'account';
let syncStatus: SyncStatus = 'phone';

export function getSyncStatus(): SyncStatus {
  return syncStatus;
}

// Signing in: pull the account copy, fold in anything marked on this phone, save
// the result both places. Signing out: show an empty log and forget the phone copy.
onAccountChange(async (account) => {
  if (account) {
    syncStatus = 'loading';
    emit();
    setStoreAccount(account.id);
    try {
      const cloud = await nightStore.load();
      const merged = mergeLogs(cloud, snapshot);
      snapshot = merged;
      syncStatus = 'account';
      emit();
      await nightStore.save(merged);
    } catch {
      saveWarning = "Couldn't load your account's nights. Showing what's on this phone.";
      syncStatus = 'phone';
      setStoreAccount(null);
      emit();
    }
    return;
  }
  const wasSignedIn = isSavingToAccount();
  setStoreAccount(null);
  syncStatus = 'phone';
  if (wasSignedIn) {
    await clearPhoneCopy();
    snapshot = readSavedLog();
  }
  emit();
});

function compareNights(a: LoggedNight, b: LoggedNight) {
  if (a.when.sort !== b.when.sort) return b.when.sort.localeCompare(a.when.sort);
  return a.title.localeCompare(b.title);
}

/** Nights this person marked, newest first. */
export function yourNights(log: PersonalLog = snapshot): LoggedNight[] {
  return [...log.added].sort(compareNights);
}

export function isWasThere(eventId: string, log: PersonalLog = snapshot): boolean {
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
 * The stamp, once 24 hours have passed since the last scheduled start that night.
 * The numbers come from the latest daily snapshot saved before this event's start.
 * That snapshot is labeled on the stamp. Nothing is written before the lock,
 * and no number is filled in when that snapshot has none.
 */
function stampNow(event: CrowdEvent, now: Date): NightStamp | undefined {
  const events = eventsThatNight(event);
  const night = asMetroNight(event.metroId, event.date, events);
  const zone = METROS[event.metroId]?.timeZone ?? 'America/Los_Angeles';
  if (!isStampLocked(night, zone, now)) return undefined;
  const saved = forecastBeforeStart(event);
  if (!saved) return undefined;
  return createStamp(saved.read, now.toISOString(), false, saved);
}

/** Turn "I was there" on or off for a catalog event. */
export function toggleWasThere(event: CrowdEvent) {
  const on = snapshot.added.some((night) => night.eventId === event.id);
  if (on) {
    commit({ ...snapshot, added: snapshot.added.filter((night) => night.eventId !== event.id) });
    return;
  }
  const now = new Date();
  const night = nightFromEvent(event);
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
  const plan: NightPlan = {
    id: `plan-${event.id}`,
    date: event.date,
    metroId: event.metroId,
    eventId: event.id,
    title: listTitle(event),
    venue: venueLabel(event),
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

/** Today's date in a time zone, "2026-10-04". */
function todayInZone(timeZone: string, now: Date): string {
  return now.toLocaleDateString('en-CA', { timeZone });
}

/**
 * The one saved night the Map card shows: the soonest plan still ahead, in any
 * city. "Ahead" uses that night's own time zone, not the city on the map.
 * A plan is the saved night only. It does not store a forecast.
 * Same-day plans follow title order, because a plan does not store a start time.
 */
export function nextSavedPlan(log: PersonalLog = snapshot, now = new Date()): NightPlan | null {
  return (
    log.plans
      .filter((plan) => {
        const zone = METROS[plan.metroId]?.timeZone ?? 'America/Los_Angeles';
        return plan.date >= todayInZone(zone, now);
      })
      .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title))[0] ?? null
  );
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

/**
 * The favorites on a log. A log that has never had any gets a first set from
 * its own nights (Kylie's tab fills itself; a new person's stays empty), saved
 * on the next change so it is derived only once.
 */
export function favoritesOf(log: PersonalLog = snapshot): Favorite[] {
  return log.favorites ?? favoritesFromLog(yourNights(log));
}

export function isFavorite(fav: Pick<Favorite, 'kind' | 'id'>, log: PersonalLog = snapshot): boolean {
  const key = favoriteKey(fav);
  return favoritesOf(log).some((item) => favoriteKey(item) === key);
}

export function toggleFavorite(fav: Favorite) {
  const current = favoritesOf(snapshot);
  const key = favoriteKey(fav);
  const next = current.some((item) => favoriteKey(item) === key)
    ? current.filter((item) => favoriteKey(item) !== key)
    : [...current, fav];
  commit({ ...snapshot, favorites: next });
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
