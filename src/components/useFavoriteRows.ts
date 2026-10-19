import { useEffect, useMemo, useState } from 'react';
import type { Metro } from '../config/metros';
import { eventMatches, getEventsBetween, getTeamSchedule, metrosWithEvents, scoreMark, todayIn, TEAMS, VENUES, venueNameOn, type CrowdEvent, type Favorite, type GameLink, type TeamGame } from '../data';
import { addDays, clockTime } from '../lib/dates';
import { listTitle, teamRelativeTitle } from '../lib/eventTitle';

/** One row of a favorites schedule: a favorite's date, from its own schedule (a team) or the listings (everyone else). */
export interface ScheduleRow {
  key: string;
  fav: Favorite;
  date: string;
  start: string | null;
  /** The row's title from the Fave's side (Kylie, Oct 19): "vs. Wisconsin", "at Michigan St", "W 17–15 at Oregon"; a show's name. */
  title: string;
  /** "American Family Field · 5:00 pm · NLCS G2". */
  facts: string;
  /** The listed event behind it, when the building is covered. */
  event?: CrowdEvent;
  metroId?: string;
  /** A game with no listed event, so no read: its page is built from the game (Kylie, Oct 15). */
  away: boolean;
  /**
   * The grey tag in the read's place: "Away" for a game at another team's building (Kylie, Oct 18 and 19), "No read"
   * for a home or neutral game the app holds no event for, a building it cannot place (gap review, judgment call 1;
   * Kylie, Oct 19, 2026: the old "Away" there was untrue).
   */
  noRead?: 'Away' | 'No read';
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
          // A game with a score is past the moment it ends, like the team page's Results (found Oct 19, 2026: a game
          // that finished today vanished from the timeline until midnight).
          const past = game.date < today || Boolean(game.score);
          if (game.date < floor || game.date > horizon) continue;
          const event = game.eventId ? upcoming.find((e) => e.id === game.eventId) : undefined;
          const key = event?.id ?? `${fav.teamId}-${game.id}`;
          if (seen.has(key)) continue;
          seen.add(key);
          const venue = event ? venueOf(event) : game.venueName;
          const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
          const sport = team?.sport;
          // The row reads from the Fave's side (Kylie, Oct 19): "vs. Wisconsin", "at Michigan St"; a past game writes
          // its result in first ("W 17–15 at Oregon"), the team page's way.
          const mark = past ? scoreMark(game) : undefined;
          const side = teamRelativeTitle(game, sport);
          out.push({
            key,
            fav,
            date: game.date,
            start: game.start,
            title: mark ? `${mark} ${side}` : side,
            facts: [game.start && !mark ? clockTime(game.start) : null, venue].filter(Boolean).join(' · '),
            event,
            metroId: event?.metroId ?? game.eventMetroId,
            away: !game.eventId,
            ...(game.eventId ? {} : { noRead: game.home || game.neutral ? ('No read' as const) : ('Away' as const) }),
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
          // An artist's row names the show, not the artist (the line above already does): "Reunion Tour" from
          // "Phoebe Bridgers: Reunion Tour"; the headliner's name alone when the seller wrote nothing more.
          title: fav.kind === 'artist' ? showName(listTitle(event), fav.label) : listTitle(event),
          facts: [event.date < today ? null : event.start ? clockTime(event.start) : null, venueOf(event)].filter(Boolean).join(' · '),
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

/** The part of a listing's name after the artist's own ("Phoebe Bridgers: Reunion Tour" → "Reunion Tour"); the whole name when nothing else is there. */
export function showName(title: string, artist: string): string {
  const rest = title.toLowerCase().startsWith(artist.toLowerCase()) ? title.slice(artist.length).replace(/^[\s:·\-–—]+/, '').trim() : '';
  // A support act is not the show's name ("Phoebe Bridgers w/ Alex G"): the whole title stays.
  if (!rest || /^(w\/|with|and|&|feat\.?|featuring|\+)\b/i.test(rest)) return title;
  return rest;
}
