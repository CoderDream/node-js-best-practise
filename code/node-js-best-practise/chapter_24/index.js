/**
 * 在Nodejs中贯彻单元测试
 *  https://segmentfault.com/a/1190000004627859
 * 
 * Created by Admin on 2017/6/6.
 */
exports.limit = function (num) {
  if (num < 0) {
    return 0;
  }
  return num;
};