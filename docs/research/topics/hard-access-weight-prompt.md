# Research prompt: how much harder is a hillside, few-roads venue to get in and out of, and does transit change that?

Copy everything below the line into a research model. Paste the answer back to Claude to fold in. Drafted Oct 6, 2026. The question behind it: Fan/Friction multiplies a venue's gridlock load by 1.25 when the site is hard to reach (a hill with few streets at the gate) in a driving city, and Claude proposed 1.1 in a transit city. Kylie wants to know whether those numbers have any support.

---

# Research brief: the access penalty for hard-to-reach venues

## What this is for
Fan/Friction is a personal log of live sports and concerts with a "friction" read on each night: how hard it was to be there, computed from public schedules (what else was on, how close in time and place, and how the crowds hit the same roads). One part of that read, **Gridlock**, compares the crowd load on a venue's area against a normal night there. Venues that sit on a hill or in a canyon with only a few streets reaching them (the Hollywood Bowl, the Greek Theatre, Dodger Stadium, the Rose Bowl in Los Angeles) get a **hard-access multiplier** on that load. The app currently uses **×1.25**, the same order as its weekday-rush-hour factor (×1.3) and its rain factor (×1.15). For cities where a large share of fans arrive by rail or bus, a lower multiplier of **×1.1** has been proposed. Both numbers are placeholders. I need to know what the evidence says.

## The questions
1. **Is there measured evidence that venue access geometry changes egress and ingress times?** For example: studies of stadium egress (clearance time for the lots and surrounding streets) as a function of the number of access roads, gate count, or terrain; traffic-engineering guidance (ITE, TRB, FHWA, UK and Australian equivalents) on event ingress/egress; before-and-after studies when a venue added an access road or a transit station.
2. **How big is the effect, roughly?** If a venue with one or two approach roads clears its crowd in X minutes and a comparable venue with many approach roads in Y minutes, what are typical X/Y ratios? Anything from 1.1 to 2.0 is plausible; I want the range the literature actually supports, with the studies named.
3. **Does transit mode share change the penalty?** For venues where 30–60% of the crowd arrives by rail (Fenway Park, Wrigley Field, Yankee Stadium, Barclays Center, Wembley, Tokyo Dome), how much does road-side egress time fall compared with a drive-everywhere venue of the same size? Is a multiplier scaled by car mode share a defensible way to express this, and what would the scaling look like?
4. **Specific venues, if data exists.** Published clearance or "time to empty the lots" figures for Dodger Stadium, the Hollywood Bowl, the Rose Bowl, SoFi Stadium, the Coliseum, Fenway, Wrigley, Lambeau, Arrowhead, the Big House, Beaver Stadium, or any venue with known access problems. Dodger Stadium's own traffic studies (the gondola proposal, the 2008 and 2013 stadium EIRs) and the Rose Bowl's event traffic plans are likely sources.
5. **What would you recommend?** A hard-access multiplier for driving cities, one for transit cities, and whether a two-level rule is too crude (for example, whether it should scale with car share, or with the ratio of seats to access lanes).

## Constraints
- Public, citable sources only. Name the study, agency or report for each number. Mark anything you are estimating.
- Where sources disagree or the evidence is thin, say so rather than averaging.
- The app works city by city worldwide, so prefer findings that generalize (ratios, mode-share relationships) over one-off local numbers.

## Output
A short table of findings (source, venue or setting, what was measured, the ratio or effect), then a recommendation in a few sentences with the two multipliers you would use and how confident you are in each. Tables beat prose.
