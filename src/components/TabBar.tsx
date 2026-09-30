import { NavLink } from 'react-router-dom';
import { CalendarIcon, CompareIcon, MapIcon, PersonIcon } from './Icons';

const TABS = [
  { to: '/', label: 'Map', Icon: MapIcon },
  { to: '/nights', label: 'Nights', Icon: CalendarIcon },
  { to: '/compare', label: 'Compare', Icon: CompareIcon },
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
