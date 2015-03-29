var through = require('through2');
var split = require('split');
var count = 0;

var transform = through(function (buffer, encoding, next) {
	var ret;
	if (count % 2 === 0) ret = buffer.toString().toLowerCase();
	else ret = buffer.toString().toUpperCase();

	++count;
	this.push(ret+'\n');
	next();
});

process
	.stdin
	.pipe(split())
	.pipe(transform)
	.pipe(process.stdout);