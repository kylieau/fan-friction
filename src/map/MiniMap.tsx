import { useContext, useEffect } from 'react';
import { LngLatBounds } from 'maplibre-gl';
import type { Metro } from '../config/metros';
import { BaseMap, MapContext } from './BaseMap';
import type { CrowdPoint } from './crowdPoints';
import { CrowdLayer } from './CrowdLayer';

/**
 * The small, non-interactive map on Home. Its own file so the map library
 * loads only where a map shows (Home and Explore), not on every tab.
 * Loaded lazily; the default export is what React.lazy wants.
 */
export default function MiniMap({ metro, points }: { metro: Metro; points: CrowdPoint[] }) {
  return (
    <BaseMap metro={metro} interactive={false}>
      <CrowdLayer points={points} selectedId={null} onSelect={() => {}} />
      <MiniCamera points={points} />
    </BaseMap>
  );
}

/** Frames the venues in the small map. No sheet or header to keep clear of. */
function MiniCamera({ points }: { points: CrowdPoint[] }) {
  const map = useContext(MapContext);
  const key = points.map((p) => p.event.id).join('|');
  useEffect(() => {
    if (!map || points.length === 0) return;
    const bounds = new LngLatBounds();
    for (const p of points) bounds.extend(p.location);
    map.fitBounds(bounds, { padding: { top: 28, bottom: 56, left: 36, right: 36 }, maxZoom: 11, duration: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, key]);
  return null;
}
