# Fan/Friction nav + screens: Kylie's decisions, Oct 11, 2026
Mock Mosaic recommends and Kylie decides. Items marked DECIDED are Kylie's. Items marked LEAN are Mock Mosaic recommendations she hasn't explicitly picked. All numbers in the mocks are example data. Please commit this file and the PNGs to the repo docs for Claude.

## Global (DECIDED)
- Never use "night" in copy. Use day, today, tomorrow ("See the whole day ›", a "This day" card).
- Every event row: the title is line 1A and the venue is line 1B, BEFORE any occasion/friction tags. Lead with the most relevant information for how the list is sorted.
- Density: match the Letterboxd diary. Tighten spacing, cut blank space, smaller fonts are fine (11pt minimum text, 44pt tap areas can extend invisibly). Reason: an information app should fit as much as possible on one screen.
- Every read box, at every level, gets the thin grey border (#76869B 1px). Reason: low reads were blending into the background, and consistency matters.
- Read boxes keep their word (MILD, SPICY…) on the carousel, Stubs and Favorites (number over word). Reason: the carousel shouldn't be just numbers. Rejected: number-only small boxes.
- Sports names use "Away at Home" (see the earlier naming note).

## 1 Read boxes and date (1-read-boxes-date.png) DECIDED
- The date is plain text with no special styling. Tapping the date or the read box opens the date page.
- Rejected: a chevron after the date; A, a light-blue pill (her favorite of the three but still not liked); B, a dotted underline; C, a calendar icon. Reason: the read box is already an entry point, so two taps is fine.

## 2 Explore sheet (2a, 2b) DECIDED
- Today: no date header, just "4 events · 94k ›", which opens the date page. Other days show the date. Minimal space between the grabber and the first row.
- Rows are sorted by time. Time on the left (no bullet), title with venue under it in the middle, crowd count with icon right-aligned with tags under it. One small line underneath for activity, e.g. "Priya is watching at home". No event title in that line, on one line, in a smaller font.
- Activity toggle: an icon-only people chip in the header row. On is a filled Dodger blue pill; off is a grey slashed outline. It hides ALL activity lines, including the user's own.
- Rejected: "Activity On/Off" text on the chip (it doesn't need to explain itself); B, a switch inside a filter menu; a toggle that leaves your own status showing.

## 3 Date page (3-date-page.png) DECIDED
- Entry points: the read box opens a popup with "See the whole day ›" attached to the bottom of the same card. The date and the summary line also open it. Every event page has a "This day" card.
- On the date page, each event row shows the venue on the right, stacked with the time. Date-page rows are ordered by crowd (they explain the score); the Explore sheet is ordered by time.
- Also decided earlier (D11): the event page keeps "Up against" WITH distance, drops the old timeline, and adds a "See the whole day ›" link.

## 4 Stubs (4-stubs.png) DECIDED
- Tabs: Recent first, then Upcoming. Reason: a diary opens on what you've done (like Letterboxd), and Upcoming is often empty.
- Logging copy is "+ Stub it" everywhere, for any event type, past or future.
- Button: an extended floating "+ Stub it" button bottom-right above the tab bar that shrinks to "+" on scroll. The list gets bottom padding (~70pt) so it never covers a read box. The empty Upcoming state keeps a full-width filled button plus "Browse today in Explore ›".
  - Rejected: A, a pill beside the Recent/Upcoming switch (it reads like a third tab and squeezes the switch); B, a full-width button on the populated list (heavy, costs ~60px on every visit, feels like a form); a bare "+" only (drops the verb); a "+" in the header (more native but easy to miss and out of thumb reach).
- Recent uses Letterboxd-style month bands (e.g. OCTOBER 2026). No "Your year ›" link (Stats lives in You).
- Rows mirror the Explore rows: a date box with the weekday abbreviation over the day number (matching the carousel), title plus venue, tags, and a small read box with its word at the end.
- Status language: Attended (past) and Attending (upcoming), not "Was there" or "Going". The crowd icon and number follow the status on Attended and Attending rows only: "[ticket] Attended · [crowd] 52k". Reason: the crowd figure belongs to the in-person attendance.
- Icons: ticket for attending, TV/screen for watching, bookmark for interested, lock for private, people for shared/friends.

## 5 Following › Favorites (5-favorites.png) DECIDED
- A schedule by date. A team tag in team colors on the left; a small read box with its word at the end of each row.
- Two tap zones: the row opens the event page and the read box opens the date page, kept as mocked with the thin separator.
  - Rejected: a tinted tile, a background split, and a corner arrow.
- The read box shows the read for the city the event is in. The user's home city gets no special label; any other city shows its code ABOVE the box (e.g. MIL). Rejected: the code beside the box.

## 6 Following › Friends (6-friends.png)
- DECIDED: grouped by event is the default, with a view switch to the Feed. Cards lead with the title, venue, then occasion/friction tags; the read box is small at the end (or omitted). Each card collapses to one summary line and expands to grouped Going / Watching / Interested name lists (not one row per activity). Interested appears on the Upcoming feed. "Sam +1 going" short form.
- DECIDED: past items need an obvious visual shift; "Past / See past activity" was rejected.
- DECIDED (Oct 11, later): the past break is A, a Letterboxd-style "Earlier" band matching the Stubs month bands (rejected: B "Show earlier" pill, C muted card). The segment labels are icon plus short word, star "Faves" and person "Friends", to avoid stacked F-words (rejected: icons only, keeping Favorites/Friends).
- Rejected: C, the people-strip-first layout.

## 7 Stub it sheet (7-stub-it-sheet.png) DECIDED
- One "+ Stub it" button on the event page opens one sheet. Upcoming events offer Attending / Watching / Interested; past events offer Attended / Watched, with the icons above.
- Watching gets an equal one-tap Private (lock) / Friends (people) choice with nothing preselected. Friends reveals an optional "Where?" field plus a Home preset (Home is available for either), with the helper "Approved friends will see where you're watching". Private gets no helper.
  - Rejected: a privacy switch, "Shared with friends" copy, open-invite copy, and "Only in your own log."
- Feed line when shared: "Sam is watching {event} at {location}". On event rows: "Priya is watching at home".
- Ticket line: "Prices from $48+fees ›" (fetched live, never stored), not "See tickets on Ticketmaster".
