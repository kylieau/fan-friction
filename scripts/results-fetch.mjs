// Saves the final scores and announced crowds for the last few days' games.
// Runs in the nightly job after the schedule archive: node scripts/results-fetch.mjs
// One file per date under data/results/la/. A feed that cannot be read stops the
// run, so a half-empty file is never saved. Never invents a number.

import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { refreshResultsIndex } from './results-index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const server = await createServer({
  root,
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

let exitCode = 0;
try {
  const { collectResults } = await server.ssrLoadModule('/src/data/sources/results.ts');
  const { COVERED_METRO_IDS } = await server.ssrLoadModule('/src/config/metros.ts');
  for (const RESULTS_METRO_ID of COVERED_METRO_IDS) {
  const { from, through, rows } = await collectResults(RESULTS_METRO_ID);
  const dir = path.join(root, 'data', 'results', RESULTS_METRO_ID);
  await mkdir(dir, { recursive: true });

  const byDate = new Map();
  for (const row of rows) {
    if (!byDate.has(row.date)) byDate.set(row.date, []);
    byDate.get(row.date).push(row);
  }
  let saved = 0;
  for (const [date, fresh] of byDate) {
    const file = path.join(dir, `${date}.json`);
    let previous = [];
    try {
      previous = JSON.parse(await readFile(file, 'utf8')).results ?? [];
    } catch {
      previous = [];
    }
    // A fresh row replaces the old one for the same game; rows the feeds no longer list are kept.
    const freshIds = new Set(fresh.map((row) => row.eventId));
    const merged = [...previous.filter((row) => !freshIds.has(row.eventId)), ...fresh].sort((a, b) =>
      a.eventId.localeCompare(b.eventId),
    );
    const same =
      previous.length === merged.length &&
      JSON.stringify(previous.map(({ capturedAt, ...r }) => r)) === JSON.stringify(merged.map(({ capturedAt, ...r }) => r));
    if (same) continue;
    const tmp = `${file}.tmp`;
    await writeFile(tmp, `${JSON.stringify({ schema: 1, metroId: RESULTS_METRO_ID, date, results: merged }, null, 2)}\n`);
    await rename(tmp, file);
    saved++;
  }
  console.log(`${RESULTS_METRO_ID}: results ${from} through ${through}: ${rows.length} final${rows.length === 1 ? '' : 's'}, ${saved} file${saved === 1 ? '' : 's'} changed.`);
  }
  const index = await refreshResultsIndex(root);
  console.log(index.changed ? `Updated ${index.relative} (${index.count} results).` : `No change in ${index.relative}.`);
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}

process.exit(exitCode);
