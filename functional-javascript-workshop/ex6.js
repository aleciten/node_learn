module.exports = function (words) {
	return words.reduce(function (o,w) {
		o[w] = (o[w]||0)+1;
		return o;
	}, {});
};