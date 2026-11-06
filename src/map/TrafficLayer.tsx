import { useContext, useEffect, useRef } from 'react';
import { Marker } from 'maplibre-gl';
import { MapContext } from './BaseMap';
import { THEME } from '../config/theme';
import { cueWord, type RoadCue } from '../data';

/**
 * The Map's Traffic mode (build 7.2, Section E; mock getting-there/01): one soft blob per area in the three road
 * blues (E5: areas first, corridors later; E6: their own blues, no verdict colors, never red, orange or yellow) and a
 * label with the area's name, a swatch and the cue word for the hour the sheet's slider sits on. Area names only,
 * never a road (R4b). The blob is about the zone's own radius (a mile and a quarter), so it reads as a crowd
 * forecast around the venues, not a route. Crowd pins stay off in this mode.
 */
export interface RoadArea {
  id: string;
  name: string;
  center: [number, number];
  cue: RoadCue;
}

const SOURCE = 'road-areas';
const LAYER = 'road-blobs';
/** The zone's radius, about 2 km (gridlock.ts ZONE_MILES). */
const RADIUS_M = 2012;
/** Meters per pixel at zoom 0 on the equator: MapLibre's world is 512 pixels wide (40,075,016.686 m ÷ 512). */
const MPP_ZOOM0 = 78271.517;

const CUE_COLOR: Record<RoadCue, string> = { light: THEME.roadLight, busy: THEME.roadBusy, heavy: THEME.roadHeavy };

function featureCollection(areas: readonly RoadArea[]) {
  return {
    type: 'FeatureCollection' as const,
    features: areas.map((a) => ({
      type: 'Feature' as const,
      id: a.id,
      geometry: { type: 'Point' as const, coordinates: a.center },
      properties: {
        id: a.id,
        color: CUE_COLOR[a.cue],
        // Pixels at zoom 0 for the zone's radius at this latitude; the paint doubles it per zoom level.
        r0: RADIUS_M / (MPP_ZOOM0 * Math.cos((a.center[1] * Math.PI) / 180)),
      },
    })),
  };
}

function labelFor(el: HTMLElement, a: RoadArea) {
  el.innerHTML = '';
  const name = document.createElement('span');
  name.className = 'road-label-name';
  name.textContent = a.name;
  const cue = document.createElement('span');
  cue.className = 'road-label-cue';
  const swatch = document.createElement('span');
  swatch.className = `road-swatch ${a.cue}`;
  swatch.setAttribute('aria-hidden', 'true');
  cue.append(swatch, document.createTextNode(cueWord(a.cue)));
  el.append(name, cue);
  el.setAttribute('aria-label', `${a.name}, ${cueWord(a.cue)}`);
}

export function TrafficLayer({ areas }: { areas: readonly RoadArea[] }) {
  const map = useContext(MapContext);
  const markers = useRef<Map<string, Marker>>(new Map());

  useEffect(() => {
    if (!map) return;
    const add = () => {
      if (map.getSource(SOURCE)) return;
      map.addSource(SOURCE, { type: 'geojson', promoteId: 'id', data: featureCollection(areas) });
      const beforeLabel = map.getStyle().layers?.find((layer) => layer.type === 'symbol')?.id;
      map.addLayer(
        {
          id: LAYER,
          type: 'circle',
          source: SOURCE,
          paint: {
            'circle-color': ['get', 'color'] as never,
            'circle-radius': ['interpolate', ['exponential', 2], ['zoom'], 0, ['get', 'r0'], 22, ['*', ['get', 'r0'], 4194304]] as never,
            'circle-blur': 0.6,
            'circle-opacity': 0.55,
            'circle-stroke-width': 0,
          },
        },
        beforeLabel,
      );
    };
    // The base map renders its layers only once the style is in, as the crowd layer relies on; add straight away.
    add();
    return () => {
      if (map.getLayer(LAYER)) map.removeLayer(LAYER);
      if (map.getSource(SOURCE)) map.removeSource(SOURCE);
      for (const m of markers.current.values()) m.remove();
      markers.current.clear();
    };
    // Mount once; the data effect below keeps it current.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useEffect(() => {
    if (!map) return;
    const source = map.getSource(SOURCE) as { setData?: (d: unknown) => void } | undefined;
    source?.setData?.(featureCollection(areas));
    const seen = new Set<string>();
    for (const a of areas) {
      seen.add(a.id);
      let marker = markers.current.get(a.id);
      if (!marker) {
        const el = document.createElement('div');
        el.className = 'road-label';
        marker = new Marker({ element: el, anchor: 'bottom', offset: [0, -6], pitchAlignment: 'viewport', rotationAlignment: 'viewport' }).setLngLat(a.center).addTo(map);
        markers.current.set(a.id, marker);
      }
      labelFor(marker.getElement(), a);
    }
    for (const [id, m] of markers.current) {
      if (!seen.has(id)) {
        m.remove();
        markers.current.delete(id);
      }
    }
  }, [map, areas]);

  return null;
}
