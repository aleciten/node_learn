var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function (counter) {
	var counts = {};
	var ws = through.obj(function (obj, encoding, next) {
		counts[obj.country] = (counts[obj.country]||0) + 1;
		next();
	}, function(done) {
		counter.setCounts(counts);
		done();
	});
	
	return duplexer(ws, counter);
};