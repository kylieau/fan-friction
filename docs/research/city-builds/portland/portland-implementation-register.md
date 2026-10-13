# Portland implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources: `portland-city-type-answer.md` and `portland-venue-table-answer.md`. This register records what was put in the app, what was left out, and judgment calls. It is not a Kylie approval.

## Rules that governed this pass

- New-city checklist (`docs/reference/new-city-checklist.md`): metro record, `hub` city type, teams with feed ids checked against live schedules Oct 13, 2026, venues with OpenStreetMap coordinates where Nominatim resolved the name, attendance pull, weather, archive, results, hard-access measure.
- Never invent a capacity. Providence Park concerts stay without a stored count. Theater of the Clouds is not a separate room.
- Car shares: measured values wired as `carShare`; city-type §3b estimates wired with comments (Oct 12 rule: estimates are wired, not left in research only).
- `expectedDrawIndex.ts`: Portland rows added via `node scripts/attendance-calibrate.mjs` after collecting attendance; other metros were not hand-edited.
- `MEMORY_HANDOFF.md`, `BACKLOG.md`, `docs/product/product-decisions.md`, and `package-lock.json` were not edited.

## City type, name, and boundary

| Item | What was done | Source |
|---|---|---|
| City type | `hub` in `CITY_TYPE` | City-type §5c |
| Display name | `Portland` | Venue-table scope (four-county core) |
| Short code | `PDX` | Prompt / airport code |
| Time zone | `America/Los_Angeles` | Venue-table header |
| Map frame | Center `[-122.65, 45.52]`, zoom 10.3 | Prompt |
| Boundary | Multnomah, Washington, Clackamas (OR) and Clark (WA) | Both answers §1 / §6 |
| Rose Quarter zone | `moda-center` and `veterans-memorial-coliseum` share zone name "Rose Quarter" | City-type §5b cluster |

## Active fixed rooms (17)

Coordinates are OpenStreetMap Nominatim unless noted.

| App ID | Room | Capacities stored | Car share | Notes |
|---|---|---|---|---|
| `providence-park` | Providence Park | 25,218 soccer | **0.685 measured** (Timbers 2019); Thorns 0.69 in note | Timbers / Thorns. No concert capacity. |
| `moda-center` | Moda Center | 19,393 basketball; 20,500 concert | **0.72 estimated**; concerts 0.75 in comment | Point: 1 N Center Court (Nominatim; building name not returned). |
| `veterans-memorial-coliseum` | VMC | 8,600 hockey | **0.78 estimated** | 10,000 bowl / historic figures in note only. |
| `cascades-amphitheater` | Cascades Amphitheater | 18,000 concert | **0.96 estimated** | Ridgefield, WA. |
| `hillsboro-stadium` | Hillsboro Stadium | 7,600 football | hub fallback | Expandable 10,000 not stored. |
| `mcmenamins-edgefield` | Edgefield lawn | 7,000 concert | **0.85** hub fallback | 7,000 vs ~5,000 conflict in note. |
| `hillsboro-hops-ballpark` | Hillsboro Hops Ballpark | **7,000** baseball (Hops games) | **0.92 estimated** | 4,700 fixed-seat conflict in note (MiLB vs Mortenson). |
| `hillsboro-ballpark` | Hillsboro Ballpark (old) | 4,500 baseball | — | Cascade (AUSL); muted. Same address as new park — match by tenant. |
| `merlo-field` | Merlo Field | 4,892 soccer | — | Muted. |
| `chiles-center` | Chiles Center | 4,852 basketball | — | Remix + UP; muted. |
| `viking-pavilion` | Viking Pavilion | 3,000 basketball | — | PSU; muted. |
| `keller-auditorium` | Keller Auditorium | 2,992 concert | — | Muted. |
| `arlene-schnitzer-concert-hall` | Schnitzer Hall | 2,776 concert | — | Muted. |
| `roseland-theater` | Roseland Theater | 1,400 concert | — | Muted. |
| `crystal-ballroom-portland` | Crystal Ballroom | 1,500 concert standing | — | Id suffixed; muted. |
| `mcmenamins-grand-lodge` | Grand Lodge lawn | 3,300 concert | — | Forest Grove edge; muted. |

## Left out

| Research item | Why |
|---|---|
| Theater of the Clouds | Same building as Moda; not simultaneous (prompt + research). |
| Oregon Zoo, PIR, Rose Festival grounds, Clark County Fair, Expo Center halls | Table B / no fixed seat count / event records. |
| Pickles-Walker, Joe Etzel Field, Crystal's duplicate listings, Grand Lodge if pre-list only | Density / below threshold / not in core friction set. |
| Salem, Eugene, Gorge | Outside boundary. |
| Timbers2 / Thorns II | Home venue not verified in research. |
| Portland Pickles | Capacity not verified. |

## Teams and feeds

| Team | Feed | Id | Home room on feed | Attendance file |
|---|---|---|---|---|
| Trail Blazers | ESPN NBA | 22 | Moda Center | 174 games |
| Timbers | ESPN MLS | 9723 | Providence Park | 78 games |
| Thorns | ESPN NWSL | 15362 | Providence Park | 63 games |
| Portland Fire | ESPN WNBA | 132052 | Moda Center | 22 games (2026 only) |
| Portland Winterhawks | HockeyTech WHL | ht 208 | Veterans Memorial Coliseum | 130 games |
| Hillsboro Hops | MLB High-A | 419 sport 13 | Hops Ballpark / Ron Tonkin Field via venue ids 7256 / 4429 | 328 games |
| PSU football | ESPN | 2502 | Hillsboro Stadium | 21 games |
| PSU MBB / WBB | ESPN | 2502 | Viking Pavilion | 55 / 59 games |
| UP Pilots MBB | ESPN | 2501 | Chiles Center | 63 games |
| Rip City Remix | ESPN G League | 128019 | Chiles Center | 48 games |
| Portland Cascade | none | — | Hillsboro Ballpark (manual) | Team record only |

Blazers `metroId` updated from unset to `portland` (existing team id).

## Collected data

- **Archive** `data/schedule-archive/portland/2026-10-13.json`: 4 ESPN events (Timbers, Blazers, Winterhawks, PSU football). No Ticketmaster key in this environment.
- **Results:** 2 finals Oct 10–13, 2026.
- **Weather:** 15 day files under `data/weather/portland/`.
- **Hard access:** seven rooms at or above 5,000 measured; none flagged strained.
- **Regular-season medians (dayClass `all`, sample):** Blazers 17,353 at Moda (79 games, 2025–2026); Timbers/Thorns medians in index under Providence Park; Hops at new ballpark from 2026 feed.

## Open questions for Kylie's review

1. **Hops ballpark capacity:** stored 7,000 for game-night friction vs 4,700 fixed seats — confirm which rule wins.
2. **Edgefield lawn:** 7,000 tourism figure vs ~5,000 typical crowd — friction eligibility.
3. **Moda Center point** is a Rose Quarter street address, not a named Moda OSM node.
4. **Moda car share:** single 0.72 on the building; concerts estimated 0.75 not split per event.
5. **Providence car share:** 0.685 Timbers survey; Thorns 0.69 not stored separately.
6. **Ticketmaster** venue ids not verified; Oct 13 archive has no concerts.
7. **Portland Fire** Aug 21, 2026 Vancouver BC game — confirm ESPN never labels it a Moda home game on results.
8. **Hillsboro address collision** between old ballpark, new ballpark and stadium — tenant-based mapping only.
9. **Portland Cascade** and **UP Pilots** (optional muted) — no AUSL feed; hand log only.
10. **Grand Lodge** and **Crystal Ballroom** — edge / standing capacities; confirm pre-list set.
11. **Cascades** and **Edgefield** car shares are estimates with wide ranges.
12. **VMC capacity** hockey 8,600 vs 10,000 bowl — hockey figure stored.
