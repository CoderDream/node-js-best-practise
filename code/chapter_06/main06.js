/**
 * 拷贝缓冲区
 * 语法
 * Node 缓冲区拷贝语法如下所示：
 * buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
 * 参数
 * 参数描述如下：
 * targetBuffer - 要拷贝的 Buffer 对象。
 * targetStart - 数字, 可选, 默认: 0
 * sourceStart - 数字, 可选, 默认: 0
 * sourceEnd - 数字, 可选, 默认: buffer.length
 * 返回值
 * 没有返回值。
 * 执行以上代码，输出结果为：
 * buffer2 content: ABC
 *
 * Created by Admin on 2017/6/1.
 */
var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
