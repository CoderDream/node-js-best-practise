/**
 *Node.js的UnitTest单元测试
 * http://www.cnblogs.com/wintersun/p/3773684.html
 * Created by Admin on 2017/6/6.
 */
var fs = require('fs');
var global = require('./global.js');
var utils = {
  startWith: function (s1, s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
      return false;
    if (s1.substr(0, s.length) == s)
      return true;
    else
      return false;
    return true;
  },
  /* Generate GUID */
  getGuid: function () {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
    }
    return guid;
  },
  /* add log information */
  writeLog: function (log) {
    if (!log) return;
    var text = fs.readFileSync(global.logFile, "utf-8"),
      _newLog = text ? (text + "\r\n" + log) : log;
    fs.writeFile(global.logFile, _newLog, function (err) {
      if (err) throw err;
    });
  }
};
exports.utils = utils;