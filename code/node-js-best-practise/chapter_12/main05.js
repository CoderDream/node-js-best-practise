/**
 * Node.js 常用工具
 * util.isDate(object)
 * 如果给定的参数 "object" 是一个日期返回true，否则返回false。
 *
 * Created by Admin on 2017/6/1.
 */
var util = require('util');

console.log(util.isDate(new Date()));
// true
console.log(util.isDate(Date()));
// false (without 'new' returns a String)
console.log(util.isDate({}));
// false