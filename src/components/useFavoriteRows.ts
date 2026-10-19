import { useEffect, useMemo, useState } from 'react';
import type { Metro } from '../config/metros';
import { eventMatches, getEventsBetween, getTeamSchedule, metrosWithEvents, scoreMark, todayIn, TEAMS, VENUES, venueNameOn, type CrowdEvent, type Favorite, type GameLink, type TeamGame } from '../data';
import { isCollegeTeam } from '../data/teams';
import { addDays, clockTime } from '../lib/dates';
import { listTitle, scheduleGameTitle, teamRelativeTitle } from '../lib/eventTitle';

/** One row of a favorites schedule: a favorite's date, from its own schedule (a team) or the listings (everyone else). */
export interface ScheduleRow {
  key: string;
  fav: Favorite;
  date: string;
  start: string | null;
  /** "Dodgers at Brewers", an artist's name, or the listed event's name. */
  title: string;
  /** "American Family Field · 5:00 pm · NLCS G2". */
  facts: string;
  /** The listed event behind it, when the building is covered. */
  event?: CrowdEvent;
  metroId?: string;
  /** A game at a building the app does not cover: an Away tag; its page is built from the game (Kylie, Oct 15). */
  away: boolean;
  /** The team's schedule game behind the row, so a game with no listed event still opens a page to stub it. */
  link?: GameLink;
}

/**
 * The dates of the teams, artists, venues and festivals you follow, soonest first, for the next `aheadDays`
 * (the Faves schedule in Settings, 14 days; the Following timeline, 60; build 6, item 7). Teams come from their
 * own schedule, home and away; everyone else from the listings in every covered city.
 */
export function useFavoriteRows(favorites: readonly Favorite[], home: Metro, aheadDays: number, backDays = 0): { rows: ScheduleRow[]; today: string; horizon: string } {
  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  const [schedules, setSchedules] = useState<Map<string, TeamGame[] | null>>(new Map());
  const today = todayIn(home);
  const horizon = addDays(today, aheadDays);
  // The past the rows reach back into (the Faves timeline, 60 days; Kylie, Oct 17): results for teams, dates for the rest.
  const floor = addDays(today, -backDays);

  // Listings everywhere for the span: a favorite's date can be in any covered city.
  useEffect(() => {
    let current = true;
    // From the day before the floor, since the listings query starts after its first date.
    Promise.all(metrosWithEvents().map((metro) => getEventsBetween(metro.id, addDays(floor, -1), horizon))).then((lists) => {
      if (!current) return;
      setUpcoming(lists.flat().sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))));
    });
    return () => {
      current = false;
    };
  }, [floor, horizon]);

  // Each followed team's own schedule, home and away.
  const teamIds = favorites.map((fav) => fav.teamId).filter((id): id is string => Boolean(id)).join(',');
  useEffect(() => {
    let current = true;
    const ids = teamIds ? teamIds.split(',') : [];
    Promise.all(ids.map(async (id) => [id, await getTeamSchedule(id)] as const)).then((pairs) => current && setSchedules(new Map(pairs)));
    return () => {
      current = false;
    };
  }, [teamIds]);

  const rows = useMemo<ScheduleRow[]>(() => {
    const out: ScheduleRow[] = [];
    const seen = new Set<string>();
    for (const fav of favorites) {
      const games = fav.teamId ? (schedules.get(fav.teamId) ?? null) : null;
      if (games) {
        for (const game of games) {
          const past = game.date < today;
          if (game.date < floor || game.date > horizon || (!past && game.score)) continue;
          const event = game.eventId ? upcoming.find((e) => e.id === game.eventId) : undefined;
          const key = event?.id ?? `${fav.teamId}-${game.id}`;
          if (seen.has(key)) continue;
          seen.add(key);
          const venue = event ? venueOf(event) : game.venueName;
          const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
          const sport = team?.sport;
          // A result reads the team page's way: the score first, then the game from the team's side ("W 17–15 at Oregon").
          const mark = past ? scoreMark(game) : undefined;
          // The team line above the title already names the program, so a college title says the school alone
          // ("Lehigh at UCLA", not "Lehigh at UCLA WBB"; Kylie, Oct 19).
          const us = team && isCollegeTeam(team) ? team.abbr || fav.label : fav.label;
          out.push({
            key,
            fav,
            date: game.date,
            start: game.start,
            title: mark ? `${mark} ${teamRelativeTitle(game, sport)}` : scheduleGameTitle(us, game, sport),
            facts: [venue, game.start && !mark ? clockTime(game.start) : null].filter(Boolean).join(' · '),
            event,
            metroId: event?.metroId ?? game.eventMetroId,
            away: !game.eventId,
            ...(fav.teamId ? { link: { teamId: fav.teamId, game } } : {}),
          });
        }
        continue;
      }
      for (const event of upcoming) {
        if (!eventMatches(event, fav) || seen.has(event.id)) continue;
        seen.add(event.id);
        out.push({
          key: event.id,
          fav,
          date: event.date,
          start: event.start ?? null,
          title: fav.kind === 'artist' ? fav.label : listTitle(event),
          facts: [venueOf(event), event.start ? clockTime(event.start) : null].filter(Boolean).join(' · '),
          event,
          metroId: event.metroId,
          away: false,
        });
      }
    }
    return out.sort((a, b) => (a.date + (a.start ?? '99')).localeCompare(b.date + (b.start ?? '99')));
  }, [favorites, schedules, upcoming, today, horizon, floor]);

  return { rows, today, horizon };
}

export function venueOf(event: CrowdEvent): string {
  if (event.place.type !== 'venue') return event.place.name;
  const venue = VENUES[event.place.venueId];
  return venue ? venueNameOn(venue, event.date) : event.place.venueId;
}
