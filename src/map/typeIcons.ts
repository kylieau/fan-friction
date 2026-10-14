// The type icon at the start of every event title (build 5, item 12; Kylie, Oct 14, answers IN01, IN02, IN11–IN13;
// board docs/build-5/mosaic/icons/sheet-r3.png): Phosphor regular plus six custom drawings, one line style, link
// blue (#005A9C). The icon per type is the table's "Proposed icon" column (EVENT_TYPES in src/data/eventTypes.ts).
// Sized per surface: 20pt is the target; each surface uses the largest size that keeps its live row height.

import { entryType, eventType, typeDef, TEAMS, type CrowdEvent, type Entry, type Favorite } from '../data';
import { ICON_ART } from './typeIconPaths';

const LINK_BLUE = '#005A9C';

/** The inline SVG for a type key, as a string (map chips are plain HTML). */
export function typeIconMarkup(typeKey: string, size: number, className = 'type-icon'): string {
  const art = ICON_ART[typeDef(typeKey).icon] ?? ICON_ART.ticket;
  const paint = art.fill ? `fill="${LINK_BLUE}"` : `fill="none" stroke="${LINK_BLUE}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"`;
  return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 256 256" ${paint} aria-hidden="true">${art.body}</svg>`;
}

/** The map chip's icon: 12pt (the measured size that keeps the chip's height). */
export function typeIconSvg(event: CrowdEvent): string {
  return typeIconMarkup(eventType(event).key, 12, 'crowd-type type-icon');
}

/** The type key a stub draws. */
export function entryTypeKey(entry: Pick<Entry, 'kind' | 'sport' | 'title'> & Partial<Pick<Entry, 'venue'>>): string {
  return entryType(entry).key;
}

/**
 * The icon a favorite carries on the Faves picker and its search (board phones-r3/following-lean, search-lean): a team
 * its sport's, an artist the music note, a festival its type by name; a venue none.
 */
export function favoriteTypeKey(fav: Favorite): string | null {
  if (fav.kind === 'team') {
    const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
    return team ? entryType({ kind: 'game', sport: team.sport, title: '' }).key : null;
  }
  if (fav.kind === 'artist') return 'music.concert';
  if (fav.kind === 'festival') {
    const key = entryType({ kind: 'special', sport: '', title: fav.label }).key;
    return key === 'other' ? 'music.festival' : key;
  }
  return null;
}
