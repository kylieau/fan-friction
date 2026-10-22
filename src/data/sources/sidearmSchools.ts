// Schools whose athletics site runs on Sidearm Sports (Learfield) and publishes a public calendar feed at
// /calendar.ashx/calendar.ics (Kylie, Oct 21, 2026, evening: "yes" to reading the school feeds, from UCLA's exhibition
// against Cal Baptist, which was in neither feed; docs/research/topics/event-capture-alternatives-answer.md). The
// feed carries every scheduled game, exhibitions included, with the room in LOCATION. One row per school; a new city
// lists its schools here (docs/reference/new-city-checklist.md, section 2). A school on another provider (UCLA runs on
// WMT Digital, whose terms bar apps) is not listed: its home games arrive through the opponents' feeds.
//
// `school` is the name the feed writes before the sport ("USC Trojans Men's Basketball vs North Carolina"), used to
// read the sport and the opponent; `short` is what a title shows ("USC").

export interface SidearmSchool {
  metroId: string;
  /** The site's origin, no trailing slash. */
  site: string;
  /** The name before the sport in the feed's SUMMARY lines. Several when the feed is inconsistent. */
  school: string[];
  /** What a title shows for this school. */
  short: string;
}

export const SIDEARM_SCHOOLS: SidearmSchool[] = [
  // Los Angeles (feeds checked Oct 21, 2026: each returned text/calendar with 100–300 entries).
  { metroId: 'la', site: 'https://usctrojans.com', school: ['USC Trojans'], short: 'USC' },
  { metroId: 'la', site: 'https://cbulancers.com', school: ['California Baptist University', 'California Baptist'], short: 'Cal Baptist' },
  { metroId: 'la', site: 'https://lmulions.com', school: ['Loyola Marymount University', 'Loyola Marymount'], short: 'LMU' },
  { metroId: 'la', site: 'https://longbeachstate.com', school: ['Long Beach State University', 'Long Beach State'], short: 'Long Beach State' },
  { metroId: 'la', site: 'https://pepperdinewaves.com', school: ['Pepperdine University', 'Pepperdine'], short: 'Pepperdine' },
  { metroId: 'la', site: 'https://gomatadors.com', school: ['California State University at Northridge', 'CSUN'], short: 'CSUN' },
  { metroId: 'la', site: 'https://ucirvinesports.com', school: ['UCI', 'UC Irvine'], short: 'UC Irvine' },
  { metroId: 'la', site: 'https://fullertontitans.com', school: ['California State University, Fullerton', 'Cal State Fullerton'], short: 'Cal State Fullerton' },
  { metroId: 'la', site: 'https://broncoathletics.com', school: ['Cal Poly Pomona'], short: 'Cal Poly Pomona' },
  { metroId: 'la', site: 'https://lagoldeneagles.com', school: ['Cal State LA'], short: 'Cal State LA' },
  { metroId: 'la', site: 'https://athletics.apu.edu', school: ['Azusa Pacific University', 'Azusa Pacific'], short: 'Azusa Pacific' },
  { metroId: 'la', site: 'https://clusports.com', school: ['California Lutheran University', 'Cal Lutheran'], short: 'Cal Lutheran' },
  { metroId: 'la', site: 'https://gotoros.com', school: ['Cal State Dominguez Hills', 'CSUDH'], short: 'CSUDH' },
];
