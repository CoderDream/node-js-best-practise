/**
 * Created by Admin on 2017/6/1.
 */
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;