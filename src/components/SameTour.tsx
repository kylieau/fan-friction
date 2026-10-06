import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCityDate, getEventsBetween, type CrowdEvent } from '../data';
import { shortLocalDate } from '../lib/dates';
import { datePath } from '../lib/view';
import { ReadTile } from './ReadTile';

/**
 * Dates for the same tour or homestand (docs/compare-proposal-oct6.md, section 3):
 * on an upcoming event, the same performer's or home team's other dates in this
 * city within 30 days, each with that day's read, so the calmest can be picked.
 */
export function SameTour({ event }: { event: CrowdEvent }) {
  const [rows, setRows] = useState<{ event: CrowdEvent; rating: number | null }[] | null>(null);
  useEffect(() => {
    let current = true;
    const [y, m, d] = event.date.split('-').map(Number);
    const day = (offset: number) => new Date(Date.UTC(y, m - 1, d + offset)).toISOString().slice(0, 10);
    const same = (other: CrowdEvent) => {
      if (other.id === event.id || other.metroId !== event.metroId) return false;
      if (event.performer) return other.performer === event.performer;
      return Boolean(event.teams && other.teams && other.teams.home === event.teams.home);
    };
    (async () => {
      const between = await getEventsBetween(event.metroId, day(-31), day(30));
      const kin = between.filter(same).slice(0, 6);
      const read = await Promise.all(kin.map(async (other) => ({ event: other, rating: (await getCityDate(other.metroId, other.date)).rating?.rating ?? null })));
      if (current) setRows(read);
    })();
    return () => {
      current = false;
    };
  }, [event]);
  if (!rows || rows.length === 0) return null;
  return (
    <section className="same-tour" aria-label="Other dates">
      <h2 className="you-heading">{event.performer ? 'Also on' : 'Same homestand'}</h2>
      <div className="same-tour-row">
        {rows.map(({ event: other, rating }) => (
          <Link key={other.id} to={datePath(other.date, other.metroId, other.id)} className="same-tour-cell">
            <ReadTile rating={rating} />
            <span className="same-tour-date">{shortLocalDate(other.date)}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
