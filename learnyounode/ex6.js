var filterPathFiles = require('./ex6.filterPathFiles')
var argPath = process.argv[2];
var ext = process.argv[3];

filterPathFiles(argPath, ext, function(err, list) {
	if (err) return console.log('Some error', err);
	
	list.forEach(function(fn){ 
		console.log(fn); 
	});
});
