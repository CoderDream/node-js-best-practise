/**
 * 函数传递是如何让HTTP服务器工作的
 * 带着这些知识，我们再来看看我们简约而不简单的HTTP服务器：
 * 现在它看上去应该清晰了很多：我们向 createServer 函数传递了一个匿名函数。
 *
 * Created by Admin on 2017/6/1.
 */

var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World 03");
    response.end();
}).listen(8888);
