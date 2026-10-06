// Final scores and announced crowds saved by the nightly results pass.
// scripts/results-index.mjs rewrites this file. Do not edit by hand.
// Evidence on the page; the read never uses it (the no-results rule).

import type { GameResult } from './types';

export const GAME_RESULTS: GameResult[] = [
  {
    "eventId": "2026-10-03-espn-usc-football-401858478",
    "metroId": "la",
    "date": "2026-10-03",
    "sourceId": "espn",
    "status": "final",
    "venueId": "coliseum",
    "homeTeamId": "usc-football",
    "home": {
      "name": "USC",
      "score": 25
    },
    "away": {
      "name": "Washington Huskies",
      "score": 21
    },
    "attendance": 59136,
    "capturedAt": "2026-10-06T05:16:56.380Z"
  },
  {
    "eventId": "2026-10-03-mlb-849828",
    "metroId": "la",
    "date": "2026-10-03",
    "sourceId": "mlb",
    "status": "final",
    "venueId": "dodger-stadium",
    "homeTeamId": "dodgers",
    "home": {
      "name": "Dodgers",
      "score": 5
    },
    "away": {
      "name": "Braves",
      "score": 3
    },
    "capturedAt": "2026-10-06T05:16:56.591Z",
    "attendance": 50194
  },
  {
    "eventId": "2026-10-04-mlb-849823",
    "metroId": "la",
    "date": "2026-10-04",
    "sourceId": "mlb",
    "status": "final",
    "venueId": "dodger-stadium",
    "homeTeamId": "dodgers",
    "home": {
      "name": "Dodgers",
      "score": 2
    },
    "away": {
      "name": "Braves",
      "score": 3
    },
    "capturedAt": "2026-10-06T05:16:56.591Z",
    "attendance": 50729
  }
];
