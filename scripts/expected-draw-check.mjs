// The held-out check for expected draws (docs/expected-draw-sports-research-answer.md §4;
// Kylie, Oct 6: attendance on held-out dates is the only accuracy target).
// For each team's last two seasons on file, every home game is predicted from
// earlier data only, then compared with the crowd that was announced. Each step
// stays, per league, only if it beats the step before it.
//   node scripts/expected-draw-check.mjs            (prints, and writes docs/expected-draw-check.md)
//
// Steps, each falling back to the one before when it has nothing to say, and to
// the building's capacity when there is no estimate at all (what the app does):
//   capacity   the building, the app's sizing before expected draws
//   old        the Oct 6 rule: team median by day class and month, any building
//   baseline   expectedDrawBuild.ts: team and building, openers, preseason, holidays
//   +season    times this season's level so far (median actual ÷ baseline)
//   +opponent  times the opponent's past ratio (recent seasons weighted, shrunk)
//
// The constants below were set Oct 7, 2026, before the first run, and are not
// changed to improve the score. If they change, the next season is the new test.

import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { loadAttendance } from './attendance-calibrate.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// ---- Pre-registered (Oct 7, 2026) ----
const HOLDOUT_SEASONS = 2;
/** Home games this season before the season level applies (none for the NFL or college). */
const SEASON_MIN = { MLB: 15, NBA: 10, NHL: 10, WNBA: 6, MLS: 6, NWSL: 5 };
/** Opponent: past home meetings needed, in at least this many separate series. */
const OPP_MIN_GAMES = 2;
const OPP_MIN_SERIES = 2;
/** Shrink toward no effect: n ÷ (n + k). */
const OPP_SHRINK_K = 3;
/** Weight of a meeting by how many seasons back it was (0 = this season). */
const OPP_SEASON_WEIGHT = [1, 1, 0.5, 0.25];
const FRICTION = 5000;
// --------------------------------------

function median(xs) {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/** The Oct 6 rule, for comparison: team median by day class and month, every building, 3 games a bucket. */
function oldRule(build, games, date) {
  const usable = games.filter((g) => !g.postseason && !g.preseason);
  const seasons = [...new Set(usable.map((g) => g.season))].sort((a, b) => b - a).slice(0, 3);
  const pool = usable.filter((g) => seasons.includes(g.season));
  const dc = build.dayClassOf(date);
  const month = Number(date.slice(5, 7));
  const inClass = pool.filter((g) => build.dayClassOf(g.date) === dc);
  const inMonth = inClass.filter((g) => Number(g.date.slice(5, 7)) === month);
  if (inMonth.length >= 3) return median(inMonth.map((g) => g.attendance));
  if (inClass.length >= 3) return median(inClass.map((g) => g.attendance));
  if (pool.length > 0) return median(pool.map((g) => g.attendance));
  return undefined;
}

/** Series: meetings within four days of each other are one series. */
function seriesCount(dates) {
  const sorted = [...dates].sort();
  let n = 0;
  let last = null;
  for (const d of sorted) {
    if (!last || (new Date(d) - new Date(last)) / 86_400_000 > 4) n++;
    last = d;
  }
  return n;
}

function pct(x) {
  return `${(x * 100).toFixed(1)}%`;
}

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
  const { VENUES, capacityOn } = await server.ssrLoadModule('/src/data/venues.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');

  const STEPS = ['capacity', 'old', 'baseline', '+season', '+opponent'];
  // Variants of the baseline, each tested against it (Oct 7): the conference-move reset, and a 2-season window.
  // The app's baseline is build.optionsFor(league): three seasons, two for the WNBA and
  // women's college basketball, no conference-move reset (decided on the first run, Oct 7).
  const VARIANTS = { 'reset at conf. move': { resetOnRealignment: true }, '3 seasons everywhere': { windowSeasons: 3 }, '2 seasons everywhere': { windowSeasons: 2 } };
  const rows = []; // one per predicted game

  for (const t of await loadAttendance(root)) {
    const team = TEAMS[t.teamId];
    const league = team?.league ?? 'Other';
    const sport = team?.sport;
    const all = t.games.filter((g) => g.attendance > 0 && !g.postseason);
    const seasons = [...new Set(all.map((g) => g.season))].sort((a, b) => a - b);
    for (const season of seasons.slice(-HOLDOUT_SEASONS)) {
      const before = all.filter((g) => g.season < season);
      if (before.length === 0) continue;
      const opts = build.optionsFor(league);
      const drawRows = build.buildDrawRows(t.metroId, t.teamId, before, opts);
      const variantRows = Object.fromEntries(Object.entries(VARIANTS).map(([k, o]) => [k, build.buildDrawRows(t.metroId, t.teamId, before, o)]));
      const thisSeason = all.filter((g) => g.season === season).sort((a, b) => a.date.localeCompare(b.date) || (a.start ?? '').localeCompare(b.start ?? ''));
      const openers = build.openerDates(thisSeason);
      const windowSeasons = [...new Set(build.normalGames(t.teamId, before, opts).map((g) => g.season))].sort((a, b) => b - a).slice(0, opts.windowSeasons ?? build.WINDOW_SEASONS);

      const baselineOf = (g) => {
        const row = build.pickDraw(drawRows, { teamId: t.teamId, venueId: g.venueId, date: g.date, opener: openers.has(g.date), preseason: g.preseason });
        return row;
      };

      for (let i = 0; i < thisSeason.length; i++) {
        const g = thisSeason[i];
        const venue = VENUES[g.venueId];
        const cap = venue && sport ? capacityOn(venue, g.date, sport) : undefined;
        if (!cap) continue;
        const capped = (n) => (n == null ? cap : Math.min(n, cap));
        const pred = {};
        pred.capacity = cap;
        pred.old = capped(g.preseason ? undefined : oldRule(build, before, g.date));
        const row = baselineOf(g);
        const base = row?.count;
        pred.baseline = capped(base);
        for (const k of Object.keys(VARIANTS)) {
          const vr = build.pickDraw(variantRows[k], { teamId: t.teamId, venueId: g.venueId, date: g.date, opener: openers.has(g.date), preseason: g.preseason });
          pred[k] = capped(vr?.count);
        }

        // Season level: this season's earlier regular-season games, actual ÷ their baseline.
        let level = 1;
        const minN = SEASON_MIN[league];
        if (minN && !g.preseason) {
          const ratios = thisSeason
            .slice(0, i)
            .filter((p) => !p.preseason)
            .map((p) => ({ p, b: baselineOf(p)?.count }))
            .filter((x) => x.b)
            .map((x) => x.p.attendance / x.b);
          if (ratios.length >= minN) level = median(ratios);
        }
        pred['+season'] = capped(base != null ? base * level : undefined);

        // Opponent: past meetings in the window plus earlier this season, weighted by recency, shrunk.
        let opp = 1;
        if (base != null && g.opponent && !g.preseason) {
          const meetings = [...before.filter((p) => windowSeasons.includes(p.season)), ...thisSeason.slice(0, i)]
            .filter((p) => !p.preseason && p.opponent === g.opponent)
            .map((p) => ({ p, b: baselineOf(p)?.count }))
            .filter((x) => x.b);
          if (meetings.length >= OPP_MIN_GAMES && seriesCount(meetings.map((x) => x.p.date)) >= OPP_MIN_SERIES) {
            let wsum = 0;
            let lsum = 0;
            for (const { p, b } of meetings) {
              const w = OPP_SEASON_WEIGHT[season - p.season] ?? 0;
              wsum += w;
              lsum += w * Math.log(p.attendance / b);
            }
            if (wsum > 0) opp = Math.exp((meetings.length / (meetings.length + OPP_SHRINK_K)) * (lsum / wsum));
          }
        }
        pred['+opponent'] = capped(base != null ? base * level * opp : undefined);

        rows.push({
          league,
          teamId: t.teamId,
          season,
          preseason: !!g.preseason,
          actual: g.attendance,
          estimated: base != null,
          low: row?.low,
          high: row?.high,
          pred,
        });
      }
    }
  }

  function metrics(set, step) {
    const ape = set.map((r) => Math.abs(r.pred[step] - r.actual) / r.actual);
    const err = set.map((r) => r.pred[step] - r.actual);
    const signed = set.map((r) => (r.pred[step] - r.actual) / r.actual);
    return {
      mdape: median(ape),
      mae: err.reduce((a, b) => a + Math.abs(b), 0) / set.length,
      bias: signed.reduce((a, b) => a + b, 0) / set.length,
    };
  }

  function thresholdAgree(set, useLow) {
    const agree = set.filter((r) => {
      const said = useLow ? (r.estimated ? r.low : r.pred.capacity) : r.pred.capacity;
      return said >= FRICTION === r.actual >= FRICTION;
    });
    return agree.length / set.length;
  }

  const leagues = [...new Set(rows.map((r) => r.league))].sort();
  const lines = [];
  const say = (s = '') => {
    lines.push(s);
    console.log(s);
  };

  say('# Expected draw: held-out check');
  say();
  say(`Generated by \`scripts/expected-draw-check.mjs\` on ${new Date().toISOString().slice(0, 10)}. Each team's last ${HOLDOUT_SEASONS} seasons on file are predicted from earlier seasons only; regular season and preseason, no playoffs. Every step falls back to the building when it has no estimate, as the app does. Constants were set Oct 7, 2026, before the first run (see the script). The target is the announced crowd, never a night's rating.`);
  say();
  say('**Columns:** median % off (half the games are closer than this) · average fans off · bias (+ reads high, − reads low). Bold is the best step per league.');
  say();
  say(`| League | Games | With an estimate | ${STEPS.join(' | ')} |`);
  say(`|---|---|---|${STEPS.map(() => '---').join('|')}|`);
  for (const lg of [...leagues, 'All']) {
    const set = rows.filter((r) => lg === 'All' || r.league === lg);
    if (set.length === 0) continue;
    const ms = STEPS.map((s) => metrics(set, s));
    const best = Math.min(...ms.map((m) => m.mdape));
    const cells = ms.map((m) => {
      const txt = `${pct(m.mdape)} · ${Math.round(m.mae).toLocaleString('en-US')} · ${m.bias >= 0 ? '+' : '−'}${pct(Math.abs(m.bias))}`;
      return m.mdape === best ? `**${txt}**` : txt;
    });
    say(`| ${lg} | ${set.length} | ${pct(set.filter((r) => r.estimated).length / set.length)} | ${cells.join(' | ')} |`);
  }
  say();
  say('## Baseline variants (median % off · bias)');
  say();
  say(`| League | baseline | ${Object.keys(VARIANTS).join(' | ')} |`);
  say(`|---|---|${Object.keys(VARIANTS).map(() => '---').join('|')}|`);
  for (const lg of [...leagues, 'All']) {
    const set = rows.filter((r) => lg === 'All' || r.league === lg);
    if (set.length === 0) continue;
    const cell = (s) => {
      const m = metrics(set, s);
      return `${pct(m.mdape)} · ${m.bias >= 0 ? '+' : '−'}${pct(Math.abs(m.bias))}`;
    };
    say(`| ${lg} | ${cell('baseline')} | ${Object.keys(VARIANTS).map(cell).join(' | ')} |`);
  }
  say();
  say('## The range and the 5,000 line (baseline)');
  say();
  say('Range: how often the announced crowd landed inside the middle half (about half should). Line: how often "5,000 or more" was called right, by the building (today) and by the low end of the estimate (Kylie, Oct 7, S1).');
  say();
  say('| League | Inside the range | 5,000 line by building | 5,000 line by low end |');
  say('|---|---|---|---|');
  for (const lg of [...leagues, 'All']) {
    const set = rows.filter((r) => lg === 'All' || r.league === lg);
    const est = set.filter((r) => r.estimated);
    if (set.length === 0) continue;
    const inside = est.length ? est.filter((r) => r.actual >= r.low && r.actual <= r.high).length / est.length : NaN;
    say(`| ${lg} | ${est.length ? pct(inside) : '—'} | ${pct(thresholdAgree(set, false))} | ${pct(thresholdAgree(set, true))} |`);
  }
  say();
  say('## Preseason only');
  say();
  const pre = rows.filter((r) => r.preseason);
  if (pre.length) {
    const ms = STEPS.slice(0, 3).map((s) => metrics(pre, s));
    say(`${pre.length} games. Median % off: ${STEPS.slice(0, 3).map((s, i) => `${s} ${pct(ms[i].mdape)}`).join(', ')}.`);
  }

  await writeFile(path.join(root, 'docs', 'expected-draw-check.md'), `${lines.join('\n')}\n`);
} finally {
  await server.close();
}
