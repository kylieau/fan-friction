// Writes one Los Angeles schedule snapshot for today.
// Listings come from the same MLB, ESPN, and seed sources the app already uses.
// A feed that cannot be read skips that city, so a blank file is never saved; the other cities still save.

import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { refreshForecastIndex } from './forecast-index.mjs';
import { primeFromFiles } from './prime-from-files.mjs';
import { refreshScheduleIndex } from './schedule-index.mjs';
import { fanEventsFor, serviceDb } from './fan-rows.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Optional --metro=<id> for a city build; without it the nightly job covers every city.
const metroFilter = process.argv.find((arg) => arg.startsWith('--metro='))?.slice(8);

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
  const { COVERED_METRO_IDS, METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  if (metroFilter !== undefined && !COVERED_METRO_IDS.includes(metroFilter)) throw new Error(`Unknown covered metro: ${metroFilter}`);
  const metroIds = COVERED_METRO_IDS.filter((id) => metroFilter === undefined || id === metroFilter);
  // Fan-added events (Oct 22, 2026): read from the review rows with the job's key, so the snapshot the stamps read
  // carries them. Without the key the snapshot is saved as before and says nothing of fan rows.
  const { db: fanDb, reason: noFanDb } = serviceDb();
  const fanFns = fanDb ? await server.ssrLoadModule('/src/data/sources/fanSource.ts') : null;
  if (!fanDb) console.log(`Fan-added rows not read (${noFanDb}).`);
  const failed = [];
  for (const metroId of metroIds) {
  try {
  // The reads saved tonight need weather; without Supabase here, it comes from the files.
  await primeFromFiles(server, metroId);
  let extras = {};
  if (fanDb) {
    const todayLocal = new Date().toLocaleDateString('en-CA', { timeZone: METROS[metroId].timeZone });
    const fanRead = await fanEventsFor({ db: fanDb, fns: fanFns, metroId, floorLocal: todayLocal, todayLocal });
    if (fanRead.log) console.log(fanRead.log);
    // A failed read is logged and the snapshot still lists the source as read with none, never a missing night.
    extras = { fanEvents: fanRead.events };
  }
  const snapshot = await collectScheduleArchive(metroId, new Date(), extras);
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
  } catch (err) {
    // A feed that cannot be read costs that city its night, not every city (Oct 10, 2026). No blank file is written.
    failed.push(metroId);
    console.error(`${metroId}: skipped (${err instanceof Error ? err.message : err}).`);
  }
  }

  const index = await refreshScheduleIndex(root);
  console.log(index.changed ? `Updated ${index.relative} (${index.count} snapshot${index.count === 1 ? '' : 's'}).` : `No change in ${index.relative}.`);
  const forecasts = await refreshForecastIndex(root);
  console.log(
    forecasts.changed
      ? `Updated ${forecasts.relative} (${forecasts.archiveCount} archive read${forecasts.archiveCount === 1 ? '' : 's'}).`
      : `No change in ${forecasts.relative}.`,
  );
  if (failed.length > 0) {
    console.error(`No snapshot saved for ${failed.join(', ')}.`);
    exitCode = 1;
  }
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}

process.exit(exitCode);
