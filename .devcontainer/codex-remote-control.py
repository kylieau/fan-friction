#!/usr/bin/env python3
# Enable the already-running local server without interrupting its chats.
import socket,base64,os,json,struct,sys,hashlib
from pathlib import Path
sock=socket.socket(socket.AF_UNIX,socket.SOCK_STREAM)
sock.settimeout(15)
sock.connect(str((Path(os.environ.get('CODEX_HOME', '/home/node/.codex')) / 'app-server-control/app-server-control.sock').resolve()))
key=base64.b64encode(os.urandom(16)).decode()
sock.sendall(('GET / HTTP/1.1\r\nHost: localhost\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: '+key+'\r\nSec-WebSocket-Version: 13\r\n\r\n').encode())
header=b''
while not header.endswith(b'\r\n\r\n'):
    b=sock.recv(1)
    if not b: raise RuntimeError('Server closed the connection')
    header+=b
    if len(header)>65536: raise RuntimeError('Unexpected handshake')
if b' 101 ' not in header: raise RuntimeError('WebSocket handshake rejected: '+header.split(b'\r\n')[0].decode())
expected=base64.b64encode(hashlib.sha1((key+'258EAFA5-E914-47DA-95CA-C5AB0DC85B11').encode()).digest())
if expected.lower() not in header.lower(): raise RuntimeError('Unexpected WebSocket handshake identity')
def send(data,opcode=1):
    payload=json.dumps(data).encode() if not isinstance(data,bytes) else data
    size=len(payload)
    frame=bytes([0x80|opcode])
    frame+=bytes([0x80|size]) if size<126 else (bytes([0x80|126])+struct.pack('!H',size) if size<65536 else bytes([0x80|127])+struct.pack('!Q',size))
    mask=os.urandom(4)
    sock.sendall(frame+mask+bytes(b^mask[i%4] for i,b in enumerate(payload)))
def exact(n):
    out=b''
    while len(out)<n:
        b=sock.recv(n-len(out))
        if not b: raise RuntimeError('Connection closed')
        out+=b
    return out

def receive():
    while True:
        a,b=exact(2); opcode=a&15; size=b&127
        if size==126: size=struct.unpack('!H',exact(2))[0]
        elif size==127: size=struct.unpack('!Q',exact(8))[0]
        if size>2**22: raise RuntimeError('Unexpectedly large response')
        mask=exact(4) if b&128 else None
        payload=exact(size)
        if mask: payload=bytes(c^mask[i%4] for i,c in enumerate(payload))
        if opcode==9: send(payload,10); continue
        if opcode==8: raise RuntimeError('Server closed WebSocket')
        if opcode==1: return json.loads(payload)
def request(i,method,params):
    send({'id':i,'method':method,'params':params})
    while True:
        response=receive()
        if response.get('id')==i: return response
initialized=request(1,'initialize',{'clientInfo':{'name':'fan_friction_container_startup','version':'1.0'},'capabilities':{'experimentalApi':True}})
if 'error' in initialized: raise RuntimeError(initialized['error']['message'])
send({'method':'initialized','params':{}})
mode=sys.argv[1] if len(sys.argv)>1 else 'status'
if mode=='enable':
    enabled=request(2,'remoteControl/enable',{'ephemeral':False})
    if 'error' in enabled: raise RuntimeError(enabled['error']['message'])
status=request(3,'remoteControl/status/read',{})
if 'error' in status: raise RuntimeError(status['error']['message'])
print(json.dumps(status['result']))
sock.close()
