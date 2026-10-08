# The "Seats" line beside an estimate: three second opinions (Oct 8, 2026)

Kylie kicked the question in `docs/expected-draw-decisions-oct7.md` ("Standing room and the Seats line") to three other models and pasted their answers on Oct 8, 2026. Saved verbatim. The mockups that came with the GrokBot answer are `seats-options-mock.png` and `seats-info-card-mock.png` beside this file.

## Codex (GPT-6.1 Sol Medium)

> **I favor option 2 for the main page, with one qualification: capacity is useful context, but it doesn't need equal prominence with the crowd estimate.** Keep it available in the ⓘ card or venue details.
>
> "~93,000 People" beside "80,000 Seats" asks users to resolve an apparent contradiction. Both figures can be correct, but the page makes them look directly comparable. Adding standing-room wording repairs that comparison at the cost of making every affected page explain the building. I don't think that earns its space.
>
> The builder's reservation is reasonable: 24,000 people in a ballpark and 24,000 in an arena describe different experiences. But **useful context is not automatically a headline statistic.** The venue's name already supplies some context, especially for familiar fans. Capacity can support people who want more detail.
>
> "How full" does belong to the memory of a night. I would be cautious about computing it from these estimates, though:
>
> - Announced attendance does not establish how occupied the room looked or felt.
> - Concert fullness depends on that show's configuration.
> - A building used as the fallback estimate would automatically appear "full," despite having no evidence of demand.
>
> So I wouldn't replace Seats with "packed," a percentage, or a fullness bar today. Those would turn uncertain inputs into a stronger claim. If reliable event-specific capacity becomes available, **"~24,000 · about half full"** is a compact form worth considering. It would still need to remain clearly an estimate before the event.
>
> I would also separate two decisions currently bundled into option 2: **hiding capacity and capping estimates.** A published maximum for an expanded configuration isn't necessarily the limit for an ordinary game. Store standing-room facts, but use a cap only when it applies to the event's configuration. An unexplained excess should prompt a data check rather than silently flattening the estimate.
>
> On precedents, I found **no direct support for expected attendance beside total capacity** in the named apps' official material:
>
> - Letterboxd emphasizes the dated viewing, rating and review—the personal record. [Letterboxd introduction](https://embed.letterboxd.com/welcome/)
> - Strava's Relative Effort is a useful analogy for providing interpreted context rather than asking users to interpret raw figures themselves. [Strava Relative Effort](https://support.strava.com/en-us/articles/15401794-relative-effort)
> - Flighty surfaces aircraft details when they help explain the flight and potential delays. That supports keeping building information accessible, but doesn't establish a capacity-versus-crowd pattern. [Flighty aircraft tracking](https://flighty.com/help/where-is-my-plane)
> - Ticketmaster shows seat availability to help someone choose a ticket. That serves a different task from remembering or forecasting the crowd. [Ticketmaster seat maps](https://help.ticketmaster.com/hc/en-us/articles/9663268097681-Where-can-I-find-my-event-s-seat-map)
>
> My recommendation is **one prominent crowd estimate, the existing range, and capacity available on demand.** When no estimate exists, show capacity explicitly as capacity; it should not occupy the crowd slot without a label distinguishing it.

## Claude (Opus 5.5 High)

> **Short version:** drop Seats as a second figure (the owner is right), but keep fullness as a single word attached to the estimate, computed only where the estimate comes from real attendance data. Fullness is worth carrying. A second number is the wrong vehicle for it, and for about half your estimate types it would be circular.
>
> **Is Seats worth keeping beside an estimate?**
>
> No, not as a side-by-side figure. Two numbers next to each other invite the reader to divide one by the other, so the layout itself asks a question ("how full?") and then answers it badly. At AT&T it gives 117%, which reads as a bug. Adding the standing-room figure fixes the arithmetic but makes the user do it, which goes against "say less." Option 2's data handling is right: store standing capacity on the venue, use it to cap estimates, and never show it. Where no figure is published (Levi's), use the highest announced crowd on file as the working capacity when it exceeds listed seats. That's honest, because the building has demonstrably held that many.
>
> Seats as a fallback when there's no estimate is fine, but it's a different kind of fact ("the building holds 68,500," not "expect 68,500"). It should look different, not occupy the estimate's slot.
>
> **Should a log of nights carry "how full"?**
>
> Yes, but be clear about what it's for. For the friction read (how crowded the city is), the absolute number is what matters: 24,000 people leaving a half-empty ballpark load the streets and trains the same as 24,000 leaving a sold-out arena. Fullness matters for the night itself: atmosphere, concourse lines, whether you could move seats. That fits a personal log of nights, which is the builder's point, and it's a real one.
>
> The vehicle should be a word or a bar, not a number. For example: "~24,000 · half full," "~93,000 · sellout." Use coarse buckets, something like light / half / most / full, with "full" absorbing anything at or over working capacity. That removes the >100% problem entirely, because the word saturates where a ratio wouldn't. It's one line, no fine print, and capable users read it instantly. A thin fill bar under the number works too and is even quieter, as long as it caps at full.
>
> The more important caveat is that fullness is only meaningful where the estimate comes from attendance data. Look at your fallbacks:
>
> - **Concert at an arena:** 57% of the concert setup, so it would always read "half full."
> - **Theater-type venue:** the full room, so always "full."
> - **Playoff, building fallback:** presumably also full.
>
> In all three, the fullness label would just restate the method's assumption as if it were an observation, which is worse than saying nothing. I'd show the fullness word only for estimates built from the team's own announced attendance, and for playoff estimates built from the team's or league's past occupancy. Omit it elsewhere. The silence is then informative in its own right, since "no word" means "we don't really know how this one draws."
>
> One more point: fullness is most useful where draws vary (MLB weeknights, NBA, mid-tier tours) and nearly constant for most NFL teams. That's fine. "Full" every Cowboys game is accurate, short, and costs nothing.
>
> **Precedent**
>
> I'm confident about only a few, and they point the same way.
>
> Google Maps' "Popular times" is the closest analogue. It shows how busy a place is as bars and short phrases relative to that place's own normal, never as a count over a capacity. Transit apps that report crowding (Google Maps among them) also use a few verbal levels rather than load figures. Ticketing apps don't show capacity at all. They signal scarcity with phrases like "limited availability," which is fullness expressed as a word.
>
> Letterboxd and Strava have no real equivalent, since neither has a container to be full. Their lesson is more general: the headline figure stands alone, and the comparison lives in a separate view. I can't confirm how Flighty handles seat load, so I wouldn't cite it.
>
> The common pattern among products that answer "how busy" is a level, not a fraction. Nothing I know of mainstream shows count and capacity as peers.
>
> **Recommendation:** option 2 for the numbers, plus a capped fullness word on attendance-backed estimates only. Keep building capacity off the event page and out of the ⓘ card. The card is one generic explanation, so putting per-venue figures there would break its design. A venue page, if one exists, is the natural home.

## GrokBot (with mockups)

> **The problem.** The event page shows the estimate ("~93,000 People (Estimated)") next to the building's listed seats ("80,000 Seats"), with "Middle half 91,000–94,000" below. For a few NFL teams the estimate is higher than Seats because of standing room. The Cowboys draw a median of 93,448 against 80,000 listed, and the 49ers 71,607 against 68,500. The Giants (max 83,367 vs 82,500) and Falcons (max 72,665 vs 71,000) sometimes go over too. The estimate is right; the second number makes it look wrong.
>
> **Where Mock Mosaic and I agree:**
> - No Seats on the page once there's an estimate. Seats shows only when there isn't one, as "80,000 seats" with "No estimate yet" underneath.
> - Capacity including standing room is stored on the venue, used only to cap estimates, and never shown.
> - How full the building is still matters, since 24k in a 56k ballpark is a different night from 24k in an 18k arena. It just shouldn't be shown as a second number.
>
> **Ways to show fullness (all mocked):**
> - **A: bar only.** A thin gold bar under the number that fills with estimate ÷ seats, so over 100% just looks full. This was my idea. Mosaic's pushback is that a bar can't tell 70% from 90% and gives a screen reader nothing.
> - **B: word only.** One word after the number: Plenty of room (under 40%), About half full (40–70%), Mostly full (70–95%), Packed (95%+, including over capacity). It avoids "Sold out" because that's a ticket status.
> - **C: word plus bar.** B's word with A's bar. Both of us think this is the best at a glance.
>
> **The range.** Move "Middle half" off the page and into the ⓘ card, worded "Half of games land between 91,000 and 94,000." Mosaic prefers "Half" over "Most" because "Most" overstates a middle-half range.
>
> **Precedent.** Google Maps' Popular times pairs a bar with a word ("Usually a little busy"). Transit apps say "Standing room only" instead of a percentage. Ticketing apps say "Few left" instead of a count.
>
> **Not decided yet:** A, B, or C, and the word cutoffs. The mockups are saved with the gap review files, so you can take them to Claude with the rest.
