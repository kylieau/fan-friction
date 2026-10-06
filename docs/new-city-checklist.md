# New-city checklist

Kylie, Oct 6, 2026: Los Angeles is the only city built by hand. Every later city rides this page and the scripts. If a step can't be put here, the feature isn't done. A second city is for testing that the formula holds outside LA (step 4 of `docs/big-picture-plan-oct6.md`), not for coverage.

## 1. Configure (a few lines)
- `src/config/metros.ts`: id, name, time zone, map center and zoom.
- `src/data/formula/gridlock.ts` `CITY_TYPE`: sprawl (everyone drives), hub, or transit. This sets the spill between zones and the hard-access weight (1.25 driving, 1.1 transit).
- `src/data/formula/overlap.ts`: the city's **broad teams** (everyone's team, by year), if any.
- `src/data/formula/weather.ts` `MONTHLY_NORMAL_F`: the heat baseline by month (empty today; the 85°F floor applies until filled). Needs a source that works for every city.
- `src/data/scheduleArchive.ts` / `scripts/weather-fetch.mjs` / `scripts/results-fetch.mjs` / `scripts/catalog-write.mjs` (`ARCHIVE_METRO_ID`, `RESULTS_METRO_ID`): the metro ids each job covers (LA only today). The shared catalog tables are keyed by metro, so a second city needs no new tables.

## 2. Teams (one line each)
- `src/data/teams.ts`: a record per team and college program (id, names, league, sport, metro).
- `src/data/sources/mlbSource.ts` `MLB_TEAMS` and `MLB_VENUES`: MLB id and ballpark id.
- `src/data/sources/espnSource.ts` `ESPN_TEAMS` and `VENUE_BY_NAME`: ESPN path and id per team; the venue names ESPN uses. Ids are in `docs/data-sources.md`'s method: the team page on espn.com carries the id in its URL.
- `scripts/attendance-collect.mjs`: the same ids with the seasons to pull.

## 3. Venues (the hand part, about an afternoon)
- Run the venue research prompt for the city (`docs/la-venue-table-prompt.md`, change the city and boundary). Fold the answer into `src/data/venues.ts`: names with rename dates, coordinates, capacity by setup and year, roof. Label every figure official, reported or estimated. Geocode coordinates against OpenStreetMap.
- Save the answer under `docs/` and point `docs/data-sources.md` at it.

## 4. Run the scripts
1. `npm run attendance-collect` then `npm run attendance-calibrate`: past crowds and expected draws per team.
2. `node scripts/venue-access.mjs`: relief and streets per venue; the hard-access flag follows from the rule.
3. `npm run archive-schedule` once by hand to confirm the feeds, weather and results all answer for the new metro.
4. `node scripts/retune-analysis.mjs` only when the city has a season of archived nights.

## 5. Check on screen
San Diego (Oct 6, 2026) was the first run of this list, about three hours end to end: steps 1, 2 and 4 in an hour (the Padres, the city facts, the jobs' city list, the attendance pull); step 3 from Kylie's one research run (`docs/san-diego-venue-table-answer.md`, 13 venues folded in, including Frontwave Arena, which the brief had missed); then SDSU, San Diego FC and the Wave joined the feed and the attendance pull.

Seattle (Oct 6, 2026) was the second run, about ninety minutes once the research answer was in: eight teams and the city facts in one commit, 21 venues folded in (`docs/seattle-venue-table-answer.md`), the attendance pull and calibration (12 minutes), the hard-access measure (about 25 minutes, Open-Elevation's pace), one hand run of `archive-schedule`, then the nightly job by hand so the catalog had the city the same day. Two things learned: the venue table's `setup` has no festival kind (store festival caps as `concert` with a note), and ESPN's short name for a soccer club can be the city ("Seattle"), so game titles now take our own short name for a home team we know.

- Explore opens on the city with its venues on the map; the date page reads; an event page shows Outcome, Starters, TV and Length after a game.
- The city appears in Explore's city switcher and offers "Set as home" (both follow from having events; cities with none are not listed, Kylie, Oct 6).
- The Add form lists the city's venues under Where.

## Not per city (already universal)
Feeds, results, game length, the formula, weather, the map, accounts, the Add form's sport list, the hard-access rule.
