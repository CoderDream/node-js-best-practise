/**
 * Node.js 全局对象
 * setInterval(cb, ms)
 * setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
 * 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
 * setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
 * 执行 main.js 文件，代码如下所示:
 * $ node main.js Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! ……
 * 以上程序每隔两秒就会输出一次"Hello, World!"，且会永久执行下去，直到你按下 ctrl + c 按钮。
 *
 * Created by Admin on 2017/6/1.
 */
function printHello(){
    console.log( "Hello, World!");
}

// 两秒后执行以上函数
setInterval(printHello, 2000);