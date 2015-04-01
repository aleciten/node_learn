var q = require('q');

var defer = q.defer();

defer.promise.then(function (val) {
	console.log(val);
});

setTimeout(function () {
	defer.resolve('RESOLVED!')
}, 300);