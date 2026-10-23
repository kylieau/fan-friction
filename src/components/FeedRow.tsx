import { Link, useLocation } from 'react-router-dom';
import { ReadTile } from './ReadTile';
import { TitleText } from './TitleText';
import { isGameEventId, ratingForEntry, type Entry, type FeedItem } from '../data';
import { feedSentence } from '../lib/activity';
import { shortLocalDate } from '../lib/dates';
import { backFrom, datePath, eventPath } from '../lib/view';

/** One line of a friend's activity on Home's Following strip: "Sam attended", "Priya is attending", the event, the date. */
export function FeedRow({ item, ratings }: { item: FeedItem; ratings: ReadonlyMap<string, number> }) {
  const location = useLocation();
  const back = backFrom(location.pathname, location.search);
  const rating = item.entry && !item.example ? ratingForEntry(item.entry, ratings) : null;
  const facts = [shortLocalDate(item.date), item.venue].filter(Boolean).join(' · ');
  const { lead, tail } = feedSentence(item);
  const body = (
    <>
      {rating !== null && <ReadTile rating={rating} />}
      <span className="log-main">
        <span className="log-friend">
          {item.example || !item.friend.handle ? lead : <Link to={`/p/${item.friend.handle}`} state={{ back }} className="log-friend-link">{lead}</Link>}
          {item.example && <span className="example-chip">Example</span>}
        </span>
        <span className="log-title">
          <TitleText text={item.title} />
          {tail}
        </span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (item.example || !item.metroId) return <li className="log-row">{body}</li>;
  return (
    <li>
      <Link to={item.eventId ? eventPath(item.eventId, item.metroId) : datePath(item.date, item.metroId)} state={friendStubState(item.eventId, item)} className="log-row">
        {body}
      </Link>
    </li>
  );
}

/** A friend's line on a game the app holds no event for: what the event page needs to build it (Kylie, Oct 15). */
export function friendStubState(eventId: string | undefined, line: { title: string; date: string; venue?: string; metroId?: string; entry?: Entry }) {
  if (!isGameEventId(eventId)) return undefined;
  return { stub: { title: line.title, date: line.date, venue: line.venue, metroId: line.metroId, sport: line.entry?.sport, inMetro: line.entry?.inMetro } };
}

