# Adding an event from a team's or artist's page

Status: decided (Kylie, Oct 21, 2026, late evening: both entry points, the card, the inclusion standard and the three confirmations; see product-decisions). Building from Oct 21, late evening. Written Oct 21, 2026 (late evening) by Claude Code, from Kylie's ask the same evening, at UCLA's exhibition against Cal Baptist ("it's like selecting rather than filling out brand new... defaults are already plugged in"), and her word that this is a new event, not only a new stub, so it sits beside build 7's logging work rather than inside it. Nothing is built.

## Why
The feeds now carry most of what happens in a city's rooms (the league feeds, Ticketmaster's match-shaped sports listings since Oct 21, the schools' own calendar feeds since Oct 21). What no public source carries, by decision: shows sold only on AXS, DICE, See Tickets or Tixr (the Shrine's Chappell Roan nights), and box-office games at a school whose site is neither on Sidearm nor an opponent of one. Today those go in through "Add it yourself" on New stub: What, When, City, Where, then a Details block of type, sport, level, division and competition. Too many boxes for someone standing in a stadium (Kylie, Oct 13: "it has to be incredibly simple").

## The mock (phone size, drawn inside the live app)
![Five screens: the team page's button, the game sheet, the opponent pick, the show sheet, New stub type-first](add-from-page-board.png)

1. **Team page.** A second outline button beside Follow, "+ Add a game" (artist pages: "+ Add a show").
2. **The game sheet.** The team, the type (Game), the sport and the level are set from the team record and said in one quiet line. Three rows: **Opponent** (a pick), **When** (today, a time, optional), **Where** (the team's home room, changeable: the city's rooms, then "Another venue"). One gold **Save**.
3. **The opponent pick.** The schedule's opponents this season first, then "Someone else…" for free text. Nothing else to type.
4. **The show sheet.** From an artist page: **Where** (the home city's rooms, biggest first) and **When**. Type (Concert) and genre are set from the artist.
5. **New stub, type first.** Game · Concert · Other, then "Which team?" or "Which artist?"; a pick opens sheet 2 or 4 with the same defaults. "Add it yourself" stays for an event with no team or artist.

## Builder's leans, for Kylie to confirm or change
- **What Save makes:** an event in her own log (a plan if ahead, a stub if past), shown to followers the way any plan or stub is, and matched to a listing later if one appears (today's hand-add already matches). It does not enter the shared catalog: anyone adding events everyone sees is open posting (direction.md guardrails). If she wants a hand-added event to be visible on the date page for other people, that is a separate decision.
- **The button's place:** beside Follow, since that row is where the page's actions already sit. The alternative, a line under "Your events", is quieter and easier to miss.
- **No time, no problem:** the time is optional; a game with no time takes the "Time TBA" band on the date page (Oct 16).
- **Exhibition:** not a box. The word in the opponent line ("Cal Baptist (exhibition)") would do, or nothing; the preseason flag is a later nicety.

## Open
- Whether a hand-added event reaches the shared catalog (lean: no; see above).
- Whether the sheet is a bottom card (as drawn) or the full New stub page with the defaults filled.
- The native time control clips "PM" in the mock at 393 px; a real phone shows its own picker.

## Decided (Kylie, Oct 21, 2026, late evening)
Both entry points, the bottom card, Save into the person's own log, and a path to the shared catalog with a standard and a mechanism:

**The standard at Save.** A team or artist on file; a room on file; a date and a time; nothing already listed at that room, date and sport (else it matches the listing); signed in. "Official, ticketed" is enforced by the records, not a box: a sister's high-school game has neither a team nor a room on file (Kylie: "it shouldn't be for random things... official events... ticketed").

**Pending until confirmed, three ways.** (1) A feed catches up and the entry matches its listing (exists). (2) A second account that doesn't follow the first adds the same team, room and date. (3) Kylie approves it: a Supabase row with an approved flag for v1, no admin screen until the queue is busy. Pending shows to the person and their followers, labeled "Added by a fan"; confirmed shows to everyone, sized like any game, label kept.

**Build order.** Step 1: the two entry points, the card, the entry in the log with its qualifying flag and the "Added by a fan · Pending" label. Step 2: the submissions table (SQL for Kylie to paste), the second-person check and the approved rows entering the catalog at the nightly run.
