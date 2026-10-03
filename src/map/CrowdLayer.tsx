import { useContext, useEffect, useRef } from 'react';
import { LngLatBounds, Marker } from 'maplibre-gl';
import { MapContext } from './BaseMap';
import { crowdThousands, type CrowdPoint } from './crowdPoints';

const SOURCE = 'crowds';

interface Props {
  points: CrowdPoint[];
  /** The event picked in the list or on the map; its dot gets a ring and its label a highlight. */
  selectedId: string | null;
  /** Called with an event id (a label or dot was tapped) or null (empty map was tapped). */
  onSelect: (id: string | null) => void;
  /** Space under the header and the collapsed sheet, kept clear of dots and labels. */
  insets: { top: number; bottom: number };
}

/**
 * The Crowds layer: a gold glow at each venue (bigger for bigger venues,
 * stronger when the known crowd filled more of it) plus a small label.
 * Draws nothing when there are no points, so a quiet date leaves the plain map.
 */
export function CrowdLayer({ points, selectedId, onSelect, insets }: Props) {
  const map = useContext(MapContext);
  const selectRef = useRef(onSelect);
  selectRef.current = onSelect;

  useEffect(() => {
    if (!map || points.length === 0) return;

    map.addSource(SOURCE, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: points.map((p) => ({
          type: 'Feature',
          geometry: { type: 'Point', coordinates: p.location },
          properties: { id: p.event.id, venue: p.venueName, upcoming: p.upcoming, capacity: p.capacity ?? 20000, fill: p.fill ?? -1 },
        })),
      },
    });
    // Radius grows with capacity (a 90k stadium glows about twice as wide as a 20k arena).
    const radius = ['interpolate', ['linear'], ['get', 'capacity'], 15000, 26, 95000, 60] as never;
    // Known crowds glow in proportion to how full the venue was; unknown ones are faint.
    const strength = ['case', ['get', 'upcoming'], 0.12, ['<', ['get', 'fill'], 0], 0.22, ['+', 0.3, ['*', 0.5, ['get', 'fill']]]] as never;
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
        // Gold for nights with a crowd to show; hollow white for events still to come.
        'circle-color': ['case', ['get', 'upcoming'], '#FFFFFF', '#FFD100'] as never,
        'circle-radius': 6,
        'circle-stroke-color': '#005A9C',
        'circle-stroke-width': 2,
      },
    });

    map.addLayer({
      id: 'crowd-selected',
      type: 'circle',
      source: SOURCE,
      filter: ['==', ['get', 'id'], ''],
      paint: { 'circle-color': 'rgba(0,0,0,0)', 'circle-radius': 13, 'circle-stroke-color': '#0f1b2d', 'circle-stroke-width': 3 },
    });

    // Tapping a dot picks its event (the first one, where several share a venue; their labels pick each one).
    const onDot = (e: { features?: { properties?: Record<string, unknown> }[]; originalEvent?: Event }) => {
      const id = e.features?.[0]?.properties?.id;
      if (typeof id === 'string') selectRef.current(id);
    };
    const onEmpty = (e: { point: { x: number; y: number } }) => {
      const hit = map.queryRenderedFeatures([e.point.x, e.point.y] as never, { layers: ['crowd-core', 'crowd-glow'] });
      if (hit.length === 0) selectRef.current(null);
    };
    map.on('click', 'crowd-core', onDot as never);
    map.on('click', 'crowd-glow', onDot as never);
    map.on('click', onEmpty as never);

    // Frame every event, leaving room for the date header above and the sheet below.
    const bounds = new LngLatBounds();
    for (const p of points) bounds.extend(p.location);
    map.fitBounds(bounds, { padding: { top: insets.top + 20, bottom: insets.bottom + 20, left: 75, right: 75 }, maxZoom: 11.5, duration: 0 });

    // Labels: the name, the crowd in thousands (40.0k), ★ for the biggest, and SOLD OUT.
    // Never a full count up here. The sheet keeps the fuller wording.
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
    const LABEL_W = 176;
    const view = { w: map.getContainer().clientWidth, h: map.getContainer().clientHeight - insets.bottom };
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
            `<span class="crowd-line" data-id="${escapeHtml(p.event.id)}"><span class="crowd-name">${p.biggest ? '★ ' : ''}${escapeHtml(p.event.title)}</span>` +
            (p.count !== undefined ? `<b class="tag-count">${escapeHtml(crowdThousands(p.count))}</b>` : '') +
            (p.dayTag ? `<b class="tag-day">${escapeHtml(p.dayTag)}</b>` : '') +
            (p.soldOut ? `<b class="tag-soldout">SOLD OUT</b>` : '') +
            `</span>`,
        )
        .join('');
      el.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const id = (ev.target as HTMLElement).closest<HTMLElement>('.crowd-line')?.dataset.id;
        if (id) selectRef.current(id);
      });
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
        o.box.x0 >= 4 && o.box.x1 <= view.w - 4 && o.box.y0 >= insets.top && o.box.y1 <= view.h && !taken.some((t) => clash(o.box, t));
      const pick = options.find(fits) ?? options[0];
      taken.push(pick.box);
      return new Marker({ element: el, anchor: pick.anchor, offset: [...pick.offset] })
        .setLngLat([lng, lat])
        .addTo(map);
    });

    return () => {
      for (const m of markers) m.remove();
      map.off('click', 'crowd-core', onDot as never);
      map.off('click', 'crowd-glow', onDot as never);
      map.off('click', onEmpty as never);
      if (map.getLayer('crowd-selected')) map.removeLayer('crowd-selected');
      if (map.getLayer('crowd-core')) map.removeLayer('crowd-core');
      if (map.getLayer('crowd-glow')) map.removeLayer('crowd-glow');
      if (map.getSource(SOURCE)) map.removeSource(SOURCE);
    };
  }, [map, points, insets.top, insets.bottom]);

  // Selection is one thing: the ring on the dot and the highlight on its label follow the same id.
  useEffect(() => {
    if (!map || points.length === 0) return;
    if (map.getLayer('crowd-selected')) map.setFilter('crowd-selected', ['==', ['get', 'id'], selectedId ?? '']);
    for (const line of map.getContainer().querySelectorAll<HTMLElement>('.crowd-line')) {
      line.classList.toggle('selected', line.dataset.id === selectedId);
    }
  }, [map, points, selectedId]);

  return null;
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
