import { useContext, useEffect, useRef } from 'react';
import { type Map as MapLibreMap, Marker } from 'maplibre-gl';
import { MapContext } from './BaseMap';
import { clockTime } from '../lib/dates';
import { mapTitle } from '../lib/eventTitle';
import { crowdShort, type CrowdPoint } from './crowdPoints';
import { glowRadiusPx } from './glowRadius';
import {
  nearestDot,
  placeChips,
  type Box,
  type ChipCandidate,
  type DotHit,
  type PlacedChip,
} from './chipPlacement';
import { typeIconSvg } from './typeIcons';

/** People in the disc. A sold-out show with no separate count uses the room. A muted event has no glow. */
function crowdForGlow(p: CrowdPoint): number | undefined {
  if (p.muted) return undefined;
  if (p.count !== undefined && p.count > 0) return p.count;
  if (p.soldOut && p.capacity) return p.capacity;
  return undefined;
}

const SOURCE = 'crowds';
const CLAIM = 'crowd-card-claim';
const SELECTED_RANK = 1e15;
/** Pale gold wash. The basemap stays visible. Fullness does not brighten it. */
const WASH = 0.2;

interface Props {
  points: CrowdPoint[];
  /** The event picked in the list or on the map. */
  selectedId: string | null;
  /** An event id, or null when the empty map was tapped. */
  onSelect: (id: string | null) => void;
}

/**
 * Pale gold wash per event (the crowd) with a dark dot at the venue, plus one
 * white card offset off that circle. Cards that would cover another card, the
 * gold, or the controls are dropped. The mark stays, and tapping it brings
 * the card back.
 */
export function CrowdLayer({ points, selectedId, onSelect }: Props) {
  const map = useContext(MapContext);
  const selectRef = useRef(onSelect);
  selectRef.current = onSelect;
  const selectedRef = useRef(selectedId);
  selectedRef.current = selectedId;
  const pointsRef = useRef(points);
  pointsRef.current = points;
  const refreshRef = useRef<() => void>(() => {});
  /** The ids fanned out from a tapped "+N" badge; cleared on the next pick. */
  const fannedRef = useRef<Set<string>>(new Set());
  /** Placed chip id → the ids hiding under it, from the last placement. */
  const groupsRef = useRef<Map<string, string[]>>(new Map());

  useEffect(() => {
    if (!map || points.length === 0) return;

    map.addSource(SOURCE, {
      type: 'geojson',
      promoteId: 'id',
      data: {
        type: 'FeatureCollection',
        features: points.map((p) => ({
          type: 'Feature',
          id: p.event.id,
          geometry: { type: 'Point', coordinates: p.location },
          properties: {
            id: p.event.id,
            upcoming: p.upcoming,
            capacity: p.capacity ?? 20000,
            fill: p.fill ?? -1,
            muted: p.muted,
          },
        })),
      },
    });

    const beforeLabel = map.getStyle().layers?.find((layer) => layer.type === 'symbol')?.id;
    map.addLayer(
      {
        id: 'crowd-glow',
        type: 'circle',
        source: SOURCE,
        paint: {
          'circle-color': '#FFD100',
          'circle-radius': ['coalesce', ['feature-state', 'radius'], 12] as never,
          'circle-radius-transition': { duration: 0, delay: 0 },
          // A short soft edge, the same few pixels on every disc.
          'circle-blur': ['/', 4, ['max', ['coalesce', ['feature-state', 'radius'], 12], 1]] as never,
          'circle-stroke-width': 0,
          'circle-opacity': WASH,
          'circle-opacity-transition': { duration: 0, delay: 0 },
        },
      },
      beforeLabel,
    );
    map.addLayer(
      {
        id: 'crowd-core',
        type: 'circle',
        source: SOURCE,
        paint: {
          // A muted (under-floor) event is a smaller, paler dot (3.4).
          'circle-color': ['case', ['get', 'muted'], '#7B8798', '#0F1B2D'] as never,
          'circle-radius': ['case', ['get', 'muted'], 3.5, 5] as never,
          'circle-opacity': 1,
          'circle-opacity-transition': { duration: 280, delay: 0 },
        },
      },
      beforeLabel,
    );

    map.addSource(CLAIM, { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addLayer(
      {
        id: CLAIM,
        type: 'symbol',
        source: CLAIM,
        layout: {
          'icon-image': ['get', 'icon'] as never,
          'icon-anchor': 'center',
          'icon-overlap': 'always',
          'icon-ignore-placement': false,
          'icon-rotation-alignment': 'viewport',
          'icon-pitch-alignment': 'viewport',
          'symbol-sort-key': -1_000_000,
          'icon-padding': 1,
        },
      },
      beforeLabel,
    );

    const markers = new Map<string, Marker>();
    const entry = points.map((p) => p.event);
    for (const p of points) {
      const el = document.createElement('div');
      el.className = `crowd-label is-hidden${p.muted ? ' is-muted' : ''}`;
      el.dataset.id = p.event.id;
      const name = escapeHtml(mapTitle(p.event, entry));
      // Line 2 opens with a one-color type icon in Dodger blue (Kylie, Oct 9, 3.18; mockup 07 option C).
      el.innerHTML =
        `<span class="crowd-line">` +
        `<span class="crowd-name">${name}</span>` +
        `<span class="crowd-meta">${typeIconSvg(p.event)}<span>${escapeHtml(chipDetail(p))}</span></span>` +
        `</span>` +
        `<button type="button" class="crowd-more is-hidden" aria-label="More events here"></button>`;
      el.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const target = ev.target;
        if (target instanceof Element && target.closest('.crowd-more')) {
          // "+N": fan the hidden neighbors out, or fold them back (C047).
          const group = groupsRef.current.get(p.event.id) ?? [];
          fannedRef.current = fannedRef.current.size && group.every((id) => fannedRef.current.has(id)) ? new Set() : new Set(group);
          schedule();
          return;
        }
        selectRef.current(p.event.id);
      });
      const marker = new Marker({
        element: el,
        anchor: 'center',
        pitchAlignment: 'viewport',
        rotationAlignment: 'viewport',
        opacity: 1,
        opacityWhenCovered: 1,
      })
        .setLngLat(p.location)
        .addTo(map);
      markers.set(p.event.id, marker);
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'crowd-stems');
    map.getContainer().appendChild(svg);

    const seenIcons = new Set<string>();
    let frame = 0;
    let cancelled = false;

    const iconFor = (w: number, h: number) => {
      const name = `card-claim-${w}x${h}`;
      if (seenIcons.has(name)) return name;
      if (!map.hasImage(name)) {
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, w);
        canvas.height = Math.max(1, h);
        const ctx = canvas.getContext('2d');
        if (!ctx) return name;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        map.addImage(name, ctx.getImageData(0, 0, canvas.width, canvas.height), { pixelRatio: 1 });
      }
      seenIcons.add(name);
      return name;
    };

    const applyFade = () => {
      if (cancelled || !map.getLayer('crowd-glow')) return;
      const id = selectedRef.current;
      const dim = (id ? ['case', ['==', ['get', 'id'], id], 1, 0.5] : 1) as never;
      map.setPaintProperty('crowd-glow', 'circle-opacity', (id ? ['*', WASH, dim] : WASH) as never);
      map.setPaintProperty('crowd-core', 'circle-opacity', dim);
    };

    const place = () => {
      if (cancelled) return;
      const zoom = map.getZoom();
      const container = map.getContainer();
      const w = container.clientWidth;
      const h = container.clientHeight;
      const view: Box = { x0: 4, y0: 4, x1: w - 4, y1: h - 4 };
      const candidates: ChipCandidate[] = [];

      for (const p of pointsRef.current) {
        const at = map.project(p.location);
        const radius = glowRadiusPx(crowdForGlow(p), zoom, p.location[1]);
        map.setFeatureState({ source: SOURCE, id: p.event.id }, { radius });
        const marker = markers.get(p.event.id);
        const el = marker?.getElement();
        if (!marker || !el) continue;
        const selected = p.event.id === selectedRef.current;
        candidates.push({
          id: p.event.id,
          x: at.x,
          y: at.y,
          glow: radius,
          w: Math.max(el.offsetWidth, 1),
          h: Math.max(el.offsetHeight, 1),
          rank: (selected ? SELECTED_RANK : 0) + crowdRank(p),
          selected,
        });
      }

      const { placed, blockedBy } = placeChips(candidates, chromeBoxes(map), view, fannedRef.current);
      const groups = new Map<string, string[]>();
      for (const [hidden, under] of blockedBy) groups.set(under, [...(groups.get(under) ?? []), hidden]);
      groupsRef.current = groups;
      const byId = new Map(placed.map((chip) => [chip.id, chip]));
      const atById = new Map(candidates.map((c) => [c.id, c]));

      for (const p of pointsRef.current) {
        const marker = markers.get(p.event.id);
        const chip = byId.get(p.event.id);
        const el = marker?.getElement();
        if (!marker || !el) continue;
        const at = atById.get(p.event.id);
        const chosen = p.event.id === selectedRef.current;
        el.classList.toggle('selected', chosen && !!chip);
        el.classList.toggle('is-dim', !!selectedRef.current && !chosen && !!chip);
        el.classList.toggle('is-hidden', !chip);
        el.classList.toggle('is-fanned', fannedRef.current.has(p.event.id));
        const more = el.querySelector<HTMLElement>('.crowd-more');
        const hiding = groups.get(p.event.id)?.length ?? 0;
        if (more) {
          more.classList.toggle('is-hidden', hiding === 0);
          more.textContent = hiding ? `+${hiding}` : '';
        }
        if (!chip || !at) continue;
        const cx = (chip.box.x0 + chip.box.x1) / 2;
        const cy = (chip.box.y0 + chip.box.y1) / 2;
        marker.setOffset([Math.round(cx - at.x), Math.round(cy - at.y)]);
      }

      drawStems(svg, placed, w, h);
      const features: { type: 'Feature'; geometry: { type: 'Point'; coordinates: [number, number] }; properties: { icon: string } }[] = [];
      for (const c of candidates) {
        const diameter = Math.max(1, Math.round(c.glow * 2));
        const point = pointsRef.current.find((p) => p.event.id === c.id);
        if (!point) continue;
        features.push({
          type: 'Feature',
          geometry: { type: 'Point', coordinates: point.location },
          properties: { icon: iconFor(diameter, diameter) },
        });
      }
      for (const chip of placed) {
        const width = Math.max(1, Math.round(chip.box.x1 - chip.box.x0));
        const height = Math.max(1, Math.round(chip.box.y1 - chip.box.y0));
        const center = map.unproject([(chip.box.x0 + chip.box.x1) / 2, (chip.box.y0 + chip.box.y1) / 2]);
        features.push({
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [center.lng, center.lat] },
          properties: { icon: iconFor(width, height) },
        });
      }
      const claim = map.getSource(CLAIM) as { setData: (data: unknown) => void } | undefined;
      claim?.setData({ type: 'FeatureCollection', features });
    };

    const updateGlow = () => {
      if (cancelled || !map.getSource(SOURCE)) return;
      const zoom = map.getZoom();
      for (const p of pointsRef.current) {
        map.setFeatureState(
          { source: SOURCE, id: p.event.id },
          { radius: glowRadiusPx(crowdForGlow(p), zoom, p.location[1]) },
        );
      }
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(place);
    };

    refreshRef.current = () => {
      applyFade();
      schedule();
    };

    if (document.fonts.status === 'loaded') schedule();
    else void document.fonts.ready.then(schedule);

    const onClick = (e: { point: { x: number; y: number }; originalEvent: Event }) => {
      const target = e.originalEvent.target;
      if (target instanceof Element && target.closest('.crowd-label, .maplibregl-ctrl')) return;
      const dots = dotsInOrder(map, pointsRef.current, selectedRef.current);
      const hit = nearestDot(dots, e.point.x, e.point.y);
      fannedRef.current = new Set();
      selectRef.current(hit ? hit.id : null);
    };
    const onHover = (e: { point: { x: number; y: number } }) => {
      const dots = dotsInOrder(map, pointsRef.current, selectedRef.current);
      const hit = nearestDot(dots, e.point.x, e.point.y);
      map.getCanvas().style.cursor = hit ? 'pointer' : '';
    };
    map.on('click', onClick as never);
    map.on('mousemove', onHover as never);
    map.on('move', updateGlow);
    map.on('moveend', schedule);
    map.on('resize', schedule);

    const screen = map.getContainer().closest('.map-screen');
    const sheet = screen?.querySelector('.sheet');
    const header = screen?.querySelector('.map-header');
    const observer = new MutationObserver(schedule);
    const sizes = new ResizeObserver(schedule);
    if (sheet) {
      observer.observe(sheet, { attributes: true, attributeFilter: ['style', 'class'] });
      sizes.observe(sheet);
    }
    if (header) sizes.observe(header);
    sizes.observe(map.getContainer());

    applyFade();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      refreshRef.current = () => {};
      observer.disconnect();
      sizes.disconnect();
      svg.remove();
      for (const marker of markers.values()) marker.remove();
      map.off('click', onClick as never);
      map.off('mousemove', onHover as never);
      map.off('move', updateGlow);
      map.off('moveend', schedule);
      map.off('resize', schedule);
      map.getCanvas().style.cursor = '';
      if (map.getLayer(CLAIM)) map.removeLayer(CLAIM);
      if (map.getLayer('crowd-core')) map.removeLayer('crowd-core');
      if (map.getLayer('crowd-glow')) map.removeLayer('crowd-glow');
      if (map.getSource(CLAIM)) map.removeSource(CLAIM);
      if (map.getSource(SOURCE)) map.removeSource(SOURCE);
    };
  }, [map, points]);

  useEffect(() => {
    refreshRef.current();
  }, [selectedId]);

  return null;
}

function crowdRank(p: CrowdPoint): number {
  if (p.muted) return -1; // a small event's card comes last
  if (p.count !== undefined) return p.count;
  if (p.soldOut && p.capacity) return p.capacity;
  return 0;
}

function dotsInOrder(map: MapLibreMap, points: CrowdPoint[], selectedId: string | null): DotHit[] {
  return [...points]
    .sort((a, b) => {
      const rank = (p: CrowdPoint) => (p.event.id === selectedId ? SELECTED_RANK : 0) + crowdRank(p);
      return rank(b) - rank(a) || a.event.id.localeCompare(b.event.id);
    })
    .map((p) => {
      const at = map.project(p.location);
      return { id: p.event.id, x: at.x, y: at.y };
    });
}

/** Header, When, the mode switch, the ?, the map credit, and the sheet. */
function chromeBoxes(map: MapLibreMap): Box[] {
  const screen = map.getContainer().closest('.map-screen');
  if (!screen) return [];
  const mapRect = map.getContainer().getBoundingClientRect();
  const w = map.getContainer().clientWidth;
  const h = map.getContainer().clientHeight;
  const selectors = [
    '.map-header',
    '.map-chrome-left',
    '.map-chrome .segmented',
    '.legend-button',
    '.legend-card',
    '.maplibregl-ctrl-bottom-right',
    '.when-menu',
    '.area-menu',
  ];
  const boxes: Box[] = [];
  for (const sel of selectors) {
    const el = screen.querySelector(sel);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    const box = clipBox(
      { x0: r.left - mapRect.left - 6, y0: r.top - mapRect.top - 6, x1: r.right - mapRect.left + 6, y1: r.bottom - mapRect.top + 6 },
      w,
      h,
    );
    if (box) boxes.push(box);
  }
  const sheet = sheetObstacle(screen, mapRect, w, h);
  if (sheet) boxes.push(sheet);
  return boxes;
}

/** The sheet's resting position, including a drag that has not snapped yet. */
function sheetObstacle(screen: Element, mapRect: DOMRect, w: number, h: number): Box | null {
  const sheet = screen.querySelector<HTMLElement>('.sheet');
  if (!sheet) return null;
  const parent = sheet.offsetParent instanceof HTMLElement ? sheet.offsetParent : null;
  const parentTop = parent ? parent.getBoundingClientRect().top : mapRect.top;
  const match = /translateY\(([-\d.]+)px\)/.exec(sheet.style.transform);
  const shift = match ? Number(match[1]) : 0;
  const top = parentTop + sheet.offsetTop + shift - mapRect.top;
  return clipBox({ x0: -6, y0: top - 6, x1: w + 6, y1: top + sheet.offsetHeight + 6 }, w, h);
}

function clipBox(box: Box, w: number, h: number): Box | null {
  const x0 = Math.max(0, box.x0);
  const y0 = Math.max(0, box.y0);
  const x1 = Math.min(w, box.x1);
  const y1 = Math.min(h, box.y1);
  if (x1 - x0 < 2 || y1 - y0 < 2) return null;
  return { x0, y0, x1, y1 };
}

function drawStems(svg: SVGSVGElement, placed: PlacedChip[], w: number, h: number) {
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.replaceChildren();
  for (const chip of placed) {
    if (!chip.stem) continue;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', String(chip.stem.x1));
    line.setAttribute('y1', String(chip.stem.y1));
    line.setAttribute('x2', String(chip.stem.x2));
    line.setAttribute('y2', String(chip.stem.y2));
    line.setAttribute('stroke', 'rgba(15, 27, 45, 0.35)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-linecap', 'butt');
    svg.appendChild(line);
  }
}

/** Line 2 of a map card: "1:08 pm · 40k". A different day is named first. No status words. */
function chipDetail(p: CrowdPoint): string {
  const time = p.event.start ? clockTime(p.event.start) : 'Time TBA';
  // An expected draw shows as its number, like any estimate on a map card (Kylie, Oct 7).
  const crowd = crowdShort(p.event, p.capacity, false, false);
  return p.dayTag ? `${p.dayTag} · ${time} · ${crowd}` : `${time} · ${crowd}`;
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
