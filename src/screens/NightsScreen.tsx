import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';
import { DEFAULT_METRO } from '../config/metros';
import { scoreLabel } from '../config/scoreLabels';
import { getRatedDates, todayIn, type DateRating } from '../data';

/** "Fri, Oct 25, 2024" from "2024-10-25", without time-zone drift. */
function longDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Badge shade by rating band, darkest for the hardest dates (as in the mockup). */
function badgeClass(rating: number) {
  if (rating >= 7) return 'badge-hard';
  if (rating >= 5) return 'badge-mid';
  if (rating >= 3) return 'badge-light';
  return 'badge-chill';
}

export function NightsScreen() {
  const metro = DEFAULT_METRO;
  const [famous, setFamous] = useState<DateRating[] | null>(null);

  useEffect(() => {
    getRatedDates(metro.id).then(setFamous);
  }, [metro.id]);

  // A famous night that fell on today's month and day in some earlier year, if there is one.
  const monthDayToday = todayIn(metro).slice(5);
  const onThisDay = famous?.find((r) => r.date.slice(5) === monthDayToday) ?? null;

  return (
    <div className="screen page">
      <h1 className="page-title">Nights</h1>
      <label className="search-box">
        <SearchIcon />
        <input type="search" placeholder="Search a night, team or artist" disabled />
      </label>
      <div className="card empty-card">
        <div className="card-title">The calendar is on its way.</div>
        <div className="card-body">Soon: a calendar shaded by each date's rating.</div>
      </div>

      {onThisDay && (
        <section className="famous">
          <h2 className="section-title">On this night</h2>
          <ul className="famous-list">
            <li>
              <Link to={`/?date=${onThisDay.date}`} className="famous-row">
                <span className={`rating-badge ${badgeClass(onThisDay.rating)}`} aria-hidden>
                  {onThisDay.rating}
                </span>
                <span className="famous-text">
                  <span className="famous-headline">{onThisDay.headline}</span>
                  <span className="famous-meta">
                    {scoreLabel(onThisDay.rating)} · {onThisDay.rating}/10 · {longDate(onThisDay.date)}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </section>
      )}

      {famous && famous.length > 0 && (
        <section className="famous">
          <h2 className="section-title">Famous nights</h2>
          <ul className="famous-list">
            {famous.map((r) => (
              <li key={r.date}>
               <Link to={`/?date=${r.date}`} className="famous-row">
                <span className={`rating-badge ${badgeClass(r.rating)}`} aria-hidden>
                  {r.rating}
                </span>
                <span className="famous-text">
                  <span className="famous-headline">{r.headline}</span>
                  <span className="famous-meta">
                    {scoreLabel(r.rating)} · {r.rating}/10 · {longDate(r.date)}
                  </span>
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
