# Research brief: how full theater, arts, comedy, dance, classical and family-show rooms get, by room size

Drafted Oct 24, 2026 by Claude Code for build 7.1, item M35 ("research first, ship later"), from the draft in `docs/build-7-1/research-prompts/01-arts-theater-classical-fill-rates.md`. Kylie runs it in a research chat. Save the answer in full beside this file as `docs/research/topics/arts-fill-rates-answer.md` (a paste in the chat is not a saved source; a second model's answer takes a `-claude` or `-codex` suffix). Nothing is built from this file alone: the answer becomes a proposal, then Kylie's OK, then a build.

You are a careful researcher. You do **not** have the app's code; everything you need is below. Prefer "not found" over a guess. Every figure needs a link, a date, and a label: **announced** (the organisation itself published it), **reported** (a named outlet, trade body or Boxscore quoted it), or **estimated** (you derived it; show the arithmetic). Tables beat prose.

## Why this is needed
Fan/Friction is a personal log of live events. Each date in a city gets a "Verdict" from how many big crowds share it (only events of about **5,000 people or more** feed it). Sports games show an expected crowd (the median of past *announced* home crowds). Concerts show one too, by a ladder: an announced count or sellout, then the room's own published average per show, then a rule (a room built for shows reads at its full concert capacity; an arena or stadium at 57% of it). **Theater, musicals, comedy, dance, ballet, opera, classical concerts and family shows (listed as "specials") get no estimate**, so their rows show no crowd number.

This research is for **the crowd figure shown on those events**, not for changing which events count toward the Verdict: whether a special counts is decided today by its room's listed capacity, with a rule that keeps specials in rooms under about 6,000 below the floor unless a source says they sold out. **Don't recommend changing those eligibility rules.** A proposed display, still awaiting Kylie's approval, would show "Up to N" (the room's ceiling) where no honest estimate exists.

The goal is a small, honest table: **category × room-size band → a fill share, with what the range means and a confidence**, so an event could read "about 4,200 Estimated" where the evidence supports it, and fall back to the ceiling where it doesn't. Estimates must never be presented as counts. A blank cell is a useful answer.

## How the app works today (context, no code needed)
- Each room has capacity figures: a usual one, and optional ones for a named setup (concert, basketball, hockey and the like), each with the year it applies from. A theater usually has one figure; an arena has several. Some figures include lawn or standing room. Capacity is a **ceiling**, never a crowd.
- An event's shown crowd comes, in order, from a published count (announced or reported) → a sold-out flag → an estimate from history or a rule → no figure.
- The rooms that matter most are **3,000 seats and up** (large theaters and performing-arts halls, arenas set up for a family show or a stand-up tour, outdoor amphitheaters with a symphony series).
- The app covers **about 40 metros across the US, Canada and Mexico** (from Los Angeles, New York and Chicago to Montreal, Toronto, Vancouver, Edmonton, Ottawa–Gatineau and Mexico City). Rules must work for every one of them, not just Los Angeles. If a figure is national only, say so; if a city or country behaves differently (Canada, Mexico), say how.

## What to find
1. **Average attended or paid capacity (fill share) by category**, from published sources:
   - Broadway and touring Broadway (The Broadway League's season and touring reports; weekly grosses data, which publish capacity percentage per show).
   - Regional and nonprofit theater (TCG's Theatre Facts and similar).
   - Orchestras and classical series, including outdoor summer series (League of American Orchestras; orchestras' published annual reports).
   - Opera, ballet and dance (OPERA America, Dance/USA; companies' annual reports).
   - Comedy tours in theaters and arenas (Billboard Boxscore or Pollstar figures quoted in free coverage).
   - Family shows and touring spectacles (Disney on Ice, Cirque du Soleil, Blue Man Group, Sesame Street Live, monster-truck and similar arena tours), where a promoter or trade source publishes attendance or capacity sold.
   - For Canada and Mexico, the national equivalents where they exist (for example Canadian arts-council or trade reports); say plainly if none exist.
2. **The denominator, for every ratio.** Say exactly what each fill share is a share of: the seats offered for that performance, a named configuration (with its seat figure), or the room's published maximum. Give that figure, its source, the dates it applies to, and whether it is seated, standing or lawn. Never infer a reduced capacity from a generic "half-house" percentage; a configuration you can't identify makes the figure unusable, and saying so is fine.
3. **How fill changes with room size.** Use these bands, defined on the denominator above: under 1,000; 1,000–2,999; 3,000–5,999; 6,000–11,999; 12,000+. If a source doesn't break it out by size, say so; don't split it yourself.
4. **Configurations.** When an arena hosts a theater-style or half-house show (stage at one end, upper bowl curtained), what seat count is offered and what share of it is sold? Cite named examples with the offered figure where it's published.
5. **Day of week and run length** (opening vs mid-run; weekday vs weekend; matinee vs evening), only where a source reports it. Don't infer it.
6. **Where per-show figures are published**, so the app could use a real number instead of an average: weekly Broadway grosses (capacity %), Boxscore, venue or city annual reports, nonprofit annual reports or tax filings (990s), public-agency reports for publicly owned halls. For each, say whether it's free, how often it updates, and whether it covers touring houses outside New York.

## Rules for the answer
- Cite every number with the source's name, the year it covers, the date you read it, and a link. Prefer 2022–2026 data. Mark pre-2020 figures as older and say whether 2020–2021 distort a source.
- **Don't guess or interpolate.** If no source exists for a category or band, write "No published figure" and give the safest fallback (usually "Up to N", the room's ceiling).
- Keep **paid or attended** separate from **capacity on sale**; say which each figure is. Comps (free tickets) count only if the source includes them; say so.
- No paywalled pages, no resale-market prices, no ticket-demand scraping, and no "industry rule of thumb" without a citation.
- Exclude mainstream headliner concerts, sports and festivals (the app has rules for those); **do include** the orchestral and classical concerts asked for above. A mixed-event total (concerts plus comedy plus family shows) can be recorded as context, but must not become a category's fill share without a published breakdown.
- Don't propose new app features or changes to which events count toward the Verdict.

## Output
1. **The table the build would use:** category · room-size band · denominator (what the share is of, its figure, seated/standing/lawn) · recommended share (blank where the evidence can't support one) · low · high · what the range measures (spread across performances, disagreement between sources, rounding, or a statistical interval) · how it was calculated · number of performances or venues behind it · period covered · source or derived label · source(s) with links and dates · confidence (high / medium / low) with a reason · countries or cities it applies to.
2. **Half-house and configuration findings:** what share of an arena's listed capacity a theater-style or family show sells, with examples and links.
3. **Per-show sources:** name · what it publishes · free? · update cadence · coverage outside New York · link.
4. **Not found:** categories and bands with nothing published, and where you looked.
5. **Recommendation, one paragraph:** which categories and bands have evidence strong enough to show an estimate now (and at what share, of which denominator), and which should fall back to the room's ceiling. Note where the evidence is thin.
