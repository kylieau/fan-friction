import { NavLink } from 'react-router-dom';
import { CalendarIcon, MapIcon, PersonIcon, StarIcon } from './Icons';

const TABS = [
  { to: '/', label: 'Map', Icon: MapIcon },
  { to: '/nights', label: 'Calendar', Icon: CalendarIcon },
  // Favorites took Compare's place (Kylie, Oct 5). Compare's screen stays reachable at /compare.
  { to: '/favorites', label: 'Favorites', Icon: StarIcon },
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
