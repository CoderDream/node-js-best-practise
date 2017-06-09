/**
 * Nodejs之mssql模块的封装
 * http://www.cnblogs.com/williamwsj/p/6195818.html
 *
 * Created by Admin on 2017/6/2.
 */
var config = require("config");
var sql = require("mssql");
var Q = require("q");
var util=require('util');


function _Base() {
}

_Base.prototype._connect = function (callback) {
  var defer = Q.defer();
  var connection = new sql.Connection({
    user: config.mssql.user,
    password: config.mssql.password,
    server: config.mssql.host,
    database: config.mssql.dbname
  });
  defer.resolve(connection);
  return defer.promise.nodeify(callback);
};


_Base.prototype._query = function (sqlstr) {
  if (!sqlstr) {
    var err = new Error("sql is empty!");
    var defer = Q.defer();
    return defer.reject(err);
  }

  //是否打印SQL语句
  if (config.debug) {
    console.log('[SQL:]', sqlstr, '[:SQL]');
  }

  return this._connect().then(function (connection) {
    return connection.connect().then(function () {
      var request = new sql.Request(connection);
      return request.query(sqlstr).then(function (recordset) {
        connection.close();
        return recordset;
      }).catch(function (err) {
        connection.close();
        return err;
      });
    });
  });
};


module.exports = _Base;