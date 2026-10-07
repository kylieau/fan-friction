// Daily-schedule reads on disk.
// scripts/forecast-index.mjs rewrites this file after an archive run.
// Do not edit by hand. Los Angeles only. The stamp uses the latest row
// saved before an event's start. It does not invent a number.

export interface IndexedForecastRead {
  rating?: number;
  friction?: 'Low' | 'Moderate' | 'Heavy' | 'Extreme';
  why?: string;
  method: 'hand' | 'formula' | 'nearby';
}

/** One event in one daily schedule file. */
export interface ArchiveForecastRow {
  metroId: string;
  eventId: string;
  date: string;
  start: string | null;
  capturedAt: string;
  capturedOn: string;
  read?: IndexedForecastRead;
  /** The expected draw shown at this capture. */
  draw?: { count: number; low?: number; high?: number };
}

export const ARCHIVE_FORECASTS: readonly ArchiveForecastRow[] = [
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-espn-dream-401918297",
    "date": "2026-10-07",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Braves vs. Dodgers 10 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-espn-ksu-football-401871051",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Braves vs. Dodgers 11 mi away, same hours."
    },
    "draw": {
      "count": 9585,
      "low": 8897,
      "high": 10313
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-mlb-849822",
    "date": "2026-10-07",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Dream vs. Liberty 10 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-tm-vvG1zZ_7MxKXo2",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Braves vs. Dodgers and Dream vs. Liberty 23 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-08-tm-vvG1zZ_8UEbzYQ",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-09-tm-vvG1zZ_65jmHBe",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "G-Eazy 13 mi away, same hours."
    },
    "draw": {
      "count": 6900
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-09-tm-vvG1zZ_axBx1u5",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Turnpike Troubadours 13 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-atlanta-united-761850",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Moderate",
      "why": "Georgia Tech vs. Duke 1.3 mi away, same hours."
    },
    "draw": {
      "count": 42218,
      "low": 41606,
      "high": 42948
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-gt-football-401858255",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Moderate",
      "why": "Atlanta United vs. Cincinnati 1.3 mi away, same hours."
    },
    "draw": {
      "count": 37287,
      "low": 35945,
      "high": 50878
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-tm-vvG1zZ_6d_IGUK",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Dermot Kennedy and Atlanta United vs. Cincinnati 8.3 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-tm-vvG1zZ_6r-FIF6",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer 8.3 mi away, same hours."
    },
    "draw": {
      "count": 6900
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-tm-vvG1zZ_8kRi5L2",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Moderate",
      "why": "Atlanta United vs. Cincinnati and Georgia Tech vs. Duke 3.5 mi away, same hours."
    },
    "draw": {
      "count": 18920
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-11-espn-falcons-401872993",
    "date": "2026-10-11",
    "start": "20:20",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Fuerza Regida 3.5 mi away, same hours."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-11-tm-vvG1zZ_2QEaQGk",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "Falcons vs. Ravens 21 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-11-tm-vvG1zZ_83jDpwc",
    "date": "2026-10-11",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "Falcons vs. Ravens 3.5 mi away, same hours."
    },
    "draw": {
      "count": 18920
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-12-espn-hawks-401898402",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12575,
      "low": 11854,
      "high": 13081
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-13-tm-vvG1zZ_eQ2KN-d",
    "date": "2026-10-13",
    "start": "18:45",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Phoebe Bridgers 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-13-tm-vvG1zZ_G68Ii_o",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Five Finger Death Punch 21 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-14-espn-dream-401918303",
    "date": "2026-10-14",
    "start": null,
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-14-tm-vvG1zZ_uQsKFm-",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Dream vs. Liberty 24 mi away, back to back."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-15-tm-vvG1zZ_1D-1FDp",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Alabama 13 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-15-tm-vvG1zZ_1RbHwoA",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Delta Sky360 Club Experience: Katseye and Dan + Shay next door, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-15-tm-vvG1zZ_8MZhDf8",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Heavy",
      "why": "Dan + Shay 13 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-15-tm-vvG1zZ_oCmPBLY",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Dan + Shay and KATSEYE 21 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-16-tm-vvG1zZ_121qqS7",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "$UICIDEBOY$ 26 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-16-tm-vvG1zZ_6RsPgK8",
    "date": "2026-10-16",
    "start": "18:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "89° feels-like at a 6:30 pm start, no roof."
    },
    "draw": {
      "count": 18920
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-espn-atlanta-united-761880",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Breaking Benjamin and Don Omar 21 mi away, same hours."
    },
    "draw": {
      "count": 47969,
      "low": 47274,
      "high": 48799
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_1UneLAE",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami next door, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_7mxwkQk",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-espn-falcons-401872999",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-19-tm-vvG1zZ_1p_clEl",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-20-tm-vvG1zZ_FUW3nLL",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:23.278Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-candlelight",
    "date": "2026-10-04",
    "start": "19:45",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-chat-pile",
    "date": "2026-10-04",
    "start": "18:30",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-complexcon",
    "date": "2026-10-04",
    "start": "18:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04",
    "read": {
      "method": "hand",
      "friction": "Heavy",
      "why": "6:00 downtown, same 110/101 window as Dodger Stadium"
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-dodgers",
    "date": "2026-10-04",
    "start": "17:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04",
    "read": {
      "method": "hand",
      "friction": "Heavy",
      "why": "Sold-out NLDS at 5:00 pm, same 110/101 window as Crypto"
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-ducks",
    "date": "2026-10-04",
    "start": "17:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04",
    "read": {
      "method": "hand",
      "friction": "Low",
      "why": "Anaheim at 5:00 pm, off the 110/101 and the south 405"
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-galaxy",
    "date": "2026-10-04",
    "start": "17:30",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04",
    "read": {
      "method": "hand",
      "friction": "Heavy",
      "why": "5:30 in Carson, same 405/110 south pull as the Forum"
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-mlb-849823",
    "date": "2026-10-04",
    "start": "17:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-sammy-rae",
    "date": "2026-10-04",
    "start": "19:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-04-slayer",
    "date": "2026-10-04",
    "start": "18:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04",
    "read": {
      "method": "hand",
      "friction": "Heavy",
      "why": "Sold out at 6:00, same 405/110 south pull as the Galaxy"
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-espn-kings-401891806",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-espn-lakers-401898717",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-mlb-849821",
    "date": "2026-10-09",
    "start": "17:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-espn-chargers-401872989",
    "date": "2026-10-11",
    "start": "13:05",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-espn-rams-401872994",
    "date": "2026-10-12",
    "start": "17:15",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-13-espn-kings-401892502",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-clippers-401918011",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-lakers-401898719",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-ucla-football-401858494",
    "date": "2026-10-16",
    "start": "21:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-04T23:30:25.307Z",
    "capturedOn": "2026-10-04"
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-espn-kings-401891806",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-espn-lakers-401898717",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-mlb-849821",
    "date": "2026-10-09",
    "start": "17:00",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-espn-chargers-401872989",
    "date": "2026-10-11",
    "start": "13:05",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-espn-rams-401872994",
    "date": "2026-10-12",
    "start": "17:15",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-13-espn-kings-401892502",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-clippers-401918011",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-lakers-401898719",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Moderate",
      "why": "UCLA vs. Wisconsin 10.0 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-ucla-football-401858494",
    "date": "2026-10-16",
    "start": "21:00",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Low",
      "why": "Lakers vs. Nuggets 10.0 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-05T21:19:02.658Z",
    "capturedOn": "2026-10-05",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "87° feels-like at a 1:05 pm start, no roof."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-espn-kings-401891806",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Moderate",
      "why": "Bruno Mars 7.4 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-tm-vv170Z_kGkMvpHlm",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 5.9
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-tm-vv1AaZko3Gkdf6kuk",
    "date": "2026-10-06",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Moderate",
      "why": "Bruno Mars next door, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-tm-vvG1iZ_16lDyfW",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Heavy",
      "why": "Bruno Mars 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-06-tm-vvG1IZ_eheCVin",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Low",
      "why": "Hayley Williams 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-espn-ducks-401892456",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Bruno Mars 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-tm-vv170Z_6GkRNGSd7",
    "date": "2026-10-07",
    "start": "18:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 5.3
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-tm-vv1AaZko9Gketiqv4",
    "date": "2026-10-07",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Bruno Mars next door, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-tm-vvG1IZ_eheo7is",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-espn-lakers-401898717",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Moderate",
      "why": "Chayanne and Empire of the Sun 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-tm-vv1AaZk8tGkd6ll1M",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 3.1
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-tm-vv1k0Z_kJ9G7DM5E",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "Empire of the Sun and Lakers vs. Sacramento Kings 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-tm-vvG1iZ_k9N_4fq",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Moderate",
      "why": "Chayanne and Lakers vs. Sacramento Kings 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-mlb-849821",
    "date": "2026-10-09",
    "start": "17:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Low",
      "why": "Sombr and The Neighbourhood 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv170ZbgGkzetQ9Z",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Sombr and Mac DeMarco 29 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv1AaZk38Gkel76YA",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 6.8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv1Fe8v0xoqvZ7u1ue",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "The Neighbourhood and Mac DeMarco 29 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vvG10Z_1DqhtZC",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Dodgers vs. Braves and Sombr 4.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vvG1iZ_7Kfj7Wq",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Sombr and The Neighbourhood 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vvG1IZ_GkDOGJ-",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Dodgers vs. Braves and Sombr 10 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-espn-lafc-761858",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Jungle and TLC 2.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv16aZk3aZMZAuak1v",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Jack Johnson 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv1AaZkfoGkdZT1iU",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Extreme",
      "why": "Jungle and LAFC vs. Vancouver 5.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv1AaZkowGkdFeQU8",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Jungle and LAFC vs. Vancouver 8.0 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vvG10Z_2TKvuzl",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Extreme",
      "why": "Jungle and LAFC vs. Vancouver 5.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vvG1IZ_G0rStYB",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Extreme",
      "why": "Jungle and LAFC vs. Vancouver 7.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vvG1iZbU81spCL",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Sombr 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-goJ",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "LAFC vs. Vancouver and TLC 2.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-espn-chargers-401872989",
    "date": "2026-10-11",
    "start": "13:05",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-tm-vv1ke8v0PdGA2NIXk",
    "date": "2026-10-11",
    "start": "19:20",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Heavy",
      "why": "Jack Johnson 2.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-tm-vvG10Z_u5nPRGK",
    "date": "2026-10-11",
    "start": "18:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 2.7
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-tm-vvG1iZbU81wkC0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Palace and Chargers vs. Broncos 2.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-espn-rams-401872994",
    "date": "2026-10-12",
    "start": "17:15",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-tm-vvG10Z_2Rimjss",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 2.8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-13-espn-ducks-401892501",
    "date": "2026-10-13",
    "start": "18:45",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Kings vs. Oilers 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-13-espn-kings-401892502",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Ducks vs. Flames 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-clippers-401918011",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Galaxy vs. Portland and LAFC vs. Austin 7.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-galaxy-761874",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "LAFC vs. Austin 10 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Galaxy vs. Portland 10 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 4.2
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_7GkMfFAZu",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Cynthia Erivo: Let Me Sing To You 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_aGkRSVNGb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 2.5
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG10Z_GwWe2IR",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 2.5
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Phil Wickham 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Phil Wickham and Cynthia Erivo: Let Me Sing To You 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-ducks-401892518",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Lakers vs. Nuggets 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-lakers-401898719",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Ducks vs. Bruins 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vv170Z_7Gkz5H4zw",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "MILEY and Lakers vs. Nuggets 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vvG1iZ_owcOPJ1",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Juanes and Lakers vs. Nuggets 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-galaxy-761887",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "Los Tigres del Norte and Young Miko 22 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 12 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-ucla-football-401858494",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "97° feels-like, no roof."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv170Z_FGkM0q1JB",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Extreme",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv1AaZk3dGkdvrEc1",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "Los Tigres del Norte 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv1AaZkobGkeOgjs3",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "Young Miko 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG10Z_1rn_GMv",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 8.2
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG10Z_G9R7nPH",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 8.0 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG1iZ_F53Epiv",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.2,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "100° feels-like at a 1:05 pm start, no roof."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-vvG10Z_G9gehI7",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Moderate",
      "why": "MILEY 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-vvG1iZ_owcx4Jh",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Moderate",
      "why": "Charli xcx 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-Z7r9jZ1A70kAU",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Moderate",
      "why": "MILEY and Charli xcx 6.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-vv1ke8v0r6GAuZNui",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Kacey Musgraves 5.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-Z7r9jZ1A70kAg",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Dermot Kennedy 5.5 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vv170Z_FGkU1BKx2",
    "date": "2026-10-20",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "MONSTA X 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vv1AaZk3vGkdfJcBD",
    "date": "2026-10-20",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vvG10Z_1hSZGrO",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 1.4
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vvG10Z_u1J_FHJ",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:16.467Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 1.4
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-espn-ducks-401892456",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "Bruno Mars 28 mi away, same hours."
    },
    "draw": {
      "count": 16177,
      "low": 15240,
      "high": 16693
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-tm-vv170Z_6GkRNGSd7",
    "date": "2026-10-07",
    "start": "18:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 4.3
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-tm-vv1AaZko9Gketiqv4",
    "date": "2026-10-07",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "Bruno Mars next door, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-tm-vvG1IZ_eheo7is",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 70240
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-espn-lakers-401898717",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Empire of the Sun 6.3 mi away, same hours."
    },
    "draw": {
      "count": 18190,
      "low": 17050,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-tm-vv1AaZk8tGkd6ll1M",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 2.8
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-tm-vv1k0Z_kJ9G7DM5E",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Empire of the Sun and Lakers vs. Sacramento Kings 34 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-08-tm-vvG1iZ_k9N_4fq",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Lakers vs. Sacramento Kings and Chayanne 6.3 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-mlb-849821",
    "date": "2026-10-09",
    "start": "17:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv170ZbgGkzetQ9Z",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.1,
      "friction": "Heavy",
      "why": "Mac DeMarco and Sombr 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv1AaZk38Gkel76YA",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 6.1
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv1Fe8v0xoqvZ7u1ue",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.1,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 34 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vvG10Z_1DqhtZC",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.1,
      "friction": "Heavy",
      "why": "Dodgers vs. Braves and Mac DeMarco 4.5 mi away, same hours."
    },
    "draw": {
      "count": 5900
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vvG1iZ_7Kfj7Wq",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.1,
      "friction": "Heavy",
      "why": "The Neighbourhood and Sombr 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vvG1IZ_GkDOGJ-",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.1,
      "friction": "Heavy",
      "why": "Dodgers vs. Braves and Mac DeMarco 10 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-espn-lafc-761858",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jack Johnson 7.6 mi away, same hours."
    },
    "draw": {
      "count": 22122,
      "low": 22102,
      "high": 22161
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv16aZk3aZMZAuak1v",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "Jack Johnson 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv1AaZkfoGkdZT1iU",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 6
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv1AaZkowGkdFeQU8",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "LAFC vs. Vancouver and Jack Johnson 5.8 mi away, same hours."
    },
    "draw": {
      "count": 10308
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vvG10Z_2TKvuzl",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "LAFC vs. Vancouver and Jack Johnson 7.4 mi away, same hours."
    },
    "draw": {
      "count": 5900
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vvG1IZ_G0rStYB",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "LAFC vs. Vancouver and Jack Johnson 5.2 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vvG1iZbU81spCL",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "Sombr 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-goJ",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "LAFC vs. Vancouver and Jack Johnson 2.3 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-espn-chargers-401872989",
    "date": "2026-10-11",
    "start": "13:05",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 1:05 pm start."
    },
    "draw": {
      "count": 70380,
      "low": 70380,
      "high": 71163
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-tm-vv1ke8v0PdGA2NIXk",
    "date": "2026-10-11",
    "start": "19:20",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Heavy",
      "why": "Jack Johnson 2.5 mi away, same hours."
    },
    "draw": {
      "count": 5900
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-tm-vvG10Z_u5nPRGK",
    "date": "2026-10-11",
    "start": "18:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 2.7
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-tm-vvG1iZbU81wkC0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Palace and Chargers vs. Broncos 2.5 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-espn-rams-401872994",
    "date": "2026-10-12",
    "start": "17:15",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 72851,
      "low": 72387,
      "high": 73334
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-tm-vvG10Z_2Rimjss",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 2.8
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-13-espn-ducks-401892501",
    "date": "2026-10-13",
    "start": "18:45",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Kings vs. Oilers 28 mi away, same hours."
    },
    "draw": {
      "count": 15806,
      "low": 14891,
      "high": 16310
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-13-espn-kings-401892502",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Ducks vs. Flames 28 mi away, same hours."
    },
    "draw": {
      "count": 15324,
      "low": 14761,
      "high": 16230
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-clippers-401918011",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "LAFC vs. Austin and Galaxy vs. Portland 5.8 mi away, same hours."
    },
    "draw": {
      "count": 13800,
      "low": 13600,
      "high": 13876
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-galaxy-761874",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "LAFC vs. Austin 10 mi away, same hours."
    },
    "draw": {
      "count": 18148,
      "low": 16281,
      "high": 19784
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "Galaxy vs. Portland 10 mi away, same hours."
    },
    "draw": {
      "count": 22086,
      "low": 22064,
      "high": 22125
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 3.7
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_7GkMfFAZu",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "Cynthia Erivo: Let Me Sing To You 34 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_aGkRSVNGb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 2.3
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG10Z_GwWe2IR",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 2.3
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "Phil Wickham 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Moderate",
      "why": "Cynthia Erivo: Let Me Sing To You and Phil Wickham 11 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-ducks-401892518",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Moderate",
      "why": "Lakers vs. Nuggets 28 mi away, same hours."
    },
    "draw": {
      "count": 15315,
      "low": 14325,
      "high": 15928
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-lakers-401898719",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Moderate",
      "why": "Ducks vs. Bruins 28 mi away, same hours."
    },
    "draw": {
      "count": 18190,
      "low": 17050,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vv170Z_7Gkz5H4zw",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Moderate",
      "why": "MILEY and Lakers vs. Nuggets 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vvG1iZ_owcOPJ1",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Moderate",
      "why": "Lakers vs. Nuggets and Ducks vs. Bruins 6.3 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-galaxy-761887",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 12 mi away, same hours."
    },
    "draw": {
      "count": 21425,
      "low": 18175,
      "high": 25046
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 12 mi away, same hours."
    },
    "draw": {
      "count": 18145,
      "low": 17517,
      "high": 18145
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-ucla-football-401858494",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 39256,
      "low": 35561,
      "high": 42012
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv170Z_FGkM0q1JB",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Extreme",
      "why": "Galaxy vs. San Diego FC and Kings vs. Bruins 18 mi away, same hours."
    },
    "draw": {
      "count": 5900
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv1AaZk3dGkdvrEc1",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Los Tigres del Norte 28 mi away, same hours."
    },
    "draw": {
      "count": 10308
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv1AaZkobGkeOgjs3",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Young Miko 28 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG10Z_1rn_GMv",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 6.9
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG10Z_G9R7nPH",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Kings vs. Bruins 8.0 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG1iZ_F53Epiv",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Kings vs. Bruins 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 72901,
      "low": 72478,
      "high": 73104
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-vvG10Z_G9gehI7",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "MILEY 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-vvG1iZ_owcx4Jh",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Charli xcx 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-Z7r9jZ1A70kAU",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "MILEY and Charli xcx 6.3 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-vv1ke8v0r6GAuZNui",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Kacey Musgraves 5.5 mi away, same hours."
    },
    "draw": {
      "count": 5900
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-Z7r9jZ1A70kAg",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Dermot Kennedy 5.5 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vv170Z_FGkU1BKx2",
    "date": "2026-10-20",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "MONSTA X 11 mi away, same hours."
    },
    "draw": {
      "count": 5900
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vv1AaZk3vGkdfJcBD",
    "date": "2026-10-20",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vvG10Z_1hSZGrO",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 1.4
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-20-tm-vvG10Z_u1J_FHJ",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 1.4
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-espn-clippers-401909842",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Heavy",
      "why": "Lakers vs. Warriors 8.0 mi away, same hours."
    },
    "draw": {
      "count": 17788,
      "low": 16037,
      "high": 17927
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-espn-lakers-401909092",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Clippers vs. Sacramento Kings 8.0 mi away, same hours."
    },
    "draw": {
      "count": 18997,
      "low": 18997,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-tm-vvG10Z_GpWro4Z",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 5.3
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-tm-vvG10Z_uCyohlW",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Heavy",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-tm-vvG1IZ_aQlI5Ky",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Heavy",
      "why": "My Chemical Romance and Lakers vs. Warriors 11 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-tm-vvG1iZbS55MdJK",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:22:49.103Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "beabadoobee 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-06-espn-devils-401892451",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Rangers vs. Islanders 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-06-espn-ny-rangers-401892452",
    "date": "2026-10-06",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Devils vs. Mammoth 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-06-tm-G5diZ_6RY34G6",
    "date": "2026-10-06",
    "start": "20:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Rangers vs. Islanders and Devils vs. Mammoth next door, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-07-mlb-849838",
    "date": "2026-10-07",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Harry Styles 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-07-tm-G5diZ_dfAnI1y",
    "date": "2026-10-07",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Yankees vs. Rays 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-islanders-401892462",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 13 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-knicks-401906508",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-nets-401901823",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 10 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-mlb-849837",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Moderate",
      "why": "Knicks vs. Wizards 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-nycc",
    "date": "2026-10-08",
    "start": "10:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-tm-G5dYZ_kma1OTc",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Heavy",
      "why": "Yankees vs. Rays and LE SSERAFIM 5.6 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-tm-vvG1FZ_1RM07i3",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.7,
      "friction": "Moderate",
      "why": "Yankees vs. Rays 14 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-espn-liberty-401918299",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 9.2,
      "friction": "Moderate",
      "why": "Harry Styles and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-nycc",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 9.2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-1AdZZ_KGkBbIgHH",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 9.2,
      "friction": "Moderate",
      "why": "Harry Styles 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-G5diZ_dfAcz51",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 9.2,
      "friction": "Moderate",
      "why": "2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) and Liberty vs. Dream 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-G5dYZ_1NSz3fJ",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 9.2,
      "friction": "Heavy",
      "why": "Harry Styles and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 1.0 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-Z7r9jZ1A7PI0I",
    "date": "2026-10-09",
    "start": "22:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 9.2,
      "friction": "Heavy",
      "why": "Harry Styles and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 4.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-devils-401892470",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Heavy",
      "why": "Islanders vs. Lightning 23 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-fordham-football-401868011",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Extreme",
      "why": "Red Bull NY vs. San Diego FC and Harry Styles 16 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-islanders-401892479",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Heavy",
      "why": "Devils vs. Canucks 23 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-red-bulls-761853",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Heavy",
      "why": "Harry Styles and Don Omar 8.3 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-nycc",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-17GZv0G61DlIaN2",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-G5diZ_7rmEKO0",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Extreme",
      "why": "Harry Styles next door, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-G5diZ_dfAVb5L",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Heavy",
      "why": "Red Bull NY vs. San Diego FC and Don Omar 8.3 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-G5dYZ_8CAw-5m",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Extreme",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 1.0 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-k7vGF_aUb02cm",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 7.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7JFjw",
    "date": "2026-10-10",
    "start": "22:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 8.7,
      "friction": "Extreme",
      "why": "Don Omar 3.2 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-liberty-401918301",
    "date": "2026-10-11",
    "start": "14:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Moderate",
      "why": "Jets vs. Browns and New York Comic Con (day 4 of 4) 10 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Low",
      "why": "New York Comic Con (day 4 of 4) 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-rangers-401892483",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Moderate",
      "why": "Jets vs. Browns 6.1 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-nycc",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Knicks vs. Timberwolves 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-knicks-401914124",
    "date": "2026-10-12",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Devils vs. Senators 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-islanders-401892495",
    "date": "2026-10-13",
    "start": "19:45",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Rangers vs. Lightning 14 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-ny-rangers-401892493",
    "date": "2026-10-13",
    "start": "19:15",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Islanders vs. Canucks 14 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-espn-devils-401892511",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Knicks vs. Raptors 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-espn-knicks-401908945",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Devils vs. Rangers 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-fordham-football-401868012",
    "date": "2026-10-17",
    "start": "15:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Heavy",
      "why": "Stony Brook vs. UAlbany 40 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-nycfc-761877",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC 16 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-stony-brook-football-401866666",
    "date": "2026-10-17",
    "start": "14:30",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "Fordham vs. Villanova 40 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-18-espn-ny-giants-401873000",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-19-espn-ny-rangers-401892535",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-20-espn-devils-401892540",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Knicks vs. 76ers and Islanders vs. Ducks 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-20-espn-islanders-401892541",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Knicks vs. 76ers and Devils vs. Avalanche 14 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-20-espn-knicks-401909089",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:52:36.970Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Islanders vs. Ducks and Devils vs. Avalanche 14 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-07-mlb-849838",
    "date": "2026-10-07",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Harry Styles 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-07-tm-G5diZ_dfAnI1y",
    "date": "2026-10-07",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Yankees vs. Rays 6.5 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-islanders-401892462",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 13 mi away, same hours."
    },
    "draw": {
      "count": 15018,
      "low": 14633,
      "high": 15255
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-knicks-401906508",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 6.5 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 19018,
      "high": 19355
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-nets-401901823",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 10 mi away, same hours."
    },
    "draw": {
      "count": 13849,
      "low": 12904,
      "high": 14966
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-mlb-849837",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Moderate",
      "why": "Knicks vs. Wizards 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-nycc",
    "date": "2026-10-08",
    "start": "10:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-tm-G5dYZ_kma1OTc",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "Yankees vs. Rays and Knicks vs. Wizards 5.6 mi away, same hours."
    },
    "draw": {
      "count": 5960
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-tm-vvG1FZ_1RM07i3",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "Yankees vs. Rays 14 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-espn-liberty-401918299",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "Harry Styles and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-nycc",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-1AdZZ_KGkBbIgHH",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "Liberty vs. Dream and Harry Styles next door, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-G5diZ_dfAcz51",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "Liberty vs. Dream and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 4.8 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-G5dYZ_1NSz3fJ",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Heavy",
      "why": "Liberty vs. Dream and Harry Styles 5.3 mi away, same hours."
    },
    "draw": {
      "count": 5960
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-Z7r9jZ1A7PI0I",
    "date": "2026-10-09",
    "start": "22:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Heavy",
      "why": "Liberty vs. Dream and Harry Styles 3.2 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-devils-401892470",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Islanders vs. Lightning 23 mi away, back to back."
    },
    "draw": {
      "count": 15886,
      "low": 15886,
      "high": 15886
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-fordham-football-401868011",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 7.5
    },
    "draw": {
      "count": 4300,
      "low": 4057,
      "high": 4597
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-islanders-401892479",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Devils vs. Canucks 23 mi away, back to back."
    },
    "draw": {
      "count": 16513,
      "low": 16513,
      "high": 16513
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-red-bulls-761853",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Harry Styles and Foster the People 8.3 mi away, same hours."
    },
    "draw": {
      "count": 19828,
      "low": 18039,
      "high": 23870
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-nycc",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-17GZv0G61DlIaN2",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "50 Cent and Harry Styles 3.2 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-G5diZ_7rmEKO0",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Harry Styles next door, same hours."
    },
    "draw": {
      "count": 5600
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-G5diZ_dfAVb5L",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Red Bull NY vs. San Diego FC and CHRONO TRIGGER Orchestra Concert 8.3 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-G5dYZ_8CAw-5m",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 1.0 mi away, same hours."
    },
    "draw": {
      "count": 5960
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-k7vGF_aUb02cm",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7JFjw",
    "date": "2026-10-10",
    "start": "22:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Don Omar 3.2 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-liberty-401918301",
    "date": "2026-10-11",
    "start": "14:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jets vs. Browns and New York Comic Con (day 4 of 4) 10 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 1:00 pm start."
    },
    "draw": {
      "count": 81100,
      "low": 78108,
      "high": 82071
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-rangers-401892483",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jets vs. Browns and Liberty vs. Dream 6.1 mi away, back to back."
    },
    "draw": {
      "count": 17844,
      "low": 17327,
      "high": 17844
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-nycc",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-Z7r9jZ1AAZ8FU",
    "date": "2026-10-11",
    "start": "16:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Heavy",
      "why": "Jets vs. Browns and Liberty vs. Dream 11 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Knicks vs. Timberwolves 9.4 mi away, same hours."
    },
    "draw": {
      "count": 16117,
      "low": 15410,
      "high": 16434
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-knicks-401914124",
    "date": "2026-10-12",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Devils vs. Senators 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 19018,
      "high": 19355
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-islanders-401892495",
    "date": "2026-10-13",
    "start": "19:45",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Rangers vs. Lightning 14 mi away, same hours."
    },
    "draw": {
      "count": 14475,
      "low": 14104,
      "high": 14703
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-ny-rangers-401892493",
    "date": "2026-10-13",
    "start": "19:15",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Islanders vs. Canucks 14 mi away, same hours."
    },
    "draw": {
      "count": 17844,
      "low": 17475,
      "high": 17844
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-espn-devils-401892511",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Knicks vs. Raptors 9.4 mi away, same hours."
    },
    "draw": {
      "count": 16198,
      "low": 15487,
      "high": 16516
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-espn-knicks-401908945",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Devils vs. Rangers 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 19018,
      "high": 19355
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-fordham-football-401868012",
    "date": "2026-10-17",
    "start": "15:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 3.5
    },
    "draw": {
      "count": 4300,
      "low": 4057,
      "high": 4597
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-nycfc-761877",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    },
    "draw": {
      "count": 24428,
      "low": 21073,
      "high": 24891
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC 16 mi away, same hours."
    },
    "draw": {
      "count": 20681,
      "low": 18815,
      "high": 24896
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-stony-brook-football-401866666",
    "date": "2026-10-17",
    "start": "14:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC and Red Bull NY vs. Toronto 39 mi away, back to back."
    },
    "draw": {
      "count": 6922,
      "low": 6345,
      "high": 7850
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-18-espn-ny-giants-401873000",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 82225,
      "low": 80956,
      "high": 82926
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-19-espn-ny-rangers-401892535",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18006,
      "low": 17634,
      "high": 18006
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-20-espn-devils-401892540",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Heavy",
      "why": "Knicks vs. 76ers and Islanders vs. Ducks 9.4 mi away, same hours."
    },
    "draw": {
      "count": 16004,
      "low": 15302,
      "high": 16319
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-20-espn-islanders-401892541",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Heavy",
      "why": "Knicks vs. 76ers and Devils vs. Avalanche 14 mi away, same hours."
    },
    "draw": {
      "count": 14461,
      "low": 14090,
      "high": 14688
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-20-espn-knicks-401909089",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.4,
      "friction": "Moderate",
      "why": "Devils vs. Avalanche and Islanders vs. Ducks 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19673,
      "low": 19673,
      "high": 19673
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-espn-nets-401909836",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:10.964Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17711,
      "low": 17524,
      "high": 17714
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-06-mlb-849826",
    "date": "2026-10-06",
    "start": "18:30",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "87° feels-like at a 6:30 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-07-mlb-849827",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-08-tm-Z7r9jZ1A7PEaY",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-vvG1IZ_F5TB6n1",
    "date": "2026-10-09",
    "start": "12:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.6,
      "friction": "Heavy",
      "why": "97° feels-like at a 12:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-vvG1IZbgXbSgVe",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.6,
      "friction": "Low",
      "why": "Niteharts Festival 15 mi away, back to back."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-Z7r9jZ1A7-4as",
    "date": "2026-10-09",
    "start": "15:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.6,
      "friction": "Moderate",
      "why": "95° feels-like at a 3:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "91° feels-like at a 12:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZbMExObDZ",
    "date": "2026-10-10",
    "start": "20:30",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Low",
      "why": "Niteharts Festival 15 mi away, earlier in the day."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-4aw",
    "date": "2026-10-10",
    "start": "14:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "90° feels-like at a 2:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7PEas",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Niteharts Festival and Niteharts Festival 3.6 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_1UoDk-X",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Taking Back Sunday 0.5 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_a3NPpAU",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 7:00 pm start."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_F5TDEnj",
    "date": "2026-10-11",
    "start": "12:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "91° feels-like at a 12:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-Z7r9jZ1A7-4aS",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Niteharts Festival next door, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-13-tm-vvG1IZ_FBVqMW5",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-espn-san-diego-fc-761872",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-16-tm-vvG1IZ_18W2pnn",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "G-Eazy 12 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-16-tm-vvG1IZ_ap-YIAd",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "MUNA 12 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-espn-sdsu-football-401860904",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "88° feels-like at a 7:30 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7-w7J",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:09.186Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "San Diego St vs. Fresno St 6.0 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-07-mlb-849827",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-08-tm-Z7r9jZ1A7PEaY",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07"
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-vvG1IZ_F5TB6n1",
    "date": "2026-10-09",
    "start": "12:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Heavy",
      "why": "97° feels-like at a 12:00 pm start, no roof."
    },
    "draw": {
      "count": 19950
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-vvG1IZbgXbSgVe",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "92° feels-like at a 12:00 pm start, no roof."
    },
    "draw": {
      "count": 19950
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZbMExObDZ",
    "date": "2026-10-10",
    "start": "20:30",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7PEas",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 3.4
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_1UoDk-X",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Taking Back Sunday 0.5 mi away, same hours."
    },
    "draw": {
      "count": 10000
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_a3NPpAU",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "for KING & COUNTRY 0.5 mi away, same hours."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_F5TDEnj",
    "date": "2026-10-11",
    "start": "12:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 19950
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-13-tm-vvG1IZ_FBVqMW5",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-espn-san-diego-fc-761872",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 23514,
      "low": 22938,
      "high": 28008
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-16-tm-vvG1IZ_18W2pnn",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 7:00 pm start."
    },
    "draw": {
      "count": 10000
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-16-tm-vvG1IZ_ap-YIAd",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "MUNA 12 mi away, same hours."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-espn-sdsu-football-401860904",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Bonnie Raitt 6.0 mi away, same hours."
    },
    "draw": {
      "count": 27122,
      "low": 27030,
      "high": 29215
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7-w7J",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "San Diego St vs. Fresno St 6.0 mi away, same hours."
    },
    "draw": {
      "count": 10000
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_ampfFN9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:00.437Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-06-espn-kraken-401892454",
    "date": "2026-10-06",
    "start": "18:40",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-08-tm-vvG1HZ_2dnQmix",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Carín León 26 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-08-tm-vvG1HZ_eSaDa4L",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "YG 26 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-espn-uw-football-401858487",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Low",
      "why": "aespa 3.1 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RCaryz",
    "date": "2026-10-09",
    "start": null,
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Billy Strings next door, back to back."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RGOXwD",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Washington Huskies vs. Iowa 23 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_apipb8J",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Washington Huskies vs. Iowa 3.1 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_6RG-rSZ",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "RUSH and Disney Worlds Collide Concert Tour 26 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_aRdSCOm",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Heavy",
      "why": "RUSH and Disney Worlds Collide Concert Tour 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_awvO4ij",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Heavy",
      "why": "RUSH and Disney Worlds Collide Concert Tour 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_kRkZBZv",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "RUSH 27 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZbVHCjUxY",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Disney Worlds Collide Concert Tour 27 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-11-espn-seahawks-401872992",
    "date": "2026-10-11",
    "start": "13:25",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-12-tm-vvG1HZbg96d7M9",
    "date": "2026-10-12",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-15-tm-vvG1HZ_F51rx5F",
    "date": "2026-10-15",
    "start": null,
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Doja Cat 27 mi away, back to back."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-15-tm-vvG1HZbSlq8gOt",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Tacoma Holiday Festival 27 mi away, back to back."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.1,
      "friction": "Low",
      "why": "MANÁ 2.1 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.1,
      "friction": "Low",
      "why": "Sounders vs. CF Montréal 2.1 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-espn-kraken-401892547",
    "date": "2026-10-20",
    "start": "18:40",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "WAMU Theater Amplified Access: Rise Against (Not an Event Ticket) and Rise Against 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-tm-vvG1HZ_ahVjxry",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-tm-vvG1HZ_knDpajm",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:13:13.060Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-08-tm-vvG1HZ_2dnQmix",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Carín León 26 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-08-tm-vvG1HZ_eSaDa4L",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "YG 26 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-espn-uw-football-401858487",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 69107,
      "low": 67229,
      "high": 71312
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RCaryz",
    "date": "2026-10-09",
    "start": null,
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Billy Strings next door, back to back."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RGOXwD",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Washington Huskies vs. Iowa 23 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_apipb8J",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Washington Huskies vs. Iowa 3.1 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_6RG-rSZ",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "RUSH and Disney Worlds Collide Concert Tour 26 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_aRdSCOm",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "RUSH and Disney Worlds Collide Concert Tour 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_awvO4ij",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "RUSH and Disney Worlds Collide Concert Tour 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_kRkZBZv",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "RUSH 27 mi away, same hours."
    },
    "draw": {
      "count": 9690
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZbVHCjUxY",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney Worlds Collide Concert Tour 27 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-11-espn-seahawks-401872992",
    "date": "2026-10-11",
    "start": "13:25",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 68781,
      "low": 68704,
      "high": 68804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-12-tm-vvG1HZbg96d7M9",
    "date": "2026-10-12",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-15-tm-vvG1HZ_F51rx5F",
    "date": "2026-10-15",
    "start": null,
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Doja Cat 27 mi away, back to back."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-15-tm-vvG1HZbSlq8gOt",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Tacoma Holiday Festival 27 mi away, back to back."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "MANÁ 2.1 mi away, same hours."
    },
    "draw": {
      "count": 32913,
      "low": 32250,
      "high": 34627
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "Sounders vs. CF Montréal 2.1 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-espn-kraken-401892547",
    "date": "2026-10-20",
    "start": "18:40",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "WAMU Theater Amplified Access: Rise Against (Not an Event Ticket) and Rise Against 2.2 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-tm-vvG1HZ_ahVjxry",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-tm-vvG1HZ_knDpajm",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-07T21:23:03.735Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  }
];
