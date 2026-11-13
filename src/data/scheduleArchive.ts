// Nightly copy of the listings the app already has for the coming days.
// The script in scripts/archive-schedule.mjs is the only reader. Screens do
// not import this, and nothing here is shown in the app.

import { METROS } from '../config/metros';
import type { CrowdEvent, LocalDate } from './types';
import { archivedReads, type ArchivedEventRead } from './forecastCapture';
import { loadDrawTables, withExpectedDraws } from './expectedDraw';
import { loadEspnScheduleTolerant, type FeedFailure } from './sources/espnSource';
import { loadHockeytechSchedule } from './sources/hockeytechSource';
import { dropGamesCoveredByFeeds } from './sources/types';
import { loadMlbSchedule } from './sources/mlbSource';
import { seedEvents } from './sources/seedSource';
import { loadTicketmasterEvents } from './sources/ticketmasterSource';
import { loadSidearmSchedule } from './sources/sidearmSource';
import { loadJambaseEvents, JAMBASE_METROS } from './sources/jambaseSource';
import { dropShowsTicketmasterHas } from './sources/seatgeekSource';

/** The job's Ticketmaster key, from the environment; never in the app. */
function ticketmasterKey(): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  return env?.TICKETMASTER_API_KEY || undefined;
}

/** The job's JamBase key, from the environment; never in the app. */
function jambaseKey(): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  return env?.JAMBASE_API_KEY || undefined;
}

/** How far past today the saved window runs, in calendar days. Today is included. */
export const ARCHIVE_HORIZON_DAYS = 14;

/** The default city when a caller names none. The nightly job loops over COVERED_METRO_IDS. */
export const ARCHIVE_METRO_ID = 'la';

export interface ScheduleSnapshotSource {
  id: string;
  name: string;
  inWindow: number;
  /**
   * Set when part of this source stood in from an earlier snapshot (Kylie, Nov 13, 2026): a team whose schedule the
   * feed would not give after its retries keeps the rows the last saved file had for it, and the city still saves.
   * `from` is that file's capture date; `teams` the team ids carried; `reasons` the feed's answers. Those rows are up
   * to that many days old, and a game on the window's last day is not in them (the earlier window ended sooner).
   */
  fallback?: { from: LocalDate; teams: string[]; reasons: string[] };
}

export interface ScheduleSnapshot {
  schema: 1;
  metroId: string;
  metroName: string;
  timeZone: string;
  /** The metro's calendar date when this file was written. */
  capturedOn: LocalDate;
  /** Clock time of the write. A same-day rerun keeps the earlier time when the listings match. */
  capturedAt: string;
  horizonDays: number;
  window: { from: LocalDate; through: LocalDate };
  /**
   * Plain reminder for someone opening the file later.
   * A night with no snapshot on or before that date is reconstructed.
   */
  note: string;
  sources: ScheduleSnapshotSource[];
  events: CrowdEvent[];
  /**
   * The read on file for each event at this capture. A later stamp uses the
   * latest of these saved before the event's start. A missing read means there
   * was no score and no friction word. None are filled in.
   */
  forecasts: ArchivedEventRead[];
}

const NOTE =
  'Saved schedule for later stamps. Not shown in the app. A night before the first file in this folder is reconstructed. The stamp uses the latest daily file saved before an event starts. A missing read is not a guess. Draft words copied from a seeded row are not a locked stamp.';

function addCalendarDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day + days));
  const y = utc.getUTCFullYear();
  const m = String(utc.getUTCMonth() + 1).padStart(2, '0');
  const d = String(utc.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function inWindow(events: CrowdEvent[], from: LocalDate, through: LocalDate): CrowdEvent[] {
  return events.filter((event) => event.date >= from && event.date <= through);
}

function byListing(a: CrowdEvent, b: CrowdEvent): number {
  const start = (event: CrowdEvent) => event.start ?? '99:99';
  return (a.date + start(a) + a.sourceId + a.id).localeCompare(b.date + start(b) + b.sourceId + b.id);
}

async function readSource<T = CrowdEvent[]>(name: string, load: () => Promise<T>): Promise<T> {
  try {
    return await load();
  } catch (err) {
    const detail = err instanceof Error ? err.message : 'unknown error';
    throw new Error(`The ${name} could not be read (${detail}). Nothing was saved.`);
  }
}

export interface ArchiveExtras {
  /**
   * Fan-added events (step 2 of the Add a game / Add a show card), read by the job from the review rows with its own
   * key (scripts/fan-rows.mjs) since Oct 22, 2026, so the snapshot the stamps read carries them; `undefined` when the
   * job had no key, and then the source is not listed. Ranked last: a feed's copy of the same game or show wins.
   */
  fanEvents?: CrowdEvent[];
  /**
   * The latest earlier snapshot of this city, read by the script from disk, for a team whose feed fails tonight:
   * its rows from there stand in (the `fallback` on the source line says so). Without it a failed team fails the
   * city, as before Nov 13, 2026 (a city's first night has nothing to fall back on).
   */
  previous?: { capturedOn: LocalDate; events: CrowdEvent[] };
}

/**
 * The ESPN listing with each failed team's rows taken from the earlier snapshot. Throws, as the plain read does, when
 * every team failed (nothing is fresh) or a team failed and there is no earlier snapshot to stand in.
 */
async function espnWithFallback(metroId: string, previous: ArchiveExtras['previous']): Promise<{ events: CrowdEvent[]; failed: FeedFailure[] }> {
  const read = await loadEspnScheduleTolerant(metroId);
  if (read.failed.length === 0) return read;
  if (!previous) throw new Error(`${read.failed.map((f) => f.reason).join('; ')}; no earlier snapshot to stand in`);
  const failedTeams = new Set(read.failed.map((f) => f.teamId));
  const fresh = new Set(read.events.map((e) => e.id));
  // Every ESPN row is a home game, so the team is `teams.home`. A row the fresh read already has (another team's
  // listing of the same game) is not doubled.
  const carried = previous.events.filter((e) => e.sourceId === 'espn' && e.teams && failedTeams.has(e.teams.home) && !fresh.has(e.id));
  return { events: [...read.events, ...carried].sort(byListing), failed: read.failed };
}

/** Listings for one city's window: live home games, plus seeded events already in the repo. */
export async function collectScheduleArchive(metroId: string = ARCHIVE_METRO_ID, now = new Date(), extras: ArchiveExtras = {}): Promise<ScheduleSnapshot> {
  await loadDrawTables();
  const metro = METROS[metroId];
  if (!metro) throw new Error(`Unknown metro ${metroId}. Nothing was saved.`);
  const capturedOn = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addCalendarDays(capturedOn, ARCHIVE_HORIZON_DAYS);
  const seedCatalog = seedEvents.catalog;
  if (!seedCatalog) throw new Error('The seeded catalog is missing. Nothing was saved.');

  const key = ticketmasterKey();
  const jbKey = jambaseKey();
  const [mlb, espn, ht, seed, tm, sa, jb] = await Promise.all([
    readSource('MLB schedule', () => loadMlbSchedule(metroId, through)),
    readSource('ESPN schedules', () => espnWithFallback(metroId, extras.previous)),
    readSource('HockeyTech schedules', () => loadHockeytechSchedule(metroId)),
    readSource('seeded catalog', () => seedCatalog(metroId)),
    key ? readSource('Ticketmaster listings', async () => (await loadTicketmasterEvents(metroId, key, now)).events) : Promise.resolve([] as CrowdEvent[]),
    readSource('School calendars', () => loadSidearmSchedule(metroId)),
    jbKey && JAMBASE_METROS.includes(metroId) ? readSource('JamBase concerts', async () => (await loadJambaseEvents(metroId, jbKey)).events) : Promise.resolve([] as CrowdEvent[]),
  ]);

  const mlbWindow = inWindow(mlb, capturedOn, through);
  const espnWindow = inWindow(espn.events, capturedOn, through);
  const espnFallback =
    espn.failed.length > 0 && extras.previous
      ? { from: extras.previous.capturedOn, teams: espn.failed.map((f) => f.teamId), reasons: espn.failed.map((f) => f.reason) }
      : undefined;
  const htWindow = inWindow(ht, capturedOn, through);
  const seedWindow = inWindow(seed, capturedOn, through);
  const tmWindow = inWindow(tm, capturedOn, through);
  const saWindow = inWindow(sa, capturedOn, through);
  const jbWindow = inWindow(jb, capturedOn, through);
  // A fan show the sellers already list is theirs (the shared one-show key); fan games go through the one-game rule.
  const fanAll = inWindow(extras.fanEvents ?? [], capturedOn, through);
  const fanWindow = dropShowsTicketmasterHas(fanAll.filter((e) => e.kind !== 'game'), [...tmWindow, ...jbWindow]).concat(fanAll.filter((e) => e.kind === 'game'));
  // Each game carries the expected draw the app shows that day (Oct 7, 2026): the saved read
  // sizes events the way the live read does, and the estimate is on file before the game, to
  // be scored against the announced crowd (scripts/expected-draw-check.mjs, "Saved ahead").
  const events = withExpectedDraws(dropGamesCoveredByFeeds([...mlbWindow, ...espnWindow, ...htWindow, ...seedWindow, ...saWindow, ...tmWindow, ...jbWindow, ...fanWindow]).sort(byListing));

  return {
    schema: 1,
    metroId: metro.id,
    metroName: metro.name,
    timeZone: metro.timeZone,
    capturedOn,
    capturedAt: now.toISOString(),
    horizonDays: ARCHIVE_HORIZON_DAYS,
    window: { from: capturedOn, through },
    note: NOTE,
    sources: [
      { id: 'mlb', name: 'MLB schedule', inWindow: mlbWindow.length },
      { id: 'espn', name: 'ESPN schedules', inWindow: espnWindow.length, ...(espnFallback ? { fallback: espnFallback } : {}) },
      { id: 'hockeytech', name: 'HockeyTech schedules', inWindow: htWindow.length },
      { id: 'seed', name: seedEvents.name, inWindow: seedWindow.length },
      ...(key ? [{ id: 'ticketmaster', name: 'Ticketmaster listings', inWindow: tmWindow.length }] : []),
      { id: 'sidearm', name: 'School calendars', inWindow: saWindow.length },
      ...(jbKey && JAMBASE_METROS.includes(metroId) ? [{ id: 'jambase', name: 'JamBase concerts', inWindow: jbWindow.length }] : []),
      ...(extras.fanEvents ? [{ id: 'fan', name: 'Fan-added events', inWindow: fanWindow.length }] : []),
    ],
    events,
    forecasts: archivedReads(events),
  };
}
