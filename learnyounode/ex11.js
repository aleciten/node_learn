var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer(function (request, response) {
	var fileStream = fs.createReadStream(fileName);
	fileStream.pipe(response);
});
server.listen(portNumber);