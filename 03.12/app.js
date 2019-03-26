
var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function (req,res) {
  res.send("main page");
});

app.get('/test', function (req,res) {
  res.send("hello world");
});

app.get('/file', function (req,res) {
  res.sendfile("hello.html");
});

app.get('/pic', function (req,res) {
  res.sendfile("SQL실습-app.js 잘 구동하는지 확인.jpg");
});

app.get('/file2', function (req,res) {
  res.sendfile("rawfile");
});

app.get('/yo', function (req,res) {
  res.sendfile("비요뜨.jpg");
});

console.log("running");
