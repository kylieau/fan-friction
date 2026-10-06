// Past dates in 2026, reconstructed from public listings so a night logged on
// one of them can show a friction read. These dates are before the nightly
// schedule archive began, so the read labels itself "reconstructed" on its own
// (read.ts works that out from the archive's first file; nothing here says it).
//
// The research is saved in full under docs/research-past-dates/. Every crowd
// figure here is labeled and came from a source; where none was found the list
// is empty and the event is sized by its building instead. No number is invented.
//
// Scheduled starts only, never actual. Results are not seeded: they are
// evidence beside a read, never an input, and the nightly results pass is where
// they belong.

import type { CrowdEvent, CrowdFigure, LocalTime } from '../types';

const SOURCE_ID = 'seed';

const announced = (count: number, note?: string): CrowdFigure => ({ count, kind: 'announced', note });
const reported = (count: number, note?: string): CrowdFigure => ({ count, kind: 'reported', note });

type Opts = {
  start: LocalTime | null;
  venue: string;
  crowd?: CrowdFigure[];
  stakes?: { round: string; game?: number };
  facts?: CrowdEvent['occasionFacts'];
  level?: 'pro' | 'lower' | 'college' | 'school' | 'amateur';
};

/** A game: two sides, a sport, a building. */
function game(
  metroId: string,
  date: string,
  slug: string,
  title: string,
  sport: string,
  teams: { home: string; away: string },
  o: Opts,
): CrowdEvent {
  return {
    id: `${date}-${slug}`,
    metroId,
    date,
    start: o.start,
    kind: 'game',
    title,
    stakes: o.stakes,
    place: { type: 'venue', venueId: o.venue },
    audience: { domain: 'sports', sport, level: o.level },
    teams,
    occasionFacts: o.facts,
    crowd: o.crowd ?? [],
    sourceId: SOURCE_ID,
  };
}

/** A concert. Sized by the room when no count was published, which is the usual case. */
function show(
  metroId: string,
  date: string,
  slug: string,
  title: string,
  performer: string,
  genre: string,
  o: Opts,
): CrowdEvent {
  return {
    id: `${date}-${slug}`,
    metroId,
    date,
    start: o.start,
    kind: 'show',
    title,
    place: { type: 'venue', venueId: o.venue },
    audience: { domain: 'music', genre },
    performer,
    occasionFacts: o.facts,
    crowd: o.crowd ?? [],
    sourceId: SOURCE_ID,
  };
}

/**
 * An event with no seated building: a fan festival on a lawn, a race through
 * the streets. With no capacity and no published count its size is unknown, so
 * it is listed and feeds nobody's friction. That is the honest reading — the
 * alternative is inventing a number or pretending a stadium's seats were full.
 */
function unsized(
  metroId: string,
  date: string,
  slug: string,
  title: string,
  tag: string,
  place: CrowdEvent['place'],
  start: LocalTime | null,
  kind: CrowdEvent['kind'] = 'festival',
): CrowdEvent {
  return {
    id: `${date}-${slug}`,
    metroId,
    date,
    start,
    kind,
    title,
    place,
    audience: { domain: 'other', tag },
    crowd: [],
    sourceId: SOURCE_ID,
  };
}

const la = (date: string, slug: string, title: string, sport: string, teams: { home: string; away: string }, o: Opts) =>
  game('la', date, slug, title, sport, teams, o);
const laShow = (date: string, slug: string, title: string, performer: string, genre: string, o: Opts) =>
  show('la', date, slug, title, performer, genre, o);

export const PAST_2026_EVENTS: CrowdEvent[] = [
  // ---------- Wed Feb 25 ----------
  la('2026-02-25', 'kings', 'Kings vs Golden Knights', 'hockey', { home: 'kings', away: 'golden-knights' }, {
    start: '19:00', venue: 'crypto-com-arena', crowd: [announced(18145)],
    facts: { storyline: true /* First Kings game since Feb 5, after the league break */ },
  }),
  la('2026-02-25', 'ducks', 'Ducks vs Oilers', 'hockey', { home: 'ducks', away: 'oilers' }, {
    start: '19:30', venue: 'honda-center', crowd: [announced(16214)],
    facts: { storyline: true /* First Ducks game since Feb 3, after the league break */ },
  }),
  la('2026-02-25', 'galaxy', 'Galaxy vs Sporting San Miguelito', 'soccer', { home: 'galaxy', away: 'sporting-san-miguelito' }, {
    start: '20:30', venue: 'dignity-health-sports-park', crowd: [announced(11603)],
    stakes: { round: 'Champions Cup Round One', game: 2 },
    facts: { storyline: true /* First leg finished 1-1 in Panama */ },
  }),

  // ---------- Tue Mar 3 ----------
  la('2026-03-03', 'ducks', 'Ducks vs Avalanche', 'hockey', { home: 'ducks', away: 'avalanche' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(14369)],
  }),
  la('2026-03-03', 'lakers', 'Lakers vs Pelicans', 'basketball', { home: 'lakers', away: 'pelicans' }, {
    start: '19:30', venue: 'crypto-com-arena', crowd: [announced(18248)],
  }),
  la('2026-03-03', 'ucla', 'UCLA vs Nebraska', 'basketball', { home: 'ucla-mbb', away: 'nebraska' }, {
    start: '20:00', venue: 'pauley-pavilion', level: 'college',
    facts: { storyline: true /* Nebraska ranked No. 9 */ },
  }),

  // ---------- Sun Mar 8 ----------
  la('2026-03-08', 'lakers', 'Lakers vs Knicks', 'basketball', { home: 'lakers', away: 'knicks' }, {
    start: '12:30', venue: 'crypto-com-arena', crowd: [announced(18997)],
  }),
  la('2026-03-08', 'ducks', 'Ducks vs Blues', 'hockey', { home: 'ducks', away: 'blues' }, {
    start: '18:00', venue: 'honda-center', crowd: [announced(16214)],
  }),
  // The marathon closes roads from Dodger Stadium to Century City all morning.
  // It has no building and no crowd figure, so it is listed and counts for
  // nothing. See the note in docs/build-reconstructed-reads.md: Gridlock only
  // reads events that sit in a venue, which is the wrong way round for a race.
  unsized('la', '2026-03-08', 'la-marathon', 'Los Angeles Marathon', 'road-race', {
    type: 'route',
    name: 'Dodger Stadium to Century City',
    path: [
      [-118.2400, 34.0739],
      [-118.2437, 34.0522],
      [-118.2730, 34.0780],
      [-118.3287, 34.0983],
      [-118.3870, 34.0900],
      [-118.4109, 34.0669],
    ],
  }, '07:00'),

  // ---------- Wed Mar 18 ----------
  la('2026-03-18', 'ducks', 'Ducks vs Flyers', 'hockey', { home: 'ducks', away: 'flyers' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(16214)],
  }),

  // ---------- Mon Mar 30 ----------
  la('2026-03-30', 'dodgers', 'Dodgers vs Guardians', 'baseball', { home: 'dodgers', away: 'guardians' }, {
    start: '19:10', venue: 'dodger-stadium', crowd: [announced(52173)],
    facts: { storyline: true /* Fourth game of the season-opening homestand */ },
  }),
  la('2026-03-30', 'lakers', 'Lakers vs Wizards', 'basketball', { home: 'lakers', away: 'wizards' }, {
    start: '19:00', venue: 'crypto-com-arena', crowd: [announced(18997)],
  }),
  la('2026-03-30', 'ducks', 'Ducks vs Maple Leafs', 'hockey', { home: 'ducks', away: 'maple-leafs' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(15375)],
  }),

  // ---------- Sat Apr 4 ----------
  la('2026-04-04', 'angels', 'Angels vs Mariners', 'baseball', { home: 'angels', away: 'mariners' }, {
    start: '18:38', venue: 'angel-stadium', crowd: [announced(44084)],
    facts: { storyline: true /* Second game of the home-opening series */ },
  }),
  la('2026-04-04', 'kings', 'Kings vs Maple Leafs', 'hockey', { home: 'kings', away: 'maple-leafs' }, {
    start: '16:00', venue: 'crypto-com-arena', crowd: [announced(18145)],
    facts: { farewell: true, storyline: true /* Kopitar's announced final season */ },
  }),
  la('2026-04-04', 'ducks', 'Ducks vs Flames', 'hockey', { home: 'ducks', away: 'flames' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(14104)],
  }),
  la('2026-04-04', 'lafc', 'LAFC vs Orlando City', 'soccer', { home: 'lafc', away: 'orlando-city' }, {
    start: '18:30', venue: 'bmo-stadium',
    facts: { storyline: true /* Orlando's first visit since 2018 */ },
  }),
  la('2026-04-04', 'galaxy', 'Galaxy vs Minnesota United', 'soccer', { home: 'galaxy', away: 'minnesota-united' }, {
    start: '19:30', venue: 'dignity-health-sports-park', crowd: [announced(22447)],
  }),
  {
    id: '2026-04-04-santa-anita',
    metroId: 'la',
    date: '2026-04-04',
    start: '16:30',
    kind: 'special',
    title: 'Santa Anita Derby day',
    place: { type: 'venue', venueId: 'santa-anita-park' },
    audience: { domain: 'other', tag: 'horse-racing' },
    occasionFacts: { storyline: true /* Grade 1 Kentucky Derby points race; Derby post 4:30 */ },
    crowd: [],
    sourceId: SOURCE_ID,
  },
  laShow('2026-04-04', 'lany', 'LANY', 'LANY', 'indie pop', {
    start: null, venue: 'intuit-dome',
  }),
  // Counts under the theater rule: a 5,000-8,000 room on the same campus as a
  // big event that night. YouTube Theater and Intuit Dome are one zone.
  laShow('2026-04-04', 'lamb-of-god', 'Lamb of God', 'Lamb of God', 'metal', {
    start: '18:30', venue: 'youtube-theater',
  }),

  // ---------- Mon Apr 6 ----------
  la('2026-04-06', 'angels', 'Angels vs Braves', 'baseball', { home: 'angels', away: 'braves' }, {
    start: '18:38', venue: 'angel-stadium', crowd: [announced(25471)],
  }),
  la('2026-04-06', 'kings', 'Kings vs Predators', 'hockey', { home: 'kings', away: 'predators' }, {
    start: '19:30', venue: 'crypto-com-arena', crowd: [announced(17540)],
    facts: { farewell: true, storyline: true /* Kopitar's announced final season */ },
  }),

  // ---------- Thu Apr 9 ----------
  la('2026-04-09', 'kings', 'Kings vs Canucks', 'hockey', { home: 'kings', away: 'canucks' }, {
    start: '19:30', venue: 'crypto-com-arena', crowd: [announced(18145)],
    facts: { farewell: true, storyline: true /* Kopitar's announced final season */ },
  }),
  la('2026-04-09', 'ducks', 'Ducks vs Sharks', 'hockey', { home: 'ducks', away: 'sharks' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(16628)],
  }),
  laShow('2026-04-09', 'springsteen', 'Bruce Springsteen & The E Street Band', 'Bruce Springsteen & The E Street Band', 'rock', {
    start: '19:30', venue: 'kia-forum',
    facts: { run: 2, storyline: true /* Land of Hope and Dreams tour; second of two LA nights that week */ },
  }),

  // ---------- Sun Apr 12 ----------
  la('2026-04-12', 'dodgers', 'Dodgers vs Rangers', 'baseball', { home: 'dodgers', away: 'rangers' }, {
    start: '13:10', venue: 'dodger-stadium', crowd: [announced(48530)],
  }),
  la('2026-04-12', 'lakers', 'Lakers vs Jazz', 'basketball', { home: 'lakers', away: 'utah-hc' }, {
    start: '17:30', venue: 'crypto-com-arena', crowd: [announced(18791)],
    facts: { storyline: true /* Regular-season finale */ },
  }),
  la('2026-04-12', 'clippers', 'Clippers vs Warriors', 'basketball', { home: 'clippers', away: 'warriors' }, {
    start: '17:30', venue: 'intuit-dome', crowd: [announced(17927)],
    facts: { storyline: true /* Regular-season finale */ },
  }),
  la('2026-04-12', 'ducks', 'Ducks vs Canucks', 'hockey', { home: 'ducks', away: 'canucks' }, {
    start: '17:00', venue: 'honda-center', crowd: [announced(16731)],
    facts: { storyline: true /* Final regular-season home game */ },
  }),

  // ---------- Fri Apr 24 ----------
  la('2026-04-24', 'dodgers', 'Dodgers vs Cubs', 'baseball', { home: 'dodgers', away: 'cubs' }, {
    start: '19:15', venue: 'dodger-stadium', crowd: [announced(53733)],
  }),
  la('2026-04-24', 'ducks', 'Ducks vs Oilers', 'hockey', { home: 'ducks', away: 'oilers' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(16735)],
    stakes: { round: 'Western First Round', game: 3 },
    facts: { storyline: true /* Series tied 1-1 */ },
  }),
  laShow('2026-04-24', 'third-day', 'Third Day', 'Third Day', 'christian rock', {
    start: '19:00', venue: 'kia-forum',
    facts: { storyline: true /* 30th-anniversary reunion tour, with Zach Williams */ },
  }),

  // ---------- Sun Apr 26 ----------
  la('2026-04-26', 'dodgers', 'Dodgers vs Cubs', 'baseball', { home: 'dodgers', away: 'cubs' }, {
    start: '13:10', venue: 'dodger-stadium', crowd: [announced(52060)],
  }),
  la('2026-04-26', 'kings', 'Kings vs Avalanche', 'hockey', { home: 'kings', away: 'avalanche' }, {
    start: '13:30', venue: 'crypto-com-arena', crowd: [announced(18145)],
    stakes: { round: 'Western First Round', game: 4 },
    facts: { farewell: true, storyline: true /* Elimination game, Kings down 0-3, in Kopitar's announced final season */ },
  }),
  la('2026-04-26', 'ducks', 'Ducks vs Oilers', 'hockey', { home: 'ducks', away: 'oilers' }, {
    start: '18:30', venue: 'honda-center', crowd: [announced(16816)],
    stakes: { round: 'Western First Round', game: 4 },
    facts: { storyline: true /* Ducks lead the series 2-1 */ },
  }),
  la('2026-04-26', 'galaxy', 'Galaxy vs Real Salt Lake', 'soccer', { home: 'galaxy', away: 'real-salt-lake' }, {
    start: '16:00', venue: 'dignity-health-sports-park',
    facts: { storyline: true /* Unveiling of the Galaxy's third statue */ },
  }),
  la('2026-04-26', 'angel-city', 'Angel City vs Portland Thorns', 'soccer', { home: 'angel-city', away: 'thorns' }, {
    start: '15:00', venue: 'bmo-stadium',
    facts: { storyline: true /* Kids' Day */ },
  }),

  // ---------- Thu Apr 30 ----------
  la('2026-04-30', 'ducks', 'Ducks vs Oilers', 'hockey', { home: 'ducks', away: 'oilers' }, {
    start: '19:00', venue: 'honda-center', crowd: [announced(16820)],
    stakes: { round: 'Western First Round', game: 6 },
    facts: { storyline: true /* Ducks lead the series 3-2 and can clinch */ },
  }),

  // ---------- Fri Jun 12 ----------
  la('2026-06-12', 'world-cup-usa', 'USA vs Paraguay', 'soccer', { home: 'usa', away: 'paraguay' }, {
    start: '18:00', venue: 'sofi-stadium', crowd: [reported(70492)],
    stakes: { round: 'World Cup Group D' },
    facts: { opener: true, storyline: true /* USA's first home World Cup match since 1994; opening ceremony beforehand */ },
  }),
  // Ticketed, four days, 100,000+ across the opening weekend — a weekend total,
  // not a Friday figure, so it is not divided into one. Placed as a point, not
  // as the Coliseum's 77,500 seats, because a lawn festival is not a full stadium.
  unsized('la', '2026-06-12', 'fifa-fan-festival', 'FIFA Fan Festival', 'fan-festival', {
    type: 'point', location: [-118.2879, 34.0141], name: 'LA Memorial Coliseum',
  }, '11:00'),
  la('2026-06-12', 'angels', 'Angels vs Rays', 'baseball', { home: 'angels', away: 'rays' }, {
    start: '18:38', venue: 'angel-stadium', crowd: [announced(37023)],
  }),

  // ---------- Fri Jun 26 ----------
  la('2026-06-26', 'angels', 'Angels vs Athletics', 'baseball', { home: 'angels', away: 'athletics' }, {
    start: '18:38', venue: 'angel-stadium', crowd: [announced(29089)],
  }),
  laShow('2026-06-26', 'kid-cudi', 'Kid Cudi', 'Kid Cudi', 'hip hop', {
    start: '18:30', venue: 'crypto-com-arena',
    facts: { storyline: true /* The Rebel Ragers tour, with Big Boi and Dot da Genius */ },
  }),
  unsized('la', '2026-06-26', 'union-station-fan-zone', 'Union Station World Cup Fan Zone', 'fan-festival', {
    type: 'point', location: [-118.2365, 34.0561], name: 'Union Station',
  }, null),

  // ---------- Sun Sep 20 ----------
  la('2026-09-20', 'dodgers', 'Dodgers vs Giants', 'baseball', { home: 'dodgers', away: 'giants' }, {
    start: '13:10', venue: 'dodger-stadium', crowd: [announced(48085)],
    facts: { rivalry: true },
  }),
  la('2026-09-20', 'angels', 'Angels vs Twins', 'baseball', { home: 'angels', away: 'twins' }, {
    start: '13:07', venue: 'angel-stadium',
    facts: { storyline: true /* Final home game of the season */ },
  }),
  la('2026-09-20', 'chargers', 'Chargers vs Raiders', 'football', { home: 'chargers', away: 'raiders' }, {
    start: '13:05', venue: 'sofi-stadium',
    facts: { rivalry: true },
  }),
  la('2026-09-20', 'sparks', 'Sparks vs Portland Fire', 'basketball', { home: 'sparks', away: 'portland-fire' }, {
    start: '16:00', venue: 'crypto-com-arena',
  }),
  laShow('2026-09-20', 'isakov', 'Gregory Alan Isakov with the Hollywood Bowl Orchestra', 'Gregory Alan Isakov', 'folk', {
    start: '19:30', venue: 'hollywood-bowl',
  }),
  laShow('2026-09-20', 'hosono', 'Haruomi Hosono', 'Haruomi Hosono', 'pop', {
    start: '20:00', venue: 'greek-theatre',
    facts: { storyline: true /* Yours Sincerely tour, with Toro y Moi supporting */ },
  }),
  laShow('2026-09-20', 'carin-leon', 'Carín León', 'Carín León', 'regional mexican', {
    start: '20:00', venue: 'bmo-stadium',
    facts: { storyline: true /* De Sonora Para El Mundo tour */ },
  }),

  // ---------- San Diego, Sat Aug 22 ----------
  game('san-diego', '2026-08-22', 'padres', 'Padres vs Twins', 'baseball', { home: 'padres', away: 'twins' }, {
    start: '17:40', venue: 'petco-park', crowd: [announced(41484)],
    facts: { storyline: true /* Pacific Islander Heritage Celebration; postgame fireworks */ },
  }),
  game('san-diego', '2026-08-22', 'sdfc', 'San Diego FC vs Colorado Rapids', 'soccer', { home: 'san-diego-fc', away: 'rapids' }, {
    start: '19:30', venue: 'snapdragon-stadium',
    facts: { storyline: true /* Native American Heritage Night */ },
  }),
  {
    id: '2026-08-22-pacific-classic',
    metroId: 'san-diego',
    date: '2026-08-22',
    start: '14:00',
    kind: 'special',
    title: 'Pacific Classic day',
    place: { type: 'venue', venueId: 'del-mar-fairgrounds' },
    audience: { domain: 'other', tag: 'horse-racing' },
    occasionFacts: { storyline: true /* The $1M Grade 1 Pacific Classic, a Breeders' Cup win-and-you're-in; first post 2:00 */ },
    crowd: [reported(15187, 'Del Mar press')],
    sourceId: SOURCE_ID,
  },
  // No published count and no setup figure in the research, but our own venue
  // table has Waterfront Park at 15,000 for a standing concert (CRSSD), which
  // is the same single-stage setup. Sized by the room, like every other show.
  show('san-diego', '2026-08-22', 'seven-lions', 'Seven Lions', 'Seven Lions', 'electronic', {
    start: '17:00', venue: 'waterfront-park',
    facts: { storyline: true /* Final stop of the Asleep in the Garden of Infernal Stars tour */ },
  }),
];

/**
 * No hand-written date ratings. These nights are rated by the formula like any
 * other date; the curated "famous nights" list stays a separate, hand-checked
 * thing (see scoresForNights in src/data/index.ts).
 */
export const PAST_2026_RATINGS = [];
