var net = require('net');
var portNumber = process.argv[2];

var server = net.createServer(function (socket) {
	var match = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/.exec(new Date().toISOString());
	socket.end(match[1] + ' ' + match[2] + '\n');
});
server.listen(portNumber);