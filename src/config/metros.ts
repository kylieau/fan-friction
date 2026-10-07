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
export const COVERED_METRO_IDS = ['la', 'san-diego', 'seattle', 'new-york', 'atlanta', 'bay-area', 'chicago'] as const;

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
  // Covered Oct 7, 2026 (docs/chicago-venue-table-answer.md): the city, Cook County and the named
  // collar towns, plus Chicagoland Speedway in Joliet (the research's one addition). One frame holds
  // the lakefront, the West Side, Evanston and Rosemont; Tinley Park, Hoffman Estates and Joliet sit off it.
  chicago: {
    id: 'chicago',
    name: 'Chicago',
    timeZone: 'America/Chicago',
    center: [-87.72, 41.88],
    zoom: 9.3,
  },
  columbus: {
    id: 'columbus',
    name: 'Columbus',
    timeZone: 'America/New_York',
    center: [-83.0197, 40.0016],
    zoom: 12,
  },
  // Covered Oct 7, 2026 (docs/archive/research/new-york-venue-table-answer.md). The region runs from the
  // Meadowlands to Stony Brook; this frames Manhattan, the Bronx, Queens, Brooklyn, Newark
  // and Elmont on one phone screen. Jones Beach, PNC and Stony Brook sit off the first view.
  'new-york': {
    id: 'new-york',
    name: 'New York',
    timeZone: 'America/New_York',
    center: [-73.93, 40.75],
    zoom: 10.5,
  },
  // Covered Oct 7, 2026 (docs/archive/research/atlanta-venue-table-answer.md): the 11-county core, from Kennesaw
  // and Alpharetta down to Hampton. This frames Downtown, Midtown, the Battery and Lakewood on one
  // phone screen; Gas South, Alpharetta, Kennesaw and the speedway sit off the first view.
  atlanta: {
    id: 'atlanta',
    name: 'Atlanta',
    timeZone: 'America/New_York',
    center: [-84.4, 33.8],
    zoom: 10.5,
  },
  // Covered Oct 7, 2026 (docs/bay-area-venue-table-answer.md): San Francisco, Alameda, Contra Costa,
  // San Mateo and Santa Clara counties. One frame holds San Francisco, Oakland, Berkeley and
  // San Jose; Concord and Pleasanton sit off the first view. Three centers 30–45 miles apart.
  'bay-area': {
    id: 'bay-area',
    name: 'Bay Area',
    timeZone: 'America/Los_Angeles',
    center: [-122.2, 37.62],
    zoom: 9.2,
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
    // Between the stadium district and the university, so both fit one phone screen.
    center: [-122.335, 47.615],
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
