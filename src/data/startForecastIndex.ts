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
}

export const ARCHIVE_FORECASTS: readonly ArchiveForecastRow[] = [
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-07-espn-ducks-401892456",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-10-espn-lafc-761858",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-11-espn-chargers-401872989",
    "date": "2026-10-11",
    "start": "13:05",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
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
    "eventId": "2026-10-13-espn-ducks-401892501",
    "date": "2026-10-13",
    "start": "18:45",
    "capturedAt": "2026-10-07T00:08:27.842Z",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
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
    "capturedAt": "2026-10-07T00:08:27.842Z",
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
    "eventId": "2026-10-16-espn-ducks-401892518",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Lakers vs. Nuggets 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-lakers-401898719",
    "date": "2026-10-16",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.8,
      "friction": "Moderate",
      "why": "Ducks vs. Bruins 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-galaxy-761887",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Low",
      "why": "Kings vs. Bruins and UCLA vs. Wisconsin 12 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Moderate",
      "why": "Galaxy vs. San Diego FC 12 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-ucla-football-401858494",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 5.1,
      "friction": "Heavy",
      "why": "97° feels-like, no roof."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-07T00:08:27.842Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "100° feels-like at a 1:05 pm start, no roof."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-06-espn-devils-401892451",
    "date": "2026-10-06",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Rangers vs. Islanders 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-06-espn-ny-rangers-401892452",
    "date": "2026-10-06",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Devils vs. Mammoth 9.4 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-07-mlb-849838",
    "date": "2026-10-07",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "eventId": "2026-10-08-espn-islanders-401892462",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Yankees vs. Rays 13 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-knicks-401906508",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Extreme",
      "why": "Yankees vs. Rays 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-espn-nets-401901823",
    "date": "2026-10-08",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Heavy",
      "why": "Yankees vs. Rays 10 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-08-mlb-849837",
    "date": "2026-10-08",
    "start": "20:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 6.9,
      "friction": "Moderate",
      "why": "Knicks vs. Wizards 6.5 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-09-espn-liberty-401918299",
    "date": "2026-10-09",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "eventId": "2026-10-10-espn-devils-401892470",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Islanders vs. Lightning 23 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-fordham-football-401868011",
    "date": "2026-10-10",
    "start": "15:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Red Bull NY vs. San Diego FC and Islanders vs. Lightning 16 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-islanders-401892479",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Devils vs. Canucks 23 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-10-espn-red-bulls-761853",
    "date": "2026-10-10",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Low",
      "why": "Islanders vs. Lightning and Devils vs. Canucks 22 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-liberty-401918301",
    "date": "2026-10-11",
    "start": "14:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Jets vs. Browns 10 mi away, same hours."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-jets-401872983",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-11-espn-ny-rangers-401892483",
    "date": "2026-10-11",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.5,
      "friction": "Moderate",
      "why": "Jets vs. Browns 6.1 mi away, back to back."
    }
  },
  {
    "metroId": "new-york",
    "eventId": "2026-10-12-espn-devils-401892486",
    "date": "2026-10-12",
    "start": "19:00",
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
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
    "capturedAt": "2026-10-07T00:08:32.689Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.6,
      "friction": "Moderate",
      "why": "Islanders vs. Ducks and Devils vs. Avalanche 14 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-06-mlb-849826",
    "date": "2026-10-06",
    "start": "18:30",
    "capturedAt": "2026-10-07T00:08:30.691Z",
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
    "capturedAt": "2026-10-07T00:08:30.691Z",
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
    "capturedAt": "2026-10-07T00:08:30.691Z",
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
    "eventId": "2026-10-17-espn-sdsu-football-401860904",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:30.691Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Low",
      "why": "88° feels-like at a 7:30 pm start, no roof."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-06-espn-kraken-401892454",
    "date": "2026-10-06",
    "start": "18:40",
    "capturedAt": "2026-10-07T00:08:31.603Z",
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
    "eventId": "2026-10-09-espn-uw-football-401858487",
    "date": "2026-10-09",
    "start": "18:00",
    "capturedAt": "2026-10-07T00:08:31.603Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.7,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-11-espn-seahawks-401872992",
    "date": "2026-10-11",
    "start": "13:25",
    "capturedAt": "2026-10-07T00:08:31.603Z",
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
    "eventId": "2026-10-17-espn-sounders-761885",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-07T00:08:31.603Z",
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
    "eventId": "2026-10-20-espn-kraken-401892547",
    "date": "2026-10-20",
    "start": "18:40",
    "capturedAt": "2026-10-07T00:08:31.603Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1,
      "friction": "Low",
      "why": "Nothing bigger was on."
    }
  }
];
