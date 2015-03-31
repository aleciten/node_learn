var express = require('express');
var bodyParser = require('body-parser')
var port = process.argv[2];

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/form', function (req, res) {
	if (req.body.str) {
		return res.end(req.body.str.split('').reverse().join(''));
	} 
	else {
		return res.end();
	}
});

app.listen(port);