// The Add a game / Add a show card (Kylie, Oct 21, 2026, late evening; docs/product/add-from-page-proposal.md): an event
// no feed carries, added from a team's or artist's page or from New stub with the type picked first, with the
// defaults already set so a person picks rather than types. Save always makes a plan (ahead) or an entry (past) in
// the person's own log. When it meets the inclusion standard it is also sent for review (suggested_events), labeled
// pending; a confirmed row becomes a catalog event at the nightly run (step 2, not built yet) and then counts toward
// the date's verdict like any event. The standard, enforced by the records, not a box: a team or artist on file, a
// room on file (so the size is known), a date and a time, nothing already listed at that room, date and sport, and a
// signed-in person. Screens reach this only through src/data/index.ts.

import { getAccount } from './account';
import { REVIEW_WINDOW } from './suggestions';
import { competitionNamed } from './competitions';
import { addManualEntry, addManualPlan, markPlanSuggested, markSuggested, togglePlan, type ManualNight } from './personalLog';
import { supabase } from './storage/supabaseClient';
import { getTeamSchedule } from './teamSchedule';
import { TEAMS, isCollegeTeam, teamLongName } from './teams';
import type { CrowdEvent, Division, Favorite, LocalDate, LocalTime, SportsLevel } from './types';
import { VENUES, venueNameOn } from './venues';
import { METROS, DEFAULT_METRO, type Metro } from '../config/metros';

const todayIn = (metro: Metro): LocalDate => new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });

export interface QuickAddDefaults {
  /** "UCLA Men's Basketball" or the artist's name. */
  title: string;
  kind: 'game' | 'show';
  /** What the card says is already set: "Game · Men's basketball · College". */
  setLine: string;
  sport?: string;
  level?: SportsLevel;
  division?: Division;
  /** The home room's name today, when the schedule shows one. */
  homeVenue?: string;
  /** Opponents from the schedule, soonest first, then played; unique. */
  opponents: string[];
  /** The city's rooms, biggest first, by the names they go by today. */
  rooms: string[];
  /** Whether the team or artist is on file (a team record; an artist with listings or a record). */
  onFile: boolean;
  /** The schedule's span, padded a month each way, for the season check; absent when no schedule is on file. */
  season?: { from: LocalDate; to: LocalDate };
}

/** What the plausibility gate found, kept on the review row so a reviewer sees it at a glance. */
export interface QuickAddChecks {
  season: 'in' | 'out' | 'unknown';
  opponent: 'known' | 'free-text' | 'none';
  room: 'on-file' | 'free-text';
}

export interface QuickAddInput {
  target: Favorite;
  defaults: QuickAddDefaults;
  opponent?: string;
  date: LocalDate;
  start?: LocalTime;
  /** The room's name as picked, or a free-text venue. */
  venue: string;
}

export interface QuickAddResult {
  id: string;
  plan: boolean;
  /** Sent for review: the standard was met and the person is signed in. */
  submitted: boolean;
  /** Why it was not sent, in a word for the log. */
  heldBecause?: 'no-record' | 'no-room' | 'no-time' | 'signed-out' | 'no-connection' | 'listed' | 'outside-window';
  /** The catalog already lists it (the instant check): the plan went on that event instead. */
  matchedEventId?: string;
  matchedMetroId?: string;
  checks?: QuickAddChecks;
}

/** What the instant check reads: the city's date as the app sees it (last night's feeds). */
export type LoadDate = (metroId: string, date: LocalDate) => Promise<{ events: CrowdEvent[]; furtherOut?: CrowdEvent[] }>;

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

/** The room on file that goes by this name today, in one city. */
export function roomNamed(metroId: string, name: string, date: LocalDate) {
  const q = name.trim().toLowerCase();
  return Object.values(VENUES).find((v) => v.metroId === metroId && v.names.some((n) => n.name.toLowerCase() === q) && venueNameOn(v, date).toLowerCase() === q)
    ?? Object.values(VENUES).find((v) => v.metroId === metroId && v.names.some((n) => n.name.toLowerCase() === q));
}

/** The city's open rooms A–Z (a native picker jumps by letter), with any named first ones ahead: the home room, the rooms the artist has played here. */
export function roomsIn(metroId: string, date: LocalDate, first: readonly string[] = []): string[] {
  const names = Object.values(VENUES)
    .filter((v) => v.metroId === metroId && !(v.closed && !v.closed.until))
    .map((v) => venueNameOn(v, date))
    .sort((a, b) => a.localeCompare(b));
  const lead = first.filter((n) => names.includes(n));
  return [...new Set([...lead, ...names])];
}

/**
 * The card's defaults for a team or an artist. A team's come from its record and schedule; an artist's from the
 * page (its genre word) and the home city's rooms.
 */
export async function quickAddDefaults(target: Favorite, homeId: string | null, genreWord?: string | null, artistListed = false, playedRooms: readonly string[] = []): Promise<QuickAddDefaults> {
  const metroId = homeId ?? DEFAULT_METRO.id;
  const today = todayIn(METROS[metroId] ?? DEFAULT_METRO);
  const rooms = roomsIn(metroId, today, playedRooms);
  if (target.kind === 'team' && target.teamId && TEAMS[target.teamId]) {
    const team = TEAMS[target.teamId];
    const comp = competitionNamed(team.league);
    const level: SportsLevel = comp?.level ?? (isCollegeTeam(team) ? 'college' : 'pro');
    const division: Division | undefined = comp?.division ?? (/women/i.test(team.league) ? 'women' : /men's|mens\b/i.test(team.league) ? 'men' : undefined);
    const schedule = (await getTeamSchedule(team.id)) ?? [];
    const ahead = schedule.filter((g) => g.date >= today).sort((a, b) => a.date.localeCompare(b.date));
    const played = schedule.filter((g) => g.date < today).sort((a, b) => b.date.localeCompare(a.date));
    const opponents = [...new Set([...ahead, ...played].map((g) => g.opponent).filter(Boolean))];
    const dates = schedule.map((g) => g.date).sort();
    const pad = (d: LocalDate, days: number) => new Date(new Date(`${d}T12:00:00Z`).getTime() + days * 86_400_000).toISOString().slice(0, 10);
    const season = dates.length ? { from: pad(dates[0], -30), to: pad(dates[dates.length - 1], 30) } : undefined;
    // The home room: the one the schedule's home games name most often, by its name today.
    const counts = new Map<string, number>();
    for (const g of schedule) if (g.home && g.venueName) counts.set(g.venueName, (counts.get(g.venueName) ?? 0) + 1);
    const homeName = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    const homeRoom = homeName ? roomNamed(team.metroId ?? metroId, homeName, today) : undefined;
    const sportWord = cap(team.sport);
    return {
      title: isCollegeTeam(team) ? teamLongName(team) : team.name,
      kind: 'game',
      setLine: ['Game', division === 'women' ? `Women's ${team.sport}` : division === 'men' ? `Men's ${team.sport}` : sportWord, cap(level === 'pro' ? 'pro' : level)].join(' · '),
      sport: sportWord,
      level,
      ...(division ? { division } : {}),
      homeVenue: homeRoom ? venueNameOn(homeRoom, today) : homeName,
      opponents,
      rooms: roomsIn(team.metroId ?? metroId, today, homeRoom ? [venueNameOn(homeRoom, today)] : []),
      onFile: true,
      ...(season ? { season } : {}),
    };
  }
  return {
    title: target.label,
    kind: 'show',
    setLine: ['Concert', genreWord ?? ''].filter(Boolean).join(' · '),
    opponents: [],
    rooms,
    onFile: Boolean(target.artistId) || artistListed,
  };
}

/** Save the card: a plan or an entry in the person's log, and the review row when the standard is met. */
export async function saveQuickAdd(input: QuickAddInput, homeId: string | null, loadDate?: LoadDate): Promise<QuickAddResult> {
  const { target, defaults } = input;
  const metroId = homeId ?? DEFAULT_METRO.id;
  const today = todayIn(METROS[metroId] ?? DEFAULT_METRO);
  const team = target.kind === 'team' && target.teamId ? TEAMS[target.teamId] : undefined;
  const roomMetro = team?.metroId ?? metroId;
  const room = roomNamed(roomMetro, input.venue, input.date);
  const opponent = input.opponent?.trim() || undefined;
  const title = defaults.kind === 'game' ? (opponent ? `${defaults.title} vs. ${opponent}` : defaults.title) : defaults.title;

  // The instant check (Kylie, Oct 21, 2026, late evening): if the catalog already lists it at this room on this
  // date (the same sport within three hours for a game, the same act for a show), the plan goes on that event and
  // nothing is sent for review. Reads the catalog as the app sees it; the nightly job matches what lands later.
  if (room && loadDate) {
    const listed = await listedMatch(loadDate, room.metroId, input.date, room.id, defaults, target.label, input.start).catch(() => undefined);
    if (listed) {
      const ahead = input.date >= today;
      if (ahead) togglePlan(listed, 'attend');
      else {
        const entry = addManualEntry({ title, kind: defaults.kind, when: { sort: input.date, label: '', precision: 'day' }, venue: venueNameOn(room, input.date), metroId: room.metroId, ...(input.start ? { start: input.start } : {}), tags: team ? [team.shortName] : ['Concerts'], sides: team ? [team.name, ...(opponent ? [opponent] : [])] : [target.label] }, homeId);
        return { id: entry.id, plan: false, submitted: false, heldBecause: 'listed', matchedEventId: listed.id, matchedMetroId: listed.metroId };
      }
      return { id: `plan-${listed.id}`, plan: true, submitted: false, heldBecause: 'listed', matchedEventId: listed.id, matchedMetroId: listed.metroId };
    }
  }
  // The plausibility gate: recorded for the reviewer, never a block (a real opponent can be one the schedule hasn't named).
  const checks: QuickAddChecks = {
    season: defaults.season ? (input.date >= defaults.season.from && input.date <= defaults.season.to ? 'in' : 'out') : 'unknown',
    opponent: defaults.kind !== 'game' ? 'none' : opponent && (defaults.opponents.includes(opponent) || Object.values(TEAMS).some((t) => [t.name, t.shortName, ...(t.aliases ?? [])].some((n) => n.toLowerCase() === opponent.toLowerCase()))) ? 'known' : 'free-text',
    room: room ? 'on-file' : 'free-text',
  };
  const night: ManualNight = {
    title,
    kind: defaults.kind,
    ...(defaults.kind === 'game' ? { sport: defaults.sport, level: defaults.level, division: defaults.division } : {}),
    when: { sort: input.date, label: '', precision: 'day' },
    venue: room ? venueNameOn(room, input.date) : input.venue.trim(),
    metroId: room?.metroId ?? roomMetro,
    ...(input.start ? { start: input.start } : {}),
    // Filter tags and sides so the team's or artist's page lists it (entryMatches): the team's short name, the artist's name.
    tags: team ? [team.shortName] : ['Concerts'],
    sides: team ? [team.name, ...(opponent ? [opponent] : [])] : [target.label],
  };
  const ahead = input.date >= today;
  const saved = ahead ? addManualPlan(night, homeId) : addManualEntry(night, homeId);
  const result: QuickAddResult = { id: saved.id, plan: ahead, submitted: false, checks };
  // The review window (Kylie, Oct 21, 2026): 30 days back, 180 ahead; outside it the log keeps the event and nothing is sent.
  const dayDiff = Math.round((Date.parse(`${input.date}T12:00:00Z`) - Date.parse(`${today}T12:00:00Z`)) / 86_400_000);
  if (dayDiff < -REVIEW_WINDOW.behind || dayDiff > REVIEW_WINDOW.ahead) return { ...result, heldBecause: 'outside-window' };
  if (!defaults.onFile) return { ...result, heldBecause: 'no-record' };
  if (!room) return { ...result, heldBecause: 'no-room' };
  if (!input.start) return { ...result, heldBecause: 'no-time' };
  const client = supabase();
  const account = getAccount();
  if (!client || !account) return { ...result, heldBecause: client ? 'signed-out' : 'no-connection' };
  const id = crypto.randomUUID();
  const { error } = await client.from('suggested_events').insert({
    id,
    user_id: account.id,
    entry_id: saved.id,
    title,
    kind: defaults.kind,
    when_sort: input.date,
    when_precision: 'day',
    venue: night.venue ?? null,
    metro_id: night.metroId ?? null,
  });
  if (error) return { ...result, heldBecause: 'no-connection' };
  // The structured facts (migration 0030); an older table without the columns keeps the base row.
  await client
    .from('suggested_events')
    .update({
      team_id: team?.id ?? null,
      artist: team ? null : target.label,
      venue_id: room.id,
      start_time: input.start,
      opponent: opponent ?? null,
      sport: defaults.sport ?? null,
      level: defaults.level ?? null,
      source: 'quick-add',
      checks,
    })
    .eq('id', id)
    .then(() => undefined, () => undefined);
  if (ahead) markPlanSuggested(saved.id, id);
  else markSuggested(saved.id, id);
  return { ...result, submitted: true };
}

const minutes = (t: string | null | undefined) => (t ? Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5)) : null);
const plain = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** The listed event at this room on this date that is the same game or show, if any. */
async function listedMatch(loadDate: LoadDate, metroId: string, date: LocalDate, venueId: string, defaults: QuickAddDefaults, label: string, start?: LocalTime): Promise<CrowdEvent | undefined> {
  const day = await loadDate(metroId, date);
  const atRoom = [...day.events, ...(day.furtherOut ?? [])].filter((e) => e.place.type === 'venue' && e.place.venueId === venueId);
  if (defaults.kind === 'game') {
    const sport = (defaults.sport ?? '').toLowerCase();
    return atRoom.find((e) => {
      if (e.kind !== 'game' || e.audience.domain !== 'sports') return false;
      if (sport && e.audience.sport !== sport && e.audience.sport !== 'other') return false;
      const ma = minutes(start);
      const mb = minutes(e.start);
      return ma == null || mb == null || Math.abs(ma - mb) <= 180;
    });
  }
  const who = plain(label);
  return atRoom.find((e) => e.kind !== 'game' && [e.performer, e.title, e.officialTitle].some((n) => n && (plain(n) === who || plain(n).includes(who))));
}
