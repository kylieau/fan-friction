// Folds the researched promotion history (docs/promo-history-rows.csv, Kylie's
// research, Oct 7, 2026) into the six MLB teams' attendance files for 2021–2024,
// the seasons MLB's own feed does not list promotions for. Each matched game gets
// promotions: [{ type, name, source: 'research' }] in the feed's shape, so
// scripts/expected-draw-check.mjs reads them like the feed's. A game with no row
// in a season the research covered is left with [] (known gap: the research says
// which team-seasons were only partial). Run after attendance-collect.mjs:
//   node scripts/promo-history-fold.mjs

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TEAMS = { Dodgers: ['la', 'dodgers'], Angels: ['la', 'angels'], Padres: ['san-diego', 'padres'], Mariners: ['seattle', 'mariners'], Yankees: ['new-york', 'yankees'], Mets: ['new-york', 'mets'] };

/** The feed's offerType for a researched kind: a giveaway, a ticket offer, else a highlight. */
function typeOf(kinds) {
  if (kinds.includes('giveaway')) return 'Giveaway';
  if (kinds.includes('discount')) return 'Ticket Offer';
  return 'Day of Game Highlights';
}

function parseCsv(text) {
  const rows = [];
  let cur = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { cur.push(field); field = ''; }
    else if (c === '\n') { cur.push(field); rows.push(cur); cur = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || cur.length) { cur.push(field); rows.push(cur); }
  const [h, ...rest] = rows;
  return rest.filter((r) => r.length === h.length).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i]])));
}

const rows = parseCsv(await readFile(path.join(root, 'docs', 'promo-history-rows.csv'), 'utf8')).filter((r) => r.league === 'MLB');
for (const [team, [metroId, teamId]] of Object.entries(TEAMS)) {
  const file = path.join(root, 'data', 'attendance', metroId, `${teamId}.json`);
  const parsed = JSON.parse(await readFile(file, 'utf8'));
  const mine = rows.filter((r) => r.team === team);
  const seasons = new Set(mine.map((r) => Number(r.season)));
  let matched = 0, unmatched = 0;
  for (const g of parsed.games) {
    if (!seasons.has(g.season)) continue;
    if (g.season >= 2025) continue; // the feed covers these
    const here = mine.filter((r) => r.date === g.date);
    g.promotions = here.map((r) => ({ type: typeOf(r.kinds), name: r.promotion, source: 'research' }));
    g.promotionsSource = 'research';
    matched += here.length;
  }
  for (const r of mine) {
    if (Number(r.season) >= 2025) continue;
    if (!parsed.games.some((g) => g.date === r.date)) unmatched++;
  }
  await writeFile(file, `${JSON.stringify(parsed, null, 2)}\n`);
  console.log(`${teamId}: ${matched} promotions placed on ${[...seasons].filter((s) => s < 2025).join(', ')}; ${unmatched} rows with no home game on file`);
}
