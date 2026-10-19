# Tester-readiness review: after build 6 and the Oct 17–19 corrections

**Author:** Claude Code (Fable 5.1). **Saved:** Oct 19, 2026, 9:18 AM PT. **Status:** open; later on Oct 19 Kylie asked for the clear fixes, and R2, R6, R12 and R18 are built and held locally (marked below); the rest wait on her. **Build:** `main` at `6212320d` plus the two fixes below, dev server on port 3001 (an unbundled Vite build, not the Vercel one). **Method:** a headless Chromium walk at phone size (390 × 844, 2×), signed out, through ten flows as a first-time tester would, with screenshots at each step, console capture, and a measured pass for tap targets under 44 × 44 CSS px and text under 11 px. The walk was run by a sub-agent from the project's own testing notes; each issue below was then checked against the code by hand. Screenshots: `assets/claude-code-2026-10-19-0918-pt/`.

**Verdict.** Nothing blocks a signed-out tester. One Oct 19 feature did not work at all (the Stubs read tile could not be tapped) and is fixed below. Everything else is confusion or polish, ranked below. Signed-in flows could not be tested here and remain phone checks. **This review is input, not a decision.**

## The ten flows

| # | Flow | Result | What a tester sees |
|---|---|---|---|
| 1 | First open | Pass | "Where's home?" over 40 cities, Los Angeles first; tap it, "Done", the map on today ("Mon, Oct 19 · 2 events · 11k", 1.0 CHILL). A reload does not ask again. (`f1-03-landing.png`) |
| 2 | Explore map | Pass, notes | Week strip, chips ("UCLA 12:30 pm · 30k", "+15"), muted small rooms; chip → card ("Michigan St at UCLA / Rose Bowl · 12:30 pm / Squeezed / 30k ›") → event page; Back restores date and selection. The sheet lists all 31 rows. With a crowd-size minimum set, "22 events outside your crowd size · Show" flips to "· Hide" in place. City menu → New York; home stays Los Angeles. (`f2-02-oct24-map.png`) |
| 3 | Explore List | Pass, notes | Calendar, "THIS WEEK'S LINEUP · 111 EVENTS", today's band first, "↑ Today" pill after scrolling, "EARLIER" loads above. Row → event page. (`f3-01-list-initial.png`) |
| 4 | Date page | Pass, notes | Header, read, verdict line, Local Competition with gold bars, the lineup with MAJOR on the top rows only; reached from "See the whole day ›", the THIS DAY tile and the list band. No untimed big event on the days walked, so the Time TBA band was not seen. (`f3-06-date-page-top.png`) |
| 5 | Event page and stub | Pass, note | Header, gold "+ Stub it", Up against, Crowd card with ring and word, forecast, share. The sheet (Attending / Watching / Interested; Attended / Watched on a past event) saves to the device and survives a reload; tags, and seats on an attended stub, appear after. (`f5-02-event-top.png`) |
| 6 | Stubs | Pass, 1 bug | Empty: "No stubbed events / Browse today in Explore ›", the today line, "Nothing upcoming yet". With stubs: the attended row above the line, the plan below; chips filter; the floating "+ Stub it" opens the new-stub page. **The read tile could not be tapped** (R1, fixed). (`f5-13-stubs-timeline.png`, `f10b-01-stubs-as-opened.png`) |
| 7 | Following | Pass, notes | Empty states, the sliders button, "Show and manage" with Faves \| Friends, Edit → "+ Add a team, artist, venue or festival" → the picker (search, "Suggested in Los Angeles", "Browse by league"). With the Dodgers and UCLA Football added: blue lead lines, read tiles, city codes "MSP" / "DET", "W 5–4 vs. Pirates" on past rows, "AWAY" at an uncovered park. Lead → the team page, tile → the date page, row → the event page. Filtering: one check → "1 of 2 on timeline", a chip row, a count on the button. (`f7-10-faves-timeline.png`, `f7-16-sheet-one-unchecked.png`) |
| 8 | You and Settings | Pass | Sign-in card; the avatar opens the side panel; Home & cities, Crowd size, Edit favorites, Your events (Export downloads a file and says "Downloaded."), App. The old addresses redirect into the panel. |
| 9 | Search | Pass, notes | "weezer" finds the show in every city; "ucla" finds events, UCLA Football and a team page; "crypto" the arena; "oct 31" opens that date. (`f8-24-search-ucla.png`) |
| 10 | Measurements | Done | Tables below. |

## Issues, ranked

| # | Severity | Issue | Where / evidence | Possible fix |
|---|---|---|---|---|
| R1 | **Fixed in session** | **The Stubs read tile could not be tapped.** A row rule turns off pointer events on everything but the row's overlay link and re-enabled only the tag chips, so the Oct 19 "two taps" never worked on Stubs: a tap on the 8.0 BRUTAL tile opened the event page. Fixed by one CSS line (commit `18efce2b`, held locally) and measured after: the tile tap opens `/date/2026-10-17…`, the row tap `/event/2026-10-17…`. The Following rows were already right. | `src/styles.css:7804-7814`; `f10b-03-after-read-tile-tap.png` (before) | Done. Process note: the Oct 19 build recorded the two taps as built from screenshots, which cannot show a tap; a tap check should be part of "measured". |
| R2 | **Fixed Oct 19** | **A search event hit lands on the map with nothing selected.** Tapping "Weezer · The Gathering · Sat, Oct 24" opens a 31-event day with no chip or card picked, so the tester has to find the show again. | `src/components/SearchSheet.tsx:248` passed the date and city, no event id; `f8-28-search-hit.png` | Done: the hit carries its first matching event, and the tap opens the Map on that day with the event's card showing, whichever view was last used (measured). |
| R3 | Confuses | **Search buries this week.** Within one city the event hits run newest-first ("ucla", "crypto", "dodgers" lead with Feb 2027 or the latest past game); across cities there is no visible order. | `f8-24-search-ucla.png` | Order hits by distance from today, upcoming first. |
| R4 | Confuses | **A bare "Verdict" word on upcoming event pages.** Under Up against, an orphan grey "Verdict" with nothing after it, on every upcoming event whose read is formula-based and not yet locked; a tester reads it as broken. | `src/screens/EventScreen.tsx:378`; `f5-02-event-top.png` | Say what it means ("Verdict locks after the last start") or drop the word. |
| R5 | Confuses | **Local Competition bars and the lineup rows disagree on counts.** "Reincarnation 7.1k" and "Long Beach Symphony POPS 15k" on the bars, no count on the same events' rows and "No count yet" on the chip. | `f3-06-date-page-top.png`, `f2-02-oct24-map.png` | One source for the figure on bars, rows and chips. |
| R6 | **Fixed Oct 19** | **Stub rows go to different places.** A past stub row opens the event page; an upcoming plan row opens the date page unless the plan is a game. (Gap review G5.) | `src/components/StubRows.tsx:93` | Done: every plan with a catalog event opens the event page (measured on a concert plan). |
| R7 | Confuses | **The picker's "Done" floats as a small grey pill** bottom-left over the list, disabled until a pick; after a one-result search it hangs mid-page. | `f7-05-picker.png` | A full-width gold Done, or Done in the header. |
| R8 | Unclear | **Stubs opens with the past above the fold.** Right after logging "Attended", the tab shows only the upcoming row and no cue that the attended one is above. By decision (Oct 17), but a first-time tester may not scroll up. | `f10b-01-stubs-as-opened.png` | A one-line "1 earlier ↑" cue, or open on the most recent stub when nothing is ahead. Kylie's call. |
| R9 | Unclear | **"Show and manage" checks mean "only this".** Tapping one Fave's check while All is on unchecks the others; the glyph reads as a toggle. (Gap review, judgment call 2.) | `f7-16-sheet-one-unchecked.png` | Either reading works; say which in the sheet, or make a tap uncheck that one. |
| R10 | Cosmetic | **Today's date page says "Nothing else big that date." and "No other big events that day."** with Kacey Musgraves 11k in the lineup; "else" and "other" have no anchor on a date page. | `f3-11-date-page-today.png` | "Nothing big that day" / "One big event that day". |
| R11 | Cosmetic | **The map key clips its last line** ("How big a deal: NOTABLE MAJOR MARQUEE") with no scroll cue. Kylie already wants the key broken into sections (Mosaic). | `f2-08-map-key.png` | A fade at the bottom until the sections land. |
| R12 | **Fixed Oct 19** | **A chip's second line truncates "No count yet"** to "No c…". | `f2-02-oct24-map.png` | Done: the card's second line carries the time alone when there is no count. |
| R13 | Cosmetic | **The week strip's first day reads "MON 5 — NO DATA"** two weeks back. | `f1-03-landing.png` | Start the strip at the first day with data. |
| R14 | Unclear | **The List calendar's fourth row is half-faded** and looks cut; nothing says it expands. | `f3-01-list-initial.png` | A handle, or no fade. |
| R15 | Cosmetic | **"Attended" chip clipped at the right edge** of the Stubs filter row (it scrolls, but shows no sign of it). | `f5-13-stubs-timeline.png` | A fade or a peek at the edge. |
| R16 | Cosmetic (data) | **Odd artist hits in search:** "Nyle Maxwell's Lonestar Showcase: UTWBB vs UCLA", "Los Angeles Dodgers Foundation Blue Diamond Gala" listed as artists. | `f8-24-search-ucla.png` | The artist-genres research (an artist record) will sort these. |
| R17 | Note | **Load times on the dev server:** Explore 3–4.5 s to the header, 4–7 s to chips on a fresh browser (one cold run 10 s); the List 7.9 s first load. Over a 3 s bar, but this is the unbundled dev build. | | Re-measure on the Vercel build before judging. |
| R18 | **Fixed Oct 19** | **Nested buttons in "Show and manage"** (gap review G6): React logs an error on every open. Not fixed; listed here because the console shows it to anyone who looks. | `src/components/FollowingSheet.tsx:159` | Done: one button, role checkbox, the check drawn; no console error on open (measured). |

## Interactive elements under 44 × 44 CSS px

The house rule is 44 pt targets. Deduplicated; "fine" means the control is 44 or more.

| Screen | Control | Size |
|---|---|---|
| Event and date pages | Back link | 55 × 21 |
| Event page | "+ Stub it" after a stub (small form), Add to calendar | 105 × 34, 52 × 34 |
| Event page | "See the whole day ›", "Back to the map", "Share this event" | 160 × 37, 131 × 37, 358 × 40 |
| Event page | the ⓘ "How estimates work" dot | 18 × 18 |
| Every tab | the round search button | 36 × 36 |
| Stubs | filter chips (All / Sports / …), the read tile, the floating "+ Stub it" | 39–82 × 30, 40 × 40, 108 × 40 |
| Following | the Faves \| Friends segments; **the blue lead line** | 146 × 26; 86–102 × 17 |
| Following sheet | Done, the segments, every check, the row words, "Also in Settings ›", the Edit "−" | 41 × 44, 175 × 24, 28 × 28, 292 × 38, 358 × 41, 28 × 28 |
| Settings panel | Close, the search fields, Follow / Following pills, the Open-Meteo link | 36 × 36, 266 × 23, 63–83 × 30, 103 × 17 |
| Explore List | Map / List switch, each calendar day, the band link, the Today pill | 32 × 32, 49 × 43, 390 × 40, 78 × 34 |
| Explore map | the key button, the weather pill, the "+N" badges | 36 × 36, 115 × 36, 29 × 20 |
| Date page | each Local Competition bar link | 326 × 29 |
| Search | the field, the Today / This weekend / Pick a date chips | 248 × 23, 61–108 × 30 |

Not measured: the map header controls and the week strip (the pass captured the List view instead). Fine at 44+: the Settings section heads, the stub choices, the Follow rows, the search result rows, the tab bar, Continue with Google, the map chips (112 × 44).

## Text under 11 px

| Where | What | Size |
|---|---|---|
| Every small read tile (event page, Stubs, Following) | the word under the number (COOKED, BRUTAL, MILD) | 8 px |
| Stubs and Following date boxes | the weekday (SAT) | 9 px |
| Following read tiles | the city code (MSP, DET, ATL) | 10 px |
| Date page's big read | the word under the number | 9 px |

The read-tile words have been under the floor since before build 3 (BACKLOG, section F, "Polish, batch later"); listed again because every new row carries one.

## Console

- On `/following`, each time "Show and manage" opens: two React errors about a button inside a button (R18, gap review G6).
- On every map load: two or three MapLibre warnings about the OpenFreeMap style's filters (style data, not app code).
- No uncaught exceptions on any screen; no failed loads.

## Not tested (needs a phone, signed in)

Google and email-link sign-in and everything behind it: the Friends timeline with followed people, requests, the sheet's Friends side and its ⋯ menu, "Who sees this" on a stub, friends' lines on chips and the sheet bar, the Profile / Account / Privacy / Blocked / People dropdowns, Share profile, account sync. Also real touch scrolling and the sheet's drag, Vercel load times, and the Time TBA band. These are the phone checks already listed in `MEMORY_HANDOFF.md`.
