/**
 * http://www.runoob.com/nodejs/node-js-get-post.html
 * Node.js GET/POST请求
 * 在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。
 * 表单提交到服务器一般都使用 GET/POST 请求。
 * 本章节我们将为大家介绍 Node.js GET/POS T请求。
 * 获取GET请求内容
 * 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
 * node.js 中 url 模块中的 parse 函数提供了这个功能。
 * 在浏览器中访问 http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 然后查看返回结果:
 *
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);