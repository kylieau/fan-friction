// Watching Season (build 7.2; Kylie, Nov 4, 2026, Locked): a sibling of Season Tickets. One switch per team adds every
// game of the season, home and away, as a Watching plan with a default spot ("Home" or a place she named), the whole
// season at once, past the catalog window. Games she has tickets for, or any plan of her own, stay as they are:
// tickets win. Postseason games arrive on their own once the schedule lists them. The pure rules live here; the
// personal log wraps them in its save (personalLog.ts), and the schedule hook runs the reconcile on every load.
//
// The marker is `plan.watchSeason`, never `plan.season` (the tickets' own), so the tickets reconcile, which keeps
// only home games in its set, never takes a watch plan on an away game for a ticket plan to drop.

import { TEAMS } from './teams';
import { eventFromGame } from './gameStub';
import { seasonPlanEventId } from './seasonTickets';
import { listTitle } from '../lib/eventTitle';
import { venueNameOn, VENUES } from './venues';
import type { Plan, StubVisibility, TeamGame, WatchingSeason } from './types';

export const HOME_SPOT = 'Home';

/** The games the switch covers: the season's games, home and away, playoffs included, preseason left out (builder's call: a spring-training game is not the season). */
export function watchSeasonGames(games: readonly TeamGame[]): TeamGame[] {
  return games.filter((game) => !game.preseason);
}

/** The games in her watching season: every season game less the ones she took out. */
export function watchGameSet(games: readonly TeamGame[], season: WatchingSeason): TeamGame[] {
  return watchSeasonGames(games).filter((game) => !(game.id in season.removed));
}

/** The spot a game takes: its own when she changed it, else the season's default. */
export function watchSpotFor(season: WatchingSeason, gameId: string): string {
  return season.changed[gameId] ?? season.place;
}

/** What a game's plan shows and where it is: the event page's own words when the building is on file, else the schedule's. */
function placeOf(teamId: string, game: TeamGame): Pick<Plan, 'date' | 'metroId' | 'eventId' | 'title' | 'venue'> {
  const event = eventFromGame({ teamId, game });
  const team = TEAMS[teamId];
  const us = team?.shortName ?? teamId;
  const venue = event?.place.type === 'venue' ? VENUES[event.place.venueId] : undefined;
  return {
    date: game.date,
    metroId: event?.metroId ?? team?.metroId ?? 'la',
    eventId: seasonPlanEventId(game),
    title: event ? listTitle(event) : game.neutral ? `${us} vs. ${game.opponent}` : game.home ? `${game.opponent} at ${us}` : `${us} at ${game.opponent}`,
    venue: venue ? venueNameOn(venue, game.date) : game.venueName,
  };
}

/**
 * A new Watching plan for a season game at its spot. The place is written on the plan itself, never through the
 * Stub it sheet's share call, so a season of games makes no network writes (the sheet still shares one game's place
 * when she edits it there).
 */
export function watchPlanFrom(season: WatchingSeason, game: TeamGame, level: StubVisibility): Plan {
  const place = placeOf(season.teamId, game);
  const spot = watchSpotFor(season, game.id);
  return {
    id: `plan-${place.eventId}`,
    ...place,
    watch: true,
    watchedPlace: spot,
    watchShare: level === 'private' ? 'private' : 'friends',
    visibility: level,
    watchSeason: { teamId: season.teamId, gameId: game.id },
  };
}

/** The same plan moved to where the schedule now puts its game (a new date, so a new id), its answer and spot kept. */
function movePlan(plan: Plan, teamId: string, game: TeamGame): Plan {
  const place = placeOf(teamId, game);
  const { gone: _gone, ...marker } = plan.watchSeason ?? { teamId, gameId: game.id };
  return { ...plan, ...place, id: `plan-${place.eventId}`, watchSeason: { ...marker, teamId, gameId: game.id } };
}

/**
 * Bring a team's watching season in line with its schedule as it stands today: a wanted game with no plan at all gets
 * a Watching plan; a game with any plan of hers (a ticket's Attending, a hand-made answer) is left exactly as it is;
 * a plan whose game moved follows it; a game the schedule has dropped is flagged `gone`; a plan on a game she took
 * out leaves. An unsettled past plan stays (to settle). An empty schedule (a failed read) changes nothing. Returns the
 * same list when nothing changed.
 */
export function reconcileWatchPlans(plans: readonly Plan[], season: WatchingSeason, games: readonly TeamGame[], today: string, level: StubVisibility): Plan[] {
  if (!season.on || games.length === 0) return [...plans];
  const eligible = watchGameSet(games, season);
  const wanted = eligible.filter((game) => game.date >= today);
  const byGameId = new Map(games.map((game) => [game.id, game]));
  const next: Plan[] = [];
  const seen = new Set<string>();
  let changed = false;
  // Events her other plans already hold: a moved game landing on one gives way (her answer wins; Codex, group 7 review).
  const taken = new Set(plans.filter((plan) => plan.watchSeason?.teamId !== season.teamId).map((plan) => plan.eventId));
  for (const plan of plans) {
    if (plan.watchSeason?.teamId !== season.teamId) {
      next.push(plan);
      continue;
    }
    const game = byGameId.get(plan.watchSeason.gameId);
    if (!game) {
      if (!plan.watchSeason.gone) {
        next.push({ ...plan, watchSeason: { ...plan.watchSeason, gone: true } });
        changed = true;
      } else next.push(plan);
      continue;
    }
    const past = plan.date < today;
    if (!past && !eligible.some((g) => g.id === game.id)) {
      changed = true;
      continue;
    }
    if (game.date >= today) seen.add(game.id);
    if (plan.eventId !== seasonPlanEventId(game) || plan.date !== game.date) {
      if (!taken.has(seasonPlanEventId(game))) next.push(movePlan(plan, season.teamId, game));
      changed = true;
    } else if (plan.watchSeason.gone) {
      const { gone: _gone, ...marker } = plan.watchSeason;
      next.push({ ...plan, watchSeason: marker });
      changed = true;
    } else next.push(plan);
  }
  const planned = new Set(next.map((plan) => plan.eventId));
  for (const game of wanted) {
    if (seen.has(game.id)) continue;
    // Tickets win, and so does any answer of her own: a game she already planned is never touched.
    if (planned.has(seasonPlanEventId(game))) continue;
    next.push(watchPlanFrom(season, game, level));
    changed = true;
  }
  return changed ? next : [...plans];
}

/** The spot on a watch plan set for this game alone, or back to the default. */
export function spotWatchPlan(plan: Plan, spot: string): Plan {
  return { ...plan, watchedPlace: spot };
}

/** How the setup sheet counts the season: games ahead, the ticketed ones, the other plans of hers, and what it would add. */
export function watchSetupCounts(games: readonly TeamGame[], plans: readonly Plan[], season: Pick<WatchingSeason, 'removed'> | undefined, today: string): { total: number; ticketed: number; planned: number; toAdd: number } {
  const ahead = watchSeasonGames(games).filter((game) => game.date >= today && !(game.id in (season?.removed ?? {})));
  const byEvent = new Map(plans.map((plan) => [plan.eventId, plan]));
  let ticketed = 0;
  let planned = 0;
  for (const game of ahead) {
    const plan = byEvent.get(seasonPlanEventId(game));
    if (!plan) continue;
    if (plan.season) ticketed++;
    else planned++;
  }
  return { total: ahead.length, ticketed, planned, toAdd: ahead.length - ticketed - planned };
}
