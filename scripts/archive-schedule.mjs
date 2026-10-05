// Writes one Los Angeles schedule snapshot for today.
// Listings come from the same MLB, ESPN, and seed sources the app already uses.
// A feed that cannot be read stops the run, so a blank file is never saved.

import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { refreshForecastIndex } from './forecast-index.mjs';
import { refreshScheduleIndex } from './schedule-index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function withoutClock(snapshot) {
  const { capturedAt, ...rest } = snapshot;
  return rest;
}

const server = await createServer({
  root,
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

let exitCode = 0;
try {
  const { collectScheduleArchive } = await server.ssrLoadModule('/src/data/scheduleArchive.ts');
  const { shouldReplaceStartForecast, startForecastsFor } = await server.ssrLoadModule('/src/data/forecastCapture.ts');
  const snapshot = await collectScheduleArchive();
  const dir = path.join(root, 'data', 'schedule-archive', snapshot.metroId);
  const file = path.join(dir, `${snapshot.capturedOn}.json`);
  const relative = path.relative(root, file);
  const counts = snapshot.sources.map((source) => `${source.id} ${source.inWindow}`).join(', ');

  let previous = null;
  try {
    previous = JSON.parse(await readFile(file, 'utf8'));
  } catch {
    previous = null;
  }

  if (previous && JSON.stringify(withoutClock(previous)) === JSON.stringify(withoutClock(snapshot))) {
    console.log(`No change in ${relative} (${snapshot.events.length} events: ${counts}).`);
  } else {
    await mkdir(dir, { recursive: true });
    const tmp = `${file}.tmp`;
    await writeFile(tmp, `${JSON.stringify(snapshot, null, 2)}\n`);
    await rename(tmp, file);
    console.log(`Saved ${relative} (${snapshot.events.length} events, ${snapshot.window.from} through ${snapshot.window.through}: ${counts}).`);
  }
  const startDir = path.join(root, 'data', 'schedule-archive', snapshot.metroId, 'start-forecasts');
  const starting = startForecastsFor(snapshot.metroId, snapshot.timeZone, snapshot.events);
  for (const record of starting) {
    if (!/^[\w.-]+$/.test(record.eventId)) {
      throw new Error(`Event id "${record.eventId}" cannot be a file name. Nothing else was saved for it.`);
    }
    const forecastFile = path.join(startDir, `${record.eventId}.json`);
    let previous = null;
    try {
      previous = JSON.parse(await readFile(forecastFile, 'utf8'));
    } catch {
      previous = null;
    }
    if (!shouldReplaceStartForecast(previous, record)) {
      console.log(`Kept the closer start-time forecast for ${record.eventId}.`);
      continue;
    }
    await mkdir(startDir, { recursive: true });
    const tmp = `${forecastFile}.tmp`;
    await writeFile(tmp, `${JSON.stringify(record, null, 2)}\n`);
    await rename(tmp, forecastFile);
    console.log(
      `Saved start-time forecast for ${record.eventId} (${record.minutesBeforeStart} min before ${record.start}${record.read ? '' : ', no number on file'}).`,
    );
  }
  if (starting.length === 0) console.log('No Los Angeles event starts in the next window.');

  const index = await refreshScheduleIndex(root);
  console.log(index.changed ? `Updated ${index.relative} (${index.count} snapshot${index.count === 1 ? '' : 's'}).` : `No change in ${index.relative}.`);
  const forecasts = await refreshForecastIndex(root);
  console.log(
    forecasts.changed
      ? `Updated ${forecasts.relative} (${forecasts.startCount} start-time, ${forecasts.archiveCount} archive).`
      : `No change in ${forecasts.relative}.`,
  );
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}

process.exit(exitCode);
