exec(open('base.py').read())
P_LK='<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
P_TV='<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 3l4 4 4-4"/>'
P_T='<path d="M3.5 7.5h17v3a1.8 1.8 0 0 0 0 3.5v3h-17v-3a1.8 1.8 0 0 0 0-3.5z"/><path d="M15 7.5v10" stroke-dasharray="1.6 2"/>'
K='ks390.png';E='event-page-part1.png'
CSS+='''.p{height:844px}.pill{display:inline-flex;align-items:center;gap:5px;height:32px;padding:0 12px;border-radius:16px;box-shadow:inset 0 0 0 1.5px #2F5D93;color:#2F5D93;font-size:14px;font-weight:800;position:relative}.pill:after{content:"";position:absolute;inset:-6px -2px}
.arow{position:absolute;left:19px;right:19px;display:flex;align-items:center;gap:10px;min-height:44px}.arow .lb{white-space:nowrap;font-size:15px;font-weight:800;color:#0F1B2D}
.hlp2{position:absolute;left:19px;right:19px;font-size:12px;color:#4A5568}
.menu{position:absolute;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(15,27,45,.28);width:250px;overflow:hidden;z-index:8}.mi{display:flex;align-items:center;gap:10px;min-height:52px;padding:6px 14px;border-bottom:1px solid #EDF0F4}.mi b{display:block;font-size:14.5px}.mi span{font-size:12px;color:#4A5568}.mi .ck{margin-left:auto;color:#2F5D93;font-weight:800}
.seg2{position:absolute;left:19px;right:19px;display:flex;height:34px;border-radius:10px;box-shadow:inset 0 0 0 1.5px #2F5D93;overflow:hidden}.seg2 a{flex:1;display:flex;align-items:center;justify-content:center;gap:5px;font-size:13.5px;font-weight:800;color:#2F5D93}.seg2 a.on{background:#2F5D93;color:#fff}
.stl{position:absolute;left:14px;right:14px;display:flex;align-items:center;gap:6px;min-height:44px;font-size:15px;font-weight:800;color:#2F5D93}.stl .au{display:inline-flex;align-items:center;gap:4px;color:#4A5568;font-weight:700;font-size:14px;padding:4px 8px;border-radius:8px;background:#fff}.stl .dt{color:#4A5568}
.set{position:absolute;left:0;right:0;top:0;padding:16px}.set h1{font-size:28px;margin:4px 0 14px}.sec{font-size:12px;font-weight:800;color:#4A5568;letter-spacing:.06em;margin:14px 4px 6px}.sc{background:#fff;border-radius:16px;overflow:hidden}.rr{display:flex;gap:12px;align-items:center;min-height:60px;padding:8px 14px;border-bottom:1px solid #EDF0F4}.rr b{display:block;font-size:15px}.rr span{font-size:12.5px;color:#4A5568}.rad{width:22px;height:22px;border-radius:11px;box-shadow:inset 0 0 0 2px #A0AEC0;margin-left:auto;flex:0 0 auto}.rad.on{box-shadow:inset 0 0 0 7px #005A9C}.sh2{font-size:12.5px;color:#4A5568;margin:8px 4px}
.tri{color:#005A9C}
'''
TAB=S(E,0,776,390,68,0,776)
AUD=lambda ic,w,menu=False: f'<a class="pill">{I(ic,15)} {w} ⌄</a>'
def sheet(row,helper=''):
    h=B(14,553,362,192,'#fff')+row
    if helper: h+=f'<div class="hlp2" style="top:600px">{helper}</div>'
    h+=S(K,0,605,390,100,0,623)
    return h
FR=AUD(P_PP,'Friends');PR=AUD(P_LK,'Private')
HF="Approved friends will see where you're watching"
ph('p2',K,sheet(f'<div class="arow" style="top:555px"><span class="lb">Who sees this</span>{FR}<span style="margin-left:auto;font-size:12px;color:#718096;font-weight:700">Your default</span></div>',HF))
MENU=f'<div class="menu" style="left:96px;top:456px"><div class="mi">{I(P_PP,18)}<div><b>Friends</b><span>Approved friends</span></div><span class="ck">✓</span></div><div class="mi">{I(P_LK,18)}<div><b>Private</b><span>Only you</span></div></div></div>'
ph('p3',K,sheet(f'<div class="arow" style="top:555px"><span class="lb">Who sees this</span>{FR}</div>',HF)+MENU)
ph('p4',K,sheet(f'<div class="arow" style="top:555px"><span class="lb">Who sees this</span>{PR}<span style="margin-left:auto;font-size:12px;color:#B7791F;font-weight:800">Not your default</span></div>','Only you. Your default stays Friends.'))
ph('p5',K,sheet(f'<div class="seg2" style="top:560px"><a>{I(P_LK,14)} Private</a><a class="on">{I(P_PP,14)} Friends</a></div>',HF))
# settings
SET=f'''<div class="set"><div style="color:#005A9C;font-weight:800;font-size:15px;min-height:30px">‹ Settings</div><h1>Privacy</h1>
<div class="sec">DEFAULT FOR NEW STUBS</div><div class="sc"><div class="rr">{I(P_PP,20)}<div><b>Friends</b><span>Approved friends see your stubs. {HF}.</span></div><span class="rad on"></span></div><div class="rr" style="border:0">{I(P_LK,20)}<div><b>Private</b><span>Only you</span></div><span class="rad"></span></div></div>
<div class="sh2">Applies to new stubs. You can still change any single stub when you stub it, or later from the event page.</div>
<div class="sec">PAST STUBS</div><div class="sc"><div class="rr" style="border:0"><div><b>Change past stubs…</b><span>Make all past stubs Private or Friends at once</span></div><span style="margin-left:auto;color:#005A9C;font-weight:800;font-size:18px">›</span></div></div>
<div style="margin-top:14px">{EX}</div></div>'''
ph('p1',None,SET+TAB)
ph('p1b',None,SET+TAB+f'<div class="dim"></div><div class="bs"><div class="grab"></div><h3>Change past stubs</h3><div class="v">Applies to all 14 past stubs. New stubs keep your default.</div><div class="opt">{I(P_LK,20)}<div><b>Make all past stubs Private</b><span>Only you</span></div></div><div class="opt">{I(P_PP,20)}<div><b>Make all past stubs Friends</b><span>Approved friends</span></div></div><div class="cnl">Cancel</div></div>')
# event pages
def stubline(st_ic,st,au_ic,au,extra=''): return f'<div class="stl" style="top:246px">{I(st_ic,16)}<span>{st}</span>{extra}<span class="dt">·</span><a class="au">{I(au_ic,14)} {au} ⌄</a></div>'
ph('p6',E,S(E,0,244,390,488,0,288)+B(0,244,390,44)+stubline(P_TV,'Watching',P_LK,'Private'))
ph('p7',E,B(0,0,200,40)+T(14,10,'‹ Wed, Oct 14','font-size:15px;font-weight:700;color:#0F1B2D')+S(E,0,244,390,488,0,288)+B(0,244,390,44)+stubline(P_T,'Attended',P_PP,'Friends',f'<span class="dt">·</span><span style="display:flex;align-items:center;gap:3px;color:#0F1B2D">{CROWD} 55k</span>')+MENU.replace('left:96px;top:456px','left:120px;top:290px').replace('Friends</b><span>Approved friends</span></div><span class="ck">✓','Friends</b><span>Approved friends</span></div><span class="ck">✓')+'<div class="note" style="left:100px;top:402px">After the event: tap to change audience</div>')
open('names.txt','w').write(' '.join(NAMES))
