// Nightly copy of the listings the app already has for the coming days.
// The script in scripts/archive-schedule.mjs is the only reader. Screens do
// not import this, and nothing here is shown in the app.

import { METROS } from '../config/metros';
import type { CrowdEvent, LocalDate } from './types';
import { archivedReads, type ArchivedEventRead } from './forecastCapture';
import { withExpectedDraws } from './expectedDraw';
import { loadEspnSchedule } from './sources/espnSource';
import { dropTicketmasterGamesCoveredByFeeds } from './sources/types';
import { loadMlbSchedule } from './sources/mlbSource';
import { seedEvents } from './sources/seedSource';
import { loadTicketmasterEvents } from './sources/ticketmasterSource';

/** The job's Ticketmaster key, from the environment; never in the app. */
function ticketmasterKey(): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  return env?.TICKETMASTER_API_KEY || undefined;
}

/** How far past today the saved window runs, in calendar days. Today is included. */
export const ARCHIVE_HORIZON_DAYS = 14;

/** The default city when a caller names none. The nightly job loops over COVERED_METRO_IDS. */
export const ARCHIVE_METRO_ID = 'la';

export interface ScheduleSnapshotSource {
  id: string;
  name: string;
  inWindow: number;
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

async function readSource(name: string, load: () => Promise<CrowdEvent[]>): Promise<CrowdEvent[]> {
  try {
    return await load();
  } catch (err) {
    const detail = err instanceof Error ? err.message : 'unknown error';
    throw new Error(`The ${name} could not be read (${detail}). Nothing was saved.`);
  }
}

/** Listings for one city's window: live home games, plus seeded events already in the repo. */
export async function collectScheduleArchive(metroId: string = ARCHIVE_METRO_ID, now = new Date()): Promise<ScheduleSnapshot> {
  const metro = METROS[metroId];
  if (!metro) throw new Error(`Unknown metro ${metroId}. Nothing was saved.`);
  const capturedOn = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addCalendarDays(capturedOn, ARCHIVE_HORIZON_DAYS);
  const seedCatalog = seedEvents.catalog;
  if (!seedCatalog) throw new Error('The seeded catalog is missing. Nothing was saved.');

  const key = ticketmasterKey();
  const [mlb, espn, seed, tm] = await Promise.all([
    readSource('MLB schedule', () => loadMlbSchedule(metroId, through)),
    readSource('ESPN schedules', () => loadEspnSchedule(metroId)),
    readSource('seeded catalog', () => seedCatalog(metroId)),
    key ? readSource('Ticketmaster listings', async () => (await loadTicketmasterEvents(metroId, key, now)).events) : Promise.resolve([] as CrowdEvent[]),
  ]);

  const mlbWindow = inWindow(mlb, capturedOn, through);
  const espnWindow = inWindow(espn, capturedOn, through);
  const seedWindow = inWindow(seed, capturedOn, through);
  const tmWindow = inWindow(tm, capturedOn, through);
  // Each game carries the expected draw the app shows that day (Oct 7, 2026): the saved read
  // sizes events the way the live read does, and the estimate is on file before the game, to
  // be scored against the announced crowd (scripts/expected-draw-check.mjs, "Saved ahead").
  const events = withExpectedDraws(dropTicketmasterGamesCoveredByFeeds([...mlbWindow, ...espnWindow, ...seedWindow, ...tmWindow]).sort(byListing));

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
      { id: 'espn', name: 'ESPN schedules', inWindow: espnWindow.length },
      { id: 'seed', name: seedEvents.name, inWindow: seedWindow.length },
      ...(key ? [{ id: 'ticketmaster', name: 'Ticketmaster listings', inWindow: tmWindow.length }] : []),
    ],
    events,
    forecasts: archivedReads(events),
  };
}
