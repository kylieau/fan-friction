// How a city's fans get to big events, in plain words (build 5, N1/B1; Kylie, Oct 14: describe the type, don't name
// it; one sentence pattern per type). Wording from docs/research/topics/city-type-plain-words-answer.md, section 2.
// The type itself is the read's (`formula/gridlock.ts`); a city whose truest sentence differs from its type's gets its
// own line here, and its type is left alone (no number changes; the research's suggested type moves are a later call).

import { METROS } from '../config/metros';
import { cityTypeOf, type CityType } from './formula/gridlock';

const PATTERN: Record<CityType, string> = {
  sprawl: 'most fans drive to events.',
  hub: 'most fans drive to events; some take transit.',
  transit: 'most fans take transit or walk to events.',
};

/**
 * Cities whose sentence isn't their type's (Kylie, Oct 14, dictated "Okay, cause them", read as "change their wording"): Atlanta reads hub (about a third of Falcons
 * fans by transit, 2014 survey), Ottawa–Gatineau reads sprawl (game buses cut for low ridership, 2018), Las Vegas
 * walks from the Strip (the stadium's own guidance; no share published).
 */
const OWN_LINE: Record<string, string> = {
  atlanta: PATTERN.hub,
  'ottawa-gatineau': PATTERN.sprawl,
  'las-vegas': 'many fans walk over from the Strip; most others drive.',
};

/** "Los Angeles: most fans drive to events." Null for a city the app doesn't know. */
export function cityTravelLine(metroId: string): string | null {
  const metro = METROS[metroId];
  if (!metro) return null;
  return `${metro.name}: ${OWN_LINE[metroId] ?? PATTERN[cityTypeOf(metroId)]}`;
}
