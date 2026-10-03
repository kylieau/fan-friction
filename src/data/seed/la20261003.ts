// Saturday, Oct 3, 2026 in Los Angeles. Kylie's verified list only.
// No Hollywood Bowl, BMO Stadium, or Angel Stadium. The Rose Bowl heart walk
// and the convention-center marketplace are not pins.

import type { Friction, Occasion } from '../../config/scoreLabels';
import type { Assessment, CrowdEvent, DateRating } from '../types';

const DATE = '2026-10-03';
const SOURCE_ID = 'seed';

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
    title: 'NLDS Game 1',
    place: { type: 'venue', venueId: 'dodger-stadium' },
    audience: { domain: 'sports', sport: 'baseball' },
    teams: { home: 'dodgers', away: 'braves' },
    crowd: [],
    assessment: draft('Marquee', ['NLDS Game 1', 'FOX'], 'Low', 'Afternoon playoff; the night cluster starts later'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-usc-football`,
    metroId: 'la',
    date: DATE,
    start: '16:30',
    kind: 'game',
    title: 'USC vs. Washington',
    place: { type: 'venue', venueId: 'coliseum' },
    audience: { domain: 'sports', sport: 'football' },
    teams: { home: 'usc-football', away: 'washington-huskies' },
    crowd: [],
    assessment: draft('Notable', ['homecoming', 'NBC'], 'Moderate', 'Gets out as the Inglewood shows are starting'),
    sourceId: SOURCE_ID,
  },
  {
    id: `${DATE}-bruno-mars`,
    metroId: 'la',
    date: DATE,
    start: '19:00',
    kind: 'show',
    title: 'Bruno Mars',
    place: { type: 'venue', venueId: 'sofi-stadium' },
    audience: { domain: 'music', genre: 'pop' },
    performer: 'Bruno Mars',
    crowd: [],
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
    crowd: [],
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
    crowd: [],
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
    crowd: [],
    assessment: draft('Notable', ['Ken Carson', 'doors 6:00'], 'Moderate', 'Downtown, same evening as the Inglewood cluster'),
    sourceId: SOURCE_ID,
  },
];

export const LA_20261003_RATING: DateRating = {
  metroId: 'la',
  date: DATE,
  rating: 7.5,
  headline: 'NLDS Game 1 in the afternoon, then USC and an Inglewood night',
  squeezedMost: 'Forum and Intuit',
  method: 'hand',
  notes:
    'Draft. SoFi, the Forum and Intuit overlap around 7–8pm, ComplexCon is downtown from 6, and USC (4:30) gets out into that. The Dodgers game is at 1:08, so this is under Oct 25, 2024 (9).',
  sources: [
    { label: 'MLB', url: 'https://www.mlb.com/news/braves-vs-dodgers-nlds-game-1-starting-lineups-pitching-matchup' },
    { label: 'USC', url: 'https://usctrojans.com/game-center/35254' },
    { label: 'SoFi Stadium', url: 'https://www.sofistadium.com/events/detail/bruno-mars-october-3' },
    { label: 'Kia Forum', url: 'https://thekiaforum.com/event/klangkuenstler/' },
    { label: 'Live Nation', url: 'https://www.livenation.com/event/vv1AaZk34GkdIRddc/aespa-live-tour-synk-complaexity-in-los-angeles' },
    { label: 'Complex', url: 'https://www.complex.com/music/a/don-steele/complexcon-2026-los-angeles-guide-what-to-know' },
  ],
};
