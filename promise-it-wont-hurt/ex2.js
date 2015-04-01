var q = require('q');

var defer = q.defer();

defer.promise.then(function () {},function (err) {
	console.log(err.message);
});

setTimeout(function () {
	defer.reject(new Error('REJECTED!'));
}, 300);