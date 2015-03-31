var express = require('express');
var stylus = require('stylus');
var port = process.argv[2];
var staticPath = process.argv[3];

var app = express();
app.use(stylus.middleware(staticPath));
app.use(express.static(staticPath));

app.listen(port);