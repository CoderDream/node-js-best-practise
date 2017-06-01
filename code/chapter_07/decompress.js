/**
 * 接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：
 * Created by Admin on 2017/6/1.
 */
var fs = require("fs");

var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");
