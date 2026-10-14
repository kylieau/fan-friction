## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/city-builds/new-york/new-york-arrival-shares-answer.md`**. Not a PDF, a Word file or a page that can only be saved as a PDF. Use Markdown headings, pipe tables and inline links. If you cannot create a file, reply in plain Markdown in the chat; if it is too long for one message, stop at a clean break, say "continued", and carry on.

# Research brief: how New York's fans get to events, venue by venue, and what one sentence can truthfully say

Status: open. Written Oct 14, 2026 (Kylie asked for a thorough prompt after a second research answer suggested New York is wrongly typed). For any research model.

## What this is for
Fan/Friction is a personal log of live events people attended (sports, concerts, anything else), with a 1–10 "read" for each date in a city, built from three reasons: crowd fight, **gridlock** (crowds hitting the same roads and exits at the same time) and conditions (weather). It covers 40 metros in the US, Canada and Mexico.

Gridlock needs, for each venue, the share of a crowd that arrives by car. When a venue has no figure of its own, the city's **type** fills in: sprawl or hub (85% by car), transit (40% by car). The type also sets how much of a big crowd's load spills onto venues within about 4 miles: 15% for sprawl and hub, 10% for transit. And from this build, each city shows one plain sentence describing how its fans get to events, chosen by the type:

- hub: "New York: most fans drive to events; some take transit."
- transit: "New York: most fans take transit or walk to events."

New York is typed **hub** today.

## What we already have (reconcile with these; don't start over)
1. **`docs/research/city-builds/new-york/new-york-city-type-answer.md` (Oct 6, 2026).** Verdict "in between": weighted by seats across the 13 biggest venues, about 60% of a big crowd arrives by car, with a 10%–97% spread, so it says to use per-venue figures, never the regional one. Three tiers: transit (MSG, Radio City, Javits, Barclays, Forest Hills, Randall's Island and Liberty State Park festivals), split (Yankee Stadium, Citi Field, the US Open, Prudential Center, Harrison, Coney Island, Columbia, St. John's, the Staten Island ballpark) and driving (MetLife, UBS Arena, Belmont, Nassau Coliseum, Hofstra, the County Center, Meadowlands Racetrack, Jones Beach, PNC). It also notes that event frequency tilts the picture toward transit (MSG averaged about 235 events a year before the pandemic; MetLife hosts a few dozen).
2. **`docs/research/topics/city-type-plain-words-answer.md` (Oct 14, 2026).** Flags New York as "contradicted, check first": MTA figures reported by WNYC put about 37% of Yankees fans on the subway and about 45% on any transit, and 25–30% of Mets fans on the subway (LIRR not counted), over a decade old. It concludes "most fans drive to events" is not a sentence to show New Yorkers, and offers two fixes: move New York to transit, or keep hub and rely on per-venue figures.

The two answers don't disagree on the venues; they weight them differently (by seats vs. by how New Yorkers experience events).

**What the app stores today:** all 33 New York rooms carry their own car share, so the type no longer changes any venue's own number; it changes only the spillover weight, the fallback for a future room with no figure, and the sentence. The stored figures, with their basis as recorded:

| Venue | Car share stored | Basis as recorded |
|---|---|---|
| Madison Square Garden (and its theater) | 20% | Estimated, range 15–30%; on Penn Station, no parking; no count since 2003 (52% transit or walk then) |
| Barclays Center | 25% | Reported, observed: Sam Schwartz TDM survey, 5,633 fans, 8 Nets games, 2013 |
| Radio City Music Hall | 15% | Estimated |
| Yankee Stadium | 50% | Reported: MTA ~45% transit (2011); NYC DOT intercept survey 61% by car (2012); split at 50% |
| Citi Field | 60% | Reported: MTA 25–30% by subway (2011), plus ~7% estimated LIRR; lots shrinking for the casino build |
| US Open grounds (Ashe, Armstrong, Grandstand) | 37% | Reported: USTA, more than 60% by mass transit |
| Prudential Center | 45% | Reported, old: 53% of Devils fans on mass transit, 2007–08 |
| Sports Illustrated Stadium (Harrison) | 50% | Estimated, from the nearest comparable (Prudential Center); Harrison PATH three blocks away |
| MetLife Stadium | 85% | Reported: ~87% for NFL (NJ Transit, 2010), ~75% concerts, ~60% with lots closed; one value by Kylie's call |
| UBS Arena | 90% | Official, LIRR observed: rail 8.8% of the gate at Islanders games, 5.3% other events (2022) |
| Nassau Coliseum, Jones Beach, PNC Bank Arts Center, Meadowlands Racetrack, Belmont Park | 75–97% | Driving tier, per the Oct 6 answer |
| Forest Hills Stadium, SummerStage, Icahn Stadium, Pacha | 10–25% | Transit tier, per the Oct 6 answer |
| The rest (college fields, minor-league parks, Westchester County Center, Ford Amphitheater, Maimonides Park, SIUH Community Park) | 40–90% | Per the Oct 6 venue table answer |

## What I need, in this order

### 1. Newer and better figures for the venues that matter most
For each of: Madison Square Garden, Barclays Center, Yankee Stadium, Citi Field, the US Open, Prudential Center, MetLife Stadium, UBS Arena, Radio City, Forest Hills Stadium.
- The most recent measured or reported arrival split you can find (survey, transit agency event ridership, team or league statement, environmental review, traffic study), with year, method, sample and link. Label each **measured**, **announced**, **reported** or **estimated**.
- Whether anything since the stored figure's year would change it, with a source: **congestion pricing in Manhattan (started January 2025)**, the Penn Station and Moynihan changes, the Metro-North Penn Access project, LIRR Grand Central Madison (2023), Citi Field parking lost to the casino build, the Yankee Stadium parking garages' finances and closures, NJ Transit service changes to MetLife and Newark, rideshare growth.
- Where a venue's split differs a lot by event type (NFL vs. concerts at MetLife; Islanders vs. concerts at UBS; Knicks/Rangers vs. concerts at MSG; weekday vs. weekend at Yankee and Citi), give each, with its source.
- Don't change a figure on reasoning alone; if nothing newer exists, say so and keep the stored one.

### 2. Which weighting describes "how New Yorkers get to events"
The city sentence is one line for the whole metro. Compute, from your best per-venue figures:
- **seat-weighted** (each venue weighted by capacity), as the Oct 6 answer did;
- **event-weighted** (each venue weighted by how many events of 5,000+ it holds in a typical year, with the event counts and their source);
- **attendance-weighted** (total annual attendance at each venue, with sources).
Show the three results and say which one a fan reading "most fans drive / take transit" would recognise as true, and why.

### 3. The type, and what changing it would do
- Should New York stay **hub** or become **transit**? Base it on section 2, not on reputation.
- The only number a type change moves today is the near-venue spillover (15% → 10%). Say whether that is right for New York's dense venue clusters (Penn District: MSG, Radio City, Javits; Queens: Citi Field and the US Open; the Meadowlands: MetLife and the racetrack; Long Island: UBS, Belmont, Nassau) or whether spillover there depends on the venue, not the city.
- If neither "most fans drive" nor "most fans take transit" is true metro-wide, propose a New York-specific sentence of at most 70 characters (other cities already have one-off sentences: Las Vegas reads "Las Vegas: many fans walk over from the Strip; most others drive."). Give two or three options, each with the evidence that makes it true.

### 4. The same problem elsewhere (the app must work for every city)
Which other metros are "several regions stacked together" so that one sentence misleads: name each (candidates: the Bay Area (San Francisco vs. Santa Clara), Washington DC, Chicago, Boston, Philadelphia, Los Angeles, Toronto, Mexico City), the venues that pull opposite ways, and whether event-weighting changes their sentence. Briefly; this is a pointer list, not a full study.

### 5. Output tables
- **Venues:** venue, stored car share, newest figure (year, label, source), by event type if it differs, recommended value, change? (yes / no / check).
- **Weightings:** method, result, inputs and their sources.
- **Recommendation:** type (hub / transit), spillover note, sentence options with evidence.

### Self-audit
List every claim on thin evidence, every figure from memory rather than a source, every number you computed yourself (with the arithmetic), and what Kylie should check by hand, with a link she can open for each.

## Rules
- Do not invent figures, URLs, surveys or event counts. If you can't verify something, leave it blank and say why.
- Label every figure as measured, announced, reported or estimated, with its year.
- Old figures are not wrong for being old; say what would have changed them and whether it did.
- Plain words; tables where a table is clearer.
- Save the answer beside this prompt as `new-york-arrival-shares-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix).
