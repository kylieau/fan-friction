import { useMemo, useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { YearHeader, yearParam } from '../components/YearHeader';
import { TvIcon } from '../components/Icons';
import { entriesInYear, formatMoney, getPersonalLog, spendByTeam, spendByVenue, spendSummary, subscribePersonalLog, todayIn, yearsOf, yourEntries, type SpendGroup } from '../data';
import { shortLocalDate } from '../lib/dates';
import { getHomeId } from '../lib/homeCity';
import { SpendBar } from './YourYearScreen';

/**
 * Spend details (build 7, §3.9; mock 53): by category, the average ticket per seat and free events, by venue per
 * visit, by team. Logged amounts only; a blank cost never counts as 0; Free counts as $0. By team credits both teams
 * of every game, Fave or not; events with no team stay out (Locked). Trip costs count everywhere in build 7 (Locked).
 */
export function SpendScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [params] = useSearchParams();
  const today = todayIn(METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO);
  const thisYear = today.slice(0, 4);
  const entries = useMemo(() => yourEntries(log), [log]);
  const years = useMemo(() => yearsOf(entries, thisYear), [entries, thisYear]);
  const year = yearParam(params.get('year'), thisYear);
  const inYear = useMemo(() => entriesInYear(entries, year === 'All time' ? 'all' : year), [entries, year]);
  const spend = useMemo(() => spendSummary(inYear), [inYear]);
  const venues = useMemo(() => spendByVenue(inYear), [inYear]);
  const teams = useMemo(() => spendByTeam(inYear), [inYear]);
  const span = year === 'All time' ? 'All time' : year === thisYear ? `Jan 1 – ${shortLocalDate(today)}` : `Jan 1 – Dec 31, ${year}`;
  const money = (n: number) => formatMoney(n, spend.currency);

  const groupList = (rows: SpendGroup[], noun: string, per: string) => (
    <ul className="log-list card spend-groups">
      {rows.map((g) => (
        <li key={g.label} className="spend-group">
          <span className="spend-group-main">
            <span className="spend-group-label">{g.label}</span>
            <span className="you-fine">
              {g.logged} of {g.of} {g.of === 1 ? noun : `${noun}s`} logged{g.logged > 1 && g.perVisit !== null ? ` · ${money(g.perVisit)} ${per}` : ''}
            </span>
          </span>
          <span className="spend-group-amount">
            {g.logged > 0 ? money(g.total) : <span className="you-fine">—</span>}
            {g.logged === 1 && g.perVisit !== null && <span className="you-fine">{per}</span>}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="screen page spend-page">
      <YearHeader title="Spend details" years={years} year={year} sub={span} back={{ to: `/you/year?year=${encodeURIComponent(year)}`, label: 'Your year' }} />
      {spend.logged === 0 ? (
        <p className="you-fine">No costs logged{year === 'All time' ? '' : ` in ${year}`} yet. Add a cost on a stub from its Edit stub.</p>
      ) : (
        <>
          <h2 className="you-heading">By category</h2>
          <div className="card spend-card">
            <div className="spend-total">
              <span className="year-big spend-big">{money(spend.total)}</span>
              <span className="year-hero-words">spent</span>
            </div>
            <p className="you-fine spend-coverage">Costs logged for {spend.logged} of {spend.of} events</p>
            <SpendBar spend={spend} />
            {spend.watched.total > 0 && (
              <p className="spend-line spend-watched">
                <TvIcon /> Watched · {spend.watched.lines.map((l) => `${l.kind === 'stream' ? 'Stream / PPV' : l.kind === 'food' ? 'food' : l.kind} ${money(l.amount)}`).join(' · ')}
                <strong>{money(spend.watched.total)}</strong>
              </p>
            )}
          </div>
          <div className="spend-tiles">
            <div className="card spend-tile">
              <span className="year-stat-num">{spend.avgTicket !== null ? money(spend.avgTicket) : '—'}</span>
              <span className="year-stat-label">Avg ticket per seat</span>
              <span className="year-stat-sub">{spend.paidSeats} paid {spend.paidSeats === 1 ? 'seat' : 'seats'} · free tickets excluded</span>
            </div>
            <div className="card spend-tile">
              <span className="year-stat-num">{spend.freeEvents}</span>
              <span className="year-stat-label">Free {spend.freeEvents === 1 ? 'event' : 'events'}</span>
            </div>
          </div>
          {venues.length > 0 && (
            <>
              <h2 className="you-heading">By venue · per visit</h2>
              {groupList(venues, 'visit', 'per visit')}
            </>
          )}
          {teams.length > 0 && (
            <>
              <h2 className="you-heading">By team</h2>
              {groupList(teams, 'game', 'per game')}
            </>
          )}
          <p className="you-fine">Logged events only; blank costs never count as $0. Each game counts under both teams. Watched spend stays on its own line, out of venue and team figures.</p>
        </>
      )}
    </div>
  );
}
