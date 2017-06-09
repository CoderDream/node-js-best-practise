/**
 * Created by Admin on 2017/6/5.
 */
var sql = require('mssql');

var config = {
  user: 'sa',
  password: 'sa3223624',
  server: '10.100.254.96',
  database: 'BJC_Finance_Test'
}

var connection1 = new sql.ConnectionPool(config, function(err) {
  // ... error checks

  // Query

  var request = new sql.Request(connection1); // or: var request = connection1.request();
  request.query('select 1 as number', function(err, recordset) {
    // ... error checks

    console.dir(recordset);
  });

});

connection1.on('error', function(err) {
  // ... error handler
});

var connection2 = new sql.ConnectionPool(config, function(err) {
  // ... error checks

  // Stored Procedure

  var request = new sql.Request(connection2); // or: var request = connection2.request();
  request.input('input_parameter', sql.Int, 10);
  request.output('output_parameter', sql.VarChar(50));
  request.execute('procedure_name', function(err, recordsets, returnValue) {
    // ... error checks

    console.dir(recordsets);
  });
});

connection2.on('error', function(err) {
  // ... error handler
});