// Gridlock (formula v4, lightest form, Oct 5, 2026): everyone converging on the
// same roads at the same time, whether or not they like the same things.
// Needs only venue locations, capacities, start times and a city type.
// Zones are venues within 2 km. Nearby zones leak a little load into each other.
// A zone is scored against its own normal night on a log scale: normal = 1,
// a quarter more = 3.4, half more = 5.4, double = 8.5.
// The full zone design (road shares, rail, choke points) waits for a season of stamps.

import { METROS } from '../../config/metros';
import { milesBetween } from '../../lib/windows';
import { drawSize, eventFeedsFriction } from '../read';
import type { CrowdEvent, LngLat } from '../types';
import { isStrained, VENUES } from '../venues';

const ZONE_MILES = 1.25; // about 2 km
const NEAR_MILES = 4; // about 12 minutes in a sprawl city
const FAR_MILES = 9.5; // about 30 minutes
const SPILL_NEAR: Record<string, number> = { sprawl: 0.15, hub: 0.15, transit: 0.1 };
const SPILL_FAR = 0.05;
const ARRIVAL_HOURS = 2;
const EXIT_HOURS = 1;
const DURATION: Record<string, number> = { football: 3.25, baseball: 2.75, basketball: 2.5, hockey: 2.5, soccer: 2, concert: 3 };
const DEFAULT_START: Record<string, number> = { football: 13.1, baseball: 19.2, basketball: 19.5, hockey: 19.5, soccer: 19.5, concert: 20 };
const SCALE = 7.5;

/** City type: drive-centric sprawl, destination hub, or transit-dominant. Others default to sprawl. */
// Seattle is a hub (research, Oct 6, 2026, docs/research/city-builds/seattle/seattle-city-type-answer.md): in between. Core crowds run 37–70% by
// car (Husky Stadium 37% observed, Lumen Field 60%, Climate Pledge Arena ~63%), the suburbs 85–95%. Every Seattle
// venue carries its own carShare, so this default only covers a room without one.
// New York is also a hub, not transit (research, Oct 6, 2026, docs/research/city-builds/new-york/new-york-city-type-answer.md): ~60% of a big crowd
// arrives by car, weighted by seats. The ballparks broke the assumption — Citi Field ~60% car, Yankee Stadium ~50%.
// Only the rail-hub buildings (MSG, Barclays, Radio City) are transit-tier; Long Island and the Meadowlands drive.
// Kept hub after the Oct 14 arrival-share research (new-york-arrival-shares-answer-claude.md / -codex.md; Kylie, Oct 14): no
// metro-wide majority either way, and the type only moves spillover here (every room has its own carShare). Its sentence is its
// own (cityTravel.ts). A car share counts everyone arriving by car, taxi or rideshare: they use the same streets and curbs.
// Boston is a hub (research, Oct 12, 2026, docs/research/city-builds/boston/boston-city-type-answer.md): downtown rooms are rail-adjacent
// and parking-starved, but Gillette and Xfinity pull the capacity-weighted share toward driving. Overrides on Fenway, Gillette and Xfinity only where sourced.
// Montreal is in between with a transit core (research, Oct 7, 2026, docs/research/city-builds/montreal/montreal-city-type-answer.md): the Bell Centre and the
// downtown sites sit at or under a third by car; Laval's Place Bell (65%) carries its own figure. No venue reaches 80%.
// Dallas–Fort Worth is a driving region (research, Oct 7, 2026, docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-city-type-answer.md): no large
// venue clears 20% transit; Arlington has none at all.
// Chicago is hub (Kylie, Oct 13, B2; research Oct 7–13, chicago-city-type-answer.md and chicago-city-type-answer-astra.md):
// in between regionally; only Wrigley (42.1% car incl. remote-parking drivers, 2013 gameday plan) and United Center (86.9% car, 2023 patron survey)
// have sourced venue carShare wired (B7). Other rooms use the hub 0.85 default.
// The Bay Area is driving, leaning (research, Oct 7, 2026, docs/research/city-builds/bay-area/bay-area-city-type-answer.md): Oracle Park and
// Chase Center are about half by car, nearly every other big crowd 80–95%; the research picks a 0.85 default.
// Atlanta is a driving region (research, Oct 7, 2026, docs/research/city-builds/atlanta/atlanta-city-type-answer.md): no regular-season
// crowd measured under ~70% car; only the two downtown buildings on MARTA take a real rail share.
// Milwaukee: provisional driving default; both research answers found no measured local mode split.
// No venue override is inferred from parking or historical shuttle counts.
// Philadelphia is a hub (research, Oct 12, 2026, docs/research/city-builds/philadelphia/philadelphia-city-type-answer.md): Sports Complex
// crowds run ~74–81% car-involved with meaningful B-line share; co-located stadiums share lots and Pattison/Broad approaches.
// Tampa: provisional driving default (research §8.1); no venue carShare overrides in this pass.
// Toronto is transit (research, Oct 12, 2026, docs/research/city-builds/toronto/toronto-city-type-answer.md): the capacity-weighted
// estimate for the large rooms is about 0.40, and no venue has a measured person-level split. Estimated per-room shares stay in the
// research; rooms without their own figure use the transit fallback. Suburban arenas are called out there as likely higher.
// Columbus is sprawl (research, Oct 12, 2026, docs/research/city-builds/columbus/columbus-city-type-answer.md): no rail,
// no measured mode split, and every venue estimate is 0.72–0.93 car. sprawl and hub share the 0.85 fallback; the
// Arena District cluster is the contrary case, recorded in the implementation register, not a second city type.
// Nashville is sprawl (research, Oct 12, 2026, docs/research/city-builds/nashville/nashville-city-type-answer.md):
// the only measured event-transit share is about 1.6% at a Titans game, and that was mostly car-involved.
// Estimated car shares stay in the research; no venue override is wired (same rule as Milwaukee).
// Austin is a hub (research, Oct 11, 2026, docs/research/city-builds/austin/austin-city-type-answer.md): car-dominant
// (regional estimate about 0.77), with a real UT campus cluster and lower car shares at ACL and SXSW. sprawl is the
// alternative; hub and sprawl share today's 0.85 fallback. Every Austin car share in that answer is an estimate,
// not a measured mode split, so no venue override is wired.
// Phoenix: sprawl (research Oct 11, 2026). No measured event mode split; downtown rail inference and
// suburban structural estimates stay in the research. No venue carShare overrides (Milwaukee/Tampa pattern).
// Vancouver is transit (research, Oct 12, 2026, docs/research/city-builds/vancouver/vancouver-city-type-answer.md), low confidence:
// no measured attendee survey. Estimated car shares, including Hastings Park and Langley, stay in the research.
// No venue override is wired (same rule as Milwaukee and Tampa). The transit spill stays 0.10; Hastings Park has no rapid transit.
// Sacramento is a hub (research, Oct 12, 2026, docs/research/city-builds/sacramento/sacramento-city-type-answer.md):
// downtown/riverfront and Cal Expo share bridges, ramps and lots. No venue carShare is wired; every split in that answer is estimated or a fallback.
// Mexico City is transit (research, Oct 11, 2026, docs/research/city-builds/mexico-city/mexico-city-city-type-answer.md):
// the only quantified event split is about 0.35 car-involved at Banorte during the World Cup, and the capacity-weighted
// estimates sit nearer 0.4 than 0.85. Low-confidence venue overrides stay in the research and are not wired.
// Las Vegas is a hub (research, Oct 12, 2026, docs/research/city-builds/las-vegas/las-vegas-city-type-answer.md):
// the Strip rooms share approaches and hotel audiences, and the non-car share is walking from hotels, not transit.
// No measured mode split. Estimated car shares stay in the research; no venue override is wired (same rule as Milwaukee and Tampa).
// Kansas City is sprawl (research, Oct 12, 2026, docs/research/city-builds/kansas-city/kansas-city-city-type-answer.md):
// recurring large rooms are mostly estimates at 0.93–0.97 car-involved, and the downtown spine is still about 0.80.
// No measured recurring mode split, so no venue carShare is wired; the 0.85 fallback stands.
// Houston is driving sprawl (research, Oct 12, 2026, docs/research/city-builds/houston/houston-city-type-answer.md):
// recurring Reliant Park events derive to about 0.90 car-involved and the suburbs estimate 0.96–0.97.
// No venue carShare is set. None of those figures is a measured mode split. Downtown spill is the contrary case for hub.
// Minneapolis–St. Paul is a hub (research, Oct 12, 2026, docs/research/city-builds/minneapolis/minneapolis-city-type-answer.md):
// downtown and campus stadiums share a rail spine. Estimated car shares, including Allianz,
// Mystic Lake and the State Fair grandstand, stay in the research.
// No venue override is wired (same rule as Milwaukee and Tampa).
// Cleveland is a hub (research, Oct 12, 2026, docs/research/city-builds/cleveland/cleveland-city-type-answer.md):
// capacity-weighted core about 0.89 car-involved; downtown clusters share approaches. Estimated car shares are wired
// on the venues the answer numbered; none is a measured mode split.
// New Orleans is a hub (research, Oct 12, 2026, docs/research/city-builds/new-orleans/new-orleans-city-type-answer.md):
// the Superdome, Smoothie King Center and Champions Square share one garage set. Every car-share in that answer
// is an estimate, none measured, so no venue override is stored; the hub fallback applies.
// Denver is a hub (research, Oct 12, 2026, docs/research/city-builds/denver/denver-city-type-answer.md): downtown cluster
// spill between Empower Field, Ball Arena and Coors Field; outlying rooms are sprawl-like. Venue carShare values are estimates (C04 Oct 12).
// Raleigh–Durham is sprawl (research, Oct 12, 2026, docs/research/city-builds/raleigh-durham/raleigh-durham-city-type-answer.md):
// every large room but the UNC and Duke campus rooms sits on surface lots by a freeway, no venue has rail, and event transit is
// park-and-ride that starts with a car trip. No share is measured; the venue carShare values wired in venues.ts are the answer's
// labelled estimates (section 8.2), so only rooms with a row there carry one and the rest use the sprawl fallback.
// Pittsburgh is a hub (research, Oct 12, 2026, docs/research/city-builds/pittsburgh/pittsburgh-city-type-answer.md):
// North Shore and Downtown share garages, T stations and bridges; estimated core sports splits sit around 0.76–0.86 car-involved.
// Portland is a hub (research, Oct 12, 2026, docs/research/city-builds/portland/portland-city-type-answer.md):
// measured Providence Park splits and estimated Rose Quarter, Ridgefield and Hillsboro overrides; Theater of the Clouds is not a room.
// San Antonio is sprawl (research, Oct 12, 2026, docs/research/city-builds/san-antonio/san-antonio-city-type-answer.md):
// no rail, event transit is mostly park-and-ride (car-involved), and outlying rooms estimate 0.95+ car.
// Estimated venue car shares are wired on each room (C04, Oct 12); Alamodome P&R bounds are measured rides, not a full split.
// Edmonton is a hub (research, Oct 12, 2026, docs/research/city-builds/edmonton/edmonton-city-type-answer.md): LRT-linked
// downtown and Commonwealth/EXPO clusters. Estimated car shares for Rogers Place and Commonwealth are wired on those rooms (C04, Oct 12).
// Ottawa–Gatineau is a hub (research, Oct 12, 2026, docs/research/city-builds/ottawa-gatineau/ottawa-gatineau-city-type-answer.md):
// Kanata is car-dominant while Lansdowne and LeBreton run much lower; venue carShare overrides carry the sourced estimates.
// Indianapolis is sprawl (research, Oct 12, 2026, docs/research/city-builds/indianapolis/indianapolis-city-type-answer.md):
// event transit use is tiny where bounded; suburban rooms are parking-led. Estimated car shares are wired on venues (C04, Oct 12).
// St. Louis is a hub (research, Oct 12, 2026, docs/research/city-builds/st-louis/st-louis-city-type-answer.md): estimated car shares on venues (C04).
// Salt Lake City is hub (research, Oct 12, 2026, docs/research/city-builds/salt-lake-city/salt-lake-city-city-type-answer.md):
// downtown, Fairpark and the university share TRAX lines; suburban rooms are car-heavier. Venue carShare
// values are wired from that answer (estimated, or agency-derived for Rice-Eccles football).
const CITY_TYPE: Record<string, 'sprawl' | 'hub' | 'transit'> = { la: 'sprawl', 'san-diego': 'sprawl', seattle: 'hub', 'new-york': 'hub', atlanta: 'sprawl', 'bay-area': 'sprawl', chicago: 'hub', 'dallas-fort-worth': 'sprawl', detroit: 'sprawl', montreal: 'transit', milwaukee: 'sprawl', boston: 'hub', philadelphia: 'hub', pittsburgh: 'hub', tampa: 'sprawl', miami: 'sprawl', columbus: 'sprawl', cleveland: 'hub', nashville: 'sprawl', austin: 'hub', phoenix: 'sprawl', vancouver: 'transit', sacramento: 'hub', 'mexico-city': 'transit', 'las-vegas': 'hub', 'kansas-city': 'sprawl', houston: 'sprawl', indianapolis: 'sprawl', toronto: 'transit', minneapolis: 'hub', 'new-orleans': 'hub', 'ottawa-gatineau': 'hub', 'salt-lake-city': 'hub', edmonton: 'hub', 'washington-dc': 'hub', 'san-antonio': 'sprawl', portland: 'hub', 'raleigh-durham': 'sprawl', 'st-louis': 'hub', denver: 'hub' };

/** Names for zones people know. Anything else is named after its largest venue. */
const ZONE_NAMES: Record<string, string> = {
  'crypto-com-arena': 'Downtown',
  'dodger-stadium': 'Dodger Stadium',
  coliseum: 'Exposition Park',
  'bmo-stadium': 'Exposition Park',
  'sofi-stadium': 'Inglewood',
  'intuit-dome': 'Inglewood',
  'kia-forum': 'Inglewood',
  'hollywood-bowl': 'Hollywood Bowl',
  'rose-bowl': 'Pasadena',
  'dignity-health-sports-park': 'Carson',
  'angel-stadium': 'Anaheim',
  'honda-center': 'Anaheim',
  // Seattle
  'lumen-field': 'SoDo',
  't-mobile-park': 'SoDo',
  'wamu-theater': 'SoDo',
  'climate-pledge-arena': 'Seattle Center',
  'seattle-center': 'Seattle Center',
  'memorial-stadium-seattle': 'Seattle Center',
  'husky-stadium': 'University District',
  'alaska-airlines-arena': 'University District',
  'tacoma-dome': 'Tacoma Dome',
  'accesso-showare-center': 'Kent',
  'angel-of-the-winds-arena': 'Everett',
  'everett-memorial-stadium': 'Everett',
  'white-river-amphitheatre': 'Auburn',
  'emerald-downs': 'Auburn',
  // Philadelphia Sports Complex (Linc, Citizens Bank Park, Xfinity Mobile Arena share SCSSD lots and NRG Station).
  'lincoln-financial-field': 'South Philadelphia Sports Complex',
  'citizens-bank-park': 'South Philadelphia Sports Complex',
  'xfinity-mobile-arena': 'South Philadelphia Sports Complex',
  // Cleveland Gateway cluster (city-type answer §7).
  'progressive-field': 'Gateway District',
  'rocket-arena': 'Gateway District',
  'wolstein-center': 'Gateway District',
  'huntington-bank-field': 'Lakefront',
  'public-hall-cleveland': 'Lakefront',
  'jacobs-pavilion': 'Flats West Bank',
  'keybank-state-theatre': 'Playhouse Square',
  'connor-palace': 'Playhouse Square',
  'mimi-ohio-theatre': 'Playhouse Square',
  // Navy Yard / Buzzard Point / Wharf (city-type answer §7.5): South Capitol, M St SE/SW, Navy Yard and Waterfront stations.
  'nationals-park': 'Navy Yard',
  'audi-field': 'Navy Yard',
  'the-anthem-dc': 'Navy Yard',
  // Columbus clusters that share approaches (city-type answer §5b). Distance still forms the zone.
  'nationwide-arena': 'Arena District',
  'scottsmiracle-gro-field': 'Arena District',
  'huntington-park': 'Arena District',
  'kemba-live-outdoor': 'Arena District',
  'kemba-live-indoor': 'Arena District',
  'ohio-stadium': 'Ohio State',
  'value-city-arena': 'Ohio State',
  'st-john-arena': 'Ohio State',
  'jesse-owens-memorial-stadium': 'Ohio State',
  'bill-davis-stadium': 'Ohio State',
  'osu-covelli-center': 'Ohio State',
  'ohio-state-ice-rink': 'Ohio State',
  'osu-lacrosse-stadium': 'Ohio State',
  'mershon-auditorium': 'Ohio State',
  'historic-crew-stadium': 'Ohio Expo Center',
  'celeste-center': 'Ohio Expo Center',
  // Nashville. Downtown rooms share the East Bank lots and the river bridges; the fairgrounds rooms share one campus.
  'nissan-stadium': 'Downtown',
  // Indianapolis
  'lucas-oil-stadium': 'Downtown',
  'gainbridge-fieldhouse': 'Downtown',
  'victory-field': 'White River State Park',
  'everwise-amphitheater': 'White River State Park',
  'indianapolis-motor-speedway': 'Speedway',
  'ruoff-music-center': 'Noblesville',
  'fishers-event-center': 'Fishers',
  'corteva-coliseum': 'Fairgrounds',
  'geodis-park': 'Fairgrounds',
  'firstbank-stadium': 'Vanderbilt',
  'floyd-stadium': 'MTSU',
  'nashville-superspeedway': 'Lebanon',
  'firstbank-amphitheater': "Thompson's Station",
  'grand-ole-opry-house': 'Music Valley',
  'gentry-center': 'Tennessee State',
  'allen-arena': 'Lipscomb',
  // Austin: DKR, Moody Center and Myers share I-35 / MLK / Red River (research cluster 1).
  'dkr-texas-memorial-stadium': 'UT Campus',
  'moody-center': 'UT Campus',
  'myers-stadium': 'UT Campus',
  // Phoenix downtown (Chase, the arena and the theatre share Jefferson Street garages). Westgate and the ASU campus are their own clusters.
  'chase-field': 'Downtown Phoenix',
  'mortgage-matchup-center': 'Downtown Phoenix',
  'arizona-financial-theatre': 'Downtown Phoenix',
  'state-farm-stadium': 'Westgate',
  'desert-diamond-arena': 'Westgate',
  'mountain-america-stadium': 'ASU Tempe',
  'desert-financial-arena': 'ASU Tempe',
  'mullett-arena': 'ASU Tempe',
  // Vancouver clusters named in the city-type answer.
  'bc-place': 'Stadium district',
  'rogers-arena': 'Stadium district',
  'queen-elizabeth-theatre': 'Stadium district',
  'orpheum-vancouver': 'Stadium district',
  'vogue-theatre': 'Stadium district',
  'commodore-ballroom': 'Stadium district',
  'pacific-coliseum': 'Hastings Park',
  'freedom-mobile-arch': 'Hastings Park',
  'pne-agrodome': 'Hastings Park',
  'langley-events-centre': 'Willoughby',
  'langley-centre-gym': 'Willoughby',
  'willoughby-stadium': 'Willoughby',
  'thunderbird-arena': 'UBC',
  'thunderbird-stadium': 'UBC',
  'war-memorial-gym': 'UBC',
  'chan-centre': 'UBC',
  // Sacramento downtown / riverfront rooms within about 2 km, and the two campus clusters.
  'golden-1-center': 'Downtown',
  'sacramento-memorial-auditorium': 'Downtown',
  'safe-credit-union-performing-arts-center': 'Downtown',
  'ace-of-spades': 'Downtown',
  'heart-health-park': 'Cal Expo',
  'hornet-stadium': 'Sacramento State',
  'hornet-pavilion': 'Sacramento State',
  'sac-state-nest': 'Sacramento State',
  'uc-davis-health-stadium': 'UC Davis',
  'university-credit-union-center': 'UC Davis',
  // Mexico City: Magdalena Mixhuca shares Metro Line 9; Nápoles is the stadium, bullring and WTC within about 2 km.
  'estadio-gnp-seguros': 'Magdalena Mixhuca',
  'palacio-de-los-deportes': 'Magdalena Mixhuca',
  'estadio-alfredo-harp-helu': 'Magdalena Mixhuca',
  'estadio-ciudad-de-los-deportes': 'Nápoles',
  'plaza-de-toros-mexico': 'Nápoles',
  'pepsi-center-wtc': 'Nápoles',
  // Las Vegas Strip rooms that fall in one zone. North Strip starts at Sphere; South Strip is centered on T-Mobile.
  't-mobile-arena': 'South Strip',
  'allegiant-stadium': 'South Strip',
  'michelob-ultra-arena': 'South Strip',
  'mgm-grand-garden': 'South Strip',
  'dolby-live': 'South Strip',
  'ph-live': 'South Strip',
  sphere: 'North Strip',
  'resorts-world-theatre': 'North Strip',
  'bleaulive-theater': 'North Strip',
  'downtown-las-vegas-events-center': 'Downtown',
  'cashman-field': 'Downtown',
  // Kansas City clusters that share lots or the same approach (research, Oct 12, 2026).
  'arrowhead-stadium': 'Truman Sports Complex',
  'kauffman-stadium': 'Truman Sports Complex',
  'sporting-park': 'Village West',
  'kansas-speedway': 'Village West',
  'legends-field': 'Village West',
  'hy-vee-arena': 'West Bottoms',
  'hale-arena': 'West Bottoms',
  // Houston clusters that share approaches (research city-type §7). Zone membership is still the 2 km rule.
  'reliant-stadium': 'Reliant Park',
  'reliant-arena': 'Reliant Park',
  'reliant-arena-pavilion': 'Reliant Park',
  'daikin-park': 'Downtown / EaDo',
  'toyota-center': 'Downtown / EaDo',
  'shell-energy-stadium': 'Downtown / EaDo',
  '713-music-hall': 'Downtown / EaDo',
  'jones-hall': 'Downtown / EaDo',
  'sarofim-hall': 'Downtown / EaDo',
  'wortham-brown-theater': 'Downtown / EaDo',
  'wortham-cullen-theater': 'Downtown / EaDo',
  'tdecu-stadium': 'University of Houston',
  'fertitta-center': 'University of Houston',
  'schroeder-park': 'University of Houston',
  'cougar-softball-stadium': 'University of Houston',
  'first-community-stadium': 'Rice University',
  'tudor-fieldhouse': 'Rice University',
  'reckling-park': 'Rice University',
  'cy-fair-fcu-stadium': 'Berry Center',
  'berry-center-arena': 'Berry Center',
  // Toronto clusters from the Oct 12 city-type answer: Exhibition Place / Ontario Place, and the Union Station pair.
  'bmo-field': 'Exhibition Place',
  'coca-cola-coliseum': 'Exhibition Place',
  'cne-bandshell': 'Exhibition Place',
  'queen-elizabeth-theatre-toronto': 'Exhibition Place',
  'rbc-amphitheatre': 'Exhibition Place',
  'rogers-centre': 'Union Station',
  'scotiabank-arena': 'Union Station',
  'sobeys-stadium': 'York University',
  'york-lions-stadium': 'York University',
  'uoft-varsity-stadium': 'University of Toronto',
  'uoft-varsity-arena': 'University of Toronto',
  'kimel-field-house': 'University of Toronto',
  'uoft-convocation-hall': 'University of Toronto',
  // Minneapolis–St. Paul clusters that share a rail stop or a downtown ramp (city-type answer §8).
  'us-bank-stadium': 'Downtown East',
  'minneapolis-armory': 'Downtown East',
  'target-field': 'Downtown West',
  'target-center': 'Downtown West',
  'first-avenue': 'Downtown West',
  'fillmore-minneapolis': 'Downtown West',
  'orpheum-theatre-minneapolis': 'Downtown West',
  'state-theatre-minneapolis': 'Downtown West',
  'pantages-theatre-minneapolis': 'Downtown West',
  'huntington-bank-stadium': 'University of Minnesota',
  'williams-arena': 'University of Minnesota',
  'mariucci-arena': 'University of Minnesota',
  'ridder-arena': 'University of Minnesota',
  'maturi-pavilion': 'University of Minnesota',
  'northrop-auditorium': 'University of Minnesota',
  'grand-casino-arena': 'Downtown Saint Paul',
  'roy-wilkins-auditorium': 'Downtown Saint Paul',
  'palace-theatre-saint-paul': 'Downtown Saint Paul',
  'chs-field': 'Downtown Saint Paul',
  'allianz-field': 'Midway',
  'state-fair-grandstand': 'State Fairgrounds',
  'mystic-lake-amphitheater': 'Shakopee',
  'tco-stadium': 'Eagan',
  'nsc-stadium': 'Blaine',
  // New Orleans LSED complex: Superdome and Smoothie King Center share the garage set and Poydras approach.
  'caesars-superdome': 'Superdome complex',
  'smoothie-king-center': 'Superdome complex',
  // Pittsburgh clusters (city-type answer §9; docs/research/city-builds/pittsburgh/pittsburgh-city-type-answer.md).
  'acrisure-stadium': 'North Shore',
  'pnc-park': 'North Shore',
  'stage-ae-outdoor': 'North Shore',
  'stage-ae-indoor': 'North Shore',
  'ppg-paints-arena': 'Downtown',
  'heinz-hall': 'Downtown',
  'benedum-center': 'Downtown',
  'citizens-live-wylie': 'Downtown',
  'upmc-cooper-fieldhouse': 'Downtown',
  'petersen-events-center': 'Oakland',
  'fitzgerald-field-house': 'Oakland',
  'carnegie-music-hall-oakland': 'Oakland',
  'fnb-stadium': 'Station Square',
  'moda-center': 'Rose Quarter',
  'veterans-memorial-coliseum': 'Rose Quarter',
  'providence-park': 'Goose Hollow',
  'cascades-amphitheater': 'Ridgefield',
  'anderson-arena': 'St. Thomas',
  // Denver downtown cluster (city-type answer §3.4): shared I-25, Union Station rail and downtown garages.
  'empower-field': 'Downtown cluster',
  'coors-field': 'Downtown cluster',
  'ball-arena': 'Downtown cluster',
  // Raleigh–Durham clusters that share lots, roads and police traffic operations (city-type answer section 6).
  'lenovo-center': 'West Raleigh',
  'carter-finley-stadium': 'West Raleigh',
  'dorton-arena': 'West Raleigh',
  'reynolds-coliseum': 'NC State campus',
  'wallace-wade-stadium': 'Duke campus',
  'cameron-indoor-stadium': 'Duke campus',
  'koskinen-stadium': 'Duke campus',
  'kenan-stadium': 'UNC campus',
  'dean-smith-center': 'UNC campus',
  'carmichael-arena': 'UNC campus',
  'dorrance-field': 'UNC campus',
  'durham-bulls-athletic-park': 'Downtown Durham',
  'dpac': 'Downtown Durham',
  'o-kelly-riddick-stadium': 'NCCU',
  'mcdougald-mclendon-arena': 'NCCU',
  'red-hat-amphitheater-raleigh': 'Downtown Raleigh',
  'red-hat-amphitheater-raleigh-new': 'Downtown Raleigh',
  'raleigh-memorial-auditorium': 'Downtown Raleigh',
  'meymandi-concert-hall': 'Downtown Raleigh',
  'first-horizon-stadium': 'Cary',
  'koka-booth-amphitheatre': 'Cary',
  'coastal-credit-union-music-park': 'Walnut Creek',
  'north-main-athletic-complex-stadium': 'Holly Springs',
  'nomaco-park': 'Zebulon',
  // Detroit District Detroit cluster (city-type answer §5b). Ann Arbor campus is a separate named cluster.
  'ford-field': 'District Detroit',
  'comerica-park': 'District Detroit',
  'little-caesars-arena': 'District Detroit',
  'fox-theatre-detroit': 'District Detroit',
  'michigan-stadium': 'Michigan campus',
  'crisler-center': 'Michigan campus',
  'yost-ice-arena': 'Michigan campus',
  // San Antonio clusters (city-type answer §8): downtown / Alamodome; east-side grounds; isolated singles.
  alamodome: 'Downtown',
  'frost-bank-center': 'East Side',
  'freeman-coliseum': 'East Side',
  'tobin-center': 'Downtown',
  'majestic-theatre-sa': 'Downtown',
  'lila-cockrell-theatre': 'Downtown',
  'the-espee': 'Downtown',
  'toyota-field': 'Northeast',
  'wolff-stadium': 'West Side',
  'boeing-center-tech-port': 'Port San Antonio',
  'whitewater-amphitheater': 'Comal County',
  'benson-stadium': 'UIW',
  'utsa-convocation-center': 'UTSA',
  'rogers-place': 'ICE District',
  'downtown-community-arena': 'ICE District',
  'commonwealth-stadium': 'Exhibition Lands',
  'clarke-stadium': 'Exhibition Lands',
  'edmonton-expo-arena': 'Exhibition Lands',
  // Salt Lake City clusters (city-type answer §5c): downtown arena district, Fairpark, university campus.
  'delta-center': 'Downtown',
  'conference-center-slc': 'Downtown',
  'abravanel-hall': 'Downtown',
  'eccles-theater-slc': 'Downtown',
  'capitol-theatre-slc': 'Downtown',
  'days-of-47-arena': 'Fairpark',
  'rice-eccles-stadium': 'University of Utah',
  'jon-m-huntsman-center': 'University of Utah',
  'utah-first-credit-union-amphitheatre': 'West Valley City',
  'maverik-center': 'West Valley City',
  'america-first-field': 'Sandy',
  'ballpark-at-america-first-square': 'Daybreak',
};

export interface Zone {
  id: string;
  name: string;
  venueIds: string[];
  center: LngLat;
  /** Seats of the largest room in the zone: a normal night's flow. */
  largest: number;
}

export interface ZoneScore {
  zone: Zone;
  events: CrowdEvent[];
  load: number;
  normal: number;
  background: number;
  score: number;
}

export interface DateGridlock {
  score: number;
  zones: ZoneScore[];
  /** The zone that set the score. */
  worst: ZoneScore | null;
  /** Each event's own getting-there score: its zone's. */
  byEvent: Map<string, number>;
}

function kindOf(event: CrowdEvent): string {
  return event.audience.domain === 'sports' ? event.audience.sport : 'concert';
}

function startHour(event: CrowdEvent): number {
  if (event.start) {
    const [h, m] = event.start.split(':').map(Number);
    return h + m / 60;
  }
  return DEFAULT_START[kindOf(event)] ?? 19.5;
}

function endHour(event: CrowdEvent): number {
  return startHour(event) + (DURATION[kindOf(event)] ?? 2.5);
}

function capacityOf(event: CrowdEvent): number {
  return drawSize(event) ?? Math.max(0, ...event.crowd.map((c) => c.count ?? 0)) ?? 0;
}

function venueCapacityMax(venueId: string, date: string): number {
  const venue = VENUES[venueId];
  if (!venue) return 0;
  const year = Number(date.slice(0, 4));
  return Math.max(0, ...venue.capacity.filter((c) => (c.fromYear ?? 0) <= year).map((c) => c.seats));
}

/** Cluster a metro's venues into zones (venues within about 2 km of one another). */
export function zonesFor(metroId: string, date: string): Zone[] {
  const venues = Object.values(VENUES).filter((v) => v.metroId === metroId);
  const zones: Zone[] = [];
  for (const venue of venues) {
    const home = zones.find((z) => milesBetween(z.center, venue.location) <= ZONE_MILES);
    if (home) {
      home.venueIds.push(venue.id);
      home.largest = Math.max(home.largest, venueCapacityMax(venue.id, date));
      if (!ZONE_NAMES[home.venueIds[0]] && ZONE_NAMES[venue.id]) home.name = ZONE_NAMES[venue.id];
    } else {
      zones.push({
        id: venue.id,
        name: ZONE_NAMES[venue.id] ?? venue.names[venue.names.length - 1].name,
        venueIds: [venue.id],
        center: venue.location,
        largest: venueCapacityMax(venue.id, date),
      });
    }
  }
  return zones;
}

function spillWeight(from: Zone, to: Zone, cityType: string): number {
  const miles = milesBetween(from.center, to.center);
  if (miles <= NEAR_MILES) return SPILL_NEAR[cityType] ?? 0.15;
  if (miles <= FAR_MILES) return SPILL_FAR;
  return 0;
}

/** Seats on the road in a zone at an hour: arrivals two hours before a start, exits an hour after the end. */
function activeSeats(events: readonly CrowdEvent[], hour: number): number {
  let seats = 0;
  for (const e of events) {
    const start = startHour(e);
    const end = endHour(e);
    const arriving = hour >= start - ARRIVAL_HOURS && hour < start;
    const leaving = hour >= end && hour < end + EXIT_HOURS;
    if (arriving || leaving) seats += capacityOf(e);
  }
  return seats;
}

/** Time-of-day background: weekday rush when any arrival window touches 4–7:30 pm; Friday worse; Sunday mornings easier; rain. */
function backgroundFor(
  events: readonly CrowdEvent[],
  date: string,
  rain: boolean,
  strainedCarShare: number | null,
): number {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay(); // 0 Sunday … 6 Saturday
  let factor = 1;
  const rush = events.some((e) => {
    const start = startHour(e);
    return start - ARRIVAL_HOURS < 19.5 && start > 16;
  });
  if (day >= 1 && day <= 5 && rush) factor = day === 5 ? 1.4 : 1.3;
  else if (day === 0 && events.every((e) => startHour(e) < 14)) factor = 0.9;
  if (rain) factor *= 1.15;
  if (strainedCarShare !== null) factor *= hardAccessFactor(strainedCarShare);
  return factor;
}

/**
 * The hard-access multiplier (docs/research/topics/hard-access-weight-answer.md, Oct 6, 2026).
 * ×1.25 where everyone drives, scaled by the share of fans who drive to that
 * venue: the penalty is a car's problem, and transit share belongs to the
 * venue, not the city. A placeholder: the research puts the true effect at
 * or above this, but the read already compares a hillside venue to its own
 * quiet normal, so stacking more on top made a lone Monday game read mid.
 * The better rule, cars per outbound exit lane, waits for lane counts.
 */
export const HARD_ACCESS_BASE = 1.25;
export const CAR_SHARE_REFERENCE = 0.85;
export function hardAccessFactor(carShare: number): number {
  return 1 + (HARD_ACCESS_BASE - 1) * (carShare / CAR_SHARE_REFERENCE);
}

/** How a city's fans get to big events, for the read and for the plain-words line (`cityTravel.ts`). */
export type CityType = 'sprawl' | 'hub' | 'transit';

/** The city's type; a city not listed reads as sprawl, as the read does. */
export function cityTypeOf(metroId: string): CityType {
  return CITY_TYPE[metroId] ?? 'sprawl';
}

/** The share of fans who drive, until a venue has its own figure. */
const CAR_SHARE_BY_CITY: Record<'sprawl' | 'hub' | 'transit', number> = { sprawl: 0.85, hub: 0.85, transit: 0.4 };

/** Gridlock for one date in a city. `rainy` lists events with rain in their forecast. */
export function dateGridlock(metroId: string, date: string, events: readonly CrowdEvent[], rainy: ReadonlySet<string> = new Set()): DateGridlock {
  const cityType = CITY_TYPE[metroId] ?? 'sprawl';
  const zones = zonesFor(metroId, date);
  const big = events.filter((e) => eventFeedsFriction(e) && e.place.type === 'venue');
  const inZone = new Map<string, CrowdEvent[]>();
  for (const e of big) {
    if (e.place.type !== 'venue') continue;
    const zone = zones.find((z) => z.venueIds.includes(e.place.type === 'venue' ? e.place.venueId : ''));
    if (!zone) continue;
    inZone.set(zone.id, [...(inZone.get(zone.id) ?? []), e]);
  }
  const scored: ZoneScore[] = [];
  const byEvent = new Map<string, number>();
  for (const zone of zones) {
    const mine = inZone.get(zone.id) ?? [];
    if (mine.length === 0) continue;
    // Peak hour across the day: own seats plus a share of the neighbours' seats on the road at the same hour.
    let peak = 0;
    for (let hour = 0; hour < 24; hour += 0.5) {
      let seats = activeSeats(mine, hour);
      for (const other of zones) {
        if (other.id === zone.id) continue;
        const weight = spillWeight(other, zone, cityType);
        if (weight > 0) seats += weight * activeSeats(inZone.get(other.id) ?? [], hour);
      }
      peak = Math.max(peak, seats);
    }
    // A normal night here: the largest room full, plus the usual spill from the neighbours' largest rooms.
    let normal = zone.largest;
    for (const other of zones) {
      if (other.id === zone.id) continue;
      normal += spillWeight(other, zone, cityType) * other.largest;
    }
    const rain = mine.some((e) => rainy.has(e.id));
    // The hard-access venue in the zone with the most driving, if any.
    let strainedCarShare: number | null = null;
    for (const e of mine) {
      const venue = e.place.type === 'venue' ? VENUES[e.place.venueId] : undefined;
      if (!venue || !isStrained(venue)) continue;
      const share = venue.carShare ?? CAR_SHARE_BY_CITY[cityType];
      strainedCarShare = Math.max(strainedCarShare ?? 0, share);
    }
    const background = backgroundFor(mine, date, rain, strainedCarShare);
    const ratio = normal > 0 ? (background * peak) / normal : 1;
    const score = Math.max(1, Math.min(10, 1 + SCALE * Math.log2(Math.max(ratio, 0.01))));
    scored.push({ zone, events: mine, load: peak, normal, background, score });
    for (const e of mine) byEvent.set(e.id, score);
  }
  scored.sort((a, b) => b.score - a.score);
  const worst = scored[0] ?? null;
  const extra = scored.slice(1).reduce((sum, z) => sum + Math.max(0, z.score - 5), 0);
  const score = worst ? Math.min(10, worst.score + 0.25 * extra) : 1;
  void METROS;
  return { score, zones: scored, worst, byEvent };
}

/** "Inglewood: Beyoncé and Rauw Alejandro arriving together, Monday evening." */
export function gridlockWhy(g: DateGridlock, date: string): string {
  const z = g.worst;
  if (!z || z.score < 2) return 'Roads about normal for the venues in play.';
  const names = z.events.map((e) => e.title);
  const who = names.length <= 2 ? names.join(' and ') : `${names.slice(0, 2).join(', ')} and ${names.length - 2} more`;
  const day = new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
  const when = z.events.every((e) => startHour(e) < 14) ? 'afternoon' : 'evening';
  const together = z.events.length > 1 ? 'arriving together' : 'alone';
  return `${z.zone.name}: ${who} ${together}, ${day} ${when}.`;
}
