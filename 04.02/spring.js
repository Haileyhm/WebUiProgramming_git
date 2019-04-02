var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/spring', function (req,res) {
  res.sendfile("spring.html");
});

app.get('/sum', function (req,res) {
  res.sendfile("Lec.html");
});

app.get('/for', function (req,res) {
  res.sendfile("for문찍기.html");
});

app.get('/gugu', function (req,res) {
  res.sendfile("구구단.html");
});

app.get('/all', function (req,res) {
  res.sendfile("스크립트에몽땅.html");
});
