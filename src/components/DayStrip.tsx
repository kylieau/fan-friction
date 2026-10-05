import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Metro } from '../config/metros';
import { getCityDate } from '../data';
import { addDays } from '../lib/dates';
import { mapPath, type WhenSpan } from '../lib/view';
import { ReadTile } from './ReadTile';

/** Two days back, the viewed day, four ahead (Kylie, Oct 5). */
const BACK = 2;
const AHEAD = 4;

/**
 * The week strip above the map: seven days with their reads, the day being
 * viewed in the third slot with a blue border; today keeps its weekday name
 * and wears a dot. Tap a day to move the map to it. Reads on days ahead sit
 * back a little, since they are forecasts.
 */
export function DayStrip({ metro, today, date, span }: { metro: Metro; today: string; date: string; span: WhenSpan }) {
  const [reads, setReads] = useState<Map<string, { rating: number | null; quiet: boolean }>>(new Map());
  const center = span === 'day' ? date : today;
  const days = Array.from({ length: BACK + 1 + AHEAD }, (_, i) => addDays(center, i - BACK));

  useEffect(() => {
    let current = true;
    Promise.all(days.map((d) => getCityDate(metro.id, d))).then((list) => {
      if (!current) return;
      setReads(new Map(list.map((day) => [day.date, { rating: day.rating?.rating ?? null, quiet: day.status === 'quiet' }])));
    });
    return () => {
      current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metro.id, center]);

  return (
    <div className="day-strip" role="tablist" aria-label="This week">
      {days.map((d) => {
        const read = reads.get(d);
        const on = d === center;
        const label = new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
        return (
          <Link
            key={d}
            to={mapPath({ metroId: metro.id, date: d, today, when: 'day' })}
            role="tab"
            aria-selected={on}
            className={`day-cell${on ? ' on' : ''}${d > today ? ' forecast' : ''}${d === today ? ' today' : ''}`}
          >
            <span className="day-name">{label}</span>
            <ReadTile rating={read?.rating ?? null} quiet={read?.quiet} />
            <span className="day-num">{Number(d.slice(8))}</span>
          </Link>
        );
      })}
    </div>
  );
}
