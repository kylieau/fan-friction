// Venues as their own records. Capacity is stored by year and setup, since it
// changes (the Coliseum held 93,607 in 2017 and 77,500 after its renovation).
// Capacities checked Oct 1, 2026 against venue guides and news reports, and
// again Oct 6, 2026 against the venue research in docs/la-venue-table-answer.md
// (every 5,000+ room in Los Angeles and Orange County). Sources per venue are
// in docs/data-sources.md. Figures are official unless a note says reported
// or estimated. Locations: OpenStreetMap where it knows the building, else
// the research's approximation, said so in a comment.

import type { LocalDate, Venue } from './types';

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
    location: [-73.8458, 40.7571],
    capacity: [{ seats: 41922, setup: 'baseball', note: 'Listed capacity' }],
    roof: 'open',
  },
  'petco-park': {
    id: 'petco-park',
    metroId: 'san-diego',
    names: [{ name: 'Petco Park' }],
    location: [-117.1573, 32.7073],
    capacity: [{ seats: 39860, setup: 'baseball', note: 'Listed capacity' }],
    roof: 'open',
  },
  't-mobile-park': {
    id: 't-mobile-park',
    metroId: 'seattle',
    names: [{ name: 'T-Mobile Park' }],
    location: [-122.3321, 47.5914],
    capacity: [{ seats: 47929, setup: 'baseball', note: 'Listed capacity' }],
    roof: 'covered',
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

/** The capacity that applied in that year and setup, if one is stored. */
export function capacityOn(venue: Venue, date: LocalDate, setup?: string): number | undefined {
  const year = Number(date.slice(0, 4));
  const fits = venue.capacity.filter((c) => (c.fromYear ?? 0) <= year);
  const match = fits.filter((c) => c.setup === setup).at(-1) ?? fits.filter((c) => !c.setup).at(-1) ?? fits[0];
  return match?.seats;
}
