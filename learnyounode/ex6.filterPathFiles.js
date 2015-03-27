var fs = require('fs');
var extname = require('path').extname;

filterPathFiles = function (path, ext, callback) {
	fs.readdir(path, function(err, list) {
		if (err) return callback(err);

		callback(null, list.filter(function(fn){ 
			return extname(fn) === '.'+ext;
		}));
	});
};

module.exports = filterPathFiles;