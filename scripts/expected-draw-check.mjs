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

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { loadAttendance } from './attendance-calibrate.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// ---- Pre-registered (Oct 7, 2026) ----
const HOLDOUT_SEASONS = 2;
// The season level and opponent ratio constants live in src/data/expectedDrawBuild.ts,
// shared with the app (SEASON_MIN, OPP_*), unchanged since the first run.
const FRICTION = 5000;
// Added Oct 7, 2026, before their first run (MLB only: its feed carries both):
/** Promotions: per team, giveaway / fireworks / ticket offer, weekday and weekend apart, shrunk n ÷ (n + k). */
const PROMO_SHRINK_K = 3;
/** Standings: the home record going in, once this many games are played; slopes fit on earlier seasons, before Aug 1 and after. */
const STANDINGS_MIN_PLAYED = 20;
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

/** The promotion flags a game carries (MLB's own list). */
function promoFlags(g) {
  const flags = new Set();
  for (const p of g.promotions ?? []) {
    if (/firework/i.test(p.name ?? '')) flags.add('fireworks');
    else if (p.type === 'Giveaway') flags.add('giveaway');
    else if (p.type === 'Ticket Offer') flags.add('discount');
  }
  return flags;
}

function weekendLike(build, date) {
  const dc = build.dayClassOf(date);
  return dc !== 'weekday' || build.isHoliday(date);
}

function winShare(g) {
  const r = g.recordBefore;
  if (!r || r.wins + r.losses < STANDINGS_MIN_PLAYED) return undefined;
  return r.wins / (r.wins + r.losses);
}

function pct(x) {
  return `${(x * 100).toFixed(1)}%`;
}

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
  const { VENUES, capacityOn } = await server.ssrLoadModule('/src/data/venues.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');

  const STEPS = ['capacity', 'old', 'baseline', '+season', '+opponent', '+promos', '+standings', 'app'];
  const teamsOnFile = await loadAttendance(root);

  // Standings slopes, pooled across MLB teams, fit only on seasons before the one predicted.
  // y = log(announced ÷ baseline), x = home win share going in − .500; before Aug 1 and from Aug 1.
  const slopeCache = new Map();
  function standingsSlopes(season) {
    if (slopeCache.has(season)) return slopeCache.get(season);
    const pts = { early: [], late: [] };
    for (const t of teamsOnFile) {
      if (TEAMS[t.teamId]?.league !== 'MLB') continue;
      const all = t.games.filter((g) => g.attendance > 0 && !g.postseason && !g.preseason);
      const before = all.filter((g) => g.season < season);
      const rows = build.buildDrawRows(t.metroId, t.teamId, before);
      const win = [...new Set(before.map((g) => g.season))].sort((a, b) => b - a).slice(0, 3);
      for (const g of before.filter((g) => win.includes(g.season))) {
        const w = winShare(g);
        const b = build.pickDraw(rows, { teamId: t.teamId, venueId: g.venueId, date: g.date })?.count;
        if (w == null || !b) continue;
        (g.date.slice(5) >= '08-01' ? pts.late : pts.early).push([w - 0.5, Math.log(g.attendance / b)]);
      }
    }
    const fit = (xy) => {
      if (xy.length < 30) return 0;
      const mx = xy.reduce((a, [x]) => a + x, 0) / xy.length;
      const my = xy.reduce((a, [, y]) => a + y, 0) / xy.length;
      const sxy = xy.reduce((a, [x, y]) => a + (x - mx) * (y - my), 0);
      const sxx = xy.reduce((a, [x]) => a + (x - mx) ** 2, 0);
      return sxx > 0 ? sxy / sxx : 0;
    };
    const out = { early: fit(pts.early), late: fit(pts.late) };
    slopeCache.set(season, out);
    return out;
  }
  const slopeLog = new Map();
  // Variants of the baseline, each tested against it (Oct 7): the conference-move reset, and a 2-season window.
  // The app's baseline is build.optionsFor(league): three seasons, two for the WNBA and
  // women's college basketball, no conference-move reset (decided on the first run, Oct 7).
  const VARIANTS = { 'reset at conf. move': { resetOnRealignment: true }, '3 seasons everywhere': { windowSeasons: 3 }, '2 seasons everywhere': { windowSeasons: 2 } };
  const rows = []; // one per predicted game

  for (const t of teamsOnFile) {
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

      // Promotion multipliers for this team, from the window's seasons: games with a flag against games with none.
      const promo = new Map();
      if (league === 'MLB') {
        const training = before.filter((g) => windowSeasons.includes(g.season) && !g.preseason);
        const logr = (g) => {
          const b = build.pickDraw(drawRows, { teamId: t.teamId, venueId: g.venueId, date: g.date })?.count;
          return b ? Math.log(g.attendance / b) : undefined;
        };
        for (const wk of [false, true]) {
          const side = training.filter((g) => weekendLike(build, g.date) === wk);
          const none = side.filter((g) => promoFlags(g).size === 0).map(logr).filter((x) => x != null);
          if (none.length < 3) continue;
          for (const flag of ['giveaway', 'fireworks', 'discount']) {
            const withFlag = side.filter((g) => promoFlags(g).has(flag)).map(logr).filter((x) => x != null);
            if (withFlag.length < 3) continue;
            const n = withFlag.length;
            promo.set(`${flag}|${wk}`, Math.exp((n / (n + PROMO_SHRINK_K)) * (median(withFlag) - median(none))));
          }
        }
      }
      const slopes = league === 'MLB' ? standingsSlopes(season) : null;
      if (slopes) slopeLog.set(season, slopes);

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

        // Season level and opponent ratio, from the shared rule; evaluated in every league here.
        const soFar = thisSeason.slice(0, i);
        const lv = g.preseason ? undefined : build.seasonLevel(drawRows, t.teamId, league, soFar, openers, false);
        const level = lv?.level ?? 1;
        pred['+season'] = capped(base != null ? base * level : undefined);
        const meetings = [...before.filter((p) => windowSeasons.includes(p.season)), ...soFar];
        const op = g.preseason || !g.opponent ? undefined : build.opponentRatio(drawRows, t.teamId, league, g.opponent, meetings, season, false);
        const opp = op?.ratio ?? 1;
        pred['+opponent'] = capped(base != null ? base * level * opp : undefined);
        const appLv = g.preseason ? undefined : build.seasonLevel(drawRows, t.teamId, league, soFar, openers);
        const appOp = g.preseason || !g.opponent ? undefined : build.opponentRatio(drawRows, t.teamId, league, g.opponent, meetings, season);
        pred.app = capped(base != null ? base * (appLv?.level ?? 1) * (appOp?.ratio ?? 1) : undefined);

        let promoMult = 1;
        for (const flag of promoFlags(g)) promoMult *= promo.get(`${flag}|${weekendLike(build, g.date)}`) ?? 1;
        pred['+promos'] = capped(base != null ? base * level * opp * promoMult : undefined);

        let standMult = 1;
        const w = winShare(g);
        if (slopes && w != null) standMult = Math.exp((g.date.slice(5) >= '08-01' ? slopes.late : slopes.early) * (w - 0.5));
        pred['+standings'] = capped(base != null ? base * level * opp * promoMult * standMult : undefined);

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
  say('**Columns:** median % off (half the games are closer than this) · average fans off · bias (+ reads high, − reads low). Bold is the best step per league. **app** is what the app uses: the baseline, with the season level and opponent ratio only in the leagues where each won.');
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
  say(`**MLB standings slopes** (log crowd per 1.000 of win share, fit on earlier seasons): ${[...slopeLog.entries()].sort().map(([season, sl]) => `predicting ${season}: before Aug ${sl.early.toFixed(2)}, from Aug ${sl.late.toFixed(2)}`).join('; ')}.`);
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

  // Saved ahead: the estimate each nightly listing carried the day before a game
  // (the latest capture before its date), against the crowd announced after it.
  // The honest test, because nothing here was seen when the rule was set.
  say();
  say('## Saved ahead');
  say();
  const ahead = [];
  for (const metroId of await readdir(path.join(root, 'data', 'schedule-archive')).catch(() => [])) {
    const dir = path.join(root, 'data', 'schedule-archive', metroId);
    const files = (await readdir(dir).catch(() => [])).filter((f) => f.endsWith('.json')).sort();
    const latest = new Map();
    for (const f of files) {
      const snap = JSON.parse(await readFile(path.join(dir, f), 'utf8'));
      for (const e of snap.events ?? []) {
        if (e.expectedDraw && snap.capturedOn < e.date) latest.set(e.id, { e, capturedOn: snap.capturedOn });
      }
    }
    const resultsDir = path.join(root, 'data', 'results', metroId);
    for (const f of (await readdir(resultsDir).catch(() => [])).filter((f) => f.endsWith('.json'))) {
      for (const r of JSON.parse(await readFile(path.join(resultsDir, f), 'utf8')).results ?? []) {
        const saved = latest.get(r.eventId);
        if (saved && r.attendance) ahead.push({ league: TEAMS[r.homeTeamId]?.league ?? 'Other', actual: r.attendance, est: saved.e.expectedDraw });
      }
    }
  }
  if (ahead.length === 0) {
    say('No game has both a saved estimate and an announced crowd yet. Estimates are saved from Oct 7, 2026.');
  } else {
    say('| League | Games | Median % off | Bias | Inside the range |');
    say('|---|---|---|---|---|');
    for (const lg of [...new Set(ahead.map((a) => a.league))].sort().concat('All')) {
      const set = ahead.filter((a) => lg === 'All' || a.league === lg);
      const ape = median(set.map((a) => Math.abs(a.est.count - a.actual) / a.actual));
      const bias = set.reduce((x, a) => x + (a.est.count - a.actual) / a.actual, 0) / set.length;
      const ranged = set.filter((a) => a.est.low != null);
      const inside = ranged.length ? pct(ranged.filter((a) => a.actual >= a.est.low && a.actual <= a.est.high).length / ranged.length) : '—';
      say(`| ${lg} | ${set.length} | ${pct(ape)} | ${bias >= 0 ? '+' : '−'}${pct(Math.abs(bias))} | ${inside} |`);
    }
  }

  await writeFile(path.join(root, 'docs', 'expected-draw-check.md'), `${lines.join('\n')}\n`);
} finally {
  await server.close();
}
