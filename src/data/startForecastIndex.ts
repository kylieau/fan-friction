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
  }
];
