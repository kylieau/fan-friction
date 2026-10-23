import { COST_LABELS, costTotal, lineTotal, normalizeCost } from './costs';
import { entryTeams } from './personalLog';
import type { CostKind, Entry } from './types';

// Spend (build 7, §3.9; Kylie, Oct 22, 2026): every figure covers logged amounts only, and says so ("N of M events
// with cost"). A stub with no cost is excluded, never counted as 0; Free counts as $0 in totals and stays out of the
// average ticket. Trip costs (Other) count in totals and in venue averages alike in build 7 (Locked). By team credits
// both teams of every game; events with no team stay out of By team.

export interface SpendSummary {
  /** Stubs with a cost entered (Free included) against every stub in the set. */
  logged: number;
  of: number;
  total: number;
  byKind: { kind: CostKind; label: string; amount: number }[];
  /** Ticket spend over the ticket count (quantity, 1 when none); free tickets excluded. */
  avgTicket: number | null;
  paidSeats: number;
  freeEvents: number;
  /** Watched stubs' spend, on its own line. */
  watched: { total: number; lines: { kind: CostKind; amount: number }[] };
  currency: string;
}

export function spendSummary(entries: readonly Entry[]): SpendSummary {
  const byKind = new Map<CostKind, number>();
  let total = 0;
  let logged = 0;
  let ticketSum = 0;
  let paidSeats = 0;
  let freeEvents = 0;
  let currency = 'USD';
  const watchedLines = new Map<CostKind, number>();
  let watchedTotal = 0;
  for (const entry of entries) {
    const cost = normalizeCost(entry.cost);
    if (!cost) continue;
    logged += 1;
    if (cost.currency) currency = cost.currency;
    if (cost.free) {
      freeEvents += 1;
      continue;
    }
    for (const line of cost.lines) {
      const amount = lineTotal(line);
      total += amount;
      byKind.set(line.kind, (byKind.get(line.kind) ?? 0) + amount);
      // A $0 ticket line is a free seat: out of the paid-seat average (Codex, stage 4).
      if (line.kind === 'ticket' && !entry.watched && amount > 0) {
        ticketSum += amount;
        paidSeats += line.qty ?? 1;
      }
      if (entry.watched) {
        watchedLines.set(line.kind, (watchedLines.get(line.kind) ?? 0) + amount);
        watchedTotal += amount;
      }
    }
  }
  const order: CostKind[] = ['ticket', 'parking', 'food', 'merch', 'stream', 'other'];
  return {
    logged,
    of: entries.length,
    total: round(total),
    byKind: order.filter((kind) => byKind.has(kind)).map((kind) => ({ kind, label: COST_LABELS[kind], amount: round(byKind.get(kind) ?? 0) })),
    avgTicket: paidSeats > 0 ? round(ticketSum / paidSeats) : null,
    paidSeats,
    freeEvents,
    watched: { total: round(watchedTotal), lines: order.filter((k) => watchedLines.has(k)).map((kind) => ({ kind, amount: round(watchedLines.get(kind) ?? 0) })) },
    currency,
  };
}

export interface SpendGroup {
  label: string;
  /** Stubs in the group with a cost entered, and all of them. */
  logged: number;
  of: number;
  total: number;
  /** Spend over the logged stubs; null when none is logged. */
  perVisit: number | null;
}

/** Attended stubs by venue, per visit: trips and parking count in (build 7 keeps venue averages as they are, Locked). */
export function spendByVenue(entries: readonly Entry[]): SpendGroup[] {
  return groups(
    entries.filter((e) => !e.watched && e.venue),
    (e) => [e.venue!],
  );
}

/** Attended games by team, both teams credited, Fave or not (Locked); concerts and other no-team events stay out, and watched spend keeps to its own line. */
export function spendByTeam(entries: readonly Entry[]): SpendGroup[] {
  return groups(
    entries.filter((e) => e.kind === 'game' && !e.watched),
    (e) => entryTeams(e),
  );
}

function groups(entries: readonly Entry[], keysOf: (entry: Entry) => string[]): SpendGroup[] {
  const map = new Map<string, SpendGroup>();
  for (const entry of entries) {
    const total = costTotal(entry.cost);
    for (const key of keysOf(entry)) {
      const g = map.get(key) ?? { label: key, logged: 0, of: 0, total: 0, perVisit: null };
      g.of += 1;
      if (total !== null) {
        g.logged += 1;
        g.total = round(g.total + total);
      }
      map.set(key, g);
    }
  }
  return [...map.values()]
    .map((g) => ({ ...g, perVisit: g.logged > 0 ? round(g.total / g.logged) : null }))
    .sort((a, b) => (b.perVisit ?? -1) - (a.perVisit ?? -1) || b.of - a.of || a.label.localeCompare(b.label));
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
