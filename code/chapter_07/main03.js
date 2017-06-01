/**
 * 管道流
 *  管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
 *
 *  如上面的图片所示，我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，
 *  这样就慢慢的实现了大文件的复制过程。
 *  以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。
 *  设置 input3.txt 文件内容如下：
 *  菜鸟教程官网地址：www.runoob.com
 *  管道流操作实例
 *   创建 main03.js 文件, 代码如下：
 *
 *   代码执行结果如下：
 *    $ node main03.js
 *    程序执行完毕
 *    查看 output3.txt 文件的内容：
 *    $ cat output.txt
 *    菜鸟教程官网地址：www.runoob.com
 *    管道流操作实例

 * Created by Admin on 2017/6/1.
 */
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input3.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output3.txt');

// 管道读写操作
// 读取 input3.txt 文件内容，并将内容写入到 output3.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

