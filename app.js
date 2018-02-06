var express = require('express');
var cors = require('cors');
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(cors());

server.listen(80);   

// app.use(bodyParser());
// app.use(express.methodOverride());
app.use(express.static('shawnshaw'));
// app.use(app.router);