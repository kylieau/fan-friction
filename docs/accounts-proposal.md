# Accounts: what one holds (proposal, Oct 5, 2026)

_Draft, revised Oct 5 with Kylie's answers. Nothing here is built. Supabase project: `fhfqhcbnzmmkhsselayb` (URL and public key in `.env.local`, not in the repo)._

## Purpose
An **account** is the login: an email and the data saved under it, so your log survives a lost phone and follows you to another device. A **profile** is the public face: a display name and a page others can open and follow. Kylie (Oct 5) wants people to follow each other someday and would rather see public pages early so they can be corrected, so the data is shaped for profiles now and a simple profile page can be built in v1. The "no public profiles or feed" line came from the review doc's recommended v1 defaults, not from `direction.md`; she has overridden it. What stays firm: **no feed of strangers' nights**, and **no "Use my location."** The app never needs location.

## What an account holds

| Holds | What it is | Today | v1? |
|---|---|---|---|
| **Your events (My Stubs)** | Every event you marked Attended, with its private fields (review, With) and its stamp | Account, change-based sync (Oct 9) | **Yes** |
| **Plans** | Upcoming events you tapped Attend on; visible to approved followers (0012) | Account | **Yes** |
| **Hidden nights** | Pre-filled nights you removed from your log | On this phone | **Yes** |
| **Home city** | The one city the map opens on | On this phone | **Yes** |
| **Small settings** | Order of You, tips seen | On this phone | **Yes** |
| **Following** | Your teams, venues, artists | Not built | Later, when Following is built; room left for it now |
| **Photos** | Your own private photo on a night | Not built | Later (storage can start to cost 🚩) |
| **Sharing** | A private link to your log, or approved friends | Not built | Later, off by default |

## Profile (public face, Kylie wants it early)
- A display name and an optional avatar. No bio needed to start.
- A page showing the nights that person has chosen to make visible, with their stamps.
- A **"who can see my nights"** setting on the account: Only me (default) / People I approve / Anyone. One switch, changeable any time, the way Letterboxd lets a diary go private.
- Following: you follow people; their nights appear on their page. **Kylie (Oct 5): she does want a feed of the nights of people she follows** (friends only, never strangers). Build it after profiles are live; where it lives (You or Compare) is open.
- Profile stats: Nights, Venues, and the **heaviest night** (highest friction read). Not a city count.

## Not in v1 (room left)
- Comments or likes on a night. Confirming an on-the-night fact with a tap is the only reaction allowed (direction doc).
- Location. Never saved, never requested.
- Contacts import, ad tracking.

## Rules
- **Private by default.** Only you can read or change your rows. The database enforces this, not just the app.
- **Optional.** The app works fully without signing in, saving to the phone as it does today. Signing in just adds a safe copy.
- **First sign-in copies the phone log up.** Nothing you've marked is lost.
- **Export stays.** "Export my nights" keeps working, with or without an account.
- **Delete means delete.** Deleting the account removes all its rows.

## Sign-in (decided Oct 5)
**Google sign-in plus email link.** Kylie has set up Google sign-in on another project and liked it, so it comes in v1 (free; needs a Google Cloud OAuth client and a paste into Supabase). Email link is the fallback for anyone without Google. Supabase's built-in email sender has a small hourly limit; she may have disabled it on her other project, so check Auth settings before relying on it; a real email service is a later 🚩. Apple sign-in needs the $99/year Apple developer account 🚩, so it waits for the native app.

## Decided Oct 5
- **Pre-filled nights move to Kylie's account.** New people start with an empty log. Keeping a few as examples is optional; not needed.
- **A second phone, signed out,** shows an empty log and a "Sign in to see your nights" prompt.
- **Following:** a slot now, filled when Following is built.
- **Visibility:** private by default, with the door open (the switch above).
- **Photos:** explore later; only if it stays free. Supabase free storage is about 1 GB.
