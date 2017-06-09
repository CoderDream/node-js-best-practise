var express = require('express');
var router = express.Router();

/* GET home page. */

var mssql = require('mssql');
//console.log(mssql);

var db = {};
var config = {
  user: 'sa',
  password: 'sa3223624',
  server: '10.100.254.96',
  database: 'BJC_Finance_Test',
  port: 1433
};

//执行sql,返回数据.
db.sql = function (sql, callBack) {
  mssql.connect(config).then(function (pool) {
    pool.request().query(sql).then(function (result) {
      //console.dir(result);
      //console.log('用户总数为 :',result.length);
      debugger;
      callBack && callBack(result.recordset);
    });

  });
};

db.sql("select * from PDRC_TM", function (data) {
  //console.log(arguments[0]);
  console.log(data);
});


router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;
