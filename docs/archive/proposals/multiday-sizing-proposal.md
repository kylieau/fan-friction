# Proposal: sizing one day of a multi-day event

Claude Code, Oct 16, 2026. **Decided:** Kylie, Oct 16, 2026, "go with your lean": the Yes and Hold column below stands. Recorded in `product-decisions.md`.

Status: closed, product-decisions.md, Oct 16, 2026. Built on the research answer `docs/research/topics/multiday-attendance-answer.md` (section 3 has the full rule, with the note shown for each row).

**Today's rule (C3, Kylie, Oct 7):** a per-day count is used as is; a total of cumulative admissions is averaged over the days open; passes, unique-attendee counts and figures of unclear kind stay unsized.

**The line I'd draw:** keep the rows that are a published figure plus plain arithmetic, and hold the rows that rest on a constant we'd be choosing ourselves or on another year's figure.

| Row | Published figure | How a day is sized | Label | Recommend |
|---|---|---|---|---|
| 1 | A count for that day | Use it | announced or reported | **Yes** (today) |
| 2 | A per-day figure for that year ("about 115,000 a day") | Same number each open day | announced or reported | **Yes** (today) |
| 3 | A per-day cap or permit, plus a report it sold out that year | The cap (sold-out days ran 97–98% of cap) | estimated | **Yes**, new |
| 4 | Cumulative admissions (turnstile, gate, single-day tickets) | Total ÷ days open, the same each day | estimated | **Yes** (today). The research's day-of-week weights for fairs (Sat 1.5, Wed 0.7…) and race weekends (Sun 46%): **hold**, since they're our constants from two fairs and one race |
| 5 | Unique people (named badges, registrants) | Unique × 0.7 (fan conventions) or 0.6 (trade shows) | estimated | **Hold.** Two data points for conventions, none for trade shows (the research says so) |
| 6 | Multi-day passes sold | Passes, plus that day's single-day tickets if known. A total mixing passes and single-day tickets in an unknown share gets row 7's floor | estimated | **Yes**, new. Passes are never divided by the number of days (your Oct 16 point) |
| 7 | Unclear kind ("more than 20,000 fans") | At least the figure ÷ days open; sized only when that clears 5,000, shown as "at least" | estimated | **Yes**, new. Every other reading gives a bigger day, so it's safe for the 5,000 test |
| 8 | Nothing for that year, but the same event published a per-day figure in a nearby year | The lower of the nearest earlier and later figures | estimated | **Hold.** The researcher would leave it out to keep to published figures |
| 9 | Nothing usable | Unsized | — | **Yes** (today) |

**Stays unsized under any choice:** a cap with no sellout report, a preview night with no count of its own, a row 7 floor under 5,000, an event whose open days aren't known.

**What changes on dates already loaded:** Adult Swim Festival 2018 (ROW DTLA, Oct 6–7) goes from unsized to at least about 6,700 a day (row 7: "more than 20,000" ÷ 3 days), so it would start feeding friction. Its Friday preview night stays unsized.
