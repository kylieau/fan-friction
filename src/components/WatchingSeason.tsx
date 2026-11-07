import { useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import {
  getPersonalLog,
  HOME_SPOT,
  recentWatchPlaces,
  seasonLabel,
  seasonPlanEventId,
  seasonStubsOf,
  setWatchingSpot,
  startWatchingSeason,
  stopWatchingSeason,
  subscribePersonalLog,
  todayIn,
  watchingCounts,
  watchingSeasonOf,
  watchSeasonGames,
  watchSetupCounts,
  type Entry,
  type Team,
  type TeamGame,
} from '../data';
import { TvIcon } from './Icons';
import { ConfirmDialog, SeasonSheet } from './SeasonTickets';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { shortLocalDate } from '../lib/dates';
import { favPath } from '../screens/FavoritesScreen';

/**
 * Watching Season on a team page (build 7.2; Kylie, Nov 4, 2026, Locked; mocks `watching-season/01` to `03`, `06`):
 * a sibling row under Season Tickets in the same card, with the TV icon. Off: one line on what it does. On: "On · N
 * games left · M watched" and a foot row with the default spot and how many games she changed. Turning it on opens
 * the setup sheet (02): Home or A Place, the tickets-win note, "Add N Games". Turning it off asks once, with the counts.
 */
export function WatchingSeasonRow({ team, schedule }: { team: Team; schedule: TeamGame[] | null }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const season = watchingSeasonOf(team.id, log);
  const on = Boolean(season?.on);
  const today = todayIn(METROS[team.metroId ?? ''] ?? DEFAULT_METRO);
  const seasonStart = useMemo(() => (schedule ? (watchSeasonGames(schedule).map((game) => game.date).sort()[0] ?? null) : null), [schedule]);
  const counts = watchingCounts(team.id, seasonStart, log);
  const canStart = Boolean(schedule && watchSeasonGames(schedule).some((game) => game.date >= today));
  const [step, setStep] = useState<'setup' | 'spot' | 'off' | null>(null);
  const games = (n: number) => `${n} ${n === 1 ? 'game' : 'games'}`;
  return (
    <>
      <label className="season-card-row season-switch-label">
        <TvIcon />
        <span className="season-card-words">
          <span className="season-card-title">Watching Season</span>
          <span className="season-card-sub">
            {on
              ? `On · ${games(counts.left)} left · ${counts.watched} watched`
              : canStart
                ? `Add every ${team.shortName} game, home and away, as Watching. Games you have tickets for stay Attending.`
                : "We don't have this team's full schedule yet, so we can't add the season."}
          </span>
        </span>
        <input type="checkbox" className="switch" role="switch" aria-label="Watching Season" checked={on} disabled={!on && !canStart} onChange={() => setStep(on ? 'off' : canStart ? 'setup' : null)} />
      </label>
      {on && season && (
        <div className="season-card-row season-card-foot">
          <span className="season-card-words">
            <span className="season-card-line">{season.place}</span>
            <span className="season-card-sub">Default spot{counts.changed > 0 ? ` · ${games(counts.changed)} changed` : ''}</span>
          </span>
          {/* Board 07 (Kylie, Nov 7, 2026): the foot row opens the Games & Spot page, where the default has its own Change. */}
          <Link to={`${favPath({ kind: 'team', id: team.id })}/watching`} className="heading-link season-card-link">
            Games & Spot ›
          </Link>
        </div>
      )}
      {(step === 'setup' || step === 'spot') && schedule && <WatchingSetupSheet team={team} games={schedule} mode={step} place={season?.place ?? HOME_SPOT} onClose={() => setStep(null)} />}
      {step === 'off' && (
        <ConfirmDialog
          title="Turn Off Watching Season?"
          label="Turn off watching season"
          body={
            <>
              <p>
                <strong>Removes {games(counts.left)} from your plans.</strong> Games you turned Attending and your {counts.watched} watched {counts.watched === 1 ? 'stub stay' : 'stubs stay'}.
              </p>
              <p>You can turn it back on later.</p>
            </>
          }
          actions={[
            { label: `Remove ${games(counts.left)}`, onPick: () => stopWatchingSeason(team.id) },
            { label: 'Keep watching season', quiet: true },
          ]}
          onClose={() => setStep(null)}
        />
      )}
    </>
  );
}

/**
 * Home or A Place (02 and 08): the two options, and for A Place the typed field with the places from other watches as
 * chips (the mock's address search would need a places service, a new source, so the Stub it sheet's free text
 * serves). Shared by the setup sheet and the per-game sheet on the Games & Spot page.
 */
export function SpotPicker({ choice, typed, log, onChoice, onTyped, onEnter }: { choice: 'home' | 'place'; typed: string; log: ReturnType<typeof getPersonalLog>; onChoice: (next: 'home' | 'place') => void; onTyped: (next: string) => void; onEnter: () => void }) {
  const recent = recentWatchPlaces(log, 4).filter((p) => p.toLowerCase() !== typed.trim().toLowerCase());
  const option = (value: 'home' | 'place', title: string, sub: string) => (
    <button type="button" className={`season-option${choice === value ? ' on' : ''}`} role="radio" aria-checked={choice === value} onClick={() => onChoice(value)}>
      <span className="season-option-dot" aria-hidden />
      <span className="season-option-words">
        <span className="season-option-title">{title}</span>
        <span className="season-option-sub">{sub}</span>
      </span>
    </button>
  );
  return (
    <>
      <div className="season-options" role="radiogroup" aria-label="Where you watch">
        {option('home', 'Home', 'On TV or streaming at your place.')}
        {option('place', 'A Place', "A bar, a friend's, anywhere you watch.")}
      </div>
      {choice === 'place' && (
        <div className="watch-spot-field">
          <input className="account-input" value={typed} placeholder="Barney's Beanery" aria-label="The place" autoFocus onChange={(ev) => onTyped(ev.target.value.slice(0, 80))} onKeyDown={(ev) => ev.key === 'Enter' && onEnter()} />
          {recent.length > 0 && (
            <div className="watch-spot-chips">
              {recent.map((p) => (
                <button key={p} type="button" className="filter-chip" onClick={() => onTyped(p)}>
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

/**
 * The setup sheet (02): Where You Usually Watch, Home or A Place, the note on the games that stay as they are, and
 * the one button. The same sheet changes the default spot later (from the Games & Spot page's Change since Nov 7).
 */
export function WatchingSetupSheet({ team, games, mode, place, onClose }: { team: Team; games: TeamGame[]; mode: 'setup' | 'spot'; place: string; onClose: () => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const today = todayIn(METROS[team.metroId ?? ''] ?? DEFAULT_METRO);
  const isHome = /^home$/i.test(place);
  const [choice, setChoice] = useState<'home' | 'place'>(isHome ? 'home' : 'place');
  const [typed, setTyped] = useState(isHome ? '' : place);
  const counts = useMemo(() => watchSetupCounts(games, log.plans, watchingSeasonOf(team.id, log), today), [games, log, team.id, today]);
  const spot = choice === 'home' ? HOME_SPOT : typed.trim();
  const ready = choice === 'home' || spot.length > 0;
  const g = (n: number) => `${n} ${n === 1 ? 'game' : 'games'}`;
  const save = () => {
    if (!ready) return;
    if (mode === 'setup') startWatchingSeason(team.id, games, spot);
    else setWatchingSpot(team.id, spot);
    onClose();
  };
  return (
    <SeasonSheet title={mode === 'setup' ? 'Watching Season' : 'Where You Usually Watch'} sub={`${team.name} · ${seasonLabel(games)} · ${g(counts.total)}`} label={mode === 'setup' ? 'Watching season setup' : 'Change the default spot'} onClose={onClose}>
      <div className="season-section">
        <div className="season-section-head watch-head">
          <h3 className="season-section-title">Where You Usually Watch</h3>
          <span className="stub-where-optional">Change any game later</span>
        </div>
        <SpotPicker choice={choice} typed={typed} log={log} onChoice={setChoice} onTyped={setTyped} onEnter={save} />
      </div>
      {mode === 'setup' && (
        <div className="watch-note card">
          {counts.ticketed > 0 && (
            <p>
              <strong>
                {g(counts.ticketed)} you have Season Tickets for {counts.ticketed === 1 ? 'stays' : 'stay'} Attending. Tickets win.
              </strong>
            </p>
          )}
          {counts.planned > 0 && (
            <p>
              {g(counts.planned)} you already planned {counts.planned === 1 ? 'stays' : 'stay'} as {counts.planned === 1 ? 'it is' : 'they are'}.
            </p>
          )}
          <p>
            {counts.ticketed + counts.planned > 0 ? 'The other ' : ''}
            {g(counts.toAdd)}, home and away, {counts.toAdd === 1 ? 'is' : 'are'} added as Watching.
          </p>
        </div>
      )}
      <button type="button" className="gold-button stub-done" disabled={!ready || (mode === 'setup' && counts.toAdd === 0)} onClick={save}>
        {mode === 'setup' ? `Add ${g(counts.toAdd)}` : 'Save spot'}
      </button>
    </SeasonSheet>
  );
}

/** "Jul 3", "Jul 3 to 22", "Jul 28 to Aug 2". */
function dateSpan(from: string, to: string): string {
  const a = shortLocalDate(from).replace(/^\w+, /, '');
  const b = shortLocalDate(to).replace(/^\w+, /, '');
  if (from === to) return a;
  return from.slice(0, 7) === to.slice(0, 7) ? `${a} to ${b.replace(/^\w+ /, '')}` : `${a} to ${b}`;
}

/** The longest and the latest run of `true` in order, each with its first and last index. */
function runs(flags: readonly boolean[]): { now: [number, number] | null; best: [number, number] | null } {
  let best: [number, number] | null = null;
  let start = -1;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (start < 0) start = i;
      if (!best || i - start + 1 > best[1] - best[0] + 1) best = [start, i];
    } else start = -1;
  }
  const now: [number, number] | null = start >= 0 ? [start, flags.length - 1] : null;
  return { now, best };
}

/**
 * The Season Watch Record card (mock 06): on the team page under You at games, once Watching Season is on or any
 * watched stub of the team exists. Games Watched (of the games played so far, and where), the team's record in the
 * games she watched, the watch streak and the win streak while watching, current and best with dates. The current
 * season reads from the schedule's played games; an earlier season (picked from the watched stubs' years) has no
 * schedule here, so it shows the watched count, the places and the record from the stubs' own scores.
 */
export function SeasonWatchRecord({ team, schedule, outcomeOf }: { team: Team; schedule: TeamGame[] | null; outcomeOf: (entry: Entry) => 'W' | 'L' | 'T' | null }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const season = watchingSeasonOf(team.id, log);
  const watchedAll = useMemo(() => seasonStubsOf(team.id, log, 'watched'), [team.id, log]);
  const games = useMemo(() => (schedule ? watchSeasonGames(schedule) : []), [schedule]);
  const current = games.length > 0 ? seasonLabel(games) : null;
  const seasonStart = games.length > 0 ? games.map((g) => g.date).sort()[0] : null;
  // Earlier seasons: the watched stubs from before this season's first game, offered by year (a stub from last spring
  // is not this autumn's season, whatever the year; Codex, group 7 review).
  const earlier = seasonStart ? watchedAll.filter((e) => e.when.sort < seasonStart) : current ? [] : watchedAll;
  const years = [...new Set(earlier.map((e) => e.when.sort.slice(0, 4)))].sort().reverse();
  const options = [...(current ? [current] : []), ...years];
  const [picked, setPicked] = useState<string | null>(null);
  const shown = picked && options.includes(picked) ? picked : (options[0] ?? null);
  if (!season?.on && watchedAll.length === 0) return null;
  if (!shown) return null;
  const isCurrent = shown === current;
  const watched = isCurrent ? watchedAll.filter((e) => !seasonStart || e.when.sort >= seasonStart) : earlier.filter((e) => e.when.sort.startsWith(shown));
  // Played games in date order. A watched game is a watched stub on the game's own event; a stub with no event of its
  // own (a hand-added watch) counts by date only when the team played once that day (a doubleheader never doubles).
  const played = isCurrent ? games.filter((g) => g.score).sort((a, b) => a.date.localeCompare(b.date)) : [];
  const playedIds = new Set(played.map((g) => seasonPlanEventId(g)));
  const watchedIds = new Set(watched.map((e) => e.eventId).filter((id): id is string => Boolean(id)));
  const looseDates = new Set(watched.filter((e) => !e.eventId || !playedIds.has(e.eventId)).map((e) => e.when.sort));
  const perDate = new Map<string, number>();
  for (const g of played) perDate.set(g.date, (perDate.get(g.date) ?? 0) + 1);
  const watchedFlags = played.map((g) => watchedIds.has(seasonPlanEventId(g)) || (perDate.get(g.date) === 1 && looseDates.has(g.date)));
  const watchedGames = played.filter((_, i) => watchedFlags[i]);
  const wins = isCurrent ? watchedGames.filter((g) => g.score && g.score.us > g.score.them).length : watched.filter((e) => outcomeOf(e) === 'W').length;
  const losses = isCurrent ? watchedGames.filter((g) => g.score && g.score.us < g.score.them).length : watched.filter((e) => outcomeOf(e) === 'L').length;
  const rate = wins + losses > 0 ? (wins / (wins + losses)).toFixed(3).replace(/^0/, '') : null;
  const home = watched.filter((e) => !e.watchedPlace || /^home$/i.test(e.watchedPlace)).length;
  const placeCounts = new Map<string, number>();
  for (const e of watched) if (e.watchedPlace && !/^home$/i.test(e.watchedPlace)) placeCounts.set(e.watchedPlace, (placeCounts.get(e.watchedPlace) ?? 0) + 1);
  const topPlace = [...placeCounts.entries()].sort((a, b) => b[1] - a[1])[0];
  const watchRuns = runs(watchedFlags);
  const winFlags = watchedGames.map((g) => Boolean(g.score && g.score.us > g.score.them));
  const winRuns = runs(winFlags);
  const span = (list: TeamGame[], r: [number, number]) => dateSpan(list[r[0]].date, list[r[1]].date);
  const ended = isCurrent && games.length > 0 && games.every((g) => g.score || g.date < todayIn(METROS[team.metroId ?? ''] ?? DEFAULT_METRO));
  const nowWord = ended ? 'at season end' : 'now';
  return (
    <section className="card watch-record" aria-label="Season Watch Record">
      <div className="watch-record-head">
        <h2 className="card-title">Season Watch Record</h2>
        {options.length > 1 ? (
          <select className="watch-record-pick" aria-label="Season" value={shown} onChange={(ev) => setPicked(ev.target.value)}>
            {options.map((o) => (
              <option key={o} value={o}>
                {o} Season
              </option>
            ))}
          </select>
        ) : (
          <span className="watch-record-pick is-plain">{shown} Season</span>
        )}
      </div>
      <div className="watch-tiles">
        <div className="watch-tile">
          <span className="watch-tile-label">Games Watched</span>
          <span className="watch-tile-big">
            {watched.length}
            {isCurrent && <span className="watch-tile-small"> of {played.length} played</span>}
          </span>
          <span className="watch-tile-sub">{[`${home} home`, topPlace ? `${topPlace[1]} ${topPlace[0]}` : null].filter(Boolean).join(' · ')}</span>
        </div>
        <div className="watch-tile">
          <span className="watch-tile-label">{team.shortName} When You Watched</span>
          <span className="watch-tile-big">
            {wins}–{losses}
          </span>
          <span className="watch-tile-sub">{rate ? `${rate} win rate` : 'No results yet'}</span>
        </div>
        {isCurrent && (
          <>
            <div className="watch-tile">
              <span className="watch-tile-label">Watch Streak</span>
              <span className="watch-tile-big">
                {watchRuns.now ? watchRuns.now[1] - watchRuns.now[0] + 1 : 0}
                <span className="watch-tile-small"> {watchRuns.now && watchRuns.now[1] - watchRuns.now[0] === 0 ? 'game' : 'games'} {nowWord}</span>
              </span>
              <span className="watch-tile-sub">{watchRuns.best ? <>Best <strong>{watchRuns.best[1] - watchRuns.best[0] + 1}</strong> · {span(played, watchRuns.best)}</> : 'No games watched yet'}</span>
            </div>
            <div className="watch-tile">
              <span className="watch-tile-label">Win Streak While Watching</span>
              <span className="watch-tile-big">
                {winRuns.now ? winRuns.now[1] - winRuns.now[0] + 1 : 0}
                <span className="watch-tile-small"> {nowWord}</span>
              </span>
              <span className="watch-tile-sub">{winRuns.best ? <>Best <strong>{winRuns.best[1] - winRuns.best[0] + 1}</strong> · {span(watchedGames, winRuns.best)}</> : 'No wins watched yet'}</span>
            </div>
          </>
        )}
      </div>
      <p className="watch-record-foot">Attended games count in You at {team.shortName} games.</p>
    </section>
  );
}
