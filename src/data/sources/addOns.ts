// Listings that are not a night out on their own: parking, venue tours, dinner reservations, pre-game extras, seat
// upgrades, anything that needs a ticket to the real event. Ticketmaster lists them as events; the filter drops them.
// Build 5 fixes (Kylie, Oct 14, from docs/research/topics/ticket-addon-filter-answer.md section 4.1, its four bugs only;
// the layered rule in section 4.2 is held until SeatGeek is live and the Ticketmaster API checks are done):
//   1. Tours: a tour of the building is an add-on ("Guided Tours of Scotiabank Arena" got through), a performer's tour is
//      not (the bare word "tour" was dropping comedy tours such as "Nate Bargatze: Big Dumb Eyes World Tour").
//   2. "Not Event Ticket" counts like "Not an Event Ticket".
//   3. "Doesn't include a ticket" phrases count on every kind of listing, concerts included, in English and Spanish
//      (French guessed, unconfirmed).
//   4. Shapes widened: "Club Level Access", and the pre-game, post-game, warm-up and
//      tailgate words on a game-shaped name; "suite(s)" and "restaurant" now need a game shape too ("Nutcracker Suite").
// Checked by scripts/addon-filter-check.mjs.

import type { CrowdEvent } from '../types';

/** Phrases that say the listing is not a ticket to the event. Every kind of listing. */
const DISCLAIMER = new RegExp(
  [
    String.raw`\bmust\s+have\s+(?:a\s+|valid\s+|a\s+valid\s+)?(?:game\s+|event\s+)?ticket`,
    String.raw`\b(?:game|event|show)\s+tickets?\s+(?:is\s+|are\s+)?(?:required|sold\s+separately|not\s+included)`,
    String.raw`\b(?:does\s+)?not\s+include\s+(?:a\s+|an\s+|the\s+)?(?:game\s+|event\s+|show\s+)?(?:ticket|admission)`,
    String.raw`\bnot\s+(?:an?\s+)?event\s+ticket`,
    String.raw`\bno\s+(?:game|event)\s+ticket`,
    String.raw`\badmission\s+(?:not\s+included|sold\s+separately)`,
    String.raw`\bboletos?\s+(?:de\s+|del\s+)?(?:evento\s+)?no\s+incluid[oa]s?`,
    String.raw`\bno\s+incluye\s+(?:el\s+)?boleto`,
    String.raw`\bbillets?\s+(?:de\s+|du\s+)?(?:match|spectacle|[ée]v[ée]nement)?\s*non\s+inclus`,
    String.raw`\bne\s+comprend\s+pas\s+(?:le\s+)?billet`,
  ].join('|'),
  'i',
);

/** A tour of the building, not a performer's tour ("Guided Tours of Scotiabank Arena", "Stadium Tour"; not "World Tour"). */
const VENUE_TOUR = /\b(?:guided|pre-?game|behind[- ]the[- ]scenes|backstage|venue|stadium|arena|ballpark|field|park|centre|center|garden|dome|coliseum)\s+tours?\b|\btours?\s+of\s+(?:the\s+)?[\w'. ]*(?:arena|stadium|centre|center|field|park|garden|ballpark|coliseum|dome)\b|\bvisites?\s+guid[ée]es?\b|\bvisite\s+d'avant[- ]match\b/i;

/**
 * The same, wider, for listings that are not shows: the building word may sit a word or two before "tour" ("Los Angeles
 * Coliseum Historic Tours" got through as a 77,500-person event, Oct 16), and a name ending in the plural "Tours" is a
 * building's tours. Shows keep the strict rule: "Garden Party Tour" is a concert, and a performer's tour is "Tour", singular.
 */
const VENUE_TOUR_WIDE = new RegExp(`${VENUE_TOUR.source}|\\b(?:stadium|arena|ballpark|field|park|centre|center|garden|dome|coliseum)(?:\\s+\\w+){1,2}\\s+tours?\\b|\\btours\\s*$`, 'i');

/** A matchup: "Spurs vs. Suns", "Broncos v Seahawks", "Nets at Hornets". */
const GAME_SHAPE = /\b(?:vs?\.?|versus|at|@)\s/i;

/** Words that are also in real show titles; they count only on a game-shaped name or a game. */
const RISKY = /\b(?:suites?|restaurant|tailgate|pre-?\s?game|post-?\s?game|warm-?\s?ups?)\b/i;

/** The add-on shapes, on any kind: a premium prefix, a club or premium package, a pass. */
function isPremiumAddOn(name: string): boolean {
  return /^\s*(?:premium|club|vip|platinum)\s*[:–-]|\b(?:premium|club|platinum)(?:\s+level)? (?:seat(?:s|ing)?|package|experience|access|ticket)s?\b|\b(?:parking|lot|fast|early entry|pre-?show|pre-?game|tailgate|benchwarmers?) pass(?:es)?\b/i.test(
    name,
  );
}

/** Games and other listings: the bare add-on words, plus the risky ones on a game shape. */
function isOtherAddOn(name: string, game: boolean): boolean {
  if (/\b(parking|no field access|camping|vip (?:package|upgrade|add-on)|meet (?:&|and) greet|upgrade|repas|salon des|lounge|hospitality)\b/i.test(name) || VENUE_TOUR_WIDE.test(name)) return true;
  return (game || GAME_SHAPE.test(name)) && RISKY.test(name);
}

/** Shows: the add-on shapes only, never the bare words a tour or band name can carry. */
function isShowAddOn(name: string): boolean {
  return /\b(?:parking|camping|vip (?:package|upgrade|add-on)|meet (?:&|and) greet|hospitality|suites?)\b/i.test(name) || VENUE_TOUR.test(name);
}

/** True when a listing is an add-on, not an event (any seller; Ticketmaster today). */
export function isAddOnListing(name: string, kind: CrowdEvent['kind']): boolean {
  if (DISCLAIMER.test(name) || isPremiumAddOn(name)) return true;
  return kind === 'show' ? isShowAddOn(name) : isOtherAddOn(name, kind === 'game');
}
