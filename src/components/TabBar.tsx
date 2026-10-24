import type { ComponentType } from 'react';
import { NavLink } from 'react-router-dom';
import { CalendarIcon, MapIcon, PeopleIcon, PersonIcon, PlusIcon } from './Icons';

// Build 7's bar (Kylie, Oct 21–22, 2026; mocks 01 and 02): Explore · Upcoming · (+) · Activity · You. The Stubs tab's
// history lives under You; Following split into Upcoming (what you follow and plan) and Activity (the feed). The
// center "+" is a button that opens the Log an event sheet, not a destination, so it never reads as selected; it is
// a 40 px filled circle flush with the other tabs (build 7.1, item 14; it was raised in build 7 and something covered
// it), unlabeled, and replaces the floating "+ Stub it". Home stays reachable at /home.
interface Tab {
  to: string;
  label: string;
  Icon: ComponentType<{ size?: number }>;
}

const LEFT: Tab[] = [
  { to: '/explore', label: 'Explore', Icon: MapIcon },
  { to: '/upcoming', label: 'Upcoming', Icon: CalendarIcon },
];
const RIGHT: Tab[] = [
  { to: '/activity', label: 'Activity', Icon: PeopleIcon },
  { to: '/you', label: 'You', Icon: PersonIcon },
];

export function TabBar({ onLog }: { onLog: () => void }) {
  const tab = ({ to, label, Icon }: Tab) => (
    <NavLink key={to} to={to} className="tab">
      <Icon />
      {label}
    </NavLink>
  );
  return (
    <nav className="tabbar" aria-label="Main">
      {LEFT.map(tab)}
      <button type="button" className="tab tab-log" aria-label="Log an event" aria-haspopup="dialog" onClick={onLog}>
        <span className="tab-log-circle">
          <PlusIcon />
        </span>
      </button>
      {RIGHT.map(tab)}
    </nav>
  );
}
