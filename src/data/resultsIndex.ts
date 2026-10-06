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
  },
  {
    "eventId": "2026-10-03-espn-sdsu-football-401860900",
    "metroId": "san-diego",
    "date": "2026-10-03",
    "sourceId": "espn",
    "status": "final",
    "venueId": "snapdragon-stadium",
    "homeTeamId": "sdsu-football",
    "home": {
      "name": "San Diego St",
      "score": 31
    },
    "away": {
      "name": "Texas St",
      "score": 29
    },
    "attendance": 28474,
    "capturedAt": "2026-10-06T17:58:02.333Z",
    "duration": {
      "minutes": 216,
      "kind": "estimated"
    },
    "startedAt": "19:40"
  },
  {
    "eventId": "2026-10-04-espn-kraken-401891824",
    "metroId": "seattle",
    "date": "2026-10-04",
    "sourceId": "espn",
    "status": "final",
    "venueId": "climate-pledge-arena",
    "homeTeamId": "kraken",
    "home": {
      "name": "Kraken",
      "score": 6
    },
    "away": {
      "name": "Flames",
      "score": 1
    },
    "attendance": 17151,
    "capturedAt": "2026-10-06T20:43:12.167Z",
    "duration": {
      "minutes": 152,
      "kind": "estimated"
    },
    "startedAt": "17:17"
  },
  {
    "eventId": "2026-10-04-espn-seahawks-401872977",
    "metroId": "seattle",
    "date": "2026-10-04",
    "sourceId": "espn",
    "status": "final",
    "venueId": "lumen-field",
    "homeTeamId": "seahawks",
    "home": {
      "name": "Seahawks",
      "score": 30
    },
    "away": {
      "name": "Chargers",
      "score": 23
    },
    "attendance": 68691,
    "capturedAt": "2026-10-06T20:43:12.167Z",
    "duration": {
      "minutes": 198,
      "kind": "estimated"
    },
    "startedAt": "13:25"
  }
];
