# Vancouver implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `vancouver-city-type-answer.md` and `vancouver-venue-table-answer.md`. Boundary used: Metro Vancouver (the regional district / CMA). Langley Township is inside. Abbotsford and Victoria stay outside.

This follows the Milwaukee checklist pattern (PRs #17–#19). **Kylie has not approved this execution the way she approved Milwaukee.** It is not recorded in `docs/product/product-decisions.md`.

City type is **`transit`**, low confidence, as the city-type answer recommends. There is no measured attendee survey. No venue `carShare` is wired. Every share in the city-type answer is an estimate, and the Milwaukee and Tampa builds leave estimates unwired. The research said Hastings Park and Langley need overrides or the 0.40 transit fallback would be wrong for them. Those overrides are left unwired on purpose, and the estimates stay in the research as open questions, not a Kylie lock. The existing 0.40 transit fallback applies to every Vancouver room.

`scripts/attendance-calibrate.mjs` was not run. The checklist says to run it; this task says not to, because that script rewrites every metro. Vancouver rows were computed with the same method against the full attendance pool (so postseason league blends still see other metros) and appended. Every other metro’s draw, season-level, opponent-ratio, and postseason objects are unchanged.

## Active fixed rooms (20)

| App ID | Room | What was stored | Source and what was left out |
|---|---|---|---|
| `bc-place` | BC Place | Football 54,500 reported; soccer 22,120 reported. Roof `open` (venue FAQ: treat as open-air either way). No car share. | Venue table V01; soccer figure is city-type V1b (Wikipedia). Marketing “over 55,000”, Soccer Stadium Digest 54,320 and 21,000, SeatGeek “about 22,000”, FIFA 54,000, and concert “over 65,000” are in the note, not stored as counts. Estimated share 0.45 (range 0.35–0.60) is not wired. MLS 0.40 and World Cup 0.30 were never separate fields. |
| `rogers-arena` | Rogers Arena | Hockey 18,871 from 2018; basketball 19,700; concert 19,000. No car share. | Venue table V02. Ticketmaster’s 18,910 and the 2016–18 figure 18,865 are noted, not stored as extra rows. Estimated hockey share 0.45 and concert share 0.50 are not wired. The Jan 8, 2025 crowd of 19,038 is attendance. Not Rogers Place (Edmonton) or Rogers Forum (Abbotsford). |
| `pacific-coliseum` | Pacific Coliseum | Hockey 15,713 official permanent; concert 17,000 in-the-round. No car share. | Venue table V03 / city-type V3. Current-capacity 15,455, hockey 16,281 and 16,821, floor provision 2,000 / total 17,500, and the 4,200 mini concert are noted. Estimated share 0.70 (range 0.55–0.85) is not wired. A PWHL sell-out of 14,958 is attendance. |
| `freedom-mobile-arch` | Freedom Mobile Arch | Concert seats 6,000, standing-room total 10,000. No car share. | Venue table V04 / city-type V4. Lawn is not stored as seats. The replaced PNE Amphitheatre is not an alias. Opened June 2026. Estimated share 0.68 (range 0.50–0.85, analogy to the Coliseum, very low confidence) is not wired. |
| `thunderbird-arena` | Thunderbird Arena | Hockey 5,004 official permanent; concert 7,000 official special-event. No car share (0.40 fallback). | Venue table V07. Also noted: 5,033 (2009), 5,500 (UBC Properties), Wikipedia 7,500 / 8,000. Father Bauer Arena (900) and Protrans Arena are other rooms, not this row. |
| `nat-bailey-stadium` | Rogers Field at Nat Bailey Stadium | Baseball 6,500 official (MLB.com). No car share. MLB venue id 2817. | Venue table V08 / city-type V6. City-type conflict 5,132–6,500 is noted; the league figure is what is stored. Estimated share 0.65 (range 0.50–0.80) is not wired. Rogers Field rename date was inferred as 2023 in the research and is **not** stored. |
| `willoughby-stadium` | Willoughby Stadium | Soccer 6,042 reported. No car share. | Venue table V09. Also noted: 6,137, more than 6,500, 6,600. All of those are at or above 5,000. Estimated suburban pattern 0.85 is not wired. OSM moved the point about a kilometre from the research approximation. |
| `langley-events-centre` | Langley Events Centre | Hockey and basketball both 5,276 reported. No car share. | Venue table V10 / city-type V5. “About 5,300” is noted. No curtained hockey count was published, so none is stored. No separate Bandits figure was published. Threshold-sensitive. Estimated share 0.88 (range 0.80–0.95) is not wired. |
| `swangard-stadium` | Swangard Stadium | Soccer **4,500** reported, so friction stays off. No car share. | Venue table V11 / city-type V7, and the threshold note in §2b. 5,288, “about 5,000”, and “more than 5,000” are in the note and not stored. The 2007 temporary 10,000 is not stored. Estimated share 0.60 (range 0.45–0.75, very low confidence) is not wired. Open question below. |
| `pne-agrodome` | PNE Agrodome | 3,400 permanent, no setup. No car share. | Venue table V12. The concert-with-floor total (3,400 + 2,000) was **not** stored: that sum is not a single published figure. OSM had no hit; the research approximation is marked approximate. The city-type table has no separate row; the Hastings Park grounds estimate 0.70 is not wired. |
| `thunderbird-stadium` | Thunderbird Stadium | Football and soccer 3,500 (UBC, 2009). No car share. | Venue table V13. The current UBC page’s 12,000 is not stored. Research: do not label until UBC clarifies. Under 5,000, so the access script does not measure it. |
| `queen-elizabeth-theatre` | Queen Elizabeth Theatre | Concert 2,765 official. No car share. | Venue table V14 / city-type V10 (unknown → fallback). Playhouse (668) is under the pre-list line and is not a row. |
| `orpheum-vancouver` | Orpheum | Concert 2,672 official. No car share. | Venue table V15 / city-type V11. Destination Vancouver’s 2,688 is noted. The id is suffixed so it does not collide with another Orpheum. |
| `langley-centre-gym` | Langley Events Centre Gymnasium | Basketball 2,200 reported. No car share. | Venue table V16. No separate OSM hit; the campus point is used. The arena’s estimated share 0.88 is not wired for this gym either. |
| `war-memorial-gym` | War Memorial Gym | Basketball 2,176 official. No car share. | Venue table V17. |
| `vogue-theatre` | Vogue Theatre | Concert 1,280 reported. No car share. | Venue table V18. “About 1,100” is noted. |
| `massey-theatre` | Massey Theatre | Concert 1,260 official (867 + 393). No car share. | Venue table V19. |
| `chan-centre` | Chan Centre for the Performing Arts | Concert 1,200 reported. No car share. | Venue table V20. Not independently re-verified. Telus Studio (250) is not this row. |
| `bell-performing-arts-centre` | Bell Performing Arts Centre | Concert 1,052 reported. No car share. | Venue table V21. Not independently re-verified. Surrey, but no parking evidence for this room, so the suburban 0.85 pattern was not applied. Open question below. |
| `commodore-ballroom` | Commodore Ballroom | Concert 990 standing. No car share. | Venue table V22. Not rounded to 1,000. |

Coordinates are `[longitude, latitude]`. OpenStreetMap named the building for every room except the Agrodome (research approximation kept) and the Langley gym (campus point). The map frame is downtown, Hastings Park, and Burnaby; UBC sits toward the edge; Langley is off the first view.

## Left out, and why

| Research item | Disposition |
|---|---|
| Vancouver Convention Centre West/East halls and West ballroom (V05, V06, V23) | Not venue rows. Convention halls, same pattern as Kylie, Oct 7 (New York / Atlanta). |
| Former PNE Amphitheatre (V24) | Replaced. Not an alias on Freedom Mobile Arch. |
| Hastings Racecourse (V25) | Closed December 2025. Grandstand capacity unknown, so no row. |
| Surrey City Centre Arena (P01) | Not open until about 2030. |
| Whitecaps Hastings Park stadium (P02) | Proposal. Size unknown. |
| Rogers Forum, Abbotsford (E01) | Separate city. Car share 0.92 not wired. |
| Save-On-Foods Memorial Centre, Victoria (E02) | Separate city. |
| Starlight Stadium, Langford (E03) | Separate city. |
| Mission Raceway | Not verified in the venue pass. |
| River Rock Show Theatre | Named; capacity not found. Left unknown rather than estimated. |
| Former Centre in Vancouver for Performing Arts | Status not verified. Not listed. |
| LEC south gym “1,000” | Unsourced. Not a row. |
| Vancouver Playhouse (668), Father Bauer Arena (900) | Under the about-1,000 pre-list line. |
| Table B (Fan Festival, PNE Fair, Summer Lights, Pride, Vaisakhi, marathon, Sun Run, FVDED) | Dated events, not rooms. No hand-listed point events were added. Their car shares (Fan Festival 0.50, Fair 0.65, and the rest unknown) are not on a venue. |
| Ed Sheeran 2023 crowd of 65,061 | Low-quality source in the research; not seeded. |
| PNE Agrodome “220,000–250,000 guests a year” and Civic Theatres’ yearly guest total | Annual or multi-room totals, not a night’s crowd. |

## Teams

Home records, all metro `vancouver`:

| App ID | League | Feed, checked Oct 12, 2026 |
|---|---|---|
| `vancouver-canucks` | NHL | ESPN `hockey/nhl` 22. Homes list “Rogers Arena”. Away listings include Rogers Place; that name is not mapped. |
| `vancouver-whitecaps` | MLS | ESPN `soccer/usa.1` 9727. 2025 and 2026 homes in the feed are “BC Place”. The research’s one 2026 Swangard match is not in that home set and was not hand-seeded. |
| `bc-lions` | CFL | ESPN `football/cfl` 79. Team schedule returned no events (same situation as Montreal’s Alouettes). The row stays so it lists when the schedule fills. |
| `vancouver-warriors` | NLL | ESPN `lacrosse/nll` 125432. 2026 listings have no venue object, so they are not placed. |
| `vancouver-goldeneyes` | PWHL | HockeyTech client `446521baf8c38984`, team 9. Homes at Pacific Coliseum. Rogers Place takeover games are not mapped to Rogers Arena. |
| `vancouver-giants` | WHL | HockeyTech client `41b145a848f4bd67`, team 223. Homes “Langley Events Centre - Langley, BC”. |
| `vancouver-canadians` | High-A | MLB team 435, sport 13, venue 2817. |
| `vancouver-bandits` | CEBL | Record only. No ESPN adapter found. |
| `vancouver-fc` | Canadian Premier League | Record only. No adapter found. |
| `vancouver-rise` | NSL | Record only. Not NWSL. |
| `whitecaps-fc-2` | MLS Next Pro | Record only. No adapter found. |
| `ubc-football`, `ubc-hockey`, `ubc-mbb`, `ubc-wbb`, `ubc-soccer` | U Sports | Records only. No adapter found. |

Not added, as open questions: TSS Rovers (the research calls the league “League1-level” and not verified), Trinity Western Spartans (sports not enumerated), the Abbotsford Canucks (separate city), and UBC volleyball (the gym is in; the program is not split out).

Ticketmaster sports sweep includes the rooms whose league feed is empty or venue-less, or has no adapter: BC Place, Rogers Arena, Pacific Coliseum, Langley Events Centre, the Langley gym, Willoughby Stadium, Swangard, Thunderbird Arena, Thunderbird Stadium, War Memorial Gym. Nat Bailey is left to MLB. Theatres stay on the ordinary music and arts listing. No Ticketmaster venue ids were verified in this pass.

## Collected crowds and expected draws

Attendance files under `data/attendance/vancouver/`, collected Oct 12, 2026. Counts are games saved with an announced crowd:

| Team | Games | Building |
|---|---|---|
| Canadians | 262 | Nat Bailey (2023: 64, 2024: 64, 2025: 66, 2026: 68) |
| Canucks | 184 | Rogers Arena |
| Giants | 113 | Langley Events Centre |
| Whitecaps | 83 | BC Place |
| Goldeneyes | 13 | Pacific Coliseum |
| Lions | 0 | CFL schedule empty |
| Warriors | 0 | No venue on the listings |

All-dates medians appended to `expectedDrawIndex.ts` (85 draw rows, 2 season levels, 75 opponent ratios, 6 postseason rows). Not tuned toward any hand rating or toward a research average:

| Team | Median (middle half) | Games in the row | Note |
|---|---|---|---|
| Canadians | 4,811 (3,278–5,750) | 191, 2024–2026 | Under the 6,500 seats |
| Canucks | 18,806 (18,679–18,906) | 120, 2024–2026 | Under the stored hockey figure 18,871 |
| Giants | 3,621 (3,241–4,118) | 99, 2023–2025 | Research said about 3,700; not tuned to that |
| Goldeneyes | 10,656 (9,674–11,514) | 12, 2025 | Research average about 11,235; not tuned |
| Whitecaps | 23,193 (20,592–25,445) | 32, 2024–2025 | Above the stored soccer capacity 22,120. The row keeps the announced median. The read caps a draw at the building. |

Season levels on file: Giants 2026 at 0.865 (5 games); Whitecaps 2026 at 1.063 (11 games). Those seasons are not finished.

No broad-team overlap flags (no audience poll). No monthly heat baseline (the existing 85°F floor applies). No `MONTHLY_NORMAL_F` invented.

## Gridlock zones

Named only, same idea as Philadelphia’s Sports Complex label. Constants were not changed.

- Stadium district: BC Place, Rogers Arena, Queen Elizabeth Theatre, Orpheum, Vogue, Commodore
- Hastings Park: Pacific Coliseum, Freedom Mobile Arch, Agrodome
- Willoughby: Langley Events Centre, the gym, Willoughby Stadium
- UBC: Thunderbird Arena, Thunderbird Stadium, War Memorial Gym, Chan Centre

The transit near-zone spill stays 0.10. Hastings Park has no rapid transit. That contrary point is in the city-type comment and is not a constant change.

## Changes to re-check, not to build

From the two answers. None of these is a venue or a capacity change in this pass.

- stal̕əw̓asəm Bridge, complete February 2026; Freedom Mobile Arch, open June 2026; LEC expansion scheduled September 2026.
- Broadway Subway, late 2027. Expo Line disruptions until late 2027.
- R2 RapidBus timing conflicts; re-check November 2026.
- Whitecaps Hastings Park decision due end of 2026; re-check January 2027.
- Whitecaps BC Place lease through the 2027 sprint. Home after May 2027 is unknown. Re-check 2027-05-31. MLS calendar change July 2027.
- Surrey arena about 2030; Giants move 2030–31; SkyTrain to Langley late 2029.
- Celebration of Light cancelled for 2026. One-night Summer Lights on July 31, 2026. A 2027 return is unconfirmed.
- PNE Fair 2026 final attendance unknown.
- Goldeneyes 2026–27 opener December 5, 2026 at the Coliseum, plus takeover games. Re-check 2026-11-15.
- Swangard expansion proposal. Coliseum and Agrodome naming-rights inquiry (re-check 2027-01-15). Rogers Arena WNBA bid is a proposal only.
- Re-check the city-type answer by January 2027 and again by December 2027.

## Scripts run Oct 12, 2026

- `node scripts/venue-access.mjs --metro=vancouver` measured the eight rooms at or above 5,000 seats. None met the hard-access rule (relief of at least 40 m and no more than four named streets within 250 m), so none is flagged strained. Other cities’ rows in `data/venue-access.tsv` are unchanged. Freedom Mobile Arch came back with zero named streets within 250 m and 38 m of relief; the rule does not flag it, and no hand flag was set. Rooms under 5,000, including Swangard, Thunderbird Stadium, and the Agrodome, are not measured.
- `node scripts/weather-fetch.mjs --metro=vancouver` wrote 15 day files under `data/weather/vancouver/` (3 point-dates and 1 day-range call). The weather index gained those rows only.
- `node scripts/archive-schedule.mjs --metro=vancouver` saved `data/schedule-archive/vancouver/2026-10-12.json`: 3 events, Oct 12 through Oct 26 (Canucks vs. Hurricanes, Red Wings, and Wild, all at Rogers Arena). MLB, HockeyTech, and seed were empty in that window. Ticketmaster was not called: no API key in this environment, so concerts are not in this snapshot.
- `node scripts/results-fetch.mjs --metro=vancouver` saved one final: Giants 4, Seattle Thunderbirds 1, on Oct 10, 2026, at Langley Events Centre, announced attendance 3,423.
- `catalog-write` and the nightly GitHub workflow were not run. They write the live shared catalog and need the Supabase service key.

## Checks (Oct 12, 2026)

Rebased onto `main` at `0dd0378` (Austin and Phoenix). Estimated car shares, including Hastings Park and Langley, are not wired.

- `npm run build` passed (type-check and production build). Node on this machine is 22; `package.json` asks for 24. The build still passed. `package-lock.json` is identical to `main`.
- `npm run city-build-check` passed, including Vancouver (metro record, at least one venue, at least one home team).
- `node scripts/storage-check.mjs` passed.
- A phone-sized check of the local app listed Vancouver on “Where’s home?” and listed the 20 rooms on Log an event. The first pass showed Pacific Coliseum as “Rink on Renfrew”, because the nickname was stored last and the current name is the last one. Official names are now last: Pacific Coliseum, PNE Agrodome, Orpheum, Chan Shun Concert Hall. Nicknames stay searchable. Oct 20 did not show the Canucks game in the browser: ESPN and HockeyTech are blocked by the browser from this local preview (CORS). The server-side snapshot did save that game.
- Other metros’ expected-draw, season-level, opponent-ratio, and postseason objects match `main`. Vancouver rows were appended. The only extra punctuation is the comma that lets those rows sit in each array.

## Open questions for the next review

1. City type stays `transit` with the 0.40 fallback, and no estimated car share is wired (Milwaukee and Tampa precedent). The research said Hastings Park and Langley need overrides or that fallback is wrong for them. Those estimates, and the downtown ones, are open until Kylie says to wire them or to switch the city type to `hub`. Nothing is a measured split. The unwired figures: BC Place 0.45 (MLS 0.40 and World Cup 0.30 were never separate fields); Rogers Arena hockey 0.45 (concerts 0.50); Pacific Coliseum 0.70; Freedom Mobile Arch 0.68; PNE Agrodome 0.70 by Hastings Park analogy; Nat Bailey 0.65; Swangard 0.60; Willoughby 0.85 (suburban pattern); Langley Events Centre and its gym 0.88. Downtown theatres, UBC rooms, and Bell PAC were already unset.
2. Display name is `Vancouver`, not “Metro Vancouver”. Code is `VAN`.
3. Swangard is stored at 4,500 so the friction label stays off. An official City of Burnaby capacity is still needed. Figures that cross 5,000 were not chosen.
4. Thunderbird Stadium is stored at the 2009 seated 3,500. The current UBC page says 12,000. That figure was not stored.
5. Agrodome concert-with-floor (about 5,000–5,400) was not stored, because adding 2,000 floor seats to 3,400 permanent seats would be an inference. Fixed seating 3,400 does not feed friction.
6. Langley Events Centre uses 5,276 for hockey and for basketball. A curtained hockey setup may be under 5,000; no number was published.
7. Which Rogers Arena hockey figure should be current: 18,871 (stored) or 18,910 (noted only)?
8. Nat Bailey uses 6,500. The city-type answer still lists 5,132–6,500 as unresolved. The Rogers Field start date was not verified.
9. Willoughby uses 6,042. Other published figures are 6,137, more than 6,500, and 6,600.
10. Bell Performing Arts Centre has no car share. It is in Surrey. Applying the 0.85 suburban pattern would be a guess; there is no parking evidence for this room.
11. Chan Centre (1,200) and Bell PAC (1,052) were not independently re-verified. They are included as reported.
12. Should TSS Rovers, Trinity Western, and UBC volleyball be team records? They were left out because the league or the sport list was not verified.
13. The Whitecaps’ 2026 Swangard match is in the research and not in the ESPN home set. It was not hand-seeded.
14. No Ticketmaster venue ids were verified. A generic “PNE” or “Langley Events Centre” listing can still land on the wrong room.
15. CFL and NLL schedules do not place games yet. CEBL, CPL, NSL, MLS Next Pro, and U Sports have no adapter.
16. Agrodome coordinates are approximate. The Langley gym uses the arena’s campus point.
17. Shared-catalog publication (`catalog-write` and the nightly workflow) was not run. It needs the Supabase service key and would write the live catalog.
