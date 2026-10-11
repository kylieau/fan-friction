# Answers: the six build 2 judgment calls (Oct 10–11, 2026)

_Two outside models' answers to `docs/research/topics/build2-judgment-calls-prompt.md`, saved verbatim by Claude Code on Oct 11, 2026. Neither is a decision; Kylie's calls are recorded below when she makes them._

## Kylie's calls (Oct 11, 2026; the full text is `docs/reviews/build2-judgment-call-decisions.md`)

| Call | Decision |
|---|---|
| 1 | Plain sentences, no dot, no "· you too": "Sam is going to {event}", "Sam went to {event}", "Sam watched {event}". Each line opens the event and ends with a short date. A Feed section beside the by-event list. Neither model's wording; mock B rejected by name. |
| 2 | Attending / Watching before, Attended / Watched after, the same on both pages. "I watched it" is an action on the event page only; the date page shows Watched as a state. |
| 3 | "N attended · N venues · N watched". Watched never counts toward venues or crowd stats, Heaviest or Quietest. New: where watched (Home or a Public place, shared per event by name only, or kept private), enforced in the database. |
| 4 | Drop "Fans with you". The crowd locks when the stamp locks, to the announced attendance or the best estimate; a one-time fill of empty crowds only; no "· N stubs" suffix. |
| 5 | "Prices from $48+fees ›" stays, "+fees" always beside a number; "See tickets on Ticketmaster ›" as the fallback. |
| 6 | "Local competition" again, on the date page: the read and summary line on top (mock D), the list, then the stacked timeline (B/C). One-hour rule. No miles. What the event page keeps is open. |
| 7 (new) | The gold crowd icon beside every crowd figure, and only crowd figures. |
| 8 (new) | My Stubs: a recent-activity list with Recent · Sports · Concerts · Watched · Attended chips, no badges on rows. |
| 9 (new) | The Stats tab stays as it is; the badge set is parked for a later Mock Mosaic pass. |

Status: closed, decided in docs/reviews/build2-judgment-call-decisions.md and logged in docs/product/product-decisions.md, Oct 11, 2026

## Model 1

(Model 1's answer, pasted by Kylie on Oct 11, 2026)

Call 1 — Shorten the rows, but keep the names. Use "{name} planning" / "{name} attended" with small avatars; "· you too" only for matching attendance statuses, never for watched entries.
Call 2 — Use "I was there" → "✓ You were there" and "I watched it" → "✓ You watched it" on both pages; future plans keep Attend / Attending; watched logging in a compact date-row action menu.
Call 3 — "N attended · N venues · N watched"; watched entries contribute to neither venues nor either crowd stat.
Call 4 — Backfill missing historical crowds once, preserve and freeze snapshots, exclude watched entries; with incomplete coverage label "Fans with you · {N} stubs" and "Biggest recorded crowd".
Call 5 — Remove numeric prices and "+fees" pending a pricing and data review: "See tickets on Ticketmaster ›" only. Pushes back on waiting for monetization: FTC guidance covers third-party platforms and California says disclosing that fees will be added does not satisfy the full-price requirement (ftc.gov fees rule FAQ; oag.ca.gov/hiddenfees).
Call 6 — Consolidate into "Up against": compact duration/overlap on rival rows, include relevant overlaps beyond the one-hour start window, remove "Local competition" and mileage.

## Model 2

(Model 2's answer, pasted by Kylie on Oct 11, 2026)

Call 1 — One line per friend under the event header, small avatars, no "+N" collapse. "{name} is planning to attend" / "{name} was there" / "· you too". Reasoning: "going" on the day reads as "on the way now"; "was there" matches "You were there".
Call 2 — "I was there" / "✓ You were there" on both pages; Attend / Attending stay for plans; "I watched it" is an action on the event page only, and the date page shows "✓ You watched it" as a state.
Call 3 — Watched entries count only toward "watched": excluded from events, venues, Fans with you and Biggest crowd; they keep their stamp. "N events · N venues · N watched" where events means attended only.
Call 4 — Store the crowd when the night's stamp locks, not at the tap; backfill pre-Oct 10 entries once from the catalog; never look it up live; entries without a figure are left out; the stat stays hidden until one entry has a crowd.
Call 5 — Drop "+fees". Show "Prices from $48 ›" only when Ticketmaster marks the price as including fees; otherwise "See tickets on Ticketmaster ›". Revisit at the monetization blocker.
Call 6 — Remove Local competition from the event page; add distance to each Up against rival row ("{artist or team} · {venue} · {crowd} · {n} mi"); move the timeline, without distances, to the date page.
