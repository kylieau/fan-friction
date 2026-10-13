# Build 3 review form: decisions

Kylie, submitted Oct 12, 2026, 10:23 PM PT (43 of 43 answered). All choices final; Notes quoted verbatim. Card text: `_form_build3c/items.json`. Checked against origin/main `35d34f3` (read-only).

Counts: 17 decided with build/data work · 19 decided, no build work · 2 open (R01, R08) · 5 Kylie manual steps not yet done (M02–M06).

Answers that differ from the lean: R01, R07, R08, R10, C08, C15, V02 (vs Mosaic), V04 (vs Mosaic), V06 (her own words), V10.

---

## City view gaps (Explore Map/List) — all decided, build in build 4

### V01 Chip size with the activity line — DECIDED
- Choice: **Agree: only chips with activity grow, to about 58pt (same width and style)**. Notes: none.
- Rationale: Mosaic's lean. Chips without activity stay exactly as live; matches the approved r5 board ("a chip grows upward so it stays anchored above its pin").
- Rejected: Keep 44pt and squeeze three lines with smaller type (breaks the 11pt minimum); Keep 44pt; the activity line replaces time · crowd when Activity is on (loses time and crowd on the map).
- Build: Supersedes the Oct 4 "The box does not grow" and the fixed 112×44 of L1b for chips with an activity line only. Width (112), padding and style unchanged; the chip grows upward from its pin.

### V02 Which popup goes — DECIDED
- Choice: **Change: remove the Why card; keep the month sheet for search's "Pick a date"**. Notes: none.
- Rationale: Read box and date both go straight to the date page, matching decision 7's wording. (Differs from Mosaic's lean.)
- Rejected: Agree (Mosaic's lean): remove the month/date sheet; keep the Why card — kept build 3 §4.3, but contradicted decision 7's "read box opens the date page"; Remove both (search's "Pick a date" loses its picker).
- Build: On Explore Map, the read box and the date open that day's date page; remove the `WhyCard` there (`MapScreen.tsx:273, 467`). Keep `MonthSheet` for search's "Pick a date" (`MapScreen.tsx:211, 470`). Supersedes build-notes-3 §4.3 and `product-decisions.md:88` (read box → Why popup). `WhyCard` is used only on MapScreen, so it leaves the app.

### V03 Map view header layout — DECIDED
- Choice: **Agree: city name left at 24pt, Map/List switch and search right; read box + date + ‹ Today › row and day strip underneath, unchanged**. Notes: none.
- Rationale: Mosaic's lean; smallest change to the live Map — only the top row changes.
- Rejected: Fold the read box and date into the title row (saves height; busier; not drawn).
- Build: Map view top row = the shared 24pt title row (§1.2) with the Map/List switch and search; everything below stays as live.

### V04 "THIS WEEK · N events" line in List — DECIDED
- Choice: **Change: keep it**. Notes: none.
- Rationale: Gives the week's count at a glance. (Differs from Mosaic's lean.)
- Rejected: Agree (Mosaic's lean): drop it; the calendar covers it.
- Build: Keep the "THIS WEEK · OCT 12–18 · 36 events" line under the calendar (as drawn in r3 / K1). ⚑ The boards only draw it for the current week; what it says when you scroll to another week isn't specified — flag, don't invent.

### V05 Calendar while the list scrolls — DECIDED
- Choice: **Agree: rows follow the list week by week; no-read day is a plain grey number; label spans months ("Oct – Nov 2026")**. Notes: none.
- Rationale: Mosaic's lean; never fakes a read.
- Rejected: Rows stay on the current three weeks (simpler; calendar stops tracking the list).
- Build: As chosen.

### V06 Chips: long names, who is shown, +N, overlap — DECIDED
- Choice: **Something else (her words): "Name friends only, never me. Order friends Attending, then Watching, then Interested. +N counts the other friends with a status at that event. Long friend names end in "…", but +N is never cut. On overlap, the chip for the soonest event sits on top."**. Notes: the text above (form) — matches her chat answer.
- Rationale: Space: the user's own status shows elsewhere (chat: "i dont think need to name the user, just social").
- Rejected: Mosaic's lean + my "You first"; Friends before You (moot).
- Build: Chip line names one friend only, never the user; order Attending > Watching > Interested; +N = other friends with a status; truncate the name with "…", never the +N; overlap: soonest event's chip on top. Form text matches the chat answer already in these notes.

### V07 Today pill vs. the Map's Today button — DECIDED
- Choice: **Agree: match styles**. Notes: "i want it to look as consistent/same as possible, but idk if it can look exactly the same as the map's "today" since the background would be different..".
- Rationale: One look for "Today". Visual only; placement differs by view (pill floats in List, button sits in the Map header).
- Rejected: Keep them different.
- Build: Make the List Today pill and the Map's Today button as visually alike as possible (shape, type, color treatment). Where the pill floats over list content, adjust only what's needed for contrast (e.g. shadow/fill) and note it in your summary.

### V08 Days with no events in List — DECIDED
- Choice: **Agree: hidden in the list, still shown in the calendar**. Notes: none.
- Rationale: Mosaic's lean; tighter list. Tapping such a day jumps to the next day with events.
- Rejected: Show the day header with "No events".
- Build: As chosen.

### V09 List range: how far ahead and how far back — DECIDED
- Choice: **Forward as far as the catalog has events; back to the start of last month**. Notes: "do we have a limitation that would prohibit us from scrolling as far back as the catalog has events? what are they".
- Rationale: Shows every real event; uses what exists.
- Rejected: Limit to the three calendar weeks (hides later games); Ask Mock Mosaic to draw it first (slower).
- Build: Build as chosen (forward: as far as the catalog has events; back: start of last month). Answer to her question is in Open questions (Q-V09) — the range may widen if she wants.

### V10 Famous dates until the Stats pass — DECIDED
- Choice: **Hide it until it lands in Stats**. Notes: "make sure this goes on the next build (or the backlog) though".
- Rationale: Cleaner now. (Differs from my lean, "keep".)
- Rejected: Leave it where it lives today until the Stats pass.
- Build: Hide Famous dates (`CalendarScreen.tsx:186`) wherever it shows (the month sheet and `?view=calendar`). Don't delete the code or data. Add a BACKLOG item: "Famous dates → Stats tab (Mock Mosaic Stats pass)".


## Decided: build or data work in build 4

### R04 Older stubs' single crowd number (⚑3)
- Choice: **"Label it Announced if the box score has a count, else Estimated"** (lean). Notes: none.
- Rationale: it is the suggested rule, uses real data, and keeps every number. Old stubs then match new ones; nothing is lost.
- Rejected: "Label them all Estimated" (undersells real counts); "Leave them unlabeled" (old and new stubs look different).
- Build: a rerunnable migration/backfill (`src/data/crowdFigures.ts`) that moves each pre-Oct-12 untagged `crowd` into Announced when the event's box score has attendance, else Estimated. Never overwrite a filled field. Closes BACKLOG ⚑3.

### R10 Small polish batch
- Choice: **Something else**: *"I'm fine with the 8-9 px (across the board). Fix others."*
- Rationale: two of the three broke rules she set; she accepts the 8–9 px read-box words.
- Rejected: "Fix all three in the next build"; "Leave for a later polish pass".
- Build: (1) retitle the page "+ Stub it" opens (`src/screens/AddEntryScreen.tsx:74`; also `HomeScreen.tsx:220`) from "Log an event" to match "+ Stub it" ⚑ exact title not given — use "Stub it" and flag; (3) give the empty Faves picker a page title like the other tabs. (2) Keep the 8–9 px read-box words everywhere; record the exception to the 11pt minimum in the decisions log.

### C01 Tampa or Tampa Bay
- Choice: **"Tampa Bay"** (lean). Notes: none.
- Rationale: what locals and every team use, and the area covers St. Pete and Clearwater. Code stays TPA.
- Rejected: "Tampa (as built)".
- Build: `src/config/metros.ts:146-148` name → "Tampa Bay"; code TPA unchanged.

### C03 Boston's separate opponent file
- Choice: **"Fold it into expectedDrawIndex.ts"** (lean).
- Rationale: one pattern for every city; numbers don't change.
- Rejected: "Keep the separate file".
- Build: merge `src/data/expectedDrawIndexBostonOpponents.ts` into `src/data/expectedDrawIndex.ts`; drop the import at `src/data/expectedDraw.ts:7`. No value changes (diff the computed draws before/after).

### C11 Phoenix: Cardinals road games
- Choice: **"Add the fix to the next build"** (lean).
- Rationale: a real bug with a small fix; makes Faves and away games right.
- Rejected: "Leave it".
- Build: road games where Arizona is the visitor store `arizona-cardinals`, not `cardinals` (St. Louis keeps `cardinals`).

### C15 Second Chicago city-type answer (Astra)
- Choice: **Something else**: *"rebuild chicago based on incorporating the astra notes"*.
- Rationale: her call; Astra's answer adds Wrigley 2013 (36.7% driving) and a Ryan Field concert projection (58%) and says the car share isn't established region-wide.
- Rejected: "Keep hub; record Astra as agreeing; fix the stale BACKLOG line"; "Also fold Astra's Ryan Field / Wrigley figures into the notes"; "Reopen Chicago's type".
- Build: ⚑ scope open (see Open questions). Until answered, only the safe part: fold Astra's figures into the Chicago notes and fix the stale BACKLOG line ("Chicago and Boston are still assumed transit in CITY_TYPE").

### C16 Other city leftovers (batch)
- Choice: **"Confirm all; check the Saints feed next build"** (lean). Note: *"as long as this has been double checked/verified"*.
- Rationale: each follows the feed or a sourced point; only the Saints check needs action.
- Rejected: "Change some".
- Build: check the Saints Oct 25, 2026 Paris game isn't placed at the Superdome; re-verify items (2)–(7) against their sources and list which were re-checked in your summary.

## Decided: no build work
- **R02** Home's place (K23): "Open a second-opinion prompt before changing anything" (lean). No build; the prompt is a separate task.
- **R03** Neutral-site flag: "Leave ⚑6 open; no change" (lean).
- **R05** Final crowd: "Leave Final empty until a real source exists" (lean). Her note (verbatim, definitions to log): *"Announced is the official figure published by the team, league, promoter, or organizer. For sports and concerts it's released during or after the event and usually counts tickets sold or distributed. Keep the name, because it matches the term fans already see in box scores and reports, and add a source label like "from the team" or "per organizers." Don't call it Predicted or Expected, because both suggest a forecast. Estimated is an independent figure from police, media, researchers, or your app. It's most useful for free public events, where it often disagrees with the organizer's claim. Final is a counted headcount from scans or turnstiles. It's rarely made public for any event type, so leave it empty until a real source exists. The display rule (Final, else Announced, else Estimated) falls back to Announced cleanly, which supports your R05 lean."* ⚑ The "add a source label like 'from the team'" is new UI copy → Open questions.
- **R06** DH labels: "Leave off until a feed has it" (lean).
- **R07** Your-team emphasis: "Defer to a later mock pass" (not the lean, "bold names"). Her question, answered: the line comes from the event-naming research (`docs/research/topics/event-naming-at-vs.md:9,21`: "Solve that with emphasis and team-relative views, not by reordering"; "6. Emphasis, not reordering, for the user's team (e.g. bold/tint)"), carried into build-notes-3 §3.2 ("Emphasize the user's team; don't reorder"). It was Mock Mosaic's research rule, not a comment on a specific page.
- **R09** Five Claude calls: "Confirm all five" (lean).
- **R11** "Friction": "Keep it; decide after the Oct 13 tester interview" (lean). Note: *"keep friction for that scale ladder, but i think i want to name date read as "date verdict" (maybe this is internal only)"* → Open questions.
- **C02** Tampa past crowds: "Wait and batch" (lean). Note: *"make sure to put this in the backlog"* → BACKLOG city-gaps item.
- **C04** Car shares: "Keep the city default everywhere" (lean). Note: *"why else do we gather this information? why would we exclude it?"* → Open questions.
- **C05** Range-only capacities: "Keep blank" (lean). Note: *"add this information to the list of city gaps on the backlog that i might want to fix"* → BACKLOG city gaps (room list from the card).
- **C06** Capacity conflicts: "Confirm all as built" (lean). Note: *"also note in the city gap on backlog"* → BACKLOG city gaps.
- **C07** Rooms at 5,000: "Count each on its sourced figure" (lean).
- **C08** City names/codes: Something else: *"give me a research prompt for this"* → research prompt to write; no build.
- **C09** City types: "Confirm all as built (provisional)" (lean). Note: *"give me a research prompt for this also (to assess across all cities logged)"* → research prompt.
- **C10** Postseason pool rows: "Keep the added rows" (lean). Note: *"add future plan of all-city pool rebuild to the city gap backlog"* → BACKLOG.
- **C12** Ticketmaster ids: "Batch the id lookup as one later task" (lean). Note: *"let me know if this is an issue with future cities being built—we are building more cities as we speak / i might need to instruct cursor to do better"* → Open questions.
- **C13** Missing feeds: "Wait and batch" (lean).
- **C14** Open-site crowds: "Leave off the map; add to the unsized list" (lean). Note: *"give me a research prompt to find a solution for this"* → research prompt; add to `docs/reference/unsized-events.md`.
- **M01** Migrations 0023–0025: **Done**.

Kylie's manual steps still **Not yet** (keep in §7 of the notes): M02 where-watched privacy spot-check, M03 log crowd figures (now after R04's backfill), M04 nightly date label, M05 tester readiness (K16), M06 phone checklist (K17).

BACKLOG docs work in build 4 (text only): C02, C05, C06, C10 city-gap entries; V10 Famous dates → Stats; R05 definitions in the decisions log.

## Open questions for the next review form
- **R01** Private watch Where? picker. She picked "Leave Private with the full Where? picker" (not the lean) with: *"I'm confused. Home should be able to be public or private, since public can be an invitation, but private is just for own logging."* Her note matches what's decided (build 3: Home preset for both Private and Friends); the card was only about whether Private also shows recent places / Search places. Re-ask plainly with a picture; don't change StubSheet until then.
- **R08** Team colors on Faves: picked "Add team colors (data work per team, every city)" (not the lean) with *"if this is just research, nbd, give me the prompt"*. Unclear whether to build. Next step: a research prompt for team colors; build only after.
- **R05 follow-up** New copy: a source label on Announced ("from the team", "per organizers") — where it shows, and the words per source.
- **R11 follow-up** "Date verdict" for the date read: user-facing rename or internal term only?
- **C04** Why gather car shares and not use them? Explain: estimates aren't measured; the rule wires only measured splits. Ask whether to wire research estimates after all.
- **C12** Is the missing Ticketmaster key an issue for cities being built now? (Yes: agents without the key can't verify room ids, so new cities ship with no concerts.) Ask whether to add the lookup to the new-city checklist / give agents a key path.
- **C15** "Rebuild Chicago with the Astra notes": what changes — city type stays hub per both answers; rewire car shares from Astra's figures; or a full rebuild? Ask.
- **C16** Which items need re-verification by whom before closing.
- **V09** Her question: limits on scrolling back to the catalog's start. Facts (origin/main `35d34f3`): the nightly catalog keeps past dates (`scripts/catalog-write.mjs:111-123` only deletes stale rows from today on), so past events exist back to each city's first capture — LA from Oct 4, 2026 (`data/schedule-archive/la/2026-10-04.json`), New York Oct 6, Milwaukee Oct 11, many cities Oct 12. Before that there's nothing except hand seeds. When Supabase is unreachable the app falls back to live feeds, which serve from today on (no past). Reads exist only for dates with a snapshot. So "as far back as the catalog" is possible; ask if she wants that instead of "start of last month".
- **V04 scope** What the "THIS WEEK" line says when the list is on another week.
- **Research prompts she asked for:** C08 (city names and codes), C09 (city types across all cities), C14 (open-site crowds), R08 (team colors).
