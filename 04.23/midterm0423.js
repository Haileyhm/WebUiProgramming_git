var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/value', function (req,res) {
  res.sendfile("Value값 누적하기.html");
});

app.get('/btn', function (req,res) {
  res.sendfile("도입버튼 만들기.html");
});

app.get('/cal', function (req,res) {
  res.sendfile("계산기.html");
});

app.get('/mid', function (req,res) {
  res.sendfile("김해리_중간고사.html");
});
