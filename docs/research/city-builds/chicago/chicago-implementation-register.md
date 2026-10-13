# Chicago implementation register

Oct 13, 2026 · Cursor Cloud Agent (C15 rebuild on `cursor/build-4-composer`). Research sources (unchanged): `chicago-venue-table-answer.md`, `chicago-city-type-answer.md`, and `chicago-city-type-answer-astra.md`. City type **`hub`** (Kylie, Oct 13, B2). Venue `carShare` wired **only** where a sourced figure exists (B7, Oct 13): Wrigley Field **0.367** (36.7% driving, [2013 Gameday Traffic and Parking Management Plan](https://www.scribd.com/document/155346029/Wrigley-Gameday-Traffic-Management-Plan), verified distinct from UW Husky Stadium’s 36.7% TMP figure); United Center **0.869** ([2023 patron survey, TDM study on chicago.gov](https://chicago.gov/content/dam/city/depts/cdot/CDOTPRC/TDM/Q1/United%20Center-TDM%20Study.pdf)). All other rooms use the hub **0.85** default.

**Handoff rules applied:** no capacities invented; **Impact Field capacity blanked Oct 13** (5,526 fixed / 6,300 / 8,300 conflict — see BACKLOG); Ryan Field stores **35,000** from 2026 only (old 47,130 stadium closed); **Ryan Field concert car share (58%) not wired** — open for Kylie. `expectedDrawIndex.ts` Chicago rows refreshed via `scripts/.replace-chicago-draws.mjs`; non-Chicago arrays match `origin/main` except appended Chicago draw/season/opponent/postseason rows. No per-city opponents file. No `package-lock.json` edits.

## Active fixed rooms (23)

| App ID | Room | Selected capacities | Notes |
|---|---|---|---|
| `soldier-field` | Soldier Field | 61,500 football/soccer; 63,500 concert | Official concert figure; Bears/Fire conflicts in note |
| `wrigley-field` | Wrigley Field | 41,649 baseball/concert | carShare 0.367 sourced |
| `rate-field` | Rate Field | 40,615 baseball | No concert cap kept |
| `ryan-field` | Ryan Field | 35,000 football from 2026 | Concerts from 2027 TBD |
| `huntington-bank-pavilion` | Huntington Bank Pavilion | 30,000 concert | |
| `credit-union-1-amphitheatre` | Credit Union 1 Amphitheatre | 28,000 concert | Approximate coordinates |
| `seatgeek-stadium` | SeatGeek Stadium | 20,000 soccer; 28,000 concert | No confirmed pro tenant 2026 |
| `united-center` | United Center | 20,917 / 19,717 / 23,500 setups | carShare 0.869 sourced |
| `allstate-arena` | Allstate Arena | 18,500 / 17,500 / 16,692 setups | Wolves (AHL) |
| `ravinia` | Ravinia Festival | 12,758 concert | Pavilion 2,840 post-2026 renovation in note |
| `martin-stadium` | Northwestern Medicine Field at Martin Stadium | 12,000 football/soccer | Stars 2026; 2027 unresolved |
| `now-arena` | NOW Arena | 11,218 / 8,700 setups | |
| `pritzker-pavilion` | Jay Pritzker Pavilion | 11,000 concert | Mostly free; no TM id |
| `wintrust-arena` | Wintrust Arena | 10,387 basketball | Concert cap not published |
| `credit-union-1-arena` | Credit Union 1 Arena | 8,000 / 10,300 setups | |
| `impact-field` | Impact Field | *(blank — conflicting sources)* | No TM id |
| `wintrust-field` | Wintrust Field | 7,365 baseball | |
| `welsh-ryan-arena` | Welsh-Ryan Arena | 7,039 basketball from 2019 | |
| `jones-convocation-center` | Jones Convocation Center | 7,000 basketball | Crowds often under floor |
| `salt-shed` | The Salt Shed Fairgrounds | 5,000 concert outdoor | |
| `aragon-ballroom` | Byline Bank Aragon Ballroom | 5,000 concert | |
| `gately-stadium` | Gately Stadium | 5,000 football | No TM id |
| `chicagoland-speedway` | Chicagoland Speedway | 47,000 racing | Will County boundary addition |

## Left out

- Festival grounds (Grant, Douglass, Union, Humboldt), McCormick Place and Stephens Convention Center (event-sized), Hawthorne (racing ended July 19, 2026), Arlington Park (closed 2021).
- Loyola Gentile Arena (under 5,000).
- Future Fire stadium at The 78 (2028+).

## Feeds (checked Oct 7, 2026; attendance files in `data/attendance/chicago/`)

| Source | Teams wired |
|---|---|
| MLB | Cubs, White Sox, Dogs, Boomers |
| ESPN | Bulls, Sky, Blackhawks, Bears, Fire, Stars, Northwestern FB/MBB/WBB, DePaul MBB/WBB, UIC MBB, Chicago State MBB, Windy City Bulls |
| HockeyTech | Chicago Wolves (AHL 330 → Allstate Arena) |

ESPN `VENUE_BY_NAME` adds **Allstate Arena** and **Impact Field** (Oct 13). `seatgeek stadium` / `toyota park` retained for historical Stars pulls.

## Expected draws

Chicago rows replaced Oct 13, 2026 via `node scripts/.replace-chicago-draws.mjs` after `attendance-calibrate` logic on current attendance files. Non-Chicago rows in `EXPECTED_DRAWS`, `SEASON_LEVELS`, and `OPPONENT_RATIOS` match `origin/main`; `POSTSEASON_DRAWS` non-Chicago bands match `origin/main`.

## C16 re-verification (Build 4, Oct 13, 2026)

| # | Item | Result | Source (checked Oct 13, 2026) |
|---|---|---|---|
| 1 | Saints Oct 25, 2026 Paris game not at Superdome | **Pass** | ESPN NFL Saints schedule: game `401873011`, `neutralSite: true`, venue **Stade de France**, Saints vs Steelers (`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/18/schedule`). Logged in `new-orleans-implementation-register.md`. |
| 2 | Impact Field capacity | **Blanked in app** | [Baseballparks.com](https://baseballparks.com/indepth/impact-field/) cites 5,526 fixed seats; team site ~6,300; [Wikipedia](https://en.wikipedia.org/wiki/Impact_Field) 8,300. No single official figure — BACKLOG. |
| 3 | Ticketmaster ids (Impact Field, Pritzker, Gately) | **Still missing** | `venues.ts` has no `ticketmasterIds` on those three rows (unchanged). |
| 4 | Chicago Stars 2027 home | **Still open** | Venue-table answer: Ryan Field concert plan on hold; Martin Stadium temporary 2026. No 2027 home confirmed ([`chicago-venue-table-answer.md`](chicago-venue-table-answer.md)). |
| 5 | SeatGeek Stadium 2026 tenant | **Still none** | Venue note matches research: Fire left 2019, Stars after 2025; no confirmed pro tenant ([`chicago-venue-table-answer.md`](chicago-venue-table-answer.md)). |
| 6 | Soldier Field football / concert caps | **Still as built** | Venue-table answer: football **61,500** / concert **63,500** (official stadium site cited there); Wikipedia 62,500 in note — matches `venues.ts` ([`chicago-venue-table-answer.md`](chicago-venue-table-answer.md) Soldier Field row). |
| 7 | City type hub vs Astra | **Hub locked** | Kylie Oct 13 B2; Astra agrees hub, no region-wide measured car shares — only Wrigley 0.367 and United Center 0.869 wired ([`chicago-city-type-answer-astra.md`](chicago-city-type-answer-astra.md)). |

## Open questions (for PR / Kylie review)

1. **Ryan Field concerts:** Kimley-Horn projects **58%** car for concerts — wire when concerts are listed, or never without post-opening counts?
2. **Impact Field capacity** — see C16 #2 and BACKLOG (conflict unresolved).
3. **Ticketmaster venue ids** not stored: **Impact Field**, **Jay Pritzker Pavilion**, **Gately Stadium** (and verify Windy City Bulls at NOW Arena when a key is available).
4. **Chicago Stars 2027 home** (Ryan Field plan on hold; Martin Stadium temporary).
5. **SeatGeek Stadium** anchor tenant after 2026.
6. **Soldier Field** 61,500 vs 63,500 vs venue-site 63,500 for Bears vs concerts — confirm default for mixed nights.
7. **Astra vs Claude city-type:** hub locked; Astra did not support region-wide measured car shares — any venue estimates to revisit later?
