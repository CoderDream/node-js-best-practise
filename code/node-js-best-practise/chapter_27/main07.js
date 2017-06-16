/**
 * Created by Admin on 2017/6/15.
 */
var Q = require('q'),
  fs = require('fs');
/**
 *读取文件内容
 *@private
 */
function printFileContent(fileName) {
  //Todo: 这段代码不够简洁。可以使用Q.denodeify来简化
  var defer = Q.defer();
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (!err && data) {
      console.log(data);
      defer.resolve(fileName + ' success ');
    } else {
      defer.reject(fileName + ' fail ');
    }
  })
  return defer.promise;
}

Q.allSettled([printFileContent('nosuchfile.txt'), printFileContent('sample02.txt'), printFileContent('sample03.txt'), printFileContent('sample04.txt')])
  .then(function (results) {
    results.forEach(
      function (result) {
        console.log(result.state);
      }
    );
  });