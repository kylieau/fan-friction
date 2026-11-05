// For scripts that compute reads without Supabase (the nightly archive, the
// formula table): fill the app's catalog cache from the files on disk,
// so weather, results and snapshots resolve the way they do in the app.
// Usage, after a vite dev server is up:  await primeFromFiles(server, 'la')
//
// Weather is read from the city's own day files (data/weather/<metro>/*.json). The old src/data/weatherIndex.ts
// stopped parsing past about 45 MB (Nov 2, 2026) and was retired on Nov 4.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** One city's stored weather, its day files in name order. */
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
