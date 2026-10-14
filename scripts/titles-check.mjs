// Build 5, items 13 and 15: event names in three lengths. Asserts the notes' own examples (chip / short / full)
// and prints one day's archive in all three lengths for a scan. Usage: node scripts/titles-check.mjs [metro] [date]

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [metroArg, dateArg] = process.argv.slice(2);
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let failed = 0;
const base = { id: 'x', metroId: 'la', date: '2026-10-14', start: '19:00', crowd: [], place: { type: 'venue', venueId: 'dodger-stadium' }, sourceId: 'espn' };
const game = (title, extra = {}) => ({ ...base, kind: 'game', title, audience: { domain: 'sports', sport: extra.sport ?? 'football' }, ...extra });
const show = (title, extra = {}) => ({ ...base, kind: 'show', title, audience: { domain: 'music', genre: 'Rock' }, ...extra });
const other = (title, extra = {}) => ({ ...base, kind: 'special', title, audience: { domain: 'other', tag: 'Theatre' }, ...extra });
try {
  const { mapTitle, listTitle, fullTitle, scheduleGameTitle, teamRelativeTitle } = await server.ssrLoadModule('/src/lib/eventTitle.ts');
  const cases = [
    // [label, event, {chip, short, full}] — only the lengths the notes give are checked.
    ['N17 Red River', game('Texas vs. Oklahoma (Red River Showdown)', { neutralSite: true, sourceId: 'seed' }), { full: 'Texas vs. Oklahoma · Red River Showdown' }],
    ['N17 Florida–Georgia', game('Florida vs. Georgia (neutral site)', { sourceId: 'seed' }), { full: 'Florida vs. Georgia · Neutral site' }],
    ['N18 East LA Classic', game('East LA Classic (Garfield vs. Roosevelt)', { sourceId: 'seed' }), { full: 'Garfield vs. Roosevelt · East LA Classic' }],
    ['N18 Copa Las Vegas', game('Copa Las Vegas: USA vs Mexico', { sport: 'soccer', sourceId: 'ticketmaster' }), { full: 'USA vs. Mexico · Copa Las Vegas' }],
    ['N19 World Series seed', game('World Series Game 1', { sport: 'baseball', teams: { home: 'dodgers', away: 'yankees' }, stakes: { round: 'World Series', game: 1 }, sourceId: 'seed' }), { full: 'Yankees at Dodgers · World Series, Game 1' }],
    ['N03/N04 NLCS', game('Dodgers vs. Brewers', { sport: 'baseball', teams: { home: 'dodgers', away: 'brewers' }, stakes: { round: 'NLCS', game: 3 }, sourceId: 'mlb' }), { chip: 'Dodgers · NLCS G3', short: 'Brewers at Dodgers · NLCS\u00a0G3', full: 'Brewers at Dodgers · NL Championship Series, Game 3' }],
    // Kylie, Oct 14: past 32 characters the game number shortens to G3; under it, "Game 3" stays.
    ['Short G3 only when long', game('Dodgers vs. Mets', { sport: 'baseball', teams: { home: 'dodgers', away: 'mets' }, stakes: { round: 'NLCS', game: 3 }, sourceId: 'mlb' }), { short: 'Mets at Dodgers · NLCS, Game 3' }],
    ['N06/N07 Super Bowl', game('Rams vs. Chiefs', { teams: { home: 'rams', away: 'chiefs' }, stakes: { round: 'Super Bowl' }, date: '2027-02-14' }), { full: 'Chiefs vs. Rams · Super Bowl 2027' }],
    ['N08 Preseason', game('Clippers vs. Nuggets', { sport: 'basketball', teams: { home: 'clippers', away: 'nuggets' }, preseason: true }), { chip: 'Clippers Preseason', short: 'Nuggets at Clippers · Preseason' }],
    ['Case 1 spring training', game('Reds vs. Cubs', { sport: 'baseball', metroId: 'phoenix', teams: { home: 'reds', away: 'cubs' }, preseason: true, sourceId: 'mlb' }), { short: 'Cubs at Reds · Spring training', full: 'Cubs at Reds · Spring training (Cactus League)' }],
    ['N09 doubleheader', game("Angels vs. A's", { sport: 'baseball', teams: { home: 'angels', away: 'athletics' }, doubleheader: 1, sourceId: 'mlb' }), { chip: 'Angels DH1' }],
    ['Case 6 AHL playoffs', game('Gulls vs. Reign', { sport: 'hockey', stakes: { round: 'AHL Playoffs' }, sourceId: 'hockeytech' }), { short: 'Reign at Gulls · AHL playoffs', full: 'Reign at Gulls · Calder Cup Playoffs' }],
    ['N10 artist before tour', show('Song Of The Saints Tour with Phil Wickham', { performer: 'Phil Wickham' }), { full: 'Phil Wickham · Song Of The Saints Tour' }],
    ['N28 middle dot', show('Phoebe Bridgers: The Lost Tour', { performer: 'Phoebe Bridgers' }), { short: 'Phoebe Bridgers · The Lost Tour' }],
    ['N21 Slayer', show('SLAYER: Reign In Blood 40th Anniversary', { performer: 'SLAYER' }), { full: 'Slayer · Reign In Blood 40th Anniversary' }],
    ['N26 Disney On Ice', other('Disney On Ice presents Jump In'), { chip: 'Disney On Ice', short: 'Disney On Ice · Jump In' }],
    ['N27 BEND OVA', other('BVD Boston presents BEND OVA ( 21+ )'), { short: 'BEND OVA · 21+' }],
    ['N25 Waitress', other('Waitress (Touring)'), { short: 'Waitress', full: 'Waitress · Touring production' }],
    ['N12 Comic Con', other('New York Comic Con (day 1 of 4)'), { short: 'New York Comic Con · Day 1 of 4' }],
    ['N24 Sick New World', { ...show('Sick New World Festival Forth Worth'), kind: 'festival' }, { full: 'Sick New World · Fort Worth' }],
    ['Case 2 All-Star', game('NBA All-Star Game', { sport: 'basketball', date: '2027-02-14' }), { short: 'NBA All-Star Game', full: 'NBA All-Star Game 2027' }],
  ];
  for (const [label, event, want] of cases) {
    const got = { chip: mapTitle(event, [event]), short: listTitle(event), full: fullTitle(event) };
    for (const k of Object.keys(want)) {
      if (got[k] !== want[k]) {
        failed += 1;
        console.log(`FAIL ${label} ${k}: got "${got[k]}", want "${want[k]}"`);
      }
    }
    if (Object.keys(want).every((k) => got[k] === want[k])) console.log(`ok   ${label}: ${got.chip} | ${got.short} | ${got.full}`);
  }
  // Step 0 (case 7): a seller's copy and the league's copy of the same game merge, the league's facts win.
  const { mergeDuplicates } = await server.ssrLoadModule('/src/data/dedupe.ts');
  const tm = { ...game('Chicago Cubs vs. Los Angeles Dodgers', { sport: 'baseball', metroId: 'phoenix', sourceId: 'ticketmaster' }), id: 'tm-1' };
  const mlb = { ...game('Cubs vs. Dodgers', { sport: 'baseball', metroId: 'phoenix', teams: { home: 'cubs', away: 'dodgers' }, preseason: true, sourceId: 'mlb' }), id: 'mlb-1' };
  const merged = mergeDuplicates([tm, mlb]);
  const ok = merged.length === 1 && merged[0].sourceId === 'mlb' && merged[0].mergedFrom?.[0]?.id === 'tm-1' && listTitle(merged[0]) === 'Dodgers at Cubs · Spring training';
  if (!ok) (failed += 1), console.log(`FAIL step 0 merge: ${merged.length} records, ${merged.map((e) => `${e.sourceId}: ${listTitle(e)}`).join(' / ')}`);
  else console.log(`ok   Step 0 merge: one record, ${listTitle(merged[0])} (from ${merged[0].mergedFrom.map((m) => m.sourceId).join(', ')})`);
  const addOn = { ...other('Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity', { sourceId: 'ticketmaster' }), id: 'tm-2' };
  const nets = { ...game('Nets vs. Hornets', { sport: 'basketball', sourceId: 'espn' }), id: 'espn-2' };
  if (mergeDuplicates([nets, addOn]).length !== 2) (failed += 1), console.log('FAIL step 0: an add-on merged into its game');
  else console.log('ok   Step 0: an add-on is not the game (different admission)');

  // Item 1: pop-up sizing and one show counted once across sellers.
  const { popupDraw, popupExplainer } = await server.ssrLoadModule('/src/data/sources/popupSizing.ts');
  const sold = popupDraw({ capacity: 400, soldOut: true, source: 'test' });
  const open = popupDraw({ capacity: 400, source: 'test' });
  const none = popupDraw({ source: 'test' });
  if (sold?.count !== 380 || popupExplainer(sold) !== 'Sold out · 95% of 400 capacity' || open?.count !== 320 || none !== undefined) (failed += 1), console.log(`FAIL pop-up sizing: ${sold?.count} ${popupExplainer(sold)} ${open?.count} ${none}`);
  else console.log('ok   Pop-up sizing: 400 sold out → ~380 ("Sold out · 95% of 400 capacity"), not sold out → 320, nothing → unsized');
  const { dropShowsTicketmasterHas } = await server.ssrLoadModule('/src/data/sources/seatgeekSource.ts');
  const tmShow = { ...show('Hugel', { performer: 'Hugel', sourceId: 'ticketmaster' }), id: 'tm-s' };
  const sgShow = { ...show('HUGEL', { performer: 'HUGEL', start: '21:00', sourceId: 'seatgeek' }), id: 'sg-s' };
  const sgOther = { ...show('Pawsa', { performer: 'Pawsa', sourceId: 'seatgeek' }), id: 'sg-o' };
  const kept = dropShowsTicketmasterHas([sgShow, sgOther], [tmShow]);
  if (kept.length !== 1 || kept[0].id !== 'sg-o') (failed += 1), console.log(`FAIL seller dedupe: kept ${kept.map((e) => e.id).join(', ')}`);
  else console.log('ok   Seller dedupe: a SeatGeek show Ticketmaster lists is dropped, the rest kept');

  const sched = scheduleGameTitle('Clippers', { home: true, opponent: 'Nuggets', preseason: true });
  if (sched !== 'Nuggets at Clippers · Preseason') (failed += 1), console.log(`FAIL schedule title: ${sched}`);
  const rel = teamRelativeTitle({ home: true, opponent: 'Padres' });
  if (rel !== 'vs. Padres') (failed += 1), console.log(`FAIL team page: ${rel}`);
  else console.log('ok   N29 team page: vs. Padres / @ kept');

  // One day of the archive in all three lengths, for a scan.
  const metro = metroArg ?? 'la';
  const dir = path.join(root, 'data', 'schedule-archive', metro);
  const file = dateArg ? `${dateArg}.json` : (await readdir(dir)).filter((f) => f.endsWith('.json')).sort().at(-1);
  const day = JSON.parse(await readFile(path.join(dir, file), 'utf8'));
  const events = (day.events ?? []).slice(0, 40);
  console.log(`\n${metro} ${file}: chip | short | full`);
  for (const e of events) console.log(`  ${mapTitle(e, events)} | ${listTitle(e)} | ${fullTitle(e)}`);
  // Rows whose short name lost the visitor to the budget (the full name has " at " or " vs. ", the short one doesn't).
  const all = day.events ?? [];
  const lost = all.filter((e) => e.kind === "game" && / (at|vs\.) /.test(fullTitle(e)) && !/ (at|vs\.) /.test(listTitle(e)));
  console.log(`\n${lost.length} of ${all.length} rows lose the visitor in the short name:${lost.map((e) => `\n  ${listTitle(e)}  (full: ${fullTitle(e)})`).join('')}`);
} finally {
  await server.close();
}
if (failed) {
  console.log(`\n${failed} failed`);
  process.exit(1);
}
console.log('\nall passed');
