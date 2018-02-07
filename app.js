var express = require('express');
var app = express();
 
app.listen(80);

app.use('/', express.static(__dirname));

app.get('/', function (req, res) {
  console.log('GET request made');
  // res.send('hello world');
  res.sendFile(__dirname + '/index.html');
});


// Dispaly on initialize
console.log('__dirname: ');
console.log(__dirname);

console.log('landing page: ');
console.log(__dirname + '/index.html');
