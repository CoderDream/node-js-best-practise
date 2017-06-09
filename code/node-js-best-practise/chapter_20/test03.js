/**
 * http://www.runoob.com/nodejs/nodejs-mongodb.html
 * # 数据库为 runoob
 * 更新数据
 * 我们也可以对数据库的数据进行修改，以下实例将 name 为 "菜鸟教程" 的 url 改为 https://www.runoob.com：
 *
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var updateData = function (db, callback) {
  //连接到表
  var collection = db.collection('site');
  //更新数据
  var whereStr = {"name": '菜鸟教程'};
  var updateStr = {$set: {"url": "https://www.runoob.com"}};
  collection.update(whereStr, updateStr, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
  console.log("连接成功！");
  updateData(db, function (result) {
    console.log(result);
    db.close();
  });
});