import { useSearchParams } from 'react-router-dom';
import { getExploreView, setExploreView, type ExploreView } from '../lib/view';
import { MapScreen } from './MapScreen';
import { CalendarScreen } from './CalendarScreen';

/**
 * Explore: one city, two views of its dates. The Map (pins, the read, the sheet)
 * or the Calendar (the shaded month, search, famous nights). The switch
 * remembers the last choice on this device; a `view` in the address overrides it.
 */
export function ExploreScreen() {
  const [params] = useSearchParams();
  const requested = params.get('view');
  const view: ExploreView = requested === 'calendar' || requested === 'map' ? requested : getExploreView();
  return view === 'calendar' ? <CalendarScreen /> : <MapScreen />;
}

/** The Map / Calendar segmented control. Both screens put it in their header. */
export function ExploreSwitch({ view }: { view: ExploreView }) {
  const [params, setParams] = useSearchParams();
  const pick = (next: ExploreView) => {
    if (next === view) return;
    setExploreView(next);
    const nextParams = new URLSearchParams(params);
    nextParams.set('view', next);
    // The map's "when" span means nothing to the calendar, and vice versa.
    nextParams.delete('when');
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
