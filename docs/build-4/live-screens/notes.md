# Fan/Friction — city view reference (read-only, origin/main @ 35777d5, captured Mon Oct 12 2026 ~9:40 AM PT)

App run locally (`npm run dev`, copy in /tmp/ff-run), Playwright headless Chromium, 390x844 @2x, home city = Los Angeles.
No Supabase env was set, so the app fell back to live MLB/ESPN/HockeyTech feeds from the browser — no Ticketmaster concerts appear in the running app (see (c)).

## (a) Screens
| File | Shows | Code |
|---|---|---|
| explore-header.png | Explore (map view): "Los Angeles" area switcher, Today button, search, horizontal day strip with score/label per day ("Quiet", "No data") | src/screens/ExploreScreen.tsx → src/screens/MapScreen.tsx, src/components/AreaSwitcher.tsx, DayStrip.tsx, SearchButton.tsx |
| city-switcher-open.png | Area menu open: Los Angeles (home), Atlanta, Austin, Bay Area, Boston… | src/components/AreaSwitcher.tsx (list from metrosWithEvents, src/data/index.ts) |
| calendar-view.png | Explore `?view=calendar`: month grid with day scores + "Famous dates" list — the closest existing date list | src/screens/CalendarScreen.tsx (+ MonthSheet.tsx) |
| search-empty.png | Search sheet, empty ("Search a team, artist or venue"), quick picks Today / This weekend / Pick a date | src/components/SearchSheet.tsx |
| search-dodgers.png | Search "Dodgers": matching events (NLCS games, Oct 4 seeded night) | src/components/SearchSheet.tsx |
| date-page.png | /date/2026-10-14: day score, "This day in Los Angeles" list (one event: NLCS G3 Brewers @ Dodgers 5:08 pm), local competition | src/screens/DateScreen.tsx (DayTimeline.tsx, ChipCard.tsx) |
| event-page.png | /event/2026-10-14-mlb-849811: NLCS G3 Brewers at Dodgers, Stub it, expected crowd ~54,000, same homestand | src/screens/EventScreen.tsx |
| team-page.png | /favorites/team/dodgers: Dodgers record, next at Dodger Stadium, schedule/results list | src/screens/FavoritePage.tsx |
| artist-page.png | /favorites/artist/slayer (played LA Oct 4): artist page — no upcoming dates near home or elsewhere (no concert feed in app) | src/screens/FavoritePage.tsx |

There is NO existing screen that lists all upcoming events for a city across days; the date page is per-day only.

## (b) Event data horizon
- Live list source: `src/data/index.ts` EVENT_SOURCES = seed + `catalogSource` → Supabase `events` table, written nightly by `scripts/catalog-write.mjs` (GitHub Action `.github/workflows/schedule-archive.yml`). Fallback when the table is unreachable/empty: MLB, ESPN, HockeyTech feeds called directly (not Ticketmaster). Feed code fetches 120 days ahead (`DAYS_AHEAD = 120` in mlb/espn/hockeytech/ticketmasterSource.ts), so the catalog *can* hold ~4 months; that table is not in the repo, so its real horizon could not be checked.
- On-repo data: `data/schedule-archive/<city>/YYYY-MM-DD.json` keeps only a **14-day window** (`horizonDays: 14`). Seed `src/data/seed/listings2026.ts` has a few hand-seeded nights to 2027-01-01 (NY/ATL/DFW only).

| Metro | Archive files | Latest file | Window | Latest event date | Events in latest file | Sources with events |
|---|---|---|---|---|---|---|
| la | 8 | 10-11 | 10-11→10-25 | 2026-10-25 | 75 | mlb 3, espn 19, ticketmaster 53 |
| new-york | 6 | 10-11 | 10-11→10-25 | 2026-10-25 | 53 | espn 27, tm 25, seed 1 |
| dallas-fort-worth | 5 | 10-11 | →10-25 | 2026-10-25 | 52 | espn 12, tm 34, seed 8 |
| milwaukee | 1 | 10-11 | →10-25 | 2026-10-25 | 46 | mlb 4, espn 2, hockeytech 3, tm 40 |
| chicago | 5 | 10-11 | →10-25 | 2026-10-25 | 38 | espn 12, ht 3, tm 26 |
| bay-area | 5 | 10-11 | →10-25 | 2026-10-25 | 31 | espn 11, tm 20 |
| san-diego | 6 | 10-11 | →10-25 | 2026-10-25 | 30 | espn 4, ht 3, tm 23 |
| atlanta | 5 | 10-11 | →10-25 | 2026-10-25 | 29 | espn 9, tm 20 |
| seattle | 6 | 10-11 | →10-25 | 2026-10-25 | 22 | espn 6, ht 3, tm 19 |
| montreal | 5 | 10-11 | →10-25 | 2026-10-25 | 14 | espn 5, ht 3, tm 9 |
| boston | 1 | 10-12 | 10-12→10-26 | 2026-10-26 | 11 | espn 11 (no TM) |
| houston | 1 | 10-12 | →10-26 | 2026-10-26 | 11 | espn 11 (no TM) |
| minneapolis | 1 | 10-12 | →10-26 | 2026-10-25 | 11 | espn 11 (no TM) |
| toronto | 1 | 10-12 | →10-26 | 2026-10-25 | 11 | espn 7, ht 4 (no TM) |
| nashville | 1 | 10-12 | →10-26 | 2026-10-25 | 10 | espn 10 (no TM) |
| tampa | 1 | 10-12 | →10-26 | 2026-10-24 | 10 | mlb 4, espn 6 (no TM) |
| columbus | 1 | 10-12 | →10-26 | 2026-10-24 | 8 | espn 8 (no TM) |
| austin | 1 | 10-12 | →10-26 | 2026-10-24 | 7 | espn 5, ht 2 (no TM) |
| sacramento | 1 | 10-12 | →10-26 | 2026-10-25 | 6 | espn 6 (no TM) |
| phoenix | 1 | 10-12 | →10-26 | 2026-10-25 | 5 | espn 5 (no TM) |
| kansas-city | 1 | 10-12 | →10-26 | 2026-10-25 | 4 | espn 4 (no TM) |
| new-orleans | 1 | 10-12 | →10-26 | 2026-10-24 | 4 | espn 4 (no TM) |
| vancouver | 1 | 10-12 | →10-26 | 2026-10-25 | 3 | espn 3 (no TM) |
| mexico-city, philadelphia, las-vegas | 0 | — | — | no archive data | — | in metros.ts but no schedule archive |

## (c) LA events per ISO week (on-repo archive)
Counted from LA archive files (latest file 2026-10-11 for upcoming; union of all 8 files deduped by event id for context).

| ISO week | Dates | Latest file | Union of files | Mix (union) |
|---|---|---|---|---|
| 2026-W41 | Oct 5–11 | 4 (only Oct 11 in window) | 33 | espn 5, mlb 1, TM music 26, TM other 1 |
| 2026-W42 | Oct 12–18 | **35** | 36 | espn 13, mlb 3, TM music 16, TM other 4 |
| 2026-W43 | Oct 19–25 | **36** | 37 | TM music 29, TM other 2, espn 6 |
| W44+ | Oct 26 → | no data | no data | archive window ends Oct 25 |

Median of the full upcoming weeks (W42, W43): **35.5** (only 2 weeks of forward data exist on-repo; "next several weeks" cannot be computed). Including W41 from the union, the three full weeks are 33/36/37, median 36.
- Included: sports (MLB, ESPN: NFL/NBA/NHL/MLS/college etc.) and Ticketmaster concerts/shows (domain music/other) — Ticketmaster is in the LA archive (53 of 75 events in latest file).
- Gaps: the running app does NOT show TM concerts when Supabase is absent (fallback feeds exclude TM), and the artist page shows no dates; HockeyTech had 0 LA events; 13 of 23 archived metros have no Ticketmaster at all; W40 contains only hand-seeded Oct 4 data.
