# Fan/Friction: current design rules (as of Oct 11, 2026)

Sources: `ff-claims/build-notes-oct9.md` (B1), `ff-claims/build-notes-2-oct10.md` (B2), `ff-claims/build2-judgment-call-decisions.md` (J, Kylie Oct 11, "final", handed to Claude to build), repo `docs/product/product-decisions.md` (PD) and `docs/design/colors.md` (C).
Build status tags: **[live]** = seen in today's capture (b1c3478). **[pending]** = decided in J, not yet built or not visible live. **[unverified]** = needs sign-in or data I couldn't seed.

## Global copy
- Users are capable: say less, skip fine print, no helper text. No confirm prompts except the one confirm for Remove / Unfollow / Block. (B1 §0, B2 house rules, J)
- "Night" only for a city's date after 5 PM. Otherwise "Today". "Today/tonight" on a favorite's next date follows the same 5 PM split (R16). [live: Home says "Today in Los Angeles" at 1 PM] **Superseded Oct 16–17, 2026 (build 6, item 11): "night" stays out of app copy except run labels (held); the story heading reads "The evening".**
- Reads always show tenths (4.7) plus the word. Never "x/10". Ladder: Chill 1–2, Mild 3–4, Spicy 5–6, Brutal 7–8, Cooked 9–10.
- Crowd format "k" rule: compact on glanceable surfaces, always thousands with k, never a bare number. 60k / 9.5k / .6k (under 1,000 = one decimal, no leading zero). Full numbers only where there's room and precision helps. (B1 C073, §6.3)
- Say "Log an event" and "My Stubs". The clock form is "7:30 pm".
- Deferred: the "Famous nights" heading (clashes with the night rule). Waiting on Kylie.

## Color roles
- **Dodger blue #005A9C = action only**: buttons, links, chevrons, selected tab, "Why 4.7 ›". Every former gold button is now action blue. [live]
- **Gold = crowd only**: map dots and glow, crowd bars (#E3A600 on the Why card), the "Biggest crowd" badge with ink text, and the **filled two-person crowd icon (#B98500) beside every crowd figure and only crowd figures**, never beside Attended or other counts. Watched rows still show the event crowd with the icon. [J7: pending everywhere-coverage]
- Exceptions: the Cooked read keeps gold text on ink. Kept as is: the gold ring on stub cards (R13, a future mock may try grey or dodger) and the gold slash in the logo (R15).
- **Violet = friction**: Squeezed #E6DDF8 with ink text, Swamped #6A3FBF, Steamrolled #2C1A57, Unopposed #EEF2F7 with #4B5A70 text. #B39DE6 for graphics only.
- Rejected: gold tab-bar dot or any gold decoration, gold text on light, gold pill with an ink number, glow dot in text rows, outline crowd icon, #C08C00. Also rejected: violet on links or "Why", violet calendar shading, violet crowd bars on Why, #FFD100 bars, the blue friction ramp, the orange-to-maroon ramp.

## Friction and tags
- On-screen words: **Unopposed · Squeezed · Swamped · Steamrolled** (the data keeps Low/Moderate/Heavy/Extreme). "Unopposed" only on the event page. Events under 5k get no pill and no "Small room" label. Rejected: the old severity words and a swords icon.
- **Two tags** under every listed title: the occasion as a quiet outline tag (NOTABLE / MAJOR / MARQUEE; Routine shows nothing), then the friction pill, word only. No OCCASION/FRICTION column headers. [live]
- "by {top rival} +N" only on the chip card, the event page and the share card, never in lists. A rival is another 5k+ event starting within an hour (the one-hour rule holds everywhere).

## Header and navigation
- Tabs: Home, Explore, Favorites, You. The app opens on Home. [live]
- Explore: the city switcher is centered alone on the top row, with its menu centered under the chip and sized to the longest name. The read box sits left of the date and the day strip runs full width. [live]
- **One global search, top right on every tab** (Home, Explore, Favorites, You), the same sheet everywhere: "Teams, artists, venues, dates, people"; chips Tonight · This weekend · Pick a date. Favorites loses its own search bar. [live: button present]
- Settings sits behind the avatar on You (a chevron badge is the cue; the sheet offers Edit profile / Settings / Share my handle). **Change home lives in Settings.** There's no Change home or Set as home in the switcher. Rejected: the gear top right.

## Home
- "Tonight in {home city}" header after 5 PM ("Today in" before). No switcher on Home. Search sits right of the title. [live]
- A hub ordered by time of day, with no repeated content. Each section heading is the link, with › on a 44 pt row: "Tonight ›", "Your next event ›", "Following ›", "Favorites this week ›" (plus "Recent ›"). No "See all ›" rows. [live; Following › unverified signed out]

## Explore: chips, sheet, Why card
- **Chip L1b**: fixed box about 112×44, 6 px side padding, never grows. Line 1 is the hand-drawn type icon (dodger) then the name in Barlow Semi Condensed 700 at about 11 px, ellipsized. Line 2 is time · crowd. **All statuses stripped**: no friction, Sold Out, star or If necessary on the chip. Concert chip = headliner. Game = home short name plus postseason "(NLCS G3)". [live]
- **The "On the map" list sheet is gone.** Tapping a chip gives the T1 card: pale ring, others dim, a compact card with the occasion tag and title, "Venue · time", the pill and by line, the crowd and ›. The whole card opens the event. No read box on the card, and no gold "See this night" button. Rejected: the read box on the card (chip-card-read). [live]
- **"Why 4.7 tonight" (P3)**: tapping the read box opens a card over the map: the read, "{crowd} across {N} events · {N} start at {time}", then rows by crowd (ties: more friction, then earlier) with a gold bar, the figure, the tag and the pill. Rows open the event. No by line, no highlighted row. [live]

## Rating / read box
- The settled read box shows the read and its word only: no "Stamped", no "Updated". The ⓘ opens "About this read" ("Settled the day after the games."; "Revised {date}…" only after a redo; "It was 9.1" left for later, R10).

## Event page and date page
- **Local competition** (renamed back from "Up against") lives on the **date page**: the day's read box with the summary line "4.7 Spicy · 54k across 6 events · 4 start at 7:30 pm" (no helper text), the event list, then the stacked timeline. Miles dropped. Rejected: mock A (Up against + timeline on the event page), overlaps beyond one hour, mileage on rows. [live on the date page]
  - ⚑ Open/**not built**: what the event page keeps. Live, the event page **still shows both "UP AGAINST" and a "Local competition" timeline with miles** (the old duplication). The map legend and theme still say "Up against".
- Actions before the event are questions: **"Attending?" / "Watching?"** (event page adds **"Interested?"**, never a stub, never on the feed). Done states: Attending/Watching, then Attended/Watched. After the event, unanswered actions are "I was there" and **"I watched it"** (quiet TV-icon text action, event page only). No prompt, toggle or watch-party option. [live: questions]
- **Ticket line**: upcoming, unlogged event pages only, a quiet action-blue row **"Prices from $48+fees ›"**, with "+fees" always beside a number (remove the feesIncluded branch). Fallback "See tickets on Ticketmaster ›". No row for sold out with no price, offsale, cancelled, postponed or league-feed games, and none on the chip card. Rejected: link only, "$48 ›" without fees, affiliate, resale. 🚩 Fee-rule blocker before monetization. [live: only the fallback seen; the priced form wasn't observed]
- Event page Following section ("Sam is going / is going to watch / is interested / was there / watched"). [unverified]
- Where watched: Home / Public (shared per event only, enforced in the DB). Several details are open. [unverified]

## Favorites
- One status card per favorite, grouped Teams / Artists / Venues, with a "By favorite | By date" switch and no week strip. Each card: record, last 5, one next line, "You at games" ›, "ESPN ›" (link only). Rejected: the merged feed (L2) and the grouped list (L3). [live]

## You
- **My Stubs**: a plain recent-activity list with chips **Recent · Sports · Concerts · Watched · Attended** (Recent is the default, newest event date first). No badges on rows. Watched rows keep the TV icon and "Watched". "+ Log an event" is a full-width row. [live]
- **Following feed**: plain sentences, no dot: **"Sam is going to {event}" / "Sam went to {event}" / "Sam is watching {event}" / "Sam watched {event}"**. (PD also records "Sam is going to watch" for a Watching plan, and no present tense; J §1 says "is watching". Reconcile.) **Never "· you too".** Each line links to the event and ends with a short date ("Oct 12"). The feed is its own section beside the by-event list. Rejected: "planning · event", "is planning to attend / was there", "· going to / · was at". [pending/unverified, needs sign-in]
- **Stats tab unchanged for now**: "N attended · N venues · N watched". Watched never counts toward venues, crowd stats, Heaviest or Quietest. The badge set is parked, and a separate Mosaic Stats pass comes later. [live: "9 Attended · 7 Venues · 3 Watched"]
- Crowd figures lock with the night's stamp to the final announced attendance (or best estimate). No "· N stubs". [pending, data-side]

## Removed
- "Fans with you" stat (gone live). The old duplicated Local competition / Up against cards on the event page (decided, **not yet removed live**). All gold buttons (now blue; live). The "On the map" list sheet. "See this night" gold button. "See all ›" rows. Settings gear top right. OCCASION/FRICTION headers. The first-run three-tip guide. Whole-number "x/10" reads.

## Decided but not yet built / not visible (flags)
1. Event page de-duplication: "UP AGAINST" and the miles timeline still there. Also the rename in the map legend and theme.
2. Ticket "Prices from $X+fees ›": not observed live. Confirm the feesIncluded branch is gone.
3. Following feed wording, the event-page Following section, Interested in the by-event list, where-watched sharing: all need sign-in, unverified.
4. The gold crowd icon on *every* crowd figure: spot-check needed (e.g. date-page Local competition rows, stats "Biggest crowd").
5. Crowd lock and backfill (data), R09 cron time, R12 Official site placeholder, R16, R18: not visually verifiable.
6. Open per J: Home/Public/Private shape, Recent sort key, what the event page keeps, "Famous nights" wording, R17 "Nothing bigger was on." reframing.

## Differs from older `mosaic/` mocks
- `01-map-key.png`: dates show "Wed, Oct 7 ⌄" with a switcher left-aligned and Crowds/Traffic toggle. Now the switcher is centered and the date has no chevron. Key options predate L1b chips.
- `02-empty-states.png`, `04-no-data-vs-quiet.png`: "Quiet/Unrated" and "x/10"-era labels. Now tenths plus word, "— NO DATA" in the strip.
- `03-friction-vs-occasion.png`: "Light · 4/10", "Heavy/Moderate friction" pills in blue, the "On the map" list, Option 2's labeled OCCASION/FRICTION columns. All superseded: two tags without headers, violet ramp, Squeezed/Swamped/Steamrolled, no list sheet.
- `05-event-page.png`: gold "Save this night" / "See this night" / "Attended" buttons, "Moderate friction" headline, "Up against" row, Formula/STAMPED labels. Now blue buttons, Attending?/Watching?, no Stamped label, Local competition on the date page.
- `06-chip-overlap.png`: chips predate L1b (no type icon, could carry status). Now a fixed 112×44 icon-first chip with statuses stripped.
- `sheet/chip-card-read.png` (read box on the chip card) and `sheet/sheet-options.png`/`p3-v2`/`p3-v3`: rejected in favor of the T1 card and `p3-final` + `p3-gold`.
- `sheet/two-tags-everywhere.png` is drawn in blue. Build violet.
- `header/home-chatgpt.png`, `home-mosaic.png`, `home-v2.png` (except V3 new-user), `switcher-left-vs-center.png` left option: not chosen. `home-claude.png` is the Home hub pick, but it uses "See all ›"; headings-as-links override it.
- `following/follow-options.png`, `following-v2` FA–FD, `calls/call1-feed-row.png` A/B/C: the "planning", "is planning to attend / was there", dot-led and "· you too" wordings are rejected.
- `calls/call6-overlap.png`: only D (read box on top) plus the B/C timeline. Drop mock D's "Why 4.7 tonight" and "Bars assume 3h run times" helper text, and its "7 PM" style (use "7:30 pm").
- `calls/call5-ticket-line.png` B ("$48 ›" all-in): rejected.
- `calls/call4-frozen-crowd.png`: freeze-at-tap rejected. `call3`/`call8` "Fans with you" variants: rejected.
- `calls/call7-stub-badges.png`, `call9-stats-redo.png`, `call10-stats-b2.png`, `c9/`, `c10/`: parked. The Stats tab stays as is.
- `sheet/log-watched.png`: "I was there" hero plus "I watched it" still applies after the event, but before the event the questions Attending?/Watching?/Interested? (J, Oct 11) supersede it.
