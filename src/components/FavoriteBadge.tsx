import { TypeIcon } from './TypeIcon';
import { favoriteTypeKey } from '../map/typeIcons';
import { favoriteLeagueMark, favoriteMark, TEAMS, type Favorite } from '../data';

/**
 * The one badge for a favorite (build 6, item 9a; Kylie, Oct 16): the code on a tile with the sport icon at the
 * top-left, for every sports team, men's and women's alike. The code comes from `favoriteMark(fav, shown)`, so a
 * college program reads "UCLA MBB" only beside another of its school's programs in the same sport. A pro team whose
 * code and sport another pro badge in the set shares carries its league as a caption under the tile, inside the same
 * link (Kylie, Oct 17: option A; Mock Mosaic's board B placement). Decorative at every call site: the surrounding link
 * or row carries the full name (`favoriteName`).
 */
export function FavoriteBadge({ fav, shown, size = 'tag', className = '' }: { fav: Favorite; /** The badges shown beside this one (the strip, the list, the search group). */ shown: readonly Favorite[]; size?: 'tag' | 'mark' | 'big'; className?: string }) {
  const icon = fav.kind === 'team' ? favoriteTypeKey(fav) : null;
  const text = favoriteMark(fav, shown);
  const league = fav.kind === 'team' ? favoriteLeagueMark(fav, shown) : null;
  const base = size === 'tag' ? `fav-tag fav-tag-${fav.kind}` : `fav-mark fav-${fav.kind}${size === 'big' ? ' fav-big' : ''}`;
  return (
    <span className={`fav-badge${league ? ' has-league' : ''} ${className}`.trim()} aria-hidden="true">
      <span className={`${base}${icon ? ' has-icon' : ''}`}>
        {icon && <TypeIcon typeKey={icon} size={size === 'big' ? 14 : 10} className="fav-badge-icon" />}
        {text}
      </span>
      {league && <span className="fav-badge-league">{league}</span>}
    </span>
  );
}

/** The spoken name behind a badge: a team's full name ("UCLA Bruins Men's Basketball", "Indiana Fever"), else the label. */
export function favoriteName(fav: Favorite): string {
  return (fav.teamId && TEAMS[fav.teamId]?.name) || fav.label;
}
