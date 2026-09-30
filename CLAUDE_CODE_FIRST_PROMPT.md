# First prompt for Claude Code

Paste everything below the line into Claude Code, with the repo open.

---

I'm starting a new app called FanFriction (Fan/Friction). Please read `CLAUDE.md` first, then everything in `docs/` and look at the mockups in `design/wireframes/`. I'm a lawyer, not an engineer, so explain things in plain language.

Before you write any code, reply with:
1. A plain-language summary of what we're building (a few sentences) so I can confirm you understood it.
2. The simple, mainstream tech setup you recommend, and why, in a few sentences. It should be a phone-sized web app that can be installed on a phone or wrapped as a native app later, deployable for free or very cheap, with a map. Pick the most common, well-supported tools.
3. A step-by-step build plan for the first slice (Map with the Event screen, Nights, You, and Traffic; Compare comes later as a "coming soon" tab), with what I'll be able to see and click after each step.
4. Any questions you have for me. Keep them to decisions that actually block step one.

Wait for my go-ahead on that plan. Then build in this order, committing after each step and telling me what to open and look at:
- Step 1: project setup, light theme and colors, the four-tab shell opening on Tonight, and the three-tip first-run guide.
- Step 2: the data layer with the 13 seeded test nights (hardcoded ratings from `docs/test-nights-and-ratings.md`), built so live sources can plug in later.
- Step 3: the Map in Crowds mode (heat map, Squeeze tags, the star, SOLD OUT tags, night score) and the Event screen, matching the mockups.
- Step 4: the Nights tab (shaded calendar, Famous nights).
- Step 5: the You tab (Plans and Your nights) using my logs in `docs/kylie-logs.md` as sample data, with team + sport filters and rough dates.
- Step 6: Traffic mode (estimates only).
- Step 7: plug in live MLB schedules and results so Tonight shows real October games. They show "Not rated yet" until the rating formula exists.
- Step 8: build the rating formula from the six-factor recipe and check that it reproduces the 13-night table.

Keep the name in one place so I can rename it later. Start with the plan.
