# Austin implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `austin-city-type-answer.md` and `austin-venue-table-answer.md` (Oct 11, 2026). Boundary used: the five-county Austin–Round Rock–San Marcos MSA (Travis, Williamson, Hays, Bastrop, Caldwell). Bastrop and Caldwell have no fixed rooms in the research. San Antonio, Killeen/Temple, College Station, and New Braunfels stay separate markets.

This is an implementation of the research answers. It is not a lock from Kylie. Milwaukee (K14) was the approved pattern for estimates: record the city type, do not wire estimated car shares.

## Rules applied

- Later locks win over older background in `AGENTS.md`. `MEMORY_HANDOFF.md` and `docs/product/product-decisions.md` were not edited.
- Anything can be logged by hand. About 1,000+ is pre-listed. Only 5,000+ feeds friction. The code uses `size >= 5000`, so Moody Amphitheater at exactly 5,000 feeds friction. Rooms under about 5,000 are on the map, muted, with no friction label (Kylie, Oct 9).
- Never invent a capacity or a crowd. A figure with no source stays unknown. Conflicts are kept, not averaged (Kylie, Oct 3, for small gaps; a conflict that changes the number is stored as the sourced figure that was chosen, with the other figure in the note).
- Convention halls and festival grounds are not venue rows (Kylie, Oct 7, Atlanta and New York checklist notes). That overrides the research suggestion to list Palmer Events Center.
- `carShare` is for a measured mode split. Every Austin car share in the city-type answer is an estimate. None is wired. Same pattern as the Milwaukee build and the Tampa build.
- Expected draws: Austin rows only were appended to `src/data/expectedDrawIndex.ts`. Other metros' rows stay byte-identical except the four closing braces that JSON requires to become commas. The index was not re-calibrated. No `expectedDrawIndexAustinOpponents.ts`.
- Ratings and hand scores were not a target. Attendance medians are evidence.
- No new paid service. No Ticketmaster Discovery ids were invented. The H-E-B page id in the research (`venue/475948`) is not a Discovery id.
- Venue ids are unique across the app. There was no Austin starter row in `metros.ts`; one metro record was added, code `ATX`, and `austin` was added to `COVERED_METRO_IDS`.
- `package-lock.json` was not changed. Private tester material was not added.
- Parallel city builds: no edits to `BACKLOG.md`, `overlap.ts`, or the handoff. `docs/reference/data-sources.md` has one clause pointing at the Austin venue answer, which the new-city checklist asks for.

## City type

Recorded as **`hub`** in `CITY_TYPE` (research §7.1, moderate-low confidence). `transit` is rejected by the research. `sprawl` is the strongest alternative. Hub and sprawl share today's 0.85 fallback and the same near spill (0.15), so the type does not change a score until a measured car share is wired.

Zone name **UT Campus** is set on DKR, Moody Center, and Mike A. Myers Stadium (research cluster 1, plus the venue table's note that Myers sits on the same campus). The existing 1.25-mile rule can still pull other rooms into that zone because the zone center stays on the first venue (DKR). House Park and Moody Amphitheater at Waterloo Park both sit inside that distance of DKR. That is the existing rule, not a hand override. See open questions.

## Active fixed rooms (22)

Coordinates are OpenStreetMap Nominatim points unless the note says the name search missed. Capacities are the research figures, not estimates.

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `dkr-texas-memorial-stadium` | DKR-Texas Memorial Stadium (long name kept) | 100119 football, from 2009 | Official Texas Athletics. 2006 temporary 85,123 and the 2021 enclosure (capacity unchanged) are notes. Record 105,215 is attendance, not capacity. |
| `ufcu-stadium` | Bobcat Stadium, then UFCU Stadium from 2024-05-21 | 28388 football | Official Texas State. South edge (San Marcos). Jim Wacker Field is a note, not a display name that would override UFCU. |
| `q2-stadium` | Q2 Stadium from 2021-01-25 | 20738 soccer | Reported (Wikipedia, stadiumdb). Official club page was not fetched. ~25,000 expansion unverified, not used. Pin is the OSM point for 10414 McKalla Place. A name search hit Austin, Tennessee. |
| `myers-stadium` | Mike A. Myers Stadium and Soccer Field | 20000 soccer and 20000 track | Official. Same listed size for both setups. |
| `moody-center` | Moody Center | 10763 basketball, 16223 concert | Reported (Wikipedia). Official ~10,000 (upper bowl closed) and 15,000+ concerts are notes, not stored as numbers. Do not use the concert figure for a UT game. |
| `germania-amphitheater` | Austin360 Amphitheater, then Germania Insurance Amphitheater from 2020-01-01 | 14000 concert | Official COTA (6,700 reserved plus lawn). Naming deal through 2026. Pin is the OSM sports centre for Circuit of The Americas; there is no amphitheater node. F1-weekend concerts are the same crowd as the race. |
| `dell-diamond` | Dell Diamond | 11631 baseball | Official MiLB, including the berm. Fixed seats 8,722 reported, not used as the cap. OSM pin is close to the published 30.5273, −97.6305. |
| `strahan-arena` | Strahan Coliseum, then Strahan Arena from 2018-10-06 | 10000 basketball | Reported. South edge. OSM pin is close to the published 29.88861, −97.93278. |
| `heb-center-cedar-park` | Cedar Park Center, then H-E-B Center at Cedar Park from 2016-04-22 | 6863 hockey, 7200 basketball, 8700 concert | Official press release. Current site lists hockey 6,800 and entertainment 2,500–8,000. Not averaged. |
| `luedecke-arena` | Luedecke Arena | 6400 rodeo, 8400 concert | Two reported figures, not averaged. Seated vs floor is unresolved. Mapping 6,400 to rodeo and 8,400 to concert is a judgment. Pin is the arena point, not the parent expo point. |
| `disch-falk-field` | Disch-Falk Field, then UFCU Disch-Falk Field from 2006-08-01 | 7211 baseball | Official. 7,373 (Wikipedia list) and 6,756 (2008 renovation report) noted, not used. |
| `house-park` | House Park | 6500 soccer | Reported, one Wikipedia list. Also an AISD stadium. Verify with AISD. |
| `moody-amphitheater` | Moody Amphitheater at Waterloo Park | 5000 concert | Official lawn. Exactly at the friction line, so it feeds friction. Pin is Waterloo Park; the amphitheater name was a Nominatim miss. |
| `gregory-gym` | Gregory Gymnasium | 4000 (no setup) | Official. Texas volleyball. Muted. |
| `bass-concert-hall` | Bass Concert Hall | 2900 concert | Reported (Wikipedia). Muted. |
| `moody-theater` | Moody Theater / ACL Live at the Moody Theater | 2750 concert | Reported. TV tapings cap at 800; that is a note, not a second setup. OSM pin is near the published 30.26528, −97.74694. Muted. |
| `long-center-dell-hall` | Long Center, Michael & Susan Dell Hall | 2442 concert | Official. Muted. |
| `stubbs-amphitheater` | Stubb's Waller Creek Amphitheater | 2200 concert | Reported standing (2008). ~2,500 third party not used. The indoor stage (~300) is a different room and is not listed. Muted. |
| `emos-austin` | Emo's | 2000 concert | Reported (KVUE). Ticketmaster blog 1,700 noted, not averaged. Muted. |
| `mccombs-field` | Red & Charline McCombs Field | 1250 (no setup) | Reported. Texas softball. Near the 1,000 line. Muted. |
| `bobcat-soccer-complex` | Bobcat Soccer Complex | 1000 soccer | Visit San Marcos. At the 1,000 line. South edge. Muted. |
| `bobcat-softball-stadium` | Bobcat Softball Stadium | 1000 (no setup) | Visit San Marcos. At the 1,000 line. South edge. Muted. |

No `carShare` on any Austin venue.

## Left out, and why

| Research item | What happened |
|---|---|
| Circuit of The Americas grounds | No official spectator capacity. A third-party ~120,000 was not used. Open site, not a venue row. F1, MotoGP, NASCAR, and WEC are not hand-listed: no sourced daily concurrent crowd. Weekend totals stay in the research. |
| Bold Stadium | ~5,000 from a Wikipedia list, status unclear, research says mute until confirmed. No geocode. Not activated. |
| Palmer Events Center | Research says list it and leave it out of friction unless an event publishes a crowd. Kylie, Oct 7: convention halls are not venue rows. The 5,172 figure is a third-party theatre setup for a flat floor. Left out. |
| Austin Convention Center | Closed April 2025. Reopens 2028 or 2029 (conflict kept in the research). Not activated. |
| Frank Erwin Center | Replaced by Moody Center. Not activated. |
| White Rocks Amphitheater, AEG River Park (~4,000, early 2027), Expo Center replacement, ATX Draft (IFL) | Proposals or future. Not activated. |
| Bobcat Ballpark (2,000), Bobcat Track (1,000), Parmer Field (1,100) | Sourced capacities, but Nominatim returned no building. Parmer Lane road hits were not used. Omitted rather than invent a pin. |
| Table B (ACL 75,000/day, SXSW, marathon, Rodeo Austin 505,000) | Not seeded. Umbrella totals double-count room events. F1 amphitheater concerts inside the race ticket are not a second crowd. |
| ISD stadiums | Research's largest gap. Not enumerated here. |
| San Antonio Spurs I-35 series at Moody | Team home stays San Antonio (existing visitor id `spurs`). Not an Austin team. Dates in the research: Oct 23, 2026; Feb 26 and Feb 28, 2027. |
| Estimated car shares (ACL 0.50, SXSW 0.45, DKR 0.70, Moody basketball 0.72, Q2 0.75, suburban 0.93–0.95) | Left in the research. E2 and E3 are marked too weak even there. No measured full mode split. |

## Teams and feeds

Checked against live feeds on Oct 12, 2026.

| Team | Feed | Result |
|---|---|---|
| Austin FC | ESPN soccer `usa.1` id 20906 | Home name "Q2 Stadium". 79 games in `data/attendance/austin/austin-fc.json`, all at `q2-stadium`. |
| Texas football | ESPN college football 251 | Home name "DKR-Texas Memorial Stadium". 34 games: 30 at DKR, plus AT&T Stadium (2), Mercedes-Benz Stadium (1), Cotton Bowl (1). Those last four are ESPN "home" rows at buildings that already exist in other metros. |
| Texas men's basketball | ESPN 251 | 73 games: 70 at Moody Center, 2 at Madison Square Garden, 1 at Barclays Center. |
| Texas women's basketball | ESPN 251 | 78 games: 74 at Moody Center, 3 at Dickies Arena, 1 at American Airlines Center. |
| Texas State football | ESPN 326 | Home name "UFCU Stadium". 29 games: 27 at UFCU, plus Gerald J. Ford Stadium and Amon G. Carter Stadium. |
| Texas State men's / women's basketball | ESPN 326 | 54 and 51 games, all at Strahan Arena. |
| Round Rock Express | MLB Stats API id 102, sport id 11 (Triple-A), venue 2528 | 375 games, all at Dell Diamond (2022–2026). |
| Texas Stars | HockeyTech AHL client, team 380 | Home name "H-E-B Center at Cedar Park". 126 games, all at that room (regular seasons plus Calder Cup games in the file). |
| Texas baseball | ESPN college baseball team 251 | HTTP 400. Not wired. Team record only. |
| Texas State baseball | ESPN | A "home" venue named Bulldog Park on the feed is in Indianapolis. Not mapped to Bobcat Ballpark. Team record not added (the room itself was omitted for lack of a pin). |
| No feed | team records only | Texas softball, soccer, volleyball; Austin FC II; Texas Volts (AUSL, Dell Diamond from 2026); Austin Spurs; LOVB Austin; Austin Gamblers; Austin Rise FC. Pages can say there is no schedule yet. |

Ticketmaster sports sweep allowlist (league-feed games at the same building and date still win): H-E-B Center, Luedecke Arena, House Park, Moody Center, Myers, Disch-Falk, Gregory Gym, McCombs Field, Bobcat Soccer Complex, Bobcat Softball Stadium. Stars hockey still comes from HockeyTech. Texas basketball still comes from ESPN. No Discovery venue ids were added.

Global name keys `bobcat stadium` and `moody center` point at the Austin rooms. Another team's feed that uses those exact names would land on these buildings.

Broad-team overlap (`overlap.ts`) is not set. There is no poll, and the 20% bar was not guessed.

## Collected attendance and expected draws

Files: `data/attendance/austin/` for the nine teams above.

`all`-day medians the calibrator produced for Austin (not a target, not tuned):

| Team | Venue | Median | Low–high | Games | Seasons |
|---|---|---|---|---|---|
| Austin FC | Q2 Stadium | 20738 | 20738–20738 | 23 | 2025–2026 |
| Round Rock Express | Dell Diamond | 4509 | 3439–6118 | 222 | 2024–2026 |
| Texas football | DKR | 102632 | 101992–102990 | 16 | 2023–2025 |
| Texas men's basketball | Moody Center | 10663 | 10525–11055 | 50 | 2024–2026 |
| Texas women's basketball | Moody Center | 8699 | 7103–10125 | 31 | 2025–2026 |
| Texas State football | UFCU Stadium | 20813 | 17292–25775 | 16 | 2023–2025 |
| Texas State men's basketball | Strahan Arena | 1428 | 1222–1808 | 39 | 2024–2026 |
| Texas State women's basketball | Strahan Arena | 769 | 674–1069 | 21 | 2025–2026 |
| Texas Stars | H-E-B Center | 6247 | 5645–6778 | 105 | 2023–2025 |

Spliced into `expectedDrawIndex.ts`: 115 expected-draw rows, 2 season levels (2026 Texas football 1.017 on 3 games; 2026 Texas State football 0.786 on 3 games), 54 opponent ratios, 4 postseason rows. The four postseason rows are the calibrator's league-basis fallback for Austin FC (same occupancy on every band, basis `league`), not a hand playoff history. Other metros' rows were not recalculated. Boston's separate opponent file was not folded in.

Neutral-site ESPN "home" games stay in the attendance files because the collector matched a known building name. They can create thin draw rows for those other-metro venue ids under metro `austin`.

## Hard access, weather, archive, results

Scoped to Austin. Shared index diffs are additions only.

- `node scripts/venue-access.mjs --metro=austin`: 13 rooms at 5,000 or above. None meet the hard-access rule (relief of at least 40 m and no more than 4 named streets within 250 m). Germania has one named street within 500 m and relief of 33 m, so it is close and still not flagged. Dell Diamond has one named street within 250 m and relief of 6 m.
- Weather: `data/weather/austin/` day files, and Austin rows appended to `weatherIndex.ts`.
- Archive: `data/schedule-archive/austin/2026-10-12.json`, 7 events from Oct 12 through Oct 26 (ESPN 5, HockeyTech 2, MLB 0 in the window). No Ticketmaster source: this environment has no key, so concerts are not in the snapshot. The nightly catalog was not published (`gh workflow run` is a shared job and was left alone).
- Results: `data/results/austin/2026-10-10.json`, one final (Austin FC at Q2). No attendance number was added by hand.

## Map frame

Display name **Austin** (not the MSA name). Code **ATX** (not the airport code AUS). Time zone `America/Chicago`. Center `[-97.74, 30.35]`, zoom `9.6`, so one frame holds downtown, the UT campus, Q2, Round Rock, and Cedar Park. San Marcos and COTA sit off the first view. Not checked on a phone.

## Open questions for the next review form

Do not treat any of these as decided.

1. Hub vs sprawl. Research recommends hub at moderate-low confidence. Scores do not change today.
2. Whether any estimated car share should be wired, and which rows (the research flags E2 and E3 as too weak).
3. Display name Austin vs Austin–Round Rock–San Marcos. Code ATX vs AUS.
4. Luedecke: is 6,400 the rodeo setup and 8,400 the concert setup, or the reverse?
5. Moody Center: use reported 10,763 / 16,223, or the official "about 10,000" and "15,000+"?
6. Q2 official capacity page was never fetched.
7. House Park 6,500 is Wikipedia-only. AISD has not confirmed it. The 1.25-mile rule may also place it in the UT Campus zone.
8. Dell Diamond: 11,631 including the berm, or 8,722 fixed seats, for any per-seat math?
9. H-E-B Center: press-release 6,863 / 7,200 / 8,700, or the current site's 6,800 and 2,500–8,000?
10. Emo's: 2,000 or 1,700?
11. Germania's pin is the COTA complex, not a separate amphitheater node. Naming deal ends after 2026 (re-check Jan 2027).
12. Moody Amphitheater's pin is Waterloo Park. Q2's pin is the street address.
13. COTA grounds are not a room, and race weekends are not hand-listed.
14. Bold Stadium is deferred.
15. Palmer Events Center was excluded as a convention hall. The research suggested listing it.
16. ISD stadiums were not enumerated.
17. Bobcat Ballpark, Bobcat Track, and Parmer Field were omitted because there is no OSM point.
18. No schedule feed yet for the Volts, Austin Spurs, LOVB Austin, Gamblers, Rise, Austin FC II, or Texas volleyball, soccer, softball, and baseball. College baseball was not wired.
19. Ticketmaster Discovery ids are unverified.
20. Broad-team overlap is unset (Longhorns? Austin FC?).
21. ACL, SXSW, the marathon, and Rodeo Austin umbrella totals are not seeded.
22. Spurs I-35 dates are San Antonio home games played at Moody Center.
23. Convention center is closed. AEG River Park and White Rocks are future.
24. San Marcos is included as a south edge. Killeen, College Station, San Antonio, and New Braunfels are excluded. The research did not fetch the current OMB bulletin.
25. Neutral-site "home" games are stored at other metros' venues (Cotton Bowl, AT&T Stadium, Mercedes-Benz Stadium, MSG, Barclays, Dickies Arena, American Airlines Center, SMU, TCU).
26. Disch-Falk: 7,211 vs 7,373 vs 6,756.
27. ACL Live: 2,750 concerts vs 800 tapings.
28. Stubb's: 2,200 vs about 2,500. Indoor stage is not a room.
29. The UT zone may absorb House Park, Waterloo, and other rooms within 1.25 miles of DKR.
30. Map center and zoom were not checked on a phone.
31. City-type answer says UFCU Stadium is 28,388 "after 2025 expansion." The venue table lists 28,388 as the official current figure without a separate pre-expansion number. 28,388 is what was stored.
