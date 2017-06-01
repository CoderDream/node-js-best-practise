/**
 * Node.js 常用工具
 * util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能过于精简的不足。
 * util.inherits
 * util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。
 * JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
 * 在这里我们只介绍util.inherits 的用法，示例如下：
 * 我们定义了一个基础对象Base 和一个继承自Base 的Sub，Base 有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承。
 *
 * 注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
 * 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会报错
 *
 * Created by Admin on 2017/6/1.
 */
var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();

objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);
