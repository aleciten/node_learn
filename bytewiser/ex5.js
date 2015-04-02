var fs = require('fs');
var stream = require('stream');
var util = require('util');

var CollectorStream = function () {
	stream.Transform.call(this);
	this.chunks = [];
}
util.inherits(CollectorStream, stream.Transform);
CollectorStream.prototype._transform = function (chunk, encoding, callback) {
	this.chunks.push(chunk);
	callback();
}
CollectorStream.prototype._flush = function (callback) {
	var newBuffer = Buffer.concat(this.chunks);
	console.log(newBuffer);
	this.push(newBuffer);
	callback();
}

process.stdin.pipe(new CollectorStream());//.pipe(process.stdout);