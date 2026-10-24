# Event page redesign: mocks (EXAMPLE data)

Mocks only. These were injected into the live shell on 127.0.0.1:3011 at 390×844 and captured full length. No repo source was edited and nothing was committed.

**Lean: Lean (A + stub line), with one tweak. Not confirmed — lean.** The reasons are at the bottom.

## Files
- `100-current-reference-board.png` plus `101–115-current-*.png`: today's page, copied from `event-page-review-2/shots/`. Production text is unedited, so it still shows the banned items.
- `2xx-A-*`: A, event card first. Order: header → action → crowd → Up against → weather → This day → Your stub → More dates → footer.
- `3xx-B-*`: B, your stub on top. Drawn only for logged stubs (Attended or Watched), because every other state is identical to A.
- `4xx-C-*`: C, Event | Day tabs. The crowd and Up against cards (top 3 rows) sit above the tabs. The Event tab holds weather, Your stub, and More dates. The Day tab holds This day and a link to the day. `416`/`417` show the Day tab.
- `5xx-L-*`: Lean. `501–515` are the 13 frames. `516–529` are extra coverage across pro, concert, festival, and manual states.
- `91-comparison-board-first-screen.png`: columns are Current, A, B, C, and Lean. Rows are 7 key states. Each cell shows the first screen (390×775pt above the tab bar).
- `92-comparison-board-full.png`: Attended rich and Watched at full length, to show where each block lands.
- `93-lean-board.png`: Lean across types (rows) and none, Attending, Interested, Watching, Attended, and Watched (columns).
- `src/`: CSS (`ep1–3.css`), `icons.cjs`, data (`data1–3.cjs`), blocks (`blocks1–2.cjs`), `dirs.cjs` (A/B/C/L), `frames.cjs`, `render.cjs` (injection, capture, and checks), `shoot.cjs`, `metrics.cjs`, `board.cjs`, `boards.cjs`, `leanboard.cjs`, and `sheet.py`.

## The 13 frames
| # | Frame | Current | A | B | C | Lean | Caption |
|---|---|---|---|---|---|---|---|
| 1 | Pro future, none (Blazers at Lakers) | 101 | 201 | = A | 401, 416 Day tab | 501 | Blue "+ Stub it" plus calendar. The crowd card holds the only friction word (Squeezed). Up against has no pill. |
| 2a | Same game, Attending | 102 | 202 | = A | 402 | 502 | The button becomes a status chip: "Attending · Private · Edit". No stub card yet. |
| 2b | Same game, Watching · Home | 103 | 203 | = A | 403 | 503 | Chip reads "Watching · Home · Private". |
| 3 | Pro past, Attended rich | 104 | 204 | 304 | 404 | 504 | Seats and cost appear only here, on the Attended stub. Lean adds the line "Your stub · Sec 101 · $166 · With Sam · Review · See ›". |
| 4 | Pro past, Watched | 105 | 205 | 305 | 405, 417 Day tab | 505 | No This day verdict anywhere. C's Day tab shows a plain day row: "No day verdict on a Watched stub". |
| 5 | Postseason today, none (Rays at Brewers WS G1) | 106 | 206 | = A | 406 | 506 | "World Series · Game 1" label line, Starters in facts, weather noted as Retractable roof. |
| 6 | Neutral site future (Florida vs. Georgia) | 107 | 207 | = A | 407 | 507 | "vs." with the city on the venue line ("Mercedes-Benz Stadium · Atlanta"). No "Neutral site" in the title. Domed, so no weather. |
| 7 | Concert future, Interested (Phoebe Bridgers) | 108 | 208 | = A | 408 | 508 | Interested chip plus More dates (Oct 31 and Nov 1). |
| 8 | Festival multi-day (NYCC) | 109 | 209 | = A | 409 | 509 | "Day 3 of 4" label, an "At least 62,500" crowd, and a Run fact. Also shown: SNW at 522–524 (Lean). |
| 9 | LA Marathon route | 110 | 210 | = A | 410 | 510 | Grey "Size unknown" with no pill: "No count for a route event yet, so no friction call." The venue line reads Dodger Stadium to Century City. |
| 10 | Further out (WWE SmackDown, Ontario), Attending | 111 | 211 | = A | 411 | 511 | "Further out" flag plus a note explaining why Up against and This day are missing. |
| 11 | UCLA at Oregon, away uncovered, Attended | 112 | 212 | 312 | 412 | 512 | GameOnly minimum: About (Outcome, Type), a note, and Your stub with add links. |
| 12a | Manual stub, Attended | 113 | 213 | 313 | 413 | 513 | "Added by you" flag, About, a "That date" nearby verdict, and Your stub. |
| 12b | Manual plan, Interested | 114 | 214 | = A | 414 | 514 | A plan has no verdict tile, just "That date in Los Angeles ›" and "Remove plan". |
| 13 | Amble, small room | 115 | 215 | = A | 415 | 515 | "Under 5,000: too small for a friction call." No pill anywhere, including the share subtitle ("Fri, Oct 23 · Amble · 1,500 estimated"). |

Extra Lean coverage: pro Interested (516) and past none (517); concert none, Attending, Attended rich, and Watched (518–521); festival none, Attending, Interested, Attended, and Watched (522–526); manual plan Attending and Watching, and manual Watched (527–529).

## Lean: Not confirmed — lean
**I confirm your prior, with one tweak.** Use A as the base, and fold in one compact "Your stub" line from B under the action chip once Attended or Watched. The line links ("See ›") down to the full card. **The tweak:** show the line only on full catalog pages. Short pages (manual, GameOnly, further out) skip it because their full stub card is already on the first screen (UCLA at Oregon: the card starts at 350pt).

Measured in `src/metrics.cjs`. The first screen is 775pt above the tab bar. Positions are y-coordinates in pt:

| Attended rich (Warriors) | Crowd figure | Up against | Stub |
|---|---|---|---|
| A | 267 | 500 | 939 (below the fold) |
| B | 450 | 683 (rows below the fold) | 171 |
| C | 267 | 500 | 800 (below the fold, after the tabs) |
| Lean | 317 | 550 | line at 221, card at 989 |

Why:
- **A alone buries the stub.** On logged pages, the user's own data is block 6 and needs a scroll past five Up against rows.
- **B costs the event context.** It pushes the crowd down 183pt and moves Up against rows off the first screen. It also makes the page change shape when you stub, and B equals A for every unlogged state, so it is really a second layout.
- **The Lean line costs 50pt.** It keeps crowd and Up against on the first screen and still answers "what did I log?" Seats, cost, who with, and review show at a glance. A thin stub reads "Add seats, cost, or a review", which doubles as a prompt.
- **C is rejected.** Tabs hide This day behind a tap. The Event tab can be empty ("Nothing more for this event yet", NYCC, Florida vs. Georgia). Capping Up against at 3 rows splits the list ("+2 more on the Day tab"). The page also stays about as long as A.
- **No line for plans.** On plans (Attending, Watching, Interested), the chip already says everything, so no line is shown.

## Rules checked
- Every render ran automated checks in `render.cjs`: no horizontal overflow, no clipped or ellipsized text, no text under 11px, no link under 44pt tall (More dates cells are 104px cards), no dark (near-black) fills, and no banned words ("going", "night", "tonight", or "~"). All 65 final renders passed. Every PNG and board was also viewed.
- Production copy was rewritten for the mocks: "~19,000" became "19,000 Estimated", "WWE Friday Night SmackDown" became "WWE SmackDown", and "Example Prep vs. Sample High" became "Sample High at Example Prep". Years, "Neutral site", and venues were moved out of titles.
- Colors: blue is action only, gold is crowd figures only, violet is the friction pill and Up against only, and money uses ink. Day tiles avoid the near-black Cooked tile.
- Not drawn: Following (the shell is signed out). Watching a concert or festival was not drawn either; the lean board marks those cells.
