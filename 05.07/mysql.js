var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');


//앞으로 데이터 불러올, query 날릴 database 연결
var connection = mysql.createConnection({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `root`,
  database: `webui` //Session 은 WebUI
});

//query 날림
app.get('/select', function(req, res) {
  var selectQuery = `select * from news`;
  connection.query(selectQuery,
function (err, rows, fields) {
  if(err) throw err;
  console.log(rows);
   res.send(rows);
}
)
});
