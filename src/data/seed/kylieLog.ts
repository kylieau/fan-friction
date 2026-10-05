// Kylie's own log, from docs/kylie-logs.md. Since Oct 5, 2026 it lives in her
// account (supabase/migrations/0002_kylie_log.sql, generated from this file) and
// is no longer shipped inside the app. Kept as the source for that migration.
// Originally: (sports 2025–2026 and the concerts,
// including 2013–2015). Dates she left rough stay rough. Venues are filled in
// only where the log names one, or where "vs" means a home game at that team's
// usual building. Away games and tournament rounds do not borrow an LA rating.
// No scores were in the log, so no result lines are invented.

import type { EventKind, Entry, LoggedWhen } from '../types';

interface Extra {
  tags?: string[];
  sides?: string[];
  venue?: string;
  away?: boolean;
  belowFloor?: boolean;
  inMetro?: boolean;
  note?: string;
  eventId?: string;
  kind?: EventKind;
  /** City this night happened in, when it is not Los Angeles. */
  metroId?: string;
  neutralSite?: boolean;
  starter?: string;
  promo?: string;
  notable?: string;
}

const day = (iso: string): LoggedWhen => ({ sort: iso, label: '', precision: 'day' });
const month = (ym: string, label: string): LoggedWhen => ({ sort: `${ym}-01`, label, precision: 'month' });
const year = (y: number): LoggedWhen => ({ sort: `${y}-01-01`, label: String(y), precision: 'year' });
const span = (y: number, label: string): LoggedWhen => ({ sort: `${y}-01-01`, label, precision: 'span' });
const unknown = (): LoggedWhen => ({ sort: '0000-01-01', label: 'Date not written down', precision: 'unknown' });

function entry(
  id: string,
  when: LoggedWhen,
  title: string,
  tag: string,
  sport: string,
  side: string,
  extra: Extra = {},
): Entry {
  const away = extra.away ?? false;
  const inMetro = extra.inMetro ?? !away;
  return {
    id,
    when,
    title,
    tags: extra.tags ?? [tag],
    sport,
    sides: extra.sides ?? [side],
    venue: extra.venue,
    away: away || undefined,
    belowFloor: extra.belowFloor,
    inMetro,
    note: extra.note,
    eventId: extra.eventId,
    starter: extra.starter,
    promo: extra.promo,
    notable: extra.notable,
    kind: extra.kind ?? 'game',
    neutralSite: extra.neutralSite,
    metroId: extra.metroId ?? (inMetro ? 'la' : undefined),
  };
}

const MBB = "Men's basketball";
const WBB = "Women's basketball";
const FB = 'Football';
const BB = 'Baseball';
const MVB = "Men's volleyball";
const WVB = "Women's volleyball";
const WNBA = 'WNBA';
const SOCCER = 'Soccer';

const uclaMbb = (iso: string, opponent: string) =>
  entry(`k-${iso}-ucla-mbb`, day(iso), `UCLA MBB vs. ${opponent}`, 'UCLA MBB', MBB, 'UCLA', { venue: 'Pauley Pavilion' });
const uclaWbb = (iso: string, title: string, extra?: Extra) =>
  entry(`k-${iso}-ucla-wbb`, day(iso), title, 'UCLA WBB', WBB, 'UCLA', { venue: 'Pauley Pavilion', ...extra });
const uclaFb = (iso: string, opponent: string, extra?: Extra) =>
  entry(`k-${iso}-ucla-fb`, day(iso), `UCLA FB vs. ${opponent}`, 'UCLA FB', FB, 'UCLA', {
    venue: 'Rose Bowl',
    ...extra,
  });
/** Her pitcher shorthand, from the log header. */
const PITCHER: Record<string, string> = {
  Yama: 'Yamamoto',
  Glas: 'Glasnow',
  Sho: 'Ohtani',
  Sheehan: 'Sheehan',
  Roki: 'Sasaki',
};

const dodgers = (iso: string, title: string, extra: Extra = {}) => {
  const nick = title.match(/\(([^)]+)\)/)?.[1];
  const starter = extra.starter ?? (nick ? (PITCHER[nick] ?? nick) : undefined);
  return entry(`k-${iso}-dodgers`, day(iso), title, 'Dodgers', BB, 'Dodgers', {
    venue: 'Dodger Stadium',
    ...extra,
    starter,
  });
};
const lakers = (iso: string, opponent: string) =>
  entry(`k-${iso}-lakers`, day(iso), `Lakers vs. ${opponent}`, 'Lakers', MBB, 'Lakers', { venue: 'Crypto.com Arena' });
const sparks = (iso: string, opponent: string) =>
  entry(`k-${iso}-sparks`, day(iso), `Sparks vs. ${opponent}`, 'Sparks', WNBA, 'Sparks', { venue: 'Crypto.com Arena' });

const show = (id: string, when: LoggedWhen, title: string, extra: Extra = {}): Entry =>
  entry(id, when, title, 'Concerts', 'Concerts', title, { kind: 'show', ...extra, tags: ['Concerts'] });

export const KYLIE_LOG: Entry[] = [
  // Sports, 2026
  uclaWbb('2026-01-03', '#4 UCLA WBB vs. #17 USC'),
  uclaMbb('2026-01-10', 'Maryland'),
  uclaMbb('2026-01-20', '#4 Purdue'),
  uclaWbb('2026-01-21', '#3 UCLA WBB vs. Purdue'),
  uclaMbb('2026-01-31', 'Indiana'),
  uclaWbb('2026-02-01', '#2 UCLA WBB vs. #8 Iowa'),
  uclaMbb('2026-02-03', 'Rutgers'),
  uclaMbb('2026-02-07', 'Washington'),
  entry('k-2026-02-14-cms-pp', day('2026-02-14'), 'CMS WBB @ Pomona-Pitzer', 'CMS WBB', WBB, 'CMS', {
    tags: ['CMS WBB', 'Pomona-Pitzer WBB'],
    sides: ['CMS', 'Pomona-Pitzer'],
    venue: 'Pomona-Pitzer',
    away: true,
    belowFloor: true,
    inMetro: true,
    note: 'Kel senior night',
  }),
  uclaWbb('2026-02-19', '#2 UCLA WBB vs. Washington'),
  entry('k-2026-02-20-ucla-mvb', day('2026-02-20'), '#1 UCLA MVB vs. #2 Long Beach', 'UCLA MVB', MVB, 'UCLA'),
  uclaMbb('2026-02-21', '#10 Illinois'),
  uclaWbb('2026-02-22', '#2 UCLA WBB vs. Wisconsin'),
  uclaMbb('2026-02-24', 'USC'),
  entry('k-2026-03-03-ucla-baseball', day('2026-03-03'), '#1 UCLA baseball vs. CSF', 'UCLA Baseball', BB, 'UCLA', {
    venue: 'Jackie Robinson Stadium',
    belowFloor: true,
  }),
  uclaMbb('2026-03-03', '#9 Nebraska'),
  entry('k-2026-03-06-ucla-mvb', day('2026-03-06'), '#1 UCLA MVB vs. #4 USC', 'UCLA MVB', MVB, 'UCLA'),
  entry('k-2026-03-08-cal-lu-bw', day('2026-03-08'), '#5 Cal Lutheran MVB vs. Baldwin Wallace', 'Cal Lutheran MVB', MVB, 'Cal Lutheran', {
    venue: 'Cal Lutheran',
    belowFloor: true,
  }),
  entry('k-2026-03-08-cal-lu-kean', day('2026-03-08'), '#5 Cal Lutheran MVB vs. Kean', 'Cal Lutheran MVB', MVB, 'Cal Lutheran', {
    venue: 'Cal Lutheran',
    belowFloor: true,
  }),
  lakers('2026-03-10', 'Timberwolves'),
  uclaWbb('2026-03-21', '#1 UCLA WBB vs. Cal Baptist (R64)'),
  uclaWbb('2026-03-23', '#1 UCLA WBB vs. Oklahoma State (R32)'),
  dodgers('2026-03-26', 'Dodgers (Yama) vs. Diamondbacks'),
  lakers('2026-03-27', 'Nets'),
  dodgers('2026-03-28', 'Dodgers (Glas) vs. Diamondbacks'),
  entry('k-2026-03-29-ucla-wbb', day('2026-03-29'), '#1 UCLA WBB vs. #3 Duke (E8)', 'UCLA WBB', WBB, 'UCLA', {
    venue: 'Golden 1 Center',
    inMetro: false,
    metroId: 'sacramento',
    neutralSite: true,
  }),
  entry('k-2026-04-03-uconn-sc', day('2026-04-03'), '#1 UConn vs. #1 South Carolina (Final Four)', 'Women\'s basketball', WBB, 'UConn', {
    sides: ['UConn', 'South Carolina'],
    venue: 'Mortgage Matchup Center',
    inMetro: false,
    metroId: 'phoenix',
    neutralSite: true,
  }),
  entry('k-2026-04-03-ucla-wbb', day('2026-04-03'), '#1 UCLA WBB vs. #1 Texas (Final Four)', 'UCLA WBB', WBB, 'UCLA', {
    venue: 'Mortgage Matchup Center',
    inMetro: false,
    metroId: 'phoenix',
    neutralSite: true,
  }),
  entry('k-2026-04-05-ucla-wbb', day('2026-04-05'), '#1 UCLA WBB vs. #1 South Carolina (natty)', 'UCLA WBB', WBB, 'UCLA', {
    venue: 'Mortgage Matchup Center',
    inMetro: false,
    metroId: 'phoenix',
    neutralSite: true,
  }),
  lakers('2026-04-10', 'Suns'),
  dodgers('2026-04-15', 'Dodgers (Sho) vs. Mets'),
  sparks('2026-05-13', 'Fever'),
  dodgers('2026-05-27', 'Dodgers (Sho) vs. Rockies'),
  sparks('2026-06-05', 'Wings'),
  dodgers('2026-06-07', 'Dodgers (Sheehan) vs. Angels'),
  dodgers('2026-07-03', 'Dodgers (Sho) vs. Padres'),
  dodgers('2026-07-04', 'Dodgers (Yama) vs. Padres'),
  dodgers('2026-08-13', 'Dodgers (Roki) vs. Brewers'),
  dodgers('2026-08-21', 'Dodgers (Yama) vs. Pirates'),
  entry('k-2026-09-17-mystics', day('2026-09-17'), 'Mystics @ Sky', 'Mystics', WNBA, 'Mystics', {
    venue: 'Wintrust Arena',
    away: true,
    inMetro: false,
    metroId: 'chicago',
  }),
  entry('k-2026-09-21-rams', day('2026-09-21'), 'Rams vs. NY Giants', 'Rams', FB, 'Rams', { venue: 'SoFi Stadium' }),
  dodgers('2026-09-24', 'Dodgers vs. Padres'),

  // Sports, 2025
  uclaWbb('2025-01-01', 'UCLA WBB vs. Michigan'),
  lakers('2025-01-02', 'Trail Blazers'),
  uclaMbb('2025-01-17', 'Iowa'),
  entry('k-2025-01-18-pp', day('2025-01-18'), 'Pomona-Pitzer WBB vs. La Verne', 'Pomona-Pitzer WBB', WBB, 'Pomona-Pitzer', {
    venue: 'Pomona-Pitzer',
    belowFloor: true,
  }),
  uclaMbb('2025-01-21', 'Wisconsin'),
  uclaMbb('2025-01-30', 'Oregon'),
  uclaWbb('2025-02-02', 'UCLA WBB vs. Minnesota'),
  uclaMbb('2025-02-04', 'Michigan State'),
  uclaWbb('2025-02-05', 'UCLA WBB vs. Ohio State'),
  uclaMbb('2025-02-08', 'Penn State'),
  entry('k-2025-02-15-cms-pp', day('2025-02-15'), 'CMS WBB vs. Pomona-Pitzer', 'CMS WBB', WBB, 'CMS', {
    tags: ['CMS WBB', 'Pomona-Pitzer WBB'],
    sides: ['CMS', 'Pomona-Pitzer'],
    venue: 'CMS',
    belowFloor: true,
  }),
  uclaWbb('2025-02-16', 'UCLA WBB vs. Michigan State'),
  uclaMbb('2025-02-18', 'Minnesota'),
  uclaWbb('2025-02-20', 'UCLA WBB vs. Illinois'),
  uclaMbb('2025-02-23', 'Ohio State'),
  uclaWbb('2025-03-01', 'UCLA WBB vs. USC'),
  lakers('2025-03-04', 'Pelicans'),
  uclaMbb('2025-03-08', 'USC'),
  uclaWbb('2025-03-21', 'UCLA WBB vs. Southern'),
  uclaWbb('2025-03-23', 'UCLA WBB vs. Richmond'),
  entry('k-2025-04-04-sc-texas', day('2025-04-04'), 'South Carolina vs. Texas (Final Four)', 'Women\'s basketball', WBB, 'South Carolina', {
    sides: ['South Carolina', 'Texas'],
    venue: 'Amalie Arena',
    inMetro: false,
    metroId: 'tampa',
    neutralSite: true,
  }),
  entry('k-2025-04-04-ucla-wbb', day('2025-04-04'), 'UCLA WBB vs. UConn (Final Four)', 'UCLA WBB', WBB, 'UCLA', {
    venue: 'Amalie Arena',
    inMetro: false,
    metroId: 'tampa',
    neutralSite: true,
  }),
  entry('k-2025-04-13-lafc', day('2025-04-13'), 'LAFC vs. San Jose', 'LAFC', SOCCER, 'LAFC', { venue: 'BMO Stadium' }),
  dodgers('2025-05-18', 'Dodgers vs. Angels'),
  entry('k-2025-06-13-mariners', day('2025-06-13'), 'Mariners vs. Guardians', 'Mariners', BB, 'Mariners', {
    venue: 'T-Mobile Park',
    inMetro: false,
    metroId: 'seattle',
  }),
  entry('k-2025-06-29-lafc', day('2025-06-29'), 'LAFC vs. Whitecaps', 'LAFC', SOCCER, 'LAFC', { venue: 'BMO Stadium' }),
  dodgers('2025-07-04', 'Dodgers vs. Astros'),
  entry('k-2025-08-14-braves', day('2025-08-14'), 'Braves @ Mets', 'Braves', BB, 'Braves', {
    venue: 'Citi Field',
    away: true,
    inMetro: false,
    metroId: 'new-york',
  }),
  dodgers('2025-08-23', 'Dodgers @ Padres', { venue: 'Petco Park', away: true, inMetro: false, metroId: 'san-diego' }),
  uclaFb('2025-08-30', 'Utah'),
  sparks('2025-09-07', 'Wings'),
  dodgers('2025-09-10', 'Dodgers vs. Rockies'),
  uclaFb('2025-09-12', 'New Mexico'),
  dodgers('2025-09-19', 'Dodgers vs. Giants'),
  dodgers('2025-09-21', 'Dodgers vs. Giants'),
  dodgers('2025-09-30', 'NLWC Game 1: Dodgers vs. Reds'),
  uclaFb('2025-10-04', 'Penn State'),
  dodgers('2025-10-08', 'NLDS Game 3: Dodgers vs. Phillies'),
  entry('k-2025-10-10-ucla-wvb', day('2025-10-10'), 'UCLA WVB vs. USC', 'UCLA WVB', WVB, 'UCLA'),
  uclaFb('2025-10-18', 'Maryland'),
  uclaMbb('2025-10-28', 'Irvine'),
  uclaMbb('2025-11-03', 'Eastern Washington'),
  uclaMbb('2025-11-10', 'West Georgia'),
  uclaMbb('2025-11-21', 'Presbyterian'),
  entry('k-2025-11-15-ucla-fb', day('2025-11-15'), 'UCLA FB @ Ohio State', 'UCLA FB', FB, 'UCLA', {
    venue: 'Ohio Stadium',
    away: true,
    inMetro: false,
    metroId: 'columbus',
  }),
  uclaFb('2025-11-22', 'Washington'),
  uclaWbb('2025-11-23', 'UCLA WBB vs. Southern'),
  entry('k-2025-11-28-pp', day('2025-11-28'), 'Pomona-Pitzer WBB vs. Babson', 'Pomona-Pitzer WBB', WBB, 'Pomona-Pitzer', {
    venue: 'Pomona-Pitzer',
    belowFloor: true,
  }),
  entry('k-2025-11-29-cosm', day('2025-11-29'), 'Ohio State @ Michigan, at Cosm', 'Cosm', FB, 'Ohio State', {
    venue: 'Cosm',
    kind: 'live-broadcast',
    belowFloor: true,
    note: 'Watch party, not the game itself.',
  }),
  uclaWbb('2025-11-30', 'UCLA WBB vs. Tennessee'),
  entry('k-2025-12-03-pp', day('2025-12-03'), 'Pomona-Pitzer WBB @ Caltech', 'Pomona-Pitzer WBB', WBB, 'Pomona-Pitzer', {
    venue: 'Caltech',
    away: true,
    belowFloor: true,
    inMetro: true,
  }),
  entry('k-2025-12-04-princeton', day('2025-12-04'), 'Princeton WVB @ USC', 'Princeton WVB', WVB, 'Princeton', {
    venue: 'USC',
    away: true,
    inMetro: true,
  }),
  uclaMbb('2025-12-06', 'Oregon'),
  entry('k-2025-12-13-uconn', day('2025-12-13'), 'UConn WBB @ USC', 'Women\'s basketball', WBB, 'UConn', {
    venue: 'USC',
    away: true,
    inMetro: true,
  }),
  uclaWbb('2025-12-16', 'UCLA WBB vs. Cal Poly Pomona'),
  uclaMbb('2025-12-17', 'Arizona State'),

  // Concerts, about 2013 to 2025. Rough dates stay rough.
  show('k-atl-2013', span(2013, '2013–14'), 'All Time Low', {
    venue: 'House of Blues Anaheim',
    belowFloor: true,
    sides: ['All Time Low'],
  }),
  show('k-onerepublic-script-2014', year(2014), 'OneRepublic & The Script', {
    venue: 'Irvine Amphitheatre',
    sides: ['OneRepublic'],
  }),
  show('k-onedirection-2014', year(2014), 'One Direction', { venue: 'Rose Bowl', sides: ['One Direction'] }),
  show('k-5sos', unknown(), '5 Seconds of Summer', {
    venue: 'Irvine Amphitheatre',
    sides: ['5 Seconds of Summer'],
    note: 'Maybe with family. Year not written down.',
  }),
  show('k-muse-2013-01', month('2013-01', 'January 2013'), 'Muse', {
    venue: 'Staples Center',
    sides: ['Muse'],
    note: 'Exact night not written down.',
  }),
  show('k-rascal-2016', year(2016), 'Rascal Flatts', { sides: ['Rascal Flatts'], inMetro: false }),
  show('k-onerepublic-2017', year(2017), 'OneRepublic', {
    sides: ['OneRepublic'],
    inMetro: false,
    note: 'Maybe with the team. Chula Vista.',
  }),
  show('k-paisley-young', unknown(), 'Brad Paisley & Brett Young', {
    sides: ['Brad Paisley'],
    note: 'Logged as at UCLA. Date not written down.',
  }),
  show('k-paisley-2018-01', month('2018-01', 'January 2018'), 'Brad Paisley', { venue: 'Staples Center', sides: ['Brad Paisley'] }),
  show('k-stagecoach-2018', year(2018), 'Stagecoach', {
    kind: 'festival',
    venue: 'Empire Polo Club',
    inMetro: false,
    sides: ['Stagecoach'],
    note: 'Sets: Keith Urban, Jake Owen, Kelsea Ballerini, Chris Lane, Chris Janson, Brothers Osborne, Florida Georgia Line, Lee Brice, Garth Brooks, Brett Young, Kacey Musgraves.',
  }),
  show('k-legend-gala', unknown(), 'John Legend (LADF gala)', { sides: ['John Legend'] }),
  show('k-urban-ballerini', unknown(), 'Keith Urban & Kelsea Ballerini', { venue: 'Staples Center', sides: ['Keith Urban'] }),
  show('k-bryan-hunt-2018', month('2018-07', 'about July 2018'), 'Luke Bryan & Sam Hunt', { sides: ['Luke Bryan'], inMetro: false }),
  show('k-sheeran', unknown(), 'Ed Sheeran', { venue: 'Rose Bowl', sides: ['Ed Sheeran'] }),
  show('k-samsmith', unknown(), 'Sam Smith', { venue: 'Staples Center', sides: ['Sam Smith'] }),
  show('k-rkcb', unknown(), 'RKCB', { venue: 'Troubadour', belowFloor: true, sides: ['RKCB'] }),
  show('k-stagecoach-2019', year(2019), 'Stagecoach', {
    kind: 'festival',
    venue: 'Empire Polo Club',
    inMetro: false,
    sides: ['Stagecoach'],
    note: 'Sets: Luke Bryan, Sam Hunt, Cole Swindell, Luke Combs, Lauren Alaina, LANCO, Russell Dickerson, Kelsea Ballerini, Old Dominion, Scotty McCreery, Kane Brown, Jason Aldean, Diplo.',
  }),
  show('k-mendes-2019', month('2019-07', 'about July 2019'), 'Shawn Mendes & Alessia Cara', {
    venue: 'Staples Center',
    sides: ['Shawn Mendes'],
  }),
  show('k-dan-shay-2022', year(2022), 'Dan + Shay', { venue: 'Crypto.com Arena', sides: ['Dan + Shay'] }),
  show('k-stagecoach-2022', year(2022), 'Stagecoach', {
    kind: 'festival',
    venue: 'Empire Polo Club',
    inMetro: false,
    sides: ['Stagecoach'],
    note: 'Lineup not written down. Caught part of Thomas Rhett.',
  }),
  show('k-weeknd-2022-09-03', day('2022-09-03'), 'The Weeknd', {
    venue: 'SoFi Stadium',
    sides: ['The Weeknd'],
    eventId: '2022-09-03-the-weeknd',
    note: 'Only caught 3 songs.',
  }),
  show('k-pitbull-iggy', unknown(), 'Pitbull & Iggy', { venue: 'Hollywood Bowl', sides: ['Pitbull'] }),
  show('k-elton-2022-11-20', day('2022-11-20'), 'Elton John', { venue: 'Dodger Stadium', sides: ['Elton John'] }),
  show('k-pitbull-banc', unknown(), 'Pitbull', { venue: 'Banc of California Stadium', sides: ['Pitbull'] }),
  show('k-bryce-ventura', unknown(), 'Bryce Vine', {
    venue: 'Ventura Theater',
    belowFloor: true,
    sides: ['Bryce Vine'],
  }),
  show('k-beach-life-2023-05', month('2023-05', 'May 2023'), 'BeachLife Festival', {
    kind: 'festival',
    inMetro: false,
    sides: ['BeachLife Festival'],
    note: 'Sets: Iration, Gwen Stefani.',
  }),
  show('k-coachella-2023', year(2023), 'Coachella', {
    kind: 'festival',
    venue: 'Empire Polo Club',
    inMetro: false,
    sides: ['Coachella'],
    note: 'Weekend not written down. Sets she listed: Bad Bunny, Gorillaz, Becky G, Pusha T, Doechii, Kaytranada, Blondie, Metro Boomin, Two Friends, Blink-182, BLACKPINK, Rosalía, Charli XCX, Calvin Harris, Odesza, Frank Ocean, Björk, Kali Uchis, GloRilla, Fisher, Dominic Fike, Rae Sremmurd, Latto.',
  }),
  show('k-pitbull-2023-11', month('2023-11', 'November 2023'), 'Pitbull, Enrique Iglesias & Ricky Martin', {
    venue: 'Crypto.com Arena',
    sides: ['Pitbull'],
  }),
  show('k-bryce-2024-03', month('2024-03', 'March 2024'), 'Bryce Vine', {
    venue: 'The Bellwether',
    belowFloor: true,
    sides: ['Bryce Vine'],
  }),
  show('k-pink', unknown(), 'P!nk & The Script', { venue: 'Dodger Stadium', sides: ['P!nk'] }),
  show('k-inhaler-2024-10', month('2024-10', 'October 2024'), 'Inhaler', {
    venue: 'Roadrunner',
    belowFloor: true,
    inMetro: false,
    metroId: 'boston',
    sides: ['Inhaler'],
  }),
  show('k-weeknd-2025-06', month('2025-06', 'June 2025'), 'The Weeknd', { venue: 'SoFi Stadium', sides: ['The Weeknd'] }),
];

const seen = new Set<string>();
for (const entry of KYLIE_LOG) {
  if (seen.has(entry.id)) throw new Error(`Duplicate log id ${entry.id}`);
  seen.add(entry.id);
}
