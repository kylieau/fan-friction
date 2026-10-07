# Pasted by Kylie in the Oct 7, 2026 Claude Code session: the researcher's script behind
# docs/next-cities-research-answer.md §5 (named overlap.py there). Saved unedited below this comment.

# Overlap model: each team's home dates spread evenly over its 2025 season window,
# on the weekdays it actually plays; teams in the same building can't both be home.
import datetime as dt
D=dt.date
def days(a,b,wd=None):
    out=[];d=a
    while d<=b:
        if wd is None or d.weekday() in wd: out.append(d)
        d+=dt.timedelta(1)
    return out
SAT,SUN,FRI=5,6,4
W={}
def win(kind):
    if kind in W: return W[kind]
    if kind=='MLB': ds=days(D(2025,3,27),D(2025,9,28)); p=81/len(ds)
    elif kind=='NBA': ds=days(D(2025,1,1),D(2025,4,13))+days(D(2025,10,21),D(2025,12,31)); p=41/174
    elif kind=='NHL': ds=days(D(2025,1,1),D(2025,4,17))+days(D(2025,10,7),D(2025,12,31)); p=41/196
    elif kind=='WNBA': ds=days(D(2025,5,16),D(2025,9,11)); p=22/len(ds)
    elif kind=='NFL': ds=[D(2025,1,5)]+days(D(2025,9,7),D(2025,12,28),{SUN}); p=8.5/len(ds)
    elif kind=='CFB': ds=days(D(2025,8,30),D(2025,11,29),{SAT}); p=6.5/len(ds)
    elif kind=='MLS': ds=days(D(2025,2,22),D(2025,10,18),{SAT}); p=17/len(ds)
    elif kind=='NWSL': ds=days(D(2025,3,14),D(2025,11,2),{FRI,SAT,SUN}); p=13/len(ds)
    elif kind=='USL': ds=days(D(2025,3,8),D(2025,10,18),{SAT}); p=15/len(ds)
    elif kind=='RODEO': ds=days(D(2025,3,4),D(2025,3,23)); p=1.0
    W[kind]=({d:p for d in ds}); return W[kind]
M={
 'Bay Area':[('Giants','MLB','Oracle'),('Warriors','NBA','Chase'),('Valkyries','WNBA','Chase'),('Sharks','NHL','SAP'),
   ('49ers','NFL','Levis'),('Earthquakes','MLS','PayPal'),('Bay FC','NWSL','PayPal'),('Cal','CFB','Memorial'),
   ('Stanford','CFB','StanfordStad'),('San Jose St','CFB','CEFCU'),('Oakland Roots','USL','Coliseum')],
 'Atlanta':[('Braves','MLB','Truist'),('Hawks','NBA','StateFarmArena'),('Falcons','NFL','MBS'),('United','MLS','MBS'),
   ('Georgia Tech','CFB','BobbyDodd'),('Georgia St','CFB','CenterParc')],
 'Philadelphia':[('Phillies','MLB','CBP'),('76ers','NBA','XfinityMobile'),('Flyers','NHL','XfinityMobile'),
   ('Eagles','NFL','Linc'),('Temple','CFB','Linc'),('Union','MLS','Subaru')],
 'Chicago':[('Cubs','MLB','Wrigley'),('White Sox','MLB','Rate'),('Bulls','NBA','United'),('Blackhawks','NHL','United'),
   ('Bears','NFL','Soldier'),('Fire','MLS','Soldier'),('Sky','WNBA','Wintrust'),('Northwestern','CFB','Martin/Ryan')],
 'Dallas-Fort Worth':[('Rangers','MLB','GlobeLife'),('Mavericks','NBA','AAC'),('Stars','NHL','AAC'),('Cowboys','NFL','ATT'),
   ('FC Dallas','MLS','ToyotaStad'),('Wings','WNBA','CollegePark'),('TCU','CFB','AmonCarter'),('SMU','CFB','Ford'),('North Texas','CFB','DATCU')],
 'Houston':[('Astros','MLB','Daikin'),('Rockets','NBA','ToyotaCtr'),('Texans','NFL','NRG'),('RodeoHouston','RODEO','NRG'),
   ('Dynamo','MLS','Shell'),('Dash','NWSL','Shell'),('Houston','CFB','TDECU'),('Rice','CFB','RiceStad')],
 'Austin':[('Austin FC','MLS','Q2'),('Texas','CFB','DKR'),('Texas St','CFB','UFCU')],
 'Boston':[('Red Sox','MLB','Fenway'),('Celtics','NBA','TD'),('Bruins','NHL','TD'),('Patriots','NFL','Gillette'),
   ('Revolution','MLS','Gillette'),('Boston College','CFB','Alumni')],
 'Phoenix':[('Diamondbacks','MLB','ChaseField'),('Suns','NBA','MMC'),('Mercury','WNBA','MMC'),('Cardinals','NFL','StateFarmStad'),
   ('Arizona St','CFB','MountainAmerica')],
 'Tampa Bay':[('Rays','MLB','Steinbrenner'),('Lightning','NHL','Benchmark'),('Buccaneers','NFL','RJS'),('USF','CFB','RJS')],
 'Columbus':[('Blue Jackets','NHL','Nationwide'),('Crew','MLS','Lower'),('Ohio St','CFB','OhioStadium')],
 'Seattle (covered, for scale)':[('Mariners','MLB','TMobile'),('Kraken','NHL','ClimatePledge'),('Storm','WNBA','ClimatePledge'),
   ('Seahawks','NFL','Lumen'),('Sounders','MLS','Lumen'),('Reign','NWSL','Lumen'),('Washington','CFB','Husky')],
}
def run(teams):
    alld=days(D(2025,1,1),D(2025,12,31))
    tot=0;ge1=ge2=ge3=0;peakmonth={}
    for d in alld:
        b={}
        for name,kind,bld in teams:
            p=win(kind).get(d,0); b[bld]=min(1,b.get(bld,0)+p)
        ps=[p for p in b.values() if p>0]
        tot+=sum(ps)
        dist=[1.0]
        for p in ps:
            nd=[0.0]*(len(dist)+1)
            for k,v in enumerate(dist): nd[k]+=v*(1-p); nd[k+1]+=v*p
            dist=nd
        g2=1-dist[0]-(dist[1] if len(dist)>1 else 0)
        ge1+=1-dist[0]; ge2+=g2; ge3+=1-sum(dist[:3])
        peakmonth[d.month]=peakmonth.get(d.month,0)+g2
    return tot,ge1,ge2,ge3,peakmonth
print(f"{'metro':30} homeDates nights>=1 nights>=2 nights>=3  busiest months for >=2")
for m,t in M.items():
    tot,a,b,c,pm=run(t)
    top=sorted(pm.items(),key=lambda x:-x[1])[:3]
    print(f"{m:30} {tot:8.0f} {a:9.0f} {b:9.0f} {c:9.0f}   "+", ".join(f"{dt.date(2025,k,1):%b} {v:.0f}" for k,v in top))
