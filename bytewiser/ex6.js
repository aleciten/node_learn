process.stdin.on('data', function (buff) {
	console.log(JSON.stringify(new Uint8Array(buff)));
})