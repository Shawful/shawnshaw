var express = require('express');
// var cors = require('cors');
var server = require('http').createServer(app);
// var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// app.use(cors());

server.listen(80);   

// // app.use(bodyParser());
// // app.use(express.methodOverride());
// app.use('/', express.static());
app.use('/', express.static(__dirname));
// app.use(express.static(path.join(__dirname + '/shawnshaw')));
// app.use(express.static(path.join(__dirname + '')));

server.on('listening',function(){
    console.log('ok, server is running');
});

app.get('/', function (req, res) {
  console.log('GET request made');
  res.sendFile(__dirname + '/index.html');
});

console.log('__dirname: ');
console.log(__dirname);

console.log('landing page: ');
console.log(__dirname + '/index.html');

// app.listen(80, function() {
//     console.log('http://34.244.188.22:80/ Get rolling successfully');
// });


// app.listen('/', function() {
// 	console.log('someone hit the server');
// });


// // app.use(app.router);




//  Sample code
///////////////////////

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.listen(80);