# Tampa Bay implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources: `tampa-city-type-answer.md` and `tampa-venue-table-answer.md` (unchanged). Hillsborough + Pinellas venue core; city type recorded as **`sprawl`** provisionally (research §8.1). No venue `carShare` overrides (Milwaukee/K14 pattern: estimates stay in research, not wired). Pasco/Hernando are audience ring only; Polk and Sarasota/Manatee edge venues excluded.

## Active fixed rooms (20)

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `raymond-james-stadium` | Raymond James Stadium | 69218 football/concert | Reported; 69,218 since 2022 vs 65,000–65,890 on bowl pages — conflict preserved. Source: venue-table A01 |
| `tropicana-field` | Tropicana Field | 25025 baseball | Reported tarped MLB config; 20,025 vs 25,025 conflict preserved. MLB venue id 12 verified Oct 12. Source: A04 |
| `benchmark-international-arena` | Benchmark International Arena | 19092 hockey, 20500 basketball, 21500 concert | Reported; replaces stub `amalie-arena`. Amalie name retained for search. ESPN home name verified Oct 12. Source: A05 |
| `midflorida-amphitheatre` | MIDFLORIDA Credit Union Amphitheatre | 9900 / 20000 concert | Reported seated vs lawn setups. Coordinate approximate (OSM miss). Source: A06 |
| `george-m-steinbrenner-field` | George M. Steinbrenner Field | 11026 baseball | Official (MLB.com). Source: A07 |
| `yuengling-center` | Yuengling Center | 10411 basketball | Reported; 10,500 vs 10,411 conflict preserved. Source: A08 |
| `wish-farms-soundstage` | Wish Farms Soundstage grandstands | 9200 concert | Reported 2018 figure; 2025 rebuild seat count unverified. Coordinate approximate. Source: A09 |
| `baycare-sound` | The BayCare Sound | 4000 / 9000 concert | Official tourism; seated-only sub-5k setup listed. Source: A10 |
| `baycare-ballpark` | BayCare Ballpark | 8500 baseball | Official MiLB. Source: A11 |
| `td-ballpark` | TD Ballpark | 8500 baseball | Official tourism. Source: A12 |
| `al-lang-stadium` | Al Lang Stadium | 7227 soccer | Reported. Ticketmaster sports sweep allowlisted. Source: A13 |
| `suncoast-credit-union-field` | Suncoast Credit Union Field | 5248 soccer | Reported (single data-site); threshold-sensitive. Coordinate approximate. Source: A14 |
| `tampa-bay-downs` | Tampa Bay Downs | 5000 racing floor | **No published capacity**; 5,000 is an estimated floor only for map threshold; observed crowds >11k. Source: A15 |
| `carol-morsani-hall` | Carol Morsani Hall | 2610 concert | Official Straz. Source: A18 |
| `ruth-eckerd-hall` | Ruth Eckerd Hall | 2180 concert | Reported. Source: A19 |
| `mahaffey-theater` | Mahaffey Theater | 2031 concert | Official tourism. Coordinate approximate. Source: A20 |
| `jannus-live` | Jannus Live | 2000 concert | Official. Source: A21 |
| `hard-rock-event-center` | Hard Rock Event Center | 1500 concert | Reported. Coordinate approximate. Source: A21b |
| `tampa-theatre` | Tampa Theatre | 1238 concert | Reported secondary. Source: A21c |
| `ferguson-hall-straz` | Ferguson Hall (Straz) | 1042 concert | Official; near 1,000 pre-list line. Source: A22 |

## Deferred / excluded (from research)

- **Future:** USF on-campus stadium (A02), proposed Rays ballpark (A03), Gasworx (A16), Water Street ~3,500 venue (A17) — not activated.
- **Open sites / fairs:** Gasparilla, Grand Prix, State Fair grounds totals, Strawberry Festival grounds — Table B; hand-list when dated with sourced figures; no multi-day totals invented.
- **Edge MSAs:** RP Funding Center, Joker Marchant, LECOM, Ed Smith, Port Charlotte spring site (Table A-E).
- **No feed yet:** Tampa Bay Sun FC (`tampa-bay-sun` team record only); UpShot Tampa from 2027.

## Feed checks (Oct 12, 2026)

| Source | Teams / rooms | Result |
|---|---|---|
| MLB | Rays 139 → venue 12; Threshers 566, Tarpons 587, Dunedin 424 | Rays attendance file populated; minors populated |
| ESPN | Bucs 27, Lightning 20, USF 58 (FB/MBB/WBB), Rowdies 17361 | Schedules list; **attendance counts not returned** in collect pass (0 games saved for NFL/NHL/USL; USF WBB has 3 games only) |
| HockeyTech | — | Not used (NHL on ESPN) |
| Ticketmaster | Benchmark TM id carried from prior stub | Room-matched concerts not verified in this pass; scoped archive had 10 events (4 MLB, 6 ESPN) |

## Collected data and validation

- **Attendance files:** `data/attendance/tampa/` — rays, three MiLB clubs; ESPN majors empty pending attendance field in feed or alternate source.
- **Expected draws:** 112 Tampa rows merged into `expectedDrawIndex.ts`; other metros and `POSTSEASON_DRAWS` left byte-identical to `main`.
- **Hard access:** `node scripts/venue-access.mjs --metro=tampa` — 13 rooms ≥5,000 measured; none flagged strained; stale `amalie-arena` row removed.
- **Archive:** `data/schedule-archive/tampa/2026-10-12.json` (10 events, 14-day window).
- **Weather:** `data/weather/tampa/` day files + index rows appended.
- **Build:** `npm run build` passed Oct 12.

## Judgment calls

- **City display name** stays `Tampa` in `metros.ts` (stub had this; research says “Tampa Bay” — Kylie may prefer rename).
- **Tropicana capacity** uses 25,025 tarped figure for friction sizing; unresolved 20,025 visit figure noted.
- **Raymond James** uses 69,218 for football/concert setups.
- **Tampa Bay Downs** included at 5,000 estimated floor with explicit note — research said manual classification needed.
- **No carShare overrides** despite city-type point estimates (0.85–0.97); same as Milwaukee approved build.
