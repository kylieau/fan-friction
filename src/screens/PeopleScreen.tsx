import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { follow, followers, following, getAccount, removeFollower, subscribeAccount, unfollow, type Person } from '../data';

/**
 * Who sees you and who you see (Kylie, Oct 9, 3.24: "Following for who you see and
 * Followers for who sees you"). A follower can be removed; someone you follow,
 * unfollowed; a follower followed back. Nothing here notifies anyone.
 */
export function PeopleScreen() {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [params, setParams] = useSearchParams();
  const tab = params.get('tab') === 'following' ? 'following' : 'followers';
  const [list, setList] = useState<Person[] | null>(null);
  const [asking, setAsking] = useState<string | null>(null);

  const load = async () => {
    setList(await (tab === 'followers' ? followers() : following()));
  };
  useEffect(() => {
    let current = true;
    setList(null);
    (tab === 'followers' ? followers() : following()).then((rows) => current && setList(rows));
    return () => {
      current = false;
    };
  }, [tab, account?.id]);

  const name = (p: Person) => p.profile.displayName ?? p.profile.handle ?? 'Someone';

  return (
    <div className="screen page">
      <Link to="/you?tab=following" className="back-link">
        <ChevronDown /> You
      </Link>
      <h1 className="page-title">People</h1>
      <div className="segmented" role="tablist" aria-label="People">
        <button type="button" role="tab" aria-selected={tab === 'followers'} onClick={() => setParams({ tab: 'followers' })}>
          Followers
        </button>
        <button type="button" role="tab" aria-selected={tab === 'following'} onClick={() => setParams({ tab: 'following' })}>
          Following
        </button>
      </div>
      {/* The one line that says what access means (privacy 10). */}
      <p className="you-fine">{tab === 'followers' ? 'Followers see your logged events and plans.' : 'You see their logged events and plans once they approve.'}</p>
      {list === null ? null : list.length === 0 ? (
        <div className="card empty-card">
          <div className="card-title">{tab === 'followers' ? 'No followers yet.' : 'Not following anyone yet.'}</div>
        </div>
      ) : (
        <ul className="log-list">
          {list.map((p) => (
            <li key={p.profile.id} className="request-row">
              <Link to={p.profile.handle ? `/p/${p.profile.handle}` : '#'} className="log-main">
                <span className="log-title">{name(p)}</span>
                {p.profile.handle && <span className="log-facts">@{p.profile.handle}</span>}
              </Link>
              <span className="request-actions">
                {tab === 'followers' ? (
                  <>
                    {p.status === 'none' && (
                      <button type="button" className="link-button" onClick={async () => { await follow(p.profile); await load(); }}>
                        Follow back
                      </button>
                    )}
                    {p.status === 'pending' && <span className="you-fine">Requested</span>}
                    {asking === p.profile.id ? (
                      <span className="remove-confirm compact">
                        <span>Remove?</span>
                        <button type="button" className="link-button" onClick={() => setAsking(null)}>
                          Keep
                        </button>
                        <button type="button" className="link-button remove-entry" onClick={async () => { setAsking(null); await removeFollower(p.profile.id); await load(); }}>
                          Remove
                        </button>
                      </span>
                    ) : (
                      <button type="button" className="link-button" onClick={() => setAsking(p.profile.id)}>
                        Remove
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {p.status === 'pending' && <span className="you-fine">Requested</span>}
                    <button type="button" className="link-button" onClick={async () => { await unfollow(p.profile.id); await load(); }}>
                      {p.status === 'pending' ? 'Cancel' : 'Unfollow'}
                    </button>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
