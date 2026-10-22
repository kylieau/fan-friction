# Fan/Friction · Build 7 notes

> **How to read this.** These are Kylie's approved build 7 notes (approved Oct 22, 2026, PT). §2 is the one-table summary. Each area in §3 gives what changes against the live app, a "Repo reality" check from the engineering review of the code, why, the alternatives Kylie rejected, and edge cases. §6 lists every decision Kylie settled on Oct 22, each by name; the area sections point back to it as "§6, <name>". §9 is the suggested build order, §10 says how to use the advisor and Codex while building, and §11 is what not to build yet. **Locked** = Kylie decided it; **Lean** = the design suggestion, your call. The images sit next to this file: `mockups/` (indexed in [`mockups/INDEX.md`](mockups/INDEX.md); "mock 08" means `mockups/08-….png`), `flow/` and `research/`.
>
> File:line references were verified at a92cf29. Main has moved since (for example 83d7570 touched `SearchSheet.tsx`, `src/data/favorites.ts`, `personalLog.ts` and `results.ts`), so a line number in those files can be a few lines off. Re-find the symbol before editing.

**What this is:** Kylie's decisions for build 7, with the reasoning behind each, the alternatives she rejected, and the mockups. It's compiled from her design chats (Oct 16–22, 2026) and the live code.
**Grounded against:** `kylieau/fan-friction` main. First drafted at 329fc5c (Oct 21, 2026, 10:17 PM PT).
**Reviewed against the repo (engineering review) at a92cf29** (Oct 22, 2026, 2:47 PM PT; 34 commits past 329fc5c, none under `src/screens`, `src/components`, `src/lib`, `App.tsx` or `styles.css`). Every "live" file:line reference below is verified at **a92cf29**. The review's findings are folded into the "Repo reality" and "Correction" notes below.
**Status:** Approved by Kylie, 2026-10-22. Every question raised in the design draft and the engineering review is answered and Locked (§6).
**Who builds:** Fable builds via Claude Code, with Claude Code's advisor turned on (it also points to Fable). Codex reviews come through the codex-rescue agent (§10).
**Compiled:** Thu Oct 22, 2026, afternoon PT.

---

## 1. Framing: how to use this doc

**The mockups are a guide and North Star, not pixel locks.** They show intent, layout and hierarchy. Not every detail in them is decided. Kylie, Oct 21, 11:32 PM PT: *"Don't worry about detailing the specific, text size and stuff like that, in really any of the builds. Claude should be able to pick up everything, and adapt it to the existing structure and, standards and guidelines. So there's no need to specify these things unless we have explicitly talked about sizing."* Kylie again, Oct 22, 1:35 PM PT: the builder *"can see everything and if we've described it well enough and provided the rationale, they should be able to build it up anyways and shouldn't necessarily need a mockup."*

**You (the builder) see the whole codebase. Use your judgment.** Reuse existing components, tokens and patterns wherever they fit, for example `Timeline`, `FollowRow`, `ListBand`, `SearchButton`, `StubSheet`, the filter-chip and sheet styles, and `SettingsPanel` building blocks. Where a mock and the code's established pattern disagree on a small detail, follow the code's pattern unless the doc says the detail is Locked.

**What the notes focus on:**
- (a) **Actual changes against the live app** (what's different from main at a92cf29).
- (b) **The purpose and reasoning** for each decision, especially where Kylie discussed it, plus the alternatives she rejected and why. That way you can make good calls on anything the doc doesn't cover.

**Tags used on every item:**
- **Locked**: Kylie decided it. Build it as described. If something blocks it, flag it instead of silently changing it.
- **Lean**: the design suggestion, which Kylie hasn't explicitly confirmed (or approved only in general). It's your call. The lean is a sensible default.
- **Open**: undecided. As of 2026-10-22 there are none. §6 lists the resolved decisions and §11 the Backlog.

**Numbers in mocks are EXAMPLE data.** Every count, score, price, crowd size, name and date in the mockups is made up. They don't always agree across images (e.g. "3 venues" in one, "4" in another). Don't treat any number as a spec or a test value. Every mock carries an "EXAMPLE data" badge.

**Stale labels:** older mocks still say "Friends" (now **Activity**), "Next up" (now **Upcoming**), "Food & drink"/"Parking" (now **Food & Drink**/**Parking & Transit**), and so on. §5 and [`mockups/INDEX.md`](mockups/INDEX.md) list each one. Annotation boxes inside the images that say "Mosaic lean · Not confirmed" (the design tool's label for a suggestion) date from when the mock was drawn. This doc's Locked/Lean tag overrides them.

**Folder (next to this file):**
- `mockups/`: 66 numbered images plus `INDEX.md` (file, what it shows, status, stale labels).
- `research/`: four research answers Kylie ran, plus ChatGPT's wireframe.
- `flow/`: six flow maps (overview + one per area) showing what opens what.

**House rules carried forward from builds 3–6 (unchanged):** Copy never uses "going", "~", "night" or "tonight". Use Away at Home titles. Verdict words come from `src/config/scoreLabels.ts`. Colour rules are in §4.

---

## 2. Summary of all changes

| # | Area | Change vs live (a92cf29) | Tag | Mock # |
|---|---|---|---|---|
| 1 | Tab bar | Bar becomes Explore · Upcoming · **(+)** · Activity · You. The Stubs tab is removed and Following is split into Upcoming and Activity. | Locked | 01 |
| 2 | Tab bar | Center "+" is a 48 px filled action-blue circle, raised ~7 px, no label. Lists get bottom padding so nothing hides under it. | Locked | 02 (03 rejected) |
| 3 | Tab bar | The "+" replaces the floating "+ Stub it" FAB on Stubs (`StubsScreen.tsx:216–218`). The event page keeps its blue "+ Stub it" (`EventScreen.tsx:299–301` and `:790–792`). Home's "+ Stub it" (`HomeScreen.tsx:211–212`, off the bar) can stay as an alias. | Locked | 01 |
| 4 | Log an event | "+" opens a new "Log an event" sheet: compact search, then Today/Happening now (your plan pinned first), then Recent, then "Not here? Add it yourself". | Locked (structure); Lean (ranking details) | 04, 05 |
| 5 | Log an event | Rows: one outlined "+" per row opens `StubSheet` (today's events answer as a plan, Attending/Watching/Interested, which can carry cost and seat and settles into the stub when the event ends (§6, same-day logging); past events get Attended/Watched). Rows already logged or planned show a filled ticket/TV mark plus a status word, with no add action. Search results work the same way. | Locked | 04–07 |
| 6 | Upcoming | Following › Faves is renamed **Upcoming** and becomes its own tab. | Locked | 08 |
| 7 | Upcoming | A "Your plans" band (Attending/Interested/Watching) sits on top. Plans move off the old Stubs tab. | Locked | 08 |
| 8 | Upcoming | No-plans state: one slim prompt line instead of the band (§6, Upcoming with no plans). | Locked (Kylie, 2026-10-22) | 09 (10 rejected) |
| 9 | Upcoming / Activity | Filter button sits on the title row at exactly the search button's size, matching Explore's toggle. Live it's 44 px against search's 36 px, so this is a real change. | Locked | 14, 15 |
| 10 | Upcoming | New filter sheet: Dates first, Show (plans/Faves), Faves checklist, "Manage faves ›" (opens the Edit favorites sheet). | Lean (the sheet itself is Locked as a need) | 12, 13, 11 |
| 11 | Upcoming / Activity | Rows get **no** log buttons. Only a filled ticket/TV status mark on events you've logged or planned. | Locked | 08, 16 |
| 12 | Activity | Following › Friends is renamed **Activity** and becomes its own tab. | Locked | 16 |
| 13 | Activity | Your own entries are mixed into the feed. "You" leads the people line on shared events. | Locked | (text) |
| 14 | Activity, Upcoming, Your stubs | No "↑ N earlier" cue and no Earlier line **anywhere** (§6, earlier cue; knowingly reverses 435d817). Lists open on Today, past months sit above, and the "↓ Today" pill returns. | Locked | 16 (17 rejected) |
| 15 | Activity | New filter sheet: **Hide mine** (sticky, saved per device, §6, Hide mine storage), People checklist, activity chips including **Watching** (§6, Watching chip). | Hide mine, its storage and the Watching chip Locked; other sheet details Lean | 18–20 |
| 16 | Stub it sheet | New **Cost** row ("+ Add cost", collapsed), alongside Tags and Seat. All three become action blue ("+ Add tag/seat" are **violet** live; §6, tag chip colour) with no divider. Tag *chip* colour is the builder's call. Cost and seat are allowed on same-day plans (§6, same-day logging). | Locked | 21 |
| 17 | Cost | Attended: Ticket line preset, labeled **"You paid"**, storing what you type (§6, cost amount). Optional quantity (2 × $68) only when buying more than one; no automatic splitting. Plain Free chip. Season tickets: per-game price (§6, season tickets). Chips: Parking & Transit, Food & Drink, Merch, Other. Line breakdown with total. | Locked | 22–24 |
| 18 | Cost | Watched: no preset. Chips: Stream / PPV, Food & Drink, Other. | Locked | 25, 26 |
| 19 | Cost | New data with three states: not entered / Free / paid. Blank never counts as $0. A new key in `entries.data` jsonb, so **no migration**, and it stays owner-only. | Locked | (data) |
| 20 | Event page | A real "Edit stub" that edits the whole stub (incl. cost) whenever you have a stub. Today "Edit" only shows when tags exist. | Locked | (text) |
| 21 | You · 1 | You = your personal record only. Plans appear only as a small **Upcoming** row linking to the Upcoming tab. | Locked | 27 |
| 22 | You · 2 | Compact header: avatar (opens Profile & Settings), name, home city, "Private profile". The people/requests link moves to Profile & Settings. | Locked | 28 (29 rejected) |
| 23 | You · 3 | Flighty-style year card: fixed big number (events attended · N watched) + 4 auto-picked stats. No money. | Locked (pool/ranking Lean) | 30–32 |
| 24 | You · 4 | "Your stubs" preview: 4 newest, plain "See all ›" (no count). | Locked | 33 |
| 25 | You · 5 | Recap › and Ranks › as a two-cell footer inside the year card. "Your year ›" sits on the card header. | Locked | 34 |
| 26 | You · 6 | Faves row: hand-picked faves, "Seen N" each, "Edit ›" (opens the Edit favorites sheet). Brand-new user: year card at 0 with a nudge to the "+", no stubs preview, Faves empty state (§6, brand-new user). | Locked | 35–37 |
| 27 | You · 7 | The current Stats + "By type/team/sport/venue" lists leave the You tab. Their content lives in Your year, Ranks and Recap. | Locked (by the 7 pieces) | 27 |
| 28 | Stubs page | Full history moves to a pushed "Your stubs" page: ‹ You, filter, search, List/Grid/Calendar, no year chip. | Locked | 38–43 |
| 29 | Stubs page | Filter: Dates first, then Type, Kind, **Team or sport** (moved from You's chip row, `filterChoices`), Tags. Count badge + removable chip. | Locked | 39, 40 |
| 30 | Recap | New scrolling page of moments (not Wrapped-style). Sharing is out of build 7 (§6, Recap sharing; Backlog §11). | Locked | 44, 48 |
| 31 | Ranks | New page: count only, pill tabs Teams / Venues / Cities / Artists / Tags. **Teams counts every team you've seen, not just Faves** (§6, team attribution). Tap a tag to see its stubs. | Locked | 45, 46 |
| 32 | Tags | Tags show up across You: year-card tag stat, Recap "Top tag", Stubs filter Tags, Ranks Tags tab. | Locked | 47–49 |
| 33 | Your year | New page: scoreboard (stats, the "your usual" friction read under the stats (§6, "your usual" read), By month, Most seen top-3s, compact Spend card). Team stats count every team seen (§6, team attribution). | Locked | 50–52 |
| 34 | Spend details | New page: by category, avg ticket per seat, free events, by venue per visit, by team. By team credits **both** teams of every game; events with no team stay out (§6, team attribution). Trip costs count in totals; venue averages unchanged in build 7 (§6, trip costs). | Locked | 53 |
| 35 | Profile & Settings | Settings side panel with dropdowns becomes **one page**, profile on top, opened from the avatar. No gear icon. No Notifications section (§6, notifications). Signed out: the account section here plus a sign-in card at the top of You (§6, signed out). | Locked | 55 |
| 36 | City switcher | Shows only Home + favorite cities (no full list, no stars), search for any other city, and "Edit favorite cities ›" at the bottom. | Locked (search Lean) | 56–58 |
| 37 | Profile & Settings | Favorite cities section (remove/add): a **restyle** of the existing "Home & cities" dropdown (stars → minus / + Add city). The data already exists. | Locked (UI details Lean) | 60 |
| 38 | Profile & Settings | New Favorite teams & artists section: collapsible Teams/Artists/Venues + small "Edit", which opens the one **Edit favorites sheet**. Replaces Edit Faves in the Following sheet and the "Edit favorites" dropdown. Browse by league stays, collapsed under Suggested (§6, Browse by league). | Locked | 61–66 |
| 39 | Naming | Full official team names (Los Angeles Dodgers) appear **only** in three places: the favorites section and sheet, the team page header, and search results. Everywhere else keeps city shortcuts (LA Dodgers). UCLA stays. Live is already shortcut everywhere and full on the team page, so the real change is search rows + favorites rows. | Locked | 61–66 |
| 40 | Lists | **Keep horizontal row separators; no vertical separator by the read tile (current behavior is correct).** No change from live. | Locked (Kylie, 2026-10-22, answering the engineering review) | — |
| 41 | Search | Global search event rows get the same "+" and status marks as the Log sheet, built as one shared row component (§6, global search rows). | Locked (Kylie, 2026-10-22) | 05 |
| 42 | Activity | Signed out: your own local entries, with the same sign-in card above them (§6, signed out). | Locked (Kylie, 2026-10-22) | (text) |
| 43 | All stats | Every stat counts every team you've seen, not just Faves. Each game credits both teams (§6, team attribution). | Locked (Kylie, 2026-10-22) | (text) |

---

## 3. Areas

### 3.1 Tab bar and the center "+" (Stub it entry)

**What changes vs live**
- **Live:** `src/components/TabBar.tsx:7–12` (`TABS`) has four tabs: Explore (`/explore`), Stubs (`/stubs`), Following (`/following`), You (`/you`). This is the build 3 nav.
  - Logging from anywhere other than an event page goes through the floating "+ Stub it" FAB on the Stubs tab (`src/screens/StubsScreen.tsx:216–218`, `<Link to="/you/add" className="stub-fab…">`). Home also has a "+ Stub it" link to `/you/add` (`HomeScreen.tsx:211–212`). Home isn't on the bar, so that link can stay as an alias.
  - The FAB shrinks on scroll and hides when there are no stubs or plans. It opens `/you/add` (`AddEntryScreen`, the "New stub" page) (`StubsScreen.tsx:215–220`).
- **New (Locked, Oct 21, 8:25 PM PT onward):** five slots: **Explore · Upcoming · (+) · Activity · You**.
  - The Stubs tab goes away. Its history moves into You (§3.6, §3.7).
  - Following splits into Upcoming (the old Faves side) and Activity (the old Friends side).
  - **Routes (corrected after the engineering review).** Don't redirect `/stubs` to a tab. `/stubs` is the Your stubs page and is linked from about 15 places, including `/stubs?filter=` (`FavoritePage.tsx:462`) and `/stubs/tag/:tag` (`App.tsx:87`). Suggested:
    - `/stubs` → **`/you/stubs`**, keeping the query string. NavLink prefix matching then keeps You lit with no extra code.
    - `/stubs/tag/:tag` → `/you/stubs?tag=`, or keep `TagScreen`.
    - `/following` → `/upcoming`
    - `/following?tab=friends` → `/activity` (`HomeScreen.tsx:252` uses it)
    - `/favorites` → `/upcoming` (`App.tsx:92` points at `/following` today)
    - `/favorites/edit` → opens the Edit favorites sheet
    - Roughly 25 hard-coded links need updating (file:line at a92cf29):
      - `/stubs`: `ManualEntryScreen` :58, :101, :136, :150, :191; `EventScreen` :778; `AddEntryScreen` :116, :268; `TagScreen` :80, :150; `CompareScreen` :47; `QuickAddSheet` :57; `HomeScreen` :222, :298; `FavoritePage` :462 (`/stubs?filter=`).
      - `/following`: `FavoritePage` :224 (BackLink); `HomeScreen` :252 (`?tab=friends`), :273; `FavoritesScreen` :143, :304.
      - `/favorites/edit`: `FollowingScreen` :237; `FollowingSheet` :162.
      - `/you?panel=`: `FollowingScreen` :348; `FollowingSheet` :128, :282.
      - Today's routes are in `App.tsx:83–108`. Back labels are in `src/lib/view.ts` `backFrom` (`:158–168`).
- **The "+" (Locked, Oct 21, 10:51 and 10:57 PM PT):**
  - An unlabeled circle in action blue, **48 px, rising about 7 px** above the bar top. The design mock used a thin bar-coloured ring and a soft shadow (mock 02).
  - Kylie explicitly talked about size here ("a bit smaller"), so 48 px raised is the size to build.
  - Add bottom padding to scrolling lists so the last row never sits under the raised part.
  - Accessibility label: "Log an event". It's a button that opens a sheet, not a destination, so it never shows a selected state (research doc 01).
- **The floating "+ Stub it" FAB is removed.** This undoes the Oct 12 FAB decision. The center "+" now does that job everywhere.
- **The event page keeps its strong blue "+ Stub it" button** (`src/screens/EventScreen.tsx:299–301`, plus a second copy on the other render path at `:790–792`; keep both). The class is `gold-button`, overridden to `var(--action)` at `styles.css:5887–5890`, so it really is blue. Both research answers say the item-page path is the one that must never be missing.
- **Explore itself doesn't change.** Kylie, Oct 21, 11:00 PM PT: *"Explore pretty much looks the same. Great. Yeah, nothing should really be changed there."* Only its city switcher changes (§3.11).

**Repo reality (engineering review at a92cf29)**
- The bar is a `NavLink` map (`TabBar.tsx:15–24`) with prefix matching. The "+" is a **button that opens a sheet**, not a NavLink, so the map needs a special slot. The sheet's open state belongs in `Shell()` (`App.tsx:42`). TabBar has no state today.
- CSS: `.tabbar` `styles.css:76`, `.tab` `:86`, `.tab.active` `:98`, `.stub-fab` `:3205`. Bottom padding for the raised "+" goes on `.screen`/`.page` and the Timeline scrollers (~`:4011`, `:5972–6072`). Removing the FAB frees its offset.
- Cheapest first step: the "+" opens a sheet whose body is today's `AddEntryScreen` content (records list, search, Add it yourself). §3.2's Today band is added on top later. `/you/add` stays as an alias.
- This is the one risky commit in the build order (§9, step 4).

**Why**
- The restructure came out of the You tab review. Kylie, Oct 21, 8:24 PM PT, looking at "Recent stubs" on You: *"what is the point of looking at that? It's just like upcoming…"*
  - The Stubs tab and You were showing the same history twice.
  - Folding history into You frees a tab slot for logging.
- Kylie, 8:25 PM PT: *"I wonder if we add a middle stubbit button, very similar to what Letterboxd has."*
  - She then hesitated (8:27 PM PT): *"I personally do not use that mechanism to add movies to Letterboxd. I search them first."*
  - Then she concluded: *"just because I don't use it like that doesn't mean other people don't… Maybe we keep the plus."*
  - She asked for research. Both answers recommend **both** paths: a global "+" that makes the likely event one tap away, plus a contextual "Stub it" on event pages and search results (§7).
- Raised vs in-line: Kylie, 10:57 PM PT: *"I think I like the second one where it kind of hovers… where it rises… I don't dislike the one that rises."* The design notes then locked "the raised 48px '+' with padding at the bottom of each list."

**Rejected alternatives and why**
- **Labeled "Log" or "Stub it" button.** Kylie: *"i dont like the labeled button, i'd also want the button a bit smaller"* (Oct 21, 10:51 PM PT). ChatGPT's research had suggested a "Log" label.
- **44 px in-line "+"** (the design lean, mock 03). Kylie preferred the raised one.
- **The original r3 button, 56 px rising about 18 px.** Too big.
- **Four even tabs with no "+".** Every log would need a search or a browse, which research says breaks on stadium networks and buries the core action.
- **iOS 26 separated trailing "+".** Considered in research and mocks (r3/TB-trailing), not chosen.
- **Flat Letterboxd-style outlined "+".** Not chosen.
- **Keeping the floating FAB as well as the bar "+".** Redundant.

**Details, edge cases**
- Signed out: the "+" still opens the sheet, and saving follows the existing signed-out behavior of `StubSheet` (Lean).
- The "+" never logs anything by itself. Opening the sheet is always safe (both research answers).

**Mocks:** 01, 02 (Locked), 03 (rejected). **Flow:** [`flow/FLOW-00-overview.png`](flow/FLOW-00-overview.png).

---

### 3.2 Log an event sheet (opened by the "+")

**What changes vs live**
- **Live:** this sheet doesn't exist.
  - Today the FAB goes to `/you/add` (`AddEntryScreen`, "New stub": Game · Concert · Other, with `QuickAddSheet` from a532785, Oct 21).
  - Event pages open `StubSheet`.
- **New:** a bottom sheet titled **"Log an event"**, with these parts from top to bottom:
  1. **Compact search field:** "Search a team, artist or venue". It's always available and never blocks the rest. Typing turns the sheet into results (mock 05).
  2. **Context line:** "Today · Sat, Oct 17 · Los Angeles" with **Change city** (Lean). If location is off or unknown, the list uses your home city.
  3. **"Happening now · Today":** your own plan for today pinned on top, then today's events from your Faves, then events near you. The ranking is Lean, taken from research: plans → Faves → previously opened → nearby.
  4. **"Recent":** events from the last few days that you opened or logged, for back-filling (e.g. "Yesterday · You opened it").
  5. **"Not here? Add it yourself":** a link to the existing manual path (`/you/add` / `QuickAddSheet`). `QuickAddSheet` stays beside build 7's logging, not inside it (`MEMORY_HANDOFF.md:30` at a92cf29; it was :33 at 329fc5c).
- **Row treatment (Locked, Oct 21, 11:06 PM PT):**
  - Each event row has **one outlined "+"** on the right. Tapping it opens `StubSheet` for that event.
    - **Correction (engineering review):** for **today's** events, `StubSheet` offers **Attending / Watching / Interested, not Attended / Watched**. That's because `ahead = event.date >= today` (`StubSheet.tsx:51`; choices at `:151–156`). So today's answer is saved as a **Plan**. It becomes an Entry only after the date passes (`settlePassedPlans`, `personalLog.ts:1053–1058`, `plan.date < today`). Attended/Watched (`:159–160`) only shows for past dates.
    - **Same-day logging (Locked (Kylie, 2026-10-22), option A; §6).** In plain terms: if you log during a game, you create an **Attending** (or Watching) entry, which is a plan, until the event ends. You can add **cost and seat** to it right then. When the event has passed, the plan settles into an **Attended/Watched** stub automatically and the cost and seat carry over.
      - So: widen the Seat gate (today `kind === 'attended' && entry`, `:271`) and the new Cost gate to include Attending/Watching plans. Carry cost and seats in `settlePassedPlans` and `addManualPlan` (§3.5). Don't change `ahead` (`StubSheet.tsx:51`); option B was not chosen.
    - Rows with no catalog event (team-schedule records, `AddEntryScreen.tsx:156`) go to `QuickAddSheet` (`:166`), which has **no watched toggle** today.
  - Rows you've **already logged or planned** show a **filled ticket (attended) or TV (watched) mark** and a status word on the meta line (e.g. "Attending", "Watched"). They have **no add action**.
  - **Log search results follow the same rule.** Team, artist and venue results show › and open their page (mock 05).

**Repo reality (engineering review at a92cf29)**
- `StubSheet` can't open without an event (`event: CrowdEvent`, `StubSheet.tsx:47`). The Log sheet picks an event first, then hands off to `StubSheet`. Reuse the `AddEntryScreen.tsx` pieces (records list `:156`, `QuickAddSheet` `:166`, search, ManualForm).
- **"Recent" and "previously opened" have no data yet.** There's no viewed-events history anywhere in `src`. "Logged" is available (`yourEntries`, `personalLog.ts:187`). "Opened" is a new per-device store in `prefs.ts` (localStorage, no migration).
- **Low signal mostly exists already.** Catalog `events` requests are Workbox NetworkFirst with a 6 s timeout and a 7-day cache (`vite.config.ts:61–71`). Log writes are local-first and sync later (localStore + LogDiff). The only new work is warming the cache for today and the home city when the app opens.
- **Change city:** reuse `AreaSwitcher` / `openedMetroId()`. Don't build a new picker.
- **Status marks:** `FollowRow.tsx` plus the ticket/TV icons in `Icons.tsx`, which StubSheet already uses (`:150–162`).

**Why**
- Kylie (Oct 21, 10:55 PM PT), on the first Log sheet mock, which had Attended/Watched pill buttons on every row:
  - *"I don't think I really want the attended and watched pill buttons on every single row. for example, the first one, it already says it's in your plans attending, so it really shouldn't be there…"*
  - *"It just looks really busy to have these same buttons on every single row. And then kind of the same with the third log search results with stubit… blue stubit buttons on every single row."*
- The design work offered a two-icon row and a calmer single-"+" row. Kylie: *"oh i actually like this calmer alternative!"* (11:06 PM PT).
- The structure comes from the research (§7). The "+" must be **the fastest path to the event I'm at right now**, not "just another search button" (the criticism of Letterboxd). It should work from a cached list of today's events when stadium signal is bad.
- Kylie on ChatGPT's wireframe (Oct 21, 8:38 PM PT): *"the wireframe is not a visual guide… I don't hate how it does, like, log an event and then happening next day, but… conceptually, not the actual visual."*
  - So [`research/02-chatgpt-wireframe.png`](research/02-chatgpt-wireframe.png) is a structural reference only.
  - Its "Tonight" and "Lakers vs. Warriors" break our copy rules.

**Rejected alternatives and why**
- **Attended + Watched pills on every row:** too busy, and redundant on rows that are already planned.
- **Two small icons per row (ticket + TV):** Kylie chose the calmer single "+".
- **A blue "Stub it" button on every search result:** the same busy problem.
- **A "+" that only opens search (Letterboxd-style):** research says that adds nothing over global search.

**Details, edge cases**
- **Low signal:** warm the existing catalog cache for today, the home city and Faves when the app opens. Offline saving already works (local-first log). See Repo reality above.
- **Nothing today:** skip the "Happening now" band. Show Recent, then the "Not here?" link (Lean).
- **Copy:** "Today", never "Tonight". Use Away at Home titles.
- **Global search (§6, global search rows, Locked (Kylie, 2026-10-22)):** event rows in `SearchSheet.tsx` get the same "+" and status marks as the Log sheet. Build them as **one shared row component** (e.g. `LogRow`) used by both.

**Mocks:** 04, 05, 06 (the chosen close-up), 07. **Flow:** [`flow/FLOW-04-log.png`](flow/FLOW-04-log.png). **Research:** [`research/01-logging-entry-point-claude.md`](research/01-logging-entry-point-claude.md), [`research/02-logging-entry-point-chatgpt.md`](research/02-logging-entry-point-chatgpt.md), [`research/02-chatgpt-wireframe.png`](research/02-chatgpt-wireframe.png).

---

### 3.3 Upcoming tab (was Following › Faves)

**What changes vs live**
- **Live:** `src/screens/FollowingScreen.tsx`:
  - Header: title + `SearchButton` (`:125–128`), a Faves/Friends switch (`:130–137`), and a sliders button **beside** the switch on the same row (`.following-top`, `:129–142`; button `:138–141`).
  - Chips + Clear (`:143–156`).
  - `FavesTimeline` (`:216`) with `FaveRow` (`:279`), built on the shared `Timeline` component (`src/components/Timeline.tsx`).
  - The sliders open `FollowingSheet.tsx` ("Show and manage": Faves/Friends switch, Edit, "Also in Settings ›").
  - Plans live on the Stubs tab today as the `future` side of its Timeline (`upcomingPlans`, `personalLog.ts:1122`; `StubsScreen.tsx:60–61`).
- **New (Locked, Oct 21, 8:25 PM PT):** **Upcoming** is its own tab. It holds what you follow **and** what you're attending, watching or interested in.
  - A **"Your plans"** band sits on top. It lists your Attending / Interested / Watching events, with a status word on the team line (e.g. "Attending · UCLA Football").
  - Below the band come the Today line, then followed teams and artists by month, as `FavesTimeline` does today.
  - A short helper sits under the band (mock 08): "Your plans: events you marked Attending or Interested, or plan to watch. They become stubs in You once they happen." The wording is Lean.
- **Opens on Today, with past results above it, reached by scrolling up** (mock 08 note, r3c). That's the live `Timeline` behavior.
  - An earlier r3 note said "future only". r3c superseded it (Lean: keep past results above Today).
- **Row separators (Locked; answered by Kylie during the engineering review, 2026-10-22):** **Keep horizontal row separators; no vertical separator by the read tile (current behavior is correct).**
  - Live today: horizontal dividers between rows (`.follow-row` `border-bottom`, `styles.css:9271–9280`; `.timeline-list .tl-row`, `:4356–4366`). e8fd776 (Oct 18) removed the read tile's separator.
  - Kylie's Oct 21 remark (*"I'm pretty sure I got rid of the lines"*) was about the read-tile line, not the row dividers. **No change.** Keep the row dividers on Upcoming, Activity and Your stubs, even where a mock shows rows without them.
- **"↑ N earlier" cue: removed everywhere (§6, earlier cue, Locked (Kylie, 2026-10-22)).** No cue on Upcoming, Your stubs or Activity.
  - The cue lives in shared `Timeline.tsx:43–132`, so this is a delete, not a prop.
  - It shipped in 435d817 as "R8 option B". Removing it **knowingly reverses** that.
- **Filter button position (Locked, Oct 21, 11:31 PM PT):** on the **title row next to search**, at **exactly the search button's size**, matching Explore's view toggle.
  - Kylie: *"can you make it the same size? Don't make it bigger than the search icon. Look at… the explore page sizing for the toggle. It should be no different."*
  - This applies to Activity too.
  - **Live it isn't the same size (engineering review):** search is `.round-button`, **36 px** after the density pass (`styles.css:8106–8109`). The sliders button is overridden to **44 px** (`.following-filter`, `:9193–9196`). Fix: drop that override, and keep a 44 pt tap area with an `::after` extension (product-decisions:218).
  - Remove the Faves/Friends switch, since each is now a tab.
- **Filter on:** the sliders button turns solid with a count badge. **This already exists** (`.following-filter.on` and `.following-filter-count`, `FollowingScreen.tsx:138–141`). A chip row with **Clear** appears under the header **only while filtering** (mock 11, Lean). The old badge strip is already gone live (2437573).
  - Today's filter picks live in **sessionStorage** (`FollowingScreen.tsx:184–199`), so they reset when the app is closed. Keep that for Upcoming unless sticky is wanted.
- **Rows have no log buttons (Locked, Oct 22, 12:36 AM PT).**
  - Upcoming and Activity rows show a filled ticket/TV status mark on events you've logged or planned, and nothing else.
  - Kylie asked whether these rows should get the Log sheet's icons: *"I think no, but I just wanna check."* The design assistant agreed, and Kylie replied *"yes i like it."*
  - Rows still tap through to the event page, where "+ Stub it" lives.

**New: Filter upcoming sheet**
Kylie asked for this mock (Oct 22, 1:42 PM PT: *"let's attack them and do their mockups"*). The specifics are Lean.
- **Dates** first: From / To, with **All upcoming** as the default. Quick chips: Next 7 days, Next 30 days, This month.
- **Show:** Your plans (Attending, Watching, Interested) and Faves (games and shows from what you follow), each checkable. Plan chips: All plans / Attending / Watching / Interested.
- **Faves:** "All Faves" plus a checklist grouped Teams / Artists / Venues, all on by default.
- **"Manage faves ›"** opens the **Edit favorites sheet** directly (§3.11). The mock's note says it opens Profile & Settings; that's superseded.
- **Reset / Done.**
- This replaces the "Show" half of today's `FollowingSheet`. The "manage" half moves to Profile & Settings (§3.11).

**Repo reality (engineering review at a92cf29)**
- **Your plans band:** data is `upcomingPlans` (`personalLog.ts:1122`). Plan states are `Plan.watch` and `Plan.interested` (`types.ts:659–701`); Attending is the default (neither set). No new data.
- **Name the reversal:** this reverses build 6's "your own plans stay in Stubs" (product-decisions:257) on purpose.
- **Knock-on for Your stubs:** once plans move here, the Your stubs page passes an empty `future` to Timeline and drops its "Nothing upcoming yet" card (`StubsScreen.tsx:199–208`).

**Why**
- Kylie (Oct 21, 8:25 PM PT): *"I agree that your plans goes on top of faves. I think faves should just be renamed to upcoming, cause then it's like things that you're following also things that you're attending or watching."*
- Putting plans here also takes them off You, which is your record (§3.6).

**Rejected alternatives and why**
- **Keeping Following with a Faves/Friends switch:** replaced by two tabs.
- **Filter button stacked under search:** Kylie wanted it on one row and no bigger than search.
- **"Future only" Upcoming:** superseded by r3c, which keeps past results above Today (Lean).

**Details, edge cases, empty states**
- **No plans (§6, Upcoming with no plans, Locked (Kylie, 2026-10-22), mock 09):** the band shrinks to one slim prompt, "No plans yet. Mark events Attending or Interested." (wording Lean). This keeps the feature discoverable. Mock 10 (band dropped) is rejected.
- **No faves and no plans:** reuse today's Faves empty state, pointing to the Edit favorites sheet (Lean).
- **Filtered to nothing:** reuse today's filtered empty state on Following › Faves (filters that match nothing) (Lean).
- **Team lines:** use **city shortcuts** (LA Clippers) and the live college naming ("UCLA Football"). The mocks' "UCLA FB" is stale.

**Mocks:** 08, 09, 10 (alt), 11, 12, 13, 14, 15. **Flow:** [`flow/FLOW-02-upcoming.png`](flow/FLOW-02-upcoming.png).

---

### 3.4 Activity tab (was Following › Friends)

**What changes vs live**
- **Live:** `FollowingScreen.tsx`:
  - `FriendsTimeline` (`:300`) with `FriendRow` (`:449`).
  - `mergeFeed` (`:416`) **already groups by event**: one row per event, with people merged by `peopleLine` (`:437`). It covers friends only, over a 60-day window (`SPAN_DAYS = 60`, `:48`).
  - `Timeline` shows the "↑ N earlier" cue (`Timeline.tsx:43–132`, 435d817, Oct 19) and the "↓ Today" pill (`:111–115`).
- **New:**
  - **Renamed Activity (Locked, Oct 22, 12:13 AM PT)** and made its own tab.
  - **Your own entries are mixed in (Locked).** Add your own attended, watched and planned events to the feed.
    - `mergeFeed` already groups by event, so the visible change is your items appearing and **"You" first** in the people line: "You, Sam R. +2 attending".
    - **It's more than a one-liner (engineering review).** Three gaps:
      - (1) `FeedItem` requires `friend: Profile` (`profiles.ts:451–468`).
      - (2) The feed loads from `followingFeedWithStatus` (`profiles.ts:524–555`), which reads **approved followees only** through `entry_cards`/`plan_cards`, so your own rows aren't in it.
      - (3) `FriendsTimeline` renders only when signed in (`FollowingScreen.tsx:335`).
    - **Cheapest fix:** build the "You" items locally from `yourEntries` + `upcomingPlans`, give them a self pseudo-profile, merge by eventId in `mergeFeed` (`:416–428`), and sort You first in `peopleLine` (`:437`). No server change.
    - **Name the reversal:** build 3 DECISIONS §2 rejected a toggle that left your own status showing, and build 6 excluded your own plans from Following (product-decisions:257). Build 7 reverses both on purpose.
    - Kylie spotted the existing grouping (Oct 22, 12:13 AM PT): *"shouldn't it already do this because the organization is… grouped by event? Is that not how it already works?"*
  - **No earlier line or cue (Locked, Oct 21, 11:31 PM PT).** Activity opens on Today, past months sit straight above it when you scroll up, and the "↓ Today" pill brings you back. There's no "Earlier" band and no "↑ N earlier" cue on Activity.
  - **Filter button** on the title row, the same size as search (shared with §3.3).

**New: Filter activity sheet**
Kylie asked for this mock (Oct 22, 1:42 PM PT). The specifics are Lean.
- **Hide mine (Locked as a feature):** a toggle that removes you from people lines and drops rows that are only you. It's **sticky**: it stays on until you turn it off, including across sessions.
  - **Storage (§6, Hide mine storage, Locked (Kylie, 2026-10-22)):** saved **per device** for now, as a `prefs.ts` key (localStorage, like `explore-activity`, no migration). Moving it to the account is Backlog (§11).
- **People:** "All people", then a checklist of everyone in your feed with "N in your feed". All are on by default. Uncheck someone to hide their rows.
- **Activity chips:** All / Attended / Attending / **Watching** / Watched / Interested.
  - **Watching added (§6, Watching chip, Locked (Kylie, 2026-10-22)),** because the feed shows "Priya is watching".
- **Reset / Done.**
- **Filter on:** a solid sliders button with a count, plus a removable chip (e.g. "Hide mine ✕") and Clear (mock 20).

**Why**
- Kylie (Oct 22, 12:05 AM PT): *"whether you think we should name the friends tab friends or like feed… it should include the user's own activity."*
  - She leaned toward Activity and ran it past two other models. Both said **Activity**.
  - Kylie: *"I agree, that's fine."*
- Claude's reasoning: "Friends" sounds like a people list and becomes inaccurate once your own entries appear. "Feed" implies an endless, algorithmic scroll and fits forward-looking plans badly. Letterboxd and Untappd use "Activity" for this.
- On the earlier line, Kylie (Oct 21, 11:09 PM PT): *"I have not really been liking the Arrow and earlier line, at least not as a default at the top."*
  - She was shown a "line appears on scroll" version and a "no line at all" version.
  - At 11:31 PM PT she said: *"I think I actually like the alternative where there's no line at all."*

**Rejected alternatives and why**
- **"Feed":** algorithmic baggage.
- **"Friends":** reads as a contacts list, and is wrong once your own entries appear.
- **Gemini's "Following / You" segmented toggle at the top:** duplicates You and adds a header line.
- **An "earlier" line that appears only on scroll** (mock 17), and the live "↑ N earlier" cue: Kylie wants no line.

**Details, edge cases, risks**
- **Risk (noted by both models):** "Activity" can read as a notifications tab.
  - The Today line and the event-row format do the work of making it read as a timeline.
  - Any future notifications go behind a **bell icon**, not into this tab (Lean).
- **Signed out:** *corrected after the engineering review.* Keeping only today's signed-out card conflicts with "your own entries are mixed in", because a signed-out user still has local entries. **Locked (Kylie, 2026-10-22; §6, signed out):** signed out, Activity shows **your own local entries**, with the same sign-in card used on You above them.
- **Managing people** (requests, find people, following / follows you) moves out of the sliders sheet into **Profile & Settings › People**, the existing `people` section in `SettingsScreen.tsx` (`SECTIONS`, `:339`). FollowingSheet's `FriendsSide` (`:125–126`) duplicates it today.
  - The Activity filter only filters. This is Lean.
  - Kylie did lock that the "N people · N requests" link moves to Profile & Settings (§3.6, piece 2).
- **Hide mine with no friends yet:** the feed is only you, so hiding yourself shows the empty state (Lean).

**Mocks:** 16, 18, 19, 20 (17 rejected). **Flow:** [`flow/FLOW-03-activity.png`](flow/FLOW-03-activity.png).

---

### 3.5 Cost logging (Stub it sheet) and Edit stub on the event page

**What changes vs live**
- **Live:** `src/components/StubSheet.tsx` has no cost field. The optional rows are **Tags** and **Seat**:
  - **Tags:** `.stub-tags-row` with a "Tags" label (`:249–270`). Its button reads **"+ Add tag"** (singular, `:266–268`).
  - **Seat:** `<SeatsRow>` at `:271`. The "+ Add seat" text is in `SeatsRow.tsx:27–29`.
  - Gating differs:
    - Tags show for any kind except Interested (`canTag`, `:81`), so plans can carry tags.
    - Seat shows only for `kind === 'attended' && entry && entry.kind !== 'live-broadcast'` (`:271`).
    - Cost needs its own gate: attended **and** watched stubs, plus same-day Attending/Watching plans (§6, same-day logging). Widen the Seat gate to same-day Attending plans too.
  - There's no cost or price field anywhere today. **It's new data, but it needs no migration** (see Repo reality below).
- **New, a Cost row (Locked):** a third optional row, **"+ Add cost"**, collapsed by default. It sits with Tags and Seat. All three use **action blue**, with **no divider** between Seat and Cost.
  - **Correction (engineering review):** today "+ Add tag" and "+ Add seat" are **violet**. They share `.stub-tags-add`, which uses `var(--fight)` (`styles.css:7581–7591`). Making all three blue is a one-token swap, `--fight` → `--action`, on `.stub-tags-add`. It doesn't touch `.tag-chip` (`:7471`). Tag chip colour is the builder's call (§6, tag chip colour, Locked (Kylie, 2026-10-22)).
  - No divider is easy. The only rule is the `border-top` on `.stub-tags-row` (`:7572`), above Tags. `.stub-seats-row` (`:7967`) has none, so the Cost row should copy SeatsRow.
  - Kylie, Oct 21, 1:27 PM PT: *"yes, make row color the same blue so they match."*
  - Kylie, Oct 22, 12:43 PM PT: *"Why is there a line in between seat and cost? That seems weird. These all kind of fill out the same optional things to fill out."*
  - It's never a forced step and never a prompt.
- **Attended, when opened (Locked, mocks 22–24):**
  - It opens with a **Ticket** line already set, and the cursor in its amount. A person who only logs a ticket price makes no extra taps.
  - The amount is always **user-typed**. Never prefill it from the live ticket price. That would break "prices are fetched live, never stored" (build 3 DECISIONS §7; `tickets.ts`).
  - The amount is labeled **"You paid"** and stores exactly what you type (§6, cost amount, Locked (Kylie, 2026-10-22)). The main use is your own single ticket.
  - **Optional quantity** on the ticket line (e.g. 2 × $68), only for when you bought more than one. **No automatic splitting.** This feeds "avg ticket per seat" in Spend details.
  - **Season tickets:** enter the per-game price (§6, season tickets, Locked (Kylie, 2026-10-22)). A season-ticket cost feature is Backlog (§11). `Seats` has no quantity (`types.ts:534–540`), so keep `qty` on the ticket cost line, not on Seats.
  - **Chips** add a line each, in this order: **Parking & Transit**, **Food & Drink**, **Merch**, **Other**.
  - A line-by-line breakdown with a **total**.
  - A plain **Free** chip, with **no reason prompt**.
- **Watched (Locked, mocks 25, 26):**
  - **No preset line.**
  - Chips: **Stream / PPV**, **Food & Drink**, **Other**. No Merch and no Parking.
- **Data rule (Locked):** cost has three states: **not entered**, **Free ($0)** and **paid**.
  - Blank never counts as $0.
  - All spend stats cover logged amounts only and say so (e.g. "Based on 9 of 14 events with cost"; the wording is Lean).
- **Event page, Edit stub (Locked, Oct 21, 1:27 PM PT):** *"should be able to 'edit stub' on the event page, where the edit of the entire stub lives."*
  - **Live:** `EventScreen.tsx:313–317` shows "Edit" only when the stub has tags.
  - **New:** "Edit stub" shows **whenever you have a stub** and opens the full stub (Attended/Watched, tags, seat, cost) for editing. This is how cost gets added after the fact.
    - Live gate: `EventScreen.tsx:313–317`, `you.kind !== 'interested' && userTags.length > 0`.
    - It's cheap. `StubSheet` is already the whole editor (choice, Where?, tags, seat), so this is mostly a condition plus copy change.
    - **Date is not editable here** for catalog events, because the date belongs to the event. Manual entries edit their date on `ManualEntryScreen` (`/entry/:id`).

**Repo reality (engineering review at a92cf29)**
- **No migration needed.**
  - `entries.data` jsonb stores the whole Entry except note/with (`storage/supabaseStore.ts:71–87`). Plans spread into `data` (`:89–101`). A new `cost` key syncs as it is.
  - **Cost stays private automatically.** Since migration 0017, only the owner reads `entries`. Friends read `entry_cards`/`plan_cards`, which whitelist columns (`0026_stub_visibility.sql:116–157`).
  - Local storage keeps unknown fields (`localStore.ts:42–48`), so signed-out cost survives on the device.
  - JSON export (`logBackup`, `personalLog.ts:1266–1274`) includes cost automatically.
- **Suggested shape:** `cost?: { free?: true; lines: { kind: 'ticket'|'parking'|'food'|'merch'|'stream'|'other'; amount: number; qty?: number }[]; currency?: string }`.
  - Absent = not entered; `free: true` = $0; lines = paid.
  - Clearing to blank **deletes the key**. It never writes 0.
  - Add it to `Entry` (`types.ts:543–653`) **and** to `Plan` (`:659–701`), because same-day plans can carry cost (§6, same-day logging: option A).
  - Add a setter next to `setEntrySeats` (`personalLog.ts:1338`).
- **Plan → entry carry.** `settlePassedPlans` (`personalLog.ts:1053–1115`) copies fields one by one (userTags `:1089`, watch fields `:1092–1097`). Cost and seats **can** sit on a Plan (§6, same-day logging: option A), so add both there and in `addManualPlan` (`:334`). Otherwise they're **silently dropped** at settle. **`settlePassedPlans` must carry them.**
- **Tap-size bug to fix while you're here.** The filled seat line `.stub-seats-line` is 32 px with **no** `::after` extension (`styles.css:8250`), which is under 44 pt (product-decisions:218). Give it, and the new cost line, the same extension as `.stub-tags-add` (`:8140`, `:8199`).

**Why**
- Kylie wants optional cost logging so the app can show spend stats (Oct 20 asks relayed to the design assistant: what she paid, split into ticket, parking and other; total per year and per venue).
- From the Oct 21 form (via the design assistant's summary; the form file isn't stored): cost style **B, a collapsed row**. No prompt and no "skipped" marker. Record **"what you paid, no per-person maths"**.
- **Category set:** research (§7) says friction comes from choosing a category before typing, or from categories that overlap. It doesn't come from the number of categories. Hence the preset Ticket line plus additive chips.
  - Kylie, Oct 22, 12:43 PM PT: *"I think parking, especially for LA, but maybe put that first, and then food and drink, and then merch. Travel and stay, I don't think is like a super popular category. I wonder if we just include that in other."*
  - Kylie, 12:57 PM PT: *"if you can capitalize the D in drink, that'd be cool."*
- **Free without a reason:** Kylie, 12:43 PM PT: *"As someone who gets a lot of free tickets to a lot of games, it's a weird thing to push people to answer… Psychologically, it feels weird… I think we remove it."*
  - At 12:57 PM PT: *"maybe just leave it… you can put the why as… a tag… like work. Or gift or comp."*
  - So reasons live in **Tags**, not in cost.
- **Watched:** Kylie, 12:43 PM PT: *"I think we should take out merch for this. On, under watched at least."*

**Rejected alternatives and why**
- **A "What did you pay?" step right after "I was there"** (Oct 20 alternatives): it adds a forced step. The collapsed row won.
- **Per-person splitting maths:** rejected in the form.
- **A "skipped" marker:** rejected in the form. Not entered is just blank.
- **A Free-reason picker (Work / Gift / Comp…):** removed. Use tags.
- **"Travel & Stay" as its own chip:** folded into Other.
- **Merch on Watched:** removed.
- **A divider above Cost:** removed.
- **"Spend" instead of "Cost":** Kylie raised it (12:57 PM PT) but didn't switch. The row stays **"+ Add cost"**. Stats pages use "Spend" (§3.9).
- **"Transportation" alone:** she settled on **Parking & Transit**. Parking is what LA users think of first.

**Details, edge cases**
- **Amount meaning (§6, cost amount, Locked (Kylie, 2026-10-22)):** store what you type, labeled **"You paid"**. The main use is your own individual ticket. Quantity (2 × $68) is optional and only for buying more than one. Nothing is divided automatically. The r2 mocks' "Your share" label is superseded.
- **Currency:** the user's locale. **Store the currency code with the amount**, so a later locale change can't alter past amounts. No multi-currency in build 7 (Lean; Backlog §11).
- **Editing a cost back to blank** returns it to "not entered", not $0.
- **Free + amounts:** choosing Free clears the amounts. Adding an amount clears Free (Lean).

**Mocks:** 21 (collapsed), 22 (ticket open), 23 (multiple lines + total), 24 (free), 25, 26 (watched). **Research:** [`research/03-cost-categories-claude.md`](research/03-cost-categories-claude.md), [`research/04-cost-categories-gemini.md`](research/04-cost-categories-gemini.md).

---

### 3.6 You tab: the seven pieces

**What changes vs live**
- **Live:** `src/screens/YouScreen.tsx` (232 lines) stacks, in this order:
  - **its own header** (`:120–141`): avatar (opens SettingsPanel), name, @handle, and "N people · N requests"
  - `<SettingsPanel>` (`:143`)
  - `<AccountBlock/>` (`:145`): **sign in / sign out / sync only** (`AccountBlock.tsx:15–19`). It isn't the header.
  - a warning
  - the filter chip row (`:104–116`, `filterChoices` from `personalLog.ts:1165`)
  - `YourYear` (`:155`): the LADDER and "your usual" read from `src/components/YourYear.tsx` (128 lines; "your usual" at `:43`, `:77–86`), with its own year/all toggle
  - `Stats` (`:169–187`): stat grid `:171–179` + four `CountList`s `:180–183`
  - Stats and CountLists follow the chip filter but **not** YourYear's year toggle. The new year card needs year scoping, which is new.
- **New (Locked, Oct 21–22):** You is **your personal record only**. It has exactly these pieces, top to bottom (mock 27):
  1. **Upcoming row:** a small row, "Upcoming · N plans ›", linking to the Upcoming tab. That's the only place plans appear on You.
  2. **Compact header (mock 28):** avatar (tap → Profile & Settings), name, home city, "Private profile".
     - The left-aligned version is chosen. The centered version (mock 29) is rejected.
     - The "N people · N requests" link moves to Profile & Settings › People.
     - Search stays in the top right. **No gear icon.**
  3. **Year card (mock 30):** Flighty-style.
     - A fixed big number, "N events attended · N watched", for the year.
     - Plus **4 auto-picked stats** from a pool (e.g. venues, cities, most-seen team, top tag, longest streak).
     - **No money on the card.**
     - "Your year ›" on the card header opens the Your year page (§3.9).
     - The pool and ranking are Lean. Mocks 31 and 32 show two examples of auto-picking.
     - Where each stat comes from (engineering review):
       - venues: `logStats.venues` (`personalLog.ts:1169–1182`)
       - most-seen team: `byTeamSport`, counting **every team you've seen**, not just Faves; each game credits both teams (§6, team attribution)
       - top tag: `tagSummaries` (`stubTags.ts:53`)
       - cities: `Entry.metroId` (`types.ts:603`; it's optional, so fall back)
       - also available: "Hours at N games" (`hoursAtGames`, `results.ts:57`)
       - longest streak is **new** and day-precision only
  4. **Recap › and Ranks ›** as a two-cell footer inside the year card (mock 34).
  5. **"Your stubs" preview (mock 33):** the 4 newest stubs and a plain **"See all ›"** with **no count**. It opens the Your stubs page (§3.7).
  6. **Faves row (mocks 35–37):** your hand-picked faves, each with "Seen N", plus **"Edit ›"**, which opens the Edit favorites sheet (§3.11).
     - Team names here use **city shortcuts** (§3.11 naming rule).
     - **"Seen N" already exists:** `FavoritesScreen.tsx:108` `countFor` (via `entryMatches`, `favorites.ts:128–149`), shown as "Team · N events" (`subFor` `:320–323`), and on the team page as "N games in My Stubs" (`FavoritePage.tsx:196`, `:459`). Venues match by exact venue string, so a renamed venue undercounts.
     - Sort most-seen-first with the same comparator as §3.11.
     - Empty state (mock 37) is Locked for brand-new users (§6, brand-new user).
     - "Seen N" is the **same all-teams count** used everywhere else, shown here for the things you follow. It doesn't mean stats are Faves-only (§6, team attribution).
  7. **Gone from You:** the Stats block, the By type/team/sport/venue lists, and the filter chip row. Their content now lives in Your year, Ranks and Recap. The chip row's team/sport logic (`filterChoices`) moves into the Your stubs filter as "Team or sport" (§3.7).
- **The old `YourYear` component: rename it.** It collides in name with the new **Your year** page. Rename the **component**, e.g. `YourYear.tsx` → `FrictionLadder.tsx` (or `YourUsual`). That's a one-import change (YouScreen `:25`, `:155`). Keep "Your year" for the page.
  - **Correction:** Compare does **not** depend on it in code. `CompareScreen.tsx` imports nothing from `YourYear` and computes no median (its imports are `:1–30`). The only link is conceptual: YourYear's doc comment (`:17–21`) calls the median "the yardstick a side-by-side compares against".
  - The seven pieces have no slot for the LADDER / "your usual" read. **It moves to the Your year page, under the stats** (§6, "your usual" read, Locked (Kylie, 2026-10-22)), as `FrictionLadder`, keeping the 8px read-tile word exception (§3.9).

**Repo reality (engineering review at a92cf29)**
- **Before the rebuild:** `ProfileScreen.tsx:5` imports `HeaviestStat`, `Stat` and `heaviestEntry` from `YouScreen.tsx` (`:189–212`). Move them to a component file first (build order step 1).
- `CompareScreen.tsx:47` has a BackLink to `/stubs`. Update it with the routes.
- **Signed-out sign-in path:** the seven pieces don't place `AccountBlock`, but a signed-out user still needs a way to sign in. **Locked (Kylie, 2026-10-22; §6, signed out):** a sign-in card at the **top of You** while signed out, plus the `account` section in Profile & Settings.
- New pages (Your stubs, Recap, Ranks, Your year, Spend details) go under `/you/*`, so NavLink prefix matching keeps the You tab lit.
- CSS: `.you-header` `styles.css:1367`/`:8091`, `.stats-block` `:2835`, `.stat-grid` `:2946`.

**Why**
- Kylie, Oct 21, 8:24 PM PT, on the D1–D5 directions: *"I think V2 is pretty solid. It gives, like, a good overview, and then you can click into literally any of these… filters or views."*
  - Also: *"I want all of these things just as, like, features that you can turn to or open up, rather than, like, baseline."* So Recap, Ranks and Calendar are things you open.
- On the year card stats, Kylie, Oct 22, 1:04 AM PT: *"I think I want to include venues… I might prefer venues over spent cost. I'm not sure how many people want to see a stat of how much they've spent. At least not just upon first glance. Maybe if they go looking for it, that's a different story… Like Flighty has this kind of cool statistical information."*
  - That's why there's no money on the card. Spend lives one level down, in Your year.
- On the history becoming a preview, Kylie, Oct 22, 1:42 AM PT: *"do you think this belongs here on this You page? It's kind of turned into a pretty… fulsome thing… Maybe it's like a, there's a preview, and then you can open it to its own page."*
- On "See all", Kylie, Oct 22, 10:36 AM PT: *"instead of saying see all, you know, N11 or however many, maybe just see all."*
- On the gear, Kylie, Oct 21, 1:30 PM PT: *"putting the gear icon in the top right of the header next to search moves search from that top right corner in a way that I don't like… Maybe the avatar… I don't think it's like that unusual for settings to be in the avatar."*

**Rejected alternatives and why**
- **D4 (recap on top):** *"So I guess in theory D4 is out."*
- **D5 (calendar as the baseline):** Calendar is a view you open (inside Your stubs).
- **A gear icon next to search:** it moves search.
- **A centered header** (mock 29): not chosen.
- **A Spent card on You:** from the Oct 21 form, later superseded. Money stays off You's first screen.
- **"See all (N)" with a count:** it changes constantly.
- **Showing plans on You:** plans belong in Upcoming.

**Details, edge cases**
- **Brand-new user** (no stubs, no faves) (§6, brand-new user, Locked (Kylie, 2026-10-22)): the year card shows 0 with a nudge toward the "+". The Your stubs preview is hidden until the first stub. The Faves row shows its empty state (mock 37).
- **A stat with too little data** shouldn't be auto-picked (e.g. a streak of 1) (Lean).
- **The "8px read-tile word" exception** from the Oct 21 form travels with the LADDER / "your usual" read to the Your year page (§6, "your usual" read). This comes from the design assistant's form summary and is unverified against the form file.

**Mocks:** 27–37. **Flow:** [`flow/FLOW-05-you.png`](flow/FLOW-05-you.png). Note: this re-rendered flow still pictures Your year r2 and an older "Not mocked: Favorite teams" box. This doc and mocks 50–53 and 61–66 supersede it.

---

### 3.7 Your stubs page (full history, moved off the Stubs tab)

**What changes vs live**
- **Live:** `StubsScreen.tsx` is a tab with:
  - chips **All / Sports / Concerts / Watched / Attended** (`:127–145`) plus a **Tag** picker (`:146–175`)
  - **no Plans chip and no year chip** (the year toggle belongs to YourYear on You)
  - plans as the `future` side of the same Timeline, not a separate section (`upcomingPlans`, `:60–61`)
  - the floating FAB (`:216`)
  - Only the **Dates filter** and **dropping plans** are truly new here. The rest is moving existing pieces.
  - The shared Timeline's "↑ N earlier" cue also shows here today. It's removed everywhere (§6, earlier cue).
- **New (Locked):** a **pushed page** called "Your stubs", opened from the You preview's "See all ›" (mocks 38–43).
  - **‹ You** back button.
  - **Filter + search** on the title row, at the same size rule as §3.3.
  - **View switcher:** **List** (default) / **Grid** / **Calendar**.
  - **No year chip in the header.** Dates go inside the filter.
  - **No plans** (they're in Upcoming) and **no FAB** (the tab-bar "+" replaces it).
- **Filter sheet (Locked, mocks 39, 40):**
  1. **Dates** first (From–To, plus All time / This year / Last year / Last 30 days)
  2. **Type** (Attended / Watched)
  3. **Kind** (Game / Concert / Other)
  4. **Team or sport** (moved from You's chip row, `filterChoices`, `personalLog.ts:1165`; not new logic)
  5. **Tags** (reuse the existing tag picker, `StubsScreen.tsx:146–175`)
  - With a filter on: a count badge on the button, plus removable chips.
- **Grid (mock 41):** light cards, 3 across, about 12 per screen. Lighter than the r4 tiles, which Kylie called bulky.
- **Calendar (mock 42):** a 12-month strip above a month grid. A dot means attended; a ring means watched.
  - **Reuse the existing month grid:** `CalendarPanel` markup (`CalendarScreen.tsx:51`), `.cal-grid` (`styles.css:1261`), and the `lib/dates.ts` helpers (`monthTitle` `:113`, `shiftMonth` `:123`, `monthCells` `:130`, `clampMonth` `:143`).
  - Week start: `CalendarPanel` is Sunday-first and `WeekCalendar.tsx` is Monday-first. Pick one.
  - Entries whose `precision` is month/year/span/unknown (`types.ts:512–524`) can't sit on a day. Other lists already filter to `precision === 'day'` (`HomeScreen.tsx:115`, `StubRows.tsx:16`). Calendar needs a **"No exact date"** bucket. The Dates filter needs a rule for them too (lean: include them when their month or year overlaps the range).

**Why**
- Kylie, Oct 22, 1:41 AM PT: *"I'm good with list by default, plus grid and calendar… I hope it filters like attended versus watched versus whatever else."*
- Kylie, 1:30 AM PT: *"It shows this grid calendar, but why doesn't it show me calendar?"* So Calendar is a real third view.
- On the year chip, Kylie, Oct 22, 10:45 AM PT: *"we already have a filter. Why not include the year also in that filter? It seems like there's two… spots for filters and that… is confusing."*
- On the grid, Kylie, 10:36 AM PT: *"grid looks a little not funny… It's really bulky."*

**Rejected alternatives and why**
- **A year chip in the header, plus a filter:** two filter spots, which is confusing.
- **Full history inline on You:** too long. It became a preview plus this page.
- **Keeping a Stubs tab:** its slot went to the "+".

**Details, edge cases**
- **Empty after filtering:** "No stubs match" + Clear (Lean).
- **No stubs at all:** this page can't be reached, because the preview is hidden (Lean).
- **Stub rows use city shortcuts** for team names.

**Mocks:** 38–43.

---

### 3.8 Recap, Ranks and Tags

**What changes vs live**
- **Live:** there's no Recap or Ranks page. The closest thing is `CountLists` on You (By type/team/sport/venue, `YouScreen.tsx:180–183`).
  - Tags exist: chips in `StubSheet` and `.tag-chip` in `styles.css` (~`:7471`, violet).
- **Recap (Locked as a scrolling page, mock 44):**
  - A new pushed page, opened from the year-card footer.
  - **A scrolling page of moments** (e.g. first event of the year, most-seen team, biggest crowd, "Top tag" (mock 48)).
  - **No photos in build 7.** There's no photo field or storage anywhere (`types.ts`), so "stub photos where they exist" has no data. Treat it as future.
  - Existing helpers: `biggestCrowd` (`personalLog.ts:983`) and `toughestFights` (`:989`). Verdict-based moments need the cloud catalog (`ratingForEntry`, `:1190`); locally they show "—". Not a Wrapped-style tap-through story.
  - The exact set of moments is Lean.
  - **Sharing is out of build 7** (§6, Recap sharing, Locked (Kylie, 2026-10-22)). Leave out the share icon drawn in the mock's header. Share cards are Backlog (§11).
- **Ranks (Locked, mocks 45, 46):**
  - A new pushed page, opened from the year-card footer and from each Your year "See all ›".
  - **Count only:** a ranked list by number of events. There's **no** "By count / My order" switch, no hand-ordering and no drag grips.
  - **Rounded pill tabs** (like the rest of the app): **Teams / Venues / Cities / Artists / Tags**, all in one row.
  - On the Tags tab, tapping a tag shows its stubs. Suggested: open Your stubs with that tag filter applied (Lean). `TagScreen` (`/stubs/tag/:tag`, `App.tsx:87`) already does this. Either works; the filter route avoids having two screens.
  - **Count-only is feasible with existing data, and no score is needed:**
    - Teams: `byTeamSport` / `entryTags`, counting **every team you've seen**, not just Faves. Each game credits both teams (§6, team attribution)
    - Venues: `byVenue`
    - Artists: show `sides`
    - Tags: `tagSummaries` (`stubTags.ts:53`)
    - Cities: `Entry.metroId` (optional; fall back to the default metro)
    - It fits "compare nights, never rank people" (product-review-decisions:71), because these rank your own things.
- **Tags across You (Locked, Oct 22, 12:04 PM PT):**
  - A tag stat in the year card's auto-pick pool (mock 47)
  - A "Top tag" moment in Recap (mock 48)
  - A Tags section in the Your stubs filter (mock 49)
  - A Tags tab in Ranks (mock 46)
  - A Tags top-3 in Your year's Most seen (§3.9)

**Why**
- Kylie, Oct 22, 11:57 AM PT: *"incorporate tags in here… throughout the entire You page… on the ranks page with the teams, venues, cities, and artist tabs, there's like a your own tags."*
- Kylie, 12:03 PM PT: *"There shouldn't be a by count in my order. I didn't want my order at all. My way of doing that… was adding the tags tab."* Tags give you your own groupings without manual ordering.
- Kylie, 12:07 PM PT, on tab style: *"can you move them back to the… pill looking tabs."*
- Recap vs Your year: Kylie, 2:19 PM PT: *"I don't want it to look too similar to the actual recap page."* Recap is the **story**; Your year is the **scoreboard** (§3.9).

**Rejected alternatives and why**
- **"By count / My order" toggle with hand-ordering:** Kylie didn't want manual order at all.
- **Paper-tab (folder) style tabs:** she wanted pills.
- **Wrapped-style tap-through Recap:** the scrolling page was chosen. On Oct 21 Kylie wanted these as things you open, not the baseline.
- **Recap on top of You (D4):** out.

**Details, edge cases**
- **Tag chip colour: builder's call (§6, tag chip colour, Locked (Kylie, 2026-10-22))** (Kylie, 12:09 PM PT: *"I like the pop of color. I wonder if we just leave that to, up to the builder"*).
  - The tension: live tag chips are violet, and violet is reserved for friction elsewhere. The design assistant suggested neutral ink, and Kylie didn't adopt it.
- **No tags yet:** the Tags tab shows a short empty line explaining that tags come from stubs (Lean).
- **Ranks rows use city shortcuts** for team names.

**Mocks:** 44, 45, 46, 47, 48, 49.

---

### 3.9 Your year page and Spend details

**What changes vs live**
- **Live:** no such page. The live component called `YourYear` (`src/components/YourYear.tsx`) is the "your usual" read on You. It's a different thing (see §3.6 on the name collision).
- **Your year r3 (Locked; Kylie approved Oct 22, 2:26 PM PT: *"Okay, yeah, well, this looks good. I like it."*), mock 50:**
  - A pushed page, opened from "Your year ›" on the year card.
  - Laid out as a **scoreboard**, from top to bottom:
    1. **Stats card**, with the friction read / "your usual" (`FrictionLadder`, the renamed old `YourYear` component) directly under it (§6, "your usual" read, Locked (Kylie, 2026-10-22)). The 8px read-tile word exception travels with it (§3.6).
    2. **By month**
    3. **Most seen:** three compact top-3 tables for **Teams, Venues, Tags** (Teams counts every team you've seen, not just Faves; §6, team attribution), plain rows with counts, each with "See all ›" into Ranks (mock 51)
    4. **Compact Spend card:** total, a category bar, average ticket, free events, and Watched spend, with **"Spend details ›"** (mock 52)
  - Use compact tables and short lists, with **no big moment cards**, so it never looks like Recap.
- **Spend details (Locked as part of r3, mock 53):** a pushed page with:
  - spend **by category**
  - **average ticket per seat** (uses the ticket quantity from §3.5)
  - **free events**
  - **by venue, per visit**
  - **by team**: credits **both** teams of every game, Fave or not; events with no team stay out (§6, team attribution)
- **Spend empty state (Lean):** "No costs logged yet" with a pointer to adding cost on a stub. Mock 54 is an older r2 layout, used only for this state.

**Why**
- Kylie, Oct 22, 1:43 PM PT, on r2: *"it really focuses on the spend… That's not quite what I was expecting when I opened up Your Year to have such a focus on the… cost and spend."*
  - The design assistant agreed and rebalanced it: money is one section of your year, with the detail one level down.
- This also matches her 1:04 AM PT point that spend is something people go looking for, not something shown at first glance.
- Kylie, 2:19 PM PT: Your year must not look like Recap. Hence the scoreboard treatment.

**Rejected alternatives and why**
- **Your year r2** (spend by venue, per visit and by team on the main scroll): too spend-heavy.
- **A "Highlights" section in a recap style:** renamed "Most seen", with plain rows, to stay distinct from Recap.

**Details, edge cases**
- **Partial data:** every spend number is based on stubs with cost entered. Show "N of M events with cost". Free events count as $0 in totals. Not-entered stubs are excluded (§3.5 rule). Never default a missing cost to 0 anywhere, including in export consumers.
- **Avg ticket per seat:** depends on the ticket-line `qty` (§3.5). If the quantity is missing, treat it as 1 (Lean).
- **Spend by team (§6, team attribution, Locked (Kylie, 2026-10-22)):** credit **both teams of every game**, whether or not either is a Fave. Events with no team (concerts, other non-team events) stay out of By team.
- **Trip costs (§6, trip costs, Locked (Kylie, 2026-10-22)):** trip costs (e.g. a pricey away trip, logged under Other) **count in totals**. Leave per-venue averages as they are in build 7, even though trips push them up. Excluding trips from venue averages is Backlog (§11).
- **By venue:** venue is a plain string on Entry, so a renamed venue splits into two rows.
- **Year selection:** defaults to the current year. How you switch years is Lean (follow the Your stubs filter's Dates pattern, or a simple year picker in the header).
- **Team names use city shortcuts.**

**Mocks:** 50, 51, 52, 53, 54 (empty state only).

---

### 3.10 Profile & Settings (one page, opened from the avatar)

**What changes vs live**
- **Live:** `src/screens/SettingsScreen.tsx`:
  - a "Settings" title (`:173`)
  - a side panel of dropdown sections (`SECTIONS`, `:339`)
  - the favorites dropdown (`:297`)
  - People (`people` section)
  - "Home & cities" dropdown with `CityList` and stars (`:257–265`); privacy `:273`; review `:318`; "Export my events" (`:310–311`, handler `:125–136`)
  - Following is managed through `FollowingSheet.tsx` (Edit Faves; "Also in Settings ›" Link at `:128–130`)
- **New (Locked, Oct 21, 1:30 PM PT onward), mock 55:**
  - **One scrolling page, "Profile & Settings"**, with the profile on top (avatar, name, home city, privacy). It opens from the avatar on You.
  - **No gear icon anywhere.**
  - Sections (the order is Lean, from mock 55): profile → **People** (requests, find people, following / follows you; this is where the "N people · N requests" link from You goes) → **Favorite cities** (§3.11) → **Favorite teams & artists** (§3.11) → the remaining existing sections (live `SECTIONS` is `profile, account, cities, crowd, privacy, blocked, faves, people, events, review, app`). Fold `cities` and `faves` into the two new favorites sections and keep the rest as they are.
  - The old "Home city" and "Edit favorites" rows are replaced by the two favorites sections.
- **FollowingSheet is retired (Lean).** Its "Show" half becomes the Upcoming and Activity filter sheets. Its "manage" half becomes Profile & Settings › People and Favorite teams & artists.

**Repo reality (engineering review at a92cf29)**
- **Deep links must keep working:**
  - `PanelRedirect` (`App.tsx:35–40`)
  - `/you/settings*`, `/you/people`, `/profile/edit` (`App.tsx:97–105`)
  - YouScreen `?panel=` handling (`:52–66`)
  - FollowingScreen `:348`, and FollowingSheet `:128`, `:282`
  - Lean: one page at `/you/settings` with section anchors. `PanelRedirect` then turns `?panel=x` into `/you/settings#x`.
- "Export my events" and the other existing sections carry over as they are. Export includes cost automatically.
- **No Notifications section for now (§6, notifications, Locked).** Nothing in `src` mentions notifications. A future Notifications section behind a bell is Backlog (§11).
- The avatar as the only door to Settings already shipped (build 6 item 8).

**Why**
- Kylie, Oct 21, 1:30 PM PT: *"Avatars not always solely profile. I think profile and settings are frequently near each other."* It keeps search alone in the top right.

**Rejected alternatives and why**
- **A gear next to search:** it moves search.
- **The dropdown side panel:** replaced by one page.

**Details, edge cases**
- **No Notifications section for now (§6, notifications, Locked).** Mock 55 shows one; leave it out (§5).
- **Signed out (§6, signed out, Locked (Kylie, 2026-10-22)):** a sign-in card at the top of You plus the `account` section here in Profile & Settings. Activity shows your own local entries, with the same sign-in card above them (§3.4, §3.6).

**Mocks:** 55. **Flow:** [`flow/FLOW-05-you.png`](flow/FLOW-05-you.png).

---

### 3.11 City switcher, Favorite cities, Favorite teams & artists, and team naming

**City switcher: what changes vs live**
- **Live:** `src/components/AreaSwitcher.tsx` lists **cities with events** (`metrosWithEvents()`, `:31–33`), plus the one you're viewing, with stars to favorite them (stars `:93–101`; `cityOrder`/`favoriteCitiesOf` `:35–40`). Mock 59 is the live reference.
  - "Search any other city" needs the full `METROS` list, not `metrosWithEvents()`.
- **New (Locked, Oct 21, 11:30 PM PT):** the switcher shows **only Home + your favorite cities**, with **no stars**.
  - A **search** field finds any other city. This is Lean (mocks 56, 57).
  - At the bottom: **"Edit favorite cities ›"**, which goes to Profile & Settings › Favorite cities.
  - Kylie, 11:30 PM PT: *"instead of all of the cities being listed in… the city switcher, I actually just want, like, the home and favorited lists to show up."*
  - Kylie, Oct 22, 12:03 AM PT: *"Instead of add favorite cities, maybe edit favorite cities."*
  - Mocks 56 and 58 still say "Add favorite cities ›". That's stale.
- **No favorites yet (mock 58, Lean):** Home only, plus search and the Edit link.

**Favorite cities section (Locked destination; exact UI Lean), mock 60**
- In Profile & Settings: home city with **Change**, favorite cities each with a minus to remove, and **+ Add city** with search.
- **This is a restyle, not new data.** `PersonalLog.favoriteCities` (`types.ts:742`, synced), `favoriteCitiesOf`/`toggleFavoriteCity` (`personalLog.ts:1222`, `:1239`) and the "Home & cities" `CityList` (`SettingsScreen.tsx:257–265`) already exist. Change stars to minus / + Add city.

**Favorite teams & artists section and Edit favorites sheet (Locked; Kylie signed off Oct 22)**
- **Section (mocks 61–63):**
  - Sits under Favorite cities.
  - Three **collapsible** groups, **Teams / Artists / Venues**. Each starts closed and shows its count plus a one-line preview of names. Tap the row to open it.
  - Open groups show **read-only** rows with a grey "Seen N".
  - A **small "Edit"** button in the section header.
  - Kylie, 2:17 PM PT: *"This favorite section can get pretty long, so I would suggest… some sort of chevron dropdown."*
  - Kylie, 2:25 PM PT: *"just put a little edit button, and have that pop up, you can edit all of them… there's no reason to have all that separate."*
- **Edit favorites sheet (mocks 64–66):**
  - One sheet: **search** at the top (it returns only teams, artists and venues; mock 65 shows "Lak"), **Your faves** each with a **minus** to remove, and **Suggested** with **Follow** buttons.
  - Changes save as you go. **Done** closes it.
  - It's the **only** faves editor. It opens from three places:
    - the section's Edit
    - **"Edit ›" on the You Faves row**
    - **"Manage faves ›" in the Upcoming filter**
  - It replaces Edit Faves in `FollowingSheet` and the "Edit favorites" dropdown (`SettingsScreen.tsx:297`).
  - **It's essentially the current picker** (`FavoritesScreen` with `embedded edit`, `:88`; search `:110–135`, Your faves `:205–220`, Suggested `:222–233`; shipped in 1e99cff), restyled into a sheet.
  - The live picker also has **Browse by league** (`:235–270`), and the mock drops it. **Keep Browse by league, collapsed under Suggested (§6, Browse by league, Locked)**. It's the only way to find a team you can't spell.
- **Sorting:** each group sorts by **most seen** (nothing to drag).
  - **Correction (engineering review):** `FavoritesScreen.tsx:65` is **not** your faves. It sorts the **Browse by league** tree (`browseTree`, `:45–66`). Keep Browse A–Z.
  - Your faves ("Your teams / artists / venues", `:205–220`) render in **stored follow order** (`favoritesOf`, `personalLog.ts:1203`), not A–Z.
  - **Change:** sort `on` at `FavoritesScreen.tsx:207` by `countFor(fav)` (`:108`) descending, then `favoriteLongName` A–Z.
    - Memoize the counts into a Map once per render, because `countFor` is O(faves × entries).
    - Use the same comparator in the new section and on the You Faves row.

**Team naming rule (Locked, Oct 22, 2:30 PM PT: *"ok yeah this is a good shorthand"*)**
- **Full official names** (e.g. *Los Angeles Dodgers*, *Los Angeles Chargers*) show **only** in:
  1. the **Favorite teams & artists section** and the **Edit favorites sheet**
  2. the **team page header**
  3. **search results**
- **Everywhere else keeps city shortcuts** (*LA Dodgers*): event titles, Explore, Upcoming, Activity, stub rows, Ranks, Your year, and the Faves row on You.
- **Common shorthand always stays** (*UCLA*; Kylie, 2:29 PM PT: *"no one ever spells out University of California, Los Angeles"*).
- Long names **wrap** rather than truncate in the favorites rows.
- **Code reality (verified in the engineering review at a92cf29):**
  - Helpers live in **`src/data/`**, not `src/lib/`:
    - `src/data/teams.ts`: `teamLongName` **`:181`**, `teamDisplayName` **`:193`** (they moved from :174/:186 since 329fc5c)
    - `src/data/favorites.ts`: `favoriteDisplayName` `:195`, `favoriteLongName` `:201`, `favoriteSearchNames` `:207`
    - `FavoriteBadge.tsx` `favoriteName` (`:30`) gives the full `team.name`, but it's only used for aria labels.
  - **Team page header: no change.** `FavoritePage.tsx:230` renders `{team ? (isCollegeTeam(team) ? teamLongName(team) : team.name) : label}`. That gives "Los Angeles Dodgers" for pros and "UCLA Football" for colleges, which already matches the rule.
  - **Search results: change needed.** `SearchSheet.tsx:196` uses `favoriteLongName` → `teamLongName` → `teamDisplayName`, which gives the **shortcut** ("LA Dodgers") for pros. Only the row's aria-label (`:190`) uses the full name. Matching already covers full names (`:147`).
  - **One shared helper:** add `favoriteOfficialName(fav)` to `src/data/favorites.ts`. It returns the same expression as FavoritePage:230 (`isCollegeTeam ? teamLongName : team.name`). Use it in:
    - `SearchSheet.tsx:196`
    - the Favorite teams & artists section and the Edit favorites sheet (today `FavRow`, `FavoritesScreen.tsx:333`, name via `favoriteLongName` `:341`, shortcut)
    - (builder decides) the New stub / Log sheet team search list (`AddEntryScreen.tsx:156`, shortcut today). It counts as search results, so lean yes.
  - **Everywhere else is already shortcut live** (`FaveRow` lead `FollowingScreen.tsx:284`, the Home strip `HomeScreen.tsx:285`, stub rows). Colleges stay "UCLA Football" everywhere (product-decisions:274). So the rule reverses nothing live; it only adds the official name in the three places.

**Rejected alternatives and why**
- **The full city list with stars in the switcher:** too long. Kylie wants only the ones she uses.
- **"Add favorite cities ›":** renamed to Edit.
- **Add-search and suggestions laid out inline in the section:** moved behind one Edit button.
- **An × to unfollow on each section row** (1:54 PM PT version): the section is read-only now. Removing happens in the sheet.
- **Full names everywhere:** Kylie, 2:30 PM PT: *"No, I don't think I want full names everywhere."*

**Mocks:** 56–66. **Flow:** [`flow/FLOW-01-explore.png`](flow/FLOW-01-explore.png) (switcher), [`flow/FLOW-05-you.png`](flow/FLOW-05-you.png).

---

## 4. Global copy and colour rules

**Copy (carried forward and still in force)**
- Never use "going", "~", "night" or "tonight". Say **"Today"** (the Log sheet's "Happening now · Today"; ChatGPT's wireframe "Tonight" doesn't apply).
- Event titles use **Away at Home** (e.g. "Raiders at Chargers"), never "vs.".
- Verdict words come from `src/config/scoreLabels.ts` only. Don't invent new ones in Recap, Your year or the year card.
- **Team naming (Locked, §3.11):**
  - Full official names appear only in the favorites section and sheet, the team page header and search results.
  - City shortcuts (LA Dodgers) everywhere else.
  - Common shorthand (UCLA) always stays.
  - College team lines keep the live format ("UCLA Football").
- **Category names (Locked):** Ticket, Parking & Transit, Food & Drink (capital D), Merch, Other. On Watched: Stream / PPV, Food & Drink, Other.
- **Tab names (Locked):** Explore · Upcoming · Activity · You. The "+" has no visible label. Its accessibility label is "Log an event".
- **The cost row is "+ Add cost".** Stats pages say "Spend" (Spend card, Spend details).
- **Stub-status words** on rows: Attending / Interested / Watching (plans) and Attended / Watched (logged).
- **"See all ›" without counts** (Kylie, Oct 22, 10:36 AM PT).
- **Spend completeness:** state partial data plainly ("N of M events with cost"). Never imply blank = $0.

**Colour**
- **Action blue:**
  - the center "+" and the event page's "+ Stub it"
  - the optional rows in the Stub it sheet (Tags, Seat, Cost), all **action blue**, with no divider between them (Locked). **Live, "+ Add tag" and "+ Add seat" are violet** (`.stub-tags-add`, `var(--fight)`, `styles.css:7581–7591`), so this is a change: swap `--fight` → `--action` on that class.
- **Violet means friction** in the app's existing scheme. The live `.tag-chip` (`styles.css:7471`) is also violet, which conflicts with that. **Tag *chip* colour is the builder's call** (Kylie, Oct 22, 12:09 PM PT). The "+ Add tag" *button* colour is decided: blue. The design assistant's neutral-ink suggestion wasn't adopted.
- **Filled ticket/TV status marks** (logged or planned) use the existing stub/plan colours. **Outlined "+"** on Log rows uses action blue (Lean).
- **Row separators (Locked; answered by Kylie during the engineering review, 2026-10-22):** **Keep horizontal row separators; no vertical separator by the read tile (current behavior is correct).** Live: `.follow-row` `styles.css:9271–9280`, `.timeline-list .tl-row` `:4356–4366`. e8fd776 removed only the read-tile separator. Carry the same row dividers into Upcoming, Activity and Your stubs.
- **Sizes:** don't take type sizes or spacing from the mocks. Use the app's existing tokens (Kylie, Oct 21, 11:32 PM PT).
  - The only explicit sizes Kylie discussed:
    - the **48 px raised "+"** (~7 px rise)
    - the **filter button exactly the size of the search button** on Upcoming, Activity and Your stubs. Live it's 44 px (`.following-filter`, `styles.css:9193–9196`) against search's 36 px (`.round-button`, `:8106–8109`). Drop the override and keep a 44 pt tap area with `::after`.
  - The "8px read-tile word" exception from the Oct 21 form travels with the LADDER read to the Your year page (§6, "your usual" read).

---

## 5. Stale labels in the mockups

These appear inside images. Ignore them; the right text is on the right. Per-image detail is in [`mockups/INDEX.md`](mockups/INDEX.md).

| Stale text in mock | Use instead | Where |
|---|---|---|
| Tab "Friends" | **Activity** | Every r3b/r3c image (01–17, 55–60) |
| "Next up" (You row) | **Upcoming** | 27, 28, 30, 33, 34, 35, 37, 47 |
| "UCLA FB" | **UCLA Football** (live naming, 5fa4114) | Upcoming and Activity mocks |
| "Food & drink" | **Food & Drink** | 21–26 |
| "Parking" | **Parking & Transit** | 21–26 |
| "Add favorite cities ›" | **Edit favorite cities ›** | 56, 58, 60 (annotation) |
| "LA Lakers"-style names in **search results** | Full official name ("Los Angeles Lakers") | 05, 57, any search row |
| "Mosaic lean · Not confirmed" / "Alternative" annotation boxes (design-tool labels) | This doc's Locked/Lean tag wins (e.g. 02 and 61–66 are Locked) | Many |
| "Manage faves ›" → "opens Profile & Settings" (note) | Opens the **Edit favorites sheet** directly | 12, 13 |
| Share icon on Recap header | Leave out (sharing deferred) | 44 |
| "Home city" and "Edit favorites" rows in Settings | Favorite cities section (60) + Favorite teams & artists section (61) | 55 |
| Your year r2 layout | Use r3 (50–53); 54 is for the empty state only | 54 |
| Mocks drawn without row dividers | Keep live horizontal row dividers (Locked rule, §4) | 08–11, 16, 18–20, 38 |
| Earlier line / "↑ N earlier" | None anywhere (Locked, §6, earlier cue) | 17 (rejected) |
| "Your share" label on the cost amount | **You paid** (§6, cost amount) | 22–24 |
| Notifications section in Profile & Settings | Leave out (§6, notifications) | 55 |
| [`flow/FLOW-05-you.png`](flow/FLOW-05-you.png): Your year r2 and a "Not mocked: Favorite teams" box | Your year r3 (50–53) and favorites (61–66) | Flow map |

---

## 6. Resolved decisions

Every question raised in the design draft and in the engineering review of the code is answered. Each is Locked (Kylie, 2026-10-22). The area sections carry the detail and point back here as "§6, <name>".

- **Cost amount:** Locked (Kylie, 2026-10-22). **"You paid"** = her own ticket, stored as typed. Quantity is optional (only when buying more than one). No automatic splitting. (§3.5)
- **Watching chip:** Locked (Kylie, 2026-10-22). Add a **Watching** chip to the Activity filter. (§3.4)
- **Upcoming with no plans:** Locked (Kylie, 2026-10-22). The **slim prompt** line (mock 09). Mock 10 is rejected. (§3.3)
- **Tag chip colour:** Locked (Kylie, 2026-10-22). The **builder's call**. The "+ Add tag/seat" *button* colour is already decided: blue. (§3.5, §3.8)
- **"↑ N earlier" cue:** Locked (Kylie, 2026-10-22). **Remove it everywhere** (Activity, Upcoming, Your stubs), knowingly reversing 435d817. (§3.3, §3.4, §3.7)
- **Notifications:** Locked (Kylie, 2026-10-22). **No Notifications section** in Profile & Settings for now. A bell is Backlog. (§3.10, §11)
- **Global search rows:** Locked (Kylie, 2026-10-22). Search event rows use the **same shared row** (`LogRow`) as the Log sheet. (§3.2, §9 step 7)
- **Trip costs:** Locked (Kylie, 2026-10-22). Trip costs **count in totals**. Venue averages are unchanged in build 7. (§3.9, §11)
- **Season tickets:** Locked (Kylie, 2026-10-22). Enter the **per-game price**. A season-ticket cost feature is Backlog. (§3.5, §11)
- **Recap sharing:** Locked (Kylie, 2026-10-22). **Out of build 7.** Share cards are Backlog. (§3.8, §11)
- **Brand-new user:** Locked (Kylie, 2026-10-22). Year card at **0 with a nudge** toward the "+", Your stubs preview **hidden**, Faves **empty state** (mock 37). (§3.6)
- **Team attribution in stats:** Locked (Kylie, 2026-10-22). **Every game credits both teams**, Fave or not, in Teams seen, Ranks and Spend by team. Concerts and other no-team events stay out of By team. (§3.6, §3.8, §3.9)
- **Same-day logging:** Locked (Kylie, 2026-10-22). Option A: same-day **cost and seat are saved on the plan** and **carried over** when it settles into a stub (`settlePassedPlans`, `addManualPlan`). `ahead` is unchanged. (§3.2, §3.5, §9 step 1)
- **Row separators:** Locked (Kylie, 2026-10-22). **Keep horizontal separators** between rows; **no vertical separator** by the read tile. Current behavior is correct. (§3.3, §4)
- **Hide mine storage:** Locked (Kylie, 2026-10-22). Saved **per device** (`prefs.ts` key). Saving to the account is Backlog. (§3.4, §11)
- **"Your usual" / LADDER read:** Locked (Kylie, 2026-10-22). Moves to the **Your year** page, under the Stats card, as `FrictionLadder`. (§3.6, §3.9)
- **Browse by league:** Locked (Kylie, 2026-10-22). **Keep it**, collapsed under Suggested in the Edit favorites sheet. (§3.11)
- **Signed out:** Locked (Kylie, 2026-10-22). A **sign-in card on You** plus the `account` section in Profile & Settings. Signed-out Activity shows her **own local entries**. (§3.4, §3.6, §3.10)

**Remaining open questions: none.**

Also settled earlier, no question needed:
- **Team page header names:** verified in the engineering review. `FavoritePage.tsx:230` already shows full names for pros, so no change.
- **Compare and "your usual":** verified in the engineering review. Compare doesn't depend on it in code. Rename the old component (e.g. `FrictionLadder`).
- The full-names question (now the Locked rule in §3.11).
- The 4.1 Mild/Spicy wording (the build 7 mocks match the code: 4.1 = Spicy, 3.8 = Mild).

---

## 7. Research summaries (full text in `research/`)

**Logging entry point: Claude ([`01-logging-entry-point-claude.md`](research/01-logging-entry-point-claude.md), Oct 21)**
- In-the-moment apps (Strava, Swarm, Untappd, Beli) put a dedicated action in or over the tab bar. Catalog apps (StoryGraph, Goodreads, setlist trackers) are search-first, with the action on the item page.
- Letterboxd does both, and the complaints about it show the item-page path can't be missing. They also show that a "+" which only opens search adds little.
- Recommends both paths for Fan/Friction:
  - a "+" whose sheet puts today's likely event one tap away (plans, Faves, nearby)
  - the contextual "Stub it" on event pages
- It should work with poor stadium signal.

**Logging entry point: ChatGPT ([`02-logging-entry-point-chatgpt.md`](research/02-logging-entry-point-chatgpt.md) + [`02-chatgpt-wireframe.png`](research/02-chatgpt-wireframe.png), Oct 21)**
- Same conclusion: a global entry point that surfaces relevant events, plus a contextual "Stub it" wherever an event appears.
- Suggested a labeled "Log" button and not treating "+" as a nav destination.
- Kylie rejected the label and used the wireframe only conceptually (*"not the actual visual"*).

**Cost categories: Claude ([`03-cost-categories-claude.md`](research/03-cost-categories-claude.md), Oct 22)**
- The key is how "+ Add cost" behaves when opened: a single field preset to Ticket, with other categories as chips that each add a line.
- Fees go inside Ticket. Travel and lodging belong to trips.
- Three states: not entered / free / paid. Blank is never $0. Show completeness ("18 of 24").
- Out-of-pocket amount with an optional quantity.
- Watched swaps Ticket for Stream / PPV.
- Season tickets: per-game price in v1.

**Cost categories: Gemini ([`04-cost-categories-gemini.md`](research/04-cost-categories-gemini.md), Oct 22)**
- Cost is an optional layer on a vibe-based diary, not a ledger.
- Six chips: Ticket, Food & drink, Merch, Getting there, Travel & stay, Other.
- Defaults to **your share**.
- Comped/free as $0, excluded from the average ticket price.
- Watched: only a single Stream/PPV field.

**What Kylie took from the cost research:**
- the preset Ticket line + chips
- Parking first (as "Parking & Transit"), then Food & Drink, Merch, Other
- Travel & Stay folded into Other
- Free with no reason prompt (reasons go in tags)
- Watched = Stream / PPV, Food & Drink, Other (no Merch)
- the three-state data rule

---

## 8. Flow maps (`flow/`)

| File | Shows |
|---|---|
| [`FLOW-00-overview.png`](flow/FLOW-00-overview.png) | The 5-slot bar and what each slot opens |
| [`FLOW-01-explore.png`](flow/FLOW-01-explore.png) | Explore (unchanged) + the new city switcher → Edit favorite cities |
| [`FLOW-02-upcoming.png`](flow/FLOW-02-upcoming.png) | Upcoming → filter sheet → Manage faves; rows → event page |
| [`FLOW-03-activity.png`](flow/FLOW-03-activity.png) | Activity → filter sheet (Hide mine, People); rows → event page |
| [`FLOW-04-log.png`](flow/FLOW-04-log.png) | "+" → Log an event sheet → Attended/Watched (StubSheet) → optional Tags/Seat/Cost |
| [`FLOW-05-you.png`](flow/FLOW-05-you.png) | You → avatar (Profile & Settings), year card → Your year / Recap / Ranks, Your stubs, Faves → Edit sheet. Re-rendered Oct 22 so it reads "Upcoming", but it still pictures Your year r2 and a "Not mocked: Favorite teams" box. Mocks 50–53 and 61–66 supersede those parts. |

---

## 9. Suggested build order (from the engineering review, one commit per step)

The engineering review proposed this order after reading the repo at a92cf29. It's a suggestion, and the builder can re-slice it.

1. **Groundwork, no visible change.**
   - Move `HeaviestStat`/`Stat`/`heaviestEntry` out of YouScreen (ProfileScreen imports them).
   - Rename `YourYear.tsx` → `FrictionLadder.tsx`.
   - Add `favoriteOfficialName` (`src/data/favorites.ts`).
   - Add the cost type and setter, and add `cost` and `seats` to `Plan` (same-day plans carry them, §6, same-day logging).
   - **Mandatory:** carry cost and seats in `settlePassedPlans` and `addManualPlan`, or they're silently dropped at settle (§6, same-day logging).
2. **Naming.** Search rows, then the favorites rows, use the official name. Verify FavoritePage (no change).
3. **Stub it sheet: Cost row** + "+ Add tag/seat" to blue + the seat-line 44 pt fix + "Edit stub" always shown.
   - Self-contained. The data needs no migration.
4. ⚠️ **Routes and tab bar. This is the one risky commit.**
   - `/upcoming`, `/activity`, `/you/stubs` + redirects (`/stubs`, `/stubs/tag/:tag`, `/following`, `/following?tab=friends`, `/favorites`, `/favorites/edit`) + updates to about 25 hard-coded links + `backFrom` labels.
   - Five-slot bar with a center "+" that, for now, opens the existing `/you/add` content as a sheet. Remove the FAB.
   - Test deep links and back-stacks carefully. The full link list is in §3.1 (Routes).
5. **Upcoming.** Split from FollowingScreen. Your plans band, filter button at search size, filter sheet (Dates, Show, Faves). Your stubs stops showing plans.
6. **Activity.** Local "You" items merged into `mergeFeed`, You first, Hide mine (pref), People/activity filter, the signed-out own feed, no earlier cue (Timeline prop).
7. **Log an event sheet proper.** Happening now / Recent (new per-device "opened" store), row "+" and status marks, a shared `LogRow`. `SearchSheet` event rows use the same shared `LogRow` (§6, global search rows).
8. **Your stubs page.** List (existing Timeline, past only) → filter sheet (Dates, Type, Kind, Team or sport, Tags) → Grid → Calendar (reusing CalendarPanel, with a "No exact date" bucket).
9. **You rebuild.** Header, Upcoming row, year card + footer, stubs preview, Faves row (most-seen sort).
10. **Ranks, then Recap.** Count-only lists first. Recap without photos.
11. **Your year + Spend details.**
12. **Profile & Settings page.**
    - One page with anchors, the Favorite cities restyle, and the Favorite teams & artists section + the single Edit favorites sheet.
    - Retire FollowingSheet.
    - City switcher: Home + favorites + search.

Steps 1–3 can ship before the nav change. **Step 4 is the one risky routing commit.** Steps 8–11 hang off the new You and can be split freely.

**Migrations:** none are required for build 7 as scoped. If one is ever needed, Kylie pastes it (AGENTS.md:140).

**Already shipped. Don't re-specify, just reuse (engineering review):**
- user tags on stubs and plans, TagChip, the tag picker, TagScreen (build 4)
- structured seats and SeatsRow
- stub privacy levels (build 5)
- StubSheet's ticket/TV/bookmark choice icons and Where? chips
- QuickAddSheet (a532785)
- Timeline: today line, Today pill, month bands, earlier cue (435d817)
- Following sliders, chips + Clear, and `mergeFeed` grouping (2437573)
- the Faves picker with search, Suggested and Browse (1e99cff)
- "UCLA Football" naming (5fa4114), pro shortcuts, and the full name on the team page header
- favorite cities data and starring
- per-favorite "Seen N" counts
- the avatar as the only door to Settings (build 6)
- "Export my events" JSON
- the offline catalog cache and local-first log sync

---

## 10. Advisor and Codex second opinions (Kylie's instructions, 2026-10-22)

Fable builds, with Claude Code's advisor turned on (it also points to Fable). Kylie wants the builder to actively use both the advisor and Codex.

Use the advisor and Codex throughout, without stopping for Kylie. Both are automatic: call the advisor yourself, and reach Codex through the codex-rescue agent, which you can invoke directly. Don't use or wait for /codex:review or /codex:adversarial-review; those are user-only commands and aren't needed.

Consult the advisor:
- Before writing code, on your stage plan and build order.
- Before each of the four Codex review stages, on your approach for that stage.
- Whenever you're stuck, about to make a judgment call the notes don't settle, or tempted to change scope.
Record each advisor call in the gap report: what you asked, what it said, and what you did.

Order at each review stage: commit, then Codex review (read-only), then fix what you accept and rerun `npm run build`. If the advisor and Codex disagree, follow the notes and locked decisions first, then the safer option for privacy and data, and record the disagreement in the gap report.

Only stop for Kylie if codex-rescue or the advisor fails outright, for example it isn't available, has an auth error or is out of usage. Then don't stall: finish the build without that second opinion and list the skipped reviews at the top of the gap report so she can run them afterward.

### Codex second opinion, mid-build

> Stage names were fitted to the final §9 build order on 2026-10-22. The substance stays fixed: four review points, Codex read-only, `npm run build` as the gate, straight to main with no PRs, and any SQL goes in the gap report for Kylie to paste.

Work in stages, one commit per stage on main. This repo doesn't use branches or PRs. Before every commit, `npm run build` must pass; it runs the type-check plus the production build and is the only gate, since there's no test suite or lint. Stage files by name, never `git add -A`, and push only after the build passes.

At the end of these stages only, commit and then ask the codex-rescue agent for a read-only review of that stage's diff (`git show HEAD` or the range since the last review):
1. After §9 step 3 (covering steps 1–3): Groundwork, the shared team-name helper, and the cost/seat fields on stubs and plans (check the same-day plan becoming a stub carries cost over).
2. After §9 step 4: Routes and the tab bar (old addresses like /stubs, /following?tab=friends, /favorites/edit and ?panel= links must still land somewhere).
3. After §9 step 6: Activity, merging her own entries into the friends feed (privacy: private stubs, cost and seat details must never reach anyone else's feed or any shared table).
4. After §9 step 12: Profile & Settings merge plus the final pass.

Tell Codex: "Review and diagnose only. Do not edit, create or delete files, run git commands, or touch Supabase. Report concrete bugs, privacy leaks, broken routes and type risks, with file:line."

Weigh what it says, fix what you agree with, then rerun `npm run build`. Record each finding as accepted or rejected, with one line why, in the end-of-build gap report. Then move on; don't stop to wait for Kylie.

If a stage seems to need a Supabase migration or RLS change, don't write or run it yourself. Put the SQL in the gap report for Kylie to paste. Never put tester names, emails or SQL with private data in the repo.

---

## 11. Backlog / future

Not in build 7. Listed so the builder doesn't start them and Kylie can pick them up later.
- A season-ticket cost feature, with default costs per event or team (§6, season tickets). Build 7 uses a per-game price.
- Recap share cards (§6, Recap sharing).
- Hide mine saved to the account instead of per device (§6, Hide mine storage).
- Leaving trip costs out of venue averages (§6, trip costs). Build 7 counts them everywhere.
- Recap photos. There's no photo storage yet.
- A Notifications section behind a bell (§6, notifications).
- Multi-currency.
- Travel & Stay / trips.

---

*Compiled by Grok Bot from Kylie's design chats (Oct 16–22, 2026). First drafted against main at 329fc5c, reviewed against the repo at a92cf29, and approved by Kylie on Oct 22, 2026 (PT).*
