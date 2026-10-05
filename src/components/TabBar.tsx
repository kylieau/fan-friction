import { NavLink } from 'react-router-dom';
import { HomeIcon, MapIcon, PersonIcon, StarIcon } from './Icons';

const TABS = [
  { to: '/', label: 'Home', Icon: HomeIcon },
  { to: '/explore', label: 'Explore', Icon: MapIcon },
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
