// Listings that are not a night out on their own: parking, venue tours, dinner reservations, pre-game extras, seat
// upgrades, anything that needs a ticket to the real event. Ticketmaster lists them as events; the filter drops them.
// Build 5 fixes (Kylie, Oct 14, from docs/research/topics/ticket-addon-filter-answer.md section 4.1, its four bugs):
//   1. Tours: a tour of the building is an add-on ("Guided Tours of Scotiabank Arena" got through), a performer's tour is
//      not (the bare word "tour" was dropping comedy tours such as "Nate Bargatze: Big Dumb Eyes World Tour").
//   2. "Not Event Ticket" counts like "Not an Event Ticket".
//   3. "Doesn't include a ticket" phrases count on every kind of listing, concerts included, in English and Spanish
//      (French guessed, unconfirmed).
//   4. Shapes widened: "Club Level Access", and the pre-game, post-game, warm-up and
//      tailgate words on a game-shaped name; "suite(s)" and "restaurant" now need a game shape too ("Nutcracker Suite").
// The layered rule (Kylie, Oct 19, 2026, evening: "build the layered rule now"; the research's section 4.2), on what the
// seller already sends, in this order:
//   0. Keep-list first: a watch party or a fan fest is a night out on its own.
//   1. The listing's own act names an add-on ("BetMGM Dinner Reservation", "Leafs Fan Access Plus Ups",
//      "Centre Bell - Stationnement"): sellers file add-ons as acts of their own.
//   2. Disclaimers ("must have ticket to game", "boleto de evento no incluido") on every kind of listing.
//   3. A same-room, same-date parent: the listing is another listing's name plus add-on words
//      ("San Antonio Spurs vs. Phoenix Suns Courtside Experience"). Needs the whole night, so it runs in the source
//      (`parentedAddOn`), not here.
//   4. Name words: strong add-on words on any listing that is not a show; the risky ones (suite, restaurant, tailgate,
//      tunnel, pre-game…) only on a game or a game-shaped name.
//   5. A show the seller left without a genre (Undefined, Miscellaneous) is read like any other listing for 4.
// Not built: the parent's product links (1a, unverified in the feed) and a "hide" outcome for season packages and
// standalone venue tours (tours drop, as before). Checked by scripts/addon-filter-check.mjs.
// Oct 22, 2026 (the step 2 follow-ups): the products a wider sports rule had let in on Oct 21 are add-ons by rule, not
// only kept out by the match shape: a building tour sold as "<Something> Tour at <building>" ("Classic Tour at Yankee
// Stadium", act "Yankee Stadium Tours"), a tram tour, a room's daily admission ("Belmont Park - General Admission",
// act "Belmont Park Admission"; "Live Racing at Santa Anita Park"), and a pass sold beside a game ("Pinstripe Pass *
// New York Yankees v. Tampa Bay Rays", layer 3). A named race day stays ("The Belmont Stakes - General Admission").

import type { CrowdEvent } from '../types';

/** Phrases that say the listing is not a ticket to the event. Every kind of listing. */
const DISCLAIMER = new RegExp(
  [
    // "Ticket to game" or "game ticket", never a bare "must have a ticket": a theater's age note says that on the show
    // itself ("The Lion King … regardless of age, must have a ticket", dropped by mistake Oct 22, 2026).
    String.raw`\bmust\s+have\s+(?:a\s+|valid\s+|a\s+valid\s+)?(?:(?:game|event)\s+ticket|tickets?\s+to\b)`,
    String.raw`\b(?:game|event|show)\s+tickets?\s+(?:is\s+|are\s+)?(?:required|sold\s+separately|not\s+included)`,
    String.raw`\b(?:does\s+)?not\s+include\s+(?:a\s+|an\s+|the\s+)?(?:game\s+|event\s+|show\s+)?(?:ticket|admission)`,
    String.raw`\bnot\s+(?:an?\s+)?(?:event|concert|game|show)\s+ticket`,
    String.raw`\bno\s+da\s+acceso\s+al\s+evento`,
    String.raw`\bno\s+(?:game|event)\s+ticket`,
    String.raw`\badmission\s+(?:not\s+included|sold\s+separately)`,
    String.raw`\bboletos?\s+(?:de\s+|del\s+)?(?:evento\s+)?no\s+incluid[oa]s?`,
    String.raw`\bno\s+incluye\s+(?:el\s+)?boleto`,
    String.raw`\bbillets?\s+(?:de\s+|du\s+)?(?:match|spectacle|[ée]v[ée]nement)?\s*non\s+inclus`,
    String.raw`\bne\s+comprend\s+pas\s+(?:le\s+)?billet`,
  ].join('|'),
  'i',
);

/** Layer 0: a watch party or a fan fest stays, whatever words it carries. */
const KEEP = /\bwatch\s+part(?:y|ies)\b|\bfan\s+fest\b/i;

/**
 * Layer 1: an act whose own name is a product, not a performer or a team. Short and product-like on purpose: a band
 * can be called almost anything, so bare "restaurant", "suite" or "tour" are not here.
 */
const ADDON_ACT = new RegExp(
  [
    String.raw`\bparking\b`, String.raw`\bestaciona(?:mi|i)ento\b`, String.raw`\bstationnement\b`, String.raw`\bdinner\s+reservations?\b`,
    String.raw`\breservaci[oó]n\b`, String.raw`\brepas\b`, String.raw`\bfan\s+access\b`, String.raw`\bplus\s+ups?\b`, String.raw`\bupsell\b`,
    // The building's own tours and its daily admission, filed as acts ("Yankee Stadium Tours", "Belmont Park Admission",
    // "Live Racing at Santa Anita Park"): a product named after the room, never a performer.
    String.raw`\b(?:venue|stadium|arena|ballpark|field|park|centre|center|garden|dome|coliseum)\s+tours\b`,
    String.raw`\badmission\b`, String.raw`\blive\s+racing\b`, String.raw`\btram\s+tours?\b`,
  ].join('|'),
  'i',
);

/** Add-on words strong enough on any listing that is not a show (research layer 4a). */
const STRONG = new RegExp(
  [
    String.raw`\bparking\b`, String.raw`\bestaciona(?:mi|i)ento\b`, String.raw`\bstationnement\b`, String.raw`\bno\s+field\s+access\b`,
    String.raw`\bcamping\b`, String.raw`\bvip\s+(?:package|upgrade|add-on)\b`, String.raw`\bmeet\s*(?:&|and|\+)\s*greet\b`,
    String.raw`\bupgrade\b`, String.raw`\brepas\b`, String.raw`\bsalon\s+des\b`, String.raw`\blounge\b`, String.raw`\bhospitality\b`,
    String.raw`\bdinner\s+reservations?\b`, String.raw`\bfan\s+access\b`, String.raw`\bplus\s+ups?\b`, String.raw`\bupsell\b`,
    String.raw`\b(?:post|pre)-?\s?game\s+free\s+throws?\b`, String.raw`\bcourtside\s+(?:access|experience)\b`, String.raw`\bsocial\s+pass\b`,
    String.raw`\bclub\s+level\s+access\b`, String.raw`\bflag\s+bearer\b`, String.raw`\bfanboni\b`, String.raw`\bbench\s+(?:access|photo)\b`,
    String.raw`\bon-(?:ice|court|field)\b`, String.raw`\bpit\s+(?:pass|party)\b`, String.raw`\bfast\s*lane\b`, String.raw`\bearly\s+entry\b`,
    String.raw`\bbottomless\b`, String.raw`\bm\s*&\s*g\b`, String.raw`\badd[- ]on\b`,
    // A room's race days and tram tours sold as a season-long product (Oct 22, 2026).
    String.raw`\blive\s+racing\b`, String.raw`\btram\s+tours?\b`,
    // Products the Oct 22, 2026 nightly kept as events at 5,000+ rooms: the Globetrotters' "MVP Court Pass" in 20-odd
    // arenas, club fees, ticket-and-hotel and suite packages, a pre-event dinner, a replica ball, a red-carpet extra.
    String.raw`\bcourt\s+pass\b`, String.raw`\bclub\s+fee\b`, String.raw`\b(?:hotel|suite)\s+packages?\b`,
    String.raw`\bpre-?\s?event\s+dinner\b`, String.raw`\breplica\b`, String.raw`\bred\s+carpet\s+experience\b`,
    // A season-long product listed on one date ("TMU Bold Women's Basketball - 2026-27 Season Pass", the Oct 22, 2026 LA census check).
    String.raw`\bseason\s+(?:pass(?:es)?|tickets?|packages?|memberships?)\b`,
    // A device reservation listed as its own event beside the game ("OneCourt", the haptic accessibility device, at the
    // Suns' arena on Nov 9, 2026; caught by the nightly's possible-copies line, Oct 23).
    String.raw`\bonecourt\b`,
  ].join('|'),
  'i',
);

/** Every add-on word, strong or risky: what the leftover words of a parent match must be (layer 3). */
const ADDON_WORDS = new RegExp(`${STRONG.source}|\\bsuites?\\b|\\brestaurant\\b|\\btailgate\\b|\\btunnel\\b|\\bpre-?\\s?game\\b|\\bpost-?\\s?game\\b|\\bwarm-?\\s?ups?\\b|\\bclub\\s+seats?\\b|\\bpass(?:es)?\\b`, 'i');

const BUILDING = String.raw`(?:venue|stadium|arena|ballpark|field|park|centre|center|garden|dome|coliseum)`;

/**
 * A tour of the building, not a performer's tour, on any listing: an explicit word ("Guided Tours of Scotiabank Arena",
 * "Opry Backstage Tour", "Coliseum Historic Tours"), "tours of" a building, the plural after a building word
 * ("Barclays Center Tours", "Climate Pledge Arena Tours", "MetLife Stadium VIP Tours"), or the French visit words.
 * A performer's tour is singular ("Garth Brooks - … Arena Tour", "Sanctuary Park Tour: … The Jayhawks", dropped by
 * mistake until Oct 20, 2026, when the nightly log listed them).
 */
const VENUE_TOUR = new RegExp(
  [
    String.raw`\b(?:guided|behind[- ]the[- ]scenes|backstage|pre-?game|historic)\s+tours?\b`,
    String.raw`\btours?\s+of\s+(?:the\s+)?[\w'. ]*${BUILDING}\b`,
    String.raw`\b${BUILDING}(?:\s+\w+){0,2}\s+tours\b`,
    String.raw`\bvisites?\s+guid[ée]es?\b`,
    String.raw`\bvisite\s+d'avant[- ]match\b`,
  ].join('|'),
  'i',
);

/** A singular "{building} Tour" ("Lucas Oil Stadium Tour", "Seattle Mariners Ballpark Tour") with no performer in front. */
const LONE_BUILDING_TOUR = new RegExp(String.raw`\b${BUILDING}\s+tour\b`, 'i');
const HAS_PARTS = /\s[-–|]\s|:\s/;

/** A tour sold at a building ("Classic Tour at Yankee Stadium"), never on a show, where a performer's tour could read so. */
const TOUR_AT_BUILDING = new RegExp(String.raw`\btours?\s+at\s+(?:the\s+)?[\w'. ]*${BUILDING}\b`, 'i');

/** Listings that are not shows: every building tour, a lone singular one ("Stadium Tour", "Garden Tour Experience"), a tour at a building. */
function isVenueTourWide(name: string): boolean {
  return VENUE_TOUR.test(name) || (LONE_BUILDING_TOUR.test(name) && !HAS_PARTS.test(name)) || TOUR_AT_BUILDING.test(name);
}

/** A matchup: "Spurs vs. Suns", "Broncos v Seahawks", "Nets at Hornets". */
const GAME_SHAPE = /\b(?:vs?\.?|versus|at|@)\s/i;

/** Words that are also in real show titles; they count only on a game-shaped name or a game. */
// Oct 26, 2026 (race and rodeo rooms take every Sports listing): a race weekend's camping, VIP and weekend-admission
// products ("NASCAR Cup Series Weekend Tent Space", "… VIP Access", "Championship Weekend Grandstand Admission").
const RISKY = /\b(?:suites?|restaurant|tailgate|tunnel|pre-?\s?game|post-?\s?game|warm-?\s?ups?|(?:rv|tent|camping)\s+(?:space|spot|site|pass)(?:es|s)?|vip\s+access|weekend\s+(?:grandstand\s+)?(?:admission|pass)|weekend\s*[-–—:]?\s*\d+[- ]?day\s+(?:pass|package|ticket)s?|\d+[- ]day\s+(?:pass|package)(?:es|s)?)\b/i;

/** The add-on shapes, on any kind: a premium prefix, a club or premium package, a pass. */
function isPremiumAddOn(name: string): boolean {
  // A leading "Suites -" is the seller's suite product beside an untitled-shape event ("Suites - Toyota Big 5 Classic",
  // kept as a possible copy in Philadelphia's Oct 25–26, 2026 nightlies); a dash, not a colon, so a
  // show named "Suite: …" stays.
  return /^\s*(?:premium|club|vip|platinum)\s*[:–-]|^\s*suites?\s+[–-]\s|\b(?:premium|club|platinum)(?:\s+level)? (?:seat(?:s|ing)?|package|experience|access|ticket)s?\b|\b(?:parking|lot|fast|early entry|pre-?show|pre-?game|tailgate|benchwarmers?) pass(?:es)?\b/i.test(
    name,
  );
}

/** Games and other listings: the strong add-on words, plus the risky ones on a game shape. */
function isOtherAddOn(name: string, game: boolean): boolean {
  if (STRONG.test(name) || isVenueTourWide(name)) return true;
  return (game || GAME_SHAPE.test(name)) && RISKY.test(name);
}

/** Shows: the add-on shapes only, never the bare words a tour or band name can carry. */
function isShowAddOn(name: string): boolean {
  return /\b(?:parking|camping|vip (?:package|upgrade|add-on)|meet (?:&|and) greet|hospitality|suites?)\b/i.test(name) || VENUE_TOUR.test(name);
}

/** What the seller says about a listing besides its name; every field optional (a hand seed has none). */
export interface ListingFacts {
  /** The acts the seller names on the listing (Ticketmaster's attractions). */
  acts?: readonly string[];
  /** The seller's genre ("Undefined" and "Miscellaneous" mean it gave none). */
  genre?: string;
}

const NO_GENRE = /^(?:undefined|miscellaneous|other)?$/i;

/** True when a listing is an add-on, not an event (any seller; Ticketmaster today). Layers 0, 1, 2, 4 and 5. */
export function isAddOnListing(name: string, kind: CrowdEvent['kind'], facts: ListingFacts = {}): boolean {
  if (KEEP.test(name)) return false;
  if (facts.acts?.some((act) => ADDON_ACT.test(act))) return true;
  if (DISCLAIMER.test(name) || isPremiumAddOn(name)) return true;
  // A show with a genre keeps the strict rule; one the seller left blank is read like any other listing (layer 5).
  if (kind === 'show' && !NO_GENRE.test(facts.genre ?? 'Music')) return isShowAddOn(name);
  return kind === 'show' ? isShowAddOn(name) || isOtherAddOn(name, false) : isOtherAddOn(name, kind === 'game');
}

/** A name for comparing listings: lowercase, one spacing, "vs" / "v." / "versus" alike, no trailing punctuation. */
export function listingKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\b(?:vs\.?|v\.?|versus)(?=\s)/g, 'vs')
    .replace(/[\s.,:;!–-]+$/g, '')
    .trim();
}

/**
 * Layer 3: the listing is another same-room, same-date listing's name plus add-on words ("San Antonio Spurs vs.
 * Phoenix Suns Courtside Experience" beside "San Antonio Spurs vs. Phoenix Suns"). The leftover words must be add-on
 * words, so "Leanne Morgan (Late Show)" beside "Leanne Morgan" stays; watch parties never have a same-room parent.
 * `others` are the keys (`listingKey`) of the other listings in that room that date.
 */
export function parentedAddOn(name: string, others: readonly string[]): boolean {
  const key = listingKey(name);
  if (KEEP.test(key)) return false;
  return others.some((parent) => {
    if (parent.length < 6 || parent === key || !key.includes(parent)) return false;
    const leftover = key.replace(parent, ' ');
    return ADDON_WORDS.test(leftover);
  });
}
