/**
 * Node.js 常用工具
 * util.isArray(object)
 * 如果给定的参数 "object" 是一个数组返回true，否则返回false。
 *
 * Created by Admin on 2017/6/1.
 */
var util = require('util');

console.log(util.isArray([]));
// true
console.log(util.isArray(new Array));
// true
console.log(util.isArray({}));
// false
