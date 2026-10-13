# Raleigh–Durham implementation register

Oct 13, 2026 · Cursor Cloud Agent, branch `cursor/raleigh-durham-city-build`. Sources: [city-type answer](raleigh-durham-city-type-answer.md) and [venue table answer](raleigh-durham-venue-table-answer.md), both dated Oct 12, 2026. This register records what went into the app, what was left out, and the judgment calls. It is not a Kylie approval of the build. Every city already on `main` is unchanged. Raleigh–Durham rows were added beside them, and `expectedDrawIndex.ts` is addition-only against `origin/main`.

## Rules that governed this pass

- New-city checklist (`docs/reference/new-city-checklist.md`) and the Boston, Milwaukee and New Orleans registers: metro record, city type from research, teams with feed ids checked against the live schedule, venues from the research with OpenStreetMap coordinates, attendance pull, then weather, archive, results and the hard-access measure.
- Never invent a capacity. A figure is stored only when the research cites one. Where the sources straddle the 5,000 floor, or give none, `capacity` is left empty (Dorrance Field, Nomaco Park).
- **Car shares are wired** on every room that has an estimated value in the city-type answer §8.2, each marked as an estimate in a comment next to it. This differs from New Orleans, Minneapolis and Milwaukee, which left their estimates unwired; the instruction for this build was to wire them, as Boston did. A venue's `carShare` only scales the hard-access penalty, and no Raleigh–Durham room is flagged hard-access, so the values change nothing visible today. A room with no §8.2 row carries no override and uses the sprawl fallback (0.85).
- `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, `BACKLOG.md` and `package-lock.json` were not edited.
- Public data only. No cost was started. The two Ticketmaster lookups that would need a key were not run (see Open questions).

## City type, name, and boundary

| Item | What was done | Source |
|---|---|---|
| Metro id | `raleigh-durham`, added to `COVERED_METRO_IDS` | Task |
| City type | `sprawl` in `CITY_TYPE` | City-type §7.1, §8.1 |
| Display name and code | `Raleigh–Durham`, `RDU` (airport code). Not locked. | Task; the venue table calls the market "Raleigh–Durham (Triangle)" |
| Time zone | `America/New_York` | Task |
| Map frame | Center `[-78.83, 35.87]`, zoom 9.2. Holds Chapel Hill, Durham, West Raleigh, downtown Raleigh and Cary on the first view; Walnut Creek, Holly Springs and Zebulon sit off the edge. | Coordinates from the venue rows |
| Boundary | Wake, Durham and Orange as the core. Johnston, Franklin, Chatham and Person are audience-origin counties with no verified room. Harnett, Lee and Vance are the CSA edge and excluded. Wilson Ballpark (the former Zebulon team) is out of the metro. | City-type §2, venue table §1 |
| Zone names | West Raleigh (Lenovo Center, Carter–Finley, Dorton), NC State campus (Reynolds), Duke campus (Wallace Wade, Cameron, Koskinen), UNC campus (Kenan, Smith Center, Carmichael, Dorrance), Downtown Durham (DBAP, DPAC), NCCU, Downtown Raleigh (both Red Hat rows, Memorial Auditorium, Meymandi), Cary (WakeMed Soccer Park and Koka Booth, which are two zones about six miles apart that share a name), Walnut Creek, Holly Springs, Zebulon. Distance (about 1.25 miles) still forms the zones. | City-type §6 |
| Monthly heat baseline, broad teams | None. No source in this research. | |

## Row ids: how the two research answers map

The city-type answer was written without the venue table, so its row ids (V, E) differ from the venue table's (R). The app uses the venue table's rooms.

| City-type id | Venue-table id | App venue id | carShare wired |
|---|---|---|---|
| V01 Lenovo Center | R05 | `lenovo-center` | 0.95 (hockey; concerts are 0.96) |
| V02 Carter–Finley | R01 | `carter-finley-stadium` | 0.91 |
| V03 Kenan | R02 | `kenan-stadium` | 0.75 |
| V04 Dean Smith Center | R04 | `dean-smith-center` | 0.80 |
| V05 Carmichael | R15 | `carmichael-arena` | 0.75 |
| V06 Cameron | R10 | `cameron-indoor-stadium` | 0.70 |
| V07 Wallace Wade | R03 | `wallace-wade-stadium` | 0.87 |
| V08 DBAP | R08 | `durham-bulls-athletic-park` | 0.85 |
| V09 DPAC | R23 | `dpac` | 0.88 |
| V10 Coastal CU Music Park | R06 | `coastal-credit-union-music-park` | 0.97 |
| V11 Red Hat (original) | R16 | `red-hat-amphitheater-raleigh` | 0.85 |
| V12 Red Hat (new) | R17 | `red-hat-amphitheater-raleigh-new` | 0.85, provisional as the answer says |
| V13 Koka Booth | R13 | `koka-booth-amphitheatre` | 0.96 |
| V14 First Horizon Stadium | R09 | `first-horizon-stadium` | 0.96 |
| V15 Dorton Arena | R12 | `dorton-arena` | 0.95 |
| V16 Reynolds Coliseum | R18 | `reynolds-coliseum` | 0.75 |
| V17 Five County Stadium | R27 | `nomaco-park` | 0.98 (tenant and capacity not re-verified) |
| E01 State Fair, E02 Dix Park festival, E04 watch parties | Table B | not rooms | not wired |

## Active fixed rooms (25)

Twenty-two have a capacity. Two are left blank on purpose (Dorrance Field, Nomaco Park). One has only a planned floor and has not opened (Red Hat, new site). Coordinates are OpenStreetMap through Nominatim (one request a second) unless the note says approximate.

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `carter-finley-stadium` | Carter-Finley Stadium | 56,919 football | Official. The 58,000 and 57,583 figures are in the note. Concert setup unknown, so none stored. The Feb 2023 Stadium Series announced 56,961 in a temporary rink. |
| `kenan-stadium` | Kenan Stadium | 62,980 from 2011, 62,562 from 2017, 50,500 from 2018 (football) | Reported for the first two (Wikipedia), official for 50,500. Dated so past games get the right ceiling. |
| `wallace-wade-stadium` | Wallace Wade Stadium | 40,004 from 2016, 35,018 from 2024 (football) | The 2024 figure is official and seated. The Devils Deck (just over 1,500 standing, game ticket required) is not added. |
| `dean-smith-center` | Dean E. Smith Center | 21,750 basketball | Official (UNC, Jan 2026). Concert capacity unknown (last concert 2008). |
| `lenovo-center` | Lenovo Center (PNC Arena before Sept 2024) | Hockey 18,680 before 2026 and 19,606 from 2026; basketball 20,450 from 2026; concert 19,500 before 2026 and 21,000 from 2026 | The two answers disagree: the city-type answer's older figures (18,680, 19,500) and the venue table's reopened 2026–27 figures. Both are stored, dated by year. The 21,000 is a floor ("more than 21,000"). Prior-season bases conflict (18,299, 18,547, 18,912) and are all far above 5,000. Official counts should be confirmed after the Sept 15, 2026 reopening. Basketball before 2026 falls back to the hockey figure. |
| `coastal-credit-union-music-park` | Coastal Credit Union Music Park at Walnut Creek | 20,601 concert | Reported (Ticketmaster): 6,847 seats plus 13,653 lawn. The operator rounds to 20,000. Rename dated Apr 28, 2016. |
| `o-kelly-riddick-stadium` | O'Kelly-Riddick Stadium | 10,000 football | Official (NCCU). Wikipedia's 11,500 is in the note. |
| `durham-bulls-athletic-park` | Durham Bulls Athletic Park | 10,000 baseball | Official (MiLB). Record 12,000 in 2019 is in the note. |
| `first-horizon-stadium` | First Horizon Stadium at WakeMed Soccer Park | 10,000 soccer | Official (NC Courage). The 11,170 app listing and the 2025 finale's more than 11,000 are in the note, so attendance can exceed the listed figure. Coordinate is approximate: OpenStreetMap has no stadium node, so it is the 101 Soccer Park Dr address point inside the complex. Name dates are inferred from "Sahlen's Stadium (2017–2021)" and "naming effective ahead of 2025". |
| `cameron-indoor-stadium` | Cameron Indoor Stadium | 9,314 basketball | Reported, stable since 1988. |
| `durham-county-memorial-stadium` | Durham County Memorial Stadium | 8,500 football | Official (county and sports commission). Hosts Shaw University football, Carolina Flyers and Tobacco Road FC, none of which have a league feed here. OpenStreetMap "Durham County Stadium" way; the research's Wikipedia point is within about 35 m. |
| `dorton-arena` | J.S. Dorton Arena | 5,000 permanent, 7,000 concert | Official (NCDA). The permanent figure sits exactly on the friction line. The NCDA history page says 6,500, Visit Raleigh 7,610 and NCpedia 9,150. Fair concerts are inside fair-gate admission and are never summed with the fair. |
| `koka-booth-amphitheatre` | Koka Booth Amphitheatre | 7,000 concert | Official (venue deck), both published setups sum to 7,000. Lantern Festival and Diwali are events here, not rooms. |
| `carmichael-arena` | Carmichael Arena | 6,822 basketball | Official (UNC). Wikipedia's 8,010 is in the note. OpenStreetMap labels the building Carmichael Auditorium. |
| `red-hat-amphitheater-raleigh` | Red Hat Amphitheater (original site, 500 S. McDowell St) | 6,000 concert | Official (Visit Raleigh). 2026 is the final season; the room closes in late October 2026. Keyed by site, not name. |
| `red-hat-amphitheater-raleigh-new` | Red Hat Amphitheater (new site, one block south) | 6,500 concert from 2027, planned floor | The convention center said the room must stay above 6,500 (current plus 500 to 1,000). That is a published floor, not an opened count, and is noted as such. The name entry starts 2027-04-01 as a placeholder for "spring 2027". Coordinate is approximate (one block south of the original; OpenStreetMap does not have it yet). |
| `reynolds-coliseum` | Reynolds Coliseum (Valvano Arena) | 5,500 basketball | Official (NC State), since the 2016 reopening. Up to 6,000 in an alternate configuration is in the note. |
| `koskinen-stadium` | Koskinen Stadium (Freeman Field from Oct 10, 2025) | 4,500 soccer | Reported seated. The 7,000 total includes standing and is not stored as seats, so the room is below the floor and muted. No Duke soccer or lacrosse feed in this pass. |
| `dorrance-field` | Dorrance Field (was Fetzer Field) | none | Visit Chapel Hill gives 4,200 chairback in one place and 5,025 in another, on either side of the floor. Left blank until UNC publishes a figure. No UNC soccer or lacrosse feed in this pass. |
| `mcdougald-mclendon-arena` | McDougald-McLendon Arena | 3,116 basketball | Official (NCCU): 3,116 seated, 3,500 total. |
| `dpac` | DPAC (Durham Performing Arts Center) | 2,712 concert | Official (Discover Durham). Broadway setup 2,683; closed balcony 1,953. Adjacent to DBAP, so proximity alone must not match a listing. |
| `raleigh-memorial-auditorium` | Raleigh Memorial Auditorium | 2,277 concert | Reported. Other listings say 2,354 and 2,369. One of four rooms in the Martin Marietta Center; not merged with Meymandi, Fletcher or Kennedy. |
| `meymandi-concert-hall` | Meymandi Concert Hall | 1,587 concert | Reported (This Is Raleigh). |
| `north-main-athletic-complex-stadium` | North Main Athletic Complex Stadium (Ting Stadium until Dec 2025) | 1,800 baseball | Official (team). Both names are kept because the team site still says Ting Stadium. |
| `nomaco-park` | Nomaco Park (Five County Stadium until May 2026) | none | The venue table did not verify a capacity. The city-type answer's 6,500 came from a Wikipedia list it called "not re-verified". The tenant is now the Zebulon Devil Dogz (CPL) after the Mudcats left in 2025. Rename dated 2026-05-01 (the research gives the month only). |

Red Hat is two rooms, keyed by site. The old one closes this month and the new one has no events yet, so only one of them can carry a listing on any date.

## Teams (15 records, all with feeds)

Every id and home venue name was checked against the live feed on Oct 13, 2026.

| Team id | Feed | Notes |
|---|---|---|
| `hurricanes` | ESPN nhl 7 | Lenovo Center. ESPN lists one 2027 home game at Veikkaus Arena (abroad) and the 2023 Stadium Series at Carter–Finley. The abroad game is unmapped and skipped, which matches the venue table's flagged "home game away from Lenovo Center". |
| `nc-state-football`, `nc-state-mbb`, `nc-state-wbb` | ESPN college 152 | Football at Carter–Finley. Men's basketball at Lenovo Center and a few at Reynolds; women's at Reynolds. |
| `unc-football`, `unc-mbb`, `unc-wbb` | ESPN college 153 | Kenan, Smith Center, Carmichael. |
| `duke-football`, `duke-mbb`, `duke-wbb` | ESPN college 150 | Wallace Wade, Cameron. |
| `nccu-football`, `nccu-mbb`, `nccu-wbb` | ESPN college 2428 | The research called NCCU optional; the feed has all three programs and their home rooms, so they are in. O'Kelly-Riddick and McDougald-McLendon. |
| `durham-bulls` | MLB team 234, sport 11, venue 2541 | Triple-A. Added to `MLB_TEAMS` and `MLB_VENUES`. |
| `nc-courage` | ESPN soccer/usa.nwsl 15366 | ESPN names the building "WakeMed Soccer Park"; that name and "First Horizon Stadium" both map to the room. |

Left out:

- **North Carolina FC** (men, USL): no 2026 season, per the venue table.
- **NC State baseball, UNC baseball and lacrosse and soccer, Duke soccer and lacrosse, volleyball, wrestling, gymnastics**: no team record or feed in this pass; they are manually loggable.
- **Shaw University, Carolina Flyers, Tobacco Road FC, Holly Springs Salamanders, Wake FC, Zebulon Devil Dogz**: no feed.
- **Carolina Mudcats and Wilson Warbirds**: out of the metro from 2026.

ESPN also lists neutral-site games (tournaments in Charlotte, Greensboro, New York and elsewhere). Those are saved in each team's attendance file against the other city's room, as for every other metro, and are not home games here.

## Gridlock

`CITY_TYPE['raleigh-durham'] = 'sprawl'`. Zone names are in `ZONE_NAMES`. The research's documented spill is inside West Raleigh (the Lenovo Center, Carter–Finley and the fair share lots and roads, and 2025 fair-day concerts stacked on top), which the 1.25-mile zone already groups. No hard-access flag follows from the measure (below).

## Feeds and scripts

| Step | Result |
|---|---|
| `attendance-collect` (14 ESPN and MLB teams) | Saved under `data/attendance/raleigh-durham/`: Hurricanes 209 games, NC State 31 / 68 / 64, UNC 30 / 64 / 67, Duke 27 / 75 / 65, NCCU 20 / 54 / 50, Courage 60, Bulls 377 (football, men's basketball, women's basketball in that order). |
| `weather-fetch --metro=raleigh-durham` | 15 day files, appended to `weatherIndex.ts`. |
| `archive-schedule --metro=raleigh-durham` | One snapshot for Oct 13 to Oct 27: 5 events (Hurricanes twice, Duke at home against UNC, Courage, UNC football), all ESPN. The Bulls season is over and NC State football and basketball have no home dates in the window. No Ticketmaster key was available, so no concerts are listed. |
| `results-fetch --metro=raleigh-durham` | 2 finals, Oct 10 to Oct 13. |
| `venue-access --metro=raleigh-durham` | 17 rooms with 5,000 or more measured. None meets the rule (relief of 40 m or more with four or fewer streets): the highest relief is 33 m (Carter–Finley). Research judgments (the narrow UNC and Duke approaches) stay in the notes, not the flag. Sub-5,000 rooms are not measured. |
| Expected draws | `scripts/.append-raleigh-durham-draws.mjs` (pattern of `.append-boston-draws.mjs`): +173 `EXPECTED_DRAWS`, +2 `SEASON_LEVELS`, +114 `OPPONENT_RATIOS`, all appended to the `origin/main` file. `POSTSEASON_DRAWS` is byte-identical to `origin/main`, so there are no Raleigh–Durham playoff rows: the Hurricanes' postseason crowds are not calibrated from the Cup run. Other metros were not recalibrated. |
| Ticketmaster | `SPORTS_FROM_TICKETMASTER` gained North Main, Nomaco, Durham County Memorial, Koskinen, Dorrance and Dorton (rooms whose tenants have no league feed). League-feed games at the same building and date still win. |

## Checks

- `npm run build`: passes.
- `npm run city-build-check`: all passed, including `raleigh-durham`.
- `node scripts/storage-check.mjs`: all passed.

## Not done and open questions

1. **Ticketmaster ids.** `TICKETMASTER_API_KEY` is not available in this environment, so no concert room has `ticketmasterIds`. Rooms match by exact name or within 300 m until the lookup (`node scripts/ticketmaster-venues.mjs --metro=raleigh-durham`) runs. Alias names were added for DPAC, Dorton Arena and Memorial Auditorium to help. Until the ids exist the city will list few or no concerts.
2. **Lenovo Center capacities after the reopening.** Two answers disagree and the 2026–27 figures are board numbers relayed by media. Is it right to store both, dated by year, until the official counts are published?
3. **Red Hat (new) 6,500.** A published planned floor is stored from 2027. Should a room that has not opened carry a number at all, or stay blank until Feb to Apr 2027?
4. **Dorrance Field and Nomaco Park** have no capacity. Both stay muted and unsized until an official figure exists.
5. **Dorton Arena at exactly 5,000** permanent seats feeds friction on the line; the 7,000 concert setup is clearly above it. Should rodeo and trade-show listings use the permanent figure?
6. **Short code `RDU`** and the display name `Raleigh–Durham` (not "the Triangle") are not locked.
7. **Postseason pool.** No Hurricanes or Duke playoff rows were added because `POSTSEASON_DRAWS` was held identical. The Cup run is therefore not in any playoff sizing. A full recalibrate would change other metros' rows, so it was not run.
8. **Not rooms, by the Oct 7 rule:** the N.C. State Fair (946,811 visits in 2025; Oct 15 to 25, 2026), Raleigh Wide Open, the Dix Park spring festival (not held as of April 2026), Hopscotch, Brewgaloo, the Stanley Cup parade (more than 190,000) and Moore Square watch parties. Each is a Table B hand-listed point if Kylie wants any of them; none was seeded.
9. **Unverified 1,000+ rooms** (Carolina Theatre, UNC Memorial Hall, Duke's Page Auditorium, The Ritz, Lincoln Theatre, the convention center, Cary Arts Center, the other fairgrounds buildings) and UNC's Boshamer (4,100) and NC State's Doak Field (2,500 to 3,000) were left out for lack of a verified figure or a team feed.
