import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteTag,
  getPersonalLog,
  nightKey,
  nightsOf,
  ratingForEntry,
  renameTag,
  normalizeTag,
  scoresForNights,
  subscribePersonalLog,
  tagSummaries,
  todayIn,
  upcomingPlans,
  yourEntries,
  TAG_MAX,
} from '../data';
import { DEFAULT_METRO } from '../config/metros';
import { tagPath } from '../lib/view';
import { PlanRow, StubRow } from '../components/StubRows';
import { TagChip } from '../components/TagChip';
import { ListBand } from '../components/ListBand';
import { BackLink } from '../components/BackLink';

/**
 * One of your tags (build notes 4, "Stub tags" 4; T02, T07): the tag, "5 stubs · 4 attended · 1 watched",
 * a small "Coming up" band for plans carrying it, then the stubs with it grouped by year. The "…" menu
 * renames, merges and deletes; deleting a tag never deletes a stub.
 */
export function TagScreen() {
  const { tag: raw = '' } = useParams();
  const tag = raw;
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [menu, setMenu] = useState<'closed' | 'open' | 'rename' | 'merge' | 'delete'>('closed');
  const [renaming, setRenaming] = useState(tag);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  const stubs = useMemo(() => yourEntries(log).filter((e) => e.userTags?.includes(tag)), [log, tag]);
  // Interested never carries tags (T02): a plan counts here only when it is Attending or Watching.
  const ahead = useMemo(() => upcomingPlans(todayIn(DEFAULT_METRO), log).filter((p) => !p.interested && p.userTags?.includes(tag)), [log, tag]);
  const others = useMemo(() => tagSummaries(log.added, log.plans).filter((t) => t.tag !== tag), [log, tag]);

  useEffect(() => {
    let current = true;
    scoresForNights([...nightsOf(stubs), ...ahead.map((p) => ({ metroId: p.metroId, date: p.date }))]).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [stubs, ahead]);

  const attended = stubs.filter((e) => !e.watched).length;
  const watched = stubs.length - attended;
  const summary = [`${stubs.length} ${stubs.length === 1 ? 'stub' : 'stubs'}`, attended > 0 ? `${attended} attended` : null, watched > 0 ? `${watched} watched` : null]
    .filter(Boolean)
    .join(' · ');
  const years = useMemo(() => {
    const groups: [string, typeof stubs][] = [];
    for (const entry of stubs) {
      const year = entry.when.sort > '0001' ? entry.when.sort.slice(0, 4) : 'Date not written down';
      const last = groups[groups.length - 1];
      if (last && last[0] === year) last[1].push(entry);
      else groups.push([year, [entry]]);
    }
    return groups;
  }, [stubs]);

  const total = stubs.length + ahead.length;
  const submitRename = (to: string) => {
    const next = normalizeTag(to);
    if (!next) return;
    renameTag(tag, next);
    setMenu('closed');
    navigate(tagPath(next), { replace: true });
  };

  return (
    <div className="screen page tag-page">
      <BackLink to="/you/stubs" />
      <div className="tag-page-head">
        <h1 className="tag-page-title">
          <TagChip tag={tag} size="sheet" />
        </h1>
        <button type="button" className="round-button tag-page-menu" aria-label="More" aria-expanded={menu !== 'closed'} onClick={() => setMenu(menu === 'closed' ? 'open' : 'closed')}>
          …
        </button>
      </div>
      {stubs.length > 0 && <p className="you-fine tag-page-summary">{summary}</p>}

      {menu === 'open' && (
        <div className="card tag-menu" role="menu">
          <button type="button" role="menuitem" onClick={() => { setRenaming(tag); setMenu('rename'); }}>
            Rename
          </button>
          <button type="button" role="menuitem" disabled={others.length === 0} onClick={() => setMenu('merge')}>
            Merge into another tag
          </button>
          <button type="button" role="menuitem" onClick={() => setMenu('delete')}>
            Delete
          </button>
        </div>
      )}
      {menu === 'rename' && (
        <form
          className="card tag-menu"
          onSubmit={(ev) => {
            ev.preventDefault();
            submitRename(renaming);
          }}
        >
          <input className="account-input" value={renaming} maxLength={TAG_MAX} autoFocus aria-label="Tag name" onChange={(ev) => setRenaming(ev.target.value)} />
          <div className="entry-form-actions">
            <button type="button" className="link-button" onClick={() => setMenu('closed')}>
              Cancel
            </button>
            <button type="submit" className="gold-button small">
              Save
            </button>
          </div>
        </form>
      )}
      {menu === 'merge' && (
        <div className="card tag-menu" role="group" aria-label="Merge into">
          <div className="tag-menu-title">Merge into</div>
          {others.map((o) => (
            <button key={o.tag} type="button" onClick={() => submitRename(o.tag)}>
              {o.tag} <span className="tags-panel-count">on {o.count}</span>
            </button>
          ))}
          <button type="button" className="link-button" onClick={() => setMenu('closed')}>
            Cancel
          </button>
        </div>
      )}
      {menu === 'delete' && (
        <div className="card tag-menu" role="alertdialog" aria-label="Delete tag">
          <div className="tag-menu-title">
            Remove “{tag}” from {total} {total === 1 ? 'stub' : 'stubs'}?
          </div>
          <div className="entry-form-actions">
            <button type="button" className="link-button" onClick={() => setMenu('closed')}>
              Keep
            </button>
            <button
              type="button"
              className="gold-button small"
              onClick={() => {
                deleteTag(tag);
                navigate('/you/stubs', { replace: true });
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}

      {total === 0 && menu === 'closed' && <p className="you-fine">No stubs carry this tag.</p>}

      {ahead.length > 0 && (
        <section className="you-block stubs-list" aria-label="Coming Up">
          <ListBand as="h2" label="Coming Up" />
          <ul className="log-list">
            {ahead.map((plan) => (
              <li key={plan.id}>
                <PlanRow plan={plan} rating={ratings.get(nightKey(plan.metroId, plan.date)) ?? null} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {years.map(([year, list]) => (
        <section key={year} className="you-block stubs-list" aria-label={year}>
          <ListBand as="h2" label={year} />
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
  );
}
