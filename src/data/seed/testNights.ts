// The 13 hand-seeded test dates (docs/test-nights-and-ratings.md).
// Ratings are hardcoded, as Kylie reviewed them. Occasion and friction come
// from the Oct 1 draft (docs/rating-model-draft.md) and are marked "draft".
// Crowd numbers are announced figures unless marked otherwise. Start times
// are the SCHEDULED time (a pre-event fact), never a delayed or late actual
// start; they are left empty (null) where sources disagree or none was found.

import type { Friction, Occasion } from '../../config/scoreLabels';
import type { Assessment, CrowdEvent, CrowdFigure, DateRating, LocalDate, LocalTime, OccasionFacts, Weather } from '../types';

const SOURCE_ID = 'seed';

type Draft = [occasion: Occasion, facts: string[], friction: Friction, why: string];

const draft = ([occasion, facts, friction, why]: Draft): Assessment => ({
  occasion,
  facts,
  friction,
  why,
  status: 'draft',
});

const announced = (count: number, note?: string): CrowdFigure => ({ count, kind: 'announced', note });
const estimated = (count: number, note?: string): CrowdFigure => ({ count, kind: 'estimated', note });
const soldOut: CrowdFigure = { kind: 'reported', soldOut: true };

interface Common {
  start?: LocalTime;
  venue: string;
  crowd?: CrowdFigure[];
  weather?: Weather;
  a: Draft;
  /** Pre-event facts for the occasion rule (formula v4). The hand call in `a` stays for comparison. */
  facts?: OccasionFacts;
  stakes?: { round: string; game?: number };
}

function game(
  date: LocalDate,
  o: Common & { home: string; away: string; sport: string; title: string },
): CrowdEvent {
  return {
    id: `${date}-${o.home}`,
    metroId: 'la',
    date,
    start: o.start ?? null,
    kind: 'game',
    title: o.title,
    place: { type: 'venue', venueId: o.venue },
    audience: { domain: 'sports', sport: o.sport },
    teams: { home: o.home, away: o.away },
    crowd: o.crowd ?? [],
    weather: o.weather,
    assessment: draft(o.a),
    occasionFacts: o.facts,
    stakes: o.stakes,
    sourceId: SOURCE_ID,
  };
}

function show(date: LocalDate, o: Common & { performer: string; genre: string; title?: string }): CrowdEvent {
  const slug = o.performer.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return {
    id: `${date}-${slug}`,
    metroId: 'la',
    date,
    start: o.start ?? null,
    kind: 'show',
    title: o.title ?? o.performer,
    place: { type: 'venue', venueId: o.venue },
    audience: { domain: 'music', genre: o.genre },
    performer: o.performer,
    crowd: o.crowd ?? [],
    weather: o.weather,
    assessment: draft(o.a),
    occasionFacts: o.facts,
    sourceId: SOURCE_ID,
  };
}

const D1 = '2024-10-25';
const D2 = '2024-10-26';
const D3 = '2025-04-28';
const D4 = '2025-04-01';
const D5 = '2022-11-19';
const D6 = '2025-10-27';
const D7 = '2024-07-22';
const D8 = '2023-09-01';
const D9 = '2023-08-04';
const D10 = '2017-09-10';
const D11 = '2017-09-17';
const D12 = '2022-09-03';
const D13 = '2024-04-13';

export const SEED_EVENTS: CrowdEvent[] = [
  // 1 · Fri 10/25/24
  game(D1, {
    title: 'World Series Game 1', home: 'dodgers', away: 'yankees', sport: 'baseball', facts: { final: true, selloutAnnounced: true }, stakes: { round: 'World Series', game: 1 },
    venue: 'dodger-stadium', start: '17:08', crowd: [soldOut, announced(52394)],
    a: ['Marquee', ['Game 1'], 'Low', 'Nothing bigger was on'],
  }),
  game(D1, {
    title: 'Lakers vs. Suns', home: 'lakers', away: 'suns', sport: 'basketball',
    venue: 'crypto-com-arena', start: '19:00', crowd: [announced(18997)],
    a: ['Routine', ['2nd home game'], 'Heavy', 'World Series 1.5 mi away, same hours'],
  }),
  game(D1, {
    title: 'USC vs. Rutgers', home: 'usc-football', away: 'rutgers', sport: 'football',
    venue: 'coliseum', start: '20:00', crowd: [announced(63404)],
    a: ['Routine', ['ordinary opponent'], 'Extreme', 'World Series + Lakers, same hours'],
  }),
  {
    id: `${D1}-east-la-classic`,
    metroId: 'la',
    date: D1,
    start: '19:30',
    kind: 'game',
    title: 'East LA Classic (Garfield vs. Roosevelt)',
    place: { type: 'venue', venueId: 'sofi-stadium' },
    audience: { domain: 'sports', sport: 'football' },
    crowd: [estimated(18000, 'Rough figure for the 2023 game; this year not confirmed')],
    expectedDraw: { count: 18000, note: 'A high-school game in SoFi; the 2023 game drew about this' },
    assessment: draft(['Notable', ['rivalry', 'first game at SoFi'], 'Heavy', 'Same hours, same city']),
    sourceId: SOURCE_ID,
  },
  show(D1, {
    performer: 'David Gilmour', genre: 'classic rock', facts: { storyline: true }, venue: 'intuit-dome', start: '19:30',
    a: ['Major', ['rare LA run'], 'Moderate', 'Different crowd'],
  }),
  show(D1, {
    performer: "Jeff Lynne's ELO", genre: 'classic rock', facts: { farewell: true }, venue: 'kia-forum', start: '20:00',
    a: ['Major', ['farewell tour'], 'Moderate', 'Different crowd'],
  }),

  // 2 · Sat 10/26/24
  game(D2, {
    title: 'World Series Game 2', home: 'dodgers', away: 'yankees', sport: 'baseball', facts: { final: true, selloutAnnounced: true }, stakes: { round: 'World Series', game: 2 }, venue: 'dodger-stadium', start: '17:08', crowd: [announced(52725, 'Baseball-Reference box score; ESPN may differ slightly')],
    a: ['Marquee', ['Game 2'], 'Low', 'Nothing bigger was on'],
  }),
  game(D2, {
    title: 'Kings vs. Utah', home: 'kings', away: 'utah-hc', sport: 'hockey', venue: 'crypto-com-arena', start: '13:00',
    a: ['Routine', [], 'Moderate', 'Done before first pitch, but in World Series traffic'],
  }),
  game(D2, {
    title: 'Galaxy vs. Rapids', home: 'galaxy', away: 'rapids', sport: 'soccer', stakes: { round: 'MLS Cup Playoffs Round One', game: 1 }, venue: 'dignity-health-sports-park', start: '20:00',
    crowd: [announced(24537, "Per the club's match report")],
    a: ['Notable', ['playoff opener'], 'Heavy', 'Same hours as the World Series, same sports crowd'],
  }),
  show(D2, {
    performer: "Jeff Lynne's ELO", genre: 'classic rock', facts: { farewell: true }, venue: 'kia-forum', start: '20:00',
    a: ['Major', ['farewell tour'], 'Moderate', 'Different crowd'],
  }),
  show(D2, {
    performer: 'Imagine Dragons', genre: 'pop rock', venue: 'hollywood-bowl', start: '19:00',
    a: ['Major', ['doors moved up to 4:30 for World Series traffic'], 'Moderate', 'Different crowd'],
  }),

  // 3 · Mon 4/28/25
  show(D3, {
    performer: 'Beyoncé', genre: 'pop', facts: { farewell: true }, venue: 'sofi-stadium',
    a: ['Marquee', ['tour opener'], 'Low', 'Nothing bigger was on'],
  }),
  game(D3, {
    title: 'Dodgers vs. Marlins', home: 'dodgers', away: 'marlins', sport: 'baseball', venue: 'dodger-stadium',
    start: '19:10', crowd: [announced(48232)],
    a: ['Routine', ['Monday'], 'Moderate', 'Beyoncé 13 mi away, mostly different crowd'],
  }),
  show(D3, {
    performer: 'Rauw Alejandro', genre: 'latin', venue: 'intuit-dome', start: '20:00',
    a: ['Major', ['moved on short notice'], 'Heavy', 'Next door to Beyoncé, same hours'],
  }),

  // 4 · Tue 4/1/25
  game(D4, {
    title: 'Dodgers vs. Braves', home: 'dodgers', away: 'braves', sport: 'baseball', venue: 'dodger-stadium', start: '19:10', crowd: [announced(50182)],
    a: ['Notable', ['early season', 'champs'], 'Low', 'Biggest event of the night'],
  }),
  game(D4, {
    title: 'Kings vs. Jets', home: 'kings', away: 'jets', sport: 'hockey', venue: 'crypto-com-arena', start: '19:30', crowd: [announced(15012)],
    a: ['Routine', [], 'Moderate', 'Dodgers 1.5 mi away, same hours'],
  }),
  show(D4, {
    performer: 'We ❤️ LA', genre: 'various', venue: 'hollywood-bowl', start: '20:00',
    a: ['Notable', ['free fire-relief benefit'], 'Low', 'Tickets all claimed in advance'],
  }),

  // 5 · Sat 11/19/22
  game(D5, {
    title: 'UCLA vs. USC', home: 'ucla-football', away: 'usc-football', sport: 'football', facts: { rivalry: true, bothContending: true },
    venue: 'rose-bowl', start: '17:00', crowd: [announced(70865)],
    a: ['Major', ['rivalry'], 'Moderate', 'Three big events same evening, different crowds'],
  }),
  show(D5, {
    performer: 'BLACKPINK', genre: 'k-pop', facts: { selloutAnnounced: true }, venue: 'bmo-stadium', start: '20:00', crowd: [soldOut],
    a: ['Marquee', ['sold out'], 'Low', 'Different crowd'],
  }),
  show(D5, {
    performer: 'Elton John', genre: 'classic rock', facts: { farewell: true, selloutAnnounced: true }, venue: 'dodger-stadium', start: '20:00',
    a: ['Marquee', ['farewell tour'], 'Low', 'Different crowd'],
  }),
  game(D5, {
    title: 'Clippers vs. Spurs', home: 'clippers', away: 'spurs', sport: 'basketball',
    venue: 'crypto-com-arena', start: '19:30', crowd: [announced(18581)],
    a: ['Routine', [], 'Moderate', 'Elton 1.5 mi away, same hours'],
  }),

  // 6 · Mon 10/27/25
  game(D6, {
    title: 'World Series Game 3', home: 'dodgers', away: 'blue-jays', sport: 'baseball', facts: { final: true, selloutAnnounced: true }, stakes: { round: 'World Series', game: 3 },
    venue: 'dodger-stadium', start: '17:00', crowd: [announced(52654)],
    a: ['Marquee', ['first LA game of the Series'], 'Low', 'Nothing bigger was on'],
  }),
  game(D6, {
    title: 'Lakers vs. Blazers', home: 'lakers', away: 'blazers', sport: 'basketball',
    venue: 'crypto-com-arena', start: '19:30', crowd: [announced(18512)],
    a: ['Routine', [], 'Heavy', 'World Series 1.5 mi away, same hours, same crowd'],
  }),

  // 7 · Mon 7/22/24 (the baseline)
  game(D7, {
    title: 'Dodgers vs. Giants', home: 'dodgers', away: 'giants', sport: 'baseball', facts: { rivalry: true },
    venue: 'dodger-stadium', start: '19:10', crowd: [announced(49576)],
    a: ['Notable', ['rivalry'], 'Low', 'Nothing else big (the baseline)'],
  }),

  // 8 · Fri 9/1/23
  game(D8, {
    title: 'Dodgers vs. Braves', home: 'dodgers', away: 'braves', sport: 'baseball',
    venue: 'dodger-stadium', start: '19:10', crowd: [announced(52436)],
    a: ['Notable', ["NL's top two teams"], 'Moderate', 'Beyoncé 13 mi away, same hours'],
  }),
  show(D8, {
    performer: 'Beyoncé', genre: 'pop', facts: { selloutAnnounced: true }, venue: 'sofi-stadium', start: '20:00', crowd: [soldOut, estimated(51855, 'Average of her three SoFi nights (155,567 tickets, Touring Data)')],
    a: ['Marquee', ['sold out'], 'Low', 'Nothing bigger was on'],
  }),

  // 9 · Fri 8/4/23
  game(D9, {
    title: 'Angels vs. Mariners', home: 'angels', away: 'mariners', sport: 'baseball',
    venue: 'angel-stadium', start: '18:38', crowd: [announced(34479)],
    a: ['Routine', [], 'Moderate', 'Taylor Swift 30 mi away, Friday traffic'],
  }),
  show(D9, {
    performer: 'Taylor Swift', title: 'Taylor Swift: Eras Tour', genre: 'pop', facts: { selloutAnnounced: true }, venue: 'sofi-stadium', start: '18:30', crowd: [soldOut, estimated(67500, 'Eras Tour average per night (Pollstar); not this night')],
    a: ['Marquee', ['sold out'], 'Low', 'Nothing bigger was on'],
  }),

  // 10 · Sun 9/10/17
  game(D10, {
    title: 'Rams vs. Colts', home: 'rams', away: 'colts', sport: 'football', facts: { opener: true }, venue: 'coliseum', start: '13:05',
    crowd: [announced(60128), { count: 48000, kind: 'estimated', note: 'about this many actually there' }],
    weather: { tempF: 90, note: 'at kickoff' },
    a: ['Notable', ['home opener'], 'Extreme', 'Same start as the Dodgers, day game in an open bowl, 90°F'],
  }),
  game(D10, {
    title: 'Dodgers vs. Rockies', home: 'dodgers', away: 'rockies', sport: 'baseball',
    venue: 'dodger-stadium', start: '13:11', crowd: [announced(50161)],
    a: ['Routine', [], 'Heavy', 'Day game in heat, Rams same hours'],
  }),

  // 11 · Sun 9/17/17 (all three started within about 45 minutes)
  game(D11, {
    title: 'Chargers vs. Dolphins', home: 'chargers', away: 'dolphins', sport: 'football', facts: { newMarket: true, opener: true },
    venue: 'dignity-health-sports-park', start: '13:05', crowd: [announced(25381)],
    a: ['Notable', ['first LA home game'], 'Extreme', 'Rams and Angels within 47 minutes'],
  }),
  game(D11, {
    title: 'Rams vs. Washington', home: 'rams', away: 'washington', sport: 'football',
    venue: 'coliseum', start: '13:25', crowd: [announced(56612)],
    a: ['Routine', [], 'Heavy', 'Chargers and Angels same hours'],
  }),
  game(D11, {
    title: 'Angels vs. Rangers', home: 'angels', away: 'rangers', sport: 'baseball',
    venue: 'angel-stadium', start: '12:38', crowd: [announced(36709)],
    a: ['Routine', [], 'Moderate', 'Anaheim, farther away'],
  }),

  // 12 · Sat 9/3/22
  game(D12, {
    title: 'UCLA vs. Bowling Green', home: 'ucla-football', away: 'bowling-green', sport: 'football',
    venue: 'rose-bowl', start: '11:30', crowd: [announced(27143)],
    weather: { tempF: 100, note: '100°F+ that day; the Rose Bowl reading itself is still to check' },
    a: ['Routine', ['ordinary opponent', '11:30am', 'before classes start'], 'Extreme', 'Midday game in 100°F+ heat'],
  }),
  game(D12, {
    title: 'USC vs. Rice', home: 'usc-football', away: 'rice', sport: 'football',
    venue: 'coliseum', start: '15:00', crowd: [announced(60113)],
    a: ['Notable', ["new coach's debut"], 'Heavy', '3pm in the heat'],
  }),
  game(D12, {
    title: 'Dodgers vs. Padres', home: 'dodgers', away: 'padres', sport: 'baseball', facts: { rivalry: true },
    venue: 'dodger-stadium', start: '18:10', crowd: [announced(46144)],
    a: ['Notable', ['rivalry'], 'Moderate', 'Night game, after the heat'],
  }),
  show(D12, {
    performer: 'The Weeknd', genre: 'pop', venue: 'sofi-stadium', start: '21:20',
    a: ['Major', [], 'Low', 'Different crowd, evening'],
  }),

  // 13 · Sat 4/13/24
  game(D13, {
    title: 'Dodgers vs. Padres', home: 'dodgers', away: 'padres', sport: 'baseball', facts: { rivalry: true },
    venue: 'dodger-stadium', start: '18:10', crowd: [announced(44582)], weather: { rain: true },
    a: ['Notable', ['rivalry'], 'Moderate', 'Rain (light friction)'],
  }),
];

const rating = (
  date: LocalDate,
  value: number,
  headline: string,
  squeezedMost: string,
  sources: [string, string][],
  notes?: string,
): DateRating => ({
  metroId: 'la',
  date,
  rating: value,
  headline,
  squeezedMost,
  method: 'hand',
  notes,
  sources: sources.map(([label, url]) => ({ label, url })),
});

export const SEED_RATINGS: DateRating[] = [
  rating(D1, 9, 'World Series G1, Lakers, USC, East LA Classic and two concerts', 'Lakers, USC, concerts', [
    ['ABC7', 'https://abc7.com/post/traffic-nightmare-expected-friday-due-world-series-other-events-la-area/15452723/'],
    ['LAist', 'https://laist.com/brief/news/transportation/la-traffic-dodgers-world-series-lakers-east-la-classic'],
  ]),
  rating(D2, 7, 'World Series G2, Kings, Galaxy playoffs and two concerts', 'Galaxy, concerts', [
    ['ABC7', 'https://abc7.com/post/traffic-nightmare-expected-friday-due-world-series-other-events-la-area/15452723/'],
    ['LAist', 'https://laist.com/brief/news/transportation/la-traffic-dodgers-world-series-lakers-east-la-classic'],
  ]),
  rating(D3, 6, 'Beyoncé opens her tour, plus Dodgers and Rauw Alejandro', 'Rauw, Dodgers', [
    ['CBS LA', 'https://www.cbsnews.com/losangeles/news/beyonce-cowboy-carter-sofi-stadium-dodgers-rauw-alejandro-intuit-dome'],
  ]),
  rating(D4, 4, 'Dodgers, Kings and We ❤️ LA, all within about 5 miles', 'Kings', [
    ['Fox LA', 'https://www.foxla.com/news/la-events-tuesday-traffic-nightmare'],
  ]),
  rating(D5, 5, 'UCLA–USC, BLACKPINK, Elton John and the Clippers', 'Barely (different crowds)', [
    ['ESPN', 'https://www.espn.com/college-football/game/_/gameId/401404044/usc-ucla'],
    ['BMO Stadium', 'https://x.com/BMOStadium/status/1570397106262929410'],
  ], 'Stays 5 under the audience-overlap rule adopted Oct 1, 2026.'),
  rating(D6, 4, 'World Series G3 and the Lakers', 'Lakers', [
    ['LAist', 'https://laist.com/brief/news/los-angeles-activities/dodgers-game-3-world-series-guide'],
  ]),
  rating(D7, 1, 'Dodgers vs. Giants, nothing else big', 'The baseline', [
    ['Box score', 'https://www.baseball-reference.com/boxes/LAN/LAN202407220.shtml'],
  ], 'Backup baseline: Tue 6/13/23 (45,561 announced).'),
  rating(D8, 4, 'Dodgers vs. Braves and Beyoncé', 'Dodgers on paper (still drew 52k)', [
    ['Box score', 'https://www.baseball-reference.com/boxes/LAN/LAN202309010.shtml'],
    ['KTLA', 'https://ktla.com/news/local-news/a-guide-to-attending-one-of-beyonces-shows-at-sofi-stadium/'],
  ], 'Compare Thu 8/31: 47,623 alone; Sat 9/2: 51,470 with Beyoncé (announced).'),
  rating(D9, 5, 'Angels and Taylor Swift', 'Angels (maybe)', [
    ['Box score', 'https://www.baseball-reference.com/boxes/ANA/ANA202308040.shtml'],
  ], 'Comparison Fridays: 8/18 38,297; 7/21 40,309 (an Ohtani start, so pick another). Giveaways differed.'),
  rating(D10, 8, 'Rams home opener and Dodgers, same start, 90°F at kickoff', 'Rams, plus heat', [
    ['CBS Sports', 'https://www.cbssports.com/nfl/news/look-stadium-is-half-empty-for-colts-rams-regular-season-opener-in-los-angeles'],
    ['Dodgers box score', 'https://www.baseball-reference.com/boxes/LAN/LAN201709100.shtml'],
  ]),
  rating(D11, 7, 'Chargers, Rams and Angels, all within 45 minutes', 'Both NFL teams', [
    ['SI', 'https://www.si.com/nfl/2017/09/17/rams-chargers-empty-stadiums-photos'],
    ['CBS Sports', 'https://www.cbssports.com/nfl/news/look-chargers-cant-fill-30000-seat-soccer-stadium-rams-fans-arent-any-better'],
  ]),
  rating(D12, 7, 'UCLA at 11:30am, USC at 3pm, then Dodgers and The Weeknd', 'UCLA, USC (mostly heat)', [
    ['CBS Sports', 'https://www.cbssports.com/college-football/news/rose-bowl-attendance-hits-all-time-low-in-first-game-for-ucla-since-announcing-move-to-big-ten/'],
    ['USC Annenberg', 'https://www.uscannenbergmedia.com/2022/09/13/how-heat-and-tv-deals-affect-usc-football-attendance/'],
  ]),
  rating(D13, 3, 'Dodgers vs. Padres in the rain', 'Dodgers, lightly', [
    ['NBC San Diego', 'https://www.nbcsandiego.com/news/local/dodgers-beat-padres-rain-los-angeles/3487764/'],
  ]),
];
