var q = require('q');

var defer = q.defer();

function parsePromised(jsonString) {
	var d = q.defer();

	try {
		JSON.parse(jsonString);
		d.resolve();
	}
	catch (e) {
		d.reject(e);
	}

	return d.promise;
};

parsePromised(process.argv[2])
	.then(console.log, console.log);