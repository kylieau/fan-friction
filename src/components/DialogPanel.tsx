import { useRef, type ReactNode } from 'react';
import { useDialogFocus } from '../lib/useDialogFocus';

/**
 * The panel inside a modal backdrop, under the shared dialog rule (group 16): the page behind inert, Tab inside,
 * Escape closes, focus back to the opener. For a sheet a screen renders inline behind an `open &&`, so the rule arms
 * each time the sheet opens. A tap on the panel never reaches the backdrop's close.
 */
export function DialogPanel({ className, onClose, children }: { className: string; onClose: () => void; children: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null);
  useDialogFocus(panel, onClose);
  return (
    <div ref={panel} className={className} onClick={(ev) => ev.stopPropagation()}>
      {children}
    </div>
  );
}
