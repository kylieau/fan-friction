import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cueWord, roadSpan, type AreaRoads, type DateRoads, type EventRoads, type RoadCue } from '../data';
import { datePath, mapPath } from '../lib/view';

/**
 * Getting There (build 7.2, Section E; mocks `docs/build-7-2/mockups/getting-there/04`, `07`, `11`, FINAL path `15`):
 * when crowds around a venue make the roads nearby Light, Busy or Heavy. An estimate from schedules and crowd
 * sizes, never live (E14: "Estimate · not live" on every surface), in area names only (R4b). The date card sits after
 * Local Competition (E3, "Getting There"), the event row under Crowd (R4e, builder's lean: violet means friction, so
 * road blues stay out of Up Against), and both open the same about sheet. Nothing shows on a past date (R4h) or while
 * the Settings switch is off (R4a).
 */

/** "12p", "1p", "12a": the axis words, as the Local Competition timeline writes them. */
function axisLabel(h: number): string {
  const x = h % 24;
  return x === 0 ? '12a' : x === 12 ? '12p' : x < 12 ? `${x}a` : `${x - 12}p`;
}

function Swatch({ cue }: { cue: RoadCue }) {
  return <span className={`road-swatch ${cue}`} aria-hidden />;
}

function EstimateTag() {
  return (
    <span className="gt-tag">
      <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
        <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4.5V8l2.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      Estimate · not live
    </span>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path d="M8 3 4 21M16 3l4 18M12 4v3M12 10v4M12 17v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** One area's whole-hour cells on the shared axis (R4f, builder's lean: whole hours). */
function RoadStrip({ area, lo, hi }: { area: AreaRoads; lo: number; hi: number }) {
  const spoken = area.window ? `${cueWord(area.window.cue)} about ${roadSpan(area.window.from, area.window.to)}` : 'Light all day';
  return (
    <div className="road-strip" role="img" aria-label={`${area.name}: ${spoken}`}>
      {area.cells
        .filter((c) => c.hour >= lo && c.hour < hi)
        .map((c) => (
          <span key={c.hour} className={`road-cell ${c.cue}`} />
        ))}
    </div>
  );
}

export function RoadAxis({ lo, hi }: { lo: number; hi: number }) {
  const ticks: number[] = [];
  for (let h = lo; h <= hi; h += 1) ticks.push(h);
  const pct = (h: number) => `${((h - lo) / (hi - lo)) * 100}%`;
  return (
    <div className="road-axis" aria-hidden>
      {ticks.map((h) => (
        <span key={h} style={{ left: pct(h) }}>
          {axisLabel(h)}
        </span>
      ))}
    </div>
  );
}

export function RoadKey() {
  return (
    <div className="road-key" aria-label="Key">
      {(['light', 'busy', 'heavy'] as RoadCue[]).map((cue) => (
        <span key={cue} className="road-key-item">
          <Swatch cue={cue} />
          {cueWord(cue)}
        </span>
      ))}
    </div>
  );
}

/** The date page card (mock 04): the summary, one strip per area, the key, the honesty notes, two links. */
export function GettingThereCard({ roads, today }: { roads: DateRoads; today: string }) {
  const [about, setAbout] = useState(false);
  const { lo, hi } = roads.axis;
  const worst = roads.areas[0];
  const notes = roads.areas.flatMap((a) => a.notes);
  return (
    <section className="card getting-there" id="getting-there" aria-labelledby="getting-there-title">
      <div className="gt-head">
        <h2 id="getting-there-title" className="you-heading">
          Getting There
        </h2>
        <EstimateTag />
      </div>
      {roads.quiet || roads.allLight ? (
        <p className="gt-summary">{roads.summary}</p>
      ) : (
        <>
          <p className="gt-summary">
            {worst.window ? (
              <>
                <strong>
                  {worst.name}, about {roadSpan(worst.window.from, worst.window.to)}.
                </strong>{' '}
                {worst.why}
              </>
            ) : (
              roads.summary
            )}
          </p>
          <RoadAxis lo={lo} hi={hi} />
          <ul className="road-areas">
            {roads.areas.map((area) => (
              <li key={area.id} className="road-area">
                <div className="road-area-head">
                  <span className="road-area-name">{area.name}</span>
                  <span className="road-area-when">
                    {area.window ? roadSpan(area.window.from, area.window.to) : 'all day'} <Swatch cue={area.cue} />
                    <strong>{cueWord(area.cue)}</strong>
                  </span>
                </div>
                <RoadStrip area={area} lo={lo} hi={hi} />
              </li>
            ))}
          </ul>
          <RoadKey />
          <p className="road-key-note">Crowds arriving and leaving</p>
        </>
      )}
      {/* The honesty notes (E8, E9) show on a Light day too: a hillside room reads busier whatever the day (Codex, Section E review). */}
      {notes.length > 0 && (
        <ul className="road-notes">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
      <div className="gt-links">
        {!roads.quiet && (
          <Link to={mapPath({ metroId: roads.metroId, date: roads.date, today, view: 'map', mode: 'traffic' })} className="gt-link">
            See it on the map <span aria-hidden>›</span>
          </Link>
        )}
        <button type="button" className="gt-link" onClick={() => setAbout(true)}>
          How this is estimated <span aria-hidden>›</span>
        </button>
      </div>
      {about && <GettingThereAbout onClose={() => setAbout(false)} />}
    </section>
  );
}

/** The event page row under Crowd (mock 07): arriving and leaving words, one tap to the date card. */
export function GettingThereRow({ roads, metroId, date }: { roads: EventRoads; metroId: string; date: string }) {
  return (
    <Link to={`${datePath(date, metroId)}#getting-there`} className="card gt-row" aria-label={`Getting There. ${roads.line} Estimate, not live. Opens the day's roads.`}>
      <span className="gt-row-icon" aria-hidden>
        <RoadIcon />
      </span>
      <span className="gt-row-words">
        <span className="gt-row-label">Getting There</span>
        <span className="gt-row-line">{roads.line}</span>
        <EstimateTag />
      </span>
      <span className="settings-chevron" aria-hidden>
        ›
      </span>
    </Link>
  );
}

/** "How Getting There Works" (mock 11), in the shape of the date page's About card. */
export function GettingThereAbout({ onClose }: { onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // Focus lands on Close while the card is open and goes back to whatever opened it after (Codex, Section E review).
    const opener = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [onClose]);
  return (
    <div className="home-backdrop gt-backdrop" role="dialog" aria-modal="true" aria-labelledby="gt-about-title" onClick={onClose}>
      <div className="home-card about-read gt-about" onClick={(event) => event.stopPropagation()}>
        <h2 id="gt-about-title" className="home-title">
          How Getting There Works
        </h2>
        <p className="about-read-line">An estimate from schedules and crowd sizes, not live traffic. It reads the same numbers as the verdict's roads reason.</p>
        <p className="about-read-line">Light means no busier than a usual event night in that area. Busy and Heavy mean crowds stacking up beyond it, arriving or leaving at the same hours.</p>
        <h3 className="gt-about-heading">What It Counts</h3>
        <ul className="gt-about-list">
          <li>Each crowd for about 2 hours before the start and about 1 hour after the end.</li>
          <li>Venues within about a mile and a quarter share one area.</li>
          <li>Hillside venues with few roads in read busier.</li>
          <li>Invite-only events count here too.</li>
        </ul>
        <h3 className="gt-about-heading">What It Leaves Out</h3>
        <ul className="gt-about-list">
          <li>No live traffic, routes, drive times, or parking.</li>
          <li>Not counted: street events, like marathons, parades, and festivals.</li>
        </ul>
        <button type="button" className="gt-about-close" ref={closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
