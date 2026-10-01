import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { BaseMap } from '../map/BaseMap';
import { NightScore } from '../components/NightScore';
import { ArrowRight, ChevronDown, SearchIcon } from '../components/Icons';
import { monthDay, shortDate } from '../lib/dates';

type Mode = 'crowds' | 'traffic';

// Opens on Today, even when it's quiet. Events, the heat map and the date's
// score come from the data layer in steps 2 and 3.
export function MapScreen() {
  const [mode, setMode] = useState<Mode>('crowds');
  const metro = DEFAULT_METRO;

  return (
    <div className="screen map-screen">
      <header className="map-header">
        <div className="map-header-top">
          <Link to="/nights" className="date-button">
            Today · {shortDate(new Date(), metro)}
            <ChevronDown />
          </Link>
          <Link to="/nights" className="round-button" aria-label="Search nights">
            <SearchIcon />
          </Link>
        </div>

        <NightScore dateLabel={shortDate(new Date(), metro)} rating={null} caption="No big events found for today yet" />

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
        <BaseMap metro={metro} />
      </div>

      <section className="sheet" aria-label="Today">
        <span className="sheet-handle" aria-hidden />
        <div className="sheet-title">Quiet so far today.</div>
        <ul className="quiet-list">
          <li>
            <span className="quiet-label">Next big night</span>
            <span className="quiet-note">Coming with the event data (step 2)</span>
          </li>
          <li>
            <span className="quiet-label">On this night</span>
            <span className="quiet-note">A famous past night from {monthDay(new Date(), metro)}</span>
          </li>
          <li>
            <span className="quiet-label">Your teams' next game</span>
            <span className="quiet-note">Coming with live schedules (step 7)</span>
          </li>
        </ul>
        <Link to="/nights" className="gold-button">
          Pick a night
          <ArrowRight />
        </Link>
      </section>
    </div>
  );
}
