/**
 * Created by Admin on 2017/6/2.
 */

var node_mssql = require('mssql');
/* add configuration to query object */

/*
var queryObj = new node_mssql.Query({
  host: '192.168.20.135',
  port: 1433,
  username: 'sa',
  password: 'sa',
  db: 'database'
});
*/

var queryObj = new node_mssql.Query({
  user: 'sa',
  password: 'sa3223624',
  server: '10.100.254.96',
  database: 'BJC_Finance_Test',
  port: 1433
});


var insert = function (data, insertTable, callback, res) {
  queryObj.table(insertTable);
  queryObj.data(data);
  queryObj.insert(function (results) {
    //success
    callback(res, "添加成功！");
  }, function (err, sql) {
    if (err) {//error
      callback(res, "添加失败！");
      console.log(err);
    }
  });
};
var list = function (whereSql, table, callback, res) {
  queryObj.table(table);
  queryObj.where(whereSql);
  queryObj.select(function (data) {
    //success
    callback(data, res);
  }, function (err, sql) {
    if (err) { //error
      console.log(err);
    }
  });
};
var update = function (data, option, upTable, callback, res) {
  queryObj.table(upTable);
  queryObj.data(data);
  queryObj.where(option);
  queryObj.update(function (results) {
    //  success callback
    callback(res, "修改成功！");
  }, function (err, sql) {
    if (err) {
      callback(res, "修改失败！");
      console.log(err);
    }
  });
};
exports.insert = insert;
exports.list = list;
exports.update = update;