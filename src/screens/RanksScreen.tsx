import { useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { YearHeader, yearParam } from '../components/YearHeader';
import { TagChip } from '../components/TagChip';
import { TicketIcon, TvIcon } from '../components/Icons';
import { cityCounts, entriesInYear, entryTeams, getPersonalLog, subscribePersonalLog, tagSummaries, todayIn, yearsOf, yourEntries, type Entry } from '../data';
import { getHomeId } from '../lib/homeCity';

type Tab = 'teams' | 'venues' | 'cities' | 'artists' | 'tags';
const TABS: { id: Tab; label: string }[] = [
  { id: 'teams', label: 'Teams' },
  { id: 'venues', label: 'Venues' },
  { id: 'cities', label: 'Cities' },
  { id: 'artists', label: 'Artists' },
  { id: 'tags', label: 'Tags' },
];

interface RankRow {
  label: string;
  attended: number;
  watched: number;
  /** Where a tap goes: Your stubs narrowed to it. */
  to?: string;
  tag?: boolean;
}

const SHOWN = 8;

/**
 * Ranks (build 7, §3.8; Kylie, Oct 22, 2026; mocks 45–46): count only, pill tabs Teams / Venues / Cities / Artists /
 * Tags. Ranked by times seen, attended plus watched; ties share a rank; no hand ordering (Kylie: "I didn't want my
 * order at all"). Teams counts every team you've seen, both sides of every game (Locked). A tag opens Your stubs
 * filtered to it; a team too. Nothing here ranks people.
 */
export function RanksScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [params] = useSearchParams();
  const thisYear = todayIn(METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO).slice(0, 4);
  const entries = useMemo(() => yourEntries(log), [log]);
  const years = useMemo(() => yearsOf(entries, thisYear), [entries, thisYear]);
  const year = yearParam(params.get('year'), thisYear);
  const inYear = useMemo(() => entriesInYear(entries, year === 'All time' ? 'all' : year), [entries, year]);
  const [tab, setTab] = useState<Tab>(() => (TABS.some((t) => t.id === params.get('tab')) ? (params.get('tab') as Tab) : 'teams'));
  const [showAll, setShowAll] = useState(false);

  const rows = useMemo<RankRow[]>(() => rankRows(inYear, tab), [inYear, tab]);
  const max = rows[0] ? rows[0].attended + rows[0].watched : 0;
  const shown = showAll ? rows : rows.slice(0, SHOWN);
  const noun = TABS.find((t) => t.id === tab)!.label.toLowerCase();

  return (
    <div className="screen page ranks-page">
      <YearHeader title="Ranks" years={years} year={year} />
      <div className="segmented ranks-tabs" role="tablist" aria-label="Rank by">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => {
              setTab(t.id);
              setShowAll(false);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      {rows.length === 0 ? (
        <p className="you-fine">{tab === 'tags' ? 'No tags yet. Tags come from your stubs: open one and add a tag.' : `No ${noun} seen${year === 'All time' ? '' : ` in ${year}`} yet.`}</p>
      ) : (
        <ol className="log-list card rank-list" aria-label={`${TABS.find((t) => t.id === tab)!.label} by times seen`}>
          {shown.map((row, i) => {
            const total = row.attended + row.watched;
            const tie = i > 0 && shown[i - 1].attended + shown[i - 1].watched === total;
            const rank = tie ? shown.findIndex((r) => r.attended + r.watched === total) + 1 : i + 1;
            const body = (
              <>
                <span className="rank-pos">{tie || (i + 1 < shown.length && shown[i + 1].attended + shown[i + 1].watched === total) ? `=${rank}` : rank}</span>
                <span className="rank-main">
                  <span className="rank-label">{row.tag ? <TagChip tag={row.label} size="row" /> : row.label}</span>
                  <span className="rank-sub">
                    {row.attended > 0 && (
                      <span>
                        <TicketIcon size={13} /> {row.attended}
                      </span>
                    )}
                    {row.watched > 0 && (
                      <span>
                        <TvIcon /> {row.watched}
                      </span>
                    )}
                  </span>
                  <span className="rank-bar" aria-hidden>
                    <span className="rank-bar-attended" style={{ width: `${(row.attended / max) * 100}%` }} />
                    <span className="rank-bar-watched" style={{ width: `${(row.watched / max) * 100}%` }} />
                  </span>
                </span>
                <span className="rank-total">{total}</span>
              </>
            );
            return (
              <li key={row.label}>
                {row.to ? (
                  <Link to={row.to} className="rank-row" aria-label={`${row.label}, ${total}`}>
                    {body}
                  </Link>
                ) : (
                  <span className="rank-row">{body}</span>
                )}
              </li>
            );
          })}
        </ol>
      )}
      {rows.length > SHOWN && (
        <button type="button" className="link-button rank-more" onClick={() => setShowAll((v) => !v)}>
          {showAll ? 'Show fewer' : `Show all ${rows.length} ${noun}`} ›
        </button>
      )}
    </div>
  );
}

function rankRows(entries: readonly Entry[], tab: Tab): RankRow[] {
  const map = new Map<string, RankRow>();
  const add = (label: string, entry: Entry, to?: string, tag?: boolean) => {
    const row = map.get(label) ?? { label, attended: 0, watched: 0, to, tag };
    if (entry.watched) row.watched += 1;
    else row.attended += 1;
    map.set(label, row);
  };
  for (const entry of entries) {
    switch (tab) {
      case 'teams':
        for (const team of entryTeams(entry)) add(team, entry, `/you/stubs?filter=${encodeURIComponent(team)}`);
        break;
      case 'venues':
        if (entry.venue && !entry.watched) add(entry.venue, entry);
        break;
      case 'cities':
        break;
      case 'artists':
        if (entry.kind === 'show' || entry.kind === 'festival') for (const side of entry.sides) add(side, entry);
        break;
      case 'tags':
        for (const tag of entry.userTags ?? []) add(tag, entry, `/you/stubs?tag=${encodeURIComponent(tag)}`, true);
        break;
    }
  }
  if (tab === 'cities') {
    for (const city of cityCounts(entries)) map.set(city.label, { label: city.label, attended: entries.filter((e) => (METROS[e.metroId ?? '']?.name ?? e.metroId) === city.label && !e.watched).length, watched: entries.filter((e) => (METROS[e.metroId ?? '']?.name ?? e.metroId) === city.label && Boolean(e.watched)).length });
  }
  void tagSummaries;
  return [...map.values()].sort((a, b) => b.attended + b.watched - (a.attended + a.watched) || a.label.localeCompare(b.label));
}
