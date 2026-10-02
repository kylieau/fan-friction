import { createContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Map as MapLibreMap, setWorkerUrl } from 'maplibre-gl';
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Metro } from '../config/metros';
import { MAP_PROVIDER } from './provider';

// The map draws tiles in a background helper file. Let Vite package it and
// tell MapLibre where it is (it can't find it on its own after bundling).
setWorkerUrl(mapWorkerUrl);

/** The loaded map, handed to whatever layers are drawn on top (null until it's ready). */
export const MapContext = createContext<MapLibreMap | null>(null);

// The plain base map. Crowd, traffic and TV layers go on top of it as
// separate layers (children), each reading the map from MapContext.
export function BaseMap({ metro, children }: { metro: Metro; children?: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<MapLibreMap | null>(null);

  useEffect(() => {
    if (!container.current) return;
    const instance = new MapLibreMap({
      container: container.current,
      style: MAP_PROVIDER.styleUrl,
      center: metro.center,
      zoom: metro.zoom,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: { compact: true },
    });
    instance.touchZoomRotate.disableRotation();
    // Start the map credits collapsed to a small (i) button.
    instance.once('load', () => {
      container.current
        ?.querySelector('.maplibregl-ctrl-attrib')
        ?.classList.remove('maplibregl-compact-show');
      setMap(instance);
    });
    return () => {
      setMap(null);
      instance.remove();
    };
  }, [metro]);

  return (
    <>
      <div ref={container} className="basemap" />
      <MapContext.Provider value={map}>{children}</MapContext.Provider>
    </>
  );
}
