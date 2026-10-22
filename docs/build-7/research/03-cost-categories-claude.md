# Fan/Friction build 7 research: cost categories, Claude answer (pasted by Kylie, 2026-10-22)

Prompt (drafted during the build 7 design work, 2026-10-22): see bottom.

## Summary of the answer
- Key decision is how "+ Add cost" behaves when opened, not how many categories. It opens as a single amount field preset to Ticket; other categories are chips that each add a line. Ticket-only loggers make the same taps whether 3 or 6 categories exist. Friction comes from choosing a category before typing, or overlapping categories.
- Comparables: Letterboxd (no cost; thin log + optional freeform fields/tags), Flighty (yearly stats on reliable auto data; cost stats here are manual so must handle partial data honestly), Splitwise (total then split; Entertainment/Food & drink/Transportation), budgeting apps (YNAB, Monarch, Copilot) categorize by spend type, scattering one game's cost; per-event grouping is the gap. Names should match familiar spend types.
- Minimal set (Ticket, Parking, Other) fails: Parking too narrow; Other absorbs food/merch. Rule: if Other grows to a large share, categories are wrong.
- Rich set problems: separate Fees invites double counting (US FTC junk-fee rule, all-in pricing for live-event tickets since May 2025) so fees live in Ticket. Travel and Lodging belong to a trip, not an event; merge into "Travel & stay"; include in yearly totals, exclude by default from per-venue/per-event averages (toggle to include). Later a Trips feature could own them.
- Per person vs total: record what the user paid out of pocket. Optional quantity on Ticket line only ("x 4"). Label "You paid". Friend paid and was paid back: enter your share; no splitting feature needed.
- Free/comped: model three states: not entered, free, paid. Blank never counts as $0. "Free" chip on Ticket with optional reason (gift, comp, giveaway, work). Unentered excluded everywhere; free counts toward event totals, excluded from average ticket price with footnote. Other lines still available on free events. Show completeness: "Costs logged for 18 of 24 events." Season tickets: v1 enter per-game price; better: enter plan price once and spread across logged games.
- Watched-from-home: allow costs; swap Ticket for "Stream / PPV", hide Getting there and Travel & stay; keep Food & drink, Merch, Other. Hint: don't enter season-long subscriptions per event. Remote spend shown as its own line in yearly stats.

## Recommended default set
1. Ticket: includes fees; optional quantity; Free chip; default when the row opens.
2. Food & drink
3. Merch
4. Getting there: parking, rideshare, transit, gas.
5. Travel & stay: flights, hotels; in yearly totals, excluded by default from per-event/per-venue averages.
6. Other: catch-all; track its share.

Post-ship: measure how often people add more than one line and Other's share of spending.

## Prompt used
I'm designing an iOS app where fans log the live events they attended (sports, concerts) and can optionally record what they spent. Logging happens in a quick bottom sheet, and cost is an optional, collapsed "+ Add cost" row. What spending categories should we offer? Compare a minimal set (like Ticket, Parking, Other) with richer sets (food and drinks, merch, travel, lodging, fees). For each, weigh logging friction, how useful the yearly totals would be (per year, per venue, per team), and how comparable apps handle it, such as Letterboxd, Flighty, Splitwise and budgeting apps. Also cover whether the amount should be per person or the total paid, how to handle free or comped tickets, and whether watched-from-home events should allow costs. End with a recommended default set and the reason for each category.
