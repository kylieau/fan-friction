# Cleveland implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research answers unchanged (`cleveland-city-type-answer.md`, `cleveland-venue-table-answer.md`, both Oct 12, 2026). **Not a Kylie city-build approval** — follows the Milwaukee / Philadelphia / Boston / Tampa pattern pending her OK.

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`). City type **`hub`** from the city-type answer (capacity-weighted core ~0.89 car-involved; downtown clusters share approaches).
- **Car shares (Oct 12, C04):** estimated person-shares from the city-type answer are wired on the venues that answer numbered; none is measured. Rooms without a row-specific estimate use the hub 0.85 fallback.
- Never invent a capacity. ForeFront Field stays at the sourced 5,000 **only with berm** figure; no current official total was found.
- Venue ids are unique app-wide (`huntington-bank-field` is lakefront Cleveland; Minnesota uses `huntington-bank-stadium`).
- Convention halls, future Brook Park dome (F01), and Table B open sites are not venue rows. Multi-day fair/air-show totals are not seeded.
- `expectedDrawIndex.ts`: Cleveland rows only via `attendance-calibrate.mjs` after new `data/attendance/cleveland/*.json` files. No separate opponents file. Full calibrate was run; other metros’ attendance files were untouched.
- `package-lock.json`, `MEMORY_HANDOFF.md`, `BACKLOG.md`, and `docs/product/product-decisions.md` were not edited.

## Boundary and map

Five-county core (Cuyahoga, Geauga, Lake, Lorain, Medina) per the venue answer; Blossom Music Center is an **edge** room (Summit County / Akron MSA) with scope noted in research. Metro code **CLE**, display name **Cleveland**, time zone `America/New_York`, center `[-81.69, 41.499]`, zoom `11.2`. Akron, Canton and Kent venues stay out.

## Active fixed rooms (16)

| App ID | Research row | What was stored | Source / limits |
|---|---|---|---|
| `huntington-bank-field` | C01 | Football 67,431 reported. carShare **0.90** estimated. | Rename chain FirstEnergy → Browns Stadium → Huntington. Lakefront through 2028 NFL season. |
| `progressive-field` | C02 | Baseball 33,530 official (2026). carShare **0.87** estimated. | Conflicts with 34,820 in older sources — dated 2026 figure stored. |
| `rocket-arena` | C03/C03b | Basketball 19,432; hockey 18,926; concert ~19,000 reported. carShare **0.86** estimated (Cavs row; Monsters/concerts 0.87 not split per room). | Quicken Loans / Rocket Mortgage rename chain. |
| `wolstein-center` | C04/C04b | Full arena 13,610 concert; basketball 8,500 from 2027. carShare **0.88** estimated (public events); 0.85 for CSU basketball not split. | Last public special event 2026-11-07; athletics-only 2027-01-01. |
| `public-hall-cleveland` | C05 | ~10,000 concert; 5,100 basketball (Charge). carShare **0.88** estimated. | Charge home since Dec 2024. |
| `public-auditorium-music-hall` | C06 | 2,800 concert reported. No carShare override. | Sub-room; muted below friction. |
| `classic-auto-group-park` | C07 | 7,273 baseball (MLB.com guide). carShare **0.95** estimated. | Conflicts with 6,157 / 6,500. |
| `forefront-field` | C08 | 5,000 baseball (2009 berm-inclusive plan). carShare **0.96** estimated. | Fixed seats alone would be 3,500. |
| `jacobs-pavilion` | C09 | 4,100 seated; 5,000 with GA pit. carShare **0.90** estimated. | Friction uses larger concert configuration. |
| `keybank-state-theatre` | C10 | ~3,098 concert reported. carShare **0.90** estimated. | |
| `connor-palace` | C11 | 2,714 concert reported. carShare **0.90** estimated. | |
| `agora-theatre-cleveland` | C12 | 2,000 official. No carShare override. | Ballroom below threshold excluded. |
| `severance-mandel-hall` | C13 | 2,000 official. No carShare override. | |
| `house-of-blues-cleveland` | C14 | 1,240 reported. No carShare override. | |
| `mimi-ohio-theatre` | C15 | 997 official. No carShare override. | ~1,000 pre-list line. |
| `blossom-music-center` | E04 | Pavilion 6,051 reported (edge). carShare **0.97** estimated. | Lawn/total 19k–23k not summed. **Hard access** flagged by `venue-access.mjs`. |

Coordinates: OpenStreetMap Nominatim (Oct 13, 2026), one request per second. Music Hall shares Public Hall’s point.

## Left out

| Research item | Why |
|---|---|
| F01 Brook Park Huntington Bank Field (2029+) | Not open through 2028. |
| Globe Iron, House of Blues conflicts, Allen Theatre, smaller Playhouse rooms | Below ~1,000 or not verified for pre-list. |
| MGM Northfield Park Center Stage (E08) | Capacity only from resale aggregators — not stored. |
| Table B: Air Show, county fairs, St. Patrick's parade, marathon, etc. | No sourced **daily** simultaneous crowd; multi-day totals not divided. |
| P01 future stadium car share | Future venue. |
| Akron / Canton edge tables (E01–E03, E05–E07) | Separate MSAs. |

## Teams and feeds (checked Oct 13, 2026)

| Team | Source | Result |
|---|---|---|
| Browns | ESPN NFL 5 | 43 home games at Huntington Bank Field |
| Guardians | MLB 114, venue 5 | 429 home games at Progressive Field |
| Cavaliers | ESPN NBA 5 | 238 home games at Rocket Arena |
| Monsters | HockeyTech AHL **373** (not 390) | 125 home games at Rocket Arena |
| Lake County Captains | MLB 437, sport **13** High-A, venue 2759 | 327 home games at Classic Auto Group Park |
| Cleveland State MBB / WBB | ESPN 325 | 83 / 81 games at Wolstein Center |
| Charge, Crushers, Crunch | Team records only | No verified schedule adapter; Charge at Public Hall; Crushers at ForeFront; Crunch venue after Nov 2026 unknown |

Ticketmaster: **no API key** in this environment. No `ticketmasterIds` were invented. Sports-from-Ticketmaster sweep includes `public-hall-cleveland`, `wolstein-center`, `forefront-field`.

## Collected data and checks (Oct 13, 2026)

- `node scripts/attendance-calibrate.mjs` — Cleveland draw rows merged into `expectedDrawIndex.ts` (full file rewrite; other metros’ attendance inputs unchanged).
- `node scripts/weather-fetch.mjs --metro=cleveland` — 15 day files + index rows.
- `node scripts/archive-schedule.mjs --metro=cleveland` — 8 events Oct 13–27 in `data/schedule-archive/cleveland/2026-10-13.json`.
- `node scripts/results-fetch.mjs --metro=cleveland` — 2 finals written.
- `node scripts/venue-access.mjs --metro=cleveland` — Blossom flagged strained; other Cleveland rows measured.
- **`npm run build`** — passed.
- **`npm run city-build-check`** — passed (including Cleveland).
- **`node scripts/storage-check.mjs`** — passed.
- **`package-lock.json`** — unchanged vs `main`.

## Open questions for Kylie’s next review

1. **Hub vs sprawl:** City-type answer recommends `hub`; contrary case is heavy suburban driving (0.95–0.97). Spill today matches `sprawl` at 0.85 — label only?
2. **Single carShare per room:** Rocket Arena uses Cavs 0.86; Monsters/concerts 0.87 not split. Wolstein uses 0.88 though CSU basketball estimate is 0.85.
3. **Jacobs Pavilion friction:** 4,100 seated vs 5,000 GA — which configuration should gate friction?
4. **ForeFront Field:** Keep 5,000 berm-inclusive plan, or leave capacity unknown until an official figure?
5. **Progressive Field:** 33,530 (2026 MLB) vs 34,820 — confirm display year break.
6. **Public Hall Charge:** 5,100 vs ~10,000 full hall — two capacity rows kept; which applies to a given listing?
7. **Wolstein timeline:** Athletics-only from 2027; Crunch home after Nov 2026 unverified.
8. **Blossom edge:** Keep in Cleveland metro with 6,051 pavilion, or move to a future Akron build?
9. **Ticketmaster venue ids:** None verified — catch-up pass for Agora, Severance, Playhouse rooms, Jacobs, Blossom, HOB, etc.
10. **Table B hand-listing:** Air Show daily count unknown; Geauga fair has daily gates in research but was not auto-seeded; Cuyahoga fair dates conflict (Aug 5–10 vs Aug 11–16).
11. **Brook Park stadium (2029):** Same name as lakefront stadium — matching rule already documented in research.
12. **Captains sport id:** High-A is MLB sportId **13** (not 14) — wired after first collect returned zero games.
