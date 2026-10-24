# Build 7.1 · gap report

**In progress.** Written as the build goes (a running progress log at the top; a later session resumes from it). The spec is [`build-notes-7-1.md`](build-notes-7-1.md); step numbers are its §7 (Builder prompt additions). Built by Claude Code (Fable 5.1, advisor on) straight on `main`, one commit per item group, `npm run build` before each. Kylie's stop timing (Oct 24, 2026): build steps 1–3, run Codex stage 1, then stop for her to look.

## Progress log
| Step | State | Commit | Notes |
|---|---|---|---|
| 1. Docs | done (Kylie) | `33617123` | Kylie committed `docs/build-7-1/` herself on Oct 23 at 11:38 PM; every file the notes name is present. Nothing redone. |
| 2. Pipeline: M17 | | | |
| 2. Pipeline: M16 | | | |
| 3. Naming: M9, M35b, M38 | | | |
| 3. Naming: M20, M21, M32 | | | |
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
_(filled per step)_

## Not exactly as decided
| Item | Decided or drawn | Shipped | Why | Easy to change? |
|---|---|---|---|---|

## Visual checks
_(per item, after-shot path and "matches" or "differs")_

## Removed or moved
_(none yet)_

## What I didn't do, and why
_(filled as the build goes)_

## Conflicts between the notes and the code
_(filled as the build goes)_

## Advisor calls
1. **Before any edit (Oct 24, about 12:45 AM Pacific).** Asked: review the plan for steps 2–3 (M17 env key; M16 writer keys; Sidearm titles with the program moved to the label; sideless sport codes for football, baseball, softball and field hockey; a Sidearm backfill; M20 drop the neutral venue from the title; M21 resolve the feed's venue string at display time with an alias list; M32 rename plus search aliases). It said: store Sidearm titles as "Home vs. Away" like ESPN (a literal "at" title falls to the named branch and loses its label); route the sideless sports through `SPORT_CODES` since every tag regex derives from it; the app reads past days from Supabase `events`, not the archive files, and the nightly never rewrites rows older than its floor, so make the renderer tolerate the old stored shape as well as backfilling, or hand Kylie SQL; M16's data patch reaches every archived row at the next run (nothing recomputed), which is not "forward only" in effect, so record it and reshape the question for Kylie; the weather step also calls JamBase, decide on that key; fix M21 at the three render spots because `team_schedules` rows are already stored; M32 can match the metro code as the "NYC" alias. Did: all of it (details under each item).

## Codex findings
_(per stage)_

## Checks run
_(filled per commit)_

## Superseded rules updated
_(filled per commit)_

## For Kylie to check on a phone
_(filled as the build goes)_

## Research prompts (M35)
Not yet (step 14).

## Manual steps for Kylie, in order
_(filled as the build goes)_

## Questions for Kylie
_(filled as the build goes)_

## Builder's-call decisions
_(filled as the build goes)_

## Season games beyond the catalog window
Not yet (step 10).
