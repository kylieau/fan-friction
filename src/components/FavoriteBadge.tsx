import { TypeIcon } from './TypeIcon';
import { favoriteTypeKey } from '../map/typeIcons';
import { favoriteMark, TEAMS, type Favorite } from '../data';

/**
 * The one badge for a favorite (build 6, item 9a; Kylie, Oct 16): the code on a tile with the sport icon at the
 * top-left, for every sports team, men's and women's alike; nothing else on it (no corner mark, no league mark,
 * no W). The code comes from `favoriteMark(fav, shown)`, so a college program reads "UCLA MBB" only beside another
 * of its school's programs in the same sport. Decorative at every call site: the surrounding link or row carries
 * the full name (`favoriteName`).
 */
export function FavoriteBadge({ fav, shown, size = 'tag', className = '' }: { fav: Favorite; /** The badges shown beside this one (the strip, the list, the search group). */ shown: readonly Favorite[]; size?: 'tag' | 'mark' | 'big'; className?: string }) {
  const icon = fav.kind === 'team' ? favoriteTypeKey(fav) : null;
  const text = favoriteMark(fav, shown);
  const base = size === 'tag' ? `fav-tag fav-tag-${fav.kind}` : `fav-mark fav-${fav.kind}${size === 'big' ? ' fav-big' : ''}`;
  return (
    <span className={`${base}${icon ? ' has-icon' : ''}${text.includes(' ') ? ' lettered' : ''} ${className}`.trim()} aria-hidden="true">
      {icon && <TypeIcon typeKey={icon} size={size === 'big' ? 14 : 10} className="fav-badge-icon" />}
      {text}
    </span>
  );
}

/** The spoken name behind a badge: a team's full name ("UCLA Bruins Men's Basketball", "Indiana Fever"), else the label. */
export function favoriteName(fav: Favorite): string {
  return (fav.teamId && TEAMS[fav.teamId]?.name) || fav.label;
}
