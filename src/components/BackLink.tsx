// The upper-left Back on every inner page (Kylie, Oct 15: "the upper left 'back' should actually just return
// the user to where they came from"). It goes back one step in the app's own history when there is one;
// on a cold open (a pasted link, the installed app launched straight onto the page) there is nothing to go
// back to, so it opens `to`, the page's natural parent. Forward links to the date page stay separate.
import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from './Icons';
import { clearOpenedFromMap } from '../lib/mapReturn';

/** Does an in-app page sit before this one? React Router keeps an index in history.state. */
export function hasAppHistory(): boolean {
  return ((window.history.state as { idx?: number } | null)?.idx ?? 0) > 0;
}

export function BackLink({ to, label = 'Back', className = 'back-link', children }: { to: string; label?: string; className?: string; children?: ReactNode }) {
  const navigate = useNavigate();
  return (
    <Link
      to={to}
      className={className}
      onClick={(ev) => {
        clearOpenedFromMap();
        if (hasAppHistory()) {
          ev.preventDefault();
          navigate(-1);
        }
      }}
    >
      {children ?? (
        <>
          <ChevronDown /> {label}
        </>
      )}
    </Link>
  );
}
