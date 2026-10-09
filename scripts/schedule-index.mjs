// Rewrites src/data/scheduleArchiveIndex.ts from the snapshot files on disk.
// The nightly archive script runs this after a successful save. It can also
// be run on its own: node scripts/schedule-index.mjs

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HEADER = `// Snapshot windows on disk. scripts/schedule-index.mjs rewrites this file
// after a nightly archive run. A night inside a window can be stamped from
// the saved schedule. Do not edit by hand.

export interface ScheduleSnapshotSpan {
  metroId: string;
  capturedOn: string;
  from: string;
  through: string;
  /** The sources that ran for this capture (mlb, espn, ticketmaster, ...). A date is "checked" only when every source the city uses now ran. */
  sources: string[];
}

export const SCHEDULE_SNAPSHOTS: readonly ScheduleSnapshotSpan[] = [
`;

function emit(spans) {
  const rows = spans
    .map(
      (span) =>
        `  { metroId: '${span.metroId}', capturedOn: '${span.capturedOn}', from: '${span.from}', through: '${span.through}', sources: [${span.sources.map((s) => `'${s}'`).join(', ')}] },`,
    )
    .join('\n');
  return `${HEADER}${rows}\n];\n`;
}

/** Read every snapshot file and write the coverage list the app imports. */
export async function refreshScheduleIndex(root) {
  const archive = path.join(root, 'data', 'schedule-archive');
  const spans = [];
  let metros = [];
  try {
    metros = await readdir(archive, { withFileTypes: true });
  } catch {
    metros = [];
  }
  for (const metro of metros) {
    if (!metro.isDirectory()) continue;
    const dir = path.join(archive, metro.name);
    const files = (await readdir(dir)).filter((name) => name.endsWith('.json')).sort();
    for (const name of files) {
      const raw = JSON.parse(await readFile(path.join(dir, name), 'utf8'));
      const from = raw?.window?.from;
      const through = raw?.window?.through;
      const capturedOn = raw?.capturedOn;
      const metroId = raw?.metroId;
      if (typeof metroId !== 'string' || typeof capturedOn !== 'string' || typeof from !== 'string' || typeof through !== 'string') {
        throw new Error(`Snapshot ${metro.name}/${name} is missing a window. The coverage list was not rewritten.`);
      }
      const sources = Array.isArray(raw?.sources) ? raw.sources.map((s) => s?.id).filter((id) => typeof id === 'string') : [];
      spans.push({ metroId, capturedOn, from, through, sources });
    }
  }
  spans.sort((a, b) => a.metroId.localeCompare(b.metroId) || a.capturedOn.localeCompare(b.capturedOn));
  const file = path.join(root, 'src', 'data', 'scheduleArchiveIndex.ts');
  const next = emit(spans);
  let previous = '';
  try {
    previous = await readFile(file, 'utf8');
  } catch {
    previous = '';
  }
  const relative = path.relative(root, file);
  if (previous === next) return { changed: false, relative, count: spans.length };
  await writeFile(file, next);
  return { changed: true, relative, count: spans.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const index = await refreshScheduleIndex(root);
  console.log(index.changed ? `Updated ${index.relative} (${index.count}).` : `No change in ${index.relative}.`);
}
