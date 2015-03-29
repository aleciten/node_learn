var reduce = function (arr, fn, init) {
	var inner = function (index, aggregate) {
		if (index >= arr.length) return aggregate;
		aggregate = fn(aggregate, arr[index], index, arr);
		return inner(index+1, aggregate);
	}

	return inner(0, init);
};

module.exports = reduce;