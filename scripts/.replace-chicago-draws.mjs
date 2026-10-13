// Replace Chicago-only calibrate rows in expectedDrawIndex.ts; other metros stay byte-identical to origin/main.
// POSTSEASON_DRAWS: non-Chicago rows match origin/main; Chicago rows come from the latest calibrate pass.
// Run: node scripts/.replace-chicago-draws.mjs
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { calibrate } from './attendance-calibrate.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function isChicagoRow(row) {
  return row.metroId === 'chicago';
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

function parseArray(src, constName) {
  const { open, close } = arrayBounds(src, constName);
  const body = src.slice(open + 1, close).trim();
  if (!body) return [];
  return JSON.parse(`[${body}]`);
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

function replaceMetroRows(src, constName, freshRows) {
  const { open, close } = arrayBounds(src, constName);
  const kept = parseArray(src, constName).filter((r) => !isChicagoRow(r));
  const merged = [...kept, ...freshRows];
  const before = src.slice(0, open + 1);
  const after = src.slice(close);
  const body = merged.length ? `\n${formatRows(merged)}\n` : '\n';
  return `${before}${body}${after}`;
}

const mainSrc = execSync('git show origin/main:src/data/expectedDrawIndex.ts', {
  encoding: 'utf8',
  cwd: root,
  maxBuffer: 256 * 1024 * 1024,
});

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
    const fresh = parseArray(fullSrc, name).filter(isChicagoRow);
    out = replaceMetroRows(out, name, fresh);
    console.log(`${name}: ${fresh.length} Chicago rows replaced`);
  }
  const postChi = parseArray(fullSrc, 'POSTSEASON_DRAWS').filter(isChicagoRow);
  out = replaceMetroRows(out, 'POSTSEASON_DRAWS', postChi);
  console.log(`POSTSEASON_DRAWS: ${postChi.length} Chicago rows replaced`);
  writeFileSync(path.join(root, 'src/data/expectedDrawIndex.ts'), out);
} finally {
  await server.close();
}
