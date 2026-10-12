# Houston implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `houston-city-type-answer.md` and `houston-venue-table-answer.md`. This register records what was folded into the app, what was left out, and the judgment calls that still need Kylie's review. Nothing here is a lock.

Scope used: Harris, Fort Bend and Montgomery counties, plus Prairie View as an edge room. City type is `sprawl`. No venue `carShare` is stored. Display name is Houston, code `HOU`, time zone America/Chicago.

## Active fixed rooms (34)

Coordinates are OpenStreetMap, not estimated from memory. Where OSM had no stadium node, the note says which point was used.

| App ID | Research row | Room the app shows | Selected capacities | What was done |
|---|---|---|---|---|
| `reliant-stadium` | A-01 | Reliant Stadium | 72220 football; 80000 concert | Official current football count. Concert uses the official upper of "72,000 to 80,000". Historical steps and the 71,995 Titans-guide conflict stay in the note. Names: Reliant, NRG from 2014-03-19, Houston Stadium from 2026-06-11, Reliant from 2026-08-01. Roof stored as covered (retractable), same as other retractable roofs. |
| `first-community-stadium` | A-02 | First Community Stadium | 47000 football | Official 2020 Rice rental page. 37,000 conflict noted. Post-renovation capacity was not applied. Renamed from Rice Stadium on 2026-10-03. Not Rice–Totten Stadium in Mississippi (that alias is metro-only). |
| `daikin-park` | A-03 | Daikin Park | 41168 baseball | Reported SportCal figure. Conflicts 40,950 and 40,963 noted. Astros' own page was not fetched. Minute Maid Park until 2025-01-01. Roof covered. MLB venue id 2392. |
| `tdecu-stadium` | A-04 | TDECU Stadium | 40000 football | Reported architect/concessionaire. 39,700 plus standing room noted. OSM names the pitch John O'Quinn Field; that alias is kept, and the stadium name is the one shown. |
| `shell-energy-stadium` | A-05 | Shell Energy Stadium | 22039 soccer | Reported. Conflicts 20,656 and 20,039 noted. Football and concert setups unknown, so they are not stored. Rename dates were not verified, so older names are aliases without dates. Roof open (canopy). |
| `toyota-center` | A-06 | Toyota Center | 18104 basketball; 19000 concert | Reported. The 18,055 conflict and the unknown renovation effect stay in the note. Official Rockets figure was not fetched. |
| `cynthia-woods-mitchell-pavilion` | A-07 | The Cynthia Woods Mitchell Pavilion presented by Huntsman | 16500 concert | Official listing: 6,500 covered seats plus about 10,000 lawn. The lawn is GA. Roof covered, matching other amphitheaters with a canopy over the seats. |
| `pvamu-panther-stadium` | A-08 | Panther Stadium at Blackshear Field | 15000 football | Official. Architect "up to 15,510" noted. Edge room in Waller County. OSM point is Blackshear Football Field. Atlanta already uses `panther-stadium`, so this id is `pvamu-panther-stadium`. "Panther Stadium" is an alias and a metro-only feed name. |
| `legacy-stadium` | A-09 | Legacy Stadium | 12000 football | Reported. Mike Johnston Field is an alias. Manual room: no team feed. |
| `cy-fair-fcu-stadium` | A-10 | Cy-Fair FCU Stadium | 11000 football | Reported. "Berry Center stadium" is an alias. OSM stadium next to the Berry Center, not Ken Pridgeon Stadium. Manual room. |
| `woodforest-bank-stadium` | A-11 | Woodforest Bank Stadium | 10000 football | Reported. Manual room. |
| `tomball-isd-stadium` | A-12 | Tomball ISD Stadium | 10000 football | Reported. Manual room. |
| `challenger-columbia-stadium` | A-13 | Challenger Columbia Stadium | 10000 football | Reported. Manual room. |
| `berry-center-arena` | A-14 | Berry Center Arena | 9500 basketball | One secondary source. Note says to verify with Cy-Fair ISD before treating the friction line as settled. |
| `planet-ford-stadium` | A-15 | Planet Ford Stadium | 8000 football | Reported. Manual room. |
| `constellation-field` | A-16 | Constellation Field | 7500 baseball (standing 8606); 9500 concert | Official seat count. Standing and concert figures are reported. 2025 average 3,706 is not stored as capacity. MLB venue id 5421. |
| `fertitta-center` | A-17 | Fertitta Center | 7035 basketball from 2018 | Reported. 7,100 conflict noted. Hofheinz Pavilion before 2018-12-01. Earlier layouts noted, not stored as current. |
| `reckling-park` | A-18 | Reckling Park | 6193 baseball | Official facility page. The 7,000 rental-page conflict is noted. Both are over 5,000. |
| `smart-financial-centre` | A-19 | Smart Financial Centre at Sugar Land | unknown | Official range is 1,900 to 6,400 by movable walls. The venue-table answer says not to assume 6,400 when the show's configuration is unpublished, so no capacity is stored. |
| `reliant-arena` | A-20 | Reliant Arena | 5700 concert | Official "5,700+", not rounded to the Wikipedia 5,800. Names follow the facility rename, including Reliant again from 2026-08-01. |
| `tudor-fieldhouse` | A-21 | Tudor Fieldhouse | 5208 basketball | One secondary source, just over 5,000. |
| `713-music-hall` | A-22 | 713 Music Hall | 5000 concert | Official city listing: 5,000 occupancy, mostly a flat GA floor. The note says this is occupancy, not seats. The Terminal is the pre-opening alias. Threshold case. |
| `sabercats-stadium` | A-23 | SaberCats Stadium | 3000 seats, standing 4000 | Official city page. Under 5,000, so it stays on the map muted. OSM point is Houston Sports Park, 12131 Kirby, not the misplaced 2055 Mowery Rd point. AVEVA Stadium is an undated alias. Anchor tenant is gone. |
| `schroeder-park` | A-24 | Darryl & Lori Schroeder Park | 3500 baseball | Reported. Under 5,000. |
| `white-oak-music-hall-lawn` | A-25 | White Oak Music Hall Lawn | 3000 concert | Low-quality secondary, about 3,000. Campus point shared with the downstairs room. |
| `jones-hall` | A-26 | Jones Hall for the Performing Arts | 2912 concert | Official Houston Symphony. Can shrink to 2,300. 2,883 conflict noted. |
| `sarofim-hall` | A-27 | Sarofim Hall | 2650 concert | Reported. Zilkha Hall is not this room. |
| `wortham-brown-theater` | A-28 | Brown Theater | 2423 concert | Reported. 2,405 conflict noted. Shares the Wortham Center point with Cullen. |
| `reliant-arena-pavilion` | A-29 | Reliant Arena Pavilion | 1500 concert | Official "1,500+". Same OSM point as Reliant Arena. The pavilion rename is inferred from the facility rename and has no sourced day. |
| `cougar-softball-stadium` | A-30 | Cougar Softball Stadium | 1200 baseball | Reported. Under 5,000. |
| `wortham-cullen-theater` | A-31 | Cullen Theater | 1100 concert | Reported. At the pre-list line. |
| `white-oak-music-hall-downstairs` | A-32 | White Oak Music Hall Downstairs | 1000 concert | Low-quality secondary, about 1,000. At the pre-list line. |
| `ww-thorne-stadium` | A-33 | W.W. Thorne Stadium | unknown | Research says pre-list it as Texas Southern's 2026 home. No sourced capacity was found, so none is stored. |
| `sam-houston-race-park` | A-34 | Sam Houston Race Park | unknown | No sourced capacity. OSM point is the commercial area, not a separate grandstand node. Roof stored as open because racing is outdoors; the grandstand type itself is unknown. |

## Left out, and why

| Research item | Decision |
|---|---|
| A-35 Reliant Center, A-36 George R. Brown Convention Center | Event-record buildings with square footage, not seating. Not venue rows. Same treatment as other convention halls. |
| A-37 Reliant Astrodome | Inactive since 2009. Not a row. No alias guard was added in code; the name is only in this note. |
| Houston Raceway Park | Closed after April 2022, Chambers County. Not a row. |
| Zilkha Hall (500) | Below the about-1,000 pre-list line. Hand-log only. |
| White Oak upstairs | The campus has three rooms. No capacity was published for the upstairs room, so it is not a row. |
| Table B open sites | Rodeo grounds, marathon, Houston Open, Mardi Gras Galveston, the 2028 convention, and the World Cup fan festival are dated events, not rooms. They were not hand-listed. No multi-day total was turned into a capacity. |
| Galveston rooms | Research says keep Galveston separate. Capacities were not verified. Not merged into Houston. |
| Brazoria and farther counties | Not a finding that those rooms do not exist. They were outside the recommended core. |
| Houston Comets | Team record only. The WNBA feed had no Houston club on Oct 12. First season is 2027. |
| UH baseball, UH softball, Rice baseball | Team records only. There is no college baseball or softball feed. |
| Texas Southern basketball (H&PE Arena), Prairie View basketball (William J. Nicks Building) | Research listed H&PE as a gap with capacity unverified, and Nicks was not a Table A row. Neither room was added. |
| Houston Gamblers / Roughnecks, Houston SaberCats | The league and the club left. No team records. The SaberCats' room remains, muted. |
| LOVB Houston, Dynamo 2, Houston Christian, Clay Court Championship, Miller Outdoor Theatre, Bayou Music Center | Named as gaps in the venue-table answer. Not added. |
| Car shares in the city-type answer | All of them are derived or estimated. None is a measured mode split. None was wired. The checklist's "give each venue its car share" step conflicts with the Milwaukee and Tampa builds, which left unwired estimates off the rooms. This build follows those builds. `sprawl` and `hub` share the 0.85 default anyway; the choice only changes spill. |
| Monthly heat baseline, broad-team flag | Not in the research as measured facts. Not invented. |
| Ticketmaster room ids | The research said feeds were untested. No ids were guessed. Reliant Stadium, Reliant Arena and Sam Houston Race Park are on the sports-listing allowlist so a rodeo, bowl or race-day listing can attach. The Texans stay on the ESPN feed; a same-day league game still wins. |

## Feeds checked Oct 12, 2026

Ids were checked against the live schedule, not copied from memory.

| Source | What was wired | What came back |
|---|---|---|
| MLB | Astros team 117, venue 2392, Daikin Park. Space Cowboys team 5434, sport 11, venue 5421, Constellation Field. | 422 Astros games (2022–2026) and 300 Space Cowboys games (2023–2026). |
| ESPN | Texans NFL 34. Rockets NBA 10. Dynamo 6077. Dash 17346. Houston football, men's and women's basketball 248. Rice football and basketball 242. Texas Southern football 2640. Prairie View football 2504. | Texans 47, Rockets 179, Dynamo 80, Dash 61, UH football 29, UH men 72, UH women 61, Rice football 29, Rice men 65, Rice women 62, TSU football 17, Prairie View football 19. |
| ESPN venue names | Reliant / NRG / Houston Stadium → `reliant-stadium`. Toyota Center (Houston) → `toyota-center`. Shell Energy / BBVA / BBVA Compass → `shell-energy-stadium`. TDECU → `tdecu-stadium`. Fertitta / Hofheinz → `fertitta-center`. First Community and, for Houston only, Rice Stadium → `first-community-stadium`. Tudor Fieldhouse → `tudor-fieldhouse`. Minute Maid / Daikin → `daikin-park`. Panther Stadium, Houston only → `pvamu-panther-stadium`. | Texans home name on 2022–2025 schedules is already "Reliant Stadium". TSU's 2026 home games, including Oct 24 against Southern, are listed at Shell Energy Stadium. Research said Thorne plus Reliant for 2026. The feed wins for game placement. Thorne is still pre-listed. |
| HockeyTech | Not used. Houston has no club on that feed. | — |
| Ticketmaster | No room ids. Three rooms allowlisted for sports listings, as above. | This archive pass did not include a Ticketmaster source. Concerts are not in the Oct 12 snapshot. |
| WNBA | Comets record only. | No Houston club in the feed on Oct 12. |

Texas Southern's app id is `texas-southern-football`. Nashville already uses `tsu-football` for Tennessee State, so the two schools do not share an id.

## Checks (Oct 12, 2026)

- `npm run build` passed (type-check and production build).
- `npm run city-build-check` passed, including Houston.
- `node scripts/storage-check.mjs` passed.
- `package-lock.json` is unchanged from main.
- Phone-size check: Houston can be chosen as home. The Oct 17 date shows four events (Shell Energy Stadium, TDECU Stadium, First Community Stadium, Panther Stadium at Blackshear Field). Opening the Dynamo card did not crash. Oct 12 itself has no listing, so that date has no pins.

## Collected data

- Attendance files: `data/attendance/houston/`, 1,443 games across the 14 teams above.
- Expected draws: 168 Houston rows, 4 season levels (2026 football for the Texans, Houston, Rice and Prairie View), and 127 opponent ratios, merged into `expectedDrawIndex.ts`. Every other metro's rows, and `POSTSEASON_DRAWS`, stayed byte-identical. The full calibrate script was not run.
- Hard access: 21 rooms at or above 5,000 were measured. None met the strained rule. Thorne, the race park and Smart Financial Centre were not measured because they have no stored capacity. Rooms under 5,000 are not measured.
- Schedule snapshot: `data/schedule-archive/houston/2026-10-12.json`, 11 events, Oct 12 through Oct 26. Sources that ran: MLB 0, ESPN 11, HockeyTech 0, seed 0. No Astros or Space Cowboys home game fell in that window.
- Results: `data/results/houston/2026-10-10.json`. Prairie View at Panther Stadium, announced crowd 9,410. Texas Southern at Shell Energy Stadium, no attendance on the result.
- Weather: 15 Houston day files under `data/weather/houston/`. Index rows for other cities were not rewritten.

## Gridlock zones

The zone center is the first room in the file, and it does not move. Named clusters: Reliant Park (stadium, arena, pavilion), Downtown / EaDo (Daikin Park first, then Toyota Center, Shell Energy Stadium and the Theater District rooms), University of Houston, Rice University, and Berry Center. Constellation Field and Smart Financial Centre are not one zone: OpenStreetMap puts them about three miles apart. The research said about a mile. That distance is an open question, not a reason to force one name.

## Rules this build followed

- New-city checklist: metro record, short code, covered-city list, teams, venues, feeds, attendance, draws, weather, archive, results, hard access.
- Logging thresholds: anything can be logged by hand; about 1,000 and up is pre-listed; 5,000 and up feeds friction; rooms under about 5,000 stay on the map, muted, with no friction label.
- No invented capacity. Empty capacity means unknown.
- Venue ids are unique across the app.
- City type comes from the research (`sprawl`), not from an assumption. Downtown spill is recorded as the contrary case for `hub`.
- No measured car share was available, so none was wired.
- No broad-team flag and no invented monthly normal.
- Small source conflicts are noted, not averaged.
- Expected draws were added for Houston only. Other metros and the postseason pool were not recalibrated.
- Festival grounds and convention halls are not venue rows.
- `package-lock.json`, `MEMORY_HANDOFF.md` and `docs/product/product-decisions.md` were not changed.

## Open questions for the next review

These were not guessed into a lock.

1. City type: the research recommends `sprawl`. The downtown and EaDo cluster is the contrary case for `hub`. Spill between those rooms is the only thing the choice changes.
2. Display name: Houston, rather than Houston–Pasadena–The Woodlands or a "Houston Bay" style name.
3. Prairie View is inside the metro as an edge room. Waller County is outside the three-county core.
4. ISD stadiums are manual rooms with sourced capacities and no public ticket feed. They are not on the Ticketmaster sports allowlist.
5. Berry Center Arena is 9,500 from one secondary source. Tudor Fieldhouse is 5,208 from one secondary source.
6. White Oak lawn and downstairs are about 3,000 and about 1,000 from a weak source. The upstairs room was not listed.
7. Smart Financial Centre's official range is 1,900 to 6,400. Capacity is blank because the answer says not to assume 6,400.
8. 713 Music Hall is stored at 5,000 occupancy, not 5,000 seats. It sits on the friction line.
9. Reckling Park: 6,193 on the facility page and 7,000 on the rental page, both official. 6,193 is stored.
10. Daikin Park: 41,168 stored. Conflicts 40,950 and 40,963. The Astros' own figure was not fetched.
11. Toyota Center: 18,104 basketball and 19,000 concert stored. Official figure not fetched. Renovation through fall 2027; capacity effect unknown.
12. First Community Stadium: 47,000 stored. A later renovation is reported around 30,000 and was not applied. Timeline unknown.
13. TDECU: 40,000 stored against 39,700 plus standing room. Post-2024 renovation effect unverified.
14. Shell Energy Stadium: 22,039 stored against 20,656 and 20,039. Rename dates unverified, so the current name shows on older dates too.
15. Reliant Stadium: 72,220 football and 80,000 concert upper stored. Conflict 71,995. An 80,203 concert is attendance, not a seat count.
16. Reliant Arena: 5,700 stored, not 5,800. Pavilion rename has no sourced day.
17. Houston Stadium's start date is stored as 2026-06-11, the start of the fan-festival window, not a sourced minute. Reliant returns 2026-08-01, which is sourced.
18. Texas Southern 2026: research says W.W. Thorne plus Reliant on Oct 24. ESPN lists the 2026 home games, including Oct 24 and the played Oct 10 game, at Shell Energy Stadium. Games follow ESPN. Thorne is still pre-listed with unknown capacity. 2027 home is unknown.
19. Sam Houston Race Park capacity is unknown. The mapped point is the commercial area. Roof "open" is a judgment.
20. H&PE Arena and the Nicks building were not mapped.
21. Comets have no 2027 feed yet. College baseball and softball have no feed.
22. Rodeo, marathon, golf, Mardi Gras, the fan festival and the 2028 convention were not hand-listed.
23. No Ticketmaster room ids were verified. The Oct 12 snapshot has no concerts.
24. Sugar Land: research said Constellation Field and Smart Financial Centre are about a mile apart. OpenStreetMap puts them about three miles apart, so they do not share a zone.
25. SaberCats Stadium has no anchor tenant. Future use is unknown. AVEVA-to-SaberCats has no exact day.
26. Galveston stays a separate market. Brazoria was not searched as a core county.
