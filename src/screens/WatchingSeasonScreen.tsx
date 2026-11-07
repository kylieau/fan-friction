import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PinnedHead } from '../components/PinnedHead';
import { DateBox } from '../components/StubRows';
import { ListBand } from '../components/ListBand';
import { TitleText } from '../components/TitleText';
import { SeasonSheet } from '../components/SeasonTickets';
import { SpotPicker, WatchingSetupSheet } from '../components/WatchingSeason';
import { planIcon } from '../components/PlanRow';
import {
  getPersonalLog,
  getTeamSchedule,
  HOME_SPOT,
  ownWatchPlan,
  readdWatchingGame,
  removePlan,
  seasonLabel,
  seasonPlanEventId,
  setWatchingGameSpot,
  subscribePersonalLog,
  TEAMS,
  todayIn,
  watchingCounts,
  watchingSeasonOf,
  watchSeasonGames,
  type Plan,
  type Team,
  type TeamGame,
  type WatchingSeason,
} from '../data';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { teamRelativeTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { clockTime, shortLocalDate, timelineGroup } from '../lib/dates';
import { favPath } from './FavoritesScreen';

/**
 * Games & Spot (build 7.2, Watching Season; boards `docs/build-7-2/mockups/watching-season/07-games-and-spot.png`
 * and `08-game-sheet.png`, drawn Nov 6 and approved by Kylie on Nov 7, 2026, deferring to the lean): from the team
 * page's foot row. The season's default spot with Change (the setup sheet in its spot mode), then every season game
 * ahead by month with its spot: a place in bold ink, Home plain, a Changed chip on a game whose spot she set herself.
 * A game with a ticket or any other plan of hers shows that answer and opens the event page (tickets win). A removed
 * game stays listed, greyed, with Re-add; a game the feed dropped keeps its plan, flagged, until she removes it.
 * A tap on a watch row opens This Game Only (08): Home or A Place for this game alone, Back to default on a changed
 * game, Save, and Remove this game (no reason asked, unlike a sold ticket).
 */
export function WatchingSeasonScreen() {
  const { id = '' } = useParams();
  const team = TEAMS[id];
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const season = watchingSeasonOf(id, log);
  // undefined while loading; null when no schedule could be read.
  const [schedule, setSchedule] = useState<TeamGame[] | null | undefined>(undefined);
  const [tries, setTries] = useState(0);
  useEffect(() => {
    let current = true;
    setSchedule(undefined);
    getTeamSchedule(id)
      .then((games) => current && setSchedule(games))
      .catch(() => current && setSchedule(null));
    return () => {
      current = false;
    };
  }, [id, tries]);
  const today = todayIn(METROS[team?.metroId ?? ''] ?? DEFAULT_METRO);
  const [changing, setChanging] = useState(false);
  const [gameOpen, setGameOpen] = useState<TeamGame | null>(null);

  const games = useMemo(() => (schedule ? watchSeasonGames(schedule) : []), [schedule]);
  const upcoming = useMemo(() => games.filter((game) => game.date >= today), [games, today]);
  const seasonStart = games.length > 0 ? (games.map((game) => game.date).sort()[0] ?? null) : null;
  const planByEvent = useMemo(() => new Map(log.plans.map((plan) => [plan.eventId, plan])), [log]);
  const counts = watchingCounts(id, seasonStart, log);
  // Watch plans whose game the schedule no longer lists: kept, flagged, listed here so she can remove them (board 07, 6).
  const gonePlans = useMemo(() => log.plans.filter((plan) => plan.watchSeason?.teamId === id && plan.watchSeason.gone).sort((a, b) => a.date.localeCompare(b.date)), [log, id]);

  if (!team || !season?.on) {
    return (
      <div className="screen page">
        <PinnedHead back={{ to: favPath({ kind: 'team', id }), label: team?.shortName ?? 'Back' }} title="Games & Spot" />
        <div className="card empty-card">
          <div className="card-title">Watching Season is off for this team.</div>
        </div>
      </div>
    );
  }

  const months: [string, TeamGame[]][] = [];
  for (const game of upcoming) {
    const group = timelineGroup({ sort: game.date, label: '', precision: 'day' });
    const last = months[months.length - 1];
    if (last && last[0] === group) last[1].push(game);
    else months.push([group, [game]]);
  }
  const planOf = (game: TeamGame) => planByEvent.get(seasonPlanEventId(game));
  const g = (n: number) => `${n} ${n === 1 ? 'game' : 'games'}`;
  const sub = `${team.name} · ${seasonLabel(games)} · ${g(counts.left)} left · ${counts.watched} watched`;
  const openPlan = gameOpen ? planOf(gameOpen) : undefined;
  const openOwn = gameOpen && openPlan ? ownWatchPlan(openPlan, id, gameOpen.id) && openPlan.watch : false;

  return (
    <div className="screen page season-page">
      <PinnedHead back={{ to: favPath({ kind: 'team', id }), label: team.shortName }} title="Games & Spot" />
      <p className="page-sub you-fine season-page-sub">{sub}</p>

      {/* The default spot row (07, 1): the season's spot; Change opens the built setup sheet in its spot mode. */}
      <div className="card settings-row watch-default-row">
        <span className="season-card-words">
          <span className="season-card-line">{season.place}</span>
          <span className="season-card-sub">Default spot · every game you haven't changed</span>
        </span>
        <button type="button" className="heading-link season-card-link link-button" onClick={() => setChanging(true)}>
          Change ›
        </button>
      </div>

      {schedule === undefined ? (
        <p className="you-fine">Loading the schedule…</p>
      ) : schedule === null ? (
        <div className="card empty-card">
          <div className="card-title">Couldn't load the schedule.</div>
          <button type="button" className="following-empty-link" onClick={() => setTries((n) => n + 1)}>
            Try again <span aria-hidden>›</span>
          </button>
        </div>
      ) : months.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">No games left this season.</div>
        </div>
      ) : (
        months.map(([group, list]) => (
          <section key={group} className="timeline-group season-month" aria-label={group}>
            <ListBand label={group} />
            <ul className="log-list season-list">
              {list.map((game) => (
                <li key={game.id}>
                  <GameRow team={team} game={game} plan={planOf(game)} season={season} onOpen={() => setGameOpen(game)} />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
      {gonePlans.length > 0 && (
        <section className="timeline-group season-month" aria-label="Not on the Schedule">
          <ListBand label="Not on the Schedule" />
          <ul className="log-list season-list">
            {gonePlans.map((plan) => (
              <li key={plan.id}>
                <div className="season-row off">
                  <DateBox when={{ sort: plan.date, label: '', precision: 'day' }} />
                  <span className="log-main">
                    <span className="log-title"><TitleText text={plan.title} /></span>
                    <span className="log-facts season-off-line">
                      <span className="season-chip">Not on the Schedule</span>
                      <span>Moved or cancelled</span>
                    </span>
                  </span>
                  <button type="button" className="season-readd" onClick={() => removePlan(plan.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {changing && schedule && <WatchingSetupSheet team={team} games={schedule} mode="spot" place={season.place} onClose={() => setChanging(false)} />}
      {gameOpen && openPlan && openOwn && <GameSpotSheet team={team} game={gameOpen} plan={openPlan} season={season} onClose={() => setGameOpen(null)} />}
    </div>
  );
}

/** "vs Islanders" / "at Bruins", as the board draws it (the plan rows' Nov 4 form, no period). */
function sideTitle(team: Team, game: TeamGame): string {
  return teamRelativeTitle(game, team.sport, team.id).replace(/^vs\. /, 'vs ');
}

/** One game's row (07, 2 to 5). */
function GameRow({ team, game, plan, season, onOpen }: { team: Team; game: TeamGame; plan: Plan | undefined; season: WatchingSeason; onOpen: () => void }) {
  const title = sideTitle(team, game);
  const when = { sort: game.date, label: '', precision: 'day' as const };
  const time = game.start ? clockTime(game.start) : null;
  const removed = game.id in season.removed;
  // Tickets win (07, 3): a ticket or any plan of hers that is not this season's own Watching plan (another followed
  // team's season on a shared game included) shows that answer and opens the event page.
  if (plan && !(ownWatchPlan(plan, team.id, game.id) && plan.watch)) {
    const kind = plan.watch ? 'watching' : plan.interested ? 'interested' : 'attending';
    const word = kind === 'watching' ? 'Watching' : kind === 'interested' ? 'Interested' : 'Attending';
    return (
      <Link to={plan.eventId ? eventPath(plan.eventId, plan.metroId) : favPath({ kind: 'team', id: team.id })} className="season-row watch-row" aria-label={`${title}, ${shortLocalDate(game.date)}${time ? `, ${time}` : ''}, ${word}. Opens the event.`}>
        <DateBox when={when} />
        <span className="log-main">
          <span className="log-title"><TitleText text={title} /></span>
          <span className="log-facts">{[time, plan.venue ?? game.venueName].filter(Boolean).join(' · ')}</span>
        </span>
        <span className="season-chip watch-answer">
          {planIcon(kind)} {word}
        </span>
      </Link>
    );
  }
  if (!plan) {
    return (
      <div className="season-row off">
        <DateBox when={when} />
        <span className="log-main">
          <span className="log-title"><TitleText text={title} /></span>
          <span className="log-facts">{[time, removed ? 'Removed' : 'Not in your plans'].filter(Boolean).join(' · ')}</span>
        </span>
        <button type="button" className="season-readd" onClick={() => readdWatchingGame(team.id, game)}>
          {removed ? 'Re-add' : 'Add'}
        </button>
      </div>
    );
  }
  const spot = plan.watchedPlace ?? season.place;
  const atHome = /^home$/i.test(spot);
  const changed = game.id in season.changed;
  return (
    <button type="button" className="season-row watch-row" onClick={onOpen} aria-label={`${title}, ${shortLocalDate(game.date)}${time ? `, ${time}` : ''}, ${atHome ? 'at home' : `at ${spot}`}${changed ? ', changed' : ''}. Change this game.`}>
      <DateBox when={when} />
      <span className="log-main">
        <span className="log-title"><TitleText text={title} /></span>
        <span className="log-facts">
          {time && <>{time} · </>}
          {atHome ? spot : <strong>{spot}</strong>}
        </span>
      </span>
      {changed && <span className="season-chip">Changed</span>}
      <span className="add-record-chev" aria-hidden>
        ›
      </span>
    </button>
  );
}

/** This Game Only (08): the setup sheet's two options for one game, Back to default on a changed game, Save, Remove. */
function GameSpotSheet({ team, game, plan, season, onClose }: { team: Team; game: TeamGame; plan: Plan; season: WatchingSeason; onClose: () => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const current = plan.watchedPlace ?? season.place;
  const isHome = /^home$/i.test(current);
  const [choice, setChoice] = useState<'home' | 'place'>(isHome ? 'home' : 'place');
  const [typed, setTyped] = useState(isHome ? '' : current);
  const changed = game.id in season.changed;
  const spot = choice === 'home' ? HOME_SPOT : typed.trim();
  const ready = choice === 'home' || spot.length > 0;
  const sub = [plan.title, shortLocalDate(game.date), game.start ? clockTime(game.start) : null, plan.venue ?? game.venueName].filter(Boolean).join(' · ');
  const save = () => {
    if (!ready) return;
    // Picking the season's own spot again is no change: the game follows the default from here (no Changed chip).
    setWatchingGameSpot(plan.id, spot.toLowerCase() === season.place.toLowerCase() ? null : spot);
    onClose();
  };
  return (
    <SeasonSheet title="This Game Only" sub={sub} label="This game only" onClose={onClose}>
      <div className="season-section">
        <div className="season-section-head watch-head">
          <h3 className="season-section-title">Where You'll Watch</h3>
          <span className="stub-where-optional">this game only</span>
        </div>
        <SpotPicker choice={choice} typed={typed} log={log} onChoice={setChoice} onTyped={setTyped} onEnter={save} />
      </div>
      {changed && (
        <button
          type="button"
          className="link-button season-reset"
          onClick={() => {
            setWatchingGameSpot(plan.id, null);
            onClose();
          }}
        >
          Back to default · {season.place}
        </button>
      )}
      <button type="button" className="gold-button stub-done" disabled={!ready} onClick={save}>
        Save
      </button>
      <button
        type="button"
        className="season-outline-button"
        onClick={() => {
          removePlan(plan.id);
          onClose();
        }}
      >
        Remove this game
      </button>
      <p className="you-fine">{`${team.shortName} games you remove stay listed, greyed, with Re-add. The season never adds one back on its own.`}</p>
    </SeasonSheet>
  );
}
