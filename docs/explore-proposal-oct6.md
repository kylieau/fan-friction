# Explore proposal (Oct 6, 2026): one day at a time

Kylie's three notes from Oct 5, taken together: show the day's high and low, drop "Next 7 days", and make the week strip a day-by-day carousel like an airline date picker. **Kylie, Oct 6:** swipe browses, tap selects (option B). The "Next up" line on an empty day: yes. Range on both the map header and the date page header (Oct 6). **Built Oct 6, all four steps, on the local site for her review.** The strip anchors on today (two weeks back, a month ahead) unless the viewed day is far from it, then on that day.

## Why the map shows no temperature today
Two causes, both found in the code:
1. The map header shows feels-like only in single-day view. On a day with no LA events (Oct 5 was one) the map widens itself to Next 7 days, which hides it.
2. The nightly weather job fetches the city point only on days that have events. A quiet day has no weather row at all.

Dropping Next 7 days fixes the first. The high-and-low change below fixes the second.

## 1. Drop "Next 7 days": the map always shows one day
- The When pill loses its menu. It becomes the date label ("Today", "Fri, Oct 9") and a tap opens the month sheet, as the search button does now.
- The map never widens itself. An empty day shows the empty map, the strip (which already shows where the next reads are), and the sheet's "No events" line. Proposed one-line addition to that sheet line: "Next up: Thu, Oct 8 · Dodgers vs. Padres." Tap goes to that day.
- The averaged week rating goes. It only ever showed in week view.
- Home's mini map stays (it frames the week's venues). Its caption becomes "This week · 4 events" and the tap opens today's map.
- Old links with `?when=week` open today's map. Nothing breaks.

## 2. The strip becomes a carousel
Today: seven fixed cells, two back, the viewed day in slot 3, four ahead; only a tap moves it.

Proposed: one scrolling row of day cells that snaps a cell at a time. The viewed day keeps its blue border and keeps its place in slot 3. A swipe moves the row one day, and the map follows the day that lands in the slot. A tap on any visible cell still jumps to it. The month sheet stays for long jumps.

```
  ◂ swipe ▸
 ┌────┬────┬━━━━━━┬────┬────┬────┬────┐
 │ Mon│ Tue┃ Wed  ┃ Thu│ Fri│ Sat│ Sun│
 │ 5.2│ 1.0┃ 6.3  ┃ 2.1│ 4.7│  — │  — │   ← reads; days ahead muted; beyond 16 days no weather, read stays
 │  5 │  6 ┃  7   ┃  8 │  9 │ 10 │ 11 │
 └────┴────┴━━━━━━┴────┴────┴────┴────┘
```

Two ways to read "movement per day", and the recommendation:
- A: swipe selects. One gesture moves the map a day. Each cell already carries the read, so browsing and choosing are the same act.
- **B (Kylie's pick, Oct 6): swipe browses, tap selects**, as Google Flights does. Safer against accidental moves. The viewed day keeps its border wherever it scrolls; a small "Today" tap target returns the row when today has scrolled out of view.

Range: scroll freely either way. Reads load as cells arrive. Past days keep their reads back to the seed and the archive.

## 3. High and low
**Data (first, no cost).** The nightly job already calls Open-Meteo once per place per date. It adds the day's feels-like high and low for the city point, for every day in the 16-day horizon, not only days with events. A one-time backfill does the same for past dates with weather (the 13 nights). Same source, same free tier, two more fields.

**On screen.**
- Map header, for the viewed day: `☀️ 62–88°` (feels-like low and high), replacing the single 7 pm number. Shows on every day, quiet ones included.
- Date page header: the same range.
- Event rows and the event page keep the start-hour feels-like at the venue ("81° at 7:10 pm"). That number is the formula's input and should stay visible as the thing being rated. Indoor venues still show nothing.
- Strip cells: no weather. Too small, and the read is the point of the strip.

**Only LA?** The range is universal; its usefulness varies. A dry city swings 30° between a 1 pm kickoff and a 9 pm encore (Los Angeles, Phoenix, Denver); a humid one barely moves (Miami, Houston). One display everywhere, no per-city switch.

## Build order
1. Weather job: daily high and low, city point every day, backfill. Data only; nothing visible changes.
2. Drop Next 7 days (pill, auto-widen, Home caption, old links).
3. Map and date headers show the range.
4. The carousel strip.

Each step is a small commit on the local site for her to look at. No new cost. 🚩 Nothing here touches a paid plan.

## Questions for Kylie
- A or B on the swipe?
- "Next up" line on an empty day: yes or no?
- Range on the date page header too, or only the map?

## Round 2 (Oct 6): the date is written four times
Kylie, after the first build: the header date, the carousel, the pill and the Today button are redundant. She wants Today back on the pill's dropdown rather than having to recognize today's cell, which requires knowing the date. Asked for expert guidance on reducing the redundancy.

**Where the date lives now on Explore:** the big header ("Mon, Oct 5"), the bordered strip cell, the pill ("Today ▾"), and the sheet title ("Today · On the map"). The idea of today lives in the pill text, the floating "‹ Today" button, and the sheet title.

**What the patterns say.**
- Calendar apps converge on one layout: the title is the picker (Google Calendar's "October ▾"), the grid shows the days, and one persistent Today control sits in the toolbar (Google Calendar top right, iOS Calendar bottom bar). The title is never repeated in the toolbar.
- Nielsen Norman Group, on date input: label the current date "Today" in the picker, "it removes any uncertainty in case the user doesn't remember today's date" (their Todoist example). Offer Today as a shortcut because it is faster than navigating; reflect the pick back in the calendar.
- Material 3: today and the selected day get two different marks (today outlined, selected filled), both quiet.
- Apple Weather's day list labels the first row "Today", not "Mon".
- General date-picker guidance: strip UI elements; a calendar is already busy.

**Options.**
- **A (her ask):** keep the header date as the one written date. The strip's today cell reads TODAY instead of MON. The pill drops its date text and becomes a small calendar button whose menu is Today / Pick a date. The floating Today button goes. The sheet title becomes "On the map".
- **B (recommended):** same strip and sheet changes. The pill goes entirely: the header date gets a chevron and opens the month sheet (the title is the picker). A small "Today" pill sits where the date pill was, only when the viewed day is not today. One tap to today instead of two.
- **C (smallest):** only relabel today's strip cell. Leaves the pill and header duplication.

Recommendation: B. Three elements, each with one job: the header names and picks the day, the strip browses, Today returns. A is B with one more tap and one more control, and is fine if she prefers the dropdown.
