import { useContext, useEffect, useRef } from 'react';
import { LngLatBounds, type LngLatLike, type Map as MapLibreMap } from 'maplibre-gl';
import { MapContext } from './BaseMap';
import type { CrowdPoint } from './crowdPoints';
import { setCityZoom } from './glowRadius';

const EASE_MS = 420;

function easeOut(t: number) {
  return 1 - (1 - t) * (1 - t);
}

interface KeepOut {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

/**
 * Room the header (through When and the temperature) and the visible sheet
 * take. The selected mark is kept in the map that is left.
 */
export function measureKeepOut(map: MapLibreMap, sheetOpen: boolean): KeepOut {
  const container = map.getContainer();
  const screen = container.closest('.map-screen');
  const height = container.clientHeight;
  const fallback = { top: 200, bottom: 150, left: 20, right: 20 };
  if (!screen || height < 80) return fallback;
  const mapRect = container.getBoundingClientRect();
  const header = screen.querySelector('.map-header');
  const chrome = screen.querySelector('.map-chrome');
  let top = 180;
  if (header) {
    const headerBottom = header.getBoundingClientRect().bottom - mapRect.top;
    const chromeBottom = chrome ? chrome.getBoundingClientRect().bottom - mapRect.top : headerBottom;
    top = Math.max(headerBottom, chromeBottom) + 12;
  }
  const sheet = screen.querySelector<HTMLElement>('.sheet');
  const topBlock = screen.querySelector<HTMLElement>('.sheet-top');
  let bottom = 140;
  if (sheet && topBlock) {
    const visible = sheetOpen ? sheet.offsetHeight : Math.min(sheet.offsetHeight, topBlock.offsetHeight + 12);
    bottom = visible + 12;
  }
  return {
    top: Math.min(Math.max(0, top), height * 0.48),
    bottom: Math.min(Math.max(0, bottom), height * 0.52),
    left: 20,
    right: 20,
  };
}

function panMarkIntoOpenMap(map: MapLibreMap, location: LngLatLike, pad: KeepOut) {
  const w = map.getContainer().clientWidth;
  const h = map.getContainer().clientHeight;
  const margin = 28;
  const left = pad.left + margin;
  const right = w - pad.right - margin;
  const top = pad.top + margin;
  const bottom = h - pad.bottom - margin;
  if (right - left < 48 || bottom - top < 48) return;
  const p = map.project(location);
  let x = p.x;
  let y = p.y;
  if (x < left) x = left;
  else if (x > right) x = right;
  if (y < top) y = top;
  else if (y > bottom) y = bottom;
  if (Math.abs(x - p.x) < 2 && Math.abs(y - p.y) < 2) return;
  const center = map.project(map.getCenter());
  const next = map.unproject([center.x + (p.x - x), center.y + (p.y - y)]);
  map.easeTo({ center: next, duration: EASE_MS, easing: easeOut });
}

/**
 * Frames the night's venues once, then slides the selected mark into the open
 * map when the selection changes or the sheet snaps open or closed. Dragging
 * the sheet does not move the camera.
 */
export function MapCamera({
  points,
  selectedId,
  sheetOpen,
}: {
  points: CrowdPoint[];
  selectedId: string | null;
  sheetOpen: boolean;
}) {
  const map = useContext(MapContext);
  const pointsRef = useRef(points);
  pointsRef.current = points;
  const frameKey = points.map((p) => p.event.id).join('|');

  useEffect(() => {
    if (!map || pointsRef.current.length === 0) return;
    const bounds = new LngLatBounds();
    for (const p of pointsRef.current) bounds.extend(p.location);
    const pad = measureKeepOut(map, sheetOpen);
    const w = map.getContainer().clientWidth;
    const h = map.getContainer().clientHeight;
    const fit = {
      padding: {
        top: Math.min(pad.top + 8, h * 0.42),
        bottom: Math.min(pad.bottom + 8, h * 0.46),
        left: Math.min(72, w * 0.2),
        right: Math.min(72, w * 0.2),
      },
      maxZoom: 11.5,
      duration: 0,
    };
    // Lock the glow's pixel sizes to this frame before the map moves, so the
    // discs land on the curve at the city view.
    const framed = map.cameraForBounds(bounds, fit);
    if (framed?.zoom != null) setCityZoom(framed.zoom);
    map.fitBounds(bounds, fit);
    const settled = map.getZoom();
    if (framed?.zoom == null || Math.abs(settled - framed.zoom) > 0.001) {
      setCityZoom(settled);
      map.fire('moveend');
    }
    // The night is framed when its events change, not when the sheet snaps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, frameKey]);

  useEffect(() => {
    if (!map || !selectedId) return;
    const point = pointsRef.current.find((p) => p.event.id === selectedId);
    if (!point) return;
    panMarkIntoOpenMap(map, point.location, measureKeepOut(map, sheetOpen));
  }, [map, selectedId, sheetOpen]);

  return null;
}
