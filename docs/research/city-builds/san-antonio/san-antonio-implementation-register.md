# San Antonio implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources, unchanged: `san-antonio-city-type-answer.md` and `san-antonio-venue-table-answer.md` (Oct 12, 2026). Core scope is Bexar County plus Selma and New Braunfels edge rooms (Whitewater flagged for Austin cross-reference). City type is **`sprawl`**. Estimated venue `carShare` values are wired per C04 (Oct 12); Alamodome uses 0.87 from measured P&R bounds, not a full mode split.

This is not a separate Kylie lock on San Antonio. It follows the city-build task prompt and the Milwaukee / Philadelphia / Boston / Tampa file pattern.

## Rules that governed the build

- New-city checklist (`docs/reference/new-city-checklist.md`). Never invent a capacity; weak or resale-only figures stay out.
- `expectedDrawIndex.ts`: San Antonio rows only, merged without changing non–San Antonio draw rows; `POSTSEASON_DRAWS` byte-identical to `main`.
- No separate opponents file. `package-lock.json`, `MEMORY_HANDOFF.md`, and `docs/product/product-decisions.md` not edited.
- Spurs games at Moody Center (Austin) and neutral sites are not San Antonio home buildings; Spurs attendance for expected draws uses Frost Bank Center and Alamodome only.
- Convention halls, rodeo grounds totals, Fiesta open sites, and proposed rooms (Spurs arena, Missions downtown ballpark) are not venue rows or seeded events.

## Boundary and city type

Bexar County core, plus Selma (Real Life, Retama) and Comal County edge (Whitewater). Seguin, Boerne, and outer MSA counties were searched with no qualifying rows in the research. Display name **San Antonio**, code **SAT**, map center `[-98.49, 29.43]`, zoom `10.4`, time zone `America/Chicago`.

## Active rooms (22)

| App ID | Research | What was stored | Notes |
|---|---|---|---|
| `alamodome` | A1 | Football 65,427 official (2015 guide); basketball 20,662 reported. `carShare` 0.87 estimated. | UTSA curtained setup noted; full bowl not applied to Roadrunners games in copy. |
| `frost-bank-center` | A2 | Basketball 18,418; concert 19,000 reported. Rename chain SBC → AT&T → Frost. `carShare` 0.95. | |
| `freeman-coliseum` | A3 | Concert 11,700 reported (max of setup range). `carShare` 0.95. | Shares east-side lots with Frost and rodeo. |
| `real-life-amphitheater` | A4 | 6,000 seated concert; lawn not in seats. `carShare` 0.95. | 2026 activity unverified. |
| `retama-park` | A5 | 15,000 racing reported. `carShare` 0.95. | |
| `wolff-stadium` | A6 | Baseball ~9,200 reported total. `carShare` 0.95. | Missions through 2028. |
| `toyota-field` | A7 | Soccer 8,296; concert 13,000 reported. `carShare` 0.96. | |
| `benson-stadium` | A8 | Football 6,000 official. `carShare` 0.95. | UIW; typical crowds much lower. |
| `cowboys-dancehall` | A9 | 5,772 official city study. `carShare` 0.95. | Standing-heavy threshold care. |
| `whitewater-amphitheater` | A10 | 5,600 official. `carShare` 0.98. | Edge; Chapter 11. |
| `rj-music-pavilion` | A11 | 5,000 official city study. `carShare` 0.95. | Status unverified. |
| `sunken-garden-theater` | A12 | 4,800 official. Muted. | |
| `utsa-convocation-center` | A13 | 4,080 reported. `carShare` 0.95. Muted. | |
| `flores-country-store-outdoor` | A14 | 4,000 reported outdoor. Muted. | Indoor 800 not merged. |
| `the-espee` | A15 | 3,175 GA official. `carShare` 0.87. Muted. | |
| `boeing-center-tech-port` | A16 | 3,100 standing reported. `carShare` 0.95. Muted. | |
| `laurie-auditorium` | A17 | 2,479 official. Muted. | |
| `lila-cockrell-theatre` | A18 | 2,319 reported. `carShare` 0.87. Muted. | |
| `majestic-theatre-sa` | A19 | 2,264 official ATG. `carShare` 0.87. Muted. | |
| `tobin-center` | A20 | 2,000 / 2,039 concert setups. `carShare` 0.87. Muted. | |
| `mcdermott-convocation-center` | A21 | 2,000 reported. Muted. | |
| `aztec-theatre-sa` | A22 | 1,477 reported. Muted. | |

## Left out

| Item | Why |
|---|---|
| Illusions Theater (A23) | Child room; capacity unknown. |
| Expo halls, convention center halls, Wurstfest grounds, Fiesta routes, TPC San Antonio | Open sites or convention (Kylie, Oct 7). |
| P1 Spurs arena, P2 Missions ballpark | Not built in window. |
| San Antonio Brahmas, Stars, LOVB venue TBD | No current tenant or venue. |
| Seguin / Boerne / outer MSA searches | No qualifying room in research pass. |

## Teams and feeds (Oct 13, 2026)

| Team | Feed | Result |
|---|---|---|
| Spurs | ESPN NBA 24 | 178 home games at SA buildings after filtering neutral/Austin games; Frost Bank Center primary. |
| San Antonio FC | ESPN USL 18265 | 63 home games with attendance in file. |
| Missions | MLB 510, sport 12, venue 2818 | 345 games at Wolff Stadium. |
| UTSA football | ESPN 2636 | 29 games; Alamodome mapped. |
| UTSA MBB / WBB | ESPN 2636 | 62 / 53 games. |
| UIW football / MBB / WBB | ESPN 2916 | 0 games with attendance in pull. |

Ticketmaster: no key; see `san-antonio-backlog-follow-up.md`.

## Collected data

- **Expected draws:** 89 rows, 1 season level (Spurs), 68 opponent ratios, merged into `expectedDrawIndex.ts` without altering non–San Antonio draw rows; `POSTSEASON_DRAWS` unchanged.
- **Hard access:** `node scripts/venue-access.mjs --metro=san-antonio` — 11 rooms at 5,000+ measured; none met strained rule.
- **Archive:** `data/schedule-archive/san-antonio/2026-10-13.json`, 10 ESPN events Oct 13–27.
- **Weather:** 15 day files under `data/weather/san-antonio/`.
- **Results:** none in window with attendance.

## Checks (Oct 13, 2026)

| Check | Result |
|---|---|
| `npm run build` | Pass |
| `npm run city-build-check` | Pass |
| `node scripts/storage-check.mjs` | Pass |

## Open questions for Kylie

See `san-antonio-backlog-follow-up.md` and the research conflicts table (Alamodome football capacity, Real Life seated split, Freeman setups, Cowboys/R&J standing friction, Whitewater ownership, SAT vs “San Antonio–New Braunfels” display name, whether to hand-list Fiesta / rodeo / Alamo Bowl when counts exist).
