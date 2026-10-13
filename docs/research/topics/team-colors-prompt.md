## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/topics/team-colors-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: team colors for the Faves tab

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. It covers 26 metros: Atlanta, Austin, Bay Area, Boston, Chicago, Columbus, Dallas–Fort Worth, Houston, Kansas City, Las Vegas, Los Angeles, Mexico City, Milwaukee, Minneapolis–St. Paul, Montreal, Nashville, New Orleans, New York, Philadelphia, Phoenix, Sacramento, San Diego, Seattle, Tampa Bay (built as "Tampa", code TPA), Toronto, Vancouver.

The Faves tab lists the user's favorite teams, and we want each card to show the team's colors (a swatch or accent). That needs reliable color values for every team the app covers in these metros: MLB, NFL, NBA, WNBA, NHL, MLS and NWSL, plus any other league whose teams appear in these cities (check minor leagues, USL, the UFL and the PWHL).

## What I need, in this order

### 1. Colors per team
For each team, give the primary and secondary hex codes and the official color names where published. Cite the source: team or league brand guides and official sites first. Mark values from fan or aggregator sites as unofficial.

### 2. Flags
Flag recent rebrands, and teams in the same city whose primary colors are nearly the same (hard to tell apart on a card).

### 3. Contrast
For dark or very light primaries, suggest which color to use as a small accent on a white card and which on a dark card.

### 4. Brand limits
Note any trademark or brand-use limits on showing team colors in a third-party app.

### 5. Output
Provide a CSV block with these columns: league, team, city, primary_hex, secondary_hex, official_names, source_url, official (y/n), notes. Follow it with a short list of flagged teams.

### Self-audit
List every claim that rests on thin evidence, anything you guessed, and what I should check by hand: the source link for each, and an example I can open in a browser.

## What I don't need
Do not invent figures, URLs or usage. If you can't verify something, say so and leave it blank with a note. Mark every figure as measured, announced or estimated.