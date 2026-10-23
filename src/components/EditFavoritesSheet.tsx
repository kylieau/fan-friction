import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { FavoriteBadge, favoriteName } from './FavoriteBadge';
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
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Edit favorites" onClick={onClose}>
      <div className="action-sheet following-sheet filter-sheet edit-faves-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <h2 className="filter-sheet-title">Edit favorites</h2>
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
 * The Favorite teams & artists section in Profile & Settings (mocks 61–63): collapsible groups (Teams, Artists, Venues,
 * Festivals), each closed with its count and a one-line preview, open rows read-only with a grey "Seen N", most seen
 * first; a small Edit opens the sheet. Official names here (the naming rule); long names wrap.
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
        <span className="you-fine">{favorites.length === 0 ? 'Nothing followed yet.' : 'What you follow. Seen counts every attended and watched stub.'}</span>
        <button type="button" className="fav-toggle fav-section-edit" onClick={onEdit}>
          {favorites.length === 0 ? 'Find faves' : 'Edit'}
        </button>
      </div>
      {groups.map((g) => (
        <section key={g.kind} className="fav-group">
          <button type="button" className="settings-row settings-link fav-group-head" aria-expanded={open === g.kind} onClick={() => setOpen(open === g.kind ? null : g.kind)}>
            <span className={`settings-section-chevron${open === g.kind ? ' open' : ''}`} aria-hidden>
              <ChevronDown />
            </span>
            <span className="fav-group-words">
              <span className="fav-group-title">
                {g.label} · {g.list.length}
              </span>
              {open !== g.kind && <span className="you-fine fav-group-preview">{g.list.map(favoriteOfficialName).join(', ')}</span>}
            </span>
          </button>
          {open === g.kind && (
            <ul className="log-list fav-group-list">
              {g.list.map((fav) => (
                <li key={favoriteKey(fav)} className="fav-group-row">
                  <FavoriteBadge fav={fav} shown={g.list} size="mark" />
                  <span className="log-main">
                    <span className="log-title">{favoriteOfficialName(fav)}</span>
                    <span className="log-facts">Seen {seen.get(favoriteKey(fav)) ?? 0}</span>
                  </span>
                  <span className="sr-only">{favoriteName(fav)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
