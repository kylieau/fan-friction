// Upcoming home games for the teams based in a metro, from ESPN's public
// schedule feed (unofficial, free, no account). It could change without notice,
// which is why it's one swappable piece. Like the MLB source, it only serves
// today and later, and returns nothing if the feed is down.

import { METROS } from '../../config/metros';
import { metroForVenue } from './venueMetro';
import { TEAMS } from '../teams';
import type { CrowdEvent, GameResult, LocalDate, LocalTime, TeamGame } from '../types';
import { espnStakes, leagueFromPath, otherPostseason } from './roundLabel';
import type { EventSource } from './types';

const API = 'https://site.api.espn.com/apis/site/v2/sports';

/** A fetch that tries again after a dropped connection (not after an error answer): ESPN resets some under load. */
async function fetchRetry(url: string, tries = 3): Promise<Response> {
  for (let i = 1; ; i++) {
    try {
      return await fetch(url);
    } catch (err) {
      if (i >= tries) throw err;
      await new Promise((r) => setTimeout(r, 1000 * i));
    }
  }
}
const DAYS_AHEAD = 120;

/** ESPN's ids for each team, mapped to our records. Add a metro's teams here. */
const ESPN_TEAMS: { path: string; espnId: string; metroId: string; teamId: string; sport: string }[] = [
  // Philadelphia (docs/research/city-builds/philadelphia/); each id and home venue checked against the feed Oct 12, 2026.
  { path: 'football/nfl', espnId: '21', metroId: 'philadelphia', teamId: 'eagles', sport: 'football' },
  { path: 'basketball/nba', espnId: '20', metroId: 'philadelphia', teamId: 'sixers', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '15', metroId: 'philadelphia', teamId: 'flyers', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '10739', metroId: 'philadelphia', teamId: 'philadelphia-union', sport: 'soccer' },
  { path: 'football/college-football', espnId: '218', metroId: 'philadelphia', teamId: 'temple-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '218', metroId: 'philadelphia', teamId: 'temple-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '218', metroId: 'philadelphia', teamId: 'temple-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '222', metroId: 'philadelphia', teamId: 'villanova-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '222', metroId: 'philadelphia', teamId: 'villanova-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '222', metroId: 'philadelphia', teamId: 'villanova-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '219', metroId: 'philadelphia', teamId: 'penn-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '219', metroId: 'philadelphia', teamId: 'penn-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '219', metroId: 'philadelphia', teamId: 'penn-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '48', metroId: 'philadelphia', teamId: 'delaware-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '48', metroId: 'philadelphia', teamId: 'delaware-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '48', metroId: 'philadelphia', teamId: 'delaware-wbb', sport: 'basketball' },
  // Pittsburgh (docs/research/city-builds/pittsburgh/); ids and home venue names checked against the feed Oct 13, 2026.
  { path: 'football/nfl', espnId: '23', metroId: 'pittsburgh', teamId: 'steelers', sport: 'football' },
  { path: 'hockey/nhl', espnId: '16', metroId: 'pittsburgh', teamId: 'penguins', sport: 'hockey' },
  { path: 'football/college-football', espnId: '221', metroId: 'pittsburgh', teamId: 'pitt-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '221', metroId: 'pittsburgh', teamId: 'pitt-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '221', metroId: 'pittsburgh', teamId: 'pitt-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2184', metroId: 'pittsburgh', teamId: 'duquesne-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2184', metroId: 'pittsburgh', teamId: 'duquesne-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2184', metroId: 'pittsburgh', teamId: 'duquesne-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2523', metroId: 'pittsburgh', teamId: 'robert-morris-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2523', metroId: 'pittsburgh', teamId: 'robert-morris-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2523', metroId: 'pittsburgh', teamId: 'robert-morris-wbb', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '17827', metroId: 'pittsburgh', teamId: 'riverhounds', sport: 'soccer' },
  // Each Milwaukee id and actual home venue checked against the feed Oct 11, 2026.
  { path: 'basketball/nba', espnId: '15', metroId: 'milwaukee', teamId: 'bucks', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '269', metroId: 'milwaukee', teamId: 'marquette-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '269', metroId: 'milwaukee', teamId: 'marquette-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '270', metroId: 'milwaukee', teamId: 'uwm-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '270', metroId: 'milwaukee', teamId: 'uwm-wbb', sport: 'basketball' },
  // Boston (docs/research/city-builds/boston/); every id and home venue checked against the feed Oct 12, 2026.
  { path: 'basketball/nba', espnId: '2', metroId: 'boston', teamId: 'celtics', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '1', metroId: 'boston', teamId: 'bruins', sport: 'hockey' },
  { path: 'football/nfl', espnId: '17', metroId: 'boston', teamId: 'patriots', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '189', metroId: 'boston', teamId: 'revolution', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '131562', metroId: 'boston', teamId: 'boston-legacy-fc', sport: 'soccer' },
  { path: 'football/college-football', espnId: '103', metroId: 'boston', teamId: 'bc-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '103', metroId: 'boston', teamId: 'bc-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '103', metroId: 'boston', teamId: 'bc-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '104', metroId: 'boston', teamId: 'bu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '104', metroId: 'boston', teamId: 'bu-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '108', metroId: 'boston', teamId: 'harvard-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2349', metroId: 'boston', teamId: 'uml-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2349', metroId: 'boston', teamId: 'uml-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '111', metroId: 'boston', teamId: 'northeastern-mbb', sport: 'basketball' },
  // Columbus (docs/research/city-builds/columbus/); every id and home venue checked against the feed Oct 12, 2026.
  { path: 'hockey/nhl', espnId: '29', metroId: 'columbus', teamId: 'blue-jackets', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '183', metroId: 'columbus', teamId: 'columbus-crew', sport: 'soccer' },
  { path: 'football/college-football', espnId: '194', metroId: 'columbus', teamId: 'osu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '194', metroId: 'columbus', teamId: 'osu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '194', metroId: 'columbus', teamId: 'osu-wbb', sport: 'basketball' },
  { path: 'hockey/mens-college-hockey', espnId: '194', metroId: 'columbus', teamId: 'osu-mhockey', sport: 'hockey' },
  // Detroit (docs/research/city-builds/detroit/); every id and home venue checked against the feed Oct 13, 2026.
  { path: 'football/nfl', espnId: '8', metroId: 'detroit', teamId: 'lions', sport: 'football' },
  { path: 'hockey/nhl', espnId: '5', metroId: 'detroit', teamId: 'red-wings', sport: 'hockey' },
  { path: 'basketball/nba', espnId: '8', metroId: 'detroit', teamId: 'pistons', sport: 'basketball' },
  { path: 'football/college-football', espnId: '130', metroId: 'detroit', teamId: 'michigan-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '130', metroId: 'detroit', teamId: 'michigan-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '130', metroId: 'detroit', teamId: 'michigan-wbb', sport: 'basketball' },
  { path: 'hockey/mens-college-hockey', espnId: '130', metroId: 'detroit', teamId: 'michigan-mhockey', sport: 'hockey' },
  { path: 'basketball/mens-college-basketball', espnId: '2174', metroId: 'detroit', teamId: 'detroit-mercy-mbb', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '19179', metroId: 'detroit', teamId: 'detroit-city-fc', sport: 'soccer' },
  { path: 'basketball/nba-development', espnId: '15', metroId: 'detroit', teamId: 'motor-city-cruise', sport: 'basketball' },
  // Tampa Bay (docs/research/city-builds/tampa/); every id and home venue checked against the feed Oct 12, 2026.
  // Cleveland (docs/research/city-builds/cleveland/); ids and home venues checked against the feed Oct 13, 2026.
  { path: 'football/nfl', espnId: '5', metroId: 'cleveland', teamId: 'browns', sport: 'football' },
  { path: 'basketball/nba', espnId: '5', metroId: 'cleveland', teamId: 'cavaliers', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '325', metroId: 'cleveland', teamId: 'cleveland-state-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '325', metroId: 'cleveland', teamId: 'cleveland-state-wbb', sport: 'basketball' },
  { path: 'football/nfl', espnId: '27', metroId: 'tampa', teamId: 'buccaneers', sport: 'football' },
  { path: 'hockey/nhl', espnId: '20', metroId: 'tampa', teamId: 'lightning', sport: 'hockey' },
  { path: 'football/college-football', espnId: '58', metroId: 'tampa', teamId: 'usf-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '58', metroId: 'tampa', teamId: 'usf-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '58', metroId: 'tampa', teamId: 'usf-wbb', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '17361', metroId: 'tampa', teamId: 'rowdies', sport: 'soccer' },
  // Miami (docs/research/city-builds/miami/); every id and home venue checked against the feed Oct 13, 2026.
  { path: 'football/nfl', espnId: '15', metroId: 'miami', teamId: 'dolphins', sport: 'football' },
  { path: 'basketball/nba', espnId: '14', metroId: 'miami', teamId: 'heat', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '26', metroId: 'miami', teamId: 'panthers', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '20232', metroId: 'miami', teamId: 'inter-miami-cf', sport: 'soccer' },
  { path: 'football/college-football', espnId: '2390', metroId: 'miami', teamId: 'miami-hurricanes-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2390', metroId: 'miami', teamId: 'miami-hurricanes-mbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2229', metroId: 'miami', teamId: 'fiu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2229', metroId: 'miami', teamId: 'fiu-mbb', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '18159', metroId: 'miami', teamId: 'miami-fc', sport: 'soccer' },
  { path: 'soccer/usa.w.usl.1', espnId: '131449', metroId: 'miami', teamId: 'fort-lauderdale-united', sport: 'soccer' },
  // Austin (docs/research/city-builds/austin/); every id and home venue checked against the feed Oct 12, 2026.
  { path: 'soccer/usa.1', espnId: '20906', metroId: 'austin', teamId: 'austin-fc', sport: 'soccer' },
  { path: 'football/college-football', espnId: '251', metroId: 'austin', teamId: 'texas-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '251', metroId: 'austin', teamId: 'texas-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '251', metroId: 'austin', teamId: 'texas-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '326', metroId: 'austin', teamId: 'texas-state-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '326', metroId: 'austin', teamId: 'texas-state-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '326', metroId: 'austin', teamId: 'texas-state-wbb', sport: 'basketball' },
  // Phoenix (docs/research/city-builds/phoenix/). Ids and home venue names checked against the feed Oct 12, 2026.
  { path: 'football/nfl', espnId: '22', metroId: 'phoenix', teamId: 'arizona-cardinals', sport: 'football' },
  { path: 'basketball/nba', espnId: '21', metroId: 'phoenix', teamId: 'suns', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '11', metroId: 'phoenix', teamId: 'mercury', sport: 'basketball' },
  { path: 'basketball/nba-development', espnId: '129713', metroId: 'phoenix', teamId: 'valley-suns', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '17850', metroId: 'phoenix', teamId: 'phoenix-rising', sport: 'soccer' },
  { path: 'football/college-football', espnId: '9', metroId: 'phoenix', teamId: 'asu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '9', metroId: 'phoenix', teamId: 'asu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '9', metroId: 'phoenix', teamId: 'asu-wbb', sport: 'basketball' },
  { path: 'hockey/mens-college-hockey', espnId: '9', metroId: 'phoenix', teamId: 'asu-hockey', sport: 'hockey' },
  { path: 'basketball/mens-college-basketball', espnId: '2253', metroId: 'phoenix', teamId: 'gcu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2253', metroId: 'phoenix', teamId: 'gcu-wbb', sport: 'basketball' },
  // Vancouver (docs/research/city-builds/vancouver/); ids and home venue names checked against the feed Oct 12, 2026.
  // CFL team schedules came back empty (as Montreal's did). NLL home listings had no venue name, so they are not placed.
  { path: 'hockey/nhl', espnId: '22', metroId: 'vancouver', teamId: 'vancouver-canucks', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '9727', metroId: 'vancouver', teamId: 'vancouver-whitecaps', sport: 'soccer' },
  { path: 'football/cfl', espnId: '79', metroId: 'vancouver', teamId: 'bc-lions', sport: 'football' },
  { path: 'lacrosse/nll', espnId: '125432', metroId: 'vancouver', teamId: 'vancouver-warriors', sport: 'lacrosse' },
  // Sacramento (docs/research/city-builds/sacramento/). Ids and home venue names checked against the feed Oct 12, 2026.
  { path: 'basketball/nba', espnId: '23', metroId: 'sacramento', teamId: 'sacramento-kings', sport: 'basketball' },
  { path: 'football/college-football', espnId: '16', metroId: 'sacramento', teamId: 'sac-state-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '16', metroId: 'sacramento', teamId: 'sac-state-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '16', metroId: 'sacramento', teamId: 'sac-state-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '302', metroId: 'sacramento', teamId: 'uc-davis-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '302', metroId: 'sacramento', teamId: 'uc-davis-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '302', metroId: 'sacramento', teamId: 'uc-davis-wbb', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '17828', metroId: 'sacramento', teamId: 'sacramento-republic', sport: 'soccer' },
  // Mexico City (docs/research/city-builds/mexico-city/). Ids and home venue names checked against the feed Oct 12, 2026.
  { path: 'soccer/mex.1', espnId: '227', metroId: 'mexico-city', teamId: 'club-america', sport: 'soccer' },
  { path: 'soccer/mex.1', espnId: '218', metroId: 'mexico-city', teamId: 'cruz-azul', sport: 'soccer' },
  { path: 'soccer/mex.1', espnId: '226', metroId: 'mexico-city', teamId: 'atlante', sport: 'soccer' },
  { path: 'soccer/mex.1', espnId: '233', metroId: 'mexico-city', teamId: 'pumas-unam', sport: 'soccer' },
  { path: 'soccer/mex.w.1', espnId: '22415', metroId: 'mexico-city', teamId: 'america-femenil', sport: 'soccer' },
  { path: 'soccer/mex.w.1', espnId: '133981', metroId: 'mexico-city', teamId: 'pumas-femenil', sport: 'soccer' },
  { path: 'soccer/mex.w.1', espnId: '133982', metroId: 'mexico-city', teamId: 'cruz-azul-femenil', sport: 'soccer' },
  { path: 'basketball/nba-development', espnId: '124612', metroId: 'mexico-city', teamId: 'capitanes', sport: 'basketball' },
  // Las Vegas (docs/research/city-builds/las-vegas/); every id and home venue checked against the feed Oct 12, 2026.
  { path: 'football/nfl', espnId: '13', metroId: 'las-vegas', teamId: 'raiders', sport: 'football' },
  { path: 'hockey/nhl', espnId: '37', metroId: 'las-vegas', teamId: 'golden-knights', sport: 'hockey' },
  { path: 'basketball/wnba', espnId: '17', metroId: 'las-vegas', teamId: 'aces', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '18987', metroId: 'las-vegas', teamId: 'las-vegas-lights', sport: 'soccer' },
  { path: 'football/college-football', espnId: '2439', metroId: 'las-vegas', teamId: 'unlv-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2439', metroId: 'las-vegas', teamId: 'unlv-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2439', metroId: 'las-vegas', teamId: 'unlv-wbb', sport: 'basketball' },
  // Kansas City (docs/research/city-builds/kansas-city/); ids and home venue names checked against the feed Oct 12, 2026.
  { path: 'football/nfl', espnId: '12', metroId: 'kansas-city', teamId: 'chiefs', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '186', metroId: 'kansas-city', teamId: 'sporting-kc', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '20907', metroId: 'kansas-city', teamId: 'kc-current', sport: 'soccer' },
  // Houston (docs/research/city-builds/houston/); every id and home venue checked against the feed Oct 12, 2026.
  { path: 'football/nfl', espnId: '34', metroId: 'houston', teamId: 'texans', sport: 'football' },
  { path: 'basketball/nba', espnId: '10', metroId: 'houston', teamId: 'rockets', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '6077', metroId: 'houston', teamId: 'dynamo', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '17346', metroId: 'houston', teamId: 'dash', sport: 'soccer' },
  { path: 'football/college-football', espnId: '248', metroId: 'houston', teamId: 'uh-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '248', metroId: 'houston', teamId: 'uh-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '248', metroId: 'houston', teamId: 'uh-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '242', metroId: 'houston', teamId: 'rice-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '242', metroId: 'houston', teamId: 'rice-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '242', metroId: 'houston', teamId: 'rice-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2640', metroId: 'houston', teamId: 'texas-southern-football', sport: 'football' },
  { path: 'football/college-football', espnId: '2504', metroId: 'houston', teamId: 'pvamu-football', sport: 'football' },
  // Minneapolis–St. Paul (docs/research/city-builds/minneapolis/). Ids and home-venue names checked against the feed Oct 12, 2026.
  { path: 'football/nfl', espnId: '16', metroId: 'minneapolis', teamId: 'vikings', sport: 'football' },
  { path: 'basketball/nba', espnId: '16', metroId: 'minneapolis', teamId: 'timberwolves', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '8', metroId: 'minneapolis', teamId: 'lynx', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '30', metroId: 'minneapolis', teamId: 'wild', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '17362', metroId: 'minneapolis', teamId: 'minnesota-united', sport: 'soccer' },
  { path: 'football/college-football', espnId: '135', metroId: 'minneapolis', teamId: 'gophers-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '135', metroId: 'minneapolis', teamId: 'gophers-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '135', metroId: 'minneapolis', teamId: 'gophers-wbb', sport: 'basketball' },
  { path: 'hockey/mens-college-hockey', espnId: '135', metroId: 'minneapolis', teamId: 'gophers-hockey', sport: 'hockey' },
  { path: 'basketball/mens-college-basketball', espnId: '2900', metroId: 'minneapolis', teamId: 'st-thomas-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2900', metroId: 'minneapolis', teamId: 'st-thomas-wbb', sport: 'basketball' },
  { path: 'hockey/mens-college-hockey', espnId: '2900', metroId: 'minneapolis', teamId: 'st-thomas-hockey', sport: 'hockey' },
  { path: 'basketball/nba', espnId: '13', metroId: 'la', teamId: 'lakers', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '12', metroId: 'la', teamId: 'clippers', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '6', metroId: 'la', teamId: 'sparks', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '8', metroId: 'la', teamId: 'kings', sport: 'hockey' },
  { path: 'hockey/nhl', espnId: '25', metroId: 'la', teamId: 'ducks', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '187', metroId: 'la', teamId: 'galaxy', sport: 'soccer' },
  { path: 'soccer/usa.1', espnId: '18966', metroId: 'la', teamId: 'lafc', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '21422', metroId: 'la', teamId: 'angel-city', sport: 'soccer' },
  { path: 'football/nfl', espnId: '14', metroId: 'la', teamId: 'rams', sport: 'football' },
  { path: 'football/nfl', espnId: '24', metroId: 'la', teamId: 'chargers', sport: 'football' },
  { path: 'football/college-football', espnId: '30', metroId: 'la', teamId: 'usc-football', sport: 'football' },
  { path: 'football/college-football', espnId: '26', metroId: 'la', teamId: 'ucla-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '30', metroId: 'la', teamId: 'usc-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '26', metroId: 'la', teamId: 'ucla-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '30', metroId: 'la', teamId: 'usc-wbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '26', metroId: 'la', teamId: 'ucla-wbb', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '22529', metroId: 'san-diego', teamId: 'san-diego-fc', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '21423', metroId: 'san-diego', teamId: 'wave', sport: 'soccer' },
  { path: 'football/college-football', espnId: '21', metroId: 'san-diego', teamId: 'sdsu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '21', metroId: 'san-diego', teamId: 'sdsu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '21', metroId: 'san-diego', teamId: 'sdsu-wbb', sport: 'basketball' },
  { path: 'football/nfl', espnId: '26', metroId: 'seattle', teamId: 'seahawks', sport: 'football' },
  { path: 'hockey/nhl', espnId: '124292', metroId: 'seattle', teamId: 'kraken', sport: 'hockey' },
  { path: 'basketball/wnba', espnId: '14', metroId: 'seattle', teamId: 'storm', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '9726', metroId: 'seattle', teamId: 'sounders', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15363', metroId: 'seattle', teamId: 'reign', sport: 'soccer' },
  { path: 'football/college-football', espnId: '264', metroId: 'seattle', teamId: 'uw-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '264', metroId: 'seattle', teamId: 'uw-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '264', metroId: 'seattle', teamId: 'uw-wbb', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '18', metroId: 'new-york', teamId: 'knicks', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '17', metroId: 'new-york', teamId: 'nets', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '9', metroId: 'new-york', teamId: 'liberty', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '13', metroId: 'new-york', teamId: 'ny-rangers', sport: 'hockey' },
  { path: 'hockey/nhl', espnId: '12', metroId: 'new-york', teamId: 'islanders', sport: 'hockey' },
  { path: 'hockey/nhl', espnId: '11', metroId: 'new-york', teamId: 'devils', sport: 'hockey' },
  { path: 'football/nfl', espnId: '19', metroId: 'new-york', teamId: 'ny-giants', sport: 'football' },
  { path: 'football/nfl', espnId: '20', metroId: 'new-york', teamId: 'ny-jets', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '17606', metroId: 'new-york', teamId: 'nycfc', sport: 'soccer' },
  { path: 'soccer/usa.1', espnId: '190', metroId: 'new-york', teamId: 'red-bulls', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15364', metroId: 'new-york', teamId: 'gotham', sport: 'soccer' },
  { path: 'basketball/mens-college-basketball', espnId: '2599', metroId: 'new-york', teamId: 'stjohns-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2550', metroId: 'new-york', teamId: 'seton-hall-mbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '171', metroId: 'new-york', teamId: 'columbia-football', sport: 'football' },
  { path: 'football/college-football', espnId: '2619', metroId: 'new-york', teamId: 'stony-brook-football', sport: 'football' },
  { path: 'football/college-football', espnId: '2230', metroId: 'new-york', teamId: 'fordham-football', sport: 'football' },
  // Rutgers (Piscataway), Oct 16, 2026: SHI Stadium and Jersey Mike's Arena.
  { path: 'football/college-football', espnId: '164', metroId: 'new-york', teamId: 'rutgers', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '164', metroId: 'new-york', teamId: 'rutgers-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '164', metroId: 'new-york', teamId: 'rutgers-wbb', sport: 'basketball' },
  { path: 'basketball/nba', espnId: '1', metroId: 'atlanta', teamId: 'hawks', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '20', metroId: 'atlanta', teamId: 'dream', sport: 'basketball' },
  // Bay Area (docs/research/city-builds/bay-area/bay-area-venue-table-answer.md); every id checked against the feed Oct 7, 2026.
  { path: 'basketball/nba', espnId: '9', metroId: 'bay-area', teamId: 'warriors', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '129689', metroId: 'bay-area', teamId: 'valkyries', sport: 'basketball' },
  { path: 'football/nfl', espnId: '25', metroId: 'bay-area', teamId: 'sf-49ers', sport: 'football' },
  { path: 'hockey/nhl', espnId: '18', metroId: 'bay-area', teamId: 'sharks', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '191', metroId: 'bay-area', teamId: 'earthquakes', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '22187', metroId: 'bay-area', teamId: 'bay-fc', sport: 'soccer' },
  { path: 'soccer/usa.usl.1', espnId: '20687', metroId: 'bay-area', teamId: 'oakland-roots', sport: 'soccer' },
  { path: 'football/college-football', espnId: '25', metroId: 'bay-area', teamId: 'cal-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '25', metroId: 'bay-area', teamId: 'cal-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '25', metroId: 'bay-area', teamId: 'cal-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '24', metroId: 'bay-area', teamId: 'stanford-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '24', metroId: 'bay-area', teamId: 'stanford-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '24', metroId: 'bay-area', teamId: 'stanford-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '23', metroId: 'bay-area', teamId: 'sjsu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '23', metroId: 'bay-area', teamId: 'sjsu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '23', metroId: 'bay-area', teamId: 'sjsu-wbb', sport: 'basketball' },
  // Chicago (docs/research/city-builds/chicago/chicago-venue-table-answer.md); every id checked against the feed Oct 7, 2026.
  { path: 'basketball/nba', espnId: '4', metroId: 'chicago', teamId: 'bulls', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '19', metroId: 'chicago', teamId: 'sky', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '4', metroId: 'chicago', teamId: 'blackhawks', sport: 'hockey' },
  { path: 'football/nfl', espnId: '3', metroId: 'chicago', teamId: 'bears', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '182', metroId: 'chicago', teamId: 'chicago-fire', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15360', metroId: 'chicago', teamId: 'chicago-stars', sport: 'soccer' },
  { path: 'football/college-football', espnId: '77', metroId: 'chicago', teamId: 'northwestern-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '77', metroId: 'chicago', teamId: 'northwestern-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '77', metroId: 'chicago', teamId: 'northwestern-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '305', metroId: 'chicago', teamId: 'depaul-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '305', metroId: 'chicago', teamId: 'depaul-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '82', metroId: 'chicago', teamId: 'uic-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2130', metroId: 'chicago', teamId: 'chicago-state-mbb', sport: 'basketball' },
  // Dallas–Fort Worth (docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-venue-table-answer.md); every id checked against the feed Oct 7, 2026.
  { path: 'basketball/nba', espnId: '6', metroId: 'dallas-fort-worth', teamId: 'mavericks', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '3', metroId: 'dallas-fort-worth', teamId: 'wings', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '9', metroId: 'dallas-fort-worth', teamId: 'dallas-stars', sport: 'hockey' },
  { path: 'football/nfl', espnId: '6', metroId: 'dallas-fort-worth', teamId: 'cowboys', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '185', metroId: 'dallas-fort-worth', teamId: 'fc-dallas', sport: 'soccer' },
  { path: 'football/college-football', espnId: '2567', metroId: 'dallas-fort-worth', teamId: 'smu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2567', metroId: 'dallas-fort-worth', teamId: 'smu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2567', metroId: 'dallas-fort-worth', teamId: 'smu-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2628', metroId: 'dallas-fort-worth', teamId: 'tcu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2628', metroId: 'dallas-fort-worth', teamId: 'tcu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2628', metroId: 'dallas-fort-worth', teamId: 'tcu-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '249', metroId: 'dallas-fort-worth', teamId: 'unt-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '249', metroId: 'dallas-fort-worth', teamId: 'unt-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '250', metroId: 'dallas-fort-worth', teamId: 'uta-mbb', sport: 'basketball' },
  // Montreal (docs/research/city-builds/montreal/montreal-venue-table-answer.md); ids checked against the feed Oct 8, 2026.
  { path: 'hockey/nhl', espnId: '10', metroId: 'montreal', teamId: 'canadiens', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '9720', metroId: 'montreal', teamId: 'cf-montreal', sport: 'soccer' },
  // ESPN's smaller leagues (Kylie, Oct 8). The CFL team schedule answered empty on Oct 8; the row stays so it lists when it fills.
  { path: 'football/cfl', espnId: '83', metroId: 'montreal', teamId: 'alouettes', sport: 'football' },
  // Toronto (docs/research/city-builds/toronto/). Ids checked against the feed Oct 12, 2026. CFL schedule was empty, same as the Alouettes row.
  { path: 'hockey/nhl', espnId: '21', metroId: 'toronto', teamId: 'maple-leafs', sport: 'hockey' },
  { path: 'basketball/nba', espnId: '28', metroId: 'toronto', teamId: 'raptors', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '131935', metroId: 'toronto', teamId: 'tempo', sport: 'basketball' },
  { path: 'basketball/nba-development', espnId: '17', metroId: 'toronto', teamId: 'raptors-905', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '7318', metroId: 'toronto', teamId: 'toronto-fc', sport: 'soccer' },
  { path: 'football/cfl', espnId: '85', metroId: 'toronto', teamId: 'argonauts', sport: 'football' },
  { path: 'soccer/usa.w.usl.1', espnId: '131447', metroId: 'dallas-fort-worth', teamId: 'dallas-trinity', sport: 'soccer' },
  { path: 'football/ufl', espnId: '112647', metroId: 'dallas-fort-worth', teamId: 'dallas-renegades', sport: 'football' },
  { path: 'basketball/nba-development', espnId: '24', metroId: 'dallas-fort-worth', teamId: 'texas-legends', sport: 'basketball' },
  { path: 'basketball/nba-development', espnId: '26', metroId: 'chicago', teamId: 'windy-city-bulls', sport: 'basketball' },
  { path: 'football/nfl', espnId: '1', metroId: 'atlanta', teamId: 'falcons', sport: 'football' },
  { path: 'soccer/usa.1', espnId: '18418', metroId: 'atlanta', teamId: 'atlanta-united', sport: 'soccer' },
  { path: 'football/college-football', espnId: '59', metroId: 'atlanta', teamId: 'gt-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '59', metroId: 'atlanta', teamId: 'gt-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '59', metroId: 'atlanta', teamId: 'gt-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2247', metroId: 'atlanta', teamId: 'gsu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2247', metroId: 'atlanta', teamId: 'gsu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2247', metroId: 'atlanta', teamId: 'gsu-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '338', metroId: 'atlanta', teamId: 'ksu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '338', metroId: 'atlanta', teamId: 'ksu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '338', metroId: 'atlanta', teamId: 'ksu-wbb', sport: 'basketball' },
  // Indianapolis (docs/research/city-builds/indianapolis/). Ids checked against each team's schedule Oct 13, 2026.
  { path: 'football/nfl', espnId: '11', metroId: 'indianapolis', teamId: 'colts', sport: 'football' },
  { path: 'basketball/nba', espnId: '11', metroId: 'indianapolis', teamId: 'pacers', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '5', metroId: 'indianapolis', teamId: 'fever', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2086', metroId: 'indianapolis', teamId: 'butler-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2086', metroId: 'indianapolis', teamId: 'butler-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2086', metroId: 'indianapolis', teamId: 'butler-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '85', metroId: 'indianapolis', teamId: 'iu-indy-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '85', metroId: 'indianapolis', teamId: 'iu-indy-wbb', sport: 'basketball' },
  // Nashville (docs/research/city-builds/nashville/). Ids checked against each team's schedule Oct 12, 2026.
  { path: 'football/nfl', espnId: '10', metroId: 'nashville', teamId: 'titans', sport: 'football' },
  { path: 'hockey/nhl', espnId: '27', metroId: 'nashville', teamId: 'predators', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '18986', metroId: 'nashville', teamId: 'nashville-sc', sport: 'soccer' },
  { path: 'football/college-football', espnId: '2634', metroId: 'nashville', teamId: 'tsu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2634', metroId: 'nashville', teamId: 'tsu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2634', metroId: 'nashville', teamId: 'tsu-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '238', metroId: 'nashville', teamId: 'vanderbilt-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '238', metroId: 'nashville', teamId: 'vanderbilt-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '238', metroId: 'nashville', teamId: 'vanderbilt-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2057', metroId: 'nashville', teamId: 'belmont-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2057', metroId: 'nashville', teamId: 'belmont-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '288', metroId: 'nashville', teamId: 'lipscomb-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '288', metroId: 'nashville', teamId: 'lipscomb-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2393', metroId: 'nashville', teamId: 'mtsu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2393', metroId: 'nashville', teamId: 'mtsu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2393', metroId: 'nashville', teamId: 'mtsu-wbb', sport: 'basketball' },
  // Denver (docs/research/city-builds/denver/); every id and home venue checked against the feed Oct 13, 2026.
  { path: 'football/nfl', espnId: '7', metroId: 'denver', teamId: 'broncos', sport: 'football' },
  { path: 'basketball/nba', espnId: '7', metroId: 'denver', teamId: 'nuggets', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '17', metroId: 'denver', teamId: 'avalanche', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '184', metroId: 'denver', teamId: 'rapids', sport: 'soccer' },
  { path: 'lacrosse/nll', espnId: '125422', metroId: 'denver', teamId: 'colorado-mammoth', sport: 'lacrosse' },
  { path: 'soccer/usa.nwsl', espnId: '131563', metroId: 'denver', teamId: 'denver-summit-fc', sport: 'soccer' },
  { path: 'hockey/mens-college-hockey', espnId: '2172', metroId: 'denver', teamId: 'du-mhockey', sport: 'hockey' },
  { path: 'basketball/mens-college-basketball', espnId: '2172', metroId: 'denver', teamId: 'du-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2172', metroId: 'denver', teamId: 'du-wbb', sport: 'basketball' },
  // New Orleans (docs/research/city-builds/new-orleans/); every id and home venue checked against the feed Oct 12, 2026.
  // Tulane football is 2655, not 265 (265 is Washington State).
  { path: 'football/nfl', espnId: '18', metroId: 'new-orleans', teamId: 'saints', sport: 'football' },
  { path: 'basketball/nba', espnId: '3', metroId: 'new-orleans', teamId: 'pelicans', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2655', metroId: 'new-orleans', teamId: 'tulane-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2655', metroId: 'new-orleans', teamId: 'tulane-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2655', metroId: 'new-orleans', teamId: 'tulane-wbb', sport: 'basketball' },
  { path: 'baseball/college-baseball', espnId: '203', metroId: 'new-orleans', teamId: 'tulane-baseball', sport: 'baseball' },
  { path: 'basketball/mens-college-basketball', espnId: '2443', metroId: 'new-orleans', teamId: 'lsuno-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2443', metroId: 'new-orleans', teamId: 'lsuno-wbb', sport: 'basketball' },
  { path: 'baseball/college-baseball', espnId: '184', metroId: 'new-orleans', teamId: 'lsuno-baseball', sport: 'baseball' },
  { path: 'basketball/nba-development', espnId: '6', metroId: 'new-orleans', teamId: 'laketown-squadron', sport: 'basketball' },
  // Raleigh–Durham (docs/research/city-builds/raleigh-durham/); every id and home venue checked against the feed Oct 13, 2026.
  { path: 'hockey/nhl', espnId: '7', metroId: 'raleigh-durham', teamId: 'hurricanes', sport: 'hockey' },
  { path: 'football/college-football', espnId: '152', metroId: 'raleigh-durham', teamId: 'nc-state-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '152', metroId: 'raleigh-durham', teamId: 'nc-state-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '152', metroId: 'raleigh-durham', teamId: 'nc-state-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '153', metroId: 'raleigh-durham', teamId: 'unc-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '153', metroId: 'raleigh-durham', teamId: 'unc-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '153', metroId: 'raleigh-durham', teamId: 'unc-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '150', metroId: 'raleigh-durham', teamId: 'duke-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '150', metroId: 'raleigh-durham', teamId: 'duke-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '150', metroId: 'raleigh-durham', teamId: 'duke-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2428', metroId: 'raleigh-durham', teamId: 'nccu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2428', metroId: 'raleigh-durham', teamId: 'nccu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2428', metroId: 'raleigh-durham', teamId: 'nccu-wbb', sport: 'basketball' },
  { path: 'soccer/usa.nwsl', espnId: '15366', metroId: 'raleigh-durham', teamId: 'nc-courage', sport: 'soccer' },
  // Portland (docs/research/city-builds/portland/); every id and home venue checked against the feed Oct 13, 2026.
  { path: 'basketball/nba', espnId: '22', metroId: 'portland', teamId: 'blazers', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '9723', metroId: 'portland', teamId: 'timbers', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15362', metroId: 'portland', teamId: 'thorns', sport: 'soccer' },
  { path: 'basketball/wnba', espnId: '132052', metroId: 'portland', teamId: 'portland-fire', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2502', metroId: 'portland', teamId: 'psu-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2502', metroId: 'portland', teamId: 'psu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2502', metroId: 'portland', teamId: 'psu-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2501', metroId: 'portland', teamId: 'up-pilots-mbb', sport: 'basketball' },
  { path: 'basketball/nba-development', espnId: '128019', metroId: 'portland', teamId: 'rip-city-remix', sport: 'basketball' },
  // San Antonio (docs/research/city-builds/san-antonio/); ids and home venues checked against the feed Oct 13, 2026.
  { path: 'basketball/nba', espnId: '24', metroId: 'san-antonio', teamId: 'spurs', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '18265', metroId: 'san-antonio', teamId: 'san-antonio-fc', sport: 'soccer' },
  { path: 'football/college-football', espnId: '2636', metroId: 'san-antonio', teamId: 'utsa-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2636', metroId: 'san-antonio', teamId: 'utsa-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2636', metroId: 'san-antonio', teamId: 'utsa-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2916', metroId: 'san-antonio', teamId: 'uiw-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2916', metroId: 'san-antonio', teamId: 'uiw-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2916', metroId: 'san-antonio', teamId: 'uiw-wbb', sport: 'basketball' },
  // Washington, DC (docs/research/city-builds/washington-dc/); ids checked against each team's schedule Oct 13, 2026.
  { path: 'football/nfl', espnId: '28', metroId: 'washington-dc', teamId: 'washington', sport: 'football' },
  { path: 'hockey/nhl', espnId: '23', metroId: 'washington-dc', teamId: 'capitals', sport: 'hockey' },
  { path: 'basketball/nba', espnId: '27', metroId: 'washington-dc', teamId: 'wizards', sport: 'basketball' },
  { path: 'basketball/wnba', espnId: '16', metroId: 'washington-dc', teamId: 'mystics', sport: 'basketball' },
  { path: 'soccer/usa.1', espnId: '193', metroId: 'washington-dc', teamId: 'dc-united', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '15365', metroId: 'washington-dc', teamId: 'spirit', sport: 'soccer' },
  { path: 'basketball/nba-development', espnId: '4', metroId: 'washington-dc', teamId: 'capital-city-go-go', sport: 'basketball' },
  { path: 'soccer/usa.usl.1', espnId: '19410', metroId: 'washington-dc', teamId: 'loudoun-united', sport: 'soccer' },
  { path: 'football/college-football', espnId: '120', metroId: 'washington-dc', teamId: 'maryland-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '120', metroId: 'washington-dc', teamId: 'maryland-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '120', metroId: 'washington-dc', teamId: 'maryland-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2244', metroId: 'washington-dc', teamId: 'gmu-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '45', metroId: 'washington-dc', teamId: 'gw-mbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '46', metroId: 'washington-dc', teamId: 'georgetown-mbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '47', metroId: 'washington-dc', teamId: 'howard-football', sport: 'football' },
  // Edmonton (docs/research/city-builds/edmonton/). Ids checked against each team's schedule Oct 13, 2026.
  { path: 'hockey/nhl', espnId: '6', metroId: 'edmonton', teamId: 'oilers', sport: 'hockey' },
  { path: 'football/cfl', espnId: '81', metroId: 'edmonton', teamId: 'elks', sport: 'football' },
  // Ottawa–Gatineau (docs/research/city-builds/ottawa-gatineau/). Ids and home venues checked against the feed Oct 13, 2026.
  { path: 'hockey/nhl', espnId: '14', metroId: 'ottawa-gatineau', teamId: 'ottawa-senators', sport: 'hockey' },
  { path: 'football/cfl', espnId: '87', metroId: 'ottawa-gatineau', teamId: 'ottawa-redblacks', sport: 'football' },
  // St. Louis (docs/research/city-builds/st-louis/); ids checked against each team's schedule Oct 13, 2026.
  { path: 'hockey/nhl', espnId: '19', metroId: 'st-louis', teamId: 'blues', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '21812', metroId: 'st-louis', teamId: 'st-louis-city-sc', sport: 'soccer' },
  { path: 'football/ufl', espnId: '112651', metroId: 'st-louis', teamId: 'st-louis-battlehawks', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '139', metroId: 'st-louis', teamId: 'slu-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '139', metroId: 'st-louis', teamId: 'slu-wbb', sport: 'basketball' },
  { path: 'basketball/mens-college-basketball', espnId: '2565', metroId: 'st-louis', teamId: 'siue-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2565', metroId: 'st-louis', teamId: 'siue-wbb', sport: 'basketball' },
  { path: 'football/college-football', espnId: '2815', metroId: 'st-louis', teamId: 'lindenwood-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '2815', metroId: 'st-louis', teamId: 'lindenwood-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '2815', metroId: 'st-louis', teamId: 'lindenwood-wbb', sport: 'basketball' },
  // Salt Lake City (docs/research/city-builds/salt-lake-city/); ids and home venues checked Oct 13, 2026.
  { path: 'basketball/nba', espnId: '26', metroId: 'salt-lake-city', teamId: 'utah-jazz', sport: 'basketball' },
  { path: 'hockey/nhl', espnId: '129764', metroId: 'salt-lake-city', teamId: 'utah-mammoth', sport: 'hockey' },
  { path: 'soccer/usa.1', espnId: '4771', metroId: 'salt-lake-city', teamId: 'real-salt-lake', sport: 'soccer' },
  { path: 'soccer/usa.nwsl', espnId: '19141', metroId: 'salt-lake-city', teamId: 'utah-royals', sport: 'soccer' },
  { path: 'football/college-football', espnId: '254', metroId: 'salt-lake-city', teamId: 'utah-utes-football', sport: 'football' },
  { path: 'basketball/mens-college-basketball', espnId: '254', metroId: 'salt-lake-city', teamId: 'utah-mbb', sport: 'basketball' },
  { path: 'basketball/womens-college-basketball', espnId: '254', metroId: 'salt-lake-city', teamId: 'utah-wbb', sport: 'basketball' },
  { path: 'basketball/nba-development', espnId: '19', metroId: 'salt-lake-city', teamId: 'salt-lake-city-stars', sport: 'basketball' },
];

/** Cities this feed can list games for. */
/** ESPN's ids for the MLB clubs the app covers (their schedules come from MLB, so they are not in ESPN_TEAMS). */
const ESPN_MLB_IDS: Record<string, string> = {
  dodgers: '19',
  angels: '3',
  padres: '25',
  mariners: '12',
  yankees: '10',
  mets: '21',
  braves: '15',
  giants: '26',
  cubs: '16',
  'white-sox': '4',
  rangers: '13',
  phillies: '22',
  brewers: '8',
  cardinals: '138',
  rays: '30',
  astros: '18',
  'blue-jays': '14',
  tigers: '6',
};

/**
 * The team's own page on ESPN, for a quiet "ESPN ›" link on a team card and page
 * (build notes 2, section 2). A link only: no standings or scores are read from it.
 */
export function espnTeamUrl(teamId: string): string | null {
  const mlb = ESPN_MLB_IDS[teamId];
  if (mlb) return `https://www.espn.com/mlb/team/_/id/${mlb}`;
  const team = ESPN_TEAMS.find((t) => t.teamId === teamId);
  if (!team) return null;
  const [sport, league] = team.path.split('/');
  const section = sport === 'soccer' ? 'soccer' : league;
  return `https://www.espn.com/${section}/team/_/id/${team.espnId}`;
}

export function espnMetroIds(): string[] {
  return [...new Set(ESPN_TEAMS.map((team) => team.metroId))];
}

/** ESPN gives venue names, not ids. Games anywhere else (road, neutral, abroad) are skipped. */
const VENUE_BY_NAME: Record<string, string> = {
  'lincoln financial field': 'lincoln-financial-field',
  'citizens bank park': 'citizens-bank-park',
  'xfinity mobile arena': 'xfinity-mobile-arena',
  'wells fargo center': 'xfinity-mobile-arena',
  'subaru park': 'subaru-park',
  'acrisure stadium': 'acrisure-stadium',
  'heinz field': 'acrisure-stadium',
  'pnc park': 'pnc-park',
  'ppg paints arena': 'ppg-paints-arena',
  'consol energy center': 'ppg-paints-arena',
  'petersen events center': 'petersen-events-center',
  'upmc cooper fieldhouse': 'upmc-cooper-fieldhouse',
  'upmc events center': 'upmc-events-center',
  'arthur j. rooney athletic field': 'arthur-j-rooney-athletic-field',
  'joe walton stadium': 'joe-walton-stadium',
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
  'raymond james stadium': 'raymond-james-stadium',
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
  'benchmark international arena': 'benchmark-international-arena',
  'amalie arena': 'benchmark-international-arena',
  'tropicana field': 'tropicana-field',
  'yuengling center': 'yuengling-center',
  'al lang stadium': 'al-lang-stadium',
  'george m. steinbrenner field': 'george-m-steinbrenner-field',
  'george m steinbrenner field': 'george-m-steinbrenner-field',
  // Phoenix, as ESPN writes them on each team's own schedule (Oct 12, 2026).
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
  'rogers place': 'rogers-place',
  'commonwealth stadium': 'commonwealth-stadium',
  'clarke stadium': 'clarke-stadium',
  're/max field': 'remax-field',
  'remax field': 'remax-field',
  'gcu arena': 'global-credit-union-arena',
  'desert diamond arena': 'desert-diamond-arena',
  'gila river arena': 'desert-diamond-arena',
  'phoenix rising stadium at 38th st/washington': 'phoenix-rising-soccer-stadium',
  'phoenix rising soccer stadium': 'phoenix-rising-soccer-stadium',

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
  'madison square garden': 'madison-square-garden',
  'barclays center': 'barclays-center',
  'ubs arena': 'ubs-arena',
  'metlife stadium': 'metlife-stadium',
  'yankee stadium': 'yankee-stadium',
  'citi field': 'citi-field',
  'shi stadium': 'shi-stadium',
  "jersey mike's arena": 'jersey-mikes-arena',
  'jersey mike’s arena': 'jersey-mikes-arena', // the feed's curly apostrophe (checked Oct 16)
  'rutgers athletic center': 'jersey-mikes-arena',
  'sports illustrated stadium': 'sports-illustrated-stadium',
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
  'allstate arena': 'allstate-arena',
  'impact field': 'impact-field',
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
  // Vancouver, as the feeds write them. Rogers Place (Edmonton) is intentionally not mapped.
  'bc place': 'bc-place',
  'bc place vancouver': 'bc-place',
  'rogers arena': 'rogers-arena',
  'pacific coliseum': 'pacific-coliseum',
  'swangard stadium': 'swangard-stadium',
  'rogers field at nat bailey stadium': 'nat-bailey-stadium',
  'nat bailey stadium': 'nat-bailey-stadium',
  // Toronto, as ESPN wrote them on each club's schedule Oct 12, 2026.
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
  // Columbus, as ESPN writes them (checked Oct 12, 2026).
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
  // Nashville, as ESPN writes them on each team's own schedule (checked Oct 12, 2026).
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
  // Mexico City, as ESPN writes them. Puebla's Estadio Cuauhtémoc and Coapa/Centenario rooms are not mapped.
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
  // Las Vegas, as ESPN writes them on each team's own schedule (Oct 12, 2026).
  'allegiant stadium': 'allegiant-stadium',
  't-mobile arena': 't-mobile-arena',
  'michelob ultra arena': 'michelob-ultra-arena',
  'mgm grand garden arena': 'mgm-grand-garden',
  'thomas & mack center': 'thomas-mack-center',
  'thomas and mack center': 'thomas-mack-center',
  "lee's family forum": 'lees-family-forum',
  'cashman field': 'cashman-field',
  // Kansas City, as ESPN writes them (2025 still says Children's Mercy Park; 2026 says Sporting Park).
  'arrowhead stadium': 'arrowhead-stadium',
  'geha field at arrowhead stadium': 'arrowhead-stadium',
  'kansas city stadium': 'arrowhead-stadium',
  'kauffman stadium': 'kauffman-stadium',
  "children's mercy park": 'sporting-park',
  'sporting park': 'sporting-park',
  'cpkc stadium': 'cpkc-stadium',
  // Houston, as ESPN writes them on each team's own schedule (checked Oct 12, 2026).
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
  // Minneapolis–St. Paul, as ESPN writes them on each team's own schedule (Oct 12, 2026).
  'u.s. bank stadium': 'us-bank-stadium',
  'huntington bank stadium': 'huntington-bank-stadium',
  'tcf bank stadium': 'huntington-bank-stadium',
  'huntington bank field': 'huntington-bank-field',
  'progressive field': 'progressive-field',
  'rocket arena': 'rocket-arena',
  'rocket mortgage fieldhouse': 'rocket-arena',
  'wolstein center': 'wolstein-center',
  'target center': 'target-center',
  'grand casino arena': 'grand-casino-arena',
  'xcel energy center': 'grand-casino-arena',
  'allianz field': 'allianz-field',
  'the barn by blue cross and blue shield of minnesota': 'williams-arena',
  'williams arena': 'williams-arena',
  '3m arena at mariucci': 'mariucci-arena',
  'mariucci arena': 'mariucci-arena',
  'lee & penny anderson arena': 'anderson-arena',
  // New Orleans, as ESPN writes them (checked Oct 12, 2026).
  'caesars superdome': 'caesars-superdome',
  'mercedes-benz superdome': 'caesars-superdome',
  'smoothie king center': 'smoothie-king-center',
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
  'pontchartrain center': 'pontchartrain-center',
  'lee and penny anderson arena': 'anderson-arena',
  // Denver, as ESPN writes them on each team's own schedule (Oct 13, 2026).
  'empower field at mile high': 'empower-field',
  'sports authority field at mile high': 'empower-field',
  'invesco field at mile high': 'empower-field',
  'coors field': 'coors-field',
  'ball arena': 'ball-arena',
  'pepsi center': 'ball-arena',
  "dick's sporting goods park": 'dicks-sporting-goods-park',
  'dicks sporting goods park': 'dicks-sporting-goods-park',
  "fiddler's green amphitheatre": 'fiddlers-green-amphitheatre',
  'fiddlers green amphitheatre': 'fiddlers-green-amphitheatre',
  'centennial stadium': 'centennial-stadium',
  'magness arena': 'magness-arena',
  'hamilton gymnasium': 'hamilton-gymnasium',
  // Raleigh–Durham, as ESPN writes them on each team's own schedule (checked Oct 13, 2026). Keep in step with attendance-collect.mjs.
  'lenovo center': 'lenovo-center',
  'pnc arena': 'lenovo-center',
  'carter-finley stadium': 'carter-finley-stadium',
  'wayne day family field at carter-finley stadium': 'carter-finley-stadium',
  'kenan stadium': 'kenan-stadium',
  'kenan memorial stadium': 'kenan-stadium',
  'dean e. smith center': 'dean-smith-center',
  'dean smith center': 'dean-smith-center',
  'carmichael arena': 'carmichael-arena',
  'wallace wade stadium': 'wallace-wade-stadium',
  'brooks field at wallace wade stadium': 'wallace-wade-stadium',
  'cameron indoor stadium': 'cameron-indoor-stadium',
  'reynolds coliseum': 'reynolds-coliseum',
  'james t. valvano arena at william neal reynolds coliseum': 'reynolds-coliseum',
  'durham bulls athletic park': 'durham-bulls-athletic-park',
  'wakemed soccer park': 'first-horizon-stadium',
  'first horizon stadium': 'first-horizon-stadium',
  'first horizon stadium at wakemed soccer park': 'first-horizon-stadium',
  "sahlen's stadium": 'first-horizon-stadium',
  "o'kelly-riddick stadium": 'o-kelly-riddick-stadium',
  'mcdougald-mclendon arena': 'mcdougald-mclendon-arena',
  // Detroit (docs/research/city-builds/detroit/), as ESPN writes them on each team's own schedule (checked Oct 13, 2026).
  'ford field': 'ford-field',
  'comerica park': 'comerica-park',
  'little caesars arena': 'little-caesars-arena',
  'michigan stadium': 'michigan-stadium',
  'crisler center': 'crisler-center',
  'yost ice arena': 'yost-ice-arena',
  'calihan hall': 'calihan-hall',
  'keyworth stadium': 'keyworth-stadium',
  'wayne state fieldhouse': 'wayne-state-fieldhouse',
  // Portland, as ESPN writes them (checked Oct 13, 2026).
  'providence park': 'providence-park',
  'moda center': 'moda-center',
  'rose garden': 'moda-center',
  'veterans memorial coliseum': 'veterans-memorial-coliseum',
  'memorial coliseum': 'veterans-memorial-coliseum',
  'hillsboro stadium': 'hillsboro-stadium',
  'viking pavilion': 'viking-pavilion',
  'peter w. stott center': 'viking-pavilion',
  'peter w stott center': 'viking-pavilion',
  'chiles center': 'chiles-center',
  'earle a. & virginia h. chiles center': 'chiles-center',
  // San Antonio, as ESPN writes them (checked Oct 13, 2026). Moody Center Spurs games stay on Austin's room.
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
  // Washington, DC, as ESPN writes them (checked Oct 13, 2026).
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
  'canadian tire centre': 'canadian-tire-centre',
  'centre canadian tire': 'canadian-tire-centre',
  'td place stadium': 'td-place-stadium',
  'stade place td': 'td-place-stadium',
  'the arena at td place': 'arena-at-td-place',
  'td place arena': 'arena-at-td-place',
  'td place': 'arena-at-td-place',
  'ottawa stadium': 'ottawa-stadium',
  // Indianapolis, as ESPN writes them on each team's schedule (Oct 13, 2026).
  'lucas oil stadium': 'lucas-oil-stadium',
  'gainbridge fieldhouse': 'gainbridge-fieldhouse',
  'bankers life fieldhouse': 'gainbridge-fieldhouse',
  'hinkle fieldhouse': 'hinkle-fieldhouse',
  'victory field': 'victory-field',
  'bud and jackie sellick bowl': 'sellick-bowl',
  'the jungle': 'iu-indy-jungle',
  'busch stadium': 'busch-stadium',
  'enterprise center': 'enterprise-center',
  'energizer park': 'energizer-park',
  "the dome at america's center": 'dome-at-americas-center',
  'dome at americas center': 'dome-at-americas-center',
  'chaifetz arena': 'chaifetz-arena',
  'harlen c. hunter stadium': 'harlen-c-hunter-stadium',
  'hunter stadium': 'harlen-c-hunter-stadium',
  'hermann stadium': 'hermann-stadium',
  'robert r. hermann stadium': 'hermann-stadium',
  'first community arena at the vadalabene center': 'siue-vadalabene-arena',
  'vadalabene center': 'siue-vadalabene-arena',
  // Salt Lake City, as ESPN writes them (checked Oct 13, 2026).
  'delta center': 'delta-center',
  'vivint arena': 'delta-center',
  'vivint smart home arena': 'delta-center',
  'rice-eccles stadium': 'rice-eccles-stadium',
  'america first field': 'america-first-field',
  'rio tinto stadium': 'america-first-field',
  'jon m. huntsman center': 'jon-m-huntsman-center',
  'maverik center': 'maverik-center',
  'e center': 'maverik-center',
};

/** Same display name in different metros (Franklin Field = Penn football vs Milwaukee baseball). */
const METRO_VENUE_BY_NAME: Partial<Record<string, Record<string, string>>> = {
  pittsburgh: {
    'highmark stadium': 'fnb-stadium',
    'f.n.b. stadium': 'fnb-stadium',
  },
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
  // Atlanta already uses panther-stadium for Clark Atlanta. Prairie View's bowl is a different building.
  houston: {
    'panther stadium': 'pvamu-panther-stadium',
    'toyota center': 'toyota-center',
    // Rice–Totten Stadium in Mississippi is a different building. Keep this name on Houston only.
    'rice stadium': 'first-community-stadium',
  },
  denver: {
    'empower field at mile high': 'empower-field',
    'coors field': 'coors-field',
    'ball arena': 'ball-arena',
    "dick's sporting goods park": 'dicks-sporting-goods-park',
    'centennial stadium': 'centennial-stadium',
    'magness arena': 'magness-arena',
    'hamilton gymnasium': 'hamilton-gymnasium',
  },
  'st-louis': {
    'hollywood casino amphitheatre': 'hollywood-casino-amphitheatre-stl',
    'hollywood casino amphitheater': 'hollywood-casino-amphitheatre-stl',
    'family arena': 'family-arena',
  },
};

function venueIdForEspnName(name: string, metroId: string): string | undefined {
  const key = name.toLowerCase();
  return METRO_VENUE_BY_NAME[metroId]?.[key] ?? VENUE_BY_NAME[key];
}

interface EspnSide {
  homeAway: 'home' | 'away';
  team: { id: string; displayName: string; shortDisplayName: string };
  score?: { value?: number; displayValue?: string } | string | number;
}
interface EspnGame {
  id: string;
  date: string;
  /** False when the kickoff isn't set yet; `date` is then a midnight-Eastern placeholder. */
  timeValid?: boolean;
  season?: { slug?: string };
  seasonType?: { name?: string; abbreviation?: string };
  competitions: {
    timeValid?: boolean;
    neutralSite?: boolean;
    venue?: { fullName?: string };
    competitors: EspnSide[];
    status?: { type?: { name?: string; shortDetail?: string } };
    attendance?: number;
    broadcasts?: { type?: { shortName?: string }; market?: { type?: string }; media?: { shortName?: string } }[];
    notes?: { headline?: string }[];
    gameNumberOfSeries?: number;
    series?: { gameNumberOfSeries?: number } | { gameNumberOfSeries?: number }[];
  }[];
}

/**
 * Our own short name for a team we know (ESPN calls the Sounders "Seattle"); otherwise ESPN's.
 * Short names can collide (Sacramento Kings vs. LA Kings), so use the full name when they do.
 */
function nameOf(team: EspnSide['team']): string {
  const ours = Object.values(TEAMS).find((t) => t.metroId && t.name === team.displayName);
  if (ours) return ours.shortName.trim();
  const clash = Object.values(TEAMS).some((t) => t.shortName === team.shortDisplayName && t.name !== team.displayName);
  return (clash ? team.displayName : team.shortDisplayName).trim();
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Visitor team id for favorites and draws; uses our registry when ESPN's id matches (C11: Arizona ≠ St. Louis). */
function awayTeamId(away: EspnSide['team'], home: (typeof ESPN_TEAMS)[number]): string {
  const match = ESPN_TEAMS.find((row) => row.espnId === away.id && row.path === home.path);
  if (match) return match.teamId;
  return slug(away.shortDisplayName ?? nameOf(away));
}

function localParts(iso: string, timeZone: string): { date: LocalDate; time: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

/** The TV station, national first. Radio and streaming-only rows are skipped. */
function tvStation(rows: NonNullable<EspnGame['competitions'][number]['broadcasts']> = []): string | undefined {
  const tv = rows.filter((b) => b.type?.shortName === 'TV' && b.media?.shortName);
  const pick = tv.find((b) => b.market?.type === 'National') ?? tv[0];
  return pick?.media?.shortName;
}

function toEvent(g: EspnGame, t: (typeof ESPN_TEAMS)[number]): CrowdEvent | null {
  const c = g.competitions[0];
  const home = c?.competitors.find((x) => x.homeAway === 'home');
  const away = c?.competitors.find((x) => x.homeAway === 'away');
  const venueId = venueIdForEspnName(c?.venue?.fullName ?? '', t.metroId);
  if (!home || !away || home.team.id !== t.espnId || !venueId) return null;
  if (/postponed|cancel/i.test(c.status?.type?.name ?? '')) return null;

  // No kickoff yet: ESPN sends midnight Eastern as a stand-in. Converting that
  // to Pacific lands on 9:00 pm the day before, so take the calendar date as
  // ESPN wrote it (Eastern) and leave the time blank rather than invent one.
  const timeSet = g.timeValid !== false && c.timeValid !== false;
  // A home game played in another covered city belongs to that city's day (the venue's metro), in its time zone.
  const eventMetro = metroForVenue(venueId, t.metroId);
  const { date, time } = timeSet
    ? localParts(g.date, METROS[eventMetro].timeZone)
    : { date: localParts(g.date, 'America/New_York').date, time: null };
  const league = leagueFromPath(t.path);
  const stakes = league ? espnStakes(g, league) : otherPostseason(g, t.path);
  const broadcast = tvStation(c.broadcasts);
  return {
    id: `${date}-espn-${t.teamId}-${g.id}`,
    metroId: eventMetro,
    date,
    start: time,
    kind: 'game',
    title: `${nameOf(home.team)} vs. ${nameOf(away.team)}`,
    ...(stakes ? { stakes } : {}),
    ...(g.seasonType?.abbreviation === 'pre' ? { preseason: true } : {}),
    ...(broadcast ? { broadcast } : {}),
    place: { type: 'venue', venueId },
    audience: { domain: 'sports', sport: t.sport },
    // Away id matches TEAMS when we cover the visitor (C11); awayOpponent keeps draw ratios on listing slugs.
    teams: {
      home: t.teamId,
      away: awayTeamId(away.team, t),
      awayOpponent: slug(away.team.shortDisplayName ?? nameOf(away.team)),
    },
    ...(c.neutralSite ? { neutralSite: true } : {}),
    crowd: [],
    sourceId: 'espn',
  };
}

const cache = new Map<string, Promise<CrowdEvent[]>>();

async function scheduleFor(t: (typeof ESPN_TEAMS)[number], strict: boolean, season?: number): Promise<EspnGame[]> {
  // Default is preseason, seasontype=2 is the regular season, seasontype=3 is the postseason.
  // Soccer is different: the plain schedule lists only matches already played, and the
  // season-type queries come back empty. Upcoming fixtures need `fixture=true`.
  // A past season is asked for by year: the year it ends for winter sports, the calendar year otherwise.
  const queries =
    season === undefined
      ? ['', '?seasontype=2', '?seasontype=3', ...(t.path.startsWith('soccer/') ? ['?fixture=true'] : [])]
      : [`?season=${season}`, `?season=${season}&seasontype=2`, `?season=${season}&seasontype=3`];
  const urls = queries.map((q) => `${API}/${t.path}/teams/${t.espnId}/schedule${q}`);
  const lists = await Promise.all(
    urls.map(async (u) => {
      try {
        const r = await fetchRetry(u);
        if (!r.ok) {
          // 404 is a season that team does not have. Anything else, in a strict
          // read, means the listing is incomplete and must not be saved.
          if (strict && r.status !== 404) throw new Error(`ESPN schedule for ${t.teamId} answered ${r.status}`);
          return [] as EspnGame[];
        }
        const j = (await r.json()) as { events?: EspnGame[] };
        return j.events ?? [];
      } catch (err) {
        if (strict) throw err;
        return [] as EspnGame[];
      }
    }),
  );
  return lists.flat();
}

/** The team's first regular-season home game in this listing (it sizes from past openers). */
function homeOpenerId(games: EspnGame[], espnId: string): string | undefined {
  const home = games.filter(
    (g) => g.seasonType?.abbreviation === 'reg' && g.competitions[0]?.competitors.some((x) => x.homeAway === 'home' && x.team.id === espnId),
  );
  home.sort((a, b) => a.date.localeCompare(b.date));
  return home[0]?.id;
}

function upcomingFor(metroId: string, strict = false): Promise<CrowdEvent[]> {
  if (!strict) {
    const hit = cache.get(metroId);
    if (hit) return hit;
  }
  const tz = METROS[metroId].timeZone;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: tz });
  const end = new Date(Date.now() + DAYS_AHEAD * 86_400_000).toLocaleDateString('en-CA', { timeZone: tz });

  const p = Promise.all(
    ESPN_TEAMS.filter((t) => t.metroId === metroId).map(async (t) => {
      const games = await scheduleFor(t, strict);
      const openerId = homeOpenerId(games, t.espnId);
      return games.map((g) => {
        const e = toEvent(g, t);
        return e && g.id === openerId ? { ...e, homeOpener: true } : e;
      });
    }),
  ).then((lists) => {
    const seen = new Set<string>();
    return lists
      .flat()
      .filter((e): e is CrowdEvent => e !== null && e.date >= today && e.date <= end)
      .filter((e) => !seen.has(e.id) && seen.add(e.id))
      .sort((a, b) => (a.date + (a.start ?? '99:99')).localeCompare(b.date + (b.start ?? '99:99')));
  });
  if (!strict) cache.set(metroId, p);
  return p;
}

function scoreOf(side: EspnSide): number | undefined {
  const s = side.score;
  if (s == null) return undefined;
  if (typeof s === 'number') return s;
  if (typeof s === 'string') return Number.isFinite(Number(s)) ? Number(s) : undefined;
  if (typeof s.value === 'number') return s.value;
  const n = Number(s.displayValue);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * How long a finished game ran, from the first and last play's wall-clock
 * stamps on ESPN's game page. An estimate: the first stamp is the first play,
 * not the anthem, and the last is the final play. Undefined when the page has
 * no stamps. One extra request per finished game.
 */
async function playClockSpan(path: string, gameId: string): Promise<{ minutes: number; startedAt: LocalTime } | undefined> {
  try {
    const r = await fetchRetry(`${API}/${path}/summary?event=${gameId}`);
    if (!r.ok) return undefined;
    const json = (await r.json()) as {
      plays?: { wallclock?: string }[];
      drives?: { previous?: { plays?: { wallclock?: string }[] }[] };
    };
    const plays = json.plays ?? (json.drives?.previous ?? []).flatMap((d) => d.plays ?? []);
    const stamps = plays.map((p) => p.wallclock).filter((w): w is string => Boolean(w)).map((w) => new Date(w).getTime()).filter(Number.isFinite).sort((a, b) => a - b);
    if (stamps.length < 10) return undefined;
    const minutes = Math.round((stamps[stamps.length - 1] - stamps[0]) / 60_000);
    if (minutes < 60 || minutes > 360) return undefined;
    const zone = METROS[ESPN_TEAMS.find((t) => t.path === path)?.metroId ?? 'la'].timeZone;
    return { minutes, startedAt: localParts(new Date(stamps[0]).toISOString(), zone).time };
  } catch {
    return undefined;
  }
}

/** The result row for a finished game, or null when it isn't final or a score is missing. */
function finalOf(g: EspnGame, event: CrowdEvent, metroId: string, capturedAt: string): GameResult | null {
  const c = g.competitions[0];
  // Soccer says STATUS_FULL_TIME; everything else says STATUS_FINAL.
  if (!/^STATUS_(FINAL|FULL_TIME)/.test(c?.status?.type?.name ?? '')) return null;
  const home = c.competitors.find((x) => x.homeAway === 'home');
  const away = c.competitors.find((x) => x.homeAway === 'away');
  const hs = home ? scoreOf(home) : undefined;
  const as = away ? scoreOf(away) : undefined;
  if (!home || !away || hs == null || as == null) return null;
  const detail = c.status?.type?.shortDetail ?? '';
  const note = /OT|SO|\/\d/.test(detail) ? detail.replace(/^Final/i, '').replace(/^\//, '').trim() : undefined;
  return {
    eventId: event.id,
    metroId,
    date: event.date,
    sourceId: 'espn',
    status: 'final',
    ...(event.place.type === 'venue' ? { venueId: event.place.venueId } : {}),
    ...(event.teams ? { homeTeamId: event.teams.home } : {}),
    home: { name: nameOf(home.team), score: hs },
    away: { name: nameOf(away.team), score: as },
    ...(typeof c.attendance === 'number' && c.attendance > 0 ? { attendance: c.attendance } : {}),
    ...(note ? { note } : {}),
    capturedAt,
  };
}

/**
 * Finished home games between two dates, with the score, announced crowd and
 * how long the game ran. For the nightly results pass. Throws when a team
 * schedule can't be read; a missing game page only leaves the length off.
 */
export async function loadEspnFinals(metroId: string, from: LocalDate, through: LocalDate): Promise<GameResult[]> {
  const capturedAt = new Date().toISOString();
  const spans = new Map<string, Promise<{ minutes: number; startedAt: LocalTime } | undefined>>();
  const lists = await Promise.all(
    ESPN_TEAMS.filter((t) => t.metroId === metroId).map(async (t) =>
      (await scheduleFor(t, true)).flatMap((g): GameResult[] => {
        const event = toEvent(g, t);
        if (!event || event.date < from || event.date > through) return [];
        const row = finalOf(g, event, metroId, capturedAt);
        if (!row) return [];
        spans.set(event.id, playClockSpan(t.path, g.id));
        return [row];
      }),
    ),
  );
  const seen = new Set<string>();
  const rows = lists.flat().filter((row) => !seen.has(row.eventId) && seen.add(row.eventId));
  for (const row of rows) {
    const span = await spans.get(row.eventId);
    if (span) {
      row.duration = { minutes: span.minutes, kind: 'estimated' };
      row.startedAt = span.startedAt;
    }
  }
  return rows;
}

/**
 * Home games for the metro. Throws if a team schedule cannot be read.
 * The map does not call this: it uses `espnEvents`, which still returns an
 * empty list when a feed is down.
 */
export function loadEspnSchedule(metroId: string): Promise<CrowdEvent[]> {
  return upcomingFor(metroId, true);
}

/** The dates of a team's home games in its own city over past seasons (scripts/past-dates-load.mjs --teams). Null for a team this feed doesn't carry. */
export async function espnHomeDates(teamId: string, seasons: number[]): Promise<LocalDate[] | null> {
  const t = ESPN_TEAMS.find((x) => x.teamId === teamId);
  if (!t) return null;
  const dates = new Set<LocalDate>();
  for (const season of seasons) {
    for (const g of await scheduleFor(t, true, season)) {
      const event = toEvent(g, t);
      if (event && event.metroId === t.metroId) dates.add(event.date);
    }
  }
  return [...dates].sort();
}

/**
 * Home games on given past dates, with their results: for dates before the
 * nightly archive began (scripts/past-dates-load.mjs). Each date's year and the
 * next are asked for, which covers seasons named for the year they end.
 * Throws when a team schedule can't be read.
 */
export async function loadEspnPastDates(metroId: string, dates: LocalDate[]): Promise<{ events: CrowdEvent[]; results: GameResult[] }> {
  const want = new Set(dates);
  const seasons = [...new Set(dates.flatMap((d) => [Number(d.slice(0, 4)), Number(d.slice(0, 4)) + 1]))].sort();
  const capturedAt = new Date().toISOString();
  const events = new Map<string, CrowdEvent>();
  const results = new Map<string, GameResult>();
  // One team-season at a time: a decade of dates is hundreds of schedule reads, and all at once fails.
  for (const t of ESPN_TEAMS.filter((x) => x.metroId === metroId)) {
    for (const season of seasons) {
      const games = await scheduleFor(t, true, season);
      // Each season is read on its own, so its first home game is that season's opener.
      const openerId = homeOpenerId(games, t.espnId);
      for (const g of games) {
        const event = toEvent(g, t);
        if (!event || !want.has(event.date) || events.has(event.id)) continue;
        events.set(event.id, g.id === openerId ? { ...event, homeOpener: true } : event);
        const row = finalOf(g, event, metroId, capturedAt);
        if (!row) continue;
        // One game page at a time: hundreds at once get connections dropped.
        const span = await playClockSpan(t.path, g.id);
        if (span) {
          row.duration = { minutes: span.minutes, kind: 'estimated' };
          row.startedAt = span.startedAt;
        }
        results.set(event.id, row);
      }
    }
  }
  return { events: [...events.values()], results: [...results.values()] };
}

/** One team's games this season, home and away, with scores where a game is final. */
export async function espnTeamSchedule(teamId: string): Promise<TeamGame[] | null> {
  const t = ESPN_TEAMS.find((x) => x.teamId === teamId);
  if (!t) return null;
  const games = await scheduleFor(t, false);
  if (games.length === 0) return null;
  const tz = METROS[t.metroId].timeZone;
  const seen = new Set<string>();
  return games
    .flatMap((g): TeamGame[] => {
      const c = g.competitions[0];
      const us = c?.competitors.find((x) => x.team.id === t.espnId);
      const them = c?.competitors.find((x) => x.team.id !== t.espnId);
      if (!c || !us || !them || seen.has(g.id)) return [];
      seen.add(g.id);
      if (/postponed|cancel/i.test(c.status?.type?.name ?? '')) return [];
      const timeSet = g.timeValid !== false && c.timeValid !== false;
      const { date, time } = timeSet ? localParts(g.date, tz) : { date: localParts(g.date, 'America/New_York').date, time: null };
      const home = us.homeAway === 'home';
      const final = /^STATUS_(FINAL|FULL_TIME)/.test(c.status?.type?.name ?? '');
      const ours = scoreOf(us);
      const theirs = scoreOf(them);
      // The home side's own event in a city the app covers, so the row can open that night.
      const hostId = home ? t.espnId : them.team.id;
      const host = ESPN_TEAMS.find((x) => x.path === t.path && x.espnId === hostId);
      const eventId =
        host && venueIdForEspnName(c.venue?.fullName ?? '', host.metroId)
          ? `${date}-espn-${host.teamId}-${g.id}`
          : undefined;
      return [
        {
          id: `espn-${t.teamId}-${g.id}`,
          date,
          start: time,
          home,
          ...(c.neutralSite ? { neutral: true } : {}),
          opponent: nameOf(them.team),
          ...(c.venue?.fullName ? { venueName: c.venue.fullName } : {}),
          ...(g.seasonType?.abbreviation === 'pre' ? { preseason: true } : {}),
          ...(final && ours != null && theirs != null ? { score: { us: ours, them: theirs } } : {}),
          ...(eventId ? { eventId, eventMetroId: host!.metroId } : {}),
        },
      ];
    })
    .sort((a, b) => (a.date + (a.start ?? '99:99')).localeCompare(b.date + (b.start ?? '99:99')));
}

export const espnEvents: EventSource = {
  id: 'espn',
  name: 'ESPN schedules',
  eventsOn: async (metroId, date) => (await upcomingFor(metroId)).filter((e) => e.date === date),
  upcoming: async (metroId, fromDate) => (await upcomingFor(metroId)).filter((e) => e.date >= fromDate),
  catalog: (metroId) => upcomingFor(metroId),
};
