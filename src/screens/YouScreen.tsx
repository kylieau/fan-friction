import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  filterChoices,
  getPersonalLog,
  getRatedDates,
  canSignIn,
  getAccount,
  approveFollow,
  declineFollow,
  followRequests,
  getMyProfile,
  getSaveWarning,
  subscribeAccount,
  logStats,
  nightFacts,
  ratingForNight,
  subscribePersonalLog,
  yourNights,
  type FollowRequest,
  type LoggedNight,
} from '../data';
import { AccountBlock } from '../components/AccountBlock';
import { FactList } from '../components/FactList';
import { GearIcon } from '../components/Icons';
import { loggedDateLabel } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { eventPath } from '../lib/view';

const TOP = 8;

export function YouScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const nights = useMemo(() => yourNights(log), [log]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [tab, setTab] = useState<'nights' | 'stats'>('nights');
  const [handle, setHandle] = useState<string | null>(null);
  const [requests, setRequests] = useState<FollowRequest[]>([]);

  const decide = async (followerId: string, yes: boolean) => {
    if (yes) await approveFollow(followerId);
    else await declineFollow(followerId);
    setRequests((list) => list.filter((r) => r.followerId !== followerId));
  };

  useEffect(() => {
    let current = true;
    if (!account) {
      setHandle(null);
      return;
    }
    getMyProfile().then((profile) => current && setHandle(profile?.handle ?? null));
    followRequests().then((list) => current && setRequests(list));
    return () => {
      current = false;
    };
  }, [account?.id]);

  useEffect(() => {
    let current = true;
    getRatedDates(DEFAULT_METRO.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, []);

  const choices = useMemo(() => filterChoices(nights), [nights]);
  const shown = filter === 'All' ? nights : nights.filter((night) => night.tags.includes(filter));
  const stats = useMemo(() => logStats(shown), [shown]);
  const heaviest = useMemo(() => heaviestNight(shown, ratings), [shown, ratings]);

  const filters = (
    <div className="filter-row" role="group" aria-label="Filter your nights">
      <FilterChip label="All" pressed={filter === 'All'} onClick={() => setFilter('All')} />
      {choices.map((choice) => (
        <FilterChip
          key={choice.label}
          label={choice.label}
          pressed={filter === choice.label}
          onClick={() => setFilter(choice.label)}
        />
      ))}
    </div>
  );

  const nightsBlock = (
    <section className="you-block" aria-label="Your nights">
      {shown.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">
            {filter !== 'All'
              ? `No nights match ${filter}.`
              : canSignIn() && !account
                ? 'No nights on this phone. Sign in to see yours, or find one on the map.'
                : 'No nights yet. Find one on the map.'}
          </div>
          {filter !== 'All' && (
            <button type="button" className="link-button" onClick={() => setFilter('All')}>
              Show all nights
            </button>
          )}
        </div>
      ) : (
        <ul className="log-list">
          {shown.map((night) => (
            <li key={night.id}>
              <NightRow night={night} rating={ratingForNight(night, ratings)} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  return (
    <div className="screen page">
      <div className="you-header">
        <span className="avatar" aria-hidden>
          {(account?.displayName ?? account?.email ?? 'Y').slice(0, 1).toUpperCase()}
        </span>
        <div className="you-who">
          <h1 className="page-title">{account?.displayName ?? 'You'}</h1>
          {account && handle && <span className="you-handle">/p/{handle}</span>}
        </div>
        <Link to="/you/settings" className="round-button you-gear" aria-label="Settings">
          <GearIcon />
        </Link>
      </div>

      <AccountBlock />

      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}

      {requests.length > 0 && (
        <section className="you-block" aria-labelledby="requests-heading">
          <h2 id="requests-heading" className="you-heading">
            Wants to follow you
          </h2>
          <ul className="log-list">
            {requests.map((r) => (
              <li key={r.followerId} className="request-row">
                <span className="log-title">{r.displayName ?? r.handle ?? 'Someone'}</span>
                <span className="request-actions">
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, true)}>
                    Approve
                  </button>
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, false)}>
                    Decline
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="segmented" role="tablist" aria-label="You">
        <button type="button" role="tab" aria-selected={tab === 'nights'} onClick={() => setTab('nights')}>
          Nights
        </button>
        <button type="button" role="tab" aria-selected={tab === 'stats'} onClick={() => setTab('stats')}>
          Stats
        </button>
      </div>

      {filters}

      {tab === 'nights' ? nightsBlock : <Stats stats={stats} heaviest={heaviest} />}
    </div>
  );
}

function FilterChip({ label, pressed, onClick }: { label: string; pressed: boolean; onClick: () => void }) {
  return (
    <button type="button" className="filter-chip" aria-pressed={pressed} onClick={onClick}>
      {label}
    </button>
  );
}

function Stats({
  stats,
  heaviest,
}: {
  stats: ReturnType<typeof logStats>;
  heaviest: number | null;
}) {
  return (
    <div className="stats-block">
      <div className="stat-grid">
        <Stat n={stats.events} label="Nights" />
        <Stat n={stats.venues} label="Venues" />
        <HeaviestStat rating={heaviest} />
      </div>
      <CountList title="By type" rows={stats.byType} />
      <CountList title="By team and sport" rows={stats.byTeamSport} />
      <CountList title="By sport" rows={stats.bySport} />
      <CountList title="By venue" rows={stats.byVenue} />
    </div>
  );
}

/** The night with the highest friction read. Shown on You and on the page others see. */
export function heaviestNight(nights: LoggedNight[], ratings: ReadonlyMap<string, number>): number | null {
  return nights.reduce<number | null>((best, night) => {
    const r = ratingForNight(night, ratings);
    return r !== null && (best === null || r > best) ? r : best;
  }, null);
}

export function HeaviestStat({ rating }: { rating: number | null }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{rating === null ? '—' : rating}</span>
      <span className="stat-label">{rating === null ? 'Heaviest night' : `Heaviest · ${scoreLabel(rating)}`}</span>
    </div>
  );
}

export function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{n}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function CountList({ title, rows }: { title: string; rows: { label: string; count: number }[] }) {
  if (rows.length === 0) return null;
  const shown = rows.slice(0, TOP);
  const rest = rows.length - shown.length;
  return (
    <div className="count-block">
      <h3 className="count-title">{title}</h3>
      <ul className="count-list">
        {shown.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <span className="count-num">{row.count}</span>
          </li>
        ))}
      </ul>
      {rest > 0 && <p className="you-fine">and {rest} more</p>}
    </div>
  );
}

function NightRow({ night, rating }: { night: LoggedNight; rating: number | null }) {
  const facts = [loggedDateLabel(night.when), night.venue, night.neutralSite ? 'Neutral site' : night.away ? 'Away' : '']
    .filter(Boolean)
    .join(' · ');
  const extraTags = night.tags.filter((tag) => !night.title.includes(tag));
  const body = (
    <>
      {rating !== null && (
        <span className={`log-score ${scoreBand(rating)}`} aria-label={`${scoreLabel(rating)}, ${rating} out of 10`}>
          <span className="log-score-num">{rating}</span>
          <span className="log-score-word">{scoreLabel(rating)}</span>
        </span>
      )}
      <span className="log-main">
        <span className="log-title">{night.title}</span>
        <span className="log-facts">{facts}</span>
        {extraTags.length > 0 && <span className="log-facts">{extraTags.join(' · ')}</span>}
        <FactList facts={nightFacts(night)} />
      </span>
    </>
  );
  if (night.eventId) {
    return (
      <Link
        to={eventPath(night.eventId, night.metroId ?? DEFAULT_METRO.id)}
        className="log-row"
        onClick={() => clearOpenedFromMap()}
      >
        {body}
      </Link>
    );
  }
  return <div className="log-row">{body}</div>;
}
