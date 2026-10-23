import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { getHomeId } from '../lib/homeCity';
import { SearchButton } from '../components/SearchButton';
import { StubRow } from '../components/StubRows';
import {
  getPersonalLog,
  getSaveWarning,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribePersonalLog,
  todayIn,
  yourEntries,
  tagSummaries,
  entryTags,
} from '../data';
import { dayBandLabel, timelineGroup } from '../lib/dates';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { TagChip } from '../components/TagChip';
import { ChevronDown } from '../components/Icons';
import { Timeline, type TimelineItem } from '../components/Timeline';
import { useEdgeFade } from '../lib/useEdgeFade';

type Chip = 'all' | 'sports' | 'concerts' | 'watched' | 'attended';

/**
 * Stubs (build 6, item 6; Kylie, Oct 15 and 16): the diary as one line of time. Past stubs run down to a
 * "today" line, then the plans ahead; month bands only. A row is its date box, the title over the venue,
 * your state on its own last line, and the small read box: no crowd, ring or occasion tag (the diary
 * shows information, not conclusions). The chips and tag picker narrow the past. Logging is the tab bar's "+"
 * (build 7; the floating "+ Stub it" went with it).
 */
export function StubsScreen() {
  const filterRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const warning = useSyncExternalStore(subscribePersonalLog, getSaveWarning, getSaveWarning);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [params] = useSearchParams();
  // A favorite's "My Stubs ›" opens the log narrowed to it.
  const filter = params.get('filter');
  // The Oct 11 chips (Kylie, call 8), the first one "All".
  const [chip, setChip] = useState<Chip>('all');
  // Your own tags as a filter (T10, T13): several at once match any of them, and the type chip narrows that.
  const [picked, setPicked] = useState<string[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [tagQuery, setTagQuery] = useState('');
  // The picker filters the past, so it lists the tags on your stubs; plans carry theirs into a stub later.
  const known = useMemo(() => tagSummaries(log.added, []), [log]);
  useEffect(() => {
    clearOpenedFromMap();
  }, []);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  // Today in the home city, like Following's line (Oct 17, 2026): the old Upcoming tab counted from Los Angeles time.
  const today = todayIn(METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO);
  // Plans moved to the Upcoming tab (build 7, Kylie, Oct 21, 2026; it reverses build 6's "your own plans stay in Stubs").

  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(entries)).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries]);

  // The past, oldest first, so the line reads down into today (the Explore List's order).
  const past = useMemo(
    () =>
      entries
        .filter((entry) => !filter || entryTags(entry).includes(filter))
        // Two picked tags show stubs with either one (Kylie, Oct 14).
        .filter((entry) => picked.length === 0 || picked.some((tag) => entry.userTags?.includes(tag)))
        .filter((entry) =>
          chip === 'all' ? true : chip === 'watched' ? Boolean(entry.watched) : chip === 'attended' ? !entry.watched : chip === 'sports' ? entry.kind === 'game' : entry.kind === 'show' || entry.kind === 'festival',
        )
        .sort((a, b) => a.when.sort.localeCompare(b.when.sort) || a.title.localeCompare(b.title)),
    [entries, chip, filter, picked],
  );

  const pastItems: TimelineItem[] = past.map((entry) => ({ key: entry.id, group: timelineGroup(entry.when), node: <StubRow entry={entry} rating={ratingForEntry(entry, ratings)} /> }));

  return (
    <div className="screen page stubs-page timeline-page">
      <div className="you-header">
        <h1 className="page-title">Stubs</h1>
        <SearchButton className="you-search" />
      </div>
      {warning && (
        <p className="you-fine" role="status">
          {warning}
        </p>
      )}

      <section className="you-block stubs-list timeline-section" aria-label="Stubs">
        <div className="filter-row" role="group" aria-label="Show" ref={filterRow}>
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
                // "All" is the reset (T13 lean): it clears the tag picks too.
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
        <Timeline
          label="Your stubs"
          past={pastItems}
          future={[]}
          todayLabel={dayBandLabel(today, today)}
          emptyPast={
            // The decided empty-past copy (Kylie, Oct 16), above the line: no "Stub it" button here, only the way to today.
            <div className="card empty-card">
              <div className="card-title">{entries.length > 0 ? 'Nothing here.' : 'No stubbed events'}</div>
              <div className="empty-actions">
                <Link to="/explore" className="link-button">
                  Browse today in Explore ›
                </Link>
              </div>
            </div>
          }
          // Plans are on Upcoming (build 7), so nothing sits under the line here.
          emptyFuture={null}
        />
      </section>

    </div>
  );
}
