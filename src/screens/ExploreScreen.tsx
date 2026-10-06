import { lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setExploreView, type ExploreView } from '../lib/view';
import { CalendarScreen } from './CalendarScreen';

// The map and its library load only when Explore shows the map, not with the rest of the app.
const MapScreen = lazy(() => import('./MapScreen').then((m) => ({ default: m.MapScreen })));

/**
 * Explore: one city, one page (Kylie, Oct 5: option A). The map with a week strip
 * above it; the month grid, search and Famous nights open as a sheet over the map.
 * The old stand-alone calendar page stays reachable at ?view=calendar, unlinked.
 */
export function ExploreScreen() {
  const [params] = useSearchParams();
  if (params.get('view') === 'calendar') return <CalendarScreen />;
  return (
    <Suspense fallback={<div className="screen map-screen" aria-busy />}>
      <MapScreen />
    </Suspense>
  );
}

/** The Map / Calendar segmented control. Both screens put it in their header. */
export function ExploreSwitch({ view }: { view: ExploreView }) {
  const [params, setParams] = useSearchParams();
  const pick = (next: ExploreView) => {
    if (next === view) return;
    setExploreView(next);
    const nextParams = new URLSearchParams(params);
    nextParams.set('view', next);
    setParams(nextParams, { replace: true });
  };
  return (
    <div className="segmented small explore-switch" role="tablist" aria-label="Explore view">
      <button type="button" role="tab" aria-selected={view === 'map'} onClick={() => pick('map')}>
        Map
      </button>
      <button type="button" role="tab" aria-selected={view === 'calendar'} onClick={() => pick('calendar')}>
        Calendar
      </button>
    </div>
  );
}
