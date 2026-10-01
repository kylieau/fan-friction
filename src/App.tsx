import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { FirstRunTips } from './components/FirstRunTips';
import { MapScreen } from './screens/MapScreen';
import { NightsScreen } from './screens/NightsScreen';
import { CompareScreen } from './screens/CompareScreen';
import { YouScreen } from './screens/YouScreen';
import { getPref, setPref } from './lib/prefs';

function Shell() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
          <Route path="/nights" element={<NightsScreen />} />
          <Route path="/compare" element={<CompareScreen />} />
          <Route
            path="/you"
            element={
              <YouScreen
                onShowTips={() => {
                  navigate('/');
                  setShowTips(true);
                }}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <TabBar />
      {/* The tips point at the map, so they only show there. */}
      {showTips && pathname === '/' && <FirstRunTips onDone={finishTips} />}
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
