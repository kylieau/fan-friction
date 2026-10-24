import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { PinnedHead } from '../components/PinnedHead';
import { DateBox } from '../components/StubRows';
import { ListBand } from '../components/ListBand';
import { TitleText } from '../components/TitleText';
import { ConfirmDialog, MoneyField, SeasonSheet, SeatFields, moneyOf } from '../components/SeasonTickets';
import {
  costTotal,
  eventFromGame,
  formatMoney,
  getPersonalLog,
  getTeamSchedule,
  removePlan,
  removeSeasonGame,
  readdSeasonGame,
  resetSeasonGame,
  seasonCounts,
  seasonDefaultCost,
  seasonEditCounts,
  seasonHomeGames,
  seasonLabel,
  seasonPlanEventId,
  seasonStubsOf,
  seasonTicketOf,
  seatShort,
  seatsLine,
  setSeasonGame,
  subscribePersonalLog,
  TEAMS,
  todayIn,
  updateSeasonDefaults,
  type CostLine,
  type Plan,
  type SeasonRemovalReason,
  type SeasonTicket,
  type Seats,
  type TeamGame,
} from '../data';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { listTitle } from '../lib/eventTitle';
import { clockTime, shortLocalDate, timelineGroup } from '../lib/dates';
import { favPath } from './FavoritesScreen';

/**
 * The Season Tickets page (build 7.1, item 15; mocks 06, 13-r2, 15, 16; Kylie, Oct 23, 2026, Locked): from the team
 * page's "Games & Settings ›". The defaults (seat, price, parking, preseason), the past games' count (stubs in You),
 * then the season's upcoming home games by month with each one's seat and price. A removed game stays, greyed, "Not
 * in your plans", with Re-add and its reason ("Sold · $85", shown here alone). A game opens "This Game Only": its
 * seat, price and parking for this game, an Edited mark, Reset to Default, and Remove. Changing a default asks
 * "Apply to games not yet edited?" (16). `?pick=1` is a Partial plan's game picker (01-r2, right).
 */
export function SeasonTicketsScreen() {
  const { id = '' } = useParams();
  const [params, setParams] = useSearchParams();
  const team = TEAMS[id];
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const ticket = seasonTicketOf(id, log);
  // undefined while loading; null when no schedule could be read (Codex, steps 9–10: "Loading" never ended).
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
  const picking = params.get('pick') === '1' && ticket?.plan === 'partial';
  // The games she owns on a Partial plan, less the ones taken out; filled again when the ticket arrives after the
  // account loads, until she touches the picker (Codex, steps 9–10 review).
  const activePicks = (t: typeof ticket) => (t?.picked ?? []).filter((gameId) => !(gameId in (t?.removed ?? {})));
  const [picked, setPicked] = useState<Set<string>>(() => new Set(activePicks(ticket)));
  const touched = useRef(false);
  useEffect(() => {
    if (!touched.current) setPicked(new Set(activePicks(ticket)));
  }, [ticket?.updatedAt]);
  const [editing, setEditing] = useState<'seats' | 'ticket' | 'parking' | null>(null);
  const [gameOpen, setGameOpen] = useState<TeamGame | null>(null);

  const homeGames = useMemo(() => (schedule && ticket ? seasonHomeGames(schedule, ticket) : []), [schedule, ticket]);
  const upcoming = useMemo(() => homeGames.filter((game) => game.date >= today), [homeGames, today]);
  const planByEvent = useMemo(() => new Map(log.plans.filter((plan) => plan.season?.teamId === id).map((plan) => [plan.eventId, plan])), [log, id]);
  const counts = seasonCounts(id, log);
  const pastStubs = useMemo(() => [...seasonStubsOf(id, log)].sort((a, b) => a.when.sort.localeCompare(b.when.sort)), [log, id]);
  // Season plans whose game the schedule no longer lists: kept, flagged, and listed here so they can be removed.
  const gonePlans = useMemo(() => log.plans.filter((plan) => plan.season?.teamId === id && plan.season.gone && plan.date >= today).sort((a, b) => a.date.localeCompare(b.date)), [log, id, today]);

  // Off (or never on): nothing here can add or change a season game (Codex, steps 9–10: the page stayed editable).
  if (!team || !ticket?.on) {
    return (
      <div className="screen page">
        <PinnedHead back={{ to: favPath({ kind: 'team', id }), label: team?.shortName ?? 'Back' }} title="Season Tickets" />
        <div className="card empty-card">
          <div className="card-title">Season tickets are off for this team.</div>
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
  const inPlans = (game: TeamGame) => planByEvent.get(seasonPlanEventId(game));
  const currency = ticket.currency ?? 'USD';
  const savePicks = () => {
    touched.current = false;
    updateSeasonDefaults(id, { picked: [...picked] }, 'none', schedule ?? undefined);
    const next = new URLSearchParams(params);
    next.delete('pick');
    setParams(next, { replace: true });
  };
  const sub = picking
    ? `${team.name} · ${seasonLabel(schedule ?? [])} · ${[seatsLine(ticket.seats), typeof ticket.ticket === 'number' ? `${formatMoney(ticket.ticket, currency)} per game` : null].filter(Boolean).join(' · ')}`
    : `${team.name} · ${seasonLabel(schedule ?? [])} · ${counts.upcoming} upcoming · ${counts.stubs} ${counts.stubs === 1 ? 'stub' : 'stubs'}${counts.removed > 0 ? ` · ${counts.removed} removed` : ''}`;

  return (
    <div className="screen page season-page">
      <PinnedHead back={{ to: favPath({ kind: 'team', id }), label: team.shortName }} title={picking ? 'Pick Your Games' : 'Season Tickets'} />
      <p className="page-sub you-fine season-page-sub">{sub}</p>

      {picking ? (
        <div className="season-pick-head">
          <span>
            {picked.size} of {upcoming.length} games picked
          </span>
          <span className="stub-where-optional">Tap each game you own</span>
        </div>
      ) : (
        <>
          <div className="you-heading-row">
            <h2 className="you-heading">Defaults</h2>
            <span className="stub-where-optional">prefill every game</span>
          </div>
          <div className="card settings-group season-defaults">
            <button type="button" className="settings-row settings-link settings-group-row" onClick={() => setEditing('seats')}>
              <span>Your Seat</span>
              <span className="settings-value season-value">
                {seatsLine(ticket.seats) || 'Add'} <span aria-hidden>›</span>
              </span>
            </button>
            <button type="button" className="settings-row settings-link settings-group-row" onClick={() => setEditing('ticket')}>
              <span className="season-card-words">
                <span>Price per Seat, per Game</span>
                <span className="season-card-sub">Your ticket only</span>
              </span>
              <span className="settings-value season-value">
                {typeof ticket.ticket === 'number' ? formatMoney(ticket.ticket, currency) : 'Add'} <span aria-hidden>›</span>
              </span>
            </button>
            <button type="button" className="settings-row settings-link settings-group-row" onClick={() => setEditing('parking')}>
              <span>Parking per Game</span>
              <span className="settings-value season-value">
                {typeof ticket.parking === 'number' && ticket.parking > 0 ? formatMoney(ticket.parking, currency) : 'None'} <span aria-hidden>›</span>
              </span>
            </button>
            <button type="button" className="settings-row settings-link settings-group-row" role="switch" aria-checked={ticket.preseason} onClick={() => updateSeasonDefaults(id, { preseason: !ticket.preseason }, 'none', schedule ?? undefined)}>
              <span>Preseason</span>
              <span className="settings-value">{ticket.preseason ? 'Included' : 'Not included'}</span>
            </button>
          </div>
          <Link to={`/you/stubs?filter=${encodeURIComponent(team.shortName)}`} className="card settings-row settings-link season-past">
            <span className="season-card-words">
              <span>Past Games</span>
              <span className="season-card-sub">{pastStubs.length > 0 ? `${shortLocalDate(pastStubs[0].when.sort).replace(/^\w+, /, '')} – ${shortLocalDate(pastStubs[pastStubs.length - 1].when.sort).replace(/^\w+, /, '')} · now stubs in You` : 'Your stubs from these games show here'}</span>
            </span>
            <span className="settings-value season-value">
              <strong>{pastStubs.length}</strong> <span aria-hidden>›</span>
            </span>
          </Link>
        </>
      )}

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
          <div className="card-title">No home games left this season.</div>
        </div>
      ) : (
        months.map(([group, games]) => {
          const on = games.filter((game) => (picking ? picked.has(game.id) : Boolean(inPlans(game)))).length;
          return (
            <section key={group} className="timeline-group season-month" aria-label={group}>
              <ListBand label={group} right={<span className="list-band-right">{on} of {games.length}</span>} />
              <ul className="log-list season-list">
                {games.map((game) => {
                  const plan = inPlans(game);
                  const removed = ticket.removed[game.id];
                  const event = eventFromGame({ teamId: id, game });
                  const title = event ? listTitle(event) : `${game.opponent} at ${team.shortName}`;
                  if (picking) {
                    const isOn = picked.has(game.id);
                    return (
                      <li key={game.id}>
                        <label className={`season-row${isOn ? '' : ' off'}`}>
                          <DateBox when={{ sort: game.date, label: '', precision: 'day' }} />
                          <span className="log-main">
                            {game.preseason && <span className="season-pre">Preseason</span>}
                            <span className="log-title"><TitleText text={title} /></span>
                            <span className="log-facts">{[game.start ? clockTime(game.start) : null, isWeekend(game.date) ? 'Weekend' : 'Weekday'].filter(Boolean).join(' · ')}</span>
                          </span>
                          <input type="checkbox" className="season-check" checked={isOn} aria-label={title} onChange={() => { touched.current = true; setPicked((set) => { const next = new Set(set); if (next.has(game.id)) next.delete(game.id); else next.add(game.id); return next; }); }} />
                        </label>
                      </li>
                    );
                  }
                  if (!plan) {
                    return (
                      <li key={game.id}>
                        <div className="season-row off">
                          <DateBox when={{ sort: game.date, label: '', precision: 'day' }} />
                          <span className="log-main">
                            <span className="log-title"><TitleText text={title} /></span>
                            <span className="log-facts season-off-line">
                              {removed?.reason && <span className="season-chip">{removalWord(removed.reason)}{removed.reason === 'sold' && typeof removed.soldFor === 'number' ? ` · ${formatMoney(removed.soldFor, currency)}` : ''}</span>}
                              <span>{removed ? 'Not in your plans' : ticket.plan === 'partial' ? 'Not on your plan' : 'Not in your plans'}</span>
                            </span>
                          </span>
                          <button type="button" className="season-readd" onClick={() => readdSeasonGame(id, game)}>
                            {removed ? 'Re-add' : 'Add'}
                          </button>
                        </div>
                      </li>
                    );
                  }
                  const total = costTotal(plan.cost);
                  const ticketLine = plan.cost?.lines.find((line) => line.kind === 'ticket');
                  return (
                    <li key={game.id}>
                      <button type="button" className="season-row" onClick={() => setGameOpen(game)}>
                        <DateBox when={{ sort: game.date, label: '', precision: 'day' }} />
                        <span className="log-main">
                          {game.preseason && <span className="season-pre">Preseason</span>}
                          <span className="log-title"><TitleText text={title} /></span>
                          <span className="log-facts season-facts">
                            <span>{[game.start ? clockTime(game.start) : null, seatShort(plan.seats) || null, ticketLine ? formatMoney(ticketLine.amount, currency) : total !== null ? formatMoney(total, currency) : null].filter(Boolean).join(' · ')}</span>
                            {plan.season?.edited && <span className="season-chip outline">Edited</span>}
                            {plan.season?.gone && <span className="season-chip">Not on the schedule</span>}
                          </span>
                        </span>
                        <span className="add-record-chev" aria-hidden>
                          ›
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })
      )}
      {!picking && gonePlans.length > 0 && (
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
                      <span className="season-chip">Not on the schedule</span>
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
      {!picking && counts.removed > 0 && <p className="you-fine season-foot">Sale amounts never count in Spend. They show only on the greyed game.</p>}
      {picking && (
        <div className="season-pick-actions">
          {/* An existing plan can be emptied; a new one needs a game (Codex, steps 9–10 review). */}
          <button type="button" className="gold-button stub-done" disabled={picked.size === 0 && activePicks(ticket).length === 0} onClick={savePicks}>
            Save {picked.size} {picked.size === 1 ? 'game' : 'games'}
          </button>
        </div>
      )}
      {!picking && ticket.plan === 'partial' && (
        <button type="button" className="link-button season-helper-link" onClick={() => { touched.current = false; setPicked(new Set(activePicks(ticket))); const next = new URLSearchParams(params); next.set('pick', '1'); setParams(next); }}>
          Change which games you own ›
        </button>
      )}

      {editing && <DefaultSheet team={team} ticket={ticket} field={editing} schedule={schedule ?? []} onClose={() => setEditing(null)} />}
      {gameOpen && inPlans(gameOpen) && <GameSheet team={team} ticket={ticket} game={gameOpen} plan={inPlans(gameOpen)!} onClose={() => setGameOpen(null)} onRemoved={() => setGameOpen(null)} />}
    </div>
  );
}

function isWeekend(date: string): boolean {
  const [y, m, d] = date.split('-').map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return day === 0 || day === 6;
}

function removalWord(reason: SeasonRemovalReason): string {
  return reason === 'sold' ? 'Sold' : reason === 'gave' ? 'Gave away' : 'Skipped';
}

/** One default's editor; saving asks how far it applies when upcoming games exist (16). */
function DefaultSheet({ team, ticket, field, schedule, onClose }: { team: { id: string; shortName: string }; ticket: SeasonTicket; field: 'seats' | 'ticket' | 'parking'; schedule: TeamGame[]; onClose: () => void }) {
  const currency = ticket.currency ?? 'USD';
  const [seats, setSeats] = useState<Seats>(ticket.seats ?? {});
  const [price, setPrice] = useState(ticket.ticket !== undefined ? String(ticket.ticket) : '');
  const [parking, setParking] = useState(ticket.parking ? String(ticket.parking) : '');
  const [asking, setAsking] = useState(false);
  const counts = seasonEditCounts(team.id);
  const patch = field === 'seats' ? { seats } : field === 'ticket' ? { ticket: moneyOf(price) } : { parking: moneyOf(parking) };
  const before = field === 'seats' ? seatsLine(ticket.seats) || 'none' : field === 'ticket' ? (ticket.ticket !== undefined ? formatMoney(ticket.ticket, currency) : 'none') : ticket.parking ? formatMoney(ticket.parking, currency) : 'none';
  const after = field === 'seats' ? seatsLine(seats) || 'none' : field === 'ticket' ? (moneyOf(price) !== undefined ? formatMoney(moneyOf(price)!, currency) : 'none') : moneyOf(parking) !== undefined && moneyOf(parking)! > 0 ? formatMoney(moneyOf(parking)!, currency) : 'none';
  const title = field === 'seats' ? 'Your Seat' : field === 'ticket' ? 'Price per Seat, per Game' : 'Parking per Game';
  // Item 15's prompt whenever upcoming games exist (Codex, steps 9–10: it was skipped with no edits).
  const save = () => {
    if (counts.upcoming === 0) {
      updateSeasonDefaults(team.id, patch, 'none', schedule);
      onClose();
    } else setAsking(true);
  };
  if (asking) {
    return (
      <ConfirmDialog
        title="Apply to Games Not Yet Edited?"
        label="Apply the new default"
        body={
          <>
            <p>
              {title}: <strong>{before} → {after}</strong>.
            </p>
            <p>
              {counts.upcoming - counts.edited} upcoming {counts.upcoming - counts.edited === 1 ? 'game uses' : 'games use'} the default. <strong>{counts.edited} {counts.edited === 1 ? 'game' : 'games'} you edited</strong> {counts.edited === 1 ? 'keeps its' : 'keep their'} own. Past stubs never change.
            </p>
          </>
        }
        actions={[
          { label: `Apply to ${counts.upcoming - counts.edited} unedited ${counts.upcoming - counts.edited === 1 ? 'game' : 'games'}`, onPick: () => updateSeasonDefaults(team.id, patch, 'unedited', schedule) },
          { label: `Apply to all ${counts.upcoming} upcoming`, sub: `Replaces your ${counts.edited} ${counts.edited === 1 ? 'edit' : 'edits'}`, onPick: () => updateSeasonDefaults(team.id, patch, 'all', schedule) },
          { label: 'Cancel', quiet: true },
        ]}
        onClose={onClose}
      />
    );
  }
  return (
    <SeasonSheet title={title} sub={`${team.shortName} season tickets · the default for every game`} label={title} onClose={onClose}>
      {field === 'seats' && <SeatFields seats={seats} onChange={setSeats} />}
      {field === 'ticket' && <MoneyField label="Ticket" value={price} onChange={setPrice} currency={currency} autoFocus />}
      {field === 'parking' && <MoneyField label="Parking" value={parking} onChange={setParking} currency={currency} autoFocus />}
      <button type="button" className="gold-button stub-done" onClick={save}>
        Save
      </button>
    </SeasonSheet>
  );
}

/** "This Game Only" (15): the game's own seat, price and parking; Edited; Reset to default; Remove (12-r2). */
function GameSheet({ team, ticket, game, plan, onClose, onRemoved }: { team: { id: string; shortName: string }; ticket: SeasonTicket; game: TeamGame; plan: Plan; onClose: () => void; onRemoved: () => void }) {
  const currency = ticket.currency ?? 'USD';
  const planTicket = plan.cost?.lines.find((line) => line.kind === 'ticket')?.amount;
  const planParking = plan.cost?.lines.find((line) => line.kind === 'parking')?.amount;
  const [seats, setSeats] = useState<Seats>(plan.seats ?? {});
  const [price, setPrice] = useState(planTicket !== undefined ? String(planTicket) : '');
  const [parking, setParking] = useState(planParking !== undefined && planParking > 0 ? String(planParking) : '');
  const [removing, setRemoving] = useState(false);
  const [reason, setReason] = useState<SeasonRemovalReason | null>(null);
  const [soldFor, setSoldFor] = useState('');
  const event = eventFromGame({ teamId: team.id, game });
  const title = event ? listTitle(event) : `${game.opponent} at ${team.shortName}`;
  const sub = [title, shortLocalDate(game.date), game.start ? clockTime(game.start) : null].filter(Boolean).join(' · ');
  const defaults = seasonDefaultCost(ticket);
  const defaultTicket = defaults?.lines.find((line) => line.kind === 'ticket')?.amount;
  const defaultParking = defaults?.lines.find((line) => line.kind === 'parking')?.amount;
  const sameSeat = seatsLine(seats) === seatsLine(ticket.seats);
  const edited = Boolean(plan.season?.edited);
  const save = () => {
    const lines: CostLine[] = [];
    const t = moneyOf(price);
    const p = moneyOf(parking);
    // A quantity she logged (2 × $68) stays with the ticket line (Codex, steps 9–10 review).
    const oldTicket = plan.cost?.lines.find((line) => line.kind === 'ticket');
    if (t !== undefined) lines.push({ kind: 'ticket', amount: t, ...(oldTicket?.qty ? { qty: oldTicket.qty } : {}) });
    if (p !== undefined && p > 0) lines.push({ kind: 'parking', amount: p });
    const kept = (plan.cost?.lines ?? []).filter((line) => line.kind !== 'ticket' && line.kind !== 'parking');
    setSeasonGame(plan.id, { seats, cost: lines.length + kept.length > 0 ? { lines: [...lines, ...kept], ...(currency ? { currency } : {}) } : undefined });
    onClose();
  };
  if (removing) {
    const off = [defaultTicket !== undefined ? `${formatMoney(planTicket ?? defaultTicket, currency)} ticket` : null, planParking ? `${formatMoney(planParking, currency)} parking` : null].filter(Boolean);
    return (
      <SeasonSheet title="Remove This Game?" sub={sub} label="Remove this game" onClose={onClose}>
        <div className="season-section-head">
          <h3 className="season-section-title">What Happened?</h3>
          <span className="stub-where-optional">optional</span>
        </div>
        <div className="pill-row filter-pills" role="group" aria-label="What happened">
          {(['sold', 'gave', 'skipped'] as const).map((value) => (
            <button key={value} type="button" className="filter-chip" aria-pressed={reason === value} onClick={() => setReason(reason === value ? null : value)}>
              {removalWord(value)}
            </button>
          ))}
        </div>
        {reason === 'sold' && (
          <div className="season-money-row">
            <MoneyField label="Sold for" value={soldFor} onChange={setSoldFor} currency={currency} autoFocus />
            <span className="season-money-note">Optional. Shows only on the greyed game. <strong>Sale amounts never count in Spend.</strong></span>
          </div>
        )}
        <p className="you-fine">
          It stays in your season list, greyed out, and won't become a stub.{off.length > 0 ? ` Its ${off.join(' and ')} come off.` : ''} Re-add it any time.
        </p>
        <button
          type="button"
          className="gold-button stub-done"
          onClick={() => {
            removeSeasonGame(plan.id, reason ?? undefined, reason === 'sold' ? moneyOf(soldFor) : undefined);
            onRemoved();
          }}
        >
          Remove from plans
        </button>
        <button type="button" className="season-outline-button" onClick={() => setRemoving(false)}>
          Keep this game
        </button>
      </SeasonSheet>
    );
  }
  return (
    <SeasonSheet title="This Game Only" sub={sub} label="This game only" onClose={onClose}>
      <div className="season-section">
        <div className="season-section-head">
          <h3 className="season-section-title">Seat</h3>
          <span className="stub-where-optional">{sameSeat ? 'same as your default' : `default ${seatsLine(ticket.seats) || 'none'}`}</span>
        </div>
        <SeatFields seats={seats} onChange={setSeats} />
      </div>
      <div className="season-section">
        <div className="season-section-head">
          <h3 className="season-section-title">Price per Seat</h3>
          <span className="stub-where-optional">{defaultTicket !== undefined ? `default ${formatMoney(defaultTicket, currency)}` : 'no default'}</span>
        </div>
        <div className="season-money-row">
          <MoneyField label="Ticket" value={price} onChange={setPrice} currency={currency} />
          {edited && <span className="season-chip outline">Edited</span>}
          {edited && (
            <button
              type="button"
              className="link-button season-reset"
              onClick={() => {
                resetSeasonGame(plan.id);
                onClose();
              }}
            >
              Reset to {defaultTicket !== undefined ? formatMoney(defaultTicket, currency) : 'default'}
            </button>
          )}
        </div>
      </div>
      <div className="season-section">
        <div className="season-section-head">
          <h3 className="season-section-title">Parking</h3>
          <span className="stub-where-optional">{defaultParking !== undefined ? `default ${formatMoney(defaultParking, currency)}` : 'no default'}</span>
        </div>
        <MoneyField label="Parking" value={parking} onChange={setParking} currency={currency} />
      </div>
      <p className="you-fine">Changes here stick to this game. Changing a default later won't overwrite it unless you choose to.</p>
      <button type="button" className="gold-button stub-done" onClick={save}>
        Save for this game
      </button>
      <button type="button" className="season-outline-button" onClick={() => setRemoving(true)}>
        Remove this game…
      </button>
    </SeasonSheet>
  );
}
