// Which company draws the base map. Swap this file to change providers;
// nothing else in the app knows where map tiles come from.
//
// OpenFreeMap: free, no account or key, OpenStreetMap data. "Positron" is
// their light, muted style, closest to the mockups.
export const MAP_PROVIDER = {
  name: 'OpenFreeMap',
  styleUrl: 'https://tiles.openfreemap.org/styles/positron',
} as const;
