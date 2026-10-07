<!-- Pasted by Kylie in the Oct 7, 2026 Claude Code session, answering docs/next-cities-research-prompt.md. Saved in full, unedited below this line. The script it mentions is saved as docs/next-cities-overlap.py. Not a product lock: proposal, then her OK. -->

# Answer: which cities should Fan/Friction cover next?

Answer to `next-cities-research.md`. Researched Oct 6–7, 2026. Outside review, written without the app's code. This feeds a proposal, and Kylie picks the cities.

**Labels.** **A** = announced (league or team), **R** = reported (press or reference page), **E** = estimated by me (method shown in §5). If a number has no link, its source is the method in §5 or the venue lists in §6.

**Read this first: three places where the brief's own premises are weaker than they look**

1. **Montreal already covers two of the weak spots.** It is committed next and brings a real winter (*cold and snow*). It is also likely the first strongly transit-led city after New York. So the next three should not be picked for cold, and transit is only half-open.
2. **Two of the "untested" weak spots may already be in the covered cities.** Seattle has the University of Washington (Husky Stadium) inside the city. LA has USC and UCLA. LA also has two-team leagues: Lakers/Clippers, Rams/Chargers sharing SoFi, and LAFC/Galaxy, plus Dodgers/Angels if Anaheim is inside the LA boundary. If those cities don't yet pull college football or both teams, the gap is in the feed, not the geography, and closing it costs no new venue table. Check this before paying for a new city to test it.
3. **"Chicago and Boston are transit" may not survive measurement.** By commute share, Chicago city (20.5%) and Boston city (25.3%) sit closer to Seattle city (15.0%) than to New York (48.7%) (**R**, ACS 2024 1-year, [Wikipedia list](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership)). Commuting is not game-night arrival, and Wrigley and Fenway probably run more transit-heavy than their cities. But the honest expectation is *hub, possibly transit*, not *transit*.

---

## 1. Comparison table

Home dates and overlap days come from a model of 2025 schedules (§5). They count **pro and major-college team sports only**: no concerts, festivals or college basketball. So overlap is a **floor**, and concerts will add to it. Seattle is included only to give a sense of scale.

| City | Boundary (recommended) | Home dates, 2025 (**E**) | 5,000+ concert rooms (**E**, §6) | Days with 2+ events, 2025 (**E**, floor) | City type (my guess · confidence) | What it tests | Research load: 5,000+ venues (**E**) · awkward bits | Data gaps |
|---|---|---|---|---|---|---|---|---|
| **SF Bay Area** | SF + East Bay + Peninsula + South Bay as **one metro** (Sacramento separate) | 258 | 6 (+ Cow Palace to check) | **50** | hub · low (transit core, car-led South Bay) | **Distance** (Oracle Park to Levi's or SAP is ~45 mi across a bridge-and-freeway network); **bridge access**; **college inside metro** (Cal, Stanford, SJSU on the same Saturdays); one city type can't describe it | ~18 · Oakland lost its MLB, NBA and NFL teams; Coliseum sale; Roots on short leases; Warriors and Valkyries share Chase; Outside Lands, Bay to Breakers | Oakland Roots (USL) in ESPN: unverified |
| **Chicago** | Cook County + collar suburbs (Rosemont, Evanston, Tinley Park, Highland Park, Bridgeview); not NW Indiana or South Bend | 298 | 4 (+ Ravinia) | **64** (most) | hub, possibly transit · medium | **Two MLB teams in one metro** (only if LA doesn't already test this); transit at US scale; cold (repeats Montreal); highest Crowd-fight volume; Northerly Island access | ~14 · Northwestern moves into the new Ryan Field mid-2026; Stars (NWSL) play in a 12,000 venue but average ~4,300; Lollapalooza; Marathon | Stars' crowds fall below 5,000 (see notes) |
| **Dallas–Fort Worth** | DFW–Arlington core: Dallas, Fort Worth, Arlington, Frisco, Denton, Irving, Allen | 230 | 5–6 | **32** | sprawl · high | **Heat with roofs** (Rangers and Cowboys under retractable roofs; FC Dallas, the amphitheaters and college football outdoors); **distance** (Fort Worth to Frisco ~50 mi); three FBS programs inside the metro | ~20 (largest) · Wings move from Arlington to downtown Dallas in 2026; State Fair (24 days, no team); Red River Showdown and other neutral-site games at the Cotton Bowl and AT&T | Neutral-site college games have no "home team"; State Fair has no feed |
| **Houston** | Harris County + The Woodlands + Sugar Land | 194 (+20 rodeo days) | 3 (+2 to check) | **27** | sprawl · high | Heat with roofs (Astros, Texans); **RodeoHouston**: 20 straight nights of huge NRG crowds | ~13 · Rodeo; Astros' park renamed Daikin Park | Rodeo has no schedule or attendance feed |
| **Atlanta** | 11-county core incl. Cobb (Truist Park), Gwinnett (Gas South), College Park; Athens (UGA) outside | 161 | 3–4 | **16** | sprawl · medium (MBS and State Farm Arena have MARTA stops; Truist Park doesn't) | **Outdoor heat** (Braves at open-air Truist Park); college downtown (Georgia Tech, Georgia State); transit mix inside one city | ~12 · Dream split between Gateway Center (~5,000) and State Farm Arena; SEC title game, Peach Bowl and kickoff games at MBS; Peachtree Road Race | Dream games below the 5,000 line depending on building |
| **Philadelphia** | Philadelphia + Camden + Chester + Villanova; not Atlantic City | 195 | 3 | **17** | hub · medium (city commute share 20.1% **R**) | **One sports complex**: Phillies, Eagles, 76ers and Flyers on one South Philly site with one subway line, which is the strongest *Gridlock* test anywhere; shared arena (Sixers and Flyers); Temple shares the Linc | ~10 · Wells Fargo Center renamed Xfinity Mobile Arena (2025); Penn Relays; Army–Navy in some years | None found |
| **Boston** | Boston + Cambridge + Chestnut Hill + Foxborough + Mansfield; Worcester and Providence outside | 195 | 1 (+3 sitting right at 5,000) | **17** | hub, possibly transit · medium (city 25.3% **R**) | Transit (Fenway, TD Garden); cold (repeats Montreal); Gillette is a far-out car venue | ~12 · Boston Legacy (NWSL) starts in 2026 at White Stadium; Marathon; Head of the Charles | PWHL Fleet (Lowell): unverified in ESPN |
| **Phoenix** | Maricopa County | 159 (+~33 spring-training days) | 2–3 | **15** (+ spring training) | sprawl · high | **Extreme heat**, but nearly all big pro venues are indoor or roofed; **spring training**: 10 Cactus League parks over ~5 weeks, a Crowd-fight burst found nowhere else | ~17+ (10 are spring parks) · Coyotes gone (2024); WM Phoenix Open (no building); Phoenix Raceway | Spring games are in MLB's feed (verify `gameType=S`) |
| **Austin** | Austin–Round Rock–San Marcos (adds Texas State); San Antonio separate | **30** | 3 (+Zilker) | **5** | sprawl · high | **Big college inside the city** in its purest form (UT, ~100k seats, a few miles from Q2); outdoor heat | ~9 · ACL Fest (2 weekends), F1 at COTA, SXSW: big events with no team id | AHL Texas Stars and AAA Round Rock are borderline 5,000 crowds |
| *Tampa Bay* (in your log) | Hillsborough + Pinellas | 136 | 2 | **6** | sprawl · high | **Causeways** (non-hill hard access); outdoor heat; hurricanes | ~7 · Rays played 2025 at Steinbrenner Field (11k, open-air), back at the Trop in 2026 ([R](https://www.nbcsports.com/mlb/news/tampa-bay-rays-to-return-to-tropicana-field-in-2026-after-hurricane-repairs)) | None found |
| *Columbus* (in your log) | Franklin County + ring | 64 | 2 | **3** | sprawl · high | College town at its most extreme (Ohio Stadium 102,780 **R**, [FBS list](https://en.wikipedia.org/wiki/List_of_NCAA_Division_I_FBS_football_stadiums)); cold | ~6 | AAA Clippers are borderline 5,000 |
| *Seattle (covered, scale)* | — | 188 | — | 28 | — | — | — | — |

**How to read the overlap column.** Chicago (64) and the Bay Area (50) have roughly twice Seattle's Crowd-fight days. DFW and Houston sit about level with Seattle. Atlanta, Philadelphia, Boston and Phoenix fall *below* Seattle on team sports alone; concerts will lift them, and how much is not measured here. Austin, Tampa and Columbus have almost no team-on-team overlap, so they test their single weak spot and little else.

---

## 2. Ranked: the next three after Montreal

1. **San Francisco Bay Area.** It is the only candidate that tests **distance** inside one metro without stretching the boundary. Oracle Park and Chase Center sit beside Levi's, SAP Center and Shoreline about 45 miles away. It also breaks the idea that one city type fits the whole metro. It has the second-highest overlap (50 days), and you are there now, so you will log nights.
2. **Dallas–Fort Worth.** It is the best single test of **heat**, because heat has to interact with the **roof** field (two retractable roofs next to outdoor soccer, amphitheaters and three FBS programs). It also tests distance a second time (Fort Worth to Frisco to Denton) and answers your Texas question.
3. **Chicago.** It has the most overlap of any candidate (64 days), the only two-MLB-team metro on this list, and a US transit measurement to set beside Montreal's. It is also already in your log.

**What this order misses:** the South and the East Coast stay uncovered. None of the next three is in the South or on the East Coast, and the Bay Area makes the West Coast skew worse. Open-air heat at night (Atlanta, Austin, Tampa) gets only a partial test through DFW's outdoor venues. Philadelphia's one-complex Gridlock case, the sharpest Gridlock test on the list, goes untested. **If geography matters more to you than the Bay Area's distance test, swap Bay Area for Atlanta** and keep Bay Area as a personal add-on.

---

## 3. The Bay Area on its own

**Recommended boundary: one metro.** It runs from SF and the East Bay (Oakland, Berkeley, Concord) down the Peninsula (Stanford, Mountain View) to the South Bay (Santa Clara, San Jose). Sacramento stays separate. Inside it fall:

- Giants (Oracle Park)
- Warriors and Valkyries (Chase Center)
- Sharks (SAP Center)
- 49ers (Levi's)
- Earthquakes and Bay FC (PayPal Park)
- Cal, Stanford and San José State football
- Oakland Roots at the Coliseum
- Concert rooms: Shoreline, Concord Pavilion, the Greek, Frost, Bill Graham Civic and Oakland Arena

Splitting the metro into SF/Oakland and South Bay would make the numbers look cleaner and **hide the exact flaw a new city is supposed to expose**. Today a Saturday with a Giants game and a Stanford game would count as two events fighting for one crowd, even though the drive between them can run 1–1½ hours. The single metro makes that error visible.

Things to know before building:
- **Oakland is now thin.** The A's play in Sacramento for 2025–27 ([A](https://www.mlb.com/athletics/news/a-s-announce-2025-27-stadium-plans)), and the Warriors and Raiders are gone.
- **The Roots are on short leases at the Coliseum.** They averaged 6,209 a match outside a 26,575 opener (**R**, [RootsBlog](https://www.oaklandrootsblog.com/2025/10/06/oakland-roots-nearing-agreement-to-stay-at-coliseum-in-2026/)). Their 2026 license was pending, and the Coliseum site sale is projected for June 30, 2026 (**R**, same source).
- **Oakland Arena has no tenant** and now hosts only concerts and one-offs.
- **The Valkyries set a WNBA attendance record in 2025** (**R**, [Valkyries](https://valkyries.wnba.com/news/valkyries-set-all-time-wnba-attendance-record-20250906)), so Chase Center is busy almost year-round.

**Worth it now on test value alone, or because you're there?** Mainly **because you're there**. The test value is real but narrow: it is the best *distance* test on the list, and the bridges add a second non-hill access case that New York already starts to cover. On test value alone, DFW comes first: heat plus roofs plus a second distance case, and no new West Coast city. The Bay Area moves up only because you will log real nights there now, and a city you actually log is how the formula gets checked against what you saw.

---

## 4. Not recommended (now)

| City | Why not |
|---|---|
| **Houston** | Teaches almost nothing DFW doesn't (sprawl, heat under roofs, college inside the metro), and DFW adds distance. Its one unique test, RodeoHouston's 20 nights, has no free feed and would be hand-entered. |
| **Boston** | Transit and cold, which are Montreal's and Chicago's tests. Low team overlap (17 days). Three of its concert rooms sit right at the 5,000 line, which is research load for little return. |
| **Phoenix** | Heat under roofs is DFW's test with less overlap (15 days). Spring training is a genuinely unique Crowd-fight burst, but it means ~10 extra venues for five weeks of mostly *day* games. Revisit if you log there in February or March. |
| **Austin** | Too little overlap (5 days) to test Crowd fight; it would mostly be a college-football calendar. Its college-town test is better done by adding UW, USC and UCLA football to the cities you already cover, if they aren't in yet. |
| **Atlanta** (as a top-three pick) | Not a bad pick; it is the first alternate. Its heat and college tests partly duplicate DFW's, and its team overlap is low (16). Pick it over the Bay Area if geography matters more. |
| **Philadelphia** (as a top-three pick) | Close fourth. Its one-complex Gridlock test is unique, but overlap is low (17), and New York and Seattle (two stadiums side by side in SoDo) already exercise shared access. |
| **Tampa, Columbus** | Both are in your log, but each tests one thing (Tampa's causeways, Columbus's 100k college crowd) with almost no team overlap (6 and 3 days). Better as "log-driven" adds when you are there. |
| *Also considered* | **Denver** (shared Nuggets/Avalanche arena, snow, Boulder 25 mi away) and **Minneapolis–St Paul** (two downtowns, cold, the Gophers in the city) both beat Boston on test value. Neither is in your log, and Montreal covers their cold. |

---

## 5. Method: home dates and overlap (estimates)

The workspace could not reach MLB's or ESPN's feeds, so I could not count real 2025 schedules. One attempt to scrape a team's schedule from a reference page returned garbage (100 "home dates") and was discarded. Instead:

- **Home dates per team (A, league format):** MLB 81 ([2025 season](https://en.wikipedia.org/wiki/2025_Major_League_Baseball_season)), NBA 41, NHL 41, WNBA 22 (44-game 2025 season, [link](https://en.wikipedia.org/wiki/2025_WNBA_season)), MLS 17, NWSL 13, USL Championship 15. NFL is 8–9, so I used 8.5. FBS college football is 6–7, so I used 6.5.
- **When they fall (E):** each team's home dates are spread evenly over its 2025 window, on the days that league actually plays:
  - MLB: Mar 27–Sep 28, any day
  - NBA: Jan 1–Apr 13 and Oct 21–Dec 31, at 41/174 per day
  - NHL: Jan 1–Apr 17 and Oct 7–Dec 31, at 41/196 per day
  - WNBA: May 16–Sep 11
  - NFL: Sundays (Jan 5, then Sep 7–Dec 28)
  - College football: Saturdays, Aug 30–Nov 29
  - MLS and USL: Saturdays
  - NWSL: Fri/Sat/Sun
- **Shared buildings** can't host two teams the same night, so each building is one slot (Bulls + Blackhawks = United Center).
- **Per day**, the chance that 2+ buildings are busy is computed exactly from those per-building chances (independent across buildings). The results are summed over 2025.
- **Example (Chicago, a mid-July Saturday):** Cubs 0.44, Sox 0.44, Sky 0.18, Soldier Field (Fire) 0.49, United Center 0. P(2+) ≈ 0.50. Summing every day of 2025 gives 64.
- **Biases:**
  - Real schedules cluster (homestands), and leagues sometimes stagger same-city teams. That can push true overlap either way, roughly ±25% by my judgment, not measured.
  - Midweek MLS, Thursday and Monday NFL, and college football played on Fridays are ignored.
  - The model counts **days, not nights**: a 12:00 college kickoff plus a 7:10 first pitch counts as overlap.
  - **Excluded:** concerts, college basketball, AAA and AHL, festivals, and spring training. All of them only *add* overlap.
- **Seattle as a check:** the same model gives 28 days for Seattle. If your real Seattle data shows something very different, scale the other cities by the same ratio.

Script: `overlap.py` (attached alongside this file).

## 6. Venue notes behind the counts

The concert-room and venue counts are **E**: my own count of 5,000+ rooms inside each recommended boundary. Arena capacities come from [Wikipedia's list of US indoor arenas](https://en.wikipedia.org/wiki/List_of_indoor_arenas_in_the_United_States), amphitheaters from [its list of amphitheatres](https://en.wikipedia.org/wiki/List_of_contemporary_amphitheatres) (**R**), and FBS stadiums from the [FBS stadium list](https://en.wikipedia.org/wiki/List_of_NCAA_Division_I_FBS_football_stadiums) (**R**). Team stadiums are far over 5,000, so their exact size doesn't affect the count. **The venue research run should re-measure all of these.**

- **Bay Area concert rooms:**
  - Shoreline 22,500
  - Concord Pavilion 12,500
  - Hearst Greek 8,500
  - Frost 8,000
  - Bill Graham Civic 7,000
  - Oakland Arena 20,000
  - Cow Palace: not in the list, check
  - Not counted: Kaiser Convention Center appears in the list at 5,492 but has been closed for years.
  - The Greek sells through Ticketmaster ([R](https://thegreekberkeley.com/venue-info/box-office/)), so it shows up in Discovery.
- **Chicago concert rooms:** Allstate 18,200; NOW Arena 11,218; Credit Union 1 Amph. 28,739; Huntington Bank Pavilion 30,000 (the Northerly Island peninsula). Ravinia (lawn) needs checking. Not counted: Wintrust (Sky). Football venues: Northwestern's new Ryan Field (35,000) opened Oct 2, 2026 ([R](https://www.nationalfootballpost.com/northwestern-will-open-862m-ryan-field-oct-2-vs-penn-state)). The Chicago Stars play at Martin Stadium (12,000) but average ~4,316 (**R**, [Just Women's Sports](https://justwomenssports.com/reads/chicago-stars-martin-stadium-evanston-2027/)), so they are left out of the overlap model.
- **DFW concert and event rooms:** Dos Equis Pavilion 20,000; Dickies Arena 14,000; Fair Park Coliseum 9,552; Allen Event Center 8,100; Comerica Center 7,000. Toyota Music Factory needs checking. The Wings move to Dallas Memorial Arena in 2026 ([R](https://www.sportstravelmagazine.com/dallas-wings-to-play-at-dallas-memorial-arena-starting-in-2026)).
- **Atlanta:** Lakewood (listed as Cellairis) 18,920; Ameris Bank Amph. 12,000; Gas South Arena 13,000; Gateway Center 5,000 (Dream).
- **Philadelphia:** Mann Center 14,000; Freedom Mortgage Pavilion (Camden) 24,488; Liacouras Center (check).
- **Boston:** Xfinity Center (Mansfield) 19,900. At or near the line, to check: Leader Bank Pavilion, MGM Music Hall at Fenway, Agganis Arena.
- **Houston:** Cynthia Woods Mitchell Pavilion 16,500; Miller Outdoor Theatre 6,200; NRG Arena 8,500. To check: 713 Music Hall, Smart Financial Centre.
- **Austin:** Germania Amph. 14,000; H-E-B Center (Cedar Park) 8,700; Moody Center (not in the list, check capacity).
- **Phoenix:** Talking Stick Amph. 20,106; Desert Diamond Arena 19,000; Veterans Memorial Coliseum 14,487 (check whether it is still in use).

**Free-data check.** Nothing recommended needs paid data. Gaps to verify in the build:
- **ESPN's free endpoints:** whether they carry USL Championship (Roots) and AHL or PWHL. I could not confirm a league list.
- **No feed at all:** RodeoHouston, the State Fair of Texas, marathons, festivals (Outside Lands, ACL, Lollapalooza) and the Phoenix Open. These would be hand-entered or skipped.
- **Ticketing:** any concert room not sold through Ticketmaster won't appear in Discovery, so check each room's ticket seller during the venue run.

## Sources
- [List of U.S. cities with high transit ridership (ACS 2024)](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership)
- [List of indoor arenas in the United States](https://en.wikipedia.org/wiki/List_of_indoor_arenas_in_the_United_States) · [List of contemporary amphitheatres](https://en.wikipedia.org/wiki/List_of_contemporary_amphitheatres) · [List of FBS stadiums](https://en.wikipedia.org/wiki/List_of_NCAA_Division_I_FBS_football_stadiums)
- [Oakland Roots nearing agreement to stay at Coliseum in 2026 (RootsBlog)](https://www.oaklandrootsblog.com/2025/10/06/oakland-roots-nearing-agreement-to-stay-at-coliseum-in-2026/)
- [A's announce 2025–27 stadium plans (MLB.com)](https://www.mlb.com/athletics/news/a-s-announce-2025-27-stadium-plans)
- [Valkyries set all-time WNBA attendance record](https://valkyries.wnba.com/news/valkyries-set-all-time-wnba-attendance-record-20250906)
- [Rays to return to Tropicana Field in 2026 (NBC Sports)](https://www.nbcsports.com/mlb/news/tampa-bay-rays-to-return-to-tropicana-field-in-2026-after-hurricane-repairs)
- [Dallas Wings to play at Dallas Memorial Arena from 2026 (Sports Travel)](https://www.sportstravelmagazine.com/dallas-wings-to-play-at-dallas-memorial-arena-starting-in-2026)
- [Northwestern opens new Ryan Field Oct. 2 (National Football Post)](https://www.nationalfootballpost.com/northwestern-will-open-862m-ryan-field-oct-2-vs-penn-state)
- [Chicago Stars staying at Martin Stadium (Just Women's Sports)](https://justwomenssports.com/reads/chicago-stars-martin-stadium-evanston-2027/)
- [Greek Theatre box office](https://thegreekberkeley.com/venue-info/box-office/)
- League formats: [MLB 2025](https://en.wikipedia.org/wiki/2025_Major_League_Baseball_season), [WNBA 2025](https://en.wikipedia.org/wiki/2025_WNBA_season), [2025 Oakland Roots season](https://en.wikipedia.org/wiki/2025_Oakland_Roots_SC_season)
