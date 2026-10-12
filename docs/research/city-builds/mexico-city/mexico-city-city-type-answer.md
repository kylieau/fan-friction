# Mexico City — Fan/Friction city-type evidence answer

**Research date:** 11 October 2026 (searches run this date; sources dated as shown). Time zone for all event times: Mexico City local, *Tiempo del Centro*, UTC−6 year-round — seasonal clock changes were abolished for CDMX and the Estado de México from 30 October 2022 ([tiempo.com.mx](https://www.tiempo.com.mx/noticia/horarios_en_mexico_30_de_octubre_2022/); [Expansión Política](https://politica.expansion.mx/congreso/2022/10/26/senado-aprueba-eliminacion-del-horario-de-verano)). No winter/summer offset adjustment is needed for local schedule data.

**Short answer:** recommend the existing **`transit`** setting (fallback car share 0.4), with venue-specific overrides for car-heavier rooms. Confidence: **low-to-moderate**. The only quantified event-travel evidence found (FIFA World Cup 2026 at Estadio Banorte) points to a car-involved share of roughly 0.27–0.53, and Mexico City's biggest recurring crowds (World Cup, F1, Liga MX at Banorte in spring 2026) were run with on-site parking closed or restricted. The strongest contrary evidence is heavy ride-hailing, late-night concert egress after the Metro closes, and large-parking venues such as Arena CDMX.

> **Companion venue answer:** not available in this conversation. Venues were enumerated independently below; gaps are named in closing item 4.

---

## 1. Method and evidence rules applied

- **Event travel vs. background.** Only operator/government counts tied to a specific event are treated as event evidence. INEGI's 2017 household Origin-Destination survey (EOD 2017) is **background only** (weekday household trips, not event trips).
- **Car-involved definition** (as the brief requires): private car, carpool drop-off, taxi, and app ride-hail all count as car. **Park & Ride (car to remote lot + shuttle) counts as car-involved**, never as transit. A dedicated event shuttle boarded at a non-parking origin counts as event shuttle (non-car) unless the source shows the rider drove to it.
- **People vs. vehicles.** Ride-hail "viajes" are treated as *vehicle* trips and converted to people with an explicit occupancy assumption (1.5 / 2 / 3). Transit "viajes"/"afluencia" are treated as *boardings or station entries*, which include non-attendees and may double-count transfers. Attendance denominators are capacities unless a turnstile/organizer count was found.
- **Directions.** Where sources give before+after totals, I halve them to get one-direction (arrival) volume, and say so.
- **No conversions without method.** Parking-space counts are shown only as a *ceiling on self-parked attendees* (spaces × assumed occupancy ÷ crowd), never as a mode share.
- **Languages.** Searches in Spanish and English; Spanish source titles and official venue names preserved.

---

## 2. Background (not event travel) — ordinary metro trips

| Metric (ZMVM, weekday, 2017) | Value | Source |
|---|---|---|
| Total weekday trips | 34.56 million | [UNAM Global, citing INEGI EOD 2017](https://unamglobal.unam.mx/global_revista/microbus-o-combi-transporte-publico-mas-utilizado-en-el-valle-de-mexico/) |
| Trips by public transport | 15.57 million (≈45%) | [Chilango, citing EOD 2017](https://www.chilango.com/ciudad/transporte-en-la-cdmx-encuesta/amp/) |
| Trips by car | 6.60 million (≈19% — computed 6.60 ÷ 34.56) | [UNAM Global](https://unamglobal.unam.mx/global_revista/microbus-o-combi-transporte-publico-mas-utilizado-en-el-valle-de-mexico/) |
| Walk-only trips | 11.15 million (≈32% — computed) | same |
| Car trips starting with driver alone | 68% | same |
| Average car occupancy at trip start | 1.5 persons | [Chilango](https://www.chilango.com/ciudad/transporte-en-la-cdmx-encuesta/amp/) |
| Households with ≥1 vehicle (car, motorcycle or bicycle) | 53 of 100 | [Forbes México](https://forbes.com.mx/?p=430435) |
| Survey frame | 66,625 dwellings; 16 CDMX alcaldías, 59 Edomex municipalities, Tizayuca (Hgo.) | [Chilango](https://www.chilango.com/ciudad/transporte-en-la-cdmx-encuesta/amp/) |

A 2026 Kantar market study (urban Mexico generally, not CDMX events) reports app ride-hail as the main or partial mode for 17% of users and own-car as main mode for under 30% ([La Jornada, 7 Apr 2026](https://www.jornada.com.mx/noticia/2026/04/07/economia/solo-10-de-usuarios-de-transporte-en-zonas-metropolitanas-usa-taxis-tradicionales)). Background only; national urban sample.

**Why this matters but cannot be used directly:** ordinary trips are short, local and weekday; event trips are long, evening/weekend and group-based. The EOD figures support the plausibility of a transit-heavy city but do not measure event travel.

---

## 3. Scope recommendation

**Recommended research boundary:** the Zona Metropolitana del Valle de México as framed by INEGI's EOD 2017 — the 16 CDMX alcaldías, 59 Estado de México municipalities and Tizayuca, Hidalgo ([Chilango, citing EOD 2017](https://www.chilango.com/ciudad/transporte-en-la-cdmx-encuesta/amp/)). This is a published, survey-based commuting frame and contains every fixed venue found below. All verified venues are inside CDMX itself; no 5,000+ fixed venue in the Edomex portion was verified in this pass (gap; closing item 4).

**Edge cases (keep separate; do not include automatically):**

| Edge area | Evidence for linkage | Evidence against | Recommendation |
|---|---|---|---|
| **Toluca / Zinacantepec (Edomex)** | El Insurgente interurban rail fully opened to Observatorio on 2 Feb 2026 ([Wikipedia: El Insurgente](https://en.wikipedia.org/wiki/El_Insurgente)); projected 140,000 daily riders ([IEEM síntesis, 3 Feb 2026](https://sintesis.ieem.org.mx/wp-content/uploads/portadas/estatales/PEstatales-030226.pdf)) | Separate metro area with its own Liga MX venue; not in EOD 2017 frame | Edge case; treat Toluca venues as a separate city unless a shared-audience study appears |
| **AIFA / northern Edomex corridor** | Tren Felipe Ángeles (Buenavista–AIFA) opened 26 Apr 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Tren_Felipe_%C3%81ngeles); [Chilango](https://www.chilango.com/noticias/oficial-dia-abre-tren-suburbano-buenavista-aifa/amp/)) | No major event venue found on the corridor | Inside or adjacent to EOD frame; no venue rows needed now |
| **Puebla** | Cruz Azul (a CDMX club) played its first eight Clausura 2026 home matches at Estadio Cuauhtémoc, Puebla ([TV Azteca](https://www.tvazteca.com/aztecadeportes/oficial-cruz-azul-pide-jugar-en-estadio-ciudad-los-deportes-y-se-olvida-del-azteca/)) | Separate metro; temporary relocation | Edge case; shared audience is real but episodic |
| **Querétaro** | Cruz Azul planned a 2026 home match at Estadio Corregidora ([TV Azteca](https://www.tvazteca.com/aztecadeportes/cruz-azul-fuera-estadio-banorte-todos-sus-estadios/)), later withdrawn ([Crónica](https://www.cronica.com.mx/deportes/2026/07/17/cruz-azul-jugara-en-el-estadio-banorte-para-el-apertura-2026-el-equipo-cementero-revela-la-sede/)); Querétaro residents reported travelling to F1 by Metro ([El Universal via Yahoo](https://es-us.noticias.yahoo.com/premio-m%C3%A9xico-opci%C3%B3n-viable-acudir-103345899.html)) | Separate metro; Mexico City–Querétaro train still under construction (closing item 5) | Exclude; note as audience source |

---

## 4. Venue and event travel table

### 4a. Identity, split and recommended value

Shares are **person** shares of attendees. "Car" = private car + carpool + taxi + ride-hail + Park & Ride. "Measured-components" means the inputs are official counts but the share is assembled by me.

| Row | Verified current name / municipality | Setup / event / date represented | Car (incl. rideshare, P&R) | Public bus/rail | Dedicated event shuttle | Walk/bike/other | Unclassified | Sums to 100%? | **Recommended car share** (range; confidence; type) |
|---|---|---|---|---|---|---|---|---|---|
| **R1** | Estadio Banorte (FIFA-period name: Estadio Ciudad de México) — Coyoacán (Santa Úrsula) | FIFA World Cup 2026, Mexico vs England match (one of five CDMX matches, 11 Jun–5 Jul 2026); private cars excluded from 1.5 km perimeter | 27.5–52.5% (central 35.2%) | Tren Ligero ≤25.2% (upper bound; includes non-attendees); Metro L2 not attributable | 3.2% ("Ride" shuttle) | ≈0.1% (Ecobici + scooters) | ≈36% central (Metro L2→walk, Trolebús/RTP/Metrobús specials, local walk-ins, unmeasured drop-offs) | **No** — components only; residual shown | **0.35** (0.27–0.53; low-moderate; measured-components) |
| **R2** | Estadio Banorte — Coyoacán | Reopening friendly Mexico vs Portugal, Sat 28 Mar 2026; no private-car parking; free last-mile transit | Not reported | Trolebús 13,500; RTP 8,500; Tren Ligero 23,968 (sum 45,968 ≈ 52.5% of 87,500 capacity — direction not stated) | Free special services (included in left cell) | Not reported | Remainder | **No** | **0.35** (0.25–0.55; low; estimated by analogy to R1 — same no-parking regime) |
| **R3** | Estadio Banorte — Coyoacán | Liga MX Clausura 2026 late season (e.g., América vs Cruz Azul, Sat 11 Apr 2026, 21:05); general parking closed except pre-sold Fanki spaces | Not reported | Special RTP/Trolebús routes 16:00–01:00 | Park & Ride offered (car-involved) | — | All | **No** | **0.40** (0.25–0.60; low; estimated — R1 regime plus some pre-sold parking) |
| **R4** | Estadio Banorte — Coyoacán | Liga MX Apertura 2026 (Jul–Dec 2026); tenants América, Cruz Azul, Atlante; parking sold MXN 450 presale / up to MXN 1,000 on the day | Not measured | Not measured | None reported | Not measured | All | **No data** | **0.50** (0.35–0.65; low; estimated — floor from R1, parking reopened) |
| **R5** | Estadio Olímpico Universitario — Coyoacán (UNAM, Ciudad Universitaria) | Pumas UNAM, Liga MX 2026 | Not measured | Not measured | PumaBús campus routes reported by a secondary guide | Not measured | All | **No data** | **Unknown → provisional `transit` fallback 0.4** |
| **R6** | Estadio Ciudad de los Deportes — Benito Juárez | No Liga MX tenant for 2026 after Cruz Azul's return to Banorte | — | — | — | — | — | **No data** | **Unknown → fallback 0.4** (low activity) |
| **R7** | Estadio GNP Seguros (formerly Foro Sol) — Iztacalco | Stadium concerts, 21:00 starts, weekdays and weekends (e.g., System of a Down, Wed–Thu 27–28 May 2026) | Not measured | Metro L9 (closes 24:00) | Some operator shuttles mentioned by press | — | All | **No data** | **0.50** (0.35–0.70; very low; estimated) — use fallback until measured |
| **R8** | Autódromo Hermanos Rodríguez — Iztacalco | Fórmula 1 Gran Premio de la Ciudad de México (3 days, late Oct); no on-site parking | Not measured (remote parking + app zone + carpool exist) | Metro L9, Metrobús L2, Trolebús L2 | Remote-station routes (car-involved if from parking lots); free perimeter shuttle | Mass bike parking offered | All | **No data** | **0.35** (0.25–0.55; low; estimated by analogy to R1) |
| **R9** | Autódromo Hermanos Rodríguez grounds — Iztacalco | Festivals: Corona Capital (3 days, Nov), EDC México (3 days, Feb), others | Not measured | Metro L9 etc. | Unknown | — | All | **No data** | **Unknown → fallback 0.4** |
| **R10** | Palacio de los Deportes — Iztacalco | Arena concerts | Not measured | Metro L9 | — | — | All | **No data** | **Unknown → fallback 0.4** |
| **R11** | Estadio Alfredo Harp Helú — Iztacalco | LMB Diablos Rojos del México (summer season); MLB Mexico City Series | Not measured | Metro L9 (Ciudad Deportiva cluster) | — | — | All | **No data** | **Unknown → fallback 0.4** |
| **R12** | Arena CDMX (Arena Ciudad de México) — Azcapotzalco | Arena concerts/sports, full bowl | Not measured | Metro L6 Ferrería; Tren Suburbano Fortuna | — | — | All | **No data** | **0.60** (0.45–0.80; low; estimated from parking ratio) |
| **R13** | Auditorio Nacional — Miguel Hidalgo | Seated concerts | Not measured | Metro L7 Auditorio | — | — | All | **No data** | **Unknown → fallback 0.4** |
| **R14** | Pepsi Center WTC — Benito Juárez (Nápoles) | GA concert configuration | Not measured | Metrobús L1 corridor (Insurgentes) | — | — | All | **No data** | **Unknown → fallback 0.4**; parking ratio suggests car-heavier (see 4b) |
| **R15** | Maratón de la Ciudad de México (XLIII) — CU → Zócalo | Sun 30 Aug 2026, ≈30,000 runners | Not measured | Metro L1, 2, 3, 9 opened 05:00; free for bib-holders | — | Runners/spectators | All | **No data** | **Unknown**; road-closure event — fallback not meaningful |
| **R16** | Medio Maratón de la Ciudad de México — Reforma | Sun 12 Jul 2026, 30,000 runners | Not measured | Early Metro on some lines | — | — | All | **No data** | **Unknown** (as R15) |
| **R17** | Zócalo (Plaza de la Constitución) — Cuauhtémoc | FIFA Fan Festival, free concerts | Not measured | Metro L2 Zócalo + many lines | — | Walk | All | **No data** | **Unknown → fallback 0.4** |

### 4b. Capacity, parking, operations, access and sources

| Row | Capacity by setup (conflicts preserved) | Parking supply / remote arrangements | Event operations, closures, start/end service | Access constraints / crowds sharing approaches | Direct sources |
|---|---|---|---|---|---|
| **R1** | 87,500 cited by city government for the World Cup operation | No private parking; 1.5 km "Última Milla" perimeter; Park & Ride MXN 500 return; "Ride" direct shuttle MXN 350 return; taxi bays; app ride-hail | Measured on Mexico vs England day: Tren Ligero 44,065 trips before+after; Metro L2 121,720 trips before+after; P&R 7,505 (2,099 before / 5,406 after); Ride 5,644 (2,447 / 3,197); taxi bays 93; apps ≈27,000 arrivals+departures; Ecobici 52; scooters 172. Five matches together: 1,188,700 trips on public/shared modes | Calzada de Tlalpan, Periférico Sur, Santa Úrsula, Gran Sur; shared with CDMX FIFA Fan Festival crowds on match days | [Expansión Política, 8 Jul 2026](https://politica.expansion.mx/cdmx/2026/07/08/mas-de-1-1-millones-de-personas-usaron-metro-tren-ligero-y-ecobici-durante-juegos-del-mundial) |
| **R2** | Same building; attendance not stated in source | No private parking ([Récord](https://www.record.com.mx/historia/clara-brugada-anuncia-que-no-habra-estacionamiento-en-el-estadio-banorte-para-el-juego-de-mexico-vs-portugal-2026032419554424116)); remote lots at Auditorio Nacional, Santa Fe, Six Flags, Parque Ecológico Xochimilco, Plaza Carso ([Sopitas](https://www.sopitas.com/deportes/como-llegar-estadio-azteca-mexico-vs-portugal/amp/)) | City reported just over 45,000 fans used the free last-mile scheme; Trolebús 13,500 (120 units), RTP 8,500 (123 units), Tren Ligero 23,968; Taxqueña Metro had 85,680 additional entries, not all event-related; Tren Ligero saturation reported | Closures on Santa Úrsula, Gran Sur, Calzada de Tlalpan ([Récord](https://www.record.com.mx/historia/clara-brugada-anuncia-que-no-habra-estacionamiento-en-el-estadio-banorte-para-el-juego-de-mexico-vs-portugal-2026032419554424116)); simultaneous Zócalo FanFest ≈10,000 and protests on Periférico Sur | [Excélsior, 29 Mar 2026](https://www.excelsior.com.mx/ciudad-de-mexico/movilidad-cdmx-libra-prueba-rumbo-mundial-2026) |
| **R3** | — | Only pre-sold Fanki parking; Park & Ride announced ([N+](https://www.nmas.com.mx/deportes/como-llegar-estadio-banorte-partido-america-vs-cruz-azul-no-hay-estacionamiento-opciones/)); private drop-off bays for América vs Pumas, 3 May 2026 ([adn40](https://www.adn40.mx/ciudad/2026-04-30/cierre-de-calles-y-avenidas-del-estadio-banorte-por-el-clasico-capitalino-america-vs-pumas-alternativas-para-llegar/)) | Special RTP and Trolebús to Av. Santa Úrsula and CETRAM Huipulco, 16:00–01:00 ([Récord](https://www.record.com.mx/historia/cdmx-implementa-transporte-especial-para-el-america-vs-cruz-azul-en-el-estadio-banorte-2026041120224516088)); one Trolebús special ran from Estadio Olímpico Universitario ([SDP](https://www.sdpnoticias.com/deportes/cdmx-habilita-transporte-al-estadio-banorte-lo-que-debes-saber/)) | Same corridors as R1 | as cited |
| **R4** | 88,084 ([Excélsior, Sep 2026](https://www.excelsior.com.mx/deportes/america-chivas-boletos-agotados-apertura-2026-liga-mx)); 87,500 ([Récord, Mar 2026](https://www.record.com.mx/historia/el-remodelado-estadio-azteca-ya-casi-quedo-espectacular-2026032702025314546)); ≈90,000 ([IQ Magazine — paywalled](https://www.iqmagazine.com/2026/03/mexico-citys-estadio-banorte-reopens-after-e175m-refresh/)) | On-site parking sold MXN 450 presale, up to MXN 1,000 on the day ([Fox Sports, 14 Aug 2026](https://www.foxsports.com.mx/2026/08/14/ojo-estadio-banorte-avisa-el-estacionamiento-cuesta-mil-pesos-si-no-se-adquiere-en-la-preventa/)); **space count not found** | Only the América vs Chivas Clásico (19 Sep 2026) neared a sellout after the World Cup ([Excélsior](https://www.excelsior.com.mx/deportes/america-chivas-boletos-agotados-apertura-2026-liga-mx)); renovation continues after the World Cup ([ESPN](https://espndeportes.espn.com/futbol/mexico/nota/_/id/16772828/estadio-banorte-60-anos-todas-las-remodelaciones-mundial-2026)) | Three tenants share one venue, so no simultaneous Liga MX overlap here ([Telemundo](https://www.telemundo.com/deportes/liga-mx/ahora-si-cruz-azul-regresa-al-estadio-azteca-rcna588101)) | as cited |
| **R5** | 72,000 ([CDMX tourism](https://mexicocity.cdmx.gob.mx/venues/university-olympic-stadium-estadio-olimpico-universitario/?lang=en)); 68,954 ([UNAM thesis, 2021](https://tesiunamdocumentos.dgb.unam.mx/ptd2021/junio/0813433/0813433_A9.pdf)); 63,186 ([StadiumDB](https://stadiumdb.com/stadiums/mex/estadio_olimpico_universitario)); 52,000 seats ([StadiumGuide](https://stadiumguide.com/?p=278)) | 8 lots, 2,618 vehicles, lot 8 staff-only on match days; overflow onto CU internal circuits ([UNAM thesis](https://tesiunamdocumentos.dgb.unam.mx/ptd2021/junio/0813433/0813433_A9.pdf)) | Metrobús L1 stations connect by footbridges ([CDMX tourism](https://mexicocity.cdmx.gob.mx/venues/university-olympic-stadium-estadio-olimpico-universitario/?lang=en)); end-of-match service not verified | Insurgentes Sur; Marathon start area (R15) | as cited |
| **R6** | 36,681 ([CDMX tourism](https://mexicocity.cdmx.gob.mx/venues/estadio-ciudad-de-los-deportes/?lang=en)); "about 33,000" in unofficial guides (not used) | Not found | Liga MX refused the pitch for Apertura 2026 J2 ([El Financiero](https://www.elfinanciero.com.mx/deportes/2026/07/14/cruz-azul-jugara-el-queretaro-por-rehabilitacion-en-el-estadio-ciudad-de-los-deportes/)); no team in 2026 ([Crónica](https://www.cronica.com.mx/deportes/2026/07/17/cruz-azul-jugara-en-el-estadio-banorte-para-el-apertura-2026-el-equipo-cementero-revela-la-sede/)) | 0.20 km from Plaza de Toros México; WTC nearby ([CDMX tourism](https://mexicocity.cdmx.gob.mx/venues/estadio-ciudad-de-los-deportes/?lang=en)) | as cited |
| **R7** | 65,000 ([Camino Real guide](https://www.grupocaminoreal.com/en/blog/mexico-city-s-top-venues-for-concerts-festivals-and-events)) — operator figure not found | Official lots at gates 7, 8, 9, 15 ([TV Azteca](https://www.tvazteca.com/azteca7/noticias-musica/guia-para-concierto-oasis-estadio-gnp-seguros-cdmx)); count not found | Metro closes 24:00; road trips can take up to two hours; walk out of venue 15–30 min ([Chilango](https://www.chilango.com/que-hacer/como-llegar-estadio-gnp-seguros-cdmx/)); 21:00 starts on weekdays ([Publimetro](https://www.publimetro.com.mx/entretenimiento/2026/05/27/como-llegar-a-los-conciertos-de-system-of-a-down-en-el-estadio-gnp-rutas-para-evitar-el-caos/)); SSC deployed 1,147 officers (Blink-182, 2024) and 1,226 (Shakira, 2025) ([La Razón](https://www.razon.com.mx/ciudad/2024/11/09/concierto-de-blink-182-horario-como-llegar-operativo-de-la-ssc-y-todo-lo-que-debes-saber/); [Posta](https://www.posta.com.mx/cdmx/ssc-implementa-operativo-especial-por-concierto-de-shakira/vl2014579)) | Viaducto, Río Churubusco, Eje 3 Sur Añil, Eje 4 Ote.; shares Metro L9 with R8–R11 | as cited |
| **R8** | 404,958 over three days in 2024 ([Récord](https://www.record.com.mx/formula1/gran-premio-de-mexico-hasta-2028-la-formula-1-renueva-contrato-con-la-cdmx)); 400,639 in 2023, race day 109,245 ([Mediotiempo](https://www.mediotiempo.com/automovilismo/f1/se-establece-recorde-de-asistencia-en-el-gran-premio-de-mexico)); ≈110,000 site capacity (secondary) | No on-site parking; Transportación Remota routes MXN 150 single / 300 return ([InformaBTL](https://www.informabtl.com/cuando-es-la-formula-1-en-mexico-horarios-donde-ver-como-llegar-y-mas/)); 5 remote parking lots in 2023 plan ([SEMOVI PDF](https://www.semovi.cdmx.gob.mx/storage/app/media/PPT/2023/formula-1-semovi.pdf)); app pickup zone at Palacio de los Deportes gate 6 ([InformaBTL](https://www.informabtl.com/la-guia-mas-simple-para-llegar-al-gp-mexico-2025-no-podras-ir-en-auto-propio/)); Tribbu carpool community ([Mediotiempo](https://www.mediotiempo.com/automovilismo/f1/llegar-autodromo-hermanos-rodriguez-estacionamiento-trazo-plan-movilidad)) | Free perimeter shuttle 07:00–20:00 (6 RTP, 4 Metrobús, 3 Trolebús) ([Récord](https://www.record.com.mx/historia/formula-1-asi-sera-la-movilidad-para-el-gran-premio-de-mexico-2025102208591000443)); remote-route returns only 15:30–19:00 from Eje 3 Sur Añil/Churubusco ([Mediotiempo](https://www.mediotiempo.com/automovilismo/f1/llegar-autodromo-hermanos-rodriguez-estacionamiento-trazo-plan-movilidad)); Metro L9 opened 06:00 race Sunday 2025 ([Infobae](https://www.infobae.com/mexico/deportes/2025/10/24/metro-iniciara-operaciones-anticipadas-y-aumentara-trenes-por-el-gran-premio-de-mexico-2025-de-la-f1/)) | Perimeter security belt; Río Churubusco lateral closed ([InformaBTL](https://www.informabtl.com/la-guia-mas-simple-para-llegar-al-gp-mexico-2025-no-podras-ir-en-auto-propio/)); >238,000 tourists in 2024 ([Motorpasión](https://www.motorpasion.com.mx/industria/formula-1-renueva-gran-premio-mexico-2028/amp)) | as cited |
| **R9** | Corona Capital 2025: 236,000 over three days ([Posta](https://www.posta.com.mx/entretenimiento/corona-capital-2026-revela-las-fechas-oficial-para-el-festival/vl2194030)); EDC México 20–22 Feb 2026 ([Expansión](https://expansion.mx/finanzas-personales/2026/02/26/vive-latino-corona-capital-2026-cuanto-cuesta-ir-festivales)) | Not found | Not found | Same cluster as R7/R8; Vive Latino 2026 site conflict (closing item 3) | as cited |
| **R10** | 22,000 ([Songkick](https://songkick.com/concerts/43268522-alvaro-diaz-at-palacio-de-los-deportes)); 24,500 ([Camino Real guide](https://www.grupocaminoreal.com/en/blog/mexico-city-s-top-venues-for-concerts-festivals-and-events)) | Not found | Not found | Hosts the F1 app pickup zone (R8); adjacent Pabellón Oeste ([Time Out](https://www.timeoutmexico.mx/ciudad-de-mexico/musica/conciertos-en-oriente)) | as cited |
| **R11** | 20,062 (LMB record) ([Mediotiempo](https://www.mediotiempo.com/mlb/grandes-ligas-reporta-cifras-solidas-con-san-diego-vs-arizona)); 2025 season 592,153 in 41 games ≈14,443/game (computed) ([MLB.com](https://www.mlb.com/es/news/con-el-antes-y-despues-del-beisbol-en-mexico-que-sigue-para-la-seleccion)); MLB series 2026: 39,301 over two games | Not found | Not found | Ciudad Deportiva cluster | as cited |
| **R12** | 22,300 ([Wikipedia](https://en.wikipedia.org/wiki/Mexico_City_Arena)); 22,000 concert ([Milenio](https://www.milenio.com/politica/comunidad/esta-es-la-capacidad-de-asistentes-de-la-arena-ciudad-de-mexico)) | 5,000 spaces ([Milenio](https://www.milenio.com/politica/comunidad/esta-es-la-capacidad-de-asistentes-de-la-arena-ciudad-de-mexico)) | Not found | Av. de las Granjas; near Metro Ferrería and Suburbano Fortuna ([Wikipedia](https://en.wikipedia.org/wiki/Mexico_City_Arena)) | as cited |
| **R13** | ≈10,000 seats ([Camino Real guide](https://www.grupocaminoreal.com/en/blog/mexico-city-s-top-venues-for-concerts-festivals-and-events)) — operator figure not verified | Used as a World Cup remote lot ([Sopitas](https://www.sopitas.com/deportes/como-llegar-estadio-azteca-mexico-vs-portugal/amp/)); count not found | Not found | Paseo de la Reforma / Chapultepec | as cited |
| **R14** | 8,000 GA; 6,486–8,000 concert; 3,342 auditorium ([Venue Coalition](https://venuecoalition.com/pepsi-center-wtc/)) | More than 3,000 spaces (same source) | Not found | Insurgentes/Nápoles cluster with R6 | as cited |
| **R15** | ≈30,000 runners ([Time Out](https://www.timeoutmexico.mx/ciudad-de-mexico/que-hacer/maraton-cdmx-fecha-inscripciones-y-ruta)) | n/a | Metro L1, 2, 3, 9 from 05:00; free for bib-holders ([Posta](https://www.posta.com.mx/cdmx/el-domingo-30-de-agosto-habra-entrada-gratis-en-el-metro-de-cdmx/vl2248879)); first wave 05:45 | Insurgentes → Zócalo closures | as cited |
| **R16** | 30,000 runners ([official convocatoria](https://21k.cdmx.gob.mx/wp-content/uploads/2026/03/CONVOCATORIA-MEDIO-MARATON-2026-FINAL-1.pdf)) | n/a | Early Metro on some lines; rest from 07:00 ([Chilango](https://www.chilango.com/noticias/medio-maraton-cdmx-2026-fecha-horario-cierres-viales-a-que-hora-abre-el-metro/)) | Reforma / Chapultepec | as cited |
| **R17** | FanFest ≈10,000 on 28 Mar 2026 ([Excélsior](https://www.excelsior.com.mx/ciudad-de-mexico/movilidad-cdmx-libra-prueba-rumbo-mundial-2026)) | n/a | Not found | Centro Histórico | as cited |

---

## 5. Derivations for estimated rows

### R1 — Estadio Banorte, World Cup (Mexico vs England)

Inputs from [Expansión Política](https://politica.expansion.mx/cdmx/2026/07/08/mas-de-1-1-millones-de-personas-usaron-metro-tren-ligero-y-ecobici-durante-juegos-del-mundial). Denominator: 87,500 capacity (actual attendance not published in the source; assumed near-sellout — a source of error). All before+after totals halved to one direction.

| Component | One-direction volume | Share of 87,500 | Treatment |
|---|---|---|---|
| App ride-hail, ≈27,000 trips ÷ 2 = 13,500 vehicle trips × 1.5 / 2 / 3 persons | 20,250 / 27,000 / 40,500 | 23.1% / 30.9% / 46.3% | Car |
| Park & Ride, 7,505 ÷ 2 (average); high case uses the larger post-match count 5,406 | 3,753 (high 5,406) | 4.3% (high 6.2%) | **Car-involved** (drove to remote lot) |
| Taxi bays, 93 ÷ 2 | ≈47 | ≈0.05% | Car |
| "Ride" direct shuttle, 5,644 ÷ 2 | 2,822 | 3.2% | Event shuttle (no parking component reported) |
| Tren Ligero, 44,065 ÷ 2 | 22,033 | ≤25.2% | Public rail; **upper bound** (includes regular riders; no baseline published) |
| Metro L2, 121,720 before+after | not attributable | — | Excluded: includes regular riders and likely double-counts transfers to Tren Ligero at Tasqueña |
| Ecobici 52 + scooters 172 | ≈112 | ≈0.1% | Bike/other |
| **Car-involved total** | | **27.5% / 35.2% / 52.5%** | low / central / high |
| Residual (central) | | ≈36% | Unclassified |

Uncertainties: (a) whether app "viajes" are vehicle trips (assumed) and whether some served workers/media; (b) occupancy; (c) no baseline subtraction possible for Tren Ligero; (d) unmeasured private drop-offs and informal parking outside the perimeter would push car share up; (e) P&R before/after asymmetry is unexplained. **Recommended 0.35 (0.27–0.53).** This is a restricted-access World Cup configuration and should not be generalized to ordinary Liga MX nights without R4's adjustment.

### R2/R3 — analogy
Same building, same no-private-parking regime, but no ride-hail or P&R counts were published. R2 borrows R1's range. R3 adds pre-sold parking (count unknown), so its central value is set slightly higher (0.40) with a wider range.

### R4 — Liga MX with parking (Apertura 2026)
No counts exist. Logic: R1 (≈0.27–0.53) is a **floor** under a regime that banned on-site parking; reopening paid parking can only raise car share. The parking count is unknown, so the upper bound is judgment, capped at 0.65 because the same high-capacity Tren Ligero/Metro L2/Trolebús corridor remains. **0.50 (0.35–0.65), low.**

### R8 — F1 by analogy
The GP shares R1's defining features (no on-site parking, remote lots, ride-hail zone, heavy rail access via Metro L9) and draws a large visitor audience (more than 238,000 tourists in 2024, per R8 sources), a group with limited access to private cars. No organizer split found. **0.35 (0.25–0.55), low.** Multi-day totals are not used as a simultaneous crowd; for weighting I use the 2024 three-day total ÷ 3 = 134,986 as a daily-average crowd (race day is higher; 2023 race day was 109,245 by one report, so the daily-average figure is itself uncertain — closing item 4).

### R12 — Arena CDMX parking ceiling
5,000 spaces × 2–3 persons = 10,000–15,000 people = 44.8–67.3% of 22,300 if every space were used by attendees. This is a ceiling for **self-parked** attendees only; adding ride-hail and drop-offs could exceed it, while unused spaces would reduce it. With Metro L6 and the Suburbano nearby but late-night egress, **0.60 (0.45–0.80), low.**

### R7 — GNP Seguros
No counts; official lots exist; Metro L9 is adjacent but closes at 24:00 while 21:00 shows end near midnight, pushing egress to ride-hail/taxi/car. **Indicative 0.50 (0.35–0.70), very low** — not recommended as an override until measured; use the fallback.

### R5 and R14 — parking context only (no share)
- R5: 2,618 spaces × 2.5–3 persons = 6,545–7,854 self-parked attendees, i.e., ≈9–13% of a full house across the four conflicting capacities — a formal-parking floor only; overflow on campus circuits is unquantified.
- R14: >3,000 spaces against 8,000 GA capacity (≈0.38 spaces per attendee) — the highest ratio found; likely car-heavier than the fallback, but no attendance or usage data.

---

## 6. Regional conclusion and weighting

### Capacity-weighted car share (only rows with a numeric estimate; one configuration per building)

Banorte uses **R4 only** (R1–R3 are mutually exclusive configurations of the same building). Multi-day events are never summed into one crowd.

| Set | Rows and weights | Central | Low end | High end |
|---|---|---|---|---|
| Fixed venues | R4 Banorte 88,084 × 0.50; R7 GNP 65,000 × 0.50; R12 Arena CDMX 22,300 × 0.60 (total weight 175,384) | **0.513** | 0.363 | 0.688 |
| Fixed venues + F1 daily-average crowd | above + R8 134,986 × 0.35 (total 310,370) | **0.442** | 0.314 | 0.628 |

Missing coverage: R5, R6, R9–R11, R13–R17 have no estimate and are excluded — including them at the `transit` fallback would be circular. All three fixed-venue inputs are *estimated*, not measured, so the weighted result inherits low confidence.

**Typical-attendance weighting: not possible.** No typical (non-sellout) attendance was found for R4, R7 or R12. The only typical figure found (Diablos Rojos ≈14,443 per game in 2025) belongs to a row with no car-share estimate.

### Which existing setting fits?

The current defaults are 0.85 for both `sprawl` and `hub` and 0.4 for `transit`; the midpoint between the two available values is 0.625. The central weighted estimates (0.44–0.51) and the only measured-components row (R1, 0.35) sit closer to 0.4. **Recommendation: `transit`.**

**Strongest contrary evidence:**
1. The **high end** of the fixed-venue range (0.688) crosses the 0.625 midpoint — the result is not robust to pessimistic assumptions.
2. **Ride-hailing is large and counts as car.** Even with private cars banned, ride-hail alone was ≈23–46% of R1's crowd.
3. **Late-night egress:** Metro closes at 24:00 while stadium concerts start at 21:00 ([Chilango](https://www.chilango.com/que-hacer/como-llegar-estadio-gnp-seguros-cdmx/)), so return trips skew to car even where arrivals use rail.
4. **Large-parking venues:** Arena CDMX (5,000 spaces) and Pepsi Center WTC (>3,000) are likely above 0.4; Banorte reopened paid parking for Apertura 2026.
5. The evidence that most favours `transit` comes from **exceptional, centrally managed operations** (World Cup, F1, spring 2026 test events) where parking was deliberately removed; ordinary nights may differ.

**Venue exceptions to flag for overrides:** R12 Arena CDMX (0.60), R4 Banorte Liga MX (0.50), and possibly R14 Pepsi Center WTC once measured.

**Do huge outlying venues obscure the downtown pattern?** Partly the reverse. The two largest crowds (Banorte in the south, the Autódromo/GNP complex in the east) are not downtown, yet both are rail-served and were operated with parking restricted. The car-heavier signals come from mid-sized rooms (Arena CDMX in Azcapotzalco, Pepsi Center WTC in Nápoles). Without the F1 row, the weighted value rises from 0.442 to 0.513 — so the big outdoor event pulls the regional figure *toward* `transit`, not away from it.

---

## 7. Venue clusters, shared roads and shared audiences (separate findings)

**Clusters (adjacency only — no distance rule proposed):**
- **Magdalena Mixhuca / Iztacalco:** Autódromo (R8/R9), Estadio GNP Seguros (R7, inside the Autódromo complex), Palacio de los Deportes (R10), Pabellón Oeste, Estadio Alfredo Harp Helú (R11). Shared Metro L9 stations Velódromo, Ciudad Deportiva and Puebla; Metrobús L2; Trolebús L2 ([Record, F1 2025](https://www.record.com.mx/historia/formula-1-asi-sera-la-movilidad-para-el-gran-premio-de-mexico-2025102208591000443)). The F1 ride-hail zone is literally at Palacio gate 6, so concurrent Palacio/GNP/F1 activity collides by design.
- **South (Coyoacán):** Estadio Banorte (R1–R4) and Estadio Olímpico Universitario (R5). Linked operationally: a Trolebús special ran EOU → Banorte ([SDP](https://www.sdpnoticias.com/deportes/cdmx-habilita-transporte-al-estadio-banorte-lo-que-debes-saber/)); Metrobús L1 was extended Perisur → Santa Úrsula for the World Cup ([Merca2.0](https://www.merca20.com/?p=12578536)). The Marathon starts beside EOU.
- **Nápoles (Benito Juárez):** Estadio Ciudad de los Deportes (R6), Plaza de Toros México (0.20 km away), WTC / Pepsi Center (R14).
- **Centro / Reforma:** Zócalo (R17), Marathon finish, Medio Maratón route (R16), Auditorio Nacional (R13) at the west end of Reforma.

**Shared roads:** Calzada de Tlalpan / Periférico Sur / Insurgentes Sur (south cluster); Viaducto / Río Churubusco / Eje 3 Sur Añil / Eje 4 Ote. (Mixhuca); Insurgentes (Nápoles and the Marathon route).

**Shared audiences:** América, Cruz Azul and Atlante all play at Banorte in Apertura 2026 ([Telemundo](https://www.telemundo.com/deportes/liga-mx/ahora-si-cruz-azul-regresa-al-estadio-azteca-rcna588101)); Cruz Azul's audience has followed the club through Ciudad de los Deportes, CU, Puebla and Banorte since 2024 ([Récord](https://www.record.com.mx/historia/sin-casa-pero-con-la-aficion-entregada-asi-han-sido-las-mudanzas-del-cruz-azul-2026072117243586178)). World Cup match days combined stadium crowds with FanFest crowds; the city reported 4.7 million people on the streets over the tournament (headline only, article not opened: [Expansión Política](https://politica.expansion.mx/cdmx/2026/07/07/mundial-en-cdmx-saco-a-4-7-millones-de-aficionados-a-las-calles-y-dejo-derrama-de-18-000-mdp)).

---

## 8. Schedule-source, calendar, naming and data-rights coverage

- **App feed coverage was not verified.** I found no evidence either way that the app's current schedule sources carry Liga MX, LMB or local ticketing. Do not infer coverage from teams appearing in search results.
- **Ticketing is fragmented and local:** Banorte matches sell through **Fanki** (also used for parking) ([N+](https://www.nmas.com.mx/deportes/como-llegar-estadio-banorte-partido-america-vs-cruz-azul-no-hay-estacionamiento-opciones/); [Posta](https://www.posta.com.mx/cdmx/como-llegar-al-cruz-azul-vs-america-sin-sufrir-el-trafico/vl2252853)); GNP concerts and Vive Latino use Ticketmaster ([Publimetro](https://www.publimetro.com.mx/entretenimiento/2026/05/27/como-llegar-a-los-conciertos-de-system-of-a-down-en-el-estadio-gnp-rutas-para-evitar-el-caos/)). A Ticketmaster-only source would miss Banorte Liga MX.
- **MLB ≠ LMB:** MLB's Mexico City Series at Harp Helú is an MLB event; Diablos Rojos' LMB season is a separate league and calendar.
- **Calendar:** Liga MX runs Apertura (Jul–Dec) and Clausura (Jan–May); LMB is a summer league; F1 is late October; Corona Capital is late November (21–23 Nov 2026). Seasonal clock change: none (UTC−6 fixed).
- **Naming:** Estadio Banorte = historical Estadio Azteca; FIFA used "Estadio Ciudad de México" during the tournament ([CDMX tourism](https://mexicocity.cdmx.gob.mx/venues/estadio-banorte/)). The new name was in use at the 28 Mar 2026 reopening; the contractual effective date was not verified. Estadio GNP Seguros = former Foro Sol. Estadio Ciudad de los Deportes = former Estadio Azul.
- **Data rights:** All event-travel figures here are press reports of SEMOVI/city statements; the original SEMOVI bulletins were **not located**, so figures could not be checked at source.

---

## Closing summary

### 1. Recommended existing city type and rationale

**`transit`** (0.4). Rationale: the only quantified event-travel evidence (R1) gives ≈0.35 car-involved with ride-hail counted as car; the largest recurring events are rail-served and operated with parking removed or restricted; central weighted estimates are 0.44–0.51, closer to 0.4 than to 0.85. Background EOD data (≈19% of weekday trips by car) is consistent but not used as evidence. **Strongest contrary evidence:** the pessimistic weighted estimate (0.688) crosses the midpoint; ride-hail is large; Metro closes at midnight; Arena CDMX/Pepsi Center/Banorte-with-parking are car-heavier.

### 2. Car-share values keyed to venue rows

No companion venue answer was available, so keys refer to the rows in §4.

| Type | Row | Value (range; confidence) |
|---|---|---|
| **Measured-components** | R1 Banorte, World Cup, Mexico vs England | 0.35 (0.27–0.53; low-moderate) |
| **Projected** | none found — no published projected mode split for any venue | — |
| **Estimated** | R2 Banorte reopening friendly | 0.35 (0.25–0.55; low) |
| Estimated | R3 Banorte Liga MX, Clausura 2026 restricted parking | 0.40 (0.25–0.60; low) |
| Estimated | R4 Banorte Liga MX, Apertura 2026 with parking | 0.50 (0.35–0.65; low) |
| Estimated | R8 F1 Gran Premio de la Ciudad de México | 0.35 (0.25–0.55; low) |
| Estimated | R12 Arena CDMX | 0.60 (0.45–0.80; low) |
| Indicative only | R7 Estadio GNP Seguros concerts | 0.50 (0.35–0.70; very low) — use fallback |
| **Unknown → `transit` fallback 0.4** | R5, R6, R9, R10, R11, R13, R14, R17 | — |
| Unknown (road events) | R15, R16 | — |

### 3. Boundary recommendation and inconsistencies between briefs

- **Boundary:** ZMVM as framed by EOD 2017 (16 alcaldías + 59 Edomex municipalities + Tizayuca). Toluca, Puebla and Querétaro remain edge cases (§3) — Toluca is newly rail-linked; Puebla and Querétaro share audiences episodically through Cruz Azul.
- **Inconsistencies:** (a) the companion venue answer is not available, so row keys are local to this file; (b) the brief lists "Estadio GNP Seguros and Autódromo grounds" together — GNP sits inside the Autódromo complex, so F1/festival rows (R8/R9) and GNP concert rows (R7) are distinct configurations of overlapping ground and must not be added together; (c) the brief calls Banorte "formerly Estadio Azteca," but during the World Cup FIFA used a third name; (d) Vive Latino 2026 is placed at Estadio GNP Seguros by most sources but at "Foro GNP and other zones of the Autódromo" by [Expansión](https://expansion.mx/finanzas-personales/2026/02/26/vive-latino-corona-capital-2026-cuanto-cuesta-ir-festivales) — a setup ambiguity affecting de-duplication.

### 4. Data gaps, model limitations, source conflicts, inaccessible sources

**Gaps:** no attendee travel survey found for any venue; no SEMOVI/Metro baseline for event-day subtraction; no parking space counts for Banorte, GNP, Palacio or Auditorio Nacional; no F1 or festival mode data; no typical (non-sellout) attendance for most venues. **Venues not enumerated with verified numbers:** Arena México, Plaza de Toros México, Teatro Metropólitan, Frontón México, Velódromo Olímpico, Domo de Cobre, Estadio Wilfrido Massieu (IPN), Centro Citibanamex/Hipódromo grounds, Pabellón Oeste capacity, any Edomex arena; Toluca's Liga MX stadium (edge case) not researched.

**Model limitations:** the app's single car-share value cannot represent arrival/egress asymmetry (rail in, car out after midnight); it also cannot represent regime switches at one building (Banorte with vs. without parking, R1–R4).

**Source conflicts (preserved):** Banorte capacity 87,500 / 88,084 / ≈90,000; EOU capacity 72,000 / 68,954 / 63,186 / 52,000; Palacio 22,000 / 24,500; Ciudad de los Deportes 36,681 vs ≈33,000 (unofficial); F1 daily-average (134,986, computed from 2024 total) vs 2023 race-day report of 109,245 — these are different years and definitions and are not reconciled; R1 P&R before/after asymmetry (2,099 vs 5,406).

**Inaccessible:** IQ Magazine (paywalled — not bypassed); original SEMOVI bulletins (not found); the Expansión 4.7-million article was seen only as a headline.

### 5. Transport and venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| El Insurgente (Mexico City–Toluca) complete to Observatorio | **Opened** | 2 Feb 2026 ([Wikipedia](https://en.wikipedia.org/wiki/El_Insurgente)) | Ridership: Apr 2027 |
| Tren Felipe Ángeles (Buenavista–AIFA) | **Opened** | 26 Apr 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Tren_Felipe_%C3%81ngeles)) | Apr 2027 |
| Estadio Banorte reopening after renovation | **Done**; further works continue post-World Cup | 28 Mar 2026 ([ESPN](https://espndeportes.espn.com/futbol/mexico/nota/_/id/16772828/estadio-banorte-60-anos-todas-las-remodelaciones-mundial-2026)) | Parking count/policy: Jan 2027 (Clausura) |
| Metrobús L1 extension Perisur–Santa Úrsula | Announced in the World Cup mobility plan; permanence not verified | 2026 ([Merca2.0](https://www.merca20.com/?p=12578536)) | Jan 2027 |
| Paseo Elevado, Calzada de Tlalpan (active-mobility link Centro → Banorte) | Planned for 2026; completion not verified | 2026 ([Chilango](https://www.chilango.com/noticias/obras-y-transportes-que-se-inauguran-en-cdmx-durante-2026/)) | Jan 2027 |
| Mexico City–Querétaro passenger rail | Under construction; **target**, not confirmed | 2027 target ([Mexico Business News](https://mexicobusiness.news/infrastructure/news/mexico-pushes-major-rail-projects-aifa-line-enters-testing)) | Mid-2027 |
| F1 Gran Premio de la Ciudad de México | **Contracted** through 2028 | Signed 30 Apr 2025 ([Récord](https://www.record.com.mx/formula1/gran-premio-de-mexico-hasta-2028-la-formula-1-renueva-contrato-con-la-cdmx)) | After each edition (Nov) |
| Corona Capital 2026 | Scheduled | 21–23 Nov 2026 ([Posta](https://www.posta.com.mx/entretenimiento/corona-capital-2026-revela-las-fechas-oficial-para-el-festival/vl2194030)) | Dec 2026 |
| Cruz Azul home venue | Banorte for Apertura 2026; long-run home unsettled | Jul 2026 ([Crónica](https://www.cronica.com.mx/deportes/2026/07/17/cruz-azul-jugara-en-el-estadio-banorte-para-el-apertura-2026-el-equipo-cementero-revela-la-sede/)) | Each tournament (Dec, Jun) |

**Highest-value next step:** request SEMOVI/STC event-day ridership with same-weekday baselines and Banorte's parking-space count — those two items would convert R4 from estimated to measured-components and test the `transit` recommendation directly.
