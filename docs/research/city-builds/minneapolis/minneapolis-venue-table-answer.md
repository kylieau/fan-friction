# Minneapolis–St. Paul venue table — research answer

**As of:** Monday, October 12, 2026 (America/Chicago, Central Time).
**Scope:** public data only, gathered via web search on the date above. No app code, flags, formula constants, ratings or cost commitments.

**Source labels used throughout**

- **[O] Official** — venue, team, league, university, government or organizer page.
- **[R] Reported** — news or trade press (Star Tribune, MPR, KSTP, Pollstar, etc.).
- **[E] Estimated / secondary** — Wikipedia, aggregators or fan guides. Used only where no official figure was found, and flagged.
- **Confirmed** = happened or is in effect. **Scheduled** = announced with a date. **Proposal** = not funded or approved.

Venue capacity is never treated as attendance. Observed crowds are shown separately and only where a source published them.

---

## 1. Recommended boundary and uncertain edge venues

### Recommendation

Use the **seven-county Metropolitan Council region** (Anoka, Carver, Dakota, Hennepin, Ramsey, Scott, Washington) as the **core boundary**. The Met Council region is the planning jurisdiction for the Twin Cities and is the default geography used by Minnesota Compass ([O] [MN Compass / Met Council](https://www.mncompass.org/data-insights/articles/bigger-better-todd-graham-looks-new-minneapolis-st-paul-msa-metropolitan)). Its 2023 population estimate is 3,222,455 ([O] [Met Council 2023 estimates](https://www.lrl.mn.gov/docs/2024/Other/241171.pdf)).

**Why this works for the existing city model:** every confirmed 5,000+ fixed setup found in this pass sits inside these seven counties, including the suburban outliers — Shakopee (Scott), Eagan (Dakota), Blaine (Anoka) and Falcon Heights (Ramsey).

Treat the rest of the federal **Minneapolis–St. Paul–Bloomington, MN-WI MSA** as an **edge ring**, assessed venue by venue. The current MSA list includes Chisago, Isanti, Le Sueur, Sherburne, Sibley and Wright counties in Minnesota plus Pierce and St. Croix in Wisconsin ([O] [MN DEED MSA list](https://apps.deed.state.mn.us/assets/lmi/areamap/msa.shtml)). The Met Council's demographer has noted the MSA was loosened in its last major expansion, so it is a weaker proxy for event catchment than the seven-county core ([O] [MN Compass](https://www.mncompass.org/data-insights/articles/bigger-better-todd-graham-looks-new-minneapolis-st-paul-msa-metropolitan)).

### Two event clusters

| Cluster | Sub-areas | Main venues |
|---|---|---|
| **Minneapolis** | Downtown East; North Loop / Warehouse District; Hennepin Ave theatre district; University of Minnesota East Bank; Upper Harbor (north) | U.S. Bank Stadium, The Armory, Target Field, Target Center, First Avenue, Fillmore, Orpheum/State/Pantages, Huntington Bank Stadium, Williams Arena / Maturi Pavilion, 3M Arena at Mariucci, Ridder Arena, Northrop, CPAC amphitheater (2027) |
| **Saint Paul** | Downtown (Kellogg Blvd block + Lowertown); Midway; Summit Ave; Falcon Heights fairgrounds | Grand Casino Arena, Roy Wilkins Auditorium, RiverCentre, Palace Theatre, CHS Field, Allianz Field, Lee & Penny Anderson Arena, State Fair Grandstand / Warner Coliseum |
| **Suburban (core counties)** | Shakopee; Eagan; Blaine | Mystic Lake Amphitheater, TCO Stadium, NSC Stadium |

### Edge cases — keep separate, decide individually

| Venue / event | Location | Why it is an edge case | Recommended treatment |
|---|---|---|---|
| Somerset Amphitheater | Somerset, WI (St. Croix County — inside MSA) | Open-site festival grounds; layout-dependent total of 20,000–40,000 ([E] [Wikipedia](https://en.wikipedia.org/wiki/Somerset_Amphitheater)). 2026 activity **not verified** in this pass. | Edge; Table B event records only, once current activity is confirmed. |
| Minnesota Renaissance Festival | Shakopee (Scott — core county) | Multi-weekend open-site event; organizer cites about 300,000 per year ([R] [KARE 11](https://kare11.com/article/news/local/kare11-saturday/the-return-of-the-minnesota-renaissance-festival-shakopee/89-be3bc424-5543-4125-af08-7f3975d849f2)). | Include in Table B; not a fixed room. |
| Canterbury Park | Shakopee | Horse-racing grounds adjacent to Mystic Lake Amphitheater (the amphitheater site was sold from Canterbury land) ([E] [Wikipedia](https://en.wikipedia.org/wiki/Mystic_Lake_Amphitheater)). Grandstand capacity **unknown**. | Candidate; needs capacity research before listing. |
| Ledge Amphitheater | Waite Park (St. Cloud MSA) | About 6,000 capacity ([R] [TCB](https://tcbmag.com/amphitheater-mysteries/)), but outside the Twin Cities MSA. | **Exclude** (different metro). |
| Treasure Island, Grand Casino Hinckley, Brainerd raceway, Duluth venues | Goodhue / Pine / Crow Wing / St. Louis counties | Share a state or marketing label only; not in the Twin Cities MSA list ([O] [DEED](https://apps.deed.state.mn.us/assets/lmi/areamap/msa.shtml)). | **Exclude.** Note the naming collision risk with Grand Casino Arena (section 5). |

---

## 2. Table A — fixed venues and rooms

Table A is split into three linked parts so each row stays readable. **The ID column joins them.** One ID = one distinct room/building. Rows are ordered by largest sourced capacity.

### A1 — Identity, location, status

| ID | Current official name | Aliases since 2016 (rename dates) | Municipality / neighborhood | Scope | Coordinates (precision) | Roof | Status through 2028 |
|---|---|---|---|---|---|---|---|
| A01 | U.S. Bank Stadium | none | Minneapolis, Downtown East; 401 Chicago Ave ([E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium)) | Core | 44.974, -93.258 (3 dp, Wikipedia infobox) | Fixed, translucent (indoor) | Confirmed active. Scheduled: NCAA DI Wrestling, March 2028 ([O] [Meet Minneapolis](https://www.minneapolis.org/media/news-releases/minneapolis-to-host-2028-ncaa-wrestling-2027-ncaa-mens-basketball/)); NFL Draft 2028, dates TBA ([R] [FOX Sports](https://www.foxsports.com/stories/nfl/vikings-will-host-2028-nfl-draft-u-s-bank-stadium-minneapolis-st-paul)). |
| A02 | Huntington Bank Stadium | TCF Bank Stadium until **June 29, 2021** (Regents approval) ([O] [Gopher Athletics](https://gophersports.com/news/2021/6/29/athletics-welcome-to-huntington-bank-stadium)) | Minneapolis, UMN Stadium Village; 420 SE 23rd Ave ([E] [Wikipedia](https://en.wikipedia.org/wiki/Huntington_Bank_Stadium)) | Core | Not captured — geocode from address | Open-air | Confirmed active. |
| A03 | Target Field | none | Minneapolis, North Loop | Core | Not captured | Open-air with canopy ([O] [MLB](https://www.mlb.com/press-release/press-release-winter-classic-at-target-field-6-28-21)) | Confirmed active. |
| A04 | Target Center | none | Minneapolis, downtown; 600 First Ave N ([E] [Wikipedia](https://en.wikipedia.org/wiki/Target_Center)) | Core | Not captured | Indoor | Active. Lease runs to June 2035; owners seek a new arena (**proposal**, no site or date) ([R] [Axios](https://www.axios.com/local/twin-cities/2026/07/13/target-center-future-minneapolis)). Scheduled: NCAA men's 1st/2nd rounds 2027 ([O] [Meet Minneapolis](https://www.minneapolis.org/media/news-releases/minneapolis-to-host-2028-ncaa-wrestling-2027-ncaa-mens-basketball/)). |
| A05 | Grand Casino Arena | **Xcel Energy Center** until **Sept 3, 2025** ([R] [WDIO](https://www.wdio.com/sports/xcel-energy-center-officially-renamed-to-grand-casino-arena/)); naming deal runs through 2039 ([R] [KAAL/KSTP](https://www.kaaltv.com/news/grand-casino-arena-announced-as-new-name-for-the-home-of-the-wild/)) | Saint Paul, downtown; 199 Kellogg Blvd W ([E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena)) | Core | 44.94472, -93.10111 (5 dp, [E] [Simple Wikipedia](https://simple.wikipedia.com/wiki/Xcel_Energy_Center)) | Indoor | Active. 2026 bonding gave $10M for arena planning/design only ([R] [Villager](https://www.myvillager.com/news/general_news/legislature-approves-money-for-roy-wilkins-west-7th-street/article_9e5884ac-c49c-4a70-b565-1d578cbe4269.html)); full $450M arena renovation remains a **proposal** ([O] [City of Saint Paul](https://www.stpaul.gov/news/saint-paul-mayor-kaohly-her-minnesota-wild-announce-framework-agreement-funding-renovation)). |
| A06 | Allianz Field | none | Saint Paul, Midway; 400 Snelling Ave N ([E] [Wikipedia](https://en.wikipedia.org/wiki/Allianz_Field)) | Core | Not captured | Open-air, canopy | Active. Corner expansion to about 24,474 is a long-term **proposal** only ([E] [Wikipedia](https://en.wikipedia.org/wiki/Allianz_Field)). |
| A07 | Mystic Lake Amphitheater | none (named 2025, opened 2026) | Shakopee; 700 Canterbury Rd ([E] [Wikipedia](https://en.wikipedia.org/wiki/Mystic_Lake_Amphitheater)) | Core (Scott County) | 44.79111, -93.47361 (5 dp, Wikipedia) | Covered lower bowl + open lawn ([R] [Development Tracker](https://thedevelopmenttracker.com/news/mystic-lake-secures-naming-rights-for-shakopee-amphitheater)) | **Opened June 20, 2026** ([R] [Star Tribune](https://www.startribune.com/mystic-lake-amphitheater-opening-concert-setting-stage-morris-time-motion-city-live-nation-shakopee/601851731)). Shakopee considering an earlier 10 p.m. curfew after noise complaints (**proposal**) ([E] [Wikipedia](https://en.wikipedia.org/wiki/Mystic_Lake_Amphitheater)). |
| A08 | Williams Arena | Sponsored alias "The Barn by Blue Cross and Blue Shield of Minnesota" (date not found) ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-williams-arena-html)) | Minneapolis, UMN East Bank; 1925 University Ave SE | Core | Not captured | Indoor | Active. **Same building as A15** (Maturi Pavilion). |
| A09 | Minnesota State Fair Grandstand | none | Falcon Heights (State Fairgrounds, 322 acres) ([O] [MN State Fair](https://www.mnstatefair.org/updates/2025-annual-meeting)) | Core | Not captured | Open-air seating | Active; fair-season concerts. Parent ground = Table B event B01. |
| A10 | 3M Arena at Mariucci | Mariucci Arena; 3M naming announced **July 2017** ([R] [ISSA](https://www.issa.com/media/news/3m-teams-with-university-of-minnesota-athletics)) | Minneapolis, UMN East Bank | Core | Not captured | Indoor | Active; seats added in fall 2023 ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-mariucci-arena-html)). Tunnel-linked to A18. |
| A11 | The Armory | Minneapolis Armory | Minneapolis, Downtown East | Core | Not captured | Indoor | Active (reopened 2018) ([O] [Meet Minneapolis](https://www.minneapolis.org/sports-minneapolis/venues/the-armory)). 2026 calendar not checked. |
| A12 | Community Performing Arts Center (CPAC) amphitheater at Upper Harbor | Upper Harbor Terminal / UHT amphitheater | Minneapolis, north riverfront off Dowling Ave N & I-94 ([O] [City of Minneapolis](https://www.minneapolismn.gov/news/2026/may/upper-harbor-amphitheater/)) | Core | Not captured | Outdoor; stage enclosable in winter ([E] [SHoP](https://www.shoparc.com/projects/uht-amphitheater/)) | **Under construction**; groundbreaking May 4, 2026; **scheduled** opening summer 2027 ([O] [City of Minneapolis](https://www.minneapolismn.gov/news/2026/may/upper-harbor-amphitheater/)). |
| A13 | CHS Field | none | Saint Paul, Lowertown; 360 Broadway St ([E] [Wikipedia](https://en.wikipedia.org/wiki/CHS_Field)) | Core | Not captured | Open-air | Active. |
| A14 | TCO Stadium (at Twin Cities Orthopedics Performance Center / Viking Lakes) | — | Eagan | Core (Dakota) | Not captured | Open-air | Active. A railing section collapsed after a high-school game on Sept 3, 2026 ([E] [Wikipedia](https://en.wikipedia.org/wiki/Twin_Cities_Orthopedics_Performance_Center)) — re-check repair status. |
| A15 | Maturi Pavilion | Sports Pavilion until **Aug 2017** ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-maturi-pavilion-html)) | Minneapolis, UMN East Bank; 1925 University Ave SE (west end of Williams Arena building) ([R] [WCCO/CBS](https://www.cbsnews.com/minnesota/news/joel-maturi-sports-pavilion/)) | Core | Not captured | Indoor | Active. New pro tenant from Jan 2027 (scheduled). |
| A16 | Roy Wilkins Auditorium ("Legendary Roy Wilkins Auditorium") | — | Saint Paul, downtown (Kellogg Blvd block with A05) | Core | Not captured | Indoor | Active. **$40M state bonding approved May 2026** for renovation; timeline not found ([R] [Villager](https://www.myvillager.com/news/general_news/legislature-approves-money-for-roy-wilkins-west-7th-street/article_9e5884ac-c49c-4a70-b565-1d578cbe4269.html)). |
| A17 | National Sports Center Stadium (NSC Stadium) | — | Blaine | Core (Anoka) | Not captured | Open-air | Active (MNUFC2 2026 home matches) ([O] [MNUFC](https://www.mnufc.com/mnufc2/news/know-before-you-go-mnufc2-vs-tacoma-defiance)). |
| A18 | Lee & Penny Anderson Arena | — | Saint Paul, University of St. Thomas south campus; 2260 Summit Ave ([E] [Stadium Journey](https://www.stadiumjourney.com/stadiums/lee-and-penny-anderson-arena-st-thomas-tommies)) | Core | Not captured | Indoor | **Opened Oct 24, 2025** ([R] [FOX 9](https://www.fox9.com/news/st-thomas-first-campus-hockey-arena-oct-2025)). |
| A19 | Ridder Arena | — | Minneapolis, UMN East Bank; address given as 1901 4th St SE ([E] [Wikipedia](https://en.wikipedia.org/wiki/Ridder_Arena)) vs 1815 4th St ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html)) | Core | Not captured | Indoor | Active. Tunnel-linked to A10. |
| A20 | Northrop | Northrop Auditorium | Minneapolis, UMN East Bank | Core | Not captured | Indoor | Active (not re-checked). |
| A21 | Palace Theatre | — | Saint Paul, downtown | Core | Not captured | Indoor | Active (operator First Avenue + JAM) ([E] [Wikipedia](https://en.wikipedia.org/wiki/Palace_Theatre_(Saint_Paul,_Minnesota))). |
| A22 | Orpheum Theatre | Owner renamed from Hennepin Theatre Trust to **Hennepin Arts** (date not captured) ([E] [Wikipedia](https://en.wikipedia.org/wiki/Orpheum_Theatre_(Minneapolis))) | Minneapolis, 910 Hennepin Ave | Core | Not captured | Indoor | Active. |
| A23 | State Theatre | — | Minneapolis, Hennepin Ave | Core | Not captured | Indoor | Active (not re-checked). |
| A24 | The Fillmore Minneapolis | — | Minneapolis, next to Target Field ([R] [Pollstar](https://news.pollstar.com/2019/08/08/fillmore-minneapolis-1850-capacity-venue-to-open-in-feb-2020/)) | Core | Not captured | Indoor | Planned Feb 2020 opening; **actual opening date not verified** in this pass. |
| A25 | First Avenue (Main Room) | — | Minneapolis, 701 First Ave N ([E] [Wikipedia](https://en.wikipedia.org/wiki/First_Avenue_(nightclub))) | Core | Not captured | Indoor | Active. Same building as 7th St Entry (sub-threshold). |
| A26 | Pantages Theatre | — | Minneapolis, Hennepin Ave | Core | Not captured | Indoor | Active (not re-checked). |

### A2 — Capacity by actual configuration

Each configuration is its own line. Seated and standing figures are never merged. **Capacity is not attendance.**

| ID | Configuration | Capacity | Type | Label & source | Dated capacity changes |
|---|---|---|---|---|---|
| A01 | NFL football | 66,202 current | Seated | [E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium) | 66,200 (2016) → 66,860 (2017–18) → 66,467 (2019–21) → 66,202 ([E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium)). Official SBLII guide said "66,400+" bowl seats ([O] [USBS](https://www.usbankstadium.com/assets/doc/U.S.-Bank-Stadium-Fact-and-Media-Guide-for-SBLII-dad2800067.pdf)). Planned 66,200 at opening ([O] [Vikings](https://www.vikings.com/news/u-s-bank-stadium-seat-installation-helped-by-innovation-teamwork-16972410)). |
| A01 | Expanded special event | up to 73,000 | Seated (rail-sliding seats) | [E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium); [R] [Ticketmaster blog](https://blog.ticketmaster.com/us-bank-stadium-guide/) | Sliding-seat system designed to add seats for Super Bowl LII / Final Four ([O] [Vikings](https://www.vikings.com/news/u-s-bank-stadium-seat-installation-helped-by-innovation-teamwork-16972410)). |
| A01 | Concert (end- or centre-stage) | **unknown** — no official figure found | — | — | Do not substitute the football number. |
| A02 | College football | 50,805 | Seated | [E] [Wikipedia](https://en.wikipedia.org/wiki/Huntington_Bank_Stadium); [E] [Stadium Journey](https://www.stadiumjourney.com/stadiums/huntington-bank-stadium-minnesota-golden-gophers) | No official current page fetched. |
| A03 | Baseball | 38,544 (approx.) | Seated | [O] [MLB/Twins press release, June 2021](https://www.mlb.com/press-release/press-release-winter-classic-at-target-field-6-28-21) | 39,504 at 2010 opening ([E] [BaseballParks.com](https://baseballparks.com/?p=2316)). Ticketmaster's guide lists both figures ([R] [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-target-field-minneapolis-mn/)). |
| A03 | Outdoor hockey (2022 NHL Winter Classic) | not published in sources found | — | [O] [MLB](https://www.mlb.com/press-release/press-release-winter-classic-at-target-field-6-28-21) | One-off configuration. |
| A04 | Basketball | 18,798 | Seated | [E] [Wikipedia](https://en.wikipedia.org/wiki/Target_Center) | 2017 renovation (~$140M) ([O] [AEG](https://www.aegworldwide.com/node/496)). Built with 19,356 seats in 1990 ([O] [Mortenson](https://www.mortenson.com/projects/target-center)). |
| A04 | Hockey | 17,500 | Seated | [E] [Wikipedia](https://en.wikipedia.org/wiki/Target_Center) | — |
| A04 | Concert | up to 20,500 | Seated + floor | [E] [Wikipedia](https://en.wikipedia.org/wiki/Target_Center); operator rounds to 20,000 ([O] [AEG](https://www.aegworldwide.com/node/496)) | — |
| A05 | Hockey | 17,954 | Seated | [E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena) | 18,064 (2000–2012) → 17,954 (2012–present) ([E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena)). |
| A05 | Concert — end stage | 12,999 | Seated + floor | [E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena) | — |
| A05 | Concert — centre stage | 20,554 | Seated + floor | [E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena); operator says configurations exceed 20,000 ([O] [arena "About"](https://www.xcelenergycenter.com/guest-services/about)) | — |
| A06 | Soccer | 19,400 total | Seated **including** a safe-standing supporters' section | [O] [MNUFC](https://www.mnufc.com/news/mnufc-allianz-field) | Standing section given as 2,920 ([E] [StadiumDB](https://stadiumdb.com/stadiums/usa/allianz_field)) vs 2,800 ([R] [World Construction Network](https://worldconstructionnetwork.com/?p=22329)). Do not count it as seated. |
| A07 | Concert | 19,000 | Mixed: covered seats + lawn (split **unknown**) | [O] [SMSC / Live Nation release](https://shakopeedakota.org/mystic-lake-amphitheater-to-open-summer-2026-in-the-twin-cities/) | New 2026. |
| A08 | Basketball | 14,625 | Seated | [O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-williams-arena-html) | 14,100 (1928) → 18,025 (1950 remodel) → 14,321 (1993–97) → 14,625 (1997–) ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-williams-arena-html); [E] [Wikipedia](https://en.wikipedia.org/wiki/Williams_Arena)). |
| A09 | Grandstand concert | about 13,000 | Seated (grandstand) | [R] [Racket, citing Star Tribune critic Jon Bream](https://racketmn.com/every-mn-state-fair-grandstand-music-lineup-ever-ranked) — **no official figure found** | Temporary seats raised it from 13,000 to 17,000 during the 2003 remodel phase ([R] [MPR 2003](https://news.minnesota.publicradio.org/features/2003/08/18_cunninghamg_grandstand/)). Standing track/floor capacity unknown. |
| A10 | Hockey | 10,257 | Seated | [O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-mariucci-arena-html) | 9,305 (1993) → 9,700 (1996–97) → 10,257 after fall-2023 renovation ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-mariucci-arena-html)). Older official page says 10,000 ([O] [Ridder page](https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html)). |
| A11 | Concert | 8,400 | **Mostly standing** GA floor + mezzanine seating (split unknown) | [R] [HITS / Live Nation](https://hitsdailydouble.com/news&id=311581); [R] [The Current](https://www.thecurrent.org/feature/2018/01/30/inside-the-armory-minneapoliss-newest-concert-venue-gets-ready-for-nomadic-live-megastar) | Movable layout — do not count as seated. |
| A12 | Concert | 8,000 (planned) | Mixed: about 6,000 fixed seats + lawn | [O] [City of Minneapolis](https://www.minneapolismn.gov/news/2026/may/upper-harbor-amphitheater/); fixed seats per [E] [SHoP Architects](https://www.shoparc.com/projects/uht-amphitheater/) | Range 8,000–8,500 reported ([R] [Insight News](https://www.insightnews.com/news/groundbreaking-held-for-upper-harbor-amphitheater/article_869d70e5-05c8-401c-ac41-b3e4c174bdd1.html)). Not open. |
| A13 | Baseball | 7,210 stated | Seats (~7,000) + berm/standing | [O] [MLB / Twins](https://www.mlb.com/twins/news/explore-chs-field-home-of-the-st-paul-saints); seat count [E] [Baseball-Reference](https://www.baseball-reference.com/bullpen/CHS_Field) | — |
| A14 | Soccer — base | 5,500 | Seated | [R] [KARE 11](https://kare11.com/article/news/local/minnesota-aurora-fc-playing-home-games-tco-stadium/89-ae2c80f2-db2a-4abf-aab6-81482a282506) | Wikipedia lists 6,000 ([[E]](https://en.wikipedia.org/wiki/Twin_Cities_Orthopedics_Performance_Center)). |
| A14 | Soccer — expanded | 6,987 (2023 max, temporary seats) | Seated incl. temporary | [O] [Minnesota Aurora](https://mnaurora.com/?p=1777) | Expansion is event-specific. |
| A15 | Volleyball | 5,700 | Seated | [E] [Wikipedia (Gopher volleyball)](https://en.wikipedia.org/wiki/Minnesota_Golden_Gophers_women%27s_volleyball) | Conflicts: 5,500 ([E] [Special Olympics USA Games](https://2026specialolympicsusagames.org/sports/venues/maturi-pavilion)); "5,000-seat" in 2017 ([R] [WCCO/CBS](https://www.cbsnews.com/minnesota/news/joel-maturi-sports-pavilion/)). **Threshold-sensitive.** |
| A16 | Auditorium (general) | 5,800 | Seated (configuration unspecified) | [R] [Pioneer Press via Yahoo](https://www.yahoo.com/news/articles/bonding-bill-50m-st-paul-190200277.html) | 5,844 also reported ([R] [Mpls.St.Paul Magazine](https://mspmag.com/arts-and-culture/concert-venues/)). Concert/standing figure unknown. **Threshold-sensitive.** |
| A17 | Soccer | 5,500 vs 10,350 | Seated (unclear) | [E] [Wikipedia (MNUFC2)](https://en.wikipedia.org/wiki/Minnesota_United_FC_2) vs [E] [FotMob](https://www.fotmob.com/de/teams/1348105/overview/mnufc2,teams) | **Unresolved conflict**; no official NSC figure found. |
| A18 | Hockey | 4,000 | Seated | [R] [The Stadium Business](https://www.thestadiumbusiness.com/?p=86726) | — |
| A18 | Basketball | 5,300 | Seated | [R] [The Stadium Business](https://www.thestadiumbusiness.com/?p=86726) | Planning page said about 5,500 ([O] [St. Thomas](https://www.stthomas.edu/neighbors/news/update-on-new-facility.html)). |
| A18 | Concert | 6,000 | Seated + floor | [E] [Stadium Journey](https://www.stadiumjourney.com/stadiums/lee-and-penny-anderson-arena-st-thomas-tommies) only | Unverified by official source. |
| A19 | Hockey | 3,400 | Seated (incl. club and suites) | [O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html) | — |
| A20 | Theatre | 2,868 | Seated | [R] [Mpls.St.Paul Magazine](https://mspmag.com/arts-and-culture/concert-venues/) | — |
| A21 | Concert | 2,800 | ~2,000 standing floor + ~800 balcony seats | [R] [MPR](https://www.mprnews.org/story/2016/12/15/palace-theater-open-house); [R] [Pollstar](https://news.pollstar.com/2017/03/17/palace-theatre-opens-in-st-paul/) | Also reported as 2,500 ([R] [Pollstar 2019](https://news.pollstar.com/2019/08/08/fillmore-minneapolis-1850-capacity-venue-to-open-in-feb-2020/)). |
| A22 | Theatre | 2,579 | Seated | [E] [Wikipedia](https://en.wikipedia.org/wiki/Orpheum_Theatre_(Minneapolis)) | — |
| A23 | Theatre | 2,181 | Seated | [R] [Mpls.St.Paul Magazine](https://mspmag.com/arts-and-culture/concert-venues/) | — |
| A24 | Concert | 1,850 | Mostly standing + box seats | [R] [Pollstar](https://news.pollstar.com/2019/08/08/fillmore-minneapolis-1850-capacity-venue-to-open-in-feb-2020/) | — |
| A25 | Concert | 1,550 | Standing | [E] [Wikipedia](https://en.wikipedia.org/wiki/First_Avenue_(nightclub)) | 7th St Entry (250) is a separate sub-threshold room. |
| A26 | Theatre | 1,014 | Seated | [R] [Mpls.St.Paul Magazine](https://mspmag.com/arts-and-culture/concert-venues/) | **Threshold-sensitive (≈1,000).** |

### A3 — Tenants, schedules, ticketing, observed attendance, access

"Feed coverage" means whether an official ticketing platform is publicly stated. Whether *your* feed matches the exact room is **unknown** unless stated — no feed matching was tested in this pass.

| ID | Current / former tenants (dated) | Official schedule link | Stated ticketing platform | Observed attendance (separate from capacity) | Access & parking facts |
|---|---|---|---|---|---|
| A01 | Vikings (NFL) 2016–; Super Bowl LII 2018; 2019 Final Four ([E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium)) | [usbankstadium.com/news](https://www.usbankstadium.com/news/all) | Not confirmed from an official page | Stadium reported 1.6 million guests over 616 events in its early period (span not stated) ([O] [SBLII guide](https://www.usbankstadium.com/assets/doc/U.S.-Bank-Stadium-Fact-and-Media-Guide-for-SBLII-dad2800067.pdf)) | Light rail at stadium plaza; venue manages no public lots; 20,000+ private spaces within ~20-min walk ([R] [Ticketmaster blog](https://blog.ticketmaster.com/us-bank-stadium-guide/)). |
| A02 | Gophers football 2009–; **Vikings 2014–15 (temporary)** ([E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium)); **Minnesota United 2017–18** ([E] [Wikipedia](https://en.wikipedia.org/wiki/Sports_in_Minneapolis%E2%80%93Saint_Paul)) | gophersports.com | unknown | MNUFC announced 23,138 for its March 2018 home opener there ([R] [SportsBusiness Daily](https://www.sportsbusinessdaily.com/Daily/Issues/2018/03/27/Facilities/Allianz-Field.aspx)) | Green Line, Stadium Village ([E] [Wikipedia](https://en.wikipedia.org/wiki/Huntington_Bank_Stadium)); limited nearby parking ([E] [Stadium Journey](https://www.stadiumjourney.com/stadiums/huntington-bank-stadium-minnesota-golden-gophers)). |
| A03 | Twins (MLB) 2010– ([O] [MLB](https://www.mlb.com/press-release/press-release-winter-classic-at-target-field-6-28-21)) | mlb.com/twins/ballpark | twinsbaseball.com / MLB Ballpark app ([O] [MLB 2021](https://mlb.com/press-release/press-release-twins-announce-target-field-capacity-increases)) | Largest crowd was a Kenny Chesney concert (figure not stated) ([R] [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-target-field-minneapolis-mn/)) | Light rail, Northstar commuter rail, bus hub; 20,000 parking spots within five blocks ([O] [Ballpark Authority](https://ballparkauthority.com/?p=299)). |
| A04 | Timberwolves (NBA) 1990–; Lynx (WNBA) — **2017 season moved to Xcel** ([E] [Simple Wikipedia](https://simple.wikipedia.com/wiki/Xcel_Energy_Center)); Minnesota Myth (AFL) 2024, one game before folding ([E] [Wikipedia](https://en.wikipedia.org/wiki/Target_Center)) | targetcenter.com | unknown | Wolves: 18,978 on Oct 26, 2025 — **above** the 18,798 listed basketball capacity ([E] [Wikipedia season log](https://en.wikipedia.org/wiki/2025%E2%80%9326_Minnesota_Timberwolves_season)). Lynx: 12,772 on May 21, 2025 ([E] [Wikipedia](https://en.wikipedia.org/wiki/2025_Minnesota_Lynx_season)) | — |
| A05 | Wild (NHL) 2000–; Frost (PWHL) 2024–; Swarm (NLL) 2005–15; Lynx 2017 ([E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena)); **Minnesota Forge (MLV) from Jan 2027 — scheduled** ([R] [FOX 9](https://www.fox9.com/sports/minnesota-forge-is-states-first-pro-womens-volleyball-team-set-debut-2027)) | [grandcasinoarena.com](https://www.grandcasinoarena.com/events/minnesota-forge) | unknown | 21,609 at 2015 boys' hockey AA semifinal ([E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena)); 20,554 Shania Twain concert, Oct 28, 2003 ([O] [arena](https://www.xcelenergycenter.com/guest-services/about)); Frost debut Jan 6, 2024 drew 13,000+ ([R] [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-xcel-energy-center-st-paul-mn)) | Only two escalators, a known crowd-flow constraint ([R] [Star Tribune](https://www.startribune.com/minnesota-wild-grand-casino-arena-downtown-st-paul-renovation-city-state-funding-nhl/601542144)). |
| A06 | Minnesota United (MLS) 2019–; MNUFC2 listed 2022– ([E] [Wikipedia](https://en.wikipedia.org/wiki/Allianz_Field)) | mnufc.com | unknown (SeatGeek per secondary guides only) | — | Next to light rail at Snelling; limited parking; 400 bike spaces ([E] [Wikipedia](https://en.wikipedia.org/wiki/Allianz_Field)). |
| A07 | Live Nation-owned/operated; 37 concerts in inaugural season ([R] [Yahoo/BMTN](https://www.yahoo.com/entertainment/music/articles/concerts-announced-far-live-nations-142242429.html)) | unknown (Live Nation) | unknown | — | Noise complaints prompted curfew review ([E] [Wikipedia](https://en.wikipedia.org/wiki/Mystic_Lake_Amphitheater)). |
| A08 | Gophers men's & women's basketball; Lynx postseason games (year to re-verify) ([E] [Wikipedia mirror](https://wiki.pingponghomelab.duckdns.org/content/wikipedia_en_all_nopic_2026-03/Williams_Arena)) | gophersports.com | unknown | School record 14,625 for women's basketball, Nov 9, 2018 ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-williams-arena-html)) | — |
| A09 | State Fair Grandstand Concert Series (12 days) ([R] [KTTC](https://www.kttc.com/2026/01/18/minnesota-state-fair-ticket-parking-prices-remain-unchanged-2026-67-million-approved-improvements)) | mnstatefair.org | unknown | Grandstand tickets brought in nearly $6M in 2025 (revenue, not attendance) ([R] [Minnesota Reformer](https://minnesotareformer.com/2026/09/09/minnesota-state-fair-attendance-dips-slightly-from-previous-two-years/)) | Fair admission required — see B01 dedupe. |
| A10 | Gophers men's hockey 1993– ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-mariucci-arena-html)) | gophersports.com | unknown | — | Gopher lot across Oak St ([O] [Ridder page](https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html)). |
| A11 | Live Nation books; open to all promoters ([R] [HITS](https://hitsdailydouble.com/news&id=311581)) | armorymn.com (per [O] [Meet Minneapolis](https://www.minneapolis.org/sports-minneapolis/venues/the-armory)) | unknown | — | — |
| A12 | Port of Minneapolis LLC (First Avenue + Minnesota Orchestra JV); ~50 ticketed events/yr, May–Oct ([O] [City of Minneapolis](https://www.minneapolismn.gov/news/2026/may/upper-harbor-amphitheater/)) | [minneapolisamphitheater.com](https://www.minneapolisamphitheater.com/) | n/a (not open) | n/a | — |
| A13 | St. Paul Saints (indep. 2015–20; Triple-A 2021–); Hamline baseball ([E] [Baseball-Reference](https://www.baseball-reference.com/bullpen/CHS_Field)) | stpaulsaints.com | unknown | Saints regularly exceeded 7,210 in 2015, record 9,960 on July 4, 2015 ([R] [Ballpark Digest](https://ballparkdigest.com/2015/08/10/saints-set-new-team-league-attendance-record/)) | Green Line to Union Depot ([O] [MLB](https://www.mlb.com/twins/news/explore-chs-field-home-of-the-st-paul-saints)). |
| A14 | Vikings practice 2018–; Minnesota Aurora FC (USL W) 2022– ([E] [Wikipedia](https://en.wikipedia.org/wiki/Twin_Cities_Orthopedics_Performance_Center)); six 2026 home matches ([R] [FOX 9](https://www.fox9.com/sports/minnesota-aurora-fc-kicks-off-2026-season-may-21-against-rochester-fc)) | mnaurora.com | unknown | 6,987 sold out in 2023 ([O] [Aurora](https://mnaurora.com/?p=1777)) | Tailgating lots ([R] [KARE 11](https://kare11.com/article/news/local/minnesota-aurora-fc-playing-home-games-tco-stadium/89-ae2c80f2-db2a-4abf-aab6-81482a282506)). |
| A15 | Gophers volleyball (1994–), gymnastics, wrestling ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-maturi-pavilion-html)); **LOVB Minnesota from Jan 2027 — scheduled** ([O] [LOVB](https://www.lovb.com/teams/lovb-minnesota-volleyball)) | gophersports.com; lovb.com | unknown | 5,205 for wrestling in 1993–94 ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-maturi-pavilion-html)) | — |
| A16 | Operated by Minnesota Sports & Entertainment ([R] [Webull/PR Newswire](https://www.webull.com.au/news-detail/15389769143428096)) | grandcasinoarena.com family | unknown | — | Same block as A05 — shared parking/ramps. |
| A17 | MNUFC2 (MLS Next Pro) 2022– ([O] [MNUFC](https://mnufc.com/news/know-before-you-go-mnufc2-vs-real-monarchs)) | mnufc.com/mnufc2 | **SeatGeek** ([O] [MNUFC](https://www.mnufc.com/mnufc2/news/know-before-you-go-mnufc2-vs-tacoma-defiance)) | — | Free parking in Lots F and G ([O] [MNUFC](https://www.mnufc.com/mnufc2/news/know-before-you-go-mnufc2-vs-tacoma-defiance)). |
| A18 | St. Thomas men's & women's hockey and basketball, Oct 2025–. Hockey previously at ~1,000-seat St. Thomas Ice Arena, Mendota Heights; basketball at ~2,000-seat Schoenecker / Anderson complex ([R] [TCB](https://tcbmag.com/st-thomas-75-million-gift-new-campus-arena/)) | tommiesports.com | unknown | 5,325 capacity crowd for men's basketball; men's average 2,861 ([R] [Howie Hanson](https://www.howiehanson.com/st-thomas-183-million-arena-strengthens-its-division-i-ambitions/)) | Cashless venue ([E] [Stadium Journey](https://www.stadiumjourney.com/stadiums/lee-and-penny-anderson-arena-st-thomas-tommies)). |
| A19 | Gophers women's hockey 2002–; 2025 Women's Frozen Four ([O] [Meet Minneapolis](https://www.minneapolis.org/sports-minneapolis/venues/ridder-arena/)) | gophersports.com | unknown | Record 3,539 ([O] [Gopher Athletics](https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html)) — above listed 3,400 | Gopher lot across Oak St ([[O]](https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html)). |
| A20–A26 | Performing-arts / concert promoters (Hennepin Arts, First Avenue, Live Nation) | venue sites | unknown | — | — |

---

## 3. Rooms near the 1,000 / 5,000 thresholds needing care

| Room | Figures in conflict | Why it matters | Suggested handling |
|---|---|---|---|
| Maturi Pavilion (A15) | 5,700 / 5,500 / 5,000 (sources in A2) | Straddles the 5,000 friction line; gains a pro tenant in 2027. | Use a dated figure once an official current number is found; until then treat as **classification uncertain**. |
| Roy Wilkins Auditorium (A16) | 5,800 vs 5,844; configuration unspecified | Concert vs seated setups may fall either side of 5,000. Renovation funded 2026 may change seating. | Record per-configuration once operator publishes; re-check after renovation. |
| Lee & Penny Anderson Arena (A18) | 4,000 hockey / 5,300 basketball / 6,000 concert | **Same room, different sides of 5,000** by sport. | Classify per event configuration, not per building. |
| TCO Stadium (A14) | 5,500 base / 6,000 / 6,987 expanded | Expanded figure is temporary seating. | Use base figure for the room; treat expansions as event-specific. |
| NSC Stadium (A17) | 5,500 vs 10,350 | Both above 5,000, but the gap is large. | Needs official NSC figure. |
| Surly Brewing Festival Field (not in A) | 7,500 ([R] [MSP Mag](https://mspmag.com/arts-and-culture/concert-venues/)) vs "a bit under 5,000" ([R] [TCB, 2024](https://tcbmag.com/amphitheater-mysteries/)) | Conflict **changes classification**; current activity not verified. | Hold out of Table A until active status and capacity are confirmed. |
| Pantages Theatre (A26) | 1,014 | Right at the ~1,000 pre-list line. | Include as listed/muted. |
| Weesner Family Amphitheater, MN Zoo (Apple Valley) | 1,500 ([R] [TCB](https://tcbmag.com/amphitheater-mysteries/)) | Above 1,000; not otherwise researched. | Add as a sub-5,000 candidate. |
| First Avenue 7th St Entry | 250 ([E] [Wikipedia](https://en.wikipedia.org/wiki/First_Avenue_(nightclub))) | Below 1,000; shares building with A25. | Exclude, but watch for feed mis-matches to the Main Room. |
| St. Thomas Ice Arena (Mendota Heights) | ~1,000 ([R] [TCB](https://tcbmag.com/st-thomas-75-million-gift-new-campus-arena/)) | Former D-I home until 2025. | Historical only. |

**Not researched in this pass** (candidates that may meet ~1,000+ and need a dedicated check): Orchestra Hall, Ordway (Music Theater and Concert Hall), Guthrie Theater, O'Shaughnessy Stadium (St. Thomas football), Siebert Field and Jane Sage Cowles Stadium (UMN), Saint Paul RiverCentre halls, TRIA Rink, Uptown Theater, Elko Speedway, Canterbury Park grandstand, Myth Live (Maplewood).

---

## 4. Teams / programs, dated home venues, and feed coverage

| Team / program | League | Home venue(s), dated | Schedule / ticketing coverage verified | Gaps |
|---|---|---|---|---|
| Minnesota Vikings | NFL | U.S. Bank Stadium 2016–; Huntington Bank Stadium 2014–15 ([E] [Wikipedia](https://en.wikipedia.org/wiki/U.S._Bank_Stadium)) | Platform not confirmed from official source | Confirm ticketing platform; parking/suite listings. |
| Minnesota Twins | MLB | Target Field 2010– ([O] [MLB](https://www.mlb.com/press-release/press-release-winter-classic-at-target-field-6-28-21)) | twinsbaseball.com / MLB Ballpark app ([[O]](https://mlb.com/press-release/press-release-twins-announce-target-field-capacity-increases)) | — |
| Minnesota Timberwolves | NBA | Target Center 1990–; lease to June 2035 ([R] [Axios](https://www.axios.com/local/twin-cities/2026/07/13/target-center-future-minneapolis)) | Not confirmed | Ownership: Lore/Rodriguez took control in 2025 ([E] [Wikipedia](https://en.wikipedia.org/wiki/2025_Minnesota_Lynx_season)); majority sale to Marc Stad announced (**pending**) ([R] [KSTP](https://kstp.com/kstp-news/top-news/minnesota-timberwolves-lynx-ownership-being-sold-to-businessman-marc-stad/)). |
| Minnesota Lynx | WNBA | Target Center; 2017 season at Xcel Energy Center ([E] [Simple Wikipedia](https://simple.wikipedia.com/wiki/Xcel_Energy_Center)) | Not confirmed | Same ownership change as Wolves. |
| Minnesota Wild | NHL | Grand Casino Arena (ex-Xcel) 2000–; lease to 2035 ([R] [Echo Press](https://www.echopress.com/news/minnesota/xcel-energy-center-to-become-grand-casino-arena)); extension to 2061 proposed in exchange for state funding (**proposal**) ([R] [Pioneer Press via Yahoo](https://www.yahoo.com/news/articles/bonding-bill-50m-st-paul-190200277.html)) | Not confirmed | Legacy "Xcel Energy Center" name in feeds. |
| Minnesota Frost | PWHL | Grand Casino Arena 2024– ([E] [Wikipedia](https://en.wikipedia.org/wiki/Grand_Casino_Arena)) | Not confirmed | Early name "PWHL Minnesota" may appear in 2024 data ([R] [The Loon](https://theloon.com/road-to-hockey-day-minnesota-the-big-leagues/)). |
| Minnesota United FC | MLS | Allianz Field 2019–; Huntington Bank (TCF) Stadium 2017–18 | Not confirmed from official page | Some third-party guides misname the venue "Allianz Stadium" ([E] [SeatGeek blog](https://seatgeek.com/blog/allianz-stadium-seatgeeks-complete-guide-to-one-of-the-midwests-top-soccer-stadiums)). |
| MNUFC2 | MLS Next Pro | NSC Stadium, Blaine, 2022– ([O] [MNUFC](https://www.mnufc.com/mnufc2/news/know-before-you-go-mnufc2-vs-tacoma-defiance)) | **SeatGeek** ([[O]](https://www.mnufc.com/mnufc2/news/know-before-you-go-mnufc2-vs-tacoma-defiance)) | Capacity conflict (A17). |
| St. Paul Saints | Triple-A (IL) | CHS Field 2015– | Not confirmed | — |
| Minnesota Aurora FC | USL W | TCO Stadium 2022– | Not confirmed | Venue capacity varies by event. |
| Minnesota Forge | MLV | Grand Casino Arena, from Jan 2027 (**scheduled**) ([R] [FOX 9](https://www.fox9.com/sports/minnesota-forge-is-states-first-pro-womens-volleyball-team-set-debut-2027)) | Season tickets on sale ([R] [Just Women's Sports](https://justwomenssports.com/reads/minnesota-forge-mlv-volleybal-team-branding-revealed/)) | 2027 schedule not yet published (re-check). Volleyball capacity at the arena unknown. |
| LOVB Minnesota | LOVB Pro | Maturi Pavilion, from Jan 2027 (**scheduled**) ([O] [LOVB](https://www.lovb.com/teams/lovb-minnesota-volleyball); [R] [SI](https://www.si.com/onsi/volleyball/news/league-one-volleyball-minnesota-announces-inaugural-roster-2027)) | Not confirmed | **Conflict:** a Nov 2025 FOX 9 story said Grand Casino Arena ([[R]](https://www.fox9.com/sports/league-one-volleyball-bringing-professional-team-minnesota)); LOVB's own page says Maturi. Treat LOVB as authoritative. |
| Gophers football / basketball / hockey / volleyball | Big Ten | Huntington Bank Stadium; Williams Arena; 3M Arena at Mariucci (men); Ridder Arena (women); Maturi Pavilion | Not confirmed | Williams/Maturi share a building — see section 6. |
| St. Thomas Tommies hockey & basketball | NCAA D-I | Lee & Penny Anderson Arena, Oct 24, 2025– | Not confirmed | Per-sport capacities differ (section 3). |

Attendance feeds: no official per-game attendance feed was verified for any team. Where attendance is shown above it comes from published game logs or articles, not a feed.

---

## 5. Table B — open sites and dated crowd events

These are **event records, not rooms.** Counts are shown only as published, with their measure type. No conversions between daily, multi-day, scan and peak figures.

| ID | Event | Organizer | Exact dates | Map point / footprint | Daily count | Peak concurrent | Multi-day total | Count type | Schedule source | Status | Overlap / dedupe with fixed rooms |
|---|---|---|---|---|---|---|---|---|---|---|---|
| B01 | Minnesota State Fair 2026 | Minnesota State Agricultural Society | Aug 27 – Sept 7, 2026 | Fairgrounds, Falcon Heights (322 acres) ([[O]](https://www.mnstatefair.org/updates/2025-annual-meeting)) | Opening day 155,185 (record for that day); Aug 28 204,065 ([R] [FOX 9, citing the Fair](https://www.fox9.com/news/minnesota-state-fair-attendance-how-many-people-went-2026)) | **unknown** | 1,923,325 ([R] [FOX 9](https://www.fox9.com/news/minnesota-state-fair-attendance-how-many-people-went-2026)) | Announced gate count; total = sum of daily, so multi-day visitors count repeatedly ([R] [Minnesota Reformer](https://minnesotareformer.com/2026/09/09/minnesota-state-fair-attendance-dips-slightly-from-previous-two-years/)) | mnstatefair.org | Confirmed (completed) | Grandstand (A09) and Warner Coliseum shows occur **inside** fair admission. Log a Grandstand concert as its own room event; do not add it to the fair's gate count. |
| B01-hist | State Fair records | same | — | same | Record single day 270,426 (2018); record total 2,126,551 (2019); 2025 total 1,940,869 ([R] [CBS](https://cbsnews.com/minnesota/news/2026-minnesota-state-fair-attendance-record-day-1/); [R] [KVLY](https://www.valleynewslive.com/2026/09/08/2026-minnesota-state-fair-wrap/)) | unknown | — | Announced | — | Historical | — |
| B02 | Minnesota State Fair 2027 | same | Starts Thu Aug 26, 2027, runs through Labor Day ([R] [FOX 9](https://www.fox9.com/news/minnesota-state-fair-attendance-how-many-people-went-2026)) — Labor Day falls on Sept 6, 2027 by calendar | same | — | — | — | — | mnstatefair.org | Scheduled | As B01. |
| B03 | Twin Cities Pride Festival & Parade 2026 | Twin Cities Pride | Festival June 27–28; parade June 28, 2026 ([R] [KSTP](https://kstp.com/?p=3963330); [O] [Loring Park](https://loringpark.org/clpc-events/)) | Loring Park, 1382 Willow St; parade from 3rd St & Hennepin to Loring Park | unknown | unknown | Parade: "more than 200,000" per organizers ([R] [KSTP](https://kstp.com/?p=3963330)) | Organizer claim; measure (unique vs. cumulative) not stated | tcpride.org | Confirmed (completed). 2027 dates TBA | None (open park/street). |
| B04 | Medtronic Twin Cities Marathon 2026 | Twin Cities In Motion | Sun Oct 4, 2026, 8:00 a.m.; TC 10K Oct 3 ([O] [TCM](https://www.tcmevents.org/alleventsandraces/medtronictwincitiesmarathonweekend/medtronictwincitiesmarathon)) | Start 615 S 6th St, Minneapolis → St. Paul ([O] [TCM](https://www.tcmevents.org/alleventsandraces/medtronictwincitiesmarathonweekend/medtronictwincitiesmarathon)) | Runners: "more than 10,000" in the full marathon ([R] [CBS](https://www.cbsnews.com/minnesota/news/twin-cities-marathon-date-change-2027/)) vs 8,800 participants ([E] [Wikipedia](https://en.wikipedia.org/wiki/Twin_Cities_Marathon)) | unknown | Spectators unknown | Participant counts (not crowd) | tcmevents.org | Confirmed (completed) | Start near U.S. Bank Stadium / Armory district — check for same-day stadium events. |
| B05 | Twin Cities Marathon weekend 2027 | same | Between Oct 10 and 17, 2027; exact date TBA ([R] [CBS](https://www.cbsnews.com/minnesota/news/twin-cities-marathon-date-change-2027/)) | same | — | — | — | — | tcmevents.org | Scheduled (window only) | — |
| B06 | Minnesota Yacht Club Festival 2026 | C3 Presents ([R] [Pollstar](https://news.pollstar.com/?p=1214037)) | July 17–19, 2026, 12:30–10:30 p.m. daily ([O] [festival](https://support.minnesotayachtclubfestival.com/hc/en-us/articles/27435964260116-Minnesota-Yacht-Club-Community-Information)) | Harriet Island Regional Park, Saint Paul; park closed July 7–22 for build | unknown | unknown | unknown | — | minnesotayachtclubfestival.com | Confirmed (completed). 2027 not announced | None. |
| B07 | Minnesota Renaissance Festival | Mid-America Festivals | Seven weekends, late Aug – late Sept (2026 dates not captured) | Shakopee site | unknown | unknown | ~300,000 per year ([R] [KARE 11](https://kare11.com/article/news/local/kare11-saturday/the-return-of-the-minnesota-renaissance-festival-shakopee/89-be3bc424-5543-4125-af08-7f3975d849f2)) | Organizer claim, season total | renaissancefest.com | Annual; 2026 dates need manual entry | Near Mystic Lake Amphitheater / Canterbury — check traffic overlap; Scott County has pressed the event on parking ([R] [Axios 2023](https://www.axios.com/local/twin-cities/2023/08/17/things-to-do-twin-cities-weekend)). |
| B08 | 2028 NFL Draft | NFL / Vikings / Minnesota Sports and Events | Three days in 2028; **dates TBA** ([R] [Mpls.St.Paul Mag](https://mspmag.com/arts-and-culture/minneapolis-to-host-2028-nfl-draft/)) | U.S. Bank Stadium + downtown fan festival | unknown ("hundreds of thousands" expected — not a count) | unknown | unknown | Expectation only | nfl.com | Scheduled | Draft theater inside/at A01 vs open fan fest — log separately. |
| B09 | Saint Paul Winter Carnival; Minneapolis Aquatennial; Basilica Block Party; Golden Valley Pride | various | **Need manual dates** | various | not gathered | — | — | — | — | Annual | — |
| B10 | Conventions (Minneapolis Convention Center; Saint Paul RiverCentre) | various | Need manual dates | Convention halls | not gathered | — | — | — | — | — | RiverCentre is on the A05/A16 block. |

**Past one-off events noted (no totals invented):** WWE SummerSlam 2026 at U.S. Bank Stadium (two-day combo tickets sold) ([O] [USBS news](https://www.usbankstadium.com/news/all)); 2026 World Junior Hockey Championships at Grand Casino Arena, late Dec 2025 – Jan 2026 ([R] [ICT News](https://ictnews.org/?p=173230)).

---

## 6. Conflicts, duplicate/matching risks, inaccessible sources, and changes through 2028

### Conflicting sources preserved

| Item | Conflict | Changes classification? |
|---|---|---|
| U.S. Bank Stadium football capacity | 66,202 / 66,400+ / 66,655 / 66,860 depending on year and source (A2) | No |
| Target Field | 38,544 (2021 official) vs 39,504 (2010) | No |
| Target Center | Listed 18,798 basketball, but 18,978 observed in Oct 2025 — standing room or a revised figure | No |
| Huntington Bank Stadium rename | Official: June 29, 2021 ([[O]](https://gophersports.com/news/2021/6/29/athletics-welcome-to-huntington-bank-stadium)); Stadium Journey says March 24, 2021 ([[E]](https://www.stadiumjourney.com/stadiums/huntington-bank-stadium-minnesota-golden-gophers)) | No — use official |
| Maturi Pavilion | 5,700 / 5,500 / 5,000 | **Possibly** (5,000 line) |
| Roy Wilkins | 5,800 / 5,844; no configuration | **Possibly** |
| NSC Stadium | 5,500 vs 10,350 | No (both ≥5,000) |
| Surly Festival Field | 7,500 vs <5,000 | **Yes** |
| Palace Theatre | 2,800 vs 2,500 | No |
| LOVB Minnesota venue | Maturi (LOVB, SI) vs Grand Casino Arena (early FOX 9) | Room assignment — use LOVB |
| Twin Cities Marathon size | >10,000 vs 8,800 | n/a (participants) |

### Duplicate and matching risks

- **Same building, two rooms:** Williams Arena (A08) and Maturi Pavilion (A15) share 1925 University Ave SE. Ticketing platforms may group them; treat as separate rooms.
- **Tunnel-linked neighbours:** 3M Arena at Mariucci (A10) and Ridder Arena (A19).
- **One downtown block, four venues:** Grand Casino Arena, Roy Wilkins, RiverCentre and the Ordway sit together ([E] [Simple Wikipedia](https://simple.wikipedia.com/wiki/Xcel_Energy_Center)). Proximity matching alone is ambiguous here.
- **Same building, two stages:** First Avenue Main Room and 7th St Entry.
- **Fair parent/child:** Grandstand and Warner Coliseum events inside State Fair admission (B01).
- **Stadium vs plaza:** U.S. Bank Stadium has hosted plaza concerts ([O] [SBLII guide](https://www.usbankstadium.com/assets/doc/U.S.-Bank-Stadium-Fact-and-Media-Guide-for-SBLII-dad2800067.pdf)); the 2028 Draft will have a separate fan fest.
- **Name collisions:** "Grand Casino Arena" (St. Paul) vs Grand Casino Hinckley venues (outside scope); "Mystic Lake Amphitheater" (Shakopee) vs Mystic Lake Casino Hotel (Prior Lake); legacy "Xcel Energy Center" and "TCF Bank Stadium" names in historical feeds; "Allianz Stadium" mislabel in some third-party guides.
- **Listing types that double-count:** parking passes, suites/premium packages, multi-day passes (Yacht Club, State Fair), and season-ticket products should not create extra event records.
- **Capacity vs crowd exceedances:** CHS Field, Ridder Arena and Target Center have published crowds above their listed capacity — expected with standing room; never infer one from the other.

### Inaccessible or unchecked sources

No page refused access. However, this answer relies on search-result extracts rather than full-page fetches, and several official capacity pages (targetcenter.com, usbankstadium.com facts, NSC, Roy Wilkins operator page, State Fair Grandstand) were not located; secondary sources are flagged [E] where used.

### Confirmed and scheduled changes through 2028, with re-check dates

| Change | Status | Re-check |
|---|---|---|
| Xcel Energy Center → Grand Casino Arena (Sept 3, 2025) | Confirmed | — |
| Lee & Penny Anderson Arena opened (Oct 24, 2025) | Confirmed | — |
| Mystic Lake Amphitheater opened (June 20, 2026); curfew review | Confirmed / curfew **proposal** | Shakopee council decision; before 2027 season (Apr 2027) |
| Roy Wilkins renovation — $40M bonding (May 2026) | Funded; schedule unknown | Jan 2027 |
| Grand Casino Arena — $10M planning money; $450M renovation | Planning funded / renovation **proposal** | After 2027 legislative session (late May 2027) |
| Minnesota Forge & LOVB Minnesota debut (Jan 2027) | Scheduled | When 2027 schedules publish (Dec 2026) |
| CPAC Upper Harbor amphitheater opening (summer 2027) | Scheduled; under construction | Mar 2027 |
| NCAA men's basketball 1st/2nd rounds at Target Center (2027) | Scheduled | Feb 2027 |
| Twin Cities Marathon moves to Oct 10–17 window (2027) | Scheduled (date TBA) | When 2027 date announced |
| State Fair 2027 (from Aug 26) | Scheduled | Aug 2027 |
| NCAA DI Wrestling at U.S. Bank Stadium (March 2028; a ticket listing shows Mar 16–18 ([E] [SeatGeek](https://seatgeek.com/venues/u-s-bank-stadium/tickets)) — confirm with NCAA) | Scheduled | Jan 2028 |
| 2028 NFL Draft, U.S. Bank Stadium + downtown | Scheduled (dates TBA) | Spring 2027 |
| Timberwolves/Lynx majority sale to Marc Stad | **Pending** | On NBA/WNBA approval |
| New Wolves/Lynx arena (e.g., City Center block concept) | **Proposal** only | Ongoing; lease runs to June 2035 |
| TCO Stadium railing repair after Sept 3, 2026 collapse | Unknown | Before Aurora 2027 season (May 2027) |
| Allianz Field corner expansion | **Proposal** (long-term) | Low priority |

---

*Data-rights note:* all figures come from publicly accessible pages. Ticketing-platform data (Ticketmaster, SeatGeek) is referenced only as public listings; room identity in any feed must be confirmed separately before treating a match as verified.
