# Sacramento implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources: `sacramento-city-type-answer.md` and `sacramento-venue-table-answer.md` (unchanged). Boundary: Sacramento–Roseville–Folsom MSA (Sacramento, Placer, Yolo, El Dorado) plus Wheatland in Yuba as a named edge. City type recorded as **`hub`**. No venue `carShare` overrides. **Not a Kylie city-build approval** — this follows the Milwaukee implementation pattern pending her OK.

## Rules that overrode the research or this task's wording

- **No invented capacity.** Dan Russell Rodeo Arena's only figure is a reseller estimate (7,000). The venue table marks it "Yes, low confidence." It is stored with an empty capacity list, so it does not feed friction. All American Speedway's implied ~7,500 (20% of capacity ≈ 1,500) is derived; only the reported 4,000 bleacher seats are stored, so the room stays under the friction line.
- **No unsupported car-share overrides** (Milwaukee pattern; Tampa did the same). Every split in the city-type answer is projected, estimated, or a fallback. None is wired. The stub `carShare: 0.87` on Golden 1 Center (an estimate by subtraction in `docs/research/topics/venue-egress-answer.md`) was removed so the hub default (0.85) applies.
- **Do not re-calibrate other metros.** `attendance-calibrate.mjs` rewrites the whole index, including other cities' draws and the shared postseason pool. Only rows with `metroId: "sacramento"` were appended onto the `main` copy of `expectedDrawIndex.ts`. A full rewrite would have changed 1,982 non-Sacramento expected-draw objects, 15 season levels, and the postseason pool. Opponent ratios sit in the main `OPPONENT_RATIOS` array. There is no `expectedDrawIndexSacramentoOpponents.ts`.
- **Open sites are not venue rows** (same as Milwaukee and Tampa). Table B stays in the research.
- **Future and dormant rooms are not activated.** Republic FC's Railyards stadium (2028), the Cal Expo Grandstand (no verified 2026 spectator tenant), the Sac State Cal Expo proposal, and the UC Davis stadium expansion are not venues. Sleep Train Arena (demolished), the Thunder Valley outdoor amphitheatre (last concert October 2022), and Sacramento Raceway (closed 2023) are not venues.
- **Convention halls are not rooms.** SAFE Credit Union Convention Center halls A–D have per-hall figures whose column meaning was not verified. The research says conventions should be event records.
- **This pass does not edit** `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, or `BACKLOG.md`, and does not change `package-lock.json`.

## Active fixed rooms (18)

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `golden-1-center` | Golden 1 Center | 17608 basketball; 19000 concert | Existing stub, filled in. Reported. Design 17,500 is not a second basketball row. Ticketmaster id `KovZpZAEF76A` kept. Source: venue table A4 |
| `hughes-stadium` | Hughes Stadium | 25000 football | Official college page, not Wikipedia 20,311. Rarely near capacity; still friction-eligible by the published figure. Source: A1 |
| `hornet-stadium` | Hornet Stadium | 21195 football | Reported. Stands described as temporary. Source: A3 |
| `toyota-amphitheatre` | Toyota Amphitheatre | 18500 concert | Official Live Nation total. About 8,000 reserved plus lawn; the lawn is not a second stored setup. Wheatland edge, outside the MSA. Source: A5 |
| `sutter-health-park` | Sutter Health Park | 13416 baseball | 2025 team-official total via ABC10 (lawn and standing included), not Wikipedia 14,014, not a May 2026 report of 13,800, not 10,624 fixed seats. Source: A6 |
| `heart-health-park` | Heart Health Park | 8000 soccer (through 2014); 11569 soccer from 2015; 14000 concert from 2017 | Soccer expansion is reported. Concert figure is official (club, 2017). A 25,000 listing is estimated and not used. Source: A7 |
| `uc-davis-health-stadium` | UC Davis Health Stadium | 10743 football | Official athletics page. Source: A8 |
| `university-credit-union-center` | University Credit Union Center | 6003 basketball; 5575 concert | Official athletics seats, not reported 7,600 or 8,000. Concert figure is the campus-events page. Source: A10 and city-type conflict table |
| `thunder-valley-venue` | The Venue at Thunder Valley | 4500 concert | Reported (CBS). Reseller "1,000" not used. Outdoor amphitheatre not a current room. Coordinate is the resort. Source: A11 detail |
| `all-american-speedway` | All American Speedway | 4000 racing | Reported bleachers only. Derived ~7,500 not used. Source: A12 |
| `sacramento-memorial-auditorium` | Sacramento Memorial Auditorium | 3849 concert | Dedicated auditorium figure, not 3,867. Jean Runyon Little Theater (272) is not this room. Source: A13 |
| `hornet-pavilion` | Hornet Pavilion | 3000 basketball from 2025 | Official. Inside The WELL. Coordinate is The WELL. Source: A15 |
| `hard-rock-live-sacramento` | Hard Rock Live Sacramento | 2500 concert | Seminole Tribune: 2,500 seated / 3,500 general admission. 3,500 is still under 5,000 and is not stored. The venue table's 2,500 link points at a Thunder Valley article, so the city-type source is used. Coordinate is the casino. Source: city-type V11 |
| `safe-credit-union-performing-arts-center` | SAFE Credit Union Performing Arts Center | 2188 concert from 2021 | Official city page after the 2021 reopening, not 2,193 or older 2,452. Dates before 2021 have no stored capacity. Source: A17 |
| `sac-state-nest` | The Nest | 1012 basketball | Reported. Volleyball still plays here. Coordinate is Yosemite Hall. Source: A18 |
| `ace-of-spades` | Ace of Spades | 1000 concert | Reported. On the pre-list line. Source: A19 |
| `quarry-park-amphitheater` | Quarry Park Amphitheater | 1000 concert | Reported. Venue table says not re-verified. OSM spells the sponsor "Platnum"; both names are stored. Source: A20 |
| `dan-russell-rodeo-arena` | Dan Russell Rodeo Arena | none | Reseller 7,000 is estimated. Capacity left empty. Source: A9 |

## Left out

- **Dormant / future / closed:** Cal Expo Grandstand (A2); Republic FC Stadium at the Railyards; Sac State football venue proposal; UC Davis Health Stadium expansion; Sleep Train Arena; Thunder Valley outdoor amphitheatre; Sacramento Raceway Park.
- **Not a fixed room:** SAFE convention halls (A14). Table B: California State Fair, Aftershock, GoldenSky, Sol Blume, California International Marathon, Run to Feed the Hungry, UC Davis Picnic Day, Yolo County Fair, Placer County Fair. Folsom Pro Rodeo is a room event at Dan Russell, not an open-site row; the room itself has no capacity.
- **Teams not added:** MLV NorCal (2027, venue unannounced; the release allows a Bay Area home). UC Davis volleyball and gymnastics (same building as basketball, no separate feed wired). No women's professional team plays here in 2026.
- **Teams with a record and no feed:** `sac-state-volleyball`, `sac-city-football`.

## Feeds (checked Oct 12, 2026)

| Source | Id | App team | Result |
|---|---|---|---|
| ESPN NBA | 23 | `sacramento-kings` | 175 games, all Golden 1 Center (collector also kept one 2027 home game) |
| ESPN college football | 16 `sacramento-state-hornets` | `sac-state-football` | 19 games, all Hornet Stadium. The slug `sacramento-state` returns 400 |
| ESPN men's / women's college basketball | 16 | `sac-state-mbb`, `sac-state-wbb` | Nest through 2025; Hornet Pavilion in 2026 |
| ESPN college football | 302 | `uc-davis-football` | 21 games, all UC Davis Health Stadium |
| ESPN men's / women's college basketball | 302 | `uc-davis-mbb`, `uc-davis-wbb` | University Credit Union Center, plus one Golden 1 Center game each |
| ESPN USL | `soccer/usa.usl.1` 17828 | `sacramento-republic` | 66 games, all Heart Health Park |
| MLB | team 133, venue 2529 | `athletics` | 2025: 81/81 at Sutter. 2026: 75/81 at Sutter; six Las Vegas games skipped because that venue id is not mapped and the Athletics have no venue fallback. Oakland seasons 2022–2024 are not in the file |
| MLB | team 105, sport 11, venue 2529 | `river-cats` | 2023–2026, 297 games, all Sutter Health Park |
| Ticketmaster | Golden 1 id kept | — | No other room id was verified, so none was added. No API key in this environment, so the schedule snapshot has no concerts |

ESPN school id 16 is Sac State. NBA id 16 is the Timberwolves on a different path. Home venue names from the live schedules are mapped only inside the Sacramento metro, so "The Pavilion" and "The Nest" do not steal another city's room.

`SPORTS_FROM_TICKETMASTER` includes `hughes-stadium`, `all-american-speedway`, `dan-russell-rodeo-arena`, and `sac-state-nest` (no league feed). League-feed buildings are not in that set.

## Expected draws

Appended onto `main`, other metros' objects unchanged:

| Array | Sacramento rows |
|---|---|
| `EXPECTED_DRAWS` | 140 |
| `SEASON_LEVELS` | 2 (Sac State football 2026 level 1.005 over 3 games; UC Davis football 2026 level 0.918 over 3 games) |
| `OPPONENT_RATIOS` | 109, in the main array |
| `POSTSEASON_DRAWS` | 6 (Athletics at Sutter, three league-basis bands; Kings at Golden 1, one blend and two league-basis) |

Regular-season medians (`dayClass: all`): Athletics 9,423 over 154 (2025–2026); River Cats 4,199 over 219 (2024–2026); Sac State football 15,016 over 13 (2023–2025); Sac State men's basketball 2,749 at Hornet Pavilion (2026) and 672 at The Nest (2024–2025); Sac State women's basketball 602 at Hornet Pavilion (2026) and 409 at The Nest (2025); Kings 16,339 over 79 (2025–2026); Republic FC 9,547 over 43 (2024–2026); UC Davis football 10,577 over 14 (2023–2025); UC Davis men's basketball 1,376 over 42 (2024–2026); UC Davis women's basketball 692 over 27 (2025–2026).

The Athletics and Kings postseason rows are league-pool occupancies (the seasons in those rows are the pool's seasons, not Sutter or Golden 1 postseason crowds). They were computed with Sacramento included in the pool. Other metros' pool rows were left as they are on `main`, so those two pools are not identical.

## Collected files (Oct 12, 2026)

- **Weather:** `data/weather/sacramento/` — 15 day files, Oct 12 through Oct 26 (city point, plus open-air rooms that have a listing). `weatherIndex.ts` gained only Sacramento rows.
- **Schedule snapshot:** `data/schedule-archive/sacramento/2026-10-12.json` — 6 events, Oct 12 through Oct 26, all from ESPN (three Kings games at Golden 1 Center, Sac State at Hornet Stadium, UC Davis at UC Davis Health Stadium, Republic FC at Heart Health Park). MLB, HockeyTech, and the seed list were empty in that window. Ticketmaster was not in the source list: this environment has no API key, and no new Ticketmaster venue ids were invented. `scheduleArchiveIndex.ts` and `startForecastIndex.ts` gained only Sacramento rows.
- **Results:** `data/results/sacramento/2026-10-10.json` — one final, Republic FC vs. Switchbacks FC at Heart Health Park, announced attendance 11,569. `resultsIndex.ts` gained only that row.
- **Hard access:** eight rooms at or above 5,000 measured; none flagged strained. The old Golden 1 row (17,600 seats, 21/8 streets, 13 m relief) was replaced with a fresh measurement (19,000 seats, 20/8 streets, 12 m relief). Every other city's measurement was kept.

## Map, zones, access

- Metro code `SAC`. Frame center `[-121.47, 38.57]`, zoom 10.8, time zone `America/Los_Angeles`. Downtown, West Sacramento, Cal Expo, and Sac State sit on the first view. Davis, Roseville, Lincoln, and Wheatland sit off it.
- Zones are the existing 1.25-mile rule. Named zones: Downtown (Golden 1, and any room within 1.25 miles of it, including Memorial Auditorium, the Performing Arts Center, Ace of Spades, and Sutter Health Park), Cal Expo (Heart Health Park), Sacramento State (Hornet Stadium, Hornet Pavilion, The Nest), UC Davis (the stadium and the University Credit Union Center).
- Hard access (`venue-access.mjs --metro=sacramento`): eight rooms at or above 5,000. None meet the strained rule (relief at least 40 m and four or fewer named streets within 250 m). The previous Golden 1 row (capacity 17,600) was replaced. Every other city's rows were kept.

## Coordinates

OpenStreetMap via Nominatim, one request a second. Rooms OSM does not separate are marked approximate in `venues.ts`: Thunder Valley (resort), Hard Rock Live (casino), Hornet Pavilion (The WELL), The Nest (Yosemite Hall). Heart Health Park was found under the name Papa Murphy's Park. The University Credit Union Center point is the events-venue pin, not the nearby ARC building.

## Checks (Oct 12, 2026)

- `npm run build` passed (type-check and production build).
- `npm run city-build-check` passed, including Sacramento (metro record, at least one venue, at least one home team).
- `node scripts/storage-check.mjs` passed.
- `package-lock.json` matches `main`.

## Open questions for the next review

1. **City type.** Research recommends `hub` because downtown/riverfront and Cal Expo share bridges, ramps, and lots. The strongest contrary case is `sprawl`: commuting is about 92% by car, and more than half of the 5,000+ capacity sits on sites with their own lots and little transit. `transit` (0.40) is not supported. Nothing here is a measured mode split. Confirm `hub`, or switch to `sprawl`.
2. **Car share.** No measured split for any room. Should any estimated exception be wired later (Toyota / Thunder Valley / Hard Rock ~0.97, Heart Health Park ~0.93, UC Davis Health Stadium ~0.77), or should they stay on the city default?
3. **Sutter Health Park capacity.** Stored 13,416 (2025 team-official total, lawn included) rather than Wikipedia 14,014, a May 2026 report of 13,800, or 10,624 fixed seats.
4. **Hughes Stadium.** Official 25,000, not Wikipedia 20,311. The research says it is rarely near capacity. It is friction-eligible on the published figure.
5. **All American Speedway.** Unresolved (4,000 bleachers vs derived ~7,500). Left under the friction line.
6. **Dan Russell Rodeo Arena.** No official capacity. Left unknown. Address listings disagree (403 Stafford St vs 200 Wool St).
7. **Heart Health Park.** Soccer 11,569 from 2015 (8,000 kept for 2014). Concerts 14,000 (club, 2017). A 25,000 listing and Cal Expo's "about 12,000" were not stored. The 2021 rename day is not published (`2021-01-01`).
8. **University Credit Union Center.** Official 6,003 basketball, not 7,600 or 8,000. Concert 5,575. Renamed July 2021; the day is not published (`2021-07-01`).
9. **SAFE Credit Union Performing Arts Center.** Official 2,188 after the 2021 reopening, not 2,193 or older 2,452. The reopen day is not published (`2021-01-01`). Dates before 2021 have no stored capacity.
10. **Memorial Auditorium.** 3,849, not 3,867.
11. **Golden 1 Center.** Basketball 17,608 and concert 19,000. Design 17,500 is not a second basketball row. An announced crowd of 17,832 can sit above the basketball figure.
12. **Toyota Amphitheatre.** 18,500 official total. About 8,000 reserved plus lawn is noted, not stored separately. Naming announced March 2015; the day is not published (`2015-03-01`). No per-show crowd history (only a 2014 season total).
13. **Hard Rock Live.** Stored 2,500 seated. Seminole Tribune also says 3,500 general admission, still under 5,000, not stored. The venue table's 2,500 link points at a Thunder Valley article.
14. **Hard Rock vs Toyota.** Research says under a mile. The OpenStreetMap pins are about 1.35 miles apart, so they do not share a 1.25-mile zone. The Hard Rock pin is the casino, not the room.
15. **Downtown zone.** The distance rule puts Memorial Auditorium, the Performing Arts Center, Ace of Spades, and Sutter Health Park in Golden 1 Center's zone. Sutter is about 0.75 miles away, across the river.
16. **Rename days that were not published.** Sutter Health Park `2020-01-01` (the season after 2019). UC Davis Health Stadium `2019-01-01`. Papa Murphy's Park is `2017-03-09`, which is sourced. The other days are the first day of the sourced month or year.
17. **Approximate coordinates.** Thunder Valley is the resort. Hard Rock is the casino. Hornet Pavilion is The WELL. The Nest is Yosemite Hall. Heart Health Park was found as Papa Murphy's Park. The University Credit Union Center pin is the events-venue point, not the nearby ARC building.
18. **Athletics home split.** 2026: 75 games at Sutter; six Las Vegas games skipped. Oakland 2022–2024 are not in this file. A fourth year at Sutter is only a third-party claim.
19. **Postseason rows.** League-pool or blend figures, computed with Sacramento inside the pool. Other metros' pool rows were not rewritten.
20. **Missing crowd history and teams.** No per-show attendance for the amphitheatre, casinos, Hughes, the speedway, Dan Russell, the theaters, Ace of Spades, or Quarry Park. Sac State volleyball and Sac City football are records only. UC Davis volleyball and gymnastics were not added. MLV NorCal (2027) was not added. No women's professional team in 2026.
21. **Not activated.** Cal Expo Grandstand. Republic FC Railyards stadium (2028). Sac State at Cal Expo (proposal). UC Davis stadium expansion (proposal). Closed: Sleep Train Arena, Thunder Valley outdoor amphitheatre, Sacramento Raceway. SAFE convention halls. Table B open sites.
22. **Quarry Park.** 1,000 was not re-verified. OSM spells the sponsor "Platnum."
23. **Hornet Stadium.** 21,195 is reported, and the stands are described as temporary.
24. **Ticketmaster.** Only Golden 1's existing id is stored. This snapshot has no concerts (no API key here).
25. **Map frame.** Center `[-121.47, 38.57]`, zoom 10.8. Davis, Roseville, Lincoln, and Wheatland sit off the first view. Display name stays "Sacramento."
26. **Hughes Stadium address.** A CEQA filing says "West Sacramento." The research treats that as a data error. The pin is the City of Sacramento stadium.
