import { useContext, useEffect } from 'react';
import { LngLatBounds, Marker } from 'maplibre-gl';
import { MapContext } from './BaseMap';
import type { CrowdPoint } from './crowdPoints';

const SOURCE = 'crowds';
/** About how tall the bottom sheet is, so labels stay clear of it. */
const SHEET_HEIGHT = 270;

/**
 * The Crowds layer: a gold glow at each venue (bigger for bigger venues,
 * stronger when the known crowd filled more of it) plus a small label.
 * Draws nothing when there are no points, so a quiet date leaves the plain map.
 */
export function CrowdLayer({ points }: { points: CrowdPoint[] }) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map || points.length === 0) return;

    map.addSource(SOURCE, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: points.map((p) => ({
          type: 'Feature',
          geometry: { type: 'Point', coordinates: p.location },
          properties: { capacity: p.capacity ?? 20000, fill: p.fill ?? -1 },
        })),
      },
    });
    // Radius grows with capacity (a 90k stadium glows about twice as wide as a 20k arena).
    const radius = ['interpolate', ['linear'], ['get', 'capacity'], 15000, 26, 95000, 60] as never;
    // Known crowds glow in proportion to how full the venue was; unknown ones are faint.
    const strength = ['case', ['<', ['get', 'fill'], 0], 0.22, ['+', 0.3, ['*', 0.5, ['get', 'fill']]]] as never;
    map.addLayer({
      id: 'crowd-glow',
      type: 'circle',
      source: SOURCE,
      paint: { 'circle-color': '#FFD100', 'circle-radius': radius, 'circle-blur': 0.9, 'circle-opacity': strength },
    });
    map.addLayer({
      id: 'crowd-core',
      type: 'circle',
      source: SOURCE,
      paint: {
        'circle-color': '#FFD100',
        'circle-radius': 6,
        'circle-stroke-color': '#005A9C',
        'circle-stroke-width': 2,
      },
    });

    // Frame every event, leaving room for the date header above and the sheet below.
    const bounds = new LngLatBounds();
    for (const p of points) bounds.extend(p.location);
    map.fitBounds(bounds, { padding: { top: 60, bottom: 300, left: 75, right: 75 }, maxZoom: 11.5, duration: 0 });

    // Labels: just names, ★ for the biggest crowd and SOLD OUT. Counts (with their
    // kind) and friction chips live in the list below, so the map stays readable.
    // Dots that land close together share one label, so labels never pile up.
    const clusters: CrowdPoint[][] = [];
    for (const p of [...points].sort((x, y) => x.location[0] - y.location[0])) {
      const at = map.project(p.location);
      const home = clusters.find((c) => {
        const o = map.project(c[0].location);
        return Math.hypot(o.x - at.x, o.y - at.y) < 70;
      });
      if (home) home.push(p);
      else clusters.push([p]);
    }
    // Each label tries above, below, right and left of its dots and takes the first
    // spot that stays on screen (above the sheet) and doesn't cover another label or dot.
    const LABEL_W = 160;
    const view = { w: map.getContainer().clientWidth, h: map.getContainer().clientHeight - SHEET_HEIGHT };
    type Box = { x0: number; y0: number; x1: number; y1: number };
    const taken: Box[] = points.map((p) => {
      const at = map.project(p.location);
      return { x0: at.x - 8, y0: at.y - 8, x1: at.x + 8, y1: at.y + 8 };
    });
    const clash = (a: Box, b: Box) => a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;

    const markers = clusters.map((group) => {
      const el = document.createElement('div');
      el.className = 'crowd-label';
      el.innerHTML = group
        .map(
          (p) =>
            `<span class="crowd-line"><span class="crowd-name">${p.biggest ? '★ ' : ''}${escapeHtml(p.event.title)}</span>` +
            (p.soldOut ? `<b class="tag-soldout">SOLD OUT</b>` : '') +
            `</span>`,
        )
        .join('');
      const lng = group.reduce((sum, p) => sum + p.location[0], 0) / group.length;
      const lat = group.reduce((sum, p) => sum + p.location[1], 0) / group.length;
      const at = map.project([lng, lat]);
      const dots = group.map((p) => map.project(p.location));
      const gx0 = Math.min(...dots.map((d) => d.x));
      const gx1 = Math.max(...dots.map((d) => d.x));
      const gy0 = Math.min(...dots.map((d) => d.y));
      const gy1 = Math.max(...dots.map((d) => d.y));
      const h = 10 + group.length * 19;
      // Offsets are measured from the label's anchor (the group's center), so a
      // label can sit clear of the outermost dot rather than on top of it.
      const options = [
        { anchor: 'bottom', offset: [0, gy0 - at.y - 12], box: { x0: at.x - LABEL_W / 2, y0: gy0 - 12 - h, x1: at.x + LABEL_W / 2, y1: gy0 - 12 } },
        { anchor: 'top', offset: [0, gy1 - at.y + 12], box: { x0: at.x - LABEL_W / 2, y0: gy1 + 12, x1: at.x + LABEL_W / 2, y1: gy1 + 12 + h } },
        { anchor: 'left', offset: [gx1 - at.x + 14, 0], box: { x0: gx1 + 14, y0: at.y - h / 2, x1: gx1 + 14 + LABEL_W, y1: at.y + h / 2 } },
        { anchor: 'right', offset: [gx0 - at.x - 14, 0], box: { x0: gx0 - 14 - LABEL_W, y0: at.y - h / 2, x1: gx0 - 14, y1: at.y + h / 2 } },
      ] as const;
      const fits = (o: (typeof options)[number]) =>
        o.box.x0 >= 4 && o.box.x1 <= view.w - 4 && o.box.y0 >= 4 && o.box.y1 <= view.h && !taken.some((t) => clash(o.box, t));
      const pick = options.find(fits) ?? options[0];
      taken.push(pick.box);
      return new Marker({ element: el, anchor: pick.anchor, offset: [...pick.offset] })
        .setLngLat([lng, lat])
        .addTo(map);
    });

    return () => {
      for (const m of markers) m.remove();
      if (map.getLayer('crowd-core')) map.removeLayer('crowd-core');
      if (map.getLayer('crowd-glow')) map.removeLayer('crowd-glow');
      if (map.getSource(SOURCE)) map.removeSource(SOURCE);
    };
  }, [map, points]);

  return null;
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
