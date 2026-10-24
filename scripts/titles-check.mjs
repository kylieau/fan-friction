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
    // The short forms keep build 5's order for a named game: the event name outlives the away side (guarded since
    // build 7.1, when bare matchups stopped dropping the away side).
    ['N17 Red River', game('Texas vs. Oklahoma (Red River Showdown)', { neutralSite: true, sourceId: 'seed' }), { short: 'Oklahoma · Red River Showdown', full: 'Texas vs. Oklahoma · Red River Showdown' }],
    ['N17 Florida–Georgia', game('Florida vs. Georgia (neutral site)', { sourceId: 'seed' }), { short: 'Georgia · Neutral site', full: 'Florida vs. Georgia · Neutral site' }],
    ['N18 East LA Classic', game('East LA Classic (Garfield vs. Roosevelt)', { sourceId: 'seed' }), { short: 'Roosevelt · East LA Classic', full: 'Garfield vs. Roosevelt · East LA Classic' }],
    ['N18 Copa Las Vegas', game('Copa Las Vegas: USA vs Mexico', { sport: 'soccer', sourceId: 'ticketmaster' }), { full: 'USA vs. Mexico · Copa Las Vegas' }],
    ['N19 World Series seed', game('World Series Game 1', { sport: 'baseball', teams: { home: 'dodgers', away: 'yankees' }, stakes: { round: 'World Series', game: 1 }, sourceId: 'seed' }), { full: 'Yankees at Dodgers (World Series Game\u00a01)' }],
    ['N03/N04 NLCS', game('Dodgers vs. Brewers', { sport: 'baseball', teams: { home: 'dodgers', away: 'brewers' }, stakes: { round: 'NLCS', game: 3 }, sourceId: 'mlb' }), { chip: 'Dodgers (NLCS\u00a0G3)', short: 'Brewers at Dodgers (NLCS\u00a0G3)', full: 'Brewers at Dodgers (NL Championship Series Game\u00a03)' }],
    // Labels r3 (Kylie, Oct 15): the short name carries the label inline, in parentheses, outside the 32-character budget.
    ['Long name, label kept', game('Brewers vs. Diamondbacks', { sport: 'baseball', teams: { home: 'brewers', away: 'diamondbacks' }, stakes: { round: 'NLCS', game: 3 }, sourceId: 'mlb' }), { short: 'Diamondbacks at Brewers (NLCS\u00a0G3)' }],
    ['If necessary, one set of parentheses', game('Dodgers vs. Brewers', { sport: 'baseball', teams: { home: 'dodgers', away: 'brewers' }, stakes: { round: 'NLCS', game: 6, ifNecessary: true }, sourceId: 'mlb' }), { chip: 'Dodgers (NLCS\u00a0G6)', short: 'Brewers at Dodgers (NLCS\u00a0G6, if necessary)' }],
    ['Home Opener', game('Dodgers vs. Giants', { sport: 'baseball', teams: { home: 'dodgers', away: 'giants' }, homeOpener: true, sourceId: 'mlb' }), { chip: 'Dodgers', short: 'Giants at Dodgers (Home Opener)' }],
    ['Exhibition from the title', game('Galaxy vs. Club América Exhibition', { sport: 'soccer', sourceId: 'ticketmaster' }), { chip: 'Galaxy' }],
    ['N06/N07 Super Bowl', game('Rams vs. Chiefs', { teams: { home: 'rams', away: 'chiefs' }, stakes: { round: 'Super Bowl' }, date: '2027-02-14' }), { full: 'Chiefs vs. Rams (Super Bowl 2027)' }],
    ['N08 Preseason', game('Clippers vs. Nuggets', { sport: 'basketball', teams: { home: 'clippers', away: 'nuggets' }, preseason: true }), { chip: 'Clippers', short: 'Nuggets at Clippers (Preseason)' }],
    ['Case 1 spring training', game('Reds vs. Cubs', { sport: 'baseball', metroId: 'phoenix', teams: { home: 'reds', away: 'cubs' }, preseason: true, sourceId: 'mlb' }), { short: 'Cubs at Reds (Spring Training)', full: 'Cubs at Reds (Spring Training, Cactus League)' }],
    // Doubleheaders (Kylie, M3-04; build 6, item 10): never a plain "Game N"; the chip keeps DH1.
    ['N09 doubleheader', game("Angels vs. A's", { sport: 'baseball', teams: { home: 'angels', away: 'athletics' }, doubleheader: 1, sourceId: 'mlb' }), { chip: 'Angels (DH1)', short: "A's at Angels (DH1)", full: "A's at Angels (Doubleheader, Game 1)" }],
    // Rank in the title, event page only, when a source filled it (Kylie, M3-08; build 6, item 10).
    // Since build 7.1 (M38) college football carries its label too.
    ['Rank in the full title', game('UCLA vs. USC', { sport: 'football', teams: { home: 'ucla-football', away: 'usc-football' }, rank: { home: 4, away: 17 } }), { short: 'USC at UCLA (FB)', full: '#17 USC at #4 UCLA (Football)' }],
    ['Case 6 AHL Playoffs', game('Gulls vs. Reign', { sport: 'hockey', stakes: { round: 'AHL Playoffs' }, sourceId: 'hockeytech' }), { short: 'Reign at Gulls (AHL Playoffs)', full: 'Reign at Gulls (Calder Cup Playoffs)' }],
    ['N10 artist before tour', show('Song Of The Saints Tour with Phil Wickham', { performer: 'Phil Wickham' }), { full: 'Phil Wickham · Song Of The Saints Tour' }],
    ['N28 middle dot', show('Phoebe Bridgers: The Lost Tour', { performer: 'Phoebe Bridgers' }), { short: 'Phoebe Bridgers · The Lost Tour' }],
    // A quoted tour after the act (Oct 20, 2026); quotes elsewhere only lose the spaces inside them.
    ['Quoted tour', show('Ramon Ayala " Historia De Un Final"', { performer: 'Ramon Ayala' }), { full: 'Ramon Ayala · Historia De Un Final' }],
    ['Quoted tour, no gap', show('Don Omar "The Last King World Tour"', { performer: 'Don Omar' }), { full: 'Don Omar · The Last King World Tour' }],
    ['Quotes, not a tour', show('A " Charlie Brown " Christmas', { performer: 'Charlie Brown' }), { full: 'A "Charlie Brown" Christmas' }],
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
  const ok = merged.length === 1 && merged[0].sourceId === 'mlb' && merged[0].mergedFrom?.[0]?.id === 'tm-1' && listTitle(merged[0]) === 'Dodgers at Cubs (Spring Training)';
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
  if (sched !== 'Nuggets at Clippers (Preseason)') (failed += 1), console.log(`FAIL schedule title: ${sched}`);
  const relPre = teamRelativeTitle({ home: true, opponent: 'Nuggets', preseason: true });
  if (relPre !== 'vs. Nuggets (Preseason)') (failed += 1), console.log(`FAIL team page preseason: ${relPre}`);
  // Labels r3: a title's label is read back from the string, on new titles and older saved ones; a tail that is
  // not a label stays part of the name.
  const { splitTitleLabel } = await server.ssrLoadModule('/src/lib/eventTitle.ts');
  const splits = [
    ['Nuggets at Clippers (Preseason)', 'Nuggets at Clippers', 'low', 'Preseason'],
    ['Brewers at Dodgers (NLCS\u00a0G3)', 'Brewers at Dodgers', 'stage', 'NLCS Game\u00a03'],
    ['Brewers at Dodgers (NLCS\u00a0G6, if necessary)', 'Brewers at Dodgers', 'stage', 'NLCS Game\u00a06 +ifnec'],
    ['Brewers at Dodgers (NL Championship Series Game\u00a03)', 'Brewers at Dodgers', 'stage', 'NL Championship Series Game\u00a03'],
    ['Braves at Dodgers · NLDS Game 1', 'Braves at Dodgers', 'stage', 'NLDS Game\u00a01'],
    ['Brewers at Dodgers · NLCS, Game 3', 'Brewers at Dodgers', 'stage', 'NLCS Game\u00a03'],
    ['Preseason · vs. Nuggets', 'vs. Nuggets', 'low', 'Preseason'],
    ['Cubs at Reds (Spring Training, Cactus League)', 'Cubs at Reds', 'low', 'Spring Training, Cactus League'],
    ['Jessie Ware (DJ Set)', 'Jessie Ware (DJ Set)', null, null],
    // Build 7.1, M38: a sport alone is a label too ("Football"), so an older " · Football" tail reads as one.
    ['Wisconsin at UCLA · Football', 'Wisconsin at UCLA', 'sport', 'Football'],
    ['Cal Baptist at UCLA (MBB · Preseason)', 'Cal Baptist at UCLA', 'low', "Men's Basketball · Preseason"],
    ['Texas at Georgia (VB)', 'Texas at Georgia', 'sport', 'Volleyball'],
    // An older saved "(Game 1)" reads as the doubleheader it was (build 6, item 10).
    ["Angels at A's (Game\u00a01)", "Angels at A's", 'game', 'Doubleheader Game\u00a01'],
    ["Angels at A's (DH1)", "Angels at A's", 'game', 'Doubleheader Game\u00a01'],
    ["Angels at A's (Doubleheader, Game\u00a01)", "Angels at A's", 'game', 'Doubleheader Game\u00a01'],
  ];
  for (const [text, name, kind, own] of splits) {
    const got = splitTitleLabel(text);
    const gotOwn = got.label ? got.label.own + (got.label.ifNecessary ? ' +ifnec' : '') : null;
    if (got.name !== name || (got.label?.kind ?? null) !== kind || gotOwn !== own) (failed += 1), console.log(`FAIL label split: ${text} → ${JSON.stringify(got)}`);
  }
  console.log('ok   Label split: new titles and older saved ones; concert parentheses and sport tails stay plain');
  const relAway = teamRelativeTitle({ home: false, opponent: 'Brewers', stakes: { round: 'NLCS', game: 6, ifNecessary: true } });
  if (relAway !== 'at Brewers (NLCS\u00a0G6, if necessary)') (failed += 1), console.log(`FAIL team page away: ${relAway}`);
  const rel = teamRelativeTitle({ home: true, opponent: 'Padres' });
  if (rel !== 'vs. Padres') (failed += 1), console.log(`FAIL team page: ${rel}`);
  else console.log('ok   Team page: vs. Padres, at Brewers (labels r3 replace N29\'s @)');
  // Build 7.1, M20: a neutral site reads "vs." with no venue in the title; the row's venue line names the place.
  const relNeutral = teamRelativeTitle({ home: false, neutral: true, opponent: '49ers', venueName: 'Estadio Banorte' });
  if (relNeutral !== 'vs. 49ers') (failed += 1), console.log(`FAIL team page neutral: ${relNeutral}`);
  else console.log('ok   Team page neutral: vs. 49ers, no venue in the title (M20)');

  // Build 7.1, M9, M35b and M38: school games are titled with school names only, Away at Home, the sport on the
  // label line, with or without a team record; football reads "Football" alone; a bare feed program stays bare.
  const college = (title, sport, extra = {}) => game(title, { sport, sourceId: 'sidearm', audience: { domain: 'sports', sport, level: 'college', ...(extra.division ? { division: extra.division } : {}) }, ...extra });
  const schoolCases = [
    ['M9 Cal Baptist at UCLA', college('UCLA vs. Cal Baptist', 'basketball', { division: 'men', preseason: true }), { short: 'Cal Baptist at UCLA (MBB · Preseason)', full: "Cal Baptist at UCLA (Men's Basketball · Preseason)" }],
    ['M35b Fullerton men\'s soccer', college('Cal State Fullerton vs. UC Riverside', 'soccer', { division: 'men' }), { short: 'UC Riverside at Cal State Fullerton (MSOC)', full: "UC Riverside at Cal State Fullerton (Men's Soccer)" }],
    ['M38 UC Irvine women\'s volleyball', college('UC Irvine vs. Long Beach St', 'volleyball', { division: 'women' }), { short: 'Long Beach St at UC Irvine (WVB)', full: "Long Beach St at UC Irvine (Women's Volleyball)" }],
    ['M38 college football with a record', game('UCLA vs. Michigan St', { teams: { home: 'ucla-football', away: 'Michigan St' } }), { short: 'Michigan St at UCLA (FB)', full: 'Michigan St at UCLA (Football)' }],
    ['M38 bare feed program', college('Texas vs. Georgia', 'volleyball'), { short: 'Georgia at Texas (VB)', full: 'Georgia at Texas (Volleyball)' }],
    ['M38 college softball', college('Texas State vs. UTSA', 'softball'), { short: 'UTSA at Texas State (SB)', full: 'UTSA at Texas State (Softball)' }],
    ['Pro football keeps no label', game('Rams vs. Bills', { teams: { home: 'rams', away: 'Bills' } }), { short: 'Bills at Rams', full: 'Bills at Rams' }],
  ];
  for (const [label, event, want] of schoolCases) {
    const got = { short: listTitle(event), full: fullTitle(event) };
    const bad = Object.keys(want).filter((k) => got[k] !== want[k]);
    if (bad.length) (failed += 1), console.log(`FAIL ${label}: ${bad.map((k) => `${k} got "${got[k]}", want "${want[k]}"`).join('; ')}`);
    else console.log(`ok   ${label}: ${got.short} | ${got.full}`);
  }
  // The repair of a row saved before M9: program out of the title, onto the audience, the same object when nothing applies.
  const { repairSidearmRow } = await server.ssrLoadModule('/src/data/sources/sidearmSource.ts');
  const old = game("UCLA Men's Basketball vs. Cal Baptist", { sport: 'basketball', sourceId: 'sidearm', preseason: true });
  const fixed = repairSidearmRow(old);
  const fixedShort = listTitle(fixed);
  if (fixed.title !== 'UCLA vs. Cal Baptist' || fixed.audience.division !== 'men' || fixed.audience.level !== 'college' || fixedShort !== 'Cal Baptist at UCLA (MBB · Preseason)') (failed += 1), console.log(`FAIL M9 repair: ${JSON.stringify({ title: fixed.title, audience: fixed.audience, short: fixedShort })}`);
  else console.log(`ok   M9 repair: "${old.title}" → "${fixed.title}", ${fixedShort}`);
  const bareOld = game('Texas Volleyball vs. Georgia', { sport: 'volleyball', sourceId: 'sidearm' });
  const bareFixed = repairSidearmRow(bareOld);
  if (bareFixed.title !== 'Texas vs. Georgia' || bareFixed.audience.division !== undefined) (failed += 1), console.log(`FAIL M9 repair bare: ${JSON.stringify(bareFixed)}`);
  if (repairSidearmRow(fixed) !== fixed || repairSidearmRow(game('Lakers vs. Clippers', { sport: 'basketball' })) === undefined) (failed += 1), console.log('FAIL M9 repair: a repaired or non-school row should pass through as the same object');
  else console.log('ok   M9 repair: a repaired row and a non-school row pass through unchanged');

  // Codex stage 1 (build 7.1): a college program's schedule rows carry the sport label too; a bare beach volleyball
  // label never reads as Boys' Volleyball; the visitor's record is resolved; a repaired row is never repaired again.
  const schedFb = teamRelativeTitle({ home: true, opponent: 'Michigan St' }, 'football', 'ucla-football');
  if (schedFb !== 'vs. Michigan St (FB)') (failed += 1), console.log(`FAIL schedule sport label: ${schedFb}`);
  const schedPro = teamRelativeTitle({ home: true, opponent: 'Nuggets', preseason: true }, 'basketball', 'clippers');
  if (schedPro !== 'vs. Nuggets (Preseason)') (failed += 1), console.log(`FAIL schedule pro label: ${schedPro}`);
  else console.log('ok   Schedule rows: vs. Michigan St (FB) for a college program, pro rows unchanged');
  const beach = college('UCLA vs. USC', 'beach volleyball');
  const beachShort = listTitle(beach);
  const beachSplit = splitTitleLabel(beachShort);
  if (beachShort !== 'USC at UCLA (Beach Volleyball)' || beachSplit.label?.own !== 'Beach Volleyball') (failed += 1), console.log(`FAIL bare beach volleyball: ${beachShort} → ${JSON.stringify(beachSplit.label)}`);
  else console.log(`ok   Bare beach volleyball: ${beachShort}, read back as Beach Volleyball`);
  const withAway = repairSidearmRow(game("UCLA Men's Basketball vs. Cal Baptist", { sport: 'basketball', sourceId: 'sidearm' }));
  if (withAway.teams?.away !== 'cal-baptist-mbb') (failed += 1), console.log(`FAIL M9 repair visitor record: ${JSON.stringify(withAway.teams)}`);
  else console.log(`ok   M9 repair: the visitor's record resolved (${withAway.teams.home} vs. ${withAway.teams.away})`);
  const cleanSchool = college('Academy of Football vs. UCLA', 'football');
  if (repairSidearmRow(cleanSchool) !== cleanSchool) (failed += 1), console.log('FAIL M9 repair: a row written since the fix was repaired again');
  else console.log('ok   M9 repair: a row written since the fix (level set) is never read again');

  // Build 7.1, M21: a schedule row's venue string reads as the app's own name for the building.
  const { gameVenueName } = await server.ssrLoadModule('/src/data/gameStub.ts');
  const venueCases = [
    ['UNIQLO Field at Dodger Stadium', 'Dodger Stadium'],
    ['United Airlines Field at the Los Angeles Memorial Coliseum', 'LA Memorial Coliseum'],
    ['Staples Center', 'Crypto.com Arena'],
    ['Some Park Nobody Lists', 'Some Park Nobody Lists'],
    // A name several cities' rooms go by stays the feed's words when the game's city doesn't have it (Codex stage 1).
    ['The Pavilion', 'The Pavilion'],
  ];
  for (const [raw, want] of venueCases) {
    const got = gameVenueName({ id: 'g', date: '2026-10-04', start: null, home: true, opponent: 'X', venueName: raw }, 'la');
    if (got !== want) (failed += 1), console.log(`FAIL M21 venue name: "${raw}" → "${got}", want "${want}"`);
  }
  const elsewhere = gameVenueName({ id: 'g', date: '2026-10-04', start: null, home: false, opponent: 'X', venueName: 'Fenway Park' }, 'la');
  if (elsewhere !== 'Fenway Park') (failed += 1), console.log(`FAIL M21 unique room elsewhere: ${elsewhere}`);
  console.log('ok   M21 venue names: the app\'s own name for a building the feed spells with its sponsor');

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
