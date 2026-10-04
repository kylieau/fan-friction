// Where each event card sits on the screen.
//
// Every card is offset off its gold circle: above it first, then right, left,
// and below, with about 8px of air between the card and the gold. A card that
// would cover another card, the gold, or the on-map controls is moved out. If
// the gap grows past about 16px, a short stem connects them. If it still cannot
// sit clear, the card is left off and the gold mark stays.
// The selected card uses the same 8px offset and is always kept.

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

const SIDES: Side[] = ['top', 'right', 'left', 'bottom'];
const JUMP_GAPS = [12, 16, 20, 24, 32, 40, 52, 68];
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

export interface Glow {
  x: number;
  y: number;
  r: number;
}

function boxFor(side: Side, c: ChipCandidate, gap: number): Box {
  const d = c.glow + gap;
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

/** True when the card paints over the gold circle. */
function coversGlow(box: Box, glow: Glow): boolean {
  const x = Math.max(box.x0, Math.min(glow.x, box.x1));
  const y = Math.max(box.y0, Math.min(glow.y, box.y1));
  const dx = x - glow.x;
  const dy = y - glow.y;
  return dx * dx + dy * dy < glow.r * glow.r - 0.25;
}

function hits(box: Box, obstacles: Box[]): boolean {
  return obstacles.some((o) => intersects(box, o));
}

function overlapArea(box: Box, obstacles: Box[]): number {
  let area = 0;
  for (const o of obstacles) {
    const w = Math.max(0, Math.min(box.x1, o.x1) - Math.max(box.x0, o.x0));
    const h = Math.max(0, Math.min(box.y1, o.y1) - Math.max(box.y0, o.y0));
    area += w * h;
  }
  return area;
}

function visibleArea(box: Box, view: Box): number {
  const w = Math.max(0, Math.min(box.x1, view.x1) - Math.max(box.x0, view.x0));
  const h = Math.max(0, Math.min(box.y1, view.y1) - Math.max(box.y0, view.y0));
  return w * h;
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

function placeSelected(c: ChipCandidate, obstacles: Box[], view: Box, glows: Glow[]): PlacedChip {
  const own: Glow = { x: c.x, y: c.y, r: c.glow };
  const spots = SIDES.map((side) => ({ side, box: boxFor(side, c, CARD_GAP) }));
  const perfect = spots.find(
    (s) => inside(s.box, view) && !hits(s.box, obstacles) && glows.every((g) => !coversGlow(s.box, g)),
  );
  if (perfect) return finish(c, perfect.side, perfect.box, CARD_GAP);
  const clear = spots.find((s) => inside(s.box, view) && !hits(s.box, obstacles) && !coversGlow(s.box, own));
  if (clear) return finish(c, clear.side, clear.box, CARD_GAP);
  const onScreen = spots.find((s) => inside(s.box, view) && !coversGlow(s.box, own));
  if (onScreen) return finish(c, onScreen.side, onScreen.box, CARD_GAP);

  let best = spots[0];
  let bestScore = -Infinity;
  for (const s of spots) {
    if (coversGlow(s.box, own)) continue;
    const score = visibleArea(s.box, view) - overlapArea(s.box, obstacles) * 4;
    if (score > bestScore) {
      bestScore = score;
      best = s;
    }
  }
  return finish(c, best.side, best.box, CARD_GAP);
}

function placeOther(
  c: ChipCandidate,
  obstacles: Box[],
  taken: Box[],
  view: Box,
  glows: Glow[],
): PlacedChip | null {
  const blocked = [...obstacles, ...taken.map((box) => inflate(box, CARD_AIR))];
  const gaps = [CARD_GAP, ...JUMP_GAPS];
  for (const gap of gaps) {
    for (const side of SIDES) {
      const box = boxFor(side, c, gap);
      if (!inside(box, view) || hits(box, blocked)) continue;
      if (glows.some((g) => coversGlow(box, g))) continue;
      return finish(c, side, box, gap);
    }
  }
  return null;
}

/** Place cards in rank order. Missing ids were dropped; their marks stay. */
export function placeChips(candidates: ChipCandidate[], obstacles: Box[], view: Box): PlacedChip[] {
  const glows: Glow[] = candidates.map((c) => ({ x: c.x, y: c.y, r: c.glow }));
  const ordered = [...candidates].sort((a, b) => b.rank - a.rank || a.id.localeCompare(b.id));
  const placed: PlacedChip[] = [];
  const taken: Box[] = [];
  for (const c of ordered) {
    const spot = c.selected ? placeSelected(c, obstacles, view, glows) : placeOther(c, obstacles, taken, view, glows);
    if (!spot) continue;
    placed.push(spot);
    taken.push(spot.box);
  }
  return placed;
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
