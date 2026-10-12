# Phoenix implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `phoenix-city-type-answer.md` (pasted by Kylie Oct 12; research date Oct 11) and `phoenix-venue-table-answer.md`. **Not a product lock.** The next-twenty plan lists Phoenix as a research candidate. This build follows that research and the Milwaukee / Philadelphia / Boston / Tampa pattern. It does not record a Kylie city-build approval.

City type is **`sprawl`**. No venue `carShare` overrides. The Oct 6 new-city checklist says to set each venue's car share from the research. Milwaukee (Kylie, Oct 11, the five-point approval) and the Tampa build leave unsupported estimates unwired. Phoenix has no measured event mode split, so this build follows that later pattern. The estimates stay in the research.

Boundary used: all of Maricopa County, plus Salt River Fields and Firebird (tribal land with Valley addresses). Pinal is audience-origin only. Tucson is outside. Display name stays **Phoenix** (the starter). Code `PHX`. Time zone `America/Phoenix` (Arizona does not observe daylight saving; no extra workaround). Map frame `center [-112.10, 33.48]`, zoom `10.2`, so downtown, Tempe, and Westgate fit on the first view. Surprise, Peoria, Goodyear, and Phoenix Raceway sit off that first view. This is the metro frame other covered cities set. Chips, the sheet, the glow, and the legend were not changed.

## Active fixed rooms (25)

Coordinates are OpenStreetMap hits (name or street), Oct 12, 2026. App id `american-family-fields-of-phoenix` does not collide with Milwaukee's `american-family-field`. The pre-existing Mortgage Matchup Center stub was filled in, not duplicated. Its unsourced 16,795 "Final Four" figure was not stored. Its two Ticketmaster ids were kept and were not re-verified at room level.

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `state-farm-stadium` | State Farm Stadium | 63400 football | Official fixed NFL count. "73,000+" and Wikipedia 72,200 / 78,600 standing are not a precise seat count, so concerts fall back to 63,400. Source: venue-table row 1 |
| `mountain-america-stadium` | Mountain America Stadium | 53599 football | Reported since 2018. Conflicts 53,559 and 56,634 kept in the note. No concert setup. Display and Ticketmaster keyword use the short name; the long official name stays searchable. Source: row 2 |
| `chase-field` | Chase Field | 48633 baseball | Reported. Conflicts 48,330 and 48,519 kept in the note. Lease expires 2027; extension unsigned. Source: row 3 |
| `phoenix-raceway` | Phoenix Raceway | 42000 racing | Reported Wikipedia infobox. Not official. Conflicts 45,000 planned, ~51,000, and ~67,000 pre-2018. City-type answer found no official current figure. ISM `from` date 2017-01-01 was not verified. Source: row 4 |
| `talking-stick-resort-amphitheatre` | Talking Stick Resort Amphitheatre | 20106 concert | Reported total. About 8,000 covered seats plus lawn; the lawn is standing, stored in the note, not as a second seat count. West Phoenix, not Scottsdale. Source: row 5 |
| `desert-diamond-arena` | Desert Diamond Arena | 17125 hockey, 18300 basketball, 19000 concert | Hockey and basketball reported; concert official. Rename month in 2022 not verified (`from` 2022-01-01). Source: row 6 |
| `mortgage-matchup-center` | Mortgage Matchup Center | 17071 basketball, 16210 hockey, 12565 concert | Reported. End-stage concert stored. In-the-round 17,716 and theater 4,379 are the same room; no theater setup exists on the venue type, so they stay in the note. Unlabeled 18,422 not used. 2025 interim PHX Arena window before Oct 2 is not a separate display date. Source: row 7 |
| `sloan-park` | Sloan Park | 15000 baseball | Official, including berm. Source: row 8 |
| `arizona-veterans-memorial-coliseum` | Arizona Veterans Memorial Coliseum | unknown | Reseller ~14,870 only. Left blank. Pin is the fairgrounds OSM point (1826 W McDowell), not the reseller's 1326. Source: row 9 |
| `desert-financial-arena` | Desert Financial Arena | 14198 basketball | Official current count. Post-renovation capacity unset. Rename `from` 2019-01-01 is a placeholder so 2018 still shows Wells Fargo Arena. Source: row 10 |
| `camelback-ranch` | Camelback Ranch–Glendale | 13500 baseball | Official fall-league page. Spring page says 13,000 including 3,000 lawn. Display `from` 2016-01-01 is not a sourced rename; it is so the branded name shows. OSM pin is inside Phoenix city limits; brand says Glendale. Source: row 11 |
| `scottsdale-stadium` | Scottsdale Stadium | 12000 baseball | Official. Source: row 12 |
| `salt-river-fields` | Salt River Fields at Talking Stick | 11000 baseball | Official. 7,000 fixed plus 4,000 lawn. Source: row 13 |
| `surprise-stadium` | Surprise Stadium | 10714 baseball | Official. A Florida write-up says 10,500. Billy Parker Field is the first name; `from` 2003-01-01 is the tenancy start, not a verified rename. Source: row 14 |
| `hohokam-stadium` | Hohokam Stadium | 10500 baseball | Reported current figure. 13,074 is a 2013 number. Source: row 15 |
| `peoria-sports-complex` | Peoria Sports Complex | 12339 baseball | Official spring-training page. Another official MLB page says 10,075. 12,339 is the spring-page total, not a resolved fixed-vs-berm split. OSM point is the complex, not a named grandstand. Source: row 16 |
| `american-family-fields-of-phoenix` | American Family Fields of Phoenix | 10000 baseball | Reported. Wikipedia list says 8,000. `from` 2019-01-01; reopening month unknown. Source: row 17 |
| `goodyear-ballpark` | Goodyear Ballpark | 9500 baseball | Reported page text (8,000 seats plus 1,500 berm). baseballparks.com says 10,311. Source: row 18 |
| `tempe-diablo-stadium` | Tempe Diablo Stadium | 9558 baseball | Reported. An Arizona Complex League list says 9,785. Source: row 19 |
| `phoenix-rising-soccer-stadium` | Phoenix Rising Soccer Stadium | 10000 soccer | Reported (Wikipedia and USL). FotMob says 10,437. Temporary stadium. ESPN's longer name stays searchable. Re-check before 2028. Source: row 20 |
| `phoenix-municipal-stadium` | Phoenix Municipal Stadium | 7800 baseball | Official City of Phoenix. Wikipedia 8,775 and ASU "more than 7,000" noted. Source: row 21 |
| `global-credit-union-arena` | Global Credit Union Arena | 7000 basketball | Official. Source: row 22 |
| `mullett-arena` | Mullett Arena | 5000 hockey | Reported NCAA configuration from 2022. Former Coyotes NHL 4,600 is not stored. Basketball (Valley Suns, some ASU women's games) falls through to this 5,000 figure. Exactly at the friction line. Source: row 23 |
| `arizona-financial-theatre` | Arizona Financial Theatre | 5000 concert | Official full house. Exactly at the friction line. Smaller scaled houses are not a second count. Source: row 24 |
| `firebird-motorsports-park` | Firebird Motorsports Park | unknown | No capacity in the research. Left blank. OSM point is the old Wild Horse Pass grounds, not a surveyed grandstand. `from` 2023-12-19 is the article date. Source: row 25 |

## Left out

- **VAI Resort amphitheater** (row 26): no opening date. Not pre-listed.
- **Candidate 1,000–5,000 rooms with no sourced capacity:** Gammage, Symphony Hall, Orpheum, Celebrity, Van Buren, Marquee, Mesa Arts, Mesa Amphitheatre, Herberger, Rawhide, West Valley Event Complex, Farrington Softball Stadium, GCU baseball park, Arizona Athletic Grounds, Phoenix Convention Center halls. Not listed. No capacity was invented.
- **Inactive:** Wild Horse Pass Rising stadium, Casino Arizona Field. Coyotes left in 2024 and are not a home club.
- **Table B open sites,** not venue rows (no usable daily crowd): WM Phoenix Open (last published turnstile is 2018), Arizona State Fair (in progress Oct 1–Nov 1 2026; daily count unknown), Barrett-Jackson, Country Thunder, Arizona Renaissance Festival. Coliseum concerts can arrive later through Ticketmaster name match. No crowd was invented. A note in the Oct 7 checklist is that festival parks are not venue rows unless a sourced daily crowd exists.
- **Arizona Fall League** clubs: no team ids wired. Games would sit in the six spring parks.
- **ASU volleyball, gymnastics, wrestling, and GCU volleyball:** home building is not settled (Desert Financial Arena vs Mullett). Not added.
- **No broad-team flag and no monthly heat baseline.** No audience poll in the research. `overlap.ts` was not edited.

## Teams and feeds (checked Oct 12, 2026)

| Team | Feed | Result |
|---|---|---|
| Diamondbacks | MLB team 109, venue 15 Chase Field, venue 4249 Salt River Fields | 410 home games with a crowd, 2022–2026. Two 2026 regular-season "home" games at Estadio Alfredo Harp Helú (venue 5340) were skipped. Spring training is not in the attendance file (the collector's game types). |
| Cardinals | ESPN NFL 22, "State Farm Stadium". Team id `arizona-cardinals` | 33 games |
| Suns | ESPN NBA 21. Arena names on the schedule map to Mortgage Matchup Center, including older names | 180 games. The old visitor row `suns` is now this home record |
| Mercury | ESPN WNBA 11 | 92 games |
| Valley Suns | ESPN G League 129713 | 32 games, mostly Mullett. One game at Orange County Convention Center was unmapped and skipped |
| Phoenix Rising | ESPN USL 17850. `seasontype` omitted (the feed returns nothing for type 2) | 44 games |
| ASU football | ESPN college football 9 | 26 games |
| ASU men's basketball | ESPN 9 | 63 games |
| ASU women's basketball | ESPN 9 | 59 games |
| ASU men's hockey | ESPN college hockey 9 | Schedule is wired. **0 games saved**; announced attendance was 0 in every season checked. Empty file kept |
| GCU men's / women's basketball | ESPN 2253 | 70 and 67 games. Some home games are in other cities (Desert Diamond, and buildings already mapped elsewhere, including Comerica Center). Only Phoenix buildings were added to the name map |
| ASU baseball, Rattlers, Ridge Riders | Team records only | No verified feed. Ridge Riders may be a series rather than a club |

Other Cactus League parks are venue rows. They are **not** on `MLB_VENUES`. The live schedule only lists home games of teams based in the metro being viewed. Mapping Camelback, Sloan, and the rest would attach Dodgers, Cubs, and other covered clubs' spring games to Phoenix coordinates inside those clubs' own metros. Diamondbacks spring games at Salt River Fields can show on the Phoenix schedule. Mexico City "home" games are skipped because that venue id is not Chase Field.

Ticketmaster sports sweep: Desert Diamond Arena, Phoenix Raceway, Firebird. Mortgage Matchup Center keeps the stub ids `KovZpZAE617A` and `KovZ917Ami1`. No other Phoenix Ticketmaster ids were verified. This environment has no Ticketmaster key, so the archive has no concert rows.

## Collected data

- **Attendance:** `data/attendance/phoenix/`. 1,076 games with a crowd, plus the empty ASU hockey file.
- **Expected draws:** 137 Phoenix rows, 1 season level (ASU football 2026, level 0.998 over 3 games), 103 opponent ratios, 6 postseason rows (Diamondbacks and Suns at Chase Field and Mortgage Matchup Center). Inserted at the front of each table in `expectedDrawIndex.ts` after the Austin rebase, so every line already on main stays byte-identical. A full calibrate was run only to extract Phoenix rows, then the other metros were restored. The index was not re-calibrated. No per-city opponents file. The Cardinals rows use team id `arizona-cardinals`. One Phoenix opponent ratio still says `cardinals`: that is the Diamondbacks against St. Louis.
- **All-days medians (announced crowds, not a ratings target):** ASU football 53,890 (18); ASU men 7,401 at Desert Financial (41) and 11,812 at Mortgage Matchup (3); ASU women 2,728 at Desert Financial (21) and 1,918 at Mullett (6); Cardinals 63,750 (22); Diamondbacks 27,279 (238); GCU men 7,186 (45); GCU women 609 (31); Mercury 10,452 (42); Rising 5,000 (41); Suns 17,071 (79); Valley Suns 863 (30).
- **Hard access:** `node scripts/venue-access.mjs --metro=phoenix`. 23 rooms at 5,000 or more. None meet the strained rule (relief at least 40 m and at most 4 named streets within 250 m). Coliseum and Firebird were not measured because capacity is unknown. The script first moved the existing Mortgage Matchup row to the end; that row was put back in its old place with the new measurement (relief 30 m, 12 streets; was 26 m and 9 streets on the stub pin) so other cities' rows stay in order. 22 new rooms are appended.
- **Weather:** 15 day files under `data/weather/phoenix/`. Other metros' index order unchanged.
- **Archive:** `data/schedule-archive/phoenix/2026-10-12.json`. Window Oct 12–26. 5 events, all ESPN (Suns vs Jazz, Rising vs Lexington, Suns vs Warriors, ASU vs Kansas State, Cardinals vs Broncos). MLB 0 (regular season over; spring is outside 14 days). No Ticketmaster.
- **Results:** 6 finals, Oct 9–11, in `data/results/phoenix/`. Other metros' index order unchanged.
- **Zones:** Downtown Phoenix (Chase Field, Mortgage Matchup Center, Arizona Financial Theatre); Westgate (State Farm, Desert Diamond); ASU Tempe (Mountain America, Desert Financial, Mullett).

## Open questions (for the next review)

1. Phoenix Raceway 42,000 is reported, not official. 45,000 / ~51,000 / ~67,000 remain in conflict. Store a different figure, or leave capacity unknown until NASCAR publishes one?
2. Peoria: 12,339 vs 10,075, both on official MLB pages. Which is fixed seats vs berm?
3. American Family Fields 10,000 vs 8,000. Goodyear 9,500 vs 10,311. Camelback 13,500 vs 13,000. Chase Field 48,633 vs 48,330 vs 48,519. Mountain America 53,599 vs 53,559 vs 56,634. Tempe Diablo 9,558 vs 9,785. Rising 10,000 vs 10,437.
4. Coliseum and Firebird capacities are unknown. Should either stay on the map with no size?
5. Placeholder dates: Desert Financial rename 2019-01-01; ISM Raceway 2017-01-01; American Family Fields 2019-01-01 (month unknown); Firebird 2023-12-19 (article date); Camelback display 2016-01-01 (not a rename); Surprise Stadium 2003-01-01 (tenancy, not a rename); Desert Diamond 2022-01-01 (month unknown); Talking Stick Amphitheatre 2023-01-01 (month, not day); State Farm 2018-09-01 (month, not day); Mortgage Matchup 2025 interim PHX Arena not modeled.
6. State Farm concerts use the 63,400 football count. Mega-event "73,000+" was not stored as seats.
7. Talking Stick total 20,106 includes lawn. Should the stored concert count be the ~8,000 covered seats instead?
8. Mullett basketball uses the 5,000 hockey figure. Arizona Financial Theatre and Mullett sit exactly on the 5,000 friction line.
9. No `carShare` overrides, including Mountain America 0.75 (low confidence) and the 0.93–0.99 suburban estimates. Wire any of them?
10. Should Cactus League games for clubs other than the Diamondbacks appear on the Phoenix map? They are not on the live schedule today.
11. 2027 Cactus League listings are tentative until the labor agreement is settled (expires Dec 1, 2026). Chase Field lease expires 2027. Desert Financial Arena's post-renovation capacity is unset.
12. ASU hockey has a schedule and no announced attendance. ASU baseball, Rattlers, and Ridge Riders have no feed. Which of those should be connected, and is Ridge Riders a club or a series?
13. Where do ASU volleyball, gymnastics, and wrestling actually play, Desert Financial Arena or Mullett?
14. The Arizona Cardinals id is `arizona-cardinals`, so it does not collide with the St. Louis key `cardinals`. Road games in other metros still store the visitor as the nickname slug `cardinals`, which will not match this id. Should those road games be linked another way?
15. Ticketmaster ids: only the two Mortgage Matchup stub ids are on file, and they were not re-checked. Suite and parking listings at that building are a duplicate risk. "Talking Stick" is three places (amphitheatre, the arena's old name, Salt River Fields). "Desert Diamond" is the arena and nearby casinos.
16. Display name "Phoenix" vs "Phoenix metro" or "Greater Phoenix". Map frame leaves Surprise, Peoria, Goodyear, and the raceway off the first view.
17. GCU games at buildings in other metros (including Comerica Center, already mapped to Dallas) can attach to those rooms. Confirm that is acceptable.
18. No Ticketmaster key was available for this archive, so concerts in the Oct 12–26 window are missing. Re-run the archive where the key exists.
19. Arizona does not observe daylight saving. The app uses `America/Phoenix`. No separate fix was added. Worth a check if any feed stamps Arizona games as if the state sprang forward.
