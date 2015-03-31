module.exports = function spy (obj, fnName) {
	var ret = { count: 0 };

	var originalFn = obj[fnName];
	obj[fnName] = function () {
		ret.count += 1;
		return originalFn.apply(this, arguments);
	};

	return ret;
};