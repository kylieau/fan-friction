// Rewrites src/data/resultsIndex.ts from data/results/*/*.json.
// Run by results-fetch.mjs, or alone: node scripts/results-index.mjs

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HEADER = `// Final scores and announced crowds saved by the nightly results pass.
// scripts/results-index.mjs rewrites this file. Do not edit by hand.
// Evidence on the page; the read never uses it (the no-results rule).

import type { GameResult } from './types';

export const GAME_RESULTS: GameResult[] = `;

export async function refreshResultsIndex(root) {
  const base = path.join(root, 'data', 'results');
  const rows = [];
  let metros = [];
  try {
    metros = await readdir(base);
  } catch {
    metros = [];
  }
  for (const metro of metros.sort()) {
    const dir = path.join(base, metro);
    const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
    for (const f of files) {
      const parsed = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
      for (const row of parsed.results ?? []) rows.push(row);
    }
  }
  const out = path.join(root, 'src', 'data', 'resultsIndex.ts');
  const next = `${HEADER}${JSON.stringify(rows, null, 2)};\n`;
  let current = '';
  try {
    current = await readFile(out, 'utf8');
  } catch {
    current = '';
  }
  const changed = current !== next;
  if (changed) await writeFile(out, next);
  return { changed, count: rows.length, relative: path.relative(root, out) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const r = await refreshResultsIndex(root);
  console.log(r.changed ? `Updated ${r.relative} (${r.count} results).` : `No change in ${r.relative}.`);
}
