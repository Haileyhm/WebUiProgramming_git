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
  database: `webui` //Session 은 WebUI
});

//뉴스 입력창 띄우기
app.get('/inputNews', function(req, res) {
  res.sendfile("inputNews.html")
})

//뉴스 입력 서버
app.post('/input', function(req, res) {
  console.log("input 불러지나")
  var input1 = req.body.input1;
  var input2 = req.body.input2;

  var inputQuery = `insert into news (title, text) values ("${input1}","${input2}")`;
  console.log(inputQuery)

  connection.query(inputQuery,
    function(err, rows, fields) {
      res.send(rows)
    }
  )

  // connection.query(selectQuery,
  //   function(err, rows, fields) {
  //     if (err) throw err;
  //     res.send(rows);
  //   }
  // )
});

//뉴스 조회 후 출력
app.get('/select', function(req, res) {
  var selectQuery = `select * from news`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  )
});


//전체 삭제 파일 부르는 라우터
app.get('/newsDeleteForm', function(req, res) {
  res.sendfile("newsDelete.html")
})

//전체삭제하는 라우터
app.get('/newsDeleteForm2', function(req, res) {
  console.log("newsDeleteForm 불러지나")
  var inputQuery = `delete from news`;
  connection.query(inputQuery,
    function(err, rows, fields) {
      res.send(rows)

    }
  )
});

//하나만 삭제하는 라우터
app.get('/deleteEachNews', function(req, res) {
  var inputQuery = `delete from news where no=${req.query.no}`;
  connection.query(inputQuery,
    function(err, rows, fields) {
      res.send(rows)
    }
  )
});


app.get('/inputNewsss', function(req, res) {
  res.sendfile("뉴스입력.html")
})

app.get('/printNews', function(req, res) {
  res.sendfile("printNews.html")
})


// app.get('/input', function(req, res) {
//   console.log("input 불러지나")
//   var input1 = req.query.input1;
//   var input2 = req.query.input2;
//
//   var inputQuery = `insert into news (title, text) values ("${input1}","${input2}")`;
//   var selectQuery = `select * from news`;
//   console.log(inputQuery)
//
//   connection.query(inputQuery,
//     function(err, rows, fields) {}
//   )
//
//   connection.query(selectQuery,
//     function(err, rows, fields) {
//       if (err) throw err;
//       res.send(rows);
//     }
//   )
// });
