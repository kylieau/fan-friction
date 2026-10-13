# Ottawa–Gatineau implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources unchanged: `ottawa-gatineau-city-type-answer.md` and `ottawa-gatineau-venue-table-answer.md`. Follows the Milwaukee / Philadelphia / Boston / Tampa city-build pattern. **Not a Kylie city-build approval** (see next-twenty plan); this pass is the explicit city-build request.

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`): metro record, `hub` city type from research, teams with feed ids checked against live schedules, venues with Nominatim coordinates, attendance pull, weather, archive, results, hard-access measure.
- Never invent a capacity. Cohere Centre whole-building figure, Rogers Centre Ottawa convention hall, and LeBreton arena proposal are not stored as room capacities.
- **Car shares (Kylie, Oct 12, C04):** sourced **estimates** from the city-type answer are wired on venues as `carShare`; none are measured person-level mode splits.
- `expectedDrawIndex.ts`: Ottawa–Gatineau rows only were added. Non–Ottawa rows in `EXPECTED_DRAWS`, `SEASON_LEVELS`, and `OPPONENT_RATIOS` match `main` byte-for-byte after calibration. The shared `POSTSEASON_DRAWS` league pool was **not** rewritten; only two Ottawa Senators bands were appended.
- No broad-team flag. No `MONTHLY_NORMAL_F` entry.
- `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, and `package-lock.json` were not edited.

## City type, name, and boundary

| Item | What was done | Source |
|---|---|---|
| City type | `hub` in `CITY_TYPE` | City-type End 1 |
| Display name | `Ottawa–Gatineau` | Research boundary |
| Short code | `OTT` | Judgment (airport is YOW; not locked) |
| Time zone | `America/Toronto` | Venue-table header |
| Map frame | Center `[-75.72, 45.42]`, zoom 10.5 | Venue spread |
| Boundary | City of Ottawa + Ville de Gatineau | Both answers §1 / venue-table §5 |

## Active fixed rooms (10)

| App ID | Research ID | Selected capacities | carShare (type) | Evidence / limits |
|---|---|---|---|---|
| `td-place-stadium` | A1 | 24,000 football & soccer | 0.52 estimated | Redblacks 2014 measured bus+shuttle aggregate. North-stand rebuild after 2027 not modeled. |
| `arena-at-td-place` | A5 | 8,585 hockey, basketball, concert | 0.60 estimated | Full bowl only; floor 1,850–2,000 muted. TM venue **401513**. Same coordinates as stadium (1015 Bank). |
| `canadian-tire-centre` | A2 | 19,153 hockey; 16,888 concert (360°) | 0.92 estimated | Official rental sheet for hockey; concert configs in note. **No Ticketmaster venue id verified** in this pass. |
| `ottawa-stadium` | A3 | 10,278 baseball | 0.85 estimated (fallback) | Typical Titans crowds far below seats; friction by room. |
| `centre-slush-puppie` | A8 | 4,000 hockey | 0.85 estimated (fallback) | Muted (&lt;5,000). Gatineau. |
| `taag-park` | A9 | 3,500 football | 0.85 fallback | Muted. Campus point. |
| `southam-hall` | A10 | 2,065 concert | 0.85 fallback | Muted. 1,975 conflict in note. |
| `hard-rock-live-ottawa` | A11 | 1,900 concert | 0.93 estimated | Muted. Rural-edge site. |
| `ravens-nest` | A12 | 1,500 basketball | 0.85 fallback | Muted. Undated capacity. |
| `theatre-casino-lac-leamy` | A13 | 1,068 concert max | 0.85 fallback | Pre-list; configurations down to 650. |

## Left out (research)

| Item | Why |
|---|---|
| A4 Cohere Centre | No configuration-specific concert/sport capacity |
| A6 Lansdowne Event Centre | Scheduled ~Jul 2028; not open in Oct 2026 |
| A7 Rogers Centre Ottawa hall | Convention theatre only; not a standing concert room |
| A14 LeBreton arena | Proposal; no opening date |
| Table B (Bluesfest, Canada Day, Winterlude, FMG, Race Weekend, etc.) | Open sites / multi-day totals; not venue rows. Gaps follow-up prompts exist; not waited on. |
| Meridian, Bronson, Algonquin Commons, uOttawa rooms, NAC smaller stages | Below threshold or not verified in research pass |
| Ottawa Black Bears (NLL) | Discontinued Sep 2026 |

## Teams and feeds (checked Oct 13, 2026)

| Team | Source | Result |
|---|---|---|
| Ottawa Senators | ESPN NHL 14 | 178 home games with announced attendance (2023–2027 partial). Home building: Canadian Tire Centre. |
| Ottawa Redblacks | ESPN CFL 87 | **0 games** returned (same empty CFL feed as Argonauts / Alouettes). Row stays wired. |
| Ottawa Charge | HockeyTech PWHL 5 | 47 home games with attendance; TD Place and Canadian Tire Centre mapped. Primary home CTC from 2026-27 per PWHL release. |
| Atlético Ottawa, 67's, BlackJacks, Titans, Olympiques, Rapid FC, Carleton programs | Team records only | No ESPN/HockeyTech/MLB adapter verified |

Ticketmaster sports sweep allowlist: `ottawa-stadium`, `centre-slush-puppie`, `hard-rock-live-ottawa`, `arena-at-td-place`, `theatre-casino-lac-leamy`. **No Ticketmaster API key** in this environment; Canadian Tire Centre TM id not verified.

## Collected data

- **Expected draws:** Senators medians at Canadian Tire Centre; Charge medians split between `arena-at-td-place` and `canadian-tire-centre` by season. Redblacks: no attendance file rows.
- **Archive:** `data/schedule-archive/ottawa-gatineau/2026-10-13.json` — 5 events (ESPN), Oct 13–27.
- **Results:** one Senators final on 2026-10-10 with announced attendance.
- **Weather:** 15 day files under `data/weather/ottawa-gatineau/`; index rows appended for this metro only.
- **Hard access:** `node scripts/venue-access.mjs --metro=ottawa-gatineau` — five friction rooms measured; none flagged under the relief/streets rule.

## Open questions for Kylie (review form)

1. **Short code `OTT`** vs `YOW` or `OG` for the city switcher.
2. **Canadian Tire Centre** hockey capacity: 19,153 official vs 20,500 reported vs Ticketmaster 18,655 — stored 19,153 hockey only.
3. **TD Place Stadium car share:** 0.52 (Redblacks measured) vs 0.55 (other events) — single venue value 0.52 chosen.
4. **Ticketmaster:** only Arena at TD Place id **401513** stored; CTC, TD Place Stadium, Hard Rock, Slush Puppie, Lac-Leamy ids not verified.
5. **CFL feed:** Redblacks wired but schedule/attendance empty on ESPN Oct 13, 2026.
6. **Charge home split:** historical TD Place vs future CTC — both mapped; 2026-27 schedule not fully on feed yet.
7. **Ottawa Stadium friction:** room is 5,000+ but typical Titans crowds ~1,300 — flag only, no retune.
8. **Lansdowne Event Centre:** recheck seat count and activation when it opens (~Jul 2028).
9. **LeBreton Senators arena:** do not list until a scheduled opening exists.
10. **Table B crowds:** Bluesfest 290,000 (Wikipedia, needs organizer source), Canada Day / Winterlude / FMG counts — hand records when verified.
11. **Bilingual aliases** and old names (EY Centre, RCGT Park) in live listings — feed rename lag.
12. **Gaps follow-up** (`ottawa-gatineau-gaps-followup-prompt.md`) not run; patch when answers land.
