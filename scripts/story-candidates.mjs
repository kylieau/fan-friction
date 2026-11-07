// The story section's candidates (build 7.2, Section D, D4b; the drafting loop's step 1 in
// docs/archive/proposals/story-plan.md, Kylie's yes Nov 7, 2026): after a nightly run, the past week's events with the
// biggest verdicts and the sold-out ones, with no story yet. Reads the files on disk only: each date's listings from
// the schedule archive saved that morning (data/schedule-archive/<metro>/<date>.json), the date's verdict as the app
// shows a settled date (savedNightRead over the snapshots the archive index carries), the results files for the
// score and the attendance. No catalog read, no network (Codex, group 13 review: the first cut read the catalog, which
// is Supabase or the live feeds); it writes no data (vite's config loader leaves a temp file under node_modules, as
// every check script does). A person picks from the list, gathers up to three public links, and a model drafts from
// those alone (docs/research/topics/story-draft-prompt.md).
// Usage: node scripts/story-candidates.mjs [metro ...] [--days=7] [--json]

import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { primeFromFiles } from './prime-from-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const days = Number(args.find((a) => a.startsWith('--days='))?.slice(7) ?? 7);
const asJson = args.includes('--json');
const metros = args.filter((a) => !a.startsWith('--'));

const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const addDays = (d, n) => new Date(Date.parse(`${d}T12:00:00Z`) + n * 864e5).toISOString().slice(0, 10);
const out = [];
let skipped = 0;
try {
  const data = await server.ssrLoadModule('/src/data/index.ts');
  const { STORIES } = await server.ssrLoadModule('/src/data/seed/stories.ts');
  const { METROS, COVERED_METRO_IDS } = await server.ssrLoadModule('/src/config/metros.ts');
  const { listTitle } = await server.ssrLoadModule('/src/lib/eventTitle.ts');
  const ids = metros.length > 0 ? metros : COVERED_METRO_IDS;
  for (const metroId of ids) {
    if (!METROS[metroId]) throw new Error(`Unknown metro: ${metroId}`);
    await primeFromFiles(server, metroId);
    const today = data.todayIn(METROS[metroId]);
    const dates = Array.from({ length: days }, (_, i) => addDays(today, -(i + 1)));
    const results = new Map();
    for (const date of dates) {
      const file = path.join(root, 'data', 'results', metroId, `${date}.json`);
      const parsed = await readFile(file, 'utf8').then((t) => JSON.parse(t)).catch(() => null);
      for (const r of parsed?.results ?? []) results.set(r.eventId, r);
    }
    // Each date's listings from the archive file saved that morning (the day before's file holds the date too when a
    // nightly failed), and the verdict as the app shows a settled date: the last read saved before the day's last start.
    const dayReads = [];
    for (const date of dates) {
      let listings = null;
      for (const file of [date, addDays(date, -1)]) {
        const parsed = await readFile(path.join(root, 'data', 'schedule-archive', metroId, `${file}.json`), 'utf8').then((t) => JSON.parse(t)).catch(() => null);
        const events = (parsed?.events ?? []).filter((e) => e.date === date);
        if (events.length > 0) { listings = events; break; }
      }
      if (!listings) continue;
      const saved = data.savedNightRead(metroId, date, listings);
      dayReads.push({ date, events: listings, verdict: saved?.rating ?? null });
    }
    // The biggest verdicts: the week's top three dates, their biggest draw and any sold-out room that day; plus every
    // sold-out event in the window whatever its date's verdict. An event with a story already is left out (D4b).
    const rated = dayReads.filter((d) => d.verdict != null).sort((a, b) => b.verdict - a.verdict);
    const top = new Set(rated.slice(0, 3).map((d) => d.date));
    for (const { date, events: listed, verdict } of dayReads) {
      const events = [...listed].sort((a, b) => (data.drawSize(b) ?? 0) - (data.drawSize(a) ?? 0));
      for (const [i, e] of events.entries()) {
        const soldOut = (e.crowd ?? []).some((f) => f.soldOut);
        const biggest = i === 0 && top.has(date);
        if (!soldOut && !biggest) continue;
        if (STORIES[e.id]) { skipped++; continue; }
        const r = results.get(e.id);
        out.push({
          metroId,
          date,
          eventId: e.id,
          title: listTitle(e),
          verdict,
          why: biggest ? 'biggest draw on a top verdict' : 'sold out',
          attendance: r?.attendance ?? null,
          final: r ? `${r.away?.name ?? ''} ${r.away?.score ?? ''} – ${r.home?.name ?? ''} ${r.home?.score ?? ''}`.trim() : null,
        });
      }
    }
  }
} finally {
  await server.close();
}
out.sort((a, b) => (b.verdict ?? 0) - (a.verdict ?? 0) || a.date.localeCompare(b.date));
if (asJson) console.log(JSON.stringify(out, null, 2));
else {
  console.log(`${out.length} candidates in the last ${days} days with no story yet (${skipped} left out for having one)`);
  for (const c of out) console.log(`${c.metroId.padEnd(18)} ${c.date}  ${String(c.verdict ?? '—').padStart(4)}  ${c.why.padEnd(28)} ${c.title}${c.final ? ` · ${c.final}` : ''}${c.attendance ? ` · ${c.attendance.toLocaleString('en-US')}` : ''}  ${c.eventId}`);
}
