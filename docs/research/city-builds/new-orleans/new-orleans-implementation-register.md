# New Orleans implementation register

Oct 12, 2026 · Cursor Cloud Agent. Rebased onto main after Minneapolis–St. Paul (and the other cities merged that day). Research sources are unchanged: `new-orleans-city-type-answer.md` and `new-orleans-venue-table-answer.md`. This register records what was put in the app, what was left out, and the judgment calls. It is not a Kylie approval. The next-twenty plan lists New Orleans as a research candidate; she has not approved this build the way she approved Milwaukee (K14). Every city already on main stays. New Orleans rows were added beside them. `expectedDrawIndex.ts` keeps every main line; New Orleans rows were inserted without rewriting other metros.

## Rules that governed this pass

- New-city checklist (`docs/reference/new-city-checklist.md`): metro record, city type from research, teams with feed ids checked against the live schedule, venues from the research with OpenStreetMap coordinates, attendance pull, then weather, archive, results, and the hard-access measure.
- Never invent a capacity. A figure is stored only when the research cites one. Ranges that are not a single published setup are not turned into a number.
- Festival grounds, parade routes, golf courses, and convention exhibit halls are not venue rows (checklist note, Kylie, Oct 7). A named theater inside a convention center is a room; the exhibit halls are not.
- `expectedDrawIndex.ts`: New Orleans rows were appended. Every other metro's rows stay byte-identical. The shared postseason pool was not rewritten. No per-city opponents file.
- Venue `carShare` is for a measured figure (`src/data/types.ts`). The city-type answer says no row is measured. Milwaukee's approved build left estimates unwired. Those shares stay in the research. The checklist sentence that says to copy each venue's car share from the answer is not followed here, because that answer labels every share an estimate. City type is still `hub`, so the existing 0.85 fallback applies. The research's capacity-weighted estimate is about 0.80.
- No monthly heat baseline and no broad-team flag. Neither has a source in this research.
- `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, and `package-lock.json` were not edited. `BACKLOG.md` was left alone because other city builds are in parallel.

## City type, name, and boundary

| Item | What was done | Source |
|---|---|---|
| City type | `hub` in `CITY_TYPE`. No venue `carShare`. | City-type §9.1 |
| Display name | `New Orleans` | The stub pattern (Tampa stayed "Tampa"). Research describes the New Orleans–Metairie area. |
| Short code | `NOLA` | Judgment. Airport code is MSY. Not locked. |
| Time zone | `America/Chicago` | Venue-table header |
| Map frame | Center `[-90.09, 29.97]`, zoom 10.6. Downtown, Uptown, Gentilly, City Park, and the Lakefront on the first view. Kenner and Westwego sit off it. | Coordinates from the venue rows |
| Boundary | Orleans Parish plus Jefferson Parish (East Bank and West Bank) | Both answers, §9.3 and venue-table §1 |
| Superdome zone name | `caesars-superdome` and `smoothie-king-center` share the zone name "Superdome complex" | City-type §7.4: one garage set and one streetcar stop |

## Active fixed rooms (20)

Coordinates are OpenStreetMap unless the note says otherwise. Capacity label in the app note is official or reported, matching the research.

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `caesars-superdome` | Caesars Superdome | 73208 football, 67500 basketball, 83000 concert | Official press kit, all pre-2019–2024 renovation. Saints game count stored for football; the same kit's 74,295 football maximum is in the note, not a second football row (the last football row is the one a football event uses). Wikipedia 76,468 is in the note. No post-renovation figure was published. Mercedes-Benz name kept, dated from 2021-01-01 (the research gives the year, not the day). OSM stadium point. |
| `yulman-stadium` | Benson Field at Yulman Stadium | 30000 football | Official Tulane. "Yulman Stadium" kept as a name because ESPN uses it. |
| `tad-gormley-stadium` | Tad Gormley Stadium | 26500 football | Official City Park, permanent seats. "Reggie Bush Field" kept as a searchable field name, not a second room. Turf closure dated only "January 12" has no year; the room stays active. |
| `smoothie-king-center` | Smoothie King Center | 16867 basketball, 17791 concert, 16900 hockey | Reported. Regular-season basketball stored; playoff/college 18,500 is in the note. Concert is the Ticketmaster 360° figure; Wikipedia's 17,221 / 17,805 / 7,500 setups are in the note. New Orleans Arena kept, dated 2014-02-01 (February 2014, day not given). OSM names the building at 2500 Howard Avenue; the research address is 1501 Dave Dixon Drive. The named OSM node was used. |
| `fair-grounds-race-course` | Fair Grounds Race Course | 10000 racing | Reported "about 10,000" grandstand. The extra Derby Day concourse crowd is not added. Jazz Fest is not this room's capacity. OSM sports-centre point; a second OSM track point was not used. |
| `lakefront-arena` | Lakefront Arena | 8785 basketball | Official UNO facilities page, cited in the city-type answer. Reported 8,900 / 8,933 / 10,000 are in the note. Concert is only a published range (1,500 to over 10,000) and is not stored. Official arena rename after the Jul 1, 2026 LSU New Orleans change was not confirmed, so the room is not renamed. |
| `turchin-stadium` | Greer Field at Turchin Stadium | 5000 baseball | Reported Wikipedia. Exactly on the friction line. No official Tulane figure in the research. ESPN writes "Green Field"; that spelling is mapped to this room. |
| `pan-american-stadium` | Pan American Stadium | 4500 soccer | Official Jesters seated bleachers. City Park's "up to 5,000" general admission is in the note and is not stored as seats, so this room does not feed friction from standing room. |
| `new-orleans-theater` | New Orleans Theater | 4032 concert | Reported Wikipedia. The center's own "over 4,000" is not a precise count. OSM point is the Morial Convention Center, not the interior theater. Exhibit halls are not this room. |
| `devlin-fieldhouse` | Fogelman Arena in Devlin Fieldhouse | 4100 basketball | Reported Wikipedia. ESPN's full name is stored so schedules match. OSM node is "Fogelman Arena" at 6401 Freret; the gym interior was not a separate point. Rename year stored as 2012-01-01 (research: 1988–2012, day not given). |
| `pontchartrain-center` | Pontchartrain Center | 3600 basketball, 3700 concert | Basketball is the reported sports figure. Concert is the Squadron's official "3,700 seat facility." The 4,600 conflict and the 5,820 theater-style hall setup are not stored. The hall setup would change the friction line; the research says to use the arena figure. |
| `maestri-field` | Maestri Field at Privateer Park | 2900 baseball | Reported Wikipedia. OSM pitch point. |
| `saenger-theatre` | Saenger Theatre | 2600 concert | Official ATG. 2,613 at the 2013 reopening is in the note. |
| `alario-center` | Alario Sr. Event Center | 2400 concert | Reported Wikipedia seats. "Up to 3,000" theater style is in the note, not stored. OSM "Alario Center." |
| `mahalia-jackson-theater` | Mahalia Jackson Theater | 2153 concert | Lower of the two figures on the same official ATG page (the other is 2,243). Wikipedia 2,100 is in the note. OSM arts-centre point, not the Basin Street road point. |
| `fillmore-new-orleans` | The Fillmore New Orleans | 2000 concert | Reported Ticketmaster. AP's 2,200 standing is in the note. No OSM node for the hall. Point is the geocode of 6 Canal Street, inside the casino, not a surveyed interior. |
| `orpheum-theater-new-orleans` | Orpheum Theater | unknown | Published range 1,460–1,780 by setup, with no single figure. Capacity left blank. Id is suffixed so it does not collide with Boston's Orpheum. |
| `joy-theater` | Joy Theater | 1200 concert | Reported standing. Seated "about 660" is not stored as an exact count. Ticketmaster's "1,200 seating" disagrees and is in the note. |
| `civic-theatre-new-orleans` | Civic Theatre | 1200 concert | Reported Advocate, 2017. Research gave only "CBD"; OSM resolved "The Civic Theatre" at 510 O'Keefe Avenue. Id is suffixed. |
| `house-of-blues-new-orleans` | House of Blues New Orleans | 1010 concert | Reported. At the pre-list line. OSM restaurant point on Decatur, next to the 225 Decatur address geocode. Id is suffixed. |

## Left out

| Research item | Why it is not a room or a feed |
|---|---|
| Shrine on Airline / Gold Mine on Airline (venue table 6, city-type V13) | Closed for reconstruction; reopening June 2027. Post-renovation capacity is unknown. The old 10,000 baseball figure is not the new building. |
| Champions Square (venue table 7) | Capacities are sourced (9,000 reported; 4,500 seated / 7,000 standing in a 2013 report). The research gave no coordinates. OSM returned only "Champions Square Parking," which is not the plaza. No point was invented. |
| Strawberry Stadium and University Center, Hammond | Separate Hammond market. Both answers say exclude. |
| Castine Center and Northshore Harbor Center | St. Tammany ring. Neither is 5,000+. Left out of this core. |
| TPC Louisiana, NOLA Motorsports Park, Bayou Oaks | Open grounds. No fixed spectator capacity. Table B, not rooms. Motorsports-park parking for the Zurich Classic is not an event. |
| Morial Convention Center exhibit halls | Temporary floor setups. The New Orleans Theater is the fixed room. |
| Jazz Fest, Mardi Gras, French Quarter Festival, Essence Festival, Zurich Classic, LIV Golf, Bayou Classic parade, Sail 250, Music City Volleyball | Table B. Multi-day totals, device visits, or "people in town" are not one crowd. No daily concurrent figure was published for the ones that have a total. Essence concert nights are Superdome events when a feed lists them. Not hand-seeded. |
| Voodoo and BUKU | Inactive. Not pre-listed. |
| NOLA Gold | Suspended. Not given a team record. |
| VooDoo (AFL) and the planned USL team | Defunct or no longer listed. Not pre-listed. |
| John Curtis HS football | 2026 temporary home unknown after the Shrine closed. |
| Crescent City Classic, marathon, Satchmo SummerFest, Southern Decadence, Gretna Heritage Festival, Bayou Classic parade details | The venue answer says these were not researched in this pass. No totals stored. |

## Teams and feeds

Ids were read from ESPN's team list and each home venue was read from that team's own schedule on Oct 12, 2026. Tulane football is **2655**. Id 265 is Washington State and was not used.

| Team | Feed | Id | Home room on the feed | Attendance file |
|---|---|---|---|---|
| Saints | ESPN NFL | 18 | Caesars Superdome | 43 games |
| Pelicans | ESPN NBA | 3 | Smoothie King Center | 167 games |
| Tulane football | ESPN college football | 2655 | Yulman Stadium | 30 games |
| Tulane men's basketball | ESPN | 2655 | Avron B. Fogelman Arena in the Devlin Fieldhouse | 61 games |
| Tulane women's basketball | ESPN | 2655 | same | 64 games |
| Tulane baseball | ESPN college baseball | 203 | Green Field at Turchin Stadium (mapped here) | 0 games: feed lists the games and sends attendance 0 |
| LSU New Orleans men's basketball | ESPN | 2443 | Lakefront Arena | 50 games |
| LSU New Orleans women's basketball | ESPN | 2443 | Lakefront Arena | 45 games |
| LSU New Orleans baseball | ESPN college baseball | 184 | Maestri Field | 0 games: attendance 0 on the feed |
| Laketown Squadron | ESPN G League | 6 | Pontchartrain Center on the 2027 schedule (17 home games). 2026 home games are Legacy Arena at BJCC | 0 games: no New Orleans attendance yet. Home opener in the research is Nov 14, 2026 |
| New Orleans Jesters | none | — | Pan American Stadium | Team record only. NPSL is not in the Ticketmaster sports-sweep set |

No MLB club. The Baby Cakes left in 2019; that club was not added.

Game titles use our short name when the team record's name matches ESPN's display name (Saints, Pelicans, Squadron). Tulane's football short name is "Tulane FB" so a title reads "Tulane," which is ESPN's short name, rather than the full "Tulane Green Wave." LSU New Orleans titles use ESPN's "LSU N Orleans."

## Collected data

- **Expected draws appended, not recalibrated:** 77 `EXPECTED_DRAWS`, 1 `SEASON_LEVELS` (Saints 2026, level 1.0, 3 games), 76 `OPPONENT_RATIOS`, 3 `POSTSEASON_DRAWS` (Pelicans, league-pool basis). Other metros' rows in those arrays are unchanged.
- **Regular-season medians (day class "all"):** Saints 70,009 at the Superdome (22 games, 2023–2025); Pelicans 16,787 (118 games, 2024–2026); Tulane football 24,504 (18 games, 2023–2025); Tulane men 1,281 and women 708 at Devlin; LSUNO men 738 and women 288 at Lakefront. These are the calibrator's medians. They were not adjusted toward any hand figure.
- **Archive** `data/schedule-archive/new-orleans/2026-10-12.json`: 4 events, Oct 12–26 (ESPN only). Tulane vs. Memphis Oct 16, Pelicans vs. Wizards Oct 16, Pelicans vs. Pacers Oct 21, Tulane vs. UTSA Oct 24 (no kickoff time on the feed, so the time is blank). No Ticketmaster key was available in this environment, so concerts were not pulled. MLB and HockeyTech returned nothing, which is expected.
- **Results:** Saints 13, Vikings 23, Oct 11, 2026, announced attendance 70,006, at the Superdome.
- **Weather:** 15 day files under `data/weather/new-orleans/`. The index gained New Orleans rows only.
- **Hard access:** `node scripts/venue-access.mjs --metro=new-orleans` measured the 7 rooms at or above 5,000. None is flagged strained. Lakefront has one named street within 250 m, but the relief is 2 m, so the hillside rule does not flag it. No hand flag was added.

## Open questions for Kylie's review

1. **Short code `NOLA` vs airport `MSY`, and the display name "New Orleans" vs "New Orleans–Metairie."**
2. **Car shares.** Every figure in the city-type answer is an estimate (Superdome Saints 0.82, marquee and Essence 0.65, Yulman 0.70, Lakefront 0.92, downtown theaters 0.75, Pontchartrain 0.95, Jazz Fest 0.62, Zurich 0.95). None were wired. Should any of those estimates become a venue override?
3. **Champions Square.** Include it once there is a real point for the plaza, not the parking lot. Which capacity (4,500 seated, 7,000 standing, or 9,000)?
4. **Superdome capacity after the 2024 renovation** is unpublished. The app is using the pre-renovation press kit (73,208 / 67,500 / 83,000). Re-check with LSED.
5. **Turchin at exactly 5,000** is Wikipedia only. Confirm with Tulane before treating it as a friction room.
6. **Pan American general admission of 5,000** was not stored as seats. Confirm that standing nights should stay under the friction line.
7. **Pontchartrain 5,820** theater-style hall was not stored. Confirm the arena figures (3,600 / 3,700) are the ones that should size Squadron nights.
8. **Lakefront concert capacity** is only a range. No concert number is stored. The official arena name after the LSU New Orleans change is unconfirmed.
9. **Orpheum** capacity is blank. The research gives 1,460–1,780 by setup and no single published figure. **Joy** is stored at 1,200 standing, not the approximate 660 seated. **Mahalia Jackson** is stored at 2,153, not 2,243. **Fillmore** is stored at 2,000, not 2,200.
10. **Fillmore, New Orleans Theater, and Devlin** coordinates are a street address, the convention-center building, and an OSM "Fogelman Arena" node. Not surveyed interior points.
11. **Shrine on Airline** stays out until a post-renovation capacity is published (re-check around March 2027; opening aimed at June 2027).
12. **College baseball** schedules load, but ESPN sent attendance 0, so there are no draw rows. **Laketown Squadron** has no New Orleans crowd yet. **Jesters** have no feed.
13. **Ticketmaster** room ids were not looked up (no API key here). The Oct 12 archive has no concerts. Ambiguous matching remains: Superdome vs Champions Square vs Smoothie King, Fair Grounds vs Jazz Fest, City Park's three sites, casino vs Fillmore.
14. **Saints game of Oct 25, 2026** is not in the snapshot. The research says that home game moved to Paris. Worth confirming on the feed that it is not labeled as a Superdome game.
15. **Tad Gormley** turf closure: the retrieved text gave "January 12" and no year.
16. **St. Tammany** rooms (Castine, Northshore Harbor) were left out. They are under 5,000. Add later only as muted rooms if that ring is wanted.
17. **Table B crowds** (Jazz Fest daily, Mardi Gras, French Quarter Festival, Essence, Zurich, LIV) have no single-day concurrent count in this research, so nothing was hand-listed. Mardi Gras and French Quarter Festival car share are unknown in the city-type answer.
18. **No broad-team flag** and **no monthly heat baseline.** The research did not provide either.
