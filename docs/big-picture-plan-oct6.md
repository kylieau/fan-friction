# Fan/Friction: big-picture build plan

Oct 6, 2026. Kylie asked for everything described in the product docs that is not yet built, in one place, and an order to build it in. This is that list. The product rules it serves are in `docs/direction.md` (the log leads) and `docs/product-review-decisions.md`. The current snapshot is `MEMORY_HANDOFF.md`; small parked items stay in `BACKLOG.md`.

Each step below gets its own proposal before it is built. Kylie approves the proposal, then it is built in small commits and shown on the local site. Tick a step here when it lands on `main`.

## Locked while making this plan (Kylie, Oct 6)
- **Saved nights become Attended automatically** once the date passes. No "Did you go?" step. (Supersedes the review's §1 "Did you go?" item and the parked BACKLOG entry.)
- **Ticketmaster:** she will sign up for the free developer key when step 4 arrives, provided it stays free with no later obligation. Read the terms of use before the first call. 🚩 still applies if the free quota or terms turn out not to fit.
- **Order:** the recommended order below is approved. Event-entry notes (her UI notes) are a separate batch and come when she has them.

## What is built (for contrast)
Four tabs: Home (tonight, coming up, recent, friends), Explore (one-day map with the date strip, month sheet, search, Famous nights), Favorites (teams, artists, venues you follow, with their next dates and a page each), You (your entries, friends, stats, settings with export). A date page and an event page with the formula v4 read (Crowd fight, Conditions with real weather, a light Gridlock). Accounts on Supabase: Google and email-link sign-in, private by default, profiles with a visibility switch, following with approval. Upcoming home games for 10 Los Angeles teams from MLB and ESPN. A nightly Los Angeles schedule archive and a daily weather fetch. Stamps lock 24 hours after the last start.

## The gaps, by area

### 1. The log entry (the core unit)
| Gap | Today |
|---|---|
| Editing an entry: final score, setlist link, who you went with, a one-line note, a private photo 🚩 storage | Storage holds outcome, starter, promo, notable and a note, but no screen can add or change them. Only Kylie's migrated log has them. |
| Manual entry for a night the catalog doesn't list (a club show, an away game, a festival) | Only listed events can be logged. |
| Delete or fix a wrong entry | Un-tapping Attended is the only delete. An entry with no linked event can't be removed. |
| Backfill ("Were you there?"), "reconstructed" on old nights | Famous nights sits in the search sheet. The word reconstructed is never shown. Parked. |
| Planned-vs-stamped line, stamp "last updated" | A stamp is stored and labeled on the date page. No "Planned for Moderate, turned out Heavy." Depends on the parked 30-minute capture. |

### 2. Data
| Gap | Today |
|---|---|
| Results and attendance after a game | None. Live feeds set no crowd figure. |
| Attendance calibration (expected draw per team and bucket) | Expected draw is hand-typed on one event. Every formula constant is a placeholder. |
| Venue capacity table (review open item) | Capacities for LA venues in seeded nights only. |
| Concerts and other ticketed events (🚩 Ticketmaster free key, approved in principle) | None. Upcoming = MLB and ESPN home games only. |
| Ducks (NHL has a free feed), LAFC and Angel City, UCLA and USC basketball and other college sports, festivals, parades | No live source. |
| Away games | An entry can be marked away; no source lists them. |
| A second city | 10 metros, 9 empty. `docs/october-2026-events-prompt.md` is the research brief (LA, San Diego, Seattle, New York). |
| Catalog in Supabase as shared truth (Kylie, Oct 4) | Events are JSON in the repo. |
| Start-time capture every 30 minutes | Parked by Kylie. |

### 3. Screens and features
| Gap | Today |
|---|---|
| Compare rebuild: two nights side by side, "Compare with…" on the date page, same tour or homestand, "N Heavy nights this year" | Compare is an unlinked Coming-soon stub. You → Stats has counts by type, team, venue and heaviest. |
| Traffic mode (blue corridors, "Estimate · not live", leave time) and Gridlock zones with drive times | The Crowds/Traffic switch draws nothing. |
| Night story ("The night" on the event page) | Nothing. Parked. |
| Share card as an image (the Friction Receipt) | Text plus a link. |
| Notifications: one ping the morning of a saved night | Nothing. Needs the installable-app plumbing. |
| On-the-night facts confirmed with a tap | Nothing. |
| First-run tips rewrite ("log your first night") | Two old tips; tip 3 on hold. |
| Home city and "tips seen" in the account | Phone only. `profiles.home_metro_id` is unused. |
| Example friend rows | Three fake friends show until someone is followed. |
| Tweets from the night | On hold until access and cost are checked. |

### 4. Platform
| Gap | Today |
|---|---|
| Installable app that works offline (service worker) and can receive a push | Add-to-home-screen only. |
| Faster loads: the map library dominates a 1.3 MB bundle on every tab | One bundle. |
| Terms-of-use review per data source; name clearance | Not done. Both before anything public. |
| Native wrap 🚩 $99/year Apple | Later. |

## Order of build (approved Oct 6)
1. [x] **Entry editing and manual entry.** Built Oct 6 (local, not pushed): the event page is the entry (review, outcome, starter, promo, notable, TV, setlist, with, note; Edit; Remove from log); TV from the MLB and ESPN feeds; a + in You with search then Add it yourself; a hand-typed night's own page; Big event files a suggestion. Needs migrations 0005 and 0006 pasted into Supabase. Round 3 (Kylie): only Review and With are typed; event facts come from sources. Sport list v1 (sport, level, division, competition chips; `docs/sport-list-second-opinion-answer.md`) built the same day. Pushed Oct 6.
2. [x] **Results and attendance after games** (built Oct 6: the nightly run saves finals and announced crowds; Outcome, Starters and the box-score count show on the event page), **the Ducks, LAFC and Angel City** (built Oct 6). College basketball (UCLA and USC, men's and women's) built Oct 6 with Pauley Pavilion and Galen Center. Attendance calibration first pass built Oct 6 (`docs/calibration-oct6.md`: 16 teams' announced crowds collected, expected draws per team and day computed and applied). The LA venue table (every 5,000+ room) folded in Oct 6 from `docs/la-venue-table-answer.md`; `docs/data-sources.md` says where every number comes from. Retune analysis run Oct 6 (`docs/retune-oct6.md`): the data confirms the model's direction but can't pin the constants; recommendation is to keep the placeholders and rerun after a season of archived nights with concerts. **Step 2 is done** (Oct 6): retune placeholders kept per Kylie; hard access is a measured rule (`docs/hard-access-oct6.md`) with Dodger Stadium and Weingart on; game length added as a fact and a stat; `docs/new-city-checklist.md` written.
**Reordered Oct 6 (later), after Push Pilot's review (`docs/push-pilot-review-oct6.md`) and Kylie's approval:** prove the data path and one other city before piling on product chrome. Compare is a product call and moves to wherever Kylie wants it.

3. [x] **Map code-split.** Done Oct 6: the map library loads only where a map shows (Home's mini map, Explore). Main bundle 1,843 kB → 785 kB (gzipped 491 → 204); You, Favorites, date and event pages never fetch it.
4. [x] **Catalog write path** (`docs/catalog-proposal-oct6.md`, approved by Kylie Oct 6). Slice 1 built Oct 6: migration `0007_catalog.sql` (seven public-read tables) and `scripts/catalog-write.mjs`, run at the end of the nightly job when `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set as GitHub secrets. Slices 1 and 2 live Oct 6: the nightly job writes all seven tables (first run: 232 events, 1,421 attendance rows, 255 expected draws, the week's weather, today's snapshot) and the app reads upcoming games from the table with the feeds as fallback. Slice 3 live Oct 6: weather, results, stamp snapshots and coverage come from the tables per six-week window (`src/data/catalogCache.ts`; 16 reads for a full Explore visit, not 226); the compiled indexes left the app (main download 697 kB); a nightly data commit no longer rebuilds the site. Slice 4 (seeds): the job already writes the hand-seeded nights to `events`; the app keeps reading them from code as the source of truth, by design. The repo data files stay as the backup and the scripts' input.
5. [x] **San Diego via `docs/new-city-checklist.md`.** Done Oct 6, about three hours end to end: the jobs cover a list of cities (`COVERED_METRO_IDS`); the Padres, SDSU (football and basketball), San Diego FC and the Wave are in the feeds with their past crowds; 13 venues from Kylie's research (`docs/san-diego-venue-table-answer.md`), Frontwave Arena included; city facts set; San Diego's 27 events, weather, snapshots and a result are in the shared tables and show on Explore. The hard-access measures for the new venues land when the survey script finishes (it waits on the public elevation service).
6. [~] **Compare rebuild** (`docs/compare-proposal-oct6.md`, approved Oct 6 as written). Slices 1 and 2 built Oct 6: **Your year** in You → Stats (nights by word, your usual, heaviest and quietest; this year or all time) and **Compare with…** on a past date page or an attended event page → a picker of your nights and the Famous nights → a side-by-side (read, the three parts, what else was on, your night, weather, a two-night share card). No tab. Slice 3 built Oct 6 once concerts arrived: an upcoming event page shows the same performer's (or home team's) other dates in the city within 30 days with each day's read ("Also on" / "Same homestand"). **Compare is done** pending Kylie's review.
7. [~] **Concerts via Ticketmaster** 🚩. Slice (a) done Oct 6: `docs/ticketmaster-review-oct6.md` (free key, 5,000 calls a day; store facts not content; privacy line; honor removals; sign-up steps for Kylie). Slice (b) live Oct 6: the nightly job lists Ticketmaster's concerts and shows within the covered cities (a month at a time, facts only, venues matched by id or name, tours and parking skipped, sports left to the leagues); first full run kept 212 LA and 68 San Diego listings at known venues over four months and set aside ~2,900 at rooms under the floor (clubs, comedy, the Pantages). Concerts now sit on the map and in the catalog like games. The occasion rule's run-of-nights point now comes from the listings (`occasionFacts.run`), not the seed. (c) Kylie's notes on how a concert reads. Seattle and New York after, one at a time.
8. [~] **Then:** Traffic and Gridlock zones, Night story, the image share card, notifications, the tips rewrite. Done Oct 6: **the offline app** (a service worker keeps the app shell, the catalog's last answers for a week, map tiles and fonts; checked by reloading Explore with the network off: the same nine events and the 6.8 read) and **home city in the account**. Waiting on Kylie's decisions: the share card's look, when the one notification fires, the tips' words, a stack-parked flag.

Not in this order and still parked: the Famous nights rehome and hand-check, tweets, photos (🚩 storage), the 30-minute capture, team and artist pages beyond today's Favorite page.
