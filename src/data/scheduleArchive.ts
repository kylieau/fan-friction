// Nightly copy of the listings the app already has for the coming days.
// The script in scripts/archive-schedule.mjs is the only reader. Screens do
// not import this, and nothing here is shown in the app.

import { METROS } from '../config/metros';
import type { CrowdEvent, LocalDate } from './types';
import { archivedReads, type ArchivedEventRead } from './forecastCapture';
import { loadEspnSchedule } from './sources/espnSource';
import { loadMlbSchedule } from './sources/mlbSource';
import { seedEvents } from './sources/seedSource';

/** How far past today the saved window runs, in calendar days. Today is included. */
export const ARCHIVE_HORIZON_DAYS = 14;

/** Los Angeles first. Another metro is a later decision. */
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
   * The read on file for each event at this capture. A later stamp can fall
   * back to the nearest of these when no start-time forecast was saved.
   * A missing read means there was no score and no friction word. None are filled in.
   */
  forecasts: ArchivedEventRead[];
}

const NOTE =
  'Saved schedule for later stamps. Not shown in the app. A night before the first file in this folder is reconstructed. Start-time forecasts are separate files, written just before each event starts. A missing read is not a guess. Draft words copied from a seeded row are not a locked stamp.';

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

/** Listings for the Los Angeles window: live home games, plus seeded events already in the repo. */
export async function collectScheduleArchive(now = new Date()): Promise<ScheduleSnapshot> {
  const metro = METROS[ARCHIVE_METRO_ID];
  const capturedOn = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addCalendarDays(capturedOn, ARCHIVE_HORIZON_DAYS);
  const seedCatalog = seedEvents.catalog;
  if (!seedCatalog) throw new Error('The seeded catalog is missing. Nothing was saved.');

  const [mlb, espn, seed] = await Promise.all([
    readSource('MLB schedule', () => loadMlbSchedule(ARCHIVE_METRO_ID, through)),
    readSource('ESPN schedules', () => loadEspnSchedule(ARCHIVE_METRO_ID)),
    readSource('seeded catalog', () => seedCatalog(ARCHIVE_METRO_ID)),
  ]);

  const mlbWindow = inWindow(mlb, capturedOn, through);
  const espnWindow = inWindow(espn, capturedOn, through);
  const seedWindow = inWindow(seed, capturedOn, through);
  const events = [...mlbWindow, ...espnWindow, ...seedWindow].sort(byListing);

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
    ],
    events,
    forecasts: archivedReads(events),
  };
}
