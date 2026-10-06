import { createContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { AttributionControl, Map as MapLibreMap, setWorkerUrl } from 'maplibre-gl';
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
export function BaseMap({
  metro,
  camera,
  children,
  interactive = true,
}: {
  metro: Metro;
  /** Used once, when returning to a map she already framed. Later city changes use that city's own center. */
  camera?: { center: [number, number]; zoom: number } | null;
  children?: ReactNode;
  /** False for a snapshot (the Home card): no panning, zooming or tapping. */
  interactive?: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);
  const cameraRef = useRef(camera);
  const [map, setMap] = useState<MapLibreMap | null>(null);

  useEffect(() => {
    if (!container.current) return;
    const start = cameraRef.current;
    cameraRef.current = null;
    const instance = new MapLibreMap({
      container: container.current,
      style: MAP_PROVIDER.styleUrl,
      center: start?.center ?? metro.center,
      zoom: start?.zoom ?? metro.zoom,
      dragRotate: false,
      pitchWithRotate: false,
      interactive,
      attributionControl: false,
    });
    // The map credit is required by the license. It sits in the bottom-left corner,
    // where map apps keep their legal line (Kylie, Oct 6); controls stay on the right.
    instance.addControl(new AttributionControl({ compact: true }), 'bottom-left');
    instance.touchZoomRotate.disableRotation();
    // Start the map credits collapsed to a small (i) button.
    instance.once('load', () => {
      warmQuietStyle(instance);
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

/**
 * Positron is already a light map. Water and its names are the cool blue
 * parts, so they shift toward sand. Roads are left as drawn. Nothing here
 * tints the map to match the pale header.
 */
function warmQuietStyle(map: MapLibreMap) {
  const set = (id: string, prop: string, value: string) => {
    if (!map.getLayer(id)) return;
    (map.setPaintProperty as (layer: string, name: string, color: string) => void)(id, prop, value);
  };
  set('background', 'background-color', '#f3f1ec');
  set('water', 'fill-color', '#d5d0c6');
  set('waterway', 'line-color', '#c9c3b8');
  set('water_name_point_label', 'text-color', '#6d675f');
  set('water_name_line_label', 'text-color', '#6d675f');
  set('waterway_line_label', 'text-color', '#6d675f');
}
