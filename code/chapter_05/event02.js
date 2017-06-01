/**
 * EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
 * 对于每个事件，EventEmitter 支持 若干个事件监听器。
 * 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
 * 以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
 * 运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。
 *
 * Created by Admin on 2017/6/1.
 */
// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');