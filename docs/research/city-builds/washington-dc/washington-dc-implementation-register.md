# Washington, DC implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources (unchanged): `washington-dc-city-type-answer.md` and `washington-dc-venue-table-answer.md`. Gaps follow-up (`washington-dc-gaps-followup-prompt.md`) was not run; those answers will patch in later.

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`): city type from research (`transit`), not a guess; estimated car shares wired per Oct 12 C04 (comments label them estimated).
- Never invent a capacity. Echostage, Kennedy Center rooms, DAR Constitution Hall, 9:30 Club and several leads stay out until sourced.
- Venue ids unique app-wide (`umd-xfinity-center` vs Boston `xfinity-center`).
- `expectedDrawIndex.ts`: Washington, DC rows only; non-DC `EXPECTED_DRAWS`, `SEASON_LEVELS`, and `OPPONENT_RATIOS` unchanged after calibrate; `POSTSEASON_DRAWS` non-DC rows restored byte-identical to pre-calibrate main (calibrate would have shifted other metros' playoff pool).
- No separate per-city opponents file. `package-lock.json`, `MEMORY_HANDOFF.md`, and `docs/product/product-decisions.md` not edited.

## Boundary and city type

**Core:** District of Columbia; Prince George's, Montgomery, Arlington, Alexandria, Fairfax and Loudoun. **Edge included:** Prince William (Jiffy Lube Live), Howard (Merriweather Post Pavilion — assigned to DC only so Baltimore does not double-count). **Edge excluded:** Navy–Marine Corps Memorial Stadium (Annapolis), Baltimore Mystics games, RFK as a room (demolition in progress), proposed RFK Commanders stadium (2030).

**City type:** `transit` (research recommendation, low–moderate confidence). **Contrary case:** capacity-weighted core with Northwest Stadium ≈0.64 (`hub` alternative noted in research §7.4).

**Map:** code `DC`, center `[-77.02, 38.90]`, zoom `10.5`, `America/New_York`.

## Active fixed rooms (20)

| App ID | Research | Capacities stored | Car share (type) |
|---|---|---|---|
| `northwest-stadium` | A1 | 64,000 football (reported; 62k/65k conflicts in note) | 0.85 estimated |
| `secu-stadium` | A2 | 51,802 → 46,185 football (dated 2025) | transit fallback |
| `nationals-park` | A3 | 41,339 baseball | 0.50 estimated |
| `jiffy-lube-live` | A5 | 25,262 concert | 0.97 estimated |
| `capital-one-arena` | A6 | 20,356 basketball, 18,573 hockey | 0.35 estimated |
| `audi-field` | A7 | 20,000 soccer | 0.45 estimated |
| `merriweather-post-pavilion` | A8 | 19,319 concert | 0.95 estimated |
| `umd-xfinity-center` | A9 | 17,950 basketball | transit fallback |
| `eaglebank-arena` | A10 | 10,000 basketball | 0.88 estimated |
| `prince-georges-stadium` | A11 | 10,000 baseball seats | transit fallback |
| `greene-stadium` | A12 | 7,086 football (10,000 conflict in note) | transit fallback |
| `wolf-trap-filene-center` | A13 | 7,028 concert | 0.90 estimated |
| `the-anthem-dc` | A14 | 6,000 concert GA max | transit fallback |
| `charles-e-smith-center` | A15 | 5,000 basketball | transit fallback |
| `segra-field` | A16 | 5,000 soccer (reported only) | transit fallback |
| `carefirst-arena` | A17 | 4,200 basketball — pre-list, muted | transit fallback |
| `fillmore-silver-spring` | A23 | 2,000 concert | — |
| `music-center-strathmore` | A24 | 1,976 concert | — |
| `lincoln-theatre-dc` | A25 | 1,225 concert | — |
| `mgm-national-harbor-theater` | A20 | 3,000 concert | — |

Coordinates: OpenStreetMap Nominatim (Oct 13), except EagleBank (GMU campus node), Wolf Trap (NPS site search), MGM (resort geocode).

## Left out (research)

- **Closed / uncertain:** Kennedy Center Concert Hall, Opera House, Eisenhower (board closure Sept 2026).
- **Capacity unknown or threshold conflict:** Echostage (~3k vs ~6k), The Anthem seated layouts, Northwest Stadium concert configs, many Table B Mall/fair events.
- **Not a room:** RFK Memorial Stadium; National Mall / Freedom 250 street events; proposed RFK NFL stadium.
- **Other metros:** Navy–Annapolis; Mystics in Baltimore; Spirit historical Segra only in research, not duplicated.
- **No feed / team only:** DC Defenders (UFL), DC Power, Georgetown football, Old Glory DC after 2023.

## Feeds (Oct 13, 2026)

| Team | Source | ESPN / MLB id | Notes |
|---|---|---|---|
| Nationals | MLB | 120, venue 3309 | 415 attendance games collected |
| Chesapeake Baysox | MLB | 418, venue 2832 | 276 games |
| Commanders | ESPN | NFL 28 | 43 games; home = Northwest Stadium |
| Capitals, Wizards, Mystics | ESPN | 23, 27, 16 | Capital One Arena |
| D.C. United, Spirit | ESPN | 193, NWSL 15365 | Audi Field |
| Go-Go, Loudoun United | ESPN | G 4, USL 19410 | CareFirst / Segra |
| Maryland, GMU, GW, Georgetown, Howard | ESPN | 120, 2244, 45, 46, 47 | Venue map includes metro-specific Xfinity |

**Ticketmaster venue ids:** not verified (no API key in this environment). Concert listings depend on future `ticketmaster-venues.mjs` pass.

## Collected data and checks

- Attendance: `data/attendance/washington-dc/` (16 team files).
- Expected draws: +232 `EXPECTED_DRAWS`, +208 `OPPONENT_RATIOS`, +2 `SEASON_LEVELS`, +22 `POSTSEASON_DRAWS` (DC only).
- Schedule archive: `data/schedule-archive/washington-dc/2026-10-13.json` (11 ESPN events, 14-day window).
- Weather: `data/weather/washington-dc/` + index rows.
- Venue access: `node scripts/venue-access.mjs --metro=washington-dc` — Wolf Trap Filene flagged strained (relief 41 m, 1 street).
- **Checks passed:** `npm run build`, `node scripts/city-build-check.mjs`, `node scripts/storage-check.mjs`.

## BACKLOG follow-up (this city)

- Ticketmaster Discovery ids for every concert room (Capital One, EagleBank, Jiffy Lube, Merriweather, Anthem, Fillmore, Strathmore, MGM, Lincoln, etc.).
- Merriweather vs Baltimore: confirm single assignment on Kylie's review form.
- Echostage official capacity before listing.
- Post-renovation Capital One Arena capacities (2027–28).
- Gaps follow-up answer when saved (`washington-dc-gaps-followup-answer.md`).
- Howard football: only 4 home games with counts in collect pass — thin baseline.
- Table B seeded events (Marine Corps Marathon Oct 25 2026, 2027 NFL Draft) not hand-listed in this pass.

## Open questions for Kylie

1. Display name `Washington, DC` vs `Washington` / `DC` in the city switcher.
2. Merriweather and Jiffy Lube edge inclusion — keep both?
3. Greene Stadium: store 7,086 seats or 10,000 football configuration for friction sizing?
4. Northwest Stadium capacity figure for sellable NFL (64,000 vs 62,000).
5. City type `transit` vs `hub` given suburban pull of Landover and amphitheatres.
6. Mystics split home (CareFirst vs Capital One) — feed maps CareFirst; larger games need room-per-game matching when Ticketmaster arrives.
