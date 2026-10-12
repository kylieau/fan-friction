# Boston implementation register

Oct 12, 2026 · Cursor cloud agent. Source of truth: [city-type answer](boston-city-type-answer.md) and [venue table answer](boston-venue-table-answer.md). No UI, migration, or shared-screen changes in this pass.

## Scope and city type

- **Boundary:** Boston–Cambridge–Newton MSA core, Foxborough/Mansfield corridor and Lowell (Tsongas). Pawtucket (Centreville Bank Stadium) stays outside Boston friction. Worcester, Providence and New Hampshire destinations excluded per the venue answer.
- **City type:** `hub` (research recommendation). Car-share overrides only where the city-type answer gave estimates: Gillette 0.92, Fenway 0.65, Xfinity Center 0.95. Downtown rooms use the hub fallback.

## Active fixed rooms (20)

| App ID | Room | Notes |
|---|---|---|
| `gillette-stadium` | Gillette Stadium | Patriots, Revolution, Legacy 2026; World Cup alias on record |
| `alumni-stadium` | Alumni Stadium | BC football |
| `fenway-park` | Fenway Park | Red Sox |
| `harvard-stadium` | Harvard Stadium | Football; Cannons weekend events |
| `xfinity-center` | Xfinity Center | Mansfield corridor exception |
| `td-garden` | TD Garden | Celtics, Bruins |
| `nickerson-field` | Nickerson Field | BU outdoor |
| `conte-forum` | Conte Forum | BC basketball/hockey |
| `agganis-arena` | Agganis Arena | BU hockey; Fleet primary from 2026–27 |
| `tsongas-center` | Tsongas Center | UML; Fleet through spring 2026 |
| `mgm-music-hall-fenway` | MGM Music Hall at Fenway | Threshold concert room |
| `leader-bank-pavilion` | Leader Bank Pavilion | Threshold concert room |
| `track-new-balance` | The TRACK at New Balance | Threshold; shares campus with Roadrunner |
| `roadrunner` | Roadrunner | Only verified Ticketmaster venue id in this pass (`Z7r9jZa7rs`) |
| `wang-theatre` | Wang Theatre | |
| `orpheum-theatre-boston` | Orpheum Theatre | Suffix avoids collision with other cities |
| `house-of-blues-boston` | House of Blues Boston | |
| `big-night-live` | Big Night Live | Approximate coordinates |
| `royale-boston` | Royale | |
| `jordan-field` | Jordan Field | Harvard lacrosse/soccer |

**Excluded until reopen / decision:** White Stadium (Legacy from 2028), Matthews Arena and Northeastern’s replacement (2028), Symphony Hall, Lansdowne clubs, Lowell Memorial Auditorium, and most Table B open-site festivals (Boston Calling hiatus 2026, Marathon, Head of the Charles) as dated events—not generic rooms.

## Teams and feeds

| Team | Feed | Notes |
|---|---|---|
| Red Sox | MLB | Team 111, Fenway venue 3 |
| Celtics, Bruins, Patriots, Revolution, Legacy | ESPN | Team ids verified Oct 12, 2026 |
| BC football/MBB/WBB, BU MBB/WBB, Harvard football, UML MBB/WBB | ESPN | College ids verified Oct 12 |
| Boston Fleet | HockeyTech | PWHL htId `1`; Agganis primary |
| Boston Cannons, Northeastern MBB | — | Team records only; no verified schedule adapter |

**Venue id check:** 273 unique venue ids repo-wide; no duplicate keys. `franklin-field` remains Milwaukee-only (Milkmen).

## Collected data and expected draws

- **Attendance:** ~1,198 regular-season home games across 15 JSON files under `data/attendance/boston/` (Red Sox, Celtics, Bruins, Patriots, Revolution, Legacy, Fleet, BC, BU, Harvard, UML, etc.). BU MBB/WBB files are stubs (Case Gym not mapped).
- **Weather, schedule archive, results:** collected for `boston` under `data/weather/boston/`, `data/schedule-archive/boston/`, `data/results/boston/`.
- **Expected draws:** no full `attendance-calibrate` rewrite (that would change other metros’ `POSTSEASON_DRAWS` pool). Boston rows were spliced onto **main** for `EXPECTED_DRAWS` (+140), `SEASON_LEVELS` (+2), and `POSTSEASON_DRAWS` (+14); non-Boston rows in those arrays stay byte-identical to `main`. Boston opponent ratios (+137) are in `src/data/expectedDrawIndexBostonOpponents.ts` and merge in `expectedDraw.ts`; `OPPONENT_RATIOS` in the index file matches `main` exactly.
- **Product sign-off:** Kylie has not approved Boston execution the way she did Milwaukee (K14). That note is here only—not in `docs/product/product-decisions.md` (build 3 owns that log).

## Gaps and judgment calls

- **Ticketmaster:** most Boston rooms lack verified `ticketmasterIds`; concerts rely on name/nearby search until ids are added.
- **Legacy home rooms:** Gillette 2026, Pawtucket 2027, White Stadium 2028—events must land on the correct room by season.
- **Northeastern:** Matthews demolished; interim basketball venues for 2025–28 not mapped—MBB record has no feed.
- **BU basketball:** plays Case Gym (under listing threshold); not in the venue directory.
- **Broad-team overlap:** placeholder flags in `overlap.ts` for Patriots, Revolution, Legacy, BC, Harvard, Cannons pending audience research.
- **Venue access:** `node scripts/venue-access.mjs --metro=boston` not run in this pass (Milwaukee hit Open-Elevation HTTP 429).
- **Production build:** `npm run build` passed Oct 12, 2026. Nightly catalog publication and phone screenshots not run in this pass.
