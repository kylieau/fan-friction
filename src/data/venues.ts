// Venues as their own records. Capacity is stored by year and setup, since it
// changes (the Coliseum held 93,607 in 2017 and 77,500 after its renovation).
// Capacities checked Oct 1, 2026 against venue guides and news reports.
// Locations are approximate to the venue's center, good enough for the map.

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
      { seats: 93607 },
      { seats: 77500, fromYear: 2019, note: 'After the 2018–19 renovation' },
    ],
    roof: 'open',
  },
  'bmo-stadium': {
    id: 'bmo-stadium',
    metroId: 'la',
    // Renamed in 2023; the exact month isn't checked yet.
    names: [{ name: 'Banc of California Stadium' }, { name: 'BMO Stadium', from: '2023-01-01' }],
    location: [-118.2847, 34.0127],
    capacity: [
      { seats: 22000, setup: 'soccer' },
      { seats: 24000, setup: 'concert' },
    ],
    roof: 'open',
  },
  'sofi-stadium': {
    id: 'sofi-stadium',
    metroId: 'la',
    names: [{ name: 'SoFi Stadium' }],
    location: [-118.3392, 33.9535],
    capacity: [{ seats: 70240, fromYear: 2020, note: 'Expandable to about 100,000 for the biggest events' }],
    roof: 'covered',
  },
  'intuit-dome': {
    id: 'intuit-dome',
    metroId: 'la',
    names: [{ name: 'Intuit Dome' }],
    location: [-118.3415, 33.945],
    capacity: [{ seats: 18000, fromYear: 2024, note: 'Up to about 18,500 for concerts' }],
    roof: 'indoor',
  },
  'kia-forum': {
    id: 'kia-forum',
    metroId: 'la',
    // Known as The Forum before Kia's naming deal; only the current name is stored for now.
    names: [{ name: 'Kia Forum' }],
    location: [-118.3419, 33.9583],
    capacity: [{ seats: 17505, setup: 'concert' }],
    roof: 'indoor',
  },
  'hollywood-bowl': {
    id: 'hollywood-bowl',
    metroId: 'la',
    names: [{ name: 'Hollywood Bowl' }],
    location: [-118.3391, 34.1122],
    capacity: [{ seats: 17500 }],
    roof: 'open',
  },
  'rose-bowl': {
    id: 'rose-bowl',
    metroId: 'la',
    names: [{ name: 'Rose Bowl' }],
    location: [-118.1676, 34.1613],
    capacity: [{ seats: 89702, note: 'Sources disagree (some say 92,542); recheck before showing it' }],
    roof: 'open',
  },
  'dignity-health-sports-park': {
    id: 'dignity-health-sports-park',
    metroId: 'la',
    names: [{ name: 'StubHub Center' }, { name: 'Dignity Health Sports Park', from: '2019-01-01' }],
    location: [-118.2611, 33.8644],
    capacity: [{ seats: 27167 }],
    roof: 'open',
  },
  'angel-stadium': {
    id: 'angel-stadium',
    metroId: 'la',
    names: [{ name: 'Angel Stadium' }],
    location: [-117.8827, 33.8003],
    capacity: [{ seats: 45517 }],
    roof: 'open',
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
  'empire-polo-club': {
    id: 'empire-polo-club',
    metroId: 'indio',
    names: [{ name: 'Empire Polo Club' }],
    location: [-116.2372, 33.6803],
    capacity: [{ seats: 125000, setup: 'concert', note: 'Festival grounds. Rough figure, not a seat count.' }],
    roof: 'open',
  },
  'ventura-theater': {
    id: 'ventura-theater',
    metroId: 'ventura',
    names: [{ name: 'Ventura Theater' }],
    location: [-119.2978, 34.2805],
    capacity: [{ seats: 1000, setup: 'concert', note: 'About 1,000. Estimated.' }],
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
