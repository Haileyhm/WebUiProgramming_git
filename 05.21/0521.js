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



//사용자 조회창 띄우기
app.get('/read', function(req, res) {
  res.sendfile("read.html")
})


//사용자 조회
app.get('/selectCitizen', function(req, res) {
  var selectQuery = `SELECT * FROM citizenlist where name = '${req.query.name}' and region = '${req.query.region}' and birthdate = '${req.query.birthdate}'`;
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


//업데이트 된 페이지로 이동하는 라우터
app.get('/moveToUpdate', function(req, res) {
  res.sendfile("print.html")
});


//업데이트 초기값 출력
app.get('/selecttobeupdate', function(req, res) {
  var selectQuery = `select * from citizenlist where userid = ${req.query.userid}`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  )
});







// //하나만 삭제하는 라우터
// app.get('/deleteBalance', function(req, res) {
//   var inputQuery = `delete balance from citizenlist where no=${req.query.no}`;
//   connection.query(inputQuery,
//     function(err, rows, fields) {
//       res.send(rows)
//     }
//   )
// });


// //수정하는 라우터
//
// app.get('/inputNewsss', function(req, res) {
//   res.sendfile("뉴스입력.html")
// })
//
// app.get('/printNews', function(req, res) {
//   res.sendfile("printNews.html")
// })
