# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Further out fold, show estimates and the Broadway houses, and former names; open questions follow, then build follow-ups under **Next**). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 27, 2026 (about 12:30 AM Pacific), Claude Code (Opus 5.5 as builder, Fable as advisor, Codex as read-only reviewer), at `main`'s head after `27a7d825`, pushed. Kylie's standing instructions: build straight on `main`, pushed, no branches or PRs; `git fetch` first (the nightly pushes to `main` at about 6–8 AM Pacific; a first `git fetch` this session silently missed two nightly commits, so check `git status -sb` after it); stage files by name; every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done; Codex read-only reviews after each item group, and (Oct 26) the advisor and Codex check each other's findings before any tweak._

## Current state
**Nothing in progress; everything committed, pushed and verified** (`npm run build`; `node scripts/city-build-check.mjs`, `addon-filter-check.mjs`, `storage-check.mjs`, `titles-check.mjs`, `venue-match-check.mjs` and the new `shared-ids-check.mjs` all pass). Done after the first sync (Oct 26–27), all from the next nightly:
- **Racetracks and rodeo grounds take every Ticketmaster sports listing** (Kylie, Oct 26: "good with your lean"): 86 rooms in 32 cities, 33 inside a city, of which 27 can now reach a verdict at their full listed size (Homestead, Sonoma, the Milwaukee Mile, COTA among them). Race-weekend camping, VIP, weekend-admission and multi-day passes drop as add-ons.
- **Further out delivery 11 folded** (`further-out-rooms-answer-11.md`, in full): 64 rooms for Milwaukee and the Los Angeles extras, 22 inside a city (Summerfest's five stages, Brookside at the Rose Bowl at 50,000, LA State Historic Park, the F&M Bank Amphitheater, SilverLakes at 62 min, nine college and school stadiums), 23 with Ticketmaster ids; hard access measured with Open-Meteo's elevations (8 meet the rule; Hilmer Lodge Stadium the one inside). **The city-by-city brief is finished. Continuation 11** (clearing the holds on the 29 inside-city rooms that still carry one) is at the end of `further-out-rooms-prompt.md`; save the answer as `further-out-rooms-answer-12.md`.
- **Second review round** (Codex, reconciled with the advisor): Brookside's Ticketmaster id was on the Rose Bowl (its festivals would have read 60,000 at the stadium), fixed, with a check for ids shared inside one city; multi-day race passes drop; T-Mobile Stage reads 5,700 before its 2018 rebuild. Parked for Kylie (BACKLOG): one festival admission listed at several Summerfest stages (nothing doubles today), junior-college football at 6,000+ rooms reading the room's size, two older shared ids (Seattle Center / Climate Pledge, Prudential Center / NJPAC).

Done earlier on Oct 26:
- **Further out delivery 10 folded** (`further-out-rooms-answer-10.md`, saved in full; the delivery 10 block in `src/data/venues.ts`): 83 rooms for Portland, Raleigh–Durham, St. Louis and Pittsburgh, 15 inside a city (Salem's L.B. Day and Pavilion at 60–61 min under the app's 64-minute rule), 49 with Ticketmaster ids. Two "Truist Stadium"s share Raleigh–Durham; a listing by name now goes to the nearer room. **Continuation 10 (Milwaukee, then the Los Angeles extras, the brief's last)** is at the end of `further-out-rooms-prompt.md`; save the answer as `further-out-rooms-answer-11.md`.
- **Hard access measured** for the 750 rooms added since Oct 23: 26 meet the rule, 11 inside a city (listed in BACKLOG's Further out section). `venue-access.mjs --new` used to drop every earlier row when run without a city; fixed.
- **Add-on filter:** a seller's "Suites - <event>" listing drops (Philadelphia's Big 5 Classic suite listing). An older rule drops any *show* with "suite" anywhere in its name; unchanged, flagged to Kylie.
- **Show estimates (Kylie, Oct 26, option B):** non-concert shows carry an Estimated figure only where a published number covers them: the 41 Broadway houses 91.2%, the Met 75%, the Radio City Christmas Spectacular 5,556 a show, indoor Québec show rooms by size (`SPECIAL_ROOM_FILL`, `SPECIAL_RUNS`, `QUEBEC_FILL_BANDS` in `expectedDrawBuild.ts`; `specialDraw` in `expectedDraw.ts`). The (i) card opens with the source sentence. The 39 Broadway houses not on file were added (Wikipedia seats, reported); New York gains about 36 shows a day. A by-id Ticketmaster window over 1,000 results splits in two.
- **M16 verified:** Oct 21 Los Angeles reads its saved 5.3 Spicy with no "Estimated" line.
- **Build 7.1 questions 3–7 answered** (Kylie, Oct 26): the leans stand, no weather summary line, the pill on both cards; nothing changed in code.
- **Research saved:** `arts-fill-rates-answer-codex.md` (in full; folded in part as the show estimates above).
- **Reviews:** Codex's five findings on today's work, reconciled with the advisor: fixed, the same-name room routing, seven arenas tagged with their resident's sport (WesBanco gains 4,700 hockey) so concerts take the 57% rule, the (i) card's source line; a warning for a one-day Ticketmaster overflow; racing and rodeo rooms getting no Ticketmaster sports listings went to Kylie and is now built (above). Bank of Springfield Center, Cabarrus Arena and the Salem Pavilion stay untagged (no sourced resident sport).
- The Oct 26 nightly's weather step failed for Tampa, Kansas City and San Antonio (fetch failed; yesterday's rows kept). Check tonight's run.
- The working tree is clean apart from two untracked `.agents/skills/source-command-*` folders that aren't ours (likely Codex's); leave them unstaged.

## Key decisions in force (newest first)
- **Oct 26 (Kylie):** show estimates only from published figures (above; display and pull only, the friction gate for shows still goes by the room; a hand-seeded non-concert show in a 6,000+ room would pull at its estimate, as seeded concerts do). Everything else waits for "Up to N", mocked with the M35c switch rename once the college attendance answer is in. Build 7.1 questions 3–7 answered as above.
- **Oct 24–25 (Kylie):** event rows: your answer is its icon alone; the outdoor weather right after the venue name, no separator; the tag always last; the calendar legend removed.
- **Further out folds:** every row of the research's two tables comes in (holds in the capacity note); outer-boundary records and leads outside the tables stay out; sides by `node scripts/further-out-drive.mjs <metro>` (report first, `--write` only when the differing rooms are the new ones); Ticketmaster ids with `node scripts/ticketmaster-venues.mjs --ids=<new ids>`, exact names 1.5–10 km added by hand after a look; former names that would collide inside one city stay out; an arena gets its resident's sport as the setup so concerts take the 57% rule.
- **Working notes:** headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file; the date page is `/date/<date>?metro=<id>`; the Playwright browser can capture a blank frame before data lands (wait for text); port 3001 belongs to another session (this one used 3003, stopped); macOS has no `timeout`. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still no free client id (Oct 26). **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Answer two questions** (BACKLOG, "Show estimates and the Broadway houses"): a festival admission listed at several Summerfest stages; junior-college football at 6,000+ rooms reading the room's size.
3. **Phone checks signed in** (the 7.1 report's list), the row icons, the weather beside the venue name, and **New York on the Map** (39 new muted pins in Midtown) and a Broadway show's event page.
4. **Research to run:** Further out Continuation 11 (the holds); the college attendance prompt (`docs/research/topics/ncaa-attendance-sources-prompt.md`).
5. **The M15 seed, when she wants test account A filled:** `docs/reference/test-account-seed.md` (dry run first; agents never run its write path or open her export).

## Next
1. Ask Kylie for new UX notes and her answers to the two questions above.
2. Read the Oct 27 nightly log: the weather step for Tampa, Kansas City and San Antonio; New York's Ticketmaster page count and any "only the first 5 are read" warning; Broadway listings placed; the first race and rodeo listings (Homestead's NASCAR weekend is Nov 6–8) and any add-on that slipped through; the delivery 10 and 11 cities' verdicts.
3. When the college attendance answer arrives: save it, then mock "Up to N" and the M35c switch rename together.
4. When delivery 12 (the holds) arrives: save it and apply each cleared or failed hold to its room.

**Next command to run:**
```bash
git fetch && git status -sb && git log --oneline -5 && gh run list --limit 2
```
