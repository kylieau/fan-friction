// Home city follows the account (docs/product/accounts-proposal.md: "Home city, yes").
// Signing in: the account's home wins when it has one (the same rule as entries);
// a phone with a home and an account without one sends the phone's up. After
// that, changing home on any signed-in phone updates the account. Signed out,
// home stays on the phone as before. Wired once from src/data/index.ts.

import { getAccount, onAccountChange } from './account';
import { getMyProfile, updateMyProfile } from './profiles';
import { getHomeId, homeSetQuietly, setHomeId, subscribeHome } from '../lib/homeCity';
import { clearHomeDefault, getSetup } from '../lib/setup';

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
    // The account's home is a real one, whatever the phone had (a setup Skip's fallback included).
    clearHomeDefault();
  } else if (phone && !getSetup().homeDefault) {
    // A fallback from a skipped setup is not a choice to send up (build 7.2, Section F).
    await updateMyProfile({ homeMetroId: phone });
  }
});

subscribeHome(() => {
  if (applyingFromAccount || homeSetQuietly() || !getAccount()) return;
  const id = getHomeId();
  if (id) void updateMyProfile({ homeMetroId: id });
});
