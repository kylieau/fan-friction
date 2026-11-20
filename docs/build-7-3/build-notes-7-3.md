# Build 7.3 Notes (Draft for Kylie, Nov 19, 2026)

Status: **approved as default decisions Nov 19, 2026 (Kylie: "fine with leans for now", deferring, not deliberating; each is one place to revert).** Every lean below is the decision; the items marked mock first still get a phone-size board and her yes before code. The build order: A1, C3 (no mocks), then the mocks for A2's doubleheader choice, B1, D1, D5, and D10, then B2 after B1.

Written as a draft: Written by Claude Code (Fable 5.1) from the 7.3 slate Kylie listed on Nov 4, 2026 (BACKLOG, "Slated for build 7.3"), the college attendance items that were waiting on research, her Nov 19 notes, and the open calls from the Nov 19 builds. Each item gives what she would see, the options, the builder's lean, what it touches, and whether it needs a mock before code. She can answer "fine with leans" once, or by item number. Nothing here is built until she answers. If she would rather answer item by item on a form, as for 7.2, say so and one is made from this file.

Rules that hold for every item: Title Case headings and labels, sentence case body copy, Oxford comma always, no em dashes, "Outdoor" never "Open-air", no "going" or "night" copy on screen, no "Estimated" on verdicts, inputs incredibly simple (optional, few boxes, free text over fields), mock first for any new input, screen, or flow, and build for every city.

## Start Here (Builder Prompt, once locked)

Work straight on `main`, one commit per item group, stage files by name, `node --check` on every changed script as its own command, `npm run build` before every commit and push, a Codex read-only review after each group, the advisor before each group and before calling it done, a row at the top of `docs/build-7-3/gap-report-7-3.md` per group with measured checks. Where this file changes a 7.2 lock (`docs/build-7-2/build-notes-7-2.md`), this file wins once the item is Locked.

## Section A: Carried From the Codex Findings

### A1. Plan Details Past the Catalog's 60-Day Window (Lean)
**What she sees today:** on Upcoming, a plan for a game more than 60 days out, or a season game the schedule holds but the catalog does not, shows its status icon alone with the stored title and no opponent, time, or room line; a fave's game whose listing title the app cannot parse reads its stored title instead of "vs Opponent". Since build 7.2's R5a (Nov 6) this item owns both fallbacks.
- **Option 1 (lean):** one read per such plan from the team's own schedule (the same read Season Tickets and Watching Season already make), so the row reads "vs Opponent · 7:00 pm · Room" like any other; the catalog stays 60 days.
- **Option 2:** widen the catalog window to the season's end. Rejected: the nightly's cost and the Map's load grow for every city for a handful of rows.
- **Option 3:** leave the fallback as is. Rejected: the row looks broken next to its neighbours.
- Touches `src/screens/UpcomingScreen.tsx` (the plan row), `src/data/teamSchedule.ts`. No mock: the row's shape is R5a's.

### A2. One Game Identity Across Feeds (Lean)
**What she sees today:** the same game saved through two teams' schedules (both her faves, or a team and a school calendar) can show twice on Upcoming and the date page; and when a doubleheader's game 2 is not in the loaded catalog, the event page falls back to game 1, so an answer lands on the wrong game (Codex, group 15 review, `sameGame` in `src/data/gameStub.ts`).
- **Lean:** one identity per game: match the feed's own game id first, then date and both teams; decline an ambiguous doubleheader rather than guess (the sheet says "Which game?" with the two start times). The nightly's one-game rule already drops a seller's copy of a feed game; this extends it to two feed copies.
- Touches `src/data/dedupe.ts`, `gameStub.ts`, the catalog write. Mock first for the doubleheader prompt only (a two-row choice on the Stub it sheet).

## Section B: College Attendance, Now Unblocked

The research both items waited on came back Oct 27, 2026 (`docs/research/topics/ncaa-attendance-sources-answer-codex.md`) and closed for 7.2 Section I on Nov 4 (bounded observed ranges support a room-size ceiling, never an estimate, for college sports with no source).

### B1. "Up to N" for Every Other Show, and the Unknown-Size Switch Rename (Already Built; Nov 19 Check)
**Checked Nov 19 while drawing the boards:** the ceiling line already covers any upcoming event with a room on file and no count, sellout, or estimate (7.2, R3a; `crowdCeiling` reads the listed capacity whatever the kind), shows included; and the switch was renamed "No Estimate" in 7.2 (I4, I5). Nothing to build; B2 follows directly.
**What she sees today:** a show with no count, sellout, or estimate shows its room's ceiling as "14k cap" on rows and "Up to 14,000" on the event page (R3a, Nov 4). Item M35c asked whether every other show (arts, theater, the categories with no fill share) takes the same line, and what the Crowd Size switch's "unknown size" label should say.
- **Lean:** yes, every show with a room on file takes the ceiling line (it is a fact about the room, not an estimate); the switch label reads "Rooms with no count" instead of "Unknown size". One mock of a date page row and the switch, then build.

### B2. The School Box-Score Attendance Reader (Approved in Principle, Oct 27)
**What she sees today:** college games at rooms with no attendance source show a ceiling only. The reader would give them a median announced crowd per program and room, labeled Estimated.
- **The source, from the answer:** a school's completed-game index and the visible Attendance line on each SIDEARM box score, home games only, never a hidden zero, read as personal use (Kylie, Oct 27; a future limitation to commercializing), at the site's crawl pace (USC, Boston College, and Long Beach State ask 30 seconds between pages, so a school's season is a few minutes of the nightly, once, then one page a night).
- **Lean:** build after B1's mock, as a new nightly step with its own check script and a per-school pace table, writing medians into the expected-draw tables the app already reads. No new key, no cost beyond the nightly's minutes. Not a 🚩.
- **Open:** which schools first. Lean: the covered cities' SIDEARM schools only (the answer verified that format); WMT and Presto schools wait.

## Section C: Her Nov 19 Open Calls

### C1. A Plan's Notes on the Cards Followers See (Lean: No, Not Yet)
A plan's With and Review are hers alone until the stub; the cards approved followers see carry neither. The stub's review follows the stub's level. Lean: leave plans private; a plan is an intention, not a night.

### C2. A "Went For" Side (Lean: No)
The lifetime record counts the side her stub credits (the home team on a catalog game). A game she attends for the visitor counts the home side. Lean: no new input; a tap on the opponent's name to swap the credited side could come later if it bites.

### C3. Notes Across an Interested Round Trip (Lean: Keep Them)
Switching a plan to Interested drops its With and Review today; back to Attending starts blank. Lean: carry them through Interested as the tags are not (tags are a 7.1 lock to drop; notes are hers). One line in `togglePlan`.

## Section D: Her Ten Ideas (Candidates)

Recommended for 7.3: D1, D5, and D10. The rest wait, with the reason.

### D1. Lifetime Record by Team (Already Built; Nov 19 Check)
**Checked Nov 19:** the team page's "You at Lakers games: 2–1" line (7.1) is the record by team, with the count on its second line (`mockups/round1/04`). The one choice left is wording: "2–1 when you attend" (lean) or as is.
"Dodgers 7–3 when you attend" beside the Season Watch Record on the team page: the attended half of what the watched half already shows. The data and the outcome reader exist (group 20). One mock of the card.

### D2. Quick Friction Rating at Stub Time (Lean: Wait)
A one-tap rating when stubbing. It is a new input on the sheet; ratings are evidence, never a target, so it would be hers alone. Wait: the Stub it sheet just gained two rows, and a rating before the night is a guess.

### D3. Review Nudge the Morning After (Lean: Wait)
Nothing nudges today. A push needs a service and a permission ask; an in-app line on Upcoming ("Last night: add a line?") is cheap. Wait for one quiet-line mock after 7.3's first groups.

### D4. Venue Passport (Lean: Wait)
Ranks has venues by count; "average friction at each" is new. Wait: one Ranks row per venue could carry the average verdict later without a new screen.

### D5. Streaks and Milestones (Lean: Build a Quiet Version)
First event, 10th stub, new venue, new city, most events in a month. Your Year has days in a row and new venues; add milestones as the stat tiles' second line ("your 10th stub") with no badges, confetti, or points (the guardrails). One mock.

### D6. Year in Review, Shareable (Lean: Fold Later)
Recap and Your Year exist and share. "Worst getaway" and "total friction" are new figures. Wait for the record and milestones to settle, then one mock of the recap with both.

### D7. Personal Friction vs the Crowd (Lean: No)
Needs other people's ratings; nothing collects them, and the Oct 1 decision keeps hand ratings out of the read. Not for 7.3.

### D8. Edit or Add to a Review Later (Lean: Already There, Minus Photos)
The Review row edits in place at any time, and the original verdict never changes. A private photo is new and sits near the public-photo-wall guardrail; not for 7.3.

### D9. Stub History Timeline (Lean: Exists)
My Stubs' list and calendar views are this, and the record and stats read from them. Nothing to build.

### D10. "Would Go Again" Toggle (Lean: Build, Mock First)
One tap, yes or no, on a stub: the simplest signal, and it fits the inputs rule. Per event on the stub; per venue as a count on Ranks later. One mock of the row under Your Notes.

## Section E: Signed-In Phone Checks (Carried)

For Kylie on a signed-in phone, from the 7.1 and 7.2 reports: Profile & Settings' card and Followers; the event page's level pill, including Stub it with the pill open (Tab stays inside, Escape closes the pill first); friends' plans on Upcoming; Activity's friends' lines; Settings › Privacy › Change past stubs…; a past date's day page ("estimated"); "All ›" on a team page; Past Games on her Season Tickets page; Stub it on an upcoming game (Your Notes with "who you're going with" and Review); the You tab's first tile; a UCLA stub's chip reading "UCLA MBB".

## Struck From the Slate

Kylie's questions 3 to 7 in the 7.1 report were answered on Oct 26, 2026 ("agree with your leans, drop the weather line, keep the pill on both"): Compare's title stays "Side by side", the nightly's stored `why` stays the formula's words, the weather sentence was left out and then built from the numbers in 7.2 (M3), the Up Against pill stays on both cards, and a flagged past game clears on its own. The BACKLOG lines that carried them into 7.3 were stale; struck Nov 19.

## Questions for Kylie

1. **A1 and A2:** fine with the leans (a schedule read per far-out plan; one identity per game, with a "Which game?" choice on a doubleheader)?
2. **B1:** the ceiling line on every show with a room on file, and "Rooms with no count" for the switch? One mock comes first either way.
3. **B2:** go ahead with the box-score reader after B1, SIDEARM schools in the covered cities first?
4. **C1 to C3:** plans stay private, no "went for" side, notes carried through Interested?
5. **D:** D1, D5, and D10 for 7.3 (each mock first), the rest waiting as written?
6. Anything from your phone checks (Section E) to fold in before the first group?
