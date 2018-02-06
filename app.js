var express = require('express');
var app = express();
var cors = require('cors');
var server = require('http').createServer(app);

app.use(cors());

server.listen(80);   

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname + '~/shawnshaw')));
app.use(app.router);