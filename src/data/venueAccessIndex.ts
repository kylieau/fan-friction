// Hard-access measures per venue, from scripts/venue-access.mjs (the map
// tiles and a public elevation service). Do not edit by hand; rerun the
// script when venues are added. The rule that turns these into the
// "strained" flag lives in venues.ts (docs/hard-access-oct6.md).

export interface VenueAccessRow {
  venueId: string;
  /** Highest minus lowest ground, metres, among eight points 500 m out. */
  reliefM: number;
  /** Distinct named public streets within 250 m of the building's center. */
  streets250: number;
}

export const VENUE_ACCESS: VenueAccessRow[] = [
  { venueId: 'dodger-stadium', reliefM: 56, streets250: 0 },
  { venueId: 'crypto-com-arena', reliefM: 14, streets250: 7 },
  { venueId: 'coliseum', reliefM: 9, streets250: 3 },
  { venueId: 'bmo-stadium', reliefM: 8, streets250: 6 },
  { venueId: 'sofi-stadium', reliefM: 19, streets250: 5 },
  { venueId: 'intuit-dome', reliefM: 16, streets250: 4 },
  { venueId: 'kia-forum', reliefM: 18, streets250: 7 },
  { venueId: 'hollywood-bowl', reliefM: 122, streets250: 2 },
  { venueId: 'rose-bowl', reliefM: 42, streets250: 4 },
  { venueId: 'dignity-health-sports-park', reliefM: 20, streets250: 2 },
  { venueId: 'angel-stadium', reliefM: 10, streets250: 0 },
  { venueId: 'pauley-pavilion', reliefM: 39, streets250: 3 },
  { venueId: 'galen-center', reliefM: 3, streets250: 6 },
  { venueId: 'honda-center', reliefM: 6, streets250: 4 },
  { venueId: 'santa-anita-park', reliefM: 14, streets250: 0 },
  { venueId: 'pomona-dragstrip', reliefM: 19, streets250: 2 },
  { venueId: 'weingart-stadium', reliefM: 44, streets250: 4 },
  { venueId: 'long-beach-arena', reliefM: 22, streets250: 3 },
  { venueId: 'fivepoint-amphitheatre', reliefM: 25, streets250: 2 },
  { venueId: 'drake-stadium', reliefM: 48, streets250: 6 },
  { venueId: 'veterans-memorial-stadium', reliefM: 5, streets250: 0 },
  { venueId: 'fairplex-grandstand', reliefM: 18, streets250: 0 },
  { venueId: 'titan-stadium', reliefM: 21, streets250: 3 },
  { venueId: 'pacific-amphitheatre', reliefM: 8, streets250: 0 },
  { venueId: 'dhsp-tennis-stadium', reliefM: 23, streets250: 2 },
  { venueId: 'anaheim-convention-center', reliefM: 6, streets250: 0 },
  { venueId: 'peacock-theater', reliefM: 15, streets250: 9 },
  { venueId: 'shrine-auditorium', reliefM: 5, streets250: 7 },
  { venueId: 'youtube-theater', reliefM: 21, streets250: 8 },
  { venueId: 'greek-theatre', reliefM: 101, streets250: 2 },
  { venueId: 'la-tennis-center', reliefM: 47, streets250: 7 },
  { venueId: 'championship-soccer-stadium', reliefM: 14, streets250: 0 },
  { venueId: 'bren-events-center', reliefM: 32, streets250: 2 },
  { venueId: 'walter-pyramid', reliefM: 5, streets250: 6 },
  { venueId: 'ohio-stadium', reliefM: 14, streets250: 3 },
  { venueId: 'citi-field', reliefM: 3, streets250: 4 },
  { venueId: 'petco-park', reliefM: 10, streets250: 13 },
  { venueId: 'san-diego-stadium', reliefM: 53, streets250: 4 },
  { venueId: 'snapdragon-stadium', reliefM: 63, streets250: 8 },
  { venueId: 'del-mar-fairgrounds', reliefM: 17, streets250: 0 },
  { venueId: 'embarcadero-marina-park-north', reliefM: 9, streets250: 2 },
  { venueId: 'north-island-amphitheatre', reliefM: 51, streets250: 2 },
  { venueId: 'pechanga-arena', reliefM: 4, streets250: 4 },
  { venueId: 'waterfront-park', reliefM: 26, streets250: 6 },
  { venueId: 'viejas-arena', reliefM: 36, streets250: 7 },
  { venueId: 'rady-shell', reliefM: 12, streets250: 2 },
  { venueId: 'frontwave-arena', reliefM: 35, streets250: 4 },
  { venueId: 'torero-stadium', reliefM: 53, streets250: 9 },
  { venueId: 'jenny-craig-pavilion', reliefM: 55, streets250: 5 },
  { venueId: 'san-diego-convention-center', reliefM: 12, streets250: 8 },
  { venueId: 't-mobile-park', reliefM: 8, streets250: 7 },
  { venueId: 'wintrust-arena', reliefM: 17, streets250: 8 },
  { venueId: 'amalie-arena', reliefM: 15, streets250: 10 },
  { venueId: 'mortgage-matchup-center', reliefM: 26, streets250: 9 },
  { venueId: 'golden-1-center', reliefM: 13, streets250: 8 },
  { venueId: 'empire-polo-club', reliefM: 4, streets250: 0 },
];
