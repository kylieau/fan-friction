# Kansas City implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources: `kansas-city-city-type-answer.md` and `kansas-city-venue-table-answer.md` (unchanged). Bi-state core (Jackson, Clay, Platte, Wyandotte, Johnson, plus Bonner Springs, Independence and North Kansas City). City type recorded as **`sprawl`**. No venue `carShare` overrides (Milwaukee K14 and Tampa pattern: the research figures are estimates, not a measured mode split). Lawrence and Columbia stay separate markets. **Not a Kylie city-build approval** the way Milwaukee was (K14).

Metro code `KC`. Display name `Kansas City`. Time zone `America/Chicago`. Map center `[-94.62, 39.08]`, zoom `9.4`, so downtown, the Truman Sports Complex and Village West share one frame.

## Active fixed rooms (23)

Coordinates are OpenStreetMap unless the note says the room point was not separated. No capacity was invented. A range with no single published figure stays unknown.

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `arrowhead-stadium` | Arrowhead Stadium | 76416 football | Official/reported, 76,416 since 2010. FIFA 2026 config 69,045 is in the note, not a second football row. Concert capacity unknown. GEHA name from 2021 (year-level) through Aug 5, 2026; "Kansas City Stadium" from June 16, 2026 through that drop. |
| `kauffman-stadium` | Kauffman Stadium | 37903 baseball | Official MLB.com. Conflicts with Wikipedia 38,053 for 2026. MLB venue id 7 verified Oct 12. |
| `kansas-speedway` | Kansas Speedway | 48000 racing, from 2019 | Reported grandstand seats. The 48,000–75,000 range includes infield and camping and was not stored. |
| `sporting-park` | Sporting Park | 18467 soccer, 25000 concert | Official design figure, plus reported concert configuration. MLS standing (~21,000) is in the note, not a second soccer row. Temporary name from February 2026 (month-level). Roof recorded `covered` because a canopy covers the stands. |
| `t-mobile-center` | T-Mobile Center | 19252 concert, 18972 basketball, 17544 hockey, 17297 football | Reported. The 18,500 engineer sheet is a round project figure, noted, not stored. Sprint Center until 2020 (year-level). Arena-football setup is not an NFL setup. |
| `azura-amphitheater` | Azura Amphitheater | 18000 concert | Official total, mostly lawn (~3,100 reserved, noted). Providence name from 2016 and Azura from 2021 are year-level, not a verified rename day. |
| `cpkc-stadium` | CPKC Stadium | 11500 soccer | Reported seated capacity. Expansion to 18,000 is financed and not built. Roof was not confirmed in the research; recorded `open` with a comment. |
| `municipal-auditorium-arena` | Municipal Auditorium Arena | 7316 | Official fixed seats. The 10,721 maximum (risers plus floor) is in the note only. |
| `kansas-city-music-hall` | Kansas City Music Hall | 2363 concert | Official. Same complex as the arena; it does not inherit the arena figure. Its own map point. |
| `starlight-theatre` | Starlight Theatre | 7739 concert | Official tech specs. Conflicts with 7,958 in secondary listings. |
| `starlight-cohen-stage` | Cohen Community Stage | 1200 concert | Reported approximate (~1,200), not on Starlight's tech page. Same campus point as the main theatre; OSM did not separate the interior stage. |
| `legends-field` | Legends Field | 6537 baseball | Reported fixed seats. Berm (7,500+) and the old soccer config (10,385) are in the note only. Display name is Legends Field; Field of Legends shares the 2021 year-level date. |
| `cable-dahmer-arena` | Cable Dahmer Arena | 5800 hockey | Reported. Concert and indoor-soccer configurations were not published. Independence Events Center is the earlier name; the 2011 date is approximate. |
| `hale-arena` | Hale Arena | 5000 | Reported show-arena seats, one source, exactly on the friction line. |
| `hy-vee-arena` | Hy-Vee Arena | 3500 basketball | Lower room after the floor split (5,000 upper / 3,500 lower). The upper bowl is in the note and is not the active figure, so the room stays muted. OSM point is 1800 Wyoming, next to the Genessee address in the research. |
| `midland-theatre` | Arvest Bank Theatre at The Midland | unknown | The official site publishes a live-show range, 1,300–3,000, not one figure. Capacity left blank. Rename date Sept 13, 2013. |
| `kauffman-center-muriel` | Muriel Kauffman Theatre | 1800 concert | Reported. Hall name only, so a center-wide listing is not dumped onto this room. Same building point as Helzberg. |
| `kauffman-center-helzberg` | Helzberg Hall | 1600 concert | Reported. Separate room from Muriel. |
| `uptown-theater-kc` | Uptown Theater | 2400 concert | Reported. The Encore Room is not this room. |
| `theatre-in-the-park` | Theatre in the Park | 3000 concert | Reported. Shawnee Mission Park. |
| `grinders-kc` | Grinders | 2500 concert | Reported outdoor stage. OSM resolved the restaurant, not a separate stage. |
| `the-truman` | The Truman | 1200 concert | Reported. Opened September 2017. |
| `folly-theater` | Folly Theater | 1006 concert | Reported after a renovation. Conflicts with 1,078 on another page of the same guide. Both spellings are searchable; the display name is Folly Theater. |

Shared approach names: Arrowhead and Kauffman are Truman Sports Complex. Sporting Park, Kansas Speedway and Legends Field are Village West. Hy-Vee and Hale are West Bottoms. Cable Dahmer is about 6.7 miles east of Arrowhead and is not in that zone. Azura is about 2.5 miles from the speedway and stays separate. Downtown rooms are not forced onto one label.

## Deferred / excluded (from research)

- **Future, not activated:** new Chiefs dome (A-P1, 2031), Crown Center Royals ballpark (A-P2, 2030 target), CPKC expansion to 18,000 (A-P3), American Royal show arenas at the new Kansas campus (A-P4), Olathe youth-hockey arena proposal (A-P5).
- **Separate markets:** Lawrence (Allen Fieldhouse, David Booth Kansas Memorial Stadium) and Columbia. A KU game played at Arrowhead or Sporting Park can still land on those Kansas City rooms.
- **Not a seated room:** KC Live! (standing plaza) and Bartle Hall. No multi-day festival total was turned into a capacity.
- **Open sites (Table B):** Fan Fest, NFL Draft grounds, parades, Renaissance Festival, Irish Fest, Boulevardia. Daily or peak concurrent figures were unknown or the published number was a multi-day total. Not hand-listed.
- **Voodoo Lounge** (Harrah's, reported 1,150) stays out. The map point that resolved was the casino, not the room. Same mis-assign risk as Milwaukee's Potawatomi.
- **No broad-team flag.** The research had no audience poll, so nothing was added to the overlap list.

## Teams and feeds (checked Oct 12, 2026)

| Team | League | Feed | Result |
|---|---|---|---|
| Chiefs | NFL | ESPN football/nfl id 12 | 46 home games saved (2022: 12, 2023–2025: 10, 2026: 4). 2025 home name "Arrowhead Stadium". |
| Royals | MLB | MLB team 118, venue 7 | 410 games (2022: 81, 2023: 82, 2024: 83, 2025: 82, 2026: 82). |
| Sporting KC | MLS | ESPN soccer/usa.1 id 186 | 80 games. 2025 home name "Children's Mercy Park"; 2026 "Sporting Park". One 2024 home date (Apr 13 vs Miami, 72,610) is at Arrowhead. |
| KC Current | NWSL | ESPN soccer/usa.nwsl id 20907 | 63 games. 2022–2023 at Sporting Park; 2024– at CPKC Stadium. |
| Monarchs | American Association | MLB team 1885, sport 23, venue forced to Legends Field | Id verified. Schedule returned 0 games for 2023–2026. Empty attendance file kept. |
| Sporting KC II | MLS Next Pro | none | ESPN `usa.2` returned 404. Team record only. |
| Mavericks | ECHL | none | HockeyTech does not cover the ECHL. Team record only. Cable Dahmer is on the Ticketmaster sports sweep. |
| Comets | MASL | none | Team record only. |
| Outlaws | PBR | none | Team record only. T-Mobile Center is on the Ticketmaster sports sweep. |

Ticketmaster sports sweep additions, with no venue ids verified this pass: `cable-dahmer-arena`, `kansas-speedway`, `t-mobile-center`, `municipal-auditorium-arena`, `legends-field`. Chiefs, Royals, Sporting and Current rooms stay off that sweep because a league feed owns their sports.

## Collected data

- **Attendance:** `data/attendance/kansas-city/` for the five teams above.
- **Expected draws:** appended only Kansas City rows to `expectedDrawIndex.ts`. 56 draw rows (Royals 30, Chiefs 11, Sporting KC 8, Current 7), 1 season level (Sporting KC 2026, 0.969 from 10 games), 56 opponent ratios, 11 playoff rows (Royals 3 bands at Kauffman; Sporting KC league-basis rows on both Sporting Park and Arrowhead, because that one home date was there). Other metros' stored rows stay byte-identical. No full re-calibrate, and no separate opponents file. Their stored league pools do not yet include Kansas City games.
- **Archive:** `data/schedule-archive/kansas-city/2026-10-12.json` — 4 events, Oct 12–26 (Sporting KC twice, Chiefs, Current). No Ticketmaster key in this environment, so concerts were not in the snapshot.
- **Results:** one final, Sporting KC vs Portland on Oct 10, 2026. No attendance figure on that row.
- **Weather:** city-point files under `data/weather/kansas-city/`. Index rows appended only.
- **Hard access:** `node scripts/venue-access.mjs --metro=kansas-city` measured the 12 rooms at 5,000 or above. None met the strained rule (relief at least 40 m and 4 or fewer named streets within 250 m). Hale's relief is 53 m with 6 streets. T-Mobile's relief is 47 m with 13 streets.

## Judgment calls

- **City type `sprawl`**, with the 0.85 fallback. Estimated shares were not wired: Arrowhead and Kauffman 0.95, T-Mobile 0.82, Sporting 0.96, Azura 0.97, CPKC 0.80, Speedway 0.97, Starlight 0.95, Cable Dahmer 0.97. The World Cup Arrowhead share (~0.80) and a Fan Festival streetcar share are one-offs, not defaults. The research's capacity-weighted figure is about 0.93, and it says 0.85 understates the outlying rooms.
- **Hy-Vee stays muted** on the 3,500 lower room. The sourced 5,000 upper bowl is not the active capacity.
- **Hale is stored at 5,000**, so it feeds friction, on one reported source.
- **Municipal uses 7,316** fixed seats, not the 10,721 maximum.
- **CPKC roof recorded open** because the venue table left it unconfirmed and the sources describe a soccer stadium.
- **Sporting Park roof recorded covered** because of the stand canopy. Covered rooms still take weather.
- **Conflicts kept, not averaged:** Kauffman 37,903 vs 38,053; Starlight 7,739 vs 7,958; Folly 1,006 vs 1,078.
- **Midland capacity is blank.** The official page gives a range (1,300–3,000), and storing the top of that range was a guess. It stays unknown until a single published figure exists.
- **Display name** is Kansas City, not a bi-state label.
- **No monthly heat baseline** was invented.

## Open questions

1. Kylie has not approved this city build the way she approved Milwaukee (K14).
2. Should the estimated car shares be wired, or does the 0.85 sprawl fallback stand?
3. Is CPKC's roof open, covered, or indoor? It is recorded open until a source says otherwise.
4. Should Hy-Vee's 5,000 upper bowl be the active capacity when a spectator event uses it? It is muted on 3,500 for now.
5. Hale is exactly 5,000 from one source, so it feeds friction. Leave it, or mute it until a second source confirms a crowd that large?
6. Municipal's 10,721 maximum is not used. Say if floor-seated events should take that figure.
7. Arrowhead has no concert capacity. FIFA's 69,045 is not the Chiefs football figure.
8. Sporting Park is a temporary name. Re-check when a naming partner is announced. The February 2026 date is the first of the month.
9. Several other rename dates are year-level (GEHA 2021, T-Mobile 2020, Azura 2016 and 2021, Legends / Field of Legends 2021, Hy-Vee 2017–2018, Cable Dahmer 2011).
10. The Monarchs feed returned no games. Sporting KC II, the Mavericks, the Comets and the Outlaws have team records and no schedule adapter.
11. No Ticketmaster venue ids were verified. The Oct 12 archive has league games only.
12. Table B open sites are not on the map. Voodoo Lounge is deferred until the room can be told apart from the casino.
13. Cohen's ~1,200 is approximate and shares Starlight's map point. The two Kauffman halls share one building point. Grinders is the restaurant point.
14. No broad-team overlap flag. No audience poll was in the research.
15. The label on the map is "Kansas City". Say if it should name both states.
