/**
 * Created by Admin on 2017/6/15.
 */
var fs = require('fs');
fs.readFile('sample01.txt', 'utf8', function (err, data) {
  console.log(data);
  fs.readFile('sample02.txt', 'utf8', function (err, data) {
    console.log(data);
  });
});