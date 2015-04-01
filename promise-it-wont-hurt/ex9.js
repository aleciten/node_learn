var http = require('q-io/http');

http.read('http://localhost:1337')
	.then(function (res) {
		var obj = JSON.parse(res);
		console.log(obj);
	})
	.then(null, console.log)
	.done();

