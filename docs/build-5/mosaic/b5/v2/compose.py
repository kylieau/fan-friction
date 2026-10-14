from PIL import Image,ImageDraw,ImageFont
FP='/usr/share/fonts/truetype/sand-box/google/Manrope/Manrope-VariableFont_wght.ttf'
def F(s,w=700):
    f=ImageFont.truetype(FP,s)
    try: f.set_variation_by_axes([w])
    except Exception: pass
    return f
V='/workspace/ff-gap-review/mosaic/b5/v2/src/'
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
    o.save('/workspace/ff-gap-review/mosaic/b5/v2/'+out);print(out,o.size)

S='Bases: fresh live captures (main b092616, live/b5-current), real pixels with new pieces drawn on top in live styles. EXAMPLE data. Nothing decided: Kylie chooses.'
board('regional.png','Regional: big events 60+ mi outside the metro',S,[
 ('A · Further out band under the calendar (lean, Kylie decides)','r1',1),('A · expanded','r1x',1),('B · row in the Map sheet','r2',0),('C · chip in the header','r3',0)],[
 ('A (lean): on the live List view, a collapsed "Further out · 60+ mi · 3 big events" card sits between the calendar and THIS WEEK. Tap to expand: name, venue on line 1B, dates, distance.',0),
 ('   Why: these are trip-planning items, not part of the LA read, so no score and no pin. Collapsed, it costs one row and never competes with the day lists.',1),
 ('B: the live Map sheet grows a second row ("Further out: Coachella +2 · 125 mi+"). Always visible, but it costs map space every visit. C: a header chip next to the day count. Compact, but its meaning is unclear.',1),
 ('Live bug visible on the List phones: the floating "↑ Today" pill covers the TOMORROW header. It\'s left as captured and labelled.',1)])
board('unsized.png','Estimated and unsized crowds',S,[
 ('Map chips (lean, Kylie decides)','u1',1),('Selected unsized chip + card','u2',1),('List rows + read note','u3',1),('Event page crowd block','u4',1)],[
 ('Lean: estimated = "~" + "est." (80% of stated capacity, 95% if sold out). Unsized = no figure, "— unsized"; shown but never counted toward a read.',0),
 ('   The live chip, the selected card, the List row and the crowd card stay as they are; only the figure and label change. Unsized pins are hollow because the gold glow means crowd size.',1),
 ('   The List day gets one footer line, "1 unsized event not counted in the read". In the crowd card, "Packed" becomes "Sold out" / "No capacity listed", and the range line explains the estimate.',1),
 ('FLAG: the live event page already shows "~55,000 Estimated" for the Dodgers projection. It\'s kept as is here, but "Estimated" would then mean two things (projection vs capacity estimate).',0),
 ('Alternatives: hide unsized events (loses real events), or guess a capacity for them (misleading). Both rejected.',1)])
board('add-to-calendar.png','Add to calendar (export to device or Google, not an in-app calendar)',S,[
 ('A · button under Stub it (lean, Kylie decides)','c1',1),('B · icon button beside Stub it','c2',0),('Chooser sheet','c3',1)],[
 ('A (lean): an outlined "Add to calendar" button under the live "+ Stub it", secondary in weight, 44pt. This day and everything below shift down one row.',0),
 ('B: a calendar icon button beside a narrower Stub it. No extra row, but icon-only is easy to miss. C (not drawn): inside "Share this event" at the bottom. Hidden, so rejected.',1),
 ('Chooser: Apple Calendar (device calendar via an .ics file; "Device calendar" on Android) or Google Calendar (prefilled link). It is a one-time export with no sync.',1)])
board('lineup.png','"Lineup" for a day\'s events',S,[
 ('A · List day headers (lean, Kylie decides)','l1',1),('B · date page section title','l2',0),('C · Map sheet summary row','l3',0)],[
 ('A (lean): the live List day headers read "TOMORROW\'S LINEUP · WED, OCT 14", "THURSDAY\'S LINEUP · OCT 15", "FRIDAY\'S LINEUP · OCT 16". Each still fits one line beside the read box.',0),
 ('B: the date page "This day in Los Angeles" becomes "Wednesday\'s lineup in Los Angeles". C: the sheet row reads "Friday\'s lineup · 1 event · 55k". Friendly, but longer, and it drops the date number.',1),
 ('Live bug visible in A: the floating "↑ Today" pill covers the TOMORROW header (left as captured and labelled).',1)])
