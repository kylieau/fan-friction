// Teams as their own records. Home teams carry a metro; visiting teams don't.

import type { Team } from './types';

const team = (
  id: string,
  name: string,
  shortName: string,
  league: string,
  sport: string,
  metroId?: string,
  abbr?: string,
  aliases?: string[],
): Team => ({
  id,
  name,
  shortName,
  abbr,
  aliases,
  league,
  sport,
  metroId,
});

// College programs are one team per sport, the way ESPN lists them (UCLA Football,
// UCLA Women's Basketball), so a favorite is the program, not the school.
const program = (school: string, schoolName: string, code: string, sport: string, league: string, label: string, aliases: string[], short = school.toUpperCase(), abbr = short) =>
  team(`${school}-${code}`, `${schoolName} ${label}`, `${short} ${code.toUpperCase()}`, league, sport, 'la', abbr, aliases);

/**
 * A team's plain code: its own abbreviation, even when another team in its city shares it (Kylie, Oct 15: the
 * Clippers and Chargers are both LAC; the sport icon tells them apart). Replaces C013's nickname letters ("CLI").
 * With no abbreviation, the first three letters of the nickname.
 */
export function teamCode(team: Team): string {
  if (team.abbr) return team.abbr;
  const nick = team.shortName.replace(/^(?:los angeles|la|san diego|sd|san antonio|new york|ny|san jose|sj|sf|chicago|dallas|atlanta|seattle|montreal|milwaukee|boston|philadelphia|tampa bay|tampa|miami|sacramento|sac state|uc davis|nashville|lake country|columbus|ohio state|cleveland|lake county|lake erie|austin|round rock|texas state|vancouver|las vegas|vegas|henderson|unlv|kansas city|kc|houston|sugar land|toronto|minneapolis|minnesota|st\.? paul|saint paul|salt lake city|salt lake|utah|real salt lake|ottawa|gatineau|edmonton|portland|psu|detroit|michigan|fc)\s+/i, '');
  return nick.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase();
}

/** A school's league, not a club's: college, community college and university leagues. */
export function isCollegeLeague(league: string): boolean {
  return /^(college|community college|u sports|ncaa)/i.test(league);
}

/** A school's program, not a club. */
export function isCollegeTeam(team: Team): boolean {
  return isCollegeLeague(team.league);
}

/**
 * Which side a college program is, read from its league or its full name ("College women's basketball", "Marquette
 * Golden Eagles Women's Volleyball"); null when neither says (found Oct 19, 2026: four women's volleyball programs
 * stored under the plain league "College volleyball" were being written as men's). Never guessed from the sport.
 */
export function programSide(team: Team): 'men' | 'women' | null {
  const text = `${team.league} ${team.name}`;
  if (/\bwomen'?s?\b/i.test(text)) return 'women';
  if (/\bmen'?s?\b/i.test(text)) return 'men';
  return null;
}

/**
 * The city shortcuts a pro team's display name uses (Kylie, Oct 19, 2026, and her Oct 19 answers to the naming
 * proposal): these seven always ("LA Dodgers", "NY Rangers"); St. Louis and Tampa Bay only before a one-word
 * nickname ("STL Cardinals", "TB Lightning", but "St. Louis CITY SC", "Tampa Bay Sun FC"); New Orleans never (it
 * reads as the word "no"); every other city is spelled out.
 */
const CITY_SHORTCUTS: Record<string, string> = {
  'Los Angeles': 'LA',
  'New York': 'NY',
  'San Francisco': 'SF',
  'San Diego': 'SD',
  'San Jose': 'SJ',
  'San José': 'SJ',
  'Kansas City': 'KC',
  'Las Vegas': 'LV',
};
const PLAIN_NICKNAME_SHORTCUTS: Record<string, string> = {
  'St. Louis': 'STL',
  'St Louis': 'STL',
  'Tampa Bay': 'TB',
};
/** A stored short name that already is the club's brand ("LAFC", "NYCFC", "Sporting KC", "KC Mavericks"): used as the compact name as it is (Kylie, Oct 19, A2). */
const BRAND_SHORT_NAME = /^[A-Z0-9]{3,}$|(?:^|\s)(?:LA|NY|SF|SD|SJ|KC|LV|STL|TB)(?:\s|$)/;

/** A trailing sport code a stored college short name may already carry ("Marquette MBB", "Columbia FB", "Bears FB"). */
const TRAILING_CODE = /\s+(?:(?:men's|women's)\s+)?(FB|CFB|MBB|WBB|BSB|SB|VB|MVB|WVB|MH|WH|HK|HKY|MHKY|WHKY|MIH|WIH|SOC|MSOC|WSOC|football|basketball|baseball|softball|volleyball|hockey|soccer)$/i;

/**
 * The school word a college program is written with, where the stored short name is not it (Kylie, Oct 19, 2026,
 * C1 of the naming proposal: one reviewed word per school, the common athletics name, never initials fans outside
 * the city do not read and never the mascot). Keyed by the stored short name with its sport code removed; a short
 * name that already is the school ("UCLA", "Temple", "Ohio State") needs no row. Reviewed by hand, Oct 19.
 */
const SCHOOL_WORDS: Record<string, string> = {
  BC: 'Boston College',
  BU: 'Boston University',
  UML: 'UMass Lowell',
  USF: 'South Florida',
  OWU: 'Ohio Wesleyan',
  CSU: 'Cleveland State',
  'IU Indy': 'IU Indianapolis',
  TSU: 'Tennessee State',
  MTSU: 'Middle Tennessee',
  ASU: 'Arizona State',
  GCU: 'Grand Canyon',
  'Sac State': 'Sacramento State',
  'Sac City': 'Sacramento City College',
  UH: 'Houston',
  PVAMU: 'Prairie View A&M',
  Gophers: 'Minnesota',
  Tommies: 'St. Thomas',
  LSUNO: 'LSU New Orleans',
  SLU: 'Saint Louis',
  SIUE: 'SIU Edwardsville',
  UNC: 'North Carolina',
  NCCU: 'North Carolina Central',
  RMU: 'Robert Morris',
  Bears: 'Alberta',
  Pandas: 'Alberta',
  SDSU: 'San Diego State',
  UW: 'Washington',
  UTA: 'UT Arlington',
  Carabins: 'Montréal',
  'Varsity Blues': 'Toronto',
  'York Lions': 'York',
  DU: 'Denver',
  Ravens: 'Carleton',
  PSU: 'Portland State',
  Pilots: 'Portland',
  UIW: 'Incarnate Word',
  GMU: 'George Mason',
  GW: 'George Washington',
  Hurricanes: 'Miami',
  'TMU Bold': 'TMU',
};

/** The school word as stored in the short name, before the reviewed mapping ("IU Indy", "Gophers"): what a feed may write. */
export function storedSchoolWord(team: Team): string {
  return team.shortName.replace(TRAILING_CODE, '').replace(/\s+W$/, '').trim();
}

/** The school a college program is written with: "UCLA", "Boston College", "Houston", "Minnesota". */
export function schoolWord(team: Team): string {
  const stored = storedSchoolWord(team);
  const mapped = SCHOOL_WORDS[stored];
  // The mapped word must open the program's full name ("Portland State Vikings" for PSU), so a later city that stores
  // "PSU" for Penn State or "Bears" for Baylor falls back to its stored word and shows up in review, never as Portland State.
  return mapped && team.name.startsWith(mapped) ? mapped : stored;
}

/**
 * The sport in words for a college program's long name: "Football", "Men's Basketball", "Women's Ice Hockey". A
 * program whose side is not on file reads the sport alone ("Texas Volleyball"), never a guessed "Men's".
 */
export function sportWords(team: Team): string {
  const side = programSide(team);
  const sided = (sport: string) => (side === 'women' ? `Women's ${sport}` : side === 'men' ? `Men's ${sport}` : sport);
  switch (team.sport) {
    case 'football':
      return 'Football';
    case 'basketball':
      return sided('Basketball');
    case 'baseball':
      return 'Baseball';
    case 'softball':
      return 'Softball';
    case 'volleyball':
      return sided('Volleyball');
    case 'hockey':
      return sided('Ice Hockey');
    case 'soccer':
      return sided('Soccer');
    default:
      return team.sport.charAt(0).toUpperCase() + team.sport.slice(1);
  }
}

/** The name a list writes out beside a badge (the Following sheet): "LA Dodgers", "UCLA Football", "UCLA Men's Basketball". */
export function teamLongName(team: Team): string {
  if (!isCollegeTeam(team)) return teamDisplayName(team);
  return `${schoolWord(team)} ${sportWords(team)}`;
}

/**
 * The name a team is called where there is room for words but not the full name (the Following rows and sheet, the
 * picker, the team page header; Kylie, Oct 19, 2026). A college program is its school and sport in words ("UCLA
 * Football"). A pro team is its city shortcut and nickname ("LA Dodgers", "Golden State Warriors"); a club whose
 * stored short name already is its brand reads that ("LAFC", "Sporting KC", "KC Mavericks"; A2); any other club
 * whose name does not end in its nickname keeps its full name ("Angel City FC", "Phoenix Rising FC").
 */
export function teamDisplayName(team: Team): string {
  if (isCollegeTeam(team)) return teamLongName(team);
  if (!team.name.endsWith(team.shortName) || team.name === team.shortName) return BRAND_SHORT_NAME.test(team.shortName) ? team.shortName : team.name;
  const city = team.name.slice(0, -team.shortName.length).trim();
  if (!city) return team.name;
  if (CITY_SHORTCUTS[city]) return `${CITY_SHORTCUTS[city]} ${team.shortName}`;
  // St. Louis and Tampa Bay shorten only before a one-word nickname (A1): "STL Blues", but "St. Louis CITY SC".
  if (PLAIN_NICKNAME_SHORTCUTS[city] && /^[A-Z][a-z]+$/.test(team.shortName)) return `${PLAIN_NICKNAME_SHORTCUTS[city]} ${team.shortName}`;
  return team.name;
}

/**
 * The one predicate behind the badge (build 6, item 9a; Kylie, Oct 16, 7:42 PM PT): two badges clash when they
 * carry the same code AND the same sport (the sport icon already separates different sports). The other reading,
 * any same code, is a one-line change here. To confirm with Kylie: letters only on a clash (built) vs always.
 */
export function badgesCollide(a: Team, b: Team): boolean {
  return a.id !== b.id && a.sport === b.sport && teamCode(a) === teamCode(b);
}

/**
 * The code on a team's badge (build 6, item 9a; Kylie, Oct 16 and Oct 19): the plain code, "IND", "UCLA". The
 * sport letters left the badge on Oct 19 (her call after seeing them everywhere); the sport lives in the words
 * beside it. The shown set stays an input for the callers' sake and for `leagueMark`.
 */
export function teamBadge(team: Team, _shown: readonly Team[] = []): string {
  // The plain code for every team (Kylie, Oct 19, later in the day: no sport on a college badge; the words beside the
  // badge say the sport, "UCLA Football"). The shown set still decides a pro badge's league caption (`leagueMark`).
  return teamCode(team);
}

/** The short way a league is written under a badge; a league not listed here is written as it is ("NBA", "PWHL"). */
const LEAGUE_MARKS: Record<string, string> = {
  'NBA G League': 'G League',
  'USL Championship': 'USL',
  'USL Super League': 'USL Super',
  'Triple-A baseball': 'Triple-A',
  'Double-A baseball': 'Double-A',
  'Single-A baseball': 'Single-A',
  'MLS Next Pro': 'MLS Next',
  'Liga MX Femenil': 'Femenil',
  'American Association': 'Am. Assoc.',
  'Independent baseball': 'Indie ball',
  'Frontier League': 'Frontier',
  'UpShot League': 'UpShot',
  'WPSL PRO': 'WPSL Pro',
};

/**
 * The league mark on a pro badge (Kylie, Oct 17, 2026: option A of build 6, item 9a): only when another pro badge in
 * the set carries the same code and sport (Pacers and Fever, both IND basketball), and then on every badge of the
 * clash, never on only the women's team. The league is data every team has, and text works for everyone. Two
 * clubs of one league and sport with one code read the same mark; the row's name separates them. College programs
 * take their sport letters instead (`teamBadge`).
 */
export function leagueMark(team: Team, shown: readonly Team[]): string | null {
  if (isCollegeTeam(team)) return null;
  if (!shown.some((other) => !isCollegeTeam(other) && badgesCollide(team, other))) return null;
  return LEAGUE_MARKS[team.league] ?? team.league;
}

const LIST: Team[] = [
  // Milwaukee (Oct 11, 2026): current clubs/programs; no-feed records remain manually loggable.
  team("brewers", "Milwaukee Brewers", "Brewers", "MLB", "baseball", "milwaukee", "MIL"),
  team("bucks", "Milwaukee Bucks", "Bucks", "NBA", "basketball", "milwaukee", "MIL"),
  team("marquette-mbb", "Marquette Golden Eagles Men's Basketball", "Marquette MBB", "College men's basketball", "basketball", "milwaukee", "MARQ"),
  team("marquette-wbb", "Marquette Golden Eagles Women's Basketball", "Marquette WBB", "College women's basketball", "basketball", "milwaukee", "MARQ"),
  team("uwm-mbb", "Milwaukee Panthers Men's Basketball", "Milwaukee MBB", "College men's basketball", "basketball", "milwaukee", "MILW"),
  team("uwm-wbb", "Milwaukee Panthers Women's Basketball", "Milwaukee WBB", "College women's basketball", "basketball", "milwaukee", "MILW"),
  team("milwaukee-admirals", "Milwaukee Admirals", "Admirals", "AHL", "hockey", "milwaukee", "MIL"),
  team("milwaukee-milkmen", "Milwaukee Milkmen", "Milkmen", "American Association", "baseball", "milwaukee", "MIL"),
  team("lake-country-dockhounds", "Lake Country DockHounds", "DockHounds", "American Association", "baseball", "milwaukee", "LC"),
  team("milwaukee-wave", "Milwaukee Wave", "Milwaukee Wave", "MASL", "soccer", "milwaukee", "MIL"),
  team("lakeshore-chinooks", "Lakeshore Chinooks", "Chinooks", "Northwoods League", "baseball", "milwaukee", "LS"),
  team("marquette-volleyball", "Marquette Golden Eagles Women's Volleyball", "Marquette VB", "College women's volleyball", "volleyball", "milwaukee", "MARQ"),
  team("uwm-volleyball", "Milwaukee Panthers Women's Volleyball", "Milwaukee VB", "College women's volleyball", "volleyball", "milwaukee", "MILW"),
  team("milwaukee-torrent-men", "Milwaukee Torrent Men", "Torrent Men", "NPSL", "soccer", "milwaukee", "MIL"),
  team("milwaukee-torrent-women", "Milwaukee Torrent Women", "Torrent Women", "WPSL", "soccer", "milwaukee", "MIL"),
  // Boston (Oct 12, 2026; docs/research/city-builds/boston/). Legacy home rooms change by season; Cannons/Guard are tour weekends.
  team("red-sox", "Boston Red Sox", "Red Sox", "MLB", "baseball", "boston", "BOS"),
  team("celtics", "Boston Celtics", "Celtics", "NBA", "basketball", "boston", "BOS"),
  team("bruins", "Boston Bruins", "Bruins", "NHL", "hockey", "boston", "BOS"),
  team("patriots", "New England Patriots", "Patriots", "NFL", "football", "boston", "NE"),
  team("revolution", "New England Revolution", "Revolution", "MLS", "soccer", "boston", "NE"),
  team("boston-legacy-fc", "Boston Legacy FC", "Legacy FC", "NWSL", "soccer", "boston", "BOS"),
  team("boston-fleet", "Boston Fleet", "Fleet", "PWHL", "hockey", "boston", "BOS"),
  team("bc-football", "Boston College Eagles Football", "BC Football", "College football", "football", "boston", "BC"),
  team("bc-mbb", "Boston College Eagles Men's Basketball", "BC MBB", "College men's basketball", "basketball", "boston", "BC"),
  team("bc-wbb", "Boston College Eagles Women's Basketball", "BC WBB", "College women's basketball", "basketball", "boston", "BC"),
  team("bu-mbb", "Boston University Terriers Men's Basketball", "BU MBB", "College men's basketball", "basketball", "boston", "BU"),
  team("bu-wbb", "Boston University Terriers Women's Basketball", "BU WBB", "College women's basketball", "basketball", "boston", "BU"),
  team("harvard-football", "Harvard Crimson Football", "Harvard Football", "College football", "football", "boston", "HARV"),
  team("uml-mbb", "UMass Lowell River Hawks Men's Basketball", "UML MBB", "College men's basketball", "basketball", "boston", "UML"),
  team("uml-wbb", "UMass Lowell River Hawks Women's Basketball", "UML WBB", "College women's basketball", "basketball", "boston", "UML"),
  team("boston-cannons", "Boston Cannons", "Cannons", "PLL", "lacrosse", "boston", "CAN"),
  team("northeastern-mbb", "Northeastern Huskies Men's Basketball", "Northeastern MBB", "College men's basketball", "basketball", "boston", "NEU"),
  // Philadelphia (Oct 12, 2026). ESPN/MLB ids verified against live feeds; Wings and Blue Rocks have no verified adapter yet.
  team("phillies", "Philadelphia Phillies", "Phillies", "MLB", "baseball", "philadelphia", "PHI"),
  team("eagles", "Philadelphia Eagles", "Eagles", "NFL", "football", "philadelphia", "PHI"),
  team("sixers", "Philadelphia 76ers", "76ers", "NBA", "basketball", "philadelphia", "PHI"),
  team("flyers", "Philadelphia Flyers", "Flyers", "NHL", "hockey", "philadelphia", "PHI"),
  team("philadelphia-union", "Philadelphia Union", "Union", "MLS", "soccer", "philadelphia", "PHI"),
  team("philadelphia-wings", "Philadelphia Wings", "Wings", "NLL", "lacrosse", "philadelphia", "PHI"),
  team("temple-football", "Temple Owls Football", "Temple FB", "College football", "football", "philadelphia", "TEM", ["Temple"]),
  team("temple-mbb", "Temple Owls Men's Basketball", "Temple MBB", "College men's basketball", "basketball", "philadelphia", "TEM", ["Temple"]),
  team("temple-wbb", "Temple Owls Women's Basketball", "Temple WBB", "College women's basketball", "basketball", "philadelphia", "TEM", ["Temple"]),
  team("villanova-football", "Villanova Wildcats Football", "Villanova FB", "College football", "football", "philadelphia", "NOVA", ["Villanova"]),
  team("villanova-mbb", "Villanova Wildcats Men's Basketball", "Villanova MBB", "College men's basketball", "basketball", "philadelphia", "NOVA", ["Villanova"]),
  team("villanova-wbb", "Villanova Wildcats Women's Basketball", "Villanova WBB", "College women's basketball", "basketball", "philadelphia", "NOVA", ["Villanova"]),
  team("penn-football", "Pennsylvania Quakers Football", "Penn FB", "College football", "football", "philadelphia", "PENN", ["Penn", "Pennsylvania"]),
  team("penn-mbb", "Pennsylvania Quakers Men's Basketball", "Penn MBB", "College men's basketball", "basketball", "philadelphia", "PENN", ["Penn", "Pennsylvania"]),
  team("penn-wbb", "Pennsylvania Quakers Women's Basketball", "Penn WBB", "College women's basketball", "basketball", "philadelphia", "PENN", ["Penn", "Pennsylvania"]),
  team("delaware-football", "Delaware Fightin' Blue Hens Football", "Delaware FB", "College football", "football", "philadelphia", "DEL", ["Blue Hens", "Delaware"]),
  team("delaware-mbb", "Delaware Fightin' Blue Hens Men's Basketball", "Delaware MBB", "College men's basketball", "basketball", "philadelphia", "DEL", ["Blue Hens", "Delaware"]),
  team("delaware-wbb", "Delaware Fightin' Blue Hens Women's Basketball", "Delaware WBB", "College women's basketball", "basketball", "philadelphia", "DEL", ["Blue Hens", "Delaware"]),
  team("wilmington-blue-rocks", "Wilmington Blue Rocks", "Blue Rocks", "High-A baseball", "baseball", "philadelphia", "WIL"),
  // Tampa Bay (Oct 12, 2026; docs/research/city-builds/tampa/). Feed ids checked against live schedules.
  team("rays", "Tampa Bay Rays", "Rays", "MLB", "baseball", "tampa", "TB"),
  team("buccaneers", "Tampa Bay Buccaneers", "Buccaneers", "NFL", "football", "tampa", "TB"),
  team("lightning", "Tampa Bay Lightning", "Lightning", "NHL", "hockey", "tampa", "TBL"),
  team("usf-football", "South Florida Bulls Football", "USF", "College football", "football", "tampa", "USF", ["Bulls"]),
  team("usf-mbb", "South Florida Bulls Men's Basketball", "USF MBB", "College men's basketball", "basketball", "tampa", "USF", ["Bulls"]),
  team("usf-wbb", "South Florida Bulls Women's Basketball", "USF WBB", "College women's basketball", "basketball", "tampa", "USF", ["Bulls"]),
  team("rowdies", "Tampa Bay Rowdies", "Rowdies", "USL Championship", "soccer", "tampa", "ROW"),
  team("clearwater-threshers", "Clearwater Threshers", "Threshers", "Single-A baseball", "baseball", "tampa", "CLW"),
  team("tampa-tarpons", "Tampa Tarpons", "Tarpons", "Single-A baseball", "baseball", "tampa", "TAR"),
  team("dunedin-blue-jays", "Dunedin Blue Jays", "Dunedin Blue Jays", "Single-A baseball", "baseball", "tampa", "DUN"),
  team("tampa-bay-sun", "Tampa Bay Sun FC", "Sun FC", "USL Super League", "soccer", "tampa", "SUN"),
  // Columbus (Oct 12, 2026; docs/research/city-builds/columbus/). ESPN/MLB ids checked against live schedules.
  // Crew 2, Aviators, Fury and Ohio Wesleyan have records only; no verified schedule adapter.
  team("blue-jackets", "Columbus Blue Jackets", "Blue Jackets", "NHL", "hockey", "columbus", "CBJ"),
  team("columbus-crew", "Columbus Crew", "Crew", "MLS", "soccer", "columbus", "CLB"),
  team("columbus-clippers", "Columbus Clippers", "Clippers", "Triple-A baseball", "baseball", "columbus", "COL"),
  team("osu-football", "Ohio State Buckeyes Football", "Ohio State", "College football", "football", "columbus", "OSU", ["Buckeyes"]),
  team("osu-mbb", "Ohio State Buckeyes Men's Basketball", "Ohio State MBB", "College men's basketball", "basketball", "columbus", "OSU", ["Buckeyes"]),
  team("osu-wbb", "Ohio State Buckeyes Women's Basketball", "Ohio State WBB", "College women's basketball", "basketball", "columbus", "OSU", ["Buckeyes"]),
  team("osu-mhockey", "Ohio State Buckeyes Men's Hockey", "Ohio State Hockey", "College men's hockey", "hockey", "columbus", "OSU", ["Buckeyes"]),
  team("columbus-crew-2", "Columbus Crew 2", "Crew 2", "MLS Next Pro", "soccer", "columbus", "C2"),
  team("columbus-aviators", "Columbus Aviators", "Aviators", "UFL", "football", "columbus", "AVI"),
  team("columbus-fury", "Columbus Fury", "Fury", "MLV", "volleyball", "columbus", "FURY"),
  team("owu-football", "Ohio Wesleyan Battling Bishops Football", "OWU Football", "College football", "football", "columbus", "OWU"),
  team("owu-mbb", "Ohio Wesleyan Battling Bishops Men's Basketball", "OWU MBB", "College men's basketball", "basketball", "columbus", "OWU"),
  // Cleveland (Oct 13, 2026; docs/research/city-builds/cleveland/). Feed ids checked against live schedules Oct 13, 2026.
  team("browns", "Cleveland Browns", "Browns", "NFL", "football", "cleveland", "CLE"),
  team("guardians", "Cleveland Guardians", "Guardians", "MLB", "baseball", "cleveland", "CLE"),
  team("cavaliers", "Cleveland Cavaliers", "Cavaliers", "NBA", "basketball", "cleveland", "CLE"),
  team("cleveland-monsters", "Cleveland Monsters", "Monsters", "AHL", "hockey", "cleveland", "CLE"),
  team("lake-county-captains", "Lake County Captains", "Captains", "High-A baseball", "baseball", "cleveland", "CAP"),
  team("cleveland-state-mbb", "Cleveland State Vikings Men's Basketball", "CSU MBB", "College men's basketball", "basketball", "cleveland", "CLE", ["Vikings"]),
  team("cleveland-state-wbb", "Cleveland State Vikings Women's Basketball", "CSU WBB", "College women's basketball", "basketball", "cleveland", "CLE", ["Vikings"]),
  team("cleveland-charge", "Cleveland Charge", "Charge", "NBA G League", "basketball", "cleveland", "CHG"),
  team("lake-erie-crushers", "Lake Erie Crushers", "Crushers", "Frontier League", "baseball", "cleveland", "LEC"),
  team("cleveland-crunch", "Cleveland Crunch", "Crunch", "MLIS", "soccer", "cleveland", "CRN"),
  // Indianapolis (Oct 13, 2026; docs/research/city-builds/indianapolis/). Bloomington and West Lafayette stay out.
  team("colts", "Indianapolis Colts", "Colts", "NFL", "football", "indianapolis", "IND"),
  team("pacers", "Indiana Pacers", "Pacers", "NBA", "basketball", "indianapolis", "IND"),
  team("fever", "Indiana Fever", "Fever", "WNBA", "basketball", "indianapolis", "IND"),
  team("indianapolis-indians", "Indianapolis Indians", "Indians", "Triple-A baseball", "baseball", "indianapolis", "IND"),
  team("indy-eleven", "Indy Eleven", "Eleven", "USL Championship", "soccer", "indianapolis", "ELE"),
  team("indy-fuel", "Indy Fuel", "Fuel", "ECHL", "hockey", "indianapolis", "FUEL"),
  team("indy-ignite", "Indy Ignite", "Ignite", "MLV", "volleyball", "indianapolis", "IGN"),
  team("fishers-freight", "Fishers Freight", "Freight", "IFL", "football", "indianapolis", "FR8"),
  team("butler-football", "Butler Bulldogs Football", "Butler Football", "College football", "football", "indianapolis", "BUT", ["Bulldogs"]),
  team("butler-mbb", "Butler Bulldogs Men's Basketball", "Butler MBB", "College men's basketball", "basketball", "indianapolis", "BUT", ["Bulldogs"]),
  team("butler-wbb", "Butler Bulldogs Women's Basketball", "Butler WBB", "College women's basketball", "basketball", "indianapolis", "BUT", ["Bulldogs"]),
  team("iu-indy-mbb", "IU Indianapolis Jaguars Men's Basketball", "IU Indy MBB", "College men's basketball", "basketball", "indianapolis", "IUJ", ["Jaguars", "IUPUI"]),
  team("iu-indy-wbb", "IU Indianapolis Jaguars Women's Basketball", "IU Indy WBB", "College women's basketball", "basketball", "indianapolis", "IUJ", ["Jaguars", "IUPUI"]),
  team("uindy-football", "Indianapolis Greyhounds Football", "UIndy Football", "College football", "football", "indianapolis", "UINDY", ["Greyhounds"]),
  // Nashville (Oct 12, 2026; docs/research/city-builds/nashville/). Clarksville (Kats, Austin Peay) is a separate MSA and is not here.
  // Vibe has a team record only; the league has not started and no feed is wired.
  team("titans", "Tennessee Titans", "Titans", "NFL", "football", "nashville", "TEN"),
  team("predators", "Nashville Predators", "Predators", "NHL", "hockey", "nashville", "NSH"),
  team("nashville-sc", "Nashville SC", "Nashville SC", "MLS", "soccer", "nashville", "NSH"),
  team("sounds", "Nashville Sounds", "Sounds", "Triple-A baseball", "baseball", "nashville", "NAS"),
  team("tsu-football", "Tennessee State Tigers Football", "TSU Football", "College football", "football", "nashville", "TNST", ["Tennessee State", "TSU"]),
  team("tsu-mbb", "Tennessee State Tigers Men's Basketball", "TSU MBB", "College men's basketball", "basketball", "nashville", "TNST", ["Tennessee State", "TSU"]),
  team("tsu-wbb", "Tennessee State Lady Tigers Women's Basketball", "TSU WBB", "College women's basketball", "basketball", "nashville", "TNST", ["Tennessee State", "TSU"]),
  team("vanderbilt-football", "Vanderbilt Commodores Football", "Vanderbilt Football", "College football", "football", "nashville", "VAN", ["Vandy", "Commodores"]),
  team("vanderbilt-mbb", "Vanderbilt Commodores Men's Basketball", "Vanderbilt MBB", "College men's basketball", "basketball", "nashville", "VAN", ["Vandy", "Commodores"]),
  team("vanderbilt-wbb", "Vanderbilt Commodores Women's Basketball", "Vanderbilt WBB", "College women's basketball", "basketball", "nashville", "VAN", ["Vandy", "Commodores"]),
  team("belmont-mbb", "Belmont Bruins Men's Basketball", "Belmont MBB", "College men's basketball", "basketball", "nashville", "BEL", ["Belmont"]),
  team("belmont-wbb", "Belmont Bruins Women's Basketball", "Belmont WBB", "College women's basketball", "basketball", "nashville", "BEL", ["Belmont"]),
  team("lipscomb-mbb", "Lipscomb Bisons Men's Basketball", "Lipscomb MBB", "College men's basketball", "basketball", "nashville", "LIP", ["Lipscomb"]),
  team("lipscomb-wbb", "Lipscomb Bisons Women's Basketball", "Lipscomb WBB", "College women's basketball", "basketball", "nashville", "LIP", ["Lipscomb"]),
  team("mtsu-football", "Middle Tennessee Blue Raiders Football", "MTSU Football", "College football", "football", "nashville", "MTSU", ["Middle Tennessee", "Blue Raiders"]),
  team("mtsu-mbb", "Middle Tennessee Blue Raiders Men's Basketball", "MTSU MBB", "College men's basketball", "basketball", "nashville", "MTSU", ["Middle Tennessee", "Blue Raiders"]),
  team("mtsu-wbb", "Middle Tennessee Blue Raiders Women's Basketball", "MTSU WBB", "College women's basketball", "basketball", "nashville", "MTSU", ["Middle Tennessee", "Blue Raiders"]),
  team("nashville-vibe", "Nashville Vibe", "Vibe", "UpShot League", "basketball", "nashville", "VIBE"),
  // Austin (Oct 12, 2026; docs/research/city-builds/austin/). Feed ids checked against live schedules. No-feed clubs stay loggable.
  team("austin-fc", "Austin FC", "Austin FC", "MLS", "soccer", "austin", "ATX"),
  team("round-rock-express", "Round Rock Express", "Express", "Triple-A baseball", "baseball", "austin", "RR"),
  team("texas-stars", "Texas Stars", "Stars", "AHL", "hockey", "austin", "TEX"),
  team("texas-football", "Texas Longhorns Football", "Texas", "College football", "football", "austin", "TEX", ["Longhorns", "Texas FB"]),
  team("texas-mbb", "Texas Longhorns Men's Basketball", "Texas MBB", "College men's basketball", "basketball", "austin", "TEX", ["Longhorns"]),
  team("texas-wbb", "Texas Longhorns Women's Basketball", "Texas WBB", "College women's basketball", "basketball", "austin", "TEX", ["Longhorns"]),
  team("texas-state-football", "Texas State Bobcats Football", "Texas State", "College football", "football", "austin", "TXST", ["Bobcats", "Texas State FB"]),
  team("texas-state-mbb", "Texas State Bobcats Men's Basketball", "Texas State MBB", "College men's basketball", "basketball", "austin", "TXST", ["Bobcats"]),
  team("texas-state-wbb", "Texas State Bobcats Women's Basketball", "Texas State WBB", "College women's basketball", "basketball", "austin", "TXST", ["Bobcats"]),
  team("texas-baseball", "Texas Longhorns Baseball", "Texas Baseball", "College baseball", "baseball", "austin", "TEX", ["Longhorns"]),
  team("texas-softball", "Texas Longhorns Softball", "Texas Softball", "College softball", "softball", "austin", "TEX", ["Longhorns"]),
  team("texas-soccer", "Texas Longhorns Women's Soccer", "Texas Soccer", "College women's soccer", "soccer", "austin", "TEX", ["Longhorns"]),
  team("texas-volleyball", "Texas Longhorns Women's Volleyball", "Texas VB", "College women's volleyball", "volleyball", "austin", "TEX", ["Longhorns"]),
  team("austin-fc-ii", "Austin FC II", "Austin FC II", "MLS Next Pro", "soccer", "austin", "ATX2"),
  team("texas-volts", "Texas Volts", "Volts", "AUSL", "softball", "austin", "VOL"),
  team("austin-spurs", "Austin Spurs", "Austin Spurs", "NBA G League", "basketball", "austin", "AUS"),
  team("lovb-austin", "LOVB Austin", "LOVB Austin", "LOVB Pro", "volleyball", "austin", "LOVB"),
  team("austin-gamblers", "Austin Gamblers", "Gamblers", "PBR Teams", "rodeo", "austin", "GAM"),
  team("austin-rise", "Austin Rise FC", "Rise FC", "WPSL PRO", "soccer", "austin", "RISE"),
  // Phoenix (Oct 12, 2026; docs/research/city-builds/phoenix/). Suns was already a visitor id; it is now the home record.
  // Rattlers, Ridge Riders and ASU baseball have no verified feed. Coyotes left in 2024 and are not a home club.
  // arizona-cardinals is not the nickname slug: "cardinals" is already the St. Louis baseball key.
  team("diamondbacks", "Arizona Diamondbacks", "Diamondbacks", "MLB", "baseball", "phoenix", "AZ"),
  team("arizona-cardinals", "Arizona Cardinals", "Cardinals", "NFL", "football", "phoenix", "ARI"),
  team("suns", "Phoenix Suns", "Suns", "NBA", "basketball", "phoenix", "PHX"),
  team("mercury", "Phoenix Mercury", "Mercury", "WNBA", "basketball", "phoenix", "PHO"),
  team("valley-suns", "Valley Suns", "Valley Suns", "NBA G League", "basketball", "phoenix", "VAL"),
  team("phoenix-rising", "Phoenix Rising FC", "Rising", "USL Championship", "soccer", "phoenix", "RIS"),
  team("asu-football", "Arizona State Sun Devils Football", "ASU", "College football", "football", "phoenix", "ASU", ["Sun Devils", "Arizona State"]),
  team("asu-mbb", "Arizona State Sun Devils Men's Basketball", "ASU MBB", "College men's basketball", "basketball", "phoenix", "ASU", ["Sun Devils", "Arizona State"]),
  team("asu-wbb", "Arizona State Sun Devils Women's Basketball", "ASU WBB", "College women's basketball", "basketball", "phoenix", "ASU", ["Sun Devils", "Arizona State"]),
  team("asu-hockey", "Arizona State Sun Devils Men's Hockey", "ASU Hockey", "College men's hockey", "hockey", "phoenix", "ASU", ["Sun Devils", "Arizona State"]),
  team("asu-baseball", "Arizona State Sun Devils Baseball", "ASU Baseball", "College baseball", "baseball", "phoenix", "ASU", ["Sun Devils", "Arizona State"]),
  team("gcu-mbb", "Grand Canyon Lopes Men's Basketball", "GCU MBB", "College men's basketball", "basketball", "phoenix", "GCU", ["Lopes", "Grand Canyon"]),
  team("gcu-wbb", "Grand Canyon Lopes Women's Basketball", "GCU WBB", "College women's basketball", "basketball", "phoenix", "GCU", ["Lopes", "Grand Canyon"]),
  team("arizona-rattlers", "Arizona Rattlers", "Rattlers", "IFL", "football", "phoenix", "RAT"),
  team("arizona-ridge-riders", "Arizona Ridge Riders", "Ridge Riders", "PBR Teams", "rodeo", "phoenix", "ARR"),
  // Sacramento (Oct 12, 2026; docs/research/city-builds/sacramento/). Feed ids checked against live schedules.
  // "Sac Kings" so titles do not collide with the Los Angeles Kings.
  team("sacramento-kings", "Sacramento Kings", "Sac Kings", "NBA", "basketball", "sacramento", "SAC"),
  team("athletics", "Athletics", "Athletics", "MLB", "baseball", "sacramento", "ATH", ["A's", "Oakland Athletics"]),
  team("river-cats", "Sacramento River Cats", "River Cats", "Triple-A baseball", "baseball", "sacramento", "SAC"),
  team("sacramento-republic", "Sacramento Republic FC", "Republic FC", "USL Championship", "soccer", "sacramento", "REP"),
  team("sac-state-football", "Sacramento State Hornets Football", "Sac State FB", "College football", "football", "sacramento", "SAC", ["Hornets", "Sacramento State"]),
  team("sac-state-mbb", "Sacramento State Hornets Men's Basketball", "Sac State MBB", "College men's basketball", "basketball", "sacramento", "SAC", ["Hornets"]),
  team("sac-state-wbb", "Sacramento State Hornets Women's Basketball", "Sac State WBB", "College women's basketball", "basketball", "sacramento", "SAC", ["Hornets"]),
  team("sac-state-volleyball", "Sacramento State Hornets Women's Volleyball", "Sac State VB", "College women's volleyball", "volleyball", "sacramento", "SAC", ["Hornets"]),
  team("uc-davis-football", "UC Davis Aggies Football", "UC Davis FB", "College football", "football", "sacramento", "UCD", ["Aggies", "UC Davis"]),
  team("uc-davis-mbb", "UC Davis Aggies Men's Basketball", "UC Davis MBB", "College men's basketball", "basketball", "sacramento", "UCD", ["Aggies"]),
  team("uc-davis-wbb", "UC Davis Aggies Women's Basketball", "UC Davis WBB", "College women's basketball", "basketball", "sacramento", "UCD", ["Aggies"]),
  team("sac-city-football", "Sacramento City College Panthers Football", "Sac City FB", "Community college football", "football", "sacramento", "SCC"),
  // Las Vegas (Oct 12, 2026; docs/research/city-builds/las-vegas/). Feed ids checked against live schedules the same day.
  team("raiders", "Las Vegas Raiders", "Raiders", "NFL", "football", "las-vegas", "LV"),
  team("golden-knights", "Vegas Golden Knights", "Golden Knights", "NHL", "hockey", "las-vegas", "VGK"),
  team("aces", "Las Vegas Aces", "Aces", "WNBA", "basketball", "las-vegas", "LVA"),
  team("pwhl-las-vegas", "PWHL Las Vegas", "PWHL Vegas", "PWHL", "hockey", "las-vegas", "PWHL"),
  team("henderson-silver-knights", "Henderson Silver Knights", "Silver Knights", "AHL", "hockey", "las-vegas", "HSK"),
  team("las-vegas-aviators", "Las Vegas Aviators", "Aviators", "Triple-A baseball", "baseball", "las-vegas", "LV"),
  team("las-vegas-lights", "Las Vegas Lights FC", "Lights", "USL Championship", "soccer", "las-vegas", "LVL"),
  team("unlv-football", "UNLV Rebels", "UNLV", "College football", "football", "las-vegas", "UNLV", ["Rebels"]),
  team("unlv-mbb", "UNLV Rebels", "UNLV MBB", "College men's basketball", "basketball", "las-vegas", "UNLV", ["Rebels"]),
  team("unlv-wbb", "UNLV Lady Rebels", "UNLV WBB", "College women's basketball", "basketball", "las-vegas", "UNLV", ["Lady Rebels"]),
  team("vegas-knight-hawks", "Vegas Knight Hawks", "Knight Hawks", "IFL", "football", "las-vegas", "VKH"),
  team("las-vegas-desert-dogs", "Las Vegas Desert Dogs", "Desert Dogs", "NLL", "lacrosse", "las-vegas", "LV"),
  team("las-vegas-rockers", "Las Vegas Rockers", "Rockers", "Arena football", "football", "las-vegas", "RCK"),
  // Kansas City (Oct 12, 2026; docs/research/city-builds/kansas-city/). Lawrence and Columbia stay separate markets.
  team("chiefs", "Kansas City Chiefs", "Chiefs", "NFL", "football", "kansas-city", "KC", ["KC Chiefs"]),
  team("royals", "Kansas City Royals", "Royals", "MLB", "baseball", "kansas-city", "KC", ["KC Royals"]),
  team("sporting-kc", "Sporting Kansas City", "Sporting KC", "MLS", "soccer", "kansas-city", "SKC", ["Sporting Kansas City"]),
  team("kc-current", "Kansas City Current", "Current", "NWSL", "soccer", "kansas-city", "KC", ["KC Current"]),
  team("sporting-kc-ii", "Sporting KC II", "Sporting II", "MLS Next Pro", "soccer", "kansas-city", "SK2"),
  team("kc-monarchs", "Kansas City Monarchs", "Monarchs", "American Association", "baseball", "kansas-city", "KCM"),
  team("kc-mavericks", "Kansas City Mavericks", "KC Mavericks", "ECHL", "hockey", "kansas-city", "MVS"),
  team("kc-comets", "Kansas City Comets", "Comets", "MASL", "soccer", "kansas-city", "KCO"),
  team("kc-outlaws", "Kansas City Outlaws", "Outlaws", "PBR Teams", "rodeo", "kansas-city", "OUT"),
  // Houston (Oct 12, 2026; docs/research/city-builds/houston/). Feed ids checked against live schedules.
  // Comets have a team record only: the WNBA feed had no Houston club on Oct 12. Baseball and softball
  // programs are records only; this app has no college baseball or softball adapter.
  team("astros", "Houston Astros", "Astros", "MLB", "baseball", "houston", "HOU"),
  team("texans", "Houston Texans", "Texans", "NFL", "football", "houston", "HOU"),
  team("rockets", "Houston Rockets", "Rockets", "NBA", "basketball", "houston", "HOU"),
  team("houston-comets", "Houston Comets", "Comets", "WNBA", "basketball", "houston", "HOU"),
  team("dynamo", "Houston Dynamo FC", "Dynamo", "MLS", "soccer", "houston", "HOU"),
  team("dash", "Houston Dash", "Dash", "NWSL", "soccer", "houston", "HOU"),
  team("space-cowboys", "Sugar Land Space Cowboys", "Space Cowboys", "Triple-A baseball", "baseball", "houston", "SUG"),
  team("uh-football", "Houston Cougars Football", "UH", "College football", "football", "houston", "HOU", ["Cougars"]),
  team("uh-mbb", "Houston Cougars Men's Basketball", "UH MBB", "College men's basketball", "basketball", "houston", "HOU", ["Cougars"]),
  team("uh-wbb", "Houston Cougars Women's Basketball", "UH WBB", "College women's basketball", "basketball", "houston", "HOU", ["Cougars"]),
  team("uh-baseball", "Houston Cougars Baseball", "UH Baseball", "College baseball", "baseball", "houston", "HOU", ["Cougars"]),
  team("uh-softball", "Houston Cougars Softball", "UH Softball", "College softball", "softball", "houston", "HOU", ["Cougars"]),
  team("rice-football", "Rice Owls Football", "Rice", "College football", "football", "houston", "RICE", ["Owls", "Rice Owls"]),
  team("rice-mbb", "Rice Owls Men's Basketball", "Rice MBB", "College men's basketball", "basketball", "houston", "RICE", ["Owls"]),
  team("rice-wbb", "Rice Owls Women's Basketball", "Rice WBB", "College women's basketball", "basketball", "houston", "RICE", ["Owls"]),
  team("rice-baseball", "Rice Owls Baseball", "Rice Baseball", "College baseball", "baseball", "houston", "RICE", ["Owls"]),
  // texas-southern-football: Nashville already uses tsu-football for Tennessee State.
  team("texas-southern-football", "Texas Southern Tigers Football", "Texas Southern", "College football", "football", "houston", "TXSO", ["Tigers", "TSU"]),
  team("pvamu-football", "Prairie View A&M Panthers Football", "PVAMU", "College football", "football", "houston", "PVAM", ["Panthers"]),
  // Minneapolis–St. Paul (Oct 12, 2026; docs/research/city-builds/minneapolis/). Feed ids checked against live schedules.
  team("vikings", "Minnesota Vikings", "Vikings", "NFL", "football", "minneapolis", "MIN"),
  team("twins", "Minnesota Twins", "Twins", "MLB", "baseball", "minneapolis", "MIN"),
  team("timberwolves", "Minnesota Timberwolves", "Timberwolves", "NBA", "basketball", "minneapolis", "MIN"),
  team("lynx", "Minnesota Lynx", "Lynx", "WNBA", "basketball", "minneapolis", "MIN"),
  team("wild", "Minnesota Wild", "Wild", "NHL", "hockey", "minneapolis", "MIN"),
  team("minnesota-united", "Minnesota United FC", "MNUFC", "MLS", "soccer", "minneapolis", "MIN", ["Loons", "Minnesota United"]),
  team("minnesota-frost", "Minnesota Frost", "Frost", "PWHL", "hockey", "minneapolis", "MIN", ["PWHL Minnesota"]),
  team("st-paul-saints", "St. Paul Saints", "Saints", "Triple-A baseball", "baseball", "minneapolis", "STP"),
  team("gophers-football", "Minnesota Golden Gophers Football", "Gophers FB", "College football", "football", "minneapolis", "MINN", ["Gophers", "Minnesota Football"]),
  team("gophers-mbb", "Minnesota Golden Gophers Men's Basketball", "Gophers MBB", "College men's basketball", "basketball", "minneapolis", "MINN", ["Gophers"]),
  team("gophers-wbb", "Minnesota Golden Gophers Women's Basketball", "Gophers WBB", "College women's basketball", "basketball", "minneapolis", "MINN", ["Gophers"]),
  team("gophers-hockey", "Minnesota Golden Gophers Men's Hockey", "Gophers Hockey", "College men's hockey", "hockey", "minneapolis", "MINN", ["Gophers"]),
  team("gophers-whockey", "Minnesota Golden Gophers Women's Hockey", "Gophers W Hockey", "College women's hockey", "hockey", "minneapolis", "MINN", ["Gophers"]),
  team("gophers-volleyball", "Minnesota Golden Gophers Women's Volleyball", "Gophers VB", "College women's volleyball", "volleyball", "minneapolis", "MINN", ["Gophers"]),
  team("st-thomas-mbb", "St. Thomas Tommies Men's Basketball", "Tommies MBB", "College men's basketball", "basketball", "minneapolis", "UST", ["St. Thomas", "Tommies"]),
  team("st-thomas-wbb", "St. Thomas Tommies Women's Basketball", "Tommies WBB", "College women's basketball", "basketball", "minneapolis", "UST", ["St. Thomas", "Tommies"]),
  team("st-thomas-hockey", "St. Thomas Tommies Men's Hockey", "Tommies Hockey", "College men's hockey", "hockey", "minneapolis", "UST", ["St. Thomas", "Tommies"]),
  team("st-thomas-whockey", "St. Thomas Tommies Women's Hockey", "Tommies W Hockey", "College women's hockey", "hockey", "minneapolis", "UST", ["St. Thomas", "Tommies"]),
  team("mnufc2", "MNUFC2", "MNUFC2", "MLS Next Pro", "soccer", "minneapolis", "MNU2", ["Minnesota United 2"]),
  team("minnesota-aurora", "Minnesota Aurora FC", "Aurora", "USL W", "soccer", "minneapolis", "AUR"),
  team("minnesota-forge", "Minnesota Forge", "Forge", "MLV", "volleyball", "minneapolis", "FOR"),
  team("lovb-minnesota", "LOVB Minnesota", "LOVB Minnesota", "LOVB Pro", "volleyball", "minneapolis", "LOVB"),
  // New Orleans (Oct 12, 2026; docs/research/city-builds/new-orleans/). Feed ids checked against live schedules.
  team("saints", "New Orleans Saints", "Saints", "NFL", "football", "new-orleans", "NO"),
  team("pelicans", "New Orleans Pelicans", "Pelicans", "NBA", "basketball", "new-orleans", "NOP"),
  team("tulane-football", "Tulane Green Wave Football", "Tulane FB", "College football", "football", "new-orleans", "TULN", ["Green Wave", "Tulane"]),
  team("tulane-mbb", "Tulane Green Wave Men's Basketball", "Tulane MBB", "College men's basketball", "basketball", "new-orleans", "TULN", ["Green Wave"]),
  team("tulane-wbb", "Tulane Green Wave Women's Basketball", "Tulane WBB", "College women's basketball", "basketball", "new-orleans", "TULN", ["Green Wave"]),
  team("tulane-baseball", "Tulane Green Wave Baseball", "Tulane Baseball", "College baseball", "baseball", "new-orleans", "TULN", ["Green Wave"]),
  team("lsuno-mbb", "LSU New Orleans Privateers Men's Basketball", "LSUNO MBB", "College men's basketball", "basketball", "new-orleans", "UNO", ["UNO", "New Orleans", "New Orleans Privateers", "Privateers"]),
  team("lsuno-wbb", "LSU New Orleans Privateers Women's Basketball", "LSUNO WBB", "College women's basketball", "basketball", "new-orleans", "UNO", ["UNO", "New Orleans", "New Orleans Privateers", "Privateers"]),
  team("lsuno-baseball", "LSU New Orleans Privateers Baseball", "LSUNO Baseball", "College baseball", "baseball", "new-orleans", "UNO", ["UNO", "New Orleans", "New Orleans Privateers", "Privateers"]),
  team("laketown-squadron", "Laketown Squadron", "Squadron", "NBA G League", "basketball", "new-orleans", "LKT"),
  team("new-orleans-jesters", "New Orleans Jesters", "Jesters", "NPSL", "soccer", "new-orleans", "JES"),
  // St. Louis (Oct 13, 2026; docs/research/city-builds/st-louis/). Feed ids checked against live schedules Oct 13, 2026.
  team("cardinals", "St. Louis Cardinals", "Cardinals", "MLB", "baseball", "st-louis", "STL"),
  team("blues", "St. Louis Blues", "Blues", "NHL", "hockey", "st-louis", "STL"),
  team("st-louis-city-sc", "St. Louis CITY SC", "CITY SC", "MLS", "soccer", "st-louis", "STL", ["St. Louis City SC", "City SC"]),
  team("st-louis-city2", "St. Louis CITY2", "CITY2", "MLS Next Pro", "soccer", "st-louis", "STL2"),
  team("st-louis-battlehawks", "St. Louis Battlehawks", "Battlehawks", "UFL", "football", "st-louis", "STL"),
  team("st-louis-ambush", "St. Louis Ambush", "Ambush", "MASL", "soccer", "st-louis", "AMB"),
  team("gateway-grizzlies", "Gateway Grizzlies", "Grizzlies", "Frontier League", "baseball", "st-louis", "GRZ"),
  team("ofallon-hoots", "O'Fallon Hoots", "Hoots", "Prospect League", "baseball", "st-louis", "HOO"),
  team("slu-mbb", "Saint Louis Billikens Men's Basketball", "SLU MBB", "College men's basketball", "basketball", "st-louis", "SLU", ["Billikens", "Saint Louis"]),
  team("slu-wbb", "Saint Louis Billikens Women's Basketball", "SLU WBB", "College women's basketball", "basketball", "st-louis", "SLU", ["Billikens"]),
  team("siue-mbb", "SIU Edwardsville Cougars Men's Basketball", "SIUE MBB", "College men's basketball", "basketball", "st-louis", "SIUE", ["Cougars"]),
  team("siue-wbb", "SIU Edwardsville Cougars Women's Basketball", "SIUE WBB", "College women's basketball", "basketball", "st-louis", "SIUE", ["Cougars"]),
  team("lindenwood-football", "Lindenwood Lions Football", "Lindenwood FB", "College football", "football", "st-louis", "LIN", ["Lions"]),
  team("lindenwood-mbb", "Lindenwood Lions Men's Basketball", "Lindenwood MBB", "College men's basketball", "basketball", "st-louis", "LIN", ["Lions"]),
  team("lindenwood-wbb", "Lindenwood Lions Women's Basketball", "Lindenwood WBB", "College women's basketball", "basketball", "st-louis", "LIN", ["Lions"]),
  // Raleigh–Durham (Oct 13, 2026; docs/research/city-builds/raleigh-durham/). Feed ids checked against live schedules.
  // North Carolina FC sits out 2026–27 (research: club suspended operations), so it has no record.
  team("hurricanes", "Carolina Hurricanes", "Hurricanes", "NHL", "hockey", "raleigh-durham", "CAR", ["Canes"]),
  team("nc-state-football", "NC State Wolfpack Football", "NC State FB", "College football", "football", "raleigh-durham", "NCST", ["Wolfpack", "NC State"]),
  team("nc-state-mbb", "NC State Wolfpack Men's Basketball", "NC State MBB", "College men's basketball", "basketball", "raleigh-durham", "NCST", ["Wolfpack"]),
  team("nc-state-wbb", "NC State Wolfpack Women's Basketball", "NC State WBB", "College women's basketball", "basketball", "raleigh-durham", "NCST", ["Wolfpack"]),
  team("unc-football", "North Carolina Tar Heels Football", "UNC FB", "College football", "football", "raleigh-durham", "UNC", ["Tar Heels", "North Carolina"]),
  team("unc-mbb", "North Carolina Tar Heels Men's Basketball", "UNC MBB", "College men's basketball", "basketball", "raleigh-durham", "UNC", ["Tar Heels"]),
  team("unc-wbb", "North Carolina Tar Heels Women's Basketball", "UNC WBB", "College women's basketball", "basketball", "raleigh-durham", "UNC", ["Tar Heels"]),
  team("duke-football", "Duke Blue Devils Football", "Duke FB", "College football", "football", "raleigh-durham", "DUKE", ["Blue Devils", "Duke"]),
  team("duke-mbb", "Duke Blue Devils Men's Basketball", "Duke MBB", "College men's basketball", "basketball", "raleigh-durham", "DUKE", ["Blue Devils"]),
  team("duke-wbb", "Duke Blue Devils Women's Basketball", "Duke WBB", "College women's basketball", "basketball", "raleigh-durham", "DUKE", ["Blue Devils"]),
  team("nccu-football", "North Carolina Central Eagles Football", "NCCU FB", "College football", "football", "raleigh-durham", "NCCU", ["Eagles", "NCCU"]),
  team("nccu-mbb", "North Carolina Central Eagles Men's Basketball", "NCCU MBB", "College men's basketball", "basketball", "raleigh-durham", "NCCU", ["Eagles"]),
  team("nccu-wbb", "North Carolina Central Eagles Women's Basketball", "NCCU WBB", "College women's basketball", "basketball", "raleigh-durham", "NCCU", ["Eagles"]),
  team("durham-bulls", "Durham Bulls", "Bulls", "Triple-A baseball", "baseball", "raleigh-durham", "DUR"),
  team("nc-courage", "North Carolina Courage", "Courage", "NWSL", "soccer", "raleigh-durham", "NC"),
  // Pittsburgh (Oct 13, 2026; docs/research/city-builds/pittsburgh/). Feed ids checked against live schedules.
  team("steelers", "Pittsburgh Steelers", "Steelers", "NFL", "football", "pittsburgh", "PIT"),
  team("pirates", "Pittsburgh Pirates", "Pirates", "MLB", "baseball", "pittsburgh", "PIT"),
  team("penguins", "Pittsburgh Penguins", "Penguins", "NHL", "hockey", "pittsburgh", "PIT"),
  team("pitt-football", "Pitt Panthers Football", "Pitt FB", "College football", "football", "pittsburgh", "PITT", ["Panthers", "Pitt"]),
  team("pitt-mbb", "Pitt Panthers Men's Basketball", "Pitt MBB", "College men's basketball", "basketball", "pittsburgh", "PITT", ["Panthers", "Pitt"]),
  team("pitt-wbb", "Pitt Panthers Women's Basketball", "Pitt WBB", "College women's basketball", "basketball", "pittsburgh", "PITT", ["Panthers", "Pitt"]),
  team("duquesne-football", "Duquesne Dukes Football", "Duquesne FB", "College football", "football", "pittsburgh", "DUQ", ["Dukes", "Duquesne"]),
  team("duquesne-mbb", "Duquesne Dukes Men's Basketball", "Duquesne MBB", "College men's basketball", "basketball", "pittsburgh", "DUQ", ["Dukes", "Duquesne"]),
  team("duquesne-wbb", "Duquesne Dukes Women's Basketball", "Duquesne WBB", "College women's basketball", "basketball", "pittsburgh", "DUQ", ["Dukes", "Duquesne"]),
  team("robert-morris-football", "Robert Morris Colonials Football", "RMU FB", "College football", "football", "pittsburgh", "RMU", ["Colonials", "Robert Morris"]),
  team("robert-morris-mbb", "Robert Morris Colonials Men's Basketball", "RMU MBB", "College men's basketball", "basketball", "pittsburgh", "RMU", ["Colonials", "Robert Morris"]),
  team("robert-morris-wbb", "Robert Morris Colonials Women's Basketball", "RMU WBB", "College women's basketball", "basketball", "pittsburgh", "RMU", ["Colonials", "Robert Morris"]),
  team("riverhounds", "Pittsburgh Riverhounds SC", "Riverhounds", "USL Championship", "soccer", "pittsburgh", "PIT"),
  team("wild-things", "Washington Wild Things", "Wild Things", "Frontier League", "baseball", "pittsburgh", "WIL"),
  // Detroit (Oct 13, 2026; docs/research/city-builds/detroit/). ESPN/MLB ids checked against live schedules.
  team("lions", "Detroit Lions", "Lions", "NFL", "football", "detroit", "DET"),
  team("tigers", "Detroit Tigers", "Tigers", "MLB", "baseball", "detroit", "DET"),
  team("red-wings", "Detroit Red Wings", "Red Wings", "NHL", "hockey", "detroit", "DET"),
  team("pistons", "Detroit Pistons", "Pistons", "NBA", "basketball", "detroit", "DET"),
  team("michigan-football", "Michigan Wolverines Football", "Michigan", "College football", "football", "detroit", "MICH", ["Wolverines"]),
  team("michigan-mbb", "Michigan Wolverines Men's Basketball", "Michigan MBB", "College men's basketball", "basketball", "detroit", "MICH", ["Wolverines"]),
  team("michigan-wbb", "Michigan Wolverines Women's Basketball", "Michigan WBB", "College women's basketball", "basketball", "detroit", "MICH", ["Wolverines"]),
  team("michigan-mhockey", "Michigan Wolverines Men's Hockey", "Michigan Hockey", "College men's hockey", "hockey", "detroit", "MICH", ["Wolverines"]),
  team("detroit-mercy-mbb", "Detroit Mercy Titans Men's Basketball", "Detroit Mercy MBB", "College men's basketball", "basketball", "detroit", "UDM", ["Titans", "Detroit Mercy"]),
  team("detroit-city-fc", "Detroit City FC", "DCFC", "USL Championship", "soccer", "detroit", "DCFC"),
  team("motor-city-cruise", "Motor City Cruise", "Cruise", "NBA G League", "basketball", "detroit", "MC"),
  team("pwhl-detroit", "PWHL Detroit", "PWHL Detroit", "PWHL", "hockey", "detroit", "PWHL"),
  // Edmonton (Oct 13, 2026; docs/research/city-builds/edmonton/). Feed ids checked against live schedules.
  team('oilers', 'Edmonton Oilers', 'Oilers', 'NHL', 'hockey', 'edmonton', 'EDM'),
  team('oil-kings', 'Edmonton Oil Kings', 'Oil Kings', 'WHL', 'hockey', 'edmonton', 'EDM'),
  team('elks', 'Edmonton Elks', 'Elks', 'CFL', 'football', 'edmonton', 'EDM', ['Edmonton Eskimos']),
  team('edmonton-stingers', 'Edmonton Stingers', 'Stingers', 'CEBL', 'basketball', 'edmonton', 'EDM'),
  team('edmonton-riverhawks', 'Edmonton Riverhawks', 'Riverhawks', 'WCL', 'baseball', 'edmonton', 'EDM'),
  team('ualberta-football', 'Alberta Golden Bears Football', 'Bears FB', 'U Sports football', 'football', 'edmonton', 'UAB', ['Golden Bears']),
  team('ualberta-hockey', 'Alberta Golden Bears Men\'s Hockey', 'Bears Hockey', 'U Sports men\'s hockey', 'hockey', 'edmonton', 'UAB', ['Golden Bears']),
  team('ualberta-mbb', 'Alberta Golden Bears Men\'s Basketball', 'Bears MBB', 'U Sports basketball', 'basketball', 'edmonton', 'UAB', ['Golden Bears']),
  // The Pandas (Alberta's women's side), at the Saville Centre and, for 2026-27, the Silent Ice Center (Oct 22, 2026).
  team('ualberta-wbb', "Alberta Pandas Women's Basketball", 'Pandas WBB', "U Sports women's basketball", 'basketball', 'edmonton', 'UAB', ['Alberta', 'Pandas', 'Alberta Pandas']),
  team('ualberta-whockey', "Alberta Pandas Women's Hockey", 'Pandas WHKY', "U Sports women's hockey", 'hockey', 'edmonton', 'UAB', ['Alberta', 'Pandas', 'Alberta Pandas']),
  team('spruce-grove-saints', 'Spruce Grove Saints', 'Saints', 'BCHL', 'hockey', 'edmonton', 'SGS'),
  team('sherwood-park-crusaders', 'Sherwood Park Crusaders', 'Crusaders', 'BCHL', 'hockey', 'edmonton', 'SPC'),
  // Salt Lake City (Oct 13, 2026; docs/research/city-builds/salt-lake-city/). Feed ids checked against live schedules.
  team("utah-jazz", "Utah Jazz", "Jazz", "NBA", "basketball", "salt-lake-city", "UTA"),
  team("utah-mammoth", "Utah Mammoth", "Mammoth", "NHL", "hockey", "salt-lake-city", "UTA", ["Utah Hockey Club"]),
  team("real-salt-lake", "Real Salt Lake", "Real Salt Lake", "MLS", "soccer", "salt-lake-city", "RSL"),
  team("utah-royals", "Utah Royals", "Royals", "NWSL", "soccer", "salt-lake-city", "UTA", ["Utah Royals FC"]),
  team("salt-lake-bees", "Salt Lake Bees", "Bees", "Triple-A baseball", "baseball", "salt-lake-city", "SLC"),
  team("utah-utes-football", "Utah Utes Football", "Utah", "College football", "football", "salt-lake-city", "UTAH", ["Utes"]),
  team("utah-mbb", "Utah Utes Men's Basketball", "Utah MBB", "College men's basketball", "basketball", "salt-lake-city", "UTAH", ["Utes"]),
  team("utah-wbb", "Utah Utes Women's Basketball", "Utah WBB", "College women's basketball", "basketball", "salt-lake-city", "UTAH", ["Utes"]),
  team("salt-lake-city-stars", "Salt Lake City Stars", "Stars", "NBA G League", "basketball", "salt-lake-city", "SLC"),
  team("real-monarchs", "Real Monarchs", "Monarchs", "MLS Next Pro", "soccer", "salt-lake-city", "RSL"),
  // LA
  team('dodgers', 'Los Angeles Dodgers', 'Dodgers', 'MLB', 'baseball', 'la', 'LAD'),
  team('angels', 'Los Angeles Angels', 'Angels', 'MLB', 'baseball', 'la', 'LAA'),
  team('padres', 'San Diego Padres', 'Padres', 'MLB', 'baseball', 'san-diego', 'SD'),
  team('san-diego-fc', 'San Diego FC', 'San Diego FC', 'MLS', 'soccer', 'san-diego', 'SD'),
  team('wave', 'San Diego Wave FC', 'Wave', 'NWSL', 'soccer', 'san-diego', 'SD'),
  team('sdsu-football', 'San Diego State Aztecs Football', 'SDSU', 'College football', 'football', 'san-diego', 'SDSU', ['Aztecs']),
  team('sdsu-mbb', 'San Diego State Aztecs Men\'s Basketball', 'SDSU', "College men's basketball", 'basketball', 'san-diego', 'SDSU', ['Aztecs']),
  team('sdsu-wbb', 'San Diego State Aztecs Women\'s Basketball', 'SDSU', "College women's basketball", 'basketball', 'san-diego', 'SDSU', ['Aztecs']),
  // Seattle (Oct 6, 2026). College programs are the University of Washington's; 'washington' below is the NFL visitor.
  team('mariners', 'Seattle Mariners', 'Mariners', 'MLB', 'baseball', 'seattle', 'SEA'),
  team('seahawks', 'Seattle Seahawks', 'Seahawks', 'NFL', 'football', 'seattle', 'SEA'),
  team('kraken', 'Seattle Kraken', 'Kraken', 'NHL', 'hockey', 'seattle', 'SEA'),
  team('sounders', 'Seattle Sounders FC', 'Sounders', 'MLS', 'soccer', 'seattle', 'SEA'),
  team('reign', 'Seattle Reign FC', 'Reign', 'NWSL', 'soccer', 'seattle', 'SEA', ['OL Reign']),
  team('storm', 'Seattle Storm', 'Storm', 'WNBA', 'basketball', 'seattle', 'SEA'),
  team('uw-football', 'Washington Huskies Football', 'UW', 'College football', 'football', 'seattle', 'WASH', ['Huskies', 'Washington Football', 'Washington Huskies']),
  team('uw-mbb', 'Washington Huskies Men\'s Basketball', 'UW MBB', "College men's basketball", 'basketball', 'seattle', 'WASH', ['Huskies']),
  team('uw-wbb', 'Washington Huskies Women\'s Basketball', 'UW WBB', "College women's basketball", 'basketball', 'seattle', 'WASH', ['Huskies']),
  team('lakers', 'Los Angeles Lakers', 'Lakers', 'NBA', 'basketball', 'la', 'LAL'),
  team('clippers', 'LA Clippers', 'Clippers', 'NBA', 'basketball', 'la', 'LAC'),
  team('kings', 'Los Angeles Kings', 'Kings', 'NHL', 'hockey', 'la', 'LAK'),
  team('ducks', 'Anaheim Ducks', 'Ducks', 'NHL', 'hockey', 'la', 'ANA'),
  team('galaxy', 'LA Galaxy', 'Galaxy', 'MLS', 'soccer', 'la', 'LA'),
  team('lafc', 'Los Angeles FC', 'LAFC', 'MLS', 'soccer', 'la', 'LAFC'),
  team('angel-city', 'Angel City FC', 'Angel City', 'NWSL', 'soccer', 'la', 'ACFC'),
  team('sparks', 'Los Angeles Sparks', 'Sparks', 'WNBA', 'basketball', 'la', 'LAS'),
  team('rams', 'Los Angeles Rams', 'Rams', 'NFL', 'football', 'la', 'LAR'),
  team('chargers', 'Los Angeles Chargers', 'Chargers', 'NFL', 'football', 'la', 'LAC'),
  team('usc-football', 'USC Trojans', 'USC', 'College football', 'football', 'la', 'USC', ['USC FB', 'USC Football']),
  team('ucla-football', 'UCLA Bruins', 'UCLA', 'College football', 'football', 'la', 'UCLA', ['UCLA FB', 'UCLA Football']),
  program('ucla', 'UCLA Bruins', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['UCLA Men\'s Basketball']),
  program('ucla', 'UCLA Bruins', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['UCLA Women\'s Basketball']),
  program('ucla', 'UCLA Bruins', 'baseball', 'baseball', 'College baseball', 'baseball', []),
  program('ucla', 'UCLA Bruins', 'mvb', 'volleyball', "College men's volleyball", "men's volleyball", []),
  program('ucla', 'UCLA Bruins', 'wvb', 'volleyball', "College women's volleyball", "women's volleyball", []),
  program('usc', 'USC Trojans', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['USC Men\'s Basketball']),
  program('usc', 'USC Trojans', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['USC Women\'s Basketball']),
  program('usc', 'USC Trojans', 'baseball', 'baseball', 'College baseball', 'baseball', []),
  program('usc', 'USC Trojans', 'wvb', 'volleyball', "College women's volleyball", "women's volleyball", []),
  // The other Division I basketball programs in Los Angeles rooms on file (Oct 22, 2026, step 2 follow-up: their
  // games arrive from the schools' own calendar feeds, sidearmSchools.ts, and a team link needs a record). The short
  // word is the school's common athletics name (Kylie, Oct 19, C1); the code is the scoreboard one.
  program('lmu', 'Loyola Marymount Lions', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['LMU Men\'s Basketball', 'Loyola Marymount'], 'LMU'),
  program('lmu', 'Loyola Marymount Lions', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['LMU Women\'s Basketball'], 'LMU'),
  program('pepperdine', 'Pepperdine Waves', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Pepperdine Men\'s Basketball'], 'Pepperdine', 'PEPP'),
  program('pepperdine', 'Pepperdine Waves', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Pepperdine Women\'s Basketball'], 'Pepperdine', 'PEPP'),
  program('long-beach-state', 'Long Beach State Beach', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Long Beach State Men\'s Basketball', 'LBSU'], 'Long Beach State', 'LBSU'),
  program('long-beach-state', 'Long Beach State Beach', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Long Beach State Women\'s Basketball'], 'Long Beach State', 'LBSU'),
  program('csun', 'CSUN Matadors', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['CSUN Men\'s Basketball', 'Cal State Northridge'], 'CSUN'),
  program('csun', 'CSUN Matadors', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['CSUN Women\'s Basketball'], 'CSUN'),
  program('uc-irvine', 'UC Irvine Anteaters', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['UC Irvine Men\'s Basketball', 'UCI'], 'UC Irvine', 'UCI'),
  program('uc-irvine', 'UC Irvine Anteaters', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['UC Irvine Women\'s Basketball'], 'UC Irvine', 'UCI'),
  program('cal-state-fullerton', 'Cal State Fullerton Titans', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Cal State Fullerton Men\'s Basketball', 'CSUF'], 'Cal State Fullerton', 'CSUF'),
  program('cal-state-fullerton', 'Cal State Fullerton Titans', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Cal State Fullerton Women\'s Basketball'], 'Cal State Fullerton', 'CSUF'),
  program('cal-baptist', 'Cal Baptist Lancers', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Cal Baptist Men\'s Basketball', 'California Baptist', 'CBU'], 'Cal Baptist', 'CBU'),
  program('cal-baptist', 'Cal Baptist Lancers', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Cal Baptist Women\'s Basketball'], 'Cal Baptist', 'CBU'),
  // Visitors
  // New York, covered Oct 7, 2026 (docs/reference/new-city-checklist.md). Every feed id was verified against the live feed.
  // 'ny-' prefixes where an away team already holds the plain id (giants, jets, rangers are SF, Winnipeg, Texas).
  team('yankees', 'New York Yankees', 'Yankees', 'MLB', 'baseball', 'new-york', 'NYY'),
  team('mets', 'New York Mets', 'Mets', 'MLB', 'baseball', 'new-york', 'NYM'),
  team('knicks', 'New York Knicks', 'Knicks', 'NBA', 'basketball', 'new-york', 'NYK'),
  team('nets', 'Brooklyn Nets', 'Nets', 'NBA', 'basketball', 'new-york', 'BKN'),
  team('liberty', 'New York Liberty', 'Liberty', 'WNBA', 'basketball', 'new-york', 'NYL'),
  team('ny-rangers', 'New York Rangers', 'Rangers', 'NHL', 'hockey', 'new-york', 'NYR'),
  team('islanders', 'New York Islanders', 'Islanders', 'NHL', 'hockey', 'new-york', 'NYI'),
  team('devils', 'New Jersey Devils', 'Devils', 'NHL', 'hockey', 'new-york', 'NJD'),
  team('ny-giants', 'New York Giants', 'Giants', 'NFL', 'football', 'new-york', 'NYG'),
  team('ny-jets', 'New York Jets', 'Jets', 'NFL', 'football', 'new-york', 'NYJ'),
  team('nycfc', 'New York City FC', 'NYCFC', 'MLS', 'soccer', 'new-york', 'NYC'),
  team('red-bulls', 'New York Red Bulls', 'Red Bulls', 'MLS', 'soccer', 'new-york', 'RBNY', ['Red Bull New York']),
  team('gotham', 'Gotham FC', 'Gotham', 'NWSL', 'soccer', 'new-york', 'GFC', ['NJ/NY Gotham FC']),
  team('stjohns-mbb', "St. John's Red Storm Men's Basketball", "St. John's MBB", "College men's basketball", 'basketball', 'new-york', 'SJU', ["St. John's"]),
  team('seton-hall-mbb', "Seton Hall Pirates Men's Basketball", 'Seton Hall MBB', "College men's basketball", 'basketball', 'new-york', 'HALL', ['Seton Hall']),
  team('columbia-football', 'Columbia Lions Football', 'Columbia FB', 'College football', 'football', 'new-york', 'COLU', ['Columbia']),
  team('stony-brook-football', 'Stony Brook Seawolves Football', 'Stony Brook FB', 'College football', 'football', 'new-york', 'STBK', ['Stony Brook']),
  team('fordham-football', 'Fordham Rams Football', 'Fordham FB', 'College football', 'football', 'new-york', 'FOR', ['Fordham']),
  // Atlanta, covered Oct 7, 2026 (docs/reference/new-city-checklist.md). Every feed id was verified against the live feed.
  // The Braves were a visitor record (Braves at the Dodgers) until this build.
  team('braves', 'Atlanta Braves', 'Braves', 'MLB', 'baseball', 'atlanta', 'ATL'),
  team('hawks', 'Atlanta Hawks', 'Hawks', 'NBA', 'basketball', 'atlanta', 'ATL'),
  team('dream', 'Atlanta Dream', 'Dream', 'WNBA', 'basketball', 'atlanta', 'ATL'),
  team('falcons', 'Atlanta Falcons', 'Falcons', 'NFL', 'football', 'atlanta', 'ATL'),
  team('atlanta-united', 'Atlanta United FC', 'Atlanta United', 'MLS', 'soccer', 'atlanta', 'ATL', ['Atlanta United']),
  team('gt-football', 'Georgia Tech Yellow Jackets Football', 'Georgia Tech FB', 'College football', 'football', 'atlanta', 'GT', ['Georgia Tech']),
  team('gt-mbb', "Georgia Tech Yellow Jackets Men's Basketball", 'Georgia Tech MBB', "College men's basketball", 'basketball', 'atlanta', 'GT', ['Georgia Tech']),
  team('gt-wbb', "Georgia Tech Yellow Jackets Women's Basketball", 'Georgia Tech WBB', "College women's basketball", 'basketball', 'atlanta', 'GT', ['Georgia Tech']),
  team('gsu-football', 'Georgia State Panthers Football', 'Georgia State FB', 'College football', 'football', 'atlanta', 'GAST', ['Georgia State']),
  team('gsu-mbb', "Georgia State Panthers Men's Basketball", 'Georgia State MBB', "College men's basketball", 'basketball', 'atlanta', 'GAST', ['Georgia State']),
  team('gsu-wbb', "Georgia State Panthers Women's Basketball", 'Georgia State WBB', "College women's basketball", 'basketball', 'atlanta', 'GAST', ['Georgia State']),
  team('ksu-football', 'Kennesaw State Owls Football', 'Kennesaw State FB', 'College football', 'football', 'atlanta', 'KENN', ['Kennesaw State']),
  team('ksu-mbb', "Kennesaw State Owls Men's Basketball", 'Kennesaw State MBB', "College men's basketball", 'basketball', 'atlanta', 'KENN', ['Kennesaw State']),
  // Bay Area, covered Oct 7, 2026 (docs/research/city-builds/bay-area/bay-area-venue-table-answer.md). The Giants were a visitor record before.
  team('giants', 'San Francisco Giants', 'Giants', 'MLB', 'baseball', 'bay-area', 'SF'),
  team('warriors', 'Golden State Warriors', 'Warriors', 'NBA', 'basketball', 'bay-area', 'GSW'),
  team('valkyries', 'Golden State Valkyries', 'Valkyries', 'WNBA', 'basketball', 'bay-area', 'GSV'),
  team('sf-49ers', 'San Francisco 49ers', '49ers', 'NFL', 'football', 'bay-area', 'SF', ['Niners']),
  team('sharks', 'San Jose Sharks', 'Sharks', 'NHL', 'hockey', 'bay-area', 'SJS'),
  team('earthquakes', 'San Jose Earthquakes', 'Earthquakes', 'MLS', 'soccer', 'bay-area', 'SJ', ['Quakes']),
  team('bay-fc', 'Bay FC', 'Bay FC', 'NWSL', 'soccer', 'bay-area', 'BAY'),
  // USL Championship; the club's last Coliseum match is Oct 10, 2026, and its 2027 home is undecided.
  team('oakland-roots', 'Oakland Roots', 'Roots', 'USL Championship', 'soccer', 'bay-area', 'OAK', ['Oakland Roots SC']),
  team('cal-football', 'California Golden Bears Football', 'Cal FB', 'College football', 'football', 'bay-area', 'CAL', ['Cal', 'California']),
  team('cal-mbb', "California Golden Bears Men's Basketball", 'Cal MBB', "College men's basketball", 'basketball', 'bay-area', 'CAL', ['Cal']),
  team('cal-wbb', "California Golden Bears Women's Basketball", 'Cal WBB', "College women's basketball", 'basketball', 'bay-area', 'CAL', ['Cal']),
  team('stanford-football', 'Stanford Cardinal Football', 'Stanford FB', 'College football', 'football', 'bay-area', 'STAN', ['Stanford']),
  team('stanford-mbb', "Stanford Cardinal Men's Basketball", 'Stanford MBB', "College men's basketball", 'basketball', 'bay-area', 'STAN', ['Stanford']),
  team('stanford-wbb', "Stanford Cardinal Women's Basketball", 'Stanford WBB', "College women's basketball", 'basketball', 'bay-area', 'STAN', ['Stanford']),
  team('sjsu-football', 'San José State Spartans Football', 'San José State FB', 'College football', 'football', 'bay-area', 'SJSU', ['San Jose State', 'SJSU']),
  team('sjsu-mbb', "San José State Spartans Men's Basketball", 'San José State MBB', "College men's basketball", 'basketball', 'bay-area', 'SJSU', ['San Jose State', 'SJSU']),
  team('sjsu-wbb', "San José State Spartans Women's Basketball", 'San José State WBB', "College women's basketball", 'basketball', 'bay-area', 'SJSU', ['San Jose State', 'SJSU']),
  // Chicago, covered Oct 7, 2026 (docs/research/city-builds/chicago/chicago-venue-table-answer.md). Loyola is out: Gentile Arena is under 5,000.
  team('cubs', 'Chicago Cubs', 'Cubs', 'MLB', 'baseball', 'chicago', 'CHC'),
  team('white-sox', 'Chicago White Sox', 'White Sox', 'MLB', 'baseball', 'chicago', 'CWS'),
  team('bulls', 'Chicago Bulls', 'Bulls', 'NBA', 'basketball', 'chicago', 'CHI'),
  team('sky', 'Chicago Sky', 'Sky', 'WNBA', 'basketball', 'chicago', 'CHI'),
  team('blackhawks', 'Chicago Blackhawks', 'Blackhawks', 'NHL', 'hockey', 'chicago', 'CHI'),
  team('bears', 'Chicago Bears', 'Bears', 'NFL', 'football', 'chicago', 'CHI'),
  team('chicago-fire', 'Chicago Fire FC', 'Fire', 'MLS', 'soccer', 'chicago', 'CHI', ['Chicago Fire']),
  team('chicago-stars', 'Chicago Stars FC', 'Stars', 'NWSL', 'soccer', 'chicago', 'CHI', ['Chicago Stars', 'Red Stars']),
  team('northwestern-football', 'Northwestern Wildcats Football', 'Northwestern FB', 'College football', 'football', 'chicago', 'NU', ['Northwestern']),
  team('northwestern-mbb', "Northwestern Wildcats Men's Basketball", 'Northwestern MBB', "College men's basketball", 'basketball', 'chicago', 'NU', ['Northwestern']),
  team('northwestern-wbb', "Northwestern Wildcats Women's Basketball", 'Northwestern WBB', "College women's basketball", 'basketball', 'chicago', 'NU', ['Northwestern']),
  team('depaul-mbb', "DePaul Blue Demons Men's Basketball", 'DePaul MBB', "College men's basketball", 'basketball', 'chicago', 'DEP', ['DePaul']),
  team('depaul-wbb', "DePaul Blue Demons Women's Basketball", 'DePaul WBB', "College women's basketball", 'basketball', 'chicago', 'DEP', ['DePaul']),
  team('uic-mbb', "UIC Flames Men's Basketball", 'UIC MBB', "College men's basketball", 'basketball', 'chicago', 'UIC', ['UIC']),
  team('chicago-state-mbb', "Chicago State Cougars Men's Basketball", 'Chicago State MBB', "College men's basketball", 'basketball', 'chicago', 'CHIS', ['Chicago State']),
  // Dallas–Fort Worth, covered Oct 8, 2026 (docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-venue-table-answer.md). The Rangers were a visitor record before.
  team('rangers', 'Texas Rangers', 'Rangers', 'MLB', 'baseball', 'dallas-fort-worth', 'TEX'),
  team('cowboys', 'Dallas Cowboys', 'Cowboys', 'NFL', 'football', 'dallas-fort-worth', 'DAL'),
  team('mavericks', 'Dallas Mavericks', 'Mavericks', 'NBA', 'basketball', 'dallas-fort-worth', 'DAL', ['Mavs']),
  team('dallas-stars', 'Dallas Stars', 'Stars', 'NHL', 'hockey', 'dallas-fort-worth', 'DAL', ['Dallas Stars']),
  team('wings', 'Dallas Wings', 'Wings', 'WNBA', 'basketball', 'dallas-fort-worth', 'DAL'),
  team('fc-dallas', 'FC Dallas', 'FC Dallas', 'MLS', 'soccer', 'dallas-fort-worth', 'DAL'),
  team('smu-football', 'SMU Mustangs Football', 'SMU FB', 'College football', 'football', 'dallas-fort-worth', 'SMU', ['SMU']),
  team('smu-mbb', "SMU Mustangs Men's Basketball", 'SMU MBB', "College men's basketball", 'basketball', 'dallas-fort-worth', 'SMU', ['SMU']),
  team('smu-wbb', "SMU Mustangs Women's Basketball", 'SMU WBB', "College women's basketball", 'basketball', 'dallas-fort-worth', 'SMU', ['SMU']),
  team('tcu-football', 'TCU Horned Frogs Football', 'TCU FB', 'College football', 'football', 'dallas-fort-worth', 'TCU', ['TCU']),
  team('tcu-mbb', "TCU Horned Frogs Men's Basketball", 'TCU MBB', "College men's basketball", 'basketball', 'dallas-fort-worth', 'TCU', ['TCU']),
  team('tcu-wbb', "TCU Horned Frogs Women's Basketball", 'TCU WBB', "College women's basketball", 'basketball', 'dallas-fort-worth', 'TCU', ['TCU']),
  team('unt-football', 'North Texas Mean Green Football', 'North Texas FB', 'College football', 'football', 'dallas-fort-worth', 'UNT', ['North Texas', 'UNT']),
  team('unt-mbb', "North Texas Mean Green Men's Basketball", 'North Texas MBB', "College men's basketball", 'basketball', 'dallas-fort-worth', 'UNT', ['North Texas', 'UNT']),
  team('uta-mbb', "UT Arlington Mavericks Men's Basketball", 'UTA MBB', "College men's basketball", 'basketball', 'dallas-fort-worth', 'UTA', ['UT Arlington', 'UTA']),
  // Montreal, covered Oct 8, 2026 (docs/research/city-builds/montreal/montreal-venue-table-answer.md). The Alouettes (CFL), Victoire (PWHL), Rocket (AHL)
  // and Carabins (U Sports) have no feed wired yet; their pages say "No schedule yet" until one is (docs/product/no-feed-teams-proposal.md).
  team('canadiens', 'Montreal Canadiens', 'Canadiens', 'NHL', 'hockey', 'montreal', 'MTL', ['Montréal Canadiens', 'Habs']),
  team('cf-montreal', 'CF Montréal', 'CF Montréal', 'MLS', 'soccer', 'montreal', 'MTL', ['CF Montreal', 'Montreal Impact']),
  team('alouettes', 'Montréal Alouettes', 'Alouettes', 'CFL', 'football', 'montreal', 'MTL', ['Montreal Alouettes']),
  team('victoire', 'Montréal Victoire', 'Victoire', 'PWHL', 'hockey', 'montreal', 'MTL', ['Montreal Victoire']),
  // (the Laval Rocket row is above; it reads from HockeyTech too)
  team('laval-rocket', 'Laval Rocket', 'Rocket', 'AHL', 'hockey', 'montreal', 'LAV'),
  team('carabins-football', 'Montréal Carabins Football', 'Carabins FB', 'U Sports football', 'football', 'montreal', 'UdeM', ['Carabins']),
  // Minor-league and independent baseball through MLB's own feed (Kylie's OK, Oct 8; docs/product/no-feed-teams-proposal.md).
  team('frisco-roughriders', 'Frisco RoughRiders', 'RoughRiders', 'Double-A baseball', 'baseball', 'dallas-fort-worth', 'FRI'),
  team('tacoma-rainiers', 'Tacoma Rainiers', 'Rainiers', 'Triple-A baseball', 'baseball', 'seattle', 'TAC'),
  team('everett-aquasox', 'Everett AquaSox', 'AquaSox', 'High-A baseball', 'baseball', 'seattle', 'EVE'),
  team('brooklyn-cyclones', 'Brooklyn Cyclones', 'Cyclones', 'High-A baseball', 'baseball', 'new-york', 'BKN'),
  team('staten-island-ferryhawks', 'Staten Island FerryHawks', 'FerryHawks', 'Independent baseball', 'baseball', 'new-york', 'SI'),
  team('long-island-ducks', 'Long Island Ducks', 'Ducks', 'Independent baseball', 'baseball', 'new-york', 'LI', ['LI Ducks']),
  team('gwinnett-stripers', 'Gwinnett Stripers', 'Stripers', 'Triple-A baseball', 'baseball', 'atlanta', 'GWN'),
  team('chicago-dogs', 'Chicago Dogs', 'Dogs', 'Independent baseball', 'baseball', 'chicago', 'CHI'),
  team('schaumburg-boomers', 'Schaumburg Boomers', 'Boomers', 'Independent baseball', 'baseball', 'chicago', 'SCH'),
  // ESPN's smaller leagues (Kylie, Oct 8: extend ESPN; the terms question is a launch milestone, docs/product/no-feed-teams-proposal.md).
  team('dallas-trinity', 'Dallas Trinity FC', 'Trinity FC', 'USL Super League', 'soccer', 'dallas-fort-worth', 'DAL', ['Dallas Trinity']),
  team('dallas-renegades', 'Dallas Renegades', 'Renegades', 'UFL', 'football', 'dallas-fort-worth', 'DAL', ['Arlington Renegades']),
  team('texas-legends', 'Texas Legends', 'Legends', 'NBA G League', 'basketball', 'dallas-fort-worth', 'TEX'),
  team('windy-city-bulls', 'Windy City Bulls', 'Windy City Bulls', 'NBA G League', 'basketball', 'chicago', 'WCB'),
  // HockeyTech leagues (AHL, PWHL, WHL), read from the feed behind the league sites (Kylie, Oct 8; docs/product/no-feed-teams-proposal.md).
  team('chicago-wolves', 'Chicago Wolves', 'Wolves', 'AHL', 'hockey', 'chicago', 'CHI'),
  team('san-jose-barracuda', 'San Jose Barracuda', 'Barracuda', 'AHL', 'hockey', 'bay-area', 'SJ'),
  team('san-diego-gulls', 'San Diego Gulls', 'Gulls', 'AHL', 'hockey', 'san-diego', 'SD'),
  team('seattle-torrent', 'Seattle Torrent', 'Torrent', 'PWHL', 'hockey', 'seattle', 'SEA'),
  team('ny-sirens', 'New York Sirens', 'Sirens', 'PWHL', 'hockey', 'new-york', 'NY'),
  team('pwhl-san-jose', 'PWHL San Jose', 'PWHL San Jose', 'PWHL', 'hockey', 'bay-area', 'SJ'),
  team('seattle-thunderbirds', 'Seattle Thunderbirds', 'Thunderbirds', 'WHL', 'hockey', 'seattle', 'SEA'),
  team('everett-silvertips', 'Everett Silvertips', 'Silvertips', 'WHL', 'hockey', 'seattle', 'EVT'),
  team('ksu-wbb', "Kennesaw State Owls Women's Basketball", 'Kennesaw State WBB', "College women's basketball", 'basketball', 'atlanta', 'KENN', ['Kennesaw State']),
  // Vancouver, covered Oct 12, 2026 (docs/research/city-builds/vancouver/). Abbotsford and Victoria clubs are not in this metro.
  // No-feed records stay loggable; their pages say "No schedule yet" until a source is wired.
  team('vancouver-canucks', 'Vancouver Canucks', 'Canucks', 'NHL', 'hockey', 'vancouver', 'VAN'),
  team('vancouver-warriors', 'Vancouver Warriors', 'Warriors', 'NLL', 'lacrosse', 'vancouver', 'VAN'),
  team('bc-lions', 'BC Lions', 'Lions', 'CFL', 'football', 'vancouver', 'BC'),
  team('vancouver-whitecaps', 'Vancouver Whitecaps FC', 'Whitecaps', 'MLS', 'soccer', 'vancouver', 'VAN', ['Whitecaps', 'VWFC']),
  team('vancouver-goldeneyes', 'Vancouver Goldeneyes', 'Goldeneyes', 'PWHL', 'hockey', 'vancouver', 'VAN'),
  team('vancouver-giants', 'Vancouver Giants', 'Giants', 'WHL', 'hockey', 'vancouver', 'VAN'),
  team('vancouver-bandits', 'Vancouver Bandits', 'Bandits', 'CEBL', 'basketball', 'vancouver', 'VAN'),
  team('vancouver-canadians', 'Vancouver Canadians', 'Canadians', 'High-A baseball', 'baseball', 'vancouver', 'VAN'),
  team('vancouver-fc', 'Vancouver FC', 'Vancouver FC', 'CPL', 'soccer', 'vancouver', 'VFC'),
  team('vancouver-rise', 'Vancouver Rise FC', 'Rise', 'NSL', 'soccer', 'vancouver', 'RISE'),
  team('whitecaps-fc-2', 'Whitecaps FC 2', 'Whitecaps 2', 'MLS Next Pro', 'soccer', 'vancouver', 'WFC2'),
  team('ubc-football', 'UBC Thunderbirds Football', 'UBC FB', 'U Sports football', 'football', 'vancouver', 'UBC'),
  team('ubc-hockey', "UBC Thunderbirds Men's Hockey", 'UBC MHKY', "U Sports men's hockey", 'hockey', 'vancouver', 'UBC'),
  team('ubc-whockey', "UBC Thunderbirds Women's Hockey", 'UBC WHKY', "U Sports women's hockey", 'hockey', 'vancouver', 'UBC'),
  team('ubc-mbb', "UBC Thunderbirds Men's Basketball", 'UBC MBB', "U Sports men's basketball", 'basketball', 'vancouver', 'UBC'),
  team('ubc-wbb', "UBC Thunderbirds Women's Basketball", 'UBC WBB', "U Sports women's basketball", 'basketball', 'vancouver', 'UBC'),
  team('ubc-soccer', 'UBC Thunderbirds Soccer', 'UBC Soccer', 'U Sports soccer', 'soccer', 'vancouver', 'UBC'),
  
  // Toronto (Oct 12, 2026; docs/research/city-builds/toronto/). The Blue Jays record was already a visitor; it is now the home club, same id.
  // Hamilton stays a separate city, so the Toronto Rock is not a Toronto team. Several clubs have no feed yet.
  team('blue-jays', 'Toronto Blue Jays', 'Blue Jays', 'MLB', 'baseball', 'toronto', 'TOR'),
  team('maple-leafs', 'Toronto Maple Leafs', 'Maple Leafs', 'NHL', 'hockey', 'toronto', 'TOR', ['Leafs']),
  team('raptors', 'Toronto Raptors', 'Raptors', 'NBA', 'basketball', 'toronto', 'TOR'),
  team('toronto-fc', 'Toronto FC', 'Toronto FC', 'MLS', 'soccer', 'toronto', 'TOR'),
  team('argonauts', 'Toronto Argonauts', 'Argonauts', 'CFL', 'football', 'toronto', 'TOR', ['Argos']),
  team('marlies', 'Toronto Marlies', 'Marlies', 'AHL', 'hockey', 'toronto', 'TOR'),
  team('sceptres', 'Toronto Sceptres', 'Sceptres', 'PWHL', 'hockey', 'toronto', 'TOR'),
  team('tempo', 'Toronto Tempo', 'Tempo', 'WNBA', 'basketball', 'toronto', 'TOR'),
  team('raptors-905', 'Raptors 905', 'Raptors 905', 'NBA G League', 'basketball', 'toronto', '905'),
  team('afc-toronto', 'AFC Toronto', 'AFC Toronto', 'NSL', 'soccer', 'toronto', 'AFC'),
  team('inter-toronto', 'Inter Toronto FC', 'Inter Toronto', 'CPL', 'soccer', 'toronto', 'INT', ['York United FC']),
  team('brampton-steelheads', 'Brampton Steelheads', 'Steelheads', 'OHL', 'hockey', 'toronto', 'BST', ['Mississauga Steelheads']),
  team('brampton-honey-badgers', 'Brampton Honey Badgers', 'Honey Badgers', 'CEBL', 'basketball', 'toronto', 'BHB'),
  team('oshawa-generals', 'Oshawa Generals', 'Generals', 'OHL', 'hockey', 'toronto', 'GEN'),
  team('oshawa-firewolves', 'Oshawa FireWolves', 'FireWolves', 'NLL', 'lacrosse', 'toronto', 'OSH'),
  team('varsity-blues-football', 'Toronto Varsity Blues Football', 'Varsity Blues FB', 'U Sports football', 'football', 'toronto', 'VFB'),
  team('varsity-blues-hockey', "Toronto Varsity Blues Men's Hockey", 'Varsity Blues MHKY', "U Sports men's hockey", 'hockey', 'toronto', 'VHK'),
  team('varsity-blues-whockey', "Toronto Varsity Blues Women's Hockey", 'Varsity Blues WHKY', "U Sports women's hockey", 'hockey', 'toronto', 'VHK'),
  team('varsity-blues-mbb', "Toronto Varsity Blues Men's Basketball", 'Varsity Blues MBB', 'U Sports basketball', 'basketball', 'toronto', 'VBB'),
  team('york-lions-football', 'York Lions Football', 'York Lions FB', 'U Sports football', 'football', 'toronto', 'YFB'),
  // York and Toronto programs at rooms added Oct 22, 2026 (Tait McKenzie Centre, the York rink, Kimel Field House).
  team('york-lions-mbb', "York Lions Men's Basketball", 'York Lions MBB', "U Sports men's basketball", 'basketball', 'toronto', 'YRK'),
  team('york-lions-wbb', "York Lions Women's Basketball", 'York Lions WBB', "U Sports women's basketball", 'basketball', 'toronto', 'YRK'),
  team('york-lions-mhockey', "York Lions Men's Hockey", 'York Lions MHKY', "U Sports men's hockey", 'hockey', 'toronto', 'YRK'),
  team('york-lions-whockey', "York Lions Women's Hockey", 'York Lions WHKY', "U Sports women's hockey", 'hockey', 'toronto', 'YRK'),
  team('varsity-blues-wbb', "Toronto Varsity Blues Women's Basketball", 'Varsity Blues WBB', "U Sports women's basketball", 'basketball', 'toronto', 'VBB'),
  team('tmu-bold', "TMU Bold Men's Basketball", 'TMU Bold MBB', "U Sports men's basketball", 'basketball', 'toronto', 'TMU'),
  team('tmu-wbb', "TMU Bold Women's Basketball", 'TMU Bold WBB', "U Sports women's basketball", 'basketball', 'toronto', 'TMU'),
  team('tmu-mhockey', "TMU Bold Men's Hockey", 'TMU Bold MHKY', "U Sports men's hockey", 'hockey', 'toronto', 'TMU'),
  team('tmu-whockey', "TMU Bold Women's Hockey", 'TMU Bold WHKY', "U Sports women's hockey", 'hockey', 'toronto', 'TMU'),
  // Denver, covered Oct 13, 2026 (docs/research/city-builds/denver/). Feed ids checked against ESPN Oct 13, 2026.
  // The Rockies and Rapids were visitor records; same ids, now home clubs.
  team('rockies', 'Colorado Rockies', 'Rockies', 'MLB', 'baseball', 'denver', 'COL'),
  team('rapids', 'Colorado Rapids', 'Rapids', 'MLS', 'soccer', 'denver', 'COL'),
  team('broncos', 'Denver Broncos', 'Broncos', 'NFL', 'football', 'denver', 'DEN'),
  team('nuggets', 'Denver Nuggets', 'Nuggets', 'NBA', 'basketball', 'denver', 'DEN'),
  team('avalanche', 'Colorado Avalanche', 'Avalanche', 'NHL', 'hockey', 'denver', 'COL'),
  // DEN5 (Kylie, Oct 14): no bare "Mammoth" alias, so it can't cross-match Utah's NHL club.
  team('colorado-mammoth', 'Colorado Mammoth', 'Mammoth', 'NLL', 'lacrosse', 'denver', 'COL'),
  team('denver-summit-fc', 'Denver Summit FC', 'Summit FC', 'NWSL', 'soccer', 'denver', 'DEN', ['Denver Summit']),
  team('du-mhockey', 'Denver Pioneers Hockey', 'DU Hockey', "College men's hockey", 'hockey', 'denver', 'DU', ['Denver', 'Pioneers']),
  team('du-mbb', "Denver Pioneers Men's Basketball", 'DU MBB', "College men's basketball", 'basketball', 'denver', 'DU', ['Denver', 'Pioneers']),
  team('du-wbb', "Denver Pioneers Women's Basketball", 'DU WBB', "College women's basketball", 'basketball', 'denver', 'DU', ['Denver', 'Pioneers']),
  // Ottawa–Gatineau (Oct 13, 2026; docs/research/city-builds/ottawa-gatineau/). Black Bears discontinued Sep 2026 — no record.
  team('ottawa-senators', 'Ottawa Senators', 'Senators', 'NHL', 'hockey', 'ottawa-gatineau', 'OTT', ['Centre Canadian Tire']),
  team('ottawa-redblacks', 'Ottawa Redblacks', 'Redblacks', 'CFL', 'football', 'ottawa-gatineau', 'OTT'),
  team('ottawa-charge', 'Ottawa Charge', 'Charge', 'PWHL', 'hockey', 'ottawa-gatineau', 'OTT'),
  team('atletico-ottawa', 'Atlético Ottawa', 'Atlético Ottawa', 'CPL', 'soccer', 'ottawa-gatineau', 'ATO'),
  team('ottawa-67s', "Ottawa 67's", "67's", 'OHL', 'hockey', 'ottawa-gatineau', '67S'),
  team('ottawa-blackjacks', 'Ottawa BlackJacks', 'BlackJacks', 'CEBL', 'basketball', 'ottawa-gatineau', 'OBJ'),
  team('ottawa-titans', 'Ottawa Titans', 'Titans', 'Frontier League', 'baseball', 'ottawa-gatineau', 'TIT'),
  team('gatineau-olympiques', 'Gatineau Olympiques', 'Olympiques', 'QMJHL', 'hockey', 'ottawa-gatineau', 'OLY'),
  team('ottawa-rapid-fc', 'Ottawa Rapid FC', 'Rapid FC', "USL Super League", 'soccer', 'ottawa-gatineau', 'RFC'),
  team('carleton-ravens-football', 'Carleton Ravens Football', 'Ravens FB', 'U Sports football', 'football', 'ottawa-gatineau', 'CAR'),
  team('carleton-ravens-mbb', "Carleton Ravens Men's Basketball", 'Ravens MBB', 'U Sports basketball', 'basketball', 'ottawa-gatineau', 'CAR'),
  team('marlins', 'Miami Marlins', 'Marlins', 'MLB', 'baseball', 'miami', 'MIA'),
  team('blazers', 'Portland Trail Blazers', 'Blazers', 'NBA', 'basketball', 'portland', 'POR'),
  // Portland (Oct 13, 2026; docs/research/city-builds/portland/). ESPN, MLB and HockeyTech ids checked against live schedules.
  team('timbers', 'Portland Timbers', 'Timbers', 'MLS', 'soccer', 'portland', 'POR'),
  team('thorns', 'Portland Thorns FC', 'Thorns', 'NWSL', 'soccer', 'portland', 'POR'),
  team('portland-fire', 'Portland Fire', 'Fire', 'WNBA', 'basketball', 'portland', 'POR'),
  team('portland-winterhawks', 'Portland Winterhawks', 'Winterhawks', 'WHL', 'hockey', 'portland', 'HAW'),
  team('hillsboro-hops', 'Hillsboro Hops', 'Hops', 'High-A baseball', 'baseball', 'portland', 'HOP'),
  team('portland-cascade', 'Portland Cascade', 'Cascade', 'AUSL', 'softball', 'portland', 'CAS'),
  team('psu-football', 'Portland State Vikings Football', 'PSU Football', 'College football', 'football', 'portland', 'PSU', ['Portland State']),
  team('psu-mbb', "Portland State Vikings Men's Basketball", 'PSU MBB', "College men's basketball", 'basketball', 'portland', 'PSU', ['Portland State']),
  team('psu-wbb', "Portland State Vikings Women's Basketball", 'PSU WBB', "College women's basketball", 'basketball', 'portland', 'PSU', ['Portland State']),
  team('rip-city-remix', 'Rip City Remix', 'Remix', 'NBA G League', 'basketball', 'portland', 'REM'),
  team('up-pilots-mbb', "Portland Pilots Men's Basketball", 'Pilots MBB', "College men's basketball", 'basketball', 'portland', 'UP'),
  // San Antonio (Oct 13, 2026; docs/research/city-builds/san-antonio/). Spurs were a visitor record; same id, now home.
  team('spurs', 'San Antonio Spurs', 'Spurs', 'NBA', 'basketball', 'san-antonio', 'SAS'),
  team('san-antonio-fc', 'San Antonio FC', 'SAFC', 'USL Championship', 'soccer', 'san-antonio', 'SAFC'),
  team('san-antonio-missions', 'San Antonio Missions', 'Missions', 'Double-A baseball', 'baseball', 'san-antonio', 'MIS'),
  team('utsa-football', 'UTSA Roadrunners Football', 'UTSA FB', 'College football', 'football', 'san-antonio', 'UTSA'),
  team('utsa-mbb', "UTSA Roadrunners Men's Basketball", 'UTSA MBB', "College men's basketball", 'basketball', 'san-antonio', 'UTSA'),
  team('utsa-wbb', "UTSA Roadrunners Women's Basketball", 'UTSA WBB', "College women's basketball", 'basketball', 'san-antonio', 'UTSA'),
  team('uiw-football', 'Incarnate Word Cardinals Football', 'UIW FB', 'College football', 'football', 'san-antonio', 'UIW'),
  team('uiw-mbb', "Incarnate Word Cardinals Men's Basketball", 'UIW MBB', "College men's basketball", 'basketball', 'san-antonio', 'UIW'),
  team('uiw-wbb', "Incarnate Word Cardinals Women's Basketball", 'UIW WBB', "College women's basketball", 'basketball', 'san-antonio', 'UIW'),
  team('jets', 'Winnipeg Jets', 'Jets', 'NHL', 'hockey', undefined, 'WPG'),
  team('panthers', 'Florida Panthers', 'Panthers', 'NHL', 'hockey', 'miami', 'FLA'),
  // Mexico City (Oct 12, 2026; docs/research/city-builds/mexico-city/). ESPN ids checked Oct 12, 2026.
  // Cruz Azul was a visitor record; same id, now the home club. Puebla's Estadio Cuauhtémoc stays outside this metro.
  team('club-america', 'Club América', 'América', 'Liga MX', 'soccer', 'mexico-city', 'AME', ['Club America', 'America']),
  team('cruz-azul', 'Cruz Azul', 'Cruz Azul', 'Liga MX', 'soccer', 'mexico-city', 'CAZ'),
  team('atlante', 'Atlante', 'Atlante', 'Liga MX', 'soccer', 'mexico-city', 'ATL'),
  team('pumas-unam', 'Pumas UNAM', 'Pumas', 'Liga MX', 'soccer', 'mexico-city', 'UNAM', ['UNAM', 'Pumas']),
  team('america-femenil', 'América Femenil', 'América Femenil', 'Liga MX Femenil', 'soccer', 'mexico-city', 'AME', ['Club America Femenil', 'America Femenil']),
  team('pumas-femenil', 'Pumas UNAM Femenil', 'Pumas Femenil', 'Liga MX Femenil', 'soccer', 'mexico-city', 'UNAM', ['Pumas Femenil']),
  team('cruz-azul-femenil', 'Cruz Azul Femenil', 'Cruz Azul Femenil', 'Liga MX Femenil', 'soccer', 'mexico-city', 'CAZ'),
  team('capitanes', 'Capitanes de la Ciudad de México', 'Capitanes', 'NBA G League', 'basketball', 'mexico-city', 'CAP', ['Mexico City Capitanes', 'Capitanes CDMX']),
  team('diablos-rojos', 'Diablos Rojos del México', 'Diablos', 'LMB', 'baseball', 'mexico-city', 'MEX', ['Diablos Rojos']),
  team('diablos-rojos-softball', 'Diablos Rojos Femenil', 'Diablos Femenil', 'LMS', 'softball', 'mexico-city', 'DIS'),
  team('diablos-rojos-basketball', 'Diablos Rojos de Básquetbol', 'Diablos Básquet', 'LNBP', 'basketball', 'mexico-city', 'DRB'),
  team('aguilas-blancas', 'Águilas Blancas', 'Águilas Blancas', 'ONEFA', 'football', 'mexico-city', 'AGB', ['Aguilas Blancas']),
  team('burros-blancos', 'Burros Blancos', 'Burros Blancos', 'ONEFA', 'football', 'mexico-city', 'BUB'),
  // Washington, DC (Oct 13, 2026; docs/research/city-builds/washington-dc/washington-dc-venue-table-answer.md).
  team('nationals', 'Washington Nationals', 'Nationals', 'MLB', 'baseball', 'washington-dc', 'WSH', ['Nats']),
  team('capitals', 'Washington Capitals', 'Capitals', 'NHL', 'hockey', 'washington-dc', 'WSH', ['Caps']),
  team('wizards', 'Washington Wizards', 'Wizards', 'NBA', 'basketball', 'washington-dc', 'WAS'),
  team('mystics', 'Washington Mystics', 'Mystics', 'WNBA', 'basketball', 'washington-dc', 'WAS'),
  team('dc-united', 'D.C. United', 'D.C. United', 'MLS', 'soccer', 'washington-dc', 'DC', ['DC United']),
  team('spirit', 'Washington Spirit', 'Spirit', 'NWSL', 'soccer', 'washington-dc', 'WAS'),
  team('capital-city-go-go', 'Capital City Go-Go', 'Go-Go', 'NBA G League', 'basketball', 'washington-dc', 'CCG'),
  team('georgetown-mbb', "Georgetown Hoyas Men's Basketball", 'Georgetown MBB', "College men's basketball", 'basketball', 'washington-dc', 'GTWN', ['Georgetown', 'Hoyas']),
  team('maryland-football', 'Maryland Terrapins Football', 'Maryland FB', 'College football', 'football', 'washington-dc', 'MD', ['Maryland', 'Terps']),
  team('maryland-mbb', "Maryland Terrapins Men's Basketball", 'Maryland MBB', "College men's basketball", 'basketball', 'washington-dc', 'MD', ['Maryland', 'Terps']),
  team('maryland-wbb', "Maryland Terrapins Women's Basketball", 'Maryland WBB', "College women's basketball", 'basketball', 'washington-dc', 'MD', ['Maryland', 'Terps']),
  team('gmu-mbb', "George Mason Patriots Men's Basketball", 'GMU MBB', "College men's basketball", 'basketball', 'washington-dc', 'GMU', ['George Mason']),
  team('gw-mbb', "George Washington Revolutionaries Men's Basketball", 'GW MBB', "College men's basketball", 'basketball', 'washington-dc', 'GW', ['George Washington', 'GW']),
  team('howard-football', 'Howard Bison Football', 'Howard FB', 'College football', 'football', 'washington-dc', 'HOW', ['Howard']),
  team('chesapeake-baysox', 'Chesapeake Baysox', 'Baysox', 'Double-A baseball', 'baseball', 'washington-dc', 'BAY', ['Bowie Baysox']),
  team('loudoun-united', 'Loudoun United FC', 'Loudoun United', 'USL Championship', 'soccer', 'washington-dc', 'LOU'),
  team('washington', 'Washington Commanders', 'Commanders', 'NFL', 'football', 'washington-dc', 'WAS', ['Washington']),
  team('dolphins', 'Miami Dolphins', 'Dolphins', 'NFL', 'football', 'miami', 'MIA'),
  // Miami (Oct 13, 2026; docs/research/city-builds/miami/). ESPN ids checked Oct 13, 2026.
  team('heat', 'Miami Heat', 'Heat', 'NBA', 'basketball', 'miami', 'MIA'),
  team('inter-miami-cf', 'Inter Miami CF', 'Inter Miami', 'MLS', 'soccer', 'miami', 'MIA', ['Inter Miami CF']),
  team('miami-hurricanes-football', 'Miami Hurricanes Football', 'Hurricanes FB', 'College football', 'football', 'miami', 'MIA', ['Miami', 'Hurricanes']),
  team('miami-hurricanes-mbb', "Miami Hurricanes Men's Basketball", 'Hurricanes MBB', "College men's basketball", 'basketball', 'miami', 'MIA', ['Miami', 'Hurricanes']),
  team('fiu-football', 'FIU Panthers Football', 'FIU FB', 'College football', 'football', 'miami', 'FIU', ['FIU']),
  team('fiu-mbb', "FIU Panthers Men's Basketball", 'FIU MBB', "College men's basketball", 'basketball', 'miami', 'FIU', ['FIU']),
  team('miami-fc', 'Miami FC', 'Miami FC', 'USL Championship', 'soccer', 'miami', 'MFC'),
  team('fort-lauderdale-united', 'Fort Lauderdale United FC', 'Fort Lauderdale Utd', 'USL Super League', 'soccer', 'miami', 'FTL'),
  // Rutgers is a New York home team since Oct 16, 2026 (SHI Stadium and Jersey Mike's Arena came in with the small-rooms research).
  // The football id stays 'rutgers': the expected-draw index names it as an opponent.
  team('rutgers', 'Rutgers Scarlet Knights', 'Rutgers', 'College football', 'football', 'new-york', 'RUTG', ['Rutgers FB', 'Rutgers Football']),
  team('rutgers-mbb', "Rutgers Scarlet Knights Men's Basketball", 'Rutgers MBB', "College men's basketball", 'basketball', 'new-york', 'RUTG', ['Rutgers']),
  team('rutgers-wbb', "Rutgers Scarlet Knights Women's Basketball", 'Rutgers WBB', "College women's basketball", 'basketball', 'new-york', 'RUTG', ['Rutgers']),
  team('bowling-green', 'Bowling Green Falcons', 'Bowling Green', 'College football', 'football', undefined, 'BGSU'),
  // Programs the schools' calendar feeds carry with ten or more home games at rooms on file (Oct 22, 2026, from the
  // feed measurement; the step 2 follow-up "team links beyond UCLA and USC"). The short word is the school's common
  // athletics name; the code is the scoreboard one. Added so those games reach a team page.
  team('osu-baseball', 'Ohio State Buckeyes Baseball', 'Ohio State Baseball', 'College baseball', 'baseball', 'columbus', 'OSU', ['Buckeyes']),
  team('utah-baseball', 'Utah Utes Baseball', 'Utah Baseball', 'College baseball', 'baseball', 'salt-lake-city', 'UTAH', ['Utes']),
  team('texas-state-softball', 'Texas State Bobcats Softball', 'Texas State Softball', 'College softball', 'softball', 'austin', 'TXST', ['Bobcats']),
  team('fiu-wbb', "FIU Panthers Women's Basketball", 'FIU WBB', "College women's basketball", 'basketball', 'miami', 'FIU', ['FIU']),
  team('bu-mhockey', "Boston University Terriers Men's Hockey", 'BU MHKY', "College men's hockey", 'hockey', 'boston', 'BU', ['Terriers']),
  team('bc-mhockey', "Boston College Eagles Men's Hockey", 'BC MHKY', "College men's hockey", 'hockey', 'boston', 'BC', ['Eagles']),
  team('bc-whockey', "Boston College Eagles Women's Hockey", 'BC WHKY', "College women's hockey", 'hockey', 'boston', 'BC', ['Eagles']),
  team('uml-mhockey', "UMass Lowell River Hawks Men's Hockey", 'UML MHKY', "College men's hockey", 'hockey', 'boston', 'UML', ['River Hawks']),
  team('robert-morris-mhockey', "Robert Morris Colonials Men's Hockey", 'RMU MHKY', "College men's hockey", 'hockey', 'pittsburgh', 'RMU', ['Colonials', 'Robert Morris']),
  team('robert-morris-whockey', "Robert Morris Colonials Women's Hockey", 'RMU WHKY', "College women's hockey", 'hockey', 'pittsburgh', 'RMU', ['Colonials', 'Robert Morris']),
  team('fordham-mbb', "Fordham Rams Men's Basketball", 'Fordham MBB', "College men's basketball", 'basketball', 'new-york', 'FOR', ['Fordham']),
  team('fordham-wbb', "Fordham Rams Women's Basketball", 'Fordham WBB', "College women's basketball", 'basketball', 'new-york', 'FOR', ['Fordham']),
  team('iona-mbb', "Iona Gaels Men's Basketball", 'Iona MBB', "College men's basketball", 'basketball', 'new-york', 'IONA', ['Iona', 'Gaels']),
  team('iona-wbb', "Iona Gaels Women's Basketball", 'Iona WBB', "College women's basketball", 'basketball', 'new-york', 'IONA', ['Iona', 'Gaels']),
  team('seton-hall-wbb', "Seton Hall Pirates Women's Basketball", 'Seton Hall WBB', "College women's basketball", 'basketball', 'new-york', 'HALL', ['Seton Hall']),
  team('columbia-mbb', "Columbia Lions Men's Basketball", 'Columbia MBB', "College men's basketball", 'basketball', 'new-york', 'COLU', ['Columbia']),
  team('columbia-wbb', "Columbia Lions Women's Basketball", 'Columbia WBB', "College women's basketball", 'basketball', 'new-york', 'COLU', ['Columbia']),
  team('wagner-mbb', "Wagner Seahawks Men's Basketball", 'Wagner MBB', "College men's basketball", 'basketball', 'new-york', 'WAG', ['Wagner']),
  team('wagner-wbb', "Wagner Seahawks Women's Basketball", 'Wagner WBB', "College women's basketball", 'basketball', 'new-york', 'WAG', ['Wagner']),
  team('usd-mbb', "San Diego Toreros Men's Basketball", 'San Diego MBB', "College men's basketball", 'basketball', 'san-diego', 'USD', ['Toreros', 'USD', 'University of San Diego']),
  team('usd-wbb', "San Diego Toreros Women's Basketball", 'San Diego WBB', "College women's basketball", 'basketball', 'san-diego', 'USD', ['Toreros', 'USD', 'University of San Diego']),
  team('gw-wbb', "George Washington Revolutionaries Women's Basketball", 'GW WBB', "College women's basketball", 'basketball', 'washington-dc', 'GW', ['George Washington', 'GW']),
  team('gmu-wbb', "George Mason Patriots Women's Basketball", 'GMU WBB', "College women's basketball", 'basketball', 'washington-dc', 'GMU', ['George Mason']),
  team('unt-wbb', "North Texas Mean Green Women's Basketball", 'North Texas WBB', "College women's basketball", 'basketball', 'dallas-fort-worth', 'UNT', ['North Texas', 'UNT']),
  team('uta-wbb', "UT Arlington Mavericks Women's Basketball", 'UTA WBB', "College women's basketball", 'basketball', 'dallas-fort-worth', 'UTA', ['UT Arlington', 'UTA']),
  team('sju-mbb', "Saint Joseph's Hawks Men's Basketball", "Saint Joseph's MBB", "College men's basketball", 'basketball', 'philadelphia', 'SJU', ["Saint Joseph's", "St. Joseph's", 'Hawks']),
  team('sju-wbb', "Saint Joseph's Hawks Women's Basketball", "Saint Joseph's WBB", "College women's basketball", 'basketball', 'philadelphia', 'SJU', ["Saint Joseph's", "St. Joseph's", 'Hawks']),
  team('up-pilots-wbb', "Portland Pilots Women's Basketball", 'Pilots WBB', "College women's basketball", 'basketball', 'portland', 'UP', ['Pilots']),
  team('detroit-mercy-wbb', "Detroit Mercy Titans Women's Basketball", 'Detroit Mercy WBB', "College women's basketball", 'basketball', 'detroit', 'UDM', ['Titans', 'Detroit Mercy']),
  team('uic-wbb', "UIC Flames Women's Basketball", 'UIC WBB', "College women's basketball", 'basketball', 'chicago', 'UIC', ['UIC']),
  team('chicago-state-wbb', "Chicago State Cougars Women's Basketball", 'Chicago State WBB', "College women's basketball", 'basketball', 'chicago', 'CHIS', ['Chicago State']),
  team('kc-roos-mbb', "Kansas City Roos Men's Basketball", 'Kansas City MBB', "College men's basketball", 'basketball', 'kansas-city', 'UMKC', ['UMKC', 'Roos', 'Kansas City']),
  team('kc-roos-wbb', "Kansas City Roos Women's Basketball", 'Kansas City WBB', "College women's basketball", 'basketball', 'kansas-city', 'UMKC', ['UMKC', 'Roos', 'Kansas City']),
  program('csun', 'CSUN Matadors', 'mvb', 'volleyball', "College men's volleyball", "men's volleyball", ['CSUN Men\'s Volleyball'], 'CSUN'),
  program('cal-state-la', 'Cal State LA Golden Eagles', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Cal State LA Men\'s Basketball', 'Cal State Los Angeles'], 'Cal State LA', 'CSLA'),
  program('cal-state-la', 'Cal State LA Golden Eagles', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Cal State LA Women\'s Basketball'], 'Cal State LA', 'CSLA'),
  program('cal-lutheran', 'Cal Lutheran Kingsmen', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Cal Lutheran Men\'s Basketball', 'California Lutheran'], 'Cal Lutheran', 'CLU'),
  program('cal-lutheran', 'Cal Lutheran Regals', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Cal Lutheran Women\'s Basketball'], 'Cal Lutheran', 'CLU'),
  program('cal-poly-pomona', 'Cal Poly Pomona Broncos', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Cal Poly Pomona Men\'s Basketball', 'CPP'], 'Cal Poly Pomona', 'CPP'),
  program('cal-poly-pomona', 'Cal Poly Pomona Broncos', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Cal Poly Pomona Women\'s Basketball'], 'Cal Poly Pomona', 'CPP'),
  program('azusa-pacific', 'Azusa Pacific Cougars', 'mbb', 'basketball', "College men's basketball", "men's basketball", ['Azusa Pacific Men\'s Basketball', 'APU'], 'Azusa Pacific', 'APU'),
  program('azusa-pacific', 'Azusa Pacific Cougars', 'wbb', 'basketball', "College women's basketball", "women's basketball", ['Azusa Pacific Women\'s Basketball'], 'Azusa Pacific', 'APU'),
  // Programs with ten or more home games at a college room added Oct 22, 2026 and no record (the pair's other side
  // added with it): their games now link to a team page from the school feeds.
  team('texas-state-baseball', 'Texas State Bobcats Baseball', 'Texas State Baseball', 'College baseball', 'baseball', 'austin', 'TXST', ['Bobcats']),
  team('maryland-baseball', 'Maryland Terrapins Baseball', 'Maryland Baseball', 'College baseball', 'baseball', 'washington-dc', 'MD', ['Maryland', 'Terps']),
  team('georgetown-wbb', "Georgetown Hoyas Women's Basketball", 'Georgetown WBB', "College women's basketball", 'basketball', 'washington-dc', 'GTWN', ['Georgetown', 'Hoyas']),
  team('howard-wbb', "Howard Bison Women's Basketball", 'Howard WBB', "College women's basketball", 'basketball', 'washington-dc', 'HOW', ['Howard']),
  team('smc-mbb', "Saint Mary's Gaels Men's Basketball", "Saint Mary's MBB", "College men's basketball", 'basketball', 'bay-area', 'SMC', ["Saint Mary's", 'Gaels']),
  team('smc-wbb', "Saint Mary's Gaels Women's Basketball", "Saint Mary's WBB", "College women's basketball", 'basketball', 'bay-area', 'SMC', ["Saint Mary's", 'Gaels']),
  team('usf-dons-mbb', "San Francisco Dons Men's Basketball", 'San Francisco MBB', "College men's basketball", 'basketball', 'bay-area', 'USF', ['San Francisco', 'Dons', 'USF']),
  team('usf-dons-wbb', "San Francisco Dons Women's Basketball", 'San Francisco WBB', "College women's basketball", 'basketball', 'bay-area', 'USF', ['San Francisco', 'Dons', 'USF']),
  team('santa-clara-mbb', "Santa Clara Broncos Men's Basketball", 'Santa Clara MBB', "College men's basketball", 'basketball', 'bay-area', 'SCU', ['Santa Clara', 'Broncos']),
  team('santa-clara-wbb', "Santa Clara Broncos Women's Basketball", 'Santa Clara WBB', "College women's basketball", 'basketball', 'bay-area', 'SCU', ['Santa Clara', 'Broncos']),
  team('stony-brook-mbb', "Stony Brook Seawolves Men's Basketball", 'Stony Brook MBB', "College men's basketball", 'basketball', 'new-york', 'STBK', ['Stony Brook', 'Seawolves']),
  team('stony-brook-wbb', "Stony Brook Seawolves Women's Basketball", 'Stony Brook WBB', "College women's basketball", 'basketball', 'new-york', 'STBK', ['Stony Brook', 'Seawolves']),
  team('liu-mbb', "LIU Sharks Men's Basketball", 'LIU MBB', "College men's basketball", 'basketball', 'new-york', 'LIU', ['LIU', 'Sharks']),
  team('liu-wbb', "LIU Sharks Women's Basketball", 'LIU WBB', "College women's basketball", 'basketball', 'new-york', 'LIU', ['LIU', 'Sharks']),
  team('liu-mhockey', "LIU Sharks Men's Hockey", 'LIU MHKY', "College men's hockey", 'hockey', 'new-york', 'LIU', ['LIU', 'Sharks']),
  team('liu-whockey', "LIU Sharks Women's Hockey", 'LIU WHKY', "College women's hockey", 'hockey', 'new-york', 'LIU', ['LIU', 'Sharks']),
  team('bu-whockey', "Boston University Terriers Women's Hockey", 'BU WHKY', "College women's hockey", 'hockey', 'boston', 'BU', ['Terriers']),
  team('northeastern-mbb', "Northeastern Huskies Men's Basketball", 'Northeastern MBB', "College men's basketball", 'basketball', 'boston', 'NU', ['Northeastern', 'Huskies']),
  team('northeastern-wbb', "Northeastern Huskies Women's Basketball", 'Northeastern WBB', "College women's basketball", 'basketball', 'boston', 'NU', ['Northeastern', 'Huskies']),
  team('loyola-chicago-mbb', "Loyola Chicago Ramblers Men's Basketball", 'Loyola Chicago MBB', "College men's basketball", 'basketball', 'chicago', 'LUC', ['Loyola Chicago', 'Loyola', 'Ramblers']),
  team('loyola-chicago-wbb', "Loyola Chicago Ramblers Women's Basketball", 'Loyola Chicago WBB', "College women's basketball", 'basketball', 'chicago', 'LUC', ['Loyola Chicago', 'Loyola', 'Ramblers']),
  team('ucsd-mbb', "UC San Diego Tritons Men's Basketball", 'UC San Diego MBB', "College men's basketball", 'basketball', 'san-diego', 'UCSD', ['UC San Diego', 'UCSD', 'Tritons']),
  team('ucsd-wbb', "UC San Diego Tritons Women's Basketball", 'UC San Diego WBB', "College women's basketball", 'basketball', 'san-diego', 'UCSD', ['UC San Diego', 'UCSD', 'Tritons']),
  team('drexel-mbb', "Drexel Dragons Men's Basketball", 'Drexel MBB', "College men's basketball", 'basketball', 'philadelphia', 'DREX', ['Drexel', 'Dragons']),
  team('drexel-wbb', "Drexel Dragons Women's Basketball", 'Drexel WBB', "College women's basketball", 'basketball', 'philadelphia', 'DREX', ['Drexel', 'Dragons']),
  team('delaware-whockey', "Delaware Blue Hens Women's Hockey", 'Delaware WHKY', "College women's hockey", 'hockey', 'philadelphia', 'DEL', ['Delaware', 'Blue Hens']),
  team('delaware-baseball', 'Delaware Blue Hens Baseball', 'Delaware Baseball', 'College baseball', 'baseball', 'philadelphia', 'DEL', ['Delaware', 'Blue Hens']),
  team('pvamu-mbb', "Prairie View A&M Panthers Men's Basketball", 'Prairie View A&M MBB', "College men's basketball", 'basketball', 'houston', 'PVAM', ['Prairie View A&M', 'Prairie View', 'PVAMU']),
  team('pvamu-wbb', "Prairie View A&M Panthers Women's Basketball", 'Prairie View A&M WBB', "College women's basketball", 'basketball', 'houston', 'PVAM', ['Prairie View A&M', 'Prairie View', 'PVAMU']),
  team('texas-southern-mbb', "Texas Southern Tigers Men's Basketball", 'Texas Southern MBB', "College men's basketball", 'basketball', 'houston', 'TXSO', ['Texas Southern', 'TSU']),
  team('texas-southern-wbb', "Texas Southern Tigers Women's Basketball", 'Texas Southern WBB', "College women's basketball", 'basketball', 'houston', 'TXSO', ['Texas Southern', 'TSU']),
  team('osu-whockey', "Ohio State Buckeyes Women's Hockey", 'Ohio State WHKY', "College women's hockey", 'hockey', 'columbus', 'OSU', ['Buckeyes']),
  team('uindy-mbb', "UIndy Greyhounds Men's Basketball", 'UIndy MBB', "College men's basketball", 'basketball', 'indianapolis', 'UINDY', ['UIndy', 'Greyhounds', 'Indianapolis']),
  team('uindy-wbb', "UIndy Greyhounds Women's Basketball", 'UIndy WBB', "College women's basketball", 'basketball', 'indianapolis', 'UINDY', ['UIndy', 'Greyhounds', 'Indianapolis']),
  team('lindenwood-mhockey', "Lindenwood Lions Men's Hockey", 'Lindenwood MHKY', "College men's hockey", 'hockey', 'st-louis', 'LIN', ['Lindenwood']),
  team('lindenwood-whockey', "Lindenwood Lions Women's Hockey", 'Lindenwood WHKY', "College women's hockey", 'hockey', 'st-louis', 'LIN', ['Lindenwood']),
  team('kennesaw-state-baseball', 'Kennesaw State Owls Baseball', 'Kennesaw State Baseball', 'College baseball', 'baseball', 'atlanta', 'KSU', ['Kennesaw State', 'Owls']),
  team('gcu-baseball', 'Grand Canyon Lopes Baseball', 'Grand Canyon Baseball', 'College baseball', 'baseball', 'phoenix', 'GCU', ['Grand Canyon', 'GCU', 'Lopes']),
  team('fiu-baseball', 'FIU Panthers Baseball', 'FIU Baseball', 'College baseball', 'baseball', 'miami', 'FIU', ['FIU']),
  team('mtsu-baseball', 'Middle Tennessee Blue Raiders Baseball', 'Middle Tennessee Baseball', 'College baseball', 'baseball', 'nashville', 'MTSU', ['Middle Tennessee', 'MTSU', 'Blue Raiders']),
  team('uc-davis-baseball', 'UC Davis Aggies Baseball', 'UC Davis Baseball', 'College baseball', 'baseball', 'sacramento', 'UCD', ['UC Davis', 'Aggies']),
];

export const TEAMS: Record<string, Team> = Object.fromEntries(LIST.map((t) => [t.id, t]));
