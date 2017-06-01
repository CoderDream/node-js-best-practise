/**
 * http://127.0.0.1:8081/list_user
 *在浏览器中访问 http://127.0.0.1:8081/images/logo.png（本实例采用了菜鸟教程的logo），结果如下图所示：
 * Created by Admin on 2017/6/1.
 */
//express_demo.js 文件
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.get('/index02.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index02.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})





