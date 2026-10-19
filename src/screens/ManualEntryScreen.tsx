import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { METROS } from '../config/metros';
import {
  cityDayRange,
  entryFacts,
  removePlan,
  setRowTags,
  tagSummaries,
  getPersonalLog,
  nightsOf,
  rangeLabel,
  ratingForEntry,
  scoresForNights,
  subscribePersonalLog,
  weatherGlyph,
  yourEntries,
} from '../data';
import { comparePath, datePath } from '../lib/view';
import { EntryLayer, RemoveFromLog } from '../components/EntryLayer';
import { FactList } from '../components/FactList';
import { StatusLine } from '../components/ActivityLines';
import { TagChip } from '../components/TagChip';
import { TagsPanel } from '../components/TagsPanel';
import { ReadTile } from '../components/ReadTile';
import { loggedDateLabel } from '../lib/dates';
import { TitleText } from '../components/TitleText';
import { BackLink } from '../components/BackLink';

/**
 * An event typed in by hand: no catalog event behind it, so no crowd or
 * competition cards. Everything a listed event's page shows where the data
 * exists (Kylie, Oct 9, C053): the date, the day's weather, the nearby read,
 * Compare with…, and your layer.
 */
export function ManualEntryScreen() {
  const { id = '' } = useParams();
  const plan = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog).plans.find((p) => p.id === id);
  if (plan) return <ManualPlanPage planId={plan.id} />;
  return <ManualEntryPage />;
}

/**
 * A plan typed in by hand (an event not in the catalog, still ahead): it has no event page, so this is
 * its page: the title, when and where, your tags, and Remove. It becomes a stub when the date passes.
 */
function ManualPlanPage({ planId }: { planId: string }) {
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const plan = log.plans.find((p) => p.id === planId);
  const [tagging, setTagging] = useState(false);
  const [asking, setAsking] = useState(false);
  if (!plan) return null;
  const kind = plan.manual?.kind;
  const sub = [loggedDateLabel({ sort: plan.date, label: '', precision: 'day' }), plan.venue, METROS[plan.metroId]?.name].filter(Boolean).join(' · ');
  return (
    <div className="screen page event-page">
      <BackLink to="/stubs" />
      <header className="event-head">
        <h1 className="page-title"><TitleText text={plan.title} /></h1>
        <div className="event-sub">{sub}</div>
      </header>
      <div className="event-marks">
        <StatusLine kind={plan.watch ? 'watching' : 'attending'} />
      </div>
      <section className="card entry-layer" aria-label="Your tags">
        {tagging ? (
          <TagsPanel
            tags={plan.userTags ?? []}
            onChange={(next) => setRowTags('plan', plan.id, next)}
            onDone={() => setTagging(false)}
            context={{ domain: kind === 'game' ? 'sports' : kind === 'show' || kind === 'festival' ? 'concert' : 'other', sport: plan.manual?.sport?.toLowerCase(), ahead: true }}
            known={tagSummaries(log.added, log.plans)}
          />
        ) : (
          <div className="stub-tags-row" role="group" aria-label="Tags">
            <span className="stub-tags-label">Tags</span>
            {(plan.userTags ?? []).map((tag) => (
              <TagChip key={tag} tag={tag} onRemove={() => setRowTags('plan', plan.id, (plan.userTags ?? []).filter((t) => t !== tag))} />
            ))}
            <button type="button" className="stub-tags-add" onClick={() => setTagging(true)}>
              + Add tag
            </button>
          </div>
        )}
      </section>
      {asking ? (
        <div className="card tag-menu" role="alertdialog" aria-label="Remove plan">
          <div className="tag-menu-title">Remove this plan?</div>
          <div className="entry-form-actions">
            <button type="button" className="link-button" onClick={() => setAsking(false)}>
              Keep
            </button>
            <button
              type="button"
              className="gold-button small"
              onClick={() => {
                removePlan(plan.id);
                navigate('/stubs', { replace: true });
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button type="button" className="link-button remove-entry" onClick={() => setAsking(true)}>
          Remove plan
        </button>
      )}
    </div>
  );
}

function ManualEntryPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const entry = yourEntries(log).find((e) => e.id === id);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    if (!entry) return;
    let current = true;
    scoresForNights(nightsOf([entry])).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [entry]);

  if (!entry) {
    return (
      <div className="screen page">
        <BackLink to="/stubs" />
        <h1 className="page-title">Not in your log</h1>
      </div>
    );
  }

  const rating = ratingForEntry(entry, ratings);
  const city = entry.metroId ? METROS[entry.metroId]?.name : undefined;
  const exact = entry.when.precision === 'day' && entry.metroId ? { metroId: entry.metroId, date: entry.when.sort } : null;
  const weather = exact ? cityDayRange(exact.metroId, exact.date) : undefined;
  const sub = [loggedDateLabel(entry.when), entry.venue, city, entry.away ? 'Away' : ''].filter(Boolean).join(' · ');

  return (
    <div className="screen page event-page">
      <BackLink to="/stubs" />

      <header className="event-head">
        <h1 className="page-title"><TitleText text={entry.title} /></h1>
        <div className="event-sub">
          {sub}
          {weather && (
            <>
              {' · '}
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(weather)}
              </span>{' '}
              {rangeLabel(weather, exact!.metroId)}
            </>
          )}
        </div>
        <FactList facts={entryFacts(entry)} />
      </header>

      {rating !== null && (
        <section className="card verdict manual-read">
          <ReadTile rating={rating} size="big" />
          <div className="verdict-why">Nearby verdict: the big events in {city} that date.</div>
        </section>
      )}

      <div className="event-marks">
        <EntryLayer entry={entry} />
      </div>

      {exact && (
        <Link to={datePath(exact.date, exact.metroId)} className="text-link">
          That date in {city}
        </Link>
      )}
      {exact && (
        <Link to={comparePath(exact)} className="text-link compare-link">
          Compare with…
        </Link>
      )}
      <RemoveFromLog entry={entry} onRemoved={() => navigate('/stubs', { replace: true })} />
    </div>
  );
}
