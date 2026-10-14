def I(p,s=16): return f'<svg class="ic" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{p}</svg>'
P_CAL='<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'
P_FAR='<path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>'
P_PP='<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2c3 .2 5.5 2.4 5.5 5.8"/>'
CROWD='<svg class="ic" width="14" height="14" viewBox="0 0 24 24" fill="#B7791F"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.8 2.9-6.5 6.5-6.5s6.5 2.7 6.5 6.5z"/><circle cx="17" cy="9" r="2.8"/><path d="M16 13.6c3.3.2 5.5 2.6 5.5 6.4H17c0-2.6-.4-4.6-1-6.4z"/></svg>'
EX='<span class="ex">EXAMPLE</span>'
CSS='''*{box-sizing:border-box}body{margin:0}.p{position:relative;width:390px;height:844px;overflow:hidden;font-family:Manrope;color:#0F1B2D;background:#DAEBFE}.bg{position:absolute;left:0;top:0;width:390px}
.s{position:absolute;background-size:390px auto;background-repeat:no-repeat}.ic{vertical-align:-3px;flex:0 0 auto}
.ex{display:inline-block;font-size:11px;font-weight:800;color:#5C4300;background:#FFF4C2;border:1px dashed #E3A600;border-radius:5px;padding:0 5px;margin-left:6px}
.note{position:absolute;font-size:11.5px;font-weight:800;color:#5C4300;background:#FFF4C2;border:1px solid #E3A600;border-radius:8px;padding:3px 8px;z-index:9;white-space:nowrap}
.card{position:absolute;left:16px;width:358px;background:#fff;border-radius:14px;overflow:hidden}
.band{display:flex;align-items:center;gap:8px;min-height:48px;padding:0 14px;font-size:14px;font-weight:800}.band .r{margin-left:auto;font-size:13px;color:#4A5568;font-weight:700}.band .k{font-size:11.5px;font-weight:800;color:#4A5568;letter-spacing:.06em}
.frow{display:flex;align-items:center;gap:8px;min-height:52px;padding:6px 14px;border-top:1px solid #E2E8F0}.frow .m{flex:1}.frow b{display:block;font-size:15px;font-weight:800}.frow .v{font-size:13px;color:#4A5568}.frow .rt{text-align:right;font-size:13px;font-weight:800;white-space:nowrap}.frow .rt span{display:block;color:#4A5568;font-weight:600}
.lrow{display:flex;padding:10px 12px;border-top:1px solid #E8EDF3;min-height:62px}.lrow .t{width:68px;font-size:13px;color:#4A5568;font-weight:600;padding-top:2px}.lrow .m{flex:1}.lrow b{display:block;font-size:16px;font-weight:800;line-height:1.2}.lrow .v{font-size:13px;color:#4A5568}.lrow .c{text-align:right;font-size:15px;font-weight:800;white-space:nowrap}.lrow .c .e{font-size:11.5px;color:#4A5568;font-weight:800;margin-left:2px}.lrow .c.u{color:#4A5568;font-size:13px}
.lfoot{font-size:11.5px;color:#4A5568;font-weight:700;padding:6px 12px 8px;border-top:1px solid #E8EDF3}
.bt{position:absolute;left:18px;font-size:13px;font-weight:800;letter-spacing:.06em;color:#0C182A}
.chip{position:absolute;background:#fff;border:1px solid #ABAFB6;border-radius:6px;padding:3px 6px;font:700 10.5px/13px Roboto,Arial;color:#1A202C;white-space:nowrap;z-index:3}.chip span{display:block;font-weight:500;color:#4A5568}.chip.sel{box-shadow:0 0 0 3px #9CC3E4}
.pin{position:absolute;width:9px;height:9px;border-radius:5px;background:#0F1B2D;box-shadow:0 0 0 7px rgba(255,214,90,.3)}.pin.u{background:#fff;box-shadow:0 0 0 1.5px #4A5568}
.scard{position:absolute;left:14px;width:362px;background:#fff;border-radius:16px;padding:12px 14px}.scard .r{display:flex;justify-content:space-between;align-items:center}.scard b{font-size:16px;font-weight:800}.scard .v{font-size:14px;color:#4A5568;margin-top:4px}.uns{font-size:13px;font-weight:800;color:#4A5568;border:1px dashed #9AA5B4;border-radius:6px;padding:1px 7px}
.btn2{position:absolute;left:14px;right:14px;height:44px;border-radius:12px;background:#fff;box-shadow:inset 0 0 0 1.5px #005A9C;color:#005A9C;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:7px}
.stub{position:absolute;height:45px;border-radius:12px;background:#005A9C;color:#fff;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center}
.dim{position:absolute;inset:0;background:rgba(15,27,45,.45)}.bs{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:18px 18px 0 0;padding:8px 16px 26px}.grab{width:36px;height:4px;border-radius:2px;background:#9AA5B4;margin:0 auto 6px}.bs h3{margin:4px 0 2px;font-size:18px}.bs .v{font-size:13px;color:#4A5568}.opt{display:flex;align-items:center;gap:12px;min-height:58px;border-bottom:1px solid #E2E8F0}.opt .lg{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px}.opt b{font-size:15px;display:block}.opt span{font-size:12.5px;color:#4A5568}.cnl{margin-top:12px;height:46px;border-radius:12px;background:#E8ECF2;display:flex;align-items:center;justify-content:center;font-weight:800;color:#2D3748}
.hc{position:absolute;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 9px;border-radius:12px;background:#fff;box-shadow:inset 0 0 0 1px #A0AEC0;font-size:12px;font-weight:800;color:#2D3748}.hc:after{content:"";position:absolute;inset:-10px 0}
.srow{position:absolute;left:0;right:0;display:flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;font-size:14px;font-weight:700;color:#0F1B2D;border-top:1px solid #C3D6EE}.srow .r{margin-left:auto;font-size:13px;color:#4A5568}
.fig{display:flex;align-items:center;gap:10px}
'''
NAMES=[]
def ph(n,base,body):
    bg=f'<img class="bg" src="{base}">' if base else ''
    open(n+'.html','w').write(f'<html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Roboto:wght@500;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet"><style>{CSS}</style></head><body><div class="p">{bg}{body}</div></body></html>');NAMES.append(n)
def S(base,sx,sy,w,h,dx,dy): return f'<div class="s" style="left:{dx}px;top:{dy}px;width:{w}px;height:{h}px;background-image:url({base});background-position:-{sx}px -{sy}px"></div>'
def B(x,y,w,h,c='#DAEBFE'): return f'<div class="s" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;background:{c}"></div>'
def T(x,y,html,style=''): return f'<div style="position:absolute;left:{x}px;top:{y}px;{style}">{html}</div>'
L='explore-list-la.png';M='explore-map-la.png';MS='map-chip-selected.png';D='date-page.png';E1='event-page-part1.png';E2='event-page-part2.png'
# ---- 1 regional
FAR=[('Coachella','Empire Polo Club · Indio','Apr 9–11','125 mi'),('Stagecoach','Empire Polo Club · Indio','Apr 23–25','125 mi'),('EDC Las Vegas','Las Vegas Motor Speedway','May 14–16','270 mi')]
BANDC=f'<div class="band">{I(P_FAR,16)}<span>Further out</span><span class="k">60+ MI</span><span class="r">3 big events ⌄</span></div>'
ph('r1',L,S(L,0,268,390,506,0,324)+B(0,268,390,56)+f'<div class="card" style="top:272px">{BANDC}</div>'+'<div class="note" style="left:16px;top:744px">Live bug: ↑ Today pill covers the TOMORROW header</div>')
rows=''.join(f'<div class="frow"><div class="m"><b>{a}</b><span class="v">{b}</span></div><div class="rt">{c}<span>{d}</span></div></div>' for a,b,c,d in FAR)
ph('r1x',L,S(L,0,268,390,300,0,476)+B(0,268,390,208)+f'<div class="card" style="top:272px">{BANDC.replace("3 big events ⌄","Hide ⌃")}{rows}<div class="frow" style="min-height:28px;font-size:11.5px;color:#4A5568;font-weight:700">Outside the LA read, so no score and no map pin{EX}</div></div>')
ph('r2',M,S(M,338,666,46,46,338,618)+S(M,0,676,40,40,0,0).replace('left:0px;top:0px','left:0px;top:632px')+B(0,676,390,100)+S(M,0,726,390,49,0,682).replace('left:0px;top:682px','left:0px;top:676px')+f'<div class="srow" style="top:728px">{I(P_FAR,15)} Further out: Coachella +2<span class="r">125 mi+ ›</span></div>'+'<div class="note" style="left:12px;top:592px">EXAMPLE · sheet grows one row</div>')
ph('r3',M,f'<a class="hc" style="left:186px;top:94px">{I(P_FAR,13)} Further out 3</a><div class="note" style="left:150px;top:128px">EXAMPLE · opens the Further out list</div>')
# ---- 2 unsized
HDR=B(118,98,70,18,'#DAEBFE')+T(76,97,f'3 events · {CROWD} 59k','font-size:13.5px;font-weight:600;color:#4A5568;display:flex;align-items:center;gap:3px;background:#DAEBFE;padding-right:6px')
CHIPS=lambda sel=False: f'<div class="chip" style="left:236px;top:286px">Lot show (DICE)<span>8:00 pm · ~3.8k est.</span></div><span class="pin" style="left:282px;top:326px"></span><div class="chip{" sel" if sel else ""}" style="left:22px;top:560px">Warehouse pop-up<span>10:00 pm · unsized</span></div><span class="pin u" style="left:62px;top:600px"></span>'
ph('u1',M,B(76,98,110,18)+HDR+B(14,738,240,26)+T(16,740,f'Fri, Oct 16 · 3 events · {CROWD} 59k ›','font-size:14.5px;font-weight:800;color:#005A9C;display:flex;align-items:center;gap:4px')+CHIPS()+'<div class="note" style="left:12px;top:650px">EXAMPLE · live chip · ~est. · unsized (hollow pin)</div>')
ph('u2',MS,B(76,98,110,18)+HDR+S(M,70,405,200,80,70,405)+CHIPS(True)+B(14,670,362,100)+f'<div class="scard" style="top:672px;height:94px"><div class="r"><b>Warehouse pop-up</b><span class="uns">unsized</span></div><div class="v">Location on ticket · 10:00 pm</div><div style="font-size:12px;color:#4A5568;margin-top:4px">No capacity listed. Shown, not counted in the read.</div></div>')
NEWROWS=f'<div class="lrow"><span class="t">8:00 pm</span><div class="m"><b>Lot show (DICE)</b><span class="v">Arts District lot</span></div><span class="c">{CROWD} ~3.8k<span class="e">est.</span></span></div><div class="lrow"><span class="t">10:00 pm</span><div class="m"><b>Warehouse pop-up</b><span class="v">Location on ticket</span></div><span class="c u">— unsized</span></div><div class="lfoot">1 unsized event not counted in the read{EX}</div>'
ph('u3',L,S(L,0,504,390,75,0,504)+B(0,579,390,200)+f'<div class="card" style="top:578px;border-radius:0 0 14px 14px">{NEWROWS}</div>'+S(L,0,586,390,70,0,744)+B(16,572,358,10,'#fff'))
def crowd(y0,fig,lab,line1,line2,un=False):
    cov=B(30,y0+38,330,48,'#FFF6D6' if not un else '#F1F4F8')
    f=T(44,y0+42,f'<div class="fig"><span style="font:800 34px \'Big Shoulders Display\';color:{"#4A5568" if un else "#0F1B2D"}">{fig}</span></div>')+T(250,y0+54,f'<span style="font-size:14px;font-weight:700;color:#2D3748">{lab}</span>','width:100px;text-align:right')
    return cov+f+B(28,y0+98,330,20,'#fff')+T(28,y0+98,line1,'font-size:14px;color:#0F1B2D')+B(28,y0+130,330,22,'#fff')+T(28,y0+132,line2,'font-size:13px;color:#4A5568;width:330px')
# crowd card in part2: find top
def crowdcard(top,fig,lab,l1,l2,un=False,live=False):
    h=S(E2,0,165,390,200,0,top-4)
    if live: return h
    c=top  # card top = source 169 -> top
    h+=B(37,c+41,320,55,'#FFF8DB')
    if un: h+=f'<div class="s" style="left:32px;top:{c+41}px;width:326px;height:55px;background:#F1F4F8;border-left:5px solid #9AA5B4;border-radius:8px"></div>'
    h+=T(52 if not un else 50,c+50,(CROWD if not un else '')+f'<span style="font:800 40px/1 \'Big Shoulders Display\';color:{"#4A5568" if un else "#0F1B2D"};margin-left:8px">{fig}</span>','display:flex;align-items:center')
    h+=T(200,c+60,f'<span style="font-size:14px;font-weight:700;color:#0F1B2D">{lab}</span>','width:145px;text-align:right')
    h+=B(28,c+110,330,22,'#fff')+T(32,c+111,l1,'font-size:14px;color:#0F1B2D;font-weight:500')
    h+=B(28,c+150,330,26,'#fff')+T(32,c+152,l2,'font-size:13px;color:#718096;width:320px')
    return h
cc=crowdcard(70,'','','','',live=True)+crowdcard(300,'~3,800','Estimated','Sold out','95% of the 4,000 stated capacity (80% if not sold out).')+crowdcard(530,'—','Unsized','No capacity listed','Shown, but not counted toward the day\'s read.',un=True)
ph('u4',None,T(16,16,'EVENT PAGE CROWD BLOCK · LIVE + 2 NEW STATES'+EX,'font-size:12px;font-weight:800;color:#4A5568')+T(16,44,'Live (unchanged): ~55,000 "Estimated" (live label; see note)','font-size:12px;font-weight:700;color:#4A5568')+cc+T(16,274,'Estimated pop-up (DICE lot show)','font-size:12px;font-weight:700;color:#4A5568')+T(16,504,'Unsized pop-up','font-size:12px;font-weight:700;color:#4A5568'))
# ---- 3 add to calendar
CB=f'<a class="btn2" style="top:250px">{I(P_CAL,17)} Add to calendar</a>'
ph('c1',E1,S(E1,0,244,390,476,0,300)+B(0,244,390,56)+CB)
ph('c2',E1,B(0,192,390,52)+'<a class="stub" style="left:14px;width:302px;top:196px">+ Stub it</a>'+f'<a class="btn2" style="left:324px;right:auto;width:52px;top:196px;height:45px">{I(P_CAL,19)}</a>')
ph('c3',E1,S(E1,0,244,390,476,0,300)+B(0,244,390,56)+CB+f'<div class="dim"></div><div class="bs"><div class="grab"></div><h3>Add to calendar</h3><div class="v">NLCS G3 · Brewers at Dodgers · Wed, Oct 14 · 5:00 pm · Dodger Stadium</div><div class="opt"><span class="lg" style="background:#F1F4F8">{I(P_CAL,19)}</span><div><b>Apple Calendar</b><span>Your device calendar (.ics file)</span></div></div><div class="opt"><span class="lg" style="background:#E8F0FE;color:#1A73E8">G</span><div><b>Google Calendar</b><span>Opens Google Calendar with the event filled in</span></div></div><div class="cnl">Cancel</div></div>')
# ---- 4 lineup
def band(y,txt): return B(16,y+12,230,30,'#C9DAEE')+f'<div class="bt" style="top:{y+18}px">{txt}</div>'
PILLBACK=S(L,148,307,94,44,148,307)
ph('l1',L,band(299,"TOMORROW'S LINEUP · WED, OCT 14")+PILLBACK+band(446,"THURSDAY'S LINEUP · OCT 15")+band(592,"FRIDAY'S LINEUP · OCT 16")+'<div class="note" style="left:16px;top:744px">Live bug: ↑ Today pill covers the TOMORROW header</div>')
ph('l2',D,B(10,238,370,28)+T(14,240,'Wednesday\'s lineup in Los Angeles','font-size:17px;font-weight:800'))
ph('l3',M,B(14,738,240,26)+T(16,740,f'Friday\'s lineup · 1 event · {CROWD} 55k ›','font-size:14.5px;font-weight:800;color:#005A9C;display:flex;align-items:center;gap:4px'))
open('names.txt','w').write(' '.join(NAMES))
