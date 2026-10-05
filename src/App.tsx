import { useState, useSyncExternalStore } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { FirstRunTips } from './components/FirstRunTips';
import { HomePicker } from './components/HomePicker';
import { HomeScreen } from './screens/HomeScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { EventScreen } from './screens/EventScreen';
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
import { getCityDate, settlePassedPlans } from './data';
import { useEffect } from 'react';

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

  // An Attending date becomes Attended once it passes.
  useEffect(() => {
    void settlePassedPlans(getCityDate);
  }, []);

  const finishTips = () => {
    setPref('tipsDone', true);
    setShowTips(false);
  };

  return (
    <div className="app">
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/calendar" element={<Navigate to="/explore?view=calendar" replace />} />
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
                  navigate('/explore?view=map');
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
      {/* Home city is chosen first, on Home or Explore. The tips explain the map, so they show on Explore. */}
      {!homeId && (pathname === '/' || pathname === '/explore') && <HomePicker />}
      {showTips && Boolean(homeId) && pathname === '/explore' && <FirstRunTips onDone={finishTips} />}
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
