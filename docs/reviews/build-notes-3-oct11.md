# Fan/Friction Build 3 notes (Oct 11, 2026)

Base: `origin/main` at `186de30` (contains `f57e0e1`; app code unchanged since `ca04cff`). File:line refs checked against that commit.

## How to build
- One commit per step, straight to main. No PRs, no branches.
- Privacy and data-loss first (Section 0), then the rest in order.
- New migrations start at **0023** (last is `0022_unfollow.sql`) and must be safe to rerun (`if not exists`, `create or replace`, `drop … if exists`).
- Log every decision with its reason and rejected options in the product decisions log (see ⚑1 on the path).
- Commit mocks to `docs/design/` and research to `docs/research/`, and link them from the log.
- Users are capable: say less, no fine print.
- ⚑ marks something open or ambiguous. Don't build it; flag it in your summary.

Mocks and research to commit:
- `docs/design/build3/` gets `DECISIONS.md`, the 8 nav PNGs (`1-read-boxes-date`, `2a-explore-activity-chip`, `2b-explore-sheet-layout`, `3-date-page`, `4-stubs`, `5-favorites`, `6-friends`, `7-stub-it-sheet`), `call11b-crowd-hybrid.png` and `call12-up-against.png`.
- `docs/research/event-naming-at-vs.md`.

---

## 0. Privacy and data loss (first)

### D01 Where you watched can't be saved or read at all (fix)
- Kylie's choice: "Fix it in a new migration (0023)". Note: none.
- Bug: the select policy reads `watch_places` inside its own rule (`supabase/migrations/0021_watch_places.sql:34-47`, self-query at `:42-45`), so it recurses. Save errors are ignored (`src/data/watchPlaces.ts:24,27`, and `:35` for clear).
- Build: migration `0023` moves the "am I shared for this event" check into a small `security definer` function so the policy no longer reads its own table. Show "Couldn't save, try again" when a save fails.
- Rationale: watched places are broken for everyone today, and failures are silent. Decided against: none recorded (the only option on the card).

### D02 Anyone signed in can see every shared place for every event (fix)
- Kylie's choice: "Fix: names plus \"3 people here\"". Note (verbatim): "but the name and also number count should only encompass people you follow"
- Bug: `event_watch_places` is a view that runs with the owner's rights and groups every public row (`0021_watch_places.sql:50-56`).
- Build (same migration as D01, or `0024`): drop the view. Add a server function that, for one event, returns place names and counts **only from people you follow**, leaves out anyone blocked either way, and only answers when you're sharing for that event yourself.
- Rationale: Kylie wants counts, scoped to people you follow. Decided against: "names only, no counts" (Mock Mosaic's lean).
- Who counts (Kylie, Oct 11): following requires approval, so the people you follow are your approved friends. Keep the helper "Approved friends will see where you're watching" as is. Rationale: consistent with D02. Rejected: "People you follow will see where you're watching".

## 1. Data and the nightly job

### D03 Final figure wins (keep as built)
- Choice: "Final figure wins (keep as built)". Note: none.
- `src/data/personalLog.ts:608-611` and `:621-637`. This now applies to the **highlighted** figure in D04. No stored figure gets overwritten.
- Rationale: none recorded beyond "keep as built". Decided against: none recorded.

### D04 Crowd: separate Estimated, Announced and Final (supersedes the card's "one upgrade")
- Card choice: "Allow one upgrade from estimate to announced". Note (verbatim): "i just want to clarify that there can be different numbers for a single event: estimated, announced (predicted), final/actual (?) and these numbers should be updated but never replace another. what changes is the number that's highlighted everywhere else, but the event page should always have all of them? (estimated only if there is no announced number), but announced and final/actual should always stay on the page..? check me on this"
- Mock Mosaic decision (Kylie approved Oct 11, mock `call11b-crowd-hybrid.png`): replace the single locked `crowd`/`crowdLocked` (`personalLog.ts:608-637`; lock window `src/data/read.ts:38`) with three fields, **Estimated**, **Announced** and **Final**. Each is filled when known and none overwrites another.
- Highlighted figure: Final > Announced > Estimated.
- Event page: a big highlighted figure (dark bold text, pale-gold row, `#E3A600` bar, crowd mark). Small rows always list Announced and Final when present. Hide Estimated once Announced exists.
- Everywhere else: only the highlighted figure.
- Don't use gold as text (contrast).
- Migration: keep existing stub figures. Moving today's `crowd` into the right field must be safe to rerun.
- Rationale: different numbers mean different things. Keep them all, and change only which one is highlighted. Decided against: the single locked crowd, and the "one upgrade" option.
- ⚑3 Existing stubs' `crowd` doesn't record which kind it was. Suggest: tag it Announced if the event's box score has attendance, else Estimated. Flag before running.
- ⚑4 Where Final comes from (vs. Announced) isn't specified in the code. "announced (predicted), final/actual (?)" is Kylie's own question. Flag the source.

### D05 Nightly job timing: keep just after midnight
- Choice: "Keep just after midnight and accept the late start". Note: none.
- `.github/workflows/schedule-archive.yml:2-7,19`. No change.
- Rationale (from the file): GitHub starts it late anyway, and 08:01 UTC is the earliest minute past midnight in every city. Decided against: none recorded.

### D06 Fix the nightly save's date label
- Choice: "Fix the label". Note: none.
- `schedule-archive.yml:115` takes the first staged dated file (`head -n 1`). Take the date from the schedule file only.
- Rationale: the commit was labeled with the wrong date. Decided against: none recorded.

## 2. What you see

### D08 Ticket price: before fees, keep "+fees"
- Choice: "Use the before-fees price, keep \"+fees\"". Note: none.
- `api/ticket-price.ts:67-69` prefers the fee-inclusive range. Prefer the standard range without fees. `src/data/tickets.ts:44-50` keeps "Prices from $48+fees".
- Rationale: so "+fees" is true. Decided against: none recorded.

### D09 Add the crowd icon to crowd totals
- Choice: "Add the icon to those totals". Note: none.
- `src/screens/DateScreen.tsx:509`, `src/components/WhyCard.tsx:40`.
- Rationale: none recorded. Decided against: none recorded.

### D10 Your year: attended and watched
- Choice: "Add \"N attended · N watched\" and drop the watched pill". Note (verbatim): "fine for now, but i anticipate i'll look a lot more closely at this page later"
- `src/components/YourYear.tsx:71-75` (watched pill). Add the plain line above the pills (`:65`).
- Keep it simple, since Kylie will revisit this page.
- Rationale: none recorded. Decided against: none recorded.

### D12 Recent sort: by event date (as built)
- Choice: "By event date (as built)". Note: none.
- Stubs Recent stays sorted by event date.
- ⚑5 The card cited `src/screens/YouScreen.tsx:119`, but that line is the tab filter, not the sort. Confirm the sort is by event date and leave it.
- Rationale: none recorded. Decided against: when you logged it.

### D07 Friend watch wording
- Card: "Something else". Text (verbatim): "yes and this will be clarified in the updates from mock mosaic, but it will actually be \"Sam is watching {event} at {location}\" (if public)"
- Today: "is going to watch" at `src/screens/YouScreen.tsx:415,472` and `src/screens/EventScreen.tsx:597`. See §4.7 for what to build.

---

## 3. Mock Mosaic decisions (Kylie, Oct 11)

### 3.1 Copy: never "night"
- Use day, today and tomorrow ("See the whole day ›", a "This day" card). Sweep the app.
- This supersedes the after-5 PM rule (`src/lib/dayWord.ts:1-19`: `dayWord` / `tonightWord`). Make it always "day" / "Today".
- Search can still *accept* "tonight" as input (`src/lib/searchDate.ts:21`). It just never shows it.
- Rationale: none recorded. Decided against: the Oct 9 night/day rule.

### 3.2 Game naming (research: `docs/research/event-naming-at-vs.md`)
- Home-venue games: `{Away} at {Home}`, in every sport including soccer. Nicknames for pros, school names for college.
- Neutral sites: "vs." only there, with the event name first ("Rose Bowl · Alabama vs. Indiana"; "49ers vs. Rams · Melbourne").
- The label is a separate field rendered first ("NLCS G2 · Dodgers at Brewers", DH1/DH2).
- Identity is event ID + date, not the string.
- "vs Padres" and "@ Brewers" appear only on a favorite team's own page, via a separate formatter. Never on share cards, the feed, notifications, search or the log.
- Emphasize the user's team; don't reorder.
- Chips keep L1b. When too long, step down: shorten or drop the label, then shorter nicknames, then abbreviations last. Never cut off the home team.
- One deterministic formatter per size tier.
- Today: `src/lib/eventTitle.ts:49-50` builds "vs."; `FavoritePage.tsx:477` uses a "vs. Brewers" / "at Brewers" style. Also the example data at `src/data/profiles.ts:522`.
- Supersedes "vs. everywhere" from build-notes-oct9.
- Rationale: "at" is unambiguous in any sport, and NA convention puts the visitor first. "vs." implies neutral. Decided against: "Home vs. Away" and "vs. everywhere".
- ⚑6 Neutral-site detection: no field for it was found. Flag where it comes from.

### 3.3 Up against (D11, option A, mock `call12-up-against.png`)
- Card D11: "Something else". Text (verbatim): "i want mock ups for this, i think this is relevant information to include? also i'm confused how up against differs from local competition, i thought they were the same with different title labels"
- Decided (option A): the event page keeps "Up against" (this event's rivals, 5k+ within one hour) **with distance** (`EventScreen.tsx:311-319`). Drop the old timeline and add a "See the whole day ›" link to the date page.
- Local competition stays the date page's whole-day view (`DateScreen.tsx:380-386`).
- Rationale: Up against is about this event; Local competition is the whole day. Distance is relevant. Decided against: dropping miles (the card's lean). Other options in call12: none recorded in the notes.
- Remove the old event-page timeline: the `Beaten` "Local competition" section (`src/screens/EventScreen.tsx:397`, defined `:641-701`, including `.bar-self`). This is Claude's K1, and its R14 goes with it.

---

## 4. Final nav and screens (`docs/design/build3/DECISIONS.md` + 8 PNGs)
This pack wins over earlier Up against/timeline and watching notes where they conflict. Items here are DECIDED unless marked LEAN/⚑.

### 4.0 Global
- Every event row: title is line 1A, venue is line 1B, before any occasion/friction tags. Lead with what matters for the list's sort.
- Density: match the Letterboxd diary. Tight spacing, 11pt minimum text, 44pt tap areas (they can extend invisibly).
  - Reason: an information app should fit as much as possible on one screen.
- Every read box at every level gets a 1px `#76869B` border.
  - Reason: low reads blended into the background, and consistency.
- Read boxes keep their word (MILD, SPICY…) on the carousel, Stubs and Favorites, with the number over the word.
  - Reason: the carousel shouldn't be just numbers.
  - Rejected: number-only small boxes.
- Sports names: "Away at Home" (§3.2).

### 4.1 Read boxes and date (`1-read-boxes-date.png`)
- The date is plain text. Tapping the date or the read box opens the date page.
- Reason: the read box is already an entry point, so two taps is fine.
- Rejected: a chevron after the date; a light-blue pill (A, her favorite of three but not liked); a dotted underline (B); a calendar icon (C).

### 4.2 Explore sheet (`2a`, `2b`)
- Today: no date header, just "4 events · 94k ›", which opens the date page. Other days show the date. Minimal gap under the grabber.
- Rows sorted by time:
  - time on the left (no bullet);
  - title over venue in the middle;
  - crowd count + icon on the right, with tags under it;
  - one small activity line underneath (e.g. "Priya is watching at home"), one line, smaller font, no event title.
- Activity chip: icon-only people chip in the header. On is a filled Dodger blue pill; off is a grey slashed outline. Off hides **all** activity lines, including your own.
- Reason: none recorded beyond "it doesn't need to explain itself" (for the text label).
- Rejected: "Activity On/Off" text; (B) a switch in a filter menu; a toggle that leaves your own status showing.

### 4.3 Date page (`3-date-page.png`)
- The read box opens a popup with "See the whole day ›" attached to the bottom of the same card. The date and summary line also open the date page. Every event page has a "This day" card.
- Date page rows: venue on the right, stacked with the time. Ordered by crowd.
  - Reason: they explain the score. Explore is ordered by time.
- Up against: as §3.3.
- Rejected: none recorded.

### 4.4 Stubs (`4-stubs.png`)
- Tabs: Recent first, then Upcoming.
  - Reason: a diary opens on what you've done, and Upcoming is often empty.
- "+ Stub it" everywhere, for any event type, past or future.
- Button: extended floating "+ Stub it" bottom-right, above the tab bar. It shrinks to "+" on scroll. List bottom padding ~70pt so it never covers a read box.
- Empty Upcoming: full-width filled button plus "Browse today in Explore ›".
- Rejected:
  - (A) a pill beside the switch (reads like a third tab);
  - (B) a full-width button on the populated list (heavy, ~60px, form-like);
  - a bare "+" (drops the verb);
  - a header "+" (easy to miss, out of thumb reach).
- Recent uses month bands (OCTOBER 2026). No "Your year ›" link, since Stats lives in You.
- Rows mirror Explore: a date box (weekday over day number), title + venue, tags, and a small read box with its word.
- Status words: Attended (past) and Attending (upcoming), not "Was there" or "Going".
  - Crowd icon + number only on those rows: "[ticket] Attended · [crowd] 52k". Reason: the crowd belongs to in-person attendance.
- Icons: ticket = attending, TV = watching, bookmark = interested, lock = private, people = shared/friends.

### 4.5 Following › Favorites (`5-favorites.png`)
- Schedule by date. Team tag in team colors on the left; small read box with its word at the end.
- Two tap zones with a thin separator: the row opens the event page, the read box opens the date page.
  - Rejected: a tinted tile, a background split, a corner arrow.
- The read box shows the read for the event's city. Your home city gets no label; any other city shows its code above the box (MIL).
  - Rejected: the code beside the box.

### 4.6 Following › Friends (`6-friends.png`)
- DECIDED: grouped by event by default, with a switch to Feed.
- Cards lead with title, venue, then tags. The read box is small at the end (or omitted).
- Each card collapses to one summary line and expands to grouped lists: Attending / Watching / Interested before the event, Attended / Watched after. Interested shows on the Upcoming feed. Short form: "Sam +1 attending" ("Sam +1 attended" after).
  - ✅25 (Kylie, Oct 11): "Yes, make the Friends cards say Attending/Attended too." Rationale: it matches her F12 event-page choice, so the app uses one vocabulary. Rejected: keeping Going/Went on the Friends cards. This overrides DECISIONS.md §6's "Going" wording.
- DECIDED: past items need an obvious visual shift.
  - Rejected: "Past / See past activity"; (C) people-strip-first layout.
- Reason: none recorded.
- DECIDED (Oct 11, later): the past break is A, a Letterboxd-style "Earlier" band matching the Stubs month bands.
  - Reason: an obvious visual shift that matches Stubs.
  - Rejected: (B) a "Show earlier" pill, (C) a muted card.
- DECIDED (Oct 11, later): the Following segment labels are icon plus short word, star "Faves" and person "Friends".
  - Reason: avoid stacked F-words.
  - Rejected: icons only, and keeping Favorites/Friends.

### 4.7 Stub it sheet (`7-stub-it-sheet.png`), and watching (D13)
- D13 card: "Something else". Text (verbatim): "i think this is being addressed with mock mosaic right now"
- One "+ Stub it" on the event page opens one sheet. Upcoming: Attending / Watching / Interested. Past: Attended / Watched. Icons above.
- Watching: two equal one-tap choices, **Private** (lock) and **Friends** (people), neither preselected. Not a switch; this replaces the `role="switch"` at `src/components/WatchedWhere.tsx:80`.
- Friends reveals an optional "Where?" field with the helper "Approved friends will see where you're watching". Private gets no helper.
- Rejected: a privacy switch, "Shared with friends" copy, open-invite copy, "Only in your own log."
- Ticket line: "Prices from $48+fees ›", fetched live and never stored. Rejected: "See tickets on Ticketmaster". With no price: "Tickets ›" (§8.1, ✅24).
- Conflict resolved: your brief called the second choice "Shared"; DECISIONS.md (newer, final pack) calls it **Friends**. DECISIONS.md wins. The brief's "Where?" and helper copy match.
- DECIDED (Kylie confirmed via Mock Mosaic; she approved the r3 sheet: "this is exactly what I want"):
  - **Home preset.** Her words: "i want to add a preset for watching at home (public or private)". It applies to both Private and Friends, so update the existing Home chip (`WatchedWhere.tsx:42-52`) to match. Rejected: none recorded.
  - **Feed line**, Friends (shared) only. Her ask: "append the location". Build "Sam is watching {event} at {location}" (replaces "is going to watch" at `YouScreen.tsx:415,472` and `EventScreen.tsx:597`). On event rows: "Priya is watching at home". Private watches never show a location; with no location, use "Sam is watching {event}". Rejected: showing a location for private watches.
  - The helper "Approved friends will see where you're watching" is Kylie's own wording, kept as is (Oct 11): people you follow are your approved friends, consistent with D02. Rejected: "People you follow will see where you're watching".

---

## 5. Superseded and conflicts
- D04, D07, D11, D13 cards → §1 D04, §4.7, §3.3, §4.7.
- Single locked crowd → three fields (D04).
- "vs. everywhere" (build-notes-oct9) → §3.2.
- After-5 PM night rule (`dayWord.ts`) → never "night".
- Earlier Up against/timeline notes → §3.3 / §4.3 (keep distance, no timeline, "See the whole day ›").
- Earlier watching notes (Public/Home chips + private switch) → §4.7 Private/Friends, with a Home preset for either.
- "Shared" (brief) vs. "Friends" (DECISIONS.md) → Friends.
- §6 past break and Faves/Friends labels: were Mock Mosaic leans, now Kylie-decided (DECISIONS.md §6 updated). Build them.
- DECISIONS.md §6 "Going / Watching / Interested", "Sam +1 going" → Attending/Attended ("Sam +1 attending"), per ✅25.
- D02 "people you follow" vs. "Approved friends" helper → same people (following requires approval); keep the helper.

## 6. Open / don't build
⚑1 log path · ⚑3 existing crowd tagging · ⚑4 Final source · ⚑5 D12 sort location · ⚑6 neutral-site field.

⚑1 Your brief says log decisions in `docs/product-decisions.md`. The repo's log is `docs/product/product-decisions.md` (it already has an "Oct 11" section). Append there and flag; don't create a second file.

## 7. Kylie's manual steps (at the end)
1. Run the new migrations in order in Supabase (`0023…`; list each), then re-run one to confirm it's safe.
2. Test where-watched: save a place, see "Couldn't save, try again" when offline, and confirm a non-follower / blocked account sees nothing.
3. Check your log's crowd figures after the Estimated/Announced/Final move (⚑3).
4. After the next nightly run, check the commit's date label (D06).
5. Before the Oct 13 interview: the tester-readiness checks and the tester's LA, San Diego, New York and Montreal reads (K16); after it, C034.
6. Phone checklist (K17): C118, C075, C083, C087, sign out with an unsaved change, the Attended un-tap, step (d).

## 8. Claude's open handoff items
Source: `MEMORY_HANDOFF.md` ("Open" and "Kylie's manual steps"), `BACKLOG.md` (K1–K22 at `:5-38`, and the "Open from …" sections at `:125-157`), the open/deferred lines in `docs/product/product-decisions.md`, and commits `188567b..186de30`. Status is one of: **covered** (build 3 section), **in code** (file:line), **✅** (Kylie answered on the open-items form; build per §8.1), or **not in build 3** (parked or later; don't build).

### Oct 11 screens (K1–K10)
- **K1 What the event page keeps** — covered: §3.3. Kylie chose to keep Up against with distance, drop the old timeline (`EventScreen.tsx:397`, `:641-701`) and add "See the whole day ›".
- **K2 Interested on the date page's Following section** — ✅11 (§8.1). Claude's question: "should the date page's Following section show it too?" No recommendation was recorded.
- **K3 Event-page friend lines** ("Sam is going", "Sam is going to watch", "Sam is interested", "Sam was there", "Sam watched"; `EventScreen.tsx:597`) — partly covered. §4.7 makes watching "is watching … at {location}" when shared, and §4.4 status words are Attended/Attending. ✅12 (§8.1): the rest of the event-page wording isn't decided. Claude's ask: "Confirm or reword."
- **K4 Where the three questions appear** — covered for the event page: §4.7 (one "+ Stub it" sheet with Attending / Watching / Interested). ✅13 (§8.1): the date page isn't covered (today "Attending?" with "Watching?" beside it, no "Interested?"). Claude's ask: "Confirm, or say where else each belongs."
- **K5 Where watched, six questions:**
  - (1) private: covered, §4.7 Private/Friends choice, not a switch.
  - (4) optional: covered, §4.7 optional "Where?".
  - (6) where the picker lives: covered, §4.7 Stub it sheet.
  - (2) merging duplicate names, (3) editing others' places, (5) showing on your own stub — ✅14 (§8.1). As built: no merge; you change only your own; not on your stub. No recommendation was recorded.
- **K6 "Nothing bigger was on." (R17)** — ✅15 (§8.1), needs her words. Not patched.
- **K7 Artist "Official site" source (R12)** — ✅16 (§8.1). Claude's note, verbatim: "(A stored homepage per artist from Ticketmaster's attraction links is one free source.)"
- **K8 "Famous nights" heading (R15)** — covered in principle by §3.1 (never "night"); it's at `CompareScreen.tsx:112`. ✅17 (§8.1): the new heading wording isn't given. Don't invent it; leave it and flag.
- **K9 Assistant's calls:**
  - (a) lazy crowd fill on open, 40 lookups max (`personalLog.ts:613-630`) — ✅18 (§8.1), confirm. No recommendation beyond as built.
  - (b) tap-time crowd replaced at lock — covered: D03 (final wins) and D04.
  - (c) announced figure = box-score attendance, else estimate (`personalLog.ts:609-611`) — covered: D04 splits them. The Final source is ⚑4.
  - (d) Recent by event date — covered: D12.
  - (e) Following by-event list keeps the Oct 9 filter while Feed shows every line — partly covered: §4.6 makes by-event the default with a Feed switch. ✅19 (§8.1): the filter itself isn't confirmed.
  - (f) 08:01 UTC — covered: D05.
- **K10 Later passes** (R13 gold ring mock, the Stats badge set, R10, R11) — not in build 3. Parked by Kylie.

### Left from build notes 2 (K11–K13)
- **K11 Feeds, jobs or cost** (standings, tours, alerts, live state, the `rescoredOn` re-score, festival "Weekend 1/2") — not in build 3. Each needs a feed or cost call.
- **K12** "N events in common" on People rows, and the map sheet hiding when no chip is selected — ✅20 (§8.1). Claude asks "Build either?" No recommendation was recorded.
- **K13 Favorites "By date" heading read uses the first row's city** — partly covered: §4.5 reads the event's city per row with a code above the box. ✅21 (§8.1): the heading's own read isn't decided.

### Milwaukee, scale, tester (K14–K17)
- **K14** — in code. Built and approved Oct 11 (handoff).
- **Milwaukee follow-ups** (Open-Elevation retry `node scripts/venue-access.mjs --metro=milwaukee`, Potawatomi room match, 54 school-gym leads, team adapters, disputed inventories) — not in build 3.
- **Scale research checkpoint and next-ten city queue** (`BACKLOG.md:49-57`) — not in build 3. No city build is approved.
- **K15 Tester's name in git history** — ✅22 (§8.1). Claude's recommendation, verbatim: "leave it (recommendation: a first name only, already scrubbed from current files)". The alternative is a force-push rewrite of `main`; don't do that in build 3.
- **K16 Pre-interview checks / C034 after** — Kylie's manual steps (§7).
- **K17 Phone checklist** (C118, C075, C083, C087, sign out unsaved, Attended un-tap, step (d)) — Kylie's manual steps (§7). The crowd-fill check is already step 3.

### Older (K18–K22)
- **K18 Rating model v3 weights** — not in build 3.
- **K19 Words:** "night" in "Pick a night", "Next big night", "On this night" — covered: §3.1 removes "night". ✅17 (§8.1) covers the replacement wording. Her doubt about "friction" as the verdict — not in build 3.
- **K20 Her log** (drop 2013–2015 concerts? the 13th UCLA WBB night) — ✅23 (§8.1). No recommendation was recorded.
- **K21 Oct 3 notes, K22 build-brief questions** (traffic cues, streaks, cameo rules, plans on the Map, name clearance) — not in build 3.

### Other open lines
- **Ticket line fallback:** "See tickets on Ticketmaster" shows when there's no price (`EventScreen.tsx:198`). Resolved: ✅24 (§8.1), "Tickets ›".
- **ESPN launch blocker, ESPN failure caching, bundle split, service worker, sheet drag on a phone** (`BACKLOG.md` Tech housekeeping) — not in build 3.
- **Handoff manual steps:**
  - (1) "Nothing to run in Supabase" — replaced by §7 step 1.
  - (2) crowd fill on her log — §7 step 3.
  - (3) Actions green at 08:01 UTC — §7 step 4.
  - (4) work through the K items — this section.
- **Commits since `188567b`** — no open items beyond the above. The Milwaukee coverage answer was "no decisions yet" and is closed by `f839d45`.

### 8.1 Kylie's answers (open-items form, Oct 11)
None deferred.

**✅12 → Friend lines on the event page**
- Choice: Grouped lists like the Friends cards: "Going · Sam, Priya", "Watching · Jo at Tom's Bar", "Interested · Lee"; after: "Went · Sam", "Watched · Jo"
- Note (verbatim): "mostly correct: Attending/Attended instead of Going/Went"
- Rationale: Same pattern as the decided Friends cards (§6). Least copy. A location shows only for Friends watches.
- Rejected: Short sentences: "Sam is going", "Sam is watching at Tom's Bar", "Sam is interested", "Sam went", "Sam watched"; Full feed lines with the event: "Sam is going to Dodgers at Brewers"; Defer.
- Build: on the event page, "Attending · Sam, Priya", "Watching · Jo at Tom's Bar" (a location only for Friends watches), "Interested · Lee"; afterwards "Attended · Sam", "Watched · Jo". Replaces `friendLine` (`EventScreen.tsx:594-599`).
- ✅25: the Friends cards use the same words (§4.6).

**✅13 → How you log from the date page**
- Choice: A small "+ Stub it" on each date-page row that opens the same sheet
- Note (verbatim): none
- Rationale: Follows "+ Stub it everywhere" and reuses one sheet. Interested comes with it.
- Rejected: No logging buttons on the date page: rows open the event page, which has "+ Stub it"; Keep "Attending?" / "Watching?" as built (a change to "+ Stub it everywhere"); Defer.
- Build: a small "+ Stub it" on each date-page row that opens the §4.7 sheet. Replaces "Attending?" / "Watching?" (`DateScreen.tsx:367, 399-409`). Conflict resolved: "+ Stub it everywhere" wins.

**✅17 → Headings that still say "night"**
- Choice: "Famous dates", "Pick a date", "Next big day", "On this date"
- Note (verbatim): none
- Rationale: "Date" is already the app's unit (the date page, "On this date").
- Rejected: "Famous days", "Pick a day", "Next big day", "On this day"; "Big days", "Pick a day", "Next big day", "On this day"; Defer.
- Build: "Famous nights" → "Famous dates" (`CompareScreen.tsx:112`, CalendarScreen), "Pick a night" → "Pick a date", "Next big night" → "Next big day", "On this night" → "On this date". Conflict resolved: the never-"night" rule wins over `product-decisions.md:25`.

**✅24 → Ticket line when there's no price**
- Choice: Shorter fallback: "Tickets ›"
- Note (verbatim): "because it might not always be ticketmaster, it might be another link/page"
- Rationale: Less copy, same link.
- Rejected: Keep the fallback "See tickets on Ticketmaster ›" (DECISIONS §7 is about the main line); No price, no line (a change to the Oct 11 fallback); Defer.
- Build: with no price, the line reads "Tickets ›" (`EventScreen.tsx:198`), linking to the event's ticket page. "Prices from $48+fees ›" stays when there's a price. Conflict resolved: neither the old fallback nor hiding. Her note means the link may later point somewhere other than Ticketmaster; keep the copy source-neutral.

**✅11 → Interested on the date page's Following section**
- Choice: Show Interested on the date page too, in the grouped list ("Interested · Lee")
- Note (verbatim): none
- Rationale: Same as the event page and the Friends cards.
- Rejected: Leave it off the date page (as built); Defer.
- Build: the date page's Following section includes Interested in the grouped list (drop the `!f.interested` filter at `DateScreen.tsx:108`). Conflict resolved: DECISIONS.md §6 wins over "never the feed".

**✅14 → Where watched: duplicate names, others' places, your own stub**
- Choice: Match names ignoring case, spaces and punctuation; you edit only your own; your stub shows "Watched · Tom's Bar" for Friends watches only
- Note (verbatim): none
- Rationale: Merges the obvious duplicates without showing other people's typing. Private stays location-free.
- Rejected: As built: no merging, edit only your own, nothing on your stub; Suggest places your approved friends already used while you type, plus the same stub rule; Defer.
- Build: match place names ignoring case, spaces and punctuation; you edit only your own; your stub shows "Watched · Tom's Bar" for Friends watches only. Private never shows a location.

**✅15 → "Nothing bigger was on." on an Unopposed event**
- Choice: "The biggest event around."
- Note (verbatim): none
- Rationale: Says it from the event's side.
- Rejected: No line: the "Unopposed" pill says it; "Nothing else this size nearby."; Defer.
- Build: an Unopposed event's line reads "The biggest event around." (`formulaRead.ts:35, 99`; the generated `startForecastIndex.ts` strings follow on the next nightly run).

**✅16 → Where an artist page's "Official site ›" links**
- Choice: The artist's homepage from Ticketmaster's attraction links; hide the slot when there's none
- Note (verbatim): none
- Rationale: Claude's pick. Free and already fetched. The link goes to the artist's own site.
- Rejected: The official homepage from MusicBrainz; hide when there's none; Remove the slot until a source is picked; Defer.
- Build: "Official site ›" links to the artist's homepage from Ticketmaster's attraction links; hide the slot when there's none (`FavoritePage.tsx:230-235`).

**✅21 → Favorites "By date" heading read**
- Choice: Drop the heading read: each row already has its own
- Note (verbatim): none
- Rationale: No wrong-city read and less on screen.
- Rejected: The heading shows your home city's read; Keep the first row's city, and add its code when it isn't home; Defer.
- Build: drop the read on Favorites "By date" headings (`FavoritesScreen.tsx:356`); rows keep their own.

**✅20 → "N events in common" and the hidden map sheet**
- Choice: Show the Explore sheet's collapsed bar ("4 events · 94k ›") when no chip is selected; skip events in common
- Note (verbatim): none
- Rationale: Matches the decided Explore sheet. Skipping events in common keeps logs out of view.
- Rejected: Both: the bar plus "3 events in common" on People rows (approved follows only); Neither for now; Defer.
- Build: when no chip is selected, show the Explore sheet's collapsed bar ("4 events · 94k ›"). No "N events in common".

**✅18 → Crowd figures fill in when the app opens**
- Choice: Keep filling on open, writing into the three new fields
- Note (verbatim): none
- Rationale: Free, no new job, already built.
- Rejected: A nightly job fills them; Defer.
- Build: keep the fill on open (≤40 a run), writing into Estimated/Announced/Final (D04).

**✅19 → Which events the Following by-event list shows**
- Choice: Already decided: keep the Oct 9 filter on by-event; Feed shows everything
- Note (verbatim): none
- Rationale: Your Oct 9 rule; §6 only made by-event the default.
- Rejected: By-event shows every friend's event (a change); Defer.
- Build: no change. By-event keeps the Oct 9 filter; Feed shows every line.

**✅22 → The tester's first name in git history**
- Choice: Leave it
- Note (verbatim): none
- Rationale: Claude's pick. A first name only, and no risky rewrite.
- Rejected: Rewrite history and force-push main; Defer.
- No change; no history rewrite.

**✅23 → Your 2013–2015 concerts and the 13th UCLA game**
- Choice: Keep the old concerts; you'll add the missing UCLA game if you find it
- Note (verbatim): none
- Rationale: Nothing is lost.
- Rejected: Drop the 2013–2015 concerts; Defer.
- No change to the log; Kylie adds the missing UCLA game if she finds it.
