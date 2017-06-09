/**
 * Created by Admin on 2017/6/6.
 */
var utils = new require('./utils.js');
this.TestForUtils = {
  'TestgetGuid': function (test) {
    var guid = utils.utils.getGuid();
    test.ok(!!guid, 'getGuid should not be null.');
    test.done();
  },
  'TestWritelog': function (test) {
    var flag = false;
    utils.utils.writeLog("test message");
    flag = true;
    test.ok(flag, 'writeLog');
    test.done();
  },
  'TestStartWithWords': function (test) {
    var name = "ad_123";
    test.ok(utils.utils.startWith(name, "ad_"), "startwith method should be ok");
    test.done();
  }
};