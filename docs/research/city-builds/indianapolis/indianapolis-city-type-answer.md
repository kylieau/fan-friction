# Indianapolis city-type answer (Fan/Friction Gridlock read)

**Research date:** 12 October 2026. Public sources only; every number below is linked to the page it came from. Where a source is a ticket reseller, fan site or aggregator rather than an official or news source, the row says so.

**Bottom line:** Recommend the existing **`sprawl`** setting for Indianapolis, with medium confidence. No measured event mode split was found for any Indianapolis venue. The two ridership-based inferences that could be made (NBA All-Star 2024, Indiana State Fair 2026) both put non-car public transit at roughly 1–4% of event person-trips, and race day at the Speedway has no public transit service at all. Downtown is a compact, walkable venue cluster, but walking from hotels and downtown homes is the only meaningful non-car mode, and it matters mainly for visitor-heavy multi-day events.

---

## 1. Scope, definitions and how to read this

**Unit.** All shares are shares of *attendee person-trips to the event*, not vehicles, ticket buyers, boardings or daily turnstile visits. Where a source reports boardings, daily admissions or multi-day totals, the conversion is shown in Section 4.

**Car share** = private car, carpool, RV, taxi and rideshare, *including* anyone who drove to a remote lot and then rode a shuttle or bus (park-and-ride). A shuttle ride is only counted as non-car when the rider reached the shuttle without a car. No such walk-up shuttle was found for any row, so the "dedicated event shuttle (non-car)" column is 0 or unknown throughout.

**Value types.** *Measured* = observed event mode split (none found). *Projected* = a planning-study forecast for the venue (none found). *Inferred* = a bound derived from published ridership with a stated method. *Estimated* = a judgement from local evidence and comparisons, with stated assumptions. *Unknown* = no defensible estimate; the current fallback is named.

**Companion venue research.** The companion venue answer was not available to this brief, so venues were enumerated independently. Row IDs below (IND-xx, SEP-xx) are this document's own keys; map them to companion rows by venue name and configuration.

**Commuting data is background only.** It is used in Section 2 and as a weak prior, never as an event split.

---

## 2. Background: ordinary commuting (not event travel)

| Measure (2024 ACS 1-year, Indianapolis MSA) | Value | Source |
|---|---|---|
| Drove alone to work | 74.6% | [Newgeography, from ACS 2024](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) |
| Carpool | 8.3% | same |
| Work from home | 13.6% | same |
| Transit | 0.6% (among the five lowest of 57 major metros) | same |
| Walk / bicycle / taxi | 1.4% / 0.2% / 1.4% | same |

Indianapolis' transit commute share is on par with Kansas City and Omaha and above only Oklahoma City, Memphis, Tulsa and Jacksonville among large metros, per the [same table](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access). IndyGo [provides fixed-route service throughout Marion County](https://www.indygo.net/transit-news/indygo-transit-impacts-during-oneamerica-500-festival-mini-marathon/), so venues in Hamilton County and other ring counties sit outside its service area.

---

## 3. Venue and event travel tables

### 3A. Identity, setup and size

| ID | Verified current name | Municipality | Setup / event represented | Date or season | Size (people) and source | Evidence type / date / event type |
|---|---|---|---|---|---|---|
| IND-01 | Indianapolis Motor Speedway — Indianapolis 500 | Speedway (enclave in Marion Co.) | Race day only (not practice, qualifying or Carb Day) | Sun 24 May 2026 | ~275,000 grandstand seats; total crowd est. ~350,000 incl. infield GA; IMS does not publish attendance ([AP via News4Jax, 13 May 2026](https://www.news4jax.com/sports/2026/05/13/indianapolis-500-officials-are-expecting-a-2nd-straight-race-day-sellout-and-3rd-time-in-10-years/)). Post-race report: more than 330,000 ([Courier-Times](https://www.thecouriertimes.com/eedition/page-b03/page_45d965af-5248-5f99-87db-68586cbd56af.html)) | Operations pages + transit service notices, 2026; motorsport open-site crowd |
| IND-02 | Indianapolis Motor Speedway — Brickyard 400 | Speedway | NASCAR Cup race day | Sun 26 Jul 2026 | Attendance not published ([Racing-Reference: "n/a"](https://racing-reference.info/race/2026-22/W)) | Schedule page, 2026; motorsport |
| IND-03 | Indiana State Fairgrounds — Indiana State Fair | Indianapolis | Daily fair admissions (multi-day; not a single concurrent crowd) | 7–23 Aug 2026 (15 days) | 800,461 total admissions ([WTHI](https://www.wthitv.com/2026/09/02/indiana-state-fair-welcomed-over-800000-visitors-this-year/); [Axios](https://www.axios.com/local/indianapolis/2026/09/03/indiana-state-fair-attendance-dips-after-storm-soaked-start)) = ~53,400 per day average. Conflict: 800,641 ([Indiana Capital Chronicle](https://indianacapitalchronicle.com/2026/09/02/severe-weather-hampers-state-fair-attendance/)) | Ridership-bounded inference, 2026; fair/festival |
| IND-04 | Lucas Oil Stadium — Colts | Indianapolis (downtown) | NFL regular season, football configuration | 8 home games per season (Sep–Jan) | Seats ~67,000 for football ([official fact sheet](https://www.lucasoilstadium.com/tours-stadium-info/background-history/)); conflict: 63,000 ([WSP](https://www.wsp.com/en-us/projects/lucas-oil-stadium)). Typical: ~93% of capacity per a 2024 fan-ranking study ([WISH](https://wishtv.com/?p=1218608)) ≈ 62,400 | Estimate from local evidence; stadium sports |
| IND-05 | Lucas Oil Stadium — NCAA Men's Final Four | Indianapolis | Basketball expanded configuration | 4 & 6 Apr 2026 | Expandable to over 70,000 for basketball ([official](https://www.lucasoilstadium.com/tours-stadium-info/background-history/)); 2015 two-session total 143,387 ([Indiana Sports Corp](https://indianasportscorp.org/news/indianapolis-to-host-2026-ncaa-mens-final-four)) | Estimate; visitor-heavy one-off |
| IND-06 | Lucas Oil Stadium — stadium concerts | Indianapolis | Concert configuration (e.g. Bruno Mars Sep 2026; Metallica 5 Jun 2027 announced) | Summer/autumn | Concert capacity by configuration not published officially; treat as up to ~70,000 ([official site event list](https://www.lucasoilstadium.com)) | Estimate; concert |
| IND-07 | Gainbridge Fieldhouse | Indianapolis | Pacers/Fever basketball (concert config separate, not additive) | NBA Oct–Apr; WNBA May–Sep | Basketball 17,274; concert record 18,274; hockey 11,651 ([Wikipedia, citing venue](https://en.wikipedia.org/wiki/Gainbridge_Fieldhouse)). Conflict: same page also gives 17,923 for basketball | Estimate; arena sports/concerts |
| IND-08 | Victory Field — Indianapolis Indians | Indianapolis | Triple-A baseball | Apr–Sep | 12,230 fixed seats; ~14,230 with lawn ([Wikipedia](https://en.wikipedia.org/wiki/Victory_Field)). 2025 average 7,817 ([Stats Crew](https://www.statscrew.com/venues/v-1219)); 2026 season total 555,657 ([MiLB](https://www.milb.com/indianapolis/news/for-the-circle-city-a-winning-season-on-and-off-the-field)) | Estimate; outdoor sports |
| IND-09 | Everwise Amphitheater at White River State Park | Indianapolis | Outdoor concert, 2,500 reserved + 3,500 lawn | May–Oct | 6,000 ([White River State Park](https://whiteriverstatepark.org/everwise-amphitheater/); [IBJ](https://ibj.com/?p=471588)). Conflict: 3,000 ([Songkick](https://www.songkick.com/venues/4366684-everwise-amphitheater-at-white-river-state-park)) | Estimate; concert |
| IND-10 | Indiana Convention Center (+ Lucas Oil Stadium) — Gen Con | Indianapolis | Multi-day convention; 4-day total, **not** a concurrent crowd | 30 Jul–2 Aug 2026 | Over 74,000 attendees ([ICv2](https://icv2.com/articles/news/view/63046/gen-con-2026-news-gen-con-reveals-record-breaking-attendance-numbers)); also used Lucas Oil Stadium ([WFYI](https://www.wfyi.org/wfyi-news/2026-07-30/a-sold-out-gen-con-returns-to-indianapolis-after-record-breaking-year)) | Estimate; convention/festival |
| IND-11 | Downtown multi-venue — NBA All-Star 2024 (historical) | Indianapolis | Gainbridge + Lucas Oil + Convention Center over 4 days; multi-day visits | 15–18 Feb 2024 | More than 190,000 fans (multi-day) ([APTA Passenger Transport](https://aptapassengertransport.com/indygo-hits-a-slam-dunk-in-ridership-during-nba-all-star-weekend/)) | Ridership-bounded inference, 2024; one-off, winter, fare-free |
| IND-12 | Hinkle Fieldhouse | Indianapolis (Butler campus) | Butler basketball | Nov–Mar | 9,100 since 2014 ([Butler Athletics](https://butlersports.com/sports/2016/5/19/information-facilities-hinkle-fieldhouse.aspx)) | Estimate; college sports |
| IND-13 | Corteva Coliseum | Indianapolis (Fairgrounds) | Arena events | Year-round | 6,800 basketball / 6,200 hockey; 6,500 general ([Wikipedia](https://en.wikipedia.org/wiki/Corteva_Coliseum)) | Estimate; arena |
| IND-14 | IU Michael A. Carroll Stadium — Indy Eleven | Indianapolis (IU Indianapolis) | USL Championship soccer | Mar–Oct 2026 | Tenant confirmed for 2026 ([Wikipedia, 2026 season](https://en.wikipedia.org/wiki/2026_Indy_Eleven_season)); **capacity not verified in this pass** | Unknown; outdoor sports |
| IND-15 | Fishers Event Center | Fishers (Hamilton Co.) | Indy Fuel hockey; concerts | Oct–Apr hockey; year-round | 7,500 general ([Visit Hamilton County](https://visithamiltoncounty.com/events/fishers-event-center/)); hockey 6,500 ([Current](https://youarecurrent.com/2025/01/21/icy-hot-fuel-games-selling-out-at-new-fishers-event-center/)); concert 8,500 planned ([IBJ](https://www.ibj.com/articles/center-of-attention)). Fuel 2024–25 average 5,648 ([Current](https://www.youarecurrent.com/2025/05/05/sellout-season-indy-fuel-drew-capacity-home-crowds-at-new-fishers-event-center/)) | Estimate; suburban arena |
| IND-16 | Ruoff Music Center | Noblesville (Hamilton Co.) | Amphitheater concert (pavilion + lawn) | May–Sep | ~24,000 ([Visit Hamilton County](https://www.visithamiltoncounty.com/events/ruoff-music-center)); 24,790 ([Ticketmaster venue guide](https://blog.ticketmaster.com/venue-faq-ruoff-music-center-noblesville-in/)) | Estimate; suburban concert |
| SEP-B1 | Merchants Bank Field at Memorial Stadium (IU) | Bloomington (separate metro) | IU football | Sep–Nov | Official 53,524; 2026 home crowds 54,376–54,695 ([Wikipedia](https://en.wikipedia.org/wiki/Memorial_Stadium_(Indiana_University))) | Estimate; college stadium |
| SEP-W1 | Ross-Ade Stadium (Purdue) | West Lafayette (separate metro) | Purdue football | Sep–Nov | Conflict: 61,441 ([Sportskeeda](https://sportskeeda.com/college-football/purdue-football-stadium-capacity)) vs 57,282 ([CFBTrack](https://cfbtrack.com/stadiums/3907)) | Estimate; college stadium |

### 3B. Person mode split and recommended car share

All splits are person-trip shares. "Sums?" states whether the row totals 100%.

| ID | Car (incl. carpool, rideshare, park-and-ride) | Public bus/BRT, non-car access | Event shuttle, non-car access | Walk / bike | Other / unclassified | Sums? | **Recommended car share** (range) | Value type | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| IND-01 Indy 500 | 93% | 0% (no IndyGo service to IMS) | 0% (IMS shuttles require parking a car) | 3% | 4% (charter/tour coaches, unknowns) | Yes | **0.93** (0.88–0.97) | Estimated | Medium-low |
| IND-02 Brickyard 400 | 93% | ~0% (not verified) | 0% | 3% | 4% | Yes | **0.93** (0.85–0.97) | Estimated | Low |
| IND-03 State Fair | 92% | 2% (inferred 0.5–4%) | none identified | 3% | 3% | Yes | **0.92** (0.85–0.96) | Estimated, transit part inferred | Medium-low |
| IND-04 Colts | 85% | 2% | 0% | 9% | 4% | Yes | **0.85** (0.75–0.92) | Estimated | Low |
| IND-05 Final Four | 75% | 3% | 0% | 18% | 4% | Yes | **0.75** (0.60–0.88) | Estimated | Low |
| IND-06 Stadium concert | 85% | 2% | 0% | 9% | 4% | Yes | **0.85** (0.75–0.93) | Estimated | Low |
| IND-07 Gainbridge | 85% | 2% | 0% | 9% | 4% | Yes | **0.85** (0.75–0.92) | Estimated | Low |
| IND-08 Victory Field | 85% | 2% | 0% | 9% | 4% | Yes | **0.85** (0.75–0.92) | Estimated | Low |
| IND-09 Everwise | 85% | 2% | 0% | 9% | 4% | Yes | **0.85** (0.75–0.92) | Estimated | Low |
| IND-10 Gen Con | 70% | 2% | unknown | 24% | 4% | Yes | **0.70** (0.55–0.85) | Estimated | Low |
| IND-11 NBA All-Star 2024 | 78% | 2.6% (inferred 1–5%) | 0% | 16% | 3.4% | Yes | **0.78** (0.65–0.90) | Estimated, transit part inferred | Low |
| IND-12 Hinkle | 80% | 1% | 0% | 15% (students) | 4% | Yes | **0.80** (0.65–0.90) | Estimated | Low |
| IND-13 Corteva Coliseum | 92% | 2% | 0% | 3% | 3% | Yes | **0.92** (0.85–0.96) | Estimated | Low |
| IND-14 Carroll Stadium | unknown | unknown | unknown | unknown | unknown | No | **Unknown** — provisional fallback 0.85 (`sprawl` or `hub`) | Unknown | — |
| IND-15 Fishers Event Center | 95% | 0% (outside IndyGo service area) | 0% | 3% | 2% | Yes | **0.95** (0.90–0.98) | Estimated | Medium |
| IND-16 Ruoff | 96% | 0% (outside IndyGo service area) | 0% | 1% | 3% (party/charter buses) | Yes | **0.96** (0.92–0.99) | Estimated | Medium |
| SEP-B1 IU Memorial Stadium | 72% | 3% | 0% | 22% | 3% | Yes | **0.72** (0.55–0.85) | Estimated | Low |
| SEP-W1 Ross-Ade | 72% | 3% | 0% | 22% | 3% | Yes | **0.72** (0.55–0.85) | Estimated | Low |

**Why the "other/unclassified" column exists.** No row has a survey, so 2–4% is held back for modes the evidence cannot see (charter and tour coaches, hotel courtesy vans, mobility services, unknowns). It is not evidence of a hidden non-car mode.

### 3C. Parking, operations, start/end service, shared approaches, sources

| ID | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and crowds sharing approaches | Direct sources and method |
|---|---|---|---|---|
| IND-01 | On-site lots by pass only; many park in Speedway residents' yards ([fan site, unofficial](https://www.indymotorspeedway.com/500trans.html)). Paid shuttles from airport and a downtown lot; riders must also pay $20 per vehicle to park ([IMS FAQ](https://www.indianapolismotorspeedway.com/events/indy500/buy-tickets/shuttle-faqs)); 2026 shuttles sold out ([IMS](https://www.indianapolismotorspeedway.com/events/indy500/buy-tickets/products-shuttles)). Taxi/rideshare zone at 10th & Polco ([IMS](https://www.indianapolismotorspeedway.com/events/indy500/plan-ahead/transportation-services)) | IMS shuttles run 7:00 a.m. to about green flag, and return from 50 laps to go until 2 hours after the finish ([IMS FAQ](https://www.indianapolismotorspeedway.com/events/indy500/buy-tickets/shuttle-faqs)). IndyGo routes 3, 8, 10, 15, 25, 37, 38 detoured and west-side stops closed race day ([IndyGo 2026](https://www.indygo.net/transit-news/2026-indianapolis-500-will-lead-to-significant-indygo-detours-and-stop-closures-on-the-west-side/)); IndyGo has stated it runs no service to IMS on race day ([WTHR, older notice](https://www.wthr.com/article/news/local/indygo-memorial-day-weekend-routes/531-affa89ec-5115-431a-999b-27d9e93f3705)). Police-escorted bike ride to Gate 1 ([WISH 2025](https://www.wishtv.com/news/indy-500-race-day-travel-guide/)) | 500 Festival Parade downtown the day before; west-side arterials (16th St, Crawfordsville Rd, I-465 ramps) carry the whole crowd | Car share estimated from: zero public transit; shuttle = car-involved; bike/walk evidence limited to an escorted ride and neighbourhood walk-ins. Race-day count is **not** peak concurrent attendance |
| IND-02 | Outside lots open 8:00 a.m. ([IMS schedule](https://www.indianapolismotorspeedway.com/events/brickyard/event-info/schedule/sunday-july-26-2026)) | No IMS shuttle or IndyGo race-day notice found for Brickyard | Same approaches as IND-01, far smaller crowd (unpublished) | Analogy to IND-01 only |
| IND-03 | Fair parking was $10 in 2022 ([IBJ](https://www.ibj.com/articles/188-million-purple-line-moving-toward-2024-completioncompletion)). First Purple Line park-and-ride in 2026: free parking at Fort Harrison Station, buses about every 15 minutes, ~30 minutes to the fair ([IndyGo](https://www.indygo.net/transit-news/indygo-the-city-of-lawrence-and-ivy-tech-community-college-partner-to-provide-first-ever-purple-line-park-ride/)); fare $2.75 each way ([City of Lawrence](https://www.cityoflawrence.org/news/2026/08/05/purple-line-park-ride-indiana-state-fair)) | Purple Line stops at the fair's main gate on 38th St ([City of Lawrence 2025](https://www.cityoflawrence.org/news/2025/08/08/ride-indy-go-purple-line)). **End-of-event gap:** last Purple Line departure from the fairgrounds is 9:45 p.m. and the fair closes at 10 p.m. ([IndyGo](https://www.indygo.net/transit-news/indygo-the-city-of-lawrence-and-ivy-tech-community-college-partner-to-provide-first-ever-purple-line-park-ride/)). Storms forced closures on five days in 2026 ([Axios](https://www.axios.com/local/indianapolis/2026/09/03/indiana-state-fair-attendance-dips-after-storm-soaked-start)) | Free Stage record crowd ~9,000 on 9 Aug 2026 ([95.3 MNC](https://www.953mnc.com/?p=284490)) sits inside the fair total. 38th St shared with Corteva Coliseum (IND-13) | Transit share bounded from Purple Line ridership (Section 4.2). Park-and-ride riders counted as car |
| IND-04 | Downtown has more than 70,000 parking spaces ([ICCLOS](https://icclos.com/attendees/parking/)); Visit Indy says 73,000 ([Visit Indy](https://visitindy.com/indianapolis-transportation-parking)); ~40,000 within six blocks claimed by a reseller ([StubHub, weak source](https://stubhub.com/_V-6306)) | Regular IndyGo service only; Routes 8, 24 and Red/Purple BRT named as closest for stadium events ([IndyGo Final Four page](https://www.indygo.net/2026-march-madness-and-final-four-events/)). No Colts-specific extended service found; end-of-game service **not verified** | About 90% of seats are season tickets ([WISH via The Reporter](https://readthereporter.com/?p=152591)), i.e. a mostly regional, repeat audience. Shares I-65/I-70 inner-loop ramps and garages with IND-07/08/09/10 | Estimate: regional commute transit 0.6%; All-Star inference ~2.6% even fare-free; walk share from downtown residents (30,819 per [Downtown Indy Alliance via IndyStar/Yahoo](https://www.yahoo.com/news/articles/downtown-indianapolis-faring-5-trends-200110043.html), full article blocked) and hotels |
| IND-05 | As IND-04; 7,100 downtown hotel rooms, 4,700 connected by skywalk ([ICCLOS](https://www.icclos.com/attendees/transportation/)) | IndyGo event page for 3–6 Apr 2026; 450 free bus/bikeshare passes for visiting students ([IndyGo](https://www.indygo.net/2026-march-madness-and-final-four-events/)) | Concurrent Fan Fest (Convention Center) and free concerts at American Legion Mall ([Axios](https://www.axios.com/local/indianapolis/2026/04/02/guide-2026-final-four-events-tickets)). Comparison: at the 2025 Final Four, game attendees were majority from more than 250 miles away while Fan Fest skewed local ([Placer.ai](https://www.placer.ai/anchor/articles/the-advertising-and-retail-opportunities-of-the-2026-final-four-in-indianapolis)) | Walk share raised for a hotel-based, out-of-town crowd; not additive with IND-04/06 |
| IND-06 | As IND-04 | No concert-specific transit found | Evening egress overlaps any same-night Gainbridge/Victory Field event | Kept at IND-04 value; rideshare (counted as car) likely higher |
| IND-07 | Virginia Avenue Garage connected by skybridge ([Ticketmaster venue guide](https://blog.ticketmaster.com/step-inside-gainbridge-fieldhouse-indianapolis-in/)); downtown supply as IND-04 | Near the Julia M. Carson Transit Center, which most routes serve ([IndyGo All-Star page](https://www.indygo.net/all-star-weekend)). Late-game service **not verified** | Weekday games overlap downtown work trips | Estimate, as IND-04 |
| IND-08 | Indians cap surrounding lot prices at $10 when they are the only event ([blog, weak source](https://danangell.substack.com/p/victory-field-indianapolis)); White River State Park garages shared | Route 8 nearest ([StubHub, weak](https://stubhub.com/_V-95574)) | Shares White River State Park and Maryland/West garages with IND-09 ([Ticketmaster](https://www.ticketmaster.com/amphitheater-at-white-river-state-park-tickets-indianapolis/venue/41695)) | Estimate, as IND-04 |
| IND-09 | Venue has no own lot; 2,000+ park spaces first-come ([ParkMobile](https://parkmobile.io/parking/locations/in/indianapolis-parking/destination/everwise-amphitheater-at-white-river-state-park)); prepaid Zoo lot under a mile away; Uber is official rideshare ([Ticketmaster](https://www.ticketmaster.com/amphitheater-at-white-river-state-park-tickets-indianapolis/venue/41695)) | No concert-specific transit found | Shares approaches with IND-08 and Zoo | Estimate |
| IND-10 | As IND-04/05 | Ran through construction and storms in 2026 ([ICv2](https://icv2.com/articles/news/view/63046/gen-con-2026-news-gen-con-reveals-record-breaking-attendance-numbers)) | Uses Convention Center and Lucas Oil Stadium simultaneously; attendees from 45+ countries ([GamingTrend](https://gamingtrend.com/news/gen-con-2026-wrap-up-news/)) | Walk share bounded by hotel stock (Section 4.3). Multi-day total, never a single crowd |
| IND-11 | Free Greenwood Park Mall park-and-ride via 902 Connector, 45-minute frequency ([Daily Journal](https://dailyjournal.net/?p=1871138)) | Fare-free 15–18 Feb; extended service to 12:30 a.m. from the transit center 16–18 Feb ([IndyGo](https://www.indygo.net/all-star-weekend)). IndyGo reported gridlock on key thoroughfares during peak events ([APTA](https://aptapassengertransport.com/indygo-hits-a-slam-dunk-in-ridership-during-nba-all-star-weekend/)) | Three downtown venues at once; snowstorm | Inference in Section 4.1 |
| IND-12 | Campus parking; quantity not found | Not researched | Residential neighbourhood; student walk-ins | Estimate; walk share uncertain |
| IND-13 | Fairgrounds lots | Purple Line State Fairgrounds station ([Wikipedia](https://en.wikipedia.org/wiki/Purple_Line_(IndyGo))) | 38th St shared with fair | Estimate |
| IND-14 | Not researched | Not researched | IU Indianapolis campus | No estimate |
| IND-15 | 2,000+ surface spaces managed by LAZ ([INDYtoday](https://indytoday.6amcity.com/sports/indy-fuel-make-debut-at-new-fishers-event-center)) plus Fishers District parking ([Visit Hamilton County](https://visithamiltoncounty.com/events/fishers-event-center/)) | Team named parking and exit efficiency as Year-2 fixes ([Current](https://www.youarecurrent.com/2025/05/05/sellout-season-indy-fuel-drew-capacity-home-crowds-at-new-fishers-event-center/)) | I-69 corridor shared with IND-16; team targets fans within 50 miles incl. Anderson and Muncie ([Current](https://youarecurrent.com/2025/01/21/icy-hot-fuel-games-selling-out-at-new-fishers-event-center/)) | Outside IndyGo area. 2,000 spaces × typical car occupancy is consistent with near-total car access but is **not** used as a mode share |
| IND-16 | On-site parking; campsite for most concerts ([StubHub, weak](https://stubhub.com/ruoff-music-center-tickets/venue/3681)) | None found | Off I-69 about 30 miles from Indianapolis ([Ticketmaster](https://blog.ticketmaster.com/venue-faq-ruoff-music-center-noblesville-in/)); shares I-69 with IND-15 | Campers arrive by car (car-involved) |
| SEP-B1 | Athletics lots sold out for big games; garages 0.7–1.4 miles away; free fan shuttle ([Sports Illustrated](https://www.si.com/college/indiana/football/indiana-football-opening-parking-lots-gates-early-for-sold-out-cincinnati-game)) | Shuttle starts hours before kickoff (same source) | I-69 from Indianapolis | Garage-to-shuttle = car-involved; student walk share is the main uncertainty |
| SEP-W1 | Hub lots with shuttles; 2026 route changes ([Purdue Athletics](https://purduesports.com/news/2026/08/28/get-ready-for-game-day-2026-ross-ade-updates-and-reminders)) | Shuttle drop-offs on Beering Dr and Tiller Dr (same source) | Campus | As SEP-B1 |

---

## 4. Ridership inferences and estimate assumptions

### 4.1 NBA All-Star 2024 (IND-11)

- **Observed:** IndyGo carried 10,000 more boardings during 15–18 Feb 2024 than in the same period a week earlier (+20%), with more than 190,000 fans downtown ([APTA](https://aptapassengertransport.com/indygo-hits-a-slam-dunk-in-ridership-during-nba-all-star-weekend/)).
- **Baseline subtraction:** the prior-week comparison is the baseline; incremental = 10,000 boardings.
- **Return trips:** assume each event person-trip needs two boardings (there and back) → ~5,000 incremental round trips.
- **Denominator:** 190,000 is a multi-day count of fan visits, not unique people.
- **Result:** 5,000 ÷ 190,000 ≈ **2.6%** of fan visits by bus.
- **Uncertainty:** fares were free, so some incremental trips were not event trips (biases high); transfers mean some trips used more than two boardings (biases high); regular riders who attended instead of making normal trips are not "incremental" (biases low); a snowstorm hit that weekend. Range **1–5%**.

### 4.2 Indiana State Fair 2026 (IND-03)

- **Observed:** the whole Purple Line carried more than 100,000 riders in March 2025 ([Wikipedia](https://en.wikipedia.org/wiki/Purple_Line_(IndyGo)); [City of Lawrence](https://www.cityoflawrence.org/news/2025/08/08/ride-indy-go-purple-line)) ≈ 3,200 boardings/day. No fair-specific station counts were found.
- **Denominator:** 800,461 ÷ 15 days ≈ 53,400 admissions/day (daily admissions, not unique people; peak concurrent crowd is smaller).
- **Ceiling illustration:** even if every Purple Line boarding on a fair day were a fair-goer, 3,200 ÷ 2 = 1,600 round trips ≈ **3.0%** of a day's admissions. Exceeding that requires the fair alone to double line ridership.
- **Plausible range:** assume the fair adds 500–4,000 boardings/day → 250–2,000 round trips → **0.5–4%**. Part of that is park-and-ride (car-involved), so the non-car bus share is at the low end.
- **Caveat:** the ridership baseline is March 2025, not August 2026; other routes near the fairgrounds were not assessed.

### 4.3 Walk share for downtown visitor events (IND-05, IND-10, IND-11)

- 7,100 downtown hotel rooms, 4,700 skywalk-connected ([ICCLOS](https://www.icclos.com/attendees/transportation/)). At an assumed 2.5–3 attendees per room, at most ~18,000–21,000 attendees can be walking distance from a downtown hotel.
- Against a ~70,000 Final Four session that caps hotel-walkers near 25–30%; Gen Con's 74,000 is a multi-day total, so the daily ratio is similar or higher.
- The Signia hotel adds 800 rooms from February 2027 ([ICCLOS](https://www.icclos.com/signia-by-hilton-indianapolis-now-accepting-reservations-for-february-2027/)), which would lift this ceiling slightly.

### 4.4 Shared assumptions for downtown regular events (IND-04, 06–09)

Transit 1–4% (bounded by 4.1 and the 0.6% commute share); walk/bike 4–15% (downtown residents, workers already downtown, some hotel guests); the remainder car. Season-ticket-heavy Colts crowds argue for the higher end of the car range.

---

## 5. Weighted car shares (estimates of estimates; no row is measured)

**Capacity-weighted, Indianapolis metro fixed venues ≥5,000, one standard configuration each** (football for Lucas Oil, basketball for Gainbridge, fixed seats for Victory Field, general capacity elsewhere; concert/expanded configurations excluded so nothing mutually exclusive is added):

| Venue (ID) | Weight (capacity) | Car share |
|---|---|---|
| Lucas Oil Stadium (IND-04) | 67,000 | 0.85 |
| Ruoff Music Center (IND-16) | 24,000 | 0.96 |
| Gainbridge Fieldhouse (IND-07) | 17,274 | 0.85 |
| Victory Field (IND-08) | 12,230 | 0.85 |
| Hinkle Fieldhouse (IND-12) | 9,100 | 0.80 |
| Fishers Event Center (IND-15) | 7,500 | 0.95 |
| Corteva Coliseum (IND-13) | 6,500 | 0.92 |
| Everwise Amphitheater (IND-09) | 6,000 | 0.85 |
| **Total / weighted** | **149,604** | **0.87** |

Adding IMS at ~275,000 grandstand seats (IND-01, 0.93) raises the result to **0.91**. Using 63,000 for Lucas Oil or 24,790 for Ruoff leaves 0.87 unchanged. Missing: Carroll Stadium (capacity unverified) and venues in the coverage-gap list.

**Typical-attendance-weighted, one typical occurrence each** (never summing a multi-day total as one crowd):

| Event (ID) | Weight | Car share |
|---|---|---|
| Indy 500 race day (IND-01) | 350,000 (estimate) | 0.93 |
| Colts game (IND-04) | ~62,400 (93% of 67,000) | 0.85 |
| State Fair average day (IND-03) | ~53,400 | 0.92 |
| Indians game (IND-08) | 7,817 (2025 avg) | 0.85 |
| Fuel game (IND-15) | 5,648 (2024–25 avg) | 0.95 |
| **Weighted** | **479,266** | **0.92** |

Without the Indy 500: **0.88**. Missing: Pacers/Fever and concert averages (not retrieved), so this weighting over-represents outlying venues.

**Do huge outlying venues obscure the downtown pattern?** They pull the regional figure up (0.87 → 0.91 with IMS) but do not hide a different downtown pattern: downtown regular-event estimates sit at ~0.85, outlying venues at 0.92–0.96. The only material downtown departure is visitor-heavy, hotel-based events (0.70–0.78).

---

## 6. Clusters, shared roads and shared audiences (separate findings)

1. **Downtown cluster.** Lucas Oil Stadium, Gainbridge Fieldhouse, Victory Field, Everwise Amphitheater and the Convention Center share the same downtown garage pool (70,000+ spaces) and inner-loop ramps. Big events use several at once (All-Star used three; Gen Con used two). IndyGo reported thoroughfares jammed during All-Star peaks ([APTA](https://aptapassengertransport.com/indygo-hits-a-slam-dunk-in-ridership-during-nba-all-star-weekend/)). Victory Field and Everwise share White River State Park garages ([Ticketmaster](https://www.ticketmaster.com/amphitheater-at-white-river-state-park-tickets-indianapolis/venue/41695)).
2. **West side / Speedway.** Indy 500 race day closes or detours seven IndyGo routes ([IndyGo](https://www.indygo.net/transit-news/2026-indianapolis-500-will-lead-to-significant-indygo-detours-and-stop-closures-on-the-west-side/)); the May Mini-Marathon closes streets between IMS and downtown ([IndyGo](https://www.indygo.net/transit-news/indygo-transit-impacts-during-oneamerica-500-festival-mini-marathon/)).
3. **38th Street.** State Fair and Corteva Coliseum share the Fairgrounds and the Purple Line.
4. **I-69 northeast corridor.** Fishers Event Center (116th St) and Ruoff (146th St) share I-69; the Fuel market explicitly reaches Anderson and Muncie by I-69.
5. **Shared audiences.** Colts crowds are ~90% season-ticket holders (repeat, regional). Final Four game crowds skew long-distance while fan-fest crowds skew local (Placer.ai comparison). No distance rule or hard-access flag is proposed.

---

## End section

### 1. Recommended existing city type and rationale

**Recommend `sprawl`** (medium confidence).

- Event public-transit use is small wherever it can be bounded: ~2.6% for a fare-free, service-extended NBA All-Star weekend; ≤ ~3% for the State Fair with BRT at the gate; zero for Indy 500 race day.
- Regional background is among the most car-reliant of large US metros (0.6% transit commute).
- Suburban venues (Fishers, Noblesville) are outside IndyGo's service area and parking-led.
- Estimated car shares cluster at 0.85–0.96; the `transit` default of 0.4 is clearly contradicted.

**Strongest contrary evidence.** Downtown is a compact, walkable multi-venue core with 70,000+ shared parking spaces, 7,100 hotel rooms and frequent multi-venue mega-events. If `hub` mainly changes spill between nearby crowds, that spill behaviour describes downtown well. However, `sprawl` and `hub` share the same 0.85 fallback, so the car-share evidence cannot separate them; the choice rests on whether a region whose non-car share comes almost entirely from walking-from-hotels should be called "in between". The evidence says no for the region as a whole.

**Venue exceptions (use venue-specific overrides rather than changing city type).** IND-05 Final Four (0.75), IND-10 Gen Con (0.70), IND-11 All-Star-type events (0.78), IND-12 Hinkle (0.80) are below the fallback; IND-01/02/03/13/15/16 (0.92–0.96) are above it. The fallback 0.85 therefore under-states car share at outlying venues and roughly matches downtown regular events.

### 2. Car-share values keyed to rows

| Row | Measured | Projected | Inferred component | Estimated value |
|---|---|---|---|---|
| IND-01 Indy 500 | — | — | Public transit 0% (no service) | 0.93 |
| IND-02 Brickyard 400 | — | — | — | 0.93 |
| IND-03 State Fair | — | — | Bus 0.5–4% | 0.92 |
| IND-04 Colts | — | — | — | 0.85 |
| IND-05 Final Four | — | — | — | 0.75 |
| IND-06 Stadium concert | — | — | — | 0.85 |
| IND-07 Gainbridge | — | — | — | 0.85 |
| IND-08 Victory Field | — | — | — | 0.85 |
| IND-09 Everwise | — | — | — | 0.85 |
| IND-10 Gen Con | — | — | — | 0.70 |
| IND-11 NBA All-Star 2024 | — | — | Bus ~2.6% (1–5%) | 0.78 |
| IND-12 Hinkle | — | — | — | 0.80 |
| IND-13 Corteva Coliseum | — | — | — | 0.92 |
| IND-14 Carroll Stadium | — | — | — | Unknown → fallback 0.85 |
| IND-15 Fishers Event Center | — | — | — | 0.95 |
| IND-16 Ruoff | — | — | — | 0.96 |
| SEP-B1 IU Memorial Stadium | — | — | — | 0.72 |
| SEP-W1 Ross-Ade | — | — | — | 0.72 |

No measured or projected values were found for any row.

### 3. Boundary recommendation and inconsistencies between briefs

**Recommended boundary:** the Indianapolis–Carmel–Greenwood MSA, 2,205,695 people in 2025 ([Wikipedia, Census estimates](https://en.wikipedia.org/wiki/Indiana_statistical_areas)), described as an 11-county area ([Wikipedia](https://en.wikipedia.org/wiki/Indianapolis_metropolitan_area)). Core: Marion County (992,196) and Hamilton County (387,036) (same source), plus the ring counties that supply about a quarter of Marion County's workforce ([Hoosier Data](https://www.hoosierdata.in.gov/region5.asp)). Speedway sits inside Marion County and belongs in the core.

**Edge municipalities (assess separately):** Anderson (Madison Co., inside the MSA, reached by I-69 and named in Fuel marketing); Muncie (in the wider combined statistical area but not the MSA); Brownsburg (Hendricks Co.; a motorsport venue there was not verified in this pass).

**Bloomington and West Lafayette:** keep outside the Indianapolis boundary and treat as their own records. Their football crowds are partly Indianapolis-sourced via I-69/I-65, but campus walk shares and separate road networks make them different places.

**Inconsistencies between briefs:**
- The companion venue answer was referenced but not supplied, so row keys could not be matched to it.
- The brief's "Marion plus connected counties" differs from the 11-county MSA and the 9-county state workforce region ([Hoosier Data](https://www.hoosierdata.in.gov/region5.asp)).
- "Major college venues" is ambiguous; Butler (in metro) and IU/Purdue (separate metros) are treated differently here.
- `sprawl` and `hub` have identical car-share defaults, so a car-share brief cannot by itself decide between them.
- Some venues have mutually exclusive configurations (Lucas Oil football/basketball/concert); these need separate rows, not one value.

### 4. Data gaps, model limitations, source conflicts, inaccessible sources

**Gaps.**
- No event mode survey, travel plan or environmental review with a mode split was found for any Indianapolis venue.
- No stop-level IndyGo event ridership; no IMS shuttle passenger counts; Brickyard 400 attendance unpublished.
- No Pacers/Fever average attendance retrieved; no Carroll Stadium 2026 capacity.
- Venues not verified in this pass (possible 1,000+ rooms): Old National Centre/Murat Theatre (about 2,500 per [IBJ](https://www.ibj.com/articles/center-of-attention)), Clowes Memorial Hall, Hilbert Circle Theatre, IU Natatorium, University of Indianapolis stadium, Grand Park (Westfield), Lucas Oil Indianapolis Raceway Park (Brownsburg), IU Assembly Hall, Purdue Mackey Arena.
- End-of-event transit service for Colts, Pacers and concerts not verified.

**Model limitations.** Every recommended value is an estimate; ranges are wide. Weighted averages combine estimates and inherit their error. Rideshare is counted as car, so car share says nothing about parking demand.

**Source conflicts (preserved).**
- Lucas Oil football capacity: 67,000 ([official](https://www.lucasoilstadium.com/tours-stadium-info/background-history/)) vs 63,000 ([WSP](https://www.wsp.com/en-us/projects/lucas-oil-stadium)); WSP also gives 75,000 expanded.
- State Fair 2026: 800,461 and 6.4% drop ([Axios](https://www.axios.com/local/indianapolis/2026/09/03/indiana-state-fair-attendance-dips-after-storm-soaked-start)) vs 800,641 and 7% ([Indiana Capital Chronicle](https://indianacapitalchronicle.com/2026/09/02/severe-weather-hampers-state-fair-attendance/)) — likely a transposition; 800,461 used.
- Indy 500 2026: ~350,000 pre-race estimate vs "more than 330,000" post-race report (both linked in IND-01).
- Gainbridge basketball 17,274 vs 17,923; Ruoff 24,000 vs 24,790; Everwise 6,000 vs 3,000; Fishers Event Center 6,500 / 7,500 / 8,500 by configuration; Ross-Ade 61,441 vs 57,282 (all linked in Table 3A).
- Blue Line opening: summer 2027 ([FTA profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/2024-03/IN-Indianapolis-IndyGO-Blue-Line-Rapid-Transit-Profile-AR25.pdf)) vs 2028 ([Mirror Indy](https://mirrorindy.org/indygo-transit-center-docking-bays-blue-line/)).

**Inaccessible sources (not bypassed).**
- IBJ's 2026 State Fair article is subscriber-only ([IBJ](https://www.ibj.com/articles/amid-severe-weather-fewer-people-attended-2026-indiana-state-fair)).
- The IndyStar/Yahoo article on the 2026 Downtown Indy Alliance report returned an HTTP 429 error; only the search snippet (30,819 downtown residents) was used ([Yahoo](https://www.yahoo.com/news/articles/downtown-indianapolis-faring-5-trends-200110043.html)).

### 5. Confirmed transport or venue changes through 2028

| Change | Status | Date | Relevance | Suggested re-check |
|---|---|---|---|---|
| IndyGo Purple Line BRT (serves State Fairgrounds) | Open | Opened 13 Oct 2024 ([Wikipedia](https://en.wikipedia.org/wiki/Purple_Line_(IndyGo))) | IND-03, IND-13 | Aug 2027 (fair) |
| Purple Line park-and-ride to the fair | Operated 2026; renewal not announced | 7–23 Aug 2026 ([IndyGo](https://www.indygo.net/transit-news/indygo-the-city-of-lawrence-and-ivy-tech-community-college-partner-to-provide-first-ever-purple-line-park-ride/)) | IND-03 | Jul 2027 |
| Fishers Event Center | Open | Fuel debut Dec 2024 ([INDYtoday](https://indytoday.6amcity.com/sports/indy-fuel-make-debut-at-new-fishers-event-center)) | IND-15 | Annual |
| IndyGo Blue Line BRT (replaces Route 8, which serves Lucas Oil and White River State Park; airport link) | Scheduled and under construction | Construction 2025–2028 ([IndyGo](https://www.indygo.net/?p=380440)); opening 2028 ([Mirror Indy](https://mirrorindy.org/indygo-transit-center-docking-bays-blue-line/)) | IND-04/08/09 | Q2 2027, then at opening |
| Transit center docking bays for Blue Line | Scheduled | Construction 2026, completion 2027 ([Mirror Indy](https://mirrorindy.org/indygo-transit-center-docking-bays-blue-line/)) | Downtown cluster | Q3 2027 |
| Indiana Convention Center expansion | Scheduled (stated summer 2026) | ([ICCLOS](https://www.icclos.com/about-us/indiana-convention-center-expansion-project/)) | IND-10 | Jan 2027 |
| Signia by Hilton (800 rooms, skywalk to Convention Center) | Scheduled | Reservations from 1 Feb 2027 ([ICCLOS](https://www.icclos.com/signia-by-hilton-indianapolis-now-accepting-reservations-for-february-2027/)) | IND-05, IND-10 walk share | Mar 2027 |
| Gen Con in Indianapolis | Scheduled | 5–8 Aug 2027 ([GamingTrend](https://gamingtrend.com/news/gen-con-2026-wrap-up-news/)); committed through 2030 ([Axios](https://www.axios.com/local/indianapolis/2026/07/27/gen-con-2026-rolls-into-indianapolis-with-momentum)) | IND-10 | Aug 2027 |
| Indiana State Fair | Scheduled | 6–22 Aug 2027 ([95.3 MNC](https://www.953mnc.com/?p=284490)) | IND-03 | Sep 2027 |
| MLS soccer-specific stadium near Lucas Oil Stadium | **Proposal only**; undisclosed site pitched Sep 2026 ([Axios](https://www.axios.com/local/indianapolis/2026/09/18/indy-renews-mls-talks-football-stadium-district); [Fox59](https://fox59.com/news/indianapolis-still-being-considered-for-mls-team-with-new-stadium-location/)) | No date | Would add a downtown-cluster venue | After 2027 legislative session (Apr 2027) |
| Eleven Park (Indy Eleven stadium, Diamond Chain site) | **Stalled**; city withdrew support in 2024 ([WTHR](https://www.wthr.com/article/sports/soccer/indy-eleven/indy-eleven-development-group-make-case-move-forward-stadium-major-league-soccer-bid-expansion-team-indianapolis/531-0a712d75-438c-48a6-888c-3101c84a28f9)); team still at Carroll Stadium in 2026 | No date | IND-14 | Apr 2027 |
| IndyGo fares | Changed: fair-route fare $1.75 in 2025 ([Lawrence](https://www.cityoflawrence.org/news/2025/08/08/ride-indy-go-purple-line)) vs $2.75 in 2026 ([Lawrence](https://www.cityoflawrence.org/news/2026/08/05/purple-line-park-ride-indiana-state-fair)) | In effect | Small downward pressure on event transit | Annual |
