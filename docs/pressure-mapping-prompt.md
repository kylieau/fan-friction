# Second-opinion prompt: turning competing-crowd "pressure" into a 1–10 score

Copy everything below the line into another AI model. Paste its answer back to Claude to fold in.

Reminder for Kylie: this is the open piece the v3 structure doc leaves unset (the mapping from pressure to a score). Claude's own concern is that comparing competitors' capacity to an event's own capacity may be too harsh on small venues next to big ones (the Chargers in a ~27,000-seat stadium on the same afternoon as the Rams in a ~93,000-seat one).

---

I'm building a personal app called Fan/Friction. It shows how much competition from other big live events (sports and concerts) shapes attendance on a given date, to answer the claim that big-city fans are "fake." It starts in Los Angeles, but every rule must work in any city in the US or abroad, so say where a suggestion would only fit LA. I'd like a critical second opinion on one open piece of the model. Push back where you disagree, and propose something better if you can.

**What's already decided (please don't reopen unless you think it's broken).**
- Only facts known before an event count. Results and actual attendance never feed the score. Actual attendance is shown only as labeled evidence.
- Size means **venue capacity**, never expected attendance.
- Each date gets two sub-scores, **Crowd fight** (fans choosing between events) and **Gridlock** (everyone converging on shared roads, rail and parking). The date rating is the louder of the two plus a small bump when the other is also high (placeholder: bump = 0.5 × the amount the quieter one is above 3, capped at 10). Both are shown to users only at Moderate or higher.
- **Overlap tiers** between a pair of events: High 1.0, Medium 0.5, Low 0.15 (placeholders). Same-sport rival clubs are Medium; two "Broad" teams (named as their team by about 20% of the metro's residents) in different sports are High; different sports where neither is Broad, sports vs. concerts, and different genres are Low. A Marquee competitor lifts a pair one tier (same domain only). Events that are invite-only (an awards show) carry no Crowd fight at all and count only in Gridlock.
- Occasion shield on the event's own Crowd fight verdict: Marquee −2 levels, Major −1 level, nothing for Routine or Notable.

**The open problem.** For an event E, the draft formula is:

`pressure(E) = sum over other events c of: overlap weight × (shared hours) × capacity(c)`

and E's 1–10 Crowd fight score comes from `pressure(E)` **relative to E's own capacity**. Each pair of events is then scored once, by the higher of its two directional scores. The date's Crowd fight is the worst pair, plus 0.5 for each other pair scoring 5 or more (placeholder).

I don't know how to map that ratio to a 1–10 score, and I suspect "relative to own capacity" has a flaw: a small venue next to a huge one always looks crushed, even if the two crowds are quite separate.

**Worked case to test any proposal on (all capacities are known in advance; ignore attendance).** Sun 9/17/17, Los Angeles, three games starting within about 45 minutes of each other on the same Sunday afternoon:
- Chargers (NFL) vs. Dolphins at StubHub Center in Carson: capacity about 27,000. Their first home game in LA after moving from San Diego. Rating level "Notable" (no shield).
- Rams (NFL) vs. Washington at the LA Memorial Coliseum: capacity about 93,600. Routine.
- Angels (MLB) vs. Rangers at Angel Stadium in Anaheim: capacity about 45,500. Routine.
- Also that evening: the Emmy Awards at the Microsoft Theater downtown (about 7,100 seats, invite-only, so Gridlock only).
- Overlap tiers: Rams–Chargers Medium (same sport, rival clubs); every other pair Low (neither team is Broad in LA; the Dodgers and Lakers were the Broad teams then).
- By the formula the pressure on the Chargers is roughly 0.5 × 93,600 + 0.15 × 45,500 ≈ 53,600, about twice their own capacity. The pressure on the Rams is roughly 0.5 × 27,000 + 0.15 × 45,500 ≈ 20,300, about a fifth of theirs.
- My own hand rating for the date is 7 out of 10 (Brutal), but I'm worried it was influenced by reports of empty stadiums, which is a result and can't be allowed.

A second test: Sat 11/19/22, Los Angeles. UCLA vs. USC football at the Rose Bowl (about 90,000 seats, 5:00 kickoff); BLACKPINK at Banc of California Stadium (about 22,000–24,000); Elton John's farewell tour at Dodger Stadium (56,000, Marquee); Clippers vs. Spurs at Crypto.com Arena (18,500). Mostly different audiences, all within a few miles of the same downtown freeways. My hand rating is 5, and I now lean 6 because shared roads count.

**Questions.**
1. How should pressure map to a 1–10 score? Propose a concrete formula or a lookup table, and say what it needs from the data.
2. Is "relative to the event's own capacity" the right denominator? If not, what instead (the larger of the two venues, a ratio capped at some value, the competitor's own pressure on us divided by the total, an absolute number of displaced seats)? Show what each choice does to the Chargers case.
3. Does the same-sport Medium weight (0.5) still make sense when two venues are very different sizes, or should the overlap weight shrink when the competitor's crowd is much bigger than the event's own capacity? Is there published research on how many fans of one team will consider a same-sport game by a different team at the same time?
4. Should a pair be scored by the **higher** of its two directional scores (my draft), or by something else (the average, the lower, a size-weighted blend)? What does each do to a lopsided pair?
5. Does the "worst pair plus 0.5 per additional pair at 5+" rule for the date make sense, or does it over-reward dates with many small clashes?
6. Walk both test dates through your proposal and show the scores you'd get for Crowd fight, so I can see whether it reproduces my hand ratings or argues for different ones. If it argues for different ones, say which facts decide it, using only things known beforehand.
7. Does your answer hold for a city with a different pattern: a transit-heavy city (London, New York), a one-team city (Kansas City) and a tourist destination where most ticket-buyers are visitors (Las Vegas)? Where would it break?

Please keep the answer short and concrete: the formula, the worked cases, and what you'd change.
