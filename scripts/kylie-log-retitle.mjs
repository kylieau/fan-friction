// Build 5 (Kylie, Oct 14): renames the stubs imported by migration 0002 to the new event names. Writes the review
// table (docs/build-5/kylie-log-retitle.md, after its header) and migration 0027 from one pass, so they can't disagree.
// Usage: node scripts/kylie-log-retitle.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(path.join(root, 'supabase/migrations/0002_kylie_log.sql'), 'utf8');
const rows = [];
const re = /^\s*\('(k-[^']*)', '([^']*)', '([^']*)', '((?:[^']|'')*)', '([^']*)', (null|'[^']*'), (null|'[^']*'), '((?:[^']|'')*)'\)/gm;
let m;
while ((m = re.exec(source))) rows.push({ id: m[1], title: m[4].replace(/''/g, "'"), kind: m[5], metro: m[6] === 'null' ? null : m[6].slice(1, -1), data: JSON.parse(m[8].replace(/''/g, "'")) });

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { listTitle } = await server.ssrLoadModule('/src/lib/eventTitle.ts');
await server.close();

const MAX = 32;
const SQUAD = { FB: 'Football', MBB: 'Basketball', WBB: "Women's basketball", MVB: "Men's volleyball", WVB: "Women's volleyball", BASEBALL: 'Baseball' };
const NCAA = { R64: 'First round', R32: 'Second round', E8: 'Elite Eight', 'Final Four': 'Final Four', natty: 'National Championship' };
const flagsAll = [];

function side(raw) {
  const m = raw.trim().match(/^(#\d+\s+)?(.+?)(?:\s+(MBB|WBB|MVB|WVB|FB|baseball))?$/i);
  return { rank: m[1] ?? '', team: m[2].trim(), squad: m[3]?.toUpperCase() ?? null };
}

function gameTitle(row) {
  const flags = [];
  let t = row.title;
  if (/, at Cosm$/.test(t)) return { title: 'Ohio State at Michigan · Watch party', flags: ['Cosm: "Watch party" until the Cosm research is back'] };
  let round = null, game = null, ncaa = null;
  const post = t.match(/^(NLWC|NLDS|NLCS|ALWC|ALDS|ALCS) Game (\d+):\s*(.+)$/);
  if (post) [round, game, t] = [post[1], Number(post[2]), post[3]];
  const br = t.match(/\s*\((R64|R32|E8|Final Four|natty)\)$/);
  if (br) { ncaa = NCAA[br[1]]; t = t.slice(0, br.index); if (ncaa !== br[1]) flags.push(`"${br[1]}" → "${ncaa}"`); }
  const pitcher = t.match(/^(.+?)\s+\(([^)]+)\)\s+(vs\.|@)\s+(.+)$/);
  if (pitcher) {
    if (!row.data.starter) throw new Error(`no starter on ${row.id}`);
    t = `${pitcher[1]} ${pitcher[3]} ${pitcher[4]}`;
    flags.push(`starter ${row.data.starter} stays on the stub`);
  }
  const at = t.split(/\s+@\s+/);
  const vs = t.split(/\s+vs\.\s+/);
  let first, second, joiner;
  if (at.length === 2) [first, second, joiner] = [side(at[0]), side(at[1]), 'at'];
  else if (vs.length === 2 && row.data.neutralSite) { [first, second, joiner] = [side(vs[0]), side(vs[1]), 'vs.']; flags.push('neutral site: your order kept'); }
  else if (vs.length === 2) [first, second, joiner] = [side(vs[1]), side(vs[0]), 'at'];
  else throw new Error(`can't parse ${row.title}`);
  const squadTag = first.squad ?? second.squad ?? (row.data.tags ?? []).map((g) => g.match(/\s(MBB|WBB|MVB|WVB|FB)$/)?.[1]).find(Boolean) ?? (/baseball/i.test(row.title) && /UCLA/.test(row.title) ? 'BASEBALL' : null);
  const label = squadTag ? SQUAD[squadTag] : ncaa ? row.data.sport : null;
  const matchup = `${first.rank}${first.team} ${joiner} ${second.rank}${second.team}`;
  const long = round ? `${round}, Game ${game}` : ncaa;
  const short = round ? `${round} G${game}` : ncaa;
  const join = (...p) => p.filter(Boolean).join(' · ');
  let title = join(matchup, label, long);
  // The label stays even past 32: it is the only thing telling a men's game from a women's one in this log.
  if (title.length > 55) flags.push("three lines on My Stubs");
  if (title.length > MAX && round) title = join(matchup, short);
  return { title, flags };
}

function showTitle(row) {
  const event = { id: row.id, metroId: row.metro ?? 'la', date: row.data.when.sort, start: null, crowd: [], place: { type: 'named', name: '' }, sourceId: 'seed', kind: row.kind, title: row.title, audience: { domain: 'music', genre: 'Other' } };
  const name = listTitle(event);
  // A stored title is never cut: a row that would need the ellipsis keeps what you wrote.
  return { title: name.endsWith('…') ? row.title : name, flags: [] };
}

const out = rows.map((row) => {
  const r = row.kind === 'show' || row.kind === 'festival' ? showTitle(row) : gameTitle(row);
  return { id: row.id, date: row.data.when.label || row.data.when.sort, old: row.title, new: r.title, flags: r.flags };
});
const changed = out.filter((r) => r.new !== r.old);
const md = [
  '| # | Date | Before | After | Needs your word |',
  '|---|---|---|---|---|',
  ...changed.map((r, i) => `| ${i + 1} | ${r.date} | ${r.old.replace(/\|/g, '\\|')} | ${r.new.replace(/ /g, ' ').replace(/\|/g, '\\|')} | ${r.flags.join('; ')} |`),
].join('\n');
// The review doc keeps its hand-written header; the table after "## Every change" is regenerated.
const docPath = path.join(root, 'docs/build-5/kylie-log-retitle.md');
const doc = readFileSync(docPath, 'utf8');
writeFileSync(docPath, `${doc.slice(0, doc.indexOf('## Every change'))}## Every change\n${md}\n`);
console.log(`${out.length} rows, ${changed.length} change, ${out.length - changed.length} unchanged`);
console.log('unchanged:', out.filter((r) => r.new === r.old).map((r) => r.old).join(' | '));

const q = (s) => `'${s.replace(/'/g, "''")}'`;
const values = changed.map((r) => `  (${q(r.id)}, ${q(r.old)}, ${q(r.new)})`).join(',\n');
const sql = `-- Fan/Friction: your imported log (0002) takes the new event names (Kylie, Oct 14, 2026; build 5, item 13).
-- ON HOLD (Kylie, Oct 14): don't run yet; more research on these events comes first. Then regenerate with
-- scripts/kylie-log-retitle.mjs, approve the table in docs/build-5/kylie-log-retitle.md, paste into Supabase's SQL Editor and Run.
-- Safe to run more than once: a row is changed only while it still has its old title, so anything you've
-- edited since is left alone. The new edit time makes every phone take the new title on its next open.
-- When it runs, it lists each row it changed (old title, new title).

with me as (select id from auth.users order by created_at limit 1),
v (id, old_title, new_title) as (values
${values}
)
update public.entries e
set title = v.new_title,
    data = e.data || jsonb_build_object('title', v.new_title, 'updatedAt', to_char(now() at time zone 'utc', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'))
from v, me
where e.id = v.id and e.user_id = me.id and e.title = v.old_title
returning e.id, v.old_title, e.title as new_title;
`;
writeFileSync(path.join(root, 'supabase/migrations/0027_kylie_log_titles.sql'), sql);
console.log('wrote 0027 with', changed.length, 'rows');
