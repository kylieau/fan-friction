import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { StubVisibility } from '../data';
import { GlobeIcon, LockMark, PeopleIcon } from './Icons';

const LEVELS: { level: StubVisibility; word: string; sub: string; icon: (size: number) => ReactNode }[] = [
  { level: 'anyone', word: 'Anyone', sub: 'Anyone on Fan/Friction can see it', icon: (s) => <GlobeIcon size={s} /> },
  { level: 'friends', word: 'Friends', sub: 'Only people you approve', icon: (s) => <PeopleIcon size={s} /> },
  { level: 'private', word: 'Private', sub: 'Only you', icon: (s) => <LockMark size={s} /> },
];

export function levelWord(level: StubVisibility): string {
  return LEVELS.find((l) => l.level === level)!.word;
}

/**
 * Who sees one stub (build 5, stub privacy; boards privacy-r2 3a–3c, 4a–4b): a pill with the level and a chevron,
 * a menu of Anyone / Friends / Private with your default marked, and beside it "Your default", or a gold "Not your
 * default" when this stub differs. `bare` drops that side label (the event page's status line keeps it short).
 */
export function LevelPill({ value, defaultLevel, onChange, bare = false }: { value: StubVisibility; defaultLevel: StubVisibility; onChange: (level: StubVisibility) => void; bare?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!open) return;
    const away = (ev: PointerEvent) => {
      if (root.current && !root.current.contains(ev.target as Node)) setOpen(false);
    };
    const key = (ev: KeyboardEvent) => ev.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', away);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('pointerdown', away);
      document.removeEventListener('keydown', key);
    };
  }, [open]);
  const current = LEVELS.find((l) => l.level === value)!;
  return (
    <span className="level-pill-wrap" ref={root}>
      <button type="button" className="level-pill" aria-haspopup="menu" aria-expanded={open} aria-label={`Who sees this: ${current.word}`} onClick={() => setOpen((o) => !o)}>
        {current.icon(15)}
        {current.word}
        <span className="level-pill-chevron" aria-hidden>
          ⌄
        </span>
      </button>
      {!bare && <span className={`level-default${value === defaultLevel ? '' : ' differs'}`}>{value === defaultLevel ? 'Your default' : 'Not your default'}</span>}
      {open && (
        <span className="level-menu" role="menu">
          {LEVELS.map((l) => (
            <button
              key={l.level}
              type="button"
              role="menuitemradio"
              aria-checked={l.level === value}
              className="level-menu-row"
              onClick={() => {
                setOpen(false);
                if (l.level !== value) onChange(l.level);
              }}
            >
              <span className="level-menu-icon">{l.icon(20)}</span>
              <span className="level-menu-text">
                <span className="level-menu-word">
                  {l.word}
                  {l.level === defaultLevel && <span className="level-menu-default"> · your default</span>}
                </span>
                <span className="level-menu-sub">{l.sub}</span>
              </span>
              {l.level === value && (
                <span className="level-menu-check" aria-hidden>
                  ✓
                </span>
              )}
            </button>
          ))}
        </span>
      )}
    </span>
  );
}
