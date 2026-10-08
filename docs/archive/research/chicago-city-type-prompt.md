# Research prompt: how Chicago fans get to the game

Copy everything below the line into a research model. Save the answer in full as `docs/archive/research/chicago-city-type-answer.md` and paste it to Claude. Drafted Oct 7, 2026, from the New York prompt, under Kylie's rule that a city's type is researched, not assumed. The app has three city types (driving, hub, transit); the type sets only two things: the default share of fans who drive when a venue has no figure of its own (0.85 driving and hub, 0.4 transit), and how much one crowd spills onto a neighbor's roads. A venue's own measured share overrides the default.

**The app has Chicago down as `transit`, set before any research.** The next-cities research expects **hub, possibly transit**: the city's commute share (20.5%) sits nearer Seattle's than New York's, though Wrigley and the lakefront probably run far more transit-heavy than the city average. This brief decides it. New York (measured at ~60% car, weighted by seats) is the benchmark for "hub".

**This answer may be used months after it is written.** Date every figure, and note anything scheduled to change (the Red Line extension, the Bears' move, Metra schedules) with dates.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/archive/research/chicago-city-type-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: arrival mode for Chicago's large venues

## What this is for
Fan/Friction rates how hard it is to get out of a venue after a game or show. The read scales with the share of the crowd that drives. I need, for each large venue in the Chicago region, the best public figure for **how people arrive**: car (drive, carpool, rideshare together), transit (the L, Metra, CTA and Pace buses, shuttles, water taxi), and walk or bike. Then a one-line verdict on the region as a whole.

## Venues (5,000 or more)
Wrigley Field, Rate Field, United Center, Soldier Field, Wintrust Arena, Allstate Arena (Rosemont), NOW Arena (Hoffman Estates), Credit Union 1 Amphitheatre (Tinley Park), Huntington Bank Pavilion at Northerly Island, Ravinia Festival, SeatGeek Stadium (Bridgeview), the new Ryan Field and Welsh-Ryan Arena (Evanston), Credit Union 1 Arena (UIC), Grant Park (Lollapalooza), McCormick Place, Hawthorne Race Course. Add any 5,000+ venue the venue-table research turns up.

## For each venue
| Field | What I need |
|---|---|
| Car share | Share of attendees arriving by private car, carpool or rideshare. One number, or a range with the midpoint you'd use. |
| Transit share | Share by the L, Metra, bus or shuttle, with the stations or routes that serve the building and the walk time |
| Walk, bike, other | The rest. Around Wrigley this is a real share. |
| Basis | Where the figure comes from: an environmental review, a transportation management plan, CTA or Metra event-day ridership, a team or venue report, a city or CMAP study, a survey. Say if it is a before-opening projection rather than an observed count. |
| Parking | On-site spaces, and whether most fans park in private lots or garages nearby. Wrigleyville's permit-parking zone and remote lots; the United Center's large lots; say so where true. |
| Event-day setup | Extra trains, Metra's post-game specials, closed streets, shuttles (Northerly Island's, Ravinia's Metra stop), transit included with the ticket |
| Label | Official, reported, or estimated. Never a bare number. |
| Link | One per figure |

## The region
One line each: is Chicago, for a night out at these venues, a **driving region** (most crowds 80%+ by car, like Los Angeles), a **transit region** (most big crowds under half by car, like New York's Manhattan buildings), or **in between** (like Seattle and New York's region-wide figure), and why.

Then **say where the answer breaks by venue**. My expectation, to confirm or correct: Wrigley is majority transit and walking (Addison on the Red Line, with permit parking keeping cars out); Rate Field is mixed (Sox–35th and Metra against big lots); the United Center is majority car despite the Pink and Blue lines; Soldier Field is mixed (lots plus Metra, CTA and the 18th Street station); Rosemont, Hoffman Estates, Tinley Park and Bridgeview are near-total car; Ravinia has its own Metra stop and a real train share; Northerly Island depends on shuttles and walking. Give a number per venue.

## Known leads (verify, don't trust)
- **CTA publishes ridership by station by day** (the data portal). Addison (Red) on Cubs dates, Sox–35th (Red) and 35th–Bronzeville–IIT (Green) on Sox dates, Illinois Medical District (Blue) and Damen (Pink) on United Center nights, Roosevelt and 18th on Soldier Field dates, against announced crowds: close to an observed share.
- **Metra's event service** (Ravinia's stop on the UP-N line, the BNSF and Rock Island specials for Soldier Field, the Rock Island to the Sox) has published ridership.
- **Wrigley Field's 1060 Project traffic studies** and the Lakeview neighborhood's remote-parking program; the Cubs' night-game ordinance filings carry mode figures.
- **The United Center's** 1994 and later traffic plans; the Bulls' and Blackhawks' parking data.
- **Soldier Field's** 2003 renovation EIS and the Chicago Park District's event traffic plans; the Bears' Arlington Heights and lakefront proposals carry projected mode splits for a new stadium.
- **Lollapalooza's** transportation plan and CTA's reported festival ridership every year.
- **The new Ryan Field's** 2023–2024 approval process (Evanston) carries a transportation management plan with a mode-split projection and a concert cap.

## Rules
- Prefer observed counts over projections, and official plans over news or blogs. Where two sources disagree, give both and say which you'd use.
- Say which venues you could not find a figure for rather than guessing. For those, give the nearest comparable and say so.
- Tables beat prose. Links for every figure.
