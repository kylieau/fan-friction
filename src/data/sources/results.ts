// The nightly results pass (Kylie, Oct 6, 2026): one read of each league's own
// feed for the games that finished, saved under data/results/<metro>/<date>.json.
// Scores and announced crowds are evidence on the page. The read never uses them.

import { METROS } from '../../config/metros';
import type { GameResult, LocalDate } from '../types';
import { loadEspnFinals } from './espnSource';
import { loadMlbFinals } from './mlbSource';

export const RESULTS_METRO_ID = 'la';
/** How many days back each run looks, so a late final or a missed night is still caught. */
export const RESULTS_LOOKBACK_DAYS = 3;

function addCalendarDays(date: LocalDate, days: number): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/** Finished home games in the window, from every feed. Throws when a feed can't be read, so nothing partial is saved. */
export async function collectResults(metroId: string = RESULTS_METRO_ID, now = new Date()): Promise<{ from: LocalDate; through: LocalDate; rows: GameResult[] }> {
  const metro = METROS[metroId];
  if (!metro) throw new Error(`Unknown metro ${metroId}.`);
  const through = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const from = addCalendarDays(through, -RESULTS_LOOKBACK_DAYS);
  const [mlb, espn] = await Promise.all([loadMlbFinals(metro.id, from, through), loadEspnFinals(metro.id, from, through)]);
  const rows = [...mlb, ...espn].sort((a, b) => (a.date + a.eventId).localeCompare(b.date + b.eventId));
  return { from, through, rows };
}
