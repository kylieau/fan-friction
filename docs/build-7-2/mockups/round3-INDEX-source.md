# Fan/Friction Round 3 Mocks (Nov 4, 2026)

Live 7.1 clone shell (127.0.0.1:3071) at 390×844, rendered at 2x through Playwright. All data is EXAMPLE or sample. Each item folder has `raw/` (the clean phone frame) and an annotated frame with numbered specs at the top level. R2a is locked and was not touched. No repo edits, no DB writes, nothing sent. Generators are in `src/`.

Board: `/workspace/ff-claims/next-mocks/round3-nov4/board.png`

## 1 · R1a, Option A Fact List Behind A Chevron
| PNG | Caption |
|---|---|
| /workspace/ff-claims/next-mocks/round3-nov4/1-activity-rows/01-collapsed.png | All rows closed. 44 pt round chevron on the title line, header names at full width. |
| /workspace/ff-claims/next-mocks/round3-nov4/1-activity-rows/02-expanded.png | Every chevron open (rotated 180 degrees, pale blue ring). Up to 3 facts indented under the title. |
| /workspace/ff-claims/next-mocks/round3-nov4/1-activity-rows/03-mixed.png | One row open (Cal Baptist at UCLA) among closed rows. |

## 2 · R5a, Option D Status On The Date Tile
| PNG | Caption |
|---|---|
| /workspace/ff-claims/next-mocks/round3-nov4/2-plan-rows/01-your-plans-all-rows.png | All 6 sample rows: fave away Attending (at USC), fave home Watching at a place (vs Raptors), non-fave Interested, concert, fave artist, Watching with no place. |
| /workspace/ff-claims/next-mocks/round3-nov4/2-plan-rows/02-your-plans-in-window.png | The same rows at rest in the 3.5-row plans window. |

## 3 · R3a, Option C Max Or Cap
| PNG | Caption |
|---|---|
| /workspace/ff-claims/next-mocks/round3-nov4/3-crowd-ceilings/01-max-vs-cap-phone.png | The same rows twice on a phone at 2x, labeled Max and Cap. |
| /workspace/ff-claims/next-mocks/round3-nov4/3-crowd-ceilings/02-max-vs-cap-actual-size.png | True 1x render side by side (view at 100%), 3x pixel zoom of the figures, and 2x crisp crops. |

## 4 · Stub An Event From Your Faves
| PNG | Caption |
|---|---|
| /workspace/ff-claims/next-mocks/round3-nov4/4-stub-from-faves/01-a-toggles.png | A: ticket and TV toggles on each fave row. Planned rows show only the filled state. |
| /workspace/ff-claims/next-mocks/round3-nov4/4-stub-from-faves/02-a-after-tap.png | A after one tap: ticket filled, TV toggle gone, toast with Undo. |
| /workspace/ff-claims/next-mocks/round3-nov4/4-stub-from-faves/03-b-swipe-open.png | B: swipe right reveals Attending, Watching, and Interested, with a first-run hint. |
| /workspace/ff-claims/next-mocks/round3-nov4/4-stub-from-faves/04-b-after-swipe.png | B after the swipe: ticket mark after the title, same toast. Rows stay compact. |
| /workspace/ff-claims/next-mocks/round3-nov4/4-stub-from-faves/05-c-long-press.png | C (bonus): long-press lifts the row and opens a quick menu. |

## 5 · Watching Season
| PNG | Caption |
|---|---|
| /workspace/ff-claims/next-mocks/round3-nov4/5-watching-season/01-team-page-switch.png | 5a: Watching Season as a sibling switch row under Season Tickets in the same card (off). |
| /workspace/ff-claims/next-mocks/round3-nov4/5-watching-season/02-setup-sheet.png | 5a: setup sheet. Default spot is Home or A Place found by search. The note says ticketed games stay Attending. |
| /workspace/ff-claims/next-mocks/round3-nov4/5-watching-season/03-team-page-on.png | 5a: switch on, with the count and a default spot row (Games & spot). |
| /workspace/ff-claims/next-mocks/round3-nov4/5-watching-season/04-plans-quiet-rows.png | 5b approach 1: every season game as a one-line 44 pt quiet row between full Attending rows. |
| /workspace/ff-claims/next-mocks/round3-nov4/5-watching-season/05-plans-one-next-game-row.png | 5b approach 2: the season collapses to one next-game row plus “141 more Watching games · Schedule”. |
| /workspace/ff-claims/next-mocks/round3-nov4/5-watching-season/06-season-watch-record.png | 5c: Season Watch Record card on the team page. Games watched, W-L when watched, and watch and win streaks (current and best). Sample numbers. |

Raw versions of every phone frame are in each folder's `raw/`.

## Judgment Calls
- **Chevron (R1a):** right edge, vertically on the title line, as a 44 pt target with a 30 pt pale ring. The header line keeps full width so names never truncate. The title and sport lines get 40 pt right padding. It points down when closed, rotates 180 degrees when open, and the ring fills pale blue. Closed rows are about 73 pt and open rows about 145 to 165 pt.
- **at or vs (R5a):** written from the fave's side. Away games read “at Opponent”, home and neutral games read “vs Opponent”, and there is no period after vs. Only fave rows shorten the title, because the blue lead already names one team. Non-fave rows keep the full Away at Home title.
- **Icon placement (R5a):** the sport or event icon leads the title. The blue fave lead has no icon, so no row gets two icons. A college fave's sport is already in its name. A non-fave college game puts the sport in the facts line.
- **Venue versus watch place (R5a):** the venue shows only when Attending. A watch place shows as “Watching at Place” in bold ink, so it cannot be mistaken for a venue. Watching with no place, and Interested, show the time only.
- **Concerts (R5a):** a non-fave concert uses the event title. A fave artist puts the artist in the blue lead and the tour in the title.
- **Max or cap (R3a):** both use option C's exact format. “cap” is 3 pt narrower (61 versus 64 pt), so “Cal State Fullerton at UCLA” fits on one line with cap and wraps with max.
- **Stub from faves:** A adds no-sheet, one-tap plans with an Undo toast. Planned rows show only their filled state. Tapping it edits the plan. B swipes right, a leading swipe, so the date and title stay visible while acting. C is offered as a power-user path behind A or B.
- **Watching Season:** it sits as a sibling row in the Season Tickets card, using the same row pattern. Tickets win: ticketed games stay Attending. Postseason games are not added automatically. Quiet rows drop the date tile and verdict and lead with a TV icon, since every quiet row is the same team. The record card's streaks read “now” mid-season and “at season end” after it ends.

## Flags And Open Questions
- **R1a, two targets per row:** the chevron is a second target beside the row link (H3 said one target per row).
- **Item 4 A cost:** rows grow about 39 pt, so about 5 fave rows fit instead of 7.
- **Item 4 B:** a swipe has no visible cue, so a first-run hint is shown.
- **5b approach 2 conflicts with a lock:** the Oct 23 Season Tickets lock said no group row and no “N more” row in Your Plans. Approach 2 would be an exception for Watching Season only. Approach 1 respects the lock but still fills the window almost daily during a 162-game season.
- **Existing build items, not changed:**
  - The no-verdict score glyph on the team page's Your Events list is an em dash (seen behind the 02 sheet).
  - The built close button is 36 pt.
  - The switch track is 48×28, but the built row label is the tap target.
- **Off-season team page:** the empty “Next at Home” and Schedule sections are hidden in the item 5 team frames.
