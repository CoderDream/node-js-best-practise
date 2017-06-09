/**
 * Created by Admin on 2017/6/5.
 */

var sql = require('./dbHelper05.js');
sql.queryViaStream('select count(*) from PDRC_TM', function (error,recordsets,affected) {
  //error:错误消息 recordsets:查询的结果 affected:
  console.log('error' + error);
  console.log('recordsets' + recordsets);
  console.log('affected' + affected);
});