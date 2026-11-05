# Event Types Taxonomy: Read-Only Research Before Lock

The research prompt for build 7.2, §1 (Event Types), built from `builder-research-prompt.md` (the optional draft) with the Section C locks folded in. Shown to Kylie before running (her instruction in the notes, §1 step 1). Run by Codex read-only from Claude Code; the answer is saved beside this file as `event-types-research-answer.md` by the session, never by the researcher. Everything you need is in this prompt. The earlier research file `taxonomy-research.md` (9 top types, counts, Open Questions) is a starting point to check, not truth: Kylie, Nov 4: "re-run counts with the app's own eventType() as the prompt says".

## Hard Rules (Read First)

1. **Read-only.** Do not edit, create, or delete any file inside the repo. Do not commit, stash, branch, push, or open a PR. Do not run migrations, installers that change `package.json` or the lockfile, or anything that writes into the working tree.
2. **No Supabase.** Do not connect to, query, or write to Supabase (live, staging, or local). Use only the local repo files and the nightly schedule archive under `data/schedule-archive/<city>/`.
3. **Never read `private/`.** Do not open, list, grep, or summarize anything under `private/`. If a search tool would touch it, exclude it explicitly.
4. **Scratch work goes outside the repo.** Put scripts and raw output in a scratch folder outside the repo (the session's scratchpad folder, which the person running you names). Copy the repo's files there if you need to run them. If Codex helps, give it these same four rules word for word.
5. **Cite sources.** Every number needs the file and command or script that produced it. Every outside claim needs a URL you actually opened. If you could not open a page, say "unverified" instead of guessing.
6. **No network spend.** Public documentation pages are fine. No paid APIs, no sign-ups, no new feeds turned on. Name any source that would need approval or money, and stop there.
7. **Copy rules apply to what you write and to every label you propose:** Title Case on headings and labels, no em dashes anywhere (use a comma, colon, or period), Oxford comma, plain words.

## Background (What Kylie Wants)

Kylie wants a new standing setting in Settings called **Event Types**, a sibling of **Crowd Size**. It hides chosen event types from **Explore, the map, day lineups, and Local Competition**.

Locked rules (Kylie, Oct 30, 2026, build 7.2 notes Section C; do not reopen):

- Her own plans, stubs, and entries **always show**, even when their type is off. Friends' activity (a friend attending or who attended) **always shows**. Events of a **favorite team, artist, or venue always show** too (C2).
- **Verdicts, map day totals, and chip counts still include hidden events**, so every number on a day agrees (C11b).
- One setting covers Explore, the map, day lineups, Local Competition, Further Out, and search; no separate switches (C12, C13). Local Competition hides the bars of hidden events too (C11a).
- The day page shows a quiet line: "N events hidden by Event Types · Show"; when Crowd Size also hides events, one combined line, "N events hidden by your settings · Show", a row hidden by both counting once (C9). (A label on revealed rows is not locked; the earlier research proposed one.)
- The setting stores only the **hidden** keys; every type, level, and genre starts on, so new types appear switched on without a migration (C8).
- Sports levels: one switch per level applies to every sport (a game shows only when its level and its sport are both on); Minor League is its own switch, separate from Pro; High School stays hidden until a data source exists (C5).
- A type with no events is hidden, not shown greyed, until events exist (C6).
- Genre Unknown is a genre switch like the others and can be turned off (C7).
- No new feeds now; Event Types ships on today's data (C10).

Kylie's answers on the taxonomy (these are what this research serves):

- She **tentatively accepts the nine top-level types** below, as a working list.
- She wants **your own research (or Codex's) before the taxonomy is finalized**.
- She **defers "where festivals live" and any further splits** to your research.

## The Proposal To Test

Every event has exactly one top type and at most one sub-type. Sports also gets a row of level switches (Pro, Minor League, College, High School) that combine with the sport switches by AND (a college hockey game hides if College is off or Hockey is off).

Nine top types, with the sub-types and event counts in the earlier research (3,966 events, 40 cities, one 14-day window per city, mostly Oct 24, 2026):

| # | Top Type | Proposed Sub-Types | Count In Earlier Research |
|---|---|---|---|
| 1 | Sports | Football, Basketball, Baseball and Softball, Hockey, Soccer, Volleyball, Combat Sports, Motorsports, Rodeo, Tennis and Golf, Lacrosse and Rugby, Olympic and Other Sports. Level chips: Pro, Minor League, College, High School | 1,618 |
| 2 | Concerts & Music | Rock and Alternative, Pop, Hip-Hop and Rap, R&B, Country and Folk, Latin, Electronic and Dance, Metal, Jazz and Blues, World and Reggae, Faith and Gospel, Classical and Opera, Genre Unknown | 1,495 |
| 3 | Theater & Comedy | Theater and Musicals, Comedy, Dance and Ballet, Magic and Spectacle, Talks and Lectures, Film and Screenings | 511 |
| 4 | Family Shows | Ice Shows, Circus and Acrobatics, Kids and Family | 102 |
| 5 | Festivals & Fairs | Music Festivals, Food and Drink Festivals, Cultural Festivals, Fairs and Carnivals, Markets | 20 |
| 6 | Conventions & Expos | Fan Conventions, Trade and Hobby Expos, Auto, Boat, and Home Shows, Pet and Animal Shows | 13 |
| 7 | Parades & Road Events | Parades, Marathons and Road Races, Cycling Events, Holiday Events, Cultural Marches | 0 |
| 8 | Pop-Ups & Watch Parties | Pop-Ups, Watch Parties, Live Screenings | 0 |
| 9 | Other | Everything the keywords cannot place | 207 |

Facts from the earlier research that you must verify, not trust:

- `src/data/eventTypes.ts` already has **37 types in 8 groups**, worked out when an event is read (nothing stored). The nine top types would be a regrouping of those keys, so icons, labels, and stats do not change.
- About **91%** of events are sports, concerts, or theater and comedy that sort cleanly.
- **207 events (5.2%)** land in "Event" (the generic bucket): 152 Undefined, 46 Miscellaneous, 4 "Music", 2 Variety, 2 Fairs & Festivals, 1 Documentary (club nights, touring comedians and speakers, a Rocky Horror tour, a stage show, a watch party, a high school gymnastics championship, minor-league hockey tagged Undefined).
- About **195 concerts** have no genre (Ticketmaster genre "Other" 181, "Undefined" 19), for example The Damned, Julia Jacklin, Madeon.
- **College is 56% of games** (902 of 1,616 by the home team's league), top pro 297, minor or junior 51, unknown 366, high school 0.
- **Parades, road races, street fairs, holiday events, and conventions outside a listed venue: 0 events**, because Ticketmaster only brings in events at venues the app has, and the feeds are Ticketmaster, Sidearm school calendars, ESPN, HockeyTech, and MLB.
- Ticketmaster's `segment` and `subGenre` are read at ingest and thrown away (`ticketmasterSource.ts`, around lines 299 to 355). Check whether that is still true.
- Festivals: Kylie first wrote "concerts and music (festivals)". The earlier research made Festivals & Fairs its own top type so someone can hide county fairs and keep every concert.

## Your Job

Work through these steps in order. Keep a running log of commands and files you used.

### Step 1: Re-Derive The Counts From The App's Own Data

1. Find the latest file in each of the 40 `data/schedule-archive/<city>/` folders. Report the file date range and the total event count.
2. Run the app's own `eventType()` (and any group helper in `eventTypes.ts`) on a scratch copy outside the repo. Produce a table of **count per existing type key, per city** (40 cities by the existing keys), plus a city-by-top-type table for the proposed nine. Save the full tables as CSV in your scratch folder and show a compact version in the report (top 10 cities by volume, plus the 5 cities with the most "Event" and the 5 with the most genre-less concerts).
3. Report the same counts across **all archive days since Oct 4** (the earlier research saw 5,840 unique events) so a single 14-day window is not mistaken for the whole year.
4. Compare your totals with the figures in "Facts To Verify" above. List every number that differs, by how much, and why (window, dedupe, code change since).
5. Report the **tag fields actually present** (`kind`, `audience.domain`, `audience.sport`, `audience.level`, `audience.genre`, `audience.tag`, `teams.*.league`, and so on) with fill rates per source feed. Flag fields that look reliable and fields that are mostly defaults.

### Step 2: Check Each Top Type Against The Data

For each of the nine, answer:

- How many events land there today, in how many cities, and from which feeds?
- Does the data separate the proposed sub-types, or only guess from title keywords? Give the fill rate and the keyword rules involved.
- Give **5 to 8 sample events per sub-type bucket** (title, city, date, source feed, the raw tag values that placed it). Use real events from the archive. For empty buckets, say "none in the archive" and give one or two real-world examples with a source URL.
- Spot-check **at least 20 events per top type** (all of them if fewer) for misfiles. Report the misfile rate and the pattern (for example, "Austin Food & Wine Festival is filed as a music festival").

### Step 3: Decide The Hard Cases

Give a recommendation, with evidence, for each of these:

1. **The 207 "Event" events.** Break them into groups (club nights, comedians and speakers, theater, watch parties, minor-league sports, school events, truly unknown). Say where each group should go, which rule moves it (title keyword, Ticketmaster segment or subGenre, performer lookup, team league), and how many would remain in Other after the fixes. Check whether keeping Ticketmaster's `segment` and `subGenre` would settle most of them, and test that on any local data that carries them (do not call the live API; if no local data has them, say so).
2. **Genre-less concerts (about 195).** Genre Unknown is a switch (locked, C7). Decide what still needs deciding: whether Ticketmaster `subGenre`, the performer name, or the app's artist and genre tables (`genres.ts`, `artists.ts`) can classify a meaningful share, with a tested share on local data; what a person who switches off Country or Rock would expect of an unclassified act; and whether Genre Unknown hides with the parent when Concerts & Music is off.
3. **Festivals.** Own top type with fairs, or a sub-type of Concerts & Music, or split three ways (music festivals under Concerts & Music, fairs and markets under Festivals & Fairs, food and cultural festivals under Festivals & Fairs)? Count what each choice would do to the 20 events and to what a person switching off Concerts & Music would still see. Recommend one and say what would change your mind.
4. **Family Shows vs Theater & Comedy**, and **Conventions & Expos vs Festivals & Fairs.** Keep separate or merge? Use the counts, the real overlaps (for example, a kids musical, Disney on Ice, an expo inside a fair), and how other platforms group them.
5. **Sports levels.** The switches are locked (C5: every sport, Minor League separate, High School hidden until a source). Decide the derivation: is the home-team-league rule good enough for Pro, Minor League, College? Report how many games each level gets, how many are Unknown, and the exact rule for Unknown games (366 earlier), including what the level switches do to an Unknown game. Say where minor and junior leagues (AHL, WHL, OHL, G League, USL) belong, where U Sports and club or esports events belong, and whether women's pro leagues (WNBA, NWSL) count as Pro.
6. **Empty types** (Parades & Road Events, Pop-Ups & Watch Parties, High School). They stay hidden until events exist (locked, C6). Decide only whether their keys belong in the taxonomy and the storage scheme now, so they appear on their own the day a source lands, and what the one watch party already in the archive means for Pop-Ups & Watch Parties.
7. **Sub-levels beyond what is proposed.** Check whether any of these deserve their own sub-type or top type, and answer yes or no with counts: Esports, Wrestling and MMA, Motorsports, Rodeo, Comedy vs Talks, Dance, Religious or Faith events, Food events, Holiday events, Fan conventions, Charity runs, Open mics, Karaoke, Trivia, Sports betting or watch events.

### Step 4: Check Against How Other Platforms Categorize

Open and cite the public docs for **Ticketmaster Discovery API** (segments, genres, subgenres), **SeatGeek** (taxonomies), **Eventbrite** (categories and subcategories), and at least two more of your choice (for example Songkick, Bandsintown, Meetup, Google Events, Apple Maps Events, Resident Advisor, or a city tourism calendar). Make one comparison table: their top levels versus the nine proposed, and note where a user would reasonably look for an event that the nine hide or split. Mark each source "opened" or "unverified".

### Step 5: Check The Settings Behavior Against The Taxonomy

Without writing code, check how the taxonomy interacts with the locked rules and list problems:

- Can an event ever have two top types (a college hockey game, a music festival, a kids' concert, a comedy show at a festival)? Say how the one-top-type rule resolves each and whether a person would be surprised.
- What happens when a top type is off but the person has a plan, stub, or friend attending on an event of that type? (Locked: it shows.) List the combinations that could look odd in the settings screen (for example "Hockey Off" but a hockey plan visible).
- Which keys would be stored (`sports`, `sports.hockey`, `level.college`, `concerts.country`, and so on)? Check each key is stable if a sub-type is later renamed or split, and propose a stable key scheme.
- Does anything about the proposal break the "hidden keys only, new types default on" rule?
- Do not change anything about Crowd Size.

### Step 6: Copy-Rule Audit

Audit every proposed label, heading, and the text in this prompt's taxonomy, and every string in `eventTypes.ts`, `genres.ts`, and any settings copy that would be reused:

- **Title Case headings and labels.** List labels that break it (for example "Faith and gospel", "Hip-hop"). Note the repo's rule on small words like "and", "of", and "for" and apply it consistently.
- **No em dashes.** List any label or sentence in the existing strings or proposal that uses one.
- **Ampersands.** The proposal mixes "Concerts & Music" (top type) with "and" in sub-types. Recommend one rule and apply it.
- **Oxford comma** and plain words. Flag jargon a fan would not say ("Spectacle", "Undefined", "Genre Unknown", "Olympic and Other Sports").
- Give the corrected list of labels you recommend.

Look in the repo for the written naming and copy rules (for example `AGENTS.md`, a naming rules file, or a STYLE file) and quote the line you applied. Do not open `private/` to find them.

## What To Produce

Reply in the chat. Do not write files into the repo (the session saves your report beside this prompt). Save your scratch outputs outside the repo and list their paths. The report must be short and scannable, in this order, with these exact headings:

### 1. Short Report (Under 400 Words)

- The final recommended top-level types (names, order, and one line each), and what changed from the nine.
- The decision on each hard case in Step 3, one line each, with the key number.
- The three biggest risks.
- Confidence: high, medium, or low, and why.

### 2. Final Taxonomy Table

Columns: Top Type, Sub-Types and Levels, Event Count (window), Cities With Events, Data Support (Ready, Partly, Needs New Source), Sample Events (5 to 8 per sub-type bucket, title, city, date, feed, raw tag values). Put all sample events in an appendix table if it is long.

### 3. Counts Appendix

The per-type-per-city table (compact in the chat, full CSV path in scratch), the all-days numbers, and the differences against the earlier research.

### 4. Where The 207 And The Genre-Less Concerts Go

Group tables with counts, the rule that places each group, and the leftover count.

### 5. Other Platforms Comparison

The table from Step 4 with sources and "opened" or "unverified".

### 6. Copy-Rule Findings

Violations found (with file and line), and the corrected label list.

### 7. Sources And Commands

Every file path, command, script, and URL used. Say which parts Codex did, if any.

### 8. Questions For Kylie

End with concrete questions Kylie can answer in one line each. Write each as a choice with your lean, for example: "Festivals: (a) own top type with fairs, (b) inside Concerts & Music, (c) split by kind. My lean: (a), because ...". Cover only decisions the research could not settle. Keep it to 10 questions or fewer. Do not ask about things already locked above.

## Stop Conditions

- If any step would need Supabase, `private/`, a paid API, a login, or a repo edit, stop that step, say so in the report, and carry on with the rest.
- If the archive is missing or the counts cannot be reproduced, say so first, then report what you could verify.
- Do not start any build or implementation. This task ends with the report and the questions.
