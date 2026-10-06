// The review's §11 test, on the collected attendance: does the formula's
// crowd-fight share D predict the attendance shortfall of a game?
// Each past date's sports events are rebuilt from data/attendance (home games
// of the 16 LA teams; concerts are missing, so D is a floor). Expected
// attendance = median of the same team's other games in the same bucket
// (season, day class, month), leaving the game itself out. Shortfall % =
// (expected − announced) / expected. Prints correlations, a fit, held-out
// checks, and the same under other Medium tier weights.
// Run: node scripts/retune-analysis.mjs   (read-only; changes nothing)

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });

function dayClass(date) {
  const d = new Date(`${date}T12:00:00Z`).getUTCDay();
  return d === 5 ? 'friday' : d === 6 ? 'saturday' : d === 0 ? 'sunday' : 'weekday';
}
const median = (v) => { const s = [...v].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const mean = (v) => v.reduce((a, b) => a + b, 0) / v.length;
function pearson(x, y) {
  const mx = mean(x), my = mean(y);
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < x.length; i++) { sxy += (x[i] - mx) * (y[i] - my); sxx += (x[i] - mx) ** 2; syy += (y[i] - my) ** 2; }
  return sxy / Math.sqrt(sxx * syy);
}
function ols(x, y) {
  const mx = mean(x), my = mean(y);
  let sxy = 0, sxx = 0;
  for (let i = 0; i < x.length; i++) { sxy += (x[i] - mx) * (y[i] - my); sxx += (x[i] - mx) ** 2; }
  const slope = sxy / sxx;
  return { slope, intercept: my - slope * mx };
}
function spearman(x, y) {
  const rank = (v) => { const idx = v.map((val, i) => [val, i]).sort((a, b) => a[0] - b[0]); const r = new Array(v.length); idx.forEach(([, i], k) => { r[i] = k; }); return r; };
  return pearson(rank(x), rank(y));
}

try {
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
  const { eventCrowdFight } = await server.ssrLoadModule('/src/data/formula/crowdFight.ts');
  const { TIER_WEIGHT } = await server.ssrLoadModule('/src/data/formula/overlap.ts');
  const { withExpectedDraws } = await server.ssrLoadModule('/src/data/expectedDraw.ts');

  const dir = path.join(root, 'data', 'attendance', 'la');
  const games = [];
  for (const f of (await readdir(dir)).filter((f) => f.endsWith('.json'))) {
    const parsed = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
    for (const g of parsed.games) if (!g.postseason) games.push({ ...g, teamId: parsed.teamId });
  }
  // Expected attendance, leave-one-out, from the same team and season.
  for (const g of games) {
    const same = games.filter((o) => o !== g && o.teamId === g.teamId && o.season === g.season);
    const dc = dayClass(g.date), month = g.date.slice(5, 7);
    const b1 = same.filter((o) => dayClass(o.date) === dc && o.date.slice(5, 7) === month);
    const b2 = same.filter((o) => dayClass(o.date) === dc);
    const pool = b1.length >= 3 ? b1 : b2.length >= 3 ? b2 : same;
    g.expected = pool.length ? median(pool.map((o) => o.attendance)) : null;
    g.shortfall = g.expected ? (g.expected - g.attendance) / g.expected : null;
  }
  // Rebuild each date's events.
  const toEvent = (g) => {
    const team = TEAMS[g.teamId];
    const level = /college/i.test(team.league) ? 'college' : 'pro';
    return {
      id: `${g.date}-${g.teamId}`, metroId: 'la', date: g.date, start: g.start, kind: 'game',
      title: `${team.shortName} vs. ${g.opponent}`, place: { type: 'venue', venueId: g.venueId },
      audience: { domain: 'sports', sport: team.sport, level }, teams: { home: g.teamId, away: g.opponent.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      crowd: [], sourceId: 'attendance',
    };
  };
  const byDate = new Map();
  for (const g of games) { if (!byDate.has(g.date)) byDate.set(g.date, []); byDate.get(g.date).push(g); }

  function computeD() {
    const rows = [];
    for (const [date, list] of byDate) {
      const events = withExpectedDraws(list.map(toEvent));
      for (let i = 0; i < list.length; i++) {
        const g = list[i];
        if (g.shortfall == null) continue;
        const cf = eventCrowdFight(events[i], events);
        rows.push({ teamId: g.teamId, sport: TEAMS[g.teamId].sport, league: TEAMS[g.teamId].league, season: g.season, date, D: cf.D, shortfall: g.shortfall, competitors: cf.competitors.length });
      }
    }
    return rows;
  }

  const base = computeD();
  const contested = base.filter((r) => r.D > 0);
  console.log(`\n${base.length} regular-season home games with an expected figure; ${contested.length} (${(100 * contested.length / base.length).toFixed(0)}%) had another LA game the same day (sports only; concerts are not in this data).`);
  console.log(`Mean shortfall: all games ${(100 * mean(base.map((r) => r.shortfall))).toFixed(1)}%; contested ${(100 * mean(contested.map((r) => r.shortfall))).toFixed(1)}%; uncontested ${(100 * mean(base.filter((r) => r.D === 0).map((r) => r.shortfall))).toFixed(1)}%.`);
  const bands = [[0, 0.0001, 'D = 0'], [0.0001, 0.1, '0 < D ≤ 0.1'], [0.1, 0.25, '0.1 < D ≤ 0.25'], [0.25, 0.5, '0.25 < D ≤ 0.5'], [0.5, 1.01, 'D > 0.5']];
  console.log('\nBy band of D:');
  for (const [lo, hi, label] of bands) {
    const rows = base.filter((r) => r.D >= lo && r.D < hi && !(lo === 0 && r.D > 0));
    if (rows.length) console.log(`  ${label.padEnd(16)} ${String(rows.length).padStart(4)} games, mean shortfall ${(100 * mean(rows.map((r) => r.shortfall))).toFixed(1).padStart(5)}%`);
  }
  const fit = ols(base.map((r) => r.D), base.map((r) => r.shortfall));
  console.log(`\nAll games: Pearson ${pearson(base.map((r) => r.D), base.map((r) => r.shortfall)).toFixed(3)}, Spearman ${spearman(base.map((r) => r.D), base.map((r) => r.shortfall)).toFixed(3)}, slope ${(100 * fit.slope).toFixed(1)} points of shortfall per unit D.`);
  console.log('\nBy league (games, mean D, Pearson D vs shortfall, slope):');
  const leagues = [...new Set(base.map((r) => r.league))];
  for (const lg of leagues) {
    const rows = base.filter((r) => r.league === lg);
    if (rows.length < 10 || new Set(rows.map((r) => r.D)).size < 3) { console.log(`  ${lg.padEnd(26)} ${String(rows.length).padStart(4)} games, too little spread in D`); continue; }
    const f = ols(rows.map((r) => r.D), rows.map((r) => r.shortfall));
    console.log(`  ${lg.padEnd(26)} ${String(rows.length).padStart(4)} games, mean D ${mean(rows.map((r) => r.D)).toFixed(3)}, r ${pearson(rows.map((r) => r.D), rows.map((r) => r.shortfall)).toFixed(3)}, slope ${(100 * f.slope).toFixed(1)}`);
  }
  // Held out: 20% of dates at random (seeded), and one whole season.
  const dates = [...byDate.keys()].sort();
  let seed = 7;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const holdDates = new Set(dates.filter(() => rnd() < 0.2));
  for (const [label, test] of [['20% of dates', (r) => holdDates.has(r.date)], ['the 2025 season', (r) => r.season === 2025]]) {
    const train = base.filter((r) => !test(r)), held = base.filter(test);
    const f = ols(train.map((r) => r.D), train.map((r) => r.shortfall));
    const pred = held.map((r) => f.intercept + f.slope * r.D);
    console.log(`\nHeld out ${label}: fit on ${train.length}, tested on ${held.length}. Slope ${(100 * f.slope).toFixed(1)}; on the held-out games Pearson(D, shortfall) ${pearson(held.map((r) => r.D), held.map((r) => r.shortfall)).toFixed(3)}; correlation of predicted vs actual ${pearson(pred, held.map((r) => r.shortfall)).toFixed(3)}.`);
  }
  console.log('\nMedium tier weight (High 0.7, Low 0.15 fixed): Pearson of D vs shortfall, all games / contested only');
  for (const w of [0.15, 0.2, 0.35, 0.5, 0.7]) {
    TIER_WEIGHT.Medium = w;
    const rows = computeD();
    const c = rows.filter((r) => r.D > 0);
    console.log(`  Medium ${w}: ${pearson(rows.map((r) => r.D), rows.map((r) => r.shortfall)).toFixed(3)} / ${pearson(c.map((r) => r.D), c.map((r) => r.shortfall)).toFixed(3)}`);
  }
  TIER_WEIGHT.Medium = 0.35;
} finally {
  await server.close();
}
