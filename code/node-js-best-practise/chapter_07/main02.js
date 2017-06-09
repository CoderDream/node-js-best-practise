/**
 * 写入流
 *  创建 main.js 文件, 代码如下：
 *   以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：
 *    $ node main.js
 程序执行完毕
 写入完成。
 查看 output.txt 文件的内容：
 $ cat output.txt
 菜鸟教程官网地址：www.runoob.com

 * Created by Admin on 2017/6/1.
 */
var fs = require("fs");

var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function () {
    console.log("写入完成。");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");
