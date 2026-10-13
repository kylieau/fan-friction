# Edmonton venue and crowd-event research — Fan/Friction city model

**As of:** Monday, October 12, 2026 (all sources accessed this date unless a page date is shown).
**Time zone for all event dates:** America/Edmonton (Mountain Time, UTC−7 standard / UTC−6 daylight).
**Scope rule used:** venue capacity ≠ event attendance; nothing below converts one into the other.

Labels used in tables:
- **Official** = venue owner/operator, team, league, government, university or organizer page.
- **Reported** = news outlet, Wikipedia, or secondary listing (stated as such).
- **Unknown** = no public figure found; nothing invented.
- **Proposal** = announced plan not yet built or funded; kept separate from confirmed/scheduled changes.

---

## 1. Recommended boundary and uncertain edge venues

### Recommendation

Use the **Edmonton Metropolitan Region (EMRB) 13-municipality footprint** as the scope: Beaumont, Devon, Edmonton, Fort Saskatchewan, Leduc, Leduc County, Morinville, Parkland County, Spruce Grove, St. Albert, Stony Plain, Strathcona County and Sturgeon County ([City of Edmonton, EMRB page](https://edmonton.ca/city_government/city_organization/metropolitan-region-board)). The provincial rule is that these boards include the core city, every adjacent rural municipality, and urban municipalities over 5,000 people ([Government of Alberta](https://Alberta.ca/municipal-growth-management-boards)); the region is described as about [1.2 million people in 13 municipalities](https://www.emrb.ca/s/EMRB-Overview.pdf).

Reasoning: every starting lead (St. Albert, Sherwood Park/Strathcona County, Leduc, Beaumont, Spruce Grove, Stony Plain) is an EMRB member, and the two largest suburban event draws found — horse racing at Century Mile and motorsport at RAD Torque Raceway — sit in Leduc County beside Edmonton International Airport, which is inside the footprint. Assess each outer municipality as its own scope value so Edmonton-proper friction can still be filtered.

### Edge cases (keep separate; do not auto-merge)

| Edge | Why it is an edge | Recommendation |
|---|---|---|
| Enoch Cree Nation (River Cree Resort & Casino concerts) | Directly west of the city limit ([Global News](https://globalnews.ca/news/1878431/river-cree-rushing-to-relocate-shows-after-closing-the-venue)) but a First Nation, not an EMRB member municipality ([EMRB list](https://edmonton.ca/city_government/city_organization/metropolitan-region-board)). | Include as a separately labelled scope ("Enoch Cree Nation – adjacent"); capacity unknown, so pre-list only. |
| Red Deer (Marchant Crane Centrium) | Co-hosts the 2027 World Juniors with Edmonton ([Hockey Canada/CP via TSN](https://www.tsn.ca/hockey-canada/article/edmonton-red-deer-to-host-2026-world-juniors/)), but is a separate city ~halfway to Calgary. | Exclude; log WJC games there under Red Deer, not Edmonton. |
| Calmar (Pigeon Lake Concert Series) | Appears in Edmonton concert listings ([Songkick](https://songkick.com/concerts/43177879-bini-at-edmonton-expo-centre)) but Calmar is not an EMRB member. | Exclude unless a fixed 1,000+ room is verified. |
| Camrose, Calgary, other Alberta destinations | Share a province/marketing label only. | Exclude per brief. |

---

## 2. Table A — fixed venues and rooms

Table A is split into three linked sub-tables (A1 identity/location, A2 capacity by configuration, A3 tenants/feeds/status) because a single 15-column pipe table is unreadable. **Row IDs are shared across A1–A3.** Rows are ordered by largest sourced capacity.

### A1 — Identity, aliases, location, scope, roof

| ID | Current official name | Parent / sibling rooms | Aliases since 2016 (dated) | Area · municipality · recommended scope | Coordinates (precision) | Roof |
|---|---|---|---|---|---|---|
| A01 | Commonwealth Stadium | Shares the 11000 Stadium Road address with Clarke Stadium (A06) and the Commonwealth Fieldhouse ([City](https://www.edmonton.ca/attractions_events/commonwealth_stadium/history)) | "The Brick Field at Commonwealth Stadium" used for the field by the Elks in 2021 ([CBC](https://www.cbc.ca/1.6131593)) | McCauley/Stadium area · Edmonton · core | Not captured from a public source — geocode 11000 Stadium Rd NW | Open-air |
| A02 | Rogers Place | Ford Hall atrium (A02a), Downtown Community Arena (A10), Fan Park (B-site) all adjoin | None | ICE District, Downtown · Edmonton · core | 53.54694, −113.49778 (Wikipedia infobox, ~10 m) ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Place)) | Enclosed |
| A03 | RE/MAX Field | Standalone ballpark | Telus Field (1995–2015); Edmonton Ballpark (2016); RE/MAX Field since May 2017 ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field); [Global News](https://globalnews.ca/news/3418814/edmontons-telus-field-is-renamed-remax-field/)). No later rename found. | Rossdale, river valley · Edmonton · core | 53.53167, −113.49667 (Wikipedia, ~10 m) ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) | Open-air |
| A04 | RAD Torque Raceway (multi-track) | Drag strip, clay oval, road course on one site | Castrol Raceway → RAD Torque Raceway, Nov 2021 (five-year naming deal) ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) | Near EIA · Leduc County · EMRB outer | 53.33380, −113.59120 (Wikipedia, ~10 m) ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) | Open-air |
| A05 | Edmonton EXPO Centre — exhibit halls A–H | Parent of A07 (Arena/Hall D); on Edmonton Exhibition Lands with the closed Coliseum (A20) and K-Days grounds (B01) | Floor plans also label Hall D space "Flair Airlines Hangar" ([EXPO](https://edmontonexpocentre.com/plan-your-event/sporting-events)) | Exhibition Lands · Edmonton · core | ≈53.5684, −113.4593 (official site map embed centre, ~100 m) ([EXPO](https://edmontonexpocentre.com/plan-your-event/entertainment-events/)) | Enclosed |
| A06 | Clarke Stadium | Same address as A01 | None | Stadium area · Edmonton · core | Not captured — same address as A01 | Open-air |
| A07 | Edmonton EXPO Centre Arena (Hall D) | Child of A05 | "Hall D arena"; "Flair Airlines Hangar" floor-plan label ([EXPO](https://edmontonexpocentre.com/plan-your-event/sporting-events)) | Exhibition Lands · Edmonton · core | Use A05 point | Enclosed |
| A08 | Edmonton Convention Centre — Halls A/B/C (combinable) and Hall D | Downtown convention complex | "Formerly Shaw Conference Centre" ([Bridebook listing](https://bridebook.com/ca-en/wedding-venues/edmonton-convention-centre-edmonton-alberta-caNg0zMo8d)); rename date not verified | Downtown, 9797 Jasper Ave · Edmonton · core | Not captured | Enclosed |
| A09 | Foote Field (East/turf field) | UofA South Campus; West Premier Field separate | None | South Campus · Edmonton · core | Not captured | Open-air |
| A10 | Clare Drake Arena | UofA North Campus (Van Vliet Complex) | None (Varsity Arena renamed 1990) ([Bears & Pandas](https://bearsandpandas.ca/facilities/?id=1)) | North Campus · Edmonton · core | Not captured | Enclosed |
| A11 | Northern Alberta Jubilee Auditorium | Provincially owned theatre | None | University area, 11455 87 Ave · Edmonton · core | 53.5219, −113.5289 (Wikipedia, ~10 m) ([Wikipedia](https://en.wikipedia.org/wiki/Northern_Alberta_Jubilee_Auditorium)) | Enclosed |
| A12 | Servus Credit Union Place — Performance Arena | Parent complex also has Mark Messier and Troy Murray arenas | A 2019 article calls the main rink "Go Auto" arena ([St. Albert Today](https://www.stalberttoday.ca/sports-digest/sports-extra-1858025)); current sponsor name unverified | St. Albert · EMRB outer | Not captured | Enclosed |
| A13 | Francis Winspear Centre for Music (main hall) | Completion Project adds a separate 550–600-seat hall ([Clark Builders](https://www.clarkbuilders.com/francis-winspear-completion-project)) | None | Downtown Arts District · Edmonton · core | Not captured | Enclosed |
| A14 | Sherwood Park Arena & Sports Centre — Randy Rosen Rink | Twin facility; Shell Rink is separate (365) | None | Sherwood Park · Strathcona County · EMRB outer | Not captured | Enclosed |
| A15 | Midway Music Hall | Standalone | None (opened Sept 20, 2019) ([Wikipedia](https://en.wikipedia.org/wiki/Midway_(music_hall))) | South Edmonton, 6107 104 St · Edmonton · core | 53.49850, −113.49652 (Wikipedia) ([Wikipedia](https://en.wikipedia.org/wiki/Midway_(music_hall))) | Enclosed |
| A16 | Thompson Family Arena at Heavy Metal Place | Sibling: Cst. Brett Ryan Community Arena in the same building ([OneFM](https://www.onefm.ca/parkland/news/parkland-news/heavy-metal-place-is-officially-open)) | None (opened May 10, 2025) | Westwind, 50 Westwind Dr · Spruce Grove · EMRB outer | Not captured | Enclosed |
| A17 | Downtown Community Arena | Attached to Rogers Place block | "Edmonton Downtown Community Arena" ([Rogers Place](https://www.rogersplace.com/fun-facts/)) | ICE District · Edmonton · core | Use A02 area; separate room | Enclosed |
| A18 | Century Mile Racetrack and Casino | Casino + grandstand building + one-mile track | None | Beside EIA · Leduc County · EMRB outer | Not captured | Grandstand covered; track open |
| A19 | River Cree Resort & Casino — concert venue ("The Venue") | Casino, Marriott hotel, arena on same resort | Temporary tent closed 2015 ([CBC/CTV](https://edmonton.ctvnews.ca/river-cree-resort-and-casino-closes-the-venue-1.2276086)) | Enoch Cree Nation · **edge scope** | ≈53.510, −113.696 (aggregator, low precision) ([Accrue](https://accrue.com/events/venue/edmonton-marriott-at-river-cree-resort-VqG22R6k25ww3augQkmhuK)) | Enclosed |
| A20 | Coliseum (closed) | Exhibition Lands, beside A05 | Northlands Coliseum / Rexall Place / Skyreach Centre / Edmonton Coliseum ([City](https://edmonton.ca/ColiseumDeconstruction)) | Exhibition Lands · Edmonton | — | — |

### A2 — Capacity by actual configuration (do not combine rows)

| ID | Configuration | Capacity | Label & source | Dated capacity changes / conflicts |
|---|---|---|---|---|
| A01 | Football / soccer seating | 56,302 | Reported ([Wikipedia](https://en.wikipedia.org/wiki/Commonwealth_Stadium)) | Also stated as 56,400 ([CTV, Nov 2025](https://www.ctvnews.ca/edmonton/article/commonwealth-stadium-getting-new-elks-turf-for-2026/)), "over 55,000" ([Canada Soccer](https://news.canadasoccer.com/canada-soccer-announces-canmnt-match-in-edmonton-ahead-of-fifa-world-cup-26)) and 55,000 by the Elks CEO in 2021 ([CBC](https://www.cbc.ca/1.6131593)). All are ≫5,000; conflict does not change class. |
| A01 | Event record with added seating | 62,531 attended 2002 Grey Cup | Official (attendance, not capacity) ([City](https://www.edmonton.ca/attractions_events/commonwealth_stadium/history)) | 1983 expansion added ~18,000 seats to "just over 60,000" ([City](https://www.edmonton.ca/attractions_events/commonwealth_stadium/history)) |
| A01 | Concert | Unknown (no official concert figure found) | — | — |
| A02 | NHL hockey | 18,500 | **Official** ([Rogers Place Fun Facts](https://www.rogersplace.com/fun-facts/)); also 18,500 used by Hockey Canada ([TSN/CP](https://www.tsn.ca/hockey-canada/article/edmonton-red-deer-to-host-2026-world-juniors/)) | Widely reported 18,347 ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Place); [HOK 2016](https://hok.com/news/2016-11/hok-designed-rogers-place-arena-in-edmonton-shatters-attendance-records)); pre-opening 18,641 ([blog, Jan 2016](https://blog.mastermaq.ca/2016/01/16/rogers-place-sneak-peek-january-2016/)) |
| A02 | Concert / centre stage | 20,030 | **Official** ([Fun Facts](https://www.rogersplace.com/fun-facts/)) | Conflicts: 20,734 ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Place)); 20,147 ([HOK 2016](https://hok.com/news/2016-11/hok-designed-rogers-place-arena-in-edmonton-shatters-attendance-records)) |
| A02 | Small-concert setup | ~4,500 | Reported, pre-opening ([blog](https://blog.mastermaq.ca/2016/01/16/rogers-place-sneak-peek-january-2016/)) | Below 5,000 → a curtained show at Rogers Place may not feed friction; needs per-event layout |
| A03 | Baseball | 9,200 | Reported ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field); [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:RE/MAX_Field)) | Includes 30 executive suites ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) |
| A04 | Drag strip | 8,500 | Reported, seating type not stated ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) | Treat as unverified estimate |
| A04 | Clay oval | 4,500 | Reported ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) | Below 5,000 |
| A05 | All seven exhibit halls, one level | "Upwards of 8,000 guests" | Official, layout unspecified ([EXPO](https://edmontonexpocentre.com/plan-your-event/entertainment-events/)) | Movable/standing — **not seated capacity** |
| A05 | Combined-hall reception (largest listed) | 7,000 | Official listing via Explore Edmonton, hall combination not named ([Explore Edmonton](https://exploreedmonton.com/industry/offsite/edmonton-expo-centre)) | Single halls list 2,500–4,500 reception ([same](https://exploreedmonton.com/industry/offsite/edmonton-expo-centre)) |
| A06 | Permanent seating | 5,000 (1,100 west grandstand + 3,900 east bleachers) | **Official** ([City sports fields](https://www.edmonton.ca/activities_parks_recreation/sports-fields-staffed)) | History: 1,200 (2001–13) → 5,000 (2013–19) → 5,148 (2019–26) → 6,000 (2026–) ([Wikipedia](https://en.wikipedia.org/wiki/Clarke_Stadium)); Elks retrofitted extra seating for May 29, 2026 ([Elks](https://www.goelks.com/2026/02/19/elks-announce-night-at-the-knothole/)) |
| A06 | Grounds incl. field for concerts | "Can exceed 6,000" | Reported ([Wikipedia](https://en.wikipedia.org/wiki/Clarke_Stadium)) | Standing — not seated |
| A07 | Tiered arena (basketball etc.) | 4,200 | **Official** ([EXPO sporting](https://edmontonexpocentre.com/plan-your-event/sporting-events)) | Hall D theatre 4,000 / reception 3,500 ([Explore Edmonton](https://exploreedmonton.com/industry/offsite/edmonton-expo-centre)); aggregator lists 3,000 ([Songkick](https://songkick.com/concerts/43177879-bini-at-edmonton-expo-centre)) |
| A08 | Hall ABC, theatre chairs | 5,254 | Official listing ([Explore Edmonton](https://exploreedmonton.com/industry/offsite/edmonton-convention-centre)) | Movable chairs; Hall AB 4,200, Hall A 2,400 ([same](https://exploreedmonton.com/industry/offsite/edmonton-convention-centre)) |
| A08 | Hall D, theatre | 1,866 vs 2,000 | Conflict: [Explore Edmonton](https://exploreedmonton.com/industry/offsite/edmonton-convention-centre) vs [ECC floor plans](https://www.edmontonconventioncentre.com/planning-event/floorplans/) | Both 1,000–5,000 |
| A09 | Football bleachers | 3,500 (2,500 W + 1,000 E) | **Official** ([Bears & Pandas](https://bearsandpandas.ca/sports/2020/11/15/foote-field%20ll.aspx)) | West Premier Field 1,500 separate ([same](https://bearsandpandas.ca/facilities/?id=2)) |
| A10 | Hockey | 2,600 | **Official** ([UofA](https://www.ualberta.ca/kinesiology-sport-recreation/facilities/north-campus/clare-drake-arena)) | Conflicts: 2,800 ([Bears & Pandas](https://bearsandpandas.ca/facilities/?id=1)); 2,700 ([Wikipedia](https://en.wikipedia.org/wiki/Clare_Drake_Arena)) |
| A11 | Theatre, no pit / with pit | 2,538 / 2,416 | Reported ([Wikipedia](https://en.wikipedia.org/wiki/Northern_Alberta_Jubilee_Auditorium)) | Others: 2,514 ([Bandsintown](https://www.bandsintown.com/v/10000304)); 2,678 ([IBDB](https://ibdb.com/touring-theatre/northern-alberta-jubilee-auditorium-601)); 2,731 original 1957 ([Edmonton Historical Board](https://www.edmontonhistoricalboard.com/structures/northern-alberta-jubilee-auditorium)) |
| A12 | Hockey seating, excl. standing | 2,023 | **Official** ([City of St. Albert](https://stalbert.ca/rec/facilities/servus/amenities/arenas/)) | 2,044 reported ([Wikipedia](https://en.wikipedia.org/wiki/St._Albert_Steel)) |
| A13 | Concert hall / with choir loft | 1,668 / 1,884 | Reported ([Wikipedia](https://en.wikipedia.org/wiki/Winspear_Centre)) | 1,716 / 1,932 also cited ([TicketSmarter](https://www.ticketsmarter.com/venues/francis-winspear-centre)) |
| A14 | Hockey spectators | 1,500 | **Official** ([Strathcona County](https://www.strathcona.ca/recreation-events/recreation-centres/sherwood-park-arena-and-sports-centre/)) | — |
| A15 | General admission | 1,450 | **Official** ([Midway](https://midwaymusichall.com/booking)) | 1,167 in a booking listing ([Tripleseat](https://venues.tripleseat.com/venues/edmonton/midway-music-hall)) |
| A16 | Hockey seats | 1,400 | Reported by architect ([GEC](https://gecarchitecture.com/work/heavy-metal-place)) | "Up to 1,700 spectators" for the facility ([Global News](https://globalnews.ca/news/11174193/heavy-metal-place-opens-in-spruce-grove-alta)) — may include both rinks |
| A17 | Hockey seats | ~1,000 | Reported, pre-opening ([blog](https://blog.mastermaq.ca/2016/01/16/rogers-place-sneak-peek-january-2016/)) | Needs official confirmation |
| A18 | Grandstand | Unknown | Building is 89,700 sq ft on several floors ([Century release, 2019](https://www.thehorses.com/news/news-archives/item/2730:century-mile-racetrack-and-casino-opening-announcement)) | Manual check required |
| A19 | Concerts | Unknown | — | Manual check required |
| A20 | — | Closed; not an active room | [City](https://edmonton.ca/ColiseumDeconstruction) | Exclude from active list |

**Sub-rooms flagged but not rowed:** Ford Hall at Rogers Place is a 25,000 sq ft atrium ([HOK](https://hok.com/news/2016-11/hok-designed-rogers-place-arena-in-edmonton-shatters-attendance-records)) with no published event capacity — treat as part of A02 to avoid duplicates. Rogers Place premium inventory (57 suites, 3,100 club seats) ([Fun Facts](https://www.rogersplace.com/fun-facts/)) and Commonwealth's 22 Elks concourse suites ([Global News](https://globalnews.ca/news/10541508/edmonton-elks-commonwealth-stadium-improvements/)) can appear as separate ticket listings.

### A3 — Tenants, schedules/feeds, attendance, access, status

| ID | Current / former tenants (dated) | Official schedule link · verified feed coverage | Observed attendance (separate from capacity) | Access & parking | Status / changes through 2028 |
|---|---|---|---|---|---|
| A01 | Edmonton Elks (CFL) 1978– ([Wikipedia](https://en.wikipedia.org/wiki/Edmonton_Elks)); Canada men's friendly vs Uzbekistan, June 1, 2026 ([Canada Soccer](https://news.canadasoccer.com/canada-soccer-announces-canmnt-match-in-edmonton-ahead-of-fifa-world-cup-26)) | [goelks.com](https://www.goelks.com/) · Ticketmaster room ID **unknown** | Elks 2024 average 20,499 ([Wikipedia](https://en.wikipedia.org/wiki/2024_Edmonton_Elks_season)); 2026 listed home games 14,664–31,757 announced ([Wikipedia](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season)) | Capital Line LRT; City cites ~800 on-site spaces ([3DownNation](https://3downnation.com/2024/09/05/proposed-upgrades-to-commonwealth-stadium-would-cost-250-million-no-funding-in-place/)) yet says no public parking on event days ([City](https://www.edmonton.ca/attractions_events/commonwealth_stadium/canada-soccer-send-off-series)) | New turf for 2026 ([CTV](https://www.ctvnews.ca/edmonton/article/commonwealth-stadium-getting-new-elks-turf-for-2026/)). **Proposal:** ~$250M modernization, unfunded ([3DownNation](https://3downnation.com/2024/09/05/proposed-upgrades-to-commonwealth-stadium-would-cost-250-million-no-funding-in-place/)) |
| A02 | Oilers (NHL) and Oil Kings (WHL) 2016– ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Place)); PWHL neutral-site games 2025–26 | [rogersplace.com/events](https://www.rogersplace.com/events/) · **Ticketmaster venue 140602 verified** via official link ([Rogers Place](https://www.rogersplace.com)) | PWHL: 17,518 (Feb 16, 2025) ([Wikipedia](https://en.wikipedia.org/wiki/PWHL_Takeover_Tour)); 10,264 (Dec 27, 2025) ([same](https://en.wikipedia.org/wiki/PWHL_Takeover_Tour)); 10,794 (Apr 7, 2026) ([PWHL](https://www.thepwhl.com/en/news/2026/april/13/pwhl-weekly-notebook-apr-13-2026)) | MacEwan LRT station ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Place)); [official parking page](https://www.rogersplace.com/getting-to-the-arena/parking/) | Scheduled: 2027 World Juniors Dec 26, 2026–Jan 5, 2027, 17 games ([TSN/CP](https://www.tsn.ca/hockey-canada/article/edmonton-red-deer-to-host-2026-world-juniors/)); 2028 World Cup of Hockey semis + final in Edmonton, Feb 2028 ([THN](https://thehockeynews.com/news/latest-news/world-cup-of-hockey-hosts-were-great-choices-but-questions-remain)) — building not named in source |
| A03 | Riverhawks (WCL) 2022–; Collegiate Hawks (CCBC) 2022–; Prospects 2012–19 ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) | [riverhawksbaseball.com/remax-field](https://riverhawksbaseball.com/remax-field) · Ticketmaster ID 139314 from 2016 citation, **stale/unverified** ([Wikipedia ref](https://en.wikipedia.org/wiki/RE/MAX_Field)) | Riverhawks reported league attendance leaders, no figures cited ([Wikipedia](https://en.wikipedia.org/wiki/Edmonton_Riverhawks)) | Transit route 9 ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) | 10-year lease from May 20, 2020 ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) — runs past 2028 |
| A04 | Motorsport events; new owner Nov 2023 ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) | [radraceway.com](https://radraceway.com/oval-track-more/) · feed unknown | Unknown | Unknown | Naming deal from Nov 2021 for five years ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) → **re-check name Dec 2026** |
| A05 | K-Days host; trade/consumer shows | [EXPO What's On](https://edmontonexpocentre.com/events/) · feed unknown | See B01 (K-Days is an event record) | [Parking & transit page](https://edmontonexpocentre.com/attend/getting-here/) | Operator Explore Edmonton ([CTV](https://www.ctvnews.ca/edmonton/article/overall-kdays-attendance-increases-to-783000-in-2026/)) |
| A06 | High school/amateur use ([City](https://www.edmonton.ca/attractions_events/commonwealth_stadium/history)); Huskies (CJFL) reported 2018 ([Edmonton Journal via PressReader](https://www.pressreader.com/canada/edmonton-journal/20180515/281517931767715)); FC Edmonton (folded for 2023) ([CBC](https://www.cbc.ca/lite/story/1.7379029)) | [City Clarke page](https://www.edmonton.ca/attractions_events/clarke-stadium) · feed unknown | Unknown | Same LRT as A01 | Temporary: Elks preseason May 29, 2026 ([Elks](https://www.goelks.com/2026/02/19/elks-announce-night-at-the-knothole/)) |
| A07 | Stingers (CEBL) — 12 home games May–Aug 2026 ([CFWE](https://cfweradio.ca/?p=36908)) | [Stingers event pages on EXPO site](https://edmontonexpocentre.com/events/edmonton-stingers-vs-winnipeg-sea-bears) · feed unknown | Unknown | As A05 | — |
| A08 | Conventions/banquets | [ECC floor plans](https://www.edmontonconventioncentre.com/planning-event/floorplans/) | Unknown | 3,000 parking spaces listed ([AMI](https://www.amimagazine.global/Meeting-Event-Venues/Edmonton-AB/Convention-Center/Edmonton-Convention-Centre-p57953481)) | — |
| A09 | Golden Bears football; Bears/Pandas soccer, rugby, track ([Bears & Pandas](https://bearsandpandas.ca/facilities/?id=2)) | [bearsandpandas.ca](https://bearsandpandas.ca/) · feed unknown | Unknown | — | — |
| A10 | Golden Bears & Pandas hockey | [bearsandpandas.ca](https://bearsandpandas.ca/facilities/?id=1) | Unknown | University LRT ([fan guide](https://bearsandpandas.ca/sports/2021/11/3/fan-guide-2021.aspx)) | — |
| A11 | Edmonton Opera, Alberta Ballet, Shumka ([Wikipedia](https://en.wikipedia.org/wiki/Northern_Alberta_Jubilee_Auditorium)) | [jubileeauditorium.com](http://www.jubileeauditorium.com) | Unknown | Health Sciences/Jubilee LRT | — |
| A12 | No junior A tenant since St. Albert Steel left 2012 ([Wikipedia](https://en.wikipedia.org/wiki/St._Albert_Steel)) | [City of St. Albert](https://stalbert.ca/rec/facilities/servus/amenities/arenas/) | Unknown | — | — |
| A13 | Edmonton Symphony Orchestra ([Clark Builders](https://www.clarkbuilders.com/francis-winspear-completion-project)) | [winspearcentre.com](https://www.winspearcentre.com/) | Unknown | LRT nearby | Completion hall opening status not verified |
| A14 | Sherwood Park Crusaders — BCHL since Jan 2024 ([Global News](https://globalnews.ca/news/10271164/bchl-games-in-alberta/amp/)) (County page still says AJHL — stale) | Team site · feed unknown | Unknown | — | **Proposal/approved:** new Crusaders arena ≥2,500 seats; rezoning approved Apr 9, 2024 ([Strathcona County](https://www.strathcona.ca/community-families/community-facilities/crusaders-arena-partnership/)); Sept 2026 target reported ([Global News](https://globalnews.ca/news/10413124/strathcona-county-family-says-crusaders-arena-would-end-century-old-farm)); **opening not confirmed** |
| A15 | Concerts | [midwaymusichall.com](https://midwaymusichall.com/booking) | Unknown | On-site parking ([Midway](https://midwaymusichall.com/booking)) | — |
| A16 | Spruce Grove Saints (BCHL) from Sept 19, 2025; previously Grant Fuhr Arena ([City of Spruce Grove](https://www.sprucegrove.org/government/news/city-and-saints-finalize-arena-partnership-at-heavy-metal-place/)) | [sgsaints.ca](https://www.sgsaints.ca/) · feed unknown | 5,000+ visited the May 10, 2025 grand opening (open house, not a game) ([GEC](https://gecarchitecture.com/work/heavy-metal-place)) | Co-located transit centre | Opened May 10, 2025 |
| A17 | MacEwan University hockey; Oilers/Oil Kings practice ([Rogers Place](https://www.rogersplace.com/fun-facts/)) | Unknown | Unknown | As A02 | — |
| A18 | Thoroughbred racing since Apr 28, 2019 ([Century release](https://www.thehorses.com/news/news-archives/item/2730:century-mile-racetrack-and-casino-opening-announcement)) | Unknown | Unknown | — | Sale of operations to Highfield; close expected Q4 2026–Q1 2027 ([SEC 8-K](https://www.sec.gov/Archives/edgar/data/0000911147/000091114726000047/cnty-20260924xex99_1.htm); [Daily Hive](https://dailyhive.com/edmonton/century-mile-downs-racetrack-casinos-sold-alberta)) |
| A19 | Touring concerts (e.g., Aug 15, 2026 show) ([Daily Hive](https://dailyhive.com/edmonton/august-concerts-edmonton-2026)) | Unknown | Unknown | — | — |
| A20 | Oilers until 2016 | — | — | — | Deconstruction in planning/design as of spring 2026 ([City](https://edmonton.ca/ColiseumDeconstruction)); separate Spectrum demolition expected done summer 2026 ([City](https://edmonton.ca/SpectrumDemolition)) |

---

## 3. Rooms around the 1,000 / 5,000 thresholds that need care

| Room | Why it needs care |
|---|---|
| Clarke Stadium (A06) | Official permanent seats are exactly [5,000](https://www.edmonton.ca/activities_parks_recreation/sports-fields-staffed); Wikipedia shows [6,000 from 2026](https://en.wikipedia.org/wiki/Clarke_Stadium) after temporary retrofit. Straddles the friction cut — classify per event. |
| EXPO Centre halls (A05) vs Arena (A07) | Arena is [4,200](https://edmontonexpocentre.com/plan-your-event/sporting-events) seated (muted). Halls reach [7,000](https://exploreedmonton.com/industry/offsite/edmonton-expo-centre)–[8,000](https://edmontonexpocentre.com/plan-your-event/entertainment-events/) only in movable/standing layouts. |
| Edmonton Convention Centre Hall ABC (A08) | [5,254](https://exploreedmonton.com/industry/offsite/edmonton-convention-centre) uses movable theatre chairs in a convention hall; not a fixed bowl. |
| Rogers Place reduced setups (A02) | Small-concert configuration reported at [~4,500](https://blog.mastermaq.ca/2016/01/16/rogers-place-sneak-peek-january-2016/). |
| RAD Torque Raceway (A04) | Drag strip [8,500](https://en.wikipedia.org/wiki/RAD_Torque_Raceway) is reported only; oval is 4,500. |
| Fan Park at ICE District (B-site) | Reported [5,000-person](https://en.wikipedia.org/wiki/Ice_District) paved site; ICE District Plaza is marketed for up to [five thousand](https://icedistrict.com/explore/plan-your-event/). Temporary/open site → Table B. |
| ~1,000 rooms | Downtown Community Arena [~1,000](https://blog.mastermaq.ca/2016/01/16/rogers-place-sneak-peek-january-2016/); Midway [1,167–1,450](https://midwaymusichall.com/booking); Thompson Family Arena [1,400](https://gecarchitecture.com/work/heavy-metal-place)–[1,700](https://globalnews.ca/news/11174193/heavy-metal-place-opens-in-spruce-grove-alta); Sherwood Park [1,500](https://www.strathcona.ca/recreation-events/recreation-centres/sherwood-park-arena-and-sports-centre/). Union Hall (~1,500 standing) appears only in a [low-quality guide](https://catchmovement.com/guides/biggest-event-venues-edmonton) — unverified, not rowed. |
| Below 1,000 (exclude from pre-list) | Winspear Completion hall [550–600](https://www.clarkbuilders.com/francis-winspear-completion-project); Sherwood Park Shell Rink [365](https://www.strathcona.ca/recreation-events/recreation-centres/sherwood-park-arena-and-sports-centre/). |

---

## 4. Table B — open sites and dated crowd events

| Event | Organizer | Exact dates (2026 unless noted) | Map point / footprint | Daily count | Peak concurrent | Multi-day / other measure | Count type & source | Status | Overlap / dedup with fixed rooms |
|---|---|---|---|---|---|---|---|---|---|
| B01 K-Days | Explore Edmonton | Jul 17–26 ([Daily Hive](https://dailyhive.com/edmonton/kdays-edmonton-2026)) | EXPO Centre & Exhibition Grounds, 7515 118 Ave NW | 2026 unknown; 2024 highest day 127,875 ([CTV](https://www.ctvnews.ca/edmonton/article/kdays-attendance-jumps-taste-of-edmontons-declines-organizers/)) | Unknown | 783,000 over 10 days; record 816,000 (2017) ([CTV](https://www.ctvnews.ca/edmonton/article/overall-kdays-attendance-increases-to-783000-in-2026/)) | Announced by organizer | Completed | K-Days concerts inside A05/A07 must not also be logged as room events |
| B02 Edmonton Fringe | Fringe Theatre | Aug 13–23 ([Fringe](https://www.fringetheatre.ca/festival/)) | Old Strathcona grounds, four city blocks + 37 venues ([Fringe FAQ](https://www.fringetheatre.ca/festival/faqs/)) | Unknown | Unknown | 825,000 site visits; 142,000 tickets to 209 shows ([CTV](https://www.ctvnews.ca/edmonton/article/fringe-attracts-825000-to-festival-sites-as-it-wraps-up-for-2026/)) | Announced; visits ≠ people ≠ tickets | Completed | Indoor shows are small rooms (<1,000) |
| B03 Taste of Edmonton | Taste of Edmonton | Dates **manual** (same period as K-Days per [CTV](https://www.ctvnews.ca/edmonton/article/overall-kdays-attendance-increases-to-783000-in-2026/)) | Churchill Square | Unknown | Unknown | 250,000 ([CTV](https://www.ctvnews.ca/edmonton/article/overall-kdays-attendance-increases-to-783000-in-2026/)) | Announced | Completed | None |
| B04 Edmonton Folk Music Festival | EFMF society | Aug 6–9 ([EFMF](https://edmontonfolkfest.org/)) | Gallagher Park | Unknown | Unknown | ~100,000 over four days ([Taproot](https://edmonton.taproot.news/roundups/arts/2026/08/13)) | Estimated (reported) | Completed | None. Edition conflict: 47th ([EFMF](https://edmontonfolkfest.org/)) vs 48th ([Global](https://globalnews.ca/news/11872237/2026-edmonton-folk-fest-headliners-include-nathaniel-rateliff-cat-power-of-monsters-and-men/)) |
| B05 Edmonton Heritage Festival | Heritage Festival Association | Aug 1–3; Sunday closed for weather ([Heritage Fest](https://www.heritagefest.ca/)) | Hawrelak Park (returned after rehab; prior years Exhibition Lands/Borden Park) ([Daily Hive](https://dailyhive.com/edmonton/edmonton-heritage-festival-park)) | Unknown | Unknown | Unknown | — | Completed | None |
| B06 Fan Park at ICE District programming | OEG Sports & Entertainment | e.g., Igloofest Mar 12–14; Neon Skies Jul 17–18 ([Songkick](https://www.songkick.com/venues/4495749-fan-park-at-ice-district)); Dom Dolla Sep 6 ([Live Nation](https://www.livenation.com/venue/KovZ917Atxw/fan-park-at-ice-district-events)) | 10128 104 Ave NW | Unknown | Site reported ~5,000 ([Wikipedia](https://en.wikipedia.org/wiki/Ice_District)) | Unknown | Site size reported; no event counts | Active | Same block as A02/A17; Oilers watch parties here are separate crowds from the game inside A02 |
| B07 World Triathlon Cup Edmonton | Unknown | **Manual** (coverage dated Jul 15) ([Global](https://globalnews.ca/video/4665755/castrol-raceways-magic-of-lights-display-returns-to-edmonton-region/)) | Hawrelak Park | Unknown | Unknown | Unknown | — | Completed | None |
| B08 Canada Day, Pride, marathon, Grey Cup festivals | Various | **Manual** | Various | Unknown | Unknown | Unknown | — | — | No Edmonton Grey Cup: 2026 Calgary, 2027 Regina ([TSN/CP](https://www.tsn.ca/cfl/article/regina-to-host-114th-grey-cup-in-2027/)) |

---

## 5. Teams/programs, dated home venues, and feed coverage

| Team / program | League | Home venue (dated) | Schedule source | Attendance / ticketing coverage |
|---|---|---|---|---|
| Edmonton Oilers | NHL | Rogers Place 2016– | [Rogers Place](https://www.rogersplace.com/events/oilers/) | Ticketmaster venue 140602 verified ([Rogers Place](https://www.rogersplace.com)) |
| Edmonton Oil Kings | WHL | Rogers Place 2016– | [Rogers Place](https://www.rogersplace.com/events/oilkings/) | Same Ticketmaster venue; attendance unknown |
| Edmonton Elks | CFL | Commonwealth 1978–; Clarke one-off May 29, 2026 | [goelks.com](https://www.goelks.com/) | Game attendance via Wikipedia (reported); TM room ID unknown |
| Edmonton Stingers | CEBL | EXPO Centre Arena (2026 season) | [EXPO events](https://edmontonexpocentre.com/events/) | Unknown |
| Edmonton Riverhawks / Collegiate Hawks | WCL / CCBC | RE/MAX Field 2022– | [Riverhawks](https://riverhawksbaseball.com/remax-field) | Unknown figures |
| Golden Bears & Pandas | U Sports | Clare Drake Arena (hockey); Foote Field (football, soccer, rugby) | [bearsandpandas.ca](https://bearsandpandas.ca/) | Unknown |
| MacEwan Griffins hockey | U Sports | Downtown Community Arena | [Rogers Place](https://www.rogersplace.com/fun-facts/) | Unknown |
| Spruce Grove Saints | BCHL (left AJHL 2024) | Grant Fuhr Arena → Thompson Family Arena from Sept 19, 2025 | [sgsaints.ca](https://www.sgsaints.ca/) | Unknown |
| Sherwood Park Crusaders | BCHL | Sherwood Park Arena (new arena not confirmed open) | Team site | Unknown |
| Energy City Cactus Rats (ex-Edmonton Prospects, renamed Mar 2025) | WCBL | Spruce Grove ballpark unfinished as of 2026 ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) | — | Home venue unresolved — manual |
| PWHL (neutral site) | PWHL | Rogers Place, 3 games 2025–26 | [PWHL](https://www.thepwhl.com/en/news/2026/april/13/pwhl-weekly-notebook-apr-13-2026) | No Edmonton franchise in 2026–27 expansion ([Front Office Sports](https://frontofficesports.com/article/pwhl-expansion-2026-27-detroit-vegas/)) |
| Pro soccer (men's/women's) | CPL / NSL | None; FC Edmonton folded for 2023 ([CBC](https://www.cbc.ca/lite/story/1.7379029)) | — | CPL/NSL interest only reported ([Northern Tribune](https://northerntribune.ca/?p=83074)) |

**Gaps:** no public Ticketmaster room IDs verified except Rogers Place; Commonwealth, EXPO, RE/MAX Field and suburban arenas need manual matching. Ticketing platforms observed: Ticketmaster (Rogers Place), Frontgate (Folk Fest) ([EFMF](https://edmontonfolkfest.org/?p=18674)), Fringe's own box office ([Fringe](https://www.fringetheatre.ca/festival/schedules/)).

---

## 6. Conflicts, duplicate risks, inaccessible sources, and changes through 2028

### Conflicting sources (preserved)

- **Rogers Place** official 18,500 / 20,030 vs common 18,347 / 20,734 (sources in A2). Neither changes classification.
- **Commonwealth surface:** City history text still describes natural grass, but its own upgrade table lists artificial turf installed in 2015 ([City](https://www.edmonton.ca/attractions_events/commonwealth_stadium/history)); a grass pitch was installed for the June 1, 2026 friendly ([CP24](https://www.cp24.com/news/sports/2026/01/14/edmonton-to-host-canada-friendly-match-vs-uzbekistan-before-fifa-world-cup-begins/)).
- **Clarke Stadium** 5,000 (City) vs 6,000 (Wikipedia, 2026) — **changes classification**.
- **Clare Drake Arena** 2,600 / 2,700 / 2,800; **Jubilee** 2,416–2,731; **Midway** 1,167 vs 1,450; **Thompson Family Arena** 1,400 vs 1,700.
- **2027 Grey Cup date** Nov 5 ([PANOW](https://panow.com/?p=3055893)) vs Nov 7 ([CJME](https://www.cjme.com/2025/10/27/930575/)) — outside scope (Regina).

### Duplicate / matching risks

- **Same street address:** Commonwealth and Clarke share 11000 Stadium Road — never match by address alone.
- **ICE District cluster:** Rogers Place (10220 104 Ave), Ford Hall, Downtown Community Arena, ICE District Plaza and Fan Park (10128 104 Ave) — proximity matching will merge them.
- **Exhibition Lands:** EXPO halls, EXPO Arena/Hall D/"Flair Airlines Hangar", K-Days grounds, North Plaza, and the closed Coliseum.
- **Multi-rink complexes:** Heavy Metal Place (two rinks), Servus Place (three), Sherwood Park (two).
- **Resort/racino listings:** River Cree casino vs venue vs Marriott; Century Mile casino vs racetrack.
- **Ticket add-ons:** suites, parking and premium packages at Rogers Place and Commonwealth can appear as extra listings.
- **Stale identifiers:** Ticketmaster "Telus Field" venue page from 2016; Songkick shows a "Pawn Shop Live – Old Location" entry ([Songkick](https://songkick.com/concerts/43177879-bini-at-edmonton-expo-centre)).

### Inaccessible or limited sources

No page failed to fetch. Edmonton Journal/Postmedia items were used only through syndicated copies (PressReader, Yahoo); no paywall was bypassed. Commonwealth's official capacity figure was not found on a City page; Wikipedia is the reported source.

### Data-rights and calendar notes

Venue capacities from Wikipedia and aggregators (Songkick, Vivid Seats, Bandsintown) are reported, not licensed feed data. Ticketmaster data use is subject to its terms. Events run on Mountain Time; multi-day festivals (K-Days, Fringe, Folk Fest, Heritage Festival) should be logged as one event record per day attended, not per multi-day total.

### Confirmed / scheduled changes and proposals through 2028

| Change | Type | Date | Re-check |
|---|---|---|---|
| Heavy Metal Place opened; Saints moved in | Confirmed | May 10, 2025 / Sept 19, 2025 ([City](https://www.sprucegrove.org/government/news/city-and-saints-finalize-arena-partnership-at-heavy-metal-place/)) | — |
| Commonwealth new turf | Confirmed | For 2026 season ([CTV](https://www.ctvnews.ca/edmonton/article/commonwealth-stadium-getting-new-elks-turf-for-2026/)) | — |
| Heritage Festival back at Hawrelak | Confirmed | Aug 1–3, 2026 ([Heritage Fest](https://www.heritagefest.ca/)) | — |
| Century Mile operations sale | Scheduled | Close Q4 2026–Q1 2027 ([SEC](https://www.sec.gov/Archives/edgar/data/0000911147/000091114726000047/cnty-20260924xex99_1.htm)) | Mar 2027 |
| RAD Torque five-year naming deal ends | Inferred from Nov 2021 start | ~Nov 2026 ([Wikipedia](https://en.wikipedia.org/wiki/RAD_Torque_Raceway)) | Dec 2026 |
| 2027 World Juniors at Rogers Place | Scheduled | Dec 26, 2026–Jan 5, 2027 ([TSN/CP](https://www.tsn.ca/hockey-canada/article/edmonton-red-deer-to-host-2026-world-juniors/)) | Jan 2027 |
| Coliseum deconstruction | Scheduled (planning/design) | Spring 2026 update ([City](https://edmonton.ca/ColiseumDeconstruction)) | Jan 2027 |
| ICE District Event Park (~$250M) | Proposal → design | Construction expected to begin 2027 ([OEG](https://www.oeg.ca/news/oegse-and-city-select-event-park-designers); [Yahoo/Journal](https://ca.news.yahoo.com/big-step-ice-districts-event-211828455.html)) | Q2 2027 |
| Sherwood Park Crusaders arena | Approved; opening unconfirmed | ≥2,500 seats ([Strathcona County](https://www.strathcona.ca/community-families/community-facilities/crusaders-arena-partnership/)) | Now / Jan 2027 |
| Spruce Grove ballpark (Cactus Rats) | Unfinished | As of 2026 ([Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field)) | Apr 2027 |
| Commonwealth modernization | Proposal, unfunded | ~$250M estimate ([3DownNation](https://3downnation.com/2024/09/05/proposed-upgrades-to-commonwealth-stadium-would-cost-250-million-no-funding-in-place/)) | Each City budget cycle |
| 2028 World Cup of Hockey semis + final | Scheduled | Feb 2028 ([THN](https://thehockeynews.com/news/latest-news/world-cup-of-hockey-hosts-were-great-choices-but-questions-remain)) | Confirm venue & dates mid-2027 |
