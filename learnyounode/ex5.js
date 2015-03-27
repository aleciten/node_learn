var fs = require('fs');
var path = require('path');
var argPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(argPath, function(err, list) {
	list.forEach(function(fn){ 
		if (path.extname(fn) === '.'+ext)
			console.log(fn); 
	});
});
