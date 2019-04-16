var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/sixteen', function (req,res) {
  res.sendfile("이차원배열.html");
});

app.get('/obj', function (req,res) {
  res.sendfile("객체.html");
});

app.get('/obj2', function (req,res) {
  res.sendfile("객체Quiz.html");
});

app.get('/objprac', function (req,res) {
  res.sendfile("객체 연습.html");
});
