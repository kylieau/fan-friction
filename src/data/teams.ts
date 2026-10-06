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
const program = (school: 'ucla' | 'usc', schoolName: string, code: string, sport: string, league: string, label: string, aliases: string[]) =>
  team(`${school}-${code}`, `${schoolName} ${label}`, `${school.toUpperCase()} ${code.toUpperCase()}`, league, sport, 'la', school.toUpperCase(), aliases);

const LIST: Team[] = [
  // LA
  team('dodgers', 'Los Angeles Dodgers', 'Dodgers', 'MLB', 'baseball', 'la', 'LAD'),
  team('angels', 'Los Angeles Angels', 'Angels', 'MLB', 'baseball', 'la', 'LAA'),
  team('padres', 'San Diego Padres', 'Padres', 'MLB', 'baseball', 'san-diego', 'SD'),
  team('san-diego-fc', 'San Diego FC', 'San Diego FC', 'MLS', 'soccer', 'san-diego', 'SD'),
  team('wave', 'San Diego Wave FC', 'Wave', 'NWSL', 'soccer', 'san-diego', 'SD'),
  team('sdsu-football', 'San Diego State Aztecs Football', 'SDSU', 'College football', 'football', 'san-diego', 'SDSU', ['Aztecs']),
  team('sdsu-mbb', 'San Diego State Aztecs Men\'s Basketball', 'SDSU', "College men's basketball", 'basketball', 'san-diego', 'SDSU', ['Aztecs']),
  team('sdsu-wbb', 'San Diego State Aztecs Women\'s Basketball', 'SDSU', "College women's basketball", 'basketball', 'san-diego', 'SDSU', ['Aztecs']),
  team('lakers', 'Los Angeles Lakers', 'Lakers', 'NBA', 'basketball', 'la', 'LAL'),
  team('clippers', 'LA Clippers', 'Clippers', 'NBA', 'basketball', 'la', 'LAC'),
  team('kings', 'Los Angeles Kings', 'Kings', 'NHL', 'hockey', 'la', 'LAK'),
  team('ducks', 'Anaheim Ducks', 'Ducks', 'NHL', 'hockey', 'la', 'ANA'),
  team('galaxy', 'LA Galaxy', 'Galaxy', 'MLS', 'soccer', 'la', 'LAG'),
  team('lafc', 'Los Angeles FC', 'LAFC', 'MLS', 'soccer', 'la', 'LAFC'),
  team('angel-city', 'Angel City FC', 'Angel City', 'NWSL', 'soccer', 'la', 'ACFC'),
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
