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
/**
 * The ticket's pill (build 7.2, R2d; Kylie, Nov 5, later: the levels' own icons, "one word that the dropdown has"):
 * the globe, the people or the lock with the level's word. Nothing on the ticket reads "Attended · " before it, and
 * friends have their own card, so the people icon no longer reads as company; the spoken name spells it out.
 */
const VISIBLE_SPOKEN: Record<StubVisibility, string> = { anyone: 'Visible to anyone', friends: 'Visible to friends', private: 'Private' };

/**
 * The level mark on an event row (Kylie, Nov 5, mock C of `docs/build-7-2/mockups/activity-card/r3-sheet/`): the level's
 * own icon and word as a small grey outlined tag on the venue line, off the "Attended" line, so it reads as a label
 * about the stub and never as company. Shown only when the stub's level is not her default (her worry: a mark on
 * every row is "excessive / overstimulating"), so most rows carry nothing and the exceptions stand out.
 */
export function LevelTag({ level, defaultLevel }: { level: StubVisibility | undefined; defaultLevel: StubVisibility }) {
  if (!level || level === defaultLevel) return null;
  const l = LEVELS.find((x) => x.level === level)!;
  return (
    <span className="level-tag" role="img" aria-label={VISIBLE_SPOKEN[level]}>
      {l.icon(12)}
      {l.word}
    </span>
  );
}

export function LevelPill({ value, defaultLevel, onChange, bare = false, down = false, labels = 'level' }: { value: StubVisibility; defaultLevel: StubVisibility; onChange: (level: StubVisibility) => void; bare?: boolean; /** Open the menu below (near the top of a page); above is for the bottom sheet. */ down?: boolean; /** "visible": the Your Stub ticket's pill, an eye and "Visible to Friends" (R2d), a lock and "Private". */ labels?: 'level' | 'visible' }) {
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
      <button type="button" className={`level-pill${labels === 'visible' ? ' is-visible' : ''}`} aria-haspopup="menu" aria-expanded={open} aria-label={labels === 'visible' ? `${VISIBLE_SPOKEN[value]}, who sees this stub` : `Who sees this: ${current.word}`} onClick={() => setOpen((o) => !o)}>
        {current.icon(15)}
        {current.word}
        <span className="level-pill-chevron" aria-hidden>
          ⌄
        </span>
      </button>
      {!bare && <span className={`level-default${value === defaultLevel ? '' : ' differs'}`}>{value === defaultLevel ? 'Your default' : 'Not your default'}</span>}
      {open && (
        <span className={`level-menu${down ? ' down' : ''}`} role="menu">
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
