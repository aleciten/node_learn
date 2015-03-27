var fs = require('fs');
var fName = process.argv[2];

var contents = fs.readFile(fName, function(err, data) {
	console.log(data.toString().split('\n').length - 1);	
});
