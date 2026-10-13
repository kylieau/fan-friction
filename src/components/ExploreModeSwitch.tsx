import { useSearchParams } from 'react-router-dom';
import { setExploreView, type ExploreView } from '../lib/view';
import { ListIcon, MapIcon } from './Icons';

/**
 * Map | List (build notes 4, 1.1): a two-segment pill of icons left of search, the picked one a filled
 * Dodger-blue circle. Writes the remembered view and the address together, so links inside a view stay in it.
 */
export function ExploreModeSwitch({ view }: { view: ExploreView }) {
  const [params, setParams] = useSearchParams();
  const pick = (next: ExploreView) => {
    if (next === view) return;
    setExploreView(next);
    const nextParams = new URLSearchParams(params);
    nextParams.set('view', next);
    nextParams.delete('pick');
    setParams(nextParams, { replace: true });
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
