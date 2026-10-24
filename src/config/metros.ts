// Metros are their own records so the app isn't tied to LA. LA is the seed.
export interface Metro {
  id: string;
  name: string;
  timeZone: string;
  /** The short code shown over a read box for a date outside home (build notes 3, 4.5): "MIL". */
  code: string;
  /** Map center as [longitude, latitude]. */
  center: [number, number];
  /**
   * The fixed downtown points a room's drive is measured from, [longitude, latitude] (Kylie, Oct 23, 2026: the drive-time
   * rule, docs/research/topics/city-boundary-answer.md). Each is the city hall. A city with several real centers lists each
   * one (the Bay Area's three, Dallas–Fort Worth, Minneapolis–St. Paul, Raleigh–Durham, Ottawa–Gatineau), and a room needs
   * to be near only one; Los Angeles keeps one (her call). scripts/further-out-drive.mjs applies the rule.
   */
  downtowns: [number, number][];
  zoom: number;
}

/**
 * Cities the nightly jobs cover: schedules, weather, results and the shared
 * catalog (docs/reference/new-city-checklist.md). Adding a city here is step 1.
 */
export const COVERED_METRO_IDS = ['la', 'san-diego', 'seattle', 'new-york', 'atlanta', 'bay-area', 'chicago', 'dallas-fort-worth', 'detroit', 'montreal', 'milwaukee', 'boston', 'philadelphia', 'pittsburgh', 'tampa', 'miami', 'columbus', 'cleveland', 'nashville', 'austin', 'phoenix', 'vancouver', 'sacramento', 'mexico-city', 'las-vegas', 'kansas-city', 'houston', 'indianapolis', 'toronto', 'minneapolis', 'new-orleans', 'salt-lake-city', 'ottawa-gatineau', 'edmonton', 'washington-dc', 'san-antonio', 'portland', 'raleigh-durham', 'st-louis', 'denver'] as const;

/**
 * Cities that read temperatures in Celsius: Canada and Mexico. Their IANA zones all begin "America/",
 * so the zone alone cannot say; the zone is the key and this is the list (a new city in either country
 * adds its zone here, or nothing if the zone is already listed).
 */
const CELSIUS_ZONES = new Set([
  'America/Toronto',
  'America/Montreal',
  'America/Vancouver',
  'America/Edmonton',
  'America/Winnipeg',
  'America/Halifax',
  'America/Regina',
  'America/St_Johns',
  'America/Mexico_City',
  'America/Monterrey',
  'America/Tijuana',
]);

/** Does this city show temperatures in °C? The data and the formula stay in °F; only the words change. */
export function usesCelsius(metroId: string): boolean {
  const zone = METROS[metroId]?.timeZone;
  return zone !== undefined && CELSIUS_ZONES.has(zone);
}

/** A feels-like or air temperature (given in °F) as the city reads it: "84°" in the US, "29°" in Canada and Mexico. */
export function degreesFor(fahrenheit: number, metroId: string): string {
  const value = usesCelsius(metroId) ? ((fahrenheit - 32) * 5) / 9 : fahrenheit;
  return `${Math.round(value)}°`;
}

export const METROS: Record<string, Metro> = {
  la: {
    id: 'la', code: 'LA',
    name: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
    center: [-118.3, 33.97],
    // Los Angeles City Hall.
    downtowns: [[-118.24292, 34.0537]],
    zoom: 9.5,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/boston/boston-venue-table-answer.md): Boston–Cambridge–Newton MSA core,
  // Foxborough/Mansfield corridor and Lowell edge. One frame holds downtown, Fenway and the Garden; Gillette and Xfinity sit off it.
  boston: {
    id: 'boston', code: 'BOS',
    name: 'Boston',
    timeZone: 'America/New_York',
    center: [-71.08, 42.36],
    // Boston City Hall.
    downtowns: [[-71.05798, 42.36037]],
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
    // Chicago City Hall.
    downtowns: [[-87.63195, 41.88383]],
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
    // Columbus City Hall.
    downtowns: [[-83.00341, 39.96258]],
    zoom: 11.2,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/cleveland/cleveland-venue-table-answer.md): five-county core
  // (Cuyahoga, Geauga, Lake, Lorain, Medina) plus Blossom as an edge room. One frame holds downtown Gateway,
  // the lakefront and Playhouse Square; Eastlake, Avon and Blossom sit off the first view.
  cleveland: {
    id: 'cleveland', code: 'CLE',
    name: 'Cleveland',
    timeZone: 'America/New_York',
    center: [-81.69, 41.499],
    // Cleveland City Hall.
    downtowns: [[-81.69365, 41.50511]],
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
    // New York City Hall.
    downtowns: [[-74.00594, 40.71274]],
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
    // Atlanta City Hall.
    downtowns: [[-84.39078, 33.74862]],
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
    // San Francisco City Hall and Oakland City Hall and San Jose City Hall.
    downtowns: [[-122.41926, 37.77929], [-122.27258, 37.80532], [-121.88532, 37.33803]],
    zoom: 9.2,
  },
  // Covered Oct 8, 2026 (docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-venue-table-answer.md): Dallas, Tarrant, Collin and Denton
  // counties. One frame holds Dallas, Arlington, Fort Worth and Frisco; Denton and the Speedway sit off it.
  'dallas-fort-worth': {
    id: 'dallas-fort-worth', code: 'DFW',
    name: 'Dallas–Fort Worth',
    timeZone: 'America/Chicago',
    center: [-97.0, 32.85],
    // Dallas City Hall and Fort Worth City Hall.
    downtowns: [[-96.79694, 32.77627], [-97.34348, 32.75292]],
    zoom: 9,
  },
  // Covered Oct 8, 2026 (docs/research/city-builds/montreal/montreal-venue-table-answer.md): the island, Laval, Longueuil and the South Shore.
  // One frame holds downtown, the Olympic Park, Parc Jean-Drapeau and Laval's Place Bell.
  montreal: {
    id: 'montreal', code: 'MTL',
    name: 'Montreal',
    timeZone: 'America/Toronto',
    center: [-73.6, 45.53],
    // Hôtel de Ville de Montréal.
    downtowns: [[-73.55414, 45.50884]],
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
    // Palacio del Ayuntamiento.
    downtowns: [[-99.13428, 19.43164]],
    zoom: 10.2,
  },
  // Milwaukee, Waukesha, Ozaukee and Washington counties (Kylie, Oct 11, 2026).
  milwaukee: {
    id: 'milwaukee', code: 'MIL', name: 'Milwaukee', timeZone: 'America/Chicago',
    center: [-87.96, 43.04], zoom: 10.5,
    // Milwaukee City Hall.
    downtowns: [[-87.90975, 43.04171]],
  },
  // Philadelphia–Camden–Wilmington MSA core (Oct 12, 2026; docs/research/city-builds/philadelphia/philadelphia-venue-table-answer.md).
  // Frames the Sports Complex, University City, North Broad, Chester and Camden on one phone screen; Villanova and edge-tier Delaware rooms sit off the first view.
  philadelphia: {
    id: 'philadelphia', code: 'PHI',
    name: 'Philadelphia',
    timeZone: 'America/New_York',
    center: [-75.17, 39.95],
    // Philadelphia City Hall.
    downtowns: [[-75.16299, 39.9524]],
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
    // Phoenix City Hall.
    downtowns: [[-112.07711, 33.44879]],
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
    // Sacramento City Hall.
    downtowns: [[-121.49332, 38.5823]],
    zoom: 10.8,
  },
  'san-diego': {
    id: 'san-diego', code: 'SD',
    name: 'San Diego',
    timeZone: 'America/Los_Angeles',
    center: [-117.1573, 32.7073],
    // San Diego City Hall.
    downtowns: [[-117.16284, 32.717]],
    zoom: 12,
  },
  seattle: {
    id: 'seattle', code: 'SEA',
    name: 'Seattle',
    timeZone: 'America/Los_Angeles',
    // Between the stadium district and the university, so both fit one phone screen.
    center: [-122.335, 47.615],
    // Seattle City Hall.
    downtowns: [[-122.3301, 47.60389]],
    zoom: 12,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/tampa/tampa-venue-table-answer.md): Hillsborough and Pinellas
  // counties (venue core). One frame holds Tampa, St. Petersburg and Clearwater; Steinbrenner and the fairgrounds sit off-center.
  tampa: {
    id: 'tampa', code: 'TPA',
    name: 'Tampa Bay',
    timeZone: 'America/New_York',
    center: [-82.55, 27.92],
    // Tampa City Hall.
    downtowns: [[-82.45724, 27.94766]],
    zoom: 10.2,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/miami/miami-venue-table-answer.md): Miami-Dade + Broward core.
  // One frame holds downtown, Little Havana, Miami Gardens and Sunrise; Homestead and Hollywood sit toward the edges.
  miami: {
    id: 'miami', code: 'MIA',
    name: 'Miami',
    timeZone: 'America/New_York',
    center: [-80.22, 25.84],
    // Stephen P. Clark Government Center.
    downtowns: [[-80.196, 25.7752]],
    zoom: 10.4,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/nashville/nashville-venue-table-answer.md):
  // Nashville–Davidson–Murfreesboro–Franklin MSA. One frame holds downtown, Vanderbilt and the fairgrounds;
  // the Opry, Murfreesboro, Lebanon and Thompson's Station sit off the first view. Clarksville is a separate MSA and is not in this metro.
  nashville: {
    id: 'nashville', code: 'BNA',
    name: 'Nashville',
    timeZone: 'America/Chicago',
    center: [-86.78, 36.16],
    // Metro Nashville Courthouse.
    downtowns: [[-86.77833, 36.16742]],
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
    // Austin City Hall.
    downtowns: [[-97.74721, 30.26481]],
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
    // Vancouver City Hall.
    downtowns: [[-123.11396, 49.26089]],
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
    // Las Vegas City Hall.
    downtowns: [[-115.1485, 36.16730]],
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
    // Kansas City City Hall.
    downtowns: [[-94.57792, 39.1006]],
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
    // Houston City Hall.
    downtowns: [[-95.36937, 29.76018]],
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
    // Indianapolis City-County Building.
    downtowns: [[-86.15354, 39.76797]],
    zoom: 10.4,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/toronto/toronto-venue-table-answer.md): City of Toronto plus Peel, York, Halton and Durham through Oshawa.
  // Hamilton is a separate city. One frame holds downtown, the Union Station pair and Exhibition Place; North York, Mississauga, Brampton and Oshawa sit off the first view.
  toronto: {
    id: 'toronto', code: 'TOR',
    name: 'Toronto',
    timeZone: 'America/Toronto',
    center: [-79.40, 43.64],
    // Toronto City Hall.
    downtowns: [[-79.38401, 43.6536]],
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
    // Minneapolis City Hall and Saint Paul City Hall.
    downtowns: [[-93.26507, 44.97731], [-93.09395, 44.94428]],
    zoom: 10.4,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/detroit/). Six-county Detroit–Warren–Dearborn MSA plus Ann Arbor
  // and Windsor edge rooms. One frame holds District Detroit (Ford Field, Comerica Park, Little Caesars Arena);
  // Ann Arbor, the amphitheatres and Hamtramck sit off the first view.
  detroit: {
    id: 'detroit', code: 'DET',
    name: 'Detroit',
    timeZone: 'America/Detroit',
    center: [-83.05, 42.34],
    // Coleman A. Young Municipal Center.
    downtowns: [[-83.0442, 42.3297]],
    zoom: 11.2,
  },
  // Covered Oct 12, 2026 (docs/research/city-builds/new-orleans/). Orleans Parish plus Jefferson Parish
  // (East Bank and West Bank). One frame holds the Superdome, Uptown, Gentilly, City Park and the Lakefront;
  // Kenner and Westwego sit off the first view. St. Tammany stays outside.
  'new-orleans': {
    id: 'new-orleans', code: 'NOLA',
    name: 'New Orleans',
    timeZone: 'America/Chicago',
    center: [-90.09, 29.97],
    // New Orleans City Hall.
    downtowns: [[-90.07729, 29.95213]],
    zoom: 10.6,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/denver/denver-venue-table-answer.md): Denver–Aurora–Centennial MSA core.
  // One frame holds the downtown cluster (Empower Field, Coors Field, Ball Arena); Red Rocks, DSG Park and Centennial sit off the first view.
  denver: {
    id: 'denver', code: 'DEN',
    name: 'Denver',
    timeZone: 'America/Denver',
    center: [-104.99, 39.744],
    // Denver City and County Building.
    downtowns: [[-104.99073, 39.7392]],
    zoom: 10.4,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/raleigh-durham/): Wake, Durham and Orange counties as one app metro
  // (Raleigh, Durham, Chapel Hill, Cary and suburbs). One frame holds the UNC, Duke, NCCU, downtown Durham, West Raleigh,
  // NC State and downtown Raleigh clusters plus Cary; Walnut Creek, Holly Springs and Zebulon sit off the first view.
  // Johnston, Franklin, Chatham and Person are audience-origin counties with no verified room. Harnett, Lee and Vance are excluded.
  'raleigh-durham': {
    id: 'raleigh-durham', code: 'RDU',
    name: 'Raleigh–Durham',
    timeZone: 'America/New_York',
    center: [-78.83, 35.87],
    // Raleigh Municipal Building and Durham City Hall.
    downtowns: [[-78.64299, 35.77873], [-78.89881, 35.99621]],
    zoom: 9.2,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/pittsburgh/pittsburgh-venue-table-answer.md): eight-county MSA,
  // Allegheny core. One frame holds the North Shore, Downtown and Oakland; Star Lake, Butler County and Washington County rooms sit off it.
  pittsburgh: {
    id: 'pittsburgh', code: 'PIT',
    name: 'Pittsburgh',
    timeZone: 'America/New_York',
    center: [-79.99, 40.44],
    // Pittsburgh City-County Building.
    downtowns: [[-79.99685, 40.43811]],
    zoom: 10.5,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/portland/portland-venue-table-answer.md): Multnomah, Washington,
  // Clackamas and Clark counties. One frame holds downtown, Goose Hollow and the Rose Quarter; Hillsboro, Ridgefield
  // and Troutdale sit off the first view.
  portland: {
    id: 'portland', code: 'PDX',
    name: 'Portland',
    timeZone: 'America/Los_Angeles',
    center: [-122.65, 45.52],
    // Portland City Hall.
    downtowns: [[-122.67911, 45.51501]],
    zoom: 10.3,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/san-antonio/san-antonio-venue-table-answer.md): Bexar County core,
  // plus Selma and New Braunfels edge rooms. One frame holds downtown and the Alamodome; the east-side grounds,
  // Toyota Field, Wolff Stadium and Whitewater sit off the first view.
  'san-antonio': {
    id: 'san-antonio', code: 'SAT',
    name: 'San Antonio',
    timeZone: 'America/Chicago',
    center: [-98.49, 29.43],
    // San Antonio City Hall.
    downtowns: [[-98.49513, 29.42458]],
    zoom: 10.4,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/washington-dc/washington-dc-venue-table-answer.md): DC plus Prince George's,
  // Montgomery, Arlington, Alexandria, Fairfax and Loudoun; edge rooms in Prince William (Jiffy Lube Live) and Howard (Merriweather).
  // One frame holds Penn Quarter, Navy Yard and Buzzard Point; Landover, College Park and the suburban amphitheatres sit off the first view.
  'washington-dc': {
    id: 'washington-dc', code: 'DC',
    name: 'Washington, DC',
    timeZone: 'America/New_York',
    center: [-77.02, 38.90],
    // John A. Wilson Building.
    downtowns: [[-77.03134, 38.89497]],
    zoom: 10.5,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/edmonton/edmonton-venue-table-answer.md): Edmonton Metropolitan
  // Region (13 municipalities). One frame holds downtown/ICE District, Commonwealth/EXPO Lands and the river valley;
  // St. Albert, Sherwood Park, Spruce Grove and Century Mile sit off the first view.
  edmonton: {
    id: 'edmonton', code: 'EDM',
    name: 'Edmonton',
    timeZone: 'America/Edmonton',
    center: [-113.49, 53.55],
    // Edmonton City Hall.
    downtowns: [[-113.49016, 53.54547]],
    zoom: 10.5,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/ottawa-gatineau/): City of Ottawa plus Ville de Gatineau.
  // One frame holds downtown, Lansdowne and the Glebe; Kanata, the east-end ballpark and south Ottawa casino sit off it.
  'ottawa-gatineau': {
    id: 'ottawa-gatineau', code: 'OTT',
    name: 'Ottawa–Gatineau',
    timeZone: 'America/Toronto',
    center: [-75.72, 45.42],
    // Ottawa City Hall and Maison du citoyen.
    downtowns: [[-75.69027, 45.4208], [-75.71196, 45.42797]],
    zoom: 10.5,
  },
  // Covered Oct 13, 2026 (docs/research/city-builds/st-louis/st-louis-venue-table-answer.md): St. Louis city and county,
  // St. Charles, and Metro East (Madison and St. Clair). One frame holds downtown, Forest Park and Maryland Heights;
  // WWTR, St. Charles, Edwardsville and O'Fallon sit off the first view.
  'st-louis': {
    id: 'st-louis', code: 'STL',
    name: 'St. Louis',
    timeZone: 'America/Chicago',
    center: [-90.20, 38.63],
    // St. Louis City Hall.
    downtowns: [[-90.1994, 38.62683]],
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
    // Salt Lake City and County Building.
    downtowns: [[-111.8868, 40.75953]],
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
