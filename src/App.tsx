import { useState, useSyncExternalStore } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { FirstRunTips } from './components/FirstRunTips';
import { HomePicker } from './components/HomePicker';
import { MapScreen } from './screens/MapScreen';
import { EventScreen } from './screens/EventScreen';
import { CalendarScreen } from './screens/CalendarScreen';
import { CompareScreen } from './screens/CompareScreen';
import { YouScreen } from './screens/YouScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ProfileEditScreen } from './screens/ProfileEditScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { FavoritePage } from './screens/FavoritePage';
import { DateScreen } from './screens/DateScreen';
import { getHomeId, subscribeHome } from './lib/homeCity';
import { getPref, setPref } from './lib/prefs';

/** /night/<date> was the date page's first address. */
function OldDateRedirect() {
  const { pathname, search } = useLocation();
  return <Navigate to={pathname.replace(/^\/night\//, '/date/') + search} replace />;
}

function Shell() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const [showTips, setShowTips] = useState(() => !getPref('tipsDone', false));

  const finishTips = () => {
    setPref('tipsDone', true);
    setShowTips(false);
  };

  return (
    <div className="app">
      <main className="app-main">
        <Routes>
          <Route path="/" element={<MapScreen />} />
          <Route path="/calendar" element={<CalendarScreen />} />
          <Route path="/date/:date" element={<DateScreen />} />
          <Route path="/event/:id" element={<EventScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/favorites/edit" element={<FavoritesScreen />} />
          <Route path="/favorites/:kind/:id" element={<FavoritePage />} />
          <Route path="/compare" element={<CompareScreen />} />
          <Route path="/p/:handle" element={<ProfileScreen />} />
          <Route path="/profile/edit" element={<ProfileEditScreen />} />
          <Route path="/you" element={<YouScreen />} />
          <Route
            path="/you/settings"
            element={
              <SettingsScreen
                onShowTips={() => {
                  navigate('/');
                  setShowTips(true);
                }}
              />
            }
          />
          <Route path="/nights" element={<Navigate to="/calendar" replace />} />
          <Route path="/night/:date" element={<OldDateRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <TabBar />
      {/* Home is chosen before the tips. Both point at the map, so they only show there. */}
      {!homeId && pathname === '/' && <HomePicker />}
      {showTips && Boolean(homeId) && pathname === '/' && <FirstRunTips onDone={finishTips} />}
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
