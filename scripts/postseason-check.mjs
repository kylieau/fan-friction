// The postseason-estimate check (docs/postseason-estimate-proposal.md; Kylie's locks Oct 7, 2026).
// Each team's playoff home games in a postseason are predicted from the postseasons before it
// (the team's own games and the league pool, both limited to earlier seasons), with the rule in
// src/data/expectedDrawBuild.ts (buildPostseasonRows / postseasonPeople). Scored against:
//   building  — today's fallback: the capacity for that sport
//   regular   — the regular-season rule applied blindly (the team's median crowd for that kind of date)
// Pre-registered pass (written before the first run): the rule's median absolute error is lower
// than the building's overall, and not worse in any league with 10+ scored games; the planning
// range's coverage is reported, not gated. Constants in expectedDrawBuild.ts are not re-tuned.
//   node scripts/postseason-check.mjs   → docs/postseason-check.md

import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { loadAttendance } from './attendance-calibrate.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FRICTION = 5000;
const median = (xs) => { const s = [...xs].sort((a, b) => a - b); return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : NaN; };
const pct = (x) => (Number.isFinite(x) ? `${(x * 100).toFixed(1)}%` : '—');

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const build = await server.ssrLoadModule('/src/data/expectedDrawBuild.ts');
  const { VENUES, capacityOn } = await server.ssrLoadModule('/src/data/venues.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
  const onFile = await loadAttendance(root);
  const teams = onFile.map((t) => {
    const sport = TEAMS[t.teamId]?.sport;
    return { metroId: t.metroId, teamId: t.teamId, league: TEAMS[t.teamId]?.league ?? 'Other', games: t.games, capacityOn: (venueId, date) => (VENUES[venueId] ? capacityOn(VENUES[venueId], date, sport) ?? capacityOn(VENUES[venueId], date) : undefined) };
  });

  const scored = []; // one per predicted playoff game
  let unbanded = 0, noRow = 0;
  const seasonsAll = [...new Set(teams.flatMap((t) => t.games.filter((g) => g.postseason).map((g) => g.season)))].sort((a, b) => a - b);
  for (const season of seasonsAll.slice(1)) {
    const rows = build.buildPostseasonRows(teams, season - 1);
    for (const t of teams) {
      const league = t.league;
      const regular = t.games.filter((g) => !g.postseason && !g.preseason && g.attendance > 0 && g.season < season);
      const regRows = regular.length ? build.buildDrawRows(t.metroId, t.teamId, regular, build.optionsFor(league)) : [];
      for (const g of t.games.filter((x) => x.postseason && x.season === season && x.attendance > 0)) {
        const band = build.roundBand(g.round, league);
        const cap = t.capacityOn(g.venueId, g.date);
        if (!band || !cap) { unbanded++; continue; }
        const row = rows.find((r) => r.teamId === t.teamId && r.venueId === g.venueId && r.band === band);
        if (!row) { noRow++; continue; }
        const p = build.postseasonPeople(row, cap);
        const reg = regRows.length ? build.pickDraw(regRows, { teamId: t.teamId, venueId: g.venueId, date: g.date })?.count : undefined;
        scored.push({ league, band, teamId: t.teamId, season, actual: g.attendance, cap, rule: p.count, low: p.low, high: p.high, basis: row.basis, regular: reg ? Math.min(cap, reg) : undefined });
      }
    }
  }
  const err = (a, b) => Math.abs(a - b) / a;
  const summary = (xs) => ({
    n: xs.length,
    rule: median(xs.map((r) => err(r.actual, r.rule))),
    building: median(xs.map((r) => err(r.actual, r.cap))),
    regular: median(xs.filter((r) => r.regular).map((r) => err(r.actual, r.regular))),
    nReg: xs.filter((r) => r.regular).length,
    cover: xs.filter((r) => r.actual >= r.low && r.actual <= r.high).length / (xs.length || 1),
    gateWrong: xs.filter((r) => (r.low >= FRICTION) !== (r.actual >= FRICTION)).length,
  });
  const all = summary(scored);
  const byLeague = [...new Set(scored.map((r) => r.league))].sort().map((l) => [l, summary(scored.filter((r) => r.league === l))]);
  const byBand = ['first', 'second', 'conference', 'final'].map((b) => [b, summary(scored.filter((r) => r.band === b))]);
  const byBasis = ['team', 'blend', 'league'].map((b) => [b, summary(scored.filter((r) => r.basis === b))]);
  const leaguesWorse = byLeague.filter(([, s]) => s.n >= 10 && s.rule > s.building + 1e-9).map(([l]) => l);
  const pass = all.rule < all.building && leaguesWorse.length === 0;

  const lines = [];
  lines.push('# The postseason-estimate check');
  lines.push('');
  lines.push(`_Written by \`scripts/postseason-check.mjs\` on ${new Date().toISOString().slice(0, 10)}. Pre-registered at the top of that script; constants in \`expectedDrawBuild.ts\` not re-tuned. Companion to \`docs/postseason-estimate-proposal.md\`._`);
  lines.push('');
  lines.push(`**What was tested.** ${scored.length} playoff home games with an announced crowd, each predicted from the postseasons before its own (${seasonsAll.slice(1).join(', ')}), across ${new Set(scored.map((r) => r.teamId)).size} teams in ${byLeague.length} leagues. ${unbanded} games had no round band or capacity; ${noRow} had no comparable (neither the team nor the league pool qualified), which is where the app shows no estimate.`);
  lines.push('');
  lines.push(pass ? `**Pass.** The rule's median error is ${pct(all.rule)} against ${pct(all.building)} for the building (today's fallback)${Number.isFinite(all.regular) ? ` and ${pct(all.regular)} for the regular-season rule applied blindly` : ''}; no league with 10+ games is worse than the building.` : `**Fail.** The rule's median error is ${pct(all.rule)} against ${pct(all.building)} for the building${leaguesWorse.length ? `; worse than the building in ${leaguesWorse.join(', ')}` : ''}. Nothing should be built as is.`);
  lines.push('');
  const table = (title, rowsIn) => {
    lines.push(`## ${title}`);
    lines.push('');
    lines.push('| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |');
    lines.push('|---|---|---|---|---|---|---|');
    for (const [name, s] of rowsIn) if (s.n) lines.push(`| ${name} | ${s.n} | ${pct(s.rule)} | ${pct(s.building)} | ${pct(s.regular)} (${s.nReg}) | ${pct(s.cover)} | ${s.gateWrong} |`);
    lines.push('');
  };
  table('Overall', [['all', all]]);
  table('By league', byLeague);
  table('By round band', byBand);
  table('By basis (team alone, blended, league pool)', byBasis);
  lines.push('Errors are the median absolute error against the announced crowd. "Range covers" is the share of games whose crowd fell inside the planning range (10th–90th percentile or min–max, widened by 5% of capacity). "Wrong side of 5,000" counts games where the range\'s low end and the crowd disagree about the friction floor.');
  lines.push('');
  lines.push('## Caveats');
  lines.push('- Capacity is the building\'s setup for the sport on that date, not the playoff configuration; a curtained or opened upper bowl shows up as occupancy, not as capacity.');
  lines.push('- The league pool is the covered cities\' teams only, not the whole league.');
  lines.push('- Announced crowds are tickets distributed, as everywhere in the app.');
  await writeFile(path.join(root, 'docs', 'postseason-check.md'), `${lines.join('\n')}\n`);
  console.log(lines.slice(4, 8).join('\n'));
  for (const [l, s] of byLeague) console.log(`${l}: n ${s.n} rule ${pct(s.rule)} building ${pct(s.building)} regular ${pct(s.regular)} cover ${pct(s.cover)}`);
} finally {
  await server.close();
}
