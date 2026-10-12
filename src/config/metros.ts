// Metros are their own records so the app isn't tied to LA. LA is the seed.
export interface Metro {
  id: string;
  name: string;
  timeZone: string;
  /** The short code shown over a read box for a date outside home (build notes 3, 4.5): "MIL". */
  code: string;
  /** Map center as [longitude, latitude]. */
  center: [number, number];
  zoom: number;
}

/**
 * Cities the nightly jobs cover: schedules, weather, results and the shared
 * catalog (docs/reference/new-city-checklist.md). Adding a city here is step 1.
 */
export const COVERED_METRO_IDS = ['la', 'san-diego', 'seattle', 'new-york', 'atlanta', 'bay-area', 'chicago', 'dallas-fort-worth', 'montreal', 'milwaukee', 'boston', 'philadelphia', 'tampa', 'columbus', 'nashville', 'austin', 'phoenix', 'vancouver'] as const;

export const METROS: Record<string, Metro> = {
  la: {
    id: 'la', code: 'LA',
    name: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
    center: [-118.3, 33.97],
    zoom: 9.5,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/boston/boston-venue-table-answer.md): Boston–Cambridge–Newton MSA core,
  // Foxborough/Mansfield corridor and Lowell edge. One frame holds downtown, Fenway and the Garden; Gillette and Xfinity sit off it.
  boston: {
    id: 'boston', code: 'BOS',
    name: 'Boston',
    timeZone: 'America/New_York',
    center: [-71.08, 42.36],
    zoom: 10.8,
  },
  // Covered Oct 7, 2026 (docs/research/city-builds/chicago/chicago-venue-table-answer.md): the city, Cook County and the named
  // collar towns, plus Chicagoland Speedway in Joliet (the research's one addition). One frame holds
  // the lakefront, the West Side, Evanston and Rosemont; Tinley Park, Hoffman Estates and Joliet sit off it.
  chicago: {
    id: 'chicago', code: 'CHI',
    name: 'Chicago',
    timeZone: 'America/Chicago',
    center: [-87.72, 41.88],
    zoom: 9.3,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/columbus/columbus-venue-table-answer.md): 10-county MSA as the
  // outer boundary, Franklin County core, plus Delaware (Selby) and Newark (Midland). One frame holds Ohio Stadium,
  // the Arena District and the fairgrounds; Delaware, Newark and Mid-Ohio sit off the first view.
  columbus: {
    id: 'columbus', code: 'CBUS',
    name: 'Columbus',
    timeZone: 'America/New_York',
    center: [-83.01, 39.985],
    zoom: 11.2,
  },
  // Covered Oct 7, 2026 (docs/research/city-builds/new-york/new-york-venue-table-answer.md). The region runs from the
  // Meadowlands to Stony Brook; this frames Manhattan, the Bronx, Queens, Brooklyn, Newark
  // and Elmont on one phone screen. Jones Beach, PNC and Stony Brook sit off the first view.
  'new-york': {
    id: 'new-york', code: 'NYC',
    name: 'New York',
    timeZone: 'America/New_York',
    center: [-73.93, 40.75],
    zoom: 10.5,
  },
  // Covered Oct 7, 2026 (docs/research/city-builds/atlanta/atlanta-venue-table-answer.md): the 11-county core, from Kennesaw
  // and Alpharetta down to Hampton. This frames Downtown, Midtown, the Battery and Lakewood on one
  // phone screen; Gas South, Alpharetta, Kennesaw and the speedway sit off the first view.
  atlanta: {
    id: 'atlanta', code: 'ATL',
    name: 'Atlanta',
    timeZone: 'America/New_York',
    center: [-84.4, 33.8],
    zoom: 10.5,
  },
  // Covered Oct 7, 2026 (docs/research/city-builds/bay-area/bay-area-venue-table-answer.md): San Francisco, Alameda, Contra Costa,
  // San Mateo and Santa Clara counties. One frame holds San Francisco, Oakland, Berkeley and
  // San Jose; Concord and Pleasanton sit off the first view. Three centers 30–45 miles apart.
  'bay-area': {
    id: 'bay-area', code: 'BAY',
    name: 'Bay Area',
    timeZone: 'America/Los_Angeles',
    center: [-122.2, 37.62],
    zoom: 9.2,
  },
  // Covered Oct 8, 2026 (docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-venue-table-answer.md): Dallas, Tarrant, Collin and Denton
  // counties. One frame holds Dallas, Arlington, Fort Worth and Frisco; Denton and the Speedway sit off it.
  'dallas-fort-worth': {
    id: 'dallas-fort-worth', code: 'DFW',
    name: 'Dallas–Fort Worth',
    timeZone: 'America/Chicago',
    center: [-97.0, 32.85],
    zoom: 9,
  },
  // Covered Oct 8, 2026 (docs/research/city-builds/montreal/montreal-venue-table-answer.md): the island, Laval, Longueuil and the South Shore.
  // One frame holds downtown, the Olympic Park, Parc Jean-Drapeau and Laval's Place Bell.
  montreal: {
    id: 'montreal', code: 'MTL',
    name: 'Montreal',
    timeZone: 'America/Toronto',
    center: [-73.6, 45.53],
    zoom: 10.5,
  },
  // Milwaukee, Waukesha, Ozaukee and Washington counties (Kylie, Oct 11, 2026).
  milwaukee: {
    id: 'milwaukee', code: 'MIL', name: 'Milwaukee', timeZone: 'America/Chicago',
    center: [-87.96, 43.04], zoom: 10.5,
  },
  // Philadelphia–Camden–Wilmington MSA core (Oct 12, 2026; docs/research/city-builds/philadelphia/philadelphia-venue-table-answer.md).
  // Frames the Sports Complex, University City, North Broad, Chester and Camden on one phone screen; Villanova and edge-tier Delaware rooms sit off the first view.
  philadelphia: {
    id: 'philadelphia', code: 'PHI',
    name: 'Philadelphia',
    timeZone: 'America/New_York',
    center: [-75.17, 39.95],
    zoom: 10.3,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/phoenix/phoenix-venue-table-answer.md): Maricopa County
  // plus tribal venues with Valley addresses (Salt River Fields, Firebird). Pinal edge festivals stay out.
  // One frame holds downtown, Tempe and Westgate; Surprise, Peoria, Goodyear and the raceway sit off it.
  phoenix: {
    id: 'phoenix', code: 'PHX',
    name: 'Phoenix',
    timeZone: 'America/Phoenix',
    center: [-112.10, 33.48],
    zoom: 10.2,
  },
  sacramento: {
    id: 'sacramento', code: 'SAC',
    name: 'Sacramento',
    timeZone: 'America/Los_Angeles',
    center: [-121.4996, 38.5802],
    zoom: 12,
  },
  'san-diego': {
    id: 'san-diego', code: 'SD',
    name: 'San Diego',
    timeZone: 'America/Los_Angeles',
    center: [-117.1573, 32.7073],
    zoom: 12,
  },
  seattle: {
    id: 'seattle', code: 'SEA',
    name: 'Seattle',
    timeZone: 'America/Los_Angeles',
    // Between the stadium district and the university, so both fit one phone screen.
    center: [-122.335, 47.615],
    zoom: 12,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/tampa/tampa-venue-table-answer.md): Hillsborough and Pinellas
  // counties (venue core). One frame holds Tampa, St. Petersburg and Clearwater; Steinbrenner and the fairgrounds sit off-center.
  tampa: {
    id: 'tampa', code: 'TPA',
    name: 'Tampa',
    timeZone: 'America/New_York',
    center: [-82.55, 27.92],
    zoom: 10.2,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/nashville/nashville-venue-table-answer.md):
  // Nashville–Davidson–Murfreesboro–Franklin MSA. One frame holds downtown, Vanderbilt and the fairgrounds;
  // the Opry, Murfreesboro, Lebanon and Thompson's Station sit off the first view. Clarksville is a separate MSA and is not in this metro.
  nashville: {
    id: 'nashville', code: 'BNA',
    name: 'Nashville',
    timeZone: 'America/Chicago',
    center: [-86.78, 36.16],
    zoom: 10.6,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/austin/austin-venue-table-answer.md): Austin–Round Rock–San Marcos MSA
  // (Travis, Williamson, Hays, plus Bastrop and Caldwell, which have no fixed rooms). One frame holds downtown, the UT campus,
  // Q2, Round Rock and Cedar Park. San Marcos and Circuit of The Americas sit off the first view.
  austin: {
    id: 'austin', code: 'ATX',
    name: 'Austin',
    timeZone: 'America/Chicago',
    center: [-97.74, 30.35],
    zoom: 9.6,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/vancouver/vancouver-venue-table-answer.md): Metro Vancouver
  // (the regional district / CMA). One frame holds downtown, Hastings Park and Burnaby; UBC sits toward the
  // edge and Langley sits off the first view. Abbotsford and Victoria stay outside this metro.
  vancouver: {
    id: 'vancouver', code: 'VAN',
    name: 'Vancouver',
    timeZone: 'America/Vancouver',
    center: [-123.1, 49.26],
    zoom: 10.5,
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
