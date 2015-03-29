var repeat = function (func, num) {
	if (num === 0) return;
	func();
	repeat(func, num-1);
};

module.exports = repeat;