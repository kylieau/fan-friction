import type { CrowdEvent } from './types';

/**
 * The genre word an artist carries, the way a team carries a sport and a league (Kylie, Oct 19, 2026, her answers to
 * `docs/product/artist-genres-proposal.md`). The seller's first-level genre maps onto the research's top-level
 * categories through this table; the seller's second level is not read (a live pull showed "Rock › Pop" on 167
 * Los Angeles listings and "Amapiano" on 63, defaults, not descriptions). Both the screens and the overlap rule read
 * this one map, so a word can never differ between them. Anything unmapped (Other, Undefined, New Age, Holiday, a
 * blank) is missing evidence, not a genre: `null` here, "Music" on screen, never a match in the formula.
 */
const GENRE_CATEGORY: Record<string, string> = {
  rock: 'Rock',
  alternative: 'Rock',
  pop: 'Pop',
  'hip-hop/rap': 'Hip-hop',
  'hip-hop': 'Hip-hop',
  rap: 'Hip-hop',
  'r&b': 'R&B',
  latin: 'Latin',
  country: 'Country',
  'dance/electronic': 'Electronic',
  electronic: 'Electronic',
  dance: 'Electronic',
  jazz: 'Jazz',
  classical: 'Classical',
  metal: 'Metal',
  reggae: 'Reggae',
  folk: 'Folk',
  blues: 'Blues',
  world: 'Global',
  religious: 'Faith',
  "children's music": 'Family',
};

/** The category for a seller's genre word, or null when the word carries no genre. */
export function genreCategory(feedGenre: string | null | undefined): string | null {
  if (!feedGenre) return null;
  return GENRE_CATEGORY[feedGenre.trim().toLowerCase()] ?? null;
}

/** The word shown when a show's genre is missing (Kylie, Oct 19: Other and Undefined become "Music"). */
export const UNKNOWN_GENRE_WORD = 'Music';

/**
 * The one word under an artist's name, from the listings that are theirs: the most common category among them,
 * "Music" when every listing's genre is missing, null when there is no listing to read (the caller keeps its own word).
 */
export function artistGenreWord(events: readonly CrowdEvent[]): string | null {
  const counts = new Map<string, number>();
  let seen = 0;
  for (const event of events) {
    if (event.audience.domain !== 'music') continue;
    seen++;
    const category = genreCategory(event.audience.genre);
    if (category) counts.set(category, (counts.get(category) ?? 0) + 1);
  }
  if (seen === 0) return null;
  if (counts.size === 0) return UNKNOWN_GENRE_WORD;
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
}
