var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
var bodyParser = require("body-parser")
var request = require("request");




//김해리 기말고사.html 띄우는 창
app.get('/final', function(req, res) {
  res.sendfile("김해리 기말고사.html")
});


//naver에 request를 보내는 라우터
app.get('/requestTest', function(req, res) {

  request.get(`https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:${req.query.stockCode}|SERVICE_RECENT_ITEM:${req.query.stockCode}`, function(err, response, body) {
    body = JSON.parse(body)
    res.send(body.result.areas[1].datas[0].nv + "")
  })
});
