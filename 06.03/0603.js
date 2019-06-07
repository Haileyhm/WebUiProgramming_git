var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
var bodyParser = require("body-parser")
var request = require("request");

//앞으로 데이터 불러올, query 날릴 database 연결
var connection = mysql.createConnection({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `root`,
  database: `webui` // DB이름을 써줘야 해
});


//브라우저(띄운 html 페이지 )에서 어떤 작동 없이 서버가 켜지면 증권정보를 얻어와서 DB에 저장해줌
// setInterval(function() {
//   console.log("interval")
//   request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:035720|SERVICE_RECENT_ITEM:035720', function(err, response, body) {
//     body = JSON.parse(body)
//
//     console.log(body.result.areas[1].datas[0].nv)
//     console.log(body.result.areas[0].datas[0].nv)
//
//     var price = body.result.areas[1].datas[0].nv
//     console.log(price)
//     var inputQuery = `insert into stockKakao (price) values (${price})`;
//
//     connection.query(inputQuery,
//       function(err, rows, fields) {
//         if (err) throw err;
//       }
//     );
//   })
// }, 2000);


//ajax.html 띄우는 창
app.get('/ajax', function(req, res) {
  res.sendfile("ajax.html")
});



//naver에 request를 보내는 라우터야
app.get('/requestTest', function(req, res) {

  request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:035720|SERVICE_RECENT_ITEM:035720', function(err, response, body) {
    body = JSON.parse(body)
    res.send(body.result.areas[1].datas[0].nv + "")
  })
});

//heidiSQL DB에 정보를 넣음
app.get('/input', function(req, res) {

  var inputQuery = `insert into stockKakao (price) values ("${req.query.price}")`;

  connection.query(inputQuery,
    function(err, rows, fields) {
      res.send(rows)
    }
  )
});


//googlechart.html 띄우는 창
app.get('/googlechart', function(req, res) {
  res.sendfile("googlechart.html")
});

//googlechart연습.html 띄우는 창
app.get('/googlechartPrac', function(req, res) {
  res.sendfile("googlechart연습.html")
});

//주식정보.html 띄우는 창
app.get('/stock', function(req, res) {
  res.sendfile("주식정보.html")
});

//naver에 request를 보내는 라우터
app.get('/request', function(req, res) {

  request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:035720|SERVICE_RECENT_ITEM:035720', function(err, response, body) {
    body = JSON.parse(body)
    res.send(body.result.areas[1].datas[0].nv + "")
  })
});
