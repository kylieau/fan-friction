# Research brief: what should drive estimated attendance for upcoming sports games?

You are an outside reviewer. You do **not** have the Fan/Friction repo. Work from the context below only. Be skeptical of anything that looks like convenience engineering. Prefer honesty (“no estimate”) over inventing crowds. Tables beat prose.

Drafted Oct 6, 2026 by Push Pilot for Claude chat (objectivity). Answers go back to Claude Code for proposal → Kylie OK → build. Do not implement from this file alone.

## Product context (Fan/Friction)

Fan/Friction is a personal log of live sports and concerts. Each night gets a **friction read** from public schedules: how many big events share a date, how close their starts are, and whether crowds hit the same roads. Events are sized by crowd (when known) or by building capacity. Rules that matter here:

- Anything can be logged by hand; ~1,000+ is pre-listed; only **~5,000+** feeds friction.
- Label every number **announced**, **reported**, or **estimated**. Never a bare invented count.
- Announced attendance appears **after** games finish (MLB/ESPN). Upcoming games often show **blank** attendance.
- The app already has a path for **expected draws**: median past announced home crowds by day class (weekday / Fri / Sat / Sun) and month, when enough history exists. Building capacity is the **ceiling**. Playoff / high-stakes games are **not** supposed to use regular-season medians (occasion / building instead).
- Covered cities today: Los Angeles, San Diego, Seattle, New York. Sports come from MLB + ESPN team schedules. Concerts come from Ticketmaster separately — **out of scope for this brief**.
- Route / no-building events (marathons, some fan zones) are a separate gap; do not solve them here.
- Away games currently have no home-draw path.
- Owner (Kylie) is frugal and hates fake precision. She likes labeled estimates when grounded in past announced data. She specifically asked whether **prior attendance vs the same opposing team** should be in the model.

## What already exists (summarized)

- Past seasons’ **announced** home attendance collected for many teams (esp. LA first; other cities added with city builds).
- Calibrated medians → attached on read as “Median announced crowd for a Friday in April… An estimate.”
- Many upcoming sports rows still blank where calibrate coverage is missing or thin.
- Concerts: listed, no expected draw (separate later problem — see `docs/expected-draw-concerts-research-prompt.md`).
- Weather already feeds a **Conditions** part of the read — using weather again to invent crowd size may double-count unless justified.

## Self-audit (do this *before* answering the research question)

1. Search the literature / practice for **attendance demand predictors** in MLB, NBA, NHL, NFL, MLS, college sports (and note sport-specific quirks).
2. List every serious candidate signal. For each: direction of effect, strength of evidence, whether it needs live data that changes daily, and whether a free public source typically exists.
3. Produce an **Addenda**: what the starter list below missed; what you’d promote to v1 vs park; what you’d reject as bias/noise or as encouraging invented numbers.
4. Only then answer the research question, using the expanded list.

## Starter list (incomplete — your job to expand)

- Day of week / weekend / month / time of day
- Prior announced attendance vs **the same opposing team** (minimum N past home meetings)
- Home team quality / standings / recent form
- Visitor quality / standings / stars on the road
- Rivalry / derby / interleague
- Promotions and giveaways
- Weather (esp. rain for outdoor)
- Lagged recent home attendance
- Season-ticket / near-sellout teams (muted opponent effects)
- New stadium / novelty effects
- TV blackout / streaming substitutes (if relevant)
- Booking vs turnstile definitions (MLB/NFL “tickets distributed”)

## Research question

Design a **v1 estimated attendance rule** for **upcoming home sports games** in a multi-city personal app that already has past announced crowds and day/month medians.

Answer:

1. **What should v1 use?** Ordered predictors, with minimum sample rules (e.g. N≥3 vs same opponent).
2. **What should v1 explicitly not use yet**, and why (bias, leakage into friction, double-counting weather, data cost, daily churn)?
3. **How should same-opponent history combine with day/month medians?** Pick one clear rule (override vs blend) and defend it. Include failure modes (new expansion opponent, rare visitor, college buy games).
4. **Sport differences:** what must differ for baseball vs basketball/hockey vs football vs soccer vs college?
5. **Playoffs / rivalry / promotions:** keep out, special-case, or label differently?
6. **Away games:** estimate or leave blank for v1?
7. **Honesty / labeling:** exact wording principles so users never confuse estimate with announced.
8. **Evaluation:** how to check the rule without tuning constants to close gaps in someone else’s night ratings (held-out dates, MAE vs later announced attendance, per-league).
9. **Bias risks:** ways this rule could systematically overstate big brands, understate women’s/college/lower-draw leagues, or make quiet nights look busy.

## Output format

1. Addenda (from self-audit)
2. Recommended v1 rule (plain language + edge cases)
3. Parked list
4. Evaluation plan
5. Open questions only if a product owner must lock something

Do not write code. Do not assume Ticketmaster or paid APIs. Do not invent example attendance numbers unless you mark them clearly as illustrative.

## Success

A rule Kylie can hand to an implementer: fill upcoming sports blanks with **labeled** estimates grounded in past announced data, with same-opponent history included when it is strong enough, and with clear “we don’t estimate” cases.
