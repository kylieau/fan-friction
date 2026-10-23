// Step 0 of the naming (build 5, item 13, follow-up research case 7): before any title is built, records that are
// the same occurrence and the same admission scope merge into one, and the one title comes from the merged facts.
// Across feeds only: a hand-entered seed and a feed copy of the same game is the open preferSeed question
// (BACKLOG), so seeds are never merged here. Measured Oct 14 over the latest archive for all 40 cities: 0 pairs, so
// nothing on screen or in a read moves today; this guards the next feed (AXS, SeatGeek, DICE in item 1).

import { TEAMS } from './teams';
import type { CrowdEvent } from './types';

/**
 * Authority (case 7): editorial correction > official league or organizer > official venue or authorized seller >
 * aggregator. Lower wins. Within a tier the first one seen is kept: no feed carries a "confirmed at" time to
 * compare, so "latest confirmed" can't be read yet.
 */
const AUTHORITY: Record<string, number> = { seed: 0, mlb: 1, espn: 1, hockeytech: 1, sidearm: 1, ticketmaster: 2, seatgeek: 2, jambase: 2, fan: 4 };
const AGGREGATOR = 3;

const norm = (s: string | undefined) => (s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** A team's name as a key: "Football Club" is "FC", so a seller's "Los Angeles Football Club" meets "Los Angeles FC". */
const teamKey = (s: string) => norm(s).replace(/\bfootball club\b/g, 'fc');

/**
 * Every way a team is written (full name, short name, aliases) → its id, so "Chicago Cubs" meets "Cubs". Keyed by
 * id, not short name (B5-04, build 6, item 9d): two clubs can share a nickname (Utah's and Colorado's Mammoth). A
 * name that two teams write the same way maps to nothing, so a bare "Mammoth" stays unmatched rather than guessed.
 */
let byName: Map<string, string | null> | null = null;
function teamIdFor(raw: string): string | null {
  if (!byName) {
    byName = new Map();
    for (const team of Object.values(TEAMS)) {
      for (const n of [team.name, team.shortName, ...(team.aliases ?? [])]) {
        const key = teamKey(n);
        const seen = byName.get(key);
        if (seen === undefined) byName.set(key, team.id);
        else if (seen !== team.id) byName.set(key, null);
      }
    }
  }
  return byName.get(teamKey(raw)) ?? null;
}

/** One side of a game as a key: the team's id when a feed gave one or a name resolves to one, else the written name. */
function sideKey(raw: string): string {
  if (TEAMS[raw]) return raw;
  return teamIdFor(raw) ?? teamKey(raw);
}

/** The two sides of a game as a sorted key: team ids when the feed gave them, else the title's sides. */
function sidesKey(event: CrowdEvent): string | null {
  if (event.teams) return [event.teams.home, event.teams.away].map(sideKey).sort().join('|');
  const parts = event.title.replace(/\([^)]*\)/g, '').replace(/\s+[—–-]\s+.*$/, '').split(/\s+(?:vs\.?|@|at|v\.)\s+/i);
  return parts.length === 2 ? parts.map(sideKey).sort().join('|') : null;
}

function minutes(t: string | null): number | null {
  return t ? Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5)) : null;
}

/** Same occurrence and same admission scope (a festival pass is not a concert inside it; an add-on is not the game). */
export function sameOccurrence(a: CrowdEvent, b: CrowdEvent): boolean {
  if (a.sourceId === b.sourceId || a.sourceId === 'seed' || b.sourceId === 'seed') return false;
  if (a.date !== b.date || a.kind !== b.kind) return false;
  if (a.place.type !== 'venue' || b.place.type !== 'venue' || a.place.venueId !== b.place.venueId) return false;
  const ma = minutes(a.start);
  const mb = minutes(b.start);
  if (ma != null && mb != null && Math.abs(ma - mb) > 30) return false;
  if (a.kind === 'game') {
    const ka = sidesKey(a);
    return ka !== null && ka === sidesKey(b);
  }
  if (a.performer && b.performer) return norm(a.performer) === norm(b.performer);
  return norm(a.title) === norm(b.title);
}

/**
 * A seller's facts about an act, which mean nothing on a game: its run counts a performer's nights in the room, so a
 * home series would read as a three-night stand (Oct 22, 2026, the first live merge, LAFC vs. Galaxy).
 */
const ACT_ONLY: ReadonlySet<string> = new Set(['performer', 'act', 'occasionFacts', 'performerIds']);

/** The winner keeps its facts; a fact only the other record has fills in. The originals stay on `mergedFrom`. */
function merge(winner: CrowdEvent, loser: CrowdEvent): CrowdEvent {
  const filled: Record<string, unknown> = { ...winner };
  for (const [key, value] of Object.entries(loser)) {
    if (winner.kind === 'game' && ACT_ONLY.has(key)) continue;
    if (filled[key] === undefined && value !== undefined) filled[key] = value;
  }
  const from = [...(winner.mergedFrom ?? []), { sourceId: loser.sourceId ?? 'unknown', id: loser.id, title: loser.title }, ...(loser.mergedFrom ?? [])];
  return { ...(filled as unknown as CrowdEvent), mergedFrom: from };
}

/** One record per occurrence across feeds, in the list's order (the winner takes the first one's place). */
export function mergeDuplicates(events: readonly CrowdEvent[]): CrowdEvent[] {
  const out: CrowdEvent[] = [];
  for (const event of events) {
    const at = out.findIndex((kept) => sameOccurrence(kept, event));
    if (at < 0) {
      out.push(event);
      continue;
    }
    const kept = out[at];
    const rank = (e: CrowdEvent) => AUTHORITY[e.sourceId ?? ''] ?? AGGREGATOR;
    out[at] = rank(event) < rank(kept) ? merge(event, kept) : merge(kept, event);
  }
  return out;
}

/**
 * Pairs that look like one event listed twice and survived both the one-game rule and the merge: two sources, one
 * room, one date, starts within 30 minutes, either kind (Oct 22, 2026: LAFC vs. Galaxy and eight college games stayed
 * doubled because a seller called them football or left them unsegmented). Never drops anything; the nightly log and
 * the copies check print them so a new spelling shows up the morning it appears. Two different events in one room
 * that close together are rare; a festival pass and an add-on beside their show are the expected false alarms.
 */
export function possibleCopies(events: readonly CrowdEvent[]): [CrowdEvent, CrowdEvent][] {
  const byRoomDay = new Map<string, CrowdEvent[]>();
  for (const e of events) {
    if (e.place.type !== 'venue' || e.sourceId === 'seed') continue;
    const key = `${e.place.venueId}|${e.date}`;
    byRoomDay.set(key, [...(byRoomDay.get(key) ?? []), e]);
  }
  const pairs: [CrowdEvent, CrowdEvent][] = [];
  for (const list of byRoomDay.values()) {
    for (let i = 0; i < list.length; i += 1) {
      for (let j = i + 1; j < list.length; j += 1) {
        const [a, b] = [list[i], list[j]];
        if (a.sourceId === b.sourceId) continue;
        const ma = minutes(a.start);
        const mb = minutes(b.start);
        if (ma != null && mb != null && Math.abs(ma - mb) > 30) continue;
        pairs.push([a, b]);
      }
    }
  }
  return pairs;
}
