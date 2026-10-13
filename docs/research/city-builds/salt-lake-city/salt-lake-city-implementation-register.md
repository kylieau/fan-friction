# Salt Lake City implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources (unchanged): `salt-lake-city-city-type-answer.md` and `salt-lake-city-venue-table-answer.md`. **Boundary:** Salt Lake County core; Provo/Orem, Ogden, Davis County and Park City are separate edge markets. **City type:** `hub`. **Venue `carShare`:** wired from the city-type answer (estimated, or agency-derived for Rice-Eccles football), per Oct 12 C04 — not measured splits.

## Rules that governed the build

- **Never invent a capacity.** Zions Bank Stadium, SLCC Bruin Arena, West Desert, and sub-1,000 Fairpark child rooms stay out or muted. Dan Russell / Great Saltair / Union Event Center leads were not researched.
- **`expectedDrawIndex.ts`:** 98 draw rows, 1 season level, 89 opponent ratios appended for `metroId: "salt-lake-city"` only. `POSTSEASON_DRAWS` and every other metro's rows match `origin/main` byte-for-byte after merge. No per-city opponents file.
- **Car shares** on 5,000+ active rooms with a city-type value (hub fallback 0.85 elsewhere).
- **Open sites** (Kilby Block Party, Utah State Fair daily crowd, parade, FanX, Twilight, etc.) are not venue rows.
- **Inactive:** Smith's Ballpark kept for one-offs; Bees feeds must not resolve there after 2024. Utah Grizzlies and Utah Warriors are not active teams.
- Did not edit `MEMORY_HANDOFF.md`, `docs/product/product-decisions.md`, or `package-lock.json`.

## Active fixed rooms (17)

| App ID | Research row | Capacities stored | carShare (class) |
|---|---|---|---|
| `rice-eccles-stadium` | V04 | 51,444 football | 0.75 (A→E) |
| `utah-first-credit-union-amphitheatre` | V09 | 7,000 seated concert; lawn noted | 0.95 (E) |
| `conference-center-slc` | Table A #3 | 21,000 concert | 0.75 (E) |
| `america-first-field` | V07–V08 | 20,213 soccer; 25,000 concert reported | 0.88 (E) |
| `delta-center` | V01–V03 | 17,867 basketball; 14,111 hockey (2026-27); 20,000 concert reported | 0.80 (E) |
| `jon-m-huntsman-center` | V06 | 15,000 full bowl; 8,500 basketball curtained | 0.82 (E) |
| `maverik-center` | V10 | 10,100 hockey; 12,000 concert | 0.92 (E) |
| `days-of-47-arena` | V13 | 10,000 | 0.88 (E) |
| `ballpark-at-america-first-square` | V11 | 6,500 seated baseball | 0.88 (E) |
| `smiths-ballpark` | V12 | 14,511 baseball, inactive tenant | — |
| `abravanel-hall` | A15 | 2,811 concert | — |
| `eccles-theater-slc` | A16 | 2,468 concert | — |
| `salt-lake-tabernacle` | A14 | 3,500 concert | — |
| `capitol-theatre-slc` | A19 | 1,876 concert | — |
| `kingsbury-hall` | A18 | 1,992 concert | — |
| `utah-first-ballpark` | A20 | 1,200 baseball | — |

**Left out (research):** West Desert (edge Tooele, irregular); Zions Bank / SLCC Bruin (borderline muted); Power District MLB proposal; SEG downtown 6,000 venue; Huntsman renovation proposal; Grand Building / Promontory Hall (listing-only capacities); Real Monarchs home without a separate verified schedule adapter.

## Teams and feeds (checked Oct 13, 2026)

| Team | Feed | Result |
|---|---|---|
| Utah Jazz | ESPN NBA 26 | 172 games saved |
| Utah Mammoth | ESPN NHL 129764 | 91 games saved |
| Real Salt Lake | ESPN MLS 4771 | Schedule wired; **0 announced attendance** in collector |
| Utah Royals | ESPN NWSL 19141 | Schedule wired; **0 announced attendance** |
| Salt Lake Bees | MLB 561, venue 6135 | 149 games (2025–26 at Daybreak; earlier Smith's seasons have no counts) |
| Utah Utes football | ESPN CFB 254 | 31 games |
| Utah MBB / WBB | ESPN 254 | 76 / 62 games |
| Salt Lake City Stars | ESPN G League 19 | 40 games (some Maverik / Delta home venues) |
| Real Monarchs | Record only | No feed wired |

**Ticketmaster:** No API key in this environment. No concert room ids verified; archive has **0 Ticketmaster** listings (13 ESPN events in the Oct 13 snapshot).

## Collected data

- **Hard access:** `node scripts/venue-access.mjs --metro=salt-lake-city` — 10 rooms ≥5,000 measured. Rule flags strained: Rice-Eccles, Utah First amphitheatre, Huntsman (relief ≥40 m and ≤4 named streets within 250 m).
- **Weather:** 15 day files under `data/weather/salt-lake-city/`.
- **Archive:** `data/schedule-archive/salt-lake-city/2026-10-13.json` (13 events).
- **Results:** 2 finals Oct 10–13.

## Open questions for Kylie

1. Short code **`SLC`** and display name **Salt Lake City** — keep?
2. **Utah First amphitheatre** total: use 20,000 (Ticketmaster) vs 25,000 (Wikipedia) for concert sizing when lawn is sold?
3. **Delta Center** concert row still 20,000 pre-renovation — update when a post-renovation concert max is sourced?
4. **Huntsman:** store gymnastics as the 15,000 undifferentiated row vs a dedicated setup once the type system allows it?
5. **Conference Center:** pre-list only Tabernacle Choir / public ticketed shows, not General Conference sessions?
6. **MLS/NWSL attendance** absent from ESPN collector — alternate source or building-only estimates?
7. **Ticketmaster ids** for Delta Center, amphitheatre, Maverik, Fairpark rooms, Eccles, etc. (BACKLOG follow-up when a key is available).
8. **West Desert** and **Zions Bank** — add when a schedule and official capacity exist?
9. **UFL Utah 2028** at America First Field — team record timing?
10. **Power District** MLB stadium proposal — stay out until built?
11. **Rice-Eccles strained flag** from the access script — keep or override given TRAX access?
12. **Gaps follow-up** (`salt-lake-city-gaps-followup-prompt.md`) not run yet — patch when answer lands.
