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
- **The name stays "friction."** The two reasons are the "why" a user sees.
- **Size is venue capacity**, never expected attendance. SOLD OUT is shown beside the verdict, never subtracted.
- **v1 uses publicly available data only.** See "Not in v1" below.
- **Each city picks one of three starting types** (drive-centric sprawl like LA; transit-dominant like New York or London; destination hub like Las Vegas), plus a few venue exceptions.

## Not decided yet
1. **The "shield":** whether a bigger occasion lowers an event's own friction (our Oct 1 draft: Marquee down 2 levels). The report drops it; the size scaling above covers part of the effect. See Kylie's decision, to come.
2. **What the date rating measures.** Our recipe says it measures how hard it was to *draw a crowd*, "not how hard it was to get around." The report's rating includes Gridlock (getting around). Both can't be the definition. The two disputed ratings below turn on this.
3. **Nights 5 and 11 ratings** (arguments in the session notes; Kylie decides).
4. Every placeholder number: tier weights, 20% threshold, bump and its trigger, saturation factors, regional/national multipliers (1.15 / 1.3), the "stressed bottleneck" cutoff.
5. Marquee rules per league and the definition of a "legacy act" (an artist who has headlined 40k+ stadiums, or a billed farewell).

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
| "Springer 2022": German handball, basketball, hockey crowds rise 0.3–0.5 points per extra day from the nearest soccer match | **Paper exists and finds significant substitution** (Wallrafen, Nalbantis, Pawlowski, Review of Industrial Organization 2022). **The 0.3–0.5 figure is unverified**; the paper page blocked automated reading. Ask Kylie to paste it if it matters. |
| Coldplay Wembley dates moved for a Tube strike, Sept 2025 | **True.** Sept 7 moved to Sept 6, Sept 8 moved to Sept 12; the band said no licence could be granted without Tube service. |
| KKR home games in Kolkata moved for Ram Navami policing (2024, 2025) | **True** for 2025 (KKR vs. LSG moved Apr 6, Kolkata to Guwahati); 2024 reported as a similar case. |
| 69th Emmys, Sun 9/17/17, Microsoft Theater | **True** (CBS, hosted by Stephen Colbert). The theater seats about 7,100. Attendance and start time not confirmed. It's an invited audience, not a public ticketed sale, so whether it counts as a 5k+ event is Kylie's call. |
| Vegas Super Bowl 2/11/24 (Adele, I-15 collapse) and Bay Area 10/8/23 | **Not checked.** The report itself marks them "verify." |
| Spotify related-artists API cut for new apps, Nov 2024 | **True.** |
| Google Trends API limited access | **True** (small alpha, apply to join). |

## For later benchmarking
Our 13 LA nights are the test set for now (2–3 held back for step 8). When the app widens beyond LA, add dates that test the parts LA can't: a transit city with planned works (London 8/17/24), a parking-limited stadium (Pittsburgh 9/14/24), a public-capacity limit (London Sept 2025, Kolkata Apr 2025), a one-team city (Kansas City), a destination hub (Las Vegas 2/11/24), the Broad threshold in New York and Chicago, and the Bay Area 10/8/23 split. All need their facts verified before use.
