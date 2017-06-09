/**
 * 用这样的代码也可以达到同样的目的：
 *
 * Created by Admin on 2017/6/1.
 */
var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World 04");
    response.end();
}

http.createServer(onRequest).listen(8888);