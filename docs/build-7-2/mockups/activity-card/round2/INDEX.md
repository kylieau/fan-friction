# Activity Card, Round 2 (Oct 30, 2026): Event Page and Date Page

All frames show EXAMPLE data (made-up people and stubs). They are 390 wide full-page captures with numbered callouts and spec lines, markers in the gutters, a light-blue scheme, and no dark bars. New elements are 11pt or larger with 44pt targets.

They come from the built 7.1 repo clone on 127.0.0.1:3071. Everything outside the new markup is real 7.1 output. The pre-7.1 app on 3011 was not touched, no server was killed, and there are no repo edits or commits. Mock classes are prefixed `r2-`, so there is no `.bar` collision.

Open `board.png` first. It has every frame, the tradeoff table, the cap rule, and the lean.

## 1. Kylie's Notes (v3 form export, quoted verbatim)
Her em dashes are kept as she typed them. The app copy in the frames has none.

- **H11a (Both pages):** "i think the event page activity card should be slightly tweaked to draw greater attention to the user's own attendance/editing option. i don't think it's appropriate to have the "friends" symbol next to it because the formatting as a whole make it look like friends are also attending. so that potential misunderstanding needs to be solved aesthetically / aligned with "your stub" for an event."
- **H11b:** Activity, on both pages (lean confirmed, no note).
- **H11c (Something else):** "i addressed this in H11a—i want mockup options to remedy this. glad you identified this as an issue, buti'm not a fan of the two options you've presented (i need you to be more ambitious in letting the UX/UI drive these types of mockup optionality/decisions)"
- **H11d (Cap at 3, with a "See all" row):** "question is how do we select which ones? is the priority in chronological order or by popularity/attention"
- **H11e:** Yes, the card replaces Following.
- **H11f:** Keep the built yellow review note.
- **H11g:** Let the Your Stub line wrap to a second line.
- **H11h:** Keep the level pill in your row.
- **H11i (Defer Add Seat):** "i'm not even sure what "plans" means?? fine to defer/but also tell me what you mean (or mockup if its the only way to demonstrate)"
- **H11j:** Defer Hide Mine; it stays on the Activity tab.
- **H1 (C: Name header):** "i do want the name header at the title, but i want it to be like stubs where it says "watched/attended" with the icons and after says name (rather than reading like a sentence to read)"
- **H4:** "for now, initial in a circle, but i would want to create the flexibility to add a photo later. however, i think irrelevant because we aren't doing avatars here?"
- **H5:** "N/A" (no avatars).
- **H7 (Something else):** "if other friends also attended, add their names, not just "friends". separately, is there any way (other than the avatars because i didn't like that idea) we can include the actual relevant information? i actually really like how the information is listed on the D1 mockup... i think we should aim for something like that. also default should be to only include "attended" events. do you think watched events needs the venue name listed? (similar to verdict) I actually wonder if attended even needs the verdict. other information might be more appropriate to include?"
- **B4 (origin of this card):** "i actually think we should change this to an "Activity" card—what do you think? remock? i want to say it's the only part of the page that is personal to the user..?"

### What "plans" means (H11i)
A plan is an answer on an event that has not happened yet: Attending, Watching, or Interested. After the event, Attending becomes Attended and Watching becomes Watched, and then it is a stub with a seat, cost, and who you went with. "Add Seat for plans" would let you enter the seat before the event. That does not exist today (M33 gives plans no Your Stub line), so it is not drawn. The Attending frames (eA-, eB-, eC-attending, dA-future) show what a plan looks like now.

## 2. The Misread, And The Fix In Every Option
The built level pill is a people icon plus "Friends", placed right after "Attended". In the round 1 mock (`../../activity-card/e1-Y-attended.png`) it read as "Attended with Friends". Every option below makes these changes:
1. The pill becomes an eye icon plus **"Visible to Friends"**, or a lock plus "Private". It sits apart from the status word. This is Changed: same control and same sheet, new label and icon.
2. Friends get their own card, zone, or section, labeled FRIENDS.
3. Friends' rows follow the picked Activity row direction: status icon plus Attended or Watched, then names by name ("Sam R. and Priya N.", or "Sam R., Priya N., and Lee K."; four or more read "A, B, and 2 more"). There are no avatars. The rows are ink, not blue, because they are not buttons.

## 3. Before
- `e0-before.png`: the event page today. Your stub shows three times: the status chip, the Your Stub line, and the Your Stub card near the bottom. Crowd starts at 315pt.
- `d0-before.png`: the date page today, with the Attended card (B4).
- The rejected round 1 options are in `/workspace/ff-claims/next-mocks/activity-card/` (Y: e1, e3 to e6; X: e2).

## 4. Event Page: Three Options
Each option has five states: attended (with a stub), watched (private), attending (future, no stub), empty (nothing logged, no friends), and friends (past, friends only).

### A. Your Stub Is The Hero (lean): `eA-*.png`
- An **Activity** section label sits in the chip's slot, under the title block.
- **The Your Stub ticket (New):** a white card with a blue top edge and a perforation.
  - The status is the biggest line on the card: ticket icon plus "Attended" at 21pt in action blue. The privacy pill sits on the right.
  - A Seat, You Paid, and With grid (Moved; money in ink), the yellow review note, and tags.
  - A full-width 46pt **Edit Stub** button.
  - Future: **Edit** and **Add to Calendar** buttons.
  - Empty: a dashed outline with the built "+ Stub It" button.
- **Friends card (New):** a separate card under the ticket.
- **Gone:** the status chip, the Your Stub line, and the bottom Your Stub card, merged into the ticket. Your stub lives in one place.
- **Numbers:** Crowd at 680pt (365pt lower than today). The page is 1,718pt, 196pt longer than today.

### B. One Card, Status Is The Button: `eB-*.png`
- **Activity card (New)** with two labeled zones: YOU and FRIENDS (a divider rule).
- **Status button (New):** 58pt, outlined, "Attended" plus "Edit ⌄" in one target.
- The privacy line is on its own row. The built Your Stub line sits inside the card and wraps (H11g).
- The bottom Your Stub card stays, with its Status row dropped.
- **Numbers:** Crowd at 581pt (266pt lower). The page is 1,949pt.

### C. You In The Title, Activity At The Bottom: `eC-*.png`
- **"You Attended | Edit" pill (New):** 48pt, under the date and venue, with the privacy pill beside or under it. There is no card at the top.
- **Activity card at the bottom (Moved):** it replaces the bottom Your Stub card and holds Your Stub (Seats, You Paid, With, review, tags, Edit Stub), then FRIENDS.
- **Numbers:** Crowd at 321pt (6pt lower, effectively today). Friends start about 1,400pt down. The page is 1,864pt.

### Tradeoff
| | A (lean) | B | C |
|---|---|---|---|
| Attention on your attendance and Edit | Most | High | Medium |
| Places your stub shows | 1 | 3 | 2 |
| You vs friends | Two cards | One card, two zones | Opposite ends of the page |
| Crowd starts at (today 315pt) | 680pt | 581pt | 321pt |
| Page length (today 1,522pt) | 1,718pt | 1,949pt | 1,864pt |
| Fit with the Your Stub card | It is the card | Keeps it plus a summary | Keeps it plus friends |

Also considered and not drawn: a You and Friends segmented switch inside one card. It hides friends behind a tap, and that is worse than any of the three.

## 5. Date Page: Three Options And The Cap Rule
The same day is used in every frame: Sun Apr 26, 5 events, with 3 stubs of yours (Cubs attended, Thorns attended, Oilers watched privately).
- **Date A, By Event (lean):** `dA-lean.png`
  - A rule line (New, 13pt): "3 of 5 events. Yours first, then by time; shown in time order."
  - Each event has a 44pt header link with the crowd pinned right on the venue line (Fix B4).
  - Your strip (New): pale blue with a blue edge, showing Attended plus "Sec 114 · $148 · With Sam R.". It is the same facts as the Your Stub card and a mini version of event option A.
  - Then the built yellow review, then friends' rows.
  - A 48pt "See All 5 Events ›" row.
  - States: `dA-future.png` (Attending, Interested, and Watching; the friends-only Lakers game is behind See All) and `dA-friends-only.png` (two events, so no rule line and no See All).
- **Compare, by time only:** `dA-time.png`. It is predictable and matches the Lineup, but your 6:30 private watch is cut by a friends-only event.
- **Compare, popularity (most friends, then bigger crowd):** `dA-popular.png`. Two of your stubs are cut, and the order jumps (1:10, 4:00, 1:30). Popularity by crowd is already what the Verdict and Local Competition say.
- **Date B, You Then Friends:** `dB-you-then-friends.png`. A YOU section that is never capped, in Your Stubs row style. A FRIENDS section capped at 3, by time. Cost: Cubs and Thorns show twice.
- **Date C, Inside The Lineup:** `dC-in-lineup.png`. There is no Activity card and no cap, because the Lineup already lists every event. Your strip and friends' rows sit under each Lineup row. Cost: the Lineup grows from about 360 to 740pt, and reviews are left to the event page.

### Cap rule, answered (H11d)
Between the two, **chronological** is better:
- It matches the Lineup right above it.
- Popularity by crowd repeats the Verdict and Local Competition.

Neither rule should be able to hide your own stub. So the rule is:
1. Pick yours first.
2. Fill the remaining slots by time; on a time tie, the bigger crowd goes first.
3. Show the three in time order.

### Crowd wrap fix (kept)
`.entry-facts .crowd-figure{flex-direction:row;flex:none;white-space:nowrap}`. The root cause is that `.crowd-figure` is `flex-direction:column; flex:1 1 100%` (styles.css about lines 2127 to 2136). The frames show 52k, 18k, and "Sold Out" on one line.

## 6. Lean (Not confirmed)
- **Event page: A, Your Stub Is The Hero.**
  - It is the only option where your stub lives in one place.
  - It answers "greater attention to the user's own attendance/editing option" most directly.
  - Two cards make it impossible to read friends as part of your answer.
  - The cost is that Crowd starts 365pt lower. If Crowd on the first screen matters more, pick C.
- **Date page: A, By Event,** capped at 3, picking yours first, then by time, shown in time order. Its blue-edged strip is a mini version of the A ticket, so the two pages read as one idea.

## 7. Open Questions
1. A or C? It comes down to your stub at the top versus Crowd at the top.
2. Is "Visible to Friends" the right pill label? "Friends Can See" is an alternative. The sheet still says Anyone, Friends, and Private.
3. Should the status word in friends' rows be blue? The sibling Activity rows mock (`../1-activity-rows/`, lean A Fact List) puts **Attended** or **Watched** in the built `status-line` blue and the names in ink. Here the whole row is ink, because these rows are not buttons and blue means action. The names match either way: real names, never "Friends", and no avatars. Pick one rule for both.
4. H7 says the Activity tab should show only "attended" by default. Should the date and event cards also hide friends' Watched and Interested rows by default? They are drawn shown.
5. Should a friend's watch name the place ("Jo T. at Tom's Bar")? It is built for Friends-level watches. H7 asks whether watched rows need a venue.
6. Date C drops the review note. Is that OK if C is picked?
7. In A, the Remove From Log link stays at the bottom of the page as built. Should it move into the ticket?
8. Should Add Seat for plans be built later (H11i)? Not drawn.

## 8. Copy Conflicts And Flags
- "Activity" (the card) vs the Activity tab. You picked Activity on both pages (H11b), and the clash stays mild.
- "Sold Out" (Title Case rule) vs `crowdShort` in code writing "Sold out".
- The built yellow review note is a gold-family color on non-crowd content. It is kept per H11f and flagged here only.
- The built titles follow Away at Home ("Cubs at Dodgers", "Portland Fire at Sparks"). Unchanged.
- The Crowd card on future pages says "Estimated" on the crowd figure (built, not a verdict). No verdict says Estimated.

## 9. Existing Under-Minimum Elements (Built, Unchanged)
- `.log-score-word` at 8px and `.read-word` at 9px (verdict tile words).
- The Back link at 55×21.
- Local Competition `.bar-link` rows at 29 high.
- `.info-dot` at 18×18 and `.read-info` at 22×22.
- "Add a review, who you went with…" at 223×32.
- The share round button at 36×36.
- "Compare with…" at 128×37 and "See the whole day ›" at 160×37.
- The clipped `rival-dist` text "Dignity Health Sports Park ·" (Rams page).

## 10. Automated Checks (`raw/audit.json`, plus callout and board text)
All 24 frames pass:
- EXAMPLE badge present.
- No horizontal overflow.
- No New text under 11px, no New targets under 44pt (the + Stub It button was fixed to 48pt), no New clipped text, and no dark fills.
- No banned words (going, night, tonight, ~, Open-air).
- No em dashes in app text, callouts, or board.
- No "Estimated" on verdicts.

Only the built items in section 9 fail. The em dashes in this INDEX appear only inside Kylie's verbatim quotes.

## 11. Files
- Annotated frames are in this folder:
  - `e0-before`
  - `eA-{attended,watched,attending,empty,friends}`
  - `eB-*` and `eC-*` (the same five states)
  - `d0-before`, `dA-lean`, `dA-time`, `dA-popular`, `dB-you-then-friends`, `dC-in-lineup`, `dA-future`, `dA-friends-only`
- `raw/`: plain captures, anchor JSON, and `audit.json`.
- `src/`: `build.mjs` (capture), `r2.css`, `calls.cjs` (spec lines), `compose.cjs` and `composeAll.cjs`, `board.cjs`, and `plans.mjs`.
  - `plans.mjs` is a local copy of the plans seed. The LAFC 11-01 event has left the catalog, so the Ducks 11-01 game is the Watching plan.
- Regenerate: `cd src && node build.mjs && node composeAll.cjs && node board.cjs`.

The sibling folder `round2-oct30/1-activity-rows/` did not exist when I started, so the rows follow H1 and H7 directly. When I checked again at the end, it was there. Its header form (icon, status word, dot, names) matches these rows. The only difference is the color of the status word (open question 3).
