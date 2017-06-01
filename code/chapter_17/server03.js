/**
 * 显示用户详情
 *  以下代码，我们创建了 RESTful API :id（用户id）， 用于读取指定用户的详细信息，server.js 文件代码如下所示：
 *  http://127.0.0.1:8081/2
 *
 * Created by Admin on 2017/6/1.
 */
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
    console.log("显示用户详情，访问地址为 http://127.0.0.1:8081/2");
})