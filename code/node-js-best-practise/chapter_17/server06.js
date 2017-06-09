/**
 * Created by Admin on 2017/6/9.
 */
/**
 * http://127.0.0.1:8081/listUsers
 *
 * Created by Admin on 2017/6/1.
 */
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var fs = require("fs");

var router = express.Router();

router.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(data);
    // http://blog.csdn.net/blueheart20/article/details/45174399
    // 默认为 text/plain ：纯文本格式   ，不能用json方式访问，如果需要返回json格式，需要设置
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.end(data);
  });
})

app.use('/', router);
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})