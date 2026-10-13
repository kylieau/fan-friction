# Denver implementation register

Oct 13, 2026 · Cursor Cloud Agent. Research sources: `denver-city-type-answer.md` and `denver-venue-table-answer.md` (unchanged). Denver–Aurora–Centennial MSA core; city type **`hub`** (research §3.2). Venue `carShare` values are **estimated, not measured** (C04 Oct 12). Short code **DEN** (judgment; not locked). Boulder, Colorado Springs and Fort Collins edge rooms stay out.

## Rules that governed this pass

- New-city checklist: metro record, hub city type, teams with feed ids checked Oct 13, 2026, venues from the venue-table answer with geocoded coordinates from the city-build prompt.
- Never invent capacity; conflicts (Coors standing-room figures, Denver Coliseum 10,200 vs 8,140, DSG permanent vs expandable) stay in notes.
- Table B open sites, National Western grounds totals, and convention exhibit halls are not venue rows. Mile High Ballroom is a muted pre-list room with no stored capacity (reported 5,452 is not used for friction).
- Closed 1stBank Center and Bandimere Speedway are excluded. Edge Boulder rooms are excluded.

## City type and map

| Item | Value | Source |
|---|---|---|
| City type | `hub` | City-type §3.2 |
| Display name | Denver | MSA label in venue answer |
| Code | DEN | Judgment (airport code) |
| Time zone | `America/Denver` | Venue-table header |
| Map center | `[-104.99, 39.744]` | Downtown cluster (Empower, Coors, Ball) |
| Downtown zone | `empower-field`, `coors-field`, `ball-arena` → "Downtown cluster" | City-type §3.4 |

## Active fixed rooms (24)

| App ID | Room | Capacities stored | carShare (estimate) |
|---|---|---|---|
| `empower-field` | Empower Field at Mile High | 76,125 football; 85,000 concert | 0.72 |
| `coors-field` | Coors Field | 46,891 baseball (+ standing in note) | 0.75 |
| `ball-arena` | Ball Arena | 19,520 basketball; 18,007 hockey; 21,000 concert | 0.78 |
| `dicks-sporting-goods-park` | Dick's Sporting Goods Park | 18,061 soccer | 0.93 |
| `fiddlers-green-amphitheatre` | Fiddler's Green Amphitheatre | 18,000 concert (7,500 seated + lawn) | 0.83 |
| `centennial-stadium` | Centennial Stadium | 12,372 soccer | 0.90 |
| `denver-coliseum` | Denver Coliseum | 10,200 (8,140 conflict in note) | 0.90 |
| `red-rocks-amphitheatre` | Red Rocks Amphitheatre | 9,525 concert | 0.88 |
| `levitt-pavilion-denver` | Levitt Pavilion Denver | 7,500 concert lawn | 0.85 fallback |
| `magness-arena` | Magness Arena | 6,315 hockey; 7,200 basketball/concert | 0.85 fallback |
| `bellco-theatre` | Bellco Theatre | 5,000 concert | 0.85 fallback |
| `ccc-mile-high-ballroom` | Mile High Ballroom | none (muted) | 0.85 fallback |
| `mission-ballroom` | Mission Ballroom | 3,950 concert (range top) | 0.85 fallback |
| `fillmore-auditorium-denver` | Fillmore Auditorium | 3,700 concert | 0.85 fallback |
| `paramount-theatre-denver` | Paramount Theatre | 1,870 concert | 0.85 fallback |
| `ogden-theatre` | Ogden Theatre | 1,600 concert | 0.85 fallback |
| `gothic-theatre` | Gothic Theatre | 1,100 concert | 0.85 fallback |
| `buell-theatre` | Buell Theatre | 2,884 concert | 0.85 fallback |
| `boettcher-concert-hall` | Boettcher Concert Hall | 2,679 concert | 0.85 fallback |
| `ellie-caulkins-opera-house` | Ellie Caulkins Opera House | 2,225 concert | 0.85 fallback |
| `hamilton-gymnasium` | Hamilton Gymnasium | 2,000 basketball | 0.85 fallback |
| `peter-barton-lacrosse-stadium` | Peter Barton Lacrosse Stadium | ~2,000 | 0.85 fallback |

DPAC cluster rooms share approximate coordinates (`-104.9976, 39.744`) where the prompt grouped Buell/DPAC.

## Teams and feeds

| Team | Feed | Id | Home room on feed |
|---|---|---|---|
| Rockies | MLB | 115 | Coors Field (19) |
| Broncos | ESPN NFL | 7 | Empower Field at Mile High |
| Nuggets | ESPN NBA | 7 | Ball Arena |
| Avalanche | ESPN NHL | 17 | Ball Arena |
| Rapids | ESPN MLS | 184 | Dick's Sporting Goods Park |
| Colorado Mammoth | ESPN NLL | 125422 | **No venue on feed** — team record; Ball Arena Ticketmaster sweep |
| Denver Summit FC | ESPN NWSL | 131563 | Empower / DSG / Centennial by date |
| DU hockey | ESPN | 2172 | Magness Arena (plus neutral sites out of metro) |
| DU men's basketball | ESPN | 2172 | Hamilton Gymnasium |
| DU women's basketball | ESPN | 2172 | Hamilton Gymnasium |

## Left out

- 1stBank Center, Bandimere Speedway (closed).
- Boulder, Colorado Springs, Fort Collins edge rooms (venue answer §2d).
- National Western Center legacy/livestock buildings (capacities unknown).
- Four Seasons Ballroom (convention).
- Table B: Stock Show grounds totals, Pride, GABF as a grounds record, parades, Thunder Valley MX, BOLDERBoulder.

## Judgment calls

- **DEN** as metro code (not locked).
- **Denver Coliseum** stored at 10,200 with 8,140 preserved in the note.
- **Mammoth** on ESPN without venue: lacrosse listings rely on Ball Arena Ticketmaster allowlist when keys exist.
- **Summit FC** uses three home buildings in 2026; never infer room from team name alone.
- **carShare** wired from city-type estimates (differs from Milwaukee/Tampa builds that left estimates in research only); prompted explicitly for Denver (C04 Oct 12).
