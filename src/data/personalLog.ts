// The personal log: what this person marked, on this phone or in their account.
// Kylie's own nights moved into her account on Oct 5, 2026 (supabase/migrations/0002);
// the app no longer ships them to everyone. `hiddenSeedIds` stays for old phone copies.
// Screens reach this only through src/data/index.ts.

import { METROS } from '../config/metros';
import { listTitle } from '../lib/eventTitle';
import { TEAMS } from './teams';
import { venueNameOn, VENUES } from './venues';
import { clearPhoneCopy, isSavingToAccount, mergeLogs, entryStore, readSavedLog, setStoreAccount } from './storage';
import { onAccountChange } from './account';
import { favoriteKey, favoritesFromLog } from './favorites';
import { levelPhrase } from './competitions';
import { lengthLine, scoreLine } from './results';
import type { Favorite } from './favorites';
import { asMetroDate, createStamp, entryMetroId, forecastBeforeStart, isStampLocked, ratingFromEntry } from './read';
import { seedEventsOn } from './sources/seedSource';
import type { CrowdEvent, Division, Entry, Plan, SportsLevel, Stamp, PersonalLog, YouOrder } from './types';

export interface CountRow {
  label: string;
  count: number;
}

/** One labeled fact. Empty categories are left out by the callers. */
export interface LabeledFact {
  label: string;
  value: string;
  /** Shown as a link when set (the setlist). */
  href?: string;
  /** Only the owner ever sees it (the note, who you went with). */
  private?: boolean;
}

/**
 * The fields a person writes on their own entry (Kylie, Oct 6): the review,
 * who you went with, a note. Outcome, starter, promo, TV and the setlist are
 * facts about the event and come from a source, never from a form.
 */
export type EntryEdit = Pick<Entry, 'review' | 'with'>;

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

export interface LogBackup {
  app: 'Fan/Friction';
  exportedAt: string;
  order: YouOrder;
  entries: Entry[];
  plans: Plan[];
}

/**
 * Note folded into Review (Kylie, Oct 6: the two were redundant). An older
 * copy's private note becomes the night's review on load; the review follows
 * the visibility switch, which is Only me until the person changes it.
 */
function foldNotes(log: PersonalLog): PersonalLog {
  if (!log.added.some((entry) => entry.note)) return log;
  return {
    ...log,
    added: log.added.map((entry) => {
      if (!entry.note) return entry;
      const { note, ...rest } = entry;
      return rest.review ? rest : { ...rest, review: note };
    }),
  };
}

let snapshot: PersonalLog = foldNotes(readSavedLog());
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
  entryStore.save(next).catch(() => {
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
      const cloud = await entryStore.load();
      const merged = foldNotes(mergeLogs(cloud, snapshot));
      snapshot = merged;
      syncStatus = 'account';
      emit();
      await entryStore.save(merged);
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
    snapshot = foldNotes(readSavedLog());
  }
  emit();
});

function compareNights(a: Entry, b: Entry) {
  if (a.when.sort !== b.when.sort) return b.when.sort.localeCompare(a.when.sort);
  return a.title.localeCompare(b.title);
}

/** Nights this person marked, newest first. */
export function yourEntries(log: PersonalLog = snapshot): Entry[] {
  return [...log.added].sort(compareNights);
}

export function isWasThere(eventId: string, log: PersonalLog = snapshot): boolean {
  return log.added.some((entry) => entry.eventId === eventId);
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

/** "Basketball · WNBA", "Basketball · Women's college", "Football · High school": the row's type line for a hand-typed game. */
export function entryTypeLabel(entry: Entry): string {
  const base = eventTypeLabel(entry.kind, entry.sport);
  if (entry.kind !== 'game') return base;
  if (entry.competition) return `${base} · ${entry.competition}`;
  if (entry.level) return `${base} · ${levelPhrase(entry.level, entry.division)}`;
  return base;
}

/** Separate labeled facts. Personal notes are not one of them. */
export function entryFacts(entry: Entry, scope: 'all' | 'before' = 'all'): LabeledFact[] {
  const facts: LabeledFact[] = [];
  if (entry.result) facts.push({ label: 'Outcome', value: entry.result });
  const type = entryTypeLabel(entry);
  if (type) facts.push({ label: 'Type', value: type });
  if (entry.starter) facts.push({ label: 'Starter', value: entry.starter });
  if (entry.promo) facts.push({ label: 'Promo', value: entry.promo });
  if (entry.notable) facts.push({ label: 'Notable', value: entry.notable });
  if (entry.tv) facts.push({ label: 'TV', value: entry.tv });
  if (entry.setlistUrl) facts.push({ label: 'Setlist', value: setlistName(entry.setlistUrl), href: entry.setlistUrl });
  if (scope === 'before') return facts.filter((fact) => fact.label === 'Starter' || fact.label === 'Promo');
  return facts;
}

/** The owner's private line, under the review. The event's facts sit in the header. */
export function ownEntryFacts(entry: Entry): LabeledFact[] {
  return entry.with ? [{ label: 'With', value: entry.with, private: true }] : [];
}

function setlistName(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'Link';
  }
}

/** The same two for every kind of night. */
export function entryFieldsFor(_kind: Entry['kind']): (keyof EntryEdit)[] {
  return ['review', 'with'];
}

/** What the Add form collects for a night the catalog doesn't list. */
export interface ManualNight {
  title: string;
  kind: Entry['kind'];
  /** For a game: Baseball, Basketball, and so on. Shows use Concerts. */
  sport?: string;
  level?: SportsLevel;
  division?: Division;
  competition?: string;
  when: Entry['when'];
  venue?: string;
  /** A metro id, or undefined for somewhere the app has no city for. */
  metroId?: string;
}

/**
 * Add a night by hand (Kylie, Oct 6: anything can be logged). It is this
 * person's entry only: not a catalog event, not on the map, and it moves no
 * one's read. It is treated as under the floor, so it can still take the
 * night's nearby read when the city has one. A game in another city is away.
 */
export function addManualEntry(night: ManualNight, homeMetroId: string | null): Entry {
  const venue = night.venue?.trim() || undefined;
  const known = venue ? VENUE_BY_ANY_NAME.get(venue.toLowerCase()) : undefined;
  const metroId = night.metroId ?? known?.metroId;
  const game = night.kind === 'game';
  const entry: Entry = {
    id: `manual-${crypto.randomUUID()}`,
    when: night.when,
    title: night.title.trim(),
    tags: [],
    sport: game ? (night.sport?.trim() || 'Sports') : 'Concerts',
    sides: [],
    ...(game && night.level ? { level: night.level } : {}),
    ...(game && night.division ? { division: night.division } : {}),
    ...(game && night.competition?.trim() ? { competition: night.competition.trim() } : {}),
    venue: known ? venueNameOn(known, night.when.sort) : venue,
    kind: night.kind,
    belowFloor: true,
    inMetro: Boolean(metroId),
    ...(metroId ? { metroId } : {}),
    ...(game && homeMetroId && metroId !== homeMetroId ? { away: true } : {}),
  };
  commit({ ...snapshot, added: [...snapshot.added, entry] });
  return entry;
}

/** Remember that a hand-typed night was also suggested as a catalog event. */
export function markSuggested(entryId: string, suggestionId: string) {
  commit({
    ...snapshot,
    added: snapshot.added.map((entry) => (entry.id === entryId ? { ...entry, suggestionId } : entry)),
  });
}

/** The venues the app knows in one city, by the name they go by today. For the Add form's Where list. */
export function venueNamesIn(metroId: string): string[] {
  const today = new Date().toISOString().slice(0, 10);
  return Object.values(VENUES)
    .filter((venue) => venue.metroId === metroId)
    .map((venue) => venueNameOn(venue, today))
    .sort();
}

const VENUE_BY_ANY_NAME = new Map(
  Object.values(VENUES).flatMap((venue) => venue.names.map((n) => [n.name.toLowerCase(), venue] as const)),
);

/** Write the person's own fields on one entry. Blank values clear the field. The stamp is untouched. */
export function updateEntry(entryId: string, edit: EntryEdit) {
  const added = snapshot.added.map((entry) => {
    if (entry.id !== entryId) return entry;
    const next: Entry = { ...entry };
    for (const key of Object.keys(edit) as (keyof EntryEdit)[]) {
      const value = edit[key]?.trim();
      if (value) next[key] = value;
      else delete next[key];
    }
    return next;
  });
  commit({ ...snapshot, added });
}

/** Take an entry out of the log. For a linked night this is the same as un-tapping Attended. */
export function removeEntry(entryId: string) {
  commit({ ...snapshot, added: snapshot.added.filter((entry) => entry.id !== entryId) });
}

/**
 * Facts for an event page: the type, then anything known about the night
 * (outcome, starter, promo, notable, setlist). A linked entry supplies what the
 * catalog doesn't carry yet. TV is said in the line under the title.
 */
export function eventFacts(event: CrowdEvent, logged?: Entry): LabeledFact[] {
  const facts: LabeledFact[] = logged ? entryFacts(logged).filter((fact) => fact.label !== 'TV') : [];
  // The feed's result wins over anything an entry carried; the entry fills what the feed doesn't have.
  if (event.result) {
    const outcome = { label: 'Outcome', value: scoreLine(event.result) };
    const at = facts.findIndex((fact) => fact.label === 'Outcome');
    if (at >= 0) facts[at] = outcome;
    else facts.unshift(outcome);
  }
  if (!logged) {
    const sport = event.audience.domain === 'sports' ? sportLabel(event.audience.sport) : '';
    const type = eventTypeLabel(event.kind, sport);
    if (type) facts.push({ label: 'Type', value: type });
  }
  if (event.starters && !facts.some((fact) => fact.label === 'Starter')) {
    const names = [event.starters.home, event.starters.away].filter(Boolean).join(' · ');
    if (names) facts.push({ label: 'Starters', value: names });
  }
  const length = event.result ? lengthLine(event.result) : undefined;
  if (length) facts.push({ label: 'Length', value: length });
  return facts;
}

function tagFor(teamId: string | undefined, sport: string): { tag: string; side: string } {
  const team = teamId ? TEAMS[teamId] : undefined;
  const side = team?.shortName ?? 'Sports';
  if (team && /college/i.test(team.league)) {
    const abbr =
      sport === 'football' ? 'FB' : sport === 'basketball' ? (teamId?.endsWith('-wbb') ? 'WBB' : 'MBB') : sport === 'baseball' ? 'Baseball' : sport;
    return { tag: `${side} ${abbr}`, side };
  }
  return { tag: side, side };
}

function withFloor(event: CrowdEvent, entry: Entry): Entry {
  return event.belowFloor ? { ...entry, belowFloor: true } : entry;
}

function entryFromEvent(event: CrowdEvent): Entry {
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
function eventsThatDate(event: CrowdEvent): CrowdEvent[] {
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
function stampNow(event: CrowdEvent, now: Date): Stamp | undefined {
  const events = eventsThatDate(event);
  const entry = asMetroDate(event.metroId, event.date, events);
  const zone = METROS[event.metroId]?.timeZone ?? 'America/Los_Angeles';
  if (!isStampLocked(entry, zone, now)) return undefined;
  const saved = forecastBeforeStart(event);
  if (!saved) return undefined;
  return createStamp(saved.read, now.toISOString(), false, saved);
}

/** Turn "I was there" on or off for a catalog event. */
export function toggleWasThere(event: CrowdEvent) {
  const on = snapshot.added.some((entry) => entry.eventId === event.id);
  if (on) {
    commit({ ...snapshot, added: snapshot.added.filter((entry) => entry.eventId !== event.id) });
    return;
  }
  const now = new Date();
  const entry = entryFromEvent(event);
  const stamp = stampNow(event, now);
  if (stamp) entry.stamp = stamp;
  commit({ ...snapshot, added: [...snapshot.added, entry] });
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
  const plan: Plan = {
    id: `plan-${event.id}`,
    date: event.date,
    metroId: event.metroId,
    eventId: event.id,
    title: listTitle(event),
    venue: venueLabel(event),
  };
  commit({ ...snapshot, plans: [...snapshot.plans, plan] });
}

/**
 * Attending becomes Attended by itself once the date passes (Kylie, Oct 5: no
 * "did you go?" step; remove it afterwards if you didn't). Runs at app start and
 * after sign-in. Needs each event's record, so it is async and quiet on failure.
 */
export async function settlePassedPlans(loadDate: (metroId: string, date: string) => Promise<{ events: CrowdEvent[] }>) {
  const now = new Date();
  const passed = snapshot.plans.filter((plan) => {
    const metro = METROS[plan.metroId] ?? METROS.la;
    const today = new Date(now.toLocaleDateString('en-CA', { timeZone: metro.timeZone })).toISOString().slice(0, 10);
    return plan.date < today;
  });
  if (passed.length === 0) return;
  const added: Entry[] = [];
  for (const plan of passed) {
    if (!plan.eventId || snapshot.added.some((entry) => entry.eventId === plan.eventId)) continue;
    try {
      const day = await loadDate(plan.metroId, plan.date);
      const event = day.events.find((e) => e.id === plan.eventId);
      if (!event) continue;
      const entry = entryFromEvent(event);
      const stamp = stampNow(event, now);
      added.push(stamp ? { ...entry, stamp } : entry);
    } catch {
      /* try again next open */
    }
  }
  const settledIds = new Set(passed.map((plan) => plan.id));
  commit({
    ...snapshot,
    added: [...snapshot.added, ...added],
    plans: snapshot.plans.filter((plan) => !settledIds.has(plan.id)),
  });
}

export function removePlan(planId: string) {
  commit({ ...snapshot, plans: snapshot.plans.filter((plan) => plan.id !== planId) });
}

/** Plans still ahead, soonest first. A past plan stays in the backup but leaves Up next. */
export function upcomingPlans(today: string, log: PersonalLog = snapshot): Plan[] {
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
export function nextSavedPlan(log: PersonalLog = snapshot, now = new Date()): Plan | null {
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
export function filterChoices(entries: Entry[]): CountRow[] {
  return counts(entries.flatMap((entry) => entry.tags)).filter((row) => row.count >= 2);
}

/** Plain words for a log entry's kind. Concerts are shows (or festivals), not a sport. */
function typeLabel(kind: string): string {
  if (kind === 'live-broadcast') return 'live broadcast';
  return kind;
}

export function logStats(entries: Entry[]): LogStats {
  const venues = entries.map((entry) => entry.venue).filter((venue): venue is string => Boolean(venue));
  return {
    events: entries.length,
    venues: new Set(venues).size,
    byType: counts(entries.map((entry) => typeLabel(entry.kind))),
    byTeamSport: counts(entries.flatMap((entry) => entry.tags)),
    bySport: counts(entries.map((entry) => entry.sport)),
    byVenue: counts(venues),
  };
}

/**
 * A date score applies to an exact day in the metro. Away nights stay unlabeled.
 * A below-floor night gets the score only when bigger events that night already
 * have one. The events checked are the seeded list for that date.
 */
export function ratingForEntry(entry: Entry, scores: ReadonlyMap<string, number>): number | null {
  const events =
    entry.when.precision === 'day' ? seedEventsOn(entryMetroId(entry), entry.when.sort) : [];
  return ratingFromEntry(entry, scores, events);
}

/**
 * The favorites on a log. A log that has never had any gets a first set from
 * its own nights (Kylie's tab fills itself; a new person's stays empty), saved
 * on the next change so it is derived only once.
 */
export function favoritesOf(log: PersonalLog = snapshot): Favorite[] {
  return log.favorites ?? favoritesFromLog(yourEntries(log));
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

export function logBackup(log: PersonalLog = snapshot): LogBackup {
  return {
    app: 'Fan/Friction',
    exportedAt: new Date().toISOString(),
    order: log.order,
    entries: yourEntries(log),
    plans: log.plans,
  };
}
