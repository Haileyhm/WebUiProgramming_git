var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/jquery', function(req, res) {
  res.sendfile("jquery실습.html");
});

app.get('/test2', function(req, res) {
  console.log(req.query.a, req.query.b)
  sendfile("jquery실습2.html");
});

app.get('/test2', function(req, res) {
  console.log(req.query.a, req.query.b)
  res.sendfile("jquery실습2.html");
});

app.get('/sum', function(req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  console.log(num1, num2, num3)
  res.send(`세 수의 곱은 ${num1 * num2 * num3}`);
});

app.get('/buy', function(req, res) {
  var inputPrice = Number(req.query.inputPrice);

  var priceTable = [{
      name: "item1",
      price: 1000
    },
    {
      name: "item2",
      price: 5000
    },
    {
      name: "item3",
      price: 10000
    },
    {
      name: "item4",
      price: 30000
    },
    {
      name: "item5",
      price: 50000
    },
    {
      name: "item6",
      price: 100000
    },
    {
      name: "item7",
      price: 500000
    },
  ];

  // for (var i = 0; i < priceTable.length; i++) {
  //   if (priceTable[0].price > inputPrice) {
  //     res.send('구매불가')
  //   } else if (priceTable[i].price > inputPrice) {
  //     res.send(priceTable[i - 1].name)
  //   } else if (priceTable[6].price <= inputPrice){
  //     res.send(priceTable[6].name )
  //   }
  // //   // else if(priceTable[priceTable.length-1].price <= inpuPrice){
  // //   // res.send(priceTable[priceTable.length-1)].name)
  // //   // }
  //  }

  var resText = "구매불가"
  for (var i = 0; i < priceTable.length; i++) {
    // if (priceTable[0].price > inputPrice) {
    // res.send('구매불가')
    // }
    if (priceTable[i].price <= inputPrice) {
      resText = priceTable[i].name;
      // res.send(priceTable[i].name)
    }
  }
  res.send(resText); //밖으로 나와서 찍으면 i 끝까지 돌고 찍히는구나~~~~~~~~~~~~~~~~~~~~~~~~~

});

app.get('/buy_main', function(req, res) {
  res.sendfile("jquery예제_물품구입.html");
});

app.get('/sumform', function(req, res) {
  res.sendfile("jquery_request.html");
});
