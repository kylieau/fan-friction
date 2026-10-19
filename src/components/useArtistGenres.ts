import { useEffect, useMemo, useState } from 'react';
import { artistGenreWord, eventMatches, favoriteKey, getEventsBetween, metrosWithEvents, type CrowdEvent, type Favorite } from '../data';
import { addDays } from '../lib/dates';

/** The listings window the genre word reads, both ways: the Following timeline's span (60 days). */
const SPAN_DAYS = 60;

/**
 * The one word under each artist favorite's name ("Rock", "Country", "Music"), read from the listings that are theirs
 * in every covered city, 60 days each way (Kylie, Oct 19, 2026: the genre comes from the feed's first level). One hook
 * for the sheet, the picker and the artist page, so the word agrees across screens. An artist with no listing in the
 * window has no entry; the caller keeps its own word ("Artist", a lean).
 */
export function useArtistGenres(favorites: readonly Favorite[]): ReadonlyMap<string, string> {
  const [listings, setListings] = useState<CrowdEvent[]>([]);
  const hasArtists = favorites.some((fav) => fav.kind === 'artist');
  useEffect(() => {
    if (!hasArtists) return;
    let current = true;
    const today = new Date().toISOString().slice(0, 10);
    Promise.all(metrosWithEvents().map((metro) => getEventsBetween(metro.id, addDays(today, -SPAN_DAYS - 1), addDays(today, SPAN_DAYS)))).then((lists) => {
      if (current) setListings(lists.flat());
    });
    return () => {
      current = false;
    };
  }, [hasArtists]);
  return useMemo(() => {
    const out = new Map<string, string>();
    for (const fav of favorites) {
      if (fav.kind !== 'artist') continue;
      const word = artistGenreWord(listings.filter((event) => eventMatches(event, fav)));
      if (word) out.set(favoriteKey(fav), word);
    }
    return out;
  }, [favorites, listings]);
}
