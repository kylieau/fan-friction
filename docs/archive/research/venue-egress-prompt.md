# Research brief: event egress inputs for 43 venues

## Purpose
Fan/Friction's Gridlock score estimates how hard it is to leave a
venue after an event. Road capacity will be computed separately from
OpenStreetMap, so do NOT research lane counts, gate streets or
freeway ramps. I need the inputs that only research can supply:
how many people come by car, how parking works, any special event
traffic setup, and published clearance times I can use to test the
formula. v1 uses only publicly available data and must work the same
way in every city.

## What a previous attempt found
An earlier research pass covered 12 venues. Treat its findings as
leads: re-check each one, replace weak sources with official ones
where possible, and fill the gaps. Lessons from that pass:
- No venue, team, city plan or EIR found published exit-lane counts.
  That is why lanes are now out of scope.
- Parking-blog guides often conflict and many are low quality. EIRs,
  city documents, transit agencies and team pages were far more
  reliable.
- Downtown venues have no venue lots, so on-site spaces doesn't
  apply. Golden 1 Center has the best substitute found: a city
  figure for cars actually used at a sellout.
- Stack-parked venues (Rose Bowl, Hollywood Bowl) empty as fast as
  the stacks unpack.

Findings so far (label as given; verify before reuse):
- Dodger Stadium: 16,000 spaces, ~50,000 average attendance
  (reported, LAist, June 2026:
  https://laist.com/news/transportation/dodger-stadium-traffic-gondola-walking-paths-buses-what-should-la-do).
  Lower-quality sites say 14,000 (conflict). LADOT Dodger Stadium
  traffic assessment was due to publish recommendations in fall
  2026; check whether it's out, since it may have mode share and
  clearance data. Team parking pages:
  https://www.mlb.com/dodgers/ballpark/transportation/general-parking
  and https://www.mlb.com/dodgers/ballpark/transportation/frequently-asked-questions
- LA Coliseum + BMO Stadium: 4,800+ spaces within Expo Park and
  adjacent lots, shared (official, https://bmostadium.com/?p=237342).
  Park entrances at MLK & Hoover and 39th & Figueroa; USC campus
  parking extra (official, https://www.lacoliseum.com/parking/).
  Exposition Park's event calendar lists which lots each event uses
  (e.g. https://expositionpark.ca.gov/?p=16248).
- SoFi Stadium: 9,000+ on site (reported, weak source,
  https://meetstadium.com/stadiums/sofi-stadium/). Inglewood Park &
  Go satellite lots, 4,000+ spaces with shuttles (official,
  https://www.cityofinglewood.org/1394/Parking-for-Events). Intuit
  Dome garages are also sold for SoFi events (reported,
  https://parking-mobility-magazine.org/august-2025-destination-and-event-management/enhancing-the-game-day-experience/).
- Intuit Dome: EIR lists West garage ~3,110 and East garage ~365
  spaces (official, https://ceqanet.lci.ca.gov/2018021056/4); venue
  says 4,000+ on site (official,
  https://intuitdome.com/contact-us/faq). The IBEC EIR likely also
  has mode share assumptions; check.
- Hollywood Bowl: ~350 of the previous 1,700+ stacked spaces removed
  in 2024 (reported, LA Times via
  https://au.news.yahoo.com/hollywood-bowl-parking-harder-l-171743489.html),
  leaving roughly 1,350 (estimated). Only Lots A and D park cars;
  all stacked, no early exit (official,
  https://www.hollywoodbowl.com/visit/getting-here/parking). Shuttle
  share "more than a third" and 1–2 hour exits are anecdotal only;
  look for LA Phil shuttle ridership figures.
- Rose Bowl: no official space count found. General parking in Lots
  H, 1–4, 6, 8–10, mostly on Brookside Golf Course, stacked
  (official,
  https://rosebowlgame.com/sports/2021/11/16/parking-transportation-information).
  60–90 minute exits anecdotal only. Pasadena runs a police traffic
  plan with one-way outbound streets; the plan document itself was
  not found.
- Angel Stadium: conflicting counts, 12,000+ (fan site) vs. 7,000
  (Parkopedia); find an official figure. Three lot entrances:
  Douglass Rd, State College Blvd, Orangewood Ave (official,
  https://www.mlb.com/angels/ballpark/transportation/directions).
- Crypto.com Arena / Peacock Theater (L.A. Live): only code-required
  parking found, 2,200 for STAPLES and 3,583 for L.A. Live
  (official, Farmers Field EIR,
  https://libraryarchives.metro.net/DPGTL/losangelescity/convention-event-center-DEIR/Farmers-Field-DEIR-Volume-1-Section-4.B.2-Parking.pdf).
  Requirements, not supply. 42,922 off-street spaces within a 15–20
  minute walk (official, LADOT letter,
  https://libraryarchives.metro.net/DPGTL/losangelescity/convention-event-center-DEIR/Farmers-Field-DEIR-Volume-8-Appendix-I.2-LADOT-Traffic-Study-Approval-Letter.pdf).
  That EIR's transportation study also has mode share assumptions
  for an event center at this location; check.
- Golden 1 Center: 15,500 spaces within four blocks; a sold-out
  Kings game uses about 7,000 (official, City of Sacramento,
  https://www.cityofsacramento.org/Arena/Project-Process). 10–15%
  walk/bike/transit was a pre-opening estimate. Streets close up to
  45 minutes after events (reported,
  https://www.capradio.org/articles/2016/09/15/traffic-plans-for-sacramento-downtown-arena-events-unveiled/).
- Petco Park: trolley carried ~24% of fans per game in 2004
  (reported, old,
  https://progressiverailroading.com/rail_industry_trends/news/San-Diego-Trolley-scores-big-with-baseball-park-service--11563);
  about 8,000 trolley riders on sellout days more recently (MTS data,
  reported,
  https://www.10news.com/news/local-news/mts-unveils-padres-trolley-encourages-public-to-take-transit-to-petco-park).
  Look for a current MTS share figure.
- Citi Field: no count found; team says 2026 parking is reduced by
  construction, so counts are in flux (reported,
  https://www.nbcnewyork.com/news/sports/how-to-get-to-citi-field/6477611).
- Ohio Stadium: after games, campus streets run one-way outbound
  (official, https://news.osu.edu/football-parking-information/).
  Expect 60–90 minutes to clear lots and garages (reported,
  https://abc6onyourside.com/sports/the-football-fever/what-to-know-before-you-go-to-osu-home-football-games-this-season-ohio-state-buckeyes-parking-college-football-parking-traffic-columbus-stadium).
  No total space count found.
- Not yet researched: the other 31 venues.

## Fields (one row per venue)
1. Current venue name (verify; note recent renames)
2. Venue type: dedicated lots / shared district / downtown grid /
   stack parked (pick all that apply)
3. Capacity: sellout capacity for its main event types (e.g. football
   vs. concert)
4. On-site spaces: venue-run lots and garages only
5. Satellite spaces: lots with venue-run or city-run shuttles,
   reported separately
6. Cars per sellout: any measured or officially estimated count of
   cars actually used at a sold-out event
7. Drive share: share of attendees arriving by private car, plus
   whatever split exists for rail, bus, shuttle, rideshare and
   walk/bike
8. Vehicle occupancy: people per car, if any source measures it
9. Event traffic configuration: one-way conversions, street closures,
   contraflow, police-directed exits, and how long they last
10. Published clearance time: stated time to empty the lots or for
    traffic to return to normal after a sellout
11. Source URL for each figure

## Rules
- Label every figure: official / reported / estimated / anecdotal.
- If sources conflict, report both values with both sources.
- Shared districts (Exposition Park; L.A. Live; Inglewood's SoFi
  Stadium, Intuit Dome, YouTube Theater and Kia Forum): say which
  lots serve which venue, or that they're shared.
- Downtown-grid venues: instead of on-site spaces, report nearby
  off-street supply and any cars-used figure.
- Clearance times are for testing the formula, so report what each
  source actually measured (lots emptied, traffic normal, last car
  out) and for what event.
- Prefer EIRs, city event traffic plans, transit agency ridership
  reports and venue/team pages over parking-blog guides.
- Write "n/f" rather than guessing. Don't derive drive share from
  other numbers unless you show the math and label it estimated.

## Batching
Do venues 1–12 now. Stop after each batch so I can review before you
continue.

## Output
A CSV with the columns above, then a short list per batch of open
questions: conflicting figures, venues with no drive-share data, and
unclear shared-lot arrangements.

## Venues
Los Angeles area:
1. Dodger Stadium
2. Crypto.com Arena
3. LA Memorial Coliseum
4. BMO Stadium
5. SoFi Stadium
6. Intuit Dome
7. Kia Forum
8. Hollywood Bowl
9. Rose Bowl
10. Dignity Health Sports Park
11. Dignity Health Sports Park tennis stadium
12. Angel Stadium
13. Honda Center
14. Pauley Pavilion
15. Galen Center
16. Santa Anita Park
17. In-N-Out Burger Pomona Dragstrip
18. Fairplex
19. Weingart Stadium (East LA College)
20. Long Beach Arena
21. Drake Stadium (UCLA)
22. Los Angeles Tennis Center (UCLA)
23. Veterans Memorial Stadium (Long Beach)
24. Titan Stadium (Cal State Fullerton)
25. Pacific Amphitheatre
26. Anaheim Convention Center
27. Peacock Theater
28. Shrine Auditorium
29. YouTube Theater
30. Greek Theatre
31. Championship Soccer Stadium (Irvine)
32. Bren Events Center (UC Irvine)
33. LBS Financial Credit Union Pyramid (Long Beach State)
34. Empire Polo Club (Indio)
35. FivePoint Amphitheatre (closed 2023; as it operated)

Other cities:
36. Citi Field
37. Petco Park
38. T-Mobile Park
39. Wintrust Arena
40. Amalie Arena
41. Mortgage Matchup Center (Phoenix)
42. Golden 1 Center
43. Ohio Stadium
