// How wide the gold circle is. Width follows the crowd, not the room.
// Radius grows with crowd^0.5716 (Flannery). Not the square root of the
// area, and not a straight line.
//
// The locked sizes are screen pixels at the framed city view, whatever zoom
// that is on this screen. 10,000 people → 16px. 100,000 → about 60px.
// On that curve, 40,000 is about 35px, 60,000 about 45px, 70,000 about 49px.
// Nothing paints wider than 60px at the city view.
//
// Zoom out and the disc shrinks with the map. Zoom in and it grows with the
// map until it would cover the same ground as that 60px city disc, then it
// stops. That campus cap wins over a wider disc.

const EXPONENT = 0.5716;
const ANCHOR_CROWD = 10_000;
const ANCHOR_PX = 16;
/** Biggest disc at the city view. The campus cap: 100,000 people lands here. */
const CITY_MAX_PX = 60;
/**
 * Fallback until the camera frames the night. A spread LA night on a phone
 * lands near here. The real anchor is whatever zoom the frame settles on.
 */
let cityZoom = 10.7;
/** No count yet: a small disc, under the 10,000-person mark. */
const UNKNOWN_PX = 12;
const MIN_PX = 6;

/** The framed city view. Pixel sizes below belong to this zoom. */
export function setCityZoom(zoom: number) {
  if (Number.isFinite(zoom)) cityZoom = zoom;
}

/** Meters on the ground for one screen pixel at this zoom and latitude. */
export function metersPerPixel(zoom: number, latitude: number): number {
  return (156543.03392 * Math.cos((latitude * Math.PI) / 180)) / 2 ** zoom;
}

/** Pixel radius at the city view, before zoom scaling. */
export function glowRadiusAtCity(crowd: number | undefined): number {
  if (!crowd || crowd <= 0) return UNKNOWN_PX;
  const scaled = ANCHOR_PX * (crowd / ANCHOR_CROWD) ** EXPONENT;
  return Math.min(scaled, CITY_MAX_PX);
}

/**
 * Pixel radius of the gold circle. Crowd sets the size. The campus cap is
 * the 60px city-view end, held as a fixed patch of ground while you zoom.
 */
export function glowRadiusPx(crowd: number | undefined, zoom: number, latitude: number): number {
  const atCity = glowRadiusAtCity(crowd);
  const scaled = atCity * 2 ** (zoom - cityZoom);
  // The 60px city disc, held as one patch of ground. Zooming in stops there.
  const capMeters = CITY_MAX_PX * metersPerPixel(cityZoom, latitude);
  const capPx = capMeters / metersPerPixel(zoom, latitude);
  return Math.max(Math.min(scaled, capPx), MIN_PX);
}
