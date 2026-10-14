from PIL import Image,ImageDraw,ImageFont
FP='/usr/share/fonts/truetype/sand-box/google/Manrope/Manrope-VariableFont_wght.ttf'
def F(s,w=700):
    f=ImageFont.truetype(FP,s)
    try: f.set_variation_by_axes([w])
    except Exception: pass
    return f
V='/workspace/ff-gap-review/mosaic/nav/v2/'
def board(out,title,sub,phones,notes):
    ims=[(l,Image.open(V+n+'.png').convert('RGB').crop((0,0,780,1688)),lean) for l,n,lean in phones]
    G=820;W=max(60+len(ims)*G,3100)
    o=Image.new('RGB',(W,180+64+1688+60+len(notes)*46+60),'#F3F6FA');d=ImageDraw.Draw(o)
    d.text((60,40),title,fill='#0F1B2D',font=F(48,800));d.text((60,110),sub,fill='#4B5A70',font=F(28,600))
    x=60;y=180
    for l,i,lean in ims:
        c='#6A3FBF' if lean else '#005A9C'
        d.rounded_rectangle((x,y,x+40+d.textlength(l,font=F(26)),y+44),radius=22,fill=c);d.text((x+20,y+6),l,fill='white',font=F(26))
        o.paste(i,(x,y+64))
        if lean: d.rectangle((x-6,y+58,x+786,y+64+1688+6),outline='#6A3FBF',width=6)
        x+=G
    y+=64+1688+50
    for t,c in notes: d.text((60,y),t,fill=['#0F1B2D','#4B5A70'][c],font=F(28,600));y+=46
    o.save('b5/'+out);print(out,o.size)
S='Built on live build-4 screens (kylieau/fan-friction @ 3e91839, docs/build-4/live-screens). Live components unchanged; new pieces only. EXAMPLE data. Nothing decided: Kylie chooses.'
board('regional.png','Regional: big events 60+ mi outside the metro',S,[
 ('A · Further out band, collapsed (lean, Kylie decides)','b5-r1',1),('A · expanded','b5-r1x',1),('B · row in the Map sheet','b5-r2',0),('C · chip in the header','b5-r3',0)],[
 ('A (lean): a collapsed "Further out · 60+ mi" band directly under the calendar on the List/calendar view; tap to expand a plain list: name, venue on line 1B, dates, distance.',0),
 ('   Why: these are trip-planning items, not part of the city read, so no score and no pin. Collapsed, it costs one 48pt row and never competes with the day\'s events.',1),
 ('B: a second row in the Map sheet. Always visible, but it adds a row to every map view and pulls attention from the read. C: a header chip. Compact, but the header is already full and the chip\'s meaning is unclear.',1),
 ('Distances are straight-line from the metro centre; 60 mi is the threshold. Rows open the event page (no read box on these).',1)])
board('unsized.png','Estimated and unsized crowds',S,[
 ('Map chips (lean, Kylie decides)','b5-u1',1),('Selected unsized chip + card','b5-u2',1),('List rows (date page) + read note','b5-u3',1),('Event page crowd block','b5-u4',1)],[
 ('Lean: estimated = "~" prefix + "est." label (80% of stated capacity, 95% if sold out). Unsized = no figure: "—" + "unsized", shown but not counted toward any read.',0),
 ('   Map chips keep the live chip; only the second line changes ("9:00 pm · ~2.4k est." / "10:00 pm · unsized"). Unsized pins are hollow, because the gold glow means crowd size.',1),
 ('   The day read gets one footer line: "The read counts 2 of 3 events · 1 unsized not counted". The crowd block keeps the hybrid (big figure + Final / Announced rows); unsized uses a grey figure box.',1),
 ('Alternatives: (1) hide unsized events entirely. Simpler, but loses real events people go to. (2) Show a capacity guess for unsized events. Misleading, so rejected.',1)])
board('add-to-calendar.png','Add to calendar (export, not an in-app calendar)',S,[
 ('A · full-width button under Stub it (lean, Kylie decides)','b5-c1',1),('B · icon button beside Stub it','b5-c2',0),('Chooser sheet','b5-c3',1)],[
 ('A (lean): an outlined "Add to calendar" button right under "+ Stub it". Clear verb, secondary to Stub it, 44pt. It costs one row; This day and the content below shift down 56pt.',0),
 ('B: a 52pt calendar icon button beside a narrower Stub it. No extra row, but icon-only is easy to miss. C (not drawn): inside the share action. Hidden, so rejected.',1),
 ('The sheet offers Apple Calendar (device calendar via an .ics file; on Android this becomes "Device calendar") and Google Calendar (a prefilled web link). The event is written once; no sync.',1)])
board('lineup.png','"Lineup" for a day\'s events',S,[
 ('A · List day header (lean, Kylie decides)','b5-l1',1),('B · date page section title','b5-l2',0),('C · Map sheet summary row','b5-l3',0)],[
 ('A (lean): List day headers read "TODAY\'S LINEUP · MON, OCT 12" / "TUESDAY\'S LINEUP · OCT 13". The word lands where you scan days, and still fits the header on one line with the read box.',0),
 ('   Note: the List view is the approved List B mock (it isn\'t in build 4 yet), so this phone comes from the city mocks, not a live screen.',1),
 ('B: the date page section "This day in Los Angeles" → "Wednesday\'s lineup". Natural, but it drops the city. C: the sheet row "Today\'s lineup · 42k ›". Friendly, but it replaces the event count, which is useful.',1)])
