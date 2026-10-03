import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { frictionLabel, showFriction } from '../config/scoreLabels';
import { getCityDate, getUpcoming, todayIn, type CityDate, type CrowdEvent } from '../data';
import { BaseMap } from '../map/BaseMap';
import { CrowdLayer } from '../map/CrowdLayer';
import { crowdKind, crowdPoints } from '../map/crowdPoints';
import { NightScore } from '../components/NightScore';
import { ArrowRight, ChevronDown, SearchIcon } from '../components/Icons';
import { clockTime, monthDay, shortDate, shortLocalDate } from '../lib/dates';

type Mode = 'crowds' | 'traffic';

// Opens on Today, even when it's quiet. A famous night opens here too
// ("/?date=2024-10-25"): its events glow on the map and its rating shows on top.
export function MapScreen() {
  const [mode, setMode] = useState<Mode>('crowds');
  const [legend, setLegend] = useState(false);
  const metro = DEFAULT_METRO;
  const today = todayIn(metro);
  const [params] = useSearchParams();
  const date = params.get('date') ?? today;
  const isToday = date === today;

  const [day, setDay] = useState<CityDate | null>(null);
  useEffect(() => {
    let current = true;
    getCityDate(metro.id, date).then((d) => current && setDay(d));
    return () => {
      current = false;
    };
  }, [metro.id, date]);

  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  useEffect(() => {
    let current = true;
    getUpcoming(metro.id, date, 2).then((u) => current && setUpcoming(u));
    return () => {
      current = false;
    };
  }, [metro.id, date]);

  const shown = day && day.date === date ? day : null;
  const points = useMemo(() => (shown && mode === 'crowds' ? crowdPoints(shown.events, date) : []), [shown, mode, date]);
  const rating = shown?.rating ?? null;
  const caption = !shown
    ? ' '
    : shown.events.length === 0
      ? isToday
        ? 'No big events found for today yet'
        : 'No big events found for this date'
      : `${shown.events.length} big ${shown.events.length === 1 ? 'event' : 'events'} that day`;

  return (
    <div className="screen map-screen">
      <header className="map-header">
        <div className="map-header-top">
          <Link to="/nights" className="date-button">
            {isToday ? `Today · ${shortDate(new Date(), metro)}` : shortLocalDate(date)}
            <ChevronDown />
          </Link>
          <Link to="/nights" className="round-button" aria-label="Search nights">
            <SearchIcon />
          </Link>
        </div>

        <NightScore rating={rating ? rating.rating : null} quiet={shown?.status === 'quiet'} caption={caption} />

        <div className="segmented" role="tablist" aria-label="Map mode">
          <button type="button" role="tab" aria-selected={mode === 'crowds'} onClick={() => setMode('crowds')}>
            Crowds
          </button>
          <button type="button" role="tab" aria-selected={mode === 'traffic'} onClick={() => setMode('traffic')}>
            Traffic
          </button>
        </div>
        <div className="map-question">
          {mode === 'crowds' ? 'Where did the crowds go?' : 'Should I brave the roads?'}
          {mode === 'traffic' && <span className="estimate-chip">Estimate · not live</span>}
        </div>
      </header>

      <div className="map-area">
        <BaseMap metro={metro}>
          <CrowdLayer points={points} />
        </BaseMap>
        {points.length > 0 && (
          <>
            <button type="button" className="legend-button" aria-label="What do the colors mean?" onClick={() => setLegend((v) => !v)}>
              ?
            </button>
            {legend && (
              <div className="legend-card" role="note">
                <b>Gold glow</b> marks where an event was. Wider means a bigger venue. Stronger means the known crowd filled more of it;
                faint means no count found yet. <b>★</b> is the biggest known crowd that day. Counts are announced, reported or
                estimated, and say so.
              </div>
            )}
          </>
        )}
      </div>

      <section className="sheet" aria-label={isToday ? 'Today' : shortLocalDate(date)}>
        <span className="sheet-handle" aria-hidden />
        {shown && shown.events.length > 0 ? (
          <>
            <div className="sheet-title">
              {rating ? `Squeezed most: ${rating.squeezedMost}` : 'Big events that day'}
            </div>
            <ul className="event-list">
              {shown.events.map((e) => {
                const figure = e.crowd.find((c) => c.count !== undefined);
                const friction = e.assessment?.friction;
                return (
                  <li key={e.id}>
                   <Link to={`/event/${e.id}`} className="event-row">
                    <span className="event-time">{e.start ? clockTime(e.start) : 'Time n/a'}</span>
                    <span className="event-main">
                      <span className="event-title">{e.title}</span>
                      <span className="event-meta">
                        {figure?.count !== undefined
                          ? `${figure.count.toLocaleString('en-US')} ${crowdKind(e)}`
                          : e.crowd.some((c) => c.soldOut)
                            ? 'Sold out'
                            : 'No count yet'}
                        {e.crowd.some((c) => c.soldOut) && figure?.count !== undefined ? ' · sold out' : ''}
                      </span>
                    </span>
                    {friction && showFriction(friction) && <span className="chip chip-friction">{frictionLabel(friction)}</span>}
                   </Link>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <div className="sheet-title">{isToday ? 'Quiet so far today.' : 'Quiet on this date.'}</div>
            <ul className="quiet-list">
              <li>
                <span className="quiet-label">On this night</span>
                <span className="quiet-note">A famous past night from {monthDay(new Date(), metro)}</span>
              </li>
            </ul>
          </>
        )}
        {upcoming.length > 0 && (
          <div className="coming-up">
            <div className="section-title">Coming up</div>
            <ul className="event-list">
              {upcoming.map((e) => (
                <li key={e.id}>
                  <Link to={`/?date=${e.date}`} className="event-row">
                    <span className="event-time">{shortLocalDate(e.date)}</span>
                    <span className="event-main">
                      <span className="event-title">{e.title}</span>
                      <span className="event-meta">{e.start ? clockTime(e.start) : 'Time n/a'}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/nights" className="gold-button">
          Pick a night
          <ArrowRight />
        </Link>
      </section>
    </div>
  );
}
