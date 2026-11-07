import { Link } from 'react-router-dom';
import { METROS } from '../config/metros';
import { eventType, favoriteDisplayName, isCollegeTeam, isFurtherOutRoom, isOutsideGamePlan, schoolWord, seatShort, TEAMS, withoutProgramCode, type CrowdEvent, type Favorite, type Plan } from '../data';
import { eventMatches } from '../data/favorites';
import { listTitle, sportLabelOf, splitTitleLabel } from '../lib/eventTitle';
import { clockTime, shortLocalDate } from '../lib/dates';
import { datePath, entryPath, eventPath } from '../lib/view';
import { favPath } from '../screens/FavoritesScreen';
import { favoriteName } from './FavoriteBadge';
import { readPath } from './FollowRow';
import { BookmarkIcon, TicketIcon, TvIcon } from './Icons';
import { ReadTile } from './ReadTile';
import { DateBox } from './StubRows';
import { TitleText } from './TitleText';
import { TypeIcon } from './TypeIcon';
import { showName, venueOf } from './useFavoriteRows';

export type PlanKind = 'attending' | 'watching' | 'interested';
export const PLAN_WORDS: Record<PlanKind, string> = { attending: 'Attending', watching: 'Watching', interested: 'Interested' };

export function planKind(plan: Plan): PlanKind {
  return plan.interested ? 'interested' : plan.watch ? 'watching' : 'attending';
}

/** The plan's icon: ticket for Attending, TV for Watching, bookmark for Interested (the Stub it sheet's own, as outlines: A7's lean). */
export function planIcon(kind: PlanKind) {
  return kind === 'attending' ? <TicketIcon size={13} /> : kind === 'watching' ? <TvIcon /> : <BookmarkIcon size={13} />;
}

/**
 * The favorite a plan's game belongs to, by id only (A4, Kylie, Oct 30: the favorite that matches the game itself,
 * never another program from the same school; never a name match): a team on either side, else the venue.
 */
export function planFavorite(event: CrowdEvent | undefined, favorites: readonly Favorite[]): Favorite | undefined {
  if (!event) return undefined;
  const teams = event.teams;
  const byTeam = teams ? favorites.find((f) => f.teamId && (f.teamId === teams.home || f.teamId === teams.away)) : undefined;
  if (byTeam) return byTeam;
  const venueId = event.place.type === 'venue' ? event.place.venueId : undefined;
  // A venue by id; an artist or festival by the favorites' own match (an artist record's names, a festival's title).
  return (venueId ? favorites.find((f) => f.venueId === venueId) : undefined) ?? favorites.find((f) => (f.kind === 'artist' || f.kind === 'festival') && eventMatches(event, f));
}

/**
 * The row's title (R5a, locked with the final): a fave team's game from the fave's side, "at Opponent" away or
 * "vs Opponent" at home or at a neutral site, with no period after vs; an artist fave's show by its own name; else
 * the event's list title without its label. The plan's stored title when the event is not loaded or the opponent
 * is not on file.
 */
export function planTitle(plan: Plan, event: CrowdEvent | undefined, fave: Favorite | undefined): string {
  if (fave?.teamId && event?.teams) {
    const us = fave.teamId;
    const home = event.teams.home === us;
    const other = event.teams.home === us ? event.teams.away : event.teams.home;
    const opponent = opponentName(other, event, fave);
    if (opponent) return event.neutralSite || home ? `vs ${opponent}` : `at ${opponent}`;
  }
  if (fave?.kind === 'artist' && event) return showName(splitTitleLabel(listTitle(event)).name, fave.label);
  return splitTitleLabel(event ? listTitle(event) : plan.title).name;
}

/**
 * The opponent's name for a fave's row: the team on file (its school word for a college program, so never "USC WBB";
 * the club's short name otherwise), else the half of the listing's own title that is not the fave (a school feed's
 * visitor with no record, "North Florida"), with any program code trimmed. Null when neither half of the title is
 * the fave, so a title the parse cannot read keeps the plan's stored one (Codex, group 5 review).
 */
function opponentName(otherId: string, event: CrowdEvent, fave: Favorite): string | null {
  const team = TEAMS[otherId];
  if (team) return isCollegeTeam(team) ? schoolWord(team) : team.shortName;
  const name = splitTitleLabel(listTitle(event)).name;
  const halves = name.split(/\s+(?:at|vs\.?)\s+/);
  if (halves.length !== 2) return null;
  const us = TEAMS[fave.teamId ?? ''];
  const ours = new Set([fave.label, favoriteDisplayName(fave), us?.shortName, us?.name, us ? schoolWord(us) : undefined, ...(us?.aliases ?? [])].filter((x): x is string => Boolean(x)).map((x) => x.toLowerCase()));
  const isUs = (half: string) => {
    const plain = withoutProgramCode(half).toLowerCase();
    return ours.has(plain) || ours.has(half.toLowerCase()) || (us && isCollegeTeam(us) && plain.startsWith(schoolWord(us).toLowerCase()));
  };
  const [a, b] = halves;
  if (isUs(a) && !isUs(b)) return withoutProgramCode(b);
  if (isUs(b) && !isUs(a)) return withoutProgramCode(a);
  return null;
}

/** "Men's Soccer", "Concert", "Hockey": the category a non-fave row's header carries (the Activity row's sport words). */
function categoryOf(event: CrowdEvent | undefined): string {
  if (!event) return '';
  return sportLabelOf(event)?.words ?? eventType(event).label;
}

/** A college or school game, whose detail line carries the sport when the header does not already say it (r5, column C). */
function amateurSport(event: CrowdEvent | undefined): string | null {
  if (!event || event.audience.domain !== 'sports') return null;
  const level = event.audience.level;
  const sides = event.teams ? [TEAMS[event.teams.home], TEAMS[event.teams.away]].filter((t) => t !== undefined) : [];
  const amateur = level === 'college' || level === 'school' || sides.some((t) => /college|u sports|ncaa|naia|high school|\bschool\b/i.test(t.league));
  return amateur ? (sportLabelOf(event)?.words ?? null) : null;
}

/**
 * A plan row on Upcoming (build 7.2, R5a, FINAL r3: `docs/build-7-2/mockups/upcoming-plan-rows/r3-final/`, the
 * detail line in column C of `r5-detail/`; Kylie, Nov 4). The Activity row's skeleton and classes: a date tile; a
 * header line with the status icon (ticket, TV, bookmark) and either the fave's name in blue (a link to its page)
 * or the category in grey; the title with its type icon, from the fave's side for a fave's game; the detail line
 * "5:00 pm · Rose Bowl · Football" (time, then the venue when Attending or the watch place when Watching, then the
 * sport for a college game the header does not already name, then a season seat); the verdict tile at the right
 * edge with no chevron. No status word on screen (the icon carries it; the spoken name keeps the word). About 69pt
 * (A5). The words open the event.
 */
export function PlanRow({ plan, event, start, favorites, rating, home }: { plan: Plan; event?: CrowdEvent; start: string | null; favorites: readonly Favorite[]; rating: number | null; home: string }) {
  const kind = planKind(plan);
  // A Watching Season game still Watching is a quiet row (build 7.2, mock 04, option 1 FINAL); one she turned Attending keeps the full row.
  if (plan.watchSeason && kind === 'watching') return <QuietWatchRow plan={plan} start={start} />;
  const fave = planFavorite(event, favorites);
  const to = plan.manual && !plan.eventId ? entryPath(plan.id) : plan.eventId ? eventPath(plan.eventId, plan.metroId) : datePath(plan.date, plan.metroId);
  const noRead = isOutsideGamePlan(plan) || isFurtherOutRoom(plan.metroId, plan.venue);
  const title = planTitle(plan, event, fave);
  const category = fave ? '' : categoryOf(event);
  const header = fave ? favoriteDisplayName(fave) : category;
  // Column C: time, place, sport, seat.
  const place = kind === 'attending' ? (plan.venue ?? (event ? venueOf(event) : null)) : kind === 'watching' ? (plan.watchedPlace ?? null) : null;
  const sport = amateurSport(event);
  const sportTag = sport && !header.toLowerCase().includes(sport.toLowerCase()) ? sport : null;
  const detail = [start ? clockTime(start) : null, place, sportTag, plan.season ? seatShort(plan.seats) || null : null].filter(Boolean).join(' · ');
  const cityCode = plan.metroId !== home ? METROS[plan.metroId]?.code : null;
  const readTo = noRead ? null : readPath(plan.date, plan.metroId, plan.eventId);
  const typeKey = event ? eventType(event).key : null;
  const spoken = `${PLAN_WORDS[kind]}${header ? `, ${header}` : ''}, ${title}, ${shortLocalDate(plan.date)}${detail ? `, ${detail}` : ''}`;
  const seasonTag = plan.season ? (plan.season.gone ? 'Not on the Schedule' : 'Season') : null;
  return (
    <div className="activity-row plan-row">
      <Link to={to} className="activity-row-link" aria-label={spoken} />
      <DateBox when={{ sort: plan.date, label: '', precision: 'day' }} />
      <span className="activity-main">
        <span className={`activity-head plan-head${fave ? ' is-fave' : ''}`}>
          {planIcon(kind)}
          {fave ? (
            <Link to={favPath(fave)} className="plan-head-fave" aria-label={favoriteName(fave)}>
              <span className="plan-head-fave-text">{header}</span>
            </Link>
          ) : (
            header && <span className="plan-head-category">{header}</span>
          )}
          {seasonTag && <span className="follow-lead-tag">{seasonTag}</span>}
        </span>
        <span className="activity-title">
          <TypeIcon typeKey={typeKey} size={18} />
          <span className="activity-title-text">
            <TitleText text={title} />
          </span>
        </span>
        {detail && (
          <span className="activity-sport">
            <span className="activity-sport-text">{detail}</span>
          </span>
        )}
      </span>
      {noRead && isOutsideGamePlan(plan) ? (
        <span className="follow-read plan-read">
          <span className="away-tag">Away</span>
        </span>
      ) : readTo ? (
        <Link to={readTo} className="follow-read plan-read" aria-label={`The verdict for ${shortLocalDate(plan.date)}${cityCode ? ` in ${cityCode}` : ''}`}>
          {cityCode && <span className="fav-sched-code">{cityCode}</span>}
          <ReadTile rating={rating} />
        </Link>
      ) : (
        <span className="follow-read plan-read">
          <ReadTile rating={rating} />
        </span>
      )}
    </div>
  );
}

/**
 * A Watching Season game on Upcoming (build 7.2, mock 04, FINAL option 1): one 44pt line, the date as text, the TV
 * icon, the team in blue (a link to its page) and the opponent from its side, then the time and the spot, Home in
 * grey and a place in bold ink. No tile, no verdict. The row opens the event; nothing is hidden.
 */
function QuietWatchRow({ plan, start }: { plan: Plan; start: string | null }) {
  const team = TEAMS[plan.watchSeason?.teamId ?? ''];
  const to = plan.eventId ? eventPath(plan.eventId, plan.metroId) : datePath(plan.date, plan.metroId);
  const spot = plan.watchedPlace ?? 'Home';
  const atHome = /^home$/i.test(spot);
  const day = shortLocalDate(plan.date).replace(/^(\w+), \w+ (\d+)$/, '$1 $2');
  const side = team ? sideOf(plan.title, team.shortName, team.name, team.aliases ?? []) : null;
  const gone = Boolean(plan.watchSeason?.gone);
  const spoken = `Watching, ${team ? `${team.shortName} ${side ?? plan.title}` : plan.title}, ${shortLocalDate(plan.date)}${start ? `, ${clockTime(start)}` : ''}, ${atHome ? 'at home' : `at ${spot}`}${gone ? ', not on the schedule' : ''}`;
  return (
    <div className="activity-row plan-row quiet-row">
      <Link to={to} className="activity-row-link" aria-label={spoken} />
      <span className="quiet-date">{day}</span>
      <span className="quiet-icon">
        <TvIcon />
      </span>
      <span className="quiet-title">
        {team && side ? (
          <>
            <Link to={favPath({ kind: 'team', id: team.id })} className="quiet-fave" aria-label={team.name}>
              {team.shortName}
            </Link>{' '}
            {side}
          </>
        ) : (
          <TitleText text={splitTitleLabel(plan.title).name} />
        )}
        {gone && <span className="follow-lead-tag">Not on the Schedule</span>}
      </span>
      <span className="quiet-spot" aria-hidden>
        {start && <span className="quiet-time">{clockTime(start)} · </span>}
        <span className={atHome ? 'quiet-home' : 'quiet-place'}>{spot}</span>
      </span>
    </div>
  );
}

/** "vs Giants" or "at Giants" from a stored title ("Giants at Dodgers", "Dodgers at Giants", "Dodgers vs. Giants"); null when the team is not in it. */
function sideOf(title: string, shortName: string, name: string, aliases: readonly string[]): string | null {
  const plain = splitTitleLabel(title).name;
  const parts = plain.split(/\s+(at|vs\.?)\s+/);
  if (parts.length !== 3) return null;
  // Both sides lose their program code ("UCLA MBB" and "UCLA" are one name; Codex, group 7 review).
  const ours = new Set([shortName, name, ...aliases].map((x) => withoutProgramCode(x).toLowerCase()));
  const [a, word, b] = parts;
  const isUs = (half: string) => ours.has(withoutProgramCode(half).toLowerCase());
  if (word.startsWith('vs')) return isUs(a) ? `vs ${withoutProgramCode(b)}` : isUs(b) ? `vs ${withoutProgramCode(a)}` : null;
  if (isUs(b)) return `vs ${withoutProgramCode(a)}`;
  if (isUs(a)) return `at ${withoutProgramCode(b)}`;
  return null;
}
