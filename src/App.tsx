import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { LogSheet } from './components/LogSheet';
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
import { ActivityScreen } from './screens/ActivityScreen';
import { UpcomingScreen } from './screens/UpcomingScreen';
import { RanksScreen } from './screens/RanksScreen';
import { RecapScreen } from './screens/RecapScreen';
import { DateScreen } from './screens/DateScreen';
import { getHomeId } from './lib/homeCity';
import { DEFAULT_METRO, METROS } from './config/metros';
import { backfillLegacyCrowds, getCityDate, lockCrowds, retitleStubs, settlePassedPlans, subscribeLogLoaded, todayIn } from './data';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { getAccount, getMyProfile, linkConfirmedSuggestions, setStubDefault, subscribeAccount } from './data';
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

/**
 * Following became two tabs in build 7: its Faves side is Upcoming, its Friends side (`?tab=friends`) is Activity.
 * Old links land on the right one.
 */
function FollowingRedirect() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const friends = params.get('tab') === 'friends';
  params.delete('tab');
  const rest = params.toString();
  return <Navigate to={`${friends ? '/activity' : '/upcoming'}${rest ? `?${rest}` : ''}`} replace />;
}

/** An old address that lands on Explore in one view: the rest of its query (city, date) rides along (Codex, stage 2). */
function ExploreRedirect({ view }: { view: string }) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  params.set('view', view);
  return <Navigate to={`/explore?${params.toString()}`} replace />;
}

/** An old address that keeps its query on the way to its new one. */
function KeepQuery({ to }: { to: string }) {
  const { search } = useLocation();
  return <Navigate to={`${to}${search}`} replace />;
}

/** /stubs became the Your stubs page under You (build 7); the query (`?filter=`) rides along, and so does a tag path. */
function StubsRedirect() {
  const { pathname, search } = useLocation();
  return <Navigate to={`/you${pathname}${search}`} replace />;
}

function Shell() {
  const { pathname, key: locationKey } = useLocation();
  // The Log an event sheet (build 7): opened by the tab bar's "+", closed by a tap outside, Escape, or going anywhere
  // (every navigation, even to the page already shown: Codex, stage 2).
  const [logging, setLogging] = useState(false);
  useEffect(() => {
    setLogging(false);
  }, [locationKey]);
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
    // A fan-added event the nightly job confirmed: my hand plan or stub moves onto it (step 2, Oct 21, 2026).
    void linkConfirmedSuggestions();
    return () => {
      current = false;
    };
  }, [account?.id]);

  // An Attending date becomes Attended once it passes: at open, and again once the account copy is in.
  // Then stubs made from an event take its current name, once per log (Kylie, Oct 14).
  // Warm today's listings for the home city, so the Log sheet's "Happening now" is there on a stadium network (build 7, §3.2).
  useEffect(() => {
    const home = getHomeId();
    if (home) void getCityDate(home, todayIn(METROS[home] ?? DEFAULT_METRO)).catch(() => undefined);
  }, []);

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
          {/* Build 7: Upcoming and Activity are tabs; Your stubs is a page under You. The old addresses redirect. */}
          <Route path="/upcoming" element={<UpcomingScreen />} />
          <Route path="/activity" element={<ActivityScreen />} />
          <Route path="/you/stubs" element={<StubsScreen />} />
          <Route path="/you/ranks" element={<RanksScreen />} />
          <Route path="/you/recap" element={<RecapScreen />} />
          <Route path="/you/stubs/tag/:tag" element={<TagScreen />} />
          <Route path="/stubs" element={<StubsRedirect />} />
          <Route path="/stubs/tag/:tag" element={<StubsRedirect />} />
          <Route path="/following" element={<FollowingRedirect />} />
          <Route path="/calendar" element={<ExploreRedirect view="calendar" />} />
          <Route path="/date/:date" element={<DateScreen />} />
          <Route path="/event/:id" element={<EventScreen />} />
          <Route path="/favorites" element={<KeepQuery to="/upcoming" />} />
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
          <Route path="/nights" element={<ExploreRedirect view="list" />} />
          <Route path="/night/:date" element={<OldDateRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <TabBar onLog={() => setLogging(true)} />
      {logging && <LogSheet onClose={() => setLogging(false)} />}
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
