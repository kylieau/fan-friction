import type { HiddenReason } from '../data';

/**
 * "N events outside your crowd size · Show" (build 5, item 6; board minsize-r6): a quiet link-blue 11pt line where
 * a setting hid events. Show reveals them for this view only; the setting doesn't change. The line stays
 * once they show and reads "· Hide", so the view switches on and off in place (Kylie, Oct 17). Nothing at 0.
 * Since build 7.2 (Section C, C9a and C9b; Kylie, Oct 30) the wording says which setting did it: Event Types alone
 * reads "N events hidden by Event Types"; both settings together read one line, "N events hidden by your settings",
 * a row hidden by both counted once, and one Show reveals everything.
 */
export function HiddenLine({ count, noun = 'event', reason = 'size', shown = false, onToggle }: { count: number; noun?: 'event' | 'date'; /** Which setting hid them. */ reason?: HiddenReason | null; /** The hidden ones are showing. */ shown?: boolean; onToggle: () => void }) {
  if (count <= 0) return null;
  const what = `${count} ${count === 1 ? noun : `${noun}s`}`;
  const why = reason === 'both' ? 'hidden by your settings' : reason === 'types' ? 'hidden by Event Types' : 'outside your crowd size';
  return (
    <p className="hidden-line">
      {what} {why} ·{' '}
      <button type="button" className="hidden-line-show" aria-pressed={shown} onClick={onToggle}>
        {shown ? 'Hide' : 'Show'}
      </button>
    </p>
  );
}
