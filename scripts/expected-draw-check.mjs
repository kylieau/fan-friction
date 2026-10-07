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

// ---- Round 2 (pre-registered Oct 7 in docs/expected-draw-decisions-oct7.md) ----
const MLB_IDS = { dodgers: 119, angels: 108, padres: 135, mariners: 136, yankees: 147, mets: 121 };
const CROSSOVER = /hello kitty|sanrio|anime|naruto|one piece|dragon ball|pok[eé]mon|star wars|marvel|disney|peanuts|snoopy|sesame|mario|nintendo|jujutsu|demon slayer|my hero|attack on titan|gundam|sailor moon|squishmallow|care bears|barbie|transformers|harry potter|lego/i;
const SPECIAL_TICKET = /special event ticket|ticket required|theme ticket|ticket package/i;
const CHAMPIONSHIP = /world series|champion|\brings?\b|trophy/i;
const KIND_SHRINK_K = 3;
const SERIES_SHRINK_K = 1;
const FLAG_SHRINK_K = 3;
const TOP_N = 3;
const TOP_MIN_PLAYED = 30;

const fold = (x) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/** The kinds one MLB promotion matches. */
function promoKinds(p, stars) {
  const name = p.name ?? '';
  const kinds = new Set();
  if (CROSSOVER.test(name)) kinds.add('crossover');
  if (p.type === 'Giveaway' && stars.some((n) => fold(name).includes(fold(n)))) kinds.add('star');
  if (SPECIAL_TICKET.test(name)) kinds.add('special ticket');
  if (CHAMPIONSHIP.test(name)) kinds.add('championship');
  if (/firework/i.test(name)) kinds.add('fireworks');
  if (p.type === 'Ticket Offer') kinds.add('discount');
  if (p.type === 'Giveaway' && kinds.size === 0) kinds.add('other giveaway');
  return kinds;
}

/** "Hello Kitty Night® #2" and "Hello Kitty Night 2025" are the same promotion. */
function seriesKey(name) {
  return fold(name ?? '').replace(/#\s*\d+|\bpart\s*\d+|\b(19|20)\d{2}\b|[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim();
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

  const ctxFile = JSON.parse(await readFile(path.join(root, 'data', 'mlb-context.json'), 'utf8'));
  const mlbCtx = ctxFile.seasons;
  const idByTeamName = (season, name) => Object.entries(mlbCtx[season]?.teams ?? {}).find(([, t]) => t.teamName === name)?.[0];
  function recordBefore(season, id, date) {
    let rec = [0, 0];
    for (const [d, w, l] of mlbCtx[season]?.records?.[id] ?? []) {
      if (d >= date) break;
      rec = [w, l];
    }
    return rec;
  }
  const finalRecord = (season, id) => {
    const r = mlbCtx[season]?.records?.[id] ?? [];
    return r.length ? [r[r.length - 1][1], r[r.length - 1][2]] : [0, 0];
  };
  /** Top 3 of its league by record going in once 30 games are played; before that, by last season's final record. */
  function isTop(season, id, date) {
    const teams = mlbCtx[season]?.teams ?? {};
    const league = teams[id]?.league;
    if (!league) return false;
    const [w, l] = recordBefore(season, id, date);
    const early = w + l < TOP_MIN_PLAYED;
    const rec = (x) => (early ? finalRecord(season - 1, x) : recordBefore(season, x, date));
    const pctOf = ([a, b]) => (a + b ? a / (a + b) : 0);
    const peers = Object.keys(teams).filter((x) => teams[x].league === league).map((x) => pctOf(rec(x))).sort((a, b) => b - a);
    return pctOf(rec(id)) >= peers[TOP_N - 1] && pctOf(rec(id)) > 0;
  }
  function topFlags(teamId, g) {
    const home = String(MLB_IDS[teamId]);
    const away = idByTeamName(g.season, g.opponent);
    const champ = String(mlbCtx[g.season - 1]?.champion ?? '');
    const flags = new Set();
    if (isTop(g.season, home, g.date)) flags.add('home top team');
    if (away && isTop(g.season, away, g.date)) flags.add('visiting top team');
    if (champ && champ === home) flags.add('home champion');
    if (champ && away && champ === away) flags.add('visiting champion');
    return flags;
  }
  const starsFor = (season) => [...(mlbCtx[season - 1]?.allStars ?? []), ...(mlbCtx[season - 1]?.mvps ?? [])];

  // Pooled lifts per predicted season, from the six MLB teams' earlier seasons only.
  const liftCache = new Map();
  function round2Lifts(season) {
    if (liftCache.has(season)) return liftCache.get(season);
    const none = [];
    const kindPts = new Map();
    const flagOn = new Map();
    const flagOff = new Map();
    for (const t of teamsOnFile) {
      if (!MLB_IDS[t.teamId]) continue;
      const all = t.games.filter((g) => g.attendance > 0 && !g.postseason && !g.preseason);
      const before = all.filter((g) => g.season < season);
      const rows = build.buildDrawRows(t.metroId, t.teamId, before);
      const win = [...new Set(before.map((g) => g.season))].sort((a, b) => b - a).slice(0, 3);
      // MLB's feed lists promotions only from 2025: a season with none listed at all is
      // unknown, not "no promotion", and stays out of the promotion comparison.
      const listed = new Set(all.filter((g) => (g.promotions ?? []).length > 0).map((g) => g.season));
      for (const g of before.filter((g) => win.includes(g.season))) {
        const b = build.pickDraw(rows, { teamId: t.teamId, venueId: g.venueId, date: g.date })?.count;
        if (!b) continue;
        const y = Math.log(g.attendance / b);
        const promos = listed.has(g.season) ? g.promotions ?? [] : null;
        if (promos && promos.length === 0) none.push(y);
        const kinds = new Set((promos ?? []).flatMap((p) => [...promoKinds(p, starsFor(g.season))]));
        for (const k of kinds) (kindPts.get(k) ?? kindPts.set(k, []).get(k)).push(y);
        const flags = topFlags(t.teamId, g);
        for (const f of ['home top team', 'visiting top team', 'home champion', 'visiting champion']) {
          const m = flags.has(f) ? flagOn : flagOff;
          (m.get(f) ?? m.set(f, []).get(f)).push(y);
        }
      }
    }
    const base = none.length ? median(none) : 0;
    const kinds = new Map();
    for (const [k, ys] of kindPts) kinds.set(k, { lift: Math.exp((ys.length / (ys.length + KIND_SHRINK_K)) * (median(ys) - base)), n: ys.length });
    const flags = new Map();
    for (const [f, ys] of flagOn) {
      const off = flagOff.get(f) ?? [];
      if (off.length) flags.set(f, { lift: Math.exp((ys.length / (ys.length + FLAG_SHRINK_K)) * (median(ys) - median(off))), n: ys.length });
    }
    const out = { base, kinds, flags };
    liftCache.set(season, out);
    return out;
  }
  const round2Log = new Map();
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

        // Round 2 (MLB): promotions by kind, repeat promotions, top teams.
        let r2kinds = [];
        let r2flags = [];
        const r2mult = {};
        if (MLB_IDS[t.teamId] && base != null && !g.preseason) {
          const L = round2Lifts(season);
          round2Log.set(season, L);
          const stars = starsFor(season);
          const earlier = [...before.filter((p) => windowSeasons.includes(p.season)), ...soFar];
          let promoMult = 1;
          const kindsLeft = new Set();
          for (const p of g.promotions ?? []) {
            const key = seriesKey(p.name);
            const past = key
              ? earlier
                  .filter((q) => (q.promotions ?? []).some((x) => seriesKey(x.name) === key))
                  .map((q) => {
                    const b = build.pickDraw(drawRows, { teamId: t.teamId, venueId: q.venueId, date: q.date })?.count;
                    return b ? Math.log(q.attendance / b) : undefined;
                  })
                  .filter((y) => y != null)
              : [];
            if (past.length > 0) {
              const lift = Math.exp((past.length / (past.length + SERIES_SHRINK_K)) * (median(past) - L.base));
              promoMult *= lift;
              r2mult.repeat = (r2mult.repeat ?? 1) * lift;
              r2kinds.push('repeat');
            } else for (const k of promoKinds(p, stars)) kindsLeft.add(k);
          }
          for (const k of kindsLeft) {
            promoMult *= L.kinds.get(k)?.lift ?? 1;
            r2mult[k] = L.kinds.get(k)?.lift ?? 1;
            r2kinds.push(k);
          }
          let topMult = 1;
          for (const f of topFlags(t.teamId, g)) {
            topMult *= L.flags.get(f)?.lift ?? 1;
            r2mult[f] = L.flags.get(f)?.lift ?? 1;
            r2flags.push(f);
          }
          pred['app+promos'] = capped(pred.app * promoMult);
          pred['app+top'] = capped(pred.app * topMult);
          pred['app+both'] = capped(pred.app * promoMult * topMult);
        } else {
          pred['app+promos'] = pred.app;
          pred['app+top'] = pred.app;
          pred['app+both'] = pred.app;
        }

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
          r2: [...new Set([...r2kinds, ...r2flags])],
          r2mult,
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

  say();
  say('## Round 2: promotions by kind and top teams (MLB)');
  say();
  say('Pre-registered Oct 7 (docs/expected-draw-decisions-oct7.md). Against the app\'s rule; each line scores only the games carrying that kind or flag. MLB\'s feed lists promotions only from 2025, so promotion lifts for 2026 come from 2025 alone, and 2025 gets none.');
  say();
  const mlb = rows.filter((r) => r.league === 'MLB');
  const line = (label, set) => {
    if (set.length === 0) return;
    const a = metrics(set, 'app');
    const p = metrics(set, 'app+both');
    say(`| ${label} | ${set.length} | ${pct(a.mdape)} · ${a.bias >= 0 ? '+' : '−'}${pct(Math.abs(a.bias))} | ${pct(p.mdape)} · ${p.bias >= 0 ? '+' : '−'}${pct(Math.abs(p.bias))} |`);
  };
  say('| Games | Count | app (median off · bias) | with round 2 |');
  say('|---|---|---|---|');
  line('All MLB', mlb);
  for (const tag of ['crossover', 'star', 'special ticket', 'championship', 'repeat', 'fireworks', 'discount', 'other giveaway', 'home top team', 'visiting top team', 'home champion', 'visiting champion']) {
    line(tag, mlb.filter((r) => r.r2.includes(tag)));
  }
  say();
  say('**Each kind on its own** (the pre-registered test): only that kind applied on top of the app. It stays if its own games improve and all MLB does not get worse.');
  say();
  say('| Kind or flag | Games | Its games: app → with it | All MLB: app → with it | Stays? |');
  say('|---|---|---|---|---|');
  const appAll = median(mlb.map((r) => Math.abs(r.pred.app - r.actual) / r.actual));
  for (const tag of ['crossover', 'star', 'special ticket', 'championship', 'repeat', 'fireworks', 'discount', 'other giveaway', 'home top team', 'visiting top team', 'home champion', 'visiting champion']) {
    const own = mlb.filter((r) => r.r2.includes(tag));
    if (own.length === 0) continue;
    const capOf = (r) => r.pred.capacity;
    const withIt = (r) => Math.min(r.pred.app * (r.r2mult?.[tag] ?? 1), capOf(r));
    const ownBefore = median(own.map((r) => Math.abs(r.pred.app - r.actual) / r.actual));
    const ownAfter = median(own.map((r) => Math.abs(withIt(r) - r.actual) / r.actual));
    const allAfter = median(mlb.map((r) => Math.abs(withIt(r) - r.actual) / r.actual));
    const stays = ownAfter < ownBefore && allAfter <= appAll;
    say(`| ${tag} | ${own.length} | ${pct(ownBefore)} → ${pct(ownAfter)} | ${pct(appAll)} → ${pct(allAfter)} | ${stays ? '**yes**' : 'no'} |`);
  }
  say();
  const m = (s2) => metrics(mlb, s2);
  say(`All MLB, median off: app ${pct(m('app').mdape)}, +promos ${pct(m('app+promos').mdape)}, +top teams ${pct(m('app+top').mdape)}, both ${pct(m('app+both').mdape)}. Average fans off: ${['app', 'app+promos', 'app+top', 'app+both'].map((x) => Math.round(m(x).mae).toLocaleString('en-US')).join(' / ')}.`);
  say();
  for (const [season, L] of [...round2Log.entries()].sort()) {
    say(`Lifts learned for ${season} (from earlier seasons): ${[...L.kinds.entries()].map(([k, v]) => `${k} ×${v.lift.toFixed(2)} (${v.n})`).join(', ')}; ${[...L.flags.entries()].map(([k, v]) => `${k} ×${v.lift.toFixed(2)} (${v.n})`).join(', ')}.`);
    say();
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
