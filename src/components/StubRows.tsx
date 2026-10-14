import { Link, useNavigate } from 'react-router-dom';
import { TypeIcon } from './TypeIcon';
import { entryTypeKey } from '../map/typeIcons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { entryCrowd, entryEstimateMark, watchPlaceOf, watchShareOf, type Entry, type Plan } from '../data';
import { crowdThousands } from '../map/crowdPoints';
import { clearOpenedFromMap } from '../lib/mapReturn';
import { datePath, entryPath, eventPath, tagPath } from '../lib/view';
import { StatusLine } from './ActivityLines';
import { CrowdMark, FrictionPill } from './EventTags';
import { ReadTile } from './ReadTile';

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

export function StubRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const navigate = useNavigate();
  const crowd = entryCrowd(entry);
  const share = entry.watched ? watchShareOf(entry) : undefined;
  // A place shows on a Friends watch only (Kylie's answer, build notes 3, 8.1, item 14).
  const place = entry.watched && share === 'friends' ? watchPlaceOf(entry) : undefined;
  const to = entry.eventId ? eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id) : entryPath(entry.id);
  return (
    <div className="stub-row">
      <Link to={to} className="stub-row-link" aria-label={entry.title} onClick={() => clearOpenedFromMap()} />
      <DateBox when={entry.when} />
      <span className="stub-main">
        <span className="stub-title">
          <TypeIcon typeKey={entryTypeKey(entry)} size={16} className="stub-type-icon" />
          {entry.title}
        </span>
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
          tags={entry.userTags}
          onTag={(tag) => navigate(tagPath(tag))}
          crowd={
            crowd && !entry.watched ? (
              <>
                <CrowdMark />
                {entryEstimateMark(entry)}
                {crowdThousands(crowd.count)}
              </>
            ) : undefined
          }
        />
        {entry.private && <span className="log-facts">Private</span>}
      </span>
      <ReadTile rating={rating} />
    </div>
  );
}

/** A plan still ahead: Attending, or Watching with its Private / Friends choice and place. */
export function PlanRow({ plan, rating, typeKey }: { plan: Plan; rating: number | null; /** The listed event's type, when the caller has it. */ typeKey?: string | null }) {
  const navigate = useNavigate();
  const share = plan.watch ? watchShareOf(plan) : undefined;
  const place = plan.watch && share === 'friends' ? watchPlaceOf(plan) : undefined;
  const city = plan.metroId !== DEFAULT_METRO.id ? METROS[plan.metroId]?.name : null;
  return (
    <div className="stub-row">
      <Link to={plan.manual && !plan.eventId ? entryPath(plan.id) : datePath(plan.date, plan.metroId, plan.eventId)} className="stub-row-link" aria-label={plan.title} />
      <DateBox when={{ sort: plan.date, label: '', precision: 'day' }} />
      <span className="stub-main">
        <span className="stub-title">
          <TypeIcon typeKey={typeKey ?? (plan.manual ? entryTypeKey({ kind: plan.manual.kind, sport: plan.manual.sport ?? '', title: plan.title, venue: plan.venue }) : null)} size={16} className="stub-type-icon" />
          {plan.title}
        </span>
        {(plan.venue || city) && <span className="stub-venue">{[plan.venue, city].filter(Boolean).join(' · ')}</span>}
        <StatusLine kind={plan.watch ? 'watching' : 'attending'} share={share} place={place} tags={plan.userTags} onTag={(tag) => navigate(tagPath(tag))} />
      </span>
      <ReadTile rating={rating} />
    </div>
  );
}
