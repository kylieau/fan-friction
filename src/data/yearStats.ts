import { entryTags, entryTeams, logStats } from './personalLog';
import { entryOutcome, hoursAtGames } from './results';
import { favoriteFor } from './favorites';
import { TEAMS } from './teams';
import { tagSummaries } from './stubTags';
import { entryCrowd } from './crowdFigures';
import { METROS } from '../config/metros';
import type { Entry, Team } from './types';

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
  key: 'record' | 'venues' | 'newVenues' | 'hours' | 'cities' | 'teams' | 'topTeam' | 'topTag' | 'streak' | 'biggestCrowd';
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
/**
 * How an attended game went for the side she was there for: the stub's own sides and the names of the team its
 * system tags credit (short name, full name, aliases), never its opponents, so a college stub whose side reads
 * "UCLA MBB" still finds a result filed under "UCLA". Null with no result on file.
 */
export function attendedOutcome(entry: Entry): 'W' | 'L' | 'T' | null {
  if (entry.kind !== 'game' || entry.watched) return null;
  const system = new Set(['Concerts', 'Sports', 'Event', entry.sport]);
  const teams = new Map<string, Team>();
  for (const word of entryTags(entry).filter((tag) => !system.has(tag))) {
    const fav = favoriteFor('team', word);
    const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
    if (team) teams.set(team.id, team);
  }
  // One credited team: its names alone, never the stub's other side (a hand-added game carries both names in
  // `sides`, and the opponent's would have matched; Codex, group 20 review). Two of her teams against each other:
  // no side to be on, so no outcome. No team on file: the stub's one side, when it has exactly one.
  if (teams.size > 1) return null;
  const team = [...teams.values()][0];
  if (!team) return entry.sides.length === 1 ? entryOutcome(entry, entry.sides) : null;
  return entryOutcome(entry, [team.shortName, team.name, ...(team.abbr ? [team.abbr] : []), ...(team.aliases ?? [])], [team.id]);
}

/** Wins and losses over the attended games with a result on file (Kylie's Nov 19, 2026 note 2: a lifetime record in Stats). */
export function attendedRecord(entries: readonly Entry[]): { wins: number; losses: number; ties: number } {
  const out = { wins: 0, losses: 0, ties: 0 };
  for (const entry of entries) {
    const o = attendedOutcome(entry);
    if (o === 'W') out.wins++;
    else if (o === 'L') out.losses++;
    else if (o === 'T') out.ties++;
  }
  return out;
}

export function yearStatPool(entries: readonly Entry[], year: string | 'all', allEntries: readonly Entry[], options: { /** False while the dates' results are still loading: no record tile until they are, so a part-loaded record never reads as final (Codex, group 20 review). */ resultsReady?: boolean } = {}): YearStat[] {
  const attended = entries.filter((e) => !e.watched);
  const stats = logStats([...entries]);
  const pool: YearStat[] = [];
  // The record when she attends (mock notes-and-record/02, approved Nov 19, 2026): pinned first among the tiles once
  // one attended game has a result, whatever the other stats weigh; ties, rare, ride in the second line.
  const record = options.resultsReady === false ? { wins: 0, losses: 0, ties: 0 } : attendedRecord(attended);
  if (record.wins + record.losses + record.ties > 0) {
    pool.push({ key: 'record', value: `${record.wins}–${record.losses}`, label: 'Record when you attend', sub: record.ties > 0 ? `${record.ties} ${record.ties === 1 ? 'tie' : 'ties'}` : undefined, weight: Number.POSITIVE_INFINITY });
  }
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
  withMilestones(pool, entries, year, allEntries, options.resultsReady !== false);
  return pool.sort((a, b) => b.weight - a.weight);
}

/** "Nov 16" from a day. */
function monthDay(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

/** The stub counts worth naming (build 7.3, D5). */
const STUB_MARKS = [1, 10, 25, 50, 100, 250, 500, 1000];

/**
 * Milestones as the tiles' quiet second line (build 7.3, D5; board `docs/build-7-3/mockups/round1/03`, approved Nov 23,
 * 2026): first event or the 10th, 25th… stub, a first win, a new venue, a new team, a new city, and the busiest month,
 * each only when it happened in the span shown, and only on a tile with no second line of its own. No badges, no
 * confetti, no points (the guardrails). Day-precision stubs only; the order is the log's own (date, then title).
 */
function withMilestones(pool: YearStat[], entries: readonly Entry[], year: string | 'all', allEntries: readonly Entry[], resultsReady: boolean) {
  const inSpan = (date: string) => year === 'all' || date.startsWith(year);
  const dated = [...allEntries].filter((e) => e.when.precision === 'day').sort((a, b) => a.when.sort.localeCompare(b.when.sort) || a.title.localeCompare(b.title));
  const put = (key: YearStat['key'], line: string | null) => {
    const tile = pool.find((s) => s.key === key);
    if (tile && !tile.sub && line) tile.sub = line;
  };
  // The newest first-time thing in the span: the last stub that brought a word never seen before it.
  const newest = (wordsOf: (e: Entry) => string[]): { word: string; date: string } | null => {
    const seen = new Set<string>();
    let last: { word: string; date: string } | null = null;
    for (const e of dated) {
      for (const w of wordsOf(e)) {
        if (seen.has(w)) continue;
        seen.add(w);
        if (inSpan(e.when.sort)) last = { word: w, date: e.when.sort };
      }
    }
    return last;
  };
  if (resultsReady) {
    const firstWin = dated.find((e) => attendedOutcome(e) === 'W');
    if (firstWin && inSpan(firstWin.when.sort)) put('record', `first win: ${monthDay(firstWin.when.sort)}`);
  }
  // A new venue, team, or city means new against everything before it; for all time there is no "before", so these
  // three speak only in a single year.
  if (year !== 'all') {
    const venue = newest((e) => (!e.watched && e.venue ? [e.venue] : []));
    put('venues', venue ? `${venue.word} was new` : null);
    const team = newest((e) => entryTeams(e));
    put('teams', team ? `a new team: ${team.word}` : null);
    const city = newest((e) => (e.metroId ? [METROS[e.metroId]?.name ?? e.metroId] : []));
    put('cities', city ? `a new city: ${city.word}` : null);
  }
  // The highest stub count reached in the span, on the first tile still without a line (the hours, else the streak).
  let mark: { n: number; date: string } | null = null;
  dated.forEach((e, i) => {
    const n = i + 1;
    if (STUB_MARKS.includes(n) && inSpan(e.when.sort)) mark = { n, date: e.when.sort };
  });
  if (mark) {
    const { n, date } = mark as { n: number; date: string };
    const line = n === 1 ? `your first stub, ${monthDay(date)}` : `your ${ordinal(n)} stub, ${monthDay(date)}`;
    const holder = pool.find((s) => (s.key === 'hours' || s.key === 'streak' || s.key === 'biggestCrowd') && !s.sub);
    if (holder) holder.sub = line;
  }
  // The busiest month in the span, when it held three or more stubs, on the streak tile.
  const months = new Map<string, number>();
  for (const e of entries) if (e.when.precision === 'day') months.set(e.when.sort.slice(0, 7), (months.get(e.when.sort.slice(0, 7)) ?? 0) + 1);
  const busiest = [...months.entries()].sort((a, b) => b[1] - a[1] || b[0].localeCompare(a[0]))[0];
  if (busiest && busiest[1] >= 3) {
    const [y, m] = busiest[0].split('-').map(Number);
    const name = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { month: 'long', timeZone: 'UTC' });
    put('streak', `busiest month: ${name}, ${busiest[1]}`);
  }
}

function ordinal(n: number): string {
  const tens = n % 100;
  if (tens >= 11 && tens <= 13) return `${n}th`;
  return `${n}${n % 10 === 1 ? 'st' : n % 10 === 2 ? 'nd' : n % 10 === 3 ? 'rd' : 'th'}`;
}
