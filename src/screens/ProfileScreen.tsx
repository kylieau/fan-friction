import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import { HeaviestStat, Stat, heaviestEntry } from './YouScreen';
import {
  canSignIn,
  entriesOf,
  follow,
  followStatus,
  getAccount,
  getProfileByHandle,
  nightsOf,
  ratingForEntry,
  scoresForNights,
  subscribeAccount,
  type Entry,
  type FollowStatus,
  type Profile,
  unfollow,
} from '../data';
import { loggedDateLabel } from '../lib/dates';
import { eventPath } from '../lib/view';

/**
 * Someone's page as others see it: name, three stats, and the entries they allow
 * others to see. Your own controls (filters, Export, Edit profile, requests) live
 * on You, not here; opening your own link shows exactly what a visitor sees.
 * Private notes never appear here. There is no feed.
 */
export function ProfileScreen() {
  const { handle = '' } = useParams();
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [status, setStatus] = useState<FollowStatus>('none');
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const mine = Boolean(profile && account && profile.id === account.id);

  useEffect(() => {
    let current = true;
    setProfile(undefined);
    getProfileByHandle(handle).then(async (found) => {
      if (!current) return;
      setProfile(found);
      if (!found) return;
      const [list, st] = await Promise.all([entriesOf(found.id), followStatus(found.id)]);
      if (!current) return;
      setEntries(list);
      setStatus(st);
    });
    return () => {
      current = false;
    };
  }, [handle, account?.id]);

  useEffect(() => {
    let current = true;
    scoresForNights(nightsOf(entries)).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, []);

  if (profile === undefined) return <div className="screen page" />;

  if (!profile) {
    return (
      <div className="screen page">
        <Link to="/you" className="back-link">
          <ChevronDown /> You
        </Link>
        <h1 className="page-title">No one here</h1>
        <p className="you-fine">There's no profile at /p/{handle}. Check the link.</p>
      </div>
    );
  }

  const name = profile.displayName ?? profile.handle ?? 'Someone';
  const venues = new Set(entries.map((n) => n.venue).filter(Boolean)).size;
  const heaviest = heaviestEntry(entries, ratings);

  const toggleFollow = async () => {
    if (busy) return;
    if (!account) {
      setNote('Sign in on the You tab to follow.');
      return;
    }
    setBusy(true);
    setNote(null);
    if (status === 'none') {
      const result = await follow(profile);
      if (result === 'pending' || result === 'approved') setStatus(result);
      else setNote(result);
    } else {
      await unfollow(profile.id);
      setStatus('none');
    }
    setBusy(false);
  };

  return (
    <div className="screen page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>

      <div className="profile-head">
        {/* The Google picture is stored on the profile but not shown (Kylie, Oct 5): a
            letter in Dodger blue keeps every page in the app's own colors. */}
        <span className="avatar avatar-big" aria-hidden>
          {name.slice(0, 1).toUpperCase()}
        </span>
        <h1 className="page-title">{name}</h1>
      </div>

      <div className="stat-grid">
        <Stat n={entries.length} label="Events" />
        <Stat n={venues} label="Venues" />
        <HeaviestStat rating={heaviest} />
      </div>

      {!mine && (
        <button
          type="button"
          className={status === 'none' ? 'gold-button' : 'mark-button on'}
          onClick={toggleFollow}
          disabled={busy || !canSignIn()}
        >
          {status === 'none' ? 'Follow' : status === 'pending' ? 'Requested' : 'Following'}
        </button>
      )}
      {note && (
        <p className="you-fine" role="status">
          {note}
        </p>
      )}

      <section className="you-block" aria-labelledby="profile-entries-heading">
        <h2 id="profile-entries-heading" className="you-heading">
          Events
        </h2>
        {entries.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">
              {mine
                ? 'No events yet. Find one on the map.'
                : profile.visibility === 'anyone'
                  ? 'No events yet.'
                  : profile.visibility === 'approved'
                    ? 'Events are shared with approved followers.'
                    : 'This log is private.'}
            </div>
          </div>
        ) : (
          <ul className="log-list">
            {entries.map((entry) => (
              <li key={entry.id}>
                <ProfileEntryRow entry={entry} rating={ratingForEntry(entry, ratings)} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

/** A night on someone's page: title, date, venue, stamp. No notes, no personal facts. */
function ProfileEntryRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const city = entry.metroId ? METROS[entry.metroId]?.name : undefined;
  const facts = [loggedDateLabel(entry.when), entry.venue, city].filter(Boolean).join(' · ');
  const body = (
    <>
      {rating !== null && (
        <span className={`log-score ${scoreBand(rating)}`} aria-label={`${scoreLabel(rating)}, ${rating} out of 10`}>
          <span className="log-score-num">{rating}</span>
          <span className="log-score-word">{scoreLabel(rating)}</span>
        </span>
      )}
      <span className="log-main">
        <span className="log-title">{entry.title}</span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (entry.eventId) {
    return (
      <Link to={eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id)} className="log-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row">{body}</div>;
}
