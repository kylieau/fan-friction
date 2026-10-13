// Splice Raleigh–Durham-only calibrate rows onto origin/main expectedDrawIndex.ts (additions only).
// Appends to EXPECTED_DRAWS, SEASON_LEVELS and OPPONENT_RATIOS. POSTSEASON_DRAWS stays byte-identical to origin/main
// (the shared playoff pool is not rewritten for one city). Run: node scripts/.append-raleigh-durham-draws.mjs
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { calibrate } from './attendance-calibrate.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RDU_TEAMS = new Set([
  'hurricanes', 'nc-state-football', 'nc-state-mbb', 'nc-state-wbb', 'unc-football', 'unc-mbb', 'unc-wbb',
  'duke-football', 'duke-mbb', 'duke-wbb', 'nccu-football', 'nccu-mbb', 'nccu-wbb', 'durham-bulls', 'nc-courage',
]);

function isRduRow(row) {
  return row.metroId === 'raleigh-durham' || (row.teamId && RDU_TEAMS.has(row.teamId));
}

const ARRAY_END = {
  EXPECTED_DRAWS: "\n];\n\n/** This season's level per team",
  SEASON_LEVELS: "\n];\n\n/** How each opponent has drawn",
  OPPONENT_RATIOS: "\n];\n\n/** Playoff occupancy per team",
  POSTSEASON_DRAWS: '\n];\n',
};

function arrayBounds(src, constName) {
  const start = src.indexOf(`export const ${constName}:`);
  if (start < 0) throw new Error(`missing ${constName}`);
  const eq = src.indexOf('=', start);
  const open = src.indexOf('[', eq);
  let close;
  if (constName === 'POSTSEASON_DRAWS') {
    close = src.lastIndexOf('\n];');
  } else {
    close = src.indexOf(ARRAY_END[constName], open);
  }
  if (close < 0) throw new Error(`end not found for ${constName}`);
  return { open, close };
}

function parseRduRows(src, constName) {
  const { open, close } = arrayBounds(src, constName);
  const body = src.slice(open + 1, close).trim();
  if (!body) return [];
  return JSON.parse(`[${body}]`).filter(isRduRow);
}

function formatRows(rows) {
  return rows
    .map((r) =>
      JSON.stringify(r, null, 2)
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n'),
    )
    .join(',\n');
}

function appendRows(src, constName, rows) {
  if (rows.length === 0) return src;
  const { open, close } = arrayBounds(src, constName);
  const before = src.slice(0, close).trimEnd();
  const after = src.slice(close);
  return `${before},\n${formatRows(rows)}${after}`;
}

const mainSrc = execSync('git show origin/main:src/data/expectedDrawIndex.ts', { encoding: 'utf8', cwd: root, maxBuffer: 256 * 1024 * 1024 });

const server = await createServer({
  root,
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
try {
  const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
  const venues = await server.ssrLoadModule('/src/data/venues.ts');
  await calibrate(root, build, TEAMS, venues);
  const fullSrc = readFileSync(path.join(root, 'src/data/expectedDrawIndex.ts'), 'utf8');
  let out = mainSrc;
  for (const name of ['EXPECTED_DRAWS', 'SEASON_LEVELS', 'OPPONENT_RATIOS']) {
    const rows = parseRduRows(fullSrc, name);
    out = appendRows(out, name, rows);
    console.log(`${name}: +${rows.length}`);
  }
  writeFileSync(path.join(root, 'src/data/expectedDrawIndex.ts'), out);
} finally {
  await server.close();
}
