import { useSearchParams } from 'react-router-dom';
import { firstCaptureDay } from '../data/cityList';
import { setExploreView, useView, type ExploreView } from '../lib/view';
import { ListIcon, MapIcon } from './Icons';

/**
 * Map | List (build notes 4, 1.1): a two-segment pill of icons left of search, the picked one a filled
 * Dodger-blue circle. Writes the remembered view and the address together, so links inside a view stay in it.
 */
export function ExploreModeSwitch({ view }: { view: ExploreView }) {
  const [params, setParams] = useSearchParams();
  const { metro, date, today } = useView();
  const pick = (next: ExploreView) => {
    if (next === view) return;
    setExploreView(next);
    const nextParams = new URLSearchParams(params);
    nextParams.set('view', next);
    nextParams.delete('pick');
    // The List starts at the city's first captured day (today when there is none); an older Map date opens on today.
    if (next === 'list') {
      const first = firstCaptureDay(metro.id);
      const from = first && first < today ? first : today;
      if (date < from) nextParams.delete('date');
    }
    setParams(nextParams, { replace: true, state: { fromSwitch: true } });
  };
  return (
    <div className="explore-mode-switch" role="tablist" aria-label="Explore view">
      <button type="button" role="tab" aria-selected={view === 'map'} aria-label="Map" onClick={() => pick('map')}>
        <MapIcon />
      </button>
      <button type="button" role="tab" aria-selected={view === 'list'} aria-label="List" onClick={() => pick('list')}>
        <ListIcon />
      </button>
    </div>
  );
}
