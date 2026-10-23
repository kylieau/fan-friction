import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { scoreLabel } from '../config/scoreLabels';
import { YearHeader, yearParam } from '../components/YearHeader';
import { ReadTile } from '../components/ReadTile';
import { TitleText } from '../components/TitleText';
import { TypeIcon } from '../components/TypeIcon';
import { TagChip } from '../components/TagChip';
import { CrowdMark } from '../components/EventTags';
import { TicketIcon, TvIcon } from '../components/Icons';
import { biggestCrowd, entriesInYear, entryAtLeastMark, entryCrowd, entryTeams, getPersonalLog, nightsOf, ratingForEntry, scoresForNights, subscribePersonalLog, tagSummaries, teamCounts, todayIn, yearsOf, yourEntries, type Entry } from '../data';
import { crowdThousands } from '../map/crowdPoints';
import { entryTypeKey } from '../map/typeIcons';
import { loggedDateLabel, shortLocalDate } from '../lib/dates';
import { getHomeId } from '../lib/homeCity';
import { entryPath, eventPath } from '../lib/view';

/**
 * Recap (build 7, §3.8; Kylie, Oct 22, 2026; mocks 44 and 48): a scrolling page of moments, the year's story, not a
 * Wrapped-style tap-through and not the scoreboard (that is Your year). Moments: the year so far, the first event,
 * the biggest crowd, the heaviest friction read with your usual, the most-seen team, the top tag, new venues,
 * attended against watched, and the way to those stubs. No photos (none stored yet) and no sharing (backlog).
 * Verdict words come from the score labels only.
 */
export function RecapScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [params] = useSearchParams();
  const today = todayIn(METROS[getHomeId() ?? DEFAULT_METRO.id] ?? DEFAULT_METRO);
  const thisYear = today.slice(0, 4);
  const entries = useMemo(() => yourEntries(log), [log]);
  const years = useMemo(() => yearsOf(entries, thisYear), [entries, thisYear]);
  const year = yearParam(params.get('year'), thisYear);
  const inYear = useMemo(() => entriesInYear(entries, year === 'All time' ? 'all' : year).sort((a, b) => a.when.sort.localeCompare(b.when.sort)), [entries, year]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(inYear)).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [inYear]);

  const attended = inYear.filter((e) => !e.watched);
  const watched = inYear.length - attended.length;
  const dated = inYear.filter((e) => e.when.precision === 'day');
  const first = dated[0];
  const last = dated[dated.length - 1];
  const biggest = biggestCrowd(inYear);
  const nextBiggest = biggest ? biggestCrowd(inYear.filter((e) => e.id !== biggest.id)) : null;
  const rated = attended.map((entry) => ({ entry, rating: ratingForEntry(entry, ratings) })).filter((r): r is { entry: Entry; rating: number } => r.rating !== null);
  const heaviest = [...rated].sort((a, b) => b.rating - a.rating)[0];
  const usual = median(rated.map((r) => r.rating));
  const teams = teamCounts(inYear);
  const topTeam = teams[0];
  const topTeamStubs = topTeam ? inYear.filter((e) => entryTeams(e).includes(topTeam.label)) : [];
  const tags = tagSummaries(inYear, []);
  const topTag = tags[0];
  const topTagStubs = topTag ? inYear.filter((e) => e.userTags?.includes(topTag.tag)) : [];
  const before = year === 'All time' ? [] : entries.filter((e) => !e.watched && e.when.sort < `${year}-01-01`);
  const seenBefore = new Set(before.map((e) => e.venue).filter(Boolean));
  const venues = [...new Set(attended.map((e) => e.venue).filter((v): v is string => Boolean(v)))];
  const newVenues = venues.filter((v) => !seenBefore.has(v));
  const span = year === 'All time' ? 'All time' : year === thisYear ? `Jan 1 – ${shortLocalDate(today)}` : `Jan 1 – Dec 31, ${year}`;
  const to = (e: Entry) => (e.eventId ? eventPath(e.eventId, e.metroId ?? DEFAULT_METRO.id) : entryPath(e.id));

  const moment = (title: string, right: string | undefined, body: React.ReactNode) => (
    <section className="card recap-moment">
      <div className="recap-moment-head">
        <span className="recap-kicker">{title}</span>
        {right && <span className="recap-right">{right}</span>}
      </div>
      {body}
    </section>
  );
  const chips = (list: Entry[]) => (
    <div className="recap-chips">
      {list.slice(0, 6).map((e) => (
        <Link key={e.id} to={to(e)} className="recap-chip">
          {e.watched ? <TvIcon /> : <TicketIcon size={13} />} {e.when.precision === 'day' ? shortLocalDate(e.when.sort).replace(/^\w+, /, '') : loggedDateLabel(e.when)}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="screen page recap-page">
      <YearHeader title="Recap" years={years} year={year} sub={span} />
      <section className="card recap-hero">
        <span className="recap-kicker">{year === 'All time' ? 'All time' : year === thisYear ? `Your ${year} so far` : `Your ${year}`}</span>
        <div className="year-hero recap-hero-line">
          <span className="year-big">{attended.length}</span>
          <span className="year-hero-words">{attended.length === 1 ? 'event attended' : 'events attended'}</span>
        </div>
        <p className="recap-hero-sub">{[watched > 0 ? `and ${watched} watched` : null, first && last && first !== last ? `${shortLocalDate(first.when.sort).replace(/^\w+, /, '')} to ${shortLocalDate(last.when.sort).replace(/^\w+, /, '')}` : null].filter(Boolean).join(' · ')}</p>
      </section>
      {inYear.length === 0 && <p className="you-fine">Nothing logged{year === 'All time' ? '' : ` in ${year}`} yet. Tap + to log an event.</p>}
      {first &&
        moment(
          year === 'All time' ? 'First ever' : 'First of the year',
          shortLocalDate(first.when.sort),
          <Link to={to(first)} className="recap-event">
            <span className="recap-event-main">
              <span className="recap-event-title">
                <TypeIcon typeKey={entryTypeKey(first)} size={16} /> <TitleText text={first.title} />
              </span>
              <span className="recap-event-sub">{[first.venue, first.watched ? 'Watched' : 'Attended'].filter(Boolean).join(' · ')}</span>
            </span>
            <ReadTile rating={ratingForEntry(first, ratings)} />
          </Link>,
        )}
      {biggest &&
        moment(
          'Biggest crowd',
          biggest.when.precision === 'day' ? shortLocalDate(biggest.when.sort) : undefined,
          <Link to={to(biggest)} className="recap-event recap-crowd">
            <span className="recap-crowd-num">
              <CrowdMark /> {crowdThousands(entryCrowd(biggest)?.count ?? 0)}
              {entryAtLeastMark(biggest)}
            </span>
            <span className="recap-event-title">
              <TitleText text={biggest.title} />
            </span>
            {biggest.venue && <span className="recap-event-sub">{biggest.venue}</span>}
            {nextBiggest && <span className="recap-note">Next biggest: {nextBiggest.title}, {crowdThousands(entryCrowd(nextBiggest)?.count ?? 0)}</span>}
          </Link>,
        )}
      {heaviest &&
        moment(
          'Heaviest friction read',
          heaviest.entry.when.precision === 'day' ? shortLocalDate(heaviest.entry.when.sort) : undefined,
          <Link to={to(heaviest.entry)} className="recap-event">
            <ReadTile rating={heaviest.rating} size="big" />
            <span className="recap-event-main">
              <span className="recap-event-title">
                <TitleText text={heaviest.entry.title} />
              </span>
              {biggest && biggest.id === heaviest.entry.id && <span className="recap-event-sub">Same game as your biggest crowd</span>}
              {usual !== null && rated.length >= 3 && (
                <span className="recap-note">
                  Your usual read: {scoreLabel(usual)}, {usual.toFixed(1)}
                </span>
              )}
            </span>
          </Link>,
        )}
      {topTeam &&
        topTeam.count >= 2 &&
        moment(
          'Most-seen team',
          undefined,
          <>
            <div className="recap-big-line">
              <span className="recap-big">{topTeam.count}</span>
              <span className="recap-event-main">
                <span className="recap-event-title">{topTeam.label}</span>
                <span className="recap-event-sub">{[topTeamStubs.filter((e) => !e.watched).length > 0 ? `${topTeamStubs.filter((e) => !e.watched).length} attended` : null, topTeamStubs.filter((e) => e.watched).length > 0 ? `${topTeamStubs.filter((e) => e.watched).length} watched` : null].filter(Boolean).join(' · ')}</span>
              </span>
            </div>
            {chips(topTeamStubs)}
          </>,
        )}
      {topTag &&
        moment(
          'Top tag',
          'Your own tags',
          <>
            <div className="recap-big-line">
              <span className="recap-big">{topTag.count}</span>
              <Link to={`/you/stubs?tag=${encodeURIComponent(topTag.tag)}`} className="recap-tag-link">
                <TagChip tag={topTag.tag} />
              </Link>
            </div>
            {chips(topTagStubs)}
            {tags[1] && <span className="recap-note">Next: {tags[1].tag}, {tags[1].count}</span>}
          </>,
        )}
      {venues.length > 0 &&
        moment(
          year === 'All time' ? 'Venues' : 'New venues',
          year === 'All time' ? `${venues.length} total` : `${newVenues.length} new · ${venues.length} total`,
          <>
            <ul className="recap-venues">
              {(year === 'All time' ? venues : newVenues).slice(0, 8).map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            {year !== 'All time' && seenBefore.size > 0 && newVenues.length > 0 && <span className="recap-note">New this year; {venues.length - newVenues.length} you had been to before.</span>}
          </>,
        )}
      {inYear.length > 0 &&
        moment(
          'Attended vs watched',
          undefined,
          <>
            <span className="rank-bar recap-bar" aria-hidden>
              <span className="rank-bar-attended" style={{ width: `${(attended.length / inYear.length) * 100}%` }} />
              <span className="rank-bar-watched" style={{ width: `${(watched / inYear.length) * 100}%` }} />
            </span>
            <div className="recap-bar-words">
              <span>
                <TicketIcon size={13} /> {attended.length} attended
              </span>
              <span>
                <TvIcon /> {watched} watched
              </span>
            </div>
          </>,
        )}
      {inYear.length > 0 && (
        <Link to={`/you/stubs${year === 'All time' ? '' : `?year=${year}`}`} className="heading-link recap-all">
          See these {inYear.length} stubs ›
        </Link>
      )}
    </div>
  );
}

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round(((sorted[mid - 1] + sorted[mid]) / 2) * 10) / 10;
}
