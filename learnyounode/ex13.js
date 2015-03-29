var http = require('http');
var url = require('url');
var portNumber = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer(function (request, response) {
	if (request.method !== 'GET') {
		response.writeHead(405);
		response.end();
		return;
	}

	var urlInfo = url.parse(request.url, true);
	var date = new Date(urlInfo.query.iso);
	var ret = null;

	if (urlInfo.pathname === '/api/parsetime') {
		ret = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	}
	else if (urlInfo.pathname === '/api/unixtime') {
		ret = {
			unixtime: date.getTime()
		};
	}
	
	if (ret) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(ret));
	}
	else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(portNumber);