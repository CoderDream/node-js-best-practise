/**
 * Node.js GET/POST请求
 * 在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。
 * 表单提交到服务器一般都使用 GET/POST 请求。
 * 本章节我们将为大家介绍 Node.js GET/POS T请求。
 * 获取GET请求内容
 * 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
 * node.js 中 url 模块中的 parse 函数提供了这个功能。
 * 在浏览器中访问 http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 然后查看返回结果:
 *
 * 获取 URL 的参数
 * 我们可以使用 url.parse 方法来解析 URL 中的参数，代码如下：
 *
 * Created by Admin on 2017/6/1.
 */
var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);