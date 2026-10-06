import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { scoreLabel } from '../config/scoreLabels';
import {
  cityDayRange,
  getCityDate,
  getPersonalLog,
  getRatedDates,
  lengthLine,
  nightsOf,
  ratingForEntry,
  readParts,
  resultFor,
  scoresForNights,
  subscribePersonalLog,
  type CityDate,
  type CrowdEvent,
  type DateRating,
  type Entry,
  yourEntries,
} from '../data';
import { ChevronDown } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { ShareCard } from '../components/ShareCard';
import { listTitle } from '../lib/eventTitle';
import { loggedDateLabel, longLocalDate, shortLocalDate } from '../lib/dates';
import { comparePath, datePath, type NightKey, parseNightKey } from '../lib/view';

const fmt = (n: number) => n.toLocaleString('en-US');

/**
 * Two nights side by side (docs/compare-proposal-oct6.md, section 2). Reached
 * from a night with "Compare with…"; with one night it is the picker of your
 * other nights and the Famous nights; with two it is the columns. Nights are
 * compared, never people.
 */
export function CompareScreen() {
  const [params] = useSearchParams();
  const a = parseNightKey(params.get('a'));
  const b = parseNightKey(params.get('b'));
  if (!a) {
    return (
      <div className="screen page">
        <Link to="/you" className="back-link">
          <ChevronDown /> You
        </Link>
        <h1 className="page-title">Compare</h1>
        <p className="you-fine">Open a night you attended and tap Compare with…</p>
      </div>
    );
  }
  return b ? <SideBySide a={a} b={b} /> : <Picker a={a} />;
}

function nightLabel(key: NightKey): string {
  return `${shortLocalDate(key.date)} · ${METROS[key.metroId]?.name ?? key.metroId}`;
}

/** Your other nights, newest first, then the Famous nights as the demo. */
function Picker({ a }: { a: NightKey }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const entries = useMemo(() => yourEntries(log).filter((e) => e.when.precision === 'day' && !(e.when.sort === a.date && (e.metroId ?? DEFAULT_METRO.id) === a.metroId)), [log, a]);
  const [famous, setFamous] = useState<DateRating[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    getRatedDates(a.metroId).then((rows) => {
      if (!current) return;
      setFamous(rows.filter((r) => r.date !== a.date));
    });
    return () => {
      current = false;
    };
  }, [a.metroId, a.date]);

  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(entries)).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [entries]);
  const back = datePath(a.date, a.metroId, a.eventId);
  return (
    <div className="screen page">
      <Link to={back} className="back-link">
        <ChevronDown /> {shortLocalDate(a.date)}
      </Link>
      <h1 className="page-title">Compare with…</h1>
      {entries.length > 0 && (
        <section className="you-block" aria-label="Your nights">
          <h2 className="you-heading">Your nights</h2>
          <ul className="log-list">
            {entries.map((entry) => (
              <li key={entry.id}>
                <Link to={comparePath(a, { metroId: entry.metroId ?? DEFAULT_METRO.id, date: entry.when.sort, eventId: entry.eventId })} className="log-row">
                  <ReadTile rating={ratingForEntry(entry, ratings)} />
                  <span className="log-main">
                    <span className="log-title">{entry.title}</span>
                    <span className="log-facts">{[loggedDateLabel(entry.when), entry.venue].filter(Boolean).join(' · ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {famous.length > 0 && (
        <section className="you-block" aria-label="Famous nights">
          <h2 className="you-heading">Famous nights</h2>
          <ul className="log-list">
            {famous.map((r) => (
              <li key={r.date}>
                <Link to={comparePath(a, { metroId: r.metroId, date: r.date })} className="log-row">
                  <ReadTile rating={r.rating} />
                  <span className="log-main">
                    <span className="log-title">{r.headline}</span>
                    <span className="log-facts">{longLocalDate(r.date)}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

interface Column {
  key: NightKey;
  day: CityDate;
  parts: ReturnType<typeof readParts>;
  /** The night's own event, when the key names one. */
  mine: CrowdEvent | undefined;
  entry: Entry | undefined;
}

function SideBySide({ a, b }: { a: NightKey; b: NightKey }) {
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [cols, setCols] = useState<[Column, Column] | null>(null);
  useEffect(() => {
    let current = true;
    Promise.all([a, b].map((key) => getCityDate(key.metroId, key.date))).then(([da, db]) => {
      if (!current) return;
      const col = (key: NightKey, day: CityDate): Column => ({
        key,
        day,
        parts: readParts(day),
        mine: key.eventId ? day.events.find((e) => e.id === key.eventId) : undefined,
        entry: yourEntries(log).find((e) => e.when.sort === key.date && (e.metroId ?? DEFAULT_METRO.id) === key.metroId && (!key.eventId || e.eventId === key.eventId)),
      });
      setCols([col(a, da), col(b, db)]);
    });
    return () => {
      current = false;
    };
  }, [a, b, log]);

  if (!cols) return <div className="screen page" />;
  const [A, B] = cols;

  const row = (label: string, pick: (c: Column) => string | null) => {
    const va = pick(A);
    const vb = pick(B);
    if (va === null && vb === null) return null;
    return (
      <div className="cmp-row" key={label}>
        <div className="cmp-label">{label}</div>
        <div className="cmp-cell">{va ?? '—'}</div>
        <div className="cmp-cell">{vb ?? '—'}</div>
      </div>
    );
  };
  const others = (c: Column) => {
    const list = c.day.events.filter((e) => e.id !== c.mine?.id).map((e) => listTitle(e));
    return list.length ? list.slice(0, 6).join(' · ') + (list.length > 6 ? ` · and ${list.length - 6} more` : '') : 'Nothing else big';
  };
  const yours = (c: Column) => {
    const e = c.mine;
    if (!e) return c.entry?.title ?? null;
    const parts = [listTitle(e)];
    const count = e.crowd.find((f) => f.count !== undefined)?.count;
    if (count) parts.push(`${fmt(count)} ${e.crowd.find((f) => f.count !== undefined)?.kind ?? ''}`.trim());
    const r = resultFor(e);
    const len = r ? lengthLine(r) : undefined;
    if (len) parts.push(len);
    return parts.join(' · ');
  };
  const weather = (c: Column) => {
    const range = cityDayRange(c.key.metroId, c.key.date);
    return range ? `H ${Math.round(range.feelsLikeHighF)}° L ${Math.round(range.feelsLikeLowF)}°` : null;
  };
  const score = (c: Column) => (c.day.rating ? `${c.day.rating.rating} ${scoreLabel(c.day.rating.rating)}` : 'No read');
  const part = (pick: (p: NonNullable<Column['parts']>) => number | null) => (c: Column) => {
    if (!c.parts) return null;
    const v = pick(c.parts);
    return v === null ? null : v.toFixed(1);
  };

  return (
    <div className="screen page compare-page">
      <button type="button" className="back-link" onClick={() => navigate(-1)}>
        <ChevronDown /> Back
      </button>
      <h1 className="page-title">Side by side</h1>
      <div className="cmp-head">
        <div className="cmp-label" />
        {[A, B].map((c) => (
          <Link key={c.key.date + c.key.metroId} to={datePath(c.key.date, c.key.metroId, c.key.eventId)} className="cmp-night">
            <ReadTile rating={c.day.rating?.rating ?? null} />
            <span className="cmp-night-label">{nightLabel(c.key)}</span>
          </Link>
        ))}
      </div>
      <div className="cmp-table">
        {row('Read', score)}
        {row('Crowd fight', part((p) => p.crowdFight))}
        {row('Conditions', part((p) => p.conditions))}
        {row('Gridlock', part((p) => p.gridlock))}
        {row('What else was on', others)}
        {row('Your night', yours)}
        {row('Weather', weather)}
      </div>
      <ShareCard
        dateLabel={`${shortLocalDate(A.key.date)} vs ${shortLocalDate(B.key.date)}`}
        title={`${A.day.rating ? scoreLabel(A.day.rating.rating) : 'No read'} vs ${B.day.rating ? scoreLabel(B.day.rating.rating) : 'No read'}`}
        line={`${A.day.rating?.headline ?? ''} · ${B.day.rating?.headline ?? ''}`}
        rating={null}
        crowd={null}
      />
      <Link to={comparePath(A.key)} className="text-link">
        Compare with another night
      </Link>
    </div>
  );
}
