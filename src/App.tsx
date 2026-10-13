import { useSyncExternalStore } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { HomePicker } from './components/HomePicker';
import { HomeScreen } from './screens/HomeScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { EventScreen } from './screens/EventScreen';
import { CompareScreen } from './screens/CompareScreen';
import { YouScreen } from './screens/YouScreen';
import { AddEntryScreen } from './screens/AddEntryScreen';
import { ManualEntryScreen } from './screens/ManualEntryScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ProfileEditScreen } from './screens/ProfileEditScreen';
import { PeopleScreen } from './screens/PeopleScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { FavoritePage } from './screens/FavoritePage';
import { StubsScreen } from './screens/StubsScreen';
import { FollowingScreen } from './screens/FollowingScreen';
import { DateScreen } from './screens/DateScreen';
import { getHomeId, subscribeHome } from './lib/homeCity';
import { backfillLegacyCrowds, getCityDate, lockCrowds, settlePassedPlans, subscribeLogLoaded } from './data';
import { useEffect } from 'react';

/** /night/<date> was the date page's first address. */
function OldDateRedirect() {
  const { pathname, search } = useLocation();
  return <Navigate to={pathname.replace(/^\/night\//, '/date/') + search} replace />;
}

function Shell() {
  const { pathname } = useLocation();
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);

  // An Attending date becomes Attended once it passes: at open, and again once the account copy is in.
  useEffect(() => {
    void settlePassedPlans(getCityDate, getHomeId())
      .then(() => backfillLegacyCrowds(getCityDate))
      .then(() => lockCrowds(getCityDate));
    return subscribeLogLoaded(() =>
      void settlePassedPlans(getCityDate, getHomeId())
        .then(() => backfillLegacyCrowds(getCityDate))
        .then(() => lockCrowds(getCityDate)),
    );
  }, []);

  return (
    <div className="app">
      <main className="app-main">
        <Routes>
          {/* The app opens on Explore (build 3 nav); Home stays reachable at /home. */}
          <Route path="/" element={<Navigate to="/explore" replace />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/stubs" element={<StubsScreen />} />
          <Route path="/following" element={<FollowingScreen />} />
          <Route path="/calendar" element={<Navigate to="/explore?view=calendar" replace />} />
          <Route path="/date/:date" element={<DateScreen />} />
          <Route path="/event/:id" element={<EventScreen />} />
          <Route path="/favorites" element={<Navigate to="/following" replace />} />
          <Route path="/favorites/edit" element={<FavoritesScreen />} />
          <Route path="/favorites/:kind/:id" element={<FavoritePage />} />
          <Route path="/compare" element={<CompareScreen />} />
          <Route path="/p/:handle" element={<ProfileScreen />} />
          <Route path="/profile/edit" element={<ProfileEditScreen />} />
          <Route path="/you" element={<YouScreen />} />
          <Route path="/you/add" element={<AddEntryScreen />} />
          <Route path="/you/people" element={<PeopleScreen />} />
          <Route path="/entry/:id" element={<ManualEntryScreen />} />
          <Route path="/you/settings" element={<SettingsScreen />} />
          <Route path="/nights" element={<Navigate to="/explore?view=list" replace />} />
          <Route path="/night/:date" element={<OldDateRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <TabBar />
      {/* Home city is chosen first, on Explore or Home. No first-run tips: the ? and the empty states carry it (3.17). */}
      {!homeId && (pathname === '/explore' || pathname === '/home') && <HomePicker />}
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
