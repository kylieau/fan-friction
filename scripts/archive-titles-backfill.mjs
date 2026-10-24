// Rewrites the school-feed rows in data/schedule-archive/<metro>/*.json the way the feed is read now (build 7.1,
// M9 and M38, Oct 24, 2026): the program leaves the title ("UCLA Men's Basketball vs. Cal Baptist" → "UCLA vs.
// Cal Baptist") and the sport, level and side go on the audience. Titles and audiences only: a file's `forecasts`
// (the saved verdicts) and every other field stay byte for byte. Rerunning changes nothing.
// Usage: node scripts/archive-titles-backfill.mjs [--dry-run] [--metro=la]

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const metroFilter = process.argv.find((arg) => arg.startsWith('--metro='))?.slice(8);
const base = path.join(root, 'data', 'schedule-archive');

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const { repairSidearmRow } = await server.ssrLoadModule('/src/data/sources/sidearmSource.ts');
  const metros = (await readdir(base, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).filter((m) => !metroFilter || m === metroFilter);
  let files = 0;
  let rows = 0;
  const samples = [];
  for (const metro of metros) {
    const dir = path.join(base, metro);
    for (const f of (await readdir(dir)).filter((n) => n.endsWith('.json')).sort()) {
      const file = path.join(dir, f);
      const text = await readFile(file, 'utf8');
      const parsed = JSON.parse(text);
      let changed = 0;
      parsed.events = (parsed.events ?? []).map((e) => {
        const fixed = repairSidearmRow(e);
        if (fixed === e) return e;
        changed += 1;
        if (samples.length < 6) samples.push(`${e.title} → ${fixed.title}`);
        // The archive keeps the facts it kept: a team record the file never carried is not added here.
        const { teams, ...rest } = fixed;
        return e.teams ? fixed : rest;
      });
      if (!changed) continue;
      files += 1;
      rows += changed;
      if (!dryRun) await writeFile(file, `${JSON.stringify(parsed, null, 2)}\n`);
    }
  }
  console.log(`${dryRun ? 'Would rewrite' : 'Rewrote'} ${rows} school rows in ${files} files.`);
  for (const s of samples) console.log(`  ${s}`);
} finally {
  await server.close();
}
