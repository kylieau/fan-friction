// Reads announced crowds from SIDEARM schools' own box scores into data/attendance/<metro>/<team>.json, for the
// college programs no other source sizes (build 7.3, B2; docs/reference/schedule-archive.md has the nightly's steps).
// The parsing rules live in src/data/sources/sidearmBox.ts; proof: node scripts/sidearm-box-check.mjs.
//
// Which programs: every college team the saved schedules show at home on its own school's SIDEARM calendar
// (src/data/sources/sidearmSchools.ts), in every covered city, that has no attendance on file from another source.
// Which games: the last three seasons and the current one, home games only, each kept only when the box score
// names a room on file in the team's city and an announced crowd above zero; a neutral site is skipped.
//
// Pace: one queue per site, each request waiting the site's robots.txt Crawl-delay (10 seconds when it names none),
// paths the robots file closes never read. Sites run side by side. A night's budget (--minutes, default 20) stops
// new requests when it runs out; what was read is kept, and the ledger (data/attendance-reads/sidearm.json) lets
// the next night carry on. A finished past season is never read again; the current one is re-read once a day.
//
// Personal use under SIDEARM's terms (§2.3; Kylie, Oct 27, 2026). Free, no key.
//   node scripts/attendance-sidearm.mjs                    (every city, 20-minute budget)
//   node scripts/attendance-sidearm.mjs --minutes=5 --metro=la --team=usc-wvb
//   node scripts/attendance-sidearm.mjs --plan             (the programs and their sites; reads nothing)

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];
const MINUTES = Number(arg('minutes') ?? 20);
const ONLY_METRO = arg('metro');
const ONLY_TEAM = arg('team');
const PLAN_ONLY = process.argv.includes('--plan');
const DEFAULT_DELAY_S = 10;
const UA = 'Mozilla/5.0 (compatible; fan-friction attendance reader; personal use; +https://github.com/kylieau/fan-friction)';
const LEDGER = path.join(root, 'data', 'attendance-reads', 'sidearm.json');

const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
const deadline = Date.now() + MINUTES * 60_000;
const siteKey = (site) => site.replace(/^https?:\/\//, '').replace(/[^a-z0-9]+/gi, '-');

const readJson = async (file, fallback) => {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch {
    return fallback;
  }
};

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let exitCode = 0;
try {
  const box = await server.ssrLoadModule('/src/data/sources/sidearmBox.ts');
  const { SIDEARM_SCHOOLS } = await server.ssrLoadModule('/src/data/sources/sidearmSchools.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');

  // ---------- The programs, from the saved schedules ----------
  const schoolByKey = new Map(SIDEARM_SCHOOLS.map((s) => [`${s.metroId}|${siteKey(s.site)}`, s]));
  const programs = new Map();
  const archive = path.join(root, 'data', 'schedule-archive');
  for (const metroId of (await readdir(archive)).sort()) {
    if (ONLY_METRO && metroId !== ONLY_METRO) continue;
    const files = (await readdir(path.join(archive, metroId)).catch(() => [])).filter((f) => f.endsWith('.json'));
    for (const f of files) {
      const snap = await readJson(path.join(archive, metroId, f), {});
      for (const e of snap.events ?? []) {
        if (e.sourceId !== 'sidearm' || e.kind !== 'game' || !e.teams?.home || !TEAMS[e.teams.home]) continue;
        const key = e.id.slice(11).match(/^sa-(.+)-[^-]+$/)?.[1];
        const school = key && schoolByKey.get(`${metroId}|${key}`);
        // The school's own home row only ("USC vs. Cal Poly"): an away row on its calendar names another school's
        // program, whose box scores live on that school's site.
        if (!school || !e.title?.startsWith(`${school.short} vs.`)) continue;
        if (ONLY_TEAM && e.teams.home !== ONLY_TEAM) continue;
        const team = TEAMS[e.teams.home];
        const division = e.audience?.division ?? (/\bwomen'?s\b/i.test(team.name) ? 'women' : /\bmen'?s\b/i.test(team.name) ? 'men' : undefined);
        programs.set(team.id, { metroId, teamId: team.id, site: school.site, sport: e.audience?.sport ?? 'other', division });
      }
    }
  }

  // A program another source already sizes keeps that source alone.
  const targets = [];
  for (const p of [...programs.values()].sort((a, b) => a.teamId.localeCompare(b.teamId))) {
    const file = await readJson(path.join(root, 'data', 'attendance', p.metroId, `${p.teamId}.json`), null);
    if ((file?.games ?? []).some((g) => g.sourceId !== 'sidearm')) continue;
    if (!box.sportPaths(p.sport, p.division).length) continue;
    targets.push(p);
  }
  const sites = new Map();
  for (const t of targets) sites.set(t.site, [...(sites.get(t.site) ?? []), t]);
  console.log(`${targets.length} programs on ${sites.size} school sites; budget ${MINUTES} min.`);
  if (PLAN_ONLY) {
    for (const [site, list] of sites) console.log(`  ${site}: ${list.map((t) => t.teamId).join(', ')}`);
    process.exit(0);
  }

  // ---------- The ledger: what each program's seasons and box scores came to ----------
  const ledger = await readJson(LEDGER, { schema: 1, teams: {} });
  const gamesByTeam = new Map();
  const touched = new Set();
  const loadGames = async (t) => {
    if (!gamesByTeam.has(t.teamId)) {
      const file = await readJson(path.join(root, 'data', 'attendance', t.metroId, `${t.teamId}.json`), null);
      gamesByTeam.set(t.teamId, file?.games ?? []);
    }
    return gamesByTeam.get(t.teamId);
  };

  async function keep(t, season, g) {
    const rows = await loadGames(t);
    const row = { teamId: t.teamId, season, date: g.date, start: null, opponent: g.opponent, venueId: g.venueId, attendance: g.attendance, kind: 'announced', sourceId: 'sidearm', ...(g.postseason ? { postseason: true } : {}) };
    const at = rows.findIndex((x) => x.sourceId === 'sidearm' && x.date === g.date && x.opponent === g.opponent);
    if (at >= 0) rows[at] = row;
    else rows.push(row);
    touched.add(t.teamId);
    tally.kept++;
  }

  // ---------- One site's queue ----------
  const tally = { pages: 0, kept: 0, skipped: 0, stoppedSites: 0 };
  async function readSite(site, list) {
    let last = 0;
    let delayMs = DEFAULT_DELAY_S * 1000;
    let allows = () => true;
    const get = async (p) => {
      if (Date.now() + delayMs > deadline) return { stop: 'budget' };
      const wait = last + delayMs - Date.now();
      if (wait > 0) await new Promise((r) => setTimeout(r, wait));
      last = Date.now();
      tally.pages++;
      try {
        const r = await fetch(`${site}${p}`, { headers: { 'User-Agent': UA, Accept: 'text/html' }, redirect: 'follow', signal: AbortSignal.timeout(60_000) });
        if (r.status === 429 || r.status >= 500) return { stop: `${r.status}` };
        return { status: r.status, text: r.ok ? await r.text() : '' };
      } catch (err) {
        return { stop: err?.name === 'TimeoutError' ? 'timeout' : 'network' };
      }
    };

    const robots = await get('/robots.txt');
    if (robots.stop) return note(site, `stopped before starting (${robots.stop})`);
    if (robots.status === 200) {
      const rules = box.robotsFor(robots.text);
      if (rules.delaySeconds !== undefined) delayMs = Math.max(rules.delaySeconds, 1) * 1000;
      allows = rules.allows;
    }

    for (const t of list) {
      const entry = (ledger.teams[t.teamId] ??= { site, seasons: {} });
      entry.site = site;
      const seasons = box.seasonsToRead(t.sport, today);
      // Games held back for a room not on file, placed again against tonight's rooms; nothing is fetched.
      for (const s of seasons) {
        for (const [id, held] of Object.entries(entry.seasons[s.label]?.boxes ?? {})) {
          if (typeof held !== 'object' || held.status !== 'no-room') continue;
          const venueId = box.boxRoom(t.metroId, held.places, held.date);
          if (!venueId) continue;
          entry.seasons[s.label].boxes[id] = 'kept';
          touched.add('ledger');
          await keep(t, s.season, { ...held, venueId });
        }
      }
      // The site's path for the program, found once on the last finished season's page.
      if (!entry.path) {
        for (const p of box.sportPaths(t.sport, t.division)) {
          const probe = `/sports/${p}/stats/${seasons[seasons.length - 2].label}`;
          if (!allows(probe)) continue;
          const r = await get(probe);
          if (r.stop) return note(site, `stopped (${r.stop})`);
          if (r.status === 200 && box.indexGames(r.text)) {
            entry.path = p;
            break;
          }
        }
        if (!entry.path) {
          entry.unreadable = today;
          touched.add('ledger');
          console.log(`  ${t.teamId}: no stats page on ${site}`);
          continue;
        }
      }
      for (const s of seasons) {
        const rec = (entry.seasons[s.label] ??= { boxes: {} });
        const current = s === seasons[seasons.length - 1];
        if (rec.done || (current && rec.readOn === today)) continue;
        const indexPath = `/sports/${entry.path}/stats/${s.label}`;
        if (!allows(indexPath)) {
          rec.done = true;
          continue;
        }
        const r = await get(indexPath);
        if (r.stop) return note(site, `stopped (${r.stop})`);
        const games = r.status === 200 ? box.indexGames(r.text) : null;
        rec.readOn = today;
        touched.add('ledger');
        if (!games) {
          // No page for a past season (the program was not on this site yet): nothing to read, ever.
          if (!current) rec.done = true;
          continue;
        }
        let open = 0;
        for (const g of games) {
          if (!g.home) continue;
          if (rec.boxes[g.boxId] || g.date >= today) {
            if (!rec.boxes[g.boxId]) open++;
            continue;
          }
          if (!allows(g.boxUrl)) {
            rec.boxes[g.boxId] = 'closed';
            continue;
          }
          const b = await get(g.boxUrl);
          if (b.stop) return note(site, `stopped (${b.stop})`);
          const facts = b.status === 200 ? box.boxFacts(b.text) : null;
          const venueId = facts && !facts.neutral ? box.boxRoom(t.metroId, facts.places, g.date) : undefined;
          const status = !facts ? 'unreadable' : facts.neutral ? 'neutral' : !facts.attendance ? 'no-crowd' : !venueId ? 'no-room' : 'kept';
          // A room not on file keeps the game's facts, so a later night places it once the room is added.
          rec.boxes[g.boxId] = status === 'no-room' ? { status, places: facts.places, date: g.date, opponent: g.opponent, attendance: facts.attendance, ...(facts.postseason ? { postseason: true } : {}) } : status;
          if (status !== 'kept') {
            tally.skipped++;
            continue;
          }
          await keep(t, s.season, { date: g.date, opponent: g.opponent, venueId, attendance: facts.attendance, postseason: facts.postseason });
        }
        // A past season is done once every home game has an answer; the current one keeps coming back.
        if (!current && open === 0 && games.filter((g) => g.home).every((g) => rec.boxes[g.boxId])) rec.done = true;
      }
    }
    return undefined;
  }
  function note(site, why) {
    tally.stoppedSites++;
    console.log(`  ${site}: ${why}; carries on next night`);
  }

  await Promise.all([...sites].map(([site, list]) => readSite(site, list)));

  // ---------- Save ----------
  for (const t of targets) {
    if (!touched.has(t.teamId)) continue;
    const rows = gamesByTeam.get(t.teamId).sort((a, b) => a.date.localeCompare(b.date));
    const dir = path.join(root, 'data', 'attendance', t.metroId);
    await mkdir(dir, { recursive: true });
    const out = { schema: 1, metroId: t.metroId, teamId: t.teamId, collectedOn: today, games: rows };
    await writeFile(path.join(dir, `${t.teamId}.json`), `${JSON.stringify(out, null, 2)}\n`);
  }
  if (touched.size) {
    await mkdir(path.dirname(LEDGER), { recursive: true });
    const sorted = Object.fromEntries(Object.entries(ledger.teams).sort(([a], [b]) => a.localeCompare(b)));
    await writeFile(LEDGER, `${JSON.stringify({ schema: 1, teams: sorted }, null, 2)}\n`);
  }
  console.log(`Read ${tally.pages} pages: kept ${tally.kept} crowds, skipped ${tally.skipped} (neutral, blank, or room not on file); ${tally.stoppedSites} sites stopped early.`);
} catch (err) {
  console.error(err);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
