// The personal log: what this person marked, on this phone or in their account.
// Kylie's own nights moved into her account on Oct 5, 2026 (supabase/migrations/0002);
// the app no longer ships them to everyone. `hiddenSeedIds` stays for old phone copies.
// Screens reach this only through src/data/index.ts.

import { METROS } from '../config/metros';
import { listTitle } from '../lib/eventTitle';
import { TEAMS } from './teams';
import { venueNameOn, VENUES } from './venues';
import { clearOfflineCatalog, clearPhoneCopy, diffLogs, isSavingToAccount, mergeLogs, entryStore, readSavedLog, setStoreAccount } from './storage';
import { onAccountChange, tookDeliberateSignOut } from './account';
import { favoriteKey, favoritesFromLog } from './favorites';
import { levelPhrase } from './competitions';
import { lengthLine, scoreLine } from './results';
import { normalizeSeats, normalizeTags, retag } from './stubTags';
import type { Seats } from './types';
import type { Favorite } from './favorites';
import { asMetroDate, createStamp, entryMetroId, forecastBeforeStart, isStampLocked, ratingFromEntry } from './read';
import { seedEventsOn } from './sources/seedSource';
import { drawSize } from './read';
import { backfillEntryCrowd, crowdFigures, entryCrowd } from './crowdFigures';
import { clearWatchPlace, saveWatchPlace } from './watchPlaces';
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
  /** Buildings you were in. Watched events do not count. */
  venues: number;
  /** Entries marked watched, not attended (8.2). */
  watched: number;
  /** Entries you were at: events minus watched (Kylie, Oct 11: "Attended", never "Events"). */
  attended: number;
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

/** Save what changed. Changed rows get an edit time; removed ids are remembered (see storage/index.ts). */
function commit(next: PersonalLog) {
  const diff = diffLogs(snapshot, next);
  snapshot = diff.log;
  saveWarning = null;
  emit();
  entryStore.save(diff).catch(() => {
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

// Fires once the account copy has been folded in, so plans can settle against it.
const loadedListeners = new Set<() => void>();
export function subscribeLogLoaded(listener: () => void): () => void {
  loadedListeners.add(listener);
  return () => {
    loadedListeners.delete(listener);
  };
}

// Signing in (and every open while signed in): pull the account copy, fold in
// anything marked on this phone, save the difference up and the whole thing
// here. Signing out on purpose: show an empty log and forget the phone copy.
// A sign-out the person did not ask for (an expired session) keeps the phone
// copy, so nothing unsaved is lost on their own device.
onAccountChange(async (account) => {
  if (account) {
    syncStatus = 'loading';
    emit();
    setStoreAccount(account.id);
    try {
      const cloud = await entryStore.load();
      const merged = foldNotes(mergeLogs(cloud, snapshot));
      const diff = diffLogs(cloud, merged);
      snapshot = diff.log;
      syncStatus = 'account';
      emit();
      loadedListeners.forEach((listener) => listener());
      await entryStore.save(diff);
    } catch {
      saveWarning = "Couldn't load your account's events. Showing what's on this phone.";
      syncStatus = 'phone';
      setStoreAccount(null);
      emit();
    }
    return;
  }
  const wasSignedIn = isSavingToAccount();
  setStoreAccount(null);
  syncStatus = 'phone';
  if (wasSignedIn && tookDeliberateSignOut()) {
    await Promise.all([clearPhoneCopy(), clearOfflineCatalog()]);
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
  if (kind === 'show' || sport === 'Concerts') return 'Concert';
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
  /** Your own tags, set on a hand-added plan so they carry into its stub. */
  userTags?: string[];
}

/**
 * Add a night by hand (Kylie, Oct 6: anything can be logged). It is this
 * person's entry only: not a catalog event, not on the map, and it moves no
 * one's read. It is treated as under the floor, so it can still take the
 * night's nearby read when the city has one. A game in another city is away.
 */
export function addManualEntry(night: ManualNight, homeMetroId: string | null): Entry {
  const entry = manualEntryFrom(night, homeMetroId, `manual-${crypto.randomUUID()}`);
  commit({ ...snapshot, added: [...snapshot.added, entry] });
  return entry;
}

/** The entry a hand-typed night becomes. Shared by Log an event and by a hand-added plan whose date has passed. */
function manualEntryFrom(night: ManualNight, homeMetroId: string | null, id: string): Entry {
  const venue = night.venue?.trim() || undefined;
  const known = venue ? VENUE_BY_ANY_NAME.get(venue.toLowerCase()) : undefined;
  const metroId = night.metroId ?? known?.metroId;
  const game = night.kind === 'game';
  const entry: Entry = {
    id,
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
    ...(night.userTags?.length ? { userTags: night.userTags } : {}),
  };
  return entry;
}

/**
 * A night typed in by hand for a date still ahead (Kylie, Oct 9, C059): saved as a plan,
 * which becomes an entry once the date passes. A city the app has no metro for keeps
 * the home city on the plan so it still sits in Coming up, marked elsewhere.
 */
export function addManualPlan(night: ManualNight, homeMetroId: string | null): Plan {
  const venue = night.venue?.trim() || undefined;
  const known = venue ? VENUE_BY_ANY_NAME.get(venue.toLowerCase()) : undefined;
  const metroId = night.metroId ?? known?.metroId;
  const plan: Plan = {
    id: `plan-manual-${crypto.randomUUID()}`,
    date: night.when.sort,
    metroId: metroId ?? homeMetroId ?? 'la',
    title: night.title.trim(),
    venue: known ? venueNameOn(known, night.when.sort) : venue,
    manual: {
      kind: night.kind,
      ...(night.sport ? { sport: night.sport } : {}),
      ...(night.level ? { level: night.level } : {}),
      ...(night.division ? { division: night.division } : {}),
      ...(night.competition ? { competition: night.competition } : {}),
      ...(metroId ? {} : { elsewhere: true }),
    },
  };
  commit({ ...snapshot, plans: [...snapshot.plans, plan] });
  return plan;
}

/** What a hand-added plan asked for, as the Add form would have. */
function nightFromPlan(plan: Plan): ManualNight {
  const m = plan.manual!;
  return {
    title: plan.title,
    kind: m.kind,
    sport: m.sport,
    level: m.level,
    division: m.division,
    competition: m.competition,
    when: { sort: plan.date, label: '', precision: 'day' },
    venue: plan.venue,
    metroId: m.elsewhere ? undefined : plan.metroId,
    ...(plan.userTags?.length ? { userTags: plan.userTags } : {}),
  };
}

/** Normalized words of a title, for the duplicate check. */
function titleWords(title: string): Set<string> {
  return new Set(title.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter((w) => w.length > 1 && !['vs', 'the', 'at', 'and', 'of'].includes(w)));
}

/**
 * Titles that look like the same event (Kylie, Oct 9, C059: "flag even if the title is a
 * little different"): one contains the other, or they share most of their words.
 */
export function similarTitles(a: string, b: string): boolean {
  const x = a.trim().toLowerCase();
  const y = b.trim().toLowerCase();
  if (!x || !y) return false;
  if (x === y || x.includes(y) || y.includes(x)) return true;
  const wa = titleWords(a);
  const wb = titleWords(b);
  if (wa.size === 0 || wb.size === 0) return false;
  let shared = 0;
  for (const w of wa) if (wb.has(w)) shared++;
  return shared / Math.min(wa.size, wb.size) >= 0.6;
}

/** What a hand-typed entry's owner may change (3.14): the date, title, venue and city. Catalog entries stay locked. */
export interface ManualEntryEdit {
  title?: string;
  date?: string;
  venue?: string;
  /** A metro id, or '' for somewhere the app has no city for. */
  metroId?: string;
}

export function isManualEntry(entry: Entry): boolean {
  return entry.id.startsWith('manual-') && !entry.eventId;
}

/** Edit a hand-typed entry's facts. The nearby read follows the new date and city by itself (C035). */
export function updateManualEntry(entryId: string, edit: ManualEntryEdit, homeMetroId: string | null) {
  const added = snapshot.added.map((entry) => {
    if (entry.id !== entryId || !isManualEntry(entry)) return entry;
    const next: Entry = { ...entry };
    if (edit.title?.trim()) next.title = edit.title.trim();
    if (edit.date && /^\d{4}-\d{2}-\d{2}$/.test(edit.date)) next.when = { sort: edit.date, label: '', precision: 'day' };
    if (edit.venue !== undefined) {
      const venue = edit.venue.trim() || undefined;
      const known = venue ? VENUE_BY_ANY_NAME.get(venue.toLowerCase()) : undefined;
      if (venue) next.venue = known ? venueNameOn(known, next.when.sort) : venue;
      else delete next.venue;
    }
    if (edit.metroId !== undefined) {
      if (edit.metroId) next.metroId = edit.metroId;
      else delete next.metroId;
      next.inMetro = Boolean(edit.metroId);
      if (next.kind === 'game' && homeMetroId && edit.metroId !== homeMetroId) next.away = true;
      else delete next.away;
    }
    return next;
  });
  commit({ ...snapshot, added });
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

/** Keep one entry private, or share it again. The stamp and everything else stay. */
export function setEntryPrivate(entryId: string, on: boolean) {
  const added = snapshot.added.map((entry) => {
    if (entry.id !== entryId) return entry;
    const next: Entry = { ...entry };
    if (on) next.private = true;
    else delete next.private;
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
  if (event.neutralSite) facts.push({ label: 'Site', value: 'Neutral' });
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
  markWasThere(event);
}

function freshEntry(event: CrowdEvent, watched: boolean): Entry {
  const entry = entryFromEvent(event);
  const stamp = stampNow(event, new Date());
  if (stamp) entry.stamp = stamp;
  // The crowd is not taken at the tap (Kylie, Oct 11, call 4): it locks with the stamp, see lockCrowds.
  if (watched) entry.watched = true;
  return entry;
}

/**
 * The figures an entry's crowd locks to (build notes 3, D04): the announced attendance from the box
 * score, and the estimate the app made, each into its own field. Final has no source yet (⚑4).
 */
function lockedCrowd(event: CrowdEvent): Pick<Entry, 'crowdAnnounced' | 'crowdEstimated'> {
  const figures = crowdFigures(event);
  const estimated = figures.estimated ?? drawSize(event);
  return { ...(figures.announced ? { crowdAnnounced: figures.announced } : {}), ...(estimated ? { crowdEstimated: estimated } : {}) };
}

/** How long after a date an entry keeps asking for its announced crowd (Kylie, Oct 12: retry until it lands). Box scores land within days; older gaps are left. */
const ANNOUNCED_RETRY_DAYS = 30;

/**
 * Lock crowds (Kylie, Oct 11, call 4; build notes 3, D04 and 8.1 item 18): once a date's stamp has
 * locked, each of its entries takes the announced attendance and the estimate into their own fields,
 * and no field is ever overwritten. Runs at app start and after the account copy loads, like
 * settlePassedPlans: a lazy fill on open, not a job. An entry whose box score has not landed yet
 * asks again on later opens, for a month (Kylie, Oct 12), after the first-time lookups. A date the
 * catalog cannot find (before the archive) stays blank. At most forty lookups a run.
 */
/** Moves legacy single `crowd` on stubs into Announced or Estimated (build 4, R04). Rerunnable; never overwrites split fields. */
export async function backfillLegacyCrowds(loadDate: (metroId: string, date: string) => Promise<{ events: CrowdEvent[] }>) {
  const due = snapshot.added.filter(
    (entry) => entry.crowd != null && entry.crowdAnnounced == null && entry.crowdEstimated == null && entry.crowdFinal == null,
  );
  if (due.length === 0) return;
  const updates = new Map<string, Partial<Entry>>();
  for (const entry of due.slice(0, 40)) {
    let event: CrowdEvent | undefined;
    if (entry.eventId && entry.metroId && entry.when.precision === 'day') {
      try {
        const day = await loadDate(entry.metroId, entry.when.sort);
        event = day.events.find((e) => e.id === entry.eventId);
      } catch {
        /* estimated fallback */
      }
    }
    const fill = backfillEntryCrowd(entry, event);
    if (fill) updates.set(entry.id, fill);
  }
  if (updates.size === 0) return;
  commit({ ...snapshot, added: snapshot.added.map((entry) => (updates.has(entry.id) ? { ...entry, ...updates.get(entry.id) } : entry)) });
}

export async function lockCrowds(loadDate: (metroId: string, date: string) => Promise<{ events: CrowdEvent[] }>) {
  const now = new Date();
  const past = (entry: Entry) => {
    if (!entry.eventId || !entry.metroId || entry.when.precision !== 'day') return false;
    const metro = METROS[entry.metroId];
    return Boolean(metro) && entry.when.sort < todayInZone(metro.timeZone, now);
  };
  const first = snapshot.added.filter((entry) => !entry.crowdLocked && past(entry));
  const retry = snapshot.added.filter(
    (entry) => entry.crowdLocked && !entry.crowdAnnounced && !entry.crowdFinal && !entry.crowd && past(entry) && entry.when.sort >= todayInZone('UTC', new Date(now.getTime() - ANNOUNCED_RETRY_DAYS * 86400000)),
  );
  const due = [...first, ...retry];
  if (due.length === 0) return;
  const updates = new Map<string, Partial<Entry>>();
  for (const entry of due.slice(0, 40)) {
    try {
      const day = await loadDate(entry.metroId!, entry.when.sort);
      const metro = METROS[entry.metroId!];
      if (!isStampLocked(asMetroDate(entry.metroId!, entry.when.sort, day.events), metro.timeZone, now)) continue;
      const event = day.events.find((e) => e.id === entry.eventId);
      const locked = event ? lockedCrowd(event) : {};
      // Fill only what is empty: a figure already on the entry stays (D03).
      const fill: Partial<Entry> = { crowdLocked: true };
      if (locked.crowdAnnounced && !entry.crowdAnnounced) fill.crowdAnnounced = locked.crowdAnnounced;
      if (locked.crowdEstimated && !entry.crowdEstimated) fill.crowdEstimated = locked.crowdEstimated;
      // A retry that found nothing new writes nothing.
      if (entry.crowdLocked && !fill.crowdAnnounced && !fill.crowdEstimated) continue;
      updates.set(entry.id, fill);
    } catch {
      /* try again next open */
    }
  }
  if (updates.size === 0) return;
  commit({ ...snapshot, added: snapshot.added.map((entry) => (updates.has(entry.id) ? { ...entry, ...updates.get(entry.id) } : entry)) });
}

/** The Private / Friends choice on a watch, older copies included ("Only you" read as Private; the old Home as Private). */
export function watchShareOf(row: Pick<Entry, 'watchShare' | 'watchedPlacePrivate' | 'watchedWhere' | 'watchedPlace'>): 'private' | 'friends' | undefined {
  if (row.watchShare) return row.watchShare;
  if (row.watchedPlacePrivate) return 'private';
  if (row.watchedWhere === 'public' && row.watchedPlace) return 'friends';
  if (row.watchedWhere === 'home') return 'private';
  return undefined;
}

/** The watch place on a plan or entry, "Home" for the preset; older copies' Home chip reads the same. */
export function watchPlaceOf(row: Pick<Entry, 'watchedPlace' | 'watchedWhere'>): string | undefined {
  return row.watchedPlace ?? (row.watchedWhere === 'home' ? 'Home' : undefined);
}

/**
 * The Stub it sheet's watching details (build notes 3, 4.7): Private or Friends, and an optional
 * place ("Home" is the preset). Written on the plan ahead of the date, or the watched entry after
 * it; a plan's details carry into its stub. Friends shares the place with your approved followers
 * through the database; Private keeps it on this log only. Resolves to an error line when the share
 * could not be saved (D01), else null.
 */
export async function setWatchDetails(eventId: string, share: 'private' | 'friends' | undefined, place: string | undefined): Promise<string | null> {
  const clean = place?.trim().replace(/\s+/g, ' ').slice(0, 80) || undefined;
  const apply = <T extends Pick<Entry, 'watchShare' | 'watchedPlace' | 'watchedWhere' | 'watchedPlacePrivate'>>(row: T): T => {
    const next = { ...row };
    if (share) next.watchShare = share;
    else delete next.watchShare;
    if (clean) next.watchedPlace = clean;
    else delete next.watchedPlace;
    // The older fields follow, so a phone on the previous build still reads the right thing.
    delete next.watchedPlacePrivate;
    if (clean && /^home$/i.test(clean)) next.watchedWhere = 'home';
    else if (clean) next.watchedWhere = 'public';
    else delete next.watchedWhere;
    if (share === 'private' && clean && next.watchedWhere === 'public') next.watchedPlacePrivate = true;
    return next;
  };
  commit({
    ...snapshot,
    plans: snapshot.plans.map((plan) => (plan.eventId === eventId && plan.watch ? apply(plan) : plan)),
    added: snapshot.added.map((entry) => (entry.eventId === eventId && entry.watched ? apply(entry) : entry)),
  });
  if (share === 'friends' && clean) return saveWatchPlace(eventId, clean, true);
  return clearWatchPlace(eventId);
}

/** The places typed on other watches, newest first, for the sheet's chips. The Home preset is not one. */
export function recentWatchPlaces(log: PersonalLog = snapshot, limit = 2): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const row of [...log.plans, ...yourEntries(log)]) {
    const place = watchPlaceOf(row);
    if (!place || /^home$/i.test(place) || seen.has(place.toLowerCase())) continue;
    seen.add(place.toLowerCase());
    out.push(place);
    if (out.length >= limit) break;
  }
  return out;
}

/** "I was there": a new entry, or a watched one becoming in person (build notes 2, 8.2). */
export function markWasThere(event: CrowdEvent) {
  const existing = snapshot.added.find((entry) => entry.eventId === event.id);
  if (existing) {
    if (!existing.watched) return;
    const { watched: _w, ...rest } = existing;
    void _w;
    commit({ ...snapshot, added: snapshot.added.map((entry) => (entry.id === existing.id ? rest : entry)) });
    return;
  }
  commit({ ...snapshot, added: [...snapshot.added, freshEntry(event, false)] });
}

/** "I watched it": the same entry with a quiet mark; the friction stamp still applies. */
export function markWatched(event: CrowdEvent) {
  const existing = snapshot.added.find((entry) => entry.eventId === event.id);
  if (existing) {
    if (existing.watched) return;
    // Watched is not in person: seats do not go with it.
    commit({
      ...snapshot,
      added: snapshot.added.map((entry) => {
        if (entry.id !== existing.id) return entry;
        const { seats: _seats, ...rest } = entry;
        void _seats;
        return { ...rest, watched: true };
      }),
    });
    return;
  }
  commit({ ...snapshot, added: [...snapshot.added, freshEntry(event, true)] });
}

export function isWatched(eventId: string, log: PersonalLog = snapshot): boolean {
  return log.added.some((entry) => entry.eventId === eventId && entry.watched);
}

/** The event you were at with the biggest crowd on file, by each stub's highlighted figure. */
export function biggestCrowd(entries: readonly Entry[]): Entry | null {
  const count = (e: Entry) => entryCrowd(e)?.count ?? 0;
  return entries.filter((e) => !e.watched && count(e) > 0).sort((a, b) => count(b) - count(a))[0] ?? null;
}

/** How many of your nights were Steamrolled and Swamped, from their stamps. */
export function toughestFights(entries: readonly Entry[]): { steamrolled: number; swamped: number } {
  const levels = entries.filter((e) => !e.watched).map((e) => e.stamp?.friction);
  return { steamrolled: levels.filter((l) => l === 'Extreme').length, swamped: levels.filter((l) => l === 'Heavy').length };
}

/** Attending or Watching for this event. An Interested answer is not a plan to be there (Kylie, Oct 11). */
export function isPlanned(eventId: string, log: PersonalLog = snapshot): boolean {
  return log.plans.some((plan) => plan.eventId === eventId && !plan.interested);
}

export type PlanAnswer = 'attend' | 'watch' | 'interested';

/** A plan that puts you somewhere: Attending or Watching, never Interested. */
export function firmPlan(plan: Plan): boolean {
  return !plan.interested;
}

/** Which question was answered for an event ahead (Kylie, Oct 11): Attending?, Watching?, Interested?, or none. */
export function plannedKind(eventId: string, log: PersonalLog = snapshot): PlanAnswer | null {
  const plan = log.plans.find((plan) => plan.eventId === eventId);
  return plan ? (plan.interested ? 'interested' : plan.watch ? 'watch' : 'attend') : null;
}

/**
 * Answer Attending?, Watching? or Interested? for an event ahead, or take the answer back.
 * The same answer again clears the plan; another answer switches it. One plan per event.
 */
export function togglePlan(event: CrowdEvent, answer: PlanAnswer = 'attend') {
  const kind = plannedKind(event.id);
  if (kind) {
    const plans = snapshot.plans.filter((plan) => plan.eventId !== event.id);
    if (kind === answer) {
      commit({ ...snapshot, plans });
      return;
    }
  }
  // Your tags stay with the stub when the answer changes (Attending to Watching and back).
  const before = snapshot.plans.find((row) => row.eventId === event.id);
  const plan: Plan = {
    id: `plan-${event.id}`,
    date: event.date,
    metroId: event.metroId,
    eventId: event.id,
    title: listTitle(event),
    venue: venueLabel(event),
    // An Interested answer carries no tags (T02), so going through it drops them.
    ...(before?.userTags?.length && answer !== 'interested' ? { userTags: before.userTags } : {}),
    ...(answer === 'watch' ? { watch: true } : {}),
    ...(answer === 'interested' ? { interested: true } : {}),
  };
  commit({ ...snapshot, plans: [...snapshot.plans.filter((row) => row.eventId !== event.id), plan] });
}

/**
 * Attending becomes Attended by itself once the date passes (Kylie, Oct 5: no
 * "did you go?" step; remove it afterwards if you didn't). Runs at app start and
 * once the account copy has loaded. Needs each event's record, so it is async.
 * A plan is cleared only when it became an entry, or its event is already
 * logged (C111). A plan whose event could not be loaded, or was not found,
 * waits for the next open; public listings drop past events, so "not found"
 * is treated like a failed load. A hand-added plan becomes a hand-added entry (C059).
 */
export async function settlePassedPlans(loadDate: (metroId: string, date: string) => Promise<{ events: CrowdEvent[] }>, homeMetroId: string | null = null) {
  const now = new Date();
  const passed = snapshot.plans.filter((plan) => {
    const metro = METROS[plan.metroId] ?? METROS.la;
    return plan.date < todayInZone(metro.timeZone, now);
  });
  if (passed.length === 0) return;
  const added: Entry[] = [];
  const settledIds = new Set<string>();
  for (const plan of passed) {
    // Interested never becomes a stub (Kylie, Oct 11): the answer just lapses with the date.
    if (plan.interested) {
      settledIds.add(plan.id);
      continue;
    }
    if (!plan.eventId) {
      if (plan.manual) {
        // Once only (R11): a plan that already became an entry (this run or an earlier one) is just cleared.
        const id = `manual-${plan.id.replace(/^plan-manual-/, '')}`;
        if (!snapshot.added.some((entry) => entry.id === id) && !added.some((entry) => entry.id === id)) {
          added.push(manualEntryFrom(nightFromPlan(plan), homeMetroId, id));
        }
        settledIds.add(plan.id);
      }
      continue;
    }
    if (snapshot.added.some((entry) => entry.eventId === plan.eventId)) {
      settledIds.add(plan.id);
      continue;
    }
    try {
      const day = await loadDate(plan.metroId, plan.date);
      const event = day.events.find((e) => e.id === plan.eventId);
      if (!event) continue;
      const entry = entryFromEvent(event);
      if (plan.userTags?.length) entry.userTags = plan.userTags;
      // A Watching? answer becomes a Watched stub (Kylie, Oct 11); the friction stamp still applies.
      // Its Private / Friends choice and place come along (build notes 3, 4.7).
      if (plan.watch) {
        entry.watched = true;
        if (plan.watchShare) entry.watchShare = plan.watchShare;
        if (plan.watchedPlace) entry.watchedPlace = plan.watchedPlace;
        if (plan.watchedPlace) entry.watchedWhere = /^home$/i.test(plan.watchedPlace) ? 'home' : 'public';
      }
      const stamp = stampNow(event, now);
      if (!added.some((row) => row.id === entry.id)) added.push(stamp ? { ...entry, stamp } : entry);
      settledIds.add(plan.id);
    } catch {
      /* try again next open */
    }
  }
  if (settledIds.size === 0) return;
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
  return log.plans.filter((plan) => firmPlan(plan) && plan.date >= today).sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
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
        return firmPlan(plan) && plan.date >= todayInZone(zone, now);
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

/** Plain words for a log entry's kind. A show is a concert (C089: one label everywhere), not a sport. */
function typeLabel(kind: string): string {
  if (kind === 'live-broadcast') return 'Live broadcast';
  if (kind === 'show') return 'Concert';
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}

export function logStats(entries: Entry[]): LogStats {
  const venues = entries.filter((entry) => !entry.watched).map((entry) => entry.venue).filter((venue): venue is string => Boolean(venue));
  return {
    events: entries.length,
    venues: new Set(venues).size,
    watched: entries.filter((entry) => entry.watched).length,
    attended: entries.filter((entry) => !entry.watched).length,
    byType: counts(entries.map((entry) => typeLabel(entry.kind))),
    byTeamSport: counts(entries.flatMap((entry) => entry.tags)),
    bySport: counts(entries.map((entry) => (entry.sport === 'Concerts' ? 'Concert' : entry.sport))),
    byVenue: counts(venues),
  };
}

/**
 * A date score applies to an exact day in the metro. Away nights stay unlabeled.
 * A below-floor night gets the score only when bigger events that night already
 * have one, checked against every event that date once the night has been
 * scored (C035); the seeded list is the fallback before then.
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

/** The cities you starred in the switcher, in the order you starred them. */
export function favoriteCitiesOf(log: PersonalLog = snapshot): string[] {
  return log.favoriteCities ?? [];
}

/** Star or un-star a city. Home is not starred: it is pinned on its own. */
export function toggleFavoriteCity(metroId: string) {
  if (!METROS[metroId]) return;
  const current = favoriteCitiesOf(snapshot);
  const next = current.includes(metroId) ? current.filter((id) => id !== metroId) : [...current, metroId];
  // Stamped, even when the list is now empty, so the un-star is the newer answer on every device.
  commit({ ...snapshot, favoriteCities: next, favoriteCitiesAt: new Date().toISOString() });
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


// ---------- Tags on stubs (build notes 4, T01–T13) ----------

/**
 * Put your tags on the stub or plan for an event (an entry once the date has passed). Tags are
 * optional and never on an Interested answer (T02); the editor does not offer them there.
 */
export function setStubTags(eventId: string, tags: string[]) {
  const next = normalizeTags(tags);
  const apply = <T extends { userTags?: string[] }>(row: T): T => {
    const { userTags: _old, ...rest } = row;
    void _old;
    return (next.length > 0 ? { ...rest, userTags: next } : rest) as T;
  };
  const plan = snapshot.plans.find((row) => row.eventId === eventId);
  if (plan) {
    commit({ ...snapshot, plans: snapshot.plans.map((row) => (row.id === plan.id ? apply(row) : row)) });
    return;
  }
  const entry = snapshot.added.find((row) => row.eventId === eventId);
  if (entry) commit({ ...snapshot, added: snapshot.added.map((row) => (row.id === entry.id ? apply(row) : row)) });
}

/** The same for a hand-added entry or plan, which have no catalog event behind them. */
export function setRowTags(kind: 'entry' | 'plan', id: string, tags: string[]) {
  const next = normalizeTags(tags);
  const apply = <T extends { userTags?: string[] }>(row: T): T => {
    const { userTags: _old, ...rest } = row;
    void _old;
    return (next.length > 0 ? { ...rest, userTags: next } : rest) as T;
  };
  if (kind === 'plan') commit({ ...snapshot, plans: snapshot.plans.map((row) => (row.id === id ? apply(row) : row)) });
  else commit({ ...snapshot, added: snapshot.added.map((row) => (row.id === id ? apply(row) : row)) });
}

/**
 * Rename a tag everywhere, or merge it into another you already use (T07). One save for every stub
 * and plan that carries it.
 */
export function renameTag(from: string, to: string) {
  const target = normalizeTags([to])[0];
  if (!target || target === from) return;
  commit({
    ...snapshot,
    added: retag(snapshot.added, (tag) => (tag === from ? target : tag)),
    plans: retag(snapshot.plans, (tag) => (tag === from ? target : tag)),
  });
}

/** Take a tag off every stub and plan. Never deletes a stub (T07). */
export function deleteTag(tag: string) {
  commit({
    ...snapshot,
    added: retag(snapshot.added, (t) => (t === tag ? null : t)),
    plans: retag(snapshot.plans, (t) => (t === tag ? null : t)),
  });
}

/**
 * Where you sat, on an Attended stub (build notes 4). Never on a watched entry or a live broadcast:
 * those are not in person. Empty parts are dropped; an empty set removes the field.
 */
export function setEntrySeats(entryId: string, seats: Seats | undefined) {
  const next = normalizeSeats(seats);
  commit({
    ...snapshot,
    added: snapshot.added.map((entry) => {
      if (entry.id !== entryId || entry.watched || entry.kind === 'live-broadcast') return entry;
      const { seats: _old, ...rest } = entry;
      void _old;
      return next ? { ...rest, seats: next } : rest;
    }),
  });
}
