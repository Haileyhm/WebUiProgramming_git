var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/getItemServer', function(req, res) {
  res.sendfile("함수.html");
});


app.get('/getItem', function(req, res) {
  var userInputPrice = req.query.price;
  var responseText = "구매불가";

  var itemPrice = [{
      itemName: 'item1',
      price: 1000
    },
    {
      itemName: 'item2',
      price: 5000
    },
    {
      itemName: 'item3',
      price: 10000
    },
    {
      itemName: 'item4',
      price: 30000
    },
    {
      itemName: 'item5',
      price: 100000
    },
    {
      itemName: 'item6',
      price: 500000
    }
  ];

  for (var i = 0; i < itemPrice.length; i++) {
    if (itemPrice[i].price <= userInputPrice) {
      responseText = itemPrice[i].itemName;
    }
  }
  res.send(responseText); //값을 보내줘야지
});


app.get('/selectCar', function(req, res) {
  res.sendfile("자동차구매.html");
});


app.get('/getCarPrice', function(req, res) {
  var carBrand = Number(req.query.carBrand);
  var carColor = Number(req.query.carColor);
  var totalPrice = carBrand + carColor;
  res.send(totalPrice + "만원");
});


app.get('/getCarPrice2', function(req, res) {
  var carBrand2 = Number(req.query.carBrand2);
  var carColor2 = Number(req.query.carColor2);

  var carBrandArray = [2100, 1300, 1500, 3500, 3200];
  var carColorArray = [100, 120, 200, 130, 80];

  var totalPrice = carBrandArray[carBrand2] + carColorArray[carColor2];
  res.send((carBrandArray[carBrand2] + carColorArray[carColor2]) + "만원");
//response 를 순수 숫자로 보내면 status code 로 인식해서 에러가 날 수 있음
//왜 숫자 더해진 걸로 나오나ㅏ아아아아_



});

app.get('/funcPrac', function(req, res) {
  res.sendfile("함수연습.html");
});
