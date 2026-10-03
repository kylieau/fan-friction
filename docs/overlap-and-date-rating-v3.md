# Audience overlap and date rating: v3 structure (Oct 2, 2026)

Source: a second-opinion report Kylie got on Oct 2 ("Audience Overlap & Date Rating Structure v3"), then Kylie's answers the same day. Everything marked **placeholder** is a starting number for testing against Kylie's ratings, not a decision. The report's own "locked / soft-locked" labels are ignored; only what Kylie has said here counts.

## Adopted (Kylie, Oct 2)
- **Overlap tiers are set by event traits, never by city.** Each event carries: domain (sports, music, family), sport or genre, level (top pro, lower pro, college, school), fan identity (the team, school or artist), a **Broad** flag (teams only), draw radius (local, regional, national, plus a Destination flag) and occasion level.
- **Tiers (weights are placeholders):**
  - **High (1.0):** same fan identity (a school's football vs. its basketball); two Broad teams in different sports; any pair lifted by a Marquee competitor.
  - **Medium (0.5):** same-sport rival clubs, even when both are Broad (Yankees vs. Mets); same sport, different levels; different sports where one team is Broad; same-genre or same-era concerts.
  - **Low (0.15):** different sports where neither is Broad; sports vs. concert; different genres; anything vs. a family show.
  - **"Same sport = High" is retired** as a blanket rule. Same-sport pairs reach High only through same fan identity or a Marquee competitor.
- **Broad flag:** a team is Broad when about 20% of the metro's residents name it as theirs (threshold not final). Order of sources: a metro fan poll, then a college program with an 80k+ stadium, then Google Trends. **The flag is stamped with a year**, because a night is judged on what was known then (LA 2016: Lakers 37%, Dodgers 35%; LA 2026: Dodgers 43%, Lakers 28%).
- **Adjustments:** a Marquee competitor moves the pair up one tier (same domain only); a Destination event (Super Bowl, F1) moves down one tier against local events; shifts are netted before clamping to Low–High. Market Saturation (more top-level teams in a city = Broad pairs count a little less) is a placeholder.
- **Two reasons per date: Crowd fight and Gridlock.**
  - Crowd fight = fans choosing between events (overlap × time overlap × the competitor's venue capacity, relative to the event's own capacity).
  - Gridlock = everyone converging on shared roads, rail, parking and (for out-of-town draws) airports, whether or not they like the same things. Computed once per date from a per-city list of bottlenecks. A pre-announced strike or closure sets that bottleneck to the maximum.
  - The date's rating starts from the louder of the two and adds a small bump when the other is also high (placeholder: bump 0.5 once the quieter one is above 3). Not a plain sum. Weather and other inputs apply afterward.
  - Each reason shows only at Moderate+.
- **Date rating covers the whole night, both reasons.** It measures how hard the night was for fans, including getting around. The Oct 1 recipe line "not how hard it was to get around" is out of date for the date rating. Each *event's* verdict stays about drawing a crowd (Crowd fight), with "getting there" shown beside it as its own reason.
- **Occasion shield, light version (Oct 2).** On an event's own Crowd fight verdict only, never Gridlock: Marquee lowers it 2 levels, Major 1 level. Routine and Notable get nothing. It works on the finished verdict (Low, Moderate, Heavy, Extreme), not on the overlap tiers. A Marquee event facing another Marquee nets about −1 (the competitor upgrade is +1, the shield is −2). The date score takes the higher side of each pair, so a Heavy competitor still makes the date Heavy.
- **Invited events (Oct 2).** Each event is public or invited. Invited events (awards shows, corporate buyouts, big conventions) count in Gridlock by capacity but carry no Crowd fight and don't enter the pair table. Their street closures count as a public-capacity limit once verified.
- **What goes on the map (Oct 2, Kylie's decision).** Any event at a venue already in the app, ticketed or not, labeled "Invite-only" when it is. Marathons, parades and street festivals have no venue, so they're not pins; they are public-capacity limits that raise Gridlock on the corridors they close, shown as a reason. Kolkata's Ram Navami policing works the same way. **Mid-size theaters (about 5,000–8,000 seats) are not a core venue type.** One enters the model only when it sits on the same campus or corridor as a headline sports or stadium event that night, so they share bottlenecks (Peacock Theater at L.A. Live, Theater at MSG, Radio City, YouTube Theater at SoFi, a Strip theater next to a Vegas arena). A mid theater on its own does not enter. A venue is added deliberately (name, location, capacity by year).
- **Broad poll year (Oct 2).** Use the most recent poll before the date, not an average. Teams within a few points of the threshold are flagged borderline. LMU polling begins in 2014; older dates fall back to the 80k-stadium rule or Google Trends.
- **The name stays "friction."** The two reasons are the "why" a user sees.
- **Size is venue capacity**, never expected attendance. SOLD OUT is shown beside the verdict, never subtracted.
- **v1 uses publicly available data only.** See "Not in v1" below.
- **Each city picks one of three starting types** (drive-centric sprawl like LA; transit-dominant like New York or London; destination hub like Las Vegas), plus a few venue exceptions.

## Crowd fight scoring: proposed (second report, Oct 2; Kylie agreed to everything below except where noted)
Claude re-ran the report's arithmetic and it checks out. Every number is a placeholder.
1. **Pair volume:** `V = overlap × t × (A × B) / (A + B)`, where A and B are the two venues' capacities and t is a time factor.
2. **Share for one event:** `d = overlap × t × cap(c) / (cap(E) + cap(c))`. It can never exceed the overlap weight, so a small venue next to a huge one isn't pinned at the maximum. This replaces dividing by the event's own capacity.
3. **Several competitors:** `D = 1 − Π(1 − d)`. Each extra competitor adds less, and the total stays under 1.
4. **Score:** `Crowd fight = min(10, 1 + 14 × D)`. The 14 is anchored so two equal-size events with fully overlapping buyers read about 8, not fitted to the test nights.
5. **Time factor t:** 1 if the two attendance windows overlap once a 1-hour travel buffer is added; 0.5 if same day and the gap beyond the buffer is under about 3 hours; else 0. Default lengths (placeholders): NFL 3h15, college football 3h30, MLB 2h45, NBA/NHL 2h30, soccer 2h, concert 3h.
6. **Date Crowd fight:** the highest event score among events of about 15,000+ seats (smaller events still show their own verdict), plus an optional 0.5 if a second, different event also scores 6 or more. This replaces "worst pair + 0.5 per pair at 5+."
7. **Absolute displaced fans** (for example "about 10,500 fans in play") show as labeled context and feed Gridlock, not Crowd fight.
8. **Weights suggested:** High about 0.7 (was 1.0), Medium 0.3–0.4 (was 0.5), Low 0.15. **Marquee lift limited to the same sport or an adjacent genre**, so Elton John's farewell no longer lifts BLACKPINK vs. Elton from Low to Medium (that one lift alone moves 11/19/22 from 5.0 to 7.6).

**Kylie's picks (Oct 2):**
- Agreed: adopt the share-of-seats formula and date rule; High about 0.7; Marquee lift limited to the same sport or an adjacent genre (a small hand-written genre list for LA); fixed 15,000-seat floor for now; defer the weekday adjustment, the members-only flag and the Las Vegas visitor lift.
- **Pre-game standings are in.** Clarified rule: results of that event never count, but earlier results do. Standings going into the game are fair game. How they enter (stakes, and how hard a clash hits a struggling team) is still to be designed.
- **Tuning is allowed:** past attendance may tune the placeholder numbers across many dates, never feeding a single date's score, and with some dates held back as a test.
- **Medium weight (0.3–0.4 vs. 0.5): held until Gridlock is designed.** Claude's lean is 0.35.

**Test nights (Crowd fight only; Gridlock isn't designed yet):**
| Night | Result |
|---|---|
| 9/17/17 | Chargers 7.2 at Medium 0.5, 6.3 at 0.4, 5.8 at 0.35, 5.3 at 0.3. The Rams score about 3 and the Angels about 3. The Chargers set the date. |
| 11/19/22 | 5.0 with the Marquee lift limited (the Clippers set the date), 7.6 as written |

**Caveats (Claude):** (a) The Medium weight decides night 11, and nothing in hand can fix it, because the only fitting data is Kylie's ratings, one of which may have been shaped by results. (b) A date's rating is the louder of Crowd fight and Gridlock plus a bump, so with the placeholder bump, night 5 at Crowd fight 5.0 would be 5.5 / 6.0 / 7.0 at Gridlock 4 / 5 / 6. Both nights now wait on the Gridlock design. (c) The report's 9/17/17 case counts the Emmys in Gridlock; under Kylie's theater rule they probably stay out. (d) The research table comes from abstracts, not full papers, and the report itself marks the "Humphreys 15–30%" figure unverified.

**Other open items from the report:** a small map of which genres are "adjacent"; fixed vs. relative 15,000-seat floor; how standings enter (decided: they count); a weekday vs. weekend adjustment (deferred); a members-only/ballot flag for UK-style football; a Las Vegas concert-side visitor lift (sports keep a local core); College programs as Broad in one-team markets; a Gridlock scale based on road and rail capacity plus a transit modifier; (tuning on historical attendance: decided, allowed with held-out dates).

## Gridlock scoring: zone design adopted (third report, Oct 2)
**Kylie's picks (Oct 2/3):** adopt the zone design. The theater rule stays narrow: a mid-size theater counts only in the same zone (about a 5-minute drive) as a headline event that night, not a zone 5–12 minutes away. Night 5's 7.4 is not adjusted by hand; the date-score settings (bump and trigger) get fitted on about 10 of the 13 hand ratings and tested on the other 3 (Step 8). Street closures count only when a real announcement is found, never a default guess.

A merged second opinion on Gridlock. Claude re-checked the score formula arithmetic (it holds). All numbers are placeholders.
- **Zones, not a road table.** Venues within about 5 minutes' free-flow drive form a zone (Exposition Park, L.A. Live, Pittsburgh's North Shore). Nearby zones share part of each other's load by drive time (5–12 min = 0.15 in sprawl cities, 0.10 in transit cities; 12–30 min = 0.05). Drive times come from free OpenStreetMap routing; fallback is 2 km straight-line. Rail is its own unit per zone. 0–3 named choke points per city, added only when history shows the model under-scoring.
- **Score against a normal night, on a log scale:** `s = clamp(1, 10, 5 + 5 × log2(background × load / reference))`. The reference is 1.25 × the largest normal-night flow of any venue in the zone (a Dodger Stadium zone's reference is a Dodgers game). A normal night lands near 3.4 (hidden); 25% above normal = 6.6; double = 10. Never use a raw parking or lane count as the reference; use such counts only as cuts (a lot closed for construction).
- **Load in vehicles:** `capacity × road share × peak share / people per car × timing factor`. Road share by city type: sprawl 0.90, hub 0.75, transit-dominant 0.35, minus 0.10 for a rail station within 800 m with 8+ departures an hour (a manual yes/no flag in v1). Arrival and exit peak shares by event type (football 0.40/0.75, baseball 0.50/0.55, NBA/NHL/soccer 0.55/0.80, concert 0.50/0.85, awards 0.35/0.60 with 1.5 per car). Exits count, not just arrivals. A time-of-day background factor (weekday 3–7 pm 1.2, Sunday before 2 pm 0.9, and so on).
- **Out-of-town crowds:** no 1.15/1.3 multiplier (visitors are already in the seat count). National and regional draws get an airport and hotel unit instead.
- **Strikes and closures:** cut the unit's reference by the capacity lost. If the main mode loses half or more, or an authority says it can't be licensed or policed, the unit is 10. Festival, election and protest calendars count as police-capacity flags.
- **Date rule:** `G = min(10, worst zone + 0.25 × sum of (other zones' score − 5))`, only for zones with different events and only above 5. No cliff.
- **Each event's getting-there score:** the highest score among its own units at its own arrival and exit hours.
- **Test results (report):** 9/17/17 = 4.3 without the Emmys; 11/19/22 = 6.4; Coldplay's Tube-strike dates = 10; Kolkata Apr 6, 2025 = 10; a normal Wembley concert 2.4; a normal Eden Gardens night 2.6.

**What this does to the two disputed nights (Claude's arithmetic, placeholder date bump of 0.5 above 3):**
| Night | Crowd fight | Gridlock | Date rating |
|---|---|---|---|
| 11 (9/17/17), Medium 0.35 | 5.8 | 4.3 (no Emmys) / 5.5 (Emmys with a 20% closure guess) | 6.4 / 7.0 |
| 11, Medium 0.5 | 7.2 | same | 7.9 / 8.5 |
| 5 (11/19/22), lift limited | 5.0 | 6.4 | **7.4** |
Night 5's 7.4 is well above Kylie's gut of 5, possibly 6. The report compared Gridlock alone to that gut and left out the bump. Kylie's own gut table puts a 6/6 date at 7–8, so 5/6.4 at about 7 is consistent with it. Either Gridlock is scored too high for that night, the bump is too strong, or the gut for night 5 is low. Open.

**Flags (Claude):** (a) The report's 11/19/22 run assumed BLACKPINK starts 7:30 and Elton John 8:00. Scheduled times found: BLACKPINK 8:00 (it actually started 8:30); Elton John 8:00 or 8:15 (sources disagree). (b) The Emmys case uses a 20% street-closure default. That invents a fact; closures should count only when a real announcement is found. (c) The report widens our theater rule to a zone 5–12 minutes away; Kylie kept it narrow (same zone only), so the 2017 Emmys stay out of night 11 unless a headline event shared the L.A. Live zone that night (none known). (d) The sensitivity table shows the 5–12 minute coupling weight moves 11/19/22 from 6.1 to 7.0; it is the main knob. (e) The report assumed a 1:05 pm start for all three 9/17/17 games; the real starts are 12:38, 1:05 and 1:25 pm, so exits stagger slightly more.

## Not decided yet
1. **Which Medium weight (0.3–0.4 vs. 0.5)**, held until Gridlock is designed. Second-opinion prompt that produced it: `docs/pressure-mapping-prompt.md`.
2. **Nights 5 and 11 ratings.** Both wait on item 1 and on the Gridlock design. Night 11's 7 may have been shaped by reports of empty stadiums (results), which can't be a target; whether it holds from pre-event facts is what item 1 will show. Night 5 leans 6 now that getting around counts.
3. Every placeholder number: tier weights, 20% threshold, bump and its trigger, saturation factors, regional/national multipliers (1.15 / 1.3), the "stressed bottleneck" cutoff.
4. Marquee rules per league and the definition of a "legacy act" (an artist who has headlined 40k+ stadiums, or a billed farewell).
5. Case-by-case map exceptions (events with no venue in the app). Idea: a site admin who approves them, **parked for v2**. For now Kylie asks Claude and the event is added by hand in the seed data.
6. **Whether the 2017 Emmys enter night 11 at all.** Under the theater rule they do only if a headline event shared the L.A. Live corridor that night. None is known (the three games that day were in Carson, the Coliseum and Anaheim). Check the Crypto.com Arena calendar for 9/17/17. If nothing, the Emmys stay out and the date is judged on the three games.

## Not in v1 (public data only)
- **Billed traffic data** (Google Maps historical traffic is charged per request; Waze goes through a partner program). 🚩 Declined by Kylie; on the cost milestone list.
- **Paid crowd-origin data** (Placer.ai, StreetLight) and **buyer ZIP codes** (SeatGeek/StubHub): later, offline calibration only, and never as a live input.
- Hotel occupancy (STR), proprietary.
- Google Trends: the official API is a small invitation-only alpha; the public website has no sanctioned feed. Treat it as a manual lookup.
- Spotify's related-artists data was cut for new apps in Nov 2024. Last.fm similar-artists is the open option (check its commercial-use terms before any public launch).

## Verified Oct 2, 2026
| Claim in the report | Result |
|---|---|
| LMU poll: Dodgers 43%, Lakers 28%, Rams 7%, Kings 5%, Angels 4% | **True, but it is the 2026 poll.** Earlier years differ a lot (2016: Lakers 37, Dodgers 35). Stamp the Broad flag by year. |
| Quinnipiac: Yankees 53%, Mets 34% (2018) | **True** (released 4/2/18). But Quinnipiac 2017 had Mets 45, Yankees 43, so the lead swings. Both are Broad either way. |
| Wallrafen et al. 2019: top-division games cut fourth-division attendance | **Direction confirmed** (Journal of Sports Economics). Exact size not checked. |
| "Springer 2022": German handball, basketball, hockey crowds rise 0.3–0.5 points per extra day from the nearest soccer match | **Paper exists and finds significant substitution** (Wallrafen, Nalbantis, Pawlowski, Review of Industrial Organization 2022). **The 0.3–0.5 figure is unverified** (it came from the other model's research pack and was repeated without a check); the paper page blocked automated reading. Ask Kylie to paste it if it matters. |
| Coldplay Wembley dates moved for a Tube strike, Sept 2025 | **True.** Sept 7 moved to Sept 6, Sept 8 moved to Sept 12; the band said no licence could be granted without Tube service. |
| KKR home games in Kolkata moved for Ram Navami policing (2024, 2025) | **True, with a correction (verified Oct 2).** Kolkata police said they couldn't cover the Apr 6, 2025 KKR vs. LSG match during Ram Navami. Early reports said Guwahati, but the BCCI announced on Mar 28 that it moved to Tue Apr 8, 3:30 pm at Eden Gardens, so it stayed in Kolkata. 2024 reported as a similar case. |
| 69th Emmys, Sun 9/17/17, Microsoft Theater | **True** (CBS, hosted by Stephen Colbert). The theater seats about 7,100. Attendance and start time not confirmed; the red-carpet street closures around LA Live are **unverified**. It's an invited audience, so it counts in Gridlock only (Kylie, Oct 2). |
| Vegas Super Bowl 2/11/24 (Adele, I-15 collapse) and Bay Area 10/8/23 | **Not checked.** The report itself marks them "verify." |
| Spotify related-artists API cut for new apps, Nov 2024 | **True.** |
| Google Trends API limited access | **True** (small alpha, apply to join). |

## For later benchmarking
Our 13 LA nights are the test set for now (2–3 held back for step 8). When the app widens beyond LA, add dates that test the parts LA can't: a transit city with planned works (London 8/17/24), a parking-limited stadium (Pittsburgh 9/14/24), a public-capacity limit (London Sept 2025, Kolkata Apr 2025), a one-team city (Kansas City), a destination hub (Las Vegas 2/11/24), the Broad threshold in New York and Chicago, and the Bay Area 10/8/23 split. All need their facts verified before use.
