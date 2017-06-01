/**
 * 缓冲区合并
 * 语法
 * Node 缓冲区合并的语法如下所示：
 * Buffer.concat(list[, totalLength])
 * 参数
 * 参数描述如下：
 * list - 用于合并的 Buffer 对象数组列表。
 * totalLength - 指定合并后Buffer对象的总长度。
 * 返回值
 * 返回一个多个成员合并的新 Buffer 对象。
 *
 * Created by Admin on 2017/6/1.
 */
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());