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
    "capturedAt": "2026-10-06T06:33:21.627Z",
    "duration": {
      "minutes": 242,
      "kind": "estimated"
    },
    "startedAt": "16:34"
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
    "capturedAt": "2026-10-06T06:33:21.848Z",
    "attendance": 50194,
    "duration": {
      "minutes": 164,
      "kind": "official"
    },
    "startedAt": "13:08"
  },
  {
    "eventId": "2026-10-04-espn-ducks-401891778",
    "metroId": "la",
    "date": "2026-10-04",
    "sourceId": "espn",
    "status": "final",
    "venueId": "honda-center",
    "homeTeamId": "ducks",
    "home": {
      "name": "Ducks",
      "score": 3
    },
    "away": {
      "name": "Panthers",
      "score": 2
    },
    "attendance": 17174,
    "note": "OT",
    "capturedAt": "2026-10-06T06:33:21.627Z",
    "duration": {
      "minutes": 159,
      "kind": "estimated"
    },
    "startedAt": "17:15"
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
    "capturedAt": "2026-10-06T06:33:21.848Z",
    "attendance": 50729,
    "duration": {
      "minutes": 198,
      "kind": "official"
    },
    "startedAt": "17:03"
  }
];
