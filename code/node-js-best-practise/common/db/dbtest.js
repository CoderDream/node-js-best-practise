/**
 * Created by Admin on 2017/6/5.
 */

var db = require('./db.js');

var config = {
  user: 'sa',
  password: 'sa3223624',
  server: '10.100.254.96',
  database: 'BJC_Finance_Test',
  port: 1433
};

db.query(config, "select * from PDRC_TM", function (data) {
  //console.log(arguments[0]);
  console.log(data);
});