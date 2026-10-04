// Saturday, Oct 3, 2026 in Los Angeles. Kylie's verified list only.
// No Hollywood Bowl, BMO Stadium, or Angel Stadium. The Rose Bowl heart walk
// and the convention-center marketplace are not pins.

import type { Friction, Occasion } from '../../config/scoreLabels';
import type { Assessment, CrowdEvent, CrowdFigure, DateRating } from '../types';

const DATE = '2026-10-03';
const SOURCE_ID = 'seed';

const estimated = (count: number, note: string): CrowdFigure => ({ count, kind: 'estimated', note });

const draft = (occasion: Occasion, facts: string[], friction: Friction, why: string): Assessment => ({
  occasion,
  facts,
  friction,
  why,
  status: 'draft',
});

export const LA_20261003_EVENTS: CrowdEvent[] = [
  {
    id: `${DATE}-dodgers`,
    metroId: 'la',
    date: DATE,
    start: '13:08',
    kind: 'game',
    title: 'Dodgers vs Braves',
    series: 'NLDS G1',
    place: { type: 'venue', venueId: 'dodger-stadium' },
    audience: { domain: 'sports', sport: 'baseball' },
    teams: { home: 'dodgers', away: 'braves' },
    crowd: [estimated(40000, 'Heat and a 1:08 pm first pitch look like they held demand down; tickets were still on sale and not scarce. Forecast about 100°F, feels like 103°. Dodger Stadium holds about 56,000. Not an announced attendance.')],
    assessment: draft('Marquee', ['NLDS G1', 'FOX'], 'Low', 'Afternoon playoff; the night cluster starts later'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-usc-football`,
    metroId: 'la',
    date: DATE,
    start: '16:30',
    kind: 'game',
    title: 'USC vs Washington',
    place: { type: 'venue', venueId: 'coliseum' },
    audience: { domain: 'sports', sport: 'football' },
    teams: { home: 'usc-football', away: 'washington-huskies' },
    crowd: [estimated(62000, 'Recent Coliseum games have drawn about 67,000. Heat and a 4:30 pm kickoff work against that; homecoming helps. The Coliseum holds 77,500. Not an announced attendance.')],
    assessment: draft('Notable', ['homecoming', 'NBC'], 'Moderate', 'Gets out as the Inglewood shows are starting'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-bruno-mars`,
    metroId: 'la',
    date: DATE,
    start: '19:00',
    kind: 'show',
    title: 'Bruno Mars: The Romantic Tour',
    place: { type: 'venue', venueId: 'sofi-stadium' },
    audience: { domain: 'music', genre: 'pop' },
    performer: 'Bruno Mars',
    crowd: [estimated(70000, 'The Romantic Tour at SoFi. The venue lists about 70,240. The official SoFi page still says On Sale Now, so this is not a confirmed sellout.')],
    assessment: draft('Major', ['with Anderson .Paak and Raye'], 'Moderate', 'Forum and Intuit are next door, different crowds'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-klangkuenstler`,
    metroId: 'la',
    date: DATE,
    start: '19:00',
    kind: 'show',
    title: 'Klangkuenstler',
    place: { type: 'venue', venueId: 'kia-forum' },
    audience: { domain: 'music', genre: 'electronic' },
    performer: 'Klangkuenstler',
    crowd: [estimated(17500, 'Estimated from the Kia Forum concert capacity (about 17,500). No separate public attendance figure.')],
    assessment: draft('Notable', ['18+', 'terrace 5:00', 'doors 5:30'], 'Heavy', 'Same hour as Bruno Mars next door'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-aespa`,
    metroId: 'la',
    date: DATE,
    start: '20:00',
    kind: 'show',
    title: 'aespa',
    place: { type: 'venue', venueId: 'intuit-dome' },
    audience: { domain: 'music', genre: 'k-pop' },
    performer: 'aespa',
    crowd: [{
      kind: 'reported',
      soldOut: true,
      note: 'CashorTrade and resale listings treat the Intuit Dome show as sold out. About 18,000 seats; that is the room, not a published attendance.',
    }],
    assessment: draft('Major', [], 'Heavy', 'Inglewood, an hour after Bruno Mars and the Forum'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-complexcon`,
    metroId: 'la',
    date: DATE,
    start: '19:00',
    kind: 'festival',
    title: 'ComplexCon',
    place: { type: 'venue', venueId: 'crypto-com-arena' },
    audience: { domain: 'music', genre: 'hip-hop' },
    performer: 'Ken Carson',
    // No public crowd prediction. The convention-center marketplace is not this pin.
    crowd: [],
    assessment: draft('Notable', ['Ken Carson', 'doors 6:00'], 'Moderate', 'Downtown, same evening as the Inglewood cluster'),
    sourceId: SOURCE_ID,
  },
];

/** One feels-like for the whole metro. The Today map chip reads this. Not a temperature per pin. */
export const METRO_FEELS: { metroId: string; date: string; feelsLikeF: number }[] = [
  { metroId: 'la', date: DATE, feelsLikeF: 103 },
];

export const LA_20261003_RATING: DateRating = {
  metroId: 'la',
  date: DATE,
  rating: 7.8,
  headline: 'Dodgers vs Braves (NLDS G1) in the afternoon, then USC and an Inglewood night',
  squeezedMost: 'Forum and Intuit',
  method: 'formula',
  notes:
    'Draft. Crowd fight draft 6.8 (Medium 0.35) plus a draft heat nudge of +1.0 (the high end of the 10–15% weather cap), so 7.8. Air about 100°F at first pitch, high about 102°F, feels-like 103°F. Heat applies to the open day games (Dodgers, USC) only, not the indoor Forum or Intuit, or covered SoFi. Gridlock is not applied yet.',
  sources: [
    { label: 'MLB', url: 'https://www.mlb.com/news/braves-vs-dodgers-nlds-game-1-starting-lineups-pitching-matchup' },
    { label: 'USC', url: 'https://usctrojans.com/game-center/35254' },
    { label: 'SoFi Stadium', url: 'https://www.sofistadium.com/events/detail/bruno-mars-october-3' },
    { label: 'Kia Forum', url: 'https://thekiaforum.com/event/klangkuenstler/' },
    { label: 'Live Nation', url: 'https://www.livenation.com/event/vv1AaZk34GkdIRddc/aespa-live-tour-synk-complaexity-in-los-angeles' },
    { label: 'Complex', url: 'https://www.complex.com/music/a/don-steele/complexcon-2026-los-angeles-guide-what-to-know' },
  ],
};
