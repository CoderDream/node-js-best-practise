var db = require('./db');
db.sql('select * from T_users',function(err,result){
	if (err) {
		console.log(err);
		return;
	}
	console.log('用户总数为 :',result.length);
});