# Accounts: what one holds (proposal, Oct 5, 2026)

_Draft for Kylie to react to. Nothing here is built. Supabase project: `fhfqhcbnzmmkhsselayb` (URL and public key in `.env.local`, not in the repo)._

## Purpose
An account exists so your log survives a lost or wiped phone and follows you to another device. That's it for v1. It is not a profile and not a social presence.

## What an account holds

| Holds | What it is | Today | v1? |
|---|---|---|---|
| **Your nights** | Every night you marked "I was there," with its private fields (outcome, starter, promo, notable, your note) and its stamp | On this phone | **Yes** |
| **Saved nights (plans)** | Upcoming nights you tapped "Save this night" on | On this phone | **Yes** |
| **Hidden nights** | Pre-filled nights you removed from your log | On this phone | **Yes** |
| **Home city** | The one city the map opens on | On this phone | **Yes** |
| **Small settings** | Order of You, tips seen | On this phone | **Yes** |
| **Following** | Your teams, venues, artists | Not built | Later, when Following is built; room left for it now |
| **Photos** | Your own private photo on a night | Not built | Later (storage can start to cost 🚩) |
| **Sharing** | A private link to your log, or approved friends | Not built | Later, off by default |

## What an account does not hold
- No public profile, username, avatar, bio or follower count.
- No friend list or feed in v1.
- No location history beyond the nights you log. "Use my location" stays a one-time tap and is never saved.
- No contacts, no ad tracking.
- Just an email address, used only to sign in.

## Rules
- **Private by default.** Only you can read or change your rows. The database enforces this, not just the app.
- **Optional.** The app works fully without signing in, saving to the phone as it does today. Signing in just adds a safe copy.
- **First sign-in copies the phone log up.** Nothing you've marked is lost.
- **Export stays.** "Export my nights" keeps working, with or without an account.
- **Delete means delete.** Deleting the account removes all its rows.

## Sign-in (lean)
Email link: you type your email, tap the link it sends, and you're in. No password, free, no developer accounts. Supabase's built-in email sender has a small hourly limit, which is fine for you and a few testers; a real email service is a later 🚩. Google sign-in can come later (free, a little setup). Apple sign-in needs the $99/year Apple developer account 🚩, so it waits for the native app.

## Open questions
1. **Your pre-filled nights.** Today they ship inside the app for everyone. With accounts, the natural home is *your* account. A new person would then see an empty log, with your nights shown only as examples (for instance in "Were you there?"). Lean: move them to your account; keep a few as examples.
2. **Signed out on a second phone.** Lean: it shows the pre-filled examples and a "Sign in to see your nights" prompt.
3. **Following:** leave a slot now and fill it when Following is built? Lean: yes.
