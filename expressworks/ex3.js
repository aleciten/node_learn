var express = require('express');
var path = require('path');
var port = process.argv[2];
var viewDir = process.argv[3];

var app = express();
app.set('view engine', 'jade');
app.set('views', viewDir);
app.get('/home', function (req, res) {
	res.render('index', { date: new Date().toDateString() });
});

app.listen(port);