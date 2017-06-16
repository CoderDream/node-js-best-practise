/**
 * Created by Admin on 2017/6/15.
 */
var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function (err, data) {
  console.log(data);
});