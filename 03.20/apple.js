var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/writing',function (req,res) {
  res.sendfile("글쓰기.html");
});

app.get('/table',function (req,res) {
  res.sendfile("table.html");
});

app.get('/resume',function (req,res) {
  res.sendfile("resume.html");
});

app.get('/css',function (req,res) {
  res.sendfile("cssLec.html");
});

app.get('/css2',function (req,res) {
  res.sendfile("CssLec2.html");
});
