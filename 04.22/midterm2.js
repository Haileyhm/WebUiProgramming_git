var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/practice', function (req,res) {
  res.sendfile("subject.html");
});

app.get('/prac2', function (req,res) {
  res.sendfile("midterm2.html");
});
