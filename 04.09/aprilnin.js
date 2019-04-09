var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/reply', function (req,res) {
  res.sendfile("reply.html");
});

app.get('/Lecnine', function (req,res) {
  res.sendfile("LecNine.html");
});

app.get('/array', function (req,res) {
  res.sendfile("array.html");
});
