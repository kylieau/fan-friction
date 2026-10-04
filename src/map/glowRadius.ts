// How wide the gold circle is. Size still follows the room, the same way it
// always has (a 15k room is smaller than a 95k stadium). It is also capped in
// real distance so one stadium cannot paint over a whole campus.

const DESIGNED_MIN_PX = 26;
const DESIGNED_MAX_PX = 56;
/** Widest the gold is allowed to reach on the ground, in meters. */
const MAX_GLOW_METERS = 480;
const MIN_PX = 10;
const MAX_PX = 56;

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

/** Meters on the ground for one screen pixel at this zoom and latitude. */
export function metersPerPixel(zoom: number, latitude: number): number {
  return (156543.03392 * Math.cos((latitude * Math.PI) / 180)) / 2 ** zoom;
}

/**
 * Pixel radius of the gold circle. Capacity sets the designed size; the
 * campus cap shrinks it when that size would cover too much ground.
 */
export function glowRadiusPx(capacity: number | undefined, zoom: number, latitude: number): number {
  const seats = capacity && capacity > 0 ? capacity : 20000;
  const t = clamp((seats - 15000) / (95000 - 15000), 0, 1);
  const designed = DESIGNED_MIN_PX + t * (DESIGNED_MAX_PX - DESIGNED_MIN_PX);
  const capPx = MAX_GLOW_METERS / metersPerPixel(zoom, latitude);
  return clamp(Math.min(designed, capPx), MIN_PX, MAX_PX);
}
