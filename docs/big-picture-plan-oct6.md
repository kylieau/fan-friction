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
2. [~] **Results and attendance after games** (built Oct 6: the nightly run saves finals and announced crowds; Outcome, Starters and the box-score count show on the event page), **the Ducks, LAFC and Angel City** (built Oct 6). College basketball (UCLA and USC, men's and women's) built Oct 6 with Pauley Pavilion and Galen Center. Attendance calibration first pass built Oct 6 (`docs/calibration-oct6.md`: 16 teams' announced crowds collected, expected draws per team and day computed and applied). The LA venue table (every 5,000+ room) folded in Oct 6 from `docs/la-venue-table-answer.md`; `docs/data-sources.md` says where every number comes from. Still to do: the retune of the placeholder constants (approved by Kylie Oct 6; plan in `docs/calibration-oct6.md`).
3. [ ] **Compare rebuild.** **Do not start until Kylie says so** (Oct 6: she wants to save and transfer everything first). Two nights side by side, "Compare with…" on the date page, this-year stats.
4. [ ] **Concerts via Ticketmaster** 🚩 (free key; read the terms first) and **a second city** from the October research.
5. [ ] **Then:** Traffic and Gridlock zones, Night story, the image share card, notifications and the offline app, home city in the account, the tips rewrite.

Not in this order and still parked: the Famous nights rehome and hand-check, tweets, photos (🚩 storage), the 30-minute capture, team and artist pages beyond today's Favorite page.
