var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function() {
	var currentGenre;

	var collect = through(function (line, encoding, next) {
		if (line.length === 0) return next();
		var obj = JSON.parse(line);
		
		if (obj.type === 'genre') {
			if (currentGenre) {
				this.push(JSON.stringify(currentGenre)+'\n');
			}

			currentGenre = {
				name: obj.name,
				books: []
			};
		}
		else {
			currentGenre.books.push(obj.name);
		}
		
		next();
	}, function (done) {
		this.push(JSON.stringify(currentGenre)+'\n');
		done();
	});

	return combine(split(), collect, zlib.createGzip());
	
};