var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];

var app = express();
app.get('/books', function (req, res) {
	var contents = fs.readFileSync(fileName);
	res.json(JSON.parse(contents));
})

app.listen(port);