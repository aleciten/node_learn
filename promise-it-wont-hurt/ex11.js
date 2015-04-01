var http = require('q-io/http');
var _ = require('lodash');

http.read('http://localhost:7000')
	.then(_.flow(String.prototype.concat.bind('http://localhost:7001/'), http.read))
	.then(_.flow(JSON.parse, console.log))
	.then(null, console.error)
	.done();

