/**
 * 将 Buffer 转换为 JSON 对象
 *
 * Created by Admin on 2017/6/1.
 */
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);