// UCLA's home games in the sports no feed carries, copied once by hand from UCLA's own schedule pages (Kylie, Oct 27,
// 2026: "use ESPN for the sports that are available, do a one-time copy now and set a reminder to check again once
// december rolls around"; scope: the ticketed sports). UCLA's site runs on WMT Digital, whose terms bar automated
// reading, so nothing reads it nightly: this is one read, extending her Oct 27 personal-use reading to it once. The
// rows go stale when UCLA moves a game; the December recheck (MEMORY_HANDOFF.md) replaces them.
//
// Read Oct 27, 2026 (Pacific), home games only, the facts of each game and nothing of the page (no results):
//   https://uclabruins.com/sports/mens-soccer/schedule/2026, .../womens-soccer/schedule/2026, .../mens-water-polo/schedule
// Not here: football, both basketball teams and women's volleyball (ESPN; men's volleyball joins from ESPN once it
// posts 2027); the intrasquad "Blue vs. Gold" and the Alumni Game in water polo (no opponent). Not posted on Oct 27:
// the 2027 spring schedules (baseball, softball, gymnastics, women's water polo), for the December recheck.
// Other schools' calendar feeds also list some of these games; the one-game rule and the merge keep one copy.

import type { CrowdEvent, Division } from '../types';

const SOURCE_ID = 'school-site';

const PROGRAMS: Record<string, { sport: string; division: Division }> = {
  'ucla-msoc': { sport: 'soccer', division: 'men' },
  'ucla-wsoc': { sport: 'soccer', division: 'women' },
  'ucla-mwp': { sport: 'water polo', division: 'men' },
};

const game = (date: string, start: string | null, home: string, opponent: string, venueId: string, exhibition = false): CrowdEvent => ({
  id: `${date}-school-${home}-${opponent.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  metroId: 'la',
  date,
  start,
  kind: 'game',
  title: `UCLA vs. ${opponent}`,
  ...(exhibition ? { preseason: true } : {}),
  place: { type: 'venue', venueId },
  audience: { domain: 'sports', sport: PROGRAMS[home].sport, level: 'college', division: PROGRAMS[home].division },
  teams: { home, away: opponent, awayOpponent: opponent.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
  crowd: [],
  sourceId: SOURCE_ID,
});

export const UCLA_SCHEDULE_2026_EVENTS: CrowdEvent[] = [
  game('2026-08-07', '19:30', 'ucla-msoc', "UC Riverside", 'wallis-annenberg-stadium', true),
  game('2026-08-11', '19:30', 'ucla-msoc', "UC Irvine", 'wallis-annenberg-stadium', true),
  game('2026-08-12', '19:00', 'ucla-wsoc', "BYU", 'wallis-annenberg-stadium'),
  game('2026-08-15', '19:30', 'ucla-msoc', "UNLV", 'wallis-annenberg-stadium', true),
  game('2026-08-16', '18:00', 'ucla-wsoc', "Duke", 'wallis-annenberg-stadium'),
  game('2026-08-20', '19:00', 'ucla-wsoc', "San Diego", 'wallis-annenberg-stadium'),
  game('2026-08-24', '19:00', 'ucla-msoc', "CSU Bakersfield", 'wallis-annenberg-stadium'),
  game('2026-08-28', '19:00', 'ucla-msoc', "Denver", 'wallis-annenberg-stadium'),
  game('2026-09-04', '19:00', 'ucla-wsoc', "Pepperdine", 'wallis-annenberg-stadium'),
  game('2026-09-06', '20:30', 'ucla-msoc', "Omaha", 'wallis-annenberg-stadium'),
  game('2026-09-10', '19:00', 'ucla-wsoc', "Purdue", 'wallis-annenberg-stadium'),
  game('2026-09-12', '10:00', 'ucla-mwp', "UC Santa Barbara", 'spieker-aquatics-center'),
  game('2026-09-12', '12:30', 'ucla-mwp', "LMU", 'spieker-aquatics-center'),
  game('2026-09-13', '13:00', 'ucla-wsoc', "Michigan State", 'wallis-annenberg-stadium'),
  game('2026-09-17', '18:00', 'ucla-wsoc', "Ohio State", 'wallis-annenberg-stadium'),
  game('2026-09-18', '19:00', 'ucla-msoc', "Michigan", 'wallis-annenberg-stadium'),
  game('2026-09-25', '17:00', 'ucla-mwp', "Fordham", 'spieker-aquatics-center'),
  game('2026-10-03', '13:00', 'ucla-mwp', "Stanford", 'spieker-aquatics-center'),
  game('2026-10-03', '18:00', 'ucla-msoc', "Michigan State", 'wallis-annenberg-stadium'),
  game('2026-10-04', '13:00', 'ucla-mwp', "California", 'spieker-aquatics-center'),
  game('2026-10-06', '19:00', 'ucla-msoc', "Westmont", 'wallis-annenberg-stadium'),
  game('2026-10-08', '19:00', 'ucla-wsoc', "Indiana", 'wallis-annenberg-stadium'),
  game('2026-10-10', '13:00', 'ucla-mwp', "Golden West College", 'spieker-aquatics-center', true),
  game('2026-10-10', '18:00', 'ucla-msoc', "Ohio State", 'wallis-annenberg-stadium'),
  game('2026-10-10', '18:00', 'ucla-mwp', "California Baptist", 'spieker-aquatics-center'),
  game('2026-10-11', '13:00', 'ucla-wsoc', "Illinois", 'wallis-annenberg-stadium'),
  game('2026-10-16', '20:00', 'ucla-wsoc', "Washington", 'wallis-annenberg-stadium'),
  game('2026-10-25', '18:00', 'ucla-msoc', "San Diego", 'wallis-annenberg-stadium'),
  game('2026-10-30', '19:00', 'ucla-msoc', "Indiana", 'wallis-annenberg-stadium'),
  game('2026-11-04', '17:00', 'ucla-msoc', "Washington", 'wallis-annenberg-stadium'),
  game('2026-11-07', '13:00', 'ucla-mwp', "UC San Diego", 'spieker-aquatics-center'),
  game('2026-11-14', '13:00', 'ucla-mwp', "USC", 'spieker-aquatics-center'),
];
