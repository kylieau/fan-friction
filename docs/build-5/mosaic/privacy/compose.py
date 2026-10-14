from PIL import Image,ImageDraw,ImageFont
FP='/usr/share/fonts/truetype/sand-box/google/Manrope/Manrope-VariableFont_wght.ttf'
def F(s,w=700):
    f=ImageFont.truetype(FP,s)
    try: f.set_variation_by_axes([w])
    except Exception: pass
    return f
V='/workspace/ff-gap-review/mosaic/privacy/src/'
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
    o.save('/workspace/ff-gap-review/mosaic/privacy/'+out);print(out,o.size)


S="Base: Kylie's live Stub it sheet (iOS) and the live event page (b5-current). Settings isn't captured live, so it's drawn in the live card style. EXAMPLE data. Kylie decides."
board('privacy-r1.png','Stub privacy, Venmo-style: a default you can override per stub',S,[
 ('1 · Settings › Privacy','p1',1),('1 · Change past stubs','p1b',1),('2 · Sheet: audience pill, default (lean)','p2',1),('2 · pill menu','p3',1),('2 · overridden to Private','p4',1),('2 alt · smaller segmented row','p5',0),('3 · Upcoming: stub line','p6',1),('4 · Past: edit after','p7',1)],[
 ('Venmo pattern (checked): Settings › Privacy sets the default for new payments; each payment\'s audience is preselected and changeable when sent or later; "Past Transactions" changes all at once.',0),
 ('1 · Lean: a two-option default (Friends / Private) plus "Change past stubs…" with both bulk options. Rejected: a Public option. Stubs only go to approved friends, so Public adds risk without a use.',0),
 ('   Venmo only lets past items get more private. We allow both directions because stubs are only ever seen by approved friends; Kylie may prefer Venmo\'s one-way rule.',1),
 ('2 · Lean: one compact "Who sees this [Friends ⌄]" pill preselected from the default, opening a 2-option menu. It saves a full row of big buttons, and the default is visible but quiet. When overridden, a gold "Not your default" shows.',0),
 ('   The decided helper "Approved friends will see where you\'re watching" stays under the row when Friends + Watching. Rejected: keeping the two big buttons (they weigh as much as the status choice). Alt: a smaller segmented row, which is clear but adds a row.',1),
 ('3/4 · Lean: the live stub line under "+ Stub it" adds "· [lock] Private ⌄" or "· [people] Friends ⌄", tappable to change, including after the event. Rejected: audience only inside the Stub it sheet, which is hard to find later.',0)])
