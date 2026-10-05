import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  filterChoices,
  getPersonalLog,
  getRatedDates,
  getSaveWarning,
  logStats,
  nightBackup,
  nightFacts,
  ratingForNight,
  subscribePersonalLog,
  todayIn,
  yourNights,
  type LoggedNight,
} from '../data';
import { FactList } from '../components/FactList';
import { loggedDateLabel } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { eventPath } from '../lib/view';

const TOP = 8;

export function YouScreen({ onShowTips }: { onShowTips: () => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const nights = useMemo(() => yourNights(log), [log]);
  const today = todayIn(DEFAULT_METRO);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [exportNote, setExportNote] = useState('');

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

  const download = () => {
    const backup = nightBackup(log);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fan-friction-nights-${today}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setExportNote('Downloaded a backup of your nights.');
  };

  const nightsBlock = (
    <section className="you-block" aria-labelledby="your-nights-heading">
      <h2 id="your-nights-heading" className="you-heading">
        Your nights
      </h2>
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
      <Stats stats={stats} filter={filter} />
      {shown.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">
            {filter === 'All' ? 'No nights yet. Find one on the map.' : `No nights match ${filter}.`}
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
          K
        </span>
        <h1 className="page-title">You</h1>
      </div>

      <div className="you-tools">
        <button type="button" className="settings-row" onClick={download}>
          Export my nights
        </button>
        <p className="you-fine">
          Downloads a JSON backup. Nights you mark are saved on this phone, and a browser clear can erase them. The log that
          shipped with the app stays either way.
        </p>
        {exportNote && (
          <p className="you-fine" role="status">
            {exportNote}
          </p>
        )}
        {warning && (
          <p className="you-fine" role="status">
            {warning}
          </p>
        )}
      </div>

      {nightsBlock}

      <div className="settings">
        <div className="settings-heading">Settings</div>
        <button type="button" className="settings-row" onClick={onShowTips}>
          Show the tips again
        </button>
      </div>
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

function Stats({ stats, filter }: { stats: ReturnType<typeof logStats>; filter: string }) {
  return (
    <div className="stats-block">
      <p className="you-fine">{filter === 'All' ? 'All your nights' : `${filter} only`}</p>
      <div className="stat-grid pair">
        <Stat n={stats.events} label="Events" />
        <Stat n={stats.venues} label="Venues" />
      </div>
      <CountList title="By type" rows={stats.byType} />
      <CountList title="By team and sport" rows={stats.byTeamSport} />
      <CountList title="By sport" rows={stats.bySport} />
      <CountList title="By venue" rows={stats.byVenue} />
    </div>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
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
