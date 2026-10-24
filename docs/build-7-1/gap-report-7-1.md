# Build 7.1 · gap report

**In progress.** Written as the build goes (a running progress log at the top; a later session resumes from it). The spec is [`build-notes-7-1.md`](build-notes-7-1.md); step numbers are its §7 (Builder prompt additions). Built by Claude Code (Fable 5.1, advisor on) straight on `main`, one commit per item group, `npm run build` before each. Kylie's stop timing (Oct 24, 2026): build steps 1–3, run Codex stage 1, then stop for her to look.

## Progress log
| Step | State | Commit | Notes |
|---|---|---|---|
| 1. Docs | done (Kylie) | `33617123` | Kylie committed `docs/build-7-1/` herself on Oct 23 at 11:38 PM; every file the notes name is present. Nothing redone. |
| 2. Pipeline: M17 | done, pushed | `1a17d7c6` | proof lands with the Oct 24 nightly (about 6 AM Pacific) |
| 2. Pipeline: M16 | done, pushed | `6e5e1a56` | headless chain check passed; the next nightly patches every archived row |
| 3. Naming: M9, M35b, M38 | done | _(see git log)_ | code, checks, nightly write-back; the archive rewrite is its own commit |
| 3. Naming: M20, M21, M32 | done | _(see git log)_ | |
| Codex stage 1 | | | |

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
- **Not forward-only in effect:** step 4 re-reads every snapshot file in the repo each night and upserts on `metro_id,captured_on,event_id`, so the next run patches every archived row at once (nothing is recomputed; the saved ratings are the ones captured at the time). From that run on, every day since each city's archive began shows its saved verdict, not only days captured after the fix. Recorded under "Not exactly as decided" and "Questions for Kylie".

### M9, M35b, M38. School games: names only, the sport on the label line, every college game labeled
- `sidearmSource.ts`: the title is school names only, home first as every feed writes it ("UCLA vs. Cal Baptist"; the title rules render "Cal Baptist at UCLA"); the program goes on the audience (`level: 'college'`, and `division` when the feed named a side); the sport list gains field hockey, beach volleyball, cross country, rugby and fencing. New `repairSidearmRow(event)` reads a row saved the old way ("UCLA Men's Basketball vs. Cal Baptist") into the new shape, adding the team record when one matches, and returns any other row as the same object.
- Where the repair runs: (1) `catalogSource.ts`, on every row read from the shared catalog, so past days read right now, whatever is stored; (2) `scripts/catalog-write.mjs`, a nightly pass over each city's past Sidearm rows (older than the feed floor, which the pass never rewrites otherwise), writing back title, audience and team record only (the saved verdicts live in `schedule_snapshots`, untouched); (3) `scripts/archive-titles-backfill.mjs` (new), run once over `data/schedule-archive/`: 1,212 rows in 76 files, titles and audiences only, checked file by file against the previous commit (forecasts byte-identical, no other key changed, same ids in the same order).
- `types.ts`: `audience.division` on sports events (men / women), never guessed.
- `eventTitle.ts`: football, baseball, softball and field hockey join `SPORT_CODES` as sideless (FB, BSB, SB, FH); every tag regex derives from the table. `sportLabelOf` labels every college or school game: the side from a team record, else the feed's division, else the sport alone ("Volleyball", VB); the four sideless sports read alone always; pro games unchanged (twin clubs only). A bare code ("VB") and bare words ("Football") read back from saved titles.
- The opponent survives the length limit: the row form's drop order is now year → event name / tag, and a matchup is never cut to one side or an ellipsis ("UC Riverside at Cal State Fullerton" takes a second line; chips still drop the away side). Before, "UC Riverside at Cal State Fullerton (MSOC)" rendered as "Cal State Fullerton (MSOC)".
- product-decisions.md:243 updated (the Oct 15 exemption is overridden). titles-check gains the M9, M35b, M38, repair, M20 and M21 cases; two existing cases now expect the football label ("USC at UCLA (FB)"; "Wisconsin at UCLA · Football" splits as a label).

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
| M16 | "Forward only. Nights saved before the fix keep the recomputed verdict." | The next nightly patches every archived row (the writer upserts every file each night), so every day since the archive began shows its saved verdict | One upsert, nothing recomputed; filtering by capture day would be an artificial rule just to hide saved verdicts | yes (filter the pass by `capturedOn`) |
| M17 | "the same Ticketmaster key" | the JamBase key too | the step reads that feed the same way; empty until the secret exists | yes |
| M9 / M35b | "the opponent survives the title length limit" (Codex focus) | a matchup over 32 characters keeps both sides and wraps instead of dropping the away side | the mock draws both schools; the short form allows two lines | yes |
| M38 | "every college and school game gets a sport label line" / "gendered sports keep Men's / Women's" | a feed that names no side shows the sport alone ("Volleyball") rather than nothing or a guessed side | 357 stored rows say only "Volleyball"; a bare sport names no side, so the men's-and-women's-alike rule holds | yes |
| M9 | "Backfill the stored rows' titles and team records" | three places: on read, nightly write-back, and the repo's archive files | the app reads past days from Supabase, whose older rows the nightly never rewrote; a read-time repair shows the fix today | yes |

## Visual checks
- M9 / M38 / M35b (date page lineup, 390 × 844): `.playwright-mcp/7-1/after-m09-date-oct23-lineup-long.png` beside `shots/7-1-more/sport-label-inconsistent.png` and `mockups/7-1-more/38-b.png`: **matches** the mock's pattern (school names only, "Women's Volleyball" / "Men's Soccer" label line under the title, venue under that); every row measured 390 wide, no clipping; the longest title ("Cal State Fullerton at Long Beach State") wraps to two lines (36 px at an 18 px line height). The day's games differ from the mock's (today's catalog); the shot's "Cal State Fullerton Women's Soc…" form no longer occurs.
- M9 (event page): `.playwright-mcp/7-1/after-m09-event-lbsu-wvb.png` beside `shots/7-1-more/m09-event-ucla-mbb.png`: the title reads "Cal State Fullerton at Long Beach State" with "Women's Volleyball" on the label line and "Type Volleyball" below (the page text was read out directly; two of the headless captures came back blank before the data landed, so the saved capture is the third).
- M20 (team page, Results): `.playwright-mcp/7-1/after-m20-lakers-results.png` beside `shots/7-1-more/neutral-venue-in-title.png`: **matches**: "L 89–101 vs. Warriors · Preseason · Tue, Oct 13 · T-Mobile Arena", the venue on the facts line only.
- M21 (Upcoming, Dodgers followed): `.playwright-mcp/7-1/after-m21-upcoming-dodgers.png` beside `shots/7-1-more/uniqlo-field.png` and `dodger-stadium.png`: **matches**: no "UNIQLO" anywhere on the page, 19 rows read "Dodger Stadium".
- M32: `.playwright-mcp/7-1/after-m32-home-picker-nyc.png` beside `shots/7-1-more/new-york-switcher.png`: typing "nyc" lists "New York City" alone (the first-open "Where's home?" sheet, which uses the same search rule; the switcher itself reads the same list).
- M16 / M17: no screen to capture yet; the nightly proves them (see "For Kylie to check on a phone").

## Removed or moved
- M16: the "Estimated from past schedules." line under a verdict on days from before the archive (date page). Nothing else.
- M20: the " · {venue}" tail on a neutral-site title on a favorite's rows; the venue stays on the facts line.

## What I didn't do, and why
- The M4 regression check on the Hollywood Bowl and Greek Theatre pages: needs the nightly to have run with the key; listed for Kylie / the next session.
- M21 at the source: the feeds' raw `venueName` is still stored on `team_schedules` rows; the fix is at display, which covers rows already stored. A naming-rights spelling the matcher can't place still shows raw until it gets an alias; the nightly's "placed loosely" log is where new ones surface.

## Conflicts between the notes and the code
- The notes say "Stored rows are under `data/schedule-archive/`" for the M9 backfill, but the app reads past days from the Supabase `events` table (`catalogSource.ts`), and the nightly never rewrites a row older than its 7-day floor; `.env.local` holds no service-role key, so a local rewrite of the table was not possible. Resolved with the read-time repair plus the nightly write-back (see M9).
- §8 says `teamRelativeTitle` adds the venue only at neutral sites; it did (" · {venueName}"), and the shot's row came from `useFavoriteRows.ts`, which builds the same string. One change covered both.

## Advisor calls
1. **Before any edit (Oct 24, about 12:45 AM Pacific).** Asked: review the plan for steps 2–3 (M17 env key; M16 writer keys; Sidearm titles with the program moved to the label; sideless sport codes for football, baseball, softball and field hockey; a Sidearm backfill; M20 drop the neutral venue from the title; M21 resolve the feed's venue string at display time with an alias list; M32 rename plus search aliases). It said: store Sidearm titles as "Home vs. Away" like ESPN (a literal "at" title falls to the named branch and loses its label); route the sideless sports through `SPORT_CODES` since every tag regex derives from it; the app reads past days from Supabase `events`, not the archive files, and the nightly never rewrites rows older than its floor, so make the renderer tolerate the old stored shape as well as backfilling, or hand Kylie SQL; M16's data patch reaches every archived row at the next run (nothing recomputed), which is not "forward only" in effect, so record it and reshape the question for Kylie; the weather step also calls JamBase, decide on that key; fix M21 at the three render spots because `team_schedules` rows are already stored; M32 can match the metro code as the "NYC" alias. Did: all of it (details under each item).

## Codex findings
_(per stage)_

## Checks run
- `npm run build`: passes before each commit (M17, M16, step 3).
- `node scripts/titles-check.mjs`: all passed after step 3 (two cases updated for M38, eleven added for M9, M35b, M38, M20 and M21, plus the repair's pass-through cases).
- `node scripts/event-types-check.mjs`, `copies-check.mjs`, `city-build-check.mjs`: pass (copies: 0 possible copies across 40 cities; city build: all passed). Nothing was already failing.
- M16 chain check (scratch script, both row shapes primed into `catalogCache`): recorded under M16.
- Archive rewrite check: 76 files, 1,212 rows, keys changed = title, audience; forecasts and every other field byte-identical to the previous commit; 0 problems.

## Superseded rules updated
- `docs/product/product-decisions.md:32`: the "Estimated from past schedules." line (M16).
- `docs/product/product-decisions.md:243`: "Football, baseball, softball and field hockey carry none" (M38).

## For Kylie to check on a phone
- After the Oct 24 nightly (about 6 AM Pacific): today's Hollywood Bowl and Greek Theatre event pages show the weather card (M17 / M4), and a settled day such as Wed, Oct 21 shows its saved verdict (5.3 in the shot) with no "Estimated" line (M16).
- A past school game's page and the Oct 21 lineup read with school names only and the sport on the label line (M9), signed in, on her phone.

## Research prompts (M35)
Not yet (step 14).

## Manual steps for Kylie, in order
_(filled as the build goes)_

## Questions for Kylie
1. **M16, pre-fix verdicts.** The fix reaches every archived row at the next nightly (the writer upserts every snapshot file each night), so days from before the fix will show the verdict saved at the time, not the recomputed one, from Oct 24 on. The notes expected those days to keep the recomputed verdict. Keep it this way (lean: yes, it is the saved number, and nothing was re-run), or hold the fix to days captured from Oct 24?
2. **M38, a feed that names no side.** 357 stored school rows say only "Volleyball" (or "Soccer", "Basketball"). They now read with the sport alone on the label line ("Volleyball"). The alternative was no label on those rows, against "no exceptions". OK as built?

## Builder's-call decisions
- M17: the JamBase key goes on the weather step beside the Ticketmaster key (the step reads both feeds the same way).
- M9 / M35b: a matchup over 32 characters keeps both schools and wraps to a second line; it is never cut to the home side or an ellipsis.
- M38: a bare feed program gives a bare sport label ("Volleyball", code VB); the side is never guessed.
- M9: the backfill runs in three places (read, nightly write-back, the repo's archive files) because the app reads past days from the table, not the files.

## Season games beyond the catalog window
Not yet (step 10).
