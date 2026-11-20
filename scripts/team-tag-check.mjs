// The doubled college tag (Kylie, Nov 19, 2026: "let's fix the wart"): a program's catalog stubs carried "UCLA MBB MBB".
// Proves the writer no longer doubles, the mend collapses only a repeated last word, a stored copy is mended on the
// phone's load, and the favorites' credit, the team filter word and the season's stub counts all agree on the one
// spelling. Usage: node scripts/team-tag-check.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
let failed = false;
const check = (ok, what) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${what}`);
  if (!ok) failed = true;
};
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const { mendTeamTag, mendEntryTags } = await server.ssrLoadModule('/src/data/teamTags.ts');
  const data = await server.ssrLoadModule('/src/data/index.ts');
  const { readLocalLog } = await server.ssrLoadModule('/src/data/storage/localStore.ts');

  // 1. The mend: only a repeated last word goes.
  check(mendTeamTag('UCLA MBB MBB') === 'UCLA MBB', '"UCLA MBB MBB" → "UCLA MBB"');
  check(mendTeamTag('Delaware MBB MBB') === 'Delaware MBB', '"Delaware MBB MBB" → "Delaware MBB"');
  check(mendTeamTag('USC FB FB') === 'USC FB', '"USC FB FB" → "USC FB"');
  for (const keep of ['Lakers', 'Sac Kings', 'UCLA MBB', 'New York New York', 'Kings Kings Kings'.slice(0, 11), 'MBB']) check(mendTeamTag(keep) === keep, `"${keep}" stays as written`);
  check(mendTeamTag('Kings Kings') === 'Kings Kings', '"Kings Kings" (no earlier word to keep) stays as written');
  check(mendTeamTag('UCLA BASEBALL Baseball') === 'UCLA BASEBALL' && mendTeamTag('Ohio State Hockey hockey') === 'Ohio State Hockey', 'a repeated last word in another case goes too, the first spelling kept (Codex, Nov 19)');
  const entry = { tags: ['UCLA MBB MBB'], opponents: ['Delaware MBB MBB'], userTags: ['mbb mbb'] };
  const mended = mendEntryTags(entry);
  check(mended.tags[0] === 'UCLA MBB' && mended.opponents[0] === 'Delaware MBB' && mended.userTags[0] === 'mbb mbb', 'an entry: tags and opponents mended, her own tags untouched');
  const clean = { tags: ['Lakers'], opponents: ['Sac Kings'] };
  check(mendEntryTags(clean) === clean, 'an entry with nothing to mend is the same object');

  // 2. The writer: a stub built from a UCLA MBB game carries the single spelling, and the filter word matches it.
  const snap = JSON.parse(fs.readFileSync(path.join(root, 'data', 'schedule-archive', 'la', '2026-11-19.json'), 'utf8'));
  const game = snap.events.find((e) => e.teams?.home === 'ucla-mbb');
  const stub = game ? data.stubFromEvent(game) : null;
  check(stub?.tags[0] === 'UCLA MBB', `a catalog stub's tag: "${stub?.tags[0]}"`);
  check((stub?.opponents ?? []).every((o) => mendTeamTag(o) === o), `its opponents are single too: ${(stub?.opponents ?? []).join(', ')}`);
  check(data.teamFilterTag('ucla-mbb') === 'UCLA MBB' && data.teamFilterTag('kings') === 'Kings' && data.teamFilterTag('usc-football') === 'USC FB', 'the filter word: UCLA MBB, Kings, USC FB');
  check(stub ? data.entryTeams(stub).includes(data.teamFilterTag('ucla-mbb')) : false, "the stubs page's team words include the filter word");

  // 3. A stored copy from before the fix is mended on the phone's load, and everything that reads it agrees.
  const old = { id: 'old-1', eventId: game?.id ?? 'x', metroId: 'la', kind: 'game', title: 'UCLA vs. Delaware', when: { sort: '2026-11-13', label: '', precision: 'day' }, tags: ['UCLA MBB MBB'], opponents: ['Delaware MBB MBB'], sport: 'Basketball', sides: ['UCLA MBB'], venue: 'Pauley Pavilion' };
  store.set('fan-friction:your-nights', JSON.stringify({ version: 1, hiddenSeedIds: [], added: [old], plans: [], order: 'plans-first', favorites: [{ kind: 'team', id: 'ucla-mbb', label: 'UCLA MBB', teamId: 'ucla-mbb' }] }));
  const log = readLocalLog();
  check(log.added[0].tags[0] === 'UCLA MBB' && log.added[0].opponents[0] === 'Delaware MBB', 'readLocalLog mends the stored tags');
  check(data.entryTeams(log.added[0]).includes('UCLA MBB'), 'the mended stub matches the team filter word');
  check(data.entryMatches(log.added[0], log.favorites[0]), "the favorite's credit still finds the mended stub");
  check(data.seasonStubsOf('ucla-mbb', log, 'attended').length === 1, "the season's attended stubs count it");

  // 4. A favorite saved under the doubled word (the old favorites-from-log path) is the team once loaded, and one copy stays.
  store.set('fan-friction:your-nights', JSON.stringify({ version: 1, hiddenSeedIds: [], added: [old], plans: [], order: 'plans-first', favorites: [{ kind: 'team', id: 'ucla-mbb-mbb', label: 'UCLA MBB MBB' }, { kind: 'team', id: 'ucla-mbb', label: 'UCLA MBB', teamId: 'ucla-mbb' }, { kind: 'venue', id: 'pauley-pavilion', label: 'Pauley Pavilion' }] }));
  const favs = readLocalLog().favorites;
  check(favs.length === 2 && favs[0].id === 'ucla-mbb' && favs[0].teamId === 'ucla-mbb' && favs[1].kind === 'venue', `a doubled-name favorite loads as the team, deduplicated (${favs.map((f) => f.id).join(', ')})`);
  check(data.entryMatches(readLocalLog().added[0], favs[0]), 'and it still finds the mended stub');
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
