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

//var db = {};


//执行sql,返回数据.
mssql.connect("mssql://sa:sa3223624@10.100.254.96:2001/BJC_Finance_Test").then(function() {
  // Query

  new mssql.Request().query('select count(*) from PDRC_TM').then(function(recordset) {
    console.dir('recordset\t' + recordset);
  }).catch(function(err) {
    // ... query error checks
  });

  /*
  // Stored Procedure
  new mssql.Request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name').then(function(recordsets) {
    console.dir(recordsets);
  }).catch(function(err) {
    // ... execute error checks
  });
  */

  /*
  // ES6 Tagged template literals (experimental)
  mssql.query`select * from mytable where id = ${value}`.then(function(recordset) {
    console.dir(recordset);
  }).catch(function(err) {
    // ... query error checks
  });
  */
}).catch(function(err) {
  // ... connect error checks
});

//module.exports = mssql;