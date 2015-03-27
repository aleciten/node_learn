var http = require('http');
var url = process.argv[2];

var runningRequests = 0;
var responses = [];

var customGet = function(url) {
	var requestId = runningRequests;
	runningRequests += 1;
	responses[requestId] = '';

	http.get(url, function(response) {
		var allData = '';

		response.setEncoding('utf8');
		response.on('data', function (data) {
			allData += data;
		});
		response.on('end', function () {
			runningRequests -= 1;
			responses[requestId] = allData;

			if (runningRequests === 0)
				responses.forEach(function (r) { console.log(r); });
		});
	});
};

process
	.argv
	.slice(2)
	.forEach(customGet);