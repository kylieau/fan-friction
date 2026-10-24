# Fan/Friction: Profile & Settings redesign (You › settings)

Wireframe directions, Fri Oct 23 2026 (PT). Live baseline: fan-friction.vercel.app/you/settings (main 4d7d735). All data is EXAMPLE data. Mocks render inside the live app shell at 390×844. Signed-in data was mocked locally through Playwright route interception (src/eng.cjs, src/mock.js), with **no repo source edits and no commits**.

**Lean: Direction B (grouped chevron rows, refined). Not confirmed — lean.**

## Files
| # | File | Caption |
|---|---|---|
| 01 | 01-current-full-page.png | Today, full page stitched: 3,247pt, about 4.2 screens |
| 01 | 01-current-slice-a…e.png | Today, viewport slices top to bottom |
| 01 | 01-current-overflow-bug.png | Today: the collapsed Teams preview is one comma list, and the page is 1,176pt wide and pans sideways |
| 02 | 02-dir-A-one-accordion.png | A: everything is a ⌄ row in one card. 775pt, 1 screen at rest |
| 03 | 03-dir-B-grouped-lean.png | B (Not confirmed — lean): profile open on top; People / Faves / App & account rows. 829pt |
| 03b | 03b-dir-B-scrolled-to-end.png | B scrolled to the end: Review queue, App |
| 04 | 04-dir-C-summary-cards.png | C: tiles and a list that all drill into sub-pages. 775pt |
| 05 | 05-dir-D-hybrid-previews.png | D (optional): B plus avatar and pill previews. 801pt |
| 06 | 06-B-expanded-cities-in-place.png | B: Favorite cities opened in place (Home, −, + Add city) |
| 07 | 07-B-drill-teams-and-artists.png | B: Teams & artists page (Teams open, Artists collapsed, Edit) |
| 08 | 08-B-drill-followers.png | B: Followers page (Requests, Find people, chips, list) |
| 09 | 09-A-two-sections-open.png | A with People + Teams open: 1,742pt (2.2 screens). The accordion gets long again |
| 10 | 10-faves-summary-row-closeup.png | Faves summary row: 14 / long names / 2 / 1 / none / count-only alternative (3×) |
| 11 | 11-B-empty-states.png, 11b-B-empty-states-end.png | B empty states: no followers, no faves, home only, no blocked |
| 12 | 12-board-directions-compared.png | Board: Today vs A, B, C, D at rest, with length, pros and cons |
| 13 | 13-board-B-lean-flow.png | Board: B flow (at rest → open in place → Teams & artists page → Followers page) |
| 14 | 14-board-details.png | Board: the bug, the summary-row rules, empty states, and why not A |

## Page length at rest (390×844, one screen = 775pt above the tab bar)
| Direction | At rest | Notes |
|---|---|---|
| Today | 3,247pt (4.2 screens) | Everything open; sideways overflow (scrollWidth 1,176) |
| A one accordion | 775pt (1.0) | 1,742pt (2.2) with People + Teams open |
| **B grouped (lean, Not confirmed)** | **829pt (1.07)** | Stays about 1 screen because long lists drill in; 1,060pt with cities open |
| C summary cards | 775pt (1.0) | Nothing drops down; every tile is a sub-page |
| D hybrid previews | 801pt (1.03) | More to look at |

## Inventory: current page (signed in)
- **Header**: ‹ You back link, "Profile & Settings" title.
- **Profile card**: avatar, name, @handle, Edit profile and Share profile links.
- **People** (count · requests): blurb "You see their logged events and plans once they approve"; chips All / Mutual / Follows you / You follow; Requests (N) "Approve or decline" + See all; Find people; people list with status or Follow back / Following / Requested, plus a ··· menu per person.
- **Favorite cities**: home row "Your home city · always first in the switcher" + Change; each city with a near-black − ; + Add city.
- **Favorite teams & artists** (count): blurb "What you follow. Seen counts every attended and watched stub."; Edit; Teams · 10 / Artists · 4 collapsed groups with a comma-list preview (**the overflow bug**).
- **Profile** (@handle): Display name, Handle, Save.
- **Account** (email): name and handle + Sign out; Copy my handle; Profile link On/Off.
- **Crowd size** (No min – No max): slider 0–80,000+, MIN/MAX inputs, help; APPLIES: Apply on the map, Apply on date pages and lists (+ notes); UNKNOWN SIZE: Show events with unknown size; FURTHER OUT (i): Show on the map, Show on date pages and lists.
- **Privacy** (Friends): DEFAULT FOR NEW STUBS Anyone / Friends ✓ / Private + note; PAST STUBS: Change past stubs…
- **Blocked** (count, only shown if any): person + Unblock.
- **Your events**: Export my events, "A JSON file of every event and plan."
- **Review queue**: admin only.
- **App**: data-source credits, privacy note.
- Signed out: the sign-in card replaces the profile; People / Profile / Account / Privacy are hidden.

## Lean: B, grouped chevron rows. Not confirmed — lean
Why: it keeps the one-page approach approved 10-21 (profile on top, settings below) and cuts the page from 4.2 screens to about 1.07. Long lists open their own page, so the page can't grow long again the way A does (09). Every section is still here.

Refinements the mocks suggested (all Not confirmed — lean):
- **Profile card stays open**: name, @handle · N people, Edit + Share (44pt), **Home city + Change inline**, Privacy row ("New stubs: Friends" ›). Privacy moved up here per the 10-21 decision. Edit opens today's Display name / Handle form, so the separate Profile section folds into it.
- **Groups**: People (Followers ›, Blocked ⌄) · Faves (Teams & artists ›, Favorite cities ⌄) · App & account (Account ⌄, Crowd size ›, Your events ⌄, Review queue › admin only, App ⌄).
- **Opens in place vs its own page**: ⌄ opens in place when the section is short (cities, blocked, account, your events, app). › opens its own page for long lists or big controls (followers, teams & artists, crowd size, privacy, review queue). Rule of thumb: more than about 4 rows means its own page.
- The People row is named **Followers**; requests show as a blue "2 requests" badge on the row.
- Crowd size goes to its own page (the slider plus 5 toggles is too tall to open in place).
- Blocked always shows a row ("None" when empty) instead of being hidden.
- The faves summary uses **two lines** so "+N more" is never cut (see 10).
- City − buttons use a grey outline (not near-black).

## Summary-row rules (fixes the overflow bug)
- A collapsed row shows **the first two items + "+N more"** and a count badge. Never the full list.
- Names are cut with … ; "+N more" and the count are never cut.
- No element is wider than the 390pt frame. Every mock is checked: 0 elements past the right edge, no text under 11pt, rows and buttons at least 44pt, no banned words.
- Empty: "None yet · Add teams & artists", "No one yet · Find people", "Home only · Add a city", "None".
- Count-only alternative: "Teams 10 · Artists 4" (one line). Shorter, but less personal.

## Other directions
- **A one accordion**: the shortest at rest, but it gets long again as rows open (1,742pt with two open), and the profile becomes just another row.
- **C summary cards**: glanceable, but nothing drops down (which conflicts with the ask), and every change costs a page push.
- **D hybrid previews**: faces and pills add life but also more to look at, which is the main complaint. Use it only if B feels too bare.

## Notes
- EXAMPLE data throughout (Kylie A., kylie@example.com, 6 people, 2 requests, 14 faves, 3 cities).
- Mocks replace the page body inside the live app shell (the tab bar is real). The review queue is admin only.
- Scripts: src/ (eng.cjs, mock.js, seed.cjs, mk.cjs, sr.css, dirA–D.cjs, details.cjs, run-*.cjs, board.cjs, b12–b14.cjs, cap-current.cjs, stitch.py).

---
## r2 (Fri Oct 23 2026, about 12:30 PM PT): pinned header + Favorite cities page

### Pinned sub-page header (Not confirmed — lean)
- "‹ You" + the title are sticky at the top of the scrolling page. The background is the page's light blue (#DAEBFE at 90%) with a 6px blur. At rest there is no divider; **only once scrolled** a 1px #C9DAEE divider and a soft 7% shadow appear. No dark bar.
- **Pick: left-aligned, back link and title on one 44pt row**, matching today's left-aligned "Profile & Settings" title and Explore's left-aligned city chip. Centered was rejected because "‹ Profile and settings" + a centered section title collide at 390pt.
- The back target is 44pt. Pages it opens read **"‹ Profile and settings" + the section title**, and the title is cut with … if it is long. The title text follows Kylie's wording, "Profile and settings".
- C's home fits 390×844 without scrolling, so its scrolled frame uses a 375×667 small phone; 17b shows C's People page at 390×844. The drill frames (16c, 17b) use a fuller EXAMPLE list of 12 people so the page scrolls.

| File | Caption |
|---|---|
| 15-A-scrolled-pinned-header.png | A with People open, scrolled 255pt: header pinned, divider on |
| 16-B-scrolled-pinned-header.png | B with cities open, scrolled 260pt |
| 16b-B-teams-drill-pinned-header.png | B › "‹ Profile and settings · Teams & artists", scrolled |
| 16c-B-followers-drill-pinned-header.png | B › "‹ Profile and settings · Followers", scrolled (12 EXAMPLE people) |
| 17-C-scrolled-pinned-header-small-phone.png | C home at 375×667, scrolled |
| 17b-C-people-drill-pinned-header.png | C › People page, scrolled |
| 18-D-scrolled-pinned-header.png | D with Account open, scrolled 182pt |
| 19-board-pinned-header.png | Board: all of the above + header rules |

### Favorite cities: reorder + add (Not confirmed — lean)
Today (review-7-1-more/favorite-cities-add.png): unstarred cities are 79pt bold rows with no add button, and favorites have a near-black −.
- **20 at rest**: FAVORITES · 4. Home (Los Angeles, home icon, "Home · always first", Change) is pinned first with no handle. Each favorite has ≡ on the left and a grey outline − on the right. A muted helper line reads "Drag to reorder · sets the order in Explore". Then Search cities, then ADD A CITY: 44pt rows, regular 13pt, a blue ⊕ on the right.
- **21 mid-drag**: Seattle lifted with a soft shadow, a dashed gap opening under Home, and Home fixed.
- **22 alt**: ▲ ▼ 44pt arrow buttons instead of drag; the first ▲ and last ▼ are greyed.
- **Lean: drag handles.** It's the standard iOS pattern, takes one gesture and keeps rows quiet. Arrows add 2 more 44pt targets per row, and a move of 3 places takes 3 taps. For accessibility, offer VoiceOver Move up / Move down actions on the handle.
- **Lean: Favorite cities opens its own page** instead of expanding in place. Reorder list + search + add list is far over the more-than-about-4-rows rule (1,232pt). B's row becomes "LA, Bay Area +2 · 4 ›". This **replaces 06** (open in place), which is kept for history.
- The live Explore switcher (captured with the same EXAMPLE favorites via localStorage) lists Home and then the favorites in saved order: before Los Angeles | Bay Area | New York | Seattle; after the 21 drop Los Angeles | Seattle | Bay Area | New York.

| File | Caption |
|---|---|
| 20-B-cities-page-at-rest.png | Favorite cities page at rest: Home fixed, ≡ favorites, add list with + |
| 20b-B-cities-page-scrolled.png | The same page scrolled: pinned header over the add list |
| 21-B-cities-mid-drag.png | Mid-drag: Seattle lifted, gap under Home |
| 22-B-cities-alt-arrows.png | Alternative: up/down arrow buttons |
| 23-board-favorite-cities.png | Board: today vs 20 / 21 / 22 + Explore switcher before and after |

Scripts (r2): src/pin.cjs, run-pin*.cjs, b19.cjs, cities.cjs, cities-page.cjs, run-cities.cjs, cap-switch.cjs, b23.cjs. All checks passed: 0 elements wider than the screen, no text under 11pt, all taps 44pt+, no banned words.
