// Competitions a hand-typed game can belong to (the second opinion of Oct 6,
// 2026: say "competition", not "league", so cups and tournaments fit). Picking
// one sets the level and, where the competition implies it, the division.
// US-centric list for v1; the shape is worldwide. Anything else can be typed.

import type { Division, SportsLevel } from './types';

export interface Competition {
  name: string;
  /** The sport's display word, as the Add form's chips say it. */
  sport: string;
  level: SportsLevel;
  division?: Division;
}

export const SPORTS_SHOWN = ['Football', 'Basketball', 'Baseball', 'Soccer', 'Hockey', 'Volleyball'];
export const SPORTS_MORE = [
  'Softball',
  'Lacrosse',
  'Tennis',
  'Golf',
  'Motorsport',
  'Boxing',
  'MMA',
  'Wrestling',
  'Rugby union',
  'Rugby league',
  'Cricket',
  'Aussie rules',
  'Track & field',
  'Other',
];

export const LEVELS: { level: SportsLevel; label: string }[] = [
  { level: 'pro', label: 'Pro' },
  { level: 'lower', label: 'Minor league' },
  { level: 'college', label: 'College' },
  { level: 'school', label: 'High school' },
  { level: 'amateur', label: 'Club' },
];

/** Division chips by level. High school says boys and girls; the stored value is the same. */
export function divisionChoices(level: SportsLevel): { division: Division; label: string }[] {
  if (level === 'school') {
    return [
      { division: 'men', label: 'Boys' },
      { division: 'women', label: 'Girls' },
    ];
  }
  const base: { division: Division; label: string }[] = [
    { division: 'men', label: "Men's" },
    { division: 'women', label: "Women's" },
  ];
  return level === 'amateur' ? [...base, { division: 'mixed', label: 'Mixed' }] : base;
}

const c = (name: string, sport: string, level: SportsLevel, division?: Division): Competition => ({
  name,
  sport,
  level,
  ...(division ? { division } : {}),
});

export const COMPETITIONS: Competition[] = [
  c('MLB', 'Baseball', 'pro', 'men'),
  c('Triple-A', 'Baseball', 'lower', 'men'),
  c('Double-A', 'Baseball', 'lower', 'men'),
  c('High-A', 'Baseball', 'lower', 'men'),
  c('Single-A', 'Baseball', 'lower', 'men'),
  c('Independent league', 'Baseball', 'lower', 'men'),
  c('NBA', 'Basketball', 'pro', 'men'),
  c('WNBA', 'Basketball', 'pro', 'women'),
  c('G League', 'Basketball', 'lower', 'men'),
  c('NFL', 'Football', 'pro', 'men'),
  c('UFL', 'Football', 'pro', 'men'),
  c('CFL', 'Football', 'pro', 'men'),
  c('NHL', 'Hockey', 'pro', 'men'),
  c('PWHL', 'Hockey', 'pro', 'women'),
  c('AHL', 'Hockey', 'lower', 'men'),
  c('ECHL', 'Hockey', 'lower', 'men'),
  c('MLS', 'Soccer', 'pro', 'men'),
  c('NWSL', 'Soccer', 'pro', 'women'),
  c('Liga MX', 'Soccer', 'pro', 'men'),
  c('Premier League', 'Soccer', 'pro', 'men'),
  c('Leagues Cup', 'Soccer', 'pro', 'men'),
  c('FIFA World Cup', 'Soccer', 'pro'),
  c('USL Championship', 'Soccer', 'lower', 'men'),
  c('USL League One', 'Soccer', 'lower', 'men'),
  c('NCAA D-I', '*', 'college'),
  c('NCAA D-II', '*', 'college'),
  c('NCAA D-III', '*', 'college'),
  c('NAIA', '*', 'college'),
  c('JUCO', '*', 'college'),
];

/** Suggestions for one sport (and level, when picked). College bodies apply to every sport. */
export function competitionsFor(sport: string, level?: SportsLevel): Competition[] {
  return COMPETITIONS.filter((comp) => (comp.sport === sport || comp.sport === '*') && (!level || comp.level === level));
}

export function competitionNamed(name: string): Competition | undefined {
  const q = name.trim().toLowerCase();
  return COMPETITIONS.find((comp) => comp.name.toLowerCase() === q);
}

/** "Women's college", "High school", "Pro", "Minor league", "Club". The row's phrase when no competition is named. */
export function levelPhrase(level: SportsLevel, division?: Division): string {
  const word = LEVELS.find((row) => row.level === level)?.label ?? level;
  if (level === 'school') return division === 'women' ? "Girls' high school" : division === 'men' ? "Boys' high school" : word;
  if (division === 'women') return `Women's ${word.toLowerCase()}`;
  if (division === 'mixed') return `Mixed ${word.toLowerCase()}`;
  return word;
}
