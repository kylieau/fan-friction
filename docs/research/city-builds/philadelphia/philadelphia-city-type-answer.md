# Philadelphia city-type answer for Fan/Friction Gridlock

**Research date:** October 11, 2026. All sources were accessed on or before this date. Figures carry the date of the underlying evidence, which is often older.

**Scope note.** The companion venue answer was not available in this conversation, so venues were enumerated independently (Section 3). Row IDs (V01, E01, ...) are this document's own keys; map them to the companion answer when it is available.

**Definitions used throughout**

| Term | Meaning in this document |
|---|---|
| Car share | Share of **attendees (people)** arriving by private car, carpool, taxi or rideshare. Rideshare counts as car because it puts a vehicle on venue approaches. |
| Car-involved | Includes anyone who drove part of the trip: drive to remote parking then shuttle, or drive to a Regional Rail / park-and-ride lot then subway. Such trips are **not** counted as non-car. |
| Transit | Public bus, subway, light rail, Regional Rail, PATCO, ferry. Dedicated event shuttles are listed separately. |
| Boardings | Turnstile entries or passenger counts. These are trips, not people, and may include non-ticket holders (tailgaters, bar crowds, employees). |
| Measured / projected / estimated | Measured = observed count for that venue; projected = a planning study's assumption for a future facility; estimated = this document's transparent inference from local counts. |

---

## 1. Bottom line

**Recommended existing city type: `hub` (in between).** Every major Philadelphia venue for which evidence exists is car-dominated: central estimates for the South Philadelphia Sports Complex are 0.74–0.81 car-involved (ranges 0.68–0.87), and the outlying amphitheaters and the Chester stadium are estimated higher, at 0.88–0.93. No observed recurring event comes close to the `transit` default of 0.4. The reasons for `hub` rather than `sprawl` are structural rather than numeric (both use the same 0.85 fallback): the region's three largest venues share one site, one parking field and one subway terminal, so crowd spill between neighbors is the dominant Gridlock mechanism, and the subway carries a real minority of fans (roughly a fifth to a quarter for Eagles games). Details and contrary evidence are in Section 5.

---

## 2. Evidence method

**Sources searched:** City of Philadelphia independent traffic review of the proposed 76 Place arena; Sports Complex Special Services District (SCSSD) parking and venue data; SEPTA event-ridership statements as reported by SEPTA, WHYY, the Inquirer, CBS and PhillyVoice; venue and team transport pages; FIFA/host-city operating notices; Census/OMB statistical-area data; DVRPC regional definitions.

**What was not found:** No published attendee travel survey for any Philadelphia-area venue; no SEPTA counts for arena (Sixers/Flyers) events; no PATCO, NJ Transit River LINE or RiverLink counts for Camden Waterfront concerts; no event parking-occupancy counts.

**Ridership inference method (used for V01, V02, E03):**

1. Take SEPTA's reported event-specific count at NRG Station. SEPTA describes these as fans taking SEPTA to the complex on game days, or as post-game boardings/turnstile rotations at NRG ([WHYY, 2022](https://whyy.org/articles/phillies-world-series-home-games-septa-transit-trains-buses-guide); [Inquirer, July 2026](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html)).
2. **Baseline subtraction:** SEPTA's figures are already game-specific counts at a station whose non-event weekend use is small; no further subtraction is applied, but the counts include non-ticket holders (tailgaters, Stateside Live patrons, staff), so the resulting transit share is an **upper bound** for attendees.
3. **Return trips:** a post-event northbound count is a one-way person count; it is not doubled. A person who arrives by car and leaves by subway (or the reverse) is miscounted either way; this is a known, unquantified error.
4. **Denominator:** published venue capacity, because per-game paid attendance was not retrieved. Using capacity rather than actual attendance biases the transit share **down** for non-sellouts.
5. **Free-ride nights:** some counts come from turnstile rotations; on sponsor-funded free-ride nights gates may be open, which would **undercount** riders. Direction of net bias is therefore uncertain.
6. **Park-and-ride adjustment:** an unknown fraction of subway riders drove to a suburban rail station or Center City garage first. A historical SEPTA release notes many fans did exactly that ([BLET reprint of SEPTA release](https://blet.org/news/24000-fans-use-septa-to-south-philadelphia-sports-complex-on-saturday/)). This document assumes 0–30% of subway riders were car-involved and shows the effect as a range.
7. **Never used:** parking-space totals were not converted into a mode share.

**Ordinary commuting (background only, not event travel):** about [20.1% of Philadelphia city resident workers commuted by transit in 2024 ACS](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership), and a Penn analysis of 2017–2021 ACS put transit at [24.0% for the city but 6.4% for the metro region](https://sustainability.upenn.edu/news/penn-employee-commuters-are-choosing-sustainable-transportation-more-so-most-region) (excluding work-from-home). The gap between city and region matters because event audiences are regional.

---

## 3. Venue and event inventory (independent enumeration)

Fixed rooms are listed by largest verified configuration. Rows marked "capacity not verified" were identified but not sourced in this pass; no number is asserted for them.

| ID | Verified current name | Municipality / county | Largest configuration (source) | In travel table? |
|---|---|---|---|---|
| V01 | Lincoln Financial Field | Philadelphia (South Phila. Sports Complex) | [69,176](https://scssd.org/sports-complex-info/) | Yes |
| V02 | Citizens Bank Park | Philadelphia (Sports Complex) | [43,651](https://scssd.org/sports-complex-info/) | Yes |
| V03 | Xfinity Mobile Arena (renamed from Wells Fargo Center [effective Sept 1, 2025](https://6abc.com/post/wells-fargo-center-south-philadelphia-is-getting-new-name/16339478/)) | Philadelphia (Sports Complex) | [20,000](https://scssd.org/sports-complex-info/) | Yes |
| V04 | Franklin Field (Penn) | Philadelphia (University City) | [52,593 seats](https://www.thedp.com/article/2026/04/penn-relays-issue-2026-130th-anniversary-by-the-numbers) | Yes (via Penn Relays E04) |
| V05 | Freedom Mortgage Pavilion | Camden, NJ (Camden Co.) | [25,488 outdoor / 7,000 indoor](https://en.wikipedia.org/wiki/Freedom_Mortgage_Pavilion); venue-adjacent listing gives [25,000 / 7,000](https://blog.ticketmaster.com/venue-faq-freedom-mortgage-pavilion-camden-nj/) | Yes |
| V06 | Subaru Park | Chester, PA (Delaware Co.) | [about 18,000](https://www.koobit.com/breakaway-philadelphia-e81465) (secondary listing; verify) | Yes |
| V07 | TD Pavilion at the Mann (Mann Center; verify naming after the [Highmark partnership announced Oct 2025](https://www.phillyvoice.com/mann-center-charge-for-parking/)) | Philadelphia (West Fairmount Park) | [about 14,000](https://blog.ticketmaster.com/step-inside-td-pavilion-the-mann-philadelphia-pa) | Yes |
| V08 | Liacouras Center (Temple) | Philadelphia (North Broad) | [10,000 full house / 5,500 half house](https://www.liacourascenter.com/concerts-comedy-boxing) | Yes |
| V09 | Finneran Pavilion (Villanova) | Radnor Twp. (Villanova), Delaware Co. | [6,501 basketball](https://villanova.com/sports/2024/8/5/finneran-pavilion.aspx) | Yes |
| V10 | Villanova Stadium | Radnor Twp., Delaware Co. | Capacity not verified | Gap |
| V11 | The Palestra (Penn) | Philadelphia (University City) | Capacity not verified | Gap |
| V12 | The Met Philadelphia | Philadelphia (North Broad) | Capacity not verified | Gap |
| V13 | Dell Music Center | Philadelphia (East Fairmount Park) | Capacity not verified | Gap |
| V14 | Kimmel Center (Marian Anderson Hall), Academy of Music, other Avenue of the Arts theaters | Philadelphia (Center City) | Capacity not verified | Gap |
| V15 | The Fillmore Philadelphia; Franklin Music Hall | Philadelphia | Capacity not verified | Gap |
| V16 | Pennsylvania Convention Center (event halls) | Philadelphia (Center City) | Not a fixed room | Gap |
| V17 | Temple football at Lincoln Financial Field | Philadelphia | Shares V01 configuration | Unknown row |
| V18 | Stadium concerts at V01/V02 | Philadelphia | Shares V01/V02 configurations | Unknown row |

**Edge-case venues (outside the recommended core; see Section 6):** Chase Center on the Riverfront (Wilmington, DE; in the MSA), CURE Insurance Arena (Trenton, NJ; Mercer County, outside the MSA), Parx Casino event space (Bensalem, Bucks Co.; in the MSA), Atlantic City Boardwalk Hall (outside; see boundary), Santander Arena (Reading; outside). Capacities were not verified in this pass.

**Event-specific crowds (not fixed-capacity records):**

| ID | Event | Where / when represented | Crowd figure (source) |
|---|---|---|---|
| E01 | Eagles regular season | V01, Sept–Jan | see V01 |
| E02 | NFC Championship, Jan 2025 | V01 | [31,087 post-game B-line riders](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html) |
| E03 | FIFA World Cup 2026, six matches | V01, June 14–July 4, 2026 | [six matches; 155,333 B-line passengers over three weeks](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html) |
| E04 | Penn Relays | V04, April 23–25, 2026 | [about 100,000 spectators over three days](https://www.thedp.com/article/2026/04/penn-relays-issue-2026-130th-anniversary-by-the-numbers); [single-day record 53,310 (2010)](https://www.thedp.com/article/2025/04/penn-relays-data-analytics-attendance) |
| E05 | IBX Broad Street Run | Broad St., North Phila. to Navy Yard, May 3, 2026 | [40,000 runners](https://www.nbcphiladelphia.com/tag/broad-street-run/) |
| E06 | July 4 Parkway concert and fireworks | Ben Franklin Parkway, July 4, 2026 | 2026 count not found; [about 200,000 expected over 9.5 hours in 2019](https://inquirer.com/news/philadelphia/philadelphia-fourth-of-july-fireworks-celebrations-welcome-america-20190704.html) |
| E07 | FIFA Fan Festival | Lemon Hill, Fairmount Park, 39 days in June–July 2026 | Attendance not found |
| E08 | Army–Navy Game | V01, [Dec 11, 2027](https://www.militarytimes.com/off-duty/military-sports/army-navy-game/2022/06/19/army-navy-football-game-is-coming-to-five-east-coast-cities-beginning-in-2023/) | Future event |
| E09 | Philadelphia Marathon | November | Not researched in this pass (gap) |
| E10 | MLB All-Star Game | V02, July 14, 2026 | SEPTA [expected smaller impact than the World Cup](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html); no counts found |

**Multi-day totals are never treated as one simultaneous crowd.** Penn Relays' ~100,000 is a three-day total; the World Cup's 155,333 is a three-week line total spanning six matches plus other events.

---

## 4. Venue and event travel table

### 4.1 Summary

| ID | Venue / event and setup | Car share (car-involved) | Public transit | Event shuttle | Walk/bike/other + unclassified | Sums to 100%? | Recommended car value (range) | Confidence | Value type |
|---|---|---|---|---|---|---|---|---|---|
| V01/E01 | Lincoln Financial Field, Eagles regular season | ~70–80% (derived) | 22–26% B line (derived) + unmeasured bus | None | Residual | By construction | **0.74** (0.68–0.80) | Medium-low | Estimated from SEPTA counts |
| V02 | Citizens Bank Park, sold-out Phillies game | ~78–85% (derived) | ~16% B line (derived) + unmeasured bus | None | Residual | By construction | **0.81** (0.75–0.86) | Medium-low | Estimated from SEPTA counts |
| V03 | Xfinity Mobile Arena, Sixers/Flyers | ~75% "drive" per team official; 75–85% and 85% claims conflict | Not published | None | Not published | No (only car share stated) | **0.80** (0.72–0.87) | Low-medium | Claimed (not survey) |
| E03 | Lincoln Financial Field, World Cup 2026 (Brazil–Haiti, Fri June 19, Juneteenth) | ~45–58% (derived) | up to 42–45% B line post-match (upper bound) | None | Residual | By construction | **0.52** (0.42–0.60), one-off only | Low | Estimated, non-recurring |
| E02 | Lincoln Financial Field, NFC Championship Jan 2025 | Not derivable | 31,087 post-game riders incl. celebrants | None | — | No | Not used | — | Boardings only |
| V05 | Freedom Mortgage Pavilion, summer amphitheater concert | Unknown | PATCO 0.7 mi; River LINE adjacent; seasonal ferry | None | Unknown | No | **0.88** (0.80–0.94) | Low | Estimated from service supply |
| V06 | Subaru Park, Union match | Unknown | Regional Rail to Chester + free shuttle | Free shuttle (rail connection) | Unknown | No | **0.93** (0.88–0.97) | Low | Estimated from service supply |
| V07 | Mann Center, summer concert | Unknown | Mann Loop (select shows) + routes 38/40/43 | None | Unknown | No | **0.88** (0.80–0.94) | Low | Estimated from service supply |
| V08 | Liacouras Center | Unknown | B line + Regional Rail nearby | None | Students walk | No | Unknown; fallback 0.85 applies | — | Unknown |
| V09 | Finneran Pavilion, Villanova basketball | Unknown | On-campus Regional Rail station | None | Students walk | No | Unknown; fallback 0.85 applies | — | Unknown |
| V04/E04 | Franklin Field / Penn Relays | Unknown | 30th St and University City transit nearby | None | Unknown | No | Unknown; fallback 0.85 applies | — | Unknown |
| V17 | Temple football at Linc | Unknown | Same as V01 | None | Unknown | No | Unknown; fallback 0.85 applies | — | Unknown |
| V18 | Stadium concerts at V01/V02 | Unknown | Same as V01/V02 | None | Unknown | No | Unknown; fallback 0.85 applies (analog range 0.65–0.85) | — | Unknown |
| E05 | Broad Street Run | Unknown; many trips are car + subway | B line free for registered runners | None | Unknown | No | Unknown (car-involved, morning) | — | Unknown |
| E06/E07 | July 4 Parkway / Fan Festival | Unknown | System-wide uplift reported | None | Unknown | No | Unknown | — | Unknown |
| E08 | Army–Navy 2027 | Unknown | Same as V01 | None | Unknown | No | Unknown; fallback 0.85 applies | — | Future |

"By construction" means the car value is the residual after subtracting estimated transit and walk shares, so the split sums to 100% only because it was built that way; it is not a measured split.

### 4.2 Row details

#### V01 / E01 — Lincoln Financial Field, Eagles regular-season game

| Field | Detail |
|---|---|
| Setup represented | NFL regular season, fall–winter, mostly Sunday afternoon plus primetime; seated capacity [69,176](https://scssd.org/sports-complex-info/) |
| Transit evidence | SEPTA projects [15,000–17,000 fans take SEPTA to the complex on Eagles game days](https://www.inquirer.com/eagles/septa-service-cuts-broad-street-line-sports-complex-20250816.html) (Aug 2025; full article behind a registration wall, read from search summary only); SEPTA said an Eagles game [usually brings 15,000 riders](https://whyy.org/articles/phillies-world-series-home-games-septa-transit-trains-buses-guide) (2022). Record playoff loads: [19,822 for the Jan 2023 divisional game](https://www.cbsnews.com/amp/philadelphia/news/free-rides-on-septa-broad-street-line-after-eagles-49ers-nfc-championship-game). |
| Derivation | 15,000 ÷ 69,176 = 21.7%; 17,000 ÷ 69,176 = 24.6%; 17,000 ÷ 66,000 (assumed non-sellout floor, unsourced) = 25.8%. Transit (B line) ≈ 22–26%. Add 1–3% unmeasured bus (route 4 serves the complex directly per [SEPTA service notice](https://lowerbuckstimes.com/2025/10/03/septa-adds-service-for-sports-events/)) and 1–3% walk/bike from adjacent neighborhoods (assumption). Residual car = 68–76%. Park-and-ride adjustment (0–30% of subway riders drove first) adds 0–8 points. |
| Car / transit / shuttle / other | Car-involved ~70–80%; B line 22–26% (upper bound, includes non-ticket tailgaters and staff); no dedicated shuttle; walk/bike/other residual |
| Recommended | **0.74**, range 0.68–0.80, medium-low confidence |
| Historical cross-check | An undated SEPTA release on a Saturday Jan 12 Eagles playoff game said about one quarter of fans used SEPTA, with many parking at suburban rail stations ([BLET reprint](https://blet.org/news/24000-fans-use-septa-to-south-philadelphia-sports-complex-on-saturday/)). The described schedule is consistent with the Veterans Stadium era (inference); it agrees with the modern range. |
| Parking | Sports Complex venue lots [20,307 spaces plus 3,116 optional overflow (FDR Park 1,600; Naval Hospital 1,516) = 23,423](https://scssd.org/wp-content/uploads/2021/01/SportsComplexParking_08-22-2025.pdf), excluding private lots. The SCSSD venue page rounds to [22,000](https://scssd.org/sports-complex-info/); the gap is definitional (overflow lots). Large-scale tailgating lengthens arrival. |
| Event operations | Sports Express trips on the B line before games; sponsor-funded free rides home from halftime, for [70 minutes after the 2025 opener](https://6abc.com/amp/post/philadelphia-eagles-fans-say-septa-transportation-went-smoothly-home-opener/17744476/). Sports Express was [slated to end with the Aug 2025 service cuts](https://x.com/SEPTAPHILLY/status/1938324949229572240) and restored for the opener with FanDuel funding ([6abc](https://6abc.com/amp/post/philadelphia-eagles-fans-say-septa-transportation-went-smoothly-home-opener/17744476/)). SEPTA runs about [9–10 trains from NRG in the first post-game hour](https://www.inquirer.com/eagles/septa-service-cuts-broad-street-line-sports-complex-20250816.html). End-of-event service: verified for 2025. |
| Access constraints / shared crowds | Broad St., Pattison Ave., I-76, I-95; shares lots with V02/V03. All three venues hosted events on Oct 17, 2023 and [all lots filled for the first time](https://www.foxnews.com/sports/philadelphia-sports-complex-parking-lots-filled-1st-time-ever-events-all-venues-report) (62,824 at the Linc). Even with transit restored, aerial footage showed [gridlock on Broad and Pattison at the 2025 opener](https://6abc.com/amp/post/philadelphia-eagles-fans-say-septa-transportation-went-smoothly-home-opener/17744476/). |

#### V02 — Citizens Bank Park, sold-out Phillies game

| Field | Detail |
|---|---|
| Setup represented | MLB, spring–fall, sold-out game; capacity [43,651](https://scssd.org/sports-complex-info/) |
| Transit evidence | A typical sold-out game brings [about 7,000 riders, tracked by turnstile rotations at NRG as games let out](https://whyy.org/articles/phillies-world-series-home-games-septa-transit-trains-buses-guide) (2022) |
| Derivation | 7,000 ÷ 43,651 = 16.0%. Add 1–3% bus, 1–3% walk/bike (assumption). Residual car = 78–82%; park-and-ride adjustment adds 0–5 points. |
| Recommended | **0.81**, range 0.75–0.86, medium-low confidence. Non-sellout and weekday-afternoon games are not separately evidenced. |
| Parking | Shared Sports Complex supply (V01 row) |
| Event operations | Playoff games get extra B-line Express trains from Fern Rock, e.g. [six Express trains every 10 minutes for Oct 2024 playoff games](https://wwww.septa.org/news/septa-to-offer-extra-broad-street-line-b-service-for-phillies-playoff-games-oct-5-6/) and [six for an Oct 2025 playoff game](https://lowerbuckstimes.com/2025/10/03/septa-adds-service-for-sports-events/); trains wait at NRG after games. Regular-season extra service not verified. |
| Shared crowds | Same approaches and lots as V01/V03; Stateside Live |

#### V03 — Xfinity Mobile Arena, Sixers/Flyers games

| Field | Detail |
|---|---|
| Setup represented | NBA/NHL, Oct–Apr (plus playoffs), evenings; capacity [20,000](https://scssd.org/sports-complex-info/); about [2.5 million guests across 220+ events a year](https://www.theticket.com/?p=2320497) |
| Car evidence (conflicting) | A team ownership official estimated [about 75% of fans drive](https://www.inquirer.com/newsletters/morning/parking-sixers-arena-basketball-downtown-center-city-arena-public-transit-cars-chinatown-20230614.html) (June 2023). A pro-arena op-ed said [75 to 85%](https://thephiladelphiacitizen.org/guest-commentary-why-76-place-is-a-boon-for-septa/) without a cited survey. An opposing coalition said [85%, attributing it to the traffic study](https://downbeach.com/sports/sixers/philadelphia-76ers-news-76-place/). None is a published survey. |
| Rideshare | Sixers sponsored content says [45% of Uber riders to the arena come from downtown](https://www.phillymag.com/sponsor-content/sixers-stadium-questions/); it does not give a rideshare mode share. Whether "drive" in the 75% claim includes rideshare is unstated. |
| Transit | No SEPTA arena counts published. |
| Recommended | **0.80**, range 0.72–0.87, low-medium confidence. 0.80 sits at the team estimate plus a small rideshare allowance; the range spans all three claims. |
| Split sums? | No. Only a car share is claimed; transit/walk are the unexplained remainder. |
| Operations | Same B-line Sports Express pattern on busy weekends ([CBS](https://www.cbsnews.com/philadelphia/news/septa-increasing-broad-street-line-service-for-busy-philly-sports-weekend)) |
| Not to be confused with | The 76 Place **projection** for a Center City arena: [40% auto, 10% taxi/ride-hail, 40% transit, 10% walk/other, 2.5 persons per car](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf). Under this document's definition that is **50% car**, not 40%. The project was abandoned in January 2025 ([PhillyVoice](https://phillyvoice.com/76ers-south-philly-new-arena-architects-comcast-spectacor-populous)); it is a projection for a site that will not be built and is not evidence about the current arena. |

#### E03 — Lincoln Financial Field, FIFA World Cup 2026 (non-recurring)

| Field | Detail |
|---|---|
| Setup | Six matches June 14–July 4, 2026. Representative match: Brazil–Haiti, Fri June 19 (federal holiday). |
| Transit evidence | [29,162 post-match northbound boardings at NRG after Brazil–Haiti](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html), SEPTA's second-highest stadium-complex count. SEPTA notes some riders were heading to Stateside Live or pre-game activity rather than the match. |
| Derivation | 29,162 ÷ 69,176 = 42.2%; ÷ 65,000 (assumed reduced FIFA configuration; attendance not found) = 44.9%. This is an upper bound for attendee transit share. Residual car-involved ≈ 45–58% after allowing for non-attendee riders and walk. |
| Why it was transit-heavy | Holiday date; [free rides home sponsored by Airbnb](https://www.inquirer.com/transportation/world-cup-broad-street-line-subway-airbnb-20260420.html); [parking only by pre-purchased pass for ticket holders and none in FDR Park](https://www.phila.gov/2026-06-10-city-unveils-transportation-and-other-details-for-world-cup-matches/); [late-night trains every 30 minutes](https://fox29.com/news/fifa-world-cup-2026-philadelphia-details-transportation-safety-plans); Sports Express rerouted to start at Girard ([Inquirer](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html)). |
| Recommended | **0.52** (0.42–0.60), low confidence, for this event type only. Not a basis for the regional setting. |

#### V05 — Freedom Mortgage Pavilion, summer amphitheater concert

| Field | Detail |
|---|---|
| Setup | Outdoor amphitheater, May–Sept; [25,488 outdoor / 7,000 indoor](https://en.wikipedia.org/wiki/Freedom_Mortgage_Pavilion) (indoor and outdoor are mutually exclusive configurations) |
| Transit supply | River LINE Entertainment Center station adjacent; PATCO City Hall station [0.7 miles away](https://wwww.septa.org/destinations/freedom-mortgage-pavilion/); RiverLink Ferry from Penn's Landing [May–September](https://blog.ticketmaster.com/venue-faq-freedom-mortgage-pavilion-camden-nj/), which a transit observer describes as running a regular schedule only [10am–6pm in summer](https://subwaynut.com/riverline/waterfront_entertainment_center/index.php) (event-night return service not verified). |
| Parking | Waterfront lots open about [2 hours before gates](https://go.rutgers.edu/cdhipoez) (venue page mirror); lot capacity not published; the venue page points drivers to free River LINE park-and-ride at Pennsauken 36th Street (car-involved). |
| Estimate basis | No counts. A suburban South Jersey concert audience, large surface lots, no event-specific transit and unverified late return service imply transit in the single digits. |
| Recommended | **0.88** (0.80–0.94), low confidence |
| Shared approaches | Ben Franklin Bridge and I-676, also used by Center City and Old City crowds (see Section 7) |

#### V06 — Subaru Park, Philadelphia Union match

| Field | Detail |
|---|---|
| Setup | MLS, Feb–Nov, mostly evening/weekend; [about 18,000](https://www.koobit.com/breakaway-philadelphia-e81465) (secondary; verify) |
| Transit supply | Regional Rail (Wilmington/Newark line) to Chester Transportation Center, then a [free shuttle](https://www.ussoccer.com/matchday/uswnt-portugal-know-before-you-go-match-guide-10-23-25) reportedly every [20 minutes](https://www.koobit.com/breakaway-philadelphia-e81465); Highland Avenue station is a ~19-minute walk and lightly served ([PSP](https://phillysoccerpage.net/2024/03/19/guest-commentary-any-subaru-park-expansion-should-include-mass-transit-upgrades)). In 2022 SEPTA added [one extra post-match train at 11pm](https://www.philadelphiaunion.com/news/know-before-you-go-phivnyc-103022). |
| Park-and-ride treatment | The rail-plus-shuttle path is transit; anyone who drove to a rail station first is car-involved. |
| Parking | Multiple official lots priced [$22–$40](https://thestadiumreviews.com/parking/subaru-park/); designated rideshare lot ([listing](https://www.koobit.com/breakaway-philadelphia-e81465)) |
| Estimate basis | One supplemental train and a 20-minute shuttle loop cannot carry more than a small fraction of ~18,000 (inference). |
| Recommended | **0.93** (0.88–0.97), low confidence |
| Shared approaches | I-95, Route 291, Commodore Barry Bridge |

#### V07 — Mann Center (TD Pavilion), summer concert

| Field | Detail |
|---|---|
| Setup | Outdoor pavilion plus lawn, summer; [about 14,000](https://blog.ticketmaster.com/step-inside-td-pavilion-the-mann-philadelphia-pa) |
| Transit supply | SEPTA "Mann Loop" special bus for select shows with a single scheduled pre-show run from seven Center City stops ([SEPTA](https://wwww.septa.org/news/mann-center-loop-service-concerts-6)); routes 38, 40, 43 nearby. Post-show Mann Loop service not verified; the loop does not run for daytime events. |
| Parking | Lawn parking fee of [$25–$30 reinstated for the 2026 season](https://www.phillyvoice.com/mann-center-charge-for-parking/) after five free years |
| Recommended | **0.88** (0.80–0.94), low confidence |
| Shared approaches | I-76, Parkside Ave., Belmont Ave.; Lemon Hill Fan Fest (2026) on the east side of the park |

#### V08 — Liacouras Center; V09 — Finneran Pavilion; V04/E04 — Franklin Field / Penn Relays

| Field | V08 Liacouras | V09 Finneran | V04/E04 Franklin Field |
|---|---|---|---|
| Setup | Temple basketball, concerts; [10,000 / 5,500](https://www.liacourascenter.com/concerts-comedy-boxing) | Villanova basketball; [6,501](https://villanova.com/sports/2024/8/5/finneran-pavilion.aspx) | Penn Relays [April 23–25, 2026](https://www.thedp.com/article/2026/04/penn-relays-issue-2026-130th-anniversary-by-the-numbers); ~[20,000 athletes](https://president.upenn.edu/event-galleries/penn-relays-visit-2026) |
| Transit | On the B line (North Broad); Temple Regional Rail nearby | On-campus Villanova Regional Rail station ([campus map](https://alumni.colgate.edu/file/athletics-adv/Villanova-Campus-Map.pdf)) | University City transit and 30th Street nearby |
| Parking | Adjacent [1,200-stall garage](https://www.tvsdesign.com/projects/project-detail/temple-university-the-liacouras-center/) | Campus lots; parking generally [free for basketball](https://stadiumjourney.com/stadiums/the-pavillion-s723) | Not researched |
| Value | Unknown; fallback 0.85 applies, probably overstates car share given campus/subway location | Unknown; fallback 0.85 applies; student share lowers car use | Unknown; fallback 0.85 applies |

#### E05 — Broad Street Run; E06/E07 — July 4 Parkway and Fan Festival

| Field | E05 Broad Street Run | E06 July 4 Parkway | E07 Fan Festival |
|---|---|---|---|
| Date | Sun [May 3, 2026](https://cms.thetriangle.org/?p=68160), 7am | July 4, 2026; gates 3pm, fireworks [11:45pm](https://www.blackpearlco.org/performances/wawa-welcome-america-one-philly-unity-concert-for-america) | June 11–July 19, 2026 |
| Mode evidence | Runners ride the B line free to the start [until noon](https://www.wfmz.com/news/area/pennsylvania/septa-to-provide-extra-service-for-broad-street-run-participants-this-sunday/article_28572ac1-1c11-41bb-9c01-64b92b171660.html); runners can [park free](https://billypenn.com/2026/04/29/broad-street-run-philly-spectator-guide/) near the finish, a car-then-subway pattern (car-involved) | On July 4, 2026 SEPTA reported system ridership [+15% year over year, B line +62%, Regional Rail +48%](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html), confounded by a World Cup match the same day | Bus routes serving it [+21% on July 4](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html); [limited rideshare access](https://6abc.com/amp/post/philadelphia-releases-parking-transit-security-info-ahead-fifa-fan-festival-2026-world-cup-matches/19220059/) |
| Value | Unknown; not a fixed crowd; early-morning overlap with little else | Unknown; open site, multi-hour inflow | Unknown; one-off |

---

## 5. Regional conclusion

### 5.1 Weighted car shares

Weights use **one configuration per venue** (largest seated/outdoor configuration; indoor and outdoor FMP setups are never added). Each venue counts once, as a single event crowd, not as a simultaneous regional total.

| Weighting | Venues included (configuration, weight) | Central value | Range (using row ranges) | Missing coverage |
|---|---|---|---|---|
| Capacity, Sports Complex only (estimated/claimed rows) | V01 Eagles 69,176; V02 sold-out Phillies 43,651; V03 Sixers/Flyers 20,000 | **0.77** | 0.71–0.83 | Concerts at all three; Temple football |
| Capacity, all rows with a value | Above plus V05 summer outdoor 25,000; V06 Union ~18,000; V07 summer ~14,000 | **0.81** | 0.74–0.87 | V04, V08, V09 and all rooms under 5,000 |
| Capacity, all rows with V04/V08/V09 at the 0.85 fallback | Above plus Franklin Field 52,593; Liacouras 10,000; Finneran 6,501 | 0.82 | — | Fallback is not evidence; shown only for sensitivity |
| Annual throughput, Sports Complex | SCSSD reports [over 7 million visitors at ~380 events a year](https://scssd.org/sports-complex-info/); the arena accounts for [~2.5 million](https://www.theticket.com/?p=2320497), leaving ~4.5 million for the two stadiums (derived). Stadiums valued between V01 0.74 and V02 0.81 because the split between them is not published. | **0.76–0.81** | — | Per-event typical attendance not retrieved for any venue |

All arithmetic is in this document: e.g., capacity-weighted all-rows = (69,176×0.74 + 43,651×0.81 + 20,000×0.80 + 25,000×0.88 + 18,000×0.93 + 14,000×0.88) ÷ 189,827 = 0.809. A true typical-attendance weighting could not be built because per-event paid attendance was not retrieved; capacity is used as the proxy and biases toward sellout behavior.

### 5.2 Why `hub`, and the strongest contrary evidence

**For `hub`:**

1. Measured-derived values cluster at 0.74–0.81 for the Sports Complex and 0.88–0.93 for outlying venues; both sit at or near the existing 0.85 fallback that `hub` and `sprawl` share. The `transit` default of 0.4 is far below every recurring evidence point.
2. The defining Philadelphia feature for Gridlock is **co-location**: three venues on one site sharing [23,423 spaces](https://scssd.org/wp-content/uploads/2021/01/SportsComplexParking_08-22-2025.pdf), Broad Street, Pattison Avenue and the I-76/I-95 ramps. A simultaneous triple event in Oct 2023 [filled every lot](https://www.foxnews.com/sports/philadelphia-sports-complex-parking-lots-filled-1st-time-ever-events-all-venues-report). That is the kind of spill the in-between setting is meant to capture.
3. Transit is a meaningful minority, not negligible: roughly 16% (Phillies) to 22–26% (Eagles) on the subway, higher for special events.

**Strongest contrary evidence toward `transit`:**

- World Cup 2026 post-match boardings imply up to **42–45%** transit for a holiday match ([Inquirer](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html)), and the Jan 2025 NFC title game drew [31,087 riders](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html). These show capacity for high transit use under restricted parking and free fares, but they are one-offs and include non-attendees.
- The city's resident commute transit share is [about 20%](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership) (background only), and Center City theaters and clubs, which were not measured, are likely far less car-dependent than the stadiums.
- The city-commissioned review accepted [40% transit as attainable](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) for a Center City arena atop Jefferson Station, but that project is cancelled.

**Strongest contrary evidence toward `sprawl`:** every outlying venue (Subaru Park, Freedom Mortgage Pavilion, Mann Center) is estimated at 0.88–0.93, and the region's transit commute share is only [6.4%](https://sustainability.upenn.edu/news/penn-employee-commuters-are-choosing-sustainable-transportation-more-so-most-region) (background). If spill behavior in `sprawl` better matches dispersed suburban venues, those rows argue for it; the Sports Complex co-location argues against.

### 5.3 Do huge venues obscure the downtown pattern?

Partly, but not in the usual way. The largest venues are **not** outlying: the Sports Complex is inside the city at the [terminus of the B line, about three and a half miles south of Center City](https://parkmobile.io/parking/locations/pa/philadelphia-parking/neighbourhood/stadium-district), yet it is still car-dominated. What the capacity weighting hides is the cluster of smaller Center City and University City rooms (V11–V16), which have no event-travel data and cannot be weighted. The city's own planners expected a downtown arena could run at about half the car share of the Sports Complex ([JMT/OTIS](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) projection of 50% car-involved vs. ~75–85% claimed today), which suggests downtown rooms behave very differently. That is an argument for venue-specific overrides, not for changing the regional type.

---

## 6. Boundary recommendation

| Area | Population (2025 est.) | Evidence | Recommendation |
|---|---|---|---|
| Philadelphia-Camden-Wilmington MSA (11 counties: Bucks, Chester, Delaware, Montgomery, Philadelphia PA; Burlington, Camden, Gloucester, Salem NJ; New Castle DE; Cecil MD) | [6,329,118](https://fred.stlouisfed.org/data/PCWPOP); counties per [BLS](https://www.bls.gov/regions/mid-atlantic/news-release/AreaEmployment_Philadelphia.htm) | OMB commuting delineation; contains every in-scope venue | **Use as the boundary** |
| Core overlap counties within it | Philadelphia [1,574,281](https://en.wikipedia.org/wiki/New_Jersey_statistical_areas); Camden [535,799](https://en.wikipedia.org/wiki/New_Jersey_statistical_areas); Delaware [580,937](https://en.wikipedia.org/wiki/Pennsylvania_statistical_areas) | Host V01–V09 and share I-76, I-95, I-676, Ben Franklin Bridge | Highest-overlap zone |
| New Castle Co., DE (Wilmington) | [588,026](https://en.wikipedia.org/wiki/Delaware_statistical_areas) | In MSA; I-95 corridor partially shared with Chester/Subaru Park | **Include, flag as edge** |
| Mercer Co., NJ (Trenton) | [399,289](https://en.wikipedia.org/wiki/New_Jersey_statistical_areas) | Separate Trenton-Princeton MSA, but inside DVRPC's [nine-county planning region](https://www.dvrpc.org/Reports/DB100.pdf); World Cup fans connected via the Trenton line ([Inquirer](https://www.inquirer.com/transportation/septa-world-cup-ridership-philadelphia-250-20260709.html)) | **Exclude, flag as edge** |
| Atlantic City-Hammonton MSA | [372,047](https://en.wikipedia.org/wiki/New_Jersey_statistical_areas) | Is a component of the [Philadelphia-Reading-Camden CSA](https://en.wikipedia.org/wiki/Combined_statistical_area); an arena concert [moved from Xfinity Mobile Arena to Atlantic City](https://www.phillyvoice.com/mann-center-charge-for-parking/) over a Flyers playoff conflict, showing a shared audience. No shared venue approach roads. | **Keep outside** (the CSA tie and shared audience are the strongest contrary evidence) |
| Reading MSA (Berks) | not retrieved | CSA component | Exclude |

**Edge-case municipalities to track separately:** Wilmington DE, Trenton NJ, Bensalem PA, Glassboro NJ, Chester PA (in scope but transit-poor), Radnor/Villanova PA, Atlantic City NJ.

**Inconsistencies between the brief and evidence**

1. The companion venue answer was not available; this inventory is independent and its row IDs will need mapping.
2. `hub` and `sprawl` share the same 0.85 fallback, so the city-type choice changes only spill behavior, not unknown-venue car share.
3. The 76 Place "40% auto" figure excludes 10% ride-hail; under the brief's car definition it is 50%.
4. Search leads are verified as current names: Xfinity Mobile Arena (since Sept 2025), Freedom Mortgage Pavilion, Subaru Park, Liacouras Center, Finneran Pavilion. The Mann pavilion name should be re-checked after its 2025 sponsorship change.
5. "Army–Navy when hosted locally": next local game is Dec 11, 2027, outside current-season data.

---

## 7. Venue clusters, shared roads and shared audiences (separate findings)

| Cluster | Venues / crowds | Shared roads and transit | Shared-audience notes |
|---|---|---|---|
| South Philadelphia Sports Complex | V01, V02, V03, Stateside Live; Broad Street Run finish at Navy Yard | Broad St., Pattison Ave., I-76, I-95; B line NRG; one lot field | Season overlap Sept–Oct (NFL, MLB playoffs, NHL/NBA openers) |
| Center City / Avenue of the Arts | V14, V16, theaters | Garages shared by theater audiences; JMT found garage use during concurrent theater events of [46–60%](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf), with one garage at 94% | Holiday-season theater peaks |
| Camden Waterfront ↔ Old City | V05, Penn's Landing events | Ben Franklin Bridge, I-676, I-95; I-676 congestion is tied to the I-95 and I-76 interchanges ([JMT](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf)) | Summer concerts vs. waterfront festivals |
| North Broad | V08, V12 | Broad St.; B line | Temple students |
| University City | V04, V11 | I-76, 30th Street | Penn/Drexel events |
| Fairmount Park | V07, V13, E06, E07 | I-76, Parkside/Belmont Aves., Kelly/MLK Drives | Summer outdoor season |
| Chester waterfront | V06 | I-95, Route 291, Commodore Barry Bridge | Partial I-95 overlap with Wilmington-bound traffic |
| Main Line | V09, V10 | I-476, Lancaster Ave.; Paoli/Thorndale line | Villanova season |

No distance rule or hard-access flag is proposed; these are descriptive findings.

---

## End with

### 1. Recommended existing city type

**`hub`.** Evidence-derived car shares at the Sports Complex (0.74–0.81) and outlying venues (0.88–0.93) put Philadelphia near the 0.85 fallback, while the dominant Gridlock risk is spill among three co-located venues on one parking field and one subway line. **Strongest contrary evidence:** World Cup 2026 post-match boardings implying up to 42–45% transit, and a city resident commute transit share near 20% (background only), both pointing toward `transit`; and the transit-poor outlying venues at 0.88–0.93 plus a regional commute transit share of 6.4%, pointing toward `sprawl`.

### 2. Car-share values keyed to rows

| Row | Value | Range | Type | Basis |
|---|---|---|---|---|
| V01/E01 Eagles at Lincoln Financial Field | 0.74 | 0.68–0.80 | **Estimated** from SEPTA counts | 15,000–17,000 riders ÷ 69,176 |
| V02 sold-out Phillies at Citizens Bank Park | 0.81 | 0.75–0.86 | **Estimated** from SEPTA counts | ~7,000 riders ÷ 43,651 |
| V03 Sixers/Flyers at Xfinity Mobile Arena | 0.80 | 0.72–0.87 | **Claimed** (team official ~75% drive; conflicting 75–85% and 85%) | Not a survey |
| E03 World Cup at Lincoln Financial Field | 0.52 | 0.42–0.60 | **Estimated**, one-off | 29,162 boardings ÷ 65,000–69,176 |
| V05 Freedom Mortgage Pavilion (summer outdoor) | 0.88 | 0.80–0.94 | **Estimated** from service supply | No counts |
| V06 Subaru Park | 0.93 | 0.88–0.97 | **Estimated** from service supply | No counts |
| V07 Mann Center (summer) | 0.88 | 0.80–0.94 | **Estimated** from service supply | No counts |
| 76 Place (cancelled Center City arena) | 0.50 | — | **Projected** | JMT/Langan: 40% auto + 10% ride-hail |
| V04, V08, V09, V17, V18, E08 | Unknown | — | — | Provisional fallback 0.85 under `hub` |
| E05, E06, E07 | Unknown | — | — | Open-site / route events; no fixed crowd |

No value above is **measured** as a survey mode split. The closest to measured are SEPTA's station counts, which measure transit riders only.

### 3. Boundary

Use the 11-county Philadelphia-Camden-Wilmington MSA, with Philadelphia, Camden and Delaware counties as the core overlap zone. Include New Castle (Wilmington) as an edge; exclude Mercer (Trenton) and Atlantic City as edges with documented ties. Inconsistencies: companion answer unavailable; `hub`/`sprawl` fallback values are identical; the 76 Place auto figure excludes ride-hail; Mann naming needs re-check.

### 4. Data gaps, limitations, conflicts, access

- **Gaps:** no attendee surveys for any venue; no SEPTA arena counts; no Camden-side transit counts (PATCO, River LINE, RiverLink); no parking occupancy; no per-game paid attendance retrieved; no World Cup official match attendance found; Philadelphia Marathon, Palestra, Villanova Stadium, The Met, Dell Music Center, Fillmore, Franklin Music Hall, Kimmel/Academy and Convention Center not quantified; weekday vs. weekend and winter vs. summer splits unavailable except by event type.
- **Model limitations:** a single regional type cannot represent a bimodal region (car-heavy stadiums and outlying sheds vs. likely transit/walk-heavy downtown rooms); venue overrides carry most of the accuracy. Boardings include non-attendees; park-and-ride riders are car-involved but uncounted.
- **Source conflicts:** arena car share 75% (team official) vs. 75–85% (op-ed) vs. 85% (opposing coalition citing the traffic study), preserved in V03. Eagles 15,000 (2022 "usually") vs. 15,000–17,000 (2025 projection) is a small, reconcilable difference. Sports Complex parking 22,000 vs. 23,423 reflects inclusion of overflow lots.
- **Access:** two Inquirer articles (Aug 2025 service cuts; World Cup free rides) were read only from search summaries because full text sits behind a registration wall; no access controls were bypassed. Several capacity figures rely on secondary listings (Subaru Park, Mann Center) and are marked for verification. The SEPTA news URLs as returned by search use a "wwww" host prefix; if they fail, search septa.org for the same titles.

### 5. Transport and venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| SEPTA operating funding: $394M moved from capital to operations covers [FY2026 and FY2027 without cuts](https://septa.patternstream.cloud/SEPTA%20FY%202026%20Amended%20Budget/SEPTA_Proposed_Operating_Budget/Introduction/Introduction.htm); cuts [back in play as early as FY2028](https://septa.patternstream.cloud/SEPTA%20FY%202026%20Amended%20Budget/SEPTA_Proposed_Operating_Budget/Introduction/Introduction.htm) | **Funded through June 2027**; state's [2026-27 budget added no transit funding](https://whyy.org/articles/septa-transit-forward-philadelphia-fifa-budget/) | FY2028 begins July 1, 2027 | April–July 2027 (SEPTA FY2028 budget; state budget) |
| Governor's proposal to raise sales-tax share for transit, [money flowing from July 1, 2027](https://www.inquirer.com/transportation/pennsylvania-transit-systems-funding-crisis-lanta-state-budget-20260205.html) | **Proposal** (not enacted as of July 2026) | — | July 2027 |
| B-line Sports Express | **Sponsor-dependent**; previously slated for elimination, restored by sponsorship in 2025 | Per season | Before each NFL/MLB season |
| Arena renamed Xfinity Mobile Arena; naming deal [through 2030-31](https://www.theticket.com/?p=2320497) | **Done** | Sept 1, 2025 | — |
| New Sixers/Flyers arena on the former Spectrum site, closer to NRG station ([Central Bucks News](https://centralbucksnews.com/news/2026/apr/16/philadelphia-76ers-philadelphia-flyers-news-comcast-spectacor-dan-hilferty-nba-nhl-wnba-arena-philadelphia-phillies/)); [renderings released Sept 2026, Council legislation possible this fall](https://www.phillyvoice.com/76ers-flyers-arena-renderings-south-philly/) | **Proposal**; target opening 2031 (beyond 2028) | — | After City Council action (early 2027) |
| Army–Navy Game at Lincoln Financial Field | **Scheduled** | [Dec 11, 2027](https://www.militarytimes.com/off-duty/military-sports/army-navy-game/2022/06/19/army-navy-football-game-is-coming-to-five-east-coast-cities-beginning-in-2023/) | Oct 2027 (transit/parking plan) |
| Mann Center paid lawn parking reinstated; new plaza | **Done** for 2026 season ([PhillyVoice](https://www.phillyvoice.com/mann-center-charge-for-parking/)) | May 2026 | Spring 2027 |
| SEPTA bus network redesign advanced in budget ([WHYY](https://whyy.org/articles/septa-transit-forward-philadelphia-fifa-budget/)) | **Approved to advance**; route-level dates not verified | — | Q1 2027 |
| Possible MLB work stoppage affecting the 2027 Citizens Bank Park calendar | **Uncertain** (only an [Inquirer headline teaser](https://www.inquirer.com/phillies/alex-cora-future-phillies-manager-decision-2027-20261007.html) seen) | 2027 season | Dec 2026 |
| Subaru Park seating expansion and transit upgrade ideas ([PSP](https://phillysoccerpage.net/2024/03/19/guest-commentary-any-subaru-park-expansion-should-include-mass-transit-upgrades)) | **Exploratory / proposal** | — | 2027 |
| World Cup 2026 operations (restricted parking, free rides) | **Completed; not recurring** | June–July 2026 | — |
