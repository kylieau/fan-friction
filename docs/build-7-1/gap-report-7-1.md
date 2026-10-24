# Build 7.1 · gap report

**In progress.** Written as the build goes (a running progress log at the top; a later session resumes from it). The spec is [`build-notes-7-1.md`](build-notes-7-1.md); step numbers are its §7 (Builder prompt additions). Built by Claude Code (Fable 5.1, advisor on) straight on `main`, one commit per item group, `npm run build` before each. Kylie's stop timing (Oct 24, 2026): build steps 1–3, run Codex stage 1, then stop for her to look.

## Progress log
| Step | State | Commit | Notes |
|---|---|---|---|
| 1. Docs | done (Kylie) | `33617123` | Kylie committed `docs/build-7-1/` herself on Oct 23 at 11:38 PM; every file the notes name is present. Nothing redone. |
| 2. Pipeline: M17 | done, pushed | `1a17d7c6` | proof lands with the Oct 24 nightly (about 6 AM Pacific) |
| 2. Pipeline: M16 | done, pushed | `6e5e1a56` | headless chain check passed; the next nightly patches every archived row |
| 3. Naming: M9, M35b, M38, M20 | done, pushed | `f3f1d776`, archive rewrite `ff70d71b` | code, checks, nightly write-back; the archive rewrite is its own commit |
| 3. Naming: M21, M32 | done, pushed | `a3185759` | titles-check cases and the report for steps 2–3 |
| Kylie's answers (Oct 24, morning) | done | _(step 4 commit)_ | Q1: "whatever is truer" → `M16_KEYS_FROM` back to `2026-10-01`, every archived day's saved verdict files at the next nightly; Q2: bare sport labels stay. |
| 4. Copy sweep: M2, M8, 14b, AGENTS.md | done, pushed | _(the two commits after `cb6b3be8`)_ | headings, sheet titles, Settings rows, event labels, sport and level phrases in Title Case; ten Oxford commas plus one dynamic list; stubs retitle once more |
| Codex stage 1 | done, pushed | `6ae4e5c5`, docs `3773857d` | seven findings, six accepted in full, one in part (see "Codex findings"); plus the advisor's named-game drop-order guard; `npm run build` and the titles check pass. **Session stopped here for Kylie's look.** |

## Freeze for steps 2–3 (written before the first edit)
**In scope:** M17, M16, M9, M35b, M38, M20, M21, M32.
- M17 — Shot `shots/7-1-more/m03-hollywood-bowl-stale-weather.png`; no mock. Regression check (M4): today's Greek Theatre and Hollywood Bowl pages show the weather card.
- M16 — Shot `shots/7-1-more/m06-day-oct21-full.png`; no mock.
- M9 — Shots `shots/7-1-more/m09-event-ucla-mbb.png`, `m02-day-oct21-lineup.jpg`; mock `mockups/7-1-more/38-b.png`.
- M35b — Shots `shots/7-1-more/explore-unsized-rows.png`, `settings-crowd-unknown-size.png`; mock `mockups/7-1-more/38-b.png` (title and label line only).
- M38 — Shot `shots/7-1-more/sport-label-inconsistent.png`; mock `mockups/7-1-more/38-b.png`.
- M20 — Shot `shots/7-1-more/neutral-venue-in-title.png`; no mock.
- M21 — Shots `shots/7-1-more/uniqlo-field.png`, `dodger-stadium.png`; no mock.
- M32 — Shots `shots/7-1-more/new-york-switcher.png`, `new-york-explore.png`; no mock.

**Decisions touched:** product-decisions.md:32 (the settled read box; "Estimated from past schedules." is superseded by M16), :38 (Away at Home; a neutral site names its city on the venue line; M20 applies it), :243 (sport labels; "Football, baseball, softball and field hockey carry none" is overridden by M38), :239 (labels round 3; untouched here, M8 is step 4), build-notes-oct9 3.15 (past verdicts are frozen; M16 restores it going forward), D04 (crowd figures keep Estimated / Announced / Final; M16 does not touch them).

**Must not change:** any saved verdict (no snapshot `read` is rewritten, no history re-run); crowd-figure labels; the stamp's end-of-day fallback (held by Kylie, Oct 16); pro game titles and labels (a label only for twin clubs); the one-game rule and the add-on filter; the archive's `forecasts` arrays; anything in `private/`.

## Skipped reviews
None yet.

## What shipped per item

### M17. The weather step gets its keys (`1a17d7c6`)
- `.github/workflows/schedule-archive.yml`: the "Fetch weather" step now carries `TICKETMASTER_API_KEY` and `JAMBASE_API_KEY` (the step collects listings through the same `collectScheduleArchive` the schedule step uses, which reads both from the environment; without the keys no seller show reached the outdoor-room list). Judgment call: the JamBase key went on too, since the step reads that feed the same way; it is empty until Kylie adds the secret, so nothing changes until then.
- Regression check (M4): cannot be seen until the nightly has run with the key (the next run is about 6 AM Pacific, Oct 24). Listed under "For Kylie to check on a phone".

### M16. Saved verdicts filed where the app looks (`6e5e1a56`)
- `scripts/catalog-write.mjs` step 4: each snapshot's `data` now carries `metroId`, `capturedOn` and `capturedAt` from its file (the columns already had them; the app reads only `data` and keys it by `metroId|eventId`). The rating is written exactly as captured.
- Headless check against the Los Angeles archive, before and after: old shape → 0 capture days, Oct 21 "reconstructed" (which is what drove both the recomputed number and the "Estimated" line); new shape → 18 capture days, 14 saved rows for one Oct 21 event, Oct 21 "saved".
- "Estimated from past schedules." is gone from `DateScreen.tsx` (the `rebuilt` flag and its `scheduleCoverage` import went with it); a settled day shows its sources count like any other. product-decisions.md:32 updated.
- **Forward only, by capture day:** step 4 re-reads every snapshot file each night, so without a guard the next run would have patched every archived row at once. Codex stage 1 held the build to the Locked wording, so the keys go in only for captures from `M16_KEYS_FROM = '2026-10-24'` (one constant in `catalog-write.mjs`); earlier captures stay as they were, and days before Oct 24 keep showing a recomputed verdict that looks final, as the notes expected. Opening it up is a one-line change if Kylie wants it (question 1).

### M9, M35b, M38. School games: names only, the sport on the label line, every college game labeled
- `sidearmSource.ts`: the title is school names only, home first as every feed writes it ("UCLA vs. Cal Baptist"; the title rules render "Cal Baptist at UCLA"); the program goes on the audience (`level: 'college'`, and `division` when the feed named a side); the sport list gains field hockey, beach volleyball, cross country, rugby and fencing. New `repairSidearmRow(event)` reads a row saved the old way ("UCLA Men's Basketball vs. Cal Baptist") into the new shape, adding the team record when one matches, and returns any other row as the same object.
- Where the repair runs: (1) `catalogSource.ts`, on every row read from the shared catalog, so past days read right now, whatever is stored; (2) `scripts/catalog-write.mjs`, a nightly pass over each city's past Sidearm rows (older than the feed floor, which the pass never rewrites otherwise), writing back title, audience and team record only (the saved verdicts live in `schedule_snapshots`, untouched). The written-back rows take `captured_at: now` like every row the pass writes; that is harmless because the stale-row deletes that follow only look at dates from the floor (game feeds) or today (sellers) on, and the repaired rows are all older than the floor; (3) `scripts/archive-titles-backfill.mjs` (new), run once over `data/schedule-archive/`: 1,212 rows in 76 files, titles and audiences only, checked file by file against the previous commit (forecasts byte-identical, no other key changed, same ids in the same order).
- `types.ts`: `audience.division` on sports events (men / women), never guessed.
- `eventTitle.ts`: football, baseball, softball and field hockey join `SPORT_CODES` as sideless (FB, BSB, SB, FH); every tag regex derives from the table. `sportLabelOf` labels every college or school game: the side from a team record, else the feed's division, else the sport alone ("Volleyball", VB); the four sideless sports read alone always; pro games unchanged (twin clubs only). A bare code ("VB") and bare words ("Football") read back from saved titles.
- The opponent survives the length limit: a bare matchup (no event name, no neutral tail) is never cut to one side or an ellipsis in the row form ("UC Riverside at Cal State Fullerton" takes a second line; chips still drop the away side). Before, "UC Riverside at Cal State Fullerton (MSOC)" rendered as "Cal State Fullerton (MSOC)". Named games keep build 5's order (the event name outlives the away side: "Oklahoma · Red River Showdown"), now guarded by short-form assertions on the N17 and N18 cases (an earlier cut of this change had inverted that order; the advisor caught it before it was pushed).
- product-decisions.md:243 updated (the Oct 15 exemption is overridden). titles-check gains the M9, M35b, M38, repair, M20 and M21 cases; two existing cases now expect the football label ("USC at UCLA (FB)"; "Wisconsin at UCLA · Football" splits as a label).

### Step 4 freeze (written before the first edit, Oct 24 morning)
- In scope: M2 (Title Case on every heading, sub-page title, label and sport name), M8 (every event label Title Case), item 14b (Oxford commas), the AGENTS.md copy rules. Shots: `shots/7-1-more/m02-day-oct21-lineup.jpg`, `you-headers-faves.png`; mock `mockups/7-1-more/01-b.png` ("Wednesday's Lineup").
- Decisions touched: product-decisions.md:239 (labels round 3 casing), :244 (March Madness words), build-notes-5.md:923 ("'s lineup"); Kylie's Compare heading "Your nights, side by side." (Oct 5 lock) is not touched.
- Must not change: any string that is body copy, a helper line, a button, a placeholder or an empty-state sentence; the Verdict / friction vocabulary (`scoreLabels.ts`); stored data.

### M2, M8, 14b. The copy sweep
- **Headings and titles (M2):** "{Weekday}'s Lineup" (date page), "About This Verdict", "Further Out" (date page, Explore list, event page, Settings, the (i) card), "Up Against", "This Day", "More Dates", "Your Stubs" (page, timeline, You), "Your Year" (You, page, back label, ladder), "Your Events" (Settings, Compare), "Your Plans" (band and filter row), "Edit Favorites", "Browse by League", "Famous Dates", "On This Date", "Most Seen", "By Month", "By Category", "By Venue · per Visit", "By Team", "Spend Details", "Happening Now · Today", "Log an Event" (the sheet), "New Stub", "Edit Stub" (the form), "Add Tags", "Playoff Games", "Filter Activity / Filter Your Stubs / Filter Upcoming", "All People", "Team or Sport", "Favorite Cities", "Favorite Teams & Artists", "Crowd Size", "Review Queue", "Profile & Settings" (the avatar's label), the Explore week band ("This Week's Lineup", "Week of Oct 26 · Lineup").
- **Sport and level words:** `levelPhrase` keeps its words capitalized ("Women's College", "Girls' High School"), the level chips read "Minor League" / "High School", and the quick-add type line reads "Women's Water Polo".
- **Event labels (M8):** "Home Opener", "Spring Training" (and ", Cactus League"), "First Round", "Second Round", "Third Round", "Regional Semifinal", "Regional Final", "{AHL} Playoffs"; a label read back from a saved title is Title Cased on the way (`titleCaseLabel`), so stubs saved as "(Home opener)" read right; `TITLE_VERSION` bumps to `title-case-b71` so every log takes the names once.
- **Oxford commas (14b):** "Attending, Watching, and Interested"; "a team, artist, or venue" (Upcoming ×2, Favorites placeholder and label, the Log sheet, Calendar and New Stub searches); "attend, watch, or are interested in"; "Anyone, Friends, or Private"; "letters, numbers, or dashes" (×2); "Unopposed, Squeezed, Swamped, or Steamrolled"; "announced, reported, or estimated"; the gridlock line's "{A}, {B}, and N more".
- **AGENTS.md:** both rules added under the UI copy rule.
- **Left as is, on purpose:** buttons ("Edit stub", "+ Stub it", "Add to calendar"), placeholders, helper lines and empty states ("No one here", "Not in your log"); `aria-label`s that only name a control; Compare's "Side by side" title (Kylie's Oct 5 wording "Your nights, side by side." is a lock; see Questions); "Neutral site" in a title tail (M33's copy, step 12); the Settings group label "App" (M19 renames it "App & Account" in step 11).

### M20. No venue in a favorite's title at a neutral site
- `teamRelativeTitle` reads "vs. {opponent}" at a neutral site with no venue tail; the row's facts line already names the place (team page: "Tue, Oct 13 · T-Mobile Arena").

### M21. One venue name per building
- `gameStub.ts` exports `gameVenueName(game, metroId?)`: the schedule row's venue string matched to the app's room (the game's city first, then anywhere) and shown by its name on that date, else the feed's string. Used in `useFavoriteRows.ts` (Upcoming's faves rows) and `FavoritePage.tsx` (the away / neutral facts line). `venues.ts`: aliases for "UNIQLO Field at Dodger Stadium" and the United Airlines Field spellings of the Coliseum.
- Checked on Upcoming with the Dodgers followed: "UNIQLO" appears nowhere; 19 rows read "Dodger Stadium".

### M32. "New York City"
- `metros.ts`: the metro's `name` is "New York City"; new `metroMatchesSearch(metro, typed)` matches the name or the start of the code, so "new york" and "nyc" both find it; the three city searches (the switcher, Where's home?, Favorite cities) use it. The region, id and code are unchanged.

## Not exactly as decided
| Item | Decided or drawn | Shipped | Why | Easy to change? |
|---|---|---|---|---|
| M17 | "the same Ticketmaster key" | the JamBase key too | the step reads that feed the same way; empty until the secret exists | yes |
| M9 / M35b | build 5 drop order for rows: year → away team → tag → truncate | a bare matchup over 32 characters keeps both sides and wraps instead of dropping the away side; named games keep build 5's order | the notes' "the opponent survives the title length limit"; the mock draws both schools; the short form allows two lines | yes |
| M38 | "every college and school game gets a sport label line" / "gendered sports keep Men's / Women's" | a feed that names no side shows the sport alone ("Volleyball") rather than nothing or a guessed side | 357 stored rows say only "Volleyball"; a bare sport names no side, so the men's-and-women's-alike rule holds | yes |
| M9 | "Backfill the stored rows' titles and team records" | three places: on read, nightly write-back, and the repo's archive files | the app reads past days from Supabase, whose older rows the nightly never rewrote; a read-time repair shows the fix today | yes |

## Visual checks
After-shots are in `docs/build-7-1/shots/after/` (the signed-out test browser at 390 × 844; the same files under the git-ignored `.playwright-mcp/7-1/`).
- M9 / M38 / M35b (date page lineup, 390 × 844): `shots/after/after-m09-date-oct23-lineup-long.png` beside `shots/7-1-more/sport-label-inconsistent.png` and `mockups/7-1-more/38-b.png`: **matches** the mock's pattern (school names only, "Women's Volleyball" / "Men's Soccer" label line under the title, venue under that); every row measured 390 wide, no clipping; the longest title ("Cal State Fullerton at Long Beach State") wraps to two lines (36 px at an 18 px line height). The day's games differ from the mock's (today's catalog); the shot's "Cal State Fullerton Women's Soc…" form no longer occurs.
- M9 (event page): `shots/after/after-m09-event-lbsu-wvb.png` beside `shots/7-1-more/m09-event-ucla-mbb.png`: the title reads "Cal State Fullerton at Long Beach State" with "Women's Volleyball" on the label line and "Type Volleyball" below (the page text was read out directly; two of the headless captures came back blank before the data landed, so the saved capture is the third).
- M20 (team page, Results): `shots/after/after-m20-lakers-results.png` beside `shots/7-1-more/neutral-venue-in-title.png`: **matches**: "L 89–101 vs. Warriors · Preseason · Tue, Oct 13 · T-Mobile Arena", the venue on the facts line only.
- M21 (Upcoming, Dodgers followed): `shots/after/after-m21-upcoming-dodgers.png` beside `shots/7-1-more/uniqlo-field.png` and `dodger-stadium.png`: **matches**: no "UNIQLO" anywhere on the page, 19 rows read "Dodger Stadium".
- M32: `shots/after/after-m32-home-picker-nyc.png` beside `shots/7-1-more/new-york-switcher.png`: typing "nyc" lists "New York City" alone. This is the first-open "Where's home?" sheet, which uses the same search rule and list; the headless browser kept that sheet open after a city was tapped, so the switcher itself (the shot's screen) was not captured. **For Kylie:** open the switcher, type "nyc" and "new york"; both should list New York City.
- M16 / M17: no screen to capture yet; the nightly proves them (see "For Kylie to check on a phone").
- **Step 4 (M2, M8, 14b), measured:** a headless sweep of twelve screens (date page, a school game's page, Upcoming, Activity, Explore list, Compare, You, Your Stubs, Your Year, New Stub, Profile & Settings, a team page) collected every heading, title, band and label element and tested each against the rule (every word capitalized except the short joining words unless first; event titles, count lines, sentences and buttons excluded). Three misses were found and fixed in the same pass (the team page's "Your events", Settings' "Unknown size", the Explore band's "· N events"); the sweep then reported none. After-shots: `shots/after/after-m02-date-lineup-heading.png` ("Saturday's Lineup", beside `shots/7-1-more/m02-day-oct21-lineup.jpg` and the mock's "Wednesday's Lineup": **matches**) and `shots/after/after-m02-settings.png` ("Profile & Settings", "Favorite Cities", "Favorite Teams & Artists", "Crowd Size"; the M19 layout is step 11). "Home Opener" showed on the Oct 21 Warriors at Lakers row in the Explore list (M8).

## Removed or moved
- M16: the "Estimated from past schedules." line under a verdict on days from before the archive (date page). Nothing else.
- M20: the " · {venue}" tail on a neutral-site title on a favorite's rows; the venue stays on the facts line.

## What I didn't do, and why
- The M4 regression check on the Hollywood Bowl and Greek Theatre pages: needs the nightly to have run with the key; listed for Kylie / the next session.
- M21 at the source: the feeds' raw `venueName` is still stored on `team_schedules` rows; the fix is at display, which covers rows already stored. A naming-rights spelling the matcher can't place still shows raw until it gets an alias; the nightly's "placed loosely" log is where new ones surface.

## Conflicts between the notes and the code
- The notes say "Stored rows are under `data/schedule-archive/`" for the M9 backfill, but the app reads past days from the Supabase `events` table (`catalogSource.ts`), and the nightly never rewrites a row older than its 7-day floor; `.env.local` holds no service-role key, so a local rewrite of the table was not possible. Resolved with the read-time repair plus the nightly write-back (see M9).
- Codex stage 1, on record: a title ending in a literal "(BB)" or "(SB)" (a concert's own tail, say) would now be read as a squad tag, since the tag parser has no event context. Neither archive sample held one; worth a glance in the nightly's title scan if one ever appears.
- §8 says `teamRelativeTitle` adds the venue only at neutral sites; it did (" · {venueName}"), and the shot's row came from `useFavoriteRows.ts`, which builds the same string. One change covered both.

## Advisor calls
1. **Before any edit (Oct 24, about 12:45 AM Pacific).** Asked: review the plan for steps 2–3 (M17 env key; M16 writer keys; Sidearm titles with the program moved to the label; sideless sport codes for football, baseball, softball and field hockey; a Sidearm backfill; M20 drop the neutral venue from the title; M21 resolve the feed's venue string at display time with an alias list; M32 rename plus search aliases). It said: store Sidearm titles as "Home vs. Away" like ESPN (a literal "at" title falls to the named branch and loses its label); route the sideless sports through `SPORT_CODES` since every tag regex derives from it; the app reads past days from Supabase `events`, not the archive files, and the nightly never rewrites rows older than its floor, so make the renderer tolerate the old stored shape as well as backfilling, or hand Kylie SQL; M16's data patch reaches every archived row at the next run (nothing recomputed), which is not "forward only" in effect, so record it and reshape the question for Kylie; the weather step also calls JamBase, decide on that key; fix M21 at the three render spots because `team_schedules` rows are already stored; M32 can match the metro code as the "NYC" alias. Did: all of it (details under each item).

2. **After steps 2–3 were pushed (Oct 24, about 1:10 AM Pacific), before calling them done.** It said: the row-form drop-order change reaches named games too (N17 "Red River Showdown", N18 "East LA Classic", the Florida–Georgia neutral case), whose short forms would now drop the event name before the away side, against build 5's order, and those cases assert the full form only, so the check didn't catch it; the report linked after-shots under the git-ignored `.playwright-mcp/`; fill the commit hashes; MEMORY_HANDOFF.md still says the notes haven't landed; `FavoritePage.tsx` still hands the raw feed venue to `loggedRowPath`; the M32 capture was the Where's-home sheet, not the switcher; say in one line why `captured_at: now` on the written-back rows is harmless. Did: the after-shots moved into `docs/build-7-1/shots/after/`; hashes filled; the `captured_at` line added under M9; `loggedRowPath` checked (the venue only feeds `isFurtherOutRoom`, which looks the name up; nothing displays it); the M32 note made honest; the drop-order fix and the short-form assertions done after the Codex findings (below), in one commit; MEMORY_HANDOFF.md rewritten at the stop.

3. **After the Codex fixes were committed (`6ae4e5c5`), before the push and the stop.** It said: the proof instructions for M16 were written before Codex finding 1 and still promised Oct 21 would show 5.3 (it won't; the first day that can show a saved verdict is Oct 24, once it settles), and the M17 check assumed today has a Bowl or Greek show; push before the 6 AM nightly, since the pushed `6e5e1a56` keys every archived row and the forward-only guard was still local; record the `(BB)` / `(SB)` concert-tail risk; confirm the "1 of 334 rows lose the visitor" scan line is a named game; kill the dev server on 3002. Did: all of it (the proof lines corrected here and in MEMORY_HANDOFF.md; the risk under "Conflicts"; the scan line checked; one docs commit, then fetch and push).

## Codex findings
**Stage 1** (steps 2–3, run on the diff `33617123..a3185759`, Oct 24 about 1:15–1:25 AM Pacific; read-only; it type-checked and ran the title cases in memory). Seven findings:
1. **M16 not forward-only in effect** (medium). **Accepted:** the keys now go in only for captures from `2026-10-24` (`M16_KEYS_FROM`); the question for Kylie records the alternative.
2. **M38 missed a favorite team's schedule rows** (`teamRelativeTitle` carried no sport label, so a college program's "vs. Michigan St" on Upcoming, the team page and the next-home card had none; medium). **Accepted:** `scheduleLabelOf` composes the program's sport label (`teamSportLabel`) with the stage label, the way an event's label is; the three callers pass the team id; pro clubs unchanged. Checked by two new title cases.
3. **Existing stubs and plans keep their old titles** (`TITLE_VERSION` had already run on her devices; medium). **Accepted:** bumped to `school-labels-b71`, so every log takes the new names once more; hand-entered titles are untouched by that pass, as before.
4. **Recurring: the visitor's record stays text** ("Cal Baptist" although `cal-baptist-mbb` exists, so a favorite gets no credit for its away games; medium). **Accepted** for the source and the repair (both resolve the visitor's record where one matches, and a row that already had its home side gets its visitor filled). **Rejected** for the archive files: the archive never carried team records (its condensed shape is ids, titles, places, audiences), so there is nothing to backfill there; the records live in the catalog table, which the nightly pass fills.
5. **M21 could rename a room after a namesake in another city** ("The Pavilion" → Finneran Pavilion; medium). **Accepted:** the game's city first, then anywhere only when exactly one room goes by the name, else the feed's words.
6. **A bare beach volleyball label read back as "Boys' Volleyball"** (BVB = B + VB; medium). **Accepted:** a bare label whose code would parse as a sided one keeps its words inline ("USC at UCLA (Beach Volleyball)"); every other bare code stays a code.
7. **The repair regex could re-split a school whose name ends in a sport word** ("Academy of Football"; low). **Accepted:** a row written since the fix carries `audience.level`, and the repair skips any row that has it, so no row is read twice.

Found fine: the archive rewrite (titles and audiences only, forecasts byte-identical), the nightly repair's pagination, floor and error handling, the M16 keys against every reader, the away-row direction ("at UCLA" stores "UCLA vs. Cal Baptist", renders "Cal Baptist at UCLA"), high-school and twin-club labels, concert parentheses, M20, M32, the workflow key scope, no verdict-facing "Estimated" left, no privacy leak, route or type error.

## Checks run
- `npm run build`: passes before each commit (M17, M16, step 3).
- `node scripts/titles-check.mjs`: all passed after step 3 (two cases updated for M38, eleven added for M9, M35b, M38, M20 and M21, plus the repair's pass-through cases), and again after the Codex stage 1 fixes (short-form assertions on N17 / N18 / Florida–Georgia; schedule-row labels; bare beach volleyball; the visitor's record; the repair guard; the namesake room).
- Step 4: `npm run build` and `node scripts/titles-check.mjs` pass with the Title Case labels (the check's own expectations moved with them: "Home Opener", "Spring Training, Cactus League", "AHL Playoffs"); the archive scan lists "Men's Cross Country" and "Women's Volleyball" label lines on the school rows.
- `node scripts/event-types-check.mjs`, `copies-check.mjs`, `city-build-check.mjs`: pass (copies: 0 possible copies across 40 cities; city build: all passed). Nothing was already failing.
- M16 chain check (scratch script, both row shapes primed into `catalogCache`): recorded under M16.
- The titles-check archive scan (`la 2026-10-23`) reports one row losing its visitor in the short name: a Ticketmaster listing titled "San Diego Toreros Mens Basketball at UCLA Bruins Mens Basketball · Exhibition", a named game (the " · Exhibition" tail), so build 5's order applies; not a bare matchup slipping past the new rule. Pre-existing; the seller's title carries program words that only the school feed's rows were cleaned of (the ESPN or Sidearm copy of that game wins by the one-game rule when both list it).
- Archive rewrite check: 76 files, 1,212 rows, keys changed = title, audience; forecasts and every other field byte-identical to the previous commit; 0 problems.

## Superseded rules updated
- `docs/product/product-decisions.md:32`: the "Estimated from past schedules." line (M16).
- `docs/product/product-decisions.md:243`: "Football, baseball, softball and field hockey carry none" (M38).
- `docs/product/product-decisions.md:239` (labels round 3 casing) and `:244` (March Madness words): Title Case since M8. `AGENTS.md` UI copy rule: the Title Case and Oxford comma rules added.

## For Kylie to check on a phone
- After the Oct 24 nightly (about 6 AM Pacific): the next Ticketmaster show at the Hollywood Bowl or the Greek Theatre in the coming days shows the weather card on its event page (M17 / M4).
- M16, from about Oct 26: Oct 24 is the first day that can show a saved verdict (it settles 24 hours after its last start), with no "Estimated" line anywhere. Oct 21 stays at the recomputed 6.4, not the shot's saved 5.3, unless she moves `M16_KEYS_FROM` back (question 1).
- A past school game's page and the Oct 21 lineup read with school names only and the sport on the label line (M9), signed in, on her phone.

## Research prompts (M35)
Not yet (step 14).

## Manual steps for Kylie, in order
_(filled as the build goes)_

## Questions for Kylie
1. **M16, pre-fix verdicts.** Built as Locked: only captures from Oct 24 carry their keys, so days before Oct 24 keep showing a recomputed verdict that looks final (the Oct 21 shot stays 6.4, not the saved 5.3). The saved ratings for every day since each city's archive began are sitting in the same files, and the writer re-reads them every night; moving one constant (`M16_KEYS_FROM` in `scripts/catalog-write.mjs`) back to `'2026-10-01'` would file them all at the next run with nothing recomputed. Lean: open it up, since the saved number is the truer one. Your call.
3. **M2 and Compare's title.** Compare's page title reads "Side by side" and its heading "Your nights, side by side." is your Oct 5 wording (a lock, and a sentence). Title Case would make it "Side by Side". Left as is; say the word and it changes. The sign-in card's "Keep your log safe" and the empty-state card titles ("No Faves yet", "No stubbed events") were read as sentences, not headings, and left in sentence case.
2. **M38, a feed that names no side.** 357 stored school rows say only "Volleyball" (or "Soccer", "Basketball"). They now read with the sport alone on the label line ("Volleyball"). The alternative was no label on those rows, against "no exceptions". OK as built?

## Builder's-call decisions
- M17: the JamBase key goes on the weather step beside the Ticketmaster key (the step reads both feeds the same way).
- M9 / M35b: a matchup over 32 characters keeps both schools and wraps to a second line; it is never cut to the home side or an ellipsis.
- M38: a bare feed program gives a bare sport label ("Volleyball", code VB); the side is never guessed.
- M9: the backfill runs in three places (read, nightly write-back, the repo's archive files) because the app reads past days from the table, not the files.

## Season games beyond the catalog window
Not yet (step 10).
