# Pittsburgh implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources, unchanged: `pittsburgh-city-type-answer.md` and `pittsburgh-venue-table-answer.md` (both as of Oct 12, 2026). This is a build from those answers. It is not a Kylie city-build approval.

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`). City type **`hub`** from the city-type answer (estimated core sports car-involved shares 0.76–0.86).
- Never invent capacity; conflicts stay in notes with the official or preferred figure stored.
- Table A rooms A01–A30 active rows only (no P1/P2). Thirty venue ids at the end of `src/data/venues.ts`.
- `expectedDrawIndex.ts`: Pittsburgh draw, season-level and opponent rows **prepended** after `attendance-collect` and `attendance-calibrate`. A full calibrate rewrite was reverted for other metros: non-Pittsburgh `EXPECTED_DRAWS`, `SEASON_LEVELS`, and `OPPONENT_RATIOS` rows match `main` byte-for-byte; `POSTSEASON_DRAWS` unchanged.
- `MEMORY_HANDOFF.md`, `BACKLOG.md`, `package-lock.json`, and product decision docs not edited.

## Boundary and city type

Eight-county Pittsburgh MSA (Allegheny core plus Armstrong, Beaver, Butler, Fayette, Lawrence, Washington, Westmoreland). Map frame: center `[-79.99, 40.44]`, zoom `10.5`, code `PIT`, time zone `America/New_York`.

City type **`hub`**. Estimated `carShare` wired per city-type answer: Acrisure (Steelers primary) 0.86, PNC 0.80, Star Lake 0.97, UPMC Events Center 0.92; hub fallback 0.85 on PPG, Petersen, Stage AE outdoor, F.N.B., Heinz Hall, Benedum. Pitt football 0.76 not wired on Acrisure (single room, Steelers config is primary tenant).

## Active rooms (30)

| App ID | Research | Notes |
|---|---|---|
| `acrisure-stadium` | A01 | Heinz Field alias; NFL 68,400; carShare 0.86 |
| `pnc-park` | A02 | 38,747 official guide; carShare 0.80 |
| `pavilion-star-lake` | A03 | 23,000 concert total; carShare 0.97 |
| `ppg-paints-arena` | A04 | Wiki coords; hockey 18,187; carShare 0.85 |
| `petersen-events-center` | A05 | carShare 0.85 |
| `lernerville-speedway` | A06 | ~12,000 reported; on Ticketmaster sports sweep |
| `mihalik-thompson-stadium` | A07 | SRU edge |
| `hepner-bailey-adamson-stadium` | A08 | PennWest football |
| `pennwest-convocation-center` | A09 | 6,000 vs 4,000 conflict in note |
| `reeves-field-geneva` | A10 | Geneva / Beaver Falls |
| `westmoreland-fair-grandstand` | A11 | Expandable seating conflict in note |
| `stage-ae-outdoor` | A12 | carShare 0.85; indoor is separate room |
| `fnb-stadium` | A13 | Highmark alias; carShare 0.85 |
| `fayette-fair-grandstand` | A14 | 2006 grant figure only |
| `eqt-park` | A15 | Wild Things; baseball 3,200 |
| `citizens-live-wylie` | A16 | Opened Sept 2026 |
| `fitzgerald-field-house` | A17 | |
| `upmc-events-center` | A18 | carShare 0.92 |
| `upmc-cooper-fieldhouse` | A19 | |
| `morrow-field-house` | A20 | SRU |
| `joe-walton-stadium` | A21 | RMU football |
| `scottish-rite-cathedral-new-castle` | A22 | Lawrence edge |
| `benedum-center` | A23 | carShare 0.85 |
| `heinz-hall` | A24 | carShare 0.85 |
| `stage-ae-indoor` | A25 | Same coordinates as outdoor |
| `arthur-j-rooney-athletic-field` | A26 | Duquesne football primary |
| `carnegie-music-hall-oakland` | A27 | |
| `roxian-theatre` | A28 | |
| `byham-theater` | A29 | |
| `clearview-arena` | A30 | RMU hockey; approximate island coords |

## Left out

- Table B events (Draft, fairs, marathon, training camp, Pitt Race, convention center halls).
- P1 Victory Heights, P2 F.N.B. expansion.
- College teams without a wired feed (Geneva, Slippery Rock, PennWest Vulcans as team records).
- Wild Things MLB partner-league attendance: schedule collect returned **0** games Oct 13, 2026 (feed lists venue TBD).
- Ticketmaster venue ids not verified (no key in cloud environment).

## Feeds and collected files (Oct 13, 2026)

| Source | Wiring | Result |
|---|---|---|
| MLB | Pirates 134, venue 31 → `pnc-park`; Wild Things 1978 sport 23, `venueId: eqt-park` | `pirates.json` 409 games; `wild-things.json` 0 games |
| ESPN NFL | Steelers 23 | 45 games at Acrisure |
| ESPN NHL | Penguins 16 | 182 games at PPG Paints |
| ESPN CFB/MBB/WBB | Pitt 221, Duquesne 2184, Robert Morris 2523 | Football/basketball files as listed in collect log |
| ESPN USL | Riverhounds 17827 | 67 games; venue **Highmark Stadium** mapped to `fnb-stadium` |
| Ticketmaster | `lernerville-speedway` on sports sweep | Not run (no API key) |

Expected draws: **156** draw rows, **2** season levels (Penguins 2026, Steelers 2026), **130** opponent ratios prepended. `POSTSEASON_DRAWS`: no Pittsburgh rows.

Hard access (`node scripts/venue-access.mjs --metro=pittsburgh`): measured for all 5,000+ rooms; `hepner-bailey-adamson-stadium`, `pennwest-convocation-center`, and `eqt-park` meet strained rule.

Schedule archive `data/schedule-archive/pittsburgh/2026-10-13.json`: 6 ESPN events in window. Weather: 15 day files. Results: 5 finals in recent window.

## Checks (Oct 13, 2026)

- `npm run build` passed.
- `npm run city-build-check` passed.
- `node scripts/storage-check.mjs` passed.

## Open questions for Kylie's next review

1. Keep **hub** and the wired estimated car shares, or drop overrides until a measured split exists?
2. Acrisure: one room for Steelers and Pitt football with Steelers 0.86 only — wire a separate Pitt-football share (0.76) or leave fallback?
3. PNC capacity **38,747** vs **38,362** on older MLB facts page — keep guide figure?
4. PennWest convocation **6,000** vs **4,000** — which setup is sport seating?
5. Westmoreland grandstand **5,600 expandable** vs **5,000** (2012) — friction uses which?
6. F.N.B. Stadium: standing-room crowds above 5,000 seats — treat record attendance as evidence only?
7. Wild Things: MLB feed returns **TBD** venue — alternate attendance source or hand-only draws?
8. Duquesne football: ESPN lists some home games at **Acrisure Stadium** — neutral site or data error?
9. Robert Morris football: ESPN home venues include **Joe Walton** plus several neutral sites — map more names or filter?
10. Clearview Arena coordinates approximate — replace with surveyed point?
11. Stage AE: Songkick/Ticketmaster often one venue name for two rooms — keep split ids?
12. Table B mega-events (Draft, Picklesburgh, fairs) for hand records when daily counts exist?
13. Lawrence County edge rooms (Scottish Rite) — muted only, or pre-list band review?
14. Ticketmaster room ids for Star Lake, Roxian, cultural rooms when a key is available?
