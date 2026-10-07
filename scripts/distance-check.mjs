// The distance-discount check (docs/distance-discount-proposal.md, Kylie's lock Oct 7, 2026:
// candidate B as the default to test, straight-line miles, check before building).
//
// Question: when another big event competes the same night, does a home game draw less
// than its own expected draw, and does that depend on how far away the competitor is?
//
// Pre-registered before the first run (Oct 7, 2026):
// - A game's baseline is the app's expected draw for it, built from the seasons before
//   its own (the same leave-earlier prediction as expected-draw-check.mjs). The outcome
//   is log(announced ÷ baseline).
// - Preseason and postseason games are out. Sellouts are out (announced ≥ 97% of the
//   building's setup for that sport); their share is reported per group.
// - A competitor is another home game in the attendance files, same metro, same date,
//   5,000+ announced, whose window overlaps (the formula's time factor > 0; durations by
//   sport as in crowdFight.ts, a one-hour buffer). Concerts are not on file for past
//   dates, so this is a sports-only test; it says so.
// - Groups: no competitor; nearest competitor within NEAR; nearest beyond FAR; between.
// - Even seasons choose (NEAR, FAR) from the grid below by the pair whose weighted pull
//   explains the outcome best (least-squares slope, improvement in mean absolute error);
//   odd seasons score the chosen pair, candidate A and candidate B on untouched games.
// - Passing: on odd seasons, the fade must lower the mean absolute error of the outcome
//   against no fade (every competitor at full weight) AND against the null (no competitor
//   effect at all). If no fade beats the null, the premise fails and the doc says so.
//
//   node scripts/distance-check.mjs   → docs/distance-check.md

import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { loadAttendance } from './attendance-calibrate.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// ---- Pre-registered ----
const FRICTION = 5000;
const SELLOUT = 0.97;
const DURATION = { football: 3.25, baseball: 2.75, basketball: 2.5, hockey: 2.5, soccer: 2 };
const CANDIDATES = { A: [10, 30], B: [15, 45] };
const GRID_NEAR = [5, 10, 15, 20];
const GRID_FAR = [25, 30, 45, 60];
// ------------------------

const fade = (near, far) => (mi) => (mi <= near ? 1 : mi >= far ? 0 : 1 - (mi - near) / (far - near));
const hourOf = (start) => {
  if (!start) return undefined;
  const [h, m] = start.split(':').map(Number);
  return h + m / 60;
};
/** The formula's time factor: 1 when the windows overlap, fading to 0 over four hours of gap. */
function timeFactor(a, b) {
  const sa = hourOf(a.start), sb = hourOf(b.start);
  if (sa == null || sb == null) return 0.5;
  const [first, firstStart, secondStart] = sa <= sb ? [a, sa, sb] : [b, sb, sa];
  const gap = secondStart - (firstStart + (DURATION[first.sport] ?? 2.5) + 1);
  return Math.max(0, Math.min(1, 1 - gap / 4));
}
const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : NaN;
};
const mean = (xs) => xs.reduce((a, b) => a + b, 0) / (xs.length || 1);
const mae = (xs) => mean(xs.map(Math.abs));
const pct = (x) => `${(x * 100).toFixed(1)}%`;
/** Least-squares slope and intercept of y on x. */
function fit(xs, ys) {
  const mx = mean(xs), my = mean(ys);
  let num = 0, den = 0;
  for (let i = 0; i < xs.length; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) ** 2; }
  const slope = den ? num / den : 0;
  return { slope, intercept: my - slope * mx };
}

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
  const { VENUES, capacityOn } = await server.ssrLoadModule('/src/data/venues.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
  const { milesBetween } = await server.ssrLoadModule('/src/lib/windows.ts');
  const teamsOnFile = await loadAttendance(root);

  // 1. Every game with an announced crowd, tagged with its sport and location.
  const games = [];
  for (const t of teamsOnFile) {
    const team = TEAMS[t.teamId];
    for (const g of t.games) {
      if (!(g.attendance > 0) || !VENUES[g.venueId]) continue;
      games.push({ ...g, metroId: t.metroId, sport: team?.sport ?? 'other', league: team?.league ?? 'Other', location: VENUES[g.venueId].location });
    }
  }
  const byMetroDate = new Map();
  for (const g of games) {
    const k = `${g.metroId}|${g.date}`;
    if (!byMetroDate.has(k)) byMetroDate.set(k, []);
    byMetroDate.get(k).push(g);
  }

  // 2. Baselines: each season predicted from the seasons before it (leave-earlier), as the app would.
  const rows = [];
  let sellouts = 0, noBaseline = 0;
  for (const t of teamsOnFile) {
    const league = TEAMS[t.teamId]?.league ?? 'Other';
    const all = t.games.filter((g) => g.attendance > 0 && !g.postseason && !g.preseason && VENUES[g.venueId]);
    const seasons = [...new Set(all.map((g) => g.season))].sort((a, b) => a - b);
    for (const season of seasons.slice(1)) {
      const before = all.filter((g) => g.season < season);
      const drawRows = build.buildDrawRows(t.metroId, t.teamId, before, build.optionsFor(league));
      const thisSeason = all.filter((g) => g.season === season);
      const openers = build.openerDates(thisSeason);
      for (const g of thisSeason) {
        const base = build.pickDraw(drawRows, { teamId: t.teamId, venueId: g.venueId, date: g.date, opener: openers.has(g.date) })?.count;
        if (!base) { noBaseline++; continue; }
        const sport = TEAMS[t.teamId]?.sport;
        const cap = capacityOn(VENUES[g.venueId], g.date, sport) ?? capacityOn(VENUES[g.venueId], g.date);
        const soldOut = cap ? g.attendance >= SELLOUT * cap : false;
        const me = { ...g, sport, location: VENUES[g.venueId].location };
        const competitors = (byMetroDate.get(`${t.metroId}|${g.date}`) ?? [])
          .filter((o) => !(o.teamId === g.teamId && o.date === g.date && o.start === g.start) && o.attendance >= FRICTION)
          .map((o) => ({ miles: milesBetween(me.location, o.location), t: timeFactor(me, o), size: o.attendance }))
          .filter((c) => c.t > 0);
        rows.push({ teamId: t.teamId, metroId: t.metroId, league, season, date: g.date, y: Math.log(g.attendance / base), soldOut, competitors, nearest: competitors.length ? Math.min(...competitors.map((c) => c.miles)) : null });
        if (soldOut) sellouts++;
      }
    }
  }
  const usable = rows.filter((r) => !r.soldOut);
  const pull = (r, f) => r.competitors.reduce((s, c) => s + c.t * f(c.miles) * c.size, 0) / 10000;

  // 3. Groups on every usable game (descriptive, both halves).
  const groupOf = (r, near, far) => (r.nearest == null ? 'no competitor' : r.nearest <= near ? `nearest within ${near} mi` : r.nearest > far ? `nearest beyond ${far} mi` : `nearest ${near}–${far} mi`);
  const groupTable = (near, far) => {
    const names = ['no competitor', `nearest within ${near} mi`, `nearest ${near}–${far} mi`, `nearest beyond ${far} mi`];
    const out = [];
    for (const name of names) {
      const all = rows.filter((r) => groupOf(r, near, far) === name);
      const open = all.filter((r) => !r.soldOut);
      out.push(`| ${name} | ${all.length} | ${pct(all.length ? all.filter((r) => r.soldOut).length / all.length : 0)} | ${open.length ? pct(Math.exp(median(open.map((r) => r.y))) - 1) : '—'} | ${open.length ? pct(Math.exp(mean(open.map((r) => r.y))) - 1) : '—'} |`);
    }
    return out;
  };

  // 4. Choose on even seasons, score on odd.
  const even = usable.filter((r) => r.season % 2 === 0);
  const odd = usable.filter((r) => r.season % 2 === 1);
  const scoreFade = (train, test, f) => {
    const { slope, intercept } = fit(train.map((r) => pull(r, f)), train.map((r) => r.y));
    const resid = test.map((r) => r.y - (intercept + slope * pull(r, f)));
    return { slope, mae: mae(resid) };
  };
  const nullMae = (train, test) => { const c = mean(train.map((r) => r.y)); return mae(test.map((r) => r.y - c)); };
  const noFade = () => 1;
  const grid = [];
  for (const near of GRID_NEAR) for (const far of GRID_FAR) if (far > near) grid.push({ near, far, ...scoreFade(even, even, fade(near, far)) });
  grid.sort((a, b) => a.mae - b.mae);
  const chosen = grid[0];

  const oddNull = nullMae(even, odd);
  const oddNoFade = scoreFade(even, odd, noFade);
  const oddChosen = scoreFade(even, odd, fade(chosen.near, chosen.far));
  const oddA = scoreFade(even, odd, fade(...CANDIDATES.A));
  const oddB = scoreFade(even, odd, fade(...CANDIDATES.B));

  // Per league, on odd seasons: does any competitor effect show?
  const leagueLines = [];
  for (const league of [...new Set(odd.map((r) => r.league))].sort()) {
    const tr = even.filter((r) => r.league === league), te = odd.filter((r) => r.league === league);
    if (tr.length < 30 || te.length < 30) continue;
    const withC = te.filter((r) => r.competitors.length), without = te.filter((r) => !r.competitors.length);
    leagueLines.push(`| ${league} | ${te.length} | ${withC.length} | ${without.length ? pct(Math.exp(median(without.map((r) => r.y))) - 1) : '—'} | ${withC.length ? pct(Math.exp(median(withC.map((r) => r.y))) - 1) : '—'} | ${pct(nullMae(tr, te))} | ${pct(scoreFade(tr, te, noFade).mae)} | ${pct(scoreFade(tr, te, fade(...CANDIDATES.B)).mae)} |`);
  }

  const verdict = (() => {
    const beatsNull = (s) => s.mae < oddNull - 1e-6;
    if (!beatsNull(oddNoFade) && !beatsNull(oddB) && !beatsNull(oddChosen)) return '**No competitor effect shows on untouched seasons: neither full-weight competition nor any fade lowers the error against ignoring competitors. Crowd fight\'s premise, that same-night events cost each other buyers, is not supported by announced crowds in these cities, at least for sports against sports. The distance discount is moot until that is understood; nothing should be built.**';
    const fadeHelps = oddB.mae < oddNoFade.mae - 1e-6 || oddChosen.mae < oddNoFade.mae - 1e-6;
    if (fadeHelps) return `**A competitor effect shows, and distance matters: the fade lowers the error against full-weight competition on untouched seasons. The data-chosen pair is near ${chosen.near} mi, far ${chosen.far} mi; candidate B ${oddB.mae < oddChosen.mae + 1e-6 ? 'does as well' : 'does less well'}.**`;
    return '**A competitor effect shows, but distance does not separate it: full-weight competition does as well as any fade on untouched seasons. Distance is the wrong proxy; keep Crowd fight as it is.**';
  })();

  const lines = [];
  lines.push('# The distance-discount check');
  lines.push('');
  lines.push(`_Written by \`scripts/distance-check.mjs\` on ${new Date().toISOString().slice(0, 10)}. The design is pre-registered at the top of that script; the constants were not changed after the first run. Companion to \`docs/distance-discount-proposal.md\`._`);
  lines.push('');
  lines.push(`**What was tested.** ${rows.length} home games with an announced crowd and a baseline (the app's expected draw for that game, built from the seasons before its own), across ${new Set(rows.map((r) => r.metroId)).size} cities and ${new Set(rows.map((r) => r.teamId)).size} teams, seasons ${Math.min(...rows.map((r) => r.season))}–${Math.max(...rows.map((r) => r.season))}. Preseason and postseason out. ${sellouts} sellouts (97%+ of the building) set aside; ${noBaseline} games had no baseline. Competitors are other home games on file in the same city whose window overlaps (sports only: past concerts are not on file). The outcome is log(announced ÷ baseline), shown below as a percentage.`);
  lines.push('');
  lines.push(verdict);
  lines.push('');
  lines.push('## Groups, all usable games (candidate B\'s distances)');
  lines.push('');
  lines.push('| Group | Games | Sellout share | Median vs. baseline (open games) | Mean vs. baseline |');
  lines.push('|---|---|---|---|---|');
  lines.push(...groupTable(...CANDIDATES.B));
  lines.push('');
  lines.push('## Chosen on even seasons, scored on odd');
  lines.push('');
  lines.push(`Even seasons: ${even.length} games; odd seasons: ${odd.length}. The pull is the competitors' announced crowds, each times its time factor and its distance weight, summed, in units of 10,000 seats. A line is fit to the outcome on even seasons and its error measured on odd seasons.`);
  lines.push('');
  lines.push('| Rule | Near | Far | Slope (even) | Mean abs. error, odd seasons |');
  lines.push('|---|---|---|---|---|');
  lines.push(`| Null: ignore competitors | — | — | — | ${pct(oddNull)} |`);
  lines.push(`| No fade: every competitor at full weight | — | — | ${oddNoFade.slope.toFixed(4)} | ${pct(oddNoFade.mae)} |`);
  lines.push(`| Candidate A | 10 | 30 | ${oddA.slope.toFixed(4)} | ${pct(oddA.mae)} |`);
  lines.push(`| Candidate B | 15 | 45 | ${oddB.slope.toFixed(4)} | ${pct(oddB.mae)} |`);
  lines.push(`| Chosen on even seasons | ${chosen.near} | ${chosen.far} | ${oddChosen.slope.toFixed(4)} | ${pct(oddChosen.mae)} |`);
  lines.push('');
  lines.push('A negative slope means competitors lower crowds. Errors differ in the third decimal when the effect is small; the groups table above is the plainer read.');
  lines.push('');
  lines.push('### The grid on even seasons (best first)');
  lines.push('');
  lines.push('| Near | Far | Slope | Mean abs. error (even) |');
  lines.push('|---|---|---|---|');
  for (const g of grid.slice(0, 8)) lines.push(`| ${g.near} | ${g.far} | ${g.slope.toFixed(4)} | ${pct(g.mae)} |`);
  lines.push('');
  lines.push('## By league, odd seasons');
  lines.push('');
  lines.push('| League | Games | With a competitor | Median vs. baseline, none | Median, with | Error: null | Error: no fade | Error: B |');
  lines.push('|---|---|---|---|---|---|---|---|');
  lines.push(...leagueLines);
  lines.push('');
  lines.push('## Caveats');
  lines.push('- Sports against sports only: concerts, the biggest same-night competitors in several cities, are not on file for past dates. A season of archived Ticketmaster listings fixes that.');
  lines.push('- The baseline already absorbs some competition: a team that always plays beside another draws its median with that competition in it. The test sees only the nights that differ from the usual.');
  lines.push('- Straight-line miles. Rail and bridges are not in it.');
  await writeFile(path.join(root, 'docs', 'distance-check.md'), `${lines.join('\n')}\n`);
  console.log(lines.slice(0, 8).join('\n'));
  console.log(`\nnull ${pct(oddNull)} · no fade ${pct(oddNoFade.mae)} · A ${pct(oddA.mae)} · B ${pct(oddB.mae)} · chosen ${chosen.near}/${chosen.far} ${pct(oddChosen.mae)}`);
} finally {
  await server.close();
}
