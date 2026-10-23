import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { YearHeader, yearParam } from '../components/YearHeader';
import { FrictionLadder } from '../components/FrictionLadder';
import { TagChip } from '../components/TagChip';
import { TicketIcon, TvIcon } from '../components/Icons';
import {
  entriesInYear,
  formatMoney,
  getPersonalLog,
  nightsOf,
  scoresForNights,
  spendSummary,
  subscribePersonalLog,
  tagSummaries,
  teamCounts,
  todayIn,
  yearsOf,
  yearStatPool,
  yourEntries,
  type Entry,
} from '../data';
import { shortLocalDate } from '../lib/dates';
import { getHomeId } from '../lib/homeCity';

/**
 * Your year (build 7, §3.9; Kylie approved r3 Oct 22, 2026, 2:26 PM PT; mocks 50–52): the scoreboard, never the story.
 * Top to bottom: the stats card (the big number and every stat the pool has), the friction ladder under it (the
 * "your usual" read, Locked), By month, Most seen (top-3 tables for Teams, Venues, Tags, each with See all › into
 * Ranks), and one compact Spend card with "Spend details ›". Compact tables, no moment cards.
 */
export function YourYearScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [params] = useSearchParams();
  const today = todayIn(METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO);
  const thisYear = today.slice(0, 4);
  const entries = useMemo(() => yourEntries(log), [log]);
  const years = useMemo(() => yearsOf(entries, thisYear), [entries, thisYear]);
  const year = yearParam(params.get('year'), thisYear);
  const inYear = useMemo(() => entriesInYear(entries, year === 'All time' ? 'all' : year), [entries, year]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(inYear)).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [inYear]);

  const attended = inYear.filter((e) => !e.watched).length;
  const watched = inYear.length - attended;
  const stats = useMemo(() => yearStatPool(inYear, year === 'All time' ? 'all' : year, entries), [inYear, year, entries]);
  const teams = teamCounts(inYear).slice(0, 3);
  const venues = useMemo(() => counts(inYear.filter((e) => !e.watched && e.venue).map((e) => e.venue!)).slice(0, 3), [inYear]);
  const tags = tagSummaries(inYear, []).slice(0, 3);
  const months = useMemo(() => byMonth(inYear), [inYear]);
  const spend = useMemo(() => spendSummary(inYear), [inYear]);
  const span = year === 'All time' ? 'All time' : year === thisYear ? `Jan 1 – ${shortLocalDate(today)}` : `Jan 1 – Dec 31, ${year}`;
  const q = `?year=${encodeURIComponent(year)}`;

  return (
    <div className="screen page your-year-page">
      <YearHeader title="Your year" years={years} year={year} sub={span} />
      <div className="card year-card">
        <div className="year-hero">
          <span className="year-big">{attended}</span>
          <span className="year-hero-words">
            {attended === 1 ? 'event attended' : 'events attended'}
            {watched > 0 && <span className="year-hero-sub"> · {watched} watched</span>}
          </span>
        </div>
        {stats.length > 0 && (
          <div className="year-stats">
            {stats.map((stat) => (
              <div key={stat.key} className="year-stat">
                <span className="year-stat-num">{stat.value}</span>
                <span className="year-stat-label">{stat.label}</span>
                {stat.sub && <span className="year-stat-sub">{stat.sub}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
      {inYear.length === 0 && <p className="you-fine">Nothing logged{year === 'All time' ? '' : ` in ${year}`} yet. Tap + to log an event.</p>}

      {/* The friction ladder and "your usual" read, moved here from You (Locked, Kylie, 2026-10-22). */}
      <FrictionLadder entries={inYear} ratings={ratings} year={year} />

      {year !== 'All time' && inYear.length > 0 && (
        <section className="card by-month" aria-label="By month">
          <h3 className="count-title">By month</h3>
          <div className="by-month-grid" aria-hidden>
            {months.map((m) => (
              <span key={m.month} className="by-month-col">
                {Array.from({ length: m.watched }, (_, i) => (
                  <span key={`w${i}`} className="by-month-block watched" />
                ))}
                {Array.from({ length: m.attended }, (_, i) => (
                  <span key={`a${i}`} className="by-month-block" />
                ))}
                <span className="by-month-letter">{m.letter}</span>
              </span>
            ))}
          </div>
          <p className="you-fine by-month-key">
            <span className="by-month-block inline" /> Attended <span className="by-month-block inline watched" /> Watched
          </p>
        </section>
      )}

      {(teams.length > 0 || venues.length > 0 || tags.length > 0) && (
        <section className="you-block" aria-label="Most seen">
          <h2 className="you-heading">Most seen</h2>
          {teams.length > 0 && <TopThree title="Teams" rows={teams.map((t) => ({ label: t.label, count: t.count }))} to={`/you/ranks${q}&tab=teams`} inYear={inYear} kind="team" />}
          {venues.length > 0 && <TopThree title="Venues" rows={venues} to={`/you/ranks${q}&tab=venues`} inYear={inYear} kind="venue" />}
          {tags.length > 0 && <TopThree title="Tags" rows={tags.map((t) => ({ label: t.tag, count: t.count }))} to={`/you/ranks${q}&tab=tags`} inYear={inYear} kind="tag" />}
        </section>
      )}

      <section className="you-block" aria-label="Spend">
        <h2 className="you-heading">Spend</h2>
        <div className="card spend-card">
          {spend.logged === 0 ? (
            <p className="you-fine spend-empty">No costs logged yet. Add a cost on a stub from its Edit stub.</p>
          ) : (
            <>
              <div className="spend-total">
                <span className="year-big spend-big">{formatMoney(spend.total, spend.currency)}</span>
                <span className="year-hero-words">spent</span>
              </div>
              <p className="you-fine spend-coverage">Costs logged for {spend.logged} of {spend.of} events</p>
              <SpendBar spend={spend} />
              <p className="spend-line">
                {spend.avgTicket !== null && (
                  <>
                    Avg ticket <strong>{formatMoney(spend.avgTicket, spend.currency)}</strong> per seat
                  </>
                )}
                {spend.avgTicket !== null && spend.freeEvents > 0 && ' · '}
                {spend.freeEvents > 0 && (
                  <>
                    <strong>{spend.freeEvents}</strong> free {spend.freeEvents === 1 ? 'event' : 'events'}
                  </>
                )}
              </p>
              {spend.watched.total > 0 && (
                <p className="spend-line spend-watched">
                  <TvIcon /> Watched · {spend.watched.lines.map((l) => `${l.kind === 'stream' ? 'Stream / PPV' : l.kind === 'food' ? 'food' : l.kind} ${formatMoney(l.amount, spend.currency)}`).join(' · ')}
                  <strong>{formatMoney(spend.watched.total, spend.currency)}</strong>
                </p>
              )}
            </>
          )}
          <Link to={`/you/spend${q}`} className="spend-details-link">
            Spend details <span aria-hidden>›</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

/** The category bar and its legend, shared with Spend details. */
export function SpendBar({ spend }: { spend: ReturnType<typeof spendSummary> }) {
  const shades = ['#0f1b2d', '#3d4f66', '#6b7a8d', '#a3adbb', '#d6dce4', '#8a97a8'];
  const total = spend.byKind.reduce((s, k) => s + k.amount, 0) || 1;
  return (
    <>
      <span className="spend-bar" aria-hidden>
        {spend.byKind.map((k, i) => (
          <span key={k.kind} style={{ width: `${(k.amount / total) * 100}%`, background: shades[i % shades.length] }} />
        ))}
      </span>
      <ul className="spend-legend">
        {spend.byKind.map((k, i) => (
          <li key={k.kind}>
            <span className="spend-swatch" style={{ background: shades[i % shades.length] }} aria-hidden /> {k.label}
            <strong>{formatMoney(k.amount, spend.currency)}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

function TopThree({ title, rows, to, inYear, kind }: { title: string; rows: { label: string; count: number }[]; to: string; inYear: Entry[]; kind: 'team' | 'venue' | 'tag' }) {
  const split = (label: string) => {
    const mine = inYear.filter((e) => (kind === 'tag' ? e.userTags?.includes(label) : kind === 'venue' ? e.venue === label : true));
    const watched = kind === 'venue' ? 0 : mine.filter((e) => e.watched && (kind !== 'team' || true)).length;
    return { watched };
  };
  return (
    <div className="card top-three">
      <div className="top-three-head">
        <span>
          {title} <span className="you-fine">Top 3</span>
        </span>
        <Link to={to} className="heading-link">
          See all ›
        </Link>
      </div>
      <ol className="top-three-list">
        {rows.map((row, i) => {
          const tie = i > 0 && rows[i - 1].count === row.count;
          const rank = tie ? rows.findIndex((r) => r.count === row.count) + 1 : i + 1;
          return (
            <li key={row.label}>
              <span className="rank-pos small">{tie ? `=${rank}` : rank}</span>
              <span className="top-three-label">{kind === 'tag' ? <TagChip tag={row.label} size="row" /> : row.label}</span>
              <span className="top-three-sub">
                <TicketIcon size={12} /> {row.count - (kind === 'team' ? 0 : split(row.label).watched)}
              </span>
              <span className="top-three-count">{row.count}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function counts(labels: string[]): { label: string; count: number }[] {
  const map = new Map<string, number>();
  for (const label of labels) map.set(label, (map.get(label) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([label, count]) => ({ label, count }));
}

function byMonth(entries: Entry[]): { month: string; letter: string; attended: number; watched: number }[] {
  return Array.from({ length: 12 }, (_, i) => {
    const mm = String(i + 1).padStart(2, '0');
    const mine = entries.filter((e) => e.when.sort.slice(5, 7) === mm && e.when.precision !== 'year' && e.when.precision !== 'unknown');
    return { month: mm, letter: 'JFMAMJJASOND'[i], attended: mine.filter((e) => !e.watched).length, watched: mine.filter((e) => e.watched).length };
  });
}
