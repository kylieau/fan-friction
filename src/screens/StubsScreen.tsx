import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import { FactList } from '../components/FactList';
import { TvIcon } from '../components/Icons';
import {
  canSignIn,
  entryFacts,
  getAccount,
  getPersonalLog,
  getSaveWarning,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  upcomingPlans,
  yourEntries,
  type Entry,
} from '../data';
import { loggedDateLabel, shortLocalDate, timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { datePath, entryPath, eventPath } from '../lib/view';

/**
 * Stubs: your log, its own tab since build 3 (Kylie, Oct 11, 2026; docs/design/build3/4-stubs.png).
 * Recent · Sports · Concerts · Watched · Attended, Recent by default (newest event first). The
 * Coming up strip holds plans still ahead. This commit moves the list out of You as it was; the
 * build 3 layout follows.
 */
export function StubsScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [params] = useSearchParams();
  // A favorite's "My Stubs ›" opens the log narrowed to it.
  const filter = params.get('filter');
  const [stubs, setStubs] = useState<'recent' | 'sports' | 'concerts' | 'watched' | 'attended'>('recent');
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const plansAhead = useMemo(() => upcomingPlans(todayIn(DEFAULT_METRO), log), [log]);

  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(entries)).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries]);

  const stubList = useMemo(
    () =>
      entries
        .filter((entry) => !filter || entry.tags.includes(filter))
        .filter((entry) =>
          stubs === 'recent' ? true : stubs === 'watched' ? Boolean(entry.watched) : stubs === 'attended' ? !entry.watched : stubs === 'sports' ? entry.kind === 'game' : entry.kind === 'show' || entry.kind === 'festival',
        ),
    [entries, stubs, filter],
  );

  return (
    <div className="screen page">
      <div className="you-header">
        <h1 className="page-title">Stubs</h1>
        <SearchButton className="you-search" />
      </div>
      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}
      <section className="you-block" aria-label="Your events">
        <Link to="/you/add" className="log-add-row">
          + Log an event
        </Link>
        <div className="filter-row" role="group" aria-label="Show">
          {(
            [
              ['recent', 'Recent'],
              ['sports', 'Sports'],
              ['concerts', 'Concerts'],
              ['watched', 'Watched'],
              ['attended', 'Attended'],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" className="filter-chip" aria-pressed={stubs === id} onClick={() => setStubs(id)}>
              {label}
            </button>
          ))}
        </div>
        {plansAhead.length > 0 && (
          <div className="coming-strip" aria-label="Coming up">
            <span className="coming-strip-label">Coming up</span>
            <ul className="coming-strip-list">
              {plansAhead.slice(0, 6).map((plan) => (
                <li key={plan.id}>
                  <Link to={datePath(plan.date, plan.metroId, plan.eventId)} className="coming-chip">
                    <span className="coming-chip-date">{shortLocalDate(plan.date)}</span>
                    <span className="coming-chip-title">{plan.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {stubList.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">{entries.length > 0 ? 'Nothing here.' : canSignIn() && !account ? 'No events on this phone.' : 'No events yet.'}</div>
            <div className="empty-actions">
              <Link to="/you/add" className="gold-button small">
                Log an event
              </Link>
              <Link to="/explore" className="link-button">
                Find one on the map
              </Link>
            </div>
          </div>
        ) : (
          <div className="timeline">
            {groupByTime(stubList).map(([group, list]) => (
              <section key={group} className="timeline-group" aria-label={group}>
                <h3 className="timeline-heading">{group}</h3>
                <ul className="log-list">
                  {list.map((entry) => (
                    <li key={entry.id}>
                      <EntryRow entry={entry} rating={ratingForEntry(entry, ratings)} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/** Entries in the order given, split into month (or year) groups for the timeline. */
function groupByTime(entries: Entry[]): [string, Entry[]][] {
  const groups: [string, Entry[]][] = [];
  for (const entry of entries) {
    const label = timelineGroup(entry.when);
    const last = groups[groups.length - 1];
    if (last && last[0] === label) last[1].push(entry);
    else groups.push([label, [entry]]);
  }
  return groups;
}

function EntryRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const facts = [loggedDateLabel(entry.when), entry.venue, entry.neutralSite ? 'Neutral site' : entry.away ? 'Away' : '']
    .filter(Boolean)
    .join(' · ');
  const extraTags = entry.tags.filter((tag) => !entry.title.includes(tag));
  const body = (
    <>
      {rating !== null && <ReadTile rating={rating} />}
      <span className="log-main">
        <span className="log-title">{entry.title}</span>
        <span className="log-facts">{facts}</span>
        {extraTags.length > 0 && <span className="log-facts">{extraTags.join(' · ')}</span>}
        <FactList facts={entryFacts(entry)} />
      </span>
      {entry.watched && (
        <span className="status-label watched-label">
          <TvIcon /> Watched
        </span>
      )}
      {entry.private && <span className="status-label">Private</span>}
    </>
  );
  const to = entry.eventId ? eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id) : entryPath(entry.id);
  return (
    <Link to={to} className="log-row" onClick={() => clearOpenedFromMap()}>
      {body}
    </Link>
  );
}
