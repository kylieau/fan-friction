import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { SearchButton } from '../components/SearchButton';
import { PlanRow, StubRow } from '../components/StubRows';
import { PlusIcon } from '../components/Icons';
import {
  canSignIn,
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
  yourEntries,
  tagSummaries,
  type Entry,
} from '../data';
import { timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { TagChip } from '../components/TagChip';
import { ChevronDown } from '../components/Icons';

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
  // Your own tags as a filter (T10, T13): several at once match any of them, and the type chip narrows that.
  const [picked, setPicked] = useState<string[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [tagQuery, setTagQuery] = useState('');
  // The picker filters Recent, so it lists the tags on your stubs; plans carry theirs into a stub later.
  const known = useMemo(() => tagSummaries(log.added, []), [log]);
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
        .filter((entry) => picked.length === 0 || picked.some((tag) => entry.userTags?.includes(tag)))
        .filter((entry) =>
          chip === 'all' ? true : chip === 'watched' ? Boolean(entry.watched) : chip === 'attended' ? !entry.watched : chip === 'sports' ? entry.kind === 'game' : entry.kind === 'show' || entry.kind === 'festival',
        ),
    [entries, chip, filter, picked],
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
              <button
                key={id}
                type="button"
                className="filter-chip"
                aria-pressed={chip === id}
                onClick={() => {
                  setChip(id);
                  // "All" is Recent's reset (T13 lean): it clears the tag picks too.
                  if (id === 'all') {
                    setPicked([]);
                    setPickerOpen(false);
                  }
                }}
              >
                {label}
              </button>
            ))}
            {known.length > 0 && (
              <button type="button" className="filter-chip" aria-pressed={picked.length > 0} aria-expanded={pickerOpen} onClick={() => setPickerOpen((v) => !v)}>
                {picked.length > 0 ? `Tag · ${picked.length}` : 'Tag'} <ChevronDown />
              </button>
            )}
          </div>
          {pickerOpen && (
            <div className="card tag-picker" role="group" aria-label="Tags">
              {known.length > 6 && (
                <input className="account-input" type="search" value={tagQuery} placeholder="Search your tags" aria-label="Search your tags" onChange={(ev) => setTagQuery(ev.target.value)} />
              )}
              <div className="tag-picker-list">
                {known
                  .filter((k) => k.tag.includes(tagQuery.trim().toLowerCase()))
                  .map((k) => (
                    <label key={k.tag} className="tag-picker-row">
                      <input
                        type="checkbox"
                        checked={picked.includes(k.tag)}
                        onChange={() => setPicked((cur) => (cur.includes(k.tag) ? cur.filter((t) => t !== k.tag) : [...cur, k.tag]))}
                      />
                      <TagChip tag={k.tag} />
                      <span className="tags-panel-count">{k.count}</span>
                    </label>
                  ))}
              </div>
            </div>
          )}
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
