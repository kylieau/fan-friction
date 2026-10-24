// Season tickets (build 7.1, item 15; Kylie, Oct 23, 2026, Locked): one switch per team adds every home game of the
// season as an Attending plan, the whole season at once, past the catalog window. The pure rules live here; the
// personal log wraps them in its save (personalLog.ts), and the schedule hook runs the reconcile on every load.
//
// How a season plan reaches the catalog without a duplicate: the feeds stamp each home game at a known building
// with the very id its catalog event will carry (`2027-07-11-mlb-7463…`, `…-espn-lakers-4019…`, `…-ht-…`), whatever
// the window, so the plan takes that id and the event page, the window and the stub see one plan when the event
// arrives. A moved game changes its id (the date is inside it): the reconcile matches the plan by the feed's own
// `gameId` and moves it, keeping its edits. A game the schedule no longer lists is flagged `gone`, never dropped.

import { TEAMS } from './teams';
import { eventFromGame, gameEventId } from './gameStub';
import { listTitle } from '../lib/eventTitle';
import { venueNameOn, VENUES } from './venues';
import { normalizeSeats, seatsLine } from './stubTags';
import { normalizeCost } from './costs';
import type { Cost, Plan, SeasonTicket, Seats, StubVisibility, TeamGame } from './types';

/** The season games the switch covers: home, not neutral, not a playoff, preseason when it is included. */
export function seasonHomeGames(games: readonly TeamGame[], ticket: Pick<SeasonTicket, 'preseason'>): TeamGame[] {
  return games.filter((game) => game.home && !game.neutral && !game.stakes && (ticket.preseason || !game.preseason));
}

/** The games in her plan: every season home game on Full, the picked ones on Partial; a removed game is out either way. */
export function seasonGameSet(games: readonly TeamGame[], ticket: SeasonTicket): TeamGame[] {
  const picked = ticket.plan === 'partial' ? new Set(ticket.picked ?? []) : null;
  return seasonHomeGames(games, ticket).filter((game) => (picked ? picked.has(game.id) : true) && !(game.id in ticket.removed));
}

/** Home playoff games the schedule lists (a round on the game), for the card on Upcoming. */
export function seasonPlayoffGames(games: readonly TeamGame[]): TeamGame[] {
  return games.filter((game) => game.home && !game.neutral && Boolean(game.stakes));
}

/** The id a season plan carries: the catalog event's own id when the feed names the building, else the schedule's. */
export function seasonPlanEventId(game: TeamGame): string {
  return game.eventId ?? gameEventId(game);
}

/** The default cost the ticket gives every game: the ticket price, and a Parking & Transit line when parking is set. */
export function seasonDefaultCost(ticket: Pick<SeasonTicket, 'ticket' | 'parking' | 'currency'>): Cost | undefined {
  const lines: Cost['lines'] = [];
  if (typeof ticket.ticket === 'number') lines.push({ kind: 'ticket', amount: ticket.ticket });
  if (typeof ticket.parking === 'number' && ticket.parking > 0) lines.push({ kind: 'parking', amount: ticket.parking });
  return normalizeCost(lines.length > 0 ? { lines, ...(ticket.currency ? { currency: ticket.currency } : {}) } : undefined);
}

/**
 * The defaults on a plan, as its answer allows (the Stub it sheet's rules): a seat only while Attending, a cost while
 * Attending or Watching, nothing on Interested (Codex, build 7.1 steps 9–10 review).
 */
function withDefaults<T extends Plan>(plan: T, ticket: SeasonTicket, keep: { seats?: boolean; cost?: boolean } = {}): T {
  const { seats: oldSeats, cost: oldCost, ...rest } = plan;
  const seats = keep.seats ? oldSeats : plan.watch || plan.interested ? undefined : normalizeSeats(ticket.seats);
  const cost = keep.cost ? oldCost : plan.interested ? undefined : seasonDefaultCost(ticket);
  return { ...rest, ...(seats ? { seats } : {}), ...(cost ? { cost } : {}) } as T;
}

/** What a game's plan shows and where it is, from the schedule row (the event page's own words for the game). */
function placeOf(teamId: string, game: TeamGame): Pick<Plan, 'date' | 'metroId' | 'eventId' | 'title' | 'venue'> {
  const event = eventFromGame({ teamId, game });
  const team = TEAMS[teamId];
  const venue = event?.place.type === 'venue' ? VENUES[event.place.venueId] : undefined;
  return {
    date: game.date,
    metroId: event?.metroId ?? team?.metroId ?? 'la',
    eventId: seasonPlanEventId(game),
    title: event ? listTitle(event) : `${game.opponent} at ${team?.shortName ?? teamId}`,
    venue: venue ? venueNameOn(venue, game.date) : game.venueName,
  };
}

/** A new Attending plan for a season game, with the defaults as its seat and cost. */
export function seasonPlanFrom(ticket: SeasonTicket, game: TeamGame, level: StubVisibility): Plan {
  const place = placeOf(ticket.teamId, game);
  const seats = normalizeSeats(ticket.seats);
  const cost = seasonDefaultCost(ticket);
  return {
    id: `plan-${place.eventId}`,
    ...place,
    ...(seats ? { seats } : {}),
    ...(cost ? { cost } : {}),
    visibility: level,
    season: { teamId: ticket.teamId, gameId: game.id },
  };
}

/** The same plan moved to where the schedule now puts its game (a new date, so a new id), its edits kept. */
function movePlan(plan: Plan, teamId: string, game: TeamGame): Plan {
  const place = placeOf(teamId, game);
  const { gone: _gone, ...season } = plan.season ?? { teamId, gameId: game.id };
  return { ...plan, ...place, id: `plan-${place.eventId}`, season: { ...season, teamId, gameId: game.id } };
}

/**
 * Bring a team's season plans in line with its schedule as it stands today: a wanted game with no plan gets one; a
 * plan whose game moved follows it; a plan she already had on the same event (made by hand before the switch) is
 * adopted and keeps her own seat and cost as an edit; a game the schedule has dropped is flagged `gone`; a plan on
 * a game that is no longer in the set (removed, or unpicked on a Partial plan) is taken out. Past plans are never
 * touched. Returns the same list when nothing changed.
 */
export function reconcileSeasonPlans(plans: readonly Plan[], ticket: SeasonTicket, games: readonly TeamGame[], today: string, level: StubVisibility): Plan[] {
  if (!ticket.on) return [...plans];
  const wanted = seasonGameSet(games, ticket).filter((game) => game.date >= today);
  const byGameId = new Map(games.map((game) => [game.id, game]));
  const next: Plan[] = [];
  const seenGames = new Set<string>();
  let changed = false;
  for (const plan of plans) {
    const mine = plan.season?.teamId === ticket.teamId;
    // A past plan is left alone, unless its game was moved to a later date before the plan settled: then it follows
    // the game, or the settling would stub the old day and the season would add the new one too (Codex, 11 (c) review).
    const movedAhead = mine && plan.date < today && (() => {
      const g = byGameId.get(plan.season!.gameId);
      return Boolean(g && g.date >= today && seasonPlanEventId(g) !== plan.eventId);
    })();
    if (!mine || (plan.date < today && !movedAhead)) {
      next.push(plan);
      continue;
    }
    const game = byGameId.get(plan.season!.gameId);
    if (!game) {
      // Not on the schedule any more: flagged, kept, hers to remove.
      if (!plan.season!.gone) {
        next.push({ ...plan, season: { ...plan.season!, gone: true } });
        changed = true;
      } else next.push(plan);
      seenGames.add(plan.season!.gameId);
      continue;
    }
    if (!wanted.some((g) => g.id === game.id)) {
      // Removed, unpicked, or no longer a season home game: out of the plans.
      changed = true;
      continue;
    }
    seenGames.add(game.id);
    const expectedId = seasonPlanEventId(game);
    if (plan.eventId !== expectedId || plan.date !== game.date || plan.season!.gone) {
      next.push(movePlan(plan, ticket.teamId, game));
      changed = true;
    } else next.push(plan);
  }
  // A game that moved onto a day she had already planned by hand: one plan, the season's, keeping her own seat and cost
  // as this game's edit when the season plan had none (Codex, steps 9–10 review: two plans with one id otherwise).
  for (let i = next.length - 1; i >= 0; i--) {
    const plan = next[i];
    if (plan.season?.teamId !== ticket.teamId) continue;
    const twin = next.findIndex((other, j) => j !== i && other.eventId === plan.eventId && !other.season);
    if (twin < 0) continue;
    const own = next[twin];
    // Her seat and cost come along only as the kept answer allows them (Codex, 11 (c) review).
    const seat = !plan.watch && !plan.interested ? own.seats : undefined;
    const cost = !plan.interested ? own.cost : undefined;
    const merged: Plan = !plan.season.edited && (seat || cost) ? { ...plan, ...(seat ? { seats: seat } : {}), ...(cost ? { cost } : {}), season: { ...plan.season, edited: true } } : plan;
    next[i] = merged;
    next.splice(twin, 1);
    changed = true;
    if (twin < i) i--;
  }
  for (const game of wanted) {
    if (seenGames.has(game.id)) continue;
    const eventId = seasonPlanEventId(game);
    const at = next.findIndex((plan) => plan.eventId === eventId);
    if (at >= 0) {
      // Her own plan on this game from before: it joins the season; a seat or cost she typed counts as this game's edit.
      next[at] = adoptPlan(next[at], ticket, game);
      changed = true;
      continue;
    }
    next.push(seasonPlanFrom(ticket, game, level));
    changed = true;
  }
  return changed ? next : [...plans];
}

/** Her own plan on a season game joins the season; a seat or cost she typed counts as this game's edit. */
export function adoptPlan(own: Plan, ticket: SeasonTicket, game: TeamGame): Plan {
  const joined: Plan = { ...own, season: { teamId: ticket.teamId, gameId: game.id, ...(own.seats || own.cost ? { edited: true } : {}) } };
  return withDefaults(joined, ticket, { seats: Boolean(own.seats), cost: Boolean(own.cost) });
}

/** The defaults applied again to a season plan (a default changed; "Apply to N unedited" or "Apply to all upcoming"). */
export function applySeasonDefaults(plan: Plan, ticket: SeasonTicket): Plan {
  const { edited: _e, ...season } = plan.season ?? { teamId: ticket.teamId, gameId: '' };
  return withDefaults({ ...plan, season }, ticket);
}

/** A season plan's seat or cost set for this game alone: marked edited, so a default change leaves it be. */
export function editSeasonPlan(plan: Plan, patch: { seats?: Plan['seats']; cost?: Plan['cost'] }): Plan {
  const seats = 'seats' in patch ? normalizeSeats(patch.seats) : plan.seats;
  const cost = 'cost' in patch ? normalizeCost(patch.cost) : plan.cost;
  const { seats: _s, cost: _c, ...rest } = plan;
  return { ...rest, ...(seats ? { seats } : {}), ...(cost ? { cost } : {}), season: { ...(plan.season ?? { teamId: '', gameId: '' }), edited: true } };
}

/** The seat as a row shows it: the section alone ("Sec 48"), the place word for a seatless spot, else the whole line. */
export function seatShort(seats: Seats | undefined): string {
  const s = normalizeSeats(seats);
  if (!s) return '';
  if (s.spot || !s.section) return seatsLine(s);
  return /^\d+[A-Za-z]?$/.test(s.section) ? `Sec ${s.section}` : s.section;
}

/** The season's word for a team page: "2027" from the games' dates, "2026–27" when the season crosses the new year. */
export function seasonLabel(games: readonly TeamGame[]): string {
  const years = [...new Set(games.map((game) => game.date.slice(0, 4)))].sort();
  if (years.length === 0) return '';
  return years.length === 1 ? years[0] : `${years[0]}–${years[years.length - 1].slice(2)}`;
}
