var reduce = function (arr, fn, init) {
	if (arr.length <= 0) return init;
	init = fn(init, arr[0]);
	return reduce(arr.splice(1), fn, init);
};

module.exports = reduce;