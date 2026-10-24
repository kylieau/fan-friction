# Research brief: where each college program's game attendance is published, per school and per sport

Drafted Oct 24, 2026 by Claude Code for build 7.1, item M35 ("research first, ship later"), from the draft in `docs/build-7-1/research-prompts/02-ncaa-per-school-attendance-sources.md`. Kylie runs it in a research chat. Save the answer in full beside this file as `docs/research/topics/ncaa-attendance-sources-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix). Nothing is built from this file alone: the answer becomes a proposal, then Kylie's OK, then a build.

You are a careful researcher. You do **not** have the app's code; everything you need is below. Prefer "not found" over a guess. Every figure and source needs a link, a date, and a label: **announced** (the school or league published it), **reported** (a named outlet quoted it), or **estimated** (you derived it; show the arithmetic). Tables beat prose.

## Why this is needed
Fan/Friction is a personal log of live events. Each date in a city gets a "Verdict" from how many big crowds share it; an event counts toward friction only at about **5,000 expected people or more**. Pro and major-college games already get an expected crowd from the median of their past **announced** home crowds, collected from free league feeds (MLB box scores, ESPN's past-season schedules) and kept per team, per season.

Many college games come instead from each **school's own athletics calendar** (the iCal feed most athletics sites publish). Those rows carry the sport, the gender, the division and the opponent, but **no attendance and no expected crowd**, so they show no crowd number. (Some already affect the Verdict through their room's capacity: football, basketball, hockey and baseball at rooms of about 6,000 and up; other school sports stay below the floor without a count. Those rules stay as they are.) The app needs to know, school by school and sport by sport, **where past announced attendance is published for free, game by game**, so a nightly script can compute the same "median of past announced home crowds" for those programs, labeled Estimated. A program with no published history gets no history-based estimate.

## Context (no code needed)
- A program is a school plus a sport and gender (UCLA Men's Basketball, Cal State Fullerton Women's Volleyball). The app's medians are built per home program and per actual venue, from one row per completed game (date, start, opponent, venue, home/away/neutral, attendance, regular season vs preseason or postseason), then split by day class and game class. **So the data must be game by game.** Season totals and averages are context only: they can't supply a median and must never be expanded into invented games.
- Attendance must be the game's **announced** figure (the box score's "Attendance" line). Capacity, "sellout" adjectives and ticket-demand estimates don't count. A missing attendance figure is not zero; keep the two apart.
- The app covers these metros: Los Angeles, San Diego, Seattle, New York City, Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Detroit, Montreal, Milwaukee, Boston, Philadelphia, Pittsburgh, Tampa, Miami, Columbus, Cleveland, Nashville, Austin, Phoenix, Vancouver, Sacramento, Mexico City, Las Vegas, Kansas City, Houston, Indianapolis, Toronto, Minneapolis, New Orleans, Salt Lake City, Ottawa–Gatineau, Edmonton, Washington DC, San Antonio, Portland, Raleigh–Durham, St. Louis and Denver. College sport there is NCAA Divisions I, II and III, NAIA and junior colleges in the US, U Sports in Canada, and in Mexico university leagues such as ONEFA (the app already lists ONEFA football programs including Águilas Blancas and Burros Blancos). Don't assume a US platform finding holds in Canada or Mexico; record unsupported countries or metros as gaps.
- Prioritize programs likely to draw 5,000+ (in practice football, men's and women's basketball, men's ice hockey, and some baseball, softball, volleyball and soccer programs at larger schools), but keep the sources and figures you find for smaller crowds too: an honest estimate under 5,000 can still be shown. Report threshold relevance per program and venue; don't recommend dropping a whole sport because most of its games draw under 5,000.

## What to find
1. **Per-game announced attendance on athletics sites.** Most schools' sites run on a small number of platforms (Sidearm Sports is the most common; also PrestoSports, WMT Digital, and school-built sites). For each platform:
   - Is per-game attendance shown on the box score or the schedule page? Name the field and give two or three example links from different schools and sports.
   - Is there a machine-readable route (a JSON or XML schedule or stats endpoint, a stats export, a StatCrew/XML box score file) that includes attendance? Say whether it's documented, whether it needs a key, and whether its terms allow a free nightly read. Don't test it at scale; one or two example URLs per platform is enough.
   - How far back does it go (seasons)?
2. **League and NCAA sources.** NCAA statistics pages (stats.ncaa.org and the NCAA's annual attendance reports for football, basketball and hockey), conference sites' box scores, and ESPN's college box scores: what each publishes per game or per season, for which divisions and sports, and how far back.
3. **Canada (U Sports), Mexico (ONEFA and other university leagues) and other levels (NAIA, junior college):** whether per-game attendance is published at all, and where.
4. **Coverage gaps:** sports, divisions or school types where announced attendance is commonly left blank or rounded, and any known reporting quirks (tickets distributed vs turnstile; doubleheaders counted once; neutral-site games).
5. **A worked example per sport family**, one school each in two different covered metros (for example a Los Angeles school and a Boston, Chicago, Dallas or Toronto school): the last two seasons' completed games, one row each, so the build can check a reader against known figures.

## Rules for the answer
- Cite every source with its name, the season it covers, the date you read it, and a link. Prefer seasons 2022–23 to 2025–26.
- **Don't guess or interpolate.** If a school, platform or sport publishes nothing, write "Not published" and where you looked.
- Keep **announced per-game attendance** separate from season totals and averages; say which each source gives.
- No paywalled pages, no scraping that a site's terms forbid, no capacity-based estimates, and no "typical attendance" without a citation.
- Don't return pro or minor-league figures (the app already has those), and don't propose new app features.

## Output
1. **Coverage table, keyed by metro, school, sport and gender:** platform · exact source route · seasons available · per game or aggregate · one verified attendance example with link · access and terms status · confidence (high / medium / low) with a reason · unverified gaps. Mark anything extrapolated from the platform rather than checked at that school as **inference**.
2. **Platforms table:** platform · attendance on box score (yes/no, field name) · machine-readable route (URL pattern, documented?, key?) · terms for a free nightly read · seasons back · example links.
3. **League and national sources table:** source · per game or per season · divisions · sports · seasons back · free? · link.
4. **Sport-by-sport reach:** sport · gender · division · typical announced range at large programs (with sources) · which programs and venues can reach 5,000.
5. **Worked examples, one row per completed game:** school · sport · gender · season · local date · start (if published) · opponent · actual venue · home / away / neutral · attendance (blank if not published, never 0 for missing) · what the figure means (tickets distributed, turnstile, unstated) · preseason / regular / postseason · source game id · source link.
6. **Not published and quirks:** what's missing, where you looked, and reporting quirks to handle.
7. **Recommendation, one paragraph:** the most reliable free route per platform for a nightly read, and anything that would make a median misleading (neutral-site games, playoff games, a season played in a temporary room).
