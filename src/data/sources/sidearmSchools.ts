// Schools whose athletics site runs on Sidearm Sports (Learfield) and publishes a public calendar feed at
// /calendar.ashx/calendar.ics (Kylie, Oct 21, 2026, evening: "yes" to reading the school feeds, from UCLA's exhibition
// against Cal Baptist, which was in neither feed; docs/research/topics/event-capture-alternatives-answer.md). The
// feed carries every scheduled game, exhibitions included, with the room in LOCATION. One row per school; a new city
// lists its schools here (docs/reference/new-city-checklist.md, section 2). A school on another provider (UCLA runs on
// WMT Digital, whose terms bar apps) is not listed: its home games arrive through the opponents' feeds, ESPN, and for
// UCLA a one-time hand copy of its schedule pages (src/data/seed/uclaSchedule2026.ts; Kylie, Oct 27, 2026).
//
// `school` is the name the feed writes before the sport ("USC Trojans Men's Basketball vs North Carolina"), used to
// read the sport and the opponent; `short` is what a title shows ("USC"). `sides` names the side a prefix carries when
// the program word lacks it ("University of Alberta Pandas Volleyball" is the women's team).
//
// Every covered city, Oct 22, 2026 (the step 2 follow-ups): each site below answered the probe with a calendar that
// night (scripts: `curl -sI https://<site>/calendar.ashx/calendar.ics` says text/calendar). Sites that answered 404 or
// no calendar, so run on another provider and are left out: Georgia Tech, Stanford, San José State, Harvard,
// Northwestern, Miami (FL), Montréal (Carabins), Vanderbilt, Hofstra, La Salle, Arizona State, UTSA, San Diego State,
// Seattle U, Carleton, Ottawa, Alberta's own goldenbears.ca (bearsandpandas.ca carries both sides). Not reachable from
// here that night, to retry: St. John's, Manhattan, Oakland (MI), Drexel's older address, American.

export interface SidearmSchool {
  metroId: string;
  /** The site's origin, no trailing slash. */
  site: string;
  /** The name before the sport in the feed's SUMMARY lines. Several when the feed is inconsistent. */
  school: string[];
  /** What a title shows for this school. */
  short: string;
  /** The side a prefix in `school` stands for, where the feed's program word lacks one ("Pandas" → women's). */
  sides?: Record<string, 'men' | 'women'>;
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
  // Every other covered city (Oct 22, 2026; the feed prefixes read from each feed that night).
  { metroId: 'atlanta', site: 'https://georgiastatesports.com', school: ['Georgia State University', 'Georgia State'], short: 'Georgia State' },
  { metroId: 'atlanta', site: 'https://ksuowls.com', school: ['Kennesaw State University', 'Kennesaw State'], short: 'Kennesaw State' },
  { metroId: 'austin', site: 'https://texaslonghorns.com', school: ['University of Texas', 'Texas'], short: 'Texas' },
  { metroId: 'austin', site: 'https://txstatebobcats.com', school: ['Texas State'], short: 'Texas State' },
  { metroId: 'bay-area', site: 'https://calbears.com', school: ['California', 'Cal'], short: 'Cal' },
  { metroId: 'bay-area', site: 'https://usfdons.com', school: ['University of San Francisco', 'San Francisco'], short: 'San Francisco' },
  { metroId: 'bay-area', site: 'https://smcgaels.com', school: ["Saint Mary's College of California", "Saint Mary's"], short: "Saint Mary's" },
  { metroId: 'bay-area', site: 'https://santaclarabroncos.com', school: ['Santa Clara University', 'Santa Clara'], short: 'Santa Clara' },
  { metroId: 'boston', site: 'https://bceagles.com', school: ['Boston College'], short: 'Boston College' },
  { metroId: 'boston', site: 'https://goterriers.com', school: ['Boston University'], short: 'Boston University' },
  { metroId: 'boston', site: 'https://goriverhawks.com', school: ['University of Massachusetts Lowell', 'UMass Lowell'], short: 'UMass Lowell' },
  { metroId: 'boston', site: 'https://nuhuskies.com', school: ['Northeastern University', 'Northeastern'], short: 'Northeastern' },
  { metroId: 'chicago', site: 'https://depaulbluedemons.com', school: ['DePaul University', 'DePaul'], short: 'DePaul' },
  { metroId: 'chicago', site: 'https://uicflames.com', school: ['UIC'], short: 'UIC' },
  { metroId: 'chicago', site: 'https://gocsucougars.com', school: ['Chicago State'], short: 'Chicago State' },
  { metroId: 'chicago', site: 'https://loyolaramblers.com', school: ['Loyola University Chicago', 'Loyola Chicago', 'Loyola'], short: 'Loyola Chicago' },
  { metroId: 'cleveland', site: 'https://csuvikings.com', school: ['Cleveland State University', 'Cleveland State'], short: 'Cleveland State' },
  { metroId: 'columbus', site: 'https://ohiostatebuckeyes.com', school: ['Ohio State'], short: 'Ohio State' },
  { metroId: 'columbus', site: 'https://battlingbishops.com', school: ['Ohio Wesleyan University', 'Ohio Wesleyan'], short: 'Ohio Wesleyan' },
  { metroId: 'dallas-fort-worth', site: 'https://smumustangs.com', school: ['SMU'], short: 'SMU' },
  { metroId: 'dallas-fort-worth', site: 'https://gofrogs.com', school: ['TCU'], short: 'TCU' },
  { metroId: 'dallas-fort-worth', site: 'https://meangreensports.com', school: ['University of North Texas', 'North Texas'], short: 'North Texas' },
  { metroId: 'dallas-fort-worth', site: 'https://utamavs.com', school: ['University of Texas Arlington', 'UT Arlington'], short: 'UT Arlington' },
  { metroId: 'denver', site: 'https://denverpioneers.com', school: ['University of Denver', 'Denver'], short: 'Denver' },
  { metroId: 'detroit', site: 'https://mgoblue.com', school: ['University of Michigan', 'Michigan'], short: 'Michigan' },
  { metroId: 'detroit', site: 'https://detroittitans.com', school: ['University of Detroit Mercy', 'Detroit Mercy'], short: 'Detroit Mercy' },
  { metroId: 'edmonton', site: 'https://bearsandpandas.ca', school: ['University of Alberta Golden Bears', 'University of Alberta Pandas', 'University of Alberta'], short: 'Alberta', sides: { 'University of Alberta Golden Bears': 'men', 'University of Alberta Pandas': 'women' } },
  { metroId: 'houston', site: 'https://uhcougars.com', school: ['University of Houston', 'Houston'], short: 'Houston' },
  { metroId: 'houston', site: 'https://riceowls.com', school: ['Rice University', 'Rice'], short: 'Rice' },
  { metroId: 'houston', site: 'https://tsusports.com', school: ['Texas Southern University', 'Texas Southern'], short: 'Texas Southern' },
  { metroId: 'houston', site: 'https://pvpanthers.com', school: ['Prairie View A&M University', 'Prairie View A&M'], short: 'Prairie View A&M' },
  { metroId: 'indianapolis', site: 'https://butlersports.com', school: ['Butler University', 'Butler'], short: 'Butler' },
  { metroId: 'indianapolis', site: 'https://iuindyjags.com', school: ['IU Indy'], short: 'IU Indy' },
  { metroId: 'indianapolis', site: 'https://athletics.uindy.edu', school: ['UIndy'], short: 'UIndy' },
  { metroId: 'kansas-city', site: 'https://kcroos.com', school: ['Kansas City'], short: 'Kansas City' },
  { metroId: 'las-vegas', site: 'https://unlvrebels.com', school: ['University of Nevada Las Vegas', 'UNLV'], short: 'UNLV' },
  { metroId: 'miami', site: 'https://fiusports.com', school: ['FIU'], short: 'FIU' },
  { metroId: 'milwaukee', site: 'https://gomarquette.com', school: ['Marquette University', 'Marquette'], short: 'Marquette' },
  { metroId: 'milwaukee', site: 'https://mkepanthers.com', school: ['Milwaukee Athletics', 'Milwaukee'], short: 'Milwaukee' },
  { metroId: 'minneapolis', site: 'https://gophersports.com', school: ['University of Minnesota', 'Minnesota'], short: 'Minnesota' },
  { metroId: 'minneapolis', site: 'https://tommiesports.com', school: ['The University of St. Thomas', 'St. Thomas'], short: 'St. Thomas' },
  { metroId: 'montreal', site: 'https://mcgillathletics.ca', school: ['McGill University', 'McGill'], short: 'McGill' },
  { metroId: 'nashville', site: 'https://tsutigers.com', school: ['Tennessee State University', 'Tennessee State'], short: 'Tennessee State' },
  { metroId: 'nashville', site: 'https://belmontbruins.com', school: ['Belmont University', 'Belmont'], short: 'Belmont' },
  { metroId: 'nashville', site: 'https://lipscombsports.com', school: ['Lipscomb University', 'Lipscomb'], short: 'Lipscomb' },
  { metroId: 'nashville', site: 'https://goblueraiders.com', school: ['Middle Tennessee'], short: 'Middle Tennessee' },
  { metroId: 'new-orleans', site: 'https://tulanegreenwave.com', school: ['Tulane University', 'Tulane'], short: 'Tulane' },
  { metroId: 'new-orleans', site: 'https://unoprivateers.com', school: ['University of New Orleans', 'New Orleans'], short: 'New Orleans' },
  { metroId: 'new-york', site: 'https://shupirates.com', school: ['Seton Hall University', 'Seton Hall'], short: 'Seton Hall' },
  { metroId: 'new-york', site: 'https://gocolumbialions.com', school: ['Columbia University', 'Columbia'], short: 'Columbia' },
  { metroId: 'new-york', site: 'https://stonybrookathletics.com', school: ['Stony Brook University', 'Stony Brook'], short: 'Stony Brook' },
  { metroId: 'new-york', site: 'https://fordhamsports.com', school: ['Fordham University', 'Fordham'], short: 'Fordham' },
  { metroId: 'new-york', site: 'https://scarletknights.com', school: ['Rutgers'], short: 'Rutgers' },
  { metroId: 'new-york', site: 'https://liuathletics.com', school: ['Long Island University', 'LIU'], short: 'LIU' },
  { metroId: 'new-york', site: 'https://ionagaels.com', school: ['Iona University', 'Iona'], short: 'Iona' },
  { metroId: 'new-york', site: 'https://wagnerathletics.com', school: ['Wagner College', 'Wagner'], short: 'Wagner' },
  { metroId: 'philadelphia', site: 'https://owlsports.com', school: ['Temple University', 'Temple'], short: 'Temple' },
  { metroId: 'philadelphia', site: 'https://villanova.com', school: ['Villanova University', 'Villanova'], short: 'Villanova' },
  { metroId: 'philadelphia', site: 'https://pennathletics.com', school: ['University of Pennsylvania', 'Penn'], short: 'Penn' },
  { metroId: 'philadelphia', site: 'https://bluehens.com', school: ['University of Delaware', 'Delaware'], short: 'Delaware' },
  { metroId: 'philadelphia', site: 'https://sjuhawks.com', school: ["Saint Joseph's University", "Saint Joseph's"], short: "Saint Joseph's" },
  { metroId: 'philadelphia', site: 'https://drexeldragons.com', school: ['Drexel'], short: 'Drexel' },
  { metroId: 'phoenix', site: 'https://gculopes.com', school: ['Grand Canyon University', 'Grand Canyon'], short: 'Grand Canyon' },
  { metroId: 'pittsburgh', site: 'https://pittsburghpanthers.com', school: ['University of Pittsburgh', 'Pittsburgh', 'Pitt'], short: 'Pitt' },
  { metroId: 'pittsburgh', site: 'https://goduquesne.com', school: ['Duquesne University', 'Duquesne'], short: 'Duquesne' },
  { metroId: 'pittsburgh', site: 'https://rmucolonials.com', school: ['Robert Morris University', 'Robert Morris'], short: 'Robert Morris' },
  { metroId: 'portland', site: 'https://goviks.com', school: ['Portland State University', 'Portland State'], short: 'Portland State' },
  { metroId: 'portland', site: 'https://portlandpilots.com', school: ['University of Portland', 'Portland'], short: 'Portland' },
  { metroId: 'raleigh-durham', site: 'https://gopack.com', school: ['NC State University', 'NC State'], short: 'NC State' },
  { metroId: 'raleigh-durham', site: 'https://goheels.com', school: ['North Carolina'], short: 'North Carolina' },
  { metroId: 'raleigh-durham', site: 'https://goduke.com', school: ['Duke University', 'Duke'], short: 'Duke' },
  { metroId: 'raleigh-durham', site: 'https://nccueaglepride.com', school: ['North Carolina Central University', 'North Carolina Central'], short: 'North Carolina Central' },
  { metroId: 'sacramento', site: 'https://hornetsports.com', school: ['Sacramento State'], short: 'Sacramento State' },
  { metroId: 'sacramento', site: 'https://ucdavisaggies.com', school: ['University of California, Davis', 'UC Davis'], short: 'UC Davis' },
  { metroId: 'salt-lake-city', site: 'https://utahutes.com', school: ['Utah, University of', 'University of Utah', 'Utah'], short: 'Utah' },
  { metroId: 'san-antonio', site: 'https://uiwcardinals.com', school: ['University of the Incarnate Word', 'Incarnate Word'], short: 'Incarnate Word' },
  { metroId: 'san-diego', site: 'https://usdtoreros.com', school: ['University of San Diego', 'San Diego'], short: 'San Diego' },
  { metroId: 'san-diego', site: 'https://ucsdtritons.com', school: ['UC San Diego'], short: 'UC San Diego' },
  { metroId: 'seattle', site: 'https://gohuskies.com', school: ['Washington'], short: 'Washington' },
  { metroId: 'st-louis', site: 'https://slubillikens.com', school: ['Saint Louis University', 'Saint Louis'], short: 'Saint Louis' },
  { metroId: 'st-louis', site: 'https://siuecougars.com', school: ['Southern Illinois University - Edwardsville', 'SIU Edwardsville', 'SIUE'], short: 'SIU Edwardsville' },
  { metroId: 'st-louis', site: 'https://lindenwoodlions.com', school: ['Lindenwood University', 'Lindenwood'], short: 'Lindenwood' },
  { metroId: 'tampa', site: 'https://gousfbulls.com', school: ['University of South Florida', 'South Florida'], short: 'South Florida' },
  { metroId: 'toronto', site: 'https://varsityblues.ca', school: ['University of Toronto', 'Toronto'], short: 'Toronto' },
  { metroId: 'toronto', site: 'https://yorkulions.ca', school: ['York University', 'York'], short: 'York' },
  { metroId: 'toronto', site: 'https://tmubold.ca', school: ['TMU Athletics & Recreation', 'TMU'], short: 'TMU' },
  { metroId: 'vancouver', site: 'https://gothunderbirds.ca', school: ['UBC'], short: 'UBC' },
  { metroId: 'washington-dc', site: 'https://guhoyas.com', school: ['Georgetown University', 'Georgetown'], short: 'Georgetown' },
  { metroId: 'washington-dc', site: 'https://umterps.com', school: ['Maryland'], short: 'Maryland' },
  { metroId: 'washington-dc', site: 'https://gomason.com', school: ['George Mason University', 'George Mason'], short: 'George Mason' },
  { metroId: 'washington-dc', site: 'https://gwsports.com', school: ['George Washington University', 'George Washington'], short: 'George Washington' },
  { metroId: 'washington-dc', site: 'https://hubison.com', school: ['Howard University', 'Howard'], short: 'Howard' },
];
