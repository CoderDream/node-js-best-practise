/**
 * 缓冲区长度
 * 语法
 * Node 缓冲区长度计算语法如下所示：
 * buf.length;
 * 返回值
 * 返回 Buffer 对象所占据的内存长度。
 * 执行以上代码，输出结果为：
 * buffer length: 14
 *
 * Created by Admin on 2017/6/1.
 */
var buffer = new Buffer('www.runoob.com');

//  缓冲区长度
console.log("buffer length: " + buffer.length);
