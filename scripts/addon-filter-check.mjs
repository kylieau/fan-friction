// The add-on filter (src/data/sources/addOns.ts) against one nightly sample (Oct 14, 2026: 97 listings typed "Event"),
// look-alike real events, and the layered rule's own cases (Kylie, Oct 19, 2026: act names, same-room parents, shows
// with no genre). Prints what is still listed. Usage: node scripts/addon-filter-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { isAddOnListing, parentedAddOn, listingKey } = await server.ssrLoadModule('/src/data/sources/addOns.ts');
await server.close();

// Add-ons that listed as events that night (all came in as Undefined / Miscellaneous, so kind "special").
const ADD_ONS = [
  "Blue Line Buddies - MUST HAVE TICKET TO GAME",
  "Bottomless Soda&Popcorn Rewind Ultimate 2000s Rave 18+Not Event Ticket",
  "Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity",
  "Brooklyn Nets v. Charlotte Hornets: Pre-Game (Watch Warm-Ups)",
  "Brooklyn Nets v. Indiana Pacers Post-Game Free Throw Opportunity",
  "Brooklyn Nets v. Indiana Pacers: Pre-Game (Watch Warm-Ups)",
  "Bullseye Tailgate-Colts v Titans",
  "Dave Chappelle BetMGM Dinner Reservation",
  "Guided Tours of Scotiabank Arena",
  "High 5 Tunnel - MUST HAVE TICKET TO GAME",
  "Journey BetMGM Dinner Reservation",
  "Leafs Fan Access Plus Ups: Fanboni",
  "Leafs Fan Access Plus Ups: Penalty Box Experience - Warm-Up",
  "Matt Rife BetMGM Dinner Reservation",
  "MercyMe BetMGM Dinner Reservation",
  "Pepsi Tailgate: Tampa Bay Buccaneers Vs. Pittsburgh Steelers",
  "Post Game Slap Shot - MUST HAVE TICKET TO GAME",
  "Primepoint Social Pass - MUST HAVE TICKET TO GAME",
  "Raptors Fan Access Plus Ups - Courtside Access for Team Warmups",
  "Red Clay Strays BetMGM Dinner Reservation",
  "Rod Wave BetMGM Dinner Reservation",
  "SOMBR BetMGM Dinner Reservation",
  "San Antonio Spurs vs. Oklahoma City Thunder Frost Club Level Access",
  "San Antonio Spurs vs. Oklahoma City Thunder Post-Game Free Throw",
  "San Antonio Spurs vs. Phoenix Suns Courtside Experience",
  "San Antonio Spurs vs. Phoenix Suns Frost Club Level Access",
  "San Antonio Spurs vs. Phoenix Suns Post-Game Free Throw",
  "San Antonio Spurs vs. Sacrament Kings Post-Game Free Throw",
  "San Antonio Spurs vs. Sacramento Kings Courtside Experience",
  "San Antonio Spurs vs. Sacramento Kings Frost Club Level Access",
  "San Antonio Spurs vs. Sacramento Kings Post-Game Free Throw",
  "Teddy Swims BetMGM Dinner Reservation",
  "VIP Tailgate: Broncos v Seahawks",
  "mike. Pre-Show VIP Upsell - DOES NOT INCLUDE A TICKET",
  // Seen live Oct 19, 2026 (the layered rule's check across five cities).
  "Skydiggers Vinyl Upgrade - NOT A CONCERT TICKET",
  "NSQK MERCH UPGRADE (No da acceso al evento)",
  "Upsell: Mezzanine Bleachers - Not A Ticket",
  "Ultimate Fan Pass: 30-min Exclusive On-court Access From 12:30pm-1pm",
  "Brooklyn Nets v Portland Trail Blazers Post-Game Free Throw",
  "San Antonio Spurs - Postgame Free Throw",
  "Tylil's Friendsgiving Fest VIP M&G Add On",
  "MetLife Stadium VIP Tours"
];

// Real events that night with no genre: they must stay.
const REAL = [
  "A Live Conversation with David Arquette - Scream",
  "Alton Brown",
  "BVD Boston presents BEND OVA ( 21+ )",
  "Ben Schwartz",
  "Bloodsuckers Ball",
  "Bumble's Drone Spooktacular",
  "Congreso de Metanoia",
  "Creepy Cheapy XVIII: Night One",
  "Creepy Cheapy XVIII: Night Two",
  "Dan and Phil",
  "Holywatr",
  "Josh Johnson",
  "Kettama (16 and Over)",
  "Kill Tony",
  "Knox w/ Emi Grace",
  "Laura Ramoso",
  "Leanne Morgan",
  "Mike D 5D",
  "Milo Rossi - Ages 13+",
  "My Generation - All Ages (under 16 with adult)",
  "Napoleon Dynamite Live",
  "Nineteen Minutes Later",
  "Oceanside Shock vs. Minnesota Northern Lights",
  "Oceanside Shock vs. Stockton Thunder",
  "Paris Paloma",
  "Relics And Their Humans",
  "Sarah Jakes Roberts",
  "Sho-Bud Showcase Live",
  "Shyne",
  "Speed w/ God's Hate",
  "The Blasting Company plays \"Over The Garden Wall\" (16 and Over)",
  "Undertale Live",
  "Waylon Wyatt",
  "Woman Evolve w/ Sarah Jakes Roberts"
];

// Real events whose names share add-on words (research section 3, and the shows the old filter spared), with their kind.
const LOOK_ALIKES = [
  ['Experience Hendrix', 'show'],
  ["Club 90s: 2000's Night", 'show'],
  ['Bruno Mars: The Romantic Tour', 'show'],
  ['Nate Bargatze: Big Dumb Eyes World Tour', 'special'],
  ['The Nutcracker Suite', 'special'],
  ['Leanne Morgan', 'special'],
  ['Monster Jam', 'special'],
  ['Cavaliers vs. Knicks Eastern Conference Finals Watch Party', 'special'],
  ['Tour de France Watch Night', 'special'],
  ['Lakers vs. Celtics', 'game'],
  // Performers' tours the building-tour rule dropped until Oct 20, 2026 (the nightly log listed them).
  ['Garth Brooks - Blame It All On My Roots Arena Tour', 'show'],
  ['JOHN SUMMIT - CTRL ESCAPE ARENA TOUR', 'show'],
  ['The Jayhawks - Sanctuary Park Tour: Celebrating 40 Years', 'show'],
  ['Sanctuary Park Tour: Celebrating 40 Years of The Jayhawks', 'show'],
  ['for KING + COUNTRY - A Drummer Boy Christmas The 2026 Arena Tour', 'show'],
  ['Morgan Wallen - I\'m The Problem Stadium Tour', 'special'],
  // A performer's tour that names the room must stay (Oct 22, 2026: "tour at <building>" is a building tour only off a show).
  ['Taylor Swift | The Eras Tour at SoFi Stadium', 'show'],
  ['Cortaca Jug', 'game'],
  // Shows the Oct 22, 2026 nightly dropped: a band named Free Throw, and a theater's age note in the show's name.
  ['Free Throw w/ Microwave', 'show'],
  ['The Lion King (Touring) - Recommended for ages 6 and up. All guests entering the theater, regardless of age, must have a ticket', 'show'],
];

// Add-ons the old filter already dropped; they must stay dropped.
const STILL_DROPPED = [
  ['Parking - Rams vs. Bills', 'special'],
  ['Stadium Tour', 'special'],
  ['Premium: Club Seats', 'special'],
  ['Centre Bell - Repas Restaurant Canti', 'special'],
  ['Lot C Parking Pass', 'show'],
  ['Arena Tours', 'show'],
  ['Fenway Park Tours', 'special'],
  ['Madison Square Garden Tours', 'special'],
  // Building tours seen in the Oct 20, 2026 nightly log.
  ['Barclays Center Tours - Brooklyn Nets v. Boston Celtics', 'special'],
  ['Lucas Oil Stadium Tour', 'special'],
  ['Seattle Mariners Ballpark Tour', 'special'],
  ['Madison Square Garden Tour Experience', 'special'],
  ['Opry Backstage Tour', 'special'],
  ['KSE Venue Ball Arena Tours', 'special'],
  ['Los Angeles Coliseum Historic Tours', 'special'],
  ['All Access Pass – Climate Pledge Arena Tours', 'special'],
  ['Leafs VIP Guided Tour of Scotiabank Arena with alumni Darryl Sittler', 'special'],
  // Oct 22, 2026: the products a wider sports rule had let in on Oct 21 (Yankee Stadium, Belmont Park, Santa Anita).
  ['Classic Tour at Yankee Stadium', 'game'],
  ['Classic Tour at Yankee Stadium', 'special'],
  ['Seabiscuit Tram Tour', 'game'],
  ['Live Racing at Santa Anita Park', 'game'],
  ['Live Racing at Santa Anita Park', 'special'],
  // Oct 22, 2026 nightly: products kept as events at 5,000+ rooms.
  ['MVP Court Pass (Check In By 1:30PM)', 'special'],
  ['Harlem Globetrotters MVP Court Pass (Check in by 11:30am)', 'special'],
  ['Club Fee - Pentatonix', 'special'],
  ['Harlem Globetrotters - CPA Club Fee', 'special'],
  ['Jeff Dunham | Official Caesars Ticket + Hotel Packages', 'special'],
  ['Glow Suite Packages 2026', 'special'],
  ['Yuengling Flight Club Pre-Event Dinner: Seating 6:00pm-7:15pm', 'special'],
  ['Limited Edition Rivals Replica Game Ball From Spalding®', 'special'],
  ['DELTA SKY 360 CLUB RED CARPET EXPERIENCE - ANDREA BOCELLI', 'special'],
  // Oct 22, 2026 LA census check: a season-long product on one date.
  ["TMU Bold Women's Basketball - 2026-27 Season Pass", 'game'],
  ['Los Angeles Kings Season Tickets', 'special'],
];

// The research's look-alikes (section 3): real shows whose names carry add-on words.
LOOK_ALIKES.push(
  ["Alice's Restaurant", 'show'],
  ['Tunnel of Love', 'show'],
  ["Tailgate N' Tallboys", 'show'],
  ['Disney On Ice: Frozen & Encanto', 'special'],
  ['Monster Jam', 'special'],
  // Kept beside the Oct 22, 2026 product words: the real event, and multi-day passes (a festival may list only those).
  ['Harlem Globetrotters: Rivalry Tour Presented By Sprite', 'special'],
  ['Decadence Arizona - 2 Day Ticket', 'special'],
  ['Gateway Dirt Nationals - 3 Day Pass', 'special'],
);

// Layer 1: add-ons the seller files as acts of their own; the name alone may not say so.
const BY_ACT = [
  ['Rod Wave', ['Rod Wave', 'BetMGM Dinner Reservation'], 'special'],
  ['Fanboni', ['Leafs Fan Access Plus Ups'], 'special'],
  ['Olivia Dean', ['Centre Bell - Repas Restaurant Canti'], 'show'],
  ['Rush', ['Centre Bell - Stationnement'], 'special'],
  ['Estaciona-T', ['Estaciona-T - Estacionamiento - Mexico'], 'special'],
  // Oct 22, 2026: a room's tours and daily admission filed as acts.
  ['Glimpse of Greatness', ['Yankee Stadium Tours'], 'special'],
  ['Belmont Park - General Admission', ['Belmont Park Admission'], 'game'],
  ['Pumpkin Path & Fall Fun Fest', ['Live Racing at Santa Anita Park'], 'special'],
];
// Real listings whose acts must not trip layer 1.
const REAL_ACTS = [
  ['Arlo Guthrie', ['Arlo Guthrie'], 'show'],
  ['Lakers vs. Celtics', ['Los Angeles Lakers', 'Boston Celtics'], 'game'],
  ['Parquet Courts', ['Parquet Courts'], 'show'],
  // A named race day is a day out (Oct 22, 2026): the act is the race, not the room's admission.
  ['The Belmont Stakes - General Admission', ['The Belmont Stakes'], 'special'],
  ['Belmont Stakes Racing Festival - 2-Day General Admission', ['The Belmont Stakes'], 'special'],
];

// Layer 3: a same-room, same-date parent plus add-on words drops; other leftovers stay.
const PARENTED = [
  ['San Antonio Spurs vs. Phoenix Suns Courtside Experience', ['San Antonio Spurs vs. Phoenix Suns']],
  ['San Antonio Spurs v Phoenix Suns Post-Game Free Throw', ['San Antonio Spurs vs. Phoenix Suns']],
  ['Monster Jam Pit Party', ['Monster Jam']],
  ['Journey BetMGM Dinner Reservation', ['Journey']],
  // A pass sold beside the game (Oct 22, 2026).
  ['Pinstripe Pass * New York Yankees v. Tampa Bay Rays', ['New York Yankees vs. Tampa Bay Rays']],
];
const NOT_PARENTED = [
  ['Leanne Morgan (Late Show)', ['Leanne Morgan']],
  ['Monster Jam', ['Monster Jam Pit Party']],
  ['Cavaliers vs. Knicks Watch Party', ['Cavaliers vs. Knicks']],
  ['Bruno Mars: The Romantic Tour', ['Bruno Mars']],
  ['Belmont Stakes Racing Festival - 2-Day General Admission', ['The Belmont Stakes']],
];

// Layer 5: a show the seller left without a genre is read like any other listing; one with a genre keeps the strict rule.
const NO_GENRE = [['Heineken Garden Lounge', 'show', 'Undefined'], ['Fast Lane Early Entry', 'show', 'Miscellaneous']];
const WITH_GENRE = [['Lounge Lizards', 'show', 'Rock'], ['The Upgrade', 'show', 'Hip-Hop/Rap']];

let failed = 0;
for (const [name, acts, kind] of BY_ACT) if (!isAddOnListing(name, kind, { acts })) { failed += 1; console.log(`FAIL act add-on listed: ${name} [${acts.join(', ')}]`); }
for (const [name, acts, kind] of REAL_ACTS) if (isAddOnListing(name, kind, { acts })) { failed += 1; console.log(`FAIL real act dropped: ${name}`); }
for (const [name, others] of PARENTED) if (!parentedAddOn(name, others.map(listingKey))) { failed += 1; console.log(`FAIL parented add-on listed: ${name}`); }
for (const [name, others] of NOT_PARENTED) if (parentedAddOn(name, others.map(listingKey))) { failed += 1; console.log(`FAIL dropped by a parent: ${name}`); }
for (const [name, kind, genre] of NO_GENRE) if (!isAddOnListing(name, kind, { genre })) { failed += 1; console.log(`FAIL no-genre add-on listed: ${name}`); }
for (const [name, kind, genre] of WITH_GENRE) if (isAddOnListing(name, kind, { genre })) { failed += 1; console.log(`FAIL show with a genre dropped: ${name}`); }
const listed = ADD_ONS.filter((name) => !isAddOnListing(name, 'special'));
console.log(`add-ons dropped: ${ADD_ONS.length - listed.length} of ${ADD_ONS.length} distinct names`);
if (listed.length) console.log('still listed by name alone (layer 1 or 3 may catch them live):\n  ' + listed.join('\n  '));
for (const name of REAL) if (isAddOnListing(name, 'special')) { failed += 1; console.log(`FAIL real event dropped: ${name}`); }
for (const [name, kind] of LOOK_ALIKES) if (isAddOnListing(name, kind)) { failed += 1; console.log(`FAIL look-alike dropped: ${name}`); }
for (const [name, kind] of STILL_DROPPED) if (!isAddOnListing(name, kind)) { failed += 1; console.log(`FAIL no longer dropped: ${name}`); }
console.log(failed ? `${failed} failed` : 'all passed');
process.exit(failed ? 1 : 0);
