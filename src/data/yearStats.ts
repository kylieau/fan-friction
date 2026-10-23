import { entryTeams, logStats } from './personalLog';
import { hoursAtGames } from './results';
import { tagSummaries } from './stubTags';
import { entryCrowd } from './crowdFigures';
import { METROS } from '../config/metros';
import type { Entry } from './types';

// The numbers behind You's year card, Your year and Ranks (build 7, §3.6, §3.8, §3.9). Counts and milestones only,
// all from the log; no money on the card (Kylie, Oct 22, 2026: "I might prefer venues over spent cost"). Every team
// stat counts every team you've seen, each game crediting both teams (Locked). Verdict words never come from here.

/** The stubs that fall in a calendar year, by their sort date (a rough date counts in the year it names). */
export function entriesInYear(entries: readonly Entry[], year: string | 'all'): Entry[] {
  return year === 'all' ? [...entries] : entries.filter((entry) => entry.when.sort.startsWith(year));
}

/** The years with at least one stub, newest first; the current year is always offered. */
export function yearsOf(entries: readonly Entry[], currentYear: string): string[] {
  const years = new Set(entries.map((entry) => entry.when.sort.slice(0, 4)).filter((y) => /^\d{4}$/.test(y) && y !== '0000'));
  years.add(currentYear);
  return [...years].sort((a, b) => b.localeCompare(a));
}

export interface YearStat {
  key: 'venues' | 'newVenues' | 'hours' | 'cities' | 'teams' | 'topTeam' | 'topTag' | 'streak' | 'biggestCrowd';
  /** The big figure. */
  value: string;
  /** The words under it. */
  label: string;
  /** A quieter second line ("up from 1 in 2025"). */
  sub?: string;
  /** How much the stat has to say: the pool is ranked by this and the top four show (a lean). */
  weight: number;
}

/** "Teams seen" and the rest, over a set of stubs: every team credited, by count, most first. */
export function teamCounts(entries: readonly Entry[]): { label: string; count: number }[] {
  const map = new Map<string, number>();
  for (const entry of entries) for (const team of entryTeams(entry)) map.set(team, (map.get(team) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([label, count]) => ({ label, count }));
}

/** Cities, by the stub's metro, most first. A stub with no city stays out. */
export function cityCounts(entries: readonly Entry[]): { label: string; count: number }[] {
  const map = new Map<string, number>();
  for (const entry of entries) if (entry.metroId) map.set(entry.metroId, (map.get(entry.metroId) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map(([id, count]) => ({ label: METROS[id]?.name ?? id, count }));
}

/** The longest run of consecutive days with a stub (day-precision only). */
export function longestStreak(entries: readonly Entry[]): number {
  const days = [...new Set(entries.filter((e) => e.when.precision === 'day').map((e) => e.when.sort))].sort();
  let best = 0;
  let run = 0;
  let prev: string | null = null;
  for (const day of days) {
    const next = prev ? new Date(`${prev}T12:00:00Z`) : null;
    if (next) next.setUTCDate(next.getUTCDate() + 1);
    run = next && next.toISOString().slice(0, 10) === day ? run + 1 : 1;
    best = Math.max(best, run);
    prev = day;
  }
  return best;
}

/**
 * The year card's pool (mock 30, Locked as a fixed big number plus four auto-picked stats; the pool and its ranking
 * are a lean): venues (new ones against the year before when there is one), hours at games, cities, teams seen, the
 * most-seen team, the top tag, the longest streak, the biggest crowd. A stat with too little to say stays out.
 */
export function yearStatPool(entries: readonly Entry[], year: string | 'all', allEntries: readonly Entry[]): YearStat[] {
  const attended = entries.filter((e) => !e.watched);
  const stats = logStats([...entries]);
  const pool: YearStat[] = [];
  if (stats.venues > 0) {
    const before = year === 'all' ? [] : allEntries.filter((e) => !e.watched && e.when.sort < `${year}-01-01`);
    const seenBefore = new Set(before.map((e) => e.venue).filter(Boolean));
    const fresh = new Set(attended.map((e) => e.venue).filter((v): v is string => Boolean(v) && !seenBefore.has(v)));
    const prevYear = year === 'all' ? null : String(Number(year) - 1);
    const beforePrev = new Set(prevYear ? allEntries.filter((e) => !e.watched && e.when.sort < `${prevYear}-01-01`).map((e) => e.venue).filter(Boolean) : []);
    const prevFresh = prevYear ? new Set(allEntries.filter((e) => !e.watched && e.when.sort.startsWith(prevYear)).map((e) => e.venue).filter((v) => v && !beforePrev.has(v))).size : 0;
    if (year !== 'all' && seenBefore.size > 0) pool.push({ key: 'newVenues', value: String(fresh.size), label: fresh.size === 1 ? 'New venue' : 'New venues', sub: prevFresh > 0 ? `${fresh.size > prevFresh ? 'up from' : fresh.size < prevFresh ? 'down from' : 'same as'} ${prevFresh} in ${prevYear}` : undefined, weight: 3 + fresh.size });
    else pool.push({ key: 'venues', value: String(stats.venues), label: stats.venues === 1 ? 'Venue' : 'Venues', weight: 3 + stats.venues });
  }
  const hours = hoursAtGames(attended);
  if (hours.games > 0) pool.push({ key: 'hours', value: String(hours.hours), label: `Hours at ${hours.games === 1 ? '1 game' : `${hours.games} games`}`, weight: 2 + hours.games });
  const cities = cityCounts(entries);
  if (cities.length >= 2) pool.push({ key: 'cities', value: String(cities.length), label: 'Cities', weight: 2 + cities.length });
  const teams = teamCounts(entries);
  if (teams.length >= 2) pool.push({ key: 'teams', value: String(teams.length), label: 'Teams seen', weight: 2 + teams.length });
  if (teams.length > 0 && teams[0].count >= 2) pool.push({ key: 'topTeam', value: String(teams[0].count), label: `${teams[0].label} games`, weight: 1 + teams[0].count });
  const tags = tagSummaries(entries, []);
  if (tags.length > 0 && tags[0].count >= 2) pool.push({ key: 'topTag', value: String(tags[0].count), label: `Tagged ${tags[0].tag}`, weight: 1 + tags[0].count });
  const streak = longestStreak(entries);
  if (streak >= 2) pool.push({ key: 'streak', value: String(streak), label: 'Days in a row', weight: 1 + streak });
  const biggest = attended.map((e) => ({ e, n: entryCrowd(e)?.count ?? 0 })).sort((a, b) => b.n - a.n)[0];
  if (biggest && biggest.n > 0) pool.push({ key: 'biggestCrowd', value: biggest.n >= 1000 ? `${Math.round(biggest.n / 1000)}k` : String(biggest.n), label: 'Biggest crowd', weight: 2 });
  return pool.sort((a, b) => b.weight - a.weight);
}
