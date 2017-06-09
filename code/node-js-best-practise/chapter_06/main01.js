/**
 * Created by Admin on 2017/6/1.
 */
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);