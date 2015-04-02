function askFoo () {
	return new Promise(function (resolve, reject) {
		resolve('foo');
	});
}

function run (generator) {
	var it = generator(go);

	function go (err, result) {
		it.next(result).value.then(function (v) {
			return it.next(v);
		});
	}

	go();
}

run(function* () {
	// improve: errors?
	var foo = yield askFoo();
	console.log(foo);
});