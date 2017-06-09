/**
 * Created by Admin on 2017/6/2.
 */

/* add configuration to query object */

/*
var queryObj = new node_mssql.Query({
  host: '192.168.20.135',
  port: 1433,
  username: 'sa',
  password: 'sa',
  db: 'database'
});


var queryObj = new node_mssql.Query({
  user: 'sa',
  password: 'sa3223624',
  server: '10.100.254.96',
  database: 'BJC_Finance_Test',
  port: 1433
});
 */

var mssql = require('mssql');

var db = {};


//执行sql,返回数据.
db.sql = function (sql, callBack) {
  var connection = new mssql.Connection("mssql://sa:sa3223624@10.100.254.96:2001/BJC_Finance_Test", function (err) {
    if (err) {
      console.log(err);
      return;
    }
    var ps = new mssql.PreparedStatement(connection);
    ps.prepare(sql, function (err) {
      if (err){
        console.log(err);
        return;
      }
      ps.execute('', function (err, result) {
        if (err){
          console.log(err);
          return;
        }

        ps.unprepare(function (err) {
          if (err){
            console.log(err);
            callback(err,null);
            return;
          }
          callBack(err, result);
        });
      });
    });
  });
};

module.exports = db;