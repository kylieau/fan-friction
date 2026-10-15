# Research prompt: a complete research dossier for my event log

Answered Oct 14, 2026 (private, 130 entries). What could go public without revealing the log went to `docs/reference/data-sources.md` (past-event sources), `src/data/venues.ts` (venue notes) and `docs/research/topics/log-stats-measures.md` (Oct 15).

This public file is the reusable research brief. For the independent-model run, use the self-contained packet at `private/kylie-log/kylie-log-research-packet.md`: it includes this brief, the full currently documented log, and the project's existing event research and notes, so the model does not need repository access. Keep the packet and the answer in the ignored `private/kylie-log/` folder; this public repository must not contain the log or its researched attendance history. Ask the model to return its answer as a downloadable Markdown file named `private/kylie-log/kylie-log-research-answer.md`. If the tool cannot create a file, return the Markdown in chat so it can be saved privately. A second model's answer should use `private/kylie-log/kylie-log-research-answer-<model>.md`.

The source export is the inventory for this run. Do not treat the sample log in public project documentation as complete or copy personal attendance details into this prompt or repository. This is research only: it does not approve changes to the app, its fields, its screens, or its formula.

---

# Research brief: reconstruct and enrich my entire live-event log

## Instructions for the researcher

Use the current export if one is attached; otherwise use the complete log included in this research packet as the authoritative inventory for this run. Preserve each entry's original wording and an identifier so the work can be matched back to it. Research every entry; do not select only famous events or a convenient sample.

Return the complete answer as a **downloadable Markdown file** named `private/kylie-log/kylie-log-research-answer.md`. Use Markdown headings, readable prose, pipe tables where they help, and links beside the facts they support. Keep my event list, attendance history, and the answer private. Do not put them in a public repository, publish them, or contact anyone for me. If the research tool cannot create a file, return plain Markdown in chat so it can be saved under that private path. If the answer must be delivered in parts, keep the same entry IDs and a completion tracker, and stop each part at a clean boundary.

This is a research and discovery exercise, not an implementation request. Do not edit code or my log, design screens, or present possible fields and analyses as approved product decisions. The goal is to learn what can be known and what might be worth capturing later. A rich research record does not imply that I should have to fill in a long form.

Use public, freely accessible sources. Prefer official box scores, gamebooks, schedules, team and league archives, university athletics pages, venue and promoter records, artist archives, historical broadcast listings, and date-specific reporting. Specialist databases and community-maintained setlists can help; identify their provenance. Put source links near the claims they support and identify source dates where useful.

Never invent missing information. Use “not found,” “not publicly available,” or “requires my confirmation” rather than guessing. Do not use zero to mean unknown or infer an exact date from a month-level memory. If a page cannot be accessed normally, list its URL and the missing evidence; do not bypass access restrictions. Do not purchase access, start paid services, or use private accounts.

### Existing research, confidence, and source privacy

The packet includes prior public research and a newer concert-date research pass. Reuse those findings as a starting point, preserve their confidence/status and source links, and focus new research on gaps, independent corroboration, and useful additional detail. Do not silently upgrade a low-confidence candidate to a confirmed date. For concert identity and date, the newer concert-date notes supersede older rough concert candidates where they provide a more specific finding; they do not override the raw log. The concert notes explicitly mark uncertain dates and open questions.

Some private notes describe the existence or type of personal evidence (such as email, photos, or payment notes). That evidence is not a public source: do not quote it, reproduce sensitive details, search private accounts, or include it in an answer intended for public circulation. Use only the public links included in the notes for public verification. The private packet and answer must remain private. Entries explicitly marked “not attended” are exclusion controls, not candidate attendance entries.

Existing game research is a set of event facts already gathered, not proof that the person attended each event. Only the attendance inventory establishes which experiences belong in the log. Do not add an event to the attended inventory merely because its game details are present in the research appendix. Preserve corrections and source confidence; if a prior fact appears wrong, explain the evidence and mark it for review rather than silently replacing it.

### Naming and identity normalization

The packet includes a concise export of the current Fan/Friction event-naming rules. Use it only to propose a searchable canonical event identity and a separate app-style display title. Always retain the supplied raw title verbatim. A changed display title is a normalization suggestion, not evidence that the underlying event, attendance, date, or role has been verified. Never use a short chip title as the event’s full official title. Distinguish event-date naming from present-day venue names, and show both where useful.

## 1. Reconcile the inventory first

Start with an inventory and a coverage plan. Reconcile every supplied entry, retaining its original text and ID. Identify:

- Exact dates versus approximate months, years, date ranges, or unknown dates.
- Official event identity versus my shorthand; public identifiers and useful matching links.
- Home, away, and neutral-site games; the venue and metro where the event actually happened.
- Experiences attended in person, watched remotely, or seen at a shared viewing event, as far as the supplied log establishes.
- Multiple games or performances on one date, doubleheaders, tournament sessions, festival days, individual sets, and co-bills.
- Postponed, rescheduled, moved, interrupted, abandoned, or shortened events.
- Likely duplicates versus genuinely separate experiences.
- Possible missing entries suggested by differences between recap totals and itemized entries.

Do not silently correct, merge, or split an entry. Show the original, the proposed match or correction, supporting evidence, and uncertainty. When an approximate memory could match multiple events, research the candidates and explain what would distinguish them; do not choose one merely because it seems likely.

## 2. Build one dossier for every entry

Give every entry its own dossier, using paragraphs and concise subheadings rather than forcing everything into a giant table. Apply the checklist below where relevant, and include other useful, well-supported information you find. For each fact, make clear whether it is verified, reported, estimated, computed, a plausible candidate, unresolved, unavailable, or something only I can confirm.

### Identity, participants, and context

Find the official title; participants; sport or performance type; league, competition, division, and level; season; tournament round; series game; rivalry; exhibition or regular-season status; tour; festival edition; headliner, co-headliner, support act, and guest roles. These classifications can overlap; preserve distinctions such as a concert that is also a festival set and tour stop.

For games, research context entering the event: records, standings, dated rankings with the poll identified, tournament seeds, series position, playoff implications, relevant streaks, injuries, and roster circumstances. Separate what was knowable beforehand from facts learned afterward. Explain why an event was notable and support subjective descriptions with evidence.

### Place, room, capacity, and seating

Find the actual venue, city, metro, country, and local time zone. Record the name used on the event date and former or later names separately. Identify the specific room, field, court, stage, or festival grounds and the configuration used: ordinary sports setup, concert setup, reduced configuration, temporary venue, or neutral site.

Find event-relevant capacity where available. Distinguish fixed seats, standing capacity, concert capacity, saleable inventory, and full-building capacity. Research seating terms and layout as they existed for the event: sections, levels, suites, reserved floor, pit, general admission, lawn, standing room, student sections, accessible seating, and similar areas. Do not infer where I sat or stood.

### Timing, duration, and sequence

Research the original and revised scheduled date and start; doors or gates; warmups, ceremonies, opening acts, and support sets; actual first pitch, tipoff, kickoff, first serve, or stage time; breaks, delays, suspensions, and resumptions; and actual finish, final out, final whistle, encore finish, or abandonment.

Where sources permit, establish active playing or performance duration and total elapsed time, distinguishing interruptions from active time. Record broadcast coverage start and finish separately from the event itself. Note if the event or broadcast crossed midnight. State the time zone and daylight-saving offset. Preserve the venue-local date and any distinct date relevant to remote viewing.

“Scheduled start,” doors, actual start, broadcast window, and the time I personally spent there are different facts. Do not substitute one for another. Calculate durations only from supported timestamps and show the basis.

### Attendance, capacity use, and audience

Find defensible event-specific figures and state what each measures: official announced attendance; tickets sold or distributed; scanned admissions or turnstile counts; independent estimates; paid attendance, complimentary tickets, or no-shows; sellout claims and the inventory they refer to; and attendance as a share of capacity only when numerator and denominator are comparable.

For festivals and open events, distinguish a day’s crowd, weekend total, unique visitors, cumulative admissions, and concurrent crowd estimates. Seek attendance for individual festival sets only when an actual source supports it. Never turn a multi-day total into a factual daily crowd. Label any derived estimate and explain its method and limits. A figure published after an event is not automatically a counted final headcount.

### Game detail and sport-specific analytics

For each game, find the official result and enough detail to reconstruct its character. Seek lineups or starters, scoring by period or inning, overtime or extra innings, scoring sequence, lead changes, largest lead, decisive runs or plays, player performances, records, milestones, debuts, and game duration where available.

For baseball, look for starting pitchers, lineups, box score, innings, pitch counts, home runs, walk-offs, and supported advanced measures such as win-probability swings, leverage, or Statcast highlights. For basketball, look for starters, period scoring, overtime, lead changes, ties, major runs, player lines, and milestones. For football, seek starters, scoring drives, major plays, lead changes, and milestones. For soccer, seek lineups, timed goals, cards, substitutions, extra time, penalties, and published advanced statistics. For volleyball, seek starting lineups when available, set scores, match length, deciding-set details, and standout performances. Adapt this to other sports; do not force irrelevant statistics onto an event.

### Concert, show, and festival detail

Find the tour and leg; actual lineup and performance order; support acts; setlist; encore; song count; covers, medleys, guests, collaborations, live debuts, unusual arrangements, and notable omissions. Distinguish a guest who was announced from one who actually appeared.

Research actual set times and lengths, stage or production configuration, acoustic segments, special staging, recording or filming, technical failures, curtailments, cancellations, and replacement dates where documented. Prefer a date-specific setlist. A typical tour setlist is context, not proof of what was played that night.

For festivals, reconstruct edition, weekend, day, stage, published schedule, actual set, and overlapping performances. Keep “on the lineup,” “performed,” and “I saw them” distinct.

### Broadcast and shared viewing

Research the historical broadcaster for the exact event: local and national television, streaming platforms, radio, language feeds, alternate presentations, announcers and analysts, pregame and postgame coverage, and public replays or highlights. Distinguish scheduled carriage from confirmed coverage. Record documented regional restrictions, blackouts, and exclusivity for that date.

Where published, collect television audience, average and peak viewers, ratings, streaming audience, geographic scope, and measurement method. Do not compare incompatible audience measures.

For a Cosm screening, watch party, cinema presentation, or other shared broadcast, research two linked events: (1) the underlying game or performance at its actual venue; and (2) the viewing event at its own venue, with its own local date and time, format, room, ticketing, and crowd evidence. Document immersive formats, alternate feeds, presentation differences, and delays only when supported. Do not infer which service I used, where I watched, or how much I watched from public availability.

### Occasion, conditions, and surrounding events

Research promotions, giveaways, theme nights, ceremonies, honors, jersey retirements, title celebrations, national anthem performers, ceremonial first pitches, halftime entertainment, fireworks, and post-event performances.

Find event-specific historical ticket face values, advertised ranges, fees, packages, and resale evidence where available. Keep those apart from what I actually paid. Research relevant bag policies, entry restrictions, access arrangements, transport disruptions, closures, or security incidents when documented.

Find observed weather during the event—temperature, feels-like conditions, precipitation, wind, heat, and interruptions—when reliable records exist. Distinguish venue observations from nearby stations, forecasts from observations, and roof availability from confirmed roof status.

Identify significant overlapping events and their locations and supported times. Describe timing overlap and shared access conditions without inventing traffic measurements or claiming an overlap caused low attendance. The event’s result must remain separate from Fan/Friction’s friction rating.

### Facts only I can provide

End each dossier with a short “Only I can confirm” section for details public research cannot establish: my seat, companions, actual ticket cost, arrival and departure, partial attendance, which festival acts I saw, where I watched, transport, photos, souvenirs, and personal memories. Include only what I explicitly supplied. A published lineup does not prove I saw every act; a tournament session does not prove I stayed for every game; a shortened show does not establish when I left.

## 3. Explore ways to break down the whole log

After the dossiers, propose a broad set of useful ways to organize and analyze my history, with examples drawn from the supplied log. Treat these as research possibilities, not approved app features.

Consider event, session, game, festival day, set, tour, season, and series; in-person attendance, remote viewing, and shared broadcasts; teams supported versus opponents encountered; artists deliberately seen versus support acts and guests; sport, competition, level, gender category, genre, and performance role; home, away, neutral, and destination events; venue, room, stage, metro, city, country, and configuration; regular season, postseason, round, rivalry, and occasion; scheduled and actual duration, start hour, weekday, delays, overtime, and extra innings; close games, comebacks, lead changes, walk-offs, milestones, debuts, and historic performances; setlist variety, repeated songs, guests, tour changes, and shortened shows; crowd size, comparable occupancy, sellouts, and uncertainty; seats or standing areas when I provide them; broadcaster, viewing format, and audience measures; weather and surrounding event overlap; repeat visits, first visits, consecutive dates, and multiple events in one day.

For every proposed statistic, define what counts, its denominator, required evidence, and exclusions. Explain how to avoid counting a festival both as one outing and as many separate performances in the same total. Likewise distinguish unique artists from performances, games from sessions, and underlying games from watch parties. Include deeper possibilities such as distributions, personal records, repeat exposure to players or songs, comparison with a team season or a tour’s typical set, and measures of how unusual an event was. Label computed measures and give formulas. Small samples and incomplete records must remain visible; my presence does not show that I caused a win or memorable performance.

## 4. Evidence, conflicts, and gaps

Resolve small source differences sensibly while retaining what each source measures—for example, doors and stage time can both be correct. Preserve material conflicts and explain them. Never invent missing facts, treat a guess as verified, or infer my personal experience. Mark each item as verified fact, reported fact, estimate, computed value, plausible candidate, unresolved conflict, not publicly available, requires my confirmation, or not applicable. Record inaccessible pages by URL without trying to bypass access restrictions.

## 5. Markdown answer structure

Save the answer as `private/kylie-log/kylie-log-research-answer.md` and include:

1. **Inventory and coverage plan:** entry count, how entries were identified, proposed research batches, and any immediate ambiguities.
2. **Reconciled inventory:** original entry text and ID, proposed match, date precision, event type, confidence/status, and brief issue note.
3. **Naming crosswalk:** raw title (unchanged), proposed canonical event identity, proposed Fan/Friction short/display title, official full title when known, and confidence/status for each; explain any mismatch without treating it as an attendance correction.
4. **One sourced dossier per entry:** preserve IDs and cover the relevant dossier sections above; cite claims inline.
5. **Corrections and identity questions:** proposed fixes, candidate matches, duplicates or splits, evidence, and focused questions for me.
6. **Breakdowns and analytical ideas:** definitions, denominators, formulas, examples, exclusions, and known limitations.
7. **Gap report:** separate facts research can still find, facts not publicly available, and facts only I can provide.
8. **Prioritized questions for me:** group related questions and ask only what would resolve meaningful ambiguity or improve the record.
9. **Sources:** link sources beside claims and provide a compact source list if helpful.

Track every entry as **complete**, **partial**, or **not researched**. If the work is too large for one pass, divide it into manageable batches and keep the same IDs and inventory in every installment. Do not imply full coverage until every entry has a dossier or is explicitly listed as unresolved.

The goal is the richest defensible research record for my events, so I can later decide what belongs in my personal log, what belongs in an event’s background, and what makes an interesting personal statistic.
