// Metros are their own records so the app isn't tied to LA. LA is the seed.
export interface Metro {
  id: string;
  name: string;
  timeZone: string;
  /** Map center as [longitude, latitude]. */
  center: [number, number];
  zoom: number;
}

export const METROS: Record<string, Metro> = {
  la: {
    id: 'la',
    name: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
    center: [-118.28, 34.04],
    zoom: 9.6,
  },
};

export const DEFAULT_METRO = METROS.la;
