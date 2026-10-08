# Data sources: where every number comes from

Kylie, Oct 6, 2026: one file that says where each kind of data is pulled from, so checking or updating it starts here. Every source below is free and needs no key. 🚩 Anything that would start a cost is marked.

## Live feeds the app and the nightly job read

| Data | Source | Endpoint or page | Read by | Notes |
|---|---|---|---|---|
| MLB schedule, start times, probable pitchers, TV | MLB Stats API (official, free, non-commercial) | `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=119,108&startDate=…&endDate=…&hydrate=team,broadcasts(all),probablePitcher` | `src/data/sources/mlbSource.ts` | Dodgers 119, Angels 108. Venues: Dodger Stadium 22, Angel Stadium 1. 🚩 Non-commercial only; a public launch needs a license check. |
| MLB final scores | same | `…/schedule?…&hydrate=team,linescore` (`teams.home.score`, `status.abstractGameState === 'Final'`) | `loadMlbFinals` in `mlbSource.ts`, run by `scripts/results-fetch.mjs` | |
| MLB announced attendance, game weather, first pitch | MLB box score | `https://statsapi.mlb.com/api/v1/game/{gamePk}/boxscore` → `info[]` labels `Att`, `Weather`, `First pitch`, `T` | `loadMlbFinals`; `scripts/attendance-collect.mjs` | "Att" is tickets distributed, not turnstiles. |
| NBA, NHL, NFL, MLS, NWSL, college schedules, TV, placeholder-time flag | ESPN site API (unofficial, free; can change without notice) | `https://site.api.espn.com/apis/site/v2/sports/{path}/teams/{id}/schedule` with `?seasontype=2` (regular) and `?seasontype=3` (postseason); soccer needs `?fixture=true` for upcoming matches | `src/data/sources/espnSource.ts` | Answers 403 to a "HeadlessChrome" user agent. `timeValid: false` means the time is a midnight-Eastern stand-in. Paths and ids: nba 13 Lakers, 12 Clippers; nhl 8 Kings, 25 Ducks; usa.1 187 Galaxy, 18966 LAFC, 22529 San Diego FC; usa.nwsl 21422 Angel City, 21423 Wave; nfl 14 Rams, 24 Chargers; college-football 30 USC, 26 UCLA, 21 SDSU, 264 Washington; mens-/womens-college-basketball 30 USC, 26 UCLA, 21 SDSU, 264 Washington; nfl 26 Seahawks; nhl 124292 Kraken; usa.1 9726 Sounders; usa.nwsl 15363 Reign. MLB: 119 Dodgers, 108 Angels, 135 Padres, 136 Mariners (T-Mobile Park 680), 147 Yankees, 121 Mets, 144 Braves, 137 Giants (Oracle Park 2395). Bay Area (Oct 7): nba 9 Warriors; wnba 129689 Valkyries; nfl 25 49ers; nhl 18 Sharks; usa.1 191 Earthquakes; usa.nwsl 22187 Bay FC; usa.usl.1 20687 Oakland Roots; college 25 Cal, 24 Stanford, 23 San José State. Chicago (Oct 7): MLB 112 Cubs (Wrigley 17), 145 White Sox (Rate Field 4); nba 4 Bulls; wnba 19 Sky; nhl 4 Blackhawks; nfl 3 Bears; usa.1 182 Fire; usa.nwsl 15360 Stars; college 77 Northwestern, 305 DePaul, 82 UIC, 2130 Chicago State. Dallas–Fort Worth (Oct 8): MLB 140 Rangers (Globe Life Field 5325); nba 6 Mavericks; wnba 3 Wings; nhl 9 Stars; nfl 6 Cowboys; usa.1 185 FC Dallas; college 2567 SMU, 2628 TCU, 249 North Texas, 250 UT Arlington. Montreal (Oct 8): nhl 10 Canadiens; usa.1 9720 CF Montréal. Minor-league and independent baseball through the same MLB feed with a sport id (11 Triple-A, 12 Double-A, 13 High-A, 23 partner leagues): 540 Frisco, 529 Tacoma, 403 Everett, 453 Brooklyn, 586 Staten Island, 1896 Long Island, 431 Gwinnett; the Chicago Dogs (1882) and Schaumburg Boomers (1950) are listed but carry no schedule. |
| ESPN final scores and announced attendance | same | finished events carry `competitors[].score` and `competitions[0].attendance` | `loadEspnFinals` in `espnSource.ts`; `scripts/attendance-collect.mjs` with `?season=YYYY` for past seasons (winter sports: the year the season ends) | |
| Team schedules, home and away, with scores | MLB Stats API; ESPN team schedule (above) | MLB: `…/schedule?sportId=1&teamId={id}&season={yyyy}&gameType=S,R,F,D,L,W&hydrate=linescore,team`; ESPN: the same team schedule endpoint, both sides kept | `mlbTeamSchedule`, `espnTeamSchedule` → `src/data/teamSchedule.ts`; written nightly to Supabase `team_schedules` by `scripts/catalog-write.mjs` | ESPN sends no CORS header, so a phone cannot read it directly; the table is the path. MLB can be read live from a browser and is the fallback. |
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
| Venues: names and rename dates, coordinates, capacity by setup and year, roof, strained access | `src/data/venues.ts` | `docs/archive/research/la-venue-table-answer.md`, `docs/archive/research/san-diego-venue-table-answer.md`, `docs/archive/research/seattle-venue-table-answer.md`, `docs/archive/research/new-york-venue-table-answer.md` and `docs/archive/research/atlanta-venue-table-answer.md` (Oct 6–7, 2026 research, with a link per figure; Seattle's PDF is saved beside its page; New York's arrival research came only as a PDF Kylie could not supply, so its markdown transcription is the record), Wikipedia infoboxes for Pauley Pavilion and Galen Center, OpenStreetMap for coordinates. Earlier figures: venue guides and news reports, Oct 1, 2026. |
| Teams and college programs | `src/data/teams.ts` | league sites; ESPN ids as above |
| Competitions (leagues, cups) for the Add form | `src/data/competitions.ts` | `docs/archive/second-opinions/sport-list-second-opinion-answer.md` |
| The 13 hand-rated nights and the Oct 3–4, 2026 LA seeds | `src/data/seed/` | `docs/test-nights-and-ratings.md`, `docs/researched-events.md`; each figure labeled on the event |
| Weather normals (empty) | `src/data/formula/weather.ts` `MONTHLY_NORMAL_F` | to research when a second city arrives |

## Research answers kept in `docs/`
- `docs/archive/research/la-venue-table-answer.md`: the venue research, with the verdict on each figure the app already had.
- `docs/research-oct-2026/`: October 2026 events in four cities (from the other session).
- `docs/archive/second-opinions/sport-list-second-opinion-answer.md`: how a game is classified.
- `docs/archive/research/hard-access-weight-answer.md`: what hard access and transit do to egress (StreetLight, Hwang/Humphreys/Pyun, FHWA); the ×1.25 and the car-share scaling.
- `docs/archive/research/seattle-city-type-answer.md`: how Seattle fans arrive, per venue (UW's 2022 game-day survey, Climate Pledge Arena's transit dashboard, the 2026 World Cup mobility deck, Sound Transit); the `carShare` on every Seattle venue and the city type.
- `docs/archive/research/atlanta-city-type-answer.md`: how Atlanta fans arrive, per venue (MARTA fare-card counts at the two stadium stations from a 2018–19 Georgia Tech study, MARTA's World Cup situation report, the Braves' 2016–17 transportation plan, venue parking pages); the `carShare` on every Atlanta venue, and the city type: driving. 17 of its 20 rows are estimates; only Mercedes-Benz Stadium and State Farm Arena have an observed count.
- `docs/archive/research/new-york-city-type-answer.md`: how New York fans arrive, per venue (the Belmont Park FEIS, LIRR and MTA ridership reports, the 2013 Barclays TDM survey, NYC DOT's 2012 Yankee Stadium survey, NJ Transit event counts); the `carShare` on every New York venue, and the city type: hub, not transit. 18 of its 28 rows are estimates from the nearest venue with a count; MSG and Harrison are the biggest risks.
- `docs/archive/research/venue-egress-answer.md` and `docs/archive/formula/gridlock_inputs_all_43_venues.csv`: parking counts, mode shares, occupancy and clearance times for all 43 venues (EIRs, city plans, LA Phil, MTS, SacRT). Exit lanes are not published anywhere, so the cars-per-lane rule is shelved; `carShare` can be filled from the official/reported rows.
- `docs/archive/formula/formula-review-response.md`: the formula review, including the calibration plan (§11).

## Not yet used, checked as available
- Ticketmaster Discovery API for concerts 🚩 free developer key, daily quota; terms to read first (step 4).
- MLB promotions (bobbleheads): not in the schedule feed; still to find.
- Setlist.fm API: terms of use to review before any setlist link is filled automatically.
