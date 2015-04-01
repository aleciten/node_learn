var q = require('q');

var d1 = q.defer();
var d2 = q.defer();

var all = function (p1,p2) {
	var d = q.defer();
	var left = 2;
	var ret = [];

	var areAllDone = function () {
		left -= 1;
		if (left === 0) {
			d.resolve(ret);
		}
	}
	p1
		.then(function (val) { ret[0] = val; }, d.reject)
		.then(areAllDone);

	p2
		.then(function (val) { ret[1] = val; }, d.reject)
		.then(areAllDone);

	return d.promise;
}

all(d1.promise, d2.promise)
	.then(console.log);

setTimeout(function () {
	d2.resolve('FTW');
	d1.resolve('PROMISES');
}, 300);