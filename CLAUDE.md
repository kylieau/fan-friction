# FanFriction (Fan/Friction)

A personal app that makes it visible how much competition (other 5k+ events the same night, traffic, weather, stakes) shapes attendance, to answer the claim that big-city fans are "fake." Seeded in LA. Formerly called "Crowd Clash" (older docs and wireframes may use that name).

## Who you're working with
Kylie is a lawyer, not an engineer. She is the product owner and has made the product decisions in `docs/`. Explain things in plain language, avoid jargon, and don't assume she reads code. When a technical choice would change what she sees or what it costs, explain it in a sentence and recommend one option. She likes to react to a concrete proposal (a table, a mockup) rather than invent numbers herself.

## Read these first
- `docs/build-brief.md`: what to build, decisions already made, open questions.
- `docs/product-decisions.md`: the product rules behind each screen.
- `docs/test-nights-and-ratings.md`: the 13 seeded nights, the rating recipe and the ratings to hardcode.
- `docs/kylie-logs.md` and `docs/researched-events.md`: real sample data for Your nights and event screens.
- `design/wireframes/`: the current mockups (HTML boards, example night Fri Oct 25, 2024). Match their layout and feel; the palette and fonts are in the brief.

## Working rules
- Don't rebuild what is already decided. If something in the docs is unclear or seems wrong, ask Kylie before changing it.
- Build in small steps and commit often, with plain-English commit messages. After each step, tell Kylie what she can now open and look at.
- Build room for later features from day one: every map item is a generic "crowd event," layers are separate, teams and metros are their own records, and a personal layer attaches to any event. Don't hardcode for baseball only or for LA only.
- Data comes through a plug-in layer so live sources (MLB first) can be added without reshaping the app. Start with the hand-seeded nights.
- Label every attendance number by kind: announced, reported, or estimated. Never show a bare score; always a label.
- Traffic is an estimate only. No live traffic data and no red "jam" color.
- Only facts known before an event can affect its rating. Results and what happened never do.
- One gold primary button per screen, with a plain verb. Light theme. No orange.
- Verify facts (attendance, dates, who played) against current sources before seeding them; earlier research had at least one wrong claim. If a web page can't be fetched normally, don't work around it. Ask Kylie to paste it.
- Keep M2/M3 topics (public launch, licensing, revenue) out of the conversation unless Kylie raises them.
