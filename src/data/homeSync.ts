// Home city follows the account (docs/accounts-proposal.md: "Home city, yes").
// Signing in: the account's home wins when it has one (the same rule as entries);
// a phone with a home and an account without one sends the phone's up. After
// that, changing home on any signed-in phone updates the account. Signed out,
// home stays on the phone as before. Wired once from src/data/index.ts.

import { getAccount, onAccountChange } from './account';
import { getMyProfile, updateMyProfile } from './profiles';
import { getHomeId, setHomeId, subscribeHome } from '../lib/homeCity';

let applyingFromAccount = false;

onAccountChange(async (account) => {
  if (!account) return;
  const profile = await getMyProfile();
  if (!profile) return;
  const phone = getHomeId();
  if (profile.homeMetroId) {
    if (profile.homeMetroId !== phone) {
      applyingFromAccount = true;
      setHomeId(profile.homeMetroId);
      applyingFromAccount = false;
    }
  } else if (phone) {
    await updateMyProfile({ homeMetroId: phone });
  }
});

subscribeHome(() => {
  if (applyingFromAccount || !getAccount()) return;
  const id = getHomeId();
  if (id) void updateMyProfile({ homeMetroId: id });
});
