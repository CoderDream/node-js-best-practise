/**
 * Node.js 回调函数
 * 非阻塞代码实例
 *
 * 以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。
 * 第二个实例我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
 * 因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
 *
 * 接下来读 input2.txt 文件，由于文件不存在，执行结果如下所示：
 */
var fs = require("fs");

fs.readFile('input2.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");;