// Venues as their own records. Capacity is stored by year and setup, since it
// changes (the Coliseum held 93,607 in 2017 and 77,500 after its renovation).
// Capacities checked Oct 1, 2026 against venue guides and news reports, and
// again Oct 6, 2026 against the venue research in docs/research/city-builds/los-angeles/la-venue-table-answer.md
// (every 5,000+ room in Los Angeles and Orange County). Sources per venue are
// in docs/reference/data-sources.md. Figures are official unless a note says reported
// or estimated. Locations: OpenStreetMap where it knows the building, else
// the research's approximation, said so in a comment.

import type { LocalDate, Venue } from './types';
import { VENUE_ACCESS } from './venueAccessIndex';

export const VENUES: Record<string, Venue> = {
  // Milwaukee: reconciled original answers and room register in docs/research/city-builds/milwaukee/.
  // No unsupported venue carShare overrides; all locations are research-linked OSM points.
  'american-family-field': {
    id: 'american-family-field',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Miller Park'
      },
      {
        name: 'American Family Field',
        from: '2021-01-01'
      }
    ],
    location: [
      -87.97127,
      43.02806
    ],
    ticketmasterIds: ['KovZpZA1FlkA'],
    capacity: [
      {
        seats: 41900,
        setup: 'baseball',
        note: 'Official. MLB currently publishes 41,900; Claude cites 40,100 after 2025 seat removal. No mechanical subtraction; current sellable inventory remains disputed. Source: https://www.mlb.com/news/featured/american-family-field-guide-capacity-seating-chart-parking-and-more'
      }
    ],
    roof: 'covered'
  },
  'milwaukee-mile': {
    id: 'milwaukee-mile',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Milwaukee Mile'
      }
    ],
    location: [
      -88.01112,
      43.02093
    ],
    ticketmasterIds: ['ZFr9jZeeve'],
    capacity: [
      {
        seats: 34855,
        setup: 'racing',
        note: 'Official. 34,463 seats plus 392 accessible places; concert floor/blocked sections vary. Fair Main Stage is a setup here, not another crowd. Source: https://wistatefair.com/wsfp/milwaukee-mile-speedway/'
      }
    ],
    roof: 'open'
  },
  'american-family-insurance-amphitheater': {
    id: 'american-family-insurance-amphitheater',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Marcus Amphitheater'
      },
      {
        name: 'American Family Insurance Amphitheater'
      }
    ],
    location: [
      -87.89756,
      43.02716
    ],
    ticketmasterIds: ['KovZpZAJeenA'],
    capacity: [
      {
        seats: 23000,
        setup: 'concert',
        note: 'Official. Includes lawn, not 23,000 fixed chairs. Do not add this audience to Summerfest gate attendance. Source: https://www.amfamamp.com/plan-your-visit/ticket-info'
      }
    ],
    roof: 'covered'
  },
  'fiserv-forum': {
    id: 'fiserv-forum',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Fiserv Forum'
      }
    ],
    location: [
      -87.91749,
      43.04501
    ],
    ticketmasterIds: ['KovZ917A_fV'],
    capacity: [
      {
        seats: 17341,
        setup: 'basketball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.fiservforum.com/assets/doc/Fiserv-Forum_FactSheet_8.5x11-7075c776c1.pdf',
        fromYear: 2018
      },
      {
        seats: 18000,
        setup: 'concert',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.fiservforum.com/assets/doc/Fiserv-Forum_FactSheet_8.5x11-7075c776c1.pdf',
        fromYear: 2018
      }
    ],
    roof: 'indoor'
  },
  'uwm-panther-arena': {
    id: 'uwm-panther-arena',
    metroId: 'milwaukee',
    names: [
      {
        name: 'U.S. Cellular Arena'
      },
      {
        name: 'UW-Milwaukee Panther Arena'
      }
    ],
    location: [
      -87.91695,
      43.04229
    ],
    ticketmasterIds: ['KovZpZAJ61EA'],
    capacity: [
      {
        seats: 9652,
        setup: 'hockey',
        note: 'Reported historical hockey configuration; 2025 operator manual is newer. Source: research answer Claude.'
      },
      {
        seats: 9497,
        setup: 'basketball',
        note: 'Official. Operator 2025 manual, end stage with 360-degree sight lines; other concert layouts range 7,128–9,003. Historical hockey 9,652 remains applicable before 2025. Source: https://wcd.org/wp-content/uploads/2025/10/UWMPA_Tec-manual_202520.pdf',
        fromYear: 2025
      },
      {
        seats: 9536,
        setup: 'hockey',
        note: 'Official. Operator 2025 manual, end stage with 360-degree sight lines; other concert layouts range 7,128–9,003. Historical hockey 9,652 remains applicable before 2025. Source: https://wcd.org/wp-content/uploads/2025/10/UWMPA_Tec-manual_202520.pdf',
        fromYear: 2025
      },
      {
        seats: 9403,
        setup: 'soccer',
        note: 'Official. Operator 2025 manual, end stage with 360-degree sight lines; other concert layouts range 7,128–9,003. Historical hockey 9,652 remains applicable before 2025. Source: https://wcd.org/wp-content/uploads/2025/10/UWMPA_Tec-manual_202520.pdf',
        fromYear: 2025
      },
      {
        seats: 10705,
        setup: 'concert',
        note: 'Official. Operator 2025 manual, end stage with 360-degree sight lines; other concert layouts range 7,128–9,003. Historical hockey 9,652 remains applicable before 2025. Source: https://wcd.org/wp-content/uploads/2025/10/UWMPA_Tec-manual_202520.pdf',
        fromYear: 2025
      }
    ],
    roof: 'indoor'
  },
  'slinger-speedway': {
    id: 'slinger-speedway',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Slinger Super Speedway'
      }
    ],
    location: [
      -88.27757,
      43.341
    ],
    capacity: [
      {
        seats: 10000,
        setup: 'racing',
        note: 'Official. Official 2026 permit maximum spectators, not attendance or fixed seats. Source: https://d3n9y02raazwpg.cloudfront.net/slinger-wi/927b2337-d084-11f0-bb28-005056a89546-45f3a427-b05d-46e7-a0be-c1aa89d74e37-1773335906.pdf'
      }
    ],
    roof: 'open'
  },
  'bmo-pavilion': {
    id: 'bmo-pavilion',
    metroId: 'milwaukee',
    names: [
      {
        name: 'BMO Harris Pavilion'
      },
      {
        name: 'BMO Pavilion'
      }
    ],
    location: [
      -87.89661,
      43.02859
    ],
    ticketmasterIds: ['KovZpZAFAEeA'],
    capacity: [
      {
        seats: 10000,
        setup: 'concert',
        note: 'Reported. Reported 5,000 covered seats plus 5,000 outside standing; fair/festival viewers are not an extra crowd. Source: https://news.pollstar.com/2013/05/29/babisch-talks-summerfest/'
      }
    ],
    roof: 'covered'
  },
  'hart-park-stadium': {
    id: 'hart-park-stadium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Hart Park Stadium'
      }
    ],
    location: [
      -88.0023,
      43.04684
    ],
    capacity: [
      {
        seats: 4900,
        setup: 'soccer',
        note: 'Official. City 4,900 wins over rounded 5,000; no standing inventory verified. Parent-park point, stadium point unverified. Source: https://www.wauwatosa.net/discover-tosa/rental-facilities/hart-park-stadium'
      },
      {
        seats: 4900,
        setup: 'football',
        note: 'Official. City 4,900 wins over rounded 5,000; no standing inventory verified. Parent-park point, stadium point unverified. Source: https://www.wauwatosa.net/discover-tosa/rental-facilities/hart-park-stadium'
      }
    ],
    roof: 'open'
  },
  'landmark-credit-union-live': {
    id: 'landmark-credit-union-live',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Landmark Credit Union Live'
      }
    ],
    location: [
      -87.91684,
      43.04389
    ],
    ticketmasterIds: ['KovZ917AYGS'],
    capacity: [
      {
        seats: 4500,
        setup: 'concert',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://news.livenationentertainment.com/news/landmark-credit-union-live-debuts-as-milwaukees-newest-home-for-live-music',
        fromYear: 2026
      }
    ],
    roof: 'indoor'
  },
  'miller-high-life-theatre': {
    id: 'miller-high-life-theatre',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Milwaukee Theatre'
      },
      {
        name: 'Miller High Life Theatre',
        from: '2017-04-25'
      }
    ],
    location: [
      -87.91816,
      43.04228
    ],
    ticketmasterIds: ['KovZpZAdJEnA'],
    capacity: [
      {
        seats: 4079,
        setup: 'concert',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.pabsttheatergroup.com/rentals/ticketed-event-rentals'
      }
    ],
    roof: 'indoor'
  },
  'eagles-ballroom': {
    id: 'eagles-ballroom',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Eagles Ballroom'
      }
    ],
    location: [
      -87.94332,
      43.03792
    ],
    capacity: [
      {
        seats: 4000,
        setup: 'concert',
        note: 'Reported. Reported current full ballroom 4,000; Club Stage is a curtain configuration, not a separate room. Source: https://www.mixonline.com/live-sound/venues/milwaukees-the-rave-rocks-new-p-a'
      }
    ],
    roof: 'indoor'
  },
  'franklin-field': {
    id: 'franklin-field',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Routine Field'
      },
      {
        name: 'Franklin Field'
      }
    ],
    location: [
      -88.01583,
      42.91795
    ],
    capacity: [
      {
        seats: 4000,
        setup: 'baseball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.milwaukeemilkmen.com/franklin-field'
      }
    ],
    roof: 'open'
  },
  'al-mcguire-center': {
    id: 'al-mcguire-center',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Al McGuire Center'
      }
    ],
    location: [
      -87.92676,
      43.03962
    ],
    ticketmasterIds: ['KovZpa31ke'],
    capacity: [
      {
        seats: 3700,
        setup: 'basketball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://admissions.marquette.edu/portal/mumap'
      }
    ],
    roof: 'indoor'
  },
  'dockhounds-ballpark': {
    id: 'dockhounds-ballpark',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Wisconsin Brewing Company Park'
      },
      {
        name: 'DockHounds Ballpark',
        from: '2026-04-07'
      }
    ],
    location: [
      -88.47574,
      43.06754
    ],
    capacity: [
      {
        seats: 3641,
        setup: 'baseball',
        note: 'Reported. Reported 3,641; concert configuration unknown. Source: https://www.stadiumjourney.com/stadiums/wisconsin-brewing-company-park-lake-country-dockhounds'
      }
    ],
    roof: 'open'
  },
  'klotsche-center': {
    id: 'klotsche-center',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Klotsche Center'
      }
    ],
    location: [
      -87.87949,
      43.07949
    ],
    capacity: [
      {
        seats: 3500,
        setup: 'basketball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://mkepanthers.com/facilities/klotsche-center/1'
      }
    ],
    roof: 'indoor'
  },
  'kapco-park': {
    id: 'kapco-park',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Kapco Park'
      }
    ],
    location: [
      -87.91378,
      43.25645
    ],
    capacity: [
      {
        seats: 3000,
        setup: 'baseball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://northwoodsleague.com/lakeshore-chinooks/team/kapcopark/'
      }
    ],
    roof: 'open'
  },
  'southeast-sales-powersports-stadium': {
    id: 'southeast-sales-powersports-stadium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Kohler Engines Stadium'
      },
      {
        name: 'Southeast Sales Powersports Stadium'
      }
    ],
    location: [
      -87.99798,
      43.146
    ],
    capacity: [
      {
        seats: 3000,
        setup: 'soccer',
        note: 'Official. OSM parent soccer complex point; exact pitch unverified. Source: https://www.mksc.org/assets/139/20/mksc_january_2023_newsletters-2.pdf?73137='
      }
    ],
    roof: 'open'
  },
  'time-of-grace-center': {
    id: 'time-of-grace-center',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Time of Grace Center'
      }
    ],
    location: [
      -88.02195,
      43.03727
    ],
    capacity: [
      {
        seats: 2500,
        setup: 'basketball',
        note: 'Official. OSM campus centroid; exact gym point unverified. Source: https://wlcsports.com/facilities/time-of-grace-center/9'
      }
    ],
    roof: 'indoor'
  },
  'riverside-theater': {
    id: 'riverside-theater',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Riverside Theater'
      }
    ],
    location: [
      -87.91093,
      43.03889
    ],
    capacity: [
      {
        seats: 2414,
        setup: 'concert',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.pabsttheatergroup.com/rentals/ticketed-event-rentals'
      }
    ],
    roof: 'indoor',
    ticketmasterIds: ['ZFr9jZeA7F', 'KovZpZA1IdeA']
  },
  'uihlein-hall': {
    id: 'uihlein-hall',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Uihlein Hall'
      }
    ],
    location: [
      -87.9113,
      43.04292
    ],
    ticketmasterIds: ['KovZpZAEAkaA'],
    capacity: [
      {
        seats: 2125,
        setup: 'concert',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.marcuscenter.org/host-an-event/uihlein-hall/'
      }
    ],
    roof: 'indoor'
  },
  'wilson-ice-arena': {
    id: 'wilson-ice-arena',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Wilson Ice Arena'
      }
    ],
    location: [
      -87.94258,
      42.9711
    ],
    capacity: [
      {
        seats: 2000,
        setup: 'hockey',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://county.milwaukee.gov/EN/Parks/Explore/Community-Centers/Wilson-Ice-Arena'
      }
    ],
    roof: 'indoor'
  },
  'schneider-stadium': {
    id: 'schneider-stadium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Schneider Stadium'
      }
    ],
    location: [
      -88.22988,
      43.00479
    ],
    capacity: [
      {
        seats: 2000,
        setup: 'football',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.carrollu.edu/facilities/athletic-facilities/'
      },
      {
        seats: 2000,
        setup: 'soccer',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.carrollu.edu/facilities/athletic-facilities/'
      }
    ],
    roof: 'open'
  },
  'engelmann-stadium': {
    id: 'engelmann-stadium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Engelmann Stadium'
      }
    ],
    location: [
      -87.88583,
      43.07684
    ],
    ticketmasterIds: ['KovZ917AJzH'],
    capacity: [
      {
        seats: 2000,
        setup: 'soccer',
        note: 'Estimated. Estimated lower-bound total of more than 1,500 bleacher places plus 500 grass spectators; no exact maximum. Source: https://mkepanthers.com/facilities/engelmann-stadium/5'
      }
    ],
    roof: 'open'
  },
  'pettit-national-ice-center': {
    id: 'pettit-national-ice-center',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Pettit National Ice Center'
      }
    ],
    location: [
      -88.01574,
      43.02566
    ],
    capacity: [
      {
        seats: 2000,
        note: 'Reported. Reported legacy total for the main skating room; not a capacity for each interior rink. Source: https://de.wikipedia.org/wiki/Pettit_National_Ice_Center'
      }
    ],
    roof: 'indoor'
  },
  'buuck-field-house': {
    id: 'buuck-field-house',
    metroId: 'milwaukee',
    names: [
      {
        name: 'R. John Buuck Field House'
      }
    ],
    location: [
      -87.91666,
      43.25427
    ],
    capacity: [
      {
        seats: 1800,
        setup: 'basketball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://cuwfalcons.com/sports/2025/4/16/facilities-rjohnbuuckfieldhouse.aspx'
      }
    ],
    roof: 'indoor'
  },
  'rave-hall': {
    id: 'rave-hall',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Rave Hall'
      },
      {
        name: 'The Rave'
      }
    ],
    location: [
      -87.94332,
      43.03792
    ],
    capacity: [
      {
        seats: 1800,
        setup: 'concert',
        note: 'Reported. Reported 1,800 conflicts with Claude 1,500; current official per-room inventory unknown. Source: https://www.mixonline.com/live-sound/venues/milwaukees-the-rave-rocks-new-p-a'
      }
    ],
    roof: 'indoor'
  },
  'cooley-auditorium': {
    id: 'cooley-auditorium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Cooley Auditorium'
      }
    ],
    location: [
      -87.92031,
      43.04437
    ],
    capacity: [
      {
        seats: 1800,
        note: 'Official. Mapped MATC campus point, interior auditorium point unverified; this is not the athletic home. Source: https://www.matc.edu/who-we-are/offices/college-events/milwaukee-campus-rental.html'
      }
    ],
    roof: 'indoor'
  },
  'valley-fields': {
    id: 'valley-fields',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Valley Fields'
      }
    ],
    location: [
      -87.9361,
      43.03212
    ],
    ticketmasterIds: ['KovZ917Ai87'],
    capacity: [
      {
        seats: 1750,
        setup: 'soccer',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://gomarquette.com/facilities/valley-fields/4'
      }
    ],
    roof: 'open'
  },
  'bradley-symphony-center': {
    id: 'bradley-symphony-center',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Allen-Bradley Hall'
      },
      {
        name: 'Bradley Symphony Center'
      }
    ],
    location: [
      -87.9134,
      43.03925
    ],
    ticketmasterIds: ['KovZ917AIWB'],
    capacity: [
      {
        seats: 1650,
        setup: 'concert',
        note: 'Official. Official opening 1,650; other publications report 1,799/1,800. Current sellable inventory unresolved. Source: https://www.mso.org/app/uploads/2022/11/MSO_21.22_Annual_Report-112922q_individual-pages_lo-res.pdf'
      }
    ],
    roof: 'indoor'
  },
  'van-male-field-house': {
    id: 'van-male-field-house',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Van Male Field House'
      }
    ],
    location: [
      -88.22842,
      43.00491
    ],
    capacity: [
      {
        seats: 1500,
        setup: 'basketball',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.carrollu.edu/facilities/athletic-facilities/'
      }
    ],
    roof: 'indoor'
  },
  'raabe-stadium': {
    id: 'raabe-stadium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Raabe Stadium'
      }
    ],
    location: [
      -88.04277,
      43.05102
    ],
    capacity: [
      {
        seats: 1500,
        setup: 'football',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://fs.ncaa.org.s3.amazonaws.com/Docs/stats/football_records/D3.pdf'
      }
    ],
    roof: 'open'
  },
  'ozaukee-ice-center': {
    id: 'ozaukee-ice-center',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Ozaukee Ice Center'
      }
    ],
    location: [
      -87.97663,
      43.27875
    ],
    capacity: [
      {
        seats: 1000,
        setup: 'hockey',
        note: 'Official. Official 2011 opening, 1,000 seats; up to 1,500 including standing; applies to the CUW/new rink only. Source: https://cuwfalcons.com/news/2011/12/9/12_9_2011_3031.aspx',
        standing: 1500
      }
    ],
    roof: 'indoor'
  },
  'pabst-theater': {
    id: 'pabst-theater',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Pabst Theater'
      }
    ],
    location: [
      -87.91046,
      43.04114
    ],
    ticketmasterIds: ['KovZpZAal6EA'],
    capacity: [
      {
        seats: 1341,
        setup: 'concert',
        note: 'Official. Current published setup; other configurations are not assumed equal. Source: https://www.pabsttheatergroup.com/rentals/ticketed-event-rentals'
      }
    ],
    roof: 'indoor'
  },
  'shattuck-auditorium': {
    id: 'shattuck-auditorium',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Shattuck Auditorium'
      }
    ],
    location: [
      -88.22717,
      43.00471
    ],
    capacity: [
      {
        seats: 1100,
        setup: 'concert',
        note: 'Official. Official approximate 1,100; older layouts may differ. Source: https://www.carrollu.edu/facilities/shattuck-music-center/'
      }
    ],
    roof: 'indoor'
  },
  'varsity-theatre': {
    id: 'varsity-theatre',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Varsity Theatre'
      }
    ],
    location: [
      -87.92942,
      43.0391
    ],
    capacity: [
      {
        seats: 1075,
        note: 'Official. Official 1,075 lecture layout, concert 700; do not size a concert by lecture seats. Source: https://www.marquette.edu/event-services/varsity-theatre.php'
      },
      {
        seats: 700,
        setup: 'concert',
        note: 'Official. Official 1,075 lecture layout, concert 700; do not size a concert by lecture seats. Source: https://www.marquette.edu/event-services/varsity-theatre.php'
      }
    ],
    roof: 'indoor'
  },
  'st-thomas-more-gym': {
    id: 'st-thomas-more-gym',
    metroId: 'milwaukee',
    names: [
      { name: 'Rick Majerus Court' },
      { name: 'Jerry Huennekens Gymnasium' }
    ],
    location: [
      -87.87700,
      42.98015
    ],
    capacity: [
      {
        seats: 1250,
        setup: 'basketball',
        note: 'Official WIAA basketball seating, 2025-02-27; school identifies this as its basketball/volleyball competition room. Attendance is unknown. Coordinate is the mapped school campus, not a surveyed gym point. Sources: https://www.wiaawi.org/portals/0/pdf/sports/basketball_boys/bk_gyms.pdf and https://www.tmore.org/athletics'
      }
    ],
    roof: 'indoor'
  },
  'whitnall-main-gym': {
    id: 'whitnall-main-gym',
    metroId: 'milwaukee',
    names: [
      { name: 'Whitnall High School Main Gym' }
    ],
    location: [
      -88.05628,
      42.95397
    ],
    capacity: [
      {
        seats: 1200,
        setup: 'basketball',
        note: 'Official WIAA basketball seating, 2025-02-27. School announcement identifies a public varsity game in Main Gym on 2027-01-29; attendance is unknown. Coordinate is the mapped school campus, not a surveyed gym point. Sources: https://www.wiaawi.org/portals/0/pdf/sports/basketball_boys/bk_gyms.pdf and https://whs.whitnall.com/activities/co-curricular-hub/hall-of-fame'
      }
    ],
    roof: 'indoor'
  },
  'catholic-memorial-main-gym': {
    id: 'catholic-memorial-main-gym',
    metroId: 'milwaukee',
    names: [
      { name: 'Catholic Memorial Main Gym' }
    ],
    location: [
      -88.22037,
      43.00223
    ],
    capacity: [
      {
        seats: 1000,
        setup: 'basketball',
        note: 'Official WIAA basketball seating, 2025-02-27; WIAA schedule assigns a 2026 volleyball match to Main Gym, but volleyball capacity is unknown. Game attendance is unknown. Coordinate is the mapped school campus, not a surveyed gym point. Sources: https://www.wiaawi.org/portals/0/pdf/sports/basketball_boys/bk_gyms.pdf and https://schools.wiaawi.org/Directory/Schedule/Index?TeamID=139228'
      }
    ],
    roof: 'indoor'
  },
  'oak-creek-paec': {
    id: 'oak-creek-paec',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Oak Creek Performing Arts & Education Center'
      }
    ],
    location: [
      -87.90823,
      42.88749
    ],
    capacity: [
      {
        seats: 1000,
        setup: 'concert',
        note: 'Official. Official 1,000; mapped parent building, not surveyed interior room. Source: https://www.prarch.com/projects/oak-creek-high-school-performing-arts-education-center/'
      }
    ],
    roof: 'indoor'
  },
  'rave-ii': {
    id: 'rave-ii',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Eagles Hall'
      },
      {
        name: 'The Rave II'
      }
    ],
    location: [
      -87.94332,
      43.03792
    ],
    capacity: [
      {
        seats: 1000,
        setup: 'concert',
        note: 'Reported. Reported approximate 1,000; current official per-room inventory unknown. Source: https://en.wikipedia.org/wiki/The_Rave/Eagles_Club'
      }
    ],
    roof: 'indoor'
  },
  'turner-hall-ballroom': {
    id: 'turner-hall-ballroom',
    metroId: 'milwaukee',
    names: [
      {
        name: 'Turner Hall Ballroom'
      }
    ],
    location: [
      -87.91553,
      43.04381
    ],
    ticketmasterIds: ['KovZpZA1I6lA'],
    capacity: [
      {
        seats: 987,
        setup: 'concert',
        note: 'Official. Official 987 standing, 600 seated. Near the listing threshold; never round to 1,000 in capacity. Source: https://www.pabsttheatergroup.com/rentals/ticketed-event-rentals'
      }
    ],
    roof: 'indoor'
  },
  // ---------- Boston (docs/research/city-builds/boston/boston-venue-table-answer.md; car shares from docs/research/city-builds/boston/boston-city-type-answer.md), Oct 12, 2026 ----------
  // Core, Foxborough/Mansfield corridor and Lowell (Tsongas). White Stadium and Matthews Arena stay out until they reopen.
  // Pawtucket (Legacy 2027) is outside the boundary. Festival rows (Boston Calling, Marathon, HOCR) are point events, not rooms.
  'gillette-stadium': {
    id: 'gillette-stadium',
    metroId: 'boston',
    carShare: 0.92,
    names: [{ name: 'Gillette Stadium' }, { name: 'Boston Stadium', from: '2026-06-13' }],
    location: [-71.2643, 42.0909],
    capacity: [
      { seats: 64628, setup: 'football', note: 'Reported. NFL 64,628 (2023–present); World Cup setup 64,146 announced. Source: docs/research/city-builds/boston/boston-venue-table-answer.md A01.' },
      { seats: 20000, setup: 'soccer', note: 'Reported. Expandable soccer default; concert setup unknown. Source: venue table A01.' },
    ],
    roof: 'open',
  },
  'alumni-stadium': {
    id: 'alumni-stadium',
    metroId: 'boston',
    names: [{ name: 'Alumni Stadium' }],
    location: [-71.1662, 42.3351],
    capacity: [{ seats: 44500, setup: 'football', note: 'Official (Boston College). Source: venue table A02.' }],
    roof: 'open',
  },
  'fenway-park': {
    id: 'fenway-park',
    metroId: 'boston',
    carShare: 0.65,
    names: [{ name: 'Fenway Park' }],
    location: [-71.0970999, 42.3464614],
    capacity: [
      { seats: 37755, setup: 'baseball', note: "Official night baseball (MLB). Day 37,305 with tarped batter's eye. Source: venue table A03." },
    ],
    roof: 'open',
  },
  'harvard-stadium': {
    id: 'harvard-stadium',
    metroId: 'boston',
    names: [{ name: 'Harvard Stadium' }],
    location: [-71.1268, 42.3666],
    capacity: [
      { seats: 25000, setup: 'football', note: 'Official (Harvard rentals, 2024). Conflicts with 30,323 on lacrosse page; both kept in research. Source: venue table A04.' },
    ],
    roof: 'open',
  },
  'xfinity-center': {
    id: 'xfinity-center',
    metroId: 'boston',
    carShare: 0.95,
    names: [{ name: 'Xfinity Center' }, { name: 'Comcast Center' }],
    location: [-71.2196119, 41.9924449],
    capacity: [{ seats: 19900, setup: 'concert', note: 'Reported (Globe, 2026). Lawn/GA not fixed seats. Mansfield corridor exception. Source: venue table A05.' }],
    roof: 'covered',
  },
  'td-garden': {
    id: 'td-garden',
    metroId: 'boston',
    names: [
      { name: 'FleetCenter' },
      { name: 'TD Banknorth Garden' },
      { name: 'TD Garden', from: '2009-07-01' },
    ],
    location: [-71.0621622, 42.3662986],
    capacity: [
      { seats: 19156, setup: 'basketball', note: 'Official. Basketball 19,156; hockey 17,850; max 19,580 (TD Garden). 2019 hockey/basketball bumps noted in research. Source: venue table A06.' },
      { seats: 17850, setup: 'hockey', note: 'Official (TD Garden). Source: venue table A06.' },
    ],
    roof: 'indoor',
  },
  'nickerson-field': {
    id: 'nickerson-field',
    metroId: 'boston',
    names: [{ name: 'Nickerson Field' }],
    location: [-71.119302, 42.3532848],
    capacity: [{ seats: 9871, setup: 'soccer', note: 'Official (BU): 3,546 chair-back + 6,325 bleacher. Source: venue table A08.' }],
    roof: 'open',
  },
  'conte-forum': {
    id: 'conte-forum',
    metroId: 'boston',
    names: [{ name: 'Silvio O. Conte Forum' }, { name: 'Conte Forum' }],
    location: [-71.1677, 42.3352],
    capacity: [
      { seats: 8606, setup: 'basketball', note: 'Official (BC). Source: venue table A09.' },
      { seats: 7884, setup: 'hockey', note: 'Official (BC). Kelley Rink. Source: venue table A09.' },
    ],
    roof: 'indoor',
  },
  'agganis-arena': {
    id: 'agganis-arena',
    metroId: 'boston',
    names: [{ name: 'Agganis Arena' }],
    location: [-71.11773, 42.3522233],
    capacity: [
      { seats: 6150, setup: 'hockey', note: 'Reported (2026 promoter guide). Concert up to 7,200–8,000 center stage in research. Source: venue table A10.' },
      { seats: 7200, setup: 'concert', note: 'Reported. Source: venue table A10.' },
    ],
    roof: 'indoor',
  },
  'tsongas-center': {
    id: 'tsongas-center',
    metroId: 'boston',
    names: [{ name: 'Tsongas Center' }, { name: 'Tsongas Arena' }],
    location: [-71.3132561, 42.6502383],
    capacity: [
      { seats: 6500, setup: 'hockey', note: 'Reported. Conflicts with athletics page 6,003; research unresolved. Source: venue table A11.' },
      { seats: 7800, setup: 'concert', note: 'Reported. Source: venue table A11.' },
    ],
    roof: 'indoor',
  },
  'mgm-music-hall-fenway': {
    id: 'mgm-music-hall-fenway',
    metroId: 'boston',
    names: [{ name: 'MGM Music Hall at Fenway' }],
    location: [-71.0954944, 42.3466937],
    capacity: [{ seats: 5009, setup: 'concert', note: 'Reported (Songkick). Threshold case; seated/standing split unknown. Source: venue table A12.' }],
    roof: 'indoor',
  },
  'leader-bank-pavilion': {
    id: 'leader-bank-pavilion',
    metroId: 'boston',
    names: [{ name: 'Leader Bank Pavilion' }, { name: 'Rockland Trust Bank Pavilion' }],
    location: [-71.0359348, 42.3485027],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Official (naming partner). Exactly at friction threshold. Source: venue table A13.' }],
    roof: 'covered',
  },
  'track-new-balance': {
    id: 'track-new-balance',
    metroId: 'boston',
    names: [{ name: 'The TRACK at New Balance' }],
    location: [-71.1446563, 42.3564587],
    capacity: [{ seats: 5000, setup: 'track', note: 'Reported. Sources disagree up to vs over 5,000; confirm per event. Source: venue table A14.' }],
    roof: 'indoor',
  },
  'wang-theatre': {
    id: 'wang-theatre',
    metroId: 'boston',
    names: [{ name: 'Boch Center – Wang Theatre' }, { name: 'Wang Theatre' }],
    location: [-71.0643045, 42.350458],
    capacity: [{ seats: 3500, setup: 'concert', note: 'Reported. Source: venue table A18.' }],
    roof: 'indoor',
  },
  'orpheum-theatre-boston': {
    id: 'orpheum-theatre-boston',
    metroId: 'boston',
    names: [{ name: 'Orpheum Theatre' }],
    location: [-71.0608194, 42.3562342],
    capacity: [{ seats: 2700, setup: 'concert', note: 'Reported. Source: venue table A19.' }],
    roof: 'indoor',
  },
  'house-of-blues-boston': {
    id: 'house-of-blues-boston',
    metroId: 'boston',
    names: [{ name: 'Citizens House of Blues Boston' }, { name: 'House of Blues Boston' }],
    location: [-71.0955967, 42.3474108],
    capacity: [{ seats: 2200, setup: 'concert', note: 'Reported. ~2,425 incl. balconies in secondary source. Source: venue table A20.' }],
    roof: 'indoor',
  },
  'big-night-live': {
    id: 'big-night-live',
    metroId: 'boston',
    names: [{ name: 'Big Night Live' }],
    location: [-71.0612, 42.3653],
    capacity: [{ seats: 1400, setup: 'concert', note: 'Reported. Coordinates approximate (Causeway St). Source: venue table A21.' }],
    roof: 'indoor',
  },
  'royale-boston': {
    id: 'royale-boston',
    metroId: 'boston',
    names: [{ name: 'Royale' }],
    location: [-71.065799, 42.3500824],
    capacity: [{ seats: 1200, setup: 'concert', note: 'Reported. 279 Tremont St. Source: venue table A22.' }],
    roof: 'indoor',
  },
  'jordan-field': {
    id: 'jordan-field',
    metroId: 'boston',
    names: [{ name: 'Jordan Field' }],
    location: [-71.1297321, 42.3678302],
    capacity: [{ seats: 3000, setup: 'soccer', note: 'Official (Harvard, 2024): up to 3,000 incl. standing. Source: venue table A23.' }],
    roof: 'open',
  },

  // Tampa Bay (docs/research/city-builds/tampa/tampa-venue-table-answer.md, Oct 12, 2026). Hillsborough + Pinellas
  // venue core; no unsupported carShare overrides (city-type estimates stay in research). Coordinates from
  // OpenStreetMap by name where found; others take the research approximation, noted below.
  'raymond-james-stadium': {
    id: 'raymond-james-stadium',
    metroId: 'tampa',
    names: [{ name: 'Raymond James Stadium' }],
    location: [-82.5033545, 27.9759793],
    capacity: [
      {
        seats: 69218,
        setup: 'football',
        note: 'Reported. 69,218 since 2022, expandable to ~75,000; conflicts with 65,000–65,890 on bowl-operator pages. Source: https://en.wikipedia.org/wiki/Raymond_James_Stadium',
        fromYear: 2022,
      },
      {
        seats: 69218,
        setup: 'concert',
        note: 'Same bowl; temporary end-zone seating can reach ~75,000. Source: https://populous.com/?p=28635',
      },
    ],
    roof: 'open',
  },
  'tropicana-field': {
    id: 'tropicana-field',
    metroId: 'tampa',
    names: [{ name: 'Tropicana Field' }],
    location: [-82.6532755, 27.7680559],
    capacity: [
      {
        seats: 25025,
        setup: 'baseball',
        note: 'Reported. Regular-season tarped configuration; conflicts with 20,025 (2026 visit). Postseason expands past 42,000. Source: https://3ddigitalvenue.com/3dmap/clients/mlb/tropicana-field/',
      },
    ],
    roof: 'covered',
  },
  'benchmark-international-arena': {
    id: 'benchmark-international-arena',
    metroId: 'tampa',
    names: [
      { name: 'Amalie Arena' },
      { name: 'Benchmark International Arena', from: '2025-08-13' },
    ],
    location: [-82.4518903, 27.942704],
    ticketmasterIds: ['Za5ju3rKuqZDduhSs3K_AaWBzwROtKPBXy'],
    capacity: [
      {
        seats: 19092,
        setup: 'hockey',
        note: 'Reported. Conflicts with 19,500 on a fan wiki. Source: https://blog.ticketmaster.com/step-inside-benchmark-international-arena-tampa-fl/',
      },
      {
        seats: 20500,
        setup: 'basketball',
        note: 'Reported. Source: https://blog.ticketmaster.com/step-inside-benchmark-international-arena-tampa-fl/',
      },
      {
        seats: 21500,
        setup: 'concert',
        note: 'Reported. End-stage maximum; varies by production. Source: https://blog.ticketmaster.com/step-inside-benchmark-international-arena-tampa-fl/',
      },
    ],
    roof: 'indoor',
  },
  'midflorida-amphitheatre': {
    id: 'midflorida-amphitheatre',
    metroId: 'tampa',
    names: [
      { name: 'MIDFLORIDA Credit Union Amphitheatre' },
      { name: 'Florida State Fairgrounds Amphitheatre' },
    ],
    // Approximate; OSM did not resolve the fairgrounds pavilion by name (research §A06).
    location: [-82.368, 27.988],
    capacity: [
      {
        seats: 9900,
        setup: 'concert',
        note: 'Reported. ~9,900 reserved under canopy; total with lawn ~20,000. Seated-only setup still ≥5,000. Source: https://news.pollstar.com/?p=173294',
      },
      {
        seats: 20000,
        setup: 'concert',
        note: 'Reported. ~9,900 reserved + ~10,000 lawn. Source: https://en.wikipedia.org/wiki/Florida_State_Fairgrounds',
      },
    ],
    roof: 'covered',
  },
  'george-m-steinbrenner-field': {
    id: 'george-m-steinbrenner-field',
    metroId: 'tampa',
    names: [{ name: 'George M. Steinbrenner Field' }],
    location: [-82.5066542, 27.9801645],
    capacity: [
      {
        seats: 11026,
        setup: 'baseball',
        note: 'Official (MLB.com). 11,026 seats + 13 suites. Source: https://www.mlb.com/news/featured/steinbrenner-field-guide-capacity-seating-chart-parking-and-more',
      },
    ],
    roof: 'open',
  },
  'yuengling-center': {
    id: 'yuengling-center',
    metroId: 'tampa',
    names: [
      { name: 'USF Sun Dome' },
      { name: 'Yuengling Center', from: '2018-07-01' },
    ],
    location: [-82.4066241, 28.0592444],
    capacity: [
      {
        seats: 10411,
        setup: 'basketball',
        note: 'Reported. 2018 renovation figure; conflicts with 10,500 elsewhere. Source: https://www.usforacle.com/?p=1464',
      },
    ],
    roof: 'indoor',
  },
  'wish-farms-soundstage': {
    id: 'wish-farms-soundstage',
    metroId: 'tampa',
    names: [
      { name: 'GT Grandstands at the Wish Farms Soundstage' },
      { name: 'Florida Strawberry Festival Grandstands' },
    ],
    // Approximate; OSM did not resolve the 2018 soundstage row (research §A09).
    location: [-82.141, 28.016],
    capacity: [
      {
        seats: 9200,
        setup: 'concert',
        note: 'Reported. 2018 build figure; stage rebuilt 2025 — seat count after rebuild unverified. Source: https://www.wusf.org/news/2018-02-27/2018-strawberry-festival-aims-to-build-new-memories',
      },
    ],
    roof: 'open',
  },
  'baycare-sound': {
    id: 'baycare-sound',
    metroId: 'tampa',
    names: [
      { name: 'The Sound' },
      { name: 'The BayCare Sound', from: '2024-07-01' },
    ],
    location: [-82.802783, 27.9674955],
    capacity: [
      {
        seats: 4000,
        setup: 'concert',
        note: 'Official (tourism). Removable covered seats only; sub-5,000 seated setup. Source: https://www.visitstpeteclearwater.com/profile/coachman-park/139272',
      },
      {
        seats: 9000,
        setup: 'concert',
        note: 'Official (tourism). 4,000 covered + 5,000 lawn. Source: https://www.visitstpeteclearwater.com/profile/coachman-park/139272',
      },
    ],
    roof: 'covered',
  },
  'baycare-ballpark': {
    id: 'baycare-ballpark',
    metroId: 'tampa',
    names: [
      { name: 'Bright House Field' },
      { name: 'Spectrum Field', from: '2017-01-01' },
      { name: 'BayCare Ballpark', from: '2021-01-01' },
    ],
    location: [-82.7316413, 27.9717307],
    capacity: [
      {
        seats: 8500,
        setup: 'baseball',
        note: 'Official (MiLB). Includes berm; seats-only figures 7,300–8,272. Source: https://www.mlb.com/milb/news/featured/explore-baycare-ballpark-home-of-the-clearwater-threshers',
      },
    ],
    roof: 'open',
  },
  'td-ballpark': {
    id: 'td-ballpark',
    metroId: 'tampa',
    names: [{ name: 'TD Ballpark' }],
    location: [-82.786662, 28.0038021],
    capacity: [
      {
        seats: 8500,
        setup: 'baseball',
        note: 'Official (tourism). Post-renovation spring-training capacity. Source: https://www.visitstpeteclearwater.com/things-to-do/sports/baseball-spring-training',
      },
    ],
    roof: 'open',
  },
  'al-lang-stadium': {
    id: 'al-lang-stadium',
    metroId: 'tampa',
    names: [{ name: 'Al Lang Stadium' }],
    location: [-82.6330913, 27.7683643],
    capacity: [
      {
        seats: 7227,
        setup: 'soccer',
        note: 'Reported. Club sometimes exceeds listed capacity. Source: https://stpetecatalyst.com/rowdies-gain-another-year-at-al-lang/',
      },
    ],
    roof: 'open',
  },
  'suncoast-credit-union-field': {
    id: 'suncoast-credit-union-field',
    metroId: 'tampa',
    names: [
      { name: 'Riverfront Stadium' },
      { name: 'Suncoast Credit Union Field', from: '2026-01-01' },
    ],
    // Approximate; OSM did not resolve the downtown riverfront soccer stadium (research §A14).
    location: [-82.4666, 27.9592],
    capacity: [
      {
        seats: 5248,
        setup: 'soccer',
        note: 'Reported (data site). Threshold-sensitive; verify with the club. Source: https://es.soccerway.com/equipo/tampa-bay-sun/xAR9r0l1',
      },
    ],
    roof: 'open',
  },
  'tampa-bay-downs': {
    id: 'tampa-bay-downs',
    metroId: 'tampa',
    names: [{ name: 'Tampa Bay Downs' }],
    // Approximate; no public seat count (research §A15).
    location: [-82.659, 28.044],
    capacity: [],
    roof: 'open',
  },
  'carol-morsani-hall': {
    id: 'carol-morsani-hall',
    metroId: 'tampa',
    names: [{ name: 'Carol Morsani Hall' }, { name: 'Morsani Hall' }],
    location: [-82.4667931, 27.9486867],
    capacity: [{ seats: 2610, setup: 'concert', note: 'Official (Straz Center). Source: https://admin.strazcenter.org/about-us' }],
    roof: 'indoor',
  },
  'ruth-eckerd-hall': {
    id: 'ruth-eckerd-hall',
    metroId: 'tampa',
    names: [{ name: 'Ruth Eckerd Hall' }],
    location: [-82.7046899, 27.9760792],
    capacity: [{ seats: 2180, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/Ruth_Eckerd_Hall' }],
    roof: 'indoor',
  },
  'mahaffey-theater': {
    id: 'mahaffey-theater',
    metroId: 'tampa',
    names: [{ name: 'The Mahaffey Theater' }, { name: 'Duke Energy Center for the Arts' }],
    // Approximate; OSM did not resolve the waterfront theater name (research §A20).
    location: [-82.6318, 27.7656],
    capacity: [{ seats: 2031, setup: 'concert', note: 'Official (tourism). Source: https://www.visitstpeteclearwater.com/list/best-area-theaters-performing-arts-halls' }],
    roof: 'indoor',
  },
  'jannus-live': {
    id: 'jannus-live',
    metroId: 'tampa',
    names: [{ name: 'Jannus Live' }],
    location: [-82.6360699, 27.7719217],
    capacity: [{ seats: 2000, setup: 'concert', note: 'Official. Mostly standing courtyard. Source: https://www.jannuslive.com/live-music-st-pete/' }],
    roof: 'open',
  },
  'hard-rock-event-center': {
    id: 'hard-rock-event-center',
    metroId: 'tampa',
    names: [{ name: 'Hard Rock Event Center' }],
    // Approximate; casino complex (research §A21b).
    location: [-82.371, 27.995],
    capacity: [{ seats: 1500, setup: 'concert', note: 'Reported. Source: https://tbaytoday.6amcity.com/live-music-venues-tampa-fl' }],
    roof: 'indoor',
  },
  'tampa-theatre': {
    id: 'tampa-theatre',
    metroId: 'tampa',
    names: [{ name: 'Tampa Theatre' }],
    location: [-82.4588074, 27.9503814],
    capacity: [{ seats: 1238, setup: 'concert', note: 'Reported (secondary; verify with venue). Source: https://getmorestreams.com/?p=11019' }],
    roof: 'indoor',
  },
  'ferguson-hall-straz': {
    id: 'ferguson-hall-straz',
    metroId: 'tampa',
    names: [{ name: 'Louise Lykes Ferguson Hall' }, { name: 'Ferguson Hall' }],
    // Straz campus; interior room approximate (research §A22).
    location: [-82.4612, 27.9505],
    capacity: [{ seats: 1042, setup: 'concert', note: 'Official (Straz Center). Near the 1,000 pre-list line. Source: https://admin.strazcenter.org/about-us' }],
    roof: 'indoor',
  },
  'dodger-stadium': {
    id: 'dodger-stadium',
    metroId: 'la',
    names: [{ name: 'Dodger Stadium' }],
    location: [-118.24, 34.0739],
    ticketmasterIds: ['KovZpa2W1e'],
    capacity: [{ seats: 56000, setup: 'baseball' }],
    roof: 'open',
  },
  'crypto-com-arena': {
    id: 'crypto-com-arena',
    metroId: 'la',
    names: [{ name: 'Staples Center' }, { name: 'Crypto.com Arena', from: '2021-12-25' }],
    location: [-118.2673, 34.043],
    ticketmasterIds: ['KovZpZAEdntA'],
    capacity: [
      { seats: 18910, setup: 'basketball' },
      { seats: 18145, setup: 'hockey' },
    ],
    roof: 'indoor',
  },
  coliseum: {
    id: 'coliseum',
    metroId: 'la',
    names: [{ name: 'LA Memorial Coliseum' }],
    location: [-118.2879, 34.0141],
    capacity: [{ seats: 93607, setup: 'football', note: 'Through the 2018 season (reported; USC\'s own pre-renovation figure was 92,348)' },
      { seats: 77500, fromYear: 2019, note: 'From August 2019, after the renovation (USC)' },
    ],
    roof: 'open',
  },
  'bmo-stadium': {
    id: 'bmo-stadium',
    metroId: 'la',
    names: [{ name: 'Banc of California Stadium' }, { name: 'BMO Stadium', from: '2023-01-19' }],
    location: [-118.2833, 34.0128],
    ticketmasterIds: ['KovZ917A3c0'],
    capacity: [
      { seats: 22000, setup: 'soccer', note: 'MLS. MLS Cup 2022 drew 22,384.' },
      { seats: 24000, setup: 'concert', note: 'Estimated. The Oct 6, 2026 research found no source for an end-stage figure.' },
    ],
    roof: 'open',
  },
  'sofi-stadium': {
    id: 'sofi-stadium',
    metroId: 'la',
    names: [{ name: 'SoFi Stadium' }],
    location: [-118.3392, 33.9535],
    ticketmasterIds: ['KovZ917ACh0', 'KovZ917AJe0'],
    capacity: [{ seats: 70240, setup: 'football', fromYear: 2020, note: 'Standard setup. Expandable to 100,240 for the biggest events.' }],
    roof: 'covered',
  },
  'intuit-dome': {
    id: 'intuit-dome',
    metroId: 'la',
    names: [{ name: 'Intuit Dome' }],
    location: [-118.3415, 33.945],
    ticketmasterIds: ['KovZ917Acq0', 'Za5ju3rKuqZDvWRX-N-s4vLnLnpbuyYw5q'],
    capacity: [{ seats: 18000, setup: 'basketball', fromYear: 2024, note: 'Design figure; 18,300 also reported. No end-stage concert figure found.' }],
    roof: 'indoor',
  },
  'kia-forum': {
    id: 'kia-forum',
    metroId: 'la',
    names: [{ name: 'The Forum' }, { name: 'Kia Forum', from: '2022-04-04' }],
    location: [-118.342, 33.9582],
    ticketmasterIds: ['KovZpZAEkn6A'],
    capacity: [
      { seats: 17500, setup: 'concert', note: 'Marketed as 17,500; up to 18,000 (reported)' },
      { seats: 17505, setup: 'basketball', note: 'Reported' },
      { seats: 16005, setup: 'hockey', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'hollywood-bowl': {
    id: 'hollywood-bowl',
    metroId: 'la',
    strained: true,
    names: [{ name: 'Hollywood Bowl' }],
    // LA Phil: 39% came by bus in 2025 (26% in 2022), so about 61% by car or other (docs/research/topics/venue-egress-answer.md).
    carShare: 0.61,
    location: [-118.3391, 34.1122],
    ticketmasterIds: ['KovZpZAFFvJA', 'KovZpZAFFvtA'],
    capacity: [{ seats: 17500, note: 'LA Phil. An older figure is 17,376.' }],
    roof: 'open',
  },
  'rose-bowl': {
    id: 'rose-bowl',
    metroId: 'la',
    strained: true,
    names: [{ name: 'Rose Bowl' }],
    location: [-118.1676, 34.1613],
    ticketmasterIds: ['KovZpZAEA66A', 'Z7r9jZadjY', 'KovZpZAal1tA', 'rZ7HnEZ17qk_f', 'Z7r9jZadz8'],
    capacity: [
      { seats: 89702, note: 'The stadium\'s all-seated figure. UCLA reports 91,136; aggregators say 92,542.' },
      { seats: 60000, setup: 'concert', note: 'Estimated: the City of Pasadena\'s expected crowd per Live Nation concert (Jan 18, 2023 agenda), docs/research/topics/concert-venue-figures-answer.md.' },
    ],
    roof: 'open',
  },
  'dignity-health-sports-park': {
    id: 'dignity-health-sports-park',
    metroId: 'la',
    names: [{ name: 'StubHub Center' }, { name: 'Dignity Health Sports Park', from: '2019-01-01' }],
    location: [-118.2629, 33.8624],
    ticketmasterIds: ['Za5ju3rKuqZDe3v6VgGnvCzDCXT-Ay_Rm8', 'Z7r9jZadao', 'Z7r9jZae-S', 'Z7r9jZadN4', 'KovZ917A-Mx'],
    capacity: [
      { seats: 27167, note: 'Soccer and football (the Galaxy round to 27,000)' },
      { seats: 30510, setup: 'concert', note: 'Reported' },
    ],
    roof: 'open',
  },
  'angel-stadium': {
    id: 'angel-stadium',
    metroId: 'la',
    names: [{ name: 'Angel Stadium' }],
    location: [-117.8817, 33.8003],
    ticketmasterIds: ['KovZpZA7dkIA'],
    capacity: [{ seats: 45483, setup: 'baseball', note: 'Through 2018 (reported)' },
      { seats: 45517, fromYear: 2019, note: 'MLB' },
    ],
    roof: 'open',
  },
  'pauley-pavilion': {
    id: 'pauley-pavilion',
    metroId: 'la',
    names: [{ name: 'Pauley Pavilion' }],
    location: [-118.4468, 34.0702],
    ticketmasterIds: ['KovZpZAEkveA'],
    capacity: [{ seats: 13800, setup: 'basketball', fromYear: 2012, note: 'Since the 2012 renovation (Wikipedia infobox, checked Oct 6, 2026).' }],
    roof: 'indoor',
  },
  'galen-center': {
    id: 'galen-center',
    metroId: 'la',
    names: [{ name: 'Galen Center' }],
    location: [-118.28, 34.021],
    capacity: [{ seats: 10258, setup: 'basketball', note: 'Basketball capacity (Wikipedia infobox, checked Oct 6, 2026).' }],
    roof: 'indoor',
  },
  'honda-center': {
    id: 'honda-center',
    metroId: 'la',
    names: [{ name: 'Honda Center' }],
    location: [-117.8765, 33.8078],
    ticketmasterIds: ['KovZpakTme'],
    capacity: [
      { seats: 17174, setup: 'hockey', note: 'Hockey capacity in wide use. The arena site has also listed 17,732.' },
      { seats: 18336, setup: 'basketball', note: 'Reported' },
      { seats: 18900, setup: 'concert', note: 'Up to 18,900 (reported); theatre setup 8,400' },
    ],
    roof: 'indoor',
  },
  'santa-anita-park': {
    id: 'santa-anita-park',
    metroId: 'la',
    names: [{ name: 'Santa Anita Park' }],
    location: [-118.0459, 34.139],
    ticketmasterIds: ['KovZpZAId1lA'],
    capacity: [{ seats: 26000, setup: 'racing', note: 'Grandstand, seated (reported; an event listing says 18,897). Infield events up to 50,000.' }],
    roof: 'covered',
  },
  'pomona-dragstrip': {
    id: 'pomona-dragstrip',
    metroId: 'la',
    names: [{ name: 'Auto Club Raceway at Pomona' }, { name: 'In-N-Out Burger Pomona Dragstrip', from: '2023-03-30' }],
    // Approximate: OpenStreetMap has no point for the strip itself.
    location: [-117.771, 34.091],
    ticketmasterIds: ['KovZpZAaEknA'],
    capacity: [{ seats: 40000, setup: 'racing', note: 'Reported' }],
    roof: 'open',
  },
  'weingart-stadium': {
    id: 'weingart-stadium',
    metroId: 'la',
    names: [{ name: 'Weingart Stadium' }],
    location: [-118.1504, 34.0413],
    capacity: [{ seats: 22355, setup: 'football', note: 'Reported, not confirmed with East LA College' }],
    roof: 'open',
  },
  'long-beach-arena': {
    id: 'long-beach-arena',
    metroId: 'la',
    names: [{ name: 'Long Beach Arena' }],
    location: [-118.1884, 33.7641],
    ticketmasterIds: ['KovZ917ARcA', 'KovZpZAJdIJA'],
    capacity: [
      { seats: 13000, note: 'Visit Long Beach; 13,500 also reported' },
      { seats: 14000, setup: 'basketball', note: 'Reported' },
      { seats: 14500, setup: 'concert', note: 'Up to 14,500 (reported); smaller setups from 10,500' },
    ],
    roof: 'indoor',
  },
  'fivepoint-amphitheatre': {
    id: 'fivepoint-amphitheatre',
    metroId: 'la',
    // Closed Oct 21, 2023. Kept so nights there (2017–2023) can be logged.
    names: [{ name: 'FivePoint Amphitheatre' }],
    // Approximate: the Great Park point, not the stage.
    location: [-117.7325, 33.6705],
    ticketmasterIds: ['KovZ917A8gf'],
    capacity: [{ seats: 12000, setup: 'concert', note: 'Reported (12,280 also reported). Closed Oct 21, 2023.' }],
    roof: 'open',
  },
  'drake-stadium': {
    id: 'drake-stadium',
    metroId: 'la',
    names: [{ name: 'Drake Stadium' }],
    location: [-118.4485, 34.0721],
    ticketmasterIds: ['KovZpZAEA61A'],
    capacity: [{ seats: 11700, setup: 'soccer', note: 'UCLA' }],
    roof: 'open',
  },
  'veterans-memorial-stadium': {
    id: 'veterans-memorial-stadium',
    metroId: 'la',
    names: [{ name: 'Veterans Memorial Stadium' }],
    location: [-118.1364, 33.8283],
    capacity: [{ seats: 11600, setup: 'football', note: 'Reported' }],
    roof: 'open',
  },
  'fairplex-grandstand': {
    id: 'fairplex-grandstand',
    metroId: 'la',
    names: [{ name: 'Fairplex' }],
    location: [-117.7669, 34.0871],
    ticketmasterIds: ['KovZpZAaalvA', 'KovZ917AcjZ'],
    capacity: [
      { seats: 10000, note: 'Grandstand, seated (reported; Songkick lists 8,710)' },
      { seats: 15000, setup: 'concert', note: 'Up to 15,000 (reported)' },
    ],
    roof: 'open',
  },
  'titan-stadium': {
    id: 'titan-stadium',
    metroId: 'la',
    names: [{ name: 'Titan Stadium' }],
    location: [-117.887, 33.8866],
    ticketmasterIds: ['ZFr9jZAv67', 'KovZ917AEUG'],
    capacity: [{ seats: 10000, setup: 'soccer', note: 'Cal State Fullerton' }],
    roof: 'open',
  },
  'pacific-amphitheatre': {
    id: 'pacific-amphitheatre',
    metroId: 'la',
    names: [{ name: 'Pacific Amphitheatre' }],
    location: [-117.9044, 33.6666],
    ticketmasterIds: ['KovZpZAF6EaA'],
    capacity: [{ seats: 8200, setup: 'concert', note: 'OC Fair, after the 2013 rebuild; 8,042 also reported' }],
    roof: 'open',
  },
  'dhsp-tennis-stadium': {
    id: 'dhsp-tennis-stadium',
    metroId: 'la',
    names: [{ name: 'Dignity Health Sports Park Tennis Stadium' }],
    // Approximate: beside the main stadium in Carson.
    location: [-118.262, 33.863],
    capacity: [{ seats: 8000, setup: 'tennis', note: 'Tennis and boxing' }],
    roof: 'open',
  },
  'anaheim-convention-center': {
    id: 'anaheim-convention-center',
    metroId: 'la',
    names: [{ name: 'Anaheim Convention Center' }],
    location: [-117.9208, 33.8006],
    ticketmasterIds: ['KovZpZAJE1eA', 'KovZpZAaaatA'],
    capacity: [{ seats: 7500, note: 'The arena, stadium-style. Halls A–D take 12,000–15,000 each in a theater setup.' }],
    roof: 'indoor',
  },
  'peacock-theater': {
    id: 'peacock-theater',
    metroId: 'la',
    names: [{ name: 'Microsoft Theater' }, { name: 'Peacock Theater', from: '2023-07-11' }],
    location: [-118.2671, 34.0445],
    ticketmasterIds: ['KovZpaFSVe', 'KovZ917ARk0'],
    capacity: [{ seats: 7100, setup: 'concert', note: 'AEG' }],
    roof: 'indoor',
  },
  'shrine-auditorium': {
    id: 'shrine-auditorium',
    metroId: 'la',
    names: [{ name: 'Shrine Auditorium' }],
    location: [-118.2814, 34.0234],
    ticketmasterIds: ['KovZpa3u7e'],
    capacity: [{ seats: 6300, setup: 'concert', note: 'The auditorium, seated (reported). The Expo Hall takes 5,000 standing and can run its own event the same night.' }],
    roof: 'indoor',
  },
  'youtube-theater': {
    id: 'youtube-theater',
    metroId: 'la',
    names: [{ name: 'YouTube Theater' }],
    location: [-118.3368, 33.9518],
    ticketmasterIds: ['KovZ917AJue', 'Za5ju3rKuqZDvOb3OUpwW54n8LGqwdkjqv'],
    capacity: [{ seats: 6000, setup: 'concert', fromYear: 2021, note: 'Full setup; 4,400 and 3,400 reduced setups' }],
    roof: 'indoor',
  },
  'greek-theatre': {
    id: 'greek-theatre',
    metroId: 'la',
    strained: true,
    names: [{ name: 'Greek Theatre' }],
    location: [-118.2964, 34.1195],
    ticketmasterIds: ['KovZpa2Hxe', 'rZ7HnEZ17f9vP'],
    capacity: [{ seats: 5900, setup: 'concert', note: '5,870 seated' }],
    roof: 'open',
  },
  'la-tennis-center': {
    id: 'la-tennis-center',
    metroId: 'la',
    names: [{ name: 'Los Angeles Tennis Center' }],
    location: [-118.4484, 34.0701],
    ticketmasterIds: ['KovZpZAEkvdA'],
    capacity: [{ seats: 5800, setup: 'tennis', note: 'UCLA' }],
    roof: 'open',
  },
  'championship-soccer-stadium': {
    id: 'championship-soccer-stadium',
    metroId: 'la',
    names: [{ name: 'Championship Soccer Stadium' }],
    location: [-117.7393, 33.6746],
    ticketmasterIds: ['KovZ917A2HV'],
    capacity: [
      { seats: 5000, setup: 'soccer', note: 'Orange County SC says "over 5,000"' },
      { seats: 5500, setup: 'soccer', fromYear: 2026, note: 'After the February 2026 expansion (reported)' },
    ],
    roof: 'open',
  },
  'bren-events-center': {
    id: 'bren-events-center',
    metroId: 'la',
    names: [{ name: 'Bren Events Center' }],
    location: [-117.8469, 33.6495],
    ticketmasterIds: ['KovZpZAdEJtA'],
    capacity: [{ seats: 5430, setup: 'basketball', note: 'Reported, not confirmed with UC Irvine' }],
    roof: 'indoor',
  },
  'walter-pyramid': {
    id: 'walter-pyramid',
    metroId: 'la',
    // Now the LBS Financial Credit Union Pyramid; the rename date is not confirmed, so the new
    // name is shown from 2026 and older nights keep the old one.
    names: [{ name: 'Walter Pyramid' }, { name: 'LBS Financial Credit Union Pyramid', from: '2026-01-01' }],
    location: [-118.1144, 33.7873],
    ticketmasterIds: ['KovZpZA1IakA'],
    capacity: [
      { seats: 4200, setup: 'basketball', note: 'Reported; 4,000 fixed seats' },
      { seats: 5000, setup: 'concert', note: 'Concerts and events, 5,000 or more (reported). On the line.' },
    ],
    roof: 'indoor',
  },
  belasco: {
    id: 'belasco',
    metroId: 'la',
    names: [{ name: 'The Belasco' }],
    location: [-118.2594, 34.0404],
    ticketmasterIds: ['KovZpZAJvttA', 'KovZ917AVsO', 'Za5ju3rKuqZBGUligsG_7J_GlrY7VbhGQ', 'Za5ju3rKuqZBfH_w6eKaeUIFRBK9Q9Img'],
    capacity: [{ seats: 1500, setup: 'concert', note: 'Main theater, about 1,500. Under the map floor.' }],
    roof: 'indoor',
  },
  wiltern: {
    id: 'wiltern',
    metroId: 'la',
    names: [{ name: 'The Wiltern' }],
    location: [-118.3089, 34.0615],
    ticketmasterIds: ['KovZpZAEAl6A'],
    capacity: [{
      seats: 1850,
      setup: 'concert',
      note: 'About 1,850 for a concert. Some guides say about 2,300. Under the map floor.',
    }],
    roof: 'indoor',
  },
  'zipper-hall': {
    id: 'zipper-hall',
    metroId: 'la',
    names: [{ name: 'Zipper Concert Hall' }],
    location: [-118.2497, 34.0538],
    ticketmasterIds: ['KovZpZAAtddA'],
    capacity: [{
      seats: 415,
      setup: 'concert',
      note: 'Herbert Zipper Concert Hall at the Colburn School. Published room is about 415-435 seats. Under the map floor.',
    }],
    roof: 'indoor',
  },
  // Buildings from her log outside Los Angeles. One record each. New York
  // is Citi Field only.
  // Columbus (Oct 12, 2026). Rooms and figures: docs/research/city-builds/columbus/columbus-venue-table-answer.md.
  // Car shares, where set, are the city-type answer's estimates (no measured split). Coordinates: OpenStreetMap
  // unless a comment says the research supplied the point. Ohio Stadium already existed for a logged away game.
  'ohio-stadium': {
    id: 'ohio-stadium',
    metroId: 'columbus',
    // Estimate (city-type answer), low confidence, not measured. Football is the principal configuration.
    // The March 2025 Stadium Series estimate was 0.88 and is not this default.
    carShare: 0.72,
    names: [{ name: 'The Shoe' }, { name: 'Ohio Stadium' }],
    location: [-83.01974, 40.00165],
    ticketmasterIds: ['KovZpZAEAAeA'],
    capacity: [{
      seats: 102780,
      setup: 'football',
      note: 'Official figure as reported by NHL.com, matching OSU Athletics. 2026 south-end-zone suites and 400 chair-back seats; net capacity not yet published. Roof called open-air in research but marked unsourced there. Source: https://nhl.com/news/2025-nhl-stadium-series-to-embrace-ohio-state-michigan-rivalry',
    }],
    roof: 'open',
  },
  'nationwide-arena': {
    id: 'nationwide-arena',
    metroId: 'columbus',
    carShare: 0.86,
    names: [{ name: 'Nationwide Arena' }],
    location: [-83.00608, 39.96919],
    capacity: [
      { seats: 18500, setup: 'hockey', note: 'Official. Fan wiki lists 18,144 (older). End-stage concerts are a range (13,000–18,000), not a single figure. Source: https://www.nationwidearena.com/arena-info' },
      { seats: 19500, setup: 'basketball', note: 'Official. Source: https://www.nationwidearena.com/arena-info' },
      { seats: 20000, setup: 'concert', note: 'Official, up to 20,000. Source: https://www.nationwidearena.com/arena-info' },
    ],
    roof: 'indoor',
  },
  'value-city-arena': {
    id: 'value-city-arena',
    metroId: 'columbus',
    carShare: 0.85,
    names: [
      { name: 'Value City Arena' },
      { name: 'Jerome Schottenstein Center' },
      { name: 'Schottenstein Center' },
      { name: 'Value City Arena at the Jerome Schottenstein Center' },
    ],
    location: [-83.02496, 40.0076],
    capacity: [
      { seats: 18809, setup: 'basketball', note: 'Reported (Wikipedia) for OSU basketball. Official full bowl is up to 20,000; curtained setups are a 3,000–7,000 range, not one number. Architect program cited 19,500. Source: https://en.wikipedia.org/wiki/Value_City_Arena' },
      { seats: 17500, setup: 'hockey', note: 'Reported (Wikipedia). Total seats also reported at 19,049. Source: https://en.wikipedia.org/wiki/Value_City_Arena' },
      { seats: 20000, setup: 'concert', note: 'Official, full bowl up to 20,000. A Knowlton archive page reports up to 21,000. Source: https://planevents.osu.edu/venues-and-services/value-city-arena' },
    ],
    roof: 'indoor',
  },
  'scottsmiracle-gro-field': {
    id: 'scottsmiracle-gro-field',
    metroId: 'columbus',
    carShare: 0.86,
    names: [
      { name: 'Lower.com Field' },
      { name: 'Columbus Stadium', from: '2028-07-10' },
      { name: 'ScottsMiracle-Gro Field', from: '2026-01-01' },
    ],
    location: [-83.01666, 39.96836],
    capacity: [{
      seats: 20371,
      setup: 'soccer',
      note: 'Official league figure. StadiumDB reports 20,139. Concert configuration unknown. Columbus Stadium is the LA28 alias and stays searchable; the sponsor name remains the display name. Canopy extent unverified, so the roof stays open. Source: https://www.mlssoccer.com/news/columbus-crew-stadium-renamed-scottsmiracle-gro-field',
    }],
    roof: 'open',
  },
  'historic-crew-stadium': {
    id: 'historic-crew-stadium',
    metroId: 'columbus',
    carShare: 0.93,
    names: [
      { name: 'Columbus Crew Stadium' },
      { name: 'Mapfre Stadium', from: '2015-01-01' },
      { name: 'Historic Crew Stadium', from: '2020-12-01' },
    ],
    location: [-82.99114, 40.00947],
    capacity: [{
      seats: 19968,
      note: 'Reported gridiron/UFL figure. Also reported: 21,000 (Columbus Navigator) and 27,000 (Dispatch via AOL, configuration not stated — possibly a field or festival floor, unverified, not stored). Sonic Temple uses the bowl plus outside stages; do not add stage crowds. Roof called open-air but marked unsourced in the research. Source: https://en.wikipedia.org/wiki/2026_UFL_season',
    }],
    roof: 'open',
  },
  'st-john-arena': {
    id: 'st-john-arena',
    metroId: 'columbus',
    names: [{ name: 'St. John Arena' }],
    location: [-83.01913, 40.00541],
    capacity: [{
      seats: 13276,
      setup: 'basketball',
      note: 'Reported. No current ticketed sport; Skull Session and rentals. Not demolished. Source: https://en.wikipedia.org/wiki/St._John_Arena',
    }],
    roof: 'indoor',
  },
  'mid-ohio-sports-car-course': {
    id: 'mid-ohio-sports-car-course',
    metroId: 'columbus',
    names: [{ name: 'Mid-Ohio Sports Car Course' }],
    // Edge of the MSA (Morrow County). Research: a destination circuit, not the Columbus default. Not on the sports sweep.
    location: [-82.63636, 40.68901],
    capacity: [{
      seats: 12000,
      setup: 'racing',
      note: 'Reported grandstands. Observation mounds "over 75,000" are grounds, not seats, and are not stored. Source: https://www.scca.com/locations/1990905-mid-ohio-sports-car-course',
    }],
    roof: 'open',
  },
  'celeste-center': {
    id: 'celeste-center',
    metroId: 'columbus',
    names: [{ name: 'Celeste Center' }, { name: 'WCOL Celeste Center' }],
    location: [-82.99051, 39.99914],
    capacity: [{
      seats: 10200,
      setup: 'concert',
      note: 'Official. Listings sometimes say 10,000. Fair concerts sit inside fair admission — do not add them to the fair gate. Source: https://www.ohioexpocenter.com/p/planevent/buildings-and-floorplans/celeste-center',
    }],
    roof: 'indoor',
  },
  'huntington-park': {
    id: 'huntington-park',
    metroId: 'columbus',
    carShare: 0.85,
    names: [{ name: 'Huntington Park' }],
    location: [-83.01091, 39.96873],
    capacity: [{
      seats: 10100,
      setup: 'baseball',
      note: 'Official team release. Record crowd 12,517 (2010) is attendance above listed seats, not a second capacity. Roof called open-air but marked unsourced in the research. Source: https://www.oursportscentral.com/services/releases/capacity-crowd-cheers-clippers-over-cubs-saturday/n-6231886',
    }],
    roof: 'open',
  },
  'jesse-owens-memorial-stadium': {
    id: 'jesse-owens-memorial-stadium',
    metroId: 'columbus',
    names: [{ name: 'Jesse Owens Memorial Stadium' }],
    location: [-83.02762, 40.01232],
    capacity: [
      { seats: 10000, note: 'Official billed total on the same OSU page that lists the East Grandstand at 3,242 fixed seats. The other seats are unreconciled. Fixed seating alone would sit under 5,000. Source: https://ohiostatebuckeyes.com/sports/2023/5/22/jesse-owens-memorial-stadium' },
      { seats: 3242, setup: 'track', note: 'Official East Grandstand seats only, same page. Not a second crowd.' },
    ],
    roof: 'open',
  },
  'selby-stadium': {
    id: 'selby-stadium',
    metroId: 'columbus',
    names: [{ name: 'Selby Stadium' }],
    // NRHP / Wikipedia point (~10 m). Nominatim did not resolve the stadium name.
    location: [-83.06361, 40.29667],
    capacity: [{
      seats: 9100,
      setup: 'football',
      note: 'Official. Also used for track, lacrosse and field hockey; no separate published counts. Delaware County, inside the MSA. Source: https://www.owu.edu/athletics/athletics-fitness-facilities/selby-stadium/',
    }],
    roof: 'open',
  },
  'fortress-obetz': {
    id: 'fortress-obetz',
    metroId: 'columbus',
    names: [{ name: 'Fortress Obetz' }],
    location: [-82.94446, 39.88582],
    capacity: [{
      seats: 6500,
      note: 'Reported grandstand (1,100 flip-down + 2,000 bench-back + 3,400 bleacher). Tenant page says 6,500+. Typical events are community and high-school; crowds unknown. Source: https://en.wikipedia.org/wiki/Fortress_Obetz',
    }],
    roof: 'open',
  },
  'battelle-grand': {
    id: 'battelle-grand',
    metroId: 'columbus',
    names: [{ name: 'Battelle Hall' }, { name: 'Battelle Grand' }],
    // Parent convention-center point. The room itself was not a separate OSM hit.
    location: [-83.00115, 39.97188],
    capacity: [{
      seats: 5411,
      setup: 'concert',
      note: 'Official ballroom theater set. Main floor theater is 4,368 on the same chart. Historic bleacher arena 6,864 and concert 7,588 / 6,400 are other setups, not applied to every event. Exhibit halls and Union Station Ballroom are not rooms. Source: https://columbusconventions.com/wp-content/uploads/2023/08/GCCC-Map-and-Capacity-Chart.pdf',
    }],
    roof: 'indoor',
  },
  'kemba-live-outdoor': {
    id: 'kemba-live-outdoor',
    metroId: 'columbus',
    carShare: 0.85,
    names: [
      { name: 'PromoWest Pavilion' },
      { name: 'Lifestyle Communities Pavilion' },
      { name: 'Express Live!' },
      { name: 'KEMBA Live!' },
    ],
    location: [-83.01005, 39.96977],
    capacity: [{
      seats: 5200,
      setup: 'concert',
      note: 'Official standing capacity. Also reported 5,500, and a rental page says up to 5,000. Straddles the friction floor by source. Rename date to KEMBA Live! was not confirmed, so older names are searchable but not dated. Indoor hall is a separate room. Source: https://promowestlive.com/our-venues/kemba-live',
    }],
    roof: 'open',
  },
  'kemba-live-indoor': {
    id: 'kemba-live-indoor',
    metroId: 'columbus',
    names: [{ name: 'KEMBA Live! Indoor Music Hall' }],
    // Same building as the outdoor amphitheater. Bare "KEMBA Live!" is the outdoor room's name so a shared listing is not split by guess.
    location: [-83.01005, 39.96977],
    capacity: [{
      seats: 2200,
      setup: 'concert',
      note: 'Official. Also reported 2,300. Standing-dominant. Source: https://promowestlive.com/our-venues/kemba-live',
    }],
    roof: 'indoor',
  },
  'bill-davis-stadium': {
    id: 'bill-davis-stadium',
    metroId: 'columbus',
    names: [{ name: 'Nick Swisher Field' }, { name: 'Bill Davis Stadium' }],
    location: [-83.02602, 40.00968],
    // A Wanderlog guide says 4,450. The venue research labels that source weak and says not to rely on it. Capacity stays unknown.
    capacity: [],
    roof: 'open',
  },
  'osu-covelli-center': {
    id: 'osu-covelli-center',
    metroId: 'columbus',
    names: [{ name: 'Covelli Center' }],
    // OSM way "Covelli Center & Jennings Wrestling Facility". Not Youngstown's Covelli Centre.
    location: [-83.02774, 40.01385],
    capacity: [{
      seats: 3700,
      note: 'Reported approximate (~3,700). Volleyball, wrestling and gymnastics since 2019. Source: https://myfox28columbus.com/sports/content/sneak-peak-of-new-covelli-center-at-ohio-state',
    }],
    roof: 'indoor',
  },
  'ohio-theatre-columbus': {
    id: 'ohio-theatre-columbus',
    metroId: 'columbus',
    names: [{ name: 'Ohio Theatre' }],
    location: [-82.99894, 39.95989],
    capacity: [{
      seats: 2779,
      setup: 'concert',
      note: 'Reported (CanonBase). CAPA. Source: https://canonbase.eu/wiki/Item:Q26126',
    }],
    roof: 'indoor',
  },
  'palace-theatre-columbus': {
    id: 'palace-theatre-columbus',
    metroId: 'columbus',
    names: [{ name: 'Palace Theatre' }],
    location: [-83.00194, 39.96259],
    capacity: [{
      seats: 2695,
      setup: 'concert',
      note: 'Reported. A 2018 renovation note says seating went from 2,837 to 2,691. Source: https://en.wikipedia.org/wiki/Palace_Theatre_(Columbus,_Ohio)',
    }],
    roof: 'indoor',
  },
  'mershon-auditorium': {
    id: 'mershon-auditorium',
    metroId: 'columbus',
    names: [{ name: 'Mershon Auditorium' }],
    location: [-83.00896, 40.00052],
    capacity: [{
      seats: 2477,
      setup: 'concert',
      note: 'Official fixed seats (900 main + 1,577 balcony). Wexner Center also says over 2,590 with pit/floor. Source: https://planevents.osu.edu/venues-and-services/wexner-center-and-mershon-auditorium',
    }],
    roof: 'indoor',
  },
  'newport-music-hall': {
    id: 'newport-music-hall',
    metroId: 'columbus',
    names: [{ name: 'Newport Music Hall' }],
    location: [-83.00709, 39.99747],
    capacity: [{
      seats: 1700,
      setup: 'concert',
      note: 'Official (PromoWest). The city-type answer cited an AXS page at 1,400; the venue table\'s operator figure is the one stored. Source: https://promowestlive.com/our-venues',
    }],
    roof: 'indoor',
  },
  'branch-rickey-arena': {
    id: 'branch-rickey-arena',
    metroId: 'columbus',
    names: [{ name: 'Branch Rickey Arena' }],
    location: [-83.06643, 40.2949],
    capacity: [{
      seats: 1450,
      setup: 'basketball',
      note: 'Official. Ohio Wesleyan, Delaware. Source: https://owu.edu/athletics/athletics-fitness-facilities/',
    }],
    roof: 'indoor',
  },
  'midland-theatre-newark': {
    id: 'midland-theatre-newark',
    metroId: 'columbus',
    names: [{ name: 'Midland Theatre' }],
    // OSM at 36 N Park Place. A research database point sits about 120 m away; precision there was unknown.
    location: [-82.40167, 40.05915],
    capacity: [{
      seats: 1200,
      setup: 'concert',
      note: 'Reported. Newark, Licking County, inside the MSA. Not the Kansas City Midland. Source: https://explorelc.org/directory/the-midland-theatre',
    }],
    roof: 'indoor',
  },
  'ohio-state-ice-rink': {
    id: 'ohio-state-ice-rink',
    metroId: 'columbus',
    names: [{ name: 'Ohio State Ice Rink' }],
    location: [-83.01822, 40.00541],
    capacity: [{
      seats: 1000,
      setup: 'hockey',
      note: 'Reported approximate (~1,000); varies by event. Women\'s hockey. On the pre-list line. Source: https://www.thelantern.com/?p=216955',
    }],
    roof: 'indoor',
  },
  'osu-lacrosse-stadium': {
    id: 'osu-lacrosse-stadium',
    metroId: 'columbus',
    names: [{ name: 'Ohio State Lacrosse Stadium' }],
    location: [-83.02598, 40.01412],
    // A Wanderlog guide says 2,000. The venue research labels that source weak. Capacity stays unknown.
    capacity: [],
    roof: 'open',
  },
  // New York, covered Oct 7, 2026. Capacities: docs/research/city-builds/new-york/new-york-venue-table-answer.md (33 buildings; Etihad Park left
  // out until it opens Jul 17, 2027). Car shares: docs/research/city-builds/new-york/new-york-city-type-answer.md, the "value to use" per venue;
  // where that research had no row, an estimate from the nearest comparable, as the research itself did, and labeled.
  // Kylie, Oct 6: one car share per venue (MetLife 0.85 though concerts run ~0.75; UBS 0.90 across 0.89/0.93).
  // The open grounds in the research's Table B (US Open grounds, Javits, the Great Lawn, Bethpage, Randall's Island
  // fields, Liberty State Park) are not venues: no fixed capacity. Events there are placed as points and sized only
  // by their own crowd figure (docs/reference/unsized-events.md). Hard access is measured by scripts/venue-access.mjs, not set here.
  'metlife-stadium': {
    id: 'metlife-stadium',
    metroId: 'new-york',
    // Reported: ~87% by car for NFL (NJ Transit, 2010), ~75% for concerts, ~60% with lots closed. One value by Kylie's call.
    carShare: 0.85,
    names: [{ name: 'MetLife Stadium' }],
    location: [-74.0745, 40.8135],
    ticketmasterIds: ['KovZpakS7e', 'Za5ju3rKuqZDvHedXLG_oGLahekc5ec_GO'],
    capacity: [
      { seats: 82500, setup: 'football', note: 'Reported; NFL record crowd 83,367. The 2026 World Cup cut 1,740 corner seats for the tournament only.' },
    ],
    roof: 'open',
  },
  'yankee-stadium': {
    id: 'yankee-stadium',
    metroId: 'new-york',
    // Reported: MTA put ~45% on transit (2011); a NYC DOT intercept survey found 61% by car (2012). The research splits it at 50%.
    carShare: 0.5,
    names: [{ name: 'Yankee Stadium' }],
    location: [-73.9262, 40.8296],
    ticketmasterIds: ['KovZpZA6t77A', 'KovZ917Aai7', 'Za5ju3rKuqZDdHMIbmtFodB5uo6vs3BpOx', 'rZ7HnEZ17abC4', 'rZ7HnEZ17j0Gd'],
    capacity: [
      { seats: 46537, setup: 'baseball', note: 'Official (team media guide)' },
      { seats: 28743, setup: 'soccer', note: 'Reported; NYCFC standard setup, expandable to 47,309' },
      { seats: 54251, setup: 'football', note: 'Reported' },
    ],
    roof: 'open',
  },
  'belmont-park': {
    id: 'belmont-park',
    metroId: 'new-york',
    // Official, pre-rebuild: the LIRR carried 17–35% of Belmont Stakes crowds, 2008–2017 (Belmont FEIS).
    carShare: 0.75,
    names: [{ name: 'Belmont Park' }],
    location: [-73.7226, 40.7144],
    ticketmasterIds: ['KovZpZAdtlEA'],
    // Big-day grounds figure. Ordinary race days draw well under 5,000; only the Stakes and the Breeders' Cup matter.
    // The Belmont Stakes ran at Saratoga in 2024, 2025 and 2026 and returns here in 2027. The rebuilt track reopened Sep 2026;
    // the new grandstand (~10,000) finishes in early 2027. Shares its site and LIRR station with UBS Arena.
    capacity: [{ seats: 50000, setup: 'racing', note: 'Reported; grounds in the big-day configuration' }],
    roof: 'covered',
  },
  'citi-field': {
    id: 'citi-field',
    metroId: 'new-york',
    // Reported: MTA counted 25–30% by subway at an average game (2011); the research adds ~7% for the LIRR. Lots are shrinking for the casino build.
    carShare: 0.6,
    names: [{ name: 'Citi Field' }],
    location: [-73.8458, 40.7571],
    ticketmasterIds: ['KovZpZAalvtA', 'rZ7HnEZ17F44V'],
    capacity: [
      { seats: 41800, setup: 'baseball', note: 'Reported, 2009–2011' },
      { seats: 41922, setup: 'baseball', fromYear: 2012, note: 'Official; 45,000+ with standing room (record 45,186, 2013 All-Star Game)' },
    ],
    roof: 'open',
  },
  'aqueduct': {
    id: 'aqueduct',
    metroId: 'new-york',
    // Estimated, nearest comparable Citi Field: the A train stops at the gate, but the casino's lots are large.
    carShare: 0.6,
    names: [{ name: 'Aqueduct Racetrack' }],
    location: [-73.8303, 40.672],
    ticketmasterIds: ['KovZ917AQ3f'],
    // Live racing ended Jun 28, 2026 (moved to Belmont); the casino stays. fromYear is year-granular, but the research says the
    // historic figure was overstated for all of modern use anyway: the final race day drew 6,866.
    capacity: [{ seats: 17000, setup: 'racing', note: 'Reported, historic (40,000 total); badly overstated for modern racing days' },
      { seats: 7000, fromYear: 2026, note: 'Estimated; racing ended 2026-06-28 and the last card drew 6,866' },
    ],
    roof: 'open',
  },
  'sports-illustrated-stadium': {
    id: 'sports-illustrated-stadium',
    metroId: 'new-york',
    // Estimated, nearest comparable Prudential Center: Harrison PATH is three blocks away and the club warns parking is scarce.
    carShare: 0.5,
    names: [{ name: 'Red Bull Arena' }, { name: 'Sports Illustrated Stadium', from: '2024-12-11' }],
    location: [-74.1503, 40.7368],
    ticketmasterIds: ['Za5ju3rKuqZDeIxFViXaskgBXHSK4aoUhi', 'KovZpZAatEaA'],
    capacity: [{ seats: 25000, setup: 'soccer', note: 'Official' }],
    roof: 'covered',
  },
  'arthur-ashe-stadium': {
    id: 'arthur-ashe-stadium',
    metroId: 'new-york',
    // Reported: the USTA says more than 60% of US Open fans take mass transit.
    carShare: 0.37,
    names: [{ name: 'Arthur Ashe Stadium' }],
    location: [-73.8465, 40.7498],
    ticketmasterIds: ['KovZpZA6taJA'],
    // The US Open's daily grounds crowd (record 73,201) is three times this room. A US Open day is sized by that figure on the event, not by Ashe.
    capacity: [{ seats: 23771, setup: 'tennis', note: 'Official; finals draw ~28,000 with standing room' }],
    // Retractable, like T-Mobile Park: closes for rain.
    roof: 'covered',
  },
  'madison-square-garden': {
    id: 'madison-square-garden',
    metroId: 'new-york',
    // Estimated (range 15–30%): sits on Penn Station, no parking on site, inside the congestion zone. No count since 2003.
    carShare: 0.2,
    names: [{ name: 'Madison Square Garden' }],
    location: [-73.9934, 40.7505],
    ticketmasterIds: ['KovZpZA7AAEA', 'Za5ju3rKuqZDv8mMivxUACKtKhT7rDXfsr'],
    capacity: [
      { seats: 19812, setup: 'basketball', note: 'Reported' },
      { seats: 18006, setup: 'hockey', note: 'Reported' },
      { seats: 19500, setup: 'concert', note: 'Reported, end-stage; 20,789 is the centre-ring maximum, up to 22,000 in the round' },
    ],
    roof: 'indoor',
  },
  'ubs-arena': {
    id: 'ubs-arena',
    metroId: 'new-york',
    // Official, LIRR observed: rail carried 8.8% of the gate at Islanders games and 5.3% at other events (2022). One value by Kylie's call.
    carShare: 0.9,
    names: [{ name: 'UBS Arena' }],
    location: [-73.7259, 40.711],
    ticketmasterIds: ['KovZ917APye'],
    capacity: [
      { seats: 17255, setup: 'hockey', note: 'Reported; 17,250 also cited' },
      { seats: 19000, setup: 'concert', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'barclays-center': {
    id: 'barclays-center',
    metroId: 'new-york',
    // Reported, observed: Sam Schwartz TDM survey of 5,633 fans across 8 Nets games, 2013. Built with almost no parking by design.
    carShare: 0.25,
    names: [{ name: 'Barclays Center' }],
    location: [-73.9752, 40.6827],
    ticketmasterIds: ['KovZ917AtP3', 'Za5ju3rKuqZBaV2aBp8v6MbnVFSuKiiAu'],
    capacity: [
      { seats: 17732, setup: 'basketball', note: 'Official' },
      { seats: 15795, setup: 'hockey', note: 'Official; Islanders 2015–2020' },
      { seats: 19000, setup: 'concert', note: 'Official (AEG); 20,000 reported' },
    ],
    roof: 'indoor',
  },
  'prudential-center': {
    id: 'prudential-center',
    metroId: 'new-york',
    // Reported, old: 53% of Devils fans on mass transit over two months of 2007–08. Nothing newer found.
    carShare: 0.45,
    names: [{ name: 'Prudential Center' }],
    location: [-74.1711, 40.7336],
    ticketmasterIds: ['KovZpZAE7vaA', 'Z7r9jZadBb'],
    capacity: [
      { seats: 17625, setup: 'hockey', note: 'Official, before 2013' },
      { seats: 16592, setup: 'hockey', fromYear: 2013, note: 'Official' },
      { seats: 16514, setup: 'hockey', fromYear: 2015, note: 'Official' },
      { seats: 18711, setup: 'basketball', note: 'Official (Seton Hall)' },
      { seats: 19500, setup: 'concert', note: 'Venue: "up to 19,500 fans for concerts" (via Pollstar, Jul 2026); record 19,151 for Zach Bryan, Mar 15, 2024. Was 17,500 here until Oct 7, 2026 (docs/research/topics/concert-venue-figures-answer.md).' },
    ],
    roof: 'indoor',
  },
  'pnc-bank-arts-center': {
    id: 'pnc-bank-arts-center',
    metroId: 'new-york',
    // Estimated: no rail at the venue; one Parkway exit. Sets the top of the range with Jones Beach.
    carShare: 0.97,
    names: [{ name: 'PNC Bank Arts Center' }],
    location: [-74.1756, 40.3934],
    capacity: [{ seats: 17500, setup: 'concert', note: 'Reported; 7,000 seats plus ~10,500 lawn' }],
    roof: 'covered',
  },
  'wien-stadium': {
    id: 'wien-stadium',
    metroId: 'new-york',
    // Estimated: college football draws an older suburban crowd; the 1 train is at 215 St.
    carShare: 0.45,
    // ESPN says "Lawrence A. Wien Stadium"; the field is Robert K. Kraft Field.
    names: [{ name: 'Lawrence A. Wien Stadium' }, { name: 'Robert K. Kraft Field at Lawrence A. Wien Stadium' }],
    location: [-73.9165, 40.8732],
    ticketmasterIds: ['KovZ917A5P0'],
    capacity: [{ seats: 17000, setup: 'football', note: 'Official (Columbia)' }],
    roof: 'open',
  },
  'meadowlands-racetrack': {
    id: 'meadowlands-racetrack',
    metroId: 'new-york',
    // Estimated: free surface lots; the rail station runs only on stadium days.
    carShare: 0.95,
    names: [{ name: 'Meadowlands Racetrack' }],
    location: [-74.0716, 40.8158],
    ticketmasterIds: ['KovZpZA7AlEA'],
    // Under the floor as a building. Hambletonian Day (one a year; 16,465 in 2024, official) carries its own crowd figure on the event.
    capacity: [{ seats: 2200, setup: 'racing', note: 'Reported; grandstand seats only' }],
    roof: 'covered',
  },
  'nassau-coliseum': {
    id: 'nassau-coliseum',
    metroId: 'new-york',
    // Estimated, nearest comparable UBS Arena's non-Islanders events: no rail within three miles.
    carShare: 0.95,
    // Still open and lightly used (LI Nets, NY Riptide, a few concerts); Sands dropped its casino bid Apr 2025 and the future is undecided.
    names: [{ name: 'NYCB Live: Nassau Veterans Memorial Coliseum' }, { name: 'Nassau Veterans Memorial Coliseum', from: '2020-01-01' }],
    location: [-73.5904, 40.7229],
    ticketmasterIds: ['Za5ju3rKuqZDdTyA5suaceLBwBivFRAWL5', 'KovZpZA7deEA', 'Za5ju3rKuqZBbiYeAyw41M5PEUNEA1d9Z'],
    capacity: [{ seats: 16170, setup: 'hockey', note: 'Reported, before the 2017 renovation' },
      { seats: 14000, fromYear: 2017, note: 'Estimated; 14,000 (amNY) vs 16,000 (NY Post), neither with a setup' },
    ],
    roof: 'indoor',
  },
  'jones-beach-theater': {
    id: 'jones-beach-theater',
    metroId: 'new-york',
    // Estimated: no rail, and the concert bus no longer runs. Barrier island with three parkways in.
    carShare: 0.97,
    names: [
      { name: 'Nikon at Jones Beach Theater' },
      { name: 'Northwell Health at Jones Beach Theater', from: '2017-01-01' },
      { name: 'Northwell at Jones Beach Theater', from: '2025-01-01' },
    ],
    location: [-73.5023, 40.601],
    ticketmasterIds: ['KovZpZAE6eAA', 'KovZpZAE6ekA'],
    capacity: [{ seats: 14000, setup: 'concert', note: "Official (Live Nation, 2017); 15,000 reported. The separate Bay Stage holds 5,000 standing." }],
    roof: 'open',
  },
  'forest-hills-stadium': {
    id: 'forest-hills-stadium',
    metroId: 'new-york',
    // Estimated: no parking at the venue or on nearby streets; the venue tells fans not to drive.
    carShare: 0.15,
    names: [{ name: 'Forest Hills Stadium' }],
    location: [-73.8502, 40.7197],
    ticketmasterIds: ['KovZpZA777nA'],
    capacity: [{ seats: 14000, setup: 'concert', note: 'Reported; some guides say up to 16,000' }],
    roof: 'open',
  },
  'louis-armstrong-stadium': {
    id: 'louis-armstrong-stadium',
    metroId: 'new-york',
    carShare: 0.37,
    names: [{ name: 'Louis Armstrong Stadium' }],
    location: [-73.8454, 40.751],
    ticketmasterIds: ['KovZpZAFFtkA'],
    capacity: [{ seats: 14000, setup: 'tennis', fromYear: 2018, note: 'Reported; rebuilt 2018. 14,069 could not be confirmed.' }],
    // Retractable.
    roof: 'covered',
  },
  'lavalle-stadium': {
    id: 'lavalle-stadium',
    metroId: 'new-york',
    // Estimated, nearest comparable UBS Arena's non-Islanders events: Suffolk County, campus lots, no rail at the gate.
    carShare: 0.9,
    names: [{ name: 'Kenneth P. LaValle Stadium' }],
    location: [-73.1237, 40.9188],
    ticketmasterIds: ['KovZ917AJ7J'],
    capacity: [
      { seats: 10300, setup: 'football', note: 'Official, 2002–2016' },
      { seats: 12300, setup: 'football', fromYear: 2017, note: 'Official; 10,300 seats plus 2,000 standing' },
    ],
    roof: 'open',
  },
  'shuart-stadium': {
    id: 'shuart-stadium',
    metroId: 'new-york',
    // Estimated: same corridor as Nassau Coliseum; campus residents walk.
    carShare: 0.8,
    names: [{ name: 'James M. Shuart Stadium' }],
    location: [-73.5964, 40.7158],
    ticketmasterIds: ['KovZpZAAn6kA'],
    capacity: [{ seats: 11929, setup: 'football', note: 'Reported, since 2013 (Hofstra lacrosse)' }],
    roof: 'open',
  },
  'maimonides-park': {
    id: 'maimonides-park',
    metroId: 'new-york',
    // Estimated: a four-line subway terminal, but surface lots next to the ballpark.
    carShare: 0.4,
    names: [{ name: 'MCU Park' }, { name: 'Maimonides Park', from: '2021-01-01' }],
    location: [-73.9845, 40.5745],
    ticketmasterIds: ['Za5ju3rKuqZDvSUgiYRKoGeB-A8gO0FbMj', 'KovZpZAat1FA', 'rZ7HnEZ17pd4z'],
    capacity: [{ seats: 7000, setup: 'baseball', note: 'Official; up to 2,500 standing. 7,500 seats before 2016.' }],
    roof: 'open',
  },
  'usta-grandstand': {
    id: 'usta-grandstand',
    metroId: 'new-york',
    carShare: 0.37,
    names: [{ name: 'USTA Grandstand' }],
    location: [-73.845, 40.748],
    capacity: [{ seats: 8000, setup: 'tennis', fromYear: 2016, note: 'Estimated; the research could not source a figure' }],
    roof: 'open',
  },
  'siuh-community-park': {
    id: 'siuh-community-park',
    metroId: 'new-york',
    // Estimated: ferry terminal and the Staten Island Railway at the door, a ballpark lot beside it.
    carShare: 0.6,
    names: [{ name: 'Richmond County Bank Ballpark' }, { name: 'SIUH Community Park', from: '2022-04-01' }],
    location: [-74.0768, 40.6453],
    ticketmasterIds: ['KovZpapJHe'],
    // The FerryHawks averaged 1,232 in 2025; it clears 5,000 only on fireworks nights.
    capacity: [{ seats: 7171, setup: 'baseball', note: 'Reported' }],
    roof: 'open',
  },
  'fairfield-properties-ballpark': {
    id: 'fairfield-properties-ballpark',
    metroId: 'new-york',
    // Estimated, nearest comparable UBS Arena's non-Islanders events: central Suffolk, 2.5 miles from the LIRR.
    carShare: 0.9,
    names: [{ name: 'Bethpage Ballpark' }, { name: 'Fairfield Properties Ballpark', from: '2021-01-01' }],
    location: [-73.1958, 40.7957],
    ticketmasterIds: ['ZFr9jZ77aA'],
    capacity: [{ seats: 6002, setup: 'baseball', note: 'Official (Long Island Ducks)' }],
    roof: 'open',
  },
  'pacha-new-york': {
    id: 'pacha-new-york',
    metroId: 'new-york',
    // Estimated, nearest comparable Barclays Center: no lot, the L train nearby, a free shuttle from the venue.
    carShare: 0.25,
    // Closed all of 2025 after failing inspection; the owner went bankrupt. Reopened as Pacha in June 2026, seasonal June–October.
    names: [{ name: 'The Brooklyn Mirage' }, { name: 'Pacha New York', from: '2026-06-01' }],
    location: [-73.9268, 40.7105],
    ticketmasterIds: ['KovZ917AINX'],
    capacity: [{ seats: 6000, setup: 'concert', note: "Estimated; the Mirage's widely cited figure. Pacha has published none." }],
    roof: 'open',
  },
  'radio-city-music-hall': {
    id: 'radio-city-music-hall',
    metroId: 'new-york',
    // Estimated: Midtown walk-ins, no parking on site, inside the congestion zone.
    carShare: 0.15,
    names: [{ name: 'Radio City Music Hall' }],
    location: [-73.98, 40.76],
    ticketmasterIds: ['KovZpZAE7vdA'],
    capacity: [{ seats: 5960, setup: 'concert', note: 'Reported; some listings say 6,015' }],
    roof: 'indoor',
  },
  'carnesecca-arena': {
    id: 'carnesecca-arena',
    metroId: 'new-york',
    // Estimated: campus arena with its own lots and no subway within walking distance. St. John's big games are at the Garden.
    carShare: 0.5,
    names: [{ name: 'Carnesecca Arena' }],
    location: [-73.7948, 40.7225],
    ticketmasterIds: ['KovZpZAEAdFA'],
    capacity: [{ seats: 5602, setup: 'basketball', note: "Official (St. John's); 5,260 reported" }],
    roof: 'indoor',
  },
  'infosys-theater-msg': {
    id: 'infosys-theater-msg',
    metroId: 'new-york',
    carShare: 0.2,
    // Inside Madison Square Garden: a show here and a game upstairs stack on one night (the theater rule). The 2018 and 2023
    // rename months were not researched; the years are right.
    names: [
      { name: 'The Theater at Madison Square Garden' },
      { name: 'Hulu Theater at Madison Square Garden', from: '2018-01-01' },
      { name: 'The Theater at Madison Square Garden', from: '2023-01-01' },
      { name: 'Infosys Theater at Madison Square Garden', from: '2026-02-02' },
    ],
    location: [-73.9934, 40.7505],
    ticketmasterIds: ['KovZpZA7kvlA'],
    capacity: [{ seats: 5600, setup: 'concert', note: 'Official; 2,000–5,600 depending on the setup' }],
    roof: 'indoor',
  },
  'summerstage': {
    id: 'summerstage',
    metroId: 'new-york',
    // Estimated, nearest comparable Radio City: inside Central Park, no parking.
    carShare: 0.15,
    names: [{ name: 'SummerStage' }, { name: 'Rumsey Playfield' }],
    location: [-73.9708, 40.7726],
    ticketmasterIds: ['KovZpZA77eJA', 'KovZpZAdIFdA', 'ZFr9jZkdaa'],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Official (City Parks Foundation); 5,500 reported after the 2019 renovation' }],
    roof: 'open',
  },
  'icahn-stadium': {
    id: 'icahn-stadium',
    metroId: 'new-york',
    // Estimated: an island reached by the RFK Bridge, a footbridge and ferries; festivals ban personal parking.
    carShare: 0.1,
    names: [{ name: 'Icahn Stadium' }],
    location: [-73.9241, 40.7955],
    ticketmasterIds: ['KovZ917AR21'],
    // The festival fields around it (Governors Ball's old home, Electric Zoo) have no fixed capacity; those are events placed as points.
    capacity: [{ seats: 5000, setup: 'track', note: 'Official (USATF); designed to take 5,000 more on bleachers' }],
    roof: 'covered',
  },
  'ford-amphitheater': {
    id: 'ford-amphitheater',
    metroId: 'new-york',
    carShare: 0.4,
    names: [{ name: 'Ford Amphitheater at Coney Island' }],
    location: [-73.9834, 40.5729],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported; exactly on the floor' }],
    roof: 'covered',
  },
  'westchester-county-center': {
    id: 'westchester-county-center',
    metroId: 'new-york',
    // Estimated: five minutes from White Plains Metro-North, 700+ county spaces next door.
    carShare: 0.85,
    names: [{ name: 'Westchester County Center' }],
    location: [-73.7788, 41.0371],
    ticketmasterIds: ['KovZpZAFdlAA'],
    // On the floor: 5,000 is the usual figure; Bandsintown lists 4,264.
    capacity: [{ seats: 5000, setup: 'basketball', note: 'Reported; 4,264 also listed' }],
    roof: 'indoor',
  },
  'coffey-field': {
    id: 'coffey-field',
    metroId: 'new-york',
    // Estimated, nearest comparable Columbia: a Bronx campus with the 4, B and D at Fordham Road.
    carShare: 0.45,
    names: [{ name: 'Jack Coffey Field' }, { name: 'Moglia Stadium at Jack Coffey Field' }],
    location: [-73.8836, 40.8615],
    ticketmasterIds: ['KovZpZAtvE7A'],
    capacity: [{ seats: 7000, setup: 'football', note: 'Official (Fordham)' }],
    roof: 'open',
  },
  'petco-park': {
    id: 'petco-park',
    metroId: 'san-diego',
    names: [{ name: 'Petco Park' }],
    // Estimated: MTS counts about 8,000 trolley riders on a sellout against 39,860 seats (docs/research/topics/venue-egress-answer.md).
    carShare: 0.8,
    location: [-117.1569, 32.7072],
    ticketmasterIds: ['KovZpa4cFe', 'rZ7HnEZ17favg'],
    capacity: [{ seats: 39860, setup: 'baseball', note: 'Fixed seats (MLB). 42,445 is also reported and likely counts standing room.' }],
    roof: 'open',
  },
  // ---- San Diego, from docs/research/city-builds/san-diego/san-diego-venue-table-answer.md (Oct 6, 2026) ----
  'san-diego-stadium': {
    id: 'san-diego-stadium',
    metroId: 'san-diego',
    // Closed March 2020, demolished by March 22, 2021. Kept so nights there (2016–2019) can be logged.
    names: [
      { name: 'Qualcomm Stadium' },
      { name: 'SDCCU Stadium', from: '2017-09-19' },
      { name: 'San Diego Stadium', from: '2021-01-01' },
    ],
    // Approximate: the site is now Snapdragon Stadium's park; OpenStreetMap has no point for the old building.
    location: [-117.1196, 32.7831],
    ticketmasterIds: ['Za5ju3rKuqZDvz7cnKM04uLQHozY4yeGnN', 'KovZpZA6eaIA', 'KovZ917AIoi'],
    capacity: [
      { seats: 70561, setup: 'football', note: 'Chargers setup (reported)' },
      { seats: 54000, setup: 'football', fromYear: 2017, note: 'Aztecs setup after the Chargers left (reported)' },
    ],
    roof: 'open',
  },
  'snapdragon-stadium': {
    id: 'snapdragon-stadium',
    metroId: 'san-diego',
    names: [{ name: 'Snapdragon Stadium' }],
    location: [-117.1224, 32.7842],
    ticketmasterIds: ['KovZ917AIoi', 'KovZ917AtnY'],
    capacity: [
      { seats: 35000, setup: 'football', note: 'SDSU (official); temporary end-zone seats take it to about 40,000' },
      { seats: 32000, setup: 'soccer', note: "The Wave's 2022 setup (reported)" },
      { seats: 35000, setup: 'soccer', fromYear: 2023, note: 'Reported; the soccer record is 34,506' },
    ],
    roof: 'open',
  },
  'del-mar-fairgrounds': {
    id: 'del-mar-fairgrounds',
    metroId: 'san-diego',
    names: [{ name: 'Del Mar Fairgrounds' }],
    // Approximate: OpenStreetMap had no point for the grounds.
    location: [-117.262, 32.9765],
    ticketmasterIds: ['KovZpZAEA6AA'],
    capacity: [
      { seats: 14000, note: 'Grandstand (reported; the setup is not stated)' },
      { seats: 40000, setup: 'concert', note: 'Festival grounds, per day, as KAABOO drew 2015–2019 (reported); a full-site buyout is 35,000' },
    ],
    roof: 'open',
  },
  'embarcadero-marina-park-north': {
    id: 'embarcadero-marina-park-north',
    metroId: 'san-diego',
    names: [{ name: 'Embarcadero Marina Park North' }],
    // Approximate: the Wonderfront festival grounds, the park plus the piers.
    location: [-117.1715, 32.7083],
    ticketmasterIds: ['KovZpaGS3e'],
    capacity: [{ seats: 30000, setup: 'concert', note: 'Festival, standing: the maximum occupancy across the sites (reported, 2019); organizers aim for 12,500–15,000 a day' }],
    roof: 'open',
  },
  'north-island-amphitheatre': {
    id: 'north-island-amphitheatre',
    metroId: 'san-diego',
    names: [
      { name: 'Sleep Train Amphitheatre' },
      { name: 'Mattress Firm Amphitheatre', from: '2017-02-01' },
      { name: 'North Island Credit Union Amphitheatre', from: '2018-11-01' },
    ],
    location: [-117.0058, 32.5881],
    ticketmasterIds: ['KovZpa2WZe'],
    capacity: [{ seats: 20500, setup: 'concert', note: 'Reported (19,442 also reported): about 9,468 reserved seats and 10,024 on the lawn' }],
    roof: 'covered',
  },
  'pechanga-arena': {
    id: 'pechanga-arena',
    metroId: 'san-diego',
    // Valley View Casino Center through 2018; the Pechanga name took over late in 2018 (month not confirmed). The deal runs through 2026.
    names: [{ name: 'Valley View Casino Center' }, { name: 'Pechanga Arena', from: '2018-12-01' }],
    location: [-117.2123, 32.7553],
    ticketmasterIds: ['KovZpZAEd1EA'],
    capacity: [
      { seats: 16100, note: 'Boxing and MMA (reported)' },
      { seats: 14500, setup: 'basketball', note: 'Reported' },
      { seats: 12920, setup: 'hockey', note: 'Hockey and lacrosse (reported)' },
      { seats: 12000, setup: 'concert', note: 'Estimated for a typical end-stage show; sources give 8,900–14,800' },
    ],
    roof: 'indoor',
  },
  'waterfront-park': {
    id: 'waterfront-park',
    metroId: 'san-diego',
    names: [{ name: 'Waterfront Park' }],
    location: [-117.1721, 32.7222],
    ticketmasterIds: ['KovZ917Afcf'],
    capacity: [{ seats: 15000, setup: 'concert', note: 'Festival, standing, per day (CRSSD; reported)' }],
    roof: 'open',
  },
  'viejas-arena': {
    id: 'viejas-arena',
    metroId: 'san-diego',
    names: [{ name: 'Cox Arena' }, { name: 'Viejas Arena', from: '2009-07-01' }],
    location: [-117.0745, 32.7738],
    ticketmasterIds: ['KovZpZA6AEdA'],
    capacity: [
      { seats: 12414, setup: 'basketball', note: 'SDSU (official)' },
      { seats: 12200, setup: 'concert', note: 'End-stage (reported); in the round 12,845' },
    ],
    roof: 'indoor',
  },
  'rady-shell': {
    id: 'rady-shell',
    metroId: 'san-diego',
    names: [{ name: 'The Rady Shell at Jacobs Park' }],
    location: [-117.1659, 32.7048],
    ticketmasterIds: ['KovZ917AJ-O'],
    capacity: [{ seats: 10000, setup: 'concert', fromYear: 2021, note: 'The maximum, allowed six nights a year (official). Most nights seat 3,500–4,700, under the floor.' }],
    roof: 'open',
  },
  'frontwave-arena': {
    id: 'frontwave-arena',
    metroId: 'san-diego',
    names: [{ name: 'Frontwave Arena' }],
    location: [-117.3147, 33.2075],
    ticketmasterIds: ['KovZ917AVkQ'],
    capacity: [
      { seats: 7500, setup: 'concert', fromYear: 2024, note: 'Reported' },
      { seats: 6000, setup: 'basketball', fromYear: 2024, note: 'Reported' },
      { seats: 5500, setup: 'soccer', fromYear: 2024, note: 'Indoor soccer (reported)' },
    ],
    roof: 'indoor',
  },
  'torero-stadium': {
    id: 'torero-stadium',
    metroId: 'san-diego',
    names: [{ name: 'Torero Stadium' }],
    location: [-117.1837, 32.7731],
    ticketmasterIds: ['KovZpapZee'],
    capacity: [{ seats: 6000, setup: 'soccer', note: 'Football and soccer (USD, official)' }],
    roof: 'open',
  },
  'jenny-craig-pavilion': {
    id: 'jenny-craig-pavilion',
    metroId: 'san-diego',
    names: [{ name: 'Jenny Craig Pavilion' }],
    location: [-117.1837, 32.7745],
    ticketmasterIds: ['KovZpabZ1e'],
    capacity: [{ seats: 5100, setup: 'basketball', note: 'Basketball and volleyball (USD, official)' }],
    roof: 'indoor',
  },
  'san-diego-convention-center': {
    id: 'san-diego-convention-center',
    metroId: 'san-diego',
    names: [{ name: 'San Diego Convention Center' }],
    location: [-117.1619, 32.7064],
    ticketmasterIds: ['KovZpZA1ntdA'],
    capacity: [{ seats: 6500, note: 'Hall H, seated (reported). Comic-Con sells about 135,000 badges over four days; no daily count is published.' }],
    roof: 'indoor',
  },
  // ---- Seattle, from docs/research/city-builds/seattle/seattle-venue-table-answer.md (Oct 6, 2026): King, Pierce and Snohomish counties, plus the Gorge ----
  'husky-stadium': {
    id: 'husky-stadium',
    metroId: 'seattle',
    // Official, observed: UW's 2022 game-day survey, 37% by car (29% carpool, 3% alone, 5% rideshare), 45% transit (docs/research/city-builds/seattle/seattle-city-type-answer.md).
    carShare: 0.37,
    // The field is "Alaska Airlines Field at Husky Stadium"; ESPN and the schedule say Husky Stadium.
    names: [{ name: 'Husky Stadium' }],
    location: [-122.3016, 47.6503],
    ticketmasterIds: ['KovZpZAaIJtA'],
    capacity: [{ seats: 72132, setup: 'football', note: 'Washington Huskies (official, 2026); 70,083 before (reported)' }],
    // Cantilever roofs over most sideline seats; the field and ends are open (the research's reading).
    roof: 'covered',
  },
  'lumen-field': {
    id: 'lumen-field',
    metroId: 'seattle',
    // Reported planning baseline: 60% by car (49% personal vehicle, 11% rideshare), Kimley-Horn's June 2026 World Cup mobility deck; a 2002 survey had 70–75%.
    carShare: 0.6,
    names: [{ name: 'CenturyLink Field' }, { name: 'Lumen Field', from: '2020-11-19' }],
    location: [-122.3316, 47.5953],
    ticketmasterIds: ['Za5ju3rKuqZDdE59ESVOgdTID_ipjiREie', 'KovZpZAEknnA', 'KovZpa34Ve'],
    capacity: [
      { seats: 68740, setup: 'football', note: 'Seahawks (official); expandable to 72,000 for the biggest events' },
      { seats: 37722, setup: 'soccer', note: 'Sounders setup (MLS). The Reign open about 10,000 lower-bowl seats (reported).' },
      { seats: 51556, setup: 'concert', note: 'Reported: the sold-out count for The Weeknd, Aug 25, 2022 (Pollstar), the one end-stage figure found (docs/research/topics/concert-venue-figures-answer.md).' },
    ],
    // Roof over about 70% of seats; the field is open (the research's reading). Called "Seattle Stadium" for the 2026 World Cup.
    roof: 'covered',
  },
  't-mobile-park': {
    id: 't-mobile-park',
    metroId: 'seattle',
    // Estimated (65–75%): the only count is 82% from a 2012 study, before every Link extension since; set between that and Lumen Field's 60%.
    carShare: 0.7,
    names: [{ name: 'Safeco Field' }, { name: 'T-Mobile Park', from: '2019-01-01' }],
    location: [-122.3323, 47.5915],
    ticketmasterIds: ['KovZpZAEevAA'],
    capacity: [
      { seats: 47943, setup: 'baseball', note: 'Mariners (official, MLB.com 2026; 47,929 was the 2019 figure, 47,715 in 2018)' },
      { seats: 30144, setup: 'football', note: 'One-off football setup (reported)' },
    ],
    // Retractable: an umbrella that closes for rain, with open sides. Closest of the three roof kinds.
    roof: 'covered',
  },
  'pacific-raceways': {
    id: 'pacific-raceways',
    metroId: 'seattle',
    // Estimated: no transit, on-site parking.
    carShare: 0.98,
    names: [{ name: 'Pacific Raceways' }],
    location: [-122.1491, 47.3224],
    ticketmasterIds: ['KovZpZAFFJkA'],
    capacity: [{ seats: 30000, setup: 'racing', note: 'Race days (reported). Standing and grandstand together.' }],
    roof: 'open',
    // Fallback until the measure runs: one road in, wooded hillside site (the research).
    strained: true,
  },
  // Satellite in George, three hours out, the way Empire Polo Club rides with Los Angeles.
  'gorge-amphitheatre': {
    id: 'gorge-amphitheatre',
    metroId: 'seattle',
    // Estimated: car or charter only; private shuttles from Quincy, Ephrata and George.
    carShare: 0.98,
    names: [{ name: 'Gorge Amphitheatre' }, { name: 'The Gorge' }],
    // Approximate (the research's figure); OpenStreetMap has no point for the amphitheatre itself.
    location: [-119.996, 47.1028],
    ticketmasterIds: ['KovZpZAEkk1A', 'Za5ju3rKuqZBN4RFvXEvFFyQ0lpuAKpKN'],
    capacity: [
      { seats: 27500, setup: 'concert', note: "Seats and lawn (reported); 20,000 is also quoted. Festival days are capped at 25,000 by Grant County (official)." },
    ],
    roof: 'open',
    strained: true,
  },
  'seattle-center': {
    id: 'seattle-center',
    metroId: 'seattle',
    // Estimated: no figure; Climate Pledge Arena concerts (~70%), festival crowds a little more transit-minded.
    carShare: 0.65,
    names: [{ name: 'Seattle Center' }],
    location: [-122.3497, 47.6213],
    ticketmasterIds: ['KovZpZAFkktA', 'ZFr9jZekdA', 'KovZpZA1tJtA', 'Za5ju3rKuqZDemxf5QQYuaElLG2MSLrZqK', 'Za5ju3rKuqZDvhbIkxEqsZp5VnbeJUdK3o', 'KovZpZA1t1tA', 'KovZpZAFFJeA', 'KovZ917ANex', 'KovZpZA1tnIA'],
    capacity: [{ seats: 26000, setup: 'concert', note: 'A Bumbershoot-size festival on the grounds, standing (estimated)' }],
    roof: 'open',
  },
  'tacoma-dome': {
    id: 'tacoma-dome',
    metroId: 'seattle',
    // Estimated: Tacoma Dome Station is three blocks away, but Sounder runs mainly at weekday peak.
    carShare: 0.85,
    names: [{ name: 'Tacoma Dome' }],
    location: [-122.427, 47.2369],
    ticketmasterIds: ['KovZpa3zGe', 'KovZpZAFkvIA'],
    capacity: [
      { seats: 21000, note: 'Maximum (official)' },
      { seats: 20722, setup: 'basketball', note: 'Official' },
      { seats: 17000, setup: 'concert', note: 'A typical end-stage show (estimated)' },
    ],
    roof: 'indoor',
  },
  'climate-pledge-arena': {
    id: 'climate-pledge-arena',
    metroId: 'seattle',
    // Estimated from an official, observed transit share: 27% rode transit in Oct 2024–Sep 2025 (the arena's dashboard; concerts 20%), about 10% walked; car is the remainder. Concerts run nearer 70%.
    carShare: 0.63,
    // KeyArena closed Oct 5, 2018 for the rebuild and reopened as Climate Pledge Arena in October 2021.
    names: [{ name: 'KeyArena' }, { name: 'Climate Pledge Arena', from: '2018-10-05' }],
    location: [-122.354, 47.6219],
    ticketmasterIds: ['KovZpZAJdt1A', 'Za5ju3rKuqZDemxf5QQYuaElLG2MSLrZqK', 'Za5ju3rKuqZDvhbIkxEqsZp5VnbeJUdK3o', 'KovZ917Ahkk'],
    capacity: [
      { seats: 17072, setup: 'basketball', note: 'KeyArena (official)' },
      { seats: 15177, setup: 'hockey', note: 'KeyArena (reported)' },
      { seats: 16641, setup: 'concert', note: 'KeyArena, end stage (reported); 17,459 in the round' },
      { seats: 18300, setup: 'basketball', fromYear: 2021, note: 'Official' },
      { seats: 17100, setup: 'hockey', fromYear: 2021, note: 'Kraken (official)' },
      { seats: 17200, setup: 'concert', fromYear: 2021, note: 'End stage (official); 18,600 in the round' },
    ],
    roof: 'indoor',
  },
  'white-river-amphitheatre': {
    id: 'white-river-amphitheatre',
    metroId: 'seattle',
    // Estimated: no transit; the shuttle is park-and-ride. A sellout is about 20,000 people and parking for about 6,800 cars.
    carShare: 0.97,
    names: [{ name: 'White River Amphitheatre' }],
    location: [-122.1121, 47.2375],
    ticketmasterIds: ['KovZpZAEkd1A'],
    capacity: [{ seats: 16000, setup: 'concert', note: 'Reserved seats under a roof plus lawn (official). 20,000 before 2015.' }],
    roof: 'open',
    strained: true,
  },
  'everett-memorial-stadium': {
    id: 'everett-memorial-stadium',
    metroId: 'seattle',
    // Estimated: local Everett Transit; on-site lots.
    carShare: 0.93,
    names: [{ name: 'Everett Memorial Stadium' }],
    location: [-122.2036, 47.9657],
    ticketmasterIds: ['KovZpa9_ze'],
    capacity: [{ seats: 12000, setup: 'football', note: 'Reported' }],
    roof: 'open',
  },
  'memorial-stadium-seattle': {
    id: 'memorial-stadium-seattle',
    metroId: 'seattle',
    // Closed for the rebuild; reopens in 2027 with 8,000 seats (the research). Kept so earlier nights can be logged.
    names: [{ name: 'Seattle Center Memorial Stadium' }, { name: 'Memorial Stadium' }],
    // Approximate: the north edge of Seattle Center; OpenStreetMap has no point while the site is a construction zone.
    location: [-122.348, 47.6228],
    ticketmasterIds: ['KovZpZA1tntA'],
    capacity: [{ seats: 12000, setup: 'football', note: 'Before the rebuild (reported, Wikipedia infobox; the Oct 6, 2026 research could not confirm it). The new stadium: 6,500 seats, 8,000 capacity (official).' }],
    roof: 'open',
  },
  'washington-state-fair-grandstand': {
    id: 'washington-state-fair-grandstand',
    metroId: 'seattle',
    // Estimated, partly reported: 38,563 Fair Express riders in 2014 against about a million fairgoers; special Sounder trains two Saturdays.
    carShare: 0.94,
    // Ticketmaster lists the grounds as the Washington State Fair Events Center.
    names: [{ name: 'Washington State Fair Events Center' }, { name: 'Umpqua Bank Grandstand' }],
    // Approximate (the research's figure); the fairgrounds in Puyallup.
    location: [-122.2965, 47.1835],
    capacity: [{ seats: 10200, setup: 'concert', note: 'Grandstand concerts during the fair (official)' }],
    roof: 'covered',
  },
  'alaska-airlines-arena': {
    id: 'alaska-airlines-arena',
    metroId: 'seattle',
    // Estimated: no figure; Husky Stadium's 37% (same station) adjusted toward driving for weeknight indoor games.
    carShare: 0.5,
    names: [{ name: 'Hec Edmundson Pavilion' }, { name: 'Alaska Airlines Arena at Hec Edmundson Pavilion' }, { name: 'Alaska Airlines Arena' }],
    location: [-122.3021, 47.6522],
    ticketmasterIds: ['KovZpZAFkkIA'],
    capacity: [{ seats: 10000, setup: 'basketball', note: 'Washington Huskies (official)' }],
    roof: 'indoor',
  },
  'angel-of-the-winds-arena': {
    id: 'angel-of-the-winds-arena',
    metroId: 'seattle',
    // Estimated: Everett Station about 15 minutes' walk; downtown lots.
    carShare: 0.92,
    names: [{ name: 'Xfinity Arena' }, { name: 'Angel of the Winds Arena', from: '2017-12-13' }],
    location: [-122.203, 47.9786],
    ticketmasterIds: ['KovZpZAJEteA', 'KovZ917AhRn'],
    capacity: [
      { seats: 10000, setup: 'concert', note: 'Maximum, floor standing (official); 9,000 seated' },
      { seats: 8149, setup: 'hockey', note: 'Everett Silvertips (official)' },
    ],
    roof: 'indoor',
  },
  'emerald-downs': {
    id: 'emerald-downs',
    metroId: 'seattle',
    // Estimated: large on-site lots; a free shuttle from Auburn Station (older program).
    carShare: 0.95,
    names: [{ name: 'Emerald Downs' }],
    location: [-122.2357, 47.3303],
    ticketmasterIds: ['KovZpa98ee'],
    capacity: [{ seats: 9100, setup: 'racing', note: 'No published capacity; the track\'s biggest recent crowd, July 3, 2023 (estimated). Average race day about 3,000.' }],
    roof: 'covered',
  },
  'evergreen-speedway': {
    id: 'evergreen-speedway',
    metroId: 'seattle',
    // Estimated: no transit, fairgrounds lots.
    carShare: 0.98,
    names: [{ name: 'Evergreen Speedway' }],
    location: [-121.987, 47.8693],
    ticketmasterIds: ['KovZpZAFFJvA'],
    capacity: [{ seats: 7500, setup: 'racing', note: '6,000–7,500 on race nights (reported)' }],
    roof: 'open',
  },
  'accesso-showare-center': {
    id: 'accesso-showare-center',
    metroId: 'seattle',
    // Estimated: 1,500+ free spaces and peak-only Sounder at Kent Station.
    carShare: 0.92,
    // Renamed in the fall of 2017; the exact day was not in the research.
    names: [{ name: 'ShoWare Center' }, { name: 'accesso ShoWare Center', from: '2017-09-01' }],
    location: [-122.24, 47.3877],
    ticketmasterIds: ['KovZpZAktAaA', 'KovZpZAJvdEA'],
    capacity: [
      { seats: 7300, setup: 'concert', note: 'Maximum, end stage (official)' },
      { seats: 5887, setup: 'hockey', note: 'Seattle Thunderbirds (official)' },
    ],
    roof: 'indoor',
  },
  'wamu-theater': {
    id: 'wamu-theater',
    metroId: 'seattle',
    // Estimated: no figure; Lumen Field next door, nudged up for consumer shows and concerts.
    carShare: 0.65,
    // The building is the Lumen Field Event Center (CenturyLink Field Event Center until Nov 19, 2020).
    names: [{ name: 'WaMu Theater' }],
    location: [-122.3329, 47.5932],
    ticketmasterIds: ['KovZpZAFFE7A'],
    capacity: [{ seats: 7000, setup: 'concert', note: 'General admission (official); more with the floor standing' }],
    roof: 'indoor',
  },
  'marymoor-live': {
    id: 'marymoor-live',
    metroId: 'seattle',
    // Estimated: the 2 Line's Marymoor Village station opened in 2025; no count yet.
    carShare: 0.85,
    names: [{ name: 'Marymoor Park' }, { name: 'Marymoor Live', from: '2023-01-01' }],
    location: [-122.1111, 47.6587],
    ticketmasterIds: ['KovZpZA1JAkA'],
    capacity: [
      { seats: 5000, setup: 'concert', note: 'Official' },
      { seats: 6500, setup: 'concert', fromYear: 2023, note: 'After the 2023 expansion (official)' },
    ],
    roof: 'open',
  },
  'cheney-stadium': {
    id: 'cheney-stadium',
    metroId: 'seattle',
    // Estimated: local buses only; on-site paid lot.
    carShare: 0.95,
    names: [{ name: 'Cheney Stadium' }],
    location: [-122.4976, 47.2383],
    ticketmasterIds: ['KovZpZAJeE1A'],
    capacity: [{ seats: 6500, setup: 'baseball', note: 'Tacoma Rainiers (official)' }],
    roof: 'open',
  },
  'remlinger-farms': {
    id: 'remlinger-farms',
    metroId: 'seattle',
    // Estimated: no transit, on-site fields.
    carShare: 0.99,
    names: [{ name: 'Remlinger Farms' }],
    location: [-121.9154, 47.6365],
    ticketmasterIds: ['KovZ917AioZ'],
    capacity: [{ seats: 6000, setup: 'concert', note: 'Up to 6,000 (reported)' }],
    roof: 'open',
    strained: true,
  },
  // ---------- Chicago (docs/research/city-builds/chicago/chicago-venue-table-answer.md; car shares from docs/research/city-builds/chicago/chicago-city-type-answer.md), Oct 7, 2026 ----------
  // Not venue rows: Grant, Douglass, Union and Humboldt parks (festival grounds), McCormick Place and the Stephens
  // Convention Center (sized per event-day), Hawthorne (racing ended July 19, 2026) and Arlington Park (closed 2021).
  // Car shares marked "ours" are not in the research; they come from the nearest comparable and are flagged for Kylie.
  'soldier-field': {
    id: 'soldier-field',
    metroId: 'chicago',
    // Estimated (research): Bears games toward 75–80% car, concerts toward 60–65%; CTA alone carried ~11% at the 2023 Swift shows.
    carShare: 0.7,
    names: [{ name: 'Soldier Field' }],
    location: [-87.6176, 41.8623],
    ticketmasterIds: ['KovZpZAF6tIA', 'Za5ju3rKuqZDvOFjl5XkvAGDNWiF_6-ko-'],
    capacity: [
      { seats: 61500, setup: 'football', note: 'Reported (Ticketmaster and most outlets); Wikipedia says 62,500.' },
      { seats: 61500, setup: 'soccer', note: 'No separate figure; the football setup.' },
      { seats: 63500, setup: 'concert', note: "Official: the stadium's own figure; one low-confidence source says ~66,000." },
    ],
    roof: 'open',
  },
  'wrigley-field': {
    id: 'wrigley-field',
    metroId: 'chicago',
    // Reported (the Cubs' own fan survey, March 2026): 37% drive, 63% other modes.
    carShare: 0.37,
    names: [{ name: 'Wrigley Field' }],
    location: [-87.6556, 41.9481],
    ticketmasterIds: ['KovZpZAFlktA'],
    capacity: [
      { seats: 41649, setup: 'baseball', note: 'Official (MLB.com, March 2026); 41,374 is an older figure.' },
      { seats: 41649, setup: 'concert', note: 'No official concert figure; a ticket aggregator lists 41,159. Estimated at the baseball setup.' },
    ],
    roof: 'open',
  },
  'rate-field': {
    id: 'rate-field',
    metroId: 'chicago',
    // Estimated (70–80%): ~17% rode the L by the team's older estimate; ~7,000 team spaces.
    carShare: 0.75,
    names: [{ name: 'U.S. Cellular Field' }, { name: 'Guaranteed Rate Field', from: '2016-11-01' }, { name: 'Rate Field', from: '2025-01-01' }],
    location: [-87.6338, 41.8297],
    ticketmasterIds: ['KovZpaFPJe'],
    capacity: [{ seats: 40615, setup: 'baseball', note: 'Official (MLB.com, March 2026). A ~48,000 concert figure is low-confidence and not kept.' }],
    roof: 'open',
  },
  'ryan-field': {
    id: 'ryan-field',
    metroId: 'chicago',
    // Estimated: football ~60% car; the pre-opening concert plan projects 30–65% transit. Opened Oct 2, 2026.
    carShare: 0.6,
    names: [{ name: 'Ryan Field' }],
    location: [-87.6908, 42.0669],
    ticketmasterIds: ['KovZpZAFdEdA'],
    capacity: [
      { seats: 47130, setup: 'football', note: 'Reported: the old Ryan Field, closed after 2023. Northwestern played at Martin Stadium and Wrigley in 2024–25.' },
      { seats: 35000, setup: 'football', fromYear: 2026, note: 'Official (Northwestern); sold out at the Oct 2, 2026 opener. Concerts (up to six a year) expected from 2027; capacity unpublished.' },
    ],
    roof: 'covered',
  },
  'huntington-bank-pavilion': {
    id: 'huntington-bank-pavilion',
    metroId: 'chicago',
    // Estimated: the venue recommends transit or rideshare; patrons park in Soldier Field lots.
    carShare: 0.6,
    names: [{ name: 'FirstMerit Bank Pavilion' }, { name: 'Huntington Bank Pavilion at Northerly Island', from: '2017-01-09' }],
    location: [-87.6085, 41.8634],
    ticketmasterIds: ['KovZpZAEA7IA'],
    capacity: [{ seats: 30000, setup: 'concert', note: 'Reported, seats plus lawn; the reduced seated layout is ~8,000.' }],
    roof: 'open',
  },
  'credit-union-1-amphitheatre': {
    id: 'credit-union-1-amphitheatre',
    metroId: 'chicago',
    // Estimated: one suburban site, one lot; hours-long approach jams documented in 2023.
    carShare: 0.97,
    names: [{ name: 'Hollywood Casino Amphitheatre' }, { name: 'Credit Union 1 Amphitheatre', from: '2023-04-25' }],
    // Approximate (research); OpenStreetMap does not know the venue by name.
    location: [-87.785, 41.546],
    ticketmasterIds: ['KovZpZAEktFA'],
    capacity: [{ seats: 28000, setup: 'concert', note: 'Official (Live Nation via WGN): about 11,000 reserved plus 17,000 lawn; Wikipedia says 28,739.' }],
    roof: 'covered',
  },
  'seatgeek-stadium': {
    id: 'seatgeek-stadium',
    metroId: 'chicago',
    // Estimated: big lots on Harlem Ave; weak transit is the main fan complaint.
    carShare: 0.93,
    names: [{ name: 'Toyota Park' }, { name: 'SeatGeek Stadium', from: '2018-11-01' }],
    location: [-87.8062, 41.7648],
    ticketmasterIds: ['Za5ju3rKuqZDvVoV_OqsqAKDLW-OEB0mP3', 'KovZpZA6keJA'],
    capacity: [
      { seats: 20000, setup: 'soccer', note: 'Reported. No confirmed pro tenant in 2026: the Fire left after 2019, the Stars after 2025.' },
      { seats: 28000, setup: 'concert', note: 'Reported, concert or festival' },
    ],
    roof: 'open',
  },
  'united-center': {
    id: 'united-center',
    metroId: 'chicago',
    // Official (2023 patron survey in the 1901 Project TDM study): 86.9% car, 8.1% transit, 5.1% walk.
    carShare: 0.87,
    names: [{ name: 'United Center' }],
    location: [-87.6742, 41.8807],
    ticketmasterIds: ['KovZpa2M7e', 'KovZpa2zIe'],
    capacity: [
      { seats: 20917, setup: 'basketball', note: 'Reported; 23,129 with standing room is the record' },
      { seats: 19717, setup: 'hockey', note: 'Reported; 22,428 with standing room is the record' },
      { seats: 23500, setup: 'concert', note: 'Reported, up to' },
    ],
    roof: 'indoor',
  },
  'allstate-arena': {
    id: 'allstate-arena',
    metroId: 'chicago',
    // Estimated: Blue Line Rosemont is not at the door; Pace bus or rideshare from the station.
    carShare: 0.93,
    names: [{ name: 'Allstate Arena' }],
    location: [-87.8878, 42.0053],
    ticketmasterIds: ['KovZpa2MCe'],
    capacity: [
      { seats: 18500, setup: 'concert', note: 'Reported; Wikipedia now shows 18,200–22,000' },
      { seats: 17500, setup: 'basketball', note: 'Reported' },
      { seats: 16692, setup: 'hockey', note: 'Reported; the Wolves (AHL) play here' },
    ],
    roof: 'indoor',
  },
  ravinia: {
    id: 'ravinia',
    metroId: 'chicago',
    // Estimated: no published share; Metra UP-N stops at the gate, free with a ticket; the only count is a 2021 monthly total.
    carShare: 0.8,
    names: [{ name: 'Ravinia Festival' }, { name: 'Ravinia' }],
    location: [-87.7754, 42.1579],
    ticketmasterIds: ['KovZpZAanvEA'],
    capacity: [{ seats: 12758, setup: 'concert', note: 'Official (Ravinia via AP, July 2026): pavilion 2,840 after the 2026 renovation (was 3,350) plus ~9,918 lawn.' }],
    roof: 'covered',
  },
  'martin-stadium': {
    id: 'martin-stadium',
    metroId: 'chicago',
    // Estimated, ours (not in the research): campus lakefill with limited parking; comparable to Welsh-Ryan.
    carShare: 0.65,
    names: [{ name: 'Northwestern Medicine Field at Martin Stadium' }, { name: 'Martin Stadium' }],
    location: [-87.6708, 42.0584],
    ticketmasterIds: ['KovZ917AYhu', 'Z7r9jZaAnr'],
    capacity: [
      { seats: 12000, setup: 'football', note: "Official (Northwestern), bleachers plus boxes; built 2024 as a temporary home. Northwestern football's last game here was Sept 2026." },
      { seats: 12000, setup: 'soccer', note: 'The same stands; the Chicago Stars played the 2026 season here. 2027 unresolved.' },
    ],
    roof: 'open',
  },
  'now-arena': {
    id: 'now-arena',
    metroId: 'chicago',
    // Estimated: 3,200 on-site spaces; no practical transit.
    carShare: 0.98,
    names: [{ name: 'Sears Centre Arena' }, { name: 'NOW Arena', from: '2020-09-01' }],
    location: [-88.2128, 42.0693],
    ticketmasterIds: ['KovZpZAan6JA'],
    capacity: [
      { seats: 11218, setup: 'concert', note: 'Reported, center stage; 7,410 end stage' },
      { seats: 8700, setup: 'basketball', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'pritzker-pavilion': {
    id: 'pritzker-pavilion',
    metroId: 'chicago',
    // Estimated, ours (not in the research): the Loop, no parking of its own; comparable to the Grant Park festival figure.
    carShare: 0.2,
    names: [{ name: 'Jay Pritzker Pavilion' }],
    location: [-87.6219, 41.8835],
    capacity: [{ seats: 11000, setup: 'concert', note: 'Official (City of Chicago): 4,000 fixed seats plus 7,000 lawn; mostly free events' }],
    roof: 'open',
  },
  'wintrust-arena': {
    id: 'wintrust-arena',
    metroId: 'chicago',
    // Estimated: Green Line station 0.15 mile away and McCormick Place garages adjacent; set between the United Center and Wrigley.
    carShare: 0.65,
    names: [{ name: 'Wintrust Arena' }],
    location: [-87.6214, 41.8537],
    ticketmasterIds: ['KovZ917A2S0'],
    capacity: [{ seats: 10387, setup: 'basketball', note: 'Official (DePaul / MPEA). Concert configuration not published.' }],
    roof: 'indoor',
  },
  'credit-union-1-arena': {
    id: 'credit-union-1-arena',
    metroId: 'chicago',
    // Estimated: Blue and Pink Line stations a short walk; campus walk-ins.
    carShare: 0.6,
    names: [{ name: 'UIC Pavilion' }, { name: 'Credit Union 1 Arena', from: '2018-11-01' }],
    location: [-87.6561, 41.8747],
    ticketmasterIds: ['Za5ju3rKuqZDea8OFFnJ-5byyCu1H5yLOV', 'KovZpa2Bpe'],
    capacity: [
      { seats: 8000, setup: 'basketball', note: 'Official (UIC)' },
      { seats: 10300, setup: 'concert', note: 'Official (UIC); 10,075 end stage' },
    ],
    roof: 'indoor',
  },
  'impact-field': {
    id: 'impact-field',
    metroId: 'chicago',
    // Estimated, ours (not in the research): Rosemont, I-294 at Balmoral, adjacent garage; comparable to Allstate Arena.
    carShare: 0.93,
    names: [{ name: 'Impact Field' }],
    location: [-87.8711, 41.9781],
    capacity: [{ seats: 6300, setup: 'baseball', note: 'Reported (a ballpark trade site), 5,526 fixed seats; Wikipedia says 8,300. A ~10,000 concert figure is unverified and not kept.' }],
    roof: 'open',
  },
  'wintrust-field': {
    id: 'wintrust-field',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a suburban site with surface parking; comparable to NOW Arena.
    carShare: 0.98,
    names: [{ name: 'Boomers Stadium' }, { name: 'Wintrust Field', from: '2020-01-01' }],
    location: [-88.1177, 41.9931],
    ticketmasterIds: ['KovZpZA7et1A'],
    capacity: [{ seats: 7365, setup: 'baseball', note: 'Reported (citing the team): 5,665 fixed plus lawn; record crowd 8,297' }],
    roof: 'open',
  },
  'welsh-ryan-arena': {
    id: 'welsh-ryan-arena',
    metroId: 'chicago',
    // Estimated: the same Purple Line and Metra access as Ryan Field plus a large student walk-in share.
    carShare: 0.65,
    names: [{ name: 'Welsh-Ryan Arena' }],
    location: [-87.6924, 42.0669],
    ticketmasterIds: ['KovZpaozFe'],
    capacity: [
      { seats: 8117, setup: 'basketball', note: 'Reported, before the 2018 renovation' },
      { seats: 7039, setup: 'basketball', fromYear: 2019, note: 'Reported, since Nov 2018' },
    ],
    roof: 'indoor',
  },
  'jones-convocation-center': {
    id: 'jones-convocation-center',
    metroId: 'chicago',
    // Estimated, ours (not in the research): near the I-57/I-94 merge, campus lots.
    carShare: 0.85,
    names: [{ name: 'Jones Convocation Center' }, { name: 'Emil and Patricia Jones Convocation Center' }],
    location: [-87.6084, 41.7165],
    ticketmasterIds: ['KovZpZAa1ltA'],
    capacity: [{ seats: 7000, setup: 'basketball', note: 'Reported. Chicago State crowds are often in the hundreds; the building qualifies, the games sit under the floor.' }],
    roof: 'indoor',
  },
  'salt-shed': {
    id: 'salt-shed',
    metroId: 'chicago',
    // Estimated, ours (not in the research): an industrial corridor with little parking, no rail at the door.
    carShare: 0.55,
    names: [{ name: 'The Salt Shed' }],
    location: [-87.6592, 41.9067],
    ticketmasterIds: ['KovZ917AI5F', 'KovZ917Amf0'],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported (Pollstar): the outdoor Fairgrounds, standing; Wikipedia says 5,500. The indoor Shed (3,600) is under the floor.' }],
    roof: 'open',
  },
  'aragon-ballroom': {
    id: 'aragon-ballroom',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a block from the Red Line Lawrence stop; comparable to Wrigley.
    carShare: 0.45,
    names: [{ name: 'Aragon Ballroom' }, { name: 'Byline Bank Aragon Ballroom', from: '2019-01-01' }],
    location: [-87.658, 41.9694],
    ticketmasterIds: ['KovZpZAFdJnA'],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported (Ticketmaster), general admission; some sources say 4,800–4,900' }],
    roof: 'indoor',
  },
  'gately-stadium': {
    id: 'gately-stadium',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a Public League stadium on the far South Side.
    carShare: 0.8,
    names: [{ name: 'Gately Stadium' }],
    location: [-87.6026, 41.7085],
    capacity: [{ seats: 5000, setup: 'football', note: 'Reported (the CPS stadium list); renovated 2011' }],
    roof: 'open',
  },
  'chicagoland-speedway': {
    id: 'chicagoland-speedway',
    metroId: 'chicago',
    // Estimated, ours (not in the research): a speedway on I-55/I-80 with its own lots.
    carShare: 0.98,
    names: [{ name: 'Chicagoland Speedway' }],
    location: [-88.0588, 41.4744],
    ticketmasterIds: ['KovZpZAa1laA'],
    capacity: [{ seats: 47000, setup: 'racing', note: "Reported, after a cut from 75,000; the 2026 Cup race sold out. One weekend a year (June 25–27, 2027). The research's one addition to the boundary; in Will County." }],
    roof: 'open',
  },
  // ---------- Dallas–Fort Worth (docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-venue-table-answer.md; car shares from docs/research/city-builds/dallas-fort-worth/dallas-fort-worth-city-type-answer.md), Oct 8, 2026 ----------
  // Not venue rows: Fair Park's grounds and the Will Rogers grounds (sized per fair day), PGA Frisco, the convention halls, and
  // the Fort Worth Convention Center Arena (final event Sept 2026). Car shares marked "ours" are not in the research.
  'att-stadium': {
    id: 'att-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (98–100%): no fixed-route transit in Arlington; even the World Cup's funded shuttle moved about 5%.
    carShare: 0.99,
    names: [{ name: "AT&T Stadium" }],
    location: [-97.0928, 32.7479],
    ticketmasterIds: ['KovZpZAJvndA'],
    capacity: [
      { seats: 80000, setup: 'football', standing: 100000, note: 'Reported, seated; 100,000+ with standing-room platforms; NFL record 105,121 (2009)' },
      { seats: 80000, setup: 'soccer', note: "The 2026 World Cup drew about 70,000 per match, not FIFA's listed 94,000; the seated bowl is the ceiling" },
      { seats: 80000, setup: 'concert', note: 'Not published; the seated bowl as the ceiling. Estimated.' },
    ],
    roof: 'covered',
  },
  'cotton-bowl': {
    id: 'cotton-bowl',
    metroId: 'dallas-fort-worth',
    // Estimated (88–95%) outside the fair; about 81% on Red River day with DART's fair service.
    carShare: 0.92,
    names: [{ name: 'Cotton Bowl Stadium' }, { name: 'Cotton Bowl' }],
    location: [-96.7596, 32.7796],
    ticketmasterIds: ['KovZpZAdlEJA'],
    capacity: [
      { seats: 92100, setup: 'football', note: 'Official (Fair Park). Inside the State Fair grounds Sep 25 – Oct 18, 2026' },
      { seats: 92100, setup: 'soccer', note: 'No published soccer configuration; Trinity FC averages about 3,000. Atlético Dallas (USL) joins 2027.' },
    ],
    roof: 'open',
  },
  'texas-motor-speedway': {
    id: 'texas-motor-speedway',
    metroId: 'dallas-fort-worth',
    // Estimated: free lots for about 80,000 vehicles; no transit.
    carShare: 0.99,
    names: [{ name: 'Texas Motor Speedway' }],
    location: [-97.2816, 33.0371],
    ticketmasterIds: ['KovZpa3g7e'],
    capacity: [{ seats: 75000, setup: 'racing', note: 'Reported (2026), after cuts from about 150,000; the May 3, 2026 Cup race sold out. One race weekend a year.' },
    ],
    roof: 'open',
  },
  'amon-g-carter-stadium': {
    id: 'amon-g-carter-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (80–90%): campus venue, no rail; students walk.
    carShare: 0.85,
    names: [{ name: 'Amon G. Carter Stadium' }],
    location: [-97.368, 32.7098],
    capacity: [
      { seats: 46000, setup: 'football', note: 'Official (TCU); record 53,294 with standing room (2023)' },
    ],
    roof: 'open',
  },
  'globe-life-field': {
    id: 'globe-life-field',
    metroId: 'dallas-fort-worth',
    // Estimated (95–99%): no transit; shares the Arlington lots with AT&T Stadium.
    carShare: 0.97,
    names: [{ name: 'Globe Life Field' }],
    location: [-97.0841, 32.7476],
    ticketmasterIds: ['KovZ917A-X0'],
    capacity: [
      { seats: 40300, setup: 'baseball', note: 'Official (the Rangers); 40,518 has no source; record 42,500 (2023 World Series)' },
      { seats: 43598, setup: 'concert', note: 'Reported: the Morgan Wallen record (Oct 2022), as the ceiling' },
    ],
    roof: 'covered',
  },
  'gerald-j-ford-stadium': {
    id: 'gerald-j-ford-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (75–85%): Mockingbird DART station about a mile away with a free shuttle; students walk.
    carShare: 0.8,
    names: [{ name: 'Gerald J. Ford Stadium' }, { name: 'Ford Stadium' }],
    location: [-96.7828, 32.8378],
    ticketmasterIds: ['KovZpZAaEnkA'],
    capacity: [
      { seats: 32000, setup: 'football', note: 'Official (SMU), before the 2024 end zone' },
      { seats: 33200, setup: 'football', fromYear: 2024, note: 'Official (SMU, 2026)' },
    ],
    roof: 'open',
  },
  'datcu-stadium': {
    id: 'datcu-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated (78–88%): the A-train plus a game-day shuttle carries little; students walk over I-35E.
    carShare: 0.83,
    names: [{ name: 'Apogee Stadium' }, { name: 'DATCU Stadium', from: '2023-07-31' }],
    location: [-97.1594, 33.2039],
    ticketmasterIds: ['KovZpZAFAnAA'],
    capacity: [
      { seats: 30850, setup: 'football', note: 'Reported, 2011–2023' },
      { seats: 30100, setup: 'football', fromYear: 2024, note: 'Reported, 2024 on' },
    ],
    roof: 'open',
  },
  'choctaw-stadium': {
    id: 'choctaw-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated: the Arlington district, no transit. No regular tenant in 2026.
    carShare: 0.98,
    names: [{ name: 'Globe Life Park in Arlington' }, { name: 'Choctaw Stadium', from: '2021-08-25' }],
    location: [-97.0826, 32.7513],
    ticketmasterIds: ['KovZpZA1IEvA'],
    capacity: [
      { seats: 25000, setup: 'football', note: 'Reported, the football and soccer configuration' },
      { seats: 25000, setup: 'soccer', note: 'Reported' },
      { seats: 48114, setup: 'baseball', note: 'Reported: the 1994–2019 Rangers configuration, no longer used' },
    ],
    roof: 'open',
  },
  'american-airlines-center': {
    id: 'american-airlines-center',
    metroId: 'dallas-fort-worth',
    // Estimated (85–94%): DART and TRE at Victory Station beside the arena carry high single digits, by Victory's FY22 boardings.
    carShare: 0.9,
    names: [{ name: 'American Airlines Center' }],
    location: [-96.8103, 32.7905],
    ticketmasterIds: ['KovZpZAJ67eA'],
    capacity: [
      { seats: 19200, setup: 'basketball', note: 'Reported; 21,146 with standing room' },
      { seats: 18532, setup: 'hockey', note: 'Reported; 19,323 with standing room' },
      { seats: 21000, setup: 'concert', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'dos-equis-pavilion': {
    id: 'dos-equis-pavilion',
    metroId: 'dallas-fort-worth',
    // Estimated (88–95%): inside Fair Park, Green Line stations a short walk; no fair-day service boost outside the fair.
    carShare: 0.92,
    names: [{ name: 'Gexa Energy Pavilion' }, { name: 'Starplex Pavilion', from: '2017-01-01' }, { name: 'Dos Equis Pavilion', from: '2018-04-20' }],
    location: [-96.7563, 32.7751],
    ticketmasterIds: ['KovZpZAEAFeA'],
    capacity: [
      { seats: 20000, setup: 'concert', note: 'Reported: about 7,500 covered seats plus 12,500 lawn' },
    ],
    roof: 'covered',
  },
  'toyota-stadium': {
    id: 'toyota-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated: Frisco is not a DART member; surface lots, with structures coming in the renovation.
    carShare: 0.98,
    names: [{ name: 'Toyota Stadium' }],
    location: [-96.8354, 33.1542],
    ticketmasterIds: ['KovZpZAJedaA'],
    capacity: [
      { seats: 20500, setup: 'soccer', note: 'Reported, the pre-renovation sellable maximum (19,096 seated bowl)' },
      { seats: 15000, setup: 'soccer', fromYear: 2025, note: 'Estimated (research): about 11,000 in 2025 during the $182M renovation, 15,000–20,000 reported for 2026–27; no official figure. 22,500–23,900 after Q1 2028.' },
      { seats: 20500, setup: 'football', note: 'The Dallas Renegades (UFL) and Frisco ISD play here; the same bowl' },
      { seats: 30000, setup: 'concert', note: 'Reported (City of Frisco), north-end stage; may not survive the renovation' },
    ],
    roof: 'open',
  },
  'dickies-arena': {
    id: 'dickies-arena',
    metroId: 'dallas-fort-worth',
    // Estimated (93–97%): a 2,210-car garage and the Will Rogers campus lots; one bus route.
    carShare: 0.95,
    names: [{ name: 'Dickies Arena' }],
    location: [-97.3685, 32.7411],
    ticketmasterIds: ['KovZ917AOAw'],
    capacity: [
      { seats: 14000, setup: 'concert', note: 'Official, up to' },
      { seats: 13300, setup: 'basketball', note: 'Official; Wikipedia says 13,550' },
      { seats: 12200, setup: 'hockey', note: 'Official, hockey and family shows; rodeo 9,300' },
    ],
    roof: 'indoor',
  },
  'ford-center-at-the-star': {
    id: 'ford-center-at-the-star',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): Frisco, the Dallas North Tollway, no rail; comparable to Toyota Stadium.
    carShare: 0.98,
    names: [{ name: 'Ford Center at The Star' }, { name: 'The Star' }],
    location: [-96.829, 33.1101],
    ticketmasterIds: ['KovZ917A0sf'],
    capacity: [
      { seats: 12000, setup: 'football', note: "Reported; the Cowboys' practice facility, Frisco ISD football and events" },
    ],
    roof: 'indoor',
  },
  'riders-field': {
    id: 'riders-field',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): Frisco, no rail; comparable to Toyota Stadium.
    carShare: 0.98,
    names: [{ name: 'Dr Pepper Ballpark' }, { name: 'Riders Field', from: '2021-01-01' }],
    location: [-96.8197, 33.0984],
    ticketmasterIds: ['KovZpZAFAtnA'],
    capacity: [
      { seats: 10316, setup: 'baseball', note: 'Reported; 10,216 by MiLB; 7,748 fixed seats plus a berm' },
    ],
    roof: 'open',
  },
  'unt-coliseum': {
    id: 'unt-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: campus; students walk.
    carShare: 0.83,
    names: [{ name: 'UNT Coliseum' }, { name: 'The Super Pit' }],
    location: [-97.1533, 33.2079],
    capacity: [
      { seats: 9797, setup: 'basketball', note: 'Reported; record 10,600 (1977)' },
    ],
    roof: 'indoor',
  },
  'dallas-memorial-arena': {
    id: 'dallas-memorial-arena',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): downtown, with the Convention Center DART station closed 2026–2029.
    carShare: 0.75,
    names: [{ name: 'Dallas Memorial Auditorium' }, { name: 'Kay Bailey Hutchison Convention Center Dallas Memorial Arena' }, { name: 'Dallas Memorial Arena' }],
    location: [-96.8019, 32.7748],
    capacity: [
      { seats: 10000, setup: 'basketball', note: "Reported, 'almost 10,000' before the renovation. Not hosting events in 2026." },
      { seats: 8400, setup: 'basketball', fromYear: 2027, note: 'Reported (city memo): about 8,400 for the WNBA after the renovation; the Wings from 2027' },
    ],
    roof: 'indoor',
  },
  'fair-park-coliseum': {
    id: 'fair-park-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: inside Fair Park, as the Cotton Bowl.
    carShare: 0.92,
    names: [{ name: 'Fair Park Coliseum' }],
    location: [-96.7572, 32.7792],
    ticketmasterIds: ['KovZpZAF6EEA'],
    capacity: [
      { seats: 8500, setup: 'concert', note: 'Reported (OVG360), end stage; 9,552 maximum; 5,768 seated' },
    ],
    roof: 'indoor',
  },
  'curtis-culwell-center': {
    id: 'curtis-culwell-center',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): Garland, the Bush Turnpike, surface lots.
    carShare: 0.97,
    names: [{ name: 'Curtis Culwell Center' }],
    location: [-96.642, 32.9594],
    ticketmasterIds: ['KovZpZA6AEkA'],
    capacity: [
      { seats: 6860, setup: 'basketball', note: 'Reported, seated; 8,500 standing' },
    ],
    roof: 'indoor',
  },
  'toyota-music-factory': {
    id: 'toyota-music-factory',
    metroId: 'dallas-fort-worth',
    // Estimated (88–95%): the DART Orange Line's Irving Convention Center station is a short walk; an 800-car garage.
    carShare: 0.92,
    names: [{ name: 'Irving Music Factory' }, { name: 'The Pavilion at Toyota Music Factory', from: '2017-09-01' }, { name: 'Toyota Music Factory' }],
    location: [-96.9448, 32.8742],
    ticketmasterIds: ['Za5ju3rKuqZDvc1b2OF6s5xzFania9J6TC', 'KovZ917A2Q7'],
    capacity: [
      { seats: 8000, setup: 'concert', note: 'Official: the indoor theater plus lawn; 4,000 all-seated indoors (under the floor in winter)' },
    ],
    roof: 'covered',
  },
  'lone-star-park': {
    id: 'lone-star-park',
    metroId: 'dallas-fort-worth',
    // Estimated: no transit; the Grand Prairie cluster on I-30.
    carShare: 0.99,
    names: [{ name: 'Lone Star Park' }],
    location: [-96.9882, 32.7747],
    ticketmasterIds: ['KovZ917A0XB', 'KovZ917AcPU', 'KovZ917A5mV'],
    capacity: [{ seats: 8000, setup: 'racing', note: 'Reported, an older grandstand figure; about 700,000 visitors a year. Thoroughbred meet April–July.' },
    ],
    roof: 'covered',
  },
  'grand-prairie-stadium': {
    id: 'grand-prairie-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): the same Grand Prairie cluster as Lone Star Park.
    carShare: 0.99,
    names: [{ name: 'Grand Prairie Stadium' }, { name: 'QuikTrip Park' }],
    location: [-96.986, 32.7683],
    ticketmasterIds: ['KovZpZA1vdtA'],
    capacity: [{ seats: 7200, setup: 'cricket', note: 'Reported: cricket (Texas Super Kings, Major League Cricket); expandable to 15,000' },
    ],
    roof: 'open',
  },
  'mansfield-stadium': {
    id: 'mansfield-stadium',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): a new suburban stadium with surface parking.
    carShare: 0.98,
    names: [{ name: 'Texas Health Mansfield Stadium' }, { name: 'Mansfield Stadium' }],
    location: [-97.1395, 32.565],
    ticketmasterIds: ['Z7r9jZakrm'],
    capacity: [
      { seats: 7000, setup: 'soccer', note: 'Reported; 7,500 by the city. Opened summer 2026; North Texas SC (MLS Next Pro). Coordinates approximate (research).' },
    ],
    roof: 'open',
  },
  'college-park-center': {
    id: 'college-park-center',
    metroId: 'dallas-fort-worth',
    // Estimated (80–90%): a campus venue in a city with no fixed-route transit; students walk.
    carShare: 0.85,
    names: [{ name: 'College Park Center' }],
    location: [-97.1081, 32.7305],
    ticketmasterIds: ['ZFr9jZaa77'],
    capacity: [
      { seats: 7000, setup: 'basketball', note: 'Reported; the Wings through 2026, UTA basketball' },
    ],
    roof: 'indoor',
  },
  'moody-coliseum': {
    id: 'moody-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: the SMU campus, Mockingbird station; students walk.
    carShare: 0.8,
    names: [{ name: 'Moody Coliseum' }],
    location: [-96.7807, 32.8404],
    ticketmasterIds: ['KovZpapvYe'],
    capacity: [
      { seats: 7000, setup: 'basketball', note: 'Official (SMU)' },
    ],
    roof: 'indoor',
  },
  'cutx-event-center': {
    id: 'cutx-event-center',
    metroId: 'dallas-fort-worth',
    // Estimated: a freeway-side venue with surface lots.
    carShare: 0.99,
    names: [{ name: 'Allen Event Center' }, { name: 'Credit Union of Texas Event Center', from: '2021-10-15' }],
    location: [-96.6546, 33.1275],
    ticketmasterIds: ['KovZpa2Wfe'],
    capacity: [
      { seats: 7080, setup: 'concert', note: 'Reported, in the round; 6,200 end stage' },
      { seats: 6200, setup: 'hockey', note: 'Estimated (research): the end-stage figure as a proxy; the Allen Americans (ECHL)' },
    ],
    roof: 'indoor',
  },
  'schollmaier-arena': {
    id: 'schollmaier-arena',
    metroId: 'dallas-fort-worth',
    // Estimated: the TCU campus, as the stadium.
    carShare: 0.85,
    names: [{ name: 'Ed & Rae Schollmaier Arena' }, { name: 'Schollmaier Arena' }],
    location: [-97.3667, 32.7088],
    ticketmasterIds: ['ZFr9jZd6F6'],
    capacity: [
      { seats: 6800, setup: 'basketball', note: 'Reported; an 8,500 figure looks like an error' },
    ],
    roof: 'indoor',
  },
  'texas-trust-cu-theatre': {
    id: 'texas-trust-cu-theatre',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): the Grand Prairie cluster.
    carShare: 0.99,
    names: [{ name: 'Verizon Theatre' }, { name: 'The Theatre at Grand Prairie', from: '2018-07-27' }, { name: 'Texas Trust CU Theatre', from: '2021-04-27' }],
    location: [-96.9824, 32.7668],
    capacity: [
      { seats: 6350, setup: 'concert', note: 'Official (AEG), seated' },
    ],
    roof: 'indoor',
  },
  'billy-bobs-texas': {
    id: 'billy-bobs-texas',
    metroId: 'dallas-fort-worth',
    // Estimated, ours (not in the research): the Stockyards district, congested on weekends.
    carShare: 0.9,
    names: [{ name: "Billy Bob's Texas" }],
    location: [-97.3478, 32.7909],
    ticketmasterIds: ['KovZpZAJ6dnA'],
    capacity: [
      { seats: 6000, setup: 'concert', note: 'Official, up to' },
    ],
    roof: 'indoor',
  },
  'comerica-center': {
    id: 'comerica-center',
    metroId: 'dallas-fort-worth',
    // Estimated: Frisco, next to Riders Field.
    carShare: 0.98,
    names: [{ name: 'Dr Pepper Arena' }, { name: 'Comerica Center' }],
    location: [-96.8194, 33.1006],
    ticketmasterIds: ['KovZpZA6AEAA'],
    capacity: [
      { seats: 6000, setup: 'concert', note: 'Official (Visit Frisco), seated; 7,000 standing' },
      { seats: 4500, setup: 'basketball', note: 'Reported, older: the Texas Legends (G League) sit under the floor' },
    ],
    roof: 'indoor',
  },
  'will-rogers-coliseum': {
    id: 'will-rogers-coliseum',
    metroId: 'dallas-fort-worth',
    // Estimated: the Will Rogers campus, as Dickies Arena.
    carShare: 0.95,
    names: [{ name: 'Will Rogers Memorial Coliseum' }],
    location: [-97.37, 32.7472],
    capacity: [{ seats: 5652, setup: 'rodeo', note: 'Official (City of Fort Worth), permanent seats; equestrian and Stock Show events' },
    ],
    roof: 'indoor',
  },
  // ---------- Montreal (docs/research/city-builds/montreal/montreal-venue-table-answer.md; car shares from docs/research/city-builds/montreal/montreal-city-type-answer.md), Oct 8, 2026 ----------
  // Not venue rows: Circuit Gilles-Villeneuve and Parc Jean-Drapeau (the Grand Prix, Osheaga: sized per day), Place des Festivals,
  // the Palais des congrès, the Old Port. Their events are placed as points and sized by their own crowd when a figure exists.
  'bell-centre': {
    id: 'bell-centre',
    metroId: 'montreal',
    // Estimated (30–45%) with an observed floor: game nights add ~5,000 Métro riders at two stations alone (STM via La Presse, 2026).
    carShare: 0.35,
    names: [{ name: 'Centre Bell' }, { name: 'Bell Centre' }],
    location: [-73.5692, 45.496],
    ticketmasterIds: ['KovZpauRJe'],
    capacity: [
      { seats: 21288, setup: 'hockey', note: 'Reported, 2015–17' },
      { seats: 21302, setup: 'hockey', fromYear: 2017, note: 'Reported, 2017–21' },
      { seats: 21105, setup: 'hockey', fromYear: 2021, note: 'Reported, 2021–25' },
      { seats: 20962, setup: 'hockey', fromYear: 2025, note: 'Official (NHL announced attendance), 2025–26 on; the new Le Parterre section' },
      { seats: 22114, setup: 'basketball', note: 'Reported' },
      { seats: 15000, setup: 'concert', note: 'Reported, end stage; up to 21,500 in other setups' },
    ],
    roof: 'indoor',
  },
  'olympic-stadium': {
    id: 'olympic-stadium',
    metroId: 'montreal',
    // Estimated (25–40%) for a full house when it reopens: 4,000 indoor spaces for the whole park; Métro Pie-IX at the door.
    carShare: 0.3,
    names: [{ name: 'Stade olympique' }, { name: 'Olympic Stadium' }],
    location: [-73.5516, 45.5578],
    ticketmasterIds: ['KovZ917AVK7'],
    capacity: [
      { seats: 56000, setup: 'football', note: 'Official (Montréal olympique). Closed to events since mid-December 2023; reopening 2028 with a new roof and a reshaped lower bowl (capacity not announced).' },
      { seats: 56000, setup: 'soccer', note: 'The same bowl; record 61,004 (2016 MLS conference final)' },
    ],
    roof: 'covered',
  },
  'stade-saputo': {
    id: 'stade-saputo',
    metroId: 'montreal',
    // Estimated (35–55%): the Olympic Park's 4,000 spaces serve a crowd a third the size of the stadium's; Métro Viau.
    carShare: 0.45,
    names: [{ name: 'Stade Saputo' }, { name: 'Saputo Stadium' }],
    location: [-73.5526, 45.5631],
    ticketmasterIds: ['KovZpZAFFElA'],
    capacity: [
      { seats: 20801, setup: 'soccer', note: 'Reported, after the 2012 expansion (low confidence)' },
      { seats: 19619, setup: 'soccer', fromYear: 2019, note: 'Official (CF Montréal)' },
    ],
    roof: 'open',
  },
  'place-bell': {
    id: 'place-bell',
    metroId: 'montreal',
    // Estimated (55–75%): Laval's Montmorency sector is 75% car for all trips; the Métro terminus is across the street.
    carShare: 0.65,
    names: [{ name: 'Place Bell' }],
    location: [-73.7217, 45.5558],
    ticketmasterIds: ['KovZ917A227'],
    capacity: [
      { seats: 10172, setup: 'hockey', note: 'Reported: announced sellouts, PWHL 2024–26; 10,062 in earlier listings. The Rocket (AHL) and Victoire (PWHL).' },
      { seats: 10000, setup: 'concert', note: 'Reported: a 10,000-seat amphitheatre that converts to a theatre; 10,500 not confirmed' },
    ],
    roof: 'indoor',
  },
  'percival-molson-stadium': {
    id: 'percival-molson-stadium',
    metroId: 'montreal',
    // Estimated (27–40%) from a 2005 traffic projection; no fan parking on site; a hillside walk from Métro McGill.
    carShare: 0.35,
    names: [{ name: 'Stade Percival-Molson' }, { name: 'Percival Molson Memorial Stadium' }, { name: 'Molson Stadium' }],
    location: [-73.5808, 45.5102],
    ticketmasterIds: ['KovZpZAFFAJA'],
    capacity: [
      { seats: 25012, setup: 'football', note: 'Official (McGill), after the 2010 expansion' },
      { seats: 23420, setup: 'football', fromYear: 2014, note: 'Reported, after seats were removed in 2014' },
      { seats: 23035, setup: 'football', fromYear: 2024, note: 'Reported: the announced sellout at the 2024 home opener. The Alouettes (CFL) and McGill.' },
    ],
    roof: 'open',
  },
  'iga-stadium': {
    id: 'iga-stadium',
    metroId: 'montreal',
    // Estimated (30–45%): limited parking, a shuttle from a remote lot, two Métro lines within walking distance.
    carShare: 0.35,
    names: [{ name: 'Stade Uniprix' }, { name: 'Stade IGA', from: '2018-04-01' }, { name: 'IGA Stadium' }],
    location: [-73.6267, 45.533],
    ticketmasterIds: ['KovZ917AQsZ', 'KovZ917A4df', 'KovZpZAFlaeA', 'Za5ju3rKuqZDdnNKoydOyGdhwTHTHZ4Cio'],
    capacity: [{ seats: 11991, setup: 'tennis', note: "Reported (Canadian Press, 2026): centre court; the grounds average about 24,000 a day during the National Bank Open (men's event in even years, women's in odd). A ~15,000-seat roofed court is planned, no dates." },
    ],
    roof: 'open',
  },
  'cepsum-stadium': {
    id: 'cepsum-stadium',
    metroId: 'montreal',
    // Estimated, ours (not in the research): Métro Édouard-Montpetit at the door; a campus crowd.
    carShare: 0.35,
    names: [{ name: 'Stade du CEPSUM' }, { name: 'CEPSUM Stadium' }],
    location: [-73.6114, 45.5089],
    ticketmasterIds: ['KovZ917AV1e'],
    capacity: [
      { seats: 5000, setup: 'football', note: 'Official (Tourisme Montréal); 5,100 by the RSEQ. The Carabins (U Sports).' },
      { seats: 5000, setup: 'soccer', note: 'The same stands' },
    ],
    roof: 'open',
  },
  'claude-robillard': {
    id: 'claude-robillard',
    metroId: 'montreal',
    // Estimated, ours (not in the research): Métro Crémazie nearby; a meet crowd arrives over the day.
    carShare: 0.5,
    names: [{ name: 'Complexe sportif Claude-Robillard' }, { name: 'Claude-Robillard Sports Complex' }],
    location: [-73.6362, 45.5526],
    ticketmasterIds: ['KovZ917AV1t'],
    capacity: [{ seats: 6375, setup: 'soccer', note: "Official (Tourisme Montréal): the outdoor track stadium's bleachers; ticketed meets only. Renovations through 2029; stays open." },
    ],
    roof: 'open',
  },
  'golden-1-center': {
    id: 'golden-1-center',
    metroId: 'sacramento',
    names: [{ name: 'Golden 1 Center' }],
    // No carShare: the Oct 12 city-type answer has no measured split (projected ~0.85 for Kings games). The earlier 0.87 was an estimate by subtraction.
    location: [-121.4995008, 38.5801405],
    ticketmasterIds: ['KovZpZAEF76A'],
    capacity: [
      {
        seats: 17608,
        setup: 'basketball',
        note: 'Reported. Design figure 17,500, expandable to 19,000. Source: https://en.wikipedia.org/wiki/Golden_1_Center',
      },
      {
        seats: 19000,
        setup: 'concert',
        note: 'Reported. Source: https://en.wikipedia.org/wiki/Golden_1_Center',
      },
    ],
    roof: 'indoor',
  },
  roadrunner: {
    id: 'roadrunner',
    metroId: 'boston',
    names: [{ name: 'Roadrunner' }],
    location: [-71.1438739, 42.3566205],
    ticketmasterIds: ['Z7r9jZa7rs'],
    capacity: [{ seats: 3500, setup: 'concert', note: 'Reported. 3,500 vs 3,000 conflict in research; GA standing only. Source: venue table A17.' }],
    roof: 'indoor',
  },
  // One festival site in Indio, not its own metro. The logged nights stay
  // outside the Los Angeles rating.
  'empire-polo-club': {
    id: 'empire-polo-club',
    metroId: 'la',
    names: [{ name: 'Empire Polo Club' }],
    location: [-116.2372, 33.6803],
    ticketmasterIds: ['KovZpZA1FtFA'],
    capacity: [
      { seats: 99000, setup: 'concert', note: 'Festival grounds in Indio: the city\'s daily cap, standing, not a seat count.' },
      { seats: 125000, setup: 'concert', fromYear: 2017, note: 'The daily cap after Indio raised it; 2018 sold out at this figure.' },
    ],
    roof: 'open',
  },
  'ventura-theater': {
    id: 'ventura-theater',
    metroId: 'la',
    names: [{ name: 'Ventura Theater' }],
    location: [-119.2978, 34.2805],
    ticketmasterIds: ['KovZpapT1e'],
    capacity: [{ seats: 1000, setup: 'concert', note: 'About 1,000. Estimated. Ventura is part of Los Angeles here.' }],
    roof: 'indoor',
  },
  // ---- Atlanta (docs/research/city-builds/atlanta/atlanta-venue-table-answer.md, Oct 7, 2026). Capacities labeled as the research
  // labeled them; car shares from docs/research/city-builds/atlanta/atlanta-city-type-answer.md (one value per venue, Kylie, Oct 6).
  // Coordinates checked against OpenStreetMap by name; three rooms OSM does not know take the research's
  // approximation, said so below. Festival parks and the Georgia World Congress Center are not rows
  // (Kylie, Oct 7): their events are points sized by their own crowds. ----
  'mercedes-benz-stadium': {
    id: 'mercedes-benz-stadium',
    metroId: 'atlanta',
    // Reported: Falcons 78% car (MARTA fare-card counts, 2018–19), Atlanta United ~70%. One value: 0.75; concerts and bowls read a few points off.
    carShare: 0.75,
    names: [{ name: 'Mercedes-Benz Stadium' }],
    location: [-84.4008, 33.7554],
    ticketmasterIds: ['KovZpZAEdJaA', 'Za5ju3rKuqZDdZpd_5wxtkFl6OaoEUt3cV', 'KovZ917AOpV'],
    capacity: [
      { seats: 71000, setup: 'football', note: 'Official (Falcons). 75,000 expanded for the SEC Championship, Peach Bowl and other neutral-site games; record 79,330 (2022 Peach Bowl).' },
      { seats: 42500, setup: 'soccer', note: 'Official, the upper-bowl curtain for Atlanta United; the full bowl opens for big matches (record 73,019, 2018 MLS Cup, reported).' },
    ],
    // Retractable roof; the venue type has no such value, so covered, as the roof is usually closed for events.
    roof: 'covered',
  },
  'echopark-speedway': {
    id: 'echopark-speedway',
    metroId: 'atlanta',
    // Estimated: 850 acres of free lots, no transit (99%+).
    carShare: 0.99,
    names: [{ name: 'Atlanta Motor Speedway' }, { name: 'EchoPark Speedway', from: '2025-06-03' }],
    location: [-84.3162, 33.3889],
    capacity: [{ seats: 71000, setup: 'racing', note: 'Reported: the last grandstand figure the owner released (2015). No feed lists its two race weekends; hand-list them.' }],
    roof: 'open',
  },
  'bobby-dodd-stadium': {
    id: 'bobby-dodd-stadium',
    metroId: 'atlanta',
    // Estimated (55–75%): North Avenue station three blocks away, plus students walking in.
    carShare: 0.65,
    names: [{ name: 'Bobby Dodd Stadium at Grant Field' }, { name: 'Bobby Dodd Stadium at Hyundai Field', from: '2023-08-08' }],
    location: [-84.393, 33.7725],
    capacity: [
      { seats: 55000, setup: 'football', note: 'Official, through the 2023 season' },
      { seats: 51913, setup: 'football', fromYear: 2024, note: 'Official (Georgia Tech). About 50,000 from 2027 after the renovation; update then.' },
    ],
    roof: 'open',
  },
  'truist-park': {
    id: 'truist-park',
    metroId: 'atlanta',
    // Estimated (93–98%): no rail; 9,000+ Braves game-day spaces; CobbLinc 10 does not run Sundays. No observed count since 2017.
    carShare: 0.96,
    names: [{ name: 'SunTrust Park' }, { name: 'Truist Park', from: '2020-01-14' }],
    location: [-84.4676, 33.8907],
    ticketmasterIds: ['KovZpZAtv11A'],
    capacity: [{ seats: 41084, setup: 'baseball', note: 'Reported (the Braves\' figure via Ticketmaster and Populous); 41,149 at the 2017 opening' }],
    roof: 'open',
  },
  'center-parc-stadium': {
    id: 'center-parc-stadium',
    metroId: 'atlanta',
    // Estimated (75–88%): the same site drew 6–8% by MARTA as Turner Field; a mile from Georgia State station.
    carShare: 0.82,
    names: [{ name: 'Georgia State Stadium' }, { name: 'Center Parc Stadium', from: '2020-08-01' }],
    location: [-84.3887, 33.7355],
    ticketmasterIds: ['KovZ917A8b7'],
    capacity: [{ seats: 24333, setup: 'football', note: 'Reported. Turner Field (49,586, baseball, 1997–2016) is history, not a setup.' }],
    roof: 'open',
  },
  'state-farm-arena': {
    id: 'state-farm-arena',
    metroId: 'atlanta',
    // Reported: Hawks ~84% car (MARTA fare-card counts 2018–19, 9.3% rail, raised for undercount).
    carShare: 0.84,
    names: [{ name: 'Philips Arena' }, { name: 'State Farm Arena', from: '2018-08-29' }],
    location: [-84.3964, 33.7574],
    ticketmasterIds: ['KovZpa2Xke'],
    capacity: [
      { seats: 18047, setup: 'basketball', note: 'Reported, 2014–17' },
      { seats: 16600, setup: 'basketball', fromYear: 2018, note: 'Official at the 2018 reopening' },
      { seats: 17600, setup: 'basketball', fromYear: 2024, note: 'Reported (2026); Dream crowds above 17,000 in 2024–25 confirm the 16,600 is out of date' },
      { seats: 21000, setup: 'concert', note: 'Reported, end-stage' },
    ],
    roof: 'indoor',
  },
  'lakewood-amphitheatre': {
    id: 'lakewood-amphitheatre',
    metroId: 'atlanta',
    // Estimated (90–97%): ~6,000-car lot, parking in the ticket; a bus bridge from Lakewood/Fort McPherson.
    carShare: 0.95,
    names: [{ name: 'Lakewood Amphitheatre' }, { name: 'Cellairis Amphitheatre at Lakewood', from: '2017-11-03' }, { name: 'Lakewood Amphitheatre', from: '2022-01-01' }],
    location: [-84.396, 33.7042],
    ticketmasterIds: ['KovZpZAEkeFA'],
    capacity: [{ seats: 18920, setup: 'concert', note: 'Reported: ~7,000 seats and ~12,000 lawn; Live Nation rounds to 19,000. The Cellairis name came off about 2021 (end date not confirmed; 2022 used here).' }],
    roof: 'covered',
  },
  'gas-south-arena': {
    id: 'gas-south-arena',
    metroId: 'atlanta',
    // Estimated (96–99%): on-site lots, no event transit.
    carShare: 0.98,
    names: [{ name: 'Infinite Energy Arena' }, { name: 'Gas South Arena', from: '2021-05-25' }],
    location: [-84.0938, 33.9916],
    ticketmasterIds: ['KovZpZAEkdvA'],
    capacity: [
      { seats: 13000, setup: 'concert', note: 'Official' },
      { seats: 12750, setup: 'basketball', note: 'Reported' },
      { seats: 11355, setup: 'hockey', note: 'Reported (Gladiators, ECHL)' },
    ],
    roof: 'indoor',
  },
  'ameris-bank-amphitheatre': {
    id: 'ameris-bank-amphitheatre',
    metroId: 'atlanta',
    // Estimated (96–99%): a parking pass in every ticket, no transit.
    carShare: 0.98,
    names: [{ name: 'Verizon Wireless Amphitheatre' }, { name: 'Verizon Amphitheatre', from: '2017-01-01' }, { name: 'Ameris Bank Amphitheatre', from: '2019-01-01' }],
    location: [-84.3063, 34.0544],
    ticketmasterIds: ['KovZpZAFFdlA'],
    capacity: [{ seats: 12000, setup: 'concert', note: 'Official (Live Nation); 12,500 max standing and 7,500 seated reported' }],
    roof: 'covered',
  },
  'fifth-third-stadium': {
    id: 'fifth-third-stadium',
    metroId: 'atlanta',
    // Estimated (75–90%): the Big Owl Bus carries students from campus.
    carShare: 0.85,
    names: [{ name: 'Fifth Third Bank Stadium' }, { name: 'Fifth Third Stadium' }],
    location: [-84.5678, 34.0288],
    ticketmasterIds: ['KovZpZA116IA'],
    capacity: [
      { seats: 11040, setup: 'football', note: 'Official (KSU listing; equals the record). 8,300 permanent seats.' },
      { seats: 16316, setup: 'concert', note: 'Reported: seats plus ~8,000 on the field' },
    ],
    roof: 'open',
  },
  'gwinnett-field': {
    id: 'gwinnett-field',
    metroId: 'atlanta',
    // Estimated (99%): no direct bus.
    carShare: 0.99,
    names: [{ name: 'Coolray Field' }, { name: 'Gwinnett Field', from: '2026-01-01' }],
    location: [-83.9925, 34.0407],
    ticketmasterIds: ['Za5ju3rKuqZDdztf_g1FuZQILs8zHQYOWX', 'Za5ju3rKuqZBYfa7L90AZwBY6U3R4Pu5k', 'Za5ju3rKuqZDvgVh5HYIvdG5QuehFjWKUo'],
    capacity: [{ seats: 10427, setup: 'baseball', note: 'Official (MiLB). The Stripers averaged 2,694 in 2025, so most nights sit under the floor.' }],
    roof: 'open',
  },
  'bt-harvey-stadium': {
    id: 'bt-harvey-stadium',
    metroId: 'atlanta',
    names: [{ name: 'B.T. Harvey Stadium' }],
    location: [-84.4162, 33.7457],
    capacity: [{ seats: 9000, setup: 'football', note: 'Official (Morehouse)' }],
    roof: 'open',
  },
  'mccamish-pavilion': {
    id: 'mccamish-pavilion',
    metroId: 'atlanta',
    // Estimated (55–75%): a walk across campus from Midtown and North Avenue stations; little nearby parking.
    carShare: 0.65,
    names: [{ name: 'McCamish Pavilion' }],
    location: [-84.3928, 33.7806],
    ticketmasterIds: ['KovZpZAJ7ktA'],
    capacity: [{ seats: 8600, setup: 'basketball', note: 'Official (Georgia Tech): 6,935 court level and 1,665 balcony' }],
    roof: 'indoor',
  },
  'gsu-convocation-center': {
    id: 'gsu-convocation-center',
    metroId: 'atlanta',
    // Estimated (65–83%): four blocks from Georgia State station, plus a student shuttle.
    carShare: 0.73,
    names: [{ name: 'GSU Convocation Center' }],
    location: [-84.3887, 33.7425],
    ticketmasterIds: ['KovZ917AIox'],
    capacity: [
      { seats: 7300, setup: 'basketball', fromYear: 2022, note: 'Official (Georgia State); opened September 2022' },
      { seats: 8000, setup: 'concert', fromYear: 2022, note: 'Official' },
    ],
    roof: 'indoor',
  },
  'chastain-park-amphitheater': {
    id: 'chastain-park-amphitheater',
    metroId: 'atlanta',
    // Estimated (85–95%): four pay lots inside a residential park, rideshare urged.
    carShare: 0.92,
    names: [
      { name: 'Chastain Park Amphitheater' },
      { name: 'State Bank Amphitheatre at Chastain Park', from: '2018-04-04' },
      { name: 'Cadence Bank Amphitheatre at Chastain Park', from: '2019-02-21' },
      { name: 'Synovus Bank Amphitheater at Chastain Park', from: '2025-03-01' },
    ],
    // OpenStreetMap knows the street address (4469 Stella Drive), not the stage; the research read 33.876, -84.396.
    location: [-84.3965, 33.878],
    ticketmasterIds: ['KovZpZAEkAaA'],
    capacity: [{ seats: 6900, setup: 'concert', note: 'Reported; Live Nation says "nearly 7,000", mostly reserved and table seating' }],
    roof: 'open',
  },
  'forbes-arena': {
    id: 'forbes-arena',
    metroId: 'atlanta',
    names: [{ name: 'Forbes Arena' }],
    location: [-84.4171, 33.7486],
    capacity: [{ seats: 6000, setup: 'basketball', note: 'Official (Morehouse)' }],
    roof: 'indoor',
  },
  'wolf-creek-amphitheater': {
    id: 'wolf-creek-amphitheater',
    metroId: 'atlanta',
    names: [{ name: 'Wolf Creek Amphitheater' }],
    // Approximate: 3025 Merk Road SW, South Fulton; neither OpenStreetMap nor the research gave the building. Geocode before it matters.
    location: [-84.569, 33.665],
    ticketmasterIds: ['KovZpa3fme'],
    capacity: [{ seats: 5420, setup: 'concert', note: 'Reported (venue listing); 5,116 seated, older listings 5,200–5,300' }],
    roof: 'open',
  },
  'ksu-convocation-center': {
    id: 'ksu-convocation-center',
    metroId: 'atlanta',
    names: [{ name: 'KSU Convocation Center' }, { name: 'VyStar Arena' }],
    // Approximate: the research's read (34.039, -84.583); OpenStreetMap does not list the building.
    location: [-84.583, 34.039],
    capacity: [
      { seats: 3800, setup: 'basketball', note: 'Official (KSU, current); 4,600 in an older listing. Under the floor for games.' },
      { seats: 5000, setup: 'concert', note: 'Official: "5,000+" for concerts and seminars' },
    ],
    roof: 'indoor',
  },
  'panther-stadium': {
    id: 'panther-stadium',
    metroId: 'atlanta',
    names: [{ name: 'Panther Stadium' }],
    // Approximate: on the Clark Atlanta campus beside B.T. Harvey; not in OpenStreetMap, no research coordinate.
    location: [-84.413, 33.748],
    capacity: [{ seats: 5000, setup: 'football', note: 'Reported (secondary source only); exactly on the line' }],
    roof: 'open',
  },
  'gateway-center-arena': {
    id: 'gateway-center-arena',
    metroId: 'atlanta',
    // Estimated (80–92%): the ATL SkyTrain from Airport station carries a minority.
    carShare: 0.85,
    names: [{ name: 'Gateway Center Arena at College Park' }, { name: 'Gateway Center' }],
    location: [-84.4597, 33.6468],
    ticketmasterIds: ['KovZ917A-mZ'],
    capacity: [
      { seats: 3500, setup: 'basketball', fromYear: 2019, note: 'Official. Dream home games sit under the floor (Kylie, Oct 7); their State Farm Arena games count.' },
      { seats: 5000, setup: 'concert', fromYear: 2019, note: 'Official' },
    ],
    roof: 'indoor',
  },
  // ---------- Bay Area (docs/research/city-builds/bay-area/bay-area-venue-table-answer.md; car shares from docs/research/city-builds/bay-area/bay-area-city-type-answer.md), Oct 7, 2026 ----------
  // Not venue rows (Kylie, Oct 7, as for New York's Table B): the Golden Gate Park festival meadows, the Alameda County
  // Fairgrounds, Moscone, the San Jose convention center, Civic Center Plaza, Marina Green, Lake Merritt, Stern Grove,
  // Treasure Island. Their events are placed as points and sized by their own crowd.
  'levis-stadium': {
    id: 'levis-stadium',
    metroId: 'bay-area',
    // Reported ridership, estimated share (82–88%): ~15,000 VTA light-rail riders per 49ers game, about 11% of the crowd, plus ACE and Capitol Corridor.
    carShare: 0.85,
    names: [{ name: "Levi's Stadium" }],
    location: [-121.97, 37.403],
    ticketmasterIds: ['KovZpZAJaFkA'],
    capacity: [
      { seats: 68500, setup: 'football', note: 'Reported. Expandable to about 75,000 for a Super Bowl; the World Cup did not use the expansion.' },
      { seats: 68827, setup: 'soccer', note: 'Official (FIFA): the 2026 World Cup sellout; six-match average 68,558.' },
    ],
    roof: 'open',
  },
  'oakland-coliseum': {
    id: 'oakland-coliseum',
    metroId: 'bay-area',
    // Official (BART): 14% of Coliseum baseball fans rode BART, 2013–2023, plus ~1% Capitol Corridor and AC Transit.
    carShare: 0.84,
    // Name dates are approximate to the month (RingCentral 2019–2023, with a lapse in 2020).
    names: [{ name: 'Oakland–Alameda County Coliseum' }, { name: 'O.co Coliseum' }, { name: 'RingCentral Coliseum', from: '2019-07-01' }, { name: 'Oakland Coliseum', from: '2023-09-01' }],
    location: [-122.2006, 37.7517],
    ticketmasterIds: ['KovZpaKBYe', 'KovZpZA7kdnA'],
    capacity: [
      { seats: 46847, setup: 'baseball', note: "Reported (the A's tarped setup); 56,782 with the tarps off. The A's left after 2024." },
      { seats: 53200, setup: 'football', note: 'Reported (Raiders era, to 2019); expandable to 63,132.' },
      { seats: 15000, setup: 'soccer', note: "Reported listed configuration; the Roots' 2025 opener drew 26,000+ with more sections open, so this is not a cap. The Roots leave after Oct 10, 2026." },
      { seats: 47416, setup: 'concert', note: 'Reported; 64,829 in another layout.' },
    ],
    roof: 'open',
  },
  'california-memorial-stadium': {
    id: 'california-memorial-stadium',
    metroId: 'bay-area',
    // Estimated (50–70%): hillside with almost no on-site parking; Downtown Berkeley BART with a free shuttle; students walk.
    carShare: 0.6,
    names: [{ name: 'California Memorial Stadium' }],
    location: [-122.2508, 37.8711],
    ticketmasterIds: ['KovZpZA1EFtA'],
    capacity: [
      { seats: 62467, setup: 'football', note: 'Reported, full bowl; 63,186 official at the 2013 reopening.' },
      { seats: 52428, setup: 'football', fromYear: 2024, note: 'Reported, south end tarped; one source dates the tarp to 2022.' },
    ],
    roof: 'open',
  },
  'stanford-stadium': {
    id: 'stanford-stadium',
    metroId: 'bay-area',
    // Estimated: large campus lots; Caltrain stops at the stadium on weekend games.
    carShare: 0.85,
    names: [{ name: 'Stanford Stadium' }],
    location: [-122.1619, 37.4345],
    ticketmasterIds: ['KovZpZA7elEA'],
    capacity: [{ seats: 50424, setup: 'football', note: 'Reported, since 2013. The Earthquakes play one match a year in the same bowl.' }],
    roof: 'open',
  },
  'oracle-park': {
    id: 'oracle-park',
    metroId: 'bay-area',
    // Reported (the Giants, 2026): nearly half of fans arrive by bus, train, ferry, bike, scooter or on foot.
    carShare: 0.5,
    names: [{ name: 'AT&T Park' }, { name: 'Oracle Park', from: '2019-01-10' }],
    location: [-122.3894, 37.7786],
    ticketmasterIds: ['KovZpZAJF7EA'],
    capacity: [{ seats: 41265, setup: 'baseball', note: 'Reported (Ticketmaster); seat-map sites say 41,915. The Giants publish neither.' }],
    roof: 'open',
  },
  'shoreline-amphitheatre': {
    id: 'shoreline-amphitheatre',
    metroId: 'bay-area',
    // Estimated: on-site lots included in most tickets; no rail within walking distance.
    carShare: 0.95,
    names: [{ name: 'Shoreline Amphitheatre' }],
    location: [-122.0806, 37.4269],
    ticketmasterIds: ['KovZpZA6ta1A', 'Za5ju3rKuqZDe8DDXnaNgvTnavScoZoPy9'],
    capacity: [{ seats: 22500, setup: 'concert', note: 'Reported: 6,500 reserved seats plus 16,000 lawn; up to 30,000 as a festival with parking-lot stages.' }],
    roof: 'covered',
  },
  'oakland-arena': {
    id: 'oakland-arena',
    metroId: 'bay-area',
    // Estimated (comparable: the Coliseum next door, which shares its lots and BART station).
    carShare: 0.8,
    names: [{ name: 'Oracle Arena' }, { name: 'Oakland Arena', from: '2019-07-01' }],
    location: [-122.2029, 37.7503],
    ticketmasterIds: ['KovZpZAJe6nA'],
    capacity: [
      { seats: 19596, setup: 'basketball', note: 'Reported; no tenant since the Warriors left in 2019.' },
      { seats: 19596, setup: 'concert', note: 'Reported; TheStadiumBusiness says 19,200 (2026). Oak View Group is pricing a renovation.' },
    ],
    roof: 'indoor',
  },
  'sap-center': {
    id: 'sap-center',
    metroId: 'bay-area',
    // Estimated (80–90%): Diridon Station across the street, but no observed survey; 4,850 contracted spaces nearby.
    carShare: 0.85,
    names: [{ name: 'SAP Center' }],
    location: [-121.9011, 37.3328],
    ticketmasterIds: ['Za5ju3rKuqZymCqU5fgF9FIezqgkI4FU', 'KovZpZAJelvA', 'KovZ917AOAf'],
    capacity: [
      { seats: 17562, setup: 'hockey', note: 'Reported, 2001–2023' },
      { seats: 17435, setup: 'hockey', fromYear: 2023, note: 'Reported, after a penthouse-lounge conversion; a phased renovation from 2026 will change it again.' },
      { seats: 18543, setup: 'basketball', note: 'Reported' },
      { seats: 18500, setup: 'concert', note: 'Reported (Ticketmaster), end-stage; 19,190 in the round.' },
    ],
    roof: 'indoor',
  },
  'chase-center': {
    id: 'chase-center',
    metroId: 'bay-area',
    // Reported (Warriors, 2019: 35% by light rail) and the 2015 plan's cap of 53–59% by car; estimated 45–55%.
    carShare: 0.5,
    names: [{ name: 'Chase Center' }],
    location: [-122.3874, 37.7679],
    ticketmasterIds: ['KovZ917Ah1H'],
    capacity: [
      { seats: 18064, setup: 'basketball', note: 'Official: both the Warriors and the Valkyries announce sellouts at this number.' },
      { seats: 19500, setup: 'concert', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'cefcu-stadium': {
    id: 'cefcu-stadium',
    metroId: 'bay-area',
    // Estimated: city streets south of downtown; no survey.
    carShare: 0.85,
    names: [{ name: 'Spartan Stadium' }, { name: 'CEFCU Stadium', from: '2016-09-10' }],
    location: [-121.8683, 37.3197],
    ticketmasterIds: ['KovZpa3nBe'],
    capacity: [
      { seats: 30456, setup: 'football', note: 'Reported, 1998–2018. Many sites still show this figure; it is stale.' },
      { seats: 21520, setup: 'football', fromYear: 2019, note: 'Reported, during the east-side rebuild' },
      { seats: 18203, setup: 'football', fromYear: 2021, note: 'Reported' },
    ],
    roof: 'open',
  },
  'paypal-park': {
    id: 'paypal-park',
    metroId: 'bay-area',
    // Estimated: Bay FC says driving is the go-to; Caltrain counted ~850 riders per match in 2026.
    carShare: 0.9,
    names: [{ name: 'Avaya Stadium' }, { name: 'Earthquakes Stadium', from: '2020-07-01' }, { name: 'PayPal Park', from: '2021-02-01' }],
    location: [-121.9246, 37.3513],
    ticketmasterIds: ['Za5ju3rKuqZDe9PGZkq4udohdzgoU8O065', 'KovZpZAEvF6A'],
    capacity: [{ seats: 18000, setup: 'soccer', note: 'Official (Bay FC). A canopy covers the stands; the field is open.' }],
    roof: 'open',
  },
  'cow-palace': {
    id: 'cow-palace',
    metroId: 'bay-area',
    // Estimated: on-site lots; Balboa Park BART is a long walk.
    carShare: 0.88,
    names: [{ name: 'Cow Palace' }],
    location: [-122.4202, 37.7062],
    ticketmasterIds: ['KovZpZAFktvA'],
    capacity: [
      { seats: 16500, setup: 'concert', note: 'Reported' },
      { seats: 14000, setup: 'basketball', note: 'Reported' },
      { seats: 13550, setup: 'hockey', note: 'Reported' },
    ],
    roof: 'indoor',
  },
  'toyota-pavilion-concord': {
    id: 'toyota-pavilion-concord',
    metroId: 'bay-area',
    // Estimated (comparable: Shoreline); hillside site on one road, Concord BART several km away.
    carShare: 0.95,
    names: [{ name: 'Concord Pavilion' }, { name: 'Toyota Pavilion at Concord', from: '2023-07-01' }],
    location: [-121.9404, 37.96],
    capacity: [{ seats: 12500, setup: 'concert', note: 'Reported, covered seats plus lawn; the split is not published. The Toyota name runs to about the end of 2027.' }],
    roof: 'covered',
  },
  'haas-pavilion': {
    id: 'haas-pavilion',
    metroId: 'bay-area',
    // Estimated (comparable: Cal football, with more students walking); Downtown Berkeley BART ten minutes away.
    carShare: 0.55,
    names: [{ name: 'Haas Pavilion' }],
    location: [-122.2622, 37.8694],
    ticketmasterIds: ['KovZpZA1JlkA'],
    capacity: [{ seats: 11858, setup: 'basketball', note: "Reported, since 2015; Cal's own older page says 11,877." }],
    roof: 'indoor',
  },
  'kezar-stadium': {
    id: 'kezar-stadium',
    metroId: 'bay-area',
    // Estimated, ours (not in the research): city streets at the park's edge, Muni N Judah nearby; comparable to Haas and the Greek.
    carShare: 0.55,
    names: [{ name: 'Kezar Stadium' }],
    location: [-122.456, 37.7669],
    capacity: [
      { seats: 10000, setup: 'football', note: "Official (SF Rec & Park); \"over 9,000\" reported. Golden City FC's seat upgrades may lower it." },
      { seats: 10000, setup: 'soccer', note: 'Official (SF Rec & Park)' },
    ],
    roof: 'open',
  },
  'greek-theatre-berkeley': {
    id: 'greek-theatre-berkeley',
    metroId: 'bay-area',
    // Estimated (comparable: Cal football, same campus and station).
    carShare: 0.6,
    names: [{ name: 'Hearst Greek Theatre' }, { name: 'Greek Theatre' }],
    location: [-122.2542, 37.8737],
    ticketmasterIds: ['KovZpZAFadlA'],
    capacity: [{ seats: 8500, setup: 'concert', note: 'Official (Cal Performances), general admission: 6,500 bowl plus 2,000 lawn; 7,250 seated.' }],
    roof: 'open',
  },
  'bill-graham-civic': {
    id: 'bill-graham-civic',
    metroId: 'bay-area',
    // Estimated (comparable: Oracle and Chase, with a better station and less parking); Civic Center BART across the street.
    carShare: 0.4,
    names: [{ name: 'Bill Graham Civic Auditorium' }],
    location: [-122.4173, 37.7781],
    ticketmasterIds: ['KovZpaKope'],
    capacity: [{ seats: 8500, setup: 'concert', note: 'Reported, general-admission floor plus seated balcony; the all-seated figure is unpublished.' }],
    roof: 'indoor',
  },
  'frost-amphitheater': {
    id: 'frost-amphitheater',
    metroId: 'bay-area',
    // Estimated: paid campus lot; Palo Alto Caltrain a 20-minute walk, with shows timed to the trains.
    carShare: 0.75,
    names: [{ name: 'Frost Amphitheater' }],
    // Approximate (research); OpenStreetMap does not know the venue by name.
    location: [-122.1663, 37.4296],
    ticketmasterIds: ['KovZ917AVNY'],
    capacity: [{ seats: 8000, setup: 'concert', note: 'Reported; rebuilt and reopened 2019' }],
    roof: 'open',
  },
  'maples-pavilion': {
    id: 'maples-pavilion',
    metroId: 'bay-area',
    // Estimated (comparable: Stanford Stadium).
    carShare: 0.85,
    names: [{ name: 'Maples Pavilion' }],
    location: [-122.1605, 37.4295],
    ticketmasterIds: ['KovZpZA1EFnA'],
    capacity: [{ seats: 7233, setup: 'basketball', note: 'Reported, citing Stanford' }],
    roof: 'indoor',
  },
  // ---------- Philadelphia (docs/research/city-builds/philadelphia/; register Oct 12, 2026) ----------
  // Hub city type; Sports Complex venues share NRG station, SCSSD lots and Pattison/Broad approaches (gridlock zones them within ~2 km).
  // carShare on the rows below comes from docs/research/city-builds/philadelphia/philadelphia-city-type-answer.md (estimated/derived, not measured).
  'lincoln-financial-field': {
    id: 'lincoln-financial-field',
    metroId: 'philadelphia',
    carShare: 0.74,
    names: [{ name: 'Lincoln Financial Field' }],
    location: [-75.1674892, 39.9009099],
    capacity: [
      {
        seats: 69879,
        setup: 'football',
        note: 'Official. Eagles 2025 media guide 69,879; other published figures differ without changing the 5,000+ line. Source: https://media.eagles.1rmg.com/wp-content/uploads/2020/03/26135907/Lincoln-Financial-Field-2025-3.pdf',
      },
    ],
    roof: 'open',
  },
  'citizens-bank-park': {
    id: 'citizens-bank-park',
    metroId: 'philadelphia',
    carShare: 0.81,
    names: [{ name: 'Citizens Bank Park' }],
    location: [-75.1664804, 39.9059221],
    capacity: [
      {
        seats: 42901,
        setup: 'baseball',
        fromYear: 2023,
        note: 'Reported. 42,901 from 2023; earlier 43,035 and 43,651. Standing room can push attendance above capacity. Source: https://en.wikipedia.org/wiki/Citizens_Bank_Park',
      },
    ],
    roof: 'open',
  },
  'xfinity-mobile-arena': {
    id: 'xfinity-mobile-arena',
    metroId: 'philadelphia',
    carShare: 0.8,
    names: [
      { name: 'Wells Fargo Center' },
      { name: 'Xfinity Mobile Arena', from: '2025-09-01' },
    ],
    location: [-75.1720165, 39.9011004],
    capacity: [
      { seats: 20478, setup: 'basketball', note: 'Reported. 20,478 (21,305 with standing room). Source: https://en.wikipedia.org/wiki/Xfinity_Mobile_Arena' },
      { seats: 19173, setup: 'hockey', note: 'Reported. 19,173 (20,000 with standing room). Source: https://en.wikipedia.org/wiki/Xfinity_Mobile_Arena' },
      { seats: 21000, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/Xfinity_Mobile_Arena' },
    ],
    roof: 'indoor',
  },
  'penn-franklin-field': {
    id: 'penn-franklin-field',
    metroId: 'philadelphia',
    names: [{ name: 'Franklin Field' }],
    location: [-75.1899748, 39.950067],
    capacity: [
      {
        seats: 52958,
        setup: 'football',
        note: 'Reported. 52,958 football/track; Penn Athletics rental page lists 40,000 (may be rentable subset). Source: https://en.wikipedia.org/wiki/Franklin_Field',
      },
    ],
    roof: 'open',
  },
  'subaru-park': {
    id: 'subaru-park',
    metroId: 'philadelphia',
    carShare: 0.93,
    names: [{ name: 'Talen Energy Stadium' }, { name: 'Subaru Park', from: '2020-01-01' }],
    location: [-75.3784739, 39.8329094],
    capacity: [
      { seats: 18500, setup: 'soccer', note: 'Official/reported. 18,500 soccer. Source: https://en.wikipedia.org/wiki/Subaru_Park' },
      { seats: 26000, setup: 'concert', note: 'Reported. Field standing included; not seated capacity. Source: https://phillyvoice.com/subaru-park-chester-union-speakeasy-club-seating-expansion' },
    ],
    roof: 'open',
  },
  'freedom-mortgage-pavilion': {
    id: 'freedom-mortgage-pavilion',
    metroId: 'philadelphia',
    carShare: 0.88,
    names: [
      { name: 'BB&T Pavilion' },
      { name: 'Waterfront Music Pavilion', from: '2022-02-01' },
      { name: 'Freedom Mortgage Pavilion', from: '2022-05-11' },
    ],
    location: [-75.129816, 39.940706],
    capacity: [
      { seats: 25488, setup: 'concert', note: 'Reported. Summer amphitheatre pit/reserved/lawn; do not sum with winter figure. Source: https://en.wikipedia.org/wiki/Freedom_Mortgage_Pavilion' },
      { seats: 7000, setup: 'concert', note: 'Reported. Winter enclosed theatre configuration of the same building. Source: https://en.wikipedia.org/wiki/Freedom_Mortgage_Pavilion' },
    ],
    roof: 'open',
  },
  'mann-td-pavilion': {
    id: 'mann-td-pavilion',
    metroId: 'philadelphia',
    carShare: 0.88,
    names: [
      { name: 'Mann Center for the Performing Arts' },
      { name: 'TD Pavilion at the Mann', from: '2020-01-01' },
      { name: 'Highmark Mann TD Pavilion', from: '2025-10-15' },
    ],
    location: [-75.2229615, 39.9832572],
    capacity: [
      {
        seats: 13000,
        setup: 'concert',
        note: 'Official. ~13,000 full shed (4,500 roof + terrace + lawn); roof-only 4,500 is below 5,000. Festival grounds mode is a separate event, not this row. Source: https://manncenter.org/rentals/spaces',
      },
    ],
    roof: 'open',
  },
  'mann-skyline-stage': {
    id: 'mann-skyline-stage',
    metroId: 'philadelphia',
    names: [
      { name: 'Skyline Stage' },
      { name: 'Highmark Skyline Stage', from: '2024-01-01' },
    ],
    location: [-75.2229615, 39.9832572],
    capacity: [
      {
        seats: 6500,
        setup: 'concert',
        note: 'Reported. Official range 3,000–7,500 GA lawn; Wikipedia cites 6,500. Straddles the 5,000 friction line by setup. Source: https://manncenter.org/rentals/spaces',
      },
    ],
    roof: 'open',
  },
  'villanova-stadium': {
    id: 'villanova-stadium',
    metroId: 'philadelphia',
    names: [{ name: 'Villanova Stadium' }],
    location: [-75.3366393, 40.0330101],
    capacity: [{ seats: 12500, setup: 'football', note: 'Reported. No official university figure retrieved. Source: https://stadiumjourney.com/stadiums/villanova-stadium-s1330' }],
    roof: 'open',
  },
  'liacouras-center': {
    id: 'liacouras-center',
    metroId: 'philadelphia',
    names: [{ name: 'Liacouras Center' }],
    location: [-75.1585825, 39.9798139],
    capacity: [
      { seats: 10206, setup: 'basketball', note: 'Reported. Source: https://en.wikipedia.org/wiki/Liacouras_Center' },
      { seats: 5000, setup: 'concert', note: 'Reported. Esther Boyer theater mode; can fall below 5,000. Source: https://sportsinpa.com/node/165' },
    ],
    roof: 'indoor',
  },
  'the-palestra': {
    id: 'the-palestra',
    metroId: 'philadelphia',
    names: [{ name: 'The Palestra' }],
    location: [-75.1886362, 39.9514018],
    capacity: [{ seats: 8725, setup: 'basketball', note: 'Reported. Source: https://en.wikipedia.org/wiki/Palestra' }],
    roof: 'indoor',
  },
  'finneran-pavilion': {
    id: 'finneran-pavilion',
    metroId: 'philadelphia',
    names: [{ name: 'The Pavilion' }, { name: 'Finneran Pavilion', from: '2018-10-05' }],
    location: [-75.3365756, 40.0340472],
    capacity: [{ seats: 6501, setup: 'basketball', note: 'Official. 6,500 plus the Lone Chair. Source: https://villanova.com/sports/2024/8/5/finneran-pavilion' }],
    roof: 'indoor',
  },
  'dell-music-center': {
    id: 'dell-music-center',
    metroId: 'philadelphia',
    names: [{ name: 'Robin Hood Dell East' }, { name: 'Dell Music Center' }],
    location: [-75.1889115, 39.9962783],
    capacity: [
      {
        seats: 5884,
        setup: 'concert',
        note: 'Official. 5,284 reserved + 600 lawn (about-us page says 5,344 + 600). Reserved alone exceeds 5,000. Source: https://thedellmusiccenter.com/venue/sponsors/',
      },
    ],
    roof: 'open',
  },
  'the-met-philadelphia': {
    id: 'the-met-philadelphia',
    metroId: 'philadelphia',
    names: [{ name: 'The Met Philadelphia' }],
    location: [-75.160297, 39.9698309],
    capacity: [{ seats: 3400, setup: 'concert', note: 'Reported. 3,400 seated / 4,000 GA. Source: https://www.prosoundweb.com/everything-in-the-right-place-audio-helps-revitalize-a-venerable-philadelphia-theater/' }],
    roof: 'indoor',
  },
  'franklin-music-hall': {
    id: 'franklin-music-hall',
    metroId: 'philadelphia',
    names: [{ name: 'Electric Factory' }, { name: 'Franklin Music Hall' }],
    location: [-75.1496846, 39.9591981],
    capacity: [{ seats: 2700, setup: 'concert', note: 'Reported. Source: https://thetriangle.org/article/a-guide-to-philadelphia-music-venues' }],
    roof: 'indoor',
  },
  'academy-of-music': {
    id: 'academy-of-music',
    metroId: 'philadelphia',
    names: [{ name: 'Academy of Music' }],
    location: [-75.165197, 39.9480186],
    capacity: [{ seats: 2600, setup: 'concert', note: 'Official. Ensemble Arts rentals page; re-verify URL slug. Source: https://kimmelcenter.org/rent-our-venues/stages/commonwealth-plaza/' }],
    roof: 'indoor',
  },
  'fillmore-philadelphia': {
    id: 'fillmore-philadelphia',
    metroId: 'philadelphia',
    names: [{ name: 'The Fillmore Philadelphia' }],
    location: [-75.1349058, 39.9655391],
    capacity: [{ seats: 2500, setup: 'concert', note: 'Reported. The Foundry (450) is a separate room in the same building. Source: https://www.redbull.com/us-en/top-music-venues-in-philadelphia' }],
    roof: 'indoor',
  },
  'marian-anderson-hall': {
    id: 'marian-anderson-hall',
    metroId: 'philadelphia',
    names: [{ name: 'Verizon Hall' }, { name: 'Marian Anderson Hall', from: '2024-06-08' }],
    location: [-75.1657393, 39.9467456],
    capacity: [{ seats: 2500, setup: 'concert', note: 'Reported. Perelman Theater (650) is a separate sub-1,000 room. Source: https://en.wikipedia.org/wiki/Kimmel_Center_for_the_Performing_Arts' }],
    roof: 'indoor',
  },
  'hagan-arena': {
    id: 'hagan-arena',
    metroId: 'philadelphia',
    names: [{ name: 'Hagan Arena' }],
    location: [-75.234862, 39.9956149],
    capacity: [{ seats: 4200, setup: 'basketball', note: 'Reported. Below the 5,000 friction line. Source: https://wikipedia.com/wiki/Hagan_Arena' }],
    roof: 'indoor',
  },
  'john-glaser-arena': {
    id: 'john-glaser-arena',
    metroId: 'philadelphia',
    names: [{ name: 'Tom Gola Arena' }, { name: 'John Glaser Arena', from: '2024-10-01' }],
    // Approximate; La Salle athletics zone — exact gym point unverified in research.
    location: [-75.237, 40.038],
    capacity: [{ seats: 3000, setup: 'basketball', note: 'Reported. Source: https://en.wikipedia.org/wiki/John_Glaser_Arena' }],
    roof: 'indoor',
  },
  'xcite-center-parx': {
    id: 'xcite-center-parx',
    metroId: 'philadelphia',
    names: [{ name: 'Xcite Center at Parx Casino' }],
    location: [-74.9527098, 40.1185328],
    capacity: [{ seats: 1500, setup: 'concert', note: 'Reported. Shares Parx Racing grounds; racetrack crowds are separate Table B events. Source: https://www.visitphilly.com/?p=4472' }],
    roof: 'indoor',
  },
  'keswick-theatre': {
    id: 'keswick-theatre',
    metroId: 'philadelphia',
    names: [{ name: 'Keswick Theatre' }],
    location: [-75.1468196, 40.1064112],
    capacity: [{ seats: 1361, setup: 'concert', note: 'Official. 1,300 seated; 1,361 max. Source: https://www.aegsev.com/keswick-theatre' }],
    roof: 'indoor',
  },
  'union-transfer': {
    id: 'union-transfer',
    metroId: 'philadelphia',
    names: [{ name: 'Union Transfer' }],
    location: [-75.1553446, 39.9613822],
    capacity: [{ seats: 1200, setup: 'concert', note: 'Reported. Near the ~1,000 pre-list line. Source: https://www.axs.com/us/category/cities/4560349/philadelphia-pa' }],
    roof: 'indoor',
  },
  // Edge tier (New Castle County, Wilmington division) — in the MSA, flagged in the implementation register.
  'delaware-stadium': {
    id: 'delaware-stadium',
    metroId: 'philadelphia',
    names: [{ name: 'Delaware Stadium' }],
    location: [-75.7488991, 39.6616707],
    capacity: [
      {
        seats: 18500,
        setup: 'football',
        note: 'Reported. Conflict with university 22,000 claim. Source: https://en.wikipedia.org/wiki/Delaware_Stadium',
      },
    ],
    roof: 'open',
  },
  'frawley-stadium': {
    id: 'frawley-stadium',
    metroId: 'philadelphia',
    names: [{ name: 'Daniel S. Frawley Stadium' }, { name: 'Frawley Stadium' }],
    location: [-75.5650384, 39.732192],
    capacity: [{ seats: 6404, setup: 'baseball', fromYear: 2016, note: 'Reported. 6,404 from 2016. Source: https://en.wikipedia.org/wiki/Daniel_S._Frawley_Stadium' }],
    roof: 'open',
  },
  'bob-carpenter-center': {
    id: 'bob-carpenter-center',
    metroId: 'philadelphia',
    names: [{ name: 'Bob Carpenter Center' }, { name: 'Acierno Arena' }],
    location: [-75.7503678, 39.660293],
    capacity: [{ seats: 5000, setup: 'basketball', note: 'Reported/official. Exactly at the friction threshold. Source: https://bluehens.com/sports/2023/11/3/delaware-stadium' }],
    roof: 'indoor',
  },

  'provident-event-center': {
    id: 'provident-event-center',
    metroId: 'bay-area',
    // Estimated, ours (not in the research): downtown campus; comparable to CEFCU Stadium.
    carShare: 0.85,
    names: [{ name: 'Event Center at San José State' }, { name: 'Provident Credit Union Event Center', from: '2019-09-01' }],
    // Approximate (research); OpenStreetMap does not know the venue by name.
    location: [-121.8794, 37.3352],
    ticketmasterIds: ['KovZpZAJeFeA'],
    capacity: [
      { seats: 5000, setup: 'basketball', note: 'Official (SJSU)' },
      { seats: 6000, setup: 'concert', note: 'Official (SJSU): "over 6,000"' },
    ],
    roof: 'indoor',
  },
  // Nashville (docs/research/city-builds/nashville/nashville-venue-table-answer.md, Oct 12, 2026).
  // MSA core: Davidson, Rutherford (Murfreesboro), Williamson (Thompson's Station) and Wilson (Lebanon).
  // Clarksville is a separate MSA and is not here. No carShare overrides (estimates stay in the research).
  // Coordinates are OpenStreetMap by name unless the note says otherwise.
  'nissan-stadium': {
    id: 'nissan-stadium',
    metroId: 'nashville',
    names: [{ name: 'Nissan Stadium' }],
    location: [-86.7713148, 36.1665236],
    capacity: [
      {
        seats: 69143,
        setup: 'football',
        fromYear: 2006,
        note: 'Reported. Listed since 2006. This 1999 building closes after the Jan 3, 2027 game. The 2027 enclosed stadium is a different building and is not this row. Source: https://blog.ticketmaster.com/step-inside-nissan-stadium-nashville-tn',
      },
      {
        seats: 71000,
        setup: 'concert',
        note: 'Reported expanded concerts and special events. Not added to the football figure. Source: https://blog.ticketmaster.com/step-inside-nissan-stadium-nashville-tn',
      },
    ],
    roof: 'open',
  },
  'geodis-park': {
    id: 'geodis-park',
    metroId: 'nashville',
    names: [{ name: 'GEODIS Park', from: '2022-03-01' }],
    location: [-86.7659442, 36.130025],
    capacity: [
      {
        seats: 30000,
        setup: 'soccer',
        note: 'Reported, structural engineer. Architect lists 30,100. Conflict preserved. Source: https://www.walterpmoore.com/node/10854',
      },
      {
        seats: 27000,
        setup: 'concert',
        note: 'Reported. Source: https://soccerstadiumdigest.com/2022/05/an-inside-look-at-geodis-park-new-nashville-sc-home/',
      },
    ],
    roof: 'open',
  },
  'firstbank-stadium': {
    id: 'firstbank-stadium',
    metroId: 'nashville',
    names: [
      { name: 'Dudley Field' },
      { name: 'Vanderbilt Stadium' },
      { name: 'FirstBank Stadium', from: '2022-01-01' },
    ],
    // OSM knows the site as Dudley Field (the historic name), not FirstBank Stadium.
    location: [-86.8089081, 36.1440212],
    capacity: [
      {
        seats: 40350,
        setup: 'football',
        note: 'Official Vanderbilt page, which the research calls stale after the renovation. Also cited as 40,305 before the 2023 cap. Source: https://vucommodores.com/firstbank-stadium/',
      },
      {
        seats: 28500,
        setup: 'football',
        fromYear: 2023,
        note: 'Reported construction-period cap. A 2024 addition of 600 seats was not published as a new total, so 2024 stays on this figure. Source: https://aol.com/kentucky-football-fans-know-vandy-181438001.html',
      },
      {
        seats: 35000,
        setup: 'football',
        fromYear: 2025,
        note: 'Reported after the 2025 south end zone. The official page still lists 40,350. Conflict preserved. Source: https://www.inforum.com/opinion/columns/mcfeely-nashvilles-home-for-fcs-title-game-is-beautiful-hallowed-ground',
      },
    ],
    roof: 'open',
  },
  'floyd-stadium': {
    id: 'floyd-stadium',
    metroId: 'nashville',
    names: [{ name: 'Horace Jones Field' }, { name: 'Johnny "Red" Floyd Stadium' }],
    location: [-86.3682714, 35.8512874],
    capacity: [
      {
        seats: 27303,
        setup: 'football',
        note: 'Official current figure. Official 2021 figure was 30,788; the year of the drop was not stated, so that older total is not a dated row. West-side work after the 2026 season does not publish a new total. Source: https://goblueraiders.com/sports/2014/7/9/FB_0709140906',
      },
    ],
    roof: 'open',
  },
  'nashville-superspeedway': {
    id: 'nashville-superspeedway',
    metroId: 'nashville',
    names: [{ name: 'Nashville Superspeedway' }],
    // OSM places the track in Rutherford County; the research places it in Lebanon, Wilson County.
    location: [-86.4101499, 36.0456319],
    capacity: [
      {
        seats: 25000,
        setup: 'racing',
        note: 'Reported permanent seating, sourced to a 2015 NASCAR page and treated as stale. A 150,000 portable-seating claim is unverified and not used. Source: https://en.wikipedia.org/wiki/2026_Cracker_Barrel_400',
      },
    ],
    roof: 'open',
  },
  'firstbank-amphitheater': {
    id: 'firstbank-amphitheater',
    metroId: 'nashville',
    names: [{ name: 'FirstBank Amphitheater' }],
    // OSM did not name the stage. Coordinate is the research Wikipedia point.
    location: [-86.840156, 35.81034],
    capacity: [
      {
        seats: 7500,
        setup: 'concert',
        note: 'Official maximum. Planned as 5,000 in 2015; that figure is superseded. Source: https://www.firstbankamphitheater.com/',
      },
    ],
    roof: 'open',
  },
  'grand-ole-opry-house': {
    id: 'grand-ole-opry-house',
    metroId: 'nashville',
    names: [{ name: 'Grand Ole Opry House' }],
    location: [-86.6918054, 36.2069577],
    capacity: [
      {
        seats: 4000,
        setup: 'concert',
        note: 'Official owner figure. A guide adds the sections to about 4,400. Conflict preserved; the owner figure is the one stored. Source: https://ryman.com/plan-your-visit',
      },
    ],
    roof: 'indoor',
  },
  'gentry-center': {
    id: 'gentry-center',
    metroId: 'nashville',
    names: [{ name: 'Howard Gentry Complex' }, { name: 'Gentry Center' }],
    // OSM names the athletic complex, not a surveyed arena interior.
    location: [-86.8291663, 36.1689456],
    capacity: [
      {
        seats: 10500,
        setup: 'basketball',
        note: 'Reported. The official figure was not verified in the research. Source: https://www.stadiumjourney.com/stadiums/gentry-center-s629',
      },
    ],
    roof: 'indoor',
  },
  'allen-arena': {
    id: 'allen-arena',
    metroId: 'nashville',
    names: [{ name: 'Allen Arena' }],
    location: [-86.7989111, 36.1037647],
    capacity: [
      {
        seats: 5028,
        setup: 'basketball',
        note: 'Reported basketball. Concerts are reported as a range, 3,845–5,584, which is not one figure and is not stored. The room straddles 5,000. Source: https://en.wikipedia.org/wiki/Allen_Arena',
      },
    ],
    roof: 'indoor',
  },
  'bridgestone-arena': {
    id: 'bridgestone-arena',
    metroId: 'nashville',
    names: [{ name: 'Bridgestone Arena' }],
    location: [-86.7783819, 36.1589806],
    capacity: [
      {
        seats: 17159,
        setup: 'hockey',
        note: 'Reported. Conflicts with 17,113. Source: https://en.wikipedia.org/wiki/Bridgestone_Arena',
      },
      {
        seats: 19395,
        setup: 'basketball',
        note: 'Reported. Ticketmaster guide lists 18,500. Conflict preserved. Source: https://en.wikipedia.org/wiki/Bridgestone_Arena',
      },
      {
        seats: 10000,
        setup: 'concert',
        note: 'Reported half-house. Source: https://en.wikipedia.org/wiki/Bridgestone_Arena',
      },
      {
        seats: 20000,
        setup: 'concert',
        note: 'Reported center-stage. Source: https://en.wikipedia.org/wiki/Bridgestone_Arena',
      },
      {
        seats: 18500,
        setup: 'concert',
        note: 'Reported end-stage, the usual concert layout. Half-house 10,000 and center-stage 20,000 are stored as other concert rows; the last concert row is the one a concert uses. Source: https://en.wikipedia.org/wiki/Bridgestone_Arena',
      },
    ],
    roof: 'indoor',
  },
  'vanderbilt-memorial-gymnasium': {
    id: 'vanderbilt-memorial-gymnasium',
    metroId: 'nashville',
    names: [{ name: 'Memorial Gymnasium' }],
    location: [-86.8072775, 36.1445214],
    capacity: [
      {
        seats: 14316,
        setup: 'basketball',
        note: 'Official. An encyclopedia lists 14,326. Conflict preserved. Source: https://vucommodores.com/facilities/historic-memorial-gymnasium',
      },
    ],
    roof: 'indoor',
  },
  'murphy-center': {
    id: 'murphy-center',
    metroId: 'nashville',
    names: [{ name: 'Monte Hale Arena' }, { name: 'Murphy Center' }],
    location: [-86.3695467, 35.852395],
    capacity: [
      {
        seats: 11802,
        setup: 'basketball',
        note: 'Official. A guide lists 11,520. Conflict preserved. Source: https://goblueraiders.com/facilities/?id=21',
      },
    ],
    roof: 'indoor',
  },
  'first-horizon-park': {
    id: 'first-horizon-park',
    metroId: 'nashville',
    names: [
      { name: 'First Tennessee Park' },
      { name: 'First Horizon Park', from: '2019-01-01' },
    ],
    location: [-86.7845981, 36.1725225],
    capacity: [
      {
        seats: 8500,
        standing: 10000,
        setup: 'baseball',
        note: 'Official media guide total is 10,000, made of 8,500 fixed seats plus a berm. The berm is lawn, not seats. Source: https://img.mlbstatic.com/milb-images/image/upload/milb/lqxufuhmmyj8cdu68qe9.pdf',
      },
    ],
    roof: 'open',
  },
  'nashville-municipal-auditorium': {
    id: 'nashville-municipal-auditorium',
    metroId: 'nashville',
    names: [{ name: 'Nashville Municipal Auditorium' }],
    location: [-86.7821984, 36.1673832],
    capacity: [
      {
        seats: 9700,
        setup: 'concert',
        note: 'Reported in the round. Reserved in the round is 9,432. Source: https://en.wikipedia.org/wiki/Nashville_Municipal_Auditorium',
      },
      {
        seats: 8000,
        setup: 'basketball',
        note: 'Reported. Source: https://en.wikipedia.org/wiki/Nashville_Municipal_Auditorium',
      },
    ],
    roof: 'indoor',
  },
  'ascend-amphitheater': {
    id: 'ascend-amphitheater',
    metroId: 'nashville',
    names: [{ name: 'Ascend Amphitheater' }],
    location: [-86.7718452, 36.1598799],
    capacity: [
      {
        seats: 2300,
        setup: 'concert',
        note: 'Reported fixed seats only. Source: https://en.wikipedia.org/wiki/Ascend_Amphitheater',
      },
      {
        seats: 6800,
        setup: 'concert',
        note: 'Reported total with the lawn (2,300 seated + 4,500 lawn). Not a seated count. The room is under 5,000 without the lawn. Source: https://en.wikipedia.org/wiki/Ascend_Amphitheater',
      },
    ],
    roof: 'open',
  },
  'curb-event-center': {
    id: 'curb-event-center',
    metroId: 'nashville',
    names: [{ name: 'Curb Event Center' }],
    // OSM did not name the arena. Coordinate is the research Wikipedia point. A second address (1801 Edgehill Ave) is unresolved.
    location: [-86.79444444, 36.13222222],
    capacity: [
      {
        seats: 5085,
        setup: 'basketball',
        note: 'Reported sports. Source: https://en.wikipedia.org/wiki/Curb_Event_Center',
      },
      {
        seats: 5500,
        setup: 'concert',
        note: 'Official theatre-style. Opening concert layouts were a range, 2,400–6,000 (2003), not one figure. The room straddles 5,000. Source: https://www.belmont.edu/strategic-venues/venues/curb.html',
      },
    ],
    roof: 'indoor',
  },
  'pinnacle-nashville': {
    id: 'pinnacle-nashville',
    metroId: 'nashville',
    names: [{ name: 'The Pinnacle' }],
    location: [-86.7849304, 36.1601131],
    capacity: [
      {
        seats: 4500,
        setup: 'concert',
        note: 'Official maximum. Under 5,000. Source: https://www.nashvilleyards.com/?p=3047',
      },
    ],
    roof: 'indoor',
  },
  'the-truth-nashville': {
    id: 'the-truth-nashville',
    metroId: 'nashville',
    names: [{ name: 'The Truth' }],
    // OSM has the street address (440 Chestnut St), not a named venue. Opened Oct 1, 2026.
    location: [-86.7684688, 36.1442267],
    capacity: [
      {
        seats: 4400,
        setup: 'concert',
        note: 'Official. Seated versus standing split is unknown. The Vinyl Room (up to 300) is a separate room and is not this one. Source: https://news.livenationentertainment.com/news/the-truth-announces-miranda-lambert-one-night-only-for-october-1-opening-night',
      },
    ],
    roof: 'indoor',
  },
  'hawkins-field': {
    id: 'hawkins-field',
    metroId: 'nashville',
    names: [{ name: 'Hawkins Field' }],
    location: [-86.807492, 36.1433436],
    capacity: [
      {
        seats: 3802,
        setup: 'baseball',
        note: 'Official facility page. Conflicts with 3,700 and with 3,626 in a 2018 fact book. The current facility page is the one stored. Source: https://vucommodores.com/facilities-hawkins-field',
      },
    ],
    roof: 'open',
  },
  'andrew-jackson-hall': {
    id: 'andrew-jackson-hall',
    metroId: 'nashville',
    names: [{ name: 'Tennessee Performing Arts Center' }, { name: 'Andrew Jackson Hall' }],
    location: [-86.7824167, 36.164551],
    capacity: [
      {
        seats: 2472,
        setup: 'concert',
        note: 'Official, including 47 pit seats (Dec 2025 tech pack). Polk Theater is a different room. Source: https://www.tpac.org/assets/doc/Jackson-Tech-Pack-12.9.25-d3a3456adb.pdf',
      },
    ],
    roof: 'indoor',
  },
  'james-k-polk-theater': {
    id: 'james-k-polk-theater',
    metroId: 'nashville',
    names: [{ name: 'James K. Polk Theater' }],
    // Same TPAC building as Andrew Jackson Hall. OSM does not split the rooms.
    location: [-86.7824167, 36.164551],
    capacity: [
      {
        seats: 1075,
        setup: 'concert',
        note: 'Official, including 44 pit seats. Near the 1,000 pre-list line. Source: https://www.tpac.org/assets/doc/Jackson-Tech-Pack-12.9.25-d3a3456adb.pdf',
      },
    ],
    roof: 'indoor',
  },
  'ryman-auditorium': {
    id: 'ryman-auditorium',
    metroId: 'nashville',
    names: [{ name: 'Ryman Auditorium' }],
    location: [-86.7784951, 36.1612473],
    capacity: [
      {
        seats: 2362,
        setup: 'concert',
        fromYear: 1994,
        note: 'Official. Source: https://ryman.com/plan-your-visit',
      },
    ],
    roof: 'indoor',
  },
  'laura-turner-concert-hall': {
    id: 'laura-turner-concert-hall',
    metroId: 'nashville',
    names: [{ name: 'Schermerhorn Symphony Center' }, { name: 'Laura Turner Concert Hall' }],
    location: [-86.7754987, 36.1597613],
    capacity: [
      {
        seats: 1844,
        setup: 'concert',
        note: 'Reported. Source: https://www.mixonline.com/live-sound/tour-nashville-venues-368996',
      },
    ],
    roof: 'indoor',
  },
  'war-memorial-auditorium': {
    id: 'war-memorial-auditorium',
    metroId: 'nashville',
    names: [{ name: 'War Memorial Auditorium' }],
    location: [-86.7835862, 36.164332],
    capacity: [
      {
        seats: 1661,
        setup: 'concert',
        note: 'Reported. Separate building from TPAC. Source: https://www.broadway.org/zh/theatres/details/tennessee-performing-arts-center,719',
      },
    ],
    roof: 'indoor',
  },
  'marathon-music-works': {
    id: 'marathon-music-works',
    metroId: 'nashville',
    names: [{ name: 'Marathon Music Works' }],
    location: [-86.7973705, 36.1641223],
    capacity: [
      {
        seats: 1500,
        setup: 'concert',
        note: 'Reported standing, 2012. Not re-verified as seated. Source: https://last.musicrow.com/?p=81722',
      },
    ],
    roof: 'indoor',
  },
  'brooklyn-bowl-nashville': {
    id: 'brooklyn-bowl-nashville',
    metroId: 'nashville',
    names: [{ name: 'Brooklyn Bowl Nashville' }],
    location: [-86.7839698, 36.1734467],
    capacity: [
      {
        seats: 1200,
        setup: 'concert',
        note: 'Reported "up to 1,200". Source: https://nashtoday.6amcity.com/city-guide/play/live-music-venues-nashville-tn',
      },
    ],
    roof: 'indoor',
  },
  'nashville-fairgrounds-speedway': {
    id: 'nashville-fairgrounds-speedway',
    metroId: 'nashville',
    names: [{ name: 'Nashville Fairgrounds Speedway' }],
    location: [-86.7621456, 36.130769],
    // Current capacity was not found. A ~30,000-seat proposal is not built. Nothing is invented.
    capacity: [],
    roof: 'open',
  },


  // Austin (Oct 12, 2026): docs/research/city-builds/austin/austin-venue-table-answer.md
  // and austin-city-type-answer.md. No carShare overrides (every figure there is an estimate).
  // Coordinates are OpenStreetMap Nominatim unless a comment says the hit was an address or a parent site.
  'dkr-texas-memorial-stadium': {
    id: 'dkr-texas-memorial-stadium',
    metroId: 'austin',
    names: [
      { name: 'DKR-Texas Memorial Stadium' },
      { name: 'Darrell K Royal-Texas Memorial Stadium' },
    ],
    location: [-97.7326229, 30.2838412],
    capacity: [{
      seats: 100119,
      setup: 'football',
      fromYear: 2009,
      note: 'Official. 100,119 after the 2009 work; south end zone enclosed in 2021 with capacity listed unchanged. 85,123 in 2006 was temporary south bleachers. Record crowd 105,215 on Oct 19, 2024 is attendance, not capacity. Source: https://texaslonghorns.com/facilities/memorial-stadium/1',
    }],
    roof: 'open',
  },
  'ufcu-stadium': {
    id: 'ufcu-stadium',
    metroId: 'austin',
    names: [
      { name: 'Bobcat Stadium' },
      { name: 'UFCU Stadium', from: '2024-05-21' },
    ],
    location: [-97.9255534, 29.8910593],
    capacity: [{
      seats: 28388,
      setup: 'football',
      note: 'Official. Jim Wacker Field. Was Bobcat Stadium until the UFCU naming deal announced May 21, 2024. South-edge room (San Marcos). Source: https://txst.com/UFCUStadium',
    }],
    roof: 'open',
  },
  'q2-stadium': {
    id: 'q2-stadium',
    metroId: 'austin',
    names: [{ name: 'Q2 Stadium', from: '2021-01-25' }],
    // Nominatim has no stadium name; this is the OSM point for 10414 McKalla Place.
    location: [-97.719227, 30.3853074],
    capacity: [{
      seats: 20738,
      setup: 'soccer',
      note: 'Reported (Wikipedia and stadiumdb). Official club page was not fetched. A ~25,000 expansion on a low-quality aggregator is unverified. Source: https://en.wikipedia.org/wiki/Q2_Stadium',
    }],
    roof: 'open',
  },
  'myers-stadium': {
    id: 'myers-stadium',
    metroId: 'austin',
    names: [{ name: 'Mike A. Myers Stadium and Soccer Field' }, { name: 'Mike A. Myers Stadium' }],
    location: [-97.7299723, 30.282571],
    capacity: [
      { seats: 20000, setup: 'soccer', note: 'Official. Same listed size for soccer and track. Source: https://texaslonghorns.com/sports/2013/7/25/facilities_0725133514' },
      { seats: 20000, setup: 'track', note: 'Official. Same listed size. Source: https://texaslonghorns.com/sports/2013/7/25/facilities_0725133514' },
    ],
    roof: 'open',
  },
  'moody-center': {
    id: 'moody-center',
    metroId: 'austin',
    names: [{ name: 'Moody Center' }],
    location: [-97.7306522, 30.2809367],
    capacity: [
      {
        seats: 10763,
        setup: 'basketball',
        note: 'Reported (Wikipedia) for UT basketball. Official UT describes about 10,000 with the upper bowl closed. Do not use the concert figure for a UT game. Source: https://en.wikipedia.org/wiki/Moody_Center',
      },
      {
        seats: 16223,
        setup: 'concert',
        note: 'Reported (Wikipedia) full configuration. Official UT: 15,000+ for concerts. The operator describes flexing from 4,000 to 16,000. Source: https://en.wikipedia.org/wiki/Moody_Center',
      },
    ],
    roof: 'indoor',
  },
  'germania-amphitheater': {
    id: 'germania-amphitheater',
    metroId: 'austin',
    names: [
      { name: 'Austin360 Amphitheater' },
      { name: 'Germania Insurance Amphitheater', from: '2020-01-01' },
    ],
    // Nominatim has no amphitheater node. This is the OSM sports_centre for Circuit of The Americas.
    location: [-97.63662, 30.1356307],
    capacity: [{
      seats: 14000,
      setup: 'concert',
      note: 'Official. Up to 14,000, with 6,700 reserved seats plus lawn. Naming deal runs through 2026. F1-weekend concerts are inside the race ticket and are not a second crowd. Source: https://circuitoftheamericas.com/about/',
    }],
    roof: 'open',
  },
  'dell-diamond': {
    id: 'dell-diamond',
    metroId: 'austin',
    names: [{ name: 'Dell Diamond' }],
    location: [-97.6308393, 30.5277319],
    capacity: [{
      seats: 11631,
      setup: 'baseball',
      note: 'Official (MiLB), including the berm. Fixed seats 8,722 are reported separately and are not used as the cap. Source: https://www.mlb.com/milb/news/featured/visit-dell-diamond-home-of-the-round-rock-express',
    }],
    roof: 'open',
  },
  'strahan-arena': {
    id: 'strahan-arena',
    metroId: 'austin',
    names: [
      { name: 'Strahan Coliseum' },
      { name: 'Strahan Arena at the University Events Center' },
      { name: 'Strahan Arena', from: '2018-10-06' },
    ],
    location: [-97.9324419, 29.8885359],
    capacity: [{
      seats: 10000,
      setup: 'basketball',
      note: 'Reported. Expansion added 1,800 seats, rededicated Oct 6, 2018. South-edge room (San Marcos). Source: https://en.wikipedia.org/wiki/Strahan_Arena',
    }],
    roof: 'indoor',
  },
  'heb-center-cedar-park': {
    id: 'heb-center-cedar-park',
    metroId: 'austin',
    names: [
      { name: 'Cedar Park Center' },
      { name: 'H-E-B Center at Cedar Park', from: '2016-04-22' },
    ],
    location: [-97.8205235, 30.5413221],
    capacity: [
      { seats: 6863, setup: 'hockey', note: 'Official press release. The current site lists hockey at 6,800. Source: https://www.hebcenter.com/assets/doc/H-E-B-Center-Press-Release-FINAL-323c3a4ae0.pdf' },
      { seats: 7200, setup: 'basketball', note: 'Official press release. Source: https://www.hebcenter.com/assets/doc/H-E-B-Center-Press-Release-FINAL-323c3a4ae0.pdf' },
      { seats: 8700, setup: 'concert', note: 'Official press release, concerts up to 8,700. The current site lists entertainment at 2,500–8,000. Source: https://www.hebcenter.com/assets/doc/H-E-B-Center-Press-Release-FINAL-323c3a4ae0.pdf' },
    ],
    roof: 'indoor',
  },
  'luedecke-arena': {
    id: 'luedecke-arena',
    metroId: 'austin',
    names: [{ name: 'Luedecke Arena' }, { name: 'Travis County Exposition Center' }],
    location: [-97.6209537, 30.2942285],
    capacity: [
      { seats: 6400, setup: 'rodeo', note: 'Reported (Austin Monitor) as 6,400 seats. Pollstar 2017 lists 8,400 capacity. Seated vs floor is unresolved and the two figures are not averaged. Source: https://austinmonitor.com/?p=32577' },
      { seats: 8400, setup: 'concert', note: 'Reported (Pollstar, 2017). May be the floor setup against the 6,400 seated figure. Unresolved. Source: https://news.pollstar.com/2017/12/06/expo-center-replacement-plan/' },
    ],
    roof: 'indoor',
  },
  'disch-falk-field': {
    id: 'disch-falk-field',
    metroId: 'austin',
    names: [
      { name: 'Disch-Falk Field' },
      { name: 'UFCU Disch-Falk Field', from: '2006-08-01' },
    ],
    location: [-97.7261524, 30.2801248],
    capacity: [{
      seats: 7211,
      setup: 'baseball',
      note: 'Official. Wikipedia list says 7,373; a 2008 renovation report says 6,756. The official 7,211 is the figure used. Source: https://texaslonghorns.com/facilities/?id=11',
    }],
    roof: 'open',
  },
  'house-park': {
    id: 'house-park',
    metroId: 'austin',
    names: [{ name: 'House Park' }],
    location: [-97.7500372, 30.2793593],
    capacity: [{
      seats: 6500,
      setup: 'soccer',
      note: 'Reported, one Wikipedia list only. Also an AISD school stadium. Verify with AISD. Source: https://en.wikipedia.org/wiki/Sports_in_Austin,_Texas',
    }],
    roof: 'open',
  },
  'moody-amphitheater': {
    id: 'moody-amphitheater',
    metroId: 'austin',
    names: [{ name: 'Moody Amphitheater' }, { name: 'Moody Amphitheater at Waterloo Park' }],
    // Nominatim has no amphitheater node. This is the OSM point for Waterloo Park.
    location: [-97.7359243, 30.2741216],
    capacity: [{
      seats: 5000,
      setup: 'concert',
      note: 'Official. Lawn, mostly standing, exactly at the 5,000 friction line. Source: https://waterloogreenway.org/?p=13560',
    }],
    roof: 'open',
  },
  'gregory-gym': {
    id: 'gregory-gym',
    metroId: 'austin',
    names: [{ name: 'Gregory Gymnasium' }, { name: 'Gregory Gym' }],
    location: [-97.7363896, 30.2839839],
    capacity: [{ seats: 4000, note: 'Official. Texas volleyball. Source: https://texaslonghorns.com/sports/2013/7/25/facilities_0725134031' }],
    roof: 'indoor',
  },
  'bass-concert-hall': {
    id: 'bass-concert-hall',
    metroId: 'austin',
    names: [{ name: 'Bass Concert Hall' }],
    location: [-97.7312787, 30.2858688],
    capacity: [{ seats: 2900, setup: 'concert', note: 'Reported (Wikipedia, citing Texas Performing Arts). Source: https://en.wikipedia.org/wiki/University_of_Texas_Performing_Arts_Center' }],
    roof: 'indoor',
  },
  'moody-theater': {
    id: 'moody-theater',
    metroId: 'austin',
    names: [{ name: 'Moody Theater' }, { name: 'ACL Live at the Moody Theater' }],
    location: [-97.7471887, 30.2654821],
    capacity: [{
      seats: 2750,
      setup: 'concert',
      note: 'Reported for concerts. Austin City Limits TV tapings cap at 800; do not apply 2,750 to a taping. Source: https://theclio.com/entry/103659',
    }],
    roof: 'indoor',
  },
  'long-center-dell-hall': {
    id: 'long-center-dell-hall',
    metroId: 'austin',
    names: [{ name: 'Long Center for the Performing Arts' }, { name: 'Michael & Susan Dell Hall' }],
    location: [-97.7512449, 30.2602594],
    capacity: [{ seats: 2442, setup: 'concert', note: 'Official. Source: https://thelongcenter.org/dell-hall/' }],
    roof: 'indoor',
  },
  'stubbs-amphitheater': {
    id: 'stubbs-amphitheater',
    metroId: 'austin',
    names: [{ name: "Stubb's BBQ" }, { name: "Stubb's Waller Creek Amphitheater" }],
    location: [-97.7362194, 30.2684889],
    capacity: [{
      seats: 2200,
      setup: 'concert',
      note: 'Reported standing capacity (2008). A third-party profile says about 2,500. The indoor stage (about 300) is a separate room and is not this one. Source: https://www.austinmonitor.com/stories/2008/03/downtown-panel-tentatively-oks-stubbs-expansion/',
    }],
    roof: 'open',
  },
  'emos-austin': {
    id: 'emos-austin',
    metroId: 'austin',
    names: [{ name: "Emo's" }],
    location: [-97.7280211, 30.239565],
    capacity: [{
      seats: 2000,
      setup: 'concert',
      note: 'Reported (KVUE, about 2,000). A Ticketmaster blog says 1,700. Not averaged. Source: https://www.kvue.com/article/money/economy/boomtown-2040/austin-indoor-live-music-venue-southeast-river-park-riverside/269-0670ae72-4457-41ae-a9ee-1003d6d18c94',
    }],
    roof: 'indoor',
  },
  'mccombs-field': {
    id: 'mccombs-field',
    metroId: 'austin',
    names: [{ name: 'Red & Charline McCombs Field' }, { name: 'Red and Charline McCombs Field' }],
    location: [-97.7247851, 30.2808552],
    capacity: [{ seats: 1250, note: 'Reported. Texas softball. Near the 1,000 pre-list line. Source: https://en.wikipedia.org/wiki/Sports_in_Austin,_Texas' }],
    roof: 'open',
  },
  'bobcat-soccer-complex': {
    id: 'bobcat-soccer-complex',
    metroId: 'austin',
    names: [{ name: 'Bobcat Soccer Complex' }],
    location: [-97.9517681, 29.8892039],
    capacity: [{ seats: 1000, setup: 'soccer', note: 'Reported (Visit San Marcos). Right at the 1,000 pre-list line. South-edge room. Source: https://www.visitsanmarcos.com/things-to-do/recreation-and-sports/texas-state-university/' }],
    roof: 'open',
  },
  'bobcat-softball-stadium': {
    id: 'bobcat-softball-stadium',
    metroId: 'austin',
    names: [{ name: 'Bobcat Softball Stadium' }],
    location: [-97.9293321, 29.8881256],
    capacity: [{ seats: 1000, note: 'Reported (Visit San Marcos). Right at the 1,000 pre-list line. South-edge room. Source: https://www.visitsanmarcos.com/things-to-do/recreation-and-sports/texas-state-university/' }],
    roof: 'open',
  },

  // Phoenix (docs/research/city-builds/phoenix/, Oct 12, 2026). Maricopa County plus Salt River Fields and Firebird.
  // No carShare overrides: the city-type answer found no measured event mode split. Coordinates are OpenStreetMap
  // hits by name or street address. Rooms with no selected capacity stay unknown (empty list).
  'state-farm-stadium': {
    id: 'state-farm-stadium',
    metroId: 'phoenix',
    names: [
      { name: 'University of Phoenix Stadium' },
      { name: 'State Farm Stadium', from: '2018-09-01' },
    ],
    location: [-112.261709, 33.527039],
    capacity: [
      {
        seats: 63400,
        setup: 'football',
        note: 'Official fixed NFL count. Expanded mega-event is "73,000+" official; Wikipedia reports 72,200 expanded and 78,600 standing room. Those are not stored as a precise seat count. Source: https://www.statefarmstadium.com/about',
        fromYear: 2018,
      },
    ],
    roof: 'covered',
  },
  'mountain-america-stadium': {
    id: 'mountain-america-stadium',
    metroId: 'phoenix',
    names: [
      { name: 'Sun Devil Stadium' },
      { name: 'Mountain America Stadium, Home of the ASU Sun Devils', from: '2023-08-01' },
      { name: 'Mountain America Stadium', from: '2023-08-01' },
    ],
    location: [-111.932659, 33.426310],
    capacity: [
      {
        seats: 53599,
        setup: 'football',
        note: 'Reported, since 2018. Conflicts with 53,559 (StadiumDB) and 56,634 (Stadium Journey). No official concert figure. Source: https://en.wikipedia.org/wiki/Mountain_America_Stadium',
        fromYear: 2018,
      },
    ],
    roof: 'open',
  },
  'chase-field': {
    id: 'chase-field',
    metroId: 'phoenix',
    names: [{ name: 'Chase Field' }],
    location: [-112.066693, 33.445486],
    capacity: [
      {
        seats: 48633,
        setup: 'baseball',
        note: 'Reported. Conflicts with 48,330 (Meet Stadium) and 48,519 (Stadium Journey) in the city-type answer. Lease expires 2027; extension not signed. Source: https://www.thestadiumbusiness.com/2025/09/05/state-approval-sets-up-chase-field-renovations/',
      },
    ],
    roof: 'covered',
  },
  'phoenix-raceway': {
    id: 'phoenix-raceway',
    metroId: 'phoenix',
    names: [
      { name: 'Phoenix International Raceway' },
      { name: 'ISM Raceway', from: '2017-01-01' },
      { name: 'Phoenix Raceway', from: '2018-01-01' },
    ],
    location: [-112.321285, 33.373632],
    capacity: [
      {
        seats: 42000,
        setup: 'racing',
        note: 'Reported Wikipedia infobox grandstand. Not official. Conflicts: 45,000 planned after the 2018 project, ~51,000 on a third-party page, ~67,000 is pre-2018. City-type answer found no official current figure. ISM rename dates were not verified. Source: https://en.wikipedia.org/wiki/ISM_Raceway',
      },
    ],
    roof: 'open',
  },
  'talking-stick-resort-amphitheatre': {
    id: 'talking-stick-resort-amphitheatre',
    metroId: 'phoenix',
    names: [
      { name: 'Ak-Chin Pavilion' },
      { name: 'Talking Stick Resort Amphitheatre', from: '2023-01-01' },
    ],
    location: [-112.232867, 33.471523],
    capacity: [
      {
        seats: 20106,
        setup: 'concert',
        note: 'Reported total. About 8,000 covered seats plus lawn; the lawn is standing, not seats. KTAR rounds the total to ~20,000. West Phoenix (83rd Ave), not the Talking Stick resort in Scottsdale. Source: https://en.wikipedia.org/wiki/Talking_Stick_Resort_Amphitheatre',
      },
    ],
    roof: 'covered',
  },
  'desert-diamond-arena': {
    id: 'desert-diamond-arena',
    metroId: 'phoenix',
    names: [
      { name: 'Gila River Arena' },
      { name: 'Desert Diamond Arena', from: '2022-01-01' },
    ],
    location: [-112.260440, 33.532033],
    capacity: [
      {
        seats: 17125,
        setup: 'hockey',
        note: 'Reported. Rename month in 2022 not verified. Source: https://en.wikipedia.org/wiki/Desert_Diamond_Arena',
      },
      {
        seats: 18300,
        setup: 'basketball',
        note: 'Reported. Source: https://en.wikipedia.org/wiki/Desert_Diamond_Arena',
      },
      {
        seats: 19000,
        setup: 'concert',
        note: 'Official venue release. Source: https://www.businesswire.com/news/home/20241213997294/en',
      },
    ],
    roof: 'indoor',
  },
  'mortgage-matchup-center': {
    id: 'mortgage-matchup-center',
    metroId: 'phoenix',
    names: [
      { name: 'Talking Stick Resort Arena' },
      { name: 'Phoenix Suns Arena', from: '2020-01-01' },
      { name: 'PHX Arena', from: '2020-06-01' },
      { name: 'Footprint Center', from: '2021-01-01' },
      { name: 'Mortgage Matchup Center', from: '2025-10-02' },
    ],
    location: [-112.071101, 33.446039],
    // Ids already on the Phoenix starter row. Not re-verified at room level in the Oct 12 venue answer.
    ticketmasterIds: ['KovZpZAE617A', 'KovZ917Ami1'],
    capacity: [
      {
        seats: 17071,
        setup: 'basketball',
        note: 'Reported regular basketball. An unlabeled 18,422 (Stadium Journey) has no configuration and is not used. A pre-existing app stub said 16,795 for the 2026 Women\'s Final Four without a source URL; that figure is not stored. Source: https://en.wikipedia.org/wiki/Mortgage_Matchup_Center',
      },
      {
        seats: 16210,
        setup: 'hockey',
        note: 'Reported. Source: https://en.wikipedia.org/wiki/Mortgage_Matchup_Center',
      },
      {
        seats: 12565,
        setup: 'concert',
        note: 'Reported end-stage. In-the-round is 17,716; theater setup is 4,379 and is the same room, not a separate venue. PHX Arena was also an interim 2025 name before Oct 2; that window is not a separate display date. Source: https://en.wikipedia.org/wiki/Mortgage_Matchup_Center',
      },
    ],
    roof: 'indoor',
  },
  'sloan-park': {
    id: 'sloan-park',
    metroId: 'phoenix',
    names: [{ name: 'Sloan Park' }],
    location: [-111.881637, 33.431390],
    capacity: [
      {
        seats: 15000,
        setup: 'baseball',
        note: 'Official, including berm. Cubs spring and Mesa Solar Sox. Source: https://www.mlb.com/news/explore-arizona-fall-league-stadiums',
      },
    ],
    roof: 'open',
  },
  'arizona-veterans-memorial-coliseum': {
    id: 'arizona-veterans-memorial-coliseum',
    metroId: 'phoenix',
    names: [{ name: 'Arizona Veterans Memorial Coliseum' }],
    // OSM stadium point at 1826 W McDowell, the fairgrounds address. A reseller page says 1326 W McDowell; not used.
    location: [-112.096678, 33.469625],
    // Reseller listing ~14,870 only. The venue answer says mark capacity unverified until an official figure exists.
    capacity: [],
    roof: 'indoor',
  },
  'desert-financial-arena': {
    id: 'desert-financial-arena',
    metroId: 'phoenix',
    names: [
      { name: 'Wells Fargo Arena' },
      { name: 'Desert Financial Arena', from: '2019-01-01' },
    ],
    location: [-111.931010, 33.424508],
    capacity: [
      {
        seats: 14198,
        setup: 'basketball',
        note: 'Official current count. Post-renovation capacity is not set (phase 1 from May 2026). Rename date after the 2018 Wells Fargo name was not verified; 2019-01-01 is a placeholder so 2018 still shows the old name. Source: https://news.asu.edu/20251017-sun-devil-community-100m-renovation-energize-fan-experience-desert-financial-arena',
      },
    ],
    roof: 'indoor',
  },
  'camelback-ranch': {
    id: 'camelback-ranch',
    metroId: 'phoenix',
    names: [
      { name: 'Camelback Ranch' },
      { name: 'Camelback Ranch–Glendale', from: '2016-01-01' },
    ],
    // OSM sports-centre point. Branded Glendale; the pin sits in Phoenix city limits. Municipality left unresolved.
    location: [-112.295002, 33.512312],
    capacity: [
      {
        seats: 13500,
        setup: 'baseball',
        note: 'Official MLB.com fall-league page. The MLB spring-training page says 13,000 including 3,000 lawn. Dodgers and White Sox in spring. Source: https://www.mlb.com/news/explore-arizona-fall-league-stadiums',
      },
    ],
    roof: 'open',
  },
  'scottsdale-stadium': {
    id: 'scottsdale-stadium',
    metroId: 'phoenix',
    names: [{ name: 'Scottsdale Stadium' }],
    location: [-111.920205, 33.488608],
    capacity: [
      {
        seats: 12000,
        setup: 'baseball',
        note: 'Official. Giants spring and Scottsdale Scorpions. Source: https://www.mlb.com/news/explore-arizona-fall-league-stadiums',
      },
    ],
    roof: 'open',
  },
  'salt-river-fields': {
    id: 'salt-river-fields',
    metroId: 'phoenix',
    names: [{ name: 'Salt River Fields at Talking Stick' }],
    location: [-111.885255, 33.545384],
    capacity: [
      {
        seats: 11000,
        setup: 'baseball',
        note: 'Official. 7,000 fixed plus 4,000 lawn. Scottsdale address on Salt River Pima-Maricopa land. Not the west-Phoenix amphitheatre. Source: https://www.mlb.com/news/explore-arizona-fall-league-stadiums',
      },
    ],
    roof: 'open',
  },
  'surprise-stadium': {
    id: 'surprise-stadium',
    metroId: 'phoenix',
    names: [
      { name: 'Billy Parker Field' },
      { name: 'Surprise Stadium', from: '2003-01-01' },
    ],
    location: [-112.378276, 33.628129],
    capacity: [
      {
        seats: 10714,
        setup: 'baseball',
        note: 'Official MLB.com. A Florida write-up says 10,500. Rangers and Royals spring. Source: https://www.mlb.com/news/explore-arizona-fall-league-stadiums',
      },
    ],
    roof: 'open',
  },
  'hohokam-stadium': {
    id: 'hohokam-stadium',
    metroId: 'phoenix',
    names: [{ name: 'Hohokam Stadium' }],
    location: [-111.830082, 33.438589],
    capacity: [
      {
        seats: 10500,
        setup: 'baseball',
        note: 'Reported current figure. 13,074 is a 2013 number. Athletics spring. Source: https://springtraining.jou.ufl.edu/2025/05/06/spring-training-scorecard-grading-arizonas-cactus-league-venues/',
      },
    ],
    roof: 'open',
  },
  'peoria-sports-complex': {
    id: 'peoria-sports-complex',
    metroId: 'phoenix',
    names: [{ name: 'Peoria Sports Complex' }],
    // OSM sports-centre point for the complex, not a separately named grandstand.
    location: [-112.232133, 33.630181],
    capacity: [
      {
        seats: 12339,
        setup: 'baseball',
        note: 'Official MLB spring-training page. Another official MLB page says 10,075. Both kept in the register; 12,339 is the spring-page total, not a resolved fixed-vs-berm split. Padres and Mariners. Source: https://www.mlb.com/spring-training/ballparks',
      },
    ],
    roof: 'open',
  },
  'american-family-fields-of-phoenix': {
    id: 'american-family-fields-of-phoenix',
    metroId: 'phoenix',
    names: [
      { name: 'Maryvale Baseball Park' },
      { name: 'American Family Fields of Phoenix', from: '2019-01-01' },
    ],
    // OSM sports-centre point. 2019 reopening month not in the research.
    location: [-112.172128, 33.490742],
    capacity: [
      {
        seats: 10000,
        setup: 'baseball',
        note: 'Reported. Wikipedia list says 8,000. Brewers spring. Source: https://springtraining.jou.ufl.edu/2025/05/06/spring-training-scorecard-grading-arizonas-cactus-league-venues/',
      },
    ],
    roof: 'open',
  },
  'goodyear-ballpark': {
    id: 'goodyear-ballpark',
    metroId: 'phoenix',
    names: [{ name: 'Goodyear Ballpark' }],
    location: [-112.390297, 33.428455],
    capacity: [
      {
        seats: 9500,
        setup: 'baseball',
        note: 'Reported. Wikipedia infobox 8,000 seats plus 1,500 berm, and the same page text says 9,500. baseballparks.com says 10,311 including berm. Guardians and Reds spring. Source: https://en.wikipedia.org/wiki/Goodyear_Ballpark',
      },
    ],
    roof: 'open',
  },
  'tempe-diablo-stadium': {
    id: 'tempe-diablo-stadium',
    metroId: 'phoenix',
    names: [{ name: 'Tempe Diablo Stadium' }],
    location: [-111.971061, 33.401010],
    capacity: [
      {
        seats: 9558,
        setup: 'baseball',
        note: 'Reported. An Arizona Complex League list says 9,785. Angels spring. Source: https://en.wikipedia.org/wiki/Tempe_Diablo_Stadium',
      },
    ],
    roof: 'open',
  },
  'phoenix-rising-soccer-stadium': {
    id: 'phoenix-rising-soccer-stadium',
    metroId: 'phoenix',
    names: [
      { name: 'Phoenix Rising Stadium at 38th St/Washington' },
      { name: 'Phoenix Rising Soccer Stadium', from: '2023-01-01' },
    ],
    location: [-112.001795, 33.445136],
    capacity: [
      {
        seats: 10000,
        setup: 'soccer',
        note: 'Reported (Wikipedia and USL). FotMob says 10,437. Temporary stadium on airport land; five-year lease from the 2022 approval plus options. Re-check before 2028. Source: https://en.wikipedia.org/wiki/Phoenix_Rising_Soccer_Stadium',
      },
    ],
    roof: 'open',
  },
  'phoenix-municipal-stadium': {
    id: 'phoenix-municipal-stadium',
    metroId: 'phoenix',
    names: [{ name: 'Phoenix Municipal Stadium' }],
    location: [-111.954221, 33.449272],
    capacity: [
      {
        seats: 7800,
        setup: 'baseball',
        note: 'Official City of Phoenix. Wikipedia says 8,775; ASU says more than 7,000. ASU baseball since 2015. Source: https://phoenix.gov/parks/sports/professional-sports',
      },
    ],
    roof: 'open',
  },
  'global-credit-union-arena': {
    id: 'global-credit-union-arena',
    metroId: 'phoenix',
    names: [
      { name: 'GCU Arena' },
      { name: 'Global Credit Union Arena', from: '2023-12-05' },
    ],
    location: [-112.128922, 33.510149],
    capacity: [
      {
        seats: 7000,
        setup: 'basketball',
        note: 'Official. GCU men and women. Source: https://www.gcuarena.com/facility-information/',
      },
    ],
    roof: 'indoor',
  },
  'mullett-arena': {
    id: 'mullett-arena',
    metroId: 'phoenix',
    names: [{ name: 'Mullett Arena' }],
    location: [-111.928489, 33.426643],
    capacity: [
      {
        seats: 5000,
        setup: 'hockey',
        note: 'Reported NCAA hockey configuration. The 4,600 NHL setup was the Coyotes\' temporary home (2022–2024) and is not the current count. At the 5,000 friction line. Source: https://en.wikipedia.org/wiki/Mullett_Arena',
        fromYear: 2022,
      },
    ],
    roof: 'indoor',
  },
  'arizona-financial-theatre': {
    id: 'arizona-financial-theatre',
    metroId: 'phoenix',
    names: [
      { name: 'Comerica Theatre' },
      { name: 'Arizona Federal Theatre', from: '2019-12-18' },
      { name: 'Arizona Financial Theatre', from: '2022-07-11' },
    ],
    location: [-112.079626, 33.448930],
    capacity: [
      {
        seats: 5000,
        setup: 'concert',
        note: 'Official full house, exactly at the friction line. The room scales smaller; reduced houses are not a separate stored count. Source: https://blog.ticketmaster.com/venue-faq-arizona-federal-theatre-phoenix-az',
      },
    ],
    roof: 'indoor',
  },
  'firebird-motorsports-park': {
    id: 'firebird-motorsports-park',
    metroId: 'phoenix',
    names: [
      { name: 'Wild Horse Pass Motorsports Park' },
      { name: 'Firebird Motorsports Park', from: '2023-12-19' },
    ],
    // OSM recreation-ground under the former name, at the 20000 S Maricopa Rd grounds. Not a surveyed grandstand point.
    location: [-111.965414, 33.267968],
    // No capacity in the venue answer. Gila River Indian Community land, Chandler mailing address.
    capacity: [],
    roof: 'open',
  },
  // ---------- Vancouver (docs/research/city-builds/vancouver/vancouver-venue-table-answer.md), Oct 12, 2026 ----------
  // Not venue rows: Vancouver Convention Centre halls (convention visits, not a fixed bowl), Hastings Racecourse (closed; grandstand capacity unknown),
  // the replaced PNE Amphitheatre, the unbuilt Surrey arena and Whitecaps stadium, and open sites (Fan Festival, PNE Fair, parades, fireworks).
  // Abbotsford (Rogers Forum) and Victoria stay outside this metro.
  // No carShare overrides. Every figure in the city-type answer is an estimate, including Hastings Park and Langley.
  // Those estimates stay in the research (same rule as Milwaukee and Tampa). The transit fallback is 0.40.
  'bc-place': {
    id: 'bc-place',
    metroId: 'vancouver',
    names: [{ name: 'BC Place Vancouver' }, { name: 'BC Place' }],
    location: [-123.1120062, 49.2766905],
    capacity: [
      { seats: 54500, setup: 'football', note: 'Reported (Ticketmaster blog). Also 54,320 (Soccer Stadium Digest). Venue marketing says over 55,000, not an exact count. FIFA 2026 configuration 54,000 (CBC) was a tournament setup. Concerts with a floor are reported as over 65,000; no exact seat count is stored.' },
      { seats: 22120, setup: 'soccer', note: 'Reported (Wikipedia, city-type answer): lower bowl, upper deck closed. Venue table also reports about 22,000 (SeatGeek) and 21,000 (Soccer Stadium Digest).' },
    ],
    roof: 'open',
  },
  'rogers-arena': {
    id: 'rogers-arena',
    metroId: 'vancouver',
    // Not Rogers Place (Edmonton) or Rogers Forum (Abbotsford).
    names: [{ name: 'GM Place' }, { name: 'Canada Hockey Place' }, { name: 'Rogers Arena' }],
    location: [-123.1089417, 49.2779085],
    capacity: [
      { seats: 18871, setup: 'hockey', fromYear: 2018, note: 'Reported (Wikipedia): 2018–present. Ticketmaster blog lists 18,910. Wikipedia also lists 18,865 for 2016–2018.' },
      { seats: 19700, setup: 'basketball', note: 'Reported (Ticketmaster blog).' },
      { seats: 19000, setup: 'concert', note: 'Reported (Ticketmaster blog). A PWHL Takeover Tour crowd of 19,038 (Jan 8, 2025) is attendance, not a new capacity.' },
    ],
    roof: 'indoor',
  },
  'pacific-coliseum': {
    id: 'pacific-coliseum',
    metroId: 'vancouver',
    names: [{ name: 'Rink on Renfrew' }, { name: 'Pacific Coliseum' }],
    location: [-123.0427418, 49.2858422],
    capacity: [
      { seats: 15713, setup: 'hockey', note: 'Official (PNE): permanent seats, plus provision for 2,000 floor seats (total cited 17,500). The naming-rights page lists a current capacity of 15,455. Hockey is also reported as 16,281 (Wikipedia) and 16,821 (The Stadium Business). A PWHL sell-out of 14,958 is attendance, not capacity.' },
      { seats: 17000, setup: 'concert', note: 'Official (PNE): in-the-round. A mini concert is listed at 4,200; that setup is not stored as the concert size.' },
    ],
    roof: 'indoor',
  },
  'freedom-mobile-arch': {
    id: 'freedom-mobile-arch',
    metroId: 'vancouver',
    names: [{ name: 'Freedom Mobile Arch' }],
    location: [-123.037059, 49.2839638],
    capacity: [
      { seats: 6000, setup: 'concert', standing: 10000, note: 'Reported: 6,000 fixed seats under the roof plus about 4,000 on the open lawn. The lawn is not counted as seats. Connect CRE and the Vancouver host committee also state a total of 10,000. Opened June 2026. The old PNE Amphitheatre is a different, replaced room and is not an alias here.' },
    ],
    roof: 'open',
  },
  'thunderbird-arena': {
    id: 'thunderbird-arena',
    metroId: 'vancouver',
    names: [{ name: 'UBC Winter Sports Centre' }, { name: 'Doug Mitchell Thunderbird Sports Centre' }, { name: 'Thunderbird Arena' }],
    location: [-123.2420795, 49.2605753],
    capacity: [
      { seats: 5004, setup: 'hockey', note: 'Official (UBC Sport Facilities): permanent seats. Also 5,033 (UBC Thunderbirds, 2009, dated) and 5,500 (UBC Properties). Wikipedia reports hockey 7,500 and concerts 8,000. Father Bauer Arena (900) and Protrans Arena are other rooms in this building and are not this row.' },
      { seats: 7000, setup: 'concert', note: 'Official (UBC Sport Facilities): up to 7,000 for special events, with floor seats or standing. Not the permanent seat count.' },
    ],
    roof: 'indoor',
  },
  'nat-bailey-stadium': {
    id: 'nat-bailey-stadium',
    metroId: 'vancouver',
    names: [
      { name: 'Nat Bailey Stadium' },
      { name: 'Scotiabank Field at Nat Bailey Stadium' },
      { name: 'The Nat' },
      { name: 'Rogers Field at Nat Bailey Stadium' },
    ],
    location: [-123.1067007, 49.242738],
    capacity: [
      { seats: 6500, setup: 'baseball', note: 'Official (MLB.com). The city-type answer records an unresolved conflict (5,132–6,500). This row uses the league site figure. MLB venue id 2817, checked Oct 12, 2026. The Rogers Field name was in use by January 2026; the exact start date was not verified, so no rename date is stored.' },
    ],
    roof: 'open',
  },
  'willoughby-stadium': {
    id: 'willoughby-stadium',
    metroId: 'vancouver',
    names: [{ name: 'Willoughby Community Park Stadium' }, { name: 'Willoughby Stadium at Langley Events Centre' }, { name: 'Willoughby Stadium' }],
    location: [-122.6656644, 49.1438512],
    capacity: [
      { seats: 6042, setup: 'soccer', note: 'Reported (Wikipedia). The same page also lists an initial configuration of 6,137. Langley Advance Times says more than 6,500; Soccerway says 6,600. Modular and designed to expand. All of those figures are at or above 5,000.' },
    ],
    roof: 'open',
  },
  'langley-events-centre': {
    id: 'langley-events-centre',
    metroId: 'vancouver',
    names: [{ name: 'Langley Events Centre Arena' }, { name: 'Langley Events Centre' }],
    location: [-122.6664163, 49.1459933],
    capacity: [
      { seats: 5276, setup: 'hockey', note: 'Reported (Wikipedia; CBC). Also described as about 5,300 (Daily Hive). The Giants reportedly curtain unused upper seating; no curtained seat count was published, so none is stored. Threshold-sensitive.' },
      { seats: 5276, setup: 'basketball', note: 'No separate basketball figure was published for the Bandits. The arena figure is used. The Centre Gymnasium is a different room.' },
    ],
    roof: 'indoor',
  },
  'swangard-stadium': {
    id: 'swangard-stadium',
    metroId: 'vancouver',
    names: [{ name: 'Swangard Stadium' }],
    location: [-123.0217265, 49.2308777],
    capacity: [
      { seats: 4500, setup: 'soccer', note: 'Reported (Rise team president, Burnaby Now, 2024): current seating 4,500. Conflicts that cross 5,000: 5,288 (Wikipedia), about 5,000 (The IX), and more than 5,000 permanent seats (Burnaby Now). No official City of Burnaby figure. The 4,500 count is what is stored, so the friction label stays off until one official number exists. A temporary 10,000 setup for the 2007 U-20 World Cup is historical and not stored.' },
    ],
    roof: 'open',
  },
  'pne-agrodome': {
    id: 'pne-agrodome',
    metroId: 'vancouver',
    names: [{ name: 'Agrodome' }, { name: 'PNE Agrodome' }],
    // Approximate (venue research). OpenStreetMap has no Agrodome hit. The grounds share 2901 E Hastings with the Coliseum and the Arch.
    location: [-123.0422, 49.2836],
    capacity: [
      { seats: 3400, note: 'Official (PNE naming-rights page): 3,400 permanent seats. Another PNE page says over 3,000 permanent plus 2,000 floor seats for concerts. No single published concert total, so the floor-seat setup is not stored as its own capacity. Fixed seating is under 5,000.' },
    ],
    roof: 'indoor',
  },
  'thunderbird-stadium': {
    id: 'thunderbird-stadium',
    metroId: 'vancouver',
    names: [{ name: 'Thunderbird Stadium' }],
    location: [-123.2453928, 49.2544747],
    capacity: [
      { seats: 3500, setup: 'football', note: 'Official (UBC Thunderbirds, 2009, dated). The current UBC Sport Facilities home page says 12,000. The venue research says that figure may include temporary or standing space and not to label the room until UBC says which number is seated. 12,000 is not stored.' },
      { seats: 3500, setup: 'soccer', note: 'Same stands. No separate soccer capacity was published.' },
    ],
    roof: 'open',
  },
  'queen-elizabeth-theatre': {
    id: 'queen-elizabeth-theatre',
    metroId: 'vancouver',
    names: [{ name: 'Queen Elizabeth Theatre' }],
    location: [-123.113161, 49.2803131],
    capacity: [{ seats: 2765, setup: 'concert', note: 'Official (Vancouver Civic Theatres). The Vancouver Playhouse (668) is the adjoining room and is under the pre-list line, so it is not a row.' }],
    roof: 'indoor',
  },
  'orpheum-vancouver': {
    id: 'orpheum-vancouver',
    metroId: 'vancouver',
    names: [{ name: 'Orpheum Theatre' }, { name: 'Orpheum' }],
    location: [-123.1203207, 49.2801482],
    capacity: [{ seats: 2672, setup: 'concert', note: 'Official (Vancouver Civic Theatres). Destination Vancouver lists 2,688.' }],
    roof: 'indoor',
  },
  'langley-centre-gym': {
    id: 'langley-centre-gym',
    metroId: 'vancouver',
    names: [{ name: 'Langley Events Centre — Centre Gymnasium' }, { name: 'Langley Events Centre Gymnasium' }],
    // The gym was not a separate OpenStreetMap hit. This is the Langley Events Centre campus point.
    location: [-122.6664163, 49.1459933],
    capacity: [{ seats: 2200, setup: 'basketball', note: 'Reported (Wikipedia).' }],
    roof: 'indoor',
  },
  'war-memorial-gym': {
    id: 'war-memorial-gym',
    metroId: 'vancouver',
    names: [{ name: 'War Memorial Gymnasium' }, { name: 'War Memorial Gym' }],
    location: [-123.2476281, 49.2668059],
    capacity: [{ seats: 2176, setup: 'basketball', note: 'Official (UBC Sport Facilities).' }],
    roof: 'indoor',
  },
  'vogue-theatre': {
    id: 'vogue-theatre',
    metroId: 'vancouver',
    names: [{ name: 'Vogue Theatre' }],
    location: [-123.121631, 49.2797734],
    capacity: [{ seats: 1280, setup: 'concert', note: 'Reported (Bandsintown). A guide site says about 1,100.' }],
    roof: 'indoor',
  },
  'massey-theatre': {
    id: 'massey-theatre',
    metroId: 'vancouver',
    names: [{ name: 'Massey Theatre' }],
    location: [-122.926914, 49.2151874],
    capacity: [{ seats: 1260, setup: 'concert', note: 'Official (Massey Theatre): 867 orchestra plus 393 balcony.' }],
    roof: 'indoor',
  },
  'chan-centre': {
    id: 'chan-centre',
    metroId: 'vancouver',
    names: [{ name: 'Chan Centre for the Performing Arts' }, { name: 'Chan Shun Concert Hall' }],
    location: [-123.2551083, 49.2697484],
    capacity: [{ seats: 1200, setup: 'concert', note: 'Reported (BC Touring Council). The venue research did not re-verify this independently. Telus Studio Theatre (250) is a different room.' }],
    roof: 'indoor',
  },
  'bell-performing-arts-centre': {
    id: 'bell-performing-arts-centre',
    metroId: 'vancouver',
    names: [{ name: 'Bell Performing Arts Centre' }],
    location: [-122.8214734, 49.1165785],
    capacity: [{ seats: 1052, setup: 'concert', note: 'Reported (BC Touring Council). The venue research did not re-verify this independently.' }],
    roof: 'indoor',
  },
  'commodore-ballroom': {
    id: 'commodore-ballroom',
    metroId: 'vancouver',
    names: [{ name: 'Commodore Ballroom' }],
    location: [-123.120792, 49.2805634],
    capacity: [{ seats: 990, setup: 'concert', note: 'Reported (BC Living): standing room. Also described as about 1,000. Not rounded up to 1,000.' }],
    roof: 'indoor',
  },
  // Sacramento (docs/research/city-builds/sacramento/, Oct 12, 2026). MSA plus Wheatland edge.
  // No carShare overrides: every split in the city-type answer is estimated or a fallback.
  // Coordinates from OpenStreetMap by name; rooms OSM does not separate are marked approximate.
  'sutter-health-park': {
    id: 'sutter-health-park',
    metroId: 'sacramento',
    names: [
      { name: 'Raley Field' },
      { name: 'Sutter Health Park', from: '2020-01-01' },
    ],
    location: [-121.5134097, 38.5803717],
    capacity: [
      {
        seats: 13416,
        setup: 'baseball',
        note: 'Reported. 2025 team-official total (lawn and standing included). Fixed seats 10,624. Conflicts with Wikipedia 14,014 and a May 2026 report of 13,800. The 2020 rename date is the season after 2019; the day is not in the research. Source: https://www.abc10.com/article/sports/mlb/the-as/as-sacramento-sutter-health-park-attendance/103-82a2d4a0-eedc-4ae8-883f-0f8800e3d2c5',
      },
    ],
    roof: 'open',
  },
  'hornet-stadium': {
    id: 'hornet-stadium',
    metroId: 'sacramento',
    names: [
      { name: 'Fred Anderson Field at Hornet Stadium' },
      { name: 'Hornet Stadium' },
    ],
    location: [-121.4229535, 38.5556698],
    capacity: [
      {
        seats: 21195,
        setup: 'football',
        note: 'Reported. Current stands described as temporary. Source: https://en.wikipedia.org/wiki/Hornet_Stadium_(Sacramento)',
      },
    ],
    roof: 'open',
  },
  'heart-health-park': {
    id: 'heart-health-park',
    metroId: 'sacramento',
    names: [
      { name: 'Bonney Field' },
      { name: "Papa Murphy's Park", from: '2017-03-09' },
      { name: 'Heart Health Park', from: '2021-01-01' },
    ],
    location: [-121.4380099, 38.5913512],
    capacity: [
      {
        seats: 8000,
        setup: 'soccer',
        note: 'Official (club, 2017): opened June 2014 at 8,000 seats. Source: https://www.sacrepublicfc.com/?p=9130',
      },
      {
        seats: 11569,
        setup: 'soccer',
        fromYear: 2015,
        note: 'Reported. Expanded 2015. Conflicts with club "over 11,500" (2017) and Cal Expo "about 12,000". A 25,000 concert listing is estimated and not used. The 2021 rename day is not in the research. Source: https://en.wikipedia.org/wiki/Heart_Health_Park',
      },
      {
        seats: 14000,
        setup: 'concert',
        fromYear: 2017,
        note: 'Official (club, 2017): concerts up to 14,000. Source: https://www.sacrepublicfc.com/?p=9130',
      },
    ],
    roof: 'open',
  },
  'toyota-amphitheatre': {
    id: 'toyota-amphitheatre',
    metroId: 'sacramento',
    names: [
      { name: 'Sleep Train Amphitheatre' },
      { name: 'Toyota Amphitheatre', from: '2015-03-01' },
    ],
    location: [-121.512912, 39.0311465],
    capacity: [
      {
        seats: 18500,
        setup: 'concert',
        note: 'Official (Live Nation). About 8,000 reserved seats plus lawn; do not size a concert by the seats alone. Toyota naming announced March 2015; the day is not in the research. Wheatland, Yuba County, included edge outside the MSA. Source: https://livenationentertainment.com/?p=26244',
      },
    ],
    roof: 'open',
  },
  'uc-davis-health-stadium': {
    id: 'uc-davis-health-stadium',
    metroId: 'sacramento',
    names: [
      { name: 'Aggie Stadium' },
      { name: 'UC Davis Health Stadium', from: '2019-01-01' },
    ],
    location: [-121.762774, 38.5365564],
    capacity: [
      {
        seats: 10743,
        setup: 'football',
        note: 'Official (athletics). Renamed 2019; the day is not in the research. Source: https://ucdavisaggies.com/facilities/?id=6',
      },
    ],
    roof: 'open',
  },
  'university-credit-union-center': {
    id: 'university-credit-union-center',
    metroId: 'sacramento',
    names: [
      { name: 'The Pavilion' },
      { name: 'Pavilion at ARC' },
      { name: 'University Credit Union Center', from: '2021-07-01' },
    ],
    location: [-121.7596452, 38.5416786],
    capacity: [
      {
        seats: 6003,
        setup: 'basketball',
        note: 'Official (athletics). Conflicts with reported 7,600 and 8,000. Renamed July 2021; the day is not in the research. Source: https://ucdavisaggies.com/facilities/?id=5',
      },
      {
        seats: 5575,
        setup: 'concert',
        note: 'Reported (campus events). Source: https://ces.ucdavis.edu/ucenter',
      },
    ],
    roof: 'indoor',
  },
  'hughes-stadium': {
    id: 'hughes-stadium',
    metroId: 'sacramento',
    names: [{ name: 'Hughes Stadium' }, { name: 'Charles C. Hughes Stadium' }],
    location: [-121.4862621, 38.5407719],
    capacity: [
      {
        seats: 25000,
        setup: 'football',
        note: 'Official (Sacramento City College). Conflicts with reported 20,311. A 2022 turf project said spectator capacity was unchanged. Rarely near capacity. Source: https://www.scc.losrios.edu/about-us/our-facilities/hughes-stadium',
      },
    ],
    roof: 'open',
  },
  'thunder-valley-venue': {
    id: 'thunder-valley-venue',
    metroId: 'sacramento',
    names: [{ name: 'The Venue at Thunder Valley' }],
    // The indoor room has no separate OSM point; this is the resort.
    location: [-121.3137366, 38.8403664],
    capacity: [
      {
        seats: 4500,
        setup: 'concert',
        note: 'Reported. A reseller "1,000" is a listing error and is not used. Replaced the outdoor amphitheatre (last concert October 2022), which is not a current room. Coordinate is the resort, not a surveyed room point. Source: https://www.cbsnews.com/sacramento/news/thunder-valley-casino-announces-bruno-mars-performance',
      },
    ],
    roof: 'indoor',
  },
  'all-american-speedway': {
    id: 'all-american-speedway',
    metroId: 'sacramento',
    names: [{ name: 'All American Speedway' }],
    location: [-121.2921058, 38.7579863],
    capacity: [
      {
        seats: 4000,
        setup: 'racing',
        note: 'Reported bleacher seats. A 2021 "20% capacity was about 1,500" implies about 7,500, which is derived and not used. Total spectator capacity is unresolved, so this stays under the friction line. Source: https://en.wikipedia.org/wiki/All_American_Speedway',
      },
    ],
    roof: 'open',
  },
  'sacramento-memorial-auditorium': {
    id: 'sacramento-memorial-auditorium',
    metroId: 'sacramento',
    names: [{ name: 'Sacramento Memorial Auditorium' }, { name: 'Memorial Auditorium' }],
    location: [-121.4856188, 38.5789153],
    capacity: [
      {
        seats: 3849,
        setup: 'concert',
        note: 'Reported. Conflicts with 3,867; the dedicated auditorium figure is used. Jean Runyon Little Theater (272) is not this room. Source: https://en.wikipedia.org/wiki/Sacramento_Memorial_Auditorium',
      },
    ],
    roof: 'indoor',
  },
  'hornet-pavilion': {
    id: 'hornet-pavilion',
    metroId: 'sacramento',
    names: [{ name: 'Hornet Pavilion' }],
    location: [-121.4234503, 38.5568456],
    capacity: [
      {
        seats: 3000,
        setup: 'basketball',
        fromYear: 2025,
        note: 'Official. Inside The WELL; opened November 2025. Coordinate is The WELL, not a surveyed court point. Source: https://hornetsports.com/facilities/hornet-pavilion/24',
      },
    ],
    roof: 'indoor',
  },
  'hard-rock-live-sacramento': {
    id: 'hard-rock-live-sacramento',
    metroId: 'sacramento',
    names: [{ name: 'Hard Rock Live Sacramento' }, { name: 'Hard Rock Live' }],
    // OSM has the casino, not a separate Hard Rock Live room. Wheatland edge, near Toyota Amphitheatre.
    location: [-121.5118126, 39.0506909],
    capacity: [
      {
        seats: 2500,
        setup: 'concert',
        note: 'Reported. 2,500 seated / 3,500 general admission; 3,500 is still under 5,000 and is not a second stored setup. The venue table\'s 2,500 link points at a Thunder Valley article, so this uses the city-type source. Coordinate is the casino, not a surveyed room point. Source: https://seminoletribune.org/?p=43708',
      },
    ],
    roof: 'indoor',
  },
  'safe-credit-union-performing-arts-center': {
    id: 'safe-credit-union-performing-arts-center',
    metroId: 'sacramento',
    names: [
      { name: 'Community Center Theater' },
      { name: 'SAFE Credit Union Performing Arts Center', from: '2021-01-01' },
    ],
    location: [-121.4894149, 38.5771834],
    capacity: [
      {
        seats: 2188,
        setup: 'concert',
        fromYear: 2021,
        note: 'Official (City of Sacramento), reopened 2021. Conflicts with 2,193 (2021 city recap) and older 2,452. The reopen day is not in the venue table. Source: https://www.cityofsacramento.gov/ccs/safe-credit-union-performing-arts',
      },
    ],
    roof: 'indoor',
  },
  'sac-state-nest': {
    id: 'sac-state-nest',
    metroId: 'sacramento',
    names: [{ name: 'The Nest' }, { name: 'Hornets Nest' }, { name: 'Colberg Court' }],
    // South Gym inside Yosemite Hall. OSM knows the hall, not the gym.
    location: [-121.4276643, 38.5625448],
    capacity: [
      {
        seats: 1012,
        setup: 'basketball',
        note: 'Reported. Volleyball still plays here; basketball moved to Hornet Pavilion for 2025–26. Coordinate is Yosemite Hall. Source: https://en.wikipedia.org/wiki/2022%E2%80%9323_Sacramento_State_Hornets_men%27s_basketball_team',
      },
    ],
    roof: 'indoor',
  },
  'ace-of-spades': {
    id: 'ace-of-spades',
    metroId: 'sacramento',
    names: [{ name: 'Ace of Spades' }],
    location: [-121.4909477, 38.5699259],
    capacity: [
      {
        seats: 1000,
        setup: 'concert',
        note: 'Reported. At the pre-list line. Source: https://sactoday.6amcity.com/city-guide/live/live-music-venues-sacramento-ca',
      },
    ],
    roof: 'indoor',
  },
  'quarry-park-amphitheater': {
    id: 'quarry-park-amphitheater',
    metroId: 'sacramento',
    names: [
      { name: 'Platnum Living Amphitheater at Quarry Park' },
      { name: 'Quarry Park Amphitheater' },
    ],
    location: [-121.2339412, 38.7883736],
    capacity: [
      {
        seats: 1000,
        setup: 'concert',
        note: 'Reported. Not re-verified in the venue-table pass. OSM spells the sponsor name "Platnum". Source: https://comstocksmag.com/web-only/venue-makes-its-debut',
      },
    ],
    roof: 'open',
  },
  'dan-russell-rodeo-arena': {
    id: 'dan-russell-rodeo-arena',
    metroId: 'sacramento',
    names: [{ name: 'Dan Russell Rodeo Arena' }],
    location: [-121.1682977, 38.6830298],
    // Reseller 7,000 is labeled estimated. No official capacity, so none is stored.
    capacity: [],
    roof: 'open',
  },
  // Mexico City (Oct 12, 2026; docs/research/city-builds/mexico-city/). Coordinates are OpenStreetMap Nominatim
  // hits for the building. No carShare overrides: city-type estimates stay in the research. Capacities are sourced
  // figures only; a missing setup is left off rather than guessed.
  'estadio-banorte': {
    id: 'estadio-banorte',
    metroId: 'mexico-city',
    names: [
      { name: 'Estadio Azteca' },
      { name: 'Estadio Ciudad de México', from: '2026-06-11' },
      { name: 'Estadio Banorte', from: '2026-03-28' },
    ],
    location: [-99.15047, 19.3029794],
    capacity: [
      {
        seats: 81070,
        setup: 'soccer',
        note: 'Reported pre-renovation figure (Expansión, Mar 2025). Conflicts with 83,264 (Claro Sports). Concert setups were not published. Source: https://expansion.mx/economia/2025/03/14/estadio-azteca-cambia-de-nombre-a-estadio-banorte',
      },
      {
        seats: 87000,
        setup: 'soccer',
        fromYear: 2026,
        note: 'Official post-renovation figure stated by the stadium director (TUDN, 11 Jun 2025). City-type research also cites 87,500, 88,084 and about 90,000. Concert capacity unknown. Source: https://www.tudn.com/mundial-2026/asi-modernizacion-estadio-azteca-mundial-2026',
      },
    ],
    roof: 'open',
  },
  'estadio-gnp-seguros': {
    id: 'estadio-gnp-seguros',
    metroId: 'mexico-city',
    names: [
      { name: 'Foro Sol' },
      { name: 'Estadio GNP Seguros', from: '2024-08-08' },
    ],
    location: [-99.0955714, 19.4050224],
    capacity: [
      {
        seats: 65000,
        setup: 'concert',
        fromYear: 2024,
        note: 'Official OCESA concert figure. Do not add the pre-renovation thesis split (37,500 stands + 25,000 field) to this. No current sports setup. Source: https://news.pollstar.com/?p=1063150',
      },
    ],
    roof: 'covered',
  },
  'estadio-olimpico-universitario': {
    id: 'estadio-olimpico-universitario',
    metroId: 'mexico-city',
    names: [{ name: 'Estadio Olímpico Universitario' }],
    location: [-99.1922864, 19.3316881],
    capacity: [
      {
        seats: 58445,
        setup: 'soccer',
        note: 'Reported (Soccerway; Wikipedia stadium list). Conflicts with 63,186 (StadiumDB) and city-type figures 72,000 (CDMX tourism), 68,954 (UNAM thesis) and 52,000 seats (StadiumGuide). All above 5,000. Source: https://co.soccerway.com/equipo/u-n-a-m/UB73mIXI',
      },
    ],
    roof: 'open',
  },
  'plaza-de-toros-mexico': {
    id: 'plaza-de-toros-mexico',
    metroId: 'mexico-city',
    names: [
      { name: 'Plaza México' },
      { name: 'Plaza de Toros México' },
    ],
    location: [-99.1800979, 19.3829715],
    capacity: [
      {
        seats: 41262,
        note: 'Official seated figure (venue history, via Wikipedia). Traditional corridas suspended 24 Jun 2025; concert use continues. About 200 m from Estadio Ciudad de los Deportes. Source: https://en.wikipedia.org/wiki/Plaza_de_Toros_M%C3%A9xico',
      },
      {
        seats: 50000,
        setup: 'concert',
        note: 'Reported up to about 50,000 including the floor. Keep separate from the 41,262 seated figure. Source: https://www.nmas.com.mx/entretenimiento/cuantas-personas-caben-plaza-toros-mexico-capacidad-profugos-del-anexo-cdmx-2024',
      },
    ],
    roof: 'open',
  },
  'estadio-ciudad-de-los-deportes': {
    id: 'estadio-ciudad-de-los-deportes',
    metroId: 'mexico-city',
    names: [
      { name: 'Estadio Azul' },
      { name: 'Estadio Ciudad de los Deportes', from: '2018-01-01' },
    ],
    location: [-99.1782599, 19.3834348],
    capacity: [
      {
        seats: 34253,
        setup: 'soccer',
        note: 'Reported (Wikipedia citing the Liga MX stadium page), including 92 boxes. Conflicts with 36,681 (StadiumDB; CDMX tourism). No regular Liga MX tenant after the 2026 moves to Banorte. Rename day in 2018 was not published; January 1 is the year boundary only. Source: https://en.wikipedia.org/wiki/Estadio_Ciudad_de_los_Deportes',
      },
    ],
    roof: 'open',
  },
  'arena-cdmx': {
    id: 'arena-cdmx',
    metroId: 'mexico-city',
    names: [
      { name: 'Mexico City Arena' },
      { name: 'Arena CDMX' },
      { name: 'Arena Ciudad de México', from: '2012-02-25' },
    ],
    location: [-99.1751954, 19.4976072],
    capacity: [
      {
        seats: 8000,
        setup: 'basketball',
        note: 'Reported G League limit of about 8,000. Do not apply the 22,300 bowl maximum to Capitanes games. Source: https://en.wikipedia.org/wiki/Mexico_City_Arena',
      },
      {
        seats: 22300,
        setup: 'concert',
        note: 'Official maximum, depending on the event. A secondary operator range of about 6,000–23,000 was not used. Source: https://en.wikipedia.org/wiki/Mexico_City_Arena',
      },
    ],
    roof: 'indoor',
  },
  'palacio-de-los-deportes': {
    id: 'palacio-de-los-deportes',
    metroId: 'mexico-city',
    names: [{ name: 'Domo de Cobre' }, { name: 'Palacio de los Deportes' }],
    location: [-99.0996762, 19.4053099],
    capacity: [
      {
        seats: 15000,
        setup: 'concert',
        note: 'Official OCESA range is 15,000–21,000 depending on setup (Pollstar). This is the low end of that range, not a second room. Other figures not used: 17,000 (El CEO), 22,000 (2022 thesis), 24,500 (hotel blog), 36,709 (HireSpace, likely multi-space). Source: https://news.pollstar.com/?p=1204620',
      },
      {
        seats: 21000,
        setup: 'concert',
        note: 'Official OCESA range high end, 15,000–21,000 depending on setup. Stored last so a full setup is the ceiling. Source: https://news.pollstar.com/?p=1204620',
      },
    ],
    roof: 'indoor',
  },
  'estadio-alfredo-harp-helu': {
    id: 'estadio-alfredo-harp-helu',
    metroId: 'mexico-city',
    names: [{ name: 'Estadio Alfredo Harp Helú' }],
    location: [-99.0852437, 19.4036757],
    capacity: [
      {
        seats: 20576,
        setup: 'baseball',
        fromYear: 2019,
        note: 'Official at the March 2019 opening (MLB.com; club sell-out post). Conflicts with 20,062 reported in August 2026 (Expansión). Canopy not verified. Source: https://mlb.com/es/news/diablos-rojos-inauguraron-nuevo-estadio-en-mexico',
      },
    ],
    roof: 'open',
  },
  'arena-mexico': {
    id: 'arena-mexico',
    metroId: 'mexico-city',
    names: [{ name: 'Arena México' }],
    location: [-99.1520014, 19.4246141],
    capacity: [
      {
        seats: 16500,
        note: 'Reported wrestling and boxing figure, widely repeated, including the CDMX tourism page. No separate concert figure was published. Source: https://mexicocity.cdmx.gob.mx/?p=1985',
      },
    ],
    roof: 'indoor',
  },
  'estadio-wilfrido-massieu': {
    id: 'estadio-wilfrido-massieu',
    metroId: 'mexico-city',
    names: [{ name: 'Estadio Wilfrido Massieu' }],
    location: [-99.1384942, 19.5019763],
    capacity: [
      {
        seats: 13000,
        setup: 'football',
        note: 'Reported (Excélsior, Sep 2015). Conflicts with 15,000 in a 2021 Wikipedia mirror. ONEFA home; current pro tenant not verified. Source: https://www.excelsior.com.mx/adrenalina/2015/09/12/1045326',
      },
    ],
    roof: 'open',
  },
  'auditorio-nacional': {
    id: 'auditorio-nacional',
    metroId: 'mexico-city',
    names: [{ name: 'Auditorio Nacional' }],
    location: [-99.1948518, 19.4247897],
    capacity: [
      {
        seats: 9366,
        setup: 'concert',
        note: 'Official seated figure (CDMX tourism). A hotel-blog 10,000 was not used. Lunario is a separate room whose capacity was not verified, so it is not merged here. Source: https://mexicocity.cdmx.gob.mx/venues/auditorio-nacional/?lang=en',
      },
    ],
    roof: 'indoor',
  },
  'pepsi-center-wtc': {
    id: 'pepsi-center-wtc',
    metroId: 'mexico-city',
    names: [{ name: 'Pepsi Center WTC' }],
    location: [-99.1747474, 19.3944618],
    capacity: [
      {
        seats: 3342,
        note: 'Reported auditorium seats (Venue Coalition). Wikipedia lists 3,478 seats and an overall 7,505. Seated theatre stays under 5,000. The WTC convention halls are not this room. Source: https://venuecoalition.com/pepsi-center-wtc/',
      },
      {
        seats: 6486,
        setup: 'concert',
        note: 'Reported concert GA low end (Venue Coalition range 6,486–8,000). Source: https://venuecoalition.com/pepsi-center-wtc/',
      },
      {
        seats: 8000,
        setup: 'concert',
        note: 'Reported concert GA high end of the same 6,486–8,000 range. Stored last so a full GA setup is the ceiling. Source: https://venuecoalition.com/pepsi-center-wtc/',
      },
    ],
    roof: 'indoor',
  },
  'gimnasio-juan-de-la-barrera': {
    id: 'gimnasio-juan-de-la-barrera',
    metroId: 'mexico-city',
    names: [{ name: 'Gimnasio Olímpico Juan de la Barrera' }],
    location: [-99.1546997, 19.3598654],
    capacity: [
      {
        seats: 5242,
        setup: 'basketball',
        note: 'Reported, one secondary source, just above 5,000. Research asked for an official figure before treating it as a friction room. Source: https://www.mediotiempo.com/opinion/javier-balseca/los-dineros-del-deporte/capitanes-la-nueva-opcion-de-entretenmiento-en-mexico-que-va-en-crecimiento',
      },
    ],
    roof: 'indoor',
  },

  // Las Vegas Valley (docs/research/city-builds/las-vegas/las-vegas-venue-table-answer.md, Oct 12, 2026).
  // City type hub. Estimated car shares stay in the research and are not wired (Milwaukee/Tampa pattern).
  // Order matters for Gridlock zones: T-Mobile is the South Strip center; Sphere starts North Strip.
  // The Athletics' 2028 ballpark is not active. Cashman Field's last match is Oct 17, 2026.
  't-mobile-arena': {
    id: 't-mobile-arena',
    metroId: 'las-vegas',
    names: [{ name: 'T-Mobile Arena' }],
    location: [-115.1782239, 36.102678],
    capacity: [
      { seats: 17500, setup: 'hockey', note: 'Official. Hockey with standing room 20,000 is secondary. Source: venue table A04.' },
      { seats: 18000, setup: 'basketball', note: 'Official. Source: venue table A04.' },
      { seats: 18000, setup: 'concert', note: 'Official end-stage upper bound (12,000–18,000). Center-stage is 19,500–20,000. Boxing/UFC up to 20,000. Source: venue table A04.' },
    ],
    roof: 'indoor',
  },
  'allegiant-stadium': {
    id: 'allegiant-stadium',
    metroId: 'las-vegas',
    names: [{ name: 'Allegiant Stadium' }],
    location: [-115.1833303, 36.0907359],
    capacity: [
      { seats: 65000, setup: 'football', note: 'Official. Expanded figures 71,835 (secondary) and about 72,000 (reported) are not the regular NFL setup. Concert configurations were not published. Source: venue table A02.' },
      { seats: 61000, setup: 'soccer', note: 'Secondary. Source: venue table A02.' },
    ],
    roof: 'covered',
  },
  'michelob-ultra-arena': {
    id: 'michelob-ultra-arena',
    metroId: 'las-vegas',
    names: [{ name: 'Mandalay Bay Events Center' }, { name: 'Michelob ULTRA Arena' }],
    location: [-115.1790209, 36.0906483],
    capacity: [
      { seats: 12000, setup: 'basketball', note: 'Secondary. No official WNBA-configuration figure; the Aces use part of the bowl. Rename date from Mandalay Bay Events Center was not verified. Source: venue table A09.' },
    ],
    roof: 'indoor',
  },
  'mgm-grand-garden': {
    id: 'mgm-grand-garden',
    metroId: 'las-vegas',
    names: [{ name: 'MGM Grand Garden Arena' }],
    location: [-115.1685689, 36.1048311],
    capacity: [
      { seats: 16800, setup: 'concert', note: 'Official fact sheet, Jan 15, 2026: boxing/UFC and center-stage concert up to 16,800. Source: venue table A07.' },
    ],
    roof: 'indoor',
  },
  'dolby-live': {
    id: 'dolby-live',
    metroId: 'las-vegas',
    names: [{ name: 'Park Theater' }, { name: 'Dolby Live' }],
    location: [-115.1749787, 36.1041326],
    // Reseller figure of 5,200 was not stored. The venue answer said to confirm an official number first.
    capacity: [],
    roof: 'indoor',
  },
  'ph-live': {
    id: 'ph-live',
    metroId: 'las-vegas',
    names: [
      { name: 'AXIS' },
      { name: 'Zappos Theater', from: '2018-02-01' },
      { name: 'Bakkt Theater', from: '2023-03-24' },
      { name: 'PH Live', from: '2024-07-01' },
    ],
    // Venue-table coordinates (Wikipedia). OpenStreetMap resolved Planet Hollywood, not the theater.
    location: [-115.1701, 36.1099],
    capacity: [
      { seats: 7000, setup: 'concert', note: 'Secondary, about 7,000, set at the 2000 reopening. GA exists; the seated vs GA split was not published. PH Live rename is July 2024 vs August 2024. Source: venue table A14.' },
    ],
    roof: 'indoor',
  },
  sphere: {
    id: 'sphere',
    metroId: 'las-vegas',
    names: [{ name: 'Sphere' }],
    location: [-115.1620674, 36.1212076],
    capacity: [
      { seats: 17600, setup: 'concert', note: 'Secondary: 17,600 seated; 20,000 with floor (Wikipedia; 8K Association, July 2023). Conflicts with 18,600 seated reported elsewhere. Official capacity page not retrieved. Source: venue table A05.' },
    ],
    roof: 'indoor',
  },
  'resorts-world-theatre': {
    id: 'resorts-world-theatre',
    metroId: 'las-vegas',
    names: [{ name: 'Resorts World Theatre' }],
    location: [-115.1683513, 36.1345604],
    capacity: [
      { seats: 5000, setup: 'concert', fromYear: 2021, note: 'Reported opening figure, December 2021. Source: venue table A18.' },
      { seats: 4869, setup: 'concert', fromYear: 2025, note: 'Reported May 29, 2025, quoting AEG: 4,869 GA+seated; 4,561 fully seated. Below 5,000 from the 2025 renovation. Source: venue table A18.' },
    ],
    roof: 'indoor',
  },
  'bleaulive-theater': {
    id: 'bleaulive-theater',
    metroId: 'las-vegas',
    names: [{ name: 'BleauLive Theater' }],
    // OpenStreetMap resolved Fontainebleau, not the theater.
    location: [-115.1592284, 36.1374208],
    capacity: [
      { seats: 3800, setup: 'concert', note: 'Secondary. Muted (under 5,000). Source: venue table A20.' },
    ],
    roof: 'indoor',
  },
  'thomas-mack-center': {
    id: 'thomas-mack-center',
    metroId: 'las-vegas',
    names: [{ name: 'Thomas & Mack Center' }],
    location: [-115.1442662, 36.104923],
    capacity: [
      { seats: 18000, setup: 'basketball', note: 'Official post-modernization basketball. Conflicts with secondary 17,923. Pre-modernization 19,522 boxing / 18,500 basketball is not the current room. Cox Pavilion is a separate room and is not mapped. Source: venue table A06.' },
    ],
    roof: 'indoor',
  },
  'orleans-arena': {
    id: 'orleans-arena',
    metroId: 'las-vegas',
    names: [{ name: 'Orleans Arena' }],
    location: [-115.2022465, 36.1058277],
    capacity: [
      { seats: 5736, note: 'Official production guide, July 2024: permanent seats. Source: venue table A12.' },
      { seats: 7773, setup: 'hockey', note: 'Secondary. Source: venue table A12.' },
      { seats: 8000, setup: 'basketball', note: 'Reported, about 8,000. Source: venue table A12.' },
      { seats: 9500, setup: 'concert', note: 'Secondary maximum. Source: venue table A12.' },
    ],
    roof: 'indoor',
  },
  'downtown-las-vegas-events-center': {
    id: 'downtown-las-vegas-events-center',
    metroId: 'las-vegas',
    names: [{ name: 'Downtown Las Vegas Events Center' }],
    location: [-115.1446408, 36.1687163],
    capacity: [
      { seats: 11000, setup: 'concert', note: 'Official: main venue up to 11,000 standing. All available space up to 20,000 is a different footprint. The tent (1,500 seated / 2,000 standing) is not this room. A third-party listing says 2,500 scalable to 11,000. Source: venue table A10.' },
    ],
    roof: 'open',
  },
  'cashman-field': {
    id: 'cashman-field',
    metroId: 'las-vegas',
    names: [{ name: 'Cashman Field' }],
    location: [-115.1298902, 36.1797605],
    capacity: [
      { seats: 10000, setup: 'soccer', note: 'Reported, about 10,000. Secondary lists 12,500. Final match Oct 17, 2026. Source: venue table A08.' },
    ],
    roof: 'open',
  },
  'las-vegas-ballpark': {
    id: 'las-vegas-ballpark',
    metroId: 'las-vegas',
    names: [{ name: 'Las Vegas Ballpark' }],
    location: [-115.3294897, 36.152704],
    capacity: [
      { seats: 10000, setup: 'baseball', note: 'Official (A\'s Las Vegas series guide): about 8,200 fixed seats, 10,000 capacity. Secondary infobox 8,196 seats. June 2026 MLB games took some seats out of sale. Source: venue table A11.' },
    ],
    roof: 'open',
  },
  'lees-family-forum': {
    id: 'lees-family-forum',
    metroId: 'las-vegas',
    names: [{ name: 'Dollar Loan Center' }, { name: "Lee's Family Forum", from: '2024-04-02' }],
    location: [-115.081418, 36.0193318],
    capacity: [
      { seats: 5567, setup: 'hockey', note: 'Reported fixed seats and 28 suites. The rounded about 6,000 is not used. Source: venue table A15.' },
    ],
    roof: 'indoor',
  },
  'las-vegas-motor-speedway': {
    id: 'las-vegas-motor-speedway',
    metroId: 'las-vegas',
    names: [{ name: 'Las Vegas Motor Speedway' }],
    location: [-115.0094164, 36.2711872],
    capacity: [
      { seats: 80000, setup: 'racing', note: 'Reported, about 80,000 permanent seats after upgrades. Conflicts: secondary 75,000 at the end of 2018 with 8,000 more removed in 2019; stale 123,000; reseller 131,000. Source: venue table A01.' },
    ],
    roof: 'open',
  },
  'lvms-dirt-track': {
    id: 'lvms-dirt-track',
    metroId: 'las-vegas',
    names: [{ name: 'LVMS Dirt Track' }],
    // OpenStreetMap has the speedway, not this child track.
    location: [-115.0094164, 36.2711872],
    capacity: [
      { seats: 8200, setup: 'racing', note: 'Secondary. Official LVMS confirmation still needed. Complex point, not a surveyed track point. Source: venue table A13.' },
    ],
    roof: 'open',
  },
  'lvms-bullring': {
    id: 'lvms-bullring',
    metroId: 'las-vegas',
    names: [{ name: 'LVMS Bullring' }],
    location: [-115.0094164, 36.2711872],
    capacity: [
      { seats: 5400, setup: 'racing', note: 'Secondary. Official LVMS confirmation still needed. Complex point, not a surveyed track point. Source: venue table A16.' },
    ],
    roof: 'open',
  },
  'south-point-arena': {
    id: 'south-point-arena',
    metroId: 'las-vegas',
    names: [{ name: 'Arena at South Point Hotel And Casino' }, { name: 'South Point Arena' }],
    // OpenStreetMap resolved the hotel at 9777 Las Vegas Blvd S, not the arena.
    location: [-115.1761154, 36.0119389],
    capacity: [
      { seats: 4600, note: 'Official: Main Arena 4,600 seats. Other arenas in the complex have no published spectator capacity. Muted (under 5,000). Source: venue table A19.' },
    ],
    roof: 'indoor',
  },
  // Capacity unknown. An observed crowd of about 9,000 is not a capacity (venue table A21).
  'craig-ranch-amphitheater': {
    id: 'craig-ranch-amphitheater',
    metroId: 'las-vegas',
    names: [{ name: 'Amphitheater at Craig Ranch Regional Park' }],
    // OpenStreetMap resolved the park, not the amphitheater.
    location: [-115.149204, 36.2431197],
    capacity: [],
    roof: 'open',
  },
  // Kansas City (docs/research/city-builds/kansas-city/kansas-city-venue-table-answer.md, Oct 12, 2026).
  // Bi-state core. No carShare overrides: the city-type figures are estimates, not measured splits.
  // Coordinates are OpenStreetMap unless a comment says the room point was not separated.
  'arrowhead-stadium': {
    id: 'arrowhead-stadium',
    metroId: 'kansas-city',
    names: [
      { name: 'Arrowhead Stadium' },
      { name: 'GEHA Field at Arrowhead Stadium', from: '2021-01-01' },
      { name: 'Kansas City Stadium', from: '2026-06-16' },
      { name: 'Arrowhead Stadium', from: '2026-08-05' },
    ],
    location: [-94.4839993, 39.0489358],
    capacity: [
      {
        seats: 76416,
        setup: 'football',
        note: 'Official/reported. 76,416 since 2010. FIFA 2026 config was 69,045 and is not the Chiefs figure. Concert capacity unknown. Source: https://blog.ticketmaster.com/step-inside-arrowhead-stadium-kansas-city/',
      },
    ],
    roof: 'open',
  },
  'kauffman-stadium': {
    id: 'kauffman-stadium',
    metroId: 'kansas-city',
    names: [{ name: 'Kauffman Stadium' }],
    location: [-94.4804598, 39.0515081],
    capacity: [
      {
        seats: 37903,
        setup: 'baseball',
        note: 'Official (MLB.com). Conflicts with Wikipedia 38,053 for 2026. Source: https://www.mlb.com/royals/ballpark/kauffman-stadium',
      },
    ],
    roof: 'open',
  },
  'kansas-speedway': {
    id: 'kansas-speedway',
    metroId: 'kansas-city',
    names: [{ name: 'Kansas Speedway' }],
    location: [-94.8306045, 39.1158122],
    capacity: [
      {
        seats: 48000,
        setup: 'racing',
        fromYear: 2019,
        note: 'Reported grandstand seats as of 2019. A 48,000–75,000 range includes infield and camping, not seats. Source: https://en.wikipedia.org/wiki/Kansas_Speedway',
      },
    ],
    roof: 'open',
  },
  'sporting-park': {
    id: 'sporting-park',
    metroId: 'kansas-city',
    names: [
      { name: "Children's Mercy Park" },
      { name: 'Sporting Park', from: '2026-02-01' },
    ],
    location: [-94.8233504, 39.1216438],
    capacity: [
      {
        seats: 18467,
        setup: 'soccer',
        note: 'Official design figure. MLS mode with standing is about 21,000 (reported), not stored as a second soccer row. Source: https://populous.com/projects/childrens-mercy-park?lang=es',
      },
      {
        seats: 25000,
        setup: 'concert',
        note: 'Reported concert configuration. Source: https://en.wikipedia.org/wiki/Sporting_Park',
      },
    ],
    roof: 'covered',
  },
  't-mobile-center': {
    id: 't-mobile-center',
    metroId: 'kansas-city',
    names: [
      { name: 'Sprint Center' },
      { name: 'T-Mobile Center', from: '2020-01-01' },
    ],
    location: [-94.5799495, 39.0972952],
    capacity: [
      {
        seats: 19252,
        setup: 'concert',
        note: 'Reported. Source: https://en.wikipedia.org/wiki/T-Mobile_Center',
      },
      {
        seats: 18972,
        setup: 'basketball',
        note: 'Reported. An engineer sheet lists 18,500 seats as a round project figure. Source: https://en.wikipedia.org/wiki/T-Mobile_Center',
      },
      {
        seats: 17544,
        setup: 'hockey',
        note: 'Reported. Source: https://en.wikipedia.org/wiki/T-Mobile_Center',
      },
      {
        seats: 17297,
        setup: 'football',
        note: 'Reported arena-football configuration, not an NFL setup. Source: https://en.wikipedia.org/wiki/T-Mobile_Center',
      },
    ],
    roof: 'indoor',
  },
  'azura-amphitheater': {
    id: 'azura-amphitheater',
    metroId: 'kansas-city',
    names: [
      { name: 'Sandstone Amphitheater' },
      { name: 'Providence Medical Center Amphitheater', from: '2016-01-01' },
      { name: 'Azura Amphitheater', from: '2021-01-01' },
    ],
    location: [-94.8773837, 39.1138158],
    capacity: [
      {
        seats: 18000,
        setup: 'concert',
        note: 'Official. About 3,100 reserved seats; the rest is lawn. Not 18,000 chairs. Source: https://www.azuracu.com/about/azura-amphitheater/',
      },
    ],
    roof: 'open',
  },
  'cpkc-stadium': {
    id: 'cpkc-stadium',
    metroId: 'kansas-city',
    names: [{ name: 'CPKC Stadium' }],
    location: [-94.5665908, 39.1193789],
    // The venue-table answer left the roof unconfirmed. Recorded open because the sources describe a soccer stadium, not an indoor arena.
    capacity: [
      {
        seats: 11500,
        setup: 'soccer',
        note: 'Reported seated capacity. Expansion to 18,000 is financed and not built. Source: https://en.wikipedia.org/wiki/2026_Kansas_City_Current_season',
      },
    ],
    roof: 'open',
  },
  'municipal-auditorium-arena': {
    id: 'municipal-auditorium-arena',
    metroId: 'kansas-city',
    names: [{ name: 'Municipal Auditorium' }, { name: 'Municipal Auditorium Arena' }],
    location: [-94.5864003, 39.0979007],
    capacity: [
      {
        seats: 7316,
        note: 'Official fixed seats. The 10,721 maximum adds risers and floor seats and is not used unless that setup is confirmed. Source: https://kcconvention.com/venue/municipal-arena/',
      },
    ],
    roof: 'indoor',
  },
  'kansas-city-music-hall': {
    id: 'kansas-city-music-hall',
    metroId: 'kansas-city',
    names: [{ name: 'Music Hall' }, { name: 'Kansas City Music Hall' }],
    location: [-94.5867058, 39.0985136],
    capacity: [
      {
        seats: 2363,
        setup: 'concert',
        note: 'Official. Same complex as Municipal Auditorium Arena; do not inherit the arena figure. Source: https://kcconvention.com/venue/music-hall/',
      },
    ],
    roof: 'indoor',
  },
  'starlight-theatre': {
    id: 'starlight-theatre',
    metroId: 'kansas-city',
    names: [{ name: 'Starlight Theatre' }],
    location: [-94.5328099, 39.0075805],
    capacity: [
      {
        seats: 7739,
        setup: 'concert',
        note: 'Official tech specs. Conflicts with 7,958 in secondary listings. Source: https://kcstarlight.com/?p=217',
      },
    ],
    roof: 'open',
  },
  'starlight-cohen-stage': {
    id: 'starlight-cohen-stage',
    metroId: 'kansas-city',
    names: [{ name: 'Starlight Cohen Community Stage' }, { name: 'Cohen Community Stage' }],
    // OSM did not resolve the interior stage. Same campus point as the main theatre.
    location: [-94.5328099, 39.0075805],
    capacity: [
      {
        seats: 1200,
        setup: 'concert',
        note: 'Reported approximate (~1,200). Not on Starlight\'s tech page. Source: https://thrillzing.com/music-venues/starlight-theatre-kansas-city/',
      },
    ],
    roof: 'indoor',
  },
  'legends-field': {
    id: 'legends-field',
    metroId: 'kansas-city',
    names: [
      { name: 'CommunityAmerica Ballpark' },
      { name: 'T-Bones Stadium', from: '2003-01-01' },
      { name: 'Field of Legends', from: '2021-01-01' },
      { name: 'Legends Field', from: '2021-01-01' },
    ],
    location: [-94.8308572, 39.124496],
    capacity: [
      {
        seats: 6537,
        setup: 'baseball',
        note: 'Reported fixed seats. Berm and standing push past 7,500; former soccer config was 10,385. Active figure is the fixed seats. Source: https://en.wikipedia.org/wiki/Legends_Field',
      },
    ],
    roof: 'open',
  },
  'cable-dahmer-arena': {
    id: 'cable-dahmer-arena',
    metroId: 'kansas-city',
    names: [
      { name: 'Independence Events Center' },
      { name: 'Cable Dahmer Arena', from: '2011-01-01' },
    ],
    location: [-94.3574967, 39.0398613],
    capacity: [
      {
        seats: 5800,
        setup: 'hockey',
        note: 'Reported. Indoor soccer and concert configurations were not published. Source: https://www.kshb.com/news/local-news/missouri/jackson-county/mavericks-independence-agree-to-3-year-extension-at-cable-dahmer-arena',
      },
    ],
    roof: 'indoor',
  },
  'hale-arena': {
    id: 'hale-arena',
    metroId: 'kansas-city',
    names: [{ name: 'Hale Arena' }],
    location: [-94.6045545, 39.0900121],
    capacity: [
      {
        seats: 5000,
        note: 'Reported show-arena seats, one source, exactly at the friction line. American Royal is moving part of its calendar to Kansas City, Kansas. Source: https://www.thepitchkc.com/?p=3284',
      },
    ],
    roof: 'indoor',
  },
  'hy-vee-arena': {
    id: 'hy-vee-arena',
    metroId: 'kansas-city',
    names: [
      { name: 'Kemper Arena' },
      { name: 'Mosaic Arena', from: '2017-01-01' },
      { name: 'Hy-Vee Arena', from: '2018-01-01' },
    ],
    // OSM places the arena on Wyoming Street; the research address is 1800 Genessee, the next block.
    location: [-94.6058218, 39.0917752],
    capacity: [
      {
        seats: 3500,
        setup: 'basketball',
        note: 'Lower room after the floor split (5,000 upper / 3,500 lower). The upper bowl is exactly 5,000 and is not the active figure: research says mute unless one spectator event uses that bowl. Source: https://flatlandkc.org/news-issues/hy-vee-arena-opens-bringing-new-bounce-to-west-bottoms/',
      },
    ],
    roof: 'indoor',
  },
  'midland-theatre': {
    id: 'midland-theatre',
    metroId: 'kansas-city',
    names: [
      { name: 'The Midland' },
      { name: 'Arvest Bank Theatre at The Midland', from: '2013-09-13' },
    ],
    location: [-94.5837203, 39.0988674],
    // The official site publishes a live-show range, 1,300–3,000, not one figure. Left unknown.
    capacity: [],
    roof: 'indoor',
  },
  'kauffman-center-muriel': {
    id: 'kauffman-center-muriel',
    metroId: 'kansas-city',
    names: [{ name: 'Muriel Kauffman Theatre' }],
    // OSM building point. The two halls were not separated.
    location: [-94.587694, 39.0941587],
    capacity: [
      {
        seats: 1800,
        setup: 'concert',
        note: 'Reported. Do not merge with Helzberg Hall. Source: https://kctoday.6amcity.com/kansas-citys-biggest-sports-and-entertainment-venues',
      },
    ],
    roof: 'indoor',
  },
  'kauffman-center-helzberg': {
    id: 'kauffman-center-helzberg',
    metroId: 'kansas-city',
    names: [{ name: 'Helzberg Hall' }],
    location: [-94.587694, 39.0941587],
    capacity: [
      {
        seats: 1600,
        setup: 'concert',
        note: 'Reported. Separate room from Muriel Kauffman Theatre. Source: https://kctoday.6amcity.com/kansas-citys-biggest-sports-and-entertainment-venues',
      },
    ],
    roof: 'indoor',
  },
  'uptown-theater-kc': {
    id: 'uptown-theater-kc',
    metroId: 'kansas-city',
    names: [{ name: 'Uptown Theater' }],
    location: [-94.5910506, 39.0609236],
    capacity: [
      {
        seats: 2400,
        setup: 'concert',
        note: 'Reported. The Encore Room is a separate smaller space and is not this room. Source: https://kctoday.6amcity.com/city-guide/play/live-music-venues-kansas-city',
      },
    ],
    roof: 'indoor',
  },
  'theatre-in-the-park': {
    id: 'theatre-in-the-park',
    metroId: 'kansas-city',
    names: [{ name: 'Theatre in the Park' }, { name: 'The Theatre in the Park' }],
    location: [-94.7878379, 38.9897673],
    capacity: [
      {
        seats: 3000,
        setup: 'concert',
        note: 'Reported. Shawnee Mission Park; below the friction line. Source: https://kctoday.6amcity.com/kansas-citys-biggest-sports-and-entertainment-venues',
      },
    ],
    roof: 'open',
  },
  'grinders-kc': {
    id: 'grinders-kc',
    metroId: 'kansas-city',
    names: [{ name: 'Grinders' }],
    // OSM resolved the restaurant, not a separate stage.
    location: [-94.578132, 39.0914904],
    capacity: [
      {
        seats: 2500,
        setup: 'concert',
        note: 'Reported outdoor stage. Source: https://kctoday.6amcity.com/city-guide/play/live-music-venues-kansas-city',
      },
    ],
    roof: 'open',
  },
  'the-truman': {
    id: 'the-truman',
    metroId: 'kansas-city',
    names: [{ name: 'The Truman' }],
    location: [-94.5761415, 39.0952132],
    capacity: [
      {
        seats: 1200,
        setup: 'concert',
        note: 'Reported. Opened September 2017. Source: https://kctoday.6amcity.com/city-guide/play/live-music-venues-kansas-city',
      },
    ],
    roof: 'indoor',
  },
  'folly-theater': {
    id: 'folly-theater',
    metroId: 'kansas-city',
    names: [{ name: 'Folly Theatre' }, { name: 'Folly Theater' }],
    location: [-94.587292, 39.1003099],
    capacity: [
      {
        seats: 1006,
        setup: 'concert',
        note: 'Reported after a renovation removed seats. Conflicts with 1,078 on another page of the same guide. Source: https://kctoday.6amcity.com/kansas-citys-biggest-sports-and-entertainment-venues',
      },
    ],
    roof: 'indoor',
  },

  // Houston (Oct 12, 2026; docs/research/city-builds/houston/). Coordinates are OpenStreetMap.
  // No carShare overrides: the city-type answer has derived and estimated shares, not a measured mode split.
  // Order seeds gridlock zones (the zone center is the first room). Rooms under 5,000 stay on the map, muted.
  'reliant-stadium': {
    id: 'reliant-stadium',
    metroId: 'houston',
    names: [
      { name: 'Reliant Stadium' },
      { name: 'NRG Stadium', from: '2014-03-19' },
      { name: 'Houston Stadium', from: '2026-06-11' },
      { name: 'Reliant Stadium', from: '2026-08-01' },
    ],
    location: [-95.410802, 29.684858],
    capacity: [
      { seats: 72220, setup: 'football', note: 'Official current. Reported steps: 69,500 (2002), 71,054 (2003–13), 71,795 (2014–17), 72,220 (2018–). Conflict: 71,995 on a Titans media guide. Source: https://www.reliantpark.com/reliant-stadium/' },
      { seats: 80000, setup: 'concert', note: 'Official upper of "72,000 to 80,000" for special events. An 80,203 concert is attendance, not a seat count. Source: https://www.reliantpark.com/reliant-stadium/' },
    ],
    roof: 'covered',
  },
  'reliant-arena': {
    id: 'reliant-arena',
    metroId: 'houston',
    names: [
      { name: 'Astroarena' },
      { name: 'Reliant Arena' },
      { name: 'NRG Arena', from: '2014-03-12' },
      { name: 'Reliant Arena', from: '2026-08-01' },
    ],
    location: [-95.405969, 29.681173],
    capacity: [
      { seats: 5700, setup: 'concert', note: 'Official "5,700+" seats, not an exact count. Wikipedia cites 5,800. Source: https://www.reliantpark.com/reliant-park-facilities/' },
    ],
    roof: 'indoor',
  },
  'reliant-arena-pavilion': {
    id: 'reliant-arena-pavilion',
    metroId: 'houston',
    names: [
      { name: 'NRG Pavilion' },
      { name: 'Reliant Arena Pavilion' },
    ],
    // Same building as Reliant Arena. OSM has one arena point. The pavilion rename is inferred from the facility rename.
    location: [-95.405969, 29.681173],
    capacity: [
      { seats: 1500, setup: 'concert', note: 'Official "1,500+" seats. Source: https://www.reliantpark.com/reliant-park-facilities/' },
    ],
    roof: 'indoor',
  },
  'daikin-park': {
    id: 'daikin-park',
    metroId: 'houston',
    names: [
      { name: 'Minute Maid Park' },
      { name: 'Daikin Park', from: '2025-01-01' },
    ],
    location: [-95.355234, 29.757232],
    capacity: [
      { seats: 41168, setup: 'baseball', note: 'Reported (SportCal / Wikipedia). Conflicts: 40,950 Baseball-Reference, 40,963 AP. The Astros\' own figure was not fetched. Source: https://www.sportcal.com/newsletters/astros-to-rename-minute-maid-park-as-daikin-secures-stadium-naming-rights' },
    ],
    roof: 'covered',
  },
  'toyota-center': {
    id: 'toyota-center',
    metroId: 'houston',
    names: [{ name: 'Toyota Center' }],
    location: [-95.362231, 29.750747],
    capacity: [
      { seats: 18104, setup: 'basketball', note: 'Reported. Conflict: about 18,055 (3D Digital Venue). Official Rockets figure was not fetched. 2026–27 renovation capacity effect unknown. Source: https://en.wikipedia.org/wiki/Toyota_Center' },
      { seats: 19000, setup: 'concert', note: 'Reported "up to about 19,000". Source: https://www.thestadiumbusiness.com/2026/04/09/toyota-center-set-for-major-revamp/' },
    ],
    roof: 'indoor',
  },
  'shell-energy-stadium': {
    id: 'shell-energy-stadium',
    metroId: 'houston',
    names: [
      { name: 'BBVA Compass Stadium' },
      { name: 'BBVA Stadium' },
      { name: 'Shell Energy Stadium' },
    ],
    location: [-95.352341, 29.752026],
    capacity: [
      { seats: 22039, setup: 'soccer', note: 'Reported. Conflicts: 20,656 (KHOU) and 20,039 (Stadium Journey). Football and concert configurations unknown. Rename dates were not verified. Source: https://en.wikipedia.org/wiki/Shell_Energy_Stadium' },
    ],
    roof: 'open',
  },
  '713-music-hall': {
    id: '713-music-hall',
    metroId: 'houston',
    names: [
      { name: 'The Terminal' },
      { name: '713 Music Hall' },
    ],
    location: [-95.364025, 29.765919],
    capacity: [
      { seats: 5000, setup: 'concert', note: 'Official city listing: 5,000 occupancy, mostly a flat GA floor. Not 5,000 seats. Threshold case. Source: https://www.houstontx.gov/events/713-music-hall.html' },
    ],
    roof: 'indoor',
  },
  'jones-hall': {
    id: 'jones-hall',
    metroId: 'houston',
    names: [{ name: 'Jones Hall' }, { name: 'Jones Hall for the Performing Arts' }],
    location: [-95.365028, 29.760873],
    capacity: [
      { seats: 2912, setup: 'concert', note: 'Official Houston Symphony. Can shrink to 2,300. Conflict: 2,883 in a secondary roundup. Source: https://houstonsymphony.org/visit/seating-charts' },
    ],
    roof: 'indoor',
  },
  'sarofim-hall': {
    id: 'sarofim-hall',
    metroId: 'houston',
    names: [{ name: 'Sarofim Hall' }],
    location: [-95.369706, 29.761658],
    capacity: [
      { seats: 2650, setup: 'concert', note: 'Reported. Hobby Center\'s other room, Zilkha Hall (500), is below the pre-list line and is not a row. Source: https://catastrophictheatre.com/press/citys-theater-district-among-the-best/' },
    ],
    roof: 'indoor',
  },
  'wortham-brown-theater': {
    id: 'wortham-brown-theater',
    metroId: 'houston',
    names: [{ name: 'Brown Theater' }],
    location: [-95.365622, 29.763351],
    capacity: [
      { seats: 2423, setup: 'concert', note: 'Reported. Conflict: 2,405. Wortham\'s two rooms are separate. Source: https://catastrophictheatre.com/press/citys-theater-district-among-the-best/' },
    ],
    roof: 'indoor',
  },
  'wortham-cullen-theater': {
    id: 'wortham-cullen-theater',
    metroId: 'houston',
    names: [{ name: 'Cullen Theater' }],
    location: [-95.365622, 29.763351],
    capacity: [
      { seats: 1100, setup: 'concert', note: 'Reported. Source: https://catastrophictheatre.com/press/citys-theater-district-among-the-best/' },
    ],
    roof: 'indoor',
  },
  'tdecu-stadium': {
    id: 'tdecu-stadium',
    metroId: 'houston',
    names: [{ name: 'John O\'Quinn Field at TDECU Stadium' }, { name: 'TDECU Stadium' }],
    // OSM names the pitch John O'Quinn Field and has no separate stadium node.
    location: [-95.349184, 29.721997],
    capacity: [
      { seats: 40000, setup: 'football', note: 'Reported (architect and concessionaire). Conflict: 39,700 plus standing room (Wikipedia, current). Post-2024 renovation effect unverified. Source: https://walterpmoore.com/projects/university-houston-tdecu-stadium' },
    ],
    roof: 'open',
  },
  'fertitta-center': {
    id: 'fertitta-center',
    metroId: 'houston',
    names: [
      { name: 'Hofheinz Pavilion' },
      { name: 'Fertitta Center', from: '2018-12-01' },
    ],
    location: [-95.346961, 29.724737],
    capacity: [
      { seats: 7035, setup: 'basketball', fromYear: 2018, note: 'Reported. Conflict: 7,100 (concessionaire). Earlier reported layouts: 10,000 (1969–98), 8,479 (1998–2017). Source: https://en.wikipedia.org/wiki/Fertitta_Center' },
    ],
    roof: 'indoor',
  },
  'schroeder-park': {
    id: 'schroeder-park',
    metroId: 'houston',
    names: [{ name: 'Schroeder Park' }, { name: 'Darryl & Lori Schroeder Park' }],
    location: [-95.34536, 29.726957],
    capacity: [
      { seats: 3500, setup: 'baseball', note: 'Reported (concessionaire). Source: https://media.delawarenorth.com/delaware-north-sportservice-named-food-and-beverage-partner-for-university-houston-athletics-facilities/' },
    ],
    roof: 'open',
  },
  'cougar-softball-stadium': {
    id: 'cougar-softball-stadium',
    metroId: 'houston',
    names: [{ name: 'Cougar Softball Stadium' }],
    location: [-95.349056, 29.727193],
    capacity: [
      { seats: 1200, setup: 'baseball', note: 'Reported (concessionaire). Source: https://media.delawarenorth.com/delaware-north-sportservice-named-food-and-beverage-partner-for-university-houston-athletics-facilities/' },
    ],
    roof: 'open',
  },
  'first-community-stadium': {
    id: 'first-community-stadium',
    metroId: 'houston',
    names: [
      { name: 'Rice Stadium' },
      { name: 'First Community Stadium', from: '2026-10-03' },
    ],
    location: [-95.409324, 29.716323],
    capacity: [
      { seats: 47000, setup: 'football', note: 'Official Rice 2020 rental page. Conflict: 37,000 (Stadium Journey). Post-renovation capacity is unknown and not applied. Not Rice–Totten Stadium in Mississippi. Source: https://riceowls.com/sports/2020/6/11/outside-event-facility-rentals.aspx' },
    ],
    roof: 'open',
  },
  'tudor-fieldhouse': {
    id: 'tudor-fieldhouse',
    metroId: 'houston',
    names: [{ name: 'Tudor Fieldhouse' }],
    location: [-95.403987, 29.714983],
    capacity: [
      { seats: 5208, setup: 'basketball', note: 'Reported, single secondary source, just over 5,000. Source: https://stadiumjourney.com/stadiums/tudor-fieldhouse-s571' },
    ],
    roof: 'indoor',
  },
  'reckling-park': {
    id: 'reckling-park',
    metroId: 'houston',
    names: [{ name: 'Reckling Park' }],
    location: [-95.403988, 29.713426],
    capacity: [
      { seats: 6193, setup: 'baseball', note: 'Official Rice facility page. Conflict: 7,000 on the 2020 rental page. Includes 3,700+ chairbacks; the rest is general admission. Source: https://riceowls.com/facilities/reckling-park/5' },
    ],
    roof: 'open',
  },
  'cy-fair-fcu-stadium': {
    id: 'cy-fair-fcu-stadium',
    metroId: 'houston',
    names: [{ name: 'Berry Center stadium' }, { name: 'Cy-Fair FCU Stadium' }],
    location: [-95.68874, 29.905959],
    capacity: [
      { seats: 11000, setup: 'football', note: 'Reported. High-school room with no public ticket feed. Source: https://kiiitv.com/article/sports/high-school/hs-football/texas-high-school-football-stadiums-most-expensive/287-616a4f40-ba9a-4f19-98d9-4585838950d3' },
    ],
    roof: 'open',
  },
  'berry-center-arena': {
    id: 'berry-center-arena',
    metroId: 'houston',
    names: [{ name: 'Berry Center Arena' }],
    location: [-95.688464, 29.904942],
    capacity: [
      { seats: 9500, setup: 'basketball', note: 'Reported, one secondary source. Verify with Cy-Fair ISD before treating the friction line as settled. Source: https://kiiitv.com/article/sports/high-school/hs-football/texas-high-school-football-stadiums-most-expensive/287-616a4f40-ba9a-4f19-98d9-4585838950d3' },
    ],
    roof: 'indoor',
  },
  'cynthia-woods-mitchell-pavilion': {
    id: 'cynthia-woods-mitchell-pavilion',
    metroId: 'houston',
    names: [
      { name: 'Cynthia Woods Mitchell Pavilion' },
      { name: 'The Cynthia Woods Mitchell Pavilion presented by Huntsman' },
    ],
    location: [-95.464202, 30.161401],
    capacity: [
      { seats: 16500, setup: 'concert', note: 'Official operator listing: 6,500 covered seats plus about 10,000 lawn. The lawn is GA, not seats. Source: https://blog.ticketmaster.com/venue-faq-cynthia-woods-mitchell-pavilion-woodlands-tx/' },
    ],
    roof: 'covered',
  },
  'pvamu-panther-stadium': {
    id: 'pvamu-panther-stadium',
    metroId: 'houston',
    names: [{ name: 'Panther Stadium' }, { name: 'Panther Stadium at Blackshear Field' }],
    location: [-95.994275, 30.091196],
    capacity: [
      { seats: 15000, setup: 'football', note: 'Official. Architect says up to 15,510. Edge room in Waller County; crowd is campus-centered. Not Atlanta\'s Panther Stadium. Source: https://pvpanthers.com/facilities/blackshear-field/1' },
    ],
    roof: 'open',
  },
  'legacy-stadium': {
    id: 'legacy-stadium',
    metroId: 'houston',
    names: [{ name: 'Mike Johnston Field' }, { name: 'Legacy Stadium' }],
    location: [-95.805478, 29.800052],
    capacity: [
      { seats: 12000, setup: 'football', note: 'Reported. Katy ISD room with no public ticket feed. Source: https://www.asumag.com/planning-design/new-construction/article/20855703/katy-texas-district-opens-h' },
    ],
    roof: 'open',
  },
  'woodforest-bank-stadium': {
    id: 'woodforest-bank-stadium',
    metroId: 'houston',
    names: [{ name: 'Woodforest Bank Stadium' }],
    location: [-95.446885, 30.185793],
    capacity: [
      { seats: 10000, setup: 'football', note: 'Reported. Conroe ISD room with no public ticket feed. Source: https://kiiitv.com/article/sports/high-school/hs-football/texas-high-school-football-stadiums-most-expensive/287-616a4f40-ba9a-4f19-98d9-4585838950d3' },
    ],
    roof: 'open',
  },
  'tomball-isd-stadium': {
    id: 'tomball-isd-stadium',
    metroId: 'houston',
    names: [{ name: 'Tomball ISD Stadium' }],
    location: [-95.625704, 30.111654],
    capacity: [
      { seats: 10000, setup: 'football', note: 'Reported. No public ticket feed. Source: https://kiiitv.com/article/sports/high-school/hs-football/texas-high-school-football-stadiums-most-expensive/287-616a4f40-ba9a-4f19-98d9-4585838950d3' },
    ],
    roof: 'open',
  },
  'challenger-columbia-stadium': {
    id: 'challenger-columbia-stadium',
    metroId: 'houston',
    names: [{ name: 'Challenger Columbia Stadium' }],
    location: [-95.135475, 29.5183],
    capacity: [
      { seats: 10000, setup: 'football', note: 'Reported. Clear Creek ISD room with no public ticket feed. Source: https://www.cbssports.com/high-school/football/news/top-10-most-expensive-high-school-football-stadiums-in-texas' },
    ],
    roof: 'open',
  },
  'planet-ford-stadium': {
    id: 'planet-ford-stadium',
    metroId: 'houston',
    names: [{ name: 'Planet Ford Stadium' }],
    location: [-95.352316, 30.05841],
    capacity: [
      { seats: 8000, setup: 'football', note: 'Reported. Spring ISD room with no public ticket feed. Source: https://www.cbssports.com/high-school/football/news/top-10-most-expensive-high-school-football-stadiums-in-texas' },
    ],
    roof: 'open',
  },
  'constellation-field': {
    id: 'constellation-field',
    metroId: 'houston',
    names: [{ name: 'Constellation Field' }],
    location: [-95.64696, 29.62258],
    capacity: [
      { seats: 7500, standing: 8606, setup: 'baseball', note: 'Official MLB.com seat count. Reported stated capacity including berm and standing is 8,606. 2025 average attendance was 3,706, which is not the capacity. Source: https://www.mlb.com/news/featured/constellation-field-home-of-the-sugar-land-space-cowboys' },
      { seats: 9500, setup: 'concert', note: 'Reported. Source: https://www.baseball-reference.com/bullpen/Constellation_Field' },
    ],
    roof: 'open',
  },
  // Official range is 1,900 to 6,400 by movable walls (ATG). A 3,300 intermediate is reported.
  // The venue-table answer says not to assume 6,400 when the show's configuration is unpublished, so capacity stays unknown.
  'smart-financial-centre': {
    id: 'smart-financial-centre',
    metroId: 'houston',
    names: [{ name: 'Smart Financial Centre' }, { name: 'Smart Financial Centre at Sugar Land' }],
    location: [-95.643362, 29.577051],
    capacity: [],
    roof: 'indoor',
  },
  'sabercats-stadium': {
    id: 'sabercats-stadium',
    metroId: 'houston',
    names: [
      { name: 'AVEVA Stadium' },
      { name: 'SaberCats Stadium' },
    ],
    // City note: map apps misplace this at 2055 Mowery Rd. OSM point is Houston Sports Park, 12131 Kirby Dr.
    location: [-95.395005, 29.638065],
    capacity: [
      { seats: 3000, standing: 4000, setup: 'soccer', note: 'Official city page: 3,000+ seats, 4,000 maximum including standing. Anchor tenant left before 2026. Under 5,000. Source: https://houstontx.gov/abouthouston/sabercats-stadium.html' },
    ],
    roof: 'open',
  },
  'white-oak-music-hall-lawn': {
    id: 'white-oak-music-hall-lawn',
    metroId: 'houston',
    names: [{ name: 'White Oak Music Hall Lawn' }],
    // Campus point. The lawn and the downstairs room are not separate OSM nodes.
    location: [-95.366809, 29.785793],
    capacity: [
      { seats: 3000, setup: 'concert', note: 'Reported, low-quality secondary, about 3,000. Verify with the venue. Source: https://getmorestreams.com/?p=10491' },
    ],
    roof: 'open',
  },
  'white-oak-music-hall-downstairs': {
    id: 'white-oak-music-hall-downstairs',
    metroId: 'houston',
    names: [{ name: 'White Oak Music Hall Downstairs' }],
    location: [-95.366809, 29.785793],
    capacity: [
      { seats: 1000, setup: 'concert', note: 'Reported, low-quality secondary, about 1,000. At the pre-list line. Verify with the venue. Source: https://getmorestreams.com/?p=10491' },
    ],
    roof: 'indoor',
  },
  // No sourced capacity. Research says pre-list it as Texas Southern's 2026 home; ESPN's 2026 schedule still places those home games at Shell Energy Stadium.
  'ww-thorne-stadium': {
    id: 'ww-thorne-stadium',
    metroId: 'houston',
    names: [{ name: 'W.W. Thorne Stadium' }],
    location: [-95.359986, 29.933616],
    capacity: [],
    roof: 'open',
  },
  'sam-houston-race-park': {
    id: 'sam-houston-race-park',
    metroId: 'houston',
    names: [{ name: 'Sam Houston Race Park' }],
    // OSM commercial-area point. The grandstand itself was not a separate node.
    location: [-95.530219, 29.930121],
    capacity: [],
    roof: 'open',
  },
  // Toronto (Oct 12, 2026; docs/research/city-builds/toronto/). GTA rooms. Hamilton is not in this metro.
  // Coordinates are OpenStreetMap Nominatim hits unless a comment says the point is approximate or a parent building.
  // No carShare overrides: the city-type answer has no measured person-level split. City type transit supplies 0.40.
  'rogers-stadium': {
    id: 'rogers-stadium',
    metroId: 'toronto',
    names: [{ name: 'Rogers Stadium' }],
    location: [-79.46923, 43.74617],
    capacity: [{ seats: 50000, setup: 'concert', fromYear: 2025, note: 'Official concert capacity. Not 50,000 seats: up to 18,000 floor plus up to 32,000 bleachers (reported). Temporary; five-year lease from 2025. Source: https://news.livenationentertainment.com/news/live-nation-canada-opens-rogers-stadium' }],
    roof: 'open',
  },
  'rogers-centre': {
    id: 'rogers-centre',
    metroId: 'toronto',
    names: [{ name: 'SkyDome' }, { name: 'Rogers Centre' }],
    location: [-79.38920, 43.64166],
    capacity: [
      { seats: 49282, setup: 'baseball', note: 'Reported pre-renovation baseball capacity (the 2022 figure). Source: https://baseballparks.com/indepth/rogers-centre-renovation/' },
      { seats: 39150, setup: 'baseball', fromYear: 2024, note: 'Reported seats after the 2022–24 renovation. MLB\'s March 2026 guide says "over 41,000" (likely standing and social areas). 2026 announced average 41,220 exceeded 39,150. Conflict kept; 39,150 is the sourced seat count. Source: https://baseballparks.com/indepth/rogers-centre-renovation/' },
      { seats: 50000, setup: 'concert', note: 'Reported concert range 40,000–50,000. The high end is stored so a sellout is not sized under the published range; it is not an average. A city-type note also cites 10,000–55,000 by configuration. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' },
    ],
    roof: 'covered',
  },
  'bmo-field': {
    id: 'bmo-field',
    metroId: 'toronto',
    // "Toronto Stadium" applied only 12 Jun–2 Jul 2026. The name list has no end date, so BMO Field is repeated from 3 Jul 2026 and stays the current name.
    names: [{ name: 'BMO Field' }, { name: 'Toronto Stadium', from: '2026-06-12' }, { name: 'BMO Field', from: '2026-07-03' }],
    location: [-79.41856, 43.63334],
    capacity: [
      { seats: 28180, setup: 'soccer', note: 'Reported regular seats after the 2026 World Cup temporary stands came down. Wikipedia lists 28,351. About 30,000 with standing is a separate figure and is not added. Temporary World Cup capacity 45,736 (official) applied only 12 Jun–2 Jul 2026; the year model cannot date that window, so it is not stored as current. Source: https://www.blogto.com/sports_play/2026/06/torontos-bmo-field-change-fifa-world-cup/' },
      { seats: 28180, setup: 'football', note: 'Same bowl for Canadian football after the temporary stands were removed. Source: https://www.blogto.com/sports_play/2026/07/toronto-stadium-additions-torn-down-fifa-world-cup/' },
    ],
    roof: 'open',
  },
  'scotiabank-arena': {
    id: 'scotiabank-arena',
    metroId: 'toronto',
    names: [{ name: 'Air Canada Centre' }, { name: 'Aréna Scotiabank', from: '2018-07-01' }, { name: 'Scotiabank Arena', from: '2018-07-01' }],
    location: [-79.37908, 43.64343],
    capacity: [
      { seats: 18800, setup: 'hockey', note: 'Official. Wikipedia reports 18,819, and 20,270 with standing. Theatre setup 5,200 is the same room, not stored as the concert figure. Source: https://scotiabankarena.com/about' },
      { seats: 19800, setup: 'basketball', note: 'Official. Wikipedia reports 20,511 with standing room. Source: https://scotiabankarena.com/about' },
      { seats: 19800, setup: 'concert', note: 'Official full-house concerts. Source: https://scotiabankarena.com/about' },
    ],
    roof: 'indoor',
  },
  'rbc-amphitheatre': {
    id: 'rbc-amphitheatre',
    metroId: 'toronto',
    names: [{ name: 'Molson Canadian Amphitheatre' }, { name: 'Budweiser Stage', from: '2017-01-01' }, { name: 'RBC Amphitheatre', from: '2025-10-28' }],
    location: [-79.41528, 43.62933],
    capacity: [{ seats: 16000, setup: 'concert', note: 'Reported: 16,000 including 7,000 lawn (9,000 pavilion + 7,000 lawn). Not 16,000 seats. Billboard "now-15,000" and "18,000-ish" conflict kept. Scheduled to close fall 2027. Budweiser Stage start day in 2017 was not dated. Source: https://news.pollstar.com/2025/10/31/live-nations-wayne-zronik-talks-newly-named-rbc-amphitheatre-upcoming-renovations-at-popular-toronto-shed/' }],
    roof: 'covered',
  },
  'sobeys-stadium': {
    id: 'sobeys-stadium',
    metroId: 'toronto',
    names: [{ name: 'Rexall Centre' }, { name: 'Aviva Centre', from: '2015-01-01' }, { name: 'Sobeys Stadium', from: '2022-01-01' }],
    location: [-79.51208, 43.77159],
    capacity: [{ seats: 12500, setup: 'tennis', note: 'Reported Stadium Court. Concert listings conflict: 11,000–14,000 versus 9,100. No separate concert figure is stored. Rename days for Aviva (2015) and Sobeys (2022) were years only. Source: https://huddle.today/2022/05/03/empire-unveils-sobeys-stadium-in-toronto-part-of-enhanced-partnership-with-tennis-canada/' }],
    roof: 'open',
  },
  'cne-bandshell': {
    id: 'cne-bandshell',
    metroId: 'toronto',
    // The Bell brand is the CNE-season name. It stays searchable; the year-round name is last so it is what the map shows.
    names: [{ name: 'Bell SOUNDSTAGE at the Bandshell' }, { name: 'CNE Bandshell' }],
    // Approximate. OpenStreetMap has no bandshell point. Research aggregator grounds point, about ±500 m (venue table A7).
    location: [-79.41236, 43.63507],
    capacity: [{ seats: 10000, setup: 'concert', note: 'Reported grounds capacity, mostly standing. Admission is bundled with CNE grounds entry; do not add this crowd to a CNE gate total. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'open',
  },
  'coca-cola-coliseum': {
    id: 'coca-cola-coliseum',
    metroId: 'toronto',
    names: [{ name: 'Ricoh Coliseum' }, { name: 'Coca-Cola Coliseum' }],
    location: [-79.41484, 43.63565],
    capacity: [
      { seats: 8140, setup: 'hockey', note: 'Reported. Other published figures: 8,100 hockey, 8,700 (2024 WNBA announcement), 8,857 on an event listing, 7,779 on a reseller page. Ricoh rename date was not verified. Source: https://en.wikipedia.org/wiki/Coca-Cola_Coliseum' },
      { seats: 8500, setup: 'basketball', note: 'Reported. Source: https://en.wikipedia.org/wiki/Coca-Cola_Coliseum' },
      { seats: 9250, setup: 'concert', note: 'Reported centre-stage. End-stage concerts are published as low as 4,100. Boxing/wrestling 7,600 is a different setup and is not stored. Source: https://en.wikipedia.org/wiki/Coca-Cola_Coliseum' },
    ],
    roof: 'indoor',
  },
  'tribute-communities-centre': {
    id: 'tribute-communities-centre',
    metroId: 'toronto',
    names: [{ name: 'General Motors Centre' }, { name: 'Tribute Communities Centre', from: '2016-11-01' }],
    location: [-78.85920, 43.89701],
    capacity: [
      { seats: 6152, setup: 'hockey', note: 'Official. Appears to include standing. Wikipedia reports 5,180 seated and 6,125 with standing. Oshawa edge of the GTA. Naming term may lapse around Nov 2026. Source: https://www.tributecommunitiescentre.com/about-us' },
      { seats: 7600, setup: 'concert', note: 'Official live-event maximum. The same page says 1,000–7,600 by configuration; 7,600 is the published top, not a typical show. Source: https://www.tributecommunitiescentre.com/about-us' },
    ],
    roof: 'indoor',
  },
  'mississauga-sports-centre': {
    id: 'mississauga-sports-centre',
    metroId: 'toronto',
    names: [{ name: 'Hershey Centre' }, { name: 'Paramount Fine Foods Centre', from: '2018-07-01' }, { name: 'Mississauga Sports and Entertainment Centre', from: '2026-06-01' }],
    location: [-79.65388, 43.63145],
    capacity: [
      { seats: 5133, setup: 'basketball', note: 'Official venue package: 5,133 seated. A +400 floor figure is not added. The city also says "5,100-seat". Source: https://www.mississauga.ca/wp-content/uploads/sites/10/2026/03/06170152/2024_PFFC_Venue_Package-FEB2024.pdf' },
      { seats: 5420, setup: 'hockey', note: 'Reported. Conflicts with the city\'s 5,100-seat figure. Source: https://en.wikipedia.org/wiki/Mississauga_Sports_and_Entertainment_Centre' },
    ],
    roof: 'indoor',
  },
  'great-canadian-theatre-toronto': {
    id: 'great-canadian-theatre-toronto',
    metroId: 'toronto',
    names: [{ name: 'The Theatre at Great Canadian Casino Resort Toronto' }],
    // Parent casino point. Nominatim did not return a separate theatre pin (1133 Queens Plate Dr).
    location: [-79.60180, 43.71609],
    capacity: [{ seats: 5000, setup: 'concert', note: 'Reported general admission. Seated shows are 4,061, fight nights 3,637 or 3,982. Only GA reaches 5,000; the app cannot tell layouts apart. Source: https://news.pollstar.com/2024/01/18/showtime-for-the-theatre-at-great-canadian-casino-resort-toronto/' }],
    roof: 'indoor',
  },
  'caa-centre-brampton': {
    id: 'caa-centre-brampton',
    metroId: 'toronto',
    names: [{ name: 'Powerade Centre' }, { name: 'CAA Centre', from: '2018-01-01' }],
    location: [-79.70840, 43.66749],
    capacity: [
      { seats: 5000, setup: 'hockey', note: 'Official centre-bowl seating. An arena guide says 4,774 seated (4,959 total). Borderline for friction. Powerade rename day in 2018 was not dated. Source: https://www.brampton.ca/EN/Arts-Culture-Tourism/Experience-Brampton/Sports/Pages/Diverse-Venues.aspx' },
      { seats: 5000, setup: 'basketball', note: 'Official centre-bowl seating, same conflict as hockey. Source: https://www.brampton.ca/EN/Arts-Culture-Tourism/Experience-Brampton/Sports/Pages/Diverse-Venues.aspx' },
      { seats: 3800, setup: 'concert', note: 'Reported concert setup, under the 5,000 bowl. Source: https://en.wikipedia.org/wiki/CAA_Centre' },
    ],
    roof: 'indoor',
  },
  'uoft-varsity-stadium': {
    id: 'uoft-varsity-stadium',
    metroId: 'toronto',
    names: [{ name: 'Varsity Stadium' }],
    location: [-79.39711, 43.66696],
    capacity: [{ seats: 5000, setup: 'football', note: 'Reported, exactly 5,000. No standing-room figure. Separate room from Varsity Arena. Source: https://thevarsity.ca/2011/02/28/the-story-behind-the-stadium/' }],
    roof: 'open',
  },
  'uoft-varsity-arena': {
    id: 'uoft-varsity-arena',
    metroId: 'toronto',
    names: [{ name: 'Varsity Arena' }],
    location: [-79.39612, 43.66706],
    capacity: [{ seats: 4116, setup: 'hockey', note: 'Reported. Source: https://en.wikipedia.org/wiki/Varsity_Arena' }],
    roof: 'indoor',
  },
  'york-lions-stadium': {
    id: 'york-lions-stadium',
    metroId: 'toronto',
    names: [{ name: 'York Lions Stadium' }],
    location: [-79.50660, 43.77518],
    capacity: [
      { seats: 4000, setup: 'soccer', note: 'Reported. Source: https://en.wikipedia.org/wiki/Inter_Toronto_FC' },
      { seats: 4000, setup: 'football', note: 'Same reported figure; the source is the soccer club page, not a university capacity sheet. Source: https://en.wikipedia.org/wiki/Inter_Toronto_FC' },
    ],
    roof: 'open',
  },
  'meridian-hall': {
    id: 'meridian-hall',
    metroId: 'toronto',
    names: [{ name: 'Sony Centre' }, { name: 'Meridian Hall', from: '2019-09-15' }],
    location: [-79.37607, 43.64666],
    capacity: [{ seats: 3191, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/Meridian_Hall_(Toronto)' }],
    roof: 'indoor',
  },
  'massey-hall': {
    id: 'massey-hall',
    metroId: 'toronto',
    names: [{ name: 'Massey Hall' }],
    location: [-79.37898, 43.65397],
    capacity: [{ seats: 2534, setup: 'concert', standing: 2800, note: 'Reported seated 2,534; standing 2,800 uses removable floor seats and is not the seated count. About 2,550 seated after renovation is a minor conflict. TD Music Hall in the same complex is 500 and is not a room here. Source: https://en.wikipedia.org/wiki/Massey_Hall' }],
    roof: 'indoor',
  },
  'roy-thomson-hall': {
    id: 'roy-thomson-hall',
    metroId: 'toronto',
    names: [{ name: 'Roy Thomson Hall' }],
    location: [-79.38634, 43.64656],
    capacity: [{ seats: 2600, setup: 'concert', note: 'Reported approximate (~2,600), not a counted inventory. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'history-toronto': {
    id: 'history-toronto',
    metroId: 'toronto',
    names: [{ name: 'History' }],
    location: [-79.31331, 43.66670],
    capacity: [{ seats: 2500, setup: 'concert', note: 'Reported (Live Nation via CTV). A venue list says 2,600. Source: https://toronto.ctvnews.ca/drake-partners-with-live-nation-to-open-new-toronto-music-venue-1.5461492' }],
    roof: 'indoor',
  },
  'rebel-toronto': {
    id: 'rebel-toronto',
    metroId: 'toronto',
    names: [{ name: 'Rebel' }],
    location: [-79.35497, 43.64078],
    capacity: [{ seats: 2500, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'caa-ed-mirvish-theatre': {
    id: 'caa-ed-mirvish-theatre',
    metroId: 'toronto',
    names: [{ name: 'Pantages Theatre' }, { name: 'Canon Theatre' }, { name: 'Ed Mirvish Theatre' }, { name: 'CAA Ed Mirvish Theatre' }],
    location: [-79.37950, 43.65522],
    capacity: [{ seats: 2300, setup: 'concert', note: 'Official. A tourism page says 2,200. Source: https://mirvishproductions.com/about' }],
    roof: 'indoor',
  },
  'elgin-theatre-toronto': {
    id: 'elgin-theatre-toronto',
    metroId: 'toronto',
    names: [{ name: 'Elgin Theatre' }],
    // Same OpenStreetMap building point as the Winter Garden above it.
    location: [-79.37929, 43.65303],
    capacity: [{ seats: 2100, setup: 'concert', note: 'Reported. Stacked under the Winter Garden; separate room. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'princess-of-wales-theatre': {
    id: 'princess-of-wales-theatre',
    metroId: 'toronto',
    names: [{ name: 'Princess of Wales Theatre' }],
    location: [-79.38924, 43.64704],
    capacity: [{ seats: 2000, setup: 'concert', note: 'Official. Source: https://mirvish.com/theatres/princess-of-wales-theatre' }],
    roof: 'indoor',
  },
  'four-seasons-centre': {
    id: 'four-seasons-centre',
    metroId: 'toronto',
    names: [{ name: 'Four Seasons Centre for the Performing Arts' }, { name: 'Four Seasons Centre' }],
    location: [-79.38553, 43.65060],
    capacity: [{ seats: 2000, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'harbourfront-concert-stage': {
    id: 'harbourfront-concert-stage',
    metroId: 'toronto',
    names: [{ name: 'Harbourfront Centre Concert Stage' }],
    // Parent building. Nominatim did not return a separate stage pin.
    location: [-79.38284, 43.63890],
    capacity: [{ seats: 2000, setup: 'concert', note: 'Reported outdoor stage. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'open',
  },
  'kimel-field-house': {
    id: 'kimel-field-house',
    metroId: 'toronto',
    names: [{ name: 'Goldring Centre' }, { name: 'Kimel Family Field House' }],
    // Parent Goldring Centre. The 2011 plan said 2,000 seats; as-built capacity was not verified, so none is stored.
    location: [-79.39835, 43.66689],
    capacity: [],
    roof: 'indoor',
  },
  'meridian-arts-centre': {
    id: 'meridian-arts-centre',
    metroId: 'toronto',
    names: [{ name: 'Toronto Centre for the Arts' }, { name: 'Meridian Arts Centre', from: '2019-09-01' }],
    location: [-79.41445, 43.76602],
    capacity: [{ seats: 1727, setup: 'concert', note: 'Reported Main Stage. George Weston Recital Hall is a separate room in this building. September 2019 rename day was not dated. Source: https://en.wikipedia.org/wiki/Meridian_Arts_Centre' }],
    roof: 'indoor',
  },
  'uoft-convocation-hall': {
    id: 'uoft-convocation-hall',
    metroId: 'toronto',
    names: [{ name: 'Convocation Hall' }],
    location: [-79.39543, 43.66077],
    capacity: [{ seats: 1700, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'winter-garden-theatre': {
    id: 'winter-garden-theatre',
    metroId: 'toronto',
    names: [{ name: 'Winter Garden Theatre' }],
    location: [-79.37929, 43.65303],
    capacity: [{ seats: 1410, setup: 'concert', note: 'Reported. Stacked above the Elgin; separate room, same building point. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'danforth-music-hall': {
    id: 'danforth-music-hall',
    metroId: 'toronto',
    names: [{ name: 'Danforth Music Hall' }],
    location: [-79.35704, 43.67629],
    capacity: [{ seats: 1400, setup: 'concert', note: 'Reported. Billboard Canada says about 1,500. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'phoenix-concert-theatre': {
    id: 'phoenix-concert-theatre',
    metroId: 'toronto',
    names: [{ name: 'Phoenix Concert Theatre' }],
    location: [-79.37394, 43.66461],
    capacity: [{ seats: 1350, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'queen-elizabeth-theatre-toronto': {
    id: 'queen-elizabeth-theatre-toronto',
    metroId: 'toronto',
    names: [{ name: 'Queen Elizabeth Theatre' }],
    // Queen Elizabeth Building, the parent. Interior theatre point was not separate on OpenStreetMap.
    location: [-79.42098, 43.63305],
    capacity: [{ seats: 1250, setup: 'concert', note: 'Reported. On Exhibition Place; CNE overlap risk. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'royal-alexandra-theatre': {
    id: 'royal-alexandra-theatre',
    metroId: 'toronto',
    names: [{ name: 'Royal Alexandra Theatre' }],
    location: [-79.38760, 43.64739],
    capacity: [{ seats: 1244, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/Royal_Alexandra_Theatre' }],
    roof: 'indoor',
  },
  'concert-hall-888-yonge': {
    id: 'concert-hall-888-yonge',
    metroId: 'toronto',
    names: [{ name: 'Masonic Temple' }, { name: 'The Concert Hall' }],
    location: [-79.38829, 43.67308],
    capacity: [{ seats: 1200, setup: 'concert', note: 'Reported. Mapped to the Masonic Temple at 888 Yonge, the building the room is in. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'koerner-hall': {
    id: 'koerner-hall',
    metroId: 'toronto',
    names: [{ name: 'Koerner Hall' }],
    // Parent TELUS Centre for Performance and Learning. Nominatim had no separate Koerner Hall pin.
    location: [-79.39618, 43.66781],
    capacity: [{ seats: 1100, setup: 'concert', note: 'Reported. Source: https://en.wikipedia.org/wiki/List_of_music_venues_in_Toronto' }],
    roof: 'indoor',
  },
  'george-weston-recital-hall': {
    id: 'george-weston-recital-hall',
    metroId: 'toronto',
    names: [{ name: 'George Weston Recital Hall' }],
    location: [-79.41445, 43.76602],
    capacity: [{ seats: 1036, setup: 'concert', note: 'Reported. Same building as Meridian Arts Centre Main Stage; separate room, shared building point. Source: https://en.wikipedia.org/wiki/Meridian_Arts_Centre' }],
    roof: 'indoor',
  },
  'pickering-casino-theatre': {
    id: 'pickering-casino-theatre',
    metroId: 'toronto',
    names: [{ name: 'Pickering Casino Resort theatre' }],
    // Parent resort. The research did not verify the theatre's current name, and Nominatim had no separate room pin.
    location: [-79.05383, 43.84394],
    capacity: [{ seats: 2500, setup: 'concert', note: 'Reported. GTA edge (Pickering). Exact current room name was not verified. Source: https://news.pollstar.com/2024/01/18/showtime-for-the-theatre-at-great-canadian-casino-resort-toronto/' }],
    roof: 'indoor',
  },
  'mattamy-athletic-centre': {
    id: 'mattamy-athletic-centre',
    metroId: 'toronto',
    names: [{ name: 'Maple Leaf Gardens' }, { name: 'Mattamy Athletic Centre' }],
    location: [-79.38029, 43.66219],
    // Capacity unknown. A note that moving the Sceptres raised capacity by nearly 5,000 is not a count.
    capacity: [],
    roof: 'indoor',
  },
  // Minneapolis–St. Paul (docs/research/city-builds/minneapolis/minneapolis-venue-table-answer.md, Oct 12, 2026).
  // Seven-county core. Car-share estimates stay in the research; no venue override is wired.
  // Coordinates from OpenStreetMap by name; misses are marked approximate. No capacity is filled in where the research had none.
  'us-bank-stadium': {
    id: 'us-bank-stadium',
    metroId: 'minneapolis',
    names: [{ name: 'U.S. Bank Stadium' }],
    location: [-93.2593387, 44.9751097],
    capacity: [
      { seats: 66200, setup: 'football', fromYear: 2016, note: 'Reported (Wikipedia timeline). Planned 66,200 at opening. Official Super Bowl LII guide said "66,400+" bowl seats, a floor not a count. Concert capacity was not published; the football number is not a concert figure. Source: https://en.wikipedia.org/wiki/U.S._Bank_Stadium' },
      { seats: 66860, setup: 'football', fromYear: 2017, note: 'Reported (Wikipedia timeline), 2017–18. Source: https://en.wikipedia.org/wiki/U.S._Bank_Stadium' },
      { seats: 66467, setup: 'football', fromYear: 2019, note: 'Reported (Wikipedia timeline), 2019–21. Source: https://en.wikipedia.org/wiki/U.S._Bank_Stadium' },
      { seats: 66202, setup: 'football', fromYear: 2022, note: 'Reported current football seating. Expandable toward 73,000 for a special event; that setup is not the regular-season figure. Source: https://en.wikipedia.org/wiki/U.S._Bank_Stadium' },
    ],
    roof: 'indoor',
  },
  'huntington-bank-stadium': {
    id: 'huntington-bank-stadium',
    metroId: 'minneapolis',
    names: [
      { name: 'TCF Bank Stadium' },
      { name: 'Huntington Bank Stadium', from: '2021-06-29' },
    ],
    location: [-93.2240767, 44.9765397],
    capacity: [{ seats: 50805, setup: 'football', note: 'Reported (Wikipedia and Stadium Journey). No official current page was fetched. Vikings played here 2014–15; Minnesota United 2017–18. Source: https://en.wikipedia.org/wiki/Huntington_Bank_Stadium' }],
    roof: 'open',
  },
  'target-field': {
    id: 'target-field',
    metroId: 'minneapolis',
    names: [{ name: 'Target Field' }],
    location: [-93.2778643, 44.9816845],
    capacity: [
      { seats: 39504, setup: 'baseball', fromYear: 2010, note: 'Reported opening figure (BaseballParks.com). Source: https://baseballparks.com/?p=2316' },
      { seats: 38544, setup: 'baseball', fromYear: 2021, note: 'Official (MLB/Twins press release, June 2021), called approximate. Source: https://www.mlb.com/press-release/press-release-winter-classic-at-target-field-6-28-21' },
    ],
    roof: 'open',
  },
  'target-center': {
    id: 'target-center',
    metroId: 'minneapolis',
    names: [{ name: 'Target Center' }],
    location: [-93.2759828, 44.9795917],
    capacity: [
      { seats: 18798, setup: 'basketball', note: 'Reported (Wikipedia). A Oct 26, 2025 crowd of 18,978 was above this list. Operator rounds concerts to 20,000. Source: https://en.wikipedia.org/wiki/Target_Center' },
      { seats: 17500, setup: 'hockey', note: 'Reported (Wikipedia). Source: https://en.wikipedia.org/wiki/Target_Center' },
      { seats: 20500, setup: 'concert', note: 'Reported (Wikipedia), seated plus floor. Source: https://en.wikipedia.org/wiki/Target_Center' },
    ],
    roof: 'indoor',
  },
  'grand-casino-arena': {
    id: 'grand-casino-arena',
    metroId: 'minneapolis',
    names: [
      { name: 'Xcel Energy Center' },
      { name: 'Grand Casino Arena', from: '2025-09-03' },
    ],
    location: [-93.1010971, 44.9447277],
    capacity: [
      { seats: 18064, setup: 'hockey', fromYear: 2000, note: 'Reported (Wikipedia), 2000–2012. Source: https://en.wikipedia.org/wiki/Grand_Casino_Arena' },
      { seats: 17954, setup: 'hockey', fromYear: 2012, note: 'Reported (Wikipedia), 2012–present. Source: https://en.wikipedia.org/wiki/Grand_Casino_Arena' },
      { seats: 12999, setup: 'concert', note: 'Reported end-stage, seated plus floor. Mutually exclusive with the centre-stage figure; the app uses the last concert row. Source: https://en.wikipedia.org/wiki/Grand_Casino_Arena' },
      { seats: 20554, setup: 'concert', note: 'Reported centre-stage, seated plus floor. Operator says configurations exceed 20,000. Source: https://en.wikipedia.org/wiki/Grand_Casino_Arena' },
    ],
    roof: 'indoor',
  },
  'allianz-field': {
    id: 'allianz-field',
    metroId: 'minneapolis',
    names: [{ name: 'Allianz Field' }],
    location: [-93.1646871, 44.953139],
    capacity: [{ seats: 19400, setup: 'soccer', note: 'Official (Minnesota United), total including a safe-standing section (2,920 or 2,800 depending on the source; not extra seats). A corner expansion to about 24,474 is a proposal only. Source: https://www.mnufc.com/news/mnufc-allianz-field' }],
    roof: 'open',
  },
  'mystic-lake-amphitheater': {
    id: 'mystic-lake-amphitheater',
    metroId: 'minneapolis',
    names: [{ name: 'Mystic Lake Amphitheater' }],
    location: [-93.4729075, 44.7912765],
    capacity: [{ seats: 19000, setup: 'concert', note: 'Official (SMSC / Live Nation). Covered seats plus lawn; the split was not published. Opened June 20, 2026. Source: https://shakopeedakota.org/mystic-lake-amphitheater-to-open-summer-2026-in-the-twin-cities/' }],
    roof: 'covered',
  },
  'williams-arena': {
    id: 'williams-arena',
    metroId: 'minneapolis',
    names: [
      { name: 'The Barn by Blue Cross and Blue Shield of Minnesota' },
      { name: 'Williams Arena' },
    ],
    location: [-93.2282704, 44.9769776],
    capacity: [{ seats: 14625, setup: 'basketball', fromYear: 1997, note: 'Official (Gopher Athletics). Same building as Maturi Pavilion, which is a separate room. Source: https://gophersports.com/sports/2018/5/21/facilities-williams-arena-html' }],
    roof: 'indoor',
  },
  'state-fair-grandstand': {
    id: 'state-fair-grandstand',
    metroId: 'minneapolis',
    names: [{ name: 'Minnesota State Fair Grandstand' }],
    // Approximate. OSM resolved "Grandstand Ramp" on the fairgrounds, not a surveyed bowl. The fair itself is not a room.
    location: [-93.1733394, 44.980628],
    capacity: [{ seats: 13000, setup: 'concert', note: 'Reported "about 13,000" grandstand seats (Racket, citing a Star Tribune critic). No official figure found. A 2003 remodel temporarily went to 17,000; that is not current. Nested inside State Fair admission. The fair\'s 2023 arrival split is about 0.93 car-involved; that figure is not stored on this room. Source: https://racketmn.com/every-mn-state-fair-grandstand-music-lineup-ever-ranked' }],
    roof: 'open',
  },
  'mariucci-arena': {
    id: 'mariucci-arena',
    metroId: 'minneapolis',
    names: [
      { name: 'Mariucci Arena' },
      { name: '3M Arena at Mariucci', from: '2017-07-01' },
    ],
    location: [-93.2280099, 44.978039],
    capacity: [
      { seats: 9700, setup: 'hockey', fromYear: 1997, note: 'Official (Gopher Athletics history), 1996–97 figure carried forward until the 2023 renovation. Source: https://gophersports.com/sports/2018/5/21/facilities-mariucci-arena-html' },
      { seats: 10257, setup: 'hockey', fromYear: 2023, note: 'Official (Gopher Athletics) after the fall 2023 renovation. An older official page still says 10,000. Source: https://gophersports.com/sports/2018/5/21/facilities-mariucci-arena-html' },
    ],
    roof: 'indoor',
  },
  'minneapolis-armory': {
    id: 'minneapolis-armory',
    metroId: 'minneapolis',
    names: [{ name: 'Minneapolis Armory' }, { name: 'The Armory' }],
    location: [-93.2635039, 44.9752066],
    capacity: [{ seats: 8400, setup: 'concert', note: 'Reported (Live Nation / The Current). Mostly standing, plus mezzanine seats; the split was not published. Source: https://www.thecurrent.org/feature/2018/01/30/inside-the-armory-minneapoliss-newest-concert-venue-gets-ready-for-nomadic-live-megastar' }],
    roof: 'indoor',
  },
  'chs-field': {
    id: 'chs-field',
    metroId: 'minneapolis',
    names: [{ name: 'CHS Field' }],
    location: [-93.0852019, 44.9509544],
    capacity: [{ seats: 7210, setup: 'baseball', note: 'Official (MLB / Twins), stated total of seats plus berm and standing. Published crowds have gone above this. Source: https://www.mlb.com/twins/news/explore-chs-field-home-of-the-st-paul-saints' }],
    roof: 'open',
  },
  'tco-stadium': {
    id: 'tco-stadium',
    metroId: 'minneapolis',
    names: [{ name: 'TCO Stadium' }, { name: 'Twin Cities Orthopedics Performance Center' }],
    // OSM resolved the Vikings training-facility complex, not a separately named stadium bowl.
    location: [-93.1154991, 44.8593391],
    capacity: [{ seats: 5500, setup: 'soccer', note: 'Reported base seating (KARE 11). Wikipedia lists 6,000. A 2023 sellout of 6,987 used temporary seats and is event-specific, not the room. A railing section collapsed after a high-school game on Sept 3, 2026. Source: https://kare11.com/article/news/local/minnesota-aurora-fc-playing-home-games-tco-stadium/89-ae2c80f2-db2a-4abf-aab6-81482a282506' }],
    roof: 'open',
  },
  'maturi-pavilion': {
    id: 'maturi-pavilion',
    metroId: 'minneapolis',
    names: [
      { name: 'Sports Pavilion' },
      { name: 'Maturi Pavilion', from: '2017-08-01' },
    ],
    // Same building as Williams Arena. OSM has no separate pavilion point, so this is the Williams Arena coordinate.
    location: [-93.2282704, 44.9769776],
    capacity: [{ seats: 5700, note: 'Reported volleyball seating (Wikipedia). Conflicts with 5,500 (Special Olympics) and a 2017 "5,000-seat" line. Threshold-sensitive; no official current number in the research. LOVB Minnesota is scheduled here from Jan 2027. Source: https://en.wikipedia.org/wiki/Minnesota_Golden_Gophers_women%27s_volleyball' }],
    roof: 'indoor',
  },
  'roy-wilkins-auditorium': {
    id: 'roy-wilkins-auditorium',
    metroId: 'minneapolis',
    names: [{ name: 'Roy Wilkins Auditorium' }, { name: 'Legendary Roy Wilkins Auditorium' }],
    location: [-93.0994119, 44.9447618],
    capacity: [{ seats: 5800, note: 'Reported general seated figure (Pioneer Press via Yahoo). 5,844 also reported (Mpls.St.Paul Magazine). Configuration was not specified, and a concert/standing count was not published. $40M renovation funded May 2026; timeline not found. Source: https://www.yahoo.com/news/articles/bonding-bill-50m-st-paul-190200277.html' }],
    roof: 'indoor',
  },
  'nsc-stadium': {
    id: 'nsc-stadium',
    metroId: 'minneapolis',
    names: [{ name: 'National Sports Center Stadium' }, { name: 'NSC Stadium' }],
    location: [-93.2259566, 45.1572737],
    // Wikipedia 5,500 vs FotMob 10,350, and no official NSC figure. Left unknown rather than choosing one.
    capacity: [],
    roof: 'open',
  },
  'anderson-arena': {
    id: 'anderson-arena',
    metroId: 'minneapolis',
    names: [{ name: 'Lee & Penny Anderson Arena' }, { name: 'Lee and Penny Anderson Arena' }],
    location: [-93.194434, 44.9396574],
    capacity: [
      { seats: 4000, setup: 'hockey', note: 'Reported (The Stadium Business). Opened Oct 24, 2025. Source: https://www.thestadiumbusiness.com/?p=86726' },
      { seats: 5300, setup: 'basketball', note: 'Reported (The Stadium Business). A planning page said about 5,500. Source: https://www.thestadiumbusiness.com/?p=86726' },
      { seats: 6000, setup: 'concert', note: 'Secondary only (Stadium Journey). Not confirmed on an official page. Source: https://www.stadiumjourney.com/stadiums/lee-and-penny-anderson-arena-st-thomas-tommies' },
    ],
    roof: 'indoor',
  },
  'ridder-arena': {
    id: 'ridder-arena',
    metroId: 'minneapolis',
    names: [{ name: 'Ridder Arena' }],
    location: [-93.2293777, 44.9787438],
    capacity: [{ seats: 3400, setup: 'hockey', note: 'Official (Gopher Athletics), including club seats and suites. A recorded crowd of 3,539 is above this list. Address sources differ (1815 vs 1901 4th St SE); OSM places it at 1815. Source: https://gophersports.com/sports/2018/5/21/facilities-ridder-arena-html' }],
    roof: 'indoor',
  },
  'northrop-auditorium': {
    id: 'northrop-auditorium',
    metroId: 'minneapolis',
    names: [{ name: 'Northrop Auditorium' }, { name: 'Northrop Memorial Auditorium' }, { name: 'Northrop' }],
    location: [-93.2353693, 44.9764788],
    capacity: [{ seats: 2868, setup: 'concert', note: 'Reported (Mpls.St.Paul Magazine). Source: https://mspmag.com/arts-and-culture/concert-venues/' }],
    roof: 'indoor',
  },
  'palace-theatre-saint-paul': {
    id: 'palace-theatre-saint-paul',
    metroId: 'minneapolis',
    names: [{ name: 'Palace Theatre' }],
    location: [-93.0967302, 44.9471334],
    capacity: [{ seats: 2800, setup: 'concert', note: 'Reported (MPR / Pollstar): about 2,000 standing floor plus about 800 balcony. Also reported as 2,500. Source: https://www.mprnews.org/story/2016/12/15/palace-theater-open-house' }],
    roof: 'indoor',
  },
  'orpheum-theatre-minneapolis': {
    id: 'orpheum-theatre-minneapolis',
    metroId: 'minneapolis',
    names: [{ name: 'Orpheum Theatre' }],
    location: [-93.2780964, 44.9766405],
    capacity: [{ seats: 2579, setup: 'concert', note: 'Reported (Wikipedia). Source: https://en.wikipedia.org/wiki/Orpheum_Theatre_(Minneapolis)' }],
    roof: 'indoor',
  },
  'state-theatre-minneapolis': {
    id: 'state-theatre-minneapolis',
    metroId: 'minneapolis',
    names: [{ name: 'State Theatre' }],
    location: [-93.2757131, 44.976662],
    capacity: [{ seats: 2181, setup: 'concert', note: 'Reported (Mpls.St.Paul Magazine). Source: https://mspmag.com/arts-and-culture/concert-venues/' }],
    roof: 'indoor',
  },
  'fillmore-minneapolis': {
    id: 'fillmore-minneapolis',
    metroId: 'minneapolis',
    names: [{ name: 'The Fillmore Minneapolis' }, { name: 'Fillmore Minneapolis' }],
    location: [-93.2788889, 44.9839395],
    capacity: [{ seats: 1850, setup: 'concert', note: 'Reported (Pollstar), mostly standing plus box seats. Planned February 2020 opening; the actual opening date was not re-verified. Source: https://news.pollstar.com/2019/08/08/fillmore-minneapolis-1850-capacity-venue-to-open-in-feb-2020/' }],
    roof: 'indoor',
  },
  'first-avenue': {
    id: 'first-avenue',
    metroId: 'minneapolis',
    names: [{ name: 'First Avenue' }, { name: 'First Avenue Main Room' }],
    location: [-93.2760295, 44.9782606],
    capacity: [{ seats: 1550, setup: 'concert', note: 'Reported standing capacity (Wikipedia). 7th St Entry (250) is a separate room and is not listed. Source: https://en.wikipedia.org/wiki/First_Avenue_(nightclub)' }],
    roof: 'indoor',
  },
  'pantages-theatre-minneapolis': {
    id: 'pantages-theatre-minneapolis',
    metroId: 'minneapolis',
    names: [{ name: 'Pantages Theatre' }],
    location: [-93.2754673, 44.9780265],
    capacity: [{ seats: 1014, setup: 'concert', note: 'Reported (Mpls.St.Paul Magazine). At the about-1,000 pre-list line. Source: https://mspmag.com/arts-and-culture/concert-venues/' }],
    roof: 'indoor',
  },

  // Indianapolis (docs/research/city-builds/indianapolis/, Oct 13, 2026). Marion + Hamilton + Hendricks core.
  // carShare values are estimated from indianapolis-city-type-answer.md (C04, Oct 12); none is measured.
  'indianapolis-motor-speedway': {
    id: 'indianapolis-motor-speedway',
    metroId: 'indianapolis',
    carShare: 0.93,
    names: [{ name: 'Indianapolis Motor Speedway' }, { name: 'IMS' }],
    location: [-86.2336932, 39.7903186],
    capacity: [{
      seats: 275000,
      setup: 'racing',
      note: 'Estimated (AP, 2026): about 275,000 reserved grandstand seats; conflicts with 250,000 and 257,325 reported elsewhere. Infield GA is extra with no official cap. Race-day crowd is an open-site event, not concurrent with every other IMS booking. Source: https://www.ajc.com/news/2026/05/indianapolis-500-officials-are-expecting-a-2nd-straight-race-day-sellout-and-3rd-time-in-10-years/',
    }],
    roof: 'open',
  },
  'lucas-oil-stadium': {
    id: 'lucas-oil-stadium',
    metroId: 'indianapolis',
    carShare: 0.85,
    names: [{ name: 'Lucas Oil Stadium' }],
    location: [-86.1637947, 39.7600777],
    capacity: [
      { seats: 67000, setup: 'football', note: 'Official. Conflicts with 63,000 reported (IBJ 2012). Expanded basketball and major events exceed 70,000 in a separate configuration. Source: https://www.lucasoilstadium.com/tours-stadium-info/background-history/' },
      { seats: 70000, setup: 'basketball', note: 'Official: expandable to over 70,000 for basketball. Source: https://www.lucasoilstadium.com/tours-stadium-info/background-history/' },
      { seats: 70000, setup: 'concert', note: 'Estimated from the same official expandable figure; concert configuration not published separately. Source: https://www.lucasoilstadium.com/tours-stadium-info/background-history/' },
    ],
    roof: 'covered',
  },
  'lucas-oil-indianapolis-raceway-park': {
    id: 'lucas-oil-indianapolis-raceway-park',
    metroId: 'indianapolis',
    carShare: 0.93,
    names: [
      { name: 'Lucas Oil Indianapolis Raceway Park' },
      { name: 'Lucas Oil Raceway at Indianapolis', from: '2011-01-01' },
    ],
    location: [-86.3424077, 39.8136285],
    capacity: [{ seats: 30000, setup: 'racing', note: 'Reported (Wikipedia). Not split by configuration. Resale listings may say "Indianapolis" while the track is in Brownsburg. Source: https://en.wikipedia.org/wiki/Lucas_Oil_Indianapolis_Raceway_Park' }],
    roof: 'open',
  },
  'ruoff-music-center': {
    id: 'ruoff-music-center',
    metroId: 'indianapolis',
    carShare: 0.96,
    names: [
      { name: 'Ruoff Music Center' },
      { name: 'Ruoff Home Mortgage Music Center', from: '2017-01-01' },
      { name: 'Klipsch Music Center', from: '2011-01-01' },
    ],
    location: [-85.9284362, 40.0044065],
    capacity: [
      { seats: 6147, setup: 'concert', note: 'Reported pavilion seats; lawn is general admission. Source: https://musewiki.org/Noblesville_Ruoff_Music_Center' },
      { seats: 24790, setup: 'concert', note: 'Reported total; conflicts with 24,400 (Songkick). Source: https://en.wikipedia.org/wiki/Ruoff_Music_Center' },
    ],
    roof: 'covered',
  },
  'gainbridge-fieldhouse': {
    id: 'gainbridge-fieldhouse',
    metroId: 'indianapolis',
    carShare: 0.85,
    names: [
      { name: 'Gainbridge Fieldhouse' },
      { name: 'Bankers Life Fieldhouse', from: '2011-01-01' },
      { name: 'Conseco Fieldhouse' },
    ],
    location: [-86.1555024, 39.7639331],
    capacity: [
      { seats: 17274, setup: 'basketball', note: 'Reported (Ticketmaster). Conflicts with 17,923 and a claimed 20,000 post-renovation. Source: https://blog.ticketmaster.com/step-inside-gainbridge-fieldhouse-indianapolis-in/' },
      { seats: 18274, setup: 'concert', note: 'Reported concert record. Source: https://en.wikipedia.org/wiki/Gainbridge_Fieldhouse' },
      { seats: 11651, setup: 'hockey', note: 'Reported. Source: https://blog.ticketmaster.com/step-inside-gainbridge-fieldhouse-indianapolis-in/' },
    ],
    roof: 'indoor',
  },
  'victory-field': {
    id: 'victory-field',
    metroId: 'indianapolis',
    carShare: 0.85,
    names: [{ name: 'Victory Field' }],
    location: [-86.1693652, 39.7648386],
    capacity: [
      { seats: 12230, setup: 'baseball', note: 'Official (MLB): fixed seats. About 2,000 lawn and 14,230 total with lawn per reported figures. Source: https://www.mlb.com/astros/news/featured/explore-victory-field-home-of-the-indianapolis-indians' },
    ],
    roof: 'open',
  },
  'carroll-stadium': {
    id: 'carroll-stadium',
    metroId: 'indianapolis',
    carShare: 0.85,
    names: [
      { name: 'IU Michael A. Carroll Track & Soccer Stadium' },
      { name: 'Carroll Stadium' },
    ],
    location: [-86.1789666, 39.7710116],
    capacity: [
      { seats: 12111, setup: 'soccer', note: 'Official (stadium site). Conflicts with 10,000 (IU Indy athletics) and 10,524 soccer limit (reported). Source: https://carrollstadium.indianapolis.iu.edu' },
    ],
    roof: 'open',
  },
  'hinkle-fieldhouse': {
    id: 'hinkle-fieldhouse',
    metroId: 'indianapolis',
    carShare: 0.8,
    names: [{ name: 'Hinkle Fieldhouse' }],
    location: [-86.1674277, 39.8435958],
    capacity: [{ seats: 9100, setup: 'basketball', note: 'Official since 2014. Before that 10,000. Source: https://butlersports.com/sports/2016/5/19/information-facilities-hinkle-fieldhouse.aspx' }],
    roof: 'indoor',
  },
  'fishers-event-center': {
    id: 'fishers-event-center',
    metroId: 'indianapolis',
    carShare: 0.95,
    names: [{ name: 'Fishers Event Center' }],
    location: [-86.0038734, 39.9474838],
    capacity: [{ seats: 7500, note: 'Official (Visit Indy / city). Planned 8,500 at groundbreaking not stored as current. Source: https://www.visitindy.com/directory/fishers-event-center/' }],
    roof: 'indoor',
  },
  'corteva-coliseum': {
    id: 'corteva-coliseum',
    metroId: 'indianapolis',
    carShare: 0.92,
    names: [
      { name: 'Corteva Coliseum' },
      { name: 'Indiana Farmers Coliseum', from: '2014-01-01' },
    ],
    location: [-86.1292603, 39.8302975],
    capacity: [
      { seats: 6800, setup: 'basketball', note: 'Reported. Conflicts with 6,200 hockey, 8,200 and 6,500 in other sources. Livestock setup 4,800 is not stored. Source: https://en.wikipedia.org/wiki/Corteva_Coliseum' },
    ],
    roof: 'indoor',
  },
  'everwise-amphitheater': {
    id: 'everwise-amphitheater',
    metroId: 'indianapolis',
    carShare: 0.85,
    names: [
      { name: 'Everwise Amphitheater at White River State Park' },
      { name: 'TCU Amphitheater', from: '2021-01-01' },
      { name: 'Farm Bureau Insurance Lawn', from: '2012-01-01' },
    ],
    location: [-86.1717927, 39.7659312],
    capacity: [
      { seats: 2500, setup: 'concert', note: 'Official reserved seats. Total with lawn 6,000. Songkick 3,000 not stored. Source: https://whiteriverstatepark.org/venue/everwise-amphitheater-at-white-river-state-park/' },
      { seats: 6000, setup: 'concert', note: 'Official total = 2,500 reserved + 3,500 GA lawn. Source: https://whiteriverstatepark.org/venue/everwise-amphitheater-at-white-river-state-park/' },
    ],
    roof: 'covered',
  },
  'sellick-bowl': {
    id: 'sellick-bowl',
    metroId: 'indianapolis',
    names: [
      { name: 'Bud and Jackie Sellick Bowl' },
      { name: 'Sellick Bowl' },
    ],
    // Butler campus; OSM did not separate the bowl from Hinkle. Point is approximate east of Hinkle.
    location: [-86.1652, 39.841],
    capacity: [{ seats: 5647, setup: 'football', note: 'Official after 2010 renovation. Just above the 5,000 friction line. Source: https://butlersports.com/facilities/?id=2' }],
    roof: 'open',
  },
  'kiesel-field-key-stadium': {
    id: 'kiesel-field-key-stadium',
    metroId: 'indianapolis',
    names: [{ name: 'Kiesel Field at Key Stadium' }, { name: 'Key Stadium' }],
    location: [-86.1302054, 39.7113913],
    capacity: [{ seats: 5500, setup: 'football', note: 'Official (UIndy). Unofficial standing-room add-on not stored. Source: https://athletics.uindy.edu/facilities/?id=2' }],
    roof: 'open',
  },
  'riverview-health-arena': {
    id: 'riverview-health-arena',
    metroId: 'indianapolis',
    names: [
      { name: 'Riverview Health Arena at Innovation Mile' },
      { name: 'The Arena at Innovation Mile', from: '2025-01-01' },
    ],
    location: [-85.912343, 39.992404],
    capacity: [{ seats: 3400, setup: 'basketball', note: 'Reported fixed seats plus 100 suites; every setup in research is below 5,000. Source: https://youarecurrent.com/2025/07/31/a-boom-for-noblesville-the-arena-at-innovation-mile-to-open-aug-8/' }],
    roof: 'indoor',
  },
  'james-t-morris-arena': {
    id: 'james-t-morris-arena',
    metroId: 'indianapolis',
    names: [{ name: 'James T. Morris Arena' }, { name: 'The Jim' }],
    location: [-86.1785, 39.7712],
    capacity: [{ seats: 4500, setup: 'basketball', note: 'Official (IU capital projects). Conflicts with 4,200 and 4,000 reported. Under construction / opening fall 2026; re-check. Source: https://cpf.iu.edu/capital-projects/projects/athletics/james-t-morris-arena.html' }],
    roof: 'indoor',
  },
  'murat-theatre': {
    id: 'murat-theatre',
    metroId: 'indianapolis',
    names: [
      { name: 'Murat Theatre at Old National Centre' },
      { name: 'Old National Centre' },
    ],
    location: [-86.1510753, 39.7745828],
    capacity: [{ seats: 2500, setup: 'concert', note: 'Reported. Conflicts with 2,515 (venue spec). Source: https://en.wikipedia.org/wiki/Old_National_Centre' }],
    roof: 'indoor',
  },
  'clowes-memorial-hall': {
    id: 'clowes-memorial-hall',
    metroId: 'indianapolis',
    names: [{ name: 'Clowes Memorial Hall' }],
    location: [-86.169984, 39.840453],
    capacity: [{ seats: 2148, setup: 'concert', note: 'Official. Source: https://www.butlerartscenter.org/venues/clowes-memorial-hall/' }],
    roof: 'indoor',
  },
  'egyptian-room-old-national-centre': {
    id: 'egyptian-room-old-national-centre',
    metroId: 'indianapolis',
    names: [{ name: 'Egyptian Room at Old National Centre' }],
    location: [-86.1510753, 39.7745828],
    capacity: [{ seats: 2000, setup: 'concert', note: 'Official theatre/standing layout. Cabaret seated 1,000 is a different setup. Source: https://assets.dam.simpleviewinc.com/asset/6374363dfc6a030011203543' }],
    roof: 'indoor',
  },
  'hilbert-circle-theatre': {
    id: 'hilbert-circle-theatre',
    metroId: 'indianapolis',
    names: [{ name: 'Hilbert Circle Theatre' }],
    location: [-86.1571193, 39.7678147],
    capacity: [{ seats: 1660, setup: 'concert', note: 'Official (ISO). Conflicts with 1,781 older reported. Source: https://www.indianapolissymphony.org/visit/hilbert-circle-theatre/history/' }],
    roof: 'indoor',
  },
  'palladium-carmel': {
    id: 'palladium-carmel',
    metroId: 'indianapolis',
    names: [{ name: 'The Palladium' }, { name: 'Center for the Performing Arts' }],
    location: [-86.1303436, 39.9699101],
    capacity: [{ seats: 1600, setup: 'concert', note: 'Reported at naming. Source: https://www.ibj.com/articles/16351-carmel-performing-arts-center-raises-curtain-on-new-name' }],
    roof: 'indoor',
  },
  'iu-indy-jungle': {
    id: 'iu-indy-jungle',
    metroId: 'indianapolis',
    names: [{ name: 'The Jungle' }, { name: 'IU Indy Gymnasium' }, { name: 'IUPUI Gymnasium' }],
    location: [-86.1749711, 39.7708552],
    capacity: [{ seats: 1215, setup: 'basketball', note: 'Reported. Final season for basketball tenants in 2025–26 before Morris Arena. Source: https://en.wikipedia.org/wiki/The_Jungle_(Indianapolis)' }],
    roof: 'indoor',
  },

  // New Orleans (docs/research/city-builds/new-orleans/, Oct 12, 2026). Orleans + Jefferson core.
  // No carShare overrides: the city-type answer's shares are estimates, none measured.
  // Coordinates are OpenStreetMap by name, except where a comment says the point is a street address or a parent building.
  'caesars-superdome': {
    id: 'caesars-superdome',
    metroId: 'new-orleans',
    names: [
      { name: 'Mercedes-Benz Superdome' },
      { name: 'Caesars Superdome', from: '2021-01-01' },
    ],
    location: [-90.0823076, 29.9510489],
    capacity: [
      {
        seats: 73208,
        setup: 'football',
        note: 'Official press kit, Saints game count. Same kit lists a football maximum of 74,295. All figures predate the 2019–2024 renovation; no post-renovation capacity was published. Wikipedia reports 76,468 expandable. Source: https://www.caesarssuperdome.com/assets/doc/presskit-1-874851cf94.pdf',
      },
      {
        seats: 67500,
        setup: 'basketball',
        note: 'Official press kit, NCAA Final Four, pre-renovation. Source: https://www.caesarssuperdome.com/assets/doc/presskit-1-874851cf94.pdf',
      },
      {
        seats: 83000,
        setup: 'concert',
        note: 'Official press kit, center-stage concert maximum, pre-renovation. Source: https://www.caesarssuperdome.com/assets/doc/presskit-1-874851cf94.pdf',
      },
    ],
    roof: 'covered',
  },
  'yulman-stadium': {
    id: 'yulman-stadium',
    metroId: 'new-orleans',
    names: [
      { name: 'Yulman Stadium' },
      { name: 'Benson Field at Yulman Stadium' },
    ],
    location: [-90.1160511, 29.9446510],
    capacity: [
      {
        seats: 30000,
        setup: 'football',
        note: 'Official (Tulane). Built to expand by 5,000–10,000; no confirmed expansion through 2028. Source: https://news.tulane.edu/news/yulman-stadium-ranks-among-top-25',
      },
    ],
    roof: 'open',
  },
  'tad-gormley-stadium': {
    id: 'tad-gormley-stadium',
    metroId: 'new-orleans',
    names: [
      { name: 'Reggie Bush Field' },
      { name: 'Tad Gormley Stadium' },
    ],
    location: [-90.0996330, 29.9898746],
    capacity: [
      {
        seats: 26500,
        setup: 'football',
        note: 'Official (City Park), permanent seats, unassigned. A turf closure dated only "January 12" has no year in the research. Source: https://neworleanscitypark.org/venues/tad-gormley-stadium',
      },
    ],
    roof: 'open',
  },
  'smoothie-king-center': {
    id: 'smoothie-king-center',
    metroId: 'new-orleans',
    names: [
      { name: 'New Orleans Arena' },
      { name: 'Smoothie King Center', from: '2014-02-01' },
    ],
    location: [-90.0820690, 29.9490393],
    capacity: [
      {
        seats: 16867,
        setup: 'basketball',
        note: 'Reported (Ticketmaster), NBA regular season. Same source lists playoffs and college basketball at 18,500. Announced crowds have reached 19,397. A renovation adding seats is a proposal only. Source: https://blog.ticketmaster.com/step-inside-smoothie-king-center-new-orleans-la/',
      },
      {
        seats: 17791,
        setup: 'concert',
        note: 'Reported (Ticketmaster), 360-degree. Wikipedia lists end-stage 17,221, center-stage 17,805 and half-stage 7,500. Source: https://blog.ticketmaster.com/step-inside-smoothie-king-center-new-orleans-la/',
      },
      {
        seats: 16900,
        setup: 'hockey',
        note: 'Reported (Wikipedia). No current hockey tenant. Source: https://en.wikipedia.org/wiki/Smoothie_King_Center',
      },
    ],
    roof: 'indoor',
  },
  'fair-grounds-race-course': {
    id: 'fair-grounds-race-course',
    metroId: 'new-orleans',
    names: [{ name: 'Fair Grounds Race Course' }],
    // OSM sports_centre named Fair Grounds Race Course. A second OSM track point sits nearby; this is the named centre, not the Jazz Fest grounds total.
    location: [-90.0812845, 29.9851851],
    capacity: [
      {
        seats: 10000,
        setup: 'racing',
        note: 'Reported grandstand seating, "about 10,000", plus about 5,000 more on the concourse on Derby Day (not added). Jazz Fest uses these grounds and is not this room. Source: https://www.stadiumjourney.com/stadiums/fair-grounds-race-course',
      },
    ],
    roof: 'covered',
  },
  'lakefront-arena': {
    id: 'lakefront-arena',
    metroId: 'new-orleans',
    names: [
      { name: 'UNO Lakefront Arena' },
      { name: 'Senator Nat G. Kiefer University of New Orleans Lakefront Arena' },
      { name: 'Lakefront Arena' },
    ],
    location: [-90.0505067, 30.0301050],
    capacity: [
      {
        seats: 8785,
        setup: 'basketball',
        note: 'Official (UNO facilities page), basketball. Reported figures also include 8,900, 8,933 and an older 10,000. Concert setups are published only as a range (1,500 to over 10,000) and are not stored. The campus became LSU New Orleans on Jul 1, 2026; an official arena rename is not confirmed. Source: https://unoprivateers.com/facilities/?id=3',
      },
    ],
    roof: 'indoor',
  },
  'turchin-stadium': {
    id: 'turchin-stadium',
    metroId: 'new-orleans',
    names: [
      { name: 'Turchin Stadium' },
      { name: 'Green Field at Turchin Stadium' },
      { name: 'Greer Field at Turchin Stadium' },
    ],
    location: [-90.1156165, 29.9461816],
    capacity: [
      {
        seats: 5000,
        setup: 'baseball',
        note: 'Reported (Wikipedia). Exactly at the friction line. No official Tulane facilities figure was in the research. ESPN writes "Green Field". Source: https://en.wikipedia.org/wiki/Greer_Field_at_Turchin_Stadium',
      },
    ],
    roof: 'open',
  },
  'pan-american-stadium': {
    id: 'pan-american-stadium',
    metroId: 'new-orleans',
    names: [{ name: 'Pan American Stadium' }],
    location: [-90.0879004, 29.9942626],
    capacity: [
      {
        seats: 4500,
        setup: 'soccer',
        note: 'Official (Jesters): 4,500 seated bleachers. City Park also says up to 5,000 in general admission; that standing total is not stored as seats. Source: https://www.nolajesters.com/team/stadium/',
      },
    ],
    roof: 'open',
  },
  'new-orleans-theater': {
    id: 'new-orleans-theater',
    metroId: 'new-orleans',
    names: [{ name: 'New Orleans Theater' }],
    // Interior room of the Morial Convention Center. OSM has the center, not the theater. Exhibit halls are not this room.
    location: [-90.0631825, 29.9395386],
    capacity: [
      {
        seats: 4032,
        setup: 'concert',
        note: 'Reported (Wikipedia). The center\'s own page says "over 4,000" without a precise count. Exhibit-hall theater setups are a different floor, not this room. Source: https://en.wikipedia.org/wiki/New_Orleans_Morial_Convention_Center',
      },
    ],
    roof: 'indoor',
  },
  'devlin-fieldhouse': {
    id: 'devlin-fieldhouse',
    metroId: 'new-orleans',
    names: [
      { name: 'Avron B. Fogelman Arena' },
      { name: 'Avron B. Fogelman Arena in the Devlin Fieldhouse', from: '2012-01-01' },
      { name: 'Fogelman Arena in Devlin Fieldhouse', from: '2012-01-01' },
    ],
    // OSM node named Fogelman Arena at 6401 Freret. Interior gym point not separately surveyed.
    location: [-90.1207046, 29.9390674],
    capacity: [
      {
        seats: 4100,
        setup: 'basketball',
        note: 'Reported (Wikipedia). Source: https://en.wikipedia.org/wiki/Devlin_Fieldhouse',
      },
    ],
    roof: 'indoor',
  },
  'pontchartrain-center': {
    id: 'pontchartrain-center',
    metroId: 'new-orleans',
    names: [
      { name: 'Pontchartrain Convention and Civic Center' },
      { name: 'Pontchartrain Center' },
    ],
    location: [-90.2405762, 30.0393600],
    capacity: [
      {
        seats: 3600,
        setup: 'basketball',
        note: 'Reported (Wikipedia), sports. A 4,600 figure in the same article and a 5,820 theater-style hall setup are not the arena. The hall setup is not stored. Source: https://en.wikipedia.org/wiki/Pontchartrain_Center',
      },
      {
        seats: 3700,
        setup: 'concert',
        note: 'Official (Laketown Squadron): "3,700 seat facility". Source: https://laketown.gleague.nba.com/news/new-orleans-pelicans-to-relocate-g-league-affiliate-to-kenner-and-rebrand-as-laketown-squadron',
      },
    ],
    roof: 'indoor',
  },
  'maestri-field': {
    id: 'maestri-field',
    metroId: 'new-orleans',
    names: [
      { name: 'Maestri Field' },
      { name: 'Maestri Field at Privateer Park' },
    ],
    location: [-90.0470706, 30.0305847],
    capacity: [
      {
        seats: 2900,
        setup: 'baseball',
        note: 'Reported (Wikipedia). Source: https://en.wikipedia.org/wiki/Maestri_Field_at_Privateer_Park',
      },
    ],
    roof: 'open',
  },
  'saenger-theatre': {
    id: 'saenger-theatre',
    metroId: 'new-orleans',
    names: [{ name: 'Saenger Theatre' }],
    location: [-90.0725759, 29.9563933],
    capacity: [
      {
        seats: 2600,
        setup: 'concert',
        note: 'Official (ATG). The same page also gives 2,613 at the 2013 reopening. Source: https://www.atgentertainment.com/?p=1349',
      },
    ],
    roof: 'indoor',
  },
  'alario-center': {
    id: 'alario-center',
    metroId: 'new-orleans',
    names: [
      { name: 'Alario Center' },
      { name: 'Alario Sr. Event Center' },
    ],
    location: [-90.1627914, 29.9054733],
    capacity: [
      {
        seats: 2400,
        setup: 'concert',
        note: 'Reported (Wikipedia), seats. A directory lists the largest space up to 3,000 theater style. Source: https://en.wikipedia.org/wiki/Alario_Center',
      },
    ],
    roof: 'indoor',
  },
  'mahalia-jackson-theater': {
    id: 'mahalia-jackson-theater',
    metroId: 'new-orleans',
    names: [{ name: 'Mahalia Jackson Theater for the Performing Arts' }],
    location: [-90.0693976, 29.9632013],
    capacity: [
      {
        seats: 2153,
        setup: 'concert',
        note: 'Official (ATG) lower figure on a page that also lists 2,243. Wikipedia lists 2,100. Lower official figure stored. Source: https://www.atgentertainment.com/aka_venues/mahalia-jackson-theater-for-the-performing-arts/',
      },
    ],
    roof: 'indoor',
  },
  'fillmore-new-orleans': {
    id: 'fillmore-new-orleans',
    metroId: 'new-orleans',
    names: [{ name: 'Fillmore New Orleans' }, { name: 'The Fillmore New Orleans' }],
    // No OSM node for the room. Street-address geocode of 6 Canal St; the hall is inside the casino.
    location: [-90.0643614, 29.9498230],
    capacity: [
      {
        seats: 2000,
        setup: 'concert',
        note: 'Reported (Ticketmaster). AP reported 2,200 standing. Lower figure stored. Source: https://blog.ticketmaster.com/concert-venues-new-orleans/',
      },
    ],
    roof: 'indoor',
  },
  'orpheum-theater-new-orleans': {
    id: 'orpheum-theater-new-orleans',
    metroId: 'new-orleans',
    names: [{ name: 'Orpheum Theater' }],
    location: [-90.0728273, 29.9545428],
    // Published range 1,460–1,780 by setup. No single figure, so capacity stays unknown.
    capacity: [],
    roof: 'indoor',
  },
  'joy-theater': {
    id: 'joy-theater',
    metroId: 'new-orleans',
    names: [{ name: 'Joy Theater' }],
    location: [-90.0739853, 29.9560038],
    capacity: [
      {
        seats: 1200,
        setup: 'concert',
        note: 'Reported standing (Advocate, 2017). Seated is about 660, not stored as an exact count. Ticketmaster calls 1,200 seating. Source: https://www.theadvocate.com/new_orleans/news/business/harrah-s-casino-in-new-orleans-planning-major-new-music-venue-on-second-floor/article_0092bfee-e4f6-11e6-8be8-3bb32106aa73.html',
      },
    ],
    roof: 'indoor',
  },
  'civic-theatre-new-orleans': {
    id: 'civic-theatre-new-orleans',
    metroId: 'new-orleans',
    names: [{ name: 'The Civic Theatre' }, { name: 'Civic Theatre' }],
    location: [-90.0741646, 29.9495123],
    capacity: [
      {
        seats: 1200,
        setup: 'concert',
        note: 'Reported (Advocate, 2017). Source: https://www.theadvocate.com/new_orleans/news/business/harrah-s-casino-in-new-orleans-planning-major-new-music-venue-on-second-floor/article_0092bfee-e4f6-11e6-8be8-3bb32106aa73.html',
      },
    ],
    roof: 'indoor',
  },
  'house-of-blues-new-orleans': {
    id: 'house-of-blues-new-orleans',
    metroId: 'new-orleans',
    names: [{ name: 'House of Blues' }, { name: 'House of Blues New Orleans' }],
    location: [-90.0660795, 29.9532033],
    capacity: [
      {
        seats: 1010,
        setup: 'concert',
        note: 'Reported. At the pre-list line. Source: https://www.theadvocate.com/gambit/new_orleans/news/the_latest/fillmore-music-venue-at-harrahs-to-open-in-2019/article_a3c96f60-7586-11e8-b9d5-3fb6b231230d.html',
      },
    ],
    roof: 'indoor',
  },
  // ---------- Ottawa–Gatineau (docs/research/city-builds/ottawa-gatineau/; car shares from ottawa-gatineau-city-type-answer.md), Oct 13, 2026 ----------
  // LeBreton Flats Park (Bluesfest, Canada Day), Winterlude sites, Race Weekend and FMG are not rows — point events when a count exists.
  // Lansdowne Event Centre (A6) opens ~Jul 2028; Cohere Centre (A4) and Rogers Centre Ottawa hall (A7) have no sourced concert/sport capacity.
  'td-place-stadium': {
    id: 'td-place-stadium',
    metroId: 'ottawa-gatineau',
    // Estimated (0.52, measured 2014 bus+shuttle aggregate for Redblacks ticket holders).
    carShare: 0.52,
    names: [{ name: 'TD Place Stadium' }, { name: 'Stade Place TD' }, { name: 'Frank Clair Stadium' }],
    location: [-75.6835457, 45.3984326],
    capacity: [
      { seats: 24000, setup: 'football', note: 'Reported fixed seating for CFL/soccer. Temporary Grey Cup expansion to nearly 36,000 (2017) is not stored. Field rental 10,200 is a setup, not seats. Source: venue table A1.' },
      { seats: 24000, setup: 'soccer', note: 'Same bowl for Atlético Ottawa and Ottawa Rapid FC.' },
    ],
    roof: 'open',
  },
  'arena-at-td-place': {
    id: 'arena-at-td-place',
    metroId: 'ottawa-gatineau',
    // Estimated (0.60): comparison to Lansdowne transit access; no measured split.
    carShare: 0.6,
    names: [
      { name: 'The Arena at TD Place' },
      { name: 'TD Place Arena' },
      { name: 'Ottawa Civic Centre' },
    ],
    location: [-75.6835457, 45.3984326],
    ticketmasterIds: ['401513'],
    // Sourced only as a range (5,500–8,585 by configuration); round-2 rule: range capacities stay blank (BACKLOG).
    capacity: [],
    roof: 'indoor',
  },
  'canadian-tire-centre': {
    id: 'canadian-tire-centre',
    metroId: 'ottawa-gatineau',
    // Estimated (0.92): derived from measured 1999–2000 transit share (~3.2% of hockey attendance).
    carShare: 0.92,
    names: [{ name: 'Canadian Tire Centre' }, { name: 'Centre Canadian Tire' }, { name: 'Scotiabank Place' }, { name: 'Corel Centre' }],
    location: [-75.9268973, 45.2969069],
    capacity: [
      { seats: 19153, setup: 'hockey', note: 'Official (venue rental sheet). Reported 20,500 including standing room; Ticketmaster and Wikipedia conflicts preserved in research. Source: venue table A2.' },
      { seats: 16888, setup: 'concert', note: 'Official 360° concert capacity (rental sheet). Smaller concert arcs are separate configurations.' },
    ],
    roof: 'indoor',
  },
  'ottawa-stadium': {
    id: 'ottawa-stadium',
    metroId: 'ottawa-gatineau',
    names: [{ name: 'Ottawa Stadium' }, { name: 'Raymond Chabot Grant Thornton Park' }, { name: 'RCGT Park' }],
    location: [-75.6532522, 45.4202454],
    capacity: [
      { seats: 10278, setup: 'baseball', note: 'Reported since 2015 (10,332 before). Concert 15,000 is a separate configuration. Source: venue table A3.' },
    ],
    roof: 'open',
  },
  'centre-slush-puppie': {
    id: 'centre-slush-puppie',
    metroId: 'ottawa-gatineau',
    names: [{ name: 'Centre Slush Puppie' }, { name: 'Slush Puppie Centre' }],
    location: [-75.6792802, 45.4832163],
    capacity: [{ seats: 4000, setup: 'hockey', note: 'Reported (Architecture49). Meeting-room capacity is not event seating. Source: venue table A8.' }],
    roof: 'indoor',
  },
  'taag-park': {
    id: 'taag-park',
    metroId: 'ottawa-gatineau',
    names: [{ name: 'TAAG Park' }, { name: 'MNP Park' }, { name: "Ravens' Perch" }],
    location: [-75.6950041, 45.3858581],
    capacity: [{ seats: 3500, setup: 'football', note: 'Reported: 3,044 seats plus about 500 on the Perch hill. One 2016 crowd reported at 5,000 is unverified. Source: venue table A9.' }],
    roof: 'open',
  },
  'southam-hall': {
    id: 'southam-hall',
    metroId: 'ottawa-gatineau',
    names: [{ name: 'Southam Hall' }, { name: 'NAC Southam Hall' }],
    location: [-75.6935599, 45.4234119],
    capacity: [{ seats: 2065, setup: 'concert', note: 'Reported (Fisher Dachs). CanDance lists 1,975; difference not explained. Source: venue table A10.' }],
    roof: 'indoor',
  },
  'hard-rock-live-ottawa': {
    id: 'hard-rock-live-ottawa',
    metroId: 'ottawa-gatineau',
    // Estimated (0.93): rural-edge site; no event transit found in research.
    carShare: 0.93,
    names: [{ name: 'Hard Rock Live Ottawa' }, { name: 'Hard Rock LIVE Ottawa' }],
    location: [-75.6056353, 45.2946063],
    capacity: [
      { seats: 1900, setup: 'concert', note: 'Official (Hard Rock newsroom). Total capacity 2,200 including standing; OBJ pre-opening listed 1,800 seats. Source: venue table A11.' },
    ],
    roof: 'indoor',
  },
  'ravens-nest': {
    id: 'ravens-nest',
    metroId: 'ottawa-gatineau',
    names: [{ name: "Ravens' Nest" }],
    location: [-75.6950041, 45.3858581],
    capacity: [{ seats: 1500, setup: 'basketball', note: 'Reported (Stadium Journey, undated). Campus point; gym interior not separately geocoded. Source: venue table A12.' }],
    roof: 'indoor',
  },
  'theatre-casino-lac-leamy': {
    id: 'theatre-casino-lac-leamy',
    metroId: 'ottawa-gatineau',
    names: [
      { name: 'Théâtre du Casino du Lac-Leamy' },
      { name: "Théâtre de l'Hôtel-Casino Lac-Leamy" },
    ],
    location: [-75.7252302, 45.4461345],
    capacity: [
      { seats: 1068, setup: 'concert', note: 'Official tourism listing maximum (650–1,068 by configuration). Scéno Plus designer figures differ. Source: venue table A13.' },
    ],
    roof: 'indoor',
  },
};

/** The venue's name as it was on that date ("Staples Center" in 2019). */
export function venueNameOn(venue: Venue, date: LocalDate): string {
  let current = venue.names[0].name;
  for (const n of venue.names) if (!n.from || n.from <= date) current = n.name;
  return current;
}

/**
 * Hard to get in and out of: a hillside or canyon site with few streets at the
 * gate (Kylie, Oct 6, 2026; docs/product/hard-access-oct6.md). Measured, not hand-set:
 * relief of at least 40 m within 500 m and no more than 4 named public streets
 * within 250 m, from scripts/venue-access.mjs. A venue the script has not
 * measured falls back to its hand flag.
 */
export const HARD_ACCESS_RELIEF_M = 40;
export const HARD_ACCESS_MAX_STREETS = 4;

export function isStrained(venue: Venue): boolean {
  const row = VENUE_ACCESS.find((r) => r.venueId === venue.id);
  if (!row) return Boolean(venue.strained);
  return row.reliefM >= HARD_ACCESS_RELIEF_M && row.streets250 <= HARD_ACCESS_MAX_STREETS;
}

/** The capacity that applied in that year and setup, if one is stored. */
export function capacityOn(venue: Venue, date: LocalDate, setup?: string): number | undefined {
  const year = Number(date.slice(0, 4));
  const fits = venue.capacity.filter((c) => (c.fromYear ?? 0) <= year);
  const match = fits.filter((c) => c.setup === setup).at(-1) ?? fits.filter((c) => !c.setup).at(-1) ?? fits[0];
  return match?.seats;
}
