import { useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  currencySign,
  deviceCurrency,
  formatMoney,
  getPersonalLog,
  seasonCounts,
  seasonHomeGames,
  seasonLabel,
  seasonTicketOf,
  seatsLine,
  startSeasonTickets,
  stopSeasonTickets,
  subscribePersonalLog,
  todayIn,
  type SeasonTicket,
  type Seats,
  type Team,
  type TeamGame,
} from '../data';
import { TicketIcon } from './Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { shortLocalDate } from '../lib/dates';
import { favPath } from '../screens/FavoritesScreen';

/**
 * Season tickets on a team page (build 7.1, item 15; Kylie, Oct 23, 2026, Locked; mocks 02, 03, 04, 05, 17, 18, 22):
 * one card under Follow with the switch. Off: one line on what it does. On: "On · N upcoming games · M stubs", the
 * defaults, and "Games & Settings ›" to the season page. Turning it on asks Full Season or Partial Plan (01-r2, B),
 * then the setup sheet. Turning it off asks once, with the counts. A team with no full schedule (a school read only
 * from its Sidearm calendar) shows the switch disabled with the reason (22; a builder's call).
 */
export function SeasonTicketCard({ team, schedule }: { team: Team; schedule: TeamGame[] | null }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const ticket = seasonTicketOf(team.id, log);
  const on = Boolean(ticket?.on);
  const [step, setStep] = useState<'plan' | 'setup' | 'off' | null>(null);
  const [plan, setPlan] = useState<SeasonTicket['plan']>(ticket?.plan ?? 'full');
  const counts = seasonCounts(team.id, log);
  const today = todayIn(METROS[team.metroId ?? ''] ?? DEFAULT_METRO);
  const canStart = Boolean(schedule && seasonHomeGames(schedule.filter((game) => game.date >= today), { preseason: true }).length > 0);
  const toggle = () => {
    if (on) setStep('off');
    else if (canStart) setStep('plan');
  };
  return (
    <section className="card season-card" aria-label="Season Tickets">
      {/* The whole row is the switch's label, so the tap target is the row, not the 48 × 28 track (Codex, steps 9–10). */}
      <label className="season-card-row season-switch-label">
        <TicketIcon size={18} />
        <span className="season-card-words">
          <span className="season-card-title">Season Tickets</span>
          <span className="season-card-sub">
            {on
              ? `On · ${counts.upcoming} upcoming ${counts.upcoming === 1 ? 'game' : 'games'} · ${counts.stubs} ${counts.stubs === 1 ? 'stub' : 'stubs'}`
              : canStart
                ? `Add every ${team.shortName} home game to your plans, set to Attending.`
                : "We don't have this team's full schedule yet, so we can't add the season. Add home games one at a time from the schedule below."}
          </span>
        </span>
        <input type="checkbox" className="switch" role="switch" aria-label="Season Tickets" checked={on} disabled={!on && !canStart} onChange={toggle} />
      </label>
      {on && ticket && (
        <div className="season-card-row season-card-foot">
          <span className="season-card-words">
            <span className="season-card-line">{seatsLine(ticket.seats) || 'No seat yet'}</span>
            <span className="season-card-sub">{defaultsLine(ticket)}</span>
          </span>
          <Link to={`${favPath({ kind: 'team', id: team.id })}/season`} className="heading-link season-card-link">
            Games & Settings ›
          </Link>
        </div>
      )}
      {step === 'plan' && schedule && (
        <PlanChoiceSheet
          team={team}
          games={schedule}
          plan={plan}
          onPlan={setPlan}
          onClose={() => setStep(null)}
          onNext={() => setStep('setup')}
        />
      )}
      {step === 'setup' && schedule && <SetupSheet team={team} games={schedule} plan={plan} ticket={ticket} onClose={() => setStep(null)} />}
      {step === 'off' && (
        <ConfirmDialog
          title="Turn Off Season Tickets?"
          label="Turn off season tickets"
          body={
            <>
              <p>
                <strong>Removes {counts.upcoming} upcoming {counts.upcoming === 1 ? 'game' : 'games'}.</strong> Your {counts.stubs} past {counts.stubs === 1 ? 'stub stays' : 'stubs stay'}, with their seats and prices.
              </p>
              <p>Removed and greyed games go too. You can turn it back on later.</p>
            </>
          }
          actions={[
            { label: `Remove ${counts.upcoming} upcoming ${counts.upcoming === 1 ? 'game' : 'games'}`, onPick: () => stopSeasonTickets(team.id) },
            { label: 'Keep season tickets', quiet: true },
          ]}
          onClose={() => setStep(null)}
        />
      )}
    </section>
  );
}

/** "$62 per game · Parking $30", or what is set. */
export function defaultsLine(ticket: SeasonTicket): string {
  const cur = ticket.currency ?? 'USD';
  return [typeof ticket.ticket === 'number' ? `${formatMoney(ticket.ticket, cur)} per game` : 'No price yet', typeof ticket.parking === 'number' && ticket.parking > 0 ? `Parking ${formatMoney(ticket.parking, cur)}` : null].filter(Boolean).join(' · ');
}

/** The sheet shell every season sheet shares: the backdrop, the handle, a title, a sub line and a close button. */
export function SeasonSheet({ title, sub, label, onClose, children }: { title: string; sub?: string; label: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="action-sheet stub-sheet season-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <div className="log-sheet-head">
          <h2 className="stub-sheet-title">{title}</h2>
          <button type="button" className="round-button" aria-label="Close" onClick={onClose}>
            <span aria-hidden>✕</span>
          </button>
        </div>
        {sub && <p className="stub-sheet-sub">{sub}</p>}
        {children}
      </div>
    </div>
  );
}

/** Which plan do you have? Full Season or Partial Plan (01-r2, option B, Locked). */
function PlanChoiceSheet({ team, games, plan, onPlan, onClose, onNext }: { team: Team; games: TeamGame[]; plan: SeasonTicket['plan']; onPlan: (plan: SeasonTicket['plan']) => void; onClose: () => void; onNext: () => void }) {
  const today = todayIn(METROS[team.metroId ?? ''] ?? DEFAULT_METRO);
  const total = seasonHomeGames(games.filter((game) => game.date >= today), { preseason: true }).length;
  const option = (value: SeasonTicket['plan'], title: string, sub: string) => (
    <button type="button" className={`season-option${plan === value ? ' on' : ''}`} role="radio" aria-checked={plan === value} onClick={() => onPlan(value)}>
      <span className="season-option-dot" aria-hidden />
      <span className="season-option-words">
        <span className="season-option-title">{title}</span>
        <span className="season-option-sub">{sub}</span>
      </span>
    </button>
  );
  return (
    <SeasonSheet title="Which Plan Do You Have?" sub={`${team.name} · ${seasonLabel(games)} · ${total} home ${total === 1 ? 'game' : 'games'}`} label="Which plan do you have?" onClose={onClose}>
      <div className="season-options" role="radiogroup" aria-label="Plan">
        {option('full', 'Full Season', `All ${total} home games are added and ticked. Remove any you sell or skip.`)}
        {option('partial', 'Partial Plan', 'Half, 20-game, weekend, or pick-your-games plans. Start with none and tap the games you own.')}
      </div>
      <p className="you-fine">Flex or credit plans with no fixed games: add those games one at a time.</p>
      <button type="button" className="gold-button stub-done" onClick={onNext}>
        Next: your seat and price
      </button>
    </SeasonSheet>
  );
}

/** A money box: the currency sign and a decimal field; blank is "not set", never 0. */
export function MoneyField({ label, value, onChange, placeholder = '0', currency, autoFocus }: { label: string; value: string; onChange: (next: string) => void; placeholder?: string; currency: string; autoFocus?: boolean }) {
  return (
    <label className="seat-field money-field">
      <span className="seat-field-label">{label}</span>
      <span className="cost-amount">
        <span aria-hidden>{currencySign(currency)}</span>
        <input
          className="account-input"
          inputMode="decimal"
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          aria-label={label}
          onChange={(ev) => onChange(ev.target.value.replace(/[^0-9.]/g, '').slice(0, 9))}
          onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
        />
      </span>
    </label>
  );
}

/** Three seat boxes in a row (the Seat row's own fields). */
export function SeatFields({ seats, onChange }: { seats: Seats; onChange: (next: Seats) => void }) {
  const box = (key: 'section' | 'row' | 'seat', label: string, caps = false) => (
    <label className="seat-field">
      <span className="seat-field-label">{label}</span>
      <input className="account-input" value={seats[key] ?? ''} autoCapitalize={caps ? 'characters' : 'sentences'} autoComplete="off" aria-label={label} onChange={(ev) => onChange({ ...seats, [key]: ev.target.value })} onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()} />
    </label>
  );
  return (
    <div className="season-seat-fields">
      {box('section', 'Section')}
      {box('row', 'Row', true)}
      {box('seat', 'Seat')}
    </div>
  );
}

export function moneyOf(text: string): number | undefined {
  const n = Number(text.trim());
  return text.trim() !== '' && Number.isFinite(n) && n >= 0 ? Math.round(n * 100) / 100 : undefined;
}

/** The setup sheet (04, 05): seat, price per seat per game, the season-total helper, parking, Include Preseason, the add button. */
function SetupSheet({ team, games, plan, ticket, onClose }: { team: Team; games: TeamGame[]; plan: SeasonTicket['plan']; ticket: SeasonTicket | undefined; onClose: () => void }) {
  const navigate = useNavigate();
  const currency = ticket?.currency ?? deviceCurrency();
  const [seats, setSeats] = useState<Seats>(ticket?.seats ?? {});
  const [price, setPrice] = useState(ticket?.ticket !== undefined ? String(ticket.ticket) : '');
  const [parking, setParking] = useState(ticket?.parking ? String(ticket.parking) : '');
  const [preseason, setPreseason] = useState(ticket?.preseason ?? true);
  const [helper, setHelper] = useState(false);
  // What the switch would add today: the home games still ahead (a past preseason game is not a plan to make).
  const today = todayIn(METROS[team.metroId ?? ''] ?? DEFAULT_METRO);
  const ahead = useMemo(() => games.filter((game) => game.date >= today), [games, today]);
  const pre = useMemo(() => ahead.filter((game) => game.home && !game.neutral && !game.stakes && game.preseason), [ahead]);
  const all = useMemo(() => seasonHomeGames(ahead, { preseason }), [ahead, preseason]);
  const [total, setTotal] = useState('');
  const [count, setCount] = useState(String(all.length));
  useEffect(() => setCount(String(all.length)), [all.length]);
  const perGame = moneyOf(total) !== undefined && Number(count) > 0 ? Math.round((Number(total) / Number(count)) * 100) / 100 : undefined;
  const preSpan = pre.length > 0 ? `${pre.length} home ${pre.length === 1 ? 'game' : 'games'}, ${shortLocalDate(pre[0].date).replace(/^\w+, /, '')}${pre.length > 1 ? ` – ${shortLocalDate(pre[pre.length - 1].date).replace(/^\w+, /, '')}` : ''}` : 'None left this season';
  const add = () => {
    startSeasonTickets(team.id, games, { plan, seats, ticket: moneyOf(price), parking: moneyOf(parking), currency, preseason, ...(plan === 'partial' ? { picked: ticket?.picked ?? [] } : {}) });
    onClose();
    if (plan === 'partial') navigate(`${favPath({ kind: 'team', id: team.id })}/season?pick=1`);
  };
  return (
    <SeasonSheet title="Season Tickets" sub={`${team.name} · ${seasonLabel(games)} · ${all.length} home ${all.length === 1 ? 'game' : 'games'}`} label="Season tickets setup" onClose={onClose}>
      <div className="season-section">
        <div className="season-section-head">
          <h3 className="season-section-title">Your Seat</h3>
          <span className="stub-where-optional">fills every game and its stub</span>
        </div>
        <SeatFields seats={seats} onChange={setSeats} />
      </div>
      <div className="season-section">
        <div className="season-section-head">
          <h3 className="season-section-title">Price per Seat, per Game</h3>
          <span className="stub-where-optional">your ticket only</span>
        </div>
        <div className="season-money-row">
          <MoneyField label="Ticket" value={price} onChange={setPrice} currency={currency} />
          <span className="season-money-note">Prefills every game. You can change any one game later.</span>
        </div>
        {helper ? (
          <div className="season-helper">
            <MoneyField label="Season total" value={total} onChange={setTotal} currency={currency} autoFocus />
            <label className="seat-field">
              <span className="seat-field-label">Games</span>
              <input className="account-input" inputMode="numeric" value={count} aria-label="Games" onChange={(ev) => setCount(ev.target.value.replace(/[^0-9]/g, '').slice(0, 3))} />
            </label>
            <button
              type="button"
              className="filter-chip season-use"
              disabled={perGame === undefined}
              onClick={() => {
                if (perGame !== undefined) setPrice(String(perGame));
                setHelper(false);
              }}
            >
              {perGame !== undefined ? `Use ${formatMoney(perGame, currency)}` : 'Use'}
            </button>
          </div>
        ) : (
          <button type="button" className="link-button season-helper-link" onClick={() => setHelper(true)}>
            Paid for the season? Enter total ÷ games
          </button>
        )}
      </div>
      <div className="season-section">
        <div className="season-section-head">
          <h3 className="season-section-title">Parking per Game</h3>
          <span className="stub-where-optional">optional</span>
        </div>
        <div className="season-money-row">
          <MoneyField label="Parking" value={parking} onChange={setParking} currency={currency} />
          <span className="season-money-note">Lands as a Parking & Transit line on each game.</span>
        </div>
      </div>
      <label className="season-section season-switch-row season-switch-label">
        <span className="season-card-words">
          <span className="season-section-title">Include Preseason</span>
          <span className="season-card-sub">{preSpan}</span>
        </span>
        <input type="checkbox" className="switch" role="switch" aria-label="Include preseason" checked={preseason} disabled={pre.length === 0} onChange={(ev) => setPreseason(ev.target.checked)} />
      </label>
      <p className="you-fine">Playoff games aren't added. If the {team.shortName} get a home playoff game, we'll ask.</p>
      <button type="button" className="gold-button stub-done" onClick={add}>
        {plan === 'full' ? `Add ${all.length} ${all.length === 1 ? 'game' : 'games'} as Attending` : 'Next: pick your games'}
      </button>
    </SeasonSheet>
  );
}

/** The app's small confirm card (the tag and plan removals use it): a title, a body, stacked choices. */
export function ConfirmDialog({ title, label, body, actions, onClose }: { title: string; label: string; body: ReactNode; actions: { label: string; sub?: string; quiet?: boolean; onPick?: () => void }[]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop sheet-backdrop confirm-backdrop" role="alertdialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="card confirm-card" onClick={(ev) => ev.stopPropagation()}>
        <h2 className="confirm-title">{title}</h2>
        <div className="confirm-body">{body}</div>
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`confirm-action${action.quiet ? ' quiet' : ''}`}
            onClick={() => {
              action.onPick?.();
              onClose();
            }}
          >
            <span>{action.label}</span>
            {action.sub && <span className="confirm-action-sub">{action.sub}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
