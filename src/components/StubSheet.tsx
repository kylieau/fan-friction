import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  getAccount,
  getPersonalLog,
  markWasThere,
  markWatched,
  placesForEvent,
  recentWatchPlaces,
  setWatchDetails,
  setRowTags,
  setEntrySeats,
  setEntryCost,
  setPlanCost,
  setPlanSeats,
  tagSummaries,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  togglePlan,
  toggleWasThere,
  VENUES,
  venueNameOn,
  watchPlaceOf,
  watchShareOf,
  setStubVisibility,
  stubDefault,
  stubLevel,
  type CrowdEvent,
  type EventPlace,
} from '../data';
import { shortLocalDate } from '../lib/dates';
import { fullTitle } from '../lib/eventTitle';
import type { ActivityKind } from '../lib/activity';
import { BookmarkIcon, TicketIcon, TvIcon } from './Icons';
import { RemoveConfirm } from './EntryLayer';
import { TagChip } from './TagChip';
import { LevelPill } from './LevelPill';
import { TagsPanel } from './TagsPanel';
import { SeatsRow } from './SeatsRow';
import { CostRow } from './CostRow';
import { useEdgeFade } from '../lib/useEdgeFade';

/**
 * The "+ Stub it" sheet (build notes 3, 4.7; mock docs/design/build3/7-stub-it-sheet.png): one sheet for
 * every way of logging. Ahead of the date: Attending / Watching / Interested; after it: Attended / Watched.
 * The same tap takes an answer back; another answer switches it. Watching gets an equal one-tap Private /
 * Friends choice, nothing preselected, and a Home preset for either; Friends adds an optional "Where?"
 * with the one helper line. Un-tapping Attended asks once (C054).
 */
export function StubSheet({ event, onClose }: { event: CrowdEvent; onClose: () => void }) {
  const placesRow = useEdgeFade();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const ahead = event.date >= todayIn(METROS[event.metroId] ?? DEFAULT_METRO);
  const plan = log.plans.find((p) => p.eventId === event.id);
  const entry = log.added.find((e) => e.eventId === event.id);
  const kind: ActivityKind | null = ahead
    ? plan
      ? plan.interested
        ? 'interested'
        : plan.watch
          ? 'watching'
          : 'attending'
      : null
    : entry
      ? entry.watched
        ? 'watched'
        : 'attended'
      : null;
  const watch = kind === 'watching' || kind === 'watched';
  const row = ahead ? plan : entry;
  const share = row && watch ? watchShareOf(row) : undefined;
  // The stub's level (build 5, stub privacy); a watch's place is shared with approved followers unless it is Private.
  const level = row ? stubLevel(row) : stubDefault();
  const placeShare: 'private' | 'friends' = level === 'private' ? 'private' : 'friends';
  const place = row && watch ? watchPlaceOf(row) : undefined;
  const [typed, setTyped] = useState(place && !/^home$/i.test(place) ? place : '');
  const [typing, setTyping] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);
  const [removing, setRemoving] = useState(false);
  const [others, setOthers] = useState<EventPlace[]>([]);
  // Your tags (build notes 4, T02): only on an answer you logged, never on Interested.
  const [tagging, setTagging] = useState(false);
  const canTag = kind !== null && kind !== 'interested';
  const myTags = row?.userTags ?? [];
  const known = tagSummaries(log.added, log.plans);
  const tagContext = {
    domain:
      event.audience.domain === 'sports' ? ('sports' as const) : event.kind === 'show' || event.kind === 'festival' ? ('concert' as const) : ('other' as const),
    sport: event.audience.domain === 'sports' ? event.audience.sport : undefined,
    ahead,
  };
  const recent = recentWatchPlaces(log).filter((p) => p.toLowerCase() !== (place ?? '').toLowerCase());
  const venue = event.place.type === 'venue' ? (VENUES[event.place.venueId] ? venueNameOn(VENUES[event.place.venueId], event.date) : null) : event.place.name;

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // The places the people you follow named here (migration 0024): only while you share one yourself.
  useEffect(() => {
    if (!account || share !== 'friends' || !place || /^home$/i.test(place)) {
      setOthers([]);
      return;
    }
    let current = true;
    placesForEvent(event.id, place).then((list) => current && setOthers(list));
    return () => {
      current = false;
    };
  }, [account?.id, share, place, event.id]);

  const answer = (next: ActivityKind) => {
    setRemoving(false);
    if (ahead) {
      togglePlan(event, next === 'watching' ? 'watch' : next === 'interested' ? 'interested' : 'attend');
      return;
    }
    if (next === 'attended') {
      if (kind === 'attended') setRemoving(true);
      else markWasThere(event);
      return;
    }
    if (kind === 'watched') setRemoving(true);
    else markWatched(event);
  };

  const details = async (nextShare: 'private' | 'friends' | undefined, nextPlace: string | undefined) => {
    setFailed(await setWatchDetails(event.id, nextShare, nextPlace));
  };

  const choice = (value: ActivityKind, label: string, icon: ReactNode) => (
    <button type="button" className={`stub-choice${kind === value ? ' on' : ''}`} aria-pressed={kind === value} onClick={() => answer(value)}>
      {icon}
      {label}
    </button>
  );

  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Stub it" onClick={onClose}>
      <div className="action-sheet stub-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        {tagging && canTag ? (
          <TagsPanel tags={myTags} onChange={(next) => row && setRowTags(ahead ? 'plan' : 'entry', row.id, next)} onDone={() => setTagging(false)} context={tagContext} known={known} />
        ) : (
          <>
            <h2 className="stub-sheet-title">+ Stub it</h2>
            <p className="stub-sheet-sub">{[fullTitle(event), shortLocalDate(event.date), venue].filter(Boolean).join(' · ')}</p>
            <div className="stub-choices" role="group" aria-label={ahead ? 'Your plan' : 'Your stub'}>
              {ahead ? (
                <>
                  {choice('attending', 'Attending', <TicketIcon size={18} />)}
                  {choice('watching', 'Watching', <TvIcon />)}
                  {choice('interested', 'Interested', <BookmarkIcon />)}
                </>
              ) : (
                <>
                  {choice('attended', 'Attended', <TicketIcon size={18} />)}
                  {choice('watched', 'Watched', <TvIcon />)}
                </>
              )}
            </div>
            {removing && (
              <RemoveConfirm
                compact
                stamped={Boolean(entry?.stamp)}
                onKeep={() => setRemoving(false)}
                onRemove={() => {
                  setRemoving(false);
                  toggleWasThere(event);
                }}
              />
            )}
            {/* Who sees this (build 5, stub privacy; board privacy-r2 3a–3c): one pill for Attending, Watching and
                Interested, starting at your default. Signed out, a stub reaches nobody, so there is no pill. */}
            {row && ahead && account && (
              <>
                <div className="stub-level">
                  <span className="stub-level-label">Who sees this</span>
                  <LevelPill value={level} defaultLevel={stubDefault()} onChange={(next) => void setStubVisibility(event.id, next).then(setFailed)} />
                </div>
                {level === 'private' && <p className="stub-helper">Only you will see this</p>}
                {level !== 'private' && watch && <p className="stub-helper">Approved friends will see where you're watching</p>}
              </>
            )}
            {watch && row && (
              <>
                {(
                  <>
                    <p className="stub-where">
                      Where? <span className="stub-where-optional">optional</span>
                    </p>
                    <div className="filter-row stub-places" role="group" aria-label="Where" ref={placesRow}>
                      <button
                        type="button"
                        className="filter-chip"
                        aria-pressed={Boolean(place && /^home$/i.test(place))}
                        onClick={() => void details(placeShare, place && /^home$/i.test(place) ? undefined : 'Home')}
                      >
                        Home
                      </button>
                      {place && !/^home$/i.test(place) && (
                        <button type="button" className="filter-chip" aria-pressed onClick={() => void details(placeShare, undefined)}>
                          {place}
                        </button>
                      )}
                      {recent.map((p) => (
                        <button key={p} type="button" className="filter-chip" onClick={() => void details(placeShare, p)}>
                          {p} · recent
                        </button>
                      ))}
                      {others.map((p) => (
                        <button key={`o-${p.place}`} type="button" className="filter-chip" onClick={() => void details(placeShare, p.place)}>
                          {p.place} · {p.people} here
                        </button>
                      ))}
                      {!typing && (
                        <button type="button" className="filter-chip" onClick={() => setTyping(true)}>
                          Search places
                        </button>
                      )}
                    </div>
                    {typing && (
                      <input
                        className="account-input"
                        value={typed}
                        placeholder="Where"
                        maxLength={80}
                        autoFocus
                        onChange={(ev) => setTyped(ev.target.value)}
                        onBlur={() => {
                          setTyping(false);
                          if (typed.trim() && typed.trim() !== place) void details(placeShare, typed);
                        }}
                        onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
                        aria-label="Where you're watching"
                      />
                    )}
                  </>
                )}
                {failed && (
                  <p className="field-error" role="alert">
                    {failed}
                  </p>
                )}
              </>
            )}
            {canTag && (
              <div className="stub-tags-row" role="group" aria-label="Tags">
                <span className="stub-tags-label">Tags</span>
                {myTags.map((tag) => (
                  <TagChip
                    key={tag}
                    tag={tag}
                    onRemove={() =>
                      row &&
                      setRowTags(
                        ahead ? 'plan' : 'entry',
                        row.id,
                        myTags.filter((t) => t !== tag),
                      )
                    }
                  />
                ))}
                <button type="button" className="stub-tags-add" onClick={() => setTagging(true)}>
                  + Add tag
                </button>
              </div>
            )}
            {/* Seat and cost (build 7, §3.5; same-day logging, Locked option A): an Attended stub, and an Attending plan while
                the game is on; both carry into the stub when the date passes. Cost on Watched and Watching too; never on
                Interested. Tags, Seat and Cost read as one optional group: same blue, no divider. */}
            {kind === 'attended' && entry && event.kind !== 'live-broadcast' && <SeatsRow seats={entry.seats} onChange={(next) => setEntrySeats(entry.id, next)} />}
            {kind === 'attending' && plan && event.kind !== 'live-broadcast' && <SeatsRow seats={plan.seats} onChange={(next) => setPlanSeats(plan.id, next)} />}
            {(kind === 'attended' || kind === 'watched') && entry && <CostRow cost={entry.cost} watched={kind === 'watched'} onChange={(next) => setEntryCost(entry.id, next)} />}
            {(kind === 'attending' || kind === 'watching') && plan && <CostRow cost={plan.cost} watched={kind === 'watching'} onChange={(next) => setPlanCost(plan.id, next)} />}
        <button type="button" className="gold-button stub-done" onClick={onClose}>
              Done
            </button>
          </>
        )}
      </div>
    </div>
  );
}
