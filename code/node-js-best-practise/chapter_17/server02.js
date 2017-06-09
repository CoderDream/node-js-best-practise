/**
 *  http://127.0.0.1:8081/addUser
 *
 * Created by Admin on 2017/6/1.
 */
var express = require('express');
var app = express();
var fs = require("fs");

//添加的新用户数据
var user = {
  "user4": {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 4
  }
}

app.get('/addUser', function (req, res) {
  // 读取已存在的数据
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log("####");
   data = JSON.parse(data);
   data["user4"] = user["user4"];
    console.log(data);
    //res.end(JSON.stringify(data));
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(JSON.stringify(data));
    //res.end(data);
  });
})

app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(data);
    // http://blog.csdn.net/blueheart20/article/details/45174399
    // 默认为 text/plain ：纯文本格式   ，不能用json方式访问，如果需要返回json格式，需要设置
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(data);
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})





