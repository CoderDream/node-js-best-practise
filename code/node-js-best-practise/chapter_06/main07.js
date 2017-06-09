/**
 * 缓冲区裁剪
 * Node 缓冲区裁剪语法如下所示：
 * buf.slice([start[, end]])
 * 参数
 * 参数描述如下：
 * start - 数字, 可选, 默认: 0
 * end - 数字, 可选, 默认: buffer.length
 * 返回值
 * 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
 * 执行以上代码，输出结果为：
 buffer2 content: ru
 *
 * Created by Admin on 2017/6/1.
 */
var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
