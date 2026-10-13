# Miami implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources: `miami-city-type-answer.md` and `miami-venue-table-answer.md` (unchanged). Miami-Dade + Broward core; Palm Beach edge venues excluded. City type **`sprawl`** per research §8.1. Estimated car shares wired on six rooms (C04, Oct 12). Metro code **MIA**.

## Active fixed rooms (17)

| App ID | Research | Selected capacities | carShare (estimated) | Notes |
|---|---|---|---|---|
| `hard-rock-stadium` | A01 | 64,767 football; 64,478 World Cup soccer | 0.93 | Dolphins, Hurricanes, Orange Bowl host; Miami Open/F1 are grounds events, not separate rooms. |
| `homestead-miami-speedway` | A02 | 46,000 racing | — | 45k/65k conflicts preserved in note. |
| `loandepot-park` | A03 | 36,742 baseball | 0.85 | Marlins; 2026 Winter Classic was a one-off at this bowl, not Panthers' home. |
| `nu-stadium` | A04 | 26,700 soccer | 0.86 | Inter Miami MLS primary home from Apr 2026. |
| `amerant-bank-arena` | A05 | 19,250 hockey; 23,000 concert max | 0.95 | Panthers. |
| `inter-miami-cf-stadium` | A06 | 21,550 soccer | — | Fort Lauderdale; II + occasional first-team cup matches. |
| `kaseya-center` | A07 | 19,600 basketball; 19,146 center concert | 0.78 | Heat. |
| `pitbull-stadium` | A08 | 20,000 football/soccer | — | FIU football; Miami FC USL; 22,682 conflict in note. |
| `fpl-solar-amphitheater` | A10 | 8,500 concert (full venue) | 0.78 | Threshold judgment: held at city/CVB 8,500 despite 1,646–5,000 conflicts. Ultra is Bayfront grounds (B04), not this row. |
| `watsco-center` | A11 | 7,972 basketball | — | UM basketball. |
| `hard-rock-live-hollywood` | A12 | 7,000 concert | — | Not Hard Rock Stadium. |
| `beyond-bancard-field` | A13 | 7,000 soccer | — | Fort Lauderdale United; coordinate approximate. |
| `ocean-bank-convocation-center` | A15 | 5,000 basketball | — | FIU basketball; threshold case. |
| `fillmore-miami-beach` | A18 | 2,700 concert | — | Pre-list room. |
| `broward-center-au-rene` | A19 | 2,658 concert | — | Coordinate approximate. |
| `arsht-ziff-opera-house` | A20 | 2,400 theatre | — | |
| `arsht-knight-concert-hall` | A21 | 2,200 concert | — | Not James L. Knight Center (A17). |

## Deferred / excluded

| Item | Treatment |
|---|---|
| Palm Beach edge (FAU stadium, iTHINK Amphitheatre, spring-training parks) | Out of core per both research answers. |
| A14 Miami Marine Stadium | Closed; voter-approved management plan, no reopen date. |
| A17 James L. Knight Center | Sub-5,000 / replacement approved; not activated. |
| Table B open sites (Ultra, Fan Fest, Calle Ocho, F1 weekend totals, Art Basel, boat shows, Youth Fair, etc.) | Point events; not hand-listed in this pass (gaps follow-up pending). |
| Inter Miami II | No separate team record; plays A06. |
| Concert Ticketmaster ids | Not verified; no `ticketmasterIds` on concert rooms. |

## Teams and feeds (Oct 13, 2026)

| Team | Source | Result |
|---|---|---|
| Marlins | MLB 146 → venue 4169 | 405 home games with announced counts |
| Dolphins | ESPN 15 | 42 games |
| Heat | ESPN 14 | 192 games |
| Panthers | ESPN 26 | 207 games |
| Inter Miami CF | ESPN 20232 | 82 games (Fort Lauderdale years in A06; Nu Stadium from 2026 schedule as it appears) |
| Hurricanes FB / MBB | ESPN 2390 | 30 / 69 games |
| FIU FB / MBB | ESPN 2229 | 24 / 63 games |
| Miami FC | ESPN 18159 | 54 games |
| Fort Lauderdale United | ESPN 131449 | 18 games |

## Collected data

- **Attendance:** `data/attendance/miami/` (10 JSON files).
- **Expected draws:** 141 `EXPECTED_DRAWS` rows, 147 `OPPONENT_RATIOS`, 1 `SEASON_LEVELS`, 22 `POSTSEASON_DRAWS` — Miami-only additions; non-Miami arrays in `expectedDrawIndex.ts` left byte-identical to `main` (full calibrate run merged by metro).
- **Weather / archive / results:** `data/weather/miami/`, `data/schedule-archive/miami/2026-10-13.json` (12 events), `data/results/miami/`.
- **Venue access:** `node scripts/venue-access.mjs --metro=miami` — 13 rooms ≥5,000 measured; none flagged strained.

## Judgment calls and open questions

- **Display name** `Miami` (not “Miami–South Florida”) in `metros.ts`; research uses both.
- **FPL Solar Amphitheater** included at 8,500 with friction; research flagged manual classification.
- **Homestead** capacity uses 46,000 reported mid-range; not a sourced single official figure.
- **Inter Miami** MLS home split: feed still lists Chase Stadium for 2025; 2026 Nu Stadium mapping depends on ESPN venue strings — re-check each season.
- **Hard Rock Stadium** concert configuration capacity left unknown (research).
- **Nu Stadium / garage** capacity conflicts (3,725 vs 4,900 stalls) and **HRS parking** counts unresolved in research.
- **Ticketmaster venue ids:** none verified; concerts may be thin until ids are added.
- **Table B** festivals, World Cup fan fest, F1 three-day totals, Pegasus, Gulfstream — not hand-listed; `miami-gaps-followup-prompt.md` answers pending.
- **Monthly heat baseline** (`MONTHLY_NORMAL_F`) not filled; universal 85°F floor applies.
- **Broad-team overlap** flags not added (no audience poll in research).
