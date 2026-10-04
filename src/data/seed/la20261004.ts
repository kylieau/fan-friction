// Sunday, Oct 4, 2026 in Los Angeles. Kylie's verified list only.
// No SoFi (Rams, Chargers, or a Bruno Mars listing). No USC or UCLA.
// Belasco, Wiltern, and Zipper are under the map floor: in this file, not pins.

import type { Friction, Occasion } from '../../config/scoreLabels';
import type { Assessment, CrowdEvent, CrowdFigure, DateRating } from '../types';

const DATE = '2026-10-04';
const SOURCE_ID = 'seed';

const estimated = (count: number, note: string, soldOut = false): CrowdFigure => ({
  count,
  kind: 'estimated',
  soldOut: soldOut || undefined,
  note,
});

const draft = (occasion: Occasion, facts: string[], friction: Friction, why: string): Assessment => ({
  occasion,
  facts,
  friction,
  why,
  status: 'draft',
});

export const LA_20261004_EVENTS: CrowdEvent[] = [
  {
    id: `${DATE}-dodgers`,
    metroId: 'la',
    date: DATE,
    start: '17:00',
    kind: 'game',
    title: 'Dodgers vs Braves',
    stakes: { round: 'NLDS', game: 2 },
    place: { type: 'venue', venueId: 'dodger-stadium' },
    audience: { domain: 'sports', sport: 'baseball' },
    teams: { home: 'dodgers', away: 'braves' },
    crowd: [estimated(56000, 'Expected sold out, about 56,000. Dodger Stadium holds about 56,000. Not an announced attendance. Blake Snell starting; Shohei Ohtani and Freddie Freeman active. Fox Sports.', true)],
    assessment: draft('Marquee', ['NLDS G2', 'FOX', 'Blake Snell'], 'Heavy', 'Sold-out NLDS at 5:00 pm, same 110/101 window as Crypto'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-ducks`,
    metroId: 'la',
    date: DATE,
    start: '17:00',
    kind: 'game',
    title: 'Ducks vs Panthers',
    place: { type: 'venue', venueId: 'honda-center' },
    audience: { domain: 'sports', sport: 'hockey' },
    teams: { home: 'ducks', away: 'panthers' },
    crowd: [estimated(17174, 'About 17,174, the listed hockey capacity. Not an announced attendance. ESPN+.')],
    assessment: draft('Notable', ['regular season', 'ESPN+'], 'Low', 'Anaheim at 5:00 pm, off the 110/101 and the south 405'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-galaxy`,
    metroId: 'la',
    date: DATE,
    start: '17:30',
    kind: 'game',
    title: 'Galaxy vs Cruz Azul',
    place: { type: 'venue', venueId: 'dignity-health-sports-park' },
    audience: { domain: 'sports', sport: 'soccer' },
    teams: { home: 'galaxy', away: 'cruz-azul' },
    crowd: [estimated(27000, 'About 27,000 for a friendly. Dignity Health Sports Park holds about 27,000. Not an announced attendance. SoyFutbol.')],
    assessment: draft('Notable', ['friendly'], 'Heavy', '5:30 in Carson, same 405/110 south pull as the Forum'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-slayer`,
    metroId: 'la',
    date: DATE,
    start: '18:00',
    kind: 'show',
    title: 'SLAYER: Reign In Blood 40th Anniversary',
    place: { type: 'venue', venueId: 'kia-forum' },
    audience: { domain: 'music', genre: 'metal' },
    performer: 'Slayer',
    crowd: [estimated(17500, 'Expected sold out, about 17,500. The Kia Forum holds about 17,500 for a concert. Not an announced attendance. Full 1986 album, four-band card. Falkor Events.', true)],
    assessment: draft('Major', ['sold out', 'Reign in Blood'], 'Heavy', 'Sold out at 6:00, same 405/110 south pull as the Galaxy'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-complexcon`,
    metroId: 'la',
    date: DATE,
    start: '18:00',
    kind: 'festival',
    title: '2026 ComplexCon Concert',
    place: { type: 'venue', venueId: 'crypto-com-arena' },
    audience: { domain: 'music', genre: 'hip-hop' },
    performer: 'Playboi Carti',
    crowd: [estimated(20000, 'About 20,000 for the concert close-out of ComplexCon\'s 10th anniversary. Not a published attendance. Complex.')],
    assessment: draft('Major', ['Playboi Carti', '10th anniversary'], 'Heavy', '6:00 downtown, same 110/101 window as Dodger Stadium'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-chat-pile`,
    metroId: 'la',
    date: DATE,
    start: '18:30',
    kind: 'show',
    title: 'Chat Pile',
    place: { type: 'venue', venueId: 'belasco' },
    audience: { domain: 'music', genre: 'rock' },
    performer: 'Chat Pile',
    belowFloor: true,
    crowd: [estimated(1500, 'About 1,500 at The Belasco. Not an announced attendance. Who Loves The Sun Tour 2026. Ticketmaster. Under the map floor.')],
    assessment: draft('Routine', ['Who Loves The Sun Tour'], 'Low', 'About 1,500. Same 110/101 as the Dodgers. Under the map floor.'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-sammy-rae`,
    metroId: 'la',
    date: DATE,
    start: '19:00',
    kind: 'show',
    title: 'Sammy Rae & The Friends',
    place: { type: 'venue', venueId: 'wiltern' },
    audience: { domain: 'music', genre: 'pop' },
    performer: 'Sammy Rae & The Friends',
    belowFloor: true,
    crowd: [estimated(1850, 'About 1,850 at The Wiltern. Not an announced attendance. Guest Melt. Ticketmaster. Under the map floor.')],
    assessment: draft('Routine', ['Melt'], 'Low', 'About 1,850 at the Wiltern. Under the map floor.'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-candlelight`,
    metroId: 'la',
    date: DATE,
    start: '19:45',
    kind: 'show',
    title: 'Candlelight: Tribute to The Beatles',
    place: { type: 'venue', venueId: 'zipper-hall' },
    audience: { domain: 'music', genre: 'classical' },
    belowFloor: true,
    crowd: [estimated(1000, 'About 1,000. Fever. The published Zipper room is about 415-435 seats, so this estimate is larger than the room and is not an announced attendance. Under the map floor.')],
    assessment: draft('Routine', ['tribute'], 'Low', 'About 1,000. Same 110/101 as Dodger Stadium and Crypto. Under the map floor.'),
    sourceId: SOURCE_ID,
  },
];

/** One feels-like for the whole metro. The Today map chip reads this. Not a temperature per pin. */
export const METRO_FEELS: { metroId: string; date: string; feelsLikeF: number }[] = [
  { metroId: 'la', date: DATE, feelsLikeF: 97 },
];

export const LA_20261004_RATING: DateRating = {
  metroId: 'la',
  date: DATE,
  rating: 7.4,
  headline: 'Sold-out NLDS Game 2, with Galaxy, Slayer, and Crypto the same hour',
  squeezedMost: 'Dodgers and Crypto',
  method: 'hand',
  notes:
    'Draft. Hand score, not the formula. Five rooms over the floor all start between 5:00 and 6:00 pm: sold-out NLDS Game 2 (about 56,000), the Galaxy friendly (about 27,000), the ComplexCon concert (about 20,000), sold-out Slayer (about 17,500), and the Ducks (about 17,174). 7.4 sits under Saturday\'s 7.8: no second 60,000-seat stadium, and Gridlock is not applied. The squeeze is why it is not lower. Dodgers, Crypto, the Belasco, and Zipper share the 110/101, with DTLA inbound severe from 4:00 to 6:30 pm. The Forum and Dignity Health Sports Park both pull the 405/110 south at the same time. Belasco, Wiltern, and Zipper are under the 5k floor, so they stay in the catalog and off the map. Feels-like 97°F is a draft metro estimate for the late afternoon (a downtown high near 101°F; not a reading at each venue).',
  sources: [
    { label: 'FOX Sports', url: 'https://www.foxsports.com/stories/mlb/how-to-watch-braves-vs-dodgers-tv-channel-live-stream-time-2026-nlds-game-2' },
  ],
};
