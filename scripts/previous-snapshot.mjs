// The latest schedule snapshot saved before a date, for the nightly's stand-in rows (Kylie, Nov 13, 2026): a team
// whose feed answers a server error after its retries keeps the rows the last saved file had for it, and the city
// still saves. "Latest before" rather than "yesterday": a city that failed whole for a night or two (Detroit, Nov 11
// and 12) has a gap in its folder. Null when the folder has no earlier file (a city's first night).

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

export async function previousSnapshot(root, metroId, beforeDate) {
  const dir = path.join(root, 'data', 'schedule-archive', metroId);
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
  } catch {
    return null;
  }
  const earlier = files.filter((f) => f.slice(0, 10) < beforeDate);
  const last = earlier[earlier.length - 1];
  if (!last) return null;
  const parsed = JSON.parse(await readFile(path.join(dir, last), 'utf8'));
  return { capturedOn: parsed.capturedOn ?? last.slice(0, 10), events: Array.isArray(parsed.events) ? parsed.events : [] };
}

/** One log line per team that stood in, for the step's output. */
export function fallbackLines(metroId, snapshot) {
  return (snapshot.sources ?? [])
    .filter((s) => s.fallback)
    .flatMap((s) => s.fallback.teams.map((teamId, i) => `${metroId}: ${s.name} for ${teamId} kept from ${s.fallback.from} (${s.fallback.reasons[i]}; three tries). The city still saved.`));
}
