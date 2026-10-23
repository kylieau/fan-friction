import { useEffect } from 'react';
import { AddEntryScreen } from '../screens/AddEntryScreen';

/**
 * The Log an event sheet (build 7, §3.2), opened by the tab bar's "+". Step 4 builds the shell with today's New stub
 * content inside it (search, the team or artist list, Add it yourself); step 7 adds Happening now and Recent on top.
 * Opening it never logs anything: every save is a tap inside.
 */
export function LogSheet({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Log an event" onClick={onClose}>
      <div className="action-sheet log-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <h2 className="stub-sheet-title">Log an event</h2>
        <AddEntryScreen embedded />
      </div>
    </div>
  );
}
