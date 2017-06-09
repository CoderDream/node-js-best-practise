/**
 * Node.js 函数
 * 在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
 * Node.js中函数的使用与Javascript类似，举例来说，你可以这样做：
 * 以上代码中，我们把 say 函数作为execute函数的第一个变量进行了传递。这里返回的不是 say 的返回值，而是 say 本身！
 * 这样一来， say 就变成了execute 中的本地变量 someFunction ，execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。
 * 当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。
 *
 * Created by Admin on 2017/6/1.
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");