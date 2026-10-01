import { useEffect, useRef } from 'react';
import { Map as MapLibreMap, setWorkerUrl } from 'maplibre-gl';
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Metro } from '../config/metros';
import { MAP_PROVIDER } from './provider';

// The map draws tiles in a background helper file. Let Vite package it and
// tell MapLibre where it is (it can't find it on its own after bundling).
setWorkerUrl(mapWorkerUrl);

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
    // Start the map credits collapsed to a small (i) button.
    map.once('load', () => {
      container.current
        ?.querySelector('.maplibregl-ctrl-attrib')
        ?.classList.remove('maplibregl-compact-show');
    });
    return () => map.remove();
  }, [metro]);

  return <div ref={container} className="basemap" />;
}
