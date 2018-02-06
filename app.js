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
app.use(express.static(path.join(__dirname, '/')));

console.log('someone hit the server');
// // app.use(app.router);




//  Sample code
///////////////////////

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.listen(80);