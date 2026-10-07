// Turns the collected attendance (data/attendance/<metro>/<team>.json) into
// expected draws per team, building and kind of date, written to
// src/data/expectedDrawIndex.ts. The rule lives in src/data/expectedDrawBuild.ts
// (docs/archive/research/expected-draw-sports-research-answer.md; Kylie's locks in
// docs/expected-draw-decisions-oct7.md). Run after attendance-collect.mjs:
//   node scripts/attendance-calibrate.mjs
// Medians of announced counts over the last three normal seasons; nothing is invented.
// This season's games (data/results) are not in the baseline; they set the season
// level, and with past meetings the opponent ratios, in the leagues where each won.
// The nightly job runs this after saving the night's results.

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

import type { ExpectedDrawRow, OpponentRatioRow, SeasonLevelRow } from './expectedDrawBuild';

export type { DayClass, ExpectedDrawRow, OpponentRatioRow, SeasonLevelRow } from './expectedDrawBuild';

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

/**
 * This season's regular-season home games so far, from the nightly results. A result
 * counts only when its saved listing shows it was not a playoff or preseason game
 * (results themselves don't say), and only after the last season on file.
 */
async function thisSeasonGames(root, metroId) {
  const listed = new Map();
  const archiveDir = path.join(root, 'data', 'schedule-archive', metroId);
  for (const f of (await readdir(archiveDir).catch(() => [])).filter((f) => f.endsWith('.json'))) {
    for (const e of JSON.parse(await readFile(path.join(archiveDir, f), 'utf8')).events ?? []) listed.set(e.id, e);
  }
  const games = [];
  const resultsDir = path.join(root, 'data', 'results', metroId);
  for (const f of (await readdir(resultsDir).catch(() => [])).filter((f) => f.endsWith('.json'))) {
    for (const r of JSON.parse(await readFile(path.join(resultsDir, f), 'utf8')).results ?? []) {
      const e = listed.get(r.eventId);
      if (!e || e.stakes || e.preseason || !r.attendance || !r.homeTeamId || !r.venueId) continue;
      games.push({ teamId: r.homeTeamId, date: r.date, venueId: r.venueId, attendance: r.attendance, opponent: r.away?.name, opener: !!e.homeOpener });
    }
  }
  return games;
}

export async function calibrate(root, build, teams = {}) {
  const rows = [];
  const levels = [];
  const opponents = [];
  const seasonGames = new Map();
  for (const t of await loadAttendance(root)) {
    const league = teams[t.teamId]?.league;
    const opts = build.optionsFor(league);
    const teamRows = build.buildDrawRows(t.metroId, t.teamId, t.games, opts);
    rows.push(...teamRows);
    if (teamRows.length === 0) continue;

    // The files hold complete seasons, so the one being played is the next.
    const lastSeason = Math.max(...t.games.map((g) => g.season));
    const lastDate = t.games.reduce((a, g) => (g.date > a ? g.date : a), '');
    const season = lastSeason + 1;
    if (!seasonGames.has(t.metroId)) seasonGames.set(t.metroId, await thisSeasonGames(root, t.metroId));
    const soFar = seasonGames
      .get(t.metroId)
      .filter((g) => g.teamId === t.teamId && g.date > lastDate)
      .map((g) => ({ ...g, season }))
      .sort((a, b) => a.date.localeCompare(b.date));
    const openers = new Set(soFar.filter((g) => g.opener).map((g) => g.date));
    const lv = build.seasonLevel(teamRows, t.teamId, league, soFar, openers);
    if (lv) levels.push({ metroId: t.metroId, teamId: t.teamId, season, level: Math.round(lv.level * 1000) / 1000, games: lv.games });

    const window = [...new Set(build.normalGames(t.teamId, t.games, opts).map((g) => g.season))].sort((a, b) => b - a).slice(0, opts.windowSeasons ?? build.WINDOW_SEASONS);
    const meetings = [...build.normalGames(t.teamId, t.games, opts).filter((g) => window.includes(g.season)), ...soFar];
    const names = new Map();
    for (const g of meetings) if (g.opponent) names.set(build.opponentKey(g.opponent), g.opponent);
    for (const [key, name] of [...names.entries()].sort()) {
      const op = build.opponentRatio(teamRows, t.teamId, league, name, meetings, season);
      if (op) opponents.push({ metroId: t.metroId, teamId: t.teamId, opponent: key, ratio: Math.round(op.ratio * 1000) / 1000, games: op.games });
    }
  }
  const out = path.join(root, 'src', 'data', 'expectedDrawIndex.ts');
  const next =
    `${HEADER}${JSON.stringify(rows, null, 2)};\n\n` +
    `/** This season's level per team, once enough home games are in (expectedDrawBuild.ts seasonLevel). */\n` +
    `export const SEASON_LEVELS: SeasonLevelRow[] = ${JSON.stringify(levels, null, 2)};\n\n` +
    `/** How each opponent has drawn at each team's games (expectedDrawBuild.ts opponentRatio). */\n` +
    `export const OPPONENT_RATIOS: OpponentRatioRow[] = ${JSON.stringify(opponents, null, 2)};\n`;
  let current = '';
  try {
    current = await readFile(out, 'utf8');
  } catch {
    current = '';
  }
  const changed = current !== next;
  if (changed) await writeFile(out, next);
  return { changed, count: rows.length, relative: path.relative(root, out), rows, levels, opponents };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
  try {
    const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
    const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
    const r = await calibrate(root, build, TEAMS);
    console.log(r.changed ? `Updated ${r.relative} (${r.count} rows, ${r.levels.length} season levels, ${r.opponents.length} opponent ratios).` : `No change in ${r.relative}.`);
    for (const row of r.rows.filter((row) => row.dayClass === 'all')) {
      console.log(`  ${row.teamId.padEnd(20)} ${row.venueId.padEnd(28)} median ${String(row.count).padStart(6)} (${row.low}–${row.high}) over ${row.games} games (${row.seasons})`);
    }
  } finally {
    await server.close();
  }
}
