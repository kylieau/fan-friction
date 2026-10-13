# Detroit implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources, unchanged: `detroit-city-type-answer.md` and `detroit-venue-table-answer.md` (both Oct 12, 2026). This is a build from those answers. It is not a Kylie city-build approval.

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`). City type **`sprawl`** from the city-type answer. Venue `carShare` overrides only where that answer gave an estimate.
- Never invent capacity. AlumniFi Field (under construction, spring 2028 target) is excluded. Freedom Hill stored at **7,200** with 7,300 conflict noted. Pine Knob capacity conflict preserved in the note.
- `detroit` added to `COVERED_METRO_IDS`; metro code `DET`, timezone `America/Detroit`, center frames District Detroit.
- Comerica Park display rename **Fifth Third Park** from `2027-01-01` in venue names only.
- Aretha Franklin Amphitheatre: Ticketmaster lists venue 65540; `KovZp` discovery id **not verified** — no `ticketmasterIds` on the row.
- Wayne State Warriors skipped (no verified ESPN id). PWHL Detroit is a team record only (no feed).
- `MEMORY_HANDOFF.md`, `BACKLOG.md`, `docs/product/product-decisions.md`, and `package-lock.json` were not edited.

## Boundary and city type

Six-county Detroit–Warren–Dearborn MSA is the core. Ann Arbor (Michigan Stadium, Crisler, Yost) and Windsor (WFCU Centre, Colosseum at Caesars Windsor) are edge tiers in the register, not separate metros. City type **`sprawl`**: no measured event mode split; hub-like District Detroit cluster affects zone naming and spill label only (same 0.85 fallback as hub today).

Zones (gridlock): **District Detroit** — Ford Field, Comerica Park, Little Caesars Arena, Fox Theatre. **Michigan campus** — Michigan Stadium, Crisler Center, Yost Ice Arena.

## Active rooms (29)

| App ID | Research | Car share | Notes |
|---|---|---|---|
| `michigan-stadium` | A1 | 0.80 | Ann Arbor edge |
| `ford-field` | A2 | 0.88 | |
| `comerica-park` | A3 | 0.88 | Fifth Third Park rename 2027 |
| `little-caesars-arena` | A4 | 0.88 | |
| `pine-knob-music-theatre` | A5 | 0.97 | Capacity conflict in note |
| `crisler-center` | A7 | fallback | Ann Arbor |
| `calihan-hall` | A8 | fallback | 8,295 vs 7,917 conflict |
| `keyworth-stadium` | A9 | 0.78 | DCFC through 2027; Ticketmaster sports sweep |
| `meadow-brook-amphitheatre` | A10 | 0.95 | |
| `michigan-lottery-amphitheatre` | A11 | 0.96 | 7,200 stored |
| `yost-ice-arena` | A12 | 0.80 | Ann Arbor |
| `wfcu-centre` | A13 | fallback | Windsor edge |
| `aretha-franklin-amphitheatre` | A14 | fallback | |
| `fox-theatre-detroit` | A15 | 0.88 | |
| `colosseum-caesars-windsor` | A16 | fallback | Windsor; at 5k line |
| `masonic-temple-theatre` | A17 | fallback | Theatre vs building conflict |
| `wayne-state-fieldhouse` | A18 | fallback | Muted; Cruise home |
| `fillmore-detroit` | — | fallback | Crain's 2017 figure |
| `detroit-opera-house` | — | fallback | |
| `fisher-theatre` | — | fallback | |
| `orchestra-hall-detroit` | — | fallback | |
| `sound-board-motorcity` | — | fallback | |
| `music-hall-center` | — | fallback | |
| `harpos-concert-theatre` | — | fallback | |
| `majestic-theatre-detroit` | — | fallback | |
| `saint-andrews-hall` | — | fallback | |
| `royal-oak-music-theatre` | — | fallback | |
| `macomb-center-performing-arts` | — | fallback | |
| `the-crofoot` | — | fallback | |

## Teams (12 records)

| Team | Feed |
|---|---|
| Lions | ESPN NFL 8 |
| Tigers | MLB 116 / venue 2394 |
| Red Wings | ESPN NHL 5 |
| Pistons | ESPN NBA 8 |
| Michigan football / MBB / WBB / men's hockey | ESPN 130 |
| Detroit Mercy MBB | ESPN 2174 |
| Detroit City FC | ESPN USL 19179 |
| Motor City Cruise | ESPN G League 15 |
| PWHL Detroit | No feed |

## Left out

| Item | Why |
|---|---|
| AlumniFi Field | Not built; opening target 2028 |
| EMU, Hill Auditorium, Michigan Theater | Edge; not verified this pass |
| Michigan Panthers UFL | Left Detroit 2026 |
| Table B (Grand Prix, Movement, Dream Cruise, etc.) | Open sites / multi-day totals |
| Huntington Place / convention halls | Not fixed spectator rooms |

## Open questions for Kylie

1. Keep **sprawl** vs record **hub** for District Detroit (spill is identical to hub today).
2. Keep estimated **carShare** overrides or drop to 0.85 fallback until measured splits exist?
3. **Comerica / Fifth Third**: is 41,083 the right baseball figure; when to show the new name in UI copy?
4. **Pine Knob**: which capacity (15,000 / 15,040 / 15,300) should drive friction if one must win?
5. **Freedom Hill**: 7,200 vs 7,300?
6. **Keyworth**: 7,933 vs ~7,000?
7. **Calihan Hall**: 8,295 vs 7,917?
8. **Fox Theatre**: 5,048 fixed vs 5,174 with pit?
9. **Colosseum Windsor** and **WFCU** hybrid setups below 5,000 — keep in metro?
10. **Aretha**: verify Ticketmaster `KovZp` id for venue 65540?
11. **PWHL Detroit** 2026–27 LCA schedule — wire when league feed exists?
12. Ann Arbor and Windsor edge labels on the map vs one “Detroit” frame?

## Checks

Filled in after `npm run build`, `npm run city-build-check`, attendance collect/calibrate, venue-access, weather, archive, results, and `node scripts/storage-check.mjs` on Oct 13, 2026.
