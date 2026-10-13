# Indianapolis implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources (unchanged): `indianapolis-city-type-answer.md` and `indianapolis-venue-table-answer.md` (Oct 12, 2026). Core scope: Marion County (including Speedway), plus Hamilton and Hendricks counties per the venue-table answer. City type **`sprawl`**. Estimated `carShare` values are wired on venues (city-build prompt C04, Oct 12); none is measured. **Not a Kylie city-build approval** the way Milwaukee was (K14).

## Rules that governed the build

- `docs/reference/new-city-checklist.md` and the city-build prompt (Oct 13, 2026).
- Never invent a capacity; ranges and resale-only figures stay out or in notes only.
- `src/data/expectedDrawIndex.ts`: **Indianapolis rows only** appended; every other metro’s draw, season, opponent and **`POSTSEASON_DRAWS` blocks are byte-identical** to `main` before this branch (verified by script after `attendance-calibrate.mjs`).
- No separate opponents file; no formula constant changes; no ratings tuned to hand figures.
- `package-lock.json`, `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, and `BACKLOG.md` not edited (parallel city builds).
- **Car shares:** prompt C04 (Oct 12) requires wiring sourced **estimates** and treating measured splits as measured. That overrides the older Milwaukee/Tampa note of leaving estimates unwired; Philadelphia and Columbus already wired estimates. Every wired value here is labeled estimated in the city-type answer.
- Bloomington, West Lafayette, Muncie, and Anderson edge sites stay out of the metro (venue-table §1).

## Active fixed rooms (21)

| App ID | Research | Capacities stored | carShare (estimated) | Notes |
|---|---|---|---|---|
| `indianapolis-motor-speedway` | V01 | 275,000 racing (AP estimate; conflicts preserved) | 0.93 | Open-site race days are Table B, not double-counted with the room. |
| `lucas-oil-stadium` | V02 | 67,000 football official; 70,000 basketball/concert expandable | 0.85 | Final Four visitor-heavy 0.75 not a separate default. Retractable roof → `covered`. |
| `lucas-oil-indianapolis-raceway-park` | V03 | 30,000 racing reported | 0.93 | Brownsburg; resale “Indianapolis” mismatch noted. |
| `ruoff-music-center` | V04 | 6,147 pavilion + 24,790 total concert | 0.96 | Lawn included in total row (same rule as Ruoff/Victory/Everwise). |
| `gainbridge-fieldhouse` | V05 | 17,274 basketball; 18,274 concert; 11,651 hockey | 0.85 | 17,923 / 20,000 conflicts in note only. |
| `victory-field` | V06 | 12,230 baseball seats | 0.85 | Lawn not added to seat row. MLB venue 2858. |
| `carroll-stadium` | V07 | 12,111 soccer official | 0.85 | Fallback from city-type IND-14 (capacity verified; split unknown). |
| `hinkle-fieldhouse` | V08 | 9,100 basketball | 0.80 | |
| `fishers-event-center` | V09 | 7,500 | 0.95 | Opened 2024. |
| `corteva-coliseum` | V10 | 6,800 basketball | 0.92 | Fair-admission coliseum events not double-counted with State Fair (Table B). |
| `everwise-amphitheater` | V11 | 2,500 seats; 6,000 total with lawn | 0.85 | Friction uses total licensed 6,000 (same as Ruoff). |
| `sellick-bowl` | V12 | 5,647 football | — | OSM did not separate from Hinkle; map point approximate east of Hinkle. |
| `kiesel-field-key-stadium` | V13 | 5,500 football official | — | Threshold room; no city-type row. |
| `riverview-health-arena` | V14 | 3,400 | — | Muted (&lt;5,000). Renamed Mar 2026. |
| `james-t-morris-arena` | V15 | 4,500 official | — | Muted; opening fall 2026 — re-check. |
| `murat-theatre` | V16 | 2,500 | — | Same building as Egyptian Room. |
| `clowes-memorial-hall` | V17 | 2,148 | — | |
| `egyptian-room-old-national-centre` | V18 | 2,000 concert | — | Standing layout. |
| `hilbert-circle-theatre` | V19 | 1,660 | — | |
| `palladium-carmel` | V20 | 1,600 reported | — | |
| `iu-indy-jungle` | V21 | 1,215 basketball | — | Basketball tenants through 2025–26 per research. |

Coordinates: OpenStreetMap Nominatim by address or name Oct 13, 2026, except `sellick-bowl` (approximate east of Hinkle) and `james-t-morris-arena` (campus block near Carroll, building not open).

## Left out

| Item | Treatment |
|---|---|
| Edge catalog E01–E04 (IU, Purdue football/basketball) | Separate markets; not rows. |
| Grand Park training camp, Harrah’s / Hoosier Park, Muncie | Table B or unresearched; no row. |
| Indiana Convention Center, State Fairgrounds as a room, IMS infield/Snake Pit alone | Table B open sites; **not hand-listed** in this pass (same as Tampa open sites). |
| Indy 500, State Fair daily admissions, Gen Con, Final Four Fan Fest, 500 Festival Parade, NHRA Nationals crowd | Table B; await gaps follow-up or a later listing pass. |
| `indy-eleven`, `indy-fuel`, `indy-ignite`, `fishers-freight`, `uindy-football` | Team records only; no verified schedule adapter (USL/ECHL/IFL/PVF). |
| IU Indy soccer, Butler volleyball, UIndy other sports | No team record; rooms exist where listed. |
| `overlap.ts` broad-team flag | No poll in research. |
| Monthly heat normals | Universal empty table unchanged. |
| Ticketmaster venue ids | **No API key** in this environment; concert rooms unverified — see BACKLOG follow-up below. |

## Feeds and collected data (Oct 13, 2026)

| Source | Wired | Attendance file |
|---|---|---|
| MLB | Indians 484, Triple-A sport 11, venue 2858 | 300 games with announced counts |
| ESPN NFL | Colts 11 | 0 games with attendance field (schedules pull; counts empty) |
| ESPN NBA | Pacers 11 | 0 with attendance |
| ESPN WNBA | Fever 5 | 0 with attendance |
| ESPN CFB / MBB / WBB | Butler 2086; IU Indy 85 | 0 except 1 IU Indy MBB game without attendance |
| HockeyTech ECHL | — | Indy Fuel not on HockeyTech (research: no client key) |

**Expected draws:** 30 `EXPECTED_DRAWS` rows and 7 `OPPONENT_RATIOS` rows for `metroId: indianapolis` (Indians only). No `SEASON_LEVELS` yet. `POSTSEASON_DRAWS` unchanged from `main`.

**Hard access:** `node scripts/venue-access.mjs --metro=indianapolis` — 12 rooms ≥5,000 measured; none met the strained rule (relief ≥40 m and ≤4 named streets within 250 m).

**Archive:** `data/schedule-archive/indianapolis/2026-10-13.json` — 4 events (ESPN only; no Ticketmaster). **Weather:** 15 day files. **Results:** 2 finals Oct 10–13 with attendance lines.

## Checks (Oct 13, 2026)

| Check | Result |
|---|---|
| `npm run build` | Passed |
| `npm run city-build-check` | Passed (including indianapolis) |
| `node scripts/storage-check.mjs` | Passed |
| `package-lock.json` vs `main` | Identical (no diff) |

## BACKLOG follow-up (this city)

- **Ticketmaster venue ids** (C12): verify when a key is available — priority concert rooms: `gainbridge-fieldhouse`, `everwise-amphitheater` (research cites TM venue 41695), `ruoff-music-center`, `murat-theatre`, `old-national-centre` complex. Without ids, nightly archive has no concerts for Indianapolis.
- **ESPN attendance:** Colts, Pacers, Fever, Butler, IU Indy schedules save but **announced attendance is empty** on collected games; expected draws exist only for Indians until counts appear.
- **Table B hand listings:** Indy 500 (~350,000 estimated race day), Indiana State Fair daily admissions, Gen Con multi-day total, Lucas Oil 500 Festival Parade, NHRA U.S. Nationals at IRP — not seeded; gaps follow-up prompt saved, answer not yet run.
- **James T. Morris Arena:** re-check opening by 2026-11-30; move IU Indy basketball when live.
- **Sellick Bowl map point:** replace with a gym-separated OSM point if one appears.
- **Gaps follow-up:** run `indianapolis-gaps-followup-prompt.md` when ready; patch without waiting was per build instructions.

## Judgment calls and open questions for Kylie

1. **Sprawl vs hub:** research recommends `sprawl`; downtown cluster could argue `hub` for spill only — same 0.85 fallback today.
2. **Lucas Oil football capacity:** 67,000 official vs 63,000 reported — stored 67,000; 67,842 observed Big Ten Championship in note.
3. **IMS grandstand:** 275,000 vs 250,000 vs 257,325 — stored AP 275,000 as estimated racing seats, not a simultaneous crowd figure.
4. **Everwise / Ruoff / Victory lawn:** total-with-lawn row used for friction at 6,000 / 24,790 / (Victory seats only 12,230) — one rule across the three research flags.
5. **Car share on Lucas Oil for expanded basketball (0.75 Final Four):** not wired; football/concert use 0.85.
6. **Colts `teamId`:** existing visitor id `colts` now has `metroId: indianapolis` (same pattern as Braves, Giants, Rangers).
7. **No measured mode split anywhere** — all wired `carShare` values remain estimates per C04.
