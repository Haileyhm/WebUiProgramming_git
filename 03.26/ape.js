var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/style', function (req,res) {
  res.sendfile("CssLec2.html");
});

app.get('/js', function (req,res) {
  res.sendfile("js.html");
});

app.get('/for', function (req,res) {
  res.sendfile("for문.html");
});



console.log("aa");
