// Sunrise and sunset for a city on a date, from its map point (the standard sunrise equation, within a few
// minutes). Display only: the hourly weather glyph turns to a moon after dark (board datepage-r3). Never an input.

import { METROS } from '../../config/metros';
import type { LocalDate } from '../types';

const RAD = Math.PI / 180;

/** The city's UTC offset in hours on that date (daylight saving included). */
function offsetHours(timeZone: string, date: LocalDate): number {
  const noon = new Date(`${date}T12:00:00Z`);
  const local = new Date(noon.toLocaleString('en-US', { timeZone }));
  const utc = new Date(noon.toLocaleString('en-US', { timeZone: 'UTC' }));
  return (local.getTime() - utc.getTime()) / 3_600_000;
}

/** Local sunrise and sunset as decimal hours (18.5 = 6:30 pm), or null for polar day or night. */
export function sunHours(metroId: string, date: LocalDate): { rise: number; set: number } | null {
  const metro = METROS[metroId];
  if (!metro) return null;
  const [lng, lat] = metro.center;
  const [y, m, d] = date.split('-').map(Number);
  const n = Math.round((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 0)) / 86_400_000);
  const decl = 23.44 * Math.sin(RAD * (360 / 365) * (n + 284));
  const cosW = (Math.sin(-0.833 * RAD) - Math.sin(lat * RAD) * Math.sin(decl * RAD)) / (Math.cos(lat * RAD) * Math.cos(decl * RAD));
  if (cosW < -1 || cosW > 1) return null;
  const b = RAD * (360 / 364) * (n - 81);
  const equationOfTime = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
  const noon = 12 - lng / 15 - equationOfTime / 60 + offsetHours(metro.timeZone, date);
  const half = Math.acos(cosW) / RAD / 15;
  return { rise: noon - half, set: noon + half };
}

/** Whether a local hour starts after dark in that city (7 pm on a 6:28 pm sunset is dark; 6 pm is not). */
export function isDarkAt(metroId: string, date: LocalDate, hour: number): boolean {
  const sun = sunHours(metroId, date);
  if (!sun) return false;
  return hour >= sun.set || hour + 1 <= sun.rise;
}
