// Gold dots inside the crowd disc. The dots are a texture, not a head count.
// Every dot is the same size. A bigger crowd is a bigger circle of those dots.
// How full the room was only changes the gap between dots.

/** Diameter of one gold dot, in screen pixels. */
export const STIPPLE_DOT_PX = 2;
/** How far the last dots fade, in screen pixels. Same short edge on every mark. */
export const STIPPLE_EDGE_PX = 4;
/** Sold out: tight, but the street still shows between dots. */
const SOLD_OUT_SPACING = 4;
/** A thin or unknown crowd: the same dots, farther apart. */
const THIN_SPACING = 10;

/**
 * Center-to-center gap in screen pixels. Fullness only.
 * Sold out sits at 4px. A thin crowd loosens toward 10px.
 * This does not change the disc's radius.
 */
export function stippleSpacing(fill: number | null, soldOut: boolean): number {
  if (soldOut) return SOLD_OUT_SPACING;
  if (fill == null || fill <= 0) return THIN_SPACING;
  const t = Math.min(1, fill);
  return THIN_SPACING + (SOLD_OUT_SPACING - THIN_SPACING) * t;
}

export interface StippleDot {
  /** Pixel offset from the venue. The grid is centered on that point. */
  x: number;
  y: number;
  /** 1 through the disc, falling to 0 across the outer few pixels. */
  fade: number;
}

/**
 * One even grid, clipped to the disc. Rows and columns run through the venue,
 * so the pattern stays put when the map pans. Pass a window, in the same
 * pixel offsets, to keep only the dots on screen when the circle is huge.
 */
export function stippleDots(
  radiusPx: number,
  spacingPx: number,
  window?: { minX: number; minY: number; maxX: number; maxY: number },
): StippleDot[] {
  const spacing = Math.max(STIPPLE_DOT_PX, spacingPx);
  const radius = Math.max(0, radiusPx);
  const n = Math.floor(radius / spacing + 1e-9);
  let i0 = -n;
  let i1 = n;
  let j0 = -n;
  let j1 = n;
  if (window) {
    i0 = Math.max(i0, Math.ceil(window.minX / spacing - 1e-9));
    i1 = Math.min(i1, Math.floor(window.maxX / spacing + 1e-9));
    j0 = Math.max(j0, Math.ceil(window.minY / spacing - 1e-9));
    j1 = Math.min(j1, Math.floor(window.maxY / spacing + 1e-9));
  }
  const dots: StippleDot[] = [];
  for (let i = i0; i <= i1; i++) {
    for (let j = j0; j <= j1; j++) {
      const x = i * spacing;
      const y = j * spacing;
      const dist = Math.hypot(x, y);
      if (dist > radius) continue;
      const fade = Math.min(1, (radius - dist) / STIPPLE_EDGE_PX);
      if (fade <= 0) continue;
      dots.push({ x, y, fade });
    }
  }
  return dots;
}

/** The full grid is big enough that drawing only the on-screen dots is enough. */
export function stippleNeedsCull(radiusPx: number, spacingPx: number): boolean {
  const spacing = Math.max(STIPPLE_DOT_PX, spacingPx);
  const n = Math.floor(Math.max(0, radiusPx) / spacing + 1e-9);
  return 2 * n + 1 > 80;
}
