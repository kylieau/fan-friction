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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.7,
      "friction": "Moderate",
      "why": "Rain in the forecast at a 7:00 pm start."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-12-espn-rams-401872994",
    "date": "2026-10-12",
    "start": "17:15",
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "Phil Wickham next door, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv170Z_aGkRSVNGb",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 4.3
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vv1k0Z_kp4G7ia50",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "Phil Wickham next door, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG10Z_GwWe2IR",
    "date": "2026-10-15",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 4.3
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1iZ_1rd3dbK",
    "date": "2026-10-15",
    "start": "19:30",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "Phil Wickham and Phil Wickham 34 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-15-tm-vvG1IZ_82Z9hL3",
    "date": "2026-10-15",
    "start": "20:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.3,
      "friction": "Moderate",
      "why": "Phil Wickham and Phil Wickham 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-16-espn-ducks-401892518",
    "date": "2026-10-16",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "Los Tigres del Norte and Young Miko 22 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-kings-401892530",
    "date": "2026-10-17",
    "start": "18:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 12 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-espn-ucla-football-401858494",
    "date": "2026-10-17",
    "start": null,
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Low",
      "why": "89° feels-like, no roof."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv170Z_FGkM0q1JB",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Extreme",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv1AaZk3dGkdvrEc1",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "Los Tigres del Norte 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vv1AaZkobGkeOgjs3",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "Young Miko 28 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG10Z_1rn_GMv",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 7.8
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG10Z_G9R7nPH",
    "date": "2026-10-17",
    "start": "20:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 8.0 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-17-tm-vvG1iZ_F53Epiv",
    "date": "2026-10-17",
    "start": "19:30",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.8,
      "friction": "Heavy",
      "why": "Galaxy vs. San Diego FC and Los Tigres del Norte 18 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-espn-rams-401873004",
    "date": "2026-10-18",
    "start": "13:05",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Low",
      "why": "87° feels-like at a 1:05 pm start, no roof."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-vvG10Z_G9gehI7",
    "date": "2026-10-18",
    "start": "20:00",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "MILEY 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-vvG1iZ_owcx4Jh",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "Charli xcx 11 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-18-tm-Z7r9jZ1A70kAU",
    "date": "2026-10-18",
    "start": "19:30",
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4.5,
      "friction": "Moderate",
      "why": "MILEY and Charli xcx 6.3 mi away, same hours."
    }
  },
  {
    "metroId": "la",
    "eventId": "2026-10-19-tm-vv1ke8v0r6GAuZNui",
    "date": "2026-10-19",
    "start": "19:30",
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
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
    "capturedAt": "2026-10-06T20:52:18.350Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "nearby",
      "rating": 1.4
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-06-mlb-849826",
    "date": "2026-10-06",
    "start": "18:30",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2,
      "friction": "Low",
      "why": "86° feels-like at a 6:30 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-07-mlb-849827",
    "date": "2026-10-07",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 7.6,
      "friction": "Heavy",
      "why": "95° feels-like at a 3:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZ_F5TBMn9",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "93° feels-like at a 12:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-vvG1IZbMExObDZ",
    "date": "2026-10-10",
    "start": "20:30",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Low",
      "why": "Niteharts Festival 15 mi away, earlier in the day."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7-4aw",
    "date": "2026-10-10",
    "start": "14:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "92° feels-like at a 2:00 pm start, no roof."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-10-tm-Z7r9jZ1A7PEas",
    "date": "2026-10-10",
    "start": "12:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 3.8,
      "friction": "Moderate",
      "why": "Niteharts Festival and Niteharts Festival 3.6 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_1UoDk-X",
    "date": "2026-10-11",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Niteharts Festival and for KING & COUNTRY 5.7 mi away, back to back."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-vvG1IZ_F5TDEnj",
    "date": "2026-10-11",
    "start": "12:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 4,
      "friction": "Low",
      "why": "Niteharts Festival next door, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-11-tm-Z7r9jZ1A7-4aS",
    "date": "2026-10-11",
    "start": "13:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
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
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "Bonnie Raitt 6.0 mi away, same hours."
    }
  },
  {
    "metroId": "san-diego",
    "eventId": "2026-10-17-tm-Z7r9jZ1A7-w7J",
    "date": "2026-10-17",
    "start": "19:00",
    "capturedAt": "2026-10-06T20:52:31.159Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 1.8,
      "friction": "Low",
      "why": "San Diego St vs. Fresno St 6.0 mi away, same hours."
    }
  },
  {
    "metroId": "seattle",
    "eventId": "2026-10-06-espn-kraken-401892454",
    "date": "2026-10-06",
    "start": "18:40",
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
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
    "capturedAt": "2026-10-06T20:52:34.508Z",
    "capturedOn": "2026-10-06",
    "read": {
      "method": "formula",
      "rating": 2.2,
      "friction": "Moderate",
      "why": "Kraken vs. Red Wings 2.2 mi away, same hours."
    }
  }
];
