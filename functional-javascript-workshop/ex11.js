module.exports = function (arr, fn) {
	return arr.reduce(function (newArr, item) {
		newArr.push(fn(item));
		return newArr;
	}, []);
};