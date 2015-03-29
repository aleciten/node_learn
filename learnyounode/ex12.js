var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer(function (request, response) {
	if (request.method !== 'POST')
		return res.end();
	
	request.on('data', function (chunk) {
		response.write(chunk.toString().toUpperCase());
	});
	request.on('end', function () {
		response.end();
	});
});
server.listen(portNumber);