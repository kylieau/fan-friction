# New York: how fans get to the game — research answer

Run Oct 6, 2026 on `docs/archive/research/new-york-city-type-prompt.md`. Pasted by Kylie from a
research model; transcribed here from the delivered PDF ("NY Venue Arrival
Mode", 18 pages, Oct 6, 2026). The PDF itself could not be added to the repo (see the note below).

Kept as returned; Claude's checks are at the bottom.

**This transcription is the record.** Kylie has the answer only as a PDF and
cannot drop the file into the repo, so there is no `…-answer.pdf` beside this
file the way Seattle has one. Everything substantive from the 18 pages is
below, including the per-venue access tables. Don't go looking for the PDF.

---

## Bottom line (the model's words)

**Verdict: in between, like Seattle, because New York is really three regions
stacked together.** Weighted by seats across the 13 biggest venues, about **60%
of a big crowd arrives by car**. That average hides a 10%-to-97% spread, so use
the per-venue number, never the regional one.

- **Transit tier, about 10–30% by car:** Madison Square Garden and its theater,
  Radio City, Javits, Barclays, Forest Hills Stadium, and festivals on Randall's
  Island and Liberty State Park. These sit on rail hubs with little or no
  parking, or parking is banned for the event.
- **Split tier, about 35–60% by car:** Yankee Stadium, Citi Field, the US Open,
  Prudential Center, Harrison, Coney Island, Columbia, St. John's and the Staten
  Island ballpark. Rail stops at the gate, but big lots or garages sit next to it.
- **Driving tier, about 75–97% by car:** MetLife, UBS Arena, Belmont Park,
  Nassau Coliseum, Hofstra, the County Center, Meadowlands Racetrack, Jones
  Beach and PNC. Highway sites; where rail exists it carries 5–35%.

**Two venues need an event-type switch.** MetLife runs ~87% car for NFL, ~75%
for concerts and ~60% when parking is closed. UBS Arena runs ~89% for the
Islanders and ~93% for everything else.

Event frequency tilts the regional picture toward transit: MSG alone averaged
235 events a year before the pandemic, while MetLife hosts a few dozen.

## Car share per venue

28 rows, 10 from counts. "Value to use" is the model's recommendation.

| Venue | Car | Transit | Walk/bike/other | Label | Basis |
|---|---|---|---|---|---|
| Randall's Island festivals | 10% | 55% | 35% (footbridges, bike) | Estimated | No count. Big festivals ban personal parking on the island; parking very limited and charged. |
| Forest Hills Stadium | 15% (rideshare drop-off) | 75% | 10% | Estimated | No count in the neighbours' litigation. No parking at all; the venue tells fans not to drive. 13,000 a show, 28 shows a season. |
| Radio City Music Hall | 15% | 65% | 20% | Estimated | No published count. Midtown walk-in share higher than MSG; congestion zone. |
| Liberty State Park festivals | 15% (rideshare, remote-lot shuttles) | 60% | 25% (footbridge from downtown Jersey City) | Estimated | No count. Major festivals have no public parking in the park. |
| Madison Square Garden | 20% (range 15–30%) | 70% | 10% | Estimated | Rail agencies, June 2023: most ticket holders use Penn Station, up to 15,000 patrons at event peaks. Older count: 52% transit or walk for Knicks/Rangers in 2003. Model would use the 2023 Penn figure plus the toll. |
| Theater at MSG | 20% | 70% | 10% | Estimated (uses MSG) | Same building, same Penn Station access. |
| Javits Center | 20% (incl. taxi/rideshare) | 55% | 25% (walk, hotel shuttles, ferry) | Estimated | No published count. 7 train terminal one block away since 2015. |
| Barclays Center | **25%** | 60% | 15% | **Reported (car); rest estimated** | Sam Schwartz TDM survey, 8 Nets games, 5,633 surveys, 2013. Pre-opening forecast was ~30% driving. **Observed, but 2013.** |
| US Open grounds / Ashe | **37%** | 60% | 3% | **Reported** | USTA operations chief: more than 60% of fans take mass transit. LIRR carried 177,738 riders to Mets–Willets Point during the 2025 Open. |
| Maimonides Park / Ford Amphitheater | 40% | 50% | 10% | Estimated | No published count. Four-line subway terminal, but surface lots next to the ballpark. |
| Prudential Center | **45%** | 50% | 5% | **Reported (old)** | 53% of Devils fans used mass transit over the last two months of 2007–08. No later count found. |
| Columbia Wien Stadium | 45% | 45% | 10% | Estimated | No count. College football draws an older suburban alumni crowd; 1 train at 215 St. |
| Yankee Stadium | **50% (range 45–61%)** | 45% | 5% | **Reported** | MTA: ~37% by subway (~15,400 a game), ~45% with Metro-North, bus and ferry (2011). NYC DOT intercept survey of 1,088 fans found **61% arrived by car** (2012). The two disagree; model would use 50%. Both ~2011. |
| Sports Illustrated Stadium (Harrison) | 50% | 45% | 5% | Estimated | No published count. Harrison PATH three blocks away; club warns parking is extremely limited. Nearest comparable: Prudential Center. |
| Carnesecca Arena | 50% | 25% | 25% (students on campus) | Estimated | No count. Campus arena, on-campus parking, no subway in walking distance. |
| Citi Field | **60% (range 55–65%)** | 37% | 3% | **Reported (subway); LIRR estimated** | MTA: 25–30% by subway at an average game, 30–35% for Subway Series, LIRR not included. Model adds ~7% for LIRR. 2026 parking reduced by casino construction, which pushes this down. |
| MetLife, no-parking events | 55–65% (rideshare, premium lots, shuttles) | 30–35% | 5% | **Reported** | Super Bowl 2014: 28,000+ of 82,529 by train in, 33,000+ out. World Cup 2026: no general parking; NJ Transit averaged 20,000–26,000 riders a match, about half its plan. Even with lots closed, rail carried only about a third. |
| Staten Island ballpark (SIUH Community Park) | 60% | 35% (ferry, SIR, bus) | 5% | Estimated | No count. FerryHawks averaged 1,232 a game in 2025, so it clears 5,000 only for fireworks nights. |
| MetLife, stadium concerts | 75% | 25% | — | Reported, with a caveat | NJ Transit moved 80,000 people over three Taylor Swift nights in 2023 — ~19% or ~37% of the crowd depending on whether that counts trips or riders. |
| Belmont Park, Stakes day | **75%** | 25% | — | **Official (pre-rebuild)** | LIRR carried 17–35% of Belmont Stakes attendance 2008–2017 (Belmont FEIS Table 11-16). |
| Hofstra | 80% | 5% | 15% (students) | Estimated | No count. Same corridor as Nassau Coliseum. |
| Westchester County Center | 85% | 10% | 5% | Estimated | No count. Five-minute walk from White Plains Metro-North; 700+ county spaces next door. |
| MetLife, NFL | **87%** | 12% | 1% | **Reported** | More than 10% of Jets/Giants fans took the train in the rail line's second season (NJ Transit, 2010). NJ Transit sizes MetLife events at up to 20,000 riders. No recent per-game NFL count. |
| UBS Arena | **89% (Islanders); 93% (other)** | 11% / 7% | — | **Official (LIRR observed)** | LIRR ridership equal to 8.8% of gate at Islanders games, 5.3% at other events, 19.2% at the best game (Rangers, Oct 2022). FEIS projected 83% auto weekday / 88% Saturday. Model adds ~2% bus. |
| Nassau Coliseum | 95% | 4% | 1% | Estimated | No count. Nearest LIRR is Hempstead, ~3 miles, then a NICE bus or cab. |
| Meadowlands Racetrack | 95% | 5% | — | Estimated | No count. Free parking. Only Hambletonian Day clears 5,000. |
| Jones Beach Theater | **97%** | 2% | 1% (boat, bike) | Estimated | No count. No rail; the special NICE concert bus no longer runs. Sets the top of the range with PNC. |
| PNC Bank Arts Center | **97%** | 3% | — | Estimated | No count. Highway venue at Garden State Parkway Exit 116; no rail. |

## Transit, parking and event-day setup, per venue

The prompt asked for these three alongside the car share. They matter for the
gridlock and hard-access work, not just the mode split: "no parking by design"
and "one highway exit" are the same facts the egress research needs.

### Manhattan and Brooklyn

| Venue | Transit that serves it, and the walk | Parking | Event-day setup |
|---|---|---|---|
| Barclays Center | Atlantic Av–Barclays Ctr (2/3/4/5/B/D/N/Q/R) and LIRR Atlantic Terminal, entrance on the plaza, 1–3 min | **Built with almost none by design:** on-site lot cut from 1,100 to 541 spaces, usually about half full; remote lots with shuttles saw low use | Extra 4 and Q trains and doubled LIRR departures after games; 400 bike spaces; tickets carry transit directions only |
| Madison Square Garden and Theater | Penn Station directly below (LIRR, NJ Transit, Amtrak, A/C/E, 1/2/3), 0–3 min; 34 St–Herald Sq and PATH 33 St, ~5 min | None on site; private garages | Scheduled service at Penn; peak **$9 congestion toll** for drivers entering before 9 p.m. |
| Radio City | 47–50 Sts–Rockefeller Ctr (B/D/F/M), 2 min; 49 St (N/Q/R/W) and 5 Av/53 St (E/M), ~5 min | None on site; private garages | Congestion toll as above |
| Javits Center | 34 St–Hudson Yards (7), 2 min; Penn Station ~12 min; M34/M42/M12/M11/M50 buses; NY Waterway at W 39th St | None for the public; private garages | Show-run hotel shuttles |
| Maimonides Park / Ford Amphitheater | Coney Island–Stillwell Av (D/F/N/Q), 5 min | Ballpark surface lot plus street parking | Officials urged subway for opening crowds |
| Wien Stadium | 215 St (1), ~5 min; Inwood–207 St (A), ~10 min | Limited; street parking in Inwood | None found |

### Bronx and Queens

| Venue | Transit that serves it, and the walk | Parking | Event-day setup |
|---|---|---|---|
| Yankee Stadium | 161 St–Yankee Stadium (4/B/D), across the street; Metro-North Yankees–E 153 St, ~5 min; Bx6/Bx13 at the gate | Garages built with the stadium averaged **43% full** on game days in 2011; DOT found 90% of drivers park off-street | Express 4 and D stops before games; Metro-North "Yankee Clipper" one-seat trains from the Harlem and New Haven lines; Grand Central shuttles; Hudson Line added stops |
| Citi Field | Mets–Willets Point (7 local and express), ~2 min; LIRR Mets–Willets Point (Port Washington Branch), ~5 min | Large surface lots **now shrinking** for the Metropolitan Park casino build; Mets push $40 prepaid parking | LIRR every 30 min for games, $5 off day passes in 2026; expanded ferry; shuttle buses from malls; rideshare zone at the Left Field Gate |
| US Open grounds | Same two stations, ~10 min walk across the boardwalk | Shares Citi Field and park lots; rideshare only at the NY State Pavilion | Extra 7 and LIRR service for two weeks; LIRR also serves from Grand Central Madison |
| Forest Hills Stadium | Forest Hills–71 Av (E/F/M/R), ~10 min; LIRR Forest Hills, ~5 min | **None at the venue or on nearby residential streets** | LIRR adds Forest Hills stops on Main Line trains before and after shows; NYPD closes Forest Hills Gardens streets |
| Randall's Island | M35 bus from 125 St/Lexington (one stop); 103 St footbridge, ~20 min walk; ferry for major events | Very limited; $8.50 RFK toll to drive on | Festival ferries from E 35 St; dedicated rideshare zones on the Manhattan side |
| Carnesecca Arena | Q46 bus on Union Tpke; nearest subway requires a bus | Campus lots | None found |

### New Jersey

| Venue | Transit that serves it, and the walk | Parking | Event-day setup |
|---|---|---|---|
| MetLife Stadium | Meadowlands Rail Line from Secaucus Junction (one stop from Penn Station NY), station steps from the gates; **runs only for NFL games and major events** | **~28,000 spaces** in lettered lots around the stadium | Trains every 10–20 min before games, ~2 hours after; the World Cup closed general parking and closed Penn Station to non-ticketholders |
| Prudential Center | Newark Penn (NJ Transit, PATH, Amtrak, light rail), ~2 blocks; Newark Broad St, ~10 min | Attached garage plus downtown lots | Real-time train boards in the arena; extra late trains when it opened |
| Sports Illustrated Stadium | Harrison PATH, 3 blocks; NJ Transit to Newark Penn then 2-min PATH | Harrison public lots $15–30; private lots $30+ | Newark Penn shuttle has been suspended for some matches |
| Liberty State Park | Hudson-Bergen Light Rail (Liberty State Park, Jersey Ave), up to ~1 mile walk; ferries from Manhattan; PATH Grove St + footbridge | None for the public at major events | Extra light rail service; festival ferries and remote-lot shuttles |
| Meadowlands Racetrack | No regular rail; the Meadowlands station runs only on stadium event days | Free surface lots | None |
| PNC Bank Arts Center | None at the venue; NJ Transit to Aberdeen–Matawan then cab or shuttle | Large on-site lots, parking fee built into every ticket; space count not published | **Exit 116 is the post-show bottleneck** |

### Long Island, Westchester and Staten Island

| Venue | Transit that serves it, and the walk | Parking | Event-day setup |
|---|---|---|---|
| UBS Arena | Elmont–UBS Arena LIRR (full-time, both directions), ~10 min walk or shuttle; shuttles also from Queens Village; NICE N6 | FEIS: 1,900 structured spaces plus ~6,014 in Belmont's North, South and East lots under a shared agreement; **sells out for big events** | Extra event stops on the Hempstead, Huntington and Ronkonkoma branches; the LIRR counted its one-millionth UBS rider in Jan 2025 |
| Belmont Park | Belmont Park spur station at the grandstand on race days; Elmont–UBS Arena station | ~10,435 surface spaces before the rebuild (FEIS) | 21 extra trains from Penn Station on Stakes day (2018) |
| Nassau Coliseum | NICE n70/n71/n72 from Hempstead Transit Center (LIRR Hempstead) | Surrounded by surface lots | None found |
| Jones Beach Theater | **None**; LIRR Freeport or Wantagh, then cab or rideshare | Park fields hold 23,500+ cars in total; concerts use Fields 4 and 5 | None now that the n88 concert bus is gone |
| Hofstra | Hempstead LIRR then NICE bus on Hempstead Tpke | Campus lots | None found |
| Westchester County Center | White Plains Metro-North, ~5 min; Bee-Line buses | 700+ spaces in county lots | None found |
| SIUH Community Park | St. George ferry terminal and Staten Island Railway, ~5 min | Ballpark lot | Free ferry to Whitehall, 24 hours |

## Where the expected pattern held and broke

The prompt stated four expectations. Three held; one broke.

| Expectation | Verdict | Figures |
|---|---|---|
| Manhattan and Brooklyn are overwhelmingly transit and walking | Holds for the hub buildings; **breaks at the edges** | Barclays 25% car (observed 2013); MSG ~20%. But Coney Island (~40%) and Columbia (~45%) are Brooklyn and Manhattan addresses in the split tier. |
| Bronx and Queens ballparks are strongly transit, just less so | **Breaks** | Yankee Stadium ~50% car; Citi Field ~60%. **Neither is a transit majority.** The US Open (~37%) and Forest Hills (~15%) are the Queens venues that do fit. |
| Harrison and Newark lean on PATH and NJ Transit | Holds, **thin evidence** | Prudential 53% transit (2008, the only count). Harrison has no published count. |
| MetLife, UBS, Nassau, Jones Beach, PNC and the racetracks are near-total car | Holds for the suburbs; **MetLife is less total than it looks** | Jones Beach and PNC ~97%; Nassau and Meadowlands ~95%; UBS 89–93% observed. MetLife NFL ~87%, concerts ~75%, no-parking ~60%. |

Two venues the prompt didn't flag also sit low: Randall's Island and Liberty
State Park festivals (~10–15% car), because organisers ban personal parking.

## Gaps: 18 of 28 rows are estimates

The model names MSG and Harrison as the biggest risks to the formula, because
both are large and frequent.

| Venue | What's missing | Comparable used |
|---|---|---|
| MSG, Theater at MSG | Any count after 2003, and any after congestion pricing (Jan 2025) | Barclays survey adjusted for Penn's commuter reach and the $9 toll |
| Radio City, Javits | Any count | MSG, with more Midtown walk-ins |
| Sports Illustrated Stadium | Any count; PATH doesn't publish station-by-day ridership the way the MTA does | Prudential Center, one PATH stop away |
| Forest Hills Stadium | A count; the litigation covers noise and closures, not mode | No parking at all; Barclays-like walk share |
| Randall's Island, Liberty State Park | Counts for any festival | Parking bans set car share near zero beyond rideshare |
| Nassau Coliseum, Hofstra | Counts | UBS non-Islanders events |
| Jones Beach, PNC | Counts and published parking totals | Treated as the ceiling |
| MetLife NFL | A per-game count after 2010 | NJ Transit's 20,000-rider event sizing against ~82,500 seats |
| Meadowlands Racetrack, County Center, Carnesecca, Wien, Coney Island, Staten Island | Counts | Same-corridor venues |

**The model's suggested fastest upgrade:** MTA's open turnstile data by station
and hour would turn the Yankee Stadium, Citi Field, Barclays and MSG rows into
fresh observed counts (event-day spike minus a normal day, against announced
attendance). It did not pull that data.

## Claude's checks (Oct 6, 2026)

- **The verdict contradicts the code.** `src/data/formula/gridlock.ts` has
  `new-york: 'transit'`, set before any research. The research says **hub**, the
  same as Seattle. That line needs changing before New York is built, or every
  venue without its own figure gets a 0.4 default when the measured regional
  weight is ~0.6.
- **The prompt's own framing was wrong**, and the research corrected it. The
  prompt said "New York is the app's first transit city, so the default matters
  least." The ballparks broke that: Citi Field at ~60% car is closer to San
  Diego than to the transit tier.
- **Two venues need something the schema can't hold.** `carShare` is one
  optional number per venue (`src/data/types.ts`). MetLife needs three values by
  event type and UBS two. See `BACKLOG.md`.
- The Barclays figure is observed but from 2013, and every Manhattan figure
  predates congestion pricing (Jan 2025). Both are flagged by the model itself.

## Main sources

Belmont Park Redevelopment FEIS ch. 11 (ESD, July 2019); LIRR 2022 Annual
Ridership Report; MTA board report, 2025 US Open LIRR ridership; MSG/Penn
Station Compatibility Report (Amtrak, MTA, NJ Transit, June 2023); NYC DOT
Parking Conditions around Yankee Stadium and Atlantic Yards (July 2012);
Brooklyn CB6 minutes on the Barclays TDM report (June 2013); NJ Transit
Meadowlands, Prudential Center and Pokémon GO Fest 2025 plans; NJ Attorney
General 2024 Hambletonian results; WNYC (2011 ballpark transit shares, Super
Bowl 2014 rail share); TSTC (2012); Second Ave Sagas; Progressive Railroading
(Taylor Swift 2023); NBC New York (NJ Transit World Cup ridership, 2026);
Sports Business Journal (Prudential, 2008); Brooklyn Magazine; Streetsblog;
6sqft and PIX11 (congestion pricing); venue and organiser pages.
