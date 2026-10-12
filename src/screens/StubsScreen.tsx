import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { ReadTile } from '../components/ReadTile';
import { SearchButton } from '../components/SearchButton';
import { FrictionPill } from '../components/EventTags';
import { StatusLine } from '../components/ActivityLines';
import { CrowdMark } from '../components/EventTags';
import { PlusIcon } from '../components/Icons';
import {
  canSignIn,
  entryCrowd,
  getAccount,
  getPersonalLog,
  getSaveWarning,
  nightKey,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  upcomingPlans,
  watchPlaceOf,
  watchShareOf,
  yourEntries,
  type Entry,
  type Plan,
} from '../data';
import { crowdThousands } from '../map/crowdPoints';
import { timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { datePath, entryPath, eventPath } from '../lib/view';

type Tab = 'recent' | 'upcoming';
type Chip = 'all' | 'sports' | 'concerts' | 'watched' | 'attended';

/**
 * Stubs (build notes 3, 4.4; docs/design/build3/4-stubs.png): the diary. Recent first, then Upcoming.
 * Recent runs in month bands, each row a date box, the title over the venue, the friction word from
 * its stamp, your status with the crowd on attended rows, and the small read box with its word. The
 * floating "+ Stub it" shrinks to "+" as the list scrolls; the list keeps room under it.
 */
export function StubsScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [params] = useSearchParams();
  // A favorite's "My Stubs ›" opens the log narrowed to it.
  const filter = params.get('filter');
  const [tab, setTab] = useState<Tab>('recent');
  // The Oct 11 chips (Kylie, call 8) stay under Recent; the first one is "All" now that Recent names the tab.
  const [chip, setChip] = useState<Chip>('all');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const plansAhead = useMemo(() => upcomingPlans(todayIn(DEFAULT_METRO), log), [log]);

  useEffect(() => {
    let current = true;
    scoresForNights([...nightsOf(entries), ...plansAhead.map((plan) => ({ metroId: plan.metroId, date: plan.date }))]).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries, plansAhead]);

  const recent = useMemo(
    () =>
      entries
        .filter((entry) => !filter || entry.tags.includes(filter))
        .filter((entry) =>
          chip === 'all' ? true : chip === 'watched' ? Boolean(entry.watched) : chip === 'attended' ? !entry.watched : chip === 'sports' ? entry.kind === 'game' : entry.kind === 'show' || entry.kind === 'festival',
        ),
    [entries, chip, filter],
  );

  const emptyUpcoming = tab === 'upcoming' && plansAhead.length === 0;

  return (
    <div className="screen page stubs-page" onScroll={(event) => setScrolled((event.target as HTMLElement).scrollTop > 40)}>
      <div className="you-header">
        <h1 className="page-title">Stubs</h1>
        <SearchButton className="you-search" />
      </div>
      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}
      <div className="segmented" role="tablist" aria-label="Stubs">
        <button type="button" role="tab" aria-selected={tab === 'recent'} onClick={() => setTab('recent')}>
          Recent
        </button>
        <button type="button" role="tab" aria-selected={tab === 'upcoming'} onClick={() => setTab('upcoming')}>
          Upcoming
        </button>
      </div>

      {tab === 'recent' && (
        <section className="you-block stubs-list" aria-label="Recent">
          <div className="filter-row" role="group" aria-label="Show">
            {(
              [
                ['all', 'All'],
                ['sports', 'Sports'],
                ['concerts', 'Concerts'],
                ['watched', 'Watched'],
                ['attended', 'Attended'],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" className="filter-chip" aria-pressed={chip === id} onClick={() => setChip(id)}>
                {label}
              </button>
            ))}
          </div>
          {recent.length === 0 ? (
            <div className="card empty-card">
              <div className="card-title">{entries.length > 0 ? 'Nothing here.' : canSignIn() && !account ? 'No stubs on this phone.' : 'No stubs yet.'}</div>
              <div className="empty-actions">
                <Link to="/you/add" className="gold-button small">
                  + Stub it
                </Link>
                <Link to="/explore" className="link-button">
                  Browse today in Explore ›
                </Link>
              </div>
            </div>
          ) : (
            <div className="timeline">
              {groupByTime(recent).map(([group, list]) => (
                <section key={group} className="timeline-group" aria-label={group}>
                  <h3 className="timeline-heading month-band">{group}</h3>
                  <ul className="log-list">
                    {list.map((entry) => (
                      <li key={entry.id}>
                        <StubRow entry={entry} rating={ratingForEntry(entry, ratings)} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </section>
      )}

      {tab === 'upcoming' &&
        (emptyUpcoming ? (
          <div className="card empty-card stubs-empty">
            <span className="stubs-empty-mark" aria-hidden>
              <PlusIcon />
            </span>
            <div className="card-title">Nothing upcoming yet</div>
            <div className="card-body">Events you plan to attend or watch show here.</div>
            <Link to="/you/add" className="gold-button">
              + Stub it
            </Link>
            <Link to="/explore" className="text-link">
              Browse today in Explore ›
            </Link>
          </div>
        ) : (
          <section className="you-block stubs-list" aria-label="Upcoming">
            <ul className="log-list">
              {plansAhead.map((plan) => (
                <li key={plan.id}>
                  <PlanRow plan={plan} rating={ratings.get(nightKey(plan.metroId, plan.date)) ?? null} />
                </li>
              ))}
            </ul>
          </section>
        ))}

      {/* The extended floating button (build notes 3, 4.4): bottom right above the bar; "+" alone once the list has scrolled. */}
      {!emptyUpcoming && (
        <Link to="/you/add" className={`stub-fab${scrolled ? ' small' : ''}`} aria-label="Stub it">
          <PlusIcon />
          <span className="stub-fab-label">Stub it</span>
        </Link>
      )}
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

/** The weekday over the day number, as on the carousel; a rough date shows its label instead. */
function DateBox({ when }: { when: Entry['when'] }) {
  if (when.precision !== 'day') {
    return (
      <span className="stub-date rough" aria-label={when.label || 'Date not written down'}>
        {when.label.slice(0, 4) || '—'}
      </span>
    );
  }
  const [y, m, d] = when.sort.split('-').map(Number);
  const day = new Date(Date.UTC(y, m - 1, d));
  return (
    <span className="stub-date">
      <span className="stub-date-wd">{day.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' })}</span>
      <span className="stub-date-num">{d}</span>
    </span>
  );
}

function StubRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const crowd = entryCrowd(entry);
  const share = entry.watched ? watchShareOf(entry) : undefined;
  // A place shows on a Friends watch only (Kylie's answer, build notes 3, 8.1, item 14).
  const place = entry.watched && share === 'friends' ? watchPlaceOf(entry) : undefined;
  const to = entry.eventId ? eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id) : entryPath(entry.id);
  return (
    <Link to={to} className="stub-row" onClick={() => clearOpenedFromMap()}>
      <DateBox when={entry.when} />
      <span className="stub-main">
        <span className="stub-title">{entry.title}</span>
        {entry.venue && <span className="stub-venue">{[entry.venue, entry.neutralSite ? 'Neutral site' : entry.away ? 'Away' : null].filter(Boolean).join(' · ')}</span>}
        {entry.stamp?.friction && entry.stamp.friction !== 'Low' && (
          <span className="stub-tags">
            <FrictionPill level={entry.stamp.friction} />
          </span>
        )}
        <StatusLine
          kind={entry.watched ? 'watched' : 'attended'}
          share={share}
          place={place}
          crowd={
            crowd && !entry.watched ? (
              <>
                <CrowdMark />
                {crowdThousands(crowd.count)}
              </>
            ) : undefined
          }
        />
        {entry.private && <span className="log-facts">Private</span>}
      </span>
      <ReadTile rating={rating} />
    </Link>
  );
}

/** A plan still ahead: Attending, or Watching with its Private / Friends choice and place. */
function PlanRow({ plan, rating }: { plan: Plan; rating: number | null }) {
  const share = plan.watch ? watchShareOf(plan) : undefined;
  const place = plan.watch && share === 'friends' ? watchPlaceOf(plan) : undefined;
  const city = plan.metroId !== DEFAULT_METRO.id ? METROS[plan.metroId]?.name : null;
  return (
    <Link to={datePath(plan.date, plan.metroId, plan.eventId)} className="stub-row">
      <DateBox when={{ sort: plan.date, label: '', precision: 'day' }} />
      <span className="stub-main">
        <span className="stub-title">{plan.title}</span>
        {(plan.venue || city) && <span className="stub-venue">{[plan.venue, city].filter(Boolean).join(' · ')}</span>}
        <StatusLine kind={plan.watch ? 'watching' : 'attending'} share={share} place={place} />
      </span>
      <ReadTile rating={rating} />
    </Link>
  );
}
