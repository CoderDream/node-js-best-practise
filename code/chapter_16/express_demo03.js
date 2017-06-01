/**
 * http://127.0.0.1:8081/list_user
 *在浏览器中访问 http://127.0.0.1:8081/images/logo.png（本实例采用了菜鸟教程的logo），结果如下图所示：
 * Created by Admin on 2017/6/1.
 */
//express_demo.js 文件
var express = require('express');

var app = express();

app.use(express.static('public'));

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})