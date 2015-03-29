var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
	var cp = spawn(cmd, args);
	return duplexer(cp.stdin, cp.stdout);
};