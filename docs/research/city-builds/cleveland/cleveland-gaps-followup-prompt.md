# Research prompt: Cleveland follow-up on city-build gaps

Drafted Oct 13, 2026 (America/Los_Angeles). This follows the two Cleveland answers saved Oct 12, 2026 ([city type](cleveland-city-type-answer.md), [venue table](cleveland-venue-table-answer.md)). Those answers came from the older prompts, before the "Gaps from the first 26 city builds" section was added. This prompt asks only for what they don't already cover. Research only: this does not approve a city build.

Copy the brief below into a research model, and attach or paste both answers so it can see them. Save the full answer beside this prompt as `cleveland-gaps-followup-answer.md`. Keep prompts and answers together.

---

## Delivery
Deliver a downloadable Markdown file named `cleveland-gaps-followup-answer.md`, using headings, pipe tables, and inline links. If unavailable, provide complete Markdown in chat. Do not provide a PDF or summary only. Date the answer and link every fact directly to a public source. If you can't find a source, write "gap" and say what you searched. Never make up a number.

## Already covered (don't redo these)
- City type, measured fan mode splits and a car share per venue (measured, projected or estimated, with ranges): [cleveland-city-type-answer.md](cleveland-city-type-answer.md).
- Venue rows, capacity by setup with conflicting sources, rooms near the 1,000/5,000 lines, teams and their dated home venues, and open-site events with unknown sizes left blank: [cleveland-venue-table-answer.md](cleveland-venue-table-answer.md).
- Games away from the usual home: the Browns' planned move to Brook Park (2029) is covered in [cleveland-venue-table-answer.md](cleveland-venue-table-answer.md) or [cleveland-city-type-answer.md](cleveland-city-type-answer.md).
- Use the venue row IDs from the venue answer in every table below so the two files join cleanly.

## What to research

1. **Name and code.** The display name for Cleveland, a short form, and a three-letter code (lead: CLE; check what local teams and media use). List which cities and suburbs it covers (Cuyahoga County and suburbs; say whether Akron and Blossom (Summit County) are in). Tampa Bay is the precedent: locals and every team say "Tampa Bay" and it covers St. Pete and Clearwater, so the name changed while the code stayed TPA. Neither answer gives a name or code.
2. **Ticketmaster venue ID for every concert room** in the venue answer, checked against the Ticketmaster venue page or Discovery API (give the link). The venue answer lists no verified IDs. If a room has no ID, the city ships with no concerts there. Say which rooms you couldn't verify.
3. **Free schedule feed per team.** For each team in the venue answer (Guardians (MLB), Browns (NFL), Cavaliers (NBA), Monsters (AHL), Charge (G League), Cleveland State, any NWSL/USL club; add any missed): its league, and whether a free schedule feed covers it (ESPN, MLB Stats API, or a league site), with the team's feed ID or page. List the teams that have no feed. The venue answer covers ticketing feeds, not free schedule feeds.
4. **Games away from the home venue.** Neutral-site, international and relocated home games from 2025 on, with dates and the actual site, so none get placed at the home venue (leads: Browns' stadium move (Brook Park plan vs. actual home by date); any relocated or neutral-site games).
5. **Postseason and past crowds.** For each team: postseason home games and their announced attendance for recent seasons, and announced regular-season crowds per season (box scores, league or team pages). The answers give a few observed crowds, not this history. Tampa Bay is the precedent: the feeds returned no counts, so the city had no crowd history.
6. **Team colors.** Primary and secondary hex colors for every team, from an official team or league brand source.
7. **Capacities still open.** Give one sourced figure per setup for: MGM Northfield Park – Center Stage (1,820 from SeatPick, a resale site); House of Blues (1,100–1,240 room vs. 3,000 building); the other figures the answer says came from SeatPick, Vivid Seats, Grindkit or Tradefest. A range on its own or a resale-site figure isn't enough; if that's all there is, mark it as a gap. When sources disagree, list them side by side. Never invent a figure. Each room near 5,000 counts on its sourced figure alone.

**Build rules (put these in the answer as notes for whoever turns it into app data):**
- Every venue ID and team ID must be unique across all cities. `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix.
- Don't make a separate per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
- Never guess a capacity. A missing or range-only figure stays blank and goes on the city gaps list.
- Car shares: wire measured ones; wire sourced estimates marked estimated; leave the rest on the city default.

## End with
1. Name, short form, code and covered area.
2. A table: venue row ID, room, Ticketmaster venue ID, verification link (or "not verified").
3. A table: team, league, home venue row ID, free feed and ID (or "no feed"), primary hex, secondary hex, color source.
4. Games away from the home venue, with dates and sites.
5. Postseason and past-crowd tables per team.
6. The capacities from item 7, each sourced or marked as a gap.

Use public data only. Do not supply app code, personal ratings, or cost commitments. Flag a source that can't be accessed normally; do not bypass access controls.
