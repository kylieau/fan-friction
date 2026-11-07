import { useEffect, useRef, useState, type RefObject } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** The elements inside `root` a Tab can reach, in document order, skipping anything hidden. */
function focusablesIn(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.getClientRects().length > 0);
}

/**
 * One focus rule for every modal card, sheet and menu (build 7.2 follow-up, Nov 7, 2026; the shared dialog item
 * from Codex's Section E and group 11 reviews). While the dialog is open: focus enters it (the `initial` element,
 * else its first focusable, else the dialog itself; a child with `autoFocus` keeps the focus it already took);
 * the page behind is inert, so a tap, a screen reader or a Tab cannot reach it; Tab and Shift+Tab cycle inside
 * the dialog; Escape closes it. When it closes, focus goes back to whatever opened it. The dialogs render inline
 * in the page's tree, not through a portal, so "the page behind" is every sibling on the path from the dialog up
 * to the body, marked inert only while this dialog is open and only where nothing had marked it already (a second
 * dialog over the first leaves the first's marks alone).
 */
export function useDialogFocus(ref: RefObject<HTMLElement | null>, onClose: () => void, options: { initial?: RefObject<HTMLElement | null>; escape?: boolean } = {}) {
  const { initial, escape = true } = options;
  // The opener is read during the first render, before a child's autoFocus moves focus in the commit.
  const [opener] = useState(() => (typeof document === 'undefined' ? null : (document.activeElement as HTMLElement | null)));
  const close = useRef(onClose);
  close.current = onClose;
  const first = useRef(initial);
  first.current = initial;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The page behind: every sibling along the path to the body, inert while the dialog is open.
    const marked: Element[] = [];
    for (let node: HTMLElement | null = el; node && node !== document.body; node = node.parentElement) {
      const parent: HTMLElement | null = node.parentElement;
      if (!parent) break;
      for (const sibling of Array.from(parent.children) as Element[]) {
        if (sibling === node || sibling.hasAttribute('inert')) continue;
        sibling.setAttribute('inert', '');
        marked.push(sibling);
      }
    }

    // Focus enters, unless a child already took it (autoFocus).
    if (!el.contains(document.activeElement)) {
      const target = first.current?.current ?? focusablesIn(el)[0] ?? el;
      if (target === el && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      target.focus();
    }

    const own = el.closest('[role="dialog"], [role="alertdialog"], [role="menu"]') ?? el;
    const onKey = (ev: KeyboardEvent) => {
      // A dialog that swapped itself for another (the faves menu for the Stub it sheet) stands down, and so does
      // one with a newer dialog open over it: only the topmost answers the keys.
      if (!el.isConnected) return;
      const dialogs = document.querySelectorAll('[role="dialog"], [role="alertdialog"], [role="menu"]');
      if (dialogs.length > 0 && dialogs[dialogs.length - 1] !== own) return;
      if (ev.key === 'Escape') {
        if (!escape) return;
        ev.stopPropagation();
        close.current();
        return;
      }
      if (ev.key !== 'Tab') return;
      const items = focusablesIn(el);
      ev.preventDefault();
      if (items.length === 0) return;
      const i = items.indexOf(document.activeElement as HTMLElement);
      const next = i < 0 ? 0 : (i + (ev.shiftKey ? items.length - 1 : 1)) % items.length;
      items[next].focus();
    };
    window.addEventListener('keydown', onKey, true);

    return () => {
      window.removeEventListener('keydown', onKey, true);
      for (const node of marked) node.removeAttribute('inert');
      if (opener?.isConnected) opener.focus?.();
    };
    // Runs once per open: the handlers read their refs, so a parent re-rendering its onClose never re-arms it.
  }, []);
}
