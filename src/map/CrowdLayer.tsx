import { useContext, useEffect, useRef } from 'react';
import { LngLatBounds, Marker } from 'maplibre-gl';
import { MapContext } from './BaseMap';
import { clockTime } from '../lib/dates';
import { mapTitle } from '../lib/eventTitle';
import { crowdShort, type CrowdPoint } from './crowdPoints';

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

    // One chip per event. Nearby shows stay separate chips; they are not folded into one label.
    // Line 1 is the name (★ for the biggest crowd). Line 2 is the start time and the short count.
    // Never a full count up here. The sheet keeps the fuller wording.
    const view = { w: map.getContainer().clientWidth, h: map.getContainer().clientHeight - insets.bottom };
    type Box = { x0: number; y0: number; x1: number; y1: number };
    const taken: Box[] = points.map((p) => {
      const at = map.project(p.location);
      return { x0: at.x - 8, y0: at.y - 8, x1: at.x + 8, y1: at.y + 8 };
    });
    const clash = (a: Box, b: Box) => a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;
    const overlapArea = (a: Box, b: Box) => {
      const x = Math.max(0, Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0));
      const y = Math.max(0, Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0));
      return x * y;
    };

    const markers: Marker[] = [];
    let cancelled = false;

    // Measure after the font is in, so a late font swap doesn't grow a chip into its neighbor.
    const placeLabels = () => {
      if (cancelled) return;
      for (const p of points) {
        const el = document.createElement('div');
        el.className = 'crowd-label';
        const name = `${p.biggest ? '★ ' : ''}${escapeHtml(mapTitle(p.event))}`;
        const series = p.event.series ? `<span class="crowd-series">${escapeHtml(p.event.series)}</span>` : '';
        el.innerHTML =
          `<span class="crowd-line" data-id="${escapeHtml(p.event.id)}">` +
          `<span class="crowd-name">${name}</span>` +
          series +
          `<span class="crowd-meta">${escapeHtml(chipDetail(p))}</span>` +
          `</span>`;
        el.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const id = (ev.target as HTMLElement).closest<HTMLElement>('.crowd-line')?.dataset.id;
          if (id) selectRef.current(id);
        });
        // The chip is only as wide as its text. Measure it so the gap check matches.
        el.style.position = 'fixed';
        el.style.left = '0';
        el.style.top = '0';
        el.style.visibility = 'hidden';
        document.body.appendChild(el);
        const labelW = el.offsetWidth;
        const labelH = el.offsetHeight;
        document.body.removeChild(el);
        el.style.position = '';
        el.style.left = '';
        el.style.top = '';
        el.style.visibility = '';
        const at = map.project(p.location);
        // Clearance keeps a two-line chip off its own dot. Further steps separate neighbors.
        const pad = Math.ceil(labelH / 2) + 4;
        const dirs: { anchor: Anchor; dir: [number, number] }[] = [
          { anchor: 'bottom', dir: [0, -1] },
          { anchor: 'top', dir: [0, 1] },
          { anchor: 'left', dir: [1, 0] },
          { anchor: 'right', dir: [-1, 0] },
          { anchor: 'bottom-left', dir: [1, -1] },
          { anchor: 'bottom-right', dir: [-1, -1] },
          { anchor: 'top-left', dir: [1, 1] },
          { anchor: 'top-right', dir: [-1, 1] },
        ];
        const options = [1, 2, 3].flatMap((step) =>
          dirs.map((spot) => {
            const offset: [number, number] = [spot.dir[0] * pad * step, spot.dir[1] * pad * step];
            return { anchor: spot.anchor, offset, box: boxFor(spot.anchor, offset[0], offset[1], labelW, labelH, at) };
          }),
        );
        const onScreen = (box: Box) => box.x0 >= 4 && box.x1 <= view.w - 4 && box.y0 >= insets.top && box.y1 <= view.h;
        const breathe = (box: Box): Box => ({ x0: box.x0 - 4, y0: box.y0 - 4, x1: box.x1 + 4, y1: box.y1 + 4 });
        const crowded = (box: Box) => taken.some((t) => clash(breathe(box), breathe(t)));
        const pick =
          options.find((o) => onScreen(o.box) && !crowded(o.box)) ??
          options.slice().sort((a, b) => {
            const cost = (box: Box) => taken.reduce((sum, t) => sum + overlapArea(box, t), 0) + (onScreen(box) ? 0 : 100000);
            return cost(a.box) - cost(b.box);
          })[0];
        taken.push(pick.box);
        markers.push(new Marker({ element: el, anchor: pick.anchor, offset: [...pick.offset] }).setLngLat(p.location).addTo(map));
      }
    };

    if (document.fonts.status === 'loaded') placeLabels();
    else void document.fonts.ready.then(placeLabels);

    return () => {
      cancelled = true;
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

/** Line 2 of a map chip: "1:08 pm · 40.0k". A different day is named first. */
function chipDetail(p: CrowdPoint): string {
  const time = p.event.start ? clockTime(p.event.start) : 'Time n/a';
  const crowd = crowdShort(p.event, p.capacity, false);
  return p.dayTag ? `${p.dayTag} · ${time} · ${crowd}` : `${time} · ${crowd}`;
}

type Anchor = 'bottom' | 'top' | 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

/** Where a chip sits once MapLibre pins that corner or edge to the dot. */
function boxFor(anchor: Anchor, ox: number, oy: number, w: number, h: number, at: { x: number; y: number }) {
  const x = at.x + ox;
  const y = at.y + oy;
  switch (anchor) {
    case 'bottom':
      return { x0: x - w / 2, y0: y - h, x1: x + w / 2, y1: y };
    case 'top':
      return { x0: x - w / 2, y0: y, x1: x + w / 2, y1: y + h };
    case 'left':
      return { x0: x, y0: y - h / 2, x1: x + w, y1: y + h / 2 };
    case 'right':
      return { x0: x - w, y0: y - h / 2, x1: x, y1: y + h / 2 };
    case 'bottom-left':
      return { x0: x, y0: y - h, x1: x + w, y1: y };
    case 'bottom-right':
      return { x0: x - w, y0: y - h, x1: x, y1: y };
    case 'top-left':
      return { x0: x, y0: y, x1: x + w, y1: y + h };
    case 'top-right':
      return { x0: x - w, y0: y, x1: x, y1: y + h };
  }
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
