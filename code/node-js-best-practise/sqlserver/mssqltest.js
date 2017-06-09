/**
 * https://github.com/patriksimek/node-mssql/blob/1893969195045a250f0fdeeb2de7f30dcf6689ad/README.md
 *
 * Created by Admin on 2017/6/2.
 */
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

/*var config = {
 user: 'sa',
 password: 'sa3223624',
 server: '10.100.254.96',
 database: 'BJC_Finance_Test',
 port:1433,
 options: {
 encrypt: true // Use this if you're on Windows Azure
 },
 pool: {
 min: 0,
 max: 10,
 idleTimeoutMillis: 3000
 }
 };*/

//执行sql,返回数据.
db.sql = function (sql, callBack) {
    mssql.connect(config).then(function (pool) {
        pool.request().query("select count(*) from PDRC_TM").then(function (result) {
            console.dir(result);
            //console.log('用户总数为 :',result.length);
            debugger;
        });

    });
};
db.sql();