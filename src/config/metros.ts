// Metros are their own records so the app isn't tied to LA. LA is the seed.
export interface Metro {
  id: string;
  name: string;
  timeZone: string;
  /** Map center as [longitude, latitude]. */
  center: [number, number];
  zoom: number;
}

/**
 * Cities the nightly jobs cover: schedules, weather, results and the shared
 * catalog (docs/new-city-checklist.md). Adding a city here is step 1.
 */
export const COVERED_METRO_IDS = ['la', 'san-diego'] as const;

export const METROS: Record<string, Metro> = {
  la: {
    id: 'la',
    name: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
    center: [-118.3, 33.97],
    zoom: 9.5,
  },
  // Real away and neutral markets from her log. Not one row per building.
  // Inglewood, Pasadena, Anaheim, and Ventura are Los Angeles. Indio is one
  // festival site, so it is not a metro. New York is Citi Field only.
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
};

export const DEFAULT_METRO = METROS.la;

/** Los Angeles first, then the other real metros by name. */
export function areaMetros(): Metro[] {
  const rest = Object.values(METROS)
    .filter((metro) => metro.id !== DEFAULT_METRO.id)
    .sort((a, b) => a.name.localeCompare(b.name));
  return [DEFAULT_METRO, ...rest];
}
