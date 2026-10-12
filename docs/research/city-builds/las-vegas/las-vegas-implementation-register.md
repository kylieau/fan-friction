# Las Vegas implementation register

Oct 12, 2026 · Cursor cloud agent. Research sources are unchanged: [city-type answer](las-vegas-city-type-answer.md) and [venue-table answer](las-vegas-venue-table-answer.md). **Not a Kylie approval** the way Milwaukee was (K14). This pass adds the metro, rooms, teams and feeds, and Las Vegas rows in `expectedDrawIndex.ts` only.

## Scope and city type

- **Boundary:** the Las Vegas Valley urban area (City of Las Vegas, North Las Vegas, Henderson, and unincorporated Paradise, Winchester, Enterprise, Spring Valley and Summerlin), including Las Vegas Motor Speedway. Primm/Jean, Pahrump, Laughlin, Mesquite and Boulder City stay out.
- **City type:** `hub` (research recommendation, moderate-low confidence). `hub` and `sprawl` share the 0.85 fallback, so the type is about spill between nearby rooms. Estimated car shares are not wired.
- **Metro code:** `LAS` (assistant's call; the short label over a read box). Change it if Kylie prefers another.
- **Map frame:** centered on the Strip. Downtown, Summerlin, Henderson and the speedway sit off the first view.

## Car share

No observed event mode split was found. The city-type answer's recommended figures are estimates or projections, so they are not wired (same rule as Milwaukee and Tampa). Every room uses the hub fallback.

| Room | Research figure, not wired | Research row |
|---|---|---|
| Allegiant Stadium | 0.65 (concerts 0.57) | LV-01a, estimated |
| T-Mobile Arena | 0.79 (concerts 0.48) | LV-02a, projected |
| Sphere | 0.55 | LV-03, estimated |
| MGM Grand Garden Arena | 0.50 | LV-05, estimated |
| Michelob ULTRA Arena | 0.75 | LV-06, estimated |
| Las Vegas Ballpark | 0.92 | LV-07a, estimated |
| Dolby Live | 0.50 | LV-10, estimated |

## Active fixed rooms (20)

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `las-vegas-motor-speedway` | Las Vegas Motor Speedway oval | 80000 racing | Reported, about 80,000. Conflicts kept in the note: secondary 75,000 minus 8,000 (2019), stale 123,000, reseller 131,000. Source: A01 |
| `allegiant-stadium` | Allegiant Stadium | 65000 football; 61000 soccer | Football official. Soccer secondary. Expanded ~72,000 and concert setups not selected. Enclosed roof. Source: A02 |
| `t-mobile-arena` | T-Mobile Arena | 17500 hockey; 18000 basketball; 18000 concert | Official. Concert figure is the end-stage upper bound; center-stage 19,500–20,000 stays in the note. Source: A04 |
| `sphere` | Sphere | 17600 concert | Secondary seated figure. 20,000 with floor and a conflicting 18,600 were not selected. Official page not retrieved. Source: A05 |
| `thomas-mack-center` | Thomas & Mack Center | 18000 basketball | Official. Secondary 17,923 and pre-renovation 19,522 not used. Cox Pavilion is a different room and is not mapped. Source: A06 |
| `mgm-grand-garden` | MGM Grand Garden Arena | 16800 concert | Official fact sheet, Jan 15, 2026. Source: A07 |
| `cashman-field` | Cashman Field | 10000 soccer | Reported "about 10,000". Secondary 12,500 not used. Last match Oct 17, 2026. Source: A08 |
| `michelob-ultra-arena` | Michelob ULTRA Arena | 12000 basketball | Secondary. No official WNBA configuration. Rename date from Mandalay Bay Events Center unknown. Source: A09 |
| `downtown-las-vegas-events-center` | Downtown Las Vegas Events Center | 11000 concert | Official main-venue standing figure. The 20,000 all-space figure and the 1,500/2,000 tent are not this room. Source: A10 |
| `las-vegas-ballpark` | Las Vegas Ballpark | 10000 baseball | Official capacity; about 8,200 fixed seats noted. Source: A11 |
| `orleans-arena` | Orleans Arena | 5736 usual; 7773 hockey; 8000 basketball; 9500 concert | Permanent seats official. The other three are secondary or reported. Source: A12 |
| `lvms-dirt-track` | LVMS Dirt Track | 8200 racing | Secondary. Official confirmation needed. Complex point, not a surveyed track point. Source: A13 |
| `ph-live` | PH Live | 7000 concert | Secondary. Aliases AXIS, Zappos Theater (from Feb 2018), Bakkt Theater (from Mar 24, 2023), PH Live (from July 2024; August 2024 also reported). Coordinates from the venue answer; OpenStreetMap resolved the resort. Source: A14 |
| `lees-family-forum` | Lee's Family Forum | 5567 hockey | Reported fixed seats. The rounded "about 6,000" is not used. Dollar Loan Center until Apr 2, 2024. Source: A15 |
| `lvms-bullring` | LVMS Bullring | 5400 racing | Secondary. Official confirmation needed. Complex point. Source: A16 |
| `dolby-live` | Dolby Live | none (`capacity: []`) | The 5,200 figure is a reseller listing. The venue answer said to confirm an official number before using it, so the capacity is blank. Park Theater is the older name; rename date unknown. Source: A17 |
| `resorts-world-theatre` | Resorts World Theatre | 5000 concert through 2024; 4869 from 2025 | Reported. Below 5,000 after the 2025 renovation (4,561 fully seated also reported). Source: A18 |
| `south-point-arena` | South Point Arena | 4600 | Official Main Arena. Muted. Hotel point, not a surveyed arena point. Source: A19 |
| `bleaulive-theater` | BleauLive Theater | 3800 concert | Secondary. Muted. Fontainebleau point, not a surveyed theater point. Source: A20 |
| `craig-ranch-amphitheater` | Amphitheater at Craig Ranch Regional Park | none (`capacity: []`) | No sourced capacity. An observed crowd of about 9,000 was not turned into a capacity. Park centroid. Source: A21 |

Gridlock zone names: South Strip (T-Mobile, Allegiant, Michelob ULTRA, MGM Grand Garden, Dolby Live, PH Live), North Strip (Sphere, Resorts World Theatre, BleauLive), Downtown (the events center and Cashman). The speedway's three rooms share the oval's point, so they share a zone.

## Deferred / excluded

- **Not active:** Athletics ballpark on the Tropicana site (A03), opening for 2028. NBA expansion is still a proposal. Sam Boyd Stadium is closed.
- **Not verified this pass (no row):** Colosseum at Caesars Palace, The Theater at Virgin Hotels, Pearl Concert Theater, The Chelsea, House of Blues, Brooklyn Bowl, Smith Center, Venetian Theatre, Encore Theater, Cox Pavilion, LVMS dragway. A reseller figure of 2,000 for House of Blues was not treated as verified.
- **Vegas Thrill:** current status unclear in the venue answer. No team record.
- **Table B, not rooms:** EDC, Formula 1, Sick New World, When We Were Young, Life is Beautiful, Mint 400, conventions. Not hand-listed. NFR is a Thomas & Mack event, not a separate grounds crowd. Downtown watch parties and Cowboy Christmas stay separate and unlisted.
- **Edge:** Primm/Jean (Mint 400 racing), Pahrump, Laughlin, Mesquite, Boulder City.
- **PWHL neutral sites:** two 2026–27 "home" games are still `TBD`. They are not placed at T-Mobile Arena. The one game at Lee's Family Forum is mapped by name.

## Teams and feeds

Ids checked against the live feed on Oct 12, 2026. ESPN home-venue names were taken from each club's own schedule.

| Team | Feed | Id | Home room on the schedule |
|---|---|---|---|
| Raiders | ESPN NFL | 13 | Allegiant Stadium |
| Golden Knights | ESPN NHL | 37 | T-Mobile Arena |
| Aces | ESPN WNBA | 17 | Michelob ULTRA Arena (some games at T-Mobile) |
| Lights FC | ESPN USL | 18987 | Cashman Field |
| UNLV football | ESPN | 2439 | Allegiant Stadium |
| UNLV men's basketball | ESPN | 2439 | Thomas & Mack Center (also MGM Grand Garden, Michelob ULTRA, Lee's) |
| UNLV women's basketball | ESPN | 2439 | Mostly "Pavilion" (Cox Pavilion, not mapped). Thomas & Mack games map; Pavilion games do not |
| Aviators | MLB Stats API | team 400, venue 5355, sport 11 | Las Vegas Ballpark |
| Silver Knights | HockeyTech AHL | 437 | Lee's Family Forum (curly apostrophe on the feed) |
| PWHL Las Vegas | HockeyTech PWHL | 12 | T-Mobile Arena, plus one game at Lee's. New for 2026–27; no final crowds yet |
| Knight Hawks, Desert Dogs, Rockers | — | team records only | Lee's Family Forum, Lee's, Orleans Arena. Those rooms are on the Ticketmaster sports sweep |

No Ticketmaster Discovery id was verified. Allegiant's public venue number 189482 is not a Discovery id and was not stored. MGM Grand Garden and the NFR are on AXS. Concerts at rooms without an id still match by name near the building.

No broad-team flag. The research has no resident poll. No monthly heat baseline was added.

## Collected data and expected draws

Attendance files are under `data/attendance/las-vegas/`, collected Oct 12, 2026. Games kept are home games in a mapped building with an announced crowd.

| Team | Games | Buildings |
|---|---|---|
| Aces | 131 | Michelob ULTRA Arena 120, T-Mobile Arena 11 |
| Golden Knights | 217 | T-Mobile Arena |
| Silver Knights | 83 | Lee's Family Forum |
| Aviators | 306 | Las Vegas Ballpark |
| Lights FC | 52 | Cashman Field |
| PWHL Las Vegas | 0 | 2026–27 games are not final |
| Raiders | 44 | Allegiant Stadium |
| UNLV football | 29 | Allegiant Stadium 28, plus one postseason LA Bowl at SoFi Stadium |
| UNLV men's basketball | 65 | Thomas & Mack Center 63, Lee's Family Forum 2 |
| UNLV women's basketball | 8 | Thomas & Mack Center. "Pavilion" games were left unmapped |

The SoFi game stays in the attendance file and is not a Las Vegas draw. UNLV men's dates at MGM Grand Garden or Michelob ULTRA did not land in the kept file, so they have no draw row.

Appended to `expectedDrawIndex.ts`: 124 expected-draw rows, 2 season levels, and 97 opponent ratios, all `metroId` `las-vegas`. Season levels are Lights FC 2026 at 1.388 (10 games) and UNLV football 2026 at 1.114 (3 games). Regular-season medians (every date): Aces 10,415 at Michelob ULTRA (36 games) and 16,572 at T-Mobile (6); Golden Knights 17,961 (120); Silver Knights 3,165 (74); Aviators 5,947 (223); Lights 2,078 (38); Raiders 62,364 (23); UNLV football 30,858 (16); UNLV men 5,553 (43); UNLV women 908 (4). Draw buildings are Allegiant, Cashman, Las Vegas Ballpark, Lee's, Michelob ULTRA, T-Mobile and Thomas & Mack.

Every line of `expectedDrawIndex.ts` already on `main` stays intact. Las Vegas rows were added at the front of `EXPECTED_DRAWS`, `SEASON_LEVELS` and `OPPONENT_RATIOS`. `POSTSEASON_DRAWS` is unchanged. There is no separate opponents file and no full recalibration (that would move the shared playoff pool).

Weather, the schedule archive, results and `venue-access` were not run in this pass. Those scripts rewrite shared index files, and other city builds are in flight. The nightly job will pick the metro up once this lands on `main`. No manual hard-access flags were added.

## Open questions

1. Kylie has not approved this build the way she approved Milwaukee.
2. `LAS` as the metro code.
3. Estimated car shares are not wired: Allegiant 0.65 (concerts 0.57), T-Mobile 0.79 (concerts 0.48), Sphere 0.55, MGM Grand Garden 0.50, Michelob ULTRA 0.75, Las Vegas Ballpark 0.92, Dolby Live 0.50. None of those figures is measured.
4. Dolby Live's 5,200 is a reseller figure. The capacity is blank until an official number is confirmed, so a show there cannot feed friction.
5. LVMS oval seating is unresolved below the reported 80,000. Dirt-track 8,200 and Bullring 5,400 are secondary.
6. Cashman Field closes Oct 17, 2026. The Lights' 2027 home is unannounced, so that feed will stop mapping.
7. Craig Ranch has no capacity, so it cannot feed friction until a sourced figure exists.
8. Cox Pavilion (UNLV women) has no sourced capacity and is not a room.
9. The Athletics' six 2026 games at Las Vegas Ballpark are over. Sacramento home games are not attached here. The 2028 ballpark is not activated.
10. Table B crowds (F1, EDC, and the rest) are not on the map.
11. Silver Knights games listed at Orleans Arena on Oct 4–5, 2026 were flagged unverified in the venue answer and were not special-cased.
12. Venue-access measurement, a nightly catalog snapshot and phone checks were not run.
