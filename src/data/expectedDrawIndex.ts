// Expected draws from past seasons' announced crowds.
// scripts/attendance-calibrate.mjs rewrites this file. Do not edit by hand.
// Each row is the median announced attendance for one team in one bucket
// (day class, and month when there were enough games). Always an estimate;
// the building stays the ceiling. The read uses it to size an event when
// no expected draw is seeded on the event itself.

export type DayClass = 'weekday' | 'friday' | 'saturday' | 'sunday';

export interface ExpectedDrawRow {
  metroId: string;
  teamId: string;
  dayClass: DayClass | 'all';
  /** 1–12, or null for the day-class-wide figure. */
  month: number | null;
  count: number;
  games: number;
  seasons: string;
}

export const EXPECTED_DRAWS: ExpectedDrawRow[] = [
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "all",
    "month": null,
    "count": 18102,
    "games": 37,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "weekday",
    "month": null,
    "count": 16682,
    "games": 9,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "weekday",
    "month": 9,
    "count": 15033,
    "games": 3,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "friday",
    "month": null,
    "count": 18465,
    "games": 5,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "saturday",
    "month": null,
    "count": 17084,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "sunday",
    "month": null,
    "count": 20039,
    "games": 17,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "sunday",
    "month": 3,
    "count": 20864,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "dayClass": "sunday",
    "month": 10,
    "count": 19940,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "all",
    "month": null,
    "count": 31242,
    "games": 244,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": null,
    "count": 27162,
    "games": 121,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": 4,
    "count": 23882,
    "games": 18,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": 5,
    "count": 26245,
    "games": 21,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": 6,
    "count": 28483,
    "games": 25,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": 7,
    "count": 26060,
    "games": 18,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": 8,
    "count": 28356,
    "games": 21,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "weekday",
    "month": 9,
    "count": 29240,
    "games": 18,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": null,
    "count": 35209,
    "games": 41,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": 4,
    "count": 44725,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": 5,
    "count": 30929,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": 6,
    "count": 34915,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": 7,
    "count": 36515,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": 8,
    "count": 37012,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "friday",
    "month": 9,
    "count": 36226,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": null,
    "count": 37339,
    "games": 42,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": 4,
    "count": 44426,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": 5,
    "count": 33641,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": 6,
    "count": 38336,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": 7,
    "count": 40836,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": 8,
    "count": 35848,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "saturday",
    "month": 9,
    "count": 35816,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": null,
    "count": 35002,
    "games": 40,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": 4,
    "count": 37472,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": 5,
    "count": 37314,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": 6,
    "count": 34361,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": 7,
    "count": 27219,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": 8,
    "count": 36102,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "dayClass": "sunday",
    "month": 9,
    "count": 34943,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "dayClass": "all",
    "month": null,
    "count": 70240,
    "games": 25,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "dayClass": "weekday",
    "month": null,
    "count": 70240,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "dayClass": "sunday",
    "month": null,
    "count": 70240,
    "games": 18,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "dayClass": "sunday",
    "month": 9,
    "count": 70240,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "dayClass": "sunday",
    "month": 10,
    "count": 70240,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "dayClass": "sunday",
    "month": 11,
    "count": 70240,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "all",
    "month": null,
    "count": 17927,
    "games": 123,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": null,
    "count": 17927,
    "games": 69,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 1,
    "count": 17927,
    "games": 15,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 2,
    "count": 17927,
    "games": 10,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 3,
    "count": 17927,
    "games": 11,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 4,
    "count": 17927,
    "games": 8,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 10,
    "count": 16827,
    "games": 5,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 11,
    "count": 17045,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "weekday",
    "month": 12,
    "count": 17102,
    "games": 11,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "friday",
    "month": null,
    "count": 17927,
    "games": 15,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "friday",
    "month": 3,
    "count": 17927,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "friday",
    "month": 4,
    "count": 19370,
    "games": 3,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "friday",
    "month": 11,
    "count": 18649,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "saturday",
    "month": null,
    "count": 17927,
    "games": 17,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "saturday",
    "month": 1,
    "count": 17927,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "saturday",
    "month": 11,
    "count": 17927,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "saturday",
    "month": 12,
    "count": 19370,
    "games": 4,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "sunday",
    "month": null,
    "count": 17927,
    "games": 22,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "sunday",
    "month": 1,
    "count": 17927,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "sunday",
    "month": 3,
    "count": 17927,
    "games": 7,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "sunday",
    "month": 4,
    "count": 19370,
    "games": 3,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "dayClass": "sunday",
    "month": 12,
    "count": 16182,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "all",
    "month": null,
    "count": 49432,
    "games": 245,
    "seasons": "2023,2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": null,
    "count": 48414,
    "games": 126,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 3,
    "count": 52075,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 4,
    "count": 49792,
    "games": 19,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 5,
    "count": 45671,
    "games": 22,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 6,
    "count": 49532,
    "games": 14,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 7,
    "count": 50387,
    "games": 20,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 8,
    "count": 47387,
    "games": 26,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "weekday",
    "month": 9,
    "count": 44095,
    "games": 20,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": null,
    "count": 49593,
    "games": 40,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 3,
    "count": 47524,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 4,
    "count": 50952,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 5,
    "count": 48471,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 6,
    "count": 49795,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 7,
    "count": 50724,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 8,
    "count": 48664,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "friday",
    "month": 9,
    "count": 52436,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": null,
    "count": 50856,
    "games": 42,
    "seasons": "2023,2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": 4,
    "count": 48886,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": 5,
    "count": 50084,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": 6,
    "count": 51467,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": 7,
    "count": 50551,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": 8,
    "count": 49593,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "saturday",
    "month": 9,
    "count": 52267,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": null,
    "count": 49432,
    "games": 37,
    "seasons": "2023,2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": 4,
    "count": 49512,
    "games": 7,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": 5,
    "count": 52327,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": 6,
    "count": 52548,
    "games": 8,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": 7,
    "count": 43528,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": 8,
    "count": 49289,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "dayClass": "sunday",
    "month": 9,
    "count": 47499,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "all",
    "month": null,
    "count": 16098,
    "games": 123,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": null,
    "count": 15962,
    "games": 54,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 1,
    "count": 16175,
    "games": 8,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 2,
    "count": 16214,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 3,
    "count": 15880,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 4,
    "count": 15382,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 10,
    "count": 17174,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 11,
    "count": 14729,
    "games": 12,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "weekday",
    "month": 12,
    "count": 16214,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "friday",
    "month": null,
    "count": 15596,
    "games": 27,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "friday",
    "month": 3,
    "count": 15177,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "friday",
    "month": 4,
    "count": 17174,
    "games": 3,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "friday",
    "month": 11,
    "count": 15241,
    "games": 8,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "friday",
    "month": 12,
    "count": 16052,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "saturday",
    "month": null,
    "count": 15897,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "saturday",
    "month": 12,
    "count": 15305,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": null,
    "count": 16214,
    "games": 33,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 1,
    "count": 16197,
    "games": 3,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 2,
    "count": 16370,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 3,
    "count": 16214,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 4,
    "count": 16731,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 10,
    "count": 16098,
    "games": 3,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 11,
    "count": 16153,
    "games": 7,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "dayClass": "sunday",
    "month": 12,
    "count": 15511,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "all",
    "month": null,
    "count": 21707,
    "games": 55,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "weekday",
    "month": null,
    "count": 19505,
    "games": 9,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "weekday",
    "month": 7,
    "count": 44782,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": null,
    "count": 22198,
    "games": 33,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 3,
    "count": 22924,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 4,
    "count": 22008,
    "games": 3,
    "seasons": "2023,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 5,
    "count": 21707,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 7,
    "count": 21269,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 8,
    "count": 20203,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 9,
    "count": 21568,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "saturday",
    "month": 10,
    "count": 21582,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "sunday",
    "month": null,
    "count": 22149,
    "games": 12,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "dayClass": "sunday",
    "month": 4,
    "count": 25335,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "all",
    "month": null,
    "count": 18145,
    "games": 123,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": null,
    "count": 17661,
    "games": 70,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 1,
    "count": 18145,
    "games": 14,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 2,
    "count": 17226,
    "games": 8,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 3,
    "count": 17070,
    "games": 12,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 4,
    "count": 17900,
    "games": 12,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 10,
    "count": 17668,
    "games": 7,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 11,
    "count": 17395,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "weekday",
    "month": 12,
    "count": 18144,
    "games": 8,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "friday",
    "month": null,
    "count": 18145,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": null,
    "count": 18145,
    "games": 45,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 1,
    "count": 18145,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 2,
    "count": 18145,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 3,
    "count": 18145,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 4,
    "count": 18139,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 10,
    "count": 18145,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 11,
    "count": 18145,
    "games": 10,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "saturday",
    "month": 12,
    "count": 18145,
    "games": 7,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "sunday",
    "month": null,
    "count": 18145,
    "games": 5,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "dayClass": "sunday",
    "month": 3,
    "count": 18145,
    "games": 3,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "all",
    "month": null,
    "count": 22127,
    "games": 57,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "weekday",
    "month": null,
    "count": 22120,
    "games": 15,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "weekday",
    "month": 5,
    "count": 22120,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "weekday",
    "month": 6,
    "count": 22125,
    "games": 3,
    "seasons": "2023"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "weekday",
    "month": 7,
    "count": 22163,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "weekday",
    "month": 10,
    "count": 22053,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "saturday",
    "month": null,
    "count": 22130,
    "games": 30,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "saturday",
    "month": 3,
    "count": 22137,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "saturday",
    "month": 4,
    "count": 22122,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "saturday",
    "month": 5,
    "count": 22099,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "saturday",
    "month": 6,
    "count": 22119,
    "games": 4,
    "seasons": "2023,2024"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "saturday",
    "month": 7,
    "count": 22122,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "sunday",
    "month": null,
    "count": 22217,
    "games": 10,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "dayClass": "sunday",
    "month": 10,
    "count": 22221,
    "games": 3,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "all",
    "month": null,
    "count": 18997,
    "games": 123,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": null,
    "count": 18997,
    "games": 69,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 1,
    "count": 18757,
    "games": 13,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 2,
    "count": 18997,
    "games": 13,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 3,
    "count": 18997,
    "games": 14,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 4,
    "count": 18997,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 10,
    "count": 18997,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 11,
    "count": 18997,
    "games": 11,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "weekday",
    "month": 12,
    "count": 18997,
    "games": 10,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "friday",
    "month": null,
    "count": 18997,
    "games": 22,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "friday",
    "month": 1,
    "count": 18997,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "friday",
    "month": 2,
    "count": 18997,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "friday",
    "month": 3,
    "count": 18997,
    "games": 4,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "friday",
    "month": 4,
    "count": 18997,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "friday",
    "month": 11,
    "count": 18997,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "saturday",
    "month": null,
    "count": 18997,
    "games": 11,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "saturday",
    "month": 3,
    "count": 18997,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "sunday",
    "month": null,
    "count": 18997,
    "games": 21,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "sunday",
    "month": 1,
    "count": 18997,
    "games": 4,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "sunday",
    "month": 3,
    "count": 18997,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "sunday",
    "month": 11,
    "count": 18997,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "dayClass": "sunday",
    "month": 12,
    "count": 18997,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "all",
    "month": null,
    "count": 73051,
    "games": 25,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "weekday",
    "month": null,
    "count": 72851,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "sunday",
    "month": null,
    "count": 73077,
    "games": 20,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "sunday",
    "month": 9,
    "count": 72915,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "sunday",
    "month": 10,
    "count": 73267,
    "games": 5,
    "seasons": "2023,2024"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "sunday",
    "month": 11,
    "count": 74400,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "dayClass": "sunday",
    "month": 12,
    "count": 73190,
    "games": 4,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "dayClass": "all",
    "month": null,
    "count": 42226,
    "games": 18,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "dayClass": "saturday",
    "month": null,
    "count": 42226,
    "games": 16,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "dayClass": "saturday",
    "month": 9,
    "count": 43378,
    "games": 4,
    "seasons": "2023,2024"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "dayClass": "saturday",
    "month": 10,
    "count": 39256,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "dayClass": "saturday",
    "month": 11,
    "count": 43460,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "all",
    "month": null,
    "count": 6951,
    "games": 52,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "weekday",
    "month": null,
    "count": 6160,
    "games": 28,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "weekday",
    "month": 1,
    "count": 9288,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "weekday",
    "month": 2,
    "count": 7353,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "weekday",
    "month": 11,
    "count": 4612,
    "games": 10,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "weekday",
    "month": 12,
    "count": 5553,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "friday",
    "month": null,
    "count": 5298,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "friday",
    "month": 11,
    "count": 5669,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "saturday",
    "month": null,
    "count": 8084,
    "games": 12,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "saturday",
    "month": 1,
    "count": 7393,
    "games": 4,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "saturday",
    "month": 2,
    "count": 9156,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "dayClass": "sunday",
    "month": null,
    "count": 9015,
    "games": 3,
    "seasons": "2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "all",
    "month": null,
    "count": 3894,
    "games": 40,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "weekday",
    "month": null,
    "count": 3566,
    "games": 16,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "weekday",
    "month": 2,
    "count": 4515,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "weekday",
    "month": 11,
    "count": 3028,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "weekday",
    "month": 12,
    "count": 2425,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "friday",
    "month": null,
    "count": 3563,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "saturday",
    "month": null,
    "count": 12450,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "sunday",
    "month": null,
    "count": 5421,
    "games": 17,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "sunday",
    "month": 1,
    "count": 7241,
    "games": 3,
    "seasons": "2024,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "sunday",
    "month": 2,
    "count": 5826,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "dayClass": "sunday",
    "month": 11,
    "count": 3499,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "dayClass": "all",
    "month": null,
    "count": 67414,
    "games": 20,
    "seasons": "2023,2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "dayClass": "saturday",
    "month": null,
    "count": 67862,
    "games": 18,
    "seasons": "2023,2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "dayClass": "saturday",
    "month": 9,
    "count": 67614,
    "games": 5,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "dayClass": "saturday",
    "month": 10,
    "count": 62916,
    "games": 5,
    "seasons": "2023,2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "dayClass": "saturday",
    "month": 11,
    "count": 72244,
    "games": 6,
    "seasons": "2023,2024,2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "all",
    "month": null,
    "count": 5337,
    "games": 51,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "weekday",
    "month": null,
    "count": 4684,
    "games": 26,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "weekday",
    "month": 1,
    "count": 5050,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "weekday",
    "month": 2,
    "count": 5421,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "weekday",
    "month": 11,
    "count": 3342,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "weekday",
    "month": 12,
    "count": 4039,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "saturday",
    "month": null,
    "count": 6645,
    "games": 15,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "saturday",
    "month": 1,
    "count": 7007,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "saturday",
    "month": 2,
    "count": 6516,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "sunday",
    "month": null,
    "count": 4522,
    "games": 9,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "sunday",
    "month": 11,
    "count": 4450,
    "games": 4,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "dayClass": "sunday",
    "month": 12,
    "count": 4575,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "all",
    "month": null,
    "count": 4303,
    "games": 47,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "weekday",
    "month": null,
    "count": 3971,
    "games": 21,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "weekday",
    "month": 1,
    "count": 4645,
    "games": 5,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "weekday",
    "month": 2,
    "count": 4569,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "weekday",
    "month": 11,
    "count": 2980,
    "games": 6,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "weekday",
    "month": 12,
    "count": 2489,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "friday",
    "month": null,
    "count": 3594,
    "games": 7,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "friday",
    "month": 11,
    "count": 3866,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "saturday",
    "month": null,
    "count": 8150,
    "games": 5,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "saturday",
    "month": 11,
    "count": 7894,
    "games": 3,
    "seasons": "2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "sunday",
    "month": null,
    "count": 5693,
    "games": 14,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "sunday",
    "month": 1,
    "count": 5464,
    "games": 5,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "sunday",
    "month": 2,
    "count": 7129,
    "games": 3,
    "seasons": "2024,2025,2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "dayClass": "sunday",
    "month": 12,
    "count": 4818,
    "games": 5,
    "seasons": "2024,2025,2026"
  }
];
