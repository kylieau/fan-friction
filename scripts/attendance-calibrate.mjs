// Turns the collected attendance (data/attendance/<metro>/<team>.json) into
// expected draws per team, building and kind of date, written to
// src/data/expectedDrawIndex.ts. The rule lives in src/data/expectedDrawBuild.ts
// (docs/expected-draw-sports-research-answer.md; Kylie's locks in
// docs/expected-draw-decisions-oct7.md). Run after attendance-collect.mjs:
//   node scripts/attendance-calibrate.mjs
// Medians of announced counts over the last three normal seasons; nothing is invented.
// This season's games (data/results) are not in the baseline.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const HEADER = `// Expected draws from past seasons' announced crowds.
// scripts/attendance-calibrate.mjs rewrites this file. Do not edit by hand.
// Each row is the median announced attendance for one team in one building for
// one kind of date (src/data/expectedDrawBuild.ts), with the middle half of
// those games as the range. Always an estimate; the building stays the ceiling.

import type { ExpectedDrawRow } from './expectedDrawBuild';

export type { DayClass, ExpectedDrawRow } from './expectedDrawBuild';

export const EXPECTED_DRAWS: ExpectedDrawRow[] = `;

/** Every team's saved games, by metro. */
export async function loadAttendance(root) {
  const base = path.join(root, 'data', 'attendance');
  const teams = [];
  let metros = [];
  try {
    metros = await readdir(base);
  } catch {
    metros = [];
  }
  for (const metroId of metros.sort()) {
    const files = (await readdir(path.join(base, metroId))).filter((f) => f.endsWith('.json')).sort();
    for (const f of files) {
      const parsed = JSON.parse(await readFile(path.join(base, metroId, f), 'utf8'));
      teams.push({ metroId, teamId: parsed.teamId, games: parsed.games ?? [] });
    }
  }
  return teams;
}

export async function calibrate(root, build, teams = {}) {
  const rows = [];
  for (const t of await loadAttendance(root)) {
    rows.push(...build.buildDrawRows(t.metroId, t.teamId, t.games, build.optionsFor(teams[t.teamId]?.league)));
  }
  const out = path.join(root, 'src', 'data', 'expectedDrawIndex.ts');
  const next = `${HEADER}${JSON.stringify(rows, null, 2)};\n`;
  let current = '';
  try {
    current = await readFile(out, 'utf8');
  } catch {
    current = '';
  }
  const changed = current !== next;
  if (changed) await writeFile(out, next);
  return { changed, count: rows.length, relative: path.relative(root, out), rows };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
  try {
    const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
    const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
    const r = await calibrate(root, build, TEAMS);
    console.log(r.changed ? `Updated ${r.relative} (${r.count} rows).` : `No change in ${r.relative}.`);
    for (const row of r.rows.filter((row) => row.dayClass === 'all')) {
      console.log(`  ${row.teamId.padEnd(20)} ${row.venueId.padEnd(28)} median ${String(row.count).padStart(6)} (${row.low}–${row.high}) over ${row.games} games (${row.seasons})`);
    }
  } finally {
    await server.close();
  }
}
