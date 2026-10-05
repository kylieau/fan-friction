import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, SearchIcon } from '../components/Icons';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import { ReadTile } from '../components/ReadTile';
import {
  getCalendarMonth,
  getRatedDates,
  searchDates,
  type CalendarDay,
  type DateRating,
  type DateSearchHit,
} from '../data';
import { addDays, clampMonth, EARLIEST_MONTH, isValidDate, longLocalDate, monthCells, monthTitle, shiftMonth, yearMonth } from '../lib/dates';
import { datePath, useView } from '../lib/view';
import { AreaSwitcher } from './MapScreen';
import { ExploreSwitch } from './ExploreScreen';

/** Badge shade by rating band, darkest for the hardest dates (as in the mockup). */
function dayLabel(day: CalendarDay) {
  const when = longLocalDate(day.date);
  if (day.status === 'rated' && day.rating !== null) return `${when}, ${scoreLabel(day.rating)}, ${day.rating} of 10`;
  if (day.status === 'unrated') return `${when}, Unrated`;
  return `${when}, Quiet`;
}

export function CalendarScreen() {
  const { metro, today } = useView();
  const [params] = useSearchParams();
  const focusRaw = params.get('date');
  const focus = focusRaw && isValidDate(focusRaw) ? focusRaw : null;
  const [month, setMonth] = useState(() => clampMonth(yearMonth(focus ?? today), today));
  const [query, setQuery] = useState('');
  const [famous, setFamous] = useState<DateRating[] | null>(null);
  const [days, setDays] = useState<CalendarDay[] | null>(null);
  const [hits, setHits] = useState<DateSearchHit[] | null>(null);
  const [areaOpen, setAreaOpen] = useState(false);

  useEffect(() => {
    let current = true;
    getRatedDates(metro.id).then((list) => current && setFamous(list));
    return () => {
      current = false;
    };
  }, [metro.id]);

  useEffect(() => {
    let current = true;
    setDays(null);
    getCalendarMonth(metro.id, month).then((list) => current && setDays(list));
    return () => {
      current = false;
    };
  }, [metro.id, month]);

  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  useEffect(() => {
    if (trimmed.length < 2) return;
    let current = true;
    setHits(null);
    searchDates(metro.id, trimmed).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [metro.id, trimmed]);

  const monthDayToday = today.slice(5);
  const onThisDay = famous?.find((r) => r.date.slice(5) === monthDayToday) ?? null;
  const byDate = new Map(days?.map((day) => [day.date, day]));
  const latestMonth = addDays(today, 120).slice(0, 7);
  const atStart = month <= EARLIEST_MONTH;
  const atEnd = month >= latestMonth;

  const openNight = (date: string) => datePath(date, metro.id);

  return (
    <div className="screen page">
      <div className="explore-top">
        <AreaSwitcher metro={metro} open={areaOpen} onOpenChange={setAreaOpen} />
        <ExploreSwitch view="calendar" />
      </div>
      <div className="search-box">
        <label className="search-field">
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a team, artist or venue"
            aria-label="Search a team, artist or venue"
          />
        </label>
        {query && (
          <button type="button" className="search-clear" onClick={() => setQuery('')}>
            Clear
          </button>
        )}
      </div>

      {searching ? (
        <SearchResults query={trimmed} hits={trimmed.length < 2 ? [] : hits} openNight={openNight} />
      ) : (
        <>
          <section className="calendar" aria-label="Calendar">
            <div className="cal-head">
              <button type="button" className="cal-nav" aria-label="Previous month" disabled={atStart} onClick={() => setMonth((m) => shiftMonth(m, -1))}>
                <ChevronLeft />
              </button>
              <h2 className="cal-month">{monthTitle(month)}</h2>
              <button type="button" className="cal-nav" aria-label="Next month" disabled={atEnd} onClick={() => setMonth((m) => shiftMonth(m, 1))}>
                <ChevronRight />
              </button>
            </div>
            <div className="cal-weekdays" aria-hidden>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((label, i) => (
                <span key={`${label}-${i}`}>{label}</span>
              ))}
            </div>
            {days ? (
              <div className="cal-grid">
                {monthCells(month).map((date, i) => {
                  if (!date) return <span key={`blank-${i}`} className="cal-blank" />;
                  const day = byDate.get(date) ?? { date, status: 'quiet' as const, rating: null };
                  const rating = day.status === 'rated' ? day.rating : null;
                  const band = rating !== null ? scoreBand(rating) : 'plain';
                  const selected = focus === date;
                  return (
                    <Link
                      key={date}
                      to={openNight(date)}
                      className={`cal-day ${band}${selected ? ' selected' : ''}`}
                      aria-label={dayLabel(day)}
                      aria-current={selected ? 'date' : undefined}
                    >
                      <span className="cal-num">{Number(date.slice(8))}</span>
                      {rating !== null && (
                        <span className="cal-read">
                          <span className="cal-score">{rating}</span>
                          <span className="cal-word">{scoreLabel(rating)}</span>
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="card-body">Loading this month…</p>
            )}
          </section>

          {onThisDay && (
            <section className="famous">
              <h2 className="section-title">On this date</h2>
              <ul className="famous-list">
                <li>
                  <EntryRow
                    to={openNight(onThisDay.date)}
                    rating={onThisDay.rating}
                    headline={onThisDay.headline}
                    meta={longLocalDate(onThisDay.date)}
                  />
                </li>
              </ul>
            </section>
          )}

          {famous && famous.length > 0 && (
            <section className="famous">
              <h2 className="section-title">Famous nights</h2>
              <ul className="famous-list">
                {famous.map((entry) => (
                  <li key={entry.date}>
                    <EntryRow
                      to={openNight(entry.date)}
                      rating={entry.rating}
                      headline={entry.headline}
                      meta={longLocalDate(entry.date)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function SearchResults({
  query,
  hits,
  openNight,
}: {
  query: string;
  hits: DateSearchHit[] | null;
  openNight: (date: string) => string;
}) {
  if (query.length < 2) {
    return <p className="card-body search-note">Type a team, artist, or venue.</p>;
  }
  if (!hits) return <p className="card-body search-note">Searching…</p>;
  if (hits.length === 0) return <p className="card-body search-note">No dates match that.</p>;
  return (
    <section className="famous" aria-live="polite">
      <h2 className="section-title">{hits.length === 1 ? '1 night' : `${hits.length} nights`}</h2>
      <ul className="famous-list">
        {hits.map((hit) => (
          <li key={hit.date}>
            <EntryRow
              to={openNight(hit.date)}
              rating={hit.rating}
              headline={hit.headline}
              meta={[longLocalDate(hit.date), hit.matched]
                .filter(Boolean)
                .join(' · ')}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

/** One night in Famous nights, On this night, or search results. */
function EntryRow({ to, rating, headline, meta }: { to: string; rating: number | null; headline: string; meta: string }) {
  return (
    <Link to={to} className="famous-row">
      <ReadTile rating={rating} />
      <span className="famous-text">
        <span className="famous-headline">{headline}</span>
        <span className="famous-meta">{meta}</span>
      </span>
    </Link>
  );
}
