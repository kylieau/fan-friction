# Research answer: how Seattle fans get to the game (Oct 6, 2026)

Kylie ran `docs/seattle-city-type-prompt.md` and pasted the answer the same day. Saved in full below; folded into `src/data/venues.ts` as each venue's `carShare` and into `src/data/formula/gridlock.ts` as the city type (hub: in between, with the suburbs driving). Labels are the researcher's: official, reported, estimated.

---

I'll dig into the transportation plans, SEPA/EIR docs, and transit ridership for each venue, then build the venue-by-venue table and regional verdict.

Seattle comes out **in between** overall. It isn't one region, though: the core venues are mixed, and the suburban ring drives.

- **Husky Stadium** is the only venue with a recent, observed, published mode split.
- **Climate Pledge Arena** publishes observed transit use every year.
- **Lumen Field** has a recent planning baseline but no observed survey since 2002.
- **T-Mobile Park** and everything outside Seattle have no public mode split I could find, so those rows are labeled estimates.

## Seattle core: how fans arrive

| Venue | Car | Transit | Walk / bike / other | Basis (label) | Link |
|---|---|---|---|---|---|
| **Husky Stadium** (UW football) | **37%**: 29% carpool, 2.8% drove alone, 4.9% Uber/Lyft | **45%**: 36% Link, 9% bus | ~18%: walk 14.4%, bike 2.4%, boat 0.2% | **Official, observed.** UW's annual TMP intercept survey at two 2022 games, 1,195 completed surveys, about ±2.2% overall. The weeknight game was worse: transit was 51.4% on Saturday Sept. 24 but 37.8% on Friday Nov. 4. This is the latest report I found; later seasons may exist. | [UW 2022 TMP report](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf) |
| **Lumen Field** (Seahawks, Sounders, Reign) | **60%**: 49% personal vehicle plus 11% rideshare under "business as usual" | **31%** | **9%** | **Reported planning baseline.** From Kimley-Horn's June 2026 World Cup mobility deck. It doesn't say whether the baseline is a count or an assumption. Older figures disagree: a 2002 survey found non-auto share of 25–30% (so 70–75% car), and a 2012 study cited 57% driving to a Seahawks game. **I'd use 60%.** It's the newest and the only one that postdates Link to UW, Northgate and Lynnwood. | [Kimley-Horn ITE deck](https://www.westernite.org/annualmeetings/26_Bellevue/5A_Bandy_Hosting%20Largest%20Global%20Sports%20Event%20in%20Seattle.pdf) · [FHWA](https://ops.fhwa.dot.gov/publications/mitig_traf_cong/seahawks_case.htm) · [Crosscut](https://www.cascadepbs.org/2012/05/morning-fizz) |
| **Climate Pledge Arena** | **~63%** (concerts ~70%) | **27%** observed: Year 4 (Oct 2024–Sep 2025): 27% overall, 20% concerts, 26% hockey, 27% basketball | ~10% | **Transit is official and observed. Car is my estimate** (100 minus transit minus walk/bike). This counts use of the free ticket-linked pass, Monorail included, so riders paying their own fare may be missed. The 2018 projection was far more car-heavy: private vehicle 63–68%, ridehail/drop-off 12–15%, walk 8–10%. Results beat what the city expected: it planned on 15% of Kraken fans riding transit; 25% did. | [CPA dashboard](https://climatepledgearena.com/sustainability-dashboard/) · [2018 AAMP](https://seattle.gov/Documents/Departments/SDOT/ParkingProgram/cp/Draft%20AAMP%208%2030%2018%20v3.pdf) |
| **T-Mobile Park** (Mariners) | **~70%** (range 65–75) | ~20–25% | ~5–10% | **Estimated.** The only number is 82% driving to a Mariners game, from a 2012 study cited by Crosscut. That predates every Link extension since. I'm adjusting toward Lumen's 60% because the parks share stations, but keeping it higher for weeknight family crowds and the on-site garage. | [Crosscut](https://www.cascadepbs.org/2012/05/morning-fizz) |
| **Alaska Airlines Arena** (UW) | ~50% (est.) | ~35–40% | ~10–15% | **No figure found.** Nearest comparable is Husky Stadium (same UW Station), adjusted toward driving for weeknight indoor games. | [UW 2022 TMP](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf) |
| **WaMu Theater** | ~65% (est.) | ~25–30% | ~5–10% | **No figure found.** Nearest comparable is Lumen Field next door, nudged up because consumer shows and concerts draw less transit-trained crowds than Seahawks games. | [Kimley-Horn deck](https://www.westernite.org/annualmeetings/26_Bellevue/5A_Bandy_Hosting%20Largest%20Global%20Sports%20Event%20in%20Seattle.pdf) |
| **Seattle Center grounds** (festivals) | ~65% (est.) | ~25% | ~10% | **No figure found.** Nearest comparable is Climate Pledge Arena concerts (~70% car), with festival crowds assumed slightly more transit-friendly. | [CPA dashboard](https://climatepledgearena.com/sustainability-dashboard/) |

## Seattle core: stations, parking, event-day setup

| Venue | Transit and walk | Parking | Event-day setup | Link |
|---|---|---|---|---|
| Husky Stadium / Alaska Airlines Arena | UW Link Station, a short walk to the gates; Metro buses | Most drivers park on campus: 73% of car arrivals, priced $30 for 3+ occupants and $40 otherwise | Park-and-ride shuttles from six regional lots at $16 per game; boat moorage and shuttle; bike valet | [UW 2022 TMP](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf) |
| Lumen Field / WaMu Theater | Stadium and International District/Chinatown Link stations, King Street Sounder; 22 Metro routes | The North Lot and Event Center Garage sell out as season passes, so most drivers use private SODO lots. Before a 2026 playoff game, nearby legal parking reached about $100 | Extra post-game Link trains, special Sounder trains, and World Cup-style street closures with a rideshare geofence | [Seahawks transportation](https://www.seahawks.com/game-day/transportation/mobile-view) · [FOX 13](https://www.fox13seattle.com/news/nfc-championship-drive-seahawks-rams) |
| Climate Pledge Arena / Seattle Center | Monorail about a five-minute walk to Westlake; routes 1, 28 and RapidRide D stop nearby | About 8,200 public spaces within roughly half a mile, plus a 450-space garage under the arena | Free transit with every ticket: valid from 2 hours before doors to 2 hours after the event, on six transit services; bus lanes on 1st Ave N and Queen Anne Ave N | [CPA transit pass](https://www.athleticbusiness.com/facilities/stadium-arena/article/15305235/climate-pledge-arena-offers-free-public-transit-for-all-ticketed-events) · [AAMP](https://seattle.gov/Documents/Departments/SDOT/ParkingProgram/cp/Draft%20AAMP%208%2030%2018%20v3.pdf) |
| T-Mobile Park | Stadium Station (closest) and International District/Chinatown; King Street Sounder is about half a mile from the nearest gate | A 2,000-stall team garage, plus private SODO lots | Special Sounder trains for some weekend games, from Everett and Lakewood, with returns about 45 minutes after the final out | [Sound Transit](https://www.soundtransit.org/get-to-know-us/news-events/news-releases/sounder-trains-available-mariners-vs-rays) |

## Outside Seattle: all estimated, no published mode splits

| Venue | Car (est.) | Transit option and walk | Parking | Event-day setup | Basis | Link |
|---|---|---|---|---|---|---|
| Tacoma Dome | ~85% | Tacoma Dome Station, three blocks north (Sounder, T Line, buses) | Limited and sells out for big events | Extra trips for big shows, e.g. ST Express 594 every 15 minutes from Lakewood at a 2019 concert; rideshare zones | Estimated. Nearest comparable is the stadium district, adjusted for weaker evening transit to Tacoma. Sounder runs mainly at weekday peak. | [Tacoma Dome](https://www.tacomadome.org/transportation) |
| accesso ShoWare Center (Kent) | ~92% | Kent Station, about a five-minute walk | More than 1,500 free spaces within walking distance | None found | Estimated. Free parking plus peak-only Sounder | [ShoWare parking](https://www.accessoshowarecenter.com/p/plan-your-visit/parking) |
| Angel of the Winds Arena (Everett) | ~92% | Everett Station, roughly a 15-minute walk (my map estimate) | Downtown lots and garages | None found | Estimated | none found |
| White River Amphitheatre (Auburn) | ~97% | None. Off-site shuttle from a parking lot, so those riders still drove | For a sold-out show, about 20,000 people and parking for about 6,800 cars | Two-lane SR 164 access; shuttle | Estimated (the shuttle is park-and-ride) | [Ticket News](https://www.ticketnews.com/2014/07/hours-long-traffic-jam-prevents-customers-from-attending-concert/) |
| Gorge Amphitheatre (George) | ~98% (car or charter) | No public transit; private shuttles from Quincy, Ephrata and George | Large on-site lots and campgrounds | Camping, private shuttles | Estimated | [Quincy Valley Shuttle](https://www.tickettailor.com/events/quincyvalleyshuttletours/2319744) |
| Washington State Fair grandstand (Puyallup) | ~94% | Puyallup Sounder Station plus free shuttle on special-train days | Paid lots | Special Sounder trains on two Saturdays, with a free Pierce Transit shuttle to the Red Gate | **Reported, partial:** 38,563 Fair Express bus riders in 2014, against roughly 1 million attendees a year. That's the whole fair, not the grandstand. | [Herald](https://www.heraldnet.com/?p=40463) |
| Marymoor Live (Redmond) | ~85% | Marymoor Village Link Station (2 Line) via a new trail; walk time not published | $20 per car, and no concert parking in the station garage | Extended late 2 Line service on concert nights | Estimated. Link only arrived in 2025 and there's no count yet | [King County](https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/marymoor/concerts) |
| Emerald Downs (Auburn) | ~95% | Auburn Sounder Station plus a free track shuttle | Large on-site lots | Free shuttle from Auburn Station (older program; may have changed) | Estimated | [Sound Transit](https://www.soundtransit.org/get-to-know-us/news-events/news-releases/sound-transit-emerald-downs-say-ride-to-races-with-us) |
| Cheney Stadium (Tacoma) | ~95% | Local Pierce Transit only | On-site paid lot | None found | Estimated | none found |
| Everett Memorial Stadium | ~93% | Local Everett Transit | On-site lots | None found | Estimated | none found |
| Pacific Raceways (Kent) | ~98% | None | On-site | None | Estimated | none found |
| Evergreen Speedway (Monroe) | ~98% | None | Fairgrounds lots | None | Estimated | none found |
| Remlinger Farms (Carnation) | ~99% | None | On-site fields | None | Estimated | none found |

## The region, one line each

- **Seattle overall: in between.** Big core crowds run about 37–70% by car, well below LA or San Diego, but only Husky Stadium is under half.
- **Husky Stadium: transit-region behavior** at 37% car. Light rail at the gate, a park-and-ride shuttle network and real parking prices do it.
- **Stadium district and Seattle Center: in between** at roughly 60–70% car. Free transit at Climate Pledge has pushed it toward the transit end; Mariners crowds likely sit at the car-heavy end.
- **Tacoma, Kent, Everett, Auburn, Puyallup: driving region** at about 85–95% car. These venues have stations, but evening service is thin and parking is cheap or free.
- **Exurban amphitheaters, raceways and farms (George, Auburn hills, Monroe, Carnation): extreme driving** at 95%+. White River's single two-lane exit road is the region's worst friction case.

## Not found

There is no published mode split for T-Mobile Park (newer than 2012), Tacoma Dome, WaMu Theater, Seattle Center festivals, Alaska Airlines Arena, or any venue outside Seattle. The City of Tacoma, Sound Transit and the Mariners don't publish per-event counts that I could locate. Two numbers worth requesting directly are Sound Transit's station tap-offs for Mariners nights and Tacoma Dome concerts; UW already prints these for Husky games.

I can turn this into a doc with the tables if you want to keep it alongside the app spec.

Sources:
- [UW Husky Stadium 2022 TMP Report](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf)
- [Kimley-Horn, Hosting the Largest Global Sports Event in Seattle (ITE, June 2026)](https://www.westernite.org/annualmeetings/26_Bellevue/5A_Bandy_Hosting%20Largest%20Global%20Sports%20Event%20in%20Seattle.pdf)
- [FHWA Seahawks Stadium TDM case study](https://ops.fhwa.dot.gov/publications/mitig_traf_cong/seahawks_case.htm)
- [Crosscut / Cascade PBS, Morning Fizz (2012)](https://www.cascadepbs.org/2012/05/morning-fizz)
- [Climate Pledge Arena Sustainability Dashboard](https://climatepledgearena.com/sustainability-dashboard/)
- [Seattle Center Arena Draft AAMP (Fehr & Peers, 2018)](https://seattle.gov/Documents/Departments/SDOT/ParkingProgram/cp/Draft%20AAMP%208%2030%2018%20v3.pdf)
- [SBJ Unpacks, Dec. 2023](https://www.sportsbusinessdaily.com/SB-Blogs/SBJ-Unpacks/2023/12/22.aspx)
- [Pollstar, 2026 transportation special](https://news.pollstar.com/2026/05/29/sustainability-matters-venues-go-the-extra-mile-toward-greener-transportation-transportation-special-2026/)
- [Athletic Business, CPA free transit](https://www.athleticbusiness.com/facilities/stadium-arena/article/15305235/climate-pledge-arena-offers-free-public-transit-for-all-ticketed-events)
- [King County Metro blog](https://kingcountymetro.blog/2022/10/13/skip-the-traffic-penalty-box-and-take-transit-to-kraken-games/)
- [Seahawks game-day transportation](https://www.seahawks.com/game-day/transportation/mobile-view)
- [FOX 13, NFC Championship transit](https://www.fox13seattle.com/news/nfc-championship-drive-seahawks-rams)
- [KOMO, 2026 Mariners guide](https://komonews.com/features/dont-miss/tmobile-park-cal-raleigh-seattle-mariners-game-tickets-parking-transportation-faq-value-menu-food-bag-policy-beer-mlb-baseball-julio-rodriguez-opening-day-tips)
- [Sound Transit, Mariners Sounder service](https://www.soundtransit.org/get-to-know-us/news-events/news-releases/sounder-trains-available-mariners-vs-rays)
- [Seneca Group, Safeco Field project](https://senecagroup.com/?p=1255)
- [Tacoma Dome transportation](https://www.tacomadome.org/transportation)
- [Tacoma Dome WIAA parking info](https://www.tacomadome.org/assets/doc/WIAATacomaDomeParking2019-048f1f379d.pdf)
- [KIRO 7, Garth Brooks traffic](https://www.kiro7.com/news/local/going-to-garth-brooks-heres-what-to-know-about-traffic-and-the-show/638350420)
- [accesso ShoWare Center parking](https://www.accessoshowarecenter.com/p/plan-your-visit/parking)
- [Ticket News, White River traffic](https://www.ticketnews.com/2014/07/hours-long-traffic-jam-prevents-customers-from-attending-concert/)
- [Herald, Washington State Fair](https://www.heraldnet.com/?p=40463)
- [Sound Transit, State Fair Sounder](https://www.soundtransit.org/get-to-know-us/news-events/news-releases/special-sounder-service-to-run-everett-to-washington-0)
- [King County, Marymoor concerts](https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/marymoor/concerts)
- [Sound Transit, Marymoor 2 Line service](https://www.soundtransit.org/get-to-know-us/news-events/news-releases/supplemental-2-line-service-will-run-rest-seasons-marymoor)
- [Sound Transit, Ride to the Races](https://www.soundtransit.org/get-to-know-us/news-events/news-releases/sound-transit-emerald-downs-say-ride-to-races-with-us)
- [Quincy Valley Shuttle, Gorge](https://www.tickettailor.com/events/quincyvalleyshuttletours/2319744)
