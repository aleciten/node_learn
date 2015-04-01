var http = require('q-io/http');

http.read('http://localhost:7000')
	.then(function (res) {
		return res.toString();
	})
	.then(function (id) {
		return http.read('http://localhost:7001/'+id);
	})
	.then(function (res) {
		console.log(JSON.parse(res.toString()));
	})
	.then(null, console.error)
	.done();

