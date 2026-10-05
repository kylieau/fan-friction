const MEMORY_KEY = 'fan-friction:map-return';
const FROM_MAP_KEY = 'fan-friction:opened-from-map';

/** The map as she left it: place, zoom, and which event was selected. */
export interface MapMemory {
  /** Path and query, such as "/" or "/?date=2026-10-04&when=day". */
  href: string;
  selectedId: string | null;
  sheetOpen: boolean;
  /** [longitude, latitude]. */
  center: [number, number];
  zoom: number;
}

export function saveMapMemory(memory: MapMemory) {
  try {
    sessionStorage.setItem(MEMORY_KEY, JSON.stringify(memory));
  } catch {
    /* this phone blocked storage */
  }
}

export function readMapMemory(): MapMemory | null {
  try {
    const raw = sessionStorage.getItem(MEMORY_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<MapMemory>;
    if (typeof parsed.href !== 'string' || !parsed.href.startsWith('/')) return null;
    if (parsed.selectedId !== null && typeof parsed.selectedId !== 'string') return null;
    if (typeof parsed.sheetOpen !== 'boolean') return null;
    if (!Array.isArray(parsed.center) || parsed.center.length !== 2) return null;
    const [lng, lat] = parsed.center;
    if (typeof lng !== 'number' || typeof lat !== 'number') return null;
    if (typeof parsed.zoom !== 'number' || !Number.isFinite(parsed.zoom)) return null;
    return {
      href: parsed.href,
      selectedId: parsed.selectedId ?? null,
      sheetOpen: parsed.sheetOpen,
      center: [lng, lat],
      zoom: parsed.zoom,
    };
  } catch {
    return null;
  }
}

/** Remember that this event page was opened from the map, even after a refresh. */
export function markOpenedFromMap() {
  try {
    sessionStorage.setItem(FROM_MAP_KEY, '1');
  } catch {
    /* this phone blocked storage */
  }
}

export function clearOpenedFromMap() {
  try {
    sessionStorage.removeItem(FROM_MAP_KEY);
  } catch {
    /* this phone blocked storage */
  }
}

export function openedFromMap(): boolean {
  try {
    return sessionStorage.getItem(FROM_MAP_KEY) === '1';
  } catch {
    return false;
  }
}
