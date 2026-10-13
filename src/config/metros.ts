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
export const COVERED_METRO_IDS = ['la', 'san-diego', 'seattle', 'new-york', 'atlanta', 'bay-area', 'chicago', 'dallas-fort-worth', 'montreal', 'milwaukee', 'boston', 'philadelphia', 'tampa', 'columbus', 'nashville', 'austin', 'phoenix', 'vancouver', 'sacramento', 'mexico-city', 'las-vegas', 'kansas-city', 'houston', 'indianapolis', 'toronto', 'minneapolis', 'new-orleans', 'salt-lake-city', 'ottawa-gatineau', 'edmonton'] as const;

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
  // Covered Oct 12, 2026 (docs/research/city-builds/mexico-city/mexico-city-venue-table-answer.md): CDMX's 16 alcaldías
  // plus the long-standing ZMVM State of Mexico municipalities. Every fixed room found sits inside CDMX. Toluca, Puebla
  // and Querétaro stay separate cities. One frame holds Nápoles, Mixhuca and the center; Banorte and the north arenas sit off it.
  'mexico-city': {
    id: 'mexico-city', code: 'MEX',
    name: 'Mexico City',
    timeZone: 'America/Mexico_City',
    center: [-99.14, 19.4],
    zoom: 10.2,
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
  // Covered Oct 12, 2026 (docs/research/city-builds/sacramento/sacramento-venue-table-answer.md):
  // Sacramento–Roseville–Folsom MSA (Sacramento, Placer, Yolo, El Dorado) plus Wheatland in Yuba as a named edge.
  // One frame holds downtown, West Sacramento, Cal Expo and Sac State; Davis, Roseville, Lincoln and Wheatland sit off it.
  sacramento: {
    id: 'sacramento', code: 'SAC',
    name: 'Sacramento',
    timeZone: 'America/Los_Angeles',
    center: [-121.47, 38.57],
    zoom: 10.8,
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
  // Covered Oct 12, 2026 (docs/research/city-builds/las-vegas/las-vegas-venue-table-answer.md): the Las Vegas Valley
  // (Las Vegas, North Las Vegas, Henderson, and the unincorporated townships). One frame holds the Strip rooms;
  // downtown, Summerlin, Henderson and the speedway sit off the first view.
  'las-vegas': {
    id: 'las-vegas', code: 'LAS',
    name: 'Las Vegas',
    timeZone: 'America/Los_Angeles',
    center: [-115.172, 36.115],
    zoom: 11,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/kansas-city/kansas-city-venue-table-answer.md): bi-state Kansas City
  // MO–KS core (Jackson, Clay, Platte, Wyandotte, Johnson). One frame holds downtown, the Truman Sports Complex and
  // Village West; Bonner Springs, Independence and Swope Park sit near the edges. Lawrence and Columbia stay out.
  'kansas-city': {
    id: 'kansas-city', code: 'KC',
    name: 'Kansas City',
    timeZone: 'America/Chicago',
    center: [-94.62, 39.08],
    zoom: 9.4,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/houston/). Harris, Fort Bend and Montgomery counties,
  // plus Prairie View as an edge room. One frame holds downtown, EaDo, Reliant Park, UH and Rice;
  // The Woodlands, Sugar Land and Prairie View sit off the first view.
  houston: {
    id: 'houston', code: 'HOU',
    name: 'Houston',
    timeZone: 'America/Chicago',
    center: [-95.39, 29.73],
    zoom: 10.6,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/indianapolis/indianapolis-venue-table-answer.md): Marion County core plus
  // Hamilton (Fishers, Noblesville) and Hendricks (Brownsburg). One frame holds downtown, Speedway and the Fairgrounds;
  // Ruoff and Fishers Event Center sit northeast off the first view. Bloomington and West Lafayette stay out.
  indianapolis: {
    id: 'indianapolis', code: 'IND',
    name: 'Indianapolis',
    timeZone: 'America/Indiana/Indianapolis',
    center: [-86.158, 39.768],
    zoom: 10.4,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/toronto/toronto-venue-table-answer.md): City of Toronto plus Peel, York, Halton and Durham through Oshawa.
  // Hamilton is a separate city. One frame holds downtown, the Union Station pair and Exhibition Place; North York, Mississauga, Brampton and Oshawa sit off the first view.
  toronto: {
    id: 'toronto', code: 'TOR',
    name: 'Toronto',
    timeZone: 'America/Toronto',
    center: [-79.40, 43.64],
    zoom: 10.6,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/minneapolis/minneapolis-venue-table-answer.md):
  // the seven-county Met Council core. One frame holds both downtowns, the university and the Midway;
  // Shakopee, Eagan and Blaine sit off the first view.
  minneapolis: {
    id: 'minneapolis', code: 'MSP',
    name: 'Minneapolis–St. Paul',
    timeZone: 'America/Chicago',
    center: [-93.2, 44.96],
    zoom: 10.4,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/new-orleans/). Orleans Parish plus Jefferson Parish
  // (East Bank and West Bank). One frame holds the Superdome, Uptown, Gentilly, City Park and the Lakefront;
  // Kenner and Westwego sit off the first view. St. Tammany stays outside.
  'new-orleans': {
    id: 'new-orleans', code: 'NOLA',
    name: 'New Orleans',
    timeZone: 'America/Chicago',
    center: [-90.09, 29.97],
    zoom: 10.6,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/edmonton/edmonton-venue-table-answer.md): Edmonton Metropolitan
  // Region (13 municipalities). One frame holds downtown/ICE District, Commonwealth/EXPO Lands and the river valley;
  // St. Albert, Sherwood Park, Spruce Grove and Century Mile sit off the first view.
  edmonton: {
    id: 'edmonton', code: 'EDM',
    name: 'Edmonton',
    timeZone: 'America/Edmonton',
    center: [-113.49, 53.55],
    zoom: 10.5,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/ottawa-gatineau/): City of Ottawa plus Ville de Gatineau.
  // One frame holds downtown, Lansdowne and the Glebe; Kanata, the east-end ballpark and south Ottawa casino sit off it.
  'ottawa-gatineau': {
    id: 'ottawa-gatineau', code: 'OTT',
    name: 'Ottawa–Gatineau',
    timeZone: 'America/Toronto',
    center: [-75.72, 45.42],
    zoom: 10.5,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/salt-lake-city/). Salt Lake County core;
  // Provo, Ogden and Park City stay separate. One frame holds downtown, the U campus and the Fairpark;
  // Sandy, West Valley, South Jordan and Daybreak sit off the first view.
  'salt-lake-city': {
    id: 'salt-lake-city', code: 'SLC',
    name: 'Salt Lake City',
    timeZone: 'America/Denver',
    center: [-111.92, 40.76],
    zoom: 10.8,
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
