import { useEffect, type ReactNode } from 'react';
import { TEAMS, favoriteKey, type Favorite, type FavoriteKind } from '../data';
import { SlidersIcon } from './Icons';

/** A filter: null shows everything; a set of keys shows only those. */
export type Picked = ReadonlySet<string> | null;

export const FAVORITE_KINDS: { kind: FavoriteKind; label: string }[] = [
  { kind: 'team', label: 'Teams' },
  { kind: 'artist', label: 'Artists' },
  { kind: 'venue', label: 'Venues' },
  { kind: 'festival', label: 'Festivals' },
];

/**
 * The filter sheets' shared frame (build 7, §3.3 and §3.4; mocks 12 and 18): a title, scrolling sections, and a
 * Reset / Done footer. Changes apply as they are tapped; Done only closes. Escape closes too.
 */
export function FilterSheet({ title, onReset, onClose, children }: { title: string; onReset: () => void; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="action-sheet following-sheet filter-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <h2 className="filter-sheet-title">{title}</h2>
        <div className="filter-sheet-body">{children}</div>
        <div className="filter-sheet-foot">
          <button type="button" className="filter-sheet-reset" onClick={onReset}>
            Reset
          </button>
          <button type="button" className="gold-button filter-sheet-done" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export function SheetHeading({ children }: { children: ReactNode }) {
  return <h3 className="you-heading sheet-heading">{children}</h3>;
}

export function Check({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button type="button" role="checkbox" aria-checked={on} aria-label={label} className={`sheet-check${on ? ' on' : ''}`} onClick={onClick}>
      {on ? '✓' : ''}
    </button>
  );
}

/** A checklist row: the check, then the words, both toggling the same thing. */
export function CheckRow({ on, title, sub, onToggle }: { on: boolean; title: string; sub?: string; onToggle: () => void }) {
  return (
    <li className="sheet-row">
      <Check on={on} label={title} onClick={onToggle} />
      <button type="button" className="log-main sheet-row-words" onClick={onToggle}>
        <span className="log-title">{title}</span>
        {sub && <span className="log-facts">{sub}</span>}
      </button>
    </li>
  );
}

/** Tapping one item while All is on selects only that item (a lean); tapping the last checked item goes back to All. */
export function toggleIn(picked: Picked, key: string, all: readonly string[]): Picked {
  if (picked === null) return new Set([key]);
  const next = new Set(picked);
  if (next.has(key)) next.delete(key);
  else next.add(key);
  if (next.size === 0 || next.size === all.length) return null;
  return next;
}

/**
 * "Basketball · NBA", "Football · College", "Country": the line under a Fave's name in a sheet. An artist's word is
 * its genre from the listings (Kylie, Oct 19, 2026; `useArtistGenres`), "Artist" while no listing is on file (a lean).
 */
export function favoriteSub(fav: Favorite, genres: ReadonlyMap<string, string>): string {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  if (team) {
    const sport = team.sport.charAt(0).toUpperCase() + team.sport.slice(1);
    const league = /^college/i.test(team.league) ? 'College' : team.league;
    return `${sport} · ${league}`;
  }
  if (fav.kind === 'artist') {
    const genre = genres.get(favoriteKey(fav));
    if (genre) return genre;
  }
  return FAVORITE_KINDS.find((k) => k.kind === fav.kind)?.label.replace(/s$/, '') ?? '';
}

/** A picked set kept in session storage: null is All. Session only, so the filter resets when the app is closed. */
export function readPicked(storageKey: string): Picked {
  try {
    const raw = sessionStorage.getItem(storageKey);
    const list = raw ? (JSON.parse(raw) as unknown) : null;
    return Array.isArray(list) && list.length > 0 ? new Set(list.filter((x): x is string => typeof x === 'string')) : null;
  } catch {
    return null;
  }
}

export function writePicked(storageKey: string, next: Picked) {
  try {
    if (next === null) sessionStorage.removeItem(storageKey);
    else sessionStorage.setItem(storageKey, JSON.stringify([...next]));
  } catch {
    /* storage blocked */
  }
}

/** A filter that names something no longer there drops it; an empty filter is All. */
export function prunePicked(picked: Picked, keys: readonly string[]): Picked {
  if (picked === null) return null;
  const kept = [...picked].filter((k) => keys.includes(k));
  return kept.length === 0 || kept.length === keys.length ? null : new Set(kept);
}

/** The header's filter button: the search button's size, solid with a count while a filter is on. */
export function FilterButton({ count, open, onClick, label = 'Filter' }: { count: number; open: boolean; onClick: () => void; label?: string }) {
  return (
    <button type="button" className={`round-button following-filter${count > 0 ? ' on' : ''}`} aria-label={count > 0 ? `${label}, ${count} on` : label} aria-expanded={open} onClick={onClick}>
      <SlidersIcon />
      {count > 0 && <span className="following-filter-count">{count}</span>}
    </button>
  );
}

/** The chip row under the header while a filter is on: one removable chip per pick and Clear. */
export function FilterChips({ chips, onDrop, onClear, scrollRef }: { chips: { key: string; label: string }[]; onDrop: (key: string) => void; onClear: () => void; scrollRef?: (el: HTMLDivElement | null) => void }) {
  if (chips.length === 0) return null;
  return (
    <div className="following-chips">
      <div className="following-chips-scroll" ref={scrollRef}>
        {chips.map((chip) => (
          <button key={chip.key} type="button" className="following-chip" aria-label={`Stop showing only ${chip.label}`} onClick={() => onDrop(chip.key)}>
            {chip.label} <span aria-hidden>✕</span>
          </button>
        ))}
      </div>
      <button type="button" className="link-button following-clear" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
