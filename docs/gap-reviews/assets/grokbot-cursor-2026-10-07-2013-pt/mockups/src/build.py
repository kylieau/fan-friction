import re,sys,glob,os
d=os.path.dirname(os.path.abspath(__file__))
for f in sys.argv[1:]:
    s=open(f).read()
    def rep(m):
        svg=open(os.path.join(d,'icons',m.group(1)+'.svg')).read()
        return re.sub(r'(width|height)="24"','',svg,count=2)
    s=re.sub(r'\{\{ic:([a-z_]+)\}\}',rep,s)
    open(f.replace('.html','.built.html'),'w').write(s)
