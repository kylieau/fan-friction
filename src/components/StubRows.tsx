import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TypeIcon } from './TypeIcon';
import { entryTypeKey } from '../map/typeIcons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { getAccount, isOutsideGamePlan, stubLevel, watchPlaceOf, watchShareOf, type Entry, type Plan } from '../data';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { shortLocalDate } from '../lib/dates';
import { datePath, entryPath, eventPath, tagPath } from '../lib/view';
import { StatusLine } from './ActivityLines';
import { ReadTile } from './ReadTile';
import { TitleText } from './TitleText';

/** The weekday over the day number, as on the carousel; a rough date shows its label instead. */
export function DateBox({ when }: { when: Entry['when'] }) {
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

/**
 * The level a row's status line shows (B5-05, build 6): signed in, the stub's stored level (Anyone, Friends or
 * Private) on every row; signed out, the old Private / Friends word on a watch only.
 */
function rowShare(row: Pick<Entry, 'visibility' | 'private' | 'watchShare' | 'watchedPlacePrivate' | 'watchedWhere' | 'watchedPlace'>, watch: boolean): 'anyone' | 'friends' | 'private' | undefined {
  if (getAccount()) return stubLevel(row);
  return watch ? watchShareOf(row) : undefined;
}

/**
 * A stub on the Stubs timeline (build 6, item 6): the date box, the title over the venue, your state on its own
 * last line with the stub's level, and the small read box. No crowd, friction ring or occasion tag: the diary
 * shows information, not conclusions; the stamp and crowd stay in the data for the year stats.
 */
export function StubRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const navigate = useNavigate();
  const share = rowShare(entry, Boolean(entry.watched));
  // A place shows on a shared watch only (Kylie's answer, build notes 3, 8.1, item 14).
  const place = entry.watched && share && share !== 'private' ? watchPlaceOf(entry) : undefined;
  const to = entry.eventId ? eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id) : entryPath(entry.id);
  return (
    <div className="stub-row">
      <Link to={to} className="stub-row-link" aria-label={entry.title} onClick={() => clearOpenedFromMap()} />
      <DateBox when={entry.when} />
      <span className="stub-main">
        <span className="stub-title">
          <TypeIcon typeKey={entryTypeKey(entry)} size={16} className="stub-type-icon" />
          <TitleText text={entry.title} />
        </span>
        {entry.venue && <span className="stub-venue">{[entry.venue, entry.neutralSite ? 'Neutral site' : entry.away ? 'Away' : null].filter(Boolean).join(' · ')}</span>}
        <StatusLine kind={entry.watched ? 'watched' : 'attended'} share={share} place={place} tags={entry.userTags} onTag={(tag) => navigate(tagPath(tag))} />
      </span>
      {/* An entry logged "elsewhere" has no city, so no date page: its tile stays plain, like a rough date (found Oct 19, 2026: it opened the default city's page). */}
      <DateReadLink date={entry.when.precision === 'day' && entry.metroId ? entry.when.sort : null} metroId={entry.metroId ?? DEFAULT_METRO.id} eventId={entry.eventId}>
        <ReadTile rating={rating} />
      </DateReadLink>
    </div>
  );
}

/**
 * The read tile as its own tap (Kylie, Oct 19): it opens that date's page, like the Faves rows' tiles, while the rest
 * of the row opens the event. A stub with a rough date has no day page, so its tile stays plain.
 */
function DateReadLink({ date, metroId, eventId, children }: { date: string | null; metroId: string; eventId?: string; children: ReactNode }) {
  if (!date) return <>{children}</>;
  return (
    <Link to={datePath(date, metroId, eventId)} className="stub-read-link" aria-label={`The read for ${shortLocalDate(date)}`}>
      {children}
    </Link>
  );
}

/** A plan still ahead: Attending, or Watching, with its level and place. */
export function PlanRow({ plan, rating, typeKey }: { plan: Plan; rating: number | null; /** The listed event's type, when the caller has it. */ typeKey?: string | null }) {
  const navigate = useNavigate();
  const share = rowShare({ visibility: plan.visibility, watchShare: plan.watchShare, watchedPlace: plan.watchedPlace }, Boolean(plan.watch));
  const place = plan.watch && share && share !== 'private' ? watchPlaceOf(plan) : undefined;
  const city = plan.metroId !== DEFAULT_METRO.id ? METROS[plan.metroId]?.name : null;
  return (
    <div className="stub-row">
      {/* The row opens the event, the read tile the date (Kylie, Oct 19, 2026), for every plan with a catalog event, not only games. */}
      <Link to={plan.manual && !plan.eventId ? entryPath(plan.id) : plan.eventId ? eventPath(plan.eventId, plan.metroId) : datePath(plan.date, plan.metroId)} className="stub-row-link" aria-label={plan.title} />
      <DateBox when={{ sort: plan.date, label: '', precision: 'day' }} />
      <span className="stub-main">
        <span className="stub-title">
          <TypeIcon typeKey={typeKey ?? (plan.manual ? entryTypeKey({ kind: plan.manual.kind, sport: plan.manual.sport ?? '', title: plan.title, venue: plan.venue }) : null)} size={16} className="stub-type-icon" />
          <TitleText text={plan.title} />
        </span>
        {(plan.venue || city) && <span className="stub-venue">{[plan.venue, city].filter(Boolean).join(' · ')}</span>}
        <StatusLine kind={plan.watch ? 'watching' : 'attending'} share={share} place={place} tags={plan.userTags} onTag={(tag) => navigate(tagPath(tag))} />
      </span>
      {/* An away game outside the covered cities has no read (its plan is filed under the team's city). */}
      <DateReadLink date={isOutsideGamePlan(plan) ? null : plan.date} metroId={plan.metroId} eventId={plan.eventId}>
        <ReadTile rating={isOutsideGamePlan(plan) ? null : rating} />
      </DateReadLink>
    </div>
  );
}
