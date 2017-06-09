/**
 * Created by Admin on 2017/6/1.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);