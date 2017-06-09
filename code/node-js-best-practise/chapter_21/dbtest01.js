/**
 * Created by Admin on 2017/6/5.
 */

var db=require('./dbHelper.js');
var table = 'PDRC_TM';
db.list('', table, function (data) {
  console.log(data);
},'');