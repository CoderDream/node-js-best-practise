/**
 * Created by Admin on 2017/6/5.
 */

var db = require('./dbHelper02.js');
var sql = 'select count(*) from PDRC_TM';
db.sql(sql);