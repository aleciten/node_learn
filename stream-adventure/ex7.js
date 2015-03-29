var through = require('through2');
var http = require('http');
var portNumber = process.argv[2];

var server = http.createServer(function (req, res) {
	if (req.method !== 'POST') {
		res.writeHead(405);
		return res.end();
	}
	
	req
		.pipe(through(function (buffer, encoding, next) {
			this.push(buffer.toString().toUpperCase());
			next();
		}))
		.pipe(res);
});
server.listen(portNumber);