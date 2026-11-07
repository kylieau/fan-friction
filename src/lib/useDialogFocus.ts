import { useEffect, useRef, useState, type RefObject } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const MODAL = '[role="dialog"], [role="alertdialog"], [role="menu"]';

/** The elements inside `root` a Tab can reach, in document order, skipping anything hidden. */
function focusablesIn(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.getClientRects().length > 0);
}

/**
 * The inert marks the open dialogs share, counted per element so that two dialogs over the same page each hold
 * the mark and the page stays inert until the last of them closes (Codex, group 14 review). A mark something else
 * set (the faves menu's lifted row) is counted but never removed here.
 */
const marks = new Map<Element, { count: number; ours: boolean }>();

function claim(el: Element) {
  const held = marks.get(el);
  if (held) {
    held.count += 1;
    return;
  }
  const ours = !el.hasAttribute('inert');
  if (ours) el.setAttribute('inert', '');
  marks.set(el, { count: 1, ours });
}

function release(el: Element) {
  const held = marks.get(el);
  if (!held) return;
  held.count -= 1;
  if (held.count > 0) return;
  marks.delete(el);
  if (held.ours) el.removeAttribute('inert');
}

/**
 * One focus rule for every modal card, sheet and menu (build 7.2 follow-up, Nov 7, 2026; the shared dialog item
 * from Codex's Section E and group 11 reviews). While the dialog is open: focus enters it (the `initial` element,
 * else its first focusable, else the dialog itself; a child with `autoFocus` keeps the focus it already took);
 * the page behind is inert, so a tap, a screen reader or a Tab cannot reach it; Tab and Shift+Tab cycle inside
 * the dialog; Escape closes it. When it closes, focus goes back to whatever opened it. The dialogs render inline
 * in the page's tree, not through a portal, so "the page behind" is every sibling on the path from the dialog up
 * to the body, marked inert while any dialog over it is open (a second dialog over the first shares the marks and
 * the first closing never uncovers the page under the second). Only the topmost dialog answers the keys: one with
 * a newer dialog over it is inert itself, and one that swapped its element for another's (the faves menu for the
 * Stub it sheet) has left the page.
 */
export function useDialogFocus(ref: RefObject<HTMLElement | null>, onClose: () => void, options: { initial?: RefObject<HTMLElement | null>; escape?: boolean } = {}) {
  const { initial, escape = true } = options;
  // The opener is read during the first render, before a child's autoFocus moves focus in the commit.
  const [opener] = useState(() => (typeof document === 'undefined' ? null : (document.activeElement as HTMLElement | null)));
  const close = useRef(onClose);
  close.current = onClose;
  const first = useRef(initial);
  first.current = initial;
  // Where focus stood inside the dialog when a setup was torn down (StrictMode replays it in development): the
  // replay puts it back there rather than on the initial element (Codex, group 14 review).
  const lastInside = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The page behind: every sibling along the path to the body, inert while the dialog is open.
    const claimed: Element[] = [];
    for (let node: HTMLElement | null = el; node && node !== document.body; node = node.parentElement) {
      const parent: HTMLElement | null = node.parentElement;
      if (!parent) break;
      for (const sibling of Array.from(parent.children) as Element[]) {
        if (sibling === node) continue;
        claim(sibling);
        claimed.push(sibling);
      }
    }

    // Focus enters, unless a child already took it (autoFocus).
    if (!el.contains(document.activeElement)) {
      const again = lastInside.current && lastInside.current.isConnected && el.contains(lastInside.current) ? lastInside.current : null;
      const target = again ?? first.current?.current ?? focusablesIn(el)[0] ?? el;
      if (target === el && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      target.focus();
    }

    const own = el.closest(MODAL) ?? el;
    const onKey = (ev: KeyboardEvent) => {
      if (!el.isConnected) return;
      // The topmost dialog: the last one in the page that is neither inert nor hidden (a background menu that
      // stays mounted is inert while this dialog is open, so it never counts; Codex, group 14 review).
      const live = Array.from(document.querySelectorAll(MODAL)).filter((d) => !d.closest('[inert]') && d.getClientRects().length > 0);
      if (live.length > 0 && live[live.length - 1] !== own) return;
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
      // From outside the list (the sheet's title, say), Tab starts at the first stop and Shift+Tab at the last.
      const next = i < 0 ? (ev.shiftKey ? items.length - 1 : 0) : (i + (ev.shiftKey ? items.length - 1 : 1)) % items.length;
      items[next].focus();
    };
    window.addEventListener('keydown', onKey, true);

    return () => {
      window.removeEventListener('keydown', onKey, true);
      const active = document.activeElement as HTMLElement | null;
      lastInside.current = active && el.contains(active) ? active : null;
      for (const node of claimed) release(node);
      // Focus goes back to the opener only when nothing else holds it: not when a dialog still open over this one
      // has it (Codex, group 14 review).
      const loose = !active || active === document.body || el.contains(active);
      if (loose && opener?.isConnected) opener.focus?.();
    };
    // Runs once per open: the handlers read their refs, so a parent re-rendering its onClose never re-arms it.
  }, []);
}
