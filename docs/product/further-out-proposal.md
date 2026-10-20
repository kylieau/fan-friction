# Proposal: "Further out" (regional events), mock for Kylie's yes

Claude Code, Oct 19, 2026 (evening). Mock approved by Kylie Oct 20, 2026 ("fine", with a helper line under the Settings heading); built Oct 20 (see "Built" at the end).

**Updated Oct 20, 2026, midday (Kylie, multiple choice):** separate switches for the map and for lists (date pages, the Explore List, search), both on by default; a favorite's further-out event always shows on its page and Following. The screenshots below are redone to match.

**Decided already (Kylie, Oct 19, 2026, evening, multiple choice):** big events within about a 2-hour drive of a covered city's core show in a "Further out" group on the date page and an optional map layer. They never change the city's verdict (the regional research's rule 3, `docs/build-5/research/regional-events-research-answer.html`). This page is only the look, for her yes before any code (mock first).

## The mock (Los Angeles, Fri Oct 30, 2026, at phone size)

**Date page:** a "Further out" card under the lineup, the same rows as the lineup. The row keeps its crowd and has no friction ring, because it never feeds the verdict. The second line reads the room, the town and the drive.

![Further out on the date page](further-out-mock-date.png)

**Explore List:** further-out rows close each day, under a small "Further out" heading, same rows, no ring.

![Further out in the Explore List](further-out-mock-list.png)

**Settings › Crowd size:** a "Further out" heading with two switches, "Show on the map" and "Show on date pages and lists", both on by default. On the map, further-out events show as muted chips, the way small rooms do, with no friction ring; they sit outside the city, so they only appear when the map is zoomed out.

![The two switches in Settings](further-out-mock-settings.png)

Escape Halloween (Insomniac, NOS Events Center, San Bernardino, Oct 30–31) is the example row: 62k is half of the 125,000 reported over two nights in 2017, labeled estimated. Its tickets sell through Front Gate, which the app can't read (Oct 19 seller-terms decision), so it would come from the hand-kept festival list, not a feed.

## The rule behind it (every city, no hand tuning)

- **What counts:** an event likely at 5,000+ on at least one day, at a room outside every covered city but within about 2 hours' baseline drive of a covered city's core (the city's map center today).
- **The drive:** computed once per room by a script from the city's core and stored with the room, labeled estimated; never a live traffic figure.
- **Where events come from:** the same feeds, reading rooms outside the city once those rooms are on file (the held Inland Empire rooms are the first), plus the hand-kept festival list (Nocturnal Wonderland and Escape Halloween are already marked regional).
- **What it never does:** change the verdict, take a friction word, or count toward the day's total.

## Crowd size takes the same pattern (Kylie, Oct 20, 2026, midday, multiple choice; built Oct 20)

One range, with two switches under it, "Apply on the map" and "Apply on date pages and lists" (search follows lists), both on, so nothing changes until someone turns one off. "Show events with unknown size" stays one switch and filters wherever the range applies. The range's "Applies to Explore, date pages and search" sentence goes; the switches say it. The whole panel:

![Settings › Crowd size with both sets of switches](further-out-mock-crowd-panel.png)

## Leans she may change
- The heading over the range's switches reads "Applies"; the rows say "Apply on…" for the range and "Show on…" for Further out, because one filters and the other adds.
- The card (and the List's heading) shows only when there is at least one further-out event that day, and always sits after the day's own events.
- No line under the switches explaining them (the copy rule: users are not dumb).
- Search follows the lists switch.
- The row's second line: "NOS Events Center · San Bernardino · 1 hr drive". The drive could drop to save space.

## Decided with it
A favorite's further-out event always shows on its page and the Following timeline, whatever the switches say.

## Built (Oct 20, 2026)
- **Data:** a room marked `furtherOut` (drive, town) keeps its city's id so the feeds read it, and never reaches a day, the calendar, search, a stamp, the stamp clock or a gridlock zone. The first rooms are Los Angeles's Inland Empire rooms of 5,000+ (Toyota Arena, San Manuel Stadium, Morongo Field, Fowler Events Center; 63–83 minutes by the routed drive). Only events of 5,000+ show.
- **Date page:** the Further out card under the lineup, behind the lists switch (stubs and friends' plans always show). **Explore List:** a small "Further out" heading closes the day. **Map:** muted chips on the drawing layer only (the camera, the sheet's rows and the day's totals never see them), behind the map switch. **Event page:** a further-out event opens on its own, with no This day card. **Favorites:** its page, the Following timeline and Home's strip include further-out events whatever the switches say. **Settings:** the Further out heading, the helper line and the two switches.
- **Measured** with Los Angeles's live further-out rows on Sat, Nov 7 (Ramon Ayala at Toyota Arena): the verdict reads 4.7 with 25 lineup events with or without the row; the card and the List group show one row and disappear with the lists switch off; the map draws one muted chip with the switch on and none with it off, the header staying at 25 events · 64k.

![Built: the date page](further-out-built-date.png)

![Built: the map](further-out-built-map.png)

**Not built yet:** search (it reads the city's calendar, which leaves further-out events out); further-out rooms for other cities (research); Escape Halloween and Nocturnal Wonderland (their grounds are not on file and the festival list is not read by the app yet).

