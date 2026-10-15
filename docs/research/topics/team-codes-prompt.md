## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/topics/team-codes-answer.md`**. Not a PDF, a Word file or a page that can only be saved as a PDF. Use Markdown headings, pipe tables and inline links. If you cannot create a file, reply in plain Markdown in the chat; if it is too long for one message, stop at a clean break, say "continued", and carry on.

# Research brief: the right short code for every team

Status: open. Written Oct 15, 2026. For any research model that can browse.

## What this is for
Fan/Friction is a personal log of live events (sports and concerts) across 40 metros in the US, Canada and Mexico. Every team carries a short code on a badge, like a TV scorebug: "LAD", "LAC". The rule (Kylie, Oct 15, 2026): **the code is the one fans already know, from TV scorebugs, league and team sites, ESPN and other score sites, and everyday shorthand.** Two teams in one city may share a code (the Clippers and the Chargers are both LAC); the sport icon and colors tell them apart, so a shared code is fine and you should not invent a different one to avoid it.

The app's current list is attached beside this prompt: **`team-codes-current.md`** (578 teams, 83 leagues: NFL, MLB, NBA, NHL, MLS, WNBA, NWSL, PWHL, CFL, NLL, the minor leagues, college programs, U Sports). Many codes were set quickly during city builds and have never been checked.

## What I need

### 1. The rule, by league
For each league in the list, where does the standard code come from, and how consistent is it across sources? For example: does the NFL's own site, ESPN, FOX and CBS all show "LAR"? Does MLB use "CWS" while some sites use "CHW"? For college, is there a single standard (ESPN's, the school's athletics site, the conference's), and how do broadcasts shorten "UCLA", "USC", "Ole Miss"? For minor leagues and college women's and men's programs, say what fans actually see. Give one recommended source order per league, with links.

### 2. A verdict on every row
For each of the 578 rows in `team-codes-current.md`, a table:

| App id | Team | League | App code | Recommended code | Sources (scorebug / league site / ESPN or score site / shorthand) | Confidence | Note |
|---|---|---|---|---|---|---|---|

- **Keep** rows that are right: you may group them ("all 30 NHL codes match NHL.com and ESPN; keep") instead of listing each, but list every row you would change.
- **Change** rows that are wrong or outdated (a renamed or relocated team, a code fans don't use). Show what each source shows.
- **Fill** the 5 rows with no code.
- Where sources disagree, say which one fans see most (TV scorebug first, then the league or team's own site, then ESPN and score apps) and recommend that one.
- Note codes longer than 4 characters (the badge fits about 4).

### 3. Edge cases
- Teams that share a nickname across leagues or cities (Giants, Kings, Rangers, Cardinals, Panthers, Jets, Clippers, Stars): confirm each one's own code.
- College programs: one code for the school across sports, or does it vary by sport?
- Teams in Canada and Mexico: any French or Spanish codes broadcasters use (Montréal "MTL", Liga MX clubs)?
- Recent moves and renames (Utah's NHL team, the A's in Sacramento, any 2025–2026 changes): the current code.

### Self-audit
List every claim on thin evidence, anything from memory, and the rows Kylie should check by hand, with a link she can open for each.

## Rules
- Do not invent codes or sources. If you can't verify one, leave it blank and say why.
- Prefer what fans see over what a database uses internally (an API's team id is not a code).
- Plain words; tables where a table is clearer.
- Save the answer beside this prompt as `team-codes-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix).
