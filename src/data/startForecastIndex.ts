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
    "metroId": "toronto",
    "eventId": "2026-10-13-espn-raptors-401908944",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 17507,
      "low": 16950,
      "high": 18141
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-14-espn-toronto-fc-761860",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 14963,
      "low": 11499,
      "high": 15638
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-15-espn-maple-leafs-401892506",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18469,
      "low": 18342,
      "high": 18748
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-17-espn-maple-leafs-401892523",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18923,
      "low": 18816,
      "high": 19000
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-18-ht-marlies-1029167",
    "date": "2026-10-18",
    "start": "16:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "draw": {
      "count": 3724,
      "low": 3668,
      "high": 4353
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-19-espn-maple-leafs-401892537",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18432,
      "low": 18305,
      "high": 18711
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-21-espn-raptors-401909837",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 19364,
      "low": 19274,
      "high": 19364
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-21-ht-marlies-1029174",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 4026,
      "low": 2665,
      "high": 7362
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-22-espn-maple-leafs-401892553",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18377,
      "low": 18250,
      "high": 18655
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-24-ht-marlies-1029200",
    "date": "2026-10-24",
    "start": "16:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "draw": {
      "count": 3820,
      "low": 3711,
      "high": 3824
    }
  },
  {
    "metroId": "toronto",
    "eventId": "2026-10-25-ht-marlies-1029204",
    "date": "2026-10-25",
    "start": "16:00",
    "capturedAt": "2026-10-12T08:16:24.793Z",
    "capturedOn": "2026-10-12",
    "draw": {
      "count": 3792,
      "low": 3735,
      "high": 4433
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-espn-dream-401918297",
    "date": "2026-10-07",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Braves vs. Dodgers 10 mi away, same hours."
    },
    "draw": {
      "count": 17600,
      "low": 17600,
      "high": 17600
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-espn-ksu-football-401871051",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Dream vs. Liberty 10 mi away, same hours."
    },
    "draw": {
      "count": 41084,
      "low": 36031,
      "high": 41084
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-07-tm-vvG1zZ_7MxKXo2",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Moderate",
      "why": "Georgia Tech vs. Duke 1.3 mi away, same hours."
    },
    "draw": {
      "count": 42218,
      "low": 41583,
      "high": 42942
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-gt-football-401858255",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17600,
      "low": 17600,
      "high": 17600
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-14-tm-vvG1zZ_uQsKFm-",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "MercyMe 26 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Breaking Benjamin and Don Omar 21 mi away, same hours."
    },
    "draw": {
      "count": 45413,
      "low": 44730,
      "high": 46192
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_1UneLAE",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_G2Q5wKA",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-espn-falcons-401872999",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Atlanta Gladiators vs. Norfolk Admirals 24 mi away, same hours."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-tm-vvG1zZ_G2QGxKo",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-08T03:40:47.195Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Falcons vs. Bears 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-19-tm-vvG1zZ_1p_clEl",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "capturedAt": "2026-10-08T03:40:47.195Z",
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
    "eventId": "2026-10-08-tm-vvG1zZ_8UEbzYQ",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Moderate",
      "why": "Georgia Tech vs. Duke 1.3 mi away, same hours."
    },
    "draw": {
      "count": 42218,
      "low": 41583,
      "high": 42942
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-gt-football-401858255",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17600,
      "low": 17600,
      "high": 17600
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-14-tm-vvG1zZ_uQsKFm-",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "MercyMe 26 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Breaking Benjamin and Don Omar 21 mi away, same hours."
    },
    "draw": {
      "count": 45413,
      "low": 44730,
      "high": 46192
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_1UneLAE",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_G2Q5wKA",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-espn-falcons-401872999",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Atlanta Gladiators vs. Norfolk Admirals 24 mi away, same hours."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-tm-vvG1zZ_G2QGxKo",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Falcons vs. Bears 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-19-tm-vvG1zZ_1p_clEl",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-22-espn-ksu-football-401871056",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Sombr 21 mi away, same hours."
    },
    "draw": {
      "count": 9585,
      "low": 8897,
      "high": 10313
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-22-tm-vvG1zZ_FxEt19L",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:49.201Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kennesaw St vs. Liberty Flames 21 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.8,
      "friction": "Heavy",
      "why": "Rain in the forecast at a 7:30 pm start."
    },
    "draw": {
      "count": 42218,
      "low": 41583,
      "high": 42942
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-gt-football-401858255",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.8,
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.8,
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.8,
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.8,
      "friction": "Heavy",
      "why": "Rain in the forecast at a 8:00 pm start."
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17600,
      "low": 17600,
      "high": 17600
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-14-tm-vvG1zZ_uQsKFm-",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "MercyMe 26 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Breaking Benjamin and Don Omar 21 mi away, same hours."
    },
    "draw": {
      "count": 45413,
      "low": 44730,
      "high": 46192
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_1UneLAE",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_G2Q5wKA",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-espn-falcons-401872999",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Atlanta Gladiators vs. Norfolk Admirals 24 mi away, same hours."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-tm-vvG1zZ_G2QGxKo",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Falcons vs. Bears 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-19-tm-vvG1zZ_1p_clEl",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-22-espn-ksu-football-401871056",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Sombr 21 mi away, same hours."
    },
    "draw": {
      "count": 9585,
      "low": 8897,
      "high": 10313
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-22-tm-vvG1zZ_FxEt19L",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kennesaw St vs. Liberty Flames 21 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-23-tm-vvG1zZ_A3EpGC8",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Rawayana 19 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-23-tm-vvG1zZ_kw099iN",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:05.288Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "CeCe Winans 19 mi away, same hours."
    },
    "draw": {
      "count": 6900
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-atlanta-united-761850",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "Georgia Tech vs. Duke 1.3 mi away, same hours."
    },
    "draw": {
      "count": 35083,
      "low": 34556,
      "high": 35685
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-espn-gt-football-401858255",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Low",
      "why": "Atlanta United vs. Cincinnati 1.3 mi away, same hours."
    },
    "draw": {
      "count": 49331,
      "low": 47555,
      "high": 67312
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-tm-vvG1zZ_6d_IGUK",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "Georgia Tech vs. Duke and Atlanta United vs. Cincinnati 1.1 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-10-tm-vvG1zZ_8kRi5L2",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Heavy",
      "why": "Rain in the forecast at a 8:00 pm start."
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12713,
      "low": 10923,
      "high": 13203
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-13-tm-vvG1zZ_eQ2KN-d",
    "date": "2026-10-13",
    "start": "18:45",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-14-tm-vvG1zZ_uQsKFm-",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Dan + Shay 21 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dan + Shay 13 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-16-tm-vvG1zZ_121qqS7",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "MercyMe 26 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Breaking Benjamin and Don Omar 21 mi away, same hours."
    },
    "draw": {
      "count": 37738,
      "low": 37171,
      "high": 38385
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_1UneLAE",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4,
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_G2Q5wKA",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-espn-falcons-401872999",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Atlanta Gladiators vs. Norfolk Admirals 24 mi away, same hours."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-tm-vvG1zZ_G2QGxKo",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Falcons vs. Bears 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-19-tm-vvG1zZ_1p_clEl",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-22-espn-ksu-football-401871056",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Sombr 21 mi away, same hours."
    },
    "draw": {
      "count": 10227,
      "low": 9493,
      "high": 11004
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-22-tm-vvG1zZ_FxEt19L",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kennesaw St vs. Liberty Flames 21 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-23-tm-vvG1zZ_A3EpGC8",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Rawayana 19 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-23-tm-vvG1zZ_kw099iN",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "CeCe Winans 19 mi away, same hours."
    },
    "draw": {
      "count": 6900
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-24-espn-atlanta-united-761893",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Hawks vs. Rockets and Georgia Tech vs. Boston College next door, same hours."
    },
    "draw": {
      "count": 34552,
      "low": 34033,
      "high": 35145
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-24-espn-gt-football-401858273",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 49331,
      "low": 47555,
      "high": 67312
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-24-espn-hawks-401909856",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:39.074Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Atlanta United vs. Fire next door, same hours."
    },
    "draw": {
      "count": 17430,
      "low": 16863,
      "high": 18049
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-11-espn-falcons-401872993",
    "date": "2026-10-11",
    "start": "20:20",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12713,
      "low": 10923,
      "high": 13203
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-13-tm-vvG1zZ_eQ2KN-d",
    "date": "2026-10-13",
    "start": "18:45",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "eventId": "2026-10-14-tm-vvG1zZ_uQsKFm-",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Dan + Shay 21 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dan + Shay 13 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-16-tm-vvG1zZ_121qqS7",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "MercyMe 26 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Breaking Benjamin and Don Omar 21 mi away, same hours."
    },
    "draw": {
      "count": 37738,
      "low": 37171,
      "high": 38385
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_1UneLAE",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4,
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 21 mi away, same hours."
    },
    "draw": {
      "count": 12000
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-17-tm-vvG1zZ_G2Q5wKA",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "Atlanta United vs. Miami 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-espn-falcons-401872999",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Atlanta Gladiators vs. Norfolk Admirals 24 mi away, same hours."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-18-tm-vvG1zZ_G2QGxKo",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Falcons vs. Bears 24 mi away, same hours."
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-19-tm-vvG1zZ_1p_clEl",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
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
    "eventId": "2026-10-22-espn-ksu-football-401871056",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Sombr 21 mi away, same hours."
    },
    "draw": {
      "count": 10227,
      "low": 9493,
      "high": 11004
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-22-tm-vvG1zZ_FxEt19L",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kennesaw St vs. Liberty Flames 21 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-23-tm-vvG1zZ_A3EpGC8",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Rawayana 19 mi away, same hours."
    },
    "draw": {
      "count": 7410
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-23-tm-vvG1zZ_kw099iN",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "CeCe Winans 19 mi away, same hours."
    },
    "draw": {
      "count": 6900
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-24-espn-atlanta-united-761893",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Hawks vs. Rockets and Georgia Tech vs. Boston College next door, same hours."
    },
    "draw": {
      "count": 34552,
      "low": 34033,
      "high": 35145
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-24-espn-gt-football-401858273",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 48249,
      "low": 46513,
      "high": 65836
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-24-espn-hawks-401909856",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3,
      "friction": "Low",
      "why": "Atlanta United vs. Fire next door, same hours."
    },
    "draw": {
      "count": 17430,
      "low": 16863,
      "high": 18049
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-25-espn-falcons-401873017",
    "date": "2026-10-25",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "86° feels-like at a 1:00 pm start, no roof."
    },
    "draw": {
      "count": 70306,
      "low": 69806,
      "high": 70854
    }
  },
  {
    "metroId": "atlanta",
    "eventId": "2026-10-25-tm-vvG1zZ_6Dbxqs6",
    "date": "2026-10-25",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:05.398Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Falcons vs. 49ers next door, earlier in the day."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-15-espn-texas-state-football-401860923",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 13647,
      "low": 13438,
      "high": 16722
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-17-espn-austin-fc-761882",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 20738,
      "low": 20738,
      "high": 20738
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-17-espn-texas-football-401856724",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 104330,
      "low": 103658,
      "high": 104702
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-23-ht-texas-stars-1029185",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 5451,
      "low": 5332,
      "high": 5665
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-24-espn-texas-football-401856732",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "94° feels-like, no roof."
    },
    "draw": {
      "count": 104330,
      "low": 103658,
      "high": 104702
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-24-espn-texas-state-football-401860906",
    "date": "2026-10-24",
    "start": "18:30",
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "Texas Longhorns vs. Ole Miss 29 mi away, back to back."
    },
    "draw": {
      "count": 20399,
      "low": 18761,
      "high": 21735
    }
  },
  {
    "metroId": "austin",
    "eventId": "2026-10-24-ht-texas-stars-1029199",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:21:00.008Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "Texas St vs. Utah State 45 mi away, same hours."
    },
    "draw": {
      "count": 6105,
      "low": 5771,
      "high": 6280
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-07-espn-valkyries-401918298",
    "date": "2026-10-07",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "The Neighbourhood 1.8 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-07-tm-G5vYZbgD1f1IU",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Valkyries vs. Aces 1.8 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-08-tm-G5vYZ_AxtLqKN",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 22500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-09-espn-sjsu-football-401864519",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Holy Priest 44 mi away, same hours."
    },
    "draw": {
      "count": 14898,
      "low": 13281,
      "high": 16872
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-09-tm-G5vYZ_CQwHuk4",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "San José St vs. Wyoming 44 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-cal-football-401858259",
    "date": "2026-10-10",
    "start": "12:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Low",
      "why": "Warriors vs. Sacramento Kings 10 mi away, back to back."
    },
    "draw": {
      "count": 38772,
      "low": 35023,
      "high": 43347
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-oakland-roots-401842280",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 4.2
    },
    "draw": {
      "count": 5349,
      "low": 4765,
      "high": 7063
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-sharks-401892471",
    "date": "2026-10-10",
    "start": "13:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Warriors vs. Sacramento Kings 40 mi away, back to back."
    },
    "draw": {
      "count": 18202,
      "low": 18093,
      "high": 18202
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-warriors-401898399",
    "date": "2026-10-10",
    "start": "17:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "California vs. Virginia Tech 10 mi away, back to back."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_6eBbDWb",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "Chayanne 28 mi away, same hours."
    },
    "draw": {
      "count": 12500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_k9d23or",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "TLC 28 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-13-espn-sharks-401892503",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12776,
      "low": 10831,
      "high": 13076
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-14-espn-valkyries-401918304",
    "date": "2026-10-14",
    "start": null,
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_6TyA5KT",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_aLvBhU9",
    "date": "2026-10-15",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Young Miko 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_ki2fDlR",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 12 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-espn-warriors-401898409",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_aLvDDUV",
    "date": "2026-10-16",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Warriors vs. Trail Blazers 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7JeGd",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Warriors vs. Trail Blazers 12 mi away, same hours."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-cal-football-401858269",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon 31 mi away, back to back."
    },
    "draw": {
      "count": 38772,
      "low": 35023,
      "high": 43347
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-earthquakes-761886",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon 14 mi away, same hours."
    },
    "draw": {
      "count": 15228,
      "low": 14182,
      "high": 16102
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-stanford-football-401858262",
    "date": "2026-10-17",
    "start": "16:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "California vs. Wake Forest 31 mi away, back to back."
    },
    "draw": {
      "count": 25426,
      "low": 23699,
      "high": 29286
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZ_aLeZhMg",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon and California vs. Wake Forest 22 mi away, back to back."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-espn-bay-fc-401854025",
    "date": "2026-10-18",
    "start": "14:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 32 mi away, same hours."
    },
    "draw": {
      "count": 12529,
      "low": 11383,
      "high": 14560
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_aLed5z0",
    "date": "2026-10-18",
    "start": "11:00",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Bay FC vs. Portland 32 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-sf-49ers-401873008",
    "date": "2026-10-19",
    "start": "17:15",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 71337,
      "low": 71269,
      "high": 71513
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-tm-G5vYZbS0uA9TW",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:54.424Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "49ers vs. Commanders 34 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-08-tm-G5vYZ_AxtLqKN",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 22500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-09-espn-sjsu-football-401864519",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Holy Priest 44 mi away, same hours."
    },
    "draw": {
      "count": 14898,
      "low": 13281,
      "high": 16872
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-09-tm-G5vYZ_CQwHuk4",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "San José St vs. Wyoming 44 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-cal-football-401858259",
    "date": "2026-10-10",
    "start": "12:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Low",
      "why": "Warriors vs. Sacramento Kings 10 mi away, back to back."
    },
    "draw": {
      "count": 38772,
      "low": 35023,
      "high": 43347
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-oakland-roots-401842280",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 4.2
    },
    "draw": {
      "count": 5349,
      "low": 4765,
      "high": 7063
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-sharks-401892471",
    "date": "2026-10-10",
    "start": "13:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Warriors vs. Sacramento Kings 40 mi away, back to back."
    },
    "draw": {
      "count": 18202,
      "low": 18093,
      "high": 18202
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-warriors-401898399",
    "date": "2026-10-10",
    "start": "17:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "California vs. Virginia Tech 10 mi away, back to back."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_6eBbDWb",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "Chayanne 28 mi away, same hours."
    },
    "draw": {
      "count": 12500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_k9d23or",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "TLC 28 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-13-espn-sharks-401892503",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12776,
      "low": 10831,
      "high": 13076
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-14-espn-valkyries-401918304",
    "date": "2026-10-14",
    "start": null,
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_6TyA5KT",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_aLvBhU9",
    "date": "2026-10-15",
    "start": "18:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Young Miko 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_ki2fDlR",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 12 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-espn-warriors-401898409",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_aLvDDUV",
    "date": "2026-10-16",
    "start": "18:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Warriors vs. Trail Blazers 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7JeGd",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Warriors vs. Trail Blazers 12 mi away, same hours."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-cal-football-401858269",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon 31 mi away, back to back."
    },
    "draw": {
      "count": 38772,
      "low": 35023,
      "high": 43347
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-earthquakes-761886",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon 14 mi away, same hours."
    },
    "draw": {
      "count": 15228,
      "low": 14182,
      "high": 16102
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-stanford-football-401858262",
    "date": "2026-10-17",
    "start": "16:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "California vs. Wake Forest 31 mi away, back to back."
    },
    "draw": {
      "count": 25426,
      "low": 23699,
      "high": 29286
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZ_aLeZhMg",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon and California vs. Wake Forest 22 mi away, back to back."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-espn-bay-fc-401854025",
    "date": "2026-10-18",
    "start": "14:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 32 mi away, same hours."
    },
    "draw": {
      "count": 12529,
      "low": 11383,
      "high": 14560
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_aLed5z0",
    "date": "2026-10-18",
    "start": "11:00",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Bay FC vs. Portland 32 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-sf-49ers-401873008",
    "date": "2026-10-19",
    "start": "17:15",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 71337,
      "low": 71269,
      "high": 71513
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-tm-G5vYZbS0uA9TW",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:57.275Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "49ers vs. Commanders 34 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-09-espn-sjsu-football-401864519",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Holy Priest 44 mi away, same hours."
    },
    "draw": {
      "count": 14898,
      "low": 13281,
      "high": 16872
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-09-tm-G5vYZ_CQwHuk4",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "San José St vs. Wyoming 44 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-cal-football-401858259",
    "date": "2026-10-10",
    "start": "12:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Low",
      "why": "Warriors vs. Sacramento Kings 10 mi away, back to back."
    },
    "draw": {
      "count": 38772,
      "low": 35023,
      "high": 43347
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-oakland-roots-401842280",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 4.2
    },
    "draw": {
      "count": 5349,
      "low": 4765,
      "high": 7063
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-sharks-401892471",
    "date": "2026-10-10",
    "start": "13:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "Warriors vs. Sacramento Kings 40 mi away, back to back."
    },
    "draw": {
      "count": 18202,
      "low": 18093,
      "high": 18202
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-warriors-401898399",
    "date": "2026-10-10",
    "start": "17:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.2,
      "friction": "Moderate",
      "why": "California vs. Virginia Tech 10 mi away, back to back."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_6eBbDWb",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "Chayanne 28 mi away, same hours."
    },
    "draw": {
      "count": 12500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_k9d23or",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "TLC 28 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-13-espn-sharks-401892503",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12776,
      "low": 10831,
      "high": 13076
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-14-espn-valkyries-401918304",
    "date": "2026-10-14",
    "start": null,
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_6TyA5KT",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_aLvBhU9",
    "date": "2026-10-15",
    "start": "18:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Young Miko 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_ki2fDlR",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 12 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-espn-warriors-401898409",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_aLvDDUV",
    "date": "2026-10-16",
    "start": "18:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Warriors vs. Trail Blazers 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7JeGd",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Warriors vs. Trail Blazers 12 mi away, same hours."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-cal-football-401858269",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon 31 mi away, back to back."
    },
    "draw": {
      "count": 38772,
      "low": 35023,
      "high": 43347
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-earthquakes-761886",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon 14 mi away, same hours."
    },
    "draw": {
      "count": 15228,
      "low": 14182,
      "high": 16102
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-stanford-football-401858262",
    "date": "2026-10-17",
    "start": "16:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Moderate",
      "why": "California vs. Wake Forest 31 mi away, back to back."
    },
    "draw": {
      "count": 25426,
      "low": 23699,
      "high": 29286
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZ_aLeZhMg",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Stanford vs. Elon and California vs. Wake Forest 22 mi away, back to back."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-espn-bay-fc-401854025",
    "date": "2026-10-18",
    "start": "14:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Low",
      "why": "89° feels-like at a 2:00 pm start, no roof."
    },
    "draw": {
      "count": 12529,
      "low": 11383,
      "high": 14560
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_aLed5z0",
    "date": "2026-10-18",
    "start": "11:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Low",
      "why": "Bay FC vs. Portland 32 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-sf-49ers-401873008",
    "date": "2026-10-19",
    "start": "17:15",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 71337,
      "low": 71269,
      "high": 71513
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-tm-G5vYZbS0uA9TW",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "49ers vs. Commanders 34 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-espn-stanford-football-401858272",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Warriors vs. Grizzlies 26 mi away, same hours."
    },
    "draw": {
      "count": 26963,
      "low": 23262,
      "high": 33189
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-espn-warriors-401909850",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Stanford vs. NC State 26 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-tm-Z7r9jZ1A70kkF",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:13.692Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Stanford vs. NC State and Warriors vs. Grizzlies 22 mi away, same hours."
    },
    "draw": {
      "count": 11170
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-cal-football-401858259",
    "date": "2026-10-10",
    "start": "12:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Warriors vs. Sacramento Kings 10 mi away, back to back."
    },
    "draw": {
      "count": 45945,
      "low": 41502,
      "high": 51366
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-oakland-roots-401842280",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 5.1
    },
    "draw": {
      "count": 5349,
      "low": 4765,
      "high": 7063
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-sharks-401892471",
    "date": "2026-10-10",
    "start": "13:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Warriors vs. Sacramento Kings and California vs. Virginia Tech 40 mi away, back to back."
    },
    "draw": {
      "count": 18202,
      "low": 18093,
      "high": 18202
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-espn-warriors-401898399",
    "date": "2026-10-10",
    "start": "17:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "California vs. Virginia Tech 10 mi away, back to back."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-10-tm-G5vYZ_epX9yGn",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Low",
      "why": "Warriors vs. Sacramento Kings and California vs. Virginia Tech 34 mi away, same hours."
    },
    "draw": {
      "count": 39045
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_6eBbDWb",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "Bruno Mars 39 mi away, same hours."
    },
    "draw": {
      "count": 12500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_eEJSDnx",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 39045
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_k9d23or",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "Bruno Mars 34 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-13-espn-sharks-401892503",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12776,
      "low": 10831,
      "high": 13076
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_6TyA5KT",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and RUSH 10 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_aLvBhU9",
    "date": "2026-10-15",
    "start": "18:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Young Miko and RUSH 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_ki2fDlR",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 12 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZbVTOJiVS",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 33 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-espn-warriors-401898409",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_adKleIW",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Heavy",
      "why": "Dom Dolla 15 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_aLvDDUV",
    "date": "2026-10-16",
    "start": "18:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Warriors vs. Trail Blazers 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7JeGd",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Vulfpeck 15 mi away, same hours."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-cal-football-401858269",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.5,
      "friction": "Low",
      "why": "Stanford vs. Elon 31 mi away, back to back."
    },
    "draw": {
      "count": 45945,
      "low": 41502,
      "high": 51366
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-earthquakes-761886",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.5,
      "friction": "Moderate",
      "why": "Stanford vs. Elon 14 mi away, same hours."
    },
    "draw": {
      "count": 16131,
      "low": 15311,
      "high": 17443
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-stanford-football-401858262",
    "date": "2026-10-17",
    "start": "16:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.5,
      "friction": "Moderate",
      "why": "California vs. Wake Forest 31 mi away, back to back."
    },
    "draw": {
      "count": 21892,
      "low": 20405,
      "high": 25215
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-valkyries-401918305",
    "date": "2026-10-17",
    "start": "12:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Stanford vs. Elon 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZ_aLeZhMg",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.5,
      "friction": "Moderate",
      "why": "Valkyries vs. Dream 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZbg9ir1-u",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.5,
      "friction": "Moderate",
      "why": "Stanford vs. Elon and Earthquakes vs. Nashville 16 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-espn-bay-fc-401854025",
    "date": "2026-10-18",
    "start": "14:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.9,
      "friction": "Moderate",
      "why": "94° feels-like at a 2:00 pm start, no roof."
    },
    "draw": {
      "count": 11558,
      "low": 11343,
      "high": 12091
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_aLed5z0",
    "date": "2026-10-18",
    "start": "11:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.9,
      "friction": "Low",
      "why": "Bay FC vs. Portland 32 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_uk8kyiH",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.9,
      "friction": "Low",
      "why": "Bay FC vs. Portland 40 mi away, earlier in the day."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-sf-49ers-401873008",
    "date": "2026-10-19",
    "start": "17:15",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Low",
      "why": "Valkyries vs. Dream 34 mi away, same hours."
    },
    "draw": {
      "count": 70624,
      "low": 70556,
      "high": 70798
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-valkyries-401918306",
    "date": "2026-10-19",
    "start": "17:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "49ers vs. Commanders 34 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-22-tm-G5vYZ_FDGjC3K",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-espn-stanford-football-401858272",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Warriors vs. Grizzlies 26 mi away, same hours."
    },
    "draw": {
      "count": 23215,
      "low": 20029,
      "high": 28576
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-espn-warriors-401909850",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Stanford vs. NC State 26 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-tm-G5vYZ_FDGqm3_",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Stanford vs. NC State and Warriors vs. Grizzlies 16 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-tm-Z7r9jZ1A70kkF",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Stanford vs. NC State and Disney On Ice presents Find Your Hero 22 mi away, same hours."
    },
    "draw": {
      "count": 11170
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-24-tm-G5vYZ_FDGrm3O",
    "date": "2026-10-24",
    "start": "11:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-24-tm-G5vYZ_FTZ_iUu",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:42.542Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_6eBbDWb",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "Bruno Mars 39 mi away, same hours."
    },
    "draw": {
      "count": 12500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_eEJSDnx",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 39045
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-11-tm-G5vYZ_k9d23or",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "Bruno Mars 34 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-13-espn-sharks-401892503",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12776,
      "low": 10831,
      "high": 13076
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_6TyA5KT",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and RUSH 10 mi away, same hours."
    },
    "draw": {
      "count": 11115
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_aLvBhU9",
    "date": "2026-10-15",
    "start": "18:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Young Miko and RUSH 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZ_ki2fDlR",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 12 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-15-tm-G5vYZbVTOJiVS",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Young Miko 33 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-espn-warriors-401898409",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_adKleIW",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Heavy",
      "why": "Dom Dolla 15 mi away, same hours."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-G5vYZ_aLvDDUV",
    "date": "2026-10-16",
    "start": "18:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Warriors vs. Trail Blazers 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7JeGd",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Vulfpeck 15 mi away, same hours."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-cal-football-401858269",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Moderate",
      "why": "Stanford vs. Elon 31 mi away, same hours."
    },
    "draw": {
      "count": 43076,
      "low": 38911,
      "high": 48159
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-earthquakes-761886",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Moderate",
      "why": "California vs. Wake Forest 40 mi away, same hours."
    },
    "draw": {
      "count": 16131,
      "low": 15311,
      "high": 17443
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-stanford-football-401858262",
    "date": "2026-10-17",
    "start": "16:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Heavy",
      "why": "California vs. Wake Forest 31 mi away, same hours."
    },
    "draw": {
      "count": 21892,
      "low": 20405,
      "high": 25215
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-espn-valkyries-401918305",
    "date": "2026-10-17",
    "start": "12:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Moderate",
      "why": "Disney On Ice presents Find Your Hero and Stanford vs. Elon 10 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZ_aLeZhMg",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Low",
      "why": "Valkyries vs. Dream 10 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-17-tm-G5vYZbg9ir1-u",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.9,
      "friction": "Moderate",
      "why": "California vs. Wake Forest and Stanford vs. Elon 42 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-espn-bay-fc-401854025",
    "date": "2026-10-18",
    "start": "14:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "90° feels-like at a 2:00 pm start, no roof."
    },
    "draw": {
      "count": 11558,
      "low": 11343,
      "high": 12091
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_aLed5z0",
    "date": "2026-10-18",
    "start": "11:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Bay FC vs. Portland 32 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-18-tm-G5vYZ_uk8kyiH",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Bay FC vs. Portland 40 mi away, earlier in the day."
    },
    "draw": {
      "count": 8500
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-sf-49ers-401873008",
    "date": "2026-10-19",
    "start": "17:15",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Low",
      "why": "Valkyries vs. Dream 34 mi away, same hours."
    },
    "draw": {
      "count": 70624,
      "low": 70556,
      "high": 70798
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-19-espn-valkyries-401918306",
    "date": "2026-10-19",
    "start": "17:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "49ers vs. Commanders 34 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-22-tm-G5vYZ_FDGjC3K",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-espn-stanford-football-401858272",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Warriors vs. Grizzlies 26 mi away, same hours."
    },
    "draw": {
      "count": 23215,
      "low": 20029,
      "high": 28576
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-espn-warriors-401909850",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Stanford vs. NC State 26 mi away, same hours."
    },
    "draw": {
      "count": 18064,
      "low": 18064,
      "high": 18064
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-tm-G5vYZ_FDGqm3_",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Stanford vs. NC State and Warriors vs. Grizzlies 16 mi away, same hours."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-23-tm-Z7r9jZ1A70kkF",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Stanford vs. NC State and Disney On Ice presents Find Your Hero 22 mi away, same hours."
    },
    "draw": {
      "count": 11170
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-24-tm-G5vYZ_FDGrm3O",
    "date": "2026-10-24",
    "start": "11:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-24-tm-G5vYZ_FTZ_iUu",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 9405
    }
  },
  {
    "metroId": "bay-area",
    "eventId": "2026-10-25-tm-G5vYZ_FDGNm3T",
    "date": "2026-10-25",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:23:08.981Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-14-espn-celtics-401898405",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 19156,
      "low": 19156,
      "high": 19156
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-16-espn-boston-legacy-fc-401854091",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 9847,
      "low": 8557,
      "high": 10163
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-17-espn-bc-football-401858267",
    "date": "2026-10-17",
    "start": "12:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Low",
      "why": "Harvard vs. Holy Cross 3.0 mi away, same hours."
    },
    "draw": {
      "count": 33274,
      "low": 32413,
      "high": 34705
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-17-espn-harvard-football-401867841",
    "date": "2026-10-17",
    "start": "13:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Boston College vs. Pitt 3.0 mi away, same hours."
    },
    "draw": {
      "count": 7678,
      "low": 6950,
      "high": 12244
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-17-espn-revolution-761879",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 21037,
      "low": 18203,
      "high": 24718
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-18-espn-patriots-401873001",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 64628,
      "low": 64628,
      "high": 64628
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-22-espn-bruins-401892552",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 17850,
      "low": 17850,
      "high": 17850
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-23-espn-celtics-401909095",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 19156,
      "low": 19156,
      "high": 19156
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-24-espn-bruins-401892568",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Harvard vs. Princeton 3.3 mi away, same hours."
    },
    "draw": {
      "count": 17850,
      "low": 17850,
      "high": 17850
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-24-espn-harvard-football-401867842",
    "date": "2026-10-24",
    "start": "15:00",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Bruins vs. Sharks 3.3 mi away, same hours."
    },
    "draw": {
      "count": 7678,
      "low": 6950,
      "high": 12244
    }
  },
  {
    "metroId": "boston",
    "eventId": "2026-10-26-espn-celtics-401909870",
    "date": "2026-10-26",
    "start": "19:30",
    "capturedAt": "2026-10-12T06:27:57.880Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 19156,
      "low": 19156,
      "high": 19156
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-07-espn-bulls-401908939",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Moderate",
      "why": "White Sox vs. Guardians 4.1 mi away, back to back."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-07-mlb-849833",
    "date": "2026-10-07",
    "start": "15:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.1,
      "friction": "Low",
      "why": "Bulls vs. Suns 4.1 mi away, back to back."
    },
    "draw": {
      "count": 40615,
      "low": 35376,
      "high": 40615
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-08-mlb-849832",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 40615,
      "low": 35376,
      "high": 40615
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-08-tm-vv1A7Zko_GkdGJoO2",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "White Sox vs. Guardians 4.1 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-08-tm-vvG18Z_1BHCnVF",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "White Sox vs. Guardians 18 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-espn-bulls-401908940",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Zach Top 14 mi away, same hours."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-tm-vv1kvZv0PoGA2h9X8",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Heavy",
      "why": "Zach Top 12 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-tm-vvG18Z_1XRAjum",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Shaboozey and Bulls vs. Grizzlies 12 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-blackhawks-401892476",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. NYCFC and Northwestern vs. Ball State 3.2 mi away, back to back."
    },
    "draw": {
      "count": 18635,
      "low": 18336,
      "high": 19779
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-chicago-fire-761846",
    "date": "2026-10-10",
    "start": "13:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Northwestern vs. Ball State 15 mi away, same hours."
    },
    "draw": {
      "count": 21769,
      "low": 17409,
      "high": 24272
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-northwestern-football-401858482",
    "date": "2026-10-10",
    "start": "11:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. NYCFC 15 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-ht-chicago-wolves-1029110",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 3.3
    },
    "draw": {
      "count": 4427,
      "low": 4365,
      "high": 4882
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-tm-vv1A7Zk36GkdsK2Za",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Blackhawks vs. Hurricanes 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkYeTUOa",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "In This Moment 6.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vvG18Z_5RmHt8s",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Olivia Rodrigo 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-12-tm-vv178Z_aGkMlEBGy",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-espn-blackhawks-401892496",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 6.2 mi away, same hours."
    },
    "draw": {
      "count": 16549,
      "low": 15541,
      "high": 18105
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-tm-vv1A7ZkoyGkdaJQVG",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Blackhawks vs. Penguins 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-espn-chicago-fire-761869",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "The Smashing Pumpkins 3.2 mi away, same hours."
    },
    "draw": {
      "count": 16130,
      "low": 13369,
      "high": 19103
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-tm-vvG18Z_1DaaHeF",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Fire vs. Philadelphia 3.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-15-espn-blackhawks-401892512",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 16161,
      "low": 15177,
      "high": 17681
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-espn-bulls-401908943",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-espn-blackhawks-401892528",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Wolves vs. Wild 14 mi away, same hours."
    },
    "draw": {
      "count": 19093,
      "low": 18787,
      "high": 20265
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-ht-chicago-wolves-1029151",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars 14 mi away, same hours."
    },
    "draw": {
      "count": 5486,
      "low": 5409,
      "high": 6049
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv17jZ_8GkmcT72q",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars 3.3 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7Zk3bGkeUJi-K",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-espn-chicago-stars-401854026",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Wolves vs. Wild 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-ht-chicago-wolves-1029162",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Reign 12 mi away, same hours."
    },
    "draw": {
      "count": 8046,
      "low": 6649,
      "high": 9415
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-19-tm-vv178Z_kGkRLKIPC",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv178Z_kGkTlVyFY",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:00.107Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-08-mlb-849832",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 40615,
      "low": 35376,
      "high": 40615
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-08-tm-vv1A7Zko_GkdGJoO2",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "White Sox vs. Guardians 4.1 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-08-tm-vvG18Z_1BHCnVF",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "White Sox vs. Guardians 18 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-espn-bulls-401908940",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Zach Top 14 mi away, same hours."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-tm-vv1kvZv0PoGA2h9X8",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Heavy",
      "why": "Zach Top 12 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-tm-vvG18Z_1XRAjum",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Shaboozey and Bulls vs. Grizzlies 12 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-blackhawks-401892476",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. NYCFC and Northwestern vs. Ball State 3.2 mi away, back to back."
    },
    "draw": {
      "count": 18635,
      "low": 18336,
      "high": 19779
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-chicago-fire-761846",
    "date": "2026-10-10",
    "start": "13:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Northwestern vs. Ball State 15 mi away, same hours."
    },
    "draw": {
      "count": 21769,
      "low": 17409,
      "high": 24272
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-northwestern-football-401858482",
    "date": "2026-10-10",
    "start": "11:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. NYCFC 15 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-ht-chicago-wolves-1029110",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 3.3
    },
    "draw": {
      "count": 4427,
      "low": 4365,
      "high": 4882
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-tm-vv1A7Zk36GkdsK2Za",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Blackhawks vs. Hurricanes 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkYeTUOa",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "In This Moment 6.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vvG18Z_5RmHt8s",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Olivia Rodrigo 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-12-tm-vv178Z_aGkMlEBGy",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-espn-blackhawks-401892496",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 6.2 mi away, same hours."
    },
    "draw": {
      "count": 16549,
      "low": 15541,
      "high": 18105
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-tm-vv1A7ZkoyGkdaJQVG",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Blackhawks vs. Penguins 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-espn-chicago-fire-761869",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 7:30 pm start."
    },
    "draw": {
      "count": 16130,
      "low": 13369,
      "high": 19103
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-tm-vvG18Z_1DaaHeF",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. Philadelphia 3.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-15-espn-blackhawks-401892512",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 16161,
      "low": 15177,
      "high": 17681
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-espn-bulls-401908943",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-espn-blackhawks-401892528",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Wolves vs. Wild 14 mi away, same hours."
    },
    "draw": {
      "count": 19093,
      "low": 18787,
      "high": 20265
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-ht-chicago-wolves-1029151",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars 14 mi away, same hours."
    },
    "draw": {
      "count": 5486,
      "low": 5409,
      "high": 6049
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv17jZ_8GkmcT72q",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars 3.3 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7Zk3bGkeUJi-K",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-espn-chicago-stars-401854026",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Wolves vs. Wild 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-ht-chicago-wolves-1029162",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Reign 12 mi away, same hours."
    },
    "draw": {
      "count": 8046,
      "low": 6649,
      "high": 9415
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-19-tm-vv178Z_kGkRLKIPC",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv178Z_kGkTlVyFY",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-espn-bears-401873010",
    "date": "2026-10-22",
    "start": "19:15",
    "capturedAt": "2026-10-08T14:40:04.099Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 59307,
      "low": 58102,
      "high": 61200
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-espn-bulls-401908940",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Zach Top 14 mi away, same hours."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-tm-vv1kvZv0PoGA2h9X8",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Heavy",
      "why": "Zach Top 12 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-09-tm-vvG18Z_1XRAjum",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Shaboozey and Bulls vs. Grizzlies 12 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-blackhawks-401892476",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. NYCFC and Northwestern vs. Ball State 3.2 mi away, back to back."
    },
    "draw": {
      "count": 18635,
      "low": 18336,
      "high": 19779
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-chicago-fire-761846",
    "date": "2026-10-10",
    "start": "13:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Northwestern vs. Ball State 15 mi away, same hours."
    },
    "draw": {
      "count": 21769,
      "low": 17409,
      "high": 24272
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-northwestern-football-401858482",
    "date": "2026-10-10",
    "start": "11:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Fire vs. NYCFC 15 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-ht-chicago-wolves-1029110",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 3.3
    },
    "draw": {
      "count": 4427,
      "low": 4365,
      "high": 4882
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-tm-vv1A7Zk36GkdsK2Za",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Blackhawks vs. Hurricanes 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkYeTUOa",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "In This Moment 6.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vvG18Z_5RmHt8s",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Olivia Rodrigo 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-12-tm-vv178Z_aGkMlEBGy",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-espn-blackhawks-401892496",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 6.2 mi away, same hours."
    },
    "draw": {
      "count": 16549,
      "low": 15541,
      "high": 18105
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-tm-vv1A7ZkoyGkdaJQVG",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Blackhawks vs. Penguins 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-espn-chicago-fire-761869",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "The Smashing Pumpkins 3.2 mi away, same hours."
    },
    "draw": {
      "count": 16130,
      "low": 13369,
      "high": 19103
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-tm-vvG18Z_1DaaHeF",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Fire vs. Philadelphia 3.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-15-espn-blackhawks-401892512",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 16161,
      "low": 15177,
      "high": 17681
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-espn-bulls-401908943",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18704,
      "low": 17218,
      "high": 19975
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-espn-blackhawks-401892528",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Wolves vs. Wild 14 mi away, same hours."
    },
    "draw": {
      "count": 19093,
      "low": 18787,
      "high": 20265
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-ht-chicago-wolves-1029151",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars 14 mi away, same hours."
    },
    "draw": {
      "count": 5486,
      "low": 5409,
      "high": 6049
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv17jZ_8GkmcT72q",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars 3.3 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7Zk3bGkeUJi-K",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-espn-chicago-stars-401854026",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Wolves vs. Wild 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-ht-chicago-wolves-1029162",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Reign 12 mi away, same hours."
    },
    "draw": {
      "count": 8046,
      "low": 6649,
      "high": 9415
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-19-tm-vv178Z_kGkRLKIPC",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv178Z_kGkTlVyFY",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-espn-bears-401873010",
    "date": "2026-10-22",
    "start": "19:15",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 59307,
      "low": 58102,
      "high": 61200
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-tm-vv178Z_8GkymMwt7",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Bears vs. Patriots 17 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-espn-blackhawks-401892564",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Stars vs. Houston 12 mi away, same hours."
    },
    "draw": {
      "count": 19664,
      "low": 19125,
      "high": 20237
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-espn-chicago-stars-401854027",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:19.852Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Blackhawks vs. Canadiens 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-blackhawks-401892476",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Fire vs. NYCFC and Northwestern vs. Ball State 3.2 mi away, back to back."
    },
    "draw": {
      "count": 18635,
      "low": 18336,
      "high": 19779
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-chicago-fire-761846",
    "date": "2026-10-10",
    "start": "13:30",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Northwestern vs. Ball State 15 mi away, same hours."
    },
    "draw": {
      "count": 20636,
      "low": 17801,
      "high": 25703
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-espn-northwestern-football-401858482",
    "date": "2026-10-10",
    "start": "11:30",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Fire vs. NYCFC 15 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-10-ht-chicago-wolves-1029110",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 2.9
    },
    "draw": {
      "count": 4626,
      "low": 4561,
      "high": 5101
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkSQEZBj",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Moderate",
      "why": "Olivia Rodrigo 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkYeTUOa",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "In This Moment and Interpol 6.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vvG18Z_5RmHt8s",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Moderate",
      "why": "Olivia Rodrigo 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-12-tm-vv178Z_aGkMlEBGy",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-espn-blackhawks-401892496",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 6.2 mi away, same hours."
    },
    "draw": {
      "count": 16549,
      "low": 15541,
      "high": 18105
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-tm-vv1A7ZkoyGkdaJQVG",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Blackhawks vs. Penguins 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-espn-chicago-fire-761869",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "The Smashing Pumpkins 3.2 mi away, same hours."
    },
    "draw": {
      "count": 20636,
      "low": 17764,
      "high": 26752
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-tm-vvG18Z_1DaaHeF",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "Fire vs. Philadelphia 3.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-15-espn-blackhawks-401892512",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 16339,
      "low": 15344,
      "high": 17875
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-espn-bulls-401908943",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Summer Walker and Tinashe 1.0 mi away, same hours."
    },
    "draw": {
      "count": 17573,
      "low": 16790,
      "high": 19585
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-tm-vvG18Z_2KAhHGE",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Summer Walker 2.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-tm-vvG18Z_urOiEcT",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Tinashe 2.2 mi away, same hours."
    },
    "draw": {
      "count": 5871
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-espn-blackhawks-401892528",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Wolves vs. Wild 14 mi away, same hours."
    },
    "draw": {
      "count": 19093,
      "low": 18787,
      "high": 20265
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-ht-chicago-wolves-1029151",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars 14 mi away, same hours."
    },
    "draw": {
      "count": 5552,
      "low": 5474,
      "high": 6122
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv17jZ_8GkmcT72q",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars 3.3 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7Zk3bGkeUJi-K",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7ZkosGkdTKD4f",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-espn-chicago-stars-401854026",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Wolves vs. Wild 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-ht-chicago-wolves-1029162",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Stars vs. Reign 12 mi away, same hours."
    },
    "draw": {
      "count": 8143,
      "low": 6730,
      "high": 9528
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-tm-vvG18Z_1LP_k-A",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Stars vs. Reign and Wolves vs. Wild 10 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-19-tm-vv178Z_kGkRLKIPC",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-20-tm-vv1A7ZkfdGkdS8vZJ",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv178Z_kGkTlVyFY",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "The Black Keys 14 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv1A7ZkfdGkdwgOWF",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Disney Worlds Collide Concert Tour 14 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-espn-bears-401873010",
    "date": "2026-10-22",
    "start": "19:15",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 59248,
      "low": 58044,
      "high": 61139
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-tm-vv178Z_8GkymMwt7",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Bears vs. Patriots 17 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-tm-vv178Z_aGkSV90pF",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Bears vs. Patriots 3.7 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-espn-blackhawks-401892564",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Stars vs. Houston 12 mi away, same hours."
    },
    "draw": {
      "count": 19664,
      "low": 19125,
      "high": 20237
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-espn-chicago-stars-401854027",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Blackhawks vs. Canadiens 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-tm-vv1A7ZkoMGkeB3pBb",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Blackhawks vs. Canadiens and Stars vs. Houston 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-tm-vvG18Z_GSvXicw",
    "date": "2026-10-23",
    "start": "21:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Blackhawks vs. Canadiens and Stars vs. Houston 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-espn-bulls-401909857",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Northwestern vs. Rutgers 13 mi away, back to back."
    },
    "draw": {
      "count": 21144,
      "low": 20495,
      "high": 21428
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-espn-northwestern-football-401858498",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Low",
      "why": "Bulls vs. Wizards 13 mi away, back to back."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-ht-chicago-wolves-1029189",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Heavy",
      "why": "Bulls vs. Wizards 14 mi away, same hours."
    },
    "draw": {
      "count": 6201,
      "low": 6115,
      "high": 6839
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-tm-vv1A7ZkoVGkewnMGL",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Bulls vs. Wizards 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-tm-vvG18Z_2XNUFcP",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:44.906Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Bulls vs. Wizards 31 mi away, same hours."
    },
    "draw": {
      "count": 6394
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkSQEZBj",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Moderate",
      "why": "Olivia Rodrigo 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vv178Z_aGkYeTUOa",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "In This Moment and Interpol 6.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-11-tm-vvG18Z_5RmHt8s",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Moderate",
      "why": "Olivia Rodrigo 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-12-tm-vv178Z_aGkMlEBGy",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-espn-blackhawks-401892496",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Jessie Ware 6.2 mi away, same hours."
    },
    "draw": {
      "count": 16549,
      "low": 15541,
      "high": 18105
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-13-tm-vv1A7ZkoyGkdaJQVG",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Blackhawks vs. Penguins 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-espn-chicago-fire-761869",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "The Smashing Pumpkins 3.2 mi away, same hours."
    },
    "draw": {
      "count": 20636,
      "low": 17764,
      "high": 26752
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-14-tm-vvG18Z_1DaaHeF",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "Fire vs. Philadelphia 3.2 mi away, same hours."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-15-espn-blackhawks-401892512",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 16339,
      "low": 15344,
      "high": 17875
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-espn-bulls-401908943",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Summer Walker and Tinashe 1.0 mi away, same hours."
    },
    "draw": {
      "count": 17573,
      "low": 16790,
      "high": 19585
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-tm-vvG18Z_2KAhHGE",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Summer Walker 2.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-16-tm-vvG18Z_urOiEcT",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Tinashe 2.2 mi away, same hours."
    },
    "draw": {
      "count": 5871
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-espn-blackhawks-401892528",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Wolves vs. Wild 14 mi away, same hours."
    },
    "draw": {
      "count": 19093,
      "low": 18787,
      "high": 20265
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-ht-chicago-wolves-1029151",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars 14 mi away, same hours."
    },
    "draw": {
      "count": 5552,
      "low": 5474,
      "high": 6122
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv17jZ_8GkmcT72q",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Blackhawks vs. Stars 3.3 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7Zk3bGkeUJi-K",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-17-tm-vv1A7ZkosGkdTKD4f",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Heavy",
      "why": "Blackhawks vs. Stars and Sweetest Day Comedy Jam 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-espn-chicago-stars-401854026",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Wolves vs. Wild 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-ht-chicago-wolves-1029162",
    "date": "2026-10-18",
    "start": "15:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Stars vs. Reign 12 mi away, same hours."
    },
    "draw": {
      "count": 8143,
      "low": 6730,
      "high": 9528
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-18-tm-vvG18Z_1LP_k-A",
    "date": "2026-10-18",
    "start": "18:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Stars vs. Reign and Wolves vs. Wild 10 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-19-tm-vv178Z_kGkRLKIPC",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 13395
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-20-tm-vv1A7ZkfdGkdS8vZJ",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv178Z_kGkTlVyFY",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "The Black Keys 14 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-21-tm-vv1A7ZkfdGkdwgOWF",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Disney Worlds Collide Concert Tour 14 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-espn-bears-401873010",
    "date": "2026-10-22",
    "start": "19:15",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 59248,
      "low": 58044,
      "high": 61139
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-tm-vv178Z_8GkymMwt7",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Bears vs. Patriots 17 mi away, same hours."
    },
    "draw": {
      "count": 10545
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-22-tm-vv178Z_aGkSV90pF",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Bears vs. Patriots 3.7 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-espn-blackhawks-401892564",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Low",
      "why": "Stars vs. Houston 12 mi away, same hours."
    },
    "draw": {
      "count": 19664,
      "low": 19125,
      "high": 20237
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-espn-chicago-stars-401854027",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Blackhawks vs. Canadiens 12 mi away, same hours."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-tm-vv1A7ZkoMGkeB3pBb",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Blackhawks vs. Canadiens and Stars vs. Houston 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-23-tm-vvG18Z_GSvXicw",
    "date": "2026-10-23",
    "start": "21:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.9,
      "friction": "Moderate",
      "why": "Blackhawks vs. Canadiens and Stars vs. Houston 6.2 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-espn-bulls-401909857",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Northwestern vs. Rutgers 13 mi away, back to back."
    },
    "draw": {
      "count": 21144,
      "low": 20495,
      "high": 21428
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-espn-northwestern-football-401858498",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Low",
      "why": "Bulls vs. Wizards 13 mi away, back to back."
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-ht-chicago-wolves-1029189",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Heavy",
      "why": "Bulls vs. Wizards 14 mi away, same hours."
    },
    "draw": {
      "count": 6201,
      "low": 6115,
      "high": 6839
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-tm-vv1A7ZkoVGkewnMGL",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Bulls vs. Wizards 2.0 mi away, same hours."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-24-tm-vvG18Z_2XNUFcP",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Bulls vs. Wizards 31 mi away, same hours."
    },
    "draw": {
      "count": 6394
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-25-espn-blackhawks-401892578",
    "date": "2026-10-25",
    "start": "14:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 19410,
      "low": 18629,
      "high": 20131
    }
  },
  {
    "metroId": "chicago",
    "eventId": "2026-10-25-tm-vvG18Z_GR6IX5F",
    "date": "2026-10-25",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:05.560Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Blackhawks vs. Panthers 2.0 mi away, back to back."
    },
    "draw": {
      "count": 5000
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-13-espn-blue-jackets-401892489",
    "date": "2026-10-13",
    "start": "18:15",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 15902,
      "low": 15141,
      "high": 16694
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-14-espn-columbus-crew-761865",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 19624,
      "low": 19615,
      "high": 19982
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-17-espn-blue-jackets-401892527",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 16009,
      "low": 15566,
      "high": 16443
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-20-espn-blue-jackets-401892543",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 16027,
      "low": 15261,
      "high": 16826
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-23-espn-osu-mhockey-401904519",
    "date": "2026-10-23",
    "start": "18:30",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-24-espn-blue-jackets-401892572",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.6,
      "friction": "Moderate",
      "why": "Ohio State Buckeyes vs. Augustana (SD) 2.8 mi away, same hours."
    },
    "draw": {
      "count": 16300,
      "low": 15849,
      "high": 16742
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-24-espn-columbus-crew-761890",
    "date": "2026-10-24",
    "start": "15:30",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.6,
      "friction": "Low",
      "why": "Ohio State Buckeyes vs. Augustana (SD) and Blue Jackets vs. Golden Knights 2.7 mi away, same hours."
    },
    "draw": {
      "count": 19907,
      "low": 19765,
      "high": 19932
    }
  },
  {
    "metroId": "columbus",
    "eventId": "2026-10-24-espn-osu-mhockey-401904520",
    "date": "2026-10-24",
    "start": "17:00",
    "capturedAt": "2026-10-12T08:16:13.746Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.6,
      "friction": "Moderate",
      "why": "Blue Jackets vs. Golden Knights 2.8 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-07-tm-vvG1YZ_aE4su5L",
    "date": "2026-10-07",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Moderate",
      "why": "The Red Clay Strays next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-07-tm-vvG1YZ_F0exkqy",
    "date": "2026-10-07",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Moderate",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-espn-cowboys-401872980",
    "date": "2026-10-08",
    "start": "19:15",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 92778,
      "low": 92493,
      "high": 93069
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-state-fair-texas",
    "date": "2026-10-08",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-vvG1YZ_5jmmTtC",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Cowboys vs. Buccaneers 12 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-vvG1YZ_aEpIW8P",
    "date": "2026-10-08",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "The Red Clay Strays and Cowboys vs. Buccaneers next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-vvG1YZ_F0kF9e_",
    "date": "2026-10-08",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-Z7r9jZ1A7xffE",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Cowboys vs. Buccaneers 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-state-fair-texas",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_A5O90yi",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_AQxX4ND",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Brooks & Dunn next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_GXxf4BI",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Metaphor: ReFantazio Orchestra Concert 7.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-Z7r9jZ1A7-P0Z",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "ROLE MODEL 7.7 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-Z7r9jZ1AAvs7a",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Brooks & Dunn 45 mi away, same hours."
    },
    "draw": {
      "count": 3910
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-espn-unt-football-401862796",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Texas vs. Oklahoma (Red River Showdown) 37 mi away, same hours."
    },
    "draw": {
      "count": 20600,
      "low": 16966,
      "high": 23617
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-red-river-showdown",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "97° feels-like at a 2:30 pm start, no roof."
    },
    "draw": {
      "count": 92100
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-state-fair-texas",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Low",
      "why": "Texas vs. Oklahoma (Red River Showdown) next door, back to back."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_A5Ob0BJ",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Extreme",
      "why": "Kacey Musgraves and Dickies Arena Suites 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_AQxT40G",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves and Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_awGIEBP",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZbzcSof7Q",
    "date": "2026-10-10",
    "start": "09:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Moderate",
      "why": "State Fair of Texas 25 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-kuK",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves and Dickies Arena Suites 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-state-fair-texas",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_1DmMqf5",
    "date": "2026-10-11",
    "start": "20:15",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Kacey Musgraves and Dickies Arena Suites 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_A2e5hg5",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "CeCe Winans next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_AChebu0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_awL1QUZ",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and CeCe Winans 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-state-fair-texas",
    "date": "2026-10-12",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7w4jzz2",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Breaking Benjamin next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7whjaQV",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_axJRhSo",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and Breaking Benjamin 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-espn-dallas-stars-401892498",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "ARTMS 10 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-state-fair-texas",
    "date": "2026-10-13",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-tm-Z7r9jZ1AAZvu_",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Avalanche 10 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-fc-dallas-761867",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "Mavericks vs. Pelicans 25 mi away, same hours."
    },
    "draw": {
      "count": 15110,
      "low": 11004,
      "high": 19096
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-mavericks-401901825",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "FC Dallas vs. Sounders 25 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-state-fair-texas",
    "date": "2026-10-14",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-tm-vvG1YZ_6J3Sk_V",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "92° feels-like at a 7:30 pm start, no roof."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-state-fair-texas",
    "date": "2026-10-15",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_13XPlXI",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 17 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_FCbXFze",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7Ptqe",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7xfrb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "89° feels-like at a 7:00 pm start, no roof."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-espn-mavericks-401898408",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and Gorillaz 33 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-state-fair-texas",
    "date": "2026-10-16",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_ARabXTr",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Gorillaz and Modest Mouse next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_axCfz2I",
    "date": "2026-10-16",
    "start": "20:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Mavericks vs. Hawks and Dickies Arena Suites 21 mi away, same hours."
    },
    "draw": {
      "count": 3420
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_dxO-E0O",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_FB_UM69",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Gorillaz 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-espn-smu-football-401858268",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Low",
      "why": "State Fair of Texas 4.3 mi away, same hours."
    },
    "draw": {
      "count": 30654,
      "low": 25727,
      "high": 32750
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-state-fair-texas",
    "date": "2026-10-17",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Low",
      "why": "SMU vs. Virginia 4.3 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_5m3Hz7t",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Extreme",
      "why": "Weezer and Dickies Arena Suites 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G3pCUqa",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer and Phoebe Bridgers 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G6EbQDb",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Extreme",
      "why": "Weezer and Dickies Arena Suites 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_kMvOnlG",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Phoebe Bridgers 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-Z7r9jZ1A70IuO",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer and Dickies Arena Suites 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-state-fair-texas",
    "date": "2026-10-18",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_aSPl9Lu",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Sombr 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_FN5kiFV",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Foster the People 9.7 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-20-espn-dallas-stars-401892545",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-21-tm-vvG1YZ_kYCNL4e",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:11.270Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-espn-cowboys-401872980",
    "date": "2026-10-08",
    "start": "19:15",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 92778,
      "low": 92493,
      "high": 93069
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-state-fair-texas",
    "date": "2026-10-08",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-vvG1YZ_5jmmTtC",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Cowboys vs. Buccaneers 12 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-vvG1YZ_aEpIW8P",
    "date": "2026-10-08",
    "start": "18:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "The Red Clay Strays and Cowboys vs. Buccaneers next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-vvG1YZ_F0kF9e_",
    "date": "2026-10-08",
    "start": "18:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-08-tm-Z7r9jZ1A7xffE",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Cowboys vs. Buccaneers 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-state-fair-texas",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_A5O90yi",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_AQxX4ND",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "Brooks & Dunn next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_GXxf4BI",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Metaphor: ReFantazio Orchestra Concert 7.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-Z7r9jZ1A7-P0Z",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "ROLE MODEL 7.7 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-Z7r9jZ1AAvs7a",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Brooks & Dunn 45 mi away, same hours."
    },
    "draw": {
      "count": 3910
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-espn-unt-football-401862796",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Texas vs. Oklahoma (Red River Showdown) 37 mi away, same hours."
    },
    "draw": {
      "count": 20600,
      "low": 16966,
      "high": 23617
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-red-river-showdown",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "97° feels-like at a 2:30 pm start, no roof."
    },
    "draw": {
      "count": 92100
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-state-fair-texas",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Low",
      "why": "Texas vs. Oklahoma (Red River Showdown) next door, back to back."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_A5Ob0BJ",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Extreme",
      "why": "Kacey Musgraves and Dickies Arena Suites 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_AQxT40G",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves and Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_awGIEBP",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZbzcSof7Q",
    "date": "2026-10-10",
    "start": "09:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Moderate",
      "why": "State Fair of Texas 25 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-kuK",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves and Dickies Arena Suites 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-state-fair-texas",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_1DmMqf5",
    "date": "2026-10-11",
    "start": "20:15",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Kacey Musgraves and Dickies Arena Suites 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_A2e5hg5",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "CeCe Winans next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_AChebu0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_awL1QUZ",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and CeCe Winans 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-state-fair-texas",
    "date": "2026-10-12",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7w4jzz2",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Breaking Benjamin next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7whjaQV",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_axJRhSo",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and Breaking Benjamin 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-espn-dallas-stars-401892498",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "ARTMS 10 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-state-fair-texas",
    "date": "2026-10-13",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-tm-Z7r9jZ1AAZvu_",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Avalanche 10 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-fc-dallas-761867",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "Mavericks vs. Pelicans 25 mi away, same hours."
    },
    "draw": {
      "count": 15110,
      "low": 11004,
      "high": 19096
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-mavericks-401901825",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "FC Dallas vs. Sounders 25 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-state-fair-texas",
    "date": "2026-10-14",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-tm-vvG1YZ_6J3Sk_V",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "Mavericks vs. Pelicans and FC Dallas vs. Sounders 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-state-fair-texas",
    "date": "2026-10-15",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_13XPlXI",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 17 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_FCbXFze",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7Ptqe",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7xfrb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "87° feels-like at a 7:00 pm start, no roof."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-espn-mavericks-401898408",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and Gorillaz 33 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-state-fair-texas",
    "date": "2026-10-16",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_ARabXTr",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Gorillaz and Modest Mouse next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_axCfz2I",
    "date": "2026-10-16",
    "start": "20:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Mavericks vs. Hawks and Dickies Arena Suites 21 mi away, same hours."
    },
    "draw": {
      "count": 3420
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_dxO-E0O",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_FB_UM69",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Gorillaz 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-espn-smu-football-401858268",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Low",
      "why": "State Fair of Texas 4.3 mi away, same hours."
    },
    "draw": {
      "count": 30654,
      "low": 25727,
      "high": 32750
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-state-fair-texas",
    "date": "2026-10-17",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Low",
      "why": "SMU vs. Virginia 4.3 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_5m3Hz7t",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Extreme",
      "why": "Weezer and Dickies Arena Suites 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G3pCUqa",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer and Phoebe Bridgers 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G6EbQDb",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Extreme",
      "why": "Weezer and Dickies Arena Suites 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_kMvOnlG",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Phoebe Bridgers 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-Z7r9jZ1A70IuO",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer and Dickies Arena Suites 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-state-fair-texas",
    "date": "2026-10-18",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_aSPl9Lu",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Sombr 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_FN5kiFV",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Foster the People 9.7 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-20-espn-dallas-stars-401892545",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-21-tm-vvG1YZ_kYCNL4e",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-espn-dallas-stars-401892559",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Dan + Shay 3.3 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_1THOo6h",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Stars vs. Winnipeg Jets 3.3 mi away, same hours."
    },
    "draw": {
      "count": 20000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_GKlGiGR",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:17.095Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dan + Shay and Stars vs. Winnipeg Jets 13 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-state-fair-texas",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_A5O90yi",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_AQxX4ND",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Brooks & Dunn next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-vvG1YZ_GXxf4BI",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Metaphor: ReFantazio Orchestra Concert 7.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-09-tm-Z7r9jZ1A7-P0Z",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "ROLE MODEL 7.7 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-espn-unt-football-401862796",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Texas vs. Oklahoma (Red River Showdown) 37 mi away, same hours."
    },
    "draw": {
      "count": 20600,
      "low": 16966,
      "high": 23617
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-red-river-showdown",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "97° feels-like at a 2:30 pm start, no roof."
    },
    "draw": {
      "count": 92100
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-state-fair-texas",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Low",
      "why": "Texas vs. Oklahoma (Red River Showdown) next door, back to back."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_A5Ob0BJ",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Extreme",
      "why": "Kacey Musgraves and Dickies Arena Suites 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_AQxT40G",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves and Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_awGIEBP",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZbzcSof7Q",
    "date": "2026-10-10",
    "start": "09:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Moderate",
      "why": "State Fair of Texas 25 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-kuK",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves and Dickies Arena Suites 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-state-fair-texas",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_1DmMqf5",
    "date": "2026-10-11",
    "start": "20:15",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Kacey Musgraves and Dickies Arena Suites 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_A2e5hg5",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "CeCe Winans next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_AChebu0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_awL1QUZ",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and CeCe Winans 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-state-fair-texas",
    "date": "2026-10-12",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7w4jzz2",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Breaking Benjamin next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7whjaQV",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_axJRhSo",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and Breaking Benjamin 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-espn-dallas-stars-401892498",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "ARTMS 10 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-state-fair-texas",
    "date": "2026-10-13",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-tm-Z7r9jZ1AAZvu_",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Avalanche 10 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-fc-dallas-761867",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "Mavericks vs. Pelicans 25 mi away, same hours."
    },
    "draw": {
      "count": 15110,
      "low": 11004,
      "high": 19096
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-mavericks-401901825",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "FC Dallas vs. Sounders 25 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-state-fair-texas",
    "date": "2026-10-14",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-tm-vvG1YZ_6J3Sk_V",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "91° feels-like at a 7:30 pm start, no roof."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-state-fair-texas",
    "date": "2026-10-15",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_13XPlXI",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 17 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_FCbXFze",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7Ptqe",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7xfrb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "88° feels-like at a 7:00 pm start, no roof."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-espn-mavericks-401898408",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "Dickies Arena Suites and Gorillaz 33 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-state-fair-texas",
    "date": "2026-10-16",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_ARabXTr",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Gorillaz and Modest Mouse next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_axCfz2I",
    "date": "2026-10-16",
    "start": "20:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Mavericks vs. Hawks and Dickies Arena Suites 21 mi away, same hours."
    },
    "draw": {
      "count": 3420
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_dxO-E0O",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites next door, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_FB_UM69",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Gorillaz 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-espn-smu-football-401858268",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Low",
      "why": "State Fair of Texas 4.3 mi away, same hours."
    },
    "draw": {
      "count": 30654,
      "low": 25727,
      "high": 32750
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-state-fair-texas",
    "date": "2026-10-17",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Low",
      "why": "SMU vs. Virginia 4.3 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_5m3Hz7t",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Extreme",
      "why": "Weezer and Dickies Arena Suites 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G3pCUqa",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer and Phoebe Bridgers 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G6EbQDb",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Extreme",
      "why": "Weezer and Dickies Arena Suites 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_kMvOnlG",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Dickies Arena Suites and Phoebe Bridgers 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-Z7r9jZ1A70IuO",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.7,
      "friction": "Heavy",
      "why": "Weezer and Dickies Arena Suites 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-state-fair-texas",
    "date": "2026-10-18",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_aSPl9Lu",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Sombr 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_FN5kiFV",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Foster the People 9.7 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-20-espn-dallas-stars-401892545",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-21-tm-vvG1YZ_kYCNL4e",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-espn-dallas-stars-401892559",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Dan + Shay 3.3 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_1THOo6h",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Stars vs. Winnipeg Jets 3.3 mi away, same hours."
    },
    "draw": {
      "count": 20000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_GKlGiGR",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dan + Shay and Stars vs. Winnipeg Jets 13 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-23-tm-vvG1YZ_2eFh0ES",
    "date": "2026-10-23",
    "start": "12:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-23-tm-Z7r9jZ1A7-oZS",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:32.427Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-espn-unt-football-401862796",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "99° feels-like at a 2:30 pm start, no roof."
    },
    "draw": {
      "count": 20600,
      "low": 16966,
      "high": 23617
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-red-river-showdown",
    "date": "2026-10-10",
    "start": "14:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "100° feels-like at a 2:30 pm start, no roof."
    },
    "draw": {
      "count": 92100
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-state-fair-texas",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Low",
      "why": "Texas vs. Oklahoma (Red River Showdown) next door, back to back."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_A5Ob0BJ",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Heavy",
      "why": "Kacey Musgraves 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZ_awGIEBP",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Moderate",
      "why": "Brooks & Dunn 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-10-tm-vvG1YZbzcSof7Q",
    "date": "2026-10-10",
    "start": "09:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8.5,
      "friction": "Moderate",
      "why": "State Fair of Texas 25 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-state-fair-texas",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_1DmMqf5",
    "date": "2026-10-11",
    "start": "20:15",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kacey Musgraves and CeCe Winans 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_AChebu0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kacey Musgraves 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_awL1QUZ",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "CeCe Winans and Wave To Earth 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-state-fair-texas",
    "date": "2026-10-12",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7whjaQV",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "G-Eazy 26 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_axJRhSo",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Breaking Benjamin 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-espn-dallas-stars-401892498",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "ARTMS 10 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-state-fair-texas",
    "date": "2026-10-13",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-tm-Z7r9jZ1AAZvu_",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Avalanche 10 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-fc-dallas-761867",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Mavericks vs. Pelicans 25 mi away, same hours."
    },
    "draw": {
      "count": 11004,
      "low": 11004,
      "high": 11004
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-mavericks-401901825",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "FC Dallas vs. Sounders 25 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-state-fair-texas",
    "date": "2026-10-14",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-state-fair-texas",
    "date": "2026-10-15",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_13XPlXI",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 17 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_FCbXFze",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7Ptqe",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7xfrb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "88° feels-like at a 7:00 pm start, no roof."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-espn-mavericks-401898408",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Low",
      "why": "Gorillaz and Modest Mouse 33 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-state-fair-texas",
    "date": "2026-10-16",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_axCfz2I",
    "date": "2026-10-16",
    "start": "20:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Mavericks vs. Hawks and Gorillaz 21 mi away, same hours."
    },
    "draw": {
      "count": 3420
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_dxO-E0O",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Modest Mouse 26 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_FB_UM69",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Gorillaz 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-espn-smu-football-401858268",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Low",
      "why": "State Fair of Texas 4.3 mi away, same hours."
    },
    "draw": {
      "count": 27956,
      "low": 23463,
      "high": 29868
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-state-fair-texas",
    "date": "2026-10-17",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Low",
      "why": "SMU vs. Virginia 4.3 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_5m3Hz7t",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Heavy",
      "why": "Weezer and Phoebe Bridgers 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G6EbQDb",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Heavy",
      "why": "Weezer 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_kMvOnlG",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Moderate",
      "why": "Phoebe Bridgers and Gov't Mule 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-Z7r9jZ1A70IuO",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Moderate",
      "why": "Weezer and Phoebe Bridgers 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-state-fair-texas",
    "date": "2026-10-18",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_aSPl9Lu",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Sombr 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_FN5kiFV",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Foster the People 9.7 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-20-espn-dallas-stars-401892545",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-21-tm-vvG1YZ_kYCNL4e",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-espn-dallas-stars-401892559",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Dan + Shay 3.3 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_1THOo6h",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Stars vs. Winnipeg Jets 3.3 mi away, same hours."
    },
    "draw": {
      "count": 20000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_GKlGiGR",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dan + Shay and Stars vs. Winnipeg Jets 13 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-23-tm-vvG1YZ_2eFh0ES",
    "date": "2026-10-23",
    "start": "12:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-23-tm-Z7r9jZ1A7-oZS",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-fc-dallas-761900",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "Mavericks vs. Spurs 25 mi away, same hours."
    },
    "draw": {
      "count": 11004,
      "low": 11004,
      "high": 11004
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-mavericks-401909858",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "FC Dallas vs. Earthquakes and Ed Sheeran 25 mi away, same hours."
    },
    "draw": {
      "count": 20359,
      "low": 20301,
      "high": 20428
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-smu-football-401858270",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "TCU vs. West Virginia 35 mi away, back to back."
    },
    "draw": {
      "count": 27956,
      "low": 23463,
      "high": 29868
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-tcu-football-401856841",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "SMU vs. California 35 mi away, back to back."
    },
    "draw": {
      "count": 38336,
      "low": 37800,
      "high": 38809
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-vvG1YZ_2eFjVET",
    "date": "2026-10-24",
    "start": "12:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "Sick New World Festival Forth Worth and Sick New World 37 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-vvG1YZ_u1Mvabx",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Extreme",
      "why": "Ed Sheeran 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-vvG1YZbgQetoBB",
    "date": "2026-10-24",
    "start": "12:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "Sick New World Festival Forth Worth next door, same hours."
    },
    "draw": {
      "count": 42750
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7j-_w",
    "date": "2026-10-24",
    "start": "17:30",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "Sick New World 23 mi away, back to back."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7J3uJ",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "Ed Sheeran and Mavericks vs. Spurs 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7q_Jf",
    "date": "2026-10-24",
    "start": "11:00",
    "capturedAt": "2026-10-11T01:02:47.827Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "Sick New World next door, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-state-fair-texas",
    "date": "2026-10-11",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_1DmMqf5",
    "date": "2026-10-11",
    "start": "20:15",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kacey Musgraves and CeCe Winans 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_AChebu0",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kacey Musgraves 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-11-tm-vvG1YZ_awL1QUZ",
    "date": "2026-10-11",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "CeCe Winans and Wave To Earth 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-state-fair-texas",
    "date": "2026-10-12",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_7whjaQV",
    "date": "2026-10-12",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "G-Eazy 26 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-12-tm-vvG1YZ_axJRhSo",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Breaking Benjamin 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-espn-dallas-stars-401892498",
    "date": "2026-10-13",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "ARTMS 10 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-state-fair-texas",
    "date": "2026-10-13",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-13-tm-Z7r9jZ1AAZvu_",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Stars vs. Avalanche 10 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-fc-dallas-761867",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Moderate",
      "why": "Mavericks vs. Pelicans 25 mi away, same hours."
    },
    "draw": {
      "count": 11004,
      "low": 11004,
      "high": 11004
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-espn-mavericks-401901825",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Low",
      "why": "FC Dallas vs. Sounders 25 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-14-state-fair-texas",
    "date": "2026-10-14",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-state-fair-texas",
    "date": "2026-10-15",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_13XPlXI",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 17 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-vvG1YZ_FCbXFze",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7Ptqe",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Karol G 6.5 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7xfrb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "88° feels-like at a 7:00 pm start, no roof."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-espn-mavericks-401898408",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Low",
      "why": "Gorillaz and Modest Mouse 33 mi away, same hours."
    },
    "draw": {
      "count": 19210,
      "low": 19207,
      "high": 19217
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-state-fair-texas",
    "date": "2026-10-16",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_axCfz2I",
    "date": "2026-10-16",
    "start": "20:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Mavericks vs. Hawks and Gorillaz 21 mi away, same hours."
    },
    "draw": {
      "count": 3420
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_dxO-E0O",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Modest Mouse 26 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-16-tm-vvG1YZ_FB_UM69",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.1,
      "friction": "Moderate",
      "why": "Gorillaz 26 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-espn-smu-football-401858268",
    "date": "2026-10-17",
    "start": "11:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Low",
      "why": "State Fair of Texas 4.3 mi away, same hours."
    },
    "draw": {
      "count": 27956,
      "low": 23463,
      "high": 29868
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-state-fair-texas",
    "date": "2026-10-17",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Low",
      "why": "SMU vs. Virginia 4.3 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_5m3Hz7t",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Heavy",
      "why": "Weezer and Phoebe Bridgers 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_G6EbQDb",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Heavy",
      "why": "Weezer 33 mi away, same hours."
    },
    "draw": {
      "count": 7980
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-vvG1YZ_kMvOnlG",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Moderate",
      "why": "Phoebe Bridgers and Gov't Mule 33 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-17-tm-Z7r9jZ1A70IuO",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.8,
      "friction": "Moderate",
      "why": "Weezer and Phoebe Bridgers 10 mi away, same hours."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-state-fair-texas",
    "date": "2026-10-18",
    "start": "10:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_aSPl9Lu",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Sombr 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-18-tm-vvG1YZ_FN5kiFV",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Foster the People 9.7 mi away, same hours."
    },
    "draw": {
      "count": 11970
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-20-espn-dallas-stars-401892545",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-21-tm-vvG1YZ_kYCNL4e",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-espn-dallas-stars-401892559",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Dan + Shay 3.3 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_1THOo6h",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Low",
      "why": "Stars vs. Winnipeg Jets 3.3 mi away, same hours."
    },
    "draw": {
      "count": 20000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-22-tm-vvG1YZ_GKlGiGR",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Dan + Shay and Stars vs. Winnipeg Jets 13 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-23-tm-vvG1YZ_2eFh0ES",
    "date": "2026-10-23",
    "start": "12:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-23-tm-Z7r9jZ1A7-oZS",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 6350
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-fc-dallas-761900",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "Mavericks vs. Spurs 25 mi away, same hours."
    },
    "draw": {
      "count": 11004,
      "low": 11004,
      "high": 11004
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-mavericks-401909858",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "FC Dallas vs. Earthquakes and Ed Sheeran 25 mi away, same hours."
    },
    "draw": {
      "count": 20359,
      "low": 20301,
      "high": 20428
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-smu-football-401858270",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "TCU vs. West Virginia 35 mi away, back to back."
    },
    "draw": {
      "count": 27956,
      "low": 23463,
      "high": 29868
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-espn-tcu-football-401856841",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "SMU vs. California 35 mi away, back to back."
    },
    "draw": {
      "count": 38336,
      "low": 37800,
      "high": 38809
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-vvG1YZ_2eFjVET",
    "date": "2026-10-24",
    "start": "12:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "Sick New World Festival Forth Worth and Sick New World 37 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-vvG1YZ_u1Mvabx",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Extreme",
      "why": "Ed Sheeran 12 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-vvG1YZbgQetoBB",
    "date": "2026-10-24",
    "start": "12:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "Sick New World Festival Forth Worth next door, same hours."
    },
    "draw": {
      "count": 42750
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7j-_w",
    "date": "2026-10-24",
    "start": "17:30",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "Sick New World 23 mi away, back to back."
    },
    "draw": {
      "count": 45600
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7J3uJ",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Heavy",
      "why": "Ed Sheeran and Mavericks vs. Spurs 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7q_Jf",
    "date": "2026-10-24",
    "start": "11:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 9.4,
      "friction": "Moderate",
      "why": "Sick New World next door, same hours."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-25-espn-dallas-stars-401892579",
    "date": "2026-10-25",
    "start": "17:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Sin Bandera 9.7 mi away, same hours."
    },
    "draw": {
      "count": 18532,
      "low": 18532,
      "high": 18532
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-25-tm-vvG1YZ_2eFr7I1",
    "date": "2026-10-25",
    "start": "12:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Stars vs. Islanders 25 mi away, back to back."
    }
  },
  {
    "metroId": "dallas-fort-worth",
    "eventId": "2026-10-25-tm-vvG1YZ_C5lRBQZ",
    "date": "2026-10-25",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:23:14.241Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Stars vs. Islanders 9.7 mi away, same hours."
    },
    "draw": {
      "count": 8000
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-15-espn-rockets-401908622",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 15890,
      "low": 15592,
      "high": 16317
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-17-espn-dynamo-761883",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Houston vs. Oklahoma St 2.1 mi away, same hours."
    },
    "draw": {
      "count": 17849,
      "low": 17367,
      "high": 18785
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-17-espn-pvamu-football-401868361",
    "date": "2026-10-17",
    "start": "14:00",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Houston vs. Oklahoma St and Rice Owls vs. Tulsa 46 mi away, back to back."
    },
    "draw": {
      "count": 9408,
      "low": 7975,
      "high": 17957
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-17-espn-rice-football-401862805",
    "date": "2026-10-17",
    "start": "15:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Houston vs. Oklahoma St 3.6 mi away, same hours."
    },
    "draw": {
      "count": 16729,
      "low": 16185,
      "high": 16796
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-17-espn-uh-football-401856831",
    "date": "2026-10-17",
    "start": "18:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Rice Owls vs. Tulsa 3.6 mi away, same hours."
    },
    "draw": {
      "count": 32461,
      "low": 25902,
      "high": 38955
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-18-espn-dash-401854024",
    "date": "2026-10-18",
    "start": "12:00",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 5986,
      "low": 5434,
      "high": 6886
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-21-espn-rockets-401909840",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18236,
      "low": 18236,
      "high": 18236
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-24-espn-dynamo-761896",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Low",
      "why": "Texas Southern vs. Southern next door, back to back."
    },
    "draw": {
      "count": 17849,
      "low": 17367,
      "high": 18785
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-24-espn-texas-southern-football-401868972",
    "date": "2026-10-24",
    "start": "14:00",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.2,
      "friction": "Moderate",
      "why": "95° feels-like at a 2:00 pm start, no roof."
    },
    "draw": {
      "count": 8956,
      "low": 7000,
      "high": 10029
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-25-espn-texans-401873016",
    "date": "2026-10-25",
    "start": "12:00",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.6,
      "friction": "Heavy",
      "why": "95° feels-like at a 12:00 pm start, no roof."
    },
    "draw": {
      "count": 71256,
      "low": 71237,
      "high": 71284
    }
  },
  {
    "metroId": "houston",
    "eventId": "2026-10-26-espn-rockets-401909874",
    "date": "2026-10-26",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:19:42.332Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 17947,
      "low": 16689,
      "high": 17947
    }
  },
  {
    "metroId": "kansas-city",
    "eventId": "2026-10-17-espn-sporting-kc-761884",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:30:22.188Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 16531,
      "low": 16019,
      "high": 17510
    }
  },
  {
    "metroId": "kansas-city",
    "eventId": "2026-10-18-espn-chiefs-401873006",
    "date": "2026-10-18",
    "start": "15:25",
    "capturedAt": "2026-10-12T08:30:22.188Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 73437,
      "low": 73417,
      "high": 73466
    }
  },
  {
    "metroId": "kansas-city",
    "eventId": "2026-10-24-espn-sporting-kc-761899",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:30:22.188Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 16398,
      "low": 15890,
      "high": 17369
    }
  },
  {
    "metroId": "kansas-city",
    "eventId": "2026-10-25-espn-kc-current-401854032",
    "date": "2026-10-25",
    "start": "16:00",
    "capturedAt": "2026-10-12T08:30:22.188Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 11500,
      "low": 11500,
      "high": 11500
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "eventId": "2026-10-09-tm-vv170ZbgGkzetQ9Z",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 4.7
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 2.5 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 11 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jack Johnson 7.6 mi away, same hours."
    },
    "draw": {
      "count": 22098,
      "low": 22079,
      "high": 22122
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv16aZk3aZMZAuak1v",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "LAFC vs. Austin 10 mi away, same hours."
    },
    "draw": {
      "count": 18363,
      "low": 16473,
      "high": 20018
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Moderate",
      "why": "Galaxy vs. Portland 10 mi away, same hours."
    },
    "draw": {
      "count": 22142,
      "low": 22064,
      "high": 22180
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 12 mi away, same hours."
    },
    "draw": {
      "count": 18312,
      "low": 18039,
      "high": 22443
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Moderate",
      "why": "90° feels-like, no roof."
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 6.8
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Kings vs. Bruins 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-08T03:40:15.850Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "90° feels-like at a 1:05 pm start, no roof."
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "capturedAt": "2026-10-08T03:40:15.850Z",
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
    "metroId": "la",
    "eventId": "2026-10-08-espn-lakers-401898717",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-09-tm-vv170ZbgGkzetQ9Z",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 4.7
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 2.5 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 11 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jack Johnson 7.6 mi away, same hours."
    },
    "draw": {
      "count": 22098,
      "low": 22079,
      "high": 22122
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv16aZk3aZMZAuak1v",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 11 mi away, back to back."
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Heavy",
      "why": "LAFC vs. Austin 10 mi away, same hours."
    },
    "draw": {
      "count": 18363,
      "low": 16473,
      "high": 20018
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Moderate",
      "why": "Galaxy vs. Portland and Dodgers vs. Brewers 10 mi away, same hours."
    },
    "draw": {
      "count": 22142,
      "low": 22064,
      "high": 22180
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-mlb-849811",
    "date": "2026-10-14",
    "start": null,
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.4,
      "friction": "Low",
      "why": "LAFC vs. Austin and Galaxy vs. Portland 4.9 mi away, back to back."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 5.4
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-mlb-849810",
    "date": "2026-10-15",
    "start": null,
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_7GkMfFAZu",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.6,
      "friction": "Moderate",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 3.6
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 3.6
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.6,
      "friction": "Moderate",
      "why": "Phil Wickham and Dodgers vs. Brewers 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.6,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 2.6 mi away, back to back."
    },
    "draw": {
      "count": 18190,
      "low": 17050,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-mlb-849808",
    "date": "2026-10-16",
    "start": null,
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Low",
      "why": "Lakers vs. Nuggets 2.6 mi away, back to back."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vv170Z_7Gkz5H4zw",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.3,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.3,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 12 mi away, same hours."
    },
    "draw": {
      "count": 18312,
      "low": 18039,
      "high": 22443
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 6.8
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 6.8,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Kings vs. Bruins 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "86° feels-like at a 1:05 pm start, no roof."
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
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
    "metroId": "la",
    "eventId": "2026-10-22-tm-vv170ZbSGkIhFzEy",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Bryson Tiller 29 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_59jFKnv",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Doja Cat 29 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_5Up7IgV",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:14.510Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 2.2
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-09-tm-vv170ZbgGkzetQ9Z",
    "date": "2026-10-09",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 4.7
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 2.5 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Heavy",
      "why": "Mac DeMarco and The Neighbourhood 11 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jack Johnson 7.6 mi away, same hours."
    },
    "draw": {
      "count": 22098,
      "low": 22079,
      "high": 22122
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv16aZk3aZMZAuak1v",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 6.4,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 11 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 6.4,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 15 mi away, same hours."
    },
    "draw": {
      "count": 18363,
      "low": 16473,
      "high": 20018
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 6.4,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 4.9 mi away, same hours."
    },
    "draw": {
      "count": 22142,
      "low": 22064,
      "high": 22180
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-mlb-849811",
    "date": "2026-10-14",
    "start": "17:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 6.4,
      "friction": "Moderate",
      "why": "LAFC vs. Austin and Galaxy vs. Portland 4.9 mi away, same hours."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 6.4
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-mlb-849810",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_7GkMfFAZu",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 28 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 3.8
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 3.8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 6.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 10 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Extreme",
      "why": "Dodgers vs. Brewers 28 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Extreme",
      "why": "Dodgers vs. Brewers 2.6 mi away, same hours."
    },
    "draw": {
      "count": 18190,
      "low": 17050,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-mlb-849808",
    "date": "2026-10-16",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Moderate",
      "why": "Lakers vs. Nuggets 2.6 mi away, same hours."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vv170Z_7Gkz5H4zw",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 9.9 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 6.3 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 12 mi away, same hours."
    },
    "draw": {
      "count": 18312,
      "low": 18039,
      "high": 22443
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "98° feels-like, no roof."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 7.3
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Kings vs. Bruins 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "92° feels-like at a 1:05 pm start, no roof."
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.9,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.9,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.9,
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
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
    "metroId": "la",
    "eventId": "2026-10-22-tm-vv170ZbSGkIhFzEy",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Bryson Tiller 29 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_59jFKnv",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Doja Cat 29 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_5Up7IgV",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 2.2
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-espn-lakers-401909851",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.6,
      "friction": "Moderate",
      "why": "JAŸ-Z 7.4 mi away, same hours."
    },
    "draw": {
      "count": 18997,
      "low": 18997,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vv170Z_aGkRleoD6",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 5.6
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG10Z_u2VwVbg",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.6,
      "friction": "Moderate",
      "why": "JAŸ-Z next door, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG1IZ_GNCU5jV",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 70240
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG1iZbS55MSJp",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:30.931Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 5.6,
      "friction": "Moderate",
      "why": "JAŸ-Z 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-espn-lafc-761858",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 6,
      "friction": "Moderate",
      "why": "Jack Johnson 7.6 mi away, same hours."
    },
    "draw": {
      "count": 22127,
      "low": 22111,
      "high": 22185
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-rZ7HnEZ1AfGFf0",
    "date": "2026-10-10",
    "start": "18:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 6
    },
    "draw": {
      "count": 1000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-tm-vv16aZk3aZMZAuak1v",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-10-tm-vv1AaZkowGkdFeQU8",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 11 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 15 mi away, same hours."
    },
    "draw": {
      "count": 16710,
      "low": 14991,
      "high": 18217
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 4.9 mi away, same hours."
    },
    "draw": {
      "count": 22126,
      "low": 22095,
      "high": 22157
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-mlb-849811",
    "date": "2026-10-14",
    "start": "17:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Moderate",
      "why": "LAFC vs. Austin 4.9 mi away, same hours."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 6.3
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-mlb-849810",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_7GkMfFAZu",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 28 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 3.8
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 3.8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 6.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 10 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Ducks vs. Bruins 28 mi away, same hours."
    },
    "draw": {
      "count": 17382,
      "low": 16718,
      "high": 17866
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-mlb-849808",
    "date": "2026-10-16",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 54320,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-rZ7HnEZ1Af07vN",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 5.3
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vv170Z_7Gkz5H4zw",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 12 mi away, same hours."
    },
    "draw": {
      "count": 16664,
      "low": 16415,
      "high": 20423
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett and Galaxy vs. San Diego FC 6.3 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "96° feels-like, no roof."
    },
    "draw": {
      "count": 39256,
      "low": 35561,
      "high": 42012
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-rZ7HnEZ1AfaaP7",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 7.1
    },
    "draw": {
      "count": 1000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv170Z_FGkM0q1JB",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Extreme",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 5.5 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 7.1
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 7.3 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Kings vs. Bruins and Galaxy vs. San Diego FC 6.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "95° feels-like at a 1:05 pm start, no roof."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Moderate",
      "why": "MILEY and Charli xcx 6.3 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-Z7r9jZ1A70kAg",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Heavy",
      "why": "Lakers vs. Warriors 8.0 mi away, same hours."
    },
    "draw": {
      "count": 17752,
      "low": 16005,
      "high": 17891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-espn-lakers-401909092",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Clippers vs. Sacramento Kings 8.0 mi away, same hours."
    },
    "draw": {
      "count": 18997,
      "low": 18684,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-tm-vvG10Z_GpWro4Z",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
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
    "metroId": "la",
    "eventId": "2026-10-22-tm-rZ7HnEZ1AfPprd",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 2.2
    },
    "draw": {
      "count": 1000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vv170ZbSGkIhFzEy",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Bryson Tiller 29 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_59jFKnv",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Doja Cat 29 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_5Up7IgV",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 2.2
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-espn-lakers-401909851",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "JAŸ-Z 7.4 mi away, same hours."
    },
    "draw": {
      "count": 18997,
      "low": 18908,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vv170Z_aGkRleoD6",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 4.3
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG10Z_u2VwVbg",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "JAŸ-Z and My Chemical Romance next door, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG1IZ_GNCU5jV",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Low",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 40037
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG1iZbS55MSJp",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "JAŸ-Z 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-espn-angel-city-401854030",
    "date": "2026-10-24",
    "start": "17:45",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "JAŸ-Z 5.2 mi away, same hours."
    },
    "draw": {
      "count": 15962,
      "low": 15024,
      "high": 17062
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-espn-ucla-football-401858499",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Moderate",
      "why": "JAŸ-Z 17 mi away, earlier in the day."
    },
    "draw": {
      "count": 39256,
      "low": 35561,
      "high": 42012
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-G5eYZ_kU9s8XI",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Extreme",
      "why": "My Chemical Romance 6.3 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-LvZ18QEeUh2VRS8rNKUpd",
    "date": "2026-10-24",
    "start": "18:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 8
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-rZ7HnEZ1AfGFQf",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vv170Z_AGkmI0jmT",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Extreme",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vv1AaZkogGkd5zy4D",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Extreme",
      "why": "JAŸ-Z and My Chemical Romance 0.6 mi away, same hours."
    },
    "draw": {
      "count": 10308
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG10Z_CkYNF-n",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "JAŸ-Z and My Chemical Romance 28 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG10Z_CQ0afVx",
    "date": "2026-10-24",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 8
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG1iZ_erD1S_5",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "JAŸ-Z and My Chemical Romance 16 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG1IZ_GNtjqqM",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Moderate",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 40037
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG1iZbS55zNJb",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:23.704Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "Gorillaz and Weezer 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-espn-chargers-401872989",
    "date": "2026-10-11",
    "start": "13:05",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 11 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 15 mi away, same hours."
    },
    "draw": {
      "count": 16710,
      "low": 14991,
      "high": 18217
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-espn-lafc-761873",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Heavy",
      "why": "Dodgers vs. Brewers 4.9 mi away, same hours."
    },
    "draw": {
      "count": 22126,
      "low": 22095,
      "high": 22157
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-mlb-849811",
    "date": "2026-10-14",
    "start": "17:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 6.3,
      "friction": "Moderate",
      "why": "LAFC vs. Austin 4.9 mi away, same hours."
    },
    "draw": {
      "count": 54152,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-14-tm-vvG10Z_uKts2xv",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 6.3
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-mlb-849810",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 54152,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_7GkMfFAZu",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 28 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 3.8
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 3.8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 6.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Dodgers vs. Brewers 10 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Ducks vs. Bruins 28 mi away, same hours."
    },
    "draw": {
      "count": 17382,
      "low": 16718,
      "high": 17866
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-mlb-849808",
    "date": "2026-10-16",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Low",
      "why": "88° feels-like at a 6:00 pm start, no roof."
    },
    "draw": {
      "count": 54152,
      "low": 49896,
      "high": 56000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-rZ7HnEZ1Af07vN",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 5.2
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-tm-vv170Z_7Gkz5H4zw",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Heavy",
      "why": "UCLA vs. Wisconsin 21 mi away, same hours."
    },
    "draw": {
      "count": 16664,
      "low": 16415,
      "high": 20423
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Heavy",
      "why": "UCLA vs. Wisconsin 10.0 mi away, same hours."
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
    "start": "16:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Moderate",
      "why": "Kings vs. Bruins and SmartLess Live with Jason Bateman, Sean Hayes, & Will Arnett 10.0 mi away, same hours."
    },
    "draw": {
      "count": 39256,
      "low": 35561,
      "high": 42012
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-rZ7HnEZ1AfaaP7",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 7.4
    },
    "draw": {
      "count": 1000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv170Z_FGkM0q1JB",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Extreme",
      "why": "UCLA vs. Wisconsin and Kings vs. Bruins 7.9 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Extreme",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Extreme",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 7.4
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Heavy",
      "why": "UCLA vs. Wisconsin 17 mi away, same hours."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.4,
      "friction": "Heavy",
      "why": "UCLA vs. Wisconsin 10 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "94° feels-like at a 1:05 pm start, no roof."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "MILEY and Charli xcx 6.3 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-Z7r9jZ1A70kAg",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Heavy",
      "why": "Lakers vs. Warriors 8.0 mi away, same hours."
    },
    "draw": {
      "count": 17752,
      "low": 16005,
      "high": 17891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-espn-lakers-401909092",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Clippers vs. Sacramento Kings 8.0 mi away, same hours."
    },
    "draw": {
      "count": 18997,
      "low": 18684,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-21-tm-vvG10Z_GpWro4Z",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
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
    "metroId": "la",
    "eventId": "2026-10-22-tm-rZ7HnEZ1AfPprd",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 2.2
    },
    "draw": {
      "count": 1000
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vv170ZbSGkIhFzEy",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Bryson Tiller 29 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_59jFKnv",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Doja Cat 29 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-22-tm-vvG10Z_5Up7IgV",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 2.2
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-espn-lakers-401909851",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "JAŸ-Z 7.4 mi away, same hours."
    },
    "draw": {
      "count": 18997,
      "low": 18908,
      "high": 18997
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vv170Z_aGkRleoD6",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 4.3
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG10Z_u2VwVbg",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "JAŸ-Z and My Chemical Romance next door, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG1IZ_GNCU5jV",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Low",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 40037
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-23-tm-vvG1iZbS55MSJp",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "JAŸ-Z 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-espn-angel-city-401854030",
    "date": "2026-10-24",
    "start": "17:45",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "JAŸ-Z 5.2 mi away, same hours."
    },
    "draw": {
      "count": 15962,
      "low": 15024,
      "high": 17062
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-espn-ucla-football-401858499",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Moderate",
      "why": "JAŸ-Z 17 mi away, earlier in the day."
    },
    "draw": {
      "count": 39256,
      "low": 35561,
      "high": 42012
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-G5eYZ_kU9s8XI",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Extreme",
      "why": "My Chemical Romance 6.3 mi away, same hours."
    },
    "draw": {
      "count": 10779
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-LvZ18QEeUh2VRS8rNKUpd",
    "date": "2026-10-24",
    "start": "18:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 8
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-rZ7HnEZ1AfGFQf",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vv170Z_AGkmI0jmT",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Extreme",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 10891
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vv1AaZkogGkd5zy4D",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Extreme",
      "why": "JAŸ-Z and My Chemical Romance 0.6 mi away, same hours."
    },
    "draw": {
      "count": 10308
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG10Z_CkYNF-n",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "JAŸ-Z and My Chemical Romance 28 mi away, same hours."
    },
    "draw": {
      "count": 10773
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG10Z_CQ0afVx",
    "date": "2026-10-24",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 8
    },
    "draw": {
      "count": 1500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG1iZ_erD1S_5",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "JAŸ-Z and My Chemical Romance 16 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG1IZ_GNtjqqM",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Moderate",
      "why": "My Chemical Romance 11 mi away, same hours."
    },
    "draw": {
      "count": 40037
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-24-tm-vvG1iZbS55zNJb",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 8,
      "friction": "Heavy",
      "why": "Gorillaz and Weezer 11 mi away, same hours."
    },
    "draw": {
      "count": 17500
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-25-espn-lafc-761904",
    "date": "2026-10-25",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Low",
      "why": "Bryson Tiller 5.8 mi away, same hours."
    },
    "draw": {
      "count": 22115,
      "low": 21933,
      "high": 22384
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-25-tm-vvG10Z_1rnyceQ",
    "date": "2026-10-25",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 2.4
    },
    "draw": {
      "count": 1850
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-25-tm-vvG10Z_5Eio1cI",
    "date": "2026-10-25",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Low",
      "why": "LAFC vs. Galaxy 5.8 mi away, same hours."
    },
    "draw": {
      "count": 10308
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-25-tm-vvG1IZ_2L8dh94",
    "date": "2026-10-25",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:49.823Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.4,
      "friction": "Moderate",
      "why": "LAFC vs. Galaxy and Bryson Tiller 5.2 mi away, same hours."
    },
    "draw": {
      "count": 6000
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-11-mlb-849809",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 41900,
      "low": 37459,
      "high": 41900
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-11-tm-Z7r9jZ1A70-po",
    "date": "2026-10-11",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 1341
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-12-mlb-849812",
    "date": "2026-10-12",
    "start": "16:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 41900,
      "low": 37459,
      "high": 41900
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-13-tm-vv1a6Zk3pxbFxZeC5",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 4500
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-13-tm-Z7r9jZ1A70-pK",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 1341
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-14-espn-bucks-401908942",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 12489,
      "low": 11364,
      "high": 12725
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-15-tm-Z7r9jZ1A7J_fI",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 2414
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-16-ht-milwaukee-admirals-1029142",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 6038,
      "low": 4612,
      "high": 6746
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-16-tm-vv1A6Zko9GkeIuPSF",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-16-tm-vvG1jZ_5SNFpaa",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 10260
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7-Fot",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 1341
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7J_fs",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-17-ht-milwaukee-admirals-1029154",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 7094,
      "low": 5776,
      "high": 8188
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-17-tm-vvG1jZ_GwqYf7f",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 4500
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7JboN",
    "date": "2026-10-17",
    "start": "16:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-17-tm-Z7r9jZ1AAZFa8",
    "date": "2026-10-17",
    "start": "17:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-18-mlb-849806",
    "date": "2026-10-18",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 41900,
      "low": 37459,
      "high": 41900
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-18-tm-vv1A6Zko_GkePx5w1",
    "date": "2026-10-18",
    "start": "14:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-18-tm-Z7r9jZ1A7Ptr_",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 987
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-19-mlb-849807",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 41900,
      "low": 37459,
      "high": 41900
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-19-tm-Z7r9jZ1A7Ptqg",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 1341
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-19-tm-Z7r9jZ1AAZ9f7",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 2414
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-20-tm-vv17jZ_3GkXXZ7CU",
    "date": "2026-10-20",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-20-tm-vvG1jZ_2ro1ebx",
    "date": "2026-10-20",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 4500
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-20-tm-vvG1jZ_uL87pJl",
    "date": "2026-10-20",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-20-tm-Z7r9jZ1A7x9Zd",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-21-tm-vv17jZ_3GkXXvfCD",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-21-tm-vv1A6Zk8gGkdkFE3x",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 4500
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-21-tm-vvG1jZ_uL8AUJs",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-21-tm-Z7r9jZ1A7PfOs",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 2414
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-22-tm-vv17jZ_3GkXXd7CT",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-22-tm-vvG1jZ_uL86kJW",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-23-espn-bucks-401909848",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17480,
      "low": 17480,
      "high": 17575
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-23-ht-milwaukee-admirals-1029183",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 6104,
      "low": 4663,
      "high": 6820
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-23-tm-vv17jZ_3GkXWzVCj",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-23-tm-vvG1jZ_uL8FJEv",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-23-tm-Z7r9jZ1A7POf-",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 2414
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-24-tm-LvZ18QPv9cD2-bkNQJmNb",
    "date": "2026-10-24",
    "start": "18:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 4500
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-24-tm-vv17jZ_3GkXWD0C-",
    "date": "2026-10-24",
    "start": "14:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-24-tm-vvG1jZ_uL85JEF",
    "date": "2026-10-24",
    "start": "14:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-24-tm-Z7r9jZ1A70yPg",
    "date": "2026-10-24",
    "start": "13:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7POfx",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 2414
    }
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7PtOY",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-25-tm-vvG1jZ_uL8CJEC",
    "date": "2026-10-25",
    "start": "13:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-25-tm-Z7r9jZ1A7Pkv7",
    "date": "2026-10-25",
    "start": "15:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11"
  },
  {
    "metroId": "milwaukee",
    "eventId": "2026-10-25-tm-Z7r9jZ1A7POfF",
    "date": "2026-10-25",
    "start": "20:00",
    "capturedAt": "2026-10-11T23:07:15.327Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 2414
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-07-tm-1Ad7Z_FGkM9lFwl",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Metric 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-07-tm-1Ad7Z_kGkwt44qV",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Teddy Swims 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-08-espn-canadiens-401892459",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "beabadoobee 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-08-tm-17G8v0G6u51wzMn",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Predators 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-09-tm-17G8v0G61BQjJfg",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-10-espn-canadiens-401892473",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-13-espn-canadiens-401892490",
    "date": "2026-10-13",
    "start": "18:30",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-14-espn-cf-montreal-761864",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17830,
      "low": 15784,
      "high": 19619
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-16-tm-1AsZko7Gkd3kFbS",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-espn-canadiens-401892524",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Streetlight Manifesto 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-tm-17G8v0G65SFmQJz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Sabres 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-20-espn-canadiens-401892539",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-ht-laval-rocket-1029171",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Olivia Rodrigo 8.5 mi away, same hours."
    },
    "draw": {
      "count": 9480,
      "low": 8973,
      "high": 10119
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-tm-1Ad7Z_aGkmbY4v9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:41:16.567Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Rocket vs. Crunch 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-08-espn-canadiens-401892459",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "beabadoobee 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-08-tm-17G8v0G6u51wzMn",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Predators 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-09-tm-17G8v0G61BQjJfg",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-10-espn-canadiens-401892473",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-13-espn-canadiens-401892490",
    "date": "2026-10-13",
    "start": "18:30",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-14-espn-cf-montreal-761864",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17830,
      "low": 15784,
      "high": 19619
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-16-tm-1AsZko7Gkd3kFbS",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-espn-canadiens-401892524",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Streetlight Manifesto 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-tm-17G8v0G65SFmQJz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Sabres 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-20-espn-canadiens-401892539",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-ht-laval-rocket-1029171",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Olivia Rodrigo 8.5 mi away, same hours."
    },
    "draw": {
      "count": 9480,
      "low": 8973,
      "high": 10119
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-tm-1Ad7Z_aGkmbY4v9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Rocket vs. Crunch 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-22-tm-1Ad7Z_aGkmbsAv_",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:40:22.759Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-09-tm-17G8v0G61BQjJfg",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-10-espn-canadiens-401892473",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-13-espn-canadiens-401892490",
    "date": "2026-10-13",
    "start": "18:30",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-14-espn-cf-montreal-761864",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 17830,
      "low": 15784,
      "high": 19619
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-16-tm-1AsZko7Gkd3kFbS",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-espn-canadiens-401892524",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Streetlight Manifesto 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-tm-17G8v0G65SFmQJz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Sabres 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-20-espn-canadiens-401892539",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-ht-laval-rocket-1029171",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Olivia Rodrigo 8.5 mi away, same hours."
    },
    "draw": {
      "count": 9480,
      "low": 8973,
      "high": 10119
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-tm-1Ad7Z_aGkmbY4v9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Rocket vs. Crunch 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-22-tm-1Ad7Z_aGkmbsAv_",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-23-ht-laval-rocket-1029182",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "John Summit 8.5 mi away, same hours."
    },
    "draw": {
      "count": 10243,
      "low": 10243,
      "high": 10243
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-23-tm-17G8v0G652QqbLC",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:27:38.779Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Rocket vs. Hammers 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-10-espn-canadiens-401892473",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-13-espn-canadiens-401892490",
    "date": "2026-10-13",
    "start": "18:30",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-14-espn-cf-montreal-761864",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 15527,
      "low": 14322,
      "high": 16458
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-16-tm-1AsZko7Gkd3kFbS",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-espn-canadiens-401892524",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Streetlight Manifesto 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-tm-17G8v0G65SFmQJz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Sabres 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-20-espn-canadiens-401892539",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-ht-laval-rocket-1029171",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Olivia Rodrigo 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8244,
      "low": 7601,
      "high": 8762
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-tm-1Ad7Z_aGkmbY4v9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Rocket vs. Crunch 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-22-tm-1Ad7Z_aGkmbsAv_",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-23-ht-laval-rocket-1029182",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 7855,
      "low": 7774,
      "high": 8415
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-24-espn-cf-montreal-761903",
    "date": "2026-10-24",
    "start": "13:30",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Rocket vs. Hammers 8.2 mi away, same hours."
    },
    "draw": {
      "count": 16008,
      "low": 15192,
      "high": 16160
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-24-ht-laval-rocket-1029195",
    "date": "2026-10-24",
    "start": "15:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "CF Montréal vs. Nashville 8.2 mi away, same hours."
    },
    "draw": {
      "count": 9405,
      "low": 8673,
      "high": 9640
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-24-tm-17G8v0G6G99-tj-",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:52.141Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Rocket vs. Hammers 8.5 mi away, back to back."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-13-espn-canadiens-401892490",
    "date": "2026-10-13",
    "start": "18:30",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-14-espn-cf-montreal-761864",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 15527,
      "low": 14322,
      "high": 16458
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-16-tm-1AsZko7Gkd3kFbS",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-espn-canadiens-401892524",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Streetlight Manifesto 8.5 mi away, same hours."
    },
    "draw": {
      "count": 21042,
      "low": 21042,
      "high": 21042
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-17-tm-17G8v0G65SFmQJz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Canadiens vs. Sabres 8.5 mi away, same hours."
    },
    "draw": {
      "count": 5700
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-20-espn-canadiens-401892539",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 21063,
      "low": 21063,
      "high": 21063
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-ht-laval-rocket-1029171",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Olivia Rodrigo 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8244,
      "low": 7601,
      "high": 8762
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-21-tm-1Ad7Z_aGkmbY4v9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Rocket vs. Crunch 8.5 mi away, same hours."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-22-tm-1Ad7Z_aGkmbsAv_",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-23-ht-laval-rocket-1029182",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 7855,
      "low": 7774,
      "high": 8415
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-24-espn-cf-montreal-761903",
    "date": "2026-10-24",
    "start": "13:30",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Rocket vs. Hammers 8.2 mi away, same hours."
    },
    "draw": {
      "count": 16008,
      "low": 15192,
      "high": 16160
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-24-ht-laval-rocket-1029195",
    "date": "2026-10-24",
    "start": "15:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "CF Montréal vs. Nashville 8.2 mi away, same hours."
    },
    "draw": {
      "count": 9405,
      "low": 8673,
      "high": 9640
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-24-tm-17G8v0G6G99-tj-",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.9,
      "friction": "Low",
      "why": "Rocket vs. Hammers 8.5 mi away, back to back."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "montreal",
    "eventId": "2026-10-25-tm-17G8v0G6G99xtjE",
    "date": "2026-10-25",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:58:13.204Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 8550
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-13-espn-mtsu-football-401871067",
    "date": "2026-10-13",
    "start": "18:00",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Predators vs. Golden Knights 31 mi away, same hours."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-13-espn-predators-401892499",
    "date": "2026-10-13",
    "start": "19:45",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "MTSU vs. Delaware 31 mi away, same hours."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-14-espn-nashville-sc-761866",
    "date": "2026-10-14",
    "start": "19:30",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-15-espn-predators-401892513",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-17-espn-predators-401892529",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Tennessee St vs. Morgan St and Vanderbilt vs. Arkansas 0.7 mi away, same hours."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-17-espn-tsu-football-401867968",
    "date": "2026-10-17",
    "start": "17:30",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Vanderbilt vs. Arkansas 2.6 mi away, same hours."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-17-espn-vanderbilt-football-401856726",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 5.3,
      "friction": "Moderate",
      "why": "Tennessee St vs. Morgan St 2.6 mi away, same hours."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-24-espn-tsu-football-401868174",
    "date": "2026-10-24",
    "start": "14:30",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-25-espn-predators-401892580",
    "date": "2026-10-25",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Titans vs. Browns 0.7 mi away, earlier in the day."
    }
  },
  {
    "metroId": "nashville",
    "eventId": "2026-10-25-espn-titans-401873013",
    "date": "2026-10-25",
    "start": "12:00",
    "capturedAt": "2026-10-12T08:14:00.517Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "The biggest event around."
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Harry Styles 6.5 mi away, same hours."
    },
    "draw": {
      "count": 46537,
      "low": 45094,
      "high": 46537
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-07-tm-G5diZ_dfAnI1y",
    "date": "2026-10-07",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Knicks vs. Wizards 14 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Islanders vs. Blackhawks and Nets vs. 76ers 14 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Knicks vs. Wizards 4.8 mi away, same hours."
    },
    "draw": {
      "count": 13849,
      "low": 12904,
      "high": 14966
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-nycc",
    "date": "2026-10-08",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-tm-G5dYZ_kma1OTc",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Knicks vs. Wizards and Islanders vs. Blackhawks 1.0 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Knicks vs. Wizards and Islanders vs. Blackhawks 9.4 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "Harry Styles and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 4.8 mi away, same hours."
    },
    "draw": {
      "count": 17732,
      "low": 17732,
      "high": 17732
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-nycc",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Moderate",
      "why": "Jets vs. Browns and New York Comic Con (day 4 of 4) 10 mi away, same hours."
    },
    "draw": {
      "count": 17732,
      "low": 17732,
      "high": 17732
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Moderate",
      "why": "New York Comic Con (day 4 of 4) 5.4 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-1AdZZ_KGkB_qJAT",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Moderate",
      "why": "Rangers vs. Canucks and Jets vs. Browns 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-G5dYZ_oCCO-12",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 7.1
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-Z7r9jZ1AAZ8FU",
    "date": "2026-10-11",
    "start": "16:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Heavy",
      "why": "Jets vs. Browns and Liberty vs. Dream 11 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    },
    "draw": {
      "count": 24428,
      "low": 21285,
      "high": 27782
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "capturedAt": "2026-10-08T03:40:35.900Z",
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
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-islanders-401892462",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Knicks vs. Wizards 14 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Islanders vs. Blackhawks and Nets vs. 76ers 14 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Knicks vs. Wizards 4.8 mi away, same hours."
    },
    "draw": {
      "count": 13849,
      "low": 12904,
      "high": 14966
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-nycc",
    "date": "2026-10-08",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-tm-G5dYZ_kma1OTc",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "Knicks vs. Wizards and Islanders vs. Blackhawks 1.0 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Knicks vs. Wizards and Islanders vs. Blackhawks 9.4 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) and Harry Styles next door, same hours."
    },
    "draw": {
      "count": 17732,
      "low": 17732,
      "high": 17732
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-nycc",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "Liberty vs. Dream next door, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-G5diZ_dfAcz51",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Heavy",
      "why": "Liberty vs. Dream and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 5.3 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Heavy",
      "why": "Liberty vs. Dream and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 3.2 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "50 Cent and Red Bull NY vs. San Diego FC 3.2 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "CHRONO TRIGGER Orchestra Concert and Red Bull NY vs. San Diego FC next door, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Red Bull NY vs. San Diego FC and Harry Styles 9.1 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Red Bull NY vs. San Diego FC and Harry Styles 16 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "Jets vs. Browns and New York Comic Con (day 4 of 4) 10 mi away, same hours."
    },
    "draw": {
      "count": 17732,
      "low": 17732,
      "high": 17732
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "New York Comic Con (day 4 of 4) 5.4 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-1AdZZ_KGkB_qJAT",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "Rangers vs. Canucks and Jets vs. Browns 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-G5dYZ_oCCO-12",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 7.5
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-vvG1FZ_1TkGLsD",
    "date": "2026-10-11",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) and Rangers vs. Canucks 11 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-Z7r9jZ1AAZ8FU",
    "date": "2026-10-11",
    "start": "16:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Jets vs. Browns and Liberty vs. Dream 11 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    },
    "draw": {
      "count": 24428,
      "low": 21285,
      "high": 27782
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
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
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-devils-401892555",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Islanders vs. Kings 23 mi away, same hours."
    },
    "draw": {
      "count": 15633,
      "low": 14948,
      "high": 15941
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-islanders-401892557",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:36.034Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Devils vs. Ducks 23 mi away, same hours."
    },
    "draw": {
      "count": 14739,
      "low": 14361,
      "high": 14971
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-espn-liberty-401918299",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) and Harry Styles next door, same hours."
    },
    "draw": {
      "count": 17732,
      "low": 17732,
      "high": 17732
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-nycc",
    "date": "2026-10-09",
    "start": "10:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Moderate",
      "why": "Liberty vs. Dream next door, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-tm-G5diZ_dfAcz51",
    "date": "2026-10-09",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Heavy",
      "why": "Liberty vs. Dream and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 5.3 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 9.1,
      "friction": "Heavy",
      "why": "Liberty vs. Dream and 2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) 3.2 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "50 Cent and Red Bull NY vs. San Diego FC 3.2 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "CHRONO TRIGGER Orchestra Concert and Red Bull NY vs. San Diego FC next door, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Red Bull NY vs. San Diego FC and Harry Styles 9.1 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Heavy",
      "why": "Red Bull NY vs. San Diego FC and Harry Styles 16 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "Jets vs. Browns and New York Comic Con (day 4 of 4) 10 mi away, same hours."
    },
    "draw": {
      "count": 17732,
      "low": 17732,
      "high": 17732
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "New York Comic Con (day 4 of 4) 5.4 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-1AdZZ_KGkB_qJAT",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "Rangers vs. Canucks and Jets vs. Browns 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-G5dYZ_oCCO-12",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 7.5
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-vvG1FZ_1TkGLsD",
    "date": "2026-10-11",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Moderate",
      "why": "2026 New York Liberty Benchwarmers Pre-Game Pass (Watch Warm-Ups) and Rangers vs. Canucks 11 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-Z7r9jZ1AAZ8FU",
    "date": "2026-10-11",
    "start": "16:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.5,
      "friction": "Extreme",
      "why": "Jets vs. Browns and Liberty vs. Dream 11 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.5,
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.5,
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
    "eventId": "2026-10-12-tm-17GZv0G6GXpRe3s",
    "date": "2026-10-12",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Knicks vs. Timberwolves and Devils vs. Senators 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-islanders-401892495",
    "date": "2026-10-13",
    "start": "19:45",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    },
    "draw": {
      "count": 24428,
      "low": 21285,
      "high": 27782
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
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
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-devils-401892555",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Islanders vs. Kings 23 mi away, same hours."
    },
    "draw": {
      "count": 15633,
      "low": 14948,
      "high": 15941
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-islanders-401892557",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:52.299Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Devils vs. Ducks 23 mi away, same hours."
    },
    "draw": {
      "count": 14739,
      "low": 14361,
      "high": 14971
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-devils-401892470",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 7.2
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
      "friction": "Heavy",
      "why": "Harry Styles and Foster the People 8.3 mi away, same hours."
    },
    "draw": {
      "count": 20867,
      "low": 18913,
      "high": 23225
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-nycc",
    "date": "2026-10-10",
    "start": "10:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-tm-17GZv0G61DlIaN2",
    "date": "2026-10-10",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 4.8 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.2,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. San Diego FC 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Jets vs. Browns 6.1 mi away, back to back."
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-G5dYZ_oCCO-12",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 4.6
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-vvG1FZ_1TkGLsD",
    "date": "2026-10-11",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Rangers vs. Canucks 9.4 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Devils vs. Senators 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 18753,
      "high": 19313
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-tm-17GZv0G6GXpRe3s",
    "date": "2026-10-12",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Knicks vs. Timberwolves and Devils vs. Senators 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-islanders-401892495",
    "date": "2026-10-13",
    "start": "19:45",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Islanders vs. Canucks 14 mi away, same hours."
    },
    "draw": {
      "count": 17880,
      "low": 17511,
      "high": 17880
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-14-tm-G5diZ_dfAMb5J",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-espn-devils-401892511",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Devils vs. Rangers 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 18753,
      "high": 19313
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-tm-k7vGF_aKApqSB",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Low",
      "why": "Knicks vs. Raptors and Devils vs. Rangers 6.1 mi away, same hours."
    },
    "draw": {
      "count": 47025
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-16-tm-1AdZZ_6GkYknb7s",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Harry Styles and Fisher 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-16-tm-G5diZ_dfADI5V",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Low",
      "why": "Fisher and Johnny Blue Skies 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7P-u7",
    "date": "2026-10-16",
    "start": "17:45",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Harry Styles 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-fordham-football-401868012",
    "date": "2026-10-17",
    "start": "15:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 5.2
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    },
    "draw": {
      "count": 20997,
      "low": 20867,
      "high": 24832
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC 16 mi away, same hours."
    },
    "draw": {
      "count": 20867,
      "low": 18913,
      "high": 23225
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-stony-brook-football-401866666",
    "date": "2026-10-17",
    "start": "14:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Fisher and NYCFC vs. LAFC 40 mi away, same hours."
    },
    "draw": {
      "count": 6922,
      "low": 6345,
      "high": 7850
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-tm-G5diZ_dfkOFuz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC and Red Bull NY vs. Toronto 7.7 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7Pp4a",
    "date": "2026-10-17",
    "start": "17:45",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Harry Styles and NYCFC vs. LAFC 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-18-espn-ny-giants-401873000",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 84281,
      "low": 82980,
      "high": 84999
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-19-espn-ny-rangers-401892535",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
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
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Heavy",
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
    "eventId": "2026-10-20-tm-17GZv0G6ujNlQYZ",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "Knicks vs. 76ers and Devils vs. Avalanche 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-espn-nets-401909836",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Harry Styles and Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity 4.8 mi away, same hours."
    },
    "draw": {
      "count": 17225,
      "low": 16485,
      "high": 17890
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-tm-1AdZZ_8GkldjAGf",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Harry Styles and Brooklyn Nets v. Charlotte Hornets: Pre-Game (Watch Warm-Ups) 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-tm-1AdZZ_8GkleN47N",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Harry Styles and Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-tm-G5diZ_dfk0FC1",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity and Brooklyn Nets v. Charlotte Hornets: Pre-Game (Watch Warm-Ups) 4.8 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-devils-401892555",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Islanders vs. Kings 23 mi away, same hours."
    },
    "draw": {
      "count": 15633,
      "low": 14948,
      "high": 15941
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-islanders-401892557",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Devils vs. Ducks 23 mi away, same hours."
    },
    "draw": {
      "count": 14739,
      "low": 14361,
      "high": 14971
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-23-tm-17GZv0G61Ux2pkD",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Harry Styles 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-23-tm-1AYZkfNGkd5vh6x",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Harry Styles 14 mi away, same hours."
    },
    "draw": {
      "count": 10830
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-23-tm-G5diZ_dfkEICb",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Sidhu Moose Wala and Arcángel 14 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-columbia-football-401867822",
    "date": "2026-10-24",
    "start": "13:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 5.2
    },
    "draw": {
      "count": 6072,
      "low": 3315,
      "high": 11490
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-devils-401892567",
    "date": "2026-10-24",
    "start": "15:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Miami 1.1 mi away, same hours."
    },
    "draw": {
      "count": 16184,
      "low": 16184,
      "high": 16184
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-fordham-football-401868013",
    "date": "2026-10-24",
    "start": "13:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 5.2
    },
    "draw": {
      "count": 4300,
      "low": 4057,
      "high": 4597
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-red-bulls-761891",
    "date": "2026-10-24",
    "start": "17:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Harry Styles and Devils vs. Kings 8.3 mi away, same hours."
    },
    "draw": {
      "count": 20867,
      "low": 18913,
      "high": 23225
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-17GZv0G61mQcddn",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Heavy",
      "why": "Harry Styles 14 mi away, same hours."
    },
    "draw": {
      "count": 10830
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-G5diZ_dfklICx",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "KATSEYE 14 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-k7vGF_19ZQEja",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. Miami 23 mi away, same hours."
    },
    "draw": {
      "count": 2850
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7PgZ8",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:32.938Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. Miami 9.4 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Jets vs. Browns 6.1 mi away, back to back."
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Jets vs. Browns 5.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-G5dYZ_oCCO-12",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 4.6
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-tm-vvG1FZ_1TkGLsD",
    "date": "2026-10-11",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Rangers vs. Canucks 9.4 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Devils vs. Senators 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 18753,
      "high": 19313
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-tm-17GZv0G6GXpRe3s",
    "date": "2026-10-12",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Knicks vs. Timberwolves and Devils vs. Senators 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-13-espn-islanders-401892495",
    "date": "2026-10-13",
    "start": "19:45",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Islanders vs. Canucks 14 mi away, same hours."
    },
    "draw": {
      "count": 17880,
      "low": 17511,
      "high": 17880
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-14-tm-G5diZ_dfAMb5J",
    "date": "2026-10-14",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-espn-devils-401892511",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Devils vs. Rangers 9.4 mi away, same hours."
    },
    "draw": {
      "count": 19241,
      "low": 18753,
      "high": 19313
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-15-tm-k7vGF_aKApqSB",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Low",
      "why": "Knicks vs. Raptors and Devils vs. Rangers 6.1 mi away, same hours."
    },
    "draw": {
      "count": 47025
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-16-tm-1AdZZ_6GkYknb7s",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Harry Styles and Fisher 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-16-tm-G5diZ_dfADI5V",
    "date": "2026-10-16",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Low",
      "why": "Fisher and Johnny Blue Skies 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-16-tm-Z7r9jZ1A7P-u7",
    "date": "2026-10-16",
    "start": "17:45",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.6,
      "friction": "Moderate",
      "why": "Harry Styles 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-fordham-football-401868012",
    "date": "2026-10-17",
    "start": "15:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 5.2
    },
    "draw": {
      "count": 2524,
      "low": 2381,
      "high": 2698
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-nycfc-761877",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Toronto 16 mi away, same hours."
    },
    "draw": {
      "count": 20997,
      "low": 20867,
      "high": 24832
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-red-bulls-761878",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC 16 mi away, same hours."
    },
    "draw": {
      "count": 20867,
      "low": 18913,
      "high": 23225
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-espn-stony-brook-football-401866666",
    "date": "2026-10-17",
    "start": "14:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Fisher and NYCFC vs. LAFC 40 mi away, same hours."
    },
    "draw": {
      "count": 6922,
      "low": 6345,
      "high": 7850
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-tm-G5diZ_dfkOFuz",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "NYCFC vs. LAFC and Red Bull NY vs. Toronto 7.7 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7Pp4a",
    "date": "2026-10-17",
    "start": "17:45",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Harry Styles and NYCFC vs. LAFC 7.8 mi away, same hours."
    },
    "draw": {
      "count": 14000
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-18-espn-ny-giants-401873000",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 84281,
      "low": 82980,
      "high": 84999
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-19-espn-ny-rangers-401892535",
    "date": "2026-10-19",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5,
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5,
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
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Heavy",
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
    "eventId": "2026-10-20-tm-17GZv0G6ujNlQYZ",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5,
      "friction": "Moderate",
      "why": "Knicks vs. 76ers and Devils vs. Avalanche 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-espn-nets-401909836",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Harry Styles and Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity 4.8 mi away, same hours."
    },
    "draw": {
      "count": 17225,
      "low": 16485,
      "high": 17890
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-tm-1AdZZ_8GkldjAGf",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Harry Styles and Brooklyn Nets v. Charlotte Hornets: Pre-Game (Watch Warm-Ups) 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-tm-1AdZZ_8GkleN47N",
    "date": "2026-10-21",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Harry Styles and Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity 4.8 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-21-tm-G5diZ_dfk0FC1",
    "date": "2026-10-21",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Moderate",
      "why": "Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity and Brooklyn Nets v. Charlotte Hornets: Pre-Game (Watch Warm-Ups) 4.8 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-devils-401892555",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Islanders vs. Kings 23 mi away, same hours."
    },
    "draw": {
      "count": 15633,
      "low": 14948,
      "high": 15941
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-22-espn-islanders-401892557",
    "date": "2026-10-22",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Devils vs. Ducks 23 mi away, same hours."
    },
    "draw": {
      "count": 14739,
      "low": 14361,
      "high": 14971
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-23-tm-17GZv0G61Ux2pkD",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Harry Styles 4.8 mi away, same hours."
    },
    "draw": {
      "count": 10571
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-23-tm-1AYZkfNGkd5vh6x",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Moderate",
      "why": "Harry Styles 14 mi away, same hours."
    },
    "draw": {
      "count": 10830
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-23-tm-G5diZ_dfkEICb",
    "date": "2026-10-23",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.5,
      "friction": "Low",
      "why": "Sidhu Moose Wala and Arcángel 14 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-columbia-football-401867822",
    "date": "2026-10-24",
    "start": "13:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 5.2
    },
    "draw": {
      "count": 6072,
      "low": 3315,
      "high": 11490
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-devils-401892567",
    "date": "2026-10-24",
    "start": "15:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Red Bull NY vs. Miami 1.1 mi away, same hours."
    },
    "draw": {
      "count": 16184,
      "low": 16184,
      "high": 16184
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-fordham-football-401868013",
    "date": "2026-10-24",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 5.2
    },
    "draw": {
      "count": 2524,
      "low": 2381,
      "high": 2698
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-espn-red-bulls-761891",
    "date": "2026-10-24",
    "start": "17:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "Harry Styles and Devils vs. Kings 8.3 mi away, same hours."
    },
    "draw": {
      "count": 20867,
      "low": 18913,
      "high": 23225
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-17GZv0G61mQcddn",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Heavy",
      "why": "Harry Styles 14 mi away, same hours."
    },
    "draw": {
      "count": 10830
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-G5diZ_dfklICx",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Moderate",
      "why": "KATSEYE 14 mi away, same hours."
    },
    "draw": {
      "count": 14173
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-k7vGF_19ZQEja",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. Miami 23 mi away, same hours."
    },
    "draw": {
      "count": 2850
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-24-tm-Z7r9jZ1A7PgZ8",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.2,
      "friction": "Heavy",
      "why": "Harry Styles and Red Bull NY vs. Miami 9.4 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-espn-knicks-401909863",
    "date": "2026-10-25",
    "start": "19:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Heavy",
      "why": "Nets vs. Pacers and Jets vs. Dolphins 4.8 mi away, same hours."
    },
    "draw": {
      "count": 19812,
      "low": 19812,
      "high": 19812
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-espn-nets-401909862",
    "date": "2026-10-25",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Heavy",
      "why": "Knicks vs. Magic 4.8 mi away, same hours."
    },
    "draw": {
      "count": 17513,
      "low": 17052,
      "high": 17768
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-espn-ny-jets-401873015",
    "date": "2026-10-25",
    "start": "13:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Low",
      "why": "Knicks vs. Magic 6.1 mi away, back to back."
    },
    "draw": {
      "count": 78667,
      "low": 75765,
      "high": 79609
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-tm-17GZv0G61mQmKdg",
    "date": "2026-10-25",
    "start": "20:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Heavy",
      "why": "Knicks vs. Magic and Brooklyn Nets v. Indiana Pacers Post-Game Free Throw Opportunity 14 mi away, same hours."
    },
    "draw": {
      "count": 10830
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-tm-1AdZZ_8GkldqAGQ",
    "date": "2026-10-25",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Heavy",
      "why": "Jets vs. Dolphins 10 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-tm-1AdZZ_8GklePA7R",
    "date": "2026-10-25",
    "start": "18:00",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Heavy",
      "why": "Jets vs. Dolphins 10 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-25-tm-vvG1FZ_197DNKR",
    "date": "2026-10-25",
    "start": "19:30",
    "capturedAt": "2026-10-11T20:22:59.066Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 10,
      "friction": "Heavy",
      "why": "Knicks vs. Magic and Brooklyn Nets v. Indiana Pacers Post-Game Free Throw Opportunity 9.4 mi away, same hours."
    },
    "draw": {
      "count": 9083
    }
  },
  {
    "metroId": "phoenix",
    "eventId": "2026-10-16-espn-suns-401908948",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:13:27.762Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 17071,
      "low": 17071,
      "high": 17071
    }
  },
  {
    "metroId": "phoenix",
    "eventId": "2026-10-24-espn-asu-football-401856839",
    "date": "2026-10-24",
    "start": null,
    "capturedAt": "2026-10-12T08:13:27.762Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 54069,
      "low": 53978,
      "high": 54147
    }
  },
  {
    "metroId": "phoenix",
    "eventId": "2026-10-24-espn-phoenix-rising-401842307",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:13:27.762Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Moderate",
      "why": "Suns vs. Warriors 4.0 mi away, same hours."
    },
    "draw": {
      "count": 7563,
      "low": 6443,
      "high": 8092
    }
  },
  {
    "metroId": "phoenix",
    "eventId": "2026-10-24-espn-suns-401909860",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:13:27.762Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "Arizona St vs. Kansas St and Rising vs. Lexington 8.1 mi away, back to back."
    },
    "draw": {
      "count": 17071,
      "low": 17071,
      "high": 17071
    }
  },
  {
    "metroId": "phoenix",
    "eventId": "2026-10-25-espn-arizona-cardinals-401873019",
    "date": "2026-10-25",
    "start": "13:05",
    "capturedAt": "2026-10-12T08:13:27.762Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.2,
      "friction": "Low",
      "why": "85° feels-like at a 1:05 pm start, no roof."
    },
    "draw": {
      "count": 63672,
      "low": 62961,
      "high": 64413
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 39860,
      "low": 34957,
      "high": 39860
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-08-tm-Z7r9jZ1A7PEaY",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07"
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-vvG1IZ_F5TB6n1",
    "date": "2026-10-09",
    "start": "12:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.2,
      "friction": "Moderate",
      "why": "95° feels-like at a 12:00 pm start, no roof."
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.2,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-ht-san-diego-gulls-1029118",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "MANÁ 17 mi away, same hours."
    },
    "draw": {
      "count": 10444,
      "low": 7409,
      "high": 11550
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "93° feels-like at a 12:00 pm start, no roof."
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Gulls vs. Silver Knights 17 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 27962,
      "low": 27127,
      "high": 28600
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-ht-san-diego-gulls-1029135",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "San Diego FC vs. Houston 5.6 mi away, same hours."
    },
    "draw": {
      "count": 5591,
      "low": 5376,
      "high": 5745
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "G-Eazy 12 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "eventId": "2026-10-21-ht-san-diego-gulls-1029173",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 5081,
      "low": 4886,
      "high": 5221
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_ampfFN9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T03:40:27.076Z",
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
    "eventId": "2026-10-08-tm-Z7r9jZ1A7PEaY",
    "date": "2026-10-08",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08"
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-09-tm-vvG1IZ_F5TB6n1",
    "date": "2026-10-09",
    "start": "12:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Heavy",
      "why": "95° feels-like at a 12:00 pm start, no roof."
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-ht-san-diego-gulls-1029118",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "MANÁ 17 mi away, same hours."
    },
    "draw": {
      "count": 10444,
      "low": 7409,
      "high": 11550
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "90° feels-like at a 12:00 pm start, no roof."
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Gulls vs. Silver Knights 17 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 12:00 pm start."
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 27962,
      "low": 27127,
      "high": 28600
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-ht-san-diego-gulls-1029135",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "San Diego FC vs. Houston 5.6 mi away, same hours."
    },
    "draw": {
      "count": 5591,
      "low": 5376,
      "high": 5745
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "G-Eazy 12 mi away, same hours."
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-21-ht-san-diego-gulls-1029173",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 5081,
      "low": 4886,
      "high": 5221
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_ampfFN9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-22-tm-vvG1IZ_7R1Et1i",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:26.349Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-09-tm-vvG1IZ_F5TB6n1",
    "date": "2026-10-09",
    "start": "12:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Moderate",
      "why": "95° feels-like at a 12:00 pm start, no roof."
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-ht-san-diego-gulls-1029118",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Moderate",
      "why": "MANÁ 17 mi away, same hours."
    },
    "draw": {
      "count": 10444,
      "low": 7409,
      "high": 11550
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Nothing bigger was on."
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 3.4,
      "friction": "Low",
      "why": "Gulls vs. Silver Knights 17 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 27962,
      "low": 27127,
      "high": 28600
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-ht-san-diego-gulls-1029135",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "San Diego FC vs. Houston 5.6 mi away, same hours."
    },
    "draw": {
      "count": 5591,
      "low": 5376,
      "high": 5745
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "G-Eazy 12 mi away, same hours."
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-21-ht-san-diego-gulls-1029173",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 5081,
      "low": 4886,
      "high": 5221
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_ampfFN9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-22-tm-vvG1IZ_7R1Et1i",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-23-tm-vvG1IZ_185x9WF",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:42.752Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    },
    "draw": {
      "count": 10000
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-ht-san-diego-gulls-1029118",
    "date": "2026-10-10",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Niteharts Festival and MANÁ 5.6 mi away, same hours."
    },
    "draw": {
      "count": 10444,
      "low": 7409,
      "high": 11550
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Low",
      "why": "Niteharts Festival next door, same hours."
    },
    "draw": {
      "count": 40220
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZbMExObDZ",
    "date": "2026-10-10",
    "start": "20:30",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Low",
      "why": "Gulls vs. Silver Knights 17 mi away, same hours."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-4aw",
    "date": "2026-10-10",
    "start": "14:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 3.9,
      "friction": "Moderate",
      "why": "Niteharts Festival next door, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_1UoDk-X",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
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
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Niteharts Festival and for KING & COUNTRY 5.7 mi away, back to back."
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
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Niteharts Festival next door, same hours."
    },
    "draw": {
      "count": 40220
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-Z7r9jZ1A7-4aS",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Niteharts Festival next door, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-Z7r9jZ1AAv7F_",
    "date": "2026-10-11",
    "start": "17:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Niteharts Festival and Taking Back Sunday 31 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-13-tm-vvG1IZ_FBVqMW5",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Charli xcx 2.9 mi away, same hours."
    },
    "draw": {
      "count": 22361,
      "low": 20778,
      "high": 22938
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-ht-san-diego-gulls-1029135",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "San Diego FC vs. Houston 5.6 mi away, same hours."
    },
    "draw": {
      "count": 5591,
      "low": 5376,
      "high": 5745
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-tm-vvG1IZ_GpNXMrX",
    "date": "2026-10-14",
    "start": "19:50",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "San Diego FC vs. Houston 2.9 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "G-Eazy 12 mi away, same hours."
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
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Bonnie Raitt 6.0 mi away, same hours."
    },
    "draw": {
      "count": 25766,
      "low": 25679,
      "high": 27754
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7-w7J",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-18-tm-Z7r9jZ1AAv7FO",
    "date": "2026-10-18",
    "start": "17:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-ht-san-diego-gulls-1029173",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 2.1
    },
    "draw": {
      "count": 5081,
      "low": 4886,
      "high": 5221
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_ampfFN9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.1,
      "friction": "Low",
      "why": "Weezer 6.6 mi away, same hours."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_kUCQ_7i",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.1,
      "friction": "Moderate",
      "why": "Foster the People 6.6 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-22-tm-vvG1IZ_7R1Et1i",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-23-tm-vvG1IZ_185x9WF",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Oceanside Shock vs. Minnesota Northern Lights 36 mi away, same hours."
    },
    "draw": {
      "count": 10000
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-23-tm-Z7r9jZ1AAv7F-",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Madeon 36 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-espn-san-diego-fc-761901",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Malcolm Todd and Bryson Tiller 5.7 mi away, same hours."
    },
    "draw": {
      "count": 27614,
      "low": 25702,
      "high": 28425
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-ht-san-diego-gulls-1029198",
    "date": "2026-10-24",
    "start": "18:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "San Diego FC vs. Sounders and Malcolm Todd 5.6 mi away, same hours."
    },
    "draw": {
      "count": 9873,
      "low": 7005,
      "high": 10919
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-tm-vvG1IZ_5QDPyT3",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "San Diego FC vs. Sounders and Malcolm Todd 15 mi away, same hours."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-tm-vvG1IZ_GCicI-d",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "San Diego FC vs. Sounders and Bryson Tiller 5.7 mi away, same hours."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-tm-vvG1IZ_u3MYFkF",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:28.869Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "San Diego FC vs. Sounders and Malcolm Todd 2.9 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_1UoDk-X",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
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
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Niteharts Festival and for KING & COUNTRY 5.7 mi away, back to back."
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
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Niteharts Festival next door, same hours."
    },
    "draw": {
      "count": 40220
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-Z7r9jZ1A7-4aS",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Niteharts Festival next door, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-Z7r9jZ1AAv7F_",
    "date": "2026-10-11",
    "start": "17:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Heavy",
      "why": "Niteharts Festival and Taking Back Sunday 31 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-13-tm-vvG1IZ_FBVqMW5",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "Charli xcx 2.9 mi away, same hours."
    },
    "draw": {
      "count": 22361,
      "low": 20778,
      "high": 22938
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-ht-san-diego-gulls-1029135",
    "date": "2026-10-14",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "San Diego FC vs. Houston 5.6 mi away, same hours."
    },
    "draw": {
      "count": 5591,
      "low": 5376,
      "high": 5745
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-14-tm-vvG1IZ_GpNXMrX",
    "date": "2026-10-14",
    "start": "19:50",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "San Diego FC vs. Houston 2.9 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-15-tm-vvG1IZ_Cks8Id5",
    "date": "2026-10-15",
    "start": "18:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 7.1,
      "friction": "Low",
      "why": "G-Eazy 12 mi away, same hours."
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
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.7,
      "friction": "Low",
      "why": "Bonnie Raitt 6.0 mi away, same hours."
    },
    "draw": {
      "count": 25766,
      "low": 25679,
      "high": 27754
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7-w7J",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
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
    "eventId": "2026-10-18-tm-Z7r9jZ1AAv7FO",
    "date": "2026-10-18",
    "start": "17:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-ht-san-diego-gulls-1029173",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 2.1
    },
    "draw": {
      "count": 5081,
      "low": 4886,
      "high": 5221
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_ampfFN9",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.1,
      "friction": "Low",
      "why": "Weezer 6.6 mi away, same hours."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-21-tm-vvG1IZ_kUCQ_7i",
    "date": "2026-10-21",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.1,
      "friction": "Moderate",
      "why": "Foster the People 6.6 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-22-tm-vvG1IZ_7R1Et1i",
    "date": "2026-10-22",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
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
    "eventId": "2026-10-23-tm-vvG1IZ_185x9WF",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Oceanside Shock vs. Minnesota Northern Lights 36 mi away, same hours."
    },
    "draw": {
      "count": 10000
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-23-tm-Z7r9jZ1AAv7F-",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Madeon 36 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-espn-san-diego-fc-761901",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Malcolm Todd and Bryson Tiller 5.7 mi away, same hours."
    },
    "draw": {
      "count": 27614,
      "low": 25702,
      "high": 28425
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-ht-san-diego-gulls-1029198",
    "date": "2026-10-24",
    "start": "18:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "San Diego FC vs. Sounders and Malcolm Todd 5.6 mi away, same hours."
    },
    "draw": {
      "count": 9873,
      "low": 7005,
      "high": 10919
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-tm-vvG1IZ_5QDPyT3",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "San Diego FC vs. Sounders and Malcolm Todd 15 mi away, same hours."
    },
    "draw": {
      "count": 20500
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-tm-vvG1IZ_GCicI-d",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "San Diego FC vs. Sounders and Bryson Tiller 5.7 mi away, same hours."
    },
    "draw": {
      "count": 22720
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-24-tm-vvG1IZ_u3MYFkF",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "San Diego FC vs. Sounders and Malcolm Todd 2.9 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-25-espn-wave-401854094",
    "date": "2026-10-25",
    "start": "16:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Oceanside Shock vs. Minnesota Northern Lights and Gorillaz 31 mi away, same hours."
    },
    "draw": {
      "count": 12455,
      "low": 11810,
      "high": 13102
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-25-tm-vvG1IZ_2ZRuKNS",
    "date": "2026-10-25",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Gorillaz and Oceanside Shock vs. Minnesota Northern Lights 8.1 mi away, same hours."
    },
    "draw": {
      "count": 6954
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-25-tm-vvG1IZ_Ai_rrcV",
    "date": "2026-10-25",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Wave vs. Boston and YG 5.6 mi away, back to back."
    },
    "draw": {
      "count": 6840
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-25-tm-Z7r9jZ1AAv7Fx",
    "date": "2026-10-25",
    "start": "17:00",
    "capturedAt": "2026-10-11T14:57:48.924Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Wave vs. Boston and YG 31 mi away, same hours."
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "eventId": "2026-10-09-ht-seattle-thunderbirds-1023150",
    "date": "2026-10-09",
    "start": "19:05",
    "capturedAt": "2026-10-08T03:40:30.254Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 4.2
    },
    "draw": {
      "count": 3682,
      "low": 3078,
      "high": 3920
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RCaryz",
    "date": "2026-10-09",
    "start": null,
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "eventId": "2026-10-13-ht-seattle-thunderbirds-1023166",
    "date": "2026-10-13",
    "start": "19:05",
    "capturedAt": "2026-10-08T03:40:30.254Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 3391,
      "low": 3195,
      "high": 3467
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "eventId": "2026-10-16-ht-seattle-thunderbirds-1023175",
    "date": "2026-10-16",
    "start": "19:05",
    "capturedAt": "2026-10-08T03:40:30.254Z",
    "capturedOn": "2026-10-07",
    "draw": {
      "count": 3896,
      "low": 3256,
      "high": 4147
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "eventId": "2026-10-17-ht-seattle-thunderbirds-1023185",
    "date": "2026-10-17",
    "start": "18:05",
    "capturedAt": "2026-10-08T03:40:30.254Z",
    "capturedOn": "2026-10-07",
    "read": {
      "method": "nearby",
      "rating": 1.8
    },
    "draw": {
      "count": 3694,
      "low": 3563,
      "high": 4354
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
    "capturedAt": "2026-10-08T03:40:30.254Z",
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
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-08-tm-vvG1HZ_2dnQmix",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-09-ht-seattle-thunderbirds-1023150",
    "date": "2026-10-09",
    "start": "19:05",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 4.2
    },
    "draw": {
      "count": 3682,
      "low": 3078,
      "high": 3920
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RCaryz",
    "date": "2026-10-09",
    "start": null,
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-13-ht-seattle-thunderbirds-1023166",
    "date": "2026-10-13",
    "start": "19:05",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 3391,
      "low": 3195,
      "high": 3467
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-16-ht-seattle-thunderbirds-1023175",
    "date": "2026-10-16",
    "start": "19:05",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "draw": {
      "count": 3896,
      "low": 3256,
      "high": 4147
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "eventId": "2026-10-17-ht-seattle-thunderbirds-1023185",
    "date": "2026-10-17",
    "start": "18:05",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "nearby",
      "rating": 1.8
    },
    "draw": {
      "count": 3694,
      "low": 3563,
      "high": 4354
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
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
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-espn-kraken-401892562",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-tm-Z7r9jZ1AAv7Fa",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-08T14:39:29.813Z",
    "capturedOn": "2026-10-08",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kraken vs. Mammoth 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-espn-uw-football-401858487",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-09-ht-seattle-thunderbirds-1023150",
    "date": "2026-10-09",
    "start": "19:05",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 4.2
    },
    "draw": {
      "count": 3682,
      "low": 3078,
      "high": 3920
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-09-tm-vvG1HZ_6RCaryz",
    "date": "2026-10-09",
    "start": null,
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-13-ht-seattle-thunderbirds-1023166",
    "date": "2026-10-13",
    "start": "19:05",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 3391,
      "low": 3195,
      "high": 3467
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-16-ht-seattle-thunderbirds-1023175",
    "date": "2026-10-16",
    "start": "19:05",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "draw": {
      "count": 3896,
      "low": 3256,
      "high": 4147
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "eventId": "2026-10-17-ht-seattle-thunderbirds-1023185",
    "date": "2026-10-17",
    "start": "18:05",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "nearby",
      "rating": 1.8
    },
    "draw": {
      "count": 3694,
      "low": 3563,
      "high": 4354
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
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
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-espn-kraken-401892562",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-tm-Z7r9jZ1AAv7Fa",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kraken vs. Mammoth 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-23-tm-vvG1HZ_Gkt8bhJ",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-23-tm-Z7r9jZ1AAv7Ff",
    "date": "2026-10-23",
    "start": "18:30",
    "capturedAt": "2026-10-09T14:26:46.402Z",
    "capturedOn": "2026-10-09",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Phoebe Bridgers 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_6RG-rSZ",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.8,
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "RUSH and Disney Worlds Collide Concert Tour 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-10-tm-vvG1HZ_kRkZBZv",
    "date": "2026-10-10",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.8,
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.8,
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-13-ht-seattle-thunderbirds-1023166",
    "date": "2026-10-13",
    "start": "19:05",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 3435,
      "low": 3234,
      "high": 3612
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
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
    "eventId": "2026-10-16-ht-seattle-thunderbirds-1023175",
    "date": "2026-10-16",
    "start": "19:05",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "draw": {
      "count": 3839,
      "low": 3208,
      "high": 4323
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "MANÁ 2.1 mi away, same hours."
    },
    "draw": {
      "count": 33440,
      "low": 32766,
      "high": 35181
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-ht-seattle-thunderbirds-1023185",
    "date": "2026-10-17",
    "start": "18:05",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "nearby",
      "rating": 1.8
    },
    "draw": {
      "count": 3639,
      "low": 3510,
      "high": 4290
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
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
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Rise Against 2.2 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-tm-vvG1HZ_knDpajm",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-espn-kraken-401892562",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-tm-Z7r9jZ1AAv7Fa",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kraken vs. Mammoth 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-23-tm-vvG1HZ_Gkt8bhJ",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-23-tm-Z7r9jZ1AAv7Ff",
    "date": "2026-10-23",
    "start": "18:30",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Phoebe Bridgers 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-espn-kraken-401892577",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "EnduroCross 26 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-tm-vvG1HZ_2d1IDVw",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Moderate",
      "why": "Kraken vs. Wild 26 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-tm-vvG1HZ_F5_8AeN",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Moderate",
      "why": "Kraken vs. Wild and EnduroCross 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-tm-Z7r9jZ1AAv7F4",
    "date": "2026-10-24",
    "start": "11:00",
    "capturedAt": "2026-10-11T01:02:30.711Z",
    "capturedOn": "2026-10-10",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-11-espn-seahawks-401872992",
    "date": "2026-10-11",
    "start": "13:25",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
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
    "eventId": "2026-10-13-ht-seattle-thunderbirds-1023166",
    "date": "2026-10-13",
    "start": "19:05",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1
    },
    "draw": {
      "count": 3354,
      "low": 3158,
      "high": 3527
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-13-tm-vvG1HZ_F1SXXOW",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
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
    "eventId": "2026-10-16-ht-seattle-thunderbirds-1023175",
    "date": "2026-10-16",
    "start": "19:05",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "draw": {
      "count": 3839,
      "low": 3208,
      "high": 4323
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "MANÁ 2.1 mi away, same hours."
    },
    "draw": {
      "count": 33440,
      "low": 32766,
      "high": 35181
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-ht-seattle-thunderbirds-1023185",
    "date": "2026-10-17",
    "start": "18:05",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "nearby",
      "rating": 1.8
    },
    "draw": {
      "count": 3639,
      "low": 3510,
      "high": 4290
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-17-tm-vvG1HZbMEehMj0",
    "date": "2026-10-17",
    "start": "20:30",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
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
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Rise Against 2.2 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-20-tm-vvG1HZ_knDpajm",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-espn-kraken-401892562",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-22-tm-Z7r9jZ1AAv7Fa",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Kraken vs. Mammoth 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-23-tm-vvG1HZ_Gkt8bhJ",
    "date": "2026-10-23",
    "start": "19:30",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Disney On Ice presents Jump In 17 mi away, same hours."
    },
    "draw": {
      "count": 9804
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-23-tm-Z7r9jZ1AAv7Ff",
    "date": "2026-10-23",
    "start": "18:30",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.4,
      "friction": "Low",
      "why": "Phoebe Bridgers 17 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-espn-kraken-401892577",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "EnduroCross 26 mi away, same hours."
    },
    "draw": {
      "count": 17151,
      "low": 17151,
      "high": 17151
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-tm-vvG1HZ_2d1IDVw",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Moderate",
      "why": "Kraken vs. Wild 26 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-tm-vvG1HZ_F5_8AeN",
    "date": "2026-10-24",
    "start": "20:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Moderate",
      "why": "Kraken vs. Wild and EnduroCross 2.2 mi away, same hours."
    },
    "draw": {
      "count": 7000
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-24-tm-Z7r9jZ1AAv7F4",
    "date": "2026-10-24",
    "start": "11:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 2.3,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-25-espn-seahawks-401873022",
    "date": "2026-10-25",
    "start": "17:20",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.3,
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
    "eventId": "2026-10-25-tm-Z7r9jZ1AAv78A",
    "date": "2026-10-25",
    "start": "11:00",
    "capturedAt": "2026-10-11T14:57:50.624Z",
    "capturedOn": "2026-10-11",
    "read": {
      "method": "formula",
      "rating": 1.3,
      "friction": "Low",
      "why": "Seahawks vs. Chiefs 15 mi away, earlier in the day."
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-12-mlb-849820",
    "date": "2026-10-12",
    "start": "20:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 25025,
      "low": 25025,
      "high": 25025
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-13-mlb-849813",
    "date": "2026-10-13",
    "start": "20:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 25025,
      "low": 25025,
      "high": 25025
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-15-espn-lightning-401892509",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-17-espn-lightning-401892521",
    "date": "2026-10-17",
    "start": "16:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "South Florida vs. Kent State 3.9 mi away, same hours."
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-17-espn-rowdies-401842293",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "South Florida vs. Kent State and Lightning vs. Canucks 16 mi away, same hours."
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-17-espn-usf-football-401862806",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.3,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 7:00 pm start."
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-18-espn-buccaneers-401873002",
    "date": "2026-10-18",
    "start": "13:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-19-mlb-849815",
    "date": "2026-10-19",
    "start": "17:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 25025,
      "low": 25025,
      "high": 25025
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-20-mlb-849814",
    "date": "2026-10-20",
    "start": "20:00",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 3.7,
      "friction": "Low",
      "why": "86° feels-like at a 8:00 pm start, no roof."
    },
    "draw": {
      "count": 25025,
      "low": 25025,
      "high": 25025
    }
  },
  {
    "metroId": "tampa",
    "eventId": "2026-10-24-espn-rowdies-401842305",
    "date": "2026-10-24",
    "start": "19:30",
    "capturedAt": "2026-10-12T06:30:27.897Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    }
  },
  {
    "metroId": "vancouver",
    "eventId": "2026-10-20-espn-vancouver-canucks-401892548",
    "date": "2026-10-20",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:19:04.235Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18492,
      "low": 18458,
      "high": 18692
    }
  },
  {
    "metroId": "vancouver",
    "eventId": "2026-10-22-espn-vancouver-canucks-401892563",
    "date": "2026-10-22",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:19:04.235Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18717,
      "low": 18682,
      "high": 18919
    }
  },
  {
    "metroId": "vancouver",
    "eventId": "2026-10-25-espn-vancouver-canucks-401892581",
    "date": "2026-10-25",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:19:04.235Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 18679,
      "low": 18594,
      "high": 18750
    }
  },
  {
    "metroId": "sacramento",
    "eventId": "2026-10-13-espn-sacramento-kings-401901826",
    "date": "2026-10-13",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:18:45.827Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 16016,
      "low": 15130,
      "high": 16362
    }
  },
  {
    "metroId": "sacramento",
    "eventId": "2026-10-17-espn-sac-state-football-401866445",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:18:45.827Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 15608,
      "low": 14991,
      "high": 16203
    }
  },
  {
    "metroId": "sacramento",
    "eventId": "2026-10-23-espn-sacramento-kings-401909852",
    "date": "2026-10-23",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:18:45.827Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 16369,
      "low": 16158,
      "high": 17713
    }
  },
  {
    "metroId": "sacramento",
    "eventId": "2026-10-24-espn-sacramento-republic-401842309",
    "date": "2026-10-24",
    "start": "19:00",
    "capturedAt": "2026-10-12T08:18:45.827Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "UC Davis vs. N Colorado 18 mi away, same hours."
    },
    "draw": {
      "count": 12240,
      "low": 12240,
      "high": 12240
    }
  },
  {
    "metroId": "sacramento",
    "eventId": "2026-10-24-espn-uc-davis-football-401868132",
    "date": "2026-10-24",
    "start": "16:00",
    "capturedAt": "2026-10-12T08:18:45.827Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1.5,
      "friction": "Low",
      "why": "Republic FC vs. Roots 18 mi away, same hours."
    },
    "draw": {
      "count": 9122,
      "low": 8957,
      "high": 9387
    }
  },
  {
    "metroId": "sacramento",
    "eventId": "2026-10-25-espn-sacramento-kings-401909867",
    "date": "2026-10-25",
    "start": "18:00",
    "capturedAt": "2026-10-12T08:18:45.827Z",
    "capturedOn": "2026-10-12",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "The biggest event around."
    },
    "draw": {
      "count": 15519,
      "low": 14902,
      "high": 16348
    }
  }
];
