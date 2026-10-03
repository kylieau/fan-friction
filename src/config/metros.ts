// Metros are their own records so the app isn't tied to LA. LA is the seed.
export interface Metro {
  id: string;
  name: string;
  timeZone: string;
  /** Map center as [longitude, latitude]. */
  center: [number, number];
  zoom: number;
}

export const METROS: Record<string, Metro> = {
  la: {
    id: 'la',
    name: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
    center: [-118.3, 33.97],
    zoom: 9.5,
  },
  // Cities that show up in her log, and nowhere else. New York is Citi Field
  // only. It is not a full New York pack.
  boston: {
    id: 'boston',
    name: 'Boston',
    timeZone: 'America/New_York',
    center: [-71.1428, 42.3564],
    zoom: 12,
  },
  chicago: {
    id: 'chicago',
    name: 'Chicago',
    timeZone: 'America/Chicago',
    center: [-87.6216, 41.8536],
    zoom: 12,
  },
  columbus: {
    id: 'columbus',
    name: 'Columbus',
    timeZone: 'America/New_York',
    center: [-83.0197, 40.0016],
    zoom: 12,
  },
  indio: {
    id: 'indio',
    name: 'Indio',
    timeZone: 'America/Los_Angeles',
    center: [-116.2372, 33.6803],
    zoom: 12,
  },
  'new-york': {
    id: 'new-york',
    name: 'New York',
    timeZone: 'America/New_York',
    center: [-73.8458, 40.7571],
    zoom: 12,
  },
  phoenix: {
    id: 'phoenix',
    name: 'Phoenix',
    timeZone: 'America/Phoenix',
    center: [-112.0712, 33.4457],
    zoom: 12,
  },
  sacramento: {
    id: 'sacramento',
    name: 'Sacramento',
    timeZone: 'America/Los_Angeles',
    center: [-121.4996, 38.5802],
    zoom: 12,
  },
  'san-diego': {
    id: 'san-diego',
    name: 'San Diego',
    timeZone: 'America/Los_Angeles',
    center: [-117.1573, 32.7073],
    zoom: 12,
  },
  seattle: {
    id: 'seattle',
    name: 'Seattle',
    timeZone: 'America/Los_Angeles',
    center: [-122.3321, 47.5914],
    zoom: 12,
  },
  tampa: {
    id: 'tampa',
    name: 'Tampa',
    timeZone: 'America/New_York',
    center: [-82.4518, 27.9427],
    zoom: 12,
  },
  ventura: {
    id: 'ventura',
    name: 'Ventura',
    timeZone: 'America/Los_Angeles',
    center: [-119.2978, 34.2805],
    zoom: 13,
  },
};

export const DEFAULT_METRO = METROS.la;
