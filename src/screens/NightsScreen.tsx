import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, SearchIcon } from '../components/Icons';
import { formatScore, scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  getCalendarMonth,
  getRatedDates,
  searchNights,
  type CalendarDay,
  type DateRating,
  type NightSearchHit,
} from '../data';
import { addDays, clampMonth, EARLIEST_MONTH, isValidDate, longLocalDate, monthCells, monthTitle, shiftMonth, yearMonth } from '../lib/dates';
import { mapPath, useView } from '../lib/view';

/** Badge shade by rating band, darkest for the hardest dates (as in the mockup). */
function badgeClass(rating: number) {
  if (rating >= 7) return 'badge-hard';
  if (rating >= 5) return 'badge-mid';
  if (rating >= 3) return 'badge-light';
  return 'badge-chill';
}

function dayLabel(day: CalendarDay) {
  const when = longLocalDate(day.date);
  if (day.status === 'rated' && day.rating !== null) return `${when}, ${scoreLabel(day.rating)}, ${day.rating} of 10`;
  if (day.status === 'unrated') return `${when}, Unrated`;
  return `${when}, Quiet`;
}

export function NightsScreen() {
  const { metro, today } = useView();
  const [params] = useSearchParams();
  const focusRaw = params.get('date');
  const focus = focusRaw && isValidDate(focusRaw) ? focusRaw : null;
  const [month, setMonth] = useState(() => clampMonth(yearMonth(focus ?? today), today));
  const [query, setQuery] = useState('');
  const [famous, setFamous] = useState<DateRating[] | null>(null);
  const [days, setDays] = useState<CalendarDay[] | null>(null);
  const [hits, setHits] = useState<NightSearchHit[] | null>(null);

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
    searchNights(metro.id, trimmed).then((list) => current && setHits(list));
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

  const openNight = (date: string) => mapPath({ metroId: metro.id, date, today, when: 'day' });

  return (
    <div className="screen page">
      <h1 className="page-title">Nights</h1>
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
              <h2 className="section-title">On this night</h2>
              <ul className="famous-list">
                <li>
                  <NightRow
                    to={openNight(onThisDay.date)}
                    rating={onThisDay.rating}
                    headline={onThisDay.headline}
                    meta={`${scoreLabel(onThisDay.rating)} · ${formatScore(onThisDay.rating)}/10 · ${longLocalDate(onThisDay.date)}`}
                  />
                </li>
              </ul>
            </section>
          )}

          {famous && famous.length > 0 && (
            <section className="famous">
              <h2 className="section-title">Famous nights</h2>
              <ul className="famous-list">
                {famous.map((night) => (
                  <li key={night.date}>
                    <NightRow
                      to={openNight(night.date)}
                      rating={night.rating}
                      headline={night.headline}
                      meta={`${scoreLabel(night.rating)} · ${formatScore(night.rating)}/10 · ${longLocalDate(night.date)}`}
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
  hits: NightSearchHit[] | null;
  openNight: (date: string) => string;
}) {
  if (query.length < 2) {
    return <p className="card-body search-note">Type a team, artist, or venue.</p>;
  }
  if (!hits) return <p className="card-body search-note">Searching…</p>;
  if (hits.length === 0) return <p className="card-body search-note">No nights match that.</p>;
  return (
    <section className="famous" aria-live="polite">
      <h2 className="section-title">{hits.length === 1 ? '1 night' : `${hits.length} nights`}</h2>
      <ul className="famous-list">
        {hits.map((hit) => (
          <li key={hit.date}>
            <NightRow
              to={openNight(hit.date)}
              rating={hit.rating}
              headline={hit.headline}
              meta={[hit.rating !== null ? `${scoreLabel(hit.rating)} · ${formatScore(hit.rating)}/10` : 'Unrated', longLocalDate(hit.date), hit.matched]
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
function NightRow({ to, rating, headline, meta }: { to: string; rating: number | null; headline: string; meta: string }) {
  return (
    <Link to={to} className="famous-row">
      {rating !== null ? (
        <span className={`rating-badge ${badgeClass(rating)}`} aria-hidden>
          {rating}
        </span>
      ) : (
        <span className="rating-badge badge-unrated" aria-hidden>
          –
        </span>
      )}
      <span className="famous-text">
        <span className="famous-headline">{headline}</span>
        <span className="famous-meta">{meta}</span>
      </span>
    </Link>
  );
}
