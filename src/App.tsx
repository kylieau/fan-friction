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
import { FavoritesScreen } from './screens/FavoritesScreen';
import { FavoritePage } from './screens/FavoritePage';
import { StubsScreen } from './screens/StubsScreen';
import { TagScreen } from './screens/TagScreen';
import { FollowingScreen } from './screens/FollowingScreen';
import { DateScreen } from './screens/DateScreen';
import { getHomeId } from './lib/homeCity';
import { backfillLegacyCrowds, getCityDate, lockCrowds, retitleStubs, settlePassedPlans, subscribeLogLoaded } from './data';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { getAccount, getMyProfile, setStubDefault, subscribeAccount } from './data';
import { levelFor } from './screens/SettingsPrivacyScreen';

/** /night/<date> was the date page's first address. */
function OldDateRedirect() {
  const { pathname, search } = useLocation();
  return <Navigate to={pathname.replace(/^\/night\//, '/date/') + search} replace />;
}

/**
 * The Settings sub-pages and the People page became dropdowns of the Settings panel on You (build 6, item 8): their
 * old addresses open the panel on that dropdown, so bookmarks and links keep working (a default). The People page's
 * own parameters (`?find=1`, `?chip=`) ride along.
 */
function PanelRedirect({ section }: { section: string }) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  params.set('panel', section);
  return <Navigate to={`/you?${params.toString()}`} replace />;
}

function Shell() {
  const { pathname } = useLocation();
  // The first-open picker: on while no home is set, and kept open after home is picked until Done.
  const [firstOpen, setFirstOpen] = useState(() => !getHomeId());

  // The level a new stub takes is the profile's switch (build 5, stub privacy); Private when signed out.
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  useEffect(() => {
    let current = true;
    if (!account) {
      setStubDefault('private');
      return;
    }
    getMyProfile().then((profile) => current && setStubDefault(levelFor(profile?.visibility)));
    return () => {
      current = false;
    };
  }, [account?.id]);

  // An Attending date becomes Attended once it passes: at open, and again once the account copy is in.
  // Then stubs made from an event take its current name, once per log (Kylie, Oct 14).
  useEffect(() => {
    void settlePassedPlans(getCityDate, getHomeId())
      .then(() => backfillLegacyCrowds(getCityDate))
      .then(() => lockCrowds(getCityDate))
      .then(() => retitleStubs(getCityDate));
    return subscribeLogLoaded(() =>
      void settlePassedPlans(getCityDate, getHomeId())
        .then(() => backfillLegacyCrowds(getCityDate))
        .then(() => lockCrowds(getCityDate))
        .then(() => retitleStubs(getCityDate)),
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
          <Route path="/stubs/tag/:tag" element={<TagScreen />} />
          <Route path="/following" element={<FollowingScreen />} />
          <Route path="/calendar" element={<Navigate to="/explore?view=calendar" replace />} />
          <Route path="/date/:date" element={<DateScreen />} />
          <Route path="/event/:id" element={<EventScreen />} />
          <Route path="/favorites" element={<Navigate to="/following" replace />} />
          <Route path="/favorites/edit" element={<FavoritesScreen />} />
          <Route path="/favorites/:kind/:id" element={<FavoritePage />} />
          <Route path="/compare" element={<CompareScreen />} />
          <Route path="/p/:handle" element={<ProfileScreen />} />
          <Route path="/profile/edit" element={<PanelRedirect section="profile" />} />
          <Route path="/you" element={<YouScreen />} />
          <Route path="/you/add" element={<AddEntryScreen />} />
          <Route path="/you/people" element={<PanelRedirect section="people" />} />
          <Route path="/entry/:id" element={<ManualEntryScreen />} />
          <Route path="/you/settings" element={<PanelRedirect section="1" />} />
          <Route path="/you/settings/cities" element={<PanelRedirect section="cities" />} />
          <Route path="/you/settings/privacy" element={<PanelRedirect section="privacy" />} />
          <Route path="/you/settings/crowd" element={<PanelRedirect section="crowd" />} />
          <Route path="/nights" element={<Navigate to="/explore?view=list" replace />} />
          <Route path="/night/:date" element={<OldDateRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <TabBar />
      {/* Home city is chosen first, on Explore or Home. No first-run tips: the ? and the empty states carry it (3.17).
          It stays open after home is set, so cities can be starred, until Done (build 5, item 8). */}
      {firstOpen && (pathname === '/explore' || pathname === '/home') && <HomePicker onDone={() => setFirstOpen(false)} />}
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
