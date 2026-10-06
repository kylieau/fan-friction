# Venue egress research answer (43 venues)

_Oct 6, 2026. Research handoff for Fan/Friction Gridlock inputs. Companion to `docs/venue-egress-prompt.md`. Machine-readable table: `docs/gridlock_inputs_all_43_venues.csv`._

## Status
Full pass complete (batches 1–12, 13–24, 25–35, 36–43). Columns match the brief’s 11 fields plus sources. **Not a product lock** — use this to propose a Gridlock / hard-access update; keep current ×1.25 until Kylie locks a new rule.

## Conventions followed
- Labels: official / reported / estimated / anecdotal. `n/f` = searched, not found; no guessing.
- Conflicts carry both values and both sources.
- Estimates show the math in the cell. Estimates made:
  - Dodger Express share ~3.8% (2019 ridership / games / attendance)
  - Petco trolley ~20% (MTS 8,000 sellout avg / capacity)
  - Coachella shuttle ~22% (2012 figures)
  - Hollywood Bowl car+other ~61% (100 − official 39% bus)
  - Santa Anita ~7,000–7,700 spaces (from “2.5M sq ft”)
  - Fairplex ~33,000–36,000 (from “300 acres”)
  - Golden 1 car share ~85–90% (by subtraction)
- Shared-district rows (Peacock, YouTube Theater, BMO, DHSP tennis, Drake, LA Tennis Center, Pomona Dragstrip) point to their district row rather than repeating values.
- Clearance cells say what was measured and for what event; lot-closing policies are flagged as policy, not measurement.

## Changes to the first-pass leads
- **Angel Stadium:** official count found, 12,500 (City of Anaheim; stadium-site agreement requires it be maintained). Parkopedia’s 7,000 noted as conflict.
- **Hollywood Bowl:** official multi-year bus share from LA Phil: 26% (2022), 29% (2023), 36% (2024), 39% (2025). Replaces the “more than a third” anecdote.
- **Crypto.com Arena:** Farmers Field EIR / LADOT letter gives stadium-event assumptions for the site: weekday 73% auto / 20% transit / 7% walk, occupancy 2.70; weekend 81.5% / 15% / 3.5%, occupancy 3.00; 19,467–19,560 cars for 72,000; 75% of outbound cars in post-event hour. Also 5,558 spaces at the Convention Center/L.A. Live Way site (2012). All are projections for a proposed stadium, not arena surveys.
- **DHSP:** official 10,000 (AEG/Chargers 2017) vs LA Times 8,500 incl. ~half borrowed from CSUDH.
- **Intuit Dome:** the “4,000+” is no longer on the venue FAQ; EIR ~3,475 stands.
- **Dodger Stadium:** LADOT study recommendations still not published as of Oct 6 (page updated Oct 3 still says Fall 2026). 16,000 remains reported (LAist/DodgerBlue); team pages give no count.
- **SoFi:** still no official on-site count. Inglewood Park & Go 4,000+ confirmed official.
- **Golden 1 and Ohio Stadium** leads held; added SacRT 11% light-rail share (2016–17) and the city’s 60-min-before / 30–45-min-after closure window; added OSU’s one-way inbound-then-outbound street plan detail.

## New official data worth knowing about
- **Empire Polo Club** (Indio Music Festivals EIR, 2012 observations): occupancy 2.65 car camping / 2.98 day parking / 2.84 taxi / 2.03 staff; outbound traffic dispersed within 1.5–2 hr of event end; queues build and clear in 15–30 min; camping load-out 8–11 AM Monday, site clear by noon; shuttle 16,700 pax/day; full street-closure and flashing-red-signal plan. Best clearance observation in the LA set, but pre-dates the festival’s growth to ~125,000/day.
- **Long Beach Arena:** 4,110 spaces by garage (official). **Veterans Memorial Stadium:** 2,931 + 56 stalls (official). **Wintrust Arena:** Lot A 2,100, Lot C 1,900 (official). **T-Mobile Park** garage ~2,100 (official PFD). **Amalie Arena:** venue controls no parking; Pam Iorio garage 1,140 (city). **Honda Center/OCVIBE** buildout 12,369–12,823 (city).
- **Petco:** MTS official 8,000 trolley riders on sellout dates (2024 and 2025 seasons), 8,000–12,000 on game days.
- **Citi Field:** transit share hit 45% during 2008–09 construction (Sam Schwartz); Shea study (TRR 2000) found AVO 2.2–2.3 with good rail vs ~2.6 without.

## Where the data is thin
- Measured drive/non-car share: 6 venues (Hollywood Bowl, Coachella 2012, Citi Field historical, Golden 1, plus Petco and Dodger estimates). Measured occupancy: 2 (Coachella, Shea study). Observed clearance: 2 (Coachella, Golden 1 closure window). Cars per sellout: 1 (Golden 1 ~7,000).
- No LA venue other than Coachella has a measured clearance time; Rose Bowl, Hollywood Bowl, SoFi, FivePoint, Greek figures are anecdotal.
- Campus venues (UCLA ×3, USC ×2, ELAC, CSUF, CSULB, UCI) have structure names but no counts except UCI’s Mesa structure (1,300) and USC’s Figueroa structure (~1,200, Wikipedia).
- Greek Theatre, Anaheim Convention Center, Kia Forum, Pacific Amphitheatre: no official space counts found.

## Status flags
- Veterans Memorial Stadium closed Sept 2026 for rebuild (~2029); recorded as operated.
- FivePoint closed Oct 2023; recorded as operated. Great Park has since added ~2,000 spaces; Championship Soccer Stadium expanded to 5,500 (Feb 2026).
- Honda Center parking mid-transition (OCVIBE garages through 2027; parking bundled with tickets).
- Citi Field lots shrinking under Metropolitan Park construction; no current total.
- Renames confirmed: LBS Financial Credit Union Pyramid (Nov 2025), Mortgage Matchup Center (2025), In-N-Out Burger Pomona Dragstrip (2023).

## Documents not retrieved (would move several rows)
1. LADOT Dodger Stadium Transportation Study, due Fall 2026.
2. Inglewood Transit Connector EIR, Transportation Assessment (envisioninglewood.org Apx_O_Transportation.pdf) pp. ~65–72 and Appendix D “Event Travel Characteristics”: mode split and vehicle occupancy for SoFi, Kia Forum, Intuit Dome by event type. Only the first ~65 pages were fetched.
3. IBEC EIR transportation section (Intuit Dome mode assumptions).
4. Metropolitan Park environmental review (Citi Field existing parking and game-day mode split).
5. CampusParc for an Ohio Stadium total; campus parking inventories or LRDP EIRs for the university venues; Griffith Park concession/EIR documents for the Greek.

## Implication for Gridlock (proposal needed — not locked)
Road capacity stays an OSM job (lanes out of research scope). Research still cannot support cars÷exit-lanes without OSM exits + better cars-per-sellout coverage. **Recommendation pending separate proposal:** keep hard-access ×1.25 for now; use this CSV for `carShare` / space inputs where labeled official or reported; revisit cars÷OSM-exits once exits are computed and more cars-per-sellout rows exist. Do not change formula constants until Kylie locks.

## Claude's read and the decision (Oct 6, second session)
- **The cars-per-exit-lane rule is not buildable on public data**, and half the list is a venue type where lanes wouldn't govern egress anyway (stacked lots, one-way conversions, downtown grids). Chasing it further is not worth the hours. The OpenStreetMap lane-tag ring is the only global version and its tags are too patchy to trust as a denominator today.
- **Keep what is built**: hard access as a measured rule (relief and streets), ×1.25 scaled by the venue's car share. The research's facts that bear on it are all consistent with that rule: the Bowl and the Rose Bowl are stack-parked with 60–120 minute waits; Dodger Stadium has five gates onto a hill with 16,000 spaces for 50,000 people; the downtown arenas disperse into garage grids.
- **Two facts worth keeping**: Golden 1 Center's city-measured ~7,000 cars per sellout against 17,600 seats implies a car share near 0.85–1.0 once occupancy is counted, so the driving-city default is reasonable even in a "transit" downtown; and LADOT's Dodger Stadium traffic assessment, due this fall, is the one free, LA-specific source that could give a real clearance figure. Watch for it.
- **Stack parking is a real third signal** the rule doesn't have. If the venue table ever records "stack-parked lots" (a yes/no from the venue's own parking page), it is a better predictor of a long exit than lane counts would be. Not built; noted for the venue table's next pass.
- No code change from this answer; the Cursor agent's conclusion above (PR #15, merged by Kylie Oct 6) agrees (keep ×1.25, nothing locked). The thread is closed until LADOT publishes or a second city raises it again. Kylie's own partial run (12 venues, lanes unpublished) reached the same wall and is superseded by the 43-venue table here.
