import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import { HeaviestStat, Stat, heaviestEntry } from '../components/StatCards';
import {
  blockUser,
  canSignIn,
  entriesOf,
  follow,
  followStatus,
  followsMe,
  getAccount,
  getProfileByHandle,
  nightsOf,
  plansOf,
  ratingForEntry,
  removeFollower,
  scoresForNights,
  subscribeAccount,
  type Entry,
  type FollowStatus,
  type PlanCard,
  type Profile,
  unfollow,
  isGameEventId,
  stubShapeOf,
} from '../data';
import { shortLocalDate } from '../lib/dates';
import { datePath } from '../lib/view';
import { loggedDateLabel } from '../lib/dates';
import { eventPath, type BackTo } from '../lib/view';
import { TitleText } from '../components/TitleText';
import { BackLink } from '../components/BackLink';

/**
 * Someone's page as others see it: name, three stats, and the entries they allow
 * others to see. Your own controls (filters, Export, Edit profile, requests) live
 * on You, not here; opening your own link shows exactly what a visitor sees.
 * Private notes never appear here. There is no feed.
 */
export function ProfileScreen() {
  const { handle = '' } = useParams();
  // Back goes to the page this was opened from, with its name (R08); a pasted link goes to You.
  const back: BackTo = (useLocation().state as { back?: BackTo } | null)?.back ?? { to: '/you', label: 'You' };
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [status, setStatus] = useState<FollowStatus>('none');
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [asking, setAsking] = useState(false);
  const [plans, setPlans] = useState<PlanCard[]>([]);
  const [theyFollow, setTheyFollow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [confirm, setConfirm] = useState<'remove' | 'block' | null>(null);

  const mine = Boolean(profile && account && profile.id === account.id);

  useEffect(() => {
    let current = true;
    setProfile(undefined);
    getProfileByHandle(handle).then(async (found) => {
      if (!current) return;
      setProfile(found);
      if (!found) return;
      const [list, st, ahead, follower] = await Promise.all([entriesOf(found.id), followStatus(found.id), plansOf(found.id), followsMe(found.id)]);
      if (!current) return;
      setEntries(list);
      setStatus(st);
      setPlans(ahead);
      setTheyFollow(follower);
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
        <BackLink to={back.to} label={back.label} />
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
      // A declined request cannot be cancelled and still reads "Requested" (R03).
      setStatus(await unfollow(profile.id));
    }
    setBusy(false);
  };

  return (
    <div className="screen page">
      <BackLink to={back.to} label={back.label} />

      <div className="profile-head">
        {/* The Google picture is stored on the profile but not shown (Kylie, Oct 5): a
            letter in Dodger blue keeps every page in the app's own colors. */}
        <span className="avatar avatar-big" aria-hidden>
          {name.slice(0, 1).toUpperCase()}
        </span>
        <div className="you-who">
          <h1 className="page-title">{name}</h1>
          {profile.handle && <span className="you-handle">@{profile.handle}</span>}
        </div>
        {!mine && account && (
          <span className="people-menu">
            <button type="button" className="round-button people-more" aria-label={`More for ${name}`} aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
              ⋯
            </button>
            {menu && (
              <span className="people-menu-sheet" role="menu">
                {theyFollow && (
                  <button type="button" role="menuitem" className="link-button" onClick={() => { setMenu(false); setConfirm('remove'); }}>
                    Remove
                  </button>
                )}
                <button type="button" role="menuitem" className="link-button remove-entry" onClick={() => { setMenu(false); setConfirm('block'); }}>
                  Block
                </button>
              </span>
            )}
          </span>
        )}
      </div>
      {confirm && (
        <div className="remove-confirm" role="group" aria-label={confirm === 'remove' ? 'Remove this follower?' : 'Block?'}>
          <span>{confirm === 'remove' ? 'Remove them as a follower?' : `Block ${name}?`}</span>
          <button type="button" className="link-button" onClick={() => setConfirm(null)}>
            Keep
          </button>
          <button
            type="button"
            className="link-button remove-entry"
            onClick={async () => {
              const which = confirm;
              setConfirm(null);
              if (which === 'remove') {
                await removeFollower(profile.id);
                setTheyFollow(false);
              } else {
                const error = await blockUser(profile.id);
                if (error) setNote(error);
                else {
                  setStatus('none');
                  setTheyFollow(false);
                  setEntries([]);
                  setPlans([]);
                }
              }
            }}
          >
            {confirm === 'remove' ? 'Remove' : 'Block'}
          </button>
        </div>
      )}

      <div className="stat-grid">
        <Stat n={entries.length} label="Events" />
        <Stat n={venues} label="Venues" />
        <HeaviestStat rating={heaviest} />
      </div>

      {!mine && status === 'none' && asking && (
        <div className="card follow-ask">
          {/* The one line before a request goes out (Kylie, Oct 9, 3.24; privacy 2). */}
          <p className="card-title">If {name} approves, you'll see their logged events and plans.</p>
          <div className="entry-form-actions">
            <button type="button" className="link-button" onClick={() => setAsking(false)}>
              Cancel
            </button>
            <button type="button" className="gold-button small" onClick={() => { setAsking(false); void toggleFollow(); }} disabled={busy}>
              Send request
            </button>
          </div>
        </div>
      )}
      {!mine && !(status === 'none' && asking) && (
        <button
          type="button"
          className={status === 'none' ? 'gold-button' : 'mark-button on'}
          onClick={() => (status === 'none' ? setAsking(true) : void toggleFollow())}
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

      {plans.length > 0 && (
        <section className="you-block" aria-labelledby="profile-plans-heading">
          <h2 id="profile-plans-heading" className="you-heading">
            Coming Up
          </h2>
          <ul className="log-list">
            {plans.map((plan) => (
              <li key={plan.id}>
                <Link
                  to={isGameEventId(plan.eventId) ? eventPath(plan.eventId!, plan.metroId) : datePath(plan.date, plan.metroId, plan.eventId)}
                  state={isGameEventId(plan.eventId) ? { stub: { title: plan.title, date: plan.date, venue: plan.venue, metroId: plan.metroId } } : undefined}
                  className="log-row"
                >
                  <span className="log-main">
                    <span className="log-title"><TitleText text={plan.title} /></span>
                    <span className="log-facts">{[shortLocalDate(plan.date), plan.venue, METROS[plan.metroId]?.name, plan.interested ? 'Interested' : plan.watch ? 'Watching' : null].filter(Boolean).join(' · ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="you-block" aria-labelledby="profile-entries-heading">
        <h2 id="profile-entries-heading" className="you-heading">
          Events
        </h2>
        {entries.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">
              {mine ? 'No events yet. Find one on the map.' : 'No events to show.'}
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
        <span className="log-title"><TitleText text={entry.title} /></span>
        <span className="log-facts">{facts}</span>
        {entry.review && <span className="log-review">{entry.review}</span>}
      </span>
    </>
  );
  if (entry.eventId) {
    return (
      <Link to={eventPath(entry.eventId, entry.metroId ?? DEFAULT_METRO.id)} state={isGameEventId(entry.eventId) ? { stub: stubShapeOf(entry) } : undefined} className="log-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row">{body}</div>;
}
