import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  approveFollow,
  canSignIn,
  declineFollow,
  follow,
  followRequests,
  followStatus,
  getAccount,
  getProfileByHandle,
  getRatedDates,
  nightsOf,
  ratingForNight,
  subscribeAccount,
  unfollow,
  type FollowRequest,
  type FollowStatus,
  type LoggedNight,
  type Profile,
} from '../data';
import { loggedDateLabel } from '../lib/dates';
import { eventPath } from '../lib/view';

/**
 * One person's profile: name, three personal stats, and the nights they allow
 * others to see. Your own page adds Edit profile and any follow requests.
 * Private notes never appear here. There is no feed.
 */
export function ProfileScreen() {
  const { handle = '' } = useParams();
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [nights, setNights] = useState<LoggedNight[]>([]);
  const [status, setStatus] = useState<FollowStatus>('none');
  const [requests, setRequests] = useState<FollowRequest[]>([]);
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
      const [list, st] = await Promise.all([nightsOf(found.id), followStatus(found.id)]);
      if (!current) return;
      setNights(list);
      setStatus(st);
    });
    return () => {
      current = false;
    };
  }, [handle, account?.id]);

  useEffect(() => {
    if (!mine) return;
    let current = true;
    followRequests().then((list) => current && setRequests(list));
    return () => {
      current = false;
    };
  }, [mine]);

  useEffect(() => {
    let current = true;
    getRatedDates(DEFAULT_METRO.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
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
  const venues = new Set(nights.map((n) => n.venue).filter(Boolean)).size;
  // The night with the highest friction read. Kylie wants this over a city count (Oct 5).
  const heaviest = nights.reduce<number | null>((best, n) => {
    const r = ratingForNight(n, ratings);
    return r !== null && (best === null || r > best) ? r : best;
  }, null);

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

  const decide = async (followerId: string, yes: boolean) => {
    if (yes) await approveFollow(followerId);
    else await declineFollow(followerId);
    setRequests((list) => list.filter((r) => r.followerId !== followerId));
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
        <Stat n={nights.length} label="Nights" />
        <Stat n={venues} label="Venues" />
        <div className="stat-card">
          <span className="stat-num">{heaviest === null ? '—' : heaviest}</span>
          <span className="stat-label">{heaviest === null ? 'Heaviest night' : `Heaviest · ${scoreLabel(heaviest)}`}</span>
        </div>
      </div>

      {mine ? (
        <Link to="/profile/edit" className="mark-button profile-edit">
          Edit profile
        </Link>
      ) : (
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

      {mine && requests.length > 0 && (
        <section className="you-block" aria-labelledby="requests-heading">
          <h2 id="requests-heading" className="you-heading">
            Wants to follow you
          </h2>
          <ul className="log-list">
            {requests.map((r) => (
              <li key={r.followerId} className="request-row">
                <span className="log-title">{r.displayName ?? r.handle ?? 'Someone'}</span>
                <span className="request-actions">
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, true)}>
                    Approve
                  </button>
                  <button type="button" className="link-button" onClick={() => decide(r.followerId, false)}>
                    Decline
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="you-block" aria-labelledby="profile-nights-heading">
        <h2 id="profile-nights-heading" className="you-heading">
          Nights
        </h2>
        {nights.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">
              {mine
                ? 'No nights yet. Find one on the map.'
                : profile.visibility === 'anyone'
                  ? 'No nights yet.'
                  : profile.visibility === 'approved'
                    ? 'Nights are shared with approved followers.'
                    : 'This log is private.'}
            </div>
          </div>
        ) : (
          <ul className="log-list">
            {nights.map((night) => (
              <li key={night.id}>
                <ProfileNightRow night={night} rating={ratingForNight(night, ratings)} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{n}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/** A night on someone's page: title, date, venue, stamp. No notes, no personal facts. */
function ProfileNightRow({ night, rating }: { night: LoggedNight; rating: number | null }) {
  const city = night.metroId ? METROS[night.metroId]?.name : undefined;
  const facts = [loggedDateLabel(night.when), night.venue, city].filter(Boolean).join(' · ');
  const body = (
    <>
      {rating !== null && (
        <span className={`log-score ${scoreBand(rating)}`} aria-label={`${scoreLabel(rating)}, ${rating} out of 10`}>
          <span className="log-score-num">{rating}</span>
          <span className="log-score-word">{scoreLabel(rating)}</span>
        </span>
      )}
      <span className="log-main">
        <span className="log-title">{night.title}</span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (night.eventId) {
    return (
      <Link to={eventPath(night.eventId, night.metroId ?? DEFAULT_METRO.id)} className="log-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row">{body}</div>;
}
