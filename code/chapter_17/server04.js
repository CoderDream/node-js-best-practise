/**
 * 删除用户
 * 以下代码，我们创建了 RESTful API deleteUser， 用于删除指定用户的详细信息，以下实例中，用户 id 为 2
 *
 * Created by Admin on 2017/6/1.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.get('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
    console.log("显示用户详情，访问地址为 http://127.0.0.1:8081/deleteUser");
})