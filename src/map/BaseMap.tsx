import { useEffect, useRef } from 'react';
import { Map as MapLibreMap } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Metro } from '../config/metros';
import { MAP_PROVIDER } from './provider';

// The plain base map. Crowd, traffic and TV layers go on top of it as
// separate layers in later steps.
export function BaseMap({ metro }: { metro: Metro }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const map = new MapLibreMap({
      container: container.current,
      style: MAP_PROVIDER.styleUrl,
      center: metro.center,
      zoom: metro.zoom,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: { compact: true },
    });
    map.touchZoomRotate.disableRotation();
    return () => map.remove();
  }, [metro]);

  return <div ref={container} className="basemap" />;
}
