# St. Louis implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources (unchanged): `st-louis-city-type-answer.md` and `st-louis-venue-table-answer.md`. Scope: St. Louis city, St. Louis and St. Charles counties, MO, plus Metro East (Madison and St. Clair counties, IL) per the venue-table core. City type is **`hub`** with **estimated** `carShare` on every active room (Oct 12 C04: wire sourced estimates; none are measured). Gaps follow-up research was not waited on.

**Handoff rules applied:** no capacities invented (Saint Louis Music Park uses a low-confidence estimated 4,500 only because the venue-table cited it; resale-only figures were skipped). Car shares wired as estimates from the city-type answer. `expectedDrawIndex.ts` gained St. Louis rows only; other metros' draw/season/opponent rows were restored from `main` before append; `POSTSEASON_DRAWS` was not rewritten. No per-city opponents file. Team id `cardinals` is St. Louis MLB (Arizona NFL remains `arizona-cardinals`). `MEMORY_HANDOFF.md` and `product-decisions.md` were not edited.

## Active fixed rooms (21)

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `dome-at-americas-center` | The Dome at America's Center | 67277 football | Reported full stadium; operator 67,000; UFL spring crowds much lower. Source: venue-table A1 |
| `world-wide-technology-raceway` | WWTR | 58000 racing | Reported (tourism); track cites 57,000 — conflict preserved. No published NASCAR headcount. Source: A2 |
| `busch-stadium` | Busch Stadium | 43769 baseball | Official Cardinals guide; several higher published figures in notes. Source: A3 |
| `energizer-park` | Energizer Park | 22423 soccer | Reported; SeatGeek ticketing — Ticketmaster concerts unlikely. Source: A4 |
| `enterprise-center` | Enterprise Center | 18096 hockey, 22000 concert | Reported. Source: A5 |
| `hollywood-casino-amphitheatre-stl` | Hollywood Casino Amphitheatre | 20000 concert | Estimated total incl. lawn (Ticketmaster). Source: A6 |
| `the-muny` | The Muny | 10700 concert | Reported post-2026 seat work; returns summer 2027. Source: A7 |
| `chaifetz-arena` | Chaifetz Arena | 10600 basketball, 11600 concert | Reported / estimated concert. Source: A8 |
| `family-arena` | Family Arena | 11522 concert (in-the-round) | Reported max; Ambush lower-bowl setups can be smaller. Source: A9 |
| `harlen-c-hunter-stadium` | Harlen C. Hunter Stadium | 6000 football | Official; Wikipedia 7,450 noted. Source: A10 |
| `hermann-stadium` | Hermann Stadium | 6050 soccer | Official total. Coordinate approximate. Source: A11 |
| `arsenal-bg-ballpark` | Arsenal BG Ballpark | 6000 baseball | Official team figure. Coordinate from reference infobox. Source: A12 |
| `carshield-field` | CarShield Field | 3500 baseball (seated) | Lawn not counted as seats. Source: A13 |
| `fabulous-fox-theatre-stl` | Fabulous Fox | 4500 concert | Official; muted. Source: A14 |
| `saint-louis-music-park` | Saint Louis Music Park | 4500 concert | Estimated, low confidence; muted. Source: A15 |
| `siue-vadalabene-arena` | First Community Arena (SIUE) | 4000 basketball | Official “slightly above 4,000”. Muted. Source: A16 |
| `ralph-korte-stadium` | Ralph Korte Stadium | 4000 soccer | Reported. Muted. Source: A17 |
| `stifel-theatre` | Stifel Theatre | 3100 concert | Official PDF. Muted. Source: A18 |
| `hyland-performance-arena` | Hyland Performance Arena | 3270 basketball | Reported. Muted. Source: A19 |
| `the-factory-stl` | The Factory | 3000 concert | Official max; seated shows lower. Muted. Source: A20 |
| `ferrara-theatre` | Ferrara Theatre | 1411 concert | Reported child room of America's Center. Muted. Source: A1-a |

## Left out

- **Convention exhibit halls, Ballpark Village, Chaifetz Pavilion (800),** Table B open sites (Celebrate 250, Soulard Mardi Gras, WWTR weekends without a sourced daily crowd), and rooms with no sourced capacity in the research pass.
- **No feed yet:** Gateway Grizzlies, O'Fallon Hoots, St. Louis Ambush, St. Louis CITY2, SLU soccer, SIUE when ESPN returns no attendance. Grizzlies/Hoots/Ambush are team records only.
- **Battlehawks (UFL):** ESPN schedule id 112651 is wired; announced attendance was not returned in the collect pass (0 games saved).
- **Broad-team flag** and **monthly heat baseline:** not added (no poll / no baseline source).
- **Muny 2026 season:** renovation; room kept for identity and future summers.

## Feeds checked Oct 13, 2026

| Source | Result |
|---|---|
| MLB | Cardinals 138 → Busch Stadium 2889; 422 home games with announced attendance (2022–2026) |
| ESPN | Blues 19, CITY SC 21812, Battlehawks 112651, SLU 139, SIUE 2565, Lindenwood 2815 — home venue names mapped. Saved: Blues 183, CITY SC 60, SLU MBB 69, SLU WBB 60, Lindenwood football 22; Battlehawks 0; SIUE 0; Lindenwood MBB 0 |
| Ticketmaster | No API key in this environment. Chaifetz venue id 50351 appears in research but was **not** verified to a Discovery `KovZp` id |

## Collected data

- **Attendance:** `data/attendance/st-louis/` (816+ games with counts across wired teams).
- **Expected draws:** 91 draw rows and 79 opponent ratios appended; 0 season levels (no team met the season-level threshold in this pass). Other metros' existing rows unchanged except closing commas; `POSTSEASON_DRAWS` unchanged.
- **Hard access:** 12 rooms ≥5,000 measured; none flagged strained.
- **Archive:** `data/schedule-archive/st-louis/2026-10-13.json` — 6 events (ESPN).
- **Weather:** 15 day files under `data/weather/st-louis/`.
- **Results:** 3 finals Oct 10–13.

## Judgment calls

- **Display name** `St. Louis`; code **`STL`** (research lead).
- **Car shares** stored on venues as numeric estimates (hub default 0.85 still applies where no override).
- **Busch capacity** uses official 43,769, not KMOV 46,000 or Ticketmaster resale figures.
- **WWTR capacity** uses reported 58,000, not the track's 57,000 press figure.
- **CarShield Field** muted at 3,500 seated; lawn not counted.
- **Hermann Stadium, Arsenal BG, SIUE arena, Music Park** use approximate coordinates where Nominatim missed the building.
- **Enterprise Center vs Stifel** and **Dome vs Ferrara** kept as separate rooms.

## Open questions (for Kylie's review form)

1. Is **`STL`** the right short code and **St. Louis** the right display name (vs. greater-metro wording)?
2. **Hub** vs **sprawl** if hub spill feels too strong for a 73.7% drive-alone metro.
3. **Busch:** 43,769 official vs 44,383 / 45,494 / 46,000 conflicts — which sellable figure should friction use?
4. **WWTR:** 58,000 reported vs 57,000 track figure; store unknown until NASCAR publishes attendance?
5. **Hollywood Casino Amphitheatre:** 20,000 total vs 6,805 seated-only setup for sizing.
6. **Family Arena:** which in-the-round / hockey / concert setup should default concerts use?
7. **Muny:** capacity after 2027 reopening; keep room dark until then?
8. **Saint Louis Music Park:** keep 4,500 estimated or blank until a better source?
9. **Battlehawks 2027 home:** Dome vs Energizer Park — when decided, update venue mapping.
10. **Ticketmaster venue ids** for Chaifetz, Hollywood Casino Amphitheatre, Enterprise Center concerts, and other concert rooms — verify when a key is available (Chaifetz research URL venue/50351).
11. **Grizzlies, Hoots, Ambush, CITY2:** which need schedule adapters next?
12. **SIUE / Lindenwood MBB:** ESPN returned no attendance — alternate source or leave draws thin?
13. **Table B events** (Celebrate 250, Soulard parade, NASCAR sellout without a count): hand-list when dated counts exist?
14. **Opponent slug `cardinals`:** road games in other metros still use nickname slug; link to `cardinals` team id?
