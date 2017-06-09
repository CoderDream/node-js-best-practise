/**
 * Created by Admin on 2017/6/5.
 */
var mssql = require('mssql');
//console.log(mssql);

var db = {};


//执行sql,返回数据.
db.query = function (config, sql, callBack) {
  mssql.connect(config).then(function (pool) {
    pool.request().query(sql).then(function (result) {
      console.dir(result);
      //console.log('用户总数为 :',result.length);
      // debugger;
      pool.close();
      callBack && callBack(result.recordset);
    });
  });
};

//执行sql,返回数据.
db.queryWithWhere = function (sql, where, callBack) {
  mssql.connect(config).then(function (pool) {
    pool.request().query(sql).then(function (result) {
      console.dir(result);
      //console.log('用户总数为 :',result.length);
      // debugger;
      callBack && callBack(result.recordset);
    });
  });
};

module.exports = db;