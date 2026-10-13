// Collects announced attendance for past home games of the Los Angeles teams,
// from MLB's box scores and ESPN's past-season schedules (both free, no key).
// One file per team under data/attendance/la/. Run now and then, not nightly:
//   node scripts/attendance-collect.mjs            (all teams, recent seasons)
//   node scripts/attendance-collect.mjs dodgers    (one team)
// Every figure is the league's announced count (tickets distributed, for MLB
// and the NFL). Nothing here is invented; a game without a count is skipped.
// The review's calibration plan (docs/archive/formula/formula-review-response.md §11).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_METRO = 'la';
/** Local dates and starts are each city's own clock (a 7 pm game in New York is 19:00, not 16:00). */
const ZONE_BY_METRO = { la: 'America/Los_Angeles', 'san-diego': 'America/Los_Angeles', seattle: 'America/Los_Angeles', 'new-york': 'America/New_York', atlanta: 'America/New_York', 'bay-area': 'America/Los_Angeles', chicago: 'America/Chicago', 'dallas-fort-worth': 'America/Chicago', montreal: 'America/Toronto', milwaukee: 'America/Chicago', boston: 'America/New_York', philadelphia: 'America/New_York', tampa: 'America/New_York', miami: 'America/New_York', columbus: 'America/New_York', nashville: 'America/Chicago', austin: 'America/Chicago', phoenix: 'America/Phoenix', vancouver: 'America/Vancouver', sacramento: 'America/Los_Angeles', 'mexico-city': 'America/Mexico_City', 'las-vegas': 'America/Los_Angeles', 'kansas-city': 'America/Chicago', houston: 'America/Chicago', indianapolis: 'America/Indiana/Indianapolis', toronto: 'America/Toronto', minneapolis: 'America/Chicago' , 'new-orleans': 'America/Chicago', 'salt-lake-city': 'America/Denver', 'ottawa-gatineau': 'America/Toronto', edmonton: 'America/Edmonton', 'washington-dc': 'America/New_York', 'san-antonio': 'America/Chicago' };
const UA = { 'User-Agent': 'Mozilla/5.0 (fan-friction attendance collector)' };

/** MLB seasons are calendar years. ESPN seasons are the year the season ends (2026 = 2025-26) for winter sports. */
const MLB_TEAMS = [
  { teamId: 'blue-jays', metroId: 'toronto', mlbId: 141, venueId: 'rogers-centre', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'red-sox', metroId: 'boston', mlbId: 111, venueId: 'fenway-park', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'phillies', metroId: 'philadelphia', mlbId: 143, venueId: 'citizens-bank-park', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'nationals', metroId: 'washington-dc', mlbId: 120, venueId: 'nationals-park', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'chesapeake-baysox', metroId: 'washington-dc', mlbId: 418, sportId: 12, venueId: 'prince-georges-stadium', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'astros', metroId: 'houston', mlbId: 117, venueId: 'daikin-park', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'space-cowboys', metroId: 'houston', mlbId: 5434, sportId: 11, venueId: 'constellation-field', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'rays', metroId: 'tampa', mlbId: 139, venueId: 'tropicana-field', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'marlins', metroId: 'miami', mlbId: 146, mlbVenueId: 4169, venueId: 'loandepot-park', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'columbus-clippers', metroId: 'columbus', mlbId: 445, sportId: 11, venueId: 'huntington-park', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'guardians', metroId: 'cleveland', mlbId: 114, venueId: 'progressive-field', mlbVenueId: 5, seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'lake-county-captains', metroId: 'cleveland', mlbId: 437, sportId: 13, venueId: 'classic-auto-group-park', mlbVenueId: 2759, seasons: [2022, 2023, 2024, 2025, 2026] },
  // Regular-season home games only at Chase Field. 2026 had two "home" games in Mexico City (venue 5340).
  { teamId: 'diamondbacks', metroId: 'phoenix', mlbId: 109, venueId: 'chase-field', mlbVenueId: 15, seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'clearwater-threshers', metroId: 'tampa', mlbId: 566, sportId: 14, venueId: 'baycare-ballpark', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'tampa-tarpons', metroId: 'tampa', mlbId: 587, sportId: 14, venueId: 'george-m-steinbrenner-field', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'dunedin-blue-jays', metroId: 'tampa', mlbId: 424, sportId: 14, venueId: 'td-ballpark', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'round-rock-express', metroId: 'austin', mlbId: 102, sportId: 11, venueId: 'dell-diamond', seasons: [2022, 2023, 2024, 2025, 2026] },
  // Only Sutter Health Park (MLB venue 2529). Oakland seasons and 2026 Las Vegas games are left out.
  { teamId: 'athletics', metroId: 'sacramento', mlbId: 133, venueByMlbId: { 2529: 'sutter-health-park' }, seasons: [2025, 2026] },
  { teamId: 'river-cats', metroId: 'sacramento', mlbId: 105, sportId: 11, venueId: 'sutter-health-park', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'las-vegas-aviators', metroId: 'las-vegas', mlbId: 400, sportId: 11, venueId: 'las-vegas-ballpark', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'twins', metroId: 'minneapolis', mlbId: 142, venueId: 'target-field', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'st-paul-saints', metroId: 'minneapolis', mlbId: 1960, sportId: 11, venueId: 'chs-field', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'brewers', metroId: 'milwaukee', mlbId: 158, venueId: 'american-family-field', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'milwaukee-milkmen', metroId: 'milwaukee', mlbId: 5548, sportId: 23, venueId: 'franklin-field', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'lake-country-dockhounds', metroId: 'milwaukee', mlbId: 6488, sportId: 23, venueId: 'dockhounds-ballpark', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'dodgers', mlbId: 119, venueId: 'dodger-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'angels', mlbId: 108, venueId: 'angel-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'padres', mlbId: 135, venueId: 'petco-park', metroId: 'san-diego', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'mariners', mlbId: 136, venueId: 't-mobile-park', metroId: 'seattle', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'yankees', mlbId: 147, venueId: 'yankee-stadium', metroId: 'new-york', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'mets', mlbId: 121, venueId: 'citi-field', metroId: 'new-york', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'braves', mlbId: 144, venueId: 'truist-park', metroId: 'atlanta', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'giants', mlbId: 137, venueId: 'oracle-park', metroId: 'bay-area', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'cubs', mlbId: 112, venueId: 'wrigley-field', metroId: 'chicago', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'white-sox', mlbId: 145, venueId: 'rate-field', metroId: 'chicago', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'rangers', mlbId: 140, venueId: 'globe-life-field', metroId: 'dallas-fort-worth', seasons: [2022, 2023, 2024, 2025, 2026] },
  // Minor-league and independent clubs (the same feed, a sport id each; Kylie's OK, Oct 8, 2026).
  { teamId: 'frisco-roughriders', mlbId: 540, sportId: 12, venueId: 'riders-field', metroId: 'dallas-fort-worth', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'tacoma-rainiers', mlbId: 529, sportId: 11, venueId: 'cheney-stadium', metroId: 'seattle', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'everett-aquasox', mlbId: 403, sportId: 13, venueId: 'everett-memorial-stadium', metroId: 'seattle', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'brooklyn-cyclones', mlbId: 453, sportId: 13, venueId: 'maimonides-park', metroId: 'new-york', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'staten-island-ferryhawks', mlbId: 586, sportId: 23, venueId: 'siuh-community-park', metroId: 'new-york', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'long-island-ducks', mlbId: 1896, sportId: 23, venueId: 'fairfield-properties-ballpark', metroId: 'new-york', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'gwinnett-stripers', mlbId: 431, sportId: 11, venueId: 'gwinnett-field', metroId: 'atlanta', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'chicago-dogs', mlbId: 1882, sportId: 23, venueId: 'impact-field', metroId: 'chicago', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'schaumburg-boomers', mlbId: 1950, sportId: 23, venueId: 'wintrust-field', metroId: 'chicago', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'indianapolis-indians', metroId: 'indianapolis', mlbId: 484, sportId: 11, venueId: 'victory-field', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'sounds', metroId: 'nashville', mlbId: 556, sportId: 11, venueId: 'first-horizon-park', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'vancouver-canadians', mlbId: 435, sportId: 13, venueId: 'nat-bailey-stadium', metroId: 'vancouver', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'royals', mlbId: 118, venueId: 'kauffman-stadium', metroId: 'kansas-city', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'kc-monarchs', mlbId: 1885, sportId: 23, venueId: 'legends-field', metroId: 'kansas-city', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'salt-lake-bees', metroId: 'salt-lake-city', mlbId: 561, sportId: 11, venueId: 'ballpark-at-america-first-square', mlbVenueId: 6135, seasons: [2023, 2024, 2025, 2026] },
];
const ESPN_TEAMS = [
  { teamId: 'maple-leafs', metroId: 'toronto', path: 'hockey/nhl', espnId: '21', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'raptors', metroId: 'toronto', path: 'basketball/nba', espnId: '28', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'tempo', metroId: 'toronto', path: 'basketball/wnba', espnId: '131935', seasons: [2026], seasontype: 2 },
  { teamId: 'raptors-905', metroId: 'toronto', path: 'basketball/nba-development', espnId: '17', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'toronto-fc', metroId: 'toronto', path: 'soccer/usa.1', espnId: '7318', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'argonauts', metroId: 'toronto', path: 'football/cfl', espnId: '85', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'celtics', metroId: 'boston', path: 'basketball/nba', espnId: '2', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'bruins', metroId: 'boston', path: 'hockey/nhl', espnId: '1', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'patriots', metroId: 'boston', path: 'football/nfl', espnId: '17', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'revolution', metroId: 'boston', path: 'soccer/usa.1', espnId: '189', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'boston-legacy-fc', metroId: 'boston', path: 'soccer/usa.nwsl', espnId: '131562', seasons: [2025, 2026] },
  { teamId: 'bc-football', metroId: 'boston', path: 'football/college-football', espnId: '103', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'bc-mbb', metroId: 'boston', path: 'basketball/mens-college-basketball', espnId: '103', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'bc-wbb', metroId: 'boston', path: 'basketball/womens-college-basketball', espnId: '103', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'bu-mbb', metroId: 'boston', path: 'basketball/mens-college-basketball', espnId: '104', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'bu-wbb', metroId: 'boston', path: 'basketball/womens-college-basketball', espnId: '104', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'harvard-football', metroId: 'boston', path: 'football/college-football', espnId: '108', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'uml-mbb', metroId: 'boston', path: 'basketball/mens-college-basketball', espnId: '2349', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uml-wbb', metroId: 'boston', path: 'basketball/womens-college-basketball', espnId: '2349', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'eagles', metroId: 'philadelphia', path: 'football/nfl', espnId: '21', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sixers', metroId: 'philadelphia', path: 'basketball/nba', espnId: '20', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'flyers', metroId: 'philadelphia', path: 'hockey/nhl', espnId: '15', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'philadelphia-union', metroId: 'philadelphia', path: 'soccer/usa.1', espnId: '10739', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'temple-football', metroId: 'philadelphia', path: 'football/college-football', espnId: '218', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'temple-mbb', metroId: 'philadelphia', path: 'basketball/mens-college-basketball', espnId: '218', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'temple-wbb', metroId: 'philadelphia', path: 'basketball/womens-college-basketball', espnId: '218', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'villanova-football', metroId: 'philadelphia', path: 'football/college-football', espnId: '222', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'villanova-mbb', metroId: 'philadelphia', path: 'basketball/mens-college-basketball', espnId: '222', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'villanova-wbb', metroId: 'philadelphia', path: 'basketball/womens-college-basketball', espnId: '222', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'penn-football', metroId: 'philadelphia', path: 'football/college-football', espnId: '219', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'penn-mbb', metroId: 'philadelphia', path: 'basketball/mens-college-basketball', espnId: '219', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'penn-wbb', metroId: 'philadelphia', path: 'basketball/womens-college-basketball', espnId: '219', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'delaware-football', metroId: 'philadelphia', path: 'football/college-football', espnId: '48', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'delaware-mbb', metroId: 'philadelphia', path: 'basketball/mens-college-basketball', espnId: '48', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'delaware-wbb', metroId: 'philadelphia', path: 'basketball/womens-college-basketball', espnId: '48', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'browns', metroId: 'cleveland', path: 'football/nfl', espnId: '5', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cavaliers', metroId: 'cleveland', path: 'basketball/nba', espnId: '5', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cleveland-state-mbb', metroId: 'cleveland', path: 'basketball/mens-college-basketball', espnId: '325', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cleveland-state-wbb', metroId: 'cleveland', path: 'basketball/womens-college-basketball', espnId: '325', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'buccaneers', metroId: 'tampa', path: 'football/nfl', espnId: '27', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'lightning', metroId: 'tampa', path: 'hockey/nhl', espnId: '20', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'usf-football', metroId: 'tampa', path: 'football/college-football', espnId: '58', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'usf-mbb', metroId: 'tampa', path: 'basketball/mens-college-basketball', espnId: '58', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'usf-wbb', metroId: 'tampa', path: 'basketball/womens-college-basketball', espnId: '58', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'rowdies', metroId: 'tampa', path: 'soccer/usa.usl.1', espnId: '17361', seasons: [2023, 2024, 2025, 2026], seasontype: 0 },
  { teamId: 'dolphins', metroId: 'miami', path: 'football/nfl', espnId: '15', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'heat', metroId: 'miami', path: 'basketball/nba', espnId: '14', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'panthers', metroId: 'miami', path: 'hockey/nhl', espnId: '26', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'inter-miami-cf', metroId: 'miami', path: 'soccer/usa.1', espnId: '20232', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'miami-hurricanes-football', metroId: 'miami', path: 'football/college-football', espnId: '2390', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'miami-hurricanes-mbb', metroId: 'miami', path: 'basketball/mens-college-basketball', espnId: '2390', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'fiu-football', metroId: 'miami', path: 'football/college-football', espnId: '2229', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'fiu-mbb', metroId: 'miami', path: 'basketball/mens-college-basketball', espnId: '2229', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'miami-fc', metroId: 'miami', path: 'soccer/usa.usl.1', espnId: '18159', seasons: [2023, 2024, 2025, 2026], seasontype: 0 },
  { teamId: 'fort-lauderdale-united', metroId: 'miami', path: 'soccer/usa.w.usl.1', espnId: '131449', seasons: [2025, 2026] },
  { teamId: 'blue-jackets', metroId: 'columbus', path: 'hockey/nhl', espnId: '29', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'columbus-crew', metroId: 'columbus', path: 'soccer/usa.1', espnId: '183', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'osu-football', metroId: 'columbus', path: 'football/college-football', espnId: '194', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'osu-mbb', metroId: 'columbus', path: 'basketball/mens-college-basketball', espnId: '194', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'osu-wbb', metroId: 'columbus', path: 'basketball/womens-college-basketball', espnId: '194', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'osu-mhockey', metroId: 'columbus', path: 'hockey/mens-college-hockey', espnId: '194', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'austin-fc', metroId: 'austin', path: 'soccer/usa.1', espnId: '20906', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'texas-football', metroId: 'austin', path: 'football/college-football', espnId: '251', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'texas-mbb', metroId: 'austin', path: 'basketball/mens-college-basketball', espnId: '251', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'texas-wbb', metroId: 'austin', path: 'basketball/womens-college-basketball', espnId: '251', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'texas-state-football', metroId: 'austin', path: 'football/college-football', espnId: '326', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'texas-state-mbb', metroId: 'austin', path: 'basketball/mens-college-basketball', espnId: '326', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'texas-state-wbb', metroId: 'austin', path: 'basketball/womens-college-basketball', espnId: '326', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'arizona-cardinals', metroId: 'phoenix', path: 'football/nfl', espnId: '22', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'suns', metroId: 'phoenix', path: 'basketball/nba', espnId: '21', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'mercury', metroId: 'phoenix', path: 'basketball/wnba', espnId: '11', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'valley-suns', metroId: 'phoenix', path: 'basketball/nba-development', espnId: '129713', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'phoenix-rising', metroId: 'phoenix', path: 'soccer/usa.usl.1', espnId: '17850', seasons: [2024, 2025, 2026], seasontype: 0 },
  { teamId: 'asu-football', metroId: 'phoenix', path: 'football/college-football', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'asu-mbb', metroId: 'phoenix', path: 'basketball/mens-college-basketball', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'asu-wbb', metroId: 'phoenix', path: 'basketball/womens-college-basketball', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'asu-hockey', metroId: 'phoenix', path: 'hockey/mens-college-hockey', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gcu-mbb', metroId: 'phoenix', path: 'basketball/mens-college-basketball', espnId: '2253', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gcu-wbb', metroId: 'phoenix', path: 'basketball/womens-college-basketball', espnId: '2253', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'vancouver-canucks', metroId: 'vancouver', path: 'hockey/nhl', espnId: '22', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'vancouver-whitecaps', metroId: 'vancouver', path: 'soccer/usa.1', espnId: '9727', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'bc-lions', metroId: 'vancouver', path: 'football/cfl', espnId: '79', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'vancouver-warriors', metroId: 'vancouver', path: 'lacrosse/nll', espnId: '125432', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sacramento-kings', metroId: 'sacramento', path: 'basketball/nba', espnId: '23', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sac-state-football', metroId: 'sacramento', path: 'football/college-football', espnId: '16', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sac-state-mbb', metroId: 'sacramento', path: 'basketball/mens-college-basketball', espnId: '16', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sac-state-wbb', metroId: 'sacramento', path: 'basketball/womens-college-basketball', espnId: '16', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uc-davis-football', metroId: 'sacramento', path: 'football/college-football', espnId: '302', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uc-davis-mbb', metroId: 'sacramento', path: 'basketball/mens-college-basketball', espnId: '302', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uc-davis-wbb', metroId: 'sacramento', path: 'basketball/womens-college-basketball', espnId: '302', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sacramento-republic', metroId: 'sacramento', path: 'soccer/usa.usl.1', espnId: '17828', seasons: [2023, 2024, 2025, 2026], seasontype: 0 },
  { teamId: 'club-america', metroId: 'mexico-city', path: 'soccer/mex.1', espnId: '227', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'cruz-azul', metroId: 'mexico-city', path: 'soccer/mex.1', espnId: '218', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'atlante', metroId: 'mexico-city', path: 'soccer/mex.1', espnId: '226', seasons: [2024, 2025, 2026] },
  { teamId: 'pumas-unam', metroId: 'mexico-city', path: 'soccer/mex.1', espnId: '233', seasons: [2023, 2024, 2025, 2026] },
  { teamId: 'america-femenil', metroId: 'mexico-city', path: 'soccer/mex.w.1', espnId: '22415', seasons: [2024, 2025, 2026] },
  { teamId: 'pumas-femenil', metroId: 'mexico-city', path: 'soccer/mex.w.1', espnId: '133981', seasons: [2024, 2025, 2026] },
  { teamId: 'cruz-azul-femenil', metroId: 'mexico-city', path: 'soccer/mex.w.1', espnId: '133982', seasons: [2024, 2025, 2026] },
  { teamId: 'capitanes', metroId: 'mexico-city', path: 'basketball/nba-development', espnId: '124612', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'raiders', metroId: 'las-vegas', path: 'football/nfl', espnId: '13', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'golden-knights', metroId: 'las-vegas', path: 'hockey/nhl', espnId: '37', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'aces', metroId: 'las-vegas', path: 'basketball/wnba', espnId: '17', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'las-vegas-lights', metroId: 'las-vegas', path: 'soccer/usa.usl.1', espnId: '18987', seasons: [2023, 2024, 2025, 2026], seasontype: 0 },
  { teamId: 'unlv-football', metroId: 'las-vegas', path: 'football/college-football', espnId: '2439', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'unlv-mbb', metroId: 'las-vegas', path: 'basketball/mens-college-basketball', espnId: '2439', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'unlv-wbb', metroId: 'las-vegas', path: 'basketball/womens-college-basketball', espnId: '2439', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'chiefs', metroId: 'kansas-city', path: 'football/nfl', espnId: '12', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sporting-kc', metroId: 'kansas-city', path: 'soccer/usa.1', espnId: '186', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'kc-current', metroId: 'kansas-city', path: 'soccer/usa.nwsl', espnId: '20907', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'texans', metroId: 'houston', path: 'football/nfl', espnId: '34', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'rockets', metroId: 'houston', path: 'basketball/nba', espnId: '10', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'dynamo', metroId: 'houston', path: 'soccer/usa.1', espnId: '6077', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'dash', metroId: 'houston', path: 'soccer/usa.nwsl', espnId: '17346', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'uh-football', metroId: 'houston', path: 'football/college-football', espnId: '248', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'uh-mbb', metroId: 'houston', path: 'basketball/mens-college-basketball', espnId: '248', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uh-wbb', metroId: 'houston', path: 'basketball/womens-college-basketball', espnId: '248', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'rice-football', metroId: 'houston', path: 'football/college-football', espnId: '242', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'rice-mbb', metroId: 'houston', path: 'basketball/mens-college-basketball', espnId: '242', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'rice-wbb', metroId: 'houston', path: 'basketball/womens-college-basketball', espnId: '242', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'texas-southern-football', metroId: 'houston', path: 'football/college-football', espnId: '2640', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'pvamu-football', metroId: 'houston', path: 'football/college-football', espnId: '2504', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'vikings', metroId: 'minneapolis', path: 'football/nfl', espnId: '16', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'timberwolves', metroId: 'minneapolis', path: 'basketball/nba', espnId: '16', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'lynx', metroId: 'minneapolis', path: 'basketball/wnba', espnId: '8', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'wild', metroId: 'minneapolis', path: 'hockey/nhl', espnId: '30', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'minnesota-united', metroId: 'minneapolis', path: 'soccer/usa.1', espnId: '17362', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'gophers-football', metroId: 'minneapolis', path: 'football/college-football', espnId: '135', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'gophers-mbb', metroId: 'minneapolis', path: 'basketball/mens-college-basketball', espnId: '135', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gophers-wbb', metroId: 'minneapolis', path: 'basketball/womens-college-basketball', espnId: '135', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gophers-hockey', metroId: 'minneapolis', path: 'hockey/mens-college-hockey', espnId: '135', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'st-thomas-mbb', metroId: 'minneapolis', path: 'basketball/mens-college-basketball', espnId: '2900', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'st-thomas-wbb', metroId: 'minneapolis', path: 'basketball/womens-college-basketball', espnId: '2900', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'st-thomas-hockey', metroId: 'minneapolis', path: 'hockey/mens-college-hockey', espnId: '2900', seasons: [2025, 2026], seasontype: 2 },
  { teamId: 'bucks', metroId: 'milwaukee', path: 'basketball/nba', espnId: '15', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'marquette-mbb', metroId: 'milwaukee', path: 'basketball/mens-college-basketball', espnId: '269', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'marquette-wbb', metroId: 'milwaukee', path: 'basketball/womens-college-basketball', espnId: '269', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uwm-mbb', metroId: 'milwaukee', path: 'basketball/mens-college-basketball', espnId: '270', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uwm-wbb', metroId: 'milwaukee', path: 'basketball/womens-college-basketball', espnId: '270', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'lakers', path: 'basketball/nba', espnId: '13', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'clippers', path: 'basketball/nba', espnId: '12', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'kings', path: 'hockey/nhl', espnId: '8', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ducks', path: 'hockey/nhl', espnId: '25', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'galaxy', path: 'soccer/usa.1', espnId: '187', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'lafc', path: 'soccer/usa.1', espnId: '18966', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'angel-city', path: 'soccer/usa.nwsl', espnId: '21422', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'rams', path: 'football/nfl', espnId: '14', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'chargers', path: 'football/nfl', espnId: '24', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'usc-football', path: 'football/college-football', espnId: '30', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'ucla-football', path: 'football/college-football', espnId: '26', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'usc-mbb', path: 'basketball/mens-college-basketball', espnId: '30', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ucla-mbb', path: 'basketball/mens-college-basketball', espnId: '26', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'usc-wbb', path: 'basketball/womens-college-basketball', espnId: '30', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ucla-wbb', path: 'basketball/womens-college-basketball', espnId: '26', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'san-diego-fc', metroId: 'san-diego', path: 'soccer/usa.1', espnId: '22529', seasons: [2025] },
  { teamId: 'wave', metroId: 'san-diego', path: 'soccer/usa.nwsl', espnId: '21423', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'sdsu-football', metroId: 'san-diego', path: 'football/college-football', espnId: '21', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sdsu-mbb', metroId: 'san-diego', path: 'basketball/mens-college-basketball', espnId: '21', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sdsu-wbb', metroId: 'san-diego', path: 'basketball/womens-college-basketball', espnId: '21', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'seahawks', metroId: 'seattle', path: 'football/nfl', espnId: '26', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'kraken', metroId: 'seattle', path: 'hockey/nhl', espnId: '124292', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sounders', metroId: 'seattle', path: 'soccer/usa.1', espnId: '9726', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'reign', metroId: 'seattle', path: 'soccer/usa.nwsl', espnId: '15363', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'uw-football', metroId: 'seattle', path: 'football/college-football', espnId: '264', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'uw-mbb', metroId: 'seattle', path: 'basketball/mens-college-basketball', espnId: '264', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uw-wbb', metroId: 'seattle', path: 'basketball/womens-college-basketball', espnId: '264', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'knicks', metroId: 'new-york', path: 'basketball/nba', espnId: '18', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'nets', metroId: 'new-york', path: 'basketball/nba', espnId: '17', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'liberty', metroId: 'new-york', path: 'basketball/wnba', espnId: '9', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ny-rangers', metroId: 'new-york', path: 'hockey/nhl', espnId: '13', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'islanders', metroId: 'new-york', path: 'hockey/nhl', espnId: '12', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'devils', metroId: 'new-york', path: 'hockey/nhl', espnId: '11', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ny-giants', metroId: 'new-york', path: 'football/nfl', espnId: '19', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'ny-jets', metroId: 'new-york', path: 'football/nfl', espnId: '20', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'nycfc', metroId: 'new-york', path: 'soccer/usa.1', espnId: '17606', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'red-bulls', metroId: 'new-york', path: 'soccer/usa.1', espnId: '190', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'gotham', metroId: 'new-york', path: 'soccer/usa.nwsl', espnId: '15364', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'stjohns-mbb', metroId: 'new-york', path: 'basketball/mens-college-basketball', espnId: '2599', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'seton-hall-mbb', metroId: 'new-york', path: 'basketball/mens-college-basketball', espnId: '2550', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'columbia-football', metroId: 'new-york', path: 'football/college-football', espnId: '171', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'stony-brook-football', metroId: 'new-york', path: 'football/college-football', espnId: '2619', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'fordham-football', metroId: 'new-york', path: 'football/college-football', espnId: '2230', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'hawks', metroId: 'atlanta', path: 'basketball/nba', espnId: '1', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'dream', metroId: 'atlanta', path: 'basketball/wnba', espnId: '20', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'falcons', metroId: 'atlanta', path: 'football/nfl', espnId: '1', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'atlanta-united', metroId: 'atlanta', path: 'soccer/usa.1', espnId: '18418', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'gt-football', metroId: 'atlanta', path: 'football/college-football', espnId: '59', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'gt-mbb', metroId: 'atlanta', path: 'basketball/mens-college-basketball', espnId: '59', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gt-wbb', metroId: 'atlanta', path: 'basketball/womens-college-basketball', espnId: '59', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gsu-football', metroId: 'atlanta', path: 'football/college-football', espnId: '2247', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'gsu-mbb', metroId: 'atlanta', path: 'basketball/mens-college-basketball', espnId: '2247', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gsu-wbb', metroId: 'atlanta', path: 'basketball/womens-college-basketball', espnId: '2247', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ksu-football', metroId: 'atlanta', path: 'football/college-football', espnId: '338', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'ksu-mbb', metroId: 'atlanta', path: 'basketball/mens-college-basketball', espnId: '338', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ksu-wbb', metroId: 'atlanta', path: 'basketball/womens-college-basketball', espnId: '338', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'warriors', metroId: 'bay-area', path: 'basketball/nba', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'valkyries', metroId: 'bay-area', path: 'basketball/wnba', espnId: '129689', seasons: [2025, 2026], seasontype: 2 },
  { teamId: 'sf-49ers', metroId: 'bay-area', path: 'football/nfl', espnId: '25', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sharks', metroId: 'bay-area', path: 'hockey/nhl', espnId: '18', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'earthquakes', metroId: 'bay-area', path: 'soccer/usa.1', espnId: '191', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'bay-fc', metroId: 'bay-area', path: 'soccer/usa.nwsl', espnId: '22187', seasons: [2024, 2025] },
  { teamId: 'oakland-roots', metroId: 'bay-area', path: 'soccer/usa.usl.1', espnId: '20687', seasons: [2025, 2026] },
  { teamId: 'cal-football', metroId: 'bay-area', path: 'football/college-football', espnId: '25', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'cal-mbb', metroId: 'bay-area', path: 'basketball/mens-college-basketball', espnId: '25', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cal-wbb', metroId: 'bay-area', path: 'basketball/womens-college-basketball', espnId: '25', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'stanford-football', metroId: 'bay-area', path: 'football/college-football', espnId: '24', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'stanford-mbb', metroId: 'bay-area', path: 'basketball/mens-college-basketball', espnId: '24', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'stanford-wbb', metroId: 'bay-area', path: 'basketball/womens-college-basketball', espnId: '24', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sjsu-football', metroId: 'bay-area', path: 'football/college-football', espnId: '23', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'sjsu-mbb', metroId: 'bay-area', path: 'basketball/mens-college-basketball', espnId: '23', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sjsu-wbb', metroId: 'bay-area', path: 'basketball/womens-college-basketball', espnId: '23', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'bulls', metroId: 'chicago', path: 'basketball/nba', espnId: '4', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'sky', metroId: 'chicago', path: 'basketball/wnba', espnId: '19', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'blackhawks', metroId: 'chicago', path: 'hockey/nhl', espnId: '4', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'bears', metroId: 'chicago', path: 'football/nfl', espnId: '3', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'chicago-fire', metroId: 'chicago', path: 'soccer/usa.1', espnId: '182', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'chicago-stars', metroId: 'chicago', path: 'soccer/usa.nwsl', espnId: '15360', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'northwestern-football', metroId: 'chicago', path: 'football/college-football', espnId: '77', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'northwestern-mbb', metroId: 'chicago', path: 'basketball/mens-college-basketball', espnId: '77', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'northwestern-wbb', metroId: 'chicago', path: 'basketball/womens-college-basketball', espnId: '77', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'depaul-mbb', metroId: 'chicago', path: 'basketball/mens-college-basketball', espnId: '305', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'depaul-wbb', metroId: 'chicago', path: 'basketball/womens-college-basketball', espnId: '305', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uic-mbb', metroId: 'chicago', path: 'basketball/mens-college-basketball', espnId: '82', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'chicago-state-mbb', metroId: 'chicago', path: 'basketball/mens-college-basketball', espnId: '2130', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'mavericks', metroId: 'dallas-fort-worth', path: 'basketball/nba', espnId: '6', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'wings', metroId: 'dallas-fort-worth', path: 'basketball/wnba', espnId: '3', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'dallas-stars', metroId: 'dallas-fort-worth', path: 'hockey/nhl', espnId: '9', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cowboys', metroId: 'dallas-fort-worth', path: 'football/nfl', espnId: '6', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'fc-dallas', metroId: 'dallas-fort-worth', path: 'soccer/usa.1', espnId: '185', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'smu-football', metroId: 'dallas-fort-worth', path: 'football/college-football', espnId: '2567', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'smu-mbb', metroId: 'dallas-fort-worth', path: 'basketball/mens-college-basketball', espnId: '2567', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'smu-wbb', metroId: 'dallas-fort-worth', path: 'basketball/womens-college-basketball', espnId: '2567', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'tcu-football', metroId: 'dallas-fort-worth', path: 'football/college-football', espnId: '2628', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'tcu-mbb', metroId: 'dallas-fort-worth', path: 'basketball/mens-college-basketball', espnId: '2628', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'tcu-wbb', metroId: 'dallas-fort-worth', path: 'basketball/womens-college-basketball', espnId: '2628', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'unt-football', metroId: 'dallas-fort-worth', path: 'football/college-football', espnId: '249', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'unt-mbb', metroId: 'dallas-fort-worth', path: 'basketball/mens-college-basketball', espnId: '249', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uta-mbb', metroId: 'dallas-fort-worth', path: 'basketball/mens-college-basketball', espnId: '250', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'canadiens', metroId: 'montreal', path: 'hockey/nhl', espnId: '10', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'cf-montreal', metroId: 'montreal', path: 'soccer/usa.1', espnId: '9720', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'alouettes', metroId: 'montreal', path: 'football/cfl', espnId: '83', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'dallas-trinity', metroId: 'dallas-fort-worth', path: 'soccer/usa.w.usl.1', espnId: '131447', seasons: [2025, 2026] },
  { teamId: 'dallas-renegades', metroId: 'dallas-fort-worth', path: 'football/ufl', espnId: '112647', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'texas-legends', metroId: 'dallas-fort-worth', path: 'basketball/nba-development', espnId: '24', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'windy-city-bulls', metroId: 'chicago', path: 'basketball/nba-development', espnId: '26', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'colts', metroId: 'indianapolis', path: 'football/nfl', espnId: '11', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'pacers', metroId: 'indianapolis', path: 'basketball/nba', espnId: '11', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'fever', metroId: 'indianapolis', path: 'basketball/wnba', espnId: '5', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'butler-football', metroId: 'indianapolis', path: 'football/college-football', espnId: '2086', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'butler-mbb', metroId: 'indianapolis', path: 'basketball/mens-college-basketball', espnId: '2086', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'butler-wbb', metroId: 'indianapolis', path: 'basketball/womens-college-basketball', espnId: '2086', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'iu-indy-mbb', metroId: 'indianapolis', path: 'basketball/mens-college-basketball', espnId: '85', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'iu-indy-wbb', metroId: 'indianapolis', path: 'basketball/womens-college-basketball', espnId: '85', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'titans', metroId: 'nashville', path: 'football/nfl', espnId: '10', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'predators', metroId: 'nashville', path: 'hockey/nhl', espnId: '27', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'nashville-sc', metroId: 'nashville', path: 'soccer/usa.1', espnId: '18986', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'tsu-football', metroId: 'nashville', path: 'football/college-football', espnId: '2634', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'tsu-mbb', metroId: 'nashville', path: 'basketball/mens-college-basketball', espnId: '2634', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'tsu-wbb', metroId: 'nashville', path: 'basketball/womens-college-basketball', espnId: '2634', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'vanderbilt-football', metroId: 'nashville', path: 'football/college-football', espnId: '238', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'vanderbilt-mbb', metroId: 'nashville', path: 'basketball/mens-college-basketball', espnId: '238', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'vanderbilt-wbb', metroId: 'nashville', path: 'basketball/womens-college-basketball', espnId: '238', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'belmont-mbb', metroId: 'nashville', path: 'basketball/mens-college-basketball', espnId: '2057', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'belmont-wbb', metroId: 'nashville', path: 'basketball/womens-college-basketball', espnId: '2057', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'lipscomb-mbb', metroId: 'nashville', path: 'basketball/mens-college-basketball', espnId: '288', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'lipscomb-wbb', metroId: 'nashville', path: 'basketball/womens-college-basketball', espnId: '288', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'mtsu-football', metroId: 'nashville', path: 'football/college-football', espnId: '2393', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'mtsu-mbb', metroId: 'nashville', path: 'basketball/mens-college-basketball', espnId: '2393', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'mtsu-wbb', metroId: 'nashville', path: 'basketball/womens-college-basketball', espnId: '2393', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'saints', metroId: 'new-orleans', path: 'football/nfl', espnId: '18', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'pelicans', metroId: 'new-orleans', path: 'basketball/nba', espnId: '3', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'tulane-football', metroId: 'new-orleans', path: 'football/college-football', espnId: '2655', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'tulane-mbb', metroId: 'new-orleans', path: 'basketball/mens-college-basketball', espnId: '2655', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'tulane-wbb', metroId: 'new-orleans', path: 'basketball/womens-college-basketball', espnId: '2655', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'tulane-baseball', metroId: 'new-orleans', path: 'baseball/college-baseball', espnId: '203', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'lsuno-mbb', metroId: 'new-orleans', path: 'basketball/mens-college-basketball', espnId: '2443', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'lsuno-wbb', metroId: 'new-orleans', path: 'basketball/womens-college-basketball', espnId: '2443', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'lsuno-baseball', metroId: 'new-orleans', path: 'baseball/college-baseball', espnId: '184', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'laketown-squadron', metroId: 'new-orleans', path: 'basketball/nba-development', espnId: '6', seasons: [2025, 2026, 2027], seasontype: 2 },
  { teamId: 'spurs', metroId: 'san-antonio', path: 'basketball/nba', espnId: '24', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'san-antonio-fc', metroId: 'san-antonio', path: 'soccer/usa.usl.1', espnId: '18265', seasons: [2023, 2024, 2025, 2026], seasontype: 0 },
  { teamId: 'san-antonio-missions', metroId: 'san-antonio', mlbId: 510, sportId: 12, venueId: 'wolff-stadium', seasons: [2022, 2023, 2024, 2025, 2026] },
  { teamId: 'utsa-football', metroId: 'san-antonio', path: 'football/college-football', espnId: '2636', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utsa-mbb', metroId: 'san-antonio', path: 'basketball/mens-college-basketball', espnId: '2636', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'utsa-wbb', metroId: 'san-antonio', path: 'basketball/womens-college-basketball', espnId: '2636', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'uiw-football', metroId: 'san-antonio', path: 'football/college-football', espnId: '2916', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'uiw-mbb', metroId: 'san-antonio', path: 'basketball/mens-college-basketball', espnId: '2916', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'uiw-wbb', metroId: 'san-antonio', path: 'basketball/womens-college-basketball', espnId: '2916', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'washington', metroId: 'washington-dc', path: 'football/nfl', espnId: '28', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'capitals', metroId: 'washington-dc', path: 'hockey/nhl', espnId: '23', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'wizards', metroId: 'washington-dc', path: 'basketball/nba', espnId: '27', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'mystics', metroId: 'washington-dc', path: 'basketball/wnba', espnId: '16', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'dc-united', metroId: 'washington-dc', path: 'soccer/usa.1', espnId: '193', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'spirit', metroId: 'washington-dc', path: 'soccer/usa.nwsl', espnId: '15365', seasons: [2022, 2023, 2024, 2025] },
  { teamId: 'capital-city-go-go', metroId: 'washington-dc', path: 'basketball/nba-development', espnId: '4', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'loudoun-united', metroId: 'washington-dc', path: 'soccer/usa.usl.1', espnId: '19410', seasons: [2023, 2024, 2025, 2026], seasontype: 0 },
  { teamId: 'maryland-football', metroId: 'washington-dc', path: 'football/college-football', espnId: '120', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'maryland-mbb', metroId: 'washington-dc', path: 'basketball/mens-college-basketball', espnId: '120', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'maryland-wbb', metroId: 'washington-dc', path: 'basketball/womens-college-basketball', espnId: '120', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gmu-mbb', metroId: 'washington-dc', path: 'basketball/mens-college-basketball', espnId: '2244', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'gw-mbb', metroId: 'washington-dc', path: 'basketball/mens-college-basketball', espnId: '45', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'georgetown-mbb', metroId: 'washington-dc', path: 'basketball/mens-college-basketball', espnId: '46', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'howard-football', metroId: 'washington-dc', path: 'football/college-football', espnId: '47', seasons: [2022, 2023, 2024, 2025], seasontype: 2 },
  { teamId: 'oilers', metroId: 'edmonton', path: 'hockey/nhl', espnId: '6', seasons: [2023, 2024, 2025, 2026, 2027], seasontype: 2 },
  { teamId: 'elks', metroId: 'edmonton', path: 'football/cfl', espnId: '81', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  // Ottawa–Gatineau (docs/research/city-builds/ottawa-gatineau/). Ids checked Oct 13, 2026.
  { teamId: 'ottawa-senators', metroId: 'ottawa-gatineau', path: 'hockey/nhl', espnId: '14', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'ottawa-redblacks', metroId: 'ottawa-gatineau', path: 'football/cfl', espnId: '87', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utah-jazz', metroId: 'salt-lake-city', path: 'basketball/nba', espnId: '26', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utah-mammoth', metroId: 'salt-lake-city', path: 'hockey/nhl', espnId: '129764', seasons: [2025, 2026], seasontype: 2 },
  { teamId: 'real-salt-lake', metroId: 'salt-lake-city', path: 'soccer/usa.1', espnId: '4771', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utah-royals', metroId: 'salt-lake-city', path: 'soccer/usa.nwsl', espnId: '19141', seasons: [2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utah-utes-football', metroId: 'salt-lake-city', path: 'football/college-football', espnId: '254', seasons: [2022, 2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utah-mbb', metroId: 'salt-lake-city', path: 'basketball/mens-college-basketball', espnId: '254', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'utah-wbb', metroId: 'salt-lake-city', path: 'basketball/womens-college-basketball', espnId: '254', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
  { teamId: 'salt-lake-city-stars', metroId: 'salt-lake-city', path: 'basketball/nba-development', espnId: '19', seasons: [2023, 2024, 2025, 2026], seasontype: 2 },
];

/** ESPN gives venue names. Only home games in buildings the app knows are kept. */
const VENUE_BY_NAME = {
  'ohio stadium': 'ohio-stadium',
  'nationwide arena': 'nationwide-arena',
  'schottenstein center': 'value-city-arena',
  'value city arena': 'value-city-arena',
  'scottsmiracle-gro field': 'scottsmiracle-gro-field',
  'lower.com field': 'scottsmiracle-gro-field',
  'lower com field': 'scottsmiracle-gro-field',
  'historic crew stadium': 'historic-crew-stadium',
  'mapfre stadium': 'historic-crew-stadium',
  'huntington park': 'huntington-park',
  'lincoln financial field': 'lincoln-financial-field',
  'citizens bank park': 'citizens-bank-park',
  'xfinity mobile arena': 'xfinity-mobile-arena',
  'wells fargo center': 'xfinity-mobile-arena',
  'subaru park': 'subaru-park',
  'liacouras center': 'liacouras-center',
  'finneran pavilion': 'finneran-pavilion',
  'the palestra': 'the-palestra',
  'palestra': 'the-palestra',
  'villanova stadium': 'villanova-stadium',
  'bob carpenter center': 'bob-carpenter-center',
  'fiserv forum': 'fiserv-forum',
  'bmo harris bradley center': 'bradley-center',
  'bradley center': 'bradley-center',
  'uw-milwaukee panther arena': 'uwm-panther-arena',
  'uw milwaukee panther arena': 'uwm-panther-arena',
  'uwm panther arena': 'uwm-panther-arena',
  'klotsche center': 'klotsche-center',
  'al mcguire center': 'al-mcguire-center',

  'fenway park': 'fenway-park',
  'td garden': 'td-garden',
  'gillette stadium': 'gillette-stadium',
  'alumni stadium (chestnut hill, ma)': 'alumni-stadium',
  'alumni stadium': 'alumni-stadium',
  'harvard stadium': 'harvard-stadium',
  'agganis arena': 'agganis-arena',
  'tsongas center': 'tsongas-center',
  'silvio o. conte forum': 'conte-forum',
  'conte forum': 'conte-forum',
  'nickerson field': 'nickerson-field',

  'crypto.com arena': 'crypto-com-arena',
  'intuit dome': 'intuit-dome',
  'sofi stadium': 'sofi-stadium',
  'dignity health sports park': 'dignity-health-sports-park',
  'los angeles memorial coliseum': 'coliseum',
  'rose bowl': 'rose-bowl',
  'bmo stadium': 'bmo-stadium',
  'honda center': 'honda-center',
  'pauley pavilion': 'pauley-pavilion',
  'galen center': 'galen-center',
  'snapdragon stadium': 'snapdragon-stadium',
  'viejas arena': 'viejas-arena',
  'petco park': 'petco-park',
  'lumen field': 'lumen-field',
  'climate pledge arena': 'climate-pledge-arena',
  'husky stadium': 'husky-stadium',
  'alaska airlines arena': 'alaska-airlines-arena',
  'alaska airlines arena at hec edmundson pavilion': 'alaska-airlines-arena',
  'hec edmundson pavilion': 'alaska-airlines-arena',
  't-mobile park': 't-mobile-park',
  // New York. Keep in step with VENUE_BY_NAME in src/data/sources/espnSource.ts:
  // until Oct 7, 2026 these were missing here, and 16 of 18 New York teams saved no games.
  'madison square garden': 'madison-square-garden',
  'barclays center': 'barclays-center',
  'ubs arena': 'ubs-arena',
  'metlife stadium': 'metlife-stadium',
  'yankee stadium': 'yankee-stadium',
  'citi field': 'citi-field',
  'sports illustrated stadium': 'sports-illustrated-stadium',
  'red bull arena': 'sports-illustrated-stadium',
  'prudential center': 'prudential-center',
  'lawrence a. wien stadium': 'wien-stadium',
  'kenneth p. lavalle stadium': 'lavalle-stadium',
  'moglia stadium at jack coffey field': 'coffey-field',
  'carnesecca arena': 'carnesecca-arena',
  'icahn stadium': 'icahn-stadium',
  // Atlanta (docs/research/city-builds/atlanta/atlanta-venue-table-answer.md), as ESPN writes them on each team's own schedule.
  'mercedes-benz stadium': 'mercedes-benz-stadium',
  'state farm arena': 'state-farm-arena',
  'gateway center': 'gateway-center-arena',
  'center parc stadium': 'center-parc-stadium',
  'bobby dodd stadium': 'bobby-dodd-stadium',
  'bobby dodd stadium at hyundai field': 'bobby-dodd-stadium',
  'walens family field at fifth third stadium': 'fifth-third-stadium',
  'fifth third stadium': 'fifth-third-stadium',
  'gsu convocation center': 'gsu-convocation-center',
  'mccamish pavilion': 'mccamish-pavilion',
  'vystar arena': 'ksu-convocation-center',
  'ksu convocation center': 'ksu-convocation-center',
  // Bay Area (docs/research/city-builds/bay-area/bay-area-venue-table-answer.md), as ESPN writes them on each team's own schedule.
  'chase center': 'chase-center',
  "levi's stadium": 'levis-stadium',
  'sap center at san jose': 'sap-center',
  'sap center': 'sap-center',
  'paypal park': 'paypal-park',
  'stanford stadium': 'stanford-stadium',
  'oakland coliseum': 'oakland-coliseum',
  'oakland-alameda county coliseum': 'oakland-coliseum',
  'california memorial stadium': 'california-memorial-stadium',
  'cefcu stadium': 'cefcu-stadium',
  'haas pavilion': 'haas-pavilion',
  'maples pavilion': 'maples-pavilion',
  'provident credit union event center': 'provident-event-center',
  'oracle park': 'oracle-park',
  // Chicago (docs/research/city-builds/chicago/chicago-venue-table-answer.md), as ESPN writes them on each team's own schedule.
  'united center': 'united-center',
  'wintrust arena': 'wintrust-arena',
  'soldier field': 'soldier-field',
  'northwestern medicine field at martin stadium': 'martin-stadium',
  'martin stadium': 'martin-stadium',
  'ryan field': 'ryan-field',
  'welsh-ryan arena': 'welsh-ryan-arena',
  'credit union 1 arena': 'credit-union-1-arena',
  'jones convocation center': 'jones-convocation-center',
  'wrigley field': 'wrigley-field',
  'rate field': 'rate-field',
  'seatgeek stadium': 'seatgeek-stadium',
  'toyota park': 'seatgeek-stadium',
  // Dallas–Fort Worth (docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-venue-table-answer.md), as ESPN writes them.
  'at&t stadium': 'att-stadium',
  'american airlines center': 'american-airlines-center',
  'college park center': 'college-park-center',
  'toyota stadium': 'toyota-stadium',
  'gerald j. ford stadium': 'gerald-j-ford-stadium',
  'amon g. carter stadium': 'amon-g-carter-stadium',
  'datcu stadium': 'datcu-stadium',
  'apogee stadium': 'datcu-stadium',
  'moody coliseum (dallas)': 'moody-coliseum',
  'moody coliseum': 'moody-coliseum',
  'schollmaier arena': 'schollmaier-arena',
  'dickies arena': 'dickies-arena',
  'the super pit': 'unt-coliseum',
  'unt coliseum': 'unt-coliseum',
  'cotton bowl': 'cotton-bowl',
  'globe life field': 'globe-life-field',
  // Montreal, as ESPN writes them.
  'bell centre': 'bell-centre',
  'centre bell': 'bell-centre',
  'stade saputo': 'stade-saputo',
  'saputo stadium': 'stade-saputo',
  'percival molson memorial stadium': 'percival-molson-stadium',
  'molson stadium': 'percival-molson-stadium',
  'bc place': 'bc-place',
  'bc place vancouver': 'bc-place',
  'rogers arena': 'rogers-arena',
  'pacific coliseum': 'pacific-coliseum',
  'swangard stadium': 'swangard-stadium',
  'rogers field at nat bailey stadium': 'nat-bailey-stadium',
  'nat bailey stadium': 'nat-bailey-stadium',
  'scotiabank arena': 'scotiabank-arena',
  'aréna scotiabank': 'scotiabank-arena',
  'coca-cola coliseum': 'coca-cola-coliseum',
  'ricoh coliseum': 'coca-cola-coliseum',
  'bmo field': 'bmo-field',
  'toronto stadium': 'bmo-field',
  'paramount fine foods centre': 'mississauga-sports-centre',
  'mississauga sports and entertainment centre': 'mississauga-sports-centre',
  'hershey centre': 'mississauga-sports-centre',
  'rogers centre': 'rogers-centre',
  'now arena': 'now-arena',
  'comerica center': 'comerica-center',
  // Nashville, as ESPN writes them (checked Oct 12, 2026).
  'nissan stadium': 'nissan-stadium',
  'bridgestone arena': 'bridgestone-arena',
  'geodis park': 'geodis-park',
  'firstbank stadium': 'firstbank-stadium',
  'vanderbilt stadium': 'firstbank-stadium',
  'memorial gymnasium (tn)': 'vanderbilt-memorial-gymnasium',
  'johnny "red" floyd stadium': 'floyd-stadium',
  'murphy center': 'murphy-center',
  'gentry center': 'gentry-center',
  'curb event center arena': 'curb-event-center',
  'curb event center': 'curb-event-center',
  'allen arena': 'allen-arena',
  // Austin, as ESPN writes them on each team's own schedule (Oct 12, 2026).
  'dkr-texas memorial stadium': 'dkr-texas-memorial-stadium',
  'darrell k royal-texas memorial stadium': 'dkr-texas-memorial-stadium',
  'darrell k royal texas memorial stadium': 'dkr-texas-memorial-stadium',
  'ufcu stadium': 'ufcu-stadium',
  'bobcat stadium': 'ufcu-stadium',
  'moody center': 'moody-center',
  'q2 stadium': 'q2-stadium',
  'strahan arena at the university events center': 'strahan-arena',
  'strahan arena': 'strahan-arena',
  // Phoenix, as ESPN writes them (Oct 12, 2026).
  'state farm stadium': 'state-farm-stadium',
  'mortgage matchup center': 'mortgage-matchup-center',
  'footprint center': 'mortgage-matchup-center',
  'phoenix suns arena': 'mortgage-matchup-center',
  'talking stick resort arena': 'mortgage-matchup-center',
  'phx arena': 'mortgage-matchup-center',
  'mountain america stadium': 'mountain-america-stadium',
  'sun devil stadium': 'mountain-america-stadium',
  'desert financial arena': 'desert-financial-arena',
  'wells fargo arena': 'desert-financial-arena',
  'mullett arena': 'mullett-arena',
  'global credit union arena': 'global-credit-union-arena',
  'gcu arena': 'global-credit-union-arena',
  'desert diamond arena': 'desert-diamond-arena',
  'gila river arena': 'desert-diamond-arena',
  'phoenix rising stadium at 38th st/washington': 'phoenix-rising-soccer-stadium',
  'phoenix rising soccer stadium': 'phoenix-rising-soccer-stadium',
  // Mexico City, as ESPN writes them. Puebla and unmapped Coapa/Centenario rooms are skipped.
  'estadio banorte': 'estadio-banorte',
  'estadio azteca': 'estadio-banorte',
  'estadio ciudad de méxico': 'estadio-banorte',
  'estadio ciudad de mexico': 'estadio-banorte',
  'estadio olímpico universitario': 'estadio-olimpico-universitario',
  'estadio olimpico universitario': 'estadio-olimpico-universitario',
  'estadio ciudad de los deportes': 'estadio-ciudad-de-los-deportes',
  'estadio azul': 'estadio-ciudad-de-los-deportes',
  'mexico city arena': 'arena-cdmx',
  'arena cdmx': 'arena-cdmx',
  'arena ciudad de méxico': 'arena-cdmx',
  'arena ciudad de mexico': 'arena-cdmx',
  // Las Vegas, as ESPN writes them. Keep in step with src/data/sources/espnSource.ts.
  'allegiant stadium': 'allegiant-stadium',
  't-mobile arena': 't-mobile-arena',
  'michelob ultra arena': 'michelob-ultra-arena',
  'mgm grand garden arena': 'mgm-grand-garden',
  'thomas & mack center': 'thomas-mack-center',
  'thomas and mack center': 'thomas-mack-center',
  "lee's family forum": 'lees-family-forum',
  'cashman field': 'cashman-field',
  'arrowhead stadium': 'arrowhead-stadium',
  'geha field at arrowhead stadium': 'arrowhead-stadium',
  'kansas city stadium': 'arrowhead-stadium',
  'kauffman stadium': 'kauffman-stadium',
  "children's mercy park": 'sporting-park',
  'sporting park': 'sporting-park',
  'cpkc stadium': 'cpkc-stadium',
  // Houston, as ESPN writes them (checked Oct 12, 2026). Keep in step with espnSource.ts.
  'reliant stadium': 'reliant-stadium',
  'nrg stadium': 'reliant-stadium',
  'houston stadium': 'reliant-stadium',
  'toyota center (houston)': 'toyota-center',
  'shell energy stadium': 'shell-energy-stadium',
  'bbva stadium': 'shell-energy-stadium',
  'bbva compass stadium': 'shell-energy-stadium',
  'tdecu stadium': 'tdecu-stadium',
  'fertitta center': 'fertitta-center',
  'hofheinz pavilion': 'fertitta-center',
  'first community stadium': 'first-community-stadium',
  'tudor fieldhouse': 'tudor-fieldhouse',
  'minute maid park': 'daikin-park',
  'daikin park': 'daikin-park',
  'u.s. bank stadium': 'us-bank-stadium',
  'huntington bank stadium': 'huntington-bank-stadium',
  'tcf bank stadium': 'huntington-bank-stadium',
  'target center': 'target-center',
  'grand casino arena': 'grand-casino-arena',
  'xcel energy center': 'grand-casino-arena',
  'allianz field': 'allianz-field',
  'the barn by blue cross and blue shield of minnesota': 'williams-arena',
  'williams arena': 'williams-arena',
  '3m arena at mariucci': 'mariucci-arena',
  'mariucci arena': 'mariucci-arena',
  'lee & penny anderson arena': 'anderson-arena',
  // New Orleans, as ESPN writes them Keep in step with espnSource.ts.
  'caesars superdome': 'caesars-superdome',
  'mercedes-benz superdome': 'caesars-superdome',
  'smoothie king center': 'smoothie-king-center',
  'rogers place': 'rogers-place',
  'commonwealth stadium': 'commonwealth-stadium',
  'clarke stadium': 'clarke-stadium',
  'new orleans arena': 'smoothie-king-center',
  'yulman stadium': 'yulman-stadium',
  'benson field at yulman stadium': 'yulman-stadium',
  'avron b. fogelman arena in the devlin fieldhouse': 'devlin-fieldhouse',
  'fogelman arena in devlin fieldhouse': 'devlin-fieldhouse',
  'devlin fieldhouse': 'devlin-fieldhouse',
  'lakefront arena': 'lakefront-arena',
  'uno lakefront arena': 'lakefront-arena',
  'green field at turchin stadium': 'turchin-stadium',
  'greer field at turchin stadium': 'turchin-stadium',
  'turchin stadium': 'turchin-stadium',
  'maestri field': 'maestri-field',
  'maestri field at privateer park': 'maestri-field',
  // Washington, DC — keep in step with espnSource.ts (Oct 13, 2026).
  'northwest stadium': 'northwest-stadium',
  'fedexfield': 'northwest-stadium',
  'nationals park': 'nationals-park',
  'capital one arena': 'capital-one-arena',
  'verizon center': 'capital-one-arena',
  'audi field': 'audi-field',
  'xfinity center': 'umd-xfinity-center',
  'comcast center': 'umd-xfinity-center',
  'secu stadium': 'secu-stadium',
  'maryland stadium': 'secu-stadium',
  'eaglebank arena': 'eaglebank-arena',
  'patriot center': 'eaglebank-arena',
  "prince george's stadium": 'prince-georges-stadium',
  'william h. greene stadium': 'greene-stadium',
  'carefirst arena': 'carefirst-arena',
  'entertainment and sports arena': 'carefirst-arena',
  'charles e. smith center': 'charles-e-smith-center',
  'segra field': 'segra-field',
  'pontchartrain center': 'pontchartrain-center',
  'lee and penny anderson arena': 'anderson-arena',
  // San Antonio, as ESPN writes them (checked Oct 13, 2026). Keep in step with espnSource.ts.
  alamodome: 'alamodome',
  'frost bank center': 'frost-bank-center',
  'at&t center': 'frost-bank-center',
  'sbc center': 'frost-bank-center',
  'toyota field': 'toyota-field',
  'nelson w. wolff municipal stadium': 'wolff-stadium',
  'nelson wolff stadium': 'wolff-stadium',
  'wolff stadium': 'wolff-stadium',
  'gayle and tom benson stadium': 'benson-stadium',
  'benson stadium': 'benson-stadium',
  'utsa convocation center': 'utsa-convocation-center',
  'convocation center (university of texas at san antonio)': 'utsa-convocation-center',
  'alice p. mcdermott convocation center': 'mcdermott-convocation-center',
  'mcdermott convocation center': 'mcdermott-convocation-center',
  // Cleveland, as ESPN writes them (Oct 13, 2026). Keep in step with espnSource.ts.
  'huntington bank field': 'huntington-bank-field',
  'firstenergy stadium': 'huntington-bank-field',
  'cleveland browns stadium': 'huntington-bank-field',
  'progressive field': 'progressive-field',
  'rocket arena': 'rocket-arena',
  'rocket mortgage fieldhouse': 'rocket-arena',
  'quicken loans arena': 'rocket-arena',
  'wolstein center': 'wolstein-center',
  // Miami (docs/research/city-builds/miami/), as ESPN writes them (checked Oct 13, 2026).
  'hard rock stadium': 'hard-rock-stadium',
  'loandepot park': 'loandepot-park',
  'kaseya center': 'kaseya-center',
  'amerant bank arena': 'amerant-bank-arena',
  'bb&t center': 'amerant-bank-arena',
  'fla live arena': 'amerant-bank-arena',
  'chase stadium': 'inter-miami-cf-stadium',
  'drv pnk stadium': 'inter-miami-cf-stadium',
  'inter miami cf stadium': 'inter-miami-cf-stadium',
  'nu stadium': 'nu-stadium',
  'pitbull stadium': 'pitbull-stadium',
  'riccardo silva stadium': 'pitbull-stadium',
  'watsco center': 'watsco-center',
  'beyond bancard field': 'beyond-bancard-field',
  'ocean bank convocation center': 'ocean-bank-convocation-center',
  'canadian tire centre': 'canadian-tire-centre',
  'centre canadian tire': 'canadian-tire-centre',
  'td place stadium': 'td-place-stadium',
  'stade place td': 'td-place-stadium',
  'the arena at td place': 'arena-at-td-place',
  'td place arena': 'arena-at-td-place',
  'td place': 'arena-at-td-place',
  // Salt Lake City, as ESPN writes them (Oct 13, 2026).
  'delta center': 'delta-center',
  'vivint arena': 'delta-center',
  'rice-eccles stadium': 'rice-eccles-stadium',
  'america first field': 'america-first-field',
  'rio tinto stadium': 'america-first-field',
  'jon m. huntsman center': 'jon-m-huntsman-center',
  'maverik center': 'maverik-center',
};

const METRO_VENUE_BY_NAME = {
  philadelphia: { 'franklin field': 'penn-franklin-field' },
  milwaukee: { 'franklin field': 'franklin-field', 'routine field': 'franklin-field' },
  nashville: { 'memorial gymnasium': 'vanderbilt-memorial-gymnasium' },
  boston: { 'xfinity center': 'xfinity-center' },
  'washington-dc': { 'xfinity center': 'umd-xfinity-center' },
  sacramento: {
    'golden 1 center': 'golden-1-center',
    'hornet stadium': 'hornet-stadium',
    'hornet pavilion': 'hornet-pavilion',
    'the nest': 'sac-state-nest',
    'heart health park': 'heart-health-park',
    'uc davis health stadium': 'uc-davis-health-stadium',
    'aggie stadium': 'uc-davis-health-stadium',
    'university credit union center': 'university-credit-union-center',
    'the pavilion': 'university-credit-union-center',
    'pavilion at arc': 'university-credit-union-center',
  },
  houston: { 'panther stadium': 'pvamu-panther-stadium', 'toyota center': 'toyota-center', 'rice stadium': 'first-community-stadium' },
  'san-antonio': { 'benson stadium': 'benson-stadium' },
  miami: { 'americanairlines arena': 'kaseya-center', 'ftx arena': 'kaseya-center', 'miami-dade arena': 'kaseya-center' },
};

function venueIdForEspnName(name, metroId) {
  const key = (name ?? '').toLowerCase();
  return METRO_VENUE_BY_NAME[metroId]?.[key] ?? VENUE_BY_NAME[key];
}

function localParts(iso, metroId) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: ZONE_BY_METRO[metroId ?? DEFAULT_METRO], year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${r.status} for ${url}`);
  return r.json();
}

async function mapLimit(items, limit, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (i < items.length) {
        const at = i++;
        out[at] = await fn(items[at]);
      }
    }),
  );
  return out;
}

async function collectMlb(team) {
  const rows = [];
  for (const season of team.seasons) {
    const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=${team.sportId ?? 1}&teamId=${team.mlbId}&season=${season}&gameType=R,F,D,L,W&hydrate=team,game(promotions)`;
    const json = await getJson(url);
    // The record going in: the team's record after its previous regular-season game, home or away.
    const regular = json.dates
      .flatMap((d) => d.games)
      .filter((g) => g.gameType === 'R' && g.status?.abstractGameState === 'Final')
      .sort((a, b) => a.gameDate.localeCompare(b.gameDate) || (a.gameNumber ?? 1) - (b.gameNumber ?? 1));
    const recordBefore = new Map();
    let prev = { wins: 0, losses: 0 };
    for (const g of regular) {
      recordBefore.set(g.gamePk, prev);
      const side = g.teams.home.team.id === team.mlbId ? g.teams.home : g.teams.away;
      if (side.leagueRecord) prev = { wins: side.leagueRecord.wins, losses: side.leagueRecord.losses };
    }
    const games = json.dates
      .flatMap((d) => d.games)
      .filter((g) => g.teams.home.team.id === team.mlbId && g.status?.abstractGameState === 'Final');
    const found = await mapLimit(games, 6, async (g) => {
      try {
        const box = await getJson(`https://statsapi.mlb.com/api/v1/game/${g.gamePk}/boxscore`);
        const att = Number((box.info?.find((row) => row.label === 'Att')?.value ?? '').replace(/[^0-9]/g, ''));
        if (!Number.isFinite(att) || att <= 0) return null;
        if (team.mlbVenueId && g.venue?.id && g.venue.id !== team.mlbVenueId) return null;
        const { date, time } = localParts(g.gameDate, team.metroId);
        const venueId = team.venueByMlbId ? team.venueByMlbId[g.venue?.id] : team.venueId;
        if (!venueId) return null;
        return {
          teamId: team.teamId,
          season,
          date,
          start: g.status?.startTimeTBD ? null : time,
          opponent: g.teams.away.team.teamName ?? g.teams.away.team.name,
          venueId,
          attendance: att,
          kind: 'announced',
          postseason: g.gameType !== 'R' || undefined,
          ...(g.gameType !== 'R' ? { round: g.seriesDescription ?? g.description ?? g.gameType, ...(g.seriesGameNumber ? { game: g.seriesGameNumber } : {}) } : {}),
          recordBefore: recordBefore.get(g.gamePk),
          // MLB's own list for the game: giveaways, ticket offers, fireworks and other highlights.
          promotions: (g.promotions ?? []).map((p) => ({ type: p.offerType, name: p.name })),
          sourceId: 'mlb',
        };
      } catch {
        return null;
      }
    });
    rows.push(...found.filter(Boolean));
    console.log(`  ${team.teamId} ${season}: ${found.filter(Boolean).length} of ${games.length} home games with a count`);
  }
  return rows;
}

/**
 * HockeyTech clubs (AHL, PWHL, WHL): the feed's own schedule rows carry the announced crowd and the
 * final score, season by season (src/data/sources/hockeytechSource.ts has the keys and team ids).
 */
const HOCKEYTECH_TEAMS = [
  { teamId: 'marlies', metroId: 'toronto', client: 'ahl', htId: '335', venueId: 'coca-cola-coliseum' },
  { teamId: 'sceptres', metroId: 'toronto', client: 'pwhl', htId: '6', venueId: 'coca-cola-coliseum' },
  { teamId: 'ottawa-charge', metroId: 'ottawa-gatineau', client: 'pwhl', htId: '5', venueId: 'canadian-tire-centre' },
  { teamId: 'boston-fleet', metroId: 'boston', client: 'pwhl', htId: '1', venueId: 'agganis-arena' },
  { teamId: 'minnesota-frost', metroId: 'minneapolis', client: 'pwhl', htId: '2', venueId: 'grand-casino-arena' },
  { teamId: 'milwaukee-admirals', metroId: 'milwaukee', client: 'ahl', htId: '327', venueId: 'uwm-panther-arena' },
  { teamId: 'chicago-wolves', metroId: 'chicago', client: 'ahl', htId: '330', venueId: 'allstate-arena' },
  { teamId: 'laval-rocket', metroId: 'montreal', client: 'ahl', htId: '415', venueId: 'place-bell' },
  { teamId: 'san-jose-barracuda', metroId: 'bay-area', client: 'ahl', htId: '405', venueId: 'sap-center' },
  { teamId: 'san-diego-gulls', metroId: 'san-diego', client: 'ahl', htId: '404', venueId: 'pechanga-arena' },
  { teamId: 'victoire', metroId: 'montreal', client: 'pwhl', htId: '3', venueId: 'place-bell' },
  { teamId: 'seattle-torrent', metroId: 'seattle', client: 'pwhl', htId: '8', venueId: 'climate-pledge-arena' },
  { teamId: 'ny-sirens', metroId: 'new-york', client: 'pwhl', htId: '4', venueId: 'prudential-center' },
  { teamId: 'pwhl-san-jose', metroId: 'bay-area', client: 'pwhl', htId: '13', venueId: 'sap-center' },
  { teamId: 'seattle-thunderbirds', metroId: 'seattle', client: 'whl', htId: '214', venueId: 'accesso-showare-center' },
  { teamId: 'everett-silvertips', metroId: 'seattle', client: 'whl', htId: '226', venueId: 'angel-of-the-winds-arena' },
  { teamId: 'texas-stars', metroId: 'austin', client: 'ahl', htId: '380', venueId: 'heb-center-cedar-park' },
  { teamId: 'vancouver-goldeneyes', metroId: 'vancouver', client: 'pwhl', htId: '9', venueId: 'pacific-coliseum' },
  { teamId: 'vancouver-giants', metroId: 'vancouver', client: 'whl', htId: '223', venueId: 'langley-events-centre' },
  { teamId: 'oil-kings', metroId: 'edmonton', client: 'whl', htId: '228', venueId: 'rogers-place' },
  { teamId: 'henderson-silver-knights', metroId: 'las-vegas', client: 'ahl', htId: '437', venueId: 'lees-family-forum' },
  { teamId: 'pwhl-las-vegas', metroId: 'las-vegas', client: 'pwhl', htId: '12', venueId: 't-mobile-arena', skipUnknownVenue: true },
  { teamId: 'cleveland-monsters', metroId: 'cleveland', client: 'ahl', htId: '373', venueId: 'rocket-arena' },
];
const HT_VENUES = { 'uw-milwaukee panther arena': 'uwm-panther-arena', 'bmo harris bradley center': 'bradley-center', 'bell centre': 'bell-centre', 'centre bell': 'bell-centre', 'place bell': 'place-bell', 'sap center': 'sap-center', 'climate pledge arena': 'climate-pledge-arena', 'prudential center': 'prudential-center', 'allstate arena': 'allstate-arena', 'pechanga arena': 'pechanga-arena', 'pechanga arena san diego': 'pechanga-arena', 'accesso showare center': 'accesso-showare-center', 'angel of the winds arena': 'angel-of-the-winds-arena', 'agganis arena': 'agganis-arena', 'tsongas center': 'tsongas-center', 'td garden': 'td-garden', 'h-e-b center at cedar park': 'heb-center-cedar-park', 'cedar park center': 'heb-center-cedar-park', 'pacific coliseum': 'pacific-coliseum', 'rogers arena': 'rogers-arena', 'rogers place': 'rogers-place', 'rogers place - edmonton, ab': 'rogers-place', 'langley events centre': 'langley-events-centre', 'langley events centre - langley, bc': 'langley-events-centre', 't-mobile arena': 't-mobile-arena', 'lee\u2019s family forum': 'lees-family-forum', 'orleans arena': 'orleans-arena', 'coca-cola coliseum': 'coca-cola-coliseum', 'ricoh coliseum': 'coca-cola-coliseum', 'scotiabank arena': 'scotiabank-arena', 'aréna scotiabank': 'scotiabank-arena', 'grand casino arena': 'grand-casino-arena', 'xcel energy center': 'grand-casino-arena', 'canadian tire centre': 'canadian-tire-centre', 'centre canadian tire': 'canadian-tire-centre', 'td place': 'arena-at-td-place', 'the arena at td place': 'arena-at-td-place', 'rocket arena': 'rocket-arena', 'rocket mortgage fieldhouse': 'rocket-arena', 'quicken loans arena': 'rocket-arena' };

const HT_KEYS = { ahl: 'ccb91f29d6744675', pwhl: '446521baf8c38984', whl: '41b145a848f4bd67' };
const htUrl = (client, params) => `https://lscluster.hockeytech.com/feed/?${new URLSearchParams({ feed: 'modulekit', key: HT_KEYS[client], client_code: client, fmt: 'json', lang: 'en', ...params })}`;
async function seasonIdsOf(client, kind) {
  const j = await getJson(htUrl(client, { view: 'seasons' }));
  return j.SiteKit.Seasons.filter((s) => (kind === 'regular' ? /regular/i.test(s.season_name) : /playoff|cup/i.test(s.season_name)));
}
async function scheduleFor(client, seasonId, htId) {
  const j = await getJson(htUrl(client, { view: 'schedule', season_id: seasonId, team_id: htId }));
  return j.SiteKit.Schedule ?? [];
}

async function collectHockeytech(team) {
  const rows = [];
  const kinds = [['regular', false], ['playoffs', true]];
  for (const [kind, postseason] of kinds) {
    const seasons = (await seasonIdsOf(team.client, kind)).slice(0, 4);
    for (const s of seasons) {
      const games = await scheduleFor(team.client, s.season_id, team.htId);
      const year = Number((s.season_name.match(/20\d\d/g) ?? []).at(-1));
      let kept = 0;
      for (const g of games) {
        if (g.home_team !== team.htId || g.final !== '1') continue;
        const att = Number(g.attendance);
        if (!Number.isFinite(att) || att <= 0) continue;
        const name = (g.venue_name ?? '').split('|')[0].trim().toLowerCase();
        const token = team.venueId.split('-')[0];
        const venueId = !name || name === 'tbd' ? (team.skipUnknownVenue ? null : team.venueId) : HT_VENUES[name] ?? (token.length > 1 && name.startsWith(token) ? team.venueId : null);
        if (!venueId) continue;
        const { date, time } = localParts(g.GameDateISO8601, team.metroId);
        rows.push({ teamId: team.teamId, season: year, date, start: g.time_tbd === '1' ? null : time, opponent: g.visiting_team_nickname ?? g.visiting_team_name ?? '', venueId, attendance: att, kind: 'announced', ...(postseason ? { postseason: true, round: s.season_name } : {}), sourceId: 'hockeytech' });
        kept++;
      }
      console.log(`  ${team.teamId} ${s.season_name}: ${kept} home games with a count`);
    }
  }
  return rows;
}

/** Pro leagues with a preseason played in the home building; it gets its own bucket. */
const HAS_PRESEASON = /^(basketball\/nba|basketball\/wnba|hockey\/nhl|football\/nfl)$/;

/**
 * The season in play, by ESPN's numbering (C010): the calendar year for soccer and football,
 * the year the season ends for basketball and hockey (2026-27 is 2027 once October comes).
 */
function seasonInPlay(path) {
  const now = new Date();
  const winter = /basketball|hockey/.test(path);
  return now.getUTCFullYear() + (winter && now.getUTCMonth() >= 9 ? 1 : 0);
}

async function collectEspn(team) {
  const rows = [];
  const seasons = [...team.seasons];
  const current = seasonInPlay(team.path);
  if (!seasons.includes(current)) seasons.push(current);
  for (const season of seasons) {
    const q = team.seasontype ? `?season=${season}&seasontype=${team.seasontype}` : `?season=${season}`;
    const json = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${team.path}/teams/${team.espnId}/schedule${q}`);
    const events = (json.events ?? []).map((e) => ({ e, preseason: false, postseason: false }));
    if (team.seasontype) {
      // Playoff games (docs/archive/proposals/postseason-estimate-proposal.md, Kylie's OK Oct 7): the same feed, season type 3.
      try {
        const post = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${team.path}/teams/${team.espnId}/schedule?season=${season}&seasontype=3`);
        events.push(...(post.events ?? []).map((e) => ({ e, preseason: false, postseason: true })));
      } catch {
        /* no postseason listed that year */
      }
    }
    if (team.seasontype && HAS_PRESEASON.test(team.path)) {
      try {
        const pre = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${team.path}/teams/${team.espnId}/schedule?season=${season}&seasontype=1`);
        events.push(...(pre.events ?? []).map((e) => ({ e, preseason: true, postseason: false })));
      } catch {
        /* no preseason listed that year */
      }
    }
    let kept = 0;
    for (const { e, preseason, postseason: fromPost } of events) {
      const c = e.competitions?.[0];
      // Soccer lists its playoffs in the one schedule, under their own season-type names.
      const typeName = e.seasonType?.name ?? '';
      // Liga MX's regular tournaments are "Torneo Apertura" and "Torneo Clausura", not "Regular Season".
      // Playoff names ("Clausura - Quarterfinals", "Apertura 2024 - Finals") stay postseason.
      const postseason = fromPost || (!team.seasontype && typeName && !/regular season|preseason|torneo apertura|torneo clausura/i.test(typeName) && !/^\d+$/.test(typeName));
      const headline = (c?.notes ?? []).find((n) => n.headline)?.headline?.trim() ?? '';
      const roundName = postseason ? (team.seasontype ? headline || typeName || 'Postseason' : [typeName, headline].filter(Boolean).join(' - ') || 'Postseason').replace(/\s+if necessary$/i, '') : undefined;
      const gameNo = postseason ? Number((headline.match(/\bGame\s+(\d+)\b/i) ?? [])[1]) || c?.gameNumberOfSeries || undefined : undefined;
      // Soccer says STATUS_FULL_TIME; everything else says STATUS_FINAL.
      if (!c || !/^STATUS_(FINAL|FULL_TIME)/.test(c.status?.type?.name ?? '')) continue;
      const home = c.competitors.find((x) => x.homeAway === 'home');
      const away = c.competitors.find((x) => x.homeAway === 'away');
      if (!home || home.team.id !== team.espnId) continue;
      const venueId = venueIdForEspnName(c.venue?.fullName ?? '', team.metroId);
      if (!venueId) continue;
      const att = Number(c.attendance);
      if (!Number.isFinite(att) || att <= 0) continue;
      const timeSet = e.timeValid !== false && c.timeValid !== false;
      const { date, time } = timeSet ? localParts(e.date, team.metroId) : { date: localParts(e.date, 'new-york').date, time: null };
      rows.push({
        teamId: team.teamId,
        season,
        date,
        start: time,
        opponent: away?.team.shortDisplayName ?? away?.team.displayName ?? '',
        venueId,
        attendance: att,
        kind: 'announced',
        preseason: preseason || undefined,
        ...(postseason ? { postseason: true, round: roundName, ...(gameNo ? { game: gameNo } : {}) } : {}),
        sourceId: 'espn',
      });
      kept++;
    }
    console.log(`  ${team.teamId} ${season}: ${kept} home games with a count`);
  }
  return rows;
}

const only = process.argv[2];
let failures = 0;
for (const team of [...MLB_TEAMS, ...ESPN_TEAMS, ...HOCKEYTECH_TEAMS]) {
  if (only && team.teamId !== only) continue;
  // Each team's file lives in its city's folder (docs/reference/new-city-checklist.md).
  const METRO = team.metroId ?? DEFAULT_METRO;
  const dir = path.join(root, 'data', 'attendance', METRO);
  await mkdir(dir, { recursive: true });
  try {
    const rows = 'mlbId' in team ? await collectMlb(team) : 'htId' in team ? await collectHockeytech(team) : await collectEspn(team);
    rows.sort((a, b) => a.date.localeCompare(b.date) || (a.start ?? '').localeCompare(b.start ?? ''));
    const file = path.join(dir, `${team.teamId}.json`);
    let previous = null;
    try {
      previous = JSON.parse(await readFile(file, 'utf8'));
    } catch {
      previous = null;
    }
    const next = { schema: 1, metroId: METRO, teamId: team.teamId, collectedOn: new Date().toISOString().slice(0, 10), games: rows };
    if (previous && JSON.stringify(previous.games) === JSON.stringify(rows)) {
      console.log(`${team.teamId}: no change (${rows.length} games).`);
    } else {
      await writeFile(file, `${JSON.stringify(next, null, 2)}\n`);
      console.log(`${team.teamId}: saved ${rows.length} games.`);
    }
  } catch (err) {
    failures++;
    console.error(`${team.teamId}: ${err instanceof Error ? err.message : err}`);
  }
}
process.exit(failures ? 1 : 0);
