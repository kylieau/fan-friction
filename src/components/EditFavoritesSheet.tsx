import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesScreen, favPath } from '../screens/FavoritesScreen';
import { favoriteName } from './FavoriteBadge';
import { ChevronDown } from './Icons';
import { entryMatches, favoriteKey, favoriteOfficialName, getPersonalLog, subscribePersonalLog, yourEntries, type Favorite, type FavoriteKind } from '../data';
import { FAVORITE_KINDS } from './FilterSheet';

/**
 * The one favorites editor (build 7, §3.11; Kylie, Oct 22, 2026: "just put a little edit button, and have that pop up,
 * you can edit all of them"; mocks 64–66): the existing picker (search, Your faves most seen first with a minus each,
 * Suggested with Follow, Browse by league collapsed under it, Locked) in a sheet. Changes save as you go; Done closes.
 * Opened from the favorites section's Edit, "Edit ›" on You's Faves row and "Manage faves ›" in the Upcoming filter.
 */
export function EditFavoritesSheet({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Edit Favorites" onClick={onClose}>
      <div className="action-sheet following-sheet filter-sheet edit-faves-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <h2 className="filter-sheet-title">Edit Favorites</h2>
        <div className="filter-sheet-body">
          <FavoritesScreen embedded edit />
        </div>
        <button type="button" className="gold-button filter-sheet-done" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

/**
 * The Teams & Artists page in Profile & Settings (build 7.1, M19 and M18; mock 07, without its seen counts, Locked,
 * Kylie, Oct 23, 2026): one card of groups (Teams, Artists, Venues, Festivals), each with its two first names,
 * "+N more" and a count, opening in place; each open row is a favorite's official name with › to its page. The order
 * is most seen first (the count only orders the list; it is never shown). One Edit opens the sheet.
 */
export function FavoritesSection({ favorites, onEdit }: { favorites: readonly Favorite[]; onEdit: () => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const entries = useMemo(() => yourEntries(log), [log]);
  const seen = useMemo(() => new Map(favorites.map((fav) => [favoriteKey(fav), entries.filter((entry) => entryMatches(entry, fav)).length])), [favorites, entries]);
  const [open, setOpen] = useState<FavoriteKind | null>(null);
  const groups = FAVORITE_KINDS.map(({ kind, label }) => ({
    kind,
    label,
    list: favorites.filter((f) => f.kind === kind).sort((a, b) => (seen.get(favoriteKey(b)) ?? 0) - (seen.get(favoriteKey(a)) ?? 0) || favoriteOfficialName(a).localeCompare(favoriteOfficialName(b))),
  })).filter((g) => g.list.length > 0);
  return (
    <div className="settings fav-section">
      <div className="fav-section-head">
        <span className="you-fine">{favorites.length === 0 ? 'Nothing followed yet.' : 'What you follow.'}</span>
        <button type="button" className="profile-pill fav-section-edit" onClick={onEdit}>
          {favorites.length === 0 ? 'Find faves' : 'Edit'}
        </button>
      </div>
      {groups.length > 0 && (
        <div className="card settings-group">
          {groups.map((g) => (
            <section key={g.kind} className="fav-group">
              <button type="button" className="settings-row settings-link settings-group-row" aria-expanded={open === g.kind} onClick={() => setOpen(open === g.kind ? null : g.kind)}>
                <span className="settings-row-words">
                  <span className="settings-row-title">{g.label}</span>
                  <span className="summary-row summary-text">
                    <span className="summary-names">{g.list.slice(0, 2).map(favoriteOfficialName).join(', ')}</span>
                    {g.list.length > 2 && <span className="summary-more">+{g.list.length - 2} more</span>}
                  </span>
                </span>
                <span className="settings-row-side">
                  <span className="settings-badge">{g.list.length}</span>
                  <span className={`settings-section-chevron${open === g.kind ? ' open' : ''}`} aria-hidden>
                    <ChevronDown />
                  </span>
                </span>
              </button>
              {open === g.kind && (
                <ul className="settings-disclosure-body fav-group-list">
                  {g.list.map((fav) => (
                    <li key={favoriteKey(fav)}>
                      <Link to={favPath(fav)} className="settings-row settings-link fav-group-row" aria-label={favoriteName(fav)}>
                        <span className="fav-group-name">{favoriteOfficialName(fav)}</span>
                        <span className="settings-chevron" aria-hidden>
                          ›
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
