import { NavLink } from 'react-router-dom';
import { MapIcon, PeopleIcon, PersonIcon, TicketIcon } from './Icons';

// The build 3 nav (Kylie, Oct 11–12, 2026; every mock in docs/design/build3/): Explore, Stubs,
// Following, You. Home left the bar: today's events are Explore, your next event is Stubs ›
// Upcoming, friends and favorites are Following. It stays reachable at /home. Compare stays at /compare.
const TABS = [
  { to: '/explore', label: 'Explore', Icon: MapIcon },
  { to: '/stubs', label: 'Stubs', Icon: TicketIcon },
  { to: '/following', label: 'Following', Icon: PeopleIcon },
  { to: '/you', label: 'You', Icon: PersonIcon },
];

export function TabBar() {
  return (
    <nav className="tabbar" aria-label="Main">
      {TABS.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} end={to === '/'} className="tab">
          <Icon />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
