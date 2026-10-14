// Build 5: the add-on filter (src/data/sources/addOns.ts) against one nightly sample (Oct 14, 2026: 97 listings typed
// "Event") and look-alike real events. Prints what is still listed. Usage: node scripts/addon-filter-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { isAddOnListing } = await server.ssrLoadModule('/src/data/sources/addOns.ts');
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
  "mike. Pre-Show VIP Upsell - DOES NOT INCLUDE A TICKET"
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
];

let failed = 0;
const listed = ADD_ONS.filter((name) => !isAddOnListing(name, 'special'));
console.log(`add-ons dropped: ${ADD_ONS.length - listed.length} of ${ADD_ONS.length} distinct names`);
if (listed.length) console.log('still listed (the held layered rule would catch these):\n  ' + listed.join('\n  '));
for (const name of REAL) if (isAddOnListing(name, 'special')) { failed += 1; console.log(`FAIL real event dropped: ${name}`); }
for (const [name, kind] of LOOK_ALIKES) if (isAddOnListing(name, kind)) { failed += 1; console.log(`FAIL look-alike dropped: ${name}`); }
for (const [name, kind] of STILL_DROPPED) if (!isAddOnListing(name, kind)) { failed += 1; console.log(`FAIL no longer dropped: ${name}`); }
console.log(failed ? `${failed} failed` : 'all passed');
process.exit(failed ? 1 : 0);
