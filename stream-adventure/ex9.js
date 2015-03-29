var ws = require('websocket-stream');
var s = ws('ws://localhost:8099');
s.write('hello\n');