import { lazy, Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getExploreView, setExploreView } from '../lib/view';
import { CalendarScreen } from './CalendarScreen';

// The map and its library load only when Explore shows the map, not with the rest of the app.
const MapScreen = lazy(() => import('./MapScreen').then((m) => ({ default: m.MapScreen })));
const ExploreListScreen = lazy(() => import('./ExploreListScreen').then((m) => ({ default: m.ExploreListScreen })));

/**
 * Explore: one city, two views (build notes 4, 1.1). Map is the default and the app remembers
 * the last view on this device. The old stand-alone calendar page stays reachable at
 * ?view=calendar, unlinked (Kylie, Oct 5).
 *
 * Which view opens: an explicit ?view=map|list in the address wins; "Pick a date" (?pick=1) is
 * the Map's month sheet, so it opens the Map; otherwise the view this device last showed.
 */
export function ExploreScreen() {
  const [params] = useSearchParams();
  const view = params.get('view');
  // The view shown is the view remembered, so links inside it (a day step, a date pick) that name no view stay in it.
  useEffect(() => {
    if (view === 'map' || view === 'list') setExploreView(view);
  }, [view]);
  if (view === 'calendar') return <CalendarScreen />;
  const wanted = view === 'map' || view === 'list' ? view : params.get('pick') === '1' ? 'map' : getExploreView();
  const List = wanted === 'list' ? ExploreListScreen : MapScreen;
  return (
    <Suspense fallback={<div className="screen map-screen" aria-busy />}>
      <List />
    </Suspense>
  );
}
