var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
var bodyParser = require("body-parser"); //post 방식으로 request 처리하려면 있어야 함

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


//앞으로 데이터 불러올, query 날릴 database 연결
var connection = mysql.createConnection({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `root`,
  database: `Jinangun` //Session 은 Jinangun - DB이름을 써줘야 해
});


//메인 페이지 띄우기
app.get('/jinan', function(req, res) {
  res.sendfile("main.html")
})


//사용자 조회창 띄우기
app.get('/read', function(req, res) {
  res.sendfile("citizen.html")
})


//사용자 조회
app.get('/selectCitizen', function(req, res) {
  var selectQuery = `SELECT * FROM citizenlist where name = '${req.query.name}' and phonenumber = '${req.query.phonenumber}' and birthdate = '${req.query.birthdate}'`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  )
});


//미용실 조회창 띄우기
app.get('/shop', function(req, res) {
  res.sendfile("shop.html")
})

//미용실 서비스 횟수 조회
app.get('/selectshop', function(req, res) {
  var selectQuery = `SELECT * FROM shoplist where owner = '${req.query.owner}' and phonenumber = '${req.query.phonenumber}' and shopid = '${req.query.shopid}'`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  )
});


// 사용가능 횟수창 띄우기
app.get('/print', function(req, res) {
  res.sendfile("print.html")
})


//업데이트하는 라우터
app.get('/updateBalance', function(req, res) {
  var inputQuery = `update citizenlist set balance = "${req.query.balance}" where userid="${req.query.userid}"`;
  console.log(inputQuery)
  connection.query(inputQuery,
    function(err, rows, fields) {
      res.send(rows)
    }
  )
});









// //업데이트 된 페이지로 이동하는 라우터
// app.get('/moveToUpdate', function(req, res) {
//   res.sendfile("print.html")
// });


// //업데이트 초기값 출력
// app.get('/selecttobeupdate', function(req, res) {
//   var selectQuery = `select * from citizenlist where userid = ${req.query.userid}`;
//   connection.query(selectQuery,
//     function(err, rows, fields) {
//       if (err) throw err;
//       res.send(rows);
//     }
//   )
// });
