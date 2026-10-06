// Rewrites src/data/weatherIndex.ts from data/weather/*/*.json.
// Run by weather-fetch.mjs, or alone: node scripts/weather-index.mjs

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HEADER = `// Stored weather rows, one per venue (or the city point) per hour per capture,
// and the city point's daily feels-like high and low, one per date per capture.
// scripts/weather-index.mjs rewrites this file. Do not edit by hand.
// The app reads feels-like from here; it never calls the weather service.

import type { WeatherDay, WeatherRow } from './formula/weather';

export const WEATHER_ROWS: WeatherRow[] = `;
const DAYS_HEADER = `

export const WEATHER_DAYS: WeatherDay[] = `;

export async function refreshWeatherIndex(root) {
  const base = path.join(root, 'data', 'weather');
  const rows = [];
  const days = [];
  let metros = [];
  try {
    metros = await readdir(base);
  } catch {
    metros = [];
  }
  for (const metro of metros) {
    const dir = path.join(base, metro);
    const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
    for (const f of files) {
      const parsed = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
      for (const row of parsed.rows ?? []) rows.push(row);
      for (const day of parsed.days ?? []) days.push(day);
    }
  }
  const out = path.join(root, 'src', 'data', 'weatherIndex.ts');
  const next = `${HEADER}${JSON.stringify(rows, null, 2)};${DAYS_HEADER}${JSON.stringify(days, null, 2)};\n`;
  let prev = '';
  try {
    prev = await readFile(out, 'utf8');
  } catch {
    prev = '';
  }
  const changed = prev !== next;
  if (changed) await writeFile(out, next);
  return { changed, relative: path.relative(root, out), count: rows.length, days: days.length };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const r = await refreshWeatherIndex(root);
  console.log(r.changed ? `Updated ${r.relative} (${r.count} rows).` : `No change in ${r.relative}.`);
}
