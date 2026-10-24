import { useState } from 'react';
import { Link } from 'react-router-dom';
import { METROS, degreesFor } from '../config/metros';
import { cityForecastRange, cityHourly, sunsetLabel, weatherGlyph, VENUES, venueNameOn, type CrowdEvent, type OutdoorPeak } from '../data';
import { DayOccasionTag } from './EventTags';
import { clockTime, weekdayLong } from '../lib/dates';
import { listTitle, splitTitleLabel } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { ChevronRight } from './Icons';
import { WeatherIcon } from './WeatherIcon';

/**
 * Flow X (build 7.1, M3; Kylie, Oct 23, 2026, Locked; the 03-final board): a slim 44pt strip under the verdict card,
 * "Los Angeles 74° / 59° · Outdoor 66° to 92° ›", collapsed on every visit, that expands in place into the day's
 * weather card: the city's figures first (its high and low, rain, wind and sunset, the city by the hour), then the
 * Outdoor Venues list, each outdoor event's peak at its own venue during its own window, with a plain grey mark and
 * one ink for every temperature. Weather is out of Local Competition. The city's sun and moon stay in color (Kylie:
 * they are the city's sky, not a temperature). Every degree follows the Temperature Units rule (M40).
 */
export function DayWeather({ metroId, date, peaks, events, before, isToday }: { metroId: string; date: string; peaks: readonly OutdoorPeak[]; /** Every event that day, for the MAJOR tag beside a venue row's temp. */ events: readonly CrowdEvent[]; before?: Date; isToday: boolean }) {
  const [open, setOpen] = useState(false);
  const metro = METROS[metroId];
  const city = metro?.name ?? metroId;
  const range = cityForecastRange(metroId, date, before);
  if (!range && peaks.length === 0) return null;
  const deg = (f: number) => degreesFor(f, metroId);
  // One venue, or every peak the same, reads as one figure; several share the venue through its highest peak.
  const byVenue = new Map<string, OutdoorPeak>();
  for (const p of peaks) {
    const held = byVenue.get(p.venueId);
    if (!held || p.peakF > held.peakF) byVenue.set(p.venueId, p);
  }
  const peakValues = [...byVenue.values()].map((p) => p.peakF);
  const lo = Math.min(...peakValues);
  const hi = Math.max(...peakValues);
  const outdoor = peakValues.length === 0 ? null : deg(lo) === deg(hi) ? `Outdoor ${deg(hi)}` : `Outdoor ${deg(lo)} to ${deg(hi)}`;
  const cityPart = range ? `${city} ${deg(range.feelsLikeHighF)} / ${deg(range.feelsLikeLowF)}` : city;
  const stripText = [cityPart, outdoor].filter(Boolean).join(' · ');

  if (!open) {
    return (
      <button type="button" className="day-weather-strip" aria-expanded={false} onClick={() => setOpen(true)}>
        {range && (
          <span className="weather-glyph day-weather-sun" aria-hidden>
            {weatherGlyph(range)}
          </span>
        )}
        <span className="day-weather-strip-text">{stripText}</span>
        <span className="day-weather-chevron" aria-hidden>
          <ChevronRight />
        </span>
      </button>
    );
  }

  const hourly = cityHourly(metroId, date, before);
  // The hours the day is lived in: from the first outdoor event (or mid-afternoon) to 11 pm, every other hour when
  // the row would otherwise crowd the card.
  const firstHour = peaks.length > 0 ? Math.min(...peaks.map((p) => (p.event.start ? Number(p.event.start.slice(0, 2)) : 15))) : 15;
  const shownHours = hourly.filter((row) => row.hour >= Math.min(firstHour, 15));
  // Every other hour when the row would crowd the card, the last stored hour always kept (Codex, stage 2).
  const hours = shownHours.length > 7 ? shownHours.filter((_, i) => i % 2 === 0 || i === shownHours.length - 1) : shownHours;
  const rain = hourly.length > 0 ? Math.max(...hourly.map((row) => row.precipProbability ?? 0)) : null;
  const windRows = hours.filter((row) => row.windMph != null);
  const wind = windRows.length > 0 ? Math.round(windRows.reduce((sum, row) => sum + (row.windMph ?? 0), 0) / windRows.length) : null;
  const sunset = sunsetLabel(metroId, date);
  const updated = [...peaks.map((p) => p.capturedAt), ...(range ? [range.capturedAt] : [])].sort().at(-1);
  const updatedLabel = updated && metro ? new Date(updated).toLocaleTimeString('en-US', { timeZone: metro.timeZone, hour: 'numeric', minute: '2-digit' }).toLowerCase() : null;
  const hourLabel = (h: number) => (h % 12 === 0 ? 12 : h % 12) + (h < 12 ? 'a' : 'p');
  const rows = [...byVenue.values()].sort((a, b) => (a.event.start ?? '99').localeCompare(b.event.start ?? '99'));

  return (
    <section className="card day-weather-card" aria-labelledby="day-weather-title">
      <div className="day-weather-head">
        <h2 id="day-weather-title" className="you-heading">
          {isToday ? "Today's Weather" : `${weekdayLong(date)}'s Weather`}
        </h2>
        <button type="button" className="day-weather-hide" aria-expanded onClick={() => setOpen(false)}>
          Hide <span aria-hidden>⌃</span>
        </button>
      </div>
      {range && (
        <div className="day-weather-city">
          <span className="weather-glyph day-weather-city-glyph" aria-hidden>
            {weatherGlyph(range)}
          </span>
          <span className="day-weather-city-text">
            <span className="day-weather-city-label">{city} (city)</span>
            <span className="day-weather-city-temp">
              <strong>{deg(range.feelsLikeHighF)}</strong> / {deg(range.feelsLikeLowF)}
            </span>
          </span>
        </div>
      )}
      <div className="day-weather-stats">
        {rain != null && (
          <span className="day-weather-stat">
            <span className="day-weather-stat-label">Rain</span>
            <strong>{Math.round(rain)}%</strong>
          </span>
        )}
        {wind != null && (
          <span className="day-weather-stat">
            <span className="day-weather-stat-label">Wind</span>
            <strong>{wind} mph</strong>
          </span>
        )}
        {sunset && (
          <span className="day-weather-stat">
            <span className="day-weather-stat-label">Sunset</span>
            <strong>{sunset}</strong>
          </span>
        )}
      </div>
      {hours.length >= 2 && (
        <>
          <h3 className="day-weather-sub">{city} by the Hour</h3>
          <ul className="day-weather-hours" aria-label={`${city} by the hour`}>
            {hours.map((row) => (
              <li key={row.hour} aria-label={`${clockTime(`${String(row.hour).padStart(2, '0')}:00`)} ${deg(row.feelsLikeF)}`}>
                <span className="day-weather-hour">{hourLabel(row.hour)}</span>
                <span className="weather-glyph" aria-hidden>
                  {weatherGlyph(row)}
                </span>
                <span className="day-weather-hour-temp">{deg(row.feelsLikeF)}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {rows.length > 0 && (
        <>
          <h3 className="day-weather-sub day-weather-outdoor-label">Outdoor Venues</h3>
          <ul className="day-weather-venues">
            {rows.map((p) => (
              <li key={p.venueId}>
                <Link to={eventPath(p.event.id, p.event.metroId)} className="day-weather-venue-row">
                  <span className="day-weather-venue-text">
                    <span className="day-weather-venue-name">{venueName(p)}</span>
                    <span className="day-weather-venue-event">
                      {splitTitleLabel(listTitle(p.event)).name}
                      {p.event.start ? ` · ${clockTime(p.event.start)}` : ''}
                    </span>
                  </span>
                  <DayOccasionTag event={p.event} day={events} />
                  <span className="day-weather-venue-temp">
                    <WeatherIcon kind={p.sky} />
                    <strong>{deg(p.peakF)}</strong>
                  </span>
                  <span className="day-weather-chevron" aria-hidden>
                    <ChevronRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="day-weather-note">
        City figures are for {city}. Venue temps are the peak at each venue during its event and can run far from the city's. Feels-like.
        {updatedLabel ? ` Updated ${updatedLabel}.` : ''}
      </p>
    </section>
  );
}

/** The room's name on that date, the same way the rows name it. */
function venueName(p: OutdoorPeak): string {
  const venue = VENUES[p.venueId];
  return venue ? venueNameOn(venue, p.event.date) : p.venueId;
}
