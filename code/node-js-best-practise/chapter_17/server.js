/**
 * Created by Admin on 2017/6/9.
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
});

app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(data);
    // http://blog.csdn.net/blueheart20/article/details/45174399
    // 默认为 text/plain ：纯文本格式   ，不能用json方式访问，如果需要返回json格式，需要设置
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(data);
  });
});


// http://127.0.0.1:8081/2
app.get('/:id', function (req, res) {
  console.log("# get :id #");
  // 首先我们读取已存在的用户
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    var user = data["user" + req.params.id]
    console.log(user);
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(JSON.stringify(user));
  });
});

var id = 2;
/*
// 不能这样写，否则会把deleteUser作为id，访问上面的方法
app.get('/deleteUser', function (req, res) {
  console.log("# get deleteUser #");
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    delete data["user" + id];

    console.log(data);
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(JSON.stringify(data));
  });
});
 */

// DELETE 请求
app.delete('/deleteUser', function (req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    delete data["user" + id];
    console.log(data);
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(JSON.stringify(data));
  });
});

// DELETE请求
app.delete('/:id', function (req, res) {
  console.log("#0");
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    delete data["user" + req.params.id];
    console.log(data);
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(JSON.stringify(data));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});





