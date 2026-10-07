# Research prompt: every Atlanta venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Save the answer in full as `docs/atlanta-venue-table-answer.md` and paste it to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 7, 2026, from the New York prompt; Atlanta is next on `docs/new-city-checklist.md` by Kylie's Oct 7 order (Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal). Scope, as before: 5,000+ only.

Boundary: Claude's reading of the next-cities research (`docs/next-cities-research-answer.md`): the 11-county core, Athens out. Kylie has not set it by hand; say so if a building just outside belongs in.

**This answer may be used months after it is written.** Date every figure ("as of Oct 2026"), and list anything scheduled to open, close, rename or change capacity through 2028, with dates.

---

## How to deliver this (read first)
**Reply in plain Markdown text in the chat itself.** Do not create an artifact, canvas, document, file or PDF: the answer is copied straight out of the chat into a `.md` file, and anything else can only be saved as a PDF. Use Markdown headings, pipe tables (`| a | b |`) and inline links. If the answer is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: Atlanta venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for Atlanta: complete, with capacity **by setup** (an arena holds a different number for basketball or a concert; a stadium a different number for football and soccer), and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**The City of Atlanta and the 11-county core**: Fulton, DeKalb, Cobb, Gwinnett, Clayton, Cherokee, Douglas, Fayette, Henry, Rockdale and Forsyth. That puts Truist Park (Cobb), Gas South Arena (Gwinnett), Gateway Center (College Park, Fulton) and Ameris Bank Amphitheatre (Alpharetta) inside. Leave out Athens (Sanford Stadium is 70 miles east; its traffic never reaches the city), Macon, Columbus and Chattanooga. Say so if you'd move the line.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup** and hosts public ticketed or free events. Categories, with examples to start from — **the examples are not the list, so enumerate the boundary and add what they miss**:

- **Stadiums and ballparks:** Mercedes-Benz Stadium (Falcons and Atlanta United; the soccer curtain is a separate figure, and so is the expanded figure for the SEC Championship, the Peach Bowl and the 2026 World Cup), Truist Park (SunTrust Park until 2020; one row), Bobby Dodd Stadium at Hyundai Field (Georgia Tech; give the rename dates and the post-renovation figure), Center Parc Stadium (Georgia State; Turner Field until 2017, so give that history in the row), Fifth Third Stadium (Kennesaw State), Coolray Field (Gwinnett Stripers), Atlanta Motor Speedway in Hampton (Henry County: inside the line, so include it, with its reduced grandstand figure and its race dates).
- **Arenas:** State Farm Arena (Philips Arena until 2018; the 2018 renovation changed the figure, so give before and after, and the concert figure separately), Gas South Arena (Infinite Energy Arena until 2021), Gateway Center Arena at College Park (the Dream's regular home; around the bar, so say which side, and say which Dream games move to State Farm Arena), McCamish Pavilion (Georgia Tech), GSU Convocation Center (Georgia State; opened 2022), KSU Convocation Center.
- **Amphitheaters and outdoor concert venues:** Lakewood Amphitheatre (Cellairis Amphitheatre; give every sponsor name since 2016 with dates), Ameris Bank Amphitheatre (Alpharetta; Verizon Wireless Amphitheatre until 2019), Chastain Park Amphitheater (Cadence Bank Amphitheatre; around the bar, say which side), Coca-Cola Roxy (under; say so), Centennial Olympic Park (Shaky Knees's old site; what it hosts now).
- **Theaters of 5,000+:** the Fox Theatre is about 4,665, so it goes in the near-the-line section with its figure. Say if anything else is close.
- **Convention centers:** the Georgia World Congress Center. It is not a seated venue, but Dragon Con (across the downtown hotels and the AmericasMart), the auto show and the SEC fan events put big crowds downtown. **Give per-day attendance for its biggest events and say whether you would treat it as a venue for a crowd read.**
- **Festival grounds:** Piedmont Park (Music Midtown's old site, and what runs there now), Central Park (Shaky Knees), Centennial Olympic Park.
- **College venues of 5,000+:** Georgia Tech, Georgia State, Kennesaw State, Emory (likely under; say so), Morehouse and Clark Atlanta (B.T. Harvey Stadium and Panther Stadium; say which side of the line).

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished or closed before 2016 except as history inside a current row (the Georgia Dome and Turner Field as a ballpark are history, not rows).

**Not venues, but tell us the dates:** the Peachtree Road Race (July 4), the Atlanta Marathon, Pride, Dragon Con's parade, and the recurring neutral-site dates at Mercedes-Benz Stadium (SEC Championship, Peach Bowl, the Kickoff games, the College Football Playoff when it lands there). List them separately with dates and crowd estimates.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date it changed |
| City or neighborhood | Neighborhood, or town and county |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered, retractable (Mercedes-Benz Stadium's matters for the weather rule), or indoor |
| Site access | Whether it is a single-road or otherwise constrained site. Lakewood and Ameris Bank are the ones to think hardest about; Truist Park's Battery is one more. A yes/no and one sentence. |
| Home teams or regular tenants | Including shared tenancies (Falcons and Atlanta United; Hawks and whichever Dream games) |
| As of | The date the figure was true, and anything scheduled to change it through 2028 |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. |

## Rules
- **Label every number.** Official, reported, or estimated. Never a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: Mercedes-Benz Stadium 71,000 vs 75,000 vs the 42,500 soccer curtain; State Farm Arena 18,118 before 2018 vs 16,600 after, and ~21,000 for concerts; Truist Park 41,084 vs 41,149; Bobby Dodd 55,000 vs 51,913; Lakewood 19,000 vs 18,920; Center Parc 25,000 vs the Turner Field 49,586 history.
- Note **standing-room or festival** figures separately from seated ones.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Nothing. Atlanta is not in the app today.

## Output
In Markdown, in the chat (no artifact): one table, one row per venue, sorted by capacity, largest first, with the columns above. Then:
1. Near-the-line venues you left out and why (4,000–5,000 rooms).
2. Anything you could not confirm.
3. The big crowd dates with no building, and the neutral-site dates at Mercedes-Benz Stadium.
4. Your answer on the Georgia World Congress Center.
5. Everything scheduled to open, close, rename or change through 2028.

Tables beat prose. Links for every capacity.
