# Data sources: where every number comes from

Kylie, Oct 6, 2026: one file that says where each kind of data is pulled from, so checking or updating it starts here. Every source below is free and needs no key. 🚩 Anything that would start a cost is marked.

## Live feeds the app and the nightly job read

| Data | Source | Endpoint or page | Read by | Notes |
|---|---|---|---|---|
| MLB schedule, start times, probable pitchers, TV | MLB Stats API (official, free, non-commercial) | `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=119,108&startDate=…&endDate=…&hydrate=team,broadcasts(all),probablePitcher` | `src/data/sources/mlbSource.ts` | Dodgers 119, Angels 108. Venues: Dodger Stadium 22, Angel Stadium 1. 🚩 Non-commercial only; a public launch needs a license check. |
| MLB final scores | same | `…/schedule?…&hydrate=team,linescore` (`teams.home.score`, `status.abstractGameState === 'Final'`) | `loadMlbFinals` in `mlbSource.ts`, run by `scripts/results-fetch.mjs` | |
| MLB announced attendance, game weather, first pitch | MLB box score | `https://statsapi.mlb.com/api/v1/game/{gamePk}/boxscore` → `info[]` labels `Att`, `Weather`, `First pitch`, `T` | `loadMlbFinals`; `scripts/attendance-collect.mjs` | "Att" is tickets distributed, not turnstiles. |
| NBA, NHL, NFL, MLS, NWSL, college schedules, TV, placeholder-time flag | ESPN site API (unofficial, free; can change without notice) | `https://site.api.espn.com/apis/site/v2/sports/{path}/teams/{id}/schedule` with `?seasontype=2` (regular) and `?seasontype=3` (postseason); soccer needs `?fixture=true` for upcoming matches | `src/data/sources/espnSource.ts` | Answers 403 to a "HeadlessChrome" user agent. `timeValid: false` means the time is a midnight-Eastern stand-in. Paths and ids: nba 13 Lakers, 12 Clippers; nhl 8 Kings, 25 Ducks; usa.1 187 Galaxy, 18966 LAFC; usa.nwsl 21422 Angel City; nfl 14 Rams, 24 Chargers; college-football 30 USC, 26 UCLA; mens-/womens-college-basketball 30 USC, 26 UCLA. |
| ESPN final scores and announced attendance | same | finished events carry `competitors[].score` and `competitions[0].attendance` | `loadEspnFinals` in `espnSource.ts`; `scripts/attendance-collect.mjs` with `?season=YYYY` for past seasons (winter sports: the year the season ends) | |
| NHL (alternative, unused) | NHL's own API | `https://api-web.nhle.com/v1/club-schedule-season/ANA/20262027` (TV network, scores) | not wired; ESPN covers the Ducks | Keep as a fallback if ESPN changes. |
| Weather: hourly at each venue and the city point, daily feels-like high and low | Open-Meteo (free for non-commercial use) | forecast and archive APIs, see `scripts/weather-fetch.mjs` | `src/data/weather.ts` via `weatherIndex.ts` | 🚩 A public launch needs their paid plan (~€29/month) or another source. Attribution is on Settings. |
| Map tiles | OpenFreeMap (free, no account) | style URL in `src/map/BaseMap.tsx` | the map | |
| Geocoding (one-off, for venue coordinates) | OpenStreetMap Nominatim | `https://nominatim.openstreetmap.org/search?format=json&q=…` with a contact user agent, one request a second | by hand (Oct 6, 2026) | Light use only, per their policy. |

## Saved under `data/` (the repo is the store)

| Folder | What | Written by | Read through |
|---|---|---|---|
| `data/schedule-archive/la/` | one snapshot a night of the next 14 days' listings | `scripts/archive-schedule.mjs` (GitHub Actions, 12:15am Pacific) | `scheduleArchiveIndex.ts`, `startForecastIndex.ts` |
| `data/weather/la/` | hourly rows and daily ranges | `scripts/weather-fetch.mjs` (same run) | `weatherIndex.ts` |
| `data/results/la/` | final scores and announced crowds, one file per date | `scripts/results-fetch.mjs` (same run) | `resultsIndex.ts` → `src/data/results.ts` |
| `data/attendance/la/` | past seasons' announced crowds, one file per team | `scripts/attendance-collect.mjs` (by hand, now and then) | `scripts/attendance-calibrate.mjs` → `expectedDrawIndex.ts` → `src/data/expectedDraw.ts` |

## Hand-checked reference data in `src/data/`

| Data | File | Sources |
|---|---|---|
| Venues: names and rename dates, coordinates, capacity by setup and year, roof, strained access | `src/data/venues.ts` | `docs/la-venue-table-answer.md` (Oct 6, 2026 research, with a link per figure), Wikipedia infoboxes for Pauley Pavilion and Galen Center, OpenStreetMap for coordinates. Earlier figures: venue guides and news reports, Oct 1, 2026. |
| Teams and college programs | `src/data/teams.ts` | league sites; ESPN ids as above |
| Competitions (leagues, cups) for the Add form | `src/data/competitions.ts` | `docs/sport-list-second-opinion-answer.md` |
| The 13 hand-rated nights and the Oct 3–4, 2026 LA seeds | `src/data/seed/` | `docs/test-nights-and-ratings.md`, `docs/researched-events.md`; each figure labeled on the event |
| Weather normals (empty) | `src/data/formula/weather.ts` `MONTHLY_NORMAL_F` | to research when a second city arrives |

## Research answers kept in `docs/`
- `docs/la-venue-table-answer.md`: the venue research, with the verdict on each figure the app already had.
- `docs/research-oct-2026/`: October 2026 events in four cities (from the other session).
- `docs/sport-list-second-opinion-answer.md`: how a game is classified.
- `docs/formula-review-response.md`: the formula review, including the calibration plan (§11).

## Not yet used, checked as available
- Ticketmaster Discovery API for concerts 🚩 free developer key, daily quota; terms to read first (step 4).
- MLB promotions (bobbleheads): not in the schedule feed; still to find.
- Setlist.fm API: terms of use to review before any setlist link is filled automatically.
