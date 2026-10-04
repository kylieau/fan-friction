// Teams as their own records. Home teams carry a metro; visiting teams don't.

import type { Team } from './types';

const team = (id: string, name: string, shortName: string, league: string, sport: string, metroId?: string): Team => ({
  id,
  name,
  shortName,
  league,
  sport,
  metroId,
});

const LIST: Team[] = [
  // LA
  team('dodgers', 'Los Angeles Dodgers', 'Dodgers', 'MLB', 'baseball', 'la'),
  team('angels', 'Los Angeles Angels', 'Angels', 'MLB', 'baseball', 'la'),
  team('lakers', 'Los Angeles Lakers', 'Lakers', 'NBA', 'basketball', 'la'),
  team('clippers', 'LA Clippers', 'Clippers', 'NBA', 'basketball', 'la'),
  team('kings', 'Los Angeles Kings', 'Kings', 'NHL', 'hockey', 'la'),
  team('ducks', 'Anaheim Ducks', 'Ducks', 'NHL', 'hockey', 'la'),
  team('galaxy', 'LA Galaxy', 'Galaxy', 'MLS', 'soccer', 'la'),
  team('rams', 'Los Angeles Rams', 'Rams', 'NFL', 'football', 'la'),
  team('chargers', 'Los Angeles Chargers', 'Chargers', 'NFL', 'football', 'la'),
  team('usc-football', 'USC Trojans', 'USC', 'College football', 'football', 'la'),
  team('ucla-football', 'UCLA Bruins', 'UCLA', 'College football', 'football', 'la'),
  // Visitors
  team('yankees', 'New York Yankees', 'Yankees', 'MLB', 'baseball'),
  team('blue-jays', 'Toronto Blue Jays', 'Blue Jays', 'MLB', 'baseball'),
  team('marlins', 'Miami Marlins', 'Marlins', 'MLB', 'baseball'),
  team('braves', 'Atlanta Braves', 'Braves', 'MLB', 'baseball'),
  team('giants', 'San Francisco Giants', 'Giants', 'MLB', 'baseball'),
  team('mariners', 'Seattle Mariners', 'Mariners', 'MLB', 'baseball'),
  team('rockies', 'Colorado Rockies', 'Rockies', 'MLB', 'baseball'),
  team('rangers', 'Texas Rangers', 'Rangers', 'MLB', 'baseball'),
  team('padres', 'San Diego Padres', 'Padres', 'MLB', 'baseball'),
  team('suns', 'Phoenix Suns', 'Suns', 'NBA', 'basketball'),
  team('spurs', 'San Antonio Spurs', 'Spurs', 'NBA', 'basketball'),
  team('blazers', 'Portland Trail Blazers', 'Blazers', 'NBA', 'basketball'),
  team('utah-hc', 'Utah Hockey Club', 'Utah', 'NHL', 'hockey'),
  team('jets', 'Winnipeg Jets', 'Jets', 'NHL', 'hockey'),
  team('panthers', 'Florida Panthers', 'Panthers', 'NHL', 'hockey'),
  team('rapids', 'Colorado Rapids', 'Rapids', 'MLS', 'soccer'),
  team('cruz-azul', 'Cruz Azul', 'Cruz Azul', 'Liga MX', 'soccer'),
  team('colts', 'Indianapolis Colts', 'Colts', 'NFL', 'football'),
  team('dolphins', 'Miami Dolphins', 'Dolphins', 'NFL', 'football'),
  team('washington', 'Washington', 'Washington', 'NFL', 'football'),
  team('rutgers', 'Rutgers Scarlet Knights', 'Rutgers', 'College football', 'football'),
  team('washington-huskies', 'Washington Huskies', 'Huskies', 'College football', 'football'),
  team('bowling-green', 'Bowling Green Falcons', 'Bowling Green', 'College football', 'football'),
  team('rice', 'Rice Owls', 'Rice', 'College football', 'football'),
];

export const TEAMS: Record<string, Team> = Object.fromEntries(LIST.map((t) => [t.id, t]));
