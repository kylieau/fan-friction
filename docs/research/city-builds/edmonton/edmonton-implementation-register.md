# Edmonton implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources unchanged: `edmonton-city-type-answer.md` and `edmonton-venue-table-answer.md`. Boundary: Edmonton Metropolitan Region (EMRB 13 municipalities). **Not a Kylie approval** — follows the Milwaukee / Philadelphia / Boston / Tampa pattern pending her city-by-city OK.

## Rules that governed this build

- New-city checklist (`docs/reference/new-city-checklist.md`): metro record, hub city type from research, teams with feed ids checked live, venues from research with OpenStreetMap coordinates where possible, attendance pull, weather, archive, results, hard-access measure.
- Anything can be logged by hand; ~1,000+ pre-listed; 5,000+ affects friction; under ~5,000 muted on the map (Kylie, Oct 6 and Oct 9).
- Never invent capacity. Century Mile grandstand, River Cree concert room, and any range-only figure stay blank.
- **Car shares (C04, Oct 12):** estimated splits from the city-type answer are wired on the rooms that have a defensible number: Rogers Place 0.75, Commonwealth 0.62, RE/MAX Field and RAD Torque 0.85 (hub fallback with research direction), Century Mile 0.90 (qualitative ≥0.90). No measured person-level split exists for any Edmonton room.
- `expectedDrawIndex.ts`: only Edmonton rows appended; other metros’ draw, season-level, opponent-ratio and postseason objects stay as on `main`. No per-city opponents file.
- `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, and `package-lock.json` were not edited. `BACKLOG.md` was not edited (parallel city builds).

## City type, name, and boundary

| Item | What was done | Source |
|---|---|---|
| City type | `hub` in `CITY_TYPE` | City-type §4a / §5.1 |
| Display name | `Edmonton` | Venue-table scope |
| Short code | `EDM` | Judgment (airport YEG; not locked) |
| Time zone | `America/Edmonton` | Venue-table header |
| Map frame | Center `[-113.49, 53.55]`, zoom 10.5 | Venue cluster coordinates |
| Boundary | EMRB 13 municipalities; Enoch Cree Nation (River Cree) as edge scope on its own row | Venue-table §1 |

## Active fixed rooms (19)

Coordinates are OpenStreetMap Nominatim unless noted.

| App ID | Room | Selected capacities | Evidence / limits |
|---|---|---|---|
| `commonwealth-stadium` | Commonwealth Stadium | 56,302 football | Reported (Wikipedia). Conflicts 56,400 / 55,000 noted, not stored. carShare 0.62 estimated. A01 |
| `rogers-place` | Rogers Place | 18,500 hockey; 20,030 concert | Official fun facts. carShare 0.75 estimated. Ticketmaster Discovery id **not** stored: research verified numeric **140602** on the operator site; KovZp id lookup needs `ticketmaster-venues.mjs` with a key. A02 |
| `remax-field` | RE/MAX Field | 9,200 baseball | Reported. carShare 0.85 estimated (E5). A03 |
| `rad-torque-raceway` | RAD Torque Raceway | 8,500 racing | Reported drag strip; unverified seating type. carShare 0.85. A04 |
| `clarke-stadium` | Clarke Stadium | 5,000 football | Official City 5,000; Wikipedia 6,000 after 2026 retrofit not stored. A06 |
| `edmonton-expo-arena` | EXPO Centre Arena (Hall D / Flair Airlines Hangar) | 4,200 basketball | Official EXPO sporting page. Muted. A07 |
| `edmonton-convention-centre` | Edmonton Convention Centre | 5,254 concert (Hall ABC movable theatre chairs) | Explore Edmonton listing; not a fixed bowl. A08 |
| `foote-field` | Foote Field | 3,500 football | Official U of A. A09 |
| `clare-drake-arena` | Clare Drake Arena | 2,600 hockey | Official U of A. A10 |
| `northern-alberta-jubilee` | Northern Alberta Jubilee Auditorium | 2,538 concert | Reported without pit. A11 |
| `servus-credit-union-place` | Servus Credit Union Place | 2,023 hockey | Official St. Albert. A12 |
| `winspear-centre` | Francis Winspear Centre | 1,668 concert | Reported main hall. A13 |
| `sherwood-park-arena` | Sherwood Park Arena | 1,500 hockey | Official Strathcona County. A14 |
| `midway-music-hall` | Midway Music Hall | 1,450 concert | Official. A15 |
| `thompson-family-arena` | Thompson Family Arena at Heavy Metal Place | 1,400 hockey | Reported architect; Spruce Grove edge. A16 |
| `downtown-community-arena` | Downtown Community Arena | 1,000 hockey | Reported pre-opening blog only; needs official confirmation. A17 |
| `century-mile-racetrack` | Century Mile Racetrack | **unknown** | Grandstand capacity not sourced. carShare 0.90 estimated (E13). A18 |
| `river-cree-resort` | River Cree Resort (The Venue) | **unknown** | Enoch Cree Nation edge; low-precision aggregator point. A19 |

## Left out on purpose

| Research item | Why |
|---|---|
| Northlands Coliseum (A20) | Closed; demolition underway. |
| EXPO Centre exhibit halls A–H (A05) | Movable/standing reception figures, not fixed seated rooms (same pattern as convention halls in New York / Atlanta). |
| Fan Park / ICE District Plaza (B06) | Open-site programming; Table B. |
| K-Days, Fringe, Folk Fest, Heritage Festival, Taste of Edmonton (B01–B05, B07–B08) | Table B multi-day totals; no hand-listed point events added. |
| ICE District Event Park (2029) | Future only. |
| Energy City Cactus Rats / Spruce Grove ballpark | Home venue unresolved in research. |
| MacEwan Griffins | Downtown Community Arena capacity uncertain; no ESPN adapter verified. |
| U Sports Golden Bears / Pandas programs | Team records only; no U Sports feed wired. |
| Stingers (CEBL), Riverhawks (WCL), Saints, Crusaders | Team records only; no schedule adapter in this pass. |
| PWHL neutral-site games at Rogers Place | Not mapped to Edmonton home draws (same rule as Vancouver Goldeneyes at Rogers Place). |

## Teams and feeds (checked Oct 13, 2026)

| Team | Feed | Result |
|---|---|---|
| Oilers | ESPN NHL 6 | 214 home games with announced attendance at Rogers Place |
| Oil Kings | HockeyTech WHL 228 | 112 home games with counts at Rogers Place |
| Elks | ESPN CFL 81 | Schedule collect returned **0** games with attendance (same pattern as early CFL rows) |
| Stingers, Riverhawks, Saints, Crusaders, U Sports programs | — | Records only |

## Collected data

- Attendance: `data/attendance/edmonton/oilers.json` (214), `oil-kings.json` (112); `elks.json` empty.
- Expected draws: **+45** `EXPECTED_DRAWS`, **+47** `OPPONENT_RATIOS`, **+6** `POSTSEASON_DRAWS` rows appended; **+0** season levels (not enough 2026 home results yet).
- Archive: `data/schedule-archive/edmonton/2026-10-13.json` — 8 events (5 ESPN, 3 HockeyTech).
- Weather: 15 day files under `data/weather/edmonton/`.
- Results: 0 new finals in window.
- Hard access: five rooms at ≥5,000 measured; none meet strained rule (relief ≥40 m and ≤4 streets within 250 m).

## Checks (Oct 13, 2026)

- `npm run build` — passed.
- `npm run city-build-check` — passed (Edmonton metro, venues, teams).
- `node scripts/storage-check.mjs` — passed.
- `package-lock.json` — unchanged vs `main`.

## BACKLOG follow-up (for Kylie’s review form)

- Ticketmaster **KovZp** venue id for Rogers Place (research verified **140602** on Ticketmaster; not translated without API key). Commonwealth, EXPO Centre, RE/MAX Field, suburban arenas: no ids verified.
- Century Mile grandstand capacity and race-day attendance.
- River Cree “The Venue” capacity and scope (Enoch Cree Nation edge).
- Clarke Stadium: City 5,000 vs Wikipedia 6,000 (2026 retrofit).
- Downtown Community Arena: confirm official hockey capacity (~1,000 blog figure).
- Elks CFL: ESPN schedule attendance empty — confirm when counts appear.
- WCL / CEBL / BCHL / U Sports adapters.
- Table B festivals (K-Days 783k/10 days, Fringe visits, etc.): no daily concurrent crowds hand-listed.
- Gap follow-up prompts (`edmonton-gaps-followup-prompt.md`) not yet answered — patch when available.
- Rogers Place concert capacity conflict: official 20,030 vs 20,734 / 20,147.
- Commonwealth capacity conflict: 56,302 vs 56,400 / 55,000.
- ICE District Event Park construction 2027–2029 may change downtown approaches.

## Judgment calls (not locks)

- Used **hub** and wired **estimated** car shares per C04, not the older Milwaukee/Tampa “leave estimates unwired” note in some registers.
- **Oilers** team id is `oilers` (matches opponent keys in existing draw index).
- **Convention Centre** 5,254 stored despite movable chairs — feeds friction at 5,000+ with a note.
- **Clarke** at official 5,000, not Wikipedia 6,000.
- **River Cree** included with blank capacity for hand logging; approximate map point.
