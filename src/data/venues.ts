// Venues as their own records. Capacity is stored by year and setup, since it
// changes (the Coliseum held 93,607 in 2017 and 77,500 after its renovation).
// Capacities checked Oct 1, 2026 against venue guides and news reports, and
// again Oct 6, 2026 against the venue research in docs/archive/research/la-venue-table-answer.md
// (every 5,000+ room in Los Angeles and Orange County). Sources per venue are
// in docs/data-sources.md. Figures are official unless a note says reported
// or estimated. Locations: OpenStreetMap where it knows the building, else
// the research's approximation, said so in a comment.

import type { LocalDate, Venue } from './types';
import { VENUE_ACCESS } from './venueAccessIndex';

export const VENUES: Record<string, Venue> = {
  'dodger-stadium': {
    id: 'dodger-stadium',
    metroId: 'la',
    names: [{ name: 'Dodger Stadium' }],
    location: [-118.24, 34.0739],
    capacity: [{ seats: 56000 }],
    roof: 'open',
  },
  'crypto-com-arena': {
    id: 'crypto-com-arena',
    metroId: 'la',
    names: [{ name: 'Staples Center' }, { name: 'Crypto.com Arena', from: '2021-12-25' }],
    location: [-118.2673, 34.043],
    capacity: [
      { seats: 18910, setup: 'basketball' },
      { seats: 18145, setup: 'hockey' },
    ],
    roof: 'indoor',
  },
  coliseum: {
    id: 'coliseum',
    metroId: 'la',
    names: [{ name: 'LA Memorial Coliseum' }],
    location: [-118.2879, 34.0141],
    capacity: [
      { seats: 93607, note: 'Through the 2018 season (reported; USC\'s own pre-renovation figure was 92,348)' },
      { seats: 77500, fromYear: 2019, note: 'From August 2019, after the renovation (USC)' },
    ],
    roof: 'open',
  },
  'bmo-stadium': {
    id: 'bmo-stadium',
    metroId: 'la',
    names: [{ name: 'Banc of California Stadium' }, { name: 'BMO Stadium', from: '2023-01-19' }],
    location: [-118.2833, 34.0128],
    capacity: [
      { seats: 22000, setup: 'soccer', note: 'MLS. MLS Cup 2022 drew 22,384.' },
      { seats: 24000, setup: 'concert', note: 'Estimated. The Oct 6, 2026 research found no source for an end-stage figure.' },
    ],
    roof: 'open',
  },
  'sofi-stadium': {
    id: 'sofi-stadium',
    metroId: 'la',
    names: [{ name: 'SoFi Stadium' }],
    location: [-118.3392, 33.9535],
    capacity: [{ seats: 70240, fromYear: 2020, note: 'Standard setup. Expandable to 100,240 for the biggest events.' }],
    roof: 'covered',
  },
  'intuit-dome': {
    id: 'intuit-dome',
    metroId: 'la',
    names: [{ name: 'Intuit Dome' }],
    location: [-118.3415, 33.945],
    capacity: [{ seats: 18000, fromYear: 2024, note: 'Design figure; 18,300 also reported. No end-stage concert figure found.' }],
    roof: 'indoor',
  },
  'kia-forum': {
    id: 'kia-forum',
    metroId: 'la',
    names: [{ name: 'The Forum' }, { name: 'Kia Forum', from: '2022-04-04' }],
    location: [-118.342, 33.9582],
    capacity: [
      { seats: 17500, setup: 'concert', note: 'Marketed as 17,500; up to 18,000 (reported)' },
      { seats: 17505, setup: 'basketball', note: 'Reported' },
      { seats: 16005, setup: 'hockey', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'hollywood-bowl': {
    id: 'hollywood-bowl',
    metroId: 'la',
    strained: true,
    names: [{ name: 'Hollywood Bowl' }],
    // LA Phil: 39% came by bus in 2025 (26% in 2022), so about 61% by car or other (docs/archive/research/venue-egress-answer.md).
    carShare: 0.61,
    location: [-118.3391, 34.1122],
    capacity: [{ seats: 17500, note: 'LA Phil. An older figure is 17,376.' }],
    roof: 'open',
  },
  'rose-bowl': {
    id: 'rose-bowl',
    metroId: 'la',
    strained: true,
    names: [{ name: 'Rose Bowl' }],
    location: [-118.1676, 34.1613],
    capacity: [
      { seats: 89702, note: 'The stadium\'s all-seated figure. UCLA reports 91,136; aggregators say 92,542.' },
      { seats: 60000, setup: 'concert', note: 'Estimated: the City of Pasadena\'s expected crowd per Live Nation concert (Jan 18, 2023 agenda), docs/archive/research/concert-venue-figures-answer.md.' },
    ],
    roof: 'open',
  },
  'dignity-health-sports-park': {
    id: 'dignity-health-sports-park',
    metroId: 'la',
    names: [{ name: 'StubHub Center' }, { name: 'Dignity Health Sports Park', from: '2019-01-01' }],
    location: [-118.2629, 33.8624],
    capacity: [
      { seats: 27167, note: 'Soccer and football (the Galaxy round to 27,000)' },
      { seats: 30510, setup: 'concert', note: 'Reported' },
    ],
    roof: 'open',
  },
  'angel-stadium': {
    id: 'angel-stadium',
    metroId: 'la',
    names: [{ name: 'Angel Stadium' }],
    location: [-117.8817, 33.8003],
    capacity: [
      { seats: 45483, note: 'Through 2018 (reported)' },
      { seats: 45517, fromYear: 2019, note: 'MLB' },
    ],
    roof: 'open',
  },
  'pauley-pavilion': {
    id: 'pauley-pavilion',
    metroId: 'la',
    names: [{ name: 'Pauley Pavilion' }],
    location: [-118.4468, 34.0702],
    capacity: [{ seats: 13800, setup: 'basketball', fromYear: 2012, note: 'Since the 2012 renovation (Wikipedia infobox, checked Oct 6, 2026).' }],
    roof: 'indoor',
  },
  'galen-center': {
    id: 'galen-center',
    metroId: 'la',
    names: [{ name: 'Galen Center' }],
    location: [-118.28, 34.021],
    capacity: [{ seats: 10258, setup: 'basketball', note: 'Basketball capacity (Wikipedia infobox, checked Oct 6, 2026).' }],
    roof: 'indoor',
  },
  'honda-center': {
    id: 'honda-center',
    metroId: 'la',
    names: [{ name: 'Honda Center' }],
    location: [-117.8765, 33.8078],
    capacity: [
      { seats: 17174, setup: 'hockey', note: 'Hockey capacity in wide use. The arena site has also listed 17,732.' },
      { seats: 18336, setup: 'basketball', note: 'Reported' },
      { seats: 18900, setup: 'concert', note: 'Up to 18,900 (reported); theatre setup 8,400' },
    ],
    roof: 'indoor',
  },
  'santa-anita-park': {
    id: 'santa-anita-park',
    metroId: 'la',
    names: [{ name: 'Santa Anita Park' }],
    location: [-118.0459, 34.139],
    capacity: [{ seats: 26000, note: 'Grandstand, seated (reported; an event listing says 18,897). Infield events up to 50,000.' }],
    roof: 'covered',
  },
  'pomona-dragstrip': {
    id: 'pomona-dragstrip',
    metroId: 'la',
    names: [{ name: 'Auto Club Raceway at Pomona' }, { name: 'In-N-Out Burger Pomona Dragstrip', from: '2023-03-30' }],
    // Approximate: OpenStreetMap has no point for the strip itself.
    location: [-117.771, 34.091],
    capacity: [{ seats: 40000, note: 'Reported' }],
    roof: 'open',
  },
  'weingart-stadium': {
    id: 'weingart-stadium',
    metroId: 'la',
    names: [{ name: 'Weingart Stadium' }],
    location: [-118.1504, 34.0413],
    capacity: [{ seats: 22355, note: 'Reported, not confirmed with East LA College' }],
    roof: 'open',
  },
  'long-beach-arena': {
    id: 'long-beach-arena',
    metroId: 'la',
    names: [{ name: 'Long Beach Arena' }],
    location: [-118.1884, 33.7641],
    capacity: [
      { seats: 13000, note: 'Visit Long Beach; 13,500 also reported' },
      { seats: 14000, setup: 'basketball', note: 'Reported' },
      { seats: 14500, setup: 'concert', note: 'Up to 14,500 (reported); smaller setups from 10,500' },
    ],
    roof: 'indoor',
  },
  'fivepoint-amphitheatre': {
    id: 'fivepoint-amphitheatre',
    metroId: 'la',
    // Closed Oct 21, 2023. Kept so nights there (2017–2023) can be logged.
    names: [{ name: 'FivePoint Amphitheatre' }],
    // Approximate: the Great Park point, not the stage.
    location: [-117.7325, 33.6705],
    capacity: [{ seats: 12000, setup: 'concert', note: 'Reported (12,280 also reported). Closed Oct 21, 2023.' }],
    roof: 'open',
  },
  'drake-stadium': {
    id: 'drake-stadium',
    metroId: 'la',
    names: [{ name: 'Drake Stadium' }],
    location: [-118.4485, 34.0721],
    capacity: [{ seats: 11700, note: 'UCLA' }],
    roof: 'open',
  },
  'veterans-memorial-stadium': {
    id: 'veterans-memorial-stadium',
    metroId: 'la',
    names: [{ name: 'Veterans Memorial Stadium' }],
    location: [-118.1364, 33.8283],
    capacity: [{ seats: 11600, note: 'Reported' }],
    roof: 'open',
  },
  'fairplex-grandstand': {
    id: 'fairplex-grandstand',
    metroId: 'la',
    names: [{ name: 'Fairplex' }],
    location: [-117.7669, 34.0871],
    capacity: [
      { seats: 10000, note: 'Grandstand, seated (reported; Songkick lists 8,710)' },
      { seats: 15000, setup: 'concert', note: 'Up to 15,000 (reported)' },
    ],
    roof: 'open',
  },
  'titan-stadium': {
    id: 'titan-stadium',
    metroId: 'la',
    names: [{ name: 'Titan Stadium' }],
    location: [-117.887, 33.8866],
    capacity: [{ seats: 10000, setup: 'soccer', note: 'Cal State Fullerton' }],
    roof: 'open',
  },
  'pacific-amphitheatre': {
    id: 'pacific-amphitheatre',
    metroId: 'la',
    names: [{ name: 'Pacific Amphitheatre' }],
    location: [-117.9044, 33.6666],
    capacity: [{ seats: 8200, setup: 'concert', note: 'OC Fair, after the 2013 rebuild; 8,042 also reported' }],
    roof: 'open',
  },
  'dhsp-tennis-stadium': {
    id: 'dhsp-tennis-stadium',
    metroId: 'la',
    names: [{ name: 'Dignity Health Sports Park Tennis Stadium' }],
    // Approximate: beside the main stadium in Carson.
    location: [-118.262, 33.863],
    capacity: [{ seats: 8000, note: 'Tennis and boxing' }],
    roof: 'open',
  },
  'anaheim-convention-center': {
    id: 'anaheim-convention-center',
    metroId: 'la',
    names: [{ name: 'Anaheim Convention Center' }],
    location: [-117.9208, 33.8006],
    capacity: [{ seats: 7500, note: 'The arena, stadium-style. Halls A–D take 12,000–15,000 each in a theater setup.' }],
    roof: 'indoor',
  },
  'peacock-theater': {
    id: 'peacock-theater',
    metroId: 'la',
    names: [{ name: 'Microsoft Theater' }, { name: 'Peacock Theater', from: '2023-07-11' }],
    location: [-118.2671, 34.0445],
    capacity: [{ seats: 7100, setup: 'concert', note: 'AEG' }],
    roof: 'indoor',
  },
  'shrine-auditorium': {
    id: 'shrine-auditorium',
    metroId: 'la',
    names: [{ name: 'Shrine Auditorium' }],
    location: [-118.2814, 34.0234],
    capacity: [{ seats: 6300, setup: 'concert', note: 'The auditorium, seated (reported). The Expo Hall takes 5,000 standing and can run its own event the same night.' }],
    roof: 'indoor',
  },
  'youtube-theater': {
    id: 'youtube-theater',
    metroId: 'la',
    names: [{ name: 'YouTube Theater' }],
    location: [-118.3368, 33.9518],
    capacity: [{ seats: 6000, setup: 'concert', fromYear: 2021, note: 'Full setup; 4,400 and 3,400 reduced setups' }],
    roof: 'indoor',
  },
  'greek-theatre': {
    id: 'greek-theatre',
    metroId: 'la',
    strained: true,
    names: [{ name: 'Greek Theatre' }],
    location: [-118.2964, 34.1195],
    capacity: [{ seats: 5900, setup: 'concert', note: '5,870 seated' }],
    roof: 'open',
  },
  'la-tennis-center': {
    id: 'la-tennis-center',
    metroId: 'la',
    names: [{ name: 'Los Angeles Tennis Center' }],
    location: [-118.4484, 34.0701],
    capacity: [{ seats: 5800, note: 'UCLA' }],
    roof: 'open',
  },
  'championship-soccer-stadium': {
    id: 'championship-soccer-stadium',
    metroId: 'la',
    names: [{ name: 'Championship Soccer Stadium' }],
    location: [-117.7393, 33.6746],
    capacity: [
      { seats: 5000, setup: 'soccer', note: 'Orange County SC says "over 5,000"' },
      { seats: 5500, setup: 'soccer', fromYear: 2026, note: 'After the February 2026 expansion (reported)' },
    ],
    roof: 'open',
  },
  'bren-events-center': {
    id: 'bren-events-center',
    metroId: 'la',
    names: [{ name: 'Bren Events Center' }],
    location: [-117.8469, 33.6495],
    capacity: [{ seats: 5430, setup: 'basketball', note: 'Reported, not confirmed with UC Irvine' }],
    roof: 'indoor',
  },
  'walter-pyramid': {
    id: 'walter-pyramid',
    metroId: 'la',
    // Now the LBS Financial Credit Union Pyramid; the rename date is not confirmed, so the new
    // name is shown from 2026 and older nights keep the old one.
    names: [{ name: 'Walter Pyramid' }, { name: 'LBS Financial Credit Union Pyramid', from: '2026-01-01' }],
    location: [-118.1144, 33.7873],
    capacity: [
      { seats: 4200, setup: 'basketball', note: 'Reported; 4,000 fixed seats' },
      { seats: 5000, setup: 'concert', note: 'Concerts and events, 5,000 or more (reported). On the line.' },
    ],
    roof: 'indoor',
  },
  belasco: {
    id: 'belasco',
    metroId: 'la',
    names: [{ name: 'The Belasco' }],
    location: [-118.2594, 34.0404],
    capacity: [{ seats: 1500, setup: 'concert', note: 'Main theater, about 1,500. Under the map floor.' }],
    roof: 'indoor',
  },
  wiltern: {
    id: 'wiltern',
    metroId: 'la',
    names: [{ name: 'The Wiltern' }],
    location: [-118.3089, 34.0615],
    capacity: [{
      seats: 1850,
      setup: 'concert',
      note: 'About 1,850 for a concert. Some guides say about 2,300. Under the map floor.',
    }],
    roof: 'indoor',
  },
  'zipper-hall': {
    id: 'zipper-hall',
    metroId: 'la',
    names: [{ name: 'Zipper Concert Hall' }],
    location: [-118.2497, 34.0538],
    capacity: [{
      seats: 415,
      setup: 'concert',
      note: 'Herbert Zipper Concert Hall at the Colburn School. Published room is about 415-435 seats. Under the map floor.',
    }],
    roof: 'indoor',
  },
  // Buildings from her log outside Los Angeles. One record each. New York
  // is Citi Field only.
  'ohio-stadium': {
    id: 'ohio-stadium',
    metroId: 'columbus',
    names: [{ name: 'Ohio Stadium' }],
    location: [-83.0197, 40.0016],
    capacity: [{ seats: 102780, setup: 'football', note: 'Listed capacity' }],
    roof: 'open',
  },
  // New York, covered Oct 7, 2026. Capacities: docs/archive/research/new-york-venue-table-answer.md (33 buildings; Etihad Park left
  // out until it opens Jul 17, 2027). Car shares: docs/archive/research/new-york-city-type-answer.md, the "value to use" per venue;
  // where that research had no row, an estimate from the nearest comparable, as the research itself did, and labeled.
  // Kylie, Oct 6: one car share per venue (MetLife 0.85 though concerts run ~0.75; UBS 0.90 across 0.89/0.93).
  // The open grounds in the research's Table B (US Open grounds, Javits, the Great Lawn, Bethpage, Randall's Island
  // fields, Liberty State Park) are not venues: no fixed capacity. Events there are placed as points and sized only
  // by their own crowd figure (docs/unsized-events.md). Hard access is measured by scripts/venue-access.mjs, not set here.
  'metlife-stadium': {
    id: 'metlife-stadium',
    metroId: 'new-york',
    // Reported: ~87% by car for NFL (NJ Transit, 2010), ~75% for concerts, ~60% with lots closed. One value by Kylie's call.
    carShare: 0.85,
    names: [{ name: 'MetLife Stadium' }],
    location: [-74.0745, 40.8135],
    capacity: [
      { seats: 82500, setup: 'football', note: 'Reported; NFL record crowd 83,367. The 2026 World Cup cut 1,740 corner seats for the tournament only.' },
    ],
    roof: 'open',
  },
  'yankee-stadium': {
    id: 'yankee-stadium',
    metroId: 'new-york',
    // Reported: MTA put ~45% on transit (2011); a NYC DOT intercept survey found 61% by car (2012). The research splits it at 50%.
    carShare: 0.5,
    names: [{ name: 'Yankee Stadium' }],
    location: [-73.9262, 40.8296],
    capacity: [
      { seats: 46537, setup: 'baseball', note: 'Official (team media guide)' },
      { seats: 28743, setup: 'soccer', note: 'Reported; NYCFC standard setup, expandable to 47,309' },
      { seats: 54251, setup: 'football', note: 'Reported' },
    ],
    roof: 'open',
  },
  'belmont-park': {
    id: 'belmont-park',
    metroId: 'new-york',
    // Official, pre-rebuild: the LIRR carried 17–35% of Belmont Stakes crowds, 2008–2017 (Belmont FEIS).
    carShare: 0.75,
    names: [{ name: 'Belmont Park' }],
    location: [-73.7226, 40.7144],
    // Big-day grounds figure. Ordinary race days draw well under 5,000; only the Stakes and the Breeders' Cup matter.
    // The Belmont Stakes ran at Saratoga in 2024, 2025 and 2026 and returns here in 2027. The rebuilt track reopened Sep 2026;
    // the new grandstand (~10,000) finishes in early 2027. Shares its site and LIRR station with UBS Arena.
    capacity: [{ seats: 50000, note: 'Reported; grounds in the big-day configuration' }],
    roof: 'covered',
  },
  'citi-field': {
    id: 'citi-field',
    metroId: 'new-york',
    // Reported: MTA counted 25–30% by subway at an average game (2011); the research adds ~7% for the LIRR. Lots are shrinking for the casino build.
    carShare: 0.6,
    names: [{ name: 'Citi Field' }],
    location: [-73.8458, 40.7571],
    capacity: [
      { seats: 41800, setup: 'baseball', note: 'Reported, 2009–2011' },
      { seats: 41922, setup: 'baseball', fromYear: 2012, note: 'Official; 45,000+ with standing room (record 45,186, 2013 All-Star Game)' },
    ],
    roof: 'open',
  },
  'aqueduct': {
    id: 'aqueduct',
    metroId: 'new-york',
    // Estimated, nearest comparable Citi Field: the A train stops at the gate, but the casino's lots are large.
    carShare: 0.6,
    names: [{ name: 'Aqueduct Racetrack' }],
    location: [-73.8303, 40.672],
    // Live racing ended Jun 28, 2026 (moved to Belmont); the casino stays. fromYear is year-granular, but the research says the
    // historic figure was overstated for all of modern use anyway: the final race day drew 6,866.
    capacity: [
      { seats: 17000, note: 'Reported, historic (40,000 total); badly overstated for modern racing days' },
      { seats: 7000, fromYear: 2026, note: 'Estimated; racing ended 2026-06-28 and the last card drew 6,866' },
    ],
    roof: 'open',
  },
  'sports-illustrated-stadium': {
    id: 'sports-illustrated-stadium',
    metroId: 'new-york',
    // Estimated, nearest comparable Prudential Center: Harrison PATH is three blocks away and the club warns parking is scarce.
    carShare: 0.5,
    names: [{ name: 'Red Bull Arena' }, { name: 'Sports Illustrated Stadium', from: '2024-12-11' }],
    location: [-74.1503, 40.7368],
    capacity: [{ seats: 25000, setup: 'soccer', note: 'Official' }],
    roof: 'covered',
  },
  'arthur-ashe-stadium': {
    id: 'arthur-ashe-stadium',
    metroId: 'new-york',
    // Reported: the USTA says more than 60% of US Open fans take mass transit.
    carShare: 0.37,
    names: [{ name: 'Arthur Ashe Stadium' }],
    location: [-73.8465, 40.7498],
    // The US Open's daily grounds crowd (record 73,201) is three times this room. A US Open day is sized by that figure on the event, not by Ashe.
    capacity: [{ seats: 23771, note: 'Official; finals draw ~28,000 with standing room' }],
    // Retractable, like T-Mobile Park: closes for rain.
    roof: 'covered',
  },
  'madison-square-garden': {
    id: 'madison-square-garden',
    metroId: 'new-york',
    // Estimated (range 15–30%): sits on Penn Station, no parking on site, inside the congestion zone. No count since 2003.
    carShare: 0.2,
    names: [{ name: 'Madison Square Garden' }],
    location: [-73.9934, 40.7505],
    capacity: [
      { seats: 19812, setup: 'basketball', note: 'Reported' },
      { seats: 18006, setup: 'hockey', note: 'Reported' },
      { seats: 19500, setup: 'concert', note: 'Reported, end-stage; 20,789 is the centre-ring maximum, up to 22,000 in the round' },
    ],
    roof: 'indoor',
  },
  'ubs-arena': {
    id: 'ubs-arena',
    metroId: 'new-york',
    // Official, LIRR observed: rail carried 8.8% of the gate at Islanders games and 5.3% at other events (2022). One value by Kylie's call.
    carShare: 0.9,
    names: [{ name: 'UBS Arena' }],
    location: [-73.7259, 40.711],
    capacity: [
      { seats: 17255, setup: 'hockey', note: 'Reported; 17,250 also cited' },
      { seats: 19000, setup: 'concert', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'barclays-center': {
    id: 'barclays-center',
    metroId: 'new-york',
    // Reported, observed: Sam Schwartz TDM survey of 5,633 fans across 8 Nets games, 2013. Built with almost no parking by design.
    carShare: 0.25,
    names: [{ name: 'Barclays Center' }],
    location: [-73.9752, 40.6827],
    capacity: [
      { seats: 17732, setup: 'basketball', note: 'Official' },
      { seats: 15795, setup: 'hockey', note: 'Official; Islanders 2015–2020' },
      { seats: 19000, setup: 'concert', note: 'Official (AEG); 20,000 reported' },
    ],
    roof: 'indoor',
  },
  'prudential-center': {
    id: 'prudential-center',
    metroId: 'new-york',
    // Reported, old: 53% of Devils fans on mass transit over two months of 2007–08. Nothing newer found.
    carShare: 0.45,
    names: [{ name: 'Prudential Center' }],
    location: [-74.1711, 40.7336],
    capacity: [
      { seats: 17625, setup: 'hockey', note: 'Official, before 2013' },
      { seats: 16592, setup: 'hockey', fromYear: 2013, note: 'Official' },
      { seats: 16514, setup: 'hockey', fromYear: 2015, note: 'Official' },
      { seats: 18711, setup: 'basketball', note: 'Official (Seton Hall)' },
      { seats: 19500, setup: 'concert', note: 'Venue: "up to 19,500 fans for concerts" (via Pollstar, Jul 2026); record 19,151 for Zach Bryan, Mar 15, 2024. Was 17,500 here until Oct 7, 2026 (docs/archive/research/concert-venue-figures-answer.md).' },
    ],
    roof: 'indoor',
  },
  'pnc-bank-arts-center': {
    id: 'pnc-bank-arts-center',
    metroId: 'new-york',
    // Estimated: no rail at the venue; one Parkway exit. Sets the top of the range with Jones Beach.
    carShare: 0.97,
    names: [{ name: 'PNC Bank Arts Center' }],
    location: [-74.1756, 40.3934],
    capacity: [{ seats: 17500, setup: 'concert', note: 'Reported; 7,000 seats plus ~10,500 lawn' }],
    roof: 'covered',
  },
  'wien-stadium': {
    id: 'wien-stadium',
    metroId: 'new-york',
    // Estimated: college football draws an older suburban crowd; the 1 train is at 215 St.
    carShare: 0.45,
    // ESPN says "Lawrence A. Wien Stadium"; the field is Robert K. Kraft Field.
    names: [{ name: 'Lawrence A. Wien Stadium' }, { name: 'Robert K. Kraft Field at Lawrence A. Wien Stadium' }],
    location: [-73.9165, 40.8732],
    capacity: [{ seats: 17000, setup: 'football', note: 'Official (Columbia)' }],
    roof: 'open',
  },
  'meadowlands-racetrack': {
    id: 'meadowlands-racetrack',
    metroId: 'new-york',
    // Estimated: free surface lots; the rail station runs only on stadium days.
    carShare: 0.95,
    names: [{ name: 'Meadowlands Racetrack' }],
    location: [-74.0716, 40.8158],
    // Under the floor as a building. Hambletonian Day (one a year; 16,465 in 2024, official) carries its own crowd figure on the event.
    capacity: [{ seats: 2200, note: 'Reported; grandstand seats only' }],
    roof: 'covered',
  },
  'nassau-coliseum': {
    id: 'nassau-coliseum',
    metroId: 'new-york',
    // Estimated, nearest comparable UBS Arena's non-Islanders events: no rail within three miles.
    carShare: 0.95,
    // Still open and lightly used (LI Nets, NY Riptide, a few concerts); Sands dropped its casino bid Apr 2025 and the future is undecided.
    names: [{ name: 'NYCB Live: Nassau Veterans Memorial Coliseum' }, { name: 'Nassau Veterans Memorial Coliseum', from: '2020-01-01' }],
    location: [-73.5904, 40.7229],
    capacity: [
      { seats: 16170, note: 'Reported, before the 2017 renovation' },
      { seats: 14000, fromYear: 2017, note: 'Estimated; 14,000 (amNY) vs 16,000 (NY Post), neither with a setup' },
    ],
    roof: 'indoor',
  },
  'jones-beach-theater': {
    id: 'jones-beach-theater',
    metroId: 'new-york',
    // Estimated: no rail, and the concert bus no longer runs. Barrier island with three parkways in.
    carShare: 0.97,
    names: [
      { name: 'Nikon at Jones Beach Theater' },
      { name: 'Northwell Health at Jones Beach Theater', from: '2017-01-01' },
      { name: 'Northwell at Jones Beach Theater', from: '2025-01-01' },
    ],
    location: [-73.5023, 40.601],
    capacity: [{ seats: 14000, setup: 'concert', note: "Official (Live Nation, 2017); 15,000 reported. The separate Bay Stage holds 5,000 standing." }],
    roof: 'open',
  },
  'forest-hills-stadium': {
    id: 'forest-hills-stadium',
    metroId: 'new-york',
    // Estimated: no parking at the venue or on nearby streets; the venue tells fans not to drive.
    carShare: 0.15,
    names: [{ name: 'Forest Hills Stadium' }],
    location: [-73.8502, 40.7197],
    capacity: [{ seats: 14000, setup: 'concert', note: 'Reported; some guides say up to 16,000' }],
    roof: 'open',
  },
  'louis-armstrong-stadium': {
    id: 'louis-armstrong-stadium',
    metroId: 'new-york',
    carShare: 0.37,
    names: [{ name: 'Louis Armstrong Stadium' }],
    location: [-73.8454, 40.751],
    capacity: [{ seats: 14000, fromYear: 2018, note: 'Reported; rebuilt 2018. 14,069 could not be confirmed.' }],
    // Retractable.
    roof: 'covered',
  },
  'lavalle-stadium': {
    id: 'lavalle-stadium',
    metroId: 'new-york',
    // Estimated, nearest comparable UBS Arena's non-Islanders events: Suffolk County, campus lots, no rail at the gate.
    carShare: 0.9,
    names: [{ name: 'Kenneth P. LaValle Stadium' }],
    location: [-73.1237, 40.9188],
    capacity: [
      { seats: 10300, setup: 'football', note: 'Official, 2002–2016' },
      { seats: 12300, setup: 'football', fromYear: 2017, note: 'Official; 10,300 seats plus 2,000 standing' },
    ],
    roof: 'open',
  },
  'shuart-stadium': {
    id: 'shuart-stadium',
    metroId: 'new-york',
    // Estimated: same corridor as Nassau Coliseum; campus residents walk.
    carShare: 0.8,
    names: [{ name: 'James M. Shuart Stadium' }],
    location: [-73.5964, 40.7158],
    capacity: [{ seats: 11929, note: 'Reported, since 2013 (Hofstra lacrosse)' }],
    roof: 'open',
  },
  'maimonides-park': {
    id: 'maimonides-park',
    metroId: 'new-york',
    // Estimated: a four-line subway terminal, but surface lots next to the ballpark.
    carShare: 0.4,
    names: [{ name: 'MCU Park' }, { name: 'Maimonides Park', from: '2021-01-01' }],
    location: [-73.9845, 40.5745],
    capacity: [{ seats: 7000, setup: 'baseball', note: 'Official; up to 2,500 standing. 7,500 seats before 2016.' }],
    roof: 'open',
  },
  'usta-grandstand': {
    id: 'usta-grandstand',
    metroId: 'new-york',
    carShare: 0.37,
    names: [{ name: 'USTA Grandstand' }],
    location: [-73.845, 40.748],
    capacity: [{ seats: 8000, fromYear: 2016, note: 'Estimated; the research could not source a figure' }],
    roof: 'open',
  },
  'siuh-community-park': {
    id: 'siuh-community-park',
    metroId: 'new-york',
    // Estimated: ferry terminal and the Staten Island Railway at the door, a ballpark lot beside it.
    carShare: 0.6,
    names: [{ name: 'Richmond County Bank Ballpark' }, { name: 'SIUH Community Park', from: '2022-04-01' }],
    location: [-74.0768, 40.6453],
    // The FerryHawks averaged 1,232 in 2025; it clears 5,000 only on fireworks nights.
    capacity: [{ seats: 7171, setup: 'baseball', note: 'Reported' }],
    roof: 'open',
  },
  'fairfield-properties-ballpark': {
    id: 'fairfield-properties-ballpark',
    metroId: 'new-york',
    // Estimated, nearest comparable UBS Arena's non-Islanders events: central Suffolk, 2.5 miles from the LIRR.
    carShare: 0.9,
    names: [{ name: 'Bethpage Ballpark' }, { name: 'Fairfield Properties Ballpark', from: '2021-01-01' }],
    location: [-73.1958, 40.7957],
    capacity: [{ seats: 6002, setup: 'baseball', note: 'Official (Long Island Ducks)' }],
    roof: 'open',
  },
  'pacha-new-york': {
    id: 'pacha-new-york',
    metroId: 'new-york',
    // Estimated, nearest comparable Barclays Center: no lot, the L train nearby, a free shuttle from the venue.
    carShare: 0.25,
    // Closed all of 2025 after failing inspection; the owner went bankrupt. Reopened as Pacha in June 2026, seasonal June–October.
    names: [{ name: 'The Brooklyn Mirage' }, { name: 'Pacha New York', from: '2026-06-01' }],
    location: [-73.9268, 40.7105],
    capacity: [{ seats: 6000, setup: 'concert', note: "Estimated; the Mirage's widely cited figure. Pacha has published none." }],
    roof: 'open',
  },
  'radio-city-music-hall': {
    id: 'radio-city-music-hall',
    metroId: 'new-york',
    // Estimated: Midtown walk-ins, no parking on site, inside the congestion zone.
    carShare: 0.15,
    names: [{ name: 'Radio City Music Hall' }],
    location: [-73.98, 40.76],
    capacity: [{ seats: 5960, setup: 'concert', note: 'Reported; some listings say 6,015' }],
    roof: 'indoor',
  },
  'carnesecca-arena': {
    id: 'carnesecca-arena',
    metroId: 'new-york',
    // Estimated: campus arena with its own lots and no subway within walking distance. St. John's big games are at the Garden.
    carShare: 0.5,
    names: [{ name: 'Carnesecca Arena' }],
    location: [-73.7948, 40.7225],
    capacity: [{ seats: 5602, setup: 'basketball', note: "Official (St. John's); 5,260 reported" }],
    roof: 'indoor',
  },
  'infosys-theater-msg': {
    id: 'infosys-theater-msg',
    metroId: 'new-york',
    carShare: 0.2,
    // Inside Madison Square Garden: a show here and a game upstairs stack on one night (the theater rule). The 2018 and 2023
    // rename months were not researched; the years are right.
    names: [
      { name: 'The Theater at Madison Square Garden' },
      { name: 'Hulu Theater at Madison Square Garden', from: '2018-01-01' },
      { name: 'The Theater at Madison Square Garden', from: '2023-01-01' },
      { name: 'Infosys Theater at Madison Square Garden', from: '2026-02-02' },
    ],
    location: [-73.9934, 40.7505],
    capacity: [{ seats: 5600, setup: 'concert', note: 'Official; 2,000–5,600 depending on the setup' }],
    roof: 'indoor',
  },
  'summerstage': {
    id: 'summerstage',
    metroId: 'new-york',
    // Estimated, nearest comparable Radio City: inside Central Park, no parking.
    carShare: 0.15,
    names: [{ name: 'SummerStage' }, { name: 'Rumsey Playfield' }],
    location: [-73.9708, 40.7726],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Official (City Parks Foundation); 5,500 reported after the 2019 renovation' }],
    roof: 'open',
  },
  'icahn-stadium': {
    id: 'icahn-stadium',
    metroId: 'new-york',
    // Estimated: an island reached by the RFK Bridge, a footbridge and ferries; festivals ban personal parking.
    carShare: 0.1,
    names: [{ name: 'Icahn Stadium' }],
    location: [-73.9241, 40.7955],
    // The festival fields around it (Governors Ball's old home, Electric Zoo) have no fixed capacity; those are events placed as points.
    capacity: [{ seats: 5000, note: 'Official (USATF); designed to take 5,000 more on bleachers' }],
    roof: 'covered',
  },
  'ford-amphitheater': {
    id: 'ford-amphitheater',
    metroId: 'new-york',
    carShare: 0.4,
    names: [{ name: 'Ford Amphitheater at Coney Island' }],
    location: [-73.9834, 40.5729],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported; exactly on the floor' }],
    roof: 'covered',
  },
  'westchester-county-center': {
    id: 'westchester-county-center',
    metroId: 'new-york',
    // Estimated: five minutes from White Plains Metro-North, 700+ county spaces next door.
    carShare: 0.85,
    names: [{ name: 'Westchester County Center' }],
    location: [-73.7788, 41.0371],
    // On the floor: 5,000 is the usual figure; Bandsintown lists 4,264.
    capacity: [{ seats: 5000, note: 'Reported; 4,264 also listed' }],
    roof: 'indoor',
  },
  'coffey-field': {
    id: 'coffey-field',
    metroId: 'new-york',
    // Estimated, nearest comparable Columbia: a Bronx campus with the 4, B and D at Fordham Road.
    carShare: 0.45,
    names: [{ name: 'Jack Coffey Field' }, { name: 'Moglia Stadium at Jack Coffey Field' }],
    location: [-73.8836, 40.8615],
    capacity: [{ seats: 7000, setup: 'football', note: 'Official (Fordham)' }],
    roof: 'open',
  },
  'petco-park': {
    id: 'petco-park',
    metroId: 'san-diego',
    names: [{ name: 'Petco Park' }],
    // Estimated: MTS counts about 8,000 trolley riders on a sellout against 39,860 seats (docs/archive/research/venue-egress-answer.md).
    carShare: 0.8,
    location: [-117.1569, 32.7072],
    capacity: [{ seats: 39860, setup: 'baseball', note: 'Fixed seats (MLB). 42,445 is also reported and likely counts standing room.' }],
    roof: 'open',
  },
  // ---- San Diego, from docs/archive/research/san-diego-venue-table-answer.md (Oct 6, 2026) ----
  'san-diego-stadium': {
    id: 'san-diego-stadium',
    metroId: 'san-diego',
    // Closed March 2020, demolished by March 22, 2021. Kept so nights there (2016–2019) can be logged.
    names: [
      { name: 'Qualcomm Stadium' },
      { name: 'SDCCU Stadium', from: '2017-09-19' },
      { name: 'San Diego Stadium', from: '2021-01-01' },
    ],
    // Approximate: the site is now Snapdragon Stadium's park; OpenStreetMap has no point for the old building.
    location: [-117.1196, 32.7831],
    capacity: [
      { seats: 70561, setup: 'football', note: 'Chargers setup (reported)' },
      { seats: 54000, setup: 'football', fromYear: 2017, note: 'Aztecs setup after the Chargers left (reported)' },
    ],
    roof: 'open',
  },
  'snapdragon-stadium': {
    id: 'snapdragon-stadium',
    metroId: 'san-diego',
    names: [{ name: 'Snapdragon Stadium' }],
    location: [-117.1224, 32.7842],
    capacity: [
      { seats: 35000, setup: 'football', note: 'SDSU (official); temporary end-zone seats take it to about 40,000' },
      { seats: 32000, setup: 'soccer', note: "The Wave's 2022 setup (reported)" },
      { seats: 35000, setup: 'soccer', fromYear: 2023, note: 'Reported; the soccer record is 34,506' },
    ],
    roof: 'open',
  },
  'del-mar-fairgrounds': {
    id: 'del-mar-fairgrounds',
    metroId: 'san-diego',
    names: [{ name: 'Del Mar Fairgrounds' }],
    // Approximate: OpenStreetMap had no point for the grounds.
    location: [-117.262, 32.9765],
    capacity: [
      { seats: 14000, note: 'Grandstand (reported; the setup is not stated)' },
      { seats: 40000, setup: 'concert', note: 'Festival grounds, per day, as KAABOO drew 2015–2019 (reported); a full-site buyout is 35,000' },
    ],
    roof: 'open',
  },
  'embarcadero-marina-park-north': {
    id: 'embarcadero-marina-park-north',
    metroId: 'san-diego',
    names: [{ name: 'Embarcadero Marina Park North' }],
    // Approximate: the Wonderfront festival grounds, the park plus the piers.
    location: [-117.1715, 32.7083],
    capacity: [{ seats: 30000, setup: 'concert', note: 'Festival, standing: the maximum occupancy across the sites (reported, 2019); organizers aim for 12,500–15,000 a day' }],
    roof: 'open',
  },
  'north-island-amphitheatre': {
    id: 'north-island-amphitheatre',
    metroId: 'san-diego',
    names: [
      { name: 'Sleep Train Amphitheatre' },
      { name: 'Mattress Firm Amphitheatre', from: '2017-02-01' },
      { name: 'North Island Credit Union Amphitheatre', from: '2018-11-01' },
    ],
    location: [-117.0058, 32.5881],
    capacity: [{ seats: 20500, setup: 'concert', note: 'Reported (19,442 also reported): about 9,468 reserved seats and 10,024 on the lawn' }],
    roof: 'covered',
  },
  'pechanga-arena': {
    id: 'pechanga-arena',
    metroId: 'san-diego',
    // Valley View Casino Center through 2018; the Pechanga name took over late in 2018 (month not confirmed). The deal runs through 2026.
    names: [{ name: 'Valley View Casino Center' }, { name: 'Pechanga Arena', from: '2018-12-01' }],
    location: [-117.2123, 32.7553],
    capacity: [
      { seats: 16100, note: 'Boxing and MMA (reported)' },
      { seats: 14500, setup: 'basketball', note: 'Reported' },
      { seats: 12920, setup: 'hockey', note: 'Hockey and lacrosse (reported)' },
      { seats: 12000, setup: 'concert', note: 'Estimated for a typical end-stage show; sources give 8,900–14,800' },
    ],
    roof: 'indoor',
  },
  'waterfront-park': {
    id: 'waterfront-park',
    metroId: 'san-diego',
    names: [{ name: 'Waterfront Park' }],
    location: [-117.1721, 32.7222],
    capacity: [{ seats: 15000, setup: 'concert', note: 'Festival, standing, per day (CRSSD; reported)' }],
    roof: 'open',
  },
  'viejas-arena': {
    id: 'viejas-arena',
    metroId: 'san-diego',
    names: [{ name: 'Cox Arena' }, { name: 'Viejas Arena', from: '2009-07-01' }],
    location: [-117.0745, 32.7738],
    capacity: [
      { seats: 12414, setup: 'basketball', note: 'SDSU (official)' },
      { seats: 12200, setup: 'concert', note: 'End-stage (reported); in the round 12,845' },
    ],
    roof: 'indoor',
  },
  'rady-shell': {
    id: 'rady-shell',
    metroId: 'san-diego',
    names: [{ name: 'The Rady Shell at Jacobs Park' }],
    location: [-117.1659, 32.7048],
    capacity: [{ seats: 10000, setup: 'concert', fromYear: 2021, note: 'The maximum, allowed six nights a year (official). Most nights seat 3,500–4,700, under the floor.' }],
    roof: 'open',
  },
  'frontwave-arena': {
    id: 'frontwave-arena',
    metroId: 'san-diego',
    names: [{ name: 'Frontwave Arena' }],
    location: [-117.3147, 33.2075],
    capacity: [
      { seats: 7500, setup: 'concert', fromYear: 2024, note: 'Reported' },
      { seats: 6000, setup: 'basketball', fromYear: 2024, note: 'Reported' },
      { seats: 5500, setup: 'soccer', fromYear: 2024, note: 'Indoor soccer (reported)' },
    ],
    roof: 'indoor',
  },
  'torero-stadium': {
    id: 'torero-stadium',
    metroId: 'san-diego',
    names: [{ name: 'Torero Stadium' }],
    location: [-117.1837, 32.7731],
    capacity: [{ seats: 6000, setup: 'soccer', note: 'Football and soccer (USD, official)' }],
    roof: 'open',
  },
  'jenny-craig-pavilion': {
    id: 'jenny-craig-pavilion',
    metroId: 'san-diego',
    names: [{ name: 'Jenny Craig Pavilion' }],
    location: [-117.1837, 32.7745],
    capacity: [{ seats: 5100, setup: 'basketball', note: 'Basketball and volleyball (USD, official)' }],
    roof: 'indoor',
  },
  'san-diego-convention-center': {
    id: 'san-diego-convention-center',
    metroId: 'san-diego',
    names: [{ name: 'San Diego Convention Center' }],
    location: [-117.1619, 32.7064],
    capacity: [{ seats: 6500, note: 'Hall H, seated (reported). Comic-Con sells about 135,000 badges over four days; no daily count is published.' }],
    roof: 'indoor',
  },
  // ---- Seattle, from docs/archive/research/seattle-venue-table-answer.md (Oct 6, 2026): King, Pierce and Snohomish counties, plus the Gorge ----
  'husky-stadium': {
    id: 'husky-stadium',
    metroId: 'seattle',
    // Official, observed: UW's 2022 game-day survey, 37% by car (29% carpool, 3% alone, 5% rideshare), 45% transit (docs/archive/research/seattle-city-type-answer.md).
    carShare: 0.37,
    // The field is "Alaska Airlines Field at Husky Stadium"; ESPN and the schedule say Husky Stadium.
    names: [{ name: 'Husky Stadium' }],
    location: [-122.3016, 47.6503],
    capacity: [{ seats: 72132, setup: 'football', note: 'Washington Huskies (official, 2026); 70,083 before (reported)' }],
    // Cantilever roofs over most sideline seats; the field and ends are open (the research's reading).
    roof: 'covered',
  },
  'lumen-field': {
    id: 'lumen-field',
    metroId: 'seattle',
    // Reported planning baseline: 60% by car (49% personal vehicle, 11% rideshare), Kimley-Horn's June 2026 World Cup mobility deck; a 2002 survey had 70–75%.
    carShare: 0.6,
    names: [{ name: 'CenturyLink Field' }, { name: 'Lumen Field', from: '2020-11-19' }],
    location: [-122.3316, 47.5953],
    capacity: [
      { seats: 68740, setup: 'football', note: 'Seahawks (official); expandable to 72,000 for the biggest events' },
      { seats: 37722, setup: 'soccer', note: 'Sounders setup (MLS). The Reign open about 10,000 lower-bowl seats (reported).' },
      { seats: 51556, setup: 'concert', note: 'Reported: the sold-out count for The Weeknd, Aug 25, 2022 (Pollstar), the one end-stage figure found (docs/archive/research/concert-venue-figures-answer.md).' },
    ],
    // Roof over about 70% of seats; the field is open (the research's reading). Called "Seattle Stadium" for the 2026 World Cup.
    roof: 'covered',
  },
  't-mobile-park': {
    id: 't-mobile-park',
    metroId: 'seattle',
    // Estimated (65–75%): the only count is 82% from a 2012 study, before every Link extension since; set between that and Lumen Field's 60%.
    carShare: 0.7,
    names: [{ name: 'Safeco Field' }, { name: 'T-Mobile Park', from: '2019-01-01' }],
    location: [-122.3323, 47.5915],
    capacity: [
      { seats: 47943, setup: 'baseball', note: 'Mariners (official, MLB.com 2026; 47,929 was the 2019 figure, 47,715 in 2018)' },
      { seats: 30144, setup: 'football', note: 'One-off football setup (reported)' },
    ],
    // Retractable: an umbrella that closes for rain, with open sides. Closest of the three roof kinds.
    roof: 'covered',
  },
  'pacific-raceways': {
    id: 'pacific-raceways',
    metroId: 'seattle',
    // Estimated: no transit, on-site parking.
    carShare: 0.98,
    names: [{ name: 'Pacific Raceways' }],
    location: [-122.1491, 47.3224],
    capacity: [{ seats: 30000, note: 'Race days (reported). Standing and grandstand together.' }],
    roof: 'open',
    // Fallback until the measure runs: one road in, wooded hillside site (the research).
    strained: true,
  },
  // Satellite in George, three hours out, the way Empire Polo Club rides with Los Angeles.
  'gorge-amphitheatre': {
    id: 'gorge-amphitheatre',
    metroId: 'seattle',
    // Estimated: car or charter only; private shuttles from Quincy, Ephrata and George.
    carShare: 0.98,
    names: [{ name: 'Gorge Amphitheatre' }, { name: 'The Gorge' }],
    // Approximate (the research's figure); OpenStreetMap has no point for the amphitheatre itself.
    location: [-119.996, 47.1028],
    capacity: [
      { seats: 27500, setup: 'concert', note: "Seats and lawn (reported); 20,000 is also quoted. Festival days are capped at 25,000 by Grant County (official)." },
    ],
    roof: 'open',
    strained: true,
  },
  'seattle-center': {
    id: 'seattle-center',
    metroId: 'seattle',
    // Estimated: no figure; Climate Pledge Arena concerts (~70%), festival crowds a little more transit-minded.
    carShare: 0.65,
    names: [{ name: 'Seattle Center' }],
    location: [-122.3497, 47.6213],
    capacity: [{ seats: 26000, setup: 'concert', note: 'A Bumbershoot-size festival on the grounds, standing (estimated)' }],
    roof: 'open',
  },
  'tacoma-dome': {
    id: 'tacoma-dome',
    metroId: 'seattle',
    // Estimated: Tacoma Dome Station is three blocks away, but Sounder runs mainly at weekday peak.
    carShare: 0.85,
    names: [{ name: 'Tacoma Dome' }],
    location: [-122.427, 47.2369],
    capacity: [
      { seats: 21000, note: 'Maximum (official)' },
      { seats: 20722, setup: 'basketball', note: 'Official' },
      { seats: 17000, setup: 'concert', note: 'A typical end-stage show (estimated)' },
    ],
    roof: 'indoor',
  },
  'climate-pledge-arena': {
    id: 'climate-pledge-arena',
    metroId: 'seattle',
    // Estimated from an official, observed transit share: 27% rode transit in Oct 2024–Sep 2025 (the arena's dashboard; concerts 20%), about 10% walked; car is the remainder. Concerts run nearer 70%.
    carShare: 0.63,
    // KeyArena closed Oct 5, 2018 for the rebuild and reopened as Climate Pledge Arena in October 2021.
    names: [{ name: 'KeyArena' }, { name: 'Climate Pledge Arena', from: '2018-10-05' }],
    location: [-122.354, 47.6219],
    capacity: [
      { seats: 17072, setup: 'basketball', note: 'KeyArena (official)' },
      { seats: 15177, setup: 'hockey', note: 'KeyArena (reported)' },
      { seats: 16641, setup: 'concert', note: 'KeyArena, end stage (reported); 17,459 in the round' },
      { seats: 18300, setup: 'basketball', fromYear: 2021, note: 'Official' },
      { seats: 17100, setup: 'hockey', fromYear: 2021, note: 'Kraken (official)' },
      { seats: 17200, setup: 'concert', fromYear: 2021, note: 'End stage (official); 18,600 in the round' },
    ],
    roof: 'indoor',
  },
  'white-river-amphitheatre': {
    id: 'white-river-amphitheatre',
    metroId: 'seattle',
    // Estimated: no transit; the shuttle is park-and-ride. A sellout is about 20,000 people and parking for about 6,800 cars.
    carShare: 0.97,
    names: [{ name: 'White River Amphitheatre' }],
    location: [-122.1121, 47.2375],
    capacity: [{ seats: 16000, setup: 'concert', note: 'Reserved seats under a roof plus lawn (official). 20,000 before 2015.' }],
    roof: 'open',
    strained: true,
  },
  'everett-memorial-stadium': {
    id: 'everett-memorial-stadium',
    metroId: 'seattle',
    // Estimated: local Everett Transit; on-site lots.
    carShare: 0.93,
    names: [{ name: 'Everett Memorial Stadium' }],
    location: [-122.2036, 47.9657],
    capacity: [{ seats: 12000, setup: 'football', note: 'Reported' }],
    roof: 'open',
  },
  'memorial-stadium-seattle': {
    id: 'memorial-stadium-seattle',
    metroId: 'seattle',
    // Closed for the rebuild; reopens in 2027 with 8,000 seats (the research). Kept so earlier nights can be logged.
    names: [{ name: 'Seattle Center Memorial Stadium' }, { name: 'Memorial Stadium' }],
    // Approximate: the north edge of Seattle Center; OpenStreetMap has no point while the site is a construction zone.
    location: [-122.348, 47.6228],
    capacity: [{ seats: 12000, note: 'Before the rebuild (reported, Wikipedia infobox; the Oct 6, 2026 research could not confirm it). The new stadium: 6,500 seats, 8,000 capacity (official).' }],
    roof: 'open',
  },
  'washington-state-fair-grandstand': {
    id: 'washington-state-fair-grandstand',
    metroId: 'seattle',
    // Estimated, partly reported: 38,563 Fair Express riders in 2014 against about a million fairgoers; special Sounder trains two Saturdays.
    carShare: 0.94,
    // Ticketmaster lists the grounds as the Washington State Fair Events Center.
    names: [{ name: 'Washington State Fair Events Center' }, { name: 'Umpqua Bank Grandstand' }],
    // Approximate (the research's figure); the fairgrounds in Puyallup.
    location: [-122.2965, 47.1835],
    capacity: [{ seats: 10200, setup: 'concert', note: 'Grandstand concerts during the fair (official)' }],
    roof: 'covered',
  },
  'alaska-airlines-arena': {
    id: 'alaska-airlines-arena',
    metroId: 'seattle',
    // Estimated: no figure; Husky Stadium's 37% (same station) adjusted toward driving for weeknight indoor games.
    carShare: 0.5,
    names: [{ name: 'Hec Edmundson Pavilion' }, { name: 'Alaska Airlines Arena at Hec Edmundson Pavilion' }, { name: 'Alaska Airlines Arena' }],
    location: [-122.3021, 47.6522],
    capacity: [{ seats: 10000, setup: 'basketball', note: 'Washington Huskies (official)' }],
    roof: 'indoor',
  },
  'angel-of-the-winds-arena': {
    id: 'angel-of-the-winds-arena',
    metroId: 'seattle',
    // Estimated: Everett Station about 15 minutes' walk; downtown lots.
    carShare: 0.92,
    names: [{ name: 'Xfinity Arena' }, { name: 'Angel of the Winds Arena', from: '2017-12-13' }],
    location: [-122.203, 47.9786],
    capacity: [
      { seats: 10000, setup: 'concert', note: 'Maximum, floor standing (official); 9,000 seated' },
      { seats: 8149, setup: 'hockey', note: 'Everett Silvertips (official)' },
    ],
    roof: 'indoor',
  },
  'emerald-downs': {
    id: 'emerald-downs',
    metroId: 'seattle',
    // Estimated: large on-site lots; a free shuttle from Auburn Station (older program).
    carShare: 0.95,
    names: [{ name: 'Emerald Downs' }],
    location: [-122.2357, 47.3303],
    capacity: [{ seats: 9100, note: 'No published capacity; the track\'s biggest recent crowd, July 3, 2023 (estimated). Average race day about 3,000.' }],
    roof: 'covered',
  },
  'evergreen-speedway': {
    id: 'evergreen-speedway',
    metroId: 'seattle',
    // Estimated: no transit, fairgrounds lots.
    carShare: 0.98,
    names: [{ name: 'Evergreen Speedway' }],
    location: [-121.987, 47.8693],
    capacity: [{ seats: 7500, note: '6,000–7,500 on race nights (reported)' }],
    roof: 'open',
  },
  'accesso-showare-center': {
    id: 'accesso-showare-center',
    metroId: 'seattle',
    // Estimated: 1,500+ free spaces and peak-only Sounder at Kent Station.
    carShare: 0.92,
    // Renamed in the fall of 2017; the exact day was not in the research.
    names: [{ name: 'ShoWare Center' }, { name: 'accesso ShoWare Center', from: '2017-09-01' }],
    location: [-122.24, 47.3877],
    capacity: [
      { seats: 7300, setup: 'concert', note: 'Maximum, end stage (official)' },
      { seats: 5887, setup: 'hockey', note: 'Seattle Thunderbirds (official)' },
    ],
    roof: 'indoor',
  },
  'wamu-theater': {
    id: 'wamu-theater',
    metroId: 'seattle',
    // Estimated: no figure; Lumen Field next door, nudged up for consumer shows and concerts.
    carShare: 0.65,
    // The building is the Lumen Field Event Center (CenturyLink Field Event Center until Nov 19, 2020).
    names: [{ name: 'WaMu Theater' }],
    location: [-122.3329, 47.5932],
    capacity: [{ seats: 7000, setup: 'concert', note: 'General admission (official); more with the floor standing' }],
    roof: 'indoor',
  },
  'marymoor-live': {
    id: 'marymoor-live',
    metroId: 'seattle',
    // Estimated: the 2 Line's Marymoor Village station opened in 2025; no count yet.
    carShare: 0.85,
    names: [{ name: 'Marymoor Park' }, { name: 'Marymoor Live', from: '2023-01-01' }],
    location: [-122.1111, 47.6587],
    capacity: [
      { seats: 5000, setup: 'concert', note: 'Official' },
      { seats: 6500, setup: 'concert', fromYear: 2023, note: 'After the 2023 expansion (official)' },
    ],
    roof: 'open',
  },
  'cheney-stadium': {
    id: 'cheney-stadium',
    metroId: 'seattle',
    // Estimated: local buses only; on-site paid lot.
    carShare: 0.95,
    names: [{ name: 'Cheney Stadium' }],
    location: [-122.4976, 47.2383],
    capacity: [{ seats: 6500, setup: 'baseball', note: 'Tacoma Rainiers (official)' }],
    roof: 'open',
  },
  'remlinger-farms': {
    id: 'remlinger-farms',
    metroId: 'seattle',
    // Estimated: no transit, on-site fields.
    carShare: 0.99,
    names: [{ name: 'Remlinger Farms' }],
    location: [-121.9154, 47.6365],
    capacity: [{ seats: 6000, setup: 'concert', note: 'Up to 6,000 (reported)' }],
    roof: 'open',
    strained: true,
  },
  // ---------- Chicago (docs/chicago-venue-table-answer.md; car shares from docs/chicago-city-type-answer.md), Oct 7, 2026 ----------
  // Not venue rows: Grant, Douglass, Union and Humboldt parks (festival grounds), McCormick Place and the Stephens
  // Convention Center (sized per event-day), Hawthorne (racing ended July 19, 2026) and Arlington Park (closed 2021).
  // Car shares marked "ours" are not in the research; they come from the nearest comparable and are flagged for Kylie.
  'soldier-field': {
    id: 'soldier-field',
    metroId: 'chicago',
    // Estimated (research): Bears games toward 75–80% car, concerts toward 60–65%; CTA alone carried ~11% at the 2023 Swift shows.
    carShare: 0.7,
    names: [{ name: 'Soldier Field' }],
    location: [-87.6176, 41.8623],
    capacity: [
      { seats: 61500, setup: 'football', note: 'Reported (Ticketmaster and most outlets); Wikipedia says 62,500.' },
      { seats: 61500, setup: 'soccer', note: 'No separate figure; the football setup.' },
      { seats: 63500, setup: 'concert', note: "Official: the stadium's own figure; one low-confidence source says ~66,000." },
    ],
    roof: 'open',
  },
  'wrigley-field': {
    id: 'wrigley-field',
    metroId: 'chicago',
    // Reported (the Cubs' own fan survey, March 2026): 37% drive, 63% other modes.
    carShare: 0.37,
    names: [{ name: 'Wrigley Field' }],
    location: [-87.6556, 41.9481],
    capacity: [
      { seats: 41649, setup: 'baseball', note: 'Official (MLB.com, March 2026); 41,374 is an older figure.' },
      { seats: 41649, setup: 'concert', note: 'No official concert figure; a ticket aggregator lists 41,159. Estimated at the baseball setup.' },
    ],
    roof: 'open',
  },
  'rate-field': {
    id: 'rate-field',
    metroId: 'chicago',
    // Estimated (70–80%): ~17% rode the L by the team's older estimate; ~7,000 team spaces.
    carShare: 0.75,
    names: [{ name: 'U.S. Cellular Field' }, { name: 'Guaranteed Rate Field', from: '2016-11-01' }, { name: 'Rate Field', from: '2025-01-01' }],
    location: [-87.6338, 41.8297],
    capacity: [{ seats: 40615, setup: 'baseball', note: 'Official (MLB.com, March 2026). A ~48,000 concert figure is low-confidence and not kept.' }],
    roof: 'open',
  },
  'ryan-field': {
    id: 'ryan-field',
    metroId: 'chicago',
    // Estimated: football ~60% car; the pre-opening concert plan projects 30–65% transit. Opened Oct 2, 2026.
    carShare: 0.6,
    names: [{ name: 'Ryan Field' }],
    location: [-87.6908, 42.0669],
    capacity: [
      { seats: 47130, setup: 'football', note: 'Reported: the old Ryan Field, closed after 2023. Northwestern played at Martin Stadium and Wrigley in 2024–25.' },
      { seats: 35000, setup: 'football', fromYear: 2026, note: 'Official (Northwestern); sold out at the Oct 2, 2026 opener. Concerts (up to six a year) expected from 2027; capacity unpublished.' },
    ],
    roof: 'covered',
  },
  'huntington-bank-pavilion': {
    id: 'huntington-bank-pavilion',
    metroId: 'chicago',
    // Estimated: the venue recommends transit or rideshare; patrons park in Soldier Field lots.
    carShare: 0.6,
    names: [{ name: 'FirstMerit Bank Pavilion' }, { name: 'Huntington Bank Pavilion at Northerly Island', from: '2017-01-09' }],
    location: [-87.6085, 41.8634],
    capacity: [{ seats: 30000, setup: 'concert', note: 'Reported, seats plus lawn; the reduced seated layout is ~8,000.' }],
    roof: 'open',
  },
  'credit-union-1-amphitheatre': {
    id: 'credit-union-1-amphitheatre',
    metroId: 'chicago',
    // Estimated: one suburban site, one lot; hours-long approach jams documented in 2023.
    carShare: 0.97,
    names: [{ name: 'Hollywood Casino Amphitheatre' }, { name: 'Credit Union 1 Amphitheatre', from: '2023-04-25' }],
    // Approximate (research); OpenStreetMap does not know the venue by name.
    location: [-87.785, 41.546],
    capacity: [{ seats: 28000, setup: 'concert', note: 'Official (Live Nation via WGN): about 11,000 reserved plus 17,000 lawn; Wikipedia says 28,739.' }],
    roof: 'covered',
  },
  'seatgeek-stadium': {
    id: 'seatgeek-stadium',
    metroId: 'chicago',
    // Estimated: big lots on Harlem Ave; weak transit is the main fan complaint.
    carShare: 0.93,
    names: [{ name: 'Toyota Park' }, { name: 'SeatGeek Stadium', from: '2018-11-01' }],
    location: [-87.8062, 41.7648],
    capacity: [
      { seats: 20000, setup: 'soccer', note: 'Reported. No confirmed pro tenant in 2026: the Fire left after 2019, the Stars after 2025.' },
      { seats: 28000, setup: 'concert', note: 'Reported, concert or festival' },
    ],
    roof: 'open',
  },
  'united-center': {
    id: 'united-center',
    metroId: 'chicago',
    // Official (2023 patron survey in the 1901 Project TDM study): 86.9% car, 8.1% transit, 5.1% walk.
    carShare: 0.87,
    names: [{ name: 'United Center' }],
    location: [-87.6742, 41.8807],
    capacity: [
      { seats: 20917, setup: 'basketball', note: 'Reported; 23,129 with standing room is the record' },
      { seats: 19717, setup: 'hockey', note: 'Reported; 22,428 with standing room is the record' },
      { seats: 23500, setup: 'concert', note: 'Reported, up to' },
    ],
    roof: 'indoor',
  },
  'allstate-arena': {
    id: 'allstate-arena',
    metroId: 'chicago',
    // Estimated: Blue Line Rosemont is not at the door; Pace bus or rideshare from the station.
    carShare: 0.93,
    names: [{ name: 'Allstate Arena' }],
    location: [-87.8878, 42.0053],
    capacity: [
      { seats: 18500, setup: 'concert', note: 'Reported; Wikipedia now shows 18,200–22,000' },
      { seats: 17500, setup: 'basketball', note: 'Reported' },
      { seats: 16692, setup: 'hockey', note: 'Reported; the Wolves (AHL) play here' },
    ],
    roof: 'indoor',
  },
  ravinia: {
    id: 'ravinia',
    metroId: 'chicago',
    // Estimated: no published share; Metra UP-N stops at the gate, free with a ticket; the only count is a 2021 monthly total.
    carShare: 0.8,
    names: [{ name: 'Ravinia Festival' }, { name: 'Ravinia' }],
    location: [-87.7754, 42.1579],
    capacity: [{ seats: 12758, setup: 'concert', note: 'Official (Ravinia via AP, July 2026): pavilion 2,840 after the 2026 renovation (was 3,350) plus ~9,918 lawn.' }],
    roof: 'covered',
  },
  'martin-stadium': {
    id: 'martin-stadium',
    metroId: 'chicago',
    // Estimated, ours (not in the research): campus lakefill with limited parking; comparable to Welsh-Ryan.
    carShare: 0.65,
    names: [{ name: 'Northwestern Medicine Field at Martin Stadium' }, { name: 'Martin Stadium' }],
    location: [-87.6708, 42.0584],
    capacity: [
      { seats: 12000, setup: 'football', note: "Official (Northwestern), bleachers plus boxes; built 2024 as a temporary home. Northwestern football's last game here was Sept 2026." },
      { seats: 12000, setup: 'soccer', note: 'The same stands; the Chicago Stars played the 2026 season here. 2027 unresolved.' },
    ],
    roof: 'open',
  },
  'now-arena': {
    id: 'now-arena',
    metroId: 'chicago',
    // Estimated: 3,200 on-site spaces; no practical transit.
    carShare: 0.98,
    names: [{ name: 'Sears Centre Arena' }, { name: 'NOW Arena', from: '2020-09-01' }],
    location: [-88.2128, 42.0693],
    capacity: [
      { seats: 11218, setup: 'concert', note: 'Reported, center stage; 7,410 end stage' },
      { seats: 8700, setup: 'basketball', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'pritzker-pavilion': {
    id: 'pritzker-pavilion',
    metroId: 'chicago',
    // Estimated, ours (not in the research): the Loop, no parking of its own; comparable to the Grant Park festival figure.
    carShare: 0.2,
    names: [{ name: 'Jay Pritzker Pavilion' }],
    location: [-87.6219, 41.8835],
    capacity: [{ seats: 11000, setup: 'concert', note: 'Official (City of Chicago): 4,000 fixed seats plus 7,000 lawn; mostly free events' }],
    roof: 'open',
  },
  'wintrust-arena': {
    id: 'wintrust-arena',
    metroId: 'chicago',
    // Estimated: Green Line station 0.15 mile away and McCormick Place garages adjacent; set between the United Center and Wrigley.
    carShare: 0.65,
    names: [{ name: 'Wintrust Arena' }],
    location: [-87.6214, 41.8537],
    capacity: [{ seats: 10387, setup: 'basketball', note: 'Official (DePaul / MPEA). Concert configuration not published.' }],
    roof: 'indoor',
  },
  'credit-union-1-arena': {
    id: 'credit-union-1-arena',
    metroId: 'chicago',
    // Estimated: Blue and Pink Line stations a short walk; campus walk-ins.
    carShare: 0.6,
    names: [{ name: 'UIC Pavilion' }, { name: 'Credit Union 1 Arena', from: '2018-11-01' }],
    location: [-87.6561, 41.8747],
    capacity: [
      { seats: 8000, setup: 'basketball', note: 'Official (UIC)' },
      { seats: 10300, setup: 'concert', note: 'Official (UIC); 10,075 end stage' },
    ],
    roof: 'indoor',
  },
  'impact-field': {
    id: 'impact-field',
    metroId: 'chicago',
    // Estimated, ours (not in the research): Rosemont, I-294 at Balmoral, adjacent garage; comparable to Allstate Arena.
    carShare: 0.93,
    names: [{ name: 'Impact Field' }],
    location: [-87.8711, 41.9781],
    capacity: [{ seats: 6300, setup: 'baseball', note: 'Reported (a ballpark trade site), 5,526 fixed seats; Wikipedia says 8,300. A ~10,000 concert figure is unverified and not kept.' }],
    roof: 'open',
  },
  'wintrust-field': {
    id: 'wintrust-field',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a suburban site with surface parking; comparable to NOW Arena.
    carShare: 0.98,
    names: [{ name: 'Boomers Stadium' }, { name: 'Wintrust Field', from: '2020-01-01' }],
    location: [-88.1177, 41.9931],
    capacity: [{ seats: 7365, setup: 'baseball', note: 'Reported (citing the team): 5,665 fixed plus lawn; record crowd 8,297' }],
    roof: 'open',
  },
  'welsh-ryan-arena': {
    id: 'welsh-ryan-arena',
    metroId: 'chicago',
    // Estimated: the same Purple Line and Metra access as Ryan Field plus a large student walk-in share.
    carShare: 0.65,
    names: [{ name: 'Welsh-Ryan Arena' }],
    location: [-87.6924, 42.0669],
    capacity: [
      { seats: 8117, setup: 'basketball', note: 'Reported, before the 2018 renovation' },
      { seats: 7039, setup: 'basketball', fromYear: 2019, note: 'Reported, since Nov 2018' },
    ],
    roof: 'indoor',
  },
  'jones-convocation-center': {
    id: 'jones-convocation-center',
    metroId: 'chicago',
    // Estimated, ours (not in the research): near the I-57/I-94 merge, campus lots.
    carShare: 0.85,
    names: [{ name: 'Jones Convocation Center' }, { name: 'Emil and Patricia Jones Convocation Center' }],
    location: [-87.6084, 41.7165],
    capacity: [{ seats: 7000, setup: 'basketball', note: 'Reported. Chicago State crowds are often in the hundreds; the building qualifies, the games sit under the floor.' }],
    roof: 'indoor',
  },
  'salt-shed': {
    id: 'salt-shed',
    metroId: 'chicago',
    // Estimated, ours (not in the research): an industrial corridor with little parking, no rail at the door.
    carShare: 0.55,
    names: [{ name: 'The Salt Shed' }],
    location: [-87.6592, 41.9067],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported (Pollstar): the outdoor Fairgrounds, standing; Wikipedia says 5,500. The indoor Shed (3,600) is under the floor.' }],
    roof: 'open',
  },
  'aragon-ballroom': {
    id: 'aragon-ballroom',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a block from the Red Line Lawrence stop; comparable to Wrigley.
    carShare: 0.45,
    names: [{ name: 'Aragon Ballroom' }, { name: 'Byline Bank Aragon Ballroom', from: '2019-01-01' }],
    location: [-87.658, 41.9694],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported (Ticketmaster), general admission; some sources say 4,800–4,900' }],
    roof: 'indoor',
  },
  'gately-stadium': {
    id: 'gately-stadium',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a Public League stadium on the far South Side.
    carShare: 0.8,
    names: [{ name: 'Gately Stadium' }],
    location: [-87.6026, 41.7085],
    capacity: [{ seats: 5000, setup: 'football', note: 'Reported (the CPS stadium list); renovated 2011' }],
    roof: 'open',
  },
  'chicagoland-speedway': {
    id: 'chicagoland-speedway',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a speedway on I-55/I-80 with its own lots.
    carShare: 0.98,
    names: [{ name: 'Chicagoland Speedway' }],
    location: [-88.0588, 41.4744],
    capacity: [{ seats: 47000, note: "Reported, after a cut from 75,000; the 2026 Cup race sold out. One weekend a year (June 25–27, 2027). The research's one addition to the boundary; in Will County." }],
    roof: 'open',
  },
  // ---------- Dallas–Fort Worth (docs/dallas-fort-worth-venue-table-answer.md; car shares from docs/dallas-fort-worth-city-type-answer.md), Oct 8, 2026 ----------
  // Not venue rows: Fair Park's grounds and the Will Rogers grounds (sized per fair day), PGA Frisco, the convention halls, and
  // the Fort Worth Convention Center Arena (final event Sept 2026). Car shares marked "ours" are not in the research.
  'att-stadium': {
    id: 'att-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (98–100%): no fixed-route transit in Arlington; even the World Cup's funded shuttle moved about 5%.
    carShare: 0.99,
    names: [{ name: "AT&T Stadium" }],
    location: [-97.0928, 32.7479],
    capacity: [
      { seats: 80000, setup: 'football', standing: 100000, note: 'Reported, seated; 100,000+ with standing-room platforms; NFL record 105,121 (2009)' },
      { seats: 80000, setup: 'soccer', note: "The 2026 World Cup drew about 70,000 per match, not FIFA's listed 94,000; the seated bowl is the ceiling" },
      { seats: 80000, setup: 'concert', note: 'Not published; the seated bowl as the ceiling. Estimated.' },
    ],
    roof: 'covered',
  },
  'cotton-bowl': {
    id: 'cotton-bowl',
    metroId: 'dallas-fort-worth',
    // Estimated (88–95%) outside the fair; about 81% on Red River day with DART's fair service.
    carShare: 0.92,
    names: [{ name: 'Cotton Bowl Stadium' }, { name: 'Cotton Bowl' }],
    location: [-96.7596, 32.7796],
    capacity: [
      { seats: 92100, setup: 'football', note: 'Official (Fair Park). Inside the State Fair grounds Sep 25 – Oct 18, 2026' },
      { seats: 92100, setup: 'soccer', note: 'No published soccer configuration; Trinity FC averages about 3,000. Atlético Dallas (USL) joins 2027.' },
    ],
    roof: 'open',
  },
  'texas-motor-speedway': {
    id: 'texas-motor-speedway',
    metroId: 'dallas-fort-worth',
    // Estimated: free lots for about 80,000 vehicles; no transit.
    carShare: 0.99,
    names: [{ name: 'Texas Motor Speedway' }],
    location: [-97.2816, 33.0371],
    capacity: [
      { seats: 75000, note: 'Reported (2026), after cuts from about 150,000; the May 3, 2026 Cup race sold out. One race weekend a year.' },
    ],
    roof: 'open',
  },
  'amon-g-carter-stadium': {
    id: 'amon-g-carter-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (80–90%): campus venue, no rail; students walk.
    carShare: 0.85,
    names: [{ name: 'Amon G. Carter Stadium' }],
    location: [-97.368, 32.7098],
    capacity: [
      { seats: 46000, setup: 'football', note: 'Official (TCU); record 53,294 with standing room (2023)' },
    ],
    roof: 'open',
  },
  'globe-life-field': {
    id: 'globe-life-field',
    metroId: 'dallas-fort-worth',
    // Estimated (95–99%): no transit; shares the Arlington lots with AT&T Stadium.
    carShare: 0.97,
    names: [{ name: 'Globe Life Field' }],
    location: [-97.0841, 32.7476],
    capacity: [
      { seats: 40300, setup: 'baseball', note: 'Official (the Rangers); 40,518 has no source; record 42,500 (2023 World Series)' },
      { seats: 43598, setup: 'concert', note: 'Reported: the Morgan Wallen record (Oct 2022), as the ceiling' },
    ],
    roof: 'covered',
  },
  'gerald-j-ford-stadium': {
    id: 'gerald-j-ford-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (75–85%): Mockingbird DART station about a mile away with a free shuttle; students walk.
    carShare: 0.8,
    names: [{ name: 'Gerald J. Ford Stadium' }, { name: 'Ford Stadium' }],
    location: [-96.7828, 32.8378],
    capacity: [
      { seats: 32000, setup: 'football', note: 'Official (SMU), before the 2024 end zone' },
      { seats: 33200, setup: 'football', fromYear: 2024, note: 'Official (SMU, 2026)' },
    ],
    roof: 'open',
  },
  'datcu-stadium': {
    id: 'datcu-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (78–88%): the A-train plus a game-day shuttle carries little; students walk over I-35E.
    carShare: 0.83,
    names: [{ name: 'Apogee Stadium' }, { name: 'DATCU Stadium', from: '2023-07-31' }],
    location: [-97.1594, 33.2039],
    capacity: [
      { seats: 30850, setup: 'football', note: 'Reported, 2011–2023' },
      { seats: 30100, setup: 'football', fromYear: 2024, note: 'Reported, 2024 on' },
    ],
    roof: 'open',
  },
  'choctaw-stadium': {
    id: 'choctaw-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated: the Arlington district, no transit. No regular tenant in 2026.
    carShare: 0.98,
    names: [{ name: 'Globe Life Park in Arlington' }, { name: 'Choctaw Stadium', from: '2021-08-25' }],
    location: [-97.0826, 32.7513],
    capacity: [
      { seats: 25000, setup: 'football', note: 'Reported, the football and soccer configuration' },
      { seats: 25000, setup: 'soccer', note: 'Reported' },
      { seats: 48114, setup: 'baseball', note: 'Reported: the 1994–2019 Rangers configuration, no longer used' },
    ],
    roof: 'open',
  },
  'american-airlines-center': {
    id: 'american-airlines-center',
    metroId: 'dallas-fort-worth',
    // Estimated (85–94%): DART and TRE at Victory Station beside the arena carry high single digits, by Victory's FY22 boardings.
    carShare: 0.9,
    names: [{ name: 'American Airlines Center' }],
    location: [-96.8103, 32.7905],
    capacity: [
      { seats: 19200, setup: 'basketball', note: 'Reported; 21,146 with standing room' },
      { seats: 18532, setup: 'hockey', note: 'Reported; 19,323 with standing room' },
      { seats: 21000, setup: 'concert', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'dos-equis-pavilion': {
    id: 'dos-equis-pavilion',
    metroId: 'dallas-fort-worth',
    // Estimated (88–95%): inside Fair Park, Green Line stations a short walk; no fair-day service boost outside the fair.
    carShare: 0.92,
    names: [{ name: 'Gexa Energy Pavilion' }, { name: 'Starplex Pavilion', from: '2017-01-01' }, { name: 'Dos Equis Pavilion', from: '2018-04-20' }],
    location: [-96.7563, 32.7751],
    capacity: [
      { seats: 20000, setup: 'concert', note: 'Reported: about 7,500 covered seats plus 12,500 lawn' },
    ],
    roof: 'covered',
  },
  'toyota-stadium': {
    id: 'toyota-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated: Frisco is not a DART member; surface lots, with structures coming in the renovation.
    carShare: 0.98,
    names: [{ name: 'Toyota Stadium' }],
    location: [-96.8354, 33.1542],
    capacity: [
      { seats: 20500, setup: 'soccer', note: 'Reported, the pre-renovation sellable maximum (19,096 seated bowl)' },
      { seats: 15000, setup: 'soccer', fromYear: 2025, note: 'Estimated (research): about 11,000 in 2025 during the $182M renovation, 15,000–20,000 reported for 2026–27; no official figure. 22,500–23,900 after Q1 2028.' },
      { seats: 20500, setup: 'football', note: 'The Dallas Renegades (UFL) and Frisco ISD play here; the same bowl' },
      { seats: 30000, setup: 'concert', note: 'Reported (City of Frisco), north-end stage; may not survive the renovation' },
    ],
    roof: 'open',
  },
  'dickies-arena': {
    id: 'dickies-arena',
    metroId: 'dallas-fort-worth',
    // Estimated (93–97%): a 2,210-car garage and the Will Rogers campus lots; one bus route.
    carShare: 0.95,
    names: [{ name: 'Dickies Arena' }],
    location: [-97.3685, 32.7411],
    capacity: [
      { seats: 14000, setup: 'concert', note: 'Official, up to' },
      { seats: 13300, setup: 'basketball', note: 'Official; Wikipedia says 13,550' },
      { seats: 12200, setup: 'hockey', note: 'Official, hockey and family shows; rodeo 9,300' },
    ],
    roof: 'indoor',
  },
  'ford-center-at-the-star': {
    id: 'ford-center-at-the-star',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): Frisco, the Dallas North Tollway, no rail; comparable to Toyota Stadium.
    carShare: 0.98,
    names: [{ name: 'Ford Center at The Star' }, { name: 'The Star' }],
    location: [-96.829, 33.1101],
    capacity: [
      { seats: 12000, setup: 'football', note: "Reported; the Cowboys' practice facility, Frisco ISD football and events" },
    ],
    roof: 'indoor',
  },
  'riders-field': {
    id: 'riders-field',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): Frisco, no rail; comparable to Toyota Stadium.
    carShare: 0.98,
    names: [{ name: 'Dr Pepper Ballpark' }, { name: 'Riders Field', from: '2021-01-01' }],
    location: [-96.8197, 33.0984],
    capacity: [
      { seats: 10316, setup: 'baseball', note: 'Reported; 10,216 by MiLB; 7,748 fixed seats plus a berm' },
    ],
    roof: 'open',
  },
  'unt-coliseum': {
    id: 'unt-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: campus; students walk.
    carShare: 0.83,
    names: [{ name: 'UNT Coliseum' }, { name: 'The Super Pit' }],
    location: [-97.1533, 33.2079],
    capacity: [
      { seats: 9797, setup: 'basketball', note: 'Reported; record 10,600 (1977)' },
    ],
    roof: 'indoor',
  },
  'dallas-memorial-arena': {
    id: 'dallas-memorial-arena',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): downtown, with the Convention Center DART station closed 2026–2029.
    carShare: 0.75,
    names: [{ name: 'Dallas Memorial Auditorium' }, { name: 'Kay Bailey Hutchison Convention Center Dallas Memorial Arena' }, { name: 'Dallas Memorial Arena' }],
    location: [-96.8019, 32.7748],
    capacity: [
      { seats: 10000, setup: 'basketball', note: "Reported, 'almost 10,000' before the renovation. Not hosting events in 2026." },
      { seats: 8400, setup: 'basketball', fromYear: 2027, note: 'Reported (city memo): about 8,400 for the WNBA after the renovation; the Wings from 2027' },
    ],
    roof: 'indoor',
  },
  'fair-park-coliseum': {
    id: 'fair-park-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: inside Fair Park, as the Cotton Bowl.
    carShare: 0.92,
    names: [{ name: 'Fair Park Coliseum' }],
    location: [-96.7572, 32.7792],
    capacity: [
      { seats: 8500, setup: 'concert', note: 'Reported (OVG360), end stage; 9,552 maximum; 5,768 seated' },
    ],
    roof: 'indoor',
  },
  'curtis-culwell-center': {
    id: 'curtis-culwell-center',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): Garland, the Bush Turnpike, surface lots.
    carShare: 0.97,
    names: [{ name: 'Curtis Culwell Center' }],
    location: [-96.642, 32.9594],
    capacity: [
      { seats: 6860, setup: 'basketball', note: 'Reported, seated; 8,500 standing' },
    ],
    roof: 'indoor',
  },
  'toyota-music-factory': {
    id: 'toyota-music-factory',
    metroId: 'dallas-fort-worth',
    // Estimated (88–95%): the DART Orange Line's Irving Convention Center station is a short walk; an 800-car garage.
    carShare: 0.92,
    names: [{ name: 'Irving Music Factory' }, { name: 'The Pavilion at Toyota Music Factory', from: '2017-09-01' }, { name: 'Toyota Music Factory' }],
    location: [-96.9448, 32.8742],
    capacity: [
      { seats: 8000, setup: 'concert', note: 'Official: the indoor theater plus lawn; 4,000 all-seated indoors (under the floor in winter)' },
    ],
    roof: 'covered',
  },
  'lone-star-park': {
    id: 'lone-star-park',
    metroId: 'dallas-fort-worth',
    // Estimated: no transit; the Grand Prairie cluster on I-30.
    carShare: 0.99,
    names: [{ name: 'Lone Star Park' }],
    location: [-96.9882, 32.7747],
    capacity: [
      { seats: 8000, note: 'Reported, an older grandstand figure; about 700,000 visitors a year. Thoroughbred meet April–July.' },
    ],
    roof: 'covered',
  },
  'grand-prairie-stadium': {
    id: 'grand-prairie-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): the same Grand Prairie cluster as Lone Star Park.
    carShare: 0.99,
    names: [{ name: 'Grand Prairie Stadium' }, { name: 'QuikTrip Park' }],
    location: [-96.986, 32.7683],
    capacity: [
      { seats: 7200, note: 'Reported: cricket (Texas Super Kings, Major League Cricket); expandable to 15,000' },
    ],
    roof: 'open',
  },
  'mansfield-stadium': {
    id: 'mansfield-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): a new suburban stadium with surface parking.
    carShare: 0.98,
    names: [{ name: 'Texas Health Mansfield Stadium' }, { name: 'Mansfield Stadium' }],
    location: [-97.1395, 32.565],
    capacity: [
      { seats: 7000, setup: 'soccer', note: 'Reported; 7,500 by the city. Opened summer 2026; North Texas SC (MLS Next Pro). Coordinates approximate (research).' },
    ],
    roof: 'open',
  },
  'college-park-center': {
    id: 'college-park-center',
    metroId: 'dallas-fort-worth',
    // Estimated (80–90%): a campus venue in a city with no fixed-route transit; students walk.
    carShare: 0.85,
    names: [{ name: 'College Park Center' }],
    location: [-97.1081, 32.7305],
    capacity: [
      { seats: 7000, setup: 'basketball', note: 'Reported; the Wings through 2026, UTA basketball' },
    ],
    roof: 'indoor',
  },
  'moody-coliseum': {
    id: 'moody-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: the SMU campus, Mockingbird station; students walk.
    carShare: 0.8,
    names: [{ name: 'Moody Coliseum' }],
    location: [-96.7807, 32.8404],
    capacity: [
      { seats: 7000, setup: 'basketball', note: 'Official (SMU)' },
    ],
    roof: 'indoor',
  },
  'cutx-event-center': {
    id: 'cutx-event-center',
    metroId: 'dallas-fort-worth',
    // Estimated: a freeway-side venue with surface lots.
    carShare: 0.99,
    names: [{ name: 'Allen Event Center' }, { name: 'Credit Union of Texas Event Center', from: '2021-10-15' }],
    location: [-96.6546, 33.1275],
    capacity: [
      { seats: 7080, setup: 'concert', note: 'Reported, in the round; 6,200 end stage' },
      { seats: 6200, setup: 'hockey', note: 'Estimated (research): the end-stage figure as a proxy; the Allen Americans (ECHL)' },
    ],
    roof: 'indoor',
  },
  'schollmaier-arena': {
    id: 'schollmaier-arena',
    metroId: 'dallas-fort-worth',
    // Estimated: the TCU campus, as the stadium.
    carShare: 0.85,
    names: [{ name: 'Ed & Rae Schollmaier Arena' }, { name: 'Schollmaier Arena' }],
    location: [-97.3667, 32.7088],
    capacity: [
      { seats: 6800, setup: 'basketball', note: 'Reported; an 8,500 figure looks like an error' },
    ],
    roof: 'indoor',
  },
  'texas-trust-cu-theatre': {
    id: 'texas-trust-cu-theatre',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): the Grand Prairie cluster.
    carShare: 0.99,
    names: [{ name: 'Verizon Theatre' }, { name: 'The Theatre at Grand Prairie', from: '2018-07-27' }, { name: 'Texas Trust CU Theatre', from: '2021-04-27' }],
    location: [-96.9824, 32.7668],
    capacity: [
      { seats: 6350, setup: 'concert', note: 'Official (AEG), seated' },
    ],
    roof: 'indoor',
  },
  'billy-bobs-texas': {
    id: 'billy-bobs-texas',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): the Stockyards district, congested on weekends.
    carShare: 0.9,
    names: [{ name: "Billy Bob's Texas" }],
    location: [-97.3478, 32.7909],
    capacity: [
      { seats: 6000, setup: 'concert', note: 'Official, up to' },
    ],
    roof: 'indoor',
  },
  'comerica-center': {
    id: 'comerica-center',
    metroId: 'dallas-fort-worth',
    // Estimated: Frisco, next to Riders Field.
    carShare: 0.98,
    names: [{ name: 'Dr Pepper Arena' }, { name: 'Comerica Center' }],
    location: [-96.8194, 33.1006],
    capacity: [
      { seats: 6000, setup: 'concert', note: 'Official (Visit Frisco), seated; 7,000 standing' },
      { seats: 4500, setup: 'basketball', note: 'Reported, older: the Texas Legends (G League) sit under the floor' },
    ],
    roof: 'indoor',
  },
  'will-rogers-coliseum': {
    id: 'will-rogers-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: the Will Rogers campus, as Dickies Arena.
    carShare: 0.95,
    names: [{ name: 'Will Rogers Memorial Coliseum' }],
    location: [-97.37, 32.7472],
    capacity: [
      { seats: 5652, note: 'Official (City of Fort Worth), permanent seats; equestrian and Stock Show events' },
    ],
    roof: 'indoor',
  },
  'amalie-arena': {
    id: 'amalie-arena',
    metroId: 'tampa',
    names: [{ name: 'Amalie Arena' }],
    location: [-82.4518, 27.9427],
    capacity: [{ seats: 19420, setup: 'basketball', note: 'NCAA figure for the 2025 Women’s Final Four' }],
    roof: 'indoor',
  },
  'mortgage-matchup-center': {
    id: 'mortgage-matchup-center',
    metroId: 'phoenix',
    names: [{ name: 'Mortgage Matchup Center' }],
    location: [-112.0712, 33.4457],
    capacity: [{ seats: 16795, setup: 'basketball', note: 'NCAA figure for the 2026 Women’s Final Four' }],
    roof: 'indoor',
  },
  'golden-1-center': {
    id: 'golden-1-center',
    metroId: 'sacramento',
    names: [{ name: 'Golden 1 Center' }],
    // Estimated by subtraction: the city put walking, biking and transit at 10–15% before opening (docs/archive/research/venue-egress-answer.md).
    carShare: 0.87,
    location: [-121.4996, 38.5802],
    capacity: [{ seats: 17600, setup: 'basketball', note: 'About 17,600 for basketball' }],
    roof: 'indoor',
  },
  roadrunner: {
    id: 'roadrunner',
    metroId: 'boston',
    names: [{ name: 'Roadrunner' }],
    location: [-71.1428, 42.3564],
    capacity: [{ seats: 3500, setup: 'concert', note: 'About 3,500. Estimated.' }],
    roof: 'indoor',
  },
  // One festival site in Indio, not its own metro. The logged nights stay
  // outside the Los Angeles rating.
  'empire-polo-club': {
    id: 'empire-polo-club',
    metroId: 'la',
    names: [{ name: 'Empire Polo Club' }],
    location: [-116.2372, 33.6803],
    capacity: [
      { seats: 99000, setup: 'concert', note: 'Festival grounds in Indio: the city\'s daily cap, standing, not a seat count.' },
      { seats: 125000, setup: 'concert', fromYear: 2017, note: 'The daily cap after Indio raised it; 2018 sold out at this figure.' },
    ],
    roof: 'open',
  },
  'ventura-theater': {
    id: 'ventura-theater',
    metroId: 'la',
    names: [{ name: 'Ventura Theater' }],
    location: [-119.2978, 34.2805],
    capacity: [{ seats: 1000, setup: 'concert', note: 'About 1,000. Estimated. Ventura is part of Los Angeles here.' }],
    roof: 'indoor',
  },
  // ---- Atlanta (docs/archive/research/atlanta-venue-table-answer.md, Oct 7, 2026). Capacities labeled as the research
  // labeled them; car shares from docs/archive/research/atlanta-city-type-answer.md (one value per venue, Kylie, Oct 6).
  // Coordinates checked against OpenStreetMap by name; three rooms OSM does not know take the research's
  // approximation, said so below. Festival parks and the Georgia World Congress Center are not rows
  // (Kylie, Oct 7): their events are points sized by their own crowds. ----
  'mercedes-benz-stadium': {
    id: 'mercedes-benz-stadium',
    metroId: 'atlanta',
    // Reported: Falcons 78% car (MARTA fare-card counts, 2018–19), Atlanta United ~70%. One value: 0.75; concerts and bowls read a few points off.
    carShare: 0.75,
    names: [{ name: 'Mercedes-Benz Stadium' }],
    location: [-84.4008, 33.7554],
    capacity: [
      { seats: 71000, setup: 'football', note: 'Official (Falcons). 75,000 expanded for the SEC Championship, Peach Bowl and other neutral-site games; record 79,330 (2022 Peach Bowl).' },
      { seats: 42500, setup: 'soccer', note: 'Official, the upper-bowl curtain for Atlanta United; the full bowl opens for big matches (record 73,019, 2018 MLS Cup, reported).' },
    ],
    // Retractable roof; the venue type has no such value, so covered, as the roof is usually closed for events.
    roof: 'covered',
  },
  'echopark-speedway': {
    id: 'echopark-speedway',
    metroId: 'atlanta',
    // Estimated: 850 acres of free lots, no transit (99%+).
    carShare: 0.99,
    names: [{ name: 'Atlanta Motor Speedway' }, { name: 'EchoPark Speedway', from: '2025-06-03' }],
    location: [-84.3162, 33.3889],
    capacity: [{ seats: 71000, note: 'Reported: the last grandstand figure the owner released (2015). No feed lists its two race weekends; hand-list them.' }],
    roof: 'open',
  },
  'bobby-dodd-stadium': {
    id: 'bobby-dodd-stadium',
    metroId: 'atlanta',
    // Estimated (55–75%): North Avenue station three blocks away, plus students walking in.
    carShare: 0.65,
    names: [{ name: 'Bobby Dodd Stadium at Grant Field' }, { name: 'Bobby Dodd Stadium at Hyundai Field', from: '2023-08-08' }],
    location: [-84.393, 33.7725],
    capacity: [
      { seats: 55000, setup: 'football', note: 'Official, through the 2023 season' },
      { seats: 51913, setup: 'football', fromYear: 2024, note: 'Official (Georgia Tech). About 50,000 from 2027 after the renovation; update then.' },
    ],
    roof: 'open',
  },
  'truist-park': {
    id: 'truist-park',
    metroId: 'atlanta',
    // Estimated (93–98%): no rail; 9,000+ Braves game-day spaces; CobbLinc 10 does not run Sundays. No observed count since 2017.
    carShare: 0.96,
    names: [{ name: 'SunTrust Park' }, { name: 'Truist Park', from: '2020-01-14' }],
    location: [-84.4676, 33.8907],
    capacity: [{ seats: 41084, setup: 'baseball', note: 'Reported (the Braves\' figure via Ticketmaster and Populous); 41,149 at the 2017 opening' }],
    roof: 'open',
  },
  'center-parc-stadium': {
    id: 'center-parc-stadium',
    metroId: 'atlanta',
    // Estimated (75–88%): the same site drew 6–8% by MARTA as Turner Field; a mile from Georgia State station.
    carShare: 0.82,
    names: [{ name: 'Georgia State Stadium' }, { name: 'Center Parc Stadium', from: '2020-08-01' }],
    location: [-84.3887, 33.7355],
    capacity: [{ seats: 24333, setup: 'football', note: 'Reported. Turner Field (49,586, baseball, 1997–2016) is history, not a setup.' }],
    roof: 'open',
  },
  'state-farm-arena': {
    id: 'state-farm-arena',
    metroId: 'atlanta',
    // Reported: Hawks ~84% car (MARTA fare-card counts 2018–19, 9.3% rail, raised for undercount).
    carShare: 0.84,
    names: [{ name: 'Philips Arena' }, { name: 'State Farm Arena', from: '2018-08-29' }],
    location: [-84.3964, 33.7574],
    capacity: [
      { seats: 18047, setup: 'basketball', note: 'Reported, 2014–17' },
      { seats: 16600, setup: 'basketball', fromYear: 2018, note: 'Official at the 2018 reopening' },
      { seats: 17600, setup: 'basketball', fromYear: 2024, note: 'Reported (2026); Dream crowds above 17,000 in 2024–25 confirm the 16,600 is out of date' },
      { seats: 21000, setup: 'concert', note: 'Reported, end-stage' },
    ],
    roof: 'indoor',
  },
  'lakewood-amphitheatre': {
    id: 'lakewood-amphitheatre',
    metroId: 'atlanta',
    // Estimated (90–97%): ~6,000-car lot, parking in the ticket; a bus bridge from Lakewood/Fort McPherson.
    carShare: 0.95,
    names: [{ name: 'Lakewood Amphitheatre' }, { name: 'Cellairis Amphitheatre at Lakewood', from: '2017-11-03' }, { name: 'Lakewood Amphitheatre', from: '2022-01-01' }],
    location: [-84.396, 33.7042],
    capacity: [{ seats: 18920, setup: 'concert', note: 'Reported: ~7,000 seats and ~12,000 lawn; Live Nation rounds to 19,000. The Cellairis name came off about 2021 (end date not confirmed; 2022 used here).' }],
    roof: 'covered',
  },
  'gas-south-arena': {
    id: 'gas-south-arena',
    metroId: 'atlanta',
    // Estimated (96–99%): on-site lots, no event transit.
    carShare: 0.98,
    names: [{ name: 'Infinite Energy Arena' }, { name: 'Gas South Arena', from: '2021-05-25' }],
    location: [-84.0938, 33.9916],
    capacity: [
      { seats: 13000, setup: 'concert', note: 'Official' },
      { seats: 12750, setup: 'basketball', note: 'Reported' },
      { seats: 11355, setup: 'hockey', note: 'Reported (Gladiators, ECHL)' },
    ],
    roof: 'indoor',
  },
  'ameris-bank-amphitheatre': {
    id: 'ameris-bank-amphitheatre',
    metroId: 'atlanta',
    // Estimated (96–99%): a parking pass in every ticket, no transit.
    carShare: 0.98,
    names: [{ name: 'Verizon Wireless Amphitheatre' }, { name: 'Verizon Amphitheatre', from: '2017-01-01' }, { name: 'Ameris Bank Amphitheatre', from: '2019-01-01' }],
    location: [-84.3063, 34.0544],
    capacity: [{ seats: 12000, setup: 'concert', note: 'Official (Live Nation); 12,500 max standing and 7,500 seated reported' }],
    roof: 'covered',
  },
  'fifth-third-stadium': {
    id: 'fifth-third-stadium',
    metroId: 'atlanta',
    // Estimated (75–90%): the Big Owl Bus carries students from campus.
    carShare: 0.85,
    names: [{ name: 'Fifth Third Bank Stadium' }, { name: 'Fifth Third Stadium' }],
    location: [-84.5678, 34.0288],
    capacity: [
      { seats: 11040, setup: 'football', note: 'Official (KSU listing; equals the record). 8,300 permanent seats.' },
      { seats: 16316, setup: 'concert', note: 'Reported: seats plus ~8,000 on the field' },
    ],
    roof: 'open',
  },
  'gwinnett-field': {
    id: 'gwinnett-field',
    metroId: 'atlanta',
    // Estimated (99%): no direct bus.
    carShare: 0.99,
    names: [{ name: 'Coolray Field' }, { name: 'Gwinnett Field', from: '2026-01-01' }],
    location: [-83.9925, 34.0407],
    capacity: [{ seats: 10427, setup: 'baseball', note: 'Official (MiLB). The Stripers averaged 2,694 in 2025, so most nights sit under the floor.' }],
    roof: 'open',
  },
  'bt-harvey-stadium': {
    id: 'bt-harvey-stadium',
    metroId: 'atlanta',
    names: [{ name: 'B.T. Harvey Stadium' }],
    location: [-84.4162, 33.7457],
    capacity: [{ seats: 9000, setup: 'football', note: 'Official (Morehouse)' }],
    roof: 'open',
  },
  'mccamish-pavilion': {
    id: 'mccamish-pavilion',
    metroId: 'atlanta',
    // Estimated (55–75%): a walk across campus from Midtown and North Avenue stations; little nearby parking.
    carShare: 0.65,
    names: [{ name: 'McCamish Pavilion' }],
    location: [-84.3928, 33.7806],
    capacity: [{ seats: 8600, setup: 'basketball', note: 'Official (Georgia Tech): 6,935 court level and 1,665 balcony' }],
    roof: 'indoor',
  },
  'gsu-convocation-center': {
    id: 'gsu-convocation-center',
    metroId: 'atlanta',
    // Estimated (65–83%): four blocks from Georgia State station, plus a student shuttle.
    carShare: 0.73,
    names: [{ name: 'GSU Convocation Center' }],
    location: [-84.3887, 33.7425],
    capacity: [
      { seats: 7300, setup: 'basketball', fromYear: 2022, note: 'Official (Georgia State); opened September 2022' },
      { seats: 8000, setup: 'concert', fromYear: 2022, note: 'Official' },
    ],
    roof: 'indoor',
  },
  'chastain-park-amphitheater': {
    id: 'chastain-park-amphitheater',
    metroId: 'atlanta',
    // Estimated (85–95%): four pay lots inside a residential park, rideshare urged.
    carShare: 0.92,
    names: [
      { name: 'Chastain Park Amphitheater' },
      { name: 'State Bank Amphitheatre at Chastain Park', from: '2018-04-04' },
      { name: 'Cadence Bank Amphitheatre at Chastain Park', from: '2019-02-21' },
      { name: 'Synovus Bank Amphitheater at Chastain Park', from: '2025-03-01' },
    ],
    // OpenStreetMap knows the street address (4469 Stella Drive), not the stage; the research read 33.876, -84.396.
    location: [-84.3965, 33.878],
    capacity: [{ seats: 6900, setup: 'concert', note: 'Reported; Live Nation says "nearly 7,000", mostly reserved and table seating' }],
    roof: 'open',
  },
  'forbes-arena': {
    id: 'forbes-arena',
    metroId: 'atlanta',
    names: [{ name: 'Forbes Arena' }],
    location: [-84.4171, 33.7486],
    capacity: [{ seats: 6000, setup: 'basketball', note: 'Official (Morehouse)' }],
    roof: 'indoor',
  },
  'wolf-creek-amphitheater': {
    id: 'wolf-creek-amphitheater',
    metroId: 'atlanta',
    names: [{ name: 'Wolf Creek Amphitheater' }],
    // Approximate: 3025 Merk Road SW, South Fulton; neither OpenStreetMap nor the research gave the building. Geocode before it matters.
    location: [-84.569, 33.665],
    capacity: [{ seats: 5420, setup: 'concert', note: 'Reported (venue listing); 5,116 seated, older listings 5,200–5,300' }],
    roof: 'open',
  },
  'ksu-convocation-center': {
    id: 'ksu-convocation-center',
    metroId: 'atlanta',
    names: [{ name: 'KSU Convocation Center' }, { name: 'VyStar Arena' }],
    // Approximate: the research's read (34.039, -84.583); OpenStreetMap does not list the building.
    location: [-84.583, 34.039],
    capacity: [
      { seats: 3800, setup: 'basketball', note: 'Official (KSU, current); 4,600 in an older listing. Under the floor for games.' },
      { seats: 5000, setup: 'concert', note: 'Official: "5,000+" for concerts and seminars' },
    ],
    roof: 'indoor',
  },
  'panther-stadium': {
    id: 'panther-stadium',
    metroId: 'atlanta',
    names: [{ name: 'Panther Stadium' }],
    // Approximate: on the Clark Atlanta campus beside B.T. Harvey; not in OpenStreetMap, no research coordinate.
    location: [-84.413, 33.748],
    capacity: [{ seats: 5000, setup: 'football', note: 'Reported (secondary source only); exactly on the line' }],
    roof: 'open',
  },
  'gateway-center-arena': {
    id: 'gateway-center-arena',
    metroId: 'atlanta',
    // Estimated (80–92%): the ATL SkyTrain from Airport station carries a minority.
    carShare: 0.85,
    names: [{ name: 'Gateway Center Arena at College Park' }, { name: 'Gateway Center' }],
    location: [-84.4597, 33.6468],
    capacity: [
      { seats: 3500, setup: 'basketball', fromYear: 2019, note: 'Official. Dream home games sit under the floor (Kylie, Oct 7); their State Farm Arena games count.' },
      { seats: 5000, setup: 'concert', fromYear: 2019, note: 'Official' },
    ],
    roof: 'indoor',
  },
  // ---------- Bay Area (docs/bay-area-venue-table-answer.md; car shares from docs/bay-area-city-type-answer.md), Oct 7, 2026 ----------
  // Not venue rows (Kylie, Oct 7, as for New York's Table B): the Golden Gate Park festival meadows, the Alameda County
  // Fairgrounds, Moscone, the San Jose convention center, Civic Center Plaza, Marina Green, Lake Merritt, Stern Grove,
  // Treasure Island. Their events are placed as points and sized by their own crowd.
  'levis-stadium': {
    id: 'levis-stadium',
    metroId: 'bay-area',
    // Reported ridership, estimated share (82–88%): ~15,000 VTA light-rail riders per 49ers game, about 11% of the crowd, plus ACE and Capitol Corridor.
    carShare: 0.85,
    names: [{ name: "Levi's Stadium" }],
    location: [-121.97, 37.403],
    capacity: [
      { seats: 68500, setup: 'football', note: 'Reported. Expandable to about 75,000 for a Super Bowl; the World Cup did not use the expansion.' },
      { seats: 68827, setup: 'soccer', note: 'Official (FIFA): the 2026 World Cup sellout; six-match average 68,558.' },
    ],
    roof: 'open',
  },
  'oakland-coliseum': {
    id: 'oakland-coliseum',
    metroId: 'bay-area',
    // Official (BART): 14% of Coliseum baseball fans rode BART, 2013–2023, plus ~1% Capitol Corridor and AC Transit.
    carShare: 0.84,
    // Name dates are approximate to the month (RingCentral 2019–2023, with a lapse in 2020).
    names: [{ name: 'Oakland–Alameda County Coliseum' }, { name: 'O.co Coliseum' }, { name: 'RingCentral Coliseum', from: '2019-07-01' }, { name: 'Oakland Coliseum', from: '2023-09-01' }],
    location: [-122.2006, 37.7517],
    capacity: [
      { seats: 46847, setup: 'baseball', note: "Reported (the A's tarped setup); 56,782 with the tarps off. The A's left after 2024." },
      { seats: 53200, setup: 'football', note: 'Reported (Raiders era, to 2019); expandable to 63,132.' },
      { seats: 15000, setup: 'soccer', note: "Reported listed configuration; the Roots' 2025 opener drew 26,000+ with more sections open, so this is not a cap. The Roots leave after Oct 10, 2026." },
      { seats: 47416, setup: 'concert', note: 'Reported; 64,829 in another layout.' },
    ],
    roof: 'open',
  },
  'california-memorial-stadium': {
    id: 'california-memorial-stadium',
    metroId: 'bay-area',
    // Estimated (50–70%): hillside with almost no on-site parking; Downtown Berkeley BART with a free shuttle; students walk.
    carShare: 0.6,
    names: [{ name: 'California Memorial Stadium' }],
    location: [-122.2508, 37.8711],
    capacity: [
      { seats: 62467, setup: 'football', note: 'Reported, full bowl; 63,186 official at the 2013 reopening.' },
      { seats: 52428, setup: 'football', fromYear: 2024, note: 'Reported, south end tarped; one source dates the tarp to 2022.' },
    ],
    roof: 'open',
  },
  'stanford-stadium': {
    id: 'stanford-stadium',
    metroId: 'bay-area',
    // Estimated: large campus lots; Caltrain stops at the stadium on weekend games.
    carShare: 0.85,
    names: [{ name: 'Stanford Stadium' }],
    location: [-122.1619, 37.4345],
    capacity: [{ seats: 50424, setup: 'football', note: 'Reported, since 2013. The Earthquakes play one match a year in the same bowl.' }],
    roof: 'open',
  },
  'oracle-park': {
    id: 'oracle-park',
    metroId: 'bay-area',
    // Reported (the Giants, 2026): nearly half of fans arrive by bus, train, ferry, bike, scooter or on foot.
    carShare: 0.5,
    names: [{ name: 'AT&T Park' }, { name: 'Oracle Park', from: '2019-01-10' }],
    location: [-122.3894, 37.7786],
    capacity: [{ seats: 41265, setup: 'baseball', note: 'Reported (Ticketmaster); seat-map sites say 41,915. The Giants publish neither.' }],
    roof: 'open',
  },
  'shoreline-amphitheatre': {
    id: 'shoreline-amphitheatre',
    metroId: 'bay-area',
    // Estimated: on-site lots included in most tickets; no rail within walking distance.
    carShare: 0.95,
    names: [{ name: 'Shoreline Amphitheatre' }],
    location: [-122.0806, 37.4269],
    capacity: [{ seats: 22500, setup: 'concert', note: 'Reported: 6,500 reserved seats plus 16,000 lawn; up to 30,000 as a festival with parking-lot stages.' }],
    roof: 'covered',
  },
  'oakland-arena': {
    id: 'oakland-arena',
    metroId: 'bay-area',
    // Estimated (comparable: the Coliseum next door, which shares its lots and BART station).
    carShare: 0.8,
    names: [{ name: 'Oracle Arena' }, { name: 'Oakland Arena', from: '2019-07-01' }],
    location: [-122.2029, 37.7503],
    capacity: [
      { seats: 19596, setup: 'basketball', note: 'Reported; no tenant since the Warriors left in 2019.' },
      { seats: 19596, setup: 'concert', note: 'Reported; TheStadiumBusiness says 19,200 (2026). Oak View Group is pricing a renovation.' },
    ],
    roof: 'indoor',
  },
  'sap-center': {
    id: 'sap-center',
    metroId: 'bay-area',
    // Estimated (80–90%): Diridon Station across the street, but no observed survey; 4,850 contracted spaces nearby.
    carShare: 0.85,
    names: [{ name: 'SAP Center' }],
    location: [-121.9011, 37.3328],
    capacity: [
      { seats: 17562, setup: 'hockey', note: 'Reported, 2001–2023' },
      { seats: 17435, setup: 'hockey', fromYear: 2023, note: 'Reported, after a penthouse-lounge conversion; a phased renovation from 2026 will change it again.' },
      { seats: 18543, setup: 'basketball', note: 'Reported' },
      { seats: 18500, setup: 'concert', note: 'Reported (Ticketmaster), end-stage; 19,190 in the round.' },
    ],
    roof: 'indoor',
  },
  'chase-center': {
    id: 'chase-center',
    metroId: 'bay-area',
    // Reported (Warriors, 2019: 35% by light rail) and the 2015 plan's cap of 53–59% by car; estimated 45–55%.
    carShare: 0.5,
    names: [{ name: 'Chase Center' }],
    location: [-122.3874, 37.7679],
    capacity: [
      { seats: 18064, setup: 'basketball', note: 'Official: both the Warriors and the Valkyries announce sellouts at this number.' },
      { seats: 19500, setup: 'concert', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'cefcu-stadium': {
    id: 'cefcu-stadium',
    metroId: 'bay-area',
    // Estimated: city streets south of downtown; no survey.
    carShare: 0.85,
    names: [{ name: 'Spartan Stadium' }, { name: 'CEFCU Stadium', from: '2016-09-10' }],
    location: [-121.8683, 37.3197],
    capacity: [
      { seats: 30456, setup: 'football', note: 'Reported, 1998–2018. Many sites still show this figure; it is stale.' },
      { seats: 21520, setup: 'football', fromYear: 2019, note: 'Reported, during the east-side rebuild' },
      { seats: 18203, setup: 'football', fromYear: 2021, note: 'Reported' },
    ],
    roof: 'open',
  },
  'paypal-park': {
    id: 'paypal-park',
    metroId: 'bay-area',
    // Estimated: Bay FC says driving is the go-to; Caltrain counted ~850 riders per match in 2026.
    carShare: 0.9,
    names: [{ name: 'Avaya Stadium' }, { name: 'Earthquakes Stadium', from: '2020-07-01' }, { name: 'PayPal Park', from: '2021-02-01' }],
    location: [-121.9246, 37.3513],
    capacity: [{ seats: 18000, setup: 'soccer', note: 'Official (Bay FC). A canopy covers the stands; the field is open.' }],
    roof: 'open',
  },
  'cow-palace': {
    id: 'cow-palace',
    metroId: 'bay-area',
    // Estimated: on-site lots; Balboa Park BART is a long walk.
    carShare: 0.88,
    names: [{ name: 'Cow Palace' }],
    location: [-122.4202, 37.7062],
    capacity: [
      { seats: 16500, setup: 'concert', note: 'Reported' },
      { seats: 14000, setup: 'basketball', note: 'Reported' },
      { seats: 13550, setup: 'hockey', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'toyota-pavilion-concord': {
    id: 'toyota-pavilion-concord',
    metroId: 'bay-area',
    // Estimated (comparable: Shoreline); hillside site on one road, Concord BART several km away.
    carShare: 0.95,
    names: [{ name: 'Concord Pavilion' }, { name: 'Toyota Pavilion at Concord', from: '2023-07-01' }],
    location: [-121.9404, 37.96],
    capacity: [{ seats: 12500, setup: 'concert', note: 'Reported, covered seats plus lawn; the split is not published. The Toyota name runs to about the end of 2027.' }],
    roof: 'covered',
  },
  'haas-pavilion': {
    id: 'haas-pavilion',
    metroId: 'bay-area',
    // Estimated (comparable: Cal football, with more students walking); Downtown Berkeley BART ten minutes away.
    carShare: 0.55,
    names: [{ name: 'Haas Pavilion' }],
    location: [-122.2622, 37.8694],
    capacity: [{ seats: 11858, setup: 'basketball', note: "Reported, since 2015; Cal's own older page says 11,877." }],
    roof: 'indoor',
  },
  'kezar-stadium': {
    id: 'kezar-stadium',
    metroId: 'bay-area',
    // Estimated, ours (not in the research): city streets at the park's edge, Muni N Judah nearby; comparable to Haas and the Greek.
    carShare: 0.55,
    names: [{ name: 'Kezar Stadium' }],
    location: [-122.456, 37.7669],
    capacity: [
      { seats: 10000, setup: 'football', note: "Official (SF Rec & Park); \"over 9,000\" reported. Golden City FC's seat upgrades may lower it." },
      { seats: 10000, setup: 'soccer', note: 'Official (SF Rec & Park)' },
    ],
    roof: 'open',
  },
  'greek-theatre-berkeley': {
    id: 'greek-theatre-berkeley',
    metroId: 'bay-area',
    // Estimated (comparable: Cal football, same campus and station).
    carShare: 0.6,
    names: [{ name: 'Hearst Greek Theatre' }, { name: 'Greek Theatre' }],
    location: [-122.2542, 37.8737],
    capacity: [{ seats: 8500, setup: 'concert', note: 'Official (Cal Performances), general admission: 6,500 bowl plus 2,000 lawn; 7,250 seated.' }],
    roof: 'open',
  },
  'bill-graham-civic': {
    id: 'bill-graham-civic',
    metroId: 'bay-area',
    // Estimated (comparable: Oracle and Chase, with a better station and less parking); Civic Center BART across the street.
    carShare: 0.4,
    names: [{ name: 'Bill Graham Civic Auditorium' }],
    location: [-122.4173, 37.7781],
    capacity: [{ seats: 8500, setup: 'concert', note: 'Reported, general-admission floor plus seated balcony; the all-seated figure is unpublished.' }],
    roof: 'indoor',
  },
  'frost-amphitheater': {
    id: 'frost-amphitheater',
    metroId: 'bay-area',
    // Estimated: paid campus lot; Palo Alto Caltrain a 20-minute walk, with shows timed to the trains.
    carShare: 0.75,
    names: [{ name: 'Frost Amphitheater' }],
    // Approximate (research); OpenStreetMap does not know the venue by name.
    location: [-122.1663, 37.4296],
    capacity: [{ seats: 8000, setup: 'concert', note: 'Reported; rebuilt and reopened 2019' }],
    roof: 'open',
  },
  'maples-pavilion': {
    id: 'maples-pavilion',
    metroId: 'bay-area',
    // Estimated (comparable: Stanford Stadium).
    carShare: 0.85,
    names: [{ name: 'Maples Pavilion' }],
    location: [-122.1605, 37.4295],
    capacity: [{ seats: 7233, setup: 'basketball', note: 'Reported, citing Stanford' }],
    roof: 'indoor',
  },
  'provident-event-center': {
    id: 'provident-event-center',
    metroId: 'bay-area',
    // Estimated, ours (not in the research): downtown campus; comparable to CEFCU Stadium.
    carShare: 0.85,
    names: [{ name: 'Event Center at San José State' }, { name: 'Provident Credit Union Event Center', from: '2019-09-01' }],
    // Approximate (research); OpenStreetMap does not know the venue by name.
    location: [-121.8794, 37.3352],
    capacity: [
      { seats: 5000, setup: 'basketball', note: 'Official (SJSU)' },
      { seats: 6000, setup: 'concert', note: 'Official (SJSU): "over 6,000"' },
    ],
    roof: 'indoor',
  },
};

/** The venue's name as it was on that date ("Staples Center" in 2019). */
export function venueNameOn(venue: Venue, date: LocalDate): string {
  let current = venue.names[0].name;
  for (const n of venue.names) if (!n.from || n.from <= date) current = n.name;
  return current;
}

/**
 * Hard to get in and out of: a hillside or canyon site with few streets at the
 * gate (Kylie, Oct 6, 2026; docs/hard-access-oct6.md). Measured, not hand-set:
 * relief of at least 40 m within 500 m and no more than 4 named public streets
 * within 250 m, from scripts/venue-access.mjs. A venue the script has not
 * measured falls back to its hand flag.
 */
export const HARD_ACCESS_RELIEF_M = 40;
export const HARD_ACCESS_MAX_STREETS = 4;

export function isStrained(venue: Venue): boolean {
  const row = VENUE_ACCESS.find((r) => r.venueId === venue.id);
  if (!row) return Boolean(venue.strained);
  return row.reliefM >= HARD_ACCESS_RELIEF_M && row.streets250 <= HARD_ACCESS_MAX_STREETS;
}

/** The capacity that applied in that year and setup, if one is stored. */
export function capacityOn(venue: Venue, date: LocalDate, setup?: string): number | undefined {
  const year = Number(date.slice(0, 4));
  const fits = venue.capacity.filter((c) => (c.fromYear ?? 0) <= year);
  const match = fits.filter((c) => c.setup === setup).at(-1) ?? fits.filter((c) => !c.setup).at(-1) ?? fits[0];
  return match?.seats;
}
