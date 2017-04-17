var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1');
res.header("Content-Type", "application/json;charset=utf-8");
next();
});


app.get('/data',function (req,res) {
    res.send({"name":"john","age":12});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});