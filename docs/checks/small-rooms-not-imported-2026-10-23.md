# Small rooms not imported, Oct 23, 2026

From the small-rooms installments 3–7 (`docs/research/city-builds/small-rooms-big-cities-answer-3.md` to `-7.md`). The import pass needed a map point for each room; these had none the research gave and none OpenStreetMap returned that we could trust (within 90 km of the city, matching the right place). Add one by hand with its point, or ask the research for coordinates.

**Updated Oct 23, 2026:** the map-point research (`docs/research/city-builds/small-rooms-points-answer.md`) placed 120 of the 137; 119 are in `src/data/venues.ts` (the William J. Nicks Building was already on file). Ten rooms the first pass had wrongly taken for a room already on file were added too (below).

## Still no point (17)

The map-point research found no point it could stand behind for these; it gave no town, campus or whole-property substitute.

| City | Room | Area | Capacity (research) | Why no point |
|---|---|---|---|---|
| chicago | East End Plaza at Navy Pier | Streeterville, Chicago; east end of Navy Pier. | **Official: 6,500 standing**, promoter concert configuration. Navy Pier. No seated-concert | Precise plaza point not found. |
| chicago | H.D. Kesling Gymnasium | Westville, LaPorte County, Indiana; Purdue University Northw | **Official: just over 1,500 bleacher seats**, facility page. Do not turn that wording into | Building identity established, coordinate not found. |
| dallas-fort-worth | Backyard Amphitheater at Longhorn Ballroom | The Cedars / Corinth Street, Dallas, Dallas County; 216 Cori | **Reported: 6,500**, outdoor concert maximum, in the April 3, 2026 Pollstar opening report | Outdoor amphitheater point not found. |
| dallas-fort-worth | Burg Center — main gymnasium | University Hill, Dallas, Dallas County; Dallas Baptist Unive | **Official: 1,600 seats** for athletics; **official: 2,400** in auditorium mode for assemb | Burg building point not found. |
| dallas-fort-worth | Naomi Bruton Main Stage / Bruton Theatre, The Black Academy of Arts an | Downtown Dallas, Dallas County; TBAAL at the convention-cent | **Reported: 1,750 seated**, room-specific venue listing. This is a reported room count; a | No point: original convention-center theater is under renovation during TBAAL temporary relocation to The Women’s Museum, 3800 Parry Ave (fall 2025–spring 2029), per the city project FAQ. |
| washington-dc | Plaza Stage at Nationals Park | Navy Yard / Capitol Riverfront, Washington, DC; Nationals Pa | **Official: 4,000, mostly standing**, current operator portfolio. This separate plaza conc | Plaza footprint/stage point not found. |
| washington-dc | Dominion Raceway — oval-track grandstand | Thornburg / Woodford postal area, Spotsylvania County, VA; 6 | **Reported, 2016: 2,300 grandstand seats**, BMW club’s contemporaneous facility visit. Cur | Grandstand point not found. |
| philadelphia | Campus Center Gymnasium — Holy Family University | Torresdale / Northeast Philadelphia, Philadelphia County, PA | **Official: 1,000 seats**, university athletics facility description. Basketball / volleyb | Campus Center building point not confidently resolved against the school’s illustrated map; campus-wide pin excluded. |
| atlanta | L.S. Epps Gymnasium — Clark Atlanta University | Atlanta University Center, Atlanta, Fulton County, GA. | **Reported: 1,800**, basketball, NCAA Division II arena inventory. Current university-cert | Building point not resolved; campus/office pin excluded. |
| miami | The Pavilion — Seminole Casino Coconut Creek | Coconut Creek, Broward County, FL; casino property. | **Reported: 1,160 all-seated / 2,000 standing / 1,490 hybrid / 400 dining**, venue-booking | No point: current operator describes Sound Bar in the Smoke-Free Pavilion (June 2026), rather than establishing the earlier standalone concert-room identity. |
| miami | Stage 305 — Magic City Casino | Miami / Flagami area, Miami-Dade County, FL; Magic City Casi | **Reported: 1,100 seated / 1,100 reception**, BizBash venue inventory. A reception headcou | Stage 305 room/building point not found; casino property location alone does not establish which structure contains the room. |
| phoenix | Indoor Arena — Arizona Athletic Grounds | Mesa, Maricopa County, AZ; Arizona Athletic Grounds campus. | **Official: 2,500 seats**, operator facility inventory. Main indoor arena, not the sum of | Indoor arena building not uniquely identified among the fieldhouses; AAG campus pin excluded. |
| phoenix | Outdoor Stadium — Arizona Athletic Grounds | Mesa, Maricopa County, AZ; AAG campus. | **Official: 2,200 seats**, operator. Field-sport stadium; standing / concert and temporary | Outdoor stadium not conclusively matched to a particular mapped championship field; AAG campus pin excluded. |
| phoenix | Championship Pickleball Court — Arizona Athletic Grounds | Mesa, Maricopa County, AZ; AAG campus. | **Official: 1,800-seat championship court**, operator. Main spectator court, not all pickl | Championship court not distinguished from the many mapped pickleball courts; pickleball-campus or AAG centroid excluded. |
| boston | MacDonald Gymnasium — Endicott College | Beverly, Essex County, MA. | **Official: 1,200 capacity**. Basketball / volleyball; standing and concert layouts unconf | Post Center/MacDonald building point not resolved. |
| bay-area | Reed L. Buffington Visual and Performing Arts Center — main auditorium | Hayward, Alameda County, CA. | **Official: 1,432 seats**, orchestra / balcony. Smaller Stage One / other campus rooms are | Building 1300 identified by school, but its building coordinate was not resolved; Chabot campus pin and nearby outdoor auditorium were excluded. |
| bay-area | Stanford Softball Stadium; predecessor label: Boyd & Jill Smith Family | Stanford, Santa Clara County, CA. | **Official, 2026: approximately 1,300 fixed seats, increased from 829 fixed seats**. Two p | OSM still labels predecessor Boyd & Jill Smith Family Stadium; no point assigned from that stale footprint without confirming the rebuilt facility. |

## Already on file (14, corrected Oct 23)

The first pass matched these by a neighbour within 350 m or by a shared name. Four were right; ten were not and are now added as their own rooms (points from OpenStreetMap by name, approximate).

- Right, not added: Gentile Arena, McGrath-Phillips Arena (chicago); Carl Lewis International Complex (houston); DC Armory (washington-dc).
- Wrong, now added: East Texas A&M's Memorial Stadium in Commerce (had matched Tarleton's `memorial-stadium` in Stephenville; Further out, 75 min); Cowtown Coliseum (had matched `billy-bobs-texas`); Miller Theater (`academy-of-music`); Brooklyn Bowl Philadelphia (`fillmore-philadelphia`); FIU Soccer Stadium (`fiu-baseball-stadium`); Lawrence's and Quincy's Veterans Memorial Stadiums (both had matched New Britain's by name); the Boch Center Shubert Theatre and the Cutler Majestic Theatre (`wang-theatre`); Stanford Memorial Auditorium (`frost-amphitheater`).
