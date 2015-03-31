module.exports = function logger (ns) {
	return function () {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(ns);
		console.log.apply(console, args);
	};
};