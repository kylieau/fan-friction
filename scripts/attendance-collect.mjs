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
const ZONE_BY_METRO = { la: 'America/Los_Angeles', 'san-diego': 'America/Los_Angeles', seattle: 'America/Los_Angeles', 'new-york': 'America/New_York', atlanta: 'America/New_York', 'bay-area': 'America/Los_Angeles', chicago: 'America/Chicago', 'dallas-fort-worth': 'America/Chicago', montreal: 'America/Toronto' };
const UA = { 'User-Agent': 'Mozilla/5.0 (fan-friction attendance collector)' };

/** MLB seasons are calendar years. ESPN seasons are the year the season ends (2026 = 2025-26) for winter sports. */
const MLB_TEAMS = [
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
];
const ESPN_TEAMS = [
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
];

/** ESPN gives venue names. Only home games in buildings the app knows are kept. */
const VENUE_BY_NAME = {
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
  // Atlanta (docs/archive/research/atlanta-venue-table-answer.md), as ESPN writes them on each team's own schedule.
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
  // Bay Area (docs/archive/research/bay-area-venue-table-answer.md), as ESPN writes them on each team's own schedule.
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
  // Chicago (docs/archive/research/chicago-venue-table-answer.md), as ESPN writes them on each team's own schedule.
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
  // Dallas–Fort Worth (docs/archive/research/dallas-fort-worth-venue-table-answer.md), as ESPN writes them.
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
  'now arena': 'now-arena',
  'comerica center': 'comerica-center',
};

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
        const { date, time } = localParts(g.gameDate, team.metroId);
        return {
          teamId: team.teamId,
          season,
          date,
          start: g.status?.startTimeTBD ? null : time,
          opponent: g.teams.away.team.teamName ?? g.teams.away.team.name,
          venueId: team.venueId,
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
];
const HT_VENUES = { 'bell centre': 'bell-centre', 'centre bell': 'bell-centre', 'place bell': 'place-bell', 'sap center': 'sap-center', 'climate pledge arena': 'climate-pledge-arena', 'prudential center': 'prudential-center', 'allstate arena': 'allstate-arena', 'pechanga arena': 'pechanga-arena', 'pechanga arena san diego': 'pechanga-arena', 'accesso showare center': 'accesso-showare-center', 'angel of the winds arena': 'angel-of-the-winds-arena' };

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
        const venueId = !name || name === 'tbd' ? team.venueId : HT_VENUES[name] ?? (name.startsWith(team.venueId.split('-')[0]) ? team.venueId : null);
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
      const postseason = fromPost || (!team.seasontype && typeName && !/regular season|preseason/i.test(typeName) && !/^\d+$/.test(typeName));
      const headline = (c?.notes ?? []).find((n) => n.headline)?.headline?.trim() ?? '';
      const roundName = postseason ? (team.seasontype ? headline || typeName || 'Postseason' : [typeName, headline].filter(Boolean).join(' - ') || 'Postseason').replace(/\s+if necessary$/i, '') : undefined;
      const gameNo = postseason ? Number((headline.match(/\bGame\s+(\d+)\b/i) ?? [])[1]) || c?.gameNumberOfSeries || undefined : undefined;
      // Soccer says STATUS_FULL_TIME; everything else says STATUS_FINAL.
      if (!c || !/^STATUS_(FINAL|FULL_TIME)/.test(c.status?.type?.name ?? '')) continue;
      const home = c.competitors.find((x) => x.homeAway === 'home');
      const away = c.competitors.find((x) => x.homeAway === 'away');
      if (!home || home.team.id !== team.espnId) continue;
      const venueId = VENUE_BY_NAME[(c.venue?.fullName ?? '').toLowerCase()];
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
  // Each team's file lives in its city's folder (docs/new-city-checklist.md).
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
