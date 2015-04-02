var dotCode = '.'.charCodeAt(0);
var bangCode = '!'.charCodeAt(0);

process.stdin.on('data', function(buffer) {
	for (var i=0; i < buffer.length; i++)
		if (buffer[i] == dotCode)
			buffer[i] = bangCode;
		
	console.log(buffer);
})