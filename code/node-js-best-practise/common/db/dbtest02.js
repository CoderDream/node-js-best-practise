/**
 * Created by Admin on 2017/6/5.
 */
var db = require('./db02.js');

db.query('select * from PDRC_TM', function (data) {
  //console.log(arguments[0]);
  console.log(data);
});