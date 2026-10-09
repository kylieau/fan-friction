// Where each event card sits on the screen.
//
// Each card sits about 8px from its own venue dot, on the outer side of that
// night's pins. A pin left of the group's midpoint tries the left first; a pin
// right of it tries the right. When the group is taller than wide, pins above
// the middle try the top and pins below it try the bottom. The old
// above-then-right order is only a fallback, and a fallback may not cross
// another card. A card may cover the gold glow. It may not cover another venue's dot.
// If no short side fits, the card is left off and the mark stays.

export interface Box {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export type Side = 'top' | 'right' | 'left' | 'bottom';

export const CARD_GAP = 8;
/** A stem appears only when the card had to jump farther than this. */
export const STEM_GAP = 16;
/** Taps within this of a dot's center count, even when the drawn dot is smaller. */
export const DOT_HIT_RADIUS = 22;

/** A hidden chip counts under a placed one only when their dots are this close (C047). */
const NEIGHBOR_PX = 180;
/** Old order. Used only when the outward side does not fit. */
const FALLBACK: Side[] = ['top', 'right', 'left', 'bottom'];
const CARD_AIR = 4;

export interface ChipCandidate {
  id: string;
  x: number;
  y: number;
  /** Outer radius of this event's gold circle, in screen pixels. */
  glow: number;
  w: number;
  h: number;
  /** Higher ranks are placed first. The selected event outranks every crowd. */
  rank: number;
  selected: boolean;
}

export interface Stem {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface PlacedChip {
  id: string;
  side: Side;
  box: Box;
  gap: number;
  stem: Stem | null;
}

export interface Placement {
  placed: PlacedChip[];
  /** A dropped chip's id → the placed chip that sits on its spot (the biggest crowd there). It carries the "+N" badge (C047). */
  blockedBy: Map<string, string>;
}

function boxFor(side: Side, c: ChipCandidate, gap: number): Box {
  // A short hop from the dot. Do not add the glow radius: that walks the card
  // to the far edge of a big crowd and can land it across town.
  const d = gap;
  switch (side) {
    case 'top':
      return { x0: c.x - c.w / 2, y0: c.y - d - c.h, x1: c.x + c.w / 2, y1: c.y - d };
    case 'bottom':
      return { x0: c.x - c.w / 2, y0: c.y + d, x1: c.x + c.w / 2, y1: c.y + d + c.h };
    case 'right':
      return { x0: c.x + d, y0: c.y - c.h / 2, x1: c.x + d + c.w, y1: c.y + c.h / 2 };
    case 'left':
      return { x0: c.x - d - c.w, y0: c.y - c.h / 2, x1: c.x - d, y1: c.y + c.h / 2 };
  }
}

function intersects(a: Box, b: Box): boolean {
  return a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;
}

function inside(box: Box, view: Box): boolean {
  return box.x0 >= view.x0 && box.y0 >= view.y0 && box.x1 <= view.x1 && box.y1 <= view.y1;
}

function inflate(box: Box, pad: number): Box {
  return { x0: box.x0 - pad, y0: box.y0 - pad, x1: box.x1 + pad, y1: box.y1 + pad };
}

function hits(box: Box, obstacles: Box[]): boolean {
  return obstacles.some((o) => intersects(box, o));
}

function stemFor(side: Side, c: ChipCandidate, box: Box): Stem {
  switch (side) {
    case 'top':
      return { x1: c.x, y1: c.y - c.glow, x2: c.x, y2: box.y1 };
    case 'bottom':
      return { x1: c.x, y1: c.y + c.glow, x2: c.x, y2: box.y0 };
    case 'right':
      return { x1: c.x + c.glow, y1: c.y, x2: box.x0, y2: c.y };
    case 'left':
      return { x1: c.x - c.glow, y1: c.y, x2: box.x1, y2: c.y };
  }
}

function finish(c: ChipCandidate, side: Side, box: Box, gap: number): PlacedChip {
  return {
    id: c.id,
    side,
    box,
    gap,
    stem: gap > STEM_GAP ? stemFor(side, c, box) : null,
  };
}

interface PinFrame {
  midX: number;
  midY: number;
  /** The night's pins stack taller than they spread wide, in screen pixels. */
  tall: boolean;
}

/** Center of that night's pins, and whether the group is taller than wide. */
function pinFrame(candidates: ChipCandidate[]): PinFrame {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const c of candidates) {
    minX = Math.min(minX, c.x);
    maxX = Math.max(maxX, c.x);
    minY = Math.min(minY, c.y);
    maxY = Math.max(maxY, c.y);
  }
  return {
    midX: (minX + maxX) / 2,
    midY: (minY + maxY) / 2,
    tall: maxY - minY > maxX - minX,
  };
}

/**
 * The side away from the group. Null when the pin sits on the midline, so the
 * caller uses the old order instead of aiming at the map center.
 */
function outwardSide(c: ChipCandidate, frame: PinFrame): Side | null {
  if (frame.tall) {
    if (c.y < frame.midY) return 'top';
    if (c.y > frame.midY) return 'bottom';
    return null;
  }
  if (c.x < frame.midX) return 'left';
  if (c.x > frame.midX) return 'right';
  return null;
}

function pointInBox(x: number, y: number, box: Box): boolean {
  return x >= box.x0 && x <= box.x1 && y >= box.y0 && y <= box.y1;
}

function segmentsCross(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number,
  dx: number,
  dy: number,
): boolean {
  const det = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
  if (det === 0) return false;
  const t = ((cx - ax) * (dy - cy) - (cy - ay) * (dx - cx)) / det;
  const u = ((cx - ax) * (by - ay) - (cy - ay) * (bx - ax)) / det;
  return t > 0 && t < 1 && u > 0 && u < 1;
}

/** True when the line from the pin to the card runs through another card. */
function crossesChip(c: ChipCandidate, box: Box, taken: Box[]): boolean {
  const x2 = (box.x0 + box.x1) / 2;
  const y2 = (box.y0 + box.y1) / 2;
  return taken.some((other) => {
    if (pointInBox(c.x, c.y, other) || pointInBox(x2, y2, other)) return true;
    return (
      segmentsCross(c.x, c.y, x2, y2, other.x0, other.y0, other.x1, other.y0) ||
      segmentsCross(c.x, c.y, x2, y2, other.x1, other.y0, other.x1, other.y1) ||
      segmentsCross(c.x, c.y, x2, y2, other.x1, other.y1, other.x0, other.y1) ||
      segmentsCross(c.x, c.y, x2, y2, other.x0, other.y1, other.x0, other.y0)
    );
  });
}

function clearAt(box: Box, obstacles: Box[], taken: Box[], view: Box): boolean {
  const blocked = [...obstacles, ...taken.map((item) => inflate(item, CARD_AIR))];
  return inside(box, view) && !hits(box, blocked);
}

/** True when this card would sit on another event's dot. */
function coversPin(box: Box, pins: ChipCandidate[], selfId: string): boolean {
  return pins.some((pin) => pin.id !== selfId && pointInBox(pin.x, pin.y, box));
}

function placeCard(
  c: ChipCandidate,
  frame: PinFrame,
  obstacles: Box[],
  taken: Box[],
  pins: ChipCandidate[],
  view: Box,
): PlacedChip | null {
  const preferred = outwardSide(c, frame);
  const order = preferred ? [preferred, ...FALLBACK.filter((side) => side !== preferred)] : FALLBACK;
  for (const side of order) {
    const box = boxFor(side, c, CARD_GAP);
    if (!clearAt(box, obstacles, taken, view)) continue;
    if (coversPin(box, pins, c.id)) continue;
    if (preferred && side !== preferred && crossesChip(c, box, taken)) continue;
    return finish(c, side, box, CARD_GAP);
  }
  return null;
}

/**
 * A fanned-out card (C047, mockup 06 option 1): the hidden neighbors of a chip, laid out in
 * a column stepping away from the dot with a leader line, allowed to cross other cards'
 * stems and the gold but never another card, the chrome or the edge of the view.
 */
function placeFanned(c: ChipCandidate, obstacles: Box[], taken: Box[], view: Box): PlacedChip | null {
  for (const side of ['right', 'left', 'bottom', 'top'] as Side[]) {
    for (let step = 0; step < 6; step++) {
      const gap = CARD_GAP + step * (c.h + CARD_AIR);
      const box = boxFor(side, c, gap);
      if (!clearAt(box, obstacles, taken, view)) continue;
      return finish(c, side, box, gap);
    }
  }
  return null;
}

/**
 * Place cards in rank order. A card with no room is dropped and its mark stays; the
 * placed card on its spot gets the count. Ids in `fanned` are placed last, in a column,
 * so a tapped "+N" shows what was hiding.
 */
export function placeChips(candidates: ChipCandidate[], obstacles: Box[], view: Box, fanned: ReadonlySet<string> = new Set()): Placement {
  const frame = pinFrame(candidates);
  const ordered = [...candidates].sort((a, b) => b.rank - a.rank || a.id.localeCompare(b.id));
  const placed: PlacedChip[] = [];
  const taken: Box[] = [];
  const dropped: ChipCandidate[] = [];
  for (const c of ordered) {
    if (fanned.has(c.id)) continue;
    const spot = placeCard(c, frame, obstacles, taken, candidates, view);
    if (!spot) {
      dropped.push(c);
      continue;
    }
    placed.push(spot);
    taken.push(spot.box);
  }
  for (const c of ordered) {
    if (!fanned.has(c.id)) continue;
    const spot = placeFanned(c, obstacles, taken, view);
    if (!spot) {
      dropped.push(c);
      continue;
    }
    placed.push(spot);
    taken.push(spot.box);
  }
  // Each dropped chip belongs to the nearest placed chip's dot, when that dot is close:
  // a neighbor, not a chip across town hidden by the sheet or the header.
  const blockedBy = new Map<string, string>();
  const at = new Map(candidates.map((c) => [c.id, c]));
  for (const d of dropped) {
    let best: { id: string; dist: number } | null = null;
    for (const p of placed) {
      const pin = at.get(p.id);
      if (!pin) continue;
      const dist = Math.hypot(pin.x - d.x, pin.y - d.y);
      if (!best || dist < best.dist) best = { id: p.id, dist };
    }
    if (best && best.dist <= NEIGHBOR_PX) blockedBy.set(d.id, best.id);
  }
  return { placed, blockedBy };
}

export interface DotHit {
  id: string;
  x: number;
  y: number;
}

/**
 * The dot under a tap. The nearest center wins, not the larger gold circle.
 * Dots should be passed with the selected one first, then larger crowds, so a
 * perfect tie follows that order.
 */
export function nearestDot(dots: DotHit[], x: number, y: number, radius = DOT_HIT_RADIUS): DotHit | null {
  let best: DotHit | null = null;
  let bestD = radius;
  for (const dot of dots) {
    const d = Math.hypot(dot.x - x, dot.y - y);
    if (d > radius) continue;
    if (!best || d < bestD - 0.01) {
      best = dot;
      bestD = d;
    }
  }
  return best;
}
