var fs = require('fs');

var newLineCode = '\n'.charCodeAt(0);
fs.readFile(process.argv[2], function (err, buffer) {
	var chunkStart = 0;
	for (var i = 0; i < buffer.length; i++) {
		if (buffer[i] === newLineCode || i === buffer.length-1) {
			console.log(buffer.slice(chunkStart, i));
			i+=1;
			chunkStart = i;
		}
	}
});