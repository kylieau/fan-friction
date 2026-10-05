// Rewrites src/data/startForecastIndex.ts from the archive files on disk.
// The archive script runs this after a successful save. It can also be run
// on its own: node scripts/forecast-index.mjs
// It copies numbers that are already in those files. It does not invent any.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HEADER = `// Start-time forecasts and daily-schedule reads on disk.
// scripts/forecast-index.mjs rewrites this file after an archive run.
// Do not edit by hand. Los Angeles only.

export interface IndexedForecastRead {
  rating?: number;
  friction?: 'Low' | 'Moderate' | 'Heavy' | 'Extreme';
  why?: string;
  method: 'hand' | 'formula' | 'nearby';
}

/** Written just before an event's scheduled start. */
export interface StartForecastRow {
  metroId: string;
  eventId: string;
  date: string;
  start: string;
  capturedAt: string;
  minutesBeforeStart: number;
  read?: IndexedForecastRead;
}

/**
 * A read taken from a daily schedule file, not from a start-time capture.
 * One row per event per file. The stamp uses the row closest to the start.
 */
export interface ArchiveForecastRow {
  metroId: string;
  eventId: string;
  date: string;
  start: string | null;
  capturedAt: string;
  capturedOn: string;
  read?: IndexedForecastRead;
}

`;

const FRICTION = new Set(['Low', 'Moderate', 'Heavy', 'Extreme']);
const METHODS = new Set(['hand', 'formula', 'nearby']);

function cleanRead(value) {
  if (!value || typeof value !== 'object') return undefined;
  if (typeof value.method !== 'string' || !METHODS.has(value.method)) return undefined;
  const rating = typeof value.rating === 'number' && Number.isFinite(value.rating) ? value.rating : undefined;
  const friction = typeof value.friction === 'string' && FRICTION.has(value.friction) ? value.friction : undefined;
  if (rating == null && !friction) return undefined;
  const why = typeof value.why === 'string' && value.why.trim() ? value.why : undefined;
  const read = { method: value.method };
  if (rating != null) read.rating = rating;
  if (friction) read.friction = friction;
  if (why) read.why = why;
  return read;
}

/**
 * A friction word stored on the event itself, for a daily file that predates
 * stored forecasts. No score is added, because that file did not save one.
 * Below-floor rooms are skipped by the caller: their own word does not feed the read.
 */
function readFromAssessment(event) {
  const friction = event?.assessment?.friction;
  if (typeof friction !== 'string' || !FRICTION.has(friction)) return undefined;
  const why = typeof event.assessment.why === 'string' && event.assessment.why.trim() ? event.assessment.why : undefined;
  const read = { method: 'hand', friction };
  if (why) read.why = why;
  return read;
}

function emit(startRows, archiveRows) {
  return `${HEADER}export const START_FORECASTS: readonly StartForecastRow[] = ${JSON.stringify(startRows, null, 2)};

export const ARCHIVE_FORECASTS: readonly ArchiveForecastRow[] = ${JSON.stringify(archiveRows, null, 2)};
`;
}

async function readJsonDir(dir) {
  try {
    const names = (await readdir(dir)).filter((name) => name.endsWith('.json')).sort();
    const files = [];
    for (const name of names) {
      files.push({ name, raw: JSON.parse(await readFile(path.join(dir, name), 'utf8')) });
    }
    return files;
  } catch (err) {
    if (err && err.code === 'ENOENT') return [];
    throw err;
  }
}

/** Read every forecast file and write the lists the stamp imports. */
export async function refreshForecastIndex(root) {
  const archive = path.join(root, 'data', 'schedule-archive');
  const startRows = [];
  const archiveRows = [];
  let metros = [];
  try {
    metros = await readdir(archive, { withFileTypes: true });
  } catch {
    metros = [];
  }

  for (const metro of metros) {
    if (!metro.isDirectory()) continue;
    const metroDir = path.join(archive, metro.name);
    const daily = await readJsonDir(metroDir);
    for (const file of daily) {
      const raw = file.raw;
      const metroId = raw?.metroId;
      const capturedAt = raw?.capturedAt;
      const capturedOn = raw?.capturedOn;
      if (typeof metroId !== 'string' || typeof capturedAt !== 'string' || typeof capturedOn !== 'string') {
        throw new Error(`Snapshot ${metro.name}/${file.name} is missing a capture time. The forecast list was not rewritten.`);
      }
      if (Array.isArray(raw.forecasts)) {
        for (const row of raw.forecasts) {
          if (!row || typeof row.eventId !== 'string' || typeof row.date !== 'string') {
            throw new Error(`Snapshot ${metro.name}/${file.name} has a forecast row without an event. The forecast list was not rewritten.`);
          }
          const read = cleanRead(row.read);
          archiveRows.push({
            metroId,
            eventId: row.eventId,
            date: row.date,
            start: typeof row.start === 'string' ? row.start : null,
            capturedAt,
            capturedOn,
            ...(read ? { read } : {}),
          });
        }
        continue;
      }
      const events = Array.isArray(raw.events) ? raw.events : [];
      for (const event of events) {
        if (!event || typeof event.id !== 'string' || typeof event.date !== 'string') continue;
        // An older file stored the event, not a forecast. A below-floor room's own
        // word does not feed the read. No date score is added, because this file
        // did not save one.
        const read = event.belowFloor === true ? undefined : readFromAssessment(event);
        archiveRows.push({
          metroId,
          eventId: event.id,
          date: event.date,
          start: typeof event.start === 'string' ? event.start : null,
          capturedAt,
          capturedOn,
          ...(read ? { read } : {}),
        });
      }
    }

    const startDir = path.join(metroDir, 'start-forecasts');
    const starts = await readJsonDir(startDir);
    for (const file of starts) {
      const raw = file.raw;
      if (raw?.kind !== 'start-forecast' || raw?.schema !== 1) {
        throw new Error(`Start forecast ${metro.name}/start-forecasts/${file.name} is not a start-time record. The forecast list was not rewritten.`);
      }
      if (typeof raw.metroId !== 'string' || typeof raw.eventId !== 'string' || typeof raw.date !== 'string') {
        throw new Error(`Start forecast ${metro.name}/start-forecasts/${file.name} is missing an event. The forecast list was not rewritten.`);
      }
      if (typeof raw.start !== 'string' || typeof raw.capturedAt !== 'string' || typeof raw.minutesBeforeStart !== 'number') {
        throw new Error(`Start forecast ${metro.name}/start-forecasts/${file.name} is missing its start. The forecast list was not rewritten.`);
      }
      const read = cleanRead(raw.read);
      startRows.push({
        metroId: raw.metroId,
        eventId: raw.eventId,
        date: raw.date,
        start: raw.start,
        capturedAt: raw.capturedAt,
        minutesBeforeStart: raw.minutesBeforeStart,
        ...(read ? { read } : {}),
      });
    }
  }

  startRows.sort((a, b) => a.metroId.localeCompare(b.metroId) || a.date.localeCompare(b.date) || a.eventId.localeCompare(b.eventId));
  archiveRows.sort(
    (a, b) =>
      a.metroId.localeCompare(b.metroId) ||
      a.capturedOn.localeCompare(b.capturedOn) ||
      a.date.localeCompare(b.date) ||
      a.eventId.localeCompare(b.eventId),
  );

  const file = path.join(root, 'src', 'data', 'startForecastIndex.ts');
  const next = emit(startRows, archiveRows);
  let previous = '';
  try {
    previous = await readFile(file, 'utf8');
  } catch {
    previous = '';
  }
  const relative = path.relative(root, file);
  if (previous === next) return { changed: false, relative, startCount: startRows.length, archiveCount: archiveRows.length };
  await writeFile(file, next);
  return { changed: true, relative, startCount: startRows.length, archiveCount: archiveRows.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const index = await refreshForecastIndex(root);
  console.log(
    index.changed
      ? `Updated ${index.relative} (${index.startCount} start-time, ${index.archiveCount} archive).`
      : `No change in ${index.relative}.`,
  );
}
