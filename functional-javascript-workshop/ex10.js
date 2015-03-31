module.exports = function logger (ns) {
	return console.log.bind(console, ns);
};