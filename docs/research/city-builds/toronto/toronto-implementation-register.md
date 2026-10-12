# Toronto implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `toronto-city-type-answer.md` and `toronto-venue-table-answer.md`. Boundary used: City of Toronto plus Peel, York, Halton, and Durham through Oshawa. Hamilton stays a separate city. Display name is **Toronto** (code `TOR`), time zone `America/Toronto` (the same zone string Montreal uses). City type recorded as **`transit`**.

This follows the Milwaukee implementation pattern (and the merged Boston, Philadelphia, and Tampa builds). It is **not a new product lock**. The handoff’s next-city list treated these metros as research candidates; this build is the explicit request to cover Toronto the same way.

## Rules that governed the build

- Anything can be logged by hand. About 1,000+ is pre-listed. Only 5,000+ affects friction. Rooms under about 5,000 are on the map, muted, with no friction label (Kylie, Oct 6 and Oct 9).
- Never invent, infer, or estimate a venue capacity. A 2011 plan figure and a “raised by nearly 5,000” comparison were not turned into seat counts.
- No measured person-level car share exists for any Toronto room (city-type answer, Oct 12). Estimated shares stay in the research. No venue `carShare` was set. See the conflict note below.
- Expected draws were produced by the existing calibrator, then **only Toronto rows** were inserted into `expectedDrawIndex.ts`. Every other metro’s lines stay as they were on `main`. The index was not re-calibrated as a whole, and no `expectedDrawIndexTorontoOpponents.ts` file was added.
- Ratings were not a target. Nothing was tuned to close a gap against a hand rating.
- No new paid source. No Ticketmaster venue ids were verified, so none were stored. The archive run had no Ticketmaster key.
- `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, and `package-lock.json` were not changed.
- Broad teams were not added. The overlap rule needs a poll (about 20% of residents). The research does not have one. Leafs, Jays, and Raptors are an open question, not a guess.
- `MONTHLY_NORMAL_F` was left empty, as it is for every covered city. The checklist says that field needs a source that works for every city. No Toronto-only heat baseline was invented.

### Where a checklist line and this build differ

The new-city checklist says to give each venue its `carShare` from the city-type answer. That answer’s own headline is that **no venue has a measured person-level split**. The recommended figures (0.35 downtown, 0.45 at Rogers Stadium, 0.15 for the completed World Cup window, 0.40 at BMO Field) are estimates, projections, or models. The capacity-weighted result for the large rooms is about 0.40, which is already the `transit` fallback. Milwaukee’s approved build, and the Tampa build, left unmeasured estimates unwired. This build does the same. Suburban arenas are called out in the research as likely higher than 0.40; they still use the fallback because there is no sourced split to store.

The checklist also says to trigger the nightly archive workflow after pushing. That was not run from this branch. The workflow on `main` does not contain this city yet, and this session does not start GitHub workflows.

## Active fixed rooms (38)

Coordinates are OpenStreetMap Nominatim hits unless the note says otherwise. No research coordinate was invented. Capacities are the figure stored; conflicts stay in the note on the room.

| App ID | Room | What was stored | Source row | Left out of the number |
|---|---|---|---|---|
| `rogers-stadium` | Rogers Stadium | 50,000 concert, from 2025, open | A1, official | Not seated. Floor 18,000 + bleachers 32,000 noted. Temporary lease. |
| `rogers-centre` | Rogers Centre | Baseball 49,282, then 39,150 from 2024; concert 50,000; retractable stored as covered | A2 | MLB “over 41,000” not stored as a count. Concert range 40,000–50,000 stored at the high end, not averaged. SkyDome kept as a searchable name. |
| `bmo-field` | BMO Field | 28,180 soccer and football, open | A3 | Wikipedia 28,351 and ~30,000 with standing not added. World Cup 45,736 (12 Jun–2 Jul 2026) not stored: `fromYear` cannot express a mid-year window, and the stands are already down. “Toronto Stadium” is a dated alias, not a second venue. Partial canopy still stored as open. |
| `scotiabank-arena` | Scotiabank Arena | Hockey 18,800; basketball 19,800; concert 19,800; indoor | A4, official | Wikipedia standing figures and the 5,200 theatre setup noted, not stored as the concert figure. French alias “Aréna Scotiabank” searchable; English is the display name. |
| `rbc-amphitheatre` | RBC Amphitheatre | 16,000 concert, covered pavilion + lawn | A5 | Not 16,000 seats (7,000 is lawn). “Now-15,000” and “18,000-ish” kept as conflict. Post-2029 18,000 vs ~20,000 not stored. Budweiser Stage start day in 2017 was not dated; stored as 2017-01-01. |
| `sobeys-stadium` | Sobeys Stadium | 12,500 tennis, open | A6 | Concert conflict 11,000–14,000 vs 9,100 not stored. Aviva (2015) and Sobeys (2022) rename days were years only, stored as Jan 1. |
| `cne-bandshell` | CNE Bandshell | 10,000 concert, open | A7 | Mostly standing. **Approximate pin**: research grounds point 43.635074, −79.412363 (±500 m). OSM had no bandshell. Bell SOUNDSTAGE is the CNE-season alias; the map shows CNE Bandshell. |
| `coca-cola-coliseum` | Coca-Cola Coliseum | Hockey 8,140; basketball 8,500; concert 9,250 centre-stage | A8 | 8,100 / 8,700 / 8,857 / 7,779, end-stage 4,100, boxing 7,600 noted, not stored. Ricoh rename date unknown, so both names have no start date and Coca-Cola displays. |
| `tribute-communities-centre` | Tribute Communities Centre | Hockey 6,152 official; concert 7,600 official maximum | A9 | 5,180 seated noted. 7,600 is the published top of a 1,000–7,600 range, not a typical show. Oshawa edge. |
| `mississauga-sports-centre` | Mississauga Sports and Entertainment Centre | Basketball 5,133 official; hockey 5,420 reported | A10 | City “5,100-seat” and +400 floor not added. No concert figure stored (city 3,000–6,000 vs Wikipedia 7,000). Name from 2026-06-01 is temporary. |
| `great-canadian-theatre-toronto` | The Theatre at Great Canadian Casino Resort Toronto | 5,000 concert (GA) | A11 | Seated 4,061 and fight nights 3,637 or 3,982 noted. The app cannot tell layouts apart. Parent casino pin. |
| `caa-centre-brampton` | CAA Centre | Hockey and basketball 5,000 official; concert 3,800 reported | A12 | Arena guide 4,774 seated noted. Can change the friction class. Powerade rename day in 2018 stored as Jan 1. |
| `uoft-varsity-stadium` | Varsity Stadium | 5,000 football, reported | A13 | Exactly at the friction line. No standing figure. |
| `uoft-varsity-arena` | Varsity Arena | 4,116 hockey | A14 | Muted. |
| `york-lions-stadium` | York Lions Stadium | 4,000 soccer and football | A15 | Figure is from the Inter Toronto FC page, not a university sheet. Muted. |
| `meridian-hall` | Meridian Hall | 3,191 concert | A17 | Muted. |
| `massey-hall` | Massey Hall | 2,534 concert, standing 2,800 | A18 | ~2,550 seated noted. TD Music Hall (500) excluded. |
| `roy-thomson-hall` | Roy Thomson Hall | 2,600 concert | A19 | The source says ~2,600, approximate, not a counted inventory. |
| `history-toronto` | History | 2,500 concert | A20 | 2,600 on a venue list noted. |
| `rebel-toronto` | Rebel | 2,500 concert | A21 | |
| `caa-ed-mirvish-theatre` | CAA Ed Mirvish Theatre | 2,300 concert, official | A22 | Tourism page 2,200 noted. |
| `elgin-theatre-toronto` | Elgin Theatre | 2,100 concert | A23 | Shares an OSM building point with the Winter Garden. |
| `princess-of-wales-theatre` | Princess of Wales Theatre | 2,000 concert, official | A24 | |
| `four-seasons-centre` | Four Seasons Centre | 2,000 concert | A25 | Longer formal name kept as a searchable alias. |
| `harbourfront-concert-stage` | Harbourfront Centre Concert Stage | 2,000 concert, open | A26 | Parent-building pin. |
| `kimel-field-house` | Kimel Family Field House | **Capacity unknown** | A27 | 2011 plan of 2,000 was not used. Parent Goldring Centre pin. On the map with no size. |
| `meridian-arts-centre` | Meridian Arts Centre | 1,727 concert | A28 | September 2019 rename day stored as Sep 1. Shares a point with George Weston Recital Hall. |
| `uoft-convocation-hall` | Convocation Hall | 1,700 concert | A29 | |
| `winter-garden-theatre` | Winter Garden Theatre | 1,410 concert | A30 | Same building point as the Elgin. |
| `danforth-music-hall` | Danforth Music Hall | 1,400 concert | A31 | Billboard “about 1,500” noted. |
| `phoenix-concert-theatre` | Phoenix Concert Theatre | 1,350 concert | A32 | |
| `queen-elizabeth-theatre-toronto` | Queen Elizabeth Theatre | 1,250 concert | A33 | Parent Queen Elizabeth Building pin. Exhibition Place overlap. |
| `royal-alexandra-theatre` | Royal Alexandra Theatre | 1,244 concert | A34 | |
| `concert-hall-888-yonge` | The Concert Hall | 1,200 concert | A35 | Mapped to the Masonic Temple building at 888 Yonge. |
| `koerner-hall` | Koerner Hall | 1,100 concert | A36 | Parent TELUS Centre pin. |
| `george-weston-recital-hall` | George Weston Recital Hall | 1,036 concert | A37 | Same building as Meridian Arts Centre. |
| `pickering-casino-theatre` | Pickering Casino Resort theatre | 2,500 concert | A38 | GTA edge. Exact current name not verified. Parent-resort pin. |
| `mattamy-athletic-centre` | Mattamy Athletic Centre | **Capacity unknown** | A39 | “Raised by nearly 5,000” is not a count. Maple Leaf Gardens kept as a searchable name. |

## Left out on purpose

| Item | Why |
|---|---|
| Echo Beach (A16), 4,000 reported | No OSM hit and the research published no coordinate. A pin was not invented. |
| Markham Pan Am Centre (A40) | Capacity unknown, and it is unknown whether any 1,000+ spectator setup exists. |
| TD Coliseum, Hamilton Stadium, Toronto Rock | Hamilton is a separate city in both answers. The Rock’s 2026 average (6,923 over 9 home games) is not a Toronto figure. |
| Canadian Tire Motorsport Park | Destination edge. Spectator capacity unknown. NASCAR and IMSA dates are not venue rows. |
| Kingswood Music Theatre | Closed 2019. |
| Woodbine racetrack grandstand and Woodbine Mohawk Park | Grandstand capacity unknown. Open or manual records, not rooms. King’s Plate is not hand-listed (no crowd figure). |
| Lamport Stadium | Proposal only for Inter Toronto after 2026. |
| TD Music Hall | 500, under 1,000. |
| Table B open sites | CNE, Caribbean Carnival parade, Pride parade, Indy at Markham, VELD, Fan Expo, AutoShow, Waterfront Marathon, FIFA Fan Festival, Air Show, Maple Leaf Square. Not venue rows. Multi-day totals were not divided into a daily crowd. No single-day concurrent count was published for the ones that would need a hand-listed point. |
| FIFA World Cup matches | Completed. They are BMO Field events under the temporary name, not a second venue. The 45,736 temporary capacity is not the current bowl. |
| BMO rooftop patio, 1,000-person | Scheduled, opening date unknown. Not added. |
| Tribute expansion to ~7,000 | Proposal only. |

## Zones

Gridlock zone names, for rooms that sit in one cluster (about 2 km):

- **Exhibition Place:** BMO Field, Coca-Cola Coliseum, CNE Bandshell, Queen Elizabeth Theatre, RBC Amphitheatre (Ontario Place shares the Lake Shore / Exhibition approach; included here).
- **Union Station:** Rogers Centre and Scotiabank Arena.
- **York University:** Sobeys Stadium and York Lions Stadium.
- **University of Toronto:** Varsity Stadium, Varsity Arena, Kimel Family Field House, Convocation Hall.

Rogers Stadium (Downsview) was not given the York University name. It shares Line 1 and some parking with that campus in the research, and it is farther than the usual cluster. That is a judgment, listed below.

## Teams and feeds (checked Oct 12, 2026)

Home records: Blue Jays (the old visitor id `blue-jays`, now metro Toronto, badge `JAY` so it does not collide with the Leafs’ `TOR`), Maple Leafs, Raptors, Toronto FC, Argonauts, Marlies, Sceptres, Tempo, Raptors 905, AFC Toronto, Inter Toronto FC (alias York United FC), Brampton Steelheads (alias Mississauga Steelheads), Brampton Honey Badgers, Oshawa Generals, Oshawa FireWolves, Varsity Blues football / hockey / men’s basketball, York Lions football, TMU Bold.

| Feed | What was wired | What came back |
|---|---|---|
| MLB Stats API | Blue Jays team 141, Rogers Centre venue 14 | Attendance file: 417 games with an announced figure, 2022–2026, including 2025 postseason. |
| ESPN | Leafs nhl/21, Raptors nba/28, Tempo wnba/131935, Raptors 905 nba-development/17, Toronto FC usa.1/7318, Argonauts cfl/85. Blue Jays ESPN id 14 is recorded only so results can match; schedules come from MLB. | Attendance files: Leafs 196, Raptors 175, Tempo 21 (2026 only), Raptors 905 50, Toronto FC 78. Argonauts file has 0 games. The CFL schedule returned no events, the same way the Alouettes row behaved on Oct 8. The row stays wired. |
| HockeyTech | Marlies ahl 335, Sceptres pwhl 6, usual building Coca-Cola Coliseum | Marlies 127, Sceptres 33. 2025–26 Marlies homes: Coliseum 33, Scotiabank Arena 3. Sceptres homes include the Coliseum and Scotiabank Arena. One “Scotiabank Centre” and one TD Coliseum were **not** mapped, so a Halifax or Hamilton building is not placed in Toronto. “Scotiabank Centre” is not Scotiabank Arena. |
| Ticketmaster | No venue ids verified | Sports sweep allowlist, for a later nightly run that has the secret: BMO Field, CAA Centre, Tribute Communities Centre, Varsity Stadium, Varsity Arena, York Lions Stadium, Mattamy Athletic Centre, Kimel Family Field House. Scotiabank Arena, Rogers Centre, and Coca-Cola Coliseum are not on that sweep; their primary tenants already have a feed, and a feed game at the same building and date wins. |
| No feed | AFC Toronto, Inter Toronto, OHL, NLL, CEBL, U Sports, National Bank Open, Woodbine racing | Team or program records only, except the rooms above that can later be swept. Honey Badgers 2026 status was not verified in the research. |

Away and neutral “home” games are dropped when the building name is not in the Toronto map: Tempo games in Montreal and Vancouver, Sceptres takeovers, Argonauts games in Hamilton, Regina, and Winnipeg.

Venue names mapped for ESPN and HockeyTech include Scotiabank Arena, Aréna Scotiabank, Coca-Cola Coliseum, Ricoh Coliseum, BMO Field, Toronto Stadium, Paramount Fine Foods Centre, Mississauga Sports and Entertainment Centre, Hershey Centre, and Rogers Centre.

## Collected data

- **Expected draws** inserted for Toronto only: 141 regular rows, 1 season level (Toronto FC 2026), 131 opponent ratios, 12 postseason rows. “All days” medians from announced attendance: Blue Jays at Rogers Centre 38,900 (31,665–41,690) over 240 games, 2024–2026; Maple Leafs 18,737 over 120; Raptors 19,182 over 120; Marlies at the Coliseum 5,347 over 95 and at Scotiabank Arena 11,381 over 10; Raptors 905 at Mississauga 2,471 over 46; Sceptres at the Coliseum 8,335 over 24; Tempo at the Coliseum 8,210 over 14 and at Scotiabank Arena 18,145 over 3; Toronto FC at BMO Field 23,407 over 32 (2024–2025). Postseason rows are the calibrator’s output, including league-pool bands. They were not edited by hand. Toronto FC’s four postseason bands are the same league “any round” figure repeated, which is how that script fills a round it cannot split.
- **Archive:** `data/schedule-archive/toronto/2026-10-12.json`, 11 events, 2026-10-12 through 2026-10-26 (MLB 0, ESPN 7, HockeyTech 4, seed 0). No Ticketmaster key on this machine, so concerts are absent until a nightly run has the secret.
- **Results:** one final on 2026-10-10, Toronto FC at BMO Field, announced attendance 21,572.
- **Weather:** `data/weather/toronto/` for 2026-10-12 through 2026-10-26. Index rows appended. Other metros’ weather lines were checked and still match `main`.
- **Hard access** (`node scripts/venue-access.mjs --metro=toronto`): 13 rooms at 5,000 or more. None meet the locked rule (relief of at least 40 m and no more than 4 named public streets within 250 m). Rogers Stadium measured 0 named streets within 250 m and 4 m of relief, so the rule does not flag it. Kimel and Mattamy were skipped because they have no capacity figure. Other cities’ access rows were kept.

## Map frame

Center about [−79.40, 43.64], zoom 10.6, so downtown, Union Station, and Exhibition Place fit one phone view. North York, Mississauga, Brampton, and Oshawa sit off that first view and are still in the metro. This is the same kind of frame every covered city has. It is not a change to the Map’s look.

## Judgment calls (not locks)

- City type `transit`, with no per-venue car share, as above.
- Display name **Toronto**, not “Greater Toronto” or “GTA”.
- BMO Field roof stored as open despite a partial canopy, because weather still applies.
- Rogers Centre roof stored as covered, the same way other retractable roofs are stored.
- Rogers Centre concerts stored at the top of the published 40,000–50,000 range.
- Tribute concerts stored at the official 7,600 maximum, not an average of 1,000–7,600.
- Great Canadian theatre stored at the 5,000 general-admission figure so a GA show is not hidden under 5,000. Seated shows at that room are under 5,000 and the app cannot see the layout.
- CAA Centre sports stored at the city’s 5,000, with the 4,774 seated conflict in the note. Concerts stored at 3,800 so they do not inherit the bowl.
- Roy Thomson Hall stored as 2,600 even though the source says “about 2,600”.
- Rename days that the research gave only as a year or a month were set to the 1st: Budweiser Stage 2017-01-01, Aviva 2015-01-01, Sobeys 2022-01-01, CAA Centre 2018-01-01, Meridian Arts Centre 2019-09-01.
- CNE Bandshell uses the research grounds coordinate, marked approximate.
- Parent-building pins: Harbourfront stage, Koerner Hall, Queen Elizabeth Theatre, Great Canadian theatre, Pickering theatre, Kimel / Goldring. Elgin and Winter Garden share one point. Meridian Arts Centre and George Weston Recital Hall share one point.
- RBC Amphitheatre is in the Exhibition Place zone name because the approaches are shared, even though the building is Ontario Place.
- Rogers Stadium is not in the York University zone.
- French feed names are searchable; the English current name is what the screen shows.
- The Blue Jays visitor record was promoted in place (same id), as the Braves and Giants were.

## Open questions for the next review

These are not decided here.

1. Should the metro’s on-screen name stay Toronto, or say Greater Toronto / GTA?
2. Should any estimated car share be wired anyway (0.35 downtown, 0.45 Rogers Stadium, 0.40 BMO, 0.15 for the finished World Cup window only)? Suburban rooms (Mississauga, Tribute, CAA Centre, Sobeys, and the Indy / Wonderland / Woodbine notes in the city-type answer) are called likely too high for a 0.40 fallback, and there is still no public split.
3. Are the Maple Leafs, Blue Jays, or Raptors a “broad” team? The research has no residency poll.
4. Rogers Centre baseball: keep 39,150 seats, or also carry MLB’s “over 41,000”? The 2026 announced average was 41,220, above 39,150. Postseason occupancy from the calibrator can sit above 1.0 against the stored seat count for that reason.
5. BMO Field: keep 28,180, or also carry 28,351 or ~30,000 with standing? Should the past World Cup capacity 45,736 be dated somehow the year model cannot express today? The ticketed 1,000-person rooftop patio has no opening date.
6. Scotiabank Arena: official 18,800 / 19,800, or Wikipedia’s standing totals? Should the 5,200 theatre setup be its own configuration?
7. RBC Amphitheatre: 16,000 vs 15,000 vs ~18,000. It is scheduled to close in fall 2027. Post-2029 plans say 18,000 or about 20,000. Neither future figure is stored.
8. Sobeys Stadium concerts conflict (9,100 vs 11,000–14,000). Nothing was stored for concerts. Which tennis tour is in Toronto alternates; 2026 was the WTA event per an LTA preview.
9. Coca-Cola Coliseum has several published sizes. Centre-stage 9,250 is what concerts use. The Ricoh rename date is unknown.
10. Tribute Communities Centre: official 6,152 vs 5,180 seated. The naming term may lapse around November 2026. A ~7,000 expansion is unconfirmed.
11. Mississauga arena: the current name is temporary while the city looks for a sponsor. ESPN may still say Paramount Fine Foods Centre (both names are mapped). Concert capacity was not stored.
12. CAA Centre: 5,000 official vs 4,774 seated. That choice changes whether hockey and basketball count toward friction.
13. Varsity Stadium is exactly 5,000.
14. Great Canadian theatre is 5,000 only for general admission.
15. Danforth 1,400 vs 1,500; History 2,500 vs 2,600; CAA Ed Mirvish 2,300 vs 2,200; Massey Hall 2,534 vs about 2,550.
16. Kimel Family Field House and Mattamy Athletic Centre have no sourced as-built capacity. Both are on the map with no size.
17. Echo Beach is a real 4,000-capacity summer room with no coordinate in the research and no OSM hit. It is omitted until a pin exists.
18. Markham Pan Am Centre: unknown whether any 1,000+ spectator setup exists.
19. CNE Bandshell coordinate is a grounds point, about ±500 m, and a bandshell concert can also be inside the CNE gate. Do not add the two together.
20. Pickering Casino Resort theatre: 2,500 reported, exact current name not verified.
21. AFC Toronto’s 2026 BMO home count conflicts (7 vs 6 of 13). No feed. Homes are split between York Lions Stadium and BMO Field.
22. Inter Toronto is at York Lions Stadium for 2026 and is exploring other venues after 2026. Lamport is a proposal, not a room.
23. Brampton Honey Badgers: 2026 status was not verified.
24. Argonauts: one 2026 BMO crowd of 18,842 is in the research and not in a feed file. ESPN’s CFL schedule was empty. “Home” games in Hamilton, Regina, and Winnipeg are away.
25. No Ticketmaster venue ids were verified. A Rogers Centre Ticketmaster blog still shows a stale 49,286.
26. No attendance files for the Argonauts (feed empty), AFC Toronto, Inter Toronto, OHL, NLL, CEBL, U Sports, the National Bank Open, or Woodbine racing.
27. Open-site crowds (CNE, Carnival, Indy, marathon, Fan Expo, AutoShow, VELD, Pride, Fan Festival) were not hand-listed. Several totals are multi-day, projected, or from a non-organizer page.
28. Should Rogers Stadium share a zone label with the York University rooms, given shared transit, even though the sites are outside the usual 2 km cluster?
