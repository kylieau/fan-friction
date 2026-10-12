# Philadelphia implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research answers are unchanged (`philadelphia-venue-table-answer.md`, `philadelphia-city-type-answer.md`). This register selects active mapped public rooms, records gaps, and documents the Sports Complex shared-access approach. **Not a Kylie approval:** the next-ten plan lists Philadelphia as proposal #1; build follows the Milwaukee pattern pending her city-by-city OK.

## Active fixed rooms

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `lincoln-financial-field` | Lincoln Financial Field | 69,879 football | Official Eagles 2025 media guide; other published totals differ without affecting 5,000+. |
| `citizens-bank-park` | Citizens Bank Park | 42,901 baseball (2023+) | Reported; standing room can exceed listed capacity. |
| `xfinity-mobile-arena` | Xfinity Mobile Arena | 20,478 basketball; 19,173 hockey; 21,000 concert | Reported; renamed from Wells Fargo Center Sept 1, 2025. |
| `penn-franklin-field` | Franklin Field | 52,958 football | Reported; Penn rental figure 40,000 may be a subset. |
| `subaru-park` | Subaru Park | 18,500 soccer; 26,000 concert (field) | Soccer official/reported; concert includes field standing. |
| `freedom-mortgage-pavilion` | Freedom Mortgage Pavilion | 25,488 summer amphitheatre; 7,000 winter theatre | Same building, mutually exclusive configurations — never sum. |
| `mann-td-pavilion` | TD Pavilion / Highmark Mann | ~13,000 concert (full shed) | Roof-only 4,500 is below 5,000; festival grounds are Table B. |
| `mann-skyline-stage` | Highmark Skyline Stage | 6,500 concert GA (mid-range) | Official range 3,000–7,500; straddles friction threshold by setup. |
| `villanova-stadium` | Villanova Stadium | 12,500 football | Reported; no official university figure in research. |
| `liacouras-center` | Liacouras Center | 10,206 basketball; 5,000 theatre | Theatre mode can fall below 5,000. |
| `the-palestra` | The Palestra | 8,725 basketball | Reported. |
| `finneran-pavilion` | Finneran Pavilion | 6,501 basketball | Official. |
| `dell-music-center` | Dell Music Center | 5,884 concert (reserved+lawn) | Official site conflict 5,284 vs 5,344 reserved. |
| `the-met-philadelphia` | The Met Philadelphia | 3,400 concert | Reported. |
| `franklin-music-hall` | Franklin Music Hall | 2,700 concert | Reported. |
| `academy-of-music` | Academy of Music | 2,600 concert | Official; Ensemble Arts URL slug needs re-verify per research. |
| `fillmore-philadelphia` | The Fillmore Philadelphia | 2,500 concert | The Foundry (450) is a separate room — do not merge. |
| `marian-anderson-hall` | Marian Anderson Hall | 2,500 concert | Perelman (650) is separate. |
| `hagan-arena` | Hagan Arena | 4,200 basketball | Below friction floor. |
| `john-glaser-arena` | John Glaser Arena | 3,000 basketball | Approximate map point. |
| `xcite-center-parx` | Xcite Center at Parx | 1,500+ concert | Parx Racing grounds are Table B, not this room. |
| `keswick-theatre` | Keswick Theatre | 1,361 concert | Official. |
| `union-transfer` | Union Transfer | 1,200 concert | Near pre-list threshold. |
| `delaware-stadium` | Delaware Stadium | 18,500 football | **Edge tier** (New Castle County); 18,500 vs 22,000 conflict. |
| `frawley-stadium` | Frawley Stadium | 6,404 baseball | **Edge tier**; MiLB, no league feed wired. |
| `bob-carpenter-center` | Bob Carpenter Center | 5,000 basketball | **Edge tier**; exactly at friction threshold. |

## Excluded (research)

- **Tower Theater (A15):** closed since 2022; do not pre-list.
- **New South Philadelphia Arena (P1):** planned, not active through 2028.
- **Table B only:** FIFA Fan Festival, Broad Street Run, Welcome America, Penn Relays throws complex, Parx Racing derby, Aronimink PGA, convention-center halls.
- **Mann Downstage (300):** sub-1,000 setup; not activated as its own room.
- **Leads not verified:** Miller Theater, Daskalakis, Rowan, full coordinate geocode pass (research: 25 of 27 pending).

## South Philadelphia Sports Complex — shared access (Gridlock)

The three pro buildings (`lincoln-financial-field`, `citizens-bank-park`, `xfinity-mobile-arena`) share SCSSD parking (~23,400 spaces), Pattison Avenue, Broad Street, I-76/I-95, and NRG Station on the Broad Street Line (research: Oct 2023 triple-booking filled all lots). **Approach:** no separate egress table row — the existing Gridlock model groups venues within ~2 km into one zone; all three share the zone name **South Philadelphia Sports Complex** via `ZONE_NAMES` on each building. Spill between simultaneous events is the intended behavior (the next-ten plan’s “unique shared sports-complex access test”). Venue-level `carShare` uses city-type estimates (0.74 / 0.81 / 0.80), not measured splits. World Cup one-off transit-heavy counts are not imported as defaults.

## Feeds wired (Oct 12, 2026)

| Team / program | Source | Notes |
|---|---|---|
| Phillies | MLB Stats API | Team 143, venue 2681 |
| Eagles, 76ers, Flyers, Union | ESPN | Ids 21, 20, 15, 10739; home venues verified on schedules |
| Temple, Villanova, Penn, Delaware football/MBB/WBB | ESPN | Ids 218, 222, 219, 48 |
| Wings (NLL), Blue Rocks (MiLB) | — | Team records only; Ticketmaster sweep at `frawley-stadium` only for sports listings |
| Concerts | Ticketmaster | Room-matched by `ticketmasterIds` when Discovery returns ids; Mann campus requires exact room, not proximity |

No ticketing feed was validated in the research pass; live verification is this build’s feed checks only.

## Explicit gaps

- No venue `carShare` for rooms without a city-type recommended value; 0.85 hub fallback applies.
- Delaware Stadium capacity conflict; Temple–Eagles lease option status; Skyline Stage friction by setup.
- `"Philadelphia Stadium"` display name applies to both Linc (World Cup) and Subaru Park (CONCACAF) — match on venue id/address, never name alone.
- Mann campus: TD Pavilion, Skyline Stage, and festival mode — one grounds event per festival day.
- Open-site Table B crowds not seeded; coordinates for several rooms rely on Nominatim, not operator surveys.
- `node scripts/venue-access.mjs --metro=philadelphia` pending (Open-Elevation rate limits possible, as Milwaukee).

## Source retrieval

Research used search extracts only; Inquirer/PBJ pages may be paywalled. This build geocoded via OpenStreetMap Nominatim (one request per second). John Glaser Arena and Xcite Center use approximate or complex-level points where Nominatim did not resolve the interior room.
