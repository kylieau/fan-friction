# Cincinnati — Venue, Team and Crowd-Event Research Answer

**As of:** Tuesday, October 13, 2026
**Scope of work:** public web sources only, read Oct 13, 2026. Every number below links to the page it came from. Where no acceptable source was found, the cell says **gap** and the gaps section says what was searched.
**Label key:** *official* = venue/team/league/university/organizer/government page; *reported* = news outlet or encyclopedic secondary source; *third-party* = aggregator, resale or fan site (never used alone to set a threshold); **gap** = not established.

---

## 1. Recommended boundary

### 1.1 Recommendation

Use the **Cincinnati, OH–KY–IN MSA core counties** as the build boundary: Hamilton, Butler, Warren, Clermont (OH); Boone, Kenton, Campbell (KY); Dearborn (IN). All eight starting leads are in the Census MSA ([Wikipedia: Cincinnati metropolitan area](https://en.wikipedia.org/wiki/Cincinnati_metropolitan_area); [Wikipedia: Kentucky MSA table](https://en.wikipedia.org/wiki/List_of_metropolitan_areas_of_Kentucky)). The full MSA also includes Brown, Clinton, Bracken, Gallatin, Grant, Pendleton, Franklin (IN) and Ohio (IN) counties ([Wikipedia](https://en.wikipedia.org/wiki/Cincinnati_metropolitan_area)); none of those surfaced an active 1,000+ room in this pass, so they add search cost without adding venues. Treat them as "edge, add by hand."

Reasoning: the region's economic-development agency profiles the same county set and describes Boone, Kenton and Campbell as immediately south of downtown, with CVG airport in Boone ([REDI Cincinnati county profiles](https://redicincinnati.com/data-resources/county-profiles/)). Butler County describes itself as sitting between the Cincinnati and Dayton markets ([Butler County overview PDF](https://www.bcohio.gov/Document_Center/Development/Economic%20Development/ButlerCountyOverview.pdf)), so it is a boundary county, but its southern half (West Chester, Fairfield) is clearly Cincinnati catchment.

### 1.2 Separate markets (exclude)

| Market | Why separate | Matching risk |
|---|---|---|
| Dayton | Own MSA (Dayton-Kettering-Beavercreek; Montgomery/Greene/Miami counties) per a federal CRA filing ([First Financial CRA assessment areas PDF](https://www.bankatfirst.com/content/dam/bankatfirst/legal/cra-public-file/2023/cra-bank-assessment-areas.pdf)) | **High.** A resale site lists University of Dayton Arena, Nutter Center and Fraze Pavilion under "Other Popular Venues in Cincinnati" ([ticketsales.com](https://www.ticketsales.com/heritage-bank-center-tickets/venue)). MEMI also runs Rose Music Center in Huber Heights alongside its Cincinnati rooms ([iHeart/MEMI 2019 release](https://700wlw.iheart.com/content/2019-12-11-the-andrew-j-brady-icon-music-center-to-open-next-year-at-the-banks)). Do not let operator or aggregator grouping pull these into CIN. |
| Lexington | Own MSA ([Wikipedia KY MSA table](https://en.wikipedia.org/wiki/List_of_metropolitan_areas_of_Kentucky)) | Low |
| Louisville | Own MSA ([same](https://en.wikipedia.org/wiki/List_of_metropolitan_areas_of_Kentucky)) | Low |

### 1.3 Edge cases (uncertain, decide by hand)

| Site | County | Status | Recommendation |
|---|---|---|---|
| Miami University, Oxford (Yager Stadium, Millett Hall) | Butler (in MSA) | Active; Miami's football home is Yager Stadium ([Miami University news](https://miamioh.edu/news/2026/09/home-opener-tql-stadium-ahead-for-redhawk-football.html)). Capacities **gap** (not verified this pass). | Edge. Separate college-town catchment; add only if the user logs there. |
| Kentucky Speedway, Sparta | Gallatin (in MSA) | Inactive for major racing: left off the 2021 NASCAR schedule ([Local 12](https://local12.com/topic/QUAKER%20STATE)); 2026 coverage describes it as unused four-plus years after its last NASCAR event ([Speedway Digest](https://speedwaydigest.com/?p=273753)). Historic grandstand 66,089 ([WBTV, 2008 sale release](https://www.wbtv.com/story/8367152/speedway-motorsports-agrees-to-purchase-kentucky-speedway/)). | Exclude from active list; re-check annually. |
| Lindner Family Tennis Center, Mason | Warren | Active, 5,000+ courts | **Include** (in core). |
| Hollywood Casino Lawrenceburg event space | Dearborn | Not verified | Lead only — **gap**. |

---

## 2. Gap item 1 — Name and code

| Field | Answer | Source |
|---|---|---|
| Display name | **Cincinnati** | Every major team uses the city name: Cincinnati Reds, Cincinnati Bengals, FC Cincinnati, Cincinnati Cyclones ([Arena Digest](https://arenadigest.com/2019/11/04/new-for-2019-heritage-bank-center/); [TQL Stadium](https://tqlstadium.com/about)). Unlike Tampa Bay, no regional team name replaces the city name. |
| Short form | **Cincy** | Used by the tourism bureau ([Visit Cincy](https://www.visitcincy.com/events/uniquely-cincinnati-events/flying-pig-marathon-weekend/)) and the city parks department ("Cincy Parks", [city site](https://www.cincinnati-oh.gov/cincyparks/visit-a-park/parks-events-calendar/flying-pig-marathon-weekend/)). |
| Three-letter code | **CIN** (confirmed) | Box scores use CIN for the Bengals ([Pro Football Archives](https://www.profootballarchives.com/nflboxscores2/2021nfl321.html)); stats sites key the Reds as t-CIN ([StatsCrew](https://www.statscrew.com/baseball/stats/t-CIN/y-2026)). |
| Code not to use | CVG | That is the airport, located in Boone County KY ([REDI](https://redicincinnati.com/data-resources/county-profiles/)). |
| Covers | City of Cincinnati and Hamilton County suburbs; Northern Kentucky (Covington, Newport, Highland Heights, Florence); Butler/Warren suburbs (West Chester, Mason); Clermont; Dearborn IN. | §1.1 |
| Dayton | **Out** | §1.2 |
| Naming note | NKY teams brand themselves "Kentucky" or by suburb (Kentucky Barrels, Florence Y'alls) ([Fox19](https://www.fox19.com/2025/08/18/new-professional-sports-team-debut-tri-state-beginning-2026); [Frontier League](https://www.frontierleague.com/florence-y-alls)). The regional labels are "Greater Cincinnati" / "Tri-State" ([Wikipedia](https://en.wikipedia.org/wiki/Cincinnati_metropolitan_area)). Proposal only: an optional subtitle "Cincinnati / Northern Kentucky"; keep code CIN. |

---

## 3. Table A — Fixed venues and rooms (largest setup first)

Parent/child notation: `▸` marks a room inside a parent grounds. Count events at the **room**, never at the parent.

### 3.1 Core identity, capacity and status

| # | Room (official name) | Parent | Aliases since 2016 (date) | Municipality / scope | Capacity by setup (label, source) | Roof | Status through 2028 | As of |
|---|---|---|---|---|---|---|---|---|
| A1 | **Paycor Stadium** | — | Paul Brown Stadium → Paycor Stadium; naming deal dated Aug 9, 2022 ([Wikipedia](https://en.wikipedia.org/wiki/Paycor_Stadium)). Conflict: same page's infobox lists the old name as 2000–2021. | Cincinnati (Hamilton) — core | Football **65,515** (reported: [Stadium Business](https://www.thestadiumbusiness.com/?p=85675); [Wikipedia](https://en.wikipedia.org/wiki/Paycor_Stadium)); "66,000-seat" rounding ([NFP](https://www.nationalfootballpost.com/new-deal-keeps-bengals-at-paycor-stadium-through-2036)). Concert setup: **gap**. | Open-air ([Wikipedia](https://en.wikipedia.org/wiki/Paycor_Stadium)) | **Confirmed:** lease signed Aug 1, 2025 through June 2036 ([Fox19](https://www.fox19.com/2025/08/27/first-look-bengals-redesign-club-spaces-suites/)); $470M renovation, county $350M / team $120M ([NFP](https://www.nationalfootballpost.com/new-deal-keeps-bengals-at-paycor-stadium-through-2036)); team-funded club work in 2026 adds 2,000+ club seats ([Fox19](https://www.fox19.com/2025/08/27/first-look-bengals-redesign-club-spaces-suites/)). Capacity expected to stay around 65,000 ([StadiumDB](https://stadiumdb.com/designs/usa/paycor_stadium)) — re-check after 2026 and 2027 offseasons. | 2026-10-13 |
| A2 | **Great American Ball Park** | — | none | Cincinnati (Hamilton) — core | Baseball **45,814** (official, [Reds facts page](https://www.mlb.com/reds/ballpark/information/facts)); originally 42,271 (same page). Conflict: **42,319** used in 2021 capacity-limit coverage ([WCPO](https://www.wcpo.com/sports/baseball/reds/reds-boost-gabp-capacity-from-30-to-40-starting-april-30)). Both far above 5,000; does not change classification. | Open-air, natural grass ([Reds](https://www.mlb.com/reds/ballpark/information/facts)) | Active. Opened Mar 31, 2003 ([Reds](https://www.mlb.com/reds/ballpark/information/facts)). | 2026-10-13 |
| A3 | **Nippert Stadium** (James Gamble Nippert Memorial Stadium) | UC campus | none | Cincinnati/Clifton (Hamilton) — core | Football **38,088** (2024–present, reported: [Wikipedia](https://en.wikipedia.org/wiki/Nippert_Stadium); [Enquirer via AOL](https://www.aol.com/season-long-celebration-100th-anniversary-015723657.html)); dated change from 40,124 (2015–2023) ([Wikipedia](https://en.wikipedia.org/wiki/Nippert_Stadium)). | Open-air | Active. | 2026-10-13 |
| A4 | **TQL Stadium** | — | West End Stadium (construction name) ([StadiumDB](https://stadiumdb.com/stadiums/usa/west_end_stadium)) | Cincinnati/West End (Hamilton) — core; 1501 Central Pkwy ([StadiumGuide](https://stadiumguide.com/?p=23724)) | Soccer **26,000** (official, [TQL Stadium](https://tqlstadium.com/about)); includes The Bailey supporters' section **3,170** (official, same) — standing-style section, do not treat as extra seats. Premium 4,500 (official, same). Conflict: one Wikipedia revision shows 25,513 ([Wikipedia](https://Www.Wikipedia.org/wiki/TQL_Stadium)). Football setup: first used Sept 19, 2026 ([UC Athletics](https://gobearcats.com/news/2026/06/16/tql-stadium-to-host-cincinnati-vs-miami-football-game-on-sept-19)); football capacity **gap** (one outlet repeats 26,000 "in its current configuration" — [FBSchedules](https://fbschedules.com/2026-cincinnati-miami-ohio-football-game-moved-to-tql-stadium/)). | 360° canopy over all seats, open field (official, [TQL](https://tqlstadium.com/about)) | Active. Opened May 16, 2021 ([StadiumDB](https://stadiumdb.com/stadiums/usa/west_end_stadium)). | 2026-10-13 |
| A5 | **Riverbend Music Center** (main amphitheater) | Riverbend campus | none | Cincinnati/Kellogg Ave (Hamilton) — core; 6295 Kellogg Ave ([Wikipedia](https://en.wikipedia.org/wiki/Riverbend_Music_Center)) | Concert **20,500** = 6,000 reserved pavilion seats + 14,500 GA lawn (reported, [Wikipedia](https://en.wikipedia.org/wiki/Riverbend_Music_Center)). Seated-only count is 6,000; the lawn is standing/GA. Official MEMI figure: **gap**. | Covered pavilion + open lawn | Active (2026 season held). | 2026-10-13 |
| A6 | **Heritage Bank Center** | — | U.S. Bank Arena (2002–2019) → Heritage Bank Center, announced Nov 4, 2019 ([Arena Digest](https://arenadigest.com/2019/11/04/new-for-2019-heritage-bank-center/); [Wikipedia](https://en.wikipedia.org/wiki/Heritage_Bank_Center)) | Cincinnati/The Banks (Hamilton) — core | Concert **17,556**; basketball **17,000**; hockey **14,453** (reported, [Wikipedia](https://en.wikipedia.org/wiki/Heritage_Bank_Center)). 17,556 also in 2024 public-radio coverage ([WVXU](https://www.wvxu.org/local-news/2024-11-18/chamber-report-cincinnati-new-arena)). Conflicts: 17,090 ([CityBeat 2019](https://www.citybeat.com/?p=209829)); "seats 17,500 for hockey" ([SportsTravel](https://www.sportstravelmagazine.com/cincinnati-arena-gets-new-naming-rights-sponsor)); ECHL listing of 6,955 = lower bowl only (third-party note, [EliteProspects](https://www.eliteprospects.com/arena/734/heritage-bank-center)). All setups ≥5,000. | Enclosed | Active. **Proposal, not scheduled:** Chamber-led study (Nov 2024) recommends a new ~18,000-seat arena at up to $800M at one of two West End/convention-center sites ([WCPO](https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/study-cincinnati-should-build-new-arena-in-one-of-these-three-locations); [Fox19](https://www.fox19.com/2025/03/13/opportunity-cincinnati-is-missing-new-group-launches-push-downtown-arena/)); mayor said no site decided ([WCPO](https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/cincinnati-leaders-discuss-proposed-new-arena-fc-cincinnatis-jeff-berding-says-the-banks-is-disappointment)); operator Nederlander prefers rebuilding in place, priced at $605M ([Fox19](https://www.fox19.com/2025/01/08/business-owners-advocate-rebuild-heritage-bank-center-over-new-arena)). 2023–2025 lower-bowl seat replacement ([Wikipedia](https://en.wikipedia.org/wiki/Heritage_Bank_Center)). Naming deal is 10 years from 2019 ([Arena Digest](https://arenadigest.com/2019/11/04/new-for-2019-heritage-bank-center/)) — re-check name by late 2029. | 2026-10-13 |
| A7 | **Fifth Third Arena** | UC campus | Ticketing alias "Fifth Third Arena at Shoemaker Center" ([ticketsales.com](https://www.ticketsales.com/heritage-bank-center-tickets/venue)); Shoemaker Center name dropped 2005 (pre-2016, [Wikipedia](https://en.wikipedia.org/wiki/Fifth_Third_Arena)) | Cincinnati/Clifton (Hamilton) — core | Basketball **12,012** since 2018 renovation (reported, [Fox19](https://www.fox19.com/2018/11/07/bearcats-unveil-newly-renovated-arena/)); dated change from 13,176 ([Wikipedia](https://en.wikipedia.org/wiki/Fifth_Third_Arena)). UC's own volleyball page still shows 13,176 (stale, [gobearcats](https://gobearcats.com/fifth-third-arena-volleyball)). | Enclosed | Active. Closed 2017–18 for renovation; UC men's basketball used BB&T (now Truist) Arena that season ([Wikipedia](https://en.wikipedia.org/wiki/Truist_Arena)). | 2026-10-13 |
| A8 | **Lindner Family Tennis Center** (grounds) | — | none | Mason (Warren) — core | Grounds, not a room. 2025 rebuild added 19,900 fixed + 5,685 temporary seats across the site ([WTA](https://www.wtatennis.com/news/4323955/wta-cincinnati-open-renovation)). | Open-air | Active; $260M rebuild completed for 2025 ([Fox19](https://www.fox19.com/2025/08/04/cincinnati-opens-sees-260m-campus-transformation-126th-year/)). | 2026-10-13 |
| A8a | ▸ **P&G Center Court** | A8 | none | Mason | Tennis **11,614** (infobox) / **11,600** (table) (reported, [Wikipedia](https://en.wikipedia.org/wiki/Lindner_Family_Tennis_Center)); 11,435 (third-party, [Tennis Tours FAQ](https://tennistours.com/cincinnati-open/faq)); official 2024 text says "nearly 12,000 seats" were replaced ([Cincinnati Open](https://cincinnatiopen.com/news/2024-venue-upgrades-revealed/)). Official exact figure: **gap**. | Open-air | Active | 2026-10-13 |
| A9 | **Cintas Center** | Xavier campus | none | Cincinnati/Evanston (Hamilton) — core; 1624 Musketeer Dr ([Wikipedia](https://en.wikipedia.org/wiki/Cintas_Center)) | Basketball **10,250**; concert configurations from 2,000 to 10,000 (reported, [Wikipedia](https://en.wikipedia.org/wiki/Cintas_Center)). | Enclosed | Active | 2026-10-13 |
| A10 | **Truist Arena** | NKU campus | Bank of Kentucky Center (2008–2015) → BB&T Arena (2015–Apr 5, 2022) → Truist Arena (official, [NKU](https://nku.edu/news/2022/april/TruistArena.html)) | Highland Heights KY (Campbell) — core; 500 Nunn Dr ([Wikipedia](https://en.wikipedia.org/wiki/Truist_Arena)) | Concert **9,400**; basketball **8,427** (reported, [Wikipedia](https://en.wikipedia.org/wiki/Truist_Arena)); "up to 10,000" (reported, [WCPO](https://www.wcpo.com/sports/nku-announcing-professional-sports-tenant-for-truist-arena)). Arena football setup: **gap**. | Enclosed | Active; new pro tenant 2026 (§5). Managed by ASM Global ([AF1](https://www.theaf1.com/news/arena-football-returns-to-greater-cincy-with-kentu)). | 2026-10-13 |
| A11 | **Andrew J Brady Music Center — outdoor stage** (listed by resellers as "ICON Festival Stage") | Brady complex / Smale Park | Andrew J Brady ICON Music Center → "ICON" removed Dec 2021 ([Wikipedia](https://en.wikipedia.org/wiki/Andrew_J._Brady_Music_Center)) | Cincinnati/The Banks (Hamilton) — core | Outdoor concert **8,000** (official MEMI release, [iHeart](https://700wlw.iheart.com/content/2019-12-11-the-andrew-j-brady-icon-music-center-to-open-next-year-at-the-banks)). Conflict: Smale Park event lawn **8,500** ([Fox19](https://www.fox19.com/2019/12/11/name-new-music-venue-banks-be-announced-wednesday)) — measures the park lawn, not the stage setup. Standing/lawn. | Open-air | Active; outdoor stage debuted 2021 ([Wikipedia](https://en.wikipedia.org/wiki/Andrew_J._Brady_Music_Center)). | 2026-10-13 |
| A12 | **MegaCorp Pavilion — outdoor** | MegaCorp Pavilion | "PromoWest Pavilion at OVATION" (pre-naming description, quoted on [Bandsintown](https://www.bandsintown.com/v/10213288)) | Newport KY (Campbell) — core; 101 W 4th St ([AEG](https://aegsev.com/megacorp-pavilion)) | Outdoor concert **7,000** (official, [PromoWest](https://promowestlive.com/our-venues)). Conflict: **6,000** (official AEG partnerships page, [AEG GP](https://aeggp.com/venues/megacorp-pavilion)). Both ≥5,000. | Open-air lawn/plaza | Active. Opening date: **gap**. | 2026-10-13 |
| A8b | ▸ **Grandstand Court** | A8 | none | Mason | Tennis **5,000** (reported, [Wikipedia](https://en.wikipedia.org/wiki/Lindner_Family_Tennis_Center); third-party [Tennis Tours](https://tennistours.com/cincinnati-open/faq)). **Threshold case** — see §4. | Open-air | Active | 2026-10-13 |
| A11b | **Andrew J Brady Music Center — indoor** | Brady complex | as A11 | Cincinnati/The Banks | Indoor GA + two balconies, **4,500** (official MEMI release, [iHeart](https://700wlw.iheart.com/content/2019-12-11-the-andrew-j-brady-icon-music-center-to-open-next-year-at-the-banks); [CityBeat](https://www.citybeat.com/music/take-a-sneak-peek-inside-cincinnatis-new-andrew-j-brady-icon-music-center-12233829)). Mostly standing floor. | Enclosed | Active | 2026-10-13 |
| A13 | **Thomas More Stadium** | — | UC Health Stadium (in use 2016–2017 per [WCPO](https://www.wcpo.com/news/insider/it-might-not-be-mlb-but-frontier-leagues-yall-star-game-a-big-deal-for-florence-freedom)) → Thomas More Stadium (rename date **gap**; [Wikipedia](https://en.wikipedia.org/wiki/Florence_Y%27alls)) | Florence KY (Boone) — core; 7950 Freedom Way ([Frontier League](https://www.frontierleague.com/florence-y-alls)) | Baseball **4,200** seats vs **4,500** (both on [Stadium Journey](https://www.stadiumjourney.com/stadiums/thomas-more-stadium-florence-yalls)); 4,200 ([StatsCrew](https://statscrew.com/venues/v-880)). | Open-air | Active | 2026-10-13 |
| A5b | ▸ **PNC Pavilion** | Riverbend campus | Opened as National City Pavilion (2008, pre-2016) ([UrbanOhio/Business Courier excerpt](https://urbanohio.com/topic/4113-cincinnati-riverbend-music-center/)) | Cincinnati | **4,100** seats (reported, [Wikipedia](https://en.wikipedia.org/wiki/Riverbend_Music_Center); [Business Courier excerpt](https://urbanohio.com/topic/4113-cincinnati-riverbend-music-center/)) | Covered pavilion | Active | 2026-10-13 |
| A8c | ▸ Tony Trabert Stadium 3 | A8 | none | Mason | **4,000** (reported, [Wikipedia](https://en.wikipedia.org/wiki/Lindner_Family_Tennis_Center)) | Open-air | Active | 2026-10-13 |
| A12b | **MegaCorp Pavilion — indoor** | MegaCorp Pavilion | as A12 | Newport KY | **2,700** (official, [PromoWest](https://promowestlive.com/our-venues); [AEG GP](https://aeggp.com/venues/megacorp-pavilion)) | Enclosed | Active | 2026-10-13 |
| A14 | **Cincinnati Music Hall — Springer Auditorium** | Music Hall | none | Cincinnati/Over-the-Rhine (Hamilton) | **2,500** (official, [Cincinnati Arts](https://www.cincinnatiarts.org/rentals/music-hall-plan-your-event)) | Enclosed | Active | 2026-10-13 |
| A15 | **Taft Theatre** | — | none | Cincinnati downtown | **gap** — only a resale site gives 2,500 ([SeatPick](https://seatpick.com/pt/taft-theatre-bilhetes)); not acceptable per rules. | Enclosed | Active (MEMI venue, [iHeart](https://700wlw.iheart.com/content/2019-12-11-the-andrew-j-brady-icon-music-center-to-open-next-year-at-the-banks)) | 2026-10-13 |
| A8d | ▸ Champions Court | A8 | new 2025 | Mason | **2,300** (reported, [Wikipedia](https://en.wikipedia.org/wiki/Lindner_Family_Tennis_Center)) | Open-air | Opened 2025 | 2026-10-13 |
| A8e | ▸ Court 10 | A8 | none | Mason | **2,000** (reported, [Wikipedia](https://en.wikipedia.org/wiki/Lindner_Family_Tennis_Center)) | Open-air | Active | 2026-10-13 |
| A16 | **NKU Soccer Stadium** | NKU campus | none | Highland Heights KY | **1,000** (reported, [Wikipedia FC Cincinnati 2](https://en.wikipedia.org/wiki/FC_Cincinnati_2)) | Open-air | Active | 2026-10-13 |

**Unverified leads (not added to the table; capacity gap):** Aronoff Center (Procter & Gamble Hall), Bogart's, Hard Rock Casino Cincinnati event space, Hollywood Casino Lawrenceburg, First Financial Center (the renovated convention center, formerly Duke Energy Convention Center, reopened Jan 7, 2026 — [Wikipedia](https://en.wikipedia.org/wiki/First_Financial_Center); exhibition-hall layouts are not fixed rooms), county fairgrounds (Hamilton, Butler, Warren, Clermont, Boone, Kenton), UC and Xavier baseball/soccer venues, Miami University venues (§1.3).

### 3.2 Location, tenants, schedules, ticketing and attendance

| # | Coordinates (precision) | Tenants by date | Official schedule link | Ticketing / feed coverage | Observed attendance (not capacity) | Access & parking facts |
|---|---|---|---|---|---|---|
| A1 Paycor | **gap** (geocode from official address; not done) | Bengals 2000– ([Wikipedia](https://en.wikipedia.org/wiki/Paycor_Stadium)); UC–Miami Victory Bell hosted 2018, 2022 ([Wikipedia](<https://en.wikipedia.org/wiki/Victory_Bell_(Cincinnati%E2%80%93Miami)>)) | [bengals.com](https://www.bengals.com/news/bengals-falcons-week-9-spain-press-release) | Bengals tickets route to Ticketmaster ([WCPO](https://wcpo.com/money/consumer/dont-waste-your-money/bengals-vs-raiders-tickets-heres-what-it-will-cost-you)); TM venue ID **gap** | Paid 66,277 (Jan 15, 2022 playoff, [NFL game summary PDF](https://static.www.nfl.com/image/upload/v1677629322/gamecenter/487cf9a5-71b0-11ec-9fcd-de7ed4db3526.pdf)); 65,962 (2024 vs Raiders, third-party [Covers](https://www.covers.com/sport/football/nfl/matchup/305017)); record 67,260 ([Wikipedia](https://en.wikipedia.org/wiki/Paycor_Stadium)) | Bengals took the Hilltop property for parking/tailgating in the Brady deal ([Fox19](https://www.fox19.com/2019/12/11/name-new-music-venue-banks-be-announced-wednesday)) |
| A2 GABP | **gap** | Reds 2003– ([Reds](https://www.mlb.com/reds/ballpark/information/facts)) | [Reds schedule](https://www.mlb.com/reds/schedule/) | MLB Stats API team id 113 (page metadata on [Reds facts](https://www.mlb.com/reds/ballpark/information/facts)); ESPN game pages carry attendance (verified on [Speedway Classic page](https://africa.espn.com/mlb/video/_/gameId/401696561)); resale via SeatGeek link on Reds site | 2021 COVID caps only ([WCPO](https://www.wcpo.com/sports/baseball/reds/reds-boost-gabp-capacity-from-30-to-40-starting-april-30)); full-season logs not pulled — **gap** | Metro fare-free on Opening Day; streetcar resumes after parade ([WVXU](https://www.wvxu.org/local-news/2026-03-25/cincinnati-reds-opening-day-2026); [City](https://www.cincinnati-oh.gov/cityofcincinnati/traffic-alerts/cincinnati-reds-opening-day-street-closures1/)) |
| A3 Nippert | **gap** | UC football; FC Cincinnati 2016–2020 ([Enquirer via AOL](https://www.aol.com/season-long-celebration-100th-anniversary-015723657.html)) | [gobearcats](https://gobearcats.com/news/2026/06/16/tql-stadium-to-host-cincinnati-vs-miami-football-game-on-sept-19) | ESPN expected; not verified this pass | Record 40,124 (Oct 24, 2015) per [Wikipedia](https://en.wikipedia.org/wiki/Nippert_Stadium) | — |
| A4 TQL | **gap** | FC Cincinnati 2021– ([Wikipedia](https://en.wikipedia.org/wiki/TQL_Stadium)); one-off UC vs Miami football Sept 19, 2026 | [tqlstadium.com/ucvsmiami](https://tqlstadium.com/ucvsmiami) | FC Cincinnati tickets via SeatGeek ([UC Athletics](https://gobearcats.com/news/2026/06/16/tql-stadium-to-host-cincinnati-vs-miami-football-game-on-sept-19)) → **no Ticketmaster ID expected** | **gap** | Event parking details "to be shared" for UC–Miami ([TQL](https://tqlstadium.com/ucvsmiami)) |
| A5 Riverbend | **gap** | CSO & Pops 1984– ([Wikipedia](https://en.wikipedia.org/wiki/Riverbend_Music_Center)) | **gap** (official site not fetched) | Live Nation partner ([Wikipedia](https://en.wikipedia.org/wiki/Riverbend_Music_Center)); TM ID **gap** | **gap** | — |
| A6 HBC | 39.097929, −84.504088 (third-party map link, [SeatPick](https://seatpick.com/heritage-bank-center-tickets)); ≈39.0979, −84.5045 from DMS on [Sygic](https://travel.sygic.com/en/poi/us-bank-arena-poi:26405). Unverified — re-geocode. | Cyclones (ECHL) 1997– ([CityBeat](https://www.citybeat.com/?p=209829)); Jr. Cyclones (USPHL) 2021– ([Wikipedia](https://en.wikipedia.org/wiki/Heritage_Bank_Center)) | [Box office](https://USBANKARENA.COM/box-office) | Sells through Ticketmaster (official box-office page, same link); TM ID **gap** | Four-year average 90 events/yr (2018, 2019, 2022, 2023) ([WCPO](https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/study-cincinnati-should-build-new-arena-in-one-of-these-three-locations)); game-level attendance **gap** | Address conflict: 100 Broadway ([SeatPick](https://seatpick.com/heritage-bank-center-tickets)) vs 181–251 Broadway ([Sygic](https://travel.sygic.com/en/poi/us-bank-arena-poi:26405)). Operator cites covered parking next to arena ([WCPO](https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/there-is-nothing-wrong-with-the-current-location-heritage-bank-center-operators-respond-to-recent-study)). |
| A7 Fifth Third | **gap** (address 2700 O'Varsity Way per [Stadium Journey](https://stadiumjourney.com/stadiums/fifth-third-arena-s830)) | UC MBB, WBB, volleyball | [gobearcats](https://gobearcats.com/fifth-third-arena-volleyball) | ESPN expected; not verified | **gap** | — |
| A8 Lindner | **gap** | Cincinnati Open (ATP/WTA) 1979– ([Wikipedia](https://en.wikipedia.org/wiki/Cincinnati_Open)) | [cincinnatiopen.com](https://cincinnatiopen.com/news/2024-venue-upgrades-revealed/) | Official tournament ticketing; TM ID not applicable/**gap** | Tournament total >194,000 in 2023 (official, cumulative, [Cincinnati Open](https://cincinnatiopen.com/news/2024-venue-upgrades-revealed/)) | — |
| A9 Cintas | **gap** | Xavier MBB/WBB ([goxavier](https://goxavier.com/news/2025/5/16/mens-basketball-announces-home-opener-and-other-schedule-updates)) | [goxavier](https://goxavier.com/news/2025/5/16/mens-basketball-announces-home-opener-and-other-schedule-updates) | ESPN game page exists ([ESPN](https://africa.espn.com/mens-college-basketball/game/_/gameId/401819847/cincinnati-xavier)) | Record 10,880 (Dec 5, 2025 Crosstown) per [Wikipedia](https://en.wikipedia.org/wiki/Cintas_Center) | — |
| A10 Truist | **gap** | NKU MBB/WBB; Kentucky Barrels (AF1) 2026–; UC MBB 2017–18 temporary ([Wikipedia](https://en.wikipedia.org/wiki/Truist_Arena)) | [thetruistarena.com](https://thetruistarena.com/events/2026/04/kentucky-barrels-af1-at-truist-arena) | Sells through Ticketmaster (official arena page, same link); TM ID **gap** | NKU MBB 3,604 (Feb 28, 2026); WBB 1,766 (Jan 4, 2026) ([MBB log](https://en.wikipedia.org/wiki/2025%E2%80%9326_Northern_Kentucky_Norse_men%27s_basketball_team); [WBB log](https://en.wikipedia.org/wiki/2025%E2%80%9326_Northern_Kentucky_Norse_women%27s_basketball_team)) | — |
| A11 Brady | **gap** | MEMI-operated ([iHeart](https://700wlw.iheart.com/content/2019-12-11-the-andrew-j-brady-icon-music-center-to-open-next-year-at-the-banks)) | **gap** | TM ID **gap**; resellers list outdoor stage separately as "ICON Festival Stage" ([ticketsales.com](https://www.ticketsales.com/heritage-bank-center-tickets/venue)) | **gap** | — |
| A12 MegaCorp | **gap** | PromoWest/AEG ([PromoWest](https://promowestlive.com/our-venues)) | [promowestlive.com](https://promowestlive.com/cincinnati/venue-rental) | TM ID **gap** | ~250,000/yr and 180 events/yr (official, [AEG GP](https://aeggp.com/venues/megacorp-pavilion)) | Sits on a 550-car garage ([AEG](https://aegsev.com/megacorp-pavilion)) |
| A13 Thomas More | **gap** | Florence Y'alls (Frontier League) | [Frontier League](https://www.frontierleague.com/florence-y-alls) | No free feed verified | Season avg 2,140 (2024) ([StatsCrew](https://statscrew.com/venues/v-880)) | — |
| A14 Music Hall | **gap** | CSO, Pops, Opera, Ballet, May Festival ([Cincinnati Arts](https://www.cincinnatiarts.org/rentals/music-hall-plan-your-event)) | same | TM ID **gap** | **gap** | — |
| A16 NKU Soccer | **gap** | FC Cincinnati 2 (MLS Next Pro) 2022– ([Wikipedia](https://en.wikipedia.org/wiki/FC_Cincinnati_2)) | — | No free feed verified | **gap** | — |

### 3.3 Duplicate and double-count flags

- **Riverbend campus:** Riverbend (A5) and PNC Pavilion (A5b) are separate stages on one ticketing campus ([Wikipedia](https://en.wikipedia.org/wiki/Riverbend_Music_Center)). Match on room name, not "Riverbend".
- **Brady:** indoor (A11b, 4,500) and outdoor stage (A11, 8,000) are different rooms with different thresholds. Resellers split the outdoor stage as "ICON Festival Stage"; the Smale Park lawn (8,500) is the same footprint, not a third room.
- **MegaCorp Pavilion:** indoor 2,700 vs outdoor 7,000/6,000. Its rental page's "up to 5,000" ([PromoWest rental](https://promowestlive.com/cincinnati/venue-rental)) is a private-event figure, not a concert setup — do not use it.
- **Lindner Family Tennis Center:** one ticket can cover several courts in a session. Count the tournament once (Table B) and count court-level only for Center Court/Grandstand if needed.
- **TQL Stadium:** The Bailey 3,170 is inside the 26,000, not additive. Suite and premium packages (4,500) also inside.
- **Paycor / GABP / HBC parking and suites:** Reds and Bengals sites sell suites and parking as separate products (e.g., hospitality pages on [Reds facts nav](https://www.mlb.com/reds/ballpark/information/facts)). Filter any listing whose title includes "Parking", "Suite", "Package" or "Hospitality".
- **Heritage Bank Center vs. old name:** feeds and aggregators may still carry "U.S. Bank Arena" (the box office domain is still usbankarena.com — [box office](https://USBANKARENA.COM/box-office)).
- **Fifth Third Arena vs. "Shoemaker Center"**, **Truist Arena vs. "BB&T Arena"** — same rooms.

---

## 4. Threshold cases (around 1,000 and 5,000)

Each room counts on its own sourced figure only.

| Room | Figure(s) | Treatment |
|---|---|---|
| Grandstand Court (Lindner) | 5,000 (reported, Wikipedia; third-party Tennis Tours) | **Counts at 5,000** by the rule, but no official source; mark *reported*. Re-check with an official Cincinnati Open venue page. |
| Andrew J Brady indoor | 4,500 (official MEMI) | **Under 5,000** → listed and muted. |
| Thomas More Stadium | 4,200 vs 4,500 | Under 5,000 either way → muted. |
| PNC Pavilion | 4,100 | Under → muted. |
| Stadium 3 (Lindner) | 4,000 | Under → muted. |
| MegaCorp Pavilion | indoor 2,700; outdoor 7,000/6,000; rental "up to 5,000" | Indoor muted; outdoor counts; ignore rental figure. |
| Riverbend seated only | 6,000 seated + 14,500 lawn | Counts (20,500 total; 6,000 seated also ≥5,000). |
| Heritage Bank Center (ECHL "6,955") | lower-bowl listing | Still ≥5,000; does not change class. |
| NKU Soccer Stadium | 1,000 | At the pre-list line; pre-list, muted. |
| Court 10 / Champions Court | 2,000 / 2,300 | Pre-list, muted; duplicate-ground risk. |
| Music Hall Springer | 2,500 (official) | Pre-list, muted. |
| Taft Theatre | resale only | **Gap** — no capacity wired. |

---

## 5. Gap item 5 — Teams, dated home venues and feed coverage

| Team | League | Home venue by date | Free schedule feed | Status |
|---|---|---|---|---|
| Cincinnati Reds | MLB (NL Central) | GABP 2003– ([Reds](https://www.mlb.com/reds/ballpark/information/facts)); spring training at Goodyear Ballpark, AZ ([Reds game notes PDF](https://img.mlbstatic.com/mlb-images/image/upload/mlb/jr6d99twkpluidiphmt7.pdf)) — exclude spring games | MLB Stats API (team 113, per page metadata); ESPN | **Verified** (ESPN game page with attendance) |
| Cincinnati Bengals | NFL (AFC North, [CityBeat](https://www.citybeat.com/arts/heres-when-to-watch-the-cincinnati-bengals-during-super-wild-card-weekend-12477311)) | Paycor/Paul Brown Stadium 2000–; lease to June 2036 | ESPN expected | **Not verified this pass** |
| FC Cincinnati | MLS | Nippert 2016–2020; TQL May 16, 2021– ([Enquirer via AOL](https://www.aol.com/season-long-celebration-100th-anniversary-015723657.html); [StadiumDB](https://stadiumdb.com/stadiums/usa/west_end_stadium)) | ESPN expected | **Not verified** |
| FC Cincinnati 2 | MLS Next Pro | NKU Soccer Stadium 2022–; 2022 also used TQL for one match ([Wikipedia](https://en.wikipedia.org/wiki/FC_Cincinnati_2)) | none verified | **No feed** |
| Cincinnati Cyclones | ECHL | Heritage Bank Center 1997– ([CityBeat](https://www.citybeat.com/?p=209829)) | none verified | **No feed** |
| Cincinnati Bearcats (UC) | NCAA (Big 12, [3D Digital Venue](https://3ddigitalvenue.com/3dmap/clients/college-football/nippert-stadium/)) | Football: Nippert; Sept 19, 2026 at TQL. MBB/WBB/VB: Fifth Third Arena; MBB 2017–18 at BB&T (Truist) Arena | ESPN | Partly verified (ESPN Crosstown page) |
| Xavier Musketeers | NCAA (Big East, [ESPN standings](https://africa.espn.com/mens-college-basketball/game/_/gameId/401819847/cincinnati-xavier)) | Cintas Center | ESPN | **Verified** (ESPN game page) |
| NKU Norse | NCAA D-I (Horizon League — third-party [US Team Colors](https://usteamcolors.com/northern-kentucky-university-colors/)) | Truist Arena 2008– | ESPN+ listed in game logs ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Northern_Kentucky_Norse_men%27s_basketball_team)) | API **not verified** |
| Kentucky Barrels | Arena Football One | Truist Arena 2026–; 2026 home dates Apr 12, Apr 19, May 3, May 17, Jun 13, Jun 27 ([LINK nky](https://linknky.com/?p=293730)) | none verified | **No feed** |
| Florence Y'alls | Frontier League | Thomas More Stadium 2004– ([Stadium Journey](https://www.stadiumjourney.com/stadiums/thomas-more-stadium-florence-yalls)) | none verified | **No feed** |
| Cincinnati Jr. Cyclones | USPHL (junior) | Heritage Bank Center 2021– ([Wikipedia](https://en.wikipedia.org/wiki/Heritage_Bank_Center)) | none | Junior hockey; low draw — flag only |
| Miami RedHawks | NCAA (MAC) | Yager Stadium, Oxford (edge) | — | Edge, out of core |

**Teams with no verified feed:** FC Cincinnati 2, Cyclones, Kentucky Barrels, Florence Y'alls, Jr. Cyclones; Bengals, FC Cincinnati, NKU and UC football not confirmed in this session.
**Women's pro teams:** none surfaced in this pass — **gap** (not searched exhaustively).

---

## 6. Gap item 6 — Games away from the home venue

| Team | Date | Actual site | Home designation | Source |
|---|---|---|---|---|
| Bengals vs Washington | Oct 30, 2016 | Wembley Stadium, London | **gap** | [WCPO](https://www.wcpo.com/bengals-to-play-falcons-in-madrid) |
| Bengals vs Rams | 2019 (date gap) | Wembley Stadium, London | **gap** | [WCPO](https://www.wcpo.com/bengals-to-play-falcons-in-madrid) |
| Bengals at Falcons | **Nov 8, 2026**, 9:30 a.m. ET | Bernabéu Stadium, Madrid | Falcons home; Bengals designated road | [Bengals](https://www.bengals.com/news/bengals-falcons-week-9-spain-press-release); [Fox19](https://www.fox19.com/2026/05/12/bengals-play-falcons-madrid/); [NFL.com](https://www.nfl.com/news/falcons-bengals-madrid-week-9-2026-nfl-schedule-release) |
| Reds vs Braves (MLB Speedway Classic) | Aug 2–3, 2025 (rain carried to Aug 3) | Bristol Motor Speedway, TN | **gap** (verify which club was home) | [Wikipedia](https://en.wikipedia.org/wiki/MLB_Speedway_Classic); [ESPN](https://africa.espn.com/mlb/video/_/gameId/401696561) |
| UC vs Miami (OH) | **Sept 19, 2026** | TQL Stadium (moved from Paycor) | Neutral-site, announced Jun 16, 2026 | [UC Athletics](https://gobearcats.com/news/2026/06/16/tql-stadium-to-host-cincinnati-vs-miami-football-game-on-sept-19); [Wikipedia](<https://en.wikipedia.org/wiki/Victory_Bell_(Cincinnati%E2%80%93Miami)>) |
| Crosstown Shootout (men) | Dec 5, 2025 | Cintas Center (Xavier home) | Alternates campuses; 2024 edition at Fifth Third Arena | [Fox19](https://www.fox19.com/2025/05/14/date-set-2025-crosstown-shootout-per-report); [goxavier](https://goxavier.com/news/2025/5/16/mens-basketball-announces-home-opener-and-other-schedule-updates) |
| Crosstown Shootout (women) | Dec 7, 2025 | At Cincinnati (UC home) | — | [goxavier](https://goxavier.com/news/2025/7/29/womens-basketball-announces-2025-non-conference-schedule) |
| UC men's basketball | 2017–18 season | BB&T (Truist) Arena | Temporary home | [Wikipedia](https://en.wikipedia.org/wiki/Truist_Arena) |
| Reds spring training | Feb–Mar annually | Goodyear Ballpark, AZ | — | [Reds game notes PDF](https://img.mlbstatic.com/mlb-images/image/upload/mlb/jr6d99twkpluidiphmt7.pdf) |

2026–27 Crosstown site: **gap** (alternation suggests Fifth Third Arena — proposal, not confirmed). No 2027 Victory Bell game is scheduled; UC cancelled the 2027 game ([Wikipedia](<https://en.wikipedia.org/wiki/Victory_Bell_(Cincinnati%E2%80%93Miami)>)).

---

## 7. Gap item 7 — Postseason and past crowds

| Team | Season | Postseason games | Site | Announced attendance |
|---|---|---|---|---|
| Reds | 2025 | Wild Card, swept 0–2 by Dodgers ([MLB.com](https://www.mlb.com/reds/news/reds-lose-2026-season-finale)) | Away (higher-seed hosts; site not confirmed here) | n/a for Cincinnati |
| Reds | 2026 | none (75–87, last in NL Central, [MLB.com](https://www.mlb.com/reds/news/reds-lose-2026-season-finale)) | — | — |
| Bengals | 2021 | Wild Card vs Raiders, Jan 15, 2022 (W 26–19) | Paul Brown Stadium | **66,277 paid** ([NFL game summary](https://static.www.nfl.com/image/upload/v1677629322/gamecenter/487cf9a5-71b0-11ec-9fcd-de7ed4db3526.pdf)) |
| Bengals | 2022 | Wild Card vs Ravens, Jan 15, 2023 (W 24–17) ([Wikipedia](https://en.wikipedia.org/wiki/Bengals%E2%80%93Ravens_rivalry)) | Paycor Stadium | **gap** |
| Bengals | 2025 | none (6–11, [NFL.com](https://www.nfl.com/news/falcons-bengals-madrid-week-9-2026-nfl-schedule-release)) | — | — |
| FC Cincinnati | 2022–2026 | **gap** | TQL | **gap** |
| Cyclones, UC, Xavier, NKU | recent | **gap** | — | — |

Regular-season examples with announced counts: Bengals 65,962 (2024 vs Raiders, third-party Covers); Cintas Center 10,880 (Dec 5, 2025); NKU per-game counts in Wikipedia game logs; MLB Speedway Classic 91,032 tickets sold ([Yardbarker citing MLB](https://www.yardbarker.com/mlb/articles/speedway_classic_breaks_mlb_attendance_record/s1_17075_42544957)) — a ticket count, and fewer attended the rain-date finish ([Speedway Digest](https://speedwaydigest.com/?p=541298)).

**Feed finding (Tampa Bay precedent):** ESPN game pages do display attendance (Speedway Classic page shows 91,032). Whether the ESPN JSON endpoints return it for every Cincinnati team was **not tested** (no API access from this environment).

---

## 8. Table B — Open sites and dated crowd events

| Event | Organizer | Date(s) | Place / footprint | Count (type, source) | Overlap with fixed rooms | Status |
|---|---|---|---|---|---|---|
| **Oktoberfest Zinzinnati** (50th) | Cincinnati Regional Chamber | Sept 17–20, 2026 ([official](https://oktoberfestzinzinnati.com/festival-information/)) | Sawyer Point & Yeatman's Cove ([UC](https://www.uc.edu/blog/2026/09/n21432471.html)) | 2026: ~700,000 *expected* (organizers, [Local 12](https://local12.com/news/good-morning-cincinnati/oktoberfest-zinzinnati-50th-anniversary-celebration-cincinnati-riverfront-smale-park-glockenspiel-food-entertainment-tent)); 2025: "more than 800,000" (reported, [Fox19](https://www.fox19.com/2026/09/17/cincinnati-ready-police-drones-oktoberfest-zinzinnatis-50th-year/)); 2023: 675,000 police estimate ([NKyTribune](https://nkytribune.com/tag/oktoberfest-zinzinnati/)); 2018: 650,000 police estimate ([NKyTribune](https://nkytribune.com/?p=166042)). All **multi-day totals**; peak concurrent **gap**. 2026 final **gap**. | None (open riverfront) | Held |
| **Riverfest / Western & Southern WEBN Fireworks** (50th) | WEBN/iHeartMedia, Western & Southern | Sept 6, 2026, 3–10 p.m. ([City parks](https://www.cincinnati-oh.gov/cincyparks/visit-a-park/parks-events-calendar/webn-riverfest-fireworks2/)) | Both riverbanks; Sawyer Point/Yeatman's Cove, Smale, Covington, Newport ([WCPO](https://www.wcpo.com/news/local-news/coast-guard-covington-police-prepare-for-50th-riverfest-on-the-ohio-river)) | **Unsized** — only "hundreds of thousands expected" (qualitative, WCPO). | Smale lawn overlaps Brady outdoor stage footprint | Held → unsized list |
| **Flying Pig Marathon Weekend** | Pig Works | May 1–3, 2026 ([City parks](https://www.cincinnati-oh.gov/cincyparks/visit-a-park/parks-events-calendar/flying-pig-marathon-weekend/)); 2027: Apr 30–May 2 ([official](https://www.flyingpigmarathon.com/)) | Point-to-point course, Cincinnati/Covington/Newport; finish near Paycor ([Visit Cincy](https://www.visitcincy.com/events/uniquely-cincinnati-events/flying-pig-marathon-weekend/)) | ~45,000 participants across weekend (secondary, [IBTimes AU](https://www.ibtimes.com.au/10-fun-facts-about-28th-flying-pig-marathon-event-delivers-fun-fast-times-cincinnati-charm-2026-1868068)); organizer says record field ([official](https://www.flyingpigmarathon.com/)) but number not read. **Participants, not spectators.** Spectators: **gap**. | None | Held |
| **Findlay Market Opening Day Parade** (107th) | Findlay Market Parade Committee | Mar 26, 2026, noon ([City](https://www.cincinnati-oh.gov/cityofcincinnati/traffic-alerts/cincinnati-reds-opening-day-street-closures1/)) | Race & Liberty → Race → Fifth St → Sentinel St (same) | **Unsized.** 148 entries (not a crowd count, [WVXU](https://www.wvxu.org/local-news/2026-03-25/cincinnati-reds-opening-day-2026)). | Precedes Reds game at GABP (count game separately) | Held → unsized list |
| **Cincinnati Open** (ATP/WTA) | Beemok Sports & Entertainment | Aug 11–23, 2026 (third-party, [Tennis Tours](https://www.tennistours.com/cincinnati-open/tickets)) | Lindner Family Tennis Center, Mason | >194,000 (2023, official, **cumulative scans/attendance over tournament**, [Cincinnati Open](https://cincinnatiopen.com/news/2024-venue-upgrades-revealed/)); 2025/2026 **gap** | Grounds total; do not also add court-level counts | Held |
| **BLINK** | (organizer gap) | Oct 8–11, 2026 ([UC](https://www.uc.edu/blog/2026/09/n21432471.html)) | Downtown, OTR, Covington | **Unsized** | None | Biennial; held this week |
| **Taste of Cincinnati** | Cincinnati Regional Chamber | May 23–25, 2026 ([CityBeat](https://www.citybeat.com/arts/cincinnati-regional-chamber-announces-dates-for-its-2026-festivals/)) | Fifth Street downtown | **Unsized** | None | Held |
| **Asian Food Fest** | Chamber + Asianati | Apr 25–26, 2026 ([CityBeat](https://www.citybeat.com/arts/cincinnati-regional-chamber-announces-dates-for-its-2026-festivals/)) | Court Street Plaza | ~120,000 in 2025 (organizer via CityBeat; multi-day) | None | Held |
| **Covington Oktoberfest / Newport Oktoberfest** | cities | Sept 11–13, 2026 ([365 Cincinnati](https://365cincinnati.com/cincinnati-oktoberfests/)) | Covington; Newport Festival Park | **Unsized** | None | Held |
| Redsfest | Reds | Jan 2026 ([Wikipedia, First Financial Center](https://en.wikipedia.org/wiki/First_Financial_Center)) | First Financial Center | **Unsized** | Convention center (not a fixed room) | Annual |
| County fairs (Hamilton, Butler, Warren, Clermont, Boone, Kenton) | county agricultural societies | **gap** | fairgrounds | **gap** | Grandstands may have fixed seats — capacity gap | Not researched |

---

## 9. Team colors (gap item 9)

| Team | Primary | Secondary | Source |
|---|---|---|---|
| Cincinnati Bearcats (UC) | #E00122 (UC Red) | #000000 (Black); secondary UC Dark Red #B8011C | [UC brand guide](https://www.uc.edu/about/marketing-communications/brand-guide/visual-identity/color.html) (official) |
| Xavier Musketeers | #0C2340 (Xavier Blue) | Conflict: #9EA2A2 ([one-pager](https://www.xavier.edu/brand/documents/xu-brand-onepager.pdf)) vs #1A1AFF / #FCD612 / #D7D3CC ([quick guide](https://www.xavier.edu/brand/documents/xavier-brand-quick-guide.pdf)). University brand, not athletics-specific. | official (university) |
| NKU Norse | #FFC72C (Gold) | Black named but no hex on the page — **gap** | [NKU brand](https://www.nku.edu/marcomm/creative-services/brand/index.html) |
| Reds, Bengals, FC Cincinnati, FC Cincinnati 2, Cyclones, Kentucky Barrels, Florence Y'alls | **gap** | **gap** | No official team/league hex page found; fan sites (teamcolorcodes etc.) not acceptable. |

---

## 10. Conflicts, duplicates, inaccessible sources, changes through 2028

### 10.1 Conflicting sources (preserved)

| Item | Values | What each measures |
|---|---|---|
| GABP capacity | 45,814 (Reds facts) vs 42,319 (2021 news) vs 42,271 original | Official current listing vs earlier listed seating; likely seating additions over time — unresolved |
| Paycor rename year | Deal Aug 9, 2022 vs infobox "2000–2021" | Same page; use 2022 |
| TQL capacity | 26,000 (official) vs 25,513 (one Wikipedia revision) | Use official |
| HBC capacity | 17,556 / 17,090 / 17,500 hockey / 14,453 hockey / 6,955 lower bowl | Different setups and bowl sections |
| Center Court | 11,614 / 11,600 / 11,435 / "nearly 12,000 seats" | Seat count vs capacity; no official exact number |
| Brady outdoor | 8,000 stage vs 8,500 lawn | Stage setup vs park lawn |
| MegaCorp outdoor | 7,000 (PromoWest) vs 6,000 (AEG GP) | Two operator pages |
| Thomas More Stadium | 4,200 vs 4,500 | Seats vs listed capacity |
| Truist Arena | 9,400 / 8,427 / "up to 10,000" | Concert vs basketball vs marketing |
| Xavier secondary color | #9EA2A2 vs #1A1AFF etc. | Two brand documents |
| HBC address | 100 Broadway vs 181–251 Broadway | Mailing vs parcel range |

### 10.2 Inaccessible or not-fetched sources

- **Ticketmaster venue pages and Discovery API:** not reachable from this environment (Discovery API needs a key; ticketmaster.com is outside the allowed network). Searches returned only resale aggregators. No bypass attempted.
- Official sites not fetched in this pass: riverbend.org, MEMI pages, ECHL/Cyclones, fccincinnati.com stats, Pig Works press release with the 2026 participant count, Bengals/Reds brand pages.
- Pro-Football-Reference box score located in search but not fetched; the NFL's own game-summary PDF was used instead.

### 10.3 Confirmed and proposed changes through 2028

| Change | Type | Date | Re-check |
|---|---|---|---|
| Paycor Stadium club/suite renovation; broader $470M program | **Confirmed** | 2026 onward | After 2026 and 2027 offseasons (capacity) |
| Bengals designated road game in Madrid | **Scheduled** | Nov 8, 2026 | After game (attendance) |
| Kentucky Barrels at Truist Arena | **Confirmed** | 2026 season | Before 2027 season |
| First Financial Center (renamed convention center) | **Confirmed** | Reopened Jan 7, 2026 | — |
| New downtown arena replacing HBC | **Proposal only** | no site/funding decision | Quarterly |
| HBC naming-rights term | Contract | 10 years from Nov 2019 | Late 2029 |
| 2026–27 Crosstown Shootout site | Unconfirmed | Dec 2026 (expected) | When schedules post |
| Victory Bell series | Ends after Sept 19, 2026 (2027 cancelled) | — | — |

---

## 11. Gap checklist (every item from the first 26 builds)

| # | Item | Answer | Remaining gaps |
|---|---|---|---|
| 1 | Name and code | Cincinnati / Cincy / **CIN**; Dayton out (§2) | none |
| 2 | One sourced figure per setup | §3.1 | Paycor concert, TQL football, Riverbend official, Center Court official, Taft, Truist arena-football, Miami U. venues |
| 3 | Rooms 4,500–5,500 | §4: Grandstand 5,000 (counts, reported); Brady indoor 4,500, Thomas More 4,200/4,500 (under) | Official Grandstand figure |
| 4 | Ticketmaster venue IDs | **Gap for all rooms.** Confirmed TM sellers: HBC, Truist Arena, Bengals (Paycor). TQL uses SeatGeek. Searched: "ticketmaster.com Heritage Bank Center venue" and related; only resale results. | Every concert room ships with no TM concerts until IDs are verified |
| 5 | Every team, feeds | §5 | Bengals/FCC/NKU feed checks; women's pro teams |
| 6 | Away games | §6 | Home designation for 2016/2019 London and Speedway Classic; 2019 date |
| 7 | Postseason/past crowds | §7 | Most postseason and season logs |
| 8 | Open-site events | §8; unsized: Riverfest, parade, BLINK, Taste, Covington/Newport Oktoberfest, Redsfest, fairs | 2026 Oktoberfest final; Flying Pig official count |
| 9 | Team colors | §9 | Reds, Bengals, FCC, FCC2, Cyclones, Barrels, Y'alls; NKU black hex |

---

## 12. Build notes (for whoever turns this into app data)

- **IDs must be globally unique.** Prefix everything with `cin-`. Collision risks beyond the known list (`giants`, `jets`, `rangers`, `kings`, `cardinals`): `cyclones` (Iowa State uses the same nickname), `bearcats` (other schools use it), `reds`, `bengals`, `musketeers`, `norse`. *Proposal:* `cin-reds`, `cin-bengals`, `cin-fcc`, `cin-fcc2`, `cin-cyclones`, `cin-uc`, `cin-xavier`, `cin-nku`, `cin-barrels`, `cin-yalls`.
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex` like every other city.
- **Never guess a capacity.** Blank + city gaps list for: Taft Theatre, Paycor concert setup, TQL football setup, Truist arena-football setup, Riverbend official figure, Center Court official figure, all unverified leads.
- **Car shares:** no measured or sourced estimates were found for any Cincinnati venue → leave all on the city default.
- **Split rooms:** Brady indoor/outdoor, MegaCorp indoor/outdoor, Riverbend/PNC Pavilion, and Lindner courts are separate rows with separate thresholds.
- **Exclude Dayton rooms** even when an aggregator or MEMI groups them with Cincinnati.
- **Neutral/away games** in §6 must override the home-venue default.
- **Time zone:** Eastern. The Reds facts page metadata uses America/Kentucky/Louisville ([Reds](https://www.mlb.com/reds/ballpark/information/facts)), which is Eastern time; normalize to America/New_York if the app expects one zone per city.
