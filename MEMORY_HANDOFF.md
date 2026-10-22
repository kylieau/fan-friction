# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions at its top (the K-list), build follow-ups under **Next** (newest: "The Los Angeles census report, done Oct 22", "Small rooms answer 6", "The Oct 22 nightly run", "Small rooms answer 5"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 22, 2026, about 3:00 PM Pacific, Claude Code (Opus 5.5, with Fable as advisor), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`, pushed; `git fetch` first (the nightly pushes to `main`); every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; "use advisor liberally" (Oct 22): a second opinion before committing to an approach and before calling work done._

## Current state
**Everything is committed and pushed; the working tree is clean** apart from Codex's two untracked `.agents/skills/source-command-*` folders (not ours; leave them). `npm run build` and the titles, city-build, add-on and event-types checks pass. None of today's catalog changes are in the app until the **Oct 23 nightly run**.

**This session (Oct 22, afternoon), in order:**
- **The Los Angeles census report** (`docs/checks/artist-coverage-la-census-2026-10-22.md`, CSV beside it): 565 census rows, 66 by design, 499 in scope; 364 listed on the Oct 22 catalog → 374 after fixes → 395 with Acrisure. At 5,000+ rooms 78% → 90%. What's left is mostly box-office rooms under 5,000 (accepted, like AXS).
- **Fixed from it:** soccer read as football (LAFC and the Sounders were listed twice); season passes are add-ons; the dragstrip's second Ticketmaster id (NHRA Finals, Nov 12–15, 40,000); two seller-name retries ("Parent-Room" and "The X-City": Segerstrom Hall, Fox Pomona; the Fox and NHRA listings are Ticketmaster resale); ids for five LA rooms.
- **Kylie's answers, built:** the Coachella Valley's seven rooms are further out (routed 144–164 min) and Acrisure Arena has its id and a corrected point (it listed nothing before); the one-game rule merges a seller's game naming the feed's opponent and side whatever the start, and each city's pass checks feed games other passes filed in its rooms (49ers at Banorte, Longhorns at Frost Bank); matinee and evening houses more than three hours apart are separate events, never compete with each other, and a run counts dates; racing days stay out (re-evaluated); box offices accepted; the boxing card stays under the stadium (advisor's call).
- **The id script** now lists exact-name seller rooms 1.5–10 km away for a hand look and writes none; the run for every city waits for the allowance reset.
- **Research:** small rooms answer 6 (Atlanta, Miami, Phoenix) saved; continuation 7 (Boston, Bay Area, the last two) written; answer 6's corrections built (FPL Solar 10,000, AZ Veterans Memorial Coliseum 14,691, Au-Rene Theater at Broward Center, Hard Rock Stadium again from July 19, VyStar Arena dated). **City-boundary prompt** written (`docs/research/topics/city-boundary-prompt.md`); Kylie runs it at about 5:20 PM when her ChatGPT session resets.

## Key decisions in force (newest first; full text in product-decisions and BACKLOG)
- **Oct 22 afternoon (Kylie):** the census report's answers above. **Provenance correction:** the Los Angeles, Orange and Ventura line was the Oct 16 small-rooms brief's ask, not a boundary Kylie chose ("i don't remember explicitly saying LA, Orange, and Ventura county"); not locked, the boundary research decides. The further-out helper text stays as is. The valley's rooms under 5,000 stay off lists (her yes to the lean).
- **Oct 22 earlier (Kylie):** high-school football waits until a user attends it; the DC/Philadelphia capacity calls; college rooms as built. **Builder's lean, not confirmed:** answer 5's 74 and answer 6's 99 small-room additions come in as one pass when the series ends.
- **Sellers (Kylie, Oct 19 and Oct 21):** AXS, DICE, Insomniac, Goldenvoice and Framework stay unread; **she signs up for nothing beyond a plain free API key**. No proposal may offer an AXS integration, partner deal or seller sign-up.
- **Oct 19–21 (Kylie):** Further out never counts toward a verdict, two switches, favorites always show; the add-on layered rule; Verdict / friction words; Add a game / Add a show and the review queue.
- **Held by Kylie (Oct 16):** the stamp's end-of-day fallback. Do not change the stamp.
- **Working notes:** a seller's spelling cannot move from `names` to `aliases` (stubs and favorites look rooms up by `names`); adding aliases is fine. In `venues.ts` keep comments above `location`, never between `location` and `ticketmasterIds` (the id script's write regex). The Ticketmaster key's allowance is 5,000 a day, reset about 12:24 PM Pacific, and the nightly at 12:15 AM draws on it: check `Rate-Limit-Available` before a big run. Headless checks import `node_modules/vite/dist/node/index.js` by absolute path and `ssrLoadModule` a source file; `loadTicketmasterEvents('la', key)` runs the real pull (about 60 requests). The anon key in `.env.local` reads the shared catalog (`events`, `data->place->>venueId`). The browser (`.mcp.json`) is set up for phone-size screenshots. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Research to run:** the city-boundary prompt (today, about 5:20 PM); small rooms continuation 7 (Boston, Bay Area); further out continuation 4 (Montreal, Vancouver, Detroit, Minneapolis). Save each answer beside its prompt.
3. **Phone checks (deferred):** the Friends timeline and the sheet's Friends side signed in; the Add a game card and pending label; the Review queue with a real row; the earlier list in BACKLOG.
4. **Build 7** (the logging structure) is being mocked by Kylie with Grokbot and is "coming along nicely"; she will hand it over.

## Next
1. **Read the Oct 23 nightly log:** no "fan-added rows skipped" line (migration 0033); Free Throw and The Lion King listed; no MVP Court Pass or season passes at 5,000+ rooms; NHRA Finals ×4 at `pomona-dragstrip`; Segerstrom Hall and Fox Pomona rows; Acrisure rows (further out, never in a Los Angeles verdict); one LAFC row at BMO on Nov 1; "seller games dropped as copies" lines in the Mexico City and San Antonio passes; Pantages and Disney On Ice pairs or trios.
2. **After 12:24 PM Pacific on Oct 23:** the room-id check for every city, then the hard-access measure (exact steps in BACKLOG, "The Los Angeles census report, done Oct 22").
3. **When the boundary answer lands:** save it beside its prompt, compare its rule against each city's boundary, and bring Kylie the differences as multiple choice with the lean; Ontario and the Inland Empire first.
4. Later, in BACKLOG: DC Armory's access measurement; teaching stub and favorite lookups the aliases; the Sidearm box-score collector; the one small-rooms import pass when the series ends.

**Next command to run:**
```bash
git pull && gh run list --limit 3
```
