/**
 * "N events outside your crowd size · Show" (build 5, item 6; board minsize-r6): a quiet link-blue 11pt line where
 * the crowd size range hid events. Show reveals them for this view only; the setting doesn't change. The line stays
 * once they show and reads "· Hide", so the view switches on and off in place (Kylie, Oct 17). Nothing at 0.
 */
export function HiddenLine({ count, noun = 'event', shown = false, onToggle }: { count: number; noun?: 'event' | 'date'; /** The hidden ones are showing. */ shown?: boolean; onToggle: () => void }) {
  if (count <= 0) return null;
  return (
    <p className="hidden-line">
      {count} {count === 1 ? noun : `${noun}s`} outside your crowd size ·{' '}
      <button type="button" className="hidden-line-show" aria-pressed={shown} onClick={onToggle}>
        {shown ? 'Hide' : 'Show'}
      </button>
    </p>
  );
}
