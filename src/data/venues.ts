// Venues as their own records. Capacity is stored by year and setup, since it
// changes (the Coliseum held 93,607 in 2017 and 77,500 after its renovation).
// Capacities checked Oct 1, 2026 against venue guides and news reports, and
// again Oct 6, 2026 against the venue research in docs/la-venue-table-answer.md
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
    // LA Phil: 39% came by bus in 2025 (26% in 2022), so about 61% by car or other (docs/venue-egress-answer.md).
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
    capacity: [{ seats: 89702, note: 'The stadium\'s all-seated figure. UCLA reports 91,136; aggregators say 92,542.' }],
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
  'citi-field': {
    id: 'citi-field',
    metroId: 'new-york',
    names: [{ name: 'Citi Field' }],
    // Reported: transit share reached 45% during the 2008–09 construction years (Sam Schwartz); a historical figure.
    carShare: 0.55,
    location: [-73.8458, 40.7571],
    capacity: [{ seats: 41922, setup: 'baseball', note: 'Listed capacity' }],
    roof: 'open',
  },
  'petco-park': {
    id: 'petco-park',
    metroId: 'san-diego',
    names: [{ name: 'Petco Park' }],
    // Estimated: MTS counts about 8,000 trolley riders on a sellout against 39,860 seats (docs/venue-egress-answer.md).
    carShare: 0.8,
    location: [-117.1569, 32.7072],
    capacity: [{ seats: 39860, setup: 'baseball', note: 'Fixed seats (MLB). 42,445 is also reported and likely counts standing room.' }],
    roof: 'open',
  },
  // ---- San Diego, from docs/san-diego-venue-table-answer.md (Oct 6, 2026) ----
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
  // ---- Seattle, from docs/seattle-venue-table-answer.md (Oct 6, 2026): King, Pierce and Snohomish counties, plus the Gorge ----
  'husky-stadium': {
    id: 'husky-stadium',
    metroId: 'seattle',
    // The field is "Alaska Airlines Field at Husky Stadium"; ESPN and the schedule say Husky Stadium.
    names: [{ name: 'Husky Stadium' }],
    location: [-122.3016, 47.6503],
    capacity: [{ seats: 72132, setup: 'football', note: 'Washington Huskies (official). Roofs over both sidelines; the ends are open.' }],
    roof: 'open',
  },
  'lumen-field': {
    id: 'lumen-field',
    metroId: 'seattle',
    names: [{ name: 'CenturyLink Field' }, { name: 'Lumen Field', from: '2020-11-19' }],
    location: [-122.3316, 47.5953],
    capacity: [
      { seats: 68740, setup: 'football', note: 'Seahawks (official); expandable to 72,000 for the biggest events' },
      { seats: 37722, setup: 'soccer', note: 'Sounders setup (MLS). The Reign open about 10,000 lower-bowl seats (reported).' },
    ],
    roof: 'open',
  },
  't-mobile-park': {
    id: 't-mobile-park',
    metroId: 'seattle',
    names: [{ name: 'Safeco Field' }, { name: 'T-Mobile Park', from: '2019-01-01' }],
    location: [-122.3323, 47.5915],
    capacity: [
      { seats: 47943, setup: 'baseball', note: 'Mariners (official; 47,929 was the older figure)' },
      { seats: 30144, setup: 'football', note: 'One-off football setup (reported)' },
    ],
    // Retractable: an umbrella that closes for rain, with open sides. Closest of the three roof kinds.
    roof: 'covered',
  },
  'pacific-raceways': {
    id: 'pacific-raceways',
    metroId: 'seattle',
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
    names: [{ name: 'Seattle Center' }],
    location: [-122.3497, 47.6213],
    capacity: [{ seats: 26000, setup: 'concert', note: 'A Bumbershoot-size festival on the grounds, standing (estimated)' }],
    roof: 'open',
  },
  'tacoma-dome': {
    id: 'tacoma-dome',
    metroId: 'seattle',
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
    // KeyArena closed Oct 5, 2018 for the rebuild and reopened as Climate Pledge Arena in October 2021.
    names: [{ name: 'KeyArena' }, { name: 'Climate Pledge Arena', from: '2018-10-05' }],
    location: [-122.354, 47.6219],
    capacity: [
      { seats: 17072, setup: 'basketball', note: 'KeyArena (reported, Wikipedia infobox)' },
      { seats: 17000, setup: 'concert', note: 'KeyArena (reported, Wikipedia infobox)' },
      { seats: 18300, setup: 'basketball', fromYear: 2021, note: 'Official' },
      { seats: 17100, setup: 'hockey', fromYear: 2021, note: 'Kraken (official)' },
      { seats: 17200, setup: 'concert', fromYear: 2021, note: 'End stage (official); 18,600 in the round' },
    ],
    roof: 'indoor',
  },
  'white-river-amphitheatre': {
    id: 'white-river-amphitheatre',
    metroId: 'seattle',
    names: [{ name: 'White River Amphitheatre' }],
    location: [-122.1121, 47.2375],
    capacity: [{ seats: 16000, setup: 'concert', note: 'Reserved seats under a roof plus lawn (official). 20,000 before 2015.' }],
    roof: 'open',
    strained: true,
  },
  'everett-memorial-stadium': {
    id: 'everett-memorial-stadium',
    metroId: 'seattle',
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
    capacity: [{ seats: 12000, note: 'Reported (Wikipedia infobox), before the rebuild' }],
    roof: 'open',
  },
  'washington-state-fair-grandstand': {
    id: 'washington-state-fair-grandstand',
    metroId: 'seattle',
    // Ticketmaster lists the grounds as the Washington State Fair Events Center.
    names: [{ name: 'Washington State Fair Events Center' }, { name: 'Umpqua Bank Grandstand' }],
    // Approximate (the research's figure); the fairgrounds in Puyallup.
    location: [-122.2965, 47.1835],
    capacity: [{ seats: 10200, setup: 'concert', note: 'Grandstand concerts during the fair (official)' }],
    roof: 'open',
  },
  'alaska-airlines-arena': {
    id: 'alaska-airlines-arena',
    metroId: 'seattle',
    names: [{ name: 'Hec Edmundson Pavilion' }, { name: 'Alaska Airlines Arena at Hec Edmundson Pavilion' }, { name: 'Alaska Airlines Arena' }],
    location: [-122.3021, 47.6522],
    capacity: [{ seats: 10000, setup: 'basketball', note: 'Washington Huskies (official)' }],
    roof: 'indoor',
  },
  'angel-of-the-winds-arena': {
    id: 'angel-of-the-winds-arena',
    metroId: 'seattle',
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
    names: [{ name: 'Emerald Downs' }],
    location: [-122.2357, 47.3303],
    capacity: [{ seats: 9100, note: 'No published capacity; the track\'s biggest recent crowd (estimated)' }],
    roof: 'open',
  },
  'evergreen-speedway': {
    id: 'evergreen-speedway',
    metroId: 'seattle',
    names: [{ name: 'Evergreen Speedway' }],
    location: [-121.987, 47.8693],
    capacity: [{ seats: 7500, note: '6,000–7,500 on race nights (reported)' }],
    roof: 'open',
  },
  'accesso-showare-center': {
    id: 'accesso-showare-center',
    metroId: 'seattle',
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
    // The building is the Lumen Field Event Center (CenturyLink Field Event Center until Nov 19, 2020).
    names: [{ name: 'WaMu Theater' }],
    location: [-122.3329, 47.5932],
    capacity: [{ seats: 7000, setup: 'concert', note: 'General admission (official); more with the floor standing' }],
    roof: 'indoor',
  },
  'marymoor-live': {
    id: 'marymoor-live',
    metroId: 'seattle',
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
    names: [{ name: 'Cheney Stadium' }],
    location: [-122.4976, 47.2383],
    capacity: [{ seats: 6500, setup: 'baseball', note: 'Tacoma Rainiers (official)' }],
    roof: 'open',
  },
  'remlinger-farms': {
    id: 'remlinger-farms',
    metroId: 'seattle',
    names: [{ name: 'Remlinger Farms' }],
    location: [-121.9154, 47.6365],
    capacity: [{ seats: 6000, setup: 'concert', note: 'Up to 6,000 (reported)' }],
    roof: 'open',
    strained: true,
  },
  'wintrust-arena': {
    id: 'wintrust-arena',
    metroId: 'chicago',
    names: [{ name: 'Wintrust Arena' }],
    location: [-87.6216, 41.8536],
    capacity: [{ seats: 10387, setup: 'basketball', note: 'Listed basketball capacity' }],
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
    // Estimated by subtraction: the city put walking, biking and transit at 10–15% before opening (docs/venue-egress-answer.md).
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
