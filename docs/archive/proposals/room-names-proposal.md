# Room names: seller spellings and undated former names

Proposal, Oct 22, 2026 (afternoon), Claude Code (Opus 5.5, with Fable as advisor). Asked for by Kylie the same afternoon ("ok let's do it") after the alias lookups landed. Not a decision until she answers.

Status: closed, Kylie took both leans (Oct 22, 2026, afternoon: "yes, your lean for both!"); recorded in `docs/product/product-decisions.md` ("Room names"), the rule in `docs/reference/new-city-checklist.md`, the prompt in `docs/research/topics/room-former-names-prompt.md`, Oct 22, 2026.

The full list is `docs/checks/room-names-never-shown-2026-10-22.csv`: 345 names on file that never show on any date.

## 1. A correction: moving the spellings changes nothing on screen

The backlog said moving seller spellings from a room's names to its aliases "changes what some rooms show." It doesn't. A room shows one of its names by date, and these 345 names never come up on any date, so moving them would be housekeeping only. Since today, stubs, favorites and search find a room by either list, so nothing is missed where they sit now.

One reason not to move them all: when a Ticketmaster title has a room's name glued on ("Jurassic Quest | Anaheim Convention Center"), the cleaner strips the room's names but not its aliases. A spelling moved to aliases could stay stuck in titles.

**Choose one:**
- **(a) Lean:** leave the existing spellings where they are, and add one rule to the new-city checklist: a seller's or feed's spelling goes in aliases, and a name the room has really gone by goes in names, with a date when a source gives one.
- (b) Move the roughly 190 that look like spellings into aliases, and teach the title cleaner the aliases first.
- (c) Nothing.

## 2. The real finding: former names with no date

About 150 of the 345 look like real former names that carry no date, on about 140 rooms. A name with no date never shows, so an old date shows a later name instead. For example:

- **TD Garden, Boston.** A 2003 Celtics game shows "TD Banknorth Garden" (the 2005–2009 name). "FleetCenter" is on file but has no end date.
- **American Family Insurance Amphitheater, Milwaukee.** "Marcus Amphitheater" never shows on earlier dates.
- **Maple Leaf Gardens / Mattamy Athletic Centre, Toronto.** The old name never shows.

This touches old stubs entered by hand, which are logged by the name of the night they happened. The Oct 22 ordering pass put names in order and added dates "only where a source gives one," so these names were left undated on purpose until a source turns up. The sort is rough: it splits by shared words, so a few rows are misfiled (an abbreviation like NJPAC reads as a former name). Treat the count as about 150 to look at by hand, not as a count to trust.

**Choose one:**
- **(a) Lean:** a research prompt that lists these rooms and asks for each former name's years in use, with a source. It's free and covers every city. It runs after the boundary answer and small rooms continuation 7.
- (b) Date a room only when a stub lands on one of its old names.
- (c) Leave them as they are.

## 3. Seller spellings that are the shown name

Only one turned up in the notes on file: **Wolstein Center** (Cleveland). The arena inside is Henry J. Goodman Arena, but sellers, the school and the public say Wolstein Center, so the Oct 22 pass chose it as the shown name on purpose. **Lean:** keep it.
