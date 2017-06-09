/**
 *
 *
 * Created by Admin on 2017/6/2.
 */
//var mssql = require('mssql');
//console.log("aaa");

//var db = {};
var config = {
    user: 'sa',
    password: 'sa3223624',
    server: '10.100.254.96',
    database: 'BJC_Finance_Test',
    port: 1433
};

var sql = require('mssql');

sql.connect("mssql://sa:sa3223624@10.100.254.96/BJC_Finance_Test").then(function() {
    // Query

    new sql.Request().query('select count(*) from PDRC_TM').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks
    });

    // Stored Procedure
/*
    new sql.Request()
        .input('input_parameter', sql.Int, value)
        .output('output_parameter', sql.VarChar(50))
        .execute('procedure_name').then(function(recordsets) {
        console.dir(recordsets);
    }).catch(function(err) {
        // ... execute error checks
    });

    // ES6 Tagged template literals (experimental)

    sql.query`select * from mytable where id = ${value}`.then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks
    }); */
}).catch(function(err) {
    // ... connect error checks
});