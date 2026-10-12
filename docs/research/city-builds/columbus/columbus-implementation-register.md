# Columbus implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `columbus-city-type-answer.md` and `columbus-venue-table-answer.md` (both as of Oct 11, 2026). This is a build from those answers. It is not a Kylie city-build approval (Milwaukee K14 was; this is not).

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`). Los Angeles stays the only hand-built city. City type comes from the research, not a guess (Kylie, Oct 6). Each venue that the city-type answer recommended a number for gets that `carShare`.
- Never invent a capacity. A figure the venue research itself called too weak to rely on stays unknown (empty `capacity`).
- Venue ids are unique across the app. The existing Columbus starter in `src/config/metros.ts` was filled in (code `CBUS` was already there). `columbus` was added to `COVERED_METRO_IDS`.
- Convention halls and festival grounds are not venue rows (Kylie, Oct 7, from the Atlanta and New York builds). Multi-day totals are not divided into daily crowds, and a projection is not stored as a count.
- `src/data/expectedDrawIndex.ts`: Columbus rows only, prepended. Every line that was already on `main` is still present, in order. No separate opponents file. `POSTSEASON_DRAWS` was not recomputed, so other cities' playoff pool is unchanged. `scripts/attendance-calibrate.mjs` was not run.
- `package-lock.json`, `MEMORY_HANDOFF.md`, and `docs/product/product-decisions.md` were not edited. `BACKLOG.md` was left alone because other city builds are in parallel.
- Ratings were not tuned to anyone's hand ratings. Attendance on the collected games is the only crowd evidence stored.

Where this prompt or the research pulled against a rule, the rule won. Those spots are in "Left out" and "Open questions" below.

## Boundary and city type

The 10-county MSA is the outer boundary (Franklin, Delaware, Licking, Fairfield, Pickaway, Union, Madison, Perry, Morrow, Hocking). The map frame is Franklin: center `[-83.01, 39.985]`, zoom `11.2`, time zone `America/New_York`, display name `Columbus`. Delaware (Selby, Branch Rickey), Newark (Midland), and Mid-Ohio sit off the first view. Lancaster, Marysville, London, Circleville, and the lightly searched outer towns are inside the boundary and have no qualifying room from this pass. Cleveland, Cincinnati, Dayton, Eldora, and Athens stay out.

City type is **`sprawl`**, the research recommendation: no rail, no measured mode split, venue estimates 0.72–0.93 car. The contrary case is the Arena District as a shared-approach cluster, which the research said would argue for `hub` if hub means more spill. In the current formula, `sprawl` and `hub` use the same 0.85 fallback and the same nearby spill (0.15). `transit` (0.4 car, less spill) is the type the evidence rules out. Recording `sprawl` follows the recommendation and does not change spill versus `hub` today. The label is still an open question for Kylie.

Zones people know, by the research clusters in city-type §5b: Arena District (Nationwide, ScottsMiracle-Gro Field, Huntington Park, both KEMBA rooms), Ohio State (the campus rooms that have a zone name), Ohio Expo Center (Historic Crew Stadium and the Celeste Center). Distance still forms the zone. A room within about 2 km of the first venue in a zone joins it even without its own label. That pulls the downtown theaters and Battelle Grand toward the Arena District name, and Newport toward Ohio State. Listed below as a question, not overridden.

## Active rooms (25)

Car shares are the city-type answer's low-confidence estimates. None is measured. Rooms the answer sent to the 0.85 fallback have no override. Coordinates are OpenStreetMap unless the note says otherwise. The only Ticketmaster id kept is the one already on the Ohio Stadium stub (`KovZpZAEAAeA`). No other room id was invented.

| App ID | Research row | What was stored | Source and what was left out |
|---|---|---|---|
| `ohio-stadium` | A1 | Football 102,780 official. Car share 0.72. Roof open. Names: The Shoe, Ohio Stadium. | NHL.com figure matching OSU Athletics. 2026 south-end-zone net capacity unpublished, not invented. Outdoor-hockey has no fixed config. Stadium Series car share 0.88 is a one-off, not this default. Roof called open-air in research but marked unsourced there. |
| `nationwide-arena` | A2 | Hockey 18,500, basketball 19,500, concert 20,000, all official. Car share 0.86. Indoor. | Fan-wiki hockey 18,144 and arena-football 17,171 not stored (older). End-stage concerts are a range, not one number. OhioHealth Ice Haus is a practice rink, not a room. |
| `value-city-arena` | A3 | Basketball 18,809 reported, hockey 17,500 reported, concert 20,000 official. Car share 0.85. Names include Schott and Value City Arena. Indoor. | Full bowl "up to 20,000" is the concert row. Curtained 3,000–7,000 is a range, not stored. Architect 19,500, total seats 19,049, and Knowlton concert 21,000 noted, not stored as the current figure. |
| `scottsmiracle-gro-field` | A4 | Soccer 20,371 official. Car share 0.86. Names: Lower.com Field; ScottsMiracle-Gro Field from 2026-01-01 (display name); Columbus Stadium from 2028-07-10 (searchable LA28 alias). Roof open. | StadiumDB 20,139 noted, not stored. Concert configuration unknown. Canopy extent unverified, so the roof is not marked covered. |
| `historic-crew-stadium` | A5 | 19,968 reported, no setup. Car share 0.93. Names: Columbus Crew Stadium; Mapfre Stadium from 2015-01-01; Historic Crew Stadium from 2020-12-01. Roof open. | 21,000 and 27,000 noted. 27,000 not stored (configuration unverified; possibly a festival floor). Sonic Temple stage crowds are not added. On the sports-from-Ticketmaster sweep because UFL and MLS Next Pro have no league feed. |
| `st-john-arena` | A6 | Basketball 13,276 reported. No car-share override. Indoor. | No current ticketed sport. Skull Session is a separate room from the football game; it is not auto-listed. |
| `mid-ohio-sports-car-course` | A7 | Racing grandstands 12,000 reported. No car-share override. Open. Edge of the MSA. | Mounds "over 75,000" are grounds, not stored. In the directory so a race can be logged by hand. Not on the sports sweep, so a race weekend does not automatically shape Columbus friction. |
| `celeste-center` | A8 | Concert 10,200 official. Display name WCOL Celeste Center. Indoor. | OSM point, about 40 m from the research camera point. "10,000" in listings not stored. Fair concerts sit inside fair admission and were not seeded. |
| `huntington-park` | A9 | Baseball 10,100 official. Car share 0.85. Open. | Record crowd 12,517 is attendance, not a second capacity. MLB team 445, venue 3970. |
| `jesse-owens-memorial-stadium` | A10 | 10,000 with no setup, and 3,242 setup `track`, both official on the same page. No car-share override. Open. | The conflict is preserved. The no-setup figure is what a listing uses when the sport is not track, so the room sizes as 10,000 until that is resolved. Fixed seats alone would sit under 5,000. |
| `selby-stadium` | A11 | Football 9,100 official. Open. Delaware. | Wikipedia/NRHP point. Nominatim did not resolve the name. Track, lacrosse, and field hockey have no separate published counts. |
| `fortress-obetz` | A12 | 6,500 reported, no setup. Open. | Breakdown (1,100 + 2,000 + 3,400) is the note, not three capacities. Crowds unknown. Columbus Motor Speedway is closed and is not a second room. |
| `battelle-grand` | A13 | Concert 5,411 official theater set. Indoor. | Parent convention-center point; the room was not a separate OSM hit. Main floor 4,368 and historic 6,864 / 7,588 / 6,400 noted, not applied to every event. |
| `kemba-live-outdoor` | A14 | Concert 5,200 official standing. Car share 0.85. Open. | Also reported 5,500, and a rental page says up to 5,000. Official standing figure stored. Older names searchable, undated, because the KEMBA rename date was not confirmed. |
| `kemba-live-indoor` | A22 | Concert 2,200 official. Indoor. Same coordinates as the outdoor room. | 2,300 noted. The name stored is "KEMBA Live! Indoor Music Hall" only, so bare "KEMBA Live!" is not shared by both rooms. |
| `bill-davis-stadium` | A16 | Capacity unknown. Names: Nick Swisher Field, Bill Davis Stadium. Open. | Wanderlog 4,450 is the only figure, and the research says replace it before relying on it. Left unknown. |
| `osu-covelli-center` | A17 | About 3,700 reported. Indoor. | Id is not Youngstown's Covelli Centre. OSM way is "Covelli Center & Jennings Wrestling Facility"; the wrestling room was not split. |
| `ohio-theatre-columbus` | A19 | Concert 2,779 reported. Indoor. | Coordinates match the research point. |
| `palace-theatre-columbus` | A20 | Concert 2,695 reported. Indoor. | 2018 reseat to 2,691 noted, not stored as a dated row (the research's "now" figure is 2,695). |
| `mershon-auditorium` | A21 | Concert 2,477 official fixed. Indoor. | "Over 2,590" with pit/floor noted, not stored. |
| `newport-music-hall` | A24 | Concert 1,700 official. Indoor. | City-type answer's AXS 1,400 not used; the operator figure is the one stored. |
| `branch-rickey-arena` | A25 | Basketball 1,450 official. Indoor. Delaware. | |
| `midland-theatre-newark` | A26 | Concert 1,200 reported. Indoor. Newark. | OSM at 36 N Park Place, about 120 m from the research database point. Not the Kansas City Midland. |
| `ohio-state-ice-rink` | A27 | Hockey about 1,000 reported. Indoor. | On the pre-list line. Varies by event. |
| `osu-lacrosse-stadium` | A23 | Capacity unknown. Open. | Wanderlog 2,000 is the only figure, and the research says it is weak. Left unknown. |

## Left out

| Research item | Why it is not a venue row or a seeded event |
|---|---|
| GCCC Exhibit Halls A/B (A15) | Convention halls. Theater sets exist; they are not spectator rooms by default (Kylie, Oct 7). |
| Union Station Ballroom (A18) | Same. |
| Southern Theatre (A28) | 925–933, under the about-1,000 pre-list line. Hand log only, until Kylie says the band includes it. |
| OhioHealth Ice Haus | Practice rink. Research: not a seating configuration. |
| National Trail Raceway | Table B. No seating capacity. Historic "40,000+" is a weak hotel page. |
| Ohio Expo Center grounds, Sonic Temple grounds, Goodale Park, Genoa Park / riverfront, Coffman Park, Muirfield Village, Delaware County Fairgrounds, marathon course, WonderBus lawn | Open sites. Not rooms. |
| Table B events (fair, Sonic Temple, BOOM, Pride, Arnold, Dublin Irish Festival, Arts Festival, Little Brown Jug, Memorial, marathon, IndyCar weekend, LA28 dates, Stadium Series as its own event, WonderBus, Festival Latino, ComFest, Jazz & Rib, and the fairs not searched) | Not seeded. Multi-day totals must not be divided, and projections are not counts. LA28 match dates are not published. The Stadium Series game is already inside the Blue Jackets attendance file at Ohio Stadium. |
| Proposed OSU hockey arena | Not built. Design approval's April 2026 opening has passed. |
| Columbus Motor Speedway | Closed. Fortress Obetz is the site. |
| Columbus Destroyers | Defunct. |
| Columbus Eagles FC | Current status unverified in the research. No team record. |
| OSU women's hockey, volleyball, wrestling, gymnastics, soccer, track, baseball, lacrosse as team records | Rooms exist where the research named one. No schedule adapter was verified, so no team record was added. Ohio Wesleyan football and men's basketball do have records, with no feed, because those are the home programs of Selby and Branch Rickey. |
| Broad-team list in `overlap.ts` | Boston has a placeholder; Milwaukee, Philadelphia, and Tampa do not. No Columbus poll was in the research. Ohio State was not added as "everyone's team." |
| Monthly heat normals | The checklist's table is still empty for every city. Not filled from a one-city guess. |
| Playoff occupancy rows | Left out so `POSTSEASON_DRAWS` stays byte-identical to `main`. |

## Feeds and collected files (Oct 12, 2026)

Ids were checked against the live feed, not copied from memory.

| Source | What was wired | Result |
|---|---|---|
| MLB | Clippers team 445, Triple-A sport 11, venue 3970 Huntington Park | `columbus-clippers.json`: 296 games, all at Huntington Park |
| ESPN NHL | Blue Jackets 29 | `blue-jackets.json`: 183 games. 182 at Nationwide Arena, 1 at Ohio Stadium (Stadium Series) |
| ESPN MLS | Crew 183 | `columbus-crew.json`: 82 games, all at ScottsMiracle-Gro Field. ESPN already uses that name for earlier seasons |
| ESPN college football | Ohio State 194 | `osu-football.json`: 35 games. 33 at Ohio Stadium, 2 that ESPN marked home at AT&T Stadium (mapped to the existing Dallas venue) |
| ESPN men's basketball | Ohio State 194 | `osu-mbb.json`: 73 games. 70 at Value City Arena; 2 at State Farm Arena; 1 at Madison Square Garden |
| ESPN women's basketball | Ohio State 194 | `osu-wbb.json`: 68 games. 67 at Value City Arena; 1 at Prudential Center |
| ESPN men's college hockey | Ohio State 194, path `hockey/mens-college-hockey` | Schedules exist. Attendance field was empty. `osu-mhockey.json` has 0 games. No number was invented |
| No feed | Crew 2, Aviators, Fury, Ohio Wesleyan | Team records only. Pages say there is no schedule until a source is wired |
| Ticketmaster | No key in this environment | Archive saved MLB and ESPN only. Historic Crew Stadium is allowlisted for the sports sweep when a key exists. Mid-Ohio is not |

Expected draws, from those attendance files only, prepended: 89 draw rows, 2 season levels (Crew 2026, Ohio State football 2026), 67 opponent ratios. `POSTSEASON_DRAWS`: no Columbus rows. "All games" medians, before the building cap the app applies when it reads them: Blue Jackets 16,897 (119 games); Clippers 7,555 (219); Crew 20,618 (31, above 20,371 seats); Ohio State football 104,974 (17, above 102,780); men's basketball 10,623 (48); women's basketball 6,309 (30). Men's hockey produced no row.

Hard access (`node scripts/venue-access.mjs --metro=columbus`): 14 rooms at or above 5,000 measured. None meet the strained rule (relief at least 40 m and no more than 4 named streets within 250 m). The existing Ohio Stadium row was remeasured and the numbers did not change (relief 14 m, 3 streets); it now sits with the other Columbus rows. Other cities' measurements were kept.

Schedule archive `data/schedule-archive/columbus/2026-10-12.json`: 8 events, Oct 12–26 (Blue Jackets, Crew, Ohio State men's basketball). No Clippers games in the window. Results: Blue Jackets 3–2 vs Penguins on Oct 9 (17,057) and Ohio State 45–16 vs Maryland on Oct 10 (102,589). Both games were already in the attendance files, so the draw tables were not rebuilt. Weather: 15 Columbus day files and index rows inserted. No other metro's weather rows were rewritten.

## Checks (Oct 12, 2026)

- `npm run build` passed (typecheck and production build).
- `npm run city-build-check` passed, including Columbus (metro record, at least one venue, at least one home team).
- `node scripts/storage-check.mjs` passed.
- `package-lock.json` matches `main`. Node on this machine is 22, and the repo asks for 24; the engine warning did not stop the build.

## Judgment calls

- **Sprawl, not hub.** Follows the research recommendation. See the spill note above.
- **Estimated car shares were wired** for Ohio Stadium 0.72, Nationwide and ScottsMiracle-Gro Field 0.86, Historic Crew 0.93, and Schott, Huntington Park, and KEMBA outdoor 0.85. The checklist says to take the answer's figure. Philadelphia wired city-type estimates the same way. Tampa and Milwaukee left estimates off. Only 0.72 and 0.93 move the 0.85 fallback by more than a hundredth. None is measured.
- **Jesse Owens uses 10,000** when the listing is not track, because that is the official billed total with no setup. The 3,242 fixed-seat figure is stored beside it.
- **KEMBA outdoor is 5,200**, the official standing figure, so the room can feed friction. The rental "up to 5,000" would mute it.
- **Bare "KEMBA Live!" belongs to the outdoor room.** Indoor and outdoor share a point, so a name miss is not assigned by proximity.
- **Mid-Ohio is in the directory and off the sports sweep.**
- **Battelle Grand stores the 5,411 theater set** as the concert capacity. Other setups stay in the note.
- **Historic Crew stores 19,968.** 21,000 and 27,000 stay in the note.
- **Display name stays Columbus**, matching the stub. The research frame is the metro, not a "Columbus, Ohio" label.

## Open questions for Kylie's next review

1. Keep city type as sprawl, or record hub because of the Arena District, knowing the two do not change spill in the current formula?
2. Keep the estimated car shares, or drop them so every Columbus room uses the 0.85 fallback until a measured split exists? Ohio Stadium 0.72 and Historic Crew 0.93 are the ones that move the read.
3. Jesse Owens: is the room 10,000 (billed) or 3,242 fixed seats? Fixed seats alone would mute it.
4. KEMBA outdoor: keep 5,200 official standing, or treat 5,500 / "up to 5,000" as the figure that decides friction? Should indoor and outdoor stay separate rooms when Ticketmaster and AXS often use one venue name? What date did Express Live! become KEMBA Live!?
5. Bill Davis Stadium and the lacrosse stadium: leave capacity unknown until an OSU page is fetched, or is there an official figure to paste?
6. Southern Theatre at 925–933: include in the pre-list, or leave it hand-log only?
7. Mid-Ohio: keep it in the metro, off the sports sweep, or drop it from the directory?
8. Columbus Eagles FC: current, or leave the team out?
9. Battelle Grand: one 5,411 number, or must each event name its setup (4,368 / 6,864 / 7,588)?
10. Historic Crew: 19,968, 21,000, or 27,000, and which of those is seats rather than a festival floor?
11. Nationwide hockey 18,500 vs 18,144. Schott basketball 18,809 vs full bowl 20,000 vs architect 19,500 vs concert 21,000. Palace 2,695 vs 2,691. Newport 1,700 vs AXS 1,400. Mershon 2,477 vs "over 2,590." Ice rink about 1,000, varies. Crew 20,371 vs 20,139.
12. Ohio Stadium 2026 net capacity after the south end zone, and whether the roof notes marked unsourced (Ohio Stadium, Historic Crew, Huntington Park) should stay "open."
13. Display name "Columbus" vs "Columbus, Ohio," and whether zoom 11.2 is the right first view.
14. Downtown rooms (Ohio Theatre, Palace, Battelle Grand) fall inside about 2 km of Nationwide Arena, so the zone label can read Arena District. Newport can read Ohio State. Is that the label to keep?
15. Men's hockey attendance: ESPN returns schedules and an empty attendance field. Is there another public source, or leave the draw blank?
16. Add team records, still with no feed, for women's hockey, volleyball, soccer, baseball, lacrosse, and the other OSU programs that have rooms? Add Ohio State to the broad-team list without a poll?
17. Table B events to hand-list later, each with a sourced daily count: fair, Sonic Temple, BOOM, Pride, Arnold, Dublin Irish Festival, Memorial, marathon spectators, Little Brown Jug 2026 date, WonderBus, Festival Latino, ComFest, Jazz & Rib, high-school stadiums, Otterbein, Scioto Downs, Taft Coliseum, fairgrounds grandstands.
18. Ticketmaster room ids are unverified except the Ohio Stadium id already in the app.
19. Columbus has no playoff-pool rows, on purpose, so other cities' pool stayed unchanged.
20. A few games ESPN tagged as Ohio State or Blue Jackets home games are in other cities' buildings (AT&T Stadium, State Farm Arena, Madison Square Garden, Prudential Center). They stay on those venues.
21. Covelli Center about 3,700 is approximate, and the OSM way includes the Jennings Wrestling Facility.
22. Midland Theatre's OSM point is about 120 m from the research database point.
23. Proposed hockey arena, and Ohio Stadium seat rescaling through 2028, are not in the directory.
