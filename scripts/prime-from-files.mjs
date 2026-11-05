// For scripts that compute reads without Supabase (the nightly archive, the
// formula table): fill the app's catalog cache from the files on disk,
// so weather, results and snapshots resolve the way they do in the app.
// Usage, after a vite dev server is up:  await primeFromFiles(server, 'la')
//
// Weather is read from the city's own day files (data/weather/<metro>/*.json), not from src/data/weatherIndex.ts:
// past about 45 MB that module no longer parses (Nov 2, 2026: "Failed to convert rust `String` into napi `string`"),
// and the nightly archive skipped every city for three nights.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** One city's stored weather, in the order weather-index.mjs writes it (its day files, sorted by name). */
export async function weatherFromFiles(metroId) {
  const dir = path.join(root, 'data', 'weather', metroId);
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  } catch {
    files = [];
  }
  const hours = [];
  const days = [];
  for (const f of files) {
    const parsed = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
    hours.push(...(parsed.rows ?? []).filter((r) => r.metroId === metroId));
    days.push(...(parsed.days ?? []).filter((d) => d.metroId === metroId));
  }
  return { hours, days };
}

export async function primeFromFiles(server, metroId) {
  const { primeFromRows } = await server.ssrLoadModule('/src/data/catalogCache.ts');
  const { GAME_RESULTS } = await server.ssrLoadModule('/src/data/resultsIndex.ts');
  const { ARCHIVE_FORECASTS } = await server.ssrLoadModule('/src/data/startForecastIndex.ts');
  const { hours, days } = await weatherFromFiles(metroId);
  primeFromRows(metroId, {
    hours,
    days,
    results: GAME_RESULTS.filter((r) => r.metroId === metroId),
    snapshots: ARCHIVE_FORECASTS.filter((r) => r.metroId === metroId),
  });
}
