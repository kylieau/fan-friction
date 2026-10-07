// Expected draws from past seasons' announced crowds.
// scripts/attendance-calibrate.mjs rewrites this file. Do not edit by hand.
// Each row is the median announced attendance for one team in one building for
// one kind of date (src/data/expectedDrawBuild.ts), with the middle half of
// those games as the range. Always an estimate; the building stays the ceiling.

import type { ExpectedDrawRow, OpponentRatioRow, PostseasonRow, SeasonLevelRow } from './expectedDrawBuild';

export type { DayClass, ExpectedDrawRow, OpponentRatioRow, PostseasonRow, SeasonLevelRow } from './expectedDrawBuild';

export const EXPECTED_DRAWS: ExpectedDrawRow[] = [
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "all",
    "month": null,
    "count": 42584,
    "low": 41890,
    "high": 43179,
    "games": 32,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 42501,
    "low": 39275,
    "high": 42524,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 42601,
    "low": 41961,
    "high": 43332,
    "games": 20,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 41984,
    "low": 41932,
    "high": 42292,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 42822,
    "low": 41893,
    "high": 43128,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "saturday",
    "month": 7,
    "count": 42601,
    "low": 41505,
    "high": 51303,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 43330,
    "low": 42210,
    "high": 43415,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 42631,
    "low": 41722,
    "high": 42804,
    "games": 7,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": 3,
    "count": 42631,
    "low": 42578,
    "high": 42738,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "all",
    "month": null,
    "count": 36581,
    "low": 32898,
    "high": 39384,
    "games": 247,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "opener",
    "month": null,
    "count": 41426,
    "low": 40562,
    "high": 41505,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": null,
    "count": 33766,
    "low": 31266,
    "high": 36630,
    "games": 121,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": 4,
    "count": 32620,
    "low": 30310,
    "high": 34838,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": 5,
    "count": 35113,
    "low": 33654,
    "high": 37134,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": 6,
    "count": 33902,
    "low": 31266,
    "high": 37130,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": 7,
    "count": 34227,
    "low": 31623,
    "high": 34883,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": 8,
    "count": 30877,
    "low": 28951,
    "high": 34284,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "weekday",
    "month": 9,
    "count": 35503,
    "low": 32789,
    "high": 38581,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": null,
    "count": 39523,
    "low": 37223,
    "high": 40330,
    "games": 36,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": 4,
    "count": 40210,
    "low": 39627,
    "high": 40363,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": 5,
    "count": 40186,
    "low": 39565,
    "high": 40266,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": 6,
    "count": 40753,
    "low": 39418,
    "high": 41046,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": 7,
    "count": 39643,
    "low": 38033,
    "high": 40743,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": 8,
    "count": 37465,
    "low": 35630,
    "high": 37936,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "friday",
    "month": 9,
    "count": 36212,
    "low": 35352,
    "high": 38696,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": null,
    "count": 40107,
    "low": 38515,
    "high": 40864,
    "games": 49,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": 4,
    "count": 40195,
    "low": 39528,
    "high": 41487,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": 5,
    "count": 39336,
    "low": 37339,
    "high": 41391,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": 6,
    "count": 40216,
    "low": 39452,
    "high": 40768,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": 7,
    "count": 40249,
    "low": 37170,
    "high": 41006,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": 8,
    "count": 39716,
    "low": 37885,
    "high": 40154,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "saturday",
    "month": 9,
    "count": 38276,
    "low": 36263,
    "high": 39819,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": null,
    "count": 36581,
    "low": 32807,
    "high": 39203,
    "games": 41,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": 4,
    "count": 36581,
    "low": 33777,
    "high": 39953,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": 5,
    "count": 39203,
    "low": 37800,
    "high": 39649,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": 6,
    "count": 38066,
    "low": 37443,
    "high": 39359,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": 7,
    "count": 35180,
    "low": 30895,
    "high": 36693,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": 8,
    "count": 31776,
    "low": 30416,
    "high": 32737,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "dayClass": "sunday",
    "month": 9,
    "count": 36394,
    "low": 34317,
    "high": 39121,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "all",
    "month": null,
    "count": 3317,
    "low": 3265,
    "high": 3576,
    "games": 36,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 3326,
    "low": 3265,
    "high": 3575,
    "games": 15,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "weekday",
    "month": 6,
    "count": 3575,
    "low": 3420,
    "high": 3588,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "weekday",
    "month": 7,
    "count": 3265,
    "low": 3265,
    "high": 3592,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "weekday",
    "month": 8,
    "count": 3451,
    "low": 3311,
    "high": 3575,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "weekday",
    "month": 9,
    "count": 3319,
    "low": 3292,
    "high": 3447,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "friday",
    "month": null,
    "count": 3296,
    "low": 3268,
    "high": 3575,
    "games": 9,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "friday",
    "month": 6,
    "count": 3265,
    "low": 3265,
    "high": 3281,
    "games": 3,
    "seasons": "2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "friday",
    "month": 8,
    "count": 3283,
    "low": 3276,
    "high": 3429,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 3577,
    "low": 3305,
    "high": 3596,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "gateway-center-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 3315,
    "low": 3274,
    "high": 3575,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "venueId": "state-farm-arena",
    "dayClass": "all",
    "month": null,
    "count": 17044,
    "low": 17044,
    "high": 17044,
    "games": 5,
    "seasons": "2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "all",
    "month": null,
    "count": 70091,
    "low": 69500,
    "high": 71455,
    "games": 22,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 71610,
    "low": 70604,
    "high": 71951,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "preseason",
    "month": null,
    "count": 67523,
    "low": 67477,
    "high": 67784,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 70016,
    "low": 69665,
    "high": 71042,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 70285,
    "low": 69529,
    "high": 71455,
    "games": 18,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 71848,
    "low": 70932,
    "high": 72263,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 70306,
    "low": 69806,
    "high": 70854,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": 11,
    "count": 70453,
    "low": 70053,
    "high": 71221,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "venueId": "mercedes-benz-stadium",
    "dayClass": "sunday",
    "month": 12,
    "count": 69950,
    "low": 69302,
    "high": 70838,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "venueId": "center-parc-stadium",
    "dayClass": "all",
    "month": null,
    "count": 14260,
    "low": 13673,
    "high": 16536,
    "games": 13,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "venueId": "center-parc-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 14413,
    "low": 14019,
    "high": 14980,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "venueId": "center-parc-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 14723,
    "low": 13709,
    "high": 17104,
    "games": 12,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "venueId": "center-parc-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 15861,
    "low": 14887,
    "high": 17104,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "venueId": "center-parc-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 19256,
    "low": 15768,
    "high": 19422,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "venueId": "center-parc-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 14047,
    "low": 12871,
    "high": 14260,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "all",
    "month": null,
    "count": 1697,
    "low": 1560,
    "high": 2013,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "opener",
    "month": null,
    "count": 1262,
    "low": 806,
    "high": 1300,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": null,
    "count": 1697,
    "low": 1570,
    "high": 2034,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 1600,
    "low": 1498,
    "high": 1647,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 2013,
    "low": 1668,
    "high": 2482,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "friday",
    "month": null,
    "count": 1882,
    "low": 1367,
    "high": 2280,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": null,
    "count": 1704,
    "low": 1569,
    "high": 1917,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 1842,
    "low": 1579,
    "high": 2032,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 1682,
    "low": 1603,
    "high": 1924,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 1671,
    "low": 1606,
    "high": 1701,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "all",
    "month": null,
    "count": 1154,
    "low": 768,
    "high": 1444,
    "games": 29,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": null,
    "count": 1181,
    "low": 683,
    "high": 1420,
    "games": 14,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 4030,
    "low": 1218,
    "high": 7343,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 1381,
    "low": 1122,
    "high": 1807,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 725,
    "low": 295,
    "high": 1148,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": null,
    "count": 1200,
    "low": 822,
    "high": 1525,
    "games": 10,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 983,
    "low": 768,
    "high": 1223,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 1498,
    "low": 1377,
    "high": 1594,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "sunday",
    "month": null,
    "count": 876,
    "low": 759,
    "high": 1016,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "venueId": "gsu-convocation-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 876,
    "low": 759,
    "high": 1016,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "venueId": "bobby-dodd-stadium",
    "dayClass": "all",
    "month": null,
    "count": 41205,
    "low": 34857,
    "high": 50173,
    "games": 14,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "venueId": "bobby-dodd-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 37775,
    "low": 34614,
    "high": 38944,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "venueId": "bobby-dodd-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 45123,
    "low": 35656,
    "high": 50878,
    "games": 13,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "venueId": "bobby-dodd-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 38426,
    "low": 31321,
    "high": 45857,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "venueId": "bobby-dodd-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 37287,
    "low": 35945,
    "high": 50878,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "venueId": "bobby-dodd-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 49403,
    "low": 43852,
    "high": 51689,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 4769,
    "low": 3922,
    "high": 5952,
    "games": 50,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "opener",
    "month": null,
    "count": 3530,
    "low": 3472,
    "high": 3541,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 4182,
    "low": 3766,
    "high": 4923,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 4047,
    "low": 3699,
    "high": 5743,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 4567,
    "low": 4239,
    "high": 4879,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 3802,
    "low": 3596,
    "high": 4249,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 12,
    "count": 4859,
    "low": 4177,
    "high": 5267,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "saturday",
    "month": null,
    "count": 5052,
    "low": 4491,
    "high": 6380,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "saturday",
    "month": 1,
    "count": 6179,
    "low": 5284,
    "high": 6681,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "saturday",
    "month": 2,
    "count": 6194,
    "low": 5772,
    "high": 6374,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "saturday",
    "month": 12,
    "count": 4595,
    "low": 4375,
    "high": 6373,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 4772,
    "low": 4163,
    "high": 5370,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 1935,
    "low": 1517,
    "high": 2641,
    "games": 32,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 1526,
    "low": 1441,
    "high": 1781,
    "games": 15,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 1730,
    "low": 1524,
    "high": 1969,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 1879,
    "low": 1537,
    "high": 2356,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 1439,
    "low": 1293,
    "high": 1534,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "weekday",
    "month": 12,
    "count": 1363,
    "low": 1178,
    "high": 1529,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 2560,
    "low": 1966,
    "high": 3727,
    "games": 14,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "sunday",
    "month": 1,
    "count": 6125,
    "low": 5213,
    "high": 6256,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "sunday",
    "month": 2,
    "count": 2812,
    "low": 2439,
    "high": 3244,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "sunday",
    "month": 11,
    "count": 1809,
    "low": 1693,
    "high": 2180,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "venueId": "mccamish-pavilion",
    "dayClass": "sunday",
    "month": 12,
    "count": 1937,
    "low": 1703,
    "high": 2044,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "all",
    "month": null,
    "count": 16536,
    "low": 15916,
    "high": 17454,
    "games": 119,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "opener",
    "month": null,
    "count": 17692,
    "low": 17620,
    "high": 17752,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "preseason",
    "month": null,
    "count": 12575,
    "low": 11854,
    "high": 13081,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 16158,
    "low": 15553,
    "high": 17162,
    "games": 57,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 15993,
    "low": 14602,
    "high": 16412,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 16436,
    "low": 15828,
    "high": 17093,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": 3,
    "count": 16008,
    "low": 15656,
    "high": 17092,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": 4,
    "count": 17124,
    "low": 17049,
    "high": 17242,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 17060,
    "low": 15925,
    "high": 17186,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 16761,
    "low": 15771,
    "high": 17564,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "friday",
    "month": null,
    "count": 16245,
    "low": 15758,
    "high": 17405,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "friday",
    "month": 1,
    "count": 15596,
    "low": 15529,
    "high": 15873,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "friday",
    "month": 2,
    "count": 16536,
    "low": 16378,
    "high": 17625,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "friday",
    "month": 11,
    "count": 16232,
    "low": 16060,
    "high": 16885,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "friday",
    "month": 12,
    "count": 16149,
    "low": 15664,
    "high": 18040,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 17447,
    "low": 17052,
    "high": 17711,
    "games": 27,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 17278,
    "low": 17062,
    "high": 17479,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 17503,
    "low": 17498,
    "high": 17552,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "saturday",
    "month": 3,
    "count": 17122,
    "low": 17064,
    "high": 17741,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "saturday",
    "month": 11,
    "count": 17722,
    "low": 17458,
    "high": 17774,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 17632,
    "low": 16909,
    "high": 17809,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 16331,
    "low": 16137,
    "high": 17173,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "sunday",
    "month": 2,
    "count": 17121,
    "low": 17086,
    "high": 17147,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "sunday",
    "month": 3,
    "count": 16161,
    "low": 15830,
    "high": 16928,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "dayClass": "sunday",
    "month": 12,
    "count": 16137,
    "low": 15624,
    "high": 16194,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "all",
    "month": null,
    "count": 9585,
    "low": 6993,
    "high": 10713,
    "games": 13,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 11040,
    "low": 10574,
    "high": 11040,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 9585,
    "low": 8897,
    "high": 10313,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "weekday",
    "month": 10,
    "count": 9585,
    "low": 8897,
    "high": 10313,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 7736,
    "low": 6210,
    "high": 10713,
    "games": 9,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 10713,
    "low": 8853,
    "high": 10877,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-football",
    "venueId": "fifth-third-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 6973,
    "low": 6091,
    "high": 8562,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "all",
    "month": null,
    "count": 1769,
    "low": 1378,
    "high": 2046,
    "games": 41,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "opener",
    "month": null,
    "count": 2733,
    "low": 2569,
    "high": 11496,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": null,
    "count": 1633,
    "low": 1340,
    "high": 1801,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 1729,
    "low": 1529,
    "high": 1848,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 1851,
    "low": 1642,
    "high": 2041,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 1647,
    "low": 1474,
    "high": 1792,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 1279,
    "low": 1209,
    "high": 1340,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": null,
    "count": 1933,
    "low": 1652,
    "high": 2152,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 1857,
    "low": 1625,
    "high": 2041,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 1858,
    "low": 1730,
    "high": 2129,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "sunday",
    "month": null,
    "count": 2167,
    "low": 1763,
    "high": 2986,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "all",
    "month": null,
    "count": 572,
    "low": 509,
    "high": 686,
    "games": 26,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": null,
    "count": 576,
    "low": 515,
    "high": 675,
    "games": 10,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 534,
    "low": 488,
    "high": 622,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 576,
    "low": 549,
    "high": 613,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 658,
    "low": 567,
    "high": 684,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": null,
    "count": 567,
    "low": 513,
    "high": 822,
    "games": 13,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 545,
    "low": 529,
    "high": 617,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 822,
    "low": 744,
    "high": 829,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "venueId": "ksu-convocation-center",
    "dayClass": "saturday",
    "month": 11,
    "count": 499,
    "low": 479,
    "high": 528,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "venueId": "paypal-park",
    "dayClass": "all",
    "month": null,
    "count": 12320,
    "low": 11431,
    "high": 14279,
    "games": 23,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "venueId": "paypal-park",
    "dayClass": "friday",
    "month": null,
    "count": 12643,
    "low": 12127,
    "high": 13519,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "venueId": "paypal-park",
    "dayClass": "saturday",
    "month": null,
    "count": 12269,
    "low": 11483,
    "high": 14406,
    "games": 12,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "venueId": "paypal-park",
    "dayClass": "saturday",
    "month": 9,
    "count": 11478,
    "low": 11138,
    "high": 11499,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "venueId": "paypal-park",
    "dayClass": "sunday",
    "month": null,
    "count": 12320,
    "low": 11193,
    "high": 14317,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "venueId": "california-memorial-stadium",
    "dayClass": "all",
    "month": null,
    "count": 35250,
    "low": 33470,
    "high": 39477,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "venueId": "california-memorial-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 35898,
    "low": 34087,
    "high": 40020,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "venueId": "california-memorial-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 35303,
    "low": 33923,
    "high": 40398,
    "games": 15,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "venueId": "california-memorial-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 36004,
    "low": 34986,
    "high": 37247,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "venueId": "california-memorial-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 38772,
    "low": 35023,
    "high": 43347,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "venueId": "california-memorial-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 33493,
    "low": 30893,
    "high": 38155,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 3494,
    "low": 2749,
    "high": 5166,
    "games": 50,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "opener",
    "month": null,
    "count": 3143,
    "low": 3105,
    "high": 3308,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 3024,
    "low": 2481,
    "high": 3805,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 3082,
    "low": 2913,
    "high": 3696,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 4272,
    "low": 3388,
    "high": 5616,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 2503,
    "low": 2152,
    "high": 2779,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 12,
    "count": 2783,
    "low": 2516,
    "high": 3035,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "friday",
    "month": null,
    "count": 4727,
    "low": 3470,
    "high": 5750,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "saturday",
    "month": null,
    "count": 4791,
    "low": 3240,
    "high": 5974,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "saturday",
    "month": 1,
    "count": 4586,
    "low": 3803,
    "high": 5896,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "saturday",
    "month": 2,
    "count": 5629,
    "low": 4812,
    "high": 7563,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "venueId": "haas-pavilion",
    "dayClass": "saturday",
    "month": 12,
    "count": 2827,
    "low": 2701,
    "high": 3246,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 2007,
    "low": 1428,
    "high": 2866,
    "games": 29,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 1904,
    "low": 1192,
    "high": 2698,
    "games": 14,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 2116,
    "low": 1652,
    "high": 2484,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 1970,
    "low": 1777,
    "high": 2208,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 2889,
    "low": 1132,
    "high": 4735,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 2307,
    "low": 1610,
    "high": 2952,
    "games": 14,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "sunday",
    "month": 1,
    "count": 2311,
    "low": 1982,
    "high": 3415,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "sunday",
    "month": 2,
    "count": 2589,
    "low": 2409,
    "high": 3012,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "venueId": "haas-pavilion",
    "dayClass": "sunday",
    "month": 12,
    "count": 1512,
    "low": 1359,
    "high": 1675,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "dayClass": "all",
    "month": null,
    "count": 15175,
    "low": 14166,
    "high": 16104,
    "games": 28,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "dayClass": "weekday",
    "month": null,
    "count": 14359,
    "low": 13105,
    "high": 15978,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "dayClass": "saturday",
    "month": null,
    "count": 15228,
    "low": 14182,
    "high": 16102,
    "games": 21,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "dayClass": "saturday",
    "month": 3,
    "count": 16045,
    "low": 15302,
    "high": 16102,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "dayClass": "saturday",
    "month": 5,
    "count": 14363,
    "low": 14065,
    "high": 14779,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "dayClass": "sunday",
    "month": null,
    "count": 14196,
    "low": 12150,
    "high": 15871,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "all",
    "month": null,
    "count": 35080,
    "low": 31735,
    "high": 39128,
    "games": 239,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "opener",
    "month": null,
    "count": 40856,
    "low": 40751,
    "high": 40861,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": null,
    "count": 32073,
    "low": 28618,
    "high": 35094,
    "games": 115,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": 4,
    "count": 30183,
    "low": 26896,
    "high": 32898,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": 5,
    "count": 32336,
    "low": 30078,
    "high": 34181,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": 6,
    "count": 33930,
    "low": 31899,
    "high": 35515,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": 7,
    "count": 35486,
    "low": 32786,
    "high": 38112,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": 8,
    "count": 30139,
    "low": 28307,
    "high": 31389,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "weekday",
    "month": 9,
    "count": 27787,
    "low": 25096,
    "high": 30883,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": null,
    "count": 38317,
    "low": 34125,
    "high": 40066,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": 4,
    "count": 38317,
    "low": 37110,
    "high": 38613,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": 5,
    "count": 35036,
    "low": 33943,
    "high": 39274,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": 6,
    "count": 39102,
    "low": 38349,
    "high": 39827,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": 7,
    "count": 37465,
    "low": 34116,
    "high": 41069,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": 8,
    "count": 34138,
    "low": 33464,
    "high": 38363,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "friday",
    "month": 9,
    "count": 39923,
    "low": 38735,
    "high": 40394,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": null,
    "count": 38291,
    "low": 35141,
    "high": 40109,
    "games": 46,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": 4,
    "count": 38589,
    "low": 35697,
    "high": 40134,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": 5,
    "count": 40111,
    "low": 38115,
    "high": 40425,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": 6,
    "count": 35699,
    "low": 35142,
    "high": 39186,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": 7,
    "count": 37110,
    "low": 34705,
    "high": 39084,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": 8,
    "count": 36087,
    "low": 35070,
    "high": 38742,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "saturday",
    "month": 9,
    "count": 38201,
    "low": 33786,
    "high": 40135,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": null,
    "count": 40051,
    "low": 35519,
    "high": 40389,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": 4,
    "count": 40118,
    "low": 36730,
    "high": 40297,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": 5,
    "count": 40136,
    "low": 37170,
    "high": 40869,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": 6,
    "count": 40350,
    "low": 39789,
    "high": 40718,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": 7,
    "count": 35647,
    "low": 34112,
    "high": 39388,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": 8,
    "count": 39048,
    "low": 33869,
    "high": 39872,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "dayClass": "sunday",
    "month": 9,
    "count": 37536,
    "low": 34079,
    "high": 40129,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "all",
    "month": null,
    "count": 5295,
    "low": 4642,
    "high": 7044,
    "games": 26,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "weekday",
    "month": null,
    "count": 4601,
    "low": 3549,
    "high": 5159,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "saturday",
    "month": null,
    "count": 5349,
    "low": 4765,
    "high": 7063,
    "games": 21,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "saturday",
    "month": 4,
    "count": 4765,
    "low": 4246,
    "high": 5412,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "saturday",
    "month": 5,
    "count": 4247,
    "low": 4162,
    "high": 6502,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "saturday",
    "month": 7,
    "count": 6125,
    "low": 5658,
    "high": 6556,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "venueId": "oakland-coliseum",
    "dayClass": "saturday",
    "month": 8,
    "count": 5349,
    "low": 5063,
    "high": 7063,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "all",
    "month": null,
    "count": 71564,
    "low": 71257,
    "high": 71682,
    "games": 22,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 71319,
    "low": 70867,
    "high": 71456,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "preseason",
    "month": null,
    "count": 71124,
    "low": 52653,
    "high": 71124,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 71337,
    "low": 71269,
    "high": 71513,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 71521,
    "low": 71239,
    "high": 71655,
    "games": 17,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 71521,
    "low": 71310,
    "high": 71569,
    "games": 7,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "sunday",
    "month": 11,
    "count": 71607,
    "low": 71423,
    "high": 71679,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "venueId": "levis-stadium",
    "dayClass": "sunday",
    "month": 12,
    "count": 71739,
    "low": 71507,
    "high": 71821,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "all",
    "month": null,
    "count": 15571,
    "low": 11547,
    "high": 17435,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "opener",
    "month": null,
    "count": 17435,
    "low": 17435,
    "high": 17435,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "preseason",
    "month": null,
    "count": 9640,
    "low": 9152,
    "high": 10312,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": null,
    "count": 11625,
    "low": 10778,
    "high": 14261,
    "games": 65,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 11292,
    "low": 10988,
    "high": 12195,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 11215,
    "low": 10982,
    "high": 11509,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 12208,
    "low": 10419,
    "high": 15773,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 14666,
    "low": 12363,
    "high": 16030,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 10,
    "count": 12501,
    "low": 10598,
    "high": 12795,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 10719,
    "low": 10452,
    "high": 11180,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 13702,
    "low": 11824,
    "high": 15723,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "friday",
    "month": null,
    "count": 17435,
    "low": 15846,
    "high": 17435,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "friday",
    "month": 11,
    "count": 15846,
    "low": 14360,
    "high": 17032,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": null,
    "count": 17435,
    "low": 17435,
    "high": 17435,
    "games": 42,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 17435,
    "low": 17435,
    "high": 17435,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 17435,
    "low": 15919,
    "high": 17435,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 3,
    "count": 17435,
    "low": 17435,
    "high": 17435,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 4,
    "count": 17435,
    "low": 17435,
    "high": 17435,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 10,
    "count": 17435,
    "low": 17330,
    "high": 17435,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 11,
    "count": 17435,
    "low": 16151,
    "high": 17435,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 17435,
    "low": 17213,
    "high": 17435,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "dayClass": "sunday",
    "month": null,
    "count": 16156,
    "low": 14313,
    "high": 17435,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "all",
    "month": null,
    "count": 15520,
    "low": 13663,
    "high": 17100,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 14877,
    "low": 14344,
    "high": 17607,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 14898,
    "low": 13281,
    "high": 16872,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 15520,
    "low": 14055,
    "high": 17100,
    "games": 12,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 13155,
    "low": 12123,
    "high": 13690,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 17099,
    "low": 16064,
    "high": 17100,
    "games": 3,
    "seasons": "2023–2024"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "venueId": "cefcu-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 16118,
    "low": 14649,
    "high": 18221,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "all",
    "month": null,
    "count": 2037,
    "low": 1735,
    "high": 2665,
    "games": 43,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "opener",
    "month": null,
    "count": 1876,
    "low": 1849,
    "high": 1982,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": null,
    "count": 1874,
    "low": 1572,
    "high": 2985,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 1853,
    "low": 1497,
    "high": 2496,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 2339,
    "low": 2261,
    "high": 3284,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 1897,
    "low": 1612,
    "high": 2498,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "friday",
    "month": null,
    "count": 2177,
    "low": 1964,
    "high": 2287,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": null,
    "count": 2127,
    "low": 1847,
    "high": 2625,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 2784,
    "low": 2407,
    "high": 3284,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 2078,
    "low": 2001,
    "high": 2135,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 1767,
    "low": 1752,
    "high": 2042,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "venueId": "provident-event-center",
    "dayClass": "sunday",
    "month": null,
    "count": 1701,
    "low": 1542,
    "high": 1759,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "all",
    "month": null,
    "count": 356,
    "low": 306,
    "high": 537,
    "games": 29,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": null,
    "count": 344,
    "low": 300,
    "high": 466,
    "games": 15,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 317,
    "low": 276,
    "high": 432,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 327,
    "low": 320,
    "high": 342,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 290,
    "low": 213,
    "high": 384,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": null,
    "count": 412,
    "low": 308,
    "high": 610,
    "games": 11,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 314,
    "low": 302,
    "high": 356,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 610,
    "low": 575,
    "high": 644,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "venueId": "provident-event-center",
    "dayClass": "sunday",
    "month": null,
    "count": 415,
    "low": 361,
    "high": 465,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "venueId": "stanford-stadium",
    "dayClass": "all",
    "month": null,
    "count": 26963,
    "low": 23262,
    "high": 33189,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "venueId": "stanford-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 23848,
    "low": 23005,
    "high": 29937,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "venueId": "stanford-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 26963,
    "low": 23262,
    "high": 33189,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "venueId": "stanford-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 29259,
    "low": 25426,
    "high": 33632,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "venueId": "stanford-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 25426,
    "low": 23699,
    "high": 29286,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "venueId": "stanford-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 29179,
    "low": 20878,
    "high": 45255,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 3262,
    "low": 2649,
    "high": 4172,
    "games": 49,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "opener",
    "month": null,
    "count": 2286,
    "low": 2210,
    "high": 2293,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 2890,
    "low": 2297,
    "high": 3421,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 3220,
    "low": 2950,
    "high": 3262,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 3375,
    "low": 3015,
    "high": 3695,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 2266,
    "low": 2055,
    "high": 2334,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 12,
    "count": 2284,
    "low": 2121,
    "high": 2424,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "friday",
    "month": null,
    "count": 2680,
    "low": 2168,
    "high": 2863,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "friday",
    "month": 11,
    "count": 2299,
    "low": 1983,
    "high": 2640,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "saturday",
    "month": null,
    "count": 4334,
    "low": 3817,
    "high": 5258,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "saturday",
    "month": 1,
    "count": 4504,
    "low": 4174,
    "high": 7291,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "saturday",
    "month": 2,
    "count": 4827,
    "low": 4573,
    "high": 6093,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 3037,
    "low": 2791,
    "high": 3981,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "venueId": "maples-pavilion",
    "dayClass": "sunday",
    "month": 12,
    "count": 3981,
    "low": 3218,
    "high": 4163,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 2936,
    "low": 2526,
    "high": 3633,
    "games": 32,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 2697,
    "low": 2493,
    "high": 3013,
    "games": 16,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 2660,
    "low": 2594,
    "high": 2807,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 2855,
    "low": 2723,
    "high": 3013,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 2428,
    "low": 2289,
    "high": 2499,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "friday",
    "month": null,
    "count": 2540,
    "low": 2537,
    "high": 2771,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 3561,
    "low": 3034,
    "high": 3908,
    "games": 13,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "sunday",
    "month": 2,
    "count": 3840,
    "low": 3510,
    "high": 4135,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "venueId": "maples-pavilion",
    "dayClass": "sunday",
    "month": 11,
    "count": 2461,
    "low": 2444,
    "high": 3163,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "all",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 41,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 19,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 5,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 6,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 8,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "friday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 10,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": 6,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 8,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": 6,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": 8,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "all",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "opener",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "preseason",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 65,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 10,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "friday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "friday",
    "month": 1,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "friday",
    "month": 3,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "friday",
    "month": 11,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "friday",
    "month": 12,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 23,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": 3,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": 11,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": null,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": 1,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": 2,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "dayClass": "sunday",
    "month": 4,
    "count": 18064,
    "low": 18064,
    "high": 18064,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "all",
    "month": null,
    "count": 59307,
    "low": 58102,
    "high": 61200,
    "games": 21,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "opener",
    "month": null,
    "count": 59403,
    "low": 59073,
    "high": 60930,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "preseason",
    "month": null,
    "count": 59829,
    "low": 49445,
    "high": 59829,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": null,
    "count": 60152,
    "low": 60065,
    "high": 60952,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": 12,
    "count": 60152,
    "low": 60065,
    "high": 60952,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "sunday",
    "month": null,
    "count": 58993,
    "low": 57991,
    "high": 60285,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "sunday",
    "month": 10,
    "count": 62167,
    "low": 59307,
    "high": 62199,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "sunday",
    "month": 11,
    "count": 58912,
    "low": 58884,
    "high": 59419,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "venueId": "soldier-field",
    "dayClass": "sunday",
    "month": 12,
    "count": 56539,
    "low": 55295,
    "high": 59362,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "all",
    "month": null,
    "count": 18892,
    "low": 18028,
    "high": 19737,
    "games": 119,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "opener",
    "month": null,
    "count": 19344,
    "low": 19200,
    "high": 19606,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "preseason",
    "month": null,
    "count": 10069,
    "low": 9819,
    "high": 10323,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": null,
    "count": 18068,
    "low": 17114,
    "high": 19227,
    "games": 52,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 17224,
    "low": 16527,
    "high": 17725,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 18096,
    "low": 17167,
    "high": 18834,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 18169,
    "low": 17527,
    "high": 18671,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 17548,
    "low": 16954,
    "high": 18629,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 10,
    "count": 16161,
    "low": 15177,
    "high": 17681,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 18431,
    "low": 17567,
    "high": 19064,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 19391,
    "low": 18631,
    "high": 19717,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": null,
    "count": 19489,
    "low": 18954,
    "high": 20056,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 1,
    "count": 19298,
    "low": 18875,
    "high": 19843,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 2,
    "count": 19347,
    "low": 19119,
    "high": 19671,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 3,
    "count": 19528,
    "low": 19414,
    "high": 20539,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": null,
    "count": 19093,
    "low": 18787,
    "high": 20265,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 19340,
    "low": 18845,
    "high": 19641,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 4,
    "count": 20634,
    "low": 19964,
    "high": 20698,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 18892,
    "low": 18737,
    "high": 19822,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": null,
    "count": 19199,
    "low": 18426,
    "high": 19912,
    "games": 29,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": 1,
    "count": 18819,
    "low": 18701,
    "high": 19313,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": 3,
    "count": 19153,
    "low": 18666,
    "high": 20125,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": 4,
    "count": 19636,
    "low": 19189,
    "high": 20062,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": 11,
    "count": 19342,
    "low": 18548,
    "high": 19848,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 19283,
    "low": 18510,
    "high": 19955,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "all",
    "month": null,
    "count": 20639,
    "low": 19520,
    "high": 21299,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "opener",
    "month": null,
    "count": 21369,
    "low": 21146,
    "high": 21375,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "preseason",
    "month": null,
    "count": 18704,
    "low": 17218,
    "high": 19975,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": null,
    "count": 20377,
    "low": 19066,
    "high": 21234,
    "games": 64,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 19274,
    "low": 18617,
    "high": 21033,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 20313,
    "low": 19031,
    "high": 20673,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 21081,
    "low": 20191,
    "high": 21584,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 21114,
    "low": 20509,
    "high": 21312,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 10,
    "count": 19015,
    "low": 18555,
    "high": 19016,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 19621,
    "low": 19134,
    "high": 20380,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 20775,
    "low": 19882,
    "high": 21327,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": null,
    "count": 20945,
    "low": 20043,
    "high": 21337,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 1,
    "count": 21245,
    "low": 21153,
    "high": 21345,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 4,
    "count": 21547,
    "low": 21492,
    "high": 21579,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 11,
    "count": 20235,
    "low": 19979,
    "high": 20645,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "friday",
    "month": 12,
    "count": 20008,
    "low": 19544,
    "high": 20591,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": null,
    "count": 21157,
    "low": 20422,
    "high": 21528,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 21378,
    "low": 20444,
    "high": 21930,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 21297,
    "low": 21116,
    "high": 21579,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 3,
    "count": 21198,
    "low": 21122,
    "high": 21448,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 11,
    "count": 19449,
    "low": 18756,
    "high": 20376,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 20527,
    "low": 20157,
    "high": 21223,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": null,
    "count": 19358,
    "low": 18546,
    "high": 20439,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 18449,
    "low": 18411,
    "high": 18643,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "seatgeek-stadium",
    "dayClass": "all",
    "month": null,
    "count": 16947,
    "low": 16426,
    "high": 17485,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "seatgeek-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 16947,
    "low": 16426,
    "high": 17485,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "seatgeek-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 16426,
    "low": 16262,
    "high": 16687,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "all",
    "month": null,
    "count": 20636,
    "low": 17785,
    "high": 24916,
    "games": 27,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "weekday",
    "month": null,
    "count": 15019,
    "low": 12448,
    "high": 17787,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": null,
    "count": 22465,
    "low": 17966,
    "high": 25048,
    "games": 22,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": 4,
    "count": 17984,
    "low": 16861,
    "high": 18388,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": 5,
    "count": 20560,
    "low": 18253,
    "high": 22886,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": 6,
    "count": 25237,
    "low": 21537,
    "high": 26090,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": 7,
    "count": 27631,
    "low": 26405,
    "high": 28452,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "dayClass": "saturday",
    "month": 9,
    "count": 22188,
    "low": 21412,
    "high": 22505,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "venueId": "seatgeek-stadium",
    "dayClass": "all",
    "month": null,
    "count": 3751,
    "low": 3104,
    "high": 4544,
    "games": 21,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "venueId": "seatgeek-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 3886,
    "low": 3425,
    "high": 5045,
    "games": 9,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "venueId": "seatgeek-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 3168,
    "low": 2707,
    "high": 3856,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "venueId": "seatgeek-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 3872,
    "low": 3649,
    "high": 3879,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "venueId": "seatgeek-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 3751,
    "low": 3624,
    "high": 4317,
    "games": 9,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "venueId": "seatgeek-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 4317,
    "low": 4034,
    "high": 5804,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "all",
    "month": null,
    "count": 164,
    "low": 109,
    "high": 272,
    "games": 28,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "opener",
    "month": null,
    "count": 525,
    "low": 379,
    "high": 619,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "weekday",
    "month": null,
    "count": 147,
    "low": 89,
    "high": 290,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 183,
    "low": 85,
    "high": 295,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 111,
    "low": 106,
    "high": 193,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "saturday",
    "month": null,
    "count": 200,
    "low": 130,
    "high": 254,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 141,
    "low": 119,
    "high": 200,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 272,
    "low": 235,
    "high": 275,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "sunday",
    "month": null,
    "count": 145,
    "low": 127,
    "high": 250,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "venueId": "jones-convocation-center",
    "dayClass": "sunday",
    "month": 1,
    "count": 250,
    "low": 198,
    "high": 261,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "all",
    "month": null,
    "count": 37541,
    "low": 34580,
    "high": 39444,
    "games": 244,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "opener",
    "month": null,
    "count": 40072,
    "low": 39892,
    "high": 41219,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": null,
    "count": 36065,
    "low": 32858,
    "high": 38162,
    "games": 115,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 3,
    "count": 36702,
    "low": 31495,
    "high": 39535,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 4,
    "count": 29734,
    "low": 26902,
    "high": 31375,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 5,
    "count": 35603,
    "low": 33261,
    "high": 37514,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 6,
    "count": 37419,
    "low": 36057,
    "high": 38542,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 7,
    "count": 38257,
    "low": 37481,
    "high": 38847,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 8,
    "count": 37749,
    "low": 34707,
    "high": 39407,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "weekday",
    "month": 9,
    "count": 34524,
    "low": 32447,
    "high": 35862,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": null,
    "count": 38915,
    "low": 35079,
    "high": 40087,
    "games": 38,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": 4,
    "count": 34282,
    "low": 31238,
    "high": 37045,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": 5,
    "count": 36019,
    "low": 34465,
    "high": 36807,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": 6,
    "count": 39457,
    "low": 39060,
    "high": 40160,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": 7,
    "count": 39992,
    "low": 39544,
    "high": 40551,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": 8,
    "count": 39829,
    "low": 39181,
    "high": 40292,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "friday",
    "month": 9,
    "count": 35611,
    "low": 32202,
    "high": 38992,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": null,
    "count": 39575,
    "low": 38017,
    "high": 40078,
    "games": 50,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 4,
    "count": 36096,
    "low": 35056,
    "high": 37301,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 5,
    "count": 40017,
    "low": 39501,
    "high": 40153,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 6,
    "count": 39437,
    "low": 39097,
    "high": 40228,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 7,
    "count": 39817,
    "low": 39349,
    "high": 40125,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 8,
    "count": 39834,
    "low": 39614,
    "high": 40068,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 9,
    "count": 38819,
    "low": 38035,
    "high": 39673,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": null,
    "count": 38012,
    "low": 35711,
    "high": 39395,
    "games": 41,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": 4,
    "count": 35711,
    "low": 34719,
    "high": 35914,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": 5,
    "count": 39299,
    "low": 39008,
    "high": 40048,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": 6,
    "count": 39268,
    "low": 37676,
    "high": 39648,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": 7,
    "count": 38742,
    "low": 37484,
    "high": 40030,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": 8,
    "count": 38012,
    "low": 36213,
    "high": 39413,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "dayClass": "sunday",
    "month": 9,
    "count": 37186,
    "low": 33568,
    "high": 38300,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "all",
    "month": null,
    "count": 3834,
    "low": 3137,
    "high": 5069,
    "games": 52,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "opener",
    "month": null,
    "count": 3051,
    "low": 1991,
    "high": 3273,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 3263,
    "low": 2844,
    "high": 3783,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 3708,
    "low": 3026,
    "high": 4890,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 3789,
    "low": 3763,
    "high": 4595,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 2790,
    "low": 2734,
    "high": 2826,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "friday",
    "month": null,
    "count": 4109,
    "low": 3319,
    "high": 5187,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "friday",
    "month": 11,
    "count": 3335,
    "low": 3268,
    "high": 3849,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 4480,
    "low": 3861,
    "high": 5368,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 5540,
    "low": 5343,
    "high": 5907,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 4773,
    "low": 4122,
    "high": 5424,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": 3,
    "count": 5453,
    "low": 4870,
    "high": 5729,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": 11,
    "count": 2745,
    "low": 2698,
    "high": 3169,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 4386,
    "low": 4058,
    "high": 4502,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "venueId": "wintrust-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 5003,
    "low": 4171,
    "high": 6150,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "all",
    "month": null,
    "count": 1420,
    "low": 1164,
    "high": 1794,
    "games": 31,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 1305,
    "low": 980,
    "high": 2634,
    "games": 12,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 1313,
    "low": 1159,
    "high": 2632,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 966,
    "low": 885,
    "high": 1128,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 1327,
    "low": 1250,
    "high": 1354,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 1725,
    "low": 1564,
    "high": 2318,
    "games": 11,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "sunday",
    "month": 1,
    "count": 1580,
    "low": 1521,
    "high": 1628,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "venueId": "wintrust-arena",
    "dayClass": "sunday",
    "month": 12,
    "count": 1673,
    "low": 1440,
    "high": 1868,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "martin-stadium",
    "dayClass": "all",
    "month": null,
    "count": 12023,
    "low": 11783,
    "high": 12023,
    "games": 8,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "martin-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 12023,
    "low": 12023,
    "high": 12023,
    "games": 7,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "martin-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 12023,
    "low": 11327,
    "high": 12023,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "martin-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 12023,
    "low": 12023,
    "high": 12023,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "wrigley-field",
    "dayClass": "all",
    "month": null,
    "count": 32263,
    "low": 23614,
    "high": 38166,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": null,
    "count": 32263,
    "low": 23614,
    "high": 38166,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-football",
    "venueId": "wrigley-field",
    "dayClass": "saturday",
    "month": 11,
    "count": 32263,
    "low": 23614,
    "high": 38166,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "all",
    "month": null,
    "count": 5769,
    "low": 5061,
    "high": 7039,
    "games": 47,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "opener",
    "month": null,
    "count": 4607,
    "low": 4389,
    "high": 5064,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 5567,
    "low": 4979,
    "high": 6325,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 5884,
    "low": 5757,
    "high": 7039,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 5681,
    "low": 5440,
    "high": 6400,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 4564,
    "low": 4426,
    "high": 5034,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 4525,
    "low": 4339,
    "high": 4759,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "friday",
    "month": null,
    "count": 5911,
    "low": 5576,
    "high": 6447,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "friday",
    "month": 11,
    "count": 5811,
    "low": 5576,
    "high": 5882,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "friday",
    "month": 12,
    "count": 7039,
    "low": 5989,
    "high": 7039,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 5752,
    "low": 5506,
    "high": 6629,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 5685,
    "low": 5462,
    "high": 5892,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 5448,
    "low": 5228,
    "high": 5600,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 6492,
    "low": 5642,
    "high": 7039,
    "games": 6,
    "seasons": "2024–2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "all",
    "month": null,
    "count": 1507,
    "low": 1139,
    "high": 1892,
    "games": 30,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 1478,
    "low": 1109,
    "high": 1728,
    "games": 12,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 1596,
    "low": 1456,
    "high": 1869,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 1636,
    "low": 1568,
    "high": 1681,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 1069,
    "low": 1013,
    "high": 1595,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 1377,
    "low": 1152,
    "high": 1408,
    "games": 3,
    "seasons": "2025"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 1861,
    "low": 1515,
    "high": 2181,
    "games": 13,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "sunday",
    "month": 1,
    "count": 1854,
    "low": 1693,
    "high": 2374,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "sunday",
    "month": 2,
    "count": 1902,
    "low": 1882,
    "high": 2474,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "venueId": "welsh-ryan-arena",
    "dayClass": "sunday",
    "month": 12,
    "count": 1515,
    "low": 1323,
    "high": 1839,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "united-center",
    "dayClass": "all",
    "month": null,
    "count": 17781,
    "low": 14918,
    "high": 19522,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "all",
    "month": null,
    "count": 7647,
    "low": 7107,
    "high": 8721,
    "games": 38,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 7524,
    "low": 7122,
    "high": 8854,
    "games": 24,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 6,
    "count": 7468,
    "low": 7225,
    "high": 7579,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 7,
    "count": 8565,
    "low": 7839,
    "high": 9025,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 8,
    "count": 7099,
    "low": 6868,
    "high": 7175,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "weekday",
    "month": 9,
    "count": 8430,
    "low": 7826,
    "high": 8854,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "friday",
    "month": null,
    "count": 7714,
    "low": 7116,
    "high": 7916,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "friday",
    "month": 8,
    "count": 7804,
    "low": 7759,
    "high": 7916,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "venueId": "wintrust-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 8412,
    "low": 7291,
    "high": 9025,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "all",
    "month": null,
    "count": 1485,
    "low": 1166,
    "high": 2117,
    "games": 38,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "opener",
    "month": null,
    "count": 1155,
    "low": 875,
    "high": 1874,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 1554,
    "low": 1154,
    "high": 2090,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 1416,
    "low": 931,
    "high": 1766,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 1883,
    "low": 1774,
    "high": 1970,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 1154,
    "low": 893,
    "high": 1265,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 1341,
    "low": 1149,
    "high": 1984,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 1482,
    "low": 1219,
    "high": 1844,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 1800,
    "low": 1263,
    "high": 2699,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 1426,
    "low": 1038,
    "high": 1673,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "venueId": "credit-union-1-arena",
    "dayClass": "sunday",
    "month": 2,
    "count": 1621,
    "low": 1288,
    "high": 1897,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "all",
    "month": null,
    "count": 18389,
    "low": 12694,
    "high": 25077,
    "games": 243,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "opener",
    "month": null,
    "count": 33171,
    "low": 32287,
    "high": 33296,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": null,
    "count": 13001,
    "low": 11138,
    "high": 17052,
    "games": 121,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": 4,
    "count": 10712,
    "low": 10372,
    "high": 12389,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": 5,
    "count": 11911,
    "low": 11138,
    "high": 13960,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": 6,
    "count": 16166,
    "low": 12598,
    "high": 20736,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": 7,
    "count": 14609,
    "low": 12988,
    "high": 22761,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": 8,
    "count": 16534,
    "low": 11208,
    "high": 20219,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "weekday",
    "month": 9,
    "count": 12458,
    "low": 11745,
    "high": 17640,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": null,
    "count": 25084,
    "low": 18912,
    "high": 31365,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": 4,
    "count": 13432,
    "low": 11337,
    "high": 17588,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": 5,
    "count": 18912,
    "low": 17744,
    "high": 24763,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": 6,
    "count": 29340,
    "low": 25204,
    "high": 35470,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": 7,
    "count": 25084,
    "low": 19859,
    "high": 33098,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": 8,
    "count": 26041,
    "low": 22031,
    "high": 32137,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "friday",
    "month": 9,
    "count": 26513,
    "low": 26204,
    "high": 30505,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": null,
    "count": 24851,
    "low": 20763,
    "high": 30050,
    "games": 44,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": 4,
    "count": 28009,
    "low": 22598,
    "high": 30423,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": 5,
    "count": 24851,
    "low": 21226,
    "high": 28614,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": 6,
    "count": 21153,
    "low": 19842,
    "high": 26828,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": 7,
    "count": 22264,
    "low": 21224,
    "high": 28207,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": 8,
    "count": 25097,
    "low": 18444,
    "high": 32586,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "saturday",
    "month": 9,
    "count": 27749,
    "low": 27345,
    "high": 30631,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": null,
    "count": 20908,
    "low": 17803,
    "high": 27511,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": 4,
    "count": 18840,
    "low": 17589,
    "high": 22326,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": 5,
    "count": 19333,
    "low": 16486,
    "high": 22872,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": 6,
    "count": 21596,
    "low": 20433,
    "high": 26010,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": 7,
    "count": 25928,
    "low": 18995,
    "high": 31230,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": 8,
    "count": 23736,
    "low": 18980,
    "high": 27788,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "dayClass": "sunday",
    "month": 9,
    "count": 22780,
    "low": 18851,
    "high": 28377,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "all",
    "month": null,
    "count": 17139,
    "low": 15658,
    "high": 19198,
    "games": 24,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 15749,
    "low": 15033,
    "high": 19103,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 18465,
    "low": 16533,
    "high": 19178,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 16639,
    "low": 15364,
    "high": 16739,
    "games": 6,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 16735,
    "low": 15834,
    "high": 17137,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 19000,
    "low": 17374,
    "high": 20529,
    "games": 8,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "venueId": "bmo-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 19841,
    "low": 17558,
    "high": 19940,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "all",
    "month": null,
    "count": 31048,
    "low": 26570,
    "high": 37033,
    "games": 240,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 44749,
    "low": 44732,
    "high": 44840,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 26747,
    "low": 24959,
    "high": 30982,
    "games": 121,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": 4,
    "count": 25449,
    "low": 21375,
    "high": 29060,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": 5,
    "count": 25867,
    "low": 23568,
    "high": 28486,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": 6,
    "count": 27410,
    "low": 26188,
    "high": 30413,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": 7,
    "count": 26368,
    "low": 25187,
    "high": 27162,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": 8,
    "count": 27018,
    "low": 25161,
    "high": 30982,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "weekday",
    "month": 9,
    "count": 34251,
    "low": 29266,
    "high": 37678,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 34951,
    "low": 30778,
    "high": 37736,
    "games": 37,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": 4,
    "count": 43912,
    "low": 37500,
    "high": 44232,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": 5,
    "count": 31633,
    "low": 29684,
    "high": 39203,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": 6,
    "count": 34381,
    "low": 31935,
    "high": 35725,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": 7,
    "count": 35209,
    "low": 30390,
    "high": 40771,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": 8,
    "count": 34951,
    "low": 32186,
    "high": 37374,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "friday",
    "month": 9,
    "count": 36226,
    "low": 35237,
    "high": 37448,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 37743,
    "low": 32676,
    "high": 42953,
    "games": 42,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 44327,
    "low": 44133,
    "high": 44452,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 31860,
    "low": 31335,
    "high": 42788,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 35547,
    "low": 31596,
    "high": 38553,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": 7,
    "count": 41922,
    "low": 35525,
    "high": 43207,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": 8,
    "count": 36823,
    "low": 33471,
    "high": 38798,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 36487,
    "low": 35816,
    "high": 39880,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 34555,
    "low": 30736,
    "high": 38785,
    "games": 40,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": 4,
    "count": 38936,
    "low": 36749,
    "high": 40849,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": 5,
    "count": 37314,
    "low": 35042,
    "high": 39459,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": 6,
    "count": 33661,
    "low": 31987,
    "high": 34555,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": 7,
    "count": 27118,
    "low": 26834,
    "high": 29888,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": 8,
    "count": 31061,
    "low": 30999,
    "high": 36957,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 34099,
    "low": 32443,
    "high": 38314,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "all",
    "month": null,
    "count": 70240,
    "low": 70240,
    "high": 71020,
    "games": 22,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 70240,
    "low": 70240,
    "high": 70490,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "preseason",
    "month": null,
    "count": 65325,
    "low": 64901,
    "high": 65728,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 70240,
    "low": 70240,
    "high": 71094,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 70240,
    "low": 70240,
    "high": 70629,
    "games": 15,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 70240,
    "low": 70240,
    "high": 71021,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": 11,
    "count": 70240,
    "low": 70240,
    "high": 70824,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "all",
    "month": null,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 40,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 19370,
    "low": 17669,
    "high": 19370,
    "games": 18,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 4,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 17102,
    "low": 17060,
    "high": 19370,
    "games": 5,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": null,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 6,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 7,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 9,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": 3,
    "count": 19370,
    "low": 19370,
    "high": 19370,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "all",
    "month": null,
    "count": 17927,
    "low": 16478,
    "high": 17927,
    "games": 80,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "preseason",
    "month": null,
    "count": 13800,
    "low": 13600,
    "high": 13876,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": null,
    "count": 17788,
    "low": 16037,
    "high": 17927,
    "games": 46,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": 1,
    "count": 15397,
    "low": 13608,
    "high": 17927,
    "games": 8,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": 2,
    "count": 17927,
    "low": 16323,
    "high": 17927,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": 3,
    "count": 17927,
    "low": 17093,
    "high": 17927,
    "games": 9,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": 4,
    "count": 17927,
    "low": 17927,
    "high": 17927,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": 11,
    "count": 16804,
    "low": 16258,
    "high": 17378,
    "games": 8,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "weekday",
    "month": 12,
    "count": 16755,
    "low": 15229,
    "high": 17927,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "friday",
    "month": null,
    "count": 17927,
    "low": 17502,
    "high": 17927,
    "games": 8,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "friday",
    "month": 3,
    "count": 17927,
    "low": 17927,
    "high": 17927,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "saturday",
    "month": null,
    "count": 17927,
    "low": 17420,
    "high": 17927,
    "games": 13,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "saturday",
    "month": 1,
    "count": 17927,
    "low": 17927,
    "high": 17927,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "saturday",
    "month": 11,
    "count": 17927,
    "low": 17652,
    "high": 18186,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "sunday",
    "month": null,
    "count": 17927,
    "low": 17003,
    "high": 17927,
    "games": 13,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "sunday",
    "month": 3,
    "count": 17927,
    "low": 17696,
    "high": 17927,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "dayClass": "sunday",
    "month": 12,
    "count": 16182,
    "low": 15482,
    "high": 17055,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "all",
    "month": null,
    "count": 50050,
    "low": 47356,
    "high": 52197,
    "games": 240,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 53595,
    "low": 34762,
    "high": 53654,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 49977,
    "low": 46318,
    "high": 51985,
    "games": 116,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 3,
    "count": 52420,
    "low": 51834,
    "high": 52904,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 4,
    "count": 50182,
    "low": 48138,
    "high": 52143,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 5,
    "count": 48043,
    "low": 44634,
    "high": 51160,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 6,
    "count": 50705,
    "low": 48930,
    "high": 53207,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 7,
    "count": 51368,
    "low": 48105,
    "high": 52779,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 8,
    "count": 48395,
    "low": 46367,
    "high": 50913,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "weekday",
    "month": 9,
    "count": 48433,
    "low": 45150,
    "high": 50805,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 49606,
    "low": 47533,
    "high": 51951,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 3,
    "count": 51540,
    "low": 49532,
    "high": 51785,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 4,
    "count": 53665,
    "low": 50618,
    "high": 53719,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 5,
    "count": 50834,
    "low": 47187,
    "high": 51057,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 6,
    "count": 49580,
    "low": 46850,
    "high": 51841,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 7,
    "count": 49430,
    "low": 48248,
    "high": 49808,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 8,
    "count": 48664,
    "low": 46384,
    "high": 52496,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "friday",
    "month": 9,
    "count": 49073,
    "low": 48145,
    "high": 49847,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 50697,
    "low": 48734,
    "high": 53277,
    "games": 47,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 3,
    "count": 51788,
    "low": 48404,
    "high": 52564,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 53507,
    "low": 47379,
    "high": 53820,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 50084,
    "low": 49009,
    "high": 50978,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 51939,
    "low": 50538,
    "high": 53280,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 7,
    "count": 51185,
    "low": 49340,
    "high": 52584,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 8,
    "count": 48890,
    "low": 47733,
    "high": 51377,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 51280,
    "low": 49091,
    "high": 52656,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 49472,
    "low": 46659,
    "high": 51577,
    "games": 38,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": 4,
    "count": 49472,
    "low": 49323,
    "high": 50552,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": 5,
    "count": 51997,
    "low": 50677,
    "high": 52656,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": 6,
    "count": 50215,
    "low": 48893,
    "high": 53385,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": 7,
    "count": 45017,
    "low": 41850,
    "high": 47602,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": 8,
    "count": 47512,
    "low": 45394,
    "high": 50743,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 48085,
    "low": 46601,
    "high": 50730,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "all",
    "month": null,
    "count": 16065,
    "low": 14748,
    "high": 16374,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "opener",
    "month": null,
    "count": 17278,
    "low": 17262,
    "high": 17450,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "preseason",
    "month": null,
    "count": 10629,
    "low": 10449,
    "high": 11038,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": null,
    "count": 15556,
    "low": 14518,
    "high": 16214,
    "games": 49,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 16135,
    "low": 15492,
    "high": 16258,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 16214,
    "low": 16214,
    "high": 16714,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 15880,
    "low": 14369,
    "high": 16239,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 15382,
    "low": 15153,
    "high": 16360,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 10,
    "count": 16145,
    "low": 15210,
    "high": 16660,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 14729,
    "low": 14269,
    "high": 15216,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 16102,
    "low": 14149,
    "high": 16214,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "friday",
    "month": null,
    "count": 15596,
    "low": 14588,
    "high": 16220,
    "games": 27,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "friday",
    "month": 3,
    "count": 15177,
    "low": 14727,
    "high": 15958,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "friday",
    "month": 4,
    "count": 17174,
    "low": 15592,
    "high": 17174,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "friday",
    "month": 11,
    "count": 15241,
    "low": 14568,
    "high": 17174,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "friday",
    "month": 12,
    "count": 16052,
    "low": 15171,
    "high": 16122,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "saturday",
    "month": null,
    "count": 16214,
    "low": 15748,
    "high": 16472,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 16214,
    "low": 15981,
    "high": 16214,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 16041,
    "low": 15305,
    "high": 16343,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": null,
    "count": 16214,
    "low": 15571,
    "high": 16601,
    "games": 31,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": 1,
    "count": 16197,
    "low": 15203,
    "high": 16686,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": 2,
    "count": 16370,
    "low": 16292,
    "high": 16772,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": 3,
    "count": 16214,
    "low": 16152,
    "high": 16817,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": 4,
    "count": 16731,
    "low": 16576,
    "high": 16986,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": 11,
    "count": 16153,
    "low": 15503,
    "high": 16412,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 15328,
    "low": 14765,
    "high": 15636,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "all",
    "month": null,
    "count": 21215,
    "low": 19287,
    "high": 23627,
    "games": 31,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "weekday",
    "month": null,
    "count": 17880,
    "low": 16040,
    "high": 19492,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "saturday",
    "month": null,
    "count": 22198,
    "low": 20043,
    "high": 25174,
    "games": 21,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "saturday",
    "month": 3,
    "count": 22736,
    "low": 22229,
    "high": 23955,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "saturday",
    "month": 5,
    "count": 23210,
    "low": 22459,
    "high": 24215,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "saturday",
    "month": 7,
    "count": 21113,
    "low": 20335,
    "high": 22341,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "saturday",
    "month": 9,
    "count": 21846,
    "low": 18364,
    "high": 25227,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "saturday",
    "month": 10,
    "count": 18312,
    "low": 18039,
    "high": 22443,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "dayClass": "sunday",
    "month": null,
    "count": 20259,
    "low": 19279,
    "high": 22616,
    "games": 6,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "all",
    "month": null,
    "count": 18145,
    "low": 17084,
    "high": 18145,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "opener",
    "month": null,
    "count": 18145,
    "low": 18145,
    "high": 18146,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 17447,
    "low": 16747,
    "high": 18145,
    "games": 64,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 18145,
    "low": 17281,
    "high": 18145,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 17226,
    "low": 16631,
    "high": 18145,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 3,
    "count": 17070,
    "low": 16514,
    "high": 18145,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 4,
    "count": 17900,
    "low": 17169,
    "high": 18145,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 10,
    "count": 15510,
    "low": 14940,
    "high": 16427,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 17395,
    "low": 16909,
    "high": 17855,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 18144,
    "low": 16438,
    "high": 18145,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": null,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 48,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 3,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 4,
    "count": 18139,
    "low": 17550,
    "high": 18145,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 10,
    "count": 18145,
    "low": 17517,
    "high": 18145,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 11,
    "count": 18145,
    "low": 17522,
    "high": 18145,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": 3,
    "count": 18145,
    "low": 18145,
    "high": 18145,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "all",
    "month": null,
    "count": 22119,
    "low": 22066,
    "high": 22166,
    "games": 32,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 22120,
    "low": 22042,
    "high": 22158,
    "games": 7,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 22120,
    "low": 22101,
    "high": 22144,
    "games": 18,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": 3,
    "count": 22071,
    "low": 22028,
    "high": 22127,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 22116,
    "low": 22091,
    "high": 22172,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 22105,
    "low": 22062,
    "high": 22126,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "saturday",
    "month": 7,
    "count": 22127,
    "low": 22122,
    "high": 22214,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 22164,
    "low": 22079,
    "high": 22729,
    "games": 6,
    "seasons": "2025"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "all",
    "month": null,
    "count": 18997,
    "low": 18956,
    "high": 18997,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "opener",
    "month": null,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "preseason",
    "month": null,
    "count": 18190,
    "low": 17050,
    "high": 18997,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 18997,
    "low": 18685,
    "high": 18997,
    "games": 62,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 18747,
    "low": 18397,
    "high": 18997,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 18997,
    "low": 18731,
    "high": 18997,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 3,
    "count": 18997,
    "low": 18572,
    "high": 18997,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 4,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 18997,
    "low": 18841,
    "high": 18997,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": null,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": 1,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": 2,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": 3,
    "count": 18997,
    "low": 18791,
    "high": 18997,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": 4,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "friday",
    "month": 11,
    "count": 18997,
    "low": 18741,
    "high": 18997,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 3,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": 1,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": 3,
    "count": 18997,
    "low": 18997,
    "high": 18997,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": 11,
    "count": 18997,
    "low": 18831,
    "high": 18997,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "dayClass": "sunday",
    "month": 12,
    "count": 18997,
    "low": 17052,
    "high": 18997,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "all",
    "month": null,
    "count": 72969,
    "low": 72214,
    "high": 73612,
    "games": 22,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 74484,
    "low": 72915,
    "high": 74613,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "preseason",
    "month": null,
    "count": 70655,
    "low": 70362,
    "high": 71249,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 72851,
    "low": 72387,
    "high": 73334,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 72887,
    "low": 72055,
    "high": 74400,
    "games": 17,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 73267,
    "low": 72842,
    "high": 73471,
    "games": 5,
    "seasons": "2023–2024"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": 11,
    "count": 74400,
    "low": 72704,
    "high": 75323,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "venueId": "sofi-stadium",
    "dayClass": "sunday",
    "month": 12,
    "count": 73190,
    "low": 72674,
    "high": 73795,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "venueId": "rose-bowl",
    "dayClass": "all",
    "month": null,
    "count": 42012,
    "low": 36881,
    "high": 48974,
    "games": 15,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "venueId": "rose-bowl",
    "dayClass": "opener",
    "month": null,
    "count": 43705,
    "low": 39369,
    "high": 45758,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "venueId": "rose-bowl",
    "dayClass": "saturday",
    "month": null,
    "count": 42012,
    "low": 38201,
    "high": 44481,
    "games": 13,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "venueId": "rose-bowl",
    "dayClass": "saturday",
    "month": 10,
    "count": 39256,
    "low": 35561,
    "high": 42012,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-football",
    "venueId": "rose-bowl",
    "dayClass": "saturday",
    "month": 11,
    "count": 43460,
    "low": 39261,
    "high": 53447,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 7044,
    "low": 5251,
    "high": 9046,
    "games": 48,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "opener",
    "month": null,
    "count": 4489,
    "low": 4052,
    "high": 5636,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 6224,
    "low": 5017,
    "high": 8428,
    "games": 25,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": 1,
    "count": 9288,
    "low": 6695,
    "high": 10235,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 7353,
    "low": 6367,
    "high": 9436,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": 11,
    "count": 4735,
    "low": 4222,
    "high": 4930,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": 12,
    "count": 5553,
    "low": 5017,
    "high": 6089,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "friday",
    "month": null,
    "count": 5188,
    "low": 4399,
    "high": 6461,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "friday",
    "month": 11,
    "count": 5078,
    "low": 4484,
    "high": 6259,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "saturday",
    "month": null,
    "count": 8084,
    "low": 7277,
    "high": 10049,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "saturday",
    "month": 1,
    "count": 7393,
    "low": 7226,
    "high": 8105,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "saturday",
    "month": 2,
    "count": 9156,
    "low": 8723,
    "high": 10036,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "venueId": "pauley-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 9015,
    "low": 7774,
    "high": 9276,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "all",
    "month": null,
    "count": 5380,
    "low": 3641,
    "high": 6846,
    "games": 24,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": null,
    "count": 3590,
    "low": 3056,
    "high": 4282,
    "games": 8,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "weekday",
    "month": 2,
    "count": 4428,
    "low": 3290,
    "high": 5782,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "saturday",
    "month": null,
    "count": 7904,
    "low": 4282,
    "high": 11846,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "sunday",
    "month": null,
    "count": 5554,
    "low": 4977,
    "high": 7079,
    "games": 12,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "sunday",
    "month": 2,
    "count": 6184,
    "low": 5468,
    "high": 6917,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "venueId": "pauley-pavilion",
    "dayClass": "sunday",
    "month": 11,
    "count": 4676,
    "low": 3348,
    "high": 7644,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "venueId": "coliseum",
    "dayClass": "all",
    "month": null,
    "count": 68614,
    "low": 64763,
    "high": 73460,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "venueId": "coliseum",
    "dayClass": "opener",
    "month": null,
    "count": 63411,
    "low": 63126,
    "high": 65761,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "venueId": "coliseum",
    "dayClass": "saturday",
    "month": null,
    "count": 70929,
    "low": 65715,
    "high": 73899,
    "games": 14,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "venueId": "coliseum",
    "dayClass": "saturday",
    "month": 9,
    "count": 67414,
    "low": 66139,
    "high": 69240,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "venueId": "coliseum",
    "dayClass": "saturday",
    "month": 10,
    "count": 69083,
    "low": 62575,
    "high": 75313,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "venueId": "coliseum",
    "dayClass": "saturday",
    "month": 11,
    "count": 72244,
    "low": 70271,
    "high": 72992,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "all",
    "month": null,
    "count": 5337,
    "low": 4491,
    "high": 6593,
    "games": 47,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "opener",
    "month": null,
    "count": 3902,
    "low": 3598,
    "high": 5057,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": null,
    "count": 4730,
    "low": 3885,
    "high": 5788,
    "games": 23,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 5050,
    "low": 4666,
    "high": 5975,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 5421,
    "low": 4927,
    "high": 6195,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 3264,
    "low": 3179,
    "high": 3634,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 4039,
    "low": 3535,
    "high": 4250,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "saturday",
    "month": null,
    "count": 6645,
    "low": 6454,
    "high": 8346,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 7007,
    "low": 6595,
    "high": 8241,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 6516,
    "low": 6442,
    "high": 6619,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "sunday",
    "month": null,
    "count": 4522,
    "low": 4127,
    "high": 5394,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "sunday",
    "month": 11,
    "count": 4450,
    "low": 4051,
    "high": 4758,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "venueId": "galen-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 4575,
    "low": 4127,
    "high": 5394,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "all",
    "month": null,
    "count": 4818,
    "low": 3594,
    "high": 6137,
    "games": 29,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": null,
    "count": 4020,
    "low": 3038,
    "high": 4474,
    "games": 15,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 4474,
    "low": 4292,
    "high": 4795,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 4974,
    "low": 4098,
    "high": 6932,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 3012,
    "low": 2980,
    "high": 3038,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 2785,
    "low": 2457,
    "high": 3189,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "saturday",
    "month": null,
    "count": 8393,
    "low": 7336,
    "high": 8928,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "sunday",
    "month": null,
    "count": 6009,
    "low": 5494,
    "high": 8243,
    "games": 8,
    "seasons": "2025–2026"
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "venueId": "galen-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 6137,
    "low": 5478,
    "high": 7090,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "venueId": "wien-stadium",
    "dayClass": "all",
    "month": null,
    "count": 3865,
    "low": 3451,
    "high": 5176,
    "games": 12,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "venueId": "wien-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 3592,
    "low": 3395,
    "high": 3751,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "venueId": "wien-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 4059,
    "low": 3272,
    "high": 7080,
    "games": 10,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "venueId": "wien-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 6072,
    "low": 3315,
    "high": 11490,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "venueId": "wien-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 3865,
    "low": 3573,
    "high": 4061,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "all",
    "month": null,
    "count": 16514,
    "low": 16029,
    "high": 16514,
    "games": 118,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "opener",
    "month": null,
    "count": 16514,
    "low": 16514,
    "high": 16639,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "preseason",
    "month": null,
    "count": 9813,
    "low": 8275,
    "high": 13343,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": null,
    "count": 16098,
    "low": 15858,
    "high": 16514,
    "games": 62,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 16026,
    "low": 15964,
    "high": 16149,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 16374,
    "low": 16105,
    "high": 16514,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 16027,
    "low": 15570,
    "high": 16113,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 16514,
    "low": 16047,
    "high": 16514,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 10,
    "count": 16117,
    "low": 15410,
    "high": 16434,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 16514,
    "low": 16086,
    "high": 16514,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 16303,
    "low": 15864,
    "high": 16514,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "friday",
    "month": null,
    "count": 16514,
    "low": 16088,
    "high": 16514,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "friday",
    "month": 10,
    "count": 16514,
    "low": 16103,
    "high": 16514,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "friday",
    "month": 12,
    "count": 16185,
    "low": 15777,
    "high": 16553,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": null,
    "count": 16514,
    "low": 16514,
    "high": 16514,
    "games": 27,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 16514,
    "low": 16514,
    "high": 16514,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 3,
    "count": 16514,
    "low": 16514,
    "high": 16514,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 11,
    "count": 16514,
    "low": 16514,
    "high": 16757,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 16514,
    "low": 16514,
    "high": 16514,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "sunday",
    "month": null,
    "count": 16514,
    "low": 15921,
    "high": 16514,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "sunday",
    "month": 4,
    "count": 16514,
    "low": 15962,
    "high": 16514,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "sunday",
    "month": 10,
    "count": 16514,
    "low": 15429,
    "high": 16514,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 15779,
    "low": 14738,
    "high": 16607,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "fordham-football",
    "venueId": "coffey-field",
    "dayClass": "all",
    "month": null,
    "count": 3814,
    "low": 2235,
    "high": 4300,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "fordham-football",
    "venueId": "coffey-field",
    "dayClass": "opener",
    "month": null,
    "count": 3112,
    "low": 2576,
    "high": 5056,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "fordham-football",
    "venueId": "coffey-field",
    "dayClass": "saturday",
    "month": null,
    "count": 3814,
    "low": 2235,
    "high": 4300,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "fordham-football",
    "venueId": "coffey-field",
    "dayClass": "saturday",
    "month": 10,
    "count": 4300,
    "low": 4057,
    "high": 4597,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "all",
    "month": null,
    "count": 8706,
    "low": 7276,
    "high": 10459,
    "games": 24,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 10399,
    "low": 9009,
    "high": 10718,
    "games": 9,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 10559,
    "low": 10052,
    "high": 10954,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 8,
    "count": 10640,
    "low": 7543,
    "high": 12250,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 7680,
    "low": 7115,
    "high": 8996,
    "games": 13,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 7680,
    "low": 6782,
    "high": 8285,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 10689,
    "low": 10221,
    "high": 10954,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "all",
    "month": null,
    "count": 17255,
    "low": 15405,
    "high": 17255,
    "games": 119,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "opener",
    "month": null,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "preseason",
    "month": null,
    "count": 11199,
    "low": 10456,
    "high": 12893,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 15797,
    "low": 14801,
    "high": 17255,
    "games": 64,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 16077,
    "low": 15735,
    "high": 17255,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 3,
    "count": 16540,
    "low": 15218,
    "high": 17255,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 4,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 10,
    "count": 14666,
    "low": 14290,
    "high": 14897,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 15585,
    "low": 14463,
    "high": 16700,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 14877,
    "low": 14226,
    "high": 16889,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "friday",
    "month": null,
    "count": 17255,
    "low": 16567,
    "high": 17255,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "friday",
    "month": 12,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 33,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "saturday",
    "month": 3,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "saturday",
    "month": 11,
    "count": 17255,
    "low": 16887,
    "high": 17255,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 17255,
    "low": 17255,
    "high": 17255,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 17255,
    "low": 16125,
    "high": 17255,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "sunday",
    "month": 3,
    "count": 17255,
    "low": 16719,
    "high": 17255,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "dayClass": "sunday",
    "month": 11,
    "count": 15648,
    "low": 15316,
    "high": 16452,
    "games": 3,
    "seasons": "2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "all",
    "month": null,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 119,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "opener",
    "month": null,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "preseason",
    "month": null,
    "count": 19241,
    "low": 19018,
    "high": 19355,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": null,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 59,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 1,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 2,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 3,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 4,
    "count": 19812,
    "low": 19688,
    "high": 19812,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 11,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 12,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "friday",
    "month": null,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "friday",
    "month": 1,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "friday",
    "month": 4,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "friday",
    "month": 11,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": null,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 23,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 1,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 2,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 12,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": null,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 3,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 4,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 11,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 12,
    "count": 19812,
    "low": 19812,
    "high": 19812,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "all",
    "month": null,
    "count": 16458,
    "low": 15329,
    "high": 17368,
    "games": 43,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": null,
    "count": 16014,
    "low": 15059,
    "high": 17222,
    "games": 26,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 5,
    "count": 14973,
    "low": 14907,
    "high": 15212,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 6,
    "count": 15131,
    "low": 14978,
    "high": 15382,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 7,
    "count": 17074,
    "low": 16163,
    "high": 17370,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 8,
    "count": 16071,
    "low": 15312,
    "high": 16971,
    "games": 9,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 9,
    "count": 17532,
    "low": 16995,
    "high": 17557,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "friday",
    "month": null,
    "count": 17515,
    "low": 16430,
    "high": 17547,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "saturday",
    "month": null,
    "count": 16383,
    "low": 16165,
    "high": 16823,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "saturday",
    "month": 6,
    "count": 16383,
    "low": 16345,
    "high": 16461,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "venueId": "barclays-center",
    "dayClass": "sunday",
    "month": null,
    "count": 17343,
    "low": 17174,
    "high": 17498,
    "games": 7,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "all",
    "month": null,
    "count": 35162,
    "low": 29394,
    "high": 39906,
    "games": 244,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "opener",
    "month": null,
    "count": 42137,
    "low": 41793,
    "high": 43041,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": null,
    "count": 33934,
    "low": 28086,
    "high": 36848,
    "games": 121,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": 4,
    "count": 32645,
    "low": 23422,
    "high": 34720,
    "games": 26,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": 5,
    "count": 34247,
    "low": 28576,
    "high": 35840,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": 6,
    "count": 36527,
    "low": 33438,
    "high": 38890,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": 7,
    "count": 31735,
    "low": 27949,
    "high": 36335,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": 8,
    "count": 34867,
    "low": 28331,
    "high": 39858,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "weekday",
    "month": 9,
    "count": 32044,
    "low": 26270,
    "high": 35982,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": null,
    "count": 36349,
    "low": 29764,
    "high": 41040,
    "games": 37,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": 4,
    "count": 36233,
    "low": 24159,
    "high": 36349,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": 5,
    "count": 39695,
    "low": 32078,
    "high": 40648,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": 6,
    "count": 38438,
    "low": 32465,
    "high": 39077,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": 7,
    "count": 35006,
    "low": 33466,
    "high": 37402,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": 8,
    "count": 36756,
    "low": 31073,
    "high": 41884,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "friday",
    "month": 9,
    "count": 34624,
    "low": 29474,
    "high": 40651,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": null,
    "count": 37925,
    "low": 34739,
    "high": 41418,
    "games": 46,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 4,
    "count": 37925,
    "low": 33673,
    "high": 38222,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 5,
    "count": 39429,
    "low": 37189,
    "high": 41266,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 6,
    "count": 37338,
    "low": 34690,
    "high": 39966,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 7,
    "count": 38371,
    "low": 35753,
    "high": 41309,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 8,
    "count": 34744,
    "low": 32408,
    "high": 42852,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 9,
    "count": 37468,
    "low": 34556,
    "high": 42582,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": null,
    "count": 37477,
    "low": 30300,
    "high": 41041,
    "games": 40,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": 4,
    "count": 37736,
    "low": 33891,
    "high": 38299,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": 5,
    "count": 40825,
    "low": 40333,
    "high": 41509,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": 6,
    "count": 38770,
    "low": 31257,
    "high": 41455,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": 7,
    "count": 36102,
    "low": 28829,
    "high": 40247,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": 8,
    "count": 30596,
    "low": 26926,
    "high": 37493,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "dayClass": "sunday",
    "month": 9,
    "count": 36818,
    "low": 30460,
    "high": 42226,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "all",
    "month": null,
    "count": 17732,
    "low": 17051,
    "high": 17928,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "opener",
    "month": null,
    "count": 17926,
    "low": 17737,
    "high": 17929,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "preseason",
    "month": null,
    "count": 13849,
    "low": 12904,
    "high": 14966,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": null,
    "count": 17548,
    "low": 16554,
    "high": 17926,
    "games": 67,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 16997,
    "low": 16094,
    "high": 17732,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 17294,
    "low": 16551,
    "high": 17921,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 3,
    "count": 17317,
    "low": 16516,
    "high": 17806,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 4,
    "count": 17732,
    "low": 17191,
    "high": 17829,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 17934,
    "low": 17274,
    "high": 18094,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 17148,
    "low": 16562,
    "high": 18094,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "friday",
    "month": null,
    "count": 17894,
    "low": 17548,
    "high": 17990,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "friday",
    "month": 1,
    "count": 17638,
    "low": 17548,
    "high": 17832,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "friday",
    "month": 3,
    "count": 17926,
    "low": 17910,
    "high": 17972,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "friday",
    "month": 11,
    "count": 17893,
    "low": 17744,
    "high": 18019,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "friday",
    "month": 12,
    "count": 17732,
    "low": 17160,
    "high": 17861,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "saturday",
    "month": null,
    "count": 17926,
    "low": 17732,
    "high": 17983,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 17910,
    "low": 17772,
    "high": 17953,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "saturday",
    "month": 12,
    "count": 17829,
    "low": 17563,
    "high": 17936,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "sunday",
    "month": null,
    "count": 17548,
    "low": 17172,
    "high": 17865,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "sunday",
    "month": 3,
    "count": 17865,
    "low": 17740,
    "high": 17985,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "sunday",
    "month": 4,
    "count": 17495,
    "low": 17195,
    "high": 17781,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "sunday",
    "month": 11,
    "count": 17548,
    "low": 17086,
    "high": 17732,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "dayClass": "sunday",
    "month": 12,
    "count": 17027,
    "low": 16489,
    "high": 17643,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "all",
    "month": null,
    "count": 78251,
    "low": 76546,
    "high": 81883,
    "games": 22,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 80809,
    "low": 80750,
    "high": 81359,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "preseason",
    "month": null,
    "count": 73930,
    "low": 72951,
    "high": 75108,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 79466,
    "low": 78040,
    "high": 80710,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 77994,
    "low": 76515,
    "high": 82211,
    "games": 17,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 82225,
    "low": 80956,
    "high": 82926,
    "games": 4,
    "seasons": "2023–2024"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 11,
    "count": 82211,
    "low": 77994,
    "high": 82438,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 12,
    "count": 76515,
    "low": 76143,
    "high": 77455,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "all",
    "month": null,
    "count": 76871,
    "low": 71047,
    "high": 81084,
    "games": 21,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 83253,
    "low": 82033,
    "high": 83299,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "preseason",
    "month": null,
    "count": 69102,
    "low": 66844,
    "high": 71241,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 76871,
    "low": 71047,
    "high": 80878,
    "games": 17,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 80878,
    "low": 80877,
    "high": 81561,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 10,
    "count": 81100,
    "low": 78108,
    "high": 82071,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 11,
    "count": 72623,
    "low": 71318,
    "high": 76603,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "venueId": "metlife-stadium",
    "dayClass": "sunday",
    "month": 12,
    "count": 73706,
    "low": 71428,
    "high": 76267,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "all",
    "month": null,
    "count": 18006,
    "low": 17576,
    "high": 18006,
    "games": 120,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "opener",
    "month": null,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "preseason",
    "month": null,
    "count": 16643,
    "low": 16310,
    "high": 17110,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": null,
    "count": 18006,
    "low": 17498,
    "high": 18006,
    "games": 75,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 1,
    "count": 18006,
    "low": 17654,
    "high": 18006,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 2,
    "count": 18006,
    "low": 17288,
    "high": 18006,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 3,
    "count": 17475,
    "low": 17249,
    "high": 18006,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 4,
    "count": 18006,
    "low": 17502,
    "high": 18006,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 10,
    "count": 18006,
    "low": 17634,
    "high": 18006,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 11,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 12,
    "count": 18006,
    "low": 17729,
    "high": 18006,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "friday",
    "month": null,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "friday",
    "month": 12,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": null,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 3,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 11,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 12,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": null,
    "count": 18006,
    "low": 17484,
    "high": 18006,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 3,
    "count": 17678,
    "low": 17339,
    "high": 18006,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 11,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 12,
    "count": 18006,
    "low": 18006,
    "high": 18006,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "citi-field",
    "dayClass": "all",
    "month": null,
    "count": 21611,
    "low": 20485,
    "high": 27782,
    "games": 11,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": null,
    "count": 24428,
    "low": 21285,
    "high": 27782,
    "games": 7,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "citi-field",
    "dayClass": "saturday",
    "month": 4,
    "count": 21073,
    "low": 20485,
    "high": 21285,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "yankee-stadium",
    "dayClass": "all",
    "month": null,
    "count": 19679,
    "low": 18574,
    "high": 20190,
    "games": 19,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 18062,
    "low": 17413,
    "high": 19153,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 20622,
    "low": 20405,
    "high": 21035,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 20102,
    "low": 19482,
    "high": 20330,
    "games": 8,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 18524,
    "low": 18402,
    "high": 19301,
    "games": 3,
    "seasons": "2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "all",
    "month": null,
    "count": 18660,
    "low": 17525,
    "high": 21875,
    "games": 32,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 15496,
    "low": 14130,
    "high": 16026,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 19828,
    "low": 18039,
    "high": 23870,
    "games": 27,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 3,
    "count": 18185,
    "low": 17449,
    "high": 21702,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 17525,
    "low": 17501,
    "high": 18407,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 20187,
    "low": 18856,
    "high": 21706,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 18315,
    "low": 18039,
    "high": 21293,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 8,
    "count": 19951,
    "low": 19432,
    "high": 20688,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 22485,
    "low": 19240,
    "high": 25237,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "all",
    "month": null,
    "count": 8634,
    "low": 8115,
    "high": 9498,
    "games": 43,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "opener",
    "month": null,
    "count": 8072,
    "low": 7192,
    "high": 8080,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": null,
    "count": 8361,
    "low": 7879,
    "high": 9050,
    "games": 23,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 1,
    "count": 8422,
    "low": 8205,
    "high": 9050,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 2,
    "count": 8498,
    "low": 7783,
    "high": 8681,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 11,
    "count": 6957,
    "low": 6196,
    "high": 7795,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "weekday",
    "month": 12,
    "count": 8770,
    "low": 8088,
    "high": 9869,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": null,
    "count": 9419,
    "low": 8335,
    "high": 10481,
    "games": 15,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 1,
    "count": 9652,
    "low": 8326,
    "high": 10481,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 2,
    "count": 10222,
    "low": 9639,
    "high": 10352,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "saturday",
    "month": 11,
    "count": 4815,
    "low": 1269,
    "high": 8410,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "venueId": "prudential-center",
    "dayClass": "sunday",
    "month": null,
    "count": 8835,
    "low": 8726,
    "high": 8994,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "carnesecca-arena",
    "dayClass": "all",
    "month": null,
    "count": 5602,
    "low": 5260,
    "high": 5602,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "carnesecca-arena",
    "dayClass": "opener",
    "month": null,
    "count": 5602,
    "low": 5431,
    "high": 5602,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "carnesecca-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 5260,
    "low": 5260,
    "high": 5602,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "carnesecca-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 5431,
    "low": 5260,
    "high": 5602,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "carnesecca-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 5602,
    "low": 5602,
    "high": 5602,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "carnesecca-arena",
    "dayClass": "saturday",
    "month": 11,
    "count": 5602,
    "low": 5517,
    "high": 5602,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "all",
    "month": null,
    "count": 16521,
    "low": 14188,
    "high": 19812,
    "games": 33,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": null,
    "count": 14319,
    "low": 13470,
    "high": 14545,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 1,
    "count": 13470,
    "low": 12808,
    "high": 14069,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "weekday",
    "month": 3,
    "count": 19812,
    "low": 17066,
    "high": 19812,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": null,
    "count": 19122,
    "low": 16425,
    "high": 19812,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 1,
    "count": 18178,
    "low": 15196,
    "high": 18613,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 2,
    "count": 19570,
    "low": 19295,
    "high": 19812,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "saturday",
    "month": 3,
    "count": 19812,
    "low": 18891,
    "high": 19812,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": null,
    "count": 16061,
    "low": 12248,
    "high": 19812,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "madison-square-garden",
    "dayClass": "sunday",
    "month": 2,
    "count": 19812,
    "low": 15937,
    "high": 19812,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "venueId": "ubs-arena",
    "dayClass": "all",
    "month": null,
    "count": 7486,
    "low": 6761,
    "high": 8535,
    "games": 3,
    "seasons": "2024"
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "venueId": "lavalle-stadium",
    "dayClass": "all",
    "month": null,
    "count": 5467,
    "low": 4129,
    "high": 6049,
    "games": 14,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "venueId": "lavalle-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 8062,
    "low": 6801,
    "high": 9597,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "venueId": "lavalle-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 5467,
    "low": 4129,
    "high": 6049,
    "games": 14,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "venueId": "lavalle-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 4248,
    "low": 3658,
    "high": 5056,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "venueId": "lavalle-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 6701,
    "low": 6142,
    "high": 7599,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "venueId": "lavalle-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 5263,
    "low": 4117,
    "high": 5671,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "all",
    "month": null,
    "count": 42118,
    "low": 39100,
    "high": 45255,
    "games": 242,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 47812,
    "low": 47010,
    "high": 48300,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": null,
    "count": 40249,
    "low": 37454,
    "high": 41546,
    "games": 119,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": 4,
    "count": 38286,
    "low": 36169,
    "high": 40673,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": 5,
    "count": 38360,
    "low": 37590,
    "high": 40343,
    "games": 21,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": 6,
    "count": 40506,
    "low": 37305,
    "high": 42434,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": 7,
    "count": 41219,
    "low": 38641,
    "high": 44292,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": 8,
    "count": 40744,
    "low": 37690,
    "high": 41421,
    "games": 22,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "weekday",
    "month": 9,
    "count": 40155,
    "low": 37495,
    "high": 41217,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 45292,
    "low": 43476,
    "high": 46656,
    "games": 37,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": 4,
    "count": 40150,
    "low": 35863,
    "high": 44703,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": 5,
    "count": 43274,
    "low": 41269,
    "high": 45816,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": 6,
    "count": 46488,
    "low": 45468,
    "high": 46971,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": 7,
    "count": 46734,
    "low": 46358,
    "high": 47032,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": 8,
    "count": 44883,
    "low": 42297,
    "high": 46027,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "friday",
    "month": 9,
    "count": 45674,
    "low": 44770,
    "high": 46506,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 45222,
    "low": 43173,
    "high": 46378,
    "games": 45,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": 4,
    "count": 43037,
    "low": 42115,
    "high": 44069,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 44534,
    "low": 43408,
    "high": 45791,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": 6,
    "count": 46116,
    "low": 45231,
    "high": 47121,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": 7,
    "count": 43305,
    "low": 43164,
    "high": 46063,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": 8,
    "count": 44744,
    "low": 41590,
    "high": 45682,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 46085,
    "low": 46069,
    "high": 46378,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 43658,
    "low": 41802,
    "high": 45318,
    "games": 41,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": 4,
    "count": 40110,
    "low": 37342,
    "high": 40476,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": 5,
    "count": 42373,
    "low": 41130,
    "high": 43399,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": 6,
    "count": 46046,
    "low": 45356,
    "high": 46414,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": 7,
    "count": 45178,
    "low": 43342,
    "high": 45343,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": 8,
    "count": 43948,
    "low": 42350,
    "high": 44794,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 44556,
    "low": 43477,
    "high": 45382,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "all",
    "month": null,
    "count": 41914,
    "low": 40242,
    "high": 43670,
    "games": 240,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "opener",
    "month": null,
    "count": 45568,
    "low": 30760,
    "high": 45621,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": null,
    "count": 40534,
    "low": 39028,
    "high": 42663,
    "games": 115,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 3,
    "count": 43508,
    "low": 43026,
    "high": 43947,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 4,
    "count": 39048,
    "low": 37343,
    "high": 41527,
    "games": 23,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 5,
    "count": 40363,
    "low": 34458,
    "high": 41419,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 6,
    "count": 40679,
    "low": 39079,
    "high": 42590,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 7,
    "count": 41574,
    "low": 39470,
    "high": 43109,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 8,
    "count": 40447,
    "low": 39770,
    "high": 41673,
    "games": 17,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "weekday",
    "month": 9,
    "count": 41566,
    "low": 40177,
    "high": 42732,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": null,
    "count": 43388,
    "low": 41341,
    "high": 44392,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 3,
    "count": 44896,
    "low": 42977,
    "high": 45162,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 4,
    "count": 43319,
    "low": 42454,
    "high": 44089,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 5,
    "count": 42579,
    "low": 41258,
    "high": 43447,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 6,
    "count": 42159,
    "low": 41282,
    "high": 43153,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 7,
    "count": 44057,
    "low": 43856,
    "high": 44390,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 8,
    "count": 44293,
    "low": 42510,
    "high": 44629,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "friday",
    "month": 9,
    "count": 42765,
    "low": 41970,
    "high": 44530,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": null,
    "count": 43097,
    "low": 41707,
    "high": 44495,
    "games": 47,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 3,
    "count": 40587,
    "low": 38846,
    "high": 42478,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 4,
    "count": 43273,
    "low": 43018,
    "high": 44066,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 5,
    "count": 42356,
    "low": 41360,
    "high": 42723,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 6,
    "count": 42636,
    "low": 40770,
    "high": 43241,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 7,
    "count": 43371,
    "low": 43147,
    "high": 44432,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 8,
    "count": 43078,
    "low": 42197,
    "high": 44155,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "saturday",
    "month": 9,
    "count": 43945,
    "low": 42220,
    "high": 44892,
    "games": 10,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": null,
    "count": 42037,
    "low": 41087,
    "high": 43483,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": 4,
    "count": 42221,
    "low": 42037,
    "high": 42706,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": 5,
    "count": 42560,
    "low": 40578,
    "high": 43741,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": 6,
    "count": 42014,
    "low": 41387,
    "high": 42064,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": 7,
    "count": 41675,
    "low": 41112,
    "high": 42132,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": 8,
    "count": 42597,
    "low": 41411,
    "high": 43834,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "dayClass": "sunday",
    "month": 9,
    "count": 42996,
    "low": 40954,
    "high": 44772,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "san-diego-fc",
    "venueId": "snapdragon-stadium",
    "dayClass": "all",
    "month": null,
    "count": 27962,
    "low": 27127,
    "high": 28600,
    "games": 16,
    "seasons": "2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "san-diego-fc",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 28116,
    "low": 27158,
    "high": 29437,
    "games": 13,
    "seasons": "2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "san-diego-fc",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": 5,
    "count": 27121,
    "low": 26639,
    "high": 27878,
    "games": 4,
    "seasons": "2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "all",
    "month": null,
    "count": 24822,
    "low": 22533,
    "high": 29065,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 23867,
    "low": 22246,
    "high": 24524,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 23374,
    "low": 22603,
    "high": 26197,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 25318,
    "low": 22595,
    "high": 29201,
    "games": 13,
    "seasons": "2023–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 28344,
    "low": 24575,
    "high": 31531,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 27122,
    "low": 27030,
    "high": 29215,
    "games": 3,
    "seasons": "2023–2024"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 22846,
    "low": 22149,
    "high": 24018,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "all",
    "month": null,
    "count": 12414,
    "low": 12240,
    "high": 12414,
    "games": 41,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "opener",
    "month": null,
    "count": 12414,
    "low": 12029,
    "high": 12414,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 12414,
    "low": 12009,
    "high": 12414,
    "games": 26,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 12414,
    "low": 12414,
    "high": 12414,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 12414,
    "low": 12414,
    "high": 12414,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 12366,
    "low": 12240,
    "high": 12414,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 11683,
    "low": 10992,
    "high": 12173,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 12414,
    "low": 12414,
    "high": 12414,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 12414,
    "low": 10544,
    "high": 12414,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 12414,
    "low": 12414,
    "high": 12414,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 12414,
    "low": 12414,
    "high": 12414,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "all",
    "month": null,
    "count": 1701,
    "low": 1206,
    "high": 2160,
    "games": 27,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 1356,
    "low": 1184,
    "high": 2528,
    "games": 12,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 1272,
    "low": 1184,
    "high": 3028,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 2135,
    "low": 1747,
    "high": 3112,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 1220,
    "low": 1069,
    "high": 2464,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 1615,
    "low": 1353,
    "high": 1996,
    "games": 12,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 1928,
    "low": 1658,
    "high": 2157,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 1830,
    "low": 1643,
    "high": 1896,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "venueId": "viejas-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 1183,
    "low": 1179,
    "high": 1297,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "all",
    "month": null,
    "count": 15549,
    "low": 11836,
    "high": 16997,
    "games": 23,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "friday",
    "month": null,
    "count": 16070,
    "low": 12593,
    "high": 16991,
    "games": 6,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "friday",
    "month": 6,
    "count": 17073,
    "low": 16233,
    "high": 20594,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 15834,
    "low": 13072,
    "high": 17063,
    "games": 7,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "sunday",
    "month": null,
    "count": 15549,
    "low": 12760,
    "high": 16024,
    "games": 9,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "sunday",
    "month": 5,
    "count": 12760,
    "low": 11983,
    "high": 14392,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "venueId": "snapdragon-stadium",
    "dayClass": "sunday",
    "month": 9,
    "count": 23541,
    "low": 19584,
    "high": 25029,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "all",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 119,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "opener",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "preseason",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 67,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 12,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 3,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 4,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 10,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 14,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "friday",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 34,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 3,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 4,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 10,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 11,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 11,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "sunday",
    "month": 1,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "sunday",
    "month": 3,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "dayClass": "sunday",
    "month": 12,
    "count": 17151,
    "low": 17151,
    "high": 17151,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "all",
    "month": null,
    "count": 33487,
    "low": 26825,
    "high": 39104,
    "games": 240,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "opener",
    "month": null,
    "count": 44938,
    "low": 43905,
    "high": 45138,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": null,
    "count": 26934,
    "low": 21951,
    "high": 32286,
    "games": 115,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 3,
    "count": 27291,
    "low": 21299,
    "high": 30041,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 4,
    "count": 19238,
    "low": 17275,
    "high": 21594,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 5,
    "count": 24492,
    "low": 20263,
    "high": 27512,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 6,
    "count": 27309,
    "low": 23175,
    "high": 28199,
    "games": 19,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 7,
    "count": 35584,
    "low": 27844,
    "high": 38006,
    "games": 16,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 8,
    "count": 33199,
    "low": 28384,
    "high": 35871,
    "games": 18,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "weekday",
    "month": 9,
    "count": 26432,
    "low": 23008,
    "high": 33600,
    "games": 20,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": null,
    "count": 39614,
    "low": 34256,
    "high": 41824,
    "games": 39,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 3,
    "count": 30013,
    "low": 27537,
    "high": 33500,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 4,
    "count": 31627,
    "low": 28713,
    "high": 33873,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 5,
    "count": 39743,
    "low": 37999,
    "high": 41675,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 6,
    "count": 41814,
    "low": 38096,
    "high": 43369,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 7,
    "count": 42215,
    "low": 41170,
    "high": 43266,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 8,
    "count": 39624,
    "low": 38311,
    "high": 40800,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "friday",
    "month": 9,
    "count": 38411,
    "low": 34636,
    "high": 41241,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": null,
    "count": 38104,
    "low": 33061,
    "high": 43283,
    "games": 45,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 3,
    "count": 35264,
    "low": 33707,
    "high": 39274,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 4,
    "count": 38530,
    "low": 36048,
    "high": 42210,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 5,
    "count": 37457,
    "low": 31790,
    "high": 43501,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 6,
    "count": 41690,
    "low": 36646,
    "high": 45109,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 7,
    "count": 35539,
    "low": 32334,
    "high": 38993,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 8,
    "count": 38027,
    "low": 36629,
    "high": 41423,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "saturday",
    "month": 9,
    "count": 39635,
    "low": 34962,
    "high": 40790,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": null,
    "count": 36204,
    "low": 33474,
    "high": 40871,
    "games": 41,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 3,
    "count": 29331,
    "low": 28514,
    "high": 30066,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 4,
    "count": 31392,
    "low": 29394,
    "high": 33211,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 5,
    "count": 40365,
    "low": 39408,
    "high": 41609,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 6,
    "count": 39937,
    "low": 36743,
    "high": 44401,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 7,
    "count": 35106,
    "low": 34923,
    "high": 35947,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 8,
    "count": 37434,
    "low": 35460,
    "high": 39588,
    "games": 9,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "dayClass": "sunday",
    "month": 9,
    "count": 42345,
    "low": 38195,
    "high": 44199,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "venueId": "lumen-field",
    "dayClass": "all",
    "month": null,
    "count": 7665,
    "low": 6765,
    "high": 9051,
    "games": 24,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "venueId": "lumen-field",
    "dayClass": "weekday",
    "month": null,
    "count": 6947,
    "low": 6224,
    "high": 7499,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "venueId": "lumen-field",
    "dayClass": "friday",
    "month": null,
    "count": 7345,
    "low": 6794,
    "high": 8325,
    "games": 10,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "venueId": "lumen-field",
    "dayClass": "friday",
    "month": 5,
    "count": 7030,
    "low": 6471,
    "high": 7055,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "venueId": "lumen-field",
    "dayClass": "friday",
    "month": 10,
    "count": 7323,
    "low": 6713,
    "high": 8062,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": null,
    "count": 9051,
    "low": 6841,
    "high": 9626,
    "games": 9,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "all",
    "month": null,
    "count": 68729,
    "low": 68668,
    "high": 68770,
    "games": 22,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "opener",
    "month": null,
    "count": 68714,
    "low": 68699,
    "high": 68733,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "preseason",
    "month": null,
    "count": 68425,
    "low": 68190,
    "high": 68458,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "weekday",
    "month": null,
    "count": 68763,
    "low": 68727,
    "high": 68789,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": null,
    "count": 68722,
    "low": 68656,
    "high": 68774,
    "games": 16,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": 9,
    "count": 68658,
    "low": 68629,
    "high": 68679,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": 10,
    "count": 68781,
    "low": 68704,
    "high": 68804,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": 11,
    "count": 68721,
    "low": 68649,
    "high": 68723,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": 12,
    "count": 68766,
    "low": 68757,
    "high": 68769,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "all",
    "month": null,
    "count": 30367,
    "low": 30044,
    "high": 31515,
    "games": 32,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "weekday",
    "month": null,
    "count": 30032,
    "low": 29326,
    "high": 30041,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": null,
    "count": 30563,
    "low": 30095,
    "high": 31797,
    "games": 22,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 3,
    "count": 30107,
    "low": 30072,
    "high": 30700,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 4,
    "count": 30550,
    "low": 30282,
    "high": 31209,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 5,
    "count": 30575,
    "low": 30339,
    "high": 30906,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 6,
    "count": 30097,
    "low": 30081,
    "high": 30332,
    "games": 4,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 7,
    "count": 30129,
    "low": 30073,
    "high": 31517,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 9,
    "count": 31952,
    "low": 30984,
    "high": 32351,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "saturday",
    "month": 10,
    "count": 32913,
    "low": 32250,
    "high": 34627,
    "games": 3,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "dayClass": "sunday",
    "month": null,
    "count": 31102,
    "low": 30552,
    "high": 31491,
    "games": 5,
    "seasons": "2024–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "venueId": "husky-stadium",
    "dayClass": "all",
    "month": null,
    "count": 69107,
    "low": 67229,
    "high": 71312,
    "games": 17,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "venueId": "husky-stadium",
    "dayClass": "opener",
    "month": null,
    "count": 67475,
    "low": 67230,
    "high": 67627,
    "games": 3,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "venueId": "husky-stadium",
    "dayClass": "saturday",
    "month": null,
    "count": 69788,
    "low": 67804,
    "high": 71317,
    "games": 15,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "venueId": "husky-stadium",
    "dayClass": "saturday",
    "month": 9,
    "count": 67264,
    "low": 64522,
    "high": 69618,
    "games": 6,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "venueId": "husky-stadium",
    "dayClass": "saturday",
    "month": 10,
    "count": 69976,
    "low": 68567,
    "high": 71524,
    "games": 4,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "venueId": "husky-stadium",
    "dayClass": "saturday",
    "month": 11,
    "count": 71251,
    "low": 70976,
    "high": 71312,
    "games": 5,
    "seasons": "2023–2025"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "all",
    "month": null,
    "count": 7398,
    "low": 6320,
    "high": 8057,
    "games": 46,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "opener",
    "month": null,
    "count": 5568,
    "low": 5462,
    "high": 5573,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 7078,
    "low": 5933,
    "high": 7883,
    "games": 24,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 7789,
    "low": 5641,
    "high": 8522,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 2,
    "count": 7117,
    "low": 6910,
    "high": 7746,
    "games": 6,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 5349,
    "low": 5041,
    "high": 5680,
    "games": 4,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 7341,
    "low": 6536,
    "high": 7761,
    "games": 8,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 7882,
    "low": 7376,
    "high": 8916,
    "games": 13,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "saturday",
    "month": 1,
    "count": 7419,
    "low": 7398,
    "high": 7651,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "saturday",
    "month": 2,
    "count": 8755,
    "low": 8064,
    "high": 8916,
    "games": 5,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "saturday",
    "month": 12,
    "count": 7251,
    "low": 6384,
    "high": 8273,
    "games": 3,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 7346,
    "low": 6467,
    "high": 8160,
    "games": 7,
    "seasons": "2024–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "sunday",
    "month": 1,
    "count": 8156,
    "low": 7751,
    "high": 8160,
    "games": 3,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "all",
    "month": null,
    "count": 2695,
    "low": 1960,
    "high": 4092,
    "games": 33,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": null,
    "count": 2096,
    "low": 1918,
    "high": 2858,
    "games": 17,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 1,
    "count": 2700,
    "low": 2219,
    "high": 2858,
    "games": 5,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 11,
    "count": 1922,
    "low": 1767,
    "high": 1981,
    "games": 6,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "weekday",
    "month": 12,
    "count": 1870,
    "low": 1770,
    "high": 2493,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "saturday",
    "month": null,
    "count": 3962,
    "low": 2672,
    "high": 6424,
    "games": 4,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "sunday",
    "month": null,
    "count": 4752,
    "low": 3467,
    "high": 5055,
    "games": 10,
    "seasons": "2025–2026"
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "venueId": "alaska-airlines-arena",
    "dayClass": "sunday",
    "month": 2,
    "count": 5134,
    "low": 4819,
    "high": 6212,
    "games": 5,
    "seasons": "2025–2026"
  }
];

/** This season's level per team, once enough home games are in (expectedDrawBuild.ts seasonLevel). */
export const SEASON_LEVELS: SeasonLevelRow[] = [];

/** How each opponent has drawn at each team's games (expectedDrawBuild.ts opponentRatio). */
export const OPPONENT_RATIOS: OpponentRatioRow[] = [
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "cf-montr-al",
    "ratio": 1.122,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "charlotte",
    "ratio": 1.15,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "chicago",
    "ratio": 0.976,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "cincinnati",
    "ratio": 0.991,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "columbus",
    "ratio": 0.986,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "d-c-united",
    "ratio": 1.009,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "miami",
    "ratio": 1.066,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "nashville",
    "ratio": 0.994,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "new-england",
    "ratio": 1.063,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "nycfc",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "orlando",
    "ratio": 0.979,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "philadelphia",
    "ratio": 0.989,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "red-bull-ny",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "opponent": "toronto",
    "ratio": 0.98,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "athletics",
    "ratio": 0.902,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "blue-jays",
    "ratio": 0.983,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "brewers",
    "ratio": 1.013,
    "games": 9
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "cardinals",
    "ratio": 0.968,
    "games": 10
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "cubs",
    "ratio": 1.013,
    "games": 9
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "d-backs",
    "ratio": 0.991,
    "games": 9
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "dodgers",
    "ratio": 1.111,
    "games": 10
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "giants",
    "ratio": 0.973,
    "games": 11
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "guardians",
    "ratio": 0.967,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "marlins",
    "ratio": 0.928,
    "games": 21
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "mets",
    "ratio": 0.968,
    "games": 19
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "nationals",
    "ratio": 0.963,
    "games": 21
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "padres",
    "ratio": 0.964,
    "games": 12
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "phillies",
    "ratio": 1.041,
    "games": 18
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "pirates",
    "ratio": 0.984,
    "games": 9
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "rangers",
    "ratio": 0.961,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "rays",
    "ratio": 0.936,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "red-sox",
    "ratio": 1,
    "games": 8
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "reds",
    "ratio": 1.024,
    "games": 12
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "rockies",
    "ratio": 0.996,
    "games": 9
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "royals",
    "ratio": 1.008,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "opponent": "tigers",
    "ratio": 0.99,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "aces",
    "ratio": 0.996,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "fever",
    "ratio": 0.991,
    "games": 4
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "fire",
    "ratio": 1.017,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "liberty",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "lynx",
    "ratio": 1.015,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "mercury",
    "ratio": 1.022,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "mystics",
    "ratio": 1.002,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "sky",
    "ratio": 1.015,
    "games": 4
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "sparks",
    "ratio": 1.023,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "storm",
    "ratio": 1.039,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "sun",
    "ratio": 1.013,
    "games": 4
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "tempo",
    "ratio": 0.899,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "valkyries",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "dream",
    "opponent": "wings",
    "ratio": 1.012,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "opponent": "buccaneers",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "opponent": "commanders",
    "ratio": 0.998,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "opponent": "panthers",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "opponent": "saints",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "falcons",
    "opponent": "seahawks",
    "ratio": 0.996,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "opponent": "app-state",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-football",
    "opponent": "james-madison",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "app-state",
    "ratio": 1.044,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "arkansas-st",
    "ratio": 1.038,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "coastal",
    "ratio": 0.973,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "ga-southern",
    "ratio": 1.243,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "james-madison",
    "ratio": 0.944,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "marshall",
    "ratio": 1.012,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "n-illinois",
    "ratio": 0.955,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "old-dominion",
    "ratio": 1.079,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "toccoa-falls",
    "ratio": 0.672,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-mbb",
    "opponent": "troy",
    "ratio": 1.04,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "opponent": "app-state",
    "ratio": 0.954,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "opponent": "coastal",
    "ratio": 0.886,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "opponent": "ga-southern",
    "ratio": 0.59,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "opponent": "james-madison",
    "ratio": 0.992,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "opponent": "marshall",
    "ratio": 0.942,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gsu-wbb",
    "opponent": "old-dominion",
    "ratio": 1.091,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-football",
    "opponent": "syracuse",
    "ratio": 1.077,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "alabama-a-m",
    "ratio": 0.969,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "boston-college",
    "ratio": 0.916,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "california",
    "ratio": 0.959,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "clemson",
    "ratio": 1.027,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "duke",
    "ratio": 1.243,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "florida-st",
    "ratio": 1.042,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "ga-southern",
    "ratio": 1.091,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "mississippi-st",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "north-carolina",
    "ratio": 1.185,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "notre-dame",
    "ratio": 0.973,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "pitt",
    "ratio": 1.078,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "syracuse",
    "ratio": 1.148,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "virginia",
    "ratio": 1.036,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "wake-forest",
    "ratio": 1.015,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-mbb",
    "opponent": "west-georgia",
    "ratio": 0.99,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "opponent": "clemson",
    "ratio": 1.006,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "gt-wbb",
    "opponent": "west-georgia",
    "ratio": 1.003,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "76ers",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "bucks",
    "ratio": 0.977,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "bulls",
    "ratio": 0.977,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "cavaliers",
    "ratio": 1.023,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "celtics",
    "ratio": 1.013,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "clippers",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "grizzlies",
    "ratio": 0.996,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "heat",
    "ratio": 0.988,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "hornets",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "jazz",
    "ratio": 0.985,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "kings",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "knicks",
    "ratio": 0.995,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "lakers",
    "ratio": 1.015,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "magic",
    "ratio": 1.013,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "mavericks",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "nets",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "nuggets",
    "ratio": 1.003,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "pacers",
    "ratio": 0.932,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "pelicans",
    "ratio": 0.991,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "pistons",
    "ratio": 0.993,
    "games": 5
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "raptors",
    "ratio": 1.016,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "rockets",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "spurs",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "suns",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "thunder",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "timberwolves",
    "ratio": 0.978,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "trail-blazers",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "warriors",
    "ratio": 1.006,
    "games": 3
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "opponent": "wizards",
    "ratio": 0.966,
    "games": 6
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "fiu",
    "ratio": 1.047,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "georgia-st",
    "ratio": 1.223,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "jacksonville",
    "ratio": 0.565,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "jax-state",
    "ratio": 1.049,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "liberty",
    "ratio": 1.113,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "louisiana-tech",
    "ratio": 0.984,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "mtsu",
    "ratio": 0.974,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "new-mexico-st",
    "ratio": 0.939,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "sam-houston",
    "ratio": 0.874,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-mbb",
    "opponent": "western-ky",
    "ratio": 1.011,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "jax-state",
    "ratio": 1.082,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "liberty",
    "ratio": 1.071,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "life-univ",
    "ratio": 0.931,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "louisiana-tech",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "mtsu",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "new-mexico-st",
    "ratio": 1.039,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "sam-houston",
    "ratio": 0.94,
    "games": 2
  },
  {
    "metroId": "atlanta",
    "teamId": "ksu-wbb",
    "opponent": "utep",
    "ratio": 0.98,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "angel-city",
    "ratio": 1.075,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "chicago",
    "ratio": 1.02,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "gotham",
    "ratio": 0.975,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "houston",
    "ratio": 1.11,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "kansas-city",
    "ratio": 1.008,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "louisville",
    "ratio": 1.05,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "north-carolina",
    "ratio": 1.045,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "orlando",
    "ratio": 0.972,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "portland",
    "ratio": 1.017,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "san-diego",
    "ratio": 1.022,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "seattle",
    "ratio": 1.025,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "bay-fc",
    "opponent": "utah",
    "ratio": 0.961,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-football",
    "opponent": "oregon-st",
    "ratio": 0.945,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "opponent": "bakersfield",
    "ratio": 1.122,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "opponent": "n-western-st",
    "ratio": 0.996,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "opponent": "pacific",
    "ratio": 0.954,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "opponent": "sacramento-st",
    "ratio": 0.981,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "opponent": "smu",
    "ratio": 1.004,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-mbb",
    "opponent": "stanford",
    "ratio": 1.334,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "opponent": "saint-mary-s",
    "ratio": 1.012,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "cal-wbb",
    "opponent": "stanford",
    "ratio": 1.272,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "austin",
    "ratio": 1.024,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "colorado",
    "ratio": 0.979,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "dallas",
    "ratio": 1.008,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "houston",
    "ratio": 0.998,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "kansas-city",
    "ratio": 0.95,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "minnesota",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "portland",
    "ratio": 0.973,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "salt-lake",
    "ratio": 1.046,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "seattle",
    "ratio": 0.987,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "st-louis",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "opponent": "vancouver",
    "ratio": 1.019,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "angels",
    "ratio": 1.014,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "astros",
    "ratio": 0.973,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "athletics",
    "ratio": 1.054,
    "games": 8
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "blue-jays",
    "ratio": 0.947,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "braves",
    "ratio": 0.967,
    "games": 10
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "brewers",
    "ratio": 0.982,
    "games": 10
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "cardinals",
    "ratio": 0.971,
    "games": 9
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "cubs",
    "ratio": 0.996,
    "games": 10
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "d-backs",
    "ratio": 0.976,
    "games": 20
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "dodgers",
    "ratio": 1.11,
    "games": 18
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "marlins",
    "ratio": 0.987,
    "games": 9
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "mets",
    "ratio": 0.996,
    "games": 10
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "nationals",
    "ratio": 1.003,
    "games": 9
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "padres",
    "ratio": 1.033,
    "games": 19
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "phillies",
    "ratio": 1.074,
    "games": 9
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "pirates",
    "ratio": 1.03,
    "games": 9
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "reds",
    "ratio": 0.961,
    "games": 9
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "rockies",
    "ratio": 0.954,
    "games": 20
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "tigers",
    "ratio": 0.968,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "twins",
    "ratio": 0.99,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "white-sox",
    "ratio": 1.007,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "opponent": "yankees",
    "ratio": 1.062,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "el-paso",
    "ratio": 1.036,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "las-vegas",
    "ratio": 0.882,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "monterey-bay",
    "ratio": 1.019,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "new-mexico",
    "ratio": 1.435,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "orange-county",
    "ratio": 1.134,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "phoenix",
    "ratio": 0.995,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "pittsburgh",
    "ratio": 0.998,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "sacramento",
    "ratio": 1.136,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "switchbacks-fc",
    "ratio": 0.993,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "oakland-roots",
    "opponent": "tulsa",
    "ratio": 0.927,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "opponent": "bears",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "opponent": "cardinals",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "opponent": "cowboys",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "opponent": "rams",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sf-49ers",
    "opponent": "seahawks",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "avalanche",
    "ratio": 0.957,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "blackhawks",
    "ratio": 1.014,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "blue-jackets",
    "ratio": 1.105,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "blues",
    "ratio": 1.088,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "bruins",
    "ratio": 1.022,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "canadiens",
    "ratio": 1.112,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "canucks",
    "ratio": 1.015,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "capitals",
    "ratio": 1.035,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "coyotes",
    "ratio": 0.988,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "devils",
    "ratio": 1.008,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "ducks",
    "ratio": 1.014,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "flames",
    "ratio": 1.067,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "flyers",
    "ratio": 0.973,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "golden-knights",
    "ratio": 1.081,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "hurricanes",
    "ratio": 0.983,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "islanders",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "jets",
    "ratio": 0.948,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "kings",
    "ratio": 1.057,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "kraken",
    "ratio": 0.975,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "lightning",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "mammoth",
    "ratio": 0.985,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "maple-leafs",
    "ratio": 1.045,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "oilers",
    "ratio": 1.044,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "panthers",
    "ratio": 0.97,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "penguins",
    "ratio": 1.004,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "predators",
    "ratio": 0.976,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "rangers",
    "ratio": 1.01,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "red-wings",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "sabres",
    "ratio": 1.107,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "senators",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "stars",
    "ratio": 1.02,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "opponent": "wild",
    "ratio": 0.998,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "opponent": "air-force",
    "ratio": 0.954,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-football",
    "opponent": "fresno-st",
    "ratio": 0.972,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "air-force",
    "ratio": 0.876,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "bethesda",
    "ratio": 1.016,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "boise-st",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "colorado-st",
    "ratio": 0.985,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "fresno-st",
    "ratio": 0.968,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "nevada",
    "ratio": 1.031,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "new-mexico",
    "ratio": 1.166,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "san-diego-st",
    "ratio": 1.389,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "uc-irvine",
    "ratio": 0.934,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "unlv",
    "ratio": 0.897,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "utah-state",
    "ratio": 1.028,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-mbb",
    "opponent": "wyoming",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "air-force",
    "ratio": 0.99,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "colorado-st",
    "ratio": 1.145,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "fresno-st",
    "ratio": 0.955,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "nevada",
    "ratio": 1.208,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "new-mexico",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "saint-mary-s",
    "ratio": 1.059,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "san-diego-st",
    "ratio": 1.024,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "unlv",
    "ratio": 1.042,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "sjsu-wbb",
    "opponent": "utah-state",
    "ratio": 1.225,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "opponent": "california",
    "ratio": 1.246,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-football",
    "opponent": "notre-dame",
    "ratio": 0.985,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "opponent": "california",
    "ratio": 1.245,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "opponent": "csu-northridge",
    "ratio": 0.888,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-mbb",
    "opponent": "smu",
    "ratio": 0.967,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "opponent": "cal-poly",
    "ratio": 1.016,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "opponent": "california",
    "ratio": 0.991,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "stanford-wbb",
    "opponent": "uc-davis",
    "ratio": 0.981,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "aces",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "dream",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "fever",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "fire",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "liberty",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "lynx",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "mercury",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "mystics",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "sky",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "sparks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "storm",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "sun",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "valkyries",
    "opponent": "wings",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "76ers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "bucks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "bulls",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "cavaliers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "celtics",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "clippers",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "grizzlies",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "hawks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "heat",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "hornets",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "jazz",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "kings",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "knicks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "lakers",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "magic",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "mavericks",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "nets",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "nuggets",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "pacers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "pelicans",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "pistons",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "raptors",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "rockets",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "spurs",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "suns",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "thunder",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "timberwolves",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "trail-blazers",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "opponent": "wizards",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "opponent": "lions",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "opponent": "packers",
    "ratio": 1.005,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "opponent": "panthers",
    "ratio": 0.992,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "bears",
    "opponent": "vikings",
    "ratio": 0.994,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "avalanche",
    "ratio": 1.019,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "blue-jackets",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "blues",
    "ratio": 0.998,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "bruins",
    "ratio": 1.027,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "canadiens",
    "ratio": 1.009,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "canucks",
    "ratio": 0.999,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "capitals",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "devils",
    "ratio": 0.975,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "ducks",
    "ratio": 0.962,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "flames",
    "ratio": 0.981,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "flyers",
    "ratio": 1.02,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "golden-knights",
    "ratio": 0.992,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "hurricanes",
    "ratio": 0.976,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "islanders",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "jets",
    "ratio": 1.011,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "kings",
    "ratio": 0.942,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "kraken",
    "ratio": 0.991,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "lightning",
    "ratio": 0.992,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "mammoth",
    "ratio": 0.989,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "maple-leafs",
    "ratio": 1.023,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "oilers",
    "ratio": 1.01,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "panthers",
    "ratio": 1.011,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "penguins",
    "ratio": 1.024,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "predators",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "rangers",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "red-wings",
    "ratio": 1.046,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "sabres",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "senators",
    "ratio": 0.974,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "sharks",
    "ratio": 1.068,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "stars",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "utah-hc",
    "ratio": 0.999,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "opponent": "wild",
    "ratio": 1.029,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "76ers",
    "ratio": 1.021,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "bucks",
    "ratio": 1.025,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "cavaliers",
    "ratio": 0.974,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "celtics",
    "ratio": 1.001,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "clippers",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "grizzlies",
    "ratio": 0.987,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "hawks",
    "ratio": 0.977,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "heat",
    "ratio": 1.012,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "hornets",
    "ratio": 0.976,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "jazz",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "kings",
    "ratio": 0.992,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "knicks",
    "ratio": 0.982,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "lakers",
    "ratio": 1.037,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "magic",
    "ratio": 0.998,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "mavericks",
    "ratio": 0.978,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "nets",
    "ratio": 0.998,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "nuggets",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "pacers",
    "ratio": 1.006,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "pelicans",
    "ratio": 0.987,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "pistons",
    "ratio": 1.009,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "raptors",
    "ratio": 0.978,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "rockets",
    "ratio": 1.02,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "spurs",
    "ratio": 1.026,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "suns",
    "ratio": 1.016,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "thunder",
    "ratio": 0.971,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "timberwolves",
    "ratio": 1.011,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "trail-blazers",
    "ratio": 0.971,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "warriors",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "opponent": "wizards",
    "ratio": 1.026,
    "games": 5
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "atlanta",
    "ratio": 1.029,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "cf-montr-al",
    "ratio": 0.869,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "charlotte",
    "ratio": 0.892,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "cincinnati",
    "ratio": 1.019,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "columbus",
    "ratio": 1.025,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "d-c-united",
    "ratio": 0.974,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "miami",
    "ratio": 1.515,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "nashville",
    "ratio": 1.026,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "new-england",
    "ratio": 0.993,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "nycfc",
    "ratio": 0.969,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "orlando",
    "ratio": 0.928,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "philadelphia",
    "ratio": 1.074,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "red-bull-ny",
    "ratio": 1.016,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "opponent": "toronto",
    "ratio": 1.022,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "angel-city",
    "ratio": 1.032,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "gotham",
    "ratio": 1.008,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "houston",
    "ratio": 1.02,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "kansas-city",
    "ratio": 1.056,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "louisville",
    "ratio": 0.823,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "north-carolina",
    "ratio": 0.895,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "portland",
    "ratio": 1.011,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "san-diego",
    "ratio": 0.945,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "utah",
    "ratio": 0.972,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-stars",
    "opponent": "washington",
    "ratio": 0.939,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "c-connecticut",
    "ratio": 1.066,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "fdu",
    "ratio": 1.337,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "le-moyne",
    "ratio": 1.012,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "long-island",
    "ratio": 0.972,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "mercyhurst",
    "ratio": 0.903,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "saint-francis",
    "ratio": 0.601,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "stonehill",
    "ratio": 0.93,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-state-mbb",
    "opponent": "wagner",
    "ratio": 0.89,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "angels",
    "ratio": 0.903,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "astros",
    "ratio": 1.015,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "athletics",
    "ratio": 0.954,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "blue-jays",
    "ratio": 1.012,
    "games": 7
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "braves",
    "ratio": 1.015,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "brewers",
    "ratio": 1.008,
    "games": 22
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "cardinals",
    "ratio": 0.999,
    "games": 19
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "d-backs",
    "ratio": 0.95,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "dodgers",
    "ratio": 1.076,
    "games": 10
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "giants",
    "ratio": 0.981,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "marlins",
    "ratio": 0.998,
    "games": 11
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "mets",
    "ratio": 1.009,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "nationals",
    "ratio": 0.944,
    "games": 10
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "padres",
    "ratio": 0.996,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "phillies",
    "ratio": 1.003,
    "games": 10
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "pirates",
    "ratio": 0.99,
    "games": 20
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "reds",
    "ratio": 0.969,
    "games": 19
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "rockies",
    "ratio": 0.978,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "tigers",
    "ratio": 0.996,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "twins",
    "ratio": 0.983,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "white-sox",
    "ratio": 1.042,
    "games": 8
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "opponent": "yankees",
    "ratio": 1.018,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "butler",
    "ratio": 1.025,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "chicago-st",
    "ratio": 1.063,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "creighton",
    "ratio": 0.985,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "georgetown",
    "ratio": 0.992,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "marquette",
    "ratio": 1.329,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "n-illinois",
    "ratio": 1.074,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "northwestern",
    "ratio": 1.171,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "providence",
    "ratio": 1.056,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "seton-hall",
    "ratio": 0.976,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "st-john-s",
    "ratio": 1.083,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "uconn",
    "ratio": 1.132,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "villanova",
    "ratio": 1.127,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-mbb",
    "opponent": "xavier",
    "ratio": 0.971,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "butler",
    "ratio": 1.018,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "creighton",
    "ratio": 1.071,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "marquette",
    "ratio": 1.027,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "providence",
    "ratio": 0.99,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "seton-hall",
    "ratio": 1.086,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "st-john-s",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "uconn",
    "ratio": 1.942,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "villanova",
    "ratio": 1.096,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "depaul-wbb",
    "opponent": "xavier",
    "ratio": 1.11,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "illinois",
    "ratio": 1.066,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "iowa",
    "ratio": 1.043,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "jackson-st",
    "ratio": 0.946,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "maryland",
    "ratio": 0.96,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "michigan",
    "ratio": 1.081,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "michigan-st",
    "ratio": 1.033,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "minnesota",
    "ratio": 0.981,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "nebraska",
    "ratio": 1.017,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "ohio-state",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "penn-state",
    "ratio": 0.946,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-mbb",
    "opponent": "purdue",
    "ratio": 1.078,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "northwestern-wbb",
    "opponent": "illinois",
    "ratio": 1.146,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "aces",
    "ratio": 0.953,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "dream",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "fever",
    "ratio": 1.036,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "liberty",
    "ratio": 1.015,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "lynx",
    "ratio": 0.95,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "mercury",
    "ratio": 0.97,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "mystics",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "sparks",
    "ratio": 1.018,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "storm",
    "ratio": 0.994,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "sun",
    "ratio": 0.927,
    "games": 4
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "tempo",
    "ratio": 0.953,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "valkyries",
    "ratio": 1.006,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "sky",
    "opponent": "wings",
    "ratio": 1.078,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "belmont",
    "ratio": 1.329,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "bradley",
    "ratio": 1.028,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "drake",
    "ratio": 0.937,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "evansville",
    "ratio": 0.741,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "illinois-st",
    "ratio": 1.076,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "indiana-st",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "murray-st",
    "ratio": 0.855,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "northern-iowa",
    "ratio": 0.871,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "s-illinois",
    "ratio": 0.952,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "st-francis-il",
    "ratio": 0.964,
    "games": 2
  },
  {
    "metroId": "chicago",
    "teamId": "uic-mbb",
    "opponent": "valparaiso",
    "ratio": 1.049,
    "games": 3
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "angels",
    "ratio": 1.154,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "astros",
    "ratio": 1.044,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "athletics",
    "ratio": 1.048,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "blue-jays",
    "ratio": 1.189,
    "games": 10
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "braves",
    "ratio": 1.044,
    "games": 8
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "cubs",
    "ratio": 1.489,
    "games": 8
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "dodgers",
    "ratio": 1.382,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "guardians",
    "ratio": 1.08,
    "games": 21
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "mariners",
    "ratio": 0.988,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "mets",
    "ratio": 1.049,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "nationals",
    "ratio": 1.132,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "orioles",
    "ratio": 1.039,
    "games": 10
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "pirates",
    "ratio": 1.136,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "rangers",
    "ratio": 0.925,
    "games": 8
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "rays",
    "ratio": 1.001,
    "games": 9
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "red-sox",
    "ratio": 1.199,
    "games": 10
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "reds",
    "ratio": 1.222,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "rockies",
    "ratio": 1.12,
    "games": 6
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "royals",
    "ratio": 1.023,
    "games": 18
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "tigers",
    "ratio": 1.061,
    "games": 21
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "twins",
    "ratio": 1.046,
    "games": 19
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "opponent": "yankees",
    "ratio": 1.443,
    "games": 11
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "bay",
    "ratio": 0.991,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "chicago",
    "ratio": 1.006,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "gotham",
    "ratio": 0.999,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "houston",
    "ratio": 0.926,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "kansas-city",
    "ratio": 0.917,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "louisville",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "north-carolina",
    "ratio": 0.989,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "orlando",
    "ratio": 1.02,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "portland",
    "ratio": 1.046,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "san-diego",
    "ratio": 1.036,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "seattle",
    "ratio": 0.928,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "utah",
    "ratio": 0.972,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angel-city",
    "opponent": "washington",
    "ratio": 0.993,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "astros",
    "ratio": 1,
    "games": 18
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "athletics",
    "ratio": 0.951,
    "games": 20
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "blue-jays",
    "ratio": 1.09,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "braves",
    "ratio": 1.064,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "brewers",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "cardinals",
    "ratio": 1.034,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "dodgers",
    "ratio": 1.293,
    "games": 8
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "guardians",
    "ratio": 0.993,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "mariners",
    "ratio": 0.958,
    "games": 20
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "mets",
    "ratio": 1.151,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "orioles",
    "ratio": 0.986,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "padres",
    "ratio": 1.052,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "phillies",
    "ratio": 0.995,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "rangers",
    "ratio": 0.988,
    "games": 20
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "rays",
    "ratio": 0.955,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "red-sox",
    "ratio": 1.106,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "rockies",
    "ratio": 0.98,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "royals",
    "ratio": 0.876,
    "games": 10
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "tigers",
    "ratio": 0.965,
    "games": 11
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "twins",
    "ratio": 0.922,
    "games": 10
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "white-sox",
    "ratio": 0.975,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "opponent": "yankees",
    "ratio": 1.195,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "opponent": "broncos",
    "ratio": 1.002,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "opponent": "chiefs",
    "ratio": 0.996,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "opponent": "raiders",
    "ratio": 1.003,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "chargers",
    "opponent": "ravens",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "76ers",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "bucks",
    "ratio": 0.977,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "bulls",
    "ratio": 0.978,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "cavaliers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "celtics",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "grizzlies",
    "ratio": 0.99,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "hawks",
    "ratio": 0.993,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "heat",
    "ratio": 0.981,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "hornets",
    "ratio": 1.054,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "jazz",
    "ratio": 0.957,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "kings",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "knicks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "lakers",
    "ratio": 1.029,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "magic",
    "ratio": 0.975,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "mavericks",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "nets",
    "ratio": 0.977,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "nuggets",
    "ratio": 1.005,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "pacers",
    "ratio": 0.947,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "pelicans",
    "ratio": 0.962,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "pistons",
    "ratio": 1.03,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "raptors",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "rockets",
    "ratio": 1.006,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "spurs",
    "ratio": 0.995,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "suns",
    "ratio": 1.006,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "thunder",
    "ratio": 0.998,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "timberwolves",
    "ratio": 0.974,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "trail-blazers",
    "ratio": 0.987,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "warriors",
    "ratio": 1.042,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "opponent": "wizards",
    "ratio": 0.985,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "angels",
    "ratio": 0.99,
    "games": 8
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "braves",
    "ratio": 0.989,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "brewers",
    "ratio": 0.977,
    "games": 10
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "cardinals",
    "ratio": 0.953,
    "games": 10
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "cubs",
    "ratio": 1.014,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "d-backs",
    "ratio": 0.988,
    "games": 18
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "giants",
    "ratio": 0.998,
    "games": 21
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "guardians",
    "ratio": 0.977,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "mariners",
    "ratio": 0.985,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "marlins",
    "ratio": 0.987,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "mets",
    "ratio": 0.979,
    "games": 10
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "nationals",
    "ratio": 1.011,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "orioles",
    "ratio": 1.007,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "padres",
    "ratio": 1,
    "games": 21
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "phillies",
    "ratio": 0.987,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "pirates",
    "ratio": 1.015,
    "games": 9
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "rangers",
    "ratio": 0.996,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "rays",
    "ratio": 1.006,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "red-sox",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "reds",
    "ratio": 0.986,
    "games": 10
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "rockies",
    "ratio": 0.999,
    "games": 18
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "opponent": "royals",
    "ratio": 1.016,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "avalanche",
    "ratio": 0.975,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "blackhawks",
    "ratio": 1.012,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "blue-jackets",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "blues",
    "ratio": 0.957,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "bruins",
    "ratio": 0.982,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "canadiens",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "canucks",
    "ratio": 1.019,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "capitals",
    "ratio": 1.005,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "coyotes",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "devils",
    "ratio": 1.032,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "flames",
    "ratio": 0.979,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "flyers",
    "ratio": 1.011,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "golden-knights",
    "ratio": 0.975,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "hurricanes",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "islanders",
    "ratio": 0.974,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "jets",
    "ratio": 0.985,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "kings",
    "ratio": 1.045,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "kraken",
    "ratio": 1.001,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "lightning",
    "ratio": 0.984,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "mammoth",
    "ratio": 0.957,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "maple-leafs",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "oilers",
    "ratio": 1.002,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "panthers",
    "ratio": 0.981,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "penguins",
    "ratio": 1.024,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "predators",
    "ratio": 0.996,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "rangers",
    "ratio": 1.009,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "red-wings",
    "ratio": 0.947,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "sabres",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "senators",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "sharks",
    "ratio": 1.021,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "stars",
    "ratio": 0.972,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "opponent": "wild",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "austin",
    "ratio": 1.025,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "colorado",
    "ratio": 0.986,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "dallas",
    "ratio": 1.012,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "houston",
    "ratio": 1.008,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "kansas-city",
    "ratio": 0.948,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "lafc",
    "ratio": 1.055,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "minnesota",
    "ratio": 0.986,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "portland",
    "ratio": 1.027,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "salt-lake",
    "ratio": 1.011,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "san-jose",
    "ratio": 0.989,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "seattle",
    "ratio": 0.98,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "st-louis",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "opponent": "vancouver",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "avalanche",
    "ratio": 1.016,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "blackhawks",
    "ratio": 0.976,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "blue-jackets",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "blues",
    "ratio": 0.917,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "bruins",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "canadiens",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "canucks",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "capitals",
    "ratio": 0.985,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "devils",
    "ratio": 0.967,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "ducks",
    "ratio": 1.001,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "flames",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "flyers",
    "ratio": 1.018,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "golden-knights",
    "ratio": 1.012,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "hurricanes",
    "ratio": 0.987,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "islanders",
    "ratio": 0.985,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "jets",
    "ratio": 0.937,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "kraken",
    "ratio": 1.004,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "lightning",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "maple-leafs",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "oilers",
    "ratio": 0.988,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "panthers",
    "ratio": 1.007,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "penguins",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "predators",
    "ratio": 0.999,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "rangers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "red-wings",
    "ratio": 1.009,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "sabres",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "senators",
    "ratio": 0.989,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "sharks",
    "ratio": 1.01,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "stars",
    "ratio": 0.961,
    "games": 4
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "utah-hc",
    "ratio": 0.964,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "opponent": "wild",
    "ratio": 0.984,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "austin",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "colorado",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "dallas",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "houston",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "kansas-city",
    "ratio": 0.933,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "la-galaxy",
    "ratio": 1.003,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "minnesota",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "portland",
    "ratio": 0.999,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "salt-lake",
    "ratio": 1.009,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "san-jose",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "seattle",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "st-louis",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "opponent": "vancouver",
    "ratio": 0.999,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "76ers",
    "ratio": 0.992,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "bucks",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "bulls",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "cavaliers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "celtics",
    "ratio": 1.002,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "clippers",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "grizzlies",
    "ratio": 0.977,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "hawks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "heat",
    "ratio": 0.985,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "hornets",
    "ratio": 1.004,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "jazz",
    "ratio": 0.998,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "kings",
    "ratio": 0.991,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "knicks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "magic",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "mavericks",
    "ratio": 0.995,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "nets",
    "ratio": 0.996,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "nuggets",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "pacers",
    "ratio": 0.987,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "pelicans",
    "ratio": 0.991,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "pistons",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "raptors",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "rockets",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "spurs",
    "ratio": 0.989,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "suns",
    "ratio": 0.998,
    "games": 7
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "thunder",
    "ratio": 0.995,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "timberwolves",
    "ratio": 0.996,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "trail-blazers",
    "ratio": 0.987,
    "games": 5
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "warriors",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "opponent": "wizards",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "opponent": "49ers",
    "ratio": 1.008,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "opponent": "cardinals",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "opponent": "eagles",
    "ratio": 1.003,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "opponent": "saints",
    "ratio": 0.99,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "rams",
    "opponent": "seahawks",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "opponent": "arizona-st",
    "ratio": 0.993,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "opponent": "maryland",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "opponent": "oregon",
    "ratio": 0.957,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "opponent": "uc-riverside",
    "ratio": 0.958,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "opponent": "usc",
    "ratio": 1.3,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ucla-mbb",
    "opponent": "washington",
    "ratio": 0.92,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "opponent": "cal-poly",
    "ratio": 0.91,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "ucla-wbb",
    "opponent": "usc",
    "ratio": 1.182,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "usc-football",
    "opponent": "ucla",
    "ratio": 0.988,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "opponent": "california",
    "ratio": 1.043,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "opponent": "oregon",
    "ratio": 1.005,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "opponent": "ucla",
    "ratio": 1.165,
    "games": 3
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "opponent": "washington",
    "ratio": 0.97,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "usc-mbb",
    "opponent": "washington-st",
    "ratio": 1.072,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "opponent": "cal-poly",
    "ratio": 0.998,
    "games": 2
  },
  {
    "metroId": "la",
    "teamId": "usc-wbb",
    "opponent": "ucla",
    "ratio": 1.221,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "opponent": "brown",
    "ratio": 0.937,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "opponent": "georgetown",
    "ratio": 0.969,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "opponent": "harvard",
    "ratio": 0.978,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "columbia-football",
    "opponent": "penn",
    "ratio": 1.295,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "avalanche",
    "ratio": 0.993,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "blackhawks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "blue-jackets",
    "ratio": 0.955,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "blues",
    "ratio": 0.989,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "bruins",
    "ratio": 0.993,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "canadiens",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "canucks",
    "ratio": 0.962,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "capitals",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "ducks",
    "ratio": 0.97,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "flames",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "flyers",
    "ratio": 1.003,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "golden-knights",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "hurricanes",
    "ratio": 0.995,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "islanders",
    "ratio": 0.99,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "jets",
    "ratio": 0.984,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "kings",
    "ratio": 0.98,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "kraken",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "lightning",
    "ratio": 0.99,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "mammoth",
    "ratio": 0.993,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "maple-leafs",
    "ratio": 1.004,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "oilers",
    "ratio": 1.005,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "panthers",
    "ratio": 0.992,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "penguins",
    "ratio": 0.999,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "predators",
    "ratio": 0.991,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "rangers",
    "ratio": 1.005,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "red-wings",
    "ratio": 1.001,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "sabres",
    "ratio": 1.018,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "senators",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "sharks",
    "ratio": 1.001,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "stars",
    "ratio": 0.991,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "opponent": "wild",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "fordham-football",
    "opponent": "bucknell",
    "ratio": 0.799,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "fordham-football",
    "opponent": "holy-cross",
    "ratio": 0.851,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "angel-city",
    "ratio": 1.054,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "bay",
    "ratio": 0.942,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "chicago",
    "ratio": 1.009,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "houston",
    "ratio": 0.96,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "kansas-city",
    "ratio": 1.035,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "louisville",
    "ratio": 0.981,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "north-carolina",
    "ratio": 0.914,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "orlando",
    "ratio": 1.065,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "portland",
    "ratio": 0.994,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "san-diego",
    "ratio": 0.974,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "seattle",
    "ratio": 0.965,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "utah",
    "ratio": 0.792,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "gotham",
    "opponent": "washington",
    "ratio": 1.086,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "avalanche",
    "ratio": 0.991,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "blackhawks",
    "ratio": 1.024,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "blue-jackets",
    "ratio": 0.957,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "blues",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "bruins",
    "ratio": 1.025,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "canadiens",
    "ratio": 0.971,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "canucks",
    "ratio": 0.987,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "capitals",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "devils",
    "ratio": 1.047,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "ducks",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "flames",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "flyers",
    "ratio": 1.003,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "golden-knights",
    "ratio": 0.963,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "hurricanes",
    "ratio": 0.96,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "jets",
    "ratio": 0.956,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "kings",
    "ratio": 1.005,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "kraken",
    "ratio": 1.028,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "lightning",
    "ratio": 0.957,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "maple-leafs",
    "ratio": 1.019,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "oilers",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "panthers",
    "ratio": 0.979,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "penguins",
    "ratio": 1.005,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "predators",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "rangers",
    "ratio": 1.014,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "red-wings",
    "ratio": 0.977,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "sabres",
    "ratio": 1.012,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "senators",
    "ratio": 0.992,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "sharks",
    "ratio": 1.019,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "stars",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "opponent": "wild",
    "ratio": 0.953,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "76ers",
    "ratio": 0.993,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "bucks",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "bulls",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "cavaliers",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "celtics",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "clippers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "grizzlies",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "hawks",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "heat",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "hornets",
    "ratio": 0.998,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "jazz",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "kings",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "lakers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "magic",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "mavericks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "nets",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "nuggets",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "pacers",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "pelicans",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "pistons",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "raptors",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "rockets",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "spurs",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "suns",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "thunder",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "timberwolves",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "trail-blazers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "warriors",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "opponent": "wizards",
    "ratio": 0.999,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "aces",
    "ratio": 0.99,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "dream",
    "ratio": 0.988,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "fever",
    "ratio": 1.016,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "lynx",
    "ratio": 0.973,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "mercury",
    "ratio": 1.001,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "mystics",
    "ratio": 0.998,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "sky",
    "ratio": 1.01,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "sparks",
    "ratio": 0.989,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "storm",
    "ratio": 0.99,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "sun",
    "ratio": 0.993,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "valkyries",
    "ratio": 1.027,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "liberty",
    "opponent": "wings",
    "ratio": 1.016,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "astros",
    "ratio": 0.871,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "athletics",
    "ratio": 0.978,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "braves",
    "ratio": 0.942,
    "games": 21
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "brewers",
    "ratio": 0.932,
    "games": 11
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "cardinals",
    "ratio": 0.988,
    "games": 10
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "cubs",
    "ratio": 0.929,
    "games": 12
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "d-backs",
    "ratio": 0.995,
    "games": 10
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "dodgers",
    "ratio": 0.98,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "giants",
    "ratio": 0.945,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "marlins",
    "ratio": 0.956,
    "games": 20
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "nationals",
    "ratio": 0.993,
    "games": 18
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "orioles",
    "ratio": 0.941,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "padres",
    "ratio": 0.955,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "phillies",
    "ratio": 1.028,
    "games": 20
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "pirates",
    "ratio": 0.969,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "red-sox",
    "ratio": 1.007,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "reds",
    "ratio": 1.006,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "rockies",
    "ratio": 0.989,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "royals",
    "ratio": 0.967,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "tigers",
    "ratio": 0.917,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "twins",
    "ratio": 0.995,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "opponent": "yankees",
    "ratio": 1.038,
    "games": 8
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "76ers",
    "ratio": 0.993,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "bucks",
    "ratio": 0.993,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "bulls",
    "ratio": 0.994,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "cavaliers",
    "ratio": 0.997,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "celtics",
    "ratio": 1.007,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "clippers",
    "ratio": 0.999,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "grizzlies",
    "ratio": 0.982,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "hawks",
    "ratio": 0.998,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "heat",
    "ratio": 1.006,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "hornets",
    "ratio": 0.988,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "jazz",
    "ratio": 0.986,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "kings",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "knicks",
    "ratio": 1.014,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "lakers",
    "ratio": 1.024,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "magic",
    "ratio": 0.995,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "mavericks",
    "ratio": 0.981,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "nuggets",
    "ratio": 1.003,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "pacers",
    "ratio": 0.985,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "pelicans",
    "ratio": 0.978,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "pistons",
    "ratio": 0.99,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "raptors",
    "ratio": 0.985,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "rockets",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "spurs",
    "ratio": 1.007,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "suns",
    "ratio": 0.995,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "thunder",
    "ratio": 1.011,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "timberwolves",
    "ratio": 0.994,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "trail-blazers",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "warriors",
    "ratio": 1.028,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "opponent": "wizards",
    "ratio": 0.982,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "opponent": "commanders",
    "ratio": 0.996,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "opponent": "cowboys",
    "ratio": 0.991,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "opponent": "eagles",
    "ratio": 1.006,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "opponent": "packers",
    "ratio": 0.998,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "ny-giants",
    "opponent": "vikings",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "opponent": "bills",
    "ratio": 1.014,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "opponent": "dolphins",
    "ratio": 0.97,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "opponent": "falcons",
    "ratio": 0.989,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "ny-jets",
    "opponent": "patriots",
    "ratio": 0.996,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "avalanche",
    "ratio": 0.994,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "blackhawks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "blue-jackets",
    "ratio": 0.992,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "blues",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "bruins",
    "ratio": 0.992,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "canadiens",
    "ratio": 0.993,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "canucks",
    "ratio": 0.991,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "capitals",
    "ratio": 0.989,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "devils",
    "ratio": 0.999,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "ducks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "flames",
    "ratio": 0.988,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "flyers",
    "ratio": 0.987,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "golden-knights",
    "ratio": 0.992,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "hurricanes",
    "ratio": 0.981,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "islanders",
    "ratio": 1.001,
    "games": 7
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "jets",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "kings",
    "ratio": 1.005,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "kraken",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "lightning",
    "ratio": 0.991,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "maple-leafs",
    "ratio": 0.995,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "oilers",
    "ratio": 0.978,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "panthers",
    "ratio": 0.995,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "penguins",
    "ratio": 0.999,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "predators",
    "ratio": 0.997,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "red-wings",
    "ratio": 0.989,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "sabres",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "senators",
    "ratio": 0.993,
    "games": 5
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "sharks",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "stars",
    "ratio": 0.979,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "opponent": "wild",
    "ratio": 0.996,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "atlanta",
    "ratio": 1.003,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "cf-montr-al",
    "ratio": 0.972,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "charlotte",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "chicago",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "columbus",
    "ratio": 0.99,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "d-c-united",
    "ratio": 1.001,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "miami",
    "ratio": 1.315,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "new-england",
    "ratio": 0.988,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "orlando",
    "ratio": 1.075,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "philadelphia",
    "ratio": 0.993,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "red-bull-ny",
    "ratio": 1.097,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "opponent": "toronto",
    "ratio": 1.009,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "atlanta",
    "ratio": 0.983,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "cf-montr-al",
    "ratio": 1.034,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "charlotte",
    "ratio": 0.923,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "chicago",
    "ratio": 0.995,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "cincinnati",
    "ratio": 1.064,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "columbus",
    "ratio": 1.014,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "d-c-united",
    "ratio": 1.013,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "miami",
    "ratio": 1.114,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "nashville",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "new-england",
    "ratio": 0.987,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "nycfc",
    "ratio": 1.047,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "orlando",
    "ratio": 0.976,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "philadelphia",
    "ratio": 1.019,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "opponent": "toronto",
    "ratio": 1.043,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "butler",
    "ratio": 0.963,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "creighton",
    "ratio": 0.998,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "depaul",
    "ratio": 0.934,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "georgetown",
    "ratio": 0.974,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "marquette",
    "ratio": 0.953,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "monmouth",
    "ratio": 1.044,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "providence",
    "ratio": 0.972,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "rutgers",
    "ratio": 1.065,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "saint-peter-s",
    "ratio": 1.004,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "st-john-s",
    "ratio": 1.036,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "uconn",
    "ratio": 1.047,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "villanova",
    "ratio": 1.092,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "wagner",
    "ratio": 0.746,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "seton-hall-mbb",
    "opponent": "xavier",
    "ratio": 0.942,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "butler",
    "ratio": 1.02,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "creighton",
    "ratio": 0.966,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "depaul",
    "ratio": 0.98,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "georgetown",
    "ratio": 0.891,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "harvard",
    "ratio": 0.992,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "marquette",
    "ratio": 0.992,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "providence",
    "ratio": 1.001,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "quinnipiac",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "seton-hall",
    "ratio": 1.057,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "uconn",
    "ratio": 1.039,
    "games": 4
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "villanova",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "stjohns-mbb",
    "opponent": "xavier",
    "ratio": 1.017,
    "games": 3
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "opponent": "fordham",
    "ratio": 1.062,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "stony-brook-football",
    "opponent": "ualbany",
    "ratio": 1.033,
    "games": 2
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "angels",
    "ratio": 0.99,
    "games": 11
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "astros",
    "ratio": 1.009,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "athletics",
    "ratio": 0.982,
    "games": 10
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "blue-jays",
    "ratio": 1.009,
    "games": 19
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "braves",
    "ratio": 0.984,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "cardinals",
    "ratio": 0.972,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "dodgers",
    "ratio": 0.991,
    "games": 7
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "guardians",
    "ratio": 0.982,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "mariners",
    "ratio": 0.999,
    "games": 10
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "marlins",
    "ratio": 1.002,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "mets",
    "ratio": 1.044,
    "games": 8
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "orioles",
    "ratio": 1.007,
    "games": 17
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "pirates",
    "ratio": 1.006,
    "games": 7
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "rangers",
    "ratio": 1.036,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "rays",
    "ratio": 0.999,
    "games": 21
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "red-sox",
    "ratio": 1.01,
    "games": 21
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "reds",
    "ratio": 0.991,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "rockies",
    "ratio": 0.986,
    "games": 6
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "royals",
    "ratio": 1.028,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "tigers",
    "ratio": 0.949,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "twins",
    "ratio": 0.958,
    "games": 9
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "opponent": "white-sox",
    "ratio": 0.983,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "astros",
    "ratio": 0.979,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "athletics",
    "ratio": 0.986,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "blue-jays",
    "ratio": 0.983,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "braves",
    "ratio": 1.003,
    "games": 10
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "brewers",
    "ratio": 0.988,
    "games": 10
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "cardinals",
    "ratio": 1.004,
    "games": 10
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "cubs",
    "ratio": 1.018,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "d-backs",
    "ratio": 0.989,
    "games": 21
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "dodgers",
    "ratio": 1.014,
    "games": 18
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "giants",
    "ratio": 1.011,
    "games": 20
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "mariners",
    "ratio": 1.019,
    "games": 8
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "marlins",
    "ratio": 0.966,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "mets",
    "ratio": 0.998,
    "games": 10
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "nationals",
    "ratio": 0.955,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "phillies",
    "ratio": 0.986,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "pirates",
    "ratio": 1.007,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "reds",
    "ratio": 0.961,
    "games": 9
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "rockies",
    "ratio": 0.983,
    "games": 19
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "tigers",
    "ratio": 1.024,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "twins",
    "ratio": 0.977,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "white-sox",
    "ratio": 1.002,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "opponent": "yankees",
    "ratio": 0.98,
    "games": 6
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-football",
    "opponent": "boise-st",
    "ratio": 1.082,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "air-force",
    "ratio": 0.977,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "boise-st",
    "ratio": 0.951,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "colorado-st",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "fresno-st",
    "ratio": 0.954,
    "games": 3
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "long-beach-st",
    "ratio": 0.981,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "nevada",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "new-mexico",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "san-jos-st",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "unlv",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "utah-state",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-mbb",
    "opponent": "wyoming",
    "ratio": 0.981,
    "games": 3
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "boise-st",
    "ratio": 1.056,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "cal-state-sm",
    "ratio": 1.066,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "colorado-st",
    "ratio": 0.894,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "fresno-st",
    "ratio": 1.06,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "nevada",
    "ratio": 1.125,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "new-mexico",
    "ratio": 1.586,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "san-jos-st",
    "ratio": 0.959,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "sdsu-wbb",
    "opponent": "unlv",
    "ratio": 1.015,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "angel-city",
    "ratio": 1.035,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "bay",
    "ratio": 0.977,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "chicago",
    "ratio": 1.066,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "gotham",
    "ratio": 0.918,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "houston",
    "ratio": 0.896,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "kansas-city",
    "ratio": 0.994,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "north-carolina",
    "ratio": 1.016,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "orlando",
    "ratio": 0.918,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "portland",
    "ratio": 0.89,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "seattle",
    "ratio": 0.978,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "utah",
    "ratio": 0.986,
    "games": 2
  },
  {
    "metroId": "san-diego",
    "teamId": "wave",
    "opponent": "washington",
    "ratio": 0.933,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "avalanche",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "blackhawks",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "blue-jackets",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "blues",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "bruins",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "canadiens",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "canucks",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "capitals",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "devils",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "ducks",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "flames",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "flyers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "golden-knights",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "hurricanes",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "islanders",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "jets",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "kings",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "lightning",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "maple-leafs",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "oilers",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "panthers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "penguins",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "predators",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "rangers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "red-wings",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "sabres",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "senators",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "sharks",
    "ratio": 1,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "stars",
    "ratio": 1,
    "games": 4
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "utah-hc",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "opponent": "wild",
    "ratio": 1,
    "games": 5
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "angels",
    "ratio": 1.021,
    "games": 19
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "astros",
    "ratio": 1.031,
    "games": 19
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "athletics",
    "ratio": 0.975,
    "games": 20
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "blue-jays",
    "ratio": 1,
    "games": 9
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "braves",
    "ratio": 1.048,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "cubs",
    "ratio": 1.099,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "d-backs",
    "ratio": 1.064,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "giants",
    "ratio": 1.04,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "guardians",
    "ratio": 1.107,
    "games": 10
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "mets",
    "ratio": 0.965,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "orioles",
    "ratio": 1.027,
    "games": 9
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "padres",
    "ratio": 1.029,
    "games": 8
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "phillies",
    "ratio": 1.038,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "rangers",
    "ratio": 0.967,
    "games": 20
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "rays",
    "ratio": 1.008,
    "games": 9
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "red-sox",
    "ratio": 1.064,
    "games": 10
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "reds",
    "ratio": 0.995,
    "games": 6
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "royals",
    "ratio": 0.929,
    "games": 10
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "tigers",
    "ratio": 0.943,
    "games": 9
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "twins",
    "ratio": 1.021,
    "games": 9
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "white-sox",
    "ratio": 1.036,
    "games": 10
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "opponent": "yankees",
    "ratio": 1.125,
    "games": 9
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "angel-city",
    "ratio": 1.076,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "bay",
    "ratio": 0.977,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "chicago",
    "ratio": 1.021,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "gotham",
    "ratio": 1.02,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "houston",
    "ratio": 0.946,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "kansas-city",
    "ratio": 0.916,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "louisville",
    "ratio": 1.066,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "north-carolina",
    "ratio": 1.068,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "orlando",
    "ratio": 0.964,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "portland",
    "ratio": 1.009,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "san-diego",
    "ratio": 1.085,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "utah",
    "ratio": 0.973,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "reign",
    "opponent": "washington",
    "ratio": 0.994,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "opponent": "49ers",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "opponent": "cardinals",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "opponent": "rams",
    "ratio": 1,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "seahawks",
    "opponent": "vikings",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "austin",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "colorado",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "dallas",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "houston",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "kansas-city",
    "ratio": 0.995,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "la-galaxy",
    "ratio": 1,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "lafc",
    "ratio": 1.012,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "minnesota",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "portland",
    "ratio": 1.013,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "salt-lake",
    "ratio": 0.986,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "san-jose",
    "ratio": 0.997,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "st-louis",
    "ratio": 1.006,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "opponent": "vancouver",
    "ratio": 1.004,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "uw-football",
    "opponent": "oregon",
    "ratio": 1.007,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "opponent": "e-washington",
    "ratio": 0.935,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "opponent": "oregon",
    "ratio": 0.994,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "opponent": "ucla",
    "ratio": 0.987,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "opponent": "usc",
    "ratio": 1.052,
    "games": 3
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "opponent": "utah",
    "ratio": 1.016,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "uw-mbb",
    "opponent": "washington-st",
    "ratio": 1.027,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "opponent": "oregon",
    "ratio": 1.002,
    "games": 2
  },
  {
    "metroId": "seattle",
    "teamId": "uw-wbb",
    "opponent": "seattle-u",
    "ratio": 1.106,
    "games": 2
  }
];

/** Playoff occupancy per team, building and round band (expectedDrawBuild.ts buildPostseasonRows). */
export const POSTSEASON_DRAWS: PostseasonRow[] = [
  {
    "metroId": "atlanta",
    "teamId": "atlanta-united",
    "venueId": "mercedes-benz-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "band": "first",
    "occupancy": 0.969,
    "low": 0.901,
    "high": 1.19,
    "games": 23,
    "seasons": "2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "atlanta",
    "teamId": "braves",
    "venueId": "truist-park",
    "band": "second",
    "occupancy": 1.033,
    "low": 0.925,
    "high": 1.126,
    "games": 42,
    "seasons": "2022, 2023, 2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "atlanta",
    "teamId": "hawks",
    "venueId": "state-farm-arena",
    "band": "first",
    "occupancy": 1.07,
    "low": 1,
    "high": 1.117,
    "games": 50,
    "seasons": "2023, 2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "paypal-park",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "stanford-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "bay-area",
    "teamId": "earthquakes",
    "venueId": "levis-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "band": "first",
    "occupancy": 1.008,
    "low": 0.903,
    "high": 1.192,
    "games": 20,
    "seasons": "league, 2022, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "bay-area",
    "teamId": "giants",
    "venueId": "oracle-park",
    "band": "second",
    "occupancy": 1.021,
    "low": 0.921,
    "high": 1.132,
    "games": 37,
    "seasons": "league, 2022, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "bay-area",
    "teamId": "sharks",
    "venueId": "sap-center",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.015,
    "games": 32,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "bay-area",
    "teamId": "warriors",
    "venueId": "chase-center",
    "band": "first",
    "occupancy": 1.001,
    "low": 1,
    "high": 1.027,
    "games": 50,
    "seasons": "2023, 2025 + league",
    "basis": "blend"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "united-center",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.015,
    "games": 32,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "blackhawks",
    "venueId": "wrigley-field",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.015,
    "games": 32,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "bulls",
    "venueId": "united-center",
    "band": "first",
    "occupancy": 1.005,
    "low": 1,
    "high": 1.041,
    "games": 44,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "soldier-field",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "chicago-fire",
    "venueId": "seatgeek-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "band": "first",
    "occupancy": 0.998,
    "low": 0.903,
    "high": 1.19,
    "games": 23,
    "seasons": "2025 + league",
    "basis": "blend"
  },
  {
    "metroId": "chicago",
    "teamId": "cubs",
    "venueId": "wrigley-field",
    "band": "second",
    "occupancy": 1.021,
    "low": 0.921,
    "high": 1.132,
    "games": 37,
    "seasons": "league, 2022, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "band": "first",
    "occupancy": 1.008,
    "low": 0.903,
    "high": 1.192,
    "games": 20,
    "seasons": "league, 2022, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "chicago",
    "teamId": "white-sox",
    "venueId": "rate-field",
    "band": "second",
    "occupancy": 1.021,
    "low": 0.921,
    "high": 1.132,
    "games": 37,
    "seasons": "league, 2022, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "band": "first",
    "occupancy": 1.008,
    "low": 0.903,
    "high": 1.192,
    "games": 20,
    "seasons": "league, 2022, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "la",
    "teamId": "angels",
    "venueId": "angel-stadium",
    "band": "second",
    "occupancy": 1.021,
    "low": 0.921,
    "high": 1.132,
    "games": 37,
    "seasons": "league, 2022, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "crypto-com-arena",
    "band": "first",
    "occupancy": 1.017,
    "low": 1,
    "high": 1.029,
    "games": 49,
    "seasons": "2023, 2024 + league",
    "basis": "blend"
  },
  {
    "metroId": "la",
    "teamId": "clippers",
    "venueId": "intuit-dome",
    "band": "first",
    "occupancy": 1.001,
    "low": 0.996,
    "high": 1.034,
    "games": 47,
    "seasons": "2025 + league",
    "basis": "blend"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "band": "first",
    "occupancy": 1.008,
    "low": 0.903,
    "high": 1.192,
    "games": 20,
    "seasons": "league, 2022, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "la",
    "teamId": "dodgers",
    "venueId": "dodger-stadium",
    "band": "second",
    "occupancy": 0.922,
    "low": 0.896,
    "high": 0.966,
    "games": 9,
    "seasons": "2023, 2024, 2025, 2026",
    "basis": "team"
  },
  {
    "metroId": "la",
    "teamId": "ducks",
    "venueId": "honda-center",
    "band": "first",
    "occupancy": 0.992,
    "low": 0.979,
    "high": 1.014,
    "games": 35,
    "seasons": "2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "dignity-health-sports-park",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "la",
    "teamId": "galaxy",
    "venueId": "rose-bowl",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "la",
    "teamId": "kings",
    "venueId": "crypto-com-arena",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.012,
    "games": 10,
    "seasons": "2023, 2024, 2025, 2026",
    "basis": "team"
  },
  {
    "metroId": "la",
    "teamId": "lafc",
    "venueId": "bmo-stadium",
    "band": "first",
    "occupancy": 0.923,
    "low": 0.655,
    "high": 1.011,
    "games": 27,
    "seasons": "2023, 2024, 2025 + league",
    "basis": "blend"
  },
  {
    "metroId": "la",
    "teamId": "lakers",
    "venueId": "crypto-com-arena",
    "band": "first",
    "occupancy": 1.005,
    "low": 1.005,
    "high": 1.008,
    "games": 11,
    "seasons": "2023, 2024, 2025, 2026",
    "basis": "team"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "prudential-center",
    "band": "first",
    "occupancy": 1.018,
    "low": 1,
    "high": 1.034,
    "games": 38,
    "seasons": "2023, 2025 + league",
    "basis": "blend"
  },
  {
    "metroId": "new-york",
    "teamId": "devils",
    "venueId": "metlife-stadium",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.015,
    "games": 32,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "ubs-arena",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.013,
    "games": 37,
    "seasons": "2023, 2024 + league",
    "basis": "blend"
  },
  {
    "metroId": "new-york",
    "teamId": "islanders",
    "venueId": "metlife-stadium",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.015,
    "games": 32,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1,
    "games": 11,
    "seasons": "2023, 2024, 2025, 2026",
    "basis": "team"
  },
  {
    "metroId": "new-york",
    "teamId": "knicks",
    "venueId": "madison-square-garden",
    "band": "second",
    "occupancy": 1,
    "low": 1,
    "high": 1,
    "games": 12,
    "seasons": "2023, 2024, 2025, 2026",
    "basis": "team"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "band": "first",
    "occupancy": 1.002,
    "low": 0.903,
    "high": 1.19,
    "games": 23,
    "seasons": "2022 + league",
    "basis": "blend"
  },
  {
    "metroId": "new-york",
    "teamId": "mets",
    "venueId": "citi-field",
    "band": "second",
    "occupancy": 1.021,
    "low": 0.921,
    "high": 1.132,
    "games": 37,
    "seasons": "league, 2022, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "nets",
    "venueId": "barclays-center",
    "band": "first",
    "occupancy": 1.005,
    "low": 1,
    "high": 1.041,
    "games": 44,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "ny-rangers",
    "venueId": "madison-square-garden",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.013,
    "games": 37,
    "seasons": "2023, 2024 + league",
    "basis": "blend"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "yankee-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "citi-field",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "nycfc",
    "venueId": "sports-illustrated-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "new-york",
    "teamId": "red-bulls",
    "venueId": "sports-illustrated-stadium",
    "band": "first",
    "occupancy": 0.79,
    "low": 0.643,
    "high": 1.008,
    "games": 27,
    "seasons": "2022, 2023, 2024 + league",
    "basis": "blend"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "band": "first",
    "occupancy": 1.029,
    "low": 0.903,
    "high": 1.188,
    "games": 25,
    "seasons": "2025, 2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "new-york",
    "teamId": "yankees",
    "venueId": "yankee-stadium",
    "band": "second",
    "occupancy": 1.028,
    "low": 1.019,
    "high": 1.048,
    "games": 9,
    "seasons": "2022, 2024, 2025",
    "basis": "team"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "band": "first",
    "occupancy": 1.101,
    "low": 0.903,
    "high": 1.195,
    "games": 24,
    "seasons": "2024, 2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "san-diego",
    "teamId": "padres",
    "venueId": "petco-park",
    "band": "second",
    "occupancy": 1.131,
    "low": 0.925,
    "high": 1.197,
    "games": 42,
    "seasons": "2022, 2024, 2026 + league",
    "basis": "blend"
  },
  {
    "metroId": "san-diego",
    "teamId": "san-diego-fc",
    "venueId": "snapdragon-stadium",
    "band": "first",
    "occupancy": 0.837,
    "low": 0.647,
    "high": 1.009,
    "games": 23,
    "seasons": "league, 2022, 2023, 2024, 2025",
    "basis": "league"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "climate-pledge-arena",
    "band": "first",
    "occupancy": 1.001,
    "low": 1,
    "high": 1.014,
    "games": 35,
    "seasons": "2023 + league",
    "basis": "blend"
  },
  {
    "metroId": "seattle",
    "teamId": "kraken",
    "venueId": "t-mobile-park",
    "band": "first",
    "occupancy": 1,
    "low": 1,
    "high": 1.015,
    "games": 32,
    "seasons": "league, 2023, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "band": "first",
    "occupancy": 1.008,
    "low": 0.903,
    "high": 1.192,
    "games": 20,
    "seasons": "league, 2022, 2024, 2025, 2026",
    "basis": "league"
  },
  {
    "metroId": "seattle",
    "teamId": "mariners",
    "venueId": "t-mobile-park",
    "band": "second",
    "occupancy": 1.004,
    "low": 0.922,
    "high": 1.132,
    "games": 41,
    "seasons": "2022, 2025 + league",
    "basis": "blend"
  },
  {
    "metroId": "seattle",
    "teamId": "sounders",
    "venueId": "lumen-field",
    "band": "first",
    "occupancy": 0.822,
    "low": 0.655,
    "high": 1.008,
    "games": 27,
    "seasons": "2023, 2024, 2025 + league",
    "basis": "blend"
  }
];
