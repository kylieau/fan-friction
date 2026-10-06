// Turns the collected attendance (data/attendance/<metro>/<team>.json, plus the
// nightly results under data/results) into expected draws per team and bucket,
// written to src/data/expectedDrawIndex.ts. The review's calibration plan
// (docs/formula-review-response.md §11): expected attendance for a game is the
// median of that team's home games in the same bucket, where a bucket is the
// day class (weekday, Friday, Saturday, Sunday) and the month. Run after
// attendance-collect.mjs: node scripts/attendance-calibrate.mjs
// Medians of announced counts; nothing is invented. A bucket with too few games
// falls back to the day class, then to the team.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIN_GAMES = 3;

const HEADER = `// Expected draws from past seasons' announced crowds.
// scripts/attendance-calibrate.mjs rewrites this file. Do not edit by hand.
// Each row is the median announced attendance for one team in one bucket
// (day class, and month when there were enough games). Always an estimate;
// the building stays the ceiling. The read uses it to size an event when
// no expected draw is seeded on the event itself.

export type DayClass = 'weekday' | 'friday' | 'saturday' | 'sunday';

export interface ExpectedDrawRow {
  metroId: string;
  teamId: string;
  dayClass: DayClass | 'all';
  /** 1–12, or null for the day-class-wide figure. */
  month: number | null;
  count: number;
  games: number;
  seasons: string;
}

export const EXPECTED_DRAWS: ExpectedDrawRow[] = `;

function dayClass(date) {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay();
  if (day === 5) return 'friday';
  if (day === 6) return 'saturday';
  if (day === 0) return 'sunday';
  return 'weekday';
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function seasonsOf(games) {
  return [...new Set(games.map((g) => g.season ?? g.date.slice(0, 4)))].sort().join(',');
}

export async function calibrate(root) {
  const base = path.join(root, 'data', 'attendance');
  const rows = [];
  let metros = [];
  try {
    metros = await readdir(base);
  } catch {
    metros = [];
  }
  for (const metroId of metros.sort()) {
    const dir = path.join(base, metroId);
    const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
    // The nightly results pass adds this season's games as they finish.
    const resultsDir = path.join(root, 'data', 'results', metroId);
    const recent = [];
    try {
      for (const f of (await readdir(resultsDir)).filter((f) => f.endsWith('.json'))) {
        const parsed = JSON.parse(await readFile(path.join(resultsDir, f), 'utf8'));
        for (const r of parsed.results ?? []) {
          if (r.attendance && r.homeTeamId) recent.push({ teamId: r.homeTeamId, date: r.date, attendance: r.attendance, postseason: undefined });
        }
      }
    } catch {
      /* no results yet */
    }
    for (const f of files) {
      const parsed = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
      const teamId = parsed.teamId;
      const seen = new Set(parsed.games.map((g) => g.date));
      // Regular season only: a playoff crowd is the occasion rule's job, not the baseline.
      const games = [
        ...parsed.games.filter((g) => !g.postseason),
        ...recent.filter((g) => g.teamId === teamId && !seen.has(g.date)),
      ];
      if (games.length === 0) continue;
      rows.push({ metroId, teamId, dayClass: 'all', month: null, count: median(games.map((g) => g.attendance)), games: games.length, seasons: seasonsOf(games) });
      for (const dc of ['weekday', 'friday', 'saturday', 'sunday']) {
        const inClass = games.filter((g) => dayClass(g.date) === dc);
        if (inClass.length < MIN_GAMES) continue;
        rows.push({ metroId, teamId, dayClass: dc, month: null, count: median(inClass.map((g) => g.attendance)), games: inClass.length, seasons: seasonsOf(inClass) });
        for (let month = 1; month <= 12; month++) {
          const inMonth = inClass.filter((g) => Number(g.date.slice(5, 7)) === month);
          if (inMonth.length < MIN_GAMES) continue;
          rows.push({ metroId, teamId, dayClass: dc, month, count: median(inMonth.map((g) => g.attendance)), games: inMonth.length, seasons: seasonsOf(inMonth) });
        }
      }
    }
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
  const r = await calibrate(root);
  console.log(r.changed ? `Updated ${r.relative} (${r.count} rows).` : `No change in ${r.relative}.`);
  for (const row of r.rows.filter((row) => row.dayClass === 'all')) {
    console.log(`  ${row.teamId.padEnd(14)} median ${String(row.count).padStart(6)} over ${row.games} games (${row.seasons})`);
  }
}
