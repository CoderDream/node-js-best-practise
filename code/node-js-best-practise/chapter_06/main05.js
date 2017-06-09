/**
 * 缓冲区比较
 * 语法
 * Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
 * buf.compare(otherBuffer);
 * 参数
 * 参数描述如下：
 * otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
 * 返回值
 * 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
 * 执行以上代码，输出结果为：
 * ABC在ABCD之前
 *
 * Created by Admin on 2017/6/1.
 */
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
