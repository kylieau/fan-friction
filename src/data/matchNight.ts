// Which nights a search should find. A query matches a team, an artist, or a
// venue (including an old name, such as Staples Center). The event title is a
// backup for nights that have no team record, such as the East LA Classic.

import type { CrowdEvent } from './types';
import { TEAMS } from './teams';
import { VENUES } from './venues';

function fold(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

function tokens(value: string): string[] {
  return fold(value).split(/[^a-z0-9]+/).filter(Boolean);
}

/** Names a person would type for this event. */
export function nightNames(event: CrowdEvent): string[] {
  const names: string[] = [];
  if (event.teams) {
    for (const id of [event.teams.home, event.teams.away]) {
      const team = TEAMS[id];
      if (team) names.push(team.shortName, team.name);
    }
  }
  if (event.performer) names.push(event.performer);
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    if (venue) names.push(...venue.names.map((n) => n.name));
  } else {
    names.push(event.place.name);
  }
  names.push(event.title);
  return names;
}

function fieldHits(query: string, field: string): boolean {
  const parts = fold(query).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return false;
  const fieldTokens = tokens(field);
  // A whole word, or (at 3+ letters) the start of one. "ing" does not match Kings.
  const partHits = (part: string) =>
    fieldTokens.some((token) => token === part || (part.length >= 3 && token.startsWith(part)));
  return parts.every(partHits);
}

/**
 * The names that matched, shortest first, or null when nothing did.
 * Two letters have to match a whole word ("LA", "ELO"), so "we" does not
 * match The Weeknd. Three or more letters can match the start of a word
 * ("Dodger" finds Dodgers, "Beyonce" finds Beyoncé).
 */
export function matchingNames(event: CrowdEvent, query: string): string[] | null {
  const q = query.trim();
  if (fold(q).trim().length < 2) return null;
  const hits = nightNames(event).filter((name) => fieldHits(q, name));
  if (hits.length === 0) return null;
  const specific = hits.filter((name) => name !== event.title);
  const chosen = (specific.length > 0 ? specific : hits).slice().sort((a, b) => a.length - b.length);
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const name of chosen) {
    const key = fold(name);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(name);
  }
  return unique;
}
