module.exports = function duckCount () {
	return Array.prototype
		.slice.call(arguments, 0)
		.reduce(function (count, obj) {
			return (Object.prototype.hasOwnProperty.call(obj, 'quack') 
					? count + 1 
					: count);
		}, 0);
};